# Typography

The Playbook type system — three font families, a modular scale, and self-hosted font files.

## Documents and Assets

| File | Description |
|------|-------------|
| [typography.md](typography.md) | Full typography reference — font families, weights, scale, line heights, and usage rules |
| [playbook-typography.css](playbook-typography.css) | Standalone CSS with `@font-face` declarations and typographic utility classes |
| [type-specimen.html](type-specimen.html) | Interactive type specimen page — preview all fonts at every weight and size |
| [type-specimen.png](type-specimen.png) | Static screenshot of the type specimen |

## Fonts

Self-hosted WOFF2 files in the [`fonts/`](fonts/) folder:

| Font | Role | Weights |
|------|------|---------|
| [Inter](fonts/inter-latin.woff2) | Headings | 400, 600, 700, 800 |
| [Source Sans 3](fonts/source-sans-3-latin.woff2) | Body text | 300, 400, 600 |
| [Source Code Pro](fonts/source-code-pro-latin.woff2) | Data, stats, helpline numbers | 400, 600 |

All fonts are open source (Google Fonts). Self-hosted files ensure consistent rendering without external dependencies.

## Related

- CSS custom properties for typography: [`design-tokens.css`](../design-tokens.css)
- Typography guidelines in context: [Brand Book — Visual Identity](../../brand-book/03-visual-identity.md)
