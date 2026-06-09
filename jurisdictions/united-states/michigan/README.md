---
content_type: jurisdiction-module
title: "Michigan — Compliance Module"
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
game_type: [slots, blackjack, roulette, sports-betting, poker, online-casino]
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
  Michigan module is written for the US market (peer/individual/irreverent/
  blunt/open). On-brand messaging examples throughout need adaptation
  for non-US deployments. Currency is USD. Michigan has a voluntary
  self-exclusion program for Detroit commercial casinos (Disassociated Persons
  List, MGCB-administered) and a separate voluntary online self-exclusion
  program for internet gaming and sports betting — voluntary placement in the
  Responsible Gaming Database (RGD) for a player-selected 1-year or 5-year term
  (R 432.672 iGaming / R 432.772 sports betting; MCL 432.312; MGCB form AD-2067,
  the "Responsible Gaming Database Application"). The RGD is the single statewide
  database established by R 432.671 / R 432.771; it holds both these voluntary
  1/5-year placements and involuntary prohibited persons (felony/court-ordered,
  permanent unless removed by the executive director).
  Tribal casinos operate under separate tribal-state compacts. Three governing
  statutes cover land-based casino, internet gaming, and sports betting.
  Helpline transitioned to 1-800-GAMBLER as statewide primary in February 2024;
  the rule text prescribing helpline wording was amended by the 2025 MR 9
  rulemaking (effective 4/29/2025, amending R 432.654 & R 432.754). Detailed
  advertising standards are documented in advertising-rules.md.
last_updated: 2026-06-08
---

