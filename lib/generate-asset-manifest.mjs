/**
 * generate-asset-manifest.mjs — Generate asset manifest (api/assets.json)
 *
 * Scans all asset directories and builds a JSON catalog of logos, icons,
 * collateral renders, and photography with URLs, file metadata, and categories.
 *
 * Usage: node lib/generate-asset-manifest.mjs
 */

import { readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const API_DIR = join(ROOT, 'api');

mkdirSync(API_DIR, { recursive: true });

const BASE_URL = '/tools/playbook';
const generated = new Date().toISOString();

console.log('📦 Generating asset manifest...\n');

// ─── 1. Logos ───────────────────────────────────────────────
const logoDir = join(ROOT, 'visual-identity', 'logo');
const logos = [];

const logoSubdirs = {
  primary: { variant: 'primary', usage: 'Primary logo for main branding' },
  secondary: { variant: 'secondary', usage: 'Mono/reversed variants for alternate contexts' },
  favicon: { variant: 'favicon', usage: 'Browser favicon and app icons' },
  'helpline-badge': { variant: 'helpline-badge', usage: 'Helpline display badge for templates' },
};

for (const [subdir, meta] of Object.entries(logoSubdirs)) {
  const dir = join(logoDir, subdir);
  try {
    const files = readdirSync(dir).filter(f => f.endsWith('.svg'));
    for (const file of files) {
      const stat = statSync(join(dir, file));
      const id = basename(file, '.svg');

      logos.push({
        id,
        filename: file,
        url: `${BASE_URL}/brand-book/assets/logos/${file}`,
        sourceUrl: `visual-identity/logo/${subdir}/${file}`,
        format: 'svg',
        fileSize: stat.size,
        category: 'logos',
        variant: meta.variant,
        colorMode: inferColorMode(id),
        usage: meta.usage,
      });
    }
  } catch (e) {
    if (e.code !== 'ENOENT') {
      console.warn(`⚠ Could not read ${dir}: ${e.message}`);
    }
  }
}

console.log(`  ✅ logos — ${logos.length} assets`);

// ─── 2. Icons ───────────────────────────────────────────────
const iconDir = join(ROOT, 'visual-identity', 'iconography', 'icons');
const icons = [];

const iconTags = {
  'roulette': ['game', 'table-games'],
  'slots': ['game', 'electronic'],
  'cards': ['game', 'table-games'],
  'dice': ['game', 'table-games'],
  'sports': ['game', 'sports'],
  'lottery': ['game', 'lottery'],
  'horse': ['game', 'racing'],
  'bingo': ['game', 'electronic'],
  'edge': ['math', 'odds'],
  'rtp': ['math', 'odds'],
  'equal': ['math', 'odds'],
  'budget': ['tool', 'player-tools'],
  'timer': ['tool', 'player-tools'],
  'bell': ['tool', 'notification'],
  'activity': ['tool', 'player-tools'],
  'check': ['ui', 'general'],
  'challenge': ['social', 'engagement'],
  'share': ['social', 'engagement'],
  'shield': ['safety', 'compliance'],
  'lock': ['safety', 'compliance'],
  'chat': ['support', 'help'],
  'phone': ['support', 'help'],
  'external': ['ui', 'navigation'],
  'download': ['ui', 'navigation'],
  'star': ['ui', 'general'],
  'trophy': ['social', 'engagement'],
  'info': ['ui', 'general'],
  'question': ['ui', 'general'],
  'myth': ['content', 'education'],
  'quiz': ['content', 'engagement'],
  'book': ['content', 'education'],
};

try {
  const files = readdirSync(iconDir).filter(f => f.endsWith('.svg'));
  for (const file of files) {
    const stat = statSync(join(iconDir, file));
    const id = basename(file, '.svg');
    const shortName = id.replace(/^icon-/, '');

    // Find best tag match
    const tags = Object.entries(iconTags)
      .filter(([key]) => shortName.includes(key))
      .flatMap(([, tags]) => tags);

    icons.push({
      id,
      filename: file,
      url: `${BASE_URL}/brand-book/assets/icons/${file}`,
      sourceUrl: `visual-identity/iconography/icons/${file}`,
      format: 'svg',
      fileSize: stat.size,
      category: 'icons',
      tags: tags.length > 0 ? [...new Set(tags)] : ['general'],
    });
  }
} catch (e) {
  console.error(`  ❌ icons — ${e.message}`);
}

console.log(`  ✅ icons — ${icons.length} assets`);

// ─── 3. Collateral Renders ──────────────────────────────────
const renderDir = join(ROOT, 'collateral', 'render');
const collateral = [];

const subcategoryPatterns = {
  'card-': { subcategory: 'social-cards', channel: ['instagram', 'twitter', 'facebook'], dimensions: { width: 1080, height: 1080 } },
  'story-': { subcategory: 'stories', channel: ['instagram-stories', 'tiktok'], dimensions: { width: 1080, height: 1920 } },
  'poster-': { subcategory: 'posters', channel: ['print', 'digital-signage'], dimensions: { width: 1800, height: 2400 } },
  'email-': { subcategory: 'email', channel: ['email'], dimensions: { width: 600, height: null } },
  'brochure-': { subcategory: 'print', channel: ['print'], dimensions: { width: 2400, height: 1000 } },
  'sign-': { subcategory: 'venue-signage', channel: ['print', 'digital-signage'], dimensions: null },
  'display-': { subcategory: 'digital-display', channel: ['digital-signage', 'venue'], dimensions: null },
  'rack-': { subcategory: 'print', channel: ['print'], dimensions: null },
  'tent-': { subcategory: 'print', channel: ['print'], dimensions: null },
  'helpline-': { subcategory: 'print', channel: ['print', 'venue'], dimensions: null },
  'htp-': { subcategory: 'how-to-play', channel: ['print', 'digital'], dimensions: { width: 1080, height: 1080 } },
  'odds-': { subcategory: 'infographic', channel: ['social-media', 'print'], dimensions: null },
  't2-': { subcategory: 'tier-2-support', channel: ['in-app', 'email', 'print'], dimensions: null },
  'session-': { subcategory: 'tier-2-support', channel: ['in-app'], dimensions: null },
  'cooldown-': { subcategory: 'tier-2-support', channel: ['in-app'], dimensions: null },
  'exclusion-': { subcategory: 'tier-2-support', channel: ['in-app', 'print'], dimensions: null },
};

try {
  const files = readdirSync(renderDir).filter(f => f.endsWith('.png'));
  for (const file of files) {
    const stat = statSync(join(renderDir, file));
    const id = basename(file, '.png');

    // Determine subcategory
    let meta = { subcategory: 'other', channel: [], dimensions: null };
    for (const [prefix, m] of Object.entries(subcategoryPatterns)) {
      if (file.startsWith(prefix)) {
        meta = m;
        break;
      }
    }

    collateral.push({
      id,
      filename: file,
      url: `${BASE_URL}/assets/renders/${file}`,
      sourceUrl: `collateral/render/${file}`,
      format: 'png',
      fileSize: stat.size,
      category: 'collateral',
      subcategory: meta.subcategory,
      channel: meta.channel,
      dimensions: meta.dimensions,
    });
  }
} catch (e) {
  console.error(`  ❌ collateral — ${e.message}`);
}

console.log(`  ✅ collateral — ${collateral.length} assets`);

// ─── 4. Photography ─────────────────────────────────────────
const photoDir = join(ROOT, 'visual-identity', 'photography', 'references');
const photography = [];

try {
  const files = readdirSync(photoDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  for (const file of files) {
    const stat = statSync(join(photoDir, file));
    const id = basename(file, extname(file));

    photography.push({
      id,
      filename: file,
      url: `${BASE_URL}/brand-book/assets/photography/${file}`,
      sourceUrl: `visual-identity/photography/references/${file}`,
      format: extname(file).slice(1).toLowerCase(),
      fileSize: stat.size,
      category: 'photography',
      quality: id.includes('-good') ? 'recommended' : 'avoid',
    });
  }
} catch (e) {
  console.error(`  ❌ photography — ${e.message}`);
}

console.log(`  ✅ photography — ${photography.length} assets`);

// ─── Write manifest ─────────────────────────────────────────
const totalAssets = logos.length + icons.length + collateral.length + photography.length;

const manifest = {
  meta: {
    totalAssets,
    generated,
    version: '0.1.0',
    baseUrl: BASE_URL,
    description: 'Complete catalog of Playbook brand assets. All assets are CC0-licensed.',
  },
  categories: {
    logos: { count: logos.length, assets: logos },
    icons: { count: icons.length, assets: icons },
    collateral: { count: collateral.length, assets: collateral },
    photography: { count: photography.length, assets: photography },
  },
};

writeFileSync(join(API_DIR, 'assets.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf-8');

console.log(`\n✅ Asset manifest generated → api/assets.json (${totalAssets} assets)`);

// ─── Helpers ────────────────────────────────────────────────

function inferColorMode(filename) {
  if (filename.includes('reversed')) return 'reversed';
  if (filename.includes('mono-white')) return 'mono-white';
  if (filename.includes('mono-dark')) return 'mono-dark';
  if (filename.includes('on-light')) return 'on-light';
  if (filename.includes('full-color')) return 'full-color';
  return 'default';
}
