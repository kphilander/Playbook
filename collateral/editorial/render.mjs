import {createRequire} from 'node:module';
import {readFile,mkdir} from 'node:fs/promises';
const root=new URL('./',import.meta.url),require=createRequire(new URL('../render/package.json',root));
const manifest=JSON.parse(await readFile(new URL('manifest.json',root))),filters=process.argv.slice(2);
for(const slug of filters)if(!manifest.resources[slug])throw new Error('Unknown editorial item: '+slug);
const browser=await require('puppeteer').launch({headless:true});
try{
 const page=await browser.newPage();await mkdir(new URL('exports/',root),{recursive:true});
 await page.setRequestInterception(true);page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
 for(const [slug,r] of Object.entries(manifest.resources)){
  if(filters.length&&!filters.includes(slug))continue;
  await page.setViewport({width:r.width,height:r.height,deviceScaleFactor:1});
  await page.goto(new URL(r.files.html.path,root).href,{waitUntil:'load'});
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  const main=await page.$('main'),box=await main.boundingBox();
  if(Math.abs(box.width-r.width)>1||Math.abs(box.height-r.height)>2)throw new Error(`${slug}: HTML canvas no longer matches manifest`);
  await main.screenshot({path:new URL('exports/'+slug+'.png',root).pathname});console.log(slug+' · '+r.width+' × '+r.height);
 }
}finally{await browser.close();}
