/* exports.js — File downloads: _brand.yml, brand-inject.css, sample PNGs,
   and the content kit ZIP.

   Fetch paths are relative to hub/configurator/, so they resolve both on
   the deployed site (…/tools/playbook/hub/configurator/) and on a local
   static server rooted at the repo. html2canvas and JSZip arrive as
   globals from the CDN <script> tags in index.html. */

import { generateFullYaml } from './yaml-export.js';
import { generateFullCss } from './css-export.js';
import { getOperatorTokens, resolveTokens, resolveTokensDeep } from './tokens.js';

const CONTENT_API_BASE = '../../api';
const COLLATERAL_BASE = '../..';

export function downloadYaml() {
  downloadFile('_brand.yml', generateFullYaml(), 'text/yaml');
}

export function downloadCss() {
  downloadFile('brand-inject.css', generateFullCss(), 'text/css');
}

export function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadSample(elementId, filename, btn) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const origText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.innerHTML = '<span style="font-size:11px;">Rendering&hellip;</span>';
    btn.disabled = true;
  }
  const scale = 1080 / el.offsetWidth;
  window.html2canvas(el, { scale, useCORS: true, backgroundColor: null, logging: false }).then(canvas => {
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = filename + '.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    if (btn) { btn.innerHTML = origText; btn.disabled = false; }
  }).catch(err => {
    console.error('Render failed:', err);
    if (btn) { btn.innerHTML = origText; btn.disabled = false; }
  });
}

async function fetchContentJson(endpoint) {
  const resp = await fetch(`${CONTENT_API_BASE}/${endpoint}`);
  if (!resp.ok) throw new Error(`Failed to fetch ${endpoint}: ${resp.status}`);
  return resp.json();
}

function jsonToCsv(items, columns) {
  const header = columns.map(c => c.label || c.key).join(',');
  const rows = items.map(item => {
    return columns.map(c => {
      let val = c.key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : ''), item);
      if (Array.isArray(val)) val = val.join('; ');
      if (typeof val === 'object' && val !== null) val = JSON.stringify(val);
      val = String(val ?? '');
      if (val.includes(',') || val.includes('"') || val.includes('\n')) {
        val = '"' + val.replace(/"/g, '""') + '"';
      }
      return val;
    }).join(',');
  });
  return [header, ...rows].join('\n');
}

export function slugifyName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'playbook';
}

