/**
 * render-htp-canvas.mjs — Renders HTP card PNGs using node-canvas (no browser required).
 *
 * Produces pixel-accurate reproductions of the 5 HTP HTML templates using
 * the brand color palette from _brand.yml / brand-inject.css.
 *
 * Usage:  node render-htp-canvas.mjs
 */

import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Brand palette (from brand-inject.css)
const C = {
  primary:       '#1B2838',
  primaryLight:  '#2A3F56',
  primaryDark:   '#0F1923',
  secondary:     '#00D4AA',
  accent:        '#FF6B35',
  neutral300:    '#A8A8C0',
  neutral500:    '#6B6B8A',
  white:         '#FFFFFF',
};

// Font fallbacks (use Liberation Sans — metrically similar to Inter)
const FONT_HEADING  = '"Liberation Sans", "DejaVu Sans", sans-serif';
const FONT_BODY     = '"Liberation Sans", "DejaVu Sans", sans-serif';
const FONT_MONO     = '"Liberation Mono", "DejaVu Sans Mono", monospace';

const W = 1080, H = 1080;
const PAD_X = 64;

// ─── Helpers ────────────────────────────────────────────

function drawGradientBar(ctx) {
  const grad = ctx.createLinearGradient(0, 0, W, 0);
  grad.addColorStop(0, C.accent);
  grad.addColorStop(1, C.secondary);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, 8);
}

function drawGridOverlay(ctx) {
  ctx.strokeStyle = 'rgba(255,255,255,0.02)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 60) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y <= H; y += 60) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
}

function drawHeader(ctx) {
  // Logo: Play + BOOK
  const logoY = 80;
  ctx.font = `800 32px ${FONT_HEADING}`;
  ctx.fillStyle = C.white;
  ctx.fillText('Play', PAD_X, logoY);
  const playW = ctx.measureText('Play').width;
  ctx.font = `300 32px ${FONT_HEADING}`;
  ctx.fillStyle = C.secondary;
  ctx.fillText('BOOK', PAD_X + playW + 2, logoY);

  // Pillar badge — teal pill with "OPEN" in navy
  ctx.font = `700 16px ${FONT_HEADING}`;
  const pillText = 'OPEN';
  const pillW = ctx.measureText(pillText).width;
  const badgeW = pillW + 40;
  const badgeH = 34;
  const badgeX = W - PAD_X - badgeW;
  const badgeY = logoY - 24;
  ctx.fillStyle = C.secondary;
  roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 17);
  ctx.fill();
  ctx.fillStyle = C.primary;
  ctx.textAlign = 'center';
  ctx.fillText(pillText, badgeX + badgeW / 2, badgeY + 23);
  ctx.textAlign = 'left';
}

function drawFooter(ctx, helplineText, legalText) {
  const footH = 60;
  const footY = H - footH;
  ctx.fillStyle = C.primaryLight;
  ctx.fillRect(0, footY, W, footH);

  ctx.font = `700 16px ${FONT_MONO}`;
  ctx.fillStyle = C.white;
  ctx.fillText(helplineText, PAD_X, footY + 37);

  ctx.font = `400 13px ${FONT_BODY}`;
  ctx.fillStyle = C.neutral300;
  const legW = ctx.measureText(legalText).width;
  ctx.fillText(legalText, W - PAD_X - legW, footY + 37);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let curY = y;
  for (const word of words) {
    const test = line + word + ' ';
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line.trim(), x, curY);
      line = word + ' ';
      curY += lineHeight;
    } else {
      line = test;
    }
  }
  if (line.trim()) ctx.fillText(line.trim(), x, curY);
  return curY;
}

// Draw text with bold segments marked by **...**
function drawRichText(ctx, text, x, y, maxWidth, lineHeight, normalFont, boldFont, normalColor, boldColor) {
  // Split on **...** patterns
  const parts = [];
  const re = /\*\*(.+?)\*\*/g;
  let lastIdx = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIdx) parts.push({ text: text.slice(lastIdx, m.index), bold: false });
    parts.push({ text: m[1], bold: true });
    lastIdx = re.lastIndex;
  }
  if (lastIdx < text.length) parts.push({ text: text.slice(lastIdx), bold: false });

  // Word-wrap across parts
  let curX = x, curY = y;
  for (const part of parts) {
    ctx.font = part.bold ? boldFont : normalFont;
    ctx.fillStyle = part.bold ? boldColor : normalColor;
    const words = part.text.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (!word) continue;
      const wordW = ctx.measureText(word + ' ').width;
      if (curX + wordW > x + maxWidth && curX > x) {
        curX = x;
        curY += lineHeight;
      }
      ctx.fillText(word, curX, curY);
      curX += wordW;
    }
  }
  return curY;
}

// ─── Card data ──────────────────────────────────────────

