// Run after CSS/fonts load, then serialize the DOM. Artwork exports need no JS.
export async function applyBrandPresentation({selector,name,mandatory='',contact={}}){
  const root=document.querySelector(selector);
  if(!root)throw new Error('Missing template artboard.');
  root.classList.add('pb-brand-package');
  const style=getComputedStyle(root),token=n=>style.getPropertyValue(n).trim();
  const mode=token('--pb-logo-mode');
  const logo=token('--pb-logo-image').match(/^url\(["']?(.*?)["']?\)$/)?.[1];
  const logos=[];
  if(logo&&['replace','co-brand','cobrand'].includes(mode)){
    for(const e of root.querySelectorAll('.card-logo,.story-logo,.poster-logo,.hero-logo,.footer-logo,.badge-logo,.widget-logo,.guide-logo,.presence-brand')){
      if(e.classList.contains('pb-brand-lockup'))continue;
      const original=document.createElement('span');original.className='pb-original-logo';
      original.append(...e.childNodes);e.append(original);
      e.classList.add('pb-brand-lockup');e.dataset.logoMode=mode;
      if(mode==='replace')original.hidden=true;
      const img=new Image();img.className='pb-replacement-logo';img.alt=name;img.src=logo;e.append(img);
      await img.decode();logos.push({width:img.naturalWidth,height:img.naturalHeight});
    }
    if(mode==='replace')root.querySelectorAll('.operator-placeholder,.co-brand-divider').forEach(e=>e.remove());
  }
  // A phone number never implies SMS. A website never implies live chat.
  for(const e of root.querySelectorAll('.footer-channels,.support-box .channels')){
    e.replaceChildren();
    const add=(label,value,href)=>{
      if(!value)return;
      const line=document.createElement('div'),a=document.createElement('a');
      a.textContent=label+value;if(href)a.href=href;
      line.append(a);e.append(line);
    };
    if(!e.matches('.support-box .channels'))add('Call ',contact.number,'tel:'+contact.number?.replace(/[^+\d]/g,''));
    add('Text ',contact.text_number,contact.text_number&&/^\+?[\d\s()-]+$/.test(contact.text_number)?'sms:'+contact.text_number.replace(/[^+\d]/g,''):null);
    add('Chat: ',contact.chat_url,contact.chat_url);
    if(!contact.chat_url)add('',contact.website,contact.website&&(contact.website.startsWith('https://')?contact.website:'https://'+contact.website));
  }
  const footer=root.querySelector('[data-protected-zone],.footer,.legal-strip,.legal-row');
  if(mandatory&&footer&&!footer.querySelector('.pb-regional-message')){
    const message=document.createElement('div');message.className='pb-regional-message';message.textContent=mandatory;
    footer.prepend(message);
  }
  const gradients=token('--pb-allow-gradients')!=='0';
  root.dataset.pbGradients=gradients?'on':'off';
  // Vector shapes preserve geometric effects without decorative color blending.
  const surface=root.dataset.surface;
  if(!gradients&&['contour','paper','emerald','signal'].includes(surface)){
    const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');
    const w=root.offsetWidth,h=root.offsetHeight;
    svg.classList.add('pb-surface-graphic');svg.setAttribute('viewBox',`0 0 ${w} ${h}`);svg.setAttribute('aria-hidden','true');
    const shape=(tag,attrs)=>{const e=document.createElementNS(ns,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);svg.append(e);};
    if(surface==='contour')for(let r=160;r<Math.max(w,h)*2;r+=160)shape('ellipse',{cx:w*1.15,cy:h*1.04,rx:r,ry:r*1.1,fill:'none',stroke:'var(--pb-color-secondary)','stroke-width':2,opacity:.06});
    if(surface==='paper')for(let y=h*.65;y<h;y+=72)shape('path',{d:`M0 ${y}H${w}`,stroke:'var(--pb-color-primary)','stroke-width':1,opacity:.05});
    if(surface==='signal'){
      for(let x=0;x<w;x+=90)shape('path',{d:`M${x} 0V${h}`,stroke:'var(--pb-color-secondary)',opacity:.09});
      for(let y=0;y<h;y+=90)shape('path',{d:`M0 ${y}H${w}`,stroke:'var(--pb-color-secondary)',opacity:.09});
    }
    if(surface==='emerald')shape('path',{d:`M${w} ${h*.38}L${w*.5} ${h}H${w*.68}L${w} ${h*.6}Z`,fill:'var(--pb-color-primary)',opacity:.06});
    root.prepend(svg);
  }
  return {logoMode:mode,logos,gradients,headlineFont:token('--pb-font-heading'),bodyFont:token('--pb-font-body'),contact};
}
