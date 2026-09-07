import {createRequire} from 'node:module';
import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {inspectText,checkRasterContrast} from './inspect.mjs';

const root=new URL('./',import.meta.url),manifest=JSON.parse(readFileSync(new URL('manifest.json',root)));
const reports=JSON.parse(readFileSync(new URL('validation.json',root))),checks=[];
const require=createRequire(new URL('../render/package.json',root));
const {createCanvas,loadImage}=require('canvas');
const browser=await require('puppeteer').launch({headless:'shell',args:['--no-sandbox']});
const base='http://127.0.0.1:8765/collateral/text-surfaces/';
const record=(name,pass)=>{assert.ok(pass,name);checks.push({name,pass:true});};
const digest=value=>createHash('sha256').update(value).digest('hex');
const ready=async p=>{await p.evaluate(()=>document.fonts.ready);await p.waitForFunction(()=>[...document.querySelectorAll('.template-group:not([hidden]) img')].every(i=>i.complete&&i.naturalWidth));};
try {
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,800,390,320]){
    await page.setViewport({width,height:1000});await page.goto(base,{waitUntil:'networkidle0'});await ready(page);
    record(`Review fits ${width}px and loads six previews`,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth&&document.querySelectorAll('.template-group:not([hidden]) .design').length===6));
    if(width===390)record('Mobile artwork stacks at readable width',await page.$eval('.design-grid',e=>{const [a,b]=e.children;return b.getBoundingClientRect().top>=a.getBoundingClientRect().bottom;}));
  }
  await page.setViewport({width:1440,height:1100});await page.goto(base,{waitUntil:'networkidle0'});
  for(const t of manifest.templates){
    await page.select('#template',t.id);await ready(page);
    record(`${t.id} selector loads all directions and links its content`,await page.evaluate(id=>new URL(location.href).searchParams.get('template')===id&&[...document.querySelectorAll('.template-group:not([hidden])')].every(e=>e.dataset.template===id),t.id));
    await (await page.$('.template-group:not([hidden])')).screenshot({path:'/private/tmp/playbook-surfaces-'+t.id+'.png'});
  }
  await page.select('#template',manifest.templates[0].id);
  await page.click('#previous');record('Previous wraps to the last template',await page.$eval('#template',e=>e.value===e.options[e.options.length-1].value));
  await page.click('#next');record('Next wraps to the first template',await page.$eval('#template',e=>e.selectedIndex===0));
  await page.evaluate(()=>localStorage.setItem('playbook-text-polish-preferences-v1',JSON.stringify({'card-1a-hot-streak':'refine'})));
  await page.click('[data-id="card-1a-hot-streak--spotlight"] [data-choice="favorite"]');
  await page.click('[data-id="card-1a-hot-streak--paper"] [data-choice="maybe"]');
  await page.reload({waitUntil:'networkidle0'});await ready(page);
  record('Multiple direction choices survive reload',await page.$eval('[data-id="card-1a-hot-streak--spotlight"] [data-choice="favorite"]',e=>e.getAttribute('aria-pressed')==='true')&&await page.$eval('[data-id="card-1a-hot-streak--paper"] [data-choice="maybe"]',e=>e.getAttribute('aria-pressed')==='true'));
  await page.select('#template','card-1b-due-for-win');
  record('Other templates have independent choices',await page.$$eval('.template-group:not([hidden]) [aria-pressed="true"]',es=>es.length===0));
  await page.select('#template','card-1a-hot-streak');await page.click('[data-id="card-1a-hot-streak--paper"] [data-choice="maybe"]');
  record('A second click clears a saved choice',await page.$eval('[data-id="card-1a-hot-streak--paper"] [data-choice="maybe"]',e=>e.getAttribute('aria-pressed')==='false'));
  record('Earlier text-polish preferences are preserved',await page.evaluate(()=>JSON.parse(localStorage.getItem('playbook-text-polish-preferences-v1'))['card-1a-hot-streak']==='refine'));
  await page.evaluate(()=>{const old=URL.createObjectURL;URL.createObjectURL=blob=>{window.exported=blob.text();return old(blob);};});
  await page.click('#export');const exported=await page.evaluate(()=>window.exported);
  record('Export includes the saved template and direction',JSON.parse(exported).choices['card-1a-hot-streak--spotlight']==='favorite');
  await page.evaluate(()=>localStorage.setItem('playbook-text-surfaces-preferences-v1','invalid json'));await page.reload({waitUntil:'networkidle0'});
  record('Malformed saved data does not break the review',await page.$$eval('.choices [aria-pressed="true"]',es=>es.length===0));
  await page.goto(base+'?template=unknown',{waitUntil:'networkidle0'});
  record('An unknown template falls back to the first comparison',await page.$eval('#template',e=>e.selectedIndex===0));
  await ready(page);await (await page.$('.template-group:not([hidden])')).screenshot({path:new URL('overview.png',root).pathname});
  const signatures={};
  for(const report of reports){
    await page.goto(base+'live/'+report.id+'.html',{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
    const metrics=await page.evaluate(inspectText,'.pb-text-polish');
    const sourceHash=digest(readFileSync(new URL('../render/'+report.template+'.html',root)));
    record(`${report.id} live template, saved render and source agree`,!metrics.issues.length&&metrics.fontsLoaded&&metrics.tokensLoaded&&!metrics.copy.includes('{{')&&!report.contrast.issues.length&&report.sourceSha256===sourceHash);
    const bytes=readFileSync(new URL('renders/'+report.id+'.png',root));assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],report.pixels);assert.equal(digest(bytes),report.pngSha256);
    if(report.template==='card-1a-hot-streak'){
      signatures[report.surface]=await page.$eval('.pb-text-polish',e=>JSON.stringify([getComputedStyle(e).background,getComputedStyle(e).getPropertyValue('--pb-surface-ink'),getComputedStyle(e,'::before').background,getComputedStyle(e.querySelector('.myth-statement')).fontWeight]));
      const markup=await page.$eval('.pb-text-polish',e=>e.innerHTML);
      await page.addStyleTag({content:'.pb-text-polish{--pb-color-primary:#283044;--pb-color-primary-light:#3B445B;--pb-color-primary-dark:#151C2C;--pb-color-secondary:#C5E899;--pb-color-secondary-light:#DAF2B8;--pb-color-secondary-dark:#49602C;--pb-font-heading:"Source Sans 3"}'});
      record(`${report.surface} changes colors and heading family through later CSS`,await page.$eval('.pb-text-polish',(e,markup)=>e.innerHTML===markup&&getComputedStyle(e).getPropertyValue('--pb-color-primary').trim()==='#283044'&&getComputedStyle(e.querySelector('.myth-statement')).fontFamily.includes('Source Sans 3'),markup));
    }
  }
  record('All six directions have distinct computed styles',new Set(Object.values(signatures)).size===6);
  record('Every PNG has the specified dimensions and matches its render hash',true);
  // A gradient-specific regression case: the left stop is dark, but white
  // text crosses a bright right stop. A solid-background audit would pass it.
  await page.setViewport({width:400,height:200,deviceScaleFactor:1});
  await page.setContent('<style>*{box-sizing:border-box}body{margin:0}.pb-text-polish{width:400px;height:200px;background:linear-gradient(90deg,#111 20%,#fff 60%);color:white;font:24px Arial}.test{padding:20px}.footer{position:absolute;top:170px}</style><div class="pb-text-polish"><div class="test">This text crosses the bright gradient stop</div><div class="footer" data-protected-zone="support-and-legal"></div></div>');
  const metrics=await page.evaluate(inspectText,'.pb-text-polish');
  await page.addStyleTag({content:'.pb-text-polish *{-webkit-text-fill-color:transparent}'});
  const backdrop=await(await page.$('.pb-text-polish')).screenshot();
  const canvas=createCanvas(400,200),ctx=canvas.getContext('2d');ctx.drawImage(await loadImage(Buffer.from(backdrop)),0,0);
  record('Contrast audit rejects a bright gradient stop beneath text',checkRasterContrast(metrics.lines,ctx.getImageData(0,0,400,200)).issues.length>0);
  record('No browser errors',errors.length===0);
}finally{await browser.close();writeFileSync(new URL('browser-validation.json',root),JSON.stringify(checks,null,2)+'\n');}
console.log(checks.length+' background review checks passed.');
