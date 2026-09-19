import {createRequire} from 'node:module';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import {loadBrand} from '../../lib/brand-config.mjs';
import {configureEditorial} from './configure.mjs';
const root=new URL('./',import.meta.url),require=createRequire(new URL('../render/package.json',root));
const args=process.argv.slice(2),option=(name,fallback)=>args.find(a=>a.startsWith('--'+name+'='))?.split('=').slice(1).join('=')||fallback;
const reference=args.includes('--reference'),filters=args.filter(a=>!a.startsWith('--'));
for(const arg of args.filter(a=>a.startsWith('--')))if(!/^--(?:reference$|brand=|jurisdiction=|sub-region=|out=)/.test(arg))throw new Error('Unknown option: '+arg);
const manifest=JSON.parse(await readFile(new URL('manifest.json',root)));
for(const slug of filters)if(!manifest.resources[slug])throw new Error('Unknown editorial item: '+slug);
const brand=reference?null:loadBrand(option('brand',undefined));
let jurisdiction=option('jurisdiction',brand?.meta?.primary_jurisdictions?.[0]||'default'),subRegion=option('sub-region','national');
if(brand&&!brand.helplines?.[jurisdiction])for(const country of Object.keys(brand.helplines||{})){
  if(jurisdiction.startsWith(country+'-')){subRegion=option('sub-region',jurisdiction.slice(country.length+1));jurisdiction=country;break;}
}
const output=resolve(option('out',new URL('exports/',root).pathname));
const browser=await require('puppeteer').launch({headless:true});
try{
 const page=await browser.newPage();await mkdir(output,{recursive:true});
 await page.setRequestInterception(true);page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
 for(const [slug,r] of Object.entries(manifest.resources)){
  if(filters.length&&!filters.includes(slug))continue;
  await page.setViewport({width:r.width,height:r.height,deviceScaleFactor:1});
  const html=await readFile(new URL(r.files.html.path,root),'utf8');
  if(reference)await page.setContent(html,{waitUntil:'load'});
  else await configureEditorial(page,html,brand,jurisdiction,subRegion);
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  const main=await page.$('main'),box=await main.boundingBox();
  if(Math.abs(box.width-r.width)>1||Math.abs(box.height-r.height)>2)throw new Error(`${slug}: configured HTML no longer fits the native canvas; shorten the entered fields.`);
  await writeFile(resolve(output,slug+'.html'),'<!DOCTYPE html>\n'+await page.evaluate(()=>document.documentElement.outerHTML));
  await writeFile(resolve(output,slug+'.txt'),await page.$eval('main',e=>e.innerText));
  await main.screenshot({path:resolve(output,slug+'.png')});console.log(slug+' · '+r.width+' × '+r.height+(reference?' · reference':' · '+jurisdiction));
 }
}finally{await browser.close();}
