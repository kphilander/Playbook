/* yaml-export.js — Assembles the full brand object and dumps it as _brand.yml.

   Export is merge-then-dump: start from the imported document (round-trip
   editing) or the repo-default skeleton (fresh run), overwrite only the
   paths the UI manages, and serialize with js-yaml. Hand-edited sections —
   helpline trees, meta.foundations, integration program lists — survive
   untouched. YAML comments cannot be preserved (js-yaml drops them); the
   import UI discloses this. */

import yaml from './vendor/js-yaml.mjs';
import { FIELDS, setByPath } from './schema.js';
import { appState } from './state.js';
import { cloneDefaultBrand } from './data/defaults.js';
import { lighten, darken } from './color-utils.js';
import { JURISDICTION_PRESETS } from './data/jurisdictions.js';

/* Empty inputs fall back to the same placeholder values the original
   generator used, so a fresh export is immediately buildable. */
const EXPORT_FALLBACKS = {
  programName: 'Playbook',
  orgName: 'Your Company Name',
  websiteUrl: 'https://example.com/playbook',
  contactEmail: 'info@example.com',
  helplineNumber: '1-800-XXX-XXXX',
  limitsUrl: '{{LIMITS_URL}}',
  selfExclusionUrl: '{{SELF_EXCLUSION_URL}}',
  selfExclusionName: '{{SELF_EXCLUSION_NAME}}',
  supportOrgName: '{{SUPPORT_ORG_NAME}}',
  supportOrgUrl: '{{SUPPORT_ORG_URL}}',
  disclaimerAge: 'You must be {{MIN_AGE}}+ to gamble.',
  disclaimerGeneral: 'Gambling involves risk. Play on your terms.',
};

function fieldValue(f) {
  const el = document.getElementById(f.id);
  if (!el) return f.default;
  if (f.kind === 'check') return el.checked;
  if (f.kind === 'number') {
    const v = parseFloat(el.value);
    return Number.isFinite(v) ? v : f.default;
  }
  let v = el.value;
  if (!v && f.id in EXPORT_FALLBACKS) v = EXPORT_FALLBACKS[f.id];
  return v;
}

function nonEmpty(arr) {
  return (arr || []).filter(s => typeof s === 'string' && s.trim());
}

export function buildBrandObject() {
  const base = appState.importedYaml
    ? JSON.parse(JSON.stringify(appState.importedYaml))
    : cloneDefaultBrand();

  // Simple fields straight from the schema registry
  for (const f of FIELDS) {
    if (!f.yamlPath) continue;
    setByPath(base, f.yamlPath, fieldValue(f));
  }

  // Derived palette shades
  const primary = fieldValue(FIELDS.find(f => f.id === 'colorPrimary'));
  const secondary = fieldValue(FIELDS.find(f => f.id === 'colorSecondary'));
  const accent = fieldValue(FIELDS.find(f => f.id === 'colorAccent'));
  setByPath(base, 'color.palette.primary_dark', darken(primary, 0.3));
  setByPath(base, 'color.palette.secondary_light', lighten(secondary, 0.15));
  setByPath(base, 'color.palette.secondary_dark', darken(secondary, 0.2));
  setByPath(base, 'color.palette.accent_light', lighten(accent, 0.15));
  setByPath(base, 'color.palette.accent_dark', darken(accent, 0.15));

  // Jurisdiction
  const preset = JURISDICTION_PRESETS[appState.jurisdictionId] || {};
  const jurisdictionKey = preset.jurisdictionKey || 'custom';
  const existing = (base.meta.primary_jurisdictions || []).filter(j => j !== jurisdictionKey);
  base.meta.primary_jurisdictions = [jurisdictionKey, ...(appState.importedYaml ? existing : [])];

  if (preset.label) setByPath(base, 'helplines.default.label', preset.label);
  if (!base.helplines.default.hours) setByPath(base, 'helplines.default.hours', '24/7');
  if (preset.helplineWebsite) setByPath(base, 'helplines.default.website', preset.helplineWebsite);
  if (preset.regulatorName) {
    base.regulator = { name: preset.regulatorName };
    if (preset.regulatorUrl) base.regulator.url = preset.regulatorUrl;
  }

  // Identity-derived values
  base.legal.copyright_holder = base.meta.organization;

  // Logo
  const headingFont = fieldValue(FIELDS.find(f => f.id === 'fontHeading'));
  base.logo = base.logo || {};
  base.logo.font = headingFont;
  base.logo.mode = appState.logoMode === 'replace' ? 'image-replacement' : 'text-wordmark';
  if (appState.logoMode === 'replace' && appState.logoDataUrl) {
    base.logo.image_replacement = {
      enabled: true,
      file: 'operator-logo.svg',
      height: '1.4em',
    };
  } else {
    delete base.logo.image_replacement;
  }

  // Custom uploaded font
  if (appState.customFontName && appState.customFontDataUrl) {
    setByPath(base, 'typography.fonts.custom', {
      family: appState.customFontName,
      source: 'local',
      file: appState.customFontName.replace(/\s+/g, '-').toLowerCase() + '.woff2',
      weights: [100, 900],
    });
  } else if (base.typography?.fonts?.custom && !appState.importedYaml) {
    delete base.typography.fonts.custom;
  }

  // Messaging arrays
  setByPath(base, 'messaging.taglines.open', nonEmpty(appState.messaging.openTaglines));
  setByPath(base, 'messaging.taglines.social', nonEmpty(appState.messaging.socialTaglines));
  setByPath(base, 'messaging.ctas.primary', nonEmpty(appState.messaging.primaryCtas));
  setByPath(base, 'messaging.ctas.features', nonEmpty(appState.messaging.featuresCtas));
  setByPath(base, 'messaging.ctas.content', nonEmpty(appState.messaging.contentCtas));

  // Brand pillars
  const pillars = (appState.pillars || []).filter(p => p && p.name && p.name.trim());
  if (pillars.length) {
    base.brand_pillars = pillars.map(p => ({
      name: p.name.trim(),
      tagline: (p.tagline || '').trim(),
      description: (p.description || '').trim(),
    }));
  }

  // Tone lists
  const prefer = {};
  for (const row of appState.tonePrefer || []) {
    const key = (row.key || '').trim().replace(/\s+/g, '_');
    if (key && (row.text || '').trim()) prefer[key] = row.text.trim();
  }
  if (Object.keys(prefer).length) setByPath(base, 'tone.prefer', prefer);
  setByPath(base, 'tone.avoid_in_tier_1', nonEmpty(appState.toneAvoid));

  // Country cultural profiles
  base.country_cultural_profiles = JSON.parse(JSON.stringify(appState.countryProfiles || {}));

  return base;
}

const YAML_HEADER = `# _brand.yml — Generated by the Playbook Brand Configurator
# ============================================
# This file is the single source of truth for your brand.
# Drop it into a fork of the Playbook repo and run \`npm run build\`
# to regenerate every template, token file, and content feed.
#
# Every {{PLACEHOLDER}} in the documentation references a value here.
# Edit it directly, or re-import it into the configurator to keep going.
# ============================================

`;

export function generateFullYaml() {
  const brand = buildBrandObject();
  return YAML_HEADER + yaml.dump(brand, {
    lineWidth: 100,
    noRefs: true,
    quotingType: '"',
  });
}
