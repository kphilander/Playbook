#!/usr/bin/env node
/**
 * Generates an HTML review page for cultural variant files.
 * Output: collateral/render/variant-review.html
 * Usage: node collateral/render/review-variants.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');

const files = [
  { path: 'messaging/tagline-variants.yml', label: 'Taglines', id: 'taglines' },
  { path: 'messaging/cta-variants.yml', label: 'CTAs', id: 'ctas' },
  { path: 'messaging/core-message-variants.yml', label: 'Core Messages', id: 'core' },
  { path: 'how-to-play/cultural-adaptation-notes.yml', label: 'Game Guide Notes', id: 'guides' },
];

const DIMS = {
  voice: { label: 'Voice', values: ['authority', 'elder'], color: '#6366f1' },
  humor: { label: 'Humor', values: ['warm', 'understated', 'minimal'], color: '#f59e0b' },
  framing: { label: 'Framing', values: ['communal'], color: '#10b981' },
  directness: { label: 'Directness', values: ['diplomatic', 'contextual'], color: '#ef4444' },
  comfort: { label: 'Comfort', values: ['reserved', 'private'], color: '#8b5cf6' },
};

function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderStandardEntry(id, entry) {
  let html = `<div class="entry" id="${escapeHtml(id)}">`;
  html += `<div class="entry-id">${escapeHtml(id)}</div>`;
  html += `<div class="entry-default">${escapeHtml(entry.default)}</div>`;
  html += `<div class="variants">`;
  for (const [dim, dimInfo] of Object.entries(DIMS)) {
    if (!entry[dim]) continue;
    for (const [val, text] of Object.entries(entry[dim])) {
      html += `<div class="variant" data-dim="${dim}" data-val="${val}">`;
      html += `<span class="dim-badge" style="background:${dimInfo.color}">${dim}:${val}</span>`;
      html += `<span class="variant-text">${escapeHtml(text)}</span>`;
      html += `</div>`;
    }
  }
  html += `</div></div>`;
  return html;
}

function renderGuideEntry(phrase) {
  let html = `<div class="entry guide-entry">`;
  html += `<div class="entry-default"><span class="guide-section">${escapeHtml(phrase.section || '')}</span>${escapeHtml(phrase.original)}</div>`;
  html += `<div class="variants">`;
  const dims = phrase.dimensions || {};
  for (const [dim, dimInfo] of Object.entries(DIMS)) {
    if (!dims[dim]) continue;
    for (const [val, text] of Object.entries(dims[dim])) {
      html += `<div class="variant" data-dim="${dim}" data-val="${val}">`;
      html += `<span class="dim-badge" style="background:${dimInfo.color}">${dim}:${val}</span>`;
      html += `<span class="variant-text">${escapeHtml(text)}</span>`;
      html += `</div>`;
    }
  }
  html += `</div></div>`;
  return html;
}

// Build sections
let sections = '';
let stats = { totalMessages: 0, totalVariants: 0 };

for (const file of files) {
  const raw = readFileSync(join(ROOT, file.path), 'utf-8');
  const data = yaml.load(raw);

  sections += `<div class="section" id="section-${file.id}"><h2>${file.label}</h2>`;

  if (file.id === 'guides') {
    // Game guide format is different
    for (const [game, info] of Object.entries(data)) {
      if (typeof info !== 'object' || !info.phrases) continue;
      sections += `<h3>${escapeHtml(info.title || game)}</h3>`;
      sections += `<div class="file-ref">${escapeHtml(info.file || '')}</div>`;
      for (const phrase of info.phrases) {
        stats.totalMessages++;
        const dims = phrase.dimensions || {};
        for (const d of Object.values(dims)) {
          stats.totalVariants += Object.keys(d).length;
        }
        sections += renderGuideEntry(phrase);
      }
    }
  } else {
    // Standard message/tagline/CTA format
    let currentGroup = '';
    for (const [key, entry] of Object.entries(data)) {
      if (typeof entry !== 'object' || !entry.default) continue;
      // Detect group changes from ID prefix
      const prefix = key.replace(/[-_]?\d+$/, '');
      if (prefix !== currentGroup) {
        currentGroup = prefix;
      }
      stats.totalMessages++;
      for (const dim of Object.keys(DIMS)) {
        if (entry[dim]) {
          stats.totalVariants += Object.keys(entry[dim]).length;
        }
      }
      sections += renderStandardEntry(key, entry);
    }
  }
  sections += `</div>`;
}

// Filters
let filterHtml = '<div class="filters"><strong>Filter by dimension:</strong> ';
filterHtml += '<button class="filter-btn active" data-filter="all">All</button>';
for (const [dim, info] of Object.entries(DIMS)) {
  filterHtml += `<button class="filter-btn" data-filter="${dim}" style="border-color:${info.color};color:${info.color}">${info.label}</button>`;
}
filterHtml += '</div>';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Playbook Cultural Variants — Review</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #e2e8f0; line-height: 1.6; }
  .header { background: #1e293b; padding: 32px 48px; border-bottom: 3px solid #00D4AA; }
  .header h1 { font-size: 28px; font-weight: 800; }
  .header h1 span { color: #00D4AA; font-weight: 300; text-transform: uppercase; letter-spacing: 0.08em; }
  .header .stats { color: #94a3b8; margin-top: 8px; font-size: 14px; }
  .tabs { display: flex; gap: 0; background: #1e293b; border-bottom: 1px solid #334155; padding: 0 48px; position: sticky; top: 0; z-index: 10; }
  .tab { padding: 14px 24px; cursor: pointer; color: #94a3b8; font-weight: 600; font-size: 14px; border-bottom: 3px solid transparent; transition: all 0.2s; }
  .tab:hover { color: #e2e8f0; }
  .tab.active { color: #00D4AA; border-bottom-color: #00D4AA; }
  .filters { padding: 16px 48px; background: #1e293b; border-bottom: 1px solid #334155; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; position: sticky; top: 51px; z-index: 9; }
  .filter-btn { padding: 6px 14px; border: 2px solid #475569; background: transparent; color: #94a3b8; border-radius: 20px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all 0.2s; }
  .filter-btn:hover, .filter-btn.active { background: #334155; color: #e2e8f0; }
  .content { padding: 24px 48px; max-width: 1200px; }
  .section { display: none; }
  .section.active { display: block; }
  .section h2 { font-size: 22px; margin-bottom: 24px; color: #f1f5f9; }
  .section h3 { font-size: 17px; margin: 32px 0 12px; color: #00D4AA; text-transform: uppercase; letter-spacing: 0.05em; }
  .file-ref { font-size: 12px; color: #64748b; margin-bottom: 16px; font-family: monospace; }
  .entry { background: #1e293b; border-radius: 12px; padding: 20px 24px; margin-bottom: 12px; border: 1px solid #334155; }
  .entry-id { font-family: 'SF Mono', monospace; font-size: 13px; font-weight: 700; color: #FF6B35; margin-bottom: 6px; }
  .entry-default { font-size: 16px; color: #f8fafc; font-weight: 500; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #334155; }
  .guide-section { display: block; font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
  .variants { display: flex; flex-direction: column; gap: 6px; }
  .variant { display: flex; align-items: flex-start; gap: 10px; padding: 6px 0; }
  .dim-badge { font-size: 11px; font-weight: 700; color: #fff; padding: 3px 10px; border-radius: 12px; white-space: nowrap; min-width: 120px; text-align: center; flex-shrink: 0; }
  .variant-text { font-size: 14px; color: #cbd5e1; line-height: 1.5; }
  .variant.hidden { display: none; }
  @media (max-width: 768px) {
    .content, .header, .filters, .tabs { padding-left: 16px; padding-right: 16px; }
    .variant { flex-direction: column; gap: 4px; }
    .dim-badge { min-width: auto; }
  }
</style>
</head>
<body>
<div class="header">
  <h1>Play<span>book</span> Cultural Variants — Review</h1>
  <div class="stats">${stats.totalMessages} messages &middot; ${stats.totalVariants} variants across 5 dimensions &middot; 4 content libraries</div>
</div>
<div class="tabs">
  ${files.map((f, i) => `<div class="tab${i===0?' active':''}" data-tab="${f.id}">${f.label}</div>`).join('')}
</div>
${filterHtml}
<div class="content">
${sections}
</div>
<script>
// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('section-' + tab.dataset.tab).classList.add('active');
  });
});
// Show first tab
document.querySelector('.section').classList.add('active');

// Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.variant').forEach(v => {
      if (filter === 'all' || v.dataset.dim === filter) {
        v.classList.remove('hidden');
      } else {
        v.classList.add('hidden');
      }
    });
  });
});
</script>
</body>
</html>`;

const outPath = join(__dirname, 'variant-review.html');
writeFileSync(outPath, html, 'utf-8');
console.log(`✓ Generated variant-review.html (${stats.totalMessages} messages, ${stats.totalVariants} variants)`);
console.log(`  Open: file://${outPath}`);
