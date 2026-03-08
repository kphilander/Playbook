# widgets/src

Source files for Playbook Web Components. Each file defines a single custom element using the Web Components API with Shadow DOM for style isolation.

## Files

| File | Custom element | Description |
|------|---------------|-------------|
| [playbook-helpline.js](playbook-helpline.js) | `<playbook-helpline>` | Helpline banner/badge — self-contained, no API fetch needed |
| [playbook-myth.js](playbook-myth.js) | `<playbook-myth>` | Myth-buster card — fetches from `myths.json` API, cycles randomly |
| [playbook-odds.js](playbook-odds.js) | `<playbook-odds>` | Game odds reference — embedded data for 9 games, no fetch needed |

## Architecture

Each component follows the same pattern:

1. **Class extends `HTMLElement`** with `connectedCallback()` / `disconnectedCallback()`
2. **Shadow DOM** (`this.attachShadow({ mode: 'open' })`) for complete style isolation
3. **Scoped `<style>`** block inside the shadow root — styles can't leak in or out
4. **Attribute-driven** configuration via `observedAttributes` and `attributeChangedCallback`
5. **ARIA roles** and keyboard handling for accessibility

## Data strategy

- **Helpline** and **Odds** embed their data directly (no network requests)
- **Myth** fetches from a JSON API endpoint (configurable via `api-url` attribute)

## Editing

After editing source files, rebuild the bundle:

```bash
npm run build:widgets
```

This runs `widgets/build.mjs`, which concatenates all source files into `dist/playbook-widgets.js` and copies individual files to `dist/`.
