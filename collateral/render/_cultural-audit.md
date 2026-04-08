# Cultural Audit Matrix — Collateral Localization

Reference document for the i18n localization work. Documents modification requirements for each template across three target country profiles.

**Brand default profile**: `peer, individual, irreverent, blunt, open`

**Target profiles**:
- **Japan**: `elder, communal, understated, contextual, reserved`
- **Macau (Simplified Chinese)**: `authority, communal, minimal, diplomatic, private`
- **UAE (Arabic)**: `authority, communal, understated, contextual, private`

**Modification key**:
- **TL** = Translate-only (no cultural conflict)
- **L** = Modify-Light (1 dimension)
- **M** = Modify-Medium (2-3 dimensions)
- **H** = Modify-Heavy (4-5 dimensions; near re-authoring)
- **SKIP** = Concept doesn't work in market

---

## Modification matrix

### Social cards — myth vs. math (1a-1c)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `card-1a-hot-streak` | H | H | H | Drop strikethrough device. JP: elder observation; Macau/UAE: institutional voice, no personal pronouns |
| `card-1b-due-for-win` | H | H | H | Drop strikethrough + quotation device; neutral principle |
| `card-1c-lucky-machine` | H | H | H | "Emotional range of a toaster" drops entirely; serious authority statement |

### Real odds cards (2a-2c)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `card-2a-house-edge` | L | L | L | Localize currency; soften "Best odds in the casino" |
| `card-2b-sports-betting` | M | M | M | Localize $110/$100; soften staccato "On every. Single. Bet." |
| `card-2c-bonus-wagering` | M | H | H | Drop "Think you know" challenge; institutional explainer for Macau/UAE |

### Stories (3a-3c)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `story-3a-hot-streak` | H | H | H | Same as card-1a |
| `story-3b-house-edge` | TL | L | L | Largely factual; Macau/UAE: drop peer hook |
| `story-3c-sports-betting` | M | M | M | Localize currency; soften staccato |

### Posters (4a-4e)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `poster-4a-know-your-game` | L | M | M | "Play on your terms" → "Play with full knowledge"; Macau/UAE: communal "Players who..." |
| `poster-4b-no-fine-print` | L | L | L | "No fine print" → "Full transparency"; localize currency |
| `poster-4c-game-iq` | M | H | H | Drop "Game IQ" branding for Macau/UAE; institutional explainer |
| `poster-4d-lottery-odds` | L | L | L | Factual; UAE: institutional framing essential (religious sensitivity) |
| `poster-4e-bingo-hall` | L | SKIP | SKIP | Bingo not major in Macau/UAE |

### Print (5a-5c)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `rack-card-5a` | L | L | L | Soften "Here's yours" possessive |
| `table-tent-5b` | M | M | M | "Your tools. Your limits. Your call." → institutional tools framing |
| `helpline-card-5c` | TL | TL | TL | Pure helpline info |

### Digital displays (6a-6b)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `display-landscape-6a` | L | L | L | Soften "Here's yours" |
| `display-portrait-6b` | L | L | L | Same |

### Emails (7a-7d)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `email-welcome-7a` | M | H | H | Drop "Challenge your friends"; institutional welcome |
| `email-deposit-7b` | L | L | L | Localize currency; soften possessives |
| `email-monthly-7c` | M | M | M | Drop "Knowledge is a feature" tagline; localize currency |
| `email-reactivation-7d` | M | M | M | "Right where you left them" → respectful elder phrasing |

### Brochure (8a-8b)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `brochure-trifold-8a` | H | H | H | Dense peer voice content; substantial rewrite; localize currency |
| `brochure-cover-8b` | M | M | M | Drop quiz challenge framing |

