/* steps/jurisdiction.js — Jurisdiction presets, sub-region tags, the
   regulatory info box, and currency auto-suggestion. */

import { appState } from '../state.js';
import { JURISDICTION_PRESETS, JURISDICTION_CHILDREN, JURISDICTION_CURRENCY } from '../data/jurisdictions.js';

let onChange = () => {};

export function applyPreset(id) {
  appState.jurisdictionId = id;
  const preset = JURISDICTION_PRESETS[id];
  if (!preset) return;
  document.getElementById('helplineNumber').value = preset.number;
  document.getElementById('minAge').value = preset.age;
  document.getElementById('textNumber').value = preset.textNumber || '';
  document.getElementById('chatUrl').value = preset.chatUrl || '';
  document.getElementById('selfExclusionName').value = preset.selfExclusionName || '';
  document.getElementById('selfExclusionUrl').value = preset.selfExclusionUrl || '';
  document.getElementById('limitsUrl').value = '';
  document.getElementById('supportOrgName').value = preset.supportOrgName || '';
  document.getElementById('supportOrgUrl').value = preset.supportOrgUrl || '';
  if (preset.disclaimerGeneral !== undefined) {
    document.getElementById('disclaimerGeneral').value = preset.disclaimerGeneral;
  }

  // Currency suggestion (group preset, e.g. "us" covers "us-nv")
  const cur = JURISDICTION_CURRENCY[id] || JURISDICTION_CURRENCY[id.split('-')[0]];
  if (cur) {
    document.getElementById('currencySymbol').value = cur.symbol;
    document.getElementById('currencyCode').value = cur.code;
    document.getElementById('currencyPosition').value = cur.position;
    document.getElementById('currencyThousands').value = cur.thousands;
    document.getElementById('currencyDecimal').value = cur.decimal;
  }

  updateJurisdictionInfo(preset);
  onChange();
}

export function updateJurisdictionInfo(preset) {
  const infoEl = document.getElementById('jurisdictionInfo');
  const parts = [];
  if (preset.regulatorName) {
    const regLink = preset.regulatorUrl
      ? '<a href="' + preset.regulatorUrl + '" target="_blank" rel="noopener">' + preset.regulatorName + '</a>'
      : preset.regulatorName;
    parts.push('<strong>Regulator:</strong> ' + regLink);
  }
  if (preset.verticals) parts.push('<strong>Verticals:</strong> ' + preset.verticals);
  if (preset.mandatoryMessaging) parts.push('<strong>Mandatory messaging:</strong> ' + preset.mandatoryMessaging);
  if (preset.notes) parts.push(preset.notes);
  if (parts.length > 0) {
    infoEl.innerHTML = parts.join('<br>');
    infoEl.classList.add('visible');
  } else {
    infoEl.classList.remove('visible');
  }
}

function showSubJurisdictions(groupId, activeId) {
  const subEl = document.getElementById('subJurisdictions');
  const children = JURISDICTION_CHILDREN[groupId];
  if (!children) { subEl.classList.remove('visible'); subEl.innerHTML = ''; return; }
  subEl.innerHTML = children.map(c =>
    `<button type="button" class="sub-preset-tag${c.id === activeId ? ' active' : ''}" data-j="${c.id}" aria-pressed="${c.id === activeId}">${c.label}</button>`
  ).join('');
  subEl.classList.add('visible');
  subEl.querySelectorAll('.sub-preset-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      subEl.querySelectorAll('.sub-preset-tag').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-pressed', 'false'); });
      tag.classList.add('active');
      tag.setAttribute('aria-pressed', 'true');
      applyPreset(tag.dataset.j);
    });
  });
}

/* Reflect appState.jurisdictionId in the tag UI without re-applying the
   preset (used after import/restore, where field values must win). */
export function syncJurisdictionUi() {
  const id = appState.jurisdictionId;
  const groupId = id.includes('-') ? id.split('-')[0] : id;
  document.querySelectorAll('#jurisdictionPresets .preset-tag').forEach(t => {
    const active = t.dataset.j === groupId || t.dataset.j === id;
    t.classList.toggle('active', active);
    t.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  if (JURISDICTION_CHILDREN[groupId]) {
    showSubJurisdictions(groupId, id);
  } else {
    const subEl = document.getElementById('subJurisdictions');
    subEl.classList.remove('visible');
    subEl.innerHTML = '';
  }
  updateJurisdictionInfo(JURISDICTION_PRESETS[id] || {});
}

export function initJurisdictionStep(onChangeCb) {
  onChange = onChangeCb;

  document.querySelectorAll('#jurisdictionPresets .preset-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('#jurisdictionPresets .preset-tag').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-pressed', 'false'); });
      tag.classList.add('active');
      tag.setAttribute('aria-pressed', 'true');
      const j = tag.dataset.j;
      const groupId = tag.dataset.group;
      if (groupId && JURISDICTION_CHILDREN[groupId]) {
        showSubJurisdictions(groupId, null);
        applyPreset(j);
      } else {
        const subEl = document.getElementById('subJurisdictions');
        subEl.classList.remove('visible');
        subEl.innerHTML = '';
        applyPreset(j);
      }
    });
  });

  syncJurisdictionUi();
}
