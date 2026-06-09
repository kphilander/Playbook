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
  Australia is a federation. Gambling is regulated PRIMARILY by the
  eight STATES and TERRITORIES — each has its own regulator, its own
  gambling Act, and its own responsible-gambling code of practice,
  self-exclusion scheme, venue signage rules, and staff-training
  requirements. A narrower FEDERAL overlay (ACMA under the Interactive
  Gambling Act 2001 plus the National Consumer Protection Framework)
  governs ONLINE WAGERING specifically — what is legal online, and a
  set of national consumer-protection measures. Even online wagering is
  LICENSED at state/territory level: most of Australia's online
  corporate bookmakers are licensed in the Northern Territory. Online
  casino-style gaming and online in-play betting are ILLEGAL — never
  present Playbook online-casino collateral for the Australian market.
  Use AUD currency, decimal odds, and Australian English (licence,
  organisation, recognise). The seven mandated taglines and the
  National Gambling Helpline call to action are verbatim requirements
  (federal consistent-messaging) for online wagering advertising; each
  platform draws from its own permitted subset, rotated equally over 12
  months. The state/territory layer is the spine of this module; New
  South Wales (NSW) and Victoria (VIC) are presented as worked examples
  of the common "own Act + own RG code of practice" pattern. A full
  national build still needs a per-state pass.
last_updated: 2026-06-08
---

# Australia — Compliance Module

> **Operator note**: This module covers the compliance requirements for deploying {{PROGRAM_NAME}} in Australia. **Australia is a federation, and gambling is regulated primarily by the eight states and territories.** Each one has its own regulator, its own gambling Act, and its own responsible-gambling code of practice, self-exclusion scheme, venue-signage rules, and staff-training requirements. Land-based gambling (casinos, pubs/clubs gaming machines, retail wagering, lotteries) sits entirely in this state/territory layer. A narrower **federal overlay** — the **Australian Communications and Media Authority (ACMA)** under the **Interactive Gambling Act 2001 (Cth)** plus the **National Consumer Protection Framework for Online Wagering (NCPF)** — governs **online wagering** specifically: it sets what is legal online and a package of national consumer-protection measures. Even online wagering is **licensed** at state/territory level (most online corporate bookmakers are licensed in the **Northern Territory**). The state/territory layer is the spine of this module; the federal online overlay is documented as a clearly-marked second layer.
>
> **The vertical trap**: Online casino-style gaming and online in-play (live) betting are **illegal** in Australia under the Interactive Gambling Act 2001. Only **pre-event** online sports and race wagering, and online lotteries and keno, are legal online. Land-based casinos are legal but state-licensed. **Never deploy Playbook online-casino / iGaming collateral for the Australian market.**
>
> **Verticals covered**: Land-based casino and gaming machines (state/territory-regulated) | Online sports and race wagering (state/territory-licensed, federally overlaid). NSW and Victoria are used as worked examples of the state layer.
> *(If your deployment is land-based-only, the federal online-wagering overlay sections can be skipped. If your deployment is online-wagering-only, the land-based state-detail sections can be skipped — but read the regulatory-authority and helpline sections regardless.)*

