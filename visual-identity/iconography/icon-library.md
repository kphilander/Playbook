# Playbook Icon Library

Complete reference for all 55 icons in the Playbook brand system. Each icon is a 24x24 outlined SVG using `stroke="currentColor"` for easy theming.

---

## Icon specifications

| Property | Value |
|---|---|
| Style | Outlined (not filled) |
| Stroke width | 1.5 px at 24 px canvas |
| Stroke color | `currentColor` (inherits from parent) |
| Fill | `none` |
| Line cap | Round |
| Line join | Round |
| Corner radius | 2 px (where applicable) |
| Default canvas | 24 x 24 px |
| Optical sizes | 16 px, 24 px, 32 px, 48 px |

### Scaling

All icons share a single `viewBox="0 0 24 24"`. To display at other sizes, change only the `width` and `height` attributes. Stroke width scales proportionally because it is defined inside the viewBox coordinate space.

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

## Category 1: Game Types (10 icons)

Icons representing different types of gambling games and activities.

| Icon | Name | Description | Usage |
|---|---|---|---|
| ![](icons/icon-cards.svg) | `icon-cards` | Playing cards (two overlapping) | Card games, blackjack, general gambling |
| ![](icons/icon-dice.svg) | `icon-dice` | Two dice | Dice games, craps, randomness |
| ![](icons/icon-roulette.svg) | `icon-roulette` | Roulette wheel | Roulette, casino games, chance |
| ![](icons/icon-slots.svg) | `icon-slots` | Slot machine / three reels | Slot machines, electronic gaming |
| ![](icons/icon-chips.svg) | `icon-chips` | Casino chip stack | Betting chips, wagers, stakes |
| ![](icons/icon-sports.svg) | `icon-sports` | Ball / sports betting | Sports betting, live betting |
| ![](icons/icon-lottery.svg) | `icon-lottery` | Lottery ticket | Lottery, scratch cards, draws |
| ![](icons/icon-poker.svg) | `icon-poker` | Poker hand fan | Poker, card strategy games |
| ![](icons/icon-bingo.svg) | `icon-bingo` | Bingo card grid | Bingo, number games |
| ![](icons/icon-table.svg) | `icon-table` | Table game (felt table top-down) | Table games, blackjack, baccarat |

---

## Category 2: Odds & Math (8 icons)

Icons for probabilities, calculations, and mathematical concepts behind gambling.

| Icon | Name | Description | Usage |
|---|---|---|---|
| ![](icons/icon-percentage.svg) | `icon-percentage` | Percent sign in circle | Probabilities, percentages, return rates |
| ![](icons/icon-calculator.svg) | `icon-calculator` | Calculator | Odds calculator, math tools |
| ![](icons/icon-odds.svg) | `icon-odds` | Fraction / ratio display | Odds display, fractional odds, ratios |
| ![](icons/icon-rng.svg) | `icon-rng` | Shuffle/random arrows | Random number generators, shuffling, independence |
| ![](icons/icon-edge.svg) | `icon-edge` | House edge — tilt/scale | House edge, advantage, margin |
| ![](icons/icon-trend-up.svg) | `icon-trend-up` | Upward trend line | Positive trends, growth, winnings |
| ![](icons/icon-trend-down.svg) | `icon-trend-down` | Downward trend line | Negative trends, losses, decline |
| ![](icons/icon-equal.svg) | `icon-equal` | Equal sign in circle | Independent events, equal probability, fairness |

---

## Category 3: Player Tools (15 icons)

Icons for player-facing tools, settings, and responsible-gambling features.

| Icon | Name | Description | Usage |
|---|---|---|---|
| ![](icons/icon-wallet.svg) | `icon-wallet` | Wallet | Deposits, withdrawals, account balance |
| ![](icons/icon-lock.svg) | `icon-lock` | Padlock | Account lock, security settings, self-exclusion |
| ![](icons/icon-bell.svg) | `icon-bell` | Bell | Notifications, alerts, reminders |
| ![](icons/icon-settings.svg) | `icon-settings` | Gear | Settings, preferences, configuration |
| ![](icons/icon-history.svg) | `icon-history` | Clock with arrow | Play history, recent activity, session log |
| ![](icons/icon-cooloff.svg) | `icon-cooloff` | Snowflake | Cool-off period, take a break, time-out |
| ![](icons/icon-budget.svg) | `icon-budget` | Dollar in circle | Entertainment budget, spending limits, bankroll |
| ![](icons/icon-timer.svg) | `icon-timer` | Timer/clock | Session awareness, play duration |
| ![](icons/icon-limit.svg) | `icon-limit` | Gauge | Deposit limits, loss limits, wagering limits |
| ![](icons/icon-pause.svg) | `icon-pause` | Pause bars | Take a break, cool-off |
| ![](icons/icon-calendar.svg) | `icon-calendar` | Calendar | Session scheduling, cool-off duration |
| ![](icons/icon-shield.svg) | `icon-shield` | Shield with check | Account security, self-exclusion |
| ![](icons/icon-person.svg) | `icon-person` | Person silhouette | Player profile, account settings |
| ![](icons/icon-check.svg) | `icon-check` | Checkmark | Confirmation, positive actions, quiz correct |
| ![](icons/icon-activity.svg) | `icon-activity` | Bar chart | Activity tracking, play history, stats |

