import {writeFileSync,mkdirSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {scenes} from './scenes.mjs';
import {assets,createRecipe,renderArticle,renderDocument,escapeHTML} from '../../template-system/engine.mjs';
import {loadResources} from '../../template-system/resources.mjs';
import {inspectArtwork} from '../../template-system/inspect.mjs';
import {previewScale,inspectRasterDensity} from '../../template-system/export-quality.mjs';

const root=new URL('./',import.meta.url),output=new URL('renders/',root),resources=loadResources();
mkdirSync(output,{recursive:true});
const require=createRequire(new URL('../../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
const reports=[],revisions=new Map(),baseline=createRecipe('campaign-rest',{skinId:'club'});
try {
  const page=await browser.newPage();
  await page.setViewport({width:1080,height:1350,deviceScaleFactor:previewScale});
  for(const scene of scenes){
    const recipe=createRecipe('campaign-rest',{skinId:'club',assetId:scene.id});
    assert.deepEqual({...recipe,assetId:baseline.assetId},baseline,'Only the registered photograph changes in this comparison.');
    const markup=renderArticle(recipe,resources);
    for(const skinId of ['playbook','club','circuit']){
      const treatment={...recipe,skinId};
      assert.equal(renderArticle(treatment,resources),markup,'CSS skins preserve the article structure.');
      const html=renderDocument(treatment,resources,{assetBase:'../../../template-system/',title:scene.label+' · Leave room for the rest'});
      const filename=scene.id+'-'+skinId;
      writeFileSync(new URL(filename+'.html',output),html);
      await page.goto(new URL(filename+'.html',output).href,{waitUntil:'load'});
      await page.evaluate(async()=>{await document.fonts.ready;for(const i of document.images)await i.decode();});
      const inspection=await page.evaluate(inspectArtwork,{readingFloor:42});
      const sources=await page.evaluate(inspectRasterDensity,previewScale);
      assert.deepEqual(inspection.issues,[],scene.id+'/'+skinId+' must fit and pass text contrast.');
      assert.equal(sources.length,1);
      assert.equal(sources[0].upsampled,false,'A selected photo must support native 3× detail.');
      const asset=assets.find(a=>a.id===scene.id);
      assert.deepEqual(sources[0].sourcePixels,[asset.width,asset.height]);
      const report={scene:scene.id,skinId,...inspection,raster:{scale:previewScale,pixels:[3240,4050],sources}};
      if(skinId==='club'){
        writeFileSync(new URL(scene.id+'.json',output),JSON.stringify(recipe,null,2)+'\n');
        await(await page.$('.specimen')).screenshot({path:new URL(scene.id+'.png',output).pathname});
        const bytes=readFileSync(new URL(scene.id+'.png',output));
        assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],[3240,4050]);
        report.pngSha256=createHash('sha256').update(bytes).digest('hex');
        revisions.set(scene.id,report.pngSha256.slice(0,12));
      }
      reports.push(report);
    }
    console.log(scene.id+' · three skins checked · native 3× photo detail');
  }
  writeReview();
  await page.setViewport({width:1440,height:1000,deviceScaleFactor:1});
  await page.goto(new URL('index.html',root).href,{waitUntil:'load'});
  await page.evaluate(async()=>{await document.fonts.ready;for(const i of document.images)await i.decode();});
  await page.addStyleTag({content:'.pair .art-links,.pair .scene-note,.pair .source-links,.pair .edit{display:none}'});
  await(await page.$('.pair.trio')).screenshot({path:new URL('overview.png',root).pathname});
}finally{await browser.close();}
writeFileSync(new URL('validation.json',root),JSON.stringify(reports,null,2)+'\n');

function writeReview(){
writeFileSync(new URL('index.html',root),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Three moments · Playbook photo comparison</title><link rel="stylesheet" href="review.css"></head><body class="scene-review">
<header class="intro"><div class="topline"><a href="../index.html#campaign-rest">← Campaign concepts</a><span>Photography study / 05</span></div><p class="eyebrow">Leave room for the rest.</p><h1>Same cover.<br>Three moments.</h1><p class="lead">Dinner, the show, or heading out together. Compare how each photograph tells the story of the rest of the evening.</p><p class="comparison-note">Same words, Social Club styling and full-bleed layout in every execution. Only the photograph changes.</p></header>
<main><section class="scene-comparison" id="photo-executions" data-concept="campaign-rest-photo-scene"><h2 class="visually-hidden">Choose a photographic direction</h2><div class="pair trio">${scenes.map(scene=>{
  const png=`renders/${scene.id}.png?v=${revisions.get(scene.id)}`,asset=assets.find(a=>a.id===scene.id);
  return `<figure><figcaption><strong>${scene.label}</strong><span>${scene.note}</span></figcaption><a class="artwork" href="${png}" target="_blank" rel="noopener" aria-label="Open ${escapeHTML(scene.label)} at full resolution"><img src="${png}" width="1080" height="1350" alt="${escapeHTML(asset.alt)} Leave room for the rest." loading="eager"></a><div class="art-links"><a href="${png}" target="_blank" rel="noopener">3240 × 4050 PNG ↗</a><a href="renders/${scene.id}-club.html" target="_blank" rel="noopener">Live artwork ↗</a></div><p class="scene-note">${escapeHTML(scene.description)}</p><div class="source-links"><a href="../../template-system/${asset.src}" target="_blank" rel="noopener">Original photo ↗</a><a href="renders/${scene.id}.json" download>Recipe ↓</a></div><a class="edit" href="../../studio/index.html?template=campaign-rest&skin=club&compare=circuit&asset=${scene.id}">Edit this execution <span aria-hidden="true">↗</span></a></figure>`;
}).join('')}</div><div class="preference" role="group" aria-label="Your preferred photograph for Leave room for the rest"><span>Your photograph</span>${[...scenes.map(s=>[s.id,s.short]),['both','Keep all three'],['neither','Try other scenes']].map(([id,label])=>`<button type="button" data-choice="${id}" aria-pressed="false">${label}</button>`).join('')}<output aria-live="polite"></output></div></section>
<aside class="scene-context"><p>Each source is 3712 × 4608. The 3240 × 4050 artwork renders from live type and the original photograph, with sufficient native photo detail at this crop.</p><a href="../renders/campaign-rest-club.png" target="_blank" rel="noopener">Compare with the earlier terrace image ↗</a><a href="../index.html#campaign-rest-photography">Read the photography direction ↗</a></aside></main>
<footer class="review-footer"><p>Your scene choice is saved in this browser, separately from your earlier skin choices. These are the same English contact-and-age creative studies.</p><a href="README.md">Source images & prompts</a></footer><script type="module" src="../review.mjs"></script></body></html>\n`);
}
