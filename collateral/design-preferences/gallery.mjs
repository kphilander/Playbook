import {STORAGE_KEY,choiceNames,cleanChoices,preferredLabel,exportChoices,importChoices,buildBrief} from './preferences.mjs';
const data = window.PREFERENCE_STUDIES;
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const params = new URLSearchParams(location.search);
let category = data.categories.some(c=>c.id===params.get('category')) ? params.get('category') : 'all';
let mode = params.get('view')==='focus' ? 'focus' : 'browse';
let focusId = data.pairs.some(p=>p.id===params.get('pair')) ? params.get('pair') : data.pairs[0].id;
let status = 'all', choices = {}, saving = true, previewPair, lastFocus;
try { choices = cleanChoices(JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'),data.pairs); }
catch { saving=false; }
function persist() {
  try {localStorage.setItem(STORAGE_KEY,JSON.stringify(choices));saving=true;}
  catch {saving=false;}
  updateProgress();
}
function updateProgress() {
  const n = data.pairs.filter(p=>choices[p.id]?.choice).length;
  $('progress-count').textContent = `${n} of ${data.pairs.length} reviewed`;
  $('progress').value = n;
  $('save-status').textContent = saving ? 'Saved in this browser. Export to keep a copy.' : 'Browser saving unavailable. Export to keep your choices.';
  $('categories').innerHTML = [{id:'all',name:'All choices'},...data.categories].map(c=>{
    const group=data.pairs.filter(p=>c.id==='all'||p.category===c.id), count=group.filter(p=>choices[p.id]?.choice).length;
    return `<button class="category ${category===c.id?'active':''}" data-category="${c.id}" aria-current="${category===c.id?'true':'false'}">${esc(c.name)}<span>${count}/${group.length}</span></button>`;
  }).join('');
}
function filtered() {
  return data.pairs.filter(p=>{
    const choice=choices[p.id]?.choice;
    return (category==='all'||p.category===category) && (status==='all'||status==='reviewed'&&choice||status==='unreviewed'&&!choice||choice===status);
  });
}
function figure(pair,side) {
  const item=pair[side];
  return `<figure><div class="specimen-label"><b>${side==='before'?'Before':'After'}</b><span>Enlarge ↗</span></div><button class="preview" data-preview="${pair.id}" data-side="${side}" aria-label="Enlarge ${side}: ${esc(pair[side+'Label'])}"><img src="${item.png}" width="${item.width}" height="${item.height}" loading="lazy" alt="${esc(pair.before.format+' — '+pair[side+'Label'])}"></button><figcaption class="fig-label">${esc(pair[side+'Label'])}</figcaption></figure>`;
}
function card(pair) {
  const item=choices[pair.id]||{};
  const cat=data.categories.find(c=>c.id===pair.category).name;
  return `<article class="comparison-card" data-pair="${pair.id}" aria-labelledby="title-${pair.id}"><header class="card-header"><div class="card-meta"><strong>${String(pair.number).padStart(2,'0')} / ${esc(cat)}</strong><span>${esc(pair.before.format)}</span></div><h3 id="title-${pair.id}">${esc(pair.title)}</h3><p class="changed"><b>What changes:</b> ${esc(pair.variable)}</p></header><div class="pair">${figure(pair,'before')}${figure(pair,'after')}</div><div class="choice-area"><span class="choice-label" id="choice-${pair.id}">Which would you carry forward?</span><div class="vote-group" role="group" aria-labelledby="choice-${pair.id}">${Object.entries(choiceNames).map(([value,label])=>`<button class="vote" data-value="${value}" aria-pressed="${item.choice===value}" aria-label="${label}">${({before:'← Before',after:'After →',both:'Both',neither:'Neither'})[value]}</button>`).join('')}</div><p class="saved-choice" aria-live="polite">${item.choice?esc(choiceNames[item.choice]+' · '+preferredLabel(pair,item.choice)):'Choose freely. You can change your mind.'}</p><div class="details-row"><details ${item.note?'open':''}><summary>Design notes & your comments</summary><p>${esc(pair.rationale)}</p><label for="note-${pair.id}">What do you like, or what would you change?</label><textarea id="note-${pair.id}" data-note="${pair.id}" maxlength="2000" placeholder="For example: this type, with warmer colors.">${esc(item.note||'')}</textarea></details><button class="clear-choice" data-clear="${pair.id}" ${item.choice?'':'hidden'} aria-label="Clear choice for ${esc(pair.title)}">Clear choice</button></div></div></article>`;
}
function render() {
  const items=filtered();
  if (!items.some(p=>p.id===focusId)) focusId=items[0]?.id;
  const index=items.findIndex(p=>p.id===focusId);
  $('category-title').textContent = category==='all'?'All design choices':data.categories.find(c=>c.id===category).name;
  $('result-count').textContent = `${items.length} comparison${items.length===1?'':'s'} · Pick a version, both or neither`;
  $('comparisons').className='comparisons'+(mode==='focus'?' focus':'');
  $('comparisons').innerHTML=(mode==='focus'?items.filter(p=>p.id===focusId):items).map(card).join('');
  if(mode==='focus'&&items.length)$('comparisons').insertAdjacentHTML('beforeend',`<nav class="focus-navigation bottom-navigation" aria-label="Continue reviewing"><button data-step="-1" ${index<=0?'disabled':''}>← Previous</button><span>${index+1} of ${items.length}</span>${index<items.length-1?'<button data-step="1" class="primary">Next comparison →</button>':'<button data-show-brief class="primary">Review your brief ↗</button>'}</nav>`);
  $('empty').hidden=items.length>0;
  $('focus-navigation').hidden=mode!=='focus'||!items.length;
  $('focus-position').textContent=`${index+1} of ${items.length}`;
  $('previous').disabled=index<=0; $('next').disabled=index>=items.length-1;
  $('view-browse').setAttribute('aria-pressed',String(mode==='browse'));
  $('view-focus').setAttribute('aria-pressed',String(mode==='focus'));
  const url=new URL(location.href);
  category==='all'?url.searchParams.delete('category'):url.searchParams.set('category',category);
  if(mode==='focus'){url.searchParams.set('view','focus');if(focusId)url.searchParams.set('pair',focusId);else url.searchParams.delete('pair');}
  else {url.searchParams.delete('view');url.searchParams.delete('pair');}
  history.replaceState(null,'',url);
  updateProgress();
}
function updateCard(pair) {
  const el=document.querySelector(`[data-pair="${pair.id}"]`),item=choices[pair.id]||{};
  el.querySelectorAll('.vote').forEach(b=>b.setAttribute('aria-pressed',String(item.choice===b.dataset.value)));
  el.querySelector('.saved-choice').textContent=item.choice?choiceNames[item.choice]+' · '+preferredLabel(pair,item.choice):'Choose freely. You can change your mind.';
  el.querySelector('[data-clear]').hidden=!item.choice;
}
function choose(id,choice) {
  const pair=data.pairs.find(p=>p.id===id);
  choices[id]={choice,note:choices[id]?.note||''};
  if(!choice&&!choices[id].note) delete choices[id];
  persist();
  if(status!=='all'&&!filtered().some(p=>p.id===id)){render();$('comparisons').focus();}
  else updateCard(pair);
}
$('categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;category=b.dataset.category;render();document.querySelector(`[data-category="${category}"]`).focus();});
$('status-filter').addEventListener('change',e=>{status=e.target.value;render();});
for (const view of ['browse','focus']) $('view-'+view).addEventListener('click',()=>{mode=view;render();});
function move(delta) {
  const items=filtered(),index=items.findIndex(p=>p.id===focusId),next=items[index+delta];
  if(next){focusId=next.id;render();$('comparisons').scrollIntoView({block:'start'});$('comparisons').focus({preventScroll:true});}
}
for (const [id,delta] of [['previous',-1],['next',1]]) $(id).addEventListener('click',()=>move(delta));
$('clear-filters').addEventListener('click',()=>{category='all';status='all';$('status-filter').value='all';render();$('comparisons').focus();});
$('comparisons').addEventListener('click',e=>{
  const step=e.target.closest('[data-step]');if(step){move(Number(step.dataset.step));return;}
  if(e.target.closest('[data-show-brief]')){$('open-brief').click();return;}
  const el=e.target.closest('[data-pair]');if(!el)return;
  const vote=e.target.closest('[data-value]');if(vote){choose(el.dataset.pair,vote.dataset.value);return;}
  const clear=e.target.closest('[data-clear]');if(clear){choose(clear.dataset.clear,null);el.querySelector('.vote')?.focus();return;}
  const preview=e.target.closest('[data-preview]');if(preview){lastFocus=preview;previewPair=data.pairs.find(p=>p.id===preview.dataset.preview);showPreview(preview.dataset.side);$('viewer').showModal();}
});
$('comparisons').addEventListener('input',e=>{
  const id=e.target.dataset.note;if(!id)return;
  choices[id]={choice:choices[id]?.choice||null,note:e.target.value.slice(0,2000)};
  if(!choices[id].choice&&!choices[id].note)delete choices[id];persist();
});
function showPreview(side) {
  const item=previewPair[side];
  $('viewer-title').textContent=previewPair[side+'Label'];
  $('viewer-side').textContent=`${side} / ${String(previewPair.number).padStart(2,'0')} / ${previewPair.variable}`;
  $('viewer-image').src=item.png;$('viewer-image').alt=previewPair.before.format+' — '+previewPair[side+'Label'];
  $('full-image').href=item.png;
  $('viewer-switch').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.side===side)));
}
$('viewer-switch').addEventListener('click',e=>{if(e.target.dataset.side)showPreview(e.target.dataset.side);});
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.close).close()));
for(const id of ['viewer','brief'])$(id).addEventListener('close',()=>lastFocus?.isConnected&&lastFocus.focus());
function renderBrief() {
  const n=data.pairs.filter(p=>choices[p.id]?.choice).length;
  $('brief-count').textContent=`${n} of ${data.pairs.length} comparisons reviewed`;
  const selected=data.pairs.filter(p=>choices[p.id]);
  $('brief-content').innerHTML=selected.length?data.categories.map(c=>{
    const pairs=selected.filter(p=>p.category===c.id);if(!pairs.length)return '';
    return `<section class="brief-category"><h3>${esc(c.name)}</h3>${pairs.map(p=>{const item=choices[p.id];return `<div class="brief-item"><h4>${String(p.number).padStart(2,'0')}. ${esc(p.title)}</h4><p class="preference">${esc(choiceNames[item.choice]||'Not decided')} · ${esc(preferredLabel(p,item.choice))}</p><p>${esc(p.before.format)} · ${esc(p.variable)}</p>${item.note?`<p>${esc(item.note)}</p>`:''}</div>`;}).join('')}</section>`;
  }).join(''):'<p class="brief-empty">Your brief starts with your first choice. Add a note wherever your preference needs more detail.</p>';
}
$('open-brief').addEventListener('click',e=>{lastFocus=e.currentTarget;renderBrief();$('brief').showModal();});
function download(text,type,filename) {
  const url=URL.createObjectURL(new Blob([text],{type})),link=document.createElement('a');
  link.href=url;link.download=filename;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
$('download-brief').addEventListener('click',()=>{download(buildBrief(data,choices),'text/markdown;charset=utf-8','playbook-preference-brief.md');$('brief-status').textContent='Preference brief downloaded.';});
$('download-json').addEventListener('click',()=>{download(JSON.stringify(exportChoices(choices),null,2)+'\n','application/json','playbook-design-choices.json');$('brief-status').textContent='Choices saved. Use “Restore choices” to bring them into another browser.';});
$('copy-brief').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(buildBrief(data,choices));$('brief-status').textContent='Brief copied.';}catch{$('brief-status').textContent='Clipboard unavailable. Use “Download brief” to keep a copy.';}});
$('import-json').addEventListener('click',()=>$('import-file').click());
$('import-file').addEventListener('change',async e=>{
  const file=e.target.files[0];if(!file)return;
  try{
    if(file.size>250000)throw new Error('This file is too large for a choices backup.');
    const imported=importChoices(JSON.parse(await file.text()),data.pairs);
    choices={...choices,...imported};persist();render();renderBrief();
    $('brief-status').textContent=`Restored ${Object.keys(imported).length} entries. Other choices were kept.`;
  }catch(error){$('brief-status').textContent=error instanceof SyntaxError?'That file is not valid JSON. Choose a saved Playbook choices file.':error.message;}
  e.target.value='';
});
// Keep another tab on this same gallery in sync without publishing choices anywhere.
window.addEventListener('storage',e=>{if(e.key!==STORAGE_KEY)return;try{choices=cleanChoices(JSON.parse(e.newValue||'{}'),data.pairs);render();if($('brief').open)renderBrief();}catch{}});
render();
