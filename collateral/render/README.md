# Render Pipeline

HTML layout masters, PNG previews, and build scripts for Playbook collateral. The renderer contains English template families and localized render entries across English, Japanese, Simplified Chinese, and Arabic. The new 20-series concepts are English social masters.

## Source files

| File | Role |
|---|---|
| [render-cards.mjs](render-cards.mjs) | Puppeteer renderer, filtering, locale selection, and layout checks |
| [output-profiles.mjs](output-profiles.mjs) | Named output sizes, print scale, and bleed configuration |
| [build-comparison.mjs](build-comparison.mjs) | Builds a browsable before/after review sheet from the committed baseline and current PNG previews |
| [layout-system.css](layout-system.css) | Maintained responsive, safe-zone, and format-specific layout rules |
| [brand-inject.css](brand-inject.css) | Generated brand tokens plus the shared layout system |
| [build-logos.mjs](build-logos.mjs) | Logo SVG generator |
| [build-icons.mjs](build-icons.mjs) | Icon SVG generator |
| [build-deck.mjs](build-deck.mjs) | PPTX brand overview generator |

`lib/generate-inject-css.mjs` appends `layout-system.css` whenever it regenerates `brand-inject.css`, so brand changes do not erase production layout rules.

Rendered collateral follows the PR #111 wordmark treatment: `Playbook` in Inter 700, one weight, one color, and tight tracking. The punched-cover symbol is reserved for favicons, app icons, social avatars, and placements too tight for the wordmark.

## Usage

```bash
# Manageable preview PNGs
node collateral/render/render-cards.mjs --locale=en
node collateral/render/render-cards.mjs --locale=ja poster

# Named output variants
node collateral/render/render-cards.mjs --profile=social-feed --locale=en
node collateral/render/render-cards.mjs --profile=social-square --locale=en
node collateral/render/render-cards.mjs --profile=story --locale=en
node collateral/render/render-cards.mjs --profile=banner-320x50 --locale=en
node collateral/render/render-cards.mjs --profile=email-375 --locale=en
node collateral/render/render-cards.mjs --profile=ui-390 --locale=en
node collateral/render/render-cards.mjs --profile=print-us --locale=en
node collateral/render/render-cards.mjs --profile=print-iso --locale=en

# Validation and discovery
node collateral/render/render-cards.mjs --check --locale=en
node collateral/render/render-cards.mjs --list-profiles

# Visual comparison against the current committed baseline
npm run build:comparison
```

Filters can be combined with options: `--profile=print-us --locale=en sign-floor`.

## Editorial concepts — series 20

Three new Tier 1 concepts use editable CSS/SVG artwork, bundled local fonts, and the configured brand tokens. Each has a 1080 × 1350 PNG preview and supports the 1080 × 1080 square profile with the same copy and 42px minimum text size.

| Concept | Visual idea | HTML master |
|---|---|---|
| Your return isn’t your profit | A receipt separates a $50 total return into a $20 stake and $30 profit. | [20a](card-20a-return-vs-profit.html) |
| Even a good night has an end time | An emerald clock composition turns choosing an end time into a personal plan. | [20b](card-20b-pick-your-pause.html) |
| More picks. Smaller target. | A 16-outcome grid shows the chance that four independent 50/50 picks all win. | [20c](card-20c-parlay-probability.html) |

Open the [concept review sheet](concepts-20.html) for a side-by-side preview, or read the [copy, alt text, and source notes](concepts-20.md). Shared art direction is in [concept-20.css](concept-20.css).

```bash
node collateral/render/render-cards.mjs --locale=en card-20
node collateral/render/render-cards.mjs --check --profile=social-feed --locale=en card-20
node collateral/render/render-cards.mjs --check --profile=social-square --locale=en card-20
```

The HTML masters preserve program-name, helpline, and age placeholders. Dollar amounts and the displayed time are illustrative editorial examples. Localize those examples and retain the probability assumptions when adapting the concepts.

## Model concept comparison

The [model showcase gallery](model-comparison/index.html) presents fifteen concepts: three each from GPT-6 Astra, GPT-5.6 Sol, GPT-5.6 Terra, GPT-5.3 Codex Spark, and GPT-5.5. Each agent received the same brief, brand content, template set, high reasoning request, and output requirements, then authored one sports betting concept, one gambling myth concept, and one topic of its choice. GPT-5.4 was unavailable and is not scored.

