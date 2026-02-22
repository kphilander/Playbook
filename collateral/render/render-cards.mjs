import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const cards = [
  { html: 'rack-card-5a.html', output: 'rack-card-5a.png', w: 800, h: 1800, selector: '.rack-card' },
  { html: 'table-tent-5b.html', output: 'table-tent-5b.png', w: 800, h: 1200, selector: '.table-tent' },
  { html: 'helpline-card-5c.html', output: 'helpline-card-5c.png', w: 700, h: 400, selector: '.helpline-card' },
  { html: 'display-landscape-6a.html', output: 'display-landscape-6a.png', w: 1920, h: 1080, selector: '.display-screen' },
  { html: 'display-portrait-6b.html', output: 'display-portrait-6b.png', w: 1080, h: 1920, selector: '.display-portrait' },
  { html: 'email-welcome-7a.html', output: 'email-welcome-7a.png', w: 600, h: 1100, selector: '.email' },
  { html: 'email-deposit-7b.html', output: 'email-deposit-7b.png', w: 600, h: 1050, selector: '.email' },
  { html: 'email-monthly-7c.html', output: 'email-monthly-7c.png', w: 600, h: 1200, selector: '.email' },
  { html: 'email-reactivation-7d.html', output: 'email-reactivation-7d.png', w: 600, h: 1050, selector: '.email' },
  { html: 'brochure-trifold-8a.html', output: 'brochure-trifold-8a.png', w: 2400, h: 1000, selector: '.brochure-inside' },
  { html: 'brochure-cover-8b.html', output: 'brochure-cover-8b.png', w: 2400, h: 1000, selector: '.brochure-outside' },
  { html: 'sign-entrance-9a.html', output: 'sign-entrance-9a.png', w: 900, h: 1200, selector: '.sign-entrance' },
  { html: 'sign-atm-9b.html', output: 'sign-atm-9b.png', w: 700, h: 1000, selector: '.sign-atm' },
  { html: 'sign-floor-9c.html', output: 'sign-floor-9c.png', w: 900, h: 700, selector: '.sign-floor' },
  { html: 'sign-restroom-9d.html', output: 'sign-restroom-9d.png', w: 560, h: 400, selector: '.sign-restroom' },
  { html: 'sign-staff-9e.html', output: 'sign-staff-9e.png', w: 900, h: 1200, selector: '.sign-staff' },
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
