---
content_type: jurisdiction-module
title: "Nevada — Compliance Module"
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
game_type: [slots, blackjack, roulette, sports-betting, video-poker, poker]
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
  sports_culture: us-major-leagues
  language: en-us
adaptation_status: base
adaptation_notes: |
  Nevada module is written for the US market (peer/individual/irreverent/
  blunt/open). On-brand messaging examples throughout need adaptation
  for non-US deployments. Currency is USD. Helpline numbers are US
  national (NCPG). Self-exclusion is property-by-property — unique to
  Nevada. AGA code references are US-specific.
last_updated: 2026-03-10
---

# Nevada — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Nevada. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. Nevada uses an obligation-based model for most player-facing signage (Reg 5.170 — no prescribed phrasing) but does prescribe a verbatim responsible gambling message for wagering accounts (Reg 5.225(18)(b)). Nevada uses a property-by-property self-exclusion model — there is no centralized statewide program.

> **Last verified**: 2026-03-10
> **Next review due**: 2026-06-10 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | NGCB + NGC two-tier structure |
| [Legal requirements](#legal-requirements) | 21+, permitted products, licensing |
| [Helpline](#helpline) | NCPG national helpline, display rules |
| [Messaging requirements](#messaging-requirements) | Obligation-based signage + verbatim wagering account message |
| [Advertising restrictions](#advertising-restrictions) | Principles-based standard (Reg 5.011(1)(d)) + Reg 5A.155 |
| [Self-exclusion](#self-exclusion) | Property-by-property model (Reg 5.170(4)) + interactive (Reg 5A.130) |
| [Player protection tools](#player-protection-tools) | Land-based vs. interactive gaming |
| [Age verification](#age-verification) | 21+ requirements |
| [AML/KYC](#amlkyc) | FinCEN/BSA requirements |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Regulatory model** | Two-tier: NGCB (investigates/enforces) + NGC (decides/approves) |
| **Investigative body** | Nevada Gaming Control Board (NGCB) |
| **Decision body** | Nevada Gaming Commission (NGC) |
| **Governing legislation** | Nevada Revised Statutes (NRS) Chapter 463 — Nevada Gaming Control Act |
| **Regulations** | NGC Regulation 5 (Operation of Gaming Establishments, Rev. 12/24); NGC Regulation 5A (Operation of Interactive Gaming, Rev. 05/24) |
| **Established** | 1955 (oldest state gaming regulatory framework in the US) |

### Two-tier structure

Nevada's regulatory framework uses a **two-tier system** that separates investigation/enforcement from decision-making:

| Body | Role | Key functions |
|---|---|---|
| **NGCB** (Nevada Gaming Control Board) | Investigates and enforces | Licensing investigations, audits, compliance inspections, enforcement actions, regulation recommendations |
| **NGC** (Nevada Gaming Commission) | Decides and approves | Final licensing decisions, regulation adoption, appeals, policy |

### How the two tiers work

1. **NGCB investigates** — conducts background checks, financial audits, and compliance reviews on all applicants and licensees
2. **NGCB recommends** — presents findings and recommendations to the NGC
3. **NGC decides** — approves, denies, or conditions licenses and regulatory changes
4. **NGCB enforces** — monitors ongoing compliance and takes enforcement action

This separation ensures independence — the body that investigates does not make the final decision.

### Key divisions within NGCB

| Division | Relevance to {{PROGRAM_NAME}} |
|---|---|
| **Enforcement** | Monitors advertising compliance, responsible gaming obligations |
| **Technology** | Approves interactive gaming platforms, reviews technical standards |
| **Investigations** | Licensing background checks — not directly relevant to {{PROGRAM_NAME}} content |
| **Tax and License** | Revenue reporting — not directly relevant to {{PROGRAM_NAME}} content |

### Primary sources

| Document | URL | Relevance |
|---|---|---|
| NRS Chapter 463 | [leg.state.nv.us/nrs/nrs-463.html](https://www.leg.state.nv.us/nrs/nrs-463.html) | Nevada Gaming Control Act — governs all gambling in Nevada |
| NGC Regulation 5 (Rev. 12/24) | [gaming.nv.gov — Regulation 5](https://www.gaming.nv.gov/siteassets/content/home/features/Regulation5Operation.pdf) | Operation of Gaming Establishments — includes 5.011 (advertising), 5.170 (problem gambling programs), 5.225 (wagering accounts) |
| NGC Regulation 5A (Rev. 05/24) | [gaming.nv.gov — Regulation 5A](https://www.gaming.nv.gov/siteassets/content/home/features/Regulation5A.pdf) | Operation of Interactive Gaming — online poker and mobile sports betting |

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 21+ (all gambling products — no exceptions) |
| **Legal framework** | State-licensed operators under NRS Chapter 463 |
| **Online gambling** | Online poker legal (since 2013); mobile sports betting legal; online casino NOT legal |
| **Lottery** | Constitutionally prohibited (Nevada Constitution, Article 4, § 24) |

### Permitted products

| Product | Legal status | Regulator | Notes |
|---|---|---|---|
| Casino (slots, table games) | Legal | NGCB/NGC | Nevada's primary gambling industry; ~200 nonrestricted licensees |
| Sports betting | Legal | NGCB/NGC | Land-based and mobile |
| Online poker | Legal | NGCB/NGC | Legal since 2013 under AB 114; interstate compact with Delaware |
| Online casino | **Not legal** | — | Not authorized under current Nevada law |
| Lottery | **Constitutionally prohibited** | — | Nevada Constitution prohibits state lotteries |
| Horse racing (pari-mutuel) | Legal | Nevada Racing Commission | Separate regulatory body |
| Charitable gaming | Legal (limited) | NGCB/NGC | Bingo, raffles for qualified organizations |

### Licensing model

Nevada uses a **detailed licensing system**:

| License type | Description |
|---|---|
| **Nonrestricted** | Full casino operations (15+ slot machines or any table games) |
| **Restricted** | Limited slot operations (up to 15 machines, no table games) — bars, grocery stores, etc. |
| **Interactive gaming** | Online poker and mobile sports betting operators (NRS 463.750; Reg 5A.030) |
| **Manufacturer/Distributor** | Gaming equipment manufacturers and distributors |
| **Service provider** | Companies providing services to licensees |

### Key regulatory notes

- Nevada operates a **licensing model**, not a monopoly model — multiple private operators hold licenses
- Operators must be licensed by NGCB/NGC before offering any gambling product
- {{PROGRAM_NAME}} content itself does not require a license, but the operator deploying it must be licensed

---

## Helpline

### NCPG national helpline

Nevada does not operate a separate state gambling helpline. Operators use the **NCPG national helpline**:

| Field | Value |
|---|---|
| **Primary number** | 1-800-MY-RESET (1-800-697-3738) |
| **Vanity number** | 1-800-GAMBLER |
| **Legacy number** | 1-800-522-4700 |
| **Text support** | Text 800GAM |
| **Online chat** | www.ncpgambling.org/chat |
| **Hours** | 24/7/365 |
| **Cost** | Free |
| **Languages** | 240+ via Language Line Solutions |
| **Regulatory reference** | NGCB Notice 2026-04 — all three numbers accepted |

### Nevada Council on Problem Gambling

| Field | Value |
|---|---|
| **Organization** | Nevada Council on Problem Gambling (NCPG-NV) |
| **Website** | www.nevadacouncil.org |
| **Role** | State-level advocacy, education, and referral (nonprofit) |
| **Relationship** | Affiliate of the national NCPG; not a regulator |

The Nevada Council on Problem Gambling is a **nonprofit** organization — it is not a state agency and does not operate a separate helpline. It provides education, training, and advocacy within Nevada and refers to the national NCPG helpline.

### Display rules (Regulation 5.170(2))

Under **Regulation 5.170(2)**, Nevada licensees must:

> Each licensee shall post or provide in conspicuous places in or near gaming and cage areas and cash dispensing machines located in gaming areas written materials concerning the nature and symptoms of problem gambling and the toll-free telephone number of the National Council on Problem Gambling or a similar entity approved by the Board Chair that provides information and referral services for problem gamblers.

This means:
- **Prominently post** problem gambling information and the NCPG helpline number
- Post in areas including: casino floor, near ATMs, at cage
- Materials must cover nature and symptoms of problem gambling (not just the helpline number)

### Helpline number transition

As of January 2026, NCPG has rebranded to **1-800-MY-RESET**. Per **NGCB Notice 2026-04**:

| Number | Status | Recommendation |
|---|---|---|
| 1-800-MY-RESET | New primary (January 2026) | Use as the prominently displayed number going forward |
| 1-800-GAMBLER | Still active | Widely recognized; commonly required by regulators |
| 1-800-522-4700 | Still active | Legacy number; acceptable for compliance |

**{{PROGRAM_NAME}} recommendation**: Display **1-800-GAMBLER** as primary (most widely recognized and commonly required), with **1-800-MY-RESET** as the updated branded number. Include both where space permits.

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call 1-800-GAMBLER."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support — 24/7. For any question about gambling.
> **Call 1-800-GAMBLER** | **1-800-MY-RESET** | **Chat at ncpgambling.org**

Both meet the Regulation 5.170 requirement. The second version provides multiple contact options, frames the helpline as available for any question (not only crisis), and includes the updated branded number.

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Two messaging regimes

Nevada has **two distinct messaging regimes** — one for general signage and one for wagering accounts:

| Regime | Requirement | Source |
|---|---|---|
| **General signage** | Obligation-based — post problem gambling info and helpline, but no prescribed phrasing | Reg 5.170(2) |
| **Wagering accounts** | **Verbatim message prescribed** — must be conspicuously displayed upon account access | Reg 5.225(18)(b) |

### Wagering account mandatory message (Regulation 5.225(18)(b))

Operators with wagering accounts (including mobile sports betting and online poker) must display the following message:

> [Licensee's name] encourages you to gamble responsibly. For problem gambling information and assistance, call the 24-hour confidential Problem Gamblers HelpLine at 1-800-522-4700, or visit www.WhenTheFunStops.org.

**Important**: The regulation allows the Board Chair to administratively approve alternative helpline numbers or website addresses if they change. Given the NCPG rebrand to 1-800-MY-RESET, check with NGCB for current approved alternatives.

### General signage obligations (Regulation 5.170)

For non-wagering-account contexts, Nevada's approach is **obligation-based rather than message-based**. Operators must:

1. **Post problem gambling information** prominently in/near gaming areas, cage areas, and at ATMs (Reg 5.170(2))
2. **Display the helpline number** (1-800-GAMBLER / 1-800-MY-RESET / 1-800-522-4700)
3. **Make self-exclusion information available** to patrons who request it (Reg 5.170(4))
4. **Train employees** to recognize symptoms of problem gambling and provide resources (Reg 5.170(3))

The regulation does not prescribe what the general signage must say — only that it must cover nature and symptoms of problem gambling and include the helpline number.

### On-brand integration

Because general signage has no mandated phrasing, operators have flexibility to use {{PROGRAM_NAME}} messaging natively:

**Generic operator approach:**
> "If gambling is a problem, call 1-800-GAMBLER."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-800-GAMBLER** | **1-800-MY-RESET** | ncpgambling.org

**{{PROGRAM_NAME}} venue signage:**
> **Every game has math. Here's yours.** Your session, your budget, your call. Tools and info available at the cage or at {{PROGRAM_NAME}}.
> Need to talk? **1-800-GAMBLER** — free, confidential, 24/7.

### Placement guidance

| Touchpoint | Recommended placement | Regulatory basis |
|---|---|---|
| Casino floor | Conspicuous places in/near gaming areas | Reg 5.170(2) |
| Cage area | Conspicuous places in/near cage areas | Reg 5.170(2) |
| ATMs in gaming areas | At cash dispensing machines | Reg 5.170(2) |
| Website / app (wagering accounts) | Conspicuously displayed upon account access | Reg 5.225(18)(b) |
| Interactive gaming platform | Prominent display before play begins | Reg 5A.150 |
| Social media | Profile/bio | Best practice |
| Print collateral | Back panel or footer | Best practice |
| TV/video | End card (3+ seconds) | Best practice |
| Radio | Spoken helpline reference | Best practice |
| Email | Footer of every email | Best practice |

---

## Advertising restrictions

### Nevada's principles-based standard

Nevada's advertising regulation takes a **principles-based approach** rather than the prescriptive rules found in jurisdictions like Ontario or the UK.

| Field | Value |
|---|---|
| **Primary regulation** | NGC Regulation 5.011(1)(d) |
| **Standard** | Advertising must conform to "decency, dignity, good taste, honesty, and inoffensiveness" |
| **Interactive gaming** | Reg 5A.155 — truthful and non-deceptive; promotion terms must be clear and concise |
| **Approach** | Principles-based — no itemized list of prohibited content |
| **Enforcement** | NGCB Enforcement Division reviews complaints and may initiate action |

### Regulation 5.011(1)(d) — full text

> Failure to conduct advertising and public relations activities in accordance with decency, dignity, good taste, honesty and inoffensiveness, including, but not limited to, advertising that is false or materially misleading.

This is listed as a ground for disciplinary action, giving NGCB/NGC flexibility to evaluate advertising on a case-by-case basis.

### Regulation 5A.155 — interactive gaming advertising

> An operator, including its employees or agents, shall be truthful and non-deceptive in all aspects of its interactive gaming advertising and promotions. An operator which engages in any promotion related to interactive gaming shall clearly and concisely explain the terms of the promotion and adhere to such terms.

### Practical interpretation

| Principle | Practical application |
|---|---|
| **Decency** | No sexually explicit or gratuitously violent imagery |
| **Dignity** | Advertising treats gambling as entertainment, not desperation |
| **Good taste** | No content that reasonable people would find offensive |
| **Honesty** | No misleading claims about odds, winnings, or guaranteed outcomes; promotion terms must be clear |
| **Inoffensiveness** | No content targeting vulnerable populations or trivializing problem gambling |

### Additional restrictions

| Rule | Source | Details |
|---|---|---|
| **No targeting minors** | NRS 463.0129 (public policy) | Advertising must not appeal to persons under 21 |
| **No targeting self-excluded** | Reg 5.170(4) | Marketing to property self-excluded patrons is prohibited |
| **Honest odds claims** | Reg 5.011(1)(d) | Any reference to odds, probabilities, or winning must be accurate and not materially misleading |
| **Clear promotion terms** | Reg 5A.155 | Interactive gaming promotion terms must be clear, concise, and adhered to |
| **FTC compliance** | Federal | Standard truth-in-advertising rules apply to all gambling advertising |

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

### Two self-exclusion regimes

Nevada has **separate self-exclusion requirements** for land-based and interactive gaming:

| Regime | Model | Source |
|---|---|---|
| **Land-based** | Property-by-property self-limitation (credit, check-cashing, direct mail) | Reg 5.170(4) |
| **Interactive gaming** | Operator-level self-exclusion with account closure | Reg 5A.130 |

### Land-based: Property-by-property model (Regulation 5.170(4))

| Field | Value |
|---|---|
| **Model** | Property-by-property |
| **Centralized state program** | **None** — Nevada does not operate a statewide self-exclusion registry |
| **Scope** | Credit, check-cashing, and direct mail self-limitation at individual licensee |
| **Required elements** | Written materials explaining program; enrollment forms; standards/procedures; removal from direct marketing |

Under Reg 5.170(4), licensees that engage in credit issuance, check cashing, or direct mail marketing must implement a program that:
- Allows patrons to self-limit access to credit, check cashing, and direct mail marketing
- Provides written materials explaining the program
- Uses written enrollment forms
- Removes enrolled patrons from direct mailing and marketing

### Interactive gaming: Operator-level self-exclusion (Regulation 5A.130)

| Field | Value |
|---|---|
| **Model** | Operator-level (applies to that operator's interactive gaming platform) |
| **Minimum exclusion period** | 30 days before reinstatement permitted |
| **Account action** | Account closed upon self-exclusion |
| **Marketing** | All reasonable steps to prevent marketing to self-excluded individuals |
| **Employee training** | Required to enforce policies and procedures |

Under Reg 5A.130, operators must:
1. Maintain a register of self-excluded individuals (name, address, account details)
2. Close the interactive gaming account of anyone who self-excludes
3. Train employees on enforcement
4. Enforce a minimum 30-day exclusion before reinstatement is permitted
5. Take all reasonable steps to prevent marketing to self-excluded individuals

### Why there is no centralized program

Nevada's gaming industry predates modern centralized self-exclusion systems. With ~200 nonrestricted licensees, the state has historically relied on individual operators to manage their own patron exclusion lists.

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Formal term | When to use formal term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break from [property name]" | "Self-exclusion" / "Voluntary exclusion" | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" / "Voluntary exclusion program" | Per Reg 5.170(4) / 5A.130 | Legal documents, formal enrollment, support referrals |
| Website/app | "Need a break from playing here?" | "Self-exclusion program" | On the self-exclusion enrollment page itself |
| Print/signage | "Need a break from gambling?" | "Self-exclusion" | Venue self-exclusion information areas |

### Multi-property operators

Large operators (e.g., MGM Resorts, Caesars Entertainment) typically apply self-exclusion across all properties they own/operate in Nevada. This is an **operator policy**, not a regulatory requirement. {{PROGRAM_NAME}} content should:

- Clarify the scope of exclusion (which properties are covered)
- Note that exclusion at one operator does not cover another operator's properties
- Provide information on how to self-exclude at other properties if the player requests it

---

## Player protection tools

### Land-based gaming (Regulation 5.170)

Nevada's land-based player protection requirements are obligation-based:

| Tool | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Problem gambling information** | Yes | Reg 5.170(2) | Written materials on nature/symptoms of problem gambling posted prominently |
| **Helpline display** | Yes | Reg 5.170(2) | NCPG toll-free number in gaming areas, at cage, at ATMs |
| **Employee training** | Yes | Reg 5.170(3) | Training on problem gambling symptoms; NCPG-NV certified programs presumed adequate |
| **Credit/check/mail self-limitation** | Yes | Reg 5.170(4) | Players can self-limit access to credit, check-cashing, and direct mail marketing |
| **Deposit limits** | N/A (land-based) | — | Not applicable for walk-in cash play |
| **Session time tracking** | No | — | Not required; some operators offer voluntarily |
| **Activity statements** | No | — | Not required for land-based |

### Interactive gaming (Regulation 5A.120(4) and 5.225(18))

Nevada's interactive gaming regulations require significantly more player protection:

| Tool | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Loss limits** | Yes | Reg 5A.120(4)(a) | Net loss limits within a specified period |
| **Deposit limits** | Yes | Reg 5A.120(4)(b) / 5.225(18)(a) | Total deposit limits within a specified period |
| **Tournament limits** | Yes | Reg 5A.120(4)(c) | Total tournament entry dollar limits within a specified period |
| **Buy-in limits** | Yes (poker) | Reg 5A.120(4)(d) | Total buy-in limits for poker play within a specified period |
| **Play-time limits** | Yes | Reg 5A.120(4)(e) | Total time available for play during a specified period |
| **Time-based exclusion** | Yes | Reg 5A.120(4)(f) | Self-exclusion from gambling settings for a time period |
| **Responsible gambling message** | Yes | Reg 5.225(18)(b) | Verbatim message displayed upon account access |
| **Self-exclusion** | Yes | Reg 5A.130 | Account closure, 30-day minimum, marketing cessation |
| **Single account** | Yes | Reg 5A.120(2)(a) | One interactive gaming account per operator |
| **No credit extension** | Yes | Reg 5A.120(3) | No credit for interactive gaming; no deposit from operator-extended credit |
| **Game history** | Yes | Reg 5A.190(6) | Complete game history maintained for every game played |
| **Records retention** | Yes | Reg 5A.190 | All records maintained for at least 5 years |

### {{PROGRAM_NAME}} tool messaging for Nevada

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Credit self-limitation | "Don't want credit at the tables? Tell the cage — it's that simple." | Land-based (Reg 5.170(4)) |
| Deposit limits | "Set your deposit limit — play on your terms. Takes 10 seconds." | Interactive gaming (Reg 5A.120(4)(b)) |
| Loss limits | "Set a loss limit — no surprises at the end of a session." | Interactive gaming (Reg 5A.120(4)(a)) |
| Session limits | "Set a session reminder — your dashboard, your rules." | Interactive gaming (Reg 5A.120(4)(e)) |
| Buy-in limits | "Cap your buy-ins — set it once and play without thinking about it." | Online poker (Reg 5A.120(4)(d)) |
| Self-exclusion | "Need a break from playing here? We can set that up." | Both (Reg 5.170(4) / Reg 5A.130) |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 21+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.united-states-nevada` |
| **`{{MIN_AGE}}` token value** | 21 |
| **Verification (casino floor)** | Government-issued photo ID; checked at entry to gaming areas and/or at table/machine |
| **Verification (interactive gaming)** | Multi-step per Reg 5A.110 |
| **Products with different ages** | None — 21+ applies to all gambling in Nevada |
| **Statutory basis** | NRS 463.350 |

### Interactive gaming registration (Regulation 5A.110)

Online poker and mobile sports betting operators must verify identity through a **multi-step process**:

| Step | Requirement | Source |
|---|---|---|
| **Required information** | Identity, date of birth (21+), physical address, last 4 digits of SSN | Reg 5A.110(2)(a-d) |
| **Self-exclusion check** | Confirm player has not previously self-excluded with operator | Reg 5A.110(2)(e) |
| **Excluded persons check** | Confirm player is not on the NRS 463.151 excluded persons list | Reg 5A.110(2)(f) |
| **Player affirmations** | Accuracy of information, house rules acknowledgment, account exclusivity, geolocation awareness | Reg 5A.110(3) |
| **Verification window** | Operator must verify information within 30 days of registration | Reg 5A.110(5) |
| **Pre-verification limits** | Max $5,000 deposit; no withdrawals until verified | Reg 5A.110(5)(a-b) |
| **Verification failure** | Account suspended; winnings retained by operator; deposits refunded | Reg 5A.110(6) |
| **Remote registration** | Permitted — in-person not required for account creation | Reg 5A.110(4) |

### Age messaging

All collateral in Nevada must display `21+` age notice:

> "You must be 21+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `21+` for all Nevada-deployed content.

---

## AML/KYC

### FinCEN/BSA requirements

Nevada casinos are classified as **financial institutions** under the Bank Secrecy Act (BSA) and must comply with FinCEN regulations:

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Currency Transaction Report (CTR)** | $10,000+ (single transaction or aggregate in 24 hours) | Player must provide ID; transaction reported to FinCEN |
| **Suspicious Activity Report (SAR)** | Any amount | No direct player notification — internal reporting |
| **Player identification (casino)** | $10,000+ cash transactions | Government-issued photo ID required |
| **Player identification (interactive)** | All accounts | Full identity verification per Reg 5A.110 |
| **Source of funds** | Large or unusual transactions | Player may be asked about the origin of funds |
| **Record keeping** | $3,000+ (cash purchases of chips, TITO) | Operator must record and retain transaction details |

### Interactive gaming AML (Regulation 5A.080)

> Each operator shall implement procedures that are designed to detect and prevent transactions that may be associated with money laundering, fraud and other criminal activities and to ensure compliance with all federal laws related to money laundering.

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "Federal law requires us to verify your identity for transactions of $10,000 or more."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required by federal law. If we ask about a large transaction, it's a standard process that applies to everyone at every casino in the US."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Nevada-specific adaptations.

| Category | Collateral | Nevada adaptation | Token/Value |
|---|---|---|---|
| **Digital** | Website footer | NCPG helpline: 1-800-GAMBLER / 1-800-MY-RESET + on-brand RG message | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Set to 21+ | `{{MIN_AGE}}` = 21 |
| **Digital** | Wagering account access | Verbatim Reg 5.225(18)(b) message | See [messaging requirements](#wagering-account-mandatory-message-regulation-522518b) |
| **Digital** | Interactive gaming pre-play | Operator identity, NGC license, 21+, geolocation, links per Reg 5A.150 | Multiple tokens |
| **Digital** | Self-exclusion page | Explain property-by-property model; link to operator's enrollment | — |
| **Digital** | Deposit screen | Helpline + on-brand message; deposit limit option prominently displayed | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media bio | Include 1-800-GAMBLER | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email footer | Helpline + on-brand RG message in every email | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | National helpline (both numbers), 21+ notice | All tokens |
| **Print** | Rack card | Helpline, on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Helpline + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | NCPG 1-800-GAMBLER, 1-800-MY-RESET, ncpgambling.org | All helpline tokens |
| **Environmental** | Gaming areas | Problem gambling info + helpline per Reg 5.170(2) | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Cage area | Problem gambling info + helpline per Reg 5.170(2) | `{{HELPLINE_NUMBER}}` |
| **Environmental** | ATMs in gaming areas | Problem gambling info + helpline per Reg 5.170(2) | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | On-brand RG message in rotation, helpline | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot end card | Helpline (3-second minimum recommended) | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Spoken helpline reference | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | NCPG helpline in all referral scripts, self-exclusion enrollment in scripts | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Add property-level self-exclusion Q&A, update helpline to NCPG | — |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Nevada:

```yaml
# ─── HELPLINES ───────────────────────────────
helplines:
  united-states:
    national:
      number: "1-800-522-4700"
      alternate: "1-800-GAMBLER"
      new_primary: "1-800-MY-RESET"
      text_number: "Text 800GAM"
      chat_url: "www.ncpgambling.org/chat"
      website: "www.ncpgambling.org"
      label: "National Council on Problem Gambling"
      hours: "24/7/365"
      languages: "240+ via Language Line Solutions"
    nevada:
      number: "1-800-522-4700"
      alternate: "1-800-GAMBLER"
      new_primary: "1-800-MY-RESET"
      website: "www.ncpgambling.org"
      label: "NCPG National Helpline"
      state_resource: "Nevada Council on Problem Gambling"
      state_website: "www.nevadacouncil.org"
      notes: "No separate state helpline — uses NCPG national number"

# ─── LEGAL ───────────────────────────────────
legal:
  minimum_gambling_age:
    united-states-nevada: 21

# ─── MANDATORY MESSAGING ────────────────────
messaging:
  mandatory:
    united-states-nevada-wagering: |
      [Licensee's name] encourages you to gamble responsibly.
      For problem gambling information and assistance, call the
      24-hour confidential Problem Gamblers HelpLine at
      1-800-522-4700, or visit www.WhenTheFunStops.org.
```

Note: The wagering account message is prescribed by Reg 5.225(18)(b). The Board Chair may approve alternative helpline numbers/URLs. General signage has no verbatim requirement.

Also see the full [US config overrides](../_brand-us.yml) for the complete state structure.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Nevada.

### Regulatory
- [ ] Confirmed NGCB/NGC two-tier regulatory structure
- [ ] Understood licensing model (operator must hold valid Nevada gaming license)
- [ ] Verified legal gambling age: 21+ for all products (NRS 463.350)
- [ ] Reviewed permitted products table (no online casino, no lottery)
- [ ] Reviewed NRS Chapter 463, NGC Regulation 5 (Rev. 12/24), and Regulation 5A (Rev. 05/24)
- [ ] Identified whether deployment is land-based, interactive gaming, or both

### Helpline
- [ ] NCPG helpline displayed prominently per Reg 5.170(2)
- [ ] All three accepted numbers known (1-800-522-4700, 1-800-GAMBLER, 1-800-MY-RESET)
- [ ] Primary display number selected (1-800-GAMBLER recommended)
- [ ] Helpline posted in conspicuous places in/near gaming areas, cage areas, and at ATMs
- [ ] Interactive gaming platform displays helpline prominently (Reg 5A.150)
- [ ] Nevada Council on Problem Gambling referenced where appropriate

### Messaging
- [ ] Wagering account displays verbatim Reg 5.225(18)(b) message upon account access
- [ ] Confirmed with NGCB whether alternative helpline numbers/URLs are approved for the Reg 5.225(18)(b) message
- [ ] Problem gambling information prominently posted per Reg 5.170(2) — nature and symptoms, plus helpline
- [ ] 21+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Nevada values

### Advertising
- [ ] Advertising content reviewed against Reg 5.011(1)(d) principles ("decency, dignity, good taste, honesty, inoffensiveness")
- [ ] Interactive gaming advertising reviewed against Reg 5A.155 (truthful, non-deceptive, clear promotion terms)
- [ ] No content targeting or appealing to persons under 21
- [ ] No misleading claims about odds, winning likelihood, or prize amounts
- [ ] No marketing to property self-excluded patrons (Reg 5.170(4))
- [ ] AGA Responsible Gaming Code of Conduct alignment verified
- [ ] Advertising reviewed per [advertising-rules.md](advertising-rules.md)

### Self-exclusion
- [ ] Land-based: Credit/check-cashing/direct mail self-limitation program per Reg 5.170(4)
- [ ] Interactive gaming: Self-exclusion with account closure per Reg 5A.130
- [ ] Interactive gaming: 30-day minimum exclusion period enforced
- [ ] Self-excluded patrons removed from all marketing lists
- [ ] Employee register of self-excluded individuals maintained
- [ ] Staff trained on self-exclusion enrollment and enforcement
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language

### Player protection
- [ ] Interactive gaming: Loss limits implemented (Reg 5A.120(4)(a))
- [ ] Interactive gaming: Deposit limits implemented (Reg 5A.120(4)(b) / 5.225(18)(a))
- [ ] Interactive gaming: Tournament limits implemented (Reg 5A.120(4)(c))
- [ ] Interactive gaming: Buy-in limits implemented for poker (Reg 5A.120(4)(d))
- [ ] Interactive gaming: Play-time limits implemented (Reg 5A.120(4)(e))
- [ ] Interactive gaming: Time-based exclusion available (Reg 5A.120(4)(f))
- [ ] Interactive gaming: Single account per operator enforced (Reg 5A.120(2)(a))
- [ ] Interactive gaming: No credit extension for interactive gaming (Reg 5A.120(3))
- [ ] Problem gambling information prominently posted (Reg 5.170(2))

### Age verification
- [ ] 21+ age verification at all gambling touchpoints (NRS 463.350)
- [ ] Interactive gaming: Registration per Reg 5A.110 (identity, DOB, address, SSN last 4)
- [ ] Interactive gaming: Self-exclusion and excluded persons checks (Reg 5A.110(2)(e-f))
- [ ] Interactive gaming: 30-day verification window enforced (Reg 5A.110(5))
- [ ] Interactive gaming: $5K deposit cap before verification (Reg 5A.110(5)(a))
- [ ] Interactive gaming: Geolocation requirement communicated (Reg 5A.110(3)(d))

### AML/KYC
- [ ] FinCEN/BSA compliance program in place
- [ ] CTR filing procedures for $10,000+ transactions
- [ ] SAR filing procedures operational
- [ ] Interactive gaming: AML procedures per Reg 5A.080
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] Staff FAQ updated with Nevada self-exclusion Q&A
- [ ] Conversation scripts updated with NCPG helpline references
- [ ] AML/KYC player-facing messaging uses {{PROGRAM_NAME}} voice
- [ ] Interactive gaming: Reg 5A.150 website display requirements met (operator name, license, 21+, geolocation, links)

### Governance
- [ ] `_brand.yml` updated with Nevada values (helpline, age, wagering account message)
- [ ] `_brand-us.yml` reviewed
- [ ] `Last verified` date set on this module
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [United States overview](../README.md) | [US config overrides](../_brand-us.yml) | [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [Advertising rules](advertising-rules.md)*
