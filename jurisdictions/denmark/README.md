---
content_type: jurisdiction-module
title: "Denmark -- Compliance Module"
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
  humor: moderate
  directness: direct
  comfort: open
presentation:
  odds_format: decimal
  currency: dkk
  sports_culture: european-football
  language: da
verticals: [land-based, interactive]
regulatory_approach: prescriptive
adaptation_status: base
adaptation_notes: |
  Denmark module uses DKK currency context and decimal odds format.
  Danish is the primary language; English translations available for
  key regulatory documents. Cultural adaptation needed for Scandinavian
  market (moderate humor, direct communication). ROFUS, StopSpillet,
  and mandatory deposit limits are Denmark-specific features with no
  direct equivalents in North American markets.
last_updated: 2026-06-08
---

# Denmark -- Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Denmark. Denmark has a centralized national regulatory model under the Danish Gambling Authority (Spillemyndigheden). Unlike federally structured countries such as the US or Canada, Denmark is not subdivided into sub-jurisdictions for gambling purposes -- all requirements are national. Key distinguishing features: mandatory deposit limits before play, ROFUS national self-exclusion register covering all licence holders, prescriptive advertising rules including under-25 bans and proximity restrictions, and StopSpillet helpline obligations. The controlling standard-of-practice document for online responsible gambling is Spillemyndigheden's **Guidance on responsible gambling -- betting and online casino, v1.0 (26 February 2026)**, which sits above the executive orders and the certification programme. Land-based operators (excluding betting) are still covered by the older RG Guide v1.4.

