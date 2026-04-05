# Render Pipeline

HTML templates, PNG renders, and build scripts for all Playbook collateral. This is the production pipeline — every visual asset in the brand system is built here.

## Build scripts

| Script | What it does |
|--------|-------------|
| [render-cards.mjs](render-cards.mjs) | Puppeteer pipeline that renders all HTML templates to PNG |
| [build-logos.mjs](build-logos.mjs) | Generates 15 logo SVGs from brand config |
| [build-icons.mjs](build-icons.mjs) | Generates 31 icon SVGs across 7 categories |
| [build-deck.mjs](build-deck.mjs) | Generates the PPTX brand overview deck |
| [brand-inject.css](brand-inject.css) | Auto-generated CSS injected into all HTML templates |

## Usage

```bash
npm install                           # Install puppeteer + pptxgenjs
node render-cards.mjs                 # Render all templates
node render-cards.mjs poster          # Render only poster templates
node render-cards.mjs card-1a         # Render a specific template
node build-logos.mjs                  # Generate logo SVGs
node build-icons.mjs                  # Generate icon SVGs
node build-deck.mjs                   # Generate PPTX deck
```

## Templates (57 total)

### Tier 1 — Entertainment Literacy

| Template | Format | Size | Bleed |
|----------|--------|------|-------|
| `card-1a-hot-streak` | Social card | 1080 x 1080 | — |
| `card-1b-due-for-win` | Social card | 1080 x 1080 | — |
| `card-1c-lucky-machine` | Social card | 1080 x 1080 | — |
| `card-2a-house-edge` | Social card | 1080 x 1080 | — |
| `card-2b-sports-betting` | Social card | 1080 x 1080 | — |
| `card-2c-bonus-wagering` | Social card | 1080 x 1080 | — |
| `story-3a-hot-streak` | Story | 1080 x 1920 | — |
| `story-3b-house-edge` | Story | 1080 x 1920 | — |
| `story-3c-sports-betting` | Story | 1080 x 1920 | — |
| `poster-4a-know-your-game` | Poster | 1800 x 2400 | 24px |
| `poster-4b-no-fine-print` | Poster | 1800 x 2400 | 24px |
| `poster-4c-game-iq` | Poster | 1800 x 2400 | 24px |
| `poster-4d-lottery-odds` | Poster | 1800 x 2400 | 24px |
| `poster-4e-bingo-hall` | Poster | 1800 x 2400 | 24px |
| `rack-card-5a` | Rack card | 800 x 1800 | 24px |
| `table-tent-5b` | Table tent | 800 x 1200 | 24px |
| `display-landscape-6a` | Digital display | 1920 x 1080 | — |
| `display-portrait-6b` | Digital display | 1080 x 1920 | — |
| `email-welcome-7a` | Email | 600 x 1100 | — |
| `email-deposit-7b` | Email | 600 x 1050 | — |
| `email-monthly-7c` | Email | 600 x 1200 | — |
| `email-reactivation-7d` | Email | 600 x 1050 | — |
| `brochure-trifold-8a` | Brochure inside | 2400 x 1700 | 24px |
| `brochure-cover-8b` | Brochure outside | 2400 x 1700 | 24px |
| `sign-entrance-9a` | Venue sign | 900 x 1200 | 24px |
| `sign-atm-9b` | Venue sign | 700 x 1000 | 24px |
| `sign-floor-9c` | Floor decal | 900 x 700 | 24px |
| `sign-restroom-9d` | Restroom sign | 560 x 400 | 24px |
| `sign-staff-9e` | Staff sign | 900 x 1200 | 24px |
| `card-11a-streamer-myth` | Social card | 1080 x 1080 | — |
| `card-11b-lucky-numbers` | Social card | 1080 x 1080 | — |

### Tier 2 — Support & Crisis

| Template | Format | Size | Bleed |
|----------|--------|------|-------|
| `support-page-10a` | Support page | 800 x 1200 | — |
| `self-exclusion-10b` | Self-exclusion | 420 x 680 | — |
| `session-summary-10c` | Session summary | 420 x 320 | — |
| `limit-reached-10d` | Limit reached | 420 x 160 | — |
| `cooldown-10e` | Cooldown screen | 420 x 520 | — |
| `card-tier2-10f` | Support card | 1080 x 1080 | — |
| `poster-tier2-10g` | Support poster | 1800 x 2400 | 24px |
| `email-support-10h` | Support email | 600 x 1100 | — |
| `helpline-card-5c` | Helpline card | 700 x 400 | 24px |

### How to Play — Game Education

| Template | Format | Size |
|----------|--------|------|
| `htp-card-slots` | Social card | 1080 x 1080 |
| `htp-card-blackjack` | Social card | 1080 x 1080 |
| `htp-card-roulette` | Social card | 1080 x 1080 |
| `htp-card-sports` | Social card | 1080 x 1080 |
| `htp-card-baccarat` | Social card | 1080 x 1080 |
| `htp-card-video-poker` | Social card | 1080 x 1080 |
| `htp-card-craps` | Social card | 1080 x 1080 |
| `htp-card-bingo` | Social card | 1080 x 1080 |
| `htp-card-horse-racing` | Social card | 1080 x 1080 |
| `htp-card-lottery` | Social card | 1080 x 1080 |
| `htp-odds-comparison` | Infographic | 1080 x 1080 |

### iGaming — Online Operator Templates

| Template | Format | Size | Tier |
|----------|--------|------|------|
| `mobile-onboarding-12a` | Mobile screen | 420 x 812 | 1 |
| `deposit-interstitial-12b` | Mobile screen | 420 x 812 | 2 |
| `in-play-overlay-12c` | Mobile overlay | 420 x 280 | 2 |
| `app-banner-12d` | Web banner | 728 x 90 | 1 |
| `push-notification-12e` | Notification | 420 x 120 | 2 |
| `withdrawal-confirm-12f` | Mobile screen | 420 x 812 | 2 |
| `betslip-rg-12g` | Component | 420 x 320 | 1 |
| `web-popup-12h` | Modal | 480 x 560 | 2 |

## How it works

Each HTML template uses CSS variables from `brand-inject.css` and `{{PLACEHOLDER}}` tokens from [`_brand.yml`](../../_brand.yml). The render script resolves placeholders at build time, loads the HTML in a headless browser, and screenshots the target element to PNG.

### Tier system

- **Tier 1** (Entertainment Literacy): Navy backgrounds, gradient accent bar (orange-to-teal, 6-8px), full color palette, energetic visual treatment
- **Tier 2** (Support & Crisis): White backgrounds, solid teal accent bar (3px), no orange, calm visual treatment, 18px minimum body text

### Print bleed

Print templates include 24px (3mm at 200dpi 2x) bleed on all sides. The `body` padding creates the bleed zone around the root element. Render viewport dimensions include the bleed (element size + 48px).

### Customizability

- `--pb-template-text-scale`: Global text scale multiplier (default: 1)
- `--pb-scale-heading` / `--pb-scale-body` / `--pb-scale-stat` / `--pb-scale-legal`: Per-block text scale
- `--pb-grid-color` / `--pb-grid-opacity`: Grid overlay customization
- Content tokens (`{{STAT_GAME_1}}`, `{{HERO_HEADLINE}}`, etc.) resolve from `_brand.yml` `content_defaults` section
- `{{OPERATOR_LOGO}}` resolves to operator logo image or placeholder
