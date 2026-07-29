#!/usr/bin/env node
/**
 * build-logos.mjs — Playbook Logo Generator
 *
 * Generates the full logo system from _brand.yml:
 *
 *   Symbol mark (book + play in tile)    × 5 color modes
 *   Horizontal lockup (wordmark)         × 5 color modes
 *   Stacked lockup (symbol + wordmark)   × 5 color modes
 *   Helpline badge                       × 2
 *   Favicon: SVG (theme-aware) + PNG 16/32/48 + favicon.ico
 *            + apple-touch-icon 180 + PWA icons 192/512
 *
 * All wordmark text is converted to Inter vector outlines at build time
 * (via fontkit + the vendored variable font), so the emitted SVGs have
 * ZERO font dependencies — they render identically in <img> embeds,
 * GitHub READMEs, CMSes, and email clients where external fonts are blocked.
 *
 * Font resolution order:
 *   1. visual-identity/typography/fonts/Inter-Variable.ttf  (vendored)
 *   2. ~/Library/Fonts/Inter-Variable.ttf
 *   3. /Library/Fonts/Inter-Variable.ttf
 *
 * Usage:  node collateral/render/build-logos.mjs [--skip-raster]
 *         --skip-raster  skip Puppeteer PNG/ICO rendering (SVGs only)
 */

import { writeFileSync, mkdirSync, readdirSync, unlinkSync, existsSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import * as fontkit from 'fontkit';
import { loadBrand } from '../../lib/brand-config.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const brand = loadBrand();
const ROOT = brand.ROOT;
const LOGO_DIR = join(ROOT, 'visual-identity', 'logo');
const PRIMARY = join(LOGO_DIR, 'primary');
const SECONDARY = join(LOGO_DIR, 'secondary');
const FAVICON_DIR = join(LOGO_DIR, 'favicon');
const HELPLINE_DIR = join(LOGO_DIR, 'helpline-badge');
const SYMBOL_DIR = join(LOGO_DIR, 'symbol');
const SKIP_RASTER = process.argv.includes('--skip-raster');

[PRIMARY, SECONDARY, FAVICON_DIR, HELPLINE_DIR, SYMBOL_DIR].forEach(d => mkdirSync(d, { recursive: true }));

/* ─── Brand config ──────────────────────────────────────────────── */

const C = brand.colorsHex();
const hl = brand.helpline();
const logoCfg = brand.logo || {};

// Wordmark split — the weight-contrast duality. Forks set these in _brand.yml
// under logo:; an empty light_text renders the whole name in the bold weight.
const BOLD_TEXT = logoCfg.wordmark_bold_text ?? 'Play';
const LIGHT_TEXT = logoCfg.wordmark_light_text ?? 'book';
const BOLD_WGHT = logoCfg.play_weight ?? 800;
const LIGHT_WGHT = logoCfg.book_weight ?? 400;

/* ─── Font loading ──────────────────────────────────────────────── */

const FONT_CANDIDATES = [
  join(ROOT, 'visual-identity', 'typography', 'fonts', 'Inter-Variable.ttf'),
  join(homedir(), 'Library', 'Fonts', 'Inter-Variable.ttf'),
  '/Library/Fonts/Inter-Variable.ttf',
];
const fontPath = FONT_CANDIDATES.find(p => existsSync(p));
if (!fontPath) {
  console.error('✗ Inter-Variable.ttf not found. Expected at one of:');
  FONT_CANDIDATES.forEach(p => console.error(`    ${p}`));
  console.error('  Download from https://rsms.me/inter/ (OFL licensed) and place the');
  console.error('  variable TTF at visual-identity/typography/fonts/Inter-Variable.ttf');
  process.exit(1);
}
const font = fontkit.openSync(fontPath);
const UPM = font.unitsPerEm;

/* ─── Geometry helpers ──────────────────────────────────────────── */

const r2 = n => Math.round(n * 100) / 100;

/**
 * Convert a text run to a single SVG path string using Inter outlines.
 * tracking is in 1/1000 em. opsz 32 = Inter Display optical size.
 * glyphHook may rewrite a glyph's font-unit commands (see playCounterHook).
 */
function textToPath(text, { weight, size, opsz = 32, tracking = 0, x = 0, baseline = 0, glyphHook = null }) {
  const inst = font.getVariation({ wght: weight, opsz });
  const run = inst.layout(text);
  const scale = size / UPM;
  const L = { moveTo: 'M', lineTo: 'L', quadraticCurveTo: 'Q', bezierCurveTo: 'C', closePath: 'Z' };
  let penX = x;
  let d = '';
  const bb = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  run.glyphs.forEach((glyph, i) => {
    const pos = run.positions[i];
    const gx = penX + pos.xOffset * scale;
    const gy = baseline - pos.yOffset * scale;
    let commands = glyph.path.commands;
    if (glyphHook) commands = glyphHook(glyph, i, commands) || commands;
    for (const cmd of commands) {
      const args = [];
      for (let j = 0; j < cmd.args.length; j += 2) {
        const px = gx + cmd.args[j] * scale;
        const py = gy - cmd.args[j + 1] * scale;
        args.push(r2(px), r2(py));
        if (px < bb.minX) bb.minX = px;
        if (px > bb.maxX) bb.maxX = px;
        if (py < bb.minY) bb.minY = py;
        if (py > bb.maxY) bb.maxY = py;
      }
      d += L[cmd.command] + args.join(' ');
    }
    penX += pos.xAdvance * scale + (tracking * size) / 1000;
  });
  return { d, width: penX - x - (tracking * size) / 1000, bb };
}

/* ─── Play-counter surgery ──────────────────────────────────────── */
// The signature detail: the counter (hole) of the wordmark's "P" is
// replaced with a play triangle — the same negative-space cut as the
// symbol's punched play. Applies to the first "P" glyph; disable with
// logo.play_counter: false in _brand.yml.

function splitContours(commands) {
  const contours = [];
  let cur = [];
  for (const c of commands) {
    cur.push(c);
    if (c.command === 'closePath') { contours.push(cur); cur = []; }
  }
  if (cur.length) contours.push(cur);
  return contours;
}

function contourInfo(contour) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  let area = 0, prev = null, first = null;
  for (const c of contour) {
    for (let j = 0; j < c.args.length; j += 2) {
      minX = Math.min(minX, c.args[j]); maxX = Math.max(maxX, c.args[j]);
      minY = Math.min(minY, c.args[j + 1]); maxY = Math.max(maxY, c.args[j + 1]);
    }
    if (c.args.length >= 2) {
      const end = [c.args[c.args.length - 2], c.args[c.args.length - 1]];
      if (prev) area += (prev[0] * end[1] - end[0] * prev[1]) / 2;
      else first = end;
      prev = end;
    }
  }
  if (prev && first) area += (prev[0] * first[1] - first[0] * prev[1]) / 2;
  return { minX, minY, maxX, maxY, area };
}

