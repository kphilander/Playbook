import {writeFileSync,mkdirSync} from 'node:fs';
import {createRequire} from 'node:module';
import {campaigns} from '../template-system/campaigns.mjs';
import {createRecipe,renderDocument,renderArticle,escapeHTML} from '../template-system/engine.mjs';
import {loadResources} from '../template-system/resources.mjs';
import {inspectArtwork} from '../template-system/inspect.mjs';

const resources=loadResources(),root=new URL('./',import.meta.url),output=new URL('renders/',root);
const treatments=[{id:'club',label:'A / Social Club',note:'Warm white, forest green, lighter Manrope type.'},{id:'circuit',label:'B / Circuit',note:'Lime, cobalt, heavier Space Grotesk type.'}];
mkdirSync(output,{recursive:true});
const require=createRequire(new URL('../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
const reports=[];
try {
  const page=await browser.newPage();
  await page.setViewport({width:1080,height:1350});
  for(const d of campaigns){
    let markup;
    for(const skin of treatments){
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
      reports.push({template:d.id,skin:skin.id,...result});
      await(await page.$('.specimen')).screenshot({path:new URL(stem+'.png',output).pathname});
      console.log(stem+(result.issues.length?' · '+result.issues.join('; '):' · fit checked'));
    }
  }
} finally {await browser.close();}
writeFileSync(new URL('validation.json',root),JSON.stringify(reports,null,2)+'\n');
const sections=campaigns.map((d,i)=>`<section class="concept" id="${d.id}" data-concept="${d.id}">
  <header class="concept-intro"><p class="eyebrow">Concept 0${i+1}</p><h2>${escapeHTML(d.title.slice(5))}</h2><p>${escapeHTML(d.rationale)}</p></header>
  <div class="pair">${treatments.map(s=>`<figure><figcaption><strong>${s.label}</strong><span>${s.note}</span></figcaption><a class="artwork" href="renders/${d.id}-${s.id}.png" target="_blank" rel="noopener" aria-label="Open ${escapeHTML(d.title)} in ${s.label} at full size"><img src="renders/${d.id}-${s.id}.png?v=1" width="1080" height="1350" alt="${escapeHTML(d.headline.replaceAll('\n',' '))} — ${s.label}" loading="${i===0?'eager':'lazy'}"></a><a class="edit" href="../studio/index.html?template=${d.id}&skin=${s.id}&compare=${s.id==='club'?'circuit':'club'}">Edit this template <span aria-hidden="true">↗</span></a></figure>`).join('')}</div>
  <div class="preference" role="group" aria-label="Your preference for concept ${i+1}"><span>Your preference</span>${[['club','A / Social Club'],['circuit','B / Circuit'],['both','Keep both'],['neither','Neither']].map(([value,label])=>`<button type="button" data-choice="${value}" aria-pressed="false">${label}</button>`).join('')}<output aria-live="polite"></output></div>
</section>`).join('\n');
writeFileSync(new URL('index.html',root),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New campaign concepts · Playbook</title><link rel="stylesheet" href="review.css"></head><body>
<header class="intro"><div class="topline"><a href="../render/_comparison.html#art-direction-review">← Earlier review</a><span>Creative study / 03</span></div><p class="eyebrow">Playbook / New template concepts</p><h1>Let the image<br>set the scene.</h1><p class="lead">Three new concepts. Two CSS treatments for each. Full-bleed photography returns; the illustration and odds directions you liked remain in the earlier review.</p><nav aria-label="Concepts">${campaigns.map((d,i)=>`<a href="#${d.id}">0${i+1} / ${['Cinema','Pause','Odds'][i]}</a>`).join('')}</nav><p class="comparison-note">A and B use identical content and artwork. Compare the typography, color and graphic treatment.</p></header>
<main>${sections}<aside class="reference"><div><p class="eyebrow">The preference we’re building from</p><h2>Photography to the edge.</h2><p>You preferred the original photo filling the page, and disliked the inset poster treatments. The new concepts carry that direction forward. Your preference for illustration 1 and odds 2 is retained.</p><a href="../render/comparison/art-direction-before/poster-19e-never-due.png" target="_blank" rel="noopener">Open the original photo poster ↗</a></div><img src="../render/comparison/art-direction-before/poster-19e-never-due.png" alt="Original poster with edge-to-edge photography, the preferred photo direction." width="1800" height="2400" loading="lazy"></aside></main>
<footer class="review-footer"><p>Choices are saved in this browser. These English contact-and-age studies are ready for creative review; market-specific copy and treatments still follow the selected jurisdiction.</p><a href="README.md">Creative notes & image provenance</a></footer><script type="module" src="review.mjs"></script></body></html>\n`);
if(reports.some(r=>r.issues.length))process.exitCode=1;
