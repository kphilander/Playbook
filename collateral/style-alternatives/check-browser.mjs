import { createRequire } from 'node:module';
import { readFileSync,writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname,join } from 'node:path';
const require=createRequire(new URL('../render/package.json',import.meta.url));
const puppeteer=require('puppeteer');
const here=dirname(fileURLToPath(import.meta.url));
const url=process.argv[2]||'http://127.0.0.1:8765/collateral/style-alternatives/index.html';
const browser=await puppeteer.launch({headless:true,args:['--no-sandbox']});
const checks=[],errors=[];
const record=(name,pass,detail)=>{checks.push({name,pass,...(detail?{detail}:{})});if(!pass)throw new Error(name);};
try{
 const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>errors.push(r.url()));
 await page.setViewport({width:1500,height:1100});
 await page.goto(url,{waitUntil:'networkidle0'});
 record('Initial four odds directions',await page.$$eval('.direction-card',e=>e.length)===4);
 record('All previews load',await page.$$eval('.preview-button img',imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0)));
 for(const kind of ['lifestyle','support','odds']){await page.click(`[data-kind="${kind}"]`);await page.waitForFunction(k=>[...document.querySelectorAll('.preview-button img')].every(i=>i.src.includes('-'+k+'.png')&&i.complete&&i.naturalWidth>0),{},kind);record('Application '+kind,true);}
 await page.screenshot({path:'/tmp/playbook-style-gallery-desktop.png'});
 await page.click('[data-select="atelier"]');await page.click('[data-select="circuit"]');await page.click('#compare');
 record('Compare two directions',await page.$$eval('.direction-card',e=>e.length)===2);
 record('Comparison URL state',new URL(page.url()).searchParams.get('compare')==='atelier,circuit');
 await page.reload({waitUntil:'networkidle0'});record('Reload restores comparison',await page.$$eval('.direction-card',e=>e.length)===2);
 await page.click('[data-kind="lifestyle"]');await page.click('.preview-button');
 record('Enlarged preview',await page.$eval('#viewer',el=>el.open));
 record('Preview matches selected application',await page.$eval('#viewer-image',el=>el.src.endsWith('atelier-lifestyle.png')));
 await page.keyboard.press('Escape');record('Escape closes preview',await page.$eval('#viewer',el=>!el.open));
 record('Focus restored',await page.evaluate(()=>document.activeElement.classList.contains('preview-button')));
 await page.click('#show-all');record('Show all resets comparison',await page.$$eval('.direction-card',e=>e.length)===4);
 await page.setViewport({width:390,height:844});record('390px layout fits',await page.evaluate(()=>document.documentElement.scrollWidth<=390));
 await page.screenshot({path:'/tmp/playbook-style-gallery-mobile.png'});
 await page.click('[data-kind="support"]');await page.click('.preview-button');
 record('Mobile dialog fits',await page.$eval('#viewer',el=>{const r=el.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight;}));
 await page.click('#close-viewer');
 record('Local specimen inventory',JSON.parse(readFileSync(join(here,'manifest.json'))).entries.length===12);
}catch(error){errors.push(error.message);}finally{await browser.close();}
const report={checks,errors,pass:checks.every(c=>c.pass)&&!errors.length};
writeFileSync(join(here,'browser-validation.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));if(!report.pass)process.exitCode=1;
