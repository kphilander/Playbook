# Revised English collateral · 12 September 2026

[Open the review gallery](index.html). This edition supersedes the earlier artwork for the 85 English items listed in [manifest.json](manifest.json). The same editable HTML, SVG, PNG, thumbnail and copy files are used by PlaybookRG. Earlier creative studies, their saved preferences, localized files and alternate production profiles remain in their existing directories.

The revision removes decorative photo captions, centers the people in the Birthdays lottery crop, cuts repeated supporting copy, and keeps each main message in a measured reading group. Emails and account examples use their content's natural height. Existing Spotlight, Contour and restrained-photo choices are retained. The new editorial changes are proposed for review; a saved preference from an earlier study is not approval of this edition.

The 12 Tier 2 support, pause, limit, reflective-summary and reactivation pieces use plain white surfaces, navy text and restrained green accents, following the [Tier 2 visual guide](../../visual-identity/tier-2/tier-2-visual-guide.md). The manifest records their tier. Routine Tier 1 reminders retain their existing treatment.

## Files and editing

- `artwork/*.html` are self-contained editable native canvases. Fonts, photos and QR artwork are bundled; no font or image service is needed.
- `artwork/*.svg` and `*.png` are matching reference artwork; `*.webp` are gallery thumbnails. `*.txt` contains the short player-facing copy and configuration placeholders.
- `copy.en.json` records the editorial changes. `manifest.json` retains explanatory source notes and references, file hashes, canvas dimensions, style choices and the lottery crop's focal point.
- The longer reference notes remain available for editors without repeating every qualification in the artwork. Conditions needed to interpret the figures remain on the relevant piece.

Edit the HTML directly for a one-off layout. For a coordinated edition, edit the copy in this repository and use the PlaybookRG renderer to refresh the matching files in both repositories:

```sh
# From the PlaybookRG checkout; provide your actual Playbook path.
cp ../Playbook/collateral/editorial/copy.en.json content/resource-revisions/editorial-en.json
npm run generate:resources -- --styles-only
node scripts/sync-editorial-source.mjs --export-to ../Playbook
node scripts/sync-editorial-source.mjs --check-against ../Playbook
```

The website customizer imports `_brand.yml` and applies program identity, supported fonts, colors, contacts and QR destinations before exporting. Tier 2 surfaces stay white after customization. Reference previews use setup prompts where an operator must supply a local value; the editable source HTML contains configuration tokens, not fixed contact text. The native print canvases in this edition do not add a printer's bleed or crop marks; adapt the finished file to the vendor's production specification.

## Local checks and HTML renders

Install dependencies with `npm ci` and `npm ci --prefix collateral/render`, then run:

```sh
npm run check:editorial
npm run check:editorial:browser
npm run check:editorial:configured
npm run render:editorial -- support-page-10a --brand=/path/to/_brand.yml --jurisdiction=united-states --sub-region=nevada
```

The renderer reads the repository's `_brand.yml` by default. `--brand` selects another file; `--jurisdiction` defaults to its first `meta.primary_jurisdictions` entry and `--sub-region` selects the local helpline. Combined market names such as `united-states-nevada` also work. It resolves identity, contacts, hours, notices and destinations through `lib/brand-config.mjs`, then generates actual QR images for configured destinations. Missing required fields stop that piece's export with a field name instead of printing a setup prompt. Email preferences use `integration.preferences_url`.

The renderer writes configured HTML, visible TXT and PNG to the ignored `exports/` directory (override with `--out=/path`). Run without a slug to render all 85 pieces. Use `--reference` only to inspect the unconfigured template. Committed SVG/PNG/WebP files remain reference previews and do not change when a local brand file changes. The source renderer preserves the edition's fonts and palette; use the website customizer for those visual overrides. Review configured HTML again after changing a contact line or destination.