# Michigan — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Michigan. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. Michigan uses a **hybrid** regulatory approach with **three separate governing statutes** covering land-based casino, internet gaming, and sports betting. Michigan has two **voluntary** self-exclusion programs — the Disassociated Persons List (DPL) for Detroit commercial casinos and the online program for internet gaming and sports betting. The online program is **voluntary placement in the Responsible Gaming Database (RGD)** for a player-selected 1-year or 5-year term (R 432.672 iGaming / R 432.772 sports betting; MCL 432.312; MGCB form AD-2067, the "Responsible Gaming Database Application"). The RGD — the single statewide database established by R 432.671 / R 432.771 — holds **both** these voluntary placements **and** involuntary prohibited persons (felony-convicted, court-ordered, and otherwise barred; permanent unless removed by the executive director). Voluntary self-excluders and involuntary prohibited persons are different populations within the same database, so distinguish them in player-facing copy. Tribal casinos operate under separate tribal-state compacts and are not directly regulated by the MGCB. Detailed advertising standards are in the companion [advertising rules](advertising-rules.md) reference.
>
> **Verticals covered**: Land-based Casino (3 Detroit commercial + 24 tribal), Online Casino/iGaming, Sports Betting (retail + mobile)
> *(If your deployment only covers one vertical, sections marked with another vertical's tag can be skipped.)*

> **Last verified**: 2026-06-08
> **Next review due**: 2026-09-08 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Verticals | Description |
|---|---|---|
| [Regulatory authority](#regulatory-authority) | All | MGCB structure, governing legislation, tribal compacts |
| [Legal requirements](#legal-requirements) | All | 21+, permitted products, three-statute framework |
| [Helpline](#helpline) | All | 1-800-GAMBLER (statewide primary), legacy MDHHS line, MGCB RG Section |
| [Messaging requirements](#messaging-requirements) | All | Obligation-based (land-based) + standard-based (interactive) |
| [Advertising restrictions](#advertising-restrictions) | All | Statutory and rule-based requirements |
| [Self-exclusion — Disassociated Persons List](#self-exclusion--disassociated-persons-list) | Land-based | Voluntary DPL for Detroit commercial casinos (lifetime with 5-year removal option) |
| [Self-exclusion — online program (RGD)](#self-exclusion--online-self-exclusion-program-rgd) | Interactive | Voluntary placement in the Responsible Gaming Database for iGaming/sports betting (1-year or 5-year; R 432.672 / R 432.772; MCL 432.312, form AD-2067) |
| [Responsible Gaming Database — prohibited persons](#responsible-gaming-database--prohibited-persons) | Interactive | The same statewide RGD (R 432.671 / R 432.771) also holds involuntary prohibited persons; permanent unless removed by the executive director |
| [Player protection — land-based](#player-protection--land-based) | Land-based | Detroit casino requirements |
| [Player protection — interactive](#player-protection--interactive) | Interactive | Statutory deposit/wagering/time limits, account controls |
| [Age verification](#age-verification) | All | 21+ for all gambling |
| [AML/KYC](#amlkyc) | All | FinCEN/BSA + state-level identity verification |
| [Collateral adaptation](#collateral-adaptation) | All | What to change across all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | All | Config values to add |
| [Compliance checklist](#compliance-checklist) | All | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Primary regulator** | Michigan Gaming Control Board (MGCB) |
| **Website** | michigan.gov/mgcb |
| **Governing legislation** | Michigan Gaming Control and Revenue Act (Initiated Law 1 of 1996); Lawful Internet Gaming Act (PA 152 of 2019); Lawful Sports Betting Act (PA 149 of 2019); Compulsive Gaming Prevention Act (PA 70 of 1997) |
| **Administrative rules** | Internet Gaming Rules (R 432.611-676); Internet Sports Betting Rules (R 432.711-776) |
| **Established** | 1997 (following voter approval of Proposal E in November 1996) |
| **Regulatory approach** | Hybrid *(obligation-based for land-based signage; standard-based for interactive responsible gaming pages)* |

### Three-statute framework

Michigan regulates gambling through **three separate statutes**, each with its own body of administrative rules:

| Statute | Scope | Key provisions |
|---|---|---|
| **Michigan Gaming Control and Revenue Act** (Initiated Law 1 of 1996) | Detroit commercial casinos | Licensing, regulation, and control of three commercial casinos; Disassociated Persons List; revenue distribution |
| **Lawful Internet Gaming Act** (PA 152 of 2019, MCL 432.301-322) | Online casino/iGaming | Internet gaming operator licensing, responsible gaming database, player protection tools (MCL 432.312), internet gaming fund |
| **Lawful Sports Betting Act** (PA 149 of 2019, MCL 432.401-419) | Retail and mobile sports betting | Sports betting operator licensing, age/geolocation verification, internet sports betting fund |

A fourth statute — the **Compulsive Gaming Prevention Act** (PA 70 of 1997, MCL 432.251-256) — creates the Compulsive Gaming Prevention Fund and directs resources toward treatment, prevention, education, and research for pathological gambling. The MGCB contributes $6 million annually to this fund (as of FY2025).

### MGCB scope and authority

| Function | Details |
|---|---|
| **Detroit commercial casinos** | Full licensing and regulatory authority over three casinos |
| **Online gaming and sports betting** | Licenses and regulates operators, platform providers, and suppliers |
| **Tribal casino compacts** | Audits compliance with tribal-state compact provisions (does not have direct regulatory authority over tribal casinos) |
| **Pari-mutuel horse racing** | Regulatory authority |
| **Casino-style charitable gaming** | Regulatory authority |
| **Responsible gaming** | Administers the voluntary Disassociated Persons List (land-based) and the online program — voluntary placement in the Responsible Gaming Database (iGaming/sports betting; R 432.672 / R 432.772); maintains that same Responsible Gaming Database (R 432.671 / R 432.771), which also holds involuntary prohibited persons; funds "Don't Regret the Bet" campaign |

### Tribal gaming

Michigan has **12 federally recognized tribes** operating **24 Class III tribal casinos** throughout the state under tribal-state compacts signed in 1993, 1998, and 2007.

| Detail | Value |
|---|---|
| **Number of tribes** | 12 |
| **Number of tribal casinos** | 24 |
| **Regulatory authority** | Each tribe's gaming commission (not MGCB) |
| **Federal oversight** | National Indian Gaming Commission (NIGC) under IGRA |
| **MGCB role** | Compact compliance auditing only |
| **Revenue sharing** | Distribution payments to local government units and schools |

Tribal casinos are regulated by their own tribal gaming commissions under the Indian Gaming Regulatory Act (IGRA). The MGCB audits compliance with compact provisions but does not directly regulate tribal operations. {{PROGRAM_NAME}} deployments at tribal casinos must comply with the applicable tribal gaming ordinance and compact terms in addition to this module.

### Primary sources

| Document | URL | Relevance |
|---|---|---|
| Michigan Gaming Control and Revenue Act | [michigan.gov — PA 69](https://www.michigan.gov/-/media/Project/Websites/mgcb/Detroit-Casinos/ActandRules/PA69.pdf) | Governs Detroit commercial casinos |
| Lawful Internet Gaming Act (PA 152 of 2019) | [michigan.gov — PA 152](https://www.michigan.gov/-/media/Project/Websites/mgcb/Internet-Gaming-and-Fantasy-Contests/ActsandRules/Lawful_Internet_Gaming_Act_PA_152_of_2019.pdf) | Governs online casino/iGaming |
| Lawful Sports Betting Act (PA 149 of 2019) | [michigan.gov — PA 149](https://www.michigan.gov/-/media/Project/Websites/mgcb/Internet-Gaming-and-Fantasy-Contests/ActsandRules/Lawful_Sports_Betting_Act_PA_149_of_2019.pdf) | Governs sports betting |
| Internet Gaming Rules (R 432.611-676) | [michigan.gov — Internet Gaming Rules](https://www.michigan.gov/-/media/Project/Websites/mgcb/Internet-Gaming-and-Fantasy-Contests/ActsandRules/Internet_Gaming_Rules_2020-8-26.pdf) *(verify before merge — gov PDF host bot-blocks automated checks)* | Administrative rules for internet gaming |
| Internet Sports Betting Rules (R 432.711-776) | [law.cornell.edu — Internet Sports Betting rule index](https://www.law.cornell.edu/regulations/michigan/department-treasury/michigan-gaming-control-board/internet-sports-betting) | Administrative rules for internet sports betting |
| R 432.654 — Internet gaming responsible gaming (RG logo + RG page) | [law.cornell.edu — R 432.654](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-654) | Interactive RG logo, RG page, helpline message (iGaming) |
| R 432.754 — Internet sports betting responsible gaming (RG logo + RG page) | [law.cornell.edu — R 432.754](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-754) | Interactive RG logo, RG page, helpline message (sports betting) |
| R 432.671 / R 432.771 — Establishment and maintenance of the Responsible Gaming Database | [law.cornell.edu — R 432.671](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-671) · [R 432.771](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-771) | Establishes the single statewide database that holds both voluntary placements (R 432.672 / R 432.772) and involuntary prohibited persons |
| R 432.672 / R 432.772 — Voluntary placement in the Responsible Gaming Database | [law.cornell.edu — R 432.672](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-672) · [R 432.772](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-772) | Player-selected 1-year or 5-year voluntary self-exclusion (the online program); governs the voluntary act |
| R 432.676 — Internet gaming prohibited-person duties | [law.cornell.edu — R 432.676](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-676) | Duty to block, cancel wager, notify executive director (iGaming) |
| R 432.776 — Internet sports betting prohibited-person duties | [law.cornell.edu — R 432.776](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-776) | Duty to block, cancel wager, notify executive director (sports betting) |
| R 432.649 — Tournaments/contests and bonus and promotional wagering (iGaming) | [law.cornell.edu — R 432.649](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-649) | iGaming promotions/bonuses (title does **not** include advertising or loyalty programs) |
| R 432.749 — Tournaments/contests, bonus and promotional wagering, advertising, and player loyalty programs (sports betting) | [law.cornell.edu — R 432.749](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-749) | Sports betting promotions/bonuses, plus advertising and loyalty programs (broader titled scope than R 432.649) |
| 2025 MR 9 rulemaking (eff. 4/29/2025, amending R 432.654 & R 432.754) | [michigan.gov — MGCB online gaming/sports betting rule revisions](https://www.michigan.gov/mgcb) *(verify before merge — gov PDF host bot-blocks automated checks)* | Helpline-wording amendment; advertising tightening (under-21/self-excluded) |
| MCL 432.312 | [legislature.mi.gov — MCL 432.312](https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-432-312) | Responsible gaming measures, player protection tools, voluntary online self-exclusion |
| MGCB form AD-2067 — Responsible Gaming Database Application (voluntary placement) | [michigan.gov — AD-2067 (canonical)](https://www.michigan.gov/-/media/Project/Websites/mgcb/Disassociated-Persons-Forms/Internet-Gaming-and-Sports-Betting-Responsible-Gaming-Database-Application.pdf) *(verify in browser — gov PDF host bot-blocks automated checks)* · [michigan.gov — Responsible Gaming](https://www.michigan.gov/mgcb/resources/responsible-gaming) | Application to voluntarily place one's name in the Responsible Gaming Database (1-year or 5-year); titled "...Responsible Gaming Database Application" |
| Compulsive Gaming Prevention Act (PA 70 of 1997) | [legislature.mi.gov — Act 70](https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-Act-70-of-1997) | Compulsive Gaming Prevention Fund |

### Upcoming changes

The MGCB launched an expanded DontRegretTheBet.org website in March 2026 with additional tools, educational content, and support resources. Operators should monitor for any corresponding regulatory updates to responsible gaming page requirements. The MGCB has also initiated a high school booster clubs partnership program as part of the "Don't Regret the Bet" campaign (March 2026).

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 21+ (all gambling products — no exceptions) |
| **Legal framework** | State-licensed operators under three governing statutes |
| **Online gambling** | Online casino (iGaming) legal since January 2021; mobile sports betting legal since January 2021 |
| **Lottery** | Legal — Michigan Lottery (separate regulatory body, not covered by this module) |

### Permitted products

| Product | Vertical | Legal status | Regulator | Notes |
|---|---|---|---|---|
| Casino (slots, table games) — Detroit | Land-based | Legal | MGCB | Three commercial casinos: MGM Grand Detroit, MotorCity Casino, Hollywood Casino at Greektown |
| Casino (slots, table games) — Tribal | Land-based | Legal | Tribal gaming commissions / NIGC | 24 tribal casinos operated by 12 federally recognized tribes |
| Online casino / iGaming | Interactive | Legal | MGCB | Legal since January 2021 under PA 152 of 2019 |
| Sports betting (retail) | Land-based | Legal | MGCB | Available at commercial and tribal casinos |
| Sports betting (mobile) | Interactive | Legal | MGCB | Legal since January 2021 under PA 149 of 2019 |
| Poker (online) | Interactive | Legal | MGCB | Permitted under PA 152 of 2019 |
| Horse racing (pari-mutuel) | Land-based | Legal | MGCB | Regulatory authority held by MGCB |
| Lottery | Both | Legal | Michigan Lottery | Separate regulatory body — not covered by this module |
| Daily fantasy sports | Interactive | Legal | MGCB | Regulated under PA 151 of 2019 |

### Licensing model

Michigan uses a **tethered licensing model** for interactive gaming:

| License type | Description |
|---|---|
| **Casino license** | Detroit commercial casino operation (3 licenses issued) |
| **Internet gaming operator** | Must hold a casino license or be an Indian tribe with Class III gaming compact (MCL 432.304) |
| **Sports betting operator** | Must hold a casino license or be an Indian tribe with Class III gaming compact (MCL 432.404) |
| **Platform provider** | Provides the internet gaming or sports betting platform to an operator |
| **Supplier** | Provides games, services, or equipment to operators or platform providers |

### Key regulatory notes

- Michigan operates a **tethered model** — online operators must partner with a licensed commercial casino or tribal operator
- Both commercial and tribal operators can offer online gaming and sports betting
- Tax rate: 20-28% on iGaming adjusted gross receipts (graduated); 8.4% on sports betting adjusted gross receipts
- {{PROGRAM_NAME}} content itself does not require a license, but the operator deploying it must be licensed

---

## Helpline

### 1-800-GAMBLER (statewide primary)

As of **February 8, 2024**, the MGCB adopted **1-800-GAMBLER** as Michigan's statewide primary problem gambling helpline. Calls from Michigan are routed to the Michigan Department of Health and Human Services (MDHHS).

> **Helpline-currency note (verify current MGCB-required number before launch).** The national 1-800-GAMBLER arrangement changed in late 2025–early 2026. 1-800-GAMBLER is a federally registered mark owned by the **Council on Compulsive Gambling of New Jersey (CCGNJ)** — not the NCPG. In September 2025 a New Jersey court returned control of the mark to CCGNJ and ordered the NCPG to stop managing 1-800-GAMBLER after **September 29, 2025**; the **NCPG then adopted a new national number, 1-800-MY-RESET, on January 29, 2026**, and is encouraging states and regulators to authorize and promote it. **For Michigan, 1-800-GAMBLER currently remains the right number to display** — MGCB routes it to Michigan's own MDHHS helpline (not the NCPG network), which insulates the state's requirement from the national dispute. But because adoption of the new number "will vary by state due to regulatory requirements," **confirm MGCB's current required display number before launch** rather than assuming. Sources: [NJ court ruling — CCGNJ regains 1-800-GAMBLER](https://sbcamericas.com/2025/09/23/judge-ruling-1800-gambler-ncpg-ccgnj/) *(verify in browser)* · [Szaferman Lakind — ownership of the 1-800-GAMBLER® mark upheld for CCGNJ](https://www.szaferman.com/ownership-rights-in-the-federally-registered-service-mark-1-800-gambler-are-upheld-by-the-courts-of-new-jersey/) · [NCPG — 1-800-MY-RESET announcement (Jan 29, 2026)](https://www.ncpgambling.org/news/1-800-my-reset-announcement/) · [MGCB bulletin — Michigan routes 1-800-GAMBLER to MDHHS (Feb 8, 2024)](https://content.govdelivery.com/accounts/MIGCB/bulletins/389745b)

| Field | Value |
|---|---|
| **Primary number** | 1-800-GAMBLER (1-800-426-2537) |
| **Text support** | Text 800GAM |
| **Online chat** | www.1800gamblerchat.org |
| **Hours** | 24/7/365 |
| **Cost** | Free and confidential |
| **Michigan routing** | Calls from Michigan are routed to the Michigan Department of Health and Human Services (MDHHS) — i.e., to Michigan's own state helpline, not a national call center |
| **Mark ownership** | 1-800-GAMBLER is a federally registered service mark owned by the Council on Compulsive Gambling of New Jersey (CCGNJ) — *not* the National Council on Problem Gambling (NCPG). See currency note below. |

### Legacy MDHHS helpline

| Field | Value |
|---|---|
| **Number** | 1-800-270-7117 |
| **Status** | Still operational |
| **Notes** | Previous Michigan Problem Gambling Helpline; remains active but 1-800-GAMBLER is now the primary number |

### MGCB Responsible Gaming Section

| Field | Value |
|---|---|
| **Number** | 888-223-3044 |
| **Hours** | Monday-Friday, 8 AM - 5 PM ET |
| **Purpose** | Self-exclusion enrollment, responsible gaming questions, DPL / online self-exclusion inquiries |

### Display rules

#### Land-based display

Under the Michigan Gaming Control and Revenue Act, Detroit commercial casinos must post responsible gaming information and helpline numbers in gaming areas. Specific placement requirements are governed by MGCB-approved internal controls.

#### Interactive display

Under **R 432.654** (internet gaming) and the parallel **R 432.754** (internet sports betting), each operator's website or platform must:

1. Display a **responsible gaming logo** in a manner approved by the MGCB that directs players to the operator's responsible gaming page
2. Maintain a **responsible gaming page** accessible during active sessions that includes:
   - Prominent message informing participants of a toll-free compulsive/problem gambling helpline number (operators currently display 1-800-GAMBLER per the February 2024 statewide transition)
   - Direct link to MGCB's Compulsive/Problem Gambling website
   - Links to **other organizations based in the United States** dedicated to helping people experiencing gambling problems (R 432.654(b) / R 432.754(b))
   - Clear statement of the operator's responsible gaming policy and commitment

> **Pin the right rule by vertical.** Cite **R 432.654** for internet gaming (iGaming) and **R 432.754** for internet sports betting. They are separate, independently enforceable rules — a sports-betting-only deployment is governed by R 432.754, not R 432.654.

**Helpline-wording change — correct attribution**: The original rule text prescribed specific MDHHS wording and number ("...call the Michigan Department of Health and Human Services Gambling Disorder Help-line at: 800-270-7117"). That prescribed verbatim string was removed by the **2025 MR 9 rulemaking, effective April 29, 2025**, which amended **both R 432.654 and R 432.754** to require only a generic prominent toll-free helpline message. (The February 2024 1-800-GAMBLER adoption was a separate MGCB directive; the rule-text change is the later, distinct 2025 MR 9 event.) Confirm the current MGCB-approved messaging format before launch.

**Compliance deadline**: Online gaming platform providers were required to display 1-800-GAMBLER and update any existing listed helpline numbers by **August 8, 2024**.

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call 1-800-GAMBLER."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support — 24/7. For any question about gambling.
> **Call 1-800-GAMBLER** | **Text 800GAM** | **Chat at 1800gamblerchat.org**

Both meet Michigan requirements. The second version provides multiple contact options and frames the helpline as available for any question (not only crisis).

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Messaging regime summary

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| **Land-based — general signage** | Obligation-based | Post responsible gaming information per MGCB-approved internal controls | Michigan Gaming Control and Revenue Act |
| **Interactive — responsible gaming page** | Standard-based | Display RG logo, helpline, MGCB links + links to other US-based help organizations, and operator RG policy on accessible RG page | R 432.654 (iGaming) / R 432.754 (sports betting) |
| **Interactive — helpline display** | Standard-based | Display 1-800-GAMBLER prominently with text and chat options | MGCB directive (February 2024) |
| **All advertising** | Obligation-based | Must not be misleading; must comply with applicable statutory requirements | PA 152 / PA 149 |

**Obligation types explained:**
- **Verbatim** — exact prescribed text that must appear word-for-word
- **Obligation-based** — must post information meeting a described standard, but no prescribed wording
- **Standard-based** — must display specific items (e.g., helpline name, program name) but surrounding copy is flexible

### Verbatim required statements

No verbatim prescribed responsible gambling statement currently applies in the Michigan administrative rules. The original R 432.654 and R 432.754 referenced specific helpline wording ("If you or someone you know has a gambling problem and wants help, call the Michigan Department of Health and Human Services Gambling Disorder Help-line at: 800-270-7117"). That prescribed verbatim string was **deleted by the 2025 MR 9 rulemaking (effective April 29, 2025)**, which amended both rules to require only a generic prominent toll-free helpline message. (The earlier February 2024 transition to 1-800-GAMBLER was a separate MGCB directive, not the rule-text change.) Operators should confirm the current approved messaging format with the MGCB.

### Obligation-based requirements

| Obligation | What must be communicated | Where | Source |
|---|---|---|---|
| Responsible gaming page | RG logo, helpline, MGCB links + other US-based help organizations, operator RG policy | Operator website / platform (accessible during session) | R 432.654 (iGaming) / R 432.754 (sports betting) |
| Helpline display | 1-800-GAMBLER as primary helpline | All interactive platforms; land-based signage | MGCB directive (Feb 2024) |
| Player protection tools | Deposit limits, wagering limits, playing time limits, self-exclusion | Interactive gaming platforms | MCL 432.312(4) |
| Land-based RG information | Problem gambling information and resources | Detroit commercial casino gaming areas | Michigan Gaming Control and Revenue Act |

### On-brand integration

Because Michigan uses an obligation-based/standard-based approach (no mandated verbatim phrasing for general signage), operators have flexibility to use {{PROGRAM_NAME}} messaging natively:

**Generic operator approach:**
> "If you or someone you know has a gambling problem, call 1-800-GAMBLER."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-800-GAMBLER** | **Text 800GAM** | 1800gamblerchat.org

**{{PROGRAM_NAME}} responsible gaming page intro:**
> **Your game, your rules.** Every game has math — and you have tools. Set deposit limits, wagering caps, or session reminders right here. Want to talk to someone? We have you covered.

**Rules for on-brand integration:**
1. Helpline number (1-800-GAMBLER) must appear prominently — never buried or minimized
2. Obligation-based requirements can use full {{PROGRAM_NAME}} voice as long as the obligation is met
3. Give all messaging visual dignity — don't shrink to minimum size
4. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

### Overview

Michigan's advertising approach is **hybrid** — statutory provisions set broad standards, with administrative rules adding specific requirements for interactive platforms. For the full channel-by-channel breakdown, prohibited content, required disclosures, and the {{PROGRAM_NAME}} content compliance matrix, see the companion [advertising rules](advertising-rules.md) reference.

| Field | Value |
|---|---|
| **Land-based** | Governed by Michigan Gaming Control and Revenue Act and MGCB rules |
| **Interactive gaming** | PA 152 of 2019 + Internet Gaming Rules (R 432.611-676); RG page R 432.654; promotions R 432.649 |
| **Sports betting** | PA 149 of 2019 + Internet Sports Betting Rules (R 432.711-776); RG page R 432.754; promotions R 432.749 |
| **Approach** | Hybrid — statutory standards + rule-based requirements |

> **2025 MR 9 advertising changes**: The 2025 MR 9 rulemaking (effective 4/29/2025) reinforced that advertising must not target individuals under 21 or self-excluded persons, and must be truthful and not misleading. Bonus and promotional wagering is governed by **R 432.649** (iGaming) / **R 432.749** (sports betting). Note the titled scope differs by vertical: R 432.749 is titled "Tournaments/contests, bonus and promotional wagering, advertising, and player loyalty programs," whereas R 432.649 is titled only "Tournaments/contests and bonus and promotional wagering" — so advertising and player loyalty programs are named in the sports-betting rule's title but not the iGaming rule's.

### General advertising principles

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| **Truthful advertising** | All advertising must be truthful and not misleading | All | PA 152 / PA 149 |
| **No targeting minors** | Advertising must not target individuals under 21 | All | PA 152 / PA 149 |
| **21+ age statement** | Age requirement must be communicated | All | PA 152 / PA 149 |
| **Responsible gaming information** | Must include helpline and RG resources | Interactive | R 432.654 (iGaming) / R 432.754 (sports betting) |
| **Geolocation disclosure** | Must be within Michigan to participate | Interactive | PA 152 / PA 149 |

### Prohibited content

Michigan statutes and rules prohibit:

- False or misleading advertising about odds, winnings, or gambling outcomes
- Advertising that targets individuals under 21
- Advertising that promotes irresponsible or excessive gambling
- Misleading claims about the risk-free nature of gambling
- Marketing to self-excluded individuals (DPL, or voluntary RGD placements under R 432.672 / R 432.772) and to involuntary prohibited persons in the Responsible Gaming Database

### Required disclosures

All interactive gaming and sports betting advertising must include:

1. **21+** age statement
2. **1-800-GAMBLER** helpline reference
3. **Geolocation** — must be in Michigan to play
4. **Operator identity** — licensed operator name

### Channel-specific rules

| Channel | Key restrictions | Verticals | Source |
|---|---|---|---|
| Digital / mobile | RG page accessible during session; helpline displayed | Interactive | R 432.654 (iGaming) / R 432.754 (sports betting) |
| Broadcast (TV/radio) | Standard FCC/FTC truth-in-advertising; 21+ | All | Federal + state law |
| Direct marketing | Must not target self-excluded individuals (DPL / online program) or database-listed prohibited persons | All | MGCB rules |
| In-venue | RG information posted per internal controls | Land-based | Michigan Gaming Control and Revenue Act |
| Social media | 21+ age gates where available; helpline in bio | Interactive | Best practice |

---

## Self-exclusion — Disassociated Persons List

### Detroit commercial casinos (Disassociated Persons List — DPL)

| Field | Value |
|---|---|
| **Program name** | Disassociated Persons List (DPL) |
| **Duration** | Lifetime ban with option to apply for removal after minimum 5 years |
| **Scope** | Three Detroit commercial casinos: MGM Grand Detroit, MotorCity Casino, Hollywood Casino at Greektown |
| **Does NOT cover** | Tribal casinos, online platforms (separate online self-exclusion program) |
| **Enrollment method** | In-person at MGCB offices (Detroit Cadillac Place or Lansing) |
| **Application requirements** | Government-issued photo ID, physical description (height, weight, eye color, ethnicity, tattoos) |
| **Removal process** | Apply using MGCB form after minimum 5 years; MGCB has up to 60 business days to process a completed removal request |
| **Legal consequences** | Entry to Detroit casino while on DPL = criminal trespass (up to 1 year imprisonment, up to $1,000 fine, or both); winnings confiscated and deposited into Compulsive Gaming Prevention Fund |
| **Source** | Michigan Gaming Control and Revenue Act; MGCB Disassociated Persons Forms |

### Key DPL details

- The DPL is a **voluntary** self-exclusion program — individuals choose to place themselves on the list
- Enrollment is **in-person only** at MGCB offices
- The DPL applies exclusively to the three Detroit commercial casinos licensed by the MGCB
- Tribal casinos are **not covered** by the DPL because they are regulated by their own tribal gaming commissions
- Criminal trespass charges apply if a DPL individual enters a Detroit casino
- The 5-year minimum removal provision was added after the program's initial lifetime-only structure

---

## Self-exclusion — online self-exclusion program (RGD)

> **How this fits together.** Michigan's voluntary online self-exclusion **is voluntary placement in the Responsible Gaming Database (RGD)**. A player chooses a 1-year or 5-year term under **R 432.672** (internet gaming) / **R 432.772** (internet sports betting), backed by MCL 432.312 and the MGCB **"Responsible Gaming Database Application"** (form AD-2067). The RGD itself — the single statewide database — is established by **R 432.671 / R 432.771** and holds *both* these voluntary placements *and* the involuntary prohibited persons covered in the next section. So the voluntary program and the involuntary prohibitions are different populations **within the same database**, not two separate databases. In player-facing copy, cite **R 432.672 / R 432.772** (and MCL 432.312) for the voluntary self-exclusion act, and keep voluntary self-excluders clearly distinct from involuntary prohibited persons.

### Online platforms (voluntary placement in the Responsible Gaming Database)

| Field | Value |
|---|---|
| **Program name** | Voluntary placement in the Responsible Gaming Database (RGD) — internet gaming and sports betting self-exclusion |
| **Nature** | Voluntary — player-initiated |
| **Duration options** | 1 year or 5 year (selected at enrollment) |
| **Scope** | All Michigan-regulated internet gaming operators and internet sports betting operators |
| **Governing rule** | R 432.672 (internet gaming) / R 432.772 (internet sports betting); MCL 432.312 |
| **Enrollment method** | MGCB Responsible Gaming Database Application (form AD-2067); can be submitted remotely |
| **Confirmation** | MGCB Responsible Gaming Representative emails written confirmation; processing may take up to 45 days |
| **Account action** | Prohibited from establishing and/or using an online wagering account or sports betting account |
| **Auto-removal** | Yes — name removed automatically when selected exclusion period expires |
| **Early removal** | Not permitted — cannot remove name before period expires |
| **Separate selections** | Can choose different durations for online casino vs. sports betting |
| **Operator discretion** | Licensed operators offering both online casino and sports betting may deny privileges to all offered online gaming for the longest exclusion chosen |
| **Marketing cessation** | Operators must cease marketing to enrolled individuals |
| **Source** | R 432.672 (iGaming) / R 432.772 (sports betting); MCL 432.312; MGCB form AD-2067 (Responsible Gaming Database Application) |

### Key online self-exclusion details

- Players can select exclusion from **online casino, sports betting, or both** independently
- Different durations can be selected for each product type
- Unlike the DPL (lifetime), the online program offers **time-limited** exclusion (1 or 5 years)
- Removal is **automatic** at period expiration — no reinstatement petition required
- The program is administered by the MGCB under R 432.672 / R 432.772 and MCL 432.312; enrollment places the player's name in the Responsible Gaming Database (RGD) for the chosen term
- Privacy protections: The self-exclusion records are exempt from disclosure under Michigan's Freedom of Information Act

---

## Responsible Gaming Database — prohibited persons

> **This section covers the involuntary placements within the RGD.** The Responsible Gaming Database is established by **R 432.671** (internet gaming) and **R 432.771** (internet sports betting). It holds two distinct populations: the **voluntary** 1-year/5-year self-excluders covered in the previous section (R 432.672 / R 432.772), and the **involuntary** prohibited persons covered here — individuals barred from online wagering for reasons including felony or gaming-crime convictions, crimes of moral turpitude, placement on another state's exclusion list, court orders, and executive-director designations. Involuntary placement is **permanent unless removed by the MGCB executive director** — there is no 1-year/5-year self-selected option. Do not present involuntary prohibited-person status as voluntary self-exclusion in player-facing copy.

| Field | Value |
|---|---|
| **Database name** | Responsible Gaming Database (RGD) |
| **Population covered here** | Involuntary prohibited persons |
| **Nature** | Involuntary — by conviction, court order, other-state exclusion, or executive-director designation |
| **Scope** | All Michigan-regulated internet gaming and internet sports betting operators |
| **Duration** | Permanent unless removed by the MGCB executive director |
| **Operator duty** | Make reasonable efforts to prevent a prohibited person from opening an account or wagering; on discovery, give written notice to the executive director, cancel the wager, and suspend or close the account (R 432.676 iGaming / R 432.776 sports betting) |
| **Database established by** | R 432.671 (iGaming) / R 432.771 (sports betting) |
| **Source** | R 432.671 / R 432.771 (database; involuntary placement); duties R 432.676 / R 432.776 |

### Prohibited-person operator duties (R 432.676 / R 432.776)

Operators and platform providers must:

- Make reasonable efforts to **prevent a prohibited person** from establishing an account or placing a wager
- Upon discovering a prohibited person, **give written notice to the MGCB executive director**
- **Cancel the wager** and **suspend or close the account**

These affirmative duties apply at registration and on an ongoing basis, and they sit alongside (not in place of) the voluntary self-exclusion checks described above.

### Self-exclusion / prohibited-person programs compared

The online voluntary self-exclusion and the involuntary prohibited-person list are **two populations within the same Responsible Gaming Database (RGD)**, not separate databases — the columns below contrast how a player ends up in each.

| Feature | DPL (Land-based, voluntary) | Online self-exclusion — RGD voluntary placement (Interactive) | RGD involuntary prohibited persons (Interactive) |
|---|---|---|---|
| **Nature** | Voluntary | Voluntary | Involuntary (conviction/court order/designation) |
| **Scope** | 3 Detroit commercial casinos | All MI-regulated online operators | All MI-regulated online operators |
| **Duration** | Lifetime (5-year removal option) | 1 year or 5 years | Permanent unless removed by executive director |
| **Enrollment** | In-person at MGCB offices | Application form AD-2067 (remote); name placed in the RGD | Placed in the RGD by MGCB; not self-selected |
| **Removal** | Petition after 5 years; up to 60 business days to process | Automatic at period expiration | Only by executive-director removal |
| **Tribal casinos** | Not covered | N/A | N/A |
| **Consequence** | Trespass charges; winnings confiscated to Compulsive Gaming Prevention Fund | Account closure | Account blocked; wager canceled; reported to executive director |
| **Source** | Michigan Gaming Control and Revenue Act | R 432.672 / R 432.772; MCL 432.312; AD-2067 | R 432.671 / R 432.771; duties R 432.676 / R 432.776 |

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your account" | "Disassociated Persons List" / "online self-exclusion" | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" | "Disassociated Persons List" (land-based) / "online self-exclusion program" (online) | Legal documents, formal enrollment, support referrals |
| Website/app | "Need a break from playing?" | "Self-exclusion program" | On the self-exclusion enrollment page itself |
| Casino signage | "Need a break from gambling?" | "Disassociated Persons List" | Venue self-exclusion information areas |
| Online platform | "Want to step away? Choose 1 year or 5 years." | "Online self-exclusion program" | Online self-exclusion enrollment page |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: What are Michigan's self-exclusion programs?**
>
> Michigan has two **voluntary** self-exclusion programs. The **Disassociated Persons List (DPL)** covers the three Detroit commercial casinos (MGM Grand Detroit, MotorCity Casino, Hollywood Casino at Greektown) — it's a lifetime ban with the option to apply for removal after at least 5 years. Enrollment is in-person at MGCB offices. The **online program** covers all Michigan-regulated online gaming and sports betting platforms — it is **voluntary placement in the Responsible Gaming Database (RGD)** for a player-chosen 1-year or 5-year term (R 432.672 / R 432.772; MGCB form AD-2067, the "Responsible Gaming Database Application"), and the name is automatically removed when the period expires. That same Responsible Gaming Database (R 432.671 / R 432.771) **also** holds *involuntary* prohibited persons (felony/court-ordered) — those entries are not something a player signs up for, so don't describe an involuntary prohibition as self-exclusion. If a player asks about self-exclusion, ask whether they want to exclude from casinos, online play, or both, and help them get started. Use "take a break" in casual conversation, the official program name when referring to the specific enrollment process. Contact the MGCB Responsible Gaming Section at 888-223-3044 for assistance.

---

## Player protection — land-based

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| **Problem gambling information posting** | Yes | Responsible gaming information posted in gaming areas per MGCB-approved internal controls | Michigan Gaming Control and Revenue Act |
| **Helpline display** | Yes | 1-800-GAMBLER displayed in gaming areas | MGCB directive (Feb 2024) |
| **Employee training** | Yes | Staff trained to recognize problem gambling and provide resources | Michigan Gaming Control and Revenue Act |
| **Self-exclusion (DPL)** | Yes | Disassociated Persons List enrollment available; in-person at MGCB offices | Michigan Gaming Control and Revenue Act |
| **"Don't Regret the Bet" materials** | Recommended | MGCB's statewide responsible gaming campaign; materials available at DontRegretTheBet.org | MGCB campaign |

### "Don't Regret the Bet" campaign

Michigan's **"Don't Regret the Bet"** campaign is the MGCB's Emmy Award-winning statewide responsible gaming initiative:

| Detail | Value |
|---|---|
| **Launched** | March 2023 |
| **Website** | DontRegretTheBet.org |
| **Key recognition** | Emmy Award (Graphic Arts — Motion Graphics category); Platinum dotCOMM Award; PRNEWS Digital Award; Shorty Awards finalist |
| **Funding** | $3 million from MGCB FY2025 budget; additional $6 million annual contribution to Compulsive Gaming Prevention Fund |
| **Focus** | Prevention — prevent gambling problems before they start; reduce stigma; encourage early intervention |

Operators may reference DontRegretTheBet.org alongside {{PROGRAM_NAME}} resources. The campaign's approach aligns with {{PROGRAM_NAME}}'s informed-choice model.

### {{PROGRAM_NAME}} tool messaging — land-based

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| RG information | "Every game has math. Here's yours. Tools and info available at the cage or at {{PROGRAM_NAME}}." | Casino floor signage |
| DPL self-exclusion | "Need a break from the casino? Talk to the MGCB about the Disassociated Persons List, or call 888-223-3044." | Casino RG materials |
| Helpline | "Free, confidential support — 24/7. Call 1-800-GAMBLER or text 800GAM." | All casino RG touchpoints |

---

## Player protection — interactive

### Statutory player protection tools (MCL 432.312(4))

The Lawful Internet Gaming Act (MCL 432.312(4)) requires internet gaming operators to offer responsible gambling services and technical controls, specifically:

- **Temporary and permanent self-exclusion** for all internet games offered
- **Periodic deposit limits** — players must be able to set their own
- **Internet wagering limits** — players must be able to set their own
- **Maximum playing times** — players must be able to set their own

These are **statutory requirements** — not discretionary operator tools.

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| **Deposit limits** | Yes | Players must be able to set their own periodic deposit limits | MCL 432.312(4) |
| **Wagering limits** | Yes | Players must be able to set their own periodic wagering limits | MCL 432.312(4) |
| **Playing time limits** | Yes | Players must be able to set their own maximum playing times | MCL 432.312(4) |
| **Self-exclusion (temporary)** | Yes | Temporary self-exclusion for all internet games | MCL 432.312(4) |
| **Self-exclusion (permanent)** | Yes | Permanent self-exclusion for all internet games | MCL 432.312(4) |
| **Online self-exclusion program (RGD)** | Yes | Voluntary placement in the Responsible Gaming Database; 1-year or 5-year options | R 432.672 (iGaming) / R 432.772 (sports betting); MCL 432.312; MGCB form AD-2067 |
| **Prohibited-person duties** | Yes | Prevent prohibited persons (involuntary placements in the Responsible Gaming Database) from opening/using an account; on discovery, notify executive director, cancel wager, suspend/close account | R 432.676 (iGaming) / R 432.776 (sports betting) |
| **Responsible gaming page** | Yes | Accessible during session with helpline, MGCB links + other US-based help organizations, operator RG policy | R 432.654 (iGaming) / R 432.754 (sports betting) |
| **RG logo display** | Yes | MGCB-approved responsible gaming logo directing to RG page | R 432.654 (iGaming) / R 432.754 (sports betting) |
| **Single account** | Yes | One account per operator per player | Internet Gaming Rules |
| **Geolocation** | Yes | Player must be physically located in Michigan | MCL 432.308; MCL 432.411 |
| **Age verification** | Yes | 21+ verification at registration | MCL 432.308; MCL 432.411 |

### {{PROGRAM_NAME}} tool messaging — interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit — play on your terms. Takes 10 seconds." | MCL 432.312(4) |
| Wagering limits | "Cap your wagers — set a limit and play without overthinking it." | MCL 432.312(4) |
| Playing time limits | "Set a session reminder — your dashboard, your rules." | MCL 432.312(4) |
| Self-exclusion (temporary) | "Need a breather? Pause your account for as long as you need." | MCL 432.312(4) |
| Self-exclusion (online program) | "Want to step away longer? Michigan's online self-exclusion lets you choose 1 year or 5 years." | R 432.672 / R 432.772; MCL 432.312; AD-2067 |
| RG page | "Questions about how games work, or ready to set some limits? It's all right here." | R 432.654 (iGaming) / R 432.754 (sports betting) |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 21+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.united-states-michigan` |
| **`{{MIN_AGE}}` token value** | 21 |
| **Products with different ages** | None — 21+ applies to all gambling in Michigan |
| **Statutory basis** | Michigan Gaming Control and Revenue Act (land-based); MCL 432.308 (internet gaming); MCL 432.411 (sports betting) |

### Land-based verification

| Requirement | Details | Source |
|---|---|---|
| **Method** | Government-issued photo ID | Michigan Gaming Control and Revenue Act |
| **Acceptable ID** | Valid government-issued photo identification | Michigan Gaming Control and Revenue Act |

### Interactive verification

| Requirement | Details | Source |
|---|---|---|
| **Age verification** | Operator must verify authorized participant is 21+ | MCL 432.308; MCL 432.411 |
| **Geolocation** | Must verify player is physically located in Michigan | MCL 432.308; MCL 432.411 |
| **Identity verification** | Full identity verification required at registration | Internet Gaming Rules |
| **Self-exclusion / prohibited-person check** | Confirm player is not self-excluded (DPL, or a voluntary RGD placement) and is not an involuntary prohibited person in the Responsible Gaming Database; block, cancel wager, and notify the executive director on discovery | R 432.672 / R 432.772 (voluntary); R 432.671 / R 432.771 (database / involuntary); duties R 432.676 / R 432.776 |

### Age messaging

All collateral in Michigan must display `21+` age notice:

> "You must be 21+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `21+` for all Michigan-deployed content.

---

## AML/KYC

### FinCEN/BSA requirements

Michigan casinos (commercial and tribal) are classified as **financial institutions** under the Bank Secrecy Act (BSA) and must comply with FinCEN regulations:

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Currency Transaction Report (CTR)** | $10,000+ (single transaction or aggregate in 24 hours) | Player must provide ID; transaction reported to FinCEN |
| **Suspicious Activity Report (SAR)** | Any amount | No direct player notification — internal reporting |
| **Player identification (casino)** | $10,000+ cash transactions | Government-issued photo ID required |
| **Player identification (interactive)** | All accounts | Full identity verification at registration |
| **Source of funds** | Large or unusual transactions | Player may be asked about the origin of funds |

### Interactive gaming AML

Internet gaming and sports betting operators must implement AML/KYC procedures as part of their licensing requirements under PA 152 and PA 149. All online accounts require full identity verification before wagering.

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required for all players. Takes about 2 minutes."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Michigan-specific adaptations.

| Category | Collateral | Verticals | Adaptation required | Token |
|---|---|---|---|---|
| **Digital** | Website footer | Both | MI helpline: 1-800-GAMBLER, Text 800GAM, 1800gamblerchat.org + 21+ + on-brand RG message | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Both | Set to 21+ | `{{MIN_AGE}}` = 21 |
| **Digital** | Wagering account / app | Interactive | RG logo (MGCB-approved); RG page with helpline, MGCB links + other US-based help organizations, operator policy per R 432.654 (iGaming) / R 432.754 (sports betting); deposit/wagering/time limit tools per MCL 432.312(4) | Multiple tokens |
| **Digital** | Self-exclusion page | Both | Explain the two voluntary programs (DPL for Detroit casinos; online voluntary placement in the Responsible Gaming Database for iGaming/sports betting, form AD-2067) and keep voluntary self-excluders distinct from involuntary prohibited persons in that same database; link to MGCB enrollment forms; MGCB RG Section: 888-223-3044 | — |
| **Digital** | Deposit screen | Interactive | Helpline + on-brand message; deposit limit option prominently displayed per MCL 432.312(4) | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media bio | Both | Include 1-800-GAMBLER, 21+ | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email templates | Both | Helpline + on-brand RG message in every email | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | Both | MI helpline (all contact methods), 21+ notice, DontRegretTheBet.org reference | All tokens |
| **Print** | Rack card | Land-based | Helpline, on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Land-based | Helpline + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | Both | 1-800-GAMBLER, Text 800GAM, 1800gamblerchat.org, 888-223-3044 (MGCB RG Section) | All helpline tokens |
| **Environmental** | Gaming areas | Land-based | RG info + 1-800-GAMBLER per internal controls | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | Land-based | On-brand RG message in rotation, helpline | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot end card | Both | Helpline (3-second minimum recommended) | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Both | Spoken helpline reference | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Conversation scripts | Both | 1-800-GAMBLER in all referral scripts; DPL / online self-exclusion enrollment in scripts; MGCB RG Section 888-223-3044 | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Both | Add Michigan self-exclusion Q&A (DPL + online program; database noted as involuntary), update helpline to 1-800-GAMBLER, add DontRegretTheBet.org reference | — |

For a detailed collateral adaptation guide, see the [collateral adaptation template](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Michigan:

```yaml
# --- HELPLINES -------------------------------------------
helplines:
  united-states:
    michigan:
      number: "1-800-GAMBLER"
      text_number: "Text 800GAM"
      chat_url: "www.1800gamblerchat.org"
      website: "www.michigan.gov/mgcb/resources/responsible-gaming"
      label: "1-800-GAMBLER (routed to Michigan DHHS)"
      legacy_number: "1-800-270-7117"
      mgcb_rg_section: "888-223-3044"
      hours: "24/7/365"
      campaign_website: "www.dontregretthebet.org"
      notes: >
        1-800-GAMBLER adopted as statewide primary Feb 2024;
        calls routed to MDHHS (Michigan's own helpline). Legacy
        1-800-270-7117 still operational. MGCB RG Section
        (888-223-3044) handles self-exclusion enrollment,
        M-F 8am-5pm ET. CURRENCY CAVEAT: 1-800-GAMBLER is a
        CCGNJ-owned mark (not NCPG's); NJ court returned it to
        CCGNJ (NCPG to cease after 9/29/2025) and NCPG launched
        1-800-MY-RESET on 1/29/2026. MI still routes 1-800-GAMBLER
        to MDHHS, so it currently remains MI's number — but confirm
        MGCB's current required display before launch.

# --- LEGAL -----------------------------------------------
legal:
  minimum_gambling_age:
    united-states-michigan: 21

# --- MESSAGING -------------------------------------------
messaging:
  mandatory:
    united-states-michigan-general: |
      # No verbatim prescribed statement (verbatim helpline wording deleted by
      # 2025 MR 9, eff. 4/29/2025, amending R 432.654 & R 432.754).
      # Land-based: obligation-based — post RG info per internal controls.
      # Interactive: standard-based — display RG logo, helpline (1-800-GAMBLER),
      # MGCB links + links to other US-based help organizations, and operator
      # RG policy per R 432.654 (iGaming) / R 432.754 (sports betting).
      # Helpline updated to 1-800-GAMBLER per MGCB directive (Feb 2024).
      # Player tools (deposit/wagering/time limits) required per MCL 432.312(4).
```

Also see the full [US config overrides](../_brand-us.yml) for the complete state structure.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Michigan.

### Regulatory
- [ ] Confirmed MGCB as primary regulator
- [ ] Understood three-statute framework (Gaming Control and Revenue Act + PA 152 + PA 149)
- [ ] Reviewed Compulsive Gaming Prevention Act (PA 70 of 1997)
- [ ] Verified legal gambling age: 21+ for all products
- [ ] Reviewed permitted products table
- [ ] Identified whether deployment is land-based (commercial), land-based (tribal), interactive, or combination
- [ ] If tribal deployment: reviewed applicable tribal-state compact and tribal gaming ordinance
- [ ] Checked for pending regulatory changes (MGCB website expansion, campaign updates)

### Helpline
- [ ] 1-800-GAMBLER displayed as primary helpline
- [ ] Text option displayed: Text 800GAM
- [ ] Chat option displayed: 1800gamblerchat.org
- [ ] MGCB RG Section number available for staff: 888-223-3044
- [ ] Legacy number (1-800-270-7117) replaced with 1-800-GAMBLER (deadline was August 8, 2024)
- [ ] Helpline posted per internal controls (land-based)
- [ ] DontRegretTheBet.org referenced where appropriate

### Messaging
- [ ] Land-based: RG information posted per MGCB-approved internal controls
- [ ] Interactive: RG logo displayed in MGCB-approved manner (R 432.654 iGaming / R 432.754 sports betting)
- [ ] Interactive: RG page accessible during session with helpline, MGCB links + other US-based help organizations, operator policy (R 432.654 / R 432.754)
- [ ] 21+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Michigan values

### Advertising
- [ ] Advertising content truthful and not misleading
- [ ] No content targeting individuals under 21
- [ ] 1-800-GAMBLER and RG information included in advertising
- [ ] 21+ age statement included
- [ ] Geolocation requirement communicated (interactive)
- [ ] No marketing to self-excluded individuals (DPL / online program) or prohibited persons on the responsible gaming database
- [ ] Promotional wagering / bonuses comply with R 432.649 (iGaming) / R 432.749 (sports betting)
- [ ] Advertising reviewed against 2025 MR 9 changes (no under-21 / self-excluded targeting)
- [ ] Detailed advertising standards reviewed in [advertising-rules.md](advertising-rules.md)

### Self-exclusion — DPL (Land-based)
- [ ] DPL information available in casino venues
- [ ] Staff trained on DPL enrollment process (in-person at MGCB offices)
- [ ] DPL individuals denied entry to gaming areas
- [ ] Winnings confiscation process to Compulsive Gaming Prevention Fund established
- [ ] Marketing to DPL-enrolled individuals ceased
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language

### Self-exclusion — online program (Interactive, voluntary)
- [ ] Online self-exclusion enrollment information displayed on platform (form AD-2067)
- [ ] Link to MGCB self-exclusion forms page provided
- [ ] Self-excluded individuals prevented from establishing/using accounts
- [ ] Marketing to self-excluded individuals ceased
- [ ] Operator aware that players can select different durations for casino vs. sports betting
- [ ] Processing timeline communicated (up to 45 days for confirmation)

### Responsible gaming database — prohibited persons (Interactive, involuntary)
- [ ] Reasonable efforts in place to prevent prohibited persons from opening/using accounts (R 432.671 / R 432.771)
- [ ] On discovery: written notice to executive director, wager canceled, account suspended/closed (R 432.676 / R 432.776)
- [ ] Involuntary prohibited-person entries treated as distinct from voluntary self-exclusion in all player-facing copy (both populations live in the same Responsible Gaming Database)

### Player protection — Land-based
- [ ] Problem gambling information posted per internal controls
- [ ] Helpline displayed: 1-800-GAMBLER
- [ ] Employee training program implemented
- [ ] DPL enrollment information available

### Player protection — Interactive
- [ ] Deposit limits implemented (MCL 432.312(4))
- [ ] Wagering limits implemented (MCL 432.312(4))
- [ ] Playing time limits implemented (MCL 432.312(4))
- [ ] Temporary self-exclusion available (MCL 432.312(4))
- [ ] Permanent self-exclusion available (MCL 432.312(4))
- [ ] Online self-exclusion enrollment information accessible (MCL 432.312; AD-2067)
- [ ] Prohibited-person duties operational (R 432.676 iGaming / R 432.776 sports betting)
- [ ] Responsible gaming page meets R 432.654 (iGaming) / R 432.754 (sports betting) requirements
- [ ] Geolocation verification operational (MCL 432.308 / 432.411)
- [ ] Single account per operator enforced
- [ ] Age verification (21+) at registration

### Age verification
- [ ] 21+ age verification at all gambling touchpoints
- [ ] Land-based: government-issued photo ID at casino entry
- [ ] Interactive: identity and age verification at registration
- [ ] Interactive: geolocation verification confirming Michigan location
- [ ] Self-exclusion checks (DPL; voluntary RGD placements under R 432.672 / R 432.772) and involuntary prohibited-person checks against the Responsible Gaming Database at registration (R 432.671 / R 432.771; duties R 432.676 / R 432.776)

### AML/KYC
- [ ] FinCEN/BSA compliance program in place
- [ ] CTR filing procedures for $10,000+ transactions
- [ ] SAR filing procedures operational
- [ ] Interactive: full identity verification at account creation
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] Staff FAQ updated with Michigan self-exclusion Q&A (DPL + online program; database noted as involuntary)
- [ ] Conversation scripts updated with 1-800-GAMBLER helpline references
- [ ] AML/KYC player-facing messaging uses {{PROGRAM_NAME}} voice
- [ ] DontRegretTheBet.org referenced in appropriate materials

### Governance
- [ ] `_brand.yml` updated with Michigan values (helpline, age, messaging)
- [ ] `_brand-us.yml` reviewed
- [ ] `Last verified` date set on this module
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [United States overview](../README.md) | [US config overrides](../_brand-us.yml) | [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [Advertising rules](advertising-rules.md)*
