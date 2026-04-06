#!/usr/bin/env node
/**
 * sync-playbook.js
 *
 * Syncs content from the Playbook brand repo into JSON data files
 * that power the Playbook Academy interactive tools.
 *
 * Usage:
 *   node scripts/sync-playbook.js
 *   node scripts/sync-playbook.js --playbook-path /absolute/path/to/Branding
 *
 * Output (written to src/data/):
 *   segments.json   - Player segment profiles
 *   messages.json   - Core message catalog
 *   ctas.json       - Calls to action library
 *   brand.json      - Brand tokens (colors, fonts, terminology)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  let playbookPath = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--playbook-path' && args[i + 1]) {
      playbookPath = args[i + 1];
      i++;
    }
  }

  return { playbookPath };
}

// ---------------------------------------------------------------------------
// Path resolution
// ---------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, '..');
const { playbookPath: cliPlaybookPath } = parseArgs();

const PLAYBOOK_ROOT = cliPlaybookPath
  ? path.resolve(cliPlaybookPath)
  : path.resolve(PROJECT_ROOT, '..');

const SEGMENTS_DIR = path.join(PLAYBOOK_ROOT, 'messaging', 'player-segments');
const CORE_MESSAGES_PATH = path.join(PLAYBOOK_ROOT, 'messaging', 'core-messages.md');
const CTAS_PATH = path.join(PLAYBOOK_ROOT, 'messaging', 'calls-to-action.md');
const BRAND_YML_PATH = path.join(PLAYBOOK_ROOT, '_brand.yml');

const OUTPUT_DIR = path.join(PROJECT_ROOT, 'src', 'data');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`  [WARN] File not found: ${filePath}`);
    return null;
  }
  return fs.readFileSync(filePath, 'utf-8');
}

function writeJson(filename, data) {
  const dest = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(dest, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`  -> ${path.relative(PROJECT_ROOT, dest)}`);
}

/**
 * Split a markdown file into YAML front matter and body.
 */
function splitFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontMatter: '', body: content };
  return { frontMatter: match[1], body: match[2] };
}

/**
 * Minimal YAML parser for flat and simple nested structures.
 * Handles: scalars, quoted strings, simple arrays (inline [...] and dash-list),
 * and one level of object nesting.
 *
 * This is intentionally limited — it covers the structures present in
 * _brand.yml front matter and segment front matter without adding a
 * dependency on a full YAML library.
 */
