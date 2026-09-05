# September 5 art-direction review

This round revises three English masters: `card-1c-lucky-machine`,
`card-2a-house-edge`, and `poster-19e-never-due`. They are a focused visual
review before adopting a direction across the wider library.

The seat card uses one repeated SVG chair and a single color field. The odds
card gives values a common reading order, with blackjack assumptions and
the game-dependent slots range kept beside the values. The photo poster
uses a clear rectangular crop and live editorial type. Its existing AI
photo and provenance remain in `../creative-review/photography/`.

All copy stays in HTML. `art-direction.css` owns layout and exposes paper,
ink, accent, spot, display font, weight, headline size, and photo focal-point
properties. Append a skin stylesheet after it to restyle the same document.
The default palette resolves from the generated brand tokens; the photo
study uses the existing locally licensed Fraunces face. Brand outlines are
inlined from the generated logo file using `sync-art-direction-logos.mjs`.
After regenerating the brand logo, rebuild this set to update its outlines.

Run `npm run build:art-direction` to synchronize logos, render the three
previews and refresh the review section in `_comparison.html`. The review
inserter is also used by `build:comparison`. It does not modify the existing
preference gallery or stored choices.

`comparison/art-direction-before/` preserves the exact PNGs from commit
`a2b5476` that were under review, independent of the older gallery baseline.
Keep these snapshots fixed when rebuilding.

These are contact-and-age creative studies, not universal market clearance.
The shared support contact and age disclaimer remain brand-configured.
Market-specific warning copy, mandated treatments, and local approval still
come from the jurisdiction profiles and the existing compliance research.
Translations are intentionally not changed in this visual review round.
