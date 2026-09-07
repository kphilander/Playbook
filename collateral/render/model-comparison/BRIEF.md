# Playbook — common creative brief

Produce three original Playbook content/collateral concepts for a comparison of model-generated creative work. Your work must be your own. Do not inspect other agents’ output folders or ask other agents for creative ideas. Do not read existing comparison results. Read the same required reference packet and templates listed below before authoring.

## Deliverables

Create exactly three English Tier 1 social cards, each at 1080 × 1350:

1. **sports.html** — one sports betting education concept.
2. **myth.html** — one gambling myth concept.
3. **wildcard.html** — one additional entertainment-literacy concept of your choice, distinct from your other two.

Choose your own hook, specific topic, copy, visual treatment, and action line. Make three concepts worth showing, not just paraphrases of the examples. Use the common existing templates as a starting point and preserve Playbook’s brand system, but develop your own composition and editable CSS/SVG illustration. Raster AI image generation and external images are outside this comparison.

## Common references — read all

Paths below are relative to `/Users/ksr/Playbook`. The reference hashes are recorded in `inputs.json`.

- `AGENTS.md`
- `.claude/commands/brand-create.md`
- `_brand.yml`
- `_taxonomy.yml`
- `brand-book/02-brand-personality.md`
- `brand-book/03-visual-identity.md`
- `brand-book/04-voice-and-tone.md`
- `brand-book/05-messaging-framework.md`
- `messaging/stigma-free-language.md`
- `messaging/core-messages.md`
- `messaging/myth-busting.md`
- `how-to-play/sports-betting.md`
- `how-to-play/slots.md`

## Common templates and implementation references — read all

- `collateral/render/card-15a-point-spread.html`
- `collateral/render/card-13a-its-due.html`
- `collateral/render/card-20b-pick-your-pause.html`
- `collateral/render/concept-20.css`
- `collateral/render/layout-system.css` (social-card rules)
- `collateral/render/model-comparison/fonts.css`

All three models receive these same templates. Use them as structural/art-direction references; do not repeat their existing headlines as your new concepts. Existing example copy is not a substitute for checking your claims. Keep any numerical assumptions visible in the player-facing artwork. Use simple arithmetic and the common references; if a claim cannot be supported from this packet, choose another claim instead of adding external research.

## Brand and production requirements

- Tier 1: knowledgeable, confident, witty where appropriate, respectful, entertainment literacy. Align with Open or Social; a tools concept may also use the Tools tag.
- Keep player-facing sentences short and concrete. No shame, clinical labels, promises of wins, or directions to increase gambling.
- Use CSS color and font-family variables from `../../brand-inject.css`. Keep the configured Playbook wordmark treatment: Inter 700, one color, tight tracking, no symbol substitution.
- Include `{{PROGRAM_SHORT_NAME}}`, `{{HELPLINE_NUMBER}}`, and `{{AGE_DISCLAIMER}}` placeholders. Do not hardcode operator/jurisdiction facts. Use a protected support/age footer.
- Load `../../brand-inject.css` and `../fonts.css` before your own CSS. These relative paths are from your assigned model folder.
- Root: a single `.social-card` element. Preserve a direct child `.card-footer` with `data-protected-zone="support-and-legal"`. Your `.card-logo` displays the program name.
- All visible text, including labels and support/age copy, must be at least **42 CSS pixels** in the 1080px master. Use actual readable text; do not hide words in pseudo-elements or images to evade this floor.
- Target text contrast of at least 4.5:1. Diagram information needs at least 3:1 and should not depend on color alone. Provide semantic HTML and meaningful alt/accessible descriptions for informative artwork.
- Keep the entire composition inside 1080 × 1350 without clipping, overlaps, or content crossing the footer. No square variant is required for this comparison.
- You may create your own `style.css` in your folder. Scope your styles to your cards. Do not edit the shared inputs, fonts, renderer, gallery, or any files outside your assigned folder.
- This is a raster collateral master, so action lines can be text; do not pretend to operate account controls or link to nonexistent features.
- Put valid taxonomy metadata in an HTML comment and repeat it in your manifest.

## Files to deliver in your assigned folder

- `sports.html`, `myth.html`, `wildcard.html`
- Optional local `style.css` and editable vector assets
- `sports.png`, `myth.png`, `wildcard.png`, created using the common renderer
- `manifest.json` with this schema (exact three ordered categories):

```json
{
  "concepts": [
    {
      "id": "sports",
      "category": "sports",
      "title": "Your original headline",
      "rationale": "One or two sentences on the creative idea.",
      "caption": "Ready-to-use social caption.",
      "alt": "Complete meaningful description of the rendered card.",
      "sources": [{"path": "how-to-play/sports-betting.md", "section": "Exact heading", "note": "What supports your claim, including arithmetic/assumptions."}],
      "tags": {"content_type": "quick-reference", "pillar": ["open"], "tier": 1, "tone": "confident-informative", "audience": ["general"], "channel": ["social-media"], "reading_level": "grade-6-8"}
    }
  ],
  "notes": "Any substantive limitation or necessary qualification."
}
```

Use the same fields for `myth` and `wildcard`, with appropriate valid taxonomy values.

## Verify and finish

The common renderer is `node collateral/render/model-comparison/render.mjs YOUR_FOLDER_NAME`. It may require elevated permission to launch local Chromium. Render all three, inspect each PNG using `view_image`, and fix your own content/layout issues. The renderer checks geometry, text size, token resolution, and metadata; do not rely on it alone to detect visual problems.

When done, report your three concept titles, output paths, source/claim checks, render verification, and any limitation. Do not commit, change branches, push, open a PR, or spawn additional agents. The coordinator handles integration. Leave creative attribution out of the player-facing artwork; the comparison gallery supplies the model labels.
