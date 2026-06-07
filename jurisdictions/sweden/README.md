---
content_type: jurisdiction-module
title: "Sweden -- Compliance Module"
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
  currency: sek
  sports_culture: european-football
  language: sv
verticals: [interactive]
regulatory_approach: prescriptive
adaptation_status: base
adaptation_notes: |
  Sweden module uses SEK currency context and decimal odds format.
  Swedish is the primary language; the regulator publishes English
  translations of the Gambling Act, the Gambling Ordinance, and key
  guidance. Cultural adaptation needed for the Nordic market (moderate
  humour, direct communication). Spelpaus (national self-exclusion),
  the statutory duty of care (omsorgsplikt), the SEK 10,000/month
  contact threshold, and the first-occasion-only bonus rule are
  Sweden-specific features with no direct equivalents in North American
  markets. Land-based casinos were abolished from 1 January 2026, so the
  regulated market is online gambling and betting; lotteries remain
  regulated but Playbook has no separate lottery vertical.
last_updated: 2026-06-05
---

# Sweden -- Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Sweden. Sweden has a centralized national regulatory model under Spelinspektionen (the Swedish Gambling Authority). Like Denmark, Sweden is not subdivided into sub-jurisdictions for gambling purposes -- all requirements are national. Key distinguishing features: a statutory **duty of care** (omsorgsplikt) requiring continuous monitoring and player contact, the **Spelpaus.se** national multi-operator self-exclusion register, a **mandatory deposit limit** before online play with operator contact triggered above SEK 10,000/month, and a **bonus offer permitted only on the first occasion** a player participates in a game. State land-based casino licensing was abolished from 1 January 2026 (the last Casino Cosmopol closed in April 2025), so the licensed market is online gambling and betting.
>
> **Verticals covered**: Online Casino and Sports Betting. Lotteries are also regulated (state lottery monopoly plus licensed non-profit lotteries), but Playbook has no separate `lottery` vertical -- lottery-specific rules are tagged `online`/`sports`. Land-based casino is no longer a licensable vertical in Sweden.

