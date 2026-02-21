# Core Messages

Jurisdiction-agnostic messages organized by use case, ready to deploy at any touchpoint. Each message is tagged with its pillar, tone register, tier, and maximum character count.

> **Operator note**: Replace `{{PROGRAM_NAME}}`, `{{HELPLINE_NUMBER}}`, and `{{MIN_AGE}}` with your values from `_brand.yml`. All messages are Tier 1 unless marked Tier 2. Verify regulatory compliance messages against your jurisdiction requirements before deploying.

---

## Quick-scan index

| Section | Messages | Primary use |
|---|---|---|
| [Pillar messages](#pillar-messages) | 16 | Campaign headlines, landing page leads, content section intros |
| [Contextual messages by touchpoint](#contextual-messages-by-touchpoint) | 36 | In-app screens, notifications, transactional moments |
| [Seasonal / event messages](#seasonal--event-messages) | 12 | Campaigns timed to sporting events, holidays, awareness weeks |
| [Regulatory compliance messages](#regulatory-compliance-messages) | 10 | Age verification, T&C, jurisdiction disclaimers |

---

## Pillar messages

Expanded from the Level 2 message hierarchy in the [messaging framework](../brand-book/05-messaging-framework.md). Each pillar has a primary message plus supporting variants for different contexts.

### Open — Transparency and odds literacy

| # | Message | Context | Tone | Tier | Max chars |
|---|---|---|---|---|---|
| O-1 | "The house edge on blackjack is 0.5%. On slots, it's 2–15%. On American roulette, it's 5.26%. Now you know." | Campaign headline, landing page lead | Confident / Informative | 1 | 120 |
| O-2 | "Every game has a house edge. It's how the business works. Knowing the edge helps you pick your games and set your budget." | Educational content intro, game guides | Confident / Informative | 1 | 140 |
| O-3 | "No fine print. Just the real numbers behind the games you play." | Hero banner, campaign tagline support | Confident / Informative | 1 | 70 |
| O-4 | "The odds are public information. We just make them interesting." | Social media, content hub intro | Playful / Witty | 1 | 65 |

### Social — Shareable knowledge

| # | Message | Context | Tone | Tier | Max chars |
|---|---|---|---|---|---|
| S-1 | "Share this with the friend who thinks they have a 'system.'" | Social media hook, quiz share prompt | Playful / Witty | 1 | 65 |
| S-2 | "The best players know the game. Now you can too." | Community content, social proof | Confident / Informative | 1 | 55 |
| S-3 | "How well do you really know the odds? There's one way to find out." | Quiz promotion, social engagement | Playful / Witty | 1 | 75 |
| S-4 | "Facts worth sharing. Knowledge worth having." | Content hub header, newsletter intro | Confident / Informative | 1 | 50 |

### Tools — Features that work for you

| # | Message | Context | Tone | Tier | Max chars |
|---|---|---|---|---|---|
| T-1 | "Deposit limits take 10 seconds to set. It's like a seatbelt for your bankroll — you set it once and it works in the background." | Feature promotion, tool onboarding | Confident / Informative | 1 | 130 |
| T-2 | "Your tools. Your limits. Your call." | Account settings header, feature overview | Confident / Informative | 1 | 40 |
| T-3 | "Set your budget before you play. It's the one decision that makes every other decision easier." | Deposit flow, onboarding | Warm / Direct | 1 | 100 |
| T-4 | "Play stats, session history, spending patterns — it's all in your dashboard. No surprises." | Activity dashboard promotion | Confident / Informative | 1 | 100 |

### Help — Support without barriers

| # | Message | Context | Tone | Tier | Max chars |
|---|---|---|---|---|---|
| H-1 | "Need to talk? Free, confidential, 24/7. {{HELPLINE_NUMBER}}" | Helpline display, all touchpoints | Warm / Direct | 2 | 60 |
| H-2 | "Free, confidential support — for any question about gambling. No judgment. Ever." | Support page header, help section | Warm / Direct | 2 | 80 |
| H-3 | "You can pause your account for as long as you need. Here's how." | Self-exclusion entry point | Warm / Direct | 2 | 65 |
| H-4 | "Support is one tap away. Whenever you're ready." | Footer, persistent help link | Warm / Direct | 2 | 50 |

---

## Contextual messages by touchpoint

Expanded from the Level 3 contextual messages in the [messaging framework](../brand-book/05-messaging-framework.md). Each message is designed for a specific moment in the player journey.

### Deposit screen

| # | Message | Tone | Tier | Max chars |
|---|---|---|---|---|
| D-1 | "Setting a deposit limit? Smart move. Pick your number and play without second-guessing." | Confident / Informative | 1 | 90 |
| D-2 | "Think of this as your entertainment budget for the week. You pick the number." | Warm / Direct | 1 | 80 |
| D-3 | "Your deposit limit is set. Adjust it anytime in settings." | Celebratory | 1 | 55 |
| D-4 | "You've hit your deposit limit for this period. It resets {{RESET_DATE}}. That's you playing on your own terms." | Warm / Direct | 1 | 110 |

### Session reminder

| # | Message | Tone | Tier | Max chars |
|---|---|---|---|---|
| SR-1 | "You've been playing for {{DURATION}}. Most sessions average about 45 minutes. Keep going or take a break?" | Confident / Informative | 1 | 110 |
| SR-2 | "Quick check-in: you've been at it for {{DURATION}}. How's it going?" | Warm / Direct | 1 | 70 |
| SR-3 | "Time flies when you're playing. That's by design. Here's your session update." | Playful / Witty | 1 | 80 |
| SR-4 | "Session update: {{DURATION}} so far. Want to set a reminder for next time?" | Confident / Informative | 1 | 75 |

### Activity dashboard

| # | Message | Tone | Tier | Max chars |
|---|---|---|---|---|
| AD-1 | "Your play stats are ready. See where your money goes — no surprises." | Confident / Informative | 1 | 70 |
| AD-2 | "Here's your activity summary for {{PERIOD}}. Knowledge is a feature." | Confident / Informative | 1 | 70 |
| AD-3 | "Your monthly activity summary is in. Take a look — it takes 30 seconds." | Warm / Direct | 1 | 75 |
| AD-4 | "{{TOTAL_SESSIONS}} sessions this month. {{TOTAL_TIME}} total play time. Here's the full picture." | Confident / Informative | 1 | 90 |

### Login / welcome back

| # | Message | Tone | Tier | Max chars |
|---|---|---|---|---|
| LI-1 | "Welcome back. Your limits are active and your dashboard is up to date." | Confident / Informative | 1 | 75 |
| LI-2 | "Good to see you. Quick reminder: your deposit limit is set to {{LIMIT_AMOUNT}} this {{PERIOD}}." | Warm / Direct | 1 | 100 |
| LI-3 | "You're back. Your tools are ready. Have fun." | Playful / Witty | 1 | 50 |

### Post-loss

| # | Message | Tone | Tier | Max chars |
|---|---|---|---|---|
| PL-1 | "Tough session. Your activity summary is in your dashboard if you want to review it." | Warm / Direct | 1 | 85 |
| PL-2 | "Every session has a cost — that's how entertainment works. Your budget helps you manage it." | Confident / Informative | 1 | 100 |
| PL-3 | "Want to talk it through? Free, confidential support: {{HELPLINE_NUMBER}}" | Warm / Direct | 2 | 70 |

### Win celebration

| # | Message | Tone | Tier | Max chars |
|---|---|---|---|---|
| WC-1 | "Nice win. Quick reminder: the house edge is still the house edge. Enjoy the moment." | Confident / Informative | 1 | 85 |
| WC-2 | "You're up. This is a great time to check your limits or call it a session." | Warm / Direct | 1 | 75 |
| WC-3 | "Great session. Your activity summary has the full breakdown." | Celebratory | 1 | 60 |

### Account settings

| # | Message | Tone | Tier | Max chars |
|---|---|---|---|---|
| AS-1 | "Your tools live here. Deposit limits, session reminders, activity summary — all in one place." | Confident / Informative | 1 | 100 |
| AS-2 | "Manage your limits, review your activity, or update your preferences. Your account, your rules." | Confident / Informative | 1 | 100 |

### Onboarding

| # | Message | Tone | Tier | Max chars |
|---|---|---|---|---|
| OB-1 | "Welcome. Before you dive in, here are three things that take less than a minute and make everything better." | Warm / Direct | 1 | 110 |
| OB-2 | "Step 1: Set your budget. Step 2: Set your pace. Step 3: Check your game IQ. That's it. You're ready." | Confident / Informative | 1 | 105 |
| OB-3 | "New here? Start with the 60-second odds quiz. Most people get question 3 wrong." | Playful / Witty | 1 | 80 |

### Exit / session end

| # | Message | Tone | Tier | Max chars |
|---|---|---|---|---|
| EX-1 | "Walking away while you're still enjoying yourself is a power move. See you next time." | Confident / Informative | 1 | 85 |
| EX-2 | "Session over. Your activity summary is ready for review." | Confident / Informative | 1 | 55 |
| EX-3 | "Thanks for playing. Your limits and tools are always here when you come back." | Warm / Direct | 1 | 80 |

---

## Seasonal / event messages

Timed messages for cultural moments when gambling conversation peaks naturally. Pair with campaign briefs in [`campaigns.md`](campaigns.md).

### Major sporting events

| # | Event | Message | Tone | Tier | Max chars |
|---|---|---|---|---|---|
| SE-1 | Super Bowl / Championship final | "Big game coming up. Know the odds before you place the bet — here's how the lines actually work." | Confident / Informative | 1 | 100 |
| SE-2 | March Madness / Tournament season | "Bracket season is here. Before you fill yours out, here's what the math says about your chances." | Playful / Witty | 1 | 100 |
| SE-3 | World Cup / International tournament | "The whole world is watching. Here's what you should know about betting on the beautiful game." | Confident / Informative | 1 | 100 |
| SE-4 | Racing events (Derby, Grand National) | "Big race day? Know your odds. A 10/1 shot means exactly what it says — here's the breakdown." | Confident / Informative | 1 | 95 |

### New year / fresh start

| # | Event | Message | Tone | Tier | Max chars |
|---|---|---|---|---|---|
| NY-1 | New Year | "New year, same math. But here's a resolution that actually works: set your entertainment budget before you play." | Confident / Informative | 1 | 115 |
| NY-2 | New Year | "Start the year with your limits set and your tools active. It takes 30 seconds." | Warm / Direct | 1 | 75 |

### Awareness weeks

| # | Event | Message | Tone | Tier | Max chars |
|---|---|---|---|---|---|
| AW-1 | Responsible Gambling Week | "This week is about knowing the facts, using the tools, and playing on your terms. Here's how to get started." | Confident / Informative | 1 | 110 |
| AW-2 | Responsible Gambling Week | "Free, confidential support is available 24/7. For any question about gambling. {{HELPLINE_NUMBER}}" | Warm / Direct | 2 | 95 |
| AW-3 | Problem Gambling Awareness Month | "This month, we're sharing the numbers behind the games. No scare tactics. Just facts you can use." | Confident / Informative | 1 | 100 |
| AW-4 | Mental Health Awareness | "Your mental health matters more than any game. If gambling doesn't feel fun, it's okay to step back. {{HELPLINE_NUMBER}}" | Warm / Direct | 2 | 115 |

### Holiday periods

| # | Event | Message | Tone | Tier | Max chars |
|---|---|---|---|---|---|
| HP-1 | Holiday season | "Holiday entertainment budget: set it before the fun starts. Your future self will thank you." | Confident / Informative | 1 | 90 |
| HP-2 | Holiday season | "More time off means more time to play. Set a session reminder so you stay in control of your schedule." | Warm / Direct | 1 | 105 |

---

## Regulatory compliance messages

Required messaging with on-brand framing. Always verify against your jurisdiction's exact requirements — these templates provide the Playbook voice while meeting the spirit of common regulations.

> **Operator note**: Some jurisdictions mandate exact wording. In those cases, use the required text as-is and surround it with on-brand context. See `jurisdictions/` for territory-specific requirements.

### Age verification

| # | Message | Context | Max chars |
|---|---|---|---|
| RC-1 | "You must be {{MIN_AGE}}+ to gamble. It's the law — and it's here to protect you." | Account creation, age gate | 70 |
| RC-2 | "This platform is for players aged {{MIN_AGE}} and over. Age verification is required to play." | Registration flow | 85 |

### Terms and conditions

| # | Message | Context | Max chars |
|---|---|---|---|
| RC-3 | "Gambling involves risk. Play on your terms — with your budget, your limits, and the facts." | Footer, general disclaimer | 85 |
| RC-4 | "Before you play, here's what you should know: the odds, the costs, and the tools available to you." | T&C intro, onboarding | 95 |

### Helpline display (mandatory)

| # | Message | Context | Max chars |
|---|---|---|---|
| RC-5 | "Free, confidential support is available 24/7 — for any question about gambling. {{HELPLINE_NUMBER}}" | Mandatory helpline, all touchpoints | 95 |
| RC-6 | "Call {{HELPLINE_NUMBER}} | Text {{TEXT_NUMBER}} | Chat at {{CHAT_URL}}" | Compact helpline bar, footer | 70 |

### Jurisdiction disclaimers

| # | Message | Context | Max chars |
|---|---|---|---|
| RC-7 | "{{PROGRAM_NAME}} is operated by {{ORGANIZATION}} and licensed in {{JURISDICTION}}." | Footer, about page | 80 |
| RC-8 | "Gambling is regulated in your jurisdiction. For more information, visit {{REGULATOR_URL}}." | Legal info page | 85 |

### Promotional disclaimers

| # | Message | Context | Max chars |
|---|---|---|---|
| RC-9 | "Promotional terms apply. Read the full T&Cs before opting in — we've made them readable." | Promo offers, bonus pages | 85 |
| RC-10 | "That '200% match bonus' has a 30x wagering requirement. Here's what that actually means in real money." | Promotions education | 100 |

---

## Message tagging reference

All messages in this file use this tagging system for quick filtering:

| Tag | Values | Purpose |
|---|---|---|
| **Pillar** | Open, Social, Tools, Help | Which brand pillar the message supports |
| **Tone** | Playful / Witty, Confident / Informative, Warm / Direct, Celebratory | Which register from the [tone spectrum](../brand-book/04-voice-and-tone.md#tone-spectrum) |
| **Tier** | 1, 2 | Tier 1 = entertainment literacy; Tier 2 = support crossover |
| **Max chars** | Number | Maximum character count including spaces, for channel constraints |

---

*Cross-references: [Messaging Framework](../brand-book/05-messaging-framework.md) | [Tagline System](tagline-system.md) | [Calls to Action](calls-to-action.md) | [Tone Examples](tone-examples.md)*
