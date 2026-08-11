#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolvePrintReviewSpec } from './output-profiles.mjs';

const renderDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(renderDir, '..', '..');
const comparisonDir = join(renderDir, 'comparison');
const beforeDir = join(comparisonDir, 'before');
const outputPath = join(renderDir, '_comparison.html');
const baseRef = process.env.PLAYBOOK_COMPARE_BASE || 'HEAD';

function git(args, options = {}) {
  return execFileSync('git', args, {
    cwd: repoRoot,
    maxBuffer: 64 * 1024 * 1024,
    ...options,
  });
}

function pngDimensions(path) {
  const buffer = readFileSync(path);
  const signature = buffer.subarray(1, 4).toString('ascii');
  if (signature !== 'PNG' || buffer.length < 24) return null;
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function titleFor(filename) {
  return filename
    .replace(/\.png$/, '')
    .replace(/^htp-/, 'how-to-play-')
    .split('-')
    .map((word) => /^\d/.test(word) ? word.toUpperCase() : `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

function categoryFor(filename) {
  if (filename.startsWith('htp-')) return 'How-to-Play';
  if (filename.startsWith('card-') || filename.startsWith('story-')) return 'Social';
  if (filename.startsWith('poster-')) return 'Posters';
  if (/^(brochure|rack-card|table-tent|helpline-card)/.test(filename)) return 'Print';
  if (filename.startsWith('display-')) return 'Displays';
  if (filename.startsWith('sign-')) return 'Signage';
  if (filename.startsWith('email-')) return 'Email';
  return 'Product UI';
}

function useCaseFor(filename) {
  if (/^(card-|htp-card-|htp-odds-)/.test(filename)) return '4:5 primary feed · phone scan/save · one idea before detail';
  if (filename.startsWith('story-')) return '9:16 full-screen phone · platform-safe top and bottom zones';
  if (filename.startsWith('poster-')) return '18×24 / A2 · 2–3m glance · one dominant headline';
  if (filename.startsWith('rack-card-')) return '4×9 take-away · hand-held sequential read · 0.75in QR';
  if (filename.startsWith('table-tent-')) return 'Two 4×6 faces · seated dwell · each face works independently';
  if (filename.startsWith('helpline-card-')) return '3.5×2 wallet card · arm’s-length read · contact first';
  if (filename.startsWith('brochure-')) return 'Letter / A4 tri-fold · close read · fold-safe panel sequence';
  if (filename.startsWith('display-')) return 'Native screen · 3m / 10-second dwell · oversized headline and QR';
  if (filename.startsWith('email-')) return 'Fluid to 600px · phone-first close read · natural height';
  if (filename.startsWith('sign-entrance-')) return '18×24 / A2 entrance · 3m walking glance · headline + CTA';
  if (filename.startsWith('sign-atm-')) return 'Letter / A4 decision point · arm’s-length read · budget action first';
  if (filename.startsWith('sign-floor-')) return '11×17 / A3 gaming floor · 3m scan · three facts maximum';
  if (filename.startsWith('sign-restroom-')) return 'A5 / half-letter stall card · private close read · contact first';
  if (filename.startsWith('sign-staff-')) return '11×17 / A3 break room · repeated close read · numbered scan';
  if (filename.startsWith('app-banner-')) return '728×90 / mobile ad units · peripheral glance · message + CTA';
  if (filename.startsWith('push-notification-')) return 'Native OS notification · lock-screen scan · preview only';
  if (/^(mobile-|deposit-|withdrawal-)/.test(filename)) return 'Responsive product flow · thumb-zone action · 360–430px QA';
  if (/^(support-page-|self-exclusion-|cooldown-)/.test(filename)) return 'Responsive Tier 2 task · deliberate read · contact or exit first';
  return 'Responsive in-context component · host app owns final viewport';
}

function dimensionLabel(dimensions) {
  return dimensions ? `${dimensions.width} × ${dimensions.height}px` : '—';
}

function changeLabel(before, after) {
  if (!before) return 'New template';
  if (!after) return 'Removed template';
  if (before.width === after.width && before.height === after.height) return 'Same canvas · revised layout';
  return `Resized from ${dimensionLabel(before)} to ${dimensionLabel(after)}`;
}

function emptyState(label) {
  return `<div class="empty-state"><span>${escapeHtml(label)}</span></div>`;
}

function percent(value, total) {
  return `${((value / total) * 100).toFixed(5)}%`;
}

function productionGuideFor(filename, dimensions) {
  const spec = dimensions ? resolvePrintReviewSpec(filename) : null;
  if (!spec) return null;

  // Preview PNGs carry the templates' 24px review bleed. Production output
  // profiles replace it with the exact 0.125in / 3mm pixel geometry.
  const previewBleed = 24;
  const trimWidth = dimensions.width - (previewBleed * 2);
  const trimHeight = dimensions.height - (previewBleed * 2);
  if (trimWidth <= 0 || trimHeight <= 0) return null;

  const [physicalWidth, physicalHeight] = spec.trim;
  const trimX = percent(previewBleed, dimensions.width);
  const trimY = percent(previewBleed, dimensions.height);
  const safeX = percent(previewBleed + ((spec.safe / physicalWidth) * trimWidth), dimensions.width);
  const safeY = percent(previewBleed + ((spec.safe / physicalHeight) * trimHeight), dimensions.height);
  const folds = (spec.folds || []).map((fold) => {
    const trimPixels = fold.axis === 'x' ? trimWidth : trimHeight;
    const physicalSize = fold.axis === 'x' ? physicalWidth : physicalHeight;
    const fullPixels = fold.axis === 'x' ? dimensions.width : dimensions.height;
    const center = previewBleed + (fold.at * trimPixels);
    const halfZone = (fold.foldSafe / physicalSize) * trimPixels;
    return {
      axis: fold.axis,
      center: percent(center, fullPixels),
      start: percent(center - halfZone, fullPixels),
      size: percent(halfZone * 2, fullPixels),
    };
  });

  return {
    trimX,
    trimY,
    safeX,
    safeY,
    folds,
    label: `${spec.bleedLabel} · ${spec.safeLabel}`,
  };
}

function productionGuideMarkup(guide) {
  if (!guide) return '';
  const foldMarkup = guide.folds.map((fold) => fold.axis === 'x'
    ? `<span class="fold-zone fold-zone-x" style="--fold-start:${fold.start};--fold-size:${fold.size}"></span><span class="fold-line fold-line-x" style="--fold-center:${fold.center}"></span>`
    : `<span class="fold-zone fold-zone-y" style="--fold-start:${fold.start};--fold-size:${fold.size}"></span><span class="fold-line fold-line-y" style="--fold-center:${fold.center}"></span>`
  ).join('');
  return `<span class="production-guide" aria-hidden="true" style="--trim-x:${guide.trimX};--trim-y:${guide.trimY};--safe-x:${guide.safeX};--safe-y:${guide.safeY}"><span class="trim-guide"></span><span class="safe-guide"></span>${foldMarkup}</span>`;
}

function imageStage(src, alt, label, guide = null) {
  if (!src) return emptyState(label);
  const guideClass = guide ? ' class="guide-source"' : '';
  return `<a class="image-stage" href="${escapeHtml(src)}" target="_blank" rel="noopener"><img${guideClass} src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy">${productionGuideMarkup(guide)}</a>`;
}

mkdirSync(beforeDir, { recursive: true });
for (const filename of readdirSync(beforeDir)) {
  if (filename.endsWith('.png')) unlinkSync(join(beforeDir, filename));
}

const beforeFiles = git(['ls-tree', '-r', '--name-only', baseRef, '--', 'collateral/render'], { encoding: 'utf8' })
  .split('\n')
  .filter((path) => /^collateral\/render\/[^/]+\.png$/.test(path));

for (const repoPath of beforeFiles) {
  const filename = repoPath.split('/').at(-1);
  writeFileSync(join(beforeDir, filename), git(['show', `${baseRef}:${repoPath}`]));
}

const afterFiles = readdirSync(renderDir).filter((filename) =>
  filename.endsWith('.png') && !/\.(?:ja|zh-CN|ar)\.png$/.test(filename)
);
const allFiles = [...new Set([
  ...beforeFiles.map((path) => path.split('/').at(-1)),
  ...afterFiles,
])].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const comparisons = allFiles.map((filename) => {
  const beforePath = join(beforeDir, filename);
  const afterPath = join(renderDir, filename);
  const hasBefore = existsSync(beforePath);
  const hasAfter = existsSync(afterPath);
  const after = hasAfter ? pngDimensions(afterPath) : null;
  return {
    filename,
    title: titleFor(filename),
    category: categoryFor(filename),
    useCase: useCaseFor(filename),
    status: hasBefore && hasAfter ? 'updated' : hasAfter ? 'new' : 'removed',
    before: hasBefore ? pngDimensions(beforePath) : null,
    after,
    beforeSrc: hasBefore ? `./comparison/before/${filename}` : null,
    afterSrc: hasAfter ? `./${filename}` : null,
    productionGuide: productionGuideFor(filename, after),
  };
});

const updatedCount = comparisons.filter(({ status }) => status === 'updated').length;
const newCount = comparisons.filter(({ status }) => status === 'new').length;
const removedCount = comparisons.filter(({ status }) => status === 'removed').length;
const productionGuideCount = comparisons.filter(({ productionGuide }) => productionGuide).length;
const categories = [...new Set(comparisons.map(({ category }) => category))];
const baseHash = git(['rev-parse', '--short', baseRef], { encoding: 'utf8' }).trim();
const baseDate = git(['log', '-1', '--format=%cs', baseRef], { encoding: 'utf8' }).trim();
const generatedAt = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeStyle: 'short',
}).format(new Date());

