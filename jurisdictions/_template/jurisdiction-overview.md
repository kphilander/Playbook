---
content_type: jurisdiction-module
title: "{{COUNTRY_NAME}} — Jurisdiction Overview"
pillar: [open]
tier: 1
tone: [confident-informative]
reading_level: grade-9-12
game_type: []
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
  sports_culture: "{{SPORTS_CULTURE}}"
  language: en-us
adaptation_status: base
adaptation_notes: |
  Jurisdiction overviews are structural/regulatory. Cultural adaptation
  is minimal — primarily currency and legal terminology. Localize
  helpline numbers, age thresholds, and regulatory body names.
last_updated: "{{YYYY-MM-DD}}"
---

# {{COUNTRY_NAME}} — Jurisdiction Overview

> **Operator note**: This is the country-level overview for {{COUNTRY_NAME}}. It covers the national regulatory framework and lists all sub-jurisdictions with their regulators and key facts. For sub-jurisdiction compliance details, see the individual modules linked below.

> **Last verified**: {{YYYY-MM-DD}}
> **Next review due**: {{YYYY-MM-DD}} *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [Regulatory landscape](#regulatory-landscape) | National framework |
| [National requirements](#national-requirements) | Requirements that apply across all sub-jurisdictions |
| [Sub-jurisdictions](#sub-jurisdictions) | Table of all sub-jurisdictions with key facts |
| [`_brand.yml` entries](#brandyml-entries) | Config overrides for this country |

---

## Regulatory landscape

### National regulator

| Field | Value |
|---|---|
| **National regulator** | {{NATIONAL_REGULATOR}} |
| **Governing legislation** | {{LEGISLATION}} |
| **Regulatory model** | {{MODEL}} *(e.g., centralized, devolved to provinces/states, mixed)* |
| **Online gambling** | {{ONLINE_STATUS}} *(e.g., legal nationwide, state-by-state, prohibited)* |

### Overview

{{Describe the national regulatory landscape in 2–3 paragraphs. Cover:
- How gambling is regulated at the national level
- Whether regulation is centralized or devolved to sub-jurisdictions
- Recent or upcoming regulatory changes
- How this affects operators deploying Playbook}}

### Key legislation

| Legislation | Scope | Relevance to {{PROGRAM_NAME}} |
|---|---|---|
| {{LAW_NAME}} | {{SCOPE}} | {{HOW_IT_AFFECTS_CONTENT}} |
| {{LAW_NAME}} | {{SCOPE}} | {{HOW_IT_AFFECTS_CONTENT}} |

---

## National requirements

Requirements that apply across all sub-jurisdictions in {{COUNTRY_NAME}}, regardless of local rules.

### Advertising

{{Describe any national advertising code or standards. If none, note that advertising is regulated at the sub-jurisdiction level.}}

### Age verification

| Requirement | Value |
|---|---|
| **National minimum age** | {{MIN_AGE}} *(or "varies by sub-jurisdiction")* |
| **Verification standard** | {{STANDARD}} |

### Anti-money laundering / Know your customer

| Requirement | Value |
|---|---|
| **AML authority** | {{AML_AUTHORITY}} |
| **Reporting thresholds** | {{THRESHOLDS}} |
| **Player-facing impact** | {{WHAT_PLAYERS_SEE}} |

### Helplines

{{Describe national helpline situation. If there is a national helpline, list it. If helplines are provincial/state-specific, note that and point to sub-jurisdiction modules.}}

---

## Sub-jurisdictions

| Sub-jurisdiction | Regulator | Legal age | Online gambling | Helpline | Module status |
|---|---|---|---|---|---|
| {{SUB_JURISDICTION}} | {{REGULATOR}} | {{AGE}} | {{ONLINE_STATUS}} | {{HELPLINE}} | {{STATUS}} |
| {{SUB_JURISDICTION}} | {{REGULATOR}} | {{AGE}} | {{ONLINE_STATUS}} | {{HELPLINE}} | {{STATUS}} |

**Module status key**: Complete | In progress | Planned | Not applicable

---

## `_brand.yml` entries

### Recommended structure

Operators deploying in {{COUNTRY_NAME}} should add the following to their `_brand.yml`:

```yaml
# ─── HELPLINES ───────────────────────────────
helplines:
  {{country-slug}}:
    {{sub-jurisdiction-slug}}:
      number: "{{HELPLINE_NUMBER}}"
      website: "{{HELPLINE_WEBSITE}}"
      label: "{{HELPLINE_LABEL}}"
      hours: "{{HOURS}}"

# ─── LEGAL ───────────────────────────────────
legal:
  minimum_gambling_age:
    {{country-slug}}-{{sub-jurisdiction-slug}}: {{MIN_AGE}}
```

### Mandatory messaging tokens

If any sub-jurisdiction requires word-for-word mandatory statements, add them as tokens:

```yaml
# ─── MESSAGING ───────────────────────────────
messaging:
  mandatory:
    {{country-slug}}-{{sub-jurisdiction-slug}}: "{{MANDATORY_STATEMENT}}"
```

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [Governance — Quarterly Regulatory Check](../../brand-book/08-governance.md) | [Jurisdictions README](../README.md)*
