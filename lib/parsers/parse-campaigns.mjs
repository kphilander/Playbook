/**
 * parse-campaigns.mjs — Parse messaging/campaigns.md into structured JSON
 *
 * Each campaign is an H2 section with metadata lines, schedule table,
 * suggested captions, email option, and KPIs.
 */

import { readMarkdown, splitByH2, parsePipeTable, extractTokens } from './markdown-utils.mjs';

/**
 * @param {string} filePath
 * @returns {{ frontmatter: object, campaigns: object[] }}
 */
export function parseCampaigns(filePath) {
  const { frontmatter, body } = readMarkdown(filePath);
  const h2Sections = splitByH2(body);

  const campaigns = [];

  for (const section of h2Sections) {
    // Skip index section
    if (/campaign index/i.test(section.title)) continue;

    const idMatch = section.title.match(/^Campaign\s+(\d+):\s*(.+)$/i);
    if (!idMatch) continue;

    const campaign = {
      id: parseInt(idMatch[1], 10),
      name: idMatch[2].trim(),
    };

    // Extract metadata fields (bold key-value lines)
    campaign.theme = extractMeta(section.body, 'Theme');
    campaign.tagline = extractMeta(section.body, 'Tagline')?.replace(/^"(.*)"$/, '$1') || null;
    campaign.duration = extractMeta(section.body, 'Duration');
    campaign.pillar = extractMeta(section.body, 'Pillar')?.toLowerCase() || null;
    campaign.audience = extractMeta(section.body, 'Audience')
      ?.split(/,\s*/).map(s => s.trim().toLowerCase()) || [];
    campaign.mythsUsed = extractMythRefs(extractMeta(section.body, 'Myths used'));

    // Extract schedule table
    const tableMatch = section.body.match(/### Schedule\s*\n([\s\S]*?)(?=###|$)/i);
    if (tableMatch) {
      campaign.schedule = parsePipeTable(tableMatch[1]);
    } else {
      campaign.schedule = [];
    }

    // Extract suggested captions
    const captionsMatch = section.body.match(/### Suggested captions\s*\n([\s\S]*?)(?=###|$)/i);
    if (captionsMatch) {
      campaign.captions = extractCaptions(captionsMatch[1]);
    } else {
      campaign.captions = [];
    }

    // Extract email option
    const emailMatch = section.body.match(/### Email option\s*\n([\s\S]*?)(?=###|$)/i);
    if (emailMatch) {
      campaign.email = extractEmail(emailMatch[1]);
    } else {
      campaign.email = null;
    }

    // Extract KPIs
    const kpiMatch = section.body.match(/### KPIs\s*\n([\s\S]*?)(?=---|$)/i);
    if (kpiMatch) {
      campaign.kpis = kpiMatch[1]
        .split('\n')
        .filter(l => l.trim().startsWith('-'))
        .map(l => l.replace(/^-\s*/, '').trim());
    } else {
      campaign.kpis = [];
    }

    campaign.tokens = extractTokens(JSON.stringify(campaign));

    campaigns.push(campaign);
  }

  return { frontmatter, campaigns };
}

function extractMeta(text, key) {
  const pattern = new RegExp(`\\*\\*${key}\\*\\*:\\s*(.+)`, 'i');
  const match = text.match(pattern);
  return match ? match[1].trim() : null;
}

function extractMythRefs(text) {
  if (!text) return [];
  const nums = text.match(/\d+/g);
  return nums ? nums.map(Number) : [];
}

function extractCaptions(text) {
  const captions = [];
  const pattern = /\*\*(.+?)\*\*:\s*"([\s\S]*?)"/g;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    captions.push({
      label: match[1].trim(),
      text: match[2].trim(),
    });
  }
  return captions;
}

function extractEmail(text) {
  const subject = text.match(/\*\*Subject\*\*:\s*(.*)/i);
  const preview = text.match(/\*\*Preview text\*\*:\s*(.*)/i);
  const bodyLines = text
    .split('\n')
    .filter(l => l.trim().startsWith('> -'))
    .map(l => l.replace(/^>\s*-\s*/, '').trim());

  return {
    subject: subject ? subject[1].trim() : null,
    previewText: preview ? preview[1].trim() : null,
    bodyStructure: bodyLines,
  };
}

export default parseCampaigns;
