const key='playbook-gamesense-brand-trial-v1';
const manifest=await fetch('manifest.json').then(r=>{if(!r.ok)throw new Error('Cannot load brand trial');return r.json();});
const params=new URLSearchParams(location.search),gallery=document.querySelector('#gallery');
let group=['favorites','text','photo'].includes(params.get('group'))?params.get('group'):'favorites';
let choices={};try{choices=JSON.parse(localStorage.getItem(key)||'{}');}catch{document.querySelector('#storage-status').textContent='Browser storage is unavailable. Use Export my choices to keep your feedback.';}
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const category=document.querySelector('#category'),surface=document.querySelector('#surface'),compare=document.querySelector('#compare');
const names={flat:'Flat',spotlight:'Spotlight / flat field',contour:'Contour',paper:'Editorial',emerald:'Color field',signal:'Gridline',photo:'Restrained'};
function draw(){
  const items=manifest.items.filter(i=>(group==='favorites'?i.favorite:group==='photo'?i.category==='Photography':i.category!=='Photography')&&(category.value==='all'||i.category===category.value)&&(surface.value==='all'||i.surface===surface.value));
  document.querySelectorAll('[data-group]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.group===group));
  category.disabled=surface.disabled=group!=='text';
  document.querySelector('#count').textContent=items.length+' '+(items.length===1?'example':'examples')+(group==='favorites'?' · chosen in your Playbook review':'');
  document.querySelector('#empty').hidden=!!items.length;gallery.classList.toggle('single',!compare.checked);
  gallery.innerHTML=items.map(i=>`<section class="example" id="${i.id}" data-id="${i.id}"><header><div><p class="eyebrow">${esc(i.category)} / ${esc(names[i.surface])}</p><h2>${esc(i.title)}</h2></div>${i.favorite?'<span class="favorite">Your Playbook favorite</span>':''}</header><div class="pair"><figure class="before"><figcaption>Playbook · earlier review</figcaption><a href="${i.before}" target="_blank" rel="noopener"><img loading="lazy" src="${i.before}" alt="Playbook: ${esc(i.title)}"></a></figure><figure><figcaption>GameSense · British Columbia</figcaption><a href="renders/${i.id}.png" target="_blank" rel="noopener"><img loading="lazy" src="thumbs/${i.id}.png" width="${i.dimensions[0]}" height="${i.dimensions[1]}" alt="GameSense: ${esc(i.title)}"></a></figure></div><div class="actions"><a href="live/${i.id}.html" target="_blank" rel="noopener">Live HTML ↗</a><a href="renders/${i.id}.png" target="_blank" rel="noopener">Full PNG · ${i.pixels.join(' × ')}</a><div class="choices" role="group" aria-label="Rate GameSense: ${esc(i.title)}">${[['keep','Works well'],['refine','Refine'],['pass','Pass']].map(([value,label])=>`<button data-choice="${value}" aria-pressed="${choices[i.id]===value}">${label}</button>`).join('')}</div><output class="feedback" aria-live="polite">${choices[i.id]?'Saved':''}</output></div></section>`).join('');
  const url=new URL(location.href);url.searchParams.set('group',group);history.replaceState(null,'',url);
}
document.querySelectorAll('[data-group]').forEach(b=>b.addEventListener('click',()=>{group=b.dataset.group;category.value=surface.value='all';draw();}));
category.addEventListener('change',draw);surface.addEventListener('change',draw);compare.addEventListener('change',()=>gallery.classList.toggle('single',!compare.checked));
gallery.addEventListener('click',e=>{
  const b=e.target.closest('[data-choice]');if(!b)return;
  const card=b.closest('.example'),id=card.dataset.id;
  if(choices[id]===b.dataset.choice)delete choices[id];else choices[id]=b.dataset.choice;
  let saved=true;try{localStorage.setItem(key,JSON.stringify(choices));}catch{saved=false;}
  card.querySelectorAll('[data-choice]').forEach(n=>n.setAttribute('aria-pressed',choices[id]===n.dataset.choice));
  card.querySelector('output').textContent=choices[id]?(saved?'Saved':'Export to save'):'';
});
document.querySelector('#save').addEventListener('click',()=>{
  const blob=new Blob([JSON.stringify({brand:manifest.brand,region:manifest.region,inputHashes:manifest.inputHashes,choices},null,2)+'\n'],{type:'application/json'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='gamesense-brand-trial-choices.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
draw();
