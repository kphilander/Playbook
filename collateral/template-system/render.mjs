import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {resolve,join,extname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {validateRecipe,templates,assets,renderDocument,marketContext} from './engine.mjs';
import {loadResources} from './resources.mjs';
import {bundleDocument} from './bundle.mjs';
import {inspectArtwork} from './inspect.mjs';
import {parseRasterScale,inspectRasterDensity} from './export-quality.mjs';

const args=process.argv.slice(2),scaleArgs=args.filter(a=>a.startsWith('--scale=')),positional=args.filter(a=>!a.startsWith('--'));
if(!positional[0]||positional.length>2||scaleArgs.length>1||args.some(a=>a.startsWith('--')&&!a.startsWith('--scale=')))throw new Error('Usage: node collateral/template-system/render.mjs recipe.json [output-directory] [--scale=1|2|3|4]');
const recipe=validateRecipe(JSON.parse(readFileSync(resolve(positional[0]),'utf8')));
const output=resolve(positional[1]||'/tmp/playbook-template-export');
const d=templates.find(t=>t.id===recipe.templateId),resources=loadResources(),assetBase=new URL('./',import.meta.url).href;
const scale=parseRasterScale(scaleArgs[0]?.slice(8)??d.defaultRasterScale);
const require=createRequire(new URL('../render/package.json',import.meta.url)),puppeteer=require('puppeteer');
const browser=await puppeteer.launch({headless:'shell',protocolTimeout:30000,args:['--no-sandbox']});
try{
 const page=await browser.newPage();await page.setViewport({width:d.width||1080,height:d.height||1350,deviceScaleFactor:scale});
 await page.setRequestInterception(true);page.on('request',r=>/^(file:|data:|about:)/.test(r.url())?r.continue():r.abort());
 await page.goto(new URL('fonts.css',import.meta.url).href);await page.setContent(renderDocument(recipe,resources,{assetBase}),{waitUntil:'load'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
 const result=await page.evaluate(inspectArtwork,{readingFloor:d.tier===2?16:d.layout==='banner'?32:42});
 if(result.width!==(d.width||1080)||result.height!==(d.height||1350))result.issues.push('Format dimensions do not match the template profile.');
 if(result.issues.length)throw new Error('Export stopped: '+result.issues.join('; '));
 const rasterSources=await page.evaluate(inspectRasterDensity,scale);
 const mime={'.woff2':'font/woff2','.ttf':'font/ttf','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.avif':'image/avif','.svg':'image/svg+xml'};
 const readText=async url=>readFileSync(fileURLToPath(url),'utf8');
 const readDataURL=async url=>`data:${mime[extname(fileURLToPath(url))]||'application/octet-stream'};base64,${readFileSync(fileURLToPath(url)).toString('base64')}`;
 const html=await bundleDocument(recipe,resources,{assetBase,readText,readDataURL});
 mkdirSync(output,{recursive:true});
 // Capture the recipe, brand snapshot, rendered image and asset provenance together.
 writeFileSync(join(output,'template.html'),html);
 writeFileSync(join(output,'recipe.json'),JSON.stringify(recipe,null,2)+'\n');
 writeFileSync(join(output,'skin.css'),readFileSync(new URL('../../visual-identity/design-tokens.css',import.meta.url),'utf8')+'\n'+readFileSync(new URL(`skins/${recipe.skinId}.css`,import.meta.url),'utf8'));
 await(await page.$('.specimen')).screenshot({path:join(output,'template.png')});
 const asset=assets.find(a=>a.id===recipe.assetId);
 writeFileSync(join(output,'manifest.json'),JSON.stringify({schema:'playbook-creative-export',version:1,recipe,context:marketContext(recipe,resources),dimensions:[result.width,result.height],raster:{scale,pixels:[result.width*scale,result.height*scale],sources:rasterSources},asset:asset?{...asset,sha256:createHash('sha256').update(readFileSync(new URL(asset.src,import.meta.url))).digest('hex')}:null,htmlSha256:createHash('sha256').update(html).digest('hex'),checks:result},null,2)+'\n');
 console.log(`Exported checked HTML, PNG, CSS, recipe and asset manifest to ${output}`);
 for(const source of rasterSources.filter(s=>s.upsampled))console.log(`Photo ${source.asset||'source'} supplies ${source.availableScale}× native density at this crop; ${scale}× export preserves sharp text/SVG but cannot add photo detail.`);
}finally{await browser.close();}
