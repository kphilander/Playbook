# Rack Card — 4x9" Quick Reference

Two-sided rack card spec for {{PROGRAM_NAME}}. Portable quick reference for card racks, host desks, and venue exits.

> **Operator note**: Replace all `{{PLACEHOLDER}}` tokens with values from `_brand.yml`. QR codes must be tested before print runs. Helpline number minimum 14pt bold. See [application guidelines](../../brand-book/07-application-guidelines.md#print-applications) for print design rules.

---

## Quick-scan index

| Side | Content |
|---|---|
| [Front](#front) | Headline, 3 key facts, QR code, helpline |
| [Back](#back) | Tool overview, quiz CTA, support resources |

---

## Print specs

| Property | Value |
|---|---|
| **Size** | 4 x 9 inches (102 x 229mm) |
| **Render dimensions** | 800 x 1800px (2x for screen rendering) |
| **Bleed** | 0.125" (3mm) on all sides |
| **Safe zone** | 0.25" (6mm) inside trim |
| **Color mode** | CMYK |
| **Resolution** | 300 DPI minimum |
| **Paper** | 14pt coated card stock, gloss or silk |
| **Corners** | Optional rounded (0.125" radius) |

> **Visual reference**: See [`render/rack-card-5a.html`](../render/rack-card-5a.html) for the front-side HTML template render.

---

## Front

| Element | Content |
|---|---|
| **Background** | Navy `#1B2838` |
| **Accent bar** | 4px gradient strip at top: orange `#FF6B35` → teal `#00D4AA` |
| **Logo** | {{PROGRAM_NAME}} wordmark, horizontal (B2) layout, reversed variant (white Play + teal BOOK on navy bg), top-left. Min height 0.25" (print). Maintain 1x logo-height clear space on all sides. Below 0.25", use logomark only. See [logo system](../../brand-book/03-visual-identity.md#1-logo-system) |
| **Operator logo** | `[Your logo here]` placeholder, top-right. Co-branding: {{PROGRAM_NAME}} logo no smaller than 60% of operator logo height; vertical divider (neutral_300 `#A8A8C0`, 1px) between logos |
| **Pillar badge** | `OPEN` (teal pill) |
| **Headline** | Every game has math. Here's yours. |
| **Headline specs** | Inter 800, white, minimum 24pt |

### 3 key facts

| # | Stat | Context |
|---|---|---|
| 1 | **0.5%** | Blackjack house edge — best odds in the casino |
| 2 | **5.26%** | American roulette house edge — double zero, double edge |
| 3 | **2–15%** | Slots house edge — varies by machine and casino |

| Element | Content |
|---|---|
| **Stat display** | Large number (Inter 900, teal), supporting text (Source Sans 3, `#A8A8C0`) |
| **Callout** | Knowing the edge helps you pick your games and set your budget. |

### QR code block

| Element | Content |
|---|---|
| **QR code** | Links to {{CONTENT_HUB_URL}} |
| **Label** | Scan for the facts |
| **QR size** | Minimum 0.75" x 0.75" |

### Helpline strip

| Element | Content |
|---|---|
| **Background** | Lighter navy `#2A3F56` strip, full width |
| **Text** | Free, confidential support 24/7: {{HELPLINE_NUMBER}} |
| **Typography** | Source Code Pro 600, white, minimum 14pt bold |

---

## Back

| Element | Content |
|---|---|
| **Background** | White |
| **Accent bar** | 4px gradient strip at top: orange → teal |

### Tool overview

| Element | Content |
|---|---|
| **Section label** | YOUR TOOLS (teal, uppercase) |
| **Intro** | Features that put you in control — all in your account settings. |

| Tool | One-liner |
|---|---|
| **Deposit limits** | Set your entertainment budget. Takes 10 seconds. |
| **Session reminders** | Stay aware. Set your interval. |
| **Activity dashboard** | Your play stats at a glance. No surprises. |
| **Game IQ quiz** | Test your odds knowledge. Challenge your friends. |

### Quiz CTA

| Element | Content |
|---|---|
| **Headline** | Think you know the odds? |
| **Body** | 7 questions. 2 minutes. Most people get question 3 wrong. |
| **CTA** | Take the quiz → {{QUIZ_URL}} |
| **QR code** | Links to quiz |

### Support resources

| Element | Content |
|---|---|
| **Headline** | Need to talk? |
| **Body** | Free, confidential support is available 24/7. |
| **Call** | {{HELPLINE_NUMBER}} |
| **Text** | {{TEXT_NUMBER}} |
| **Chat** | {{CHAT_URL}} |

### Footer

| Element | Content |
|---|---|
| **Legal** | You must be {{MIN_AGE}}+ to gamble. Gambling involves risk. Play on your terms. |
| **URL** | {{CONTENT_HUB_URL}} |

---

*Cross-references: [Application Guidelines — Print](../../brand-book/07-application-guidelines.md#print-applications) | [Core Messages](../../messaging/core-messages.md) | [HTML template](../render/rack-card-5a.html)*
