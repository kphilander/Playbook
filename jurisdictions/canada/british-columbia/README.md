---
content_type: jurisdiction-module
title: "British Columbia — Compliance Module"
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
verticals: [land-based, interactive]
regulatory_approach: hybrid
adaptation_status: base
adaptation_notes: |
  British Columbia module uses CAD currency context. BC's responsible
  gambling messaging is obligation-based — there is no mandatory verbatim
  statement. "Know your limit, play within it." is the BCLC/GameSense
  tagline (a slogan), not a regulator-mandated phrase. Single Crown
  operator (BCLC) across all verticals; private firms participate only as
  registered service providers, which differs from Ontario's open market
  and Alberta's launching open market. Land-based RG Standards are
  principles-based; the Internet Gambling RG Standards for PlayNow.com are
  prescriptive. GameSense originated here (BCLC, 2009) and is BC's flagship
  player-education program. On-brand messaging examples need cultural
  adaptation for non-North-American deployments.
last_updated: 2026-06-05
---

# British Columbia — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in British Columbia. BC is a **Crown conduct-and-manage monopoly**: the British Columbia Lottery Corporation (BCLC) is the sole legal operator across land-based casinos, online (PlayNow.com), and sports betting. Private companies participate only as **registered service providers** to BCLC — there is no open operator market like Ontario's. BC's responsible-gambling messaging is **obligation-based** (display the help line and regulator-approved messaging), like Ontario and Alberta — there is **no mandatory verbatim statement**. "Know your limit, play within it." is the **BCLC/GameSense tagline** (a brand slogan), not a regulatory mandate. BC is the **home of GameSense** (BCLC, 2009), the player-education program now licensed to operators across North America.
>
> **Verticals covered**: Land-based Casino, Online Casino (PlayNow.com), Sports Betting — all conducted and managed by BCLC.
> *(BC's land-based RG Standards are principles-based; the Internet Gambling RG Standards governing PlayNow.com are prescriptive. Sections are split accordingly — if your deployment is land-based-only or PlayNow-only, you can skip the other channel's subsections.)*

