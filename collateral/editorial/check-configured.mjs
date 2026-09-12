import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {readFile} from 'node:fs/promises';
import yaml from 'js-yaml';
import {createBrandConfig} from '../../lib/brand-config.mjs';
import {configureEditorial} from './configure.mjs';
const root=new URL('./',import.meta.url),require=createRequire(new URL('../render/package.json',root));
const manifest=JSON.parse(await readFile(new URL('manifest.json',root)));
const input=yaml.load(await readFile(new URL('fixtures/brand.yml',root),'utf8')),brand=createBrandConfig(input);
assert.equal(brand.brandTokens('united-states')['{{HELPLINE_HOURS}}'],'Daily 8 am–10 pm');
assert.equal(brand.brandTokens('united-states','nevada')['{{HELPLINE_NUMBER}}'],'555-010-9999');
assert.equal(brand.brandTokens('united-states')['{{EMAIL_PREFERENCES_URL}}'],'https://operator.example/preferences/');
const browser=await require('puppeteer').launch({headless:true});
try{
 const page=await browser.newPage();
 await page.setRequestInterception(true);page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
 for(const [slug,r] of Object.entries(manifest.resources)){
  await page.setViewport({width:r.width,height:r.height,deviceScaleFactor:1});
  const source=await readFile(new URL(r.files.html.path,root),'utf8');
  const html=await configureEditorial(page,source,brand,'united-states');
  assert.doesNotMatch(html,/\{\{[A-Z_]+\}\}/,slug+' unresolved token');
  const visible=await page.$eval('main',e=>e.innerText);
  assert.doesNotMatch(visible,/Add local contact|Add the (?:call|text|chat|support)|QR generated after setup/,slug+' setup label');
  if(source.includes('{{HELPLINE_NUMBER}}'))assert.ok(visible.includes('555-010-1234'),slug+' reads YAML number');
  if(source.includes('{{HELPLINE_HOURS}}'))assert.ok(visible.includes('Daily 8 am–10 pm'),slug+' reads YAML hours');
  if(r.tier===2)assert.equal(await page.$eval('main',e=>getComputedStyle(e).backgroundColor),'rgb(255, 255, 255)',slug+' Tier 2 white');
  const broken=await page.$$eval('[data-qr-field]',es=>es.filter(e=>!e.querySelector('img[src^="data:image/png;base64,"]')).length);assert.equal(broken,0,slug+' configured QR');
  const layout=await page.evaluate(()=>{
    const root=document.querySelector('main'),bounds=root.getBoundingClientRect(),boxes=[];
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    while(walker.nextNode()){
      const n=walker.currentNode,p=n.parentElement,style=getComputedStyle(p);
      if(!n.textContent.trim()||p.closest('svg,style')||style.display==='none'||style.visibility==='hidden')continue;
      const range=document.createRange();range.selectNodeContents(n);
      for(const r of range.getClientRects())if(r.width&&r.height)boxes.push({text:n.textContent.trim(),x:r.x,y:r.y,right:r.right,bottom:r.bottom});
    }
    const outside=boxes.filter(r=>r.x<bounds.x-1||r.y<bounds.y-1||r.right>bounds.right+1||r.bottom>bounds.bottom+1);
    const overlaps=[];
    for(let i=0;i<boxes.length;i++)for(let j=i+1;j<boxes.length;j++){
      const a=boxes[i],b=boxes[j];
      if(a.text!==b.text&&Math.min(a.right,b.right)-Math.max(a.x,b.x)>3&&Math.min(a.bottom,b.bottom)-Math.max(a.y,b.y)>3)overlaps.push([a.text,b.text]);
    }
    return{outside,overlaps};
  });
  assert.deepEqual(layout,{outside:[],overlaps:[]},slug+' configured layout: '+JSON.stringify(layout));
 }
 const resource=manifest.resources['support-page-10a'],html=await readFile(new URL(resource.files.html.path,root),'utf8');
 await configureEditorial(page,html,brand,'united-states','nevada');assert.match(await page.$eval('main',e=>e.innerText),/555-010-9999/);
 const changed=structuredClone(input);changed.helplines['united-states'].national.number='555-010-4321';
 await configureEditorial(page,html,createBrandConfig(changed),'united-states');assert.match(await page.$eval('main',e=>e.innerText),/555-010-4321/);
 delete changed.helplines['united-states'].national.hours;
 await assert.rejects(configureEditorial(page,html,createBrandConfig(changed),'united-states'),/HELPLINE_HOURS/);
}finally{await browser.close();}
console.log('PASS: all 85 exports read YAML fields and generate configured QRs; changed brand/market values propagate; missing hours stop export.');
