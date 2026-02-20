import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const cards = [
  { html: 'card-1a-hot-streak.html', output: 'card-1a-hot-streak.png' },
  { html: 'card-1b-due-for-win.html', output: 'card-1b-due-for-win.png' },
  { html: 'card-1c-lucky-machine.html', output: 'card-1c-lucky-machine.png' },
];

async function render() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const card of cards) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1080 });

    const filePath = join(__dirname, card.html);
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

    // Wait for Google Fonts to load
    await page.evaluateHandle('document.fonts.ready');

    const element = await page.$('.social-card');
    await element.screenshot({
      path: join(__dirname, card.output),
      type: 'png',
    });

    console.log(`Rendered: ${card.output}`);
    await page.close();
  }

  await browser.close();
  console.log('All cards rendered.');
}

render().catch(console.error);