### Venue signs (9a-9e)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `sign-entrance-9a` | L | L | L | Soften "Play on your terms" |
| `sign-atm-9b` | M | M | M | Drop "Your money. Your rules." |
| `sign-floor-9c` | TL | TL | L | UAE: verify "Pick your game" framing |
| `sign-restroom-9d` | TL | TL | TL | Pure helpline; UAE: gendered restroom placement |
| `sign-staff-9e` | M | M | M | Internal staff guide; formal directive language for Macau/UAE |

### Tier 2 support (10a-10h)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `support-page-10a` | TL | L | L | Macau/UAE: emphasize confidentiality over "no judgment" |
| `self-exclusion-10b` | L | L | L | Macau/UAE: neutral "account pause" terminology |
| `session-summary-10c` | TL | TL | TL | Pure data; localize currency |
| `limit-reached-10d` | L | L | L | Drop "budget working as designed" peer copywriting |
| `cooldown-10e` | TL | L | L | Macau/UAE: less-personal phrasing |
| `card-tier2-10f` | TL | L | L | Macau/UAE: emphasize "Confidential. Private." |
| `poster-tier2-10g` | TL | TL | TL | Pure helpline |
| `email-support-10h` | TL | L | L | Macau/UAE: confidentiality language |

### How-to-play cards

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `htp-card-slots` | L | L | L | Soften "No memory. No patterns. No hot streaks." |
| `htp-card-blackjack` | L | L | L | Soften "take 20 minutes to learn" peer tone |
| `htp-card-roulette` | L | L | L | Minor softening |
| `htp-card-craps` | L | SKIP | SKIP | Not major format in Macau/UAE |
| `htp-card-baccarat` | L | L | L | Dominant game in Macau — consider expansion |
| `htp-card-bingo` | TL | SKIP | SKIP | Not major format |
| `htp-card-lottery` | L | L | L | UAE: institutional framing |
| `htp-card-sports` | L | L | L | All: soften slightly |
| `htp-card-video-poker` | L | SKIP | SKIP | Not major format |
| `htp-card-horse-racing` | TL | L | TL | All three markets relevant |
| `htp-odds-comparison` | L | L | L | Drop non-relevant games per market |

### Demographic-specific (11a-11b)

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `card-11a-streamer-myth` | M | SKIP | SKIP | Streamer culture not relevant in Macau/UAE |
| `card-11b-lucky-numbers` | L | L | L | Drop quoted-myth device; respectful framing (lucky numbers are culturally significant) |

### iGaming (12a-12h)

> **Note (2026-04-08)**: iGaming has been legalized in UAE. Earlier audit recommended SKIP for the entire 12-series in UAE; this is now reversed. UAE iGaming templates are built per the same modification matrix as the rest of the UAE collateral.

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `mobile-onboarding-12a` | M | H | M | Localize currency |
| `deposit-interstitial-12b` | L | H | M | Localize currency |
| `in-play-overlay-12c` | TL | L | L | Macau: soften button labels |
| `app-banner-12d` | L | L | L | Soften "Know yours" |
| `push-notification-12e` | TL | TL | TL | Session reminder |
| `withdrawal-confirm-12f` | L | L | L | Localize currency |
| `betslip-rg-12g` | L | L | L | Localize currency |
| `web-popup-12h` | M | M | M | "I'm good, continue" → neutral "Continue" |

### Cognitive distortion cards (13a-13f)

All six share pattern: peer, individual, irreverent (strikethrough), blunt, open. Most culturally reactive templates in the set.

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `card-13a-its-due` | H | H | H | All: drop quoted myth + rebuttal pattern |
| `card-13b-near-win` | H | H | H | Drop rhetorical sting |
| `card-13c-picked-right` | H | H | H | Careful — luck beliefs culturally significant |
| `card-13d-won-big` | H | H | H | Drop "your brain" personal pronoun for Macau/UAE |
| `card-13e-lucky-shirt` | H | **SKIP** | **SKIP** | Luck-object beliefs deeply cultural; SKIP for Macau/UAE per user decision |
| `card-13f-earned-win` | H | H | H | Financial metaphor + peer voice; neutral principle |