> **Last verified**: 2026-06-05
> **Next review due**: 2026-09-05 *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | Spelinspektionen, key contacts |
| [Legal requirements](#legal-requirements) | 18+, licensed products, legal framework |
| [Helpline](#helpline) | Stodlinjen details and display rules |
| [Messaging requirements](#messaging-requirements) | Obligation-based requirements |
| [Advertising restrictions](#advertising-restrictions) | Moderation, first-occasion bonus, channel bans |
| [Self-exclusion](#self-exclusion) | Spelpaus national register |
| [Player protection -- interactive](#player-protection----interactive) | Duty of care, deposit limits, monitoring, tools |
| [Age verification](#age-verification) | 18+ requirements |
| [AML/KYC](#amlkyc) | Penningtvattslagen requirements |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Primary regulator** | Spelinspektionen (Swedish Gambling Authority) |
| **Website** | [spelinspektionen.se/en](https://www.spelinspektionen.se/en/) |
| **Governing legislation** | Gambling Act (Spellagen 2018:1138); Gambling Ordinance (Spelforordningen 2018:1475) |
| **Key regulations** | Spelinspektionen's regulations and general guidelines LIFS 2018:2 (on gambling operations and the duty of care); duty-of-care guidance (omsorgsplikt) |
| **Regulatory approach** | Prescriptive, with a principles-based duty-of-care (omsorgsplikt) overlay |
| **Regulatory model** | Mixed -- competitive online gambling and betting licences (re-regulated market since 1 January 2019); retained state monopoly for certain lotteries; B2B game-software supplier authorisation required since 1 July 2023 |
| **Location** | Box 199, 645 23 Strangnas, Sweden |
| **Contact** | registrator@spelinspektionen.se / +46 (0)152-650 100 |

### Regulatory model

Sweden re-regulated its gambling market on **1 January 2019**, moving from a state-dominated monopoly to a **licensed, competitive model** for online gambling (online casino, online bingo) and betting. The system is built around a licence duty: gambling may only be provided by a licence holder, and consumers are steered toward the licensed (channelised) market.

Spelinspektionen is responsible for:

- Licensing and supervision of all gambling operators
- Responsible gambling policy and enforcement, including the statutory duty of care
- Maintaining the **Spelpaus.se** national self-exclusion register
- Authorising B2B game-software suppliers (since 1 July 2023)
- Advertising compliance enforcement (alongside the Consumer Agency / Consumer Ombudsman under the Marketing Act)
- Anti-money-laundering supervision in the gambling sector

There are no sub-national gambling regulators. All requirements apply uniformly across the country.

### Upcoming and recent changes

| Change | Effective date | Impact |
|---|---|---|
| **Land-based casino abolition** | 1 January 2026 | State land-based casino licensing ended; the last Casino Cosmopol closed April 2025. The licensable market is now online gambling and betting. *(Implemented by SFS 2025:291, repealing Spellagen ch. 5 §§ 3-6.)* |
| **B2B software supplier licence** | In force 1 July 2023 | Suppliers of gambling software to licensed operators must hold a Spelinspektionen authorisation |
| **Updated Gambling Act consolidation** | In force (SFS 2024:255) | Latest consolidated amendments to Spellagen 2018:1138 |
| **Updated Gambling Ordinance consolidation** | In force (SFS 2023:310) | Latest consolidated amendments to Spelforordningen 2018:1475 |

> **Primary instrument**: The land-based casino abolition (effective 1 January 2026) is implemented by **SFS 2025:291** (Lag om andring i spellagen (2018:1138)), which repeals Spellagen chapter 5 §§ 3-6; legislative chain prop. 2024/25:73 "Avveckling av statliga kasinon", bet. 2024/25:KrU9, rskr. 2024/25:171 (Riksdag decision 2 April 2025). Note: the AML (penningtvatt) changes in the same reform package took effect 1 July 2025, but the casino-abolition provisions take effect 1 January 2026.

*Source: [Spelinspektionen -- rules and regulation](https://www.spelinspektionen.se/en/rules-and-regulation/eng-spelansvar-omsorgsplikt/)*

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 18+ for all licensed gambling |
| **Legal framework** | Gambling Act (Spellagen 2018:1138), in force since 1 January 2019; Gambling Ordinance (2018:1475); Spelinspektionen regulations LIFS 2018:2 |
| **Online gambling** | Legal and regulated -- competitive licences for online casino, online bingo, and betting |
| **Land-based gambling** | State land-based casino licensing abolished from 1 January 2026. Physical points of sale remain for retail betting and lottery agents. |

### Permitted products table

| Product | Vertical | Legal status | Licence type | Notes |
|---|---|---|---|---|
| Online casino | Interactive | Legal | Commercial online gambling licence (Gambling Act ch.7) | Roulette, blackjack, baccarat, poker, slots, online bingo, combination games |
| Betting (online and retail) | Interactive | Legal | Betting licence (Gambling Act ch.6) | Sports and event betting; offered online and via retail agents |
| Land-based casino | -- | **Abolished** | No longer licensable | State casino licensing ended 1 January 2026; last Casino Cosmopol closed April 2025 |
| State lottery / gaming | Both | Legal (monopoly/public-interest) | Licence reserved for the state and certain public-benefit holders (Gambling Act ch.5-6) | Tagged `online`/`sports` in Playbook -- no separate lottery vertical |
| Non-profit lotteries | Both | Legal (licensed) | Public-benefit lottery licence (Gambling Act ch.6) | For non-profit purposes |
| Gaming software (B2B) | Interactive | Legal (authorised) | Software supplier licence (since 1 July 2023) | Suppliers to licensed operators must be authorised |

### Key legislation

| Legislation | Scope | Relevance to {{PROGRAM_NAME}} |
|---|---|---|
| Gambling Act (Spellagen 2018:1138) | National gambling framework | Core legislation: licence duty, 18+ age limit, duty of care, advertising moderation, self-exclusion, deposit limits, staff training |
| Gambling Ordinance (2018:1475) | Implementing provisions | Detailed rules on deposit limits, self-exclusion mechanics, bonus terms, documentation of RG measures |
| Spelinspektionen regulations LIFS 2018:2 | Operator conduct and duty of care | Operational detail on the duty of care, monitoring, and player-protection measures |
| Duty-of-care guidance (omsorgsplikt) | Regulator guidance | Specifies mandated RG measures including feedback to the player on their gambling behaviour |
| Marketing Act (Marknadsforingslagen 2008:486) | Advertising across all sectors | Consumer-protection overlay on gambling advertising; "moderation" standard; enforced with the Consumer Agency |
| Money Laundering and Terrorist Financing (Prevention) Act (Penningtvattslagen 2017:630) | Anti-money laundering | KYC requirements, suspicious-activity reporting (maps to no Playbook theme) |

*Source: [Spelinspektionen -- the SGA's regulations (LIFS 2018:2)](https://www.spelinspektionen.se/en/rules-and-regulation/the-sgas-regulations/lifs-20182/)*

---

## Helpline

| Field | Value |
|---|---|
| **Name** | Stodlinjen (the National Support Line for problem gambling) |
| **Phone** | 020-81 91 00 |
| **Website** | [stodlinjen.se](https://www.stodlinjen.se) |
| **Languages** | Swedish (with support for callers in other languages) |
| **Cost** | Free |
| **Operated by** | Publicly funded national support line (commissioned via the Public Health Agency of Sweden) |
| **Who can call** | Players, relatives, professionals |

Stodlinjen offers free, confidential counselling by phone and chat, plus a self-test for evaluating gambling habits. It is independent of operators.

### Display rules

Licensees must, in commercial communications (except on radio) and at locations where gambling is provided, state contact information for an organisation that provides information about and support for problem gambling (Gambling Act ch.15 §3). Stodlinjen is the national support line used for this purpose.

For interactive deployments, the support-organisation contact and the link to Spelpaus self-exclusion must be readily accessible across the platform, and players must be informed of the duty-of-care tools.

*Source: [Spelinspektionen -- responsible gambling and duty of care](https://www.spelinspektionen.se/en/rules-and-regulation/eng-spelansvar-omsorgsplikt/)*

### On-brand helpline display

**Bare compliance** (what most operators do):
> "Stodlinjen: 020-81 91 00"

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> "Need to talk? Stodlinjen is free, confidential, and independent. Call 020-81 91 00 or chat at stodlinjen.se."

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Messaging regime summary

Sweden uses an **obligation-based** approach. There is no single verbatim responsible-gambling statement prescribed by law. Instead, operators must communicate specific information in specific contexts, and all marketing is held to a statutory standard of **moderation**.

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| All commercial communications | Obligation-based | Clear minimum-age (18+) information | Gambling Act ch.15 §3 |
| All commercial communications (except radio) | Obligation-based | Contact info for a problem-gambling support organisation (Stodlinjen) | Gambling Act ch.15 §3 |
| All marketing | Standard-based | Moderation; no targeting of under-18s | Gambling Act ch.15 §1 |
| Game information | Obligation-based | Rules and likelihood of winning easily accessible, in Swedish; no false near-win impression | Gambling Act ch.14 §§4-5 |
| Before online play | Standard-based | Mandatory deposit limit must be set | Gambling Act ch.14 §6; Ordinance ch.11 §§3-5 |
| Registration and every login | Standard-based | Spelpaus check; age verification | Gambling Act ch.14 §§3, 11-12 |
| Bonus offers | Standard-based | Bonus only on first occasion of play; terms in clear language; >=60 days to meet conditions | Gambling Act ch.14 §9; Ordinance ch.11 §6 |

**Obligation types explained:**
- **Verbatim** -- exact prescribed text that must appear word-for-word (Sweden has none)
- **Obligation-based** -- must post information meeting a described standard, but no prescribed wording
- **Standard-based** -- must display or enforce specific items (e.g., 18+, deposit limit, Spelpaus, support contact) but surrounding copy is flexible

### Verbatim required statements

None. Sweden does not prescribe verbatim responsible-gambling messages. All requirements are obligation-based or standard-based.

> **Note on "moderation"**: The Gambling Act ch.15 §1 requires that marketing be carried out with **moderation** (Swedish: *mattfullhet*). The stronger phrase "special moderation" is a case-law interpretation developed by the courts, not the literal statutory wording -- keep compliance citations to the statutory word "moderation."

### Obligation-based requirements

| Obligation | What must be communicated | Where | Source |
|---|---|---|---|
| Age limit display | "18+" or equivalent minimum-age notice | All commercial communications | Gambling Act ch.15 §3 |
| Support-organisation contact | Contact details for a problem-gambling support organisation (Stodlinjen) | All commercial communications except radio; at points of sale | Gambling Act ch.15 §3 |
| Game information | Rules and likelihood of winning, easily accessible and in Swedish | On the gambling platform | Gambling Act ch.14 §4 |
| No false near-win | Games must not give a false impression of a near-win; free/trial games must match the real-money game | On the gambling platform | Gambling Act ch.14 §5 |
| Deposit-limit prompt | Player must set a deposit limit before online play | Online platforms | Gambling Act ch.14 §6 |
| Bonus terms | First-occasion-only bonus; clear terms; >=60 days to meet conditions | Alongside any bonus offer | Gambling Act ch.14 §9; Ordinance ch.11 §6 |
| Spelpaus information | Ability to self-exclude via the national register | Platform and marketing | Gambling Act ch.14 §§11-12 |

### On-brand integration

Since Sweden has no verbatim statements, operators have full flexibility to use {{PROGRAM_NAME}} messaging as long as all obligations are met and marketing observes moderation.

**Generic operator approach:**
> "18+ | Spela ansvarsfullt | Stodlinjen 020-81 91 00 | spelpaus.se"

**{{PROGRAM_NAME}} on-brand approach:**
> "18+ only. Set your deposit limit, play your way. Need a break? Register at spelpaus.se -- one stop covers every Swedish-licensed operator. Need to talk? Stodlinjen: 020-81 91 00."

**Rules for on-brand integration:**
1. The 18+ minimum-age notice and a problem-gambling support contact must be present in commercial communications (support contact in all channels except radio)
2. All marketing must observe moderation -- no exaggerated winning chances, no pressure tactics, no targeting under-18s
3. Bonus offers may only be made on the first occasion of play, with terms in clear language and at least 60 days to satisfy conditions
4. Game rules and the likelihood of winning must be accurate and easily accessible
5. Always frame gambling as entertainment, not income, and follow with a helpful action where possible

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

Sweden's advertising framework is governed by two overlapping legal instruments:

1. **Gambling Act (Spellagen 2018:1138) ch.15** -- gambling-specific advertising rules (moderation, age, support contact, self-exclusion protections, sponsorship limits, channel bans)
2. **Marketing Act (Marknadsforingslagen 2008:486)** -- general consumer-protection advertising rules, enforced with the Swedish Consumer Agency / Consumer Ombudsman

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| Moderation | Marketing must be carried out with moderation | Online, Sports | Gambling Act ch.15 §1 |
| Age targeting | Must not be directed at persons under 18 | Online, Sports | Gambling Act ch.15 §1 |
| Minimum-age display | Commercial communications must include clear minimum-age info | Online, Sports | Gambling Act ch.15 §3 |
| Support-contact display | Commercial communications (except radio) must include problem-gambling support contact | Online, Sports | Gambling Act ch.15 §3 |
| Self-excluded players | Marketing must not be directed at self-excluded players or closed accounts without opt-in | Online, Sports | Gambling Act ch.15 §2 |
| First-occasion bonus | Bonus offers only on the first occasion a player participates in a game | Online, Sports | Gambling Act ch.14 §9 |
| Bonus terms | Terms in clear language; at least 60 days to meet conditions | Online, Sports | Ordinance ch.11 §6 |
| Sponsorship | Restrictions on gambling sponsorship | Online, Sports | Gambling Act ch.15 §5 |
| Unlicensed-gambling ads | Ads for unlicensed gambling banned on TV, radio, and video-sharing platforms | Online, Sports | Gambling Act ch.15 §6 |
| Game information | Likelihood of winning must be accurate; no false near-win impression | Online, Sports | Gambling Act ch.14 §§4-5 |

### Channel-specific rules

| Channel | Key restrictions | Verticals | Source |
|---|---|---|---|
| Broadcast (TV) | Moderation; minimum-age + support contact; ads for unlicensed gambling banned | Online, Sports | Gambling Act ch.15 §§1, 3, 6 |
| Radio | Moderation; minimum-age info; support-contact exemption applies to radio; ads for unlicensed gambling banned | Online, Sports | Gambling Act ch.15 §§1, 3, 6 |
| Digital / video-sharing | Moderation; minimum-age + support contact; no targeting under-18s; ads for unlicensed gambling banned on video-sharing platforms | Online, Sports | Gambling Act ch.15 §§1, 3, 6 |
| Direct marketing | Must not be directed at self-excluded players or closed accounts without opt-in | Online, Sports | Gambling Act ch.15 §2 |
| In-venue / point of sale | Minimum-age and support-contact info at points of sale (retail betting, lottery agents) | Sports | Gambling Act ch.14 §3; ch.15 §3 |
| Sponsorship | Restrictions on gambling sponsorship arrangements | Online, Sports | Gambling Act ch.15 §5 |

### Prohibited content

- Marketing directed at persons under 18
- Marketing that fails the moderation standard (pressure tactics, exaggeration)
- Misleading presentation of winning chances; a false impression of a near-win
- Marketing directed at self-excluded players or closed accounts without opt-in
- Bonus offers beyond the first occasion a player participates in a game
- Advertising for unlicensed gambling on TV, radio, or video-sharing platforms

### Required disclosures

All gambling commercial communications must include:
1. **18+** minimum-age information (all channels)
2. **Problem-gambling support contact** (Stodlinjen) -- all channels except radio
3. **Bonus terms** (if a first-occasion bonus is advertised) -- clear language, at least 60 days to meet conditions

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

Sweden operates a **single unified national self-exclusion register (Spelpaus.se)** covering all Swedish-licensed gambling. Because land-based casino licensing was abolished from 1 January 2026, the practical scope is licensed online gambling and betting (including retail betting agents).

### Spelpaus.se -- national self-exclusion register

| Field | Value |
|---|---|
| **Program name** | Spelpaus.se |
| **Duration options** | 1 month, 3 months, 6 months, or indefinite (minimum 12 months before reinstatement can take effect) |
| **Scope** | National -- all Swedish-licensed operators (online gambling and betting); marketing is also blocked |
| **Enrollment method** | Online at [spelpaus.se](https://www.spelpaus.se/?lang=en) using BankID (national electronic identification) |
| **Account action** | Operators must deny access to excluded players and close the account of any indefinitely excluded player |
| **Marketing cessation** | Self-excluded players may not be sent gambling marketing (Gambling Act ch.15 §2) |
| **Minimum exclusion period** | 1 month (fixed-term); indefinite registrations run for at least 12 months |
| **Reinstatement** | Fixed-term exclusions expire automatically. There is no early exit -- an exclusion cannot be lifted before its period ends; indefinite exclusions can be ended after a minimum of 12 months. |
| **Operator obligation** | Must check Spelpaus at registration and at every login; must connect to the national register | 
| **Source** | [Spelpaus.se](https://www.spelpaus.se/?lang=en); Gambling Act ch.14 §§11-12; Ordinance ch.11 §§8-12 |

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your play" | Spelpaus | Never in Tier 1 -- keep it approachable |
| Tier 2 (formal) | "Self-exclusion" | Spelpaus | Legal documents, formal enrollment |
| Marketing | "Register at Spelpaus" | Spelpaus | Required reference in marketing materials |
| Staff training | Both | Spelpaus | When explaining the program's official name |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../collateral/customer-service/staff-faq.md):

> **Q: What is Spelpaus?**
>
> Spelpaus.se is Sweden's national self-exclusion register, administered by Spelinspektionen. Players can exclude themselves for 1, 3, or 6 months, or indefinitely (which runs for at least 12 months), from all Swedish-licensed gambling and betting. Registration is done online with BankID. There is no early exit -- an exclusion runs its full term. During exclusion, players cannot access any licensed platform and may not be sent gambling marketing. Operators must check Spelpaus at registration and at every login. If a player asks about it, explain the options and offer to help them get started. Use "take a break" in casual conversation, "Spelpaus" when referring to the specific program.

---

## Player protection -- interactive

> Sweden's player-protection regime centres on the statutory **duty of care (omsorgsplikt)**: the operator must protect players from excessive gambling, continuously monitor gambling behaviour, act on signs of problem gambling, and document its measures. This is the single most important obligation in the module.

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Duty of care (omsorgsplikt) | Yes (statutory) | Operator must counteract excessive gambling through continuous monitoring and a documented action plan; contact players where problem gambling is identified or suspected | Gambling Act ch.14 §1; Ordinance ch.11 §§1-2; LIFS 2018:2 |
| Deposit limits | Yes (mandatory) | Player MUST set a deposit limit before online play (a loss limit for token machines). Limits by day, week, and month. | Gambling Act ch.14 §6; Ordinance ch.11 §§3-5 |
| Limit-change timing | Yes | Increases take effect after 72 hours; decreases take effect immediately | Ordinance ch.11 §§3-5 |
| SEK 10,000 contact trigger | Yes | Operator must contact any player who raises a limit or sets a deposit limit above SEK 10,000 per month | Gambling Act ch.14 §7; Ordinance ch.11 §§3-5 |
| Login-time limit | Yes (offer) | An optional login-time (session) limit must be offered to the player | Ordinance ch.11 §§3-5 |
| Stake confirmation | Yes | Players must actively confirm stakes | Gambling Act ch.14 §6 |
| Self-exclusion (Spelpaus) | Yes | Must offer self-exclusion, including an immediate 24-hour option for online casino, online bingo, and computer-simulated machines; link to and check the national Spelpaus register at registration and every login | Gambling Act ch.14 §§11-12; Ordinance ch.11 §§8-12 |
| Behavioural monitoring | Yes | Continuous monitoring of gambling behaviour to detect signs of problem gambling | Gambling Act ch.14 §1; LIFS 2018:2 |
| Player feedback | Yes | Provide the player with feedback on their own gambling behaviour (mandated measure under SGA duty-of-care guidance) | Duty-of-care guidance |
| Activity statements / game history | Yes | Players must be able to access their gambling and transaction history | Ordinance ch.11 §§1-2 |
| Bonus restrictions | Yes | Bonus only on the first occasion of play; clear terms; >=60 days to meet conditions | Gambling Act ch.14 §9; Ordinance ch.11 §6 |
| Documentation | Yes | Document all responsible-gambling measures and player contacts | Ordinance ch.11 §§1-2; LIFS 2018:2 |

### {{PROGRAM_NAME}} tool messaging -- interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit -- it's required before you start, and it keeps you in control. Daily, weekly, or monthly -- your call." | Registration flow |
| Limit change | "Lowering a limit? It takes effect right away. Raising one? There's a 72-hour wait -- a built-in moment to think it over." | Account settings |
| SEK 10,000 contact | "Set a high monthly limit and you'll hear from us -- a quick check-in is part of how Sweden keeps play healthy." | Account settings, contact script |
| Login-time limit | "Set a session reminder -- your dashboard, your rules." | Account settings |
| Spelpaus | "Need a break? Register at spelpaus.se -- one stop covers every Swedish-licensed operator. There's an instant 24-hour pause for online casino and bingo, too." | RG page, account settings |
| Stodlinjen | "Need to talk? Stodlinjen is free, confidential, and independent. Call 020-81 91 00 or chat at stodlinjen.se." | RG page, support section |
| Activity statement | "See your full play history -- deposits, withdrawals, and game activity. No surprises." | Account dashboard |
| Player feedback | "Here's a clear picture of how you've been playing lately -- because informed play is better play." | Dashboard, periodic summary |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 18+ for all licensed gambling |
| **`_brand.yml` key** | `legal.minimum_gambling_age.sweden` |
| **`{{MIN_AGE}}` token value** | 18 |
| **Statutory basis** | Gambling Act (Spellagen 2018:1138) ch.14 §§2-3 |

### Interactive verification

| Requirement | Details | Source |
|---|---|---|
| **Registration requirements** | Player identity and age must be verifiable; games must be provided so that the player's age can be verified | Gambling Act ch.14 §§2-3 |
| **Verification method** | BankID (national electronic identification) or equivalent identity verification | Gambling Act ch.14 §3 (practice) |
| **Age-limit display** | The age limit must be clearly stated where the game is offered | Gambling Act ch.14 §3 |
| **Commercial communications** | Clear minimum-age information required | Gambling Act ch.15 §3 |

### Age messaging

All collateral in this jurisdiction must display the 18+ age notice:

> "You must be 18+ to gamble."

This is required in all commercial communications per the Gambling Act ch.15 §3.

---

## AML/KYC

| Requirement | Value |
|---|---|
| **AML authority** | Spelinspektionen (gambling-sector supervisor) |
| **Primary legislation** | Money Laundering and Terrorist Financing (Prevention) Act (Penningtvattslagen 2017:630) |
| **KYC requirements** | Identity verification at account creation; ongoing customer due diligence |
| **Risk assessment** | General risk assessment required based on the operator's business model |
| **Suspicious activity reporting** | Report to the Swedish Police Financial Intelligence Unit |
| **Player-facing impact** | Identity verification at registration; source-of-funds checks for unusual activity |

> AML obligations map to no Playbook theme; they are noted here for completeness. The basis is Penningtvattslagen 2017:630.

### Player-facing messaging

When AML/KYC processes affect players (identity verification, source-of-funds checks), use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity."

**On-brand:**
> "Quick ID check -- it keeps your account secure and is required for all players in Sweden."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Sweden-specific adaptations. Land-based casino is no longer a licensable vertical, so venue/in-casino touchpoints apply only to remaining retail betting and lottery points of sale.

| Category | Collateral | Verticals | Adaptation required | Token |
|---|---|---|---|---|
| **Digital** | Website | Interactive | Stodlinjen support contact, Spelpaus link, 18+, Swedish language, accurate odds | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Digital** | Wagering account / app | Interactive | Mandatory deposit-limit prompt at registration; Spelpaus check at registration and every login; duty-of-care monitoring; SEK 10,000 contact | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email templates | Interactive | Stodlinjen + Spelpaus in footer; 18+; no marketing to self-excluded players | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media | Interactive | 18+ in all posts; Stodlinjen and Spelpaus references; moderation; no under-18 targeting | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Print** | Brochure | Interactive | Stodlinjen support contact, Spelpaus info, 18+ notice, SEK currency | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Print** | Rack card | Sports (retail) | Stodlinjen prominent; 18+; Spelpaus reference | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | Interactive | Stodlinjen as primary support line | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Point-of-sale signage | Sports (retail) | 18+ age notice; Stodlinjen support contact at retail betting / lottery agents | `{{MIN_AGE}}` |
| **Environmental** | Digital display | Sports (retail) | Stodlinjen in rotation; Spelpaus info | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot | Interactive | Stodlinjen + 18+ in end card; moderation; no unlicensed-gambling promotion | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Video/Audio** | Radio spot | Interactive | 18+ read in every spot; support-contact exemption applies to radio; moderation | `{{MIN_AGE}}` |
| **Video/Audio** | Pre-roll | Interactive | Stodlinjen overlay; 18+; Spelpaus; no unlicensed-gambling promotion on video-sharing platforms | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |
| **Customer service** | Conversation scripts | Interactive | Stodlinjen referral; Spelpaus enrollment; SEK 10,000 contact script; duty-of-care contact | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Interactive | Spelpaus Q&A; Stodlinjen Q&A; deposit-limit and duty-of-care Q&A | -- |

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` (or see [`_brand-sweden.yml`](_brand-sweden.yml) for ready-to-paste values):

```yaml
# --- HELPLINES ---------------------------------
helplines:
  sweden:
    number: "020-81 91 00"
    website: "https://www.stodlinjen.se"
    label: "Stodlinjen"
    languages:
      - Swedish

# --- LEGAL -------------------------------------
legal:
  minimum_gambling_age:
    sweden: 18

# --- MESSAGING ---------------------------------
messaging:
  mandatory:
    # sweden: No verbatim mandatory statement.
    # Obligation-based: commercial communications must include 18+ and a
    # problem-gambling support contact (Stodlinjen) in all channels except
    # radio. Marketing must observe moderation. See compliance module.
    sweden-deposit-limit: "Du maste satta en insattningsgrans innan du kan spela."
    # Translation: "You must set a deposit limit before you can play."

# --- SELF-EXCLUSION ----------------------------
self_exclusion:
  sweden:
    program_name: "Spelpaus"
    url: "https://www.spelpaus.se"
    durations: "1 month, 3 months, 6 months, indefinite (min 12 months)"
    scope: "All Swedish-licensed operators (online gambling and betting); blocks marketing"
```

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Sweden.

### Regulatory
- [ ] Identified Spelinspektionen as primary regulator
- [ ] Confirmed licence type and status for chosen verticals (online gambling and/or betting)
- [ ] Verified legal gambling age: 18+
- [ ] Reviewed permitted products table
- [ ] Confirmed land-based casino is no longer a licensable vertical (verify amending instrument)
- [ ] Identified deployment verticals: [ ] Online Casino [ ] Sports Betting

### Messaging
- [ ] 18+ minimum-age information in all commercial communications
- [ ] Problem-gambling support contact (Stodlinjen 020-81 91 00) in all channels except radio
- [ ] Marketing observes the statutory moderation standard
- [ ] Game rules and likelihood of winning accurate and easily accessible, in Swedish
- [ ] No false near-win impression; free/trial games match the real-money game
- [ ] Bonus offers limited to the first occasion of play, with clear terms and >=60 days to meet conditions
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Sweden values

### Advertising
- [ ] No under-18 targeting
- [ ] No marketing directed at self-excluded players or closed accounts without opt-in
- [ ] No promotion of unlicensed gambling on TV, radio, or video-sharing platforms
- [ ] Sponsorship arrangements reviewed against ch.15 §5 restrictions
- [ ] Required disclosures (18+, support contact) present per channel

### Self-exclusion
- [ ] Spelpaus integration implemented -- checks at registration and at every login
- [ ] Immediate 24-hour self-exclusion option offered for online casino, online bingo, and computer-simulated machines
- [ ] Indefinitely excluded players' accounts closed; access denied to all excluded players
- [ ] No marketing sent to self-excluded players
- [ ] No early exit offered (exclusions run their full term; indefinite runs min 12 months)
- [ ] Staff trained on Spelpaus enrollment
- [ ] Spelpaus language mapped to {{PROGRAM_NAME}} tiers

### Player protection -- interactive
- [ ] Duty of care (omsorgsplikt) implemented: continuous monitoring + documented action plan
- [ ] Mandatory deposit limit before play (daily, weekly, monthly)
- [ ] Limit-change timing enforced (increase +72h, decrease immediate)
- [ ] SEK 10,000/month contact trigger implemented (raise a limit or set deposit limit above SEK 10,000)
- [ ] Optional login-time (session) limit offered
- [ ] Active stake confirmation enforced
- [ ] Player feedback on gambling behaviour provided
- [ ] Account statements / game history accessible to players
- [ ] All responsible-gambling measures and player contacts documented

### Age verification
- [ ] Player age verifiable at registration (BankID or equivalent)
- [ ] Age limit clearly stated where the game is offered

### AML/KYC
- [ ] Identity verification at account creation (Penningtvattslagen 2017:630)
- [ ] Customer due diligence and suspicious-activity reporting procedures in place

### Content
- [ ] All collateral adapted per collateral adaptation table
- [ ] Staff FAQ updated with Spelpaus, Stodlinjen, deposit-limit, and duty-of-care Q&As
- [ ] Conversation scripts updated with Sweden-specific references (including SEK 10,000 contact)
- [ ] Currency adapted to SEK where relevant
- [ ] Odds format adapted to decimal where relevant

### Governance
- [ ] `_brand.yml` updated with Sweden values (or `_brand-sweden.yml` merged)
- [ ] `Last verified` date set
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [`_brand-sweden.yml`](_brand-sweden.yml) | [Advertising Rules](advertising-rules.md) | [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../collateral/customer-service/staff-faq.md) | [Governance](../../brand-book/08-governance.md) | [Jurisdictions README](../README.md)*
