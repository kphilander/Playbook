---
content_type: campaign
pillar: [open, social, tools]
tier: 1
tone: confident-informative
audience: [general, sports-bettors]
channel: [social-media]
reading_level: grade-6-8
---

# Campaign concepts / rounds 3 and 4

[Open the 18 creative previews](index.html): four new ideas in three skins,
followed by the three earlier concepts and their saved favorites.

## Round 4 — clearer ideas, sharper artwork

Direction 01 now has a [photography brief](photography/art-direction.md) and
[composition guide](photography/rest-composition.svg), also shown beneath the
concept in the review and linked beside the studio's image selector. The brief
directs a specific shared plan, casting, light, composition, source resolution
and adaptations for different adult brands. It belongs to the template, so
it remains available when the photograph changes. The existing creative and
historical generation prompt are retained.

| Concept | Creative decision | Content basis |
|---|---|---|
| “Leave room for the rest.” | A new 4K photograph fills the canvas. Warm hospitality and ordinary adult company put gambling within a larger evening. The headline occupies dark architecture above the faces. | Choose a finish time before play. [Session-reminder messages](../../messaging/core-messages.md#session-reminder). No promised product feature or universal session length. |
| “So close. Same odds.” | Two cherry symbols and a lemon replace the oversized numbers. Filled SVG silhouettes and fine negative strokes make the almost-match recognizable at small sizes. | A near miss does not improve the next independent slot spin’s probability. [Slots guide](../../how-to-play/slots.md) and [near-miss message](../../messaging/myth-busting.md#myth-4-near-misses-mean-youre-close). The fruit arrangement is illustrative, not a specific game/paytable or a claim about whether this combination pays. |
| “One extra zero. Different odds.” | Paired SVG rings count 37 and 38 pockets. One and two highlighted pockets introduce the edge comparison. | Straight-up number bets with standard 35:1 profit payouts: house edge = 1 − 36/N, giving 2.70% for N=37 and 5.26% for N=38. [Roulette guide](../../how-to-play/roulette.md). Rings count pockets; they do not depict physical wheel order. |
| “Time is part of the budget.” | An oversized dial with an open arc and pause symbol gives an everyday planning tool a clear graphic identity. | Choose an end time and use a reminder. The dial is a metaphor, not a progress meter, recommended duration, account control or automatic stop. |

The primary Playbook treatment resolves navy, emerald and type from the main
brand tokens. Social Club and Circuit show how the same ideas adapt to
hospitality and more playful digital brands. Every row uses the same article
markup, text, asset and SVG geometry. The skin only changes CSS.

The voice follows the brand book’s Open and Social pillars: explain an actual
mechanic, give the viewer a usable action, and make the message worth sharing.
No decorative generated text, cartoon mascots, boxed photo posters or invented
regulatory banner requirements are introduced.

### Refinement after review

The user found the top and bottom photographic fades awkward and suggested
symbols for concept 2. The terrace composition now uses a softer, continuous
shadow: the image remains visible behind the lower copy instead of falling
into near-black. The action uses the main light ink, with color retained in
the arrow, so the photograph can stay lighter while the text retains contrast.
The source photograph, full-bleed crop and message placement are unchanged.

The reel symbols are native SVG geometry. Their fill inherits the skin color;
stem and detail strokes inherit the same graphic-weight tokens as the other
campaign diagrams. No emoji font, raster symbol image or generated lettering
is involved. The result has an accessible description, and changing the CSS
preserves the artwork and content nodes.

## Round 3 — retained preferences

The user prefers the revised illustration and odds cards from the earlier
review, and the **original full-bleed photo poster**. They rejected the two
inset photo treatments. These new compositions start from that clarified
preference. The user has now saved a preferred treatment for each concept.

| Concept | Creative decision | Content basis |
|---|---|---|
| Cinema — “Luck doesn’t keep score.” | The original social photograph runs to the top and both side edges, then dissolves into the reading area. No inset frame or footer bar. | Independent slot spins: past losses do not improve the next spin’s probability. [Slots guide](../../how-to-play/slots.md). |
| Pause — “Your time. Your call.” | A new portrait fills every edge. Architecture supplies space above the people for the headline; a live SVG pause symbol gives it a campaign device. | Choose an end time and set a personal reminder. [Session-reminder messages](../../messaging/core-messages.md#session-reminder). This does not depict an account control or automatic stop. |
| Odds — “More picks. Smaller target.” | Sixteen equal SVG circles, one highlighted outcome and a large live number. A full color field connects to the clarity of the preferred odds card. | Four independent picks with a true 50% chance each: 0.5⁴ = 0.0625 = 6.25% = 1/16. [Sports betting guide](../../how-to-play/sports-betting.md#parlays). These are hypothetical equally likely win/loss combinations, not a forecast or promise of one win every sixteen bets. |

Every concept is shown in Social Club (warm white, forest, Manrope) and
Circuit (white, cobalt, lime, Space Grotesk). Content, photography and SVG
geometry are byte-identical between each pair. The differences are CSS.

## Saved selections

The user-saved controls in the campaign review select:

| Concept | Favorite | Preview |
|---|---|---|
| Cinema | A / Social Club | [Selected artwork](renders/campaign-cinema-club.png) |
| Pause | B / Circuit | [Selected artwork](renders/campaign-pause-circuit.png) |
| Odds | A / Social Club | [Selected artwork](renders/campaign-probability-club.png) |

These choices are captured in [selections.json](selections.json) and are now
used by each template’s default recipe and reset action. Existing saved
recipes, explicit skin links and browser preferences remain authoritative
for those individual sessions. Both CSS treatments remain available.

The latest user message supports New direction / 01 and asks for more art
and photography direction. That feedback is recorded separately from skin
preferences. The four new rows currently show no selected control in the
connected review; no additional preferred skin has been inferred.

For the next creative round, carry forward the lighter Social Club type
in the cinematic and odds compositions, and Circuit’s stronger type and
lime pause symbol in the portrait composition. This is a direction for
these templates, not evidence of one universal preferred skin. The
full-bleed photo preference and the earlier illustration/odds selections
also remain in force.

## Working templates

All seven concepts are registered in the existing
[template engine](../template-system/engine.mjs), not a separate rendering
system. [Campaign content](../template-system/campaigns.mjs) supplies defaults;
[composition CSS](../template-system/campaigns.css) controls placement; the
existing skin files supply colors, type and stroke weights. Default colors
and fonts resolve from the main brand tokens. Photography is a replaceable
asset with independent crop coordinates. All messaging, numbers, contact
and age information remain HTML. The logo uses the generated vector asset.

“Edit this template” opens the existing studio with the corresponding
recipe and comparison skins. Content editing, registered media, local recipe
saving, CSS export and portable HTML export use that shared platform.
Campaigns provide one composition each, at **1080 × 1350 CSS pixels**, with
**3240 × 4050 PNG exports** rendered directly at 3× density. The
original eight template families retain their reference/new compositions.
Other formats and languages require their own composition review.

Run `npm run build:campaign-concepts` to refresh studio resources and rebuild
the 18 HTML/PNG/recipe previews and this review page. Run
`npm run check:campaign-concepts` for the focused editor, export, preference
and contrast checks. `npm run check:template-studio` checks the wider system.

The photo overlays expose minimum opacity and reading-area boundaries.
Validation checks that live text remains within those areas and calculates
contrast over the brightest possible photo pixel, rather than the hidden
background color. Keep those shadow tokens and the gradient stops aligned
when authoring a new composition. Photo suitability, faces, hands and
cropping still need visual review. The 18 supplied combinations have been
rendered and inspected; arbitrary replacement assets and copy are not
automatically art-directed.

## Resolution contract

Earlier review renderers captured one raster pixel per CSS pixel. Several
support and interface studies therefore had only 420–720 pixels of width,
which becomes visibly soft when enlarged or inspected on a dense display.
The active creative review (30), style alternatives (12), and design
preferences (52) have been re-rendered at 3× from their unchanged source
templates. The six earlier campaign treatments receive the same upgrade.
Historical snapshots in `render/comparison/` retain their original bytes.

The shared [export quality module](../template-system/export-quality.mjs)
separates composition dimensions from PNG pixels. The CLI defaults to 3× and
accepts `--scale=1`, `2`, `3`, or `4`. The manifest retains CSS dimensions and
adds output dimensions, source-image dimensions and usable density at the
actual crop. Increasing export density improves live text and SVG detail;
it cannot recover detail absent from a photo. The earlier cinema and pause
photographs are retained as selected and are identified as upsampled at 3×.
The new 3712 × 4608 portrait supplies about 3.41× density at its default crop,
so its 3× export needs no photo enlargement. Inspect the live HTML for
resolution-independent type and diagrams. Physical print sizes and bleed
still belong to the existing production print profiles.

Preferences use `playbook-campaign-preferences-v1` in local browser storage.
Selecting the same choice again clears it. No choice is preselected, and
the existing gallery and studio preference keys are not changed.

These are English **contact-and-age creative studies**. The support contact
and age come from the selected brand/market configuration. They do not
establish that a particular market permits the shown treatment; mandated
copy, operator details and placement requirements remain governed by the
[existing compliance research](../../docs/compliance-banner-research-2026-09-05.md).

## Photography provenance and selection

Round 4 uses [this 3712 × 4608 source photograph](photography/output/campaign-round-4-20260905/creative-campaign/shared-input/room-for-the-rest/attempt-1/candidate-1-image-1.jpg).
It was generated once through the same authorized Google Gemini 3 Pro Image
workflow, requesting 4K output. The [exact prompt](photography/round-4-request.json)
and [settings](photography/round-4-settings.json) ask for adult friends on a
resort terrace, natural optical detail, quiet architecture above the people
and no baked-in graphics. Selection favors clear faces, realistic clothing
texture, restrained warm light, architectural negative space and an image
that reaches every edge. The people are composed as a shared moment on the
terrace, not a gambling result or winning celebration. No image editing or
upscaling is applied to the source. [Result and hash](photography/output/campaign-round-4-20260905/creative-campaign/shared-input/room-for-the-rest/attempt-1/result.json)
and [sanitized response](photography/output/campaign-round-4-20260905/creative-campaign/shared-input/room-for-the-rest/attempt-1/response.json)
are retained; opaque continuation signatures are omitted. Credentials stay
inside the generation process.

Cinema reuses the [previously generated casino-conversation photograph and
its prompt record](../creative-review/photography/README.md). The wider
landscape crop preserves all three faces and their active hands; its lower
edge fades into the message area, following the preferred original poster.

Pause uses [this generated portrait](photography/output/campaign-portrait-20260905/creative-campaign/shared-input/evening-pause/attempt-1/candidate-1-image-1.jpg),
1856 × 2304 JPEG. It was generated with **Google Gemini 3 Pro Image**, using
the user's authorized Google API route through the existing
`lib/google-photography.mjs` CLI. One attempt was made and selected. The
Keychain credential stays in the generating process and is absent from
these assets and the browser.

The [exact prompt](photography/request.json) asks for two adult friends
walking through a contemporary resort lobby at blue hour, with quiet dark
architecture in the upper third for a headline, a simple lower reading
area, candid interaction and no baked-in typography. The generated image
was selected for the open upper composition, clearly adult subjects,
intact faces and natural hands, warm skin lighting, and photograph extending
to the edges. The casino context is environmental, not evidence of a game
result. [Settings](photography/settings.json), [sanitized provider response](photography/output/campaign-portrait-20260905/creative-campaign/shared-input/evening-pause/attempt-1/response.json)
and [result/hash record](photography/output/campaign-portrait-20260905/creative-campaign/shared-input/evening-pause/attempt-1/result.json)
are retained alongside the source. The opaque provider continuation
signature is omitted from the sanitized response.
