---
content_type: jurisdiction-module
title: "Ontario — Compliance Module"
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
game_type: [slots, blackjack, roulette, sports-betting, poker, lottery, baccarat]
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
  currency: cad
  sports_culture: us-major-leagues
  language: en-us
adaptation_status: base
adaptation_notes: |
  Ontario module uses CAD currency context. No mandatory verbatim
  statement (unlike BC). ConnexOntario helpline is Ontario-specific.
  On-brand messaging examples need cultural adaptation for non-North-
  American deployments. iGaming market structure (open competitive)
  differs from BC's BCLC monopoly — affects deployment model.
  OLG PlaySmart compatibility section is Ontario-specific.
last_updated: 2026-06-08
---

# Ontario — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Ontario. Ontario has a unique hybrid model: OLG operates land-based casinos and OLG.ca, while the iGaming market is open to private operators registered with AGCO and contracted through iGaming Ontario (iGO). There is no mandatory verbatim statement (unlike BC's "Know your limit, play within it"), but ConnexOntario (1-866-531-2600) must be prominently displayed. Ontario's iGaming standards are among the most detailed in North America, with mandatory deposit/loss limits, per-wager operator-advantage disclosure, real-time behavioural monitoring, and a live centralized self-exclusion program — **BetGuard** (BetGuard.ca, live since May 14, 2026).

