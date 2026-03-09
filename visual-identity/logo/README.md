# Logo

20 SVG logo variants organized by use case. All logos are generated from [`_brand.yml`](../../_brand.yml) by running `node collateral/render/build-logos.mjs`.

## Variants

### [Primary](primary/) — Full-color, default use

| File | Layout | Background |
|------|--------|------------|
| [logo-stacked-full-color.svg](primary/logo-stacked-full-color.svg) | Stacked | Transparent |
| [logo-stacked-on-light.svg](primary/logo-stacked-on-light.svg) | Stacked | Light backgrounds |
| [logo-horizontal-full-color.svg](primary/logo-horizontal-full-color.svg) | Horizontal | Transparent |
| [logo-horizontal-on-light.svg](primary/logo-horizontal-on-light.svg) | Horizontal | Light backgrounds |

### [Secondary](secondary/) — Reversed and monochrome

| File | Layout | Use |
|------|--------|-----|
| [logo-stacked-reversed.svg](secondary/logo-stacked-reversed.svg) | Stacked | Dark backgrounds |
| [logo-stacked-mono-white.svg](secondary/logo-stacked-mono-white.svg) | Stacked | Single-color (white on black) |
| [logo-stacked-mono-dark.svg](secondary/logo-stacked-mono-dark.svg) | Stacked | Single-color (dark) |
| [logo-horizontal-reversed.svg](secondary/logo-horizontal-reversed.svg) | Horizontal | Dark backgrounds |
| [logo-horizontal-mono-white.svg](secondary/logo-horizontal-mono-white.svg) | Horizontal | Single-color (white on black) |
| [logo-horizontal-mono-dark.svg](secondary/logo-horizontal-mono-dark.svg) | Horizontal | Single-color (dark) |

### [Favicon](favicon/) — App icons and browser tabs

| File | Use |
|------|-----|
| [favicon.svg](favicon/favicon.svg) | Default favicon |
| [favicon-reversed.svg](favicon/favicon-reversed.svg) | Dark background favicon |
| [favicon-mono-white.svg](favicon/favicon-mono-white.svg) | Single-color favicon |

### [Helpline Badge](helpline-badge/) — Logo + helpline number

| File | Use |
|------|-----|
| [helpline-badge-light.svg](helpline-badge/helpline-badge-light.svg) | Light backgrounds |
| [helpline-badge-dark.svg](helpline-badge/helpline-badge-dark.svg) | Dark backgrounds |

### [Symbol Mark](symbol/) — Text-free brand icon

An open book with a play triangle — the "Playbook" concept as pure geometry. No font dependencies. Works at any size from 16px favicons to 512px app icons.

| File | Use |
|------|-----|
| [symbol-mark.svg](symbol/symbol-mark.svg) | Primary — navy container, white book, teal play triangle |
| [symbol-mark-on-light.svg](symbol/symbol-mark-on-light.svg) | Light backgrounds — navy book, teal play, no container |
| [symbol-mark-on-dark.svg](symbol/symbol-mark-on-dark.svg) | Dark backgrounds — white book, teal play, no container |
| [symbol-mark-mono-dark.svg](symbol/symbol-mark-mono-dark.svg) | Monochrome dark — all navy, no container |
| [symbol-mark-mono-white.svg](symbol/symbol-mark-mono-white.svg) | Monochrome white — white on black container |

## Notes

- Wordmark SVGs use Inter via Google Fonts `@import`. For production distribution, convert text to outlines in your design tool.
- Symbol marks are pure geometry — no font dependencies.
- Logo usage rules are in [Brand Book — Visual Identity](../../brand-book/03-visual-identity.md).
