/* state.js — Form state collection, restore, and localStorage autosave.

   The DOM is the working state for simple fields (the wizard inputs);
   FIELDS in schema.js maps each one. Structures that don't fit a flat
   input — messaging arrays, pillars, tone lists, country profiles,
   uploads, the imported YAML document — live in `appState` here.

   collectSnapshot()/applySnapshot() serialize the whole thing, powering
   both autosave ("resume where you left off") and _brand.yml import. */

import { FIELDS } from './schema.js';
import { cloneDefaultBrand } from './data/defaults.js';

const STORAGE_KEY = 'pb-configurator-v1';
// localStorage quota is ~5 MB; leave headroom for the rest of the snapshot
// before deciding to persist embedded logo/font data URLs.
const MAX_SAVED_CHARS = 3_500_000;

const defaults = cloneDefaultBrand();

function preferMapToRows(prefer) {
  return Object.entries(prefer || {}).map(([key, text]) => ({ key, text }));
}

export const appState = {
  jurisdictionId: 'us',
  footerColorManual: false,
  logoDataUrl: null,
  logoMode: 'cobrand',
  extractedColors: [],
  suggestedPalette: null,
  customFontDataUrl: null,
  customFontName: '',
  scalePreset: 'default',
  // Round-trip support: the full parsed document from an imported _brand.yml.
  // Export starts from this (when present) so hand-edited sections survive.
  importedYaml: null,
  importedFileName: '',

  messaging: {
    openTaglines: [...(defaults.messaging?.taglines?.open || [])],
    socialTaglines: [...(defaults.messaging?.taglines?.social || [])],
    primaryCtas: [...(defaults.messaging?.ctas?.primary || [])],
    featuresCtas: [...(defaults.messaging?.ctas?.features || [])],
    contentCtas: [...(defaults.messaging?.ctas?.content || [])],
  },
  pillars: JSON.parse(JSON.stringify(defaults.brand_pillars || [])),
  tonePrefer: preferMapToRows(defaults.tone?.prefer),
  toneAvoid: [...(defaults.tone?.avoid_in_tier_1 || [])],
  countryProfiles: JSON.parse(JSON.stringify(defaults.country_cultural_profiles || {})),
};

export function resetComplexState() {
  const d = cloneDefaultBrand();
  appState.messaging = {
    openTaglines: [...(d.messaging?.taglines?.open || [])],
    socialTaglines: [...(d.messaging?.taglines?.social || [])],
    primaryCtas: [...(d.messaging?.ctas?.primary || [])],
    featuresCtas: [...(d.messaging?.ctas?.features || [])],
    contentCtas: [...(d.messaging?.ctas?.content || [])],
  };
  appState.pillars = JSON.parse(JSON.stringify(d.brand_pillars || []));
  appState.tonePrefer = preferMapToRows(d.tone?.prefer);
  appState.toneAvoid = [...(d.tone?.avoid_in_tier_1 || [])];
  appState.countryProfiles = JSON.parse(JSON.stringify(d.country_cultural_profiles || {}));
}

function readField(f) {
  const el = document.getElementById(f.id);
  if (!el) return f.default;
  if (f.kind === 'check') return el.checked;
  if (f.kind === 'number') {
    const v = parseFloat(el.value);
    return Number.isFinite(v) ? v : f.default;
  }
  return el.value;
}

function writeField(f, value) {
  const el = document.getElementById(f.id);
  if (el === null || value === undefined || value === null) return;
  if (f.kind === 'check') { el.checked = !!value; return; }
  el.value = String(value);
  if (f.kind === 'color') {
    const hexEl = document.getElementById(f.id + 'Hex');
    if (hexEl) hexEl.value = String(value);
  }
}

export function collectSnapshot() {
  const fields = {};
  for (const f of FIELDS) fields[f.id] = readField(f);
  return {
    v: 1,
    savedAt: Date.now(),
    fields,
    jurisdictionId: appState.jurisdictionId,
    footerColorManual: appState.footerColorManual,
    logoDataUrl: appState.logoDataUrl,
    logoMode: appState.logoMode,
    customFontDataUrl: appState.customFontDataUrl,
    customFontName: appState.customFontName,
    scalePreset: appState.scalePreset,
    importedYaml: appState.importedYaml,
    importedFileName: appState.importedFileName,
    messaging: appState.messaging,
    pillars: appState.pillars,
    tonePrefer: appState.tonePrefer,
    toneAvoid: appState.toneAvoid,
    countryProfiles: appState.countryProfiles,
  };
}

/* Writes a snapshot back into the DOM and appState. Callers re-render
   (preview, messaging lists, wordmark) afterwards — this only sets values. */
export function applySnapshot(snap) {
  if (!snap || snap.v !== 1) return false;
  for (const f of FIELDS) {
    if (snap.fields && f.id in snap.fields) writeField(f, snap.fields[f.id]);
  }
  appState.jurisdictionId = snap.jurisdictionId || 'us';
  appState.footerColorManual = !!snap.footerColorManual;
  appState.logoDataUrl = snap.logoDataUrl || null;
  appState.logoMode = snap.logoMode || 'cobrand';
  appState.customFontDataUrl = snap.customFontDataUrl || null;
  appState.customFontName = snap.customFontName || '';
  appState.scalePreset = snap.scalePreset || 'custom';
  appState.importedYaml = snap.importedYaml || null;
  appState.importedFileName = snap.importedFileName || '';
  if (snap.messaging) appState.messaging = snap.messaging;
  if (snap.pillars) appState.pillars = snap.pillars;
  if (snap.tonePrefer) appState.tonePrefer = snap.tonePrefer;
  if (snap.toneAvoid) appState.toneAvoid = snap.toneAvoid;
  if (snap.countryProfiles) appState.countryProfiles = snap.countryProfiles;
  return true;
}

let saveTimer = null;

export function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveNow, 500);
}

export function saveNow() {
  try {
    const snap = collectSnapshot();
    let json = JSON.stringify(snap);
    if (json.length > MAX_SAVED_CHARS) {
      // Embedded logo/font data URLs can blow the quota; save everything else.
      snap.logoDataUrl = null;
      snap.customFontDataUrl = null;
      snap.assetsDropped = true;
      json = JSON.stringify(snap);
    }
    localStorage.setItem(STORAGE_KEY, json);
    return true;
  } catch (e) {
    console.warn('Autosave failed:', e);
    return false;
  }
}

export function loadSaved() {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return null;
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

export function clearSaved() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* private mode */ }
}
