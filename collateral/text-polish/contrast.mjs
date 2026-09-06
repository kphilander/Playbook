// Browser-side contrast audit for text-led layouts with solid or translucent surfaces.
export function checkContrast(selector){
 const root=document.querySelector(selector),issues=[],pairs={},canvas=document.createElement('canvas');canvas.width=canvas.height=1;
 const ctx=canvas.getContext('2d',{willReadFrequently:true});
 const rgba=color=>{ctx.clearRect(0,0,1,1);ctx.fillStyle=color;ctx.fillRect(0,0,1,1);const c=[...ctx.getImageData(0,0,1,1).data];return [...c.slice(0,3),c[3]/255];};
 const over=(a,b)=>a.slice(0,3).map((v,i)=>v*a[3]+b[i]*(1-a[3]));
 const luminance=c=>c.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
 const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 while(walk.nextNode()){
  const node=walk.currentNode,e=node.parentElement,t=node.textContent.trim();if(!t||e.closest('svg,style,[aria-hidden="true"]'))continue;
  const s=getComputedStyle(e),r=document.createRange();r.selectNodeContents(node);if(![...r.getClientRects()].some(b=>b.width&&b.height)||s.visibility==='hidden')continue;
  const ancestors=[];for(let a=e;a;a=a.parentElement)ancestors.unshift(a);
  let bg=[255,255,255];for(const a of ancestors)bg=over(rgba(getComputedStyle(a).backgroundColor),bg);
  const fg=over(rgba(s.color),bg),a=luminance(fg),b=luminance(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
  const key=s.color+' on '+bg.map(v=>Math.round(v)).join(',');pairs[key]=Math.min(pairs[key]||Infinity,+ratio.toFixed(2));
  if(ratio<4.5)issues.push(t+' · '+ratio.toFixed(2));
 }
 return {pairs,issues};
}