> **Last verified**: 2026-06-05
> **Next review due**: 2026-09-05 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Verticals | Description |
|---|---|---|
| [Regulatory authority](#regulatory-authority) | All | IGCO (formerly GPEB), BCLC, service providers |
| [Legal requirements](#legal-requirements) | All | 19+, Crown monopoly model, permitted products |
| [Helpline](#helpline) | All | Gambling Support BC details and display rules |
| [Messaging requirements](#messaging-requirements) | All | No verbatim mandate — what IS required |
| [GameSense — BC's flagship program](#gamesense--bcs-flagship-program) | All | Working with the program BC originated |
| [Advertising restrictions](#advertising-restrictions) | All | Advertising & Marketing Standards + CGA national code |
| [Self-exclusion](#self-exclusion) | All | Voluntary Self-Exclusion / Game Break |
| [Player protection — land-based](#player-protection--land-based) | Land-based | Principles-based RG Standards |
| [Player protection — interactive (PlayNow.com)](#player-protection--interactive-playnowcom) | Interactive | Prescriptive Internet Gambling RG Standards |
| [Age verification](#age-verification) | All | 19+ requirements, land-based and PlayNow |
| [AML/KYC](#amlkyc) | All | FINTRAC requirements |
| [Collateral adaptation](#collateral-adaptation) | All | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | All | Config values to add |
| [Compliance checklist](#compliance-checklist) | All | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Regulator** | Independent Gambling Control Office (IGCO) — formerly the Gaming Policy and Enforcement Branch (GPEB) |
| **Operator** | British Columbia Lottery Corporation (BCLC) — Crown corporation; sole conduct-and-manage operator |
| **Governing legislation** | Gaming Control Act, SBC 2022 c.29 (in force 13 April 2026) |
| **Regulation** | Gaming Control Regulation, B.C. Reg. 209/2025 |
| **Federal authority** | Criminal Code (Canada), s.207 — provinces conduct and manage lawful gaming |
| **License model** | No operator licences; private firms register as **service providers** to BCLC |
| **Regulatory approach** | Hybrid — principles-based land-based RG Standards; prescriptive Internet Gambling RG Standards |

### Regulatory structure

BC's gambling system has a clear separation between the regulator and the operator:

| Body | Role | Key functions |
|---|---|---|
| **IGCO** (formerly GPEB) | Regulator | Sets the responsible-gambling, advertising, and internet-gambling standards; registers service providers and gaming workers; investigates and enforces; certifies gaming |
| **BCLC** | Crown operator | Conducts and manages all lawful gambling — land-based casinos and community gaming centres (via service providers), PlayNow.com, lottery, and sports betting; runs GameSense, Game Break, and Gambling Support BC integration |
| **Service providers** | Private operators | Run casinos and community gaming centres on BCLC's behalf under registration; do not hold gambling in their own right |

### How participation works (no operator market)

1. **BCLC conducts and manages** all gambling in BC under the Gaming Control Act and Criminal Code s.207.
2. **Private companies register** with IGCO as service providers (and their key personnel/gaming workers register individually).
3. **Service providers operate** facilities or supply services **for** BCLC — revenue and ultimate control rest with BCLC.
4. **PlayNow.com is BCLC's own platform** — there is no third-party online operator market. (BCLC also runs PlayNow for Manitoba and several Atlantic/Western lottery partners, but the BC deployment is governed by BC standards.)
5. **IGCO sets and audits** the standards all of the above must meet.

**What this means for {{PROGRAM_NAME}} operators**: Unlike Ontario (70+ private operators) or Alberta (open market launching mid-2026), there is **no independent operator** to deploy {{PROGRAM_NAME}} in BC. Deployment happens **with or through BCLC** (or a BCLC service provider) — as supplementary player-education content alongside GameSense. The single-operator model means content can be consistent province-wide rather than fragmented across competing brands.

### Upcoming changes

| Change | Detail | Effective |
|---|---|---|
| **New Act in force** | The Gaming Control Act, SBC 2022 c.29 replaced the prior Gaming Control Act and renamed the regulator from GPEB to the **Independent Gambling Control Office (IGCO)** | 13 April 2026 |
| **Standards re-issuance** | The published GPEB standards (RG Standards, Internet Gambling RG Standards, Advertising & Marketing Standards) still cite authority under the **old** Act and may be reissued by IGCO. The substantive requirements carry forward (new Act s.56 requires compliance; s.57 mandates the VSE program). **Verify the current standards before publishing.** | TBD |

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 19+ |
| **Legal framework** | Crown conduct-and-manage monopoly — BCLC is the sole legal operator across all verticals |
| **Online gambling** | Legal — PlayNow.com (BCLC), live since 2004 (the first government-run online casino in North America) |
| **Sports betting** | Legal — single-event sports betting on PlayNow.com (since August 2021, Bill C-218) and at land-based sportsbooks |
| **Lottery** | Legal — BCLC operates Lotto 6/49, Lotto Max, Keno, scratch and sports lottery products |

### Permitted products

| Product | Vertical | Legal status | Operator | Notes |
|---|---|---|---|---|
| Casino (slots, table games) | Land-based | Legal | BCLC via service providers | Casinos and community gaming centres province-wide |
| Online casino (PlayNow.com) | Interactive | Legal | BCLC | Government-run; no third-party operator market |
| Sports betting | Both | Legal | BCLC | Single-event on PlayNow.com + land-based sportsbooks |
| Lottery | Both | Legal | BCLC | Lotto 6/49, Lotto Max, Keno, scratch, sports lottery |
| Poker (live) | Land-based | Legal | BCLC via service providers | Available in licensed casinos |
| Bingo / community gaming | Land-based | Legal | BCLC via service providers | Community gaming centres |
| Horse racing | Land-based | Legal | GPEB/IGCO-regulated separately | Pari-mutuel under the Horse Racing framework |

### Key regulatory notes

- BC's Crown-monopoly model means {{PROGRAM_NAME}} deployment happens through a **single path**: with BCLC (or a BCLC service provider), alongside GameSense.
- This is the **opposite** of Ontario's open market — there is no field of competing operators to sell into independently.
- The single-operator structure is an advantage for consistency: {{PROGRAM_NAME}} content can apply uniformly across every BC venue and PlayNow.com without reconciling multiple operator brands.
- BC's land-based responsible-gambling rules are **principles-based** (the RG Standards describe outcomes and obligations); the **PlayNow.com** rules are **prescriptive** (the Internet Gambling RG Standards enumerate specific tools, periods, and behaviours).

---

## Helpline

### Gambling Support BC

| Field | Value |
|---|---|
| **Name** | Gambling Support BC (Province's Problem Gambling Help Line) |
| **Phone** | 1-888-795-6111 |
| **Website** | www.gamblingsupportbc.ca |
| **Hours** | 24/7, 365 days/year |
| **Languages** | English, French, Mandarin, Cantonese, Punjabi (and others via interpretation) |
| **Cost** | Free and confidential |
| **Scope** | Information, support, and free treatment referral for anyone affected by gambling |

*Source: [Gambling Support BC](https://www2.gov.bc.ca/gov/content/sports-culture/gambling-fundraising/gambling-support-bc)*

### Additional resources

| Resource | Contact | Description |
|---|---|---|
| **GameSense** | gamesense.com; GameSense Info Centres at casinos | Player education and on-site advisors (BCLC program) |
| **Game Break (Voluntary Self-Exclusion)** | Enrol at any BC casino / via BCLC | Province-wide self-exclusion across all venues and PlayNow.com |
| **9-8-8 Suicide Crisis Helpline** | Call/text 988 | Crisis situations (not gambling-specific) |

### Display rules

BC splits help-line display obligations between land-based venues and PlayNow.com.

#### Land-based display

Under the **Responsible Gambling Standards for the BC Gambling Industry, Part A** (principles-based):

- Information on the **risks of gambling and where to get help** must be displayed at point of sale and at all lottery retail (s.2.2).
- In gaming facilities, responsible-gambling information must be available in **customer-service areas, washrooms, and at ATMs** (s.5.1–5.3).
- **GameSense Info Centres** with trained advisors operate at casinos and community gaming centres.

#### Interactive display (PlayNow.com)

Under the **Standards for Responsible Gambling — Internet Gambling**:

- PlayNow.com must prominently display the **signs of problem gambling** and **contact information for the Gambling Support Line** on key pages (s.1.4).
- Responsible-gambling and GameSense information must be available on registration and account pages (s.1.1–1.2).

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call 1-888-795-6111."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support — 24/7, in multiple languages. For any question about gambling.
> **Call 1-888-795-6111** | **gamblingsupportbc.ca** | Talk to a **GameSense Advisor** in person.

Both meet the regulatory requirement. The second version surfaces multiple contact options, highlights multilingual availability, points to GameSense's in-person advisors, and frames support as available for any question — not only crisis — in {{PROGRAM_NAME}}'s inviting tone.

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### No verbatim mandatory messaging

| Field | Value |
|---|---|
| **Verbatim required statement** | **None** — BC does not mandate a specific word-for-word message |
| **What IS required** | Prominent display of the Gambling Support BC help line and BCLC/GameSense responsible-gambling messaging as approved by the regulator (RG Standards Pt A s.2.1–2.2; Internet Gambling RG Standards s.1.1–1.2) |
| **About "Know your limit, play within it."** | This is the **BCLC/GameSense tagline** — a brand slogan, **not** a regulatory mandate. BC's messaging regime is obligation-based, like Ontario and Alberta. Operators are not required to reproduce the slogan verbatim. |

> **Correction note**: Earlier versions of these Canada modules described "Know your limit, play within it." as BC's *mandatory verbatim statement*. That was inaccurate. BC's responsible-gambling messaging is **obligation-based**: operators must display the help line and regulator-approved messaging, but **no exact wording is prescribed**. The phrase is a long-running BCLC/GameSense slogan, not a legislated requirement. This module classifies BC as obligation-based accordingly.

### Messaging regime summary

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| Land-based venues & retail | Obligation-based | Display help line and regulator-approved RG messaging; no prescribed wording | RG Standards Pt A s.2.1–2.2 |
| PlayNow.com | Obligation-based | Prominently display RG/GameSense messaging, signs of problem gambling, and the help line on key pages | Internet Gambling RG Standards s.1.1–1.4 |
| Advertising | Standard-based | All advertising/marketing must carry a responsible-gambling message, in the same language as the ad | Advertising & Marketing Standards (Responsible Gambling) |

**Obligation types explained:**
- **Verbatim** — exact prescribed text that must appear word-for-word *(BC has none)*
- **Obligation-based** — must post information meeting a described standard, but no prescribed wording
- **Standard-based** — must display specific items (e.g., a responsible-gambling message, help line) but surrounding copy is flexible

### What the Standards require

BC's approach is **obligation-based** (like Ontario and Alberta) rather than message-based. Operators must:

1. **Display the Gambling Support BC help line** at point of sale, in venues, and on PlayNow.com (RG Standards Pt A s.2.2; Internet Gambling RG Standards s.1.4)
2. **Display BCLC/GameSense responsible-gambling messaging** as approved by the regulator (RG Standards Pt A s.2.1)
3. **Provide game and odds information**, including skill-vs-chance, randomness, and common myths on PlayNow.com (Internet Gambling RG Standards s.1.3)
4. **Include a responsible-gambling message** in all advertising, in the same language as the ad (Advertising & Marketing Standards)
5. **Train staff** to provide responsible-gambling information and dispel gambling myths (RG Standards Pt A s.3.2–3.3; Internet Gambling RG Standards s.2.1–2.4)

### On-brand integration

Because BC has no mandated phrasing, operators have flexibility to use {{PROGRAM_NAME}} messaging natively:

**Generic operator approach:**
> "Know your limit, play within it. If you have a gambling problem, call 1-888-795-6111."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limit. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-888-795-6111** | gamblingsupportbc.ca | Ask a **GameSense Advisor**.

You **may** still use "Know your limit, play within it." where you want to echo the familiar GameSense slogan — but as a stylistic choice, not a compliance obligation. The flexibility is an advantage: {{PROGRAM_NAME}} content in BC can fully express its brand voice without working around a mandatory statement.

**Rules for on-brand integration:**
1. There is no verbatim statement to reproduce — never present the GameSense slogan as a legal requirement.
2. Obligation-based requirements can use full {{PROGRAM_NAME}} voice as long as the help line and RG messaging are displayed.
3. Give all messaging visual dignity — don't shrink to minimum size.
4. Follow with a helpful action whenever possible.

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## GameSense — BC's flagship program

[GameSense](https://gamesense.com) is **BCLC's** responsible-gambling and player-education program. BC did not license GameSense from anyone — **BCLC created it (2009)** and licenses it **to** other operators (Alberta's AGLC, Manitoba, several US properties, and others). When deploying {{PROGRAM_NAME}} in BC, GameSense is not a peer program to work around — it is the **home program** {{PROGRAM_NAME}} sits alongside.

### What is GameSense?

| Field | Value |
|---|---|
| **Owner / originator** | BCLC (launched 2009) |
| **Scope** | All BC casinos and community gaming centres; PlayNow.com |
| **Purpose** | Player education, informed decision-making, responsible-gambling support |
| **Content** | How games work, odds of winning, skill vs. chance, randomness, common myths, keeping gambling fun, community resources |
| **In-venue** | **GameSense Info Centres** staffed by trained **GameSense Advisors** at casinos and community gaming centres |
| **Website** | gamesense.com |

*Source: [Gambling in B.C. / GameSense](https://www2.gov.bc.ca/gov/content/sports-culture/gambling-fundraising/gambling-in-bc)*

### GameSense presence

- **GameSense Advisors** staff Info Centres at casinos and community gaming centres across BC, providing face-to-face information and support.
- **GameSense Info Centres** provide brochures on game mechanics, odds, community resources, and Game Break self-exclusion enrolment.
- **On PlayNow.com**, GameSense content and positive-play guidance are surfaced on key pages.
- The program is the source brand for "Know your limit, play within it." and related positive-play messaging.

### Relationship to {{PROGRAM_NAME}}

| Area | GameSense | {{PROGRAM_NAME}} | Relationship |
|---|---|---|---|
| **Odds education** | How games work, odds, skill vs. chance, myths | Broad odds literacy, myth-busting, shareable content | **Complement** — {{PROGRAM_NAME}} extends and amplifies GameSense's education |
| **Tool awareness** | Promotes BCLC player tools in venues and on PlayNow | Promotes operator tools across all channels | **Complement** — same goal, broader formats |
| **Helpline** | Refers to Gambling Support BC | Refers to same help line | **Align** — same help line, same number |
| **In-venue presence** | Primary education resource at Info Centres | No presence unless deployed by BCLC | **Defer** — {{PROGRAM_NAME}} defers to GameSense Advisors in venues |
| **Brand voice** | Educational, supportive | Confident, witty, engaging | **Different** — {{PROGRAM_NAME}} is entertainment-first; GameSense is education-first |
| **Slogan** | Owns "Know your limit, play within it." | May echo it stylistically | **Respect** — treat as GameSense's brand asset, never as a legal mandate |

### Where {{PROGRAM_NAME}} adds value

| Gap | How {{PROGRAM_NAME}} fills it |
|---|---|
| **Social/shareable content** | GameSense is education-led; {{PROGRAM_NAME}}'s quiz, myth-buster, and share framework carries that education into social channels |
| **Entertainment-first voice** | GameSense is educational; {{PROGRAM_NAME}} makes literacy content feel like entertainment content |
| **Multi-channel collateral** | {{PROGRAM_NAME}} provides email, social, print, signage, and video templates that extend the GameSense message across touchpoints |
| **Campaign system** | {{PROGRAM_NAME}} adds a structured campaign and messaging library on top of GameSense's program content |

**Bottom line**: In BC, lead with GameSense and let {{PROGRAM_NAME}} amplify it. Defer to GameSense Advisors and Info Centres in venues; use {{PROGRAM_NAME}} to extend the same literacy into social, digital, and campaign formats.

---

## Advertising restrictions

### BC's multi-layer framework

BC's advertising rules come from two overlapping layers:

| Layer | Source | Scope |
|---|---|---|
| **Provincial** | GPEB/IGCO **Advertising and Marketing Standards for Gambling in BC** | All BCLC and service-provider gambling advertising in BC |
| **National** | CGA Code for Responsible Gaming Advertising (January 2026) | All gambling advertising in Canada |

Because BCLC is the **single operator**, advertising is centrally controlled — there is no field of competing operators running independent campaigns. BCLC vets advertising against the standards before it runs.

### Key Advertising & Marketing Standards

| Theme | Requirement |
|---|---|
| **Responsible gambling** | All advertising and marketing must contain a responsible-gambling message, presented in the **same language** as the advertisement. |
| **Odds of winning** | Odds must be stated factually; advertising must **not** present winning as the most probable outcome. |
| **No financial-cure framing** | Must not encourage playing beyond one's means, imply certainty of financial reward, present gambling as an alternative to employment or investment, or encourage chasing losses. |
| **No misleading the odds** | Must not imply that the chances of winning increase with longer play, or suggest that skill ensures a positive outcome. |
| **Protecting minors** | Must not use minors or minor-appealing models, cartoon figures, or celebrity endorsers whose primary appeal is to minors. **Minors are defined as under 19.** |

### CGA national code overlay

The **CGA Code for Responsible Gaming Advertising** (January 2026), administered by Ad Standards Canada, adds national standards on top of BC's. See [canada/README.md](../README.md#canadian-gambling-advertising-code). Key additions:
- Endorser minimum age of 25+
- Frequency limits during live sports broadcasts
- Enhanced inducement/T&C disclosure requirements

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

BC operates a **single province-wide Voluntary Self-Exclusion program**, branded **Game Break**, covering **both** land-based facilities and PlayNow.com. This is simpler than Ontario's dual system — one programme spans every channel.

### Voluntary Self-Exclusion (Game Break)

| Field | Value |
|---|---|
| **Program name** | Voluntary Self-Exclusion (consumer brand: **Game Break**) |
| **Operator** | BCLC (statutory program under Gaming Control Act s.57) |
| **Scope** | Province-wide — **all BC casinos and community gaming centres + PlayNow.com** |
| **Enrolment (land-based)** | In person at any BC casino — signed agreement + **photo-ID capture** at enrolment |
| **Enrolment (online)** | Through PlayNow.com account settings |
| **Duration options** | A range of exclusion lengths; **irrevocable for the chosen term** |
| **PlayNow time-outs** | Short breaks of **1 day, 2 weeks, 1, 2, or 3 months** (separate from full self-exclusion) |
| **Cross-channel effect** | Online self-exclusion **also bars land-based BCLC play** |
| **Reinstatement** | **Active reinstatement** required at term end — exclusion does not lapse automatically |
| **Support on enrol** | Enrollees offered **referral to treatment** and removed from marketing |
| **Enforcement** | **Photo-ID scanning at casino entry** + signed agreement; venues monitor to deter re-entry |
| **Source** | Gaming Control Act s.57; RG Standards Pt A s.6.1–6.4; Internet Gambling RG Standards s.5.1–5.11 |

> **Verify-before-merge note**: VSE enforcement is documented as **photo-ID scanning at entry plus a signed agreement**. Facial-recognition technology was only **historically tested** in BC — do not assert it as the live primary control.

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your account" | Game Break / "Voluntary Self-Exclusion" | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" | Voluntary Self-Exclusion (Game Break) | Legal documents, formal enrolment, support referrals |
| Staff training | Both | Voluntary Self-Exclusion / Game Break | When explaining the program and training on enrolment |
| Website/app | "Need a break from playing here?" | "Game Break / Self-exclusion" | On the self-exclusion enrolment page itself |
| Print/signage | "Need a break from gambling?" | "Game Break" | Venue self-exclusion information areas |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: How does self-exclusion work in British Columbia?**
>
> BC has one province-wide program: **Voluntary Self-Exclusion**, known to players as **Game Break**. It covers **every BC casino and community gaming centre and PlayNow.com** through a single enrolment. Players sign an agreement and have their photo ID captured at enrolment; the exclusion is **irrevocable for the term they choose** and requires an **active reinstatement** step at the end — it does not expire on its own. On PlayNow.com, players can also take shorter **time-outs** of 1 day, 2 weeks, or 1–3 months. Online self-exclusion also blocks land-based BCLC play.
>
> If a player asks about it, explain the options and offer to help them enrol or contact a GameSense Advisor. In casual conversation, say "take a break" or "pause your account." Use "Game Break" or "Voluntary Self-Exclusion" when referring to the formal program.

---

## Player protection — land-based

*Skip this section if your deployment is PlayNow-only.*

BC's land-based responsible-gambling rules are **principles-based** — the **Responsible Gambling Standards for the BC Gambling Industry, Part A** describe obligations and outcomes rather than enumerating prescriptive tool mechanics. Service providers operate facilities on BCLC's behalf and must meet these standards.

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Problem gambling information posting | Yes | RG and help information in customer-service areas, washrooms, and at ATMs | RG Standards Pt A s.2.2, s.5.1–5.3 |
| Help line display | Yes | Gambling Support BC at point of sale, in venues, at lottery retail | RG Standards Pt A s.2.2 |
| GameSense Info Centres & Advisors | Yes | Dedicated centres with trained advisors at casinos and community gaming centres | RG Standards Pt A (GameSense program) |
| Clocks visible to patrons | Yes | Clocks showing time of day in areas readily accessible to customers | RG Standards Pt A s.4.6 |
| No credit / lending to patrons | Yes | Information posted that credit and lending are prohibited; financial-transaction policies disclosed | RG Standards Pt A s.5.1–5.3 |
| Employee training | Yes | Patron-facing staff trained to identify and respond to distress; designated trained interveners; Serving It Right where alcohol is served | RG Standards Pt A s.3.2–3.3, s.4.3, s.4.5 |
| Increased interaction for extended play | Yes | Staff interaction must increase for extended or intensive play | RG Standards Pt A s.4.5 |
| Self-exclusion (Game Break) | Yes | Province-wide VSE; photo-ID capture and signed agreement at enrolment | Gaming Control Act s.57; RG Standards Pt A s.6.1–6.4 |

### {{PROGRAM_NAME}} tool messaging — land-based

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| GameSense Info Centre | "Curious how the games actually work? The GameSense desk has answers — no judgment." | RG Standards Pt A |
| Self-exclusion (Game Break) | "Need a real break? Game Break covers every BC venue and PlayNow in one step. Ask us." | Gaming Control Act s.57 |
| Help line | "Free, confidential, 24/7. 1-888-795-6111 — for any question about gambling." | RG Standards Pt A s.2.2 |

---

## Player protection — interactive (PlayNow.com)

*Skip this section if your deployment is land-based-only.*

PlayNow.com is governed by the **Standards for Responsible Gambling — Internet Gambling**, which are **prescriptive** — they enumerate specific tools, periods, and prohibited behaviours. PlayNow is BCLC's own platform (no third-party operator market).

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Deposit limits | Yes | Setting a **weekly deposit limit is mandatory** for players | Internet Gambling RG Standards s.3.5–3.14 |
| Loss limits | Yes (opt-out) | Loss limits offered; players must **actively opt out** | Internet Gambling RG Standards s.3.5–3.14 |
| Time limits | Yes (opt-out) | Time limits offered; players must **actively opt out** | Internet Gambling RG Standards s.3.5–3.14 |
| Time-outs / breaks | Yes (opt-out) | 1 day, 2 weeks, 1, 2, or 3 months; players must actively opt out | Internet Gambling RG Standards s.5.x |
| Limit-change cooling-off | Yes | **Increases** take effect only after a **24-hour** cooling-off; **decreases** are immediate | Internet Gambling RG Standards s.3.5–3.14 |
| Auto-play restrictions | Yes | **Auto-play for online slots is prohibited** | Internet Gambling RG Standards s.3.x |
| Single account enforcement | Yes | Only **one account per player** is permitted | Internet Gambling RG Standards s.3.x |
| Session reminders | Yes | **Hourly** session reminders promote breaks | Internet Gambling RG Standards s.1.5 |
| Activity statements / history | Yes | Real-time time/money tracking with **up to six months** of history | Internet Gambling RG Standards s.1.5, s.3.12–3.13 |
| Account transparency | Yes | Clear access to balances, deposits, withdrawals, bonuses, and limits; cash value of credits displayed | Internet Gambling RG Standards s.3.12–3.13 |
| Responsible-gambling messaging | Yes | RG/GameSense info, signs of problem gambling, and the help line on key pages | Internet Gambling RG Standards s.1.1–1.4 |
| Self-exclusion | Yes | Game Break online enrolment; irrevocable for chosen term; bars land-based play; active reinstatement | Internet Gambling RG Standards s.5.1–5.11 |
| Staff training (online) | Yes | PlayNow staff trained to give RG info, dispel myths in chats/calls, direct to resources and self-exclusion | Internet Gambling RG Standards s.2.1–2.4 |

### {{PROGRAM_NAME}} tool messaging — interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Weekly deposit limit | "Your weekly deposit limit is set before you play — that's the BC way. Adjust it anytime (increases wait 24 hours)." | Internet Gambling RG Standards s.3.5–3.14 |
| Loss limit | "Cap your losses for the week. One setting, total control." | Internet Gambling RG Standards s.3.5–3.14 |
| Time-out | "Need a breather? Pause for a day, two weeks, or up to 3 months." | Internet Gambling RG Standards s.5.x |
| Session reminder | "Your hourly check-in is here — time and money, no surprises." | Internet Gambling RG Standards s.1.5 |
| Activity dashboard | "Six months of your play, on demand. Wins, losses, and everything wagered." | Internet Gambling RG Standards s.3.12–3.13 |
| Self-exclusion (Game Break) | "Need a longer break? Game Break covers PlayNow and every BC venue." | Internet Gambling RG Standards s.5.1–5.11 |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 19+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.canada-british-columbia` |
| **`{{MIN_AGE}}` token value** | 19 |
| **Statutory basis** | Gaming Control Act ss.41, 43 |
| **Products with different ages** | None — 19+ applies to all gambling products in BC |

BC prohibits minors (under 19) from participating in any provincial gaming scheme, redeeming a prize, or being sold lottery tickets. Age requirements split by channel below.

### Land-based verification

| Requirement | Details | Source |
|---|---|---|
| **Method** | Minors prohibited from any gambling or adult-only gaming area; ID checked at entry to gaming areas | Gaming Control Act ss.41, 43; RG Standards Pt A s.4.1 |
| **Acceptable ID** | Government-issued photo ID | RG Standards Pt A s.4.1 |

### Interactive verification (PlayNow.com)

| Requirement | Details | Source |
|---|---|---|
| **Registration requirements** | PlayNow.com must clearly state the legal age and bar minors from registering or playing | Internet Gambling RG Standards s.3.1–3.2 |
| **Verification method** | Age **and location** verified at registration | Internet Gambling RG Standards s.3.1–3.2 |
| **Single account** | Only one account per player permitted | Internet Gambling RG Standards s.3.x |

### Age messaging

All collateral in BC must display the `19+` age notice:

> "You must be 19+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `19+` for all BC-deployed content.

---

## AML/KYC

### FINTRAC requirements

BC gambling operations (BCLC and its service providers) are subject to federal anti-money-laundering regulation through **FINTRAC** under the *Proceeds of Crime (Money Laundering) and Terrorist Financing Act* (PCMLTFA).

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Large cash transaction report** | $10,000+ (single or within 24 hours) | Player may be asked for ID |
| **Suspicious transaction report** | Any amount | No direct player notification — internal reporting |
| **Player identification** | $3,000+ (casinos) | Identity verification required |
| **Source of funds** | Large or unusual transactions | Player may be asked about the source of their funds |

BC casinos operate under heightened AML scrutiny following the province's Cullen Commission (2022); source-of-funds and large-cash controls are rigorously applied.

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity and the source of your funds."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required for all players. Takes about 2 minutes. If we ask about the source of your funds, it's a standard security step that applies to everyone."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to BC-specific adaptations. Tag indicates the applicable vertical.

| Category | Collateral | Verticals | BC adaptation | Token/Value |
|---|---|---|---|---|
| **Digital** | Website footer | Both | Gambling Support BC: 1-888-795-6111 + on-brand RG message; GameSense reference | `{{HELPLINE_NUMBER}}` |
| **Digital** | PlayNow account / app | Interactive | Weekly deposit-limit prompt, session reminder, activity history, help line | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Both | Set to 19+ | `{{MIN_AGE}}` = 19 |
| **Digital** | Self-exclusion page | Both | Explain Game Break (province-wide, all venues + PlayNow); irrevocable term + active reinstatement | — |
| **Digital** | Email footer | Both | Gambling Support BC + on-brand RG message in every email | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media | Both | Include 1-888-795-6111; no minor-appealing creative; RG message | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | Both | BC help line, 19+ notice, GameSense reference | All tokens |
| **Print** | Rack card | Land-based | Gambling Support BC, on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Land-based | Gambling Support BC + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | Both | Gambling Support BC, 1-888-795-6111, gamblingsupportbc.ca | All helpline tokens |
| **Environmental** | Entry signage | Land-based | 19+ age notice, Gambling Support BC, GameSense Info Centre wayfinding | `{{MIN_AGE}}`, `{{HELPLINE_NUMBER}}` |
| **Environmental** | Floor / ATM area | Land-based | Gambling Support BC, no-credit notice, RG info | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Washroom / service desk | Land-based | RG information per RG Standards Pt A s.5.1–5.3 | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | Land-based | On-brand RG message in rotation, Gambling Support BC | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot end card | Both | Gambling Support BC + RG message (same language as ad) | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Both | Spoken Gambling Support BC reference + RG message | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Pre-roll | Interactive | Overlay: Gambling Support BC | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | Both | Gambling Support BC in referral scripts; Game Break enrolment; GameSense Advisor referral | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Both | Add BC self-exclusion Q&A (Game Break), help line, GameSense | — |

### Key differences from Ontario and Alberta

| Area | British Columbia | Ontario | Alberta |
|---|---|---|---|
| **Mandatory statement** | None (obligation-based) | None (obligation-based) | None (obligation-based) |
| **"Know your limit, play within it."** | BCLC/GameSense **tagline** (slogan) | Not used as a mandate | Not used as a mandate |
| **Help line** | Gambling Support BC 1-888-795-6111 | ConnexOntario 1-866-531-2600 | AHS Addiction Helpline 1-866-332-2322 |
| **Self-exclusion** | Game Break (province-wide, all venues + PlayNow) | Dual system (OLG + iGaming CSE) | AGLC VSE + CSE (with iGaming launch) |
| **Operator model** | Crown monopoly — BCLC only | Open market (70+ operators) + OLG | PlayAlberta + open market (mid-2026) |
| **Player education program** | **GameSense (originated here, BCLC 2009)** | PlaySmart (OLG-only) | GameSense (licensed from BCLC) |
| **Legal age** | 19+ | 19+ | 18+ |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in British Columbia:

```yaml
# ─── HELPLINES ───────────────────────────────
helplines:
  canada:
    british-columbia:
      number: "1-888-795-6111"
      website: "www.gamblingsupportbc.ca"
      label: "Gambling Support BC"
      hours: "24/7"

# ─── LEGAL ───────────────────────────────────
legal:
  minimum_gambling_age:
    canada-british-columbia: 19
```

Note: British Columbia has **no mandatory messaging token** — there is no verbatim statement required. Do **not** add a `messaging.mandatory.canada-british-columbia` entry for "Know your limit, play within it." That phrase is the BCLC/GameSense tagline (a slogan), not a regulatory mandate. (This module's corrections removed the earlier, inaccurate mandatory-messaging entry from `_brand-canada.yml`.)

Also see the full [Canada config overrides](../_brand-canada.yml) for the complete provincial structure.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in British Columbia.

### Regulatory
- [ ] Confirmed IGCO (formerly GPEB) as regulator and BCLC as the sole conduct-and-manage operator
- [ ] Understood the Crown-monopoly model (no operator market; private firms register as service providers)
- [ ] Confirmed deployment path is with/through BCLC or a BCLC service provider
- [ ] Verified legal gambling age: 19+ for all products
- [ ] Reviewed permitted products table
- [ ] Reviewed Gaming Control Act (SBC 2022 c.29) and the RG / Internet Gambling RG / Advertising standards
- [ ] **Verified the current standards** post-IGCO transition (GPEB PDFs may be reissued under the new Act)

### Helpline
- [ ] Gambling Support BC (1-888-795-6111) displayed at point of sale, in venues, and on PlayNow key pages
- [ ] Website (gamblingsupportbc.ca) included
- [ ] PlayNow.com displays signs of problem gambling + help line on key pages (Internet Gambling RG Standards s.1.4)
- [ ] GameSense Info Centre / Advisor references included where appropriate

### Messaging
- [ ] Confirmed: **no verbatim mandatory statement** required in BC
- [ ] Confirmed: "Know your limit, play within it." treated as the GameSense **slogan**, not a mandate
- [ ] Help line + regulator-approved RG/GameSense messaging displayed (RG Standards Pt A s.2.1–2.2)
- [ ] On-brand {{PROGRAM_NAME}} messaging used (not just bare compliance)
- [ ] 19+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to BC values

### GameSense
- [ ] GameSense acknowledged as BC's flagship program (BCLC-originated, 2009)
- [ ] {{PROGRAM_NAME}} positioned to complement/amplify GameSense, defer to Advisors in venues
- [ ] GameSense slogan and brand assets respected (not presented as legal requirements)

### Advertising
- [ ] Advertising reviewed against the Advertising & Marketing Standards for Gambling in BC
- [ ] Responsible-gambling message present in all ads, in the same language as the ad
- [ ] Odds stated factually; winning not presented as the most probable outcome
- [ ] No financial-cure framing, no chasing-losses encouragement, no skill-ensures-winning claims
- [ ] No minors or minor-appealing models/cartoons/endorsers (minors = under 19)
- [ ] Advertising reviewed against CGA Code for Responsible Gaming Advertising (January 2026)
- [ ] Advertising reviewed per [advertising-rules.md](advertising-rules.md)

### Self-exclusion
- [ ] Game Break (Voluntary Self-Exclusion) information available — province-wide scope explained (all venues + PlayNow)
- [ ] Land-based enrolment: photo-ID capture + signed agreement
- [ ] PlayNow time-outs (1 day / 2 weeks / 1–3 months) available
- [ ] Irrevocable-for-term + active-reinstatement rules communicated
- [ ] Online self-exclusion also bars land-based BCLC play
- [ ] Self-excluded persons removed from marketing; treatment referral offered
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language
- [ ] Staff FAQ updated with BC self-exclusion Q&A
- [ ] Facial recognition NOT asserted as live primary control (photo-ID scanning is the documented control)

### Player protection — land-based
*Check only if deploying in land-based venues.*
- [ ] RG information posted in customer-service areas, washrooms, and at ATMs (s.5.1–5.3)
- [ ] Clocks visible to patrons (s.4.6)
- [ ] No-credit / lending notice posted (s.5.1–5.3)
- [ ] Staff trained to identify/respond to distress; designated interveners; Serving It Right where alcohol served
- [ ] GameSense Info Centre present and staffed

### Player protection — interactive (PlayNow.com)
*Check only if deploying on PlayNow.com.*
- [ ] Mandatory weekly deposit limit enforced (s.3.5–3.14)
- [ ] Loss / time limits and time-outs available on an opt-out basis
- [ ] 24-hour cooling-off on limit increases; decreases immediate
- [ ] Online-slot auto-play disabled
- [ ] One account per player enforced
- [ ] Hourly session reminders active (s.1.5)
- [ ] Real-time activity tracking with up to six months of history (s.3.12–3.13)
- [ ] Account transparency (balances, deposits, withdrawals, bonuses, limits; cash value of credits)
- [ ] PlayNow staff trained to give RG info and dispel myths (s.2.1–2.4)

### Age verification
- [ ] 19+ verification at all gambling touchpoints
- [ ] Land-based: ID checked at entry; minors barred from gaming/adult-only areas (ss.41, 43)
- [ ] PlayNow: age and location verified at registration (s.3.1–3.2)

### AML/KYC
- [ ] FINTRAC compliance program in place
- [ ] Large cash transaction reporting for $10,000+
- [ ] Source-of-funds controls applied (BC heightened scrutiny post-Cullen)
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] GameSense compatibility reviewed (venues + PlayNow)
- [ ] Staff FAQ updated with BC self-exclusion Q&A
- [ ] Conversation scripts updated with Gambling Support BC references

### Governance
- [ ] `_brand.yml` updated with BC values (helpline, age)
- [ ] `_brand-canada.yml` reviewed (no BC mandatory-messaging entry)
- [ ] `Last verified` date set on this module (2026-06-05)
- [ ] `Next review due` date set (2026-09-05)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained
- [ ] IGCO standards re-issuance monitored post-13-April-2026 transition

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [Canada overview](../README.md) | [Canada config overrides](../_brand-canada.yml) | [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [Advertising rules](advertising-rules.md)*