/** roundedPoly emitting fontkit-style commands (font units, y-up). */
function roundedPolyCmds(pts, radius) {
  const n = pts.length;
  const seg = [];
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n];
    const v1 = [p0[0] - p1[0], p0[1] - p1[1]], v2 = [p2[0] - p1[0], p2[1] - p1[1]];
    const l1 = Math.hypot(...v1), l2 = Math.hypot(...v2);
    const u1 = [v1[0] / l1, v1[1] / l1], u2 = [v2[0] / l2, v2[1] / l2];
    const ang = Math.acos(Math.max(-1, Math.min(1, u1[0] * u2[0] + u1[1] * u2[1])));
    const t = Math.min(radius / Math.tan(ang / 2), l1 / 2.2, l2 / 2.2);
    seg.push({ a: [p1[0] + u1[0] * t, p1[1] + u1[1] * t], p: p1, b: [p1[0] + u2[0] * t, p1[1] + u2[1] * t] });
  }
  const cmds = [{ command: 'moveTo', args: [seg[0].b[0], seg[0].b[1]] }];
  for (let i = 1; i <= n; i++) {
    const s = seg[i % n];
    cmds.push({ command: 'lineTo', args: [s.a[0], s.a[1]] });
    cmds.push({ command: 'quadraticCurveTo', args: [s.p[0], s.p[1], s.b[0], s.b[1]] });
  }
  cmds.push({ command: 'closePath', args: [] });
  return cmds;
}

