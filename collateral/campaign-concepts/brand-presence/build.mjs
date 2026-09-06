import {mkdirSync,writeFileSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {presenceTreatments} from '../../template-system/brand-presence.mjs';
import {createRecipe,renderArticle,renderDocument} from '../../template-system/engine.mjs';
import {loadResources} from '../../template-system/resources.mjs';
import {inspectArtwork} from '../../template-system/inspect.mjs';
import {inspectRasterDensity} from '../../template-system/export-quality.mjs';

const root=new URL('./',import.meta.url),output=new URL('renders/',root),resources=loadResources(),reports=[],revisions={};
const skins=['playbook','club','circuit'];
mkdirSync(output,{recursive:true});
const require=createRequire(new URL('../../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
try {
  const page=await browser.newPage();
  await page.setViewport({width:1080,height:1350,deviceScaleFactor:3});
  const baseline=createRecipe('campaign-presence');
  for(const treatment of presenceTreatments)for(const skinId of skins){
    const recipe=createRecipe('campaign-presence',{variant:treatment.id,skinId});
    assert.deepEqual({...recipe,variant:baseline.variant,skinId:baseline.skinId},baseline,'Copy, asset, crop and market stay fixed.');
    const markup=renderArticle(recipe,resources);
    assert.equal(markup,renderArticle({...recipe,skinId:'playbook'},resources),'A skin changes CSS only.');
    assert.equal(markup.replace(`mc-presence ${treatment.id}`, 'mc-presence after'),renderArticle({...recipe,variant:'after'},resources),'An expression changes only the root CSS class.');
    const stem=`${treatment.id}-${skinId}`;
    writeFileSync(new URL(stem+'.html',output),renderDocument(recipe,resources,{assetBase:'../../../template-system/',title:`${treatment.label} · ${skinId}`}));
    writeFileSync(new URL(stem+'.json',output),JSON.stringify(recipe,null,2)+'\n');
    await page.goto(new URL(stem+'.html',output).href,{waitUntil:'load'});
    await page.evaluate(async()=>{await document.fonts.ready;for(const i of document.images)await i.decode();});
    const inspection=await page.evaluate(inspectArtwork,{readingFloor:42});
    const sources=await page.evaluate(inspectRasterDensity,3);
    assert.deepEqual(inspection.issues,[],stem);
    assert.equal(sources[0].upsampled,false);
    await(await page.$('.specimen')).screenshot({path:new URL(stem+'.png',output).pathname});
    const bytes=readFileSync(new URL(stem+'.png',output));
    assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],[3240,4050]);
    const hash=createHash('sha256').update(bytes).digest('hex');revisions[stem]=hash.slice(0,12);
    reports.push({variant:treatment.id,skinId,...inspection,raster:{scale:3,pixels:[3240,4050],sources},pngSha256:hash});
    console.log(stem+' · fit, contrast and native 3× detail checked');
  }
  writeReview();
  await page.setViewport({width:1440,height:1000,deviceScaleFactor:1});
  await page.goto(new URL('index.html',root).href,{waitUntil:'load'});
  await page.evaluate(async()=>{await document.fonts.ready;for(const i of document.images)await i.decode();});
  await page.addStyleTag({content:'.pair .art-links,.pair .description,.pair .edit{display:none}'});
  await(await page.$('.pair')).screenshot({path:new URL('overview.png',root).pathname});
}finally{await browser.close();}
writeFileSync(new URL('validation.json',root),JSON.stringify(reports,null,2)+'\n');

function writeReview(){
  writeFileSync(new URL('revisions.json',root),JSON.stringify(revisions,null,2)+'\n');
  writeFileSync(new URL('index.html',root),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Brand presence · Playbook</title><link rel="stylesheet" href="review.css"></head><body>
  <header class="intro"><div class="topline"><a href="../photo-comparison/index.html">← Photography comparison</a><span>Brand expression / 06</span></div><h1>How much Playbook?</h1><p class="lead">One photograph. Three levels of brand presence.</p><p class="scope">Same words, photograph and crop. Typography, brand color and the book-and-play symbol set the volume.</p><a class="brief-jump" href="../campaign-family/index.html">See the campaign family →</a></header>
  <main><div class="skin-control"><span>Preview a brand</span><div role="group" aria-label="Preview a brand">${[['playbook','Playbook'],['club','Social Club'],['circuit','Circuit']].map(([id,label])=>`<button type="button" data-skin="${id}" aria-pressed="${id==='playbook'}">${label}</button>`).join('')}</div><p id="skin-note" aria-live="polite">Playbook · navy, emerald and Inter.</p></div>
  <section data-concept="campaign-brand-presence" aria-label="Compare levels of brand presence"><div class="pair trio">${presenceTreatments.map(t=>{const stem=t.id+'-playbook',png=`renders/${stem}.png?v=${revisions[stem]}`;return `<figure data-treatment="${t.id}"><figcaption><strong>${t.label}</strong><span>${t.note}</span></figcaption><a class="artwork" href="${png}" target="_blank" rel="noopener" aria-label="Open ${t.short} at full resolution"><img src="${png}" width="1080" height="1350" alt="${t.short} Playbook treatment of Leave room for the rest, with friends meeting for dinner."></a><div class="art-links"><a class="png" href="${png}" target="_blank" rel="noopener">3240 × 4050 PNG ↗</a><a class="live" href="renders/${stem}.html" target="_blank" rel="noopener">Live artwork ↗</a></div><p class="description">${t.description}</p><a class="edit" href="../../studio/index.html?template=campaign-presence&variant=${t.id}&skin=playbook&compare=club&asset=rest-dinner">Edit this treatment <span aria-hidden="true">↗</span></a></figure>`;}).join('')}</div>
  <div class="preference" role="group" aria-label="Your preferred brand presence"><span>Your preference</span>${[...presenceTreatments.map(t=>[t.id,t.label]),['neither','Try another approach']].map(([id,label])=>`<button type="button" data-choice="${id}" aria-pressed="false">${label}</button>`).join('')}<output aria-live="polite"></output></div></section>
  <aside class="context"><p>Dinner is the fixed photograph for this comparison. Your photo preference is still open. The bold treatment deliberately gives more space to brand color.</p><a href="../photo-comparison/renders/rest-dinner.png" target="_blank" rel="noopener">Earlier treatment ↗</a><a href="README.md">Design decisions & sources ↗</a></aside></main><footer class="review-footer"><p>Your choice saves in this browser, separately from photo and skin preferences. All three retain the same contact-and-age preview.</p></footer><script type="module" src="review.mjs"></script><script type="module" src="../review.mjs"></script></body></html>\n`);
}
