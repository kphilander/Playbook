/**
 * resolve-placeholders.mjs — Resolves {{BRAND_TOKEN}} placeholders
 *
 * Substitutes brand-level tokens from _brand.yml while leaving
 * runtime/jurisdiction tokens untouched for the operator's app.
 *
 * Brand tokens (resolved at build time):
 *   {{PROGRAM_NAME}}, {{ORGANIZATION}}, {{PROGRAM_URL}},
 *   {{HELPLINE_NUMBER}}, {{HELPLINE_ALTERNATE}}, {{TEXT_NUMBER}},
 *   {{CHAT_URL}}, {{HELPLINE_LABEL}}, {{MIN_AGE}}
 *
 * Runtime tokens (left for operator's app):
 *   {{DURATION}}, {{LIMIT_AMOUNT}}, {{STATE_NAME}}, {{REGULATOR}}, etc.
 *
 * Usage:
 *   import { resolveBrandTokens } from '../lib/resolve-placeholders.mjs';
 *   const resolved = resolveBrandTokens(htmlString);
 *   // or with custom jurisdiction:
 *   const resolved = resolveBrandTokens(htmlString, 'united-kingdom');
 */

import { loadBrand } from './brand-config.mjs';

/**
 * Replace brand-level {{PLACEHOLDER}} tokens in a string.
 *
 * @param {string} text — Input text with placeholders
 * @param {string} [jurisdiction='united-states'] — Jurisdiction for helpline/age
 * @param {string} [subRegion='national'] — Sub-region within jurisdiction
 * @returns {string} — Text with brand tokens resolved
 */
export function resolveBrandTokens(text, jurisdiction = 'united-states', subRegion = 'national') {
  const brand = loadBrand();
  const tokens = brand.brandTokens(jurisdiction, subRegion);

  let result = text;
  for (const [token, value] of Object.entries(tokens)) {
    result = result.replaceAll(token, value);
  }
  return result;
}

/**
 * Check a string for unresolved brand tokens and report them.
 * Useful for validation.
 *
 * @param {string} text
 * @returns {string[]} — Array of unresolved brand token names
 */
export function findUnresolvedBrandTokens(text) {
  const brand = loadBrand();
  const tokens = Object.keys(brand.brandTokens());
  return tokens.filter(t => text.includes(t));
}

/**
 * List all {{...}} tokens found in a string, categorized as brand or runtime.
 *
 * @param {string} text
 * @returns {{ brand: string[], runtime: string[] }}
 */
export function categorizeTokens(text) {
  const allTokens = [...text.matchAll(/\{\{[A-Z_]+\}\}/g)].map(m => m[0]);
  const unique = [...new Set(allTokens)];

  const brand = loadBrand();
  const brandTokenNames = new Set(Object.keys(brand.brandTokens()));

  return {
    brand: unique.filter(t => brandTokenNames.has(t)),
    runtime: unique.filter(t => !brandTokenNames.has(t)),
  };
}

export default resolveBrandTokens;
