# Jurisdictions

Regulatory compliance modules that map {{PROGRAM_NAME}} brand guidelines to jurisdiction-specific requirements. Each module tells operators exactly what to change, add, or display when deploying {{PROGRAM_NAME}} in a given market.

> **Operator note**: These modules are compliance references, not legal advice. Always verify requirements with qualified legal counsel before launching in any jurisdiction. Regulations change frequently — every module includes a `Last verified` date and a `Next review due` date aligned with the quarterly regulatory check described in the [governance chapter](../brand-book/08-governance.md).

---

## Quick-scan index

| Section | Description |
|---|---|
| [How jurisdiction modules work](#how-jurisdiction-modules-work) | Three-layer architecture |
| [Available jurisdictions](#available-jurisdictions) | What's built |
| [Adding a new jurisdiction](#adding-a-new-jurisdiction) | Step-by-step guide with research checklist |
| [Regulatory disclaimer](#regulatory-disclaimer) | Legal notice |

---

## How jurisdiction modules work

Jurisdiction modules use a **three-layer architecture**:

```
jurisdictions/
├── _template/                          # Layer 0: Templates
│   ├── jurisdiction-overview.md        # Country-level scaffold
│   ├── compliance-module.md            # Sub-jurisdiction scaffold
│   └── collateral-adaptation.md        # Collateral localization scaffold
│
├── canada/                             # Layer 1: Country
│   ├── README.md                       # Federal framework, provincial table
│   ├── _brand-canada.yml               # Country-level config overrides
│   │
│   └── british-columbia/               # Layer 2: Sub-jurisdiction
│       ├── README.md                   # Full compliance module
│       └── advertising-rules.md        # Deep-dive reference
│
└── README.md                           # You are here
```

### Layer 0: Templates (`_template/`)

Scaffolded markdown files with `{{PLACEHOLDER}}` tokens. Copy these when building a new jurisdiction module. They contain every section, table, and question an operator needs to address — nothing is left to guesswork.

### Layer 1: Country

The national or federal framework. Covers the regulatory landscape that applies across all sub-jurisdictions, lists sub-jurisdictions with their regulators and key facts, and provides country-level `_brand.yml` overrides.

### Layer 2: Sub-jurisdiction

The compliance module for a specific state, province, or territory. This is where the actionable requirements live — mandatory messaging, helpline display rules, advertising restrictions, self-exclusion programs, collateral adaptations, and a compliance checklist.

### How `_brand.yml` connects

Each jurisdiction module references specific `_brand.yml` keys and recommends additions. The pattern:

1. **Country-level `_brand-*.yml`** files contain helplines, legal ages, and mandatory messaging tokens for all sub-jurisdictions in that country
2. **Sub-jurisdiction READMEs** specify which `_brand.yml` values to set and provide ready-to-paste YAML snippets
3. **`{{PLACEHOLDER}}` tokens** in collateral templates resolve to jurisdiction-specific values at build time

---

## Available jurisdictions

| Country | Sub-jurisdiction | Regulator | Status | Module |
|---|---|---|---|---|
| Canada | British Columbia | GPEB / IGCO (from April 2026) | Complete | [canada/british-columbia/](canada/british-columbia/) |

---

## Adding a new jurisdiction

### Step 1: Research

Complete this checklist before writing anything:

| Research area | Questions to answer |
|---|---|
| **Regulatory authority** | Who regulates gambling? Is there a national body, sub-jurisdiction body, or both? |
| **Legal framework** | What legislation governs gambling? What types are permitted? |
| **Licensing** | What licenses exist? Who can hold them? |
| **Legal age** | What is the minimum gambling age? Does it vary by product? |
| **Helpline** | What is the jurisdiction's gambling helpline? Number, website, hours, languages? |
| **Mandatory messaging** | Are there word-for-word required statements? Where must they appear? |
| **Advertising rules** | What restrictions apply to gambling advertising? Channel-specific rules? |
| **Self-exclusion** | Is there a mandatory self-exclusion program? Duration options? How does it work? |
| **Player protection** | Required tools (deposit limits, session limits, etc.)? Specific thresholds? |
| **Age verification** | How must age be verified? Documents accepted? Reverification requirements? |
| **AML/KYC** | What are the anti-money laundering and know-your-customer requirements? |
| **Data privacy** | What privacy legislation applies? Special requirements for gambling data? |
| **Responsible gambling programs** | Are there government or regulator programs operators must integrate with? |

### Step 2: Create the module

1. Copy `_template/jurisdiction-overview.md` → `jurisdictions/{{country}}/README.md`
2. Copy `_template/compliance-module.md` → `jurisdictions/{{country}}/{{sub-jurisdiction}}/README.md`
3. Copy `_template/collateral-adaptation.md` → reference or inline into the sub-jurisdiction README
4. Fill in every `{{PLACEHOLDER}}` with researched values
5. Add a country-level `_brand-{{country}}.yml` if one doesn't exist
6. Update `_brand.yml` with new helpline and legal age entries

### Step 3: Cross-reference check

- [ ] All relative paths resolve to real files
- [ ] `{{PLACEHOLDER}}` tokens match `_brand.yml` keys
- [ ] Mandatory messaging shows both "bare compliance" and "Playbook on-brand" versions
- [ ] Compliance checklist covers every researched requirement
- [ ] `Last verified` and `Next review due` dates are set
- [ ] This README's [Available jurisdictions](#available-jurisdictions) table is updated

### Step 4: Review

Jurisdiction modules require brand owner + legal/compliance sign-off per the [governance chapter](../brand-book/08-governance.md).

---

## Regulatory disclaimer

This material is for informational and educational purposes only and does not constitute legal, medical, or professional advice. Gambling regulations vary by jurisdiction and change frequently. Operators must verify all compliance requirements with qualified legal counsel before deploying {{PROGRAM_NAME}} in any market.

The authors of these modules are not lawyers, regulators, or compliance officers. While we research requirements thoroughly and cite sources, we cannot guarantee accuracy or completeness. Regulations may have changed since the `Last verified` date on any given module.

---

*Cross-references: [Governance — Quarterly Regulatory Check](../brand-book/08-governance.md) | [Messaging Framework — Warning Statement Standards](../brand-book/05-messaging-framework.md#warning-statement-standards) | [`_brand.yml`](../_brand.yml)*
