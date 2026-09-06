# Playbook background and CSS directions

[Open the comparison](index.html).

Six directions across nine text-led templates: the current flat treatment
and five optional CSS presets. The nine samples include all five items
flagged “Needs work” in the [recorded text-polish review](../text-polish/selection.json),
plus approved cards, a game guide and a poster. The earlier 26 choices and
production masters are preserved.

| Direction | Background | Typography and data |
| --- | --- | --- |
| Current (`flat`) | Existing flat navy | Exact current text-polish control |
| Spotlight (`spotlight`) | Dark navy with a soft emerald radial gradient | Lighter Inter; fine framed facts |
| Contour (`contour`) | Fine concentric CSS arcs | Open type; a vertical emerald fact rule |
| Editorial (`paper`) | Light neutral field and faint lower-page ruling | Navy type, deep emerald numbers, editorial rules |
| Emerald (`emerald`) | Emerald field with a subtle diagonal | Bold navy type; dark facts with light text |
| Gridline (`signal`) | Faint orthogonal grid on dark navy | Heavier headings; mono data and firmer rules |

## Reuse

Load [text-surfaces.css](../render/text-surfaces.css) after `text-polish.css`,
then add `data-surface="spotlight"` (or another value above) to the existing
`.pb-creative.pb-text-polish` artboard. The builder does exactly those two
operations. Content nodes and placeholders remain unchanged.

```html
<link rel="stylesheet" href="brand-inject.css">
<link rel="stylesheet" href="creative-system.css">
<link rel="stylesheet" href="text-polish.css">
<link rel="stylesheet" href="text-surfaces.css">
<!-- Keep the template's existing body and content. -->
<div class="social-card pb-creative pb-text-polish" data-surface="spotlight">
  <!-- Existing template content -->
</div>
```

Colors, typography families, gradients, arcs and grids derive from the brand's
`--pb-*` tokens. Later operator CSS can change the palette and font families.
Artwork needs no JavaScript, external images, generated textures or new
content markup. The optional preset is deliberately separate from the base
polish stylesheet; choosing one in the review does not change production.

This study validates the nine English templates and their current portrait
feed, story and poster compositions. Email rendering, square adaptations,
other languages and new operator palettes need their own fit/contrast review
before adopting a preset. Existing contact and age text is unchanged. Story
content retains the existing top/bottom UI insets. Decorative lines and fields
encode no odds or game results.

## Render and inspect

```sh
npm run build:text-surfaces
# With the repository served at http://127.0.0.1:8765:
npm run check:text-surfaces
```

The build produces 54 resolved live HTML pages and native 2× PNGs:
2160 × 2700 feed cards, 2160 × 3840 stories, and 3600 × 4800 poster trim.
Poster previews deliberately show the finished trim; they are not production
print exports with bleed. `flat` adds no visual overrides. The main masters
and their current production PNGs are not modified.

`validation.json` records source and PNG hashes, dimensions, copy preservation,
text geometry and contrast. Contrast is measured against a raster of the real
CSS backdrop with only glyph fill hidden. Every background pixel in each text
line's bounding rectangle is scanned, including gradients, patterns and fact
panels. This conservative check uses a 4.5:1 threshold for all text. Geometry
uses measured glyph extents to distinguish visible overlaps from overlapping
font metric boxes at tight display leading.

The browser check covers responsive layouts, selecting all nine templates,
independent preferences, clearing, reload, export, malformed storage, all 54
live pages, exact PNG dimensions/hashes, distinct computed styles, and changing
the brand tokens/font family through later CSS. A negative gradient case
checks that a bright stop beneath white text is rejected. Visual inspection
of every comparison complements those checks.

Choices save under `playbook-text-surfaces-preferences-v1`, keyed by template
and surface. Multiple favorites are allowed. The export contains only this
study's choices; it does not overwrite or import earlier feedback.

The [September 6 saved review](selection.json) records 33 ratings: four
Favorite, 13 Maybe and 16 Pass, with 21 unrated. The [review notes](review-notes.md)
identify the four preferred template/treatment combinations and the remaining
design questions. Recording feedback does not change the production masters.
