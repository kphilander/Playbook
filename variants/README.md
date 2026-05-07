# Brand Variants — Demonstration of System Flexibility

Four alternative brand systems built from the same Playbook source, to demonstrate how flexible the white-label system is for accommodating different operator brands.

There are two ways to see them:

1. **[`showcase.html`](./showcase.html)** — All four variants rendered side-by-side as static cards. Same copy in every card; only the brand changes.
2. **[`/collateral/rg-page.html`](../collateral/rg-page.html)** — The full deployable RG page with two one-click toggles inside the **Try your brand** modal:
   - **One-click demo brands** — Default Playbook · Glow · Pulse · North · Atlas. Swaps the visual brand (colors, typography, logo, program name).
   - **One-click locale presets** — English (default) · JP 日本語 · MO 简体中文 · AE العربية. Swaps the language, fonts, and (for Arabic) flips the page to RTL. Combinable with any brand preset.

Each brand variant ships as a complete, drop-in fork:
- `_brand.yml` — full brand configuration (a forker can copy this to the repo root and `npm run generate`)
- `design-tokens.css` — the CSS custom properties that file would generate
- `brand-inject.css` — self-contained injectable stylesheet for the rg-page (embeds the logo as a data URI and includes a `PLAYBOOK_META` block for `{{TOKEN}}` resolution)
- `logo/` — three SVG logos (horizontal wordmark, stacked, square symbol)

Each locale variant ships as a tiny `_brand.yml` under `variants/locales/`:
- `meta.primary_jurisdictions` — drives the language selection (e.g. `japan` → `ja`, `macau` → `zh-Hans`, `united-arab-emirates` → `ar`)
- `cultural_profile` — five-dimension culture adapter (voice, framing, humor, directness, comfort)
- `meta.program_name` — region name only (Japan / Macau / UAE) so the locale demo isn't confused with a brand variant

The same hero copy, stat block, sample blockquote, and helpline banner render in each brand variant — only the brand changes. That's the point of the system: change `_brand.yml`, the cascade does the rest.

---

## The four variants

Brand names are deliberately non-gambling — picked to read like real consumer / lifestyle / fintech / editorial brands so the system's flexibility is the headline, not the category.

| Variant | Personality | Audience adjacency | Palette signature | Type signature |
|---|---|---|---|---|
| **Glow** | Wellness · reflective · journal-like | Headspace, Calm, candle/skincare brands | Moss + sand + cream | Fraunces serif + Inter |
| **Pulse** | Gamer · fast · neon | Twitch / esports / streamer aesthetic | Obsidian + cyan + magenta | Space Grotesk + Inter |
| **North** | Calm premium · confident type | Linear, Cron, Anthropic, Vercel | Deep ink + electric blue + warm off-white | Inter Tight + Inter |
| **Atlas** | Vintage · editorial · cartographer's hand | Hardback book, NYT mag, vintage atlas | Oxblood + antique gold + paper | Playfair Display + Source Serif 4 |

Each variant ships with:
- Its own brand pillars and tone preferences
- Its own messaging library (taglines + CTAs that fit the voice)
- Its own typographic scale (Pulse goes louder, Atlas goes more editorial, North gets a 4.5rem display)
- Its own border radii, shadow styling, and motion timing — to match the personality

---

## Try a variant locally

```bash
# From the repo root
cp variants/glow/_brand.yml _brand.yml
npm run generate

# Or any of:
cp variants/pulse/_brand.yml _brand.yml
cp variants/north/_brand.yml _brand.yml
cp variants/atlas/_brand.yml _brand.yml
```

To restore the default Playbook brand, `git checkout _brand.yml`.

---

## Accessibility floor

All four variants pass **WCAG 2.1 AA** on every text + background pair (4.5:1 for body text, 3:1 for large/UI). The contrast checker that verified them is reproducible from the values in each `_brand.yml`. A few notes from the build:

- **Glow** — coral `#E8826B` is too pale for body text on cream (2.51:1). It's reserved for decorative chips; the deepened terracotta `accent_dark #A8472E` (5.45:1) is used for emphasis text.
- **Atlas** — antique gold `#A88E3F` is too pale on cream paper (2.73:1). Gold is reserved for decorative dividers and the monogram ring; oxblood (`primary`) is used for emphasis text (11.14:1).
- **North** — bright electric blue `#3B82F6` is too pale for body text on warm off-white (3.55:1). It's kept as `secondary_light` for decorative chips and highlights; deeper electric blue `#2563EB` (4.99:1) carries links and CTA fills, deepest blue `#1E40AF` (8.42:1) carries emphasis text.
- **Pulse** — designed dark-mode-native; off-white on near-black gives 18.17:1, and both neon accents (cyan, magenta) clear 4.5:1 against the obsidian bg.

