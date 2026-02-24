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
   * Get brand tokens for placeholder resolution.
   * Returns a map of {{TOKEN}} → value.
   */
  function brandTokens(jurisdiction = 'united-states', subRegion = 'national') {
    const hl = helpline(jurisdiction, subRegion);
    return {
      '{{PROGRAM_NAME}}': data.meta?.program_name || 'Playbook',
      '{{ORGANIZATION}}': data.meta?.organization || '',
      '{{PROGRAM_URL}}': data.meta?.website || '',
      '{{HELPLINE_NUMBER}}': hl.number || '',
      '{{HELPLINE_ALTERNATE}}': hl.alternate || '',
      '{{TEXT_NUMBER}}': hl.text_number || '',
      '{{CHAT_URL}}': hl.chat_url || '',
      '{{HELPLINE_LABEL}}': hl.label || '',
      '{{MIN_AGE}}': String(minAge(jurisdiction)),
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
    brandTokens,

    // Useful constants
    ROOT,
  };
}

export default loadBrand;
