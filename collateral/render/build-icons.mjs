#!/usr/bin/env node
/**
 * build-icons.mjs — Playbook Brand Icon Generator
 *
 * Generates 48 SVG icons (15 existing + 33 new) for the Playbook brand system.
 * Each icon: 24×24 canvas, outlined style, stroke="currentColor", stroke-width 1.5,
 * round caps/joins, no fills.
 *
 * Outputs:
 *   visual-identity/iconography/icons/*.svg   (48 individual SVG files)
 *   visual-identity/iconography/icon-preview.html  (visual preview page)
 *
 * Usage:  node collateral/render/build-icons.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const ICONS_DIR = join(ROOT, 'visual-identity', 'iconography', 'icons');
const PREVIEW_PATH = join(ROOT, 'visual-identity', 'iconography', 'icon-preview.html');

mkdirSync(ICONS_DIR, { recursive: true });

/* ─── SVG wrapper ────────────────────────────────────────────────────── */

const SVG_OPEN = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">`;
const SVG_CLOSE = `</svg>`;

function svg(inner) {
  return `${SVG_OPEN}\n${inner}\n${SVG_CLOSE}\n`;
}

/* ─── Icon definitions (organized by category) ───────────────────────── */

const categories = [
  {
    name: 'Game Types',
    icons: [
      {
        name: 'icon-cards',
        desc: 'Playing cards (two overlapping)',
        usage: 'Card games, blackjack, general gambling',
        inner: `  <!-- Back card -->
  <rect x="3" y="3" width="11" height="15" rx="2"/>
  <!-- Front card -->
  <rect x="8" y="6" width="11" height="15" rx="2"/>
  <!-- Suit symbol on front card -->
  <path d="M13.5 11.5c.8-1.5 2.5-1.5 2.5 0s-2.5 2.5-2.5 2.5-2.5-1-2.5-2.5 1.7-1.5 2.5 0z"/>`
      },
      {
        name: 'icon-dice',
        desc: 'Two dice',
        usage: 'Dice games, craps, randomness',
        inner: `  <!-- Die 1 -->
  <rect x="2" y="2" width="9" height="9" rx="1.5"/>
  <circle cx="5" cy="5" r="0.7"/>
  <circle cx="8.5" cy="8.5" r="0.7"/>
  <!-- Die 2 -->
  <rect x="13" y="13" width="9" height="9" rx="1.5"/>
  <circle cx="15.5" cy="15.5" r="0.7"/>
  <circle cx="19.5" cy="15.5" r="0.7"/>
  <circle cx="15.5" cy="19.5" r="0.7"/>
  <circle cx="19.5" cy="19.5" r="0.7"/>`
      },
      {
        name: 'icon-roulette',
        desc: 'Roulette wheel',
        usage: 'Roulette, casino games, chance',
        inner: `  <!-- Outer wheel -->
  <circle cx="12" cy="12" r="9"/>
  <!-- Inner circle -->
  <circle cx="12" cy="12" r="4"/>
  <!-- Spokes -->
  <line x1="12" y1="3" x2="12" y2="8"/>
  <line x1="12" y1="16" x2="12" y2="21"/>
  <line x1="3" y1="12" x2="8" y2="12"/>
  <line x1="16" y1="12" x2="21" y2="12"/>
  <line x1="5.6" y1="5.6" x2="9.2" y2="9.2"/>
  <line x1="14.8" y1="14.8" x2="18.4" y2="18.4"/>
  <!-- Ball -->
  <circle cx="17" cy="5.5" r="1"/>`
      },
      {
        name: 'icon-slots',
        desc: 'Slot machine / three reels',
        usage: 'Slot machines, electronic gaming',
        inner: `  <!-- Machine body -->
  <rect x="3" y="4" width="18" height="16" rx="2"/>
  <!-- Reel windows -->
  <rect x="5" y="7" width="4" height="6" rx="1"/>
  <rect x="10" y="7" width="4" height="6" rx="1"/>
  <rect x="15" y="7" width="4" height="6" rx="1"/>
  <!-- Reel divider lines -->
  <line x1="7" y1="7" x2="7" y2="13"/>
  <line x1="12" y1="7" x2="12" y2="13"/>
  <line x1="17" y1="7" x2="17" y2="13"/>
  <!-- Lever -->
  <line x1="21" y1="6" x2="21" y2="10"/>
  <circle cx="21" cy="5.5" r="1"/>
  <!-- Base -->
  <line x1="5" y1="16" x2="19" y2="16"/>`
      },
      {
        name: 'icon-chips',
        desc: 'Casino chip stack',
        usage: 'Betting chips, wagers, stakes',
        inner: `  <!-- Bottom chip -->
  <ellipse cx="12" cy="18" rx="8" ry="3"/>
  <!-- Middle chip -->
  <ellipse cx="12" cy="14" rx="8" ry="3"/>
  <line x1="4" y1="14" x2="4" y2="18"/>
  <line x1="20" y1="14" x2="20" y2="18"/>
  <!-- Top chip -->
  <ellipse cx="12" cy="10" rx="8" ry="3"/>
  <line x1="4" y1="10" x2="4" y2="14"/>
  <line x1="20" y1="10" x2="20" y2="14"/>
  <!-- Top chip detail -->
  <line x1="8" y1="8" x2="8" y2="8"/>
  <line x1="16" y1="8" x2="16" y2="8"/>`
      },
      {
        name: 'icon-sports',
        desc: 'Ball / sports betting',
        usage: 'Sports betting, live betting',
        inner: `  <!-- Ball -->
  <circle cx="12" cy="12" r="9"/>
  <!-- Seam lines (football/soccer style) -->
  <path d="M12 3c0 0-3 4-3 9s3 9 3 9"/>
  <path d="M12 3c0 0 3 4 3 9s-3 9-3 9"/>
  <line x1="3.5" y1="9" x2="20.5" y2="9"/>
  <line x1="3.5" y1="15" x2="20.5" y2="15"/>`
      },
      {
        name: 'icon-lottery',
        desc: 'Lottery ticket',
        usage: 'Lottery, scratch cards, draws',
        inner: `  <!-- Ticket shape -->
  <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7z"/>
  <!-- Tear line -->
  <line x1="9" y1="5" x2="9" y2="7" stroke-dasharray="2 1.5"/>
  <line x1="9" y1="10" x2="9" y2="14" stroke-dasharray="2 1.5"/>
  <line x1="9" y1="17" x2="9" y2="19" stroke-dasharray="2 1.5"/>
  <!-- Star on ticket -->
  <path d="M15 9l1 2h2l-1.5 1.5.5 2-2-1-2 1 .5-2L12 11h2z"/>`
      },
      {
        name: 'icon-poker',
        desc: 'Poker hand fan',
        usage: 'Poker, card strategy games',
        inner: `  <!-- Three cards fanned -->
  <rect x="6" y="4" width="8" height="12" rx="1" transform="rotate(-15 10 10)"/>
  <rect x="8" y="4" width="8" height="12" rx="1"/>
  <rect x="10" y="4" width="8" height="12" rx="1" transform="rotate(15 14 10)"/>
  <!-- Suit on center card -->
  <path d="M12 7.5l1.2 2.5-1.2 1-1.2-1z"/>`
      },
      {
        name: 'icon-bingo',
        desc: 'Bingo card grid',
        usage: 'Bingo, number games',
        inner: `  <!-- Card outline -->
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <!-- Header -->
  <line x1="3" y1="7.5" x2="21" y2="7.5"/>
  <!-- Grid lines vertical -->
  <line x1="7.5" y1="3" x2="7.5" y2="21"/>
  <line x1="12" y1="3" x2="12" y2="21"/>
  <line x1="16.5" y1="3" x2="16.5" y2="21"/>
  <!-- Grid lines horizontal -->
  <line x1="3" y1="12" x2="21" y2="12"/>
  <line x1="3" y1="16.5" x2="21" y2="16.5"/>
  <!-- Daubed spots -->
  <circle cx="9.75" cy="9.75" r="1"/>
  <circle cx="14.25" cy="14.25" r="1"/>
  <circle cx="5.25" cy="14.25" r="1"/>`
      },
      {
        name: 'icon-table',
        desc: 'Table game (felt table top-down)',
        usage: 'Table games, blackjack, baccarat',
        inner: `  <!-- Table outline (half-moon top-down) -->
  <path d="M3 16a9 9 0 0 1 18 0"/>
  <line x1="3" y1="16" x2="21" y2="16"/>
  <!-- Dealer position -->
  <circle cx="12" cy="8" r="1.5"/>
  <!-- Player positions -->
  <circle cx="5.5" cy="14" r="1"/>
  <circle cx="9" cy="11" r="1"/>
  <circle cx="15" cy="11" r="1"/>
  <circle cx="18.5" cy="14" r="1"/>
  <!-- Rail -->
  <path d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/>`
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
        inner: `  <!-- Circle -->
  <circle cx="12" cy="12" r="9"/>
  <!-- Percent slash -->
  <line x1="8" y1="16" x2="16" y2="8"/>
  <!-- Dots -->
  <circle cx="9" cy="9" r="1.2"/>
  <circle cx="15" cy="15" r="1.2"/>`
      },
      {
        name: 'icon-calculator',
        desc: 'Calculator',
        usage: 'Odds calculator, math tools',
        inner: `  <!-- Body -->
  <rect x="4" y="2" width="16" height="20" rx="2"/>
  <!-- Screen -->
  <rect x="7" y="5" width="10" height="4" rx="1"/>
  <!-- Buttons -->
  <line x1="7" y1="12" x2="7" y2="12"/>
  <line x1="10.5" y1="12" x2="10.5" y2="12"/>
  <line x1="14" y1="12" x2="14" y2="12"/>
  <line x1="17" y1="12" x2="17" y2="12"/>
  <line x1="7" y1="15.5" x2="7" y2="15.5"/>
  <line x1="10.5" y1="15.5" x2="10.5" y2="15.5"/>
  <line x1="14" y1="15.5" x2="14" y2="15.5"/>
  <line x1="17" y1="15.5" x2="17" y2="15.5"/>
  <line x1="7" y1="19" x2="7" y2="19"/>
  <line x1="10.5" y1="19" x2="10.5" y2="19"/>
  <line x1="14" y1="19" x2="14" y2="19"/>
  <line x1="17" y1="19" x2="17" y2="19"/>`
      },
      {
        name: 'icon-odds',
        desc: 'Fraction / ratio display',
        usage: 'Odds display, fractional odds, ratios',
        inner: `  <!-- Fraction bar -->
  <line x1="6" y1="12" x2="18" y2="12"/>
  <!-- Numerator -->
  <path d="M11 5h2v5h-2"/>
  <!-- Denominator -->
  <path d="M10.5 15c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-2z"/>`
      },
      {
        name: 'icon-rng',
        desc: 'Shuffle/random arrows',
        usage: 'Random number generators, shuffling, independence',
        inner: `  <!-- Crossing arrows -->
  <path d="M3 8h4l6 8h4"/>
  <path d="M3 16h4l6-8h4"/>
  <!-- Arrow heads -->
  <polyline points="18 6 21 8 18 10"/>
  <polyline points="18 14 21 16 18 18"/>`
      },
      {
        name: 'icon-edge',
        desc: 'House edge — tilt/scale',
        usage: 'House edge, advantage, margin',
        inner: `  <!-- Fulcrum -->
  <path d="M12 20l-3-4h6z"/>
  <!-- Beam (tilted) -->
  <line x1="3" y1="13" x2="21" y2="11"/>
  <!-- Left pan (higher) -->
  <path d="M3 13l2 3h4l2-3"/>
  <!-- Right pan (lower) -->
  <path d="M13 11l2 3h4l2-3"/>`
      },
      {
        name: 'icon-trend-up',
        desc: 'Upward trend line',
        usage: 'Positive trends, growth, winnings',
        inner: `  <!-- Axes -->
  <line x1="3" y1="20" x2="3" y2="4"/>
  <line x1="3" y1="20" x2="21" y2="20"/>
  <!-- Trend line going up -->
  <polyline points="5 16 9 12 13 14 20 6"/>
  <!-- Arrow head -->
  <polyline points="16 6 20 6 20 10"/>`
      },
      {
        name: 'icon-trend-down',
        desc: 'Downward trend line',
        usage: 'Negative trends, losses, decline',
        inner: `  <!-- Axes -->
  <line x1="3" y1="20" x2="3" y2="4"/>
  <line x1="3" y1="20" x2="21" y2="20"/>
  <!-- Trend line going down -->
  <polyline points="5 6 9 10 13 8 20 17"/>
  <!-- Arrow head -->
  <polyline points="16 17 20 17 20 13"/>`
      },
      {
        name: 'icon-equal',
        desc: 'Equal sign — independent outcomes',
        usage: 'Independent events, equal probability, fairness',
        inner: `  <!-- Circle -->
  <circle cx="12" cy="12" r="9"/>
  <!-- Equal sign -->
  <line x1="8" y1="10" x2="16" y2="10"/>
  <line x1="8" y1="14" x2="16" y2="14"/>`
      },
    ],
  },
  {
    name: 'Player Tools',
    icons: [
      /* ── New icons ────────── */
      {
        name: 'icon-wallet',
        desc: 'Wallet — deposit/withdrawal',
        usage: 'Deposits, withdrawals, account balance',
        inner: `  <!-- Wallet body -->
  <rect x="2" y="6" width="18" height="14" rx="2"/>
  <!-- Flap -->
  <path d="M20 10h-4a2 2 0 0 0 0 4h4"/>
  <!-- Top fold -->
  <path d="M4 6V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1"/>
  <!-- Coin/card slot -->
  <circle cx="16" cy="12" r="0.7"/>`
      },
      {
        name: 'icon-lock',
        desc: 'Padlock — account lock, security',
        usage: 'Account lock, security settings, self-exclusion',
        inner: `  <!-- Lock body -->
  <rect x="5" y="11" width="14" height="10" rx="2"/>
  <!-- Shackle -->
  <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
  <!-- Keyhole -->
  <circle cx="12" cy="16" r="1.5"/>
  <line x1="12" y1="17.5" x2="12" y2="19"/>`
      },
      {
        name: 'icon-bell',
        desc: 'Bell — notifications, alerts',
        usage: 'Notifications, alerts, reminders',
        inner: `  <!-- Bell shape -->
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <!-- Clapper -->
  <path d="M13.7 21a2 2 0 0 1-3.4 0"/>`
      },
      {
        name: 'icon-settings',
        desc: 'Gear — preferences',
        usage: 'Settings, preferences, configuration',
        inner: `  <!-- Gear outer shape -->
  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>`
      },
      {
        name: 'icon-history',
        desc: 'Clock with arrow — play history',
        usage: 'Play history, recent activity, session log',
        inner: `  <!-- Clock face -->
  <circle cx="12" cy="13" r="8"/>
  <!-- Clock hands -->
  <polyline points="12 9 12 13 15.5 14.5"/>
  <!-- Counter-clockwise arrow at top -->
  <path d="M12 5V2"/>
  <path d="M5.6 7.6L3.5 5.5"/>
  <polyline points="3.5 8.5 3.5 5.5 6.5 5.5"/>`
      },
      {
        name: 'icon-cooloff',
        desc: 'Snowflake — cooling off period',
        usage: 'Cool-off period, take a break, time-out',
        inner: `  <!-- Vertical axis -->
  <line x1="12" y1="2" x2="12" y2="22"/>
  <!-- Horizontal axis -->
  <line x1="2" y1="12" x2="22" y2="12"/>
  <!-- Diagonal axis 1 -->
  <line x1="5" y1="5" x2="19" y2="19"/>
  <!-- Diagonal axis 2 -->
  <line x1="19" y1="5" x2="5" y2="19"/>
  <!-- Branches -->
  <polyline points="10 4 12 2 14 4"/>
  <polyline points="10 20 12 22 14 20"/>
  <polyline points="4 10 2 12 4 14"/>
  <polyline points="20 10 22 12 20 14"/>`
      },
      {
        name: 'icon-budget',
        desc: 'Dollar in circle — entertainment budget',
        usage: 'Entertainment budget, spending limits, bankroll',
        inner: `  <!-- Circle -->
  <circle cx="12" cy="12" r="9"/>
  <!-- Dollar sign -->
  <path d="M12 6v12"/>
  <path d="M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2-3 2.5-3 1.1-3 2.5 1.3 2.5 3 2.5 3-1.1 3-2.5"/>`
      },
      /* ── Existing icons (kept) ────────── */
      {
        name: 'icon-timer',
        desc: 'Timer/clock — session awareness',
        usage: 'Session awareness, play duration',
        inner: `  <!-- Clock face -->
  <circle cx="12" cy="13" r="8"/>
  <!-- Clock hands -->
  <polyline points="12 9 12 13 15 15"/>
  <!-- Top knob -->
  <line x1="12" y1="2" x2="12" y2="5"/>
  <!-- Top wings -->
  <line x1="9" y1="2" x2="15" y2="2"/>`
      },
      {
        name: 'icon-limit',
        desc: 'Gauge — deposit/loss/wagering limits',
        usage: 'Deposit limits, loss limits, wagering limits',
        inner: `  <!-- Gauge arc -->
  <path d="M4.2 16.5A9 9 0 0 1 12 3a9 9 0 0 1 7.8 13.5"/>
  <!-- Gauge base line -->
  <line x1="3" y1="19" x2="21" y2="19"/>
  <!-- Needle -->
  <line x1="12" y1="12" x2="16.5" y2="7.5"/>
  <!-- Center dot -->
  <circle cx="12" cy="12" r="1"/>
  <!-- Tick marks -->
  <line x1="5.5" y1="16" x2="6.5" y2="15"/>
  <line x1="4.5" y1="12" x2="5.5" y2="12"/>
  <line x1="6" y1="8" x2="7" y2="8.5"/>
  <line x1="9" y1="5.5" x2="9.5" y2="6.5"/>
  <line x1="14.5" y1="5.5" x2="14" y2="6.5"/>
  <line x1="17.5" y1="8" x2="17" y2="8.5"/>
  <line x1="19.5" y1="12" x2="18.5" y2="12"/>
  <line x1="18.5" y1="16" x2="17.5" y2="15"/>`
      },
      {
        name: 'icon-pause',
        desc: 'Pause — take a break',
        usage: 'Take a break, cool-off',
        inner: `  <!-- Left bar -->
  <line x1="8" y1="5" x2="8" y2="19"/>
  <!-- Right bar -->
  <line x1="16" y1="5" x2="16" y2="19"/>`
      },
      {
        name: 'icon-calendar',
        desc: 'Calendar — scheduling',
        usage: 'Session scheduling, cool-off duration',
        inner: `  <!-- Calendar body -->
  <rect x="3" y="4" width="18" height="17" rx="2" ry="2"/>
  <!-- Header line -->
  <line x1="3" y1="9" x2="21" y2="9"/>
  <!-- Binding rings -->
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <!-- Date dots -->
  <line x1="8" y1="13" x2="8" y2="13"/>
  <line x1="12" y1="13" x2="12" y2="13"/>
  <line x1="16" y1="13" x2="16" y2="13"/>
  <line x1="8" y1="17" x2="8" y2="17"/>
  <line x1="12" y1="17" x2="12" y2="17"/>`
      },
      {
        name: 'icon-shield',
        desc: 'Shield — account security',
        usage: 'Account security, self-exclusion',
        inner: `  <path d="M12 2l8 4v5c0 5.5-3.4 10.3-8 12-4.6-1.7-8-6.5-8-12V6l8-4z"/>
  <!-- Checkmark inside shield -->
  <polyline points="9 12 11 14 15 10"/>`
      },
      {
        name: 'icon-person',
        desc: 'Person — player profile',
        usage: 'Player profile, account settings',
        inner: `  <!-- Head -->
  <circle cx="12" cy="7" r="4"/>
  <!-- Body -->
  <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>`
      },
      {
        name: 'icon-check',
        desc: 'Checkmark — confirmation',
        usage: 'Confirmation, positive actions, quiz correct',
        inner: `  <polyline points="4 12 9 17 20 6"/>`
      },
      {
        name: 'icon-activity',
        desc: 'Chart/graph — activity tracking',
        usage: 'Activity tracking, play history, stats',
        inner: `  <!-- Axes -->
  <line x1="4" y1="4" x2="4" y2="20"/>
  <line x1="4" y1="20" x2="20" y2="20"/>
  <!-- Bars -->
  <line x1="8" y1="20" x2="8" y2="12"/>
  <line x1="12" y1="20" x2="12" y2="8"/>
  <line x1="16" y1="20" x2="16" y2="14"/>`
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
        inner: `  <!-- Circle -->
  <circle cx="12" cy="12" r="9"/>
  <!-- Question mark -->
  <path d="M9 9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 2-3 2-3 4"/>
  <!-- Dot -->
  <line x1="12" y1="17" x2="12" y2="17"/>`
      },
      {
        name: 'icon-myth',
        desc: 'Strikethrough / X-mark',
        usage: 'Myth-busting, false claims, misconceptions',
        inner: `  <!-- Circle -->
  <circle cx="12" cy="12" r="9"/>
  <!-- X mark -->
  <line x1="8" y1="8" x2="16" y2="16"/>
  <line x1="16" y1="8" x2="8" y2="16"/>`
      },
      {
        name: 'icon-fact',
        desc: 'Checkmark in circle',
        usage: 'Facts, verified info, correct answers',
        inner: `  <!-- Circle -->
  <circle cx="12" cy="12" r="9"/>
  <!-- Checkmark -->
  <polyline points="8 12 11 15 16 9"/>`
      },
      {
        name: 'icon-book',
        desc: 'Open book — educational',
        usage: 'Educational content, guides, learning',
        inner: `  <!-- Left page -->
  <path d="M2 4c0 0 2.5-1 5.5-1S12 4 12 4v16s-2.5-1-5.5-1S2 20 2 20V4z"/>
  <!-- Right page -->
  <path d="M22 4c0 0-2.5-1-5.5-1S12 4 12 4v16s2.5-1 5.5-1 5.5 1 5.5 1V4z"/>`
      },
      {
        name: 'icon-video',
        desc: 'Play button in rectangle',
        usage: 'Video content, tutorials, explainers',
        inner: `  <!-- Screen -->
  <rect x="2" y="4" width="20" height="14" rx="2"/>
  <!-- Play triangle -->
  <path d="M10 8.5l5 3.5-5 3.5V8.5z"/>
  <!-- Stand -->
  <line x1="8" y1="21" x2="16" y2="21"/>
  <line x1="12" y1="18" x2="12" y2="21"/>`
      },
      {
        name: 'icon-article',
        desc: 'Document with lines',
        usage: 'Articles, blog posts, written content',
        inner: `  <!-- Page -->
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <polyline points="14 2 14 8 20 8"/>
  <!-- Text lines -->
  <line x1="8" y1="13" x2="16" y2="13"/>
  <line x1="8" y1="17" x2="13" y2="17"/>`
      },
      /* ── Existing ────────── */
      {
        name: 'icon-smart',
        desc: 'Lightbulb — game IQ',
        usage: 'Myth-busting, game IQ, quiz',
        inner: `  <!-- Bulb -->
  <path d="M9 18h6"/>
  <path d="M10 21h4"/>
  <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>`
      },
      {
        name: 'icon-info',
        desc: 'Info circle — tips and explainers',
        usage: 'Educational content, tips, explainers',
        inner: `  <!-- Circle -->
  <circle cx="12" cy="12" r="9"/>
  <!-- Dot of the i -->
  <circle cx="12" cy="8" r="0.5"/>
  <!-- Stem of the i -->
  <line x1="12" y1="11" x2="12" y2="16"/>`
      },
    ],
  },
  {
    name: 'Social & Sharing',
    icons: [
      {
        name: 'icon-challenge',
        desc: 'Crossed swords — vs / challenge',
        usage: 'Challenges, versus mode, competitions',
        inner: `  <!-- Sword 1 (left to right) -->
  <line x1="5" y1="5" x2="19" y2="19"/>
  <line x1="5" y1="5" x2="9" y2="5"/>
  <line x1="5" y1="5" x2="5" y2="9"/>
  <!-- Sword 2 (right to left) -->
  <line x1="19" y1="5" x2="5" y2="19"/>
  <line x1="19" y1="5" x2="15" y2="5"/>
  <line x1="19" y1="5" x2="19" y2="9"/>`
      },
      {
        name: 'icon-leaderboard',
        desc: 'Podium — ranking',
        usage: 'Leaderboards, rankings, top players',
        inner: `  <!-- 1st place (center, tallest) -->
  <rect x="8" y="4" width="5" height="13"/>
  <!-- 2nd place (left) -->
  <rect x="2" y="9" width="6" height="8"/>
  <!-- 3rd place (right) -->
  <rect x="13" y="12" width="6" height="5"/>
  <!-- Base -->
  <line x1="2" y1="17" x2="22" y2="17"/>
  <!-- Medal indicators -->
  <line x1="10.5" y1="7" x2="10.5" y2="7"/>
  <line x1="5" y1="11.5" x2="5" y2="11.5"/>
  <line x1="16" y1="14" x2="16" y2="14"/>
  <!-- Podium base -->
  <line x1="2" y1="20" x2="22" y2="20"/>`
      },
      {
        name: 'icon-group',
        desc: 'Multiple people',
        usage: 'Groups, social features, community',
        inner: `  <!-- Person 1 (center front) -->
  <circle cx="12" cy="7" r="3"/>
  <path d="M7 21a5 5 0 0 1 10 0"/>
  <!-- Person 2 (left back) -->
  <circle cx="5" cy="8" r="2.5"/>
  <path d="M1 20a4.5 4.5 0 0 1 7 0"/>
  <!-- Person 3 (right back) -->
  <circle cx="19" cy="8" r="2.5"/>
  <path d="M16 20a4.5 4.5 0 0 1 7 0"/>`
      },
      {
        name: 'icon-link',
        desc: 'Chain link',
        usage: 'Links, URLs, connections',
        inner: `  <!-- Link 1 -->
  <path d="M10 14a5 5 0 0 1-1.4-7.4l2.8-2.8a5 5 0 0 1 7.1 7.1l-1.4 1.4"/>
  <!-- Link 2 -->
  <path d="M14 10a5 5 0 0 1 1.4 7.4l-2.8 2.8a5 5 0 0 1-7.1-7.1l1.4-1.4"/>`
      },
      {
        name: 'icon-qr',
        desc: 'QR code',
        usage: 'QR codes, scan to access, mobile linking',
        inner: `  <!-- Top-left block -->
  <rect x="3" y="3" width="7" height="7"/>
  <rect x="5" y="5" width="3" height="3"/>
  <!-- Top-right block -->
  <rect x="14" y="3" width="7" height="7"/>
  <rect x="16" y="5" width="3" height="3"/>
  <!-- Bottom-left block -->
  <rect x="3" y="14" width="7" height="7"/>
  <rect x="5" y="16" width="3" height="3"/>
  <!-- Data area -->
  <line x1="14" y1="14" x2="14" y2="17"/>
  <line x1="17" y1="14" x2="21" y2="14"/>
  <line x1="17" y1="17" x2="17" y2="21"/>
  <line x1="21" y1="17" x2="21" y2="21"/>`
      },
      /* ── Existing ────────── */
      {
        name: 'icon-share',
        desc: 'Share — social sharing',
        usage: 'Social sharing, challenge friends',
        inner: `  <!-- Box -->
  <path d="M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>
  <!-- Arrow shaft -->
  <line x1="12" y1="3" x2="12" y2="15"/>
  <!-- Arrow head -->
  <polyline points="8 7 12 3 16 7"/>`
      },
      {
        name: 'icon-score',
        desc: 'Trophy — achievements',
        usage: 'Quiz results, achievements, game IQ score',
        inner: `  <!-- Trophy cup -->
  <path d="M8 4h8v6a4 4 0 0 1-8 0V4z"/>
  <!-- Left handle -->
  <path d="M8 6H5a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h1"/>
  <!-- Right handle -->
  <path d="M16 6h3a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-1"/>
  <!-- Stem -->
  <line x1="12" y1="14" x2="12" y2="18"/>
  <!-- Base -->
  <path d="M8 21h8"/>
  <path d="M10 18h4v3h-4z"/>`
      },
    ],
  },
  {
    name: 'Support & Safety',
    icons: [
      {
        name: 'icon-heart',
        desc: 'Heart — wellbeing',
        usage: 'Wellbeing, self-care, mental health',
        inner: `  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>`
      },
      {
        name: 'icon-warning',
        desc: 'Triangle exclamation — warning',
        usage: 'Warnings, alerts, caution, risk',
        inner: `  <!-- Triangle -->
  <path d="M10.3 3.9L1.7 18.3a2 2 0 0 0 1.7 3h17.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>
  <!-- Exclamation -->
  <line x1="12" y1="9" x2="12" y2="14"/>
  <line x1="12" y1="17" x2="12" y2="17"/>`
      },
      {
        name: 'icon-help',
        desc: 'Question circle with lifeline',
        usage: 'Help resources, support services, crisis lines',
        inner: `  <!-- Circle -->
  <circle cx="12" cy="12" r="9"/>
  <!-- Question mark -->
  <path d="M9 9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 2-3 2-3 4"/>
  <line x1="12" y1="17" x2="12" y2="17"/>
  <!-- Lifeline pulse -->
  <path d="M3 12h2l1.5-3 2 6 1.5-3h2"/>`
      },
      {
        name: 'icon-external',
        desc: 'External link arrow',
        usage: 'External links, leaving site, third-party resources',
        inner: `  <!-- Box -->
  <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>
  <!-- Arrow -->
  <polyline points="15 3 21 3 21 9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>`
      },
      /* ── Existing ────────── */
      {
        name: 'icon-chat',
        desc: 'Chat bubble — support',
        usage: 'Live chat, support conversation',
        inner: `  <!-- Chat bubble -->
  <path d="M21 12a9 9 0 0 1-9 9 9.1 9.1 0 0 1-4.9-1.4L3 21l1.4-4.1A9 9 0 1 1 21 12z"/>`
      },
      {
        name: 'icon-phone',
        desc: 'Phone — helpline',
        usage: 'Helpline number, call for support',
        inner: `  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7 12.7 12.7 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5 12.7 12.7 0 0 0 2.8.7A2 2 0 0 1 22 16.9z"/>`
      },
      {
        name: 'icon-playbook',
        desc: 'Playbook — brand mark',
        usage: 'Brand identifier, navigation, home',
        inner: `  <!-- Open book -->
  <path d="M2 4c0 0 2.5-1 5.5-1S12 4 12 4s2.5-1 5.5-1S22 4 22 4v14c0 0-2.5-1-5.5-1s-4.5 1-4.5 1-2.5-1-5.5-1S2 18 2 18V4z"/>
  <line x1="12" y1="4" x2="12" y2="18"/>
  <!-- Play/strategy triangle on right page -->
  <path d="M15.5 9l3 2-3 2V9z"/>`
      },
    ],
  },
];