This is a recurring pattern in the system: a vibrant brand color is great for fills, decorative chips, and graphical elements, but emphasis *text* needs a darker sibling. Operators forking Playbook should use `aliases` to map their bright brand color to `secondary_light` (or `accent`) and a deepened version to `secondary` (or `accent_dark`), then point `feature_highlight` at the deeper variant.

---

## What stayed the same across variants

To make the "same content, different brand" point clear, every variant in `showcase.html` renders the identical content blocks:

- The same hero headline, subhead, and CTAs
- The same three game-edge stats (Blackjack, American Roulette, Slots)
- The same NCPG helpline number (1-800-522-4700)
- The same blockquote sample, helpline banner copy, and tone sample
- The same component types (hero, stat block, tone blockquote, helpline banner, palette + type shelf)

Brand-specific copy (taglines, voice variations, prefer/avoid word lists) is part of each `_brand.yml` so an operator can swap voice with the visual system, but the showcase deliberately uses identical copy across all four cards to isolate the visual change.

---

## Files

```
variants/
├── README.md                  ← this file
├── showcase.html              ← all four side-by-side, open this in a browser
├── glow/
│   ├── _brand.yml             ← full brand config (drop-in)
│   ├── design-tokens.css      ← what `npm run generate` would output
│   ├── brand-inject.css       ← self-contained inject for the rg-page toggle
│   └── logo/
│       ├── logo-horizontal.svg
│       ├── logo-stacked.svg
│       └── symbol.svg
├── pulse/                     ← same shape
├── north/                     ← same shape
├── atlas/                     ← same shape
└── locales/
    ├── japan.yml              ← Japan (ja, elder/reserved)
    ├── macau.yml              ← Macau (zh-Hans, authority/communal)
    └── uae.yml                ← UAE (ar, RTL, authority/private)
```

The `design-tokens.css` files are hand-written here so the demo works without a build step. Once you copy a variant's `_brand.yml` to the repo root and run `npm run generate`, the canonical tokens come from the YAML — exactly as they do for the default Playbook brand.

The `brand-inject.css` files have the same structure the configurator emits (`/*! PLAYBOOK_META {...} */` header + `:root { ... }` custom properties + an embedded SVG logo as a data URI), so the rg-page's existing "Try your brand" infrastructure picks them up with zero extra wiring.

The `locales/*.yml` files are intentionally minimal — just `meta.primary_jurisdictions` (which drives language selection) and `cultural_profile` (which drives the five-dimension culture adapter). The `program_name` is just the region (Japan / Macau / UAE) so it's clear these are locale demos, not brand variants. They can be combined with any of the visual brand variants — pick a brand chip and a locale chip independently.

---

## How the rg-page toggles work

**Brand toggle:**
1. The user clicks **Try your brand** on the rg-page.
2. The modal shows a row of preset chips (Default Playbook, Glow, Pulse, North, Atlas).
3. Clicking a preset reads from a bundled `<script type="text/css" id="pb-bundled-variant-<slug>">` block embedded in the page itself, then pipes the CSS through the existing `applyCss()` function. No fetch — works on `file://`, in iframes, on any deploy that serves the rg-page.
4. `applyCss()` injects the CSS as a `<style>` tag, lazy-loads any Google Fonts referenced by `--pb-font-*`, mirrors `--pb-logo-mode` to a `data-pb-logo-mode` attribute on `<html>`, and parses the `PLAYBOOK_META` block to swap `{{PROGRAM_NAME}}` etc. tokens.
5. **Default Playbook** just clicks the existing Reset button.

**Locale toggle:**
1. Same modal, second row of chips (English (default), JP · 日本語, MO · 简体中文, AE · العربية).
2. Clicking a preset reads from a bundled `<script type="text/yaml" id="pb-bundled-locale-<slug>">` block, wraps the text in a synthetic `File` so the existing `handleYamlFile()` code path runs unchanged, and updates the active highlight.
3. `handleYamlFile()` parses `meta.primary_jurisdictions[0]` to pick a language code, then calls `activateLanguage(lang)` (which loads the Noto font, swaps copy and glossary, fetches the localized myth quiz JSON, and — for Arabic — sets `<html dir="rtl">`).
4. **English (default)** just calls `deactivateLanguage()`.

The variant fonts (Fraunces, Inter Tight, Source Serif 4) were added to the Google Fonts allowlist in the rg-page's TYB script so they load on demand. Space Grotesk, Playfair Display, and JetBrains Mono were already in the allowlist. The Noto fonts for the locale presets were already being lazy-loaded by `activateLanguage()`.

The bundled `<script>` blocks were chosen over `fetch()` so the toggle works in any deployment context — including ones where the `variants/` directory hasn't been synced into the served root. The trade-off is ~17.5KB of extra HTML in the rg-page itself; the canonical source files still live under `variants/<slug>/` for forking and editing.