function parseSimpleYaml(text) {
  const result = {};
  const lines = text.split('\n');
  let i = 0;

  function indentLevel(line) {
    const m = line.match(/^(\s*)/);
    return m ? m[1].length : 0;
  }

  function parseValue(raw) {
    raw = raw.trim();
    // Inline array: [a, b, c]
    if (raw.startsWith('[') && raw.endsWith(']')) {
      return raw
        .slice(1, -1)
        .split(',')
        .map((s) => parseScalar(s.trim()));
    }
    return parseScalar(raw);
  }

  function parseScalar(raw) {
    if (raw === '') return '';
    if (raw === 'true') return true;
    if (raw === 'false') return false;
    if (raw === 'null') return null;
    // Remove surrounding quotes
    if ((raw.startsWith('"') && raw.endsWith('"')) ||
        (raw.startsWith("'") && raw.endsWith("'"))) {
      return raw.slice(1, -1);
    }
    // Numbers
    if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
    return raw;
  }

  while (i < lines.length) {
    const line = lines[i];
    // Skip blank lines, comments, and section-comment dividers
    if (/^\s*$/.test(line) || /^\s*#/.test(line)) {
      i++;
      continue;
    }

    const indent = indentLevel(line);
    const kvMatch = line.match(/^(\s*)([\w_][\w_.-]*)\s*:\s*(.*)$/);

    if (!kvMatch) {
      i++;
      continue;
    }

    const key = kvMatch[2];
    let value = kvMatch[3].trim();

    // Strip inline comment (but not within quotes)
    if (!value.startsWith('"') && !value.startsWith("'")) {
      value = value.replace(/\s+#.*$/, '');
    }

    // Multi-line block scalar ( | or > )
    if (value === '|' || value === '>') {
      const blockLines = [];
      i++;
      const blockIndent = i < lines.length ? indentLevel(lines[i]) : indent + 2;
      while (i < lines.length) {
        if (/^\s*$/.test(lines[i])) {
          blockLines.push('');
          i++;
          continue;
        }
        if (indentLevel(lines[i]) >= blockIndent) {
          blockLines.push(lines[i].slice(blockIndent));
          i++;
        } else {
          break;
        }
      }
      result[key] = blockLines.join(value === '|' ? '\n' : ' ').trim();
      continue;
    }

    // Empty value — could be a nested object or a dash-list
    if (value === '') {
      // Look ahead to see if next non-blank line is a dash list or nested map
      let j = i + 1;
      while (j < lines.length && /^\s*$/.test(lines[j])) j++;

      if (j < lines.length) {
        const nextIndent = indentLevel(lines[j]);
        if (nextIndent > indent && lines[j].trim().startsWith('- ')) {
          // Dash list — collect items
          const items = [];
          i = j;
          while (i < lines.length) {
            if (/^\s*$/.test(lines[i]) || /^\s*#/.test(lines[i])) {
              i++;
              continue;
            }
            if (indentLevel(lines[i]) <= indent) break;
            const dashMatch = lines[i].match(/^\s*-\s+(.*)$/);
            if (dashMatch) {
              // Check if this dash item has nested keys (object item)
              const nextLineIdx = i + 1;
              if (nextLineIdx < lines.length &&
                  indentLevel(lines[nextLineIdx]) > indentLevel(lines[i]) &&
                  /^\s+[\w_][\w_.-]*\s*:/.test(lines[nextLineIdx])) {
                // Object item in a list — collect nested lines
                const objLines = [dashMatch[1]];
                const dashIndent = indentLevel(lines[i]);
                i++;
                while (i < lines.length && indentLevel(lines[i]) > dashIndent) {
                  objLines.push(lines[i]);
                  i++;
                }
                // Parse the object item into a small map
                const obj = {};
                for (const ol of objLines) {
                  const okv = ol.match(/^\s*([\w_][\w_.-]*)\s*:\s*(.*)$/);
                  if (okv) {
                    let v = okv[2].replace(/\s+#.*$/, '').trim();
                    obj[okv[1]] = parseValue(v);
                  }
                }
                items.push(obj);
              } else {
                items.push(parseValue(dashMatch[1]));
                i++;
              }
            } else {
              break;
            }
          }
          result[key] = items;
          continue;
        } else if (nextIndent > indent) {
          // Nested map — collect as sub-object (one level deep)
          const sub = {};
          i = j;
          while (i < lines.length) {
            if (/^\s*$/.test(lines[i]) || /^\s*#/.test(lines[i])) {
              i++;
              continue;
            }
            if (indentLevel(lines[i]) <= indent) break;
            const subKv = lines[i].match(/^(\s*)([\w_][\w_.-]*)\s*:\s*(.*)$/);
            if (subKv && indentLevel(lines[i]) === nextIndent) {
              let sv = subKv[3].replace(/\s+#.*$/, '').trim();
              // Check for further nesting
              const nextSub = i + 1;
              if (sv === '' && nextSub < lines.length && indentLevel(lines[nextSub]) > nextIndent) {
                // Two-level nesting — collect as another sub-object
                const deep = {};
                i++;
                const deepIndent = indentLevel(lines[i]);
                while (i < lines.length) {
                  if (/^\s*$/.test(lines[i]) || /^\s*#/.test(lines[i])) {
                    i++;
                    continue;
                  }
                  if (indentLevel(lines[i]) < deepIndent) break;
                  const deepKv = lines[i].match(/^(\s*)([\w_][\w_.-]*)\s*:\s*(.*)$/);
                  if (deepKv) {
                    let dv = deepKv[3].replace(/\s+#.*$/, '').trim();
                    deep[deepKv[2]] = parseValue(dv);
                  }
                  i++;
                }
                sub[subKv[2]] = deep;
              } else if (sv === '') {
                // Look for a dash list at the next level
                let peek = i + 1;
                while (peek < lines.length && /^\s*$/.test(lines[peek])) peek++;
                if (peek < lines.length && lines[peek].trim().startsWith('- ')) {
                  const subItems = [];
                  i = peek;
                  while (i < lines.length) {
                    if (/^\s*$/.test(lines[i]) || /^\s*#/.test(lines[i])) {
                      i++;
                      continue;
                    }
                    if (indentLevel(lines[i]) <= nextIndent) break;
                    const dm = lines[i].match(/^\s*-\s+(.*)$/);
                    if (dm) {
                      subItems.push(parseValue(dm[1]));
                      i++;
                    } else {
                      break;
                    }
                  }
                  sub[subKv[2]] = subItems;
                } else {
                  sub[subKv[2]] = '';
                  i++;
                }
              } else {
                sub[subKv[2]] = parseValue(sv);
                i++;
              }
            } else {
              i++;
            }
          }
          result[key] = sub;
          continue;
        }
      }
    }

    // Simple key: value
    result[key] = parseValue(value);
    i++;
  }

  return result;
}

// ---------------------------------------------------------------------------
// Markdown table parser
// ---------------------------------------------------------------------------

/**
 * Parse a markdown table into an array of objects.
 * The first row is treated as headers, the second row (separator) is skipped.
 */
function parseMarkdownTable(tableText) {
  const lines = tableText
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('|'));

  if (lines.length < 3) return [];

  const headers = lines[0]
    .split('|')
    .map((h) => h.trim())
    .filter(Boolean);

  const rows = [];
  for (let i = 2; i < lines.length; i++) {
    const cells = lines[i]
      .split('|')
      .map((c) => c.trim())
      .filter(Boolean);

    const row = {};
    headers.forEach((h, idx) => {
      row[h] = cells[idx] || '';
    });
    rows.push(row);
  }
  return rows;
}

/**
 * Find all markdown tables within a block of text (between headers).
 * Returns an array of { heading, rows }.
 */
function extractTablesFromSection(markdown) {
  const tables = [];
  // Split by heading lines
  const blocks = markdown.split(/^(#{2,4}\s+.*$)/m);

  let currentHeading = '';
  for (const block of blocks) {
    if (/^#{2,4}\s+/.test(block)) {
      currentHeading = block.replace(/^#{2,4}\s+/, '').trim();
      continue;
    }
    // Find table within this block
    const tableMatch = block.match(/(\|.*\|[\s\S]*?\|.*\|)/);
    if (tableMatch) {
      const rows = parseMarkdownTable(tableMatch[1]);
      if (rows.length > 0) {
        tables.push({ heading: currentHeading, rows });
      }
    }
  }
  return tables;
}

// ---------------------------------------------------------------------------
// 1. Parse player segments
// ---------------------------------------------------------------------------

function parseSegments() {
  console.log('\n[1/4] Parsing player segments...');

  if (!fs.existsSync(SEGMENTS_DIR)) {
    console.error(`  [ERROR] Segments directory not found: ${SEGMENTS_DIR}`);
    return [];
  }

  const files = fs.readdirSync(SEGMENTS_DIR).filter(
    (f) => f.endsWith('.md') && f !== 'README.md'
  );

  const segments = [];

  for (const file of files) {
    const content = readFile(path.join(SEGMENTS_DIR, file));
    if (!content) continue;

    const { frontMatter, body } = splitFrontMatter(content);
    const meta = parseSimpleYaml(frontMatter);

    // Extract the segment name from the front matter title or the first H1
    const name = meta.title || '';

    // Extract description: first paragraph after the H1
    const descMatch = body.match(/^#\s+.*\n\n(.*?)(?:\n\n|$)/m);
    const description = descMatch ? descMatch[1].trim() : '';

    // Extract key insight (blockquote after ## Key insight)
    const insightMatch = body.match(
      /## Key insight\s*\n\s*>\s*\*\*(.*?)\*\*/s
    );
    const keyInsight = insightMatch ? insightMatch[1].trim() : '';

    // Extract key characteristics from ## Segment profile table
    const profileSection = body.match(
      /## Segment profile\s*\n([\s\S]*?)(?=\n---|\n## )/
    );
    const characteristics = {};
    if (profileSection) {
      const rows = parseMarkdownTable(profileSection[1]);
      for (const row of rows) {
        const attr = (row['Attribute'] || '').replace(/\*\*/g, '').trim();
        const detail = (row['Detail'] || '').trim();
        if (attr && detail) {
          characteristics[attr] = detail;
        }
      }
    }

    // Extract message priorities (ordered list after ## Message priorities)
    const prioritiesSection = body.match(
      /## Message priorities\s*\n[\s\S]*?\n((?:\d+\..*\n?)+)/
    );
    const messagePriorities = [];
    if (prioritiesSection) {
      const items = prioritiesSection[1].matchAll(
        /\d+\.\s+\*\*(.*?)\*\*\s*[-—]\s*(.*)/g
      );
      for (const m of items) {
        messagePriorities.push({
          priority: m[1].trim(),
          description: m[2].trim(),
        });
      }
    }

    // Extract tone guidance
    const toneSection = body.match(
      /## Tone guidance\s*\n\s*\*\*Voice\*\*:\s*(.*)/
    );
    const voiceGuidance = toneSection ? toneSection[1].trim() : '';

    segments.push({
      id: path.basename(file, '.md'),
      name,
      description,
      keyInsight,
      characteristics,
      messagePriorities,
      voiceGuidance,
      pillar: meta.pillar || [],
      tier: meta.tier || [],
      audience: meta.audience || [],
      culturalProfile: meta.cultural_profile || {},
      lastUpdated: meta.last_updated || '',
    });
  }

  console.log(`  Found ${segments.length} segment(s)`);
  return segments;
}

// ---------------------------------------------------------------------------
// 2. Parse core messages
// ---------------------------------------------------------------------------

function parseMessages() {
  console.log('\n[2/4] Parsing core messages...');

  const content = readFile(CORE_MESSAGES_PATH);
  if (!content) return {};

  const { frontMatter, body } = splitFrontMatter(content);
  const meta = parseSimpleYaml(frontMatter);

  // Split body into major sections by H2
  const sections = body.split(/(?=^## )/m).filter(Boolean);

  const catalog = {
    meta: {
      title: meta.title || 'Core Messages',
      lastUpdated: meta.last_updated || '',
      readingLevel: meta.reading_level || '',
      tone: meta.tone || [],
    },
    pillarMessages: [],
    contextualMessages: [],
    seasonalMessages: [],
    regulatoryMessages: [],
  };

  for (const section of sections) {
    const heading = (section.match(/^## (.*)$/m) || [])[1] || '';

    if (/pillar messages/i.test(heading)) {
      // Split by H3 for each pillar
      const subsections = section.split(/(?=^### )/m).filter((s) => s.startsWith('### '));
      for (const sub of subsections) {
        const pillarHeading = (sub.match(/^### (.*)$/m) || [])[1] || '';
        // Extract pillar name (before the em-dash)
        const pillarName = pillarHeading.split(/\s*[—-]\s*/)[0].trim();
        const rows = parseMarkdownTable(sub);
        for (const row of rows) {
          catalog.pillarMessages.push({
            id: (row['#'] || '').trim(),
            pillar: pillarName,
            message: (row['Message'] || '').replace(/^"|"$/g, ''),
            context: (row['Context'] || '').trim(),
            tone: (row['Tone'] || '').trim(),
            tier: parseInt(row['Tier'], 10) || 1,
            maxChars: parseInt(row['Max chars'], 10) || 0,
          });
        }
      }
    }

    if (/contextual messages/i.test(heading)) {
      const subsections = section.split(/(?=^### )/m).filter((s) => s.startsWith('### '));
      for (const sub of subsections) {
        const touchpoint = (sub.match(/^### (.*)$/m) || [])[1] || '';
        const rows = parseMarkdownTable(sub);
        for (const row of rows) {
          catalog.contextualMessages.push({
            id: (row['#'] || '').trim(),
            touchpoint,
            message: (row['Message'] || '').replace(/^"|"$/g, ''),
            tone: (row['Tone'] || '').trim(),
            tier: parseInt(row['Tier'], 10) || 1,
            maxChars: parseInt(row['Max chars'], 10) || 0,
          });
        }
      }
    }

    if (/seasonal/i.test(heading)) {
      const subsections = section.split(/(?=^### )/m).filter((s) => s.startsWith('### '));
      for (const sub of subsections) {
        const eventCategory = (sub.match(/^### (.*)$/m) || [])[1] || '';
        const rows = parseMarkdownTable(sub);
        for (const row of rows) {
          catalog.seasonalMessages.push({
            id: (row['#'] || '').trim(),
            category: eventCategory,
            event: (row['Event'] || '').trim(),
            message: (row['Message'] || '').replace(/^"|"$/g, ''),
            tone: (row['Tone'] || '').trim(),
            tier: parseInt(row['Tier'], 10) || 1,
            maxChars: parseInt(row['Max chars'], 10) || 0,
          });
        }
      }
    }

    if (/regulatory/i.test(heading)) {
      const subsections = section.split(/(?=^### )/m).filter((s) => s.startsWith('### '));
      for (const sub of subsections) {
        const regCategory = (sub.match(/^### (.*)$/m) || [])[1] || '';
        const rows = parseMarkdownTable(sub);
        for (const row of rows) {
          catalog.regulatoryMessages.push({
            id: (row['#'] || '').trim(),
            category: regCategory,
            message: (row['Message'] || '').replace(/^"|"$/g, ''),
            context: (row['Context'] || '').trim(),
            maxChars: parseInt(row['Max chars'], 10) || 0,
          });
        }
      }
    }
  }

  const totalMessages =
    catalog.pillarMessages.length +
    catalog.contextualMessages.length +
    catalog.seasonalMessages.length +
    catalog.regulatoryMessages.length;

  console.log(`  Found ${totalMessages} message(s) across 4 categories`);
  return catalog;
}

// ---------------------------------------------------------------------------
// 3. Parse calls to action
// ---------------------------------------------------------------------------

function parseCTAs() {
  console.log('\n[3/4] Parsing calls to action...');

  const content = readFile(CTAS_PATH);
  if (!content) return {};

  const { frontMatter, body } = splitFrontMatter(content);
  const meta = parseSimpleYaml(frontMatter);

  const catalog = {
    meta: {
      title: meta.title || 'Calls to Action',
      lastUpdated: meta.last_updated || '',
    },
    categories: [],
  };

  // Target sections: Entertainment literacy, Tool adoption, Content engagement,
  // Social sharing, Help-seeking, Account management
  const targetSections = [
    'Entertainment literacy',
    'Tool adoption',
    'Content engagement',
    'Social sharing',
    'Help-seeking',
    'Account management',
  ];

  // Split by H2 headings
  const sections = body.split(/(?=^## )/m).filter(Boolean);

  for (const section of sections) {
    const heading = (section.match(/^## (.*)$/m) || [])[1] || '';

    // Check if this is one of our target CTA sections
    const matchedSection = targetSections.find(
      (t) => heading.toLowerCase().includes(t.toLowerCase())
    );

    if (matchedSection) {
      const rows = parseMarkdownTable(section);
      const ctas = rows.map((row) => ({
        id: (row['#'] || '').trim(),
        label: (row['CTA label'] || '').replace(/^"|"$/g, ''),
        maxChars: parseInt(row['Max chars'] || row['Max chars'] || '0', 10) || 0,
        context: (row['Context / placement'] || '').trim(),
        tone: (row['Tone'] || '').trim(),
        pairWithTaglines: (row['Pair with taglines'] || '').trim(),
      }));

      if (ctas.length > 0) {
        catalog.categories.push({
          name: matchedSection,
          ctas,
        });
      }
    }
  }

  // Also extract A/B testing guidance
  const abSection = sections.find((s) => /## A\/B testing/i.test(s));
  if (abSection) {
    const testRows = parseMarkdownTable(abSection);
    catalog.abTests = testRows.map((row) => ({
      test: (row['Test'] || '').trim(),
      variantA: (row['Variant A'] || '').replace(/^"|"$/g, ''),
      variantB: (row['Variant B'] || '').replace(/^"|"$/g, ''),
      hypothesis: (row['Hypothesis'] || '').trim(),
    }));
  }

  const totalCTAs = catalog.categories.reduce(
    (sum, cat) => sum + cat.ctas.length,
    0
  );
  console.log(`  Found ${totalCTAs} CTA(s) across ${catalog.categories.length} categories`);
  return catalog;
}

// ---------------------------------------------------------------------------
// 4. Parse _brand.yml
// ---------------------------------------------------------------------------

function parseBrand() {
  console.log('\n[4/4] Parsing _brand.yml...');

  const content = readFile(BRAND_YML_PATH);
  if (!content) return {};

  // We parse the YAML in targeted blocks rather than attempting to parse
  // the entire deeply-nested file in one pass. This keeps the regex-based
  // parser from falling over on the deeply-nested helplines section.

  const brand = {
    meta: {},
    pillars: [],
    colors: {},
    typography: {},
    helplines: {},
    culturalProfile: {},
    messaging: {},
    tone: {},
    legal: {},
  };

  // --- Meta ---
  const metaBlock = content.match(/^meta:\n((?:[ ].*\n)*)/m);
  if (metaBlock) {
    brand.meta = parseSimpleYaml(metaBlock[1].replace(/^  /gm, ''));
  }

  // --- Brand Pillars ---
  const pillarBlock = content.match(/^brand_pillars:\n([\s\S]*?)(?=\n# |\n[a-z_]+:)/m);
  if (pillarBlock) {
    const pillarEntries = pillarBlock[1].split(/^\s*- name:/m).filter(Boolean);
    for (const entry of pillarEntries) {
      const nameMatch = entry.match(/^\s*"?(.*?)"?\s*$/m);
      const taglineMatch = entry.match(/tagline:\s*"?(.*?)"?\s*$/m);
      const descMatch = entry.match(/description:\s*>\s*\n((?:\s{6,}.*\n)*)/);

      brand.pillars.push({
        name: nameMatch ? nameMatch[1].trim() : '',
        tagline: taglineMatch ? taglineMatch[1].trim() : '',
        description: descMatch
          ? descMatch[1].replace(/^\s+/gm, '').trim().replace(/\n/g, ' ')
          : '',
      });
    }
  }

  // --- Colors ---
  const colorBlock = content.match(/^color:\n([\s\S]*?)(?=\n# |\ntypography:)/m);
  if (colorBlock) {
    // Extract palette — scan the entire color block for hex values
    const paletteSection = colorBlock[1].match(/palette:\n([\s\S]*?)(?=\n  [a-z])/);
    if (paletteSection) {
      const palette = {};
      const colorLines = paletteSection[1].matchAll(
        /^\s+([\w_]+):\s*"?(#[A-Fa-f0-9]{3,8})"?/gm
      );
      for (const cl of colorLines) {
        palette[cl[1]] = cl[2];
      }
      brand.colors.palette = palette;
    }

    // Extract aliases
    const aliasSection = colorBlock[1].match(/aliases:\n([\s\S]*?)(?=\n  [a-z])/);
    if (aliasSection) {
      const aliases = {};
      const aliasLines = aliasSection[1].matchAll(
        /^\s+([\w_]+):\s*"?([\w_]+)"?/gm
      );
      for (const al of aliasLines) {
        aliases[al[1]] = al[2];
      }
      brand.colors.aliases = aliases;
    }

    // Extract semantic
    const semanticSection = colorBlock[1].match(/semantic:\n([\s\S]*?)$/);
    if (semanticSection) {
      const semantic = {};
      const semLines = semanticSection[1].matchAll(
        /^\s+([\w_]+):\s*"?([\w_]+)"?/gm
      );
      for (const sl of semLines) {
        semantic[sl[1]] = sl[2];
      }
      brand.colors.semantic = semantic;
    }
  }

  // --- Typography ---
  const typoBlock = content.match(/^typography:\n([\s\S]*?)(?=\n# |\nlogo:)/m);
  if (typoBlock) {
    const fonts = {};
    const fontSections = typoBlock[1].matchAll(
      /^\s{4}(\w+):\n((?:\s{6,}.*\n)*)/gm
    );
    for (const fs_match of fontSections) {
      const fontName = fs_match[1];
      const fontData = parseSimpleYaml(fs_match[2].replace(/^\s{6}/gm, ''));
      fonts[fontName] = fontData;
    }
    brand.typography.fonts = fonts;

    // Type scale
    const scaleMatch = typoBlock[1].match(/scale:\n((?:\s{4,}.*\n)*)/);
    if (scaleMatch) {
      brand.typography.scale = parseSimpleYaml(
        scaleMatch[1].replace(/^\s{4}/gm, '')
      );
    }

    // Line height
    const lhMatch = typoBlock[1].match(/line_height:\n((?:\s{4,}.*\n)*)/);
    if (lhMatch) {
      brand.typography.lineHeight = parseSimpleYaml(
        lhMatch[1].replace(/^\s{4}/gm, '')
      );
    }
  }

  // --- Helplines (simplified — just extract default and top-level) ---
  const helplineBlock = content.match(/^helplines:\n([\s\S]*?)(?=\n# |\nintegration:)/m);
  if (helplineBlock) {
    const defaultMatch = helplineBlock[1].match(
      /default:\n((?:\s{4,}.*\n)*)/
    );
    if (defaultMatch) {
      brand.helplines.default = parseSimpleYaml(
        defaultMatch[1].replace(/^\s{4}/gm, '')
      );
    }

    // Extract jurisdiction names present
    const jurisdictions = [];
    const jurisMatches = helplineBlock[1].matchAll(
      /^\s{2}([\w-]+):\s*$/gm
    );
    for (const jm of jurisMatches) {
      if (jm[1] !== 'default') {
        jurisdictions.push(jm[1]);
      }
    }
    brand.helplines.jurisdictions = jurisdictions;
  }

  // --- Cultural profile ---
  const cpBlock = content.match(/^cultural_profile:\n((?:[ ].*\n)*)/m);
  if (cpBlock) {
    // Strip inline comments before parsing so "peer" # peer | ... becomes just "peer"
    const cpClean = cpBlock[1]
      .replace(/^\s{2}/gm, '')
      .replace(/^([\w_]+:\s*"[^"]*")\s+#.*$/gm, '$1');
    brand.culturalProfile = parseSimpleYaml(cpClean);
  }

  // --- Messaging ---
  const msgBlock = content.match(/^messaging:\n([\s\S]*?)(?=\n# |\ntone:)/m);
  if (msgBlock) {
    // Taglines
    const taglineBlock = msgBlock[1].match(/taglines:\n([\s\S]*?)(?=\n\s{2}ctas:|$)/);
    if (taglineBlock) {
      const taglines = {};
      const tgSections = taglineBlock[1].matchAll(
        /^\s{4}(\w+):\n((?:\s{6,}.*\n)*)/gm
      );
      for (const tg of tgSections) {
        const items = [];
        const itemMatches = tg[2].matchAll(/^\s+-\s+"(.*?)"/gm);
        for (const im of itemMatches) {
          items.push(im[1]);
        }
        taglines[tg[1]] = items;
      }
      brand.messaging.taglines = taglines;
    }

    // CTAs in brand.yml
    const ctaBlock = msgBlock[1].match(/ctas:\n([\s\S]*?)$/);
    if (ctaBlock) {
      const ctas = {};
      const ctaSections = ctaBlock[1].matchAll(
        /^\s{4}(\w+):\n((?:\s{6,}.*\n)*)/gm
      );
      for (const cs of ctaSections) {
        const items = [];
        const itemMatches = cs[2].matchAll(/^\s+-\s+"(.*?)"/gm);
        for (const im of itemMatches) {
          items.push(im[1]);
        }
        ctas[cs[1]] = items;
      }
      brand.messaging.ctas = ctas;
    }
  }

  // --- Tone ---
  // tone: is the last top-level key, so capture everything after it
  const toneBlock = content.match(/^tone:\n([\s\S]+)/m);
  if (toneBlock) {
    // Basic tone properties (direct children at 2-space indent)
    const toneLines = toneBlock[1].matchAll(/^  (\w[\w_]*):\s*"([^"]*)"/gm);
    for (const m of toneLines) {
      // Strip inline YAML comments from the value
      const cleanVal = m[2].replace(/\s+#.*$/, '').trim();
      brand.tone[m[1]] = cleanVal;
    }

    // Preferred terms
    const preferBlock = toneBlock[1].match(/prefer:\n((?:\s{4,}.*\n)*)/);
    if (preferBlock) {
      const prefer = {};
      const prefLines = preferBlock[1].matchAll(
        /^\s{4}([\w_]+):\s*"(.*?)"/gm
      );
      for (const pl of prefLines) {
        prefer[pl[1]] = pl[2];
      }
      brand.tone.prefer = prefer;
    }

    // Avoid in Tier 1
    const avoidBlock = toneBlock[1].match(
      /avoid_in_tier_1:\n((?:\s{4,}-\s+.*\n)*)/
    );
    if (avoidBlock) {
      const avoid = [];
      const avoidItems = avoidBlock[1].matchAll(/^\s+-\s+"(.*?)"/gm);
      for (const ai of avoidItems) {
        avoid.push(ai[1]);
      }
      brand.tone.avoidInTier1 = avoid;
    }
  }

  // --- Legal ---
  const legalBlock = content.match(/^legal:\n([\s\S]*?)(?=\n# |\nmessaging:)/m);
  if (legalBlock) {
    brand.legal = parseSimpleYaml(legalBlock[1].replace(/^\s{2}/gm, ''));
  }

  console.log('  Extracted: meta, pillars, colors, typography, helplines, cultural profile, messaging, tone, legal');
  return brand;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log('=== Playbook Sync ===');
  console.log(`Playbook repo: ${PLAYBOOK_ROOT}`);
  console.log(`Output dir:    ${OUTPUT_DIR}`);

  // Verify source paths exist
  const requiredPaths = [
    { path: SEGMENTS_DIR, label: 'player-segments/' },
    { path: CORE_MESSAGES_PATH, label: 'core-messages.md' },
    { path: CTAS_PATH, label: 'calls-to-action.md' },
    { path: BRAND_YML_PATH, label: '_brand.yml' },
  ];

  let hasErrors = false;
  for (const { path: p, label } of requiredPaths) {
    if (!fs.existsSync(p)) {
      console.error(`  [ERROR] Missing: ${label} (expected at ${p})`);
      hasErrors = true;
    }
  }
  if (hasErrors) {
    console.error('\nSync aborted. Fix the paths above or pass --playbook-path.\n');
    process.exit(1);
  }

  ensureDir(OUTPUT_DIR);

  // Run parsers and write output
  const segments = parseSegments();
  writeJson('segments.json', segments);

  const messages = parseMessages();
  writeJson('messages.json', messages);

  const ctas = parseCTAs();
  writeJson('ctas.json', ctas);

  const brand = parseBrand();
  writeJson('brand.json', brand);

  console.log('\nSync complete.\n');
}

main();
