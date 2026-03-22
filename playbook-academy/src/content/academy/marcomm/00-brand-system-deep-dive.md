---
content_type: training-module
title: "Brand System Deep Dive"
program_id: marcomm
module_number: 0
pillar: [open, social]
tier: 1
tone: [confident-informative]
reading_level: adult
audience_role:
  - marcomm
duration_minutes: 60
prerequisites:
  - all-employees/00-welcome-to-playbook.md
  - all-employees/01-two-tier-system.md
learning_objectives:
  - "Navigate the {{PROGRAM_NAME}} brand system architecture: _brand.yml, brand book, visual identity, messaging, and collateral"
  - "Apply the six voice principles and four tone registers to content creation"
  - "Use the 5-dimension cultural adaptation framework to adapt content for different markets"
  - "Identify and correct visual identity violations using the brand specifications"
exercises:
  - identify-issue
  - drag-and-drop
  - scenario
test_questions: 5
passing_score: 80
cultural_profile:
  voice: peer
  framing: individual
  humor: irreverent
  directness: blunt
  comfort: open
adaptation_status: base
adaptation_notes: |
  Cultural adaptation section should reference the target market's
  cultural profile. Visual identity examples may need local
  typography equivalents for non-Latin scripts.
last_updated: "2025-03-21"
---

# Brand System Deep Dive

This module walks through the complete {{PROGRAM_NAME}} brand system — from the configuration engine that drives everything to the visual identity specs, voice principles, and cultural adaptation framework. By the end, you'll understand how every piece fits together and be able to evaluate any content against the brand standard.

> **Operator note**: This module references the main Playbook repository extensively. Ensure your team has access to the repo or its documentation before deploying. Adapt visual identity examples to reflect your operator's `_brand.yml` configuration.

**Program:** Marcomm | **Duration:** ~60 min | **Prerequisites:** All Employees (both modules)

---

## Quick-scan index

