---
content_type: training-module
title: "Audit & Review Process"
program_id: compliance
module_number: 2
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
audience_role:
  - legal-regulatory
duration_minutes: 15
prerequisites:
  - all-employees/00-welcome-to-playbook.md
  - all-employees/01-two-tier-system.md
  - compliance/00-regulatory-landscape.md
  - compliance/01-advertising-and-messaging-rules.md
learning_objectives:
  - "Execute the quarterly regulatory check process using the Playbook governance framework"
  - "Apply the content review rubric to evaluate new or updated {{PROGRAM_NAME}} content before publication"
  - "Describe the scope and cadence of the annual brand review"
  - "Identify continuous update triggers and their required response timelines"
exercises:
  - scenario
  - scenario
  - reflection
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
  The review cadence and rubric are universal. The specific regulatory
  check items may need adaptation for non-US jurisdictions. Timeline
  requirements (30 days, immediately, etc.) are Playbook standards
  and should not be modified.
last_updated: "2025-03-21"
---

# Audit & Review Process

This module teaches you the ongoing processes that keep {{PROGRAM_NAME}} content current and compliant: the quarterly regulatory check, the content review rubric, the annual brand review, and the triggers that require immediate action. Compliance is not a one-time launch activity — it's a continuous cycle.

> **Operator note**: Replace all `{{PLACEHOLDER}}` tokens with values from `_brand.yml`. The timelines and rubric in this module come directly from the [Governance chapter]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md) of the brand book and should not be modified. Adapt the scenario exercise examples to your operator's specific jurisdictions. Narrator scripts should be recorded in the Playbook Tier 1 voice.

**Program:** Compliance | **Duration:** ~15 min | **Prerequisites:** Compliance Modules 00 and 01

---

## Quick-scan index

