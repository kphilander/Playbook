# English collateral · Offset layout update, 21 September 2026

[Open the review gallery](index.html). This edition supersedes the earlier artwork for the 85 English items listed in [manifest.json](manifest.json). The same editable HTML, SVG, PNG, thumbnail and copy files are used by PlaybookRG. Earlier creative studies, their saved preferences, localized files and alternate production profiles remain in their existing directories.

Offset is the default layout for the 58 text-led pieces in this edition. The headline keeps the outer alignment; an emerald rule, explanation and action share a second, inset alignment. Identity and required footer stay at the outer alignment. The 12 September editorial copy is unchanged. Emails and account examples use their content's natural height. Earlier Spotlight and Contour studies remain available as studies.

The 12 Tier 2 support, pause, limit, reflective-summary and reactivation pieces use plain white surfaces, navy text and restrained green accents, following the [Tier 2 visual guide](../../visual-identity/tier-2/tier-2-visual-guide.md). The manifest records their tier. The support flap within the mixed brochure also uses Tier 2 styling; the other panels remain Tier 1. Routine tools, education and general reminders remain Tier 1 even when they carry a support footer.

## Layout by format

[The shared layout policy](offset-layout.json) defines the inset as a fraction of the usable width, after outside margins:

| Format | Inset |
| --- | ---: |
| Campaign card or poster | 24% |
| Tall story | 18% |
| Data or comparison | 14% |
| Narrow print or folded panel | 10% |
| Email | 12% |
| Product interface, reference or staff sign | 8% |
| General venue sign | 14% |

These are layout defaults, not copy changes. The generator measures text at the available width before producing HTML and reference images. Operator values still resolve from `_brand.yml`.

On email screens at or below 400px wide, the explanation and action return to the outer alignment so numeric values have room to stay intact. The emerald rule remains. Desktop and print retain the 12% inset.

Exceptions are intentional:

- **Nine photographic pieces:** retain the subject, crop, scrim and photograph-specific reading area. Offset would compete with the image.
- **Twelve Tier 2 pieces and the brochure support flap:** keep white surfaces, direct contact hierarchy and no campaign inset.
- **Six compact formats:** notifications, banners, overlays and compact controls keep their available reading width.
- **Earlier translations and alternate production profiles:** retain their own reviewed compositions. They are not translations of this English edition.

The manifest exposes `layout` for Offset pieces and `tier`, `style` and `composition` for individual folded panels, so programmatic adapters can preserve these distinctions.

## Files and editing

- `artwork/*.html` are self-contained editable native canvases. Fonts, photos and QR artwork are bundled; no font or image service is needed.
- `artwork/*.svg` and `*.png` are matching reference artwork; `*.webp` are gallery thumbnails. `*.txt` contains the short player-facing copy and configuration placeholders.
- `copy.en.json` records the editorial copy. `offset-layout.json` records the layout profiles and exceptions. `manifest.json` retains explanatory source notes and references, file hashes, canvas dimensions, style choices and the lottery crop's focal point.
- The longer reference notes remain available for editors without repeating every qualification in the artwork. Conditions needed to interpret the figures remain on the relevant piece.

Edit the HTML directly for a one-off layout. For a coordinated edition, edit the copy in this repository and use the PlaybookRG renderer to refresh the matching files in both repositories:

```sh
# From the PlaybookRG checkout; provide your actual Playbook path.
cp ../Playbook/collateral/editorial/copy.en.json content/resource-revisions/editorial-en.json
cp ../Playbook/collateral/editorial/offset-layout.json content/resource-revisions/offset-layout.json
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
