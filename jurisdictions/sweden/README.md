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
  markets. The standards layer beneath the Act is load-bearing for
  online verticals: LIFS 2018:5 (commercial online gambling and betting)
  imposes an always-on risk/helpline display duty; KOVFS 2025:2 is the
  current controlling marketing standard codifying "special moderation";
  the SGA duty-of-care guidance and the SPER/BOS self-regulatory codes
  round out the practice standards. Land-based casinos were abolished
  from 1 January 2026, so the regulated market is online gambling and
  betting; lotteries remain regulated but Playbook has no separate
  lottery vertical.
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
| **Key regulations** | Spelinspektionen's regulations and general guidelines: LIFS 2018:2 (gambling operations and the duty of care); **LIFS 2018:5** (commercial online gambling and betting -- the operative regulation for online verticals); LIFS 2018:3 (exemptions from the registration/self-exclusion requirement). Guidance: duty of care (omsorgsplikt). Marketing standard: **KOVFS 2025:2** (Consumer Agency general guidelines on gambling marketing) |
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
| Spelinspektionen regulations **LIFS 2018:5** | Commercial online gambling and betting | **The operative regulation for {{PROGRAM_NAME}}'s online verticals.** Adds, beyond the Act: an always-on duty to keep the risks of gambling and an independent helpline contact (Stodlinjen) readily accessible, prominently displayed on the start page alongside the SGA logo and link; betting-agent RG knowledge; self-exclusion across all of a player's accounts at the licensee |
| Spelinspektionen regulations LIFS 2018:3 | Exemptions from registration/self-exclusion | Defines the practical scope of the Spelpaus duty by listing game categories exempt from the mandatory player-registration requirement |
| Duty-of-care guidance (Vagledning omsorgsplikt) | Regulator guidance | Discretely cited instrument: analyse player profiles, give the player feedback on their gambling behaviour, apply access restrictions, follow up on whether measures worked, maintain a living action plan disseminated across the organisation |
| Marketing Act (Marknadsforingslagen 2008:486) | Advertising across all sectors | Consumer-protection overlay on gambling advertising; the "moderation" standard; enforced with the Consumer Agency |
| Consumer Agency guidelines **KOVFS 2025:2** | Marketing of gambling to consumers | **The current controlling marketing standard** (decided 23 June 2025, in force 1 September 2025). Codifies the "special moderation" treatment and sets concrete do/don'ts (no intrusive formats, no easy/guaranteed-win impressions, bonus-term placement, support-organisation web/email/phone) |
| Industry self-regulatory codes | Standards of practice | SPER/BOS marketing guidelines and the BOS Code of Conduct ("Standard for sustainable gambling"); enforced via SPER/BOS, the Consumer Ombudsman, Spelinspektionen, and Reklamombudsmannen (RO) |
| Money Laundering and Terrorist Financing (Prevention) Act (Penningtvattslagen 2017:630) | Anti-money laundering | KYC requirements, suspicious-activity reporting (maps to no Playbook theme) |

