import {writeFileSync,mkdirSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {campaigns} from '../template-system/campaigns.mjs';
import {artDirections} from '../template-system/art-direction.mjs';
import {createRecipe,renderDocument,renderArticle,escapeHTML} from '../template-system/engine.mjs';
import {loadResources} from '../template-system/resources.mjs';
import {inspectArtwork} from '../template-system/inspect.mjs';
import {previewScale,inspectRasterDensity} from '../template-system/export-quality.mjs';
import {treatmentsFor} from './review-config.mjs';

const resources=loadResources(),root=new URL('./',import.meta.url),output=new URL('renders/',root);
mkdirSync(output,{recursive:true});
const require=createRequire(new URL('../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
const reports=[],revisions=new Map();
try {
  const page=await browser.newPage();
  await page.setViewport({width:1080,height:1350,deviceScaleFactor:previewScale});
  for(const d of campaigns){
    let markup;
    for(const skin of treatmentsFor(d)){
      const recipe=createRecipe(d.id,{skinId:skin.id});
      const rendered=renderArticle(recipe,resources);
      if(markup&&markup!==rendered)throw new Error('A skin changed the content or structure.');
      markup=rendered;
      const stem=`${d.id}-${skin.id}`;
      writeFileSync(new URL(stem+'.json',output),JSON.stringify(recipe,null,2)+'\n');
      writeFileSync(new URL(stem+'.html',output),renderDocument(recipe,resources,{assetBase:'../../template-system/',title:d.title}));
      await page.goto(new URL(stem+'.html',output).href,{waitUntil:'load'});
      await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
      const result=await page.evaluate(inspectArtwork,{readingFloor:42});
      const sources=await page.evaluate(inspectRasterDensity,previewScale);
      await(await page.$('.specimen')).screenshot({path:new URL(stem+'.png',output).pathname});
      const bytes=readFileSync(new URL(stem+'.png',output));
      const pixels=[bytes.readUInt32BE(16),bytes.readUInt32BE(20)];
      if(pixels[0]!==result.width*previewScale||pixels[1]!==result.height*previewScale)throw new Error('PNG density does not match the requested export.');
      const hash=createHash('sha256').update(bytes).digest('hex');
      revisions.set(stem,hash.slice(0,12));
      reports.push({template:d.id,skin:skin.id,...result,raster:{scale:previewScale,pixels,sources},pngSha256:hash});
      console.log(stem+(result.issues.length?' · '+result.issues.join('; '):` · fit checked · ${pixels.join(' × ')}`));
    }
  }
} finally {await browser.close();}
writeFileSync(new URL('validation.json',root),JSON.stringify(reports,null,2)+'\n');

function section(d){
  const treatments=treatmentsFor(d),isNew=d.round===4,direction=artDirections[d.artDirection];
  const number=isNew?String(campaigns.filter(c=>c.round===4).indexOf(d)+1).padStart(2,'0'):d.title.slice(0,2);
  const choices=[...treatments.map(s=>[s.id,s.label]),['both',isNew?'Keep all three':'Keep both'],['neither',isNew?'None of these':'Neither']];
  return `<section class="concept ${isNew?'new-concept':''}" id="${d.id}" data-concept="${d.id}">
  <header class="concept-intro"><p class="eyebrow">${isNew?'New direction':'Earlier concept'} / ${number}</p><h2>${escapeHTML(d.title.slice(5))}</h2><p>${escapeHTML(d.rationale)}</p>${direction?`<a class="brief-jump" href="#${escapeHTML(direction.reviewHref.split('#')[1])}">Photography direction ↓</a>${direction.comparisonHref?` <a class="brief-jump" href="${escapeHTML(direction.comparisonHref)}">Compare three new photographs →</a>`:''}`:''}</header>
  <div class="pair ${isNew?'trio':''}">${treatments.map(s=>{
    const stem=`${d.id}-${s.id}`,url=`renders/${stem}.png?v=${revisions.get(stem)}`;
    return `<figure><figcaption><strong>${s.label}</strong><span>${s.note}</span></figcaption><a class="artwork" href="${url}" target="_blank" rel="noopener" aria-label="Open ${escapeHTML(d.title)} in ${s.label} at full resolution"><img src="${url}" width="1080" height="1350" alt="${escapeHTML(d.headline.replaceAll('\n',' '))} — ${s.label}" loading="${d===campaigns[0]?'eager':'lazy'}"></a><div class="art-links"><a href="${url}" target="_blank" rel="noopener">3240 × 4050 PNG ↗</a><a href="renders/${stem}.html" target="_blank" rel="noopener">Live artwork ↗</a></div><a class="edit" href="../studio/index.html?template=${d.id}&skin=${s.id}&compare=${s.id==='circuit'?'club':'circuit'}">Edit this template <span aria-hidden="true">↗</span></a></figure>`;
  }).join('')}</div>
  <div class="preference" role="group" aria-label="Your preference for ${escapeHTML(d.title.slice(5))}"><span>Your preference</span>${choices.map(([value,label])=>`<button type="button" data-choice="${value}" aria-pressed="false">${label}</button>`).join('')}<output aria-live="polite"></output></div>
${direction?`<aside class="photography-brief" id="${escapeHTML(direction.reviewHref.split('#')[1])}" aria-labelledby="${d.id}-brief-title"><div><p class="eyebrow">Art direction / Photography</p><h3 id="${d.id}-brief-title">${escapeHTML(direction.title)}</h3><p class="brief-lead">${escapeHTML(direction.summary)}</p><dl>${direction.guidance.map(g=>`<div><dt>${escapeHTML(g.label)}</dt><dd>${escapeHTML(g.text)}</dd></div>`).join('')}</dl><p class="brief-adaptations">${escapeHTML(direction.adaptations)}</p><a href="${escapeHTML(direction.briefHref)}" target="_blank" rel="noopener">Full shoot & sourcing brief ↗</a></div><figure>${readFileSync(new URL(direction.diagram,root),'utf8')}<figcaption>Framing guide for this 4:5 composition. These areas stay within one continuous photograph.</figcaption></figure></aside>`:''}
</section>`;
}
const fresh=campaigns.filter(d=>d.round===4),previous=campaigns.filter(d=>d.round!==4);
writeFileSync(new URL('index.html',root),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Four new creative directions · Playbook</title><link rel="stylesheet" href="review.css?v=4c"></head><body>
<header class="intro"><div class="topline"><a href="../render/_comparison.html#art-direction-review">← Earlier review</a><span>Creative study / 04</span></div><p class="eyebrow">Playbook / Campaign concepts</p><h1>Four new<br>creative directions.</h1><p class="lead">Four new ideas in Playbook, Social Club and Circuit. Compare the concepts, then choose the treatment that works for you.</p><nav aria-label="Concepts">${fresh.map((d,i)=>`<a href="#${d.id}">0${i+1} / ${escapeHTML(d.shortTitle)}</a>`).join('')}<a href="#earlier-favorites">Your earlier favorites ↓</a></nav><p class="comparison-note">Each row uses identical content and artwork. Type, color and graphic weight change through CSS.</p><p class="quality-note">All 18 previews render at 3240 × 4050. Open the live artwork to inspect vector detail. The new photo uses a 3712 × 4608 source.</p></header>
<main>${fresh.map(section).join('\n')}<header class="earlier-heading" id="earlier-favorites"><p class="eyebrow">Your previous selections are retained</p><h2>The directions you chose.</h2><p>Cinema / Social Club. Pause / Circuit. Odds / Social Club. These original compositions now also have sharper type and SVG exports; their original source photographs are retained.</p></header>${previous.map(section).join('\n')}<aside class="reference"><div><p class="eyebrow">The preference we’re building from</p><h2>Photography to the edge.</h2><p>You preferred the original photo filling the page and disliked the inset poster treatments. The full-bleed direction continues here, alongside your earlier illustration and odds selections.</p><a href="../render/comparison/art-direction-before/poster-19e-never-due.png" target="_blank" rel="noopener">Open the original photo poster ↗</a></div><img src="../render/comparison/art-direction-before/poster-19e-never-due.png" alt="Original poster with edge-to-edge photography, the preferred photo direction." width="1800" height="2400" loading="lazy"></aside></main>
<footer class="review-footer"><p>Choices are saved in this browser. These English contact-and-age studies are ready for creative review; market-specific copy and treatments still follow the selected jurisdiction.</p><a href="README.md">Creative notes & image provenance</a></footer><script type="module" src="review.mjs"></script></body></html>\n`);
if(reports.some(r=>r.issues.length))process.exitCode=1;
