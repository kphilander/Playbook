---
content_type: jurisdiction-module
title: "{{JURISDICTION_NAME}} — Compliance Module"
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
game_type: []
audience: [general]
channel: [blog, in-app]
cultural_profile:
  voice: peer
  framing: individual
  humor: irreverent
  directness: blunt
  comfort: open
presentation:
  odds_format: american
  currency: usd
  sports_culture: "{{SPORTS_CULTURE}}"
  language: en-us
verticals: []                        # Which verticals this module covers: land-based, interactive, or both
regulatory_approach: ""              # principles-based | prescriptive | hybrid
adaptation_status: base
adaptation_notes: |
  Compliance modules contain jurisdiction-specific regulatory content.
  On-brand messaging examples need cultural adaptation (voice, humor,
  directness). Helpline display, mandatory messaging, and tool
  descriptions should match the deployed market's cultural profile.
last_updated: "{{YYYY-MM-DD}}"
---

# {{JURISDICTION_NAME}} — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in {{JURISDICTION_NAME}}. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. Replace all `{{PLACEHOLDER}}` tokens with values from your `_brand.yml` and jurisdiction research.
>
> **Verticals covered**: {{VERTICALS_SUMMARY}}
> *(If your deployment only covers one vertical — e.g., interactive only — sections marked with the other vertical's tag can be skipped.)*

> **Last verified**: {{YYYY-MM-DD}}
> **Next review due**: {{YYYY-MM-DD}} *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Verticals | Description |
|---|---|---|
| [Regulatory authority](#regulatory-authority) | All | Who regulates, key contacts |
| [Legal requirements](#legal-requirements) | All | Licensing, permitted products, legal framework |
| [Helpline](#helpline) | All | Jurisdiction helpline details and display rules |
| [Messaging requirements](#messaging-requirements) | All | Required statements and on-brand integration |
| [Advertising restrictions](#advertising-restrictions) | All | What you can and cannot say, where |
| [Self-exclusion](#self-exclusion) | All | Program details and {{PROGRAM_NAME}} integration |
| [Player protection — land-based](#player-protection--land-based) | Land-based | Venue-specific player protection tools |
| [Player protection — interactive](#player-protection--interactive) | Interactive | Online/mobile player protection tools |
| [Age verification](#age-verification) | All | Minimum age and verification requirements |
| [AML/KYC](#amlkyc) | All | Anti-money laundering and identity verification |
| [Collateral adaptation](#collateral-adaptation) | All | What to change across all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | All | Config values to add |
| [Compliance checklist](#compliance-checklist) | All | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Primary regulator** | {{REGULATOR_NAME}} |
| **Website** | {{REGULATOR_URL}} |
| **Governing legislation** | {{LEGISLATION}} |
| **License type** | {{LICENSE_TYPE}} |
| **Reporting to** | {{PARENT_AUTHORITY}} |
| **Regulatory approach** | {{APPROACH}} *(principles-based / prescriptive / hybrid)* |

### Upcoming changes

{{Note any pending regulatory changes, transitions, or legislative updates that operators should track. Include effective dates.}}

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | {{MIN_AGE}}+ |
| **Legal framework** | {{FRAMEWORK_DESCRIPTION}} |
| **Online gambling** | {{ONLINE_STATUS}} |
| **Permitted products** | {{PRODUCTS}} |

### Permitted products table

| Product | Vertical | Legal status | Regulator | Notes |
|---|---|---|---|---|
| {{PRODUCT}} | Land-based | {{STATUS}} | {{REGULATOR}} | {{NOTES}} |
| {{PRODUCT}} | Interactive | {{STATUS}} | {{REGULATOR}} | {{NOTES}} |

---

## Helpline

| Field | Value |
|---|---|
| **Name** | {{HELPLINE_NAME}} |
| **Phone** | {{HELPLINE_NUMBER}} |
| **Website** | {{HELPLINE_WEBSITE}} |
| **Hours** | {{HOURS}} |
| **Languages** | {{LANGUAGES}} |
| **Cost** | Free |

### Display rules

{{Describe where and how the helpline must be displayed. Split by vertical where rules differ:}}

#### Land-based display

{{Venue-specific helpline display requirements — location, signage, minimum prominence. Include the regulatory reference.}}

#### Interactive display

{{Online/app-specific helpline display requirements — placement on registration pages, account access screens, within-session. Include the regulatory reference.}}

### On-brand helpline display

**Bare compliance** (what most operators do):
> "{{BARE_COMPLIANCE_HELPLINE_MESSAGE}}"

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> {{ON_BRAND_HELPLINE_MESSAGE}}

*Pattern from: [Messaging Framework — Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

{{Describe the jurisdiction's messaging approach. Classify each requirement:}}

### Messaging regime summary

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| {{CONTEXT}} | Verbatim / Obligation-based / Standard-based | {{DESCRIPTION}} | {{REG_REF}} |

**Obligation types explained:**
- **Verbatim** — exact prescribed text that must appear word-for-word
- **Obligation-based** — must post information meeting a described standard, but no prescribed wording
- **Standard-based** — must display specific items (e.g., helpline name, program name) but surrounding copy is flexible

### Verbatim required statements

*Skip this section if no verbatim statements exist. Note "None" and explain the obligation-based approach instead.*

| Statement | Exact wording | Where required | Source |
|---|---|---|---|
| {{STATEMENT_NAME}} | "{{EXACT_WORDING}}" | {{PLACEMENT}} | {{REG_REF}} |

### Obligation-based requirements

*Requirements that specify what must be communicated without prescribing exact words.*

| Obligation | What must be communicated | Where | Source |
|---|---|---|---|
| {{OBLIGATION}} | {{DESCRIPTION}} | {{PLACEMENT}} | {{REG_REF}} |

### On-brand integration

For verbatim statements, show bare compliance and on-brand versions:

**Bare compliance:**
> "{{MANDATORY_STATEMENT}}"

**{{PROGRAM_NAME}} on-brand version:**
> {{Surround the mandatory statement with on-brand context. Required words appear exactly as mandated; surrounding copy uses Playbook voice.}}

For obligation-based requirements, operators have full flexibility to use {{PROGRAM_NAME}} messaging:

**Generic operator approach:**
> "{{GENERIC_VERSION}}"

**{{PROGRAM_NAME}} on-brand approach:**
> {{ON_BRAND_VERSION}}

**Rules for on-brand integration:**
1. Verbatim statements appear word-for-word — never paraphrase legally required language
2. Obligation-based requirements can use full {{PROGRAM_NAME}} voice as long as the obligation is met
3. Give all messaging visual dignity — don't shrink to minimum size
4. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework — Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| {{RULE}} | {{REQUIREMENT}} | {{VERTICALS}} | {{LEGISLATION_OR_CODE}} |

### Channel-specific rules

| Channel | Key restrictions | Verticals | Source |
|---|---|---|---|
| Broadcast (TV/radio) | {{RESTRICTIONS}} | {{VERTICALS}} | {{SOURCE}} |
| Digital | {{RESTRICTIONS}} | {{VERTICALS}} | {{SOURCE}} |
| Print | {{RESTRICTIONS}} | {{VERTICALS}} | {{SOURCE}} |
| Direct marketing | {{RESTRICTIONS}} | {{VERTICALS}} | {{SOURCE}} |
| In-venue | {{RESTRICTIONS}} | Land-based | {{SOURCE}} |
| Sponsorship | {{RESTRICTIONS}} | {{VERTICALS}} | {{SOURCE}} |

### Prohibited content

{{List specific content types, claims, or approaches that are prohibited.}}

### Required disclosures

{{List disclosures that must appear in all advertising. Split by vertical where they differ.}}

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md) *(create if this jurisdiction has complex advertising requirements)*.

---

## Self-exclusion

{{If the jurisdiction has separate self-exclusion regimes for land-based and interactive, document them separately:}}

### Land-based self-exclusion

| Field | Value |
|---|---|
| **Program name** | {{SELF_EXCLUSION_PROGRAM}} |
| **Duration options** | {{DURATIONS}} |
| **Scope** | {{SCOPE}} *(single property / operator group / statewide / national)* |
| **Enrollment method** | {{METHOD}} |
| **Reinstatement** | {{REINSTATEMENT_RULES}} |
| **Source** | {{REG_REF}} |

### Interactive self-exclusion

| Field | Value |
|---|---|
| **Program name** | {{SELF_EXCLUSION_PROGRAM}} |
| **Duration options** | {{DURATIONS}} |
| **Scope** | {{SCOPE}} *(single operator / all operators / centralized registry)* |
| **Account action** | {{WHAT_HAPPENS_TO_ACCOUNT}} |
| **Marketing cessation** | {{MARKETING_RULES}} |
| **Minimum exclusion period** | {{MIN_PERIOD}} |
| **Source** | {{REG_REF}} |

*If the jurisdiction uses a single self-exclusion program covering both verticals, merge these tables and note the unified scope.*

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your account" | {{OFFICIAL_TERM}} | Never in Tier 1 |
| Tier 2 (formal) | "Self-exclusion" | {{OFFICIAL_TERM}} | Legal documents, formal enrollment |
| Staff training | Both | {{OFFICIAL_TERM}} | When explaining the program's official name |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../collateral/customer-service/staff-faq.md):

> **Q: What is {{SELF_EXCLUSION_PROGRAM}}?**
>
> {{SELF_EXCLUSION_PROGRAM}} is {{JURISDICTION_NAME}}'s {{SCOPE}} self-exclusion program. Players can exclude themselves for {{DURATIONS}}. During exclusion, they cannot enter {{SCOPE_DETAILS}}. If a player asks about it, explain the options and offer to help them get started. Use "take a break" in casual conversation, "{{SELF_EXCLUSION_PROGRAM}}" when referring to the specific program.

---

## Player protection — land-based

*Skip this section if the jurisdiction has no legal land-based gambling, or if your deployment is interactive-only.*

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Problem gambling information posting | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Helpline display | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Credit/check self-limitation | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Employee training | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Self-exclusion | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Session time tracking | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Activity statements | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |

### {{PROGRAM_NAME}} tool messaging — land-based

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| {{TOOL}} | "{{COPY}}" | {{REG_REF}} |

---

## Player protection — interactive

*Skip this section if the jurisdiction has no legal interactive/online gambling, or if your deployment is land-based only.*

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Deposit limits | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Loss limits | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Session / play-time limits | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Cool-off / break periods | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Time-based exclusion | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Activity statements / game history | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Responsible gambling message | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Self-exclusion | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Single account enforcement | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Auto-play restrictions | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |
| Behavioural monitoring | {{YES_NO}} | {{DETAILS}} | {{REG_REF}} |

### {{PROGRAM_NAME}} tool messaging — interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit — play on your terms. Takes 10 seconds." | {{REG_REF}} |
| Loss limits | "Set a loss limit — no surprises at the end of a session." | {{REG_REF}} |
| Session limits | "Set a session reminder — your dashboard, your rules." | {{REG_REF}} |
| {{TOOL}} | "{{COPY}}" | {{REG_REF}} |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | {{MIN_AGE}}+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.{{jurisdiction-key}}` |
| **`{{MIN_AGE}}` token value** | {{MIN_AGE}} |
| **Statutory basis** | {{REG_REF}} |

### Land-based verification

| Requirement | Details | Source |
|---|---|---|
| **Method** | {{METHOD}} | {{REG_REF}} |
| **Acceptable ID** | {{ID_TYPES}} | {{REG_REF}} |

### Interactive verification

| Requirement | Details | Source |
|---|---|---|
| **Registration requirements** | {{DETAILS}} | {{REG_REF}} |
| **Verification method** | {{METHOD}} | {{REG_REF}} |
| **Verification window** | {{WINDOW}} | {{REG_REF}} |
| **Pre-verification limits** | {{LIMITS}} | {{REG_REF}} |

### Age messaging

All collateral in this jurisdiction must display `{{MIN_AGE}}+` age notice:

> "You must be {{MIN_AGE}}+ to gamble."

---

## AML/KYC

| Requirement | Value |
|---|---|
| **AML authority** | {{AML_AUTHORITY}} |
| **KYC threshold** | {{THRESHOLD}} |
| **Reporting requirements** | {{REQUIREMENTS}} |
| **Player-facing impact** | {{WHAT_PLAYERS_EXPERIENCE}} |

### Player-facing messaging

When AML/KYC processes affect players (identity verification, source of funds checks), use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required for all players. Takes about 2 minutes."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to jurisdiction-specific adaptations.

| Category | Collateral | Verticals | Adaptation required | Token |
|---|---|---|---|---|
| **Digital** | Website | Both | {{ADAPTATION}} | {{TOKEN}} |
| **Digital** | Wagering account / app | Interactive | {{ADAPTATION}} | {{TOKEN}} |
| **Digital** | Email templates | Both | {{ADAPTATION}} | {{TOKEN}} |
| **Digital** | Social media | Both | {{ADAPTATION}} | {{TOKEN}} |
| **Print** | Brochure | Both | {{ADAPTATION}} | {{TOKEN}} |
| **Print** | Rack card | Land-based | {{ADAPTATION}} | {{TOKEN}} |
| **Print** | Table tent | Land-based | {{ADAPTATION}} | {{TOKEN}} |
| **Print** | Helpline card | Both | {{ADAPTATION}} | {{TOKEN}} |
| **Environmental** | Venue signage | Land-based | {{ADAPTATION}} | {{TOKEN}} |
| **Environmental** | Digital display | Land-based | {{ADAPTATION}} | {{TOKEN}} |
| **Video/Audio** | TV spot | Both | {{ADAPTATION}} | {{TOKEN}} |
| **Video/Audio** | Radio spot | Both | {{ADAPTATION}} | {{TOKEN}} |
| **Video/Audio** | Pre-roll | Interactive | {{ADAPTATION}} | {{TOKEN}} |
| **Customer service** | Conversation scripts | Both | {{ADAPTATION}} | {{TOKEN}} |
| **Customer service** | Staff FAQ | Both | {{ADAPTATION}} | {{TOKEN}} |

For a detailed collateral adaptation guide, see the [collateral adaptation template](../../jurisdictions/_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml`:

```yaml
# ─── HELPLINES ───────────────────────────────
helplines:
  {{country-slug}}:
    {{jurisdiction-slug}}:
      number: "{{HELPLINE_NUMBER}}"
      website: "{{HELPLINE_WEBSITE}}"
      label: "{{HELPLINE_LABEL}}"
      hours: "{{HOURS}}"

# ─── LEGAL ───────────────────────────────────
legal:
  minimum_gambling_age:
    {{country-slug}}-{{jurisdiction-slug}}: {{MIN_AGE}}

# ─── MESSAGING ───────────────────────────────
messaging:
  mandatory:
    {{country-slug}}-{{jurisdiction-slug}}: "{{MANDATORY_STATEMENT}}"
    # Use obligation type suffix where needed:
    #   -general: obligation-based (no prescribed wording)
    #   -wagering: verbatim message for wagering/interactive accounts
    #   -venue: verbatim message for physical signage
```

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in {{JURISDICTION_NAME}}.

### Regulatory
- [ ] Identified primary regulator and current legislation
- [ ] Confirmed license requirements and status
- [ ] Verified legal gambling age: {{MIN_AGE}}+
- [ ] Reviewed permitted products table
- [ ] Checked for pending regulatory changes
- [ ] Identified deployment verticals: [ ] Land-based [ ] Interactive [ ] Both

### Messaging
- [ ] Verbatim statements display word-for-word (if any)
- [ ] Obligation-based requirements met with on-brand messaging
- [ ] Helpline displayed per jurisdiction rules (land-based and/or interactive)
- [ ] Age notice ({{MIN_AGE}}+) on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to jurisdiction values

### Advertising
- [ ] Advertising content reviewed against jurisdiction rules
- [ ] Required disclosures present in all ads
- [ ] No prohibited content in any touchpoint
- [ ] Channel-specific rules followed (including any interactive-specific requirements)

### Self-exclusion
- [ ] Land-based: self-exclusion program integrated (if applicable)
- [ ] Interactive: self-exclusion with account closure implemented (if applicable)
- [ ] Self-excluded patrons removed from all marketing
- [ ] Staff trained on self-exclusion enrollment and enforcement
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} tiers

### Player protection — land-based
*Check only if deploying in land-based venues.*
- [ ] Problem gambling information posted per jurisdiction requirements
- [ ] Helpline displayed in required locations
- [ ] Employee training program implemented
- [ ] Credit/check self-limitation available (if required)

### Player protection — interactive
*Check only if deploying on interactive/online platforms.*
- [ ] Deposit limits implemented (if required)
- [ ] Loss limits implemented (if required)
- [ ] Session/play-time limits implemented (if required)
- [ ] Cool-off/break periods available (if required)
- [ ] Activity statements/game history available (if required)
- [ ] Responsible gambling message displayed (if required)
- [ ] Auto-play restrictions enforced (if required)

### Age verification
- [ ] Land-based: age verification at venue entry / gaming areas
- [ ] Interactive: registration and identity verification per jurisdiction requirements

### Content
- [ ] All collateral adapted per collateral adaptation table
- [ ] Staff FAQ updated with jurisdiction-specific Q&As
- [ ] Conversation scripts updated

### Governance
- [ ] `_brand.yml` updated with jurisdiction values
- [ ] `Last verified` date set
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [Messaging Framework — Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../collateral/customer-service/staff-faq.md) | [Governance](../../brand-book/08-governance.md) | [Jurisdictions README](../README.md)*
