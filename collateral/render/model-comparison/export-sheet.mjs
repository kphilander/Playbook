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
  for (const sheet of await page.$$('.sheet')) {
    const result = await sheet.evaluate(element => ({ name: element.dataset.export, count: Number(element.dataset.count), images: [...element.querySelectorAll('img')].map(img => img.complete && img.naturalWidth === 1080 && img.naturalHeight === 1350) }));
    if (result.images.length !== result.count || result.images.some(loaded => !loaded)) throw new Error(`Incomplete images in ${result.name}`);
    if (!/^contact-sheet(?:-additions)?$/.test(result.name)) throw new Error('Invalid sheet name');
    await sheet.screenshot({ path: join(here, `${result.name}.png`) });
    console.log(`Exported ${result.name}.png`);
  }
} finally { await browser.close(); }
