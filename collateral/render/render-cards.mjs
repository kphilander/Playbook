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
  { html: 'poster-4a-know-your-game.html', output: 'poster-4a-know-your-game.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'poster-4b-no-fine-print.html', output: 'poster-4b-no-fine-print.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'poster-4c-game-iq.html', output: 'poster-4c-game-iq.png', w: 1848, h: 2448, selector: '.poster' },
  // Print collateral
  { html: 'rack-card-5a.html', output: 'rack-card-5a.png', w: 848, h: 1848, selector: '.rack-card' },
  { html: 'table-tent-5b.html', output: 'table-tent-5b.png', w: 848, h: 1248, selector: '.table-tent' },
  { html: 'helpline-card-5c.html', output: 'helpline-card-5c.png', w: 748, h: 448, selector: '.helpline-card' },
  { html: 'display-landscape-6a.html', output: 'display-landscape-6a.png', w: 1920, h: 1080, selector: '.display-screen' },
  { html: 'display-portrait-6b.html', output: 'display-portrait-6b.png', w: 1080, h: 1920, selector: '.display-portrait' },
  { html: 'email-welcome-7a.html', output: 'email-welcome-7a.png', w: 600, h: 1100, selector: '.email' },
  { html: 'email-deposit-7b.html', output: 'email-deposit-7b.png', w: 600, h: 1050, selector: '.email' },
  { html: 'email-monthly-7c.html', output: 'email-monthly-7c.png', w: 600, h: 1200, selector: '.email' },
  { html: 'email-reactivation-7d.html', output: 'email-reactivation-7d.png', w: 600, h: 1050, selector: '.email' },
  { html: 'brochure-trifold-8a.html', output: 'brochure-trifold-8a.png', w: 2448, h: 1748, selector: '.brochure-inside' },
  { html: 'brochure-cover-8b.html', output: 'brochure-cover-8b.png', w: 2448, h: 1748, selector: '.brochure-outside' },
  { html: 'sign-entrance-9a.html', output: 'sign-entrance-9a.png', w: 948, h: 1248, selector: '.sign-entrance' },
  { html: 'sign-atm-9b.html', output: 'sign-atm-9b.png', w: 748, h: 1048, selector: '.sign-atm' },
  { html: 'sign-floor-9c.html', output: 'sign-floor-9c.png', w: 948, h: 748, selector: '.sign-floor' },
  { html: 'sign-restroom-9d.html', output: 'sign-restroom-9d.png', w: 608, h: 448, selector: '.sign-restroom' },
  { html: 'sign-staff-9e.html', output: 'sign-staff-9e.png', w: 948, h: 1248, selector: '.sign-staff' },
  // Tier 2
  { html: 'support-page-10a.html', output: 'support-page-10a.png', w: 800, h: 1200, selector: '.support-page' },
  { html: 'self-exclusion-10b.html', output: 'self-exclusion-10b.png', w: 480, h: 740, selector: '.self-exclusion' },
  { html: 'session-summary-10c.html', output: 'session-summary-10c.png', w: 480, h: 420, selector: '.session-summary' },
  { html: 'limit-reached-10d.html', output: 'limit-reached-10d.png', w: 480, h: 220, selector: '.limit-reached' },
  { html: 'cooldown-10e.html', output: 'cooldown-10e.png', w: 480, h: 580, selector: '.cooldown-screen' },
  { html: 'card-tier2-10f.html', output: 'card-tier2-10f.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'poster-tier2-10g.html', output: 'poster-tier2-10g.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'email-support-10h.html', output: 'email-support-10h.png', w: 600, h: 1100, selector: '.email' },
  // How to Play — social cards (1080x1080)
  { html: 'htp-card-slots.html', output: 'htp-card-slots.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-blackjack.html', output: 'htp-card-blackjack.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-roulette.html', output: 'htp-card-roulette.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-sports.html', output: 'htp-card-sports.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-baccarat.html', output: 'htp-card-baccarat.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-video-poker.html', output: 'htp-card-video-poker.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-craps.html', output: 'htp-card-craps.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-bingo.html', output: 'htp-card-bingo.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-horse-racing.html', output: 'htp-card-horse-racing.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-card-lottery.html', output: 'htp-card-lottery.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'htp-odds-comparison.html', output: 'htp-odds-comparison.png', w: 1080, h: 1080, selector: '.social-card' },
  // Demographic-specific collateral
  { html: 'poster-4d-lottery-odds.html', output: 'poster-4d-lottery-odds.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'poster-4e-bingo-hall.html', output: 'poster-4e-bingo-hall.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'card-11a-streamer-myth.html', output: 'card-11a-streamer-myth.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-11b-lucky-numbers.html', output: 'card-11b-lucky-numbers.png', w: 1080, h: 1080, selector: '.social-card' },
  // iGaming templates
  { html: 'mobile-onboarding-12a.html', output: 'mobile-onboarding-12a.png', w: 420, h: 812, selector: '.mobile-onboarding' },
  { html: 'deposit-interstitial-12b.html', output: 'deposit-interstitial-12b.png', w: 420, h: 812, selector: '.deposit-interstitial' },
  { html: 'in-play-overlay-12c.html', output: 'in-play-overlay-12c.png', w: 420, h: 280, selector: '.in-play-overlay' },
  { html: 'app-banner-12d.html', output: 'app-banner-12d.png', w: 728, h: 90, selector: '.app-banner' },
  { html: 'push-notification-12e.html', output: 'push-notification-12e.png', w: 420, h: 120, selector: '.push-notification' },
  { html: 'withdrawal-confirm-12f.html', output: 'withdrawal-confirm-12f.png', w: 420, h: 812, selector: '.withdrawal-confirm' },
  { html: 'betslip-rg-12g.html', output: 'betslip-rg-12g.png', w: 420, h: 320, selector: '.betslip-rg' },
  { html: 'web-popup-12h.html', output: 'web-popup-12h.png', w: 480, h: 560, selector: '.web-popup' },
  // Cognitive distortion / myth cards
  { html: 'card-13a-its-due.html', output: 'card-13a-its-due.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13b-near-win.html', output: 'card-13b-near-win.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13c-picked-right.html', output: 'card-13c-picked-right.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13d-won-big.html', output: 'card-13d-won-big.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13e-lucky-shirt.html', output: 'card-13e-lucky-shirt.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13f-earned-win.html', output: 'card-13f-earned-win.png', w: 1080, h: 1080, selector: '.social-card' },
  // "Every game has math. Here's yours." cross-format showcase
  { html: 'card-14a-every-game-blackjack.html', output: 'card-14a-every-game-blackjack.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'story-14b-every-game-roulette.html', output: 'story-14b-every-game-roulette.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'poster-14c-every-game-slots.html', output: 'poster-14c-every-game-slots.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'email-14d-every-game.html', output: 'email-14d-every-game.png', w: 600, h: 1100, selector: '.email' },
  { html: 'display-14e-every-game.html', output: 'display-14e-every-game.png', w: 1920, h: 1080, selector: '.display-screen' },
  { html: 'mobile-14f-every-game.html', output: 'mobile-14f-every-game.png', w: 420, h: 812, selector: '.mobile-screen' },
  // Playoff basketball / sports betting education campaign
  { html: 'card-15a-point-spread.html', output: 'card-15a-point-spread.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'story-15b-bet-costs.html', output: 'story-15b-bet-costs.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'poster-15c-how-sportsbook-wins.html', output: 'poster-15c-how-sportsbook-wins.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'live-odds-overlay-15d.html', output: 'live-odds-overlay-15d.png', w: 420, h: 280, selector: '.live-overlay' },
  // i18n Phase A — Japanese (Japan) variants
  { html: 'card-13a-its-due.ja.html', output: 'card-13a-its-due.ja.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13b-near-win.ja.html', output: 'card-13b-near-win.ja.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13c-picked-right.ja.html', output: 'card-13c-picked-right.ja.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13d-won-big.ja.html', output: 'card-13d-won-big.ja.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13e-lucky-shirt.ja.html', output: 'card-13e-lucky-shirt.ja.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13f-earned-win.ja.html', output: 'card-13f-earned-win.ja.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-14a-every-game-blackjack.ja.html', output: 'card-14a-every-game-blackjack.ja.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'story-14b-every-game-roulette.ja.html', output: 'story-14b-every-game-roulette.ja.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'poster-14c-every-game-slots.ja.html', output: 'poster-14c-every-game-slots.ja.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'email-14d-every-game.ja.html', output: 'email-14d-every-game.ja.png', w: 600, h: 1100, selector: '.email' },
  { html: 'display-14e-every-game.ja.html', output: 'display-14e-every-game.ja.png', w: 1920, h: 1080, selector: '.display-screen' },
  { html: 'mobile-14f-every-game.ja.html', output: 'mobile-14f-every-game.ja.png', w: 420, h: 812, selector: '.mobile-screen' },
  { html: 'card-15a-point-spread.ja.html', output: 'card-15a-point-spread.ja.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'story-15b-bet-costs.ja.html', output: 'story-15b-bet-costs.ja.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'poster-15c-how-sportsbook-wins.ja.html', output: 'poster-15c-how-sportsbook-wins.ja.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'live-odds-overlay-15d.ja.html', output: 'live-odds-overlay-15d.ja.png', w: 420, h: 280, selector: '.live-overlay' },
  // i18n Phase A — Simplified Chinese (Macau) variants
  { html: 'card-13a-its-due.zh-CN.html', output: 'card-13a-its-due.zh-CN.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13b-near-win.zh-CN.html', output: 'card-13b-near-win.zh-CN.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13c-picked-right.zh-CN.html', output: 'card-13c-picked-right.zh-CN.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13d-won-big.zh-CN.html', output: 'card-13d-won-big.zh-CN.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13e-lucky-shirt.zh-CN.html', output: 'card-13e-lucky-shirt.zh-CN.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13f-earned-win.zh-CN.html', output: 'card-13f-earned-win.zh-CN.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-14a-every-game-blackjack.zh-CN.html', output: 'card-14a-every-game-blackjack.zh-CN.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'story-14b-every-game-roulette.zh-CN.html', output: 'story-14b-every-game-roulette.zh-CN.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'poster-14c-every-game-slots.zh-CN.html', output: 'poster-14c-every-game-slots.zh-CN.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'email-14d-every-game.zh-CN.html', output: 'email-14d-every-game.zh-CN.png', w: 600, h: 1100, selector: '.email' },
  { html: 'display-14e-every-game.zh-CN.html', output: 'display-14e-every-game.zh-CN.png', w: 1920, h: 1080, selector: '.display-screen' },
  { html: 'mobile-14f-every-game.zh-CN.html', output: 'mobile-14f-every-game.zh-CN.png', w: 420, h: 812, selector: '.mobile-screen' },
  { html: 'card-15a-point-spread.zh-CN.html', output: 'card-15a-point-spread.zh-CN.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'story-15b-bet-costs.zh-CN.html', output: 'story-15b-bet-costs.zh-CN.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'poster-15c-how-sportsbook-wins.zh-CN.html', output: 'poster-15c-how-sportsbook-wins.zh-CN.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'live-odds-overlay-15d.zh-CN.html', output: 'live-odds-overlay-15d.zh-CN.png', w: 420, h: 280, selector: '.live-overlay' },
  // i18n Phase A — Arabic (UAE) variants with RTL
  { html: 'card-13a-its-due.ar.html', output: 'card-13a-its-due.ar.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13b-near-win.ar.html', output: 'card-13b-near-win.ar.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13c-picked-right.ar.html', output: 'card-13c-picked-right.ar.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13d-won-big.ar.html', output: 'card-13d-won-big.ar.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13e-lucky-shirt.ar.html', output: 'card-13e-lucky-shirt.ar.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-13f-earned-win.ar.html', output: 'card-13f-earned-win.ar.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'card-14a-every-game-blackjack.ar.html', output: 'card-14a-every-game-blackjack.ar.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'story-14b-every-game-roulette.ar.html', output: 'story-14b-every-game-roulette.ar.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'poster-14c-every-game-slots.ar.html', output: 'poster-14c-every-game-slots.ar.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'email-14d-every-game.ar.html', output: 'email-14d-every-game.ar.png', w: 600, h: 1100, selector: '.email' },
  { html: 'display-14e-every-game.ar.html', output: 'display-14e-every-game.ar.png', w: 1920, h: 1080, selector: '.display-screen' },
  { html: 'mobile-14f-every-game.ar.html', output: 'mobile-14f-every-game.ar.png', w: 420, h: 812, selector: '.mobile-screen' },
  { html: 'card-15a-point-spread.ar.html', output: 'card-15a-point-spread.ar.png', w: 1080, h: 1080, selector: '.social-card' },
  { html: 'story-15b-bet-costs.ar.html', output: 'story-15b-bet-costs.ar.png', w: 1080, h: 1920, selector: '.story-card' },
  { html: 'poster-15c-how-sportsbook-wins.ar.html', output: 'poster-15c-how-sportsbook-wins.ar.png', w: 1848, h: 2448, selector: '.poster' },
  { html: 'live-odds-overlay-15d.ar.html', output: 'live-odds-overlay-15d.ar.png', w: 420, h: 280, selector: '.live-overlay' },
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
