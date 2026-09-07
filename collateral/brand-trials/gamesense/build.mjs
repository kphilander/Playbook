import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {loadBrandPackage} from '../../template-system/brand-package.mjs';
import {applyBrandPresentation} from '../../template-system/brand-presentation.mjs';
import {createRecipe,renderDocument} from '../../template-system/engine.mjs';
import {loadResources} from '../../template-system/resources.mjs';
import {restrainedFormats} from '../../template-system/campaign-formats.mjs';
import {inspectText,checkRasterContrast} from '../../text-surfaces/inspect.mjs';

const root=new URL('./',import.meta.url),render=new URL('../../render/',root);
const require=createRequire(new URL('../../render/package.json',root));
const {createCanvas,loadImage}=require('canvas');
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const pkg=loadBrandPackage({configPath:new URL('input/brand-canada.yml',root),cssPath:new URL('input/brand-inject.css',root),name:'GameSense',country:'canada',region:'british-columbia'});
const basic=JSON.parse(readFileSync(new URL('../../text-polish/manifest.json',root)));
const surfaces=JSON.parse(readFileSync(new URL('../../text-surfaces/manifest.json',root)));
const selection=JSON.parse(readFileSync(new URL('../../text-surfaces/selection.json',root))).choices;
const items=basic.flatMap(t=>{
  const study=surfaces.templates.find(s=>s.id===t.id);
  return (study?surfaces.surfaces:[{id:'flat',name:'Current'}]).map(s=>({
    ...t,id:t.id+'--'+s.id,template:t.id,surface:s.id,surfaceName:s.name,
    name:study?.name||t.id.replace(/^htp-card-/,'').replace(/-/g,' '),
    favorite:selection[t.id+'--'+s.id]==='favorite',previousChoice:selection[t.id+'--'+s.id]||'unrated',
    before:study?'../../text-surfaces/renders/'+t.id+'--'+s.id+'.png':'../../render/'+t.id+'.png'
  }));
});
items.push(...restrainedFormats.map(f=>({id:'campaign-'+f.id,template:f.templateId,selector:'.specimen',category:'Photography',surface:'photo',surfaceName:'Restrained',name:'Leave room for the rest · '+f.label,format:f.id,before:f.id==='portrait'?'../../campaign-concepts/brand-presence/renders/quiet-playbook.png':'../../campaign-concepts/campaign-family/renders/'+f.id+'-playbook.png'})));
const selected=process.argv.slice(2),queue=selected.length?items.filter(i=>selected.some(s=>i.id.includes(s))):items;
for(const d of ['live','renders','thumbs'])mkdirSync(new URL(d,root),{recursive:true});
// Extract the supplied raster unchanged; live documents share one asset.
const logoData=pkg.css.match(/--pb-logo-image:\s*url\(['"]?(data:image\/png;base64,[A-Za-z0-9+/=]+)['"]?\)/)?.[1];
assert.ok(logoData,'This trial expects the supplied embedded PNG logo.');
writeFileSync(new URL('input/logo.png',root),Buffer.from(logoData.split(',')[1],'base64'));
const reports=[],resources=loadResources(pkg.brand);
const browser=await require('puppeteer').launch({headless:'shell',args:['--no-sandbox']});
try{
  const page=await browser.newPage();
  await page.setRequestInterception(true);page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
  await page.goto(render.href);
  for(const item of queue){
    const source=item.category==='Photography'
      ?renderDocument(createRecipe(item.template,{skinId:'playbook',variant:'quiet',marketId:'ca-bc-contact'}),resources,{assetBase:'../template-system/',title:item.name})
      :readFileSync(new URL(item.template+'.html',render),'utf8');
    const raw=source.replace(/(<div class="[^"]*\bpb-text-polish\b[^"]*")/,'$1 data-surface="'+item.surface+'"');
    const html=pkg.resolve(raw).replace('<head>','<head><base href="'+render.href+'">').replace('</head>',
      '<link rel="stylesheet" href="text-surfaces.css"><link rel="stylesheet" href="../brand-trials/gamesense/input/brand-inject.css"><link rel="stylesheet" href="../template-system/brand-package.css"></head>');
    await page.setViewport({width:item.category==='Email'?600:2400,height:2700,deviceScaleFactor:2});
    await page.setContent(html,{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
    const presentation=await page.evaluate(applyBrandPresentation,{selector:item.selector,name:'GameSense',mandatory:pkg.mandatory,contact:pkg.contact});
    await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
    const metrics=await page.evaluate(inspectText,item.selector);
    const extra=await page.$eval(item.selector,(e,{phone,mandatory})=>{
      const s=getComputedStyle(e),box=e.getBoundingClientRect();
      const images=[...e.querySelectorAll('img')].map(img=>{const r=img.getBoundingClientRect();return {alt:img.alt,dimensions:[r.width,r.height],native:[img.naturalWidth,img.naturalHeight],inside:r.left>=box.left&&r.right<=box.right+.5&&r.top>=box.top&&r.bottom<=box.bottom+.5,sharpAt2x:img.naturalWidth>=r.width*2-.5&&img.naturalHeight>=r.height*2-.5};});
      return {headingFontLoaded:document.fonts.check('600 100px '+s.getPropertyValue('--pb-font-heading')),logoCount:e.querySelectorAll('.pb-replacement-logo').length,images,
        phonePresent:e.innerText.includes(phone),mandatoryCount:[...e.querySelectorAll('.pb-regional-message')].filter(n=>n.textContent===mandatory).length,
        unknownTokens:/\{\{[A-Z_]+\}\}/.test(e.innerText),unsupportedChannels:/\bText 1-|\bChat at\s*(?:$|You)/.test(e.innerText),
        decorativeGradient:e.matches('.pb-text-polish')&&/gradient\(/.test(s.backgroundImage+getComputedStyle(e,'::before').backgroundImage)};
    },{phone:pkg.contact.number,mandatory:pkg.mandatory});
    const width=Math.ceil(metrics.width),height=Math.ceil(metrics.height);
    const artwork=await page.$(item.selector);
    const png=await artwork.screenshot({path:new URL('renders/'+item.id+'.png',root).pathname});
    // Thumbnail only; users can always inspect/download the full 2x raster.
    const rendered=await loadImage(Buffer.from(png)),tw=Math.min(720,width),th=Math.round(tw*rendered.height/rendered.width);
    const thumb=createCanvas(tw,th);thumb.getContext('2d').drawImage(rendered,0,0,tw,th);
    writeFileSync(new URL('thumbs/'+item.id+'.png',root),thumb.toBuffer('image/png'));
    await page.setViewport({width:item.category==='Email'?600:2400,height:2700,deviceScaleFactor:1});
    const hide=await page.addStyleTag({content:'.pb-brand-package,.pb-brand-package *{-webkit-text-fill-color:transparent !important;text-shadow:none !important;text-decoration-color:transparent !important}'});
    const backdrop=await artwork.screenshot();await hide.evaluate(e=>e.remove());
    const canvas=createCanvas(width,height),ctx=canvas.getContext('2d');ctx.drawImage(await loadImage(Buffer.from(backdrop)),0,0);
    const contrast=checkRasterContrast(metrics.inkLines,ctx.getImageData(0,0,width,height));
    contrast.bounds='Measured glyph ink extents, including all pixels between glyphs; font ascender whitespace is excluded.';
    const title=await page.$eval(item.selector,e=>e.querySelector('.headline,.myth-statement,.hero-headline,.game-name,h1')?.innerText.replace(/\s+/g,' ').trim());
    const serialized=(await page.content()).replace(render.href,'../../../render/').replaceAll(logoData,'../brand-trials/gamesense/input/logo.png').replace(/[\t ]+$/gm,'');
    assert.ok(!serialized.includes('file:///Users/'),'Portable output paths');
    writeFileSync(new URL('live/'+item.id+'.html',root),serialized+'\n');
    reports.push({...item,title:title||item.name,dimensions:[width,height],pixels:[png.readUInt32BE(16),png.readUInt32BE(20)],sourceSha256:hash(source),pngSha256:hash(png),presentation,checks:extra,layoutIssues:metrics.issues,contrast});
    console.log(item.id+' · '+metrics.issues.length+' layout / '+contrast.issues.length+' contrast');
  }
}finally{await browser.close();}
writeFileSync(new URL(selected.length?'validation-partial.json':'validation.json',root),JSON.stringify(reports,null,2)+'\n');
if(!selected.length)writeFileSync(new URL('manifest.json',root),JSON.stringify({brand:'GameSense',country:'canada',region:'british-columbia',mandatory:pkg.mandatory,inputHashes:{yaml:hash(readFileSync(new URL('input/brand-canada.yml',root))),css:hash(pkg.css)},items:reports.map(({presentation,layoutIssues,contrast,checks,...r})=>r)},null,2)+'\n');
const failures=reports.filter(r=>r.layoutIssues.length||r.contrast.issues.length||!r.checks.headingFontLoaded||!r.checks.logoCount||!r.checks.phonePresent||r.checks.mandatoryCount!==1||r.checks.unknownTokens||r.checks.unsupportedChannels||r.checks.decorativeGradient||r.checks.images.some(i=>!i.inside||!i.sharpAt2x));
console.log(reports.length+' executions; '+failures.length+' need attention.');
if(failures.length)process.exitCode=1;
