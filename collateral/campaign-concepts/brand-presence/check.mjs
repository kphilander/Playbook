import {createRequire} from 'node:module';
import {writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {inspectArtwork} from '../../template-system/inspect.mjs';
import {presenceTreatments} from '../../template-system/brand-presence.mjs';

const require=createRequire(new URL('../../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
const base='http://127.0.0.1:8765/collateral/',url=base+'campaign-concepts/brand-presence/index.html',checks=[];
const record=(name,pass)=>{assert.ok(pass,name);checks.push({name,pass:true});};
const ready=page=>page.waitForFunction(()=>['a','b'].every(s=>document.getElementById('check-'+s).textContent==='Fit, assets and text contrast checked'));
const decode=page=>page.$$eval('img',async imgs=>{for(const img of imgs)await img.decode();});
try{
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,775,390]){
    await page.setViewport({width,height:1000});await page.goto(url,{waitUntil:'networkidle0'});await decode(page);
    record(`Three sharp covers without horizontal overflow at ${width}px`,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth&&document.images.length===3&&[...document.images].every(i=>i.naturalWidth===3240&&i.naturalHeight===4050)));
    if(width!==775)await page.screenshot({path:`/tmp/playbook-brand-presence-${width}.png`,fullPage:true});
  }
  for(const skin of ['club','circuit','playbook']){
    await page.click(`[data-skin="${skin}"]`);await decode(page);
    record(`The ${skin} preview updates all artwork, live links and studio links`,await page.$$eval('[data-treatment]',(figs,skin)=>figs.every(f=>f.querySelector('img').src.includes('-'+skin+'.png')&&f.querySelector('.artwork').href===f.querySelector('.png').href&&f.querySelector('.live').href.endsWith('-'+skin+'.html')&&new URL(f.querySelector('.edit').href).searchParams.get('skin')===skin),skin));
  }
  await page.goto(base+'campaign-concepts/photo-comparison/index.html',{waitUntil:'networkidle0'});await page.click('[data-choice="rest-dinner"]');
  await page.goto(url,{waitUntil:'networkidle0'});await page.click('[data-choice="after"]');await page.reload({waitUntil:'networkidle0'});
  record('The expression choice survives reload',await page.$eval('[data-choice="after"]',b=>b.getAttribute('aria-pressed')==='true'));
  await page.click('[data-choice="after"]');record('Choosing the same expression again clears it',await page.$eval('[data-choice="after"]',b=>b.getAttribute('aria-pressed')==='false'));
  await page.goto(base+'campaign-concepts/photo-comparison/index.html',{waitUntil:'networkidle0'});
  record('Earlier photo preferences remain selected',await page.$eval('[data-choice="rest-dinner"]',b=>b.getAttribute('aria-pressed')==='true'));
  await page.goto(url,{waitUntil:'networkidle0'});const links=await page.$$eval('a.edit',as=>as.map(a=>a.href));
  await page.setViewport({width:1440,height:1080});
  for(const [i,link] of links.entries()){
    await page.goto(link,{waitUntil:'networkidle0'});await ready(page);
    record(`The ${presenceTreatments[i].short} link opens the correct expression and photograph`,await page.$eval('#variant',e=>e.value)===presenceTreatments[i].id&&await page.$eval('#asset',e=>e.value)==='rest-dinner'&&await page.$eval('#preview-a',(f,id)=>f.contentDocument.querySelector('.specimen').classList.contains(id),presenceTreatments[i].id));
  }
  const articleBefore=await page.$eval('#preview-a',f=>f.contentDocument.querySelector('.specimen').outerHTML);
  await page.select('#skin-a','circuit');await ready(page);
  record('Changing the operator skin preserves the entire article',articleBefore===await page.$eval('#preview-a',f=>f.contentDocument.querySelector('.specimen').outerHTML));
  await page.select('#variant','quiet');await ready(page);
  record('The studio can change expression independently of the operator skin',await page.$eval('#skin-a',e=>e.value)==='circuit'&&await page.$eval('#preview-a',f=>f.contentDocument.querySelector('.specimen').classList.contains('quiet')));
  await page.goto(base+'campaign-concepts/brand-presence/renders/bold-playbook.html');await decode(page);await page.evaluate(()=>document.fonts.ready);
  record('An opaque foreground masthead passes its actual color contrast',!(await page.evaluate(inspectArtwork,{readingFloor:42})).issues.length);
  await page.$eval('h1',h=>h.style.color=getComputedStyle(document.querySelector('.presence-masthead')).backgroundColor);
  record('Low-contrast type on the masthead is rejected',(await page.evaluate(inspectArtwork,{readingFloor:42})).issues.some(i=>i.includes('contrast below')));
  await page.$eval('h1',h=>h.style.color='');await page.$eval('.presence-masthead',s=>s.style.background='transparent');
  record('A transparent masthead cannot bypass the photo checks',(await page.evaluate(inspectArtwork,{readingFloor:42})).issues.some(i=>i.includes('contrast below')||i.includes('protected photo')));
  await page.$eval('.presence-masthead',s=>s.style.background='');await page.$eval('h1',h=>h.style.top='470px');
  record('Text outside the solid masthead is rejected',(await page.evaluate(inspectArtwork,{readingFloor:42})).issues.some(i=>i.includes('protected photo')));
  record('No browser errors',errors.length===0);
}finally{await browser.close();writeFileSync(new URL('browser-validation.json',import.meta.url),JSON.stringify({checks},null,2)+'\n');}
console.log(`${checks.length} brand presence browser checks passed.`);