> **Last verified**: 2026-06-08
> **Next review due**: 2026-09-08 *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Layer | Description |
|---|---|---|
| [Regulatory authority](#regulatory-authority) | Both | State/territory regulators (primary) + federal online overlay, how the structure works |
| [Legal requirements](#legal-requirements) | Both | Permitted products, what is illegal online, 18+ |
| [Helpline](#helpline) | Both | National Gambling Helpline and display rules |
| [Messaging requirements](#messaging-requirements) | Online overlay | Seven mandated taglines + call to action (verbatim) |
| [Advertising restrictions](#advertising-restrictions) | Both | State ad law + federal/broadcast online overlay; see [advertising-rules.md](advertising-rules.md) |
| [Self-exclusion](#self-exclusion) | Both | State/territory land-based schemes + BetStop (online, national) |
| [Player protection — land-based](#player-protection--land-based) | State/territory | The primary RG layer: NSW (Regulation 2019, RGO) + Victoria worked examples |
| [Player protection — interactive](#player-protection--interactive) | Online overlay | NCPF measures, credit ban, activity statements |
| [Age verification](#age-verification) | Both | 18+ nationwide; pre-verification for online |
| [AML/KYC](#amlkyc) | Both | AUSTRAC, AML/CTF Act customer verification |
| [Collateral adaptation](#collateral-adaptation) | Both | What to change across all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Both | Config values to add |
| [Compliance checklist](#compliance-checklist) | Both | Pre-launch verification |

---

## Regulatory authority

Australia has **no single gambling regulator**. Gambling is regulated **primarily by the eight states and territories** — each has its own regulator, its own gambling Act, and its own responsible-gambling code of practice, self-exclusion scheme, venue-signage rules, and staff-training requirements. The Commonwealth (federal) government runs a **narrower overlay** that governs **online wagering**: the Interactive Gambling Act 2001 sets what is legal online, and the National Consumer Protection Framework (NCPF) adds national consumer-protection measures. ACMA enforces the federal online rules; it is **not** the licensor of operators.

### The primary layer — state and territory regulators

Land-based gambling (casinos, gaming machines/pokies, retail and on-course wagering, lotteries, keno venues) is regulated **entirely** at state/territory level. Each jurisdiction follows the same pattern — its **own gambling Act + its own RG code of practice + its own self-exclusion, signage, and staff-training rules**.

| State / Territory | Primary gambling regulator(s) |
|---|---|
| **New South Wales (NSW)** | **Liquor & Gaming NSW** (gaming machines, wagering, lotteries) + the **NSW Independent Casino Commission (NICC)** (casinos) |
| **Victoria (VIC)** | **Victorian Gambling and Casino Control Commission (VGCCC)** |
| **Queensland (QLD)** | **Office of Liquor and Gaming Regulation (OLGR)** |
| **Western Australia (WA)** | **Gaming and Wagering Commission of Western Australia (GWC)** |
| **South Australia (SA)** | **Liquor and Gambling Commissioner** / Consumer and Business Services |
| **Tasmania (TAS)** | **Tasmanian Liquor and Gaming Commission** |
| **Australian Capital Territory (ACT)** | **ACT Gambling and Racing Commission** |
| **Northern Territory (NT)** | **Northern Territory Racing and Wagering Commission** *(the NTRWC; replaced the former NT Racing Commission from 1 July 2024 under the Racing and Wagering Act 2024)* |

> **The NT licenses Australia's online bookmakers.** Even "online wagering" is licensed at state/territory level — and in practice **most of Australia's online corporate bookmakers are licensed in the Northern Territory** (Sportsbet, Ladbrokes, bet365, Betfair and others). This is the clearest illustration that the states and territories, not the Commonwealth, are the licensing authorities; the federal NCPF layer standardises consumer-protection conduct across the operators they license.

### The federal overlay — online wagering only

| Field | Value |
|---|---|
| **Federal regulator (online wagering)** | Australian Communications and Media Authority (ACMA) — enforcement (complaints, disruption of illegal services); **not** a licensor of operators |
| **Federal website** | [acma.gov.au](https://www.acma.gov.au) |
| **Federal policy owner** | Department of Social Services (DSS) — owns the NCPF |
| **Governing federal legislation** | Interactive Gambling Act 2001 (Cth) |
| **Federal framework** | National Consumer Protection Framework for Online Wagering (NCPF) — 10 measures |
| **Regulatory approach** | Prescriptive (NCPF 10 enumerated measures; verbatim-mandated taglines; minute-level live-sport ad timing) |

### How the two layers fit together

| Layer | Who regulates | What it covers | Key instruments |
|---|---|---|---|
| **State / territory — the primary layer** | State/territory regulator (table above) | All land-based gambling — casinos, gaming machines (pokies), retail/on-course wagering, lotteries, keno venues — **and** the licensing of online wagering operators; each state's own RG code, self-exclusion, signage and staff-training rules | State gambling statutes (e.g. NSW Gaming Machines Act 2001 + Gaming Machines Regulation 2019; NSW Casino Control Act 1992; VIC Gambling Regulation Act 2003; NT Racing and Wagering Act 2024) |
| **Federal — online overlay** | ACMA (enforcement); DSS (policy) | A narrower overlay on **online wagering only**: what is legal online (online casino/in-play prohibited; pre-event sports/race wagering and lotteries permitted) plus national consumer-protection measures | Interactive Gambling Act 2001; NCPF National Policy Statement; Interactive Gambling Amendment (Credit and Other Measures) Act 2023; Broadcasting Services (Online Content Service Provider Rules) 2018 |

### The NCPF 10 measures (federal online overlay)

The National Consumer Protection Framework for Online Wagering is the prescriptive heart of the **federal online overlay** — national consumer-protection measures for online wagering. Some are federal law in their own right (BetStop national self-exclusion; the credit/credit-card/digital-currency ban under the Interactive Gambling Amendment (Credit and Other Measures) Act 2023; consistent gambling messaging); others are implemented through the state/territory **licence conditions** that bind each operator. The official ten measures:

| # | Measure | Status |
|---|---|---|
| 1 | Prohibition on lines of credit | In force |
| 2 | Restrictions on the provision of credit by payday lenders | In force |
| 3 | Customer verification | In force (strengthened — verification before account use, 29 September 2024) |
| 4 | Restrictions on inducements | In force |
| 5 | Account closure (a simple, prominent account-closure process must be displayed) | In force |
| 6 | Opt-out pre-commitment (includes customer-set deposit limits as a component) | In force |
| 7 | Activity statements | In force |
| 8 | Consistent gambling messaging (seven mandated taglines + call to action) | In force (30 March 2023) |
| 9 | Staff training | In force (30 March 2023) |
| 10 | National Self-Exclusion Register (BetStop) | In force (launched 21 August 2023) |

> **Note**: The **credit / credit-card / digital-currency ban** is **not** one of the ten NCPF measures — it is the separate **Interactive Gambling Amendment (Credit and Other Measures) Act 2023** (commenced 11 June 2024; see [Player protection — interactive](#player-protection--interactive)). **Customer-set deposit limits** are a component of the opt-out pre-commitment measure (Measure 6), not a standalone eleventh measure.

### Upcoming changes

| Change | Status | Impact |
|---|---|---|
| Total ban on online gambling advertising (Murphy review recommendation) | **NOT law as of June 2026.** In May 2026 the Government **declined** a full ban | Frequently reported; track as a possible future reform. Do **not** treat as a current requirement. |
| Gambling-reform package (Government's May 2026 response to the Murphy report) | **Announced May 2026; slated to take effect ~January 2027** via Interactive Gambling Act 2001 amendments | Reported to include a **ban on online keno**, tighter **live-sport and in-venue/in-stadium** advertising rules (broadcast cap; no gambling branding on venues/uniforms), and stronger illegal-service enforcement. None in force yet — present rules stand. Note: online keno is **legal today** (see below) but is **scheduled to be banned** under this package. Re-confirm against the enacted IGA amendments. |
| Possible further restrictions on inducements and bonus advertising | Under policy discussion | Monitor DSS / ACMA announcements |

> **Source (reform package)**: [iGaming Today — Australia responds to Murphy report](https://www.igamingtoday.com/australia-responds-to-murphy-report-with-online-keno-ban-and-gambling-ads-restrictions/) (corroborating trade report). Verify against the official Government response and the enacted IGA amendments in browser before relying on it.

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 18+ nationwide (all products, all states) |
| **Legal framework** | State/territory gambling statutes (the primary layer — land-based gambling and the licensing of online operators) + the federal Interactive Gambling Act 2001 (online overlay) |
| **Online gambling** | Partly legal: online **pre-event** sports/race wagering, online lotteries, online keno are legal. Online **casino-style gaming** and online **in-play (live) betting** are **illegal**. |
| **Land-based gambling** | Legal, state-licensed (casinos, gaming machines, retail wagering, lotteries) |

### Permitted products table

| Product | Vertical | Legal status | Regulator | Notes |
|---|---|---|---|---|
| Sports wagering (pre-event) | Interactive | Legal | ACMA (conduct) + state licence | Live/in-play betting online is illegal |
| Race wagering (pre-event) | Interactive | Legal | ACMA (conduct) + state licence | Racing is the largest online wagering category |
| Lotteries | Interactive | Legal | ACMA (conduct) + state licence | Credit ban does not apply to lotteries |
| Keno | Interactive | Legal | ACMA (conduct) + state licence | Credit ban does not apply to keno. **Scheduled to be banned ~Jan 2027** under the Government's May 2026 reform package — see Upcoming changes |
| Online casino (slots, table games) | Interactive | **Illegal** | Prohibited under IGA 2001 | A "prohibited interactive gambling service" |
| Online in-play / live betting | Interactive | **Illegal** | Prohibited under IGA 2001 | Live bets must be placed by phone or in person, not online |
| Land-based casino | Land-based | Legal | State (e.g. NSW Independent Casino Commission) | Limited-licence / monopoly per state |
| Gaming machines (pokies) | Land-based | Legal | State (e.g. Liquor & Gaming NSW) | In pubs and clubs as well as casinos |
| Retail / on-course wagering | Land-based | Legal | State (e.g. Liquor & Gaming NSW) | TAB and on-course bookmakers |

### Key regulatory notes

- The defining feature of Australia is that **the states and territories are the primary regulators** — they regulate all land-based gambling and license the operators (including online wagering operators) — while a **narrower federal overlay** governs online wagering. A {{PROGRAM_NAME}} deployment must be scoped to the correct layer(s).
- The Interactive Gambling Act 2001 makes it an offence to **provide** a prohibited interactive gambling service to customers in Australia, and to **advertise** one.
- Online wagering is **licensed** state by state (most operators in the Northern Territory); the federal NCPF standardises consumer-protection **conduct** across those licensed operators.
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

The National Gambling Helpline number is a single national contact, but helpline-display obligations come from two layers. State and territory land-based rules require helpline and counselling display in venues; the federal online overlay mandates the helpline call to action in the consistent gambling messaging for online wagering (NCPF Measure 8).

#### Land-based display (state/territory — primary; NSW example)

State and territory venue rules require responsible-gambling signage and counselling/helpline contact information in gambling areas — the primary land-based display obligation. In NSW, for example, venues with gaming machines and casinos must display this at gambling areas, near ATMs/cash facilities, and at entrances (under the NSW Gaming Machines Act 2001 and associated regulation, and the Casino Control Act 1992). Exact placement and wording are set by Liquor & Gaming NSW / the NSW Independent Casino Commission. Every state and territory has equivalent venue-display rules under its own gambling Act.

#### Interactive display (federal online overlay)

The prescribed **call to action** must accompany online wagering advertising and relevant promotional material, embedding the National Gambling Helpline **1800 858 858** and **gamblinghelponline.org.au**. This is part of the same consistent-messaging requirement that mandates the seven taglines.

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

Australia's online-wagering messaging is **verbatim and prescriptive**. Under NCPF Measure 8 (Consistent Gambling Messaging), online wagering advertising must rotate the **mandated taglines** (the permitted subset for each platform) in equal proportion over a 12-month period and carry a prescribed **call to action**. These replaced the old "Gamble Responsibly" message from **30 March 2023**.

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
| 3 | What's gambling really costing you? |
| 4 | What are you prepared to lose today? Set a deposit limit. |
| 5 | Imagine what you could be buying instead. |
| 6 | You win some. You lose more. |
| 7 | What are you really gambling with? |

#### Platform-specific permitted subsets

Not every tagline is permitted on every platform. The mandated message must be drawn from the subset approved for the placement:

| Platform | Permitted taglines | Count |
|---|---|---|
| Television / video and radio | 1, 3, 5, 6, 7 | five |
| Digital, print, social media, website | 1, 2, 3, 4, 5, 7 | six |
| In-app | 1, 2, 3, 4, 5, 7 | six |

> **Tagline 6 ("You win some. You lose more.") is permitted in spoken forms of advertising only** (including telemarketing). It is therefore valid for **television/video and radio only as a spoken voiceover** — not as on-screen text — and is **excluded from in-app, digital, print, social media, and website** placements, which are text/display formats. When placing on-screen text (including in-app), use a tagline from the six-tagline subset (1, 2, 3, 4, 5, 7).

#### Verbatim call to action

The prescribed call to action carrying the National Gambling Helpline is, word-for-word:

> **For free and confidential support call 1800 858 858 or visit gamblinghelponline.org.au**

(Radio and TV/video carry approved modified forms of the call to action — e.g. radio uses "For free and confidential support visit gamblinghelponline.org.au"; TV/video may use "For free and confidential support, call the number on screen or visit the website." Use the platform-approved wording.)

#### Equal-rotation rule

Providers must take reasonable steps to ensure all **applicable** taglines (the subset permitted for the platform) are employed **equally over a 12-month period** — no single tagline may be favoured. This rotation obligation applies to television, radio, in-app, digital, print, social media, and website advertising.

> **Source**: WA Consistent Gambling Messaging Notice 2025 — [cits.wa.gov.au notice](https://www.cits.wa.gov.au/department/news/news-article/2025/03/24/consistent-gambling-messaging). The seven taglines, platform subsets, verbatim call to action, and 12-month equal-rotation rule were verbatim-verified against this registered state notice. The Department of Social Services (DSS) consistent-gambling-messaging platform-definitions page is the canonical federal source but is bot-blocked from this environment; confirm against live DSS guidance before publishing any Australian advertising.

### On-brand integration

Because the taglines and call to action are **verbatim**, they appear word-for-word; {{PROGRAM_NAME}} voice is expressed in the surrounding content, never by altering the mandated text.

**Bare compliance:**
> "You win some. You lose more. Gamble responsibly. Call 1800 858 858."

**{{PROGRAM_NAME}} on-brand version:**
> **You win some. You lose more.** That's not pessimism — it's the maths. Know the odds before you play, set a deposit limit, and keep it fun.
> Free, confidential support 24/7: **1800 858 858** | **gamblinghelponline.org.au**

The mandated tagline ("You win some. You lose more.") and the helpline call to action appear exactly as required; the {{PROGRAM_NAME}} framing sits around them.

> **Note on this example:** "You win some. You lose more." (tagline 6) is permitted in **spoken forms of advertising only**, so the example above is valid for a **spoken placement** — e.g. radio or a television/video voiceover. For an **on-screen text or in-app** placement, swap in a tagline from that platform's six-tagline subset (1, 2, 3, 4, 5, 7); the on-brand framing pattern is identical.

**Rules for on-brand integration:**
1. Verbatim taglines and call to action appear word-for-word — never paraphrase
2. Maintain equal rotation across the **platform's permitted subset** — do not over-use a favourite (and never place a spoken-only tagline as on-screen text)
3. Give the mandated messaging visual dignity — do not shrink to minimum size
4. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework — Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

Gambling advertising in Australia is governed at two levels. **Land-based gambling advertising is governed by state and territory law** — each jurisdiction has its own advertising rules and codes (e.g. the NSW Betting and Racing Act/Regulation and Liquor & Gaming NSW Guideline GL4015). The **online and broadcast overlay** then adds the federal layers for online wagering and broadcast media: the IGA Part 7A prohibition on advertising illegal services, the federal live-sport timing rules, the NCPF consistent-messaging mandate, and the registered Free TV / Commercial Radio / ASTRA broadcast codes. The table below lists the operative rules across both levels; the full breakdown is in [advertising-rules.md](advertising-rules.md).

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| No advertising of illegal services | Prohibited interactive gambling services (online casino, online in-play) and unlicensed services must not be advertised | Interactive | Interactive Gambling Act 2001 Part 7A |
| Live-sport timing ban | No gambling ads during live sport 5:00 am – 8:30 pm and 5 min before to 5 min after play | Interactive | Broadcasting Services (Online Content Service Provider Rules) 2018 (F2018L01203) Pts 3-4, s17 |
| Odds-promotion ban | No commentator/representative odds promotion 30 min either side of play | Interactive | F2018L01203 |
| Consistent gambling messaging | Platform-permitted taglines (equal rotation over 12 months) + call to action | Interactive | NCPF Measure 8 / NCPF Part 8; WA Consistent Gambling Messaging Notice 2025 |
| Inducement restrictions (federal) | No publicly advertised sign-up inducements | Interactive | NCPF Measure 4 |
| Broadcast code restrictions | ACMA-registered Free TV, Commercial Radio (CRA) and Subscription TV (ASTRA) codes bind broadcast gambling ads (no ads 5:00 am – 8:30 pm during live sport; 5 min before/after play; odds-promotion restriction; socially-responsible + RG message) | Interactive | Free TV Commercial Television Industry Code of Practice; Commercial Radio Code of Practice 2017 (CRA); ASTRA codes |
| NSW wagering-ad inducement ban (state) | Inducement advertising must not be published or communicated to NSW persons — geo-disclaimers excluding NSW residents do **not** cure a breach; reaches gambling influencers and social media | Interactive | NSW Betting and Racing Regulation 2022; L&GNSW Guideline GL4015 |

### Named standards of practice (broadcast and state advertising codes)

The federal OCSP Rules are mirrored — and in places extended — by industry codes and state instruments. These are the operative standards that bind a gambling advertisement once it reaches a broadcast or a NSW audience.

| Standard | Instrument | What it binds | Source |
|---|---|---|---|
| **Free TV broadcast code** | Free TV Commercial Television Industry Code of Practice | Commercial free-to-air TV gambling ads: no ads during live sport 5:00 am – 8:30 pm and 5 min before/after play; odds-promotion restriction; socially-responsible content + RG message | [freetv.com.au gambling advertising code](https://www.freetv.com.au/new-free-tv-gambling-advertising-code/) |
| **Commercial Radio code** | Commercial Radio Code of Practice 2017 (Commercial Radio Australia — CRA) | Commercial radio gambling ads: equivalent live-sport timing and RG-message obligations | [cra.au regulation and codes](https://cra.au/regulation-and-codes) |
| **Subscription TV code** | Subscription TV (ASTRA) codes of practice | Subscription/pay-TV gambling ads: equivalent live-sport timing and RG-message obligations | ASTRA codes (registered with ACMA) |
| **NSW wagering-ad layer** | NSW Betting and Racing Regulation 2022 + L&GNSW Guideline GL4015 | Wagering-ad inducement layer: bans inducement advertising published or communicated to NSW persons even where a geo-disclaimer purports to exclude NSW residents; reaches gambling influencers and social-media promotions | [nsw.gov.au gambling advertising](https://www.nsw.gov.au/business-and-economy/liquor-and-gaming/gaming/wagering-regulation/gambling-advertising) |

### Channel-specific rules

| Channel | Key restrictions | Verticals | Source |
|---|---|---|---|
| Broadcast (TV/radio) | Live-sport whistle-to-whistle restrictions; messaging required | Interactive | F2018L01203; Free TV Commercial Television Industry Code of Practice; Commercial Radio Code of Practice 2017 (CRA); ASTRA codes |
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

- One of the platform-permitted mandated taglines (equal rotation over 12 months) in online wagering advertising
- The prescribed call to action carrying the National Gambling Helpline: "For free and confidential support call 1800 858 858 or visit gamblinghelponline.org.au" (platform-approved modified forms for radio and TV/video)
- 18+ age context

For the full channel-by-channel breakdown, prohibited-content table, required-disclosures table, and the {{PROGRAM_NAME}} content compliance matrix, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

Self-exclusion in Australia has two layers: **state and territory land-based schemes** (the primary layer — each jurisdiction runs its own venue / multi-venue self-exclusion under its own gambling Act) and the **national online register (BetStop)** that overlays online and phone wagering. These are separate systems.

### Land-based self-exclusion (state/territory — primary; NSW example)

Each state and territory runs its own land-based self-exclusion scheme under its own gambling Act. NSW is shown as the example.

| Field | Value |
|---|---|
| **Program** | NSW venue / multi-venue self-exclusion (e.g. via registered providers and venue schemes) |
| **Scope** | NSW gaming venues and casinos (separate from BetStop) |
| **Duration options** | Set by the scheme (commonly 3, 6, 12 months, or longer) |
| **Enrollment** | In-person at the venue or via a self-exclusion provider |
| **Source** | NSW Gaming Machines Act 2001; Casino Control Act 1992 |

### Interactive self-exclusion — BetStop (national online overlay)

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
| **Source** | Interactive Gambling Act 2001 (Cth) Part 7B; Interactive Gambling Amendment (National Self-exclusion Register) Act 2019; National Self-Exclusion Register (Indexation) Rules |

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

## Player protection — land-based

*This is the primary player-protection layer. Skip only if your deployment is online-wagering-only.*

Land-based player protection — the **primary** standards-of-practice layer in Australia — is set by each **state and territory**. Every jurisdiction follows the same pattern: its **own gambling Act + its own responsible-gambling code of practice**, with its own signage, self-exclusion, and staff-training rules. The two worked examples below — **New South Wales** and **Victoria** — illustrate that pattern; other states and territories differ in detail and would each need their own pass. NSW's day-to-day standards sit in the **Gaming Machines Regulation 2019** (the operative regulation made under the Gaming Machines Act 2001).

### Required tools and obligations (NSW example)

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Mandatory signage and counselling notices | Yes | Prescribed gambling-counselling notices and responsible-gambling signage displayed at gaming areas | NSW Gaming Machines Regulation 2019 |
| Gambling contact cards | Yes | Gambling contact cards (counselling/helpline) must be available to patrons in gaming areas | NSW Gaming Machines Regulation 2019 |
| RG messaging on player activity statements | Yes | Responsible-gambling messaging must appear on player activity statements provided to gaming-machine players | NSW Gaming Machines Regulation 2019 |
| Helpline display | Yes | Gambling Help / National Gambling Helpline contact at gambling areas and cash facilities | NSW Gaming Machines Regulation 2019 |
| Self-exclusion | Yes | Venue and multi-venue self-exclusion available | NSW Gaming Machines Act 2001; Casino Control Act 1992 |
| Staff responsible-conduct training | Yes | Gaming staff must complete responsible-conduct-of-gambling training | NSW Gaming Machines Act 2001; Gaming Machines Regulation 2019 |
| ATM / cash-dispenser placement restrictions | Yes | Restrictions on the placement of ATMs and cash dispensers in or near gaming areas | NSW Gaming Machines Regulation 2019 |
| Responsible Gambling Officer (RGO) | Yes (venues > 20 GME) | Commenced **1 July 2024**. Hotels and clubs with **more than 20 gaming-machine entitlements** must have an RGO on duty while machines operate (larger clubs need additional RGOs). RGOs monitor for patrons at risk of harm, refer them to support, and facilitate self-exclusion — a **Theme 9** harm-monitoring obligation | NSW responsible-gambling-officer reforms (Gaming Machines Act/Regulation amendments) — [nsw.gov.au RGO release](https://www.nsw.gov.au/ministerial-releases/responsible-gambling-officers-introduced-into-pubs-and-clubs-across-nsw) |

### {{PROGRAM_NAME}} tool messaging — land-based (NSW)

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Self-exclusion info | "Need a break? Talk to any staff member — they can help you step away, no judgement." | NSW Gaming Machines Act 2001 |
| Helpline display | "Free, confidential support — 24/7. Call 1800 858 858." | NSW Gaming Machines Regulation 2019 |
| RG information | "Know your game. Set a limit before you start." | NSW Gaming Machines Regulation 2019 |

> **Source**: NSW Gaming Machines Regulation 2019 — `https://legislation.nsw.gov.au/view/html/inforce/current/sl-2019-0221` (canonical, but bot-blocked from this environment). The Responsible Gambling Officer requirement is described at [nsw.gov.au RGO release](https://www.nsw.gov.au/ministerial-releases/responsible-gambling-officers-introduced-into-pubs-and-clubs-across-nsw) (verified).

### Second worked example — Victoria (the "mandatory code + direction" pattern)

NSW is one model of the primary state layer; **Victoria** shows another common Australian form of it — the **"mandatory code of conduct + Ministerial Direction"** pattern. It is also the clearest example of how the federal NCPF online measures are, in turn, given **legal force at state level** through that same state machinery.

| Obligation | Requirement | Source |
|---|---|---|
| Responsible Gambling Code of Conduct | Every venue operator holding a gambling industry licence **must** adopt a Responsible Gambling Code of Conduct. The Code is compulsory under the Gambling Regulation Act 2003; its **content is prescribed by Ministerial Direction** (Responsible Gambling Codes of Conduct for Venue Operators, effective **1 March 2020**). Operators either adopt an industry venue code or submit their own | Gambling Regulation Act 2003; VGCCC — [responsible-gambling codes of conduct](https://www.vgccc.vic.gov.au/for-gambling-providers/venue-operators-and-poker-machines/venue-operator-obligations/responsible-gambling-codes-of-conduct-standards) |
| NCPF measures given legal force | The federal NCPF measures are made binding in Victoria through **Harm Minimisation Ministerial Directions** applying to Victorian wagering and betting licensees | VGCCC — [National Consumer Protection Framework (VIC)](https://www.vgccc.vic.gov.au/for-gambling-providers/bookmakers/national-consumer-protection-framework) |

> **Why this matters**: NSW and Victoria are two worked examples of the **same primary pattern** — every state and territory has its **own gambling Act plus its own RG code of practice**, not a single national statutory checklist. A full national land-based build needs a per-state pass. Victoria also shows the mechanism by which the federal online overlay is operationalised: a **mandatory code whose content a Minister prescribes by direction**, with the NCPF measures bound onto state licensees the same way.

---

## Player protection — interactive

*This is the federal online overlay. Skip this section if your deployment is land-based only.*

Online wagering player protection is the **federal overlay** on top of the state/territory licensing layer: it is governed by the **NCPF 10 measures** plus the Interactive Gambling Act. Some of these measures are federal law in their own right (BetStop; the credit ban; consistent messaging); others are delivered through the state/territory **licence conditions** that bind each operator (Victoria above shows the mechanism).

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Opt-out pre-commitment (incl. customer-set deposit limits) | Yes | Scheme must actively prompt customers to set limits; customer-set deposit limits are a component of this measure (NCPF Measure 6) | NCPF National Policy Statement |
| Account closure | Yes | A simple, prominent account-closure process must be displayed (NCPF Measure 5) | NCPF National Policy Statement |
| Credit / credit-card / digital-currency ban | Yes | Must not provide or facilitate credit or credit-related products, nor accept payment by credit card or digital currency, from customers physically present in Australia. Small providers (< AUD 30M annual wagering turnover) exempt; ban does not apply to lotteries/keno. **Separate from the NCPF ten measures.** | Interactive Gambling Amendment (Credit and Other Measures) Act 2023 (C2023A00114) — IGA 2001 s15C; commenced 11 June 2024; civil penalties up to ~AUD 247,500 |
| Activity statements | Yes | Regular (monthly) statements showing wins, losses and net position, with a link to support services (NCPF Measure 7) | NCPF National Policy Statement |
| Consistent gambling messaging | Yes | Platform-permitted taglines (equal rotation over 12 months) + call to action (NCPF Measure 8) | NCPF National Policy Statement; WA Consistent Gambling Messaging Notice 2025 |
| Staff training | Yes | Appropriate training + annual refresher (NCPF Measure 9) | NCPF National Policy Statement |
| Self-exclusion (BetStop) — National Self-Exclusion Register | Yes | National register (NCPF Measure 10); must not provide service or marketing to registered persons | IGA 2001 Part 7B; Interactive Gambling Amendment (National Self-exclusion Register) Act 2019 |
| Customer verification | Yes | Age and identity verified before the account can be used (NCPF Measure 3; strengthened 29 September 2024) | NCPF National Policy Statement; AML/CTF Act 2006 |
| Restrictions on inducements | Yes | Restriction on publicly advertised sign-up inducements (NCPF Measure 4) | NCPF National Policy Statement |
| Restrictions re payday lenders | Yes | Restrictions on the provision of credit by payday lenders to wagering customers (NCPF Measure 2) | NCPF National Policy Statement |
| Prohibition on lines of credit | Yes | Providers must not offer customers a line of credit (NCPF Measure 1) | NCPF National Policy Statement |

### {{PROGRAM_NAME}} tool messaging — interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit — bet on your terms. Takes 10 seconds." | NCPF Measure 6 (component of opt-out pre-commitment) |
| Pre-commitment prompt | "Before you start: what are you happy to spend today? Set it once, we'll hold you to it." | NCPF Measure 6 |
| Monthly activity statement | "Your month in numbers — wins, losses, where you landed. No surprises." | NCPF Measure 7 |
| BetStop | "Need a longer break? BetStop steps you away from every Australian betting site at once." | IGA 2001 Part 7B |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 18+ nationwide (all products, all states) |
| **`_brand.yml` key** | `legal.minimum_gambling_age.australia` |
| **`{{MIN_AGE}}` token value** | 18 |
| **Statutory basis** | Interactive Gambling Act 2001 s8B (online); state gambling statutes (land-based); AML/CTF Act 2006 (verification) |

### Interactive verification (federal online overlay)

| Requirement | Details | Source |
|---|---|---|
| **Registration requirements** | Customer age and identity must be verified before the betting account can be used | NCPF Measure 3 (customer verification); AML/CTF Act 2006 |
| **Verification window** | Pre-verification — verification before account use (strengthened 29 September 2024) | NCPF Measure 3 |
| **Verification method** | Identity verification under the AML/CTF Act customer-verification rules | AML/CTF Act 2006 |

### Land-based verification (state/territory — NSW example)

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
| **Player-facing impact** | Customers must complete identity verification before they can bet online | NCPF Measure 3 (customer verification); AML/CTF Act 2006 |

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
| **Self-exclusion** | State/territory land-based schemes + BetStop (national online) | GAMSTOP (national remote) + premises | Property-by-property |
| **Credit** | Credit / credit-card / digital-currency ban | Credit-card ban (2020) | Operator discretion |
| **Regulatory split** | State/territory primary (land-based + operator licensing) + federal online overlay | Single national | Single state |
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
- [ ] Confirmed deployment layer(s): [ ] Land-based (state/territory) [ ] Online wagering (state/territory licence + federal overlay) [ ] Both
- [ ] Identified the relevant **state/territory regulator(s)** — the primary layer (e.g. Liquor & Gaming NSW + NICC; VGCCC; OLGR; GWC; SA Liquor and Gambling Commissioner; TAS Liquor and Gaming Commission; ACT Gambling and Racing Commission; NT Racing and Wagering Commission)
- [ ] Reviewed the applicable state/territory gambling Act and its RG code of practice
- [ ] If online: confirmed ACMA's federal online overlay (IGA 2001 + NCPF 10 measures) and the state/territory operator licence (most online bookmakers NT-licensed)
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

### Player protection — land-based (primary)
*Check only if deploying in venues (NSW example; confirm the equivalent for your state/territory — every one has its own Act + RG code, e.g. Victoria's mandatory Responsible Gambling Code of Conduct).*
- [ ] Mandatory signage, counselling notices and gambling contact cards in gaming areas (NSW Gaming Machines Regulation 2019)
- [ ] RG messaging on player activity statements (NSW Gaming Machines Regulation 2019)
- [ ] Helpline displayed at gambling areas and cash facilities
- [ ] Responsible-conduct-of-gambling staff training completed
- [ ] ATM / cash-dispenser placement restrictions observed (NSW Gaming Machines Regulation 2019)
- [ ] Responsible Gambling Officer on duty if venue has > 20 gaming-machine entitlements (NSW, from 1 July 2024)
- [ ] If deploying in Victoria: Responsible Gambling Code of Conduct adopted (Gambling Regulation Act 2003 + Ministerial Direction)

### Player protection — interactive (federal online overlay)
*Check only if deploying online wagering.*
- [ ] Opt-out pre-commitment scheme prompts customers to set limits, incl. customer-set deposit limits (NCPF Measure 6)
- [ ] Simple account-closure process displayed (NCPF Measure 5)
- [ ] Credit / credit-card / digital-currency ban enforced (Interactive Gambling Amendment (Credit and Other Measures) Act 2023; IGA s15C; small-provider < AUD 30M exemption noted; separate from the ten NCPF measures)
- [ ] Monthly activity statements provided with support link (NCPF Measure 7)
- [ ] Consistent gambling messaging present, platform-permitted taglines in 12-month equal rotation (NCPF Measure 8)
- [ ] Staff training + annual refresher in place (NCPF Measure 9)
- [ ] Customer verification before account use (NCPF Measure 3)
- [ ] Restrictions on inducements observed (NCPF Measure 4)

### Age verification
- [ ] Online: identity and age verified before account use (NCPF Measure 3 customer verification; AML/CTF Act)
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
- [ ] `Last verified` date set on this module (2026-06-08)
- [ ] `Next review due` date set (2026-09-08)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [Australia config overrides](_brand-australia.yml) | [Advertising rules](advertising-rules.md) | [Messaging Framework — Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../collateral/customer-service/staff-faq.md) | [Governance](../../brand-book/08-governance.md) | [Jurisdictions README](../README.md)*
