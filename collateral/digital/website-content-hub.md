# Website Content Hub — Page Spec

Production-ready copy and layout spec for the {{PROGRAM_NAME}} content hub landing page. This is the central destination for all player education, tools, quizzes, and support resources.

> **Operator note**: Replace all `{{PLACEHOLDER}}` tokens with values from `_brand.yml`. The content hub URL should be accessible from primary navigation — not buried in a footer submenu. See [application guidelines](../../brand-book/07-application-guidelines.md) for integration principles.

---

## Quick-scan index

| Section | Purpose |
|---|---|
| [SEO metadata](#seo-metadata) | Title, description, OG tags |
| [Hero](#hero) | Above-the-fold entry point |
| [Tool cards](#tool-cards) | Feature promotion grid |
| [Quiz entry](#quiz-entry) | Game IQ quiz hook |
| [Odds explorer](#odds-explorer) | House edge comparison module |
| [Article grid](#article-grid) | Educational content feed |
| [Helpline strip](#helpline-strip) | Persistent support access |
| [Footer strip](#footer-strip-component) | Global footer component spec |
| [Responsive behavior](#responsive-behavior) | Breakpoint adaptations |

---

## SEO metadata

| Tag | Value |
|---|---|
| `<title>` | `{{PROGRAM_NAME}} — Know Your Game` |
| `<meta name="description">` | `Real odds, real tools, real talk. {{PROGRAM_NAME}} helps you understand how games work, set your limits, and play on your terms.` |
| `og:title` | `{{PROGRAM_NAME}} — Know Your Game` |
| `og:description` | `Every game has math. Here's yours. Explore odds, quizzes, and tools that put you in control.` |
| `og:image` | `{{OG_IMAGE_URL}}` (1200x630, branded social card) |
| `og:type` | `website` |

---

## Hero

Full-width section, above the fold.

| Element | Content |
|---|---|
| **Pillar badge** | `OPEN` (teal pill) |
| **Headline** | Every game has math. Here's yours. |
| **Subheadline** | Real odds. Real tools. No fine print. {{PROGRAM_NAME}} gives you the facts and features to play on your terms. |
| **Primary CTA** | `Test your game IQ` → links to quiz section |
| **Secondary CTA** | `Explore the tools` → links to tool cards |
| **Background** | Navy `#1B2838` with subtle grid overlay |

> Ref: Message [O-3](../../messaging/core-messages.md#open--transparency-and-odds-literacy) for headline variant options.

---

## Tool cards

Four-card grid showcasing player features. Each card links to the relevant tool or settings page.

### Card 1 — Deposit limits

| Element | Content |
|---|---|
| **Icon** | `shield-check` (from icon system) |
| **Headline** | Set your deposit limit |
| **Body** | Pick your number. Play without second-guessing. Takes 10 seconds. |
| **CTA** | `Set your limits →` |

> Ref: Message [T-1](../../messaging/core-messages.md#tools--features-that-work-for-you), [D-1](../../messaging/core-messages.md#deposit-screen)

### Card 2 — Session reminders

| Element | Content |
|---|---|
| **Icon** | `clock` |
| **Headline** | Stay aware, stay in control |
| **Body** | Time moves differently when you're playing. Session reminders keep you aware without killing the vibe. |
| **CTA** | `Set a session reminder →` |

> Ref: Message [SR-3](../../messaging/core-messages.md#session-reminder)

### Card 3 — Activity dashboard

| Element | Content |
|---|---|
| **Icon** | `bar-chart` |
| **Headline** | Your play stats, at a glance |
| **Body** | See where your money goes. Sessions, time played, spending patterns — no surprises. |
| **CTA** | `Check your stats →` |

> Ref: Message [AD-1](../../messaging/core-messages.md#activity-dashboard)

### Card 4 — Bankroll planner

| Element | Content |
|---|---|
| **Icon** | `calculator` |
| **Headline** | How far can your budget go? |
| **Body** | Enter your entertainment budget, pick your game, and see how the math works out. Knowledge is a feature. |
| **CTA** | `Try the bankroll planner →` |

---

## Quiz entry

Prominent module driving engagement to the Game IQ quiz.

| Element | Content |
|---|---|
| **Pillar badge** | `SHARP` (teal pill) |
| **Headline** | Think you know the odds? |
| **Body** | 7 questions. 2 minutes. Most people get question 3 wrong. |
| **Primary CTA** | `Take the quiz →` |
| **Secondary CTA** | `Challenge a friend →` |
| **Social proof** | `{{QUIZ_COUNT}}+ players have taken the quiz` |
| **Background** | Slightly lighter navy `#2A3F56` card with rounded corners |

> Ref: Messages [S-3](../../messaging/core-messages.md#social--shareable-knowledge), [OB-3](../../messaging/core-messages.md#onboarding)

---

## Odds explorer

Interactive or static module comparing house edge across game types.

| Element | Content |
|---|---|
| **Headline** | The real numbers behind your games |
| **Subheadline** | Every game has a house edge — it's how casinos stay in business. Knowing the edge helps you pick your games and set your budget. |

### Comparison table

| Game | House edge | Note |
|---|---|---|
| Blackjack (basic strategy) | 0.5% | Best odds in the casino |
| Craps (pass/don't pass) | 1.4% | Simple bet, low edge |
| Baccarat (banker) | 1.06% | House favorite |
| European roulette | 2.7% | Single zero wheel |
| American roulette | 5.26% | Double zero = double edge |
| Slots (average) | 2–15% | Varies by machine and casino |

| Element | Content |
|---|---|
| **CTA** | `See how it works →` → links to full odds education article |
| **Footnote** | House edge assumes optimal strategy where applicable. Actual results vary by session. |

> Ref: Message [O-1](../../messaging/core-messages.md#open--transparency-and-odds-literacy), [O-2](../../messaging/core-messages.md#open--transparency-and-odds-literacy)

---

## Article grid

Curated feed of educational content. Minimum 6 articles at launch.

| Element | Content |
|---|---|
| **Section headline** | Facts worth sharing |
| **Section subheadline** | Odds explainers, myth-busters, and how-it-works guides. Content designed to be useful — and shareable. |
| **Card format** | Thumbnail + category tag + title + reading time |
| **CTA (section)** | `Explore more →` |

### Launch articles (minimum)

| Category | Title | Reading time |
|---|---|---|
| Odds education | How the house edge actually works | 4 min |
| Myth-busting | 5 gambling myths the math doesn't support | 3 min |
| Tools | Your deposit limit: the 10-second power move | 2 min |
| Sports betting | What -110 actually means for your wallet | 3 min |
| Odds education | Slots vs. table games: the real comparison | 4 min |
| Tools | Your activity dashboard — what it shows and why it matters | 3 min |

---

## Helpline strip

Persistent support access component. Visible above the fold and repeated at the bottom of the page.

| Element | Content |
|---|---|
| **Text** | Free, confidential support — for any question about gambling. |
| **Channels** | Call {{HELPLINE_NUMBER}} &#124; Text {{TEXT_NUMBER}} &#124; Chat at {{CHAT_URL}} |
| **Availability** | 24/7 |
| **Background** | Lighter navy `#2A3F56` strip |
| **Typography** | Source Code Pro 600, white, minimum 14pt |

> Ref: Message [H-1](../../messaging/core-messages.md#help--support-without-barriers), [RC-5](../../messaging/core-messages.md#helpline-display-mandatory)

---

## Footer strip component

Global component appearing on every page of the operator's site. Not unique to the content hub — this spec defines the persistent footer element.

| Element | Content |
|---|---|
| **Logomark** | {{PROGRAM_NAME}} logomark, reversed variant (white Play + teal BOOK on dark bg). Min height 24px. Maintain 1x logo-height clear space on all sides. Below 24px, use logomark only (no wordmark). See [logo system](../../brand-book/03-visual-identity.md#1-logo-system) |
| **Helpline** | {{HELPLINE_NUMBER}} |
| **Age notice** | You must be {{MIN_AGE}}+ to gamble. |
| **Hub link** | `Know your game →` → links to content hub |
| **Background** | Darker navy `#0F1923` |
| **Layout** | Horizontal strip: logomark left, helpline center, age + hub link right |

### Mobile variant

| Element | Adaptation |
|---|---|
| **Layout** | Stacked: logomark + helpline on line 1, age + hub link on line 2 |
| **Helpline** | Icon + number only (no "Free, confidential support" label) |

---

## Responsive behavior

### Desktop (> 1024px)

- Tool cards: 4-column grid
- Article grid: 3-column grid
- Quiz entry: full-width card with CTA buttons inline
- Odds explorer: full table with all columns visible
- Hero: large headline (48px+), dual CTAs inline

### Tablet (768px – 1024px)

- Tool cards: 2-column grid
- Article grid: 2-column grid
- Quiz entry: full-width, CTAs stacked
- Odds explorer: full table, horizontal scroll if needed
- Hero: medium headline (36px), dual CTAs stacked

### Mobile (< 768px)

- Tool cards: single column, stacked
- Article grid: single column, stacked
- Quiz entry: full-width, CTAs stacked vertically
- Odds explorer: card layout (one game per card, swipeable)
- Hero: headline 28px, CTAs stacked, full-width buttons
- Helpline strip: collapses to icon + number
- Tables: convert to card layouts

---

*Cross-references: [Application Guidelines](../../brand-book/07-application-guidelines.md) | [Core Messages](../../messaging/core-messages.md) | [Messaging Framework](../../brand-book/05-messaging-framework.md)*
