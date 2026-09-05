import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {categories, studies} from './studies.mjs';
const here = dirname(fileURLToPath(import.meta.url));
for (const folder of ['masters', 'renders']) mkdirSync(join(here, folder), {recursive:true});
const arrow = '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 24h32M26 11l13 13-13 13"/></svg>';
// Outlined official wordmark, recolored as a single shape for palette studies.
const logo = readFileSync(join(here, '../../visual-identity/logo/secondary/logo-horizontal-mono-dark.svg'), 'utf8').replace(/fill="[^"]*"/g, 'fill="currentColor"').replace('<svg ', '<svg class="brand-logo" role="img" aria-label="{{PROGRAM_SHORT_NAME}}" ');
const header = label => `<header class="spec-header">${logo}<span>${label}</span></header>`;
const footer = '<footer class="spec-footer"><p>Free support: <b>{{HELPLINE_NUMBER}}</b></p><p>{{AGE_DISCLAIMER}}</p></footer>';
const photo = name => `../../creative-review/photography/output/creative-refresh-20260905/creative-refresh/shared-input/${name}/attempt-1/candidate-1-image-1.jpg`;
const action = label => `<div class="spec-action">${label}${arrow}</div>`;
const content = {
  odds: `${header('Bet slip decoded')}<h1>Your return.<br><em>Your profit.</em></h1><p class="intro">They’re different numbers.<br>Here’s one winning cash bet.</p><figure class="ledger"><div class="total"><span>Total returned</span><strong>$50</strong></div><div class="stake"><span>Your stake back</span><strong>$20</strong></div><div class="profit"><span>Your profit</span><strong>+$30</strong></div></figure><p class="takeaway">The payout includes the money you put in.<br>Subtract your stake to see the profit.</p>${action('Know what comes back.')}${footer}`,
  lifestyle: `${header('Your time. Your call.')}<h1>Even a good night<br><em>has an end time.</em></h1><figure class="photo-frame"><img src="${photo('casino-conversation')}" alt="Three adult friends sharing a conversation in a warm casino lounge."></figure><p class="takeaway">Choose when to wrap up before you play.<br>A reminder can help you keep track.</p>${action('Pick your pause.')}${footer}`,
  poster: `${header('A little planning.')}<h1>Your night.<br><em>Your number.</em></h1><p class="intro">Decide what you’re happy to spend<br>before the night gets going.</p><section class="plan"><span class="plan-label">The plan</span><strong>Choose a budget.<br>Keep it yours.</strong><p>Include gambling in your<br>entertainment budget.</p></section><p class="takeaway">A limit is a tool you choose.<br>Set it while the choice is easy.</p>${action('Set your budget.')}${footer}`,
  email: `${header('A note from Playbook')}<section class="email-card"><p class="eyebrow">Make room for a pause.</p><h1>Good plans<br><em>leave room<br>to wrap up.</em></h1><p class="email-intro">A night out has more than one chapter.<br>Choose when yours ends before you play.</p><div class="email-tip"><strong>One small thing to try</strong><p>Set a reminder before your next session.<br>Give yourself a moment to check in.</p></div><div class="email-action">Explore time tools ${arrow}</div><p class="email-signoff">Your time. Your call.</p></section>${footer}`,
  quiz: `${header('Quick question')}<p class="eyebrow">A winning cash bet</p><h1>A $50 return.<br><em>A $20 stake.</em><br>What’s the profit?</h1><section class="answers"><div class="answer"><span>A</span><strong>$50</strong>${arrow}</div><div class="answer"><span>B</span><strong>$30</strong>${arrow}</div><div class="answer"><span>C</span><strong>$20</strong>${arrow}</div></section><p class="quiz-note">The return includes your original stake.<br>Subtract it to find the profit.</p>${footer}`,
  support: `${header('Support')}<div class="support-symbol" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M10 14a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v13a6 6 0 0 1-6 6H21l-9 7v-9a6 6 0 0 1-2-4Z"/><path d="M17 19h14M17 25h9"/></svg></div><h1>Here if<br>you need it.</h1><p class="support-intro">Free, confidential support for any question about gambling.</p><section class="contact-panel"><span>Talk to someone</span><strong>{{HELPLINE_NUMBER}}</strong><div class="contact-action">Call support ${arrow}</div></section><p class="support-note">You can ask a question before deciding what to do next.</p><footer class="support-footer">Your choice. Your pace.</footer>`
};
const formats = {
  odds: ['Odds social',1080,1350,'social-media'], lifestyle:['Lifestyle social',1080,1350,'social-media'],
  poster:['Poster concept',1080,1350,'print'], email:['Email concept',720,1050,'email'],
  quiz:['Quiz interface',540,800,'in-app'], support:['Support panel',420,740,'in-app']
};
const entries = [];
function master(id, kind, variant = '') {
  const [format,width,height,channel] = formats[kind];
  let body = content[kind];
  if (variant === 'photo-cafe') body = body.replace(photo('casino-conversation'),photo('cafe-plan')).replace('Three adult friends sharing a conversation in a warm casino lounge.','Two adult friends looking at a phone together at a sunny café table.');
  body = body.replace('A note from Playbook','A note for you');
  const title = `${format} / ${variant || 'Reference'}`;
  const html = `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>\n<!-- Design preference study. content_type: quick-reference; pillar: [open, social]; tier: ${kind==='support'?2:1}; audience: [general]; channel: [${channel}]. -->\n<link rel="stylesheet" href="../../render/brand-inject.css"><link rel="stylesheet" href="../specimens.css"></head><body><article class="specimen ${kind==='email'?'study-email':kind} ${variant}" aria-label="${title}">${body}</article></body></html>\n`;
  writeFileSync(join(here,`masters/${id}.html`), html);
  const entry = {id,kind,format,width,height,html:`masters/${id}.html`,png:`renders/${id}.png`};
  entries.push(entry); return entry;
}
const before = Object.fromEntries(Object.keys(formats).map(kind=>[kind,master(`reference-${kind}`,kind)]));
const pairs = studies.map(study=>({...study, before:before[study.kind], after:master(study.id,study.kind,study.id)}));
const data = {version:1,categories,pairs,entries};
writeFileSync(join(here,'manifest.json'),JSON.stringify(data,null,2)+'\n');
writeFileSync(join(here,'data.js'),'window.PREFERENCE_STUDIES = '+JSON.stringify(data).replace(/</g,'\\u003c')+';\n');
console.log(`Built ${pairs.length} focused pairs from ${entries.length} specimens.`);
