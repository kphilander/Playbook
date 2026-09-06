# Playbook creative template system

[Open the live studio](../studio/index.html). The platform separates content, composition, brand styling, media and market context. The library now contains eight message-placement families plus [three campaign concepts](../campaign-concepts/index.html): 19 compositions, each usable with seven CSS skins. The existing preference gallery builds its original masters through this engine. The new campaign review compares two treatments of each new composition.

This implements the main brand book’s [adaptive identity model](../../brand-book/03-visual-identity.md): operator colors and fonts can change while the information hierarchy remains recognizable. Support content uses calm language, familiar type and no game imagery.

## What is reusable

| Layer | Source | Responsibility |
|---|---|---|
| Brand configuration | `_brand.yml` → generated tokens and studio resources | Brand colors, base type, generated wordmark, contact numbers and ages |
| Template catalogue | [catalog.mjs](catalog.mjs), [campaigns.mjs](campaigns.mjs) | Content defaults, composition IDs, format dimensions and study rationale |
| Recipe | Versioned JSON, checked by [engine.mjs](engine.mjs) | Template, composition, skin, text, asset, crop and market profile |
| Markup | `renderArticle()` in [engine.mjs](engine.mjs) | Live typography, generated vector logo, SVG/photo slots, contact and warning components |
| Layout | [layouts.css](layouts.css), [campaigns.css](campaigns.css) | Canvas dimensions, spatial hierarchy, photo reading areas and format-specific fitting rules |
| Skin | [skins/](skins/) | Semantic colors, fonts, letter spacing, corners, depth and display-font fitting metrics |
| Media | [assets.mjs](assets.mjs), [assets/](assets/) | SVG sources, AI photo sources, alt text, focal points and provenance |
| Market context | [resources.mjs](resources.mjs) | Brand-configured contact/age previews and the two researched, fixed scenario profiles |
| Validation/export | [inspect.mjs](inspect.mjs), [bundle.mjs](bundle.mjs), [render.mjs](render.mjs) | Fit, clipping, overlaps, loading, contrast and portable output |

Changing `skinId` changes only the linked stylesheet. `renderArticle()` produces byte-identical markup for a given recipe under every skin; the studio also preserves the actual article and image nodes when changing a skin. There are no theme-name conditions inside the renderer or layout rules. Artwork CSS is intended for a standalone document or isolated iframe.

The original 30 preference studies and 93-family production library remain on their earlier renderers. They have not all been migrated. This library establishes the contract and a working migration path; it does not claim a responsive email implementation, CMS backend, publishing service, or clearance engine. The banner journey remains a static composition study. Social actions are artwork; support contact links are functional telephone links.

## Use the studio

1. Select a template and its new or reference composition.
2. Compare any two skins. Both sides share the same copy, media and market profile.
3. Choose a registered AI photograph or themed SVG where the template supports it. Photo crop controls preserve the original file.
4. Edit plain text. New lines are optional; no HTML is accepted. Live checks flag copy that exceeds its space or loses contrast. HTML export stays disabled until the selected side passes.
5. Save a recipe to continue later, export its CSS skin, or export self-contained HTML. The HTML embeds its fonts and license notices, photo/SVG, recipe and a market-context note. It opens offline.

Studio choices use a separate local-storage key, `playbook-template-studio-v1`. They do not modify the preference gallery’s votes. No browser data is sent to a backend. Save a recipe for a portable copy; unavailable browser storage does not prevent editing or exporting. The two comparison skins are saved locally; the exported recipe uses the skin selected in the export control.

## Build and export

From the repository root, with existing dependencies installed:

```sh
npm run build:template-studio
# Serve the repo locally, then open /collateral/studio/index.html.
# Tests expect the local server on port 8765 by default.
npm run check:template-studio
npm run check:design-preferences

# Export a saved recipe as checked HTML + PNG + CSS + JSON + asset manifest:
npm run export:template -- /path/to/recipe.json /tmp/my-playbook-export
```

`build:template-studio` regenerates design tokens from `_brand.yml`, refreshes configured resources, and rebuilds the comparison masters and PNGs. For a program-name change, also run `npm run build:logos` before rebuilding: the wordmark remains generated vector artwork, not retyped text. Fonts must be available locally through `fonts.css`; changing a family name alone does not supply its font file.

The exporter reads the same recipe and renderer as the browser. It stops on fit/contrast problems before writing outputs. `manifest.json` records the recipe, dimensions, checks, market context, selected asset/provenance and source hash. PNG captures the artwork; context travels in the manifest and the HTML’s note below it. The CLI writes the named outputs into its destination directory, replacing earlier files with the same names.

## Add or change a skin

The base defaults map to `visual-identity/design-tokens.css`. The Playbook skin therefore follows the main repository configuration. Alternative skins override semantic custom properties on `.message-concept`:

```css
.message-concept {
  --paper: #F3EFE7;
  --ink: #262A27;
  --accent: #79643E;
  --on-accent: #FFFFFF;
  --display: Fraunces, serif;
  --weight: 500;
  --photo-radius: 240px 240px 0 0;
}
```

