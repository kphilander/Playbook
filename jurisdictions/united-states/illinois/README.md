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
  Self-Exclusion Program); casino exclusion is requested on a permanent/
  indefinite basis with a 5-year minimum lock-in before removal may be
  requested (86 Ill. Adm. Code 3000.750, limited by 3000.780).
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
| 86 Ill. Adm. Code 3000.750 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-86-SS-3000.750) | Self-Exclusion List — permanent basis, 5-year minimum (limited by 3000.780) |
| 86 Ill. Adm. Code 3000.560 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-86-SS-3000.560) | Casino patron-admission duty (keep ineligible/self-excluded off the gaming floor) |
| 77 Ill. Adm. Code 2059.103 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-77-SS-2059.101) | IDHS-prescribed compulsive-gambling text (1-800-GAMBLER) |
| 11 Ill. Adm. Code 1900.340 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-11-SS-1900.340) | Sports wagering advertising and marketing (incl. (e)(3)-(7)) |
| 11 Ill. Adm. Code 1900.1220 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-11-SS-1900.1220) | Sports wagering accounts — closure method, PG statement, SE-list verification |
| 11 Ill. Adm. Code 1900.1730 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-11-SS-1900.1730) | Sports wagering duties re self-excluded persons |
| 11 Ill. Adm. Code 1800 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/title-11/part-1800) | Video gaming rules |
| 11 Ill. Adm. Code 1800.1710 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-11-SS-1800.1710) | VGT "Conversations About Responsible Gaming" — right, not obligation |
| 11 Ill. Adm. Code 1800.1750 | [law.cornell.edu](https://www.law.cornell.edu/regulations/illinois/Ill-Admin-Code-tit-11-SS-1800.1750) | VGT problem-gambling signage |
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

- **Advertising (all verticals)**: must include the **IDHS-prescribed problem gambling text** (the 1-800-GAMBLER text at 77 Ill. Adm. Code 2059.103), including the helpline (11 Ill. Adm. Code 1900.340(e)(2); casino master ad rule 86 Ill. Adm. Code 3000.680, amended August 2025; VGT 11 Ill. Adm. Code 1800.1760).
- **Casino venues**: must post compulsive-gambling and treatment/helpline notices (230 ILCS 10/13.1).
- **Video gaming establishments**: must post 21-and-over signage and a problem-gambling sign carrying the 2059.103 text plus how to access the Self-Exclusion Program, conspicuously posted at the entrance to any gaming area and visible from any ATM (11 Ill. Adm. Code 1800.1750).

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
| Advertising (casino, VGT, sports) | Standard-based | IDHS-prescribed problem gambling text (77 Ill. Adm. Code 2059.103), including the helpline; prominent responsible-gaming messages | 11 Ill. Adm. Code 1900.340(e)(2); 86 Ill. Adm. Code 3000.680; 11 Ill. Adm. Code 1800.1760 (Aug 2025) |
| Casino venue notice | Obligation-based | Compulsive-gambling and treatment/helpline notices | 230 ILCS 10/13.1 |
| VGT problem-gambling sign | Obligation-based | 2059.103 text + how to access the Self-Exclusion Program, at the gaming-area entrance and visible from any ATM | 11 Ill. Adm. Code 1800.1750 |
| Self-exclusion program info | Obligation-based | Self-exclusion and treatment information available at venues and on platforms | 86 Ill. Adm. Code 3000.745–.790 (3000.750) |

### Verbatim required statements

Illinois rules require the **IDHS-determined problem gambling text** in advertising and signage rather than prescribing a single operator slogan. The IDHS prescribes that text at **77 Ill. Adm. Code 2059.103**, which the gaming rules incorporate by reference across signage and advertising disclosures. The prescribed compulsive-gambling text is:

> **"If you or someone you know has a gambling problem, crisis counseling and referral services can be accessed by calling 1-800-GAMBLER (1-800-426-2537)."**
> — 77 Ill. Adm. Code 2059.103

This is the fixed language that must appear (or appear materially consistent with it, subject to Administrator approval where applicable) wherever the rules call for "problem gambling text as determined by IDHS." A separate statutory compulsive-gambling provision (230 ILCS 10/13.1) governs the casino venue notice; **confirm that statutory wording against 230 ILCS 10/13.1 on `ilga.gov` before presenting it word-for-word** — see [Verify before publishing](#verify-before-publishing-notes).

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
| **Primary regulation** | 11 Ill. Adm. Code 1900.340 (sports); **casino master ad rule 86 Ill. Adm. Code 3000.680**, which the sports (1900.340) and VGT (11 Ill. Adm. Code 1800.1760) ad rules incorporate by reference (Aug 2025 amendments) |
| **Approach** | Prescriptive — specific content and conduct requirements |
| **Enforcement** | IGB enforces proactively and publishes cease-and-desist letters |

> **How the ad rules fit together**: 86 Ill. Adm. Code **3000.680** is the master "Advertising and Marketing" rule. The August 2025 uniform requirements — the IDHS-prescribed problem-gambling text, the college campus/media/venue ban, the no-depicting-college-students/settings prohibition, the record-retention/publication log, the direct-ad opt-out, and the ban on volume- or outcome-based affiliate compensation — live there. The VGT ad rule (**1800.1760**) and the sports ad rule (**1900.340**) incorporate 3000.680 by reference, which is how the requirements run uniformly across all three verticals.

### Required in advertising

| Requirement | Details | Source |
|---|---|---|
| **Problem gambling text** | IDHS-prescribed problem gambling text (77 Ill. Adm. Code 2059.103), including the helpline | 1900.340(e)(2); 3000.680 |
| **21+ statement** | Ads must state that patrons must be 21 years of age or older to wager | 1900.340(e)(3) |
| **Responsible-gaming messages** | Prominent responsible-gaming messaging | 1900.340; 3000.680 |
| **Record retention** | Retain copies of all advertising and marketing materials with a publication log | 1900.340(c); 3000.680 |
| **Patron opt-out** | Provide a method to opt out of direct advertising | 1900.340; 3000.680 |

### Prohibited content

| Prohibition | Source |
|---|---|
| Targeting individuals under 21 | 1900.340(e)(1) |
| Imagery, symbols, cartoon/celebrity/entertainer figures, endorsements, or language designed to appeal to those under 21 | 1900.340(e)(4) |
| Featuring anyone who is, or appears to be, under 21 | 1900.340(e)(5) |
| Placement in media (including social media) that appeals primarily to those under 21 | 1900.340(e)(6) |
| Placement before any audience presumed to be majority under 21 | 1900.340(e)(7) |
| Advertising on college or university campuses | 3000.680 (Aug 2025 uniform rules) |
| Advertising in college/university media (newspapers, radio, TV) | 3000.680 (Aug 2025 uniform rules) |
| Advertising at sports venues used primarily for college events | 3000.680 (Aug 2025 uniform rules) |
| Depicting college students or college settings | 3000.680 (Aug 2025 uniform rules) |
| Performance-based affiliate compensation tied to the volume or outcome of wagers | 1900.340(f); 3000.680 |
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
| **Duration** | **Indefinite / permanent, with a 5-year minimum lock-in.** Casino self-exclusion is requested "on a permanent basis, except as limited by Section 3000.780," and a person on the Self-Exclusion List is prohibited for a **minimum of 5 years** before removal may be requested. It is not a fixed 5-year term that lapses automatically — the exclusion continues until the person affirmatively requests removal after the minimum. |
| **Scope** | Casinos and sports wagering statewide |
| **Enrollment method** | In person |
| **Removal / reinstatement** | After the five-year minimum, removal requires a request supported by an affidavit from a licensed mental health professional who is a certified gambling counselor or psychiatrist |
| **Source** | 86 Ill. Adm. Code 3000.745–3000.790; duration/permanence under 3000.750 (as limited by 3000.780) |

### Operator responsibilities

| Obligation | Details |
|---|---|
| **Bar from gaming floor** | Prevent self-excluded persons from gambling at casinos and from wagering on sports |
| **Remove from marketing** | Exclude self-excluded persons from all marketing and promotional materials |
| **No reinstatement before minimum** | Honor the indefinite/permanent exclusion and its five-year minimum lock-in before any removal request (3000.750, as limited by 3000.780) |

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
> It is the Illinois Gaming Board's statewide self-exclusion program, covering casinos and sports wagering. Enrollment is in person. Casino exclusion is requested on a permanent/indefinite basis, with a five-year minimum lock-in — it is not a fixed term that lapses on its own. After the five-year minimum, a person can request removal, but only with an affidavit from a licensed mental health professional who is a certified gambling counselor or psychiatrist. Use "take a break" in casual conversation, and "Self-Exclusion Program" when referring to the formal program.

---

## Player protection tools

### Land-based casino (86 Ill. Adm. Code 3000)

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Compulsive-gambling notice** | Yes | 230 ILCS 10/13.1 | Treatment and helpline notices posted at the casino |
| **Self-exclusion** | Yes | 86 Adm. Code 3000.745–.790 (3000.750) | Statewide SEP — see [self-exclusion](#self-exclusion) |
| **Patron-admission duty** | Yes | 86 Adm. Code 3000.560 | Affirmative duty to prevent ineligible/self-excluded persons from accessing the gaming floor (magnetometers/turnstile screening) |
| **Employee duties** | Yes | 86 Adm. Code 3000.560 / 3000.770 | Enforce self-exclusion and patron admission; Illinois imposes no affirmative RG staff-training mandate (see [player-protection note](#a-note-on-staff-training-theme-9)) |
| **Deposit limits** | N/A | -- | Not applicable to walk-in cash play |

### Sports wagering (11 Ill. Adm. Code 1900)

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **Account closure** | Yes | 11 Adm. Code 1900.1220(l) | Accounts must provide a conspicuous, readily accessible account-closure method; remaining balance refunded per internal controls |
| **Problem-gambling statement** | Yes | 11 Adm. Code 1900.1220(j)(6) | Account/activity statements must carry a problem-gambling-assistance statement (text per IDHS rules) |
| **Deposit / wager / time limits** | Operator-offered | 11 Adm. Code 1900.1220 | **Patron-set deposit/wager/time limits are not mandated at the rule level.** Part 1900.1220 requires only the account-closure method and the problem-gambling statement; any limits an operator surfaces are voluntary/operator-offered |
| **Self-exclusion** | Yes | 11 Adm. Code 1900.1730; 86 Adm. Code 3000.745–.790 | Statewide SEP covers sports wagering; 1900.1730 sets the licensee duties (database flagging, no check-cashing/credit, identity checks, online account handling) |
| **Identity verification** | Yes | 11 Adm. Code 1900.1220(b)(3)(C) | Registration must verify the patron is 21+ and not on the Self-Exclusion List |

### Video gaming terminals (11 Ill. Adm. Code 1800)

| Tool / Obligation | Required? | Regulatory basis | Details |
|---|---|---|---|
| **21+ signage** | Yes | 230 ILCS 40 | Establishments must post that play is limited to persons 21 or older |
| **Problem-gambling signage** | Yes | 11 Adm. Code 1800.1750 | Sign carrying the 2059.103 compulsive-gambling text plus how to access the Self-Exclusion Program, conspicuously posted at the entrance to any gaming area and visible from any ATM (content pre-approved by the Administrator) |
| **Underage-gambling-compliance program** | Yes | 11 Adm. Code 1800 Subpart U (1800.2110–.2170) | VGT establishments must maintain an underage-gambling-compliance program |
| **Restricted area** | Yes | 230 ILCS 40 / 11 Adm. Code 1800 | Terminals must be in a restricted area in view of a staff member over 21 |
| **Responsible-gaming conversations** | Optional (right, not obligation) | 11 Adm. Code 1800.1710 | "Conversations About Responsible Gaming" grants VGT staff a **"right, but not an obligation"** to raise RG with players, paired with a liability shield. It is *not* an affirmative duty — see [the staff-training note](#a-note-on-staff-training-theme-9) |

### {{PROGRAM_NAME}} tool messaging for Illinois

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit / wager limits | "Set your limit — play on your terms. Takes 10 seconds." | Sports wagering accounts — operator-offered, not rule-mandated (Part 1900.1220) |
| Self-exclusion | "Need a break from gambling? The Illinois Self-Exclusion Program covers casinos and sportsbooks statewide." | Casino + sports (86 Adm. Code 3000) |
| Account closure | "Want to close your account? We'll make it easy — and share some resources if you want them." | Sports wagering — required account-closure method (Part 1900.1220(l)) |

### A note on staff training (Theme 9)

**Illinois imposes no affirmative responsible-gambling staff-training mandate.** This is worth stating plainly because several other jurisdictions do require it:

- **Video gaming** — 11 Ill. Adm. Code 1800.1710 ("Conversations About Responsible Gaming") expressly grants VGT staff a **"right, but not an obligation"** to raise responsible gaming with players, and pairs that with a **liability shield** (a licensed location is not liable if a self-excluded or problem-gambling-registry enrollee plays a terminal on the premises). It deliberately stops short of a duty.
- **Casino** — staff duties are limited to **self-exclusion enforcement and patron admission** (86 Ill. Adm. Code 3000.560 / 3000.770). There is no enumerated RG-interaction-training requirement.

Because of this, {{PROGRAM_NAME}}'s Theme 9 content (conversation scripts, the staff FAQ, Tier 2 voice guidance) is **best-practice and brand-driven, not compliance-driven** in Illinois. Operators should still train staff — it is the right thing to do and aligns with AGA guidance — but they are not closing a regulatory gap by doing so. Do not present staff training to an Illinois operator as a statutory obligation.

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
| **Digital** | Sports account | Required: account-closure method + problem-gambling statement; limits are operator-offered (not rule-mandated); helpline + IDHS text | 11 Adm. Code 1900.1220 |
| **Digital** | Self-exclusion page | Explain statewide SEP (indefinite/permanent, 5-year minimum lock-in, in-person) | 86 Adm. Code 3000.745–.790 (3000.750) |
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
      notes: "Funded by IDHS. Advertising must include the IDHS-prescribed problem gambling text set verbatim at 77 Ill. Adm. Code 2059.103 (11 Ill. Adm. Code 1900.340(e)(2); casino master ad rule 86 Ill. Adm. Code 3000.680). NCPG national numbers also accepted."

# --- LEGAL ---
legal:
  minimum_gambling_age:
    united-states-illinois: 21

# --- MANDATORY MESSAGING ---
messaging:
  mandatory:
    illinois-idhs-text: "If you or someone you know has a gambling problem, crisis counseling and referral services can be accessed by calling 1-800-GAMBLER (1-800-426-2537)."
    # illinois-general: (no single operator slogan. The fixed element is the
    #   IDHS-prescribed compulsive-gambling text above, set verbatim at
    #   77 Ill. Adm. Code 2059.103 and required in advertising per
    #   11 Ill. Adm. Code 1900.340(e)(2) and incorporated by the casino master
    #   ad rule 86 Ill. Adm. Code 3000.680. Separate casino venue notice under
    #   230 ILCS 10/13.1 — confirm that statutory wording on ilga.gov.)
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
- [ ] IDHS-prescribed problem gambling text (77 Ill. Adm. Code 2059.103, verbatim) included in all advertising and signage
- [ ] Helpline (1-800-GAMBLER) displayed in advertising and at venues
- [ ] Age notice (21+) on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Illinois values
- [ ] Statutory casino venue-notice wording confirmed against 230 ILCS 10/13.1 on ilga.gov (the 2059.103 advertising text is supplied verbatim in this module)

### Advertising
- [ ] Advertising reviewed against 11 Ill. Adm. Code 1900.340 and the casino master ad rule 86 Ill. Adm. Code 3000.680 (incorporated by 1800.1760)
- [ ] Ads state patrons must be 21+ to wager (1900.340(e)(3))
- [ ] No imagery/figures/endorsements/placement appealing to or aimed at under-21 (1900.340(e)(4)-(7))
- [ ] No advertising on college campuses, in college media, or at college sports venues
- [ ] No depiction of college students or college settings
- [ ] No performance-based affiliate compensation tied to wager volume/outcome
- [ ] Advertising materials retained with a publication log
- [ ] Direct-ad opt-out method provided

### Self-exclusion
- [ ] Self-Exclusion Program information available at venues and on platforms
- [ ] Self-excluded persons barred from gaming floor and from all marketing
- [ ] Indefinite/permanent exclusion with five-year minimum lock-in honored; removal only with clinical affidavit after the minimum
- [ ] Staff trained on SEP enrollment and enforcement

### Player protection — casino / VGT
*Check only if deploying in land-based venues or VGT establishments.*
- [ ] Compulsive-gambling and treatment notices posted (230 ILCS 10/13.1)
- [ ] Casino patron-admission duty enforced — ineligible/self-excluded persons kept off the gaming floor (86 Ill. Adm. Code 3000.560)
- [ ] VGT establishments post 21+ signage and keep terminals in a restricted area
- [ ] VGT problem-gambling sign (2059.103 text + Self-Exclusion Program access) posted at the gaming-area entrance and visible from any ATM (1800.1750)
- [ ] VGT underage-gambling-compliance program in place (1800 Subpart U, 1800.2110-.2170)
- [ ] Employee duties on self-exclusion enforcement implemented

### Player protection — sports wagering
*Check only if deploying on sports wagering platforms.*
- [ ] Conspicuous account-closure method with balance refund (1900.1220(l))
- [ ] Problem-gambling-assistance statement in account statements (1900.1220(j)(6))
- [ ] Patron-set limits offered where the operator chooses to (operator-offered, not rule-mandated)
- [ ] Identity verification at account registration; patron verified 21+ and not on the Self-Exclusion List (1900.1220(b)(3)(C))
- [ ] Self-excluded-person duties implemented (database flagging, no check-cashing/credit, identity checks for wagers >$500 and redemptions >$2,000, online block/suspend/void/refund) (1900.1730)

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

1. **`ilga.gov` reachability** — the canonical statutes (230 ILCS 10/13.1, 10/18; 230 ILCS 45; 230 ILCS 40) and the Administrative Code Parts are published on `ilga.gov`, which was unreachable from the research environment. The Administrative Code subsections cited in this module — including 86 Ill. Adm. Code 3000.750, 3000.560; 77 Ill. Adm. Code 2059.103; 11 Ill. Adm. Code 1900.340(e), 1900.1220, 1900.1730, 1800.1710, 1800.1750, 1800.1760 — were verified against the Cornell LII mirror (`law.cornell.edu`). Re-open the `ilga.gov` links from a standard network to confirm before relying on them as the official text.
2. **Casino master ad rule (3000.680) and VGT ad rule (1800.1760)** — these August 2025 amendments were not yet individually mirrored on Cornell LII at research time (the section pages returned a Part-level directory). The substance is summarized from the JCAR-approved uniform rules; confirm 3000.680 and 1800.1760 directly on `ilga.gov` before treating their text as verbatim.
3. **Statutory casino venue notice (230 ILCS 10/13.1)** — the IDHS *advertising* text is supplied verbatim from 77 Ill. Adm. Code 2059.103 (verified). The separate statutory *venue-notice* wording at 230 ILCS 10/13.1 should still be confirmed on `ilga.gov` before being presented word-for-word.
4. **iGaming status** — online casino is not legal in Illinois (confirmed for 2026, but volatile). Re-confirm at launch; never tag Illinois content with the `online` vertical until/unless enacted.

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [US Overview](../README.md) | [Jurisdictions README](../../README.md)*
