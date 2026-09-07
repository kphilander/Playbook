# One idea. Room to adapt.

[Open the family review](index.html). The user-selected **A / Restrained**
expression is developed into three placements, each in Playbook, Social Club
and Circuit. The source photograph and all message/contact wording are shared.

| Format | CSS canvas | PNG export | Composition |
|---|---|---|---|
| Portrait post / 4:5 | 1080 × 1350 | 3240 × 4050 (3×) | The approved portrait is unchanged and reused directly. |
| Vertical story / 9:16 | 1080 × 1920 | 2160 × 3840 (2×) | Both people remain visible in a central crop. The headline sits above the faces; text reserves 180px at the top and 220px at the bottom. |
| Landscape display / 16:9 | 1920 × 1080 | 5760 × 3240 (3×) | A solid reading column blends into a 1120 × 1080 photographic slot on the right. An 85% vertical focal point keeps the people prominent. |

The story insets are working composition choices, not a platform-clearance
claim. Check the actual placement's controls, overlays and required information
before delivery. These studies retain the same English contact-and-age context.

## Creative decisions

The [saved restrained preference](../brand-presence/selection.json) supplies the
identity: official vector wordmark and symbol, small accent rule, white type,
and photography carrying the scene. The current dinner image remains a fixed
input for testing formats; the expression preference did not select a photo.

The story crops the sides of the portrait master rather than stretching it.
The landscape moves the message into a brand-colored reading field, so it can
use a useful crop of the portrait source and keep both faces and the greeting
visible. The photograph reaches the top, right and bottom edges; it has no
inset frame. Reading order and spacing adapt to the format.

## Native image quality

The original dinner JPEG is **3712 × 4608** and is reused without generation,
raster editing, upscaling or a replacement image. [Source and prompts](../photo-comparison/README.md).

Available native density at these media-slot dimensions is approximately
3.41× for portrait, 2.4× for story and 3.31× for landscape. The story therefore
defaults to 2× export, while the other formats use 3×. The exported story is
still twice the dimensions of a 1080 × 1920 placement. Text and SVG are rendered
directly at the final output density. The CLI's explicit `--scale` override
remains available, with source-density reporting when an image is enlarged.

## Shared template system

[Format profiles](../../template-system/campaign-formats.mjs) derive from the
existing brand-presence content and identity. The portrait uses
`campaign-presence`; the other two registered profiles use
`campaign-rest-story` and `campaign-rest-landscape`. Each uses the existing
recipe schema, asset registry, market profiles, studio and portable export.

All three share the same article body. Format dimensions, root metadata and an
explicit crop coordinate vary; the format CSS supplies composition. Operator
skin changes update only CSS. The wider Archivo Black skin uses a smaller
landscape headline to fit the reading column; all seven registered skins are
included in the full template matrix.

The inspector uses the actual photographic slot bounds. Text fully outside
that slot is checked against the solid field. Text that moves into the image
must still pass the protected photo reading-area checks. The existing opaque
masthead checks remain in force.

## Rebuild and review

```sh
npm run build:campaign-family
npm run check:campaign-family
npm run export:template -- collateral/campaign-concepts/campaign-family/renders/story-playbook.json /tmp/story-export
```

The family build writes six new PNGs and nine HTML/recipe sets. It verifies
that the three portrait PNGs match the approved files byte for byte and links
to those originals. All nine exports are checked for native image density,
dimensions, fit, contrast and shared content/markup. Reports sit beside this
file. The main template matrix also checks the four studio-only skins.

The review records `Looks good` / `Needs work` separately for each format and
brand, using keys such as `campaign-family-story-club` in
`playbook-campaign-preferences-v1`. The active brand is included in the page URL.
Earlier photo and brand-expression preferences are preserved.