function makePlayCounterHook() {
  let done = false;
  return (glyph, i, commands) => {
    if (done) return commands;
    const ch = String.fromCodePoint(...(glyph.codePoints || []));
    if (ch !== 'P') return commands;
    const contours = splitContours(commands);
    if (contours.length < 2) return commands;
    const infos = contours.map(contourInfo);
    let counterIdx = 0, best = Infinity;
    infos.forEach((inf, idx) => {
      const size = (inf.maxX - inf.minX) * (inf.maxY - inf.minY);
      if (size < best) { best = size; counterIdx = idx; }
    });
    const inf = infos[counterIdx];
    const outerArea = infos[(counterIdx + 1) % infos.length].area;
    const midY = (inf.minY + inf.maxY) / 2;
    const pts = [[inf.minX, inf.maxY], [inf.maxX, midY], [inf.minX, inf.minY]];
    const triArea = ((pts[1][0] - pts[0][0]) * (pts[2][1] - pts[0][1]) - (pts[2][0] - pts[0][0]) * (pts[1][1] - pts[0][1])) / 2;
    const wantPositive = outerArea < 0;
    const ordered = (triArea > 0) === wantPositive ? pts : [...pts].reverse();
    const tri = roundedPolyCmds(ordered, 70);
    const out = [];
    contours.forEach((c, idx) => { if (idx !== counterIdx) out.push(...c); });
    out.push(...tri);
    done = true;
    return out;
  };
}

const SURGERY = logoCfg.play_counter !== false;

/** Closed polygon with per-vertex corner rounding (quadratic joins). */
function roundedPoly(pts, radii) {
  const n = pts.length;
  const R = Array.isArray(radii) ? radii : pts.map(() => radii);
  const seg = [];
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n];
    const v1 = [p0[0] - p1[0], p0[1] - p1[1]];
    const v2 = [p2[0] - p1[0], p2[1] - p1[1]];
    const l1 = Math.hypot(...v1), l2 = Math.hypot(...v2);
    const u1 = [v1[0] / l1, v1[1] / l1], u2 = [v2[0] / l2, v2[1] / l2];
    const angle = Math.acos(Math.max(-1, Math.min(1, u1[0] * u2[0] + u1[1] * u2[1])));
    const t = Math.min(R[i] / Math.tan(angle / 2), l1 / 2.2, l2 / 2.2);
    seg.push({
      a: [p1[0] + u1[0] * t, p1[1] + u1[1] * t],
      p: p1,
      b: [p1[0] + u2[0] * t, p1[1] + u2[1] * t],
    });
  }
  let d = `M${r2(seg[0].b[0])} ${r2(seg[0].b[1])}`;
  for (let i = 1; i <= n; i++) {
    const s = seg[i % n];
    d += `L${r2(s.a[0])} ${r2(s.a[1])}Q${r2(s.p[0])} ${r2(s.p[1])} ${r2(s.b[0])} ${r2(s.b[1])}`;
  }
  return d + 'Z';
}

/* ─── Symbol mark — closed book + play triangle ─────────────────── */
// The Playbook Academy mark: a closed-book bar (left page/spine) beside
// a play triangle, usually inside a rounded navy tile. Two flat shapes,
// legible from 16px favicons to 512px app icons.
// 64×64 grid: bar 14,14 16×36 r2 · triangle (34,14)(54,32)(34,50).

const MARK = {
  bar: { x: 14, y: 14, w: 16, h: 36, rx: 2 },
  tri: '34,14 54,32 34,50',
};

function markPaths(barColor, triColor) {
  const b = MARK.bar;
  return `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="${b.rx}" fill="${barColor}"/><polygon points="${MARK.tri}" fill="${triColor}"/>`;
}

/**
 * Standalone symbol SVG.
 *   barColor / triColor  the two mark shapes
 *   bg / bgRx            optional tile behind the mark (rx 14 = brand tile)
 */
function symbolSVG(barColor, triColor, { bg = null, bgRx = 14 } = {}) {
  const bgRect = bg ? `<rect width="64" height="64" rx="${bgRx}" fill="${bg}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">${bgRect}${markPaths(barColor, triColor)}</svg>\n`;
}

/* ─── Wordmark — weight-contrast duality, outlined ──────────────── */

const WM = { size: 44, trackBold: -18, trackLight: -12, gapEm: 0.045, pad: 6 };

/** Layout the two wordmark runs once; recolor per variant. */
function wordmarkRuns() {
  const bold = textToPath(BOLD_TEXT, {
    weight: BOLD_WGHT, size: WM.size, tracking: WM.trackBold,
    glyphHook: SURGERY ? makePlayCounterHook() : null,
  });
  const parts = [{ role: 'bold', ...bold, dx: 0 }];
  let bb = { ...bold.bb };
  if (LIGHT_TEXT) {
    const dx = bold.width + WM.gapEm * WM.size;
    const light = textToPath(LIGHT_TEXT, { weight: LIGHT_WGHT, size: WM.size, tracking: WM.trackLight });
    parts.push({ role: 'light', ...light, dx });
    bb = {
      minX: Math.min(bb.minX, light.bb.minX + dx),
      maxX: Math.max(bb.maxX, light.bb.maxX + dx),
      minY: Math.min(bb.minY, light.bb.minY),
      maxY: Math.max(bb.maxY, light.bb.maxY),
    };
  }
  return { parts, bb };
}

