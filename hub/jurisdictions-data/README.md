# Jurisdiction data

Each file here holds **all** the Coverage Map data for **one** jurisdiction. `hub/compliance.html` loads these via `<script>` and assembles them at runtime, so adding or editing a jurisdiction is a one-file change — no edits to the shared `SOURCES` / `THEMES` / `JURISDICTIONS` / `VERTICAL_LIMITATIONS` / `LAND_BASED_ONLY` structures inside `compliance.html`.

## What a file contains

```js
(window.PB_JURISDICTIONS = window.PB_JURISDICTIONS || []).push({
  reg, region, card, landBasedOnly, verticalLimitation, jurisdiction, sources, citations
});
```

- `reg` — short lowercase id (matches the `data-reg` on the regulator card).
- `region` — region group: `United States`, `Canada`, `Asia-Pacific`, `Europe`, `Latin America`, `Africa`.
- `card` — regulator card text (`name` / `juris` / `desc`). Cards are also inline in `compliance.html`; this field documents them and supports future card generation.
- `jurisdiction` — detail-panel entry (`name`, `jurisdiction`, `legislation`, `unique`, `verticals`, `source`).
- `verticalLimitation` — `{ blocked: [...], note }` when some verticals are not legal; omit/null otherwise.
- `landBasedOnly` — `true` for land-based-only jurisdictions.
- `sources` — `{ 'reg-key': 'https://...' }` map of primary-source URLs.
- `citations` — `{ "<themeId>": { ref, src, verticals, text, label } }` for each theme the jurisdiction has a requirement in. A theme may map to an array of citations. Every `src` must be a key in this file's own `sources`.

The 10 theme ids: 1 Game Information & Odds Disclosure · 2 Responsible Gambling Messaging · 3 Helpline & Crisis Support · 4 Self-Exclusion · 5 Limit-Setting & Player Controls · 6 Advertising Compliance · 7 Age Restriction · 8 Venue & Environmental Signage · 9 Staff Training · 10 Activity Statements & Transparency.

## Adding a jurisdiction

1. Add `<reg>.js` here (copy an existing one — `az.js` is a compact example).
2. Add `<script src="jurisdictions-data/<reg>.js"></script>` to the include list in `hub/compliance.html` (alongside the others).
3. Add the `<div class="reg-card" data-reg="<reg>">…</div>` to the right region grid in `compliance.html`, and bump that region's count.
4. Validate: `node hub/jurisdictions-data/_check.cjs`.

The loader in `compliance.html` fills `SOURCES`, `JURISDICTIONS`, `VERTICAL_LIMITATIONS`, `LAND_BASED_ONLY`, and each theme's `regs` + `citations` from these files — no edits to those structures.