export async function downloadContentKit(btn) {
  const origHTML = btn ? btn.innerHTML : '';
  if (btn) {
    btn.innerHTML = '<span style="font-size:12px;">Building kit&hellip;</span>';
    btn.disabled = true;
  }

  try {
    const tokens = getOperatorTokens();
    const programName = tokens['{{PROGRAM_NAME}}'];
    const useCSV = document.getElementById('csvToggle').checked;

    const [messages, myths, ctas, campaigns] = await Promise.all([
      fetchContentJson('messages.json'),
      fetchContentJson('myths.json'),
      fetchContentJson('ctas.json'),
      fetchContentJson('campaigns.json'),
    ]);

    const resolvedMessages = resolveTokensDeep(messages, tokens);
    const resolvedMyths = resolveTokensDeep(myths, tokens);
    const resolvedCtas = resolveTokensDeep(ctas, tokens);
    const resolvedCampaigns = resolveTokensDeep(campaigns, tokens);

    const zip = new window.JSZip();
    const folder = zip.folder(`${slugifyName(programName)}-content-kit`);

    folder.file('messages.json', JSON.stringify(resolvedMessages, null, 2));
    folder.file('myths.json', JSON.stringify(resolvedMyths, null, 2));
    folder.file('ctas.json', JSON.stringify(resolvedCtas, null, 2));
    folder.file('campaigns.json', JSON.stringify(resolvedCampaigns, null, 2));

    if (useCSV) {
      const msgItems = resolvedMessages.messages || [];
      const msgCsv = jsonToCsv(msgItems, [
        { key: 'id', label: 'ID' },
        { key: 'pillar', label: 'Pillar' },
        { key: 'section', label: 'Section' },
        { key: 'subsection', label: 'Subsection' },
        { key: 'message', label: 'Message' },
        { key: 'context', label: 'Context' },
        { key: 'tone', label: 'Tone' },
        { key: 'tier', label: 'Tier' },
        { key: 'maxChars', label: 'Max Chars' },
      ]);
      folder.file('messages.csv', msgCsv);

      const ctaItems = resolvedCtas.ctas || [];
      const ctaCsv = jsonToCsv(ctaItems, [
        { key: 'id', label: 'ID' },
        { key: 'section', label: 'Section' },
        { key: 'label', label: 'Label' },
        { key: 'maxChars', label: 'Max Chars' },
        { key: 'context', label: 'Context' },
        { key: 'tone', label: 'Tone' },
        { key: 'pairWith', label: 'Pair With' },
      ]);
      folder.file('ctas.csv', ctaCsv);
    }

    folder.file('_brand.yml', generateFullYaml());
    folder.file('brand-inject.css', generateFullCss());
    folder.file('widget-embed.html', generateAllEmbedSnippets(tokens));

    try {
      const rgResp = await fetch(`${COLLATERAL_BASE}/collateral/rg-page.html`);
      if (rgResp.ok) {
        const rgTemplate = await rgResp.text();
        folder.file('rg-page.html', resolveTokens(rgTemplate, tokens));
      }
    } catch (e) { console.warn('Could not include RG page template:', e); }

    try {
      const wResp = await fetch(`${COLLATERAL_BASE}/widgets/playbook-widgets.js`);
      if (wResp.ok) {
        folder.file('playbook-widgets.js', await wResp.text());
      }
    } catch (e) { console.warn('Could not include widget bundle:', e); }

    folder.file('myths.json', JSON.stringify(resolvedMyths, null, 2));
    folder.file('README.md', generateReadme(programName));

    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slugifyName(programName)}-content-kit.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (btn) {
      btn.innerHTML = '<span style="font-size:12px;">✓ Downloaded!</span>';
      setTimeout(() => { btn.innerHTML = origHTML; btn.disabled = false; }, 2000);
    }
  } catch (err) {
    console.error('Content Kit build failed:', err);
    if (btn) {
      btn.innerHTML = '<span style="font-size:12px;">Error — try again</span>';
      setTimeout(() => { btn.innerHTML = origHTML; btn.disabled = false; }, 3000);
    }
  }
}

export async function downloadSingleJson(type, btn) {
  const origHTML = btn ? btn.innerHTML : '';
  if (btn) {
    btn.innerHTML = '<span style="font-size:11px;">Loading&hellip;</span>';
    btn.disabled = true;
  }

  try {
    const tokens = getOperatorTokens();
    const useCSV = document.getElementById('csvToggle').checked;
    const data = await fetchContentJson(`${type}.json`);
    const resolved = resolveTokensDeep(data, tokens);

    if (useCSV && (type === 'messages' || type === 'ctas')) {
      const items = type === 'messages' ? resolved.messages : resolved.ctas;
      const cols = type === 'messages'
        ? [{ key: 'id', label: 'ID' }, { key: 'pillar', label: 'Pillar' }, { key: 'section', label: 'Section' }, { key: 'message', label: 'Message' }, { key: 'context', label: 'Context' }, { key: 'tone', label: 'Tone' }, { key: 'tier', label: 'Tier' }, { key: 'maxChars', label: 'Max Chars' }]
        : [{ key: 'id', label: 'ID' }, { key: 'section', label: 'Section' }, { key: 'label', label: 'Label' }, { key: 'maxChars', label: 'Max Chars' }, { key: 'context', label: 'Context' }, { key: 'tone', label: 'Tone' }];
      downloadFile(`${type}.csv`, jsonToCsv(items || [], cols), 'text/csv');
    } else {
      downloadFile(`${type}.json`, JSON.stringify(resolved, null, 2), 'application/json');
    }
    if (btn) { btn.innerHTML = origHTML; btn.disabled = false; }
  } catch (err) {
    console.error(`Download ${type} failed:`, err);
    if (btn) {
      btn.innerHTML = '<span style="font-size:11px;">Error</span>';
      setTimeout(() => { btn.innerHTML = origHTML; btn.disabled = false; }, 2000);
    }
  }
}

