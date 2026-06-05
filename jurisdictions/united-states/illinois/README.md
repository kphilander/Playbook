---
content_type: jurisdiction-module
title: "Illinois — Compliance Module"
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
  Illinois module is written for the US market (peer/individual/irreverent/
  blunt/open). Currency is USD. Illinois has three legal verticals —
  land-based casinos, sports wagering (retail and online), and video gaming
  terminals (VGTs) — but NO legal online casino. Casino rules live in
  86 Ill. Adm. Code 3000; sports wagering in 11 Ill. Adm. Code 1900; video
  gaming in 11 Ill. Adm. Code 1800. Self-exclusion is statewide (the IGB
  Self-Exclusion Program), with a 5-year minimum and no lifetime tier.
  Helpline is 1-800-GAMBLER, paired with the IDHS "Are You Really Winning?"
  public-awareness campaign. August 2025 brought uniform advertising rules
  across all three verticals.
last_updated: 2026-06-05
---

# Illinois — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Illinois. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. Illinois uses a **prescriptive** model with enumerated advertising rules (11 Ill. Adm. Code 1900.340 plus the August 2025 uniform amendments) and a commission-administered statewide Self-Exclusion Program. Illinois regulates three verticals — casinos, sports wagering (retail and online), and video gaming terminals — through three statutes and three rule Parts across two Administrative Code Titles. Self-exclusion and advertising are unified/harmonized across verticals; age verification and player protection differ by vertical.
>
> **Verticals covered**: Land-based Casino, Sports Betting (retail and online), and Video Gaming Terminals (VGTs). **There is no legal online casino / iGaming in Illinois** — iGaming bills (SB 1963 / HB 3080) stalled in committee. VGT requirements map to the land-based `casino` vertical in the comparison tool. Never tag Illinois content with the `online` (iGaming) vertical.

