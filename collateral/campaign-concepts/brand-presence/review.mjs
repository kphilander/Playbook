const revisions=await fetch('revisions.json').then(r=>{if(!r.ok)throw new Error('Preview revisions could not load.');return r.json();});
const notes={playbook:'Playbook · navy, emerald and Inter.',club:'Social Club · forest, pale lime and Manrope.',circuit:'Circuit · electric blue, lime and Space Grotesk.'};
for(const button of document.querySelectorAll('[data-skin]'))button.addEventListener('click',()=>{
  const skin=button.dataset.skin;
  for(const b of document.querySelectorAll('[data-skin]'))b.setAttribute('aria-pressed',String(b===button));
  document.getElementById('skin-note').textContent=notes[skin];
  for(const figure of document.querySelectorAll('[data-treatment]')){
    const variant=figure.dataset.treatment,stem=variant+'-'+skin,png=`renders/${stem}.png?v=${revisions[stem]}`;
    figure.querySelector('img').src=png;
    figure.querySelector('img').alt=figure.querySelector('figcaption strong').textContent+' · '+notes[skin]+' Leave room for the rest, with friends meeting for dinner.';
    for(const a of figure.querySelectorAll('.artwork,.png'))a.href=png;
    figure.querySelector('.live').href=`renders/${stem}.html`;
    figure.querySelector('.edit').href=`../../studio/index.html?template=campaign-presence&variant=${variant}&skin=${skin}&compare=${skin==='club'?'circuit':'club'}&asset=rest-dinner`;
  }
});
