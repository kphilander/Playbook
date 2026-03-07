/**
 * widgets/build.mjs — Bundle all Playbook Web Components
 *
 * Concatenates individual widget files into a single playbook-widgets.js
 * wrapped in an IIFE. Also copies individual widget files for standalone use.
 *
 * Usage: node widgets/build.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(__dirname, 'src');
const OUT_DIR = join(__dirname, 'dist');

mkdirSync(OUT_DIR, { recursive: true });

const widgets = [
  'playbook-helpline.js',
  'playbook-myth.js',
  'playbook-age-gate.js',
  'playbook-odds.js',
];

console.log('📦 Building Playbook widgets...\n');

// ─── Bundle all into one file ───────────────────────────────
const parts = [
  '/**',
  ' * Playbook Widgets — Drop-in Web Components for responsible gambling',
  ' * License: CC0-1.0 (Public Domain)',
  ' * https://github.com/kphilander/Playbook',
  ' */',
  '(function() {',
  '"use strict";',
  '',
];

for (const file of widgets) {
  const src = readFileSync(join(SRC_DIR, file), 'utf-8');
  parts.push(`// ─── ${file} ───`);
  parts.push(src);
  parts.push('');
}

parts.push('})();');

const bundle = parts.join('\n');
const bundlePath = join(OUT_DIR, 'playbook-widgets.js');
writeFileSync(bundlePath, bundle, 'utf-8');
console.log(`  ✅ playbook-widgets.js (${(bundle.length / 1024).toFixed(1)} KB)`);

// ─── Copy individual files for standalone use ───────────────
for (const file of widgets) {
  copyFileSync(join(SRC_DIR, file), join(OUT_DIR, file));
  console.log(`  ✅ ${file}`);
}

console.log(`\n✅ Widgets built → widgets/dist/ (${widgets.length + 1} files)`);