*Sources: [Spelinspektionen -- the SGA's regulations (LIFS 2018:2)](https://www.spelinspektionen.se/en/rules-and-regulation/the-sgas-regulations/lifs-20182/); [LIFS 2018:5 -- commercial online gambling and betting](https://www.spelinspektionen.se/lagar-regler/foreskrifter/lifs-20185/) ([EN regulations index](https://www.spelinspektionen.se/en/rules-and-regulation/sga-regulations-english/)); [LIFS 2018:3 -- exemptions from the registration requirement](https://lagen.nu/lifs/2018:3); [KOVFS 2025:2 -- Consumer Agency gambling-marketing guidelines](https://publikationer.konsumentverket.se/produkter-och-tjanster/ovriga-omraden/kovfs-20252-konsumentverkets-allmanna-rad-om-marknadsforing-av-spel)*

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

The helpline obligation comes from two layers, not one:

- **Gambling Act ch.15 §3 (advertising layer)**: in commercial communications (except on radio) and at locations where gambling is provided, licensees must state contact information for an organisation that provides information about and support for problem gambling. Stodlinjen is the national support line used for this purpose.
- **LIFS 2018:5 (always-on platform layer, online verticals)**: separate from the ad rules, the operator must keep **readily accessible where it offers gambling** both (a) the risks of gambling for money and (b) contact details for a gambling-problem helpline that is independent of the operator and suited to Swedish conditions -- the general guideline names **Stodlinjen** (§7). The operator's identity and the helpline contact must be **prominently displayed on the start/home page**, alongside the SGA logo and a link to Spelinspektionen (§8). Section 7 also requires the licence period, a statement that Spelinspektionen is the supervisory authority, and the stake/participation cost to be kept accessible.

So for interactive deployments the helpline contact and risk information are an **always-on platform duty**, not just an ad disclosure: the support-organisation contact and the link to Spelpaus self-exclusion must be readily accessible across the platform (prominently on the start page), and players must be informed of the duty-of-care tools.

> **Not just a name**: under **KOVFS 2025:2 §4.1.1**, naming the support organisation alone is insufficient -- a **web address, email, or phone number** for it must also be shown. "Stodlinjen" on its own does not satisfy the disclosure; "Stodlinjen 020-81 91 00 / stodlinjen.se" does.

*Sources: [Spelinspektionen -- responsible gambling and duty of care](https://www.spelinspektionen.se/en/rules-and-regulation/eng-spelansvar-omsorgsplikt/); [LIFS 2018:5 -- commercial online gambling and betting](https://www.spelinspektionen.se/lagar-regler/foreskrifter/lifs-20185/); [KOVFS 2025:2](https://publikationer.konsumentverket.se/produkter-och-tjanster/ovriga-omraden/kovfs-20252-konsumentverkets-allmanna-rad-om-marknadsforing-av-spel)*

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
| All commercial communications (except radio) | Obligation-based | Contact info for a problem-gambling support organisation (Stodlinjen) -- naming it is not enough; show a web address, email, or phone number too | Gambling Act ch.15 §3; KOVFS 2025:2 §4.1.1 |
| All marketing | Standard-based | Moderation (codified do/don'ts); no targeting of under-18s | Gambling Act ch.15 §1; KOVFS 2025:2 |
| Online platform (always on) | Obligation-based | Risks of gambling and an independent helpline contact (Stodlinjen) readily accessible; operator identity + helpline prominently on the start page with the SGA logo and link | LIFS 2018:5 §§7-8 |
| Game information | Obligation-based | Rules and likelihood of winning easily accessible, in Swedish; no false near-win impression | Gambling Act ch.14 §§4-5 |
| Before online play | Standard-based | Mandatory deposit limit must be set | Gambling Act ch.14 §7; Ordinance ch.11 §§3-5 |
| Registration and every login | Standard-based | Spelpaus check; age verification | Gambling Act ch.14 §§3, 11-12 |
| Bonus offers | Standard-based | Bonus only on first occasion of play; terms in clear language within one click; >=60 days to meet conditions | Gambling Act ch.14 §9; Ordinance ch.11 §6; KOVFS 2025:2 |

**Obligation types explained:**
- **Verbatim** -- exact prescribed text that must appear word-for-word (Sweden has none)
- **Obligation-based** -- must post information meeting a described standard, but no prescribed wording
- **Standard-based** -- must display or enforce specific items (e.g., 18+, deposit limit, Spelpaus, support contact) but surrounding copy is flexible

### Verbatim required statements

None. Sweden does not prescribe verbatim responsible-gambling messages. All requirements are obligation-based or standard-based.

> **Note on "moderation"**: The Gambling Act ch.15 §1 requires that marketing be carried out with **moderation** (Swedish: *mattfullhet*). The stronger phrase "special moderation" (*sarskild mattfullhet*) began as a case-law interpretation, but it is no longer *merely* case-law: it is now **codified by KOVFS 2025:2** (the Consumer Agency's general guidelines on gambling marketing, in force 1 September 2025), which translates the standard into concrete do/don'ts. Cite the statutory word "moderation" (ch.15 §1) for the duty, and KOVFS 2025:2 for the operative detail.

### Obligation-based requirements

| Obligation | What must be communicated | Where | Source |
|---|---|---|---|
| Age limit display | "18+" or equivalent minimum-age notice | All commercial communications | Gambling Act ch.15 §3 |
| Support-organisation contact | Contact details for a problem-gambling support organisation (Stodlinjen). Naming the organisation is not enough -- a web address, email, or phone number must also be shown | All commercial communications except radio; at points of sale | Gambling Act ch.15 §3; KOVFS 2025:2 §4.1.1 |
| Start-page risk + helpline display | The risks of gambling and an independent helpline contact (Stodlinjen) kept readily accessible; operator identity + helpline prominently on the start page, with the SGA logo and a link to Spelinspektionen; licence period, that Spelinspektionen is the authority, and stake/participation cost also accessible | On the online platform (always on) | LIFS 2018:5 §§7-8 |
| Game information | Rules and likelihood of winning, easily accessible and in Swedish | On the gambling platform | Gambling Act ch.14 §4 |
| No false near-win | Games must not give a false impression of a near-win; free/trial games must match the real-money game | On the gambling platform | Gambling Act ch.14 §5 |
| Deposit-limit prompt | Player must set a deposit limit before online play | Online platforms | Gambling Act ch.14 §7 |
| Bonus terms | First-occasion-only bonus; clear terms; >=60 days to meet conditions | Alongside any bonus offer | Gambling Act ch.14 §9; Ordinance ch.11 §6 |
| Spelpaus information | Ability to self-exclude via the national register | Platform and marketing | Gambling Act ch.14 §§11-12 |

### On-brand integration

Since Sweden has no verbatim statements, operators have full flexibility to use {{PROGRAM_NAME}} messaging as long as all obligations are met and marketing observes moderation.

**Generic operator approach:**
> "18+ | Spela ansvarsfullt | Stodlinjen 020-81 91 00 | spelpaus.se"

**{{PROGRAM_NAME}} on-brand approach:**
> "18+ only. Set your deposit limit, play your way. Need a break? Register at spelpaus.se -- one stop covers every Swedish-licensed operator. Need to talk? Stodlinjen: 020-81 91 00."

**Rules for on-brand integration:**
1. The 18+ minimum-age notice and a problem-gambling support contact must be present in commercial communications (support contact in all channels except radio). Per KOVFS 2025:2 §4.1.1, the support contact must include a web address, email, or phone number -- not just the organisation's name
2. On online platforms, keep the risks of gambling and the helpline contact (Stodlinjen) readily accessible at all times, with operator identity and the helpline prominent on the start page (LIFS 2018:5 §§7-8) -- this is an always-on duty, separate from the ad disclosures
3. All marketing must observe moderation as codified by KOVFS 2025:2 -- no intrusive formats (pop-ups, full-screen takeovers, pulsing/blinking), no "easy/fast to win" or guaranteed-win impressions, no celebrity success attributed to gambling, no suggestion that gambling solves social or financial problems, no targeting under-18s
4. Bonus offers may only be made on the first occasion of play, with terms in clear language and at least 60 days to satisfy conditions; bonus terms (with wagering/stake/time conditions and "new players only") must sit within one click of the ad and up front (KOVFS 2025:2)
5. Game rules and the likelihood of winning must be accurate and easily accessible
6. Always frame gambling as entertainment, not income, and follow with a helpful action where possible

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

Sweden's advertising framework is governed by overlapping legal instruments plus a self-regulatory layer:

1. **Gambling Act (Spellagen 2018:1138) ch.15** -- gambling-specific advertising rules (moderation, age, support contact, self-exclusion protections, sponsorship limits, channel bans)
2. **Marketing Act (Marknadsforingslagen 2008:486)** -- general consumer-protection advertising rules, enforced with the Swedish Consumer Agency / Consumer Ombudsman
3. **Consumer Agency guidelines KOVFS 2025:2** -- the current controlling marketing standard (in force 1 September 2025): it codifies "special moderation" into concrete do/don'ts and sets the support-contact and bonus-term display rules
4. **Industry self-regulatory codes** -- the SPER/BOS marketing guidelines and the BOS Code of Conduct, enforced via SPER/BOS, the Consumer Ombudsman, Spelinspektionen, and Reklamombudsmannen (RO)

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| Moderation | Marketing must be carried out with moderation, as codified into concrete do/don'ts | Online, Sports | Gambling Act ch.15 §1; KOVFS 2025:2 |
| No intrusive formats | No pop-ups, full-screen takeovers, or pulsing/blinking creative | Online, Sports | KOVFS 2025:2 |
| No win-ease impression | No "easy/fast to win" or guaranteed-win impressions; celebrities must not imply gambling caused their success | Online, Sports | KOVFS 2025:2 |
| No problem-solving framing | Must not present gambling as a solution to social or financial problems | Online, Sports | KOVFS 2025:2 |
| Age targeting | Must not be directed at persons under 18 | Online, Sports | Gambling Act ch.15 §1 |
| Minimum-age display | Commercial communications must include clear minimum-age info | Online, Sports | Gambling Act ch.15 §3 |
| Support-contact display | Commercial communications (except radio) must include a problem-gambling support contact -- with a web address, email, or phone number, not just the organisation's name | Online, Sports | Gambling Act ch.15 §3; KOVFS 2025:2 §4.1.1 |
| Self-excluded players | Marketing must not be directed at self-excluded players or closed accounts without opt-in | Online, Sports | Gambling Act ch.15 §2 |
| First-occasion bonus | Bonus offers only on the first occasion a player participates in a game | Online, Sports | Gambling Act ch.14 §9 |
| Bonus terms | Terms in clear language within one click of the ad, with wagering/stake/time conditions and "new players only" up front; at least 60 days to meet conditions | Online, Sports | Ordinance ch.11 §6; KOVFS 2025:2 |
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
- Intrusive formats -- pop-ups, full-screen takeovers, pulsing or blinking creative (KOVFS 2025:2)
- "Easy/fast to win" or guaranteed-win impressions; celebrities implying gambling caused their success (KOVFS 2025:2)
- Presenting gambling as a solution to social or financial problems (KOVFS 2025:2)
- Misleading presentation of winning chances; a false impression of a near-win
- Marketing directed at self-excluded players or closed accounts without opt-in
- Bonus offers beyond the first occasion a player participates in a game
- Advertising for unlicensed gambling on TV, radio, or video-sharing platforms

### Required disclosures

All gambling commercial communications must include:
1. **18+** minimum-age information (all channels)
2. **Problem-gambling support contact** (Stodlinjen) -- all channels except radio; show a web address, email, or phone number, not just the name (KOVFS 2025:2 §4.1.1)
3. **Bonus terms** (if a first-occasion bonus is advertised) -- within one click of the ad, with wagering/stake/time conditions and "new players only" up front; clear language; at least 60 days to meet conditions

### Self-regulatory codes

Beyond the legal layer, the industry maintains codes treated as standards of practice:

- **SPER/BOS marketing guidelines** -- moderation, no targeting of minors, responsible sponsorship, problem-gambling information, consent/unsubscribe for direct marketing, and affiliate accountability; enforced via SPER/BOS, the Consumer Ombudsman, Spelinspektionen, and **Reklamombudsmannen (RO)** as the advertising self-regulation enforcer.
- **BOS Code of Conduct ("Standard for sustainable gambling")** -- a named compliance owner, annual staff education, and management reporting.

For a detailed advertising reference, including the full KOVFS 2025:2 do/don'ts and the self-regulatory codes, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

Sweden operates a **single unified national self-exclusion register (Spelpaus.se)** covering all Swedish-licensed gambling. Because land-based casino licensing was abolished from 1 January 2026, the practical scope is licensed online gambling and betting (including retail betting agents).

### Spelpaus.se -- national self-exclusion register

| Field | Value |
|---|---|
| **Program name** | Spelpaus.se |
| **Duration options** | 1 month, 3 months, 6 months, or indefinite (minimum 12 months before reinstatement can take effect) |
| **Scope** | National -- all Swedish-licensed operators (online gambling and betting); marketing is also blocked. At a single licensee, the exclusion must cover all of the player's accounts and games (LIFS 2018:5 §4(2)). The practical reach of the underlying registration duty is bounded by LIFS 2018:3, which exempts certain game categories from mandatory registration |
| **Enrollment method** | Online at [spelpaus.se](https://www.spelpaus.se/?lang=en) using BankID (national electronic identification) |
| **Account action** | Operators must deny access to excluded players and close the account of any indefinitely excluded player |
| **Marketing cessation** | Self-excluded players may not be sent gambling marketing (Gambling Act ch.15 §2) |
| **Minimum exclusion period** | 1 month (fixed-term); indefinite registrations run for at least 12 months |
| **Reinstatement** | Fixed-term exclusions expire automatically. There is no early exit -- an exclusion cannot be lifted before its period ends; indefinite exclusions can be ended after a minimum of 12 months. |
| **Operator obligation** | Must check Spelpaus at registration and at every login; must connect to the national register | 
| **Source** | [Spelpaus.se](https://www.spelpaus.se/?lang=en); Gambling Act ch.14 §§11-12; Ordinance ch.11 §§8-12; [LIFS 2018:5 §4(2)](https://www.spelinspektionen.se/lagar-regler/foreskrifter/lifs-20185/); [LIFS 2018:3 -- registration exemptions](https://lagen.nu/lifs/2018:3) |

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
| Duty of care (omsorgsplikt) | Yes (statutory) | Operator must counteract excessive gambling through continuous monitoring and a documented action plan; contact players where problem gambling is identified or suspected. The SGA **duty-of-care guidance** sets out the operative steps: analyse player profiles (behaviour, pattern, contacts), give the player feedback on their gambling behaviour, apply restrictions/access limitations, follow up on whether the measures worked, and maintain a living action plan disseminated across the organisation | Gambling Act ch.14 §1; Ordinance ch.11 §§1-2; LIFS 2018:2; duty-of-care guidance |
| Deposit limits | Yes (mandatory) | Player MUST set a deposit limit before online play (a loss limit for token machines). Limits by day, week, and month. | Gambling Act ch.14 §7; Ordinance ch.11 §§3-5 |
| Limit-change timing | Yes | Increases take effect after 72 hours; decreases take effect immediately | Ordinance ch.11 §§3-5 |
| SEK 10,000 contact trigger | Yes | Operator must contact any player who raises a limit or sets a deposit limit above SEK 10,000 per month | Ordinance ch.11 §5 (duty of care, Gambling Act ch.14 §1) |
| Login-time limit | Yes (offer) | An optional login-time (session) limit must be offered to the player | Ordinance ch.11 §§3-5 |
| Stake confirmation | Yes | Players must actively confirm stakes | Gambling Act ch.14 §6 |
| Self-exclusion (Spelpaus) | Yes | Must offer self-exclusion, including an immediate 24-hour option for online casino, online bingo, and computer-simulated machines; link to and check the national Spelpaus register at registration and every login. Self-exclusion must cover **all of a player's accounts and games at the licensee**, not just one product | Gambling Act ch.14 §§11-12; Ordinance ch.11 §§8-12; LIFS 2018:5 §4(2) |
| Always-on risk + helpline display | Yes | Keep the risks of gambling and an independent helpline contact (Stodlinjen) readily accessible; show operator identity and the helpline prominently on the start page, with the SGA logo and a link to Spelinspektionen | LIFS 2018:5 §§7-8 |
| Betting agents (spelombud) | Yes (if used) | Betting agents must know the relevant RG rules: 18+, the credit ban, and where players get help with the self-test and self-exclusion | LIFS 2018:5 §12 |
| Behavioural monitoring | Yes | Continuous monitoring of gambling behaviour to detect signs of problem gambling; analyse player profiles (behaviour, pattern, contacts) per the SGA duty-of-care guidance | Gambling Act ch.14 §1; LIFS 2018:2; duty-of-care guidance |
| Player feedback | Yes | Provide the player with feedback on their own gambling behaviour (mandated measure under the SGA duty-of-care guidance) | Duty-of-care guidance |
| Restrictions and follow-up | Yes | Apply restrictions/access limitations where indicated, follow up on whether the measures worked, and maintain a living action plan disseminated across the organisation | Duty-of-care guidance |
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
- [ ] Problem-gambling support contact (Stodlinjen 020-81 91 00) in all channels except radio -- shown with a web address, email, or phone number, not just the name (KOVFS 2025:2 §4.1.1)
- [ ] Always-on online display: risks of gambling + Stodlinjen contact readily accessible; operator identity + helpline prominent on the start page with the SGA logo and link (LIFS 2018:5 §§7-8)
- [ ] Marketing observes the moderation standard as codified by KOVFS 2025:2
- [ ] Game rules and likelihood of winning accurate and easily accessible, in Swedish
- [ ] No false near-win impression; free/trial games match the real-money game
- [ ] Bonus offers limited to the first occasion of play, with clear terms and >=60 days to meet conditions
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Sweden values

### Advertising
- [ ] No under-18 targeting
- [ ] No intrusive formats (pop-ups, full-screen takeovers, pulsing/blinking) (KOVFS 2025:2)
- [ ] No "easy/fast to win" or guaranteed-win impressions; no celebrity success attributed to gambling (KOVFS 2025:2)
- [ ] No framing of gambling as a solution to social or financial problems (KOVFS 2025:2)
- [ ] No marketing directed at self-excluded players or closed accounts without opt-in
- [ ] No promotion of unlicensed gambling on TV, radio, or video-sharing platforms
- [ ] Sponsorship arrangements reviewed against ch.15 §5 restrictions
- [ ] Bonus terms within one click of the ad, with wagering/stake/time conditions and "new players only" up front (KOVFS 2025:2)
- [ ] Required disclosures (18+, support contact with a web/email/phone reference) present per channel
- [ ] Reviewed against the SPER/BOS marketing guidelines and the BOS Code of Conduct (self-regulatory)

### Self-exclusion
- [ ] Spelpaus integration implemented -- checks at registration and at every login
- [ ] Immediate 24-hour self-exclusion option offered for online casino, online bingo, and computer-simulated machines
- [ ] Self-exclusion covers all of a player's accounts and games at the licensee (LIFS 2018:5 §4(2))
- [ ] Indefinitely excluded players' accounts closed; access denied to all excluded players
- [ ] No marketing sent to self-excluded players
- [ ] No early exit offered (exclusions run their full term; indefinite runs min 12 months)
- [ ] Staff trained on Spelpaus enrollment
- [ ] Spelpaus language mapped to {{PROGRAM_NAME}} tiers

### Player protection -- interactive
- [ ] Duty of care (omsorgsplikt) implemented: continuous monitoring + documented action plan
- [ ] Duty-of-care guidance steps applied: player-profile analysis, player feedback, access restrictions, follow-up on effectiveness, living action plan disseminated across the organisation
- [ ] Always-on risk + helpline display on the platform (LIFS 2018:5 §§7-8)
- [ ] Betting agents (if used) trained on 18+, the credit ban, and where players get help with the self-test and self-exclusion (LIFS 2018:5 §12)
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
