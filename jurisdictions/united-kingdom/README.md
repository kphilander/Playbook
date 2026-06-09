---
content_type: jurisdiction-module
title: "United Kingdom — Compliance Module"
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
game_type: [slots, blackjack, roulette, sports-betting, poker, baccarat, bingo]
audience: [general]
channel: [blog, in-app]
cultural_profile:
  voice: peer
  framing: individual
  humor: dry
  directness: blunt
  comfort: open
presentation:
  odds_format: decimal
  currency: gbp
  sports_culture: football-premier-league
  language: en-gb
verticals: [land-based, interactive]
regulatory_approach: hybrid
adaptation_status: base
adaptation_notes: |
  UK module uses GBP currency context and decimal odds. British English
  spelling and terminology throughout (licence not license, behaviour
  not behavior). The LCCP is the most prescriptive social responsibility
  framework globally — operators must map every SR code to their
  deployment, including the Remote technical standards (RTS) that govern
  game information, RTP disclosure, reality checks, autoplay, and game
  design. GambleAware is transitioning to the statutory levy system
  by 31 March 2026; helpline references should use GamCare (0808 8020 133)
  as the primary contact. GAMSTOP is mandatory for all remote operators.
  The retired "When the Fun Stops, Stop" line has been replaced by the
  industry "Take Time to Think" safer-gambling campaign.
last_updated: 2026-06-08
---

# United Kingdom — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in the United Kingdom. The UK is the most important regulated online gambling market globally, regulated nationally by the Gambling Commission under the Gambling Act 2005. The Licence Conditions and Codes of Practice (LCCP) contain Social Responsibility (SR) codes that have the force of licence conditions — breach triggers enforcement action including fines (regularly in the millions) and licence revocation. The UK has all verticals: land-based casino, online casino/iGaming, sports betting, bingo, lottery, and poker.

