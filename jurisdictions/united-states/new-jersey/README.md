---
content_type: jurisdiction-module
title: "New Jersey — Compliance Module"
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
verticals: [land-based, interactive]
regulatory_approach: hybrid
adaptation_status: base
adaptation_notes: |
  New Jersey module is written for the US market (peer/individual/irreverent/
  blunt/open). On-brand messaging examples need adaptation for non-US
  deployments. Currency is USD. Helpline is 1-800-GAMBLER (CCGNJ) + NCPG
  national. NJ has all three verticals: land-based casino, online casino/
  iGaming, and sports betting. Self-exclusion is statewide covering all
  verticals. AGA code references are US-specific.
last_updated: 2026-03-22
---

# New Jersey — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in New Jersey. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. New Jersey uses a hybrid approach: prescriptive rules for internet gaming (NJAC 13:69O) including a verbatim helpline message, and obligation-based requirements for much of land-based operations. NJ has a statewide self-exclusion program covering all casinos, racetracks, and internet gaming platforms.

> **Last verified**: 2026-03-22
> **Next review due**: 2026-06-22 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | DGE + CCC two-body structure |
| [Legal requirements](#legal-requirements) | 21+, permitted products, licensing |
| [Helpline](#helpline) | 1-800-GAMBLER (CCGNJ) + NCPG national |
| [Messaging requirements](#messaging-requirements) | Verbatim online message + obligation-based land-based |
| [Advertising restrictions](#advertising-restrictions) | DGE Advertising Best Practices |
| [Self-exclusion](#self-exclusion) | Statewide program (NJAC 13:69G) — 1/5 year/lifetime |
| [Player protection -- land-based](#player-protection--land-based) | Venue-specific requirements |
| [Player protection -- interactive](#player-protection--interactive) | NJAC 13:69O deposit/spend/time limits |
| [Age verification](#age-verification) | 21+ requirements |
| [AML/KYC](#amlkyc) | FinCEN/BSA requirements |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Regulatory model** | Two-body: DGE (investigates/enforces) + CCC (licenses/adjudicates) |
| **Investigative/enforcement body** | Division of Gaming Enforcement (DGE), under the Attorney General |
| **Licensing/adjudicative body** | Casino Control Commission (CCC), independent agency within Treasury |
| **Governing legislation** | Casino Control Act (N.J.S.A. 5:12-1 to 5:12-233) |
| **Key regulations** | NJAC 13:69 through 13:69P |
| **Sports wagering legislation** | Sports Wagering Act (N.J.S.A. 5:12A-1 to 5:12A-19) |
| **Internet gaming** | Authorized by P.L. 2013, c.27 (A2578) |
| **Established** | 1977 (Casino Control Act) |

### Two-body structure

New Jersey's regulatory framework uses a **two-body system** that separates investigation/enforcement from licensing/adjudication:

| Body | Role | Key functions |
|---|---|---|
| **DGE** (Division of Gaming Enforcement) | Investigates and enforces | Licensing investigations, compliance audits, enforcement actions, employee registration, internet gaming oversight, sports wagering oversight, self-exclusion administration |
| **CCC** (Casino Control Commission) | Licenses and adjudicates | Casino licensing decisions, penalty assessments, quasi-judicial hearings, appeals from DGE decisions |

### How the two bodies work

1. **DGE investigates** -- conducts background investigations, financial audits, compliance reviews, and tests all gaming equipment/platforms
2. **DGE reports** -- presents findings and recommendations to the CCC
3. **CCC decides** -- grants or denies licenses at public hearings, assesses penalties for regulatory violations
4. **DGE enforces** -- monitors ongoing compliance, investigates and prosecutes casino-related crimes

### Additional regulatory bodies

| Body | Scope |
|---|---|
| **New Jersey Racing Commission** | Horse racing and pari-mutuel wagering |
| **Division of State Lottery** | Lottery operations |
| **Legalized Games of Chance Commission** | Bingo regulations |

### Primary sources

| Document | URL | Relevance |
|---|---|---|
| Casino Control Act | [nj.gov/casinos/law/act/](https://www.nj.gov/casinos/law/act/) | Governs all casino gambling in NJ |
| NJAC 13:69G (Self-Exclusion) | [nj.gov -- Chapter 69G](https://www.nj.gov/oag/ge/docs/Regulations/CHAPTER69G.pdf) | Self-exclusion program rules |
| NJAC 13:69N (Sports Wagering) | [nj.gov -- Chapter 69N](https://www.nj.gov/oag/ge/docs/Regulations/CHAPTER69N.pdf) | Sports pool and online sports pool operations |
| NJAC 13:69O (Internet Gaming) | [law.cornell.edu -- 13:69O-1.2](https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-13-69O-1-2) | Internet and mobile gaming requirements |
| DGE Advertising Best Practices | [nj.gov -- Advertising Best Practices](https://www.nj.gov/oag/ge/docs/BestPractices/AdvertisingBestPractices.pdf) | Advertising standards for operators |

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 21+ (casino, internet gaming, sports wagering); 18+ (lottery, pari-mutuel) |
| **Legal framework** | State-licensed operators under Casino Control Act (N.J.S.A. 5:12) |
| **Online gambling** | Legal -- online casino, online poker, and online sports betting all authorized |
| **Land-based** | Legal -- 9 Atlantic City casinos |

### Permitted products

| Product | Legal status | Regulator | Notes |
|---|---|---|---|
| Casino (slots, table games) | Legal | DGE/CCC | 9 licensed casinos in Atlantic City |
| Sports betting (retail) | Legal | DGE/CCC | At casinos and licensed racetracks |
| Sports betting (online) | Legal | DGE/CCC | Operators limited to 3 branded sites each; servers must be in Atlantic City |
| Online casino / iGaming | Legal | DGE/CCC | Authorized since 2013 (P.L. 2013, c.27); operators need market access agreement with licensed casino/racetrack + CSIE license |
| Online poker | Legal | DGE/CCC | Part of iGaming framework; interstate compact eligible |
| Horse racing (pari-mutuel) | Legal | NJ Racing Commission | Fixed-odds and exchange betting also permitted |
| Lottery | Legal | Division of State Lottery | Separate from casino regulation |
| Bingo | Legal | Legalized Games of Chance Commission | Charitable gaming |
| Fantasy sports | Legal | DGE | N.J.S.A. 5:20-1 to 5:20-2 |

### Licensing model

| License type | Description |
|---|---|
| **Casino license** | Full casino operations in Atlantic City |
| **Casino Service Industry Enterprise (CSIE)** | Required for internet gaming operators; must partner with casino/racetrack licensee |
| **Sports wagering license** | Casino or racetrack sports pool operations |
| **Key employee** | Licensed through CCC |
| **Casino employee** | Registered through DGE |

### Key regulatory notes

- New Jersey was the **plaintiff state** in *Murphy v. NCAA* (2018), the Supreme Court case that struck down PASPA and opened sports betting nationwide
- Online gaming has been legal since **2013**, making NJ one of the earliest and most mature US online gambling markets
- All internet gaming and sports wagering servers must be **physically located in Atlantic City**
- Operators must use **geolocation** to confirm players are within New Jersey state boundaries
- {{PROGRAM_NAME}} content itself does not require a license, but the operator deploying it must be licensed

---

## Helpline

### Council on Compulsive Gambling of New Jersey (CCGNJ)

New Jersey has its own state-specific gambling helpline operated by the **Council on Compulsive Gambling of New Jersey (CCGNJ)**:

| Field | Value |
|---|---|
| **Primary number** | 1-800-GAMBLER (1-800-426-2537) |
| **Organization** | Council on Compulsive Gambling of New Jersey, Inc. |
| **Website** | [800gambler.org](https://800gambler.org) |
| **Office hours** | Monday--Friday, 9am--5pm |
| **Office address** | 100 Mulberry St, Newark, NJ 07102 |
| **Cost** | Free |
| **Social media** | Twitter: @ccgofnj; Instagram: @800gambler |

### NCPG national helpline

The NCPG national resources are also available to New Jersey residents:

| Field | Value |
|---|---|
| **Primary number** | 1-800-MY-RESET (1-800-697-3738) |
| **Legacy number** | 1-800-522-4700 |
| **Text support** | Text 800GAM |
| **Online chat** | www.ncpgambling.org/chat |
| **Hours** | 24/7/365 |

### Display rules

Under **NJAC 13:69O-1.2**, internet gaming operators must:

> Display prominently within the Internet or mobile gaming log on screen: "If you or someone you know has a gambling problem and wants help, call 1-800-Gambler."

A command to display this message must also be transmitted when the system detects a log off.

Additionally:
- Operators must display responsible gaming logos directing patrons to pages with links to the **Council on Compulsive Gambling of NJ** and other US organizations offering gambling problem assistance
- All advertising (print, billboard, sign, online, broadcast) must include the **1-800-GAMBLER** helpline in legible form
- DGE Advertising Best Practices prohibit "microscopic font" when publishing helpline information

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem and wants help, call 1-800-Gambler."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support -- anytime. For any question about gambling.
> **Call 1-800-GAMBLER** | **Visit 800gambler.org**
> *If you or someone you know has a gambling problem and wants help, call 1-800-Gambler.*

The on-brand version provides context and frames the helpline as available for any question (not only crisis), while preserving the verbatim mandatory message.

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Two messaging regimes

New Jersey has **two distinct messaging regimes** -- a prescriptive verbatim requirement for internet gaming and an obligation-based approach for much of land-based operations:

| Regime | Requirement | Source |
|---|---|---|
| **Internet gaming login/logout** | **Verbatim message prescribed** -- must be prominently displayed on login screen and transmitted on logout | NJAC 13:69O-1.2 |
| **Advertising** | Standard-based -- "Bet With Your Head, Not Over It" or comparable language + 1-800-GAMBLER | DGE Advertising Best Practices |
| **General casino signage** | Obligation-based -- responsible gambling information and helpline must be displayed, but no prescribed phrasing | DGE Guidance / Casino Control Act |

### Verbatim required statement (NJAC 13:69O-1.2)

Internet gaming operators must display the following message on login and logout screens:

> "If you or someone you know has a gambling problem and wants help, call 1-800-Gambler."

### Advertising required statement

All advertisements must include:

> "Bet With Your Head, Not Over It" (or comparable language)

Plus the 1-800-GAMBLER helpline displayed prominently and legibly.

### On-brand integration

For the verbatim internet gaming message, operators must display it word-for-word. Surrounding copy can use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "If you or someone you know has a gambling problem and wants help, call 1-800-Gambler."

**{{PROGRAM_NAME}} on-brand version:**
> Your tools, your pace. Set deposit limits, take breaks, or chat with us anytime.
> *If you or someone you know has a gambling problem and wants help, call 1-800-Gambler.*

For the advertising statement, operators have flexibility in how they integrate "Bet With Your Head, Not Over It":

**Generic:**
> "Bet With Your Head, Not Over It. Call 1-800-GAMBLER."

**{{PROGRAM_NAME}} on-brand:**
> Know the game. Set your limits. Play on your terms.
> **Bet With Your Head, Not Over It.** 1-800-GAMBLER | 800gambler.org

**Rules for on-brand integration:**
1. The verbatim login/logout message appears word-for-word -- never paraphrase
2. The advertising statement ("Bet With Your Head, Not Over It") appears as-is or with comparable language
3. 1-800-GAMBLER is never in microscopic font
4. Give all messaging visual dignity -- do not shrink to minimum size
5. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

### DGE Advertising Best Practices

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| Helpline display | 1-800-GAMBLER must be prominently displayed in all ads | All | DGE Best Practices |
| RG messaging | "Bet With Your Head, Not Over It" or comparable language | All | DGE Best Practices |
| No deceptive claims | Ads must be factual and not deceptive or misleading | All | DGE Best Practices |
| No "risk-free" claims | Cannot promise "guaranteed wins" or "risk-free" bets unless patron fully compensated for losses | All | DGE Best Practices |
| Under-21 targeting | Limit advertising in locations where it would entice under-21 audiences | All | DGE Best Practices |
| Opt-out rights | Patrons must be able to swiftly opt out of direct advertising | All | DGE Best Practices |
| Font size | Prohibit "microscopic font" for helpline information | All | DGE Best Practices |
| Terms clarity | Wagering requirements must be clear in terms and conditions | Online/Sports | DGE Best Practices |
| RG-only ads | Operators encouraged to devote some advertising entirely to responsible gaming | All | DGE Best Practices |
| No inducement to continue | Systems cannot induce a patron to continue wagering when play is in session, when patron attempts to end a session, or upon win/loss | Online | NJAC 13:69O-1.2 |

### Channel-specific rules

| Channel | Key restrictions | Verticals | Source |
|---|---|---|---|
| All print/billboard/sign | Must include "Bet With Your Head, Not Over It" and 1-800-GAMBLER legibly | All | DGE Best Practices |
| Broadcast (TV/radio) | Must include responsible gambling messaging and helpline | All | DGE Best Practices |
| Digital / online | Must include helpline and RG messaging; cannot induce continued play | Online/Sports | NJAC 13:69O-1.2 |
| Direct marketing | Patrons must have swift opt-out capability | All | DGE Best Practices |
| In-venue | "Bet With Your Head, Not Over It" and helpline on signage | Casino/Sports | DGE Best Practices |

### Prohibited content

- "Guaranteed wins" or "risk-free" bets (unless full compensation for losses)
- Deceptive or misleading claims
- Failure to maintain advertised offers
- Targeting under-21 audiences
- Microscopic font for helpline/RG information
- Inducing continued wagering on online platforms

### Required disclosures

**All advertising:**
1. "Bet With Your Head, Not Over It" (or comparable)
2. 1-800-GAMBLER helpline (prominent, legible)

**Online/sports promotions:**
3. Clear wagering requirements in terms and conditions

For detailed advertising rules, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

### Unified statewide program (NJAC 13:69G-2)

New Jersey operates a **statewide self-exclusion program** administered by the DGE that covers both land-based and internet verticals:

| Field | Value |
|---|---|
| **Program name** | Voluntary Self-Exclusion Program |
| **Duration options** | 1 year, 5 years, or lifetime |
| **Scope** | All Atlantic City casinos, racetrack sports wagering facilities, and all internet gaming/sports wagering platforms |
| **Enrollment -- land-based** | In-person at DGE offices (Atlantic City or Trenton) with valid photo ID; video conference enrollment also available |
| **Enrollment -- internet** | Online through gaming account using strong authentication (except lifetime, which requires in-person) |
| **Marketing cessation** | Casinos may share self-exclusion lists with registered third-party marketing companies solely to exclude names from marketing campaigns |
| **Winnings forfeiture** | Any money or thing of value seized from or owed to excluded person is subject to forfeiture |
| **Internet accounts** | Open wagers voided within 3 days; account balances of $1.00+ refunded within 90 days |
| **List updates** | Casinos must update self-exclusion lists within 5 business days; internet lists within 24 hours |
| **Confidentiality** | No casino employee shall disclose the name or information of any self-excluded person except to necessary personnel |
| **Reinstatement** | Submit removal request form to DGE with valid photo ID; revokes previous self-exclusion request |
| **Source** | NJAC 13:69G-2.1 through 2.5 |

### Two enrollment paths

| Path | Coverage | Duration options | Enrollment method |
|---|---|---|---|
| **Self-exclusion** (traditional) | All casinos, racetracks, and internet platforms | 1 year, 5 years, lifetime | In-person at DGE offices or via video conference |
| **Internet self-exclusion** | All internet gaming and sports wagering platforms | 1 year, 5 years, lifetime | Online through gaming account (except lifetime -- in-person required) |

### Required form contents (NJAC 13:69G-2.2)

- Legal name, aliases, date of birth, address, phone, SSN
- Physical description (for in-person: height, weight, gender, hair/eye color)
- Duration selection
- Waiver and release (absolves state and casinos from enforcement liability)
- Acknowledgment of voluntary nature and understanding of terms

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your account" | Voluntary Self-Exclusion | Never in Tier 1 |
| Tier 2 (formal) | "Self-exclusion" | Voluntary Self-Exclusion Program | Legal documents, formal enrollment |
| Staff training | Both | Voluntary Self-Exclusion Program | When explaining the program's official name |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: What is New Jersey's Voluntary Self-Exclusion Program?**
>
> New Jersey's Voluntary Self-Exclusion Program is a statewide program administered by the DGE. Players can exclude themselves for 1 year, 5 years, or a lifetime from all Atlantic City casinos, racetrack sports wagering facilities, and all internet gaming/sports wagering platforms. During exclusion, they cannot gamble at any licensed NJ venue or online platform, and any winnings are subject to forfeiture. Internet enrollment is available for 1-year and 5-year exclusions. If a player asks about it, explain the options and offer to help them get started. Use "take a break" in casual conversation, "self-exclusion" when referring to the specific program.

---

## Player protection -- land-based

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Problem gambling information posting | Yes | Responsible gambling signage at casino entrances, near ATMs, cashier cages, sportsbook lounges | DGE Guidance / Casino Control Act |
| Helpline display | Yes | 1-800-GAMBLER and "Bet With Your Head, Not Over It" on signage | DGE Best Practices |
| Self-exclusion program | Yes | Statewide VSE covering all casinos and racetracks | NJAC 13:69G-2 |
| Employee training | Yes | Training on recognizing problem gambling and referral procedures | DGE Guidance |
| Self-exclusion information | Yes | Must be made available to patrons who request it | NJAC 13:69G |

### {{PROGRAM_NAME}} tool messaging -- land-based

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Helpline signage | "Free, confidential support -- for any question about gambling. Call 1-800-GAMBLER." | DGE Best Practices |
| Self-exclusion info | "Need a break? New Jersey's self-exclusion program covers every casino, racetrack, and online platform in the state. Ask any staff member." | NJAC 13:69G |
| Entrance signage | "Know your game. Set your limits. Play on your terms. Bet With Your Head, Not Over It. 1-800-GAMBLER" | DGE Best Practices |

---

## Player protection -- interactive

### Required tools and obligations (NJAC 13:69O-1.2)

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Deposit limits | Yes | Daily, weekly, and monthly deposit limits | NJAC 13:69O-1.2 |
| Spend/loss limits | Yes | Daily, weekly, and monthly spend limits (max patron deposits put at risk) | NJAC 13:69O-1.2 |
| Time-based limits | Yes | Daily time limit (measured hourly from login to logoff); player permitted to complete current round/tournament if limit reached | NJAC 13:69O-1.2 |
| Account suspension | Yes | Minimum 72-hour account suspension option | NJAC 13:69O-1.2 |
| $2,500 deposit threshold | Yes | When lifetime deposits exceed $2,500, system must halt wagering until patron acknowledges threshold and is informed about responsible gaming limits/account closure | NJAC 13:69O-1.2 |
| Session time display | Yes | System must continuously display current server time and session duration, or provide pop-up notifications at least every 30 minutes | NJAC 13:69O-1.2 |
| Previous login display | Yes | System must display the date and time of the patron's previous login | NJAC 13:69O-1.2 |
| Inactivity timeout | Yes | After 15 minutes of inactivity, patrons must re-enter credentials | NJAC 13:69O-1.2 |
| RG message on login | Yes | Verbatim: "If you or someone you know has a gambling problem and wants help, call 1-800-Gambler" | NJAC 13:69O-1.2 |
| RG message on logout | Yes | Same message transmitted on logout detection | NJAC 13:69O-1.2 |
| Player protection page | Yes | Accessible during sessions; must include password recovery, complaint filing, account history access | NJAC 13:69O-1.2 |
| RG resource links | Yes | Links to CCGNJ and other US organizations offering gambling problem assistance | NJAC 13:69O-1.2 |
| Account statements | Yes | Terms must guarantee availability of account statements detailing patron account activity | NJAC 13:69O-1.2 |
| Self-exclusion (internet) | Yes | Online self-exclusion enrollment for 1-year and 5-year durations; covers all NJ internet gaming/sports platforms | NJAC 13:69G-2.2 |
| Single account | Yes | One account per patron per internet gaming intermediary; non-transferable | NJAC 13:69O-1.3 |
| No inducement to continue | Yes | Cannot induce continued wagering when play is in session, patron attempts to end session, or upon win/loss | NJAC 13:69O-1.2 |
| Geolocation | Yes | Must confirm player is physically within New Jersey | NJAC 13:69O-1.2 |

### {{PROGRAM_NAME}} tool messaging -- interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit -- daily, weekly, or monthly. Play on your terms. Takes 10 seconds." | NJAC 13:69O-1.2 |
| Spend/loss limits | "Set a spend limit -- no surprises at the end of a session." | NJAC 13:69O-1.2 |
| Session time limits | "Set a session reminder -- your dashboard, your rules." | NJAC 13:69O-1.2 |
| $2,500 threshold | "You've hit the $2,500 deposit milestone. Want to set a deposit limit or review your play history? Your call." | NJAC 13:69O-1.2 |
| Account suspension | "Need a break? Pause your account for at least 72 hours -- no questions asked." | NJAC 13:69O-1.2 |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 21+ (casino, internet gaming, sports wagering); 18+ (lottery, pari-mutuel) |
| **`_brand.yml` key** | `legal.minimum_gambling_age.united-states-new-jersey` |
| **`{{MIN_AGE}}` token value** | 21 |
| **Statutory basis** | N.J.S.A. 5:12-119 |

### Land-based verification

| Requirement | Details | Source |
|---|---|---|
| **Method** | Valid photo ID at casino entrance and gaming areas | N.J.S.A. 5:12-119 |
| **Enforcement** | Under-21 persons prohibited from gaming areas | Casino Control Act |
| **Penalties** | Underage gambling is a criminal offense | N.J.S.A. 5:12-119 |

### Interactive verification (NJAC 13:69O-1.3)

| Requirement | Details | Source |
|---|---|---|
| **Registration requirements** | Legal name, date of birth, SSN (last 4 acceptable), verified residential address, email, phone | NJAC 13:69O-1.3 |
| **Verification method** | Multi-source authentication using third-party and governmental databases as primary method | NJAC 13:69O-1.3 |
| **Secondary verification** | Security question verification (3 attempts within 5 min), phone number device association, credential examination, or DGE-approved alternative | NJAC 13:69O-1.3 |
| **Criminal penalty** | Facilitating underage gambling is a criminal offense resulting in prohibition from internet gaming | N.J.S.A. 5:12-119 |
| **PO Box prohibition** | Post office boxes not accepted as residential address | NJAC 13:69O-1.3 |

### Age messaging

All collateral in this jurisdiction must display `21+` age notice:

> "You must be 21+ to gamble."

---

## AML/KYC

| Requirement | Value |
|---|---|
| **AML authority** | FinCEN (federal); DGE (state enforcement) |
| **Applicable law** | Bank Secrecy Act (31 U.S.C. 5311 et seq.) |
| **Applicability** | Casinos with gross annual gaming revenue exceeding $1 million |
| **CTR threshold** | $10,000+ in currency transactions per gaming day |
| **SAR requirements** | File when employee suspects untoward activity; include cyber-related indicators for mobile/internet operations |
| **Written AML program** | Required: internal controls, employee training, independent testing, compliance officer, identity verification procedures, suspicious transaction detection |
| **Internet gaming** | iGaming managers must monitor for theft, embezzlement, collusion, money laundering, and report to DGE |
| **Record retention** | All deposits, withdrawals, credits, debits maintained per BSA requirements |
| **Tax reporting** | IRS Form W-2G for applicable winnings |

### Player-facing messaging

When AML/KYC processes affect players:

**Bare compliance:**
> "We are required by law to verify your identity."

**On-brand:**
> "Quick ID check -- keeps your account secure and is required for all players. Takes about 2 minutes."

---

## Collateral adaptation

| Category | Collateral | Verticals | Adaptation required | Token |
|---|---|---|---|---|
| **Digital** | Website | Both | Add 1-800-GAMBLER, "Bet With Your Head, Not Over It", CCGNJ link | `{{HELPLINE_NUMBER}}`, `{{RG_MESSAGE}}` |
| **Digital** | iGaming platform / app | Interactive | Verbatim login/logout message, deposit/spend/time limits, session display, $2,500 threshold, player protection page | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email templates | Both | 1-800-GAMBLER in footer, RG messaging | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media | Both | 1-800-GAMBLER and RG messaging in gambling-related posts | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | Both | 1-800-GAMBLER, self-exclusion info, 21+ age notice | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Print** | Rack card | Land-based | 1-800-GAMBLER, CCGNJ reference | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Land-based | 1-800-GAMBLER, "Bet With Your Head, Not Over It" | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | Both | 1-800-GAMBLER as primary; 800gambler.org | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Venue signage | Land-based | Entrance, ATM, cage, sportsbook: 1-800-GAMBLER + "Bet With Your Head, Not Over It" | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | Land-based | RG messaging rotation | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot | Both | 1-800-GAMBLER, "Bet With Your Head, Not Over It", 21+ | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Video/Audio** | Radio spot | Both | 1-800-GAMBLER, RG messaging | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Pre-roll | Interactive | 1-800-GAMBLER, RG messaging | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Conversation scripts | Both | CCGNJ referral info, self-exclusion program details, NJ-specific helpline | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Both | NJ self-exclusion Q&A, CCGNJ details | — |

---

## `_brand.yml` updates

Add these entries to your `_brand.yml`:

```yaml
# --- HELPLINES ---
helplines:
  united-states:
    new-jersey:
      number: "1-800-GAMBLER"
      number_numeric: "1-800-426-2537"
      website: "800gambler.org"
      label: "Council on Compulsive Gambling of New Jersey"
      hours: "Mon-Fri 9am-5pm (office); 24/7 via NCPG national"
      state_resource: "Council on Compulsive Gambling of New Jersey (CCGNJ)"
      state_website: "800gambler.org"
      notes: "NJ-specific helpline operated by CCGNJ. NCPG national resources (1-800-MY-RESET, text 800GAM, ncpgambling.org/chat) also available 24/7."

# --- LEGAL ---
legal:
  minimum_gambling_age:
    united-states-new-jersey: 21

# --- MESSAGING ---
messaging:
  mandatory:
    united-states-new-jersey-online: |
      If you or someone you know has a gambling problem
      and wants help, call 1-800-Gambler.
    united-states-new-jersey-advertising: |
      Bet With Your Head, Not Over It.
    # General casino signage: obligation-based (no verbatim requirement;
    #   must post RG info and helpline per DGE Guidance)
```

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in New Jersey.

### Regulatory
- [ ] Identified DGE and CCC as the two regulatory bodies
- [ ] Confirmed Casino Control Act and NJAC 13:69 et seq. as governing legislation
- [ ] Verified legal gambling age: 21+
- [ ] Reviewed permitted products table
- [ ] Checked for pending regulatory changes (proposed NJAC 13:69O-1.2A RG Lead rule)
- [ ] Identified deployment verticals: [ ] Land-based [ ] Interactive [ ] Both

### Messaging
- [ ] Verbatim login message displays word-for-word: "If you or someone you know has a gambling problem and wants help, call 1-800-Gambler"
- [ ] Same message transmitted on logout detection
- [ ] "Bet With Your Head, Not Over It" (or comparable) in all advertising
- [ ] 1-800-GAMBLER displayed prominently and legibly in all ads
- [ ] Helpline displayed per DGE requirements (login screen, advertising, signage)
- [ ] Age notice (21+) on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to New Jersey values

### Advertising
- [ ] No "guaranteed wins" or "risk-free" claims (unless full compensation for losses)
- [ ] No deceptive or misleading content
- [ ] No targeting under-21 audiences
- [ ] No microscopic font for helpline/RG information
- [ ] Wagering terms clear in terms and conditions
- [ ] Patrons can opt out of direct advertising
- [ ] Some advertising dedicated entirely to responsible gaming (encouraged)

### Self-exclusion
- [ ] Self-exclusion program integrated for land-based operations
- [ ] Internet self-exclusion enrollment available online (1-year and 5-year)
- [ ] Lifetime exclusion enrollment via in-person/video conference
- [ ] Self-excluded patrons removed from all marketing
- [ ] Exclusion list updated within 5 business days (land-based) / 24 hours (internet)
- [ ] Open wagers voided within 3 days for internet-excluded patrons
- [ ] Account balances refunded within 90 days
- [ ] Staff trained on self-exclusion enrollment and enforcement
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} tiers

### Player protection -- land-based
- [ ] Responsible gambling signage at entrances, ATMs, cages, sportsbook
- [ ] 1-800-GAMBLER displayed prominently
- [ ] "Bet With Your Head, Not Over It" on in-venue advertising
- [ ] Self-exclusion information available to patrons on request
- [ ] Employee training program implemented

### Player protection -- interactive
- [ ] Deposit limits (daily/weekly/monthly) implemented
- [ ] Spend/loss limits (daily/weekly/monthly) implemented
- [ ] Time-based limits (daily) implemented
- [ ] 72-hour minimum account suspension available
- [ ] $2,500 lifetime deposit threshold acknowledgment active
- [ ] Session duration continuously displayed or 30-minute pop-ups active
- [ ] Previous login date/time displayed
- [ ] 15-minute inactivity timeout enforced
- [ ] Player protection page accessible during sessions
- [ ] Account statements available per terms and conditions
- [ ] No inducement to continue wagering (in-session, on exit, on win/loss)
- [ ] Single account per patron enforced
- [ ] Geolocation confirming NJ location

### Age verification
- [ ] Land-based: age verification at casino entrance / gaming areas
- [ ] Interactive: multi-source authentication for registration
- [ ] Secondary verification method available

### Content
- [ ] All collateral adapted per collateral adaptation table
- [ ] Staff FAQ updated with NJ-specific Q&As
- [ ] Conversation scripts updated with CCGNJ referral info

### Governance
- [ ] `_brand.yml` updated with NJ values
- [ ] `Last verified` date set
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [Jurisdictions README](../../README.md) | [US Overview](../README.md) | [Advertising Rules](advertising-rules.md)*
