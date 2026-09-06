// Educational diagrams are data/geometry, never generated raster text.
// Roulette rings count pockets; they do not claim to show physical wheel order.
export const rouletteComparisons=[
  {name:'European',pockets:37,zeros:1,label:'0'},
  {name:'American',pockets:38,zeros:2,label:'00'}
];
export const straightUpEdge=({pockets})=>(1-36/pockets)*100;

const pocketRing=({pockets,zeros,label})=>`<svg viewBox="0 0 400 400" aria-hidden="true">${Array.from({length:pockets},(_,i)=>{
  const angle=(i/pockets)*Math.PI*2-Math.PI/2;
  const x=200+174*Math.cos(angle),y=200+174*Math.sin(angle);
  return `<circle class="${i<zeros?'zero-pocket':'number-pocket'}" cx="${x.toFixed(3)}" cy="${y.toFixed(3)}" r="10"/>`;
}).join('')}</svg><strong class="zero-symbol">${label}</strong>`;

export function campaignGraphic(visual){
  if(visual==='nearmiss')return `<figure class="campaign-reels" data-block><div class="reel-field"><svg viewBox="0 0 1080 430" aria-hidden="true"><path d="M360 0V430M720 0V430"/><path class="reel-marker" d="M24 190L48 215L24 240ZM1056 190L1032 215L1056 240Z"/></svg><div class="reel-symbols" aria-label="Illustrative reel result: seven, seven, six"><span>7</span><span>7</span><span>6</span></div></div><figcaption>Close-looking result. No prediction.</figcaption></figure>`;
  if(visual==='zero')return `<figure class="campaign-wheels" data-block>${rouletteComparisons.map(w=>`<div class="wheel-study" data-pockets="${w.pockets}" data-zeros="${w.zeros}"><div class="pocket-ring">${pocketRing(w)}</div><div class="wheel-caption">${w.name}<span>${w.pockets} pockets</span></div><strong class="wheel-edge">${straightUpEdge(w).toFixed(2)}<span>%</span></strong></div>`).join('')}</figure>`;
  if(visual==='time')return `<figure class="campaign-dial" data-block aria-label="A clock-inspired dial with a pause symbol: a reminder to choose an end time."><svg viewBox="0 0 960 550" aria-hidden="true"><circle class="dial-field" cx="480" cy="275" r="265"/><path class="dial-arc" d="M304 470 A263 263 0 1 1 656 470"/>${Array.from({length:48},(_,i)=>{
    const a=(i/60)*Math.PI*2+Math.PI*.72;
    const r=i%5===0?208:224;
    return `<path class="dial-tick" d="M${(480+Math.cos(a)*r).toFixed(2)} ${(275+Math.sin(a)*r).toFixed(2)}L${(480+Math.cos(a)*244).toFixed(2)} ${(275+Math.sin(a)*244).toFixed(2)}"/>`;
  }).join('')}<path class="dial-pause" d="M410 180H455V350H410ZM505 180H550V350H505Z"/><circle class="dial-stop" cx="656" cy="470" r="17"/></svg></figure>`;
  return '';
}
