# Design preference comparisons

[Open the review](index.html). Thirty focused before / after pairs let a reviewer choose typography, color, composition and detail independently. Browse the collection or review one pair at a time, enlarge either version, choose **Before**, **After**, **Both** or **Neither**, and add a note.

The **preference brief** groups those stated choices by design area. Download or copy the brief for the next creative round. **Save choices** exports a JSON backup; **Restore choices** merges a backup into this browser, replacing matching entries while retaining the others. Individual choices can be cleared without deleting their notes.

## What the comparison means

“Before” is a freshly built reference study grounded in Playbook's current identity. It is not an archived production file. “After” changes the variable named on the card. Neither side is presented as the correct answer. For historical production changes, use the separate [library before / after gallery](../render/_comparison.html).

The 30 pairs reuse six references and add 30 alternatives: **36 HTML masters and PNGs**, shown in 60 comparison placements. Wording is held constant within every pair. The photography-setting pair intentionally uses two different photographs; all other lifestyle pairs use the same source image. Changes to composition include the reflow needed by the selected arrangement.

| Area | Pairs | Choices |
|---|---:|---|
| Typography | 4 | Editorial serif, rounded sans serif, geometric sans serif, heavy display |
| Color | 5 | Paper and brass, forest and chartreuse, midnight and lime, cobalt and coral, cream and terracotta |
| Composition | 4 | Image-first hierarchy, centered alignment, open email container, three-column data |
| Photography | 4 | Arch, full-width image, tighter crop, everyday social setting |
| Numbers | 3 | Open ledger, emphasized total, sans serif numerals |
| Shape and depth | 4 | Generous corners, square corners, solid shadows, cut corners |
| Calls to action | 3 | Outlined button, pill, text action |
| Support | 3 | Warm neutral palette, open contact block, earlier contact placement |

Applications are an odds social card, lifestyle social card, poster concept, email concept, quiz interface and support panel. The initial studies are English. Poster and email examples are fixed-size review canvases; the quiz and contact controls inside the artwork are visual specimens. A selected direction needs channel-specific production adaptation and language fitting before library-wide use.

## Brand and assets

The work follows the [adaptive identity model](../../brand-book/03-visual-identity.md), [brand personality](../../brand-book/02-brand-personality.md), [voice and tone](../../brand-book/04-voice-and-tone.md) and [photography direction](../../visual-identity/photography/photography.md). Player agency and clear information remain central. Support variants keep the same calm language and omit game imagery, decorative depth and expressive headline treatments.

The reference palette reads the generated brand tokens. Alternative palettes and fonts are scoped to these studies; `_brand.yml` and production presets are not changed. Contact information and age disclosures resolve from brand configuration at render time. The wordmark uses the configured, generated vector artwork. Regenerate the main logo assets if the operator name changes, then rebuild these studies.

Inter, Source Sans 3 and Source Code Pro are vendored in the main repository. Fraunces, Manrope, Space Grotesk and Archivo Black reuse the [licensed fonts in the style alternatives](../style-alternatives/README.md#typography-and-portability). No font requests are made to external services.

The casino conversation and café photographs reuse the existing [September creative refresh](../creative-review/photography/README.md). No new image generation or credentials are required. Crops and frame treatments are implemented in the HTML/CSS studies.

## Saving and privacy

Choices and notes are stored in this browser's local storage under `playbook-design-preferences-v1`. They are not sent to a server or committed to the repository. The category and focused comparison can be shared through the page URL; the URL does not include preferences or notes. Browser storage is tied to the local origin, so export a backup before changing browsers or server ports. If storage is unavailable, reviewing and exporting still work for the current visit.

The brief records individual preferences rather than calculating a style score or claiming that a mixed set of choices forms a finished identity. Both and neither remain explicit outcomes. Note-only entries are preserved as undecided.

## Build and verification

```sh
npm run build:design-preferences
# With the local server running on port 8765:
npm run check:design-preferences
# Or provide another server URL:
node collateral/design-preferences/check-browser.mjs http://127.0.0.1:8000/collateral/design-preferences/index.html
```

[studies.mjs](studies.mjs) holds the comparison decisions and rationales. [build.mjs](build.mjs) generates the masters, manifest and browser data from shared content. [specimens.css](specimens.css) contains the scoped visual choices. [preferences.mjs](preferences.mjs) manages backup validation and brief output.

The renderer checks all 36 canvases for matching dimensions, font and image loading, unresolved tokens, text bounds and clipping, major and internal block overlaps, container fit, and solid-background text contrast of at least 4.5:1. Minimum source text sizes are 42px for social/poster studies, 22px for email, 19px for quiz and 16px for support. It also verifies identical visible copy within each pair. [Render results](validation.json) include final image hashes.

[Browser checks](browser-validation.json) cover the entire image inventory, every category and preference state, review filters, persistence, notes, focused URL state, full-size switching, keyboard dismissal and focus return, actual downloaded files, backup restore, invalid input handling, mobile layout and storage-unavailable behavior. Checks use a temporary browser profile and never change a user's saved preferences. Every pair is also visually reviewed; browser checks alone do not assess art direction.