const WORDMARK = wordmarkRuns();

function wordmarkSVG(boldColor, lightColor, bg = null) {
  const { parts, bb } = WORDMARK;
  const w = r2(bb.maxX - bb.minX + WM.pad * 2);
  const h = r2(bb.maxY - bb.minY + WM.pad * 2);
  const ox = WM.pad - bb.minX, oy = WM.pad - bb.minY;
  const bgRect = bg ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : '';
  const paths = parts.map(p =>
    `<path transform="translate(${r2(p.dx + ox)} ${r2(oy)})" d="${p.d}" fill="${p.role === 'bold' ? boldColor : lightColor}"/>`
  ).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${bgRect}${paths}</svg>\n`;
}

/* ─── Stacked lockup — symbol above wordmark ────────────────────── */

function stackedSVG(tileBg, barColor, triColor, boldColor, lightColor, bg = null) {
  const { parts, bb } = WORDMARK;
  const wmW = bb.maxX - bb.minX;
  const wmH = bb.maxY - bb.minY;
  const tileVis = 48;           // display size of the 64-unit tile
  const scale = tileVis / 64;
  const gap = 10;
  const pad = 8;
  const w = r2(wmW + pad * 2);
  const h = r2(tileVis + gap + wmH + pad * 2);
  const bgRect = bg ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : '';
  const tile = tileBg ? `<rect width="64" height="64" rx="14" fill="${tileBg}"/>` : '';
  const gx = r2((w - tileVis) / 2);
  const sym = `<g transform="translate(${gx} ${pad}) scale(${r2(scale)})">${tile}${markPaths(barColor, triColor)}</g>`;
  const oy = pad + tileVis + gap - bb.minY;
  const ox = pad - bb.minX;
  const wm = parts.map(p =>
    `<path transform="translate(${r2(p.dx + ox)} ${r2(oy)})" d="${p.d}" fill="${p.role === 'bold' ? boldColor : lightColor}"/>`
  ).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${bgRect}${sym}${wm}</svg>\n`;
}

/* ─── Helpline badge — wordmark | divider | support info ────────── */

