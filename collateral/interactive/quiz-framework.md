# Quiz & Interactive Content Framework

Quizzes are the highest-performing engagement format in player education. They consistently outperform static content on completion rates, time-on-page, social sharing, and return visits. They work because they're participatory — players aren't reading a lecture, they're testing themselves.

Important: quizzes are not tests. There is no pass/fail. Every answer — right or wrong — leads to an explanation. The goal is learning, not scoring. Frame every quiz as a conversation starter, not an exam.

> **How to use this file**: This is the structural and design reference for building quizzes within the {{PROGRAM_NAME}} system. For quiz content (questions, answers, explanations), see [`myth-busting.md`](../../messaging/myth-busting.md) and the [How to Play guides](../../how-to-play/) (each guide includes 3 game-specific quiz questions). For campaign integration, see [`campaigns.md`](../../messaging/campaigns.md). Visual styling follows [`_brand.yml`](../../_brand.yml).

---

## Quiz types

Not all questions work the same way. Match the format to the learning goal.

| Type | Format | Best for | Campaign fit |
|---|---|---|---|
| **Multiple choice** | 3–4 options, one correct | Odds literacy, myth-busting, factual knowledge | Know Your Game, Myth Busters |
| **True / False** | Binary choice | Quick myth-busting, social media hooks, low-friction entry points | Myth Busters (social posts) |
| **Slider / scale** | "How likely do you think..." with a draggable slider | Probability perception, calibrating intuition against reality | Know Your Game, Budget Boss |
| **Scenario-based** | "What would you do..." with 2–4 response options | Decision-making, applying knowledge to real situations | Your Call |
| **Estimation** | "How much does the average..." with free-text or range input | Budget awareness, anchoring to real numbers | Budget Boss, Session Sense |

### When to use each type

- **Multiple choice** is the default. It works everywhere, is easy to score, and produces clear explanations. Use it unless you have a reason not to.
- **True / False** is best for social media and low-commitment hooks. Two taps and you're in. Good for story polls and in-app cards.
- **Slider / scale** is powerful for probability questions because it reveals the gap between perception and reality. Requires more UI effort — use sparingly and for high-impact questions.
- **Scenario-based** questions don't have a "correct" answer in the traditional sense. Each response leads to a different explanation. Best for the Your Call campaign where the goal is reflection, not right/wrong.
- **Estimation** works well for budget and spending questions. The reveal (actual vs. estimated) creates a memorable learning moment.

---

## Quiz structure

### Length

**5 questions per quiz.** This is the completion-rate sweet spot. Shorter feels trivial, longer causes drop-off. For a flagship quiz (like the Game IQ Challenge), 10 questions is acceptable but should be the exception.

### Question anatomy

Each question has four parts:

| Part | What it is | When it appears |
|---|---|---|
| **Stem** | The question itself | Shown immediately |
| **Options** | 3–4 answer choices (or True/False, slider, etc.) | Shown with the stem |
| **Explanation** | Why the correct answer is correct — and why common wrong answers are wrong | Revealed after the player selects an answer |
| **Source** | Citation or reference for the factual claim | Displayed below the explanation, smaller text |

### Flow

1. Player sees the question stem and options
2. Player selects an answer
3. Selection is highlighted (emerald) — correct answer is revealed if different
4. Explanation appears inline, below the options — no page navigation
5. Player taps "Next" to advance (or swipes on mobile)
6. After the final question, the result screen appears

### Rules

- **No timer.** Timers create anxiety and exclude players who need more time. This is education, not a game show.
- **Players can go back** and change answers at any time before reaching the result screen.
- **Progress indicator** uses dots or a thin progress bar — not "Question 3 of 5." Numbered progress creates test anxiety. Dots convey position without pressure.
- **One question per screen.** No scrolling through a long form. Each question gets its own card.

---

## UI patterns

These are design specifications, not code. Implementation will vary by platform. All patterns follow `_brand.yml` for colors and fonts.

### Card-based layout

