# Playbook — shared photography concept round

Create exactly three original English Tier 1 social concepts: `sports` (sports betting education), `myth` (a gambling myth), and `wildcard` (another entertainment-literacy topic, distinct from your first two). Choose your own specific topics, hooks, copy, and photographic art direction. Do not repeat template headlines. This compares concept writing and photo direction in a common layout; it does not compare bespoke CSS design.

Work independently in a fresh context. Do not inspect other participants, previous comparison results, or previous submissions. Do not communicate with other agents. Read every required file below before writing. Paths are relative to `/Users/ksr/Playbook`.

## Required shared brand packet

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
- `visual-identity/photography/photography.md` (read the text; do not open its images)

## Required shared templates

- `collateral/render/card-15a-point-spread.html`
- `collateral/render/card-13a-its-due.html`
- `collateral/render/card-20b-pick-your-pause.html`
- `collateral/render/concept-20.css`
- `collateral/render/layout-system.css`
- `collateral/render/model-comparison/fonts.css`
- `collateral/render/model-comparison/photo-round-02/template.mjs`
- `collateral/render/model-comparison/photo-round-02/template.css`
- `collateral/render/model-comparison/photo-round-02/photography-settings.json`

The existing cards establish the brand; the new shared template applies it identically to every submission. It is a 1080 × 1350 navy card: program wordmark and category; headline; a portrait photograph on the left and body copy on the right; a green takeaway; a protected support/age footer. Image size is 465 × 620 pixels, using a centered 3:4 crop. Text never overlays the photo. The template inserts program, helpline, and age placeholders automatically. Do not author HTML or CSS or change the template.

## Copy requirements

- Tier 1: knowledgeable, confident, concise, witty where useful, respectful. Align with Open or Social. No shame, clinical labels, win promises, or directions to increase gambling.
- `title`: at most 42 characters, including spaces. Plain text, no line breaks or markup.
- `body`: at most 190 characters, including spaces. Plain text. Explain one useful fact. Keep necessary assumptions in this visible copy; a caption cannot repair a misleading card.
- `takeaway`: at most 76 characters, including spaces. A concrete insight or useful action, not a pretend operating control.
- Use supported claims from this packet and simple arithmetic. If you cannot establish a claim from these sources, choose another. No external research.
- `caption`: a ready-to-use social caption; `rationale`: explain the idea; `alt`: describe the intended card including its copy and photo. Alt text is an authored intention until the actual photo is checked separately.
- Supply sources with exact file headings and notes explaining the relevant claim and numerical assumptions.
- Supply valid taxonomy values for content_type, pillar, tier, tone, audience, channel, reading_level.

## Photography requirements

Write one original `photoPrompt` per concept. This is your complete prompt, sent verbatim to the same Google `gemini-3-pro-image` generator for every participant. One attempt per concept; 3:4, 2K, no reference images, no editing, no search, no regeneration or best-of selection. The coordinator performs API calls after submission. Do not call photography APIs or image tools yourself.

Use candid editorial photography that gives the message meaningful human context. Show clearly adult people aged 25 or older, warm cinematic light, natural skin, and social connection. No minors, alcohol with gambling, cash stacks, solitary distressed players, brands, watermarks, readable screen content, or text in the photograph. Avoid decorative gambling equipment. Compose for the portrait frame with breathing room around faces and hands; all typography is added separately. Include `photoAlt` describing the intended scene and `photoRationale` explaining why it supports this particular concept. Do not rely on generated imagery to establish numerical or factual claims.

## Deliverable and equal feedback rule

Write ONLY `manifest.json` in your assigned output folder. It must contain exactly three concepts ordered sports, myth, wildcard:

```json
{
  "concepts": [
    {
      "id": "sports",
      "category": "sports",
      "title": "Your original hook",
      "body": "Your visible explanation.",
      "takeaway": "Your visible takeaway.",
      "rationale": "Why this idea works.",
      "caption": "Ready-to-use social copy.",
      "alt": "Intended complete card description.",
      "photoPrompt": "Your complete original photography prompt.",
      "photoAlt": "Intended photo description.",
      "photoRationale": "How the scene supports the concept.",
      "sources": [{"path": "how-to-play/sports-betting.md", "section": "Exact heading", "note": "Claim support and assumptions."}],
      "tags": {"content_type": "quick-reference", "pillar": ["open"], "tier": 1, "tone": "confident-informative", "audience": ["general"], "channel": ["social-media"], "reading_level": "grade-6-8"}
    }
  ],
  "referencesRead": ["Every required path you actually read"],
  "notes": "Any substantive limitation."
}
```

Use the same fields for myth and wildcard. You may use local text tools to check your JSON, character lengths, taxonomy, source headings, and arithmetic and revise before completing. Do not render, use a browser, inspect images, request feedback, or call other models. All participants receive zero image previews and zero coordinator creative feedback before their first completed submission. The coordinator freezes that submission, generates its three photos, and renders with the common template. Failures are preserved and reported, not quietly repaired. There is no enforced equal token or wall-clock budget; the same high reasoning level is requested for all.

Do not edit outside your assigned folder. Do not commit, change branches, push, open PRs, or spawn agents. Finish by reporting your three titles, manifest path, checks, and any limitation. The first completion is final for this round.