function helplineBadgeSVG(boldColor, lightColor, dividerColor, labelColor, numberColor, bg = null) {
  const h = 48;
  const size = 22;
  const scale = size / WM.size;
  const { parts, bb } = WORDMARK;
  const wmW = (bb.maxX - bb.minX) * scale;
  const padX = 16, gap = 12;

  const label = textToPath('Free help 24/7', { weight: 400, size: 11, opsz: 14 });
  const number = textToPath(hl.number || '1-800-522-4700', { weight: 700, size: 13.5, opsz: 14 });

  const dividerX = r2(padX + wmW + gap);
  const textX = r2(dividerX + gap);
  const w = r2(textX + Math.max(label.width, number.width) + padX);

  const bgRect = bg ? `<rect width="${w}" height="${h}" rx="8" fill="${bg}"/>` : '';
  // wordmark vertically centered: cap-height block sits around baseline
  const wmOy = r2((h - (bb.maxY - bb.minY) * scale) / 2 - bb.minY * scale);
  const wm = parts.map(p =>
    `<g transform="translate(${r2(padX - bb.minX * scale)} ${wmOy}) scale(${r2(scale)})"><path transform="translate(${r2(p.dx)} 0)" d="${p.d}" fill="${p.role === 'bold' ? boldColor : lightColor}"/></g>`
  ).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${bgRect}${wm}
  <line x1="${dividerX}" y1="8" x2="${dividerX}" y2="40" stroke="${dividerColor}" stroke-width="1.5" stroke-linecap="round"/>
  <path transform="translate(${textX} 20)" d="${label.d}" fill="${labelColor}"/>
  <path transform="translate(${textX} 37)" d="${number.d}" fill="${numberColor}"/>
</svg>\n`;
}

/* ─── Favicon / app-icon rasters ────────────────────────────────── */

// The brand tile IS the favicon: rounded navy tile, white bar, teal play
// (identical to the Playbook Academy favicon).
function faviconSVG() {
  return symbolSVG(C.white, C.teal, { bg: C.navy, bgRx: 14 });
}

// Square full-bleed icon for apple-touch / PWA (the OS applies its own mask).
function appIconSVG() {
  return symbolSVG(C.white, C.teal, { bg: C.navy, bgRx: 0 });
}

/** Pack PNG buffers into a .ico container (PNG-in-ICO, valid for 16–256 px). */
function packIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);
  const dirs = [];
  let offset = 6 + 16 * entries.length;
  for (const e of entries) {
    const d = Buffer.alloc(16);
    d.writeUInt8(e.size === 256 ? 0 : e.size, 0);
    d.writeUInt8(e.size === 256 ? 0 : e.size, 1);
    d.writeUInt16LE(1, 4);   // color planes
    d.writeUInt16LE(32, 6);  // bits per pixel
    d.writeUInt32LE(e.buf.length, 8);
    d.writeUInt32LE(offset, 12);
    offset += e.buf.length;
    dirs.push(d);
  }
  return Buffer.concat([header, ...dirs, ...entries.map(e => e.buf)]);
}

async function renderRasters() {
  const { default: puppeteer } = await import('puppeteer');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  async function shot(svg, size) {
    await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
    const sized = svg.replace('width="64" height="64"', `width="${size}" height="${size}"`);
    await page.goto('data:image/svg+xml;base64,' + Buffer.from(sized).toString('base64'));
    return page.screenshot({ omitBackground: true, type: 'png' });
  }

  const rounded = faviconSVG();           // static colors for raster
  const square = appIconSVG();

  const png16 = await shot(rounded, 16);
  const png32 = await shot(rounded, 32);
  const png48 = await shot(rounded, 48);
  writeFileSync(join(FAVICON_DIR, 'favicon-16.png'), png16);
  writeFileSync(join(FAVICON_DIR, 'favicon-32.png'), png32);
  writeFileSync(join(FAVICON_DIR, 'favicon-48.png'), png48);
  writeFileSync(join(FAVICON_DIR, 'favicon.ico'), packIco([
    { size: 16, buf: png16 }, { size: 32, buf: png32 }, { size: 48, buf: png48 },
  ]));
  writeFileSync(join(FAVICON_DIR, 'apple-touch-icon.png'), await shot(square, 180));
  writeFileSync(join(FAVICON_DIR, 'icon-192.png'), await shot(square, 192));
  writeFileSync(join(FAVICON_DIR, 'icon-512.png'), await shot(square, 512));

  await browser.close();
  ['favicon-16.png', 'favicon-32.png', 'favicon-48.png', 'favicon.ico',
    'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']
    .forEach(f => files.push(join(FAVICON_DIR, f).replace(ROOT + '/', '')));
}

/* ─── Generate all variants ─────────────────────────────────────── */

// Clean stale outputs so removed variants don't linger.
// (--skip-raster keeps existing PNG/ICO files since they won't be rebuilt.)
const cleanPattern = SKIP_RASTER ? /\.svg$/ : /\.(svg|png|ico)$/;
for (const dir of [PRIMARY, SECONDARY, FAVICON_DIR, HELPLINE_DIR, SYMBOL_DIR]) {
  for (const f of readdirSync(dir)) {
    if (cleanPattern.test(f)) unlinkSync(join(dir, f));
  }
}

const files = [];

function write(dir, name, content) {
  const path = join(dir, name);
  writeFileSync(path, content, 'utf-8');
  files.push(path.replace(ROOT + '/', ''));
}

// ── Primary (two-tone, default use on light backgrounds) ──

write(PRIMARY, 'logo-horizontal-full-color.svg', wordmarkSVG(C.navy, C.tealDark));
write(PRIMARY, 'logo-horizontal-on-light.svg', wordmarkSVG(C.navy, C.tealDark));
write(PRIMARY, 'logo-stacked-full-color.svg', stackedSVG(C.navy, C.white, C.teal, C.navy, C.tealDark));
write(PRIMARY, 'logo-stacked-on-light.svg', stackedSVG(C.navy, C.white, C.teal, C.navy, C.tealDark));

// ── Secondary (reversed, monochrome) ──

write(SECONDARY, 'logo-horizontal-reversed.svg', wordmarkSVG(C.white, C.teal, C.navy));
write(SECONDARY, 'logo-horizontal-mono-white.svg', wordmarkSVG(C.white, C.white, C.black));
write(SECONDARY, 'logo-horizontal-mono-dark.svg', wordmarkSVG(C.navy, C.navy));
write(SECONDARY, 'logo-stacked-reversed.svg', stackedSVG(null, C.white, C.teal, C.white, C.teal, C.navy));
write(SECONDARY, 'logo-stacked-mono-white.svg', stackedSVG(null, C.white, C.white, C.white, C.white, C.black));
write(SECONDARY, 'logo-stacked-mono-dark.svg', stackedSVG(null, C.navy, C.navy, C.navy, C.navy));

// ── Symbol mark ──

write(SYMBOL_DIR, 'symbol-mark.svg', symbolSVG(C.white, C.teal, { bg: C.navy }));
write(SYMBOL_DIR, 'symbol-mark-on-light.svg', symbolSVG(C.navy, C.teal));
write(SYMBOL_DIR, 'symbol-mark-on-dark.svg', symbolSVG(C.white, C.teal));
write(SYMBOL_DIR, 'symbol-mark-mono-dark.svg', symbolSVG(C.navy, C.navy));
write(SYMBOL_DIR, 'symbol-mark-mono-white.svg', symbolSVG(C.white, C.white, { bg: C.black }));

// ── Favicon (SVG) ──

write(FAVICON_DIR, 'favicon.svg', faviconSVG());
write(FAVICON_DIR, 'favicon-reversed.svg', symbolSVG(C.white, C.teal));
write(FAVICON_DIR, 'favicon-mono-white.svg', symbolSVG(C.white, C.white, { bg: C.black }));

// ── Helpline badges ──

write(HELPLINE_DIR, 'helpline-badge-light.svg',
  helplineBadgeSVG(C.navy, C.tealDark, C.teal, C.n500, C.navy));
write(HELPLINE_DIR, 'helpline-badge-dark.svg',
  helplineBadgeSVG(C.white, C.teal, C.teal, 'rgba(255,255,255,0.65)', C.white, C.navy));

/* ─── Preview page ──────────────────────────────────────────────── */

function previewHTML() {
  const card = (inner, label, cls = '') =>
    `<div class="card ${cls}"><div class="art">${inner}</div><div class="label">${label}</div></div>`;
  const wmLite = wordmarkSVG(C.navy, C.tealDark);
  const wmRev = wordmarkSVG(C.white, C.teal);
  const wmMono = wordmarkSVG(C.navy, C.navy);
  const stLite = stackedSVG(C.navy, C.white, C.teal, C.navy, C.tealDark);
  const stRev = stackedSVG(null, C.white, C.teal, C.white, C.teal);
  const fav = faviconSVG();
  const sizes = [16, 24, 32, 48, 64, 128]
    .map(s => `<div class="szi"><div class="szbox" style="width:${s}px;height:${s}px">${fav}</div><span>${s}</span></div>`).join('');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${brand.meta.program_name} Logo System</title>
<style>
* { margin:0; padding:0; box-sizing:border-box }
body { font-family:'Inter',system-ui,sans-serif; background:${C.n50}; color:${C.n900}; padding:40px }
h1 { font-size:28px; font-weight:800; margin-bottom:8px }
.subtitle { color:${C.n500}; margin-bottom:40px; font-size:15px }
h2 { font-size:17px; font-weight:600; margin:40px 0 14px; color:${C.n700} }
.grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:18px }
.card { background:#fff; border-radius:12px; padding:22px; display:flex; flex-direction:column; align-items:center; gap:14px; box-shadow:0 1px 3px rgba(0,0,0,.08) }
.card.dark { background:${C.navy} } .card.dark .label { color:${C.n300} }
.card.black { background:${C.black} } .card.black .label { color:${C.n300} }
.art { display:flex; align-items:center; justify-content:center; min-height:72px }
.h44 svg { height:44px; width:auto } .h120 svg { height:120px; width:auto }
.szbox svg { width:100%; height:100% }
.hfit { display:flex } .hfit svg { height:100%; width:auto }
.label { font-size:12px; color:${C.n500}; text-align:center; line-height:1.45 }
.rowflex { display:flex; align-items:flex-end; gap:22px; flex-wrap:wrap }
.szi { display:flex; flex-direction:column; align-items:center; gap:6px }
.szi span { font-size:11px; color:${C.n500} }
.hero { background:#fff; border-radius:16px; padding:48px; display:flex; align-items:center; justify-content:center; gap:56px; flex-wrap:wrap; box-shadow:0 1px 3px rgba(0,0,0,.08); margin-bottom:18px }
</style>
</head>
<body>
<h1>${brand.meta.program_name} Logo System</h1>
<p class="subtitle">Symbol: a closed book beside a play triangle, carried in a rounded navy tile. Wordmark: ${BOLD_TEXT} set in Inter ${BOLD_WGHT}, one weight, one color. All text is outlined; no font dependencies.</p>

<div class="hero"><div class="hfit" style="height:120px">${stLite}</div><div class="hfit" style="height:52px">${wmLite}</div><div class="szbox" style="width:96px;height:96px">${symbolSVG(C.white, C.teal, { bg: C.navy, bgRx: 14 })}</div></div>

<h2>Horizontal wordmark</h2>
<div class="grid">
${card(`<div class="h44">${wmLite}</div>`, 'full-color / on-light — navy')}
${card(`<div class="h44">${wmRev}</div>`, 'reversed — white', 'dark')}
${card(`<div class="h44">${wmMono}</div>`, 'mono-dark — single color')}
${card(`<div class="h44">${wordmarkSVG(C.white, C.white)}</div>`, 'mono-white — single color', 'black')}
</div>

<h2>Stacked lockup (tile + wordmark)</h2>
<div class="grid">
${card(`<div class="h120">${stLite}</div>`, 'full-color / on-light')}
${card(`<div class="h120">${stRev}</div>`, 'reversed', 'dark')}
${card(`<div class="h120">${stackedSVG(null, C.navy, C.navy, C.navy, C.navy)}</div>`, 'mono-dark')}
</div>

<h2>Symbol mark — closed book + play</h2>
<div class="grid">
${card(`<div class="szbox" style="width:96px;height:96px">${symbolSVG(C.white, C.teal, { bg: C.navy })}</div>`, 'primary — the brand tile')}
${card(`<div class="szbox" style="width:96px;height:96px">${symbolSVG(C.navy, C.teal)}</div>`, 'on light — no tile')}
${card(`<div class="szbox" style="width:96px;height:96px">${symbolSVG(C.white, C.teal)}</div>`, 'on dark — no tile', 'dark')}
${card(`<div class="szbox" style="width:96px;height:96px">${symbolSVG(C.navy, C.navy)}</div>`, 'mono dark')}
${card(`<div class="szbox" style="width:96px;height:96px">${symbolSVG(C.white, C.white, { bg: C.black })}</div>`, 'mono white — black tile', 'black')}
</div>

<h2>Favicon at size</h2>
<div class="card" style="align-items:flex-start"><div class="rowflex">${sizes}</div><div class="label">favicon.svg is the brand tile (identical to Playbook Academy's); PNG 16/32/48 + favicon.ico + apple-touch-icon + PWA 192/512 ship alongside.</div></div>

<h2>Helpline badge</h2>
<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(420px,1fr))">
${card(helplineBadgeSVG(C.navy, C.tealDark, C.teal, C.n500, C.navy), 'light')}
${card(helplineBadgeSVG(C.white, C.teal, C.teal, 'rgba(255,255,255,0.65)', C.white, C.navy), 'dark', 'dark')}
</div>
</body>
</html>
`;
}

