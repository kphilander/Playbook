import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const registry = readFileSync(join(here, '../render/render-cards.mjs'), 'utf8');
const files = [...registry.matchAll(/html: '([^']+)'/g)].map(m => m[1]);
const clean = s => s.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();
const decisions = [
  [/^card-20/, 'Retain the receipt, clock and outcome-grid concepts. Their proof and assumptions already work; rebuild with the current typography and configured wordmark.'],
  [/^card-11a/, 'Replace the unrelated esports statistic with a clear distinction between a highlight clip and a complete activity record.'],
  [/^card-13c/, 'Distinguish choosing games with different rules from predicting an independent result; remove the misleading 0% machine-choice statistic.'],
  [/^card-13/, 'Give each myth a distinct, readable hook. Replace judgment about the reader with an explanation or a concrete check.'],
  [/^card-1[abc]-/, 'Scope independence to independent slot outcomes. Remove machine-memory metaphors and improve the hierarchy of claim, explanation and proof.'],
  [/^card-2b|^story-3c/, 'Separate the original stake, profit and total return. Remove the claim that the $10 difference is a fee retained on every bet.'],
  [/^card-15a/, 'Explain a point spread with a −6.5 example and the seven-or-more margin, rather than substituting unrelated price arithmetic.'],
  [/^card-16a/, 'Use an explicit 95% RTP example. Draw the return/edge bar at 95/5 and state that RTP is a long-run money measure.'],
  [/^card-16b/, 'Keep the proportional bonus comparison. State that the 30× condition applies to the bonus alone and qualifying wagers matter.'],
  [/^card-17a/, 'Replace unsupported fixed sportsbook-cut estimates with exact 50% versus 6.25% probabilities under visible independence assumptions.'],
  [/^card-18a/, 'Replace a universal ten-second promise with two concrete settings: amount and period.'],
  [/^htp-/, 'Keep a recognizable game-reference family. Qualify game rules, expected values and strategy; remove unsupported superlatives and generic recommendations.'],
  [/^poster-19/, 'Give each photograph a distinct editorial job. Put larger type and shorter proof copy on an opaque panel; keep the social setting separate from the mathematical claim.'],
  [/^poster-4[abce]/, 'Recompose the distance poster with a larger headline and prominent fact. Keep the selected comparison proportional and preserve a clear action; adapt the phrasing for each market.'],
  [/^poster-4d/, 'Replace an outdated jackpot example with the portable fair 6-from-49 calculation: exactly 1 in 13,983,816 for all six.'],
  [/^story-15b/, 'Replace unsupported market-wide margin ranges with exact cash-bet returns at three stated prices.'],
  [/^live-odds/, 'Replace an unsupported 5–10% live margin claim with checking the current price and return.'],
  [/^self-exclusion|^cooldown|^support-page|^card-tier2|^poster-tier2|^email-support|^helpline|^sign-restroom/, 'Retain calm support hierarchy and clear contact access. Review service commitments, improve legibility, and preserve the support voice.'],
  [/^email-/, 'Retain responsive, natural-height email layouts. Simplify tool language and distinguish examples from guaranteed costs or benefits.'],
  [/^brochure|^rack-card|^table-tent/, 'Retain the physical panel sequence and protected contact groups. Revise portable copy, make assumptions explicit, and regenerate folded-format previews.'],
  [/^sign-atm/, 'Make the action appropriate at a cash machine: choose a cash budget, and do not imply online deposit caps cover ATM withdrawals.'],
  [/^sign-/, 'Retain the placement-specific message and clear next step; refresh typography, wordmark and legible support details.'],
  [/^mobile|^deposit|^withdrawal|^in-play|^betslip|^web-popup|^push|^limit-reached|^session-summary|^app-banner/, 'Retain the task-focused component layout. Keep numbers readable and actions clear; avoid universal promises about feature timing or funds arrival.'],
  [/^display|^poster|^story|^card|^og/, 'Retain the format and communication purpose, improve headline and support hierarchy, and regenerate the preview from the maintained source.'],
];
const collateral = files.map(file => {
  const html = readFileSync(join(here, '../render', file), 'utf8');
  const family = file.replace(/\.(ja|ar|zh-CN)\.html$/, '.html');
  const locale = file.match(/\.(ja|ar|zh-CN)\.html$/)?.[1] || 'en';
  const title = html.match(/<(?:div|h1|h2)[^>]*class="(?:myth-statement|headline|heading|card-title)"[^>]*>([\s\S]*?)<\/(?:div|h1|h2)>/)?.[1];
  const png = `../render/${file.replace(/\.html$/, '.png')}`;
  if (!existsSync(join(here, png))) throw new Error(`Missing ${png}`);
  const rationale = decisions.find(([match]) => match.test(family))?.[1] || 'Retain the existing purpose and update the maintained render.';
  return { id: file.slice(0,-5), group: 'Collateral', locale, family, title: title ? clean(title) : file.replace(/\.html$/, ''), html: `../render/${file}`, png, rationale, searchText: clean(html.split('<body>')[1] || html) };
});
const concepts = JSON.parse(readFileSync(join(here, 'concepts.json'), 'utf8'));
const reports = JSON.parse(readFileSync(join(here, 'concept-validation.json'), 'utf8'));
for (const item of concepts) {
  const report = reports.find(r => r.id === item.id);
  if (!report || report.issues.length) throw new Error(`Concept requires correction: ${item.id}`);
  item.title = report.title;
  item.searchText = clean(readFileSync(join(here, item.html), 'utf8').split('<body>')[1] || '') + ' ' + JSON.stringify([...(item.sources || []), ...(item.topics || [])]);
}
const data = { baseline: 'b2d95c8', collateral, concepts };
writeFileSync(join(here, 'coverage.json'), JSON.stringify(data, null, 2) + '\n');
writeFileSync(join(here, 'review-data.js'), 'window.CREATIVE_REVIEW = ' + JSON.stringify(data).replace(/</g, '\\u003c') + ';\n');
console.log(`${collateral.length} collateral renders, ${new Set(collateral.map(i => i.family)).size} families, ${concepts.length} concepts.`);
