/**
 * brand-config.mjs — Playbook Brand Configuration Loader
 *
 * Reads _brand.yml and exposes brand values to all build scripts.
 * This is the single entry point for brand configuration.
 *
 * Usage:
 *   import { loadBrand } from '../lib/brand-config.mjs';
 *   const brand = loadBrand();
 *
 *   brand.meta.program_name          // "Playbook"
 *   brand.color.palette.primary      // "#1B2838"
 *   brand.colorsHex()                // { navy: '#1B2838', teal: '#00D4AA', ... }
 *   brand.colorsRaw()                // { navy: '1B2838', teal: '00D4AA', ... }
 *   brand.fonts()                    // { heading: "'Inter', system-ui, ...", ... }
 *   brand.helpline()                 // { number: "1-800-522-4700", ... }
 *   brand.resolve('background')      // "#F5F5FA" (resolves semantic ref)
 */

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

let _cache = null;

/**
 * Load and parse _brand.yml, returning an enriched brand object.
 * Results are cached — safe to call multiple times.
 *
 * @param {string} [yamlPath] — Override path to YAML file (default: ROOT/_brand.yml)
 * @returns {BrandConfig}
 */
export function loadBrand(yamlPath) {
  if (_cache) return _cache;

  const filePath = yamlPath || join(ROOT, '_brand.yml');
  const raw = readFileSync(filePath, 'utf-8');
  const data = yaml.load(raw);

  _cache = createBrandConfig(data);
  return _cache;
}

/**
 * Force-reload the config (useful for validation scripts or watch mode).
 */
export function reloadBrand(yamlPath) {
  _cache = null;
  return loadBrand(yamlPath);
}

// ─── Internal ───────────────────────────────────────────────

function operatorLogoHtml(data) {
  const path = data.integration?.operator_logo_path;
  if (path) {
    const alt = data.integration?.operator_logo_alt || 'Operator';
    return `<img src="${path}" alt="${alt}" class="pb-cobrand__logo">`;
  }
  return '<div class="pb-cobrand__placeholder" style="width:100px;height:36px;font-size:11px;">Your logo</div>';
}