function generateAllEmbedSnippets(tokens) {
  const helpline = tokens['{{HELPLINE_NUMBER}}'];
  const primary = document.getElementById('colorPrimary').value;
  const secondary = document.getElementById('colorSecondary').value;
  const accent = document.getElementById('colorAccent').value;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Playbook Widget Examples</title>
  <style>
    :root {
      --pb-primary: ${primary};
      --pb-secondary: ${secondary};
      --pb-accent: ${accent};
    }
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; }
    h2 { margin-top: 40px; }
  </style>
</head>
<body>
  <h1>Playbook Widgets</h1>

  <!-- Load widget bundle -->
  <script src="https://cdn.jsdelivr.net/gh/kphilander/Playbook@main/widgets/dist/playbook-widgets.js"><\/script>

  <h2>Helpline Banner</h2>
  <playbook-helpline number="${helpline}" label="Free 24/7 support" theme="dark" mode="banner"></playbook-helpline>

  <h2>Myth Card</h2>
  <playbook-myth category="slots" api-url="https://cdn.jsdelivr.net/gh/kphilander/Playbook@main/api/myths.json"></playbook-myth>

  <h2>Odds Card</h2>
  <playbook-odds game="blackjack"></playbook-odds>
</body>
</html>
`;
}

function generateReadme(programName) {
  return `# ${programName} — Content Kit

Generated by the [Playbook Brand Configurator](https://github.com/kphilander/Playbook).

## What's Inside

| File | Description |
|------|-------------|
| \`rg-page.html\` | **Your complete responsible gambling page** — deploy directly on your site |
| \`playbook-widgets.js\` | Widget bundle for interactive components (helpline, myths, odds) |
| \`brand-inject.css\` | CSS custom properties for your brand tokens |
| \`_brand.yml\` | Brand configuration (colors, fonts, helpline, legal) |
| \`messages.json\` | ${programName} core messages (pillar, contextual, seasonal, compliance) |
| \`myths.json\` | Myth-buster content (social cards, explainers, quiz questions) |
| \`ctas.json\` | Calls to action by section |
| \`campaigns.json\` | Campaign briefs with schedules and templates |
| \`widget-embed.html\` | Widget embed examples for emails, product pages, etc. |

## Deploy Your RG Page

The quickest path to a complete responsible gambling page:

1. Upload \`rg-page.html\`, \`playbook-widgets.js\`, \`brand-inject.css\`, and \`myths.json\` to your server
2. Link to \`rg-page.html\` from your site navigation, footer, or account area
3. Update any remaining placeholder URLs (limits page, self-exclusion) if needed

The page includes: odds transparency, limit-setting tools, myth-busters, self-exclusion info,
helpline resources, and support organizations — all with your brand tokens pre-filled.

## Embed Components Elsewhere

Use the individual widgets across your platform:

- **Email footers / headers** — \`<playbook-helpline>\` for persistent helpline access
- **Game pages / lobby** — \`<playbook-odds>\` for odds transparency next to each game
- **Blog / educational content** — \`<playbook-myth>\` for interactive myth-busting

See \`widget-embed.html\` for copy-paste examples.

## Content API

Live JSON feeds (with default Playbook tokens — use the kit files for your resolved versions):
- \`https://cdn.jsdelivr.net/gh/kphilander/Playbook@main/api/messages.json\`
- \`https://cdn.jsdelivr.net/gh/kphilander/Playbook@main/api/myths.json\`
- \`https://cdn.jsdelivr.net/gh/kphilander/Playbook@main/api/ctas.json\`
- \`https://cdn.jsdelivr.net/gh/kphilander/Playbook@main/api/campaigns.json\`

## Compliance Note

Playbook content helps operators meet common responsible gambling requirements, but it does not
constitute legal or regulatory advice. Requirements vary by jurisdiction and change frequently.
Review all content with your compliance team before deployment.

## License

Content: CC0-1.0 (Public Domain) — use freely, no attribution required.
Source: [github.com/kphilander/Playbook](https://github.com/kphilander/Playbook)
`;
}
