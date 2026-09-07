import {createRequire} from 'node:module';
import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {scenes} from './scenes.mjs';

const require=createRequire(new URL('../../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
const base='http://127.0.0.1:8765/collateral/',url=base+'campaign-concepts/photo-comparison/index.html',checks=[];
const record=(name,pass)=>{assert.ok(pass,name);checks.push({name,pass:true});};
const ready=page=>page.waitForFunction(()=>['a','b'].every(s=>document.getElementById('check-'+s).textContent==='Fit, assets and text contrast checked'));
try{
  const page=await browser.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,775,390]){
    await page.setViewport({width,height:1000});
    await page.goto(url,{waitUntil:'networkidle0'});
    await page.$$eval('img',async images=>{for(const img of images)await img.decode();});
    record(`All three photos load without horizontal overflow at ${width}px`,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth&&document.images.length===3&&[...document.images].every(i=>i.naturalWidth===3240&&i.naturalHeight===4050)));
    if(width!==775)await page.screenshot({path:`/tmp/playbook-photo-scenes-${width}.png`,fullPage:true});
  }
  await page.goto(base+'campaign-concepts/index.html',{waitUntil:'networkidle0'});
  await page.click('#campaign-cinema [data-choice="club"]');
  await page.goto(url,{waitUntil:'networkidle0'});
  await page.click('[data-choice="rest-dinner"]');
  await page.reload({waitUntil:'networkidle0'});
  record('A scene preference survives reload',await page.$eval('[data-choice="rest-dinner"]',b=>b.getAttribute('aria-pressed')==='true'));
  await page.click('[data-choice="rest-dinner"]');
  record('Selecting a scene again clears it',await page.$eval('[data-choice="rest-dinner"]',b=>b.getAttribute('aria-pressed')==='false'));
  await page.goto(base+'campaign-concepts/index.html',{waitUntil:'networkidle0'});
  record('Scene choices preserve earlier skin preferences',await page.$eval('#campaign-cinema [data-choice="club"]',b=>b.getAttribute('aria-pressed')==='true'));
  await page.goto(url,{waitUntil:'networkidle0'});
  const links=await page.$$eval('a.edit',as=>as.map(a=>a.href));
  await page.setViewport({width:1440,height:1080});
  for(const [i,link] of links.entries()){
    await page.goto(link,{waitUntil:'networkidle0'});await ready(page);
    record(`The ${scenes[i].short} edit link opens its actual photograph`,await page.$eval('#asset',e=>e.value)===scenes[i].id&&await page.$eval('#preview-a',f=>f.contentDocument.querySelector('[data-asset]').dataset.asset)===scenes[i].id);
    assert.equal(await page.$eval('#crop-y',e=>e.value),'50');
    await page.$eval('#crop-y',e=>{e.value='73';e.dispatchEvent(new Event('input',{bubbles:true}));});await ready(page);
    await page.reload({waitUntil:'networkidle0'});await ready(page);
    assert.equal(await page.$eval('#crop-y',e=>e.value),'73');
  }
  record('A different scene resets the crop while reloading the same scene preserves edits',true);
  await page.goto(base+'studio/index.html?template=campaign-nearmiss&asset=rest-dinner',{waitUntil:'networkidle0'});await ready(page);
  record('An incompatible asset link cannot add a photo to a graphic template',await page.$eval('#asset',e=>e.disabled)&&await page.$eval('#preview-a',f=>!f.contentDocument.querySelector('[data-asset]')));
  await page.goto(base+'studio/index.html?template=campaign-rest&asset=https%3A%2F%2Fexample.com%2Fimage.jpg',{waitUntil:'networkidle0'});await ready(page);
  record('Unregistered asset URLs are ignored',await page.$eval('#asset',e=>e.value)==='room-for-the-rest');
  for(const scene of scenes){
    const png=new URL(`renders/${scene.id}.png`,import.meta.url),bytes=readFileSync(png);
    assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],[3240,4050]);
    await page.goto(png.href);await page.$eval('img',i=>i.decode());
  }
  record('All three exported PNGs decode at the expected dimensions',true);
  record('No browser errors',errors.length===0);
}finally{await browser.close();writeFileSync(new URL('browser-validation.json',import.meta.url),JSON.stringify({checks},null,2)+'\n');}
console.log(`${checks.length} photo comparison checks passed.`);
