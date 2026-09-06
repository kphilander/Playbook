# How much Playbook?

[Open the comparison](index.html). Three levels of brand expression use the same
“Leave room for the rest” copy, dinner photograph, crop and contact profile.
Dinner is a fixed comparison input, not a selected photographic favorite.

| Treatment | Brand decision | Tradeoff |
|---|---|---|
| A / Restrained | Official vector wordmark and book/play symbol; a short accent rule; confident, white type. | Keeps the photograph dominant, with recognition concentrated in the masthead. |
| B / Signature | A heavier headline, accent-colored second line, longer rule and tinted upper photograph. | More recognizable at thumbnail size, while retaining the full photographic cover. |
| C / Bold | A solid accent-colored masthead, oversized dark type and the approved monochrome symbol treatment. | Gives the brand more visual space and covers the upper architecture. The people remain visible below. |

These are review options. None replaces the existing campaign or saved favorites.
The default preview uses Playbook's navy, emerald and Inter. Social Club and
Circuit previews show the same expressions with different operator colors and
fonts. The original photograph remains 3712 × 4608; all nine PNGs are
3240 × 4050, with approximately 3.41× native image detail at the selected crop.

## Brand sources

- [Visual identity](../../../brand-book/03-visual-identity.md): recognizable but adaptive identity, official symbol, navy/emerald palette, outlined wordmark, editorial photography and marketing-quality execution.
- [Brand configuration](../../../_brand.yml): generated design tokens supply the default colors and typography.
- [Official symbol SVG](../../../visual-identity/logo/symbol/symbol-mark-on-dark.svg): the generated geometry is embedded intact, with color supplied by CSS. The bold treatment uses the approved monochrome arrangement.
- [Photography source and generation prompts](../photo-comparison/README.md): the selected dinner image is reused without editing or another generation call.

## Template contract

`campaign-presence` is one registered template with three composition variants:
`quiet`, `after` (Signature), and `bold`. It reuses the existing recipe schema,
media slot, market profiles, studio controls and portable export. The article
is identical between expressions except for its root CSS class. A skin change
does not alter any article markup. The photograph and crop are identical in all
nine comparison recipes. Copy and contact information stay live HTML; both
brand marks stay vector.

The new [expression CSS](../../template-system/brand-presence.css) controls the
type emphasis, rule and foreground masthead. Operator CSS skins still supply
color and font variables. All seven registered skins are checked, including
the four available only through the studio.

The contrast inspector checks the bold masthead against its actual opaque
background only when the complete text bounds fit inside that reading surface.
Transparent or overflowing surfaces retain the conservative photo-shadow checks.
This treatment adds no compliance exemption or new market claim.

## Rebuild and review

```sh
npm run build:brand-presence
npm run check:brand-presence
```

The build writes nine HTML/PNG/recipe sets, a comparison overview and fit/contrast
reports. The browser checks cover responsive layouts, skin previews, preference
persistence, studio links, independent skin/expression controls and negative
contrast cases. CLI exports use the existing `export:template` command.

The expression choice is stored under `campaign-brand-presence` in the existing
`playbook-campaign-preferences-v1` browser record. It does not alter the photo
or previous template/skin choices.
