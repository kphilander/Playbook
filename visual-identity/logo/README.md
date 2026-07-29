# Logo

The Playbook logo system: a **symbol mark** ("open book + play"), a **weight-contrast wordmark**, and lockups, favicons, and badges built from them. All assets are generated from [`_brand.yml`](../../_brand.yml) by running `node collateral/render/build-logos.mjs`.

**No font dependencies.** Wordmark text is converted to Inter vector outlines at build time (via fontkit and the vendored variable font in [`../typography/fonts/`](../typography/fonts/)), so every SVG renders identically in `<img>` embeds, GitHub READMEs, CMSes, and email clients — contexts that block external font loading.

Open [`symbol-preview.html`](symbol-preview.html) in a browser to see the full system.

## The marks

- **Symbol** — a closed book beside a play triangle, carried in a rounded navy tile (white book, teal play) — the same mark used across Playbook Academy. On dark or single-color contexts the bare mark is used without the tile. Two flat shapes, legible from 16px favicons to 512px app icons.
- **Wordmark** — the program name set in **Inter 700 (bold)**, tight tracking, one weight, one color: navy on light, white on dark. Forks set their own name (and can opt into a split-weight treatment or a play-counter P) under `logo:` in `_brand.yml`.

## Variants

### [Primary](primary/) — Two-tone, default use

| File | Layout | Background |
|------|--------|------------|
| [logo-horizontal-full-color.svg](primary/logo-horizontal-full-color.svg) | Horizontal wordmark | White / light |
| [logo-horizontal-on-light.svg](primary/logo-horizontal-on-light.svg) | Horizontal wordmark | Light neutrals |
| [logo-stacked-full-color.svg](primary/logo-stacked-full-color.svg) | Symbol above wordmark | White / light |
| [logo-stacked-on-light.svg](primary/logo-stacked-on-light.svg) | Symbol above wordmark | Light neutrals |

### [Secondary](secondary/) — Reversed and monochrome

| File | Layout | Use |
|------|--------|-----|
| [logo-horizontal-reversed.svg](secondary/logo-horizontal-reversed.svg) | Horizontal | Dark backgrounds |
| [logo-horizontal-mono-white.svg](secondary/logo-horizontal-mono-white.svg) | Horizontal | Single-color (white on black) |
| [logo-horizontal-mono-dark.svg](secondary/logo-horizontal-mono-dark.svg) | Horizontal | Single-color (navy) |
| [logo-stacked-reversed.svg](secondary/logo-stacked-reversed.svg) | Stacked | Dark backgrounds |
| [logo-stacked-mono-white.svg](secondary/logo-stacked-mono-white.svg) | Stacked | Single-color (white on black) |
| [logo-stacked-mono-dark.svg](secondary/logo-stacked-mono-dark.svg) | Stacked | Single-color (navy) |

### [Symbol Mark](symbol/) — Text-free brand icon

| File | Use |
|------|-----|
| [symbol-mark.svg](symbol/symbol-mark.svg) | Primary — navy tile, white book, teal play |
| [symbol-mark-on-light.svg](symbol/symbol-mark-on-light.svg) | Light backgrounds — bare mark, navy book, teal play |
| [symbol-mark-on-dark.svg](symbol/symbol-mark-on-dark.svg) | Dark backgrounds — bare mark, white book, teal play |
| [symbol-mark-mono-dark.svg](symbol/symbol-mark-mono-dark.svg) | Monochrome navy, bare mark |
| [symbol-mark-mono-white.svg](symbol/symbol-mark-mono-white.svg) | Monochrome white on black tile |

### [Favicon](favicon/) — Browser tabs, app icons, PWA

The favicon is the brand tile — identical to the Playbook Academy favicon.

| File | Use |
|------|-----|
| [favicon.svg](favicon/favicon.svg) | Modern browsers — the brand tile |
| [favicon.ico](favicon/favicon.ico) | Legacy fallback (16 + 32 + 48 packed) |
| [favicon-16.png](favicon/favicon-16.png), [favicon-32.png](favicon/favicon-32.png), [favicon-48.png](favicon/favicon-48.png) | Fixed-size PNG fallbacks |
| [apple-touch-icon.png](favicon/apple-touch-icon.png) | iOS home screen, 180×180 full-bleed navy (iOS applies its own mask) |
| [icon-192.png](favicon/icon-192.png), [icon-512.png](favicon/icon-512.png) | PWA manifest icons, full-bleed square |
| [favicon-reversed.svg](favicon/favicon-reversed.svg) | Bare mark (white book, teal play, transparent) for dark UI chrome |
| [favicon-mono-white.svg](favicon/favicon-mono-white.svg) | Single-color white mark on black tile |

Recommended head markup:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<!-- legacy -->
<link rel="shortcut icon" href="/favicon.ico">
```

### [Helpline Badge](helpline-badge/) — Logo + helpline number

| File | Use |
|------|-----|
| [helpline-badge-light.svg](helpline-badge/helpline-badge-light.svg) | Light backgrounds |
| [helpline-badge-dark.svg](helpline-badge/helpline-badge-dark.svg) | Dark backgrounds |

The badge width adapts to the helpline number configured in `_brand.yml`.

## White-label notes

- Change `logo.wordmark_bold_text` / `logo.wordmark_light_text` in `_brand.yml` to re-split your own program name (set the light text to `""` to render the whole name at the bold weight), then rebuild.
- Colors resolve from the `color:` palette — re-theme by editing `_brand.yml` and rebuilding.
- The build syncs copies into `hub/brand-book/assets/logos/` and `slide-deck/public/assets/logos/`.
- Logo usage rules are in [Brand Book — Visual Identity](../../brand-book/03-visual-identity.md).
