#!/usr/bin/env node

/**
 * generate-narration.js
 *
 * Generates TTS audio from narration script .txt files using Microsoft Edge's
 * free online TTS service (via node-edge-tts). No API key required.
 *
 * Usage:
 *   node scripts/generate-narration.js            # Generate all audio files
 *   node scripts/generate-narration.js --dry-run   # List what would be generated without calling the API
 *   node scripts/generate-narration.js --voice en-US-GuyNeural   # Use a different voice
 *   node scripts/generate-narration.js --list-voices              # List available English voices
 *
 * Voices (default: en-US-AndrewMultilingualNeural):
 *   en-US-AndrewMultilingualNeural  — Natural, warm male (recommended)
 *   en-US-BrianMultilingualNeural   — Clear, professional male
 *   en-US-GuyNeural                 — Confident male narrator
 *   en-US-ChristopherNeural         — Friendly male
 *   en-US-EricNeural                — Deep male
 */

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, parse as parsePath } from 'node:path';
import { parseArgs } from 'node:util';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const PROJECT_ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const NARRATION_DIR = join(PROJECT_ROOT, 'narration-scripts');
const OUTPUT_DIR = join(PROJECT_ROOT, 'public', 'audio');
const MANIFEST_PATH = join(OUTPUT_DIR, 'manifest.json');

const DEFAULT_VOICE = 'en-US-AndrewMultilingualNeural';
const OUTPUT_FORMAT = 'audio-24khz-96kbitrate-mono-mp3';
const WORDS_PER_MINUTE = 150;

// ---------------------------------------------------------------------------
// CLI flags
// ---------------------------------------------------------------------------

const { values: flags } = parseArgs({
  options: {
    'dry-run': { type: 'boolean', default: false },
    'list-voices': { type: 'boolean', default: false },
    voice: { type: 'string', short: 'v', default: DEFAULT_VOICE },
    rate: { type: 'string', default: 'default' },
    help: { type: 'boolean', short: 'h', default: false },
  },
  strict: true,
});

if (flags.help) {
  console.log(`
Usage: node scripts/generate-narration.js [options]

Options:
  --dry-run       List narration files and estimated durations without generating audio
  --list-voices   List all available English voices
  --voice, -v     Voice name (default: ${DEFAULT_VOICE})
  --rate          Speaking rate, e.g. "+10%" or "-20%" (default: normal)
  -h, --help      Show this help message

No API key required — uses Microsoft Edge's free TTS service.
`);
  process.exit(0);
}

const DRY_RUN = flags['dry-run'];
const VOICE = flags.voice;
const RATE = flags.rate;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slideIdFromFilename(filename) {
  return parsePath(filename).name;
}

function estimateDuration(text) {
  const wordCount = text.trim().split(/\s+/).length;
  return Math.round((wordCount / WORDS_PER_MINUTE) * 60 * 10) / 10;
}