- Each question lives on its own card
- Cards advance via a "Next" button or horizontal swipe gesture
- Card transitions should feel smooth but quick — no elaborate animations
- Single column layout on all viewports (mobile-first; desktop adds padding, not columns)

### Touch targets

- All tappable options: **56px minimum height** (WCAG 2.5.5 Target Size)
- Spacing between options: **12px minimum** to prevent mis-taps
- "Next" and "Back" buttons: **48px minimum**, positioned in the thumb zone (bottom third of screen on mobile)

### Selection feedback

| State | Visual treatment |
|---|---|
| **Unselected** | Option card with border, neutral background |
| **Selected (before reveal)** | Emerald (`--color-accent`) highlight on the selected option |
| **Correct (after reveal)** | Green accent or checkmark icon on the correct option |
| **Incorrect (after reveal)** | Muted red or X icon on the selected option; correct option highlighted |
| **Explanation visible** | Explanation text appears inline below the options with a subtle slide-in |

### Explanation display

- Appears inline, directly below the answer options — the player stays on the same card
- Background: light tint of the accent color or a subtle card-within-card treatment
- Includes the source/citation in smaller text
- If the player answered correctly, the explanation reinforces why
- If the player answered incorrectly, the explanation addresses the specific misconception

### Result screen

- **Bold takeaway** at the top — the key learning point, not the score
- **Score context** in muted text — framed as comparison ("Here’s how the answer works"), not as a grade
- **Share button** — prominent, positioned for thumb reach
- **"Explore more" CTA** — links to related content from the same campaign pillar
- **{{PROGRAM_NAME}} branding** and helpline in the footer

### Mobile-first principles

- Single column, full-width cards
- CTAs in the bottom third (thumb zone)
- No hover states as primary interactions — everything works on tap
- Text sizes follow the typography scale in `_brand.yml` (minimum 16px body text)
- Test on 320px viewport width as the floor

---

## Content template

Use this template when writing a new 5-question quiz. Copy the structure and fill in each field.

```
QUIZ BRIEF
================================================================

Quiz title:       [e.g., "Slots: Myth vs. Fact"]
Campaign pillar:  [Know Your Game | Myth Busters | Budget Boss |
                   Session Sense | Your Call | Help Hub]
Target segment:   [e.g., casual players, sports bettors, new signups]
Quiz type:        [multiple choice | true/false | slider | scenario | estimation]

================================================================

QUESTION 1
----------
Stem:         [The question text]
Option A:     [Answer text]
Option B:     [Answer text]
Option C:     [Answer text] ✓  ← mark correct answer
Option D:     [Answer text]
Explanation:  [Why the correct answer is correct. Address the most
               common wrong answer specifically.]
Source:        [Citation, study, or regulatory reference]

QUESTION 2
----------
Stem:
Option A:
Option B:
Option C:     ✓
Option D:
Explanation:
Source:

QUESTION 3
----------
Stem:
Option A:
Option B:     ✓
Option C:
Option D:
Explanation:
Source:

QUESTION 4
----------
Stem:
Option A:
Option B:
Option C:
Option D:     ✓
Explanation:
Source:

QUESTION 5
----------
Stem:
Option A:     ✓
Option B:
Option C:
Option D:
Explanation:
Source:

================================================================

RESULT SCREEN COPY
------------------
Low (0–2):    [Encouraging message. Never shaming. Normalize the
               misconceptions and point to content.]
Mid (3–4):    [Acknowledge what they know. Highlight what trips
               the player chose incorrectly. Link to the explanation.]
High (5):     [Celebrate. Invite them to share and challenge friends.]

Related content link:  [URL or content reference]
Share CTA text:        [e.g., "Challenge a friend — share your result"]

================================================================
```

---

## Example quiz: Myth Busters — Common Gambling Misconceptions

A complete 5-question quiz ready for production.

