# Mobile App Touchpoints

Copy and layout specs for 6 key mobile screens where {{PROGRAM_NAME}} content integrates into the player experience. Mobile is where 60%+ of players gamble — this is a first-class surface.

> **Operator note**: Replace all `{{PLACEHOLDER}}` tokens with values from `_brand.yml`. Touch targets must be 44x44px minimum. Primary CTAs should sit within the thumb zone (bottom 40% of screen). See [application guidelines](../../brand-book/07-application-guidelines.md#mobile-app) for integration principles.

> **Logo usage**: Where the {{PROGRAM_NAME}} logo appears in-app (tab bar, navigation, content hub header), use the horizontal (B2) layout. On navy/dark backgrounds use the reversed variant (white Play + teal BOOK); on white/light backgrounds use the full-color variant (navy Play + navy BOOK) or on-light variant (navy Play + teal BOOK). Minimum height: 24px (digital). Maintain 1x logo-height clear space on all sides. Below 24px, use logomark only (no wordmark). Co-branding with operator logo: {{PROGRAM_NAME}} logo no smaller than 60% of operator logo height; vertical divider (neutral_300 `#A8A8C0`, 1px) between logos. See [logo system](../../brand-book/03-visual-identity.md#1-logo-system).

---

## Quick-scan index

| Screen | Moment | Primary goal |
|---|---|---|
| [Registration / onboarding](#1-registration--onboarding) | Account creation | Introduce tools, first quiz |
| [First deposit](#2-first-deposit) | Initial funding | Deposit limit prompt |
| [During play](#3-during-play) | Active session | Session awareness |
| [Account settings](#4-account-settings) | Self-service | Full tool dashboard |
| [Limit reached](#5-limit-reached) | Budget boundary | Clear notification + support |
| [Content hub](#6-content-hub) | Education | Quizzes, articles, tools |

---

## 1. Registration / onboarding

**When**: Immediately after account creation, before first session.

### Screen copy

| Element | Content |
|---|---|
| **Headline** | Welcome. Three things that make everything better. |
| **Body** | Before you dive in, here's the 60-second setup that puts you in control. |
| **Step 1 label** | Set your budget |
| **Step 1 body** | Pick your weekly or monthly deposit limit. Change it anytime. |
| **Step 1 CTA** | `Set your limit →` |
| **Step 2 label** | Set your pace |
| **Step 2 body** | Session reminders keep you aware without killing the vibe. |
| **Step 2 CTA** | `Set a reminder →` |
| **Step 3 label** | Know your game |
| **Step 3 body** | Take the 2-minute odds quiz. Most people get question 3 wrong. |
| **Step 3 CTA** | `Take the quiz →` |
| **Skip option** | `Skip for now` (subtle, bottom-left — not hidden, but not primary) |

> Ref: Messages [OB-1](../../messaging/core-messages.md#onboarding), [OB-2](../../messaging/core-messages.md#onboarding), [OB-3](../../messaging/core-messages.md#onboarding)

### Layout specs

- One step per screen, swipeable carousel or vertical scroll
- Progress indicator (3 dots) at top
- Primary CTA: full-width button, bottom of screen, within thumb zone
- Skip: text link, 14px, neutral gray `#6B6B8A`

---

## 2. First deposit

**When**: Player initiates their first deposit.

### Screen copy

| Element | Content |
|---|---|
| **Headline** | Set your entertainment budget |
| **Body** | Think of this as your budget for the week. You pick the number. |
| **Deposit limit prompt** | Want to set a weekly deposit limit? |
| **Option A** | `Yes, set my limit →` (primary, teal `#00D4AA`) |
| **Option B** | `Not right now` (secondary, outlined) |
| **Confirmation (if set)** | Your deposit limit is set to {{LIMIT_AMOUNT}} per {{PERIOD}}. Adjust it anytime in settings. |
| **Confirmation CTA** | `Start playing →` |

> Ref: Messages [D-1](../../messaging/core-messages.md#deposit-screen), [D-2](../../messaging/core-messages.md#deposit-screen), [T-3](../../messaging/core-messages.md#tools--features-that-work-for-you)

### Layout specs

- Deposit limit prompt appears as an inline card within the deposit flow — not a pop-up or modal
- CTA buttons: full-width, stacked vertically, primary on top
- Helpline strip at bottom of screen: `{{HELPLINE_NUMBER}}`

---

## 3. During play

**When**: At configurable intervals during an active session.

### Session reminder copy

| Variant | Content |
|---|---|
| **Standard** | You've been playing for {{DURATION}}. Most sessions average about 45 minutes. Keep going or take a break? |
| **Casual** | Quick check-in: you've been at it for {{DURATION}}. How's it going? |
| **Witty** | Time flies when you're playing. That's by design. Here's your session update. |
| **Informational** | Session update: {{DURATION}} so far. You've placed {{BET_COUNT}} bets. Want to set a reminder for next time? |

> Ref: Messages [SR-1](../../messaging/core-messages.md#session-reminder) through [SR-4](../../messaging/core-messages.md#session-reminder)

### Actions

| Button | Action |
|---|---|
| **Primary CTA** | `Keep playing` (dismisses reminder) |
| **Secondary CTA** | `Take a break` (returns to lobby/home) |
| **Tertiary link** | `See your activity →` (opens dashboard) |

### Layout specs

- Appears as a bottom sheet (slides up from bottom), not a blocking modal
- Semi-transparent dark overlay on game content
- Swipe-to-dismiss gesture supported
- Minimum display time: 3 seconds before dismiss is available

---

## 4. Account settings

**When**: Player navigates to account settings or {{PROGRAM_NAME}} tools section.

### Screen copy

| Element | Content |
|---|---|
| **Section header** | Your tools |
| **Subheader** | Deposit limits, session reminders, activity summary — all in one place. Your account, your rules. |

### Tool list

| Tool | Status display | CTA |
|---|---|---|
| **Deposit limits** | Current: {{LIMIT_AMOUNT}} / {{PERIOD}} | `Adjust →` |
| **Session reminders** | Every {{INTERVAL}} | `Change →` |
| **Activity dashboard** | Last updated: {{DATE}} | `View →` |
| **Cool-off period** | Not active | `Learn more →` |
| **Self-exclusion** | — | `Learn more →` |
| **Game IQ quiz** | Best score: {{SCORE}}/10 | `Retake →` |

| Element | Content |
|---|---|
| **Footer** | Support is one tap away. Whenever you're ready. |
| **Footer CTA** | `Find support →` |

> Ref: Messages [AS-1](../../messaging/core-messages.md#account-settings), [AS-2](../../messaging/core-messages.md#account-settings), [H-4](../../messaging/core-messages.md#help--support-without-barriers)

### Layout specs

- Vertical list, each tool row tappable to expand or navigate
- Status values update in real time where applicable
- Helpline number visible at bottom of screen
- "Self-exclusion" and "Cool-off" grouped under "Take a break" subsection

---

## 5. Limit reached

**When**: Player hits a deposit, loss, or session limit they previously set.

### Screen copy

| Element | Content |
|---|---|
| **Headline** | You've hit your {{LIMIT_TYPE}} limit |
| **Body** | It resets {{RESET_DATE}}. That's you playing on your own terms. |
| **Tone note** | Celebratory, not punitive. This is the system working as designed. |

### Actions

| Button | Action |
|---|---|
| **Primary CTA** | `Got it` (returns to lobby) |
| **Secondary CTA** | `See your activity →` (opens dashboard) |
| **Support link** | `Want to talk? Free, confidential support: {{HELPLINE_NUMBER}}` |

> Ref: Messages [D-4](../../messaging/core-messages.md#deposit-screen), [PL-3](../../messaging/core-messages.md#post-loss)

### Layout specs

- Full-screen notification, centered content
- Background: navy `#1B2838`
- Headline: white, 24px Inter 700
- No option to override the limit on this screen
- Support link: always visible, styled as text link, not button

---

## 6. Content hub

**When**: Player navigates to the {{PROGRAM_NAME}} section from menu or tab bar.

### Screen copy

| Element | Content |
|---|---|
| **Tab/menu label** | {{PROGRAM_NAME}} (or "Know Your Game") |
| **Section header** | Facts worth sharing. Knowledge worth having. |

### Content modules

| Module | Content | CTA |
|---|---|---|
| **Quiz card** | How well do you know the odds? 7 questions, 2 minutes. | `Take the quiz →` |
| **Odds explorer** | House edge by game — see the real numbers | `See all games →` |
| **Article feed** | Latest: "How the house edge actually works" | `Read more →` |
| **Tool promo** | Your tools live here. Limits, reminders, dashboard. | `See your tools →` |

> Ref: Messages [S-3](../../messaging/core-messages.md#social--shareable-knowledge), [S-4](../../messaging/core-messages.md#social--shareable-knowledge)

### Layout specs

- Vertical scroll, card-based layout
- Quiz card: prominent, top of page, teal accent
- Helpline strip: persistent at bottom of scrollable area
- Content loads progressively (infinite scroll or "Load more" button)

---

## Push notifications

Copy for opt-in push notifications. Players must explicitly opt in to each category.

### Session reminders

| Notification | Body | Deep link |
|---|---|---|
| **Gentle nudge** | You've been playing for {{DURATION}}. Quick check-in — how's it going? | Session screen |
| **Budget update** | You've used {{PERCENT}}% of your weekly budget. Your tools are ready if you need them. | Activity dashboard |

### Tool promotion

| Notification | Body | Deep link |
|---|---|---|
| **Quiz hook** | New quiz question dropped. Think you know the answer? Most people don't. | Quiz |
| **Feature reminder** | Your deposit limit hasn't been updated in a while. Still working for you? | Deposit limits settings |

### Limit alerts

| Notification | Body | Deep link |
|---|---|---|
| **Approaching limit** | You're at {{PERCENT}}% of your {{LIMIT_TYPE}} limit. Your tools are working. | Activity dashboard |
| **Limit reached** | You've reached your {{LIMIT_TYPE}} limit. It resets {{RESET_DATE}}. | Limit reached screen |

---

## Deep link structure

Recommended deep link paths for in-app content:

| Destination | Path |
|---|---|
| Content hub | `{{APP_SCHEME}}://playbook` |
| Quiz | `{{APP_SCHEME}}://playbook/quiz` |
| Deposit limits | `{{APP_SCHEME}}://playbook/limits` |
| Activity dashboard | `{{APP_SCHEME}}://playbook/activity` |
| Session reminders | `{{APP_SCHEME}}://playbook/reminders` |
| Support / helpline | `{{APP_SCHEME}}://playbook/support` |
| Odds explorer | `{{APP_SCHEME}}://playbook/odds` |
| Self-exclusion | `{{APP_SCHEME}}://playbook/pause` |

---

*Cross-references: [Application Guidelines — Mobile](../../brand-book/07-application-guidelines.md#mobile-app) | [Core Messages](../../messaging/core-messages.md) | [Voice and Tone](../../brand-book/04-voice-and-tone.md)*
