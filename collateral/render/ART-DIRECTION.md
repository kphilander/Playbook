# September 5 art-direction review

This round revises three English masters: `card-1c-lucky-machine`,
`card-2a-house-edge`, and `poster-19e-never-due`. They are a focused visual
review before adopting a direction across the wider library.

The seat card uses one repeated SVG chair and a single color field. The odds
card gives values a common reading order, with blackjack assumptions and
the game-dependent slots range kept beside the values.

User feedback: “i like the changes in 1 and 2. i dislike 3.” The seat and
odds masters and their rendered previews are kept unchanged. The first
photo revision is retained as the rejected comparison, not an approved
direction.

The second photo treatment tests the bold sans-serif voice of the two
preferred cards. It brings the explanation directly beneath the headline
and removes the secondary caption label. The photograph, crop, headline,
explanation, CTA and configurable support content stay the same, so this
comparison tested typography and hierarchy. The user then clarified:
“i liked the full page image with bleed in the first one, the new style
feels very homemade poster.” Both inset photo treatments are rejected.
The original full-bleed photo direction is preferred. This is now recorded
explicitly in the review, which links to the
[new campaign concepts](../campaign-concepts/index.html). The cinematic and
pause templates bring photography back to the edges; the odds template
extends the preferred graphic direction. Existing AI photo provenance remains in
`../creative-review/photography/`.

All copy stays in HTML. `art-direction.css` owns layout and exposes paper,
ink, accent, spot, display font, weight, headline size, and photo focal-point
properties. Append a skin stylesheet after it to restyle the same document.
The default palette and heading face resolve from the generated brand tokens.
Brand outlines are
inlined from the generated logo file using `sync-art-direction-logos.mjs`.
After regenerating the brand logo, rebuild this set to update its outlines.

Run `npm run build:art-direction` to synchronize logos, render the three
previews and refresh the review section in `_comparison.html`. The review
inserter is also used by `build:comparison`. It does not modify the existing
preference gallery or stored choices.

`comparison/art-direction-before/` preserves the exact PNGs from commit
`a2b5476` that were under review, independent of the older gallery baseline.
Keep these snapshots fixed when rebuilding.
`comparison/art-direction-round-1/poster-19e-never-due.png` preserves the
exact first photo revision from `fbef38c` for the next before/after pair.

These are contact-and-age creative studies, not universal market clearance.
The shared support contact and age disclaimer remain brand-configured.
Market-specific warning copy, mandated treatments, and local approval still
come from the jurisdiction profiles and the existing compliance research.
Translations are intentionally not changed in this visual review round.
