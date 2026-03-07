/**
 * generate-content-api.mjs — Orchestrator for Playbook Content API
 *
 * Reads all content sources, runs parsers, and writes structured JSON files
 * to the api/ directory. These static JSON files serve as the Content API
 * for operators integrating Playbook into their systems.
 *
 * Usage: node lib/generate-content-api.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadBrand } from './brand-config.mjs';
import { parseMessages } from './parsers/parse-messages.mjs';
import { parseMyths } from './parsers/parse-myths.mjs';
import { parseCTAs } from './parsers/parse-ctas.mjs';
import { parseCampaigns } from './parsers/parse-campaigns.mjs';
import { parseAllGames } from './parsers/parse-games.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const API_DIR = join(ROOT, 'api');
const GAMES_DIR = join(API_DIR, 'games');

// ─── Ensure output directories exist ────────────────────────
mkdirSync(API_DIR, { recursive: true });
mkdirSync(GAMES_DIR, { recursive: true });

const generated = new Date().toISOString();
const version = '0.1.0';
const errors = [];

console.log('📦 Generating Playbook Content API...\n');

// ─── 1. Messages ────────────────────────────────────────────
try {
  const messagesPath = join(ROOT, 'messaging', 'core-messages.md');
  const { frontmatter, messages } = parseMessages(messagesPath);

  const output = {
    meta: { count: messages.length, generated, version, source: 'messaging/core-messages.md' },
    frontmatter,
    messages,
  };

  writeJSON(join(API_DIR, 'messages.json'), output);
  console.log(`  ✅ messages.json — ${messages.length} messages`);
} catch (e) {
  errors.push(`messages: ${e.message}`);
  console.error(`  ❌ messages.json — ${e.message}`);
}

// ─── 2. Myths ───────────────────────────────────────────────
try {
  const mythsPath = join(ROOT, 'messaging', 'myth-busting.md');
  const { frontmatter, myths } = parseMyths(mythsPath);

  const output = {
    meta: { count: myths.length, generated, version, source: 'messaging/myth-busting.md' },
    frontmatter,
    myths,
  };

  writeJSON(join(API_DIR, 'myths.json'), output);
  console.log(`  ✅ myths.json — ${myths.length} myths`);
} catch (e) {
  errors.push(`myths: ${e.message}`);
  console.error(`  ❌ myths.json — ${e.message}`);
}

// ─── 3. CTAs ────────────────────────────────────────────────
try {
  const ctasPath = join(ROOT, 'messaging', 'calls-to-action.md');
  const { frontmatter, sections } = parseCTAs(ctasPath);
  const totalCTAs = sections.reduce((sum, s) => sum + s.ctas.length, 0);

  const output = {
    meta: { count: totalCTAs, sections: sections.length, generated, version, source: 'messaging/calls-to-action.md' },
    frontmatter,
    sections,
  };

  writeJSON(join(API_DIR, 'ctas.json'), output);
  console.log(`  ✅ ctas.json — ${totalCTAs} CTAs in ${sections.length} sections`);
} catch (e) {
  errors.push(`ctas: ${e.message}`);
  console.error(`  ❌ ctas.json — ${e.message}`);
}

// ─── 4. Campaigns ───────────────────────────────────────────
try {
  const campaignsPath = join(ROOT, 'messaging', 'campaigns.md');
  const { frontmatter, campaigns } = parseCampaigns(campaignsPath);

  const output = {
    meta: { count: campaigns.length, generated, version, source: 'messaging/campaigns.md' },
    frontmatter,
    campaigns,
  };

  writeJSON(join(API_DIR, 'campaigns.json'), output);
  console.log(`  ✅ campaigns.json — ${campaigns.length} campaigns`);
} catch (e) {
  errors.push(`campaigns: ${e.message}`);
  console.error(`  ❌ campaigns.json — ${e.message}`);
}

// ─── 5. Game Guides ─────────────────────────────────────────
try {
  const gamesPath = join(ROOT, 'how-to-play');
  if (existsSync(gamesPath)) {
    const games = parseAllGames(gamesPath);

    for (const game of games) {
      const gameOutput = {
        meta: { game: game.slug, generated, version, source: `how-to-play/${game.slug}.md` },
        ...game,
      };
      writeJSON(join(GAMES_DIR, `${game.slug}.json`), gameOutput);
    }

    // Write games index
    const gamesIndex = games.map(g => ({
      slug: g.slug,
      title: g.title,
      url: `games/${g.slug}.json`,
      sections: g.sections.length,
      keyTerms: g.keyTerms.length,
      quizQuestions: g.quiz.length,
      socialSnippets: g.socialSnippets.length,
    }));

    console.log(`  ✅ games/ — ${games.length} game guides`);
  } else {
    console.log('  ⚠️  how-to-play/ directory not found — skipping games');
  }
} catch (e) {
  errors.push(`games: ${e.message}`);
  console.error(`  ❌ games/ — ${e.message}`);
}

// ─── 6. Master Index ────────────────────────────────────────
try {
  const brand = loadBrand();

  const index = {
    name: 'Playbook Content API',
    version,
    generated,
    license: 'CC0-1.0',
    description: 'Structured content feeds for the Playbook responsible gambling brand system. All content is CC0-licensed and free to use.',
    endpoints: {
      messages: { url: 'messages.json', description: 'Core messages by pillar and touchpoint' },
      myths: { url: 'myths.json', description: 'Myth-busting content in 3 formats (social card, article, quiz)' },
      ctas: { url: 'ctas.json', description: 'Calls-to-action by function and urgency level' },
      campaigns: { url: 'campaigns.json', description: 'Ready-to-run campaign briefs with schedules' },
      assets: { url: 'assets.json', description: 'Asset manifest with URLs, dimensions, and metadata' },
      games: { url: 'games/', description: 'Game education guides (one JSON file per game)' },
    },
    brand: {
      programName: brand.meta?.program_name || 'Playbook',
      organization: brand.meta?.organization || '',
      colors: {
        primary: brand.colorsHex().navy || '#1B2838',
        secondary: brand.colorsHex().teal || '#00D4AA',
        accent: brand.colorsHex().orange || '#FF6B35',
      },
      helpline: brand.helpline(),
      fonts: brand.fontFamilies(),
    },
    tokens: [
      '{{PROGRAM_NAME}}',
      '{{ORGANIZATION}}',
      '{{HELPLINE_NUMBER}}',
      '{{TEXT_NUMBER}}',
      '{{CHAT_URL}}',
      '{{MIN_AGE}}',
    ],
    tokenDescription: 'Content contains placeholder tokens in {{DOUBLE_BRACES}}. Replace with your operator values before deploying.',
  };

  writeJSON(join(API_DIR, 'index.json'), index);
  console.log(`  ✅ index.json — master catalog`);
} catch (e) {
  errors.push(`index: ${e.message}`);
  console.error(`  ❌ index.json — ${e.message}`);
}

// ─── Summary ────────────────────────────────────────────────
console.log('');
if (errors.length > 0) {
  console.error(`⚠️  Completed with ${errors.length} error(s):`);
  errors.forEach(e => console.error(`   - ${e}`));
  process.exit(1);
} else {
  console.log('✅ Content API generated successfully → api/');
}

// ─── Helpers ────────────────────────────────────────────────

function writeJSON(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf-8');
}
