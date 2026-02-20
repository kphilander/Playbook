import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const cards = [
  { html: 'card-1a-hot-streak.html', output: 'card-1a-hot-streak.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-1b-due-for-win.html', output: 'card-1b-due-for-win.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-1c-lucky-machine.html', output: 'card-1c-lucky-machine.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'story-3a-hot-streak.html', output: 'story-3a-hot-streak.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'story-3b-house-edge.html', output: 'story-3b-house-edge.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'story-3c-sports-betting.html', output: 'story-3c-sports-betting.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'card-2a-house-edge.html', output: 'card-2a-house-edge.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-2b-sports-betting.html', output: 'card-2b-sports-betting.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-2c-bonus-wagering.html', output: 'card-2c-bonus-wagering.png', w: 1080, h: 1080, selector: '.social-card' },
];

// Filter to only render files passed as CLI args, or all if none given
const filter = process.argv.slice(2);
const toRender = filter.length > 0
  ? cards.filter(c => filter.some(f => c.html.includes(f) || c.output.includes(f)))
  : cards;

async function render() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const card of toRender) {
    const page = await browser.newPage();
    await page.setViewport({ width: card.w, height: card.h });

    const filePath = join(__dirname, card.html);
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

    // Wait for Google Fonts to load
    await page.evaluateHandle('document.fonts.ready');

    const element = await page.$(card.selector);
    await element.screenshot({
      path: join(__dirname, card.output),
      type: 'png',
    });

    console.log(`Rendered: ${card.output}`);
    await page.close();
  }

  await browser.close();
  console.log('Done.');
}

render().catch(console.error);