```
QUIZ BRIEF
================================================================

Quiz title:       "Myth Busters: 5 Questions Worth Asking"
Campaign pillar:  Myth Busters
Target segment:   All players (general audience)
Quiz type:        Multiple choice

================================================================

QUESTION 1 — The Hot Hand
----------
Stem:         In an independent slot game, you’ve won four spins in a
              row. Do those wins improve the chance on spin five?
Option A:     Yes — winning runs improve the odds
Option B:     No — past wins do not change that chance ✓
Option C:     Only after a near miss
Explanation:  Independent results do not compensate for earlier wins
              or losses. A streak can happen without predicting the
              next result. This does not mean systems keep no records.
Source:       UK Gambling Commission, RTS 7 — Generation of random outcomes

QUESTION 2 — Due Numbers
----------
Stem:         On a fair European single-zero roulette wheel, number 17
              has not appeared in 60 spins. Is it more likely next?
Option A:     Yes — it is overdue
Option B:     No — it still has a 1-in-37 chance ✓
Option C:     Only if someone bets on it
Explanation:  There are 37 equally likely pockets in this example.
              Earlier spins do not change the next spin’s chance.
Source:       1 / 37; how-to-play/roulette.md

QUESTION 3 — Game Choice
----------
Stem:         Two slot games have different rules and paytables.
              Must they have the same return to player?
Option A:     Yes — all slots have the same math
Option B:     No — check each game’s rules and return information ✓
Option C:     Only the cabinet color matters
Explanation:  Games can have different mathematical models. Choosing
              a game is different from predicting its next independent
              result using a lucky hunch or its recent history.
Source:       how-to-play/slots.md — House edge and RTP

QUESTION 4 — What RTP Measures
----------
Stem:         What does an advertised 95% return to player describe?
Option A:     A promise to return $95 from your next $100 deposit
Option B:     The average share of total wagering returned over time ✓
Option C:     A promise that 95 of every 100 spins will win
Explanation:  RTP describes money wagered, including money wagered again.
              It does not predict your session, your deposit’s return,
              or how often a spin wins. Individual results can vary.
Source:       UK Gambling Commission — Return to player; how-to-play/slots.md

QUESTION 5 — Budget Check
----------
Stem:         You set a $40 entertainment budget and have spent $25.
              Do you need to spend the remaining $15?
Option A:     Yes — that is what the budget is for
Option B:     No — a budget is a limit, not a spending target ✓
Option C:     Yes — spending the full budget improves the next result
Explanation:  Your chosen limit does not require you to keep playing.
              You can stop with money left. Previous spending does not
              make a future independent result more likely to win.
Source:       messaging/core-messages.md — Deposit limits

================================================================

RESULT SCREEN COPY
------------------
Low (0–2):    "A useful starting point. Explore the explanations below."
Mid (3–4):    "You’ve got several of these. See how the other answers work."
High (5):     "Five out of five. Share what you learned with a friend."

Related content link:  {{PROGRAM_NAME}} content hub → Myth Busters
Share CTA text:        "Think you know the odds? Prove it."

================================================================
```

---

## Integration patterns

Quizzes work hardest when they're embedded across the player journey, not siloed on a content page.

### Content hub

- Quiz index page within the {{PROGRAM_NAME}} content hub
- Filterable by campaign pillar and topic
- Each quiz has a card: title, pillar tag, question count, estimated time ("2 min"), and a "Take the quiz" CTA
- Completed quizzes show the player's result and a "Retake" option

### Social media

- **Hook posts**: Lead with a surprising fact or question, end with "Take the quiz" CTA
  - Example: "Only 23% of players got this question right. Can you? Take the Myth Busters quiz — link in bio."
