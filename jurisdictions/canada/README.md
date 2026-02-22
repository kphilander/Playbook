# Canada — Jurisdiction Overview

> **Operator note**: Canada regulates gambling at the provincial level. There is no single national regulator, no national helpline, and no unified licensing framework. Each province and territory operates its own system. This overview covers the federal framework and lists all provinces/territories with their key facts. For sub-jurisdiction compliance details, see the individual modules linked below.

> **Last verified**: 2026-02-22
> **Next review due**: 2026-05-22 *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory landscape](#regulatory-landscape) | Federal framework and provincial model |
| [Canadian Gambling Advertising Code](#canadian-gambling-advertising-code) | National advertising standards (January 2026) |
| [Provincial structure](#provincial-structure) | All provinces/territories with key facts |
| [National helpline situation](#national-helpline-situation) | Why there's no single national helpline |
| [`_brand.yml` structure](#brandyml-structure) | Restructuring Canada entries to provincial sub-entries |

---

## Regulatory landscape

### Federal framework

| Field | Value |
|---|---|
| **National regulator** | None — gambling is provincially regulated |
| **Governing legislation** | Criminal Code of Canada, Part VII (s.207) |
| **Regulatory model** | Devolved to provinces and territories |
| **Online gambling** | Legal through provincial operators; single-event sports betting legal since August 2021 (Bill C-218) |

### Overview

Gambling in Canada is governed by the **Criminal Code of Canada (Section 207)**, which prohibits gambling except where authorized by a province or territory. In practice, this means each of Canada's 13 provinces and territories has its own regulatory body, its own licensing framework, its own legal gambling age, and its own responsible gambling requirements.

The federal government's role is limited to criminal law — it defines what constitutes illegal gambling but leaves the regulation of legal gambling entirely to the provinces. There is no equivalent to the UK's Gambling Commission or Australia's ACMA at the national level.

**Bill C-218 (2021)** amended the Criminal Code to legalize single-event sports betting, which was previously restricted to parlay-only formats. This triggered a wave of provincial online gambling market openings, most notably Ontario's regulated iGaming market (launched April 2022).

For operators deploying {{PROGRAM_NAME}} in Canada, this provincial model means:
- **No single set of rules applies nationwide** — you need a compliance module for each province you operate in
- **Helplines, mandatory messaging, and advertising rules vary by province**
- **The `_brand.yml` should be restructured** from a flat Canada entry to provincial sub-entries (see [below](#brandyml-structure))

### Key legislation

| Legislation | Scope | Relevance to {{PROGRAM_NAME}} |
|---|---|---|
| Criminal Code s.207 | Federal — defines legal gambling | Establishes that provinces authorize all legal gambling |
| Bill C-218 (2021) | Federal — single-event sports betting | Opened provincial sports betting markets; triggers sports-specific messaging needs |
| Provincial gaming acts | Province-specific | Define licensing, player protection, advertising rules per province |
| FINTRAC PCMLTFA | Federal — anti-money laundering | Applies to all gambling operators regardless of province |

---

## Canadian Gambling Advertising Code

In **January 2026**, Canada's advertising industry adopted the **Canadian Gambling Advertising Code** — the first national standard for gambling advertising. While not legislation, it is enforced through Advertising Standards Canada (Ad Standards) and applies across all provinces.

### Key provisions

| Provision | Requirement |
|---|---|
| **Minors** | No advertising that targets or appeals to minors |
| **Misleading claims** | No misleading depictions of likelihood, size, or frequency of winning |
| **Inducements** | Bonus offers must include clear terms and conditions |
| **Helpline** | Gambling advertising must include a responsible gambling message and helpline reference |
| **Social responsibility** | Advertising must not portray gambling as a solution to financial problems or suggest it is essential for social success |
| **Endorsements** | Celebrity and influencer endorsements must comply with disclosure rules |
| **Frequency** | Self-regulatory limits on ad frequency during live sports broadcasts |

### Impact on {{PROGRAM_NAME}}

The national code aligns with {{PROGRAM_NAME}}'s existing approach — transparent messaging, no misleading claims, helpline accessibility. Operators using {{PROGRAM_NAME}} content are largely compliant by default. Key areas to verify:

- All advertising collateral includes helpline reference
- Bonus/promotion-related content includes clear T&Cs
- Social media content does not target audiences under the provincial legal age
- Influencer partnerships include proper disclosure

---

## Provincial structure

| Province/Territory | Regulator | Operator | Legal age | Online gambling | Helpline | Module status |
|---|---|---|---|---|---|---|
| **British Columbia** | GPEB → IGCO (April 2026) | BCLC | 19 | PlayNow.com (BCLC) | 1-888-795-6111 | [Complete](british-columbia/) |
| **Ontario** | AGCO / iGO | OLG + private (iGaming) | 19 | Open market (April 2022) | 1-866-531-2600 | Planned |
| **Alberta** | AGLC | AGLC / PlayAlberta | 18 | PlayAlberta.ca | 1-866-332-2322 | Planned |
| **Quebec** | Loto-Québec / RAJ | Loto-Québec | 18 | Espacejeux.com | 1-800-461-0140 | Planned |
| **Manitoba** | LGA (Manitoba) | Manitoba Liquor & Lotteries | 18 | PlayNow.com (MLL) | 1-800-463-1554 | Planned |
| **Saskatchewan** | SLGA | Sask Gaming / SaskGaming | 19 | PlayNow.com (WCLC) | 1-800-306-6789 | Planned |
| **Nova Scotia** | Alcohol, Gaming, Fuel & Tobacco | Atlantic Lottery | 19 | PlayNow.com (ALC) | 1-888-347-8888 | Planned |
| **New Brunswick** | GNB Gaming Control | Atlantic Lottery | 19 | PlayNow.com (ALC) | 1-800-461-1234 | Planned |
| **Prince Edward Island** | PEI Lotteries Commission | Atlantic Lottery | 19 | PlayNow.com (ALC) | 1-888-347-8888 | Planned |
| **Newfoundland & Labrador** | Dept of Digital Gov & Service NL | Atlantic Lottery | 19 | PlayNow.com (ALC) | 1-888-899-4357 | Planned |
| **Northwest Territories** | MACA (NWT) | WCLC | 19 | Limited | NWT Helpline | Planned |
| **Yukon** | Yukon Lotteries Commission | WCLC | 19 | Limited | 1-800-661-0408 | Planned |
| **Nunavut** | Dept of Community & Gov Services | WCLC | 19 | Limited | Nunavut Helpline | Planned |

**Legal age notes**:
- **18**: Alberta, Manitoba, Quebec
- **19**: All other provinces and territories

---

## National helpline situation

Canada has **no single national gambling helpline**. Each province operates its own support service:

| Province | Helpline | Service name |
|---|---|---|
| British Columbia | 1-888-795-6111 | Gambling Support BC |
| Ontario | 1-866-531-2600 | ConnexOntario |
| Alberta | 1-866-332-2322 | Alberta Health Services Addiction Helpline |
| Quebec | 1-800-461-0140 | Gambling: Help and Referral (Jeu: aide et référence) |

This means operators cannot use a single `helplines.canada` entry in `_brand.yml`. Instead, the Canada section must be restructured into provincial sub-entries. See below.

---

## `_brand.yml` structure

### Current state (flat, Ontario-only)

The current `_brand.yml` has a flat Canada entry that only covers Ontario:

```yaml
helplines:
  canada:
    number: "1-866-531-2600"
    website: "www.connexontario.ca"
    label: "ConnexOntario"
```

### Recommended structure (provincial sub-entries)

Restructure to support multiple provinces:

```yaml
helplines:
  canada:
    british-columbia:
      number: "1-888-795-6111"
      website: "www.gamblingsupportbc.ca"
      label: "Gambling Support BC"
      hours: "24/7"
    ontario:
      number: "1-866-531-2600"
      website: "www.connexontario.ca"
      label: "ConnexOntario"
      hours: "24/7"
    alberta:
      number: "1-866-332-2322"
      website: "www.albertahealthservices.ca"
      label: "Alberta Health Services Addiction Helpline"
      hours: "24/7"
    quebec:
      number: "1-800-461-0140"
      website: "www.jeu-aidereference.qc.ca"
      label: "Jeu: aide et référence"
      hours: "24/7"

legal:
  minimum_gambling_age:
    canada-british-columbia: 19
    canada-ontario: 19
    canada-alberta: 18
    canada-quebec: 18

messaging:
  mandatory:
    canada-british-columbia: "Know your limit, play within it."
```

This structure scales as new provincial modules are added.

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [Governance — Quarterly Regulatory Check](../../brand-book/08-governance.md) | [Jurisdictions README](../README.md) | [British Columbia module](british-columbia/)*
