import {templates,skins,assets,createRecipe,validateRecipe,renderDocument,marketContext,fields,slotFor} from '../template-system/engine.mjs';
import {inspectArtwork} from '../template-system/inspect.mjs';
import {bundleDocument} from '../template-system/bundle.mjs';

const $=id=>document.getElementById(id),key='playbook-template-studio-v1';
const assetBase=new URL('../template-system/',import.meta.url).href;
const resources=await fetch('resources.json').then(r=>{if(!r.ok)throw new Error('Studio resources could not load.');return r.json();});
let recipe=createRecipe(),compareSkin='arcade',generation=0,timer,checks={a:null,b:null};
try{const saved=JSON.parse(localStorage.getItem(key));if(saved){recipe=validateRecipe(saved.recipe);if(skins.some(s=>s.id===saved.compareSkin))compareSkin=saved.compareSkin;}}
catch{ $('save-state').textContent='Use Save recipe to keep a portable copy of your work.'; }
const params=new URLSearchParams(location.search);
if(params.get('template')!==recipe.templateId&&templates.some(t=>t.id===params.get('template')))recipe=createRecipe(params.get('template'));
function options(element,items,value){element.replaceChildren(...items.map(item=>{const option=document.createElement('option');option.value=item.id;option.textContent=item.name||item.title;return option;}));element.value=value;}
options($('template'),templates,recipe.templateId);
for(const side of ['a','b'])options($('skin-'+side),skins,side==='a'?recipe.skinId:compareSkin);
function store(){try{localStorage.setItem(key,JSON.stringify({recipe,compareSkin}));$('save-state').textContent='Saved in this browser. Export a recipe to take it with you.';}catch{$('save-state').textContent='Browser saving is unavailable. Save recipe keeps your choices.';}}
function status(text){$('action-status').textContent=text;}
function currentTemplate(){return templates.find(t=>t.id===recipe.templateId);}
function selectedRecipe(){return {...recipe,skinId:$('export-side').value==='a'?recipe.skinId:compareSkin};}
function syncControls(){
  const d=currentTemplate(),slot=slotFor(d);
  $('template').value=d.id;$('variant').value=recipe.variant;$('skin-a').value=recipe.skinId;$('skin-b').value=compareSkin;
  $('template-title').textContent=d.title;$('format-note').textContent=`${d.format} · ${d.width||1080} × ${d.height||1350}`;
  const compatible=assets.filter(a=>a.slot===slot);
  options($('asset'),compatible.length?compatible:[{id:'',name:'No image in this template'}],recipe.assetId||'');$('asset').disabled=!slot;
  const asset=assets.find(a=>a.id===recipe.assetId);
  $('asset-note').textContent=asset?.origin||'Support keeps the focus on the person and the contact.';
  $('crop-controls').hidden=asset?.type!=='raster';
  if(asset?.type==='raster')for(const [i,axis] of ['x','y'].entries()){$('crop-'+axis).value=(recipe.focalPoint||asset.focalPoint)[i];$('crop-'+axis+'-value').textContent=$('crop-'+axis).value+'%';}
  $('copy-editor').hidden=d.layout==='banner';$('copy-fields').replaceChildren();
  if(d.layout!=='banner')for(const [field,max] of Object.entries(fields)){
    const label=document.createElement('label');label.htmlFor='copy-'+field;label.textContent=({series:'Series line',headline:'Headline',copy:'Body copy',action:'Action'})[field];
    const count=document.createElement('span');count.className='field-count';count.textContent=`${recipe.content[field].length} / ${max}`;label.append(count);
    const input=document.createElement('textarea');input.id='copy-'+field;input.value=recipe.content[field];input.maxLength=max;input.rows=field==='copy'?3:2;
    input.addEventListener('input',()=>{recipe.content[field]=input.value;count.textContent=`${input.value.length} / ${max}`;checks={a:null,b:null};syncExport();clearTimeout(timer);timer=setTimeout(()=>render(),180);});
    $('copy-fields').append(label,input);
  }
  const marketIds=d.layout==='banner'?['gb-banner']:d.layout==='protected'?['au-wagering']:['us-contact','gb-contact','au-contact'];
  options($('market'),marketIds.map(id=>({id,name:resources.markets[id].name})),recipe.marketId);$('market').disabled=marketIds.length===1;
  const context=marketContext(recipe,resources);$('context-title').textContent=context.scope;$('context-copy').textContent=context.assumption;$('context-link').href=context.source;
}
function syncExport(){const side=$('export-side').value;$('export-html').disabled=!checks[side]||checks[side].issues.length>0;}
function fitFrames(){const d=currentTemplate();for(const side of ['a','b']){const stage=$('stage-'+side),frame=$('preview-'+side),w=d.width||1080,h=d.height||1350;stage.style.aspectRatio=`${w}/${h}`;frame.style.width=w+'px';frame.style.height=h+'px';frame.style.transform=`scale(${stage.clientWidth/w})`;}}
new ResizeObserver(fitFrames).observe($('stage-a'));new ResizeObserver(fitFrames).observe($('stage-b'));
async function inspect(side,revision){
  const frame=$('preview-'+side),doc=frame.contentDocument,d=currentTemplate();
  try{
    await doc.fonts.ready;await Promise.all([...doc.images].map(image=>image.decode()));
    if(revision!==generation)return;
    const result=inspectArtwork({kind:'message',readingFloor:d.tier===2?16:d.layout==='banner'?32:42},doc);
    if(result.width!==(d.width||1080)||result.height!==(d.height||1350))result.issues.push('Format dimensions do not match the template profile.');
    checks[side]=result;
    const note=$('check-'+side);note.classList.toggle('error',!!result.issues.length);note.textContent=result.issues.length?'Needs adjustment · '+result.issues[0]:'Fit, assets and text contrast checked';
    syncExport();
  }catch(error){if(revision!==generation)return;checks[side]={issues:[error.message]};$('check-'+side).textContent='Preview could not load. Check the selected asset.';syncExport();}
}
function describeSkins(){for(const side of ['a','b'])$('skin-description-'+side).textContent=skins.find(s=>s.id===(side==='a'?recipe.skinId:compareSkin)).description;}
function render(){
  const revision=++generation;checks={a:null,b:null};syncExport();status('');
  try{recipe=validateRecipe(recipe);}catch(error){status(error.message);return;}
  describeSkins();fitFrames();
  for(const side of ['a','b']){const frame=$('preview-'+side);$('check-'+side).textContent='Checking template…';frame.onload=()=>inspect(side,revision);frame.srcdoc=renderDocument({...recipe,skinId:side==='a'?recipe.skinId:compareSkin},resources,{assetBase});}
  store();
}
// A skin change updates only the stylesheet link. The article and media nodes stay intact.
async function applySkin(side){
  const revision=generation,skinId=$('skin-'+side).value;
  if(side==='a')recipe.skinId=skinId;else compareSkin=skinId;
  describeSkins();checks[side]=null;syncExport();$('check-'+side).textContent='Checking skin…';store();
  const link=$('preview-'+side).contentDocument?.getElementById('creative-skin');
  if(!link){render();return;}
  link.onload=()=>inspect(side,revision);link.onerror=()=>{checks[side]={issues:['Skin failed to load']};$('check-'+side).textContent='The skin could not load.';syncExport();};link.href=assetBase+`skins/${skinId}.css`;
}
$('template').addEventListener('change',()=>{clearTimeout(timer);recipe=createRecipe($('template').value,{skinId:recipe.skinId});syncControls();render();});
$('variant').addEventListener('change',()=>{recipe.variant=$('variant').value;render();});
$('asset').addEventListener('change',()=>{recipe.assetId=$('asset').value||null;recipe.focalPoint=null;syncControls();render();});
for(const axis of ['x','y'])$('crop-'+axis).addEventListener('input',()=>{recipe.focalPoint=[+$('crop-x').value,+$('crop-y').value];$('crop-'+axis+'-value').textContent=$('crop-'+axis).value+'%';render();});
$('market').addEventListener('change',()=>{recipe.marketId=$('market').value;syncControls();render();});
for(const side of ['a','b'])$('skin-'+side).addEventListener('change',()=>applySkin(side));
$('export-side').addEventListener('change',syncExport);
$('reset').addEventListener('click',()=>{clearTimeout(timer);recipe=createRecipe(recipe.templateId);syncControls();render();});
function download(name,type,content){const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
$('save-recipe').addEventListener('click',()=>{try{const r=validateRecipe(selectedRecipe());download(`${r.templateId}-${r.skinId}.json`,'application/json',JSON.stringify(r,null,2)+'\n');status('Recipe saved. Open it here to continue editing.');}catch(error){status(error.message);}});
$('restore-recipe').addEventListener('click',()=>$('recipe-file').click());
$('recipe-file').addEventListener('change',async()=>{try{const file=$('recipe-file').files[0];if(!file)return;if(file.size>50000)throw new Error('Choose a recipe file smaller than 50 KB.');const incoming=validateRecipe(JSON.parse(await file.text()));clearTimeout(timer);recipe=incoming;syncControls();render();status('Recipe restored.');}catch(error){status('Could not open recipe: '+error.message);}finally{$('recipe-file').value='';}});
async function readText(url){const response=await fetch(url);if(!response.ok)throw new Error('An export resource could not be loaded.');return response.text();}
async function readDataURL(url){const response=await fetch(url);if(!response.ok)throw new Error('An image or font could not be loaded.');const blob=await response.blob();return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(blob);});}
$('export-css').addEventListener('click',async()=>{try{const r=selectedRecipe();const tokens=await readText(new URL('../../visual-identity/design-tokens.css',import.meta.url));const css=await readText(assetBase+`skins/${r.skinId}.css`);download(`${r.skinId}.css`,'text/css',tokens+'\n'+css);status('CSS skin saved. It replaces the skin file on any shared template.');}catch(error){status(error.message);}});
$('export-html').addEventListener('click',async()=>{const button=$('export-html');button.disabled=true;try{const r=selectedRecipe();status('Packing the template, image and fonts…');const html=await bundleDocument(r,resources,{assetBase,readText,readDataURL});download(`${r.templateId}-${r.skinId}.html`,'text/html',html);status('Self-contained HTML saved, including the recipe and market context.');}catch(error){status('Export failed: '+error.message);}finally{syncExport();}});
syncControls();render();

const desktop=matchMedia('(min-width:701px)');
function arrangeControls(){document.querySelector('.inspector-shell').open=desktop.matches;}
desktop.addEventListener('change',arrangeControls);arrangeControls();
