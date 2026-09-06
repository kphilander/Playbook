// Runs inside an artwork document in both studio and export checks.
export function inspectArtwork({kind='message',readingFloor}={},contextDocument){
   const document=contextDocument||globalThis.document;
   const getComputedStyle=element=>document.defaultView.getComputedStyle(element);
   const NodeFilter=document.defaultView.NodeFilter;
   const root=document.querySelector('.specimen'),box=root.getBoundingClientRect(),issues=[];
   const visible=r=>r.width>0&&r.height>0;
   const overlaps=(a,b)=>a.left<b.right-2&&a.right>b.left+2&&a.top<b.bottom-2&&a.bottom>b.top+2;
   const floor=readingFloor||{support:16,quiz:19,email:22}[kind]||42;
   const colors=new Map();
   // Campaign shadows use explicit minimum opacity over their reading areas.
   // Composite over pure white: the brightest possible photo pixel. This avoids
   // treating the solid color behind a photograph as its actual text backdrop.
   const photoShade=root.querySelector('.campaign-shade');
   const rootStyle=getComputedStyle(root);
   const shadeValue=name=>parseFloat(rootStyle.getPropertyValue('--photo-'+name));
   const rgb=s=>s.match(/[\d.]+/g)?.map(Number);
   const luminance=c=>c.slice(0,3).map(x=>x/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((a,x,i)=>a+x*[.2126,.7152,.0722][i],0);
   const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
   while(walk.nextNode()){
    const node=walk.currentNode,p=node.parentElement,text=node.textContent.trim();
    if(!text||p.closest('svg,style,[aria-hidden="true"]'))continue;
    const cs=getComputedStyle(p),range=document.createRange();range.selectNodeContents(node);
    const rects=[...range.getClientRects()].filter(visible);if(!rects.length||cs.visibility==='hidden'||cs.display==='none')continue;
    const size=parseFloat(cs.fontSize);if(size<floor)issues.push('Below reading floor: '+text);
    for(const r of rects){if(r.left<box.left-2||r.right>box.right+2||r.top<box.top-2||r.bottom>box.bottom+2)issues.push('Outside artboard: '+text);for(let a=p;a&&a!==root;a=a.parentElement){const ac=getComputedStyle(a),ar=a.getBoundingClientRect();if(/hidden|clip/.test(ac.overflowX+ac.overflowY)&&(r.left<ar.left-2||r.right>ar.right+2||r.top<ar.top-size*.25||r.bottom>ar.bottom+size*.25))issues.push('Clipped: '+text);}}
    let bg,ancestor=p;while(ancestor){const c=rgb(getComputedStyle(ancestor).backgroundColor);if(c&&c.length>=3&&(c.length<4||c[3]===1)){bg=c;break;}ancestor=ancestor.parentElement;}
    let backgroundLabel=bg?getComputedStyle(ancestor).backgroundColor:'';
    // A registered foreground reading surface can supply its own opaque color.
    // Its complete text bounds must stay inside that surface; transparent or
    // overflowing surfaces still use the conservative photo-shadow checks.
    const readingSurface=p.closest('[data-reading-surface]');
    const surfaceBox=readingSurface?.getBoundingClientRect();
    const solidSurface=readingSurface===ancestor&&rects.every(r=>r.left>=surfaceBox.left&&r.right<=surfaceBox.right&&r.top>=surfaceBox.top&&r.bottom<=surfaceBox.bottom);
    if(photoShade&&!solidSurface){
      const topEnd=box.top+box.height*shadeValue('top-end')/100,bottomStart=box.top+box.height*shadeValue('bottom-start')/100;
      const alphas=rects.map(r=>r.bottom<=topEnd?shadeValue('top-alpha'):r.top>=bottomStart?shadeValue('bottom-alpha'):0);
      const alpha=Math.min(...alphas);
      if(!Number.isFinite(alpha)||alpha<=0||alpha>1)issues.push('Text leaves the protected photo reading areas: '+text);
      else{const channel=255*(1-alpha);bg=[channel,channel,channel];backgroundLabel='photo shadow over brightest possible pixel';}
    }
    const fg=rgb(cs.color);if(bg&&fg){const a=luminance(fg),b=luminance(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);const key=cs.color+' on '+backgroundLabel;colors.set(key,Math.min(colors.get(key)||Infinity,+ratio.toFixed(2)));if(ratio<4.5)issues.push('Text contrast below 4.5: '+text+' ('+ratio.toFixed(2)+')');}
   }
   const blocks=kind==='support'?['.spec-header','.support-symbol','h1','.support-intro','.contact-panel','.support-note','.support-footer']:kind==='email'?['.spec-header','.email-card','.spec-footer']:kind==='quiz'?['.spec-header','.eyebrow','h1','.answers','.quiz-note','.spec-footer']:['.spec-header','h1','.intro','.ledger','.plan','.photo-frame','.takeaway','.spec-action','.spec-footer'];
   const elements=kind==='message'?[...root.querySelectorAll(':scope > [data-block],:scope > [data-reading-surface] > [data-block]')]:blocks.map(s=>root.querySelector(s)).filter(Boolean);
   for(let i=0;i<elements.length;i++)for(let j=i+1;j<elements.length;j++){
    const a=elements[i],b=elements[j],ar=a.getBoundingClientRect(),br=b.getBoundingClientRect();
    // The banner journey deliberately shows its support route inside a mocked browser surface.
    const isRoute=a.classList.contains('mc-route')||b.classList.contains('mc-route');
    const contains=(x,y)=>x.left<=y.left&&x.right>=y.right&&x.top<=y.top&&x.bottom>=y.bottom;
    const surface=a.matches('section.mc-banner,.mc-destination')||b.matches('section.mc-banner,.mc-destination');
    if(overlaps(ar,br)&&!(isRoute&&surface&&(contains(ar,br)||contains(br,ar))))issues.push('Content overlap: '+a.className+' / '+b.className);
   }
   if(root.innerText.includes('{{'))issues.push('Unresolved brand token');
   const h=getComputedStyle(root.querySelector('h1'));if(!document.fonts.check(h.fontWeight+' '+h.fontSize+' '+h.fontFamily.split(',')[0]))issues.push('Display font unavailable');
   for(const selector of ['.email-card','.email-tip','.plan','.ledger>div','.contact-panel','.answers','.mc-contact','.mc-warning','.mc-plan','.mc-route']){
    for(const container of root.querySelectorAll(selector)){
     const children=[...container.children].filter(el=>getComputedStyle(el).position!=='absolute'&&visible(el.getBoundingClientRect()));
     for(let i=0;i<children.length;i++)for(let j=i+1;j<children.length;j++)if(overlaps(children[i].getBoundingClientRect(),children[j].getBoundingClientRect()))issues.push('Internal overlap: '+selector);
     const r=container.getBoundingClientRect();
     for(const child of children){const c=child.getBoundingClientRect();if(c.bottom>r.bottom+2||c.top<r.top-2||c.left<r.left-2||c.right>r.right+2)issues.push('Content exceeds container: '+selector);}
    }
   }
   const blockCopy=kind==='message'?elements.map(e=>e.tagName+'.'+e.className+': '+e.innerText.replace(/\s+/g,' ').trim()).sort():undefined;
   return{width:box.width,height:box.height,blockCopy,issues:[...new Set(issues)],contrastPairs:Object.fromEntries(colors),copy:root.innerText.replace(/\s+/g,' ').trim()};
}