const categoryButtons = categories.map((category) => {
  const count = comparisons.filter((item) => item.category === category).length;
  return `<button type="button" data-category-filter="${escapeHtml(category)}">${escapeHtml(category)} <span>${count}</span></button>`;
}).join('\n');

const cards = comparisons.map((item, index) => {
  const beforeAlt = `${item.title} before layout`;
  const afterAlt = `${item.title} after layout`;
  const searchable = `${item.title} ${item.filename} ${item.category} ${item.status} ${item.useCase}`.toLowerCase();
  const beforeStage = imageStage(item.beforeSrc, beforeAlt, item.status === 'new' ? 'No previous template' : 'Before unavailable');
  const afterStage = imageStage(item.afterSrc, afterAlt, item.status === 'removed' ? 'Removed from current set' : 'After unavailable', item.productionGuide);
  const overlayBefore = item.beforeSrc ? `<img class="overlay-before" src="${escapeHtml(item.beforeSrc)}" alt="${escapeHtml(beforeAlt)}" loading="lazy">` : '';
  const overlayAfter = item.afterSrc ? `<img class="overlay-after${item.productionGuide ? ' guide-source' : ''}" src="${escapeHtml(item.afterSrc)}" alt="${escapeHtml(afterAlt)}" loading="lazy">` : '';
  const overlayContent = [
    overlayBefore,
    overlayAfter,
    productionGuideMarkup(item.productionGuide),
    !item.beforeSrc ? emptyState('New template · no before state') : '',
    !item.afterSrc ? emptyState('Removed · no after state') : '',
  ].filter(Boolean).map((line) => `          ${line}`).join('\n');
  const footerLinks = [
    item.beforeSrc ? `<a href="${escapeHtml(item.beforeSrc)}" target="_blank" rel="noopener">Open before</a>` : '',
    item.afterSrc ? `<a href="${escapeHtml(item.afterSrc)}" target="_blank" rel="noopener">Open after</a>` : '',
  ].filter(Boolean).map((line) => `          ${line}`).join('\n');
  const guideAttribute = item.productionGuide ? ' data-production-guide="true"' : '';

  return `
    <article class="comparison-card" data-category="${escapeHtml(item.category)}" data-status="${item.status}"${guideAttribute} data-search="${escapeHtml(searchable)}">
      <header class="card-header">
        <div>
          <div class="eyebrow"><span>${String(index + 1).padStart(2, '0')}</span> ${escapeHtml(item.category)}</div>
          <h2>${escapeHtml(item.title)}</h2>
          <code>${escapeHtml(item.filename)}</code>
          <p class="use-case">${escapeHtml(item.useCase)}</p>
        </div>
        <span class="status status-${item.status}">${item.status}</span>
      </header>

      <div class="split-view">
        <figure>
          <figcaption><strong>Before</strong><span>${dimensionLabel(item.before)}</span></figcaption>
          ${beforeStage}
        </figure>
        <figure>
          <figcaption><strong>After</strong><span>${dimensionLabel(item.after)}</span></figcaption>
          ${afterStage}
        </figure>
      </div>

      <div class="overlay-view">
        <div class="overlay-stage">
${overlayContent}
          <span class="overlay-label overlay-label-before">Before</span>
          <span class="overlay-label overlay-label-after">After</span>
        </div>
      </div>

      <footer class="card-footer">
        <span>${escapeHtml(changeLabel(item.before, item.after))}${item.productionGuide ? ` · <strong class="guide-available">${escapeHtml(item.productionGuide.label)}</strong>` : ''}</span>
        <div>
${footerLinks}
        </div>
      </footer>
    </article>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Playbook Collateral · Before / After</title>
<style>
  :root {
    color-scheme: dark;
    --bg: #0b131c;
    --panel: #142231;
    --panel-raised: #1a2c3e;
    --ink: #f5f5fa;
    --muted: #a8b3c2;
    --faint: #6f8094;
    --teal: #00d4aa;
    --orange: #ff6b35;
    --red: #ff657a;
    --guide-trim: #ff4fd8;
    --guide-safe: #52e8ff;
    --guide-fold: #ffd166;
    --line: rgba(255,255,255,.1);
    --after-opacity: .55;
  }
  * { box-sizing: border-box; }
  html { background: var(--bg); }
  body { margin: 0; color: var(--ink); background: radial-gradient(circle at 85% 0, rgba(0,212,170,.09), transparent 30rem), var(--bg); font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
  a { color: inherit; }
  .masthead { max-width: 1540px; margin: 0 auto; padding: 64px 32px 36px; }
  .kicker, .eyebrow, code, .status, .meta { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
  .kicker { color: var(--teal); font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
  h1 { max-width: 900px; margin: 12px 0 18px; font-size: clamp(42px, 7vw, 92px); line-height: .94; letter-spacing: -.06em; }
  .intro { max-width: 780px; color: var(--muted); font-size: 17px; line-height: 1.6; }
  .stats { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
  .stat { min-width: 135px; padding: 14px 16px; border: 1px solid var(--line); border-radius: 12px; background: rgba(20,34,49,.82); }
  .stat strong { display: block; font-size: 24px; }
  .stat span { color: var(--faint); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }
  .meta { margin-top: 18px; color: var(--faint); font-size: 11px; }
  .toolbar { position: sticky; top: 0; z-index: 20; border-block: 1px solid var(--line); background: rgba(11,19,28,.94); backdrop-filter: blur(14px); }
  .toolbar-inner { max-width: 1540px; margin: 0 auto; padding: 14px 32px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  button, input { font: inherit; }
  button { cursor: pointer; border: 1px solid var(--line); border-radius: 999px; padding: 8px 12px; color: var(--muted); background: var(--panel); font-size: 12px; font-weight: 700; }
  button span { color: var(--faint); margin-left: 4px; }
  button:hover, button.active { color: #071019; border-color: var(--teal); background: var(--teal); }
  button.active span { color: #315851; }
  .divider { width: 1px; height: 28px; background: var(--line); margin-inline: 4px; }
  .search { min-width: 210px; flex: 1; max-width: 320px; border: 1px solid var(--line); border-radius: 999px; padding: 9px 14px; color: var(--ink); background: var(--panel); outline: none; }
  .search:focus { border-color: var(--teal); }
  .view-controls { margin-left: auto; display: flex; align-items: center; gap: 10px; }
  .opacity-control { display: none; align-items: center; gap: 8px; color: var(--muted); font-size: 11px; }
  .opacity-control input { width: 110px; accent-color: var(--teal); }
  body.overlay-mode .opacity-control { display: flex; }
  .guide-key { display: none; max-width: 1540px; margin: 0 auto; padding: 12px 32px 0; color: var(--muted); font-size: 11px; line-height: 1.45; }
  body.guides-mode .guide-key { display: flex; align-items: center; gap: 14px 18px; flex-wrap: wrap; }
  .guide-key strong { color: var(--ink); }
  .guide-key span { display: inline-flex; align-items: center; gap: 6px; }
  .key-swatch { width: 22px; height: 0; border-top: 2px solid currentColor; }
  .key-bleed { width: 22px; height: 12px; border: 1px solid var(--guide-trim); background: rgba(255,79,216,.2); }
  .key-trim { color: var(--guide-trim); }
  .key-safe { color: var(--guide-safe); border-top-style: dashed; }
  .key-fold { color: var(--guide-fold); }
  .results { max-width: 1540px; margin: 0 auto; padding: 18px 32px 0; color: var(--faint); font-size: 12px; }
  .sheet { max-width: 1540px; margin: 0 auto; padding: 22px 32px 80px; display: grid; gap: 26px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .comparison-card { min-width: 0; overflow: hidden; border: 1px solid var(--line); border-radius: 18px; background: var(--panel); box-shadow: 0 18px 50px rgba(0,0,0,.17); }
  .comparison-card[hidden] { display: none; }
  .card-header { min-height: 128px; padding: 18px 20px; display: flex; justify-content: space-between; gap: 16px; border-bottom: 1px solid var(--line); }
  .eyebrow { color: var(--teal); font-size: 10px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .eyebrow span { color: var(--faint); margin-right: 6px; }
  h2 { margin: 7px 0 5px; font-size: 20px; letter-spacing: -.02em; }
  code { color: var(--faint); font-size: 10px; }
  .use-case { max-width: 540px; margin: 9px 0 0; color: var(--muted); font-size: 11px; line-height: 1.45; }
  .status { align-self: flex-start; padding: 5px 8px; border-radius: 999px; font-size: 9px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .status-updated { color: var(--orange); background: rgba(255,107,53,.14); }
  .status-new { color: var(--teal); background: rgba(0,212,170,.14); }
  .status-removed { color: var(--red); background: rgba(255,101,122,.14); }
  .split-view { display: grid; grid-template-columns: 1fr 1fr; }
  figure { min-width: 0; margin: 0; }
  figure + figure { border-left: 1px solid var(--line); }
  figcaption { min-height: 44px; padding: 10px 13px; display: flex; align-items: center; justify-content: space-between; gap: 8px; color: var(--faint); border-bottom: 1px solid var(--line); font-size: 10px; }
  figcaption strong { color: var(--muted); font-size: 11px; text-transform: uppercase; letter-spacing: .08em; }
  .image-stage, .empty-state, .overlay-stage { height: 410px; }
  .image-stage { position: relative; display: flex; align-items: center; justify-content: center; padding: 18px; background-color: #0c151f; background-image: linear-gradient(45deg, rgba(255,255,255,.025) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,.025) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,.025) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,.025) 75%); background-size: 24px 24px; background-position: 0 0, 0 12px, 12px -12px, -12px 0; }
  .image-stage img { display: block; max-width: 100%; max-height: 100%; object-fit: contain; box-shadow: 0 10px 30px rgba(0,0,0,.35); }
  .empty-state { display: grid; place-items: center; padding: 24px; color: var(--faint); background: #0c151f; text-align: center; font-size: 12px; }
  .empty-state span { max-width: 180px; }
  .overlay-view { display: none; padding: 18px; background: #0c151f; }
  .overlay-stage { position: relative; overflow: hidden; display: grid; place-items: center; }
  .overlay-stage img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
  .overlay-stage .overlay-after { opacity: var(--after-opacity); }
  .overlay-stage .empty-state { position: absolute; inset: 0; height: auto; }
  .overlay-label { position: absolute; z-index: 5; top: 10px; padding: 5px 8px; border-radius: 6px; color: #071019; font-size: 9px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .overlay-label-before { left: 10px; background: var(--orange); }
  .overlay-label-after { right: 10px; background: var(--teal); }
  .production-guide { display: none; position: absolute; z-index: 4; overflow: hidden; pointer-events: none; }
  body.guides-mode .production-guide { display: block; }
  .trim-guide, .safe-guide, .fold-zone, .fold-line { position: absolute; }
  .trim-guide { inset: var(--trim-y) var(--trim-x); border: 2px solid var(--guide-trim); box-shadow: 0 0 0 9999px rgba(255,79,216,.18), inset 0 0 0 1px rgba(11,19,28,.65); }
  .safe-guide { inset: var(--safe-y) var(--safe-x); border: 2px dashed var(--guide-safe); filter: drop-shadow(0 0 1px #071019); }
  .fold-zone { background: rgba(255,209,102,.2); }
  .fold-zone-x { left: var(--fold-start); top: var(--trim-y); bottom: var(--trim-y); width: var(--fold-size); }
  .fold-zone-y { top: var(--fold-start); left: var(--trim-x); right: var(--trim-x); height: var(--fold-size); }
  .fold-line { filter: drop-shadow(0 0 1px #071019); }
  .fold-line-x { left: var(--fold-center); top: var(--trim-y); bottom: var(--trim-y); border-left: 2px dashed var(--guide-fold); }
  .fold-line-y { top: var(--fold-center); left: var(--trim-x); right: var(--trim-x); border-top: 2px dashed var(--guide-fold); }
  body.overlay-mode .split-view { display: none; }
  body.overlay-mode .overlay-view { display: block; }
  .card-footer { min-height: 58px; padding: 13px 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; color: var(--faint); border-top: 1px solid var(--line); font-size: 10px; }
  .card-footer div { display: flex; gap: 12px; white-space: nowrap; }
  .card-footer a { color: var(--teal); font-weight: 800; text-decoration: none; text-transform: uppercase; letter-spacing: .06em; }
  .card-footer a:hover { color: #4ee3c5; }
  .guide-available { color: var(--guide-safe); font-weight: 700; }
  .page-footer { padding: 20px 32px 54px; color: var(--faint); text-align: center; font-size: 11px; }
  @media (max-width: 1000px) { .sheet { grid-template-columns: 1fr; } }
  @media (max-width: 680px) {
    .masthead { padding: 42px 18px 26px; }
    .toolbar-inner, .sheet, .results { padding-inline: 18px; }
    .guide-key { padding-inline: 18px; }
    .sheet { gap: 18px; }
    .split-view { grid-template-columns: 1fr; }
    figure + figure { border-left: 0; border-top: 1px solid var(--line); }
    .image-stage, .empty-state, .overlay-stage { height: 360px; }
    .view-controls { width: 100%; margin-left: 0; }
    .card-footer { align-items: flex-start; flex-direction: column; }
  }
  @media print {
    :root { color-scheme: light; }
    body { color: #101820; background: white; }
    .toolbar, .results, .page-footer { display: none; }
    .masthead { padding: 24px 0; }
    .masthead h1 { font-size: 42px; }
    .intro, .meta, code, .card-footer { color: #475569; }
    .stat, .comparison-card { background: white; border-color: #cbd5e1; box-shadow: none; }
    .sheet { display: block; padding: 0; }
    .comparison-card { margin-bottom: 18px; break-inside: avoid; }
    .image-stage, .empty-state { background: #f1f5f9; }
  }
</style>
</head>
<body>
  <header class="masthead">
    <div class="kicker">Playbook collateral review</div>
    <h1>Before / after comparison sheet</h1>
    <p class="intro">The left side preserves the committed baseline from <strong>${escapeHtml(baseHash)}</strong>. The right side shows the current regenerated English preview. Use overlay mode to expose layout shifts, then switch on production guides to review bleed, trim, content-safe, and fold-protected zones.</p>
    <div class="stats">
      <div class="stat"><strong>${comparisons.length}</strong><span>Total templates</span></div>
      <div class="stat"><strong>${updatedCount}</strong><span>Revised</span></div>
      <div class="stat"><strong>${newCount}</strong><span>New</span></div>
      <div class="stat"><strong>${removedCount}</strong><span>Removed</span></div>
    </div>
    <div class="meta">Baseline ${escapeHtml(baseHash)} · ${escapeHtml(baseDate)} &nbsp;|&nbsp; Generated ${escapeHtml(generatedAt)} &nbsp;|&nbsp; <a href="./_gallery.html">Full template gallery</a></div>
  </header>

  <div class="toolbar">
    <div class="toolbar-inner">
      <button type="button" class="active" data-category-filter="all">All <span>${comparisons.length}</span></button>
      ${categoryButtons}
      <span class="divider"></span>
      <button type="button" class="active" data-status-filter="all">Any status</button>
      <button type="button" data-status-filter="updated">Updated <span>${updatedCount}</span></button>
      <button type="button" data-status-filter="new">New <span>${newCount}</span></button>
      <input class="search" id="search" type="search" placeholder="Search templates…" aria-label="Search templates">
      <div class="view-controls">
        <button type="button" id="guideToggle" aria-pressed="false">Production guides <span>${productionGuideCount}</span></button>
        <button type="button" id="viewToggle">Overlay mode</button>
        <label class="opacity-control">After <input id="opacity" type="range" min="0" max="100" value="55"> <span id="opacityValue">55%</span></label>
      </div>
    </div>
  </div>

  <div class="guide-key" id="guideKey">
    <strong>Review-only guides</strong>
    <span><i class="key-swatch key-bleed"></i> Bleed outside trim</span>
    <span><i class="key-swatch key-trim"></i> Trim line</span>
    <span><i class="key-swatch key-safe"></i> Content-safe line</span>
    <span><i class="key-swatch key-fold"></i> Fold line + protected band</span>
    <span>Final crop marks, color conversion, and tolerances remain a prepress step.</span>
  </div>

  <div class="results" id="results">Showing ${comparisons.length} templates</div>
  <main class="sheet" id="sheet">${cards}</main>
  <footer class="page-footer">Tip: print this page to PDF for an offline review sheet. Regenerate with <code>npm run build:comparison</code>.</footer>

<script>
  const cards = [...document.querySelectorAll('.comparison-card')];
  const search = document.querySelector('#search');
  const results = document.querySelector('#results');
  const viewToggle = document.querySelector('#viewToggle');
  const guideToggle = document.querySelector('#guideToggle');
  const opacity = document.querySelector('#opacity');
  const opacityValue = document.querySelector('#opacityValue');
  let category = 'all';
  let status = 'all';

  function renderedImageBox(image) {
    const rect = image.getBoundingClientRect();
    if (!image.naturalWidth || !image.naturalHeight || rect.width === 0 || rect.height === 0) return null;
    const scale = Math.min(rect.width / image.naturalWidth, rect.height / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    return {
      left: rect.left + ((rect.width - width) / 2),
      top: rect.top + ((rect.height - height) / 2),
      width,
      height,
    };
  }

  function positionProductionGuides() {
    for (const guide of document.querySelectorAll('.production-guide')) {
      const stage = guide.parentElement;
      const image = stage.querySelector('.guide-source');
      if (!image) continue;
      const imageBox = renderedImageBox(image);
      if (!imageBox) continue;
      const stageBox = stage.getBoundingClientRect();
      guide.style.left = (imageBox.left - stageBox.left) + 'px';
      guide.style.top = (imageBox.top - stageBox.top) + 'px';
      guide.style.width = imageBox.width + 'px';
      guide.style.height = imageBox.height + 'px';
    }
  }

  function filterCards() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    for (const card of cards) {
      const show = (category === 'all' || card.dataset.category === category)
        && (status === 'all' || card.dataset.status === status)
        && (!query || card.dataset.search.includes(query));
      card.hidden = !show;
      if (show) visible += 1;
    }
    results.textContent = 'Showing ' + visible + ' of ' + cards.length + ' templates';
    requestAnimationFrame(positionProductionGuides);
  }

  document.querySelectorAll('[data-category-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      category = button.dataset.categoryFilter;
      document.querySelectorAll('[data-category-filter]').forEach((item) => item.classList.toggle('active', item === button));
      filterCards();
    });
  });
  document.querySelectorAll('[data-status-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      status = button.dataset.statusFilter;
      document.querySelectorAll('[data-status-filter]').forEach((item) => item.classList.toggle('active', item === button));
      filterCards();
    });
  });
  search.addEventListener('input', filterCards);
  viewToggle.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('overlay-mode');
    viewToggle.classList.toggle('active', enabled);
    viewToggle.textContent = enabled ? 'Split view' : 'Overlay mode';
    requestAnimationFrame(positionProductionGuides);
  });
  guideToggle.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('guides-mode');
    guideToggle.classList.toggle('active', enabled);
    guideToggle.setAttribute('aria-pressed', String(enabled));
    requestAnimationFrame(positionProductionGuides);
  });
  opacity.addEventListener('input', () => {
    const value = Number(opacity.value);
    document.documentElement.style.setProperty('--after-opacity', value / 100);
    opacityValue.textContent = value + '%';
  });
  document.querySelectorAll('.guide-source').forEach((image) => {
    if (!image.complete) image.addEventListener('load', positionProductionGuides, { once: true });
  });
  window.addEventListener('resize', positionProductionGuides);
  positionProductionGuides();
</script>
</body>
</html>`;

writeFileSync(outputPath, html);

console.log(`Built ${relative(repoRoot, outputPath)}`);
console.log(`Baseline: ${baseHash} (${baseRef})`);
console.log(`Compared: ${comparisons.length} templates · ${updatedCount} updated · ${newCount} new · ${removedCount} removed`);
