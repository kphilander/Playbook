const media=await fetch('media.json').then(r=>{if(!r.ok)throw new Error('Preview data could not load.');return r.json();});
const key='playbook-campaign-preferences-v1';
const notes={playbook:'Playbook · navy, emerald and Inter.',club:'Social Club · forest, pale lime and Manrope.',circuit:'Circuit · electric blue, lime and Space Grotesk.'};
let skin=new URL(location.href).searchParams.get('skin');if(!Object.hasOwn(notes,skin))skin='playbook';
const readChoices=()=>{try{const value=JSON.parse(localStorage.getItem(key));if(value&&typeof value==='object'&&!Array.isArray(value))return value;}catch{}return {};};
const choiceKey=f=>'campaign-family-'+f.dataset.format+'-'+skin;
function showChoices(savedFormat){
  const choices=readChoices();
  for(const format of document.querySelectorAll('[data-format]')){
    const value=choices[choiceKey(format)],buttons=[...format.querySelectorAll('[data-choice]')];
    for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.choice===value));
    format.querySelector('output').textContent=buttons.some(b=>b.dataset.choice===value)?(savedFormat===format?'Feedback saved':'Saved feedback'):'';
  }
}
function showSkin(){
  for(const button of document.querySelectorAll('[data-skin]'))button.setAttribute('aria-pressed',String(button.dataset.skin===skin));
  document.getElementById('skin-note').textContent=notes[skin];
  for(const format of document.querySelectorAll('[data-format]')){
    const id=format.dataset.format,stem=id+'-'+skin,m=media[stem],img=format.querySelector('img');
    img.src=m.png;img.alt=format.querySelector('h2').textContent+' · '+notes[skin]+' Leave room for the rest, with friends meeting for dinner.';
    for(const a of format.querySelectorAll('.artwork,.png'))a.href=m.png;
    format.querySelector('.png').textContent=m.pixels.join(' × ')+' PNG ↗';
    format.querySelector('.live').href=`renders/${stem}.html`;
    format.querySelector('.edit').href=`../../studio/index.html?template=${m.templateId}&variant=quiet&skin=${skin}&compare=${skin==='club'?'circuit':'club'}&asset=rest-dinner`;
  }
  showChoices();
}
for(const button of document.querySelectorAll('[data-skin]'))button.addEventListener('click',()=>{skin=button.dataset.skin;const url=new URL(location.href);url.searchParams.set('skin',skin);history.replaceState(null,'',url);showSkin();});
for(const format of document.querySelectorAll('[data-format]'))for(const button of format.querySelectorAll('[data-choice]'))button.addEventListener('click',()=>{
  const choices=readChoices(),id=choiceKey(format);if(choices[id]===button.dataset.choice)delete choices[id];else choices[id]=button.dataset.choice;
  try{localStorage.setItem(key,JSON.stringify(choices));showChoices(format);}catch{format.querySelector('output').textContent='Browser saving unavailable.';}
});
addEventListener('storage',event=>{if(event.key===key)showChoices();});
showSkin();