> **Last verified**: 2026-06-08
> **Next review due**: 2026-09-08 *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | Gambling Commission, LCCP structure |
| [Legal requirements](#legal-requirements) | Gambling Act 2005, permitted products, 18+ |
| [Helpline](#helpline) | GamCare National Gambling Helpline, GambleAware transition |
| [Messaging requirements](#messaging-requirements) | Obligation-based (no verbatim mandate) |
| [Advertising restrictions](#advertising-restrictions) | LCCP SR 5.1.6 + ASA/CAP codes + industry codes |
| [Self-exclusion](#self-exclusion) | GAMSTOP (remote) + premises schemes |
| [Player protection -- land-based](#player-protection--land-based) | Premises-based customer interaction |
| [Player protection -- interactive](#player-protection--interactive) | Financial limits, financial-risk/vulnerability checks, customer interaction (SR 3.4.3) |
| [Game information & design standards (RTS)](#game-information--design-standards-rts) | RTP disclosure, reality checks, autoplay ban, game-design rules, stake limits |
| [Age verification](#age-verification) | 18+ requirements |
| [AML/KYC](#amlkyc) | Money Laundering Regulations, POCA |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Regulator** | Gambling Commission |
| **Website** | [gamblingcommission.gov.uk](https://www.gamblingcommission.gov.uk) |
| **Governing legislation** | Gambling Act 2005 |
| **Key regulatory instrument** | Licence Conditions and Codes of Practice (LCCP) |
| **Reporting to** | Department for Culture, Media and Sport (DCMS) |
| **Regulatory approach** | Hybrid (LCCP licence conditions + ASA/CAP advertising codes + statutory levy) |

### Regulatory structure

The UK gambling regulatory framework is centred on a single national regulator:

| Body | Role | Key functions |
|---|---|---|
| **Gambling Commission** | Regulator | Licensing, standards-setting (LCCP), compliance, enforcement, penalties |
| **ASA / CAP** | Advertising regulator | Administers advertising codes for gambling (CAP Code s.16, BCAP Code s.17) |
| **DCMS** | Government department | Policy, legislation, statutory levy administration |
| **GamCare** | Helpline operator | Operates the National Gambling Helpline (0808 8020 133) |
| **GAMSTOP** | Self-exclusion scheme | National multi-operator remote self-exclusion |

### LCCP structure

The LCCP is the operational heart of UK gambling regulation. It contains:

| Component | Enforceability | Consequence of breach |
|---|---|---|
| **Licence Conditions (LC)** | Mandatory | Licence suspension, revocation, financial penalties, prosecution |
| **Social Responsibility Code Provisions (SR)** | Have effect as licence conditions | Same as LC -- fines regularly in the millions |
| **Ordinary Code Provisions** | Represent best practice | Considered in enforcement decisions |

Key SR code areas relevant to {{PROGRAM_NAME}}:

| SR Code | Area | Scope |
|---|---|---|
| SR 3.1.1 | Contributions to research, prevention and treatment | Replaced by statutory levy (April 2025) |
| SR 3.2.11 | Underage gambling prevention (remote) | Age verification before deposit, play, or free-to-play access |
| SR 3.3.1 | Responsible gambling information | Information in premises and online |
| SR 3.4.1 | Customer interaction (premises) | Identify, interact, evaluate |
| SR 3.4.3 | Customer interaction (remote) | Identify, act, evaluate (formal guidance binding from 31 Oct 2023) |
| SR 3.4.4 | Financial vulnerability check (remote) | Light-touch public-record check at net-deposit thresholds |
| SR 3.5.1 | Self-exclusion (non-remote) | Individual premises self-exclusion |
| SR 3.5.5 | Self-exclusion (remote -- GAMSTOP) | National multi-operator scheme |
| SR 3.5.6 | Multi-operator self-exclusion (non-remote) | Local area multi-operator schemes |
| SR 5.1.1 | Rewards and bonuses | Socially responsible incentives |
| SR 5.1.6 | Advertising compliance | ASA/CAP codes |
| SR 5.1.12 | Direct marketing preferences | Customer marketing control options |

### Recent and upcoming changes

These flow from the 2023 *High stakes: gambling reform for the digital age* White Paper and the LCCP/RTS consultation responses that followed it.

| Change | Effective date | Impact |
|---|---|---|
| Game-design rules (RTS 14) + autoplay ban (RTS 8) extended to all online gaming | 17 January 2025 | No loss-chasing prompts, no reverse withdrawal, no simultaneous play, minimum spin/cycle speeds, no turbo/slam-stop, no celebratory effects for returns at or below stake |
| Online slots stake limit -- 25+ players | 9 April 2025 | Maximum £5 per spin/game cycle |
| Online slots stake limit -- 18-24 players | 21 May 2025 | Maximum £2 per spin/game cycle |
| Financial vulnerability check (SR 3.4.4) | 30 August 2024 (£500/30 days), tightened to £150/30 days from 28 February 2025 | Light-touch public-record check; no customer-facing friction |
| Frictionless financial-risk assessments pilot | 2024-25 (data-collection pilot) | Tests higher-spend affordability checks using credit-reference data; not yet a live requirement |
| Mandatory financial limit prompts (RTS 12A-12E) | 31 October 2025 | Prompt before first deposit; 6-month review reminders |
| GAMSTOP requirement extended to phone/email betting operators | 1 April 2024 | Telephone and email betting brought into the remote multi-operator scheme |
| Gross deposit limit definition (RTS 12) | 30 June 2026 | "Deposit limit" must mean gross deposits only |
| GambleAware wind-down | 31 March 2026 | Statutory levy system replaces GambleAware; new commissioners for research, prevention, treatment |
| Customer funds protection disclosure | 31 October 2025 | 6-month reminders for unprotected funds |

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 18+ (16+ for lotteries and football pools) |
| **Legal framework** | Gambling Act 2005 -- single national licensing regime |
| **Online gambling** | Legal -- all verticals licensed by Gambling Commission |
| **Key principle** | Licensing objectives: prevent crime, ensure fair play, protect children and vulnerable persons |

### Permitted products

| Product | Vertical | Legal status | Notes |
|---|---|---|---|
| Casino (slots, table games) | Land-based | Legal | Licensed under Gambling Act 2005 |
| Online casino / iGaming | Interactive | Legal | Remote operating licence required |
| Sports betting | Both | Legal | Remote and non-remote betting licences |
| Bingo | Both | Legal | Remote and non-remote bingo licences |
| Lottery | Both | Legal | National Lottery + society lotteries; 16+ age |
| Poker (live and online) | Both | Legal | Licensed as casino gaming |
| Gaming machines | Land-based | Legal | Category A-D machines with stake/prize limits |
| Spread betting | Interactive | Legal | Regulated by FCA, not Gambling Commission |

### Key regulatory notes

- The UK is the world's largest regulated online gambling market
- All operators offering services to UK consumers must hold a UK Gambling Commission licence, regardless of where they are based (Gambling Act 2005 as amended by Gambling (Licensing and Advertising) Act 2014)
- The LCCP applies equally to remote and non-remote operators, with specific SR codes for each
- {{PROGRAM_NAME}} deployment in the UK means operating under the most stringent social responsibility regime globally

---

## Helpline

### National Gambling Helpline

| Field | Value |
|---|---|
| **Name** | National Gambling Helpline |
| **Operator** | GamCare |
| **Phone** | 0808 8020 133 |
| **Website** | [www.gamcare.org.uk](https://www.gamcare.org.uk) |
| **Chat** | Available via GamCare website and WhatsApp on 0808 8020 133 |
| **Hours** | 24/7, 365 days/year |
| **Languages** | English (primary) |
| **Cost** | Free |
| **Scope** | Gambling-specific: advice, support, treatment referral |

### Additional resources

| Resource | Contact | Description |
|---|---|---|
| **GambleAware** | [www.begambleaware.org](https://www.begambleaware.org) | Information, advice, support referral. Winding down by March 2026 |
| **National Gambling Support Network** | Via GambleAware | Treatment services across England, Scotland, Wales |
| **NHS Northern Gambling Service** | NHS referral | Specialist NHS gambling treatment |
| **Gordon Moody** | [www.gordonmoody.org.uk](https://www.gordonmoody.org.uk) | Residential treatment for severe gambling addiction |
| **GAMSTOP** | [www.gamstop.co.uk](https://www.gamstop.co.uk) | National self-exclusion (not a helpline) |
| **Samaritans** | 116 123 | Crisis support (not gambling-specific) |

### GambleAware transition

GambleAware will cease operations by **31 March 2026** as the UK transitions to a statutory gambling levy system. The statutory levy (**Gambling Levy Regulations 2025**, in force **6 April 2025**) funds research, prevention, and treatment (RPT) through public commissioners rather than industry-funded charity. It replaces the previous voluntary contribution arrangement under SR 3.1.1. Key implications:

- The levy is charged at **0.1%-1.1% of an operator's gross gambling yield (GGY)**, banded by sector -- roughly **1.1% for online operators**, lower bands for land-based casinos and betting premises -- and is **collected from 1 October 2025** under Gambling Commission and DCMS direction. See [Gambling Commission -- Statutory gambling levy](https://www.gamblingcommission.gov.uk/guidance/statutory-gambling-levy/statutory-levy-introduction) and the [Gambling Levy Regulations 2025](https://www.legislation.gov.uk/ukdsi/2025/9780348267211).
- The National Gambling Helpline (0808 8020 133, operated by GamCare) continues
- References to GambleAware should be reviewed and updated as the transition completes
- New commissioners will be appointed for England, Scotland, and Wales
- The `_brand.yml` helpline entry should continue to use GamCare/National Gambling Helpline as the primary reference

### Display rules

Under **LCCP SR 3.3.1**, licensees must make responsible gambling information readily available to all customers, including:

- Contact details for at least one organisation providing counselling on problem gambling
- Information about how to monitor and control gambling (limits, reality checks)
- Self-exclusion options
- How to access further help

#### Land-based display

Information must be available in all gambling areas and near ATMs. Must be displayed prominently using appropriate methods (posters, screens, printed materials) and in portable formats that customers can obtain discreetly.

#### Interactive display

Information must be accessible on all pages of the operator's website/app. Must include links to support organisations and self-exclusion (GAMSTOP).

### On-brand helpline display

**Bare compliance** (what most operators do):
> "Take time to think. If you are worried about your gambling, call the National Gambling Helpline on 0808 8020 133."

*(Note: "Take Time to Think" is the current industry safer-gambling campaign. It replaced the retired "When the Fun Stops, Stop" line, which should no longer be used as a safer-gambling message.)*

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support -- 24/7, no judgement. For any question about gambling.
> **Call 0808 8020 133** | **Chat at gamcare.org.uk** | **WhatsApp 0808 8020 133**

Both meet the regulatory requirement. The second version provides multiple contact options, frames the helpline as available for any question (not only crisis), and uses {{PROGRAM_NAME}}'s inviting tone.

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### No verbatim mandatory messaging

| Field | Value |
|---|---|
| **Verbatim required statement** | **None** -- the UK does not require specific word-for-word messages |
| **What IS required** | Prominent display of responsible gambling information and helpline details (SR 3.3.1) |
| **Industry practice** | "Take Time to Think" (the current industry safer-gambling campaign, which replaced the retired "When the Fun Stops, Stop") and "BeGambleAware.org" are widely used but not legally mandated wording |
| **Approach** | Obligation-based -- operators must communicate specific information but phrasing is flexible |

### What the LCCP requires

The UK's approach is **obligation-based**. Operators must:

1. **Display responsible gambling information** prominently to all customers (SR 3.3.1)
2. **Provide helpline contact details** for at least one counselling organisation (SR 3.3.1)
3. **Include responsible gambling messaging** in all advertising (SR 5.1.6, via ASA/CAP codes)
4. **Prompt financial limits** before first deposit and remind every 6 months (RTS 12A-12E, from October 2025)
5. **Offer reality checks** customers can set, displaying time elapsed in session (RTS 13, remote)
6. **Make the likelihood of winning available** before the customer commits, including the return-to-player (RTP) percentage (RTS 3)
7. **Display 18+** age restriction in advertising
8. **Inform customers** about self-exclusion options including GAMSTOP (SR 3.5.5)

### On-brand integration

Because the UK has no mandated phrasing, operators have flexibility to use {{PROGRAM_NAME}} messaging natively:

**Generic operator approach:**
> "Gamble responsibly. For help, visit www.begambleaware.org."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **0808 8020 133** | **gamcare.org.uk** | **gamstop.co.uk**

This flexibility is a significant advantage -- {{PROGRAM_NAME}} content in the UK can fully express its brand voice without working around a mandatory statement.

**Rules for on-brand integration:**
1. Helpline information must be genuinely prominent -- not buried in small print
2. Self-exclusion (GAMSTOP) information must be accessible
3. 18+ age notice must appear on all advertising
4. Financial limit prompts must follow RTS 12A-12E specifications
5. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

### UK's multi-layer framework

The UK has one of the most complex gambling advertising regimes globally, with four overlapping layers:

| Layer | Source | Scope |
|---|---|---|
| **Statutory** | LCCP SR 5.1.6 | Licence condition requiring compliance with advertising codes |
| **Non-broadcast** | CAP Code Section 16 | Online, print, direct marketing, social media |
| **Broadcast** | BCAP Code Section 17 | TV and radio |
| **Industry** | Gambling Industry Code for Socially Responsible Advertising | Voluntary but referenced by Gambling Commission |

### Key ASA/CAP advertising rules

| Rule | Requirement | Source |
|---|---|---|
| Social responsibility | All gambling marketing must be "socially responsible" | CAP s.16.1 / BCAP s.17 |
| No irresponsible behaviour | Must not portray, condone, or encourage irresponsible gambling | CAP 16.3.1 |
| No financial solutions | Must not suggest gambling solves financial problems | CAP 16.3.4 |
| No life priority | Must not depict gambling as essential or above work/family | CAP 16.3.5 |
| No sexual success | Must not link gambling to seduction or sexual success | CAP 16.3.8 |
| No peer pressure | Must not encourage gambling through social pressure | CAP 16.3.7 |
| No under-18 targeting | Must not be directed at under-18s through media or context | CAP 16.3.13 |
| No under-25 gambling | Must not feature anyone under 25 gambling or in significant roles | CAP 16.3.14 |
| Clear terms | Incentives must include significant terms and conditions | CAP s.8 (sales promotions) / LCCP SR 5.1.1 |
| Truthful | Must not mislead about likelihood of winning | CAP s.3 (misleading advertising) |

### Channel-specific rules

| Channel | Key restrictions | Source |
|---|---|---|
| Broadcast (TV/radio) | No gambling ads during or adjacent to programming of particular appeal to under-18s; 9pm watershed for certain content | BCAP Code s.17 |
| Digital / social media | CAP Code applies to all UK-licensed operators regardless of registered address (from September 2025); includes organic social media posts | CAP Code s.16 (amended 2025) |
| Print | CAP Code s.16; age restriction display required | CAP Code |
| Direct marketing | Customers must have control over marketing preferences (SR 5.1.12); opt-in required | LCCP SR 5.1.12 |
| In-venue | Responsible gambling messaging must be prominent | LCCP SR 3.3.1 |
| Sponsorship | ASA/CAP codes apply to sponsored content; shirt sponsorship and stadium naming subject to ongoing political review | CAP Code |

### Prohibited content

- Content suggesting gambling addresses personal problems (loneliness, depression)
- Content linking gambling to sexual attractiveness or success
- Content encouraging irresponsible, repetitive, or uncontrolled gambling
- Content featuring anyone under 25 in a gambling role
- Content directed at under-18s through youth culture references
- Content suggesting skill can overcome chance in games of chance
- "Risk-free" claims when player money is at risk (SR 5.1.1)
- Misleading bonus/incentive terms (SR 5.1.1)

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

### Two systems

The UK operates separate self-exclusion systems for remote and premises-based gambling:

| Program | Scope | SR Code | Duration options |
|---|---|---|---|
| **GAMSTOP** | All UK-licensed remote (online) operators | SR 3.5.5 | 6 months, 1 year, 5 years, 5 years with auto-renewal |
| **Premises self-exclusion** | Individual premises | SR 3.5.1 | Minimum 6 months (no maximum prescribed) |
| **Multi-operator premises schemes** | Local area, same gambling type | SR 3.5.6 | Aligned with individual scheme |

### GAMSTOP (remote self-exclusion)

| Field | Value |
|---|---|
| **Program name** | GAMSTOP |
| **Website** | [www.gamstop.co.uk](https://www.gamstop.co.uk) |
| **Scope** | All UK-licensed remote gambling operators |
| **Duration options** | 6 months, 1 year, 5 years, 5 years with auto-renewal |
| **Enrollment** | Online at gamstop.co.uk (name, DOB, email, address, mobile) |
| **Activation** | Within 24 hours of registration |
| **Irrevocability** | Cannot be removed or reduced during the exclusion period |
| **Account handling** | Operators must close accounts; funds not automatically returned (player must contact operators) |
| **Marketing cessation** | Operators must remove from marketing databases within 2 days |
| **Reinstatement** | Available after exclusion period ends; not automatic |
| **Auto-renewal** | Introduced late 2024; selected by 50%+ of 5-year exclusions by end of 2025 |
| **Source** | LCCP SR 3.5.5 |

### Premises self-exclusion (SR 3.5.1)

| Field | Value |
|---|---|
| **Scope** | Individual licensed premises |
| **Duration** | Minimum 6 months |
| **Enrollment** | In-person at the premises |
| **Requirements** | Photo ID, signature, personal details for exclusion register |
| **Account handling** | Close accounts, return funds |
| **Marketing** | Remove from marketing databases within 2 days |
| **Access prevention** | Account for premises structure and layout |
| **Support** | Must signpost to counselling and support services |
| **Source** | LCCP SR 3.5.1 |

### Multi-operator premises schemes (SR 3.5.6)

Premises-based operators must participate in one or more multi-operator self-exclusion schemes, enabling customers to self-exclude from all operators offering the same type of gambling in their locality through a single process.

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Step away" | GAMSTOP / "Self-exclusion" | Never in Tier 1 -- use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" | GAMSTOP | Legal documents, formal enrollment, support referrals |
| Staff training | Both | GAMSTOP / Self-exclusion | When explaining the scheme and training on procedures |
| Website/app | "Need a break from gambling?" | "Register with GAMSTOP" | On the self-exclusion information page |
| Print/signage | "Need a break from gambling?" | "Self-exclusion" | Venue self-exclusion information areas |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../collateral/customer-service/staff-faq.md):

> **Q: How does self-exclusion work in the UK?**
>
> The UK has two self-exclusion systems. **GAMSTOP** covers all UK-licensed online gambling operators -- players register at gamstop.co.uk and choose 6 months, 1 year, 5 years, or 5 years with auto-renewal. It takes effect within 24 hours and cannot be reversed during the chosen period. For **land-based gambling**, each premises offers individual self-exclusion (minimum 6 months), and multi-operator schemes let players exclude from all venues offering the same type of gambling in their area.
>
> If a player asks about self-exclusion, explain both options based on how they gamble. In casual conversation, say "take a break" or "step away." Use "self-exclusion" or "GAMSTOP" when referring to the formal programmes.

---

## Player protection -- land-based

### Customer interaction (SR 3.4.1)

UK premises-based operators have a three-part obligation:

1. **Identify** customers who may be at risk of or experiencing harms
2. **Interact** with those customers in ways that minimise harm
3. **Evaluate** the impact and effectiveness of interactions

The Gambling Commission publishes formal guidance under SR 3.4.1 that operators must follow.

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Responsible gambling information | Yes | Prominent display in all gambling areas and near ATMs | SR 3.3.1 |
| Helpline display | Yes | Contact details for at least one counselling organisation | SR 3.3.1 |
| Self-exclusion | Yes | Individual premises self-exclusion (min 6 months) | SR 3.5.1 |
| Multi-operator self-exclusion | Yes | Participate in local multi-operator scheme | SR 3.5.6 |
| Customer interaction | Yes | Identify, interact, evaluate at-risk customers | SR 3.4.1 |
| Staff training | Yes | Train staff on customer interaction procedures | SR 3.4.1 |
| Support signposting | Yes | Direct self-excluded and at-risk customers to support | SR 3.5.1 |
| Marketing cessation | Yes | Remove self-excluded from marketing within 2 days | SR 3.5.1 |
| Age verification | Yes | Prevent underage gambling; challenge 25 policy common | Gambling Act 2005 |

### {{PROGRAM_NAME}} tool messaging -- land-based

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Self-exclusion info | "Need a break? Talk to any member of staff -- they can help you step away, no judgement." | SR 3.5.1 |
| Helpline display | "Free, confidential support -- 24/7. Call 0808 8020 133." | SR 3.3.1 |
| RG information | "Your game, your rules. Set your limits before you start." | SR 3.3.1 |

---

## Player protection -- interactive

### Customer interaction (SR 3.4.3)

Remote operators face the most prescriptive customer interaction framework globally under SR 3.4.3 (in force 12 September 2022), with binding **formal guidance** under it (current version effective 31 October 2023). The framework follows an ongoing **identify -> act -> evaluate** model -- it is not a one-off "monitor and flag" process:

| Requirement | Details | Source |
|---|---|---|
| **Identify** | Continuously identify customers who may be experiencing or at risk of harm, using indicators of vulnerability and of harm: customer spend, spending patterns, time spent gambling, behavioural and account indicators, customer-initiated contact, and use of gambling-management tools | SR 3.4.3 + formal guidance |
| **Act -- tailored action** | At lower risk levels, take tailored action proportionate to the indicators identified | SR 3.4.3 |
| **Act -- strong action** | At higher risk levels, take strong or stronger action | SR 3.4.3 |
| **Act -- relationship termination** | At the highest risk levels, terminate the relationship | SR 3.4.3 |
| **Automated safeguards** | For strong indicators of harm, implement automated processes with mandatory manual review | SR 3.4.3 |
| **Evaluate** | Evaluate and demonstrate the impact and effectiveness of interactions through testing and measurement | SR 3.4.3 |

The Gambling Commission publishes formal guidance under SR 3.4.3 that remote operators must take into account: [Customer interaction guidance for remote gambling licensees](https://www.gamblingcommission.gov.uk/guidance/customer-interaction-guidance-for-remote-gambling-licensees-formal-guidance/introduction-customer-interaction-guidance-for-remote-gambling-licensees-sr) (SR text: [LCCP SR 3.4.3](https://www.gamblingcommission.gov.uk/licensees-and-businesses/lccp/condition/3-4-3-remote-customer-interaction)).

### Financial vulnerability check (SR 3.4.4)

Distinct from affordability/source-of-funds work, SR 3.4.4 requires remote operators to run a light-touch **financial vulnerability check** using publicly available data (for example, records of bankruptcy, County Court judgments, individual voluntary arrangements, or debt relief orders). It triggers at net-deposit thresholds and is designed to be frictionless for the customer:

| Field | Value |
|---|---|
| **What it checks** | Publicly available financial-vulnerability indicators (bankruptcy, CCJs, IVAs, DROs) |
| **Trigger threshold** | £500 net deposits in a rolling 30 days (from 30 August 2024), reduced to £150 net deposits in 30 days (from 28 February 2025) |
| **Customer experience** | Light-touch and frictionless -- no documents requested from the customer |
| **Relationship to RG** | Helps identify customers who may be at heightened risk so that customer-interaction action under SR 3.4.3 can follow |
| **Source** | [LCCP SR 3.4.4 -- Financial vulnerability check](https://www.gamblingcommission.gov.uk/licensees-and-businesses/lccp/condition/3-4-4-financial-vulnerability-check) |

A separate **frictionless financial-risk assessment** (affordability) approach for higher-spending customers is being tested through a Gambling Commission data-collection pilot and is **not yet a live requirement** -- treat it as forthcoming, not current. *(Verify pilot status before relying on it operationally.)*

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Financial limits (deposit) | Yes | Prompt before first deposit; free-text entry; 6-month review reminders; decreases immediate | RTS 12A-12E (Oct 2025) |
| Gross deposit limit definition | Yes (June 2026) | "Deposit limit" must mean gross deposits only | RTS 12 |
| Self-exclusion (GAMSTOP) | Yes | Participate in GAMSTOP national scheme | SR 3.5.5 |
| Customer interaction | Yes | Identify, act, evaluate (formal guidance binding) | SR 3.4.3 |
| Behavioural monitoring | Yes | Real-time automated and manual monitoring | SR 3.4.3 |
| Intervention escalation | Yes | Scaled from tailored action to relationship termination | SR 3.4.3 |
| Financial vulnerability check | Yes | Light-touch public-record check at net-deposit thresholds (£150/30 days) | SR 3.4.4 |
| Reality checks | Yes | Customer-settable; display time elapsed in session, must be acknowledged | RTS 13 |
| Age verification | Yes | Verify before deposit, free-to-play access, or gambling | SR 3.2.11 |
| Marketing preferences | Yes | Customer control over marketing received | SR 5.1.12 |
| Rewards and bonuses | Yes | Socially responsible; no misleading terms; wagering requirement limits | SR 5.1.1 |
| Activity information | Yes | Provide account info; 6-month review reminders | RTS 12A-12E |
| Customer funds disclosure | Yes | Disclose protection status every 6 months | LCCP 4.2.1 |
| Direct marketing preferences | Yes | Provide customers with options to control marketing | SR 5.1.12 |

### {{PROGRAM_NAME}} tool messaging -- interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit -- play on your terms. Takes 10 seconds." | RTS 12A-12E |
| Reality check | "You have been playing for an hour. Quick gut-check: still having fun?" | RTS 13 |
| Limit review reminder | "It's been 6 months -- take a quick look at your limits and account activity." | RTS 12A-12E |
| GAMSTOP | "Need a longer break? GAMSTOP lets you step away from all UK gambling sites at once." | SR 3.5.5 |
| Activity dashboard | "Your play stats are ready. No surprises -- just the facts." | RTS 12A-12E |

---

## Game information & design standards (RTS)

The Gambling Commission's **Remote technical standards (RTS)** are far broader than the financial-limit provisions (RTS 12) cited elsewhere in this module. They are titled "technical standards," but in substance they govern game information, odds/RTP disclosure, pacing, reality checks, and game design -- the rules most relevant to {{PROGRAM_NAME}}'s Pillar-1 "no fine print / know the odds" content and to Theme-5 player controls. Operators with a remote gambling software or operating licence must comply. The game-design (RTS 14) and autoplay (RTS 8) changes below took effect **17 January 2025** following the 2023 White Paper.

### Game information and odds disclosure

| Standard | Requirement | Theme | Source |
|---|---|---|---|
| **RTS 2 -- Displaying transactions** | The system must display enough relevant information that the content of the gamble is clear, available to the customer before they commit | Game info / transparency | [RTS 2](https://www.gamblingcommission.gov.uk/standards/remote-gambling-and-software-technical-standards/rts-2-displaying-transactions) |
| **RTS 3 -- Rules, game descriptions & likelihood of winning** | Operators must make available, before the customer commits, the information needed to make an informed decision about the chances of winning -- RTS 3C explicitly lists the **return-to-player (RTP) percentage** or probability of winning | Game info & odds disclosure | [RTS 3](https://www.gamblingcommission.gov.uk/standards/remote-gambling-and-software-technical-standards/rts-3-rules-game-descriptions-and-the-likelihood-of-winning) |

This is the regulatory anchor for {{PROGRAM_NAME}}'s odds-transparency content: the RTP figure is information the operator must already make available, so {{PROGRAM_NAME}} content can surface and explain it rather than working around a gap.

### Pacing, reality checks and game design

| Standard | Requirement | Theme | Source |
|---|---|---|---|
| **RTS 8 -- Autoplay** | Autoplay (auto-spin) is prohibited; from 17 January 2025 the ban was widened from slots to **all online gaming products** | Player controls | [RTS 8](https://www.gamblingcommission.gov.uk/standards/remote-gambling-and-software-technical-standards/rts-8-autoplay-functionality) |
| **RTS 13 -- Time requirements & reality checks** | Customers must have easily accessible facilities to set a reality-check frequency; the check displays time elapsed in the session and must be acknowledged before further play | Player controls / RG messaging | [RTS 13](https://www.gamblingcommission.gov.uk/standards/remote-gambling-and-software-technical-standards/rts-13-time-requirements-and-reality-checks) |
| **RTS 14 -- Responsible product design** | Bans loss-chasing prompts (14A); withdrawal cancellation / reverse withdrawal (14B); simultaneous multi-game play (14C); slot spin cycles under 2.5 seconds and casino game cycles under 5 seconds (14D/14G); speed-up features including turbo, quick-spin and slam-stop (14E); and celebratory audio or visual effects for returns at or below the amount staked (14F) | Player controls / RG messaging / honest win-loss framing | [RTS 14](https://www.gamblingcommission.gov.uk/standards/remote-gambling-and-software-technical-standards/rts-14-responsible-product-design) (overview: [changes to rules for online games design](https://www.gamblingcommission.gov.uk/news/article/changes-to-rules-for-online-games-design)) |

RTS 14F matters for {{PROGRAM_NAME}} content directly: a "win" that returns less than the stake is a net loss, and the product is no longer allowed to celebrate it as a win. {{PROGRAM_NAME}}'s honest win-loss framing aligns with -- and can explain -- this rule.

### Online slots stake limits

A hard per-spin player-control rule introduced after the White Paper:

| Player group | Maximum stake per spin / game cycle | Live from |
|---|---|---|
| Players aged 25 and over | £5 | 9 April 2025 |
| Players aged 18-24 | £2 | 21 May 2025 |

Source: [Gambling Commission -- Online slots stake limit guidance](https://www.gamblingcommission.gov.uk/licensees-and-businesses/guide/online-slots-stake-limit-guidance).

### {{PROGRAM_NAME}} tool messaging -- game information & design

| Touchpoint | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| RTP disclosure | "Every game shows its return-to-player. Here is what that number actually means for your session." | RTS 3 |
| Reality check | "Time check: you have been playing 60 minutes. Tap to keep going or take a breather." | RTS 13 |
| Stake limit | "Online slots cap stakes at £5 a spin (£2 if you are under 25). Your limit, set for you." | Stake limit guidance |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 18+ (16+ for lotteries and football pools) |
| **`_brand.yml` key** | `legal.minimum_gambling_age.united-kingdom` |
| **`{{MIN_AGE}}` token value** | 18 |
| **Statutory basis** | Gambling Act 2005, ss.46-48 |

### Land-based verification

| Requirement | Details | Source |
|---|---|---|
| **Method** | Government-issued photo ID; Challenge 25 policy widely adopted | Gambling Act 2005 |
| **Acceptable ID** | Passport, driving licence, PASS-accredited proof of age card | Industry practice |

### Interactive verification

| Requirement | Details | Source |
|---|---|---|
| **Verification timing** | Before deposit, free-to-play access, or gambling | SR 3.2.11 |
| **Method** | Electronic age and identity verification | SR 3.2.11 |
| **Filtering** | Websites must accommodate filtering software for parental controls | SR 3.2.11 |
| **Staff training** | Employees must receive training on age verification procedures | SR 3.2.11 |
| **Offence warning** | Must notify that underage gambling is a criminal offence | SR 3.2.11 |
| **Regular review** | Must regularly review verification systems and implement improvements | SR 3.2.11 |

### Age messaging

All collateral in the UK must display `18+` age notice:

> "You must be 18+ to gamble."

For lottery-specific content:

> "You must be 16+ to play the lottery."

---

## AML/KYC

### Regulatory framework

UK gambling operators are subject to anti-money laundering regulations under the **Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017** (MLR 2017) and the **Proceeds of Crime Act 2002** (POCA). The Gambling Commission is the AML supervisory body for gambling.

| Requirement | Details | Source |
|---|---|---|
| **AML supervisory body** | Gambling Commission | MLR 2017 |
| **Risk assessment** | Operators must conduct AML/CTF risk assessments (LCCP 12.1.1) | LCCP 12.1.1 |
| **Customer due diligence** | Verify identity, monitor transactions, maintain records | MLR 2017 |
| **Suspicious activity reports** | File SARs with the National Crime Agency (NCA) | POCA 2002 |
| **DAML threshold** | Defence against money laundering exemption raised to GBP 3,000 (from July 2025) | POCA 2002 (amended) |
| **Casino-specific** | Enhanced due diligence; remote and non-remote casino guidance updated October 2025 | Gambling Commission guidance |
| **Emerging risks** | Virtual currencies, AI-manipulated documents, open-loop payment systems | Gambling Commission April 2025 risk update |
| **Staff training** | Criminal liability under POCA for failure to report known or suspected money laundering | POCA 2002 |
| **Enforcement** | Regular enforcement actions; fines regularly in the millions (e.g., GBP 10M against Platinum Gaming, October 2025) | Gambling Commission |

> **Distinct from RG checks**: AML source-of-funds work above is separate from the **SR 3.4.4 financial vulnerability check** and the forthcoming financial-risk (affordability) assessments, which are social-responsibility measures aimed at protecting customers from harm rather than AML controls. See [Player protection -- interactive](#player-protection--interactive).

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity."

**On-brand:**
> "Quick ID check -- it keeps your account secure and is required for all players. Takes about 2 minutes. If we ask about the source of your funds, it's a standard security step that applies to everyone."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to UK-specific adaptations.

| Category | Collateral | UK adaptation | Token/Value |
|---|---|---|---|
| **Digital** | Website footer | GamCare: 0808 8020 133 + GAMSTOP link + on-brand RG message | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Set to 18+ | `{{MIN_AGE}}` = 18 |
| **Digital** | Self-exclusion page | GAMSTOP registration link + premises schemes info | -- |
| **Digital** | Deposit screen | Financial limit prompt (RTS 12A-12E compliant) + GamCare | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media bio | Include 0808 8020 133, 18+, begambleaware.org | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email footer | GamCare + 18+ + on-brand RG message in every email | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | UK helpline (GamCare), 18+ notice, GAMSTOP reference | All tokens |
| **Print** | Rack card | GamCare, on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | GamCare + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | GamCare, 0808 8020 133, gamcare.org.uk, gamstop.co.uk | All helpline tokens |
| **Environmental** | Entry signage | 18+ age notice, GamCare helpline | `{{MIN_AGE}}`, `{{HELPLINE_NUMBER}}` |
| **Environmental** | Floor / ATM area | GamCare, responsible gambling info (discreet portable formats) | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | On-brand RG message in rotation, GamCare | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot end card | GamCare + 18+ (pre-watershed content restrictions apply) | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Spoken GamCare reference + 18+ | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | GamCare in all referral scripts, GAMSTOP enrollment guidance | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Add UK self-exclusion Q&A (GAMSTOP + premises), update helpline to GamCare | -- |

### Key differences from other jurisdictions

| Area | United Kingdom | Ontario | Nevada |
|---|---|---|---|
| **Mandatory statement** | None (obligation-based) | None (obligation-based) | Wagering accounts: prescribed text |
| **Helpline** | GamCare 0808 8020 133 | ConnexOntario 1-866-531-2600 | NCPG 1-800-522-4700 |
| **Self-exclusion** | GAMSTOP (national remote) + local premises | OLG My PlayBreak + iGaming CSE (2026) | Property-by-property |
| **Advertising** | ASA/CAP codes (most complex globally) | AGCO Standards + CGA Code | Reg 5.011 (general decency) |
| **Customer interaction** | SR 3.4.3 (most prescriptive globally) | Std 2.10/2.11 (detailed) | Reg 5.170(3) (training only) |
| **Financial limits** | Mandatory prompt; gross deposit definition | Mandatory deposit/loss limits | Must offer various limit types |
| **Odds format** | Decimal / fractional | American | American |
| **Currency** | GBP | CAD | USD |
| **Language** | British English | Canadian English | American English |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in the UK:

```yaml
# ─── HELPLINES ───────────────────────────────
helplines:
  united-kingdom:
    number: "0808 8020 133"
    website: "www.gamcare.org.uk"
    label: "National Gambling Helpline (GamCare)"
    hours: "24/7"
    chat: "www.gamcare.org.uk"
    whatsapp: "0808 8020 133"
    self_exclusion: "www.gamstop.co.uk"
    awareness: "www.begambleaware.org"

# ─── LEGAL ───────────────────────────────────
legal:
  minimum_gambling_age:
    united-kingdom: 18

# ─── SELF-EXCLUSION ──────────────────────────
self_exclusion:
  united-kingdom:
    name: "GAMSTOP"
    url: "https://www.gamstop.co.uk"

# ─── AWARENESS ───────────────────────────────
awareness:
  united-kingdom:
    name: "GambleAware"
    url: "https://www.begambleaware.org"
```

Note: The UK has **no mandatory messaging token** -- there is no `messaging.mandatory.united-kingdom` entry because no verbatim statement is required.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in the United Kingdom.

### Regulatory
- [ ] Confirmed Gambling Commission as regulator
- [ ] Reviewed Gambling Act 2005 and LCCP (current version)
- [ ] Identified all applicable SR codes for deployment verticals
- [ ] Verified legal gambling age: 18+ for all products (16+ for lotteries)
- [ ] Reviewed permitted products table
- [ ] Tracked recent and upcoming LCCP/RTS changes (game design RTS 14 + autoplay RTS 8 from January 2025, stake limits April/May 2025, financial limits October 2025, gross deposit definition June 2026)
- [ ] Reviewed Remote technical standards relevant to deployment (RTS 2, 3, 8, 13, 14)
- [ ] Reviewed statutory levy obligations (Gambling Levy Regulations 2025; 0.1%-1.1% of GGY, collected from 1 October 2025)
- [ ] Identified deployment verticals: [ ] Land-based [ ] Interactive [ ] Both

### Helpline
- [ ] GamCare National Gambling Helpline (0808 8020 133) displayed prominently per SR 3.3.1
- [ ] Phone, chat, and WhatsApp contact options included
- [ ] GambleAware transition monitored (wind-down by March 2026)
- [ ] GAMSTOP link included alongside helpline
- [ ] Support signposting in self-exclusion process

### Messaging
- [ ] Confirmed: no verbatim mandatory statement required in the UK
- [ ] Responsible gambling information displayed prominently per SR 3.3.1
- [ ] On-brand {{PROGRAM_NAME}} messaging used (not just bare compliance)
- [ ] 18+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to UK values
- [ ] British English spelling used throughout (licence, behaviour, organisation)

### Advertising
- [ ] Advertising reviewed against ASA/CAP Code Section 16 (non-broadcast)
- [ ] Advertising reviewed against BCAP Code Section 17 (broadcast)
- [ ] No content targeting or appealing to persons under 18
- [ ] No one under 25 featured gambling or in significant roles
- [ ] No content linking gambling to sexual success, financial solutions, or life priority
- [ ] No irresponsible gambling behaviour portrayed
- [ ] Incentive terms clear and not misleading (SR 5.1.1)
- [ ] Social media content compliant with September 2025 CAP Code extension
- [ ] Advertising reviewed per [advertising-rules.md](advertising-rules.md)

### Self-exclusion
- [ ] Interactive: GAMSTOP integration operational (SR 3.5.5)
- [ ] Interactive: accounts closed and marketing ceased within 24 hours of GAMSTOP registration
- [ ] Land-based: individual premises self-exclusion available (SR 3.5.1)
- [ ] Land-based: participating in multi-operator local scheme (SR 3.5.6)
- [ ] Self-excluded persons removed from marketing databases within 2 days
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language
- [ ] Staff FAQ updated with UK self-exclusion Q&A (GAMSTOP + premises)

### Player protection
- [ ] Interactive: financial limit prompts compliant with RTS 12A-12E (from October 2025)
- [ ] Interactive: free-text limit entry (no pre-set dropdown values)
- [ ] Interactive: 6-month review reminders for limits and account activity
- [ ] Interactive: limit decreases applied immediately
- [ ] Interactive: customer interaction operational on the identify -> act -> evaluate model (SR 3.4.3 + formal guidance)
- [ ] Interactive: escalation framework in place (tailored -> strong -> termination)
- [ ] Interactive: automated safeguards with manual review for strong indicators
- [ ] Interactive: effectiveness evaluation documented
- [ ] Interactive: financial vulnerability check operational at net-deposit thresholds (SR 3.4.4)
- [ ] Interactive: reality checks customer-settable and acknowledged (RTS 13)
- [ ] Interactive: RTP / likelihood-of-winning information available before commit (RTS 3)
- [ ] Interactive: autoplay disabled across all online gaming products (RTS 8)
- [ ] Interactive: game design compliant -- no loss-chasing prompts, reverse withdrawal, turbo/slam-stop, sub-2.5s spins, or celebration of returns at or below stake (RTS 14)
- [ ] Interactive: online slots stake limits enforced (£5 for 25+, £2 for 18-24)
- [ ] Interactive: customer funds protection status disclosed every 6 months (LCCP 4.2.1)
- [ ] Land-based: customer interaction procedures implemented (SR 3.4.1)
- [ ] Land-based: responsible gambling information posted per SR 3.3.1

### Age verification
- [ ] 18+ age verification at all gambling touchpoints
- [ ] Interactive: verification before deposit, free-to-play, or gambling (SR 3.2.11)
- [ ] Interactive: websites accommodate filtering software (SR 3.2.11)
- [ ] Interactive: underage gambling offence warning displayed (SR 3.2.11)
- [ ] Land-based: photo ID checks; Challenge 25 policy recommended

### AML/KYC
- [ ] AML/CTF risk assessment completed (LCCP 12.1.1)
- [ ] Customer due diligence procedures in place (MLR 2017)
- [ ] SAR filing procedures operational (POCA 2002)
- [ ] Staff trained on POCA criminal liability
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice
- [ ] Casino-specific AML guidance reviewed (if applicable)
- [ ] Emerging risks addressed (virtual currencies, AI documents, open-loop payments)

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] British English spelling and terminology throughout
- [ ] Decimal odds format used (not American)
- [ ] GBP currency context (not USD)
- [ ] Staff FAQ updated with UK-specific Q&As
- [ ] Conversation scripts updated with GamCare references

### Governance
- [ ] `_brand.yml` updated with UK values (helpline, age, self-exclusion)
- [ ] `_brand-uk.yml` reviewed
- [ ] `Last verified` date set on this module
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained
- [ ] GambleAware transition monitoring plan in place

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [UK config overrides](_brand-uk.yml) | [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../collateral/customer-service/staff-faq.md) | [Governance](../../brand-book/08-governance.md) | [Advertising rules](advertising-rules.md)*
