---
content_type: campaign
pillar: [open, social, tools]
tier: 1
tone: confident-informative
audience: [general, sports-bettors]
channel: [social-media]
reading_level: grade-6-8
---

# Campaign concepts / round 3

[Open the six creative previews](index.html).

The user prefers the revised illustration and odds cards from the earlier
review, and the **original full-bleed photo poster**. They rejected the two
inset photo treatments. These new compositions start from that clarified
preference; they have not yet been selected by the user.

| Concept | Creative decision | Content basis |
|---|---|---|
| Cinema — “Luck doesn’t keep score.” | The original social photograph runs to the top and both side edges, then dissolves into the reading area. No inset frame or footer bar. | Independent slot spins: past losses do not improve the next spin’s probability. [Slots guide](../../how-to-play/slots.md). |
| Pause — “Your time. Your call.” | A new portrait fills every edge. Architecture supplies space above the people for the headline; a live SVG pause symbol gives it a campaign device. | Choose an end time and set a personal reminder. [Session-reminder messages](../../messaging/core-messages.md#session-reminder). This does not depict an account control or automatic stop. |
| Odds — “More picks. Smaller target.” | Sixteen equal SVG circles, one highlighted outcome and a large live number. A full color field connects to the clarity of the preferred odds card. | Four independent picks with a true 50% chance each: 0.5⁴ = 0.0625 = 6.25% = 1/16. [Sports betting guide](../../how-to-play/sports-betting.md#parlays). These are hypothetical equally likely win/loss combinations, not a forecast or promise of one win every sixteen bets. |

Every concept is shown in Social Club (warm white, forest, Manrope) and
Circuit (white, cobalt, lime, Space Grotesk). Content, photography and SVG
geometry are byte-identical between each pair. The differences are CSS.

## Working templates

The three concepts are registered in the existing
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
Campaigns currently provide one composition each, at **1080 × 1350**; the
original eight template families retain their reference/new compositions.
Other formats and languages require their own composition review.

Run `npm run build:campaign-concepts` to refresh studio resources and rebuild
the six HTML/PNG/recipe previews and this review page. Run
`npm run check:campaign-concepts` for the focused editor, export, preference
and contrast checks. `npm run check:template-studio` checks the wider system.

The photo overlays expose minimum opacity and reading-area boundaries.
Validation checks that live text remains within those areas and calculates
contrast over the brightest possible photo pixel, rather than the hidden
background color. Keep those shadow tokens and the gradient stops aligned
when authoring a new composition. Photo suitability, faces, hands and
cropping still need visual review. The six supplied combinations have been
rendered and inspected; arbitrary replacement assets and copy are not
automatically art-directed.

Preferences use `playbook-campaign-preferences-v1` in local browser storage.
Selecting the same choice again clears it. No choice is preselected, and
the existing gallery and studio preference keys are not changed.

These are English **contact-and-age creative studies**. The support contact
and age come from the selected brand/market configuration. They do not
establish that a particular market permits the shown treatment; mandated
copy, operator details and placement requirements remain governed by the
[existing compliance research](../../docs/compliance-banner-research-2026-09-05.md).

## Photography provenance and selection

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
