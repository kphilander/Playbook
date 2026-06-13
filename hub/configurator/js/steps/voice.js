/* steps/voice.js — Voice & culture step: tone preferences, avoid-list
   chips, and per-country cultural profile overrides. */

import { appState } from '../state.js';

let onChange = () => {};

const PROFILE_DIMS = [
  { key: 'voice',      label: 'Voice',      options: ['peer', 'authority', 'elder'] },
  { key: 'framing',    label: 'Framing',    options: ['individual', 'communal'] },
  { key: 'humor',      label: 'Humor',      options: ['irreverent', 'warm', 'understated', 'minimal'] },
  { key: 'directness', label: 'Directness', options: ['blunt', 'diplomatic', 'contextual'] },
  { key: 'comfort',    label: 'Comfort',    options: ['open', 'reserved', 'private'] },
];

/* ── Tone prefer rows (term → preferred phrasing) ── */

export function renderTonePrefer() {
  const container = document.getElementById('tonePreferList');
  container.innerHTML = '';
  appState.tonePrefer.forEach((row, i) => {
    const el = document.createElement('div');
    el.className = 'tone-prefer-row';
    el.innerHTML = `
      <input type="text" class="form-input tp-key" value="${String(row.key || '').replace(/"/g, '&quot;')}" placeholder="term" aria-label="Preferred term ${i + 1} key">
      <input type="text" class="form-input tp-text" value="${String(row.text || '').replace(/"/g, '&quot;')}" placeholder="say this (not that)" aria-label="Preferred term ${i + 1} guidance">
      <button type="button" class="tagline-remove" aria-label="Remove preferred term ${i + 1}">&times;</button>`;
    el.querySelector('.tp-key').addEventListener('input', e => { row.key = e.target.value; onChange(); });
    el.querySelector('.tp-text').addEventListener('input', e => { row.text = e.target.value; onChange(); });
    el.querySelector('.tagline-remove').addEventListener('click', () => {
      appState.tonePrefer.splice(i, 1);
      renderTonePrefer();
      onChange();
    });
    container.appendChild(el);
  });
}

/* ── Avoid-in-Tier-1 chips ── */

export function renderToneAvoid() {
  const list = document.getElementById('toneAvoidChips');
  list.innerHTML = '';
  appState.toneAvoid.forEach((term, i) => {
    const chip = document.createElement('span');
    chip.className = 'avoid-chip';
    chip.innerHTML = `<span>${String(term).replace(/</g, '&lt;')}</span><button type="button" aria-label="Remove avoided term: ${String(term).replace(/"/g, '&quot;')}">&times;</button>`;
    chip.querySelector('button').addEventListener('click', () => {
      appState.toneAvoid.splice(i, 1);
      renderToneAvoid();
      onChange();
    });
    list.appendChild(chip);
  });
}

function addAvoidTerm() {
  const input = document.getElementById('toneAvoidInput');
  const term = input.value.trim();
  if (!term) return;
  if (!appState.toneAvoid.includes(term)) {
    appState.toneAvoid.push(term);
    renderToneAvoid();
    onChange();
  }
  input.value = '';
  input.focus();
}

/* ── Per-country cultural profiles ── */

export function renderCountryProfiles() {
  const container = document.getElementById('countryProfilesList');
  container.innerHTML = '';
  const entries = Object.entries(appState.countryProfiles || {});
  const empty = document.getElementById('countryProfilesEmpty');
  if (empty) empty.style.display = entries.length ? 'none' : '';

  entries.forEach(([country, profile]) => {
    const card = document.createElement('div');
    card.className = 'country-profile-card';
    const title = country.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    card.innerHTML = `
      <div class="pillar-card-head">
        <span class="pillar-card-num">${title}</span>
        <button type="button" class="tagline-remove" aria-label="Remove country profile: ${title}">&times;</button>
      </div>
      <div class="country-profile-grid"></div>`;
    const grid = card.querySelector('.country-profile-grid');
    PROFILE_DIMS.forEach(dim => {
      const wrap = document.createElement('div');
      const selId = `cp-${country}-${dim.key}`;
      wrap.innerHTML = `<label class="form-label" for="${selId}">${dim.label}</label>`;
      const sel = document.createElement('select');
      sel.className = 'form-select';
      sel.id = selId;
      dim.options.forEach(opt => {
        const o = document.createElement('option');
        o.value = opt;
        o.textContent = opt;
        if (profile[dim.key] === opt) o.selected = true;
        sel.appendChild(o);
      });
      sel.addEventListener('change', () => { profile[dim.key] = sel.value; onChange(); });
      wrap.appendChild(sel);
      grid.appendChild(wrap);
    });
    card.querySelector('.tagline-remove').addEventListener('click', () => {
      delete appState.countryProfiles[country];
      renderCountryProfiles();
      onChange();
    });
    container.appendChild(card);
  });
}

function addCountryProfile() {
  const input = document.getElementById('countryProfileInput');
  const slug = input.value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (!slug) return;
  if (!appState.countryProfiles[slug]) {
    // Seed from the brand-wide profile so only the differences need editing
    appState.countryProfiles[slug] = {
      voice: document.getElementById('cultureVoice').value,
      framing: document.getElementById('cultureFraming').value,
      humor: document.getElementById('cultureHumor').value,
      directness: document.getElementById('cultureDirectness').value,
      comfort: document.getElementById('cultureComfort').value,
    };
    renderCountryProfiles();
    onChange();
  }
  input.value = '';
}

export function renderVoiceLists() {
  renderTonePrefer();
  renderToneAvoid();
  renderCountryProfiles();
}

export function initVoiceStep(onChangeCb) {
  onChange = onChangeCb;

  document.getElementById('addTonePrefer').addEventListener('click', () => {
    appState.tonePrefer.push({ key: '', text: '' });
    renderTonePrefer();
    const keys = document.querySelectorAll('#tonePreferList .tp-key');
    if (keys.length) keys[keys.length - 1].focus();
    onChange();
  });

  document.getElementById('toneAvoidAdd').addEventListener('click', addAvoidTerm);
  document.getElementById('toneAvoidInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addAvoidTerm(); }
  });

  document.getElementById('countryProfileAdd').addEventListener('click', addCountryProfile);
  document.getElementById('countryProfileInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addCountryProfile(); }
  });

  renderVoiceLists();
}
