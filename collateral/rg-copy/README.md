# rg-copy — Language bundles for `collateral/rg-page.html`

Hand-authored copy bundles that power the "Upload _brand.yml" option in the
Try-your-brand modal on [rg-page.html](../rg-page.html). When an operator
uploads a `_brand.yml` whose `meta.primary_jurisdictions[0]` matches a known
market, the runtime swaps the page's copy into the mapped language.

| Market (`_brand.yml`)      | Bundle        | `<html lang>` | Dir   | Tone profile (from [_brand.yml](../../_brand.yml)) |
|----------------------------|---------------|---------------|-------|----------------------------------------------------|
| `japan`                    | `ja.json`     | `ja`          | LTR   | elder / communal / understated / contextual / reserved |
| `macau`                    | `zh-CN.json`  | `zh-Hans`     | LTR   | authority / communal / minimal / diplomatic / private |
| `united-arab-emirates`     | `ar.json`     | `ar`          | RTL   | authority / communal / understated / contextual / private |
| anything else              | *(no override)* | `en`        | LTR   | peer / individual / irreverent / blunt / open |

`en.json` is the canonical English source. The rg-page.html HTML itself also
contains the English copy inline — that's the fallback if a bundle fetch / parse
fails. `en.json` exists primarily so the activation code path can round-trip
back to a clean baseline after a language switch.

## How bundles are delivered to the page

Bundles ship as `<script type="application/json" id="pb-i18n-<lang>">` blocks
inlined into rg-page.html (near the top of `<body>`, after the SVG symbol
definitions). Zero-network — the "Nothing leaves your browser" promise of the
Try-your-brand modal is preserved.

To update an inlined bundle after editing a JSON here, re-run:

```sh
node lib/inline-rg-copy.mjs
```

This idempotent command reads four page bundles and four `myths-<lang>.json` quiz bundles, validates JSON, requires exactly one matching inline block, and safely escapes `<` inside JSON data.

## Bundle format

Flat JSON with three top-level blocks:

```json
{
  "_meta": {
    "language": "ja",
    "dir": "ltr",
    "html_lang": "ja",
    "font_family_heading": "'Inter', 'Noto Sans JP', system-ui, ...",
    "font_family_body": "'Inter', 'Noto Sans JP', system-ui, sans-serif",
    "font_preload_google": "Noto+Sans+JP:wght@300;400;500;600;700;800;900",
    "cultural_profile": "elder/communal/understated/contextual/reserved (Japan)",
    "currency_note": "JPY integer, ¥ before numeral"
  },
  "strings": { "helpline.strip.label": "...", "nav.odds": "...", ... },
  "glossary": { "house edge": "...", "rtp": "...", ... }
}
```

- **Keys are identical across bundles.** Only values translate. A missing key
  falls through to English (snapshot taken on page load).
- **Don't translate `{{TOKENS}}`.** Leave `{{PROGRAM_NAME}}`, `{{HELPLINE_NUMBER}}`,
  `{{MIN_AGE}}` etc. verbatim — they resolve from the CSS upload's
  `/*! PLAYBOOK_META {...} */` block after translation is applied.
- **HTML is allowed in values.** Runtime uses `innerHTML` when the value matches
  `/<[a-z]+[\s>]/i`, `textContent` otherwise.
- **Glossary keys stay as lowercase English phrases.** The tooltip walker at
  [rg-page.html:1617](../rg-page.html#L1617) matches English in running text (e.g.
  "house edge" appearing in an insight sentence); only the *definition* translates.

## Authoring workflow

1. **Pick a bundle** (`ja.json`, `zh-CN.json`, `ar.json`). Never start from scratch —
   clone `en.json` and translate values.
2. **Check [collateral/render/_i18n/strings.yml](../render/_i18n/strings.yml)** (`common:` section, lines ~40-350)
   for already-translated phrases: helpline labels, age disclaimer, channel CTAs,
   voice-pillar phrases. Lift values to stay consistent with the 45+ collateral
   renders already shipping in the same language.
3. **Use the tone profile.** The brand-book chapter
   [09-cultural-adaptation.md](../../brand-book/09-cultural-adaptation.md)
   has before/after examples per dimension. The per-template rationale in
   [_cultural-audit.md](../render/_cultural-audit.md) describes specific shifts
   (e.g. "strip second-person pronouns for Macau authority voice").
4. **Arabic CTAs**: author arrow glyphs on the *start* side of the string (which
   renders visually at the left edge in RTL). Example: `التفعيل ←` — the `←`
   character, at the end of the string, renders at the visual left edge of the
   button, pointing leftward = "forward" in RTL. Matches the 70+ existing
   `.ar.html` collateral files.
5. **Run the JSON validator** before committing:
   ```bash
   for f in collateral/rg-copy/*.json; do
     python3 -c "import json; json.load(open('$f'))" && echo "$f ok"
   done
   ```
6. **Re-inline** into [rg-page.html](../rg-page.html) using `node lib/inline-rg-copy.mjs`.

## Updating English copy in rg-page.html

When English strings change in the HTML, `en.json` must be kept in sync manually
for now. A `regen-en.mjs` script that walks `[data-i18n]` / `[data-i18n-attrs]`
attributes and rebuilds `en.json` from the current DOM is a reasonable
follow-up — not scoped for this PoC.

## Quiz and dynamic content

The four `myths-<lang>.json` files maintain all 18 quiz questions in each language. English also contains the short social and article explanations. They are inlined into `pb-myths-<lang>` blocks. Edit these sources, then re-inline; do not regenerate them from the older API snapshot.

The page bundles include localized odds-card facts and glossary definitions. English is active on initial load and after a language reset. Operator demo controls and the Try-your-brand modal remain English. Linked game guides use the separate content API.

## Token placeholders still honored

Every `{{TOKEN}}` in the rg-page.html remains resolved by the existing
Try-your-brand token walker at
[rg-page.html:3340](../rg-page.html#L3340). After a YAML activates
translation, the walker re-snapshots the translated text and re-applies the
current CSS-derived token map, so an Arabic footer reads:

> `21+ فقط.` — © Emirates Gaming · `emirates.example` — مدعوم من Playbook (CC0)

when both the YAML (for language) and a Playbook-configurator CSS (for
operator name, min age, website) are uploaded.
