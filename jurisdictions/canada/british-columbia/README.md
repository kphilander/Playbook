---
content_type: jurisdiction-module
title: "British Columbia — Compliance Module"
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
game_type: [slots, blackjack, roulette, sports-betting, poker, lottery]
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
  currency: cad
  sports_culture: us-major-leagues
  language: en-us
adaptation_status: base
adaptation_notes: |
  BC module uses CAD currency context. Mandatory messaging ("Know your
  limit, play within it.") is jurisdiction-specific and cannot be
  adapted. On-brand messaging examples need cultural adaptation for
  non-North-American deployments. GameSense compatibility section is
  BC-specific. GPEB → IGCO transition (April 2026) needs monitoring.
last_updated: 2026-02-22
---

# British Columbia — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in British Columbia. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. BC has a mandatory awareness message ("Know your limit, play within it"), a provincial helpline (Gambling Support BC: 1-888-795-6111), and an active player education program (GameSense) that {{PROGRAM_NAME}} needs to work alongside.

> **Last verified**: 2026-02-22
> **Next review due**: 2026-05-22 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | GPEB, IGCO transition, BCLC |
| [Legal requirements](#legal-requirements) | 19+, BCLC monopoly model, permitted products |
| [Helpline](#helpline) | Gambling Support BC details and display rules |
| [Mandatory messaging](#mandatory-messaging) | "Know your limit, play within it" |
| [Advertising restrictions](#advertising-restrictions) | Provincial rules and national code |
| [GameSense compatibility](#gamesense-compatibility) | Working alongside BC's player education program |
| [Self-exclusion](#self-exclusion) | Game Break program |
| [Player protection tools](#player-protection-tools) | Deposit limits, session tracking, cool-off |
| [Age verification](#age-verification) | 19+ requirements |
| [AML/KYC](#amlkyc) | FINTRAC requirements |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Current regulator** | Gaming Policy and Enforcement Branch (GPEB), Ministry of Attorney General |
| **Future regulator** | Independent Gambling Control Office (IGCO) — effective April 13, 2026 |
| **Crown corporation** | British Columbia Lottery Corporation (BCLC) |
| **Governing legislation** | Gaming Control Act (SBC 2002, c.14) |
| **BCLC role** | Conducts and manages all legal gambling in BC on behalf of the province |

### GPEB to IGCO transition

On **April 13, 2026**, BC's gambling regulatory functions will transfer from GPEB to the **Independent Gambling Control Office (IGCO)**. Key changes:

| Area | GPEB (current) | IGCO (from April 2026) |
|---|---|---|
| **Structure** | Branch within Ministry of Attorney General | Independent regulatory body |
| **Independence** | Reports to ministry | Arm's-length from government |
| **Scope** | Same regulatory functions | Same scope, enhanced independence |
| **Player protection** | GPEB oversight | IGCO oversight |

**What this means for {{PROGRAM_NAME}} operators**: The regulatory requirements themselves are not expected to change materially at transition. IGCO inherits GPEB's existing regulatory framework. However, operators should:
- Monitor IGCO's website for updated guidance after April 2026
- Update internal references from "GPEB" to "IGCO"
- Watch for any new conditions or standards IGCO may introduce as it establishes itself

### BCLC's role

BCLC is the **crown corporation** that conducts and manages all legal gambling in British Columbia. It is not the regulator — GPEB/IGCO regulates, BCLC operates. BCLC:

- Operates PlayNow.com (online gambling)
- Manages casino and community gaming contracts with service providers
- Develops and administers the **GameSense** player education program
- Sets responsible gambling standards for all BC gambling venues
- Reports to the Ministry of Finance (revenue) and is regulated by GPEB/IGCO (compliance)

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 19+ |
| **Legal framework** | Provincial monopoly — BCLC conducts all legal gambling |
| **Online gambling** | PlayNow.com (BCLC) is the only legal online gambling site in BC |
| **Private operators** | Not permitted to operate independently; service providers contract through BCLC |

### Permitted products

| Product | Legal status | Operator | Notes |
|---|---|---|---|
| Casino (slots, table games) | Legal | BCLC via service providers | 35 casinos, 17 community gaming centres |
| Lottery | Legal | BCLC | Including Lotto 6/49, Lotto Max, scratch tickets |
| Sports betting | Legal | BCLC (PlayNow.com) | Single-event since August 2021 |
| Horse racing | Legal | Regulated separately | Under Horse Racing Act |
| Online gambling | Legal | BCLC (PlayNow.com) | Only legal online operator in BC |
| Poker (live) | Legal | BCLC venues | Available in licensed casinos |
| Bingo | Legal | BCLC via community gaming centres | Community gaming model |

### Key regulatory notes

- BC operates a **monopoly model** — all legal gambling flows through BCLC
- Private operators cannot offer gambling directly to BC residents without contracting through BCLC
- This differs from Ontario's open iGaming market — in BC, {{PROGRAM_NAME}} deployment most likely occurs through a BCLC service provider relationship or as supplementary content alongside BCLC's existing programs

---

## Helpline

| Field | Value |
|---|---|
| **Name** | Gambling Support BC |
| **Phone** | 1-888-795-6111 |
| **Website** | www.gamblingsupportbc.ca |
| **Hours** | 24/7 |
| **Languages** | English, French, Mandarin, Cantonese, Punjabi |
| **Cost** | Free |
| **Text** | Available via website |
| **Chat** | Available via website |

### Display rules

- The helpline must be **visible and accessible** in all gambling venues and on all gambling platforms
- Display must include the **phone number** (1-888-795-6111) at minimum
- BCLC venues display "Gambling Support BC" alongside the number
- Print materials: minimum **14pt bold** for the helpline number
- Digital: helpline must be **no more than one click/tap away** from any screen
- The helpline should be presented as available to **anyone with questions about gambling** — not only to people who identify as having a problem

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If gambling is a problem for you or someone you know, call the Gambling Support BC helpline at 1-888-795-6111."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support is available 24/7 — in English, French, Mandarin, Cantonese, and Punjabi. For any question about gambling.
> **Call 1-888-795-6111** | **Visit gamblingsupportbc.ca**

Both meet the regulatory requirement. The second version is more inviting, highlights multilingual availability, provides multiple contact options, and frames the helpline as "for any question" rather than only for people who already identify as having a problem.

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Mandatory messaging

### Required statement

| Field | Value |
|---|---|
| **Statement** | "Know your limit, play within it." |
| **Source** | BCLC responsible gambling program / GPEB conditions |
| **Can it be paraphrased?** | **No** — this is the exact wording. Do not alter, abbreviate, or rephrase. |
| **Where required** | All gambling advertising, venue signage, player-facing materials, digital platforms |
| **Token** | `{{MANDATORY_STATEMENT}}` |
| **`_brand.yml` key** | `messaging.mandatory.canada-british-columbia` |

### On-brand integration

**Bare compliance:**
> "Know your limit, play within it."

**{{PROGRAM_NAME}} on-brand version:**
> **Know your limit, play within it.** {{PROGRAM_NAME}} gives you the tools to play on your terms — deposit limits, session reminders, and real odds. Set up in 10 seconds.

**Rules:**
1. "Know your limit, play within it." appears **exactly as written** — no paraphrasing, no abbreviation
2. The mandatory statement comes **first** — it's the lead, not the fine print
3. Surround it with {{PROGRAM_NAME}} context that adds value (tools, CTAs, information)
4. Give it **visual dignity** — same font size as surrounding copy, not shrunk to minimum
5. Follow it with a **helpful action** whenever possible

### Placement by touchpoint

| Touchpoint | Placement | Notes |
|---|---|---|
| Website / app | Footer of every page, deposit screen, account settings | Always visible, not buried |
| Social media | In post copy or as first comment | Include on all gambling-related posts |
| Print collateral | Bottom of front panel or back panel | Minimum 14pt |
| Venue signage | Entry signage, floor signs, ATM area | Legible from normal viewing distance |
| TV/video | End card, on screen for minimum 3 seconds | Spoken in voiceover when possible |
| Radio | Spoken in every spot | Clear, at normal speaking pace |
| Email | Footer of every email | Every email, not just marketing |

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

### Summary

| Rule | Requirement | Source |
|---|---|---|
| **No minors** | Advertising must not target or appeal to persons under 19 | GPEB/IGCO conditions, national code |
| **No misleading claims** | Must not misrepresent likelihood, size, or frequency of winning | GPEB/IGCO conditions, national code |
| **No public bonus inducements** | Bonus offers in BC are limited; cannot be a primary advertising message | BCLC advertising standards |
| **Helpline required** | All advertising must include helpline reference | GPEB/IGCO conditions |
| **Mandatory statement** | "Know your limit, play within it." in all advertising | BCLC requirement |
| **No problem glamorization** | Must not portray excessive gambling positively | GPEB/IGCO conditions |
| **Factual claims only** | Odds and probability claims must be accurate | GPEB/IGCO conditions, national code |

### National code overlay

The **Canadian Gambling Advertising Code** (January 2026) adds national standards on top of BC's provincial rules. See [canada/README.md](../README.md#canadian-gambling-advertising-code) for the full summary. Key additions:
- Endorsement disclosure requirements
- Frequency limits during live sports broadcasts
- Enhanced T&C disclosure for bonus offers

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## GameSense compatibility

[GameSense](https://www.gamesense.com) is BCLC's proprietary player education and responsible gambling program. It is deployed in all BC gambling venues and on PlayNow.com. Operators deploying {{PROGRAM_NAME}} in BC need to understand the relationship.

### What is GameSense?

| Field | Value |
|---|---|
| **Owner** | BCLC |
| **Scope** | BC gambling venues and PlayNow.com |
| **Purpose** | Player education, informed decision-making |
| **Staff** | GameSense advisors in every casino |
| **Content** | Odds information, game mechanics, self-assessment, tools awareness |

### Relationship to {{PROGRAM_NAME}}

| Area | GameSense | {{PROGRAM_NAME}} | Relationship |
|---|---|---|---|
| **Odds education** | Game-specific odds info at venues | Broad odds literacy, myth-busting, shareable content | **Complement** — {{PROGRAM_NAME}} extends education beyond venues |
| **Tool awareness** | Promotes BCLC's player tools in venues | Promotes operator tools across all channels | **Complement** — same goal, different reach |
| **Mandatory messaging** | Delivers "Know your limit, play within it." | Integrates same statement on-brand | **Align** — both use the same mandatory statement |
| **Helpline** | Refers to Gambling Support BC | Refers to same helpline | **Align** — same helpline, same number |
| **Venue presence** | GameSense advisors in every casino | No in-venue staff | **Defer** — {{PROGRAM_NAME}} defers to GameSense in-venue |
| **Digital content** | gamesense.com, PlayNow.com integration | Operator website, app, social media, email | **Complement** — {{PROGRAM_NAME}} fills digital channels outside BCLC |
| **Brand voice** | Educational, supportive, informational | Confident, witty, engaging | **Different** — {{PROGRAM_NAME}} is entertainment-first; GameSense is education-first |
| **Self-exclusion** | Promotes Game Break | Promotes Game Break using {{PROGRAM_NAME}} Tier 2 language | **Align** — same program, {{PROGRAM_NAME}} language mapping |

### Co-branding approach

When {{PROGRAM_NAME}} content appears in a BCLC-operated environment (venues, PlayNow.com):

1. **Acknowledge GameSense** — reference it as the venue's player education resource
2. **Don't compete** — {{PROGRAM_NAME}} supplements, it doesn't replace GameSense
3. **Use consistent data** — odds, house edge numbers, and tool descriptions should match what GameSense advisors communicate
4. **Link to GameSense** — where appropriate, link to gamesense.com for in-depth game-specific information
5. **Respect venue protocol** — in-venue, GameSense advisors are the primary player education contact

### Where {{PROGRAM_NAME}} adds value

{{PROGRAM_NAME}} fills gaps that GameSense does not cover:

| Gap | How {{PROGRAM_NAME}} fills it |
|---|---|
| **Social/shareable content** | GameSense doesn't have a social content system; {{PROGRAM_NAME}}'s quiz, myth-buster, and share framework extends education to social channels |
| **Entertainment-first voice** | GameSense is educational; {{PROGRAM_NAME}} makes literacy content feel like entertainment content |
| **Multi-channel collateral** | GameSense focuses on in-venue and PlayNow; {{PROGRAM_NAME}} provides email, social, print, signage, and video templates |
| **White-label flexibility** | GameSense is BCLC-branded; {{PROGRAM_NAME}} adapts to any operator's brand |

---

## Self-exclusion

### Game Break

| Field | Value |
|---|---|
| **Program name** | Game Break |
| **Operator** | BCLC |
| **Duration options** | 6 months, 1 year, 2 years, 3 years |
| **Scope** | All BCLC gambling facilities and PlayNow.com in BC |
| **Enrollment** | In person at any BC casino, or online through PlayNow.com |
| **Reinstatement** | Not automatic — player must apply for reinstatement after the exclusion period ends |
| **Mandatory?** | BCLC must offer Game Break; operators in BCLC venues must participate |

### How Game Break works

1. Player requests exclusion (in person or online)
2. Player selects duration: 6 months, 1 year, 2 years, or 3 years
3. Player is banned from all BCLC gambling facilities and PlayNow.com
4. Marketing communications are stopped
5. When the period ends, the player must actively apply to be reinstated — exclusion does not expire automatically
6. During exclusion, if a player is found in a gambling facility, they may be asked to leave and may face trespassing charges

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your account" | Game Break | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" / "Game Break" | Game Break | Legal documents, formal enrollment, support referrals |
| Staff training | Both | Game Break | When explaining the program and training on enrollment |
| Website/app | "Need a longer break?" | Game Break | On the self-exclusion page itself |
| Print/signage | "Need a break from gambling?" | Game Break | Venue self-exclusion information |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: What is Game Break?**
>
> Game Break is British Columbia's province-wide voluntary self-exclusion program, operated by BCLC. Players can exclude themselves for 6 months, 1 year, 2 years, or 3 years from all BCLC gambling facilities and PlayNow.com. During exclusion, they cannot enter any BC casino and are removed from all marketing. When the exclusion period ends, it does not automatically lift — the player must apply for reinstatement.
>
> If a player asks about Game Break, explain the options and offer to help them get started. In casual conversation, say "take a break" or "pause your account." Use "Game Break" when referring to the specific program or during formal enrollment.

---

## Player protection tools

### Required tools and thresholds

| Tool | Required in BC? | Details |
|---|---|---|
| **Deposit limits** | Yes (PlayNow.com) | Maximum deposit limit: $9,999/week on PlayNow.com |
| **Session time tracking** | Yes | Players must be able to see how long they've been playing |
| **Cool-off periods** | Yes | Temporary account suspension options |
| **Activity statements** | Yes | Play history and spending data available to players |
| **Self-exclusion (Game Break)** | Yes | 6mo / 1yr / 2yr / 3yr — see [above](#self-exclusion) |
| **Pop-up reminders** | Yes (online) | Session duration notifications on PlayNow.com |

### Deposit limits

| Field | Value |
|---|---|
| **Maximum weekly deposit** | $9,999 (PlayNow.com) |
| **Player-set limits** | Players can set daily, weekly, or monthly limits below the maximum |
| **Limit decreases** | Take effect immediately |
| **Limit increases** | Subject to cooling-off period |

### {{PROGRAM_NAME}} tool messaging for BC

| Tool | {{PROGRAM_NAME}} copy |
|---|---|
| Deposit limits | "Set your deposit limit — play on your terms. Takes 10 seconds." |
| Session tracking | "Lost track of time? Check your session — it's right in your dashboard." |
| Cool-off | "Need a break? Pause your account for 24 hours, 7 days, or 30 days." |
| Activity dashboard | "Your play stats are ready. No surprises — just the facts." |
| Game Break | "Need a longer break? Game Break lets you step away for 6 months to 3 years." |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 19+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.canada-british-columbia` |
| **`{{MIN_AGE}}` token value** | 19 |
| **Verification (online)** | Government-issued photo ID required for PlayNow.com registration |
| **Verification (venue)** | Government-issued photo ID; may be checked at entry |
| **Products with different ages** | None — 19+ applies to all gambling products in BC |

### Age messaging

All collateral in BC must display `19+` age notice:

> "You must be 19+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `19+` for all BC-deployed content.

---

## AML/KYC

### FINTRAC requirements

BC gambling operators are subject to federal anti-money laundering regulations through the **Financial Transactions and Reports Analysis Centre of Canada (FINTRAC)** under the *Proceeds of Crime (Money Laundering) and Terrorist Financing Act* (PCMLTFA).

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Large cash transaction report** | $10,000+ (single or within 24 hours) | Player may be asked for ID when making large cash transactions |
| **Suspicious transaction report** | Any amount | No direct player impact — internal reporting |
| **Player identification** | $3,000+ (casinos) | Identity verification required |
| **Third-party determination** | All transactions | Player may be asked if acting on behalf of another person |
| **Source of funds** | Large or unusual transactions | Player may be asked about the source of their funds |

### BC-specific AML context

BC has heightened AML scrutiny following the **Cullen Commission** (2022), which investigated money laundering in BC casinos. Key outcomes:
- Enhanced cash monitoring and reporting
- Stricter source-of-funds requirements
- Increased regulatory oversight
- Formation of a dedicated AML unit within GPEB (transitioning to IGCO)

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity and the source of your funds."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required for all players. Takes about 2 minutes. If we ask about the source of your funds, it's a standard security step that applies to everyone."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to BC-specific adaptations.

| Category | Collateral | BC adaptation | Token/Value |
|---|---|---|---|
| **Digital** | Website footer | Gambling Support BC: 1-888-795-6111 + "Know your limit, play within it." | `{{HELPLINE_NUMBER}}`, `{{MANDATORY_STATEMENT}}` |
| **Digital** | Age gate | Set to 19+ | `{{MIN_AGE}}` = 19 |
| **Digital** | Self-exclusion page | Reference Game Break, link to BCLC enrollment | — |
| **Digital** | Deposit screen | "Know your limit, play within it." + deposit limit prompt | `{{MANDATORY_STATEMENT}}` |
| **Digital** | Social media bio | Include 1-888-795-6111 | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email footer | Gambling Support BC + mandatory statement in every email | `{{HELPLINE_NUMBER}}`, `{{MANDATORY_STATEMENT}}` |
| **Print** | Brochure | BC helpline, 19+ notice, mandatory statement | All tokens |
| **Print** | Rack card | BC helpline, mandatory statement | `{{HELPLINE_NUMBER}}`, `{{MANDATORY_STATEMENT}}` |
| **Print** | Table tent | "Know your limit, play within it." + BC helpline | `{{MANDATORY_STATEMENT}}`, `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | Gambling Support BC, 1-888-795-6111, gamblingsupportbc.ca | All helpline tokens |
| **Environmental** | Entry signage | 19+ age notice, mandatory statement | `{{MIN_AGE}}`, `{{MANDATORY_STATEMENT}}` |
| **Environmental** | Floor signage | BC helpline | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | Mandatory statement in rotation | `{{MANDATORY_STATEMENT}}` |
| **Video/Audio** | TV spot end card | Mandatory statement + BC helpline, 3-second minimum | `{{MANDATORY_STATEMENT}}`, `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Spoken mandatory statement + helpline | `{{MANDATORY_STATEMENT}}`, `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | BC helpline in all referral scripts, Game Break in self-exclusion scripts | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Add Game Break Q&A, update helpline to BC | — |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in British Columbia:

```yaml
# ─── HELPLINES ───────────────────────────────
helplines:
  canada:
    british-columbia:
      number: "1-888-795-6111"
      website: "www.gamblingsupportbc.ca"
      label: "Gambling Support BC"
      hours: "24/7"

# ─── LEGAL ───────────────────────────────────
legal:
  minimum_gambling_age:
    canada-british-columbia: 19

# ─── MESSAGING ───────────────────────────────
messaging:
  mandatory:
    canada-british-columbia: "Know your limit, play within it."
```

Also see the full [Canada config overrides](../_brand-canada.yml) for the complete provincial structure.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in British Columbia.

### Regulatory
- [ ] Confirmed GPEB as current regulator (IGCO from April 13, 2026)
- [ ] Understood BCLC monopoly model and operator's relationship to BCLC
- [ ] Verified legal gambling age: 19+
- [ ] Reviewed permitted products table
- [ ] Tracked GPEB → IGCO transition timeline
- [ ] Reviewed Cullen Commission AML implications

### Messaging
- [ ] "Know your limit, play within it." displays **exactly as written** in all required placements
- [ ] Mandatory statement integrated on-brand (not just bare compliance)
- [ ] Gambling Support BC (1-888-795-6111) displayed per rules
- [ ] Helpline display is multilingual-aware (EN, FR, Mandarin, Cantonese, Punjabi noted)
- [ ] 19+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to BC values
- [ ] GameSense acknowledged where content appears in BCLC environments

### Advertising
- [ ] Advertising content reviewed against BC rules (see [advertising-rules.md](advertising-rules.md))
- [ ] Advertising content reviewed against Canadian Gambling Advertising Code (January 2026)
- [ ] "Know your limit, play within it." in all advertising
- [ ] Helpline reference in all advertising
- [ ] 19+ age restriction in all advertising
- [ ] No content targeting or appealing to persons under 19
- [ ] No misleading claims about odds, winning likelihood, or prize amounts
- [ ] No prominent bonus/inducement messaging

### Player protection
- [ ] Deposit limits implemented (max $9,999/week on PlayNow.com)
- [ ] Session time tracking available
- [ ] Cool-off periods available
- [ ] Activity statements available
- [ ] Game Break (self-exclusion) integrated with 6mo/1yr/2yr/3yr options
- [ ] Game Break language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language
- [ ] Pop-up session reminders implemented (online)

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] GameSense compatibility reviewed — content complements, doesn't compete
- [ ] Staff FAQ updated with Game Break Q&A
- [ ] Conversation scripts updated with BC helpline and Game Break references
- [ ] AML/KYC player-facing messaging uses {{PROGRAM_NAME}} voice

### Governance
- [ ] `_brand.yml` updated with BC values (helpline, age, mandatory messaging)
- [ ] `_brand-canada.yml` reviewed
- [ ] `Last verified` date set on this module
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained
- [ ] IGCO transition monitoring plan in place

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [Canada overview](../README.md) | [Canada config overrides](../_brand-canada.yml) | [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [Advertising rules](advertising-rules.md)*
