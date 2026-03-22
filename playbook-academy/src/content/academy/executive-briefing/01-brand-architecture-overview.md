---
content_type: training-module
title: "Brand Architecture Overview"
program_id: executive-briefing
module_number: 1
pillar: [open, social]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
audience_role:
  - leadership
duration_minutes: 10
prerequisites: []
learning_objectives:
  - "Explain the two brand pillars (Open and Social) and the two content tiers"
  - "Describe the white-label system: how _brand.yml drives the entire brand cascade"
  - "Identify the major content areas in the Playbook repository"
  - "Recognize the key elements of the visual identity system"
exercises:
  - drag-and-drop
  - scenario
  - fill-in-blank
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
  The brand architecture is universal. Visual identity specifics
  (color values, typography) will vary per operator fork.
  The _brand.yml system description is universal.
last_updated: "2025-03-21"
---

# Brand Architecture Overview

This module gives you a structural understanding of the {{PROGRAM_NAME}} system: how it's organized, how it adapts to your brand, and what the major components are. You don't need to memorize the details — you need to understand the architecture so you can make informed decisions about deployment, resourcing, and governance.

> **Operator note**: This module provides a condensed overview of the brand system for leadership audiences. For deep dives into any component, refer to the relevant brand book chapters linked in the References section. Replace all `{{PLACEHOLDER}}` tokens with values from `_brand.yml`. Narrator scripts should be recorded in the Playbook Tier 1 voice.

**Program:** Executive Briefing | **Duration:** ~10 min | **Prerequisites:** None

---

## Quick-scan index

