import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {resolveBrandTokens} from '../../lib/resolve-placeholders.mjs';
import {checkContrast} from './contrast.mjs';
import assert from 'node:assert/strict';

const root=new URL('./',import.meta.url),render=new URL('../render/',root);
const items=JSON.parse(readFileSync(new URL('manifest.json',root))),reports=[];
const digest=value=>createHash('sha256').update(value).digest('hex');
for(const dir of ['before','live'])mkdirSync(new URL(dir,root),{recursive:true});
const require=createRequire(new URL('../render/package.json',root));
const browser=await require('puppeteer').launch({headless:'shell',args:['--no-sandbox']});
try {
 const page=await browser.newPage();
 await page.setRequestInterception(true);page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
 await page.goto(render.href);
 for(const item of items){
  const source=readFileSync(new URL(item.id+'.html',render),'utf8');
  const before=execFileSync('git',['show','add8c77:collateral/render/'+item.id+'.html'],{encoding:'utf8'});
  // The refinement changes styling and adds a phone-number span, never copy or tokens.
  assert.equal(source.replace(' pb-text-polish','').replace('\n  <link rel="stylesheet" href="text-polish.css">','').replaceAll(/<span class="support-number">(.*?)<\/span>/g,'$1'),before,item.id+' master wording/structure');
  let beforeCopy;
  for(const mode of ['before','after']){
   const raw=mode==='before'?before:source,html=resolveBrandTokens(raw,'united-states');
   await page.setViewport({width:item.category==='Email'?600:2400,height:2700,deviceScaleFactor:2});
   await page.setContent(html.replace('<head>','<head><base href="'+render.href+'">'),{waitUntil:'load'});
   await page.evaluate(async()=>{await document.fonts.ready;for(const img of document.images)await img.decode();});
   assert.ok(await page.$eval(item.selector,e=>getComputedStyle(e).getPropertyValue('--pb-color-primary').trim()&&document.fonts.size),item.id+' brand tokens and local fonts loaded');
   const metrics=await page.$eval(item.selector,e=>{const r=e.getBoundingClientRect();return {width:r.width,height:r.height,left:r.left,top:r.top,copy:e.innerText.replace(/\s+/g,' ').trim(),title:e.querySelector('.headline,.myth-statement,.hero-headline,.tools-headline,.game-name,h1')?.innerText.replace(/\s+/g,' ').trim()};});
   const isPrint=['Print','Posters'].includes(item.category);
   if(item.selector==='.social-card')assert.equal(metrics.height,1350,item.id+' feed dimensions');
   const width=Math.ceil(metrics.width+(isPrint?2*metrics.left:0)),height=Math.ceil(metrics.height+(isPrint?2*metrics.top:0));
   await page.setViewport({width,height,deviceScaleFactor:2});
   if(mode==='before')beforeCopy=metrics.copy;else assert.equal(metrics.copy.toLocaleLowerCase('en'),beforeCopy.toLocaleLowerCase('en'),item.id+' visible content (CSS letter case may change)');
   const target=mode==='before'?new URL('before/'+item.id+'.png',root):new URL(item.id+'.png',render);
   // Keep the frozen baseline even when later builds regenerate current artwork.
   if(mode==='after'||!existsSync(target)){
    if(isPrint)await page.screenshot({path:target.pathname});else await(await page.$(item.selector)).screenshot({path:target.pathname});
   }
   if(mode==='after'){
    const contrast=await page.evaluate(checkContrast,item.selector);
    const png=readFileSync(target),pixels=[png.readUInt32BE(16),png.readUInt32BE(20)];
    assert.equal(pixels[0],width*2,item.id+' raster width');
    // Natural email heights can land on a fractional CSS pixel; record the
    // element capture's actual PNG height rather than a rounded viewport hint.
    assert.ok(Math.abs(pixels[1]-height*2)<=(item.category==='Email'?2:0),item.id+' raster height');
    reports.push({id:item.id,category:item.category,title:metrics.title,dimensions:[width,height],pixels,contrast,sourceSha256:digest(source),baselineSourceSha256:digest(before),pngSha256:digest(png),copyPreserved:true});
    writeFileSync(new URL('live/'+item.id+'.html',root),html.replace('<head>','<head><base href="../../render/">'));
    console.log(item.id+' · '+pixels.join(' × ')+' · '+contrast.issues.length+' contrast issues');
   }
  }
 }
}finally{await browser.close();}
writeFileSync(new URL('validation.json',root),JSON.stringify(reports,null,2)+'\n');
writeFileSync(new URL('index.html',root),review(reports));
assert.ok(reports.every(r=>r.contrast.issues.length===0),'All polished text must pass the contrast audit; see validation.json.');

function review(reports){
 const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
 const notes={Cards:'A clear headline, a quieter label and one accent for the useful fact.',Stories:'The same reading order adapted to a taller canvas.',Posters:'Lighter display type and unboxed data make the main point easier to scan.',Print:'Simple rules and consistent number styling replace competing panels.',Email:'More deliberate type, spacing and alignment, including narrow screens.','How to play':'One consistent hierarchy for the game, its key fact and the number worth knowing.'};
 return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>The everyday Playbook · Collateral polish</title><link rel="stylesheet" href="review.css"></head><body><header class="intro"><a href="../campaign-concepts/campaign-family/index.html">← Campaign family</a><p class="eyebrow">The everyday Playbook</p><h1>A lighter touch.</h1><p class="lead">The familiar text-led collateral, with clearer hierarchy, calmer emphasis and more considered spacing.</p><p>26 core templates. Same words and brand colors. Compare the original on the left with the polished version on the right.</p></header><main><nav class="filters" aria-label="Filter collateral"><button data-filter="all" aria-pressed="true">All 26</button>${Object.keys(notes).map(c=>`<button data-filter="${c}" aria-pressed="false">${c}</button>`).join('')}</nav><div class="comparisons">${reports.map((r,i)=>`<section class="comparison" data-category="${r.category}" data-id="${r.id}" id="${r.id}"><header><p class="eyebrow">${String(i+1).padStart(2,'0')} / ${r.category}</p><h2>${esc(r.title)}</h2><p>${notes[r.category]}</p></header><div class="pair"><figure><figcaption>Before</figcaption><a href="before/${r.id}.png" target="_blank" rel="noopener"><img loading="${i?'lazy':'eager'}" src="before/${r.id}.png" width="${r.dimensions[0]}" height="${r.dimensions[1]}" alt="Before: ${esc(r.title)}"></a></figure><figure><figcaption>Polished</figcaption><a href="../render/${r.id}.png?v=${r.pngSha256.slice(0,12)}" target="_blank" rel="noopener"><img loading="${i?'lazy':'eager'}" src="../render/${r.id}.png?v=${r.pngSha256.slice(0,12)}" width="${r.dimensions[0]}" height="${r.dimensions[1]}" alt="Polished: ${esc(r.title)}"></a></figure></div><div class="actions"><a href="live/${r.id}.html" target="_blank" rel="noopener">Live HTML ↗</a><span>${r.pixels.join(' × ')} PNG</span><div role="group" aria-label="Feedback: ${esc(r.title)}"><button data-choice="keep" aria-pressed="false">Looks good</button><button data-choice="refine" aria-pressed="false">Needs work</button></div><output aria-live="polite"></output></div></section>`).join('')}</div><p class="endnote">Preferences save in this browser. Full-resolution previews are rendered directly from HTML and local fonts. <a href="README.md">Scope & rebuild notes ↗</a></p></main><script type="module" src="review.mjs"></script></body></html>\n`;
}
