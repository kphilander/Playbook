# Playbook Icon Library

Complete reference for all 31 icons in the Playbook brand system. Each icon uses a **dual stroke-weight system** that echoes the logo's typographic contrast (Play 800 / BOOK 300).

---

## Design philosophy: Weight contrast

The Playbook logo splits "Playbook" into two typographic weights — **Play** (Inter 800, bold) and **BOOK** (Inter 300, light). The icon system mirrors this contrast with two stroke weights inside every icon:

- **Primary strokes (2px)** — Outer containers, main shapes, defining structure. The "Play" weight.
- **Detail strokes (1px)** — Inner details, accents, secondary elements. The "BOOK" weight.

This 2:1 ratio creates visual hierarchy within each icon and makes the icon set feel like part of the same design language as the wordmark.

---

## Icon specifications

| Property | Value |
|---|---|
| Style | Weight-contrast outlined (dual stroke) |
| Primary stroke | 2px — containers, structure |
| Detail stroke | 1px — accents, inner elements |
| Stroke color | `currentColor` (inherits from parent) |
| Fill | `none` (except dots/pips which use `fill="currentColor"`) |
| Line cap | Round |
| Line join | Round |
| Default canvas | 24 x 24 px |
| Optical sizes | 16 px, 24 px, 32 px, 48 px |

### SVG structure

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-linecap="round" stroke-linejoin="round">
  <g stroke-width="2"><!-- primary: containers, structure --></g>
  <g stroke-width="1"><!-- detail: accents, inner elements --></g>