Use an existing file in `skins/` as the complete example. Color pairs include `paper/ink`, `panel/on-panel`, `media-panel/on-media-panel`, `accent/on-accent`, `panel-accent` and `media-accent`. Fonts include `body`, `display`, `support-font` and `weight`. Surface treatments include `photo-radius`, `card-radius`, `card-shadow`, `card-rotation`, `expressive-border`, `button-border` and `button-radius`. Heading spacing and `narrow-heading-size` accommodate different font metrics within the fixed side-note format. Register a new skin in `assets.mjs` to make it available to the studio and validation matrix.

Expressive skins also specify a calm `[data-tier="2"]` palette. The Australian scenario’s black-on-white message uses its own straightforward type and is outside the skin token contract. A skin cannot select, delete or rewrite that message. Arbitrary CSS could override any browser style; only reviewed skins belong in the registry. The checks are rendering checks, not a legal determination.

## SVG and AI images

**SVG carries controllable geometry.** The wordmark remains the repo’s generated outlined SVG. The pause-window illustration and planning motifs are source SVG assets, inlined into the template so `currentColor` follows the selected skin. Layout, marketing text, contact details and factual numbers remain live HTML. These decorative planning motifs are not quantitative charts. Factual game diagrams should use explicit data and programmatic geometry rather than generated raster text.

**Raster images establish the setting.** The raster slot supports photos and AI illustrations as separate image assets (JPEG, PNG, WebP or AVIF); artwork text remains in HTML. The initial registry reuses the casino conversation and café images from the [AI photography refresh](../creative-review/photography/README.md). Each entry keeps its source path, dimensions, alt text, focal point, generator attribution, exact prompt reference and provenance. CSS handles the frame; a recipe handles crop position. Colors and fonts are never painted onto the photo. Changing skin does not require generating a new image.

To add media:

1. Create or select the source asset. For AI photography, use the existing [Google photography workflow](../../lib/google-photography.mjs) and the repo’s [photography direction](../../visual-identity/photography/photography.md). Keep its request, sanitized generation record and source image. The credential remains in Keychain/server-side tooling; the studio has no generation credential or direct provider call.
2. Review subject suitability, faces/hands, cropping and embedded accidental text. Generated images must not encode essential game mechanics, amounts, headings, logos or disclosures.
3. Add an entry to `assets.mjs` with a stable ID, `raster` or `svg` type, compatible `hero` or `plan` slot, source path and alt/provenance fields. Paths are relative to `template-system/`. SVG sources are trusted repository assets and must contain no scripts, event handlers or external resource references.
4. Run the build, inspect its crops in the supported layouts, and rerun checks. Imported recipes can choose only registered assets; arbitrary paths and unsupported media slots are rejected.

The Source Sans 3 copyright notice is retained from the vendored font’s metadata, alongside the existing SIL OFL terms. All bundled font notices travel in the portable HTML.

The original message-placement library reuses existing source photos. The
new pause campaign adds a portrait generated through the authorized Google
workflow; see its [prompt, selection and provenance](../campaign-concepts/README.md#photography-provenance-and-selection).
The pause mark and sixteen-outcome graphic remain programmatic SVG.

## Content and market contract

Recipe version 1 accepts `templateId`, `variant`, `skinId`, `assetId`, nullable `[x,y]` crop percentages, `marketId`, and plain-text `series`, `headline`, `copy`, `action`. The renderer escapes text; validation rejects unsupported IDs, profiles, crop values, excessive lengths and missing content. Campaign templates support only the `after` composition; the studio presents one option for these. The fixed banner journey keeps its two-surface copy in the renderer for this initial version and does not expose the generic copy editor.

Contact/age preview profiles cover the US, Great Britain and Australia. The two specific banner and wagering studies retain their researched scenarios and fixed profile selection. These are not comprehensive jurisdiction modules. Requirements, operator details and content purpose must be assessed independently of styling; see the [source-linked research](../../docs/compliance-banner-research-2026-09-05.md).

Source dimensions are 1080 × 1350 for the social/journey review canvases and 420 × 740 for support. They are fixed-format templates, not a guarantee that arbitrary copy, any font or any language fits. Checks preserve minimum source type sizes instead of silently shrinking or truncating copy. New language/format profiles need their own fitting and visual review. Support’s foreground-contact composition aligns document order with the visible hierarchy.

## Verification

[The matrix](validation.json) checks 19 compositions × 7 skins: **133 combinations**. It proves markup independence and checks bounds, block overlap, clipping, internal fit, fonts/images and text contrast. For the campaign photo layouts, contrast uses the minimum shadow opacity over the brightest possible image pixel, and text outside the designated reading areas fails validation. [Browser checks](../studio/browser-validation.json) cover actual CSS-only switching, media/crop changes, content edits, persistence, recipe validation, overflow gating, protected messages, accessible support order, downloads, offline exports and narrow screens.

The existing [preference-gallery checks](../design-preferences/browser-validation.json) continue to protect saved choices and comparison behavior. Visual review is still required: fitting and contrast alone do not establish good art direction or market suitability.
