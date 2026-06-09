---
content_type: jurisdiction-module
title: "Ohio — Compliance Module"
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
  Ohio module is written for the US market (peer/individual/irreverent/
  blunt/open). On-brand messaging examples throughout need adaptation
  for non-US deployments. Currency is USD. Ohio has its own state helpline
  (1-800-589-9966) separate from the NCPG national number. Self-exclusion
  is statewide (Time Out Ohio) covering casinos, racinos, and sports gaming.
  No online casino. AGA code references are US-specific.
last_updated: 2026-06-08
---

# Ohio — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Ohio. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. Ohio uses a prescriptive model requiring commission-approved disordered and problem gambling plans (OAC 3772-12-06). Sports gaming advertising has detailed content requirements (OAC 3775-16-08) and prescriptive promotions/bonus requirements (OAC 3775-16-09). Ohio operates a statewide voluntary exclusion program — Time Out Ohio — covering all casinos, racinos, and sports gaming.

> **Last verified**: 2026-06-08
> **Next review due**: 2026-09-08 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | OCCC structure and key legislation |
| [Legal requirements](#legal-requirements) | 21+, permitted products, licensing |
| [Helpline](#helpline) | Ohio Problem Gambling Helpline, display rules |
| [Messaging requirements](#messaging-requirements) | Problem gambling plan messaging + sports ad requirements |
| [Advertising restrictions](#advertising-restrictions) | Prescriptive sports gaming ad rules (OAC 3775-16-08) |
| [Promotions and bonuses](#promotions-and-bonuses) | Promo/bonus T&C standard (OAC 3775-16-09) |
| [Self-exclusion](#self-exclusion) | Time Out Ohio — statewide program |
| [Player protection tools](#player-protection-tools) | Land-based vs. sports gaming |
| [Age verification](#age-verification) | 21+ requirements |
| [AML/KYC](#amlkyc) | FinCEN/BSA requirements |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Primary regulator** | Ohio Casino Control Commission (OCCC) |
| **Website** | [casinocontrol.ohio.gov](https://casinocontrol.ohio.gov/) |
| **Governing legislation** | ORC Chapter 3772 (Casino Control Law); ORC Chapter 3775 (Sports Gaming) |
| **Regulations** | OAC Title 3772 (Casino Control Commission); OAC Title 3775 (Sports Gaming) |
| **Established** | 2011 (created by constitutional amendment and subsequent Casino Control Law) |
| **Regulatory approach** | Prescriptive |

### Scope of authority

The OCCC is responsible for the licensing, regulation, investigation, and oversight of all casino gaming and sports gaming in Ohio. Key functions include:

| Function | Details |
|---|---|
| **Casino gaming** | Licensing and oversight of 4 commercial casinos and 7 racinos (VLT facilities) |
| **Sports gaming** | Licensing of all sports gaming proprietors (online and retail) since January 2023 |
| **Employee licensing** | Casino gaming employee licenses required for all gaming staff (ORC 3772.131) |
| **Problem gambling oversight** | Approval and monitoring of disordered and problem gambling plans (OAC 3772-12-06) |
| **Voluntary exclusion** | Joint administration of Time Out Ohio with the Ohio Lottery Commission |

### Multi-agency landscape

Ohio's gambling ecosystem involves multiple agencies:

| Agency | Role | Relevance to {{PROGRAM_NAME}} |
|---|---|---|
| **OCCC** | Regulates casinos and sports gaming | Primary regulator — all compliance flows through OCCC |
| **Ohio Lottery Commission** | Regulates racinos (VLTs) and lottery | Co-administers Time Out Ohio; racino signage requirements |
| **Ohio State Racing Commission** | Regulates horse racing | Limited relevance — pari-mutuel only |
| **Ohio Department of Mental Health and Addiction Services (OhioMHAS)** | Funds problem gambling treatment | State-level resource; funds helpline and treatment programs; runs the "Change the Game Ohio" youth/parent prevention sub-campaign |
| **Ohio For Responsible Gambling (ORG)** | Coalition of OCCC, OLC, OSRC, and OhioMHAS | Responsible gambling awareness campaigns; runs the current statewide "Pause Before You Play" campaign ([pausebeforeyouplay.org](https://pausebeforeyouplay.org/)) |

### Primary sources

Citations use the OCCC/state canonical domain `codes.ohio.gov`. A verified [Cornell LII](https://www.law.cornell.edu/regulations/ohio) mirror is given alongside each Ohio Administrative Code rule as a fetch-confirmed backup.

| Document | URL | Relevance |
|---|---|---|
| ORC Chapter 3772 | [codes.ohio.gov/ohio-revised-code/chapter-3772](https://codes.ohio.gov/ohio-revised-code/chapter-3772) | Casino Control Law — governs all casino gaming in Ohio |
| ORC Chapter 3775 | [codes.ohio.gov/ohio-revised-code/chapter-3775](https://codes.ohio.gov/ohio-revised-code/chapter-3775) | Sports Gaming Act — governs all sports betting in Ohio |
| OAC 3772-12 | [codes.ohio.gov/ohio-administrative-code/chapter-3772-12](https://codes.ohio.gov/ohio-administrative-code/chapter-3772-12) · [LII mirror](https://www.law.cornell.edu/regulations/ohio/title-3772/chapter-3772-12) | Voluntary Exclusion Program and Disordered and Problem Gambling Plan procedures |
| OAC 3772-12-06 | [codes.ohio.gov/ohio-administrative-code/rule-3772-12-06](https://codes.ohio.gov/ohio-administrative-code/rule-3772-12-06) · [LII mirror](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3772-12-06) | Disordered and problem gambling plan — patron/employee education, signage, training, underage prevention, reporting |
| OAC 3775-16 | [codes.ohio.gov/ohio-administrative-code/chapter-3775-16](https://codes.ohio.gov/ohio-administrative-code/chapter-3775-16) · [LII mirror](https://www.law.cornell.edu/regulations/ohio/title-3775/chapter-3775-16) | General Sports Gaming Proprietor Duties — advertising, accounts, promotions, responsible gaming |
| OAC 3775-16-03 | [codes.ohio.gov/ohio-administrative-code/rule-3775-16-03](https://codes.ohio.gov/ohio-administrative-code/rule-3775-16-03) · [LII mirror](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3775-16-03) | Sports gaming accounts — limits, closure, RG notice, identity verification |
| OAC 3775-16-08 | [codes.ohio.gov/ohio-administrative-code/rule-3775-16-08](https://codes.ohio.gov/ohio-administrative-code/rule-3775-16-08) · [LII mirror](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3775-16-08) | Sports gaming advertising — disclosures, prohibited content, under-21 depiction ban, cease-dissemination duty |
| OAC 3775-16-09 | [codes.ohio.gov/ohio-administrative-code/rule-3775-16-09](https://codes.ohio.gov/ohio-administrative-code/rule-3775-16-09) · [LII mirror](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3775-16-09) | Promotions and bonuses — clear/unambiguous T&Cs, active/expiry disclosure, anti-targeting |
| Ohio for Responsible Gambling — Pause Before You Play | [pausebeforeyouplay.org](https://pausebeforeyouplay.org/) | Current statewide RG campaign and standard-of-practice messaging (replaced "Get Set Before You Bet") |
| AGA Ohio Fact Sheet (2025) | [americangaming.org](https://www.americangaming.org/wp-content/uploads/2025/02/Ohio_AGA-Gaming-Regulatory-Fact-Sheet-2025.pdf) | Industry overview and regulatory summary |

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 21+ (all gambling products — casinos, racinos, and sports gaming) |
| **Legal framework** | State-licensed operators under ORC Chapter 3772 (casinos) and ORC Chapter 3775 (sports gaming) |
| **Online gambling** | Online sports betting legal (since January 1, 2023); online casino **NOT** legal |
| **Lottery** | Ohio Lottery Commission operates lottery and regulates racinos (VLT facilities) |

### Permitted products

| Product | Legal status | Regulator | Notes |
|---|---|---|---|
| Casino (slots, table games) | Legal | OCCC | 4 commercial casinos |
| Racinos (VLTs) | Legal | Ohio Lottery Commission | 7 racetracks with video lottery terminals; no table games |
| Sports betting (retail) | Legal | OCCC | At casinos, racinos, and standalone sportsbook locations |
| Sports betting (online) | Legal | OCCC | Mobile sports betting via licensed proprietors (since January 2023) |
| Online casino | **Not legal** | -- | Not authorized under current Ohio law |
| Online poker | **Not legal** | -- | Not authorized |
| Lottery | Legal | Ohio Lottery Commission | Traditional draw and scratch-off games |
| Horse racing (pari-mutuel) | Legal | Ohio State Racing Commission | Separate regulatory body |
| Charitable gaming | Legal (limited) | State/county | Bingo, raffles for qualified organizations |

### Ohio's casino facilities

| Type | Count | Examples |
|---|---|---|
| **Commercial casinos** | 4 | Hard Rock Casino Cincinnati, JACK Cleveland Casino, Hollywood Casino Columbus, Hollywood Casino Toledo |
| **Racinos** | 7 | MGM Northfield Park, Miami Valley Gaming, JACK Thistledown Racino, Scioto Downs, Belterra Park, Hollywood Gaming Mahoning Valley, Hollywood Gaming Dayton |

### Licensing model

Ohio uses a **constitutionally authorized licensing system**:

| License type | Description |
|---|---|
| **Casino operator** | Authorized by constitutional amendment ([Ohio Constitution Article XV, Section 6(C)](https://codes.ohio.gov/ohio-constitution/section-15.6)); limited to 4 locations |
| **Management company** | Companies managing casino operations |
| **Key employee** | Senior management and executives |
| **Casino gaming employee** | All staff directly involved in gaming operations; 21+ age requirement; 3-year license term (ORC 3772.131) |
| **Sports gaming proprietor** | Type A (at casino/racino), Type B (online), Type C (standalone retail) |
| **Gaming-related vendor** | Equipment manufacturers, distributors, service providers |

---

## Helpline

### Ohio Problem Gambling Helpline

Ohio operates its own state problem gambling helpline, separate from the NCPG national number:

| Field | Value |
|---|---|
| **Phone** | 1-800-589-9966 |
| **Text** | Text "4hope" to 741741 |
| **Chat** | [gamblinghelpohio.org](http://www.gamblinghelpohio.org/) |
| **Hours** | 24/7/365 |
| **Cost** | Free and confidential |
| **Operated by** | Funded by Ohio Department of Mental Health and Addiction Services (OhioMHAS) |

### Additional Ohio resources

| Resource | Contact | Description |
|---|---|---|
| **Problem Gambling Network of Ohio (PGNO)** | [pgnohio.org](https://www.pgnohio.org/) | Statewide advocacy, training, and professional development |
| **Ohio Gambling Telehealth Network (OGTN)** | [ohiogtn.org](https://www.ohiogtn.org/) | Free/low-cost telehealth counseling for problem gambling |
| **Time Out Ohio** | [timeoutohio.com](https://timeoutohio.com/) | Statewide voluntary exclusion program |
| **Ohio For Responsible Gambling (ORG)** | [pausebeforeyouplay.org](https://pausebeforeyouplay.org/) | Multi-agency RG coalition; runs the current "Pause Before You Play" campaign and Rate Your Risk self-assessment |
| **NCPG national helpline** | 1-800-GAMBLER / 1-800-MY-RESET | Also accepted; national network |

### Display rules

Under **OAC 3772-12-06**, casino operators must:

> Place signs around casino facilities containing information on gambling treatment and voluntary exclusion.

At VLT facilities (racinos), operators must:

> Display the problem gambling helpline throughout the facility.

For sports gaming (OAC 3775-16-08), all advertising must:

> Clearly and conspicuously include messages designed to prevent problem gambling and provide information about how to access resources related to problem gambling, including [the helpline].

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call 1-800-589-9966."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support -- 24/7. For any question about gambling.
> **Call 1-800-589-9966** | **Text 4hope to 741741** | **Chat at gamblinghelpohio.org**

Both meet the OAC 3772-12-06 requirement. The second version provides multiple contact options, frames the helpline as available for any question (not only crisis), and includes text and chat alternatives.

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Ohio's messaging approach

Ohio uses a combination of obligation-based requirements for casino signage and prescriptive requirements for sports gaming advertising:

| Regime | Requirement | Source |
|---|---|---|
| **Casino signage** | Obligation-based -- must place signs with gambling treatment info and voluntary exclusion, but no prescribed phrasing | OAC 3772-12-06 |
| **Problem gambling plan** | Prescriptive -- casino operators must submit detailed plan to OCCC for approval before implementation | OAC 3772-12-06 |
| **Sports gaming advertising** | Prescriptive -- specific content requirements including problem gambling prevention messages and helpline | OAC 3775-16-08 |

### Messaging regime summary

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| Casino signage | Obligation-based | Signs with gambling treatment info and voluntary exclusion details | OAC 3772-12-06 |
| Casino problem gambling plan | Standard-based | Must include advertising/outreach to educate public about disordered gambling | OAC 3772-12-06 |
| Sports gaming ads | Standard-based | Problem gambling prevention messages + helpline/NCPG number | OAC 3775-16-08 |
| Sports account closure | Standard-based | Notify patron of responsible gaming resources including helpline upon account closure | OAC 3775-16-03 |

### State-aligned standard of practice — Pause Before You Play

Beyond the regulations, Ohio operators are expected to harmonize with the state's active responsible gambling campaign. **Ohio for Responsible Gambling (ORG)** — the coalition of OCCC, the Ohio Lottery Commission, the Ohio State Racing Commission, and OhioMHAS — runs **"Pause Before You Play"** ([pausebeforeyouplay.org](https://pausebeforeyouplay.org/)), the current statewide RG campaign that **replaced the former "Get Set Before You Bet."** It is the de facto state-aligned RG voice and a useful soft-law anchor for {{PROGRAM_NAME}} messaging.

| Element | Detail |
|---|---|
| **Campaign** | Pause Before You Play (ORG) |
| **Core message** | "Sports are fast. Betting shouldn't be." — set limits, know the risks, and pause before you play |
| **Self-assessment** | Rate Your Risk |
| **Helpline alignment** | 1-800-589-9966 · Text 4hope to 741741 · 988 Suicide & Crisis Lifeline |
| **Youth/parent prevention** | OhioMHAS "Change the Game Ohio" sub-campaign |

The {{PROGRAM_NAME}} voice complements (rather than copies) this campaign: it shares the "know the risks, set your limits" frame while keeping the confident, peer Tier 1 tone. Do not echo the retired "Get Set Before You Bet" branding.

### Verbatim required statements

Ohio does not prescribe verbatim word-for-word statements. The requirements specify that messages must be included (standard-based), but the exact wording is left to the operator/proprietor.

### Obligation-based requirements

| Obligation | What must be communicated | Where | Source |
|---|---|---|---|
| Problem gambling prevention | Messages designed to prevent problem gambling | All sports gaming advertising | OAC 3775-16-08 |
| Helpline access | How to access resources related to problem gambling (including NCPG helpline or problem gambling helpline) | All sports gaming advertising | OAC 3775-16-08 |
| Treatment information | Information on gambling treatment and voluntary exclusion | Casino venue signage | OAC 3772-12-06 |
| Account closure notification | Available responsible gaming resources including helpline | Upon sports gaming account closure | OAC 3775-16-03 |
| Public education | Advertising/marketing to educate public about disordered and problem gambling | As part of approved problem gambling plan | OAC 3772-12-06 |

### On-brand integration

Because Ohio does not prescribe exact wording, operators have full flexibility to use {{PROGRAM_NAME}} messaging:

**Generic operator approach:**
> "Gambling problem? Call 1-800-589-9966."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-800-589-9966** | **Text 4hope to 741741** | gamblinghelpohio.org

**Rules for on-brand integration:**
1. Include problem gambling prevention messaging in all advertising
2. Include helpline access information (1-800-589-9966 or NCPG number)
3. Give all messaging visual dignity -- do not shrink to minimum size
4. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

### Ohio's prescriptive standard (sports gaming)

Ohio's sports gaming advertising rules are more prescriptive than Nevada's principles-based approach. OAC 3775-16-08 sets specific content requirements for all sports gaming advertising.

| Field | Value |
|---|---|
| **Primary regulation** | OAC 3775-16-08 (Sports Gaming Advertising) |
| **Casino advertising** | Governed by commission-approved problem gambling plan (OAC 3772-12-06) |
| **Approach** | Prescriptive -- specific content and disclosure requirements |
| **Enforcement** | OCCC actively enforces; operators have been warned/penalized for non-compliance |

### Required disclosures in sports gaming advertising

All sports gaming advertisements must:

| Requirement | Details | Source |
|---|---|---|
| **Problem gambling prevention message** | Clearly and conspicuously included | OAC 3775-16-08 |
| **Helpline information** | NCPG 24-hour helpline or problem gambling helpline | OAC 3775-16-08 |
| **Proprietor identity** | Disclose the sports gaming proprietor, mobile management services provider, or management services provider | OAC 3775-16-08 |
| **Conditions of play** | Cost to participate, nature of promotions, odds of winning | OAC 3775-16-08 |
| **Material conditions** | Any material conditions or limiting factors must be clearly and conspicuously specified | OAC 3775-16-08 |
| **Small-format ads** | If ad is not of sufficient size/duration for full information, must refer to a website/app that prominently includes the information within one click | OAC 3775-16-08 |

### Prohibited content

Advertisements must NOT:

| Prohibition | Source |
|---|---|
| Target individuals under 21 | OAC 3775-16-08 |
| Target individuals ineligible to participate in sports gaming | OAC 3775-16-08 |
| Target individuals with gambling problems | OAC 3775-16-08 |
| Target other vulnerable individuals | OAC 3775-16-08 |
| Promote irresponsible or excessive participation in sports gaming | OAC 3775-16-08 |
| Suggest that social, financial, or personal success is guaranteed by engaging in sports gaming | OAC 3775-16-08 |
| Depict any individual under the age of 21 — except live footage or images of athletes in eligible sporting events | OAC 3775-16-08 |
| Contain false, deceptive, or misleading information | OAC 3775-16-08 |

### Affirmative compliance duties

Beyond content rules, OAC 3775-16-08 imposes ongoing obligations on the proprietor:

| Duty | Detail | Source |
|---|---|---|
| **Cease dissemination** | Stop disseminating any advertisement upon discovering it is non-compliant, or when directed to do so by the executive director | OAC 3775-16-08 |
| **Approved helpline** | The required helpline may be the NCPG national helpline, Ohio's problem gambling helpline, or another free helpline approved by the executive director | OAC 3775-16-08 |

### Direct advertising requirements

| Requirement | Details | Source |
|---|---|---|
| **Opt-out method** | Each direct advertisement must clearly and conspicuously describe a method for opting out | OAC 3775-16-08 |
| **Electronic mail opt-out** | Must include electronic mail or a linked online website as opt-out method | OAC 3775-16-08 |
| **Opt-out timeline** | Proprietor must act upon opt-out request within 15 days | OAC 3775-16-08 |

### Casino advertising

Casino advertising is governed through the operator's disordered and problem gambling plan (OAC 3772-12-06), which must include:
- Procedures for advertising and marketing related to loyalty and rewards programs
- Advertising and outreach to educate the general public about disordered and problem gambling
- Plans approved by the OCCC before implementation

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Promotions and bonuses

### OAC 3775-16-09 — Promotions and bonuses (sports gaming)

Ohio regulates promotional and bonus offers as a distinct content surface from general advertising. Because odds boosts, sign-up offers, deposit matches, and similar promotions are core {{PROGRAM_NAME}} content, this rule governs a high-frequency touchpoint.

| Requirement | Details | Source |
|---|---|---|
| **Clear and unambiguous** | The rules of any promotion or bonus must be stated clearly and unambiguously | OAC 3775-16-09 |
| **T&Cs standard** | Terms and conditions must be full, accurate, concise, transparent, and not misleading | OAC 3775-16-09 |
| **Active/expiry disclosure** | Disclose the date and time the promotion becomes active and the date and time it expires | OAC 3775-16-09 |
| **No prohibited targeting** | Promotions must not target individuals under 21, ineligible persons, problem gamblers, or other vulnerable individuals | OAC 3775-16-09 |
| **Transaction-linked promos** | Promotions tied to non-gaming transactions may be offered only to persons verified as 21+ and not on the Ohio voluntary exclusion (Time Out Ohio) list | OAC 3775-16-09 |

### On-brand promotions integration

Ohio's Pillar 1 ("Open / no fine print") alignment is strongest here: the rule's "full, accurate, concise, transparent, and not misleading" T&C standard is the regulatory expression of the {{PROGRAM_NAME}} promise.

**Generic operator approach:**
> "Bet $5, get $200 in bonus bets! Terms apply."

**{{PROGRAM_NAME}} on-brand approach:**
> **$200 in bonus bets when you bet $5.** Here's the deal, in plain terms: bonus bets are non-withdrawable, must be used within 7 days, and this offer runs from 12:00 PM ET Oct 1 to 11:59 PM ET Oct 7. Must be 21+ and not on Time Out Ohio. [Full terms].

**Rules for on-brand promotions:**
1. State the promotion rules clearly and unambiguously — no buried conditions
2. Always disclose when the promotion starts and when it expires
3. Never target under-21, ineligible, problem-gambling, or vulnerable audiences
4. For transaction-linked offers, confirm 21+ and not-on-VEP eligibility before extending the offer

For the {{PROGRAM_NAME}} content compliance matrix covering promotional CTAs and social cards, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

### Time Out Ohio -- statewide voluntary exclusion program

Ohio operates a **unified statewide voluntary exclusion program** covering all forms of regulated gambling:

| Field | Value |
|---|---|
| **Program name** | Time Out Ohio |
| **Website** | [timeoutohio.com](https://timeoutohio.com/) |
| **Administered by** | Ohio Casino Control Commission and Ohio Lottery Commission (jointly) |
| **Duration options** | 1 year, 5 years, or lifetime |
| **Scope** | All 4 casinos, 7 racinos, and all sports gaming (online and retail) |
| **Enrollment methods** | Online (TimeOutOhio.com, 24/7); email (TimeOut@Ohio.gov); in-person at any casino or racino |
| **Identity verification** | Required at enrollment |
| **Reinstatement** | For 1-year and 5-year terms: exclusion does not end automatically -- patron must request removal after minimum term expires (OAC 3772-12-05) |
| **Source** | OAC 3772-12 (see subsection table below); [timeoutohio.com](https://timeoutohio.com/) |

### Governing VEP subsections (OAC 3772-12)

For citation completeness, the self-exclusion program is governed by these rule subsections:

| Rule | Subject | Source |
|---|---|---|
| **OAC 3772-12-01** | Definitions, purpose, and scope of the voluntary exclusion program | [codes.ohio.gov](https://codes.ohio.gov/ohio-administrative-code/rule-3772-12-01) · [LII](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3772-12-01) |
| **OAC 3772-12-02** | Application for voluntary exclusion | [codes.ohio.gov](https://codes.ohio.gov/ohio-administrative-code/rule-3772-12-02) · [LII](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3772-12-02) |
| **OAC 3772-12-03** | Responsibilities of voluntarily excluded individuals | [codes.ohio.gov](https://codes.ohio.gov/ohio-administrative-code/rule-3772-12-03) · [LII](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3772-12-03) |
| **OAC 3772-12-04** | Responsibilities of excluded entities/facilities | [codes.ohio.gov](https://codes.ohio.gov/ohio-administrative-code/rule-3772-12-04) · [LII](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3772-12-04) |
| **OAC 3772-12-05** | Removal from the voluntary exclusion program (reinstatement) | [codes.ohio.gov](https://codes.ohio.gov/ohio-administrative-code/rule-3772-12-05) · [LII](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3772-12-05) |
| **OAC 3772-12-07** | Prior voluntary exclusions | [codes.ohio.gov](https://codes.ohio.gov/ohio-administrative-code/rule-3772-12-07) · [LII](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3772-12-07) |

### Consequences of violation

If a Time Out Ohio participant is discovered at a banned facility:

| Consequence | Details |
|---|---|
| **Winnings forfeited** | Must surrender money or things of value converted into wagering instruments (jackpots, tickets, chips) and any winnings |
| **Forfeited funds** | Used to fund state problem gambling and addiction services |
| **Removal** | Removed from the facility immediately |
| **Criminal charges** | May be charged with criminal trespassing |

### Excluded-facility responsibilities (OAC 3772-12-04)

[OAC 3772-12-04](https://codes.ohio.gov/ohio-administrative-code/rule-3772-12-04) ([LII mirror](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3772-12-04) · verify in browser) sets the facility's duties toward excluded individuals:

| Obligation | Details | Timeline |
|---|---|---|
| **Keep VEP status current** | Maintain a system that identifies Ohio VEP participants and update enrollment status | At least once every 7 days |
| **Commission notification** | Immediately notify OCCC staff if an excluded individual is found on premises | Immediate |
| **Incident report** | Submit a written report (name, date of birth, circumstances, gaming activity) | Within 72 hours |
| **Denied-entry report** | Report the number of VEP participants denied entry or sign-in | Quarterly |
| **Follow the plan** | Comply with the approved disordered and problem gambling plan (OAC 3772-12-06) | Ongoing |

The duty to **cease direct marketing within 15 days** of an opt-out is codified for sports gaming in [OAC 3775-16-08(D)](https://codes.ohio.gov/ohio-administrative-code/rule-3775-16-08) ([LII mirror](https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-3775-16-08) · verify in browser) — see [Self-exclusion checklist](#self-exclusion) and [advertising-rules.md](advertising-rules.md). OAC 3772-12-04 does not impose a blanket no-credit or no-check-cashing rule; in fact it expressly permits collection of debts incurred before enrollment (subsection H).

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your play" | "Time Out Ohio" / "Voluntary Exclusion Program" | Never in Tier 1 -- use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" / "Voluntary exclusion" | "Time Out Ohio" | Legal documents, formal enrollment, support referrals |
| Website/app | "Need a break from gambling?" | "Time Out Ohio" | On the self-exclusion information page itself |
| Print/signage | "Need a break from gambling?" | "Time Out Ohio" | Venue self-exclusion information areas |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: What is Time Out Ohio?**
>
> Time Out Ohio is Ohio's statewide voluntary exclusion program, jointly run by the Ohio Casino Control Commission and Ohio Lottery Commission. Players can exclude themselves from all Ohio casinos, racinos, and sports gaming for 1 year, 5 years, or their lifetime. They can enroll online at TimeOutOhio.com, by email, or in-person at any casino or racino. If a player asks about it, explain the options and offer to help them get started. Use "take a break" in casual conversation, "Time Out Ohio" when referring to the specific program.

---

## Player protection tools

### Land-based gaming (OAC 3772-12-06)

Ohio's land-based player protection requirements are governed through the commission-approved **disordered and problem gambling plan** (OAC 3772-12-06). The rule mandates specific plan components; the table below maps each to the {{PROGRAM_NAME}} content surface it affects:

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Printed educational material — patrons** | Yes | OAC 3772-12-06 | Printed written material to educate patrons about disordered/problem gambling and the voluntary exclusion program (distinct from advertising/outreach) |
| **Printed educational material — employees** | Yes | OAC 3772-12-06 | Printed written material to educate employees about disordered/problem gambling and the voluntary exclusion program |
| **Problem gambling information posting** | Yes | OAC 3772-12-06 | Signs around casino with treatment info and voluntary exclusion details |
| **Sign language and graphics** | Yes | OAC 3772-12-06 | The plan must include examples of the language and graphics to be used on signs (relevant to on-brand signage design) |
| **Signage — treatment + VEP** | Yes | OAC 3772-12-06 | Signs with gambling-treatment and Ohio voluntary exclusion (Time Out Ohio) information. The rule does not prescribe a specific helpline number; displaying 1-800-589-9966 is operator best practice. |
| **Underage-prevention procedures** | Yes | OAC 3772-12-06 | Explicit procedures to prevent underage gambling, as a plan component (ties to the 21+ requirement) |
| **Employee training** | Yes | OAC 3772-12-06 | Training program with materials, periodic reinforcement, and certification |
| **Goals and timetables** | Yes | OAC 3772-12-06 | The plan must state its goals and a timetable for implementation |
| **Designated responsible position** | Yes | OAC 3772-12-06 | The plan must designate the position responsible for implementation |
| **VEP-participant confidentiality** | Yes | OAC 3772-12-06 | Procedures to protect the confidentiality of voluntary exclusion program participants |
| **Problem gambling plan** | Yes | OAC 3772-12-06 | Commission-approved plan required before implementation |
| **Quarterly reporting** | Yes | OAC 3772-12-06 | Quarterly updates and annual report on plan adherence |
| **Loyalty/rewards program procedures** | Yes | OAC 3772-12-06 | Specific procedures for disordered gambling behavior in rewards programs |
| **Self-exclusion** | Yes | OAC 3772-12 | Time Out Ohio -- see [self-exclusion section](#self-exclusion) |
| **Deposit limits** | N/A | -- | Not applicable for walk-in cash play |
| **Session time tracking** | No | -- | Not required; some operators offer voluntarily |

### Sports gaming (OAC 3775-16-03)

Ohio's sports gaming regulations require specific player protection tools:

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Deposit limits** | Yes | OAC 3775-16-03 | Sports gaming accounts must offer deposit limits |
| **Wager limits** | Yes | OAC 3775-16-03 | Sports gaming accounts must offer wager limits |
| **Time-based limits** | Yes | OAC 3775-16-03 | Sports gaming accounts must offer time-based limits |
| **Account activity summary** | Yes | OAC 3775-16-03 | On-demand access to past year; ability to request 5-year summary |
| **Account closure** | Yes | OAC 3775-16-03 | Readily accessible method via website/app or customer service |
| **RG notification on closure** | Yes | OAC 3775-16-03 | Responsible gaming resources and helpline provided upon account closure |
| **Self-exclusion** | Yes | OAC 3772-12 | Time Out Ohio |
| **Prohibited person blocking** | Yes | OAC 3775-16-03 | Must prevent prohibited persons (ORC 3775.13) from creating accounts or continuing to wager |
| **Identity verification** | Yes | OAC 3775-16-03 | Government-issued ID or multi-source authentication |

### {{PROGRAM_NAME}} tool messaging for Ohio

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit -- play on your terms. Takes 10 seconds." | Sports gaming (OAC 3775-16-03) |
| Wager limits | "Set a wager limit -- no surprises at the end of a session." | Sports gaming (OAC 3775-16-03) |
| Session limits | "Set a session reminder -- your dashboard, your rules." | Sports gaming (OAC 3775-16-03) |
| Self-exclusion | "Need a break from gambling? Time Out Ohio covers every casino, racino, and sportsbook in the state." | Both (OAC 3772-12) |
| Account closure | "Want to close your account? We'll make it easy -- and share some resources if you want them." | Sports gaming (OAC 3775-16-03) |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 21+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.united-states-ohio` |
| **`{{MIN_AGE}}` token value** | 21 |
| **Verification (casino/racino)** | Government-issued photo ID |
| **Verification (sports gaming)** | Digital or physical examination of government-issued ID (including verification software) or multi-source authentication via third-party and governmental databases |
| **Products with different ages** | None -- 21+ applies to all gambling in Ohio |
| **Statutory basis** | ORC 3772.99; ORC 3775 |

### Sports gaming account registration (OAC 3775-16-03)

Sports gaming proprietors must verify patron identity through:

| Step | Requirement | Source |
|---|---|---|
| **Identity verification** | Digital or physical examination of government-issued ID (including verification software), or multi-source authentication | OAC 3775-16-03 |
| **Age confirmation** | Patron must acknowledge that the legal age for sports gaming is 21 | OAC 3775-16-03 |
| **Account exclusivity** | Patron must acknowledge they are prohibited from allowing others to access/use their account | OAC 3775-16-03 |
| **Prohibited person check** | Must prevent individuals in categories under ORC 3775.13 from creating accounts | OAC 3775-16-03 |

### Age messaging

All collateral in Ohio must display `21+` age notice:

> "You must be 21+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `21+` for all Ohio-deployed content.

---

## AML/KYC

### FinCEN/BSA requirements

Ohio casinos are classified as **financial institutions** under the Bank Secrecy Act (BSA) and must comply with FinCEN regulations, the same as all US casinos:

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Currency Transaction Report (CTR)** | $10,000+ (single transaction or aggregate in 24 hours) | Player must provide ID; transaction reported to FinCEN |
| **Suspicious Activity Report (SAR)** | $5,000+ (suspicious transactions) | No direct player notification -- internal reporting; filed within 30 days (60 days if no suspect identified) |
| **Player identification (casino)** | $10,000+ cash transactions | Government-issued photo ID required |
| **Player identification (sports gaming)** | All accounts | Full identity verification per OAC 3775-16-03 |
| **BSA compliance program** | All casinos | Internal controls, independent testing, staff training, compliance officer |
| **Record keeping** | $3,000+ | Operator must record and retain transaction details for cash purchases of chips, TITO |

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "Federal law requires us to verify your identity for transactions of $10,000 or more."

**On-brand:**
> "Quick ID check -- it keeps your account secure and is required by federal law. If we ask about a large transaction, it's a standard process that applies to everyone at every casino in the US."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Ohio-specific adaptations.

| Category | Collateral | Ohio adaptation | Token/Value |
|---|---|---|---|
| **Digital** | Website footer | Ohio helpline: 1-800-589-9966 + on-brand RG message | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Set to 21+ | `{{MIN_AGE}}` = 21 |
| **Digital** | Sports gaming account | Deposit/wager/time limits offered; helpline on closure | OAC 3775-16-03 |
| **Digital** | Self-exclusion page | Link to Time Out Ohio (timeoutohio.com); explain statewide scope | -- |
| **Digital** | Deposit screen | Helpline + on-brand message; deposit limit option prominently displayed | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media bio | Include 1-800-589-9966 | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email footer | Helpline + on-brand RG message in every email | `{{HELPLINE_NUMBER}}` |
| **Digital** | Promo / bonus offer | Clear, unambiguous T&Cs; disclose active and expiry date/time; 21+ and not-on-VEP for transaction-linked offers | OAC 3775-16-09 |
| **Print** | Brochure | Ohio helpline (1-800-589-9966), 21+ notice, Time Out Ohio reference | All tokens |
| **Print** | Rack card | Helpline, on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Helpline + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | 1-800-589-9966, text 4hope to 741741, gamblinghelpohio.org | All helpline tokens |
| **Environmental** | Gaming areas | Treatment info + voluntary exclusion info per OAC 3772-12-06 | `{{HELPLINE_NUMBER}}` |
| **Environmental** | VLT facility (racino) | Problem gambling helpline throughout facility | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | On-brand RG message in rotation, helpline | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot end card | Helpline (3-second minimum recommended) + problem gambling prevention message | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Spoken helpline reference + problem gambling prevention message | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | Ohio helpline in all referral scripts; Time Out Ohio enrollment in scripts | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Add Time Out Ohio Q&A; update helpline to Ohio number | -- |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Ohio:

```yaml
# --- HELPLINES ---
helplines:
  united-states:
    ohio:
      number: "1-800-589-9966"
      text_number: "Text 4hope to 741741"
      chat_url: "gamblinghelpohio.org"
      website: "gamblinghelpohio.org"
      label: "Ohio Problem Gambling Helpline"
      hours: "24/7"
      cost: "Free"
      state_resource: "Problem Gambling Network of Ohio (PGNO)"
      state_website: "pgnohio.org"
      telehealth: "Ohio Gambling Telehealth Network (OGTN) — ohiogtn.org"
      vep: "Time Out Ohio — timeoutohio.com"
      notes: "Ohio operates its own state helpline separate from the NCPG national number. NCPG national numbers (1-800-GAMBLER, 1-800-MY-RESET) also accepted."

# --- LEGAL ---
legal:
  minimum_gambling_age:
    united-states-ohio: 21

# --- MANDATORY MESSAGING ---
messaging:
  mandatory:
    # ohio-general: (none — no verbatim requirement; OAC 3772-12-06 requires signs
    #   with gambling treatment info and voluntary exclusion, but does not prescribe
    #   exact wording)
    # ohio-sports-ads: Standard-based — must include problem gambling prevention
    #   messages and helpline per OAC 3775-16-08 but exact text is not prescribed
    # ohio-promotions: Standard-based — promo/bonus T&Cs must be clear, unambiguous,
    #   and not misleading, and disclose the active and expiry date/time per
    #   OAC 3775-16-09; no prescribed wording
```

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Ohio.

### Regulatory
- [ ] Identified OCCC as primary regulator and current legislation (ORC 3772, ORC 3775)
- [ ] Confirmed license requirements and status
- [ ] Verified legal gambling age: 21+
- [ ] Reviewed permitted products table (land-based casino, racino, sports betting; no online casino)
- [ ] Checked for pending regulatory changes (online casino bills pending but not passed)
- [ ] Identified deployment verticals: [ ] Land-based [ ] Sports betting [ ] Both

### Messaging
- [ ] Problem gambling prevention messages included in all sports gaming advertising
- [ ] Casino/racino signs with gambling-treatment and Ohio VEP information per OAC 3772-12-06; helpline in sports ads per OAC 3775-16-08
- [ ] Age notice (21+) on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Ohio values
- [ ] Conditions of play (cost, odds, material conditions) disclosed in sports ads

### Advertising
- [ ] Sports gaming advertising reviewed against OAC 3775-16-08
- [ ] Problem gambling prevention message and helpline in all sports ads
- [ ] Proprietor identity disclosed
- [ ] No targeting of under-21, ineligible, problem gamblers, or vulnerable individuals
- [ ] No depiction of anyone under 21 (except live athlete footage in eligible events)
- [ ] No false, deceptive, or misleading information
- [ ] No promotion of irresponsible play or guaranteed success
- [ ] Direct ads include opt-out method; electronic opt-outs honored within 15 days
- [ ] Small-format ads reference website/app with full info within one click
- [ ] Process in place to cease dissemination on non-compliance or executive-director direction
- [ ] Casino advertising per commission-approved disordered and problem gambling plan

### Promotions and bonuses
*Check only if running promotions or bonus offers (sports gaming).*
- [ ] Promotion/bonus rules stated clearly and unambiguously (OAC 3775-16-09)
- [ ] T&Cs full, accurate, concise, transparent, and not misleading
- [ ] Promotion active date/time and expiry date/time disclosed
- [ ] No targeting of under-21, ineligible, problem-gambling, or vulnerable audiences
- [ ] Transaction-linked promos offered only to 21+ persons not on Time Out Ohio

### Self-exclusion
- [ ] Time Out Ohio information available at all venues and on platforms
- [ ] VEP enrollment status checked and updated at least every 7 days (OAC 3772-12-04)
- [ ] OCCC notified immediately if excluded individual found on premises; written incident report within 72 hours (OAC 3772-12-04)
- [ ] Quarterly denied-entry reporting to OCCC (OAC 3772-12-04)
- [ ] Direct-marketing opt-outs actioned within 15 days (sports gaming, OAC 3775-16-08)
- [ ] Staff trained on Time Out Ohio enrollment and enforcement

### Player protection -- land-based
*Check only if deploying in land-based venues.*
- [ ] Disordered and problem gambling plan submitted to OCCC and approved
- [ ] Printed educational material for patrons AND employees provided
- [ ] Signs placed around casino with treatment info and voluntary exclusion
- [ ] Plan specifies sign language and graphics
- [ ] Explicit underage-prevention procedures included in the plan
- [ ] Plan states goals/timetables and designates the responsible position
- [ ] VEP-participant confidentiality procedures in place
- [ ] VLT facility (racino) displays helpline throughout
- [ ] Employee training program implemented with reinforcement and certification
- [ ] Quarterly updates and annual report submitted to OCCC
- [ ] Loyalty/rewards program procedures address disordered gambling

### Player protection -- sports gaming
*Check only if deploying on sports gaming platforms.*
- [ ] Deposit, wager, and time-based limits offered to patrons
- [ ] On-demand access to wagering activity summary (1-year and 5-year)
- [ ] Readily accessible account closure method
- [ ] Responsible gaming resources and helpline provided upon account closure
- [ ] Prohibited person blocking implemented (ORC 3775.13)
- [ ] Identity verification per OAC 3775-16-03

### Age verification
- [ ] Land-based: age verification at casino/racino entry
- [ ] Sports gaming: identity verification via government-issued ID or multi-source authentication

### Content
- [ ] All collateral adapted per collateral adaptation table
- [ ] Staff FAQ updated with Time Out Ohio Q&A
- [ ] Conversation scripts updated with Ohio helpline

### Governance
- [ ] `_brand.yml` updated with Ohio values (helpline, legal age)
- [ ] `Last verified` date set
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [US Overview](../README.md) | [Jurisdictions README](../../README.md)*