/**
 * Attempt to read duration from an MP3 buffer by parsing frame headers.
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
// List voices command
// ---------------------------------------------------------------------------

async function listVoices() {
  const { EdgeTTS } = await import('node-edge-tts');
  // Use the getVoices static if available, otherwise fetch manually
  const tts = new EdgeTTS({ voice: DEFAULT_VOICE, lang: 'en-US' });

  console.log('\n  Fetching available voices...\n');

  // node-edge-tts doesn't expose getVoices directly, so we'll fetch the list
  const response = await fetch(
    'https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list?trustedclienttoken=6A5AA1D4EAFF4E9FB37E23D68491D6F4'
  );
  const voices = await response.json();
  const english = voices.filter((v) => v.Locale.startsWith('en-'));

  console.log('  Available English voices:\n');
  console.log('  %-40s %-10s %s', 'ShortName', 'Gender', 'FriendlyName');
  console.log('  ' + '-'.repeat(80));

  for (const v of english.sort((a, b) => a.ShortName.localeCompare(b.ShortName))) {
    const marker = v.ShortName === DEFAULT_VOICE ? ' ← default' : '';
    console.log('  %-40s %-10s %s%s', v.ShortName, v.Gender, v.FriendlyName, marker);
  }
  console.log();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (flags['list-voices']) {
    await listVoices();
    return;
  }

  console.log(`\n  generate-narration.js${DRY_RUN ? ' (dry run)' : ''}`);
  console.log(`  Voice: ${VOICE}`);
  console.log(`  Engine: Microsoft Edge TTS (free, no API key)\n`);

  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`  Created output directory: ${OUTPUT_DIR}`);
  }

  // Discover narration scripts
  if (!existsSync(NARRATION_DIR)) {
    console.error(`Error: Narration scripts directory not found: ${NARRATION_DIR}`);
    process.exit(1);
  }

  const allFiles = await readdir(NARRATION_DIR);
  const txtFiles = allFiles.filter((f) => f.endsWith('.txt')).sort();

  if (txtFiles.length === 0) {
    console.error(`Error: No .txt files found in ${NARRATION_DIR}`);
    process.exit(1);
  }

  console.log(`  Found ${txtFiles.length} narration script(s):\n`);

  // Import edge-tts
  const { EdgeTTS } = await import('node-edge-tts');

  // Process each file
  const manifest = {};
  let totalSize = 0;
  let totalDuration = 0;

  for (const filename of txtFiles) {
    const slideId = slideIdFromFilename(filename);
    const inputPath = join(NARRATION_DIR, filename);
    const outputFilename = `${slideId}.mp3`;
    const outputPath = join(OUTPUT_DIR, outputFilename);
    const publicPath = `/audio/${outputFilename}`;

    const text = (await readFile(inputPath, 'utf-8')).trim();

    if (!text) {
      console.warn(`  [SKIP] ${filename} — empty file`);
      continue;
    }

    const wordCount = text.split(/\s+/).length;
    const estDuration = estimateDuration(text);

    if (DRY_RUN) {
      console.log(`  ${slideId}`);
      console.log(`    Input:     ${filename}`);
      console.log(`    Output:    ${publicPath}`);
      console.log(`    Words:     ${wordCount}`);
      console.log(`    Est. dur:  ${estDuration}s`);
      console.log();

      manifest[slideId] = {
        src: publicPath,
        duration: estDuration,
        wordCount,
        estimated: true,
      };
      totalDuration += estDuration;
      continue;
    }

    // Generate audio with Edge TTS
    process.stdout.write(`  Generating ${slideId} (${wordCount} words)...`);

    try {
      const tts = new EdgeTTS({
        voice: VOICE,
        lang: 'en-US',
        outputFormat: OUTPUT_FORMAT,
        rate: RATE,
        timeout: 30000,
      });

      await tts.ttsPromise(text, outputPath);

      // Read the generated file to get size and duration
      const audioBuffer = await readFile(outputPath);
      const actualDuration = estimateMp3Duration(audioBuffer) || estDuration;
      const fileSizeKB = Math.round(audioBuffer.length / 1024);

      console.log(` done (${fileSizeKB} KB, ~${actualDuration}s)`);

      totalSize += audioBuffer.length;
      totalDuration += actualDuration;

      manifest[slideId] = {
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
  console.log(`  Manifest written to ${MANIFEST_PATH}`);

  // Summary
  const totalSizeKB = Math.round(totalSize / 1024);
  const totalDurationMin = Math.round(totalDuration / 6) / 10;
  console.log(`\n  ✓ ${Object.keys(manifest).length} file(s) processed`);
  if (!DRY_RUN) {
    console.log(`    Total size: ${totalSizeKB} KB`);
  }
  console.log(`    Total duration: ~${Math.round(totalDuration)}s (~${totalDurationMin} min)`);
  if (DRY_RUN) {
    console.log('    (Dry run — no audio was generated.)\n');
  } else {
    console.log('    Audio generation complete.\n');
  }
}

main().catch((err) => {
  console.error(`\nUnexpected error: ${err.message}`);
  process.exit(1);
});
