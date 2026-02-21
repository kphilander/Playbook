#!/usr/bin/env node
/**
 * build-icons.mjs — Playbook Brand Icon Generator (Weight Contrast)
 *
 * Generates 31 SVG icons using a dual stroke-weight system that echoes
 * the logo's typographic contrast (Play 800 / BOOK 300):
 *   - Primary strokes (2px): Outer containers, main shapes, defining structure
 *   - Detail strokes (1px): Inner details, accents, secondary elements
 *
 * Outputs:
 *   visual-identity/iconography/icons/*.svg   (31 individual SVG files)
 *   visual-identity/iconography/icon-preview.html  (visual preview page)
 *
 * Usage:  node collateral/render/build-icons.mjs
 */

import { writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const ICONS_DIR = join(ROOT, 'visual-identity', 'iconography', 'icons');
const PREVIEW_PATH = join(ROOT, 'visual-identity', 'iconography', 'icon-preview.html');

const EXPECTED_COUNT = 31;

/* ─── Clean existing icon files ──────────────────────────────────────── */

mkdirSync(ICONS_DIR, { recursive: true });

const existing = readdirSync(ICONS_DIR).filter(f => f.endsWith('.svg'));
for (const file of existing) {
  unlinkSync(join(ICONS_DIR, file));
}
console.log(`✓ Cleaned ${existing.length} old SVG files`);

/* ─── SVG wrapper (no stroke-width on root) ──────────────────────────── */

const SVG_OPEN = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">`;
const SVG_CLOSE = `</svg>`;

function svg(primary, detail) {
  return `${SVG_OPEN}
  <g stroke-width="2">${primary}</g>
  <g stroke-width="1">${detail}</g>
${SVG_CLOSE}
`;
}

/* ─── Icon definitions (31 icons, 7 categories) ─────────────────────── */

const categories = [
  {
    name: 'Game Types',
    icons: [
      {
        name: 'icon-cards',
        desc: 'Playing cards (two overlapping)',
        usage: 'Card games, blackjack, general gambling',
        primary: `
    <rect x="3" y="3" width="11" height="15" rx="2"/>
    <rect x="8" y="6" width="11" height="15" rx="2"/>`,
        detail: `
    <path d="M13.5 11.5c.8-1.5 2.5-1.5 2.5 0s-2.5 2.5-2.5 2.5-2.5-1-2.5-2.5 1.7-1.5 2.5 0z"/>`,
      },
      {
        name: 'icon-dice',
        desc: 'Two dice',
        usage: 'Dice games, craps, randomness',
        primary: `
    <rect x="2" y="2" width="9" height="9" rx="1.5"/>
    <rect x="13" y="13" width="9" height="9" rx="1.5"/>`,
        detail: `
    <circle cx="6.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="15.5" cy="15.5" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="19.5" cy="15.5" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="15.5" cy="19.5" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="19.5" cy="19.5" r="0.75" fill="currentColor" stroke="none"/>`,
      },
      {
        name: 'icon-roulette',
        desc: 'Roulette wheel',
        usage: 'Roulette, casino games, chance',
        primary: `
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="4"/>`,
        detail: `
    <line x1="12" y1="3" x2="12" y2="8"/>
    <line x1="12" y1="16" x2="12" y2="21"/>
    <line x1="3" y1="12" x2="8" y2="12"/>
    <line x1="16" y1="12" x2="21" y2="12"/>
    <line x1="5.6" y1="5.6" x2="9.2" y2="9.2"/>
    <line x1="14.8" y1="14.8" x2="18.4" y2="18.4"/>
    <line x1="18.4" y1="5.6" x2="14.8" y2="9.2"/>
    <line x1="5.6" y1="18.4" x2="9.2" y2="14.8"/>
    <circle cx="17" cy="5.5" r="1" fill="currentColor" stroke="none"/>
    <path d="M12 1.5l-1.2 2h2.4z" fill="currentColor" stroke="none"/>`,
      },
      {
        name: 'icon-slots',
        desc: 'Slot machine',
        usage: 'Slot machines, electronic gaming',
        primary: `
    <rect x="3" y="4" width="18" height="16" rx="2"/>`,
        detail: `
    <rect x="5.5" y="7" width="3.5" height="6" rx="1"/>
    <rect x="10.25" y="7" width="3.5" height="6" rx="1"/>
    <rect x="15" y="7" width="3.5" height="6" rx="1"/>
    <line x1="22" y1="7" x2="22" y2="11"/>
    <circle cx="22" cy="6.5" r="1"/>
    <line x1="5" y1="16" x2="19" y2="16"/>`,
      },
      {
        name: 'icon-sports',
        desc: 'Sports ball',
        usage: 'Sports betting, live betting',
        primary: `
    <circle cx="12" cy="12" r="9"/>`,
        detail: `
    <line x1="3" y1="12" x2="21" y2="12"/>
    <path d="M9 3.5Q11 12 9 20.5"/>
    <path d="M15 3.5Q13 12 15 20.5"/>`,
      },
      {
        name: 'icon-lottery',
        desc: 'Lottery ticket',
        usage: 'Lottery, scratch cards, draws',
        primary: `
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7z"/>`,
        detail: `
    <line x1="9" y1="5" x2="9" y2="7" stroke-dasharray="2 1.5"/>
    <line x1="9" y1="10" x2="9" y2="14" stroke-dasharray="2 1.5"/>
    <line x1="9" y1="17" x2="9" y2="19" stroke-dasharray="2 1.5"/>
    <path d="M15 9l1 2h2l-1.5 1.5.5 2-2-1-2 1 .5-2L12 11h2z"/>`,
      },
      {
        name: 'icon-table',
        desc: 'Table game (top-down)',
        usage: 'Table games, blackjack, baccarat',
        primary: `
    <path d="M3 16a9 9 0 0 1 18 0"/>
    <line x1="3" y1="16" x2="21" y2="16"/>
    <path d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/>`,
        detail: `
    <circle cx="12" cy="8.5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="6" cy="13.5" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="9.5" cy="10.5" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="14.5" cy="10.5" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="13.5" r="0.75" fill="currentColor" stroke="none"/>`,
      },
    ],
  },
  {
    name: 'Odds & Math',
    icons: [
      {
        name: 'icon-percentage',
        desc: 'Percent sign in circle',
        usage: 'Probabilities, percentages, return rates',
        primary: `
    <circle cx="12" cy="12" r="9"/>`,
        detail: `
    <line x1="8" y1="16" x2="16" y2="8"/>
    <circle cx="9" cy="9" r="1.2"/>
    <circle cx="15" cy="15" r="1.2"/>`,
      },
      {
        name: 'icon-edge',
        desc: 'Comparison bars — house edge',
        usage: 'House edge, advantage, margin',
        primary: `
    <rect x="3" y="5" width="7" height="15" rx="1.5"/>
    <rect x="14" y="10" width="7" height="10" rx="1.5"/>`,
        detail: `
    <line x1="2" y1="20" x2="22" y2="20"/>
    <line x1="5" y1="9" x2="8" y2="9"/>
    <line x1="5" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="14" x2="19" y2="14"/>`,
      },
      {
        name: 'icon-rng',
        desc: 'Shuffle / random arrows',
        usage: 'Random number generators, shuffling, independence',
        primary: `
    <path d="M3 8h4l6 8h4"/>
    <path d="M3 16h4l6-8h4"/>`,
        detail: `
    <polyline points="18 6 21 8 18 10"/>
    <polyline points="18 14 21 16 18 18"/>`,
      },
      {
        name: 'icon-equal',
        desc: 'Equal sign in circle',
        usage: 'Independent events, equal probability, fairness',
        primary: `
    <circle cx="12" cy="12" r="9"/>`,
        detail: `
    <line x1="8" y1="10" x2="16" y2="10"/>
    <line x1="8" y1="14" x2="16" y2="14"/>`,
      },
    ],
  },
  {
    name: 'Player Tools',
    icons: [
      {
        name: 'icon-timer',
        desc: 'Timer / clock',
        usage: 'Session awareness, play duration',
        primary: `
    <circle cx="12" cy="13" r="8"/>`,
        detail: `
    <polyline points="12 9 12 13 15 15"/>
    <line x1="12" y1="2" x2="12" y2="5"/>
    <line x1="9" y1="2" x2="15" y2="2"/>`,
      },
      {
        name: 'icon-limit',
        desc: 'Gauge — limits',
        usage: 'Deposit limits, loss limits, wagering limits',
        primary: `
    <path d="M4.2 16.5A9 9 0 0 1 12 3a9 9 0 0 1 7.8 13.5"/>`,
        detail: `
    <line x1="12" y1="12" x2="16.5" y2="7.5"/>
    <circle cx="12" cy="12" r="1"/>
    <line x1="5.5" y1="16" x2="6.5" y2="15"/>
    <line x1="4.5" y1="12" x2="5.5" y2="12"/>
    <line x1="6" y1="8" x2="7" y2="8.5"/>
    <line x1="9" y1="5.5" x2="9.5" y2="6.5"/>
    <line x1="14.5" y1="5.5" x2="14" y2="6.5"/>
    <line x1="17.5" y1="8" x2="17" y2="8.5"/>
    <line x1="19.5" y1="12" x2="18.5" y2="12"/>
    <line x1="18.5" y1="16" x2="17.5" y2="15"/>`,
      },
      {
        name: 'icon-budget',
        desc: 'Dollar in circle',
        usage: 'Entertainment budget, spending limits, bankroll',
        primary: `
    <circle cx="12" cy="12" r="9"/>`,
        detail: `
    <path d="M12 6v12"/>
    <path d="M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1.1-3 2.5 1.3 2 3 2.5 3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5"/>`,
      },
      {
        name: 'icon-bell',
        desc: 'Bell — notifications',
        usage: 'Notifications, alerts, reminders',
        primary: `
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>`,
        detail: `
    <path d="M13.7 21a2 2 0 0 1-3.4 0"/>`,
      },
      {
        name: 'icon-history',
        desc: 'Clock with rewind arrow',
        usage: 'Play history, recent activity, session log',
        primary: `
    <circle cx="12" cy="13" r="8"/>`,
        detail: `
    <polyline points="12 9 12 13 15.5 14.5"/>
    <path d="M12 5V2"/>
    <path d="M5.6 7.6L3.5 5.5"/>
    <polyline points="3.5 8.5 3.5 5.5 6.5 5.5"/>`,
      },
      {
        name: 'icon-check',
        desc: 'Checkmark in rounded rectangle',
        usage: 'Confirmation, positive actions',
        primary: `
    <rect x="3" y="3" width="18" height="18" rx="4"/>`,
        detail: `
    <polyline points="8 12 11 15 16 9"/>`,
      },
      {
        name: 'icon-activity',
        desc: 'Bar chart — activity tracking',
        usage: 'Activity tracking, play history, stats',
        primary: `
    <line x1="4" y1="4" x2="4" y2="20"/>
    <line x1="4" y1="20" x2="20" y2="20"/>`,
        detail: `
    <line x1="8" y1="20" x2="8" y2="12"/>
    <line x1="12" y1="20" x2="12" y2="8"/>
    <line x1="16" y1="20" x2="16" y2="14"/>`,
      },
    ],
  },
  {
    name: 'Content & Education',
    icons: [
      {
        name: 'icon-quiz',
        desc: 'Question mark in circle',
        usage: 'Quizzes, knowledge tests, trivia',
        primary: `
    <circle cx="12" cy="12" r="9"/>`,
        detail: `
    <path d="M9 9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 2-3 2-3 4"/>
    <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="none"/>`,
      },
      {
        name: 'icon-myth',
        desc: 'X-mark in circle',
        usage: 'Myth-busting, false claims, misconceptions',
        primary: `
    <circle cx="12" cy="12" r="9"/>`,
        detail: `
    <line x1="8" y1="8" x2="16" y2="16"/>
    <line x1="16" y1="8" x2="8" y2="16"/>`,
      },
      {
        name: 'icon-fact',
        desc: 'Checkmark in circle',
        usage: 'Facts, verified info, correct answers',
        primary: `
    <circle cx="12" cy="12" r="9"/>`,
        detail: `
    <polyline points="8 12 11 15 16 9"/>`,
      },
      {
        name: 'icon-info',
        desc: 'Info circle',
        usage: 'Educational content, tips, explainers',
        primary: `
    <circle cx="12" cy="12" r="9"/>`,
        detail: `
    <circle cx="12" cy="8" r="0.5" fill="currentColor" stroke="none"/>
    <line x1="12" y1="11" x2="12" y2="16"/>`,
      },
    ],
  },
  {
    name: 'Social & Sharing',
    icons: [
      {
        name: 'icon-share',
        desc: 'Share — upload from box',
        usage: 'Social sharing, challenge friends',
        primary: `
    <path d="M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>`,
        detail: `
    <line x1="12" y1="3" x2="12" y2="15"/>
    <polyline points="8 7 12 3 16 7"/>`,
      },
      {
        name: 'icon-challenge',
        desc: 'Crossed swords',
        usage: 'Challenges, versus mode, competitions',
        primary: `
    <line x1="5" y1="5" x2="19" y2="19"/>
    <line x1="19" y1="5" x2="5" y2="19"/>`,
        detail: `
    <line x1="5" y1="5" x2="9" y2="5"/>
    <line x1="5" y1="5" x2="5" y2="9"/>
    <line x1="19" y1="5" x2="15" y2="5"/>
    <line x1="19" y1="5" x2="19" y2="9"/>`,
      },
      {
        name: 'icon-score',
        desc: 'Trophy',
        usage: 'Quiz results, achievements, game IQ score',
        primary: `
    <path d="M8 4h8v6a4 4 0 0 1-8 0V4z"/>`,
        detail: `
    <path d="M8 6H5a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h1"/>
    <path d="M16 6h3a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-1"/>
    <line x1="12" y1="14" x2="12" y2="18"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <rect x="10" y="18" width="4" height="3"/>`,
      },
      {
        name: 'icon-qr',
        desc: 'QR code',
        usage: 'QR codes, scan to access, mobile linking',
        primary: `
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>`,
        detail: `
    <rect x="5" y="5" width="3" height="3"/>
    <rect x="16" y="5" width="3" height="3"/>
    <rect x="5" y="16" width="3" height="3"/>
    <line x1="14" y1="14" x2="14" y2="17"/>
    <line x1="17" y1="14" x2="21" y2="14"/>
    <line x1="17" y1="17" x2="17" y2="21"/>
    <line x1="21" y1="17" x2="21" y2="21"/>`,
      },
    ],
  },
  {
    name: 'Support & Safety',
    icons: [
      {
        name: 'icon-phone',
        desc: 'Phone with signal',
        usage: 'Helpline number, call for support',
        primary: `
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7 12.7 12.7 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5 12.7 12.7 0 0 0 2.8.7A2 2 0 0 1 22 16.9z"/>`,
        detail: `
    <path d="M17 2a5 5 0 0 1 5 5" fill="none"/>
    <path d="M17 6a1 1 0 0 1 1 1" fill="none"/>`,
      },
      {
        name: 'icon-warning',
        desc: 'Warning triangle',
        usage: 'Warnings, alerts, caution, risk',
        primary: `
    <path d="M10.3 3.9L1.7 18.3a2 2 0 0 0 1.7 3h17.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>`,
        detail: `
    <line x1="12" y1="9" x2="12" y2="14"/>
    <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="none"/>`,
      },
      {
        name: 'icon-help',
        desc: 'Help — first aid cross',
        usage: 'Help resources, support services, crisis lines',
        primary: `
    <circle cx="12" cy="12" r="9"/>`,
        detail: `
    <line x1="12" y1="7" x2="12" y2="17"/>
    <line x1="7" y1="12" x2="17" y2="12"/>`,
      },
      {
        name: 'icon-external',
        desc: 'External link',
        usage: 'External links, leaving site, third-party resources',
        primary: `
    <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>`,
        detail: `
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>`,
      },
      {
        name: 'icon-playbook',
        desc: 'Open book with play triangle',
        usage: 'Brand identifier, navigation, home',
        primary: `
    <path d="M2 4c0 0 2.5-1 5.5-1S12 4 12 4s2.5-1 5.5-1S22 4 22 4v14c0 0-2.5-1-5.5-1s-4.5 1-4.5 1-2.5-1-5.5-1S2 18 2 18V4z"/>
    <line x1="12" y1="4" x2="12" y2="18"/>`,
        detail: `
    <path d="M15.5 9l3 2-3 2V9z"/>`,
      },
    ],
  },
];

/* ─── Generate individual SVG files ──────────────────────────────────── */

let totalCount = 0;

for (const cat of categories) {
  for (const icon of cat.icons) {
    const content = svg(icon.primary, icon.detail);
    writeFileSync(join(ICONS_DIR, `${icon.name}.svg`), content, 'utf-8');
    totalCount++;
  }
}

/* ─── Assert icon count ──────────────────────────────────────────────── */

if (totalCount !== EXPECTED_COUNT) {
  console.error(`✗ Expected ${EXPECTED_COUNT} icons but generated ${totalCount}`);
  process.exit(1);
}

console.log(`✓ Generated ${totalCount} SVG icons in visual-identity/iconography/icons/`);

/* ─── Generate icon-preview.html ─────────────────────────────────────── */

const sizes = [16, 24, 32, 48];

function inlineSvg(primary, detail, size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <g stroke-width="2">${primary}</g>
            <g stroke-width="1">${detail}</g>
          </svg>`;
}

const previewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Playbook Icon Library — Weight Contrast Preview</title>
  <style>
    :root {
      --pb-color-primary: #1B2838;
      --pb-color-secondary: #00D4AA;
      --pb-color-accent: #FF6B35;
      --pb-color-neutral-50: #F5F5FA;
      --pb-color-neutral-100: #E8E8F0;
      --pb-color-neutral-500: #6B6B8A;
      --pb-color-neutral-900: #1A1A2E;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--pb-color-neutral-50);
      color: var(--pb-color-neutral-900);
      padding: 2rem;
    }
    h1 {
      font-size: 1.75rem;
      margin-bottom: .25rem;
      color: var(--pb-color-primary);
    }
    .subtitle {
      color: var(--pb-color-neutral-500);
      margin-bottom: 2rem;
      font-size: 0.95rem;
    }
    h2 {
      font-size: 1.15rem;
      margin: 2rem 0 1rem;
      color: var(--pb-color-primary);
      border-bottom: 2px solid var(--pb-color-secondary);
      padding-bottom: .35rem;
    }
    .spec-banner {
      background: var(--pb-color-primary);
      color: #fff;
      border-radius: 8px;
      padding: 1.25rem 1.5rem;
      margin-bottom: 1.5rem;
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      font-size: 0.85rem;
    }
    .spec-banner strong { color: var(--pb-color-secondary); }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1rem;
    }
    .card {
      background: #fff;
      border-radius: 8px;
      padding: 1rem;
      border: 1px solid var(--pb-color-neutral-100);
    }
    .card .name {
      font-weight: 600;
      font-size: 0.8rem;
      margin-bottom: .25rem;
      color: var(--pb-color-primary);
      font-family: monospace;
    }
    .card .desc {
      font-size: 0.75rem;
      color: var(--pb-color-neutral-500);
      margin-bottom: .75rem;
    }
    .sizes {
      display: flex;
      align-items: flex-end;
      gap: 1rem;
    }
    .sizes .size-label {
      font-size: .65rem;
      color: var(--pb-color-neutral-500);
      text-align: center;
    }
    .sizes .size-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .25rem;
    }
    .sizes svg { color: var(--pb-color-primary); }
    .dark-strip {
      background: var(--pb-color-primary);
      border-radius: 6px;
      padding: 1rem;
      margin-top: .75rem;
    }
    .dark-strip .sizes svg { color: #fff; }
    .stats {
      display: flex;
      gap: 2rem;
      margin: 1rem 0 2rem;
      flex-wrap: wrap;
    }
    .stat {
      background: #fff;
      padding: .75rem 1.25rem;
      border-radius: 6px;
      border: 1px solid var(--pb-color-neutral-100);
    }
    .stat strong {
      color: var(--pb-color-secondary);
      font-size: 1.5rem;
      display: block;
    }
    .stat span { font-size: .8rem; color: var(--pb-color-neutral-500); }
  </style>
</head>
<body>
  <h1>Playbook Icon Library</h1>
  <p class="subtitle">${totalCount} icons across ${categories.length} categories — weight-contrast style (2px primary / 1px detail)</p>
  <div class="spec-banner">
    <div><strong>Primary strokes (2px)</strong> — Outer containers, main shapes, structure</div>
    <div><strong>Detail strokes (1px)</strong> — Inner details, accents, secondary elements</div>
    <div><strong>Design principle</strong> — Echoes logo weight contrast: Play (800) / BOOK (300)</div>
  </div>
  <div class="stats">
    <div class="stat"><strong>${totalCount}</strong><span>Total icons</span></div>
    <div class="stat"><strong>${categories.length}</strong><span>Categories</span></div>
    <div class="stat"><strong>4</strong><span>Size variants</span></div>
    <div class="stat"><strong>2:1</strong><span>Weight ratio</span></div>
  </div>
${categories.map(cat => `
  <h2>${cat.name} (${cat.icons.length})</h2>
  <div class="grid">
${cat.icons.map(icon => {
  const sizeBoxes = sizes.map(s =>
    `        <div class="size-box">
          ${inlineSvg(icon.primary, icon.detail, s)}
          <span class="size-label">${s}px</span>
        </div>`
  ).join('\n');
  return `    <div class="card">
      <div class="name">${icon.name}</div>
      <div class="desc">${icon.desc}</div>
      <div class="sizes">\n${sizeBoxes}\n      </div>
      <div class="dark-strip">
        <div class="sizes">\n${sizeBoxes}\n        </div>
      </div>
    </div>`;
}).join('\n')}
  </div>`).join('\n')}
</body>
</html>
`;

writeFileSync(PREVIEW_PATH, previewHtml, 'utf-8');
console.log(`✓ Generated icon-preview.html (weight-contrast)`);

/* ─── Summary ─────────────────────────────────────────────────────────── */

console.log(`\nIcon breakdown:`);
for (const cat of categories) {
  console.log(`  ${cat.name}: ${cat.icons.length} icons`);
}
console.log(`\nTotal: ${totalCount} icons (expected: ${EXPECTED_COUNT})`);
