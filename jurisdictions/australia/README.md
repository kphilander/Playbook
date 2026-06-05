---
content_type: jurisdiction-module
title: "Australia — Compliance Module"
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
game_type: [sports-betting, slots, blackjack, roulette, baccarat, keno]
audience: [general]
channel: [blog, in-app]
cultural_profile:
  voice: peer
  framing: individual
  humor: irreverent
  directness: blunt
  comfort: open
presentation:
  odds_format: decimal
  currency: aud
  sports_culture: afl-nrl-racing
  language: en-au
verticals: [land-based, interactive]
regulatory_approach: prescriptive
adaptation_status: base
adaptation_notes: |
  Australia is a separate-regimes jurisdiction. Online wagering is
  regulated FEDERALLY (ACMA under the Interactive Gambling Act 2001 plus
  the National Consumer Protection Framework); land-based gambling is
  regulated by STATE and TERRITORY governments. Online casino-style
  gaming and online in-play betting are ILLEGAL — never present
  Playbook online-casino collateral for the Australian market. Use AUD
  currency, decimal odds, and Australian English (licence, organisation,
  recognise). The seven mandated taglines and the National Gambling
  Helpline call to action are verbatim federal requirements for online
  wagering advertising. The land-based layer in this module is
  illustrated with New South Wales (NSW) only; a full national land-based
  build needs a per-state pass.
last_updated: 2026-06-05
---

# Australia — Compliance Module

> **Operator note**: This module covers the compliance requirements for deploying {{PROGRAM_NAME}} in Australia. Australia runs **two separate regulatory regimes**. Online wagering (sports and race betting, lotteries, keno) is regulated **federally** by the **Australian Communications and Media Authority (ACMA)** under the **Interactive Gambling Act 2001 (Cth)** and the **National Consumer Protection Framework for Online Wagering (NCPF)** — a package of 10 enumerated consumer-protection measures. Land-based gambling (casinos, pubs/clubs gaming machines, retail wagering, lotteries) is regulated **state by state**. The federal online layer is the primary focus of this module; the state land-based layer is documented as a clearly-marked secondary section using **New South Wales (NSW)** as the worked example.
>
> **The vertical trap**: Online casino-style gaming and online in-play (live) betting are **illegal** in Australia under the Interactive Gambling Act 2001. Only **pre-event** online sports and race wagering, and online lotteries and keno, are legal online. Land-based casinos are legal but state-licensed. **Never deploy Playbook online-casino / iGaming collateral for the Australian market.**
>
> **Verticals covered**: Online sports and race wagering (federal) | Land-based casino and gaming machines (state-regulated, NSW illustrative).
> *(If your deployment is online-wagering-only, the state land-based sections can be skipped. If your deployment is land-based-only, the federal online-wagering sections can be skipped — but read the regulatory-authority and helpline sections regardless.)*

