import {createRequire} from 'node:module';
import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {checkContrast} from './contrast.mjs';

const require=createRequire(new URL('../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',args:['--no-sandbox']});
const reports=JSON.parse(readFileSync(new URL('validation.json',import.meta.url))),checks=[];
const base='http://127.0.0.1:8765/collateral/text-polish/';
const record=(name,pass)=>{assert.ok(pass,name);checks.push({name,pass:true});};
try{
 const p=await browser.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));
 for(const width of [1440,775,390]){
  await p.setViewport({width,height:1000});await p.goto(base,{waitUntil:'networkidle0'});
  await p.waitForFunction(()=>[...document.querySelector('.pair').querySelectorAll('img')].every(i=>i.complete&&i.naturalWidth));
  record(`Review fits ${width}px with 26 comparisons`,await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth&&document.querySelectorAll('.comparison').length===26));
  if(width===390)record('Mobile comparisons stack at a readable width',await p.$eval('.pair',e=>e.children[1].getBoundingClientRect().top>e.children[0].getBoundingClientRect().bottom));
 }
 await p.setViewport({width:1400,height:1100});await p.goto(base,{waitUntil:'networkidle0'});
 for(const category of [...new Set(reports.map(r=>r.category))]){
  await p.click(`[data-filter="${category}"]`);
  record(`${category} filter shows the correct templates`,await p.$$eval('.comparison:not([hidden])',(es,c)=>es.length>0&&es.every(e=>e.dataset.category===c),category));
 }
 await p.click('[data-filter="all"]');
 await p.click('#card-1a-hot-streak [data-choice="keep"]');await p.click('#card-1b-due-for-win [data-choice="refine"]');await p.reload({waitUntil:'networkidle0'});
 record('Per-template preferences survive reload',await p.$eval('#card-1a-hot-streak [data-choice="keep"]',e=>e.getAttribute('aria-pressed')==='true')&&await p.$eval('#card-1b-due-for-win [data-choice="refine"]',e=>e.getAttribute('aria-pressed')==='true'));
 await p.click('#card-1a-hot-streak [data-choice="keep"]');record('Clicking a selected choice clears it',await p.$eval('#card-1a-hot-streak [data-choice="keep"]',e=>e.getAttribute('aria-pressed')==='false'));
 await p.addStyleTag({content:'#card-1a-hot-streak .actions{display:none}'});await(await p.$('#card-1a-hot-streak')).screenshot({path:new URL('overview.png',import.meta.url).pathname});
 for(const report of reports){
  await p.setViewport({width:report.category==='Email'?600:report.dimensions[0],height:Math.min(report.dimensions[1],2700)});
  await p.goto(base+'live/'+report.id+'.html',{waitUntil:'load'});await p.evaluate(()=>document.fonts.ready);
  record(`${report.id} live artwork loads with resolved copy and readable contrast`,await p.evaluate(()=>!document.body.innerText.includes('{{')&&!!document.querySelector('.pb-text-polish'))&&!(await p.evaluate(checkContrast,'.pb-text-polish')).issues.length);
  const bytes=readFileSync(new URL('../render/'+report.id+'.png',import.meta.url));assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],report.pixels);
 }
 record('All 26 PNGs have the promised native render dimensions',true);
 for(const id of ['card-1a-hot-streak','story-3a-hot-streak','poster-4a-know-your-game','rack-card-5a','email-welcome-7a','htp-card-blackjack']){
  await p.goto(base+'live/'+id+'.html');await p.evaluate(()=>document.fonts.ready);
  const original=await p.$eval('.pb-text-polish',e=>e.innerHTML);
  await p.addStyleTag({content:'.pb-text-polish{--pb-color-primary:#153C36;--pb-color-secondary:#D9EFB2;--pb-font-heading:"Source Sans 3"}'});
  record(`${id} can change brand colors and heading font through CSS`,await p.$eval('.pb-text-polish',(e,original)=>e.innerHTML===original&&getComputedStyle(e).getPropertyValue('--pb-color-primary').trim()==='#153C36'&&getComputedStyle(e.querySelector('.card-logo,.story-logo,.poster-logo,.hero-logo')).fontFamily.includes('Source Sans 3'),original));
 }
 await p.goto(base+'live/card-1a-hot-streak.html');await p.$eval('.fact-statement',e=>e.style.color=getComputedStyle(document.querySelector('.pb-text-polish')).backgroundColor);
 record('The contrast audit rejects unreadable body copy',(await p.evaluate(checkContrast,'.pb-text-polish')).issues.length>0);
 record('No browser errors',!errors.length);
}finally{await browser.close();writeFileSync(new URL('browser-validation.json',import.meta.url),JSON.stringify(checks,null,2)+'\n');}
console.log(checks.length+' text-polish browser checks passed.');
