const data=window.PHOTO_ROUND;
const selected=new Set(data.order.slice(0,3));
let category='all',reveal=false;
const labels={sports:'Sports betting',myth:'Gambling myths',wildcard:'Agent’s choice'};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const name=id=>reveal?data.participants.find(p=>p.id===id).label:'Entry '+id.split('-')[1];
function render(){
 $('#picker').innerHTML=data.order.map(id=>`<button type="button" data-entry="${id}" aria-pressed="${selected.has(id)}">${esc(name(id))}</button>`).join('');
 const ids=data.order.filter(id=>selected.has(id)),cats=category==='all'?['sports','myth','wildcard']:[category];
 $('#gallery').innerHTML=cats.map((cat)=>`<section class="category-block"><div class="category-heading"><span class="number">0${['sports','myth','wildcard'].indexOf(cat)+1}</span><h2>${labels[cat]}</h2></div><div class="cards" style="--columns:${ids.length}">${ids.map(id=>{
  const c=data.concepts.find(c=>c.participant===id&&c.id===cat);
  if(!c)return `<div class="empty">${esc(name(id))}: submission unavailable. See run records.</div>`;
  return `<article class="card"><div class="entry-label"><span>${esc(name(id))}</span><small>First submission</small></div><button class="art-button" type="button" data-detail="${id}/${cat}" aria-label="Open ${esc(c.title)}"><img src="${c.png}" alt="${esc(c.accessibleAlt)}" width="1080" height="1350" loading="lazy"></button><h3>${esc(c.title)}</h3><p class="card-summary">${esc(c.rationale)}</p><div class="card-links"><button class="text-button" type="button" data-detail="${id}/${cat}">Copy, prompt & review</button><a href="${c.png}" target="_blank" rel="noopener">Full PNG ↗</a></div>${c.observations.length?'<span class="review-mark">Review observations available</span>':''}${c.issues.length?'<span class="review-mark">Production checks found issues</span>':''}</article>`;
 }).join('')}</div></section>`).join('');
 $('#count').textContent=`${ids.length*cats.length} concepts shown · 15 total`;
}
function showDetail(key){
 const [participant,id]=key.split('/'),c=data.concepts.find(c=>c.participant===participant&&c.id===id);
 $('#detail-content').innerHTML=`<div class="detail-grid"><div><img class="detail-art" src="${c.png}" alt="${esc(c.accessibleAlt)}"></div><div class="detail-copy"><p class="meta">${esc(name(participant))} / ${labels[id]}</p><h2>${esc(c.title)}</h2><p>${esc(c.body)}</p><p><strong>${esc(c.takeaway)}</strong></p><h3>Social caption</h3><p>${esc(c.caption)}</p><h3>Why this photo</h3><p>${esc(c.photoRationale)}</p>${c.observations.length?`<div class="note-box"><strong>Separate review observations</strong>${c.observations.map(o=>`<p>${esc(o)}</p>`).join('')}<p>The original submission is unchanged. These observations are not independent scores.</p></div>`:''}${c.issues.length?`<div class="note-box"><strong>Production checks</strong>${c.issues.map(i=>`<p>${esc(i)}</p>`).join('')}</div>`:''}<details><summary>Exact image prompt</summary><pre>${esc(c.photoPrompt)}</pre><p>Google ${esc(c.photoModel)} · ${esc(c.photoStatus)} · ${c.photoElapsedMs?Math.round(c.photoElapsedMs/100)/10+' seconds':'duration unavailable'} · one attempt</p><a href="${c.photoRecord}" target="_blank" rel="noopener">Generation record ↗</a></details><details><summary>Sources supplied by the model</summary>${c.sources.map(s=>`<p><a href="../../../../${encodeURI(s.path)}" target="_blank" rel="noopener">${esc(s.path)} ↗</a><br><strong>${esc(s.section)}</strong><br>${esc(s.note)}</p>`).join('')}</details><details><summary>Authored intentions & first submission</summary><p><strong>Intended photo:</strong> ${esc(c.photoAlt)}</p><p><strong>Intended card:</strong> ${esc(c.alt)}</p><p>The descriptions above were written before image generation.</p><a href="${c.manifestPath}" target="_blank" rel="noopener">Frozen manifest ↗</a> · <a href="${c.freezeRecord}" target="_blank" rel="noopener">Submission hash ↗</a></details><p><a href="${c.png}" download>Download card PNG</a></p></div></div>`;
 $('#detail').showModal();
}
$('#picker').addEventListener('click',event=>{
 const button=event.target.closest('[data-entry]');if(!button)return;
 const id=button.dataset.entry;
 if(selected.has(id)&&selected.size===1){$('#selection-status').textContent='Keep at least one entry selected.';return;}
 if(!selected.has(id)&&selected.size===3){$('#selection-status').textContent='Deselect an entry to compare another. Three fit side by side.';return;}
 selected.has(id)?selected.delete(id):selected.add(id);$('#selection-status').textContent='';render();
});
$('#categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;category=b.dataset.category;for(const button of $('#categories').querySelectorAll('button'))button.setAttribute('aria-pressed',String(button===b));render();});
$('#reveal').addEventListener('change',e=>{reveal=e.target.checked;render();});
$('#gallery').addEventListener('click',e=>{const b=e.target.closest('[data-detail]');if(b)showDetail(b.dataset.detail);});
$('.close').addEventListener('click',()=>$('#detail').close());
$('#detail').addEventListener('click',e=>{if(e.target===$('#detail')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
render();
