---
content_type: jurisdiction-module
title: "Massachusetts — Compliance Module"
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
game_type: [slots, blackjack, roulette, sports-betting]
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
verticals: [land-based, interactive]
regulatory_approach: prescriptive
adaptation_status: base
adaptation_notes: |
  Massachusetts module is written for the US market (peer/individual/irreverent/
  blunt/open). On-brand messaging examples throughout need adaptation
  for non-US deployments. Currency is USD. Massachusetts has separate
  regulatory regimes for casino (Chapter 23K) and sports wagering
  (Chapter 23N). GameSense Info Centers operate at all three casinos.
  Helpline is state-specific (MA Problem Gambling Helpline). Sports
  wagering advertising rules are highly prescriptive (205 CMR 256).
last_updated: 2026-03-10
---

# Massachusetts — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Massachusetts. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. Massachusetts uses a **prescriptive** regulatory approach with **separate regimes** for casino gambling (M.G.L. Chapter 23K) and sports wagering (M.G.L. Chapter 23N). Sports wagering advertising rules (205 CMR 256) are among the most detailed in the US, with specific font-size requirements for responsible gambling messaging.
>
> **Verticals covered**: Land-based Casino, Sports Betting (retail + mobile)
> *(Online casino is not legal in Massachusetts. If your deployment only covers one vertical, sections marked with the other vertical's tag can be skipped.)*

> **Last verified**: 2026-03-10
> **Next review due**: 2026-06-10 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Verticals | Description |
|---|---|---|
| [Regulatory authority](#regulatory-authority) | All | Massachusetts Gaming Commission structure |
| [Legal requirements](#legal-requirements) | All | 21+, permitted products, dual-statute framework |
| [Helpline](#helpline) | All | MA Problem Gambling Helpline, GameSense Info Centers |
| [Messaging requirements](#messaging-requirements) | All | Obligation-based (casino) + standard-based (sports wagering ads) |
| [Advertising restrictions](#advertising-restrictions) | Sports wagering | Prescriptive rules (205 CMR 256) — font sizes, prohibited content, endorsements |
| [Self-exclusion — land-based](#self-exclusion--land-based) | Land-based | Casino VSE (205 CMR 133) |
| [Self-exclusion — sports wagering](#self-exclusion--sports-wagering) | Interactive | Sports Wagering VSE (205 CMR 233) |
| [Player protection — land-based](#player-protection--land-based) | Land-based | Casino-specific tools and obligations |
| [Player protection — sports wagering](#player-protection--sports-wagering) | Interactive | Account management, limits, suspension (205 CMR 248) |
| [Age verification](#age-verification) | All | 21+ for all gambling |
| [AML/KYC](#amlkyc) | All | FinCEN/BSA + state-level identity verification |
| [Collateral adaptation](#collateral-adaptation) | All | What to change across all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | All | Config values to add |
| [Compliance checklist](#compliance-checklist) | All | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Primary regulator** | Massachusetts Gaming Commission (MGC) |
| **Website** | massgaming.com |
| **Governing legislation** | M.G.L. Chapter 23K (Expanded Gaming Act — casino); M.G.L. Chapter 23N (Sports Wagering Act) |
| **Key regulations** | 205 CMR 133 (Casino VSE), 205 CMR 233 (Sports Wagering VSE), 205 CMR 248 (Account Management), 205 CMR 256 (Sports Wagering Advertising), 205 CMR 138 (Casino Internal Controls) |
| **Regulatory approach** | Prescriptive |

### Dual-statute framework

Massachusetts regulates gambling through **two separate statutes**, each with its own body of regulations:

| Statute | Scope | Key regulations |
|---|---|---|
| **M.G.L. Chapter 23K** (Expanded Gaming Act) | Land-based casino gambling | 205 CMR 133 (VSE), 205 CMR 138 (Internal Controls) |
| **M.G.L. Chapter 23N** (Sports Wagering Act) | Retail and mobile sports betting | 205 CMR 233 (VSE), 205 CMR 248 (Account Management), 205 CMR 256 (Advertising) |

This dual-statute structure means that compliance requirements often differ between casino and sports wagering — even when covering similar topics (e.g., self-exclusion list update frequency is 72 hours for casino vs. 24 hours for sports wagering).

### GameSense

Massachusetts operates **GameSense Info Centers** at all three licensed casinos:

| Venue | Location |
|---|---|
| MGM Springfield | On-site GameSense Info Center |
| Encore Boston Harbor | On-site GameSense Info Center |
| Plainridge Park Casino | On-site GameSense Info Center |

GameSense advisors are designated agents authorized to process VSE applications (205 CMR 133.02(3)).

### Primary sources

| Document | URL | Relevance |
|---|---|---|
| M.G.L. c. 23K | [malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter23K](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter23K) | Expanded Gaming Act — governs casino gambling |
| M.G.L. c. 23N | [malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter23N](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter23N) | Sports Wagering Act — governs sports betting |
| 205 CMR 133 | [mass.gov/regulations/205-CMR-13300-voluntary-self-exclusion](https://www.mass.gov/regulations/205-CMR-13300-voluntary-self-exclusion) | Casino Voluntary Self-Exclusion |
| 205 CMR 233 | [mass.gov/regulations/205-CMR-23300-sports-wagering-voluntary-self-exclusion](https://www.mass.gov/regulations/205-CMR-23300-sports-wagering-voluntary-self-exclusion) | Sports Wagering Voluntary Self-Exclusion |
| 205 CMR 248 | [mass.gov/regulations/205-CMR-24800-sports-wagering-account-management](https://www.mass.gov/regulations/205-CMR-24800-sports-wagering-account-management) | Sports Wagering Account Management |
| 205 CMR 256 | [mass.gov/regulations/205-CMR-25600-sports-wagering-advertising](https://www.mass.gov/regulations/205-CMR-25600-sports-wagering-advertising) | Sports Wagering Advertising |

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 21+ (all gambling products — no exceptions) |
| **Legal framework** | State-licensed operators under M.G.L. Chapters 23K and 23N |
| **Online gambling** | Mobile sports betting legal; online casino NOT legal |

### Permitted products

| Product | Vertical | Legal status | Regulator | Notes |
|---|---|---|---|---|
| Casino (slots, table games) | Land-based | Legal | MGC | Three licensed venues: MGM Springfield, Encore Boston Harbor, Plainridge Park Casino |
| Sports betting (retail) | Land-based | Legal | MGC | Available at casinos and licensed retail locations |
| Sports betting (mobile) | Interactive | Legal | MGC | Multiple licensed operators |
| Online casino | Interactive | **Not legal** | — | Not authorized under current Massachusetts law |
| Lottery | Both | Legal | Massachusetts State Lottery Commission | Separate regulatory body — not covered by this module |
| Horse racing (simulcast) | Land-based | Legal (limited) | Massachusetts Gaming Commission | Simulcast wagering at licensed facilities |

### Licensing model

Massachusetts uses a **limited licensing system** for casino gambling:

| License type | Description |
|---|---|
| **Category 1** | Resort casino (up to 3 statewide — one per region) |
| **Category 2** | Slots parlor (one statewide) |
| **Sports Wagering — Category 1** | Retail + mobile, tethered to Category 1 or 2 casino license |
| **Sports Wagering — Category 3** | Untethered mobile/online-only sports wagering operators |

---

## Helpline

### Massachusetts Problem Gambling Helpline

| Field | Value |
|---|---|
| **Name** | Massachusetts Problem Gambling Helpline |
| **Phone** | 1-800-327-5050 |
| **Text** | Text GAMB to 800327 |
| **Website** | gamblinghelplinema.org |
| **Hours** | 24/7 |
| **Cost** | Free |

### GameSense Info Centers

In addition to the statewide helpline, Massachusetts operates **GameSense Info Centers** at all three licensed casinos. These provide in-person responsible gambling information, tool enrollment, and VSE application assistance.

### Display rules

#### Land-based display

Under 205 CMR 138 (Internal Controls), casino licensees must post responsible gambling information per their Commission-approved internal controls plan. GameSense Info Centers serve as the primary on-site resource.

#### Sports wagering display

Under **205 CMR 256.06(2)**, all sports wagering advertising must include the helpline link and phone number **using language provided by the Department of Public Health (DPH)**.

Under **205 CMR 233.02(2)**, the link to the VSE program must be **prominently displayed** on any mobile app or digital platform used for sports wagering.

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call 1-800-327-5050."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support — 24/7. For any question about gambling.
> **Call 1-800-327-5050** | **Text GAMB to 800327** | **gamblinghelplinema.org**

Both meet Massachusetts requirements. The second version provides multiple contact options and frames the helpline as available for any question (not only crisis).

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Messaging regime summary

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| **Casino — general signage** | Obligation-based | Post RG information per Commission-approved internal controls | 205 CMR 138 |
| **Sports wagering — advertising** | Standard-based | Include helpline link + phone in ALL ads using DPH-provided language, with prescribed font sizing | 205 CMR 256.06(2), 256.06(4) |
| **Sports wagering — digital platform** | Obligation-based | Prominent VSE link on mobile app/digital platform | 205 CMR 233.02(2) |

**Obligation types explained:**
- **Verbatim** — exact prescribed text that must appear word-for-word
- **Obligation-based** — must post information meeting a described standard, but no prescribed wording
- **Standard-based** — must display specific items (e.g., helpline name, program name) but surrounding copy is flexible

### Verbatim required statements

No verbatim prescribed statement has been identified in the Massachusetts regulations. However, 205 CMR 256.06(2) requires sports wagering ads to include helpline information **"using language provided by the Department of Public Health"** — operators must obtain the current DPH-approved language and display it as provided.

### Obligation-based requirements

| Obligation | What must be communicated | Where | Source |
|---|---|---|---|
| Casino RG information | Problem gambling information per internal controls plan | Gaming areas, per approved plan | 205 CMR 138 |
| Sports wagering helpline | Helpline link + phone using DPH language | ALL sports wagering advertising | 205 CMR 256.06(2) |
| VSE link | Prominent link to self-exclusion program | Mobile app / digital platform | 205 CMR 233.02(2) |

### Font size requirements for RG messaging in sports wagering ads

Massachusetts prescribes **specific font-size minimums** for responsible gambling messaging in sports wagering advertising (205 CMR 256.06(4)):

| Medium | Minimum size requirement | Source |
|---|---|---|
| **Print** | Same size as majority of text OR 2% of the greater dimension of the ad | 256.06(4)(a) |
| **Billboard** | 5% of the greater dimension | 256.06(4)(b) |
| **Digital billboard** | Visible for the entire duration of the ad | 256.06(4)(c) |
| **Video/TV — Option A** | Visible for entire duration of the ad, minimum 2% of screen | 256.06(4)(d) |
| **Video/TV — Option B** | 2% of screen from first wagering reference + dedicated end screen at 8% of screen for last 3 seconds | 256.06(4)(d) |
| **Websites** | Same size as the majority of text on the page | 256.06(4)(e) |

### On-brand integration

Because casino signage has no mandated phrasing, operators have flexibility to use {{PROGRAM_NAME}} messaging natively:

**Generic operator approach:**
> "If gambling is a problem, call 1-800-327-5050."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-800-327-5050** | **Text GAMB to 800327** | gamblinghelplinema.org

For sports wagering advertising, DPH-provided helpline language must appear as specified. Surrounding content can use {{PROGRAM_NAME}} voice as long as the DPH language is unaltered and meets font-size requirements.

**Rules for on-brand integration:**
1. DPH-provided helpline language appears exactly as specified — never paraphrase
2. Casino obligation-based requirements can use full {{PROGRAM_NAME}} voice as long as the obligation is met
3. Give all messaging visual dignity — don't shrink to minimum size
4. Follow with a helpful action whenever possible

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

### Overview

Massachusetts sports wagering advertising rules (205 CMR 256) are among the **most prescriptive in the US**. The operator is responsible for **all advertising by agents and third parties** (256.01(1)).

| Field | Value |
|---|---|
| **Primary regulation** | 205 CMR 256 (Sports Wagering Advertising) |
| **Approach** | Prescriptive — detailed rules covering content, targeting, font sizes, endorsements, and record-keeping |
| **Scope** | Operator responsible for ALL advertising, including by agents and third parties (256.01(1)) |
| **Revenue-sharing affiliates** | **Prohibited** — no revenue-sharing affiliate deals (256.01(3)) |
| **Record retention** | All advertising records retained for 6 years (256.10) |
| **Enforcement** | Commission can require pre-approval of ads after violations (256.11(3)) |

### Prohibited content (205 CMR 256.04)

| Prohibition | Source |
|---|---|
| Unfair or deceptive advertising | 256.04(1) |
| Material conditions not conspicuously specified | 256.04(3) |
| Advising or encouraging specific wagers | 256.04(4) |
| Describing as "free" any promotion requiring patron to risk money | 256.04(5), 256.04(6)(d) |
| Promoting irresponsible or excessive participation | 256.04(6)(a) |
| Suggesting gambling guarantees success | 256.04(6)(b) |
| Implying gambling is risk-free | 256.04(6)(c) |
| Encouraging chasing losses | 256.04(6)(e) |
| Suggesting gambling solves financial or personal problems | 256.04(6)(f) |
| Portraying gambling as a rite of passage | 256.04(6)(g) |
| Advertising on responsible gambling websites | 256.04(6)(j) |

### Minor protection rules (205 CMR 256.05)

| Rule | Details | Source |
|---|---|---|
| **Age statement** | Must state 21+ | 256.05(1) |
| **No targeting under-21** | Cannot target persons under 21 | 256.05(2) |
| **No youth-appealing content** | No imagery, symbols, or language designed to appeal primarily to under-21 | 256.05(3) |
| **Audience threshold** | 25% audience threshold for media outlets; must use age exclusion controls | 256.05(4)(a) |
| **Campus ban** | No advertising on school or college campuses | 256.05(4)(d-e) |
| **Branded merchandise** | No products, clothing, or toys with betting logos designed for under-21 | 256.05(5) |

### Responsible gambling in advertising (205 CMR 256.06)

| Rule | Details | Source |
|---|---|---|
| **No targeting at-risk/problem gamblers** | Cannot target people identified as at-risk or problem gamblers | 256.06(1) |
| **Helpline in ALL ads** | Must include helpline link + phone using DPH-provided language | 256.06(2) |
| **Font size requirements** | See [font size table above](#font-size-requirements-for-rg-messaging-in-sports-wagering-ads) | 256.06(4) |
| **Unsubscribe mechanism** | Must offer unsubscribe option in direct marketing | 256.06(5) |
| **No ads to self-excluded** | Cannot advertise to self-excluded individuals | 256.07 |
| **No saturation advertising** | No saturation advertising at sporting events | 256.08(2) |

### Endorsement rules (205 CMR 256.09)

| Rule | Source |
|---|---|
| No minors in endorsements | 256.09 |
| No persons aged 18-20 (except professional athletes) | 256.09 |
| No collegiate athletes | 256.09 |
| Must disclose financial relationships | 256.01(4) |
| FTC compliance required | 256.09 |

### Required disclosures in all sports wagering advertising

1. **21+** age statement (256.05(1))
2. **Helpline** link and phone number using DPH-provided language (256.06(2))
3. **Financial relationship disclosure** for endorsements (256.01(4))
4. **Full promotion terms** — all material conditions conspicuously specified (256.04(3), 256.04(5))

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion — land-based

### Casino Voluntary Self-Exclusion (205 CMR 133)

| Field | Value |
|---|---|
| **Program name** | Voluntary Self-Exclusion (VSE) |
| **Duration options** | 1 year, 3 years, 5 years, or lifetime (133.04(1)) |
| **Lifetime eligibility** | Only if previously on VSE list for at least 6 months (133.04(1)(d)) |
| **Duration changes** | Cannot decrease; can increase (133.04(2)) |
| **Scope** | Statewide — all Massachusetts licensed casinos |
| **Enrollment method** | Application on Commission website and at designated locations on and off casino premises (133.02(2)) |
| **Designated agents** | Trained and approved by Commission — includes GameSense advisors, health professionals, licensee employees (133.02(3)) |
| **VSE list update frequency** | Every 72 hours (133.02(8)) |
| **Interstate compact** | VSE list shared via interstate compact (133.02(9)) |
| **Source** | 205 CMR 133 |

### Reinstatement (Casino VSE)

| Field | Value |
|---|---|
| **Auto-removal** | No — remain on list after expiration until petition for removal is approved (133.04(3)) |
| **Reinstatement session** | Required — includes review of risks, budget setting, problem gambling resources (133.04(5)) |

### Licensee responsibilities (205 CMR 133.06)

| Obligation | Details | Source |
|---|---|---|
| **Eject from gaming area** | Must eject VSE individuals from gaming areas | 133.06 |
| **Notify Commission** | Must notify Commission of encounters | 133.06 |
| **Cease marketing** | No marketing within 30 days of receiving notice | 133.06 |
| **Deny comp/credit/cashless/check-cashing** | Must deny comps, credit, cashless wagering, and check-cashing | 133.06 |
| **Confiscate winnings** | Winnings confiscated and paid to Gaming Revenue Fund within 45 days | 133.06 |
| **Compliance plan** | Required 60 days before casino opening | 133.06(9) |

### Sanctions for violations

License may be conditioned, suspended, or revoked; civil administrative penalties may be imposed (133.07).

---

## Self-exclusion — sports wagering

### Sports Wagering Voluntary Self-Exclusion (205 CMR 233)

| Field | Value |
|---|---|
| **Program name** | Voluntary Self-Exclusion (VSE) |
| **Duration options** | Same as casino VSE — 1 year, 3 years, 5 years, or lifetime (references 133.04(1)) |
| **VSE list update frequency** | Every 24 hours (233.02(4)) — stricter than casino 72-hour requirement |
| **VSE link** | Must be prominently displayed on mobile app/digital platform (233.02(2)) |
| **Compliance plan** | Required 30 days before accepting wagers (233.06(6)) |
| **Annual review** | Annual review of compliance policy required (233.06(7)) |
| **Winnings confiscation** | Confiscated winnings paid to Sports Wagering Fund (233.06(4)) |
| **Reinstatement** | Same requirements as casino VSE (references 133.04) |
| **Source** | 205 CMR 233 |

### Key differences: Casino vs. Sports Wagering VSE

| Feature | Casino (205 CMR 133) | Sports Wagering (205 CMR 233) |
|---|---|---|
| **List update frequency** | 72 hours | 24 hours |
| **Compliance plan deadline** | 60 days before opening | 30 days before accepting wagers |
| **Annual compliance review** | Not specified | Required (233.06(7)) |
| **Confiscated winnings fund** | Gaming Revenue Fund | Sports Wagering Fund |
| **Digital platform VSE link** | N/A | Required — prominently displayed (233.02(2)) |

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Step away from gambling" | "Voluntary Self-Exclusion" | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" / "Voluntary Self-Exclusion program" | Per 205 CMR 133 / 233 | Legal documents, formal enrollment, support referrals |
| Website/app | "Need a break from gambling?" | "Self-Exclusion program" | On the self-exclusion enrollment page itself |
| Print/signage | "Need a break from gambling?" | "Voluntary Self-Exclusion" | Venue self-exclusion information areas |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: What is Massachusetts Voluntary Self-Exclusion (VSE)?**
>
> VSE is Massachusetts's statewide self-exclusion program administered by the Gaming Commission. Players can exclude themselves for 1, 3, or 5 years, or for life (lifetime requires 6 months of prior enrollment). During exclusion, they cannot enter gaming areas at any Massachusetts casino, and sports wagering operators must close their accounts. Players remain on the list even after their period expires — they must petition for removal and complete a reinstatement session. If a player asks about it, explain the options and offer to help them get started. Use "take a break" in casual conversation, "Voluntary Self-Exclusion" when referring to the specific program. GameSense advisors at all three casinos can help with enrollment.

---

## Player protection — land-based

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| **Problem gambling information posting** | Yes | Per Commission-approved internal controls plan | 205 CMR 138 |
| **Helpline display** | Yes | MA Problem Gambling Helpline: 1-800-327-5050 | 205 CMR 138 |
| **GameSense Info Center** | Yes | On-site at all three licensed casinos | M.G.L. c. 23K |
| **Employee training** | Yes | Staff trained to recognize problem gambling and provide resources | 205 CMR 138 |
| **VSE program** | Yes | Statewide casino VSE per 205 CMR 133 | 205 CMR 133 |
| **Monthly win/loss statements** | Yes | For reward/loyalty cardholders | M.G.L. c. 23K s. 29 |
| **Compliance plan** | Yes | Required 60 days before casino opening | 205 CMR 133.06(9) |

### {{PROGRAM_NAME}} tool messaging — land-based

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| GameSense Info Center | "Questions about how games work? Visit GameSense — on-site, free, no judgment." | Casino floor signage |
| Win/loss statement | "Your monthly play summary is ready. Knowledge is your best bet." | Reward cardholder messaging (M.G.L. c. 23K s. 29) |
| VSE enrollment | "Need a break from gambling? We can set that up. Talk to GameSense or visit massgaming.com." | Casino RG materials (205 CMR 133) |
| Helpline | "Free, confidential support — 24/7. Call 1-800-327-5050 or text GAMB to 800327." | All casino RG touchpoints |

---

## Player protection — sports wagering

### Account management (205 CMR 248)

| Requirement | Details | Source |
|---|---|---|
| **Account creation** | Electronic identity verification with Commission-approved national reference company | 248.04(2) |
| **Knowledge-based authentication** | Required at registration | 248.04(4) |
| **One account per operator** | One account per patron per operator | 248.05 |
| **No credit card deposits** | Deposits by credit card prohibited (directly or indirectly) | 248.10(3) |
| **Multi-factor authentication** | Must be available; required for password reset | 248.07(3) |
| **Account lockout** | Locked after 3 failed login attempts in 30 minutes | 248.07(5) |

### Required responsible gaming limits (205 CMR 248.16)

| Limit type | Required? | Periods | Source |
|---|---|---|---|
| **Deposit limits** | Yes | Daily, weekly, monthly | 248.16(1)(a) |
| **Wager limits** | Yes | Daily, weekly, monthly | 248.16(1)(b) |

**Limit display requirements**: Limits must be displayed before registration, before first deposit, and before first wager (248.16(1)).

**Limit change rules**:
- Restrictive changes (lowering limits): effective **immediately** (248.16(2))
- Relaxing changes (raising limits): effective **next business day after the current period expires** + patron must reaffirm the change (248.16(2))

### Account suspension (205 CMR 248.17)

| Feature | Details | Source |
|---|---|---|
| **Patron-requested suspension** | Minimum 72 hours | 248.17(1)(a) |
| **Reporting** | Monthly list of suspended accounts provided to Commission | 248.17(4) |

### Withdrawal protections (205 CMR 248.12)

| Feature | Details | Source |
|---|---|---|
| **Immediate fund freeze** | Funds frozen immediately upon patron withdrawal request | 248.12(2) |
| **Processing timeline** | Honored within 5 business days (10 if tax paperwork needed) | 248.12(5) |
| **No solicitation** | Withdrawal process must be free of solicitation or promotional offers | 248.12(2), M.G.L. c. 23N s. 4(d)(2)(vi) |

### Account records (205 CMR 248.15)

| Feature | Details | Source |
|---|---|---|
| **Record scope** | Complete records of every deposit, withdrawal, wager, and payout | 248.15 |
| **Patron access** | 1-year account history available upon request | M.G.L. c. 23N s. 4(d)(2)(iv) |

### Required tools summary

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| **Deposit limits** | Yes | Daily, weekly, monthly | 248.16(1)(a) |
| **Wager limits** | Yes | Daily, weekly, monthly | 248.16(1)(b) |
| **Account suspension** | Yes | Patron-requested, minimum 72 hours | 248.17(1)(a) |
| **Self-exclusion** | Yes | VSE per 205 CMR 233, prominently linked on platform | 233.02(2) |
| **Single account** | Yes | One account per patron per operator | 248.05 |
| **No credit card deposits** | Yes | Direct or indirect credit card deposits prohibited | 248.10(3) |
| **Withdrawal without solicitation** | Yes | No promotional offers during withdrawal | 248.12(2) |
| **Account history** | Yes | 1-year history available upon request | M.G.L. c. 23N s. 4(d)(2)(iv) |
| **MFA availability** | Yes | Multi-factor authentication available; required for password reset | 248.07(3) |

### {{PROGRAM_NAME}} tool messaging — sports wagering

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Deposit limits | "Set your deposit limit — daily, weekly, or monthly. Takes 10 seconds." | 248.16(1)(a) — display before registration, first deposit, first wager |
| Wager limits | "Cap your wagers — set a daily, weekly, or monthly limit and play on your terms." | 248.16(1)(b) |
| Account suspension | "Need a breather? Pause your account — 72 hours minimum, your call on how long." | 248.17(1)(a) |
| Self-exclusion | "Need a longer break? Self-exclusion options from 1 year to lifetime." | 205 CMR 233 |
| Account history | "Your last 12 months of play — deposits, wagers, payouts. All in one place." | M.G.L. c. 23N s. 4(d)(2)(iv) |
| Withdrawal | "Cashing out? Funds frozen immediately — no delays, no upsells." | 248.12(2) |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 21+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.united-states-massachusetts` |
| **`{{MIN_AGE}}` token value** | 21 |
| **Statutory basis** | M.G.L. c. 23K (casino); M.G.L. c. 23N (sports wagering) |

### Land-based verification

| Requirement | Details | Source |
|---|---|---|
| **Method** | Government-issued photo ID | M.G.L. c. 23K |
| **Acceptable ID** | Valid government-issued photo identification | M.G.L. c. 23K |

### Interactive verification (Sports Wagering)

| Requirement | Details | Source |
|---|---|---|
| **Identity verification** | Electronic verification with Commission-approved national reference company | 205 CMR 248.04(2) |
| **Knowledge-based authentication** | Required at account creation | 205 CMR 248.04(4) |
| **One account per operator** | Prevents duplicate/underage registrations | 205 CMR 248.05 |
| **Account lockout** | 3 failed login attempts in 30 minutes triggers lockout | 205 CMR 248.07(5) |

### Age messaging

All collateral in Massachusetts must display `21+` age notice:

> "You must be 21+ to gamble."

Sports wagering advertising must state 21+ per 205 CMR 256.05(1). This replaces the default `{{MIN_AGE}}+` token with `21+` for all Massachusetts-deployed content.

---

## AML/KYC

### FinCEN/BSA requirements

Massachusetts casinos are classified as **financial institutions** under the Bank Secrecy Act (BSA) and must comply with FinCEN regulations:

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Currency Transaction Report (CTR)** | $10,000+ (single transaction or aggregate in 24 hours) | Player must provide ID; transaction reported to FinCEN |
| **Suspicious Activity Report (SAR)** | Any amount | No direct player notification — internal reporting |
| **Player identification (casino)** | $10,000+ cash transactions | Government-issued photo ID required |
| **Player identification (sports wagering)** | All accounts | Full electronic identity verification per 205 CMR 248.04(2) |
| **Source of funds** | Large or unusual transactions | Player may be asked about the origin of funds |

### Sports wagering account verification

Sports wagering operators must verify patron identity at account creation using a **Commission-approved national reference company** (205 CMR 248.04(2)), with **knowledge-based authentication questions** (205 CMR 248.04(4)). This serves both AML/KYC and age-verification purposes.

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "Federal law requires us to verify your identity for transactions of $10,000 or more."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required by federal law. If we ask about a large transaction, it's a standard process that applies to everyone at every casino in the US."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Massachusetts-specific adaptations.

| Category | Collateral | Verticals | Adaptation required | Token |
|---|---|---|---|---|
| **Digital** | Website footer | Both | MA helpline: 1-800-327-5050, Text GAMB to 800327, gamblinghelplinema.org + 21+ + on-brand RG message | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Both | Set to 21+ | `{{MIN_AGE}}` = 21 |
| **Digital** | Sports wagering app | Interactive | Prominent VSE link (233.02(2)); deposit/wager limits displayed before registration/first deposit/first wager (248.16(1)); helpline with DPH language and font-size compliance (256.06) | Multiple tokens |
| **Digital** | Self-exclusion page | Both | Explain statewide VSE model; separate casino vs. sports wagering paths; link to MGC enrollment | — |
| **Digital** | Deposit screen | Interactive | Helpline + on-brand message; deposit limit option prominently displayed; no credit card deposits (248.10(3)) | `{{HELPLINE_NUMBER}}` |
| **Digital** | Withdrawal screen | Interactive | No solicitation or promotional offers during withdrawal (248.12(2)) | — |
| **Digital** | Social media bio | Both | Include 1-800-327-5050, 21+ | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email templates | Both | Helpline + on-brand RG message in every email; unsubscribe mechanism in direct marketing (256.06(5)) | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | Both | MA helpline (all contact methods), 21+ notice | All tokens |
| **Print** | Rack card | Land-based | Helpline, on-brand message, GameSense reference | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Land-based | Helpline + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | Both | 1-800-327-5050, Text GAMB to 800327, gamblinghelplinema.org | All helpline tokens |
| **Print** | Sports wagering ads | Interactive | RG message same size as majority text OR 2% of greater dimension (256.06(4)(a)) | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Gaming areas | Land-based | RG info + helpline per internal controls plan; GameSense Info Center signage | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Billboard | Both | RG message at 5% of greater dimension (256.06(4)(b)) | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | Land-based | On-brand RG message in rotation, helpline | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot | Both | RG message visible entire time (2% min) OR from first wagering reference + dedicated end screen (2% during + 8% end screen, last 3 seconds) per 256.06(4)(d) | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Both | Spoken helpline reference | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Conversation scripts | Both | MA helpline in all referral scripts; VSE enrollment in scripts; GameSense referral | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Both | Add MA VSE Q&A (casino + sports wagering), update helpline to MA number, add GameSense reference | — |

For a detailed collateral adaptation guide, see the [collateral adaptation template](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Massachusetts:

```yaml
# --- HELPLINES -------------------------------------------
helplines:
  united-states:
    massachusetts:
      number: "1-800-327-5050"
      text_number: "Text GAMB to 800327"
      website: "gamblinghelplinema.org"
      label: "Massachusetts Problem Gambling Helpline"
      hours: "24/7"
      gamesense: true
      gamesense_venues:
        - "MGM Springfield"
        - "Encore Boston Harbor"
        - "Plainridge Park Casino"
      notes: "State-specific helpline; GameSense Info Centers at all three casinos"

# --- LEGAL -----------------------------------------------
legal:
  minimum_gambling_age:
    united-states-massachusetts: 21

# --- MESSAGING -------------------------------------------
messaging:
  mandatory:
    united-states-massachusetts-general: |
      # No verbatim prescribed statement.
      # Casino: obligation-based — post RG info per internal controls (205 CMR 138).
      # Sports wagering ads: standard-based — include helpline using
      # DPH-provided language with prescribed font sizing (205 CMR 256.06).
      # Obtain current DPH-approved language before deployment.
```

Note: Massachusetts does not prescribe a verbatim responsible gambling statement in its regulations. Casino signage is obligation-based (205 CMR 138). Sports wagering advertising must use DPH-provided helpline language (205 CMR 256.06(2)) — operators must obtain this language directly from the Department of Public Health.

Also see the full [US config overrides](../_brand-us.yml) for the complete state structure.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Massachusetts.

### Regulatory
- [ ] Confirmed Massachusetts Gaming Commission (MGC) as primary regulator
- [ ] Understood dual-statute framework (Chapter 23K casino + Chapter 23N sports wagering)
- [ ] Verified legal gambling age: 21+ for all products
- [ ] Reviewed permitted products table (no online casino)
- [ ] Identified whether deployment is land-based casino, sports wagering, or both
- [ ] Reviewed M.G.L. c. 23K, M.G.L. c. 23N, and applicable 205 CMR regulations

### Helpline
- [ ] MA Problem Gambling Helpline displayed: 1-800-327-5050
- [ ] Text option displayed: Text GAMB to 800327
- [ ] Website displayed: gamblinghelplinema.org
- [ ] Helpline posted per internal controls plan (casino)
- [ ] Helpline included in ALL sports wagering advertising using DPH-provided language (256.06(2))
- [ ] Font-size requirements met for sports wagering ads (256.06(4))
- [ ] GameSense Info Center referenced in casino materials where appropriate

### Messaging
- [ ] Casino: RG information posted per Commission-approved internal controls (205 CMR 138)
- [ ] Sports wagering: DPH-provided helpline language obtained and implemented in all advertising
- [ ] Sports wagering: font-size requirements verified for each ad medium (print, billboard, video, website)
- [ ] 21+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Massachusetts values

### Advertising (Sports Wagering — 205 CMR 256)
- [ ] Operator responsible for all advertising by agents and third parties (256.01(1))
- [ ] No revenue-sharing affiliate deals (256.01(3))
- [ ] Financial relationships disclosed in endorsements (256.01(4))
- [ ] No unfair or deceptive advertising (256.04(1))
- [ ] Material conditions conspicuously specified (256.04(3))
- [ ] No advising/encouraging specific wagers (256.04(4))
- [ ] Promotion terms fully disclosed; "free" promotions accurately described (256.04(5), 256.04(6)(d))
- [ ] No promotion of irresponsible/excessive participation (256.04(6)(a))
- [ ] No guaranteed success claims (256.04(6)(b))
- [ ] No risk-free implications (256.04(6)(c))
- [ ] No encouragement of loss-chasing (256.04(6)(e))
- [ ] No suggestions gambling solves problems (256.04(6)(f))
- [ ] No portrayal of gambling as rite of passage (256.04(6)(g))
- [ ] No ads on responsible gambling websites (256.04(6)(j))
- [ ] 21+ stated in all ads (256.05(1))
- [ ] No targeting under-21 (256.05(2)); no youth-appealing imagery/symbols/language (256.05(3))
- [ ] 25% audience threshold enforced; age exclusion controls used (256.05(4)(a))
- [ ] No school/college campus advertising (256.05(4)(d-e))
- [ ] No under-21-targeted branded merchandise (256.05(5))
- [ ] No targeting at-risk/problem gamblers (256.06(1))
- [ ] Unsubscribe mechanism in direct marketing (256.06(5))
- [ ] No advertising to self-excluded individuals (256.07)
- [ ] No saturation advertising at sporting events (256.08(2))
- [ ] Endorsement rules met: no minors, no 18-20 (except pro athletes), no collegiate athletes, FTC compliance (256.09)
- [ ] All advertising records retained for 6 years (256.10)

### Self-exclusion — Casino (205 CMR 133)
- [ ] VSE enrollment available on Commission website and at designated locations (133.02(2))
- [ ] Designated agents trained and approved by Commission (133.02(3))
- [ ] VSE list updated every 72 hours (133.02(8))
- [ ] Licensee responsibilities implemented: eject, notify, cease marketing (within 30 days), deny comp/credit/cashless/check-cashing, confiscate winnings (133.06)
- [ ] Confiscated winnings process to Gaming Revenue Fund within 45 days (133.06)
- [ ] Compliance plan submitted 60 days before opening (133.06(9))
- [ ] Interstate compact sharing configured (133.02(9))
- [ ] Reinstatement session process defined (133.04(5))
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language

### Self-exclusion — Sports Wagering (205 CMR 233)
- [ ] VSE link prominently displayed on mobile app/digital platform (233.02(2))
- [ ] VSE list updated every 24 hours (233.02(4))
- [ ] Compliance plan submitted 30 days before accepting wagers (233.06(6))
- [ ] Annual review of compliance policy scheduled (233.06(7))
- [ ] Confiscated winnings process to Sports Wagering Fund (233.06(4))
- [ ] Reinstatement requirements per 133.04 implemented

### Player protection — Casino
- [ ] GameSense Info Center operational at venue
- [ ] Monthly win/loss statements available for reward cardholders (M.G.L. c. 23K s. 29)
- [ ] Employee training program implemented per internal controls
- [ ] Problem gambling information posted per internal controls plan

### Player protection — Sports Wagering (205 CMR 248)
- [ ] Electronic identity verification at account creation (248.04(2))
- [ ] Knowledge-based authentication implemented (248.04(4))
- [ ] One account per patron per operator enforced (248.05)
- [ ] No credit card deposits (directly or indirectly) (248.10(3))
- [ ] Multi-factor authentication available; required for password reset (248.07(3))
- [ ] Account locked after 3 failed logins in 30 minutes (248.07(5))
- [ ] Deposit limits: daily, weekly, monthly (248.16(1)(a))
- [ ] Wager limits: daily, weekly, monthly (248.16(1)(b))
- [ ] Limits displayed before registration, first deposit, first wager (248.16(1))
- [ ] Restrictive limit changes effective immediately (248.16(2))
- [ ] Relaxing limit changes: next business day after period expires + patron reaffirmation (248.16(2))
- [ ] Patron-requested account suspension: minimum 72 hours (248.17(1)(a))
- [ ] Monthly suspended account list reported to Commission (248.17(4))
- [ ] Withdrawal funds frozen immediately upon request (248.12(2))
- [ ] Withdrawals honored within 5 business days (10 if tax paperwork needed) (248.12(5))
- [ ] Withdrawal process free of solicitation/promotion (248.12(2))
- [ ] 1-year account history available to patron upon request (M.G.L. c. 23N s. 4(d)(2)(iv))

### Age verification
- [ ] 21+ age verification at all gambling touchpoints
- [ ] Casino: government-issued photo ID checked
- [ ] Sports wagering: electronic identity verification per 248.04(2)
- [ ] Sports wagering: knowledge-based authentication per 248.04(4)

### AML/KYC
- [ ] FinCEN/BSA compliance program in place
- [ ] CTR filing procedures for $10,000+ transactions
- [ ] SAR filing procedures operational
- [ ] Sports wagering: electronic identity verification serves AML/KYC function (248.04(2))
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] Staff FAQ updated with MA VSE Q&A (casino + sports wagering)
- [ ] Conversation scripts updated with MA helpline and GameSense references
- [ ] AML/KYC player-facing messaging uses {{PROGRAM_NAME}} voice
- [ ] Sports wagering app: VSE link prominent, limits displayed pre-registration, helpline with DPH language

### Governance
- [ ] `_brand.yml` updated with Massachusetts values (helpline, age, messaging notes)
- [ ] `_brand-us.yml` reviewed
- [ ] `Last verified` date set on this module
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [United States overview](../README.md) | [US config overrides](../_brand-us.yml) | [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [Advertising rules](advertising-rules.md)*
