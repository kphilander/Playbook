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
  for non-US deployments. Currency is USD. Michigan has separate self-exclusion
  programs for Detroit commercial casinos (Disassociated Persons List) and
  online platforms (Responsible Gaming Database). Tribal casinos operate under
  separate tribal-state compacts. Three governing statutes cover land-based
  casino, internet gaming, and sports betting. Helpline transitioned to
  1-800-GAMBLER as statewide primary in February 2024.
last_updated: 2026-03-22
---

# Michigan — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Michigan. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. Michigan uses a **hybrid** regulatory approach with **three separate governing statutes** covering land-based casino, internet gaming, and sports betting. Michigan has two distinct self-exclusion programs: the Disassociated Persons List (DPL) for Detroit commercial casinos and the Responsible Gaming Database (RGD) for online platforms. Tribal casinos operate under separate tribal-state compacts and are not directly regulated by the MGCB.
>
> **Verticals covered**: Land-based Casino (3 Detroit commercial + 24 tribal), Online Casino/iGaming, Sports Betting (retail + mobile)
> *(If your deployment only covers one vertical, sections marked with another vertical's tag can be skipped.)*

> **Last verified**: 2026-03-22
> **Next review due**: 2026-06-22 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Verticals | Description |
|---|---|---|
| [Regulatory authority](#regulatory-authority) | All | MGCB structure, governing legislation, tribal compacts |
| [Legal requirements](#legal-requirements) | All | 21+, permitted products, three-statute framework |
| [Helpline](#helpline) | All | 1-800-GAMBLER (statewide primary), legacy MDHHS line, MGCB RG Section |
| [Messaging requirements](#messaging-requirements) | All | Obligation-based (land-based) + standard-based (interactive) |
| [Advertising restrictions](#advertising-restrictions) | All | Statutory and rule-based requirements |
| [Self-exclusion — Disassociated Persons List](#self-exclusion--disassociated-persons-list) | Land-based | DPL for Detroit commercial casinos (lifetime with 5-year removal option) |
| [Self-exclusion — Responsible Gaming Database](#self-exclusion--responsible-gaming-database) | Interactive | RGD for online platforms (1-year or 5-year) |
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
| **Responsible gaming** | Maintains Disassociated Persons List and Responsible Gaming Database; funds "Don't Regret the Bet" campaign |

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
| Internet Gaming Rules (R 432.611-676) | [michigan.gov — Internet Gaming Rules](https://www.michigan.gov/-/media/Project/Websites/mgcb/Internet-Gaming-and-Fantasy-Contests/ActsandRules/Internet_Gaming_Rules_2020-8-26.pdf) | Administrative rules for internet gaming |
| MCL 432.312 | [legislature.mi.gov — MCL 432.312](https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-432-312) | Responsible gaming measures and player protection tools |
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

| Field | Value |
|---|---|
| **Primary number** | 1-800-GAMBLER (1-800-426-2537) |
| **Text support** | Text 800GAM |
| **Online chat** | www.1800gamblerchat.org |
| **Hours** | 24/7/365 |
| **Cost** | Free and confidential |
| **Operator** | National Council on Problem Gambling (NCPG); Michigan calls routed to MDHHS |

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
| **Purpose** | Self-exclusion enrollment, responsible gaming questions, DPL/RGD inquiries |

### Display rules

#### Land-based display

Under the Michigan Gaming Control and Revenue Act, Detroit commercial casinos must post responsible gaming information and helpline numbers in gaming areas. Specific placement requirements are governed by MGCB-approved internal controls.

#### Interactive display

Under **R 432.654**, each internet gaming operator's website or internet gaming platform must:

1. Display a **responsible gaming logo** in a manner approved by the MGCB that directs players to the operator's responsible gaming page
2. Maintain a **responsible gaming page** accessible during active sessions that includes:
   - Prominent helpline message with 1-800-GAMBLER (updated from the original 1-800-270-7117 per the February 2024 transition)
   - Direct link to MGCB's Compulsive/Problem Gambling website
   - Links to US-based organizations dedicated to helping people with gambling problems
   - Clear statement of the operator's responsible gaming policy and commitment

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
| **Interactive — responsible gaming page** | Standard-based | Display RG logo, helpline, MGCB links, and operator RG policy on accessible RG page | R 432.654 |
| **Interactive — helpline display** | Standard-based | Display 1-800-GAMBLER prominently with text and chat options | MGCB directive (February 2024) |
| **All advertising** | Obligation-based | Must not be misleading; must comply with applicable statutory requirements | PA 152 / PA 149 |

**Obligation types explained:**
- **Verbatim** — exact prescribed text that must appear word-for-word
- **Obligation-based** — must post information meeting a described standard, but no prescribed wording
- **Standard-based** — must display specific items (e.g., helpline name, program name) but surrounding copy is flexible

### Verbatim required statements

No verbatim prescribed responsible gambling statement has been identified in the Michigan statutes or administrative rules. The original R 432.654 referenced specific helpline wording ("If you or someone you know has a gambling problem and wants help, call the Michigan Department of Health and Human Services Gambling Disorder Help-line at: 800-270-7117"), but this has been superseded by the February 2024 transition to 1-800-GAMBLER. Operators should confirm the current approved messaging format with the MGCB.

### Obligation-based requirements

| Obligation | What must be communicated | Where | Source |
|---|---|---|---|
| Responsible gaming page | RG logo, helpline, MGCB links, operator RG policy | Operator website / platform (accessible during session) | R 432.654 |
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

Michigan's advertising approach is **hybrid** — statutory provisions set broad standards, with administrative rules adding specific requirements for interactive platforms.

| Field | Value |
|---|---|
| **Land-based** | Governed by Michigan Gaming Control and Revenue Act and MGCB rules |
| **Interactive gaming** | PA 152 of 2019 + Internet Gaming Rules (R 432.611-676) |
| **Sports betting** | PA 149 of 2019 + Internet Sports Betting Rules (R 432.711-776) |
| **Approach** | Hybrid — statutory standards + rule-based requirements |

### General advertising principles

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| **Truthful advertising** | All advertising must be truthful and not misleading | All | PA 152 / PA 149 |
| **No targeting minors** | Advertising must not target individuals under 21 | All | PA 152 / PA 149 |
| **21+ age statement** | Age requirement must be communicated | All | PA 152 / PA 149 |
| **Responsible gaming information** | Must include helpline and RG resources | Interactive | R 432.654 |
| **Geolocation disclosure** | Must be within Michigan to participate | Interactive | PA 152 / PA 149 |

### Prohibited content

Michigan statutes and rules prohibit:

- False or misleading advertising about odds, winnings, or gambling outcomes
- Advertising that targets individuals under 21
- Advertising that promotes irresponsible or excessive gambling
- Misleading claims about the risk-free nature of gambling
- Advertising to individuals on the Disassociated Persons List or Responsible Gaming Database

### Required disclosures

All interactive gaming and sports betting advertising must include:

1. **21+** age statement
2. **1-800-GAMBLER** helpline reference
3. **Geolocation** — must be in Michigan to play
4. **Operator identity** — licensed operator name

### Channel-specific rules

| Channel | Key restrictions | Verticals | Source |
|---|---|---|---|
| Digital / mobile | RG page accessible during session; helpline displayed | Interactive | R 432.654 |
| Broadcast (TV/radio) | Standard FCC/FTC truth-in-advertising; 21+ | All | Federal + state law |
| Direct marketing | Must not target self-excluded individuals (DPL/RGD) | All | MGCB rules |
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
| **Does NOT cover** | Tribal casinos, online platforms (separate RGD program) |
| **Enrollment method** | In-person at MGCB offices (Detroit Cadillac Place or Lansing) |
| **Application requirements** | Government-issued photo ID, physical description (height, weight, eye color, ethnicity, tattoos) |
| **Removal process** | Apply using MGCB form after minimum 5 years; MGCB has 30 business days to process |
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

## Self-exclusion — Responsible Gaming Database

### Online platforms (Responsible Gaming Database — RGD)

| Field | Value |
|---|---|
| **Program name** | Internet Gaming and Sports Betting Responsible Gaming Database (RGD) |
| **Duration options** | 1 year or 5 year (selected at enrollment) |
| **Scope** | All Michigan-regulated internet gaming operators and internet sports betting operators |
| **Enrollment method** | Application form (MGCB-AD-2067); can be submitted remotely |
| **Confirmation** | MGCB Responsible Gaming Representative emails written confirmation; processing may take up to 45 days |
| **Account action** | Prohibited from establishing and/or using an online wagering account or sports betting account |
| **Auto-removal** | Yes — name removed automatically when selected exclusion period expires |
| **Early removal** | Not permitted — cannot remove name from RGD before period expires |
| **Separate selections** | Can choose different durations for online casino vs. sports betting |
| **Operator discretion** | Licensed operators offering both online casino and sports betting may deny privileges to all offered online gaming for the longest exclusion chosen |
| **Marketing cessation** | Operators must cease marketing to RGD-enrolled individuals |
| **Source** | MCL 432.312; R 432.671-672 |

### Key RGD details

- The RGD allows players to select exclusion from **online casino, sports betting, or both** independently
- Different durations can be selected for each product type
- Unlike the DPL (lifetime), the RGD offers **time-limited** exclusion (1 or 5 years)
- Removal is **automatic** at period expiration — no reinstatement petition required
- The RGD is maintained by the MGCB under MCL 432.312
- Privacy protections: The self-exclusion list and responsible gaming database are exempt from disclosure under Michigan's Freedom of Information Act

### Two programs compared

| Feature | DPL (Land-based) | RGD (Interactive) |
|---|---|---|
| **Scope** | 3 Detroit commercial casinos | All MI-regulated online operators |
| **Duration** | Lifetime (5-year removal option) | 1 year or 5 years |
| **Enrollment** | In-person at MGCB offices | Application form (remote) |
| **Removal** | Petition after 5 years; 30 business days to process | Automatic at period expiration |
| **Tribal casinos** | Not covered | N/A |
| **Criminal penalty** | Trespass charges | Account closure |
| **Winnings** | Confiscated to Compulsive Gaming Prevention Fund | Account restrictions |

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your account" | "Disassociated Persons List" / "Responsible Gaming Database" | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" | "Disassociated Persons List" (land-based) / "Responsible Gaming Database" (online) | Legal documents, formal enrollment, support referrals |
| Website/app | "Need a break from playing?" | "Self-exclusion program" | On the self-exclusion enrollment page itself |
| Casino signage | "Need a break from gambling?" | "Disassociated Persons List" | Venue self-exclusion information areas |
| Online platform | "Want to step away? Choose 1 year or 5 years." | "Responsible Gaming Database" | RGD enrollment page |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: What are Michigan's self-exclusion programs?**
>
> Michigan has two self-exclusion programs. The **Disassociated Persons List (DPL)** covers the three Detroit commercial casinos (MGM Grand Detroit, MotorCity Casino, Hollywood Casino at Greektown) — it's a lifetime ban with the option to apply for removal after at least 5 years. Enrollment is in-person at MGCB offices. The **Responsible Gaming Database (RGD)** covers all Michigan-regulated online gaming and sports betting platforms — players can choose 1 year or 5 years, and their name is automatically removed when the period expires. If a player asks about self-exclusion, ask whether they want to exclude from casinos, online play, or both, and help them get started. Use "take a break" in casual conversation, the official program name when referring to the specific enrollment process. Contact the MGCB Responsible Gaming Section at 888-223-3044 for assistance.

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
| **Responsible Gaming Database** | Yes | Statewide RGD maintained by MGCB; 1-year or 5-year options | MCL 432.312; R 432.671 |
| **Responsible gaming page** | Yes | Accessible during session with helpline, MGCB links, operator RG policy | R 432.654 |
| **RG logo display** | Yes | MGCB-approved responsible gaming logo directing to RG page | R 432.654 |
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
| Self-exclusion (RGD) | "Want to step away longer? The Responsible Gaming Database lets you choose 1 year or 5 years." | MCL 432.312; R 432.671 |
| RG page | "Questions about how games work, or ready to set some limits? It's all right here." | R 432.654 |

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
| **Self-exclusion check** | Confirm player is not on DPL or RGD | R 432.671-672 |

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
| **Digital** | Wagering account / app | Interactive | RG logo (MGCB-approved); RG page with helpline, MGCB links, operator policy per R 432.654; deposit/wagering/time limit tools per MCL 432.312(4) | Multiple tokens |
| **Digital** | Self-exclusion page | Both | Explain dual-program model (DPL for Detroit casinos, RGD for online); link to MGCB enrollment forms; MGCB RG Section: 888-223-3044 | — |
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
| **Customer service** | Conversation scripts | Both | 1-800-GAMBLER in all referral scripts; DPL/RGD enrollment in scripts; MGCB RG Section 888-223-3044 | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Both | Add Michigan dual self-exclusion Q&A (DPL + RGD), update helpline to 1-800-GAMBLER, add DontRegretTheBet.org reference | — |

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
        calls routed to MDHHS. Legacy 1-800-270-7117 still
        operational. MGCB RG Section (888-223-3044) handles
        self-exclusion enrollment, M-F 8am-5pm ET.

# --- LEGAL -----------------------------------------------
legal:
  minimum_gambling_age:
    united-states-michigan: 21

# --- MESSAGING -------------------------------------------
messaging:
  mandatory:
    united-states-michigan-general: |
      # No verbatim prescribed statement.
      # Land-based: obligation-based — post RG info per internal controls.
      # Interactive: standard-based — display RG logo, helpline (1-800-GAMBLER),
      # MGCB links, and operator RG policy per R 432.654.
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
- [ ] Interactive: RG logo displayed in MGCB-approved manner (R 432.654)
- [ ] Interactive: RG page accessible during session with helpline, MGCB links, operator policy (R 432.654)
- [ ] 21+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Michigan values

### Advertising
- [ ] Advertising content truthful and not misleading
- [ ] No content targeting individuals under 21
- [ ] 1-800-GAMBLER and RG information included in advertising
- [ ] 21+ age statement included
- [ ] Geolocation requirement communicated (interactive)
- [ ] No marketing to DPL or RGD-enrolled individuals

### Self-exclusion — DPL (Land-based)
- [ ] DPL information available in casino venues
- [ ] Staff trained on DPL enrollment process (in-person at MGCB offices)
- [ ] DPL individuals denied entry to gaming areas
- [ ] Winnings confiscation process to Compulsive Gaming Prevention Fund established
- [ ] Marketing to DPL-enrolled individuals ceased
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language

### Self-exclusion — RGD (Interactive)
- [ ] RGD enrollment information displayed on platform
- [ ] Link to MGCB self-exclusion forms page provided
- [ ] RGD-enrolled individuals prevented from establishing/using accounts
- [ ] Marketing to RGD-enrolled individuals ceased
- [ ] Operator aware that players can select different durations for casino vs. sports betting
- [ ] Processing timeline communicated (up to 45 days for confirmation)

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
- [ ] RGD enrollment information accessible
- [ ] Responsible gaming page meets R 432.654 requirements
- [ ] Geolocation verification operational (MCL 432.308 / 432.411)
- [ ] Single account per operator enforced
- [ ] Age verification (21+) at registration

### Age verification
- [ ] 21+ age verification at all gambling touchpoints
- [ ] Land-based: government-issued photo ID at casino entry
- [ ] Interactive: identity and age verification at registration
- [ ] Interactive: geolocation verification confirming Michigan location
- [ ] Self-exclusion and prohibited persons checks at registration (DPL/RGD)

### AML/KYC
- [ ] FinCEN/BSA compliance program in place
- [ ] CTR filing procedures for $10,000+ transactions
- [ ] SAR filing procedures operational
- [ ] Interactive: full identity verification at account creation
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] Staff FAQ updated with Michigan dual self-exclusion Q&A (DPL + RGD)
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