### "Every game has math" cross-format (14a-14f)

All L across all markets — closest to authoritative-factual already.

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `card-14a-every-game-blackjack` | L | L | L | Soften possessive |
| `story-14b-every-game-roulette` | L | L | L | Same |
| `poster-14c-every-game-slots` | L | L | L | "you can't see it" → "figure is fixed before play begins" |
| `email-14d-every-game` | L | L | L | Soften "swing hard" idiom |
| `display-14e-every-game` | L | L | L | Soften "Same casino. Different math." |
| `mobile-14f-every-game` | L | L | L | UI translation + soften |

### Sports-math campaign (15a-15d)

Note: Templates don't actually contain basketball references in HTML body — they're generic sports-math templates.

| Template | JP | Macau | UAE | Key changes |
|---|---|---|---|---|
| `card-15a-point-spread` | L | L | L | Localize currency; soften "isn't a guess" |
| `story-15b-bet-costs` | L | L | L | "Fun bets" → "complex bets" |
| `poster-15c-how-sportsbook-wins` | L | L | M | Localize currency; UAE: institutional reframing |
| `live-odds-overlay-15d` | L | L | L | Minor softening |

**Sport deployment contexts**:
- Japan: NPB baseball, J-League, sumo (toto sports betting is the legal product)
- Macau: Asian football leagues, horse racing
- UAE: cricket (IPL, ICC), football (UAE Pro League, AFC), horse racing (Dubai World Cup)

---

## Cross-cutting findings

### Currency localization (10 templates)

Templates with explicit `$` amounts needing localization:
- `card-2b-sports-betting` ($110/$100)
- `poster-4b-no-fine-print`
- `email-deposit-7b`
- `email-monthly-7c`
- `brochure-trifold-8a`
- `deposit-interstitial-12b`
- `withdrawal-confirm-12f`
- `betslip-rg-12g`
- `card-15a-point-spread` ($1.10/$1)
- `poster-15c-how-sportsbook-wins` ($1.10/$2.20/$2.10/$0.10)

**Implementation**: Add `{{CURRENCY_SYMBOL}}` and `{{AMOUNT_*}}` placeholder tokens to `brand-config.mjs` so each language variant can resolve currency at build time.

### Strikethrough/quoted-myth visual device (14 templates)

Appears in: `card-1a`, `card-1b`, `card-2c`, `card-11a`, `card-11b`, `card-13a-13f`, `story-3a`, `story-3c`, `poster-4c`.

**Decision**: Drop the strikethrough/quotation visual device entirely for Macau and UAE variants. Replace with neutral "Common belief / Mathematical reality" two-column or single-column factual layout. Japan retains softened version with quotation marks but no strikethrough.

### Templates to SKIP

**Macau**: `htp-card-craps`, `htp-card-bingo`, `htp-card-video-poker`, `poster-4e-bingo-hall`, `card-11a-streamer-myth`, `card-13e-lucky-shirt`

**UAE**: same game-specific skips as Macau (`htp-card-craps`, `htp-card-bingo`, `htp-card-video-poker`, `poster-4e-bingo-hall`, `card-11a-streamer-myth`, `card-13e-lucky-shirt`). iGaming is now legal in UAE — 12-series is built, not skipped.

### Final template counts

- **Japan**: 75 templates
- **Macau**: ~68 templates (7 skips)
- **UAE**: ~68 templates (7 skips — same as Macau after iGaming legalization)
- **Total new files**: ~211

### Helpline data

Jurisdictional data for `{{HELPLINE_NUMBER}}`, `{{TEXT_NUMBER}}`, `{{CHAT_URL}}`, `{{MIN_AGE}}`, `{{AGE_DISCLAIMER}}`, `{{GENERAL_DISCLAIMER}}` needs to be added to `_brand.yml` for Japan, Macau, UAE jurisdictions. **Using placeholders for now; fill in later.**