const gameCards = [
  {
    file: 'htp-card-slots.png',
    label: 'HOW IT WORKS',
    title: 'Slots',
    fact: 'Every spin is decided by a **random number generator** before the reels even move. No memory. No patterns. No hot streaks.',
    statNumber: '2–15%',
    statUnit: ['house edge range', 'check the paytable'],
  },
  {
    file: 'htp-card-blackjack.png',
    label: 'HOW IT WORKS',
    title: 'Blackjack',
    fact: 'The best odds in the casino take **20 minutes to learn**. Basic strategy is the mathematically optimal play for every hand.',
    statNumber: '0.5%',
    statUnit: ['house edge with', 'basic strategy'],
  },
  {
    file: 'htp-card-roulette.png',
    label: 'HOW IT WORKS',
    title: 'Roulette',
    fact: 'One zero or two. That\'s the only decision that matters. European roulette has **half the house edge** of American.',
    statNumber: '2.70%',
    statUnit: ['house edge, European', 'vs. 5.26% American'],
  },
  {
    file: 'htp-card-sports.png',
    label: 'HOW IT WORKS',
    title: 'Sports Betting',
    fact: 'At standard odds, you need to win **more than half** your bets just to break even. The vig is the sportsbook\'s built-in commission.',
    statNumber: '52.4%',
    statUnit: ['break-even win rate', 'at −110 odds'],
  },
];

// ─── Render game cards ──────────────────────────────────

for (const card of gameCards) {
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = C.primary;
  ctx.fillRect(0, 0, W, H);

  drawGridOverlay(ctx);
  drawGradientBar(ctx);
  drawHeader(ctx);

  // Body — vertically centered between header (y=110) and footer (y=1020)
  const bodyY = 380;

  // HTP label
  ctx.font = `700 16px ${FONT_HEADING}`;
  ctx.letterSpacing = '1.6px';
  ctx.fillStyle = C.accent;
  ctx.fillText(card.label, PAD_X, bodyY);

  // Game name
  ctx.font = `800 56px ${FONT_HEADING}`;
  ctx.fillStyle = C.white;
  ctx.fillText(card.title, PAD_X, bodyY + 68);

  // Key fact (rich text with bold)
  const factY = bodyY + 120;
  const lastLineY = drawRichText(
    ctx, card.fact, PAD_X, factY, W - PAD_X * 2, 44,
    `400 28px ${FONT_BODY}`, `600 28px ${FONT_BODY}`,
    C.neutral300, C.secondary
  );

  // Stat block
  const statY = lastLineY + 70;
  ctx.font = `900 80px ${FONT_HEADING}`;
  ctx.fillStyle = C.accent;
  ctx.fillText(card.statNumber, PAD_X, statY);
  const numW = ctx.measureText(card.statNumber).width;

  ctx.font = `600 24px ${FONT_HEADING}`;
  ctx.fillStyle = C.neutral300;
  ctx.fillText(card.statUnit[0], PAD_X + numW + 16, statY - 24);
  ctx.fillText(card.statUnit[1], PAD_X + numW + 16, statY + 4);

  // Footer
  drawFooter(ctx, 'Free support 24/7: 1-800-522-4700', '21+ to gamble');

  writeFileSync(join(__dirname, card.file), canvas.toBuffer('image/png'));
  console.log(`Rendered: ${card.file}`);
}

// ─── Render odds-comparison card ────────────────────────

{
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = C.primary;
  ctx.fillRect(0, 0, W, H);
  drawGridOverlay(ctx);
  drawGradientBar(ctx);
  drawHeader(ctx);

  // Body
  const bodyY = 280;
  ctx.font = `700 16px ${FONT_HEADING}`;
  ctx.fillStyle = C.accent;
  ctx.fillText('KNOW YOUR GAME', PAD_X, bodyY);

  ctx.font = `800 44px ${FONT_HEADING}`;
  ctx.fillStyle = C.white;
  ctx.fillText('Odds at a Glance', PAD_X, bodyY + 58);

  // Table header
  const tableY = bodyY + 100;
  ctx.font = `700 14px ${FONT_HEADING}`;
  ctx.fillStyle = C.neutral500;
  ctx.fillText('GAME', PAD_X, tableY);
  const bestBetText = 'BEST BET';
  const bestBetW = ctx.measureText(bestBetText).width;
  ctx.fillText(bestBetText, W - PAD_X - bestBetW, tableY);

  // Divider
  ctx.strokeStyle = C.primaryLight;
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(PAD_X, tableY + 12); ctx.lineTo(W - PAD_X, tableY + 12); ctx.stroke();

  const rows = [
    ['Blackjack (basic strategy)', '0.5%'],
    ['Baccarat (banker)',          '1.06%'],
    ['Craps (don\'t pass)',        '1.36%'],
    ['Roulette (European)',        '2.70%'],
    ['Sports Betting (std. vig)',  '4.5%'],
    ['Roulette (American)',        '5.26%'],
    ['Slots',                      '2–15%'],
    ['Lottery',                    '40–55%'],
  ];

  let rowY = tableY + 48;
  for (const [game, edge] of rows) {
    ctx.font = `600 22px ${FONT_BODY}`;
    ctx.fillStyle = C.white;
    ctx.fillText(game, PAD_X, rowY);

    ctx.font = `600 22px ${FONT_MONO}`;
    ctx.fillStyle = C.accent;
    const edgeW = ctx.measureText(edge).width;
    ctx.fillText(edge, W - PAD_X - edgeW, rowY);

    // Row divider
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD_X, rowY + 14); ctx.lineTo(W - PAD_X, rowY + 14); ctx.stroke();

    rowY += 48;
  }

  drawFooter(ctx, 'Free support 24/7: 1-800-522-4700', 'House edge = what the house keeps per $100 wagered over time');

  writeFileSync(join(__dirname, 'htp-odds-comparison.png'), canvas.toBuffer('image/png'));
  console.log('Rendered: htp-odds-comparison.png');
}

console.log('Done — 5 HTP PNGs rendered.');
