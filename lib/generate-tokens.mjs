#!/usr/bin/env node
/**
 * generate-tokens.mjs — Generates design-tokens.css from _brand.yml
 *
 * Reads the brand configuration and produces a complete CSS custom properties
 * file that web projects can import for the full Playbook visual system.
 *
 * Output: visual-identity/design-tokens.css
 *
 * Usage:  node lib/generate-tokens.mjs
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadBrand } from './brand-config.mjs';

const brand = loadBrand();
const OUTPUT = join(brand.ROOT, 'visual-identity', 'design-tokens.css');

// ─── Palette → CSS variable name mapping ──────────────────────
// Converts YAML keys like "primary_light" to CSS names like "--pb-color-primary-light"

function paletteKeyToCss(key) {
  return `--pb-color-${key.replace(/_/g, '-')}`;
}

function semanticKeyToCss(key) {
  // Map semantic keys to shorter CSS names
  const map = {
    background: '--pb-bg',
    surface: '--pb-surface',
    text_primary: '--pb-text',
    text_secondary: '--pb-text-secondary',
    text_muted: '--pb-text-muted',
    link: '--pb-link',
    link_hover: '--pb-link-hover',
    border: '--pb-border',
    divider: '--pb-divider',
    cta_primary_bg: '--pb-cta-bg',
    cta_primary_text: '--pb-cta-text',
    cta_secondary_bg: '--pb-cta-secondary-bg',
    cta_secondary_text: '--pb-cta-secondary-text',
    quiz_correct: '--pb-quiz-correct',
    quiz_incorrect: '--pb-quiz-incorrect',
    feature_highlight: '--pb-feature-highlight',
    helpline_banner: '--pb-helpline-banner-bg',
  };
  return map[key] || `--pb-${key.replace(/_/g, '-')}`;
}

function semanticValueToCssRef(ref) {
  // Semantic values reference palette keys — produce var() references
  return `var(${paletteKeyToCss(ref)})`;
}

// ─── Scale key mapping ──────────────────────────────────────
function scaleKeyToCss(key) {
  const map = {
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
  return map[key] || `--pb-text-${key.replace(/_/g, '-')}`;
}

// ─── Build CSS ───────────────────────────────────────────────

const palette = brand.color?.palette || {};
const semantic = brand.color?.semantic || {};
const typo = brand.typography || {};
const fonts = typo.fonts || {};
const scale = typo.scale || {};
const lineHeights = typo.line_height || {};

const lines = [];

lines.push(`/* ============================================
   Playbook Design Tokens
   ============================================
   Auto-generated from _brand.yml — DO NOT EDIT MANUALLY.
   Run: node lib/generate-tokens.mjs

   Usage:
     color: var(--pb-color-primary);
     font-family: var(--pb-font-heading);
     font-size: var(--pb-text-h2);
   ============================================ */`);
lines.push('');
lines.push(':root {');

// ── Colors: Primary
lines.push('  /* ─── Colors: Primary ─────────────────── */');
for (const key of ['primary', 'primary_light', 'primary_dark']) {
  if (palette[key]) lines.push(`  ${paletteKeyToCss(key)}: ${palette[key]};`);
}
lines.push('');

// ── Colors: Secondary
lines.push('  /* ─── Colors: Secondary ───────────────── */');
for (const key of ['secondary', 'secondary_light', 'secondary_dark']) {
  if (palette[key]) lines.push(`  ${paletteKeyToCss(key)}: ${palette[key]};`);
}
lines.push('');

// ── Colors: Accent
lines.push('  /* ─── Colors: Accent ──────────────────── */');
for (const key of ['accent', 'accent_light', 'accent_dark']) {
  if (palette[key]) lines.push(`  ${paletteKeyToCss(key)}: ${palette[key]};`);
}
lines.push('');

// ── Colors: Neutrals
lines.push('  /* ─── Colors: Neutrals ────────────────── */');
for (const key of ['neutral_900', 'neutral_700', 'neutral_500', 'neutral_300', 'neutral_100', 'neutral_50', 'white', 'black']) {
  if (palette[key]) lines.push(`  ${paletteKeyToCss(key)}: ${palette[key]};`);
}
lines.push('');

// ── Colors: Semantic (functional)
lines.push('  /* ─── Colors: Semantic ────────────────── */');
for (const key of ['success', 'warning', 'danger', 'info']) {
  if (palette[key]) lines.push(`  ${paletteKeyToCss(key)}: ${palette[key]};`);
}
lines.push('');

// ── Colors: Functional mappings (via var references)
lines.push('  /* ─── Colors: Functional mappings ─────── */');
for (const [key, ref] of Object.entries(semantic)) {
  const cssName = semanticKeyToCss(key);
  const cssValue = semanticValueToCssRef(ref);
  lines.push(`  ${cssName}: ${cssValue};`);
}
// Add helpline banner text (always white — not in YAML, it's a UI constant)
lines.push('  --pb-helpline-banner-text: var(--pb-color-white);');
lines.push('');

// ── Typography: Families
lines.push('  /* ─── Typography: Families ────────────── */');
if (fonts.heading) lines.push(`  --pb-font-heading: '${fonts.heading.family}', ${fonts.heading.fallback};`);
if (fonts.body) lines.push(`  --pb-font-body: '${fonts.body.family}', ${fonts.body.fallback};`);
if (fonts.monospace) lines.push(`  --pb-font-mono: '${fonts.monospace.family}', ${fonts.monospace.fallback};`);
lines.push('');

// ── Typography: Scale
lines.push('  /* ─── Typography: Scale ───────────────── */');
for (const [key, value] of Object.entries(scale)) {
  const px = Math.round(value * 16);
  lines.push(`  ${scaleKeyToCss(key)}: ${value}rem;      /* ${px}px */`);
}
lines.push('');

// ── Typography: Weights (these are constants, not from YAML)
lines.push('  /* ─── Typography: Weights ─────────────── */');
lines.push('  --pb-weight-light: 300;');
lines.push('  --pb-weight-regular: 400;');
lines.push('  --pb-weight-medium: 500;');
lines.push('  --pb-weight-semibold: 600;');
lines.push('  --pb-weight-bold: 700;');
lines.push('  --pb-weight-extrabold: 800;');
lines.push('  --pb-weight-black: 900;');
lines.push('');

// ── Typography: Letter Spacing (UI constants)
lines.push('  /* ─── Typography: Letter Spacing ──────── */');
lines.push('  --pb-tracking-tight: -0.02em;');
lines.push('  --pb-tracking-normal: 0;');
lines.push('  --pb-tracking-wide: 0.05em;');
lines.push('  --pb-tracking-wider: 0.1em;');
lines.push('');

// ── Typography: Line Heights
lines.push('  /* ─── Typography: Line Heights ────────── */');
if (lineHeights.heading) lines.push(`  --pb-leading-heading: ${lineHeights.heading};`);
if (lineHeights.body) lines.push(`  --pb-leading-body: ${lineHeights.body};`);
if (lineHeights.tight) lines.push(`  --pb-leading-tight: ${lineHeights.tight};`);
lines.push('');

// ── Spacing (UI constants — not from YAML)
lines.push('  /* ─── Spacing ─────────────────────────── */');
const spaces = [
  [1, '0.25rem', '4px'], [2, '0.5rem', '8px'], [3, '0.75rem', '12px'],
  [4, '1rem', '16px'], [6, '1.5rem', '24px'], [8, '2rem', '32px'],
  [12, '3rem', '48px'], [16, '4rem', '64px'], [24, '6rem', '96px'],
];
for (const [n, rem, px] of spaces) {
  lines.push(`  --pb-space-${n}: ${rem};   /* ${px} */`);
}
lines.push('');

// ── Borders (UI constants)
lines.push('  /* ─── Borders ─────────────────────────── */');
lines.push('  --pb-radius-sm: 4px;');
lines.push('  --pb-radius-md: 8px;');
lines.push('  --pb-radius-lg: 12px;');
lines.push('  --pb-radius-full: 9999px;');
lines.push('  --pb-border-width: 1px;');
lines.push('');

// ── Shadows (UI constants)
lines.push('  /* ─── Shadows ─────────────────────────── */');
lines.push('  --pb-shadow-sm: 0 1px 2px rgba(26, 26, 46, 0.06);');
lines.push('  --pb-shadow-md: 0 4px 12px rgba(26, 26, 46, 0.08);');
lines.push('  --pb-shadow-lg: 0 8px 24px rgba(26, 26, 46, 0.12);');
lines.push('');

// ── Touch targets (UI constants)
lines.push('  /* ─── Touch targets ───────────────────── */');
lines.push('  --pb-touch-min: 44px;');
lines.push('  --pb-touch-critical: 48px;');
lines.push('');

// ── Breakpoints (reference only)
lines.push('  /* ─── Breakpoints (reference only) ────── */');
lines.push('  /* --pb-bp-mobile: 768px;  */');
lines.push('  /* --pb-bp-tablet: 1024px; */');
lines.push('  /* --pb-bp-desktop: 1280px; */');
lines.push('');

// ── Transitions (UI constants)
lines.push('  /* ─── Transitions ─────────────────────── */');
lines.push('  --pb-transition-fast: 150ms ease;');
lines.push('  --pb-transition-base: 250ms ease;');
lines.push('}');
lines.push('');

// ── Dark mode adaptation
lines.push('/* ─── Dark mode adaptation ──────────────── */');
lines.push('@media (prefers-color-scheme: dark) {');
lines.push('  :root {');
lines.push('    --pb-bg: var(--pb-color-neutral-900);');
lines.push('    --pb-surface: var(--pb-color-neutral-700);');
lines.push('    --pb-text: var(--pb-color-neutral-50);');
lines.push('    --pb-text-secondary: var(--pb-color-neutral-100);');
lines.push('    --pb-text-muted: var(--pb-color-neutral-300);');
lines.push('    --pb-border: var(--pb-color-neutral-500);');
lines.push('    --pb-divider: var(--pb-color-neutral-700);');
lines.push('  }');
lines.push('}');
lines.push('');

const css = lines.join('\n');
writeFileSync(OUTPUT, css, 'utf-8');
console.log(`✓ Generated design-tokens.css (${css.split('\n').length} lines)`);
