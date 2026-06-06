---
content_type: jurisdiction-module
title: "Arizona — Compliance Module"
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
verticals: [land-based, sports]
regulatory_approach: prescriptive
adaptation_status: base
adaptation_notes: |
  Arizona module is written for the US market (peer/individual/irreverent/
  blunt/open). On-brand messaging examples throughout need adaptation for
  non-US deployments. Currency is USD. Arizona runs a two-track regime:
  state-licensed event wagering (retail and mobile) under the Arizona
  Department of Gaming, and tribal land-based casinos under individual
  Class III tribal-state compacts. No online casino. Arizona has its own
  state helpline — 1-800-NEXT-STEP (1-800-639-8783) — operated by ADG's
  Division of Problem Gambling, separate from the NCPG national number.
  Self-exclusion (A.R.S. § 5-1320 / A.A.C. R19-4-150) offers 1/5/10-year
  terms and is irrevocable for the elected period.
last_updated: 2026-06-06
---

# Arizona — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Arizona. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. Arizona operates a **two-track** regime: state-licensed **event wagering** (retail and mobile) under the Arizona Department of Gaming (A.R.S. Title 5, Chapter 11; A.A.C. R19-4), and **tribal land-based casinos** under individual Class III **tribal-state compacts** (A.R.S. § 5-601). Online casino is **not** legal. Event wagering advertising has prescriptive content rules (A.A.C. R19-4-110), and self-exclusion is a statewide ADG program (A.R.S. § 5-1320; A.A.C. R19-4-150) with 1-, 5-, and 10-year terms.

