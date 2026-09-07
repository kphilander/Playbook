import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {inspectText} from '../../text-surfaces/inspect.mjs';
const root=new URL('./',import.meta.url),require=createRequire(new URL('../../render/package.json',root));
const manifest=JSON.parse(readFileSync(new URL('manifest.json',root))),reports=JSON.parse(readFileSync(new URL('validation.json',root)));
const digest=bytes=>createHash('sha256').update(bytes).digest('hex'),checks=[];
assert.equal(reports.length,74);
assert.equal(digest(readFileSync(new URL('input/brand-inject.css',root))),manifest.inputHashes.css);
assert.equal(digest(readFileSync(new URL('input/brand-canada.yml',root))),manifest.inputHashes.yaml);
for(const r of reports){
  assert.ok(existsSync(new URL(r.before,root)),r.id+' Playbook comparison exists');
  assert.equal(digest(readFileSync(new URL('renders/'+r.id+'.png',root))),r.pngSha256,r.id+' raster matches report');
  assert.deepEqual(r.layoutIssues,[],r.id+' fits');assert.deepEqual(r.contrast.issues,[],r.id+' contrast');
  assert.ok(r.checks.headingFontLoaded&&r.checks.logoCount&&r.checks.phonePresent&&r.checks.mandatoryCount===1,r.id+' brand and region');
}
const browser=await require('puppeteer').launch({headless:'shell',args:['--no-sandbox']});
try{
  const page=await browser.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const failed=[];
  // Switching filters removes image nodes and may cancel their requests.
  page.on('requestfailed',r=>{if(r.failure()?.errorText!=='net::ERR_ABORTED')failed.push(r.url());});
  page.on('response',r=>{if(r.status()>=400)failed.push(r.url()+' · '+r.status());});
  // Load serialized portable output, not the builder's in-memory document.
  for(const item of manifest.items){
    await page.setViewport({width:item.category==='Email'?600:2400,height:2700});
    await page.goto(new URL('live/'+item.id+'.html',root).href,{waitUntil:'load'});
    await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
    const metrics=await page.evaluate(inspectText,item.selector);
    assert.deepEqual(metrics.issues,[],item.id+' portable layout');
    const asset=await page.$eval(item.selector,e=>{
      const family=getComputedStyle(e).getPropertyValue('--pb-font-heading').trim().split(',')[0].replaceAll(/["']/g,'');
      return {font:[...document.fonts].some(f=>f.family.replaceAll(/["']/g,'')===family&&f.status==='loaded'),logos:e.querySelectorAll('.pb-replacement-logo').length,js:document.scripts.length};
    });
    assert.ok(asset.font&&asset.logos,item.id+' imported assets loaded');assert.equal(asset.js,0,item.id+' static HTML');
    checks.push({id:item.id,check:'portable-live-html',pass:true});
  }
  for(const item of manifest.items.filter(i=>i.category==='Email'))for(const width of [320,375,600]){
    await page.setViewport({width,height:2400});
    await page.goto(new URL('live/'+item.id+'.html',root).href,{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
    const metrics=await page.evaluate(inspectText,item.selector);
    assert.deepEqual(metrics.issues,[],item.id+' email '+width);assert.ok(metrics.width<=width,item.id+' email no horizontal overflow');
    checks.push({id:item.id,check:'email-'+width,pass:true});
  }
  // Exercise a browser font fallback without changing the source assets.
  await page.setViewport({width:320,height:2400});
  for(const id of ['email-welcome-7a--flat','email-reactivation-7d--flat']){
    await page.goto(new URL('live/'+id+'.html',root).href,{waitUntil:'load'});
    await page.addStyleTag({content:':root{--pb-font-heading:Arial,sans-serif;--pb-font-body:Arial,sans-serif;--pb-font-mono:monospace}'});
    const metrics=await page.evaluate(inspectText,'.email');assert.deepEqual(metrics.issues,[],id+' fallback');
    checks.push({id,check:'email-320-fallback',pass:true});
  }
  const url='http://127.0.0.1:8765/collateral/brand-trials/gamesense/index.html';
  await page.setViewport({width:1360,height:1000});await page.goto(url,{waitUntil:'networkidle0'});
  await page.waitForSelector('.example');
  assert.equal(await page.$$eval('.example',e=>e.length),4,'four earlier favorites');
  await page.click('[data-group="text"]');assert.equal(await page.$$eval('.example',e=>e.length),71);
  await page.select('#surface','paper');assert.equal(await page.$$eval('.example',e=>e.length),9);
  await page.select('#category','Stories');assert.equal(await page.$$eval('.example',e=>e.length),3);
  await page.click('[data-group="photo"]');assert.equal(await page.$$eval('.example',e=>e.length),3);
  await page.click('[data-group="favorites"]');await page.click('#compare');assert.ok(await page.$eval('#gallery',e=>e.classList.contains('single')));
  await page.click('#compare');
  await page.click('.example [data-choice="keep"]');
  await page.reload({waitUntil:'networkidle0'});
  assert.equal(await page.$eval('.example [data-choice="keep"]',e=>e.getAttribute('aria-pressed')),'true','feedback survives reload');
  await page.click('.example [data-choice="keep"]');
  await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
  await page.screenshot({path:new URL('review-desktop.png',root).pathname});
  checks.push({check:'review-filters-and-preferences',pass:true});
  for(const width of [375,768]){
    await page.setViewport({width,height:900});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'gallery no horizontal overflow at '+width);
    checks.push({check:'review-'+width,pass:true});
  }
  assert.deepEqual(errors,[],'no browser errors');assert.deepEqual(failed,[],'no failed asset requests');
}finally{await browser.close();}
writeFileSync(new URL('browser-validation.json',root),JSON.stringify(checks,null,2)+'\n');
console.log(checks.length+' browser checks passed.');