> **Last verified**: 2026-06-05
> **Next review due**: 2026-09-05 *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Regime | Description |
|---|---|---|
| [Regulatory authority](#regulatory-authority) | Both | Federal ACMA + state regulators, how the split works |
| [Legal requirements](#legal-requirements) | Both | Permitted products, what is illegal online, 18+ |
| [Helpline](#helpline) | Both | National Gambling Helpline and display rules |
| [Messaging requirements](#messaging-requirements) | Online | Seven mandated taglines + call to action (verbatim) |
| [Advertising restrictions](#advertising-restrictions) | Both | Multi-layer ad rules; see [advertising-rules.md](advertising-rules.md) |
| [Self-exclusion](#self-exclusion) | Both | BetStop (online, national) + state land-based schemes |
| [Player protection — interactive](#player-protection--interactive) | Online | NCPF 10 measures, credit ban, activity statements |
| [Player protection — land-based](#player-protection--land-based) | Land-based | NSW venue obligations (illustrative) |
| [Age verification](#age-verification) | Both | 18+ nationwide; pre-verification for online |
| [AML/KYC](#amlkyc) | Both | AUSTRAC, AML/CTF Act customer verification |
| [Collateral adaptation](#collateral-adaptation) | Both | What to change across all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Both | Config values to add |
| [Compliance checklist](#compliance-checklist) | Both | Pre-launch verification |

---

## Regulatory authority

Australia has **no single gambling regulator**. Responsibility is split between the Commonwealth (federal) government and the eight states and territories.

| Field | Value |
|---|---|
| **Federal regulator (online wagering)** | Australian Communications and Media Authority (ACMA) |
| **Federal website** | [acma.gov.au](https://www.acma.gov.au) |
| **Federal policy owner** | Department of Social Services (DSS) — owns the NCPF |
| **Governing federal legislation** | Interactive Gambling Act 2001 (Cth) |
| **Federal framework** | National Consumer Protection Framework for Online Wagering (NCPF) — 10 measures |
| **State/territory regulators (land-based)** | One per state/territory (NSW used as the example below) |
| **Regulatory approach** | Prescriptive (NCPF 10 enumerated measures; verbatim-mandated taglines; minute-level live-sport ad timing) |

### How the split works

| Layer | Who regulates | What it covers | Key instruments |
|---|---|---|---|
| **Federal — online** | ACMA (enforcement); DSS (policy) | Online/phone sports and race wagering, online lotteries and keno; prohibition of illegal online services | Interactive Gambling Act 2001; NCPF National Policy Statement; Interactive Gambling Amendment (Credit and Other Measures) Act 2023; Broadcasting Services (Online Content Service Provider Rules) 2018 |
| **State — land-based** | State/territory regulator | Casinos, gaming machines (pokies), retail/on-course wagering, lotteries, keno venues | State gambling statutes (e.g. NSW Casino Control Act 1992; Gaming Machines Act 2001) |

### State/territory regulators (reference)

| State / Territory | Land-based regulator |
|---|---|
| **New South Wales** (illustrative) | NSW Independent Casino Commission (casinos); Liquor & Gaming NSW (gaming machines, wagering, lotteries) |
| Victoria | Victorian Gambling and Casino Control Commission (VGCCC) |
| Queensland | Office of Liquor and Gaming Regulation (OLGR) |
| Western Australia | Gaming and Wagering Commission of WA |
| South Australia | Consumer and Business Services (Liquor and Gambling) |
| Tasmania | Tasmanian Liquor and Gaming Commission |
| ACT | ACT Gambling and Racing Commission |
| Northern Territory | NT Racing Commission / Licensing NT (hosts most online wagering licensees) |

> **Note on online licensing**: Although ACMA enforces the *conduct* rules federally, online wagering operators are *licensed* by a state or territory — in practice most are licensed in the **Northern Territory**. The NCPF standardises consumer-protection conduct across all of them.

### The NCPF 10 measures

The National Consumer Protection Framework for Online Wagering is the prescriptive heart of the federal online regime. The 10 measures:

| # | Measure | Status |
|---|---|---|
| 1 | Prohibition on lines of credit | In force (credit/credit-card/digital-currency ban commenced 11 June 2024) |
| 2 | Restrictions on payment methods (no credit cards / digital currency) | In force (11 June 2024) |
| 3 | Voluntary opt-out pre-commitment scheme | In force |
| 4 | Customer-set deposit limits | In force |
| 5 | Restriction of inducements (no sign-up inducements that are publicly advertised) | In force |
| 6 | Consistent gambling messaging (seven mandated taglines + call to action) | In force (30 March 2023) |
| 7 | Staff training | In force (30 March 2023) |
| 8 | Activity statements (monthly) | In force |
| 9 | National Self-Exclusion Register (BetStop) | In force (launched 21 August 2023) |
| 10 | Account/customer verification before betting | Strengthened (verification before account use, 29 September 2024) |

### Upcoming changes

| Change | Status | Impact |
|---|---|---|
| Total ban on online gambling advertising (Murphy review recommendation) | **Pending — NOT law as of June 2026** | Frequently reported; track as a possible future reform. Do **not** treat as a current requirement. |
| Possible further restrictions on inducements and bonus advertising | Under policy discussion | Monitor DSS / ACMA announcements |

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 18+ nationwide (all products, all states) |
| **Legal framework** | Federal Interactive Gambling Act 2001 (online) + state gambling statutes (land-based) |
| **Online gambling** | Partly legal: online **pre-event** sports/race wagering, online lotteries, online keno are legal. Online **casino-style gaming** and online **in-play (live) betting** are **illegal**. |
| **Land-based gambling** | Legal, state-licensed (casinos, gaming machines, retail wagering, lotteries) |

### Permitted products table

| Product | Vertical | Legal status | Regulator | Notes |
|---|---|---|---|---|
| Sports wagering (pre-event) | Interactive | Legal | ACMA (conduct) + state licence | Live/in-play betting online is illegal |
| Race wagering (pre-event) | Interactive | Legal | ACMA (conduct) + state licence | Racing is the largest online wagering category |
| Lotteries | Interactive | Legal | ACMA (conduct) + state licence | Credit ban does not apply to lotteries |
| Keno | Interactive | Legal | ACMA (conduct) + state licence | Credit ban does not apply to keno |
| Online casino (slots, table games) | Interactive | **Illegal** | Prohibited under IGA 2001 | A "prohibited interactive gambling service" |
| Online in-play / live betting | Interactive | **Illegal** | Prohibited under IGA 2001 | Live bets must be placed by phone or in person, not online |
| Land-based casino | Land-based | Legal | State (e.g. NSW Independent Casino Commission) | Limited-licence / monopoly per state |
| Gaming machines (pokies) | Land-based | Legal | State (e.g. Liquor & Gaming NSW) | In pubs and clubs as well as casinos |
| Retail / on-course wagering | Land-based | Legal | State (e.g. Liquor & Gaming NSW) | TAB and on-course bookmakers |

### Key regulatory notes

- The defining feature of Australia is the **federal-online / state-land-based split**. A {{PROGRAM_NAME}} deployment must be scoped to the correct regime.
- The Interactive Gambling Act 2001 makes it an offence to **provide** a prohibited interactive gambling service to customers in Australia, and to **advertise** one.
- The NCPF standardises online-wagering **conduct** nationally even though **licensing** is done state by state.
- {{PROGRAM_NAME}} content for Australia must never present online casino or online live-betting products, and must never tag online-casino verticals in collateral.

---

## Helpline

### National Gambling Helpline

| Field | Value |
|---|---|
| **Name** | National Gambling Helpline |
| **Phone** | 1800 858 858 |
| **Website** | [gamblinghelponline.org.au](https://www.gamblinghelponline.org.au) |
| **Hours** | 24/7, every day |
| **Languages** | English (interpreter service available) |
| **Cost** | Free |
| **Scope** | National; routes callers to the relevant state/territory service |

### Display rules

The National Gambling Helpline call to action is **mandated in the consistent gambling messaging** for online wagering (NCPF Measure 6). State land-based rules also require helpline display, set by each state.

#### Interactive display (federal — primary)

The prescribed **call to action** must accompany online wagering advertising and relevant promotional material, embedding the National Gambling Helpline **1800 858 858** and **gamblinghelponline.org.au**. This is part of the same consistent-messaging requirement that mandates the seven taglines.

#### Land-based display (state — NSW illustrative)

NSW venues with gaming machines and casinos must display responsible-gambling signage and counselling/helpline contact information at gambling areas, near ATMs/cash facilities, and at entrances (under the NSW Gaming Machines Act 2001 and associated regulation, and the Casino Control Act 1992). Exact placement and wording are set by Liquor & Gaming NSW / the NSW Independent Casino Commission.

### On-brand helpline display

**Bare compliance** (what most operators do):
> "Gambling Help 1800 858 858. Gamble responsibly."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support — 24/7, no judgement. For any question about gambling.
> **Call 1800 858 858** | **Chat at gamblinghelponline.org.au**

Both meet the requirement. The second frames the helpline as available for any question (not only crisis) and uses {{PROGRAM_NAME}}'s inviting tone. Note that the mandated **call to action wording itself** must still appear as prescribed in online wagering advertising — the on-brand version surrounds it, it does not replace it.

*Pattern from: [Messaging Framework — Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Consistent gambling messaging (verbatim — online wagering)

Australia's online-wagering messaging is **verbatim and prescriptive**. Under NCPF Measure 6 (Consistent Gambling Messaging), online wagering advertising must rotate **seven mandated taglines in equal proportion** and carry a prescribed **call to action**. These replaced the old "Gamble Responsibly" message from **30 March 2023**.

### Messaging regime summary

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| Online wagering advertising | **Verbatim** | One of seven mandated taglines (equal rotation) + call to action with National Gambling Helpline | NCPF National Policy Statement, Part 8 (Consistent Gambling Messaging) |
| Land-based venue signage (NSW) | Obligation-based | RG and counselling information displayed in gambling areas | NSW Gaming Machines Act 2001; Casino Control Act 1992 |

**Obligation types explained:**
- **Verbatim** — exact prescribed text that must appear word-for-word
- **Obligation-based** — must communicate described information; wording flexible

### Verbatim required statements — the seven taglines

The seven mandated taglines (online wagering) are:

| # | Tagline |
|---|---|
| 1 | Chances are you're about to lose. |
| 2 | Think. Is this a bet you really want to place? |
| 3 | What are you prepared to lose today? Set a deposit limit. |
| 4 | What's gambling really costing you? |
| 5 | You win some. You lose more. |
| 6 | Imagine what you could be buying instead. |
| 7 | What's gambling really costing you? Reach out. |

Each must appear **in equal rotation** (no single tagline favoured), accompanied by the prescribed **call to action** carrying the National Gambling Helpline (1800 858 858 / gamblinghelponline.org.au).

> **Verify before merge**: the exact list and current wording of the seven taglines and the call to action should be confirmed against the live DSS guidance (`acma-cgm`) and the relevant state Consistent Gambling Messaging notice before publishing any Australian advertising. The taglines were independently verbatim-verified via a registered Western Australian Consistent Gambling Messaging Notice during research; the DSS explainer pages were temporarily unreachable from the research environment.

### On-brand integration

Because the taglines and call to action are **verbatim**, they appear word-for-word; {{PROGRAM_NAME}} voice is expressed in the surrounding content, never by altering the mandated text.

**Bare compliance:**
> "You win some. You lose more. Gamble responsibly. Call 1800 858 858."

**{{PROGRAM_NAME}} on-brand version:**
> **You win some. You lose more.** That's not pessimism — it's the maths. Know the odds before you play, set a deposit limit, and keep it fun.
> Free, confidential support 24/7: **1800 858 858** | **gamblinghelponline.org.au**

The mandated tagline ("You win some. You lose more.") and the helpline call to action appear exactly as required; the {{PROGRAM_NAME}} framing sits around them.

**Rules for on-brand integration:**
1. Verbatim taglines and call to action appear word-for-word — never paraphrase
2. Maintain equal rotation across the seven taglines — do not over-use a favourite
3. Give the mandated messaging visual dignity — do not shrink to minimum size
4. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework — Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

Australia's online-wagering advertising regime is **multi-layer**: federal prohibition of illegal services, federal live-sport timing rules, the consistent-messaging mandate, inducement restrictions, plus state and broadcast codes.

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| No advertising of illegal services | Prohibited interactive gambling services (online casino, online in-play) and unlicensed services must not be advertised | Interactive | Interactive Gambling Act 2001 Part 7A |
| Live-sport timing ban | No gambling ads during live sport 5:00 am – 8:30 pm and 5 min before to 5 min after play | Interactive | Broadcasting Services (Online Content Service Provider Rules) 2018 (F2018L01203) Pts 3-4, s17 |
| Odds-promotion ban | No commentator/representative odds promotion 30 min either side of play | Interactive | F2018L01203 |
| Consistent gambling messaging | Seven taglines (equal rotation) + call to action | Interactive | NCPF Part 8 |
| Inducement restrictions | No publicly advertised sign-up inducements | Interactive | NCPF Measure 5 |

### Channel-specific rules

| Channel | Key restrictions | Verticals | Source |
|---|---|---|---|
| Broadcast (TV/radio) | Live-sport whistle-to-whistle restrictions; messaging required | Interactive | F2018L01203; broadcaster codes |
| Digital / online | OCSP Rules apply to online content services; messaging required; no illegal-service ads | Interactive | F2018L01203; IGA 2001 Pt 7A |
| Print | Messaging required; no illegal-service ads | Interactive | NCPF Part 8; IGA 2001 Pt 7A |
| Direct marketing | Excluded persons (BetStop) must not receive electronic, telemarketing, or direct-mail marketing | Interactive | IGA 2001 Part 7B |
| In-venue | State signage and RG-message rules (NSW illustrative) | Land-based | NSW Gaming Machines Act 2001 |
| Sponsorship | Live-sport and broadcast restrictions apply to gambling sponsorship visibility | Interactive | F2018L01203 |

### Prohibited content

- Any advertising of online casino-style gaming or online in-play betting (these services are illegal)
- Gambling advertising during live sport within the restricted hours/windows
- Commentator or representative odds promotion within 30 minutes either side of play
- Publicly advertised sign-up inducements
- Marketing directed at BetStop-registered (self-excluded) persons

### Required disclosures

- One of the seven mandated taglines (equal rotation) in online wagering advertising
- The prescribed call to action carrying the National Gambling Helpline (1800 858 858 / gamblinghelponline.org.au)
- 18+ age context

For the full channel-by-channel breakdown, prohibited-content table, required-disclosures table, and the {{PROGRAM_NAME}} content compliance matrix, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

Australia has a **national online self-exclusion register (BetStop)** plus **state-by-state land-based** schemes. These are separate systems.

### Interactive self-exclusion — BetStop (national)

| Field | Value |
|---|---|
| **Program name** | BetStop — the National Self-Exclusion Register |
| **Website** | [betstop.gov.au](https://www.betstop.gov.au) (administered via ACMA) |
| **Scope** | All licensed Australian online and phone wagering services (single national registration) |
| **Duration options** | 3 months, 6 months, 12 months, or lifetime |
| **Enrollment** | Online or by phone; identity-verified |
| **Account action** | Providers must not provide the service to a registered person and must not open an account for them |
| **Marketing cessation** | Providers must not send electronic, telemarketing, or direct-mail marketing to registered persons |
| **Minimum exclusion period** | 3 months |
| **Penalty for breach** | Civil penalty of 750 penalty units for providing a service to a registered person |
| **Source** | Interactive Gambling Act 2001 (Cth) Part 7B; National Self-Exclusion Register Act 2019; National Self-Exclusion Register (Indexation) Rules |

### Land-based self-exclusion (state — NSW illustrative)

| Field | Value |
|---|---|
| **Program** | NSW venue / multi-venue self-exclusion (e.g. via registered providers and venue schemes) |
| **Scope** | NSW gaming venues and casinos (separate from BetStop) |
| **Duration options** | Set by the scheme (commonly 3, 6, 12 months, or longer) |
| **Enrollment** | In-person at the venue or via a self-exclusion provider |
| **Source** | NSW Gaming Machines Act 2001; Casino Control Act 1992 |

> **Skippable**: If your deployment is **online-wagering-only**, the land-based self-exclusion subsection can be skipped. If your deployment is **land-based-only**, BetStop does not apply to you — but you should still signpost it where customers may also gamble online.

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Step away" | BetStop / "Self-exclusion" | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" | BetStop | Formal enrollment, support referrals, legal copy |
| Staff training | Both | BetStop / Self-exclusion | When explaining the register and procedures |
| Website/app | "Need a break from betting?" | "Register with BetStop" | On the self-exclusion information page |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../collateral/customer-service/staff-faq.md):

> **Q: How does self-exclusion work in Australia?**
>
> For **online and phone betting**, Australia has a national register called **BetStop**. A person registers once at betstop.gov.au and is excluded from **every** licensed Australian online and phone wagering service for 3, 6, or 12 months, or for life. Once they are registered, operators must not let them bet, must not open an account for them, and must not send them marketing. For **land-based venues**, each state runs its own venue and multi-venue self-exclusion schemes (in NSW these operate under state gaming law) — these are separate from BetStop.
>
> If a player asks, explain both options based on how they bet. In casual conversation say "take a break"; use "self-exclusion" or "BetStop" when referring to the formal register.

---

## Player protection — interactive

*Skip this section if your deployment is land-based only.*

Online wagering player protection is governed by the **NCPF 10 measures** plus the Interactive Gambling Act.

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Customer-set deposit limits | Yes | Providers must offer deposit limits (NCPF Measure 4) | NCPF National Policy Statement |
| Opt-out pre-commitment | Yes | Scheme must actively prompt customers to set limits (NCPF Measure 3) | NCPF National Policy Statement |
| Credit / credit-card / digital-currency ban | Yes | Must not provide or facilitate credit, nor accept credit cards or digital currency, from customers in Australia. Small providers (< AUD 30M turnover) exempt; ban does not apply to lotteries/keno | Interactive Gambling Act 2001 s15C (commenced 11 June 2024) |
| Monthly activity statements | Yes | Regular (monthly) statements showing wins, losses and net position, with a link to support services | NCPF Measure 8 |
| Consistent gambling messaging | Yes | Seven taglines + call to action | NCPF Measure 6 |
| Staff training | Yes | Appropriate training + annual refresher | NCPF Measure 7 |
| Self-exclusion (BetStop) | Yes | National register; must not provide service or marketing to registered persons | IGA 2001 Part 7B |
| Account/customer verification | Yes | Age and identity verified before the account can be used (strengthened 29 September 2024) | NCPF Measure 10; AML/CTF Act 2006 |
| No publicly advertised inducements | Yes | Restriction on sign-up inducements (NCPF Measure 5) | NCPF National Policy Statement |

### {{PROGRAM_NAME}} tool messaging — interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit — bet on your terms. Takes 10 seconds." | NCPF Measure 4 |
| Pre-commitment prompt | "Before you start: what are you happy to spend today? Set it once, we'll hold you to it." | NCPF Measure 3 |
| Monthly activity statement | "Your month in numbers — wins, losses, where you landed. No surprises." | NCPF Measure 8 |
| BetStop | "Need a longer break? BetStop steps you away from every Australian betting site at once." | IGA 2001 Part 7B |

---

## Player protection — land-based

*Skip this section if your deployment is online-wagering-only.*

Land-based player protection is set by each **state**. The requirements below are illustrated with **New South Wales**; other states differ and would need their own pass.

### Required tools and obligations (NSW illustrative)

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| RG information / signage | Yes | Responsible-gambling and counselling information displayed in gambling areas | NSW Gaming Machines Act 2001 |
| Helpline display | Yes | Gambling Help / National Gambling Helpline contact at gambling areas and cash facilities | NSW Gaming Machines Act 2001 |
| Self-exclusion | Yes | Venue and multi-venue self-exclusion available | NSW Gaming Machines Act 2001; Casino Control Act 1992 |
| Staff responsible-conduct training | Yes | Gaming staff must complete responsible-conduct-of-gambling training | NSW Gaming Machines Act 2001 |
| Cash-facility / ATM restrictions | Yes | Limits on ATM placement and cash access in gaming areas | NSW gaming machine regulation |

### {{PROGRAM_NAME}} tool messaging — land-based (NSW)

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Self-exclusion info | "Need a break? Talk to any staff member — they can help you step away, no judgement." | NSW Gaming Machines Act 2001 |
| Helpline display | "Free, confidential support — 24/7. Call 1800 858 858." | NSW Gaming Machines Act 2001 |
| RG information | "Know your game. Set a limit before you start." | NSW Gaming Machines Act 2001 |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 18+ nationwide (all products, all states) |
| **`_brand.yml` key** | `legal.minimum_gambling_age.australia` |
| **`{{MIN_AGE}}` token value** | 18 |
| **Statutory basis** | Interactive Gambling Act 2001 s8B (online); state gambling statutes (land-based); AML/CTF Act 2006 (verification) |

### Interactive verification (federal)

| Requirement | Details | Source |
|---|---|---|
| **Registration requirements** | Customer age and identity must be verified before the betting account can be used | NCPF Measure 10; AML/CTF Act 2006 |
| **Verification window** | Pre-verification — verification before account use (strengthened 29 September 2024) | NCPF Measure 10 |
| **Verification method** | Identity verification under the AML/CTF Act customer-verification rules | AML/CTF Act 2006 |

### Land-based verification (state — NSW illustrative)

| Requirement | Details | Source |
|---|---|---|
| **Method** | ID check; minors not permitted in gaming areas / casino | NSW Casino Control Act 1992; Gaming Machines Act 2001 |
| **Acceptable ID** | Government-issued photo ID (driver licence, passport, proof-of-age card) | State practice |

### Age messaging

All collateral in Australia must display `18+` age context:

> "You must be 18+ to gamble."

---

## AML/KYC

### Regulatory framework

Australian gambling operators are subject to the **Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth)** (AML/CTF Act), regulated by **AUSTRAC**. Customer identity verification under this Act underpins the NCPF account-verification measure.

| Requirement | Details | Source |
|---|---|---|
| **AML authority** | AUSTRAC | AML/CTF Act 2006 |
| **Customer verification** | Verify customer identity before providing designated services; underpins NCPF pre-verification | AML/CTF Act 2006 |
| **Reporting** | Threshold transaction reports and suspicious matter reports to AUSTRAC | AML/CTF Act 2006 |
| **Player-facing impact** | Customers must complete identity verification before they can bet online | NCPF Measure 10; AML/CTF Act 2006 |

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required for everyone before you can bet. Takes about 2 minutes."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Australia-specific adaptations. **Online casino / iGaming collateral is excluded — those products are illegal in Australia.**

| Category | Collateral | Verticals | Australia adaptation | Token/Value |
|---|---|---|---|---|
| **Digital** | Website footer | Both | National Gambling Helpline 1800 858 858 + mandated tagline rotation (online) + 18+ | `{{HELPLINE_NUMBER}}` |
| **Digital** | Wagering account / app | Interactive | Deposit-limit prompt, pre-commitment, monthly statement link, BetStop link, 18+ | `{{MIN_AGE}}` = 18 |
| **Digital** | Email footer | Both | Helpline + 18+ + on-brand RG message; suppress to BetStop-registered persons | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media | Interactive | Helpline + 18+; no publicly advertised inducements | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | Both | Helpline, 18+, BetStop reference | All tokens |
| **Print** | Rack card | Land-based | Helpline, on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Land-based | Helpline + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | Both | 1800 858 858, gamblinghelponline.org.au, betstop.gov.au | All helpline tokens |
| **Environmental** | Venue signage | Land-based | 18+ age notice, helpline, RG info (state rules, NSW illustrative) | `{{MIN_AGE}}`, `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | Land-based | On-brand RG message in rotation, helpline | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot | Interactive | Mandated tagline + call to action; live-sport timing restrictions apply | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Interactive | Spoken helpline + mandated messaging | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Pre-roll | Interactive | Mandated tagline + call to action overlay | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Conversation scripts | Both | Helpline + BetStop enrollment guidance | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Both | Add Australia self-exclusion Q&A (BetStop + state) | -- |

### Key differences from other jurisdictions

| Area | Australia | United Kingdom | Nevada |
|---|---|---|---|
| **Online casino** | **Illegal** | Legal | Not legal |
| **Online in-play betting** | **Illegal** | Legal | Legal (mobile sports) |
| **Mandatory statement** | Seven verbatim taglines + call to action (online) | None (obligation-based) | Wagering accounts: prescribed text |
| **Helpline** | National Gambling Helpline 1800 858 858 | GamCare 0808 8020 133 | NCPG 1-800-522-4700 |
| **Self-exclusion** | BetStop (national online) + state land-based | GAMSTOP (national remote) + premises | Property-by-property |
| **Credit** | Credit / credit-card / digital-currency ban | Credit-card ban (2020) | Operator discretion |
| **Regulatory split** | Federal online / state land-based | Single national | Single state |
| **Odds format** | Decimal | Decimal / fractional | American |
| **Currency** | AUD | GBP | USD |
| **Language** | Australian English | British English | American English |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Australia:

```yaml
# ─── HELPLINES ───────────────────────────────
helplines:
  australia:
    number: "1800 858 858"
    website: "www.gamblinghelponline.org.au"
    label: "National Gambling Helpline"
    hours: "24/7"

# ─── LEGAL ───────────────────────────────────
legal:
  minimum_gambling_age:
    australia: 18

# ─── SELF-EXCLUSION ──────────────────────────
self_exclusion:
  australia:
    name: "BetStop"
    url: "https://www.betstop.gov.au"
    scope: "All licensed Australian online and phone wagering services"
    durations:
      - "3 months"
      - "6 months"
      - "12 months"
      - "lifetime"

# ─── MESSAGING ───────────────────────────────
messaging:
  mandatory:
    # Online wagering: seven mandated taglines (equal rotation) + call to action.
    # Verbatim requirement — wire the current approved wording for your licence.
    australia-wagering: "(seven mandated taglines + National Gambling Helpline call to action — see module)"
```

See [`_brand-australia.yml`](_brand-australia.yml) for the full set of Australia config overrides.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Australia.

### Regulatory
- [ ] Confirmed deployment regime: [ ] Online wagering (federal) [ ] Land-based (state) [ ] Both
- [ ] Confirmed ACMA as the federal online-wagering conduct regulator
- [ ] Identified the relevant state/territory land-based regulator (if land-based)
- [ ] Reviewed Interactive Gambling Act 2001 and NCPF 10 measures
- [ ] Verified legal gambling age: 18+ nationwide
- [ ] Confirmed online casino and online in-play betting are NOT offered (illegal)
- [ ] Tracked the pending total-ad-ban reform (NOT law — monitor only)

### Messaging
- [ ] Online: seven mandated taglines wired in equal rotation
- [ ] Online: prescribed call to action with National Gambling Helpline present
- [ ] Current tagline/CTA wording confirmed against live DSS/state notice
- [ ] Land-based: state RG signage requirements met (NSW illustrative)
- [ ] 18+ age context on all player-facing content
- [ ] Australian English spelling used throughout (licence, organisation, recognise)
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Australia values

### Advertising
- [ ] No advertising of illegal services (online casino / online in-play)
- [ ] Live-sport timing restrictions observed (whistle-to-whistle)
- [ ] No commentator/representative odds promotion 30 min either side of play
- [ ] No publicly advertised sign-up inducements
- [ ] Mandated messaging present in all online wagering ads
- [ ] Advertising reviewed per [advertising-rules.md](advertising-rules.md)

### Self-exclusion
- [ ] Online: BetStop integration operational; registered persons cannot bet or open accounts
- [ ] Online: no electronic/telemarketing/direct-mail marketing to BetStop-registered persons
- [ ] Land-based: state venue / multi-venue self-exclusion available (if land-based)
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language
- [ ] Staff FAQ updated with Australia self-exclusion Q&A (BetStop + state)

### Player protection — interactive
*Check only if deploying online wagering.*
- [ ] Customer-set deposit limits offered (NCPF Measure 4)
- [ ] Opt-out pre-commitment scheme prompts customers to set limits (NCPF Measure 3)
- [ ] Credit / credit-card / digital-currency ban enforced (IGA s15C; small-provider exemption noted)
- [ ] Monthly activity statements provided with support link (NCPF Measure 8)
- [ ] Staff training + annual refresher in place (NCPF Measure 7)
- [ ] Account/customer verification before account use (NCPF Measure 10)

### Player protection — land-based
*Check only if deploying in venues (NSW illustrative).*
- [ ] RG information / signage posted in gambling areas
- [ ] Helpline displayed at gambling areas and cash facilities
- [ ] Responsible-conduct-of-gambling staff training completed
- [ ] Cash-facility / ATM restrictions observed

### Age verification
- [ ] Online: identity and age verified before account use (NCPF Measure 10; AML/CTF Act)
- [ ] Land-based: ID checks; minors excluded from gaming areas

### AML/KYC
- [ ] AUSTRAC obligations reviewed (AML/CTF Act 2006)
- [ ] Customer identity verification operational before betting
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice

### Content
- [ ] No online-casino / iGaming collateral used (illegal vertical)
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] Australian English spelling and AUD currency context
- [ ] Decimal odds format used
- [ ] Staff FAQ and conversation scripts updated with Australia references

### Governance
- [ ] `_brand.yml` updated with Australia values (helpline, age, self-exclusion, messaging)
- [ ] `_brand-australia.yml` reviewed
- [ ] `Last verified` date set on this module (2026-06-05)
- [ ] `Next review due` date set (2026-09-05)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [Australia config overrides](_brand-australia.yml) | [Advertising rules](advertising-rules.md) | [Messaging Framework — Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../collateral/customer-service/staff-faq.md) | [Governance](../../brand-book/08-governance.md) | [Jurisdictions README](../README.md)*
