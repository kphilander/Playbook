import {createRequire} from 'node:module';
import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {restrainedFormats} from '../../template-system/campaign-formats.mjs';
import {inspectArtwork} from '../../template-system/inspect.mjs';

const require=createRequire(new URL('../../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
const base='http://127.0.0.1:8765/collateral/',url=base+'campaign-concepts/campaign-family/index.html',checks=[];
const media=JSON.parse(readFileSync(new URL('media.json',import.meta.url),'utf8'));
const record=(name,pass)=>{assert.ok(pass,name);checks.push({name,pass:true});};
const decode=page=>page.$$eval('img',async imgs=>{for(const img of imgs)await img.decode();});
const ready=page=>page.waitForFunction(()=>['a','b'].every(s=>document.getElementById('check-'+s).textContent==='Fit, assets and text contrast checked'));
try{
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,775,390]){
    await page.setViewport({width,height:1000});await page.goto(url,{waitUntil:'networkidle0'});await decode(page);
    record(`Three format previews load without overflow at ${width}px`,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth&&document.images.length===3&&[...document.images].every(i=>i.complete&&i.naturalWidth>2000)));
    if(width!==775)await page.screenshot({path:`/tmp/playbook-campaign-family-${width}.png`,fullPage:true});
  }
  await page.setViewport({width:1200,height:1000});
  for(const skin of ['club','circuit','playbook']){
    await page.click(`[data-skin="${skin}"]`);await decode(page);
    record(`All ${skin} previews and edit links match their format`,await page.$$eval('[data-format]',(formats,{skin,media})=>formats.every(f=>{const m=media[f.dataset.format+'-'+skin],i=f.querySelector('img'),edit=new URL(f.querySelector('.edit').href);return i.naturalWidth===m.pixels[0]&&i.naturalHeight===m.pixels[1]&&new URL(i.src).pathname.endsWith(new URL(m.png,location.href).pathname)&&f.querySelector('.artwork').href===f.querySelector('.png').href&&f.querySelector('.live').href.endsWith(f.dataset.format+'-'+skin+'.html')&&edit.searchParams.get('skin')===skin&&edit.searchParams.get('template')===m.templateId;}),{skin,media}));
    if(skin!=='playbook'){
      const style=await page.addStyleTag({content:'.format-grid .art-links,.format-grid .description,.format-grid .edit,.format-grid .feedback{display:none}'});
      await(await page.$('.format-grid')).screenshot({path:`/tmp/playbook-campaign-family-${skin}.png`});await style.evaluate(e=>e.remove());
    }
  }
  await page.goto(base+'campaign-concepts/brand-presence/index.html',{waitUntil:'networkidle0'});await page.click('[data-choice="quiet"]');
  await page.goto(url,{waitUntil:'networkidle0'});await page.click('#format-portrait [data-choice="keep"]');
  await page.click('[data-skin="club"]');await decode(page);await page.click('#format-portrait [data-choice="refine"]');
  await page.click('#format-story [data-choice="keep"]');await page.reload({waitUntil:'networkidle0'});
  record('Brand and per-format feedback survive reload',await page.$eval('[data-skin="club"]',b=>b.getAttribute('aria-pressed')==='true')&&await page.$eval('#format-portrait [data-choice="refine"]',b=>b.getAttribute('aria-pressed')==='true')&&await page.$eval('#format-story [data-choice="keep"]',b=>b.getAttribute('aria-pressed')==='true'));
  await page.click('[data-skin="playbook"]');
  record('Feedback is independent for each brand',await page.$eval('#format-portrait [data-choice="keep"]',b=>b.getAttribute('aria-pressed')==='true')&&await page.$eval('#format-story [data-choice="keep"]',b=>b.getAttribute('aria-pressed')==='false'));
  await page.click('#format-portrait [data-choice="keep"]');record('Selecting the same feedback again clears it',await page.$eval('#format-portrait [data-choice="keep"]',b=>b.getAttribute('aria-pressed')==='false'));
  await page.goto(base+'campaign-concepts/brand-presence/index.html',{waitUntil:'networkidle0'});
  record('Earlier brand-expression preferences remain selected',await page.$eval('[data-choice="quiet"]',b=>b.getAttribute('aria-pressed')==='true'));
  await page.goto(url,{waitUntil:'networkidle0'});const links=await page.$$eval('a.edit',as=>as.map(a=>a.href));
  await page.setViewport({width:1440,height:1080});
  for(const [i,link] of links.entries()){
    await page.goto(link,{waitUntil:'networkidle0'});await ready(page);
    const f=restrainedFormats[i];
    record(`${f.label} opens the correct dimensions, crop and restrained expression`,await page.$eval('#template',e=>e.value)===f.templateId&&await page.$eval('#variant',e=>e.value)==='quiet'&&await page.$eval('#crop-y',e=>e.value)===(f.id==='landscape'?'85':'50')&&await page.$eval('#preview-a',(frame,f)=>{const b=frame.contentDocument.querySelector('.specimen').getBoundingClientRect();return b.width===f.width&&b.height===f.height;},f));
  }
  const before=await page.$eval('#preview-a',f=>f.contentDocument.querySelector('.specimen').outerHTML);
  await page.select('#skin-a','circuit');await ready(page);
  record('A format can be reskinned without changing its article markup',before===await page.$eval('#preview-a',f=>f.contentDocument.querySelector('.specimen').outerHTML));
  await page.goto(base+'campaign-concepts/campaign-family/renders/story-playbook.html');await decode(page);await page.evaluate(()=>document.fonts.ready);
  record('Story content stays inside the intended top and bottom insets',await page.$$eval('[data-block]',els=>els.every(e=>{const r=e.getBoundingClientRect();return r.top>=180&&r.bottom<=1700;})));
  await page.goto(base+'campaign-concepts/campaign-family/renders/landscape-playbook.html');await decode(page);await page.evaluate(()=>document.fonts.ready);
  record('Text in the landscape reading column passes its actual solid-background contrast',!(await page.evaluate(inspectArtwork,{readingFloor:42})).issues.length);
  await page.$eval('.mc-copy',e=>e.style.color=getComputedStyle(document.querySelector('.specimen')).backgroundColor);
  record('Low-contrast type outside the photo is rejected',(await page.evaluate(inspectArtwork,{readingFloor:42})).issues.some(i=>i.includes('contrast below')));
  await page.$eval('.mc-copy',e=>{e.style.color='';e.style.left='1000px';});
  record('Moving middle copy into the photo restores the photo reading-area guard',(await page.evaluate(inspectArtwork,{readingFloor:42})).issues.some(i=>i.includes('protected photo')));
  for(const m of Object.values(media)){const bytes=readFileSync(new URL(m.png,new URL('./',import.meta.url)));assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],m.pixels);}
  record('All nine PNG links point to the promised output dimensions',true);
  record('No browser errors',errors.length===0);
}finally{await browser.close();writeFileSync(new URL('browser-validation.json',import.meta.url),JSON.stringify({checks},null,2)+'\n');}
console.log(`${checks.length} campaign family browser checks passed.`);
