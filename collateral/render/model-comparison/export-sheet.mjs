import puppeteer from 'puppeteer';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 2400, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(join(here, 'contact-sheet.html')).href, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  const images = await page.$$eval('.sheet-cards img', items => items.map(img => ({ loaded: img.complete && img.naturalWidth === 1080 && img.naturalHeight === 1350, src: img.src })));
  if (images.length !== 9 || images.some(img => !img.loaded)) throw new Error('Expected nine complete 1080 × 1350 images');
  const sheet = await page.$('.sheet');
  await sheet.screenshot({ path: join(here, 'contact-sheet.png') });
  console.log('Exported contact-sheet.png');
} finally { await browser.close(); }
