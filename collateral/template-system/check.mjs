import {createRequire} from 'node:module';
import {writeFileSync} from 'node:fs';
import {templates,skins,createRecipe,renderArticle,renderDocument} from './engine.mjs';
import {loadResources} from './resources.mjs';
import {inspectArtwork} from './inspect.mjs';
const require=createRequire(new URL('../render/package.json',import.meta.url)),puppeteer=require('puppeteer');
const resources=loadResources(),base=new URL('./',import.meta.url).href,results=[];
const browser=await puppeteer.launch({headless:true,args:['--no-sandbox']});
try{
 const page=await browser.newPage();
 await page.setRequestInterception(true);page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
 for(const d of templates)for(const variant of d.variants||['before','after']){
   const baseline=renderArticle(createRecipe(d.id,{variant}),resources);
   for(const skin of skins){
     const r=createRecipe(d.id,{variant,skinId:skin.id});
     if(renderArticle(r,resources)!==baseline)throw new Error('Skin changed article markup.');
     await page.setViewport({width:d.width||1080,height:d.height||1350});
     await page.goto(base);await page.setContent(renderDocument(r,resources,{assetBase:base}),{waitUntil:'load'});
     await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
     const result=await page.evaluate(inspectArtwork,{readingFloor:d.tier===2?16:d.layout==='banner'?32:42});
     if(result.width!==(d.width||1080)||result.height!==(d.height||1350))result.issues.push('Format dimensions do not match the template profile.');
     results.push({template:d.id,variant,skin:skin.id,...result});
     if(result.issues.length)console.log(`${d.id}/${variant}/${skin.id}: ${result.issues.join('; ')}`);
   }
 }
 await page.close();
}finally{await browser.close();}
for(const d of templates)for(const skin of skins){
 const before=results.find(r=>r.template===d.id&&r.skin===skin.id&&r.variant==='before');
 const after=results.find(r=>r.template===d.id&&r.skin===skin.id&&r.variant==='after');
 if(before&&JSON.stringify(before.blockCopy)!==JSON.stringify(after.blockCopy))after.issues.push('Content block wording changed between compositions.');
}
writeFileSync(new URL('./validation.json',import.meta.url),JSON.stringify(results,null,2)+'\n');
const failures=results.filter(r=>r.issues.length);console.log(`${results.length} skin/template combinations; ${failures.length} require adjustment.`);
if(failures.length)process.exitCode=1;
