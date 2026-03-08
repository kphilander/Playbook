/**
 * parse-messages.mjs — Parse messaging/core-messages.md into structured JSON
 *
 * Extracts all 74 core messages from pipe tables organized under H2/H3 headings.
 * Tables have varying column schemas across sections.
 */

import { readMarkdown, extractTablesWithHeadings, extractTokens } from './markdown-utils.mjs';

/**
 * @param {string} filePath
 * @returns {{ frontmatter: object, messages: object[] }}
 */
export function parseMessages(filePath) {
  const { frontmatter, body } = readMarkdown(filePath);
  const tablesWithHeadings = extractTablesWithHeadings(body);

  const messages = [];

  for (const { heading, subheading, table } of tablesWithHeadings) {
    // Skip the quick-scan index table and tagging reference table
    if (heading === 'Quick-scan index' || heading === 'Message tagging reference') continue;
    // Skip urgency spectrum, CTA format guide, etc.
    if (subheading === 'Urgency spectrum') continue;

    for (const row of table) {
      const id = row['_'] || row['#'] || row[''] || '';
      if (!id || id === '---') continue;

      // Determine message text — varies by section
      const message = row.message || '';
      if (!message) continue;

      // Strip surrounding quotes from message
      const cleanMessage = message.replace(/^"(.*)"$/, '$1');

      const entry = {
        id: id.trim(),
        section: heading,
        subsection: subheading || null,
        message: cleanMessage,
        context: row.context || row['context_placement'] || null,
        tone: row.tone || null,
        tier: row.tier ? parseInt(row.tier, 10) : 1,
        maxChars: row.max_chars ? parseInt(row.max_chars, 10) : null,
        event: row.event || null,
        tokens: extractTokens(cleanMessage),
      };

      // Determine pillar from section name or subsection
      entry.pillar = inferPillar(heading, subheading, id);

      messages.push(entry);
    }
  }

  return { frontmatter, messages };
}

function inferPillar(heading, subheading, id) {
  const sub = (subheading || '').toLowerCase();
  const h = (heading || '').toLowerCase();
  const prefix = id.split('-')[0];

  // From ID prefix
  const pillarMap = {
    'O': 'open', 'S': 'social', 'T': 'tools', 'H': 'help',
    'D': 'tools', 'SR': 'tools', 'AD': 'tools', 'LI': 'tools',
    'PL': 'help', 'WC': 'tools', 'AS': 'tools', 'OB': 'tools',
    'EX': 'tools', 'SE': 'open', 'NY': 'tools', 'AW': 'open',
    'HP': 'tools', 'RC': 'help',
  };

  return pillarMap[prefix] || 'open';
}

export default parseMessages;
