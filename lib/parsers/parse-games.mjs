/**
 * parse-games.mjs — Parse how-to-play/*.md game guides into structured JSON
 *
 * Each game guide has YAML frontmatter, H2 sections with content,
 * key terms tables, quiz questions (blockquotes), and social snippets.
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { readMarkdown, splitByH2, parsePipeTable } from './markdown-utils.mjs';

/**
 * Parse all game guides in a directory.
 * @param {string} dirPath — path to how-to-play/
 * @returns {object[]} — one object per game
 */
export function parseAllGames(dirPath) {
  const files = readdirSync(dirPath)
    .filter(f => f.endsWith('.md') && !f.startsWith('_') && f !== 'odds-at-a-glance.md');

  return files.map(f => parseGameGuide(join(dirPath, f)));
}

/**
 * Parse a single game guide.
 * @param {string} filePath
 * @returns {object}
 */
export function parseGameGuide(filePath) {
  const { frontmatter, body } = readMarkdown(filePath);
  const slug = basename(filePath, '.md');

  // Extract title (H1)
  const titleMatch = body.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : frontmatter.title || slug;

  // Extract summary (first paragraph after H1, before operator note)
  const summaryMatch = body.match(/^# .+\n\n(.+?)(?:\n\n>|\n\n---)/s);
  const summary = summaryMatch ? summaryMatch[1].trim() : null;

  // Split into H2 sections
  const h2Sections = splitByH2(body);

  const sections = [];
  let keyTerms = [];
  let quiz = [];
  let socialSnippets = [];

  for (const section of h2Sections) {
    const sectionTitle = section.title;

    // Skip index section
    if (/quick-scan/i.test(sectionTitle)) continue;

    // Special handling for key terms
    if (/key terms/i.test(sectionTitle)) {
      keyTerms = extractKeyTerms(section.body);
      continue;
    }

    // Special handling for quiz questions
    if (/quiz/i.test(sectionTitle)) {
      quiz = extractQuizQuestions(section.body);
      continue;
    }

    // Special handling for social snippets
    if (/social snippet/i.test(sectionTitle)) {
      socialSnippets = extractSocialSnippets(section.body);
      continue;
    }

    // Regular content section
    sections.push({
      heading: sectionTitle,
      content: section.body.trim(),
    });
  }

  return {
    slug,
    title,
    summary,
    frontmatter,
    sections,
    keyTerms,
    quiz,
    socialSnippets,
  };
}

function extractKeyTerms(text) {
  // Key terms are often in a pipe table or as bold definitions
  const rows = parsePipeTable(text);
  if (rows.length > 0) {
    return rows.map(r => ({
      term: r.term || r.concept || Object.values(r)[0] || '',
      definition: r.definition || r.meaning || r.what_it_means || Object.values(r)[1] || '',
    })).filter(t => t.term);
  }

  // Fallback: bold term definitions
  const terms = [];
  const pattern = /\*\*(.+?)\*\*[:\s]+(.+)/g;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    terms.push({ term: match[1].trim(), definition: match[2].trim() });
  }
  return terms;
}

function extractQuizQuestions(text) {
  const questions = [];

  // Split by numbered quiz entries (### or > **Q:)
  const entries = text.split(/(?=>\s*\*\*Q[:\d])/);

  for (const entry of entries) {
    const qMatch = entry.match(/\*\*Q\d*[:.]\s*(.*?)\*\*/);
    if (!qMatch) continue;

    const question = qMatch[1].trim();
    const options = [];
    const optPattern = />\s*([A-D])\)\s*(.*?)(\s*✓)?$/gm;
    let optMatch;
    while ((optMatch = optPattern.exec(entry)) !== null) {
      options.push({
        label: optMatch[2].trim(),
        correct: !!optMatch[3],
      });
    }

    const fbMatch = entry.match(/\*\*Feedback\*\*:\s*(.*)/i);

    questions.push({
      question,
      options,
      feedback: fbMatch ? fbMatch[1].trim() : null,
    });
  }

  return questions;
}

function extractSocialSnippets(text) {
  const snippets = [];

  // Social snippets are typically numbered entries with text
  const lines = text.split('\n').filter(l => l.trim());

  for (const line of lines) {
    // Match "1. "text here" — context" or "> text here"
    const numMatch = line.match(/^\d+\.\s*"(.+?)"\s*(?:—\s*(.+))?$/);
    const quoteMatch = line.match(/^>\s*"?(.+?)"?\s*$/);

    if (numMatch) {
      snippets.push({
        text: numMatch[1].trim(),
        context: numMatch[2] ? numMatch[2].trim() : null,
      });
    } else if (quoteMatch && !quoteMatch[1].startsWith('**')) {
      snippets.push({
        text: quoteMatch[1].trim(),
        context: null,
      });
    }
  }

  return snippets;
}

export default parseAllGames;
