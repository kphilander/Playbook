# i18n Translation Infrastructure

This directory holds language variants of collateral templates and the translation strings that power them.

## Structure

```
_i18n/
  README.md              — this file
  strings.yml            — master translation map (source of truth for all translated strings)
  ja/                    — Japanese templates (lang="ja", Noto Sans JP)
  zh-CN/                 — Simplified Chinese templates (lang="zh-Hans", Noto Sans SC)
  ar/                    — Arabic templates (lang="ar" dir="rtl", Noto Sans Arabic)
```

## Font loading pattern

Each translated template loads its own Noto font via Google Fonts in the `<head>`:

- **Japanese**: `&family=Noto+Sans+JP:wght@300;400;600;700;800;900`
- **Simplified Chinese**: `&family=Noto+Sans+SC:wght@300;400;600;700;800;900`
- **Arabic**: `&family=Noto+Sans+Arabic:wght@300;400;600;700;800;900`

The CSS font-family cascade puts the language-specific Noto font after Inter so that Latin characters (numbers, brand name "Playbook", currency symbols like MOP$ / AED) still render in Inter while CJK/Arabic characters fall through to the Noto font automatically:

```css
font-family: 'Inter', 'Noto Sans JP', system-ui, sans-serif;
```

## RTL handling (Arabic only)

Arabic templates set `<html lang="ar" dir="rtl">` and use CSS logical properties (`padding-inline-start`, `margin-inline-end`, etc.) so the layout mirrors automatically. The gradient accent bar at the top stays orange→teal (left-to-right) — this is the brand's fixed directional identity and does not flip with RTL. Numbers remain LTR inline within RTL text (standard CSS behavior).

## Cultural profile application

Per `_cultural-audit.md`, each language variant uses a specific cultural profile:

- **Japanese** (Japan): `elder, communal, understated, contextual, reserved`
- **Simplified Chinese** (Macau): `authority, communal, minimal, diplomatic, private`
- **Arabic** (UAE): `authority, communal, understated, contextual, private`

This means some templates are not direct translations of the English — they are re-authored per the target cultural profile. See the audit matrix for per-template modification depth (TL / L / M / H / SKIP).

## Build status

- Phase 1 (cultural profiles): complete
- Phase 2 (cultural audit): complete — see `_cultural-audit.md`
- Phase 3 (infrastructure): in progress — this directory
- Phase 4–6 (template build + review + gallery): pending
