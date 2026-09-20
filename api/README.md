# api

Static JSON content feeds generated from Playbook's markdown source files. No server required — host these on any CDN or static file server.

## Source selection

These repository feeds are generated snapshots. Their recorded generation date is not a review or approval date. For preferred English collateral, use the [editorial edition](../collateral/editorial/README.md) and its manifest. For all collections, start with the [AI catalog](../ai/catalog.json).

In `assets.json`, `sourceUrl` is a repository-relative file path; `url` is a deployment path, not a GitHub retrieval URL. Counts, where recorded, live in the feed metadata. The public PlaybookRG website has separately revised content feeds; do not silently substitute or combine them with these files.

## Endpoints

| File | Description |
|------|-------------|
| [index.json](index.json) | Endpoint listing and snapshot brand metadata |
| [messages.json](messages.json) | Core messages with recorded source labels |
| [myths.json](myths.json) | Myth-busters: social card, article explainer, quiz |
| [ctas.json](ctas.json) | Calls to action grouped by section |
| [campaigns.json](campaigns.json) | Campaign briefs with schedules, captions, email copy, and KPIs |
| [assets.json](assets.json) | Asset manifest with repository paths, deployment URLs, and metadata |
| [games/README.md](games/README.md) | Individual game-guide feeds |

## Generating

```bash
# From the repository root:
npm run generate:content-api   # Parses markdown → writes api/*.json
npm run generate:assets        # Scans asset dirs → writes api/assets.json
```

Both scripts are also included in `npm run build`.

## Token placeholders

Messages and CTAs may contain `{{PLACEHOLDER}}` tokens (e.g. `{{PROGRAM_NAME}}`, `{{HELPLINE_NUMBER}}`). These map to values in `_brand.yml`. The optional [website configurator](https://www.playbookrg.com/brand/configurator/) is a separate website tool. Keep its selected sources and output edition explicit.

To resolve tokens programmatically, replace each `{{TOKEN}}` with the corresponding value from your `_brand.yml` config.

## Integration

```js
// Fetch messages and filter by pillar
const resp = await fetch('/api/messages.json');
const { messages } = await resp.json();
const openMessages = messages.filter(m => m.pillar === 'open');
```

## Regulatory note

Playbook content is designed to help operators meet common responsible gambling requirements — helpline display, odds transparency, informed-play messaging, and player education. However, **Playbook does not constitute legal or regulatory advice**. Gambling regulations vary significantly by jurisdiction, and requirements change frequently. Operators are solely responsible for ensuring their implementation complies with all applicable laws, licensing conditions, and regulatory guidance in every jurisdiction where they operate. When in doubt, consult your compliance team or legal counsel.

## License

Playbook-authored content is offered under [CC0-1.0](../LICENSE). Preserve applicable third-party notices, including bundled font licenses; an asset manifest does not override them.