- **Shareable result cards**: Generated at quiz completion (see [Social sharing](#social-sharing) below)
- **Story polls**: Pull individual True/False questions from quizzes as Instagram/TikTok story polls. Reveal the answer on the next slide.

### Onboarding

- Offer a short quiz (3–5 questions) during the registration flow as an optional step
- Position it as "See how much you already know" — not as a gate or requirement
- Incentivize with a small reward (badge, loyalty points) if the operator supports it
- Use results to personalize the player's content feed (e.g., surface odds literacy content for players who missed probability questions)

### Email

- **Monthly quiz highlight**: Feature a new or popular quiz in the monthly {{PROGRAM_NAME}} newsletter
- **"New quiz" notifications**: Alert players when a quiz in their interest area goes live
- **Result teasers**: "Last month, 4,200 players took the Myth Busters quiz. The average score was 3.2 out of 5. Think you can beat it?"

### In-app

- **Activity dashboard**: Quiz cards appear alongside play stats and limit-setting tools
- **Post-session prompts**: After a session ends, surface a relevant quiz ("You just played 45 minutes of slots. How well do you know how they work?")
- **Game-adjacent placement**: Link to a relevant quiz from the game information / help section

---

## Scoring and results

### Philosophy

There are no fail states. Every score bracket leads to learning. The tone is always encouraging — never shaming, never clinical. Frame results as "here’s how the answer works" rather than "here's what you got wrong."

### Score brackets (5-question quiz)

| Score | Label | Result message | Next action |
|---|---|---|---|
| 0–2 | — | "You’ve got a starting point. Explore the explanations and see what you learn." | Link to explanations for each question they missed |
| 3–4 | — | "You know more than most — here's what trips people up." | Highlight the specific topics they missed, link to deeper content |
| 5 | — | "Expert level — share this quiz and see how your friends do." | Prominent share CTA, challenge friends |

### Score brackets (10-question quiz)

| Score | Result message |
|---|---|
| 0–3 | "Plenty to learn — and now you know it. That's the point. Explore the facts below." |
| 4–6 | "Not bad — but a few common myths caught you. Here's what you missed." |
| 7–8 | "Solid. You know more than most. A few myths still had you — see which ones." |
| 9–10 | "You're sharper than 95% of players. Share this with someone who needs it." |

### Rules for result copy

- Never display a raw score as the primary element. Lead with the message, show the score secondarily.
- Never use words like "fail," "wrong," "poor," or "bad."
- Always link to the detailed explanation for topics the player got wrong.
- Always include a share CTA — players who score well are the most likely to share.
- Always include an "Explore more" CTA linking to the campaign pillar's content.

---

## Accessibility

Quizzes must meet WCAG 2.1 Level AA. Interactive content is where accessibility most often breaks — test thoroughly.

### Keyboard navigation

| Key | Action |
|---|---|
| `Tab` | Move focus between answer options and buttons |
| `Enter` / `Space` | Select the focused option |
| `Arrow Up` / `Arrow Down` | Move between options within a radio group |
| `Escape` | Close any modal or overlay (if used) |

- Focus order follows the visual order: stem, then options top to bottom, then action buttons
- All interactive elements must have a visible focus indicator (minimum 2px outline, 3:1 contrast against adjacent colors)

### Screen reader behavior

| Event | Announcement |
|---|---|
| Question loads | "Question [n]. [Stem text]." |
| Focus on option | "[Option text]. Radio button, not selected." |
| Option selected | "[Option text]. Selected." |
| Answer revealed | "Correct" or "Incorrect. The correct answer is [text]." followed by the explanation text |
| Result screen | "Quiz complete. [Result message]." |

### Additional requirements

- **No time limits** on any quiz interaction
- **High contrast mode**: All quiz UI must remain usable in Windows High Contrast Mode and with `prefers-contrast: more`
- **Text resizing**: Quiz must remain functional at 200% browser zoom
- **Reduced motion**: Respect `prefers-reduced-motion` — disable slide transitions and animations
- **Touch target sizes**: 56px minimum on all tappable elements (already specified in UI patterns)

---

## Social sharing

### Shareable result card

Generated when a player completes a quiz. Uses Tier 1 visual identity.

| Element | Specification |
|---|---|
| Background | Navy (`--color-navy`) or dark variant from `_brand.yml` |
| Accent | Emerald (`--color-accent`) for highlights and score context |
| Quiz title | Displayed prominently at the top |
| Score context | Framed as insight, not raw score (e.g., "You know more than 80% of players") |
| CTA | "Take the quiz" with URL or QR code |
| Branding | {{PROGRAM_NAME}} logo + helpline number in footer |

### Platform sizing

| Platform | Dimensions | Notes |
|---|---|---|
| Instagram feed / stories share | 1080 x 1080 | Square format, works in feed and as share card |
| Facebook / X (Twitter) | 1200 x 628 | Landscape, optimized for link preview cards |
| Open Graph default | 1200 x 630 | Fallback for any platform that pulls OG tags |

### Open Graph tags

Every quiz page must include:

```html
<meta property="og:title" content="[Quiz Title] — {{PROGRAM_NAME}}" />
<meta property="og:description" content="[Hook text, e.g., 'Think you know the odds? 5 questions. 2 minutes.']" />
<meta property="og:image" content="[URL to 1200x630 share card image]" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:url" content="[Canonical quiz URL]" />
```

### Share mechanics

- **Share button** triggers the native share sheet on mobile (Web Share API) or copies a link on desktop
- **Result card** is generated client-side or served as a pre-rendered image from the quiz platform
- **Share text** is pre-populated but editable by the player: "[Result message] Take the quiz: [URL]"
- **Helpline number** is always visible on the share card — this is non-negotiable

---

## Operator customization

### What operators can customize

| Element | How | Reference |
|---|---|---|
| **Colors and fonts** | Update `_brand.yml` — quiz UI inherits automatically | `_brand.yml` |
| **Logo** | Swap the {{PROGRAM_NAME}} logo for the operator's program logo | Logo assets in `visual-identity/logo/` |
| **Custom questions** | Add operator-specific questions using the content template above | This document |
| **Result screen CTA** | Link to operator-specific tools (e.g., deposit limits, session reminders) | Operator config |
| **Social sharing** | Enable or disable the share button and result card generation | Operator config |
| **Helpline number** | Replace `{{HELPLINE_NUMBER}}` with the jurisdiction-appropriate helpline | `_brand.yml` |
| **Quiz selection** | Choose which quizzes to deploy from the available library | Content hub config |

### What operators cannot change

- The quiz structure (5 questions, no timer, no pass/fail) — this is core to the pedagogical model
- The explanation-after-every-answer pattern — without it, the quiz becomes a test
- The encouraging tone of result messages — no shaming language, no clinical framing
- The helpline presence on share cards — required for responsible distribution

### Adding custom questions

Operators can extend any quiz with custom questions relevant to their platform. Custom questions must:

1. Follow the content template format (stem, options, correct answer, explanation, source)
2. Be factually accurate and cite a source
3. Use {{PROGRAM_NAME}} voice and tone (see brand book, Chapter 4)
4. Not promote specific products, bonuses, or commercial offers
5. Be reviewed against the message quality checklist in `05-messaging-framework.md`

---

## Metrics

Track these to measure quiz performance and inform content iteration.

| Metric | What it tells you | Target |
|---|---|---|
| **Completion rate** | Are players finishing the quiz? | >70% of starters finish |
| **Question drop-off** | Which question causes the most exits? | No single question >15% drop-off |
| **Average score** | Is the quiz too easy or too hard? | 2.5–3.5 out of 5 (sweet spot for learning) |
| **Most-missed question** | Which misconception is most prevalent? | Use for content prioritization |
| **Share rate** | Are players sharing their results? | >10% of completers share |
| **Return rate** | Are players coming back for new quizzes? | >20% take a second quiz within 30 days |
| **Content click-through** | Are players exploring related content from the result screen? | >25% click "Explore more" |
| **Time per question** | Are players reading explanations or rushing through? | 8–15 seconds average indicates reading |

---

*Related documents: [Myth-Busting Content Library](../../messaging/myth-busting.md) | [Campaign Briefs](../../messaging/campaigns.md) | [Messaging Framework](../../brand-book/05-messaging-framework.md) | [Accessibility](../../brand-book/06-accessibility.md)*

## Creative decisions — September 2026

Use the refreshed [creative review](../creative-review/README.md) and rendered masters when adapting this material. Keep the game variant and example assumptions beside a statistic. House edge describes expected loss over time; a budget is a chosen limit. Match feature timing and support availability to the configured operator.