function createBrandConfig(data) {
  const palette = data.color?.palette || {};
  const aliases = data.color?.aliases || {};
  const semantic = data.color?.semantic || {};

  // Build reverse alias map: alias → palette key
  // And forward map: alias → hex value
  const aliasToHex = {};
  const aliasToRaw = {};
  for (const [alias, paletteKey] of Object.entries(aliases)) {
    const hex = palette[paletteKey];
    if (hex) {
      aliasToHex[alias] = hex;
      aliasToRaw[alias] = hex.replace('#', '');
    }
  }

  // Also include white/black directly (they're used in build scripts)
  if (palette.white) {
    aliasToHex.white = palette.white;
    aliasToRaw.white = palette.white.replace('#', '');
  }
  if (palette.black) {
    aliasToHex.black = palette.black;
    aliasToRaw.black = palette.black.replace('#', '');
  }

  /**
   * Resolve a semantic color reference to its hex value.
   * e.g. resolve('background') → "#F5F5FA" (because semantic.background = "neutral_50")
   */
  function resolve(semanticKey) {
    const ref = semantic[semanticKey];
    if (!ref) return null;
    return palette[ref] || ref; // If ref is a palette key, resolve; otherwise return as-is
  }

  /**
   * Get all resolved semantic colors as { key: hexValue }
   */
  function resolvedSemantics() {
    const result = {};
    for (const [key, ref] of Object.entries(semantic)) {
      result[key] = palette[ref] || ref;
    }
    return result;
  }

  /**
   * Get aliased colors with # prefix (for CSS/HTML).
   * e.g. { navy: '#1B2838', teal: '#00D4AA', ... }
   */
  function colorsHex() {
    return { ...aliasToHex };
  }

  /**
   * Get aliased colors WITHOUT # prefix (for PPTX, etc).
   * e.g. { navy: '1B2838', teal: '00D4AA', ... }
   */
  function colorsRaw() {
    return { ...aliasToRaw };
  }

  /**
   * Get full palette with # prefix, keyed by palette name.
   * e.g. { primary: '#1B2838', secondary: '#00D4AA', ... }
   */
  function paletteHex() {
    return { ...palette };
  }

  /**
   * Get font family strings with fallbacks, ready for CSS.
   * e.g. { heading: "'Inter', system-ui, -apple-system, sans-serif", ... }
   */
  function fonts() {
    const result = {};
    const fontDefs = data.typography?.fonts || {};
    for (const [role, def] of Object.entries(fontDefs)) {
      result[role] = `'${def.family}', ${def.fallback}`;
    }
    return result;
  }

  /**
   * Get raw font family names (no fallbacks).
   * e.g. { heading: "Inter", body: "Source Sans 3", mono: "Source Code Pro" }
   */
  function fontFamilies() {
    const result = {};
    const fontDefs = data.typography?.fonts || {};
    for (const [role, def] of Object.entries(fontDefs)) {
      result[role] = def.family;
    }
    return result;
  }

  /**
   * Get default helpline info for a jurisdiction.
   * Falls back to data.helplines.default if jurisdiction not found.
   *
   * @param {string} [jurisdiction='united-states']
   * @param {string} [subRegion='national']
   */
  function helpline(jurisdiction = 'united-states', subRegion = 'national') {
    const juris = data.helplines?.[jurisdiction];
    if (!juris) return data.helplines?.default || {};
    // If jurisdiction has sub-regions (like united-states.national, united-states.nevada)
    if (juris[subRegion]) return juris[subRegion];
    // If jurisdiction is flat (like australia, united-kingdom)
    if (juris.number) return juris;
    return data.helplines?.default || {};
  }

  /**
   * Get the minimum gambling age for a jurisdiction.
   * @param {string} [jurisdiction='default']
   */
  function minAge(jurisdiction = 'default') {
    const ages = data.legal?.minimum_gambling_age || {};
    return ages[jurisdiction] ?? ages.default ?? 18;
  }

  /**
   * Get the cultural profile (5-dimension cultural adapter).
   * Returns defaults if not configured.
   */
  function culturalProfile() {
    const cp = data.cultural_profile || {};
    return {
      voice: cp.voice || 'peer',
      framing: cp.framing || 'individual',
      humor: cp.humor || 'irreverent',
      directness: cp.directness || 'blunt',
      comfort: cp.comfort || 'open',
    };
  }

  /**
   * Get brand tokens for placeholder resolution.
   * Returns a map of {{TOKEN}} → value.
   */
  function brandTokens(jurisdiction = 'united-states', subRegion = 'national') {
    const hl = helpline(jurisdiction, subRegion);
    const age = String(minAge(jurisdiction));
    const ageDisclaimer = (data.legal?.disclaimers?.age || 'You must be {{MIN_AGE}}+ to gamble.')
      .replaceAll('{{MIN_AGE}}', age);
    const generalDisclaimer = data.legal?.disclaimers?.general || 'Gambling involves risk. Play on your terms.';
    return {
      '{{PROGRAM_NAME}}': data.meta?.program_name || 'Playbook',
      '{{ORGANIZATION}}': data.meta?.organization || '',
      '{{PROGRAM_URL}}': data.meta?.website || '',
      '{{HELPLINE_NUMBER}}': hl.number || '',
      '{{HELPLINE_ALTERNATE}}': hl.alternate || '',
      '{{TEXT_NUMBER}}': hl.text_number || '',
      '{{CHAT_URL}}': hl.chat_url || '',
      '{{HELPLINE_LABEL}}': hl.label || '',
      '{{MIN_AGE}}': age,
      '{{CONTACT_EMAIL}}': data.meta?.contact_email || '',
      '{{AGE_DISCLAIMER}}': ageDisclaimer,
      '{{GENERAL_DISCLAIMER}}': generalDisclaimer,
      '{{OPERATOR_LOGO}}': operatorLogoHtml(data),
      '{{CONTENT_HUB_URL}}': data.meta?.content_hub_url || data.meta?.website || '',

      // Content defaults (operator-overridable)
      '{{STAT_GAME_1}}': data.content_defaults?.stat_game_1 || 'Blackjack (basic strategy)',
      '{{STAT_VALUE_1}}': data.content_defaults?.stat_value_1 || '0.5%',
      '{{STAT_NOTE_1}}': data.content_defaults?.stat_note_1 || 'Best odds in the casino',
      '{{STAT_GAME_2}}': data.content_defaults?.stat_game_2 || 'American Roulette',
      '{{STAT_VALUE_2}}': data.content_defaults?.stat_value_2 || '5.26%',
      '{{STAT_NOTE_2}}': data.content_defaults?.stat_note_2 || 'Double zero = double edge',
      '{{STAT_GAME_3}}': data.content_defaults?.stat_game_3 || 'Slots (average)',
      '{{STAT_VALUE_3}}': data.content_defaults?.stat_value_3 || '2–15%',
      '{{STAT_NOTE_3}}': data.content_defaults?.stat_note_3 || 'Varies by machine and casino',
      '{{HERO_HEADLINE}}': data.content_defaults?.hero_headline || 'Every game has math. Here\'s yours.',
      '{{HERO_SUBHEAD}}': data.content_defaults?.hero_subhead || 'Know the house edge. Pick your games. Set your budget.',
      '{{QUIZ_CTA}}': data.content_defaults?.quiz_cta || 'Think you know the odds? Scan to take the quiz',
      '{{TOOLS_HEADLINE}}': data.content_defaults?.tools_headline || 'Your tools. Your limits. Your call.',
      '{{TOOLS_BODY}}': data.content_defaults?.tools_body || 'Set your deposit limit, session reminders, and activity alerts in your account settings. Takes 10 seconds.',
      '{{SUPPORT_HEADLINE}}': data.content_defaults?.support_headline || 'Free, confidential support',
      '{{SUPPORT_BODY}}': data.content_defaults?.support_body || 'For any question about gambling. No judgment. Ever.',
    };
  }

  return {
    // Raw YAML data (full access)
    ...data,

    // Convenience methods
    colorsHex,
    colorsRaw,
    paletteHex,
    resolve,
    resolvedSemantics,
    fonts,
    fontFamilies,
    helpline,
    minAge,
    culturalProfile,
    brandTokens,

    // Useful constants
    ROOT,
  };
}

export default loadBrand;
