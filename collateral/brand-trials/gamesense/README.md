# GameSense brand trial

The two supplied files are applied to **74 executions**: the 26 basic English
masters, 45 additional background variants, and three restrained photo formats.
The review opens on the four favorites recorded in the earlier Playbook review.
Those preferences are references, not approvals of the new GameSense versions.

## Inputs and regional scope

- `input/brand-canada.yml`: unchanged copy of the supplied provincial overlay.
- `input/brand-inject.css`: unchanged copy of the supplied GameSense stylesheet,
  including its embedded font and logo. `input/logo.png` extracts the original
  logo bytes so live pages can share the same image.
- The trial merges the overlay with the repository brand **in memory**. It uses
  Canada / British Columbia and the identity name GameSense, inferred from the
  supplied logo. `_brand.yml`, the generated brand CSS and existing masters remain
  unchanged. Source hashes are recorded in `manifest.json`.
- The BC preview uses the supplied phone, age and regional message. This is
  configuration verification, not a new legal assessment or market clearance.
  Operator destinations and existing QR placeholders still need completion.
- Supplied GameSense marks and fonts remain third-party brand assets. This
  preview does not relicense them under the repository's CC0 dedication.

## Shared template adaptation

`../../template-system/brand-package.mjs` creates an isolated brand configuration
and treats supplied contact records as complete records. Missing text/chat
channels do not inherit old values or become inferred from a telephone number.

`../../template-system/brand-presentation.mjs` normalizes legacy logo slots,
adds configured regional messaging and resolves support channels. The browser
reads the replacement logo from the incoming CSS, then the builder serializes
ordinary HTML. The live artwork has no runtime JavaScript.

`../../template-system/brand-package.css` is an opt-in compatibility layer:

- Headline lettering uses the supplied display family; utility labels and data
  use the supplied body family (mono data in Gridline). This avoids display numerals in small tables and
  inconsistent small labels. Support numbers retain the supplied mono family.
- Footer geometry reserves room for the configured message. Phone and age
  remain readable; stories retain their established platform UI insets.
- Gradients are disabled as requested by the incoming CSS. Background geometry
  uses token-colored SVG lines; Spotlight keeps its fine frames on a flat field.
  Photographs use an even, 60% black reading shade instead of gradient shading.
- Editorial text uses a darker, token-derived accent. Contour uses the supplied
  light accent so numbers remain readable where the decorative lines pass.

These are shared rules, not individual hand-edited artwork. Rebuild after changing
the YAML or CSS; logo assets and regional content are resolved during the build.
This trial verifies the supplied GameSense package, not every possible palette,
font or arbitrary stylesheet.

## Rebuild and checks

```sh
npm run build:brand-trial
npm run check:brand-trial
```

The builder accepts optional ID fragments for focused renders, for example
`node collateral/brand-trials/gamesense/build.mjs contour`. A full build writes
`manifest.json`, `validation.json`, 74 live HTML files and 74 full 2× PNGs, plus
gallery thumbnails. It fails on layout, text contrast, unresolved content,
missing brand assets or image upscaling. Glyph ink bounds are used for contrast
to exclude font ascender whitespace that falls outside a fact panel.

The browser checks verify portable live pages, email widths, review filters and
isolated preference storage. Email testing covers browser rendering and a font
fallback, not Outlook/Gmail delivery. Print previews show the trimmed creative;
production bleed, folds, QR destinations and export profiles remain separate.

Feedback uses `playbook-gamesense-brand-trial-v1` in browser storage and can be
downloaded as JSON. Earlier Playbook review choices are never overwritten.
