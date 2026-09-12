import {createRequire} from 'node:module';
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const root=new URL('./',import.meta.url),require=createRequire(new URL('../render/package.json',root));
const manifest=JSON.parse(await readFile(new URL('manifest.json',root)));
const browser=await require('puppeteer').launch({headless:true});
let findings=[];
try {
const page=await browser.newPage();
for(const [slug,v] of Object.entries(manifest.resources)){
 await page.setViewport({width:v.width,height:v.height,deviceScaleFactor:1});
 await page.goto(new URL(v.files.html.path,root).href,{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
 const result=await page.evaluate(()=>{
  const root=document.querySelector('main'),rr=root.getBoundingClientRect(),nodes=[];
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
   const n=walker.currentNode,p=n.parentElement,s=getComputedStyle(p);
   if(!n.textContent.trim()||p.closest('svg,style,.identity-token')||s.display==='none'||s.visibility==='hidden')continue;
   const r=document.createRange();r.selectNodeContents(n);
   for(const b of r.getClientRects())if(b.width&&b.height)nodes.push({text:n.textContent.trim().slice(0,65),x:b.x,y:b.y,w:b.width,h:b.height});
  }
  const outside=nodes.filter(b=>b.x<rr.x-1||b.y<rr.y-1||b.x+b.w>rr.right+1||b.y+b.h>rr.bottom+1);
  const overlaps=[];for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
   const a=nodes[i],b=nodes[j];if(a.text===b.text)continue;
   const dx=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x),dy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
   if(dx>3&&dy>3)overlaps.push([a.text,b.text]);
  }
  return{width:rr.width,height:rr.height,outside,overlaps};
 });
 if(result.outside.length||result.overlaps.length||Math.abs(result.width-v.width)>1||Math.abs(result.height-v.height)>2)findings.push({slug,...result});
}

}finally{await browser.close();}
assert.deepEqual(findings,[],JSON.stringify(findings,null,2));
console.log('PASS: all 85 native HTML canvases have no text collisions or text outside the canvas.');
