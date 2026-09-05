import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here=dirname(fileURLToPath(import.meta.url));
const directions=JSON.parse(readFileSync(join(here,'directions.json'),'utf8'));
const arrow='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 24h32M26 11l13 13-13 13"/></svg>';
const photo='../../creative-review/photography/output/creative-refresh-20260905/creative-refresh/shared-input/casino-conversation/attempt-1/candidate-1-image-1.jpg';
const header=label=>`<header class="spec-header"><span class="wordmark">{{PROGRAM_SHORT_NAME}}</span><span class="series">${label}</span></header>`;
const footer='<footer class="spec-footer" data-protected-zone="support-and-legal"><p>Free support: <b>{{HELPLINE_NUMBER}}</b></p><p>{{AGE_DISCLAIMER}}</p></footer>';
const content={
 odds:`${header('Bet slip decoded')}<h1>Your return.<br><em>Your profit.</em></h1><p class="intro">They’re different numbers.<br>Here’s one winning cash bet.</p><figure class="ledger" aria-label="A fifty dollar total return contains your twenty dollar stake and thirty dollars profit."><div class="total"><span class="ledger-label">Total returned</span><strong>$50</strong></div><div class="stake"><span class="ledger-label">Your stake back</span><strong>$20</strong></div><div class="profit"><span class="ledger-label">Your profit</span><strong>+$30</strong></div></figure><p class="takeaway">The payout includes the money you put in.<br>Subtract your stake to see the profit.</p><p class="spec-action">Know what comes back.${arrow}</p>${footer}`,
 lifestyle:`${header('Your time. Your call.')}<h1>Even a good night<br><em>has an end time.</em></h1><figure class="photo-frame"><img src="${photo}" alt="Three adult friends share a relaxed conversation in a warmly lit casino lounge."></figure><p class="takeaway">Choose when to wrap up before you play.<br>A reminder can help you keep track.</p><p class="spec-action">Pick your pause.${arrow}</p>${footer}`,
 support:`${header('Support')}<div class="support-symbol" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M10 14a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v13a6 6 0 0 1-6 6H21l-9 7v-9a6 6 0 0 1-2-4Z"/><path d="M17 19h14M17 25h9"/></svg></div><h1>Here if<br>you need it.</h1><p class="support-intro">Free, confidential support for any question about gambling.</p><section class="contact-panel"><span>Talk to someone</span><strong>{{HELPLINE_NUMBER}}</strong><button type="button" tabindex="-1">Call support ${arrow}</button></section><p class="support-note">You can ask a question before deciding what to do next.</p><footer class="support-footer">Your choice. Your pace.</footer>`
};
const entries=[];
for(const d of directions)for(const kind of Object.keys(content)){
 const id=d.id+'-'+kind, title=d.name+' — '+{odds:'Odds card',lifestyle:'Lifestyle card',support:'Support panel'}[kind];
 const html=`<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>\n<!-- Style exploration. content_type: quick-reference; pillar: [open, social]; tier: ${kind==='support'?2:1}; audience: [general]; channel: [${kind==='support'?'in-app':'social-media'}]. Palette and display type are scoped alternatives, not changes to _brand.yml. -->\n<link rel="stylesheet" href="../../render/brand-inject.css"><link rel="stylesheet" href="../specimens.css"></head><body><article class="specimen ${d.id} ${kind}" aria-label="${title}">${content[kind]}</article></body></html>\n`;
 writeFileSync(join(here,'masters',id+'.html'),html);
 entries.push({id,direction:d.id,kind,title,html:'masters/'+id+'.html',png:'renders/'+id+'.png',width:kind==='support'?420:1080,height:kind==='support'?740:1350});
}
writeFileSync(join(here,'manifest.json'),JSON.stringify({directions,entries},null,2)+'\n');
writeFileSync(join(here,'data.js'),'window.STYLE_STUDIES = '+JSON.stringify({directions,entries}).replace(/</g,'\\u003c')+';\n');
console.log('Built 12 style specimens in four directions.');
