import {previewScale} from '../template-system/export-quality.mjs';
import {inspectArtwork} from '../template-system/inspect.mjs';
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
const browser=await puppeteer.launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
const results=[];
try{
 for(const item of data.entries){
  const page=await browser.newPage(),errors=[];
  await page.setViewport({width:item.width,height:item.height,deviceScaleFactor:previewScale});
  await page.setRequestInterception(true);
  page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
  page.on('requestfailed',r=>errors.push('Resource failed: '+r.url()));
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(join(here,item.html)).href);
  await page.setContent(resolveBrandTokens(readFileSync(join(here,item.html),'utf8'),item.jurisdiction),{waitUntil:'load'});
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  const metrics=await page.evaluate(inspectArtwork,item);
  if(metrics.width!==item.width||metrics.height!==item.height)errors.push('Incorrect dimensions');
  await(await page.$('.specimen')).screenshot({path:join(here,item.png)});
  const issues=[...errors,...metrics.issues];const pngSha256=createHash('sha256').update(readFileSync(join(here,item.png))).digest('hex');
  if(item.comparisonId?item.side==='after':!item.id.startsWith('reference-')){
   const baseline=results.find(r=>r.id===(item.comparisonId?item.comparisonId+'-before':'reference-'+item.kind));
   const sameCopy=item.kind==='message'?JSON.stringify(baseline?.blockCopy)===JSON.stringify(metrics.blockCopy):baseline?.copy===metrics.copy;
   if(!sameCopy)issues.push('Copy differs from the shared reference');
  }
  results.push({id:item.id,...metrics,raster:{scale:previewScale,pixels:[metrics.width*previewScale,metrics.height*previewScale]},issues,pngSha256});console.log(item.id+': '+(issues.length?issues.join('; '):'PASS'));await page.close();
 }
}finally{await browser.close();}
writeFileSync(join(here,'validation.json'),JSON.stringify(results,null,2)+'\n');
if(results.some(r=>r.issues.length))process.exitCode=1;
