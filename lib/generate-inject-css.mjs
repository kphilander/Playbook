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
const scale = brand.typography?.scale || {};
const lineHeights = brand.typography?.line_height || {};

const scaleKeyMap = {
  display: '--pb-text-display',
  h1: '--pb-text-h1',
  h2: '--pb-text-h2',
  h3: '--pb-text-h3',
  h4: '--pb-text-h4',
  body_large: '--pb-text-body-lg',
  body: '--pb-text-body',
  small: '--pb-text-small',
  caption: '--pb-text-caption',
};

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
lines.push('');

// Type scale
lines.push('  /* ─── Type Scale ───────────────────── */');
for (const [key, value] of Object.entries(scale)) {
  const cssName = scaleKeyMap[key] || `--pb-text-${key.replace(/_/g, '-')}`;
  lines.push(`  ${cssName}: ${value}rem;`);
}
lines.push('');

// Line heights
lines.push('  /* ─── Line Heights ─────────────────── */');
if (lineHeights.heading) lines.push(`  --pb-leading-heading: ${lineHeights.heading};`);
if (lineHeights.body) lines.push(`  --pb-leading-body: ${lineHeights.body};`);
if (lineHeights.tight) lines.push(`  --pb-leading-tight: ${lineHeights.tight};`);
lines.push('');

// Template text scale — derived from body font scale ratio vs default (1.0rem)
const bodyScale = scale.body || 1.0;
const templateTextScale = Math.round((bodyScale / 1.0) * 10000) / 10000;
lines.push('  /* ─── Template Scale ────────────────── */');
lines.push(`  --pb-template-text-scale: ${templateTextScale};`);

lines.push('}');
lines.push('');

const css = lines.join('\n');
writeFileSync(OUTPUT, css, 'utf-8');
console.log(`✓ Generated brand-inject.css (${css.split('\n').length} lines)`);
