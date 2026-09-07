import {mkdirSync,writeFileSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {restrainedFormats} from '../../template-system/campaign-formats.mjs';
import {createRecipe,renderArticle,renderDocument} from '../../template-system/engine.mjs';
import {loadResources} from '../../template-system/resources.mjs';
import {inspectArtwork} from '../../template-system/inspect.mjs';
import {inspectRasterDensity} from '../../template-system/export-quality.mjs';

const root=new URL('./',import.meta.url),output=new URL('renders/',root),resources=loadResources(),reports=[],media={};
const skins=['playbook','club','circuit'],digest=b=>createHash('sha256').update(b).digest('hex');
mkdirSync(output,{recursive:true});
const require=createRequire(new URL('../../render/package.json',import.meta.url));
const browser=await require('puppeteer').launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
try {
  const page=await browser.newPage(),baseline=createRecipe('campaign-presence',{variant:'quiet'});
  const articleBody=html=>html.replace(/^<article[^>]*>/,'').replace(/<\/article>$/,'').replace(/--media-y:[\d.]+%/g,'--media-y:FORMAT_CROP');
  for(const format of restrainedFormats)for(const skinId of skins){
    const recipe=createRecipe(format.templateId,{skinId,variant:'quiet'});
    assert.equal(recipe.variant,'quiet');assert.equal(recipe.assetId,baseline.assetId);
    assert.equal(recipe.marketId,baseline.marketId);assert.deepEqual(recipe.content,baseline.content);
    const markup=renderArticle(recipe,resources);
    assert.equal(markup,renderArticle({...recipe,skinId:'playbook'},resources),'Skin changes only CSS.');
    assert.equal(articleBody(markup),articleBody(renderArticle(baseline,resources)),'Formats share the same content/identity markup; crop is an explicit recipe value.');
    const stem=`${format.id}-${skinId}`;
    writeFileSync(new URL(stem+'.html',output),renderDocument(recipe,resources,{assetBase:'../../../template-system/',title:`${format.label} · ${skinId}`}));
    writeFileSync(new URL(stem+'.json',output),JSON.stringify(recipe,null,2)+'\n');
    await page.setViewport({width:format.width,height:format.height,deviceScaleFactor:format.scale});
    await page.goto(new URL(stem+'.html',output).href,{waitUntil:'load'});
    await page.evaluate(async()=>{await document.fonts.ready;for(const i of document.images)await i.decode();});
    const inspection=await page.evaluate(inspectArtwork,{readingFloor:42}),sources=await page.evaluate(inspectRasterDensity,format.scale);
    assert.deepEqual(inspection.issues,[],stem);assert.deepEqual([inspection.width,inspection.height],[format.width,format.height]);
    assert.equal(sources[0].upsampled,false,stem+' must use native photo detail');
    const bytes=await(await page.$('.specimen')).screenshot();
    const pixels=[format.width*format.scale,format.height*format.scale];
    assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],pixels);
    const png=format.id==='portrait'?`../brand-presence/renders/quiet-${skinId}.png`:`renders/${stem}.png`;
    if(format.id==='portrait')assert.equal(digest(bytes),digest(readFileSync(new URL(png,root))),'The approved portrait is unchanged.');
    else writeFileSync(new URL(png,root),bytes);
    media[stem]={png:png+'?v='+digest(bytes).slice(0,12),pixels,templateId:format.templateId,scale:format.scale};
    reports.push({format:format.id,skinId,...inspection,raster:{scale:format.scale,pixels,sources},pngSha256:digest(bytes)});
    console.log(stem+' · '+pixels.join(' × ')+' · fit, contrast and native detail checked');
  }
  writeReview();
  await page.setViewport({width:1200,height:1000,deviceScaleFactor:1});
  await page.goto(new URL('index.html',root).href,{waitUntil:'load'});
  await page.evaluate(async()=>{await document.fonts.ready;for(const i of document.images)await i.decode();});
  await page.addStyleTag({content:'.format-grid .art-links,.format-grid .description,.format-grid .edit,.format-grid .feedback{display:none}'});
  await(await page.$('.format-grid')).screenshot({path:new URL('overview.png',root).pathname});
}finally{await browser.close();}
writeFileSync(new URL('validation.json',root),JSON.stringify(reports,null,2)+'\n');

function writeReview(){
  writeFileSync(new URL('media.json',root),JSON.stringify(media,null,2)+'\n');
  writeFileSync(new URL('index.html',root),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>A campaign family · Playbook</title><link rel="stylesheet" href="review.css"></head><body>
  <header class="intro"><div class="topline"><a href="../brand-presence/index.html">← Brand presence</a><span>Campaign family / 07</span></div><p class="eyebrow">A / Restrained</p><h1>One idea.<br>Room to adapt.</h1><p class="lead">The selected direction, built for a portrait post, a vertical story and a landscape display.</p><p class="scope">Same photograph, message and brand signature. Each composition gives the people and the words their own room.</p></header>
  <main><div class="skin-control"><span>Preview a brand</span><div role="group" aria-label="Preview a brand">${[['playbook','Playbook'],['club','Social Club'],['circuit','Circuit']].map(([id,label])=>`<button type="button" data-skin="${id}" aria-pressed="${id==='playbook'}">${label}</button>`).join('')}</div><p id="skin-note" aria-live="polite">Playbook · navy, emerald and Inter.</p></div>
  <div class="format-grid">${restrainedFormats.map((f,i)=>{const m=media[f.id+'-playbook'];return `<section class="format format-${f.id}" id="format-${f.id}" data-format="${f.id}" aria-label="${f.label}"><header class="format-heading"><h2>${String(i+1).padStart(2,'0')} / ${f.label}</h2><span>${f.ratio}</span></header><p class="format-note">${f.note}</p><a class="artwork" href="${m.png}" target="_blank" rel="noopener" aria-label="Open ${f.label} at full resolution"><img src="${m.png}" width="${f.width}" height="${f.height}" alt="${f.label} in Playbook: Leave room for the rest, with friends meeting for dinner."></a><div class="art-links"><a class="png" href="${m.png}" target="_blank" rel="noopener">${m.pixels.join(' × ')} PNG ↗</a><a class="live" href="renders/${f.id}-playbook.html" target="_blank" rel="noopener">Live artwork ↗</a></div><p class="description">${f.description}</p><a class="edit" href="../../studio/index.html?template=${f.templateId}&variant=quiet&skin=playbook&compare=club&asset=rest-dinner">Edit this format <span aria-hidden="true">↗</span></a><div class="feedback" role="group" aria-label="Feedback for ${f.label}"><button type="button" data-choice="keep" aria-pressed="false">Looks good</button><button type="button" data-choice="refine" aria-pressed="false">Needs work</button><output aria-live="polite"></output></div></section>`;}).join('')}</div>
  <aside class="context"><p>Three formats × three brand skins. Full-resolution artwork, live templates and editable recipes are available for every execution.</p><a href="README.md">Format decisions & source quality ↗</a></aside></main><footer class="review-footer"><p>Feedback saves for each format and brand in this browser. These use the same English contact-and-age preview.</p></footer><script type="module" src="review.mjs"></script></body></html>\n`);
}
