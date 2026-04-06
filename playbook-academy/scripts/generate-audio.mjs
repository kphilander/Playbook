#!/usr/bin/env node

/**
 * generate-audio.mjs
 *
 * Regenerates MP3 narration files for the intro page using node-edge-tts.
 * Reads transcripts directly from the tracks array (matching index.astro).
 *
 * Usage:
 *   node scripts/generate-audio.mjs
 *
 * Voice: en-US-AndrewNeural — clear, professional, authoritative male
 * Rate:  -10% (moderate, not too fast)
 * No API key required — uses Microsoft Edge's free TTS service.
 */

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const PROJECT_ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const OUTPUT_DIR = join(PROJECT_ROOT, 'public', 'audio');
const MANIFEST_PATH = join(OUTPUT_DIR, 'manifest.json');

const VOICE = 'en-US-AvaNeural';
const OUTPUT_FORMAT = 'audio-24khz-96kbitrate-mono-mp3';
const RATE = '-10%';           // Moderate pace — not too fast
const WORDS_PER_MINUTE = 140;  // Conservative estimate for -10% rate

// ---------------------------------------------------------------------------
// Transcripts (matching the tracks array in src/pages/intro/index.astro)
// ---------------------------------------------------------------------------

const tracks = [
  {
    filename: 'intro-01-welcome.mp3',
    title: 'Welcome',
    transcript: `Welcome to Playbook Academy. Playbook is an open-source, CC0-licensed brand system for gambling entertainment literacy and player education. If you're a copywriter, designer, product manager, or customer service lead about to deploy Playbook, this 30-minute introduction will give you the foundation you need.`,
  },
  {
    filename: 'intro-02-engagement-gap.mp3',
    title: 'The Engagement Gap',
    transcript: `Let's start with the problem. Every gambling operator spends millions on player acquisition — sleek ads, generous bonuses, polished apps. But the player education content? A wall of text buried in the footer, written by compliance, designed by nobody. This is the engagement gap.`,
  },
  {
    filename: 'intro-03-informed-choice.mp3',
    title: 'The Informed Choice Model',
    transcript: `Playbook is built on the Informed Choice Model. Gambling is a complicated product — probability, house edge, variance, game mechanics. Operators understand this math; most players don't. That information gap is what Playbook closes. Four premises: most people gamble without problems, gambling is entertainment with a cost, difficulties arise from lack of information not the activity itself, and responsibility is shared. Compliance, public health, and informed choice aren't competing approaches — they're complementary layers. Playbook operates at the informed choice layer.`,
  },
  {
    filename: 'intro-04-meet-your-players.mp3',
    title: 'Meet Your Players',
    transcript: `Playbook uses six relationship-based player segments — not demographics, but stages in a player's relationship to gambling.`,
  },
  {
    filename: 'intro-05-customer-journey.mp3',
    title: 'The Customer Journey',
    transcript: `Every player moves through five journey phases: Awareness, Onboarding, Active Play, Ongoing Engagement, and Support Seeking. At each phase, different Playbook content serves a different purpose.`,
  },
  {
    filename: 'intro-06-getting-started.mp3',
    title: 'Getting Started',
    transcript: `Here's how to get started. Phase 1, your MVP, ships in 2 to 4 weeks. Start by forking the repo, editing brand.yml, and working through the Academy modules.`,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function estimateDuration(text) {
  const wordCount = text.trim().split(/\s+/).length;
  return Math.round((wordCount / WORDS_PER_MINUTE) * 60 * 10) / 10;
}

/**
 * Parse MP3 frame headers to estimate actual duration from a buffer.
 */
function estimateMp3Duration(buffer) {
  let offset = -1;
  for (let i = 0; i < Math.min(buffer.length, 8192); i++) {
    if (buffer[i] === 0xff && (buffer[i + 1] & 0xe0) === 0xe0) {
      offset = i;
      break;
    }
  }
  if (offset === -1) return null;

  const header = buffer.readUInt32BE(offset);
  const versionBits = (header >> 19) & 0x03;
  const layerBits = (header >> 17) & 0x03;
  const bitrateIndex = (header >> 12) & 0x0f;

  if (bitrateIndex === 0 || bitrateIndex === 15) return null;

  const bitrates = {
    '3-1': [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320],
    '2-1': [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
  };

  const key = `${versionBits}-${layerBits}`;
  const table = bitrates[key];
  if (!table) return null;

  const bitrateKbps = table[bitrateIndex];
  if (!bitrateKbps) return null;

  return Math.round((buffer.length * 8) / (bitrateKbps * 1000) * 10) / 10;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`\n  generate-audio.mjs`);
  console.log(`  Voice:  ${VOICE}`);
  console.log(`  Rate:   ${RATE}`);
  console.log(`  Format: ${OUTPUT_FORMAT}`);
  console.log(`  Engine: Microsoft Edge TTS (free, no API key)\n`);

  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`  Created output directory: ${OUTPUT_DIR}`);
  }

  // Import edge-tts
  const { EdgeTTS } = await import('node-edge-tts');

  const manifest = {};
  let totalSize = 0;
  let totalDuration = 0;

  for (const track of tracks) {
    const outputPath = join(OUTPUT_DIR, track.filename);
    const publicPath = `/audio/${track.filename}`;
    const slideId = track.filename.replace('.mp3', '');
    const wordCount = track.transcript.trim().split(/\s+/).length;
    const estDuration = estimateDuration(track.transcript);

    process.stdout.write(`  Generating ${slideId} (${wordCount} words)...`);

    try {
      const tts = new EdgeTTS({
        voice: VOICE,
        lang: 'en-US',
        outputFormat: OUTPUT_FORMAT,
        rate: RATE,
        timeout: 30000,
      });

      await tts.ttsPromise(track.transcript, outputPath);

      // Read the generated file to get size and actual duration
      const audioBuffer = await readFile(outputPath);
      const actualDuration = estimateMp3Duration(audioBuffer) || estDuration;
      const fileSizeKB = Math.round(audioBuffer.length / 1024);

      console.log(` done (${fileSizeKB} KB, ~${actualDuration}s)`);

      totalSize += audioBuffer.length;
      totalDuration += actualDuration;

      manifest[slideId] = {
        title: track.title,
        src: publicPath,
        duration: actualDuration,
        fileSize: audioBuffer.length,
        wordCount,
      };
    } catch (err) {
      console.error(` FAILED`);
      console.error(`    ${err.message}`);
      process.exit(1);
    }
  }

  // Write manifest
  const manifestContent = JSON.stringify(manifest, null, 2) + '\n';
  await writeFile(MANIFEST_PATH, manifestContent, 'utf-8');
  console.log(`\n  Manifest written to ${MANIFEST_PATH}`);

  // Summary
  const totalSizeKB = Math.round(totalSize / 1024);
  const totalDurationMin = Math.round(totalDuration / 6) / 10;
  console.log(`\n  Done! ${tracks.length} file(s) generated`);
  console.log(`    Total size:     ${totalSizeKB} KB`);
  console.log(`    Total duration: ~${Math.round(totalDuration)}s (~${totalDurationMin} min)`);
  console.log('    Audio generation complete.\n');
}

main().catch((err) => {
  console.error(`\nUnexpected error: ${err.message}`);
  process.exit(1);
});