/* ─── Generate individual SVG files ──────────────────────────────────── */

let totalCount = 0;

for (const cat of categories) {
  for (const icon of cat.icons) {
    const content = svg(icon.inner);
    writeFileSync(join(ICONS_DIR, `${icon.name}.svg`), content, 'utf-8');
    totalCount++;
  }
}

console.log(`✓ Generated ${totalCount} SVG icons in visual-identity/iconography/icons/`);

/* ─── Generate icon-preview.html ─────────────────────────────────────── */

const sizes = [16, 24, 32, 48];

const previewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Playbook Icon Library — Preview</title>
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
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
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
      margin-bottom: .5rem;
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
      align-items: center;
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
  <p class="subtitle">48 icons across 6 categories — outlined style, 1.5px stroke, round caps/joins</p>
  <div class="stats">
    <div class="stat"><strong>${totalCount}</strong><span>Total icons</span></div>
    <div class="stat"><strong>6</strong><span>Categories</span></div>
    <div class="stat"><strong>4</strong><span>Size variants</span></div>
  </div>
${categories.map(cat => `
  <h2>${cat.name} (${cat.icons.length})</h2>
  <div class="grid">
${cat.icons.map(icon => {
  const innerSvg = icon.inner;
  const sizeBoxes = sizes.map(s =>
    `        <div class="size-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\n${innerSvg}\n          </svg>
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
console.log(`✓ Generated icon-preview.html`);

/* ─── Summary ─────────────────────────────────────────────────────────── */

console.log(`\nIcon breakdown:`);
for (const cat of categories) {
  console.log(`  ${cat.name}: ${cat.icons.length} icons`);
}
console.log(`\nTotal: ${totalCount} icons`);
