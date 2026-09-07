const key='playbook-text-surfaces-preferences-v1';
const designs=[...document.querySelectorAll('.design')];
const groups=[...document.querySelectorAll('.template-group')];
const select=document.querySelector('#template');
const validChoices=['favorite','maybe','pass'];
const validIds=new Set(designs.map(d=>d.dataset.id));
function read(){try{const value=JSON.parse(localStorage.getItem(key));return value&&typeof value==='object'&&!Array.isArray(value)?Object.fromEntries(Object.entries(value).filter(([id,v])=>validIds.has(id)&&validChoices.includes(v))):{};}catch{return {};}}
function paint(savedId){const values=read();for(const design of designs){for(const button of design.querySelectorAll('[data-choice]'))button.setAttribute('aria-pressed',String(values[design.dataset.id]===button.dataset.choice));design.querySelector('.save-status').textContent=values[design.dataset.id]?(savedId===design.dataset.id?'Preference saved':'Saved preference'):'';}}
function show(id,updateUrl=true){
  const index=groups.findIndex(g=>g.dataset.template===id);if(index<0)return show(groups[0].dataset.template,updateUrl);
  select.value=id;
  for(const group of groups){group.hidden=group.dataset.template!==id;if(!group.hidden)for(const img of group.querySelectorAll('img[data-src]')){img.src=img.dataset.src;delete img.dataset.src;}}
  document.querySelector('#position').textContent=(index+1)+' / '+groups.length;
  document.querySelector('#baseline-choice').textContent='Previously: '+(groups[index].dataset.previous==='keep'?'looks good':'needs work');
  if(updateUrl){const url=new URL(location.href);url.searchParams.set('template',id);history.replaceState(null,'',url);}
}
for(const design of designs)for(const button of design.querySelectorAll('[data-choice]'))button.addEventListener('click',()=>{const values=read(),id=design.dataset.id;if(values[id]===button.dataset.choice)delete values[id];else values[id]=button.dataset.choice;try{localStorage.setItem(key,JSON.stringify(values));paint(id);}catch{design.querySelector('.save-status').textContent='Browser saving unavailable.';}});
select.addEventListener('change',()=>show(select.value));
for(const [id,step] of [['previous',-1],['next',1]])document.querySelector('#'+id).addEventListener('click',()=>show(groups[(select.selectedIndex+step+groups.length)%groups.length].dataset.template));
document.querySelector('#export').addEventListener('click',()=>{
  const values=read(),url=URL.createObjectURL(new Blob([JSON.stringify({review:'playbook-text-surfaces',version:1,choices:values},null,2)+'\n'],{type:'application/json'}));
  const a=document.createElement('a');a.href=url;a.download='playbook-background-choices.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  document.querySelector('#export-status').textContent='Exported '+Object.keys(values).length+' choices.';
});
addEventListener('storage',e=>{if(e.key===key)paint();});
addEventListener('popstate',()=>show(new URL(location.href).searchParams.get('template'),false));
show(new URL(location.href).searchParams.get('template'),false);paint();
