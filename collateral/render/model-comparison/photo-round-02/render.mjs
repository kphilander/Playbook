import puppeteer from 'puppeteer';
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {pathToFileURL} from 'node:url';
import {resolveBrandTokens} from '../../../../lib/resolve-placeholders.mjs';
import {cardHTML} from './template.mjs';
import {here,json,readJSON,frozen,auditManifest,sha,run} from './common.mjs';
const id=process.argv[2],{manifest,record}=frozen(id),folder=join(here,'rendered',id);
mkdirSync(folder,{recursive:true});
const settings=readJSON(join(here,'photography-settings.json'));
const reports=[],browser=await puppeteer.launch({headless:true,args:['--no-sandbox','--disable-setuid-sandbox']});
try{
 for(const concept of manifest.concepts){
  const issues=auditManifest(manifest).filter(s=>s.startsWith(concept.id+':'));
  const photoFolder=join(here,'photography-output',settings.runId,id,run.condition,concept.id,'attempt-1');
  const photoRecord=existsSync(join(photoFolder,'result.json'))?readJSON(join(photoFolder,'result.json')):{status:'missing'};
  const first=photoRecord.images?.[0];
  const photo=first?join(photoFolder,first.file):null;
  if(photo&&sha(readFileSync(photo))!==first.sha256)throw new Error('Photo hash mismatch.');
  if(!photo)issues.push('No generated photo: '+photoRecord.status);
  const html=cardHTML(concept,photo?relative(folder,photo):null).replace('</head>','<link rel="stylesheet" href="../../production-fix.css"></head>');
  writeFileSync(join(folder,concept.id+'.html'),html);
  const page=await browser.newPage();
  const blocked=[],failed=[];
  await page.setRequestInterception(true);
  page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():(blocked.push(r.url()),r.abort()));
  page.on('requestfailed',r=>failed.push(r.url()));
  page.on('pageerror',e=>issues.push(e.message));
  await page.setViewport({width:1080,height:1350,deviceScaleFactor:1});
  await page.goto(pathToFileURL(folder+'/').href,{waitUntil:'domcontentloaded'});
  await page.setContent(resolveBrandTokens(html),{waitUntil:'load',timeout:60000});
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
  const metrics=await page.evaluate(()=>{
   const card=document.querySelector('.social-card'),box=card.getBoundingClientRect(),issues=[];
   const photo=document.querySelector('.photo-frame img');
   const slotSelectors=['h1','.body-copy','.takeaway','.card-footer','.card-header'];
   const texts=[];
   for(const selector of slotSelectors){
    const slot=document.querySelector(selector),limit=slot.getBoundingClientRect();
    const walker=document.createTreeWalker(slot,NodeFilter.SHOW_TEXT);
    while(walker.nextNode()){
     const node=walker.currentNode;if(!node.textContent.trim())continue;
     const style=getComputedStyle(node.parentElement),size=parseFloat(style.fontSize);
     const range=document.createRange();range.selectNodeContents(node);
     for(const r of range.getClientRects()){
      const verticalTolerance=size*.25;
      if(r.top<limit.top-verticalTolerance||r.bottom>limit.bottom+verticalTolerance||r.left<limit.left-2||r.right>limit.right+2)issues.push(`Text exceeds ${selector}: ${node.textContent.trim()}`);
     }
     if(size<42)issues.push('Text smaller than 42px');
     texts.push({text:node.textContent.trim(),size,color:style.color});
    }
   }
   const regionBounds=slotSelectors.map(selector=>{const el=document.querySelector(selector);const r=document.createRange();r.selectNodeContents(el);return {selector,rect:r.getBoundingClientRect()};});
   for(let i=0;i<regionBounds.length;i++)for(let j=i+1;j<regionBounds.length;j++){
    const a=regionBounds[i],b=regionBounds[j];
    if(a.rect.left<b.rect.right&&a.rect.right>b.rect.left&&a.rect.top<b.rect.bottom&&a.rect.bottom>b.rect.top)issues.push(`Text regions overlap: ${a.selector} and ${b.selector}`);
   }
   if(box.width!==1080||box.height!==1350)issues.push('Wrong artboard dimensions');
   if(card.scrollWidth>1080||card.scrollHeight>1350)issues.push('Root overflow');
   if(card.innerText.includes('{{'))issues.push('Unresolved brand placeholder');
   if(photo&&!photo.naturalWidth)issues.push('Photo failed to decode');
   if(!document.fonts.check('700 56px Inter')||!document.fonts.check('400 46px "Source Sans 3"'))issues.push('Expected fonts unavailable');
   return {width:box.width,height:box.height,minFontSize:Math.min(...texts.map(t=>t.size)),photoDimensions:photo?{width:photo.naturalWidth,height:photo.naturalHeight}:null,texts,issues};
  });
  issues.push(...metrics.issues,...failed.map(s=>'Resource failed: '+s),...blocked.map(s=>'External request blocked: '+s));
  await (await page.$('.social-card')).screenshot({path:join(folder,concept.id+'.png')});
  reports.push({id:concept.id,submissionSha256:record.sha256,photoStatus:photoRecord.status,photoSha256:first?.sha256||null,pngSha256:sha(readFileSync(join(folder,concept.id+'.png'))),...metrics,issues:[...new Set(issues)]});
  console.log(`${id}/${concept.id}: ${issues.length?'ISSUES':'PASS'} ${json(issues)}`);
  await page.close();
 }
}finally{await browser.close();}
writeFileSync(join(folder,'validation.json'),json({participant:id,productionFiles:['render.mjs','production-fix.css','common.mjs'].map(file=>({file,sha256:sha(readFileSync(join(here,file)))})),submissionIssues:auditManifest(manifest),concepts:reports}));
if(reports.some(r=>r.issues.length))process.exitCode=1;