> **Last verified**: 2026-06-06
> **Next review due**: 2026-09-06 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | ADG structure, tribal compacts, and key legislation |
| [Legal requirements](#legal-requirements) | 21+, permitted products, two-track licensing |
| [Helpline](#helpline) | 1-800-NEXT-STEP, display rules |
| [Messaging requirements](#messaging-requirements) | Event wagering ad messaging + tribal signage obligations |
| [Advertising restrictions](#advertising-restrictions) | Prescriptive event wagering ad rules (A.A.C. R19-4-110) |
| [Self-exclusion](#self-exclusion) | ADG statewide program — 1/5/10-year terms |
| [Player protection tools](#player-protection-tools) | Tribal land-based vs. event wagering |
| [Age verification](#age-verification) | 21+ requirements |
| [AML/KYC](#amlkyc) | FinCEN/BSA + tribal NIGC requirements |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Primary regulator** | Arizona Department of Gaming (ADG) |
| **Website** | [gaming.az.gov](https://gaming.az.gov/) |
| **Governing legislation** | A.R.S. Title 5, Chapter 11 (Event Wagering, §§ 5-1301 to 5-1321); A.R.S. Title 5, Chapter 10 (Fantasy Sports Betting, §§ 5-1201 et seq.); A.R.S. § 5-601 (Tribal-State Gaming Compacts) |
| **Regulations** | A.A.C. Title 19, Chapter 4 (Department of Gaming) — Article 1 (Event Wagering, R19-4-101 et seq.); Article 2 (Fantasy Sports) |
| **Established** | ADG created 1995; event wagering and fantasy sports authority added by Laws 2021, Ch. 234 (HB2772); both channels live 9 September 2021 |
| **Regulatory approach** | Prescriptive (event wagering); compact-based (tribal land-based) |

### Scope of authority

The ADG licenses, regulates, and oversees event wagering, fantasy sports, pari-mutuel racing, and unarmed combat sports, and serves as the state's regulatory partner for tribal gaming under the compacts. Key functions include:

| Function | Details |
|---|---|
| **Event wagering** | Licensing and oversight of event wagering operators (retail and mobile) since September 2021 (A.R.S. Title 5, Ch. 11) |
| **Fantasy sports** | Licensing of fantasy sports contest operators (A.A.C. R19-4 Article 2) |
| **Tribal gaming oversight** | State gaming agency duties under Class III tribal-state compacts (A.R.S. § 5-601); certification of tribal gaming employees and vendors |
| **Problem gambling** | ADG Division of Problem Gambling operates the statewide helpline and self-exclusion program (A.R.S. § 5-1320) |
| **Self-exclusion** | Statewide Voluntary Self-Exclusion list for event wagering and fantasy sports (A.A.C. R19-4-150) |

### Two-track structure

Arizona regulates land-based and event wagering through **separate legal instruments**. This is the single most important structural fact for an operator:

| Track | Who runs it | Legal instrument | What it covers |
|---|---|---|---|
| **Event wagering (retail + mobile)** | State-licensed event wagering operators, regulated by ADG | A.R.S. Title 5, Ch. 11; A.A.C. R19-4 Article 1 | Sportsbooks (online and in-person), including operators tethered to tribes and to professional sports franchises/venues |
| **Tribal land-based casino** | Individual Arizona tribes, under their own gaming commissions | Class III tribal-state compacts under A.R.S. § 5-601 and IGRA | Slots, table games, and other Class III gaming on tribal land |

Event wagering rules (A.A.C. R19-4) and tribal compact obligations are **different documents with different requirements**. Throughout this module, requirements are tagged to the track they apply to. Operators deploying in only one track can skip the other.

### Multi-agency landscape

| Agency | Role | Relevance to {{PROGRAM_NAME}} |
|---|---|---|
| **Arizona Department of Gaming (ADG)** | Regulates event wagering, fantasy sports, racing; state partner for tribal compacts | Primary regulator — event wagering compliance flows through ADG |
| **ADG Division of Problem Gambling** | Operates the statewide helpline and self-exclusion program | Owns 1-800-NEXT-STEP; receives forfeited self-exclusion winnings |
| **Individual tribal gaming commissions** | Regulate Class III gaming on each tribe's land | Land-based signage and RG obligations are set by each compact |
| **National Indian Gaming Commission (NIGC)** | Federal oversight of tribal gaming | Federal MICS and AML framework for tribal casinos |
| **Arizona Lottery** | Operates the state lottery (separate from ADG) | Limited relevance — lottery is outside ADG's gaming verticals |

### Primary sources

| Document | URL | Relevance |
|---|---|---|
| A.R.S. Title 5 (Amusements and Sports) | [azleg.gov/arsDetail/?title=5](https://www.azleg.gov/arsDetail/?title=5) | Contains Ch. 11 (Event Wagering), Ch. 10 (Fantasy Sports), and § 5-601 (Tribal Compacts) |
| A.R.S. § 5-1320 | [azleg.gov/ars/5/01320.htm](https://www.azleg.gov/ars/5/01320.htm) | Problem gambling; self-exclusion list; helpline display (subsection A) |
| A.R.S. § 5-1311 | [azleg.gov/ars/5/01311.htm](https://www.azleg.gov/ars/5/01311.htm) | License restrictions — prohibits wagering by persons under 21 |
| A.R.S. § 5-601 | [azleg.gov/ars/5/00601.htm](https://www.azleg.gov/ars/5/00601.htm) | Gambling on Indian reservations; tribal-state compacts (21+ requirement) |
| A.A.C. Title 19, Ch. 4 (rules) | [apps.azsos.gov/public_services/Title_19/19-04.pdf](https://apps.azsos.gov/public_services/Title_19/19-04.pdf) | Event Wagering and Fantasy Sports rules (R19-4 series) |
| ADG Tribal-State Compacts | [gaming.az.gov/tribal-gaming/tribal-state-compacts](https://gaming.az.gov/tribal-gaming/tribal-state-compacts) | The 2021 model compact and tribe-specific compacts |
| ADG Responsible Gaming | [gaming.az.gov/resources/responsible-gaming](https://gaming.az.gov/resources/responsible-gaming) | ADG responsible gaming program and operator resources |

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 21+ (event wagering, fantasy sports, and tribal Class III gaming) |
| **Legal framework** | State-licensed event wagering (A.R.S. Title 5, Ch. 11) + tribal Class III gaming under compacts (A.R.S. § 5-601) |
| **Online gambling** | Online/mobile **sports betting** legal (since September 2021); **online casino NOT legal** |
| **Lottery** | Arizona Lottery operates the state lottery (regulated separately from ADG) |

### Permitted products

| Product | Legal status | Regulator | Notes |
|---|---|---|---|
| Casino (slots, table games) | Legal (tribal only) | Individual tribal gaming commissions | Class III gaming on tribal land under compacts (A.R.S. § 5-601) |
| Sports betting (retail) | Legal | ADG | Event wagering at sportsbook locations tethered to tribes and pro sports venues |
| Sports betting (online/mobile) | Legal | ADG | Mobile event wagering via licensed operators (since September 2021) |
| Fantasy sports | Legal | ADG | Licensed fantasy sports contest operators (A.A.C. R19-4 Article 2) |
| Online casino | **Not legal** | — | Not authorized under current Arizona law |
| Online poker | **Not legal** | — | Not authorized |
| Lottery | Legal | Arizona Lottery | Draw and scratch games (separate from ADG) |
| Pari-mutuel racing | Legal | ADG (Racing) | Horse racing and simulcast |
| Charitable gaming | Legal (limited) | State/local | Bingo, raffles for qualified organizations |

### Arizona's gaming facilities

| Type | Operator | Examples |
|---|---|---|
| **Tribal casinos** | ~20+ Arizona tribes | Talking Stick Resort (Salt River Pima-Maricopa), Gila River casinos, Desert Diamond casinos (Tohono O'odham), Casino Arizona, Harrah's Ak-Chin |
| **Event wagering operators** | State-licensed | Operators are tethered to tribes or to Arizona professional sports franchises/venues under the 2021 law |

### Licensing model

Arizona uses a **dual licensing model**:

| License type | Track | Description |
|---|---|---|
| **Event wagering operator** | Event wagering | State license issued by ADG; allocation tethered to tribes and to Arizona pro sports franchises/venues |
| **Limited event wagering operator** | Event wagering | Retail-only operator inside a sports facility footprint |
| **Management services / mobile provider** | Event wagering | Third party operating the platform on an operator's behalf |
| **Fantasy sports contest operator** | Fantasy sports | ADG license for fantasy contests (A.A.C. R19-4 Article 2) |
| **Tribal gaming (Class III)** | Tribal land-based | Authorized by the tribe's Class III compact under A.R.S. § 5-601; the tribe's gaming commission licenses its facilities and staff |

---

## Helpline

### Arizona Problem Gambling Helpline

Arizona operates its own state problem gambling helpline through the ADG Division of Problem Gambling, separate from the NCPG national number:

| Field | Value |
|---|---|
| **Phone** | 1-800-NEXT-STEP (1-800-639-8783) |
| **Text** | Text "NEXTSTEP" to 53342 |
| **Chat** | [problemgambling.az.gov](https://problemgambling.az.gov/) |
| **Hours** | 24/7/365 |
| **Cost** | Free and confidential (sliding-scale fees may apply for treatment) |
| **Operated by** | Arizona Department of Gaming, Division of Problem Gambling |

### Additional Arizona resources

| Resource | Contact | Description |
|---|---|---|
| **ADG Division of Problem Gambling** | [problemgambling.az.gov](https://problemgambling.az.gov/) | State problem gambling program, treatment referrals, and self-exclusion |
| **ADG Self-Exclusion** | [gaming.az.gov/exclude](https://gaming.az.gov/exclude) | Statewide Voluntary Self-Exclusion enrollment |
| **NCPG national helpline** | 1-800-GAMBLER / 1-800-MY-RESET | Also widely used; national network |

### Display rules

Under **A.R.S. § 5-1320(A)**, every event wagering licensee must:

> Develop a procedure to inform players that help is available if a person has a problem with gambling and, at a minimum, provide the statewide toll-free helpline telephone number, text message and website information established by the department.

Under **A.A.C. R19-4-150(A)**, event wagering operators must:

> Post signage (English and Spanish) at all public entrances and exits of the retail wagering area, display help-availability messaging on each event wagering platform and/or kiosk, and include a responsible gaming message with the statewide helpline in all advertising.

For **tribal land-based casinos**, responsible gaming signage and helpline display are set by each tribe's compact — typically required at entrances, on the gaming floor, and at ATMs/cage.

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call 1-800-NEXT-STEP."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support -- 24/7. For any question about gambling.
> **Call 1-800-NEXT-STEP (1-800-639-8783)** | **Text NEXTSTEP to 53342** | **Chat at problemgambling.az.gov**

Both meet the A.R.S. § 5-1320(A) requirement. The second version provides multiple contact options, frames the helpline as available for any question (not only crisis), and includes text and chat alternatives.

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Arizona's messaging approach

Arizona uses prescriptive content requirements for event wagering advertising and obligation-based requirements for tribal venue signage:

| Regime | Requirement | Source |
|---|---|---|
| **Event wagering advertising** | Prescriptive -- every ad must carry a responsible gaming message and the statewide helpline; specific prohibitions apply | A.A.C. R19-4-110; R19-4-150(A) |
| **Event wagering platform** | Obligation-based -- help-availability messaging must be obvious and easily accessible on each platform/kiosk | A.A.C. R19-4-150(A); A.R.S. § 5-1320(A) |
| **Tribal venue signage** | Compact-based -- responsible gaming signage and helpline required, phrasing set by each compact | Tribal-State Compacts (A.R.S. § 5-601) |

### Messaging regime summary

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| Event wagering ads | Standard-based | Responsible gaming message + statewide helpline (1-800-NEXT-STEP) | A.A.C. R19-4-110; R19-4-150(A) |
| Event wagering platform/kiosk | Obligation-based | "Help is available" messaging + helpline, obvious and easily accessible | A.A.C. R19-4-150(A); A.R.S. § 5-1320(A) |
| Retail sportsbook signage | Standard-based | Signage (English + Spanish) at entrances/exits stating help is available | A.A.C. R19-4-150(A) |
| Tribal casino signage | Compact-based | Responsible gaming and helpline signage per the tribe's compact | A.R.S. § 5-601 |

### Verbatim required statements

Arizona does **not** prescribe a verbatim word-for-word message. The rules require that a responsible gaming message and the statewide helpline be included (standard-based), but the exact wording is left to the operator. The statute and rule require, at minimum, the statewide toll-free helpline number, text, and website "established by the department" (currently 1-800-NEXT-STEP / NEXTSTEP to 53342 / problemgambling.az.gov).

### Obligation-based requirements

| Obligation | What must be communicated | Where | Source |
|---|---|---|---|
| Responsible gaming message | A responsible gaming / problem gambling message | All event wagering advertising | A.A.C. R19-4-110; R19-4-150(A) |
| Helpline access | Statewide toll-free helpline number, text, and website | All event wagering ads and platforms/kiosks | A.R.S. § 5-1320(A); A.A.C. R19-4-150(A) |
| Help-availability notice | "Help is available if a person has a problem with gambling" | Event wagering platform/kiosk; retail entrances/exits (English + Spanish) | A.A.C. R19-4-150(A) |
| Responsible gaming signage | Responsible gaming and helpline signage | Tribal casino floor/entrances | Tribal-State Compacts (A.R.S. § 5-601) |

### On-brand integration

Because Arizona does not prescribe exact wording, operators have full flexibility to use {{PROGRAM_NAME}} messaging:

**Generic operator approach:**
> "Gambling problem? Call 1-800-NEXT-STEP."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-800-NEXT-STEP (1-800-639-8783)** | **Text NEXTSTEP to 53342** | problemgambling.az.gov

**Rules for on-brand integration:**
1. Include a responsible gaming message in all event wagering advertising
2. Include helpline access information (1-800-NEXT-STEP / NEXTSTEP to 53342 / problemgambling.az.gov)
3. Give all messaging visual dignity -- do not shrink to minimum size
4. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

### Arizona's prescriptive standard (event wagering)

Arizona's event wagering advertising rule (A.A.C. R19-4-110, "Responsible Advertising") sets specific content requirements and prohibitions for all event wagering advertising. It is more prescriptive than Nevada's principles-based approach.

| Field | Value |
|---|---|
| **Primary regulation** | A.A.C. R19-4-110 (Responsible Advertising); A.A.C. R19-4-150(A) (helpline in ads) |
| **Tribal advertising** | Governed by each tribe's compact and gaming commission |
| **Approach** | Prescriptive -- specific prohibitions and required disclosures |
| **Enforcement** | ADG monitors advertising and may impose conditions or penalties on operators |

### Required disclosures in event wagering advertising

All event wagering advertisements must:

| Requirement | Details | Source |
|---|---|---|
| **Responsible gaming message** | A responsible gaming / problem gambling message included | A.A.C. R19-4-110; R19-4-150(A) |
| **Helpline information** | Statewide toll-free crisis helpline (1-800-NEXT-STEP) on all ads — TV, radio, internet, print, billboards | A.A.C. R19-4-150(A); A.R.S. § 5-1320(A) |

### Prohibited content

Event wagering advertisements must NOT:

| Prohibition | Source |
|---|---|
| Target, or specifically appeal to, persons under 21 | A.A.C. R19-4-110 |
| Be misleading or contain false information | A.A.C. R19-4-110 |
| Promote irresponsible or excessive participation in event wagering | A.A.C. R19-4-110 |
| Suggest that social, financial, or personal success is guaranteed by engaging in event wagering | A.A.C. R19-4-110 |
| Appear at venues where the audience is primarily under 21 | A.A.C. R19-4-110 |
| Appear on merchandise designed primarily for minors | A.A.C. R19-4-110 |
| Be placed on college/university campuses or news platforms (except generally available broadcast/digital advertising) | A.A.C. R19-4-110 |
| Target persons on the ADG self-exclusion list | A.R.S. § 5-1320; A.A.C. R19-4-150 |

### Tribal advertising

Advertising for tribal land-based casinos is governed by each tribe's compact and its gaming commission, not by A.A.C. R19-4. Best practice mirrors the event wagering rule: include responsible gaming messaging and the helpline, and do not market to self-excluded or underage persons.

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

### ADG Voluntary Self-Exclusion — statewide program

Arizona operates a **statewide Voluntary Self-Exclusion program** through the ADG Division of Problem Gambling:

| Field | Value |
|---|---|
| **Program name** | ADG Voluntary Self-Exclusion |
| **Website** | [gaming.az.gov/exclude](https://gaming.az.gov/exclude) |
| **Administered by** | Arizona Department of Gaming, Division of Problem Gambling |
| **Duration options** | 1 year, 5 years, or 10 years (no lifetime tier) |
| **Scope** | A person may self-exclude from **either** all Arizona tribal gaming facilities **or** event wagering and fantasy sports (EWFS); the EWFS list applies to all state-licensed event wagering operators statewide |
| **Enrollment methods** | Online via gaming.az.gov/exclude; operators must advise inquirers and provide ADG application forms on request |
| **Identity verification** | Required at enrollment (ADG compiles name, aliases, photograph, identifying information) |
| **Reinstatement** | Self-exclusion is **irrevocable for the elected period** — it does not end early; removal occurs per ADG procedures after the term expires |
| **Source** | A.R.S. § 5-1320; A.A.C. R19-4-150 |

> **Scope note:** Arizona's self-exclusion is structured as **two lists** — tribal gaming facilities, and event wagering/fantasy sports — reflecting the two-track regime. A player chooses which to enroll in. This differs from a single unified list (such as Ohio's Time Out Ohio). Confirm a player's intended scope when assisting enrollment.

### Consequences of violation

If a self-excluded person participates in event wagering:

| Consequence | Details |
|---|---|
| **Winnings forfeited** | Any prize or award won by a person on the self-exclusion list is forfeited |
| **Forfeited funds** | Donated by the operator to the ADG Division of Problem Gambling on a quarterly basis |
| **Account revoked** | Operators must revoke the player account and remove the person from all mailing lists |
| **Reporting** | Operators must report participation by a self-excluded person to ADG (name, date, value forfeited, action taken) |

### Event wagering operator responsibilities (A.R.S. § 5-1320; A.A.C. R19-4-150)

| Obligation | Details | Timeline |
|---|---|---|
| **Check the list** | Check the most recent ADG self-excluded persons list before creating a player account | Before account creation |
| **Deny access** | Take commercially reasonable steps to ensure self-excluded persons are denied access to all event wagering | Ongoing |
| **Revoke and de-market** | Revoke the player account and remove the person from all mailing lists | On identifying a self-excluded person |
| **No payouts** | Do not pay any prize or award to a person on the self-exclusion list; forfeit and donate winnings | Ongoing |
| **Advise inquirers** | Establish procedures to advise persons who inquire about self-exclusion and provide ADG forms | On request |
| **Confidentiality** | The ADG self-excluded persons list is not open to public inspection | Ongoing |

> **Tribal track:** Tribal casinos maintain their own self-exclusion programs under their compacts and gaming commissions; a tribal self-exclusion is separate from the ADG list.

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your play" | "Voluntary Self-Exclusion" | Never in Tier 1 -- use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" | "ADG Voluntary Self-Exclusion" | Legal documents, formal enrollment, support referrals |
| Website/app | "Need a break from gambling?" | "Voluntary Self-Exclusion" | On the self-exclusion information page itself |
| Print/signage | "Need a break from gambling?" | "Voluntary Self-Exclusion" | Venue self-exclusion information areas |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: What is Arizona's self-exclusion program?**
>
> Arizona's Voluntary Self-Exclusion is run by the Arizona Department of Gaming (ADG) Division of Problem Gambling. Players can self-exclude for 1 year, 5 years, or 10 years. There are two lists — one for tribal gaming facilities and one for event wagering and fantasy sports — so ask which the player wants. Once enrolled, exclusion cannot be lifted before the term ends. Enrollment is at gaming.az.gov/exclude. If a player asks, explain the options and offer to help them get started. Use "take a break" in casual conversation, "Voluntary Self-Exclusion" when referring to the specific program.

---

## Player protection tools

> **Skip note:** Arizona's player-protection requirements differ sharply by track. Skip the track you are not deploying in.

### Tribal land-based gaming (Class III compacts — A.R.S. § 5-601)

Tribal land-based player-protection requirements are set by each tribe's compact and gaming commission, not by A.A.C. R19-4:

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Responsible gaming signage** | Yes | Tribal-State Compacts | Signage and helpline at entrances, gaming floor, and ATMs/cage (set by compact) |
| **Helpline display** | Yes | Tribal-State Compacts | 1-800-NEXT-STEP commonly displayed throughout the facility |
| **Self-exclusion** | Yes | Tribal compact / gaming commission | Tribal program, separate from the ADG list |
| **Employee awareness** | Yes (per compact) | Tribal-State Compacts | Tribes run their own responsible gaming training under compact obligations |
| **Deposit/session limits** | N/A | — | Not applicable for walk-in cash play |

### Event wagering (A.R.S. Title 5, Ch. 11; A.A.C. R19-4)

Event wagering player-protection requirements are set by statute and ADG rule:

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Helpline / RG messaging on platform** | Yes | A.R.S. § 5-1320(A); A.A.C. R19-4-150(A) | "Help is available" messaging + helpline obvious and easily accessible on each platform/kiosk |
| **Self-exclusion** | Yes | A.R.S. § 5-1320; A.A.C. R19-4-150 | Statewide EWFS list — check before account creation; revoke and de-market on a hit |
| **Identity / age verification** | Yes | A.A.C. R19-4-133 (Player Account Creation) | Age and identity verified before account use; one account per patron |
| **Account maintenance / withdrawals** | Yes | A.A.C. R19-4-135 (Player Account Maintenance) | Withdrawal requests honored within set timeframe; dormant account handling |
| **Self-imposed limits (deposit/wager/time)** | Offered (platform RG feature) | A.A.C. R19-4 (RG framework); operator practice | Arizona operators offer player-set deposit, wager, and time limits as a platform responsible gaming feature; Arizona rule does not prescribe a specific cool-off period — verify the operator's configuration |
| **Activity history** | Yes | A.A.C. R19-4-152 (Retention of Records) | Account records (deposits, withdrawals, wagers, settled wagers) retained at least 5 years |
| **Prohibited-person blocking** | Yes | A.R.S. § 5-1311; A.A.C. R19-4-133 | Prevent under-21 and prohibited persons from creating accounts or wagering |

> **Verify:** Arizona's event wagering rules (R19-4-133 Player Account Creation, R19-4-135 Player Account Maintenance, R19-4-150 Self-Exclusion and Responsible Gaming) require identity/age verification, account controls, and helpline display, but do **not** prescribe player-set deposit/wager/time limits or a fixed cool-off period the way Ohio (OAC 3775-16-03) or Ontario do. Operators offer self-imposed limits as a platform feature. Confirm each operator's actual limit configuration with compliance counsel before relying on it.

### {{PROGRAM_NAME}} tool messaging for Arizona

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit -- play on your terms. Takes 10 seconds." | Event wagering (platform RG feature) |
| Wager limits | "Set a wager limit -- no surprises at the end of a session." | Event wagering (platform RG feature) |
| Session limits | "Set a session reminder -- your dashboard, your rules." | Event wagering (platform RG feature) |
| Self-exclusion | "Need a break from gambling? Arizona's Voluntary Self-Exclusion covers event wagering statewide -- 1, 5, or 10 years." | Both (A.R.S. § 5-1320) |
| Activity history | "See every bet, deposit, and withdrawal -- your full history, on demand." | Event wagering (A.A.C. R19-4-152) |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 21+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.united-states-arizona` |
| **`{{MIN_AGE}}` token value** | 21 |
| **Verification (tribal casino)** | Government-issued photo ID at point of entry/cage (per compact) |
| **Verification (event wagering)** | Age and identity verified before account use, via government-issued ID and/or multi-source authentication (A.A.C. R19-4-133) |
| **Verification (fantasy sports)** | Age and identity verified before account use (A.A.C. R19-4 Article 2); 21+ |
| **Products with different ages** | None -- 21+ applies to all regulated gambling in Arizona |
| **Statutory basis** | A.R.S. § 5-1311 (event wagering); A.R.S. § 5-601(B) (tribal compacts) |

### Event wagering account registration (A.A.C. R19-4-133)

Event wagering operators must verify patron identity and age through:

| Step | Requirement | Source |
|---|---|---|
| **Identity verification** | Verify age and identity before the patron may use a player account | A.A.C. R19-4-133 |
| **Single account** | Prohibit a patron from having more than one player account/username | A.A.C. R19-4-133 |
| **Age threshold** | Wagering by persons under 21 is prohibited | A.R.S. § 5-1311 |
| **Prohibited persons** | Prevent prohibited persons from creating accounts or wagering | A.R.S. § 5-1311; A.A.C. R19-4-133 |

### Age messaging

All collateral in Arizona must display the `21+` age notice:

> "You must be 21+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `21+` for all Arizona-deployed content.

---

## AML/KYC

### FinCEN/BSA and tribal NIGC requirements

Arizona's two tracks sit under different federal AML frameworks:

| Track | Framework | Notes |
|---|---|---|
| **Event wagering operators** | Bank Secrecy Act (BSA) / FinCEN | Operators handling cash above thresholds comply with FinCEN reporting and KYC |
| **Tribal casinos** | BSA/FinCEN + NIGC MICS | Tribal casinos are financial institutions under the BSA and follow NIGC Minimum Internal Control Standards |

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Currency Transaction Report (CTR)** | $10,000+ (single or aggregate in 24 hours) | Player must provide ID; transaction reported to FinCEN |
| **Suspicious Activity Report (SAR)** | $5,000+ (suspicious transactions) | No direct player notification -- internal reporting |
| **Player identification (casino)** | $10,000+ cash transactions | Government-issued photo ID required |
| **Player identification (event wagering)** | All accounts | Full identity verification per A.A.C. R19-4-133 |
| **BSA compliance program** | All operators/casinos | Internal controls, independent testing, staff training, compliance officer |

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "Federal law requires us to verify your identity for transactions of $10,000 or more."

**On-brand:**
> "Quick ID check -- it keeps your account secure and is required by federal law. If we ask about a large transaction, it's a standard process that applies to everyone at every casino and sportsbook in the US."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Arizona-specific adaptations. Each row is tagged with its applicable track.

| Category | Collateral | Arizona adaptation | Track | Token/Value |
|---|---|---|---|---|
| **Digital** | Website footer | Arizona helpline: 1-800-NEXT-STEP + on-brand RG message | Event wagering | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Set to 21+ | Both | `{{MIN_AGE}}` = 21 |
| **Digital** | Event wagering platform/kiosk | "Help is available" messaging + helpline, obvious and accessible | Event wagering | A.A.C. R19-4-150(A) |
| **Digital** | Self-exclusion page | Link to ADG self-exclusion (gaming.az.gov/exclude); explain two lists and 1/5/10-year terms | Both | -- |
| **Digital** | Deposit screen | Helpline + on-brand message; deposit limit option prominently displayed | Event wagering | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media bio | Include 1-800-NEXT-STEP | Event wagering | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email footer | Helpline + on-brand RG message in every email | Event wagering | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | Arizona helpline (1-800-NEXT-STEP), 21+ notice, self-exclusion reference | Both | All tokens |
| **Print** | Rack card | Helpline, on-brand message | Both | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Helpline + on-brand message | Tribal | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | 1-800-NEXT-STEP, text NEXTSTEP to 53342, problemgambling.az.gov | Both | All helpline tokens |
| **Environmental** | Tribal casino floor | Responsible gaming + helpline signage per compact | Tribal | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Retail sportsbook | Signage (English + Spanish) at entrances/exits: help is available | Event wagering | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | On-brand RG message in rotation, helpline | Both | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot end card | Helpline + responsible gaming message | Event wagering | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Spoken helpline reference + responsible gaming message | Event wagering | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | Arizona helpline in all referral scripts; self-exclusion enrollment in scripts | Both | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Add self-exclusion Q&A; update helpline to Arizona number | Both | -- |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Arizona:

```yaml
# --- HELPLINES ---
helplines:
  united-states:
    arizona:
      number: "1-800-NEXT-STEP"
      number_numeric: "1-800-639-8783"
      text_number: "Text NEXTSTEP to 53342"
      chat_url: "problemgambling.az.gov"
      website: "problemgambling.az.gov"
      label: "Arizona Problem Gambling Helpline"
      hours: "24/7"
      cost: "Free"
      state_resource: "ADG Division of Problem Gambling"
      state_website: "problemgambling.az.gov"
      vse: "ADG Voluntary Self-Exclusion — gaming.az.gov/exclude"
      notes: "Arizona operates its own state helpline (1-800-NEXT-STEP) via the ADG Division of Problem Gambling, separate from the NCPG national number. NCPG national numbers (1-800-GAMBLER, 1-800-MY-RESET) also widely used. Helpline display required in all event wagering ads and on platforms/kiosks per A.R.S. § 5-1320(A) and A.A.C. R19-4-150(A)."

# --- LEGAL ---
legal:
  minimum_gambling_age:
    united-states-arizona: 21

# --- MANDATORY MESSAGING ---
messaging:
  mandatory:
    # arizona-general: (none — no verbatim requirement; A.A.C. R19-4-150(A) and
    #   A.R.S. § 5-1320(A) require a responsible gaming message plus the statewide
    #   helpline (1-800-NEXT-STEP) in event wagering ads and on platforms/kiosks,
    #   but do not prescribe exact wording. Tribal venue signage is set by compact.)
    # arizona-event-wagering-ads: Standard-based — must include a responsible gaming
    #   message and the statewide crisis helpline per A.A.C. R19-4-110 and R19-4-150(A);
    #   exact text is not prescribed.
```

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Arizona.

### Regulatory
- [ ] Identified ADG as primary regulator and current legislation (A.R.S. Title 5, Ch. 11; § 5-601; A.A.C. R19-4)
- [ ] Confirmed license requirements and status (event wagering operator and/or tribal track)
- [ ] Verified legal gambling age: 21+
- [ ] Reviewed permitted products table (tribal land-based casino; event wagering retail + mobile; fantasy sports; no online casino)
- [ ] Confirmed online casino is not legal (do not deploy online casino content)
- [ ] Identified deployment tracks: [ ] Tribal land-based [ ] Event wagering [ ] Both

### Messaging
- [ ] Responsible gaming message included in all event wagering advertising
- [ ] Statewide helpline (1-800-NEXT-STEP) displayed in ads and on platforms/kiosks per A.R.S. § 5-1320(A) and A.A.C. R19-4-150(A)
- [ ] Retail sportsbook signage (English + Spanish) at entrances/exits
- [ ] Age notice (21+) on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Arizona values

### Advertising
- [ ] Event wagering advertising reviewed against A.A.C. R19-4-110
- [ ] Responsible gaming message and helpline in all event wagering ads
- [ ] No targeting of under-21, no misleading content, no guaranteed-success claims
- [ ] No promotion of irresponsible or excessive play
- [ ] No advertising at primarily-under-21 venues, on minors' merchandise, or on college campuses (beyond general broadcast/digital)
- [ ] No marketing to persons on the ADG self-exclusion list
- [ ] Tribal advertising reviewed against the applicable compact

### Self-exclusion
- [ ] ADG Voluntary Self-Exclusion information available on platforms and at venues
- [ ] Self-excluded persons list checked before account creation
- [ ] Self-excluded persons denied access; accounts revoked and removed from mailing lists
- [ ] No payouts to self-excluded persons; winnings forfeited and donated to ADG quarterly
- [ ] Participation by self-excluded persons reported to ADG
- [ ] Staff trained to advise on self-exclusion and provide ADG forms
- [ ] Tribal track: tribal self-exclusion program addressed under the compact

### Player protection -- tribal land-based
*Check only if deploying in tribal venues.*
- [ ] Responsible gaming and helpline signage per the tribe's compact
- [ ] Tribal self-exclusion program in place
- [ ] Employee responsible gaming awareness per compact obligations

### Player protection -- event wagering
*Check only if deploying on event wagering platforms.*
- [ ] Identity and age verification before account use (A.A.C. R19-4-133)
- [ ] One account per patron enforced
- [ ] Account maintenance and withdrawals per A.A.C. R19-4-135
- [ ] Self-imposed deposit/wager/time limits offered as platform features (configuration verified)
- [ ] Account records retained at least 5 years (A.A.C. R19-4-152)
- [ ] Prohibited-person and under-21 blocking implemented (A.R.S. § 5-1311)

### Age verification
- [ ] Tribal: age verification at casino entry/cage
- [ ] Event wagering: identity/age verification per A.A.C. R19-4-133

### Content
- [ ] All collateral adapted per collateral adaptation table (tagged by track)
- [ ] Staff FAQ updated with Arizona self-exclusion Q&A
- [ ] Conversation scripts updated with Arizona helpline

### Governance
- [ ] `_brand.yml` updated with Arizona values (helpline, legal age)
- [ ] `Last verified` date set
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [US Overview](../README.md) | [Jurisdictions README](../../README.md)*
