/* yaml-import.js — Loads an existing _brand.yml back into the configurator.

   The parsed document is kept whole in appState.importedYaml; the UI only
   reads the fields it manages (via the schema registry), so everything
   else — helpline trees, foundations, per-jurisdiction lists — survives
   the round trip when the file is exported again. */

import yaml from './vendor/js-yaml.mjs';
import { FIELDS, getByPath } from './schema.js';
import { appState } from './state.js';
import { JURISDICTION_PRESETS } from './data/jurisdictions.js';
import { TYPE_SCALE_PRESETS } from './data/type-scales.js';

const HEX_RE = /^#[0-9A-Fa-f]{6}$/;

function validValue(f, raw) {
  if (raw === undefined || raw === null) return undefined;
  if (f.kind === 'color') {
    return (typeof raw === 'string' && HEX_RE.test(raw)) ? raw : undefined;
  }
  if (f.kind === 'number') {
    const v = parseFloat(raw);
    return Number.isFinite(v) ? v : undefined;
  }
  if (typeof raw === 'object') return undefined;
  return String(raw);
}

/* Match an imported jurisdiction key (e.g. "united-states-nevada") back to
   a configurator preset id (e.g. "us-nv"). Falls back to "custom". */
function matchJurisdiction(doc) {
  const key = (doc.meta?.primary_jurisdictions || [])[0];
  if (!key) return 'custom';
  for (const [id, preset] of Object.entries(JURISDICTION_PRESETS)) {
    if (preset.jurisdictionKey === key) return id;
  }
  return 'custom';
}

function detectScalePreset(doc) {
  const scale = doc.typography?.scale || {};
  const lh = doc.typography?.line_height || {};
  for (const [name, p] of Object.entries(TYPE_SCALE_PRESETS)) {
    const match =
      scale.display === p.display && scale.h1 === p.h1 && scale.h2 === p.h2 &&
      scale.h3 === p.h3 && scale.h4 === p.h4 && scale.body_large === p.bodyLarge &&
      scale.body === p.body && scale.small === p.small && scale.caption === p.caption &&
      lh.heading === p.lhHeading && lh.body === p.lhBody && lh.tight === p.lhTight;
    if (match) return name;
  }
  return 'custom';
}

/* Parse YAML text and load it into the form. Returns
   { ok, warnings, error, errorLine } — caller re-renders on success. */
export function importBrandYaml(text, fileName = '_brand.yml') {
  let doc;
  try {
    doc = yaml.load(text);
  } catch (err) {
    return {
      ok: false,
      error: err.reason || err.message || 'Could not parse YAML',
      errorLine: err.mark ? err.mark.line + 1 : null,
    };
  }
  if (!doc || typeof doc !== 'object' || Array.isArray(doc)) {
    return { ok: false, error: 'File parsed but is not a YAML mapping — is this a _brand.yml?', errorLine: null };
  }

  const warnings = [];

  // Simple fields via the registry
  for (const f of FIELDS) {
    if (!f.yamlPath) continue;
    const raw = getByPath(doc, f.yamlPath);
    if (raw === undefined || raw === null) continue;
    const v = validValue(f, raw);
    if (v === undefined) {
      warnings.push(`${f.yamlPath} = ${JSON.stringify(raw)} isn't valid — kept the current value`);
      continue;
    }
    const el = document.getElementById(f.id);
    if (!el) continue;
    if (f.kind === 'check') el.checked = !!v;
    else {
      el.value = String(v);
      if (f.kind === 'color') {
        const hexEl = document.getElementById(f.id + 'Hex');
        if (hexEl) hexEl.value = String(v);
      }
    }
  }

  // primary_light is managed by the footer-bar control; importing one
  // counts as a manual override so it isn't re-derived from primary.
  if (doc.color?.palette?.primary_light) appState.footerColorManual = true;

  // Complex structures
  if (doc.messaging?.taglines?.open) appState.messaging.openTaglines = [...doc.messaging.taglines.open];
  if (doc.messaging?.taglines?.social) appState.messaging.socialTaglines = [...doc.messaging.taglines.social];
  if (doc.messaging?.ctas?.primary) appState.messaging.primaryCtas = [...doc.messaging.ctas.primary];
  if (doc.messaging?.ctas?.features) appState.messaging.featuresCtas = [...doc.messaging.ctas.features];
  if (doc.messaging?.ctas?.content) appState.messaging.contentCtas = [...doc.messaging.ctas.content];

  if (Array.isArray(doc.brand_pillars) && doc.brand_pillars.length) {
    appState.pillars = doc.brand_pillars.map(p => ({
      name: p?.name || '',
      tagline: p?.tagline || '',
      description: (p?.description || '').trim(),
    }));
  }

  if (doc.tone?.prefer && typeof doc.tone.prefer === 'object') {
    appState.tonePrefer = Object.entries(doc.tone.prefer).map(([key, text]) => ({ key, text: String(text) }));
  }
  if (Array.isArray(doc.tone?.avoid_in_tier_1)) {
    appState.toneAvoid = doc.tone.avoid_in_tier_1.map(String);
  }

  if (doc.country_cultural_profiles && typeof doc.country_cultural_profiles === 'object') {
    appState.countryProfiles = JSON.parse(JSON.stringify(doc.country_cultural_profiles));
  }

  appState.jurisdictionId = matchJurisdiction(doc);
  if (appState.jurisdictionId === 'custom' && (doc.meta?.primary_jurisdictions || []).length) {
    warnings.push(`Jurisdiction "${doc.meta.primary_jurisdictions[0]}" has no configurator preset — using Custom (your helpline values were imported as-is)`);
  }
  appState.scalePreset = detectScalePreset(doc);

  // Keep the whole document for lossless re-export
  appState.importedYaml = doc;
  appState.importedFileName = fileName;

  return { ok: true, warnings };
}