> **Last verified**: 2026-06-05
> **Next review due**: 2026-09-05 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | IGB structure and key legislation |
| [Legal requirements](#legal-requirements) | 21+, permitted products, licensing |
| [Helpline](#helpline) | 1-800-GAMBLER, display rules, "Are You Really Winning?" |
| [Messaging requirements](#messaging-requirements) | IDHS-determined problem gambling text |
| [Advertising restrictions](#advertising-restrictions) | Uniform ad rules (1900.340 + Aug 2025) |
| [Self-exclusion](#self-exclusion) | IGB Self-Exclusion Program — statewide |
| [Player protection tools](#player-protection-tools) | Casino vs. sports gaming vs. VGT |
| [Age verification](#age-verification) | 21+ requirements |
| [AML/KYC](#amlkyc) | FinCEN/BSA requirements |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Primary regulator** | Illinois Gaming Board (IGB) |
| **Website** | [igb.illinois.gov](https://igb.illinois.gov/) |
| **Governing legislation** | Illinois Gambling Act (230 ILCS 10); Sports Wagering Act (230 ILCS 45); Video Gaming Act (230 ILCS 40) |
| **Regulations** | 86 Ill. Adm. Code 3000 (casino); 11 Ill. Adm. Code 1900 (sports wagering); 11 Ill. Adm. Code 1800 (video gaming) |
| **Regulatory approach** | Prescriptive |

### Scope of authority

The IGB licenses, regulates, and oversees casino gaming, sports wagering, and video gaming in Illinois. Key functions:

| Function | Details |
|---|---|
| **Casino gaming** | Licensing and oversight of casinos (including the riverboat/land-based casinos and the new Chicago casino) under 230 ILCS 10 |
| **Sports wagering** | Licensing of master sports wagering licensees and management services providers (retail and online) under 230 ILCS 45 (since 2020) |
| **Video gaming** | Oversight of roughly 9,000 video gaming locations and their terminals under 230 ILCS 40 |
| **Self-exclusion** | Administers the statewide Self-Exclusion Program covering casinos and sports wagering |
| **Advertising enforcement** | Enforces uniform advertising rules; publishes cease-and-desist letters |

### Multi-agency landscape

| Agency | Role | Relevance to {{PROGRAM_NAME}} |
|---|---|---|
| **Illinois Gaming Board (IGB)** | Regulates casinos, sports wagering, and video gaming | Primary regulator — all compliance flows through IGB |
| **Illinois Department of Human Services (IDHS)** | Funds and operates problem gambling services through the Division of Behavioral Health & Recovery (DBHR) | Determines the problem gambling text required in advertising; runs the helpline and the "Are You Really Winning?" campaign |
| **Illinois Lottery** | Operates the state lottery | Separate from IGB; not in scope for casino/sports/VGT deployments |

### Primary sources

| Document | URL | Relevance |
|---|---|---|
| Illinois Gambling Act (230 ILCS 10) | [ilga.gov](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=1399&ChapterID=25) | Governs casino gaming |
| Sports Wagering Act (230 ILCS 45) | [ilga.gov](https://www.ilga.gov/legislation/ilcs/ilcs5.asp?ActID=3996&ChapterID=25) | Governs sports wagering |
| Video Gaming Act (230 ILCS 40) | [ilga.gov](https://www.ilga.gov/legislation/ilcs/ilcs5.asp?ActID=3095&ChapterID=25) | Governs video gaming terminals |
| 86 Ill. Adm. Code 3000 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/title-86/part-3000) | Casino rules, including self-exclusion (3000.745–3000.790) |
| 11 Ill. Adm. Code 1900.340 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-11-SS-1900.340) | Sports wagering advertising and marketing |
| 11 Ill. Adm. Code 1800 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/title-11/part-1800) | Video gaming rules |
| IGB Self-Exclusion Program | [igb.illinois.gov](https://igb.illinois.gov/help-for-problem-gamblers/self-exclusion-program.html) | Statewide self-exclusion |
| IDHS Gambling Help | [dhs.state.il.us](https://www.dhs.state.il.us/page.aspx?item=117443) | 1-800-GAMBLER, "Are You Really Winning?" |

> **Sourcing note**: The canonical statutes and Administrative Code Parts are published on `ilga.gov`. The Cornell Legal Information Institute (`law.cornell.edu`) mirror is cited above as a reliably reachable copy of the same primary text. Re-verify the `ilga.gov` links from a standard network before publishing any statement as verbatim — see [Verify before merge](#verify-before-publishing-notes).

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 21+ (casinos, sports wagering, and video gaming terminals) |
| **Legal framework** | State-licensed operators under 230 ILCS 10 (casinos), 230 ILCS 45 (sports wagering), and 230 ILCS 40 (video gaming) |
| **Online gambling** | Online/mobile **sports betting legal**; **online casino / iGaming NOT legal** |
| **Lottery** | Illinois Lottery (separate regulator; not in scope here) |

### Permitted products

| Product | Legal status | Regulator | Notes |
|---|---|---|---|
| Casino (slots, table games) | Legal | IGB | Riverboat/land-based casinos plus the Chicago casino |
| Sports betting (retail) | Legal | IGB | At casinos and licensed facilities |
| Sports betting (online) | Legal | IGB | Mobile sportsbooks via master sports wagering licensees |
| Video gaming terminals (VGTs) | Legal | IGB | Roughly 9,000 locations (bars, restaurants, truck stops, fraternal/veterans' establishments) |
| Online casino | **Not legal** | -- | iGaming bills (SB 1963 / HB 3080) have not been enacted |
| Online poker | **Not legal** | -- | Not authorized |
| Lottery | Legal | Illinois Lottery | Separate regulator |

### Licensing model

Illinois uses a **competitive** licensing system:

| License type | Description |
|---|---|
| **Owner / casino license** | Casino operators under 230 ILCS 10 |
| **Master sports wagering licensee** | Casino, racetrack, and online sports wagering operators (230 ILCS 45) |
| **Management services provider** | Operates sports wagering on behalf of a master licensee |
| **Terminal operator (video gaming)** | Places and services VGTs in licensed establishments (230 ILCS 40) |
| **Supplier / occupational licenses** | Equipment suppliers and gaming employees |

---

## Helpline

### Illinois statewide problem gambling helpline

| Field | Value |
|---|---|
| **Phone** | 1-800-GAMBLER |
| **Text** | Text ILGAMB to 833234 |
| **Website** | [areyoureallywinning.com](https://www.areyoureallywinning.com/) / [IDHS gambling help](https://www.dhs.state.il.us/page.aspx?item=117443) |
| **Hours** | 24/7 |
| **Cost** | Free and confidential |
| **Funded by** | Illinois Department of Human Services (IDHS), Division of Behavioral Health & Recovery |
| **Public-awareness campaign** | "Are You Really Winning?" (IDHS) |

### Display rules

- **Advertising (all verticals)**: must include **problem gambling text as determined by IDHS**, including the helpline (11 Ill. Adm. Code 1900.340(e)(2); 86 Ill. Adm. Code 3000 as amended August 2025).
- **Casino venues**: must post compulsive-gambling and treatment/helpline notices (230 ILCS 10/13.1).
- **Video gaming establishments**: must post 21-and-over signage and make problem gambling/treatment information available.

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call 1-800-GAMBLER."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support — 24/7. For any question about gambling.
> **Call 1-800-GAMBLER** | **Text ILGAMB to 833234**

Both meet the IDHS-determined-text requirement. The second version frames the helpline as available for any question, not only crisis, and includes a text option.

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Illinois's messaging approach

Illinois does not prescribe a single verbatim slogan. Instead, advertising must carry **problem gambling text as determined by IDHS**, and casinos must post statutory compulsive-gambling notices.

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| Advertising (casino, VGT, sports) | Standard-based | Problem gambling text as determined by IDHS, including the helpline; prominent responsible-gaming messages | 11 Ill. Adm. Code 1900.340(e)(2); 86 Ill. Adm. Code 3000 (Aug 2025) |
| Casino venue notice | Obligation-based | Compulsive-gambling and treatment/helpline notices | 230 ILCS 10/13.1 |
| Self-exclusion program info | Obligation-based | Self-exclusion and treatment information available at venues and on platforms | 86 Ill. Adm. Code 3000.745–.790 |

### Verbatim required statements

Illinois rules require the **IDHS-determined problem gambling text** in advertising rather than prescribing a single operator slogan. A statutory compulsive-gambling provision (230 ILCS 10/13.1) and the IDHS warning text (77 Ill. Adm. Code 2059) govern the required language. **The exact verbatim wording of any mandatory statement must be confirmed against 230 ILCS 10/13.1 and 77 Ill. Adm. Code 2059 before publishing** — see [Verify before publishing](#verify-before-publishing-notes).

### On-brand integration

Because the operator chooses the surrounding copy (the IDHS text and helpline are the fixed elements), {{PROGRAM_NAME}} messaging applies freely:

**Generic operator approach:**
> "Gambling problem? Call 1-800-GAMBLER."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-800-GAMBLER** | Text ILGAMB to 833234

**Rules for on-brand integration:**
1. Include the IDHS-determined problem gambling text and helpline in all advertising
2. Give all messaging visual dignity — do not shrink to minimum size
3. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

Illinois's advertising rules were **harmonized uniformly across casinos, video gaming, and sports wagering effective August 1, 2025** (JCAR-approved May 13, 2025). They build on the sports wagering rule at 11 Ill. Adm. Code 1900.340.

| Field | Value |
|---|---|
| **Primary regulation** | 11 Ill. Adm. Code 1900.340 (sports); parallel casino/VGT rules under 86 Ill. Adm. Code 3000 / 11 Ill. Adm. Code 1800 (Aug 2025 amendments) |
| **Approach** | Prescriptive — specific content and conduct requirements |
| **Enforcement** | IGB enforces proactively and publishes cease-and-desist letters |

### Required in advertising

| Requirement | Details | Source |
|---|---|---|
| **Problem gambling text** | IDHS-determined problem gambling text, including the helpline | 1900.340(e)(2) |
| **Responsible-gaming messages** | Prominent responsible-gaming messaging | 1900.340; 86 Adm. Code 3000 (2025) |
| **Record retention** | Retain copies of all advertising and marketing materials with a publication log | 1900.340(c) |
| **Patron opt-out** | Provide a method to opt out of direct advertising | 1900.340 |

### Prohibited content

| Prohibition | Source |
|---|---|
| Targeting individuals under 21 | 1900.340(e)(1) |
| Advertising on college or university campuses | Aug 2025 uniform rules |
| Advertising in college/university media (newspapers, radio, TV) | Aug 2025 uniform rules |
| Advertising at sports venues used primarily for college events | Aug 2025 uniform rules |
| Depicting college students or college settings | Aug 2025 uniform rules |
| Performance-based affiliate compensation tied to the volume or outcome of wagers | 1900.340(f) |
| False or misleading content | 1900.340 |

For the detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

### IGB Self-Exclusion Program — statewide

| Field | Value |
|---|---|
| **Program name** | Illinois Gaming Board Self-Exclusion Program (SEP) |
| **Website** | [igb.illinois.gov/help-for-problem-gamblers/self-exclusion-program](https://igb.illinois.gov/help-for-problem-gamblers/self-exclusion-program.html) |
| **Administered by** | Illinois Gaming Board |
| **Duration** | **Minimum five (5) years** — there is **no shorter or lifetime tier** in the program description |
| **Scope** | Casinos and sports wagering statewide |
| **Enrollment method** | In person |
| **Removal / reinstatement** | After the five-year minimum, removal requires a request supported by an affidavit from a licensed mental health professional who is a certified gambling counselor or psychiatrist |
| **Source** | 86 Ill. Adm. Code 3000.745–3000.790 |

### Operator responsibilities

| Obligation | Details |
|---|---|
| **Bar from gaming floor** | Prevent self-excluded persons from gambling at casinos and from wagering on sports |
| **Remove from marketing** | Exclude self-excluded persons from all marketing and promotional materials |
| **No reinstatement before minimum** | Honor the five-year minimum before any removal request |

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your play" | "Self-Exclusion Program" | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" | "IGB Self-Exclusion Program" | Legal documents, formal enrollment, support referrals |
| Website/app | "Need a break from gambling?" | "Self-Exclusion Program" | On the self-exclusion information page itself |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: What is the Illinois Self-Exclusion Program?**
>
> It is the Illinois Gaming Board's statewide self-exclusion program, covering casinos and sports wagering. Enrollment is in person, and the minimum exclusion is five years — there is no shorter or lifetime option. After five years, a person can request removal, but only with an affidavit from a licensed mental health professional who is a certified gambling counselor or psychiatrist. Use "take a break" in casual conversation, and "Self-Exclusion Program" when referring to the formal program.

---

## Player protection tools

### Land-based casino (86 Ill. Adm. Code 3000)

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Compulsive-gambling notice** | Yes | 230 ILCS 10/13.1 | Treatment and helpline notices posted at the casino |
| **Self-exclusion** | Yes | 86 Adm. Code 3000.745–.790 | Statewide SEP — see [self-exclusion](#self-exclusion) |
| **Employee duties** | Yes | 86 Adm. Code 3000 | Enforce self-exclusion; patron interaction duties |
| **Deposit limits** | N/A | -- | Not applicable to walk-in cash play |

### Sports wagering (11 Ill. Adm. Code 1900)

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Account controls** | Yes | 11 Adm. Code 1900 | Patron account management and closure |
| **Deposit / wager / time limits** | Verify | 11 Adm. Code 1900 | Account-control provisions apply; confirm the exact subsection before citing as verbatim |
| **Self-exclusion** | Yes | 86 Adm. Code 3000.745–.790 | Statewide SEP covers sports wagering |
| **Identity verification** | Yes | 11 Adm. Code 1900 | Account registration identity verification |

### Video gaming terminals (11 Ill. Adm. Code 1800)

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **21+ signage** | Yes | 230 ILCS 40 | Establishments must post that play is limited to persons 21 or older |
| **Restricted area** | Yes | 230 ILCS 40 / 11 Adm. Code 1800 | Terminals must be in a restricted area in view of a staff member over 21 |
| **Responsible-gaming conversations** | Verify | 11 Adm. Code 1800.1710 | A rule titled "Conversations About Responsible Gaming" applies; confirm scope/wording before citing |

### {{PROGRAM_NAME}} tool messaging for Illinois

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit / wager limits | "Set your limit — play on your terms. Takes 10 seconds." | Sports wagering accounts (Part 1900) |
| Self-exclusion | "Need a break from gambling? The Illinois Self-Exclusion Program covers casinos and sportsbooks statewide." | Casino + sports (86 Adm. Code 3000) |
| Account closure | "Want to close your account? We'll make it easy — and share some resources if you want them." | Sports wagering (Part 1900) |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 21+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.united-states-illinois` |
| **`{{MIN_AGE}}` token value** | 21 |
| **Verification (casino)** | Government-issued photo ID |
| **Verification (sports wagering)** | Identity verification at account registration |
| **Verification (VGT)** | 21+ signage; establishment staff control |
| **Products with different ages** | None — 21+ applies to all IGB-regulated gambling |
| **Statutory basis** | 230 ILCS 10/18; 230 ILCS 40; 230 ILCS 45 |

### Age messaging

All collateral in Illinois must display the `21+` age notice:

> "You must be 21+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `21+` for all Illinois-deployed content.

---

## AML/KYC

### FinCEN/BSA requirements

Illinois casinos are classified as **financial institutions** under the Bank Secrecy Act (BSA) and must comply with FinCEN regulations, the same as all US casinos:

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Currency Transaction Report (CTR)** | $10,000+ (single or aggregate in 24 hours) | Player must provide ID; transaction reported to FinCEN |
| **Suspicious Activity Report (SAR)** | $5,000+ (suspicious transactions) | No direct player notification — internal reporting |
| **Player identification (casino)** | $10,000+ cash transactions | Government-issued photo ID required |
| **Player identification (sports wagering)** | All accounts | Full identity verification at registration |
| **BSA compliance program** | All casinos | Internal controls, independent testing, training, compliance officer |

### Player-facing messaging

**Bare compliance:**
> "Federal law requires us to verify your identity for transactions of $10,000 or more."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required by federal law. If we ask about a large transaction, it's a standard process that applies to everyone at every casino in the US."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Illinois-specific adaptations.

| Category | Collateral | Illinois adaptation | Token/Value |
|---|---|---|---|
| **Digital** | Website footer | 1-800-GAMBLER + on-brand RG message | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Set to 21+ | `{{MIN_AGE}}` = 21 |
| **Digital** | Sports account | Account limits offered; helpline + IDHS text | 11 Adm. Code 1900 |
| **Digital** | Self-exclusion page | Explain statewide SEP (5-year minimum, in-person) | 86 Adm. Code 3000.745–.790 |
| **Digital** | Email footer | Helpline + IDHS text; opt-out for direct ads | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | 1-800-GAMBLER, 21+ notice, SEP reference | All tokens |
| **Print** | Helpline card | 1-800-GAMBLER, text ILGAMB to 833234 | All helpline tokens |
| **Environmental** | Casino signage | Compulsive-gambling + treatment notices per 230 ILCS 10/13.1 | `{{HELPLINE_NUMBER}}` |
| **Environmental** | VGT establishment | 21+ signage; terminals in restricted area | `{{MIN_AGE}}` |
| **Video/Audio** | TV/streaming end card | IDHS problem gambling text + helpline; no college venues/settings | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | 1-800-GAMBLER in referral scripts; SEP enrollment guidance | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Add SEP Q&A; update helpline to 1-800-GAMBLER | -- |

For the detailed collateral adaptation template, see [collateral-adaptation.md](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Illinois:

```yaml
# --- HELPLINES ---
helplines:
  united-states:
    illinois:
      number: "1-800-GAMBLER"
      text_number: "Text ILGAMB to 833234"
      website: "areyoureallywinning.com"
      label: "Illinois Problem Gambling Helpline"
      hours: "24/7"
      cost: "Free"
      state_resource: "IDHS Division of Behavioral Health & Recovery"
      campaign_site: "areyoureallywinning.com"
      notes: "Funded by IDHS. Advertising must include problem gambling text as determined by IDHS (11 Ill. Adm. Code 1900.340). NCPG national numbers also accepted."

# --- LEGAL ---
legal:
  minimum_gambling_age:
    united-states-illinois: 21

# --- MANDATORY MESSAGING ---
messaging:
  mandatory:
    # illinois-general: (no single verbatim slogan; advertising must include
    #   problem gambling text as determined by IDHS per 11 Ill. Adm. Code
    #   1900.340(e)(2). Casino compulsive-gambling notice under 230 ILCS 10/13.1;
    #   IDHS warning text under 77 Ill. Adm. Code 2059 — confirm exact wording.)
```

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Illinois.

### Regulatory
- [ ] Identified IGB as primary regulator and current legislation (230 ILCS 10, 45, 40)
- [ ] Confirmed license requirements and status
- [ ] Verified legal gambling age: 21+
- [ ] Reviewed permitted products (casino, sports wagering, VGT; **no online casino**)
- [ ] Confirmed iGaming is still not legal in Illinois at time of launch
- [ ] Identified deployment verticals: [ ] Casino [ ] Sports betting [ ] VGT

### Messaging
- [ ] IDHS-determined problem gambling text included in all advertising
- [ ] Helpline (1-800-GAMBLER) displayed in advertising and at venues
- [ ] Age notice (21+) on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Illinois values
- [ ] Verbatim warning wording confirmed against 230 ILCS 10/13.1 and 77 Ill. Adm. Code 2059

### Advertising
- [ ] Advertising reviewed against 11 Ill. Adm. Code 1900.340 and the Aug 2025 uniform rules
- [ ] No advertising on college campuses, in college media, or at college sports venues
- [ ] No depiction of college students or college settings
- [ ] No performance-based affiliate compensation tied to wager volume/outcome
- [ ] Advertising materials retained with a publication log
- [ ] Direct-ad opt-out method provided

### Self-exclusion
- [ ] Self-Exclusion Program information available at venues and on platforms
- [ ] Self-excluded persons barred from gaming floor and from all marketing
- [ ] Five-year minimum honored; removal only with clinical affidavit after the minimum
- [ ] Staff trained on SEP enrollment and enforcement

### Player protection — casino / VGT
*Check only if deploying in land-based venues or VGT establishments.*
- [ ] Compulsive-gambling and treatment notices posted (230 ILCS 10/13.1)
- [ ] VGT establishments post 21+ signage and keep terminals in a restricted area
- [ ] Employee duties on self-exclusion enforcement implemented

### Player protection — sports wagering
*Check only if deploying on sports wagering platforms.*
- [ ] Account controls (limits, closure) implemented per Part 1900
- [ ] Identity verification at account registration
- [ ] Self-exclusion check against the statewide SEP

### Age verification
- [ ] Casino: photo ID at entry/cage
- [ ] Sports wagering: identity verification at registration
- [ ] VGT: 21+ signage and staff control

### Content
- [ ] All collateral adapted per collateral adaptation table
- [ ] Staff FAQ updated with SEP Q&A
- [ ] Conversation scripts updated with 1-800-GAMBLER

### Governance
- [ ] `_brand.yml` updated with Illinois values (helpline, legal age)
- [ ] `Last verified` date set
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

## Verify before publishing (notes)

These items were flagged during research and should be confirmed against primary sources before the module is published or the citations are treated as verbatim:

1. **`ilga.gov` reachability** — the canonical statutes (230 ILCS 10/13.1, 10/18; 230 ILCS 45; 230 ILCS 40) and rule Parts 1900/1800 were verified via the Cornell LII mirror and IGB pages because `ilga.gov` was unreachable during research. Re-open the `ilga.gov` links from a standard network and confirm exact subsection numbers.
2. **Verbatim warning text** — confirm any mandatory statement against 230 ILCS 10/13.1 and 77 Ill. Adm. Code 2059 before presenting it as word-for-word.
3. **Part 1900 / 1800 subsections** — the precise deposit/wager/time-limit subsection (Part 1900) and the "Conversations About Responsible Gaming" rule (1800.1710) were not opened verbatim; confirm before citing as hard requirements.
4. **iGaming status** — online casino is not legal in Illinois (confirmed for 2026, but volatile). Re-confirm at launch; never tag Illinois content with the `online` vertical until/unless enacted.

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [US Overview](../README.md) | [Jurisdictions README](../../README.md)*
