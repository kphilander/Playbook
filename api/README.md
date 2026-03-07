# api

Static JSON content feeds generated from Playbook's markdown source files. No server required — host these on any CDN or static file server.

## Endpoints

| File | Records | Description |
|------|---------|-------------|
| [index.json](index.json) | — | Master catalog with endpoint listing and brand metadata |
| [messages.json](messages.json) | 67 | Core messages across all pillars (Open, Social, Smart, Aware, Help) |
| [myths.json](myths.json) | 18 | Myth-busters in 3 formats: social card, article explainer, quiz |
| [ctas.json](ctas.json) | 50 | Calls to action grouped by section |
| [campaigns.json](campaigns.json) | 7 | Campaign briefs with schedules, captions, email copy, and KPIs |
| [assets.json](assets.json) | 96 | Asset manifest (logos, icons, collateral, photography) with URLs and metadata |
| [games/](games/) | 11 | Individual game guides (slots, blackjack, roulette, etc.) |

## Generating

```bash
# From the repository root:
npm run generate:content-api   # Parses markdown → writes api/*.json
npm run generate:assets        # Scans asset dirs → writes api/assets.json
```

Both scripts are also included in `npm run build`.

## Token placeholders

Messages and CTAs may contain `{{PLACEHOLDER}}` tokens (e.g. `{{PROGRAM_NAME}}`, `{{HELPLINE_NUMBER}}`). These map to values in `_brand.yml`. The [Brand Configurator](https://gpconsulting.com/tools/playbook/configurator/) resolves tokens automatically when generating a Content Kit ZIP.

To resolve tokens programmatically, replace each `{{TOKEN}}` with the corresponding value from your `_brand.yml` config.

## Integration

```js
// Fetch messages and filter by pillar
const resp = await fetch('/api/messages.json');
const { messages } = await resp.json();
const openMessages = messages.filter(m => m.pillar === 'open');
```

## License

CC0-1.0 — public domain. Use freely, no attribution required.