| Section | What it covers | Time |
|---------|----------------|------|
| [Learning objectives](#learning-objectives) | What you'll take away | — |
| [Section 1: Two Pillars, Two Tiers](#section-1-two-pillars-two-tiers) | The content framework | ~3 min |
| [Section 2: The White-Label System](#section-2-the-white-label-system) | How _brand.yml drives everything | ~4 min |
| [Section 3: Visual Identity at a Glance](#section-3-visual-identity-at-a-glance) | Color, logo, typography, key design principles | ~3 min |
| [Module test](#module-test) | 5 graded questions, 80% to pass | ~3 min |
| [References](#references) | Links to Playbook brand assets | — |

---

## Learning objectives

After completing this module, you will be able to:

1. Explain the two brand pillars (Open and Social) and the two content tiers
2. Describe the white-label system: how `_brand.yml` drives the entire brand cascade
3. Identify the major content areas in the Playbook repository
4. Recognize the key elements of the visual identity system

---

## Section 1: Two Pillars, Two Tiers

### Reading

Every piece of {{PROGRAM_NAME}} content is organized by two dimensions: pillars and tiers.

**The two pillars** define what the content is about:

| Pillar | Tagline | What it means |
|--------|---------|---------------|
| **Open** | "No fine print" | Transparency about how things actually work — the house edge, the odds, the T&Cs. If it affects a player's experience, we tell them straight. |
| **Social** | "Worth sharing" | Content designed to travel — quizzes, myth-busters, shareable stats. Content people want to talk about, not content they ignore. |

The pillar test: before creating or approving any content, ask — *Does this make things more transparent? Does this make people want to share it?* If the answer to both is no, it's not {{PROGRAM_NAME}} content.

**The two tiers** define how the content sounds:

| Tier | Coverage | Voice | When to use |
|------|----------|-------|-------------|
| **Tier 1** | ~95% of all content | Confident, witty, informative — a friend explaining something interesting | General education, quizzes, odds explainers, tool promotion, social media |
| **Tier 2** | ~5% of all content | Warm, direct, no humor — respectful and immediate | Support, crisis, self-exclusion, helpline access, distress situations |

Tier 1 is the default voice. Tier 2 activates when a player needs support. Staff need to know when to shift — but the key decision for leadership is understanding that these are two different voices serving two different contexts, and both are deliberately designed.

The visual identity shifts between tiers too. Tier 1 uses the full brand palette (including the energetic accent color). Tier 2 strips back to a calmer palette — more white space, no playful elements, no humor. The visual transition signals to the player that the platform is taking their situation seriously.

### Narrator Script

> **Narrator:** [transition slide] Let's look at how {{PROGRAM_NAME}} output is organized. Two dimensions: pillars and tiers.
>
> [show pillars] Two pillars. Open — "No fine print." Everything about how games actually work, how odds work, what the terms mean. Social — "Worth sharing." Content that people want to talk about and share with friends.
>
> [show tiers] Two tiers. Tier 1 is 95% of the output — confident, witty, informative. Think of a smart friend explaining something interesting. Tier 2 is the other 5% — warm, direct, no humor. That's for moments when a player needs support.
>
> [pause] The key point for leadership: these two voices are deliberate. Tier 1 earns attention. Tier 2 provides support. Both are designed, not accidental. And the visual identity shifts between them so players can feel the change in context.
>
> [transition] Now let's look at how the system adapts to your brand.

### Exercise: Pillar or Tier?

**Type:** drag-and-drop

**Instructions:** Sort each description into the correct category: Pillar (what content is about) or Tier (how content sounds).

| Example | Correct Category | Feedback (correct) | Feedback (incorrect) |
|---------|-----------------|-------------------|---------------------|
| "No fine print — transparency about odds and house edge" | Open (Pillar) | Right — Open is a pillar defining what the content covers: transparency about how things work. | This describes the subject matter, not the voice. Pillars define what content is about. Open means transparency. |
| "Confident, witty, informative — a friend explaining something interesting" | Tier 1 (Tier) | Correct — this describes the voice and tone, which is what tiers define. Tier 1 is the default voice for 95% of content. | This describes how content sounds, not what it covers. Tiers define voice and tone. |
| "Worth sharing — quizzes, myth-busters, shareable stats" | Social (Pillar) | Exactly — Social is a pillar. It defines content designed to travel and spark conversation. | This is about the content's purpose (shareability), not its voice. Social is a pillar that defines what the content aims to do. |
| "Warm, direct, no humor — for support and crisis situations" | Tier 2 (Tier) | Correct — Tier 2 is the support voice, used for the 5% of content involving crisis or distress. | This describes a tonal register, not a content category. Tiers define how content sounds. Tier 2 is the support voice. |

---

## Section 2: The White-Label System

### Reading

{{PROGRAM_NAME}} is designed as a **white-label system**. An operator forks the repository, edits one configuration file, and the entire brand cascades — colors, fonts, logos, program name, helpline numbers, messaging tokens, and jurisdiction-specific values.

That file is **`_brand.yml`**. It's the single source of truth for the brand. Every `{{PLACEHOLDER}}` token in the repository resolves from this file. Change the program name in `_brand.yml`, and it updates across every piece of collateral, every template, every training module.

**What operators replace** (via `_brand.yml`):
- Program name and logo
- Color palette and typography
- Helpline numbers and support URLs
- Jurisdiction-specific messaging and legal values
- Integration URLs (self-exclusion process, clinical services, product training)

**What operators keep** (the structural DNA):
- Layout patterns and information hierarchy
- Icon system and design principles
- Voice and tone framework
- Message structure and content architecture
- Accessibility standards
- Governance processes

This means a player who sets deposit limits on Platform A will recognize the same flow pattern on Platform B — even though the two platforms look completely different. The consistency is in the structure, not the skin.

**The content architecture** — what the repository contains:

| Directory | What's in it |
|-----------|-------------|
| `brand-book/` | 10-chapter brand guidelines — voice, tone, personality, visual identity, messaging, governance |
| `visual-identity/` | Design tokens, logos, color specs, typography, iconography, photography direction |
| `messaging/` | 74 core messages, taglines, CTAs, tone examples, stigma-free language guide, player segments |
| `collateral/` | 41 production-ready templates across digital, print, environmental, video/audio, and interactive formats |
| `how-to-play/` | Game education guides and quick-reference cards |
| `jurisdictions/` | Regulatory compliance modules by market (templates + completed modules) |
| `docs/` | Player testing protocol and operational documents |

This is not a pamphlet. It's a complete brand system with the same scope and depth as any commercial brand — applied to player education.

### Narrator Script

> **Narrator:** [transition slide] Here's how the system adapts to your brand. {{PROGRAM_NAME}} is white-label. Fork the repository, edit one file — `_brand.yml` — and the entire brand cascades.
>
> [show _brand.yml concept] Your program name, colors, fonts, logos, helpline numbers, jurisdiction values — all configured in one place. Every placeholder in the system resolves from that file.
>
> [show system architecture] What you get: a 10-chapter brand book, a full visual identity system, 74 core messages, 41 production-ready collateral templates, game education guides, and jurisdiction-specific compliance modules. This is a complete brand system, not a brochure.
>
> [pause] The key design principle: operators change the skin, but the structure stays the same. A player recognizes the same patterns across different operators — same flow for setting limits, same information hierarchy, same design principles — even though the branding is completely different.
>
> [transition] Let's take a quick look at the visual identity.

### Exercise: Replace or Keep?

**Type:** drag-and-drop

**Instructions:** When an operator forks the {{PROGRAM_NAME}} repository, some elements are replaced via `_brand.yml` and others are kept as structural DNA. Sort each element.

| Example | Correct Category | Feedback (correct) | Feedback (incorrect) |
|---------|-----------------|-------------------|---------------------|
| "Program name and logo" | Replace | Correct — operators replace the program name and logo with their own brand identity via `_brand.yml`. | This is operator-specific branding. It's replaced so each operator has their own identity while keeping the underlying system. |
| "Voice and tone framework" | Keep | Right — the voice and tone framework is structural DNA. Operators keep the two-pillar, two-tier system even when they change the visual brand. | The voice framework is part of the system's structure. It's what makes the player experience consistent across operators. |
| "Color palette and typography" | Replace | Correct — visual branding is operator-specific. Each fork customizes colors and fonts to match their brand. | Colors and fonts are part of the visual brand that operators customize. The structure of how colors are used (primary, secondary, accent) stays the same. |
| "Accessibility standards" | Keep | Exactly — accessibility standards are structural. They ensure every operator's implementation meets the same quality bar regardless of branding. | Accessibility isn't branding — it's a quality standard that every fork inherits. Operators keep this. |

---

## Section 3: Visual Identity at a Glance

### Reading

The {{PROGRAM_NAME}} visual identity is designed to match commercial content quality. The principle from the Application Guidelines: if the promotional banner looks like it was designed by a world-class agency and the player education section looks like a compliance afterthought, players will treat it accordingly.

**Color system:**
- **Primary** (navy) — used for text, headers, and backgrounds across both tiers
- **Secondary** (teal) — CTAs and interactive elements, also serves as the primary accent in Tier 2
- **Accent** (orange) — energy and emphasis in Tier 1 content only; never appears in Tier 2

The color split between tiers is deliberate. Tier 1 uses the full palette. Tier 2 drops orange entirely — calmer palette, more white space. The visual shift signals a change in context.

**Logo system:**
- Full logo (wordmark + icon) for primary placements
- Logomark only for constrained spaces (app icons, favicons, footer strips)
- Minimum size and clear space rules ensure the logo is always legible
- Operators replace the logo with their own; the system specifies sizing ratios for co-branding

**Typography:**
- Display font for headlines and hero text
- Body font for running text and UI elements
- Monospace for data displays, odds, and code
- Minimum body text: 16px on screen, 10pt in print
- Helpline numbers: minimum 14pt bold

**Design principle — equal investment:** {{PROGRAM_NAME}} content gets the same design quality as commercial content. Same typography, same color system, same spacing, same layout principles. This is the visible expression of the strategic decision to treat player education as a brand asset, not a compliance cost.

### Narrator Script

> **Narrator:** [transition slide] The visual identity has one governing principle: equal investment. {{PROGRAM_NAME}} material gets the same design quality as the commercial product.
>
> [show color system] The color system has three layers — primary navy, secondary teal, and accent orange. Tier 1 uses all three. Tier 2 drops the orange entirely for a calmer, more supportive feel.
>
> [show logo and typography] The logo system scales from full wordmark down to a compact icon. Typography uses three families — display, body, and monospace — with specific minimum sizes to ensure readability. Helpline numbers always get bold treatment at a minimum 14pt.
>
> [pause] The bottom line for leadership: this visual system is designed so that player education material never looks like an afterthought. When a player sees {{PROGRAM_NAME}} material next to commercial material, the quality should be indistinguishable.

### Exercise: The Elevator Pitch

**Type:** fill-in-blank

**Instructions:** A board member asks you: "What is {{PROGRAM_NAME}} and how does it work?" Write a 2-3 sentence elevator pitch that covers the two pillars, the two tiers, and the white-label system. Your answer should be something a non-technical executive could repeat in their next meeting.

| Prompt | Model answer | Feedback guidance |
|--------|-------------|-------------------|
| Write a 2-3 sentence elevator pitch explaining the {{PROGRAM_NAME}} brand architecture to a board member. | "{{PROGRAM_NAME}} is a white-label player-education brand built on two pillars: Open — transparency about odds and game mechanics — and Social — content designed to be shared. It speaks in two voices: a confident, informative tone for everyday content and a warm, direct tone for support moments. Operators fork one configuration file and the entire brand — colors, fonts, messaging, templates — cascades to their platform." | Look for: mentions both pillars (Open and Social) with brief descriptions, mentions both tiers with distinct tone descriptions, references the white-label / _brand.yml mechanism. The pitch should be concise enough that a non-technical executive could repeat it. Bonus if it captures the "equal investment" principle or the structural vs. skin distinction. |

---

## Module Test

> **Narrator:** [transition slide] Five questions to confirm you've got the architecture. You need 80% — that's 4 out of 5 — to pass. Take your time.

### Question 1

**Assesses:** Learning objective 1

**Stem:** A board member asks: "What's the difference between {{PROGRAM_NAME}}'s pillars and tiers?" Which answer best explains the distinction?

| Option | Text |
|--------|------|
| A | "Pillars are for external content and tiers are for internal training." |
| B | "Pillars define what the content is about — transparency and shareability. Tiers define how it sounds — the confident everyday voice versus the warm support voice." |
| C | "Pillars are the two halves of the brand book and tiers are the quality levels." |
| D | "There's no real difference — they're just two ways of saying the same thing." |

**Correct:** B

**Explanation:** Pillars (Open and Social) define the content's subject matter and purpose. Tiers (1 and 2) define the voice and tone. Pillar = what. Tier = how. This distinction drives every content and design decision in the system.

**Source:** [Brand Foundation]({{PLAYBOOK_REPO}}/blob/main/brand-book/01-brand-foundation.md)

---

### Question 2

**Assesses:** Learning objective 2

**Stem:** An operator is deploying {{PROGRAM_NAME}} and asks what they need to customize. What is the single source of truth they should edit?

| Option | Text |
|--------|------|
| A | The brand-book/ directory — rewrite the 10 chapters to match their voice |
| B | The collateral/ templates — redesign each one individually |
| C | `_brand.yml` — the master configuration file that cascades changes across the entire system |
| D | The visual-identity/ folder — replace every design token manually |

**Correct:** C

**Explanation:** `_brand.yml` is the single source of truth. Every placeholder in the repository resolves from this file. Operators edit it once, and the program name, colors, fonts, logos, helpline numbers, and jurisdiction values cascade across all content automatically.

**Source:** [`_brand.yml`]({{PLAYBOOK_REPO}}/blob/main/_brand.yml)

---

### Question 3

**Assesses:** Learning objective 3

**Stem:** A marketing director wants to know how many production-ready templates are included in the system. Which answer is correct?

| Option | Text |
|--------|------|
| A | 10 templates covering digital formats only |
| B | 41 templates across digital, print, environmental, video/audio, and interactive formats |
| C | 74 templates, one for each core message |
| D | The system provides guidelines but no ready-to-use templates |

**Correct:** B

**Explanation:** The collateral/ directory contains 41 production-ready templates spanning multiple channels. The 74 figure refers to core messages in the messaging/ directory, not templates. The system is designed to be deployment-ready, not just advisory.

**Source:** [Application Guidelines]({{PLAYBOOK_REPO}}/blob/main/brand-book/07-application-guidelines.md)

---

### Question 4

**Assesses:** Learning objective 4

**Stem:** A designer asks why the accent color (orange) disappears in certain content. What is the correct explanation?

| Option | Text |
|--------|------|
| A | "Orange is only used in print materials, never on screen." |
| B | "Orange is removed in Tier 2 content — support and crisis situations use a calmer palette to signal the platform is taking the situation seriously." |
| C | "Orange is reserved for the operator's logo and never used elsewhere." |
| D | "Orange is deprecated and being phased out of the system entirely." |

**Correct:** B

**Explanation:** The color system deliberately shifts between tiers. Tier 1 uses the full palette including orange for energy and emphasis. Tier 2 drops orange entirely — calmer palette, more white space, no playful elements. This visual transition signals a change in context to the player.

**Source:** [Visual Identity]({{PLAYBOOK_REPO}}/tree/main/visual-identity)

---

### Question 5

**Assesses:** Learning objective 1

**Stem:** Your team proposes a new piece of content: a glossy pamphlet listing all the risks of gambling, using alarming statistics and urgent warnings. Does this pass the {{PROGRAM_NAME}} pillar test?

| Option | Text |
|--------|------|
| A | "Yes — it's transparent about risks, so it fits the Open pillar." |
| B | "Yes — alarming content gets shared widely, so it fits the Social pillar." |
| C | "No — it fails both pillar tests. It's alarming rather than transparent (not Open), and warning-based content isn't designed to be shared (not Social)." |
| D | "It depends on the design quality — if it looks professional, any content passes." |

**Correct:** C

**Explanation:** The pillar test asks two questions: Does this make things more transparent? Does this make people want to share it? Alarming statistics and urgent warnings are fear-based, not transparency-based. And warning content isn't designed to travel socially. {{PROGRAM_NAME}} is informed rather than alarming, empowering rather than prescriptive.

**Source:** [Brand Foundation]({{PLAYBOOK_REPO}}/blob/main/brand-book/01-brand-foundation.md)

---

## Key Takeaways

1. **Two pillars, two tiers:** Open (transparency) and Social (shareability) define what content covers; Tier 1 (confident) and Tier 2 (supportive) define how it sounds
2. **One file drives everything:** `_brand.yml` is the single source of truth — edit it once, and the entire brand cascades across all content
3. **Replace the skin, keep the structure:** Operators customize branding but retain the voice framework, accessibility standards, and design principles
4. **Equal investment:** {{PROGRAM_NAME}} content gets the same design quality as commercial content — never treated as a compliance afterthought

---

## References

| Resource | What to use it for |
|----------|-------------------|
| [Brand Foundation]({{PLAYBOOK_REPO}}/blob/main/brand-book/01-brand-foundation.md) | Pillars, positioning, scope |
| [Application Guidelines]({{PLAYBOOK_REPO}}/blob/main/brand-book/07-application-guidelines.md) | Integration principle, co-branding rules, channel-specific guidance |
| [Visual Identity]({{PLAYBOOK_REPO}}/tree/main/visual-identity) | Design tokens, logos, color specs, typography |
| [`_brand.yml`]({{PLAYBOOK_REPO}}/blob/main/_brand.yml) | Master configuration file |
