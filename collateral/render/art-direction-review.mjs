import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';

const studies=[
  {id:'seat',file:'card-1c-lucky-machine',title:'One idea. One illustration.',note:'A bolder myth card, built around a simple visual metaphor.',status:'Preferred · kept unchanged'},
  {id:'odds',file:'card-2a-house-edge',title:'Let the numbers lead.',note:'An editorial comparison with larger rates and the assumptions beside them.',status:'Preferred · kept unchanged'},
  {id:'photo',file:'poster-19e-never-due',title:'Keep the photograph to the edge.',note:'You preferred the original full-bleed photograph and disliked the inset poster treatments. That distinction is the starting point for the new campaign concepts.',status:'Full-bleed photo preferred',before:'comparison/art-direction-before',beforeLabel:'Preferred photo direction · original',afterLabel:'Disliked · inset treatment'}
];
export function addArtDirectionReview(html){
  const region=`<!-- art-direction-review:start -->
<link rel="stylesheet" href="art-direction-review.css">
<section id="art-direction-review" aria-labelledby="art-review-title">
  <header class="art-review-intro">
    <p class="art-review-kicker">Creative review / September 5</p>
    <h1 id="art-review-title">Your direction, clarified.</h1>
    <p>Keep the revised illustration and odds cards. For photography, keep the image filling the page and reaching the edges.</p>
    <p style="margin-top:20px"><a href="../campaign-concepts/index.html">See four new concepts in 12 crisp treatments →</a></p>
    <nav aria-label="Latest artwork"><a href="#art-seat">Illustration</a><a href="#art-odds">Numbers</a><a href="#art-photo">Photography</a><a href="#earlier-comparisons">Earlier comparisons ↓</a></nav>
  </header>
  ${studies.map((s,i)=>`<article class="art-review-study" id="art-${s.id}">
    <header><p class="art-review-kicker">0${i+1} / ${s.status}</p><h2>${s.title}</h2><p>${s.note}</p></header>
    <div class="art-review-pair">
      <figure><figcaption>${s.beforeLabel||'Previous version'}</figcaption><a href="${s.before||'comparison/art-direction-before'}/${s.file}.png" target="_blank" rel="noopener" aria-label="Open previous ${s.id} artwork at full size"><img src="${s.before||'comparison/art-direction-before'}/${s.file}.png" alt="${s.id==='photo'?'Original full-bleed photo direction, preferred':'Previous '+s.id+' design'}" width="1080" height="${s.id==='photo'?1440:1350}" loading="${i===0?'eager':'lazy'}"></a></figure>
      <figure><figcaption>${s.afterLabel||'Preferred direction · unchanged'}</figcaption><a href="${s.file}.png?v=art-direction-${s.id==='photo'?2:1}" target="_blank" rel="noopener" aria-label="Open revised ${s.id} artwork at full size"><img src="${s.file}.png?v=art-direction-${s.id==='photo'?2:1}" alt="${s.id==='photo'?'Inset photo poster treatment, disliked':'Preferred '+s.id+' design'}" width="1080" height="${s.id==='photo'?1440:1350}" loading="${i===0?'eager':'lazy'}"></a></figure>
    </div>
  </article>`).join('\n')}
  <p class="art-review-end">These are three English concept revisions. The existing market-specific studies and wider library remain below.</p>
</section><div id="earlier-comparisons"></div>
<!-- art-direction-review:end -->`;
  const clean=html.replace(/\n?<!-- art-direction-review:start -->[\s\S]*?<!-- art-direction-review:end -->\n?/,'');
  return clean.replace(/<body([^>]*)>/,`<body$1>\n${region}\n`);
}
if(process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const path=new URL('_comparison.html',import.meta.url);
  writeFileSync(path,addArtDirectionReview(readFileSync(path,'utf8')));
  console.log('Updated the three latest comparisons; historical baselines preserved.');
}
