import {createRequire} from 'node:module';
const require=createRequire(new URL('../render/package.json',import.meta.url)),QRCode=require('qrcode');
const web = value => { const s=String(value||'').trim();return /^www\./i.test(s)?'https://'+s:s; };

/** Resolve the editable HTML, including actual links and QR images, before a
 * screenshot. Reference PNGs are deliberately not used as configurable input. */
export async function configureEditorial(page, html, brand, jurisdiction, subRegion='national') {
  const tokens=brand.brandTokens(jurisdiction,subRegion);
  for(const key of ['PROGRAM_URL','HELPLINE_WEBSITE','CHAT_URL','LIMITS_URL','SELF_EXCLUSION_URL','EMAIL_PREFERENCES_URL'])tokens['{{'+key+'}}']=web(tokens['{{'+key+'}}']);
  tokens['{{TEXT_NUMBER}}']=String(tokens['{{TEXT_NUMBER}}']||'').replace(/^text\s+/i,'');
  await page.setContent(html,{waitUntil:'load'});
  const needed=await page.evaluate(()=>[...document.querySelectorAll('[data-qr-field]')].map(e=>e.getAttribute('data-qr-field')));
  const qrs={};
  for(const key of new Set(needed)){
    const value=tokens['{{'+key+'}}'];
    if(!/^https?:\/\/[^\s]+$/i.test(value||''))throw new Error(`Set ${key} to a complete web destination in _brand.yml.`);
    qrs[key]=await QRCode.toDataURL(value,{width:512,margin:4,errorCorrectionLevel:'M'});
  }
  const missing=await page.evaluate(({tokens,qrs})=>{
    const missing=new Set();
    const replace=s=>s.replace(/\{\{([A-Z_]+)\}\}/g,(token,key)=>{
      const value=tokens[token];if(value===undefined||!String(value).trim()||String(value).includes('{{')){missing.add(key);return token;}return String(value);
    });
    const program=replace('{{PROGRAM_SHORT_NAME}}');
    for(const identity of document.querySelectorAll('[data-source-identity],[data-program-identity]')){
      identity.replaceChildren(document.createTextNode(program));
    }
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
    while(node=walker.nextNode())if(!node.parentElement.closest('style,script,svg'))node.textContent=replace(node.textContent);
    for(const el of document.body.querySelectorAll('*'))for(const attr of [...el.attributes])if(attr.value.includes('{{'))el.setAttribute(attr.name,replace(attr.value));
    for(const el of document.querySelectorAll('[data-qr-field]')){
      const key=el.getAttribute('data-qr-field'),img=document.createElement('img');img.src=qrs[key];img.alt='Open '+tokens['{{'+key+'}}'];img.style.cssText='display:block;width:100%;height:100%;object-fit:contain';
      el.replaceChildren(img);el.style.cssText+=';padding:0;border:0;background:white';
    }
    document.title=document.title.replace('· Playbook','· '+program);
    return [...missing];
  },{tokens,qrs});
  if(missing.length)throw new Error('Complete these _brand.yml fields before exporting: '+missing.join(', '));
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  return '<!DOCTYPE html>\n'+await page.evaluate(()=>document.documentElement.outerHTML);
}
