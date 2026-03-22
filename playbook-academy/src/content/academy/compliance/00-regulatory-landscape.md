---
content_type: training-module
title: "Regulatory Landscape"
program_id: compliance
module_number: 0
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
audience_role:
  - legal-regulatory
duration_minutes: 20
prerequisites:
  - all-employees/00-welcome-to-playbook.md
  - all-employees/01-two-tier-system.md
learning_objectives:
  - "Describe how gambling regulation is structured (authorities, licensing, and the separation of investigation from decision-making)"
  - "Explain the three-layer architecture of the Playbook jurisdiction module system"
  - "Define the key regulatory concepts that jurisdiction modules address: mandatory messaging, advertising restrictions, self-exclusion, and age verification"
  - "Read a jurisdiction module and identify the obligation type for each messaging requirement"
exercises:
  - drag-and-drop
  - drag-and-drop
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
  Adapt the Nevada worked example to the operator's primary jurisdiction
  if different. The three-layer architecture and module reading skills
  are universal. Regulatory structure examples may need localization
  for non-US markets.
last_updated: "2025-03-21"
---

# Regulatory Landscape

This module teaches you how gambling regulation works at a high level and — more importantly — how the Playbook jurisdiction module system translates those regulations into actionable requirements for your deployment. By the end, you'll be able to pick up any jurisdiction module and know exactly what it's telling you.

> **Operator note**: Replace all `{{PLACEHOLDER}}` tokens with values from `_brand.yml`. The worked example in Section 2 uses Nevada — if your operator's primary market is different, consider supplementing with your own jurisdiction module. The regulatory concepts in Section 1 are universal. Narrator scripts should be recorded in the Playbook Tier 1 voice.

**Program:** Compliance | **Duration:** ~20 min | **Prerequisites:** All Employees (both modules, passed)

---

## Quick-scan index

