/**
 * parse-ctas.mjs — Parse messaging/calls-to-action.md into structured JSON
 *
 * CTAs are organized in pipe tables under H2 section headings.
 * Table schema: | # | CTA label | Max chars | Context / placement | Tone | Pair with taglines |
 */

import { readMarkdown, extractTablesWithHeadings, extractTokens } from './markdown-utils.mjs';

/**
 * @param {string} filePath
 * @returns {{ frontmatter: object, sections: object[] }}
 */
export function parseCTAs(filePath) {
  const { frontmatter, body } = readMarkdown(filePath);
  const tablesWithHeadings = extractTablesWithHeadings(body);

  const sections = [];

  for (const { heading, subheading, table } of tablesWithHeadings) {
    // Skip index tables, format guide, and urgency spectrum
    if (/quick-scan|cta format|urgency/i.test(heading)) continue;
    if (/quick-scan|cta format|urgency/i.test(subheading)) continue;

    const ctas = [];

    for (const row of table) {
      const id = row['_'] || row['#'] || row[''] || '';
      if (!id || id.startsWith('**') || id === '---') continue;

      const label = (row.cta_label || '').replace(/^"(.*)"$/, '$1');
      if (!label) continue;

      ctas.push({
        id: id.trim(),
        label,
        maxChars: row.max_chars ? parseInt(row.max_chars, 10) : null,
        context: row.context_placement || row['context___placement'] || null,
        tone: row.tone || null,
        pairWith: row.pair_with_taglines
          ? row.pair_with_taglines.split(/,\s*/).map(s => s.trim())
          : [],
        tokens: extractTokens(label),
      });
    }

    if (ctas.length > 0) {
      // Extract section description from body text between heading and table
      const sectionPattern = new RegExp(
        `## ${escapeRegex(heading)}\\s*\\n\\n([^|\\n]+)`,
        'i'
      );
      const descMatch = body.match(sectionPattern);

      sections.push({
        name: heading,
        description: descMatch ? descMatch[1].trim() : null,
        ctas,
      });
    }
  }

  return { frontmatter, sections };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default parseCTAs;
