/* steps/messaging.js — Messaging & content step: tagline/CTA rows,
   brand-pillar editor. (Content-default fields are plain schema inputs.) */

import { appState } from '../state.js';

let onChange = () => {};

const TAGLINE_LISTS = {
  open:     { get: () => appState.messaging.openTaglines,   containerId: 'openTaglines' },
  social:   { get: () => appState.messaging.socialTaglines, containerId: 'socialTaglines' },
};
const CTA_LISTS = {
  primary:  { get: () => appState.messaging.primaryCtas,  containerId: 'primaryCtas' },
  features: { get: () => appState.messaging.featuresCtas, containerId: 'featuresCtas' },
  content:  { get: () => appState.messaging.contentCtas,  containerId: 'contentCtas' },
};

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function renderRows(listDef, kindLabel) {
  const arr = listDef.get();
  const container = document.getElementById(listDef.containerId);
  container.innerHTML = '';
  arr.forEach((val, i) => {
    const row = document.createElement('div');
    row.className = 'tagline-row';
    row.innerHTML = `<input type="text" class="form-input" value="${escapeAttr(val)}" aria-label="${kindLabel} ${i + 1}">` +
      `<button type="button" class="tagline-remove" aria-label="Remove ${kindLabel} ${i + 1}">&times;</button>`;
    row.querySelector('input').addEventListener('input', (e) => { arr[i] = e.target.value; onChange(); });
    row.querySelector('.tagline-remove').addEventListener('click', () => {
      arr.splice(i, 1);
      renderRows(listDef, kindLabel);
      onChange();
    });
    container.appendChild(row);
  });
}

function addRow(listDef, kindLabel) {
  listDef.get().push('');
  renderRows(listDef, kindLabel);
  const inputs = document.getElementById(listDef.containerId).querySelectorAll('input');
  if (inputs.length) inputs[inputs.length - 1].focus();
  onChange();
}

/* ── Brand pillars ── */

export function renderPillars() {
  const container = document.getElementById('pillarsList');
  container.innerHTML = '';
  appState.pillars.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'pillar-card';
    card.innerHTML = `
      <div class="pillar-card-head">
        <span class="pillar-card-num">Pillar ${i + 1}</span>
        <button type="button" class="tagline-remove" aria-label="Remove pillar ${i + 1}">&times;</button>
      </div>
      <div class="pillar-grid">
        <div><label class="form-label">Name</label><input type="text" class="form-input pillar-name" value="${String(p.name || '').replace(/"/g, '&quot;')}" placeholder="e.g. Open"></div>
        <div><label class="form-label">Tagline</label><input type="text" class="form-input pillar-tagline" value="${String(p.tagline || '').replace(/"/g, '&quot;')}" placeholder="e.g. No fine print"></div>
      </div>
      <label class="form-label">Description</label>
      <textarea class="form-input pillar-desc" rows="2">${String(p.description || '').replace(/</g, '&lt;')}</textarea>`;
    card.querySelector('.pillar-name').addEventListener('input', e => { p.name = e.target.value; onChange(); });
    card.querySelector('.pillar-tagline').addEventListener('input', e => { p.tagline = e.target.value; onChange(); });
    card.querySelector('.pillar-desc').addEventListener('input', e => { p.description = e.target.value; onChange(); });
    card.querySelector('.tagline-remove').addEventListener('click', () => {
      appState.pillars.splice(i, 1);
      renderPillars();
      onChange();
    });
    container.appendChild(card);
  });
  const warn = document.getElementById('pillarsWarning');
  if (warn) warn.style.display = appState.pillars.filter(p => (p.name || '').trim()).length < 2 ? '' : 'none';
}

export function renderMessagingLists() {
  renderRows(TAGLINE_LISTS.open, 'Open tagline');
  renderRows(TAGLINE_LISTS.social, 'Social tagline');
  renderRows(CTA_LISTS.primary, 'Primary CTA');
  renderRows(CTA_LISTS.features, 'Feature CTA');
  renderRows(CTA_LISTS.content, 'Content CTA');
  renderPillars();
}

export function initMessagingStep(onChangeCb) {
  onChange = onChangeCb;

  document.getElementById('addOpenTagline').addEventListener('click', () => addRow(TAGLINE_LISTS.open, 'Open tagline'));
  document.getElementById('addSocialTagline').addEventListener('click', () => addRow(TAGLINE_LISTS.social, 'Social tagline'));
  document.getElementById('addPrimaryCta').addEventListener('click', () => addRow(CTA_LISTS.primary, 'Primary CTA'));
  document.getElementById('addFeaturesCta').addEventListener('click', () => addRow(CTA_LISTS.features, 'Feature CTA'));
  document.getElementById('addContentCta').addEventListener('click', () => addRow(CTA_LISTS.content, 'Content CTA'));
  document.getElementById('addPillar').addEventListener('click', () => {
    appState.pillars.push({ name: '', tagline: '', description: '' });
    renderPillars();
    const names = document.querySelectorAll('#pillarsList .pillar-name');
    if (names.length) names[names.length - 1].focus();
    onChange();
  });

  renderMessagingLists();
}