> **Last verified**: 2026-06-08
> **Next review due**: 2026-09-08 *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | Spillemyndigheden, key contacts |
| [Standards of practice](#standards-of-practice) | RG Guidance v1.0, marketing guides, certification programme |
| [Legal requirements](#legal-requirements) | 18+, licensed products, legal framework |
| [Helpline](#helpline) | StopSpillet details and display rules |
| [Messaging requirements](#messaging-requirements) | Obligation-based requirements |
| [Advertising restrictions](#advertising-restrictions) | Under-25 ban, proximity bans, live sports ban |
| [Self-exclusion](#self-exclusion) | ROFUS national register |
| [Player protection -- land-based](#player-protection----land-based) | Casino-specific obligations |
| [Player protection -- interactive](#player-protection----interactive) | Deposit limits, monitoring, tools |
| [Age verification](#age-verification) | 18+ requirements |
| [AML/KYC](#amlkyc) | Hvidvaskloven requirements |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Primary regulator** | Spillemyndigheden (Danish Gambling Authority) |
| **Website** | [spillemyndigheden.dk](https://www.spillemyndigheden.dk/en) |
| **Governing legislation** | Consolidation Act No. 1182 of 22 September 2025 (Spilleloven / Danish Gambling Act) |
| **Controlling RG standard (online)** | Guidance on responsible gambling -- betting and online casino, v1.0 (26 February 2026) |
| **Key executive orders** | Exec Order 1274/2019 (online casino, as amended by 682/2025); Exec Order 1276/2019 (online betting, as amended by 684/2025); Exec Order 686/2025 (land-based betting); Exec Order 1290/2019 (land-based casinos); Exec Order 1289/2019 (gaming machines) |
| **Regulatory approach** | Prescriptive |
| **Location** | Lerchesgade 35, 6, 5000 Odense C, Denmark |
| **Contact** | mail@spillemyndigheden.dk / +45 72 38 79 13 |

### Regulatory model

Denmark operates a **centralized national regulatory model**. The Spillemyndigheden is responsible for:

- Licensing and supervision of all gambling operators
- Responsible gambling policy and enforcement
- Anti-money laundering supervision in the gambling sector
- Match-fixing prevention
- Advertising compliance enforcement
- Maintaining the ROFUS self-exclusion register
- Operating the StopSpillet helpline

There are no sub-national gambling regulators. All requirements apply uniformly across the country.

### Upcoming changes

| Change | Effective date | Impact |
|---|---|---|
| **Whistle-to-whistle live sports ad ban** | 1 January 2027 | Gambling ads prohibited during live sports broadcasts (from 10 min before to 10 min after) |
| **200m school proximity ban** | 1 January 2027 | Ads banned within 200m of schools (exception: stadiums/sports venues near schools) |
| **Under-25 brand ambassador ban** | 1 January 2027 | Persons under 25 may not appear in gambling advertising |
| **Free-to-play welcome bonus restrictions** | 1 January 2027 | Restrictions on free-to-play welcome bonuses |
| **B2B supplier licences** | In force 1 January 2025 | Game suppliers must obtain B2B licences |
| **Updated Executive Orders (online casino/betting/land-based betting)** | In force 11 June 2025 | Exec Orders 682/2025 (online casino) and 684/2025 (online betting) replace earlier amendments; Exec Order 686/2025 governs land-based betting |

*Source: [Spillemyndigheden legal framework](https://www.spillemyndigheden.dk/en/legal-framework); [iGaming Business](https://igamingbusiness.com/marketing-affiliates/marketing-regulation/denmark-gambling-ads-ban-sports-broadcasts-restrictions/)*

---

## Standards of practice

Denmark's gambling rules sit in four layers. Beyond the Gambling Act and the executive orders (the *what*), Spillemyndigheden publishes the standards-of-practice guides that operators are measured against in supervision (the *how*). For online operators, the controlling document is the 2026 responsible-gambling guidance; it supersedes the older RG Guide v1.4 for betting and online casino, while v1.4 continues to apply to land-based operators other than betting.

| Layer | Instrument | Version / date | What it governs | Source |
|---|---|---|---|---|
| Statute | Spilleloven (Gambling Act) | Consolidation Act No. 1182, 22 Sep 2025 | Age limits, advertising (s.36), RG mandate, ROFUS | [Legal framework](https://www.spillemyndigheden.dk/en/legal-framework) |
| Executive orders | 682/2025 (online casino); 684/2025 (online betting); 686/2025 (land-based betting); 1290/2019 (land-based casino) | In force 11 Jun 2025 (the 2025 orders) | Deposit limit before play, ROFUS link, player-information panel, age, signage | [Legal framework](https://www.spillemyndigheden.dk/en/legal-framework) |
| RG standard-of-practice (online) | Guidance on responsible gambling -- betting and online casino | v1.0, 26 Feb 2026 | Information panel and prominent placement, self-test referral, on-screen clock, deposit limit, ROFUS, duty of attention, employee training, Danish-language rule | [RG Guidance v1.0](https://www.spillemyndigheden.dk/uploads/2026-02/The%20Danish%20Gambling%20Authority%27s%20Guidance%20on%20responsible%20gambling%20-%20betting%20and%20online%20casino.pdf) |
| RG standard-of-practice (land-based, excl. betting) | RG Guide | v1.4, Dec 2022 | Land-based RG information, signage, exclusion, employee duties | [RG Guide v1.4](https://www.spillemyndigheden.dk/uploads/2022-12/The%20Danish%20Gambling%20Authority%E2%80%99s%20guide%20on%20responsible%20gambling%20version%201.4.pdf) |
| Marketing -- disclosure | Guide on duty of disclosure regarding marketing of gambling | v3.0, 15 Jul 2025 | Mandatory in-ad disclosures; operators' own social-media platforms; boosted odds; loyalty programmes; affiliate scope | [Disclosure guide v3.0](https://www.spillemyndigheden.dk/uploads/2025-07/The%20Danish%20Gambling%20Authority%27s%20guide%20on%20duty%20of%20disclosure%20regarding%20marketing%20of%20gambling_version%203_1.pdf) |
| Marketing -- promotions | Guide on sales promotion | v5.0, 15 Jul 2025 | Bonus structures, promotional draw/prize-value calculation, boosted odds, loyalty programmes | [Sales promotion guide v5.0](https://www.spillemyndigheden.dk/uploads/2025-07/The%20Danish%20Gambling%20Authority%20guide%20on%20sales%20promotion%20version%205_0.pdf) |
| Marketing -- in-ad info | New rules on information when marketing gambling products | In force 1 Apr 2020 | 18+, ROFUS, StopSpillet, and the Authority's label in marketing (with a case-by-case media-feasibility carve-out) | [Information when marketing](https://www.spillemyndigheden.dk/en/news/new-rules-information-when-marketing-gambling-products) |
| Technical (player-facing parts) | Certification Programme (SCP document set) | SCP.00 General; SCP.02 Base platform; SCP.07.01-03 Games | Labelling scheme, statement of account, deposit-limit-before-play, RG-info (ROFUS/StopSpillet) | [Certification](https://www.spillemyndigheden.dk/en/certification); [Updated certification programme -- RG](https://www.spillemyndigheden.dk/en/news/updated-certification-programme-responsible-gambling) |

> **Citation note**: The governing PDFs were text-verified against their title pages and version histories: RG Guidance v1.0 (26 Feb 2026), operator guidelines v9.0 (Jun 2025), Guide on duty of disclosure v3.0 (15 Jul 2025), and Guide on sales promotion v5.0 (15 Jul 2025). Note: the disclosure-guide PDF is *named* `...version 3_1.pdf`, but its title page and version history read "Version 3.0 of 15 July 2025" -- the filename is misleading, so the link is kept as-published while the version is cited as v3.0. The marketing-guide updates are announced at [Spillemyndigheden -- update to guides on duty of disclosure and sales promotion](https://www.spillemyndigheden.dk/en/news/update-guides-duty-disclosure-and-sales-promotion).

### Player-facing standards the guidance adds

The 2026 RG guidance codifies several requirements that are player-facing communications, not just back-office controls. These are reflected in the messaging and player-protection sections below:

- **Mandatory self-test referral** -- online licensees must give players access to a self-test for disordered gambling; this can be satisfied by linking directly to the StopSpillet self-test. (RG Guidance v1.0 §3.1.1; Exec Order 682/2025 §15; Exec Order 684/2025 §13.)
- **Always-on session clock** -- online casino sites and apps must display a clock that stays visible for the entire logged-in session, so a player can track time spent. It cannot be scrolled or clicked away. (RG Guidance v1.0 §3.1.1.2, "Clock on the website.")
- **Duty of attention** -- licensees must identify players showing signs of gambling harm using defined parameters (spend, time, loss-chasing), then apply passive measures and active interventions (autogenerated warnings, feedback on current losses/time, direct contact). (RG Guidance v1.0 §6.)
- **Danish language and prominent placement** -- mandatory player and RG information must be in Danish and presented in a prominent place. (RG Guidance v1.0 §3.1.1.1 and §3.2.)

*Source: [RG Guidance v1.0 (Feb 2026)](https://www.spillemyndigheden.dk/uploads/2026-02/The%20Danish%20Gambling%20Authority%27s%20Guidance%20on%20responsible%20gambling%20-%20betting%20and%20online%20casino.pdf); [Operator guidelines v9.0 (Jun 2025)](https://www.spillemyndigheden.dk/uploads/2025-06/Guidelines%20for%20operators%20of%20betting%20and%20online%20casino%20version%209.0%202025.pdf)*

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 18+ (liberalised gambling); 16+ (monopoly lotteries and charity lotteries) |
| **Legal framework** | Spilleloven (Danish Gambling Act), in force since 1 January 2012 |
| **Online gambling** | Legal and regulated -- separate licence types for online casino and online betting |
| **Land-based gambling** | Legal and regulated -- separate licences for casinos, gaming machines, bingo |

### Permitted products table

| Product | Vertical | Legal status | Licence type | Notes |
|---|---|---|---|---|
| Online casino | Interactive | Legal | Online casino licence (Exec Order 682/2025) | Roulette, blackjack, baccarat, poker, bingo, slots, combination games |
| Online betting | Interactive | Legal | Betting licence (Exec Order 684/2025) | Online sports and event betting |
| Land-based betting | Land-based | Legal | Betting licence (Exec Order 686/2025) | Retail betting shops; player-info, age, ROFUS and signage duties |
| Land-based casino | Land-based | Legal | Casino licence (Exec Order 1290/2019) | 6 licensed casinos in Denmark |
| Gaming machines | Land-based | Legal | Gaming machine licence (Exec Order 1289/2019) | Arcades and hospitality venues |
| Land-based bingo | Land-based | Legal | Bingo licence (Exec Order 1439/2024) | Separate from online bingo |
| Lottery (monopoly) | Both | Legal (monopoly) | Danske Lotteri Spil (state monopoly) | 16+ age limit |
| Charity lotteries | Both | Legal (licensed) | Exec Order 1288/2019 | 16+ age limit |
| Horse racing | Both | Legal (monopoly) | Danske Spil / licensed operators | Regulated under betting framework |

### Key legislation

| Legislation | Scope | Relevance to {{PROGRAM_NAME}} |
|---|---|---|
| Spilleloven (Gambling Act) | National gambling framework | Core legislation: age limits, advertising rules, responsible gambling mandate, ROFUS |
| Exec Order 1274/2019 (as amended by 682/2025) | Online casino operations | Deposit limits, ROFUS integration, responsible gambling tools, self-test referral (§15), certification requirements |
| Exec Order 1276/2019 (as amended by 684/2025) | Online betting operations | Deposit limits, ROFUS integration, responsible gambling tools, self-test referral (§13), certification requirements |
| Exec Order 686/2025 | Land-based betting operations | Betting-shop player information, age, signage, ROFUS, responsible gambling duties |
| Exec Order 1290/2019 | Land-based casino operations | Casino responsible gambling obligations, signage, exclusion |
| RG Guidance v1.0 (26 Feb 2026) | Online RG standard of practice | Controlling interpretation of all online RG duties; supersedes RG Guide v1.4 for betting and online casino |
| Guide on duty of disclosure v3.0 (15 Jul 2025) | Marketing disclosure standard | In-ad 18+/ROFUS/StopSpillet; social-media and affiliate scope; boosted odds; loyalty programmes |
| Guide on sales promotion v5.0 (15 Jul 2025) | Bonus and promotion standard | Bonus structures, promotional draw/prize-value calculation, loyalty treatment |
| Certification Programme (SCP set) | Technical standard (player-facing parts) | Labelling scheme, statement of account, deposit-limit-before-play, RG-info display |
| Marketing Practices Act | Advertising across all sectors | Consumer protection overlay on gambling advertising; enforced by Consumer Ombudsman |
| Hvidvaskloven (AML Act) | Anti-money laundering | KYC requirements, suspicious activity reporting |
| Exec Order 43/2025 | Match-fixing prevention | Mandatory staff training on match-fixing |

*Source: [Spillemyndigheden legal framework](https://www.spillemyndigheden.dk/en/legal-framework); [RG Guidance v1.0](https://www.spillemyndigheden.dk/uploads/2026-02/The%20Danish%20Gambling%20Authority%27s%20Guidance%20on%20responsible%20gambling%20-%20betting%20and%20online%20casino.pdf)*

---

## Helpline

| Field | Value |
|---|---|
| **Name** | StopSpillet (StopGambling) |
| **Phone** | +45 70 22 28 25 |
| **Website** | [StopSpillet.dk](https://stopspillet.dk) |
| **Phone hours** | Mon-Thu 9am-9pm; Fri 9am-5pm |
| **Chat hours** | Mon-Thu 5pm-9pm (via StopSpillet.dk) |
| **Languages** | Danish |
| **Cost** | Free |
| **Operated by** | Spillemyndigheden (Danish Gambling Authority) |
| **Who can call** | Players, relatives, professionals |

StopSpillet also provides a free, anonymous online self-test for evaluating gambling habits. This self-test is not just a convenience: online licensees **must give players access to a self-test for disordered gambling** as one of the mandatory player-information items, and may satisfy that duty by linking directly to the StopSpillet self-test. Treat the self-test link as a required disclosure on the RG page and in collateral, alongside the StopSpillet and ROFUS references.

*Source: [RG Guidance v1.0 (Feb 2026)](https://www.spillemyndigheden.dk/uploads/2026-02/The%20Danish%20Gambling%20Authority%27s%20Guidance%20on%20responsible%20gambling%20-%20betting%20and%20online%20casino.pdf) §3.1.1; Exec Order 682/2025 §15; Exec Order 684/2025 §13*

Denmark has **13 treatment centres** across the country offering free services for people experiencing gambling harm, some providing online treatment options.

### Display rules

#### Land-based display

Operators must display StopSpillet helpline information visibly within casino premises, alongside information about ROFUS self-exclusion. The DGA labelling scheme must be displayed to verify licensing.

*Source: [RG Guide v1.4](https://www.spillemyndigheden.dk/uploads/2022-12/The%20Danish%20Gambling%20Authority%E2%80%99s%20guide%20on%20responsible%20gambling%20version%201.4.pdf)*

#### Interactive display

StopSpillet helpline must be accessible from every page of the gambling platform. Operators must also provide information about treatment centres (not just one, but multiple), a direct link to the StopSpillet **self-test**, and ROFUS registration access across all platforms. All of this mandatory information must be in Danish and placed prominently. Online casino platforms must additionally display an always-on session clock (see [Player protection -- interactive](#player-protection----interactive)).

*Source: [Spillemyndigheden responsible gambling](https://www.spillemyndigheden.dk/en/responsible-gambling); [RG Guidance v1.0 (Feb 2026)](https://www.spillemyndigheden.dk/uploads/2026-02/The%20Danish%20Gambling%20Authority%27s%20Guidance%20on%20responsible%20gambling%20-%20betting%20and%20online%20casino.pdf) §3.1.1, §3.2*

### On-brand helpline display

**Bare compliance** (what most operators do):
> "StopSpillet: 70 22 28 25"

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> "Need to talk? StopSpillet is free, confidential, and staffed by professionals. Call 70 22 28 25 or chat at StopSpillet.dk."

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Messaging regime summary

Denmark uses an **obligation-based** approach. There is no single verbatim statement prescribed by law. Instead, operators must communicate specific information in specific contexts.

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| All marketing | Obligation-based | Age limit (18+), ROFUS info, StopSpillet reference, the Authority's label | Gambling Act s.36; Duty of Disclosure Guide v3.0; Information-when-marketing rules (1 Apr 2020) |
| All online platforms | Obligation-based | RG information, treatment-centre contacts, self-test link -- in Danish, prominently placed | RG Guidance v1.0 §3.1.1, §3.2 |
| All land-based venues | Obligation-based | RG information, treatment-centre contacts (casino: RG Guide v1.4; betting shops: Exec Order 686/2025) | RG Guide v1.4; Exec Order 686/2025 |
| Before play (online) | Standard-based | Deposit limit must be set | Exec Orders 682/684; RG Guidance v1.0 |
| Account creation | Standard-based | ROFUS check, age verification | Exec Orders 682/684 |
| Bonus offers | Obligation-based | All conditions disclosed alongside the offer | Gambling Act; Duty of Disclosure Guide v3.0; Sales Promotion Guide v5.0 |
| All marketing | Obligation-based | Winning chances presented correctly and in balanced manner | Gambling Act s.36 |

**Obligation types explained:**
- **Verbatim** -- exact prescribed text that must appear word-for-word (Denmark has none)
- **Obligation-based** -- must post information meeting a described standard, but no prescribed wording
- **Standard-based** -- must display specific items (e.g., ROFUS, 18+, StopSpillet) but surrounding copy is flexible

### Verbatim required statements

None. Denmark does not prescribe verbatim responsible gambling messages. All requirements are obligation-based or standard-based.

### Obligation-based requirements

| Obligation | What must be communicated | Where | Source |
|---|---|---|---|
| Age limit display | "18+" or equivalent age restriction notice | All marketing, all platforms | Gambling Act s.36 |
| ROFUS information | Ability to self-exclude via ROFUS | All marketing, all platforms | Gambling Act; RG Guidance v1.0 |
| StopSpillet reference | Helpline contact details | All marketing, all platforms | RG Guidance v1.0; Information-when-marketing rules |
| Self-test referral | Direct link/access to the StopSpillet self-test for disordered gambling | All online platforms | RG Guidance v1.0 §3.1.1; Exec Orders 682 §15 / 684 §13 |
| Treatment centre info | Contact information for treatment centres | All platforms | RG Guidance v1.0 (online); RG Guide v1.4 (land-based casino) |
| Danish language and placement | Mandatory player/RG information must be in Danish and in a prominent place | All online platforms | RG Guidance v1.0 §3.1.1.1, §3.2 |
| Winning chances | Odds presented correctly, not misleading | All marketing | Gambling Act s.36 |
| Bonus conditions | Full terms alongside any bonus offer | All marketing | Gambling Act; Duty of Disclosure Guide v3.0; Sales Promotion Guide v5.0 |
| Deposit limit prompt | Player must set a deposit limit before playing | Online platforms | Exec Orders 682/684; RG Guidance v1.0 |
| DGA label | Danish Gambling Authority labelling scheme | All platforms | Certification Programme (SCP.00) |

### On-brand integration

Since Denmark has no verbatim statements, operators have full flexibility to use {{PROGRAM_NAME}} messaging as long as all obligations are met.

**Generic operator approach:**
> "18+ | Spil med omtanke | StopSpillet.dk | ROFUS.dk"

**{{PROGRAM_NAME}} on-brand approach:**
> "18+ only. Set your limits, play your way. Need a break? Register with ROFUS. Need to talk? StopSpillet: 70 22 28 25."

**Rules for on-brand integration:**
1. The 18+ age limit, ROFUS reference, and StopSpillet reference must always be present
2. On online platforms, a direct link to the StopSpillet self-test must also be present, and all mandatory information must be in Danish and prominently placed
3. Winning chances must never be exaggerated or presented misleadingly
4. Bonus conditions must be fully disclosed alongside any offer
5. All messaging must frame gambling as entertainment, not income
6. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

Denmark's advertising framework is governed by two overlapping legal instruments:

1. **Gambling Act (Spilleloven) s.36** -- gambling-specific advertising rules
2. **Marketing Practices Act** -- general consumer protection advertising rules, enforced by the Consumer Ombudsman

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| Age targeting | Must not target under-18s in form or media choice | All | Gambling Act s.36 |
| Under-25 ban | Persons under 25 may not appear in gambling advertising (from 2027) | All | 2027 advertising reform |
| Winning chances | Must present odds correctly and in balanced manner | All | Gambling Act s.36 |
| Entertainment framing | Must focus on gambling as entertainment | All | Gambling Act s.36 |
| Financial claims | Must not suggest gambling solves financial problems | All | Gambling Act s.36 |
| Social status claims | Must not suggest gambling improves social acceptance | All | Gambling Act s.36 |
| Celebrity endorsement | Must not falsely imply public figures' success resulted from gambling | All | Gambling Act s.36 |
| Bonus disclosure | All bonus conditions disclosed directly alongside the offer | All | Duty of Disclosure Guide v3.0; Sales Promotion Guide v5.0 |
| ROFUS reference | Must include ROFUS self-exclusion information | All | Gambling Act; Duty of Disclosure Guide v3.0 |
| 18+ display | Must include age limit in all marketing | All | Gambling Act s.36; Information-when-marketing rules |
| StopSpillet reference | Must include helpline reference | All | Information-when-marketing rules; Duty of Disclosure Guide v3.0 |
| Authority's label in ads | Must carry the DGA label where format allows (case-by-case media feasibility) | All | Information-when-marketing rules (1 Apr 2020) |
| School proximity | Ads banned within 200m of schools (from 2027) | All | 2027 advertising reform |
| Live sports ban | Whistle-to-whistle ad ban during live broadcasts (from 2027) | All | 2027 advertising reform |
| ROFUS marketing ban | Must not send marketing to ROFUS-registered players | All | ROFUS rules |

### Channel-specific rules

| Channel | Key restrictions | Verticals | Source |
|---|---|---|---|
| Broadcast (TV/radio) | Whistle-to-whistle ban during live sports (from 2027); must include 18+, ROFUS, StopSpillet | All | 2027 reform; Gambling Act |
| Digital | Must include 18+, ROFUS, StopSpillet; bonus conditions alongside offer; no targeting under-18s | All | Gambling Act s.36 |
| Print | Must include 18+, ROFUS, StopSpillet; proximity ban near schools (from 2027) | All | Gambling Act; 2027 reform |
| Direct marketing | Prohibited to ROFUS-registered players; opt-in required | All | ROFUS rules |
| In-venue | DGA labelling scheme displayed; RG information visible | Land-based | RG Guide v1.4 (casino); Exec Order 686/2025 (betting shops) |
| Sponsorship | Under-25 brand ambassador ban (from 2027); may not glamorise gambling as trendy or social | All | 2027 reform |
| Public transport | Gambling ads on public transport banned (from 2027) | All | 2027 reform |

### Prohibited content

- Targeting children or young people under 18 in form or media choice
- Suggesting gambling can solve financial problems
- Suggesting gambling improves social acceptance or status
- Implying that public figures' success is related to gambling
- Glamorising gambling as a trendy activity or social event
- Presenting gambling as a way to make money
- Misleading presentation of winning chances
- Using persons under 25 in advertisements (from 2027)

### Required disclosures

All gambling advertising must include:
1. **18+** age limit notice
2. **ROFUS** self-exclusion information
3. **StopSpillet** helpline reference
4. **Bonus conditions** (if a bonus is advertised) -- directly alongside the offer

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

Denmark operates a **single unified self-exclusion program (ROFUS)** covering both land-based and interactive gambling. ROFUS itself offers a short 24-hour break as well as longer temporary exclusions (1, 3 or 6 months) and permanent exclusion. Separately, operators may also offer an account-level cool-off at the licence-holder level -- but the 24-hour break is a genuine ROFUS option, not only an operator tool.

### ROFUS registration options

| Option | Duration | Reach | Source |
|---|---|---|---|
| **Short-term break** | 24 hours (cooling-off period) | All Danish-licensed operators and land-based venues | [Spillemyndigheden ROFUS](https://www.spillemyndigheden.dk/en/rofus); [RG Guidance v1.0 §9.1](https://www.spillemyndigheden.dk/uploads/2026-02/The%20Danish%20Gambling%20Authority%27s%20Guidance%20on%20responsible%20gambling%20-%20betting%20and%20online%20casino.pdf) |
| **Temporary exclusion** | 1 month, 3 months or 6 months | All Danish-licensed operators and land-based venues | [Spillemyndigheden ROFUS](https://www.spillemyndigheden.dk/en/rofus); [RG Guidance v1.0 §9.1](https://www.spillemyndigheden.dk/uploads/2026-02/The%20Danish%20Gambling%20Authority%27s%20Guidance%20on%20responsible%20gambling%20-%20betting%20and%20online%20casino.pdf) |
| **Permanent exclusion** | Permanent (closes the account; removal no earlier than 1 year + 7 days) | All Danish-licensed operators and land-based venues | [Spillemyndigheden ROFUS](https://www.spillemyndigheden.dk/en/rofus); [RG Guidance v1.0 §9.1](https://www.spillemyndigheden.dk/uploads/2026-02/The%20Danish%20Gambling%20Authority%27s%20Guidance%20on%20responsible%20gambling%20-%20betting%20and%20online%20casino.pdf) |

ROFUS registration options are **24 hours, 1 month, 3 months, 6 months, or permanent** (RG Guidance v1.0 §9.1). There is no exclusion period between 24 hours and 30 days -- once past the short-term break, the shortest temporary exclusion is 1 month. Operators may *additionally* run an account-level cool-off with their own service, but the 24-hour break is itself a valid ROFUS term.

### ROFUS -- Register of Voluntarily Excluded Players

| Field | Value |
|---|---|
| **Program name** | ROFUS (Register over Frivilligt Udelukkede Spillere) |
| **Registration terms** | 24 hours (short-term break); 1 month, 3 months, or 6 months (temporary exclusion); or permanent |
| **Scope** | National -- all Danish-licensed online operators, all land-based casinos, physical betting retailers (since Oct 2023) |
| **Enrollment method** | Online via MitID (digital authentication) at [rofusweb.spillemyndigheden.dk](https://rofusweb.spillemyndigheden.dk); or paper form (9-01) mailed to Spillemyndigheden |
| **Account action** | Online: operator must close account upon discovering permanent registration; refund deposits |
| **Marketing cessation** | Automatic "No thank you to marketing" status for all registered players -- no gambling communications permitted |
| **Exclusion periods** | A short-term break is 24 hours; temporary exclusion is a minimum of 1 month (no period is offered between 24 hours and 1 month). Source: RG Guidance v1.0 §9.1 |
| **Reinstatement** | Short-term and temporary registrations expire automatically at the exact time of registration and cannot be annulled early. Permanent registration: a removal request can be made no earlier than 1 year after registration and confirmed at the earliest 7 days later, so removal completes no earlier than **1 year + 7 days** (via MitID at rofus.nu). |
| **Operator obligation** | Must check ROFUS at login and account creation; must connect to ROFUS system |
| **Source** | [Spillemyndigheden ROFUS](https://www.spillemyndigheden.dk/en/rofus); [RG Guidance v1.0 §9.1](https://www.spillemyndigheden.dk/uploads/2026-02/The%20Danish%20Gambling%20Authority%27s%20Guidance%20on%20responsible%20gambling%20-%20betting%20and%20online%20casino.pdf); [Operator guidelines v9.0 §7.2.11](https://www.spillemyndigheden.dk/uploads/2025-06/Guidelines%20for%20operators%20of%20betting%20and%20online%20casino%20version%209.0%202025.pdf) |

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your play" | ROFUS | Never in Tier 1 -- keep it approachable |
| Tier 2 (formal) | "Self-exclusion" | ROFUS | Legal documents, formal enrollment |
| Marketing | "Register with ROFUS" | ROFUS | Required in all marketing materials |
| Staff training | Both | ROFUS | When explaining the program's official name |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../collateral/customer-service/staff-faq.md):

> **Q: What is ROFUS?**
>
> ROFUS is Denmark's national self-exclusion register, administered by the Danish Gambling Authority. Players can register for a 24-hour break, a temporary exclusion of 1, 3, or 6 months, or permanently, covering all Danish-licensed online gambling and land-based venues. Registration is done via MitID or paper form. During the registration, players cannot access any gambling platform and are automatically removed from all marketing. Operators may also offer their own account-level cool-off as an additional option, but the 24-hour break is itself a ROFUS term. If a player asks about ROFUS, explain the options and offer to help them get started. Use "take a break" in casual conversation, "ROFUS" when referring to the specific program.

---

## Player protection -- land-based

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Responsible gambling information posting | Yes | RG information, StopSpillet, ROFUS info must be visible | RG Guide v1.4 (casino); Exec Order 686/2025 (betting shops) |
| Helpline display | Yes | StopSpillet details prominently displayed | RG Guide v1.4; Exec Order 686/2025 |
| DGA labelling scheme | Yes | Must display the Authority's label to verify licensing | Certification Programme (SCP.00) |
| Employee training | Yes | Staff must recognise and respond to players showing signs of harm; match-fixing training mandatory since 2025 | RG Guide v1.4; Exec Order 43/2025 |
| Self-exclusion | Yes | ROFUS check required; registered players must not enter | ROFUS rules |
| Age verification | Yes | 18+ verification at entry | Gambling Act; Exec Order 1290/2019 (casino); Exec Order 686/2025 (betting) |
| Duty of attention | Yes | Identify players showing signs of harm and intervene (passive measures and active contact) | RG Guide v1.4; RG Guidance v1.0 §6 |

### {{PROGRAM_NAME}} tool messaging -- land-based

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| RG information | "Know the game before you play it. Odds, rules, house edge -- all right here." | Venue signage |
| ROFUS | "Need a longer break? ROFUS lets you step away from all Danish gambling -- 1, 3, or 6 months, or permanently. Ask any staff member." | Venue signage, table tents |
| StopSpillet | "Need to talk? StopSpillet: 70 22 28 25. Free, confidential, staffed by professionals." | Venue signage, helpline cards |

---

## Player protection -- interactive

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Deposit limits | Yes (mandatory) | Players MUST set daily, weekly, or monthly deposit limit before play begins. Mandatory since January 2020. Limits are per-operator, not cross-platform. | Exec Orders 682/684; RG Guidance v1.0 |
| Always-on session clock | Yes (online casino) | Online casino sites/apps must display a clock that stays visible for the entire logged-in session so the player can track time spent. It cannot be scrolled or clicked away. | RG Guidance v1.0 §3.1.1.2 |
| Self-test referral | Yes | Players must be given access to the StopSpillet self-test for disordered gambling (direct link satisfies the duty) | RG Guidance v1.0 §3.1.1; Exec Orders 682 §15 / 684 §13 |
| Loss limits | Recommended | Operators should offer loss limits alongside deposit limits | RG Guidance v1.0 |
| Session / play-time limits | Available | Operators must offer time limit options (activation by player) | RG Guidance v1.0; Certification Programme |
| Cool-off / break periods | Yes | Account-level cool-off (a short break with this operator) -- separate from ROFUS; operators should offer internal break tools | RG Guidance v1.0 |
| Game-type restrictions | Available | Operators must offer ability to restrict game types (activation by player) | Certification Programme |
| Activity statements / game history | Yes | Customers must be able to access a statement of account (deposits, withdrawals, game activity) | Certification Programme (SCP.02 Base platform) |
| Responsible gambling message | Yes | RG information including StopSpillet, ROFUS, self-test, treatment centres on every page -- in Danish, prominently placed | RG Guidance v1.0 §3.1.1, §3.2 |
| Self-exclusion | Yes | ROFUS integration mandatory; check at login and account creation | ROFUS rules |
| Single account enforcement | Yes | One account per operator per player | Exec Orders 682/684 |
| Duty of attention (behavioural intervention) | Yes | Identify players showing signs of harm using defined parameters (spend, time, loss-chasing), then apply passive measures and active interventions (autogenerated warnings, feedback on current losses/time, direct contact) | RG Guidance v1.0 §6 |
| ROFUS check | Yes | Must verify against ROFUS at login and account creation | ROFUS rules |
| DGA label | Yes | Must display the Authority's labelling scheme | Certification Programme (SCP.00) |
| Bonus restrictions | Yes | Bonuses must be offered on uniform terms (not individualised); conditions disclosed alongside offer; promotional draw/prize value calculated per the sales-promotion rules | Gambling Act; Duty of Disclosure Guide v3.0; Sales Promotion Guide v5.0 |

### {{PROGRAM_NAME}} tool messaging -- interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit -- it's required before you start, and it keeps you in control. Daily, weekly, or monthly -- your call." | Registration flow |
| Session limits | "Set a session reminder -- your dashboard, your rules." | Account settings |
| Session clock (online casino) | "The clock in the corner stays with you the whole session -- a simple way to see how long you've been playing." | Always-on, every logged-in screen |
| Self-test | "Curious how your play stacks up? Take the free, anonymous StopSpillet self-test." | RG page, account settings |
| ROFUS | "Need a break? Register with ROFUS for 24 hours, 1, 3, or 6 months, or permanently. One registration covers all Danish operators." | RG page, account settings |
| StopSpillet | "Need to talk? StopSpillet is free, confidential, and staffed by professionals. Call 70 22 28 25 or chat at StopSpillet.dk." | RG page, support section |
| Account statement | "See your full play history -- deposits, withdrawals, and game activity. No surprises." | Account dashboard |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 18+ (liberalised gambling) |
| **Exception** | 16+ for monopoly lotteries (Danske Lotteri Spil) and charity lotteries |
| **`_brand.yml` key** | `legal.minimum_gambling_age.denmark` |
| **`{{MIN_AGE}}` token value** | 18 |
| **Statutory basis** | Gambling Act (Spilleloven) |

### Land-based verification

| Requirement | Details | Source |
|---|---|---|
| **Method** | ID verification at casino entry | Gambling Act; Exec Order 1290 |
| **Acceptable ID** | Government-issued photo identification | Gambling Act |

### Interactive verification

| Requirement | Details | Source |
|---|---|---|
| **Registration requirements** | Date of birth, CPR number (Danish civil registration number) or equivalent identity verification | Exec Orders 1274/1276 |
| **Verification method** | MitID (national digital ID) or equivalent identity verification | Exec Orders 1274/1276 |
| **Verification window** | At registration / before play | Exec Orders 1274/1276 |

### Age messaging

All collateral in this jurisdiction must display the 18+ age notice:

> "You must be 18+ to gamble."

This is required in all marketing materials per the Gambling Act s.36.

---

## AML/KYC

| Requirement | Value |
|---|---|
| **AML authority** | Spillemyndigheden (gambling sector supervisor); Danish FSA (Finanstilsynet, general AML authority) |
| **Primary legislation** | Hvidvaskloven (Act on Measures to Prevent Money Laundering and Financing of Terrorism), Consolidation Act No. 433 of 17 April 2026 |
| **KYC requirements** | Identity verification at account creation; ongoing monitoring |
| **Risk assessment** | Written risk assessment required based on business model |
| **Record retention** | 5 years after business relationship ends |
| **Suspicious activity reporting** | Immediate notification to Danish FIU via GoAML portal |
| **Player-facing impact** | Identity verification at registration; source-of-funds checks for unusual activity |

*Source: [Spillemyndigheden AML](https://www.spillemyndigheden.dk/en/prevention-money-laundering)*

### Player-facing messaging

When AML/KYC processes affect players (identity verification, source of funds checks), use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity."

**On-brand:**
> "Quick ID check -- it keeps your account secure and is required for all players in Denmark."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Denmark-specific adaptations.

| Category | Collateral | Verticals | Adaptation required | Token |
|---|---|---|---|---|
| **Digital** | Website | Both | StopSpillet helpline, ROFUS link, 18+, DGA label, Danish language | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Digital** | Wagering account / app | Interactive | Mandatory deposit limit prompt at registration; ROFUS check; StopSpillet on every page | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email templates | Both | StopSpillet + ROFUS in footer; 18+; no emails to ROFUS-registered players | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media | Both | 18+ in all posts; StopSpillet and ROFUS references; no under-25 brand ambassadors | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Print** | Brochure | Both | StopSpillet helpline, ROFUS info, 18+ notice, DKK currency | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Print** | Rack card | Land-based | StopSpillet helpline prominent; 18+; ROFUS reference | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Land-based | StopSpillet helpline; ROFUS info | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | Both | StopSpillet as primary helpline | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Venue signage | Land-based | 18+ entry restriction; StopSpillet; ROFUS; DGA label | `{{MIN_AGE}}` |
| **Environmental** | Digital display | Land-based | StopSpillet in rotation; ROFUS info | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot | Both | StopSpillet + 18+ + ROFUS in end card; whistle-to-whistle ban (from 2027) | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Video/Audio** | Radio spot | Both | StopSpillet read in every spot; 18+; ROFUS | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Pre-roll | Interactive | StopSpillet overlay; 18+; ROFUS | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Customer service** | Conversation scripts | Both | StopSpillet referral; ROFUS enrollment; Danish treatment centres | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Both | ROFUS Q&A; StopSpillet Q&A; deposit limit Q&A | -- |

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` (or see [`_brand-denmark.yml`](_brand-denmark.yml) for ready-to-paste values):

```yaml
# --- HELPLINES ---------------------------------
helplines:
  denmark:
    number: "+45 70 22 28 25"
    website: "https://stopspillet.dk"
    label: "StopSpillet"
    hours: "Mon-Thu 9am-9pm; Fri 9am-5pm"
    chat_hours: "Mon-Thu 5pm-9pm"
    languages:
      - Danish

# --- LEGAL -------------------------------------
legal:
  minimum_gambling_age:
    denmark: 18

# --- MESSAGING ---------------------------------
messaging:
  mandatory:
    # denmark: No verbatim mandatory statement.
    # Obligation-based: all marketing must include 18+, ROFUS info,
    # and StopSpillet reference. See compliance module for details.
    denmark-deposit-limit: "Du skal saette en indbetalingsgraense, foer du kan spille."
    # Translation: "You must set a deposit limit before you can play."

# --- SELF-EXCLUSION ----------------------------
self_exclusion:
  denmark:
    program_name: "ROFUS"
    url: "https://rofusweb.spillemyndigheden.dk"
    # ROFUS registration terms (RG Guidance v1.0 §9.1): 24-hour short break,
    # 1/3/6-month temporary exclusion, or permanent. No period between 24h and 1 month.
    durations: "24 hours, 1 month, 3 months, 6 months, or permanent"
    scope: "All Danish-licensed online operators, all land-based casinos, physical betting retailers"
```

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Denmark.

### Regulatory
- [ ] Identified Spillemyndigheden as primary regulator
- [ ] Confirmed licence type and status for chosen verticals
- [ ] Verified legal gambling age: 18+
- [ ] Reviewed permitted products table
- [ ] Checked 2027 advertising reform timeline
- [ ] Identified deployment verticals: [ ] Land-based [ ] Interactive [ ] Both

### Messaging
- [ ] 18+ age limit displayed in all marketing and on all platforms
- [ ] ROFUS self-exclusion information in all marketing and on all platforms
- [ ] StopSpillet helpline (70 22 28 25) displayed on all platforms and in all marketing
- [ ] StopSpillet self-test link provided on all online platforms (required disclosure)
- [ ] Treatment centre information provided (multiple centres, not just one)
- [ ] Mandatory player/RG information presented in Danish and in a prominent place
- [ ] DGA labelling scheme displayed on platforms
- [ ] Winning chances presented correctly and in balanced manner
- [ ] Bonus conditions disclosed alongside all offers (Duty of Disclosure v3.0; Sales Promotion v5.0)
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Denmark values

### Advertising
- [ ] No under-18 targeting in form or media choice
- [ ] Under-25 brand ambassador ban verified (from 2027)
- [ ] School proximity ban verified (from 2027)
- [ ] Whistle-to-whistle live sports ban verified (from 2027)
- [ ] Required disclosures (18+, ROFUS, StopSpillet) in all ads
- [ ] No prohibited content (financial claims, social status claims, misleading odds)
- [ ] ROFUS-registered players excluded from all marketing
- [ ] Public transport ad ban verified (from 2027)

### Self-exclusion
- [ ] ROFUS integration implemented -- checks at login and account creation
- [ ] ROFUS registration terms stated correctly: 24 hours, 1/3/6 months, or permanent (no period between 24h and 1 month)
- [ ] Account-level cool-off available as an additional operator tool (the 24-hour break is itself a ROFUS option)
- [ ] ROFUS-registered players' accounts handled correctly (closure for permanent; no access for temporary)
- [ ] "No thank you to marketing" enforced for all ROFUS-registered players
- [ ] Deposits refunded for permanently excluded players
- [ ] Staff trained on ROFUS enrollment process
- [ ] ROFUS language mapped to {{PROGRAM_NAME}} tiers

### Player protection -- land-based
*Check only if deploying in land-based venues.*
- [ ] RG information posted including StopSpillet, ROFUS, treatment centres
- [ ] Betting-shop deployments: Exec Order 686/2025 player-info, age and ROFUS duties met
- [ ] DGA labelling scheme displayed
- [ ] Staff trained on responsible gambling identification and response
- [ ] Match-fixing prevention training completed (Exec Order 43/2025)
- [ ] Age verification at entry enforced (18+)
- [ ] Duty of attention procedures in place (identify signs of harm and intervene)

### Player protection -- interactive
*Check only if deploying on interactive/online platforms.*
- [ ] Mandatory deposit limit implemented (daily, weekly, or monthly -- player must set before play)
- [ ] Always-on session clock implemented on online casino (visible entire logged-in session; cannot be dismissed)
- [ ] Self-test access provided (link to StopSpillet self-test)
- [ ] Time limits offered (activation by player)
- [ ] Game-type restrictions offered (activation by player)
- [ ] Account-level cool-off / break periods available (separate from ROFUS)
- [ ] Statement of account accessible to players (SCP.02)
- [ ] Duty of attention implemented: identify signs of harm (spend/time/loss-chasing) and intervene
- [ ] ROFUS check at login and account creation
- [ ] Single account enforcement
- [ ] DGA labelling scheme displayed
- [ ] StopSpillet accessible from every page

### Age verification
- [ ] Land-based: 18+ ID verification at casino entry
- [ ] Interactive: identity verification at registration (MitID or equivalent)

### Content
- [ ] All collateral adapted per collateral adaptation table
- [ ] Staff FAQ updated with ROFUS, StopSpillet, and deposit limit Q&As
- [ ] Conversation scripts updated with Denmark-specific references
- [ ] Currency adapted to DKK where relevant
- [ ] Odds format adapted to decimal where relevant

### Governance
- [ ] `_brand.yml` updated with Denmark values (or `_brand-denmark.yml` merged)
- [ ] `Last verified` date set
- [ ] `Next review due` date set (quarterly)
- [ ] Source verification: marketing-guide PDFs text-verified (Duty of Disclosure v3.0, 15 Jul 2025; Sales Promotion v5.0, 15 Jul 2025); confirm the SCP document links before merge
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

## Source verification note

This module's standards-of-practice layer was reconciled against Spillemyndigheden primary sources on 2026-06-08. The governing PDFs were text-verified against their title pages and version histories: the **RG Guidance v1.0 (26 Feb 2026)**, the **operator guidelines v9.0 (Jun 2025)**, the **Duty of Disclosure guide v3.0 (15 Jul 2025)**, and the **Sales Promotion guide v5.0 (15 Jul 2025)**. Verified content includes the ROFUS registration options (RG Guidance §9.1: 24-hour short break, 1/3/6-month temporary exclusion, or permanent; permanent removal no earlier than 1 year + 7 days), the always-on clock, the duty of attention, and the self-test referral. Note: the Duty of Disclosure PDF is *named* `...version 3_1.pdf` but its content reads "Version 3.0 of 15 July 2025" -- the link is kept as-published while the version is cited as v3.0. Confirm the Certification Programme (SCP) document links via the [Spillemyndigheden certification](https://www.spillemyndigheden.dk/en/certification) page before merge. This material is for informational and educational purposes only and does not constitute legal advice; verify all requirements with qualified Danish counsel before deploying {{PROGRAM_NAME}}.

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [`_brand-denmark.yml`](_brand-denmark.yml) | [Advertising Rules](advertising-rules.md) | [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../collateral/customer-service/staff-faq.md) | [Governance](../../brand-book/08-governance.md) | [Jurisdictions README](../README.md)*
