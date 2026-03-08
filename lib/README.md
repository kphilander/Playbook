# lib

Node.js build scripts that power the Playbook white-label system. All scripts read from [`_brand.yml`](../_brand.yml) and generate outputs automatically.

## Scripts

| Script | What it does | Output |
|--------|-------------|--------|
| [brand-config.mjs](brand-config.mjs) | Loads and parses `_brand.yml`, provides helper methods for colors, fonts, helplines, and brand tokens | Shared module (no file output) |
| [generate-tokens.mjs](generate-tokens.mjs) | Generates CSS custom properties from the brand config | `visual-identity/design-tokens.css` |
| [generate-tailwind-theme.mjs](generate-tailwind-theme.mjs) | Generates a Tailwind CSS v4 `@theme` block for the slide deck | `slide-deck/src/generated/brand-theme.css` |
| [generate-inject-css.mjs](generate-inject-css.mjs) | Generates injectable CSS for HTML collateral templates | `collateral/render/brand-inject.css` |
| [resolve-placeholders.mjs](resolve-placeholders.mjs) | Resolves `{{PLACEHOLDER}}` brand tokens in strings at build time | Shared module (no file output) |
| [validate-brand.mjs](validate-brand.mjs) | Validates `_brand.yml` — checks required fields, hex colors, alias resolution, font definitions | Console output + exit code |
| [migrate-templates.mjs](migrate-templates.mjs) | One-time migration: replaces hardcoded hex/fonts in HTML templates with CSS variables and brand tokens | Modifies HTML files in `collateral/render/` |
| [generate-content-api.mjs](generate-content-api.mjs) | Orchestrates all content parsers and writes structured JSON feeds | `api/*.json` (messages, myths, CTAs, campaigns, game guides) |
| [generate-asset-manifest.mjs](generate-asset-manifest.mjs) | Scans asset directories and catalogs all logos, icons, collateral, and photography | `api/assets.json` |

### Content parsers ([`parsers/`](parsers/))

| Module | Source | Output |
|--------|--------|--------|
| [markdown-utils.mjs](parsers/markdown-utils.mjs) | — | Shared utilities: frontmatter, pipe tables, section splitting |
| [parse-messages.mjs](parsers/parse-messages.mjs) | `messaging/core-messages.md` | 67 messages with pillar, tone, tier |
| [parse-myths.mjs](parsers/parse-myths.mjs) | `messaging/myth-busting.md` | 18 myths (social card + explainer + quiz) |
| [parse-ctas.mjs](parsers/parse-ctas.mjs) | `messaging/core-messages.md` | 50 calls to action by section |
| [parse-campaigns.mjs](parsers/parse-campaigns.mjs) | `campaigns/` | 7 campaign briefs with schedules |
| [parse-games.mjs](parsers/parse-games.mjs) | `how-to-play/*.md` | 11 game guides with key terms and quizzes |

## Usage

```bash
# From the repository root:
npm install                          # Install js-yaml dependency
npm run generate                     # Run all three generators
npm run validate                     # Check _brand.yml for errors

# Individual scripts:
node lib/generate-tokens.mjs         # CSS custom properties
node lib/generate-tailwind-theme.mjs # Tailwind theme
node lib/generate-inject-css.mjs     # Collateral CSS
node lib/validate-brand.mjs          # Validate config

# Content portability:
npm run generate:content-api         # Parse markdown → api/*.json
npm run generate:assets              # Scan assets → api/assets.json
npm run build:widgets                # Bundle Web Components → widgets/dist/
```

## How it works

All scripts import `brand-config.mjs`, which loads `_brand.yml` and exposes a structured API: color palettes, semantic references, font families, helpline numbers, and `{{PLACEHOLDER}}` token mappings. When you edit `_brand.yml` and re-run `npm run generate`, the entire visual system updates.

The content parsers (`parsers/`) handle the reverse direction: reading Playbook's markdown documentation and extracting structured data into JSON feeds for operator integrations.
