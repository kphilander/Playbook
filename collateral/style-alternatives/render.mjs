import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { resolveBrandTokens } from '../../lib/resolve-placeholders.mjs';
const here=dirname(fileURLToPath(import.meta.url));
const require=createRequire(new URL('../render/package.json',import.meta.url));
const puppeteer=require('puppeteer');
const data=JSON.parse(readFileSync(join(here,'manifest.json'),'utf8'));
const browser=await puppeteer.launch({headless:true,args:['--no-sandbox']});
const results=[];
try{
 for(const item of data.entries){
  const page=await browser.newPage(),errors=[];
  await page.setViewport({width:item.width,height:item.height,deviceScaleFactor:1});
  await page.setRequestInterception(true);
  page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
  page.on('requestfailed',r=>errors.push('Resource failed: '+r.url()));
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(join(here,'masters/')).href);
  await page.setContent(resolveBrandTokens(readFileSync(join(here,item.html),'utf8')),{waitUntil:'load'});
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  const metrics=await page.evaluate(kind=>{
   const root=document.querySelector('.specimen'),box=root.getBoundingClientRect(),issues=[];
   const visible=r=>r.width>0&&r.height>0;
   const overlaps=(a,b)=>a.left<b.right-2&&a.right>b.left+2&&a.top<b.bottom-2&&a.bottom>b.top+2;
   const floor=kind==='support'?16:42;
   const colors=new Map();
   const rgb=s=>s.match(/[\d.]+/g)?.map(Number);
   const luminance=c=>c.slice(0,3).map(x=>x/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((a,x,i)=>a+x*[.2126,.7152,.0722][i],0);
   const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
   while(walk.nextNode()){
    const node=walk.currentNode,p=node.parentElement,text=node.textContent.trim();
    if(!text||p.closest('svg,style,[aria-hidden="true"]'))continue;
    const cs=getComputedStyle(p),range=document.createRange();range.selectNodeContents(node);
    const rects=[...range.getClientRects()].filter(visible);if(!rects.length||cs.visibility==='hidden'||cs.display==='none')continue;
    const size=parseFloat(cs.fontSize);if(size<floor)issues.push('Below reading floor: '+text);
    for(const r of rects){if(r.left<box.left-2||r.right>box.right+2||r.top<box.top-2||r.bottom>box.bottom+2)issues.push('Outside artboard: '+text);for(let a=p;a&&a!==root;a=a.parentElement){const ac=getComputedStyle(a),ar=a.getBoundingClientRect();if(/hidden|clip/.test(ac.overflowX+ac.overflowY)&&(r.left<ar.left-2||r.right>ar.right+2||r.top<ar.top-size*.25||r.bottom>ar.bottom+size*.25))issues.push('Clipped: '+text);}}
    let bg,ancestor=p;while(ancestor){const c=rgb(getComputedStyle(ancestor).backgroundColor);if(c&&c.length>=3&&(c.length<4||c[3]===1)){bg=c;break;}ancestor=ancestor.parentElement;}
    const fg=rgb(cs.color);if(bg&&fg){const a=luminance(fg),b=luminance(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);const key=cs.color+' on '+getComputedStyle(ancestor).backgroundColor;colors.set(key,+ratio.toFixed(2));if(ratio<4.5)issues.push('Text contrast below 4.5: '+text+' ('+ratio.toFixed(2)+')');}
   }
   const blocks=kind==='support'?['.spec-header','.support-symbol','h1','.support-intro','.contact-panel','.support-note','.support-footer']:['.spec-header','h1','.intro','.ledger','.photo-frame','.takeaway','.spec-action','.spec-footer'];
   const elements=blocks.map(s=>root.querySelector(s)).filter(Boolean);
   for(let i=0;i<elements.length;i++)for(let j=i+1;j<elements.length;j++)if(overlaps(elements[i].getBoundingClientRect(),elements[j].getBoundingClientRect()))issues.push('Content overlap: '+elements[i].className+' / '+elements[j].className);
   if(root.innerText.includes('{{'))issues.push('Unresolved brand token');
   const h=getComputedStyle(root.querySelector('h1'));if(!document.fonts.check(h.fontWeight+' '+h.fontSize+' '+h.fontFamily.split(',')[0]))issues.push('Display font unavailable');
   return{width:box.width,height:box.height,issues:[...new Set(issues)],contrastPairs:Object.fromEntries(colors)};
  },item.kind);
  if(metrics.width!==item.width||metrics.height!==item.height)errors.push('Incorrect dimensions');
  await(await page.$('.specimen')).screenshot({path:join(here,item.png)});
  const issues=[...errors,...metrics.issues];const pngSha256=createHash('sha256').update(readFileSync(join(here,item.png))).digest('hex');
  results.push({id:item.id,...metrics,issues,pngSha256});console.log(item.id+': '+(issues.length?issues.join('; '):'PASS'));await page.close();
 }
}finally{await browser.close();}
writeFileSync(join(here,'validation.json'),JSON.stringify(results,null,2)+'\n');
if(results.some(r=>r.issues.length))process.exitCode=1;
