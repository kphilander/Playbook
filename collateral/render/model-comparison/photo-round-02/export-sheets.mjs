import puppeteer from 'puppeteer';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {here} from './common.mjs';
const browser=await puppeteer.launch({headless:true,args:['--no-sandbox']});
try{
 const page=await browser.newPage();await page.setViewport({width:2200,height:1000,deviceScaleFactor:1});
 await page.goto(pathToFileURL(join(here,'contact-sheet.html')).href,{waitUntil:'load',timeout:60000});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
 for(const sheet of await page.$$('.sheet')){
  const category=await sheet.evaluate(el=>el.dataset.category);await sheet.screenshot({path:join(here,`contact-sheet-${category}.png`)});console.log(`Exported ${category} sheet.`);
 }
}finally{await browser.close();}
