# The everyday Playbook

[Open the before/after review](index.html).

A restrained polish pass across **26 English masters**: four core social cards,
ten how-to-play cards, three stories, three text posters, a rack card, a table
tent and four everyday emails. The [manifest](manifest.json) defines the exact
scope. Photographic campaigns, the selected art-direction masters, translated
collateral and dedicated support templates retain their existing treatment.

## What changes

- Inter headlines use a lighter weight and clearer scale; labels recede.
- Social cards use a consistent left edge and a short emerald brand rule.
- Facts use simple rules and aligned numbers, with fewer competing panels.
- Support details remain visible in a quieter footer. The existing words,
  number, age line and disclaimer are preserved. Phone numbers use Source Code
  Pro, following the brand's character-disambiguation guidance.
- Email typography and spacing adapt to narrow screens. Low-contrast labels,
  outline actions and legal lines receive accessible colors from brand tokens.

These are visual refinements, not a change to market requirements or an email
client certification. The configured contact/disclaimer wording is unchanged.
Production print sizing, bleed and table-tent folding remain owned by the
existing [output profiles](../render/output-profiles.mjs).

## Reusable implementation

The original HTML masters opt in with `pb-text-polish` and load the shared
[text-polish.css](../render/text-polish.css) after their existing styles.
Colors and font families resolve through `--pb-*` tokens generated from
`_brand.yml`. No generated token files are edited. A small span around the
existing phone placeholder permits mono digits without setting the entire
support sentence in monospace. All other content markup stays the same.

The shared styles include a shorter square composition. They apply only to
the opted-in masters and can be overridden by later operator CSS. They do not
depend on the photographic campaign engine.

## Review and exports

The review renders both sides directly from HTML and bundled local fonts at
**2×**, including 2160 × 2700 social cards. It preserves the normal print bleed
around the preview artboard. The polished PNGs replace the matching current
previews in `render/`; the original images are frozen under `before/`. The
generated `live/` pages resolve placeholders against the same configured
United States context. Each image opens at full resolution.

Baseline source is commit `add8c77`. The build verifies that each current
master differs only by the opt-in class, stylesheet link and phone span. It
also compares visible copy, allowing CSS letter case to change. Existing
baseline PNGs are kept on subsequent builds. Later shared CSS or brand changes
should update current previews while leaving the review baseline intact.

```sh
npm run build:text-polish
npm run check:text-polish
```

`check-layouts.mjs` uses the existing production checker across the preview,
square, story, US/ISO print and 320/375/600px email profiles. Browser checks
cover category filtering, saved feedback, live artwork, PNG dimensions, CSS
reskinning and a negative contrast case. The contrast audit composites solid
and translucent background colors; it is scoped to these text-led templates,
not photographic backgrounds. Visual inspection remains part of review.

Preferences save independently in `playbook-text-polish-preferences-v1`.

The [recorded review](selection.json) contains 21 “Looks good” and five
“Needs work” choices, read from the saved browser review on September 6, 2026.
“Needs work” is a refinement flag, not a preference for the earlier design.
The [background and CSS study](../text-surfaces/index.html) builds on that
feedback and keeps its new choices separate.