const preview = previewHTML();
writeFileSync(join(LOGO_DIR, 'symbol-preview.html'), preview);
files.push(join(LOGO_DIR, 'symbol-preview.html').replace(ROOT + '/', ''));

/* ─── Animated hero (hub) — outlined text, SMIL animation ───────── */

function heroAnimatedSVG() {
  const s = 4.375;                 // 64-grid → 280px box
  const tx = 60, ty = 35;          // mark visual area: 95..305 × 70..280
  const b = MARK.bar;
  const cx = r2(tx + 40 * s), cy = r2(ty + 32 * s);

  const { parts, bb } = WORDMARK;
  const wmW = bb.maxX - bb.minX;
  const wmTarget = 280;
  const wmScale = r2(wmTarget / wmW);
  const wmX = r2((400 - wmTarget) / 2 - bb.minX * wmScale);
  const wmY = r2(298 - bb.minY * wmScale);
  const wm = parts.map(p =>
    `<path transform="translate(${r2(p.dx)} 0)" d="${p.d}" fill="${p.role === 'bold' ? '#FFFFFF' : C.teal}"/>`
  ).join('');

  const tag = textToPath('BRAND SYSTEM', { weight: 500, size: 14, opsz: 14, tracking: 215 });
  const tagX = r2((400 - tag.width) / 2);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="tealGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${C.teal}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${C.teal}" stop-opacity="0.45"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="400" height="400" rx="40" fill="${C.navy}"/>

  <!-- Radial pulses behind the punched play -->
  <circle cx="${cx}" cy="${cy}" r="0" fill="none" stroke="${C.teal}" stroke-width="1" opacity="0">
    <animate attributeName="r" values="60;120" dur="3s" begin="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0" dur="3s" begin="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="${cx}" cy="${cy}" r="0" fill="none" stroke="${C.teal}" stroke-width="1" opacity="0">
    <animate attributeName="r" values="60;120" dur="3s" begin="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0" dur="3s" begin="3s" repeatCount="indefinite"/>
  </circle>

  <g transform="translate(${tx} ${ty}) scale(${s})">
    <!-- Book bar draws on -->
    <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="${b.rx}" fill="none" stroke="#FFFFFF" stroke-width="0.7"
          stroke-dasharray="110" stroke-dashoffset="110">
      <animate attributeName="stroke-dashoffset" from="110" to="0" dur="0.8s" begin="0.2s" fill="freeze"/>
    </rect>
    <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="${b.rx}" fill="#FFFFFF" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1s" fill="freeze"/>
    </rect>
    <!-- Play triangle draws on, then fills teal -->
    <polygon points="${MARK.tri}" fill="none" stroke="${C.teal}" stroke-width="0.7" stroke-linejoin="round"
             stroke-dasharray="95" stroke-dashoffset="95">
      <animate attributeName="stroke-dashoffset" from="95" to="0" dur="0.8s" begin="0.6s" fill="freeze"/>
    </polygon>
    <polygon points="${MARK.tri}" fill="url(#tealGlow)" filter="url(#glow)" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="1.3s" fill="freeze"/>
    </polygon>
  </g>

  <!-- Wordmark fades up (outlined — no font dependency) -->
  <g opacity="0" transform="translate(0,10)">
    <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="1.7s" fill="freeze"/>
    <animateTransform attributeName="transform" type="translate" from="0,10" to="0,0" dur="0.6s" begin="1.7s" fill="freeze"/>
    <g transform="translate(${wmX} ${wmY}) scale(${wmScale})">${wm}</g>
  </g>

  <!-- Tagline fades up -->
  <g opacity="0">
    <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="2s" fill="freeze"/>
    <path transform="translate(${tagX} 382)" d="${tag.d}" fill="#6B8299"/>
  </g>
</svg>
`;
}

/* ─── Sync copies used by the hub + slide deck ──────────────────── */

function syncCopies() {
  const targets = [
    join(ROOT, 'hub', 'brand-book', 'assets', 'logos'),
    join(ROOT, 'slide-deck', 'public', 'assets', 'logos'),
  ].filter(existsSync);
  const flat = [];
  for (const dir of [PRIMARY, SECONDARY, FAVICON_DIR, HELPLINE_DIR, SYMBOL_DIR]) {
    for (const f of readdirSync(dir)) {
      if (/\.(svg|png|ico)$/.test(f)) flat.push(join(dir, f));
    }
  }
  for (const target of targets) {
    for (const src of flat) copyFileSync(src, join(target, src.split('/').pop()));
  }
  const previewCopies = [
    join(ROOT, 'hub', 'brand-book', 'symbol-preview.html'),
    join(ROOT, 'slide-deck', 'public', 'symbol-preview.html'),
  ].filter(p => existsSync(dirname(p)));
  for (const p of previewCopies) writeFileSync(p, preview);
  const heroPath = join(ROOT, 'hub', 'brand-book', 'assets', 'animated', 'hero-logo-animated.svg');
  if (existsSync(dirname(heroPath))) {
    writeFileSync(heroPath, heroAnimatedSVG());
    files.push(heroPath.replace(ROOT + '/', ''));
  }
  console.log(`✓ Synced ${flat.length} assets to ${targets.length} mirror dirs + ${previewCopies.length} preview copies + animated hero`);
}

/* ─── Run ───────────────────────────────────────────────────────── */

console.log(`✓ Font: ${fontPath.replace(ROOT + '/', '')} (${font.familyName} ${font.version})`);

if (!SKIP_RASTER) {
  await renderRasters();
}
syncCopies();

console.log(`\n✓ Generated ${files.length} logo files:\n`);
console.log('  Primary (two-tone, default):');
files.filter(f => f.includes('/primary/')).forEach(f => console.log(`    ${f}`));
console.log('\n  Secondary (reversed, monochrome):');
files.filter(f => f.includes('/secondary/')).forEach(f => console.log(`    ${f}`));
console.log('\n  Symbol mark:');
files.filter(f => f.includes('/symbol/')).forEach(f => console.log(`    ${f}`));
console.log('\n  Favicon + app icons:');
files.filter(f => f.includes('/favicon/')).forEach(f => console.log(`    ${f}`));
console.log('\n  Helpline badge:');
files.filter(f => f.includes('/helpline-badge/')).forEach(f => console.log(`    ${f}`));
console.log('\nAll wordmark text is converted to Inter outlines — no font dependencies.');
