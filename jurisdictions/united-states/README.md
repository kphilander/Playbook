# United States — Jurisdiction Overview

> **Operator note**: The United States regulates gambling at the state level. There is no single national regulator, no unified licensing framework, and no federal online gambling law (PASPA was struck down in 2018). Each state determines which forms of gambling are legal, sets licensing requirements, establishes its own legal age, and operates (or delegates) its own regulatory body. This overview covers the federal framework and lists all 50 states plus DC with their key facts. For sub-jurisdiction compliance details, see the individual modules linked below.

> **Last verified**: 2026-02-22
> **Next review due**: 2026-05-22 *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory landscape](#regulatory-landscape) | Federal framework and state-by-state model |
| [Key federal legislation](#key-federal-legislation) | Wire Act, PASPA, IGRA, UIGEA |
| [National helplines](#national-helplines) | NCPG and the 1-800-MY-RESET transition |
| [AGA Responsible Gaming framework](#aga-responsible-gaming-framework) | Industry self-regulatory standards |
| [State structure](#state-structure) | All 50 states + DC with key facts |
| [`_brand.yml` structure](#brandyml-structure) | Restructuring US entries to state sub-entries |

---

## Regulatory landscape

### Federal framework

| Field | Value |
|---|---|
| **National regulator** | None — gambling is regulated by individual states |
| **Federal role** | Sets boundaries via criminal law; does not regulate legal gambling |
| **Regulatory model** | Devolved to states (and tribal nations under IGRA) |
| **Online gambling** | No federal law authorizing or prohibiting state-regulated online gambling (post-PASPA) |

### Overview

Gambling in the United States is primarily a **state matter**. The federal government sets outer boundaries — what types of gambling are prohibited across state lines, how tribal gaming is governed, how financial transactions related to gambling are handled — but leaves the regulation of legal gambling to the states.

There is no equivalent to the UK's Gambling Commission at the national level. Each state has its own regulatory body (or multiple bodies), its own licensing structure, its own permitted products, and its own responsible gambling requirements. Some states (like Nevada) have highly developed frameworks dating back decades; others (like several that legalized sports betting post-2018) are still building their regulatory apparatus.

**Murphy v. NCAA (2018)** struck down the Professional and Amateur Sports Protection Act (PASPA), which had effectively prohibited sports betting outside Nevada. This decision opened the door for states to legalize and regulate sports betting, triggering a rapid expansion — as of early 2026, more than 35 states have legalized some form of sports betting.

For operators deploying {{PROGRAM_NAME}} in the United States, this state-by-state model means:
- **No single set of rules applies nationwide** — you need a compliance module for each state you operate in
- **Helplines, advertising rules, and player protection requirements vary by state** — though many states use the NCPG national helpline
- **The `_brand.yml` should be restructured** from a flat US entry to state sub-entries (see [below](#brandyml-structure))

---

## Key federal legislation

| Legislation | Year | Scope | Relevance to {{PROGRAM_NAME}} |
|---|---|---|---|
| **Wire Act** (18 U.S.C. § 1084) | 1961 | Prohibits use of wire communications for interstate sports betting | Limits cross-state online betting; 2011 DOJ opinion narrowed scope to sports betting only (reversed 2018, then 1st Circuit upheld narrow reading 2019) |
| **IGRA** (Indian Gaming Regulatory Act) | 1988 | Governs gambling on tribal lands; created NIGC | Tribal gaming compacts set separate rules; {{PROGRAM_NAME}} deployment on tribal properties may require additional compliance |
| **PASPA** (Professional and Amateur Sports Protection Act) | 1992–2018 | Prohibited state-authorized sports betting (except NV, OR, DE, MT) | **Struck down** by Supreme Court in *Murphy v. NCAA* (2018); opened sports betting to all states |
| **UIGEA** (Unlawful Internet Gambling Enforcement Act) | 2006 | Prohibits financial institutions from processing unlawful internet gambling transactions | Does not define what is "unlawful" — defers to state law; affects payment processing for online gambling |
| **Bank Secrecy Act / FinCEN** | 1970+ | AML requirements for casinos and card clubs | CTR ($10K+), SAR filing requirements; applies to all US casinos as financial institutions |

### Federal regulatory bodies

| Agency | Role |
|---|---|
| **FinCEN** (Financial Crimes Enforcement Network) | AML/BSA compliance for casinos |
| **NIGC** (National Indian Gaming Commission) | Oversight of tribal gaming operations |
| **DOJ** (Department of Justice) | Enforcement of federal gambling laws (Wire Act, IGRA violations) |
| **FTC** (Federal Trade Commission) | Truth-in-advertising enforcement (applies to gambling ads like all advertising) |
| **IRS** (Internal Revenue Service) | Tax reporting on gambling winnings ($1,200+ slots, $5,000+ poker/other) |

---

## National helplines

### NCPG (National Council on Problem Gambling)

The **National Council on Problem Gambling (NCPG)** operates the primary US gambling helpline. As of January 2026, three numbers are accepted:

| Number | Status | Notes |
|---|---|---|
| **1-800-522-4700** | Active | Legacy number; still widely used and operational |
| **1-800-GAMBLER** | Active | Vanity number; commonly required by state regulators |
| **1-800-MY-RESET** | Active (new, January 2026) | NCPG rebrand; being promoted as the primary number going forward |

**NGCB Notice 2026-04** confirmed that all three numbers are accepted for regulatory compliance in Nevada. Other states are expected to follow. Operators should:
- Display **1-800-GAMBLER** where state regulations specifically require it
- Add **1-800-MY-RESET** as the primary branded helpline going forward
- Keep **1-800-522-4700** as a fallback — it remains the most recognized number

### Other national resources

| Resource | Contact | Description |
|---|---|---|
| **NCPG text line** | Text "SUPPORT" to 53342 | Text-based support |
| **NCPG chat** | www.ncpgambling.org/chat | Online chat support |
| **988 Suicide & Crisis Lifeline** | Call/text 988 | Not gambling-specific; for crisis situations |

### State-specific helplines

Some states operate their own gambling helplines in addition to the national number. When a state has its own helpline, it typically must be displayed alongside or instead of the national number. State-specific helpline requirements are documented in each state's compliance module.

---

## AGA Responsible Gaming framework

The **American Gaming Association (AGA)** publishes a voluntary **Responsible Gaming Code of Conduct** that most major US operators follow. While not law, it represents industry best practices and is often referenced by state regulators.

### Key AGA principles

| Principle | Description |
|---|---|
| **Employee training** | Staff trained to recognize signs of problem gambling and respond appropriately |
| **Responsible advertising** | Advertising should not target minors, mislead about odds, or encourage excessive play |
| **Self-exclusion** | Operators should participate in state self-exclusion programs |
| **Player education** | Provide information about odds, house edge, and responsible play tools |
| **Helpline access** | Gambling helpline information prominently displayed |
| **Underage prevention** | Active measures to prevent underage gambling |

### Relationship to {{PROGRAM_NAME}}

{{PROGRAM_NAME}}'s approach aligns with AGA principles by default — entertainment literacy content, transparent odds information, helpline accessibility, and player tools promotion. Operators deploying {{PROGRAM_NAME}} can reference AGA alignment as part of their responsible gaming program.

---

## State structure

| State | Primary regulator | Legal age | Casino | Sports betting | Online casino | Online poker | Lottery | Module status |
|---|---|---|---|---|---|---|---|---|
| **Nevada** | NGCB / NGC | 21 | Legal | Legal | No | Legal | No (constitutionally prohibited) | [Complete](nevada/) |
| Alabama | — | 21 | No | No | No | No | No | Planned |
| Alaska | — | 21 | No | No | No | No | No | Planned |
| Arizona | ADG | 21 | Tribal | Legal | No | No | Yes | Planned |
| Arkansas | ARC | 21 | Legal (4 casinos) | Legal | No | No | Yes | Planned |
| California | CGCC | 21 (cardrooms), 18 (lottery/racing) | Tribal + cardrooms | No | No | No | Yes | Planned |
| Colorado | DORA/DGE | 21 | Legal | Legal | No | No | Yes | Planned |
| Connecticut | DCP | 21 | Tribal (2) | Legal | Legal | No | Yes | Planned |
| Delaware | DLO | 21 | Legal (3 racinos) | Legal | Legal | Legal | Yes | Planned |
| Florida | DBPR / Seminole | 21 (casinos), 18 (lottery) | Tribal + pari-mutuel | Legal (Seminole) | No | No | Yes | Planned |
| Georgia | GLC | 18 (lottery only) | No | No | No | No | Yes | Planned |
| Hawaii | — | — | No | No | No | No | No | Planned |
| Idaho | ILC / ISP | 18 (lottery/racing) | Tribal | No | No | No | Yes | Planned |
| Illinois | IGB | 21 | Legal | Legal | No | No | Yes | Planned |
| Indiana | IGC | 21 | Legal | Legal | No | No | Yes | Planned |
| Iowa | IRGC | 21 | Legal | Legal | No | No | Yes | Planned |
| Kansas | KRGC | 21 | Legal (4 state-owned) | Legal | No | No | Yes | Planned |
| Kentucky | KHRC / KLC | 21 (racing), 18 (lottery) | No (HHR terminals) | Legal | No | No | Yes | Planned |
| Louisiana | LGCB | 21 | Legal | Legal | No | No | Yes | Planned |
| Maine | GSBME | 21 | Legal (2) | Legal | No | No | Yes | Planned |
| Maryland | MLGCC | 21 | Legal (6) | Legal | No | No | Yes | Planned |
| Massachusetts | MGC | 21 | Legal (3) | Legal | No | No | Yes | Planned |
| Michigan | MGCB | 21 | Legal (tribal + 3 commercial) | Legal | Legal | Legal | Yes | Planned |
| Minnesota | MGRB | 18 (lottery/racing), 21 (tribal) | Tribal | No | No | No | Yes | Planned |
| Mississippi | MGC | 21 | Legal | Legal (in-person) | No | No | Yes | Planned |
| Missouri | MGC | 21 | Legal (13 riverboat) | No | No | No | Yes | Planned |
| Montana | DOJ Gambling Control | 18 | Limited (tavern) | Legal (lottery-run) | No | No | Yes | Planned |
| Nebraska | NGCC | 21 | Legal (6, new 2023+) | No | No | No | Yes | Planned |
| New Hampshire | NHLC | 18 (lottery), 21 (casino) | Legal (2) | Legal | No | No | Yes | Planned |
| New Jersey | DGE/CCC | 21 | Legal (9 Atlantic City) | Legal | Legal | Legal | Yes | Planned |
| New Mexico | NGC | 21 | Tribal + racinos | No | No | No | Yes | Planned |
| New York | NYGC | 21 (casinos), 18 (lottery/racing) | Legal (commercial + tribal) | Legal | Legal (2025+) | No | Yes | Planned |
| North Carolina | NCGS / NCLC | 21 (casinos), 18 (lottery) | Tribal | Legal | No | No | Yes | Planned |
| North Dakota | AG Office | 21 | Tribal | Legal | No | No | Yes | Planned |
| Ohio | OCCC | 21 | Legal (4 + 7 racinos) | Legal | No | No | Yes | Planned |
| Oklahoma | OHRC | 18 (tribal/pari-mutuel) | Tribal | No | No | No | Yes | Planned |
| Oregon | OLCC / OLC | 21 (tribal), 18 (lottery) | Tribal | Legal (lottery-run) | No | No | Yes | Planned |
| Pennsylvania | PGCB | 21 | Legal (16 + mini-casinos) | Legal | Legal | Legal | Yes | Planned |
| Rhode Island | DBR | 18 | Legal (2) | Legal | Legal | No | Yes | Planned |
| South Carolina | — | — (lottery only, 18) | No | No | No | No | Yes (education lottery) | Planned |
| South Dakota | SDCGC | 21 | Legal (Deadwood + tribal) | Legal | No | No | Yes | Planned |
| Tennessee | SGC | 21 (sports only — no casino) | No | Legal (online only) | No | No | Yes | Planned |
| Texas | TLC | 18 (lottery only) | No | No | No | No | Yes | Planned |
| Utah | — | — | No | No | No | No | No | Planned |
| Vermont | DLL | 18 (lottery), 21 (sports) | No | Legal (2025+) | No | No | Yes | Planned |
| Virginia | VDACS / VLC | 21 | Legal (5 planned) | Legal | No | No | Yes | Planned |
| Washington | WSGC | 21 (casinos), 18 (lottery/racing) | Tribal | Legal (tribal, in-person) | No | No | Yes | Planned |
| West Virginia | WVLRC | 21 | Legal (5) | Legal | Legal | Legal | Yes | Planned |
| Wisconsin | DOA/DGC | 21 (tribal) | Tribal | No | No | No | Yes | Planned |
| Wyoming | WGCC | 18 | No | Legal | No | No | No (charitable gaming only) | Planned |
| **DC** | OLG | 18 | No | Legal | No | No | Yes | Planned |

**Legal age notes**:
- **21**: Most states with commercial casinos
- **18**: Some states for lottery, pari-mutuel, and/or tribal gaming only
- **Nevada**: 21 for all gambling (no lottery — constitutionally prohibited)

**Online gambling notes** (as of early 2026):
- **Online casino**: CT, DE, MI, NJ, PA, RI, WV (7 states)
- **Online poker**: DE, MI, NV, NJ, PA, WV (6 states)
- **Online sports betting**: 30+ states

---

## `_brand.yml` structure

### Current state (flat, national-only)

The current `_brand.yml` has a flat US entry with only the national helpline:

```yaml
helplines:
  united-states:
    number: "1-800-522-4700"
    alternate: "1-800-GAMBLER"
    text_number: "Text 800522"
    website: "www.ncpgambling.org"
    label: "National Problem Gambling Helpline"
```

### Recommended structure (state sub-entries)

Restructure to support multiple states while preserving the national entry:

```yaml
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
      notes: "Nevada has no separate state helpline — uses NCPG national number"

legal:
  minimum_gambling_age:
    united-states-nevada: 21
```

This structure scales as new state modules are added. States that have their own helplines get dedicated entries; states that use the national helpline reference it while noting any state-specific resources.

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [Governance — Quarterly Regulatory Check](../../brand-book/08-governance.md) | [Jurisdictions README](../README.md) | [Nevada module](nevada/) | [US config overrides](_brand-us.yml)*
