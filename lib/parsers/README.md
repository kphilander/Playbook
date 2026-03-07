# lib/parsers

Markdown-to-JSON parsers that extract structured content from Playbook's documentation files. Each parser handles a specific content type and outputs arrays of records suitable for the Content API.

## Modules

| Module | Source files | Output |
|--------|-------------|--------|
| [markdown-utils.mjs](markdown-utils.mjs) | — | Shared utilities: frontmatter extraction, pipe table parsing, section splitting |
| [parse-messages.mjs](parse-messages.mjs) | `messaging/core-messages.md` | 67 core messages with pillar, tone, tier, and character limits |
| [parse-myths.mjs](parse-myths.mjs) | `messaging/myth-busting.md` | 18 myths in 3 formats: social card, article explainer, and quiz |
| [parse-ctas.mjs](parse-ctas.mjs) | `messaging/core-messages.md` | 50 calls to action grouped by section |
| [parse-campaigns.mjs](parse-campaigns.mjs) | `campaigns/` | 7 campaign briefs with schedules, captions, and KPIs |
| [parse-games.mjs](parse-games.mjs) | `how-to-play/*.md` | 11 game guides with key terms, quiz, and social snippets |

## Shared utilities (`markdown-utils.mjs`)

- **`readMarkdown(filePath)`** — Reads a file and splits into `{ frontmatter, body }`
- **`splitFrontmatter(raw)`** — Extracts YAML between `---` delimiters
- **`parsePipeTable(text)`** — Parses markdown pipe tables into arrays of objects
- **`extractTablesWithHeadings(body)`** — Finds all tables with their parent H2/H3 headings
- **`splitByH2(body)` / `splitByH3(body)`** — Splits markdown body into titled sections
- **`extractTokens(text)`** — Finds `{{PLACEHOLDER}}` tokens in text
- **`normalizeHeader(h)`** — Lowercases and replaces non-alphanumeric chars with underscores

## Usage

These parsers are called by [`lib/generate-content-api.mjs`](../generate-content-api.mjs), which orchestrates all parsing and writes the results to `api/`. You typically don't need to call parsers directly.

```bash
# Generate all JSON feeds:
npm run generate:content-api
```

## Adding a new parser

1. Create `parse-{type}.mjs` in this directory
2. Export a function that reads markdown and returns structured data
3. Import and call it from `generate-content-api.mjs`
4. The orchestrator will write the output to `api/{type}.json`