> **Last verified**: 2026-06-08
> **Next review due**: 2026-09-08 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | AGCO, iGaming Ontario, OLG |
| [Legal requirements](#legal-requirements) | 19+, hybrid model, permitted products |
| [Game information & odds disclosure](#game-information--odds-disclosure) | Binding Category-4 standards (Std 4.05–4.07) |
| [Helpline](#helpline) | ConnexOntario details and display rules |
| [Messaging requirements](#messaging-requirements) | No verbatim mandate — what IS required |
| [Operator RG obligations (iGO agreement)](#operator-rg-obligations-igo-operating-agreement) | RG Check accreditation, RG campaigns, ad balance |
| [Advertising restrictions](#advertising-restrictions) | AGCO standards + CGA national code |
| [PlaySmart compatibility](#playsmart-compatibility) | Working alongside OLG's player education program |
| [Self-exclusion](#self-exclusion) | OLG My PlayBreak + iGaming BetGuard (centralized) |
| [Player protection tools](#player-protection-tools) | Deposit limits, loss limits, breaks, behavioural monitoring |
| [Age verification](#age-verification) | 19+ requirements |
| [AML/KYC](#amlkyc) | FINTRAC requirements |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Regulator** | Alcohol and Gaming Commission of Ontario (AGCO) |
| **iGaming market operator** | iGaming Ontario (iGO) — independent Crown agency (since May 2025) |
| **Land-based/lottery operator** | Ontario Lottery and Gaming Corporation (OLG) |
| **Governing legislation** | Gaming Control Act, 1992 (S.O. 1992, c.24) |
| **iGaming legislation** | iGaming Ontario Act, 2024 (in force May 12, 2025) |
| **Key regulations** | O. Reg. 722/21; [Registrar's Standards for Internet Gaming](https://www.agco.ca/en/book/export/html/245361); [Registrar's Standards for Gaming and Lottery](https://www.agco.ca/en/book/export/html/243206) |
| **Operator market agreement** | [iGaming Ontario operating agreement](https://igamingontario.ca/en/operator/your-role-responsible-gambling) — adds RG conditions (RG Check accreditation, RG campaigns) on top of AGCO standards |
| **Market launch** | April 4, 2022 (iGaming market) |

### Regulatory structure

Ontario's gambling regulation involves three bodies with distinct roles:

| Body | Role | Key functions |
|---|---|---|
| **AGCO** | Regulator | Registration of operators and suppliers, standards-setting, compliance enforcement, penalties |
| **iGO** (iGaming Ontario) | Market conductor | Commercial agreements with registered iGaming operators, revenue collection, market oversight |
| **OLG** | Crown corporation | Operates land-based casinos (via service providers), OLG.ca, lottery products, charitable gaming |

### How iGaming registration works

1. **Operator applies to AGCO** for registration as an internet gaming operator
2. **AGCO reviews** — background checks, financial capacity, responsible gambling capability
3. **AGCO registers** the operator (or denies)
4. **Operator contracts with iGO** — commercial agreement covering revenue sharing, operational requirements
5. **Operator launches** on the regulated Ontario market
6. **AGCO monitors** ongoing compliance with Registrar's Standards

### iGaming Ontario Act, 2024

On **May 12, 2025**, the iGaming Ontario Act, 2024 came into force, restructuring iGO as a **fully independent Crown agency** reporting directly to the Ministry of Tourism, Culture and Sport. Key changes:

| Area | Before (2022–2025) | After (May 2025+) |
|---|---|---|
| **Structure** | Subsidiary of AGCO | Independent Crown agency |
| **Reporting** | Through AGCO | Directly to Ministry of Tourism, Culture and Sport |
| **Mandate** | Conduct and manage iGaming | Same, with enhanced independence and exclusive authority |

**What this means for {{PROGRAM_NAME}} operators**: The regulatory requirements themselves did not change at transition. AGCO continues to set and enforce standards; iGO manages commercial relationships. Operators should monitor both bodies for updates.

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 19+ |
| **Legal framework** | Hybrid — OLG monopoly (land-based/lottery) + open competitive market (iGaming) |
| **Online gambling** | Legal — open iGaming market since April 4, 2022; 40+ registered private operators (75+ sites) + OLG.ca |
| **Lottery** | Legal — OLG operates Lotto 6/49, Lotto Max, PROLINE+, scratch tickets |

### Permitted products

| Product | Legal status | Operator | Notes |
|---|---|---|---|
| Casino (slots, table games) | Legal | OLG via service providers | 29 gaming sites (casinos + resort casinos) |
| Online casino (iGaming) | Legal | 40+ registered private operators (75+ sites) + OLG.ca | Open competitive market since April 2022 |
| Sports betting | Legal | Private operators + OLG PROLINE+ | Single-event since August 2021 (Bill C-218) |
| Lottery | Legal | OLG | Lotto 6/49, Lotto Max, Instant tickets |
| Horse racing | Legal | Ontario Racing | Regulated separately under Horse Racing Licence Act |
| Poker (live) | Legal | OLG venues | Available in licensed casinos |
| Charitable gaming (bingo) | Legal | OLG via cGaming centres | Community gaming model |

### Key regulatory notes

- Ontario's hybrid model means {{PROGRAM_NAME}} deployment can happen through **two paths**:
  - **OLG properties/OLG.ca**: as part of OLG's responsible gambling program alongside PlaySmart
  - **Private iGaming operators**: as supplementary content for any of 40+ registered operators (75+ sites)
- This differs from BC's BCLC monopoly — in Ontario, any registered iGaming operator can deploy {{PROGRAM_NAME}}
- The open market structure means {{PROGRAM_NAME}} content may need to work across multiple operator brands simultaneously

---

## Game information & odds disclosure

Ontario's iGaming standards mandate game-information and odds disclosure that maps directly to {{PROGRAM_NAME}}'s flagship "no fine print" proposition. These are **binding Category-4 standards** that apply to **every registered operator** — not just OLG. This is the regulatory anchor for {{PROGRAM_NAME}}'s odds-literacy content, and it is distinct from OLG's voluntary [PlaySmart](#playsmart-compatibility) program (which applies only to OLG properties).

### Binding disclosure standards (Registrar's Standards for Internet Gaming)

| Standard | Requirement |
|---|---|
| **Std 4.05** | Each game must have a game-specification document disclosing the **operator's advantage (house edge) for each wager** offered. |
| **Std 4.06** | **Before placing a wager**, players must be able to access sufficient information to make an **informed decision** — the chances of winning, how the game is played, the rules, prizes/odds, and any restrictions. |
| **Std 4.07** | Game information must **not mislead or misrepresent** the game, the odds, or the chances of winning. |

The land-based analogue lives in the [Registrar's Standards for Gaming and Lottery](https://www.agco.ca/en/book/export/html/243206) (Category 4). Primary source for the iGaming standards: [Registrar's Standards for Internet Gaming, Category 4](https://www.agco.ca/en/book/export/html/245361).

### Why this matters for {{PROGRAM_NAME}}

| Theme | How the Category-4 standards back {{PROGRAM_NAME}} content |
|---|---|
| **Odds literacy** | Std 4.06 obliges every operator to surface odds and how-to-play information before a wager — {{PROGRAM_NAME}}'s odds explainers and house-edge content help operators meet this in a way players actually read. |
| **House-edge transparency** | Std 4.05 requires per-wager operator-advantage disclosure — the exact subject of {{PROGRAM_NAME}}'s "no fine print" house-edge education. |
| **Myth-busting** | Std 4.07 bars misleading game information — {{PROGRAM_NAME}}'s myth-busters reinforce accurate mental models without overclaiming. |

### On-brand integration

**Bare compliance** (a buried game-info link):
> *Game rules and odds available in the game help menu.*

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> **Know the odds before you play.** Every game shows its house edge and how it works — here's what those numbers actually mean for your session.

Both satisfy Std 4.05–4.06. The second turns a mandated disclosure into {{PROGRAM_NAME}} odds-literacy content that players engage with.

---

## Helpline

### ConnexOntario

| Field | Value |
|---|---|
| **Name** | ConnexOntario |
| **Phone** | 1-866-531-2600 |
| **Text** | Text CONNEX to 247247 |
| **Website** | www.connexontario.ca |
| **Chat** | Available via website |
| **Hours** | 24/7, 365 days/year |
| **Languages** | English, French, and over 100 languages via interpretation services |
| **Cost** | Free |
| **Scope** | Gambling, substance use, mental health |

### Additional resources

| Resource | Contact | Description |
|---|---|---|
| **CAMH** (Centre for Addiction and Mental Health) | 1-800-463-2338 / 416-535-8501 | Free counselling and treatment for gambling issues |
| **Credit Canada** | 1-800-267-2272 | Non-profit credit counselling for gambling-related debt |
| **988 Suicide & Crisis Lifeline** | Call/text 988 | Crisis situations (not gambling-specific) |

### Display rules

Under **Registrar's Standards for Internet Gaming, Standard 2.09**:

- Registration pages must **prominently display** responsible gambling statements and ConnexOntario contact information
- Links to help resources must be included on registration pages
- Under **Standard 2.08**: responsible gambling information including help resources must be provided through a systematic approach
- Under **Standard 2.11**: operators must provide 24/7 live customer support and contact information for Ontario harm-treatment organizations
- Under **Standard 2.3** (Gaming and Lottery): information about ConnexOntario, betting limits, and self-exclusion must be readily available to all patrons

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call ConnexOntario at 1-866-531-2600."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support — 24/7, in 100+ languages. For any question about gambling.
> **Call 1-866-531-2600** | **Text CONNEX to 247247** | **Chat at connexontario.ca**

Both meet the regulatory requirement. The second version provides multiple contact options, highlights multilingual availability, frames the helpline as available for any question (not only crisis), and uses {{PROGRAM_NAME}}'s inviting tone.

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### No verbatim mandatory messaging

| Field | Value |
|---|---|
| **Verbatim required statement** | **None** — Ontario does not require a specific word-for-word message |
| **What IS required** | Prominent display of responsible gambling information and ConnexOntario contact details (Stds 2.08, 2.09) |
| **Contrast with BC** | BC requires "Know your limit, play within it." (exact wording); Ontario requires information display but no specific phrasing |

### What the Standards require

Ontario's approach is **obligation-based** (like Nevada) rather than message-based (like BC). Operators must:

1. **Display ConnexOntario prominently** on registration pages and throughout the platform (Std 2.09)
2. **Provide responsible gambling information** systematically — how games work, support services, gaming harms awareness (Std 2.08)
3. **Make help resources readily available** to all patrons, including 24/7 live support (Stds 2.11, 2.3)
4. **Include responsible gambling messages** in advertising (Std 2.08)
5. **Train employees** to recognize and respond to disordered gambling (Std 2.5; see [Operator RG obligations](#operator-rg-obligations-igo-operating-agreement) for the July 11, 2025 training amendment)

### On-brand integration

Because Ontario has no mandated phrasing, operators have flexibility to use {{PROGRAM_NAME}} messaging natively:

**Generic operator approach:**
> "If gambling is a problem, call ConnexOntario at 1-866-531-2600."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-866-531-2600** | **Text CONNEX to 247247** | connexontario.ca

This flexibility is a significant advantage — {{PROGRAM_NAME}} content in Ontario can fully express its brand voice without working around a mandatory statement.

---

## Operator RG obligations (iGO operating agreement)

Registered iGaming operators answer to **two** sources of responsible gambling obligation: the binding AGCO Registrar's Standards, and the **iGaming Ontario operating agreement** every operator signs to access the regulated market. The operating agreement adds commercial RG conditions on top of the Standards — and these shape where {{PROGRAM_NAME}} content fits.

### iGO operating-agreement RG conditions

| Condition | Requirement |
|---|---|
| **RG Check accreditation** | Operators must achieve and maintain **Responsible Gambling Council (RGC) "RG Check" accreditation** — an independent, audited RG standard covering policy, informed decision-making, self-exclusion, and staff training. |
| **RG campaigns** | Operators must run responsible-gambling and harm-prevention awareness campaigns. |
| **RG / promotional balance** | Operators must maintain a balance between responsible-gambling messaging and promotional advertising. |
| **BetGuard participation** | Operators must integrate with the [centralized self-exclusion](#self-exclusion) program (BetGuard) and honour its registry. |

**Citation:** iGaming Ontario, ["Your Role in Responsible Gambling"](https://igamingontario.ca/en/operator/your-role-responsible-gambling).

**Where {{PROGRAM_NAME}} fits:** RG Check rewards informed-decision content, accessible RG information, and clear self-exclusion messaging — all native {{PROGRAM_NAME}} strengths. The RG-campaign and balance conditions create direct demand for {{PROGRAM_NAME}}'s shareable, entertainment-first literacy content as an operator's RG layer.

### Staff training: July 11, 2025 amendment (Std 2.5)

Effective **July 11, 2025**, AGCO amended **Standard 2.5** to **remove the requirement that the Registrar pre-approve responsible-gambling training programs**, across Gaming, Lottery, and iGaming. Training is now **outcomes-based**: operators design, deliver, and update their own RG training to meet the standard's required outcomes, rather than submitting a curriculum for approval.

| Before July 11, 2025 | After July 11, 2025 |
|---|---|
| RG training programs required Registrar pre-approval | Operators design and maintain their own outcomes-based RG training |

**Citation:** AGCO, ["AGCO Updates Responsible Gambling Training Standards for Gaming and Lottery"](https://www.agco.ca/en/news/agco-updates-responsible-gambling-training-standards-gaming-and-lottery).

**Where {{PROGRAM_NAME}} fits:** operator-designed training increases demand for ready-made, on-brand staff-facing content — {{PROGRAM_NAME}}'s [Staff FAQ](../../../collateral/customer-service/staff-faq.md) and conversation scripts can feed an operator's own training program.

### AGCO guidance: supporting players at risk of harm

AGCO's **"Guidance for iGaming Operators on Identifying and Supporting Players at Risk of Harm"** is the operative **standard of practice** behind the behavioural-monitoring and intervention obligations (Std 2.10, 2.11). Although non-binding, it sets the expectation for how operators detect and respond to harm:

| Element | Expectation |
|---|---|
| **Detection** | Automated and manual monitoring of spend/time patterns (including "binge" play), customer-service interactions, and tool usage. |
| **Intervention timing** | Operators should intervene **immediately on identifying potential harm**, not at a fixed threshold. |
| **Scaled response** | Responses escalate with severity: reminder messages → personalized contact → gameplay restriction → account suspension. |

**Citation:** AGCO, ["Guidance for iGaming Operators on Identifying and Supporting Players at Risk of Harm"](https://www.agco.ca/en/lottery-and-gaming/guidance-igaming-operators-identifying-and-supporting-players-risk-harm).

**Where {{PROGRAM_NAME}} fits:** the scaled-response model relies on player-facing communications at every step. {{PROGRAM_NAME}}'s Tier 2 [support voice](../../../brand-book/05-messaging-framework.md#warning-statement-standards) provides the warm, direct language for reminder messages and personalized outreach without stigmatizing the player.

---

## Advertising restrictions

### Ontario's multi-layer framework

Ontario's advertising rules come from two overlapping layers:

| Layer | Source | Scope |
|---|---|---|
| **Provincial** | AGCO Registrar's Standards (Stds 2.03–2.07 for iGaming; Stds 2.1–2.2.3 for Gaming) | All gambling advertising in Ontario |
| **National** | CGA Code for Responsible Gaming Advertising (January 2026) | All gambling advertising in Canada |

### Key AGCO advertising standards (iGaming)

| Standard | Requirement |
|---|---|
| **Std 2.03** | Advertising must not target high-risk, underage, or self-excluded persons. No cartoon figures, influencers, or celebrities appealing to minors. No placement near schools or in youth-directed media. |
| **Std 2.03(4)** | No active or retired athletes (or others likely to appeal to minors, including social-media influencers) in iGaming advertising or marketing, **except for responsible gambling advocacy**. This restriction was added by amendment to Standard 2.03 effective **February 28, 2024** (announced August 29, 2023). |
| **Std 2.04** | Marketing must be truthful and not mislead. Cannot suggest gambling solves problems, replaces employment, ensures financial security, or that extended play increases chances. Cannot link gambling to seduction, attractiveness, or social status. |
| **Std 2.05** | **Public advertising of sport betting inducements, bonuses, and credits is prohibited** — in force since market launch on **April 4, 2022**. Inducement advertising is only permitted on the operator's gaming site and through direct marketing after active player consent. |
| **Std 2.06** | Permitted inducement communications must disclose all material conditions at first presentation. Cannot describe offers as "free" if conditions exist or "risk-free" if player money is at risk. |
| **Std 2.07** | Players must actively opt in to receive direct advertising of inducements. Must be able to withdraw consent at any time. |

> **Citation note**: The athlete/influencer restriction sits at **Standard 2.03, requirement 4** of the Registrar's Standards for Internet Gaming (the targeting-restrictions standard) — Std 2.04 is the separate truthfulness standard. The amendment to Std 2.03 was announced August 29, 2023 and took effect February 28, 2024. Source: [AGCO, "AGCO to ban athletes from Ontario's iGaming advertising to protect minors"](https://www.agco.ca/en/news/agco-ban-athletes-ontarios-igaming-advertising-protect-minors); amendment effective date per [Cassels analysis](https://cassels.com/insights/a-game-changing-update-ontarios-amended-restrictions-on-use-of-athletes-influencers-in-igaming-advertising-are-now-in-effect/).

### Sport betting inducement ban

This is Ontario's most distinctive advertising restriction. **Standard 2.05** prohibits all public advertising of gambling inducements, bonuses, and credits related to sport and event betting. This includes:

- Television, radio, print, outdoor, and digital display ads
- Targeted advertising and algorithm-based ads
- Social media posts (organic or paid) visible to non-opted-in audiences

**Permitted channels for inducement communication:**
- On the operator's own gaming site (logged-in players)
- Direct messaging: email, text, phone calls, social media DMs — **only after active player consent**
- On-premise signage at gaming sites

### CGA national code overlay

The **CGA Code for Responsible Gaming Advertising** (January 2026), administered by Ad Standards Canada, adds national standards. See [canada/README.md](../README.md#canadian-gambling-advertising-code). Key additions:
- Endorser minimum age of 25+
- Direction by audience composition (advertising placed for legal-age audiences; talent and individuals depicted aged 25+)
- Enhanced T&C disclosure requirements

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## PlaySmart compatibility

[PlaySmart](https://www.playsmart.ca) is OLG's player education platform, providing information about odds, game mechanics, and responsible gambling tools. PlaySmart is **voluntary and OLG-only** — for the *binding* odds and game-information obligations that apply to every registered operator, see [Game information & odds disclosure](#game-information--odds-disclosure) (Std 4.05–4.07).

### What is PlaySmart?

| Field | Value |
|---|---|
| **Owner** | OLG |
| **Scope** | OLG properties (land-based casinos, cGaming centres, OLG.ca) |
| **Purpose** | Player education, informed decision-making |
| **Content** | Odds calculators, game guides, myth-busting, self-assessment tools |
| **Website** | playsmart.ca |

### Relationship to {{PROGRAM_NAME}}

| Area | PlaySmart | {{PROGRAM_NAME}} | Relationship |
|---|---|---|---|
| **Odds education** | Game-specific odds calculators, house edge info | Broad odds literacy, myth-busting, shareable content | **Complement** — {{PROGRAM_NAME}} extends education beyond OLG properties |
| **Tool awareness** | Promotes OLG's player tools on OLG properties | Promotes operator tools across all channels | **Complement** — same goal, different reach |
| **Helpline** | Refers to ConnexOntario | Refers to same helpline | **Align** — same helpline, same number |
| **OLG properties** | Primary education resource at OLG venues/OLG.ca | No presence unless deployed by OLG | **Defer** — {{PROGRAM_NAME}} defers to PlaySmart at OLG properties |
| **Private iGaming** | Not present on private operator sites | Available to any registered operator | **Fill gap** — {{PROGRAM_NAME}} serves the 40+ private operators (75+ sites) where PlaySmart doesn't exist |
| **Brand voice** | Educational, informational | Confident, witty, engaging | **Different** — {{PROGRAM_NAME}} is entertainment-first; PlaySmart is education-first |

### Where {{PROGRAM_NAME}} adds value

{{PROGRAM_NAME}} fills gaps that PlaySmart does not cover:

| Gap | How {{PROGRAM_NAME}} fills it |
|---|---|
| **Private iGaming operators** | PlaySmart is OLG-only; {{PROGRAM_NAME}} provides player education content for the 40+ private operators (75+ sites) who need their own responsible gambling content |
| **Social/shareable content** | PlaySmart doesn't have a social content system; {{PROGRAM_NAME}}'s quiz, myth-buster, and share framework extends education to social channels |
| **Entertainment-first voice** | PlaySmart is educational; {{PROGRAM_NAME}} makes literacy content feel like entertainment content |
| **Multi-channel collateral** | PlaySmart focuses on OLG properties; {{PROGRAM_NAME}} provides email, social, print, signage, and video templates |
| **White-label flexibility** | PlaySmart is OLG-branded; {{PROGRAM_NAME}} adapts to any operator's brand |

---

## Self-exclusion

### Two systems

Ontario has two self-exclusion systems operating in parallel:

| Program | Scope | Operator | Duration options |
|---|---|---|---|
| **OLG My PlayBreak** | OLG casinos, cGaming centres, OLG.ca | OLG | Casinos/cGaming: 3mo, 6mo, 1, 2, 3, 4, 5 yr; OLG.ca adds 1 day, 1 week, 1, 2, 3 months |
| **iGaming site-level** (Std 2.14) | Individual iGaming operator site | Each registered operator | 6 months, 1 year, 5 years |
| **BetGuard** — centralized self-exclusion (Std 2.14.1) | All regulated iGaming sites | iGO (**live since May 14, 2026**) | 6 months, 1 year, 5 years, **or a custom term** |

### OLG My PlayBreak

| Field | Value |
|---|---|
| **Program name** | My PlayBreak |
| **Operator** | OLG |
| **Scope** | All OLG casinos, charitable gaming centres, and OLG.ca |
| **Duration options** | **Casinos & charitable gaming centres**: 3 months, 6 months, 1, 2, 3, 4, 5 years. **OLG.ca**: adds 1 day, 1 week, 1, 2, 3 months. Maximum standard term is 5 years (renewable) — there is no indefinite option. |
| **Enrollment** | Online at MyPlayBreak.ca or in person at any OLG gaming site |
| **Sector selection** | Players can choose to exclude from any or all sectors: Casino, cGaming, OLG.ca |
| **Reinstatement** | Player must apply after exclusion period ends |

**Citation:** OLG, ["My PlayBreak"](https://www.olg.ca/en/my-play-break.html); PlaySmart, ["My PlayBreak — New Registrants"](https://www.playsmart.ca/finding-help/my-playbreak/new-registrants/).

### iGaming Self-Exclusion (Standard 2.14)

| Field | Value |
|---|---|
| **Scope** | Individual operator's gaming site |
| **Duration options** | 6 months, 1 year, 5 years |
| **Enrollment** | Through the operator's platform |
| **Immediate effect** | Account logged out immediately upon enrollment |
| **Marketing** | Self-excluded persons removed from all marketing within 24 hours (Std 2.03) |

### BetGuard — centralized self-exclusion (Standard 2.14.1)

Ontario's centralized self-exclusion program is **live**. It launched on **May 14, 2026** under the brand **BetGuard** (player portal: [BetGuard.ca](https://betguard.ca)), operated by iGaming Ontario. One registration opts a person out of **every regulated Ontario iGaming brand** at once.

| Field | Value |
|---|---|
| **Brand / portal** | BetGuard — [BetGuard.ca](https://betguard.ca) |
| **Status** | Live since May 14, 2026 |
| **Scope** | All regulated iGaming sites in Ontario (75+ sites) |
| **Duration options** | 6 months, 1 year, 5 years, **or a custom term** |
| **No-cancellation rule** | Once activated, a self-exclusion term **cannot be shortened or cancelled** before it ends |
| **Enrollment** | Single registration via the central BetGuard portal; **no existing operator account required**; completes in about five minutes |
| **Operator obligations** | Check registry status in real time via API; block login/account access and cease all marketing for registered persons no later than 24 hours after they are added (Std 2.14.1) |
| **Registry** | Maintained by iGO; registrants added to the registry as soon as practicable and no later than one hour after registration (Std 2.14.1) |
| **Support** | Dedicated customer care line for registrants; ConnexOntario (1-866-531-2600) available as a support resource |

**Citation:** iGaming Ontario, ["BetGuard, Ontario's new tool to opt out of online gaming, is now available"](https://igamingontario.ca/en/news/betguard-centralized-self-exclusion-ontario-igaming); standard basis Std 2.14.1, per the [AGCO information bulletin on the centralized self-exclusion program](https://www.agco.ca/en/news/information-bulletin-agco-sets-igaming-standards-centralized-self-exclusion-program).

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your account" | My PlayBreak (OLG) / "Self-exclusion" (iGaming) | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" | My PlayBreak / BetGuard (centralized self-exclusion) | Legal documents, formal enrollment, support referrals |
| Staff training | Both | My PlayBreak / Self-exclusion | When explaining the program and training on enrollment |
| Website/app | "Need a break from playing here?" | "Self-exclusion program" | On the self-exclusion enrollment page itself |
| Print/signage | "Need a break from gambling?" | "Self-exclusion" | Venue self-exclusion information areas |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: How does self-exclusion work in Ontario?**
>
> Ontario has two self-exclusion systems. **OLG My PlayBreak** covers all OLG casinos, charitable gaming centres, and OLG.ca — players can exclude from any or all sectors. At casinos and charitable gaming centres the terms are 3 months, 6 months, or 1, 2, 3, 4, or 5 years; OLG.ca adds shorter options (1 day, 1 week, 1, 2, or 3 months). The maximum standard term is 5 years (renewable) — there is no indefinite option. For **private iGaming**, each site offers its own self-exclusion for 6 months, 1 year, or 5 years under AGCO Standard 2.14, and the centralized program **BetGuard** (BetGuard.ca, live since May 14, 2026; Standard 2.14.1) lets a player opt out of **all** regulated Ontario iGaming sites through a single registration — no operator account needed. BetGuard terms can be 6 months, 1 year, 5 years, or a custom length, and **cannot be shortened or cancelled once activated**.
>
> If a player asks about self-exclusion, explain which options apply to them based on where they play. For someone who wants to step away from online gambling entirely, point them to BetGuard. In casual conversation, say "take a break" or "pause your account." Use "self-exclusion," "My PlayBreak," or "BetGuard" when referring to the formal programs.

---

## Player protection tools

### iGaming (Registrar's Standards for Internet Gaming — comprehensive)

Ontario's iGaming standards are among the most detailed in North America:

| Tool | Required? | Standard | Details |
|---|---|---|---|
| **Deposit limits** | Yes | Std 2.23 | Players set limits for 24-hour, 7-day, and 1-month periods |
| **Loss limits** | Yes | Std 2.23 | Same periods as deposit limits |
| **Time limits** | Yes | Std 2.23 | Session duration limits available |
| **Wager limits** | Varies | Std 2.23 | Not universally required but offered by most operators |
| **Cooling-off for limit changes** | Yes | Std 2.24 | Minimum 24-hour wait before limits can be relaxed or removed |
| **Short-term breaks** | Yes | Std 2.13 | 1 day, 1 week, 1 month, 2 months, 3 months — wagers prevented during break |
| **Self-exclusion (site-level)** | Yes | Std 2.14 | 6 months, 1 year, 5 years |
| **Centralized self-exclusion (BetGuard)** | Yes (live) | Std 2.14.1 | All regulated sites via single registration; 6mo/1yr/5yr or custom; cannot be shortened or cancelled once activated |
| **Time tracking** | Yes | Std 2.22 | Players must have means to track passage of time |
| **Net-position display (slots)** | Yes | Std 2.21 | Slots sessions must clearly display net position (winnings minus losses since session start) in Canadian dollars |
| **Behavioural monitoring** | Yes | Std 2.10 | Real-time automated and manual monitoring for harm indicators |
| **Intervention** | Yes | Std 2.11 | Immediate assistance scaled to severity when harm detected |
| **24/7 live support** | Yes | Std 2.11 | Customer support available around the clock |
| **Slot auto-play ban** | Yes | Std 2.16 | Auto-play prohibited; manual wager activation required |
| **Minimum spin interval** | Yes | Std 2.18 | 2.5-second minimum between slot game cycles |
| **Turbo/quick-spin ban** | Yes | Std 2.19 | Turbo, quick-spin, and slam-stop features prohibited for slots |
| **No negative balances** | Yes | Std 2.11.1 (Gaming) | Player accounts cannot have negative funds balance |
| **No credit (non-casino)** | Yes | Std 2.14 (Gaming) | Credit cannot be extended to patrons for gambling (non-casino operators) |

### Land-based gaming (moderate mandate)

| Tool | Required? | Details |
|---|---|---|
| **Self-exclusion (My PlayBreak)** | Yes | OLG sector-specific exclusion |
| **Information posting** | Yes (Std 2.3) | ConnexOntario, limits, self-exclusion info readily available |
| **Time tracking** | Yes (Std 2.12) | Players must have means to track time (land-based; the iGaming equivalent is Std 2.22) |
| **Employee training** | Yes (Std 2.5) | Mandatory responsible gambling training — outcomes-based; Registrar pre-approval removed effective [July 11, 2025](#operator-rg-obligations-igo-operating-agreement) |
| **Credit self-limitation** | Yes (casino, Std 2.15) | 24-hour wait for credit limit increases; no credit extended to players experiencing gambling harm |

### {{PROGRAM_NAME}} tool messaging for Ontario

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit — play on your terms. Takes 10 seconds." | iGaming (Std 2.23) |
| Loss limits | "Cap your losses for the day, week, or month. One setting, total control." | iGaming (Std 2.23) |
| Short-term break | "Need a breather? Pause your account for a day, a week, or up to 3 months." | iGaming (Std 2.13) |
| Self-exclusion | "Need a longer break? Step away for 6 months, 1 year, or 5 years." | iGaming (Std 2.14) |
| Centralized self-exclusion | "Want to step away from online gambling for good? BetGuard opts you out of every regulated Ontario site in one go." | iGaming (Std 2.14.1, BetGuard) |
| Net-position display | "Up or down this session? Your running total is right there — in plain dollars." | iGaming slots (Std 2.21) |
| Activity dashboard | "Your play stats are ready. No surprises — just the facts." | iGaming (Std 3.15) |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 19+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.canada-ontario` |
| **`{{MIN_AGE}}` token value** | 19 |
| **Verification (iGaming)** | Identity verification required at registration; name, date of birth, address, government-issued ID (Std 3.04) |
| **Verification (land-based)** | Government-issued photo ID; checked at entry to gaming areas |
| **Products with different ages** | None — 19+ applies to all gambling products in Ontario |
| **Single account rule** | Players may have only one account per gaming site (Std 3.09) |
| **Authentication** | Multi-factor authentication option required (Std 3.12) |

### Age messaging

All collateral in Ontario must display `19+` age notice:

> "You must be 19+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `19+` for all Ontario-deployed content.

---

## AML/KYC

### FINTRAC requirements

Ontario gambling operators are subject to federal anti-money laundering regulations through **FINTRAC** under the *Proceeds of Crime (Money Laundering) and Terrorist Financing Act* (PCMLTFA).

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Large cash transaction report** | $10,000+ (single or within 24 hours) | Player may be asked for ID |
| **Suspicious transaction report** | Any amount | No direct player notification — internal reporting |
| **Player identification** | $3,000+ (casinos) | Identity verification required |
| **Third-party determination** | All transactions | Player may be asked if acting on behalf of another person |
| **Source of funds** | Large or unusual transactions | Player may be asked about the source of their funds |

### iGaming-specific KYC

Under the Registrar's Standards for Internet Gaming:

| Requirement | Standard | Details |
|---|---|---|
| **Account registration** | Std 3.04 | Name, date of birth, address, identification method, contact info, AML details |
| **Account accuracy** | Std 3.06 | Player information must be kept complete and accurate |
| **Single account** | Std 3.09 | One account per player per gaming site |
| **Authentication** | Std 3.12 | Multi-factor authentication option required |
| **Transaction records** | Std 3.15 | Players must access deposit/withdrawal history, login records, gaming history |

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity and the source of your funds."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required for all players. Takes about 2 minutes. If we ask about the source of your funds, it's a standard security step that applies to everyone."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Ontario-specific adaptations.

| Category | Collateral | Ontario adaptation | Token/Value |
|---|---|---|---|
| **Digital** | Website footer | ConnexOntario: 1-866-531-2600 + on-brand RG message | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Set to 19+ | `{{MIN_AGE}}` = 19 |
| **Digital** | Self-exclusion page | Explain dual system (site-level + BetGuard centralized); link to operator's enrollment and BetGuard.ca | — |
| **Digital** | Deposit screen | Deposit limit prompt + ConnexOntario | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media bio | Include 1-866-531-2600 | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email footer | ConnexOntario + on-brand RG message in every email | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | Ontario helpline (ConnexOntario), 19+ notice | All tokens |
| **Print** | Rack card | ConnexOntario, on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | ConnexOntario + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | ConnexOntario, 1-866-531-2600, text CONNEX to 247247, connexontario.ca | All helpline tokens |
| **Environmental** | Entry signage | 19+ age notice, ConnexOntario | `{{MIN_AGE}}`, `{{HELPLINE_NUMBER}}` |
| **Environmental** | Floor / ATM area | ConnexOntario, responsible gambling info | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | On-brand RG message in rotation, ConnexOntario | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot end card | ConnexOntario (3-second minimum recommended) | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Spoken ConnexOntario reference | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | ConnexOntario in all referral scripts, self-exclusion enrollment in scripts | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Add Ontario self-exclusion Q&A (dual system), update helpline to ConnexOntario | — |

### Key differences from BC

| Area | Ontario | BC |
|---|---|---|
| **Mandatory statement** | None | "Know your limit, play within it." |
| **Helpline** | ConnexOntario 1-866-531-2600 | Gambling Support BC 1-888-795-6111 |
| **Self-exclusion** | Dual system (OLG My PlayBreak + iGaming BetGuard, centralized) | Game Break (BCLC province-wide) |
| **Deployment model** | Any of 40+ private operators (75+ sites) OR OLG | BCLC service providers only |
| **Inducement advertising** | Sport betting inducements banned in public ads | Limited bonus prominence |
| **Player education program** | PlaySmart (OLG-only) | GameSense (all BCLC venues) |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Ontario:

```yaml
# ─── HELPLINES ───────────────────────────────
helplines:
  canada:
    ontario:
      number: "1-866-531-2600"
      text_number: "Text CONNEX to 247247"
      website: "www.connexontario.ca"
      label: "ConnexOntario"
      hours: "24/7"

# ─── LEGAL ───────────────────────────────────
legal:
  minimum_gambling_age:
    canada-ontario: 19
```

Note: Ontario has **no mandatory messaging token** — there is no `messaging.mandatory.canada-ontario` entry because no verbatim statement is required.

Also see the full [Canada config overrides](../_brand-canada.yml) for the complete provincial structure.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Ontario.

### Regulatory
- [ ] Confirmed AGCO as regulator, iGO as market conductor, OLG as Crown corporation
- [ ] Understood hybrid model (OLG monopoly for land-based + open iGaming market)
- [ ] Identified whether deployment is for OLG properties, private iGaming, or both
- [ ] Verified legal gambling age: 19+ for all products
- [ ] Reviewed permitted products table
- [ ] Reviewed Gaming Control Act, 1992 and Registrar's Standards (Gaming + Internet Gaming)
- [ ] Tracked iGaming Ontario Act, 2024 implementation (May 2025)
- [ ] Reviewed iGO operating-agreement RG conditions (RG Check accreditation, RG campaigns, ad balance, BetGuard)

### Helpline
- [ ] ConnexOntario displayed prominently per Standards 2.08, 2.09, 2.11
- [ ] Phone (1-866-531-2600), text (CONNEX to 247247), and website (connexontario.ca) included
- [ ] Registration pages display ConnexOntario prominently (Std 2.09)
- [ ] 24/7 live customer support available (Std 2.11, iGaming)
- [ ] CAMH and additional resources referenced where appropriate

### Messaging
- [ ] Confirmed: no verbatim mandatory statement required in Ontario
- [ ] Responsible gambling information displayed prominently per Standards 2.08, 2.09
- [ ] On-brand {{PROGRAM_NAME}} messaging used (not just bare compliance)
- [ ] 19+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Ontario values
- [ ] PlaySmart acknowledged where content appears at OLG properties

### Game information & odds disclosure
- [ ] iGaming: per-wager operator-advantage (house edge) disclosed per Std 4.05
- [ ] iGaming: informed-decision game information available before wagering per Std 4.06
- [ ] iGaming: no misleading or misrepresentative game information per Std 4.07
- [ ] {{PROGRAM_NAME}} odds-literacy content mapped to the Category-4 disclosure obligations (not just voluntary PlaySmart)

### Advertising
- [ ] Advertising reviewed against AGCO Standards 2.03–2.07 (iGaming) / 2.1–2.2.3 (Gaming)
- [ ] Advertising reviewed against CGA Code for Responsible Gaming Advertising (January 2026)
- [ ] No content targeting or appealing to persons under 19
- [ ] No athlete/influencer endorsements except for responsible gambling advocacy (Std 2.03(4), effective Feb 28, 2024)
- [ ] Sport betting inducement advertising restricted to on-site and opted-in direct marketing only (Std 2.05, in force since Apr 4, 2022)
- [ ] Inducement disclosures include all material conditions
- [ ] Opt-in consent process for inducement direct marketing
- [ ] No misleading claims about odds, winning likelihood, or prize amounts
- [ ] Advertising reviewed per [advertising-rules.md](advertising-rules.md)

### Self-exclusion
- [ ] iGaming: site-level self-exclusion available (6mo, 1yr, 5yr) per Std 2.14
- [ ] iGaming: BetGuard centralized self-exclusion integrated — real-time registry checks, login + marketing blocks (Std 2.14.1; live since May 14, 2026)
- [ ] iGaming: BetGuard no-shorten/no-cancel-once-activated rule and custom-term option reflected in self-exclusion messaging
- [ ] Land-based: OLG My PlayBreak information available to patrons
- [ ] Self-excluded persons removed from all marketing within 24 hours
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language
- [ ] Staff FAQ updated with Ontario self-exclusion Q&A (dual system)

### Player protection
- [ ] iGaming: deposit limits implemented with 24hr/7-day/1-month periods (Std 2.23)
- [ ] iGaming: loss limits implemented (Std 2.23)
- [ ] iGaming: 24-hour cooling-off for limit relaxation (Std 2.24)
- [ ] iGaming: short-term break options (1 day to 3 months) per Std 2.13
- [ ] iGaming: slot auto-play disabled (Std 2.16)
- [ ] iGaming: minimum 2.5-second slot spin interval (Std 2.18)
- [ ] iGaming: turbo/quick-spin features disabled for slots (Std 2.19)
- [ ] iGaming: time-tracking means available to players (Std 2.22)
- [ ] iGaming: net-position displayed for slots in Canadian dollars (Std 2.21)
- [ ] iGaming: real-time behavioural monitoring implemented (Std 2.10)
- [ ] iGaming: intervention procedures aligned to AGCO at-risk-player guidance (Std 2.11)
- [ ] iGaming: 24/7 live customer support (Std 2.11)
- [ ] Operator: RG Check accreditation achieved/maintained; RG campaigns running (iGO operating agreement)
- [ ] Staff: outcomes-based RG training in place (Std 2.5, as amended July 11, 2025)
- [ ] Land-based: responsible gambling info posted per Std 2.3

### Age verification
- [ ] 19+ age verification at all gambling touchpoints
- [ ] iGaming: identity verification at registration (Std 3.04)
- [ ] iGaming: single account per player per site enforced (Std 3.09)
- [ ] iGaming: multi-factor authentication option available (Std 3.12)

### AML/KYC
- [ ] FINTRAC compliance program in place
- [ ] Large cash transaction reporting for $10,000+
- [ ] SAR filing procedures operational
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice
- [ ] iGaming: transaction records accessible to players (Std 3.15)

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] PlaySmart compatibility reviewed (OLG properties)
- [ ] Staff FAQ updated with Ontario self-exclusion Q&A
- [ ] Conversation scripts updated with ConnexOntario references
- [ ] AML/KYC player-facing messaging uses {{PROGRAM_NAME}} voice

### Governance
- [ ] `_brand.yml` updated with Ontario values (helpline, age)
- [ ] `_brand-canada.yml` reviewed
- [ ] `Last verified` date set on this module
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained
- [ ] BetGuard centralized self-exclusion integration verified (live since May 14, 2026)

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [Canada overview](../README.md) | [Canada config overrides](../_brand-canada.yml) | [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [Advertising rules](advertising-rules.md)*
