#!/usr/bin/env node
/**
 * generate-inject-css.mjs — Generates brand-inject.css for HTML templates
 *
 * Creates a lightweight CSS file with just the color and font variables
 * that collateral HTML templates need. Templates link to this file instead
 * of hardcoding hex values.
 *
 * Output: collateral/render/brand-inject.css
 *
 * Usage:  node lib/generate-inject-css.mjs
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadBrand } from './brand-config.mjs';

const brand = loadBrand();
const OUTPUT = join(brand.ROOT, 'collateral', 'render', 'brand-inject.css');

const palette = brand.color?.palette || {};
const fonts = brand.typography?.fonts || {};

const lines = [];

lines.push('/* brand-inject.css — Auto-generated from _brand.yml */');
lines.push('/* Run: node lib/generate-inject-css.mjs */');
lines.push('');
lines.push(':root {');

// Colors
lines.push('  /* ─── Colors ───────────────────────── */');
for (const [key, hex] of Object.entries(palette)) {
  const cssName = `--pb-color-${key.replace(/_/g, '-')}`;
  lines.push(`  ${cssName}: ${hex};`);
}
lines.push('');

// Fonts
lines.push('  /* ─── Fonts ────────────────────────── */');
if (fonts.heading) {
  lines.push(`  --pb-font-heading: '${fonts.heading.family}', ${fonts.heading.fallback};`);
}
if (fonts.body) {
  lines.push(`  --pb-font-body: '${fonts.body.family}', ${fonts.body.fallback};`);
}
if (fonts.monospace) {
  lines.push(`  --pb-font-mono: '${fonts.monospace.family}', ${fonts.monospace.fallback};`);
}

lines.push('}');
lines.push('');

const css = lines.join('\n');
writeFileSync(OUTPUT, css, 'utf-8');
console.log(`✓ Generated brand-inject.css (${css.split('\n').length} lines)`);
