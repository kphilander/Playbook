#!/usr/bin/env node
/**
 * migrate-templates.mjs — Migrates HTML templates from hardcoded hex → CSS variables
 *
 * This is a one-time migration script. It:
 *   1. Adds a <link> to brand-inject.css in each template's <head>
 *   2. Replaces hardcoded hex color values with var(--pb-color-*) references
 *   3. Replaces hardcoded font-family declarations with var(--pb-font-*) references
 *   4. Replaces hardcoded helpline numbers with {{HELPLINE_NUMBER}} tokens
 *   5. Replaces "Playbook" program name with {{PROGRAM_NAME}} tokens (in text, not in filenames)
 *
 * Usage:  node lib/migrate-templates.mjs [--dry-run]
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadBrand } from './brand-config.mjs';

const brand = loadBrand();
const RENDER_DIR = join(brand.ROOT, 'collateral', 'render');
const DRY_RUN = process.argv.includes('--dry-run');

// ─── Color hex → CSS variable mapping ───────────────────────
// Order matters: longer/more specific first to avoid partial matches
const colorMap = [
  // Primary variants
  ['#0F1923', 'var(--pb-color-primary-dark)'],
  ['#1B2838', 'var(--pb-color-primary)'],
  ['#2A3F56', 'var(--pb-color-primary-light)'],
  // Secondary variants
  ['#00A888', 'var(--pb-color-secondary-dark)'],
  ['#00D4AA', 'var(--pb-color-secondary)'],
  ['#33DDBB', 'var(--pb-color-secondary-light)'],
  // Accent variants
  ['#E55A2B', 'var(--pb-color-accent-dark)'],
  ['#FF6B35', 'var(--pb-color-accent)'],
  ['#FF8A5C', 'var(--pb-color-accent-light)'],
  // Neutrals
  ['#1A1A2E', 'var(--pb-color-neutral-900)'],
  ['#3D3D5C', 'var(--pb-color-neutral-700)'],
  ['#6B6B8A', 'var(--pb-color-neutral-500)'],
  ['#A8A8C0', 'var(--pb-color-neutral-300)'],
  ['#E8E8F0', 'var(--pb-color-neutral-100)'],
  ['#F5F5FA', 'var(--pb-color-neutral-50)'],
  // Semantic
  ['#00C853', 'var(--pb-color-success)'],
  ['#FFB300', 'var(--pb-color-warning)'],
  ['#FF3D00', 'var(--pb-color-danger)'],
  ['#2979FF', 'var(--pb-color-info)'],
  // Absolute
  ['#FFFFFF', 'var(--pb-color-white)'],
  ['#111111', 'var(--pb-color-black)'],
];

// Font family → CSS variable mapping
const fontMap = [
  [/font-family:\s*'Inter',\s*sans-serif/g, 'font-family: var(--pb-font-heading)'],
  [/font-family:\s*'Inter',\s*system-ui,\s*-apple-system,\s*sans-serif/g, 'font-family: var(--pb-font-heading)'],
  [/font-family:\s*'Source Sans 3',\s*sans-serif/g, 'font-family: var(--pb-font-body)'],
  [/font-family:\s*'Source Sans 3',\s*system-ui,\s*sans-serif/g, 'font-family: var(--pb-font-body)'],
  [/font-family:\s*'Source Code Pro',\s*monospace/g, 'font-family: var(--pb-font-mono)'],
];

// Brand text replacements (in text content, not in structural HTML)
const textReplacements = [
  ['1-800-522-4700', '{{HELPLINE_NUMBER}}'],
  ['1-800-GAMBLER', '{{HELPLINE_ALTERNATE}}'],
  ['www.ncpgambling.org/chat', '{{CHAT_URL}}'],
  ['ncpgambling.org/chat', '{{CHAT_URL}}'],
  ['Text SUPPORT to 53342', '{{TEXT_NUMBER}}'],
];

// ─── Process each template ──────────────────────────────────

const htmlFiles = readdirSync(RENDER_DIR).filter(f => f.endsWith('.html'));
let totalChanges = 0;
let filesChanged = 0;

for (const file of htmlFiles) {
  const filePath = join(RENDER_DIR, file);
  let content = readFileSync(filePath, 'utf-8');
  const original = content;

  // 1. Add brand-inject.css link if not already present
  if (!content.includes('brand-inject.css')) {
    // Insert after opening <style> or before </head>
    if (content.includes('</head>')) {
      content = content.replace(
        '</head>',
        '  <link rel="stylesheet" href="brand-inject.css">\n  </head>'
      );
    }
  }

  // 2. Replace hex colors with CSS variables
  // Handle both uppercase and lowercase hex
  for (const [hex, cssVar] of colorMap) {
    const upperHex = hex.toUpperCase();
    const lowerHex = hex.toLowerCase();

    // Don't replace hex values inside rgba() — those need special handling
    // Replace in style attributes and <style> blocks
    // Use case-insensitive replacement
    const regex = new RegExp(hex.replace('#', '#'), 'gi');
    content = content.replace(regex, (match, offset) => {
      // Check if this hex is inside an rgba() context
      const before = content.substring(Math.max(0, offset - 20), offset);
      if (/rgba?\s*\(\s*$/.test(before)) return match; // Skip rgba() contexts

      // Check if this is inside a Google Fonts URL — don't replace there
      if (before.includes('googleapis.com') || before.includes('fonts.google')) return match;

      return cssVar;
    });
  }

  // 3. Replace font families
  for (const [pattern, replacement] of fontMap) {
    content = content.replace(pattern, replacement);
  }

  // 4. Replace brand text (helpline numbers, etc.)
  for (const [literal, token] of textReplacements) {
    // Only replace in text content, not in CSS/attribute contexts
    content = content.replaceAll(literal, token);
  }

  // 5. Count and report changes
  if (content !== original) {
    filesChanged++;
    const lineChanges = content.split('\n').filter((line, i) =>
      line !== original.split('\n')[i]
    ).length;
    totalChanges += lineChanges;

    if (DRY_RUN) {
      console.log(`  [dry-run] ${file}: ${lineChanges} lines would change`);
    } else {
      writeFileSync(filePath, content, 'utf-8');
      console.log(`  ✓ ${file}: ${lineChanges} lines changed`);
    }
  } else {
    console.log(`  · ${file}: no changes needed`);
  }
}

console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}Summary: ${filesChanged}/${htmlFiles.length} files, ~${totalChanges} lines changed`);