| Section | What it covers | Time |
|---------|----------------|------|
| [Learning objectives](#learning-objectives) | What you'll know after this module | — |
| [Section 1: How Gambling Regulation Works](#section-1-how-gambling-regulation-works) | Regulatory authorities, licensing models, and key concepts | ~7 min |
| [Section 2: The Jurisdiction Module System](#section-2-the-jurisdiction-module-system) | Three-layer architecture and how to read a module | ~7 min |
| [Section 3: Reading a Jurisdiction Module](#section-3-reading-a-jurisdiction-module) | Worked example using Nevada | ~4 min |
| [Module test](#module-test) | 5 graded questions, 80% to pass | ~2 min |
| [Key takeaways](#key-takeaways) | Summary | — |
| [References](#references) | Links to Playbook brand assets | — |

---

## Learning objectives

After completing this module, you will be able to:

1. Describe how gambling regulation is structured (authorities, licensing, and the separation of investigation from decision-making)
2. Explain the three-layer architecture of the Playbook jurisdiction module system
3. Define the key regulatory concepts that jurisdiction modules address: mandatory messaging, advertising restrictions, self-exclusion, and age verification
4. Read a jurisdiction module and identify the obligation type for each messaging requirement

---

## Section 1: How Gambling Regulation Works

### Reading

Gambling is one of the most heavily regulated industries in the world. Before you can deploy {{PROGRAM_NAME}} content in any market, you need to understand the regulatory landscape that governs what operators can say, where they can say it, and what they must include.

**Regulatory authorities** oversee gambling operations. Their structure varies by jurisdiction, but most follow one of three patterns:

| Pattern | How it works | Example |
|---------|-------------|---------|
| **Single regulator** | One body handles licensing, enforcement, and policy | Many European jurisdictions |
| **Two-tier system** | One body investigates and enforces; another body makes final decisions | Nevada (NGCB investigates, NGC decides) |
| **Multi-regulator** | Different bodies regulate different gambling products | Jurisdictions where sports betting, lotteries, and casinos have separate regulators |

**Licensing** is the mechanism by which governments authorize gambling operations. Operators must hold the appropriate license before offering any gambling product. {{PROGRAM_NAME}} content itself does not require a license, but the operator deploying it must be licensed in the relevant jurisdiction.

**Key regulatory concepts** that every jurisdiction module addresses:

- **Mandatory messaging**: What operators are required to tell players. This ranges from verbatim prescribed statements (word-for-word text the regulator dictates) to obligation-based requirements (communicate certain information, but the phrasing is up to you).
- **Advertising restrictions**: What operators can and cannot say in promotional material. These are often channel-specific — broadcast, digital, print, and in-venue may each have different rules.
- **Self-exclusion**: Programs that allow players to voluntarily ban themselves from gambling venues or platforms. Scope varies: some jurisdictions run centralized statewide programs; others operate property-by-property.
- **Age verification**: Minimum gambling age and the methods operators must use to verify it. This varies by jurisdiction and sometimes by product type within the same jurisdiction.

**Regulatory approach** also differs. Some jurisdictions are *prescriptive* (they tell you exactly what to say and where), while others are *principles-based* (they set standards and let operators decide how to meet them). Most are a hybrid. Understanding the approach matters because it determines how much creative flexibility you have when integrating {{PROGRAM_NAME}} messaging with regulatory requirements.

> **Operator integration point**: Your organization may have its own regulatory-mandated training program that covers jurisdiction-specific legal obligations in detail. This module teaches you how to use the Playbook jurisdiction module system — not the full scope of gambling law. For your mandatory regulatory training, see: {{MANDATORY_TRAINING_URL}}

### Narrator Script

> **Narrator:** [transition slide] Let's start with the big picture. Gambling is one of the most regulated industries on the planet, and that regulation shapes everything we do with {{PROGRAM_NAME}} material.
>
> Every jurisdiction has a regulatory authority — sometimes one body, sometimes two or more. They set the rules about what operators can say, what they must say, and where they must say it.
>
> [show key concepts diagram] Four concepts come up in every jurisdiction module. Mandatory messaging — what the regulator requires you to tell players. Advertising restrictions — what you can and can't say in ads. Self-exclusion — programs that let players voluntarily ban themselves. And age verification — making sure players meet the minimum age.
>
> [pause] The important thing to understand is that regulators take different approaches. Some are prescriptive — they hand you exact words. Others are principles-based — they set standards and let you figure out how to meet them. That distinction matters for {{PROGRAM_NAME}} because it determines how much room you have to use brand voice alongside regulatory requirements.
>
> [transition] Now let's look at how Playbook organizes all of this.

### Exercise: Match the Regulatory Concept

**Type:** drag-and-drop

**Instructions:** Match each regulatory concept to its correct definition.

| Concept | Correct Definition | Feedback (correct) | Feedback (incorrect) |
|---------|-------------------|-------------------|---------------------|
| Mandatory messaging | Requirements for what operators must communicate to players, ranging from verbatim text to obligation-based standards | Right — mandatory messaging covers everything from prescribed word-for-word statements to flexible standards about what information must be conveyed. | Mandatory messaging is about what operators must tell players. Check the obligation type — some are verbatim, some are flexible. |
| Self-exclusion | Programs allowing players to voluntarily ban themselves from gambling venues or platforms for a set period | Correct — self-exclusion is voluntary, player-initiated, and the scope (single property, statewide, etc.) varies by jurisdiction. | Self-exclusion is a player-initiated voluntary ban. It's not the same as advertising restrictions or age verification. |
| Prescriptive regulation | A regulatory approach that tells operators exactly what to say and where to say it | Yes — prescriptive means the regulator dictates the specific language, placement, and format. | Prescriptive regulation provides exact requirements. Principles-based regulation sets standards but lets operators decide how to meet them. |
| Principles-based regulation | A regulatory approach that sets standards and lets operators decide how to meet them | Exactly — principles-based gives you flexibility in how you comply, which means more room for {{PROGRAM_NAME}} brand voice. | Principles-based regulation sets goals, not scripts. The operator decides the method. |
| Age verification | The minimum gambling age and the methods operators must use to confirm a player meets it | Right — age verification covers both the legal age itself and the specific processes for checking it. | Age verification is specifically about confirming players meet the minimum age requirement. |

---

## Section 2: The Jurisdiction Module System

### Reading

The Playbook repository includes a [jurisdictions directory]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/README.md) that contains compliance modules for every market where {{PROGRAM_NAME}} has been deployed. These modules use a **three-layer architecture**:

**Layer 0: Templates** (`jurisdictions/_template/`)
Scaffolded markdown files with `{{PLACEHOLDER}}` tokens. When building a new jurisdiction module, you start here. The templates contain every section, table, and question an operator needs to address — nothing is left to guesswork.

**Layer 1: Country** (e.g., `jurisdictions/united-states/`)
The national or federal framework. This layer covers regulations that apply across all sub-jurisdictions within a country. It lists sub-jurisdictions with their regulators and key facts, and it provides country-level `_brand.yml` overrides (helplines, legal ages, mandatory messaging tokens).

**Layer 2: Sub-jurisdiction** (e.g., `jurisdictions/united-states/nevada/`)
The compliance module for a specific state, province, or territory. This is where the actionable requirements live — mandatory messaging, helpline display rules, advertising restrictions, self-exclusion programs, collateral adaptations, and a pre-launch compliance checklist.

**How `_brand.yml` connects**: Every jurisdiction module references specific `_brand.yml` keys and recommends additions. Country-level files contain helplines, legal ages, and mandatory messaging tokens. Sub-jurisdiction modules specify which `_brand.yml` values to set. At build time, `{{PLACEHOLDER}}` tokens in collateral templates resolve to the correct jurisdiction-specific values.

**Obligation types** are how jurisdiction modules classify each messaging requirement:

| Obligation type | What it means | {{PROGRAM_NAME}} flexibility |
|----------------|---------------|------------------------------|
| **Verbatim** | Exact prescribed text — must appear word-for-word | Zero — use the mandated text exactly. Surrounding copy can use brand voice. |
| **Obligation-based** | Must communicate certain information, but no prescribed wording | Full — use {{PROGRAM_NAME}} voice and messaging to meet the obligation. |
| **Standard-based** | Must display specific items (helpline name, program name) but surrounding copy is flexible | Moderate — required items appear as specified; everything else uses brand voice. |

Understanding obligation types is the most important skill for compliance staff working with {{PROGRAM_NAME}}. It tells you exactly where you have creative flexibility and where you don't.

### Narrator Script

> **Narrator:** [transition slide] Now let's look at how Playbook organizes regulatory requirements. The jurisdiction directory in the main repo uses a three-layer system.
>
> [show architecture diagram] Layer zero is templates — scaffolds that define every section a jurisdiction module needs. Layer one is the country level — the federal or national framework. Layer two is the sub-jurisdiction — the specific state, province, or territory where the actionable requirements live.
>
> [pause] Here's the key thing to understand: every messaging requirement in a jurisdiction module is classified by obligation type. Verbatim means you must use the exact prescribed text — no creative flexibility. Obligation-based means you have to communicate certain information but the words are up to you — full {{PROGRAM_NAME}} voice. Standard-based is in between — certain items must appear, but the surrounding copy is flexible.
>
> [show obligation type table] Knowing the obligation type tells you where you can use brand voice and where you can't. That's the core skill this module is teaching you.
>
> [transition] Let's put this into practice with a real jurisdiction module.

### Exercise: Classify the Obligation Type

**Type:** drag-and-drop

**Instructions:** A jurisdiction module contains each of the following messaging requirements. Classify each one by its obligation type.

| Concept | Correct Definition | Feedback (correct) | Feedback (incorrect) |
|---------|-------------------|-------------------|---------------------|
| "Post the following statement on all wagering account pages: 'If you or someone you know has a gambling problem, call 1-800-522-4700'" | Verbatim | Correct — the regulator prescribes the exact text. You must display it word-for-word with zero modifications. | This requirement prescribes the exact words to use. When a regulator hands you specific text, that's a verbatim obligation. |
| "Operators must provide information about responsible gambling resources to players in conspicuous locations" | Obligation-based | Right — the regulator requires the information but leaves the wording up to you. Full {{PROGRAM_NAME}} voice flexibility. | This requirement states what must be communicated but not how. No prescribed text means the operator chooses the phrasing. |
| "Display the National Council on Problem Gambling helpline number (1-800-522-4700) alongside responsible gambling messaging" | Standard-based | Yes — the helpline number itself is fixed, but the surrounding messaging is flexible. Moderate creative flexibility. | The specific item (helpline number) must appear exactly as specified, but you control the surrounding copy. That's standard-based. |
| "All marketing materials must include the operator's license number exactly as it appears on the gaming license" | Verbatim | Correct — the license number is a prescribed element that must appear exactly as issued. No creative flexibility with the number itself. | When the regulator says "exactly as it appears," that signals a verbatim requirement. The specific text is dictated. |
| "Operators shall make self-exclusion program information readily accessible to patrons" | Obligation-based | Right — the obligation is to make the information accessible, but you decide the format, placement, and wording. Full {{PROGRAM_NAME}} flexibility. | This sets a goal (make information accessible) without prescribing the exact method or text. That's obligation-based. |

---

## Section 3: Reading a Jurisdiction Module

### Reading

Let's walk through how to read a jurisdiction module using [Nevada]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/united-states/nevada/README.md) as a worked example.

**Step 1: Check the metadata.** Every jurisdiction module opens with a frontmatter block and an operator note. The Nevada module tells you:
- The regulatory model is a two-tier system (NGCB investigates and enforces, NGC decides and approves)
- The regulatory approach is hybrid — mostly obligation-based for general signage but includes a verbatim requirement for wagering accounts
- The last verified date and next review date (quarterly cycle)

**Step 2: Identify the messaging regime.** Nevada has two distinct messaging regimes:
- **General signage** (Regulation 5.170): Obligation-based. Post problem gambling information and the helpline number in conspicuous places near gaming areas and ATMs. No prescribed phrasing — full {{PROGRAM_NAME}} voice flexibility.
- **Wagering accounts** (Regulation 5.225(18)(b)): Verbatim. A specific prescribed message must be displayed upon account access. The exact text must appear word-for-word; surrounding copy can use brand voice.

**Step 3: Review the compliance checklist.** Every jurisdiction module ends with a pre-launch checklist organized by category: regulatory, messaging, advertising, self-exclusion, player protection, age verification, content, and governance. Compliance staff should use this checklist as the sign-off document before any market launch.

**Step 4: Note the self-exclusion model.** Nevada uses a property-by-property model — there is no centralized statewide program. Each casino maintains its own list. Interactive gaming (online poker, mobile sports betting) has a separate self-exclusion mechanism under Regulation 5A.130. The jurisdiction module maps {{PROGRAM_NAME}} language to the official program terms across Tier 1 and Tier 2 contexts.

**Step 5: Check `_brand.yml` updates.** The module provides ready-to-paste YAML snippets for helplines, legal age, and mandatory messaging tokens. Compliance staff should verify these are correctly entered in the operator's `_brand.yml` before content goes live.

### Narrator Script

> **Narrator:** [transition slide] Let's walk through a real jurisdiction module. We'll use Nevada as our example.
>
> [show Nevada module] First thing: check the metadata at the top. It tells you the regulatory model, the approach, and when the module was last verified. Nevada uses a two-tier regulatory system and a hybrid approach.
>
> [highlight messaging section] Next, find the messaging regime. Nevada has two: general signage is obligation-based — no prescribed words, full brand voice flexibility. But wagering accounts have a verbatim requirement — there's a specific message that must appear word-for-word.
>
> [show compliance checklist] Every module ends with a compliance checklist. This is your sign-off document. Work through it systematically before any market launch.
>
> [pause] One more thing: the self-exclusion section. Nevada is unusual because it uses a property-by-property model — no centralized statewide list. The module maps {{PROGRAM_NAME}} language to official terms so your messaging uses the right vocabulary at the right time.
>
> [transition to test] Now let's test what you've learned. Five questions, 80% to pass.

---

## Module Test

> **Narrator:** [transition slide] Time to check what you've learned. You'll answer 5 questions. You need 80% — that's 4 out of 5 — to pass. Take your time. If you don't pass on the first try, you can review the material and retake the test.

### Question 1

**Assesses:** Learning objective 2

**Stem:** What are the three layers of the Playbook jurisdiction module system?

| Option | Text |
|--------|------|
| A | Federal, state, and local regulatory frameworks |
| B | Templates, country-level framework, and sub-jurisdiction compliance module |
| C | Brand guidelines, messaging requirements, and advertising restrictions |
| D | Legal research, content drafting, and compliance sign-off |

**Correct:** B

**Explanation:** The three-layer architecture is: Layer 0 (templates with placeholder tokens), Layer 1 (country-level framework covering national/federal regulations), and Layer 2 (sub-jurisdiction modules with actionable requirements for a specific state, province, or territory).

**Source:** [Jurisdictions README]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/README.md)

---

### Question 2

**Assesses:** Learning objective 4

**Stem:** A jurisdiction module classifies a messaging requirement as "obligation-based." What does this mean for {{PROGRAM_NAME}} content?

| Option | Text |
|--------|------|
| A | The operator must use the exact words prescribed by the regulator — no exceptions |
| B | The operator must communicate certain information but can use {{PROGRAM_NAME}} voice and messaging to do so |
| C | The requirement is optional and can be skipped if the operator prefers |
| D | The operator must display the regulator's logo alongside the message |

**Correct:** B

**Explanation:** Obligation-based means the regulator requires certain information to be communicated but does not prescribe the exact wording. This gives operators full flexibility to use {{PROGRAM_NAME}} voice. Verbatim requirements, by contrast, must appear word-for-word.

**Source:** [Jurisdictions — Compliance Module Template]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/_template/compliance-module.md)

---

### Question 3

**Assesses:** Learning objective 1

**Stem:** In a two-tier regulatory system like Nevada's, what is the primary benefit of separating investigation from decision-making?

| Option | Text |
|--------|------|
| A | It reduces the total number of regulations operators must follow |
| B | It ensures independence — the body that investigates does not make the final decision |
| C | It allows operators to choose which tier to report to |
| D | It eliminates the need for legal counsel during the licensing process |

**Correct:** B

**Explanation:** Nevada's two-tier system separates investigation/enforcement (NGCB) from decision-making (NGC). The body that conducts background checks and compliance reviews does not make the final licensing decisions, ensuring independence in the regulatory process.

**Source:** [Nevada Compliance Module]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/united-states/nevada/README.md)

---

### Question 4

**Assesses:** Learning objective 3

**Stem:** Which of the following is NOT one of the four key regulatory concepts addressed in every Playbook jurisdiction module?

| Option | Text |
|--------|------|
| A | Mandatory messaging |
| B | Player loyalty programs |
| C | Self-exclusion |
| D | Age verification |

**Correct:** B

**Explanation:** The four key regulatory concepts in every jurisdiction module are: mandatory messaging, advertising restrictions, self-exclusion, and age verification. Player loyalty programs are a commercial operator feature, not a regulatory compliance concept covered by jurisdiction modules.

**Source:** [Jurisdictions README]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/README.md)

---

### Question 5

**Assesses:** Learning objective 4

**Stem:** You're reviewing Nevada's messaging requirements and find that general signage under Regulation 5.170 is obligation-based, while the wagering account message under Regulation 5.225(18)(b) is verbatim. What should you do?

| Option | Text |
|--------|------|
| A | Use {{PROGRAM_NAME}} voice for all messaging since the brand guidelines override regulatory requirements |
| B | Use the exact prescribed text for general signage and {{PROGRAM_NAME}} voice for wagering accounts |
| C | Use the exact prescribed text for the wagering account message and {{PROGRAM_NAME}} voice for general signage |
| D | Request that the regulator approve {{PROGRAM_NAME}} voice for both messaging regimes |

**Correct:** C

**Explanation:** Verbatim requirements (like Nevada's wagering account message) must appear word-for-word — no modifications. Obligation-based requirements (like Nevada's general signage) give operators flexibility to use {{PROGRAM_NAME}} voice as long as the required information is communicated. Never modify verbatim text, and take advantage of brand voice flexibility where the regulation permits it.

**Source:** [Nevada Compliance Module]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/united-states/nevada/README.md)

---

## Key Takeaways

> **Narrator:** [transition slide] Let's recap what you've learned.

- **Gambling regulation varies by jurisdiction** — different structures, different approaches (prescriptive vs. principles-based), different requirements
- **The jurisdiction module system** uses a three-layer architecture: templates, country-level frameworks, and sub-jurisdiction compliance modules
- **Four key concepts** appear in every module: mandatory messaging, advertising restrictions, self-exclusion, and age verification
- **Obligation types** tell you where you have creative flexibility: verbatim (none), obligation-based (full), standard-based (moderate)
- **The compliance checklist** at the end of every jurisdiction module is your pre-launch sign-off document

> **Narrator:** Next up is Module 01: Advertising and Messaging Rules. That's where you'll learn the specific rules about what operators can and cannot say — and how {{PROGRAM_NAME}} brand voice works within those constraints. See you there.

---

## References

| Resource | What to use it for |
|----------|-------------------|
| [Jurisdictions README]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/README.md) | Three-layer architecture, adding new jurisdictions |
| [Compliance Module Template]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/_template/compliance-module.md) | Scaffold for new jurisdiction modules |
| [Nevada Compliance Module]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/united-states/nevada/README.md) | Worked example of a complete jurisdiction module |
| [Governance — Quarterly Regulatory Check]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md) | Review cadence and continuous update triggers |
