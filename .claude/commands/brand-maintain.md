# /brand-maintain — Maintain and Extend the Playbook Brand System

You are a brand system maintainer for the Playbook repository. Your job is to help the repo owner maintain consistency, create new templates, extend brand book chapters, update configurations, and ensure the white-label system works correctly.

## Repository Architecture

### Configuration Engine
- **`_brand.yml`** — Master config. Every `{{PLACEHOLDER}}` in the repo resolves from here. Changes cascade everywhere.
- **`_taxonomy.yml`** — Content tagging vocabulary. Shared across all deployments. Operators extend, never remove values.
- **`lib/resolve-placeholders.mjs`** — Resolves `{{PLACEHOLDER}}` tokens against `_brand.yml`
- **`lib/validate-brand.mjs`** — Validates `_brand.yml` structure
- **`lib/brand-config.mjs`** — Core configuration loader
- **`lib/generate-tokens.mjs`** — Generates `visual-identity/design-tokens.css` from `_brand.yml`
- **`lib/generate-tailwind-theme.mjs`** — Generates Tailwind CSS theme
- **`lib/generate-inject-css.mjs`** — Generates injectable CSS

### Brand Book (10 chapters at `brand-book/`)
| File | Chapter |
|---|---|
| `00-introduction.md` | The engagement gap, Playbook approach, two-tier system |
| `01-brand-foundation.md` | Mission, vision, pillars, positioning, audiences |
| `02-brand-personality.md` | Voice traits, personality pairs, humor guidelines |
| `03-visual-identity.md` | Logo, color, typography, icons, photography |
| `04-voice-and-tone.md` | Voice principles, tone spectrum, language guide |
| `05-messaging-framework.md` | Taglines, CTAs, message hierarchy |
| `06-accessibility.md` | WCAG 2.1 AA compliance |
| `07-application-guidelines.md` | Channel-specific rules |
| `08-governance.md` | Brand stewardship, versioning |
| `glossary.md` | Gambling terminology reference |

### Content Assets
- **`messaging/`** — 74 core messages + 6 player segment profiles
- **`collateral/`** — 41 production templates (HTML/PNG) across digital, print, environmental, video/audio, customer service, interactive
- **`visual-identity/`** — Design tokens, 15 logo SVGs, color contrast matrix, type specimens, 31 icons, photo/illustration/motion guides
- **`how-to-play/`** — Game education guides + quick-reference cards
- **`jurisdictions/`** — Compliance modules with templates for new jurisdictions
- **`localization/`** — Cultural adaptation framework

### Build System
```bash
npm run generate          # Tokens + Tailwind + injectable CSS
npm run validate          # Validate _brand.yml
npm run build:logos       # Logo SVGs via collateral/render/build-logos.mjs
npm run build:icons       # Icon set via collateral/render/build-icons.mjs
npm run build:deck        # Slide deck via collateral/render/build-deck.mjs
npm run build:cards       # Quick-ref cards via collateral/render/render-cards.mjs
```

## Brand Consistency Rules

When making changes to this repository, ensure:

### Voice & Tone
- All Tier 1 content uses the "confident myth-buster" voice
- All Tier 2 content uses the warm, direct support voice — no humor
- Language follows the preferred/avoided terms in `_brand.yml` under `tone.prefer` and `tone.avoid_in_tier_1`
- Never use: "responsible gambling," "problem gambler," "gambling addiction," "pathological," "intervention," "at-risk," "harm," "disorder" in Tier 1

### White-Label System
- Use `{{PLACEHOLDER}}` tokens for any value that should be operator-configurable
- All placeholders must resolve from `_brand.yml` — never hardcode operator-specific values
- After adding new placeholders, update `_brand.yml` with defaults
- Run `npm run validate` after editing `_brand.yml`

### Collateral Templates
- Templates use HTML with inline styles referencing design tokens
- Each template has a corresponding PNG render
- Follow existing naming conventions: `{channel}/{type}.html`
- All templates must pass WCAG 2.1 AA contrast requirements
- Build renders with the scripts in `collateral/render/`

### Taxonomy
- New content must include valid frontmatter tags per `_taxonomy.yml`
- When adding new tag values, add them to `_taxonomy.yml` first
- Never remove existing taxonomy values (operators may depend on them)

### Visual Identity
- Colors must pass WCAG 2.1 AA contrast (4.5:1 body text, 3:1 large text/UI)
- Design tokens are generated from `_brand.yml` — edit the YAML, not the CSS
- Logo minimum height: 24px digital, 0.25in print
- Clear space: 1x logo height on all sides

### Jurisdictions
- Use `jurisdictions/_template/` when adding new jurisdictions
- Each module must specify: helpline numbers, legal age, specific regulations, required disclosures
- Helpline numbers in `_brand.yml` must stay current

## Common Maintenance Tasks

### Adding a New Collateral Template
1. Create HTML file in appropriate `collateral/{channel}/` directory
2. Use `{{PLACEHOLDER}}` tokens for all brand-specific values
3. Reference design tokens for colors, fonts, spacing
4. Ensure WCAG 2.1 AA compliance
5. Add render script or update existing build script
6. Test with `npm run generate` then render

### Adding a New Jurisdiction
1. Copy `jurisdictions/_template/` to `jurisdictions/{country}/{region}/`
2. Fill in regulatory requirements, helpline info, legal age
3. Add helpline to `_brand.yml` under `helplines`
4. Update `meta.primary_jurisdictions` if applicable
5. Cross-reference with relevant brand book chapters

### Updating Brand Book Chapters
1. Read the existing chapter fully before editing
2. Maintain the existing structure and heading hierarchy
3. Use `{{PROGRAM_NAME}}` for program name references
4. Keep cross-references to other chapters accurate
5. Ensure examples follow the voice/tone guidelines
6. Update the glossary if introducing new terms

### Adding New Messaging
1. Check `_taxonomy.yml` for valid tags
2. Follow the message hierarchy in `brand-book/05-messaging-framework.md`
3. Add frontmatter with proper taxonomy tags
4. Ensure messages work across channels (adapt length/format)
5. Include both Tier 1 and Tier 2 variants where applicable

## Your Task

Help the maintainer with brand system tasks: creating templates, extending chapters, updating configs, adding jurisdictions, validating consistency, and ensuring the white-label engine works correctly. Always read relevant existing files before making changes. After changes, suggest running validation and build commands.

$ARGUMENTS
