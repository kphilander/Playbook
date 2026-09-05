import {writeFileSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {here,run,json,readJSON,frozen,verifyInputs} from './common.mjs';
verifyInputs();
const observations=existsSync(join(here,'review-observations.json'))?readJSON(join(here,'review-observations.json')):{};
const settings=readJSON(join(here,'photography-settings.json'));
const data={title:run.title,order:run.presentationOrder,participants:run.participants,concepts:[]};
for(const p of run.participants){
 const {manifest}=frozen(p.id),validation=readJSON(join(here,'rendered',p.id,'validation.json'));
 for(const c of manifest.concepts){
  const png=`rendered/${p.id}/${c.id}.png`;if(!existsSync(join(here,png)))throw new Error('Missing card PNG');
  const recordPath=join(here,'photography-output',settings.runId,p.id,run.condition,c.id,'attempt-1','result.json');
  const photoRecord=readJSON(recordPath),review=observations[`${p.id}/${c.id}`]||{};
  data.concepts.push({...c,participant:p.id,png,accessibleAlt:[c.title,c.body,c.takeaway,review.actualPhotoAlt||'AI-generated editorial photo; authored scene description is available in the details.'].join(' '),observations:review.notes||[],issues:validation.concepts.find(v=>v.id===c.id).issues,photoStatus:photoRecord.status,photoModel:photoRecord.actualModelVersion||photoRecord.requestedModel,photoElapsedMs:photoRecord.elapsedMs,photoRecord:relative(here,recordPath),manifestPath:`first-submissions/${p.id}/manifest.json`,freezeRecord:`first-submissions/${p.id}/record.json`});
 }
}
writeFileSync(join(here,'data.js'),'window.PHOTO_ROUND = '+JSON.stringify(data).replace(/</g,'\\u003c')+';\n');
writeFileSync(join(here,'gallery-manifest.json'),json({builtAt:new Date().toISOString(),entries:data.concepts.map(c=>({participant:c.participant,id:c.id,png:c.png,photoStatus:c.photoStatus,productionIssues:c.issues,reviewObservations:c.observations.length}))}));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
writeFileSync(join(here,'contact-sheet.html'),`<!doctype html><html lang="en"><meta charset="utf-8"><title>Playbook photography round — coded entries</title><link rel="stylesheet" href="../fonts.css"><style>*{box-sizing:border-box}body{margin:0;background:#f5f5fa;color:#1b2838;font-family:Inter,sans-serif}.sheet{padding:40px;width:2200px}h1{font-size:36px;margin:0 0 14px}p{font-size:21px;margin:0 0 25px}.grid{display:grid;grid-template-columns:repeat(5,1fr);gap:20px}img{width:100%;display:block}.label{font-size:23px;margin-bottom:15px}h2{font-size:20px;line-height:1.3}</style>${run.categories.map(cat=>`<section class="sheet" data-category="${cat}"><h1>Playbook / Round 02 / ${esc(cat)}</h1><p>Shared template and Google photography · First submissions · Unscored · Coded viewing labels</p><div class="grid">${run.presentationOrder.map(id=>{const c=data.concepts.find(c=>c.participant===id&&c.id===cat);return `<article><div class="label">Entry ${id.split('-')[1]}</div><img src="${c.png}" alt="${esc(c.accessibleAlt)}"><h2>${esc(c.title)}</h2></article>`;}).join('')}</div></section>`).join('')}</html>`);
console.log(`Built ${data.concepts.length} concepts for ${data.participants.length} participants.`);
