# Render Pipeline

HTML templates, PNG renders, and build scripts for all Playbook collateral. This is the production pipeline — every visual asset in the brand system is built here.

## Build scripts

| Script | What it does |
|--------|-------------|
| [render-cards.mjs](render-cards.mjs) | Puppeteer pipeline that renders all 36 HTML templates to PNG |
| [build-logos.mjs](build-logos.mjs) | Generates 15 logo SVGs from brand config |
| [build-icons.mjs](build-icons.mjs) | Generates 31 icon SVGs across 7 categories |
| [build-deck.mjs](build-deck.mjs) | Generates the PPTX brand overview deck |
| [brand-inject.css](brand-inject.css) | Auto-generated CSS injected into all HTML templates |

## Usage

```bash
npm install                           # Install puppeteer + pptxgenjs
node render-cards.mjs                 # Render all 36 templates
node render-cards.mjs poster          # Render only poster templates
node render-cards.mjs card-1a         # Render a specific template
node build-logos.mjs                  # Generate logo SVGs
node build-icons.mjs                  # Generate icon SVGs
node build-deck.mjs                   # Generate PPTX deck
```

## Templates (36 total)

### Tier 1 — Entertainment Literacy

| Template | Format | Size |
|----------|--------|------|
| `card-1a-hot-streak` | Social card | 1080 x 1080 |
| `card-1b-due-for-win` | Social card | 1080 x 1080 |
| `card-1c-lucky-machine` | Social card | 1080 x 1080 |
| `card-2a-house-edge` | Social card | 1080 x 1080 |
| `card-2b-sports-betting` | Social card | 1080 x 1080 |
| `card-2c-bonus-wagering` | Social card | 1080 x 1080 |
| `story-3a-hot-streak` | Story | 1080 x 1920 |
| `story-3b-house-edge` | Story | 1080 x 1920 |
| `story-3c-sports-betting` | Story | 1080 x 1920 |
| `poster-4a-know-your-game` | Poster | 1800 x 2400 |
| `poster-4b-no-fine-print` | Poster | 1800 x 2400 |
| `poster-4c-game-iq` | Poster | 1800 x 2400 |
| `rack-card-5a` | Rack card | 800 x 1800 |
| `table-tent-5b` | Table tent | 800 x 1200 |
| `helpline-card-5c` | Helpline card | 700 x 400 |
| `display-landscape-6a` | Digital display | 1920 x 1080 |
| `display-portrait-6b` | Digital display | 1080 x 1920 |
| `email-welcome-7a` | Email | 600 x 1100 |
| `email-deposit-7b` | Email | 600 x 1050 |
| `email-monthly-7c` | Email | 600 x 1200 |
| `email-reactivation-7d` | Email | 600 x 1050 |
| `brochure-trifold-8a` | Brochure inside | 2400 x 1000 |
| `brochure-cover-8b` | Brochure outside | 2400 x 1000 |
| `sign-entrance-9a` | Venue sign | 900 x 1200 |
| `sign-atm-9b` | Venue sign | 700 x 1000 |
| `sign-floor-9c` | Floor decal | 900 x 700 |
| `sign-restroom-9d` | Restroom sign | 560 x 400 |
| `sign-staff-9e` | Staff sign | 900 x 1200 |

### Tier 2 — Support & Crisis

| Template | Format | Size |
|----------|--------|------|
| `support-page-10a` | Support page | 800 x 1200 |
| `self-exclusion-10b` | Self-exclusion | 800 x 1000 |
| `session-summary-10c` | Session summary | 800 x 1200 |
| `limit-reached-10d` | Limit reached | 800 x 600 |
| `cooldown-10e` | Cooldown screen | 800 x 1000 |
| `card-tier2-10f` | Support card | 1080 x 1080 |
| `poster-tier2-10g` | Support poster | 1800 x 2400 |
| `email-support-10h` | Support email | 600 x 1100 |

## How it works

Each HTML template uses CSS variables from `brand-inject.css` and `{{PLACEHOLDER}}` tokens from [`_brand.yml`](../../_brand.yml). The render script resolves placeholders at build time, loads the HTML in a headless browser, and screenshots the target element to PNG.
