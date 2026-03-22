---
content_type: jurisdiction-module
title: "Alberta -- Compliance Module"
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
  Alberta module uses CAD currency context. No mandatory verbatim
  statement. Alberta Health Services Addiction Helpline is province-
  specific. GameSense program (licensed from BCLC) operates at all
  casinos and RECs. Deal Us In mandatory staff certification is
  Alberta-specific. PlayAlberta is the current sole regulated online
  platform; open competitive iGaming market launching mid-2026 under
  iGaming Alberta Act with AGLC as regulator and AiGC as market
  conductor. 18+ minimum age (lower than most Canadian provinces).
last_updated: 2026-03-22
---

# Alberta -- Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Alberta. Alberta has a dual-body model: AGLC regulates all gambling, while the Alberta iGaming Corporation (AiGC) conducts and manages the private iGaming market launching mid-2026. Currently, PlayAlberta.ca is the sole regulated online platform; the open competitive market will add private operators. GameSense (licensed from BCLC) is Alberta's responsible gambling program, with trained Advisors and Info Centres at every casino and racing entertainment centre (REC). Deal Us In certification is mandatory for all gaming workers.

> **Last verified**: 2026-03-22
> **Next review due**: 2026-06-22 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | AGLC, AiGC, PlayAlberta |
| [Legal requirements](#legal-requirements) | 18+, dual-body model, permitted products |
| [Helpline](#helpline) | Alberta Health Services Addiction Helpline + GameSense Info Line |
| [Messaging requirements](#messaging-requirements) | No verbatim mandate -- what IS required |
| [Advertising restrictions](#advertising-restrictions) | AGLC iGaming standards + CGA national code |
| [GameSense compatibility](#gamesense-compatibility) | Working alongside AGLC's player education program |
| [Self-exclusion](#self-exclusion) | AGLC Self-Exclusion + CSE for iGaming market |
| [Player protection tools](#player-protection-tools) | Deposit limits, loss limits, reality checks, breaks |
| [Age verification](#age-verification) | 18+ requirements |
| [AML/KYC](#amlkyc) | FINTRAC requirements + AGLC AML certification |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Regulator** | Alberta Gaming, Liquor and Cannabis (AGLC) |
| **iGaming market conductor** | Alberta iGaming Corporation (AiGC) -- Crown corporation (established 2025) |
| **Current online operator** | PlayAlberta.ca (AGLC-operated) |
| **Governing legislation** | Gaming, Liquor and Cannabis Act (RSA 2000, c.G-1) |
| **iGaming legislation** | iGaming Alberta Act (Bill 48, Royal Assent May 12, 2025) |
| **Key regulations** | Gaming, Liquor and Cannabis Regulation (AR 143/1996); Standards and Requirements for Internet Gaming |
| **Website** | [aglc.ca](https://aglc.ca/) |

*Sources: [Gaming, Liquor and Cannabis Act](https://open.alberta.ca/publications/g01) | [iGaming Alberta Act](https://open.alberta.ca/publications/i00p2) | [AGLC Gaming](https://aglc.ca/gaming)*

### Regulatory structure

Alberta's gambling regulation involves two bodies with distinct roles:

| Body | Role | Key functions |
|---|---|---|
| **AGLC** | Regulator | Registration of operators and suppliers, standards-setting, compliance enforcement, inspections, responsible gambling oversight |
| **AiGC** (Alberta iGaming Corporation) | Market conductor | Commercial agreements with registered iGaming operators, revenue collection, market oversight |

This mirrors Ontario's AGCO/iGO structure. AGLC sets and enforces standards; AiGC manages commercial relationships with private operators.

### How iGaming registration works

1. **Operator engages with AGLC** due diligence team to confirm eligibility, registration class, fees, and required documentation
2. **AGLC reviews** -- background checks, financial capacity, responsible gambling capability
3. **Operator works with AGLC's iGaming compliance team** -- compliance documentation, notification requirements, go-live expectations
4. **Operator integrates API** with AGLC's centralized Self-Exclusion Program (mandatory)
5. **Operator contracts with AiGC** -- commercial agreement covering revenue sharing, operational requirements
6. **Operator achieves RG Check accreditation** from the Responsible Gambling Council (mandatory)
7. **Operator launches** on the regulated Alberta market
8. **AGLC monitors** ongoing compliance with Standards and Requirements

*Source: [Segev LLP -- Alberta iGaming Legal Framework](https://segevllp.com/know-the-rules-before-you-play-albertas-igaming-legal-framework-and-registration-process/)*

### iGaming Alberta Act (Bill 48)

On **May 12, 2025**, the iGaming Alberta Act received Royal Assent, establishing the framework for Alberta's open competitive iGaming market. Key provisions:

| Area | Before (PlayAlberta monopoly) | After (open market, mid-2026) |
|---|---|---|
| **Online operator** | PlayAlberta.ca (AGLC-operated) only | PlayAlberta + licensed private operators |
| **Market conductor** | N/A | AiGC (Alberta iGaming Corporation) |
| **Regulator** | AGLC | AGLC (unchanged) |
| **Sports betting** | PlayAlberta single-event betting only | Private sportsbooks + PlayAlberta |
| **Self-exclusion** | AGLC Self-Exclusion (venues + PlayAlberta) | Centralized Self-Exclusion covering all platforms and venues |

**What this means for {{PROGRAM_NAME}} operators**: The open market creates new deployment opportunities. Any registered iGaming operator can deploy {{PROGRAM_NAME}} content. The regulatory requirements (responsible gambling standards, advertising rules, self-exclusion integration) apply uniformly to all operators.

*Source: [Alberta's iGaming Strategy](https://www.alberta.ca/albertas-igaming-strategy)*

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 18+ |
| **Legal framework** | Dual-body -- AGLC monopoly (land-based/lottery) transitioning to AGLC regulation + AiGC market conduct (iGaming) |
| **Online gambling** | Legal -- PlayAlberta.ca (since 2020); open iGaming market launching mid-2026 |
| **Lottery** | Legal -- Western Canada Lottery Corporation (WCLC) products sold through AGLC |

### Permitted products

| Product | Legal status | Operator | Notes |
|---|---|---|---|
| Casino (slots, table games) | Legal | Private operators under AGLC licence | 28 casinos + racing entertainment centres across Alberta |
| Online casino (iGaming) | Legal | PlayAlberta.ca (AGLC); private operators launching mid-2026 | Open competitive market under iGaming Alberta Act |
| Sports betting (single-event) | Legal | PlayAlberta.ca; private operators launching mid-2026 | Legal since Sept 21, 2021 (Bill C-218) |
| Lottery | Legal | WCLC via AGLC | Lotto 6/49, Lotto Max, scratch tickets |
| Horse racing | Legal | Licensed tracks (RECs) | Century Downs, Century Mile |
| Poker (live) | Legal | Licensed casinos | Available in licensed casinos |
| Charitable gaming (bingo) | Legal | Licensed charity operators | Regulated by AGLC |
| VLTs (video lottery terminals) | Legal | AGLC-operated | ~6,000 VLTs in ~900 licensed premises |

*Source: [AGLC Gaming](https://aglc.ca/gaming)*

### Key regulatory notes

- Alberta's transitioning model means {{PROGRAM_NAME}} deployment can happen through **two paths**:
  - **Land-based casinos and RECs**: alongside GameSense program
  - **Online platforms**: PlayAlberta.ca now; any registered iGaming operator after market launch
- The open market structure (modeled on Ontario) means {{PROGRAM_NAME}} content may need to work across multiple operator brands simultaneously
- Alberta's 18+ minimum age differs from most other Canadian provinces (Ontario, BC are 19+)
- Political event betting is explicitly prohibited in the new iGaming market

---

## Helpline

### Alberta Health Services Addiction Helpline

| Field | Value |
|---|---|
| **Name** | Alberta Health Services Addiction Helpline |
| **Phone** | 1-866-332-2322 |
| **Website** | www.albertahealthservices.ca |
| **Hours** | 24/7, 365 days/year |
| **Languages** | English, French |
| **Cost** | Free |
| **Scope** | Addiction (including gambling), mental health |
| **Staff** | Nurses, psychiatric nurses, social workers, occupational therapists, psychologists |

### GameSense Info Line

| Field | Value |
|---|---|
| **Name** | GameSense Info Line |
| **Phone** | 1-833-447-7523 |
| **Website** | gamesenseab.ca |
| **Hours** | Tue-Wed 10am-5pm; Thu-Sat 1pm-8pm |
| **Scope** | Responsible gambling information, GameSense Advisor support |

### Additional resources

| Resource | Contact | Description |
|---|---|---|
| **Problem Gambling Alberta** | problemgamblingalberta.ca | Information and resources for problem gambling |
| **Recovery Alberta** | recoveryalberta.ca | Provincial addiction and mental health services |
| **988 Suicide & Crisis Lifeline** | Call/text 988 | Crisis situations (not gambling-specific) |

*Sources: [AHS Addiction Helpline](https://www.albertahealthservices.ca/findhealth/service.aspx?Id=1008399) | [GameSense Contact](https://gamesenseab.ca/contact-us)*

### Display rules

Under the Gaming, Liquor and Cannabis Act and AGLC Standards:

- All casinos and RECs must display responsible gambling information including helpline contact details
- GameSense Info Centres at all casinos and RECs provide brochures, self-exclusion information, and community resource referrals
- iGaming operators must display responsible gambling information and helpline resources prominently on their platforms

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call 1-866-332-2322."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support -- 24/7. For any question about gambling.
> **Call 1-866-332-2322** | **Visit albertahealthservices.ca**
> GameSense support: **1-833-447-7523** | **gamesenseab.ca**

Both meet the regulatory requirement. The second version provides multiple contact options, frames the helpline as available for any question (not only crisis), and uses {{PROGRAM_NAME}}'s inviting tone.

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### No verbatim mandatory messaging

| Field | Value |
|---|---|
| **Verbatim required statement** | **None** -- Alberta does not require a specific word-for-word message |
| **What IS required** | Advertising and marketing materials must contain a responsible gambling message; responsible gambling information must be available at all venues and on platforms |
| **Contrast with BC** | BC requires "Know your limit, play within it." (exact wording); Alberta requires information display but no specific phrasing |

### What the Standards require

Alberta's approach is **obligation-based** rather than message-based. Operators must:

1. **Include a responsible gambling message** in all advertising and marketing materials
2. **Display helpline information** and responsible gambling resources prominently
3. **Provide GameSense information** at all venues (land-based)
4. **Make self-exclusion information** readily available to all patrons
5. **Train employees** to recognize and respond to at-risk gambling behaviour (Deal Us In)
6. **Provide quarterly reminders** regarding time and financial limits (iGaming)
7. **Provide monthly reminders** to review financial activity statements (iGaming)

### On-brand integration

Because Alberta has no mandated phrasing, operators have flexibility to use {{PROGRAM_NAME}} messaging natively:

**Generic operator approach:**
> "If gambling is a problem, call 1-866-332-2322."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-866-332-2322** | **gamesenseab.ca**

This flexibility is a significant advantage -- {{PROGRAM_NAME}} content in Alberta can fully express its brand voice without working around a mandatory statement.

---

## Advertising restrictions

### Alberta's multi-layer framework

Alberta's advertising rules come from two overlapping layers:

| Layer | Source | Scope |
|---|---|---|
| **Provincial** | AGLC Standards and Requirements for Internet Gaming | All gambling advertising in Alberta |
| **National** | CGA Code for Responsible Gaming Advertising (January 2026) | All gambling advertising in Canada |

### Key AGLC advertising standards (iGaming)

| Rule | Requirement |
|---|---|
| **Responsible gambling message** | All advertising and marketing materials must contain a responsible gambling message |
| **Minor protection** | Must not target or appeal to minors. No cartoon figures, social media influencers, celebrities, or entertainers if there are reasonable grounds to believe it could appeal to minors |
| **Athlete restriction** | Athletes may only be used to exclusively advocate for responsible gaming practices |
| **High-risk targeting** | Must not target individuals known to be at high risk of gambling harm |
| **Self-excluded targeting** | Must not target self-excluded persons. Operators must block all marketing to self-excluded players |
| **Inducement marketing** | Opt-in consent required for inducement, bonus, and credit communications. Easily accessible method to withdraw consent at any time |
| **Truthfulness** | Must be truthful and not mislead. Cannot suggest gambling solves problems or guarantees financial outcomes |

### CGA national code overlay

The **CGA Code for Responsible Gaming Advertising** (January 2026), administered by Ad Standards Canada, adds national standards. See [canada/README.md](../README.md#canadian-gambling-advertising-code). Key additions:
- Endorser minimum age of 25+
- Frequency limits: maximum 1 gambling ad per commercial break during live sports
- Enhanced T&C disclosure requirements

### Prohibited content

- Advertising targeting or appealing to persons under 18
- Use of athletes except for responsible gambling advocacy
- Content targeting self-excluded or high-risk individuals
- Misleading claims about odds, winning likelihood, or financial outcomes
- Suggestions that gambling can solve financial or personal problems
- Political event betting promotion (explicitly prohibited)

*Sources: [Gowling WLG -- Alberta iGaming RG Check and Ad Controls](https://gowlingwlg.com/en/insights-resources/articles/2026/alberta-igaming-requires-rg-check-and-ad-controls) | [AGLC iGaming](https://aglc.ca/igaming)*

---

## GameSense compatibility

[GameSense](https://gamesenseab.ca/) is AGLC's responsible gambling program, licensed from the British Columbia Lottery Corporation (BCLC), providing information about odds, game mechanics, and responsible gambling tools.

### What is GameSense?

| Field | Value |
|---|---|
| **Owner** | AGLC (licensed from BCLC) |
| **Scope** | All Alberta casinos and racing entertainment centres |
| **Purpose** | Player education, informed decision-making, responsible gambling support |
| **Content** | How games work, odds of winning, tips for keeping gambling fun, community resources |
| **Website** | gamesenseab.ca |
| **Info Line** | 1-833-447-7523 |

*Source: [GameSense by AGLC](https://gamesenseab.ca/what-gamesense)*

### GameSense presence

- **GameSense Advisors** are located at casinos and RECs across Alberta, providing face-to-face support
- **GameSense Info Centres** at each casino and REC provide brochures on game mechanics, odds, community resources, and self-exclusion
- **GameSense Info Line** (1-833-447-7523) connects patrons with trained Advisors by phone

### Relationship to {{PROGRAM_NAME}}

| Area | GameSense | {{PROGRAM_NAME}} | Relationship |
|---|---|---|---|
| **Odds education** | Game-specific odds info, how games work | Broad odds literacy, myth-busting, shareable content | **Complement** -- {{PROGRAM_NAME}} extends education beyond venues |
| **Tool awareness** | Promotes player tools at venues | Promotes operator tools across all channels | **Complement** -- same goal, different reach |
| **Helpline** | Refers to AHS Addiction Helpline | Refers to same helpline | **Align** -- same helpline, same number |
| **Venue presence** | Primary education resource at casinos/RECs | No presence unless deployed by venue operator | **Defer** -- {{PROGRAM_NAME}} defers to GameSense at venue Info Centres |
| **Private iGaming** | Not present on private operator sites | Available to any registered operator | **Fill gap** -- {{PROGRAM_NAME}} serves private operators where GameSense doesn't exist |
| **Brand voice** | Educational, informational | Confident, witty, engaging | **Different** -- {{PROGRAM_NAME}} is entertainment-first; GameSense is education-first |

### Where {{PROGRAM_NAME}} adds value

| Gap | How {{PROGRAM_NAME}} fills it |
|---|---|
| **Private iGaming operators** | GameSense is venue-focused; {{PROGRAM_NAME}} provides player education content for private operators entering the open market |
| **Social/shareable content** | GameSense doesn't have a social content system; {{PROGRAM_NAME}}'s quiz, myth-buster, and share framework extends education to social channels |
| **Entertainment-first voice** | GameSense is educational; {{PROGRAM_NAME}} makes literacy content feel like entertainment content |
| **Multi-channel collateral** | GameSense focuses on venues; {{PROGRAM_NAME}} provides email, social, print, signage, and video templates |
| **White-label flexibility** | GameSense is AGLC-branded; {{PROGRAM_NAME}} adapts to any operator's brand |

---

## Self-exclusion

### Current system

Alberta currently has one province-wide self-exclusion program:

| Field | Value |
|---|---|
| **Program name** | AGLC Self-Exclusion Program |
| **Scope** | All Alberta casinos, racing entertainment centres, and PlayAlberta.ca |
| **Duration options** | 6 months, 1 year, 2 years, 3 years |
| **Enrollment** | Virtual sign-up (online), in person at any casino/REC, or via AGLC office |
| **Contact** | 780-447-7582 or 1-844-468-8034; email se@aglc.ca |
| **Effect** | Immediate upon signing agreement |
| **Cancellation** | Cannot be cancelled or changed once signed |
| **Enforcement** | Security staff will remove self-excluded persons from casino/REC premises |
| **Information sharing** | Participant information shared with all security offices at all Alberta casinos and RECs |

*Source: [AGLC Self-Exclusion](https://aglc.ca/gaming/self-exclusion) | [GameSense Self-Exclusion](https://gamesenseab.ca/responsible-gambling-support/self-exclusion-program)*

### Centralized Self-Exclusion (CSE) -- launching with iGaming market

| Field | Value |
|---|---|
| **Program name** | Centralized Self-Exclusion (CSE) |
| **Scope** | All licensed iGaming sites AND all land-based gambling venues |
| **Category selection** | Players can opt out of all iGaming sites, all land-based venues, or both |
| **Enrollment** | Single registration process via centralized platform |
| **Operator obligations** | API integration with AGLC's CSE platform mandatory; prevent account creation/access; cease all marketing |
| **Launch** | Day one of iGaming market launch (mid-2026) |

*Source: [Segev LLP -- Alberta iGaming Registration](https://segevllp.com/alberta-open-for-business-igaming-registration-officially-opens-today/)*

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your account" | "Self-Exclusion Program" | Never in Tier 1 -- use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" | "AGLC Self-Exclusion Program" / "Centralized Self-Exclusion" | Legal documents, formal enrollment, support referrals |
| Staff training | Both | "Self-Exclusion Program" | When explaining the program and training on enrollment |
| Website/app | "Need a break from playing here?" | "Self-exclusion program" | On the self-exclusion enrollment page itself |
| Print/signage | "Need a break from gambling?" | "Self-Exclusion" | Venue self-exclusion information areas |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: How does self-exclusion work in Alberta?**
>
> Alberta has a province-wide self-exclusion program run by AGLC. Players can exclude themselves from all Alberta casinos, racing entertainment centres, and PlayAlberta.ca for 6 months, 1 year, 2 years, or 3 years. Once signed, the agreement cannot be cancelled or changed. Players can sign up virtually, in person at any casino or REC, or by contacting AGLC. A new **Centralized Self-Exclusion (CSE)** system is launching with the iGaming market, allowing players to exclude from all licensed online platforms, all land-based venues, or both through a single enrollment.
>
> If a player asks about self-exclusion, explain the options and offer to help them get started. Use "take a break" in casual conversation, "Self-Exclusion Program" when referring to the formal program.

---

## Player protection tools

### Land-based gaming (moderate mandate)

| Tool | Required? | Details |
|---|---|---|
| **Self-exclusion** | Yes | Province-wide AGLC program covering all casinos and RECs |
| **GameSense Info Centres** | Yes | Dedicated space at every casino and REC with responsible gambling information |
| **GameSense Advisors** | Yes | Trained staff available at casinos and RECs |
| **Responsible gambling signage** | Yes | Posted throughout venues |
| **Employee training (Deal Us In)** | Yes | Mandatory for all gaming workers within 30 days of employment |
| **AML certification** | Yes | Mandatory for staff exposed to money laundering risk (2-year validity) |

### iGaming (PlayAlberta + future private operators)

| Tool | Required? | Details |
|---|---|---|
| **Deposit limits** | Yes | Daily, weekly, and monthly periods. Must be offered at account creation |
| **Loss limits** | Yes | Prevent play once limit is reached |
| **Reality checks** | Yes | Time-based reminders during sessions |
| **Voluntary breaks** | Yes | Temporary account suspension options |
| **Self-exclusion** | Yes | Province-wide program; CSE integration mandatory for iGaming operators |
| **Activity statements** | Yes | Monthly reminders to review financial activity |
| **Limit reminders** | Yes | Quarterly reminders regarding time and financial limits |
| **RG Check accreditation** | Yes | Mandatory for all iGaming operators (RGC program) |
| **Responsible gambling information** | Yes | Must be prominently displayed on platform |

*Sources: [AGLC Responsible Gambling](https://aglc.ca/gaming/responsible-gambling) | [Gowling WLG -- Alberta iGaming](https://gowlingwlg.com/en/insights-resources/articles/2026/alberta-igaming-requires-rg-check-and-ad-controls)*

### {{PROGRAM_NAME}} tool messaging for Alberta

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit -- play on your terms. Takes 10 seconds." | iGaming (mandatory at account creation) |
| Loss limits | "Cap your losses for the day, week, or month. One setting, total control." | iGaming |
| Reality checks | "Set a reminder -- track your time, stay in control." | iGaming |
| Self-exclusion | "Need a longer break? Step away for 6 months, 1 year, 2 years, or 3 years." | All verticals |
| Activity statement | "Your play stats are ready. No surprises -- just the facts." | iGaming (monthly reminders) |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 18+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.canada-alberta` |
| **`{{MIN_AGE}}` token value** | 18 |
| **Statutory basis** | Gaming, Liquor and Cannabis Act, s.37 |
| **Products with different ages** | None -- 18+ applies to all gambling products in Alberta |

### Land-based verification

| Requirement | Details |
|---|---|
| **Method** | Government-issued photo ID |
| **Entry restriction** | Minors not allowed in casinos or racing entertainment centres |

### Interactive verification

| Requirement | Details |
|---|---|
| **Registration** | Identity verification required at account creation |
| **Age confirmation** | Date of birth must confirm player is 18 or older |

*Source: [Gaming, Liquor and Cannabis Act](https://open.alberta.ca/publications/g01)*

### Age messaging

All collateral in Alberta must display `18+` age notice:

> "You must be 18+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `18+` for all Alberta-deployed content.

---

## AML/KYC

### FINTRAC requirements

Alberta gambling operators are subject to federal anti-money laundering regulations through **FINTRAC** under the *Proceeds of Crime (Money Laundering) and Terrorist Financing Act* (PCMLTFA). Since July 1, 2015, AGLC is responsible for ensuring casino and REC compliance with PCMLTFA.

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Large cash transaction report** | $10,000+ (single or within 24 hours) | Player asked for government-issued ID |
| **Cash-out / jackpot reporting** | $10,000+ (in 24-hour period) | Player asked for government-issued ID |
| **Foreign exchange transactions** | $3,000+ | Player asked for government-issued ID |
| **Suspicious transaction report** | Any amount | No direct player notification -- internal reporting |

### AGLC AML certification

| Field | Value |
|---|---|
| **Requirement** | Mandatory for all staff exposed to money laundering or terrorist financing risk at casinos and RECs |
| **Certification validity** | 2 years |
| **Training** | Online course through AGLC |
| **AGLC Hotline** | 1-800-561-4415 |

*Sources: [AGLC AML Certification](https://aglc.ca/training/anti-money-laundering-certification) | [AGLC AML Program](https://aglc.ca/news/aglcs-new-anti-money-laundering-program)*

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity and the source of your funds."

**On-brand:**
> "Quick ID check -- it keeps your account secure and is required for all players. Takes about 2 minutes. If we ask about the source of your funds, it's a standard security step that applies to everyone."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Alberta-specific adaptations.

| Category | Collateral | Alberta adaptation | Token/Value |
|---|---|---|---|
| **Digital** | Website footer | AHS Addiction Helpline: 1-866-332-2322 + on-brand RG message | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Set to 18+ | `{{MIN_AGE}}` = 18 |
| **Digital** | Self-exclusion page | Explain dual system (current AGLC + CSE for iGaming); link to enrollment | -- |
| **Digital** | Deposit screen | Deposit limit prompt + helpline | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media bio | Include 1-866-332-2322 | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email footer | AHS Addiction Helpline + on-brand RG message in every email | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | Alberta helpline, 18+ notice | All tokens |
| **Print** | Rack card | Helpline, on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Helpline + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | AHS Addiction Helpline 1-866-332-2322, GameSense Info Line 1-833-447-7523, gamesenseab.ca | All helpline tokens |
| **Environmental** | Entry signage | 18+ age notice, helpline | `{{MIN_AGE}}`, `{{HELPLINE_NUMBER}}` |
| **Environmental** | Floor / ATM area | Helpline, responsible gambling info | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | On-brand RG message in rotation, helpline | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot end card | Helpline (3-second minimum recommended) | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Spoken helpline reference | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | Helpline in all referral scripts, self-exclusion enrollment in scripts | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Add Alberta self-exclusion Q&A, update helpline | -- |

### Key differences from Ontario

| Area | Alberta | Ontario |
|---|---|---|
| **Minimum age** | 18+ | 19+ |
| **Mandatory statement** | None | None |
| **Helpline** | AHS Addiction Helpline 1-866-332-2322 | ConnexOntario 1-866-531-2600 |
| **RG program** | GameSense (AGLC, licensed from BCLC) | PlaySmart (OLG) |
| **Self-exclusion** | Province-wide AGLC program (6mo/1yr/2yr/3yr) | Dual system (OLG My PlayBreak + iGaming site-level) |
| **iGaming market** | Launching mid-2026 (AiGC) | Live since April 2022 (iGO) |
| **Staff certification** | Deal Us In (mandatory, 5-year expiry) | Outcomes-based training (AGCO, no pre-approval since July 2025) |
| **RG Check** | Mandatory for all iGaming operators | Not mandatory (but encouraged) |
| **Sport betting inducements** | Opt-in consent required for inducement marketing | Public advertising of sport betting inducements prohibited |

### Key differences from BC

| Area | Alberta | BC |
|---|---|---|
| **Minimum age** | 18+ | 19+ |
| **Mandatory statement** | None | "Know your limit, play within it." |
| **Helpline** | AHS Addiction Helpline 1-866-332-2322 | Gambling Support BC 1-888-795-6111 |
| **RG program** | GameSense (AGLC, licensed from BCLC) | GameSense (BCLC, originator) |
| **Self-exclusion** | AGLC province-wide (6mo/1yr/2yr/3yr) | Game Break (BCLC province-wide) |
| **Deployment model** | Open competitive market (launching mid-2026) | BCLC monopoly (PlayNow.com) |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Alberta:

```yaml
# --- HELPLINES ---
helplines:
  canada:
    alberta:
      number: "1-866-332-2322"
      website: "www.albertahealthservices.ca"
      label: "Alberta Health Services Addiction Helpline"
      hours: "24/7"

# --- LEGAL ---
legal:
  minimum_gambling_age:
    canada-alberta: 18
```

Note: Alberta has **no mandatory messaging token** -- there is no `messaging.mandatory.canada-alberta` entry because no verbatim statement is required.

Also see the full [Canada config overrides](../_brand-canada.yml) for the complete provincial structure.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Alberta.

### Regulatory
- [ ] Confirmed AGLC as regulator, AiGC as market conductor
- [ ] Understood dual-body model (AGLC regulates + AiGC conducts iGaming market)
- [ ] Identified whether deployment is for land-based, iGaming, or both
- [ ] Verified legal gambling age: 18+ for all products
- [ ] Reviewed permitted products table
- [ ] Reviewed Gaming, Liquor and Cannabis Act and iGaming Alberta Act
- [ ] Tracked iGaming market launch timeline (mid-2026)
- [ ] Achieved RG Check accreditation (mandatory for iGaming operators)

### Helpline
- [ ] AHS Addiction Helpline (1-866-332-2322) displayed prominently
- [ ] GameSense Info Line (1-833-447-7523) referenced where appropriate
- [ ] GameSense website (gamesenseab.ca) linked
- [ ] Responsible gambling information displayed on all platforms

### Messaging
- [ ] Confirmed: no verbatim mandatory statement required in Alberta
- [ ] Responsible gambling message included in all advertising and marketing materials
- [ ] On-brand {{PROGRAM_NAME}} messaging used (not just bare compliance)
- [ ] 18+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Alberta values
- [ ] GameSense acknowledged where content appears at casino/REC venues

### Advertising
- [ ] Advertising reviewed against AGLC iGaming Standards
- [ ] Advertising reviewed against CGA Code for Responsible Gaming Advertising (January 2026)
- [ ] No content targeting or appealing to persons under 18
- [ ] No athlete endorsements except for responsible gambling advocacy
- [ ] Inducement marketing has opt-in consent process with easy withdrawal
- [ ] No misleading claims about odds, winning likelihood, or prize amounts
- [ ] No political event betting promotion
- [ ] Responsible gambling message included in all advertising

### Self-exclusion
- [ ] AGLC Self-Exclusion information available to all patrons (venues)
- [ ] iGaming: API integration with AGLC's centralized Self-Exclusion platform
- [ ] Self-excluded persons removed from all marketing
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language
- [ ] Staff FAQ updated with Alberta self-exclusion Q&A

### Player protection
- [ ] iGaming: deposit limits implemented with daily/weekly/monthly periods
- [ ] iGaming: loss limits implemented
- [ ] iGaming: reality checks available
- [ ] iGaming: voluntary break options available
- [ ] iGaming: quarterly reminders regarding time and financial limits
- [ ] iGaming: monthly reminders to review financial activity statements
- [ ] iGaming: limits offered at account creation
- [ ] Land-based: GameSense information and resources available
- [ ] Land-based: responsible gambling signage posted

### Staff training
- [ ] Land-based: Deal Us In certification for all gaming workers (within 30 days of employment)
- [ ] Land-based: AML certification for applicable staff (2-year validity)
- [ ] iGaming: responsible gambling training for customer-facing staff

### Age verification
- [ ] 18+ age verification at all gambling touchpoints
- [ ] iGaming: identity verification at registration
- [ ] Land-based: ID checks at casino/REC entry

### AML/KYC
- [ ] FINTRAC compliance program in place
- [ ] Large cash transaction reporting for $10,000+
- [ ] Foreign exchange transaction reporting for $3,000+
- [ ] SAR filing procedures operational
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] GameSense compatibility reviewed (casino/REC venues)
- [ ] Staff FAQ updated with Alberta self-exclusion Q&A
- [ ] Conversation scripts updated with helpline references
- [ ] AML/KYC player-facing messaging uses {{PROGRAM_NAME}} voice

### Governance
- [ ] `_brand.yml` updated with Alberta values (helpline, age)
- [ ] `_brand-canada.yml` reviewed
- [ ] `Last verified` date set on this module
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained
- [ ] CSE integration monitoring plan in place (mid-2026)

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [Canada overview](../README.md) | [Canada config overrides](../_brand-canada.yml) | [Messaging Framework -- Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md)*
