---
content_type: jurisdiction-module
title: "Nevada — Compliance Module"
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
adaptation_status: base
adaptation_notes: |
  Nevada module is written for the US market (peer/individual/irreverent/
  blunt/open). On-brand messaging examples throughout need adaptation
  for non-US deployments. Currency is USD. Helpline numbers are US
  national (NCPG). Self-exclusion is property-by-property — unique to
  Nevada. AGA code references are US-specific.
last_updated: 2026-02-22
---

# Nevada — Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Nevada. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch. Nevada has no mandatory verbatim messaging (unlike BC's "Know your limit, play within it") but does require prominent posting of problem gambling information and helpline numbers under Regulation 5.170. Nevada uses a property-by-property self-exclusion model — there is no centralized statewide program.

> **Last verified**: 2026-02-22
> **Next review due**: 2026-05-22 *(quarterly, per [governance cadence](../../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory authority](#regulatory-authority) | NGCB + NGC two-tier structure |
| [Legal requirements](#legal-requirements) | 21+, permitted products, licensing |
| [Helpline](#helpline) | NCPG national helpline, all three accepted numbers |
| [Messaging requirements](#messaging-requirements) | No verbatim mandate — what IS required |
| [Advertising restrictions](#advertising-restrictions) | Principles-based standard (Reg 5.011(4)) |
| [Self-exclusion](#self-exclusion) | Property-by-property model (Reg 5.170) |
| [Player protection tools](#player-protection-tools) | Land-based vs. interactive gaming |
| [Age verification](#age-verification) | 21+ requirements |
| [AML/KYC](#amlkyc) | FinCEN/BSA requirements, pending Reg 5/25 amendments |
| [Collateral adaptation](#collateral-adaptation) | Quick reference for all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | Config values to add |
| [Compliance checklist](#compliance-checklist) | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Regulatory model** | Two-tier: NGCB (investigates/enforces) + NGC (decides/approves) |
| **Investigative body** | Nevada Gaming Control Board (NGCB) |
| **Decision body** | Nevada Gaming Commission (NGC) |
| **Governing legislation** | Nevada Revised Statutes (NRS) Chapter 463 — Nevada Gaming Control Act |
| **Regulations** | Nevada Gaming Commission Regulations (Chapters 1–27) |
| **Established** | 1955 (oldest state gaming regulatory framework in the US) |

### Two-tier structure

Nevada's regulatory framework uses a **two-tier system** that separates investigation/enforcement from decision-making:

| Body | Role | Key functions |
|---|---|---|
| **NGCB** (Nevada Gaming Control Board) | Investigates and enforces | Licensing investigations, audits, compliance inspections, enforcement actions, regulation recommendations |
| **NGC** (Nevada Gaming Commission) | Decides and approves | Final licensing decisions, regulation adoption, appeals, policy |

### How the two tiers work

1. **NGCB investigates** — conducts background checks, financial audits, and compliance reviews on all applicants and licensees
2. **NGCB recommends** — presents findings and recommendations to the NGC
3. **NGC decides** — approves, denies, or conditions licenses and regulatory changes
4. **NGCB enforces** — monitors ongoing compliance and takes enforcement action

This separation is designed to ensure independence — the body that investigates does not make the final decision.

### Key divisions within NGCB

| Division | Relevance to {{PROGRAM_NAME}} |
|---|---|
| **Enforcement** | Monitors advertising compliance, responsible gaming obligations |
| **Technology** | Approves interactive gaming platforms, reviews technical standards |
| **Investigations** | Licensing background checks — not directly relevant to {{PROGRAM_NAME}} content |
| **Tax and License** | Revenue reporting — not directly relevant to {{PROGRAM_NAME}} content |

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 21+ (all gambling products — no exceptions) |
| **Legal framework** | State-licensed operators under NRS Chapter 463 |
| **Online gambling** | Online poker legal (since 2013); mobile sports betting legal (in-person registration required); online casino NOT legal |
| **Lottery** | Constitutionally prohibited (Nevada Constitution, Article 4, § 24) |

### Permitted products

| Product | Legal status | Regulator | Notes |
|---|---|---|---|
| Casino (slots, table games) | Legal | NGCB/NGC | Nevada's primary gambling industry; ~200 nonrestricted licensees |
| Sports betting | Legal | NGCB/NGC | Land-based and mobile; in-person registration required for mobile accounts |
| Online poker | Legal | NGCB/NGC | Legal since 2013 under AB 114; interstate compact with Delaware |
| Online casino | **Not legal** | — | Not authorized under current Nevada law |
| Lottery | **Constitutionally prohibited** | — | Nevada Constitution prohibits state lotteries |
| Horse racing (pari-mutuel) | Legal | Nevada Racing Commission | Separate regulatory body |
| Charitable gaming | Legal (limited) | NGCB/NGC | Bingo, raffles for qualified organizations |

### Licensing model

Nevada uses a **detailed licensing system**:

| License type | Description |
|---|---|
| **Nonrestricted** | Full casino operations (15+ slot machines or any table games) |
| **Restricted** | Limited slot operations (up to 15 machines, no table games) — bars, grocery stores, etc. |
| **Interactive gaming** | Online poker and mobile sports betting operators |
| **Manufacturer/Distributor** | Gaming equipment manufacturers and distributors |
| **Service provider** | Companies providing services to licensees |

### Key regulatory notes

- Nevada operates a **licensing model**, not a monopoly model — multiple private operators hold licenses
- This differs from BC's BCLC monopoly — in Nevada, {{PROGRAM_NAME}} may be deployed by any licensed operator
- Operators must be licensed by NGCB/NGC before offering any gambling product
- {{PROGRAM_NAME}} content itself does not require a license, but the operator deploying it must be licensed

---

## Helpline

### NCPG national helpline

Nevada does not operate a separate state gambling helpline. Operators use the **NCPG national helpline**:

| Field | Value |
|---|---|
| **Primary number** | 1-800-522-4700 |
| **Vanity number** | 1-800-GAMBLER |
| **New branded number** | 1-800-MY-RESET (January 2026) |
| **Text support** | Text "SUPPORT" to 53342 |
| **Online chat** | www.ncpgambling.org/chat |
| **Hours** | 24/7 |
| **Cost** | Free |
| **Regulatory reference** | NGCB Notice 2026-04 — all three numbers accepted |

### Nevada Council on Problem Gambling

| Field | Value |
|---|---|
| **Organization** | Nevada Council on Problem Gambling (NCPG-NV) |
| **Website** | www.nevadacouncil.org |
| **Role** | State-level advocacy, education, and referral (nonprofit) |
| **Relationship** | Affiliate of the national NCPG; not a regulator |

The Nevada Council on Problem Gambling is a **nonprofit** organization — it is not a state agency and does not operate a separate helpline. It provides education, training, and advocacy within Nevada and refers to the national NCPG helpline.

### Display rules

Under **Regulation 5.170**, Nevada licensees must:

- **Prominently post** problem gambling information and the gambling helpline number
- Post information in areas accessible to patrons (casino floor, near ATMs, at cage)
- Make information about self-exclusion available to patrons who request it
- Train employees to provide information about problem gambling resources

### Helpline number transition

As of January 2026, NCPG has rebranded to **1-800-MY-RESET**. Per **NGCB Notice 2026-04**:

| Number | Status | Recommendation |
|---|---|---|
| 1-800-MY-RESET | New primary (2026) | Use as the prominently displayed number going forward |
| 1-800-522-4700 | Still active | Acceptable for compliance; retain as secondary |
| 1-800-GAMBLER | Still active | Acceptable for compliance; widely recognized |

**{{PROGRAM_NAME}} recommendation**: Display **1-800-GAMBLER** as primary (most widely recognized and commonly required), with **1-800-MY-RESET** as the updated branded number. Include both where space permits.

### On-brand helpline display

**Bare compliance** (what most operators do):
> "If you or someone you know has a gambling problem, call 1-800-GAMBLER."

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> Free, confidential support — 24/7. For any question about gambling.
> **Call 1-800-GAMBLER** | **1-800-MY-RESET** | **Chat at ncpgambling.org**

Both meet the Regulation 5.170 requirement. The second version provides multiple contact options, frames the helpline as available for any question (not only crisis), and includes the updated branded number.

*Pattern from: [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### No verbatim mandatory messaging

| Field | Value |
|---|---|
| **Verbatim required statement** | **None** — Nevada does not require a specific word-for-word message |
| **What IS required** | Prominent posting of problem gambling information and helpline number (Reg 5.170) |
| **Contrast with BC** | BC requires "Know your limit, play within it." (exact wording); Nevada requires information posting but no specific phrasing |

### What Regulation 5.170 requires

Nevada's approach is **obligation-based rather than message-based**. Operators must:

1. **Post problem gambling information** prominently in gambling areas
2. **Display the helpline number** (1-800-GAMBLER / 1-800-MY-RESET / 1-800-522-4700)
3. **Make self-exclusion information available** to patrons who request it
4. **Train employees** to recognize signs of problem gambling and provide resources

The regulation does not prescribe what the information must say — only that it must be prominent, visible, and available.

### On-brand integration

Because Nevada has no mandated phrasing, operators have flexibility to use {{PROGRAM_NAME}} messaging natively:

**Generic operator approach:**
> "If gambling is a problem, call 1-800-GAMBLER."

**{{PROGRAM_NAME}} on-brand approach:**
> **Play on your terms.** Set your limits. Know the odds. And if you ever want to talk, free confidential support is available 24/7.
> **1-800-GAMBLER** | **1-800-MY-RESET** | ncpgambling.org

**{{PROGRAM_NAME}} venue signage:**
> **Every game has math. Here's yours.** Your session, your budget, your call. Tools and info available at the cage or at {{PROGRAM_NAME}}.
> Need to talk? **1-800-GAMBLER** — free, confidential, 24/7.

This flexibility is a significant advantage — {{PROGRAM_NAME}} content in Nevada can fully express its brand voice without the constraint of working around a mandatory statement.

### Placement guidance

Although Nevada does not mandate specific placements the way BC does, Regulation 5.170 requires prominent posting. {{PROGRAM_NAME}} recommends:

| Touchpoint | Recommended placement | Notes |
|---|---|---|
| Website / app | Footer of every page, deposit screen, account settings | Helpline + on-brand RG message |
| Social media | Profile/bio | Helpline number |
| Print collateral | Back panel or footer | Helpline + on-brand message |
| Venue signage | Entry, floor, near ATMs, at cage | Helpline + problem gambling info |
| TV/video | End card (3+ seconds) | Helpline |
| Radio | Spoken helpline reference | At normal pace |
| Email | Footer of every email | Helpline + on-brand message |

---

## Advertising restrictions

### Nevada's principles-based standard

Nevada's advertising regulation takes a **principles-based approach** rather than the prescriptive rules found in jurisdictions like BC or the UK.

| Field | Value |
|---|---|
| **Primary regulation** | NGC Regulation 5.011(4) |
| **Standard** | Advertising must conform to "decency, dignity, good taste, honesty, and inoffensiveness" |
| **Approach** | Principles-based — no itemized list of prohibited content |
| **Enforcement** | NGCB Enforcement Division reviews complaints and may initiate action |

### Regulation 5.011(4)

The full regulatory language:

> All advertising and marketing materials used by a licensee must conform to prevailing community standards of decency, dignity, good taste, honesty, and inoffensiveness.

This is deliberately broad — it gives NGCB/NGC flexibility to evaluate advertising on a case-by-case basis rather than against a checklist.

### Practical interpretation

While the regulation is principles-based, NGCB has historically enforced it to mean:

| Principle | Practical application |
|---|---|
| **Decency** | No sexually explicit or gratuitously violent imagery |
| **Dignity** | Advertising treats gambling as entertainment, not desperation |
| **Good taste** | No content that reasonable people would find offensive |
| **Honesty** | No misleading claims about odds, winnings, or guaranteed outcomes |
| **Inoffensiveness** | No content targeting vulnerable populations or trivializing problem gambling |

### Additional restrictions

| Rule | Source | Details |
|---|---|---|
| **No targeting minors** | NRS 463.0129 (public policy) | Advertising must not appeal to persons under 21 |
| **No targeting self-excluded** | Reg 5.170 | Marketing to property self-excluded patrons is prohibited |
| **Honest odds claims** | Reg 5.011(4) | Any reference to odds, probabilities, or winning must be accurate |
| **FTC compliance** | Federal | Standard truth-in-advertising rules apply to all gambling advertising |

For a detailed advertising reference, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

### Property-by-property model

| Field | Value |
|---|---|
| **Model** | Property-by-property (each casino/operator separately) |
| **Centralized state program** | **None** — Nevada does not operate a statewide self-exclusion registry |
| **Regulatory basis** | NGC Regulation 5.170 |
| **Typical durations** | 1 year, 5 years, lifetime (varies by property) |
| **Scope** | Individual property or operator group only |
| **Contrast with BC** | BC has Game Break (province-wide, all BCLC properties); Nevada requires each property to maintain its own program |

### How Nevada self-exclusion works

1. Player requests exclusion **at a specific property or operator group**
2. Player selects duration (typically 1 year, 5 years, or lifetime — varies by operator)
3. Player is banned from **that property/operator group only** — not from all Nevada casinos
4. Marketing communications from that operator are stopped
5. If the player enters a property they are excluded from, they may be removed and forfeit any winnings
6. To exclude from multiple properties, the player must enroll at **each one separately**

### Why there is no centralized program

Nevada's gaming industry predates modern centralized self-exclusion systems. With ~200 nonrestricted licensees (ranging from major Strip resorts to small rural casinos), the state has historically relied on individual operators to manage their own patron exclusion lists. Efforts to create a centralized registry have been discussed but not enacted.

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Formal term | When to use formal term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break from [property name]" | "Self-exclusion" / "Voluntary exclusion" | Never in Tier 1 — use {{PROGRAM_NAME}} language |
| Tier 2 (formal) | "Self-exclusion" / "Voluntary exclusion program" | "Self-exclusion" per Reg 5.170 | Legal documents, formal enrollment, support referrals |
| Staff training | Both | "Self-exclusion" / "Voluntary exclusion" | When explaining the program and training on enrollment |
| Website/app | "Need a break from playing here?" | "Self-exclusion program" | On the self-exclusion enrollment page itself |
| Print/signage | "Need a break from gambling?" | "Self-exclusion" | Venue self-exclusion information areas |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../../collateral/customer-service/staff-faq.md):

> **Q: How does self-exclusion work in Nevada?**
>
> Nevada uses a property-by-property self-exclusion model — there is no statewide program. A player who wants to self-exclude must enroll at each property or operator group separately. Typical options are 1 year, 5 years, or lifetime (durations vary by operator). When a player self-excludes from our property, they are banned from entering our gambling areas, removed from our marketing lists, and any winnings earned while excluded may be forfeited. Self-exclusion from our property does not affect their ability to visit other Nevada casinos. If a player asks about broader exclusion, explain that they would need to enroll at each property individually — there is no single sign-up that covers all Nevada casinos.
>
> In casual conversation, say "take a break" or "step away for a while." Use "self-exclusion" when referring to the formal program or during enrollment.

### Multi-property operators

Large operators (e.g., MGM Resorts, Caesars Entertainment) typically apply self-exclusion across all properties they own/operate in Nevada. This is an **operator policy**, not a regulatory requirement. {{PROGRAM_NAME}} content should:

- Clarify the scope of exclusion (which properties are covered)
- Note that exclusion at one operator does not cover another operator's properties
- Provide information on how to self-exclude at other properties if the player requests it

---

## Player protection tools

### Land-based gaming (minimal mandate)

Nevada's land-based player protection requirements are minimal compared to jurisdictions like BC:

| Tool | Required in Nevada? | Details |
|---|---|---|
| **Deposit limits** | Not applicable (land-based) | No cash-in limits for walk-in patrons |
| **Session time tracking** | No | Not required; some operators offer voluntarily |
| **Credit/check-cashing self-limitation** | Yes (Reg 5.170) | Players can request to be barred from obtaining credit or cashing checks |
| **Activity statements** | No | Not required for land-based |
| **Self-exclusion** | Yes (property-level) | See [above](#self-exclusion) |
| **Information posting** | Yes (Reg 5.170) | Problem gambling info and helpline must be prominently posted |

### Interactive gaming (Regulation 5A — stronger protections)

Nevada's interactive gaming regulations (Regulation 5A, covering online poker and mobile sports betting) require significantly more player protection than land-based operations:

| Tool | Required? | Details |
|---|---|---|
| **Deposit limits** | Yes | Players must be able to set deposit limits |
| **Play-time / session limits** | Yes | Players must be able to set session duration limits |
| **Buy-in limits** | Yes (online poker) | Players must be able to set buy-in limits |
| **Cool-off periods** | Yes | Temporary account suspension available |
| **Activity statements** | Yes | Play history and transaction records available to players |
| **Self-exclusion** | Yes | From the interactive gaming platform |
| **Responsible gaming information** | Yes | Problem gambling resources prominently displayed |
| **Age verification** | Yes (see [below](#age-verification)) | Identity verified before play |

### {{PROGRAM_NAME}} tool messaging for Nevada

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Credit self-limitation | "Don't want credit at the tables? Tell the cage — it's that simple." | Land-based (Reg 5.170) |
| Deposit limits | "Set your deposit limit — play on your terms. Takes 10 seconds." | Interactive gaming (Reg 5A) |
| Session limits | "Set a session reminder — your dashboard, your rules." | Interactive gaming (Reg 5A) |
| Buy-in limits | "Cap your buy-ins — set it once and play without thinking about it." | Online poker (Reg 5A) |
| Activity dashboard | "Your play stats are ready. No surprises — just the facts." | Interactive gaming (Reg 5A) |
| Self-exclusion | "Need a break from playing here? We can set that up." | Both (Reg 5.170 / Reg 5A) |

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 21+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.united-states-nevada` |
| **`{{MIN_AGE}}` token value** | 21 |
| **Verification (casino floor)** | Government-issued photo ID; checked at entry to gaming areas and/or at table/machine |
| **Verification (interactive gaming)** | Multi-step: SSN-based verification, government-issued ID, 30-day window to complete |
| **Products with different ages** | None — 21+ applies to all gambling in Nevada |

### Interactive gaming age verification (Regulation 5A)

Online poker and mobile sports betting operators must verify age through a **multi-step process**:

| Step | Requirement |
|---|---|
| **Initial registration** | Name, date of birth, SSN (last 4 or full), address |
| **Identity verification** | Automated verification through third-party service (e.g., GDC, Aristotle) |
| **Document backup** | If automated verification fails, government-issued photo ID required |
| **30-day window** | Account may be provisionally active for up to 30 days while verification completes |
| **Geolocation** | Player must be physically located in Nevada during play |

### Acceptable identification

| ID type | Accepted? |
|---|---|
| Nevada driver's license | Yes |
| US passport | Yes |
| US military ID | Yes |
| State-issued ID card (any US state) | Yes |
| Tribal ID | Varies by property |
| Foreign passport | Yes (with additional documentation) |

### Age messaging

All collateral in Nevada must display `21+` age notice:

> "You must be 21+ to gamble."

This replaces the default `{{MIN_AGE}}+` token with `21+` for all Nevada-deployed content.

---

## AML/KYC

### FinCEN/BSA requirements

Nevada casinos are classified as **financial institutions** under the Bank Secrecy Act (BSA) and must comply with FinCEN regulations:

| Requirement | Threshold | Player-facing impact |
|---|---|---|
| **Currency Transaction Report (CTR)** | $10,000+ (single transaction or aggregate in 24 hours) | Player must provide ID; transaction reported to FinCEN |
| **Suspicious Activity Report (SAR)** | Any amount | No direct player notification — internal reporting |
| **Player identification (casino)** | $10,000+ cash transactions | Government-issued photo ID required |
| **Player identification (interactive)** | All accounts | Full identity verification required for account opening |
| **Source of funds** | Large or unusual transactions | Player may be asked about the origin of funds |
| **Record keeping** | $3,000+ (cash purchases of chips, TITO) | Operator must record and retain transaction details |

### Pending Regulation 5 and 25 amendments (February 2026)

NGCB has proposed amendments to **Regulations 5 and 25** that would enhance AML requirements:

| Change | Impact |
|---|---|
| **Individual accountability** | Named compliance officers personally accountable for AML program effectiveness |
| **Enhanced due diligence** | Expanded requirements for high-risk patrons and transactions |
| **Technology requirements** | Updated standards for AML monitoring systems |
| **Training mandates** | More specific employee AML training requirements |

**{{PROGRAM_NAME}} note**: These amendments are pending as of February 2026. Monitor NGCB's regulation tracker for final adoption. They primarily affect back-office compliance operations rather than player-facing content, but operators should ensure {{PROGRAM_NAME}} AML/KYC messaging aligns with any new player-facing disclosure requirements.

### Player-facing messaging

When AML/KYC processes affect players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "Federal law requires us to verify your identity for transactions of $10,000 or more."

**On-brand:**
> "Quick ID check — it keeps your account secure and is required by federal law. If we ask about a large transaction, it's a standard process that applies to everyone at every casino in the US."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Nevada-specific adaptations.

| Category | Collateral | Nevada adaptation | Token/Value |
|---|---|---|---|
| **Digital** | Website footer | NCPG helpline: 1-800-GAMBLER / 1-800-MY-RESET + on-brand RG message | `{{HELPLINE_NUMBER}}` |
| **Digital** | Age gate | Set to 21+ | `{{MIN_AGE}}` = 21 |
| **Digital** | Self-exclusion page | Explain property-by-property model; link to operator's enrollment | — |
| **Digital** | Deposit screen | Helpline + on-brand message (no mandatory statement required) | `{{HELPLINE_NUMBER}}` |
| **Digital** | Social media bio | Include 1-800-GAMBLER | `{{HELPLINE_NUMBER}}` |
| **Digital** | Email footer | Helpline + on-brand RG message in every email | `{{HELPLINE_NUMBER}}` |
| **Print** | Brochure | National helpline (both numbers), 21+ notice | All tokens |
| **Print** | Rack card | Helpline, on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Table tent | Helpline + on-brand message | `{{HELPLINE_NUMBER}}` |
| **Print** | Helpline card | NCPG 1-800-GAMBLER, 1-800-MY-RESET, ncpgambling.org | All helpline tokens |
| **Environmental** | Entry signage | 21+ age notice, helpline, on-brand RG message | `{{MIN_AGE}}`, `{{HELPLINE_NUMBER}}` |
| **Environmental** | Floor / ATM area | Helpline number, problem gambling info | `{{HELPLINE_NUMBER}}` |
| **Environmental** | Digital display | On-brand RG message in rotation, helpline | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | TV spot end card | Helpline (3-second minimum recommended) | `{{HELPLINE_NUMBER}}` |
| **Video/Audio** | Radio spot | Spoken helpline reference | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Scripts | NCPG helpline in all referral scripts, self-exclusion enrollment in scripts | `{{HELPLINE_NUMBER}}` |
| **Customer service** | Staff FAQ | Add property-level self-exclusion Q&A, update helpline to NCPG | — |

### Key difference from BC

Nevada collateral does **not** require a mandatory statement (`{{MANDATORY_STATEMENT}}`). This simplifies adaptation — operators only need to ensure helpline display and age notice. {{PROGRAM_NAME}} on-brand messaging can be used freely without working around required phrasing.

For the detailed collateral adaptation template, see [collateral-adaptation.md](../../_template/collateral-adaptation.md).

---

## `_brand.yml` updates

Add these entries to your `_brand.yml` when deploying in Nevada:

```yaml
# ─── HELPLINES ───────────────────────────────
helplines:
  united-states:
    national:
      number: "1-800-522-4700"
      alternate: "1-800-GAMBLER"
      new_primary: "1-800-MY-RESET"
      text_number: "Text SUPPORT to 53342"
      chat_url: "www.ncpgambling.org/chat"
      website: "www.ncpgambling.org"
      label: "National Council on Problem Gambling"
    nevada:
      number: "1-800-522-4700"
      alternate: "1-800-GAMBLER"
      new_primary: "1-800-MY-RESET"
      website: "www.ncpgambling.org"
      label: "NCPG National Helpline"
      state_resource: "Nevada Council on Problem Gambling"
      state_website: "www.nevadacouncil.org"
      notes: "No separate state helpline — uses NCPG national number"

# ─── LEGAL ───────────────────────────────────
legal:
  minimum_gambling_age:
    united-states-nevada: 21
```

Note: Nevada has **no mandatory messaging token** — there is no `messaging.mandatory.united-states-nevada` entry because no verbatim statement is required.

Also see the full [US config overrides](../_brand-us.yml) for the complete state structure.

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Nevada.

### Regulatory
- [ ] Confirmed NGCB/NGC two-tier regulatory structure
- [ ] Understood licensing model (operator must hold valid Nevada gaming license)
- [ ] Verified legal gambling age: 21+ for all products
- [ ] Reviewed permitted products table (no online casino, no lottery)
- [ ] Reviewed NRS Chapter 463 and relevant NGC Regulations (5, 5A, 5.170)
- [ ] Identified whether deployment is land-based, interactive gaming, or both

### Helpline
- [ ] NCPG helpline displayed prominently per Regulation 5.170
- [ ] All three accepted numbers known (1-800-522-4700, 1-800-GAMBLER, 1-800-MY-RESET)
- [ ] Primary display number selected (1-800-GAMBLER recommended)
- [ ] Helpline displayed in all required areas (casino floor, near ATMs, at cage)
- [ ] Interactive gaming platform displays helpline prominently
- [ ] Nevada Council on Problem Gambling referenced where appropriate

### Messaging
- [ ] Confirmed: no verbatim mandatory statement required in Nevada
- [ ] Problem gambling information prominently posted per Reg 5.170
- [ ] On-brand {{PROGRAM_NAME}} messaging used (not just bare compliance)
- [ ] 21+ age notice on all player-facing content
- [ ] All `{{PLACEHOLDER}}` tokens resolve to Nevada values

### Advertising
- [ ] Advertising content reviewed against Reg 5.011(4) principles ("decency, dignity, good taste, honesty, inoffensiveness")
- [ ] No content targeting or appealing to persons under 21
- [ ] No misleading claims about odds, winning likelihood, or prize amounts
- [ ] No marketing to property self-excluded patrons
- [ ] Interactive gaming advertising reviewed against Reg 5A requirements
- [ ] AGA Responsible Gaming Code of Conduct alignment verified
- [ ] Advertising reviewed per [advertising-rules.md](advertising-rules.md)

### Self-exclusion
- [ ] Property-by-property self-exclusion program in place per Reg 5.170
- [ ] Self-exclusion information available to patrons who request it
- [ ] Self-exclusion enrollment process documented
- [ ] Self-excluded patrons removed from all marketing lists
- [ ] Staff trained on self-exclusion enrollment and patron handling
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} Tier 1/Tier 2 language
- [ ] Staff FAQ updated with Nevada self-exclusion Q&A

### Player protection
- [ ] Credit/check-cashing self-limitation available (Reg 5.170)
- [ ] Interactive gaming: deposit limits implemented (Reg 5A)
- [ ] Interactive gaming: session/play-time limits implemented (Reg 5A)
- [ ] Interactive gaming: buy-in limits implemented for poker (Reg 5A)
- [ ] Interactive gaming: cool-off periods available (Reg 5A)
- [ ] Interactive gaming: activity statements available (Reg 5A)
- [ ] Problem gambling information prominently posted (Reg 5.170)

### Age verification
- [ ] 21+ age verification at all gambling touchpoints
- [ ] Interactive gaming: multi-step verification (SSN, ID, geolocation) per Reg 5A
- [ ] Acceptable ID types documented and staff trained

### AML/KYC
- [ ] FinCEN/BSA compliance program in place
- [ ] CTR filing procedures for $10,000+ transactions
- [ ] SAR filing procedures operational
- [ ] Player-facing AML messaging uses {{PROGRAM_NAME}} voice
- [ ] Monitoring pending Regulation 5/25 amendments (individual accountability)

### Content
- [ ] All collateral adapted per [collateral adaptation table](#collateral-adaptation)
- [ ] Staff FAQ updated with Nevada self-exclusion Q&A
- [ ] Conversation scripts updated with NCPG helpline references
- [ ] AML/KYC player-facing messaging uses {{PROGRAM_NAME}} voice

### Governance
- [ ] `_brand.yml` updated with Nevada values (helpline, age)
- [ ] `_brand-us.yml` reviewed
- [ ] `Last verified` date set on this module
- [ ] `Next review due` date set (quarterly)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained
- [ ] Regulation 5/25 amendment monitoring plan in place

---

*Cross-references: [`_brand.yml`](../../../_brand.yml) | [United States overview](../README.md) | [US config overrides](../_brand-us.yml) | [Messaging Framework — Warning Statement Standards](../../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../../collateral/customer-service/staff-faq.md) | [Governance](../../../brand-book/08-governance.md) | [Advertising rules](advertising-rules.md)*
