import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,mkdtempSync,readdirSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
import {inspectArtwork} from '../template-system/inspect.mjs';
import {validateRecipe,createRecipe} from '../template-system/engine.mjs';
import {campaigns} from '../template-system/campaigns.mjs';
import {treatmentsFor} from './review-config.mjs';
import {inspectRasterDensity,parseRasterScale} from '../template-system/export-quality.mjs';

const require=createRequire(new URL('../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
const base=process.argv[2]||'http://127.0.0.1:8765/collateral/',checks=[];
const record=(name,pass)=>{assert.ok(pass,name);checks.push({name,pass:true});};
const ready=page=>page.waitForFunction(()=>['a','b'].every(s=>document.getElementById('check-'+s).textContent==='Fit, assets and text contrast checked'));
const imageCount=campaigns.reduce((n,d)=>n+treatmentsFor(d).length,1);
try{
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,775,390]){
    await page.setViewport({width,height:1000});
    await page.goto(base+'campaign-concepts/index.html',{waitUntil:'networkidle0'});
    // Check gallery loading here; decode full-resolution PNGs individually
    // below instead of requesting 19 large decoded bitmaps simultaneously.
    await page.$$eval('img',images=>images.forEach(i=>i.loading='eager'));
    await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
    record(`All ${imageCount} review images load without horizontal overflow at ${width}px`,await page.evaluate(count=>document.documentElement.scrollWidth<=innerWidth&&[...document.images].filter(i=>i.complete&&i.naturalWidth).length===count,imageCount));
  }
  await page.click('#campaign-cinema [data-choice="club"]');
  await page.reload({waitUntil:'networkidle0'});
  record('A campaign preference survives reload',await page.$eval('#campaign-cinema [data-choice="club"]',b=>b.getAttribute('aria-pressed')==='true'));
  await page.click('#campaign-cinema [data-choice="club"]');
  record('Selecting the same preference clears it',await page.$eval('#campaign-cinema [data-choice="club"]',b=>b.getAttribute('aria-pressed')==='false'));
  record('Review choices do not create studio or older-gallery storage',await page.evaluate(()=>Object.keys(localStorage).every(k=>k==='playbook-campaign-preferences-v1')));
  await page.click('#campaign-rest [data-choice="playbook"]');
  await page.click('#campaign-pause [data-choice="circuit"]');
  await page.reload({waitUntil:'networkidle0'});
  record('A new Playbook choice and an earlier favorite persist independently',await page.$eval('#campaign-rest [data-choice="playbook"]',e=>e.getAttribute('aria-pressed')==='true')&&await page.$eval('#campaign-pause [data-choice="circuit"]',e=>e.getAttribute('aria-pressed')==='true'));
  await page.setViewport({width:1440,height:1080});
  await page.goto(base+'studio/index.html?template=campaign-pause&skin=club&compare=circuit',{waitUntil:'networkidle0'});await ready(page);
  record('Concept link opens the requested two CSS treatments',await page.$eval('#skin-a',e=>e.value)==='club'&&await page.$eval('#skin-b',e=>e.value)==='circuit');
  record('New template exposes only its real composition',await page.$eval('#variant',e=>e.disabled&&e.options.length===1&&e.value==='after'));
  await page.evaluate(()=>{window.savedCampaignArticle=document.getElementById('preview-a').contentDocument.querySelector('.specimen');window.savedCampaignImage=window.savedCampaignArticle.querySelector('img');window.savedCampaignMarkup=window.savedCampaignArticle.outerHTML;});
  await page.select('#skin-a','circuit');await ready(page);
  record('Campaign CSS swap preserves every article and image node',await page.evaluate(()=>{const node=document.getElementById('preview-a').contentDocument.querySelector('.specimen');return node===window.savedCampaignArticle&&node.querySelector('img')===window.savedCampaignImage&&node.outerHTML===window.savedCampaignMarkup;}));
  const downloads=mkdtempSync(join(tmpdir(),'playbook-campaign-')),cdp=await page.createCDPSession();
  await cdp.send('Browser.setDownloadBehavior',{behavior:'allow',downloadPath:downloads});
  await page.click('#export-html');await page.waitForFunction(()=>document.getElementById('action-status').textContent.startsWith('Self-contained HTML saved'));
  for(let i=0;i<50&&!readdirSync(downloads).some(f=>f.endsWith('.html'));i++)await new Promise(resolve=>setTimeout(resolve,100));
  const name=readdirSync(downloads).find(f=>f.endsWith('.html'));record('Campaign HTML export is downloaded',!!name);
  const html=readFileSync(join(downloads,name),'utf8');
  record('Portable export includes campaign CSS, the photo, fonts and recipe',!html.includes('<link')&&html.includes('--photo-top-alpha')&&html.includes('data:image/jpeg')&&html.includes('creative-recipe'));
  const art=await browser.newPage(),requests=[];await art.setViewport({width:1080,height:1350});await art.setRequestInterception(true);art.on('request',r=>{if(/^(file:|data:|about:)/.test(r.url()))r.continue();else{requests.push(r.url());r.abort();}});
  await art.goto(pathToFileURL(join(downloads,name)).href,{waitUntil:'load'});await art.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  const result=await art.evaluate(inspectArtwork,{readingFloor:42});
  record('Offline campaign export fits and passes photo contrast without network',requests.length===0&&result.issues.length===0&&await art.$eval('img',i=>i.naturalWidth===1856));
  await art.addStyleTag({content:'.message-concept.mc-campaign-pause{--photo-top-alpha:.05}'});
  const badContrast=await art.evaluate(inspectArtwork,{readingFloor:42});
  record('An insufficient photo shadow fails contrast checks',badContrast.issues.some(i=>i.startsWith('Text contrast below')));
  await art.addStyleTag({content:'.message-concept.mc-campaign-pause{--photo-top-alpha:.74}.mc-campaign-pause h1{top:570px}'});
  const badArea=await art.evaluate(inspectArtwork,{readingFloor:42});
  record('Moving text into the clear photo area fails validation',badArea.issues.some(i=>i.startsWith('Text leaves the protected photo')));
  await art.goto(new URL('renders/campaign-probability-club.html',import.meta.url).href);
  record('Probability graphic has exactly 16 outcomes and one selected outcome',await art.$$eval('.campaign-outcomes circle',es=>es.length)===16&&await art.$$eval('.campaign-outcomes .winning',es=>es.length)===1);
  await art.goto(new URL('renders/campaign-zero-playbook.html',import.meta.url).href);
  const wheels=await art.$$eval('.wheel-study',es=>es.map(e=>({count:e.querySelectorAll('circle').length,zeros:e.querySelectorAll('.zero-pocket').length,edge:e.querySelector('.wheel-edge').textContent})));
  record('Roulette diagrams show 37/38 pockets, one/two zeros, and the correct straight-up house edges',JSON.stringify(wheels)===JSON.stringify([{count:37,zeros:1,edge:'2.70%'},{count:38,zeros:2,edge:'5.26%'}]));
  await art.goto(new URL('renders/campaign-rest-playbook.html',import.meta.url).href);
  await art.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  const native=await art.evaluate(inspectRasterDensity,3);
  record('New full-bleed photograph has native detail for a 3× crop',native.length===1&&!native[0].upsampled&&native[0].sourcePixels[0]===3712&&native[0].sourcePixels[1]===4608);
  await art.goto(new URL('renders/campaign-pause-club.html',import.meta.url).href);
  await art.evaluate(async()=>{await Promise.all([...document.images].map(i=>i.decode()));});
  record('Density inspection identifies source limits in earlier 2K photography',(await art.evaluate(inspectRasterDensity,3))[0].upsampled);
  for(const d of campaigns)for(const skin of treatmentsFor(d)){
    const url=new URL(`renders/${d.id}-${skin.id}.png`,import.meta.url),png=readFileSync(url);
    assert.equal(png.readUInt32BE(16),3240);assert.equal(png.readUInt32BE(20),4050);
    await art.goto(url.href,{waitUntil:'load'});
    await art.$eval('img',i=>i.decode());
  }
  record('Every campaign PNG decodes individually and contains 3240 × 4050 pixels',true);
  for(const scale of [0,5,1.5,'nope'])assert.throws(()=>parseRasterScale(scale));
  record('Invalid raster scales are rejected before rendering',true);
  assert.throws(()=>validateRecipe({...createRecipe('campaign-pause'),variant:'before'}));record('Recipes reject an unavailable reference composition',true);
  record('No browser errors',errors.length===0);
}finally{await browser.close();writeFileSync(new URL('browser-validation.json',import.meta.url),JSON.stringify({checks},null,2)+'\n');}
console.log(`${checks.length} campaign review, editing, export and photo contrast checks passed.`);
