# Iconography

31 custom SVG icons using a dual stroke-weight system that echoes the logo's typographic contrast (Play 800 / BOOK 300): primary strokes at 2px for structure, detail strokes at 1px for accents.

## Documents and Assets

| File | Description |
|------|-------------|
| [icon-library.md](icon-library.md) | Complete icon reference — all 31 icons with names, descriptions, usage guidance, and category breakdown |
| [icon-preview.html](icon-preview.html) | Interactive preview page showing every icon at 16px, 24px, 32px, and 48px on light and dark backgrounds |
| [icon-preview.png](icon-preview.png) | Static screenshot of the icon preview |
| [icons/](icons/) | Individual SVG files — 31 icons across 7 categories |

## Categories

| Category | Icons | Examples |
|----------|-------|----------|
| Game Types | 7 | cards, dice, roulette, slots, sports, lottery, table |
| Odds & Math | 4 | percentage, edge, rng, equal |
| Player Tools | 7 | timer, limit, budget, bell, history, check, activity |
| Content & Education | 4 | quiz, myth, fact, info |
| Social & Sharing | 4 | share, challenge, score, qr |
| Support & Safety | 5 | phone, warning, help, external, playbook |

## Regenerating icons

```bash
node collateral/render/build-icons.mjs
```

This reads brand colors from [`_brand.yml`](../../_brand.yml) and regenerates all SVGs and the preview page.
