#!/usr/bin/env node
/**
 * build-logos.mjs — Playbook Logo Generator
 *
 * Generates all logo variants as SVG files:
 *   B1 (stacked) × 5 color modes
 *   B2 (horizontal) × 5 color modes
 *   Helpline badge × 2
 *   Favicon (stacked compact)
 *
 * Font: Inter (must be installed or loaded via CSS for rendering).
 * For production distribution, convert text to outlines in your design tool.
 *
 * Usage:  node collateral/render/build-logos.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const LOGO_DIR = join(ROOT, 'visual-identity', 'logo');
const PRIMARY = join(LOGO_DIR, 'primary');
const SECONDARY = join(LOGO_DIR, 'secondary');
const FAVICON_DIR = join(LOGO_DIR, 'favicon');
const HELPLINE_DIR = join(LOGO_DIR, 'helpline-badge');

[PRIMARY, SECONDARY, FAVICON_DIR, HELPLINE_DIR].forEach(d => mkdirSync(d, { recursive: true }));

/* ─── Brand colors ──────────────────────────────────────────────── */

const C = {
  navy:       '#1B2838',
  tealDark:   '#00A888',
  teal:       '#00D4AA',
  white:      '#FFFFFF',
  neutral300: '#A8A8C0',
  neutral500: '#6B6B8A',
};

/* ─── SVG builder helpers ───────────────────────────────────────── */

function svgWrap(width, height, content, bg = null) {
  const bgRect = bg ? `<rect width="${width}" height="${height}" fill="${bg}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;800');
  </style>
  ${bgRect}
  ${content}
</svg>
`;
}

/* ─── B1 Stacked ────────────────────────────────────────────────── */
// Play: Inter 800, ~44px equivalent → 42pt in SVG
// BOOK: Inter 300, ~23px uppercase spaced → 22pt in SVG

function stacked(playColor, bookColor, bg = null) {
  const w = 160;
  const h = 80;
  const cx = w / 2;
  const content = `
  <text x="${cx}" y="42" text-anchor="middle"
        font-family="'Inter', sans-serif" font-weight="800" font-size="44"
        letter-spacing="-1.3" fill="${playColor}">Play</text>
  <text x="${cx}" y="68" text-anchor="middle"
        font-family="'Inter', sans-serif" font-weight="300" font-size="22"
        letter-spacing="3.3" fill="${bookColor}">BOOK</text>`;
  return svgWrap(w, h, content, bg);
}

/* ─── B2 Horizontal ─────────────────────────────────────────────── */
// Playbook as one word, Play 800 + book 300, same size

function horizontal(playColor, bookColor, bg = null) {
  const w = 280;
  const h = 56;
  const content = `
  <text y="40" font-family="'Inter', sans-serif" font-size="44" letter-spacing="-1.3">
    <tspan font-weight="800" fill="${playColor}">Play</tspan><tspan font-weight="300" letter-spacing="0.9" fill="${bookColor}">book</tspan>
  </text>`;
  return svgWrap(w, h, content, bg);
}

/* ─── Helpline badge ────────────────────────────────────────────── */

function helplineBadge(playColor, bookColor, dividerColor, labelColor, numberColor, bg = null) {
  const w = 320;
  const h = 48;
  const content = `
  <text y="22" font-family="'Inter', sans-serif" font-size="22" letter-spacing="-0.7">
    <tspan font-weight="800" fill="${playColor}">Play</tspan><tspan font-weight="300" letter-spacing="0.4" fill="${bookColor}">book</tspan>
  </text>
  <line x1="128" y1="6" x2="128" y2="42" stroke="${dividerColor}" stroke-width="1.5" stroke-linecap="round"/>
  <text x="140" y="20" font-family="'Inter', sans-serif" font-weight="400" font-size="11" fill="${labelColor}">Free help 24/7</text>
  <text x="140" y="36" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="${numberColor}">1-800-522-4700</text>`;
  return svgWrap(w, h, content, bg);
}