</svg>
```

No `stroke-width` on the root `<svg>` element. Weights are set exclusively on `<g>` groups.

### Scaling

All icons share a single `viewBox="0 0 24 24"`. To display at other sizes, change only the `width` and `height` attributes. The 2:1 stroke ratio scales proportionally at all sizes.

```html
<!-- 16 px -->
<svg width="16" height="16" viewBox="0 0 24 24" ...>
<!-- 32 px -->
<svg width="32" height="32" viewBox="0 0 24 24" ...>
```

### Color

Icons use `stroke="currentColor"`, so they inherit the CSS `color` of their parent element:

```css
.icon-primary  { color: var(--pb-color-primary); }
.icon-accent   { color: var(--pb-color-accent); }
.icon-on-dark  { color: #ffffff; }
```

---

## Category 1: Game Types (7 icons)

Icons representing different types of gambling games and activities.

| Icon | Name | Primary (2px) | Detail (1px) | Usage |
|---|---|---|---|---|
| ![](icons/icon-cards.svg) | `icon-cards` | Two card outlines | Suit symbol | Card games, blackjack |
| ![](icons/icon-dice.svg) | `icon-dice` | Two die outlines | Pip dots | Dice games, craps, randomness |
| ![](icons/icon-roulette.svg) | `icon-roulette` | Outer + inner circles | 8 spokes, ball, pointer | Roulette, casino games |
| ![](icons/icon-slots.svg) | `icon-slots` | Machine body | Reel windows, lever | Slot machines, electronic gaming |
| ![](icons/icon-sports.svg) | `icon-sports` | Ball circle | Horizontal + inward arcs | Sports betting, live betting |
| ![](icons/icon-lottery.svg) | `icon-lottery` | Ticket outline | Tear line, star | Lottery, scratch cards, draws |
| ![](icons/icon-table.svg) | `icon-table` | Table arc + rail | Dealer/player dots | Table games, blackjack, baccarat |

---

## Category 2: Odds & Math (4 icons)

Icons for probabilities, calculations, and mathematical concepts.

| Icon | Name | Primary (2px) | Detail (1px) | Usage |
|---|---|---|---|---|
| ![](icons/icon-percentage.svg) | `icon-percentage` | Circle | Percent slash + dots | Probabilities, return rates |
| ![](icons/icon-edge.svg) | `icon-edge` | Two bars (tall/short) | Baseline, hash marks | House edge, advantage |
| ![](icons/icon-rng.svg) | `icon-rng` | Crossing arrow paths | Arrowheads | RNG, shuffling, independence |
| ![](icons/icon-equal.svg) | `icon-equal` | Circle | Equal-sign lines | Independent events, fairness |

---

## Category 3: Player Tools (7 icons)

Icons for player-facing tools, settings, and responsible-gambling features.

| Icon | Name | Primary (2px) | Detail (1px) | Usage |
|---|---|---|---|---|
| ![](icons/icon-timer.svg) | `icon-timer` | Clock circle | Hands, knob | Session awareness, play duration |
| ![](icons/icon-limit.svg) | `icon-limit` | Gauge arc | Needle, ticks | Deposit/loss/wagering limits |
| ![](icons/icon-budget.svg) | `icon-budget` | Circle | Dollar sign | Entertainment budget, spending |
| ![](icons/icon-bell.svg) | `icon-bell` | Bell body | Clapper | Notifications, alerts, reminders |
| ![](icons/icon-history.svg) | `icon-history` | Clock circle | Hands, rewind arrow | Play history, session log |
| ![](icons/icon-check.svg) | `icon-check` | Rounded rectangle | Checkmark polyline | Confirmation, positive actions |
| ![](icons/icon-activity.svg) | `icon-activity` | Chart axes | Bar lines | Activity tracking, stats |

---

## Category 4: Content & Education (4 icons)

Icons for educational content, quizzes, and literacy materials.

| Icon | Name | Primary (2px) | Detail (1px) | Usage |
|---|---|---|---|---|
| ![](icons/icon-quiz.svg) | `icon-quiz` | Circle | Question mark + dot | Quizzes, knowledge tests |
| ![](icons/icon-myth.svg) | `icon-myth` | Circle | X-mark lines | Myth-busting, misconceptions |
| ![](icons/icon-fact.svg) | `icon-fact` | Circle | Checkmark | Facts, verified info |
| ![](icons/icon-info.svg) | `icon-info` | Circle | i-dot + i-stem | Tips, explainers |

---

## Category 5: Social & Sharing (4 icons)

Icons for social features, sharing, and community engagement.

| Icon | Name | Primary (2px) | Detail (1px) | Usage |
|---|---|---|---|---|
| ![](icons/icon-share.svg) | `icon-share` | Box container | Arrow shaft + head | Social sharing |
| ![](icons/icon-challenge.svg) | `icon-challenge` | Two sword diagonals | Handle/hilt lines | Challenges, versus mode |
| ![](icons/icon-score.svg) | `icon-score` | Trophy cup | Handles, stem, base | Achievements, game IQ score |
| ![](icons/icon-qr.svg) | `icon-qr` | 3 finder blocks | Inner rects, data lines | QR codes, mobile linking |

---

## Category 6: Support & Safety (5 icons)

Icons for help resources, safety features, and wellbeing.

| Icon | Name | Primary (2px) | Detail (1px) | Usage |
|---|---|---|---|---|
| ![](icons/icon-phone.svg) | `icon-phone` | Phone body | Signal arcs | Helpline, call for support |
| ![](icons/icon-warning.svg) | `icon-warning` | Triangle outline | Exclamation + dot | Warnings, caution, risk |
| ![](icons/icon-help.svg) | `icon-help` | Circle | Plus / first-aid cross | Help resources, crisis lines |
| ![](icons/icon-external.svg) | `icon-external` | Box | Arrow + diagonal | External links, third-party |
| ![](icons/icon-playbook.svg) | `icon-playbook` | Open book + spine | Play triangle | Brand identifier, home |

---

## File structure

```
visual-identity/iconography/
  icon-library.md          <- this file
  icon-preview.html        <- visual preview (open in browser)
  icons/
    icon-activity.svg
    icon-bell.svg
    icon-budget.svg
    icon-cards.svg
    icon-challenge.svg
    icon-check.svg
    icon-dice.svg
    icon-edge.svg
    icon-equal.svg
    icon-external.svg
    icon-fact.svg
    icon-help.svg
    icon-history.svg
    icon-info.svg
    icon-limit.svg
    icon-lottery.svg
    icon-myth.svg
    icon-percentage.svg
    icon-phone.svg
    icon-playbook.svg
    icon-qr.svg
    icon-quiz.svg
    icon-rng.svg
    icon-roulette.svg
    icon-score.svg
    icon-share.svg
    icon-slots.svg
    icon-sports.svg
    icon-table.svg
    icon-timer.svg
    icon-warning.svg
```

## Build

Regenerate all icons by running:

```bash
node collateral/render/build-icons.mjs
```

This deletes all existing SVGs, generates 31 new files, and regenerates `icon-preview.html`. The script asserts exactly 31 icons and exits with an error if the count is wrong.
