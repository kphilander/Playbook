# Jurisdiction Templates

Scaffolded markdown files for building new jurisdiction compliance modules. Copy these files when adding a new country or sub-jurisdiction — they contain every section, table, and question an operator needs to address.

## Templates

| Template | Use for | Copy to |
|----------|---------|---------|
| [jurisdiction-overview.md](jurisdiction-overview.md) | Country-level module (federal/national framework) | `jurisdictions/{{country}}/README.md` |
| [compliance-module.md](compliance-module.md) | Sub-jurisdiction module (state/province/territory) | `jurisdictions/{{country}}/{{sub-jurisdiction}}/README.md` |
| [collateral-adaptation.md](collateral-adaptation.md) | Collateral localization notes for a sub-jurisdiction | Inline into the sub-jurisdiction README or keep as a separate file |

## How to use

See the [Jurisdictions README](../README.md#adding-a-new-jurisdiction) for the complete step-by-step guide, including the research checklist and cross-reference checks.

## Existing examples

- [Canada / British Columbia](../canada/british-columbia/) — complete compliance module
- [United States / Nevada](../united-states/nevada/) — complete compliance module
