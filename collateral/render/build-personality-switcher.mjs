#!/usr/bin/env node
/**
 * Generates an interactive Brand Personality Switcher HTML page.
 * Operators pick their cultural profile (5 dimensions) and ALL messaging
 * updates live to show how their brand would sound.
 *
 * Output: collateral/render/personality-switcher.html
 * Usage: node collateral/render/build-personality-switcher.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');

// ── Load YAML files ──────────────────────────────────────────────────────────

const fileSpecs = [
  { path: 'messaging/tagline-variants.yml', label: 'Taglines', id: 'taglines' },
  { path: 'messaging/cta-variants.yml', label: 'CTAs', id: 'ctas' },
  { path: 'messaging/core-message-variants.yml', label: 'Core Messages', id: 'core' },
  { path: 'how-to-play/cultural-adaptation-notes.yml', label: 'Game Guides', id: 'guides' },
];

const DIMS = {
  voice:      { label: 'Voice',      defaults: 'peer',       values: ['peer', 'authority', 'elder'],                  color: '#6366f1' },
  framing:    { label: 'Framing',    defaults: 'individual', values: ['individual', 'communal'],                       color: '#10b981' },
  humor:      { label: 'Humor',      defaults: 'irreverent', values: ['irreverent', 'warm', 'understated', 'minimal'], color: '#f59e0b' },
  directness: { label: 'Directness', defaults: 'blunt',      values: ['blunt', 'diplomatic', 'contextual'],            color: '#ef4444' },
  comfort:    { label: 'Comfort',    defaults: 'open',       values: ['open', 'reserved', 'private'],                  color: '#8b5cf6' },
};

const dimKeys = Object.keys(DIMS);

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Build variant data object ────────────────────────────────────────────────

const variantData = {};

for (const file of fileSpecs) {
  const raw = readFileSync(join(ROOT, file.path), 'utf-8');
  const data = yaml.load(raw);

  if (file.id === 'guides') {
    const games = {};
    for (const [gameKey, info] of Object.entries(data)) {
      if (typeof info !== 'object' || !info.phrases) continue;
      const phrases = info.phrases.map(phrase => {
        const entry = { original: phrase.original, section: phrase.section || '' };
        const dims = phrase.dimensions || {};
        for (const dim of dimKeys) {
          if (dims[dim]) entry[dim] = dims[dim];
        }
        return entry;
      });
      games[gameKey] = { title: info.title || gameKey, file: info.file || '', phrases };
    }
    variantData[file.id] = { type: 'guides', games };
  } else {
    const entries = {};
    for (const [key, entry] of Object.entries(data)) {
      if (typeof entry !== 'object' || !entry.default) continue;
      const item = { default: entry.default };
      for (const dim of dimKeys) {
        if (entry[dim]) item[dim] = entry[dim];
      }
      entries[key] = item;
    }
    variantData[file.id] = { type: 'standard', entries };
  }
}

// ── Count stats ──────────────────────────────────────────────────────────────

let totalMessages = 0;
let totalVariants = 0;

for (const fileData of Object.values(variantData)) {
  if (fileData.type === 'guides') {
    for (const game of Object.values(fileData.games)) {
      for (const phrase of game.phrases) {
        totalMessages++;
        for (const dim of dimKeys) {
          if (phrase[dim]) totalVariants += Object.keys(phrase[dim]).length;
        }
      }
    }
  } else {
    for (const entry of Object.values(fileData.entries)) {
      totalMessages++;
      for (const dim of dimKeys) {
        if (entry[dim]) totalVariants += Object.keys(entry[dim]).length;
      }
    }
  }
}

// ── Helper: build card HTML shell ────────────────────────────────────────────

function renderCardShell(cardId, displayId, section, defaultText) {
  let h = '<div class="msg-card" data-card-id="' + escapeHtml(cardId) + '">';
  if (displayId) {
    h += '<div class="msg-id">' + escapeHtml(displayId) + '</div>';
  }
  if (section) {
    h += '<div class="msg-section">' + escapeHtml(section) + '</div>';
  }
  h += '<div class="msg-default">';
  h += '<span class="msg-label label-default">Default</span>';
  h += '<span class="msg-text text-default">' + escapeHtml(defaultText) + '</span>';
  h += '</div>';
  h += '<div class="msg-variants"></div>';
  h += '</div>';
  return h;
}

// ── Build controls HTML ──────────────────────────────────────────────────────

let controlsHtml = '';
for (const [dim, info] of Object.entries(DIMS)) {
  controlsHtml += '<div class="dim-row">';
  controlsHtml += '<div class="dim-label" style="color: ' + info.color + '">' + info.label + '</div>';
  controlsHtml += '<div class="dim-options">';
  for (const val of info.values) {
    const isDefault = val === info.defaults;
    controlsHtml += '<button class="dim-btn" data-dim="' + dim + '" data-val="' + val + '"';
    if (isDefault) controlsHtml += ' data-default="true"';
    controlsHtml += '>' + val;
    if (isDefault) controlsHtml += '<span class="default-mark">(default)</span>';
    controlsHtml += '</button>';
  }
  controlsHtml += '</div></div>';
}

// ── Build tabs HTML ──────────────────────────────────────────────────────────

let tabsHtml = '';
for (let i = 0; i < fileSpecs.length; i++) {
  const f = fileSpecs[i];
  const fd = variantData[f.id];
  let count = 0;
  if (fd.type === 'guides') {
    for (const g of Object.values(fd.games)) count += g.phrases.length;
  } else {
    count = Object.keys(fd.entries).length;
  }
  tabsHtml += '<div class="tab' + (i === 0 ? ' active' : '') + '" data-tab="' + f.id + '">';
  tabsHtml += f.label + '<span class="tab-count">(' + count + ')</span></div>';
}

// ── Build sections HTML ──────────────────────────────────────────────────────

let sectionsHtml = '';
for (let i = 0; i < fileSpecs.length; i++) {
  const f = fileSpecs[i];
  const fd = variantData[f.id];

  sectionsHtml += '<div class="section' + (i === 0 ? ' active' : '') + '" id="section-' + f.id + '">';
  sectionsHtml += '<h2>' + f.label + '</h2>';

  if (fd.type === 'guides') {
    for (const [gameKey, game] of Object.entries(fd.games)) {
      sectionsHtml += '<div class="game-group">';
      sectionsHtml += '<h3>' + escapeHtml(game.title) + '</h3>';
      if (game.file) sectionsHtml += '<div class="file-ref">' + escapeHtml(game.file) + '</div>';
      game.phrases.forEach((phrase, pi) => {
        const cardId = 'guide-' + gameKey + '-' + pi;
        sectionsHtml += renderCardShell(cardId, null, phrase.section, phrase.original);
      });
      sectionsHtml += '</div>';
    }
  } else {
    for (const [key, entry] of Object.entries(fd.entries)) {
      sectionsHtml += renderCardShell(key, key, null, entry.default);
    }
  }

  sectionsHtml += '</div>';
}

// ── Assemble HTML ────────────────────────────────────────────────────────────

const html = [
'<!DOCTYPE html>',
'<html lang="en">',
'<head>',
'<meta charset="UTF-8">',
'<meta name="viewport" content="width=device-width, initial-scale=1.0">',
'<title>Playbook Brand Personality Switcher</title>',
'<style>',
`  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #0f172a;
    color: #e2e8f0;
    line-height: 1.6;
  }

  /* Header */
  .header {
    background: #1e293b;
    padding: 32px 48px 24px;
    border-bottom: 3px solid #00D4AA;
  }
  .header h1 { font-size: 28px; font-weight: 800; color: #f1f5f9; }
  .header h1 span {
    color: #00D4AA; font-weight: 300; text-transform: uppercase; letter-spacing: 0.08em;
  }
  .header .subtitle { color: #94a3b8; margin-top: 8px; font-size: 14px; }
  .header .subtitle .stat-highlight { color: #00D4AA; font-weight: 600; }

  /* Stats bar */
  .stats-bar {
    display: flex; gap: 24px; padding: 12px 48px;
    background: #162032; border-bottom: 1px solid #334155;
    font-size: 13px; color: #94a3b8; flex-wrap: wrap;
  }
  .stats-bar .stat { display: flex; align-items: center; gap: 6px; }
  .stats-bar .stat-value { font-weight: 700; font-size: 15px; }
  .stats-bar .stat-value.adapted { color: #00D4AA; }
  .stats-bar .stat-value.unchanged { color: #64748b; }
  .stats-bar .stat-value.pct { color: #FF6B35; }

  /* Dimension controls (sticky) */
  .controls {
    position: sticky; top: 0; z-index: 20;
    background: #1e293b; padding: 16px 48px; border-bottom: 1px solid #334155;
  }
  .controls-inner { display: flex; flex-direction: column; gap: 10px; max-width: 1200px; }
  .dim-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .dim-label {
    font-size: 12px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; min-width: 90px; flex-shrink: 0;
  }
  .dim-options { display: flex; gap: 6px; flex-wrap: wrap; }
  .dim-btn {
    padding: 5px 14px; border: 2px solid #475569; background: transparent;
    color: #94a3b8; border-radius: 20px; cursor: pointer; font-size: 12px;
    font-weight: 600; transition: all 0.15s; white-space: nowrap;
  }
  .dim-btn:hover { background: #334155; color: #e2e8f0; }
  .dim-btn.active { color: #fff; }
  .dim-btn .default-mark { font-size: 10px; opacity: 0.6; margin-left: 2px; }
  .reset-btn {
    margin-left: auto; padding: 6px 16px; border: 2px solid #475569;
    background: transparent; color: #94a3b8; border-radius: 20px;
    cursor: pointer; font-size: 12px; font-weight: 600; transition: all 0.15s;
  }
  .reset-btn:hover { background: #334155; color: #e2e8f0; }

  /* Tabs */
  .tabs {
    display: flex; gap: 0; background: #1e293b;
    border-bottom: 1px solid #334155; padding: 0 48px;
    position: sticky; top: 0; z-index: 15;
  }
  .tab {
    padding: 14px 24px; cursor: pointer; color: #94a3b8;
    font-weight: 600; font-size: 14px; border-bottom: 3px solid transparent;
    transition: all 0.2s; white-space: nowrap;
  }
  .tab:hover { color: #e2e8f0; }
  .tab.active { color: #00D4AA; border-bottom-color: #00D4AA; }
  .tab .tab-count { font-size: 11px; color: #64748b; margin-left: 6px; }

  /* Content area */
  .content { padding: 24px 48px 64px; max-width: 1200px; }
  .section { display: none; }
  .section.active { display: block; }
  .section h2 { font-size: 20px; margin-bottom: 20px; color: #f1f5f9; font-weight: 700; }
  .game-group h3 {
    font-size: 16px; margin: 28px 0 8px; color: #00D4AA;
    text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;
  }
  .game-group .file-ref {
    font-size: 11px; color: #64748b;
    font-family: 'SF Mono', SFMono-Regular, Consolas, monospace; margin-bottom: 14px;
  }

  /* Message card */
  .msg-card {
    background: #1e293b; border-radius: 12px; padding: 20px 24px;
    margin-bottom: 10px; border: 1px solid #334155; transition: border-color 0.2s;
  }
  .msg-card.has-adaptations { border-color: #00D4AA33; }
  .msg-id {
    font-family: 'SF Mono', SFMono-Regular, Consolas, monospace;
    font-size: 13px; font-weight: 700; color: #FF6B35; margin-bottom: 4px;
  }
  .msg-section {
    font-size: 11px; color: #64748b; text-transform: uppercase;
    letter-spacing: 0.05em; margin-bottom: 4px;
  }
  .msg-default {
    display: flex; align-items: flex-start; gap: 10px;
    margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #33415544;
  }
  .msg-label {
    font-size: 10px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; padding: 3px 8px; border-radius: 4px;
    white-space: nowrap; flex-shrink: 0; min-width: 60px; text-align: center;
  }
  .msg-label.label-default { background: #33415588; color: #94a3b8; }
  .msg-label.label-voice { background: #00D4AA22; color: #00D4AA; }
  .msg-text { font-size: 15px; line-height: 1.55; }
  .msg-text.text-default { color: #94a3b8; }
  .msg-text.text-voice { color: #f1f5f9; font-weight: 500; }

  /* Variant rows */
  .msg-variants { display: flex; flex-direction: column; gap: 8px; }
  .msg-variant-row { display: flex; align-items: flex-start; gap: 10px; }
  .dim-badge {
    font-size: 10px; font-weight: 700; color: #fff;
    padding: 3px 10px; border-radius: 12px; white-space: nowrap;
    min-width: 100px; text-align: center; flex-shrink: 0;
  }
  .variant-text { font-size: 14px; color: #e2e8f0; line-height: 1.55; font-weight: 500; }
  .msg-match { font-size: 13px; color: #64748b; padding: 4px 0; }
  .msg-match .check { color: #00D4AA; margin-right: 4px; }
  .msg-no-variant { font-size: 12px; color: #475569; font-style: italic; }

  /* Responsive */
  @media (max-width: 900px) {
    .header, .controls, .tabs, .content, .stats-bar { padding-left: 16px; padding-right: 16px; }
    .dim-label { min-width: 70px; }
    .msg-variant-row { flex-direction: column; gap: 4px; }
    .dim-badge { min-width: auto; }
    .msg-default { flex-direction: column; gap: 4px; }
  }`,
'</style>',
'</head>',
'<body>',
'',
'<div class="header">',
'  <h1>Play<span>book</span> Brand Personality Switcher</h1>',
'  <div class="subtitle" id="subtitle">',
'    <span class="stat-highlight">' + totalMessages + '</span> messages &middot;',
'    <span class="stat-highlight">' + totalVariants + '</span> total variants &middot;',
'    Showing: <span id="profile-summary">peer / individual / irreverent / blunt / open</span>',
'  </div>',
'</div>',
'',
'<div class="stats-bar" id="stats-bar">',
'  <div class="stat">',
'    <span class="stat-value adapted" id="stat-adapted">0</span>',
'    <span>messages adapted</span>',
'  </div>',
'  <div class="stat">',
'    <span class="stat-value unchanged" id="stat-unchanged">' + totalMessages + '</span>',
'    <span>messages unchanged</span>',
'  </div>',
'  <div class="stat">',
'    <span class="stat-value pct" id="stat-pct">0%</span>',
'    <span>adapted</span>',
'  </div>',
'</div>',
'',
'<div class="controls" id="controls-bar">',
'  <div class="controls-inner">',
controlsHtml,
'    <div class="dim-row">',
'      <button class="reset-btn" id="reset-btn">Reset to defaults</button>',
'    </div>',
'  </div>',
'</div>',
'',
'<div class="tabs">',
tabsHtml,
'</div>',
'',
'<div class="content" id="content">',
sectionsHtml,
'</div>',
'',
'<script>',
'// Embedded variant data',
'const VARIANT_DATA = ' + JSON.stringify(variantData) + ';',
'',
'const DEFAULTS = { voice: "peer", framing: "individual", humor: "irreverent", directness: "blunt", comfort: "open" };',
'const DIM_COLORS = { voice: "#6366f1", framing: "#10b981", humor: "#f59e0b", directness: "#ef4444", comfort: "#8b5cf6" };',
'const DIM_PRIORITY = ["comfort", "directness", "humor", "framing", "voice"];',
'',
'let profile = Object.assign({}, DEFAULTS);',
'',
'function resolveVariants(entry, prof) {',
'  var results = [];',
'  for (var i = 0; i < DIM_PRIORITY.length; i++) {',
'    var dim = DIM_PRIORITY[i];',
'    var val = prof[dim];',
'    if (val !== DEFAULTS[dim] && entry[dim] && entry[dim][val]) {',
'      results.push({ dimension: dim, value: val, text: entry[dim][val] });',
'    }',
'  }',
'  return results;',
'}',
'',
'function isAllDefaults() {',
'  var keys = Object.keys(DEFAULTS);',
'  for (var i = 0; i < keys.length; i++) {',
'    if (profile[keys[i]] !== DEFAULTS[keys[i]]) return false;',
'  }',
'  return true;',
'}',
'',
'function getNonDefaultDims() {',
'  var result = [];',
'  var keys = Object.keys(profile);',
'  for (var i = 0; i < keys.length; i++) {',
'    if (profile[keys[i]] !== DEFAULTS[keys[i]]) result.push(keys[i]);',
'  }',
'  return result;',
'}',
'',
'function getEntry(cardId) {',
'  var fileIds = ["taglines", "ctas", "core"];',
'  for (var i = 0; i < fileIds.length; i++) {',
'    var fd = VARIANT_DATA[fileIds[i]];',
'    if (fd && fd.entries && fd.entries[cardId]) return fd.entries[cardId];',
'  }',
'  if (cardId.indexOf("guide-") === 0) {',
'    var rest = cardId.substring(6);',
'    var lastDash = rest.lastIndexOf("-");',
'    var gameKey = rest.substring(0, lastDash);',
'    var idx = parseInt(rest.substring(lastDash + 1), 10);',
'    var fd2 = VARIANT_DATA.guides;',
'    if (fd2 && fd2.games && fd2.games[gameKey] && fd2.games[gameKey].phrases[idx]) {',
'      return fd2.games[gameKey].phrases[idx];',
'    }',
'  }',
'  return null;',
'}',
'',
'function escapeHtml(s) {',
'  var div = document.createElement("div");',
'  div.textContent = s;',
'  return div.innerHTML;',
'}',
'',
'function updateCard(cardEl) {',
'  var cardId = cardEl.getAttribute("data-card-id");',
'  var entry = getEntry(cardId);',
'  if (!entry) return;',
'',
'  var variantArea = cardEl.querySelector(".msg-variants");',
'  var variants = resolveVariants(entry, profile);',
'',
'  if (isAllDefaults()) {',
'    variantArea.innerHTML = \'<div class="msg-match"><span class="check">\\u2713</span> Default voice \\u2014 no adaptation needed</div>\';',
'    cardEl.classList.remove("has-adaptations");',
'    return;',
'  }',
'',
'  if (variants.length === 0) {',
'    var nonDef = getNonDefaultDims();',
'    variantArea.innerHTML = \'<div class="msg-match"><span class="check">\\u2713</span> Default voice works here</div>\' +',
'      \'<div class="msg-no-variant">No adaptation needed for: \' + nonDef.join(", ") + \'</div>\';',
'    cardEl.classList.remove("has-adaptations");',
'    return;',
'  }',
'',
'  var html = "";',
'  for (var i = 0; i < variants.length; i++) {',
'    var v = variants[i];',
'    html += \'<div class="msg-variant-row">\';',
'    html += \'<span class="dim-badge" style="background:\' + DIM_COLORS[v.dimension] + \'">\' + v.dimension + ":" + v.value + "</span>";',
'    html += \'<span class="variant-text">\' + escapeHtml(v.text) + "</span>";',
'    html += "</div>";',
'  }',
'',
'  var nonDef2 = getNonDefaultDims();',
'  var coveredSet = {};',
'  for (var j = 0; j < variants.length; j++) coveredSet[variants[j].dimension] = true;',
'  var uncovered = [];',
'  for (var k = 0; k < nonDef2.length; k++) {',
'    if (!coveredSet[nonDef2[k]]) uncovered.push(nonDef2[k]);',
'  }',
'  if (uncovered.length > 0) {',
'    html += \'<div class="msg-no-variant">No adaptation needed for: \' + uncovered.join(", ") + "</div>";',
'  }',
'',
'  variantArea.innerHTML = html;',
'  cardEl.classList.add("has-adaptations");',
'}',
'',
'function updateAll() {',
'  var cards = document.querySelectorAll(".msg-card");',
'  for (var i = 0; i < cards.length; i++) updateCard(cards[i]);',
'  updateStats();',
'  updateProfileSummary();',
'  updateButtons();',
'}',
'',
'function updateStats() {',
'  var adapted = 0, total = 0;',
'  var cards = document.querySelectorAll(".msg-card");',
'  for (var i = 0; i < cards.length; i++) {',
'    total++;',
'    if (cards[i].classList.contains("has-adaptations")) adapted++;',
'  }',
'  document.getElementById("stat-adapted").textContent = adapted;',
'  document.getElementById("stat-unchanged").textContent = total - adapted;',
'  document.getElementById("stat-pct").textContent = total > 0 ? Math.round((adapted / total) * 100) + "%" : "0%";',
'}',
'',
'function updateProfileSummary() {',
'  var vals = [];',
'  var keys = ["voice", "framing", "humor", "directness", "comfort"];',
'  for (var i = 0; i < keys.length; i++) vals.push(profile[keys[i]]);',
'  document.getElementById("profile-summary").textContent = vals.join(" / ");',
'}',
'',
'function updateButtons() {',
'  var btns = document.querySelectorAll(".dim-btn");',
'  for (var i = 0; i < btns.length; i++) {',
'    var btn = btns[i];',
'    var dim = btn.getAttribute("data-dim");',
'    var val = btn.getAttribute("data-val");',
'    var isActive = profile[dim] === val;',
'    if (isActive) {',
'      btn.classList.add("active");',
'      btn.style.borderColor = DIM_COLORS[dim];',
'      btn.style.background = DIM_COLORS[dim] + "22";',
'      btn.style.color = "#fff";',
'    } else {',
'      btn.classList.remove("active");',
'      btn.style.borderColor = "#475569";',
'      btn.style.background = "transparent";',
'      btn.style.color = "#94a3b8";',
'    }',
'  }',
'}',
'',
'// Event listeners',
'var dimBtns = document.querySelectorAll(".dim-btn");',
'for (var i = 0; i < dimBtns.length; i++) {',
'  (function(btn) {',
'    btn.addEventListener("click", function() {',
'      profile[btn.getAttribute("data-dim")] = btn.getAttribute("data-val");',
'      updateAll();',
'    });',
'  })(dimBtns[i]);',
'}',
'',
'document.getElementById("reset-btn").addEventListener("click", function() {',
'  profile = Object.assign({}, DEFAULTS);',
'  updateAll();',
'});',
'',
'var tabs = document.querySelectorAll(".tab");',
'for (var i = 0; i < tabs.length; i++) {',
'  (function(tab) {',
'    tab.addEventListener("click", function() {',
'      var allTabs = document.querySelectorAll(".tab");',
'      var allSections = document.querySelectorAll(".section");',
'      for (var j = 0; j < allTabs.length; j++) allTabs[j].classList.remove("active");',
'      for (var j = 0; j < allSections.length; j++) allSections[j].classList.remove("active");',
'      tab.classList.add("active");',
'      document.getElementById("section-" + tab.getAttribute("data-tab")).classList.add("active");',
'    });',
'  })(tabs[i]);',
'}',
'',
'// Fix sticky stacking',
'function fixStickyPositions() {',
'  var controlsBar = document.getElementById("controls-bar");',
'  var tabsBar = document.querySelector(".tabs");',
'  if (controlsBar && tabsBar) {',
'    tabsBar.style.top = controlsBar.offsetHeight + "px";',
'  }',
'}',
'window.addEventListener("resize", fixStickyPositions);',
'fixStickyPositions();',
'',
'// Initial render',
'updateAll();',
'</script>',
'</body>',
'</html>',
].join('\n');

// ── Write output ─────────────────────────────────────────────────────────────

const outPath = join(__dirname, 'personality-switcher.html');
writeFileSync(outPath, html, 'utf-8');
console.log('Generated personality-switcher.html (' + totalMessages + ' messages, ' + totalVariants + ' variants)');
console.log('  Open: file://' + outPath);