---

## Category 4: Content & Education (8 icons)

Icons for educational content, quizzes, and literacy materials.

| Icon | Name | Description | Usage |
|---|---|---|---|
| ![](icons/icon-quiz.svg) | `icon-quiz` | Question mark in circle | Quizzes, knowledge tests, trivia |
| ![](icons/icon-myth.svg) | `icon-myth` | X-mark in circle | Myth-busting, false claims, misconceptions |
| ![](icons/icon-fact.svg) | `icon-fact` | Checkmark in circle | Facts, verified info, correct answers |
| ![](icons/icon-book.svg) | `icon-book` | Open book | Educational content, guides, learning |
| ![](icons/icon-video.svg) | `icon-video` | Play button in rectangle | Video content, tutorials, explainers |
| ![](icons/icon-article.svg) | `icon-article` | Document with lines | Articles, blog posts, written content |
| ![](icons/icon-smart.svg) | `icon-smart` | Lightbulb | Myth-busting, game IQ, quiz |
| ![](icons/icon-info.svg) | `icon-info` | Info circle | Educational content, tips, explainers |

---

## Category 5: Social & Sharing (7 icons)

Icons for social features, sharing, and community engagement.

| Icon | Name | Description | Usage |
|---|---|---|---|
| ![](icons/icon-challenge.svg) | `icon-challenge` | Crossed swords | Challenges, versus mode, competitions |
| ![](icons/icon-leaderboard.svg) | `icon-leaderboard` | Podium | Leaderboards, rankings, top players |
| ![](icons/icon-group.svg) | `icon-group` | Multiple people | Groups, social features, community |
| ![](icons/icon-link.svg) | `icon-link` | Chain link | Links, URLs, connections |
| ![](icons/icon-qr.svg) | `icon-qr` | QR code | QR codes, scan to access, mobile linking |
| ![](icons/icon-share.svg) | `icon-share` | Upload arrow | Social sharing, challenge friends |
| ![](icons/icon-score.svg) | `icon-score` | Trophy | Quiz results, achievements, game IQ score |

---

## Category 6: Support & Safety (7 icons)

Icons for help resources, safety features, and wellbeing.

| Icon | Name | Description | Usage |
|---|---|---|---|
| ![](icons/icon-heart.svg) | `icon-heart` | Heart | Wellbeing, self-care, mental health |
| ![](icons/icon-warning.svg) | `icon-warning` | Triangle exclamation | Warnings, alerts, caution, risk |
| ![](icons/icon-help.svg) | `icon-help` | Question circle with lifeline | Help resources, support services, crisis lines |
| ![](icons/icon-external.svg) | `icon-external` | External link arrow | External links, leaving site, third-party resources |
| ![](icons/icon-chat.svg) | `icon-chat` | Chat bubble | Live chat, support conversation |
| ![](icons/icon-phone.svg) | `icon-phone` | Phone handset | Helpline number, call for support |
| ![](icons/icon-playbook.svg) | `icon-playbook` | Playbook brand mark | Brand identifier, navigation, home |

---

## File structure

```
visual-identity/iconography/
  icon-library.md          ← this file
  icon-preview.html        ← visual preview (open in browser)
  icons/
    icon-activity.svg
    icon-article.svg
    icon-bell.svg
    icon-bingo.svg
    icon-book.svg
    icon-budget.svg
    icon-calculator.svg
    icon-calendar.svg
    icon-cards.svg
    icon-challenge.svg
    icon-chat.svg
    icon-check.svg
    icon-chips.svg
    icon-cooloff.svg
    icon-dice.svg
    icon-edge.svg
    icon-equal.svg
    icon-external.svg
    icon-fact.svg
    icon-group.svg
    icon-heart.svg
    icon-help.svg
    icon-history.svg
    icon-info.svg
    icon-leaderboard.svg
    icon-limit.svg
    icon-link.svg
    icon-lock.svg
    icon-lottery.svg
    icon-myth.svg
    icon-odds.svg
    icon-pause.svg
    icon-percentage.svg
    icon-person.svg
    icon-phone.svg
    icon-playbook.svg
    icon-poker.svg
    icon-qr.svg
    icon-quiz.svg
    icon-rng.svg
    icon-roulette.svg
    icon-score.svg
    icon-settings.svg
    icon-share.svg
    icon-shield.svg
    icon-slots.svg
    icon-smart.svg
    icon-sports.svg
    icon-table.svg
    icon-timer.svg
    icon-trend-down.svg
    icon-trend-up.svg
    icon-video.svg
    icon-wallet.svg
    icon-warning.svg
```

## Build

Regenerate all icons by running:

```bash
node collateral/render/build-icons.mjs
```

This overwrites all SVG files and regenerates `icon-preview.html`.
