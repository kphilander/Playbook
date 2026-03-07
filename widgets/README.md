# widgets

Embeddable Web Components for the Playbook responsible gambling system. Drop a single `<script>` tag into any page — no framework or build tools required.

## Components

| Component | Tag | Description |
|-----------|-----|-------------|
| Helpline | `<playbook-helpline>` | Helpline banner or badge with phone, text, and chat links |
| Myth Card | `<playbook-myth>` | Random myth-buster card with "Next myth" cycling |
| Age Gate | `<playbook-age-gate>` | Age verification modal with localStorage persistence |
| Odds Card | `<playbook-odds>` | Game odds quick reference (house edge, RTP, key facts) |

## Quick start

```html
<!-- Load the bundle (24 KB) -->
<script src="https://gpconsulting.com/tools/playbook/widgets/playbook-widgets.js"></script>

<!-- Use any component -->
<playbook-helpline number="1-800-522-4700" mode="banner" theme="dark"></playbook-helpline>
<playbook-myth api-url="https://gpconsulting.com/tools/playbook/api/myths.json"></playbook-myth>
<playbook-odds game="blackjack" theme="dark"></playbook-odds>
```

## Attributes

### `<playbook-helpline>`
| Attribute | Default | Description |
|-----------|---------|-------------|
| `number` | `1-800-522-4700` | Helpline phone number |
| `text-number` | — | SMS text number |
| `chat-url` | — | Chat support URL |
| `label` | `Free 24/7 support` | Banner label text |
| `theme` | `dark` | `dark`, `light`, or `minimal` |
| `mode` | `banner` | `banner` (full-width) or `badge` (compact) |

### `<playbook-myth>`
| Attribute | Default | Description |
|-----------|---------|-------------|
| `api-url` | — | URL to `myths.json` feed |
| `category` | — | Filter by category (e.g. `slots`) |
| `myth-id` | — | Show a specific myth by index |
| `theme` | `dark` | `dark` or `light` |

### `<playbook-age-gate>`
| Attribute | Default | Description |
|-----------|---------|-------------|
| `min-age` | `21` | Minimum age requirement |
| `redirect` | — | URL to redirect if declined |
| `program-name` | `Playbook` | Program name in prompt text |
| `theme` | `dark` | `dark` or `light` |

### `<playbook-odds>`
| Attribute | Default | Description |
|-----------|---------|-------------|
| `game` | `slots` | Game to display (`slots`, `blackjack`, `roulette`, `sports-betting`, `baccarat`, `video-poker`, `craps`, `lottery`, `bingo`) |
| `theme` | `dark` | `dark` or `light` |

## Theming

Widgets use Shadow DOM for style isolation. Override brand colors with CSS custom properties on the host element or any ancestor:

```css
:root {
  --pb-color-primary: #1B2838;
  --pb-color-secondary: #00D4AA;
  --pb-color-accent: #FF6B35;
}
```

## Building

```bash
npm run build:widgets
```

This concatenates `src/*.js` into `dist/playbook-widgets.js` (IIFE bundle) and copies individual files to `dist/` for standalone use.

## Directory structure

```
widgets/
  build.mjs              # Bundle script
  src/                   # Source files (one per component)
    playbook-helpline.js
    playbook-myth.js
    playbook-age-gate.js
    playbook-odds.js
  dist/                  # Built output (committed for CDN hosting)
    playbook-widgets.js  # Combined bundle
    playbook-helpline.js # Individual components
    playbook-myth.js
    playbook-age-gate.js
    playbook-odds.js
```

## License

CC0-1.0 — public domain.