| Section | What it covers | Time |
|---------|----------------|------|
| [Learning objectives](#learning-objectives) | What you'll know after this module | — |
| [Section 1: The Quarterly Regulatory Check](#section-1-the-quarterly-regulatory-check) | What to verify every quarter, and how | ~5 min |
| [Section 2: Content Review Rubric](#section-2-content-review-rubric) | Scoring new content before publication | ~4 min |
| [Section 3: Annual Review and Continuous Triggers](#section-3-annual-review-and-continuous-triggers) | The annual brand review scope and what triggers immediate updates | ~4 min |
| [Module test](#module-test) | 5 graded questions, 80% to pass | ~2 min |
| [Key takeaways](#key-takeaways) | Summary | — |
| [References](#references) | Links to Playbook brand assets | — |

---

## Learning objectives

After completing this module, you will be able to:

1. Execute the quarterly regulatory check process using the Playbook governance framework
2. Apply the content review rubric to evaluate new or updated {{PROGRAM_NAME}} content before publication
3. Describe the scope and cadence of the annual brand review
4. Identify continuous update triggers and their required response timelines

---

## Section 1: The Quarterly Regulatory Check

### Reading

In the previous modules, you learned how the jurisdiction module system works and how advertising rules vary across markets. This module builds on that foundation — now you'll learn the processes that keep everything current. Think about this: if a helpline number changed tomorrow, would you know exactly what to update and how fast?

Gambling regulations change frequently. A helpline number rebrands. An advertising code gets updated. A self-exclusion program adds new duration options. A new jurisdiction passes legislation. If your {{PROGRAM_NAME}} content doesn't keep pace, it stops being compliant — and it stops being trustworthy.

The [Governance chapter]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md) defines a **quarterly regulatory check** — a structured review that compliance staff execute every three months. Here's what to verify:

| Check item | What to verify | Where to look |
|-----------|---------------|---------------|
| **Mandatory messaging** | Jurisdiction-specific required messaging is still accurate | Jurisdiction module → Messaging requirements section |
| **Helpline numbers and URLs** | All helpline numbers are still active and correctly displayed | Jurisdiction module → Helpline section; `_brand.yml` → `helplines:` |
| **Advertising rules** | No changes to advertising restrictions in any deployed jurisdiction | Jurisdiction module → Advertising restrictions section |
| **Self-exclusion** | Self-exclusion program requirements haven't been updated | Jurisdiction module → Self-exclusion section |
| **New jurisdictions** | No new jurisdictions need to be added for planned market launches | Jurisdictions README → Available jurisdictions table |

**Process:**
1. Pull up the jurisdiction module for each market where {{PROGRAM_NAME}} is deployed
2. Check the `Last verified` and `Next review due` dates — if overdue, prioritize that module
3. For each check item above, compare the module content against current regulatory sources (linked in the module)
4. Update the `Last verified` date and set the new `Next review due` date
5. If anything has changed, follow the continuous update timeline in Section 3
6. Document the review (date, reviewer, jurisdictions checked, findings)

Every jurisdiction module includes a `Last verified` date and a `Next review due` date aligned to this quarterly cycle. These dates are your audit trail — they tell anyone reviewing the system when the last check happened and when the next one is due.

### Narrator Script

> **Narrator:** [transition slide] Compliance isn't a one-time launch activity. It's a quarterly cycle. The Playbook governance chapter defines a structured regulatory check that you run every three months.
>
> [show checklist] Five things to verify every quarter: mandatory messaging still accurate, helpline numbers still active, advertising rules unchanged, self-exclusion requirements current, and no new jurisdictions needed.
>
> [show process steps] The process: pull up each jurisdiction module, check the dates, compare against current regulatory sources, update the verification dates, and document what you found.
>
> [pause] Here's the key discipline: every jurisdiction module has a "last verified" date and a "next review due" date. Those dates are your audit trail. If the next review date has passed and nobody's checked, that's a compliance gap.
>
> [transition] Now let's talk about how to evaluate material before it launches.

### Exercise: Quarterly Check Priorities

**Type:** scenario

**Instructions:** You are conducting the quarterly regulatory check. Read each scenario and determine the correct next step.

| Scenario | Correct Answer | Feedback (correct) | Feedback (incorrect) |
|----------|---------------|-------------------|---------------------|
| You pull up the Nevada jurisdiction module and see the `Next review due` date was three weeks ago. No one has checked it since the last quarter. What do you do first? | Prioritize this module — check all five items against current regulatory sources immediately, then update the verification dates. | Correct — an overdue review date is a compliance gap. Prioritize it, verify all five check items, and update both the `Last verified` and `Next review due` dates. Document the delay in your review notes. | The overdue date means this module should be prioritized. Check all five items (messaging, helplines, advertising, self-exclusion, new jurisdictions), update the dates, and document the review — including the fact that it was overdue. |
| During your quarterly check of the British Columbia module, you discover that the self-exclusion program has added a new 3-month duration option that isn't reflected in the module. What's your next step? | Update the module to reflect the new option, then follow the continuous update process in Section 3 for regulatory changes. | Right — a regulatory change discovered during the quarterly check follows the same continuous update process. Update the module, set the new verification dates, and document the change. The 30-day timeline for regulatory changes applies from the effective date. | This is a regulatory change that requires updating the module content. Follow the continuous update process: update the module, verify the change against official sources, set new dates, and document it. |

---

## Section 2: Content Review Rubric

### Reading

Before any new or updated {{PROGRAM_NAME}} content is published, it must pass the **content review rubric** from the [Governance chapter]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md). The rubric scores content on six dimensions, each rated 1 to 3. Content must score 2 or higher on every dimension to ship. Any dimension scoring 1 is a blocker.

| Dimension | 1 — Needs work | 2 — Acceptable | 3 — Excellent |
|-----------|----------------|----------------|---------------|
| **Voice alignment** | Sounds like compliance or clinical copy | Follows {{PROGRAM_NAME}} voice but could be sharper | Unmistakably {{PROGRAM_NAME}} — a friend explaining something interesting |
| **Specificity** | Uses generic phrases ("responsible gambling," "play smart") | Names some specific behaviors | Every sentence names a concrete action or fact |
| **Stigma-free language** | Uses clinical/judgmental terms in Tier 1 | Mostly clean, one or two terms to swap | Fully aligned with stigma-free language guide |
| **Accessibility** | Fails contrast, missing alt text, or broken keyboard nav | Passes WCAG AA, basic screen reader support | AAA where possible, tested on real devices |
| **Actionability** | No clear CTA or next step | CTA present but could be stronger | CTA is obvious, specific, and compelling |
| **Visual quality** | Looks like a compliance afterthought | Acceptable but not remarkable | Matches or exceeds commercial content quality |

**How compliance staff use the rubric:**

Your role is not to score every dimension yourself — voice alignment and visual quality may fall to the brand owner or design lead. But compliance staff should focus on:
- **Specificity**: Does the content make specific, accurate claims? Are regulatory references correct?
- **Stigma-free language**: Does the content avoid clinical/judgmental terms in Tier 1? (Review against the stigma-free language guide.)
- **Accessibility**: Does the content meet basic accessibility standards for the jurisdiction?

The rubric evaluates content *before* publication. For testing how content performs *with players* after publication, the operator uses the [Player Testing Protocol]({{PLAYBOOK_REPO}}/blob/main/docs/player-testing-protocol.md) — that's a separate process focused on engagement and resonance.

**Approval levels** also matter. Different types of changes require different sign-offs:

| Change type | Approval required |
|-------------|-------------------|
| Typo / formatting fix | Brand owner |
| Messaging update | Brand owner + compliance |
| Jurisdiction module | Brand owner + legal/compliance |
| Voice / tone change | Brand owner + program lead |
| Structural change | Brand owner + executive sponsor |

### Narrator Script

> **Narrator:** [transition slide] Before any {{PROGRAM_NAME}} material launches, it must pass the review rubric. Six dimensions, scored 1 to 3. Every dimension must score at least 2 to ship. A score of 1 on any dimension is a blocker.
>
> [show rubric] Voice alignment, specificity, stigma-free language, accessibility, actionability, and visual quality. As compliance staff, you're primarily looking at specificity — are the claims accurate? — and stigma-free language — does the material avoid clinical terms in Tier 1?
>
> [pause] You're also the gatekeeper for approval levels. Messaging updates need brand owner plus compliance sign-off. Jurisdiction modules need brand owner plus legal/compliance. Know your lane.
>
> [transition] Now let's zoom out to the annual review and the triggers that require immediate action.

### Exercise: Does This Content Pass?

**Type:** scenario

**Instructions:** You are reviewing a piece of {{PROGRAM_NAME}} content before publication. Read the scenario and determine whether the content passes the review rubric or needs revision — and identify which rubric dimension is the issue.

| Scenario | Correct Answer | Feedback (correct) | Feedback (incorrect) |
|----------|---------------|-------------------|---------------------|
| A new social media card about deposit limits uses the phrase "gamble responsibly" as its CTA. The visual design is polished and accessible. | Needs revision — Specificity and Stigma-free language. "Gamble responsibly" is a retired generic phrase that fails both the specificity test (no concrete action) and the stigma-free language guide. | Right — "gamble responsibly" is exactly the kind of generic, retired phrase that {{PROGRAM_NAME}} was designed to replace. A better CTA would name a specific action like "Set your deposit limit — takes 10 seconds." | "Gamble responsibly" fails the specificity test (score 1 — generic phrase) and the stigma-free language audit (it's a retired phrase). Both are blockers. |
| A jurisdiction module update changes the helpline URL for British Columbia. The content team updates the URL in `_brand.yml`, verifies it resolves correctly, updates the jurisdiction module, and sets a new "Last verified" date. | Passes — the update follows the correct process. Approval needed: brand owner. | Correct — a helpline URL change is a correction-level update. The team followed the process: update the config, verify it works, update the module, and document the change. | This is a straightforward correction. The process was followed correctly: config updated, URL verified, module updated, date set. |
| An operator creates a new poster for a Nevada casino floor. The poster features the helpline number prominently at 16pt bold, uses {{PROGRAM_NAME}} voice for the messaging, and passes WCAG AA contrast. However, the messaging does not include any information about the nature and symptoms of problem gambling. | Needs revision — the poster does not fully meet Nevada's Regulation 5.170(2) obligation, which requires both the helpline number and written materials concerning the nature and symptoms of problem gambling. | Exactly — Reg 5.170(2) requires both the helpline number and problem gambling information. A poster with only the helpline number meets half the obligation. Adding brief problem gambling awareness content alongside the helpline would satisfy the requirement. | Check the Nevada jurisdiction module: Reg 5.170(2) requires written materials about the nature and symptoms of problem gambling in addition to the helpline number. Both elements are needed. |

---

## Section 3: Annual Review and Continuous Triggers

### Reading

**The annual brand review** is a comprehensive check conducted once per year. While the quarterly regulatory check focuses on legal accuracy, the annual review evaluates the entire brand system:

| Review area | What to check |
|-------------|---------------|
| **Brand foundation** | Do the mission, vision, and pillars still reflect the program's direction? |
| **Visual identity** | Are assets current? Do colors and fonts still meet accessibility standards? |
| **Voice and tone** | Is the language guide current? Are there new terms to add or retire? |
| **Messaging** | Are taglines and CTAs still effective? Is the content still engaging? |
| **Accessibility** | Have WCAG standards been updated? New requirements? |
| **Jurisdictions** | Have regulatory requirements changed? All modules current? |

Compliance staff are primarily responsible for the jurisdictions review area, but should participate in the full annual review to flag any interactions between brand changes and regulatory requirements.

**Continuous update triggers** require action outside the quarterly and annual cycles. When one of these events occurs, the governance chapter specifies the response timeline:

| Trigger | Action | Timeline |
|---------|--------|----------|
| Regulatory change | Update affected jurisdiction module | Within 30 days of effective date |
| Helpline number change | Update `_brand.yml` and all content | Immediately |
| New jurisdiction launch | Create module from template | Before market launch |
| Content underperforming | Review and revise | Within 2 weeks |
| Accessibility issue | Fix | Within 1 week |

"Immediately" means what it says. If a helpline number changes and your content still displays the old number, players calling that number may not reach help. That's not a compliance nuance — it's a direct impact on someone who may need support.

"Within 30 days of effective date" for regulatory changes means you're tracking upcoming changes as part of your quarterly check, not discovering them after they take effect. The "upcoming changes" section of each jurisdiction module is where you document what's coming.

### Narrator Script

> **Narrator:** [transition slide] The quarterly check keeps regulations current. The annual review takes a step back and evaluates the entire brand system — identity, voice, messaging, accessibility, and jurisdictions.
>
> [show annual review table] As compliance staff, your primary focus in the annual review is the jurisdictions area. But you should participate in the full review because brand changes can interact with regulatory requirements — a new color, a voice update, or a messaging change might have compliance implications.
>
> [show continuous triggers] Some things can't wait for the quarterly cycle. A helpline number change requires immediate action. A regulatory change needs to be addressed within 30 days of the effective date. A new market launch needs a jurisdiction module before the first piece of material ships.
>
> [pause] The governance chapter is very clear about timelines. "Immediately" means immediately. If a helpline number changes and your material still shows the old one, that's not just a compliance issue — it's potentially directing someone in need to a dead number.
>
> [transition to test] Last test of the Compliance program. Five questions, 80% to pass.

### Exercise: Timeline Match

**Type:** scenario

**Instructions:** Match each trigger event to its required response timeline from the governance framework.

| Scenario | Correct Answer | Feedback (correct) | Feedback (incorrect) |
|----------|---------------|-------------------|---------------------|
| Your operator announces a launch into a new US state next quarter. A jurisdiction module does not yet exist for this market. What is the required timeline? | The jurisdiction module must be created from the template before market launch — no {{PROGRAM_NAME}} material can ship without it. | Correct — the governance framework requires a jurisdiction module to exist before any material ships in a new market. Use the jurisdiction template to create the module, populate it with the new state's regulatory requirements, and have it reviewed by legal/compliance before launch. | New jurisdiction launches require a completed module before the first piece of material goes live. The timeline isn't a fixed number of days — it's "before market launch." Start early. |
| You learn that a jurisdiction's problem gambling helpline has rebranded and changed its phone number. The new number is already active. What's the timeline? | Immediately — update `_brand.yml` and all content that displays the helpline number. | Right — helpline changes are the highest-urgency trigger. "Immediately" means now, not at the next quarterly check. Update the config file, verify the new number works, and update every piece of content that displays it. A wrong helpline number could mean someone in need doesn't reach help. | Helpline number changes require immediate action — the governance chapter is explicit about this. Update `_brand.yml`, verify the new number, and update all content. This cannot wait for the quarterly cycle. |
| An industry regulator publishes updated advertising guidelines that take effect in 60 days. How should you respond? | Begin updating the affected jurisdiction module now. The update must be complete within 30 days of the effective date. | Correct — regulatory changes must be addressed within 30 days of the effective date. Since you have advance notice, you should start the update process now rather than waiting. Document the upcoming change in the jurisdiction module's "upcoming changes" section and complete the full update before the deadline. | The governance framework specifies "within 30 days of effective date" for regulatory changes. With 60 days of advance notice, you should begin now — track the upcoming change and complete the update well before the deadline. |

---

## Module Test

> **Narrator:** [transition slide] Time to check what you've learned. You'll answer 5 questions. You need 80% — that's 4 out of 5 — to pass. Take your time. If you don't pass on the first try, you can review the material and retake the test.

### Question 1

**Assesses:** Learning objective 1

**Stem:** How often should the quarterly regulatory check be conducted?

| Option | Text |
|--------|------|
| A | Once per year, as part of the annual brand review |
| B | Every 3 months, verifying messaging, helplines, advertising rules, self-exclusion, and new jurisdiction needs |
| C | Only when a regulatory change is announced |
| D | Every 6 months, at each Compliance Certificate recertification |

**Correct:** B

**Explanation:** The quarterly regulatory check runs every three months and covers five areas: mandatory messaging accuracy, helpline number/URL activity, advertising rule changes, self-exclusion requirement updates, and new jurisdiction needs. This is separate from the annual brand review, which covers the full brand system.

**Source:** [Governance — Quarterly Regulatory Check]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md)

---

### Question 2

**Assesses:** Learning objective 2

**Stem:** A piece of {{PROGRAM_NAME}} content scores a 1 on the "Specificity" dimension of the review rubric. What happens?

| Option | Text |
|--------|------|
| A | The content can ship if all other dimensions score 3 |
| B | The content is flagged for improvement but can ship with a note |
| C | The content is blocked — a score of 1 on any dimension means it cannot be published until fixed |
| D | The content is escalated to the executive sponsor for a final decision |

**Correct:** C

**Explanation:** Any dimension scoring 1 on the content review rubric is a blocker. The content must be revised and re-scored before publication. This applies to all six dimensions — voice alignment, specificity, stigma-free language, accessibility, actionability, and visual quality.

**Source:** [Governance — Content Review Rubric]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md)

---

### Question 3

**Assesses:** Learning objective 4

**Stem:** Your operator's jurisdiction helpline has changed its phone number. According to the Playbook governance framework, what is the required response timeline?

| Option | Text |
|--------|------|
| A | Update within 30 days of the effective date |
| B | Update at the next quarterly regulatory check |
| C | Update immediately |
| D | Update within 2 weeks |

**Correct:** C

**Explanation:** Helpline number changes require immediate action. If content displays an old helpline number, players calling that number may not reach support. The governance framework specifies "Immediately" for helpline changes — this is the highest-urgency trigger.

**Source:** [Governance — Continuous Updates]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md)

---

### Question 4

**Assesses:** Learning objective 3

**Stem:** Which of the following is NOT part of the annual brand review scope?

| Option | Text |
|--------|------|
| A | Checking whether the mission, vision, and pillars still reflect the program's direction |
| B | Verifying that visual assets meet current accessibility standards |
| C | Auditing player self-exclusion enrollment records for compliance with jurisdiction rules |
| D | Evaluating whether the voice and tone language guide needs new terms added or old terms retired |

**Correct:** C

**Explanation:** The annual brand review evaluates the brand system itself: foundation, visual identity, voice and tone, messaging, accessibility, and jurisdictions. Auditing individual player self-exclusion records is an operational compliance task, not a brand review activity. {{PROGRAM_NAME}} provides the content and messaging system; it does not manage individual player records.

**Source:** [Governance — Annual Brand Review]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md)

---

### Question 5

**Assesses:** Learning objective 2

**Stem:** You are reviewing a new piece of content for publication. Which approval is required for an update to a jurisdiction module?

| Option | Text |
|--------|------|
| A | Brand owner only |
| B | Brand owner + design lead |
| C | Brand owner + legal/compliance |
| D | Brand owner + executive sponsor |

**Correct:** C

**Explanation:** Jurisdiction module changes require sign-off from both the brand owner (to ensure brand consistency) and legal/compliance (to verify regulatory accuracy). This dual approval ensures that jurisdiction-specific content is both on-brand and legally correct.

**Source:** [Governance — Approval Workflows]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md)

---

## Key Takeaways

> **Narrator:** [transition slide] Let's recap what you've learned — and what the Compliance program has covered overall.

- **Quarterly regulatory check**: Five items verified every 3 months — messaging, helplines, advertising, self-exclusion, new jurisdictions
- **Content review rubric**: Six dimensions, scored 1-3. All must score 2+ to ship. A 1 on any dimension is a blocker.
- **Annual brand review**: Comprehensive evaluation of the full brand system — identity, voice, messaging, accessibility, and jurisdictions
- **Continuous triggers**: Helpline changes require immediate action. Regulatory changes within 30 days. New jurisdictions before market launch.
- **Approval levels**: Different changes need different sign-offs. Jurisdiction modules require brand owner + legal/compliance.

> **Narrator:** That wraps the Compliance program. You now know how to navigate the jurisdiction module system, evaluate material for compliance, and keep everything current through the quarterly check, the annual review, and continuous triggers. Your Compliance Certificate is valid for 6 months — the shorter cycle reflects how fast this landscape moves. See you at recertification.

---

## References

| Resource | What to use it for |
|----------|-------------------|
| [Governance]({{PLAYBOOK_REPO}}/blob/main/brand-book/08-governance.md) | Full governance framework — review cadence, rubric, approval workflows, triggers |
| [Player Testing Protocol]({{PLAYBOOK_REPO}}/blob/main/docs/player-testing-protocol.md) | Post-publication testing (separate from the pre-publication review rubric) |
| [Jurisdictions README]({{PLAYBOOK_REPO}}/blob/main/jurisdictions/README.md) | Adding new jurisdictions, three-layer architecture |
| [Application Guidelines]({{PLAYBOOK_REPO}}/blob/main/brand-book/07-application-guidelines.md) | Co-branding rules and placement requirements |
