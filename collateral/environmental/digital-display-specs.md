# Digital Display Specs

Content and scheduling specs for {{PROGRAM_NAME}} digital signage. Covers landscape and portrait orientations with a 4-screen content rotation.

> **Operator note**: Replace all `{{PLACEHOLDER}}` tokens with values from `_brand.yml`. See [application guidelines](../../brand-book/07-application-guidelines.md#environmental-applications) for placement rules. See [`render/display-landscape-6a.html`](../render/display-landscape-6a.html) for the HTML template render.

---

## Quick-scan index

| Section | Content |
|---|---|
| [Screen specs](#screen-specs) | Dimensions, resolution, orientation |
| [Content rotation](#content-rotation) | 4-screen loop with copy |
| [Animation specs](#animation--transition-specs) | Transitions, timing, motion |
| [Scheduling](#scheduling-guidance) | Frequency, dayparts, rotation rules |

---

## Screen specs

### Landscape (primary)

| Property | Value |
|---|---|
| **Resolution** | 1920 x 1080px (Full HD) |
| **Aspect ratio** | 16:9 |
| **Orientation** | Landscape |
| **Use** | Entrance displays, above-bar screens, lobby monitors |

### Portrait (secondary)

| Property | Value |
|---|---|
| **Resolution** | 1080 x 1920px (Full HD rotated) |
| **Aspect ratio** | 9:16 |
| **Orientation** | Portrait |
| **Use** | Column-mounted kiosks, elevator screens, narrow hallway displays |

### Design constants

| Property | Value |
|---|---|
| **Background** | Navy `#1B2838` or gradient `#0F1923` → `#1B2838` |
| **Accent bar** | 6px gradient `#FF6B35` → `#00D4AA` at top |
| **Grid overlay** | Subtle white lines, 0.02 opacity, 60px spacing |
| **Logo** | {{PROGRAM_NAME}} wordmark, horizontal (B2) layout, reversed variant (white Play + teal BOOK on navy bg), top-left. Min height 24px (digital). Maintain 1x logo-height clear space on all sides. See [logo system](../../brand-book/03-visual-identity.md#1-logo-system) |
| **Operator logo** | `[Your logo here]` placeholder, top-right. Co-branding: {{PROGRAM_NAME}} logo no smaller than 60% of operator logo height; vertical divider (neutral_300 `#A8A8C0`, 1px) between logos |
| **Helpline strip** | Bottom strip, `#2A3F56` background, white Source Code Pro text |
| **Safe area** | 48px padding on all sides (title-safe zone) |
| **Readability** | Headline visible from 3 meters. Min body: 32px. Min helpline: 28px bold. |

---

## Content rotation

4-screen loop. Each screen displays for 10 seconds. Full rotation: 40 seconds.

### Screen 1 — Awareness

**Goal**: Brand introduction, establish {{PROGRAM_NAME}} presence.

| Element | Content |
|---|---|
| **Pillar badge** | `OPEN` (teal pill) |
| **Headline** | Every game has math. Here's yours. |
| **Headline specs** | Inter 800, 64px, white |
| **Subheadline** | Real odds. Real tools. No fine print. |
| **Subheadline specs** | Source Sans 3 400, 32px, `#A8A8C0` |
| **QR code** | Links to content hub |
| **QR label** | Scan to learn more |
| **Helpline** | Free, confidential support 24/7: {{HELPLINE_NUMBER}} |

### Screen 2 — Odds fact

**Goal**: Specific odds education, concrete numbers.

| Element | Content |
|---|---|
| **Label** | REAL ODDS (orange, uppercase) |
| **Headline** | The house edge — what it means for you |
| **Stats row** | Three columns side by side: |

| Game | Edge | Color |
|---|---|---|
| Blackjack | 0.5% | Teal `#00D4AA` |
| Roulette | 5.26% | White `#FFFFFF` |
| Slots | 2–15% | Orange `#FF6B35` |

| Element | Content |
|---|---|
| **Body** | Knowing the edge helps you pick your games and set your budget. |
| **Helpline** | Free, confidential support 24/7: {{HELPLINE_NUMBER}} |

### Screen 3 — Quiz hook

**Goal**: Drive engagement to the Game IQ quiz.

| Element | Content |
|---|---|
| **Pillar badge** | `SHARP` (teal pill) |
| **Headline** | Think you know the odds? |
| **Headline specs** | Inter 800, 72px, white |
| **Body** | Take the 2-minute game IQ quiz. Most people get question 3 wrong. |
| **QR code** | Links to quiz (large, 200px+) |
| **QR label** | Scan to take the quiz |
| **Social hook** | Challenge your friends. |
| **Helpline** | Free, confidential support 24/7: {{HELPLINE_NUMBER}} |

### Screen 4 — Helpline

**Goal**: Make support resources prominent and accessible.

| Element | Content |
|---|---|
| **Headline** | Need to talk? |
| **Headline specs** | Inter 800, 72px, white |
| **Subheadline** | Free, confidential support — for any question about gambling. No judgment. Ever. |
| **Number** | {{HELPLINE_NUMBER}} |
| **Number specs** | Source Code Pro 700, 96px, teal `#00D4AA` — dominant element |
| **Channels** | Text {{TEXT_NUMBER}} &#124; Chat {{CHAT_URL}} |
| **Channels specs** | Source Sans 3, 28px, `#A8A8C0` |
| **Availability** | 24/7 |

---

## Animation / transition specs

### Transitions between screens

| Property | Value |
|---|---|
| **Transition type** | Crossfade |
| **Duration** | 800ms |
| **Easing** | ease-in-out |
| **No** | Slide, wipe, bounce, or spinning transitions |

### On-screen animations

| Element | Animation | Duration |
|---|---|---|
| **Headline** | Fade in + subtle upward shift (8px) | 600ms, 200ms delay |
| **Stats/numbers** | Count up from 0 to final value | 1000ms, 400ms delay |
| **QR code** | Fade in | 400ms, 800ms delay |
| **Helpline strip** | Always visible, no animation | — |
| **Pillar badge** | Fade in | 400ms, 0ms delay |

### Motion principles

- Subtle, purposeful motion only — not decorative
- No looping animations (distracting in peripheral vision)
- Helpline strip never animates — always statically visible
- All animations complete within first 2 seconds of screen display
- Remaining 8 seconds: fully static content for readability

---

## Scheduling guidance

### Rotation frequency

| Setting | Value | Rationale |
|---|---|---|
| **Screen dwell time** | 10 seconds per screen | Readable at 3m walking pace |
| **Full rotation** | 40 seconds (4 screens) | Complete message cycle |
| **Daily rotations** | ~2,160 (at 40s cycle, 24hr) | High repeat exposure |

### Daypart scheduling

| Daypart | Hours | Content emphasis |
|---|---|---|
| **Morning** (low traffic) | 6am – 12pm | Screens 1 + 2 (awareness + odds) |
| **Afternoon** (building) | 12pm – 6pm | Full 4-screen rotation |
| **Evening** (peak) | 6pm – 12am | Full 4-screen rotation |
| **Late night** (high intensity) | 12am – 6am | Screens 2 + 4 (odds + helpline) — heavier support presence |

### Special scheduling

| Event | Adjustment |
|---|---|
| **Major sporting events** | Add sports betting odds screen to rotation |
| **Awareness weeks** | Increase helpline screen to 50% of rotation |
| **Holidays** | Add holiday budget reminder screen |
| **New quiz launch** | Lead with quiz hook screen for 48 hours |

### Content refresh

| Element | Frequency |
|---|---|
| **Core rotation** | Quarterly review |
| **Odds data** | Update if game rules change |
| **QR code links** | Test monthly |
| **Helpline number** | Verify quarterly (jurisdiction changes) |
| **Seasonal content** | Swap in/out per event calendar |

---

## Rendered previews

| Template | Orientation | Preview |
|---|---|---|
| [Landscape display](../render/display-landscape-6a.html) | 1920 x 1080 (16:9) | ![Landscape display](../render/display-landscape-6a.png) |
| [Portrait display](../render/display-portrait-6b.html) | 1080 x 1920 (9:16) | ![Portrait display](../render/display-portrait-6b.png) |

---

*Cross-references: [Application Guidelines — Environmental](../../brand-book/07-application-guidelines.md#environmental-applications) | [Core Messages](../../messaging/core-messages.md) | [HTML template](../render/display-landscape-6a.html)*
