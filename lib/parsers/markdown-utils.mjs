/**
 * markdown-utils.mjs — Shared markdown parsing utilities
 *
 * Extracts YAML frontmatter, parses pipe tables, and extracts blockquotes
 * from Playbook content markdown files.
 */

import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';

/**
 * Read a markdown file and split into { frontmatter, body }.
 * @param {string} filePath
 * @returns {{ frontmatter: object, body: string }}
 */
export function readMarkdown(filePath) {
  const raw = readFileSync(filePath, 'utf-8');
  return splitFrontmatter(raw);
}

/**
 * Split raw markdown into frontmatter (parsed YAML) and body.
 * @param {string} raw
 * @returns {{ frontmatter: object, body: string }}
 */
export function splitFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: raw };
  return {
    frontmatter: yaml.load(match[1]) || {},
    body: match[2],
  };
}

/**
 * Parse a markdown pipe table into an array of objects.
 * Handles tables with `| col | col |` rows.
 * Strips leading/trailing pipes and whitespace.
 *
 * @param {string} tableText — the raw table text (header + separator + rows)
 * @returns {object[]} — one object per row, keyed by normalized header names
 */
export function parsePipeTable(tableText) {
  const lines = tableText
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.startsWith('|'));

  if (lines.length < 3) return []; // need header + separator + at least one row

  const headers = splitRow(lines[0]);
  // lines[1] is the separator (|---|---|)
  const rows = [];

  for (let i = 2; i < lines.length; i++) {
    const cells = splitRow(lines[i]);
    const obj = {};
    headers.forEach((h, idx) => {
      const key = normalizeHeader(h);
      obj[key] = (cells[idx] || '').trim();
    });
    rows.push(obj);
  }

  return rows;
}

/**
 * Extract all pipe tables from a body section, keyed by preceding H2/H3 heading.
 * Returns [{ heading, subheading, table: object[] }]
 */
export function extractTablesWithHeadings(body) {
  const results = [];
  let currentH2 = '';
  let currentH3 = '';

  // Split body into logical blocks
  const lines = body.split('\n');
  let tableBuffer = [];
  let inTable = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Track headings
    const h2Match = trimmed.match(/^## (.+)$/);
    const h3Match = trimmed.match(/^### (.+)$/);

    if (h2Match) {
      flushTable();
      currentH2 = h2Match[1].trim();
      currentH3 = '';
      continue;
    }
    if (h3Match) {
      flushTable();
      currentH3 = h3Match[1].trim();
      continue;
    }

    // Detect table rows
    if (trimmed.startsWith('|')) {
      inTable = true;
      tableBuffer.push(trimmed);
    } else if (inTable && trimmed === '') {
      // End of table
      flushTable();
    } else if (inTable) {
      flushTable();
    }
  }
  flushTable(); // flush any remaining

  function flushTable() {
    if (tableBuffer.length >= 3) {
      results.push({
        heading: currentH2,
        subheading: currentH3,
        table: parsePipeTable(tableBuffer.join('\n')),
      });
    }
    tableBuffer = [];
    inTable = false;
  }

  return results;
}

/**
 * Split body by H3 headings into sections.
 * Returns [{ title, body }]
 */
export function splitByH3(body) {
  const sections = [];
  const pattern = /^### (.+)$/gm;
  let match;
  const starts = [];

  while ((match = pattern.exec(body)) !== null) {
    starts.push({ title: match[1].trim(), index: match.index });
  }

  for (let i = 0; i < starts.length; i++) {
    const end = i + 1 < starts.length ? starts[i + 1].index : body.length;
    const sectionBody = body.slice(starts[i].index + starts[i].title.length + 5, end).trim();
    sections.push({ title: starts[i].title, body: sectionBody });
  }

  return sections;
}

/**
 * Split body by H2 headings into sections.
 * Returns [{ title, body }]
 */
export function splitByH2(body) {
  const sections = [];
  const pattern = /^## (.+)$/gm;
  let match;
  const starts = [];

  while ((match = pattern.exec(body)) !== null) {
    starts.push({ title: match[1].trim(), index: match.index });
  }

  for (let i = 0; i < starts.length; i++) {
    const end = i + 1 < starts.length ? starts[i + 1].index : body.length;
    const sectionBody = body.slice(starts[i].index + starts[i].title.length + 4, end).trim();
    sections.push({ title: starts[i].title, body: sectionBody });
  }

  return sections;
}

/**
 * Extract tokens used in a string (e.g. {{PROGRAM_NAME}}).
 * @param {string} text
 * @returns {string[]}
 */
export function extractTokens(text) {
  const matches = text.match(/\{\{[A-Z_]+\}\}/g);
  return matches ? [...new Set(matches)] : [];
}

/**
 * Strip markdown formatting (bold, italic, links, inline code) from text.
 * @param {string} text
 * @returns {string}
 */
export function stripMarkdown(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // [text](url) → text
    .replace(/`([^`]+)`/g, '$1')                // `code` → code
    .replace(/\*\*([^*]+)\*\*/g, '$1')          // **bold** → bold
    .replace(/\*([^*]+)\*/g, '$1')              // *italic* → italic
    .replace(/__([^_]+)__/g, '$1')              // __bold__ → bold
    .replace(/_([^_]+)_/g, '$1');               // _italic_ → italic
}

// ─── Internals ─────────────────────────────────────────────

function splitRow(line) {
  return line
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map(c => c.trim());
}

function normalizeHeader(h) {
  return h
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}
