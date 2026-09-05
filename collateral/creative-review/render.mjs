import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { createHash } from 'node:crypto';
import { resolveBrandTokens } from '../../lib/resolve-placeholders.mjs';
const require = createRequire(new URL('../render/package.json', import.meta.url));
const puppeteer = require('puppeteer');
const here = dirname(fileURLToPath(import.meta.url));
const items = JSON.parse(readFileSync(join(here, 'concepts.json')));
const reports = [];
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
try {
  for (const item of items) {
    const page = await browser.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('requestfailed', r => errors.push(`Resource failed: ${r.url()}`));
    await page.setRequestInterception(true);
    page.on('request', r => /^(file:|data:|about:)/.test(r.url()) ? r.continue() : r.abort());
    await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
    const source = readFileSync(join(here, item.html), 'utf8');
    await page.goto(pathToFileURL(join(here, 'concepts/')).href);
    await page.setContent(resolveBrandTokens(source), { waitUntil: 'load' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(i => i.decode()));
    });
    const metrics = await page.evaluate(() => {
      const card = document.querySelector('.social-card'), b = card.getBoundingClientRect();
      const issues = [], texts = [], footer = card.querySelector('footer,[data-protected-zone]');
      const fb = footer?.getBoundingClientRect();
      const walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode, p = node.parentElement;
        if (!node.textContent.trim() || p.closest('[aria-hidden="true"],svg,style,script')) continue;
        const style = getComputedStyle(p);
        if (style.display === 'none' || style.visibility === 'hidden') continue;
        const size = parseFloat(style.fontSize), range = document.createRange();
        range.selectNodeContents(node);
        const rects = [...range.getClientRects()].filter(r => r.width && r.height);
        if (!rects.length) continue;
        const text = node.textContent.trim();
        texts.push({ text, size });
        if (size < 42) issues.push(`Below 42px: ${text}`);
        for (const r of rects) {
          if (r.left < b.left - 2 || r.right > b.right + 2 || r.top < b.top - 2 || r.bottom > b.bottom + 2) issues.push(`Outside artboard: ${text}`);
          if (fb && !footer.contains(p) && r.top < fb.bottom && r.bottom > fb.top && r.left < fb.right && r.right > fb.left) issues.push(`Footer overlap: ${text}`);
          for (let ancestor = p; ancestor && ancestor !== card; ancestor = ancestor.parentElement) {
            const cs = getComputedStyle(ancestor), ab = ancestor.getBoundingClientRect();
            if (/hidden|clip/.test(cs.overflowX) && (r.left < ab.left - 2 || r.right > ab.right + 2)) issues.push(`Clipped horizontally: ${text}`);
            if (/hidden|clip/.test(cs.overflowY) && (r.top < ab.top - size * .25 || r.bottom > ab.bottom + size * .25)) issues.push(`Clipped vertically: ${text}`);
          }
        }
      }
      if (b.width !== 1080 || b.height !== 1350) issues.push('Incorrect artboard size');
      if (card.classList.contains('revised-photo')) {
        const overlaps = (a, z) => a.left < z.right - 2 && a.right > z.left + 2 && a.top < z.bottom - 2 && a.bottom > z.top + 2;
        const art = [...card.querySelectorAll('.photo-proof img,.proof')].map(el => el.getBoundingClientRect());
        for (const el of card.querySelectorAll('h1,.explanation,.action')) {
          if (art.some(rect => overlaps(rect, el.getBoundingClientRect()))) issues.push(`Photo/proof overlaps copy: ${el.className || el.tagName}`);
        }
        const proof = card.querySelector('.proof'), pb = proof.getBoundingClientRect();
        for (const el of proof.querySelectorAll('strong,p,.math-row,.math-result')) {
          const r = el.getBoundingClientRect();
          if (r.left < pb.left - 2 || r.right > pb.right + 2 || r.top < pb.top - 2 || r.bottom > pb.bottom + 2) issues.push(`Outside proof panel: ${el.innerText}`);
        }
      }
      if (card.innerText.includes('{{')) issues.push('Unresolved token');
      if (!document.fonts.check('700 56px Inter')) issues.push('Heading font unavailable');
      return { width: b.width, height: b.height, title: card.querySelector('h1')?.innerText || document.title, texts, issues };
    });
    await (await page.$('.social-card')).screenshot({ path: join(here, item.png) });
    const issues = [...new Set([...errors, ...metrics.issues])];
    const sha256 = createHash('sha256').update(readFileSync(join(here, item.png))).digest('hex');
    reports.push({ id: item.id, ...metrics, issues, sha256 });
    console.log(`${item.id}: ${issues.length ? issues.join('; ') : 'PASS'}`);
    await page.close();
  }
} finally { await browser.close(); }
writeFileSync(join(here, 'concept-validation.json'), JSON.stringify(reports, null, 2) + '\n');
if (reports.some(r => r.issues.length)) process.exitCode = 1;
