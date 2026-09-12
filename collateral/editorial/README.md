# Revised English collateral · 12 September 2026

[Open the review gallery](index.html). This edition supersedes the earlier artwork for the 85 English items listed in [manifest.json](manifest.json). The same editable HTML, SVG, PNG, thumbnail and copy files are used by PlaybookRG. Earlier creative studies, their saved preferences, localized files and alternate production profiles remain in their existing directories.

The revision removes decorative photo captions, centers the people in the Birthdays lottery crop, cuts repeated supporting copy, and keeps each main message in a measured reading group. Emails and account examples use their content's natural height. Existing Spotlight, Contour and restrained-photo choices are retained. The new editorial changes are proposed for review; a saved preference from an earlier study is not approval of this edition.

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

The website customizer applies program identity, fonts, colors, contacts and QR destinations before exporting. Reference previews use setup prompts where an operator must supply a local value. The source HTML retains those placeholders. The native print canvases in this edition do not add a printer's bleed or crop marks; adapt the finished file to the vendor's production specification.

## Local checks and HTML renders

Install the existing renderer dependencies with `npm ci --prefix collateral/render`, then run:

```sh
npm run check:editorial
npm run check:editorial:browser
npm run render:editorial -- poster-19i-lottery-odds
```

The renderer writes native HTML screenshots to the ignored `exports/` directory. It does not overwrite the committed reference artwork. Run without a slug to render all 85 pieces. Review configured HTML again after changing a font, contact line or destination.