Select up to three models and filter by topic, or view the [original three-model sheet](model-comparison/contact-sheet.png) and [Spark / GPT-5.5 sheet](model-comparison/contact-sheet-additions.png). This is a revised, unscored pilot: model-specific QA and unequal image-inspection support prevent a controlled competition claim. [Method and rebuild instructions](model-comparison/README.md), [review notes](model-comparison/REVIEW-NOTES.md), and a [proposed fair-test protocol](model-comparison/competition/PROTOCOL.md) document the limits and next experiment. The showcase uses its own renderer and is not added to the production template registry.

## Delivery model

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
| `poster-19a-every-game-math` | Photo poster | 1800 x 2400 | 24px |
| `poster-19b-odds-are-public` | Photo poster | 1800 x 2400 | 24px |
| `poster-19c-bet-price-tag` | Photo poster | 1800 x 2400 | 24px |
| `poster-19d-game-iq` | Photo poster | 1800 x 2400 | 24px |
| `poster-19e-never-due` | Photo poster | 1800 x 2400 | 24px |
| `poster-19f-your-tools` | Photo poster | 1800 x 2400 | 24px |
| `poster-19g-one-decision` | Photo poster | 1800 x 2400 | 24px |
| `poster-19h-time-flies` | Photo poster | 1800 x 2400 | 24px |
| `og-rg-page` | OG share card | 1200 x 630 | — |
| `og-content-hub` | OG share card | 1200 x 630 | — |

- Social previews use the 4:5 primary feed composition; `social-square` is the square compatibility export. Stories, displays, print, and signage use fixed artboards through named profiles.
- Email is fluid up to 600px and has natural height. Use the 320/375/600 email profiles for QA only.
- Product UI templates are responsive HTML references. Use 360/390/412/430 profiles for QA; do not ship those PNGs in an app.
- Push notification HTML is a content and visual mock only. The operating system owns the final component.
- Print profiles add bleed outside trim and scale to approximately 300dpi. They remain RGB PNGs until a prepress workflow converts them to the printer's requested CMYK profile.
- A format-specific source contains only the copy that format uses. Do not keep omitted paragraphs, rows, or prompts in the HTML and hide them with CSS; use `data-layout` only to describe composition.
- Mark indivisible support, legal, QR, or action groups with `data-protected-zone`. On folded work, each protected group must live inside one panel.

See the [production size matrix](../production-size-matrix.md) for the complete use-case mapping.

## Layout checks

`--check` verifies that each selected root exists, matches fixed-profile dimensions, has no visible text outside the artboard, does not overflow, keeps every visible line at or above the use-case-specific readability floor, prevents content from overlapping protected footers, and rejects text or protected groups that cross brochure fold lines. It exits nonzero on a layout failure, so it can be added to CI.

Locale-specific hierarchy scaling is centralized in `layout-system.css`, while the physical/screen reading floors remain fixed across languages. Translated copy still needs human review for line breaks, reading order, and regulated text; content must be reduced or recomposed rather than shrunk below the floor.

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

- **Tier 1** (Entertainment Literacy): Navy backgrounds, gradient accent bar (orange-to-emerald, 6-8px), full color palette, energetic visual treatment
- **Tier 2** (Support & Crisis): White backgrounds, solid emerald accent bar (3px), no orange, calm visual treatment, 18px minimum body text

### Print bleed

Print templates include 24px (3mm at 200dpi 2x) bleed on all sides. The `body` padding creates the bleed zone around the root element. Render viewport dimensions include the bleed (element size + 48px).

### Customizability

- `--pb-template-text-scale`: Global text scale multiplier (default: 1)
- `--pb-scale-heading` / `--pb-scale-body` / `--pb-scale-stat` / `--pb-scale-legal`: Per-block text scale
- Content tokens (`{{STAT_GAME_1}}`, `{{HERO_HEADLINE}}`, etc.) resolve from `_brand.yml` `content_defaults` section
- `{{OPERATOR_LOGO}}` resolves to operator logo image or placeholder
