#!/usr/bin/env node
/**
 * validate-brand.mjs — Validates _brand.yml configuration
 *
 * Checks that all required fields are present, hex colors are valid,
 * semantic color references resolve correctly, and fonts are defined.
 *
 * Usage:  node lib/validate-brand.mjs
 * Exit code: 0 = valid, 1 = errors found
 */

import { loadBrand } from './brand-config.mjs';

let errors = 0;
let warnings = 0;

function error(msg) { console.error(`  ✗ ${msg}`); errors++; }
function warn(msg) { console.warn(`  ⚠ ${msg}`); warnings++; }
function ok(msg) { console.log(`  ✓ ${msg}`); }

console.log('Validating _brand.yml...\n');

const brand = loadBrand();

// ─── Meta ──────────────────────────────────────────────────
console.log('Meta:');
if (!brand.meta?.program_name) error('meta.program_name is required');
else ok(`program_name: "${brand.meta.program_name}"`);

if (!brand.meta?.organization) warn('meta.organization is "Your Company Name" — update for your brand');
else if (brand.meta.organization === 'Your Company Name') warn('meta.organization is still default');
else ok(`organization: "${brand.meta.organization}"`);

if (!brand.meta?.license) warn('meta.license not set');
else ok(`license: ${brand.meta.license}`);

// ─── Color Palette ──────────────────────────────────────────
console.log('\nColor palette:');
const palette = brand.color?.palette || {};
const requiredColors = ['primary', 'secondary', 'accent', 'neutral_900', 'neutral_50', 'white'];
const hexRegex = /^#[0-9A-Fa-f]{6}$/;

for (const key of requiredColors) {
  if (!palette[key]) {
    error(`color.palette.${key} is required`);
  } else if (!hexRegex.test(palette[key])) {
    error(`color.palette.${key} = "${palette[key]}" is not a valid hex color`);
  } else {
    ok(`${key}: ${palette[key]}`);
  }
}

// Check all palette values are valid hex
const totalColors = Object.entries(palette).length;
const validColors = Object.entries(palette).filter(([, v]) => hexRegex.test(v)).length;
if (validColors === totalColors) {
  ok(`All ${totalColors} palette colors are valid hex`);
} else {
  error(`${totalColors - validColors} palette colors have invalid hex format`);
}

// ─── Color Aliases ──────────────────────────────────────────
console.log('\nColor aliases:');
const aliases = brand.color?.aliases || {};
const aliasCount = Object.entries(aliases).length;
let brokenAliases = 0;

for (const [alias, paletteKey] of Object.entries(aliases)) {
  if (!palette[paletteKey]) {
    error(`alias "${alias}" → "${paletteKey}" doesn't exist in palette`);
    brokenAliases++;
  }
}

if (brokenAliases === 0) {
  ok(`All ${aliasCount} aliases resolve correctly`);
}

// ─── Semantic Colors ────────────────────────────────────────
console.log('\nSemantic colors:');
const semantic = brand.color?.semantic || {};
let brokenRefs = 0;

for (const [key, ref] of Object.entries(semantic)) {
  if (!palette[ref]) {
    error(`semantic.${key} → "${ref}" doesn't exist in palette`);
    brokenRefs++;
  }
}

if (brokenRefs === 0) {
  ok(`All ${Object.entries(semantic).length} semantic references resolve correctly`);
}

// ─── Typography ──────────────────────────────────────────────
console.log('\nTypography:');
const fonts = brand.typography?.fonts || {};
const requiredFonts = ['heading', 'body'];

for (const role of requiredFonts) {
  if (!fonts[role]) {
    error(`typography.fonts.${role} is required`);
  } else if (!fonts[role].family) {
    error(`typography.fonts.${role}.family is required`);
  } else {
    ok(`${role}: "${fonts[role].family}"`);
  }
}

const scale = brand.typography?.scale || {};
if (Object.entries(scale).length === 0) {
  warn('typography.scale is empty');
} else {
  ok(`Type scale: ${Object.entries(scale).length} sizes defined`);
}

// ─── Helplines ───────────────────────────────────────────────
console.log('\nHelplines:');
const helplines = brand.helplines || {};
if (!helplines.default && !helplines['united-states']) {
  warn('No helpline configured (neither default nor united-states)');
} else {
  const hl = brand.helpline();
  if (hl.number) ok(`Default helpline: ${hl.number}`);
  else warn('Default helpline has no phone number');
}

// ─── Brand Pillars ───────────────────────────────────────────
console.log('\nBrand pillars:');
const pillars = brand.brand_pillars || [];
if (pillars.length < 2) {
  warn(`Only ${pillars.length} pillar(s) defined (expected 2)`);
} else {
  ok(`${pillars.length} pillars: ${pillars.map(p => p.name).join(', ')}`);
}

// ─── Messaging ───────────────────────────────────────────────
console.log('\nMessaging:');
const taglines = brand.messaging?.taglines || {};
const taglineCount = Object.values(taglines).flat().length;
if (taglineCount === 0) {
  warn('No taglines defined');
} else {
  ok(`${taglineCount} taglines across ${Object.keys(taglines).length} categories`);
}

// ─── Summary ─────────────────────────────────────────────────
console.log(`\n${'─'.repeat(50)}`);
if (errors === 0 && warnings === 0) {
  console.log('✓ Brand configuration is valid!');
} else if (errors === 0) {
  console.log(`✓ Valid with ${warnings} warning(s)`);
} else {
  console.log(`✗ ${errors} error(s), ${warnings} warning(s)`);
}

process.exit(errors > 0 ? 1 : 0);
