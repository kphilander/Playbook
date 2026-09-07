import puppeteer from 'puppeteer';
import yaml from 'js-yaml';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolveBrandTokens } from '../../../lib/resolve-placeholders.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../../..');
const participant = process.argv[2];
if (!participant || !/^[a-z0-9-]+$/.test(participant)) {
  throw new Error('Usage: node collateral/render/model-comparison/render.mjs MODEL_FOLDER');
}
const folder = join(here, participant);
const manifest = JSON.parse(readFileSync(join(folder, 'manifest.json'), 'utf8'));
const taxonomy = yaml.load(readFileSync(join(root, '_taxonomy.yml'), 'utf8'));
const ids = ['sports', 'myth', 'wildcard'];
if (JSON.stringify(manifest.concepts.map(c => c.id)) !== JSON.stringify(ids)) {
  throw new Error('Manifest must contain sports, myth, wildcard in that order.');
}
for (const concept of manifest.concepts) {
  for (const field of ['title', 'rationale', 'caption', 'alt']) {
    if (typeof concept[field] !== 'string' || !concept[field].trim()) throw new Error(`${concept.id}: missing ${field}`);
  }
  if (concept.category !== concept.id) throw new Error(`${concept.id}: incorrect category`);
  if (!concept.sources?.length) throw new Error(`${concept.id}: sources required`);
  for (const source of concept.sources) {
    if (!source.section || !source.note || !existsSync(join(root, source.path))) throw new Error(`${concept.id}: incomplete source`);
  }
  for (const key of ['content_type', 'pillar', 'tier', 'tone', 'audience', 'channel', 'reading_level']) {
    const values = Array.isArray(concept.tags?.[key]) ? concept.tags[key] : [concept.tags?.[key]];
    if (!values.length || values.some(value => !taxonomy[key]?.includes(value))) throw new Error(`${concept.id}: invalid ${key}`);
  }
}

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const report = [];
try {
  for (const id of ids) {
    const page = await browser.newPage();
    const issues = [];
    const raw = readFileSync(join(folder, `${id}.html`), 'utf8');
    for (const token of ['PROGRAM_SHORT_NAME', 'HELPLINE_NUMBER', 'AGE_DISCLAIMER']) {
      if (!raw.includes(`{{${token}}}`)) issues.push(`Missing ${token} placeholder`);
    }
    const blocked = [];
    const failedResources = [];
    await page.setRequestInterception(true);
    page.on('request', request => {
      if (/^(file:|data:|about:)/.test(request.url())) request.continue();
      else { blocked.push(request.url()); request.abort(); }
    });
    page.on('requestfailed', request => failedResources.push(request.url()));
    page.on('pageerror', error => issues.push(error.message));
    await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
    try {
      await page.goto(pathToFileURL(`${folder}/`).href, { waitUntil: 'domcontentloaded' });
      await page.setContent(resolveBrandTokens(raw), { waitUntil: 'networkidle0' });
      await page.evaluate(() => document.fonts.ready);
      const metrics = await page.evaluate(() => {
        const roots = document.querySelectorAll('.social-card');
        const root = roots[0];
        if (!root) return { issues: ['Missing .social-card'] };
        const box = root.getBoundingClientRect();
        const footer = root.querySelector(':scope > .card-footer');
        const footerBox = footer?.getBoundingClientRect();
        const issues = [];
        if (roots.length !== 1) issues.push('Expected exactly one .social-card');
        if (Math.abs(box.width - 1080) > 1 || Math.abs(box.height - 1350) > 1) issues.push(`Size is ${box.width} × ${box.height}`);
        if (root.scrollWidth > 1081 || root.scrollHeight > 1351) issues.push('Root content overflows');
        if (!footer?.hasAttribute('data-protected-zone')) issues.push('Missing protected direct-child footer');
        if (/\{\{/.test(root.innerText)) issues.push('Unresolved placeholder');
        const texts = [];
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const node = walker.currentNode;
          if (!node.textContent.trim()) continue;
          const el = node.parentElement;
          if (el.closest('style,script,svg title,svg desc')) continue;
          const style = getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || !el.getClientRects().length) continue;
          const text = node.textContent.trim().replace(/\s+/g, ' ').slice(0, 72);
          const fontSize = parseFloat(style.fontSize);
          if (fontSize < 41.9) issues.push(`Text below 42px: ${text} (${fontSize}px)`);
          const range = document.createRange();
          range.selectNodeContents(node);
          const rects = [...range.getClientRects()];
          for (const r of rects) {
            if (r.left < box.left - 1 || r.top < box.top - 1 || r.right > box.right + 1 || r.bottom > box.bottom + 1) issues.push(`Text outside artboard: ${text}`);
            if (footerBox && !footer.contains(el) && r.bottom > footerBox.top + 1 && r.top < footerBox.bottom - 1 && r.right > footerBox.left && r.left < footerBox.right) issues.push(`Text overlaps footer: ${text}`);
          }
          texts.push({ text, fontSize, color: style.color, fontFamily: style.fontFamily });
        }
        return { width: box.width, height: box.height, minFontSize: Math.min(...texts.map(t => t.fontSize)), textCount: texts.length, issues: [...new Set(issues)] };
      });
      issues.push(...metrics.issues);
      if (blocked.length) issues.push(`External resources requested: ${blocked.join(', ')}`);
      if (failedResources.length) issues.push(`Resources failed: ${failedResources.join(', ')}`);
      const element = await page.$('.social-card');
      if (element) await element.screenshot({ path: join(folder, `${id}.png`) });
      report.push({ id, ...metrics, issues: [...new Set(issues)] });
      console.log(`${participant}/${id}: ${issues.length ? 'FAIL' : 'PASS'} (${metrics.width} × ${metrics.height}; minimum text ${metrics.minFontSize}px)`);
      for (const issue of issues) console.error(`  - ${issue}`);
    } finally { await page.close(); }
  }
} finally { await browser.close(); }
writeFileSync(join(folder, 'validation.json'), `${JSON.stringify(report, null, 2)}\n`);
if (report.some(item => item.issues.length)) process.exitCode = 1;
