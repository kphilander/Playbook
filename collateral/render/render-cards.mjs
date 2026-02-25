import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { resolveBrandTokens } from '../../lib/resolve-placeholders.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const cards = [
  // Social cards (1080x1080)
  { html: 'card-1a-hot-streak.html', output: 'card-1a-hot-streak.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-1b-due-for-win.html', output: 'card-1b-due-for-win.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-1c-lucky-machine.html', output: 'card-1c-lucky-machine.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-2a-house-edge.html', output: 'card-2a-house-edge.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-2b-sports-betting.html', output: 'card-2b-sports-betting.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-2c-bonus-wagering.html', output: 'card-2c-bonus-wagering.png', w: 1080, h: 1080, selector: '.social-card' },
  // Stories (1080x1920)
  { html: 'story-3a-hot-streak.html', output: 'story-3a-hot-streak.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'story-3b-house-edge.html', output: 'story-3b-house-edge.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'story-3c-sports-betting.html', output: 'story-3c-sports-betting.png', w: 1080, h: 1920, selector: '.story-card' },
  // Posters (1800x2400)
  { html: 'poster-4a-know-your-game.html', output: 'poster-4a-know-your-game.png', w: 1800, h: 2400, selector: '.poster' },
  { html: 'poster-4b-no-fine-print.html', output: 'poster-4b-no-fine-print.png', w: 1800, h: 2400, selector: '.poster' },
  { html: 'poster-4c-game-iq.html', output: 'poster-4c-game-iq.png', w: 1800, h: 2400, selector: '.poster' },
  // Print collateral
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
  // Tier 2
  { html: 'support-page-10a.html', output: 'support-page-10a.png', w: 800, h: 1200, selector: '.support-page' },
  { html: 'self-exclusion-10b.html', output: 'self-exclusion-10b.png', w: 800, h: 1000, selector: '.self-exclusion' },
  { html: 'session-summary-10c.html', output: 'session-summary-10c.png', w: 800, h: 1200, selector: '.session-summary' },
  { html: 'limit-reached-10d.html', output: 'limit-reached-10d.png', w: 800, h: 600, selector: '.limit-reached' },
  { html: 'cooldown-10e.html', output: 'cooldown-10e.png', w: 800, h: 1000, selector: '.cooldown-screen' },
  { html: 'card-tier2-10f.html', output: 'card-tier2-10f.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'poster-tier2-10g.html', output: 'poster-tier2-10g.png', w: 1800, h: 2400, selector: '.poster' },
  { html: 'email-support-10h.html', output: 'email-support-10h.png', w: 600, h: 1100, selector: '.email' },
  // How to Play — social cards (1080x1080)
  { html: 'htp-card-slots.html', output: 'htp-card-slots.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-blackjack.html', output: 'htp-card-blackjack.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-roulette.html', output: 'htp-card-roulette.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-sports.html', output: 'htp-card-sports.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-odds-comparison.html', output: 'htp-odds-comparison.png', w: 1080, h: 1080, selector: '.social-card' },
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

    // Read HTML and resolve {{PLACEHOLDER}} brand tokens from _brand.yml
    const filePath = join(__dirname, card.html);
    const rawHtml = readFileSync(filePath, 'utf-8');
    const resolvedHtml = resolveBrandTokens(rawHtml);

    // Use file:// base URL so relative CSS links (brand-inject.css) still resolve
    await page.goto(`file://${__dirname}/`, { waitUntil: 'domcontentloaded' });
    await page.setContent(resolvedHtml, { waitUntil: 'networkidle0' });

    // Wait for Google Fonts to load
    await page.evaluateHandle('document.fonts.ready');

    const element = await page.$(card.selector);
    if (element) {
      await element.screenshot({
        path: join(__dirname, card.output),
        type: 'png',
      });
      console.log(`Rendered: ${card.output}`);
    } else {
      console.warn(`⚠ Selector "${card.selector}" not found in ${card.html}`);
    }

    await page.close();
  }

  await browser.close();
  console.log('Done.');
}

render().catch(console.error);
