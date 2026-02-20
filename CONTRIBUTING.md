# Contributing to Compass

Compass is CC0-licensed. Contributions are welcome from anyone — operators, regulators, designers, writers, or players.

## What we're looking for

- **Jurisdiction modules** — new jurisdictions or updates to existing ones
- **Messaging content** — taglines, CTAs, myth-busting content, quiz concepts
- **Translations** — adapting content for non-English markets
- **Visual identity** — icon SVGs, design templates, placeholder assets
- **Collateral templates** — new touchpoint templates or improvements
- **Interactive content concepts** — quiz frameworks, calculator specs, gamification ideas
- **Corrections** — factual errors, outdated regulatory info, broken links

## Content standards

Every contribution should align with the Compass brand:

1. **Reno Model framing.** Gambling is entertainment. Most players are fine. Compass helps them stay informed. Don't frame content around harm prevention or crisis intervention — that's Tier 2, and it has its own voice.

2. **Marketing-quality writing.** Would an operator's CMO put this next to their brand? If it reads like a government pamphlet, a clinical report, or a compliance checkbox, rewrite it.

3. **Confident wit.** Compass has personality. Educational content should be engaging, not dry. Humor is welcome in myth-busting and general awareness content. It's not appropriate for Tier 2 (crisis/support) contexts.

4. **Tier 1 language.** Avoid the terms listed in `_brand.yml > tone > avoid_in_tier_1`. Use the preferred alternatives. See [brand-book/04-voice-and-tone.md](brand-book/04-voice-and-tone.md) for the full guide.

5. **Jurisdiction accuracy.** Regulatory content must cite specific legislation, codes, or official guidance. Include a `last_updated` date. Flag anything you're uncertain about.

## How to contribute

### Small changes (typos, corrections, link fixes)

1. Fork the repository
2. Make your changes
3. Submit a pull request with a clear description

### New content or jurisdiction modules

1. Fork the repository
2. Create a branch: `feature/your-description`
3. Follow existing file structure and naming conventions
4. For jurisdiction modules, use `jurisdictions/_template/`
5. Submit a pull request with:
   - What you're adding or changing
   - Sources/citations for regulatory content
   - Which brand pillar(s) the content aligns with (Sharp, Choice, Open, Social)

### Reporting issues

Open a GitHub issue for:
- Outdated regulatory information
- Factual errors
- Missing jurisdictions or touchpoints
- Content ideas

## Quick style reference

| Do | Don't |
|---|---|
| Write for marketing teams | Write for clinicians |
| Use "player" | Use "gambler" |
| Use "smart play" | Use "responsible gambling" in Tier 1 |
| Use "tools" or "features" | Use "interventions" |
| Be conversational | Be formal or academic |
| Use humor where appropriate | Be preachy or condescending |
| Cite regulatory sources | Make unsourced legal claims |

## File formatting

- Prose content in Markdown (`.md`)
- Configuration in YAML (`.yml`)
- Use existing files as templates — consistency matters
- Keep lines under 100 characters where practical

## Review process

1. **Content review**: Accurate, well-sourced, consistent with Compass voice?
2. **Structure review**: Follows existing file patterns and naming conventions?
3. **Brand alignment**: Reno Model framing? Tier 1 language? Engaging tone?
4. **Legal review** (jurisdiction modules): Regulatory info verified against primary sources?

## Code of conduct

Be respectful. This project exists to help players and operators. Contributions should treat players as smart adults making their own choices. We're building content people actually want to engage with — that standard applies to how we work together too.

## Questions?

Open an issue on GitHub or email the maintainers at the address in [`_brand.yml`](_brand.yml).