/* ─── Favicon ───────────────────────────────────────────────────── */

function favicon(playColor, bookColor, bg = null) {
  const s = 64;
  const cx = s / 2;
  const content = `
  <text x="${cx}" y="34" text-anchor="middle"
        font-family="'Inter', sans-serif" font-weight="800" font-size="28"
        letter-spacing="-0.8" fill="${playColor}">Play</text>
  <text x="${cx}" y="52" text-anchor="middle"
        font-family="'Inter', sans-serif" font-weight="300" font-size="14"
        letter-spacing="2.1" fill="${bookColor}">BOOK</text>`;
  return svgWrap(s, s, content, bg);
}

/* ─── Generate all variants ─────────────────────────────────────── */

const files = [];

function write(dir, name, content) {
  const path = join(dir, name);
  writeFileSync(path, content, 'utf-8');
  files.push(path.replace(ROOT + '/', ''));
}

// ── Primary (full-color, default use) ──

write(PRIMARY, 'logo-stacked-full-color.svg',
  stacked(C.navy, C.navy));

write(PRIMARY, 'logo-stacked-on-light.svg',
  stacked(C.navy, C.tealDark));

write(PRIMARY, 'logo-horizontal-full-color.svg',
  horizontal(C.navy, C.navy));

write(PRIMARY, 'logo-horizontal-on-light.svg',
  horizontal(C.navy, C.tealDark));

// ── Secondary (reversed, monochrome, special backgrounds) ──

write(SECONDARY, 'logo-stacked-reversed.svg',
  stacked(C.white, C.teal, C.navy));

write(SECONDARY, 'logo-stacked-mono-white.svg',
  stacked(C.white, C.neutral300, '#111111'));

write(SECONDARY, 'logo-stacked-mono-dark.svg',
  stacked(C.navy, C.navy));

write(SECONDARY, 'logo-horizontal-reversed.svg',
  horizontal(C.white, C.teal, C.navy));

write(SECONDARY, 'logo-horizontal-mono-white.svg',
  horizontal(C.white, C.neutral300, '#111111'));

write(SECONDARY, 'logo-horizontal-mono-dark.svg',
  horizontal(C.navy, C.navy));

// ── Helpline badges ──

write(HELPLINE_DIR, 'helpline-badge-light.svg',
  helplineBadge(C.navy, C.navy, C.teal, C.neutral500, C.navy));

write(HELPLINE_DIR, 'helpline-badge-dark.svg',
  helplineBadge(C.white, C.teal, C.teal, 'rgba(255,255,255,0.6)', C.white, C.navy));

// ── Favicon ──

write(FAVICON_DIR, 'favicon.svg',
  favicon(C.navy, C.navy));

write(FAVICON_DIR, 'favicon-reversed.svg',
  favicon(C.white, C.teal, C.navy));

write(FAVICON_DIR, 'favicon-mono-white.svg',
  favicon(C.white, C.neutral300, '#111111'));

/* ─── Summary ───────────────────────────────────────────────────── */

console.log(`✓ Generated ${files.length} logo files:\n`);
console.log('  Primary (full-color, default use):');
files.filter(f => f.includes('/primary/')).forEach(f => console.log(`    ${f}`));
console.log('\n  Secondary (reversed, monochrome):');
files.filter(f => f.includes('/secondary/')).forEach(f => console.log(`    ${f}`));
console.log('\n  Helpline badge:');
files.filter(f => f.includes('/helpline-badge/')).forEach(f => console.log(`    ${f}`));
console.log('\n  Favicon:');
files.filter(f => f.includes('/favicon/')).forEach(f => console.log(`    ${f}`));
console.log(`\nTotal: ${files.length} files`);
console.log('\nNote: SVGs use Inter via Google Fonts @import. For production');
console.log('distribution, convert text to outlines in your design tool.');
