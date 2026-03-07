/**
 * parse-myths.mjs — Parse messaging/myth-busting.md into structured JSON
 *
 * Each myth has 3 formats: social card (blockquote), article explainer, quiz question.
 * Structure: H2 game category → H3 "Myth N: Title" → H4 format sections.
 */

import { readMarkdown, splitByH2, splitByH3 } from './markdown-utils.mjs';

/**
 * @param {string} filePath
 * @returns {{ frontmatter: object, myths: object[] }}
 */
export function parseMyths(filePath) {
  const { frontmatter, body } = readMarkdown(filePath);

  const myths = [];
  const h2Sections = splitByH2(body);

  for (const section of h2Sections) {
    // Skip index/reference sections
    if (/quick-scan|how to use|by cognitive|by channel/i.test(section.title)) continue;

    const mythEntries = splitByH3(section.body);

    for (const entry of mythEntries) {
      const titleMatch = entry.title.match(/^Myth\s+(\d+):\s+(.+)$/i);
      if (!titleMatch) continue;

      const mythId = parseInt(titleMatch[1], 10);
      const mythTitle = titleMatch[2].trim();

      // Extract metadata line: **Game type:** ... | **Bias:** ... | **Pillar:** ...
      const metaMatch = entry.body.match(/\*\*Game type:\*\*\s*([^|]+)\|\s*\*\*Bias:\*\*\s*([^|]+)\|\s*\*\*Pillar:\*\*\s*(.+)/i);

      const gameType = metaMatch
        ? metaMatch[1].trim().split(/,\s*/).map(s => slugify(s))
        : [];
      const bias = metaMatch
        ? metaMatch[2].trim().split(/,\s*/).map(s => slugify(s))
        : [];
      const pillar = metaMatch
        ? metaMatch[3].trim().toLowerCase()
        : 'open';

      // Extract social card (blockquote with MYTH/FACT/STAT)
      const socialCard = extractSocialCard(entry.body);

      // Extract article explainer (text between "#### Article explainer" and next H4)
      const articleExplainer = extractH4Section(entry.body, 'Article explainer');

      // Extract quiz question
      const quiz = extractQuiz(entry.body);

      myths.push({
        id: mythId,
        title: mythTitle,
        category: section.title,
        gameType,
        bias,
        pillar,
        socialCard,
        articleExplainer,
        quiz,
      });
    }
  }

  return { frontmatter, myths };
}

function extractSocialCard(text) {
  // Look for blockquote with MYTH, FACT, STAT markers
  const blockMatch = text.match(/#### Social card\s*\n([\s\S]*?)(?=####|$)/i);
  if (!blockMatch) return null;

  const block = blockMatch[1];

  const mythMatch = block.match(/>\s*\*\*MYTH\*\*:\s*"?([^"\n]*)"?/i);
  const factMatch = block.match(/>\s*\*\*FACT\*\*:\s*([\s\S]*?)(?=>\s*\*\*STAT|$)/i);
  const statMatch = block.match(/>\s*\*\*STAT\*\*:\s*(.*)/i);

  return {
    myth: mythMatch ? mythMatch[1].trim() : null,
    fact: factMatch ? cleanBlockquote(factMatch[1]).trim() : null,
    stat: statMatch ? statMatch[1].trim() : null,
  };
}

function extractH4Section(text, heading) {
  const pattern = new RegExp(`#### ${heading}\\s*\\n([\\s\\S]*?)(?=####|$)`, 'i');
  const match = text.match(pattern);
  if (!match) return null;

  // Clean up: remove blockquote markers, trim
  return match[1]
    .split('\n')
    .map(l => l.replace(/^>\s?/, ''))
    .join('\n')
    .trim();
}

function extractQuiz(text) {
  // Get the raw H4 section (keep blockquote markers for option detection)
  const pattern = /#### Quiz question\s*\n([\s\S]*?)(?=####|$)/i;
  const rawMatch = text.match(pattern);
  if (!rawMatch) return null;

  const section = rawMatch[1];

  // Extract question
  const qMatch = section.match(/\*\*Q:\s*(.*?)\*\*/);
  const question = qMatch ? qMatch[1].trim() : null;

  // Extract options (A/B/C/D lines — may or may not have > prefix)
  const options = [];
  const optPattern = /^>?\s*([A-D])\)\s*(.*?)(\s*✓)?$/gm;
  let optMatch;
  while ((optMatch = optPattern.exec(section)) !== null) {
    options.push({
      label: optMatch[2].trim(),
      correct: !!optMatch[3],
    });
  }

  // Extract feedback
  const fbMatch = section.match(/\*\*Feedback\*\*:\s*(.*)/i);
  const feedback = fbMatch ? fbMatch[1].trim() : null;

  return { question, options, feedback };
}

function cleanBlockquote(text) {
  return text
    .split('\n')
    .map(l => l.replace(/^>\s?/, ''))
    .join(' ')
    .replace(/\s+/g, ' ')
    .replace(/\*\*([^*]+)\*\*/g, '$1'); // strip bold
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default parseMyths;
