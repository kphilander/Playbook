import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {resolveBrandTokens} from '../../lib/resolve-placeholders.mjs';
import {inspectText,checkRasterContrast} from './inspect.mjs';
import {review} from './review-page.mjs';

const root=new URL('./',import.meta.url),render=new URL('../render/',root);
const manifest=JSON.parse(readFileSync(new URL('manifest.json',root)));
const selection=JSON.parse(readFileSync(new URL('../text-polish/selection.json',root)));
const require=createRequire(new URL('../render/package.json',root));
const {createCanvas,loadImage}=require('canvas');
const digest=value=>createHash('sha256').update(value).digest('hex');
for(const dir of ['live','renders'])mkdirSync(new URL(dir,root),{recursive:true});
const reports=[],browser=await require('puppeteer').launch({headless:'shell',args:['--no-sandbox']});
try {
  const page=await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
  await page.goto(render.href);
  for(const template of manifest.templates){
    const source=readFileSync(new URL(template.id+'.html',render),'utf8');
    let baseline;
    for(const surface of manifest.surfaces){
      const id=template.id+'--'+surface.id;
      const raw=source.replace(/(<div class="[^"]*\bpb-text-polish\b[^"]*")/, '$1 data-surface="'+surface.id+'"')
        .replace('</head>','  <link rel="stylesheet" href="text-surfaces.css">\n</head>');
      assert.equal(raw.replace(' data-surface="'+surface.id+'"','').replace('  <link rel="stylesheet" href="text-surfaces.css">\n',''),source,id+' preserves source markup and tokens');
      const html=resolveBrandTokens(raw,'united-states');
      await page.setViewport({width:2400,height:2700,deviceScaleFactor:2});
      await page.setContent(html.replace('<head>','<head><base href="'+render.href+'">'),{waitUntil:'load'});
      await page.evaluate(()=>document.fonts.ready);
      const metrics=await page.evaluate(inspectText,template.selector);
      assert.ok(metrics.fontsLoaded&&metrics.tokensLoaded,id+' bundled fonts and brand tokens');
      if(surface.id==='flat')baseline=metrics.copy;
      assert.equal(metrics.copy,baseline,id+' same visible copy');
      assert.ok(!/\{\{[A-Z_]+\}\}/.test(metrics.copy),id+' resolved copy');
      const width=Math.ceil(metrics.width),height=Math.ceil(metrics.height);
      await page.setViewport({width:width+48,height:height+48,deviceScaleFactor:2});
      const artwork=await page.$(template.selector);
      const png=await artwork.screenshot({path:new URL('renders/'+id+'.png',root).pathname});
      // Check the actual composited gradient/pattern beneath every text line.
      // Text fill is hidden only for this diagnostic capture. CurrentColor,
      // layout, borders and decorative layers retain their normal appearance.
      await page.setViewport({width:width+48,height:height+48,deviceScaleFactor:1});
      const hide=await page.addStyleTag({content:'.pb-text-polish,.pb-text-polish *{-webkit-text-fill-color:transparent !important;text-shadow:none !important;text-decoration-color:transparent !important}'});
      const backdrop=await artwork.screenshot();
      await hide.evaluate(e=>e.remove());
      const canvas=createCanvas(width,height),ctx=canvas.getContext('2d');
      ctx.drawImage(await loadImage(Buffer.from(backdrop)),0,0);
      const contrast=checkRasterContrast(metrics.lines,ctx.getImageData(0,0,width,height));
      writeFileSync(new URL('live/'+id+'.html',root),html.replace('<head>','<head><base href="../../render/">').replace(/[\t ]+$/gm,''));
      reports.push({id,template:template.id,surface:surface.id,dimensions:[width,height],pixels:[width*2,height*2],sourceSha256:digest(source),pngSha256:digest(png),copyPreserved:true,layoutIssues:metrics.issues,contrast});
      console.log(id+' · '+width*2+' × '+height*2+' · '+metrics.issues.length+' layout / '+contrast.issues.length+' contrast issues');
    }
  }
}finally{await browser.close();}
writeFileSync(new URL('validation.json',root),JSON.stringify(reports,null,2)+'\n');
writeFileSync(new URL('index.html',root),review(manifest,reports,selection));
assert.ok(reports.every(r=>!r.layoutIssues.length&&!r.contrast.issues.length),'See text-surfaces/validation.json for layout or contrast failures.');