| Section | What it covers | Time |
|---------|----------------|------|
| [Learning objectives](#learning-objectives) | What you'll know after this module | — |
| [Section 1: The Configuration Engine](#section-1-the-configuration-engine) | `_brand.yml`, the placeholder system, how the brand cascades | ~15 min |
| [Section 2: Voice and Tone Mastery](#section-2-voice-and-tone-mastery) | Six voice principles, four tone registers, sample rewrites | ~15 min |
| [Section 3: Visual Identity System](#section-3-visual-identity-system) | Color, typography, logo, iconography, photography | ~15 min |
| [Section 4: Cultural Adaptation](#section-4-cultural-adaptation) | The 5-dimension framework for adapting content across markets | ~10 min |
| [Module test](#module-test) | 5 graded questions, 80% to pass | ~5 min |
| [Key takeaways](#key-takeaways) | Summary | — |
| [References](#references) | Links to Playbook brand assets | — |

---

## Learning objectives

After completing this module, you will be able to:

1. Navigate the {{PROGRAM_NAME}} brand system architecture: `_brand.yml`, brand book, visual identity, messaging, and collateral
2. Apply the six voice principles and four tone registers to content creation
3. Use the 5-dimension cultural adaptation framework to adapt content for different markets
4. Identify and correct visual identity violations using the brand specifications

---

## Section 1: The Configuration Engine

### Reading

The entire {{PROGRAM_NAME}} brand system is driven by a single file: **`_brand.yml`**. This is the configuration engine. When an operator forks the repository, they edit this one file — program name, colors, fonts, helpline numbers, taglines — and the changes cascade across every touchpoint.

Throughout the repo, content files use `{{PLACEHOLDER}}` tokens that reference values in `_brand.yml`. Common tokens include:
- `{{PROGRAM_NAME}}` — the operator's program name (default: "Playbook")
- `{{HELPLINE_NUMBER}}` — the jurisdiction-specific helpline
- `{{MIN_AGE}}` — the minimum gambling age for the jurisdiction

**The repo architecture:**

| Directory | What it contains | Who uses it |
|-----------|-----------------|-------------|
| `_brand.yml` | Master configuration | Everyone — the single source of truth |
| `brand-book/` | 10 chapters of brand guidelines | Strategy, creative leads |
| `visual-identity/` | Design tokens, logos, color, typography, icons | Designers |
| `messaging/` | 74 core messages, taglines, CTAs, player segments | Copywriters, content creators |
| `collateral/` | 41 templates across all channels | Production teams |
| `how-to-play/` | Game education guides | Content creators |
| `jurisdictions/` | Regulatory compliance modules | Compliance, legal |

**The adaptive identity model.** {{PROGRAM_NAME}} is *recognizable but adaptive*. The structural patterns (message hierarchy, content architecture, layout principles) stay consistent across operators. The visual surface (colors, fonts, logo) adapts to each operator's brand. A player who encounters {{PROGRAM_NAME}}-based content at one platform intuitively recognizes the content structure at another — even though they look different.

### Narrator Script

> **Narrator:** [transition slide] Welcome to the deep dive. You've learned what {{PROGRAM_NAME}} is and how it sounds. Now let's look at how the whole system works under the hood.
>
> [show _brand.yml] Everything starts with one file: `_brand.yml`. This is the configuration engine. An operator forks the repo, edits this file — their name, their colors, their helpline numbers — and the entire brand cascades.
>
> [show repo map] The repo has a clear architecture. Brand book for strategy. Visual identity for designers. Messaging for copywriters. Collateral for production. Jurisdictions for compliance. And `_brand.yml` ties them all together through placeholder tokens.
>
> [show adaptive identity diagram] Here's the key concept: {{PROGRAM_NAME}} is recognizable but adaptive. The structural patterns are consistent. The visual surface changes per operator. A player sees the same kind of material — same structure, same approach — at different operators, even though it looks different.
>
> [transition to exercise] Let's make sure you can navigate this architecture.

### Exercise: Map the System

**Type:** drag-and-drop

**Instructions:** Match each asset to the correct directory in the {{PROGRAM_NAME}} repo.

| Asset | Correct Directory | Feedback (correct) | Feedback (incorrect) |
|-------|------------------|-------------------|---------------------|
| "Stigma-free language guide" | messaging/ | Correct — language guidance lives with the messaging library. | The language guide is part of the messaging system — it defines how we talk about things. |
| "Logo SVG files" | visual-identity/ | Right — all design assets including logos live in visual-identity/. | Logos are design assets — they live in visual-identity/logo/. |
| "Nevada advertising rules" | jurisdictions/ | Yes — jurisdiction-specific regulatory content lives in jurisdictions/. | Regulatory content specific to a jurisdiction lives in jurisdictions/{country}/{state}/. |
| "Email template HTML" | collateral/ | Correct — production-ready templates across all channels live in collateral/. | Templates for specific channels (email, print, social) live in collateral/{channel}/. |
| "How slot machines work" | how-to-play/ | Right — game education guides live in how-to-play/. | Game guides and quick-reference cards live in how-to-play/. |
| "Operator's program name and helpline number" | _brand.yml | Exactly — all customizable values resolve from _brand.yml. | _brand.yml is the single source of truth for all operator-specific values. |

---

## Section 2: Voice and Tone Mastery

### Reading

You covered the two tiers in All Employees. Now let's go deeper into the voice system that powers both.

**The six voice principles** (non-negotiable, every piece of content):

1. **Informed, not alarming** — "Here's how it works" beats "Here's what could go wrong." Lead with knowledge, not warnings.
2. **Your choice, your tools** — We provide information and tools. You decide. Never tell players what to do.
3. **Specific, not sloganeering** — Name concrete behaviors ("set a budget," "know the odds") instead of generic labels ("responsible gambling").
4. **Fun is the point** — Gambling is entertainment. Our content should reflect that — understanding it better makes it more enjoyable, not less.
5. **Real talk** — No corporate hedging, no clinical jargon, no condescension. Short sentences, common words, Grade 6-8 reading level.
6. **Inclusive by default** — Works for everyone: all ages, genders, cultures, gambling preferences.

**The four tone registers:**

| Register | Used for | Sounds like |
|----------|----------|-------------|
| **Playful / Witty** | Myth-busting, quizzes, social media | Dollar Shave Club energy — confident, cheeky |
| **Confident / Informative** | How-it-works, tool promotion, odds | Smart friend explaining something useful |
| **Warm / Direct** | Tier 2 moments — support, crisis | Calm, clear, empathetic — no humor |
| **Celebratory** | When players use tools or complete quizzes | Quiet confidence — "That's a power move" |

**The rewrite test.** The fastest way to check if content is on-brand: rewrite the same message in "compliance voice" vs. "{{PROGRAM_NAME}} voice."

- **Compliance**: "In accordance with responsible gaming policies, players may elect to establish voluntary deposit restriction parameters via account settings."
- **{{PROGRAM_NAME}}**: "Set your deposit limit. It takes 10 seconds. Go on, we'll wait."

Same information. Completely different experience.

### Narrator Script

> **Narrator:** [transition slide] In All Employees, you learned about Tier 1 and Tier 2. Now let's master the full voice system.
>
> [show six principles] Six principles. Non-negotiable. They apply to everything — from a push notification to a venue poster. [walk through each briefly] Informed, not alarming. Your choice, your tools. Specific, not sloganeering. Fun is the point. Real talk. Inclusive by default.
>
> [show four registers] The voice has four tone registers. [walk through table] Playful for myth-busting. Confident for education. Warm for support. Celebratory when players do good things.
>
> [show rewrite comparison] Here's the test that will train your ear. Take any compliance-style message and rewrite it in {{PROGRAM_NAME}} voice. If the rewrite is shorter, clearer, and more human — you've got it.
>
> [transition to exercise] Now let's identify some violations.

### Exercise: Spot the Voice Violation

**Type:** identify-issue

**Instructions:** Each content sample below violates one or more of the six voice principles. Identify which principle is violated and explain why.

| Content Sample | Violated Principle | Feedback |
|---------------|-------------------|----------|
| "The odds are stacked against you in every game you play." | Informed, not alarming | This leads with fear, not information. Better: "Every game has a house edge. Here's what that means for your budget." |
| "We strongly recommend that all players establish responsible gaming parameters." | Your choice, your tools + Specific, not sloganeering | Two violations: "we strongly recommend" is prescriptive (principle 2), and "responsible gaming parameters" is generic jargon (principle 3). Better: "Deposit limits are available in your settings." |
| "Be aware of the serious risks associated with gambling activities." | Fun is the point + Informed, not alarming | Treats gambling as inherently dangerous and leads with fear. Better: "Know the house edge before you sit down. It helps you play on your terms." |
| "Pursuant to regulatory obligations, the following information regarding self-exclusion methodologies is provided for your consideration." | Real talk | Corporate hedging, clinical jargon, and condescension — all in one sentence. Better: "You can pause your account for as long as you need. Here's how." |

---

## Section 3: Visual Identity System

### Reading

The visual identity is designed to feel like it belongs on a gaming platform, not a health website. Key components:

**Color system.** The default palette:
- Primary: Deep navy (`#1B2838`) — brand identification
- Secondary: Electric teal (`#00D4AA`) — interactive, energetic
- Accent: Bold orange (`#FF6B35`) — CTAs, highlights
- Semantic: success (green), warning (amber), danger (red), info (blue)

All foreground/background combinations must pass WCAG 2.1 AA contrast ratios (4.5:1 for body text, 3:1 for large text and UI elements).

**Typography.** Three font families:
- Inter (headings) — clean, modern, strong hierarchy through weight variation
- Source Sans 3 (body) — highly legible, designed for screen reading
- Source Code Pro (data/numbers) — monospace for odds, statistics, tables

**Logo system.** Text-based wordmark: "Play" in heavy weight, "BOOK" in light uppercase. Available in stacked (square) and horizontal (wide) layouts, with primary (full color), reversed (on dark), and mono (single color) variants.

**Photography direction.** People enjoying entertainment — natural moments, diverse representation, real environments. Not: staged smiles, casino cliches, money imagery, or clinical settings.

### Narrator Script

> **Narrator:** [transition slide] The visual identity is what players see first. It determines whether they think "this looks like part of my gaming experience" or "this looks like a health warning someone made them put here."
>
> [show color palette] The default palette is built around navy, teal, and orange. It feels like a gaming platform, not a clinic. Every color combination passes accessibility contrast standards.
>
> [show typography] Three font families handle different jobs. Inter for headings — clean and strong. Source Sans 3 for body — built for screens. Source Code Pro for numbers and data.
>
> [show logo] The logo is a text-based wordmark. "Play" in heavy weight, "BOOK" in light uppercase. Simple, adaptable, no complex illustration.
>
> [show photography examples] Photography shows people enjoying entertainment. Natural moments, real environments. Never staged, never clinical, never money-focused.

### Exercise: Visual Identity Audit

**Type:** identify-issue

**Instructions:** Each scenario describes a visual identity decision. Identify whether it's correct or incorrect, and explain why.

| Scenario | Correct or Incorrect? | Feedback |
|----------|---------------------|----------|
| "A designer uses white text on the electric teal background for a CTA button" | Incorrect | White on teal (#00D4AA) fails WCAG contrast at 1.91:1. The brand specifies deep navy text on teal for CTA buttons, which passes at 7.82:1. |
| "A photographer shoots players with genuine expressions in a real venue environment" | Correct | This matches the photography direction: natural moments, real environments, genuine emotion. |
| "A template uses the horizontal logo layout in a narrow sidebar" | Incorrect | Narrow vertical spaces should use the stacked (square) layout. The horizontal layout is for wide spaces like headers and banners. |
| "An email template uses Source Sans 3 for body text at 16px minimum" | Correct | Source Sans 3 at 16px (1rem) meets both the typography spec and the accessibility minimum. |

---

## Section 4: Cultural Adaptation

### Reading

{{PROGRAM_NAME}} uses a 5-dimension cultural adaptation framework. When adapting content for different markets, you adjust these five spectrums:

| Dimension | Question it answers | Options |
|-----------|-------------------|---------|
| **Voice** | Who's talking? | Peer (equal), Authority (expert), Elder (respected figure) |
| **Framing** | Who benefits? | Individual ("Protect YOUR bankroll"), Communal ("Protect what matters most") |
| **Humor** | What humor register? | Irreverent, Warm, Understated, Minimal |
| **Directness** | How do you deliver hard truths? | Blunt, Diplomatic, Contextual |
| **Comfort** | How openly is gambling discussed? | Open, Reserved, Private |

**The default profile** (English-speaking markets like US, UK, Australia): peer voice, individual framing, irreverent humor, blunt directness, open comfort.

**Adapting content:** The six voice principles are universal — they describe *what the voice achieves*. They do not prescribe the exact register used to achieve it. A market using an elder voice with diplomatic directness is still honoring "Informed, not alarming" — it delivers knowledge without fear, just in a different dialect.

**Example adaptation — Deposit limit prompt:**
- **Default (peer/blunt/irreverent)**: "Set your deposit limit. It takes 10 seconds. Go on, we'll wait."
- **Authority/diplomatic/reserved**: "A deposit limit is a straightforward tool that many informed players use. It can be set in your account settings."
- **Elder/contextual/communal**: "The wisest players think about their family's wellbeing before they begin. A deposit limit helps you keep your entertainment spending in balance."

Same tool, same information, different cultural expression. All three honor the voice principles.

### Narrator Script

> **Narrator:** [transition slide] {{PROGRAM_NAME}}'s default voice works great in English-speaking markets. But what about markets with different cultural norms around gambling, humor, and authority?
>
> [show 5-dimension table] The cultural adaptation framework has five dimensions. [walk through each] Voice — who's talking? Framing — who benefits? Humor — what register? Directness — how do you deliver hard truths? Comfort — how openly is gambling discussed?
>
> [show adaptation example] Here's what this looks like in practice. The same deposit limit prompt in three different cultural profiles. Same information, same tool — completely different expression. And all three honor the six voice principles.
>
> [pause] When you're creating material for a new market, the first step is always: check the cultural profile in `_brand.yml`. It tells you exactly how to calibrate your voice.

### Exercise: Adapt the Message

**Type:** scenario

**Instructions:** You're adapting {{PROGRAM_NAME}} content for a market with this cultural profile: authority voice, communal framing, warm humor, diplomatic directness, reserved comfort. Which adaptation of the following message best fits?

**Original (default profile):** "Your 'lucky machine' has the emotional range of a toaster. Here's what's actually happening inside."

| Option | Text | Correct? | Feedback |
|--------|------|----------|----------|
| A | "Understanding how gaming machines work helps everyone make informed decisions. Here's a closer look at the technology." | Yes | This uses authority voice, communal framing ("everyone"), diplomatic directness, and reserved comfort (no humor about the machine). Well adapted. |
| B | "Your slot machine is basically a toaster with lights. Don't be fooled." | No | This keeps the irreverent humor and blunt directness of the default profile. It doesn't adapt to the target market. |
| C | "IMPORTANT: Gambling machines are designed to take your money. Know the risks." | No | This violates the voice principles entirely — it's fear-based and alarming. Cultural adaptation changes expression, not values. |

---

## Module Test

> **Narrator:** [transition slide] Five questions. 80% to pass — that's 4 out of 5.

### Question 1

**Assesses:** Learning objective 1

**Stem:** Where does an operator customize their program name, colors, helpline numbers, and taglines?

| Option | Text |
|--------|------|
| A | In each individual content file throughout the repo |
| B | In `_brand.yml` — the single configuration file that drives the whole system |
| C | In the brand-book/ chapter on visual identity |
| D | In a separate operator-config.json file |

**Correct:** B

**Explanation:** `_brand.yml` is the configuration engine. Edit it once, and `{{PLACEHOLDER}}` tokens throughout the repo resolve to the operator's values.

**Source:** [Brand Foundation]({{PLAYBOOK_REPO}}/blob/main/brand-book/01-brand-foundation.md)

---

### Question 2

**Assesses:** Learning objective 2

**Stem:** Which voice principle does this content violate? "WARNING: Be aware of the serious financial risks of gambling. You should set strict limits to protect yourself."

| Option | Text |
|--------|------|
| A | Only "Informed, not alarming" |
| B | "Informed, not alarming" and "Your choice, your tools" |
| C | "Informed, not alarming," "Your choice, your tools," and "Specific, not sloganeering" |
| D | All six principles |

**Correct:** C

**Explanation:** Three violations: "WARNING" and "serious financial risks" are alarming, not informative (principle 1). "You should" is prescriptive (principle 2). "Set strict limits" is generic — it should name the specific tool (principle 3).

**Source:** [Voice and Tone]({{PLAYBOOK_REPO}}/blob/main/brand-book/04-voice-and-tone.md)

---

### Question 3

**Assesses:** Learning objective 4

**Stem:** A designer places white body text on a teal (`#00D4AA`) background. What's the issue?

| Option | Text |
|--------|------|
| A | Teal is reserved for Tier 2 content only |
| B | The contrast ratio (1.91:1) fails WCAG 2.1 AA requirements — use deep navy text instead |
| C | White text should only be used on the primary navy background |
| D | There is no issue — teal and white is an approved combination |

**Correct:** B

**Explanation:** White on teal fails at 1.91:1 contrast. The brand specifies deep navy (`#1B2838`) text on teal backgrounds, which achieves 7.82:1 — well above the 4.5:1 AA requirement.

**Source:** [Visual Identity]({{PLAYBOOK_REPO}}/blob/main/brand-book/03-visual-identity.md)

---

### Question 4

**Assesses:** Learning objective 3

**Stem:** You're adapting content for a market with "elder" voice and "communal" framing. Which adaptation of "Set your deposit limit — it's like a seatbelt for your bankroll" fits best?

| Option | Text |
|--------|------|
| A | "Wise players protect their family's wellbeing. A deposit limit helps keep entertainment spending in balance for everyone." |
| B | "LIMIT YOUR DEPOSITS. Protect your household from financial loss." |
| C | "A deposit limit is basically a seatbelt for your wallet, mate." |
| D | "Statistical analysis suggests deposit limits correlate with improved financial outcomes." |

**Correct:** A

**Explanation:** Option A uses elder voice ("wise players"), communal framing ("family's wellbeing," "everyone"), and maintains the informed-not-alarming principle. B is fear-based. C uses peer voice with irreverent humor. D is clinical jargon.

**Source:** [Cultural Adaptation]({{PLAYBOOK_REPO}}/blob/main/brand-book/09-cultural-adaptation.md)

---

### Question 5

**Assesses:** Learning objective 1

**Stem:** A content creator needs to find the pre-written messages for an onboarding email campaign. Where in the repo should they look?

| Option | Text |
|--------|------|
| A | collateral/digital/email-templates.md for the layout, messaging/core-messages.md for the copy |
| B | brand-book/05-messaging-framework.md |
| C | _brand.yml under the messaging section |
| D | how-to-play/ directory |

**Correct:** A

**Explanation:** Email layouts and specs live in collateral/digital/. The actual copy — tagged by touchpoint and context — lives in messaging/core-messages.md. The two work together: one provides structure, the other provides words.

**Source:** [Core Messages]({{PLAYBOOK_REPO}}/blob/main/messaging/core-messages.md)

---

## Key Takeaways

> **Narrator:** [transition slide] Let's recap what you've learned in this deep dive.

- **`_brand.yml` is the engine** — one file drives the entire system through placeholder tokens
- **Six voice principles** are non-negotiable: informed, choice-based, specific, fun, real, inclusive
- **Four tone registers** cover every context: playful, confident, warm, celebratory
- **Visual identity** should feel like a gaming platform, not a health website — and must pass WCAG contrast standards
- **Cultural adaptation** uses five dimensions: voice, framing, humor, directness, comfort — the principles are universal, the expression varies

> **Narrator:** Next up: the Creation Workshop, where you'll put all of this into practice by writing actual {{PROGRAM_NAME}} copy using the messaging library. See you there.

---

## References

| Resource | What to use it for |
|----------|-------------------|
| [Brand Foundation]({{PLAYBOOK_REPO}}/blob/main/brand-book/01-brand-foundation.md) | Mission, vision, pillars, positioning |
| [Voice and Tone]({{PLAYBOOK_REPO}}/blob/main/brand-book/04-voice-and-tone.md) | Six principles, four registers, sample rewrites |
| [Visual Identity]({{PLAYBOOK_REPO}}/blob/main/brand-book/03-visual-identity.md) | Color, typography, logo, photography, icons |
| [Cultural Adaptation]({{PLAYBOOK_REPO}}/blob/main/brand-book/09-cultural-adaptation.md) | 5-dimension framework, market profiles, adaptation examples |
| [_brand.yml]({{PLAYBOOK_REPO}}/blob/main/_brand.yml) | Configuration engine — all customizable values |
