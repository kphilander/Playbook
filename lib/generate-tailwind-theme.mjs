#!/usr/bin/env node
/**
 * generate-tailwind-theme.mjs — Generates Tailwind CSS v4 @theme block
 *
 * Reads _brand.yml and generates the @theme CSS block used by the slide deck.
 * Preserves Tailwind naming conventions (--color-navy, not --pb-color-primary).
 *
 * Output: slide-deck/src/generated/brand-theme.css
 *
 * Usage:  node lib/generate-tailwind-theme.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadBrand } from './brand-config.mjs';

const brand = loadBrand();
const OUT_DIR = join(brand.ROOT, 'slide-deck', 'src', 'generated');
const OUTPUT = join(OUT_DIR, 'brand-theme.css');

mkdirSync(OUT_DIR, { recursive: true });

const palette = brand.color?.palette || {};
const aliases = brand.color?.aliases || {};
const fonts = brand.typography?.fonts || {};

// The Tailwind theme needs BOTH alias-based names (navy, teal) AND
// full palette names (neutral-900, neutral-300) because slide components
// use both naming conventions in className attributes.
const colorEntries = [];
const seen = new Set();

// First: alias-based names (navy, teal, orange, midnight, etc.)
for (const [alias, paletteKey] of Object.entries(aliases)) {
  const hex = palette[paletteKey];
  if (!hex) continue;
  // Convert camelCase to kebab-case: navyLight → navy-light
  const cssName = alias.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  colorEntries.push([cssName, hex]);
  seen.add(cssName);
}

// Second: full palette names as kebab-case for classes like "bg-neutral-900"
for (const [key, hex] of Object.entries(palette)) {
  const cssName = key.replace(/_/g, '-');
  if (!seen.has(cssName)) {
    colorEntries.push([cssName, hex]);
    seen.add(cssName);
  }
}

const lines = [];
lines.push('/* brand-theme.css — Auto-generated from _brand.yml */');
lines.push('/* Run: node lib/generate-tailwind-theme.mjs */');
lines.push('/* DO NOT EDIT MANUALLY */');
lines.push('');
lines.push('@theme {');

lines.push('  /* ─── Brand Colors ─────────────────────── */');
for (const [name, hex] of colorEntries) {
  lines.push(`  --color-${name}: ${hex};`);
}
lines.push('');

lines.push('  /* ─── Brand Fonts ──────────────────────── */');
if (fonts.heading) {
  lines.push(`  --font-heading: '${fonts.heading.family}', ${fonts.heading.fallback};`);
}
if (fonts.body) {
  lines.push(`  --font-body: '${fonts.body.family}', ${fonts.body.fallback};`);
}
if (fonts.monospace) {
  lines.push(`  --font-mono: '${fonts.monospace.family}', ${fonts.monospace.fallback};`);
}

lines.push('}');
lines.push('');

const css = lines.join('\n');
writeFileSync(OUTPUT, css, 'utf-8');
console.log(`✓ Generated brand-theme.css (${css.split('\n').length} lines)`);
