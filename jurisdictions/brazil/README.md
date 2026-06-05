---
content_type: jurisdiction-module
title: "Brazil (SPA/MF) -- Compliance Module"
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
  odds_format: decimal
  currency: brl
  sports_culture: "football (soccer), volleyball, MMA, Formula 1"
  language: pt-br
verticals: [interactive]
regulatory_approach: prescriptive
adaptation_status: base
adaptation_notes: |
  Brazil is a national (federal) jurisdiction with an online-only legal
  market. This module covers online fixed-odds sports betting and online
  games ("jogos on-line") under the Secretaria de Premios e Apostas
  (SPA/MF). Land-based casinos remain illegal -- there is no land-based
  vertical to adapt. Cultural notes: Portuguese (pt-BR) is the required
  market language, currency is BRL, decimal odds, and football (soccer) is
  the dominant betting culture. Key localizations: the Art. 13 warning-clause
  set (18+ mark + addiction-risk warning at >=10% of ad size), prudential
  self-limits at registration, and the centralized SPA self-exclusion
  platform. No single verbatim slogan is mandated.
last_updated: "2026-06-05"
---

# Brazil (SPA/MF) -- Compliance Module

> **Operator note**: This module covers every compliance requirement for deploying {{PROGRAM_NAME}} in Brazil under the **Secretaria de Premios e Apostas (SPA)** of the **Ministerio da Fazenda** (Ministry of Finance). Brazil's federal online betting regime went live on 1 January 2025: licensed operators run on `.bet.br` domains under the SIGAP system. Work through each section, complete the compliance checklist at the bottom, and get legal/compliance sign-off before launch.
>
> **Verticals covered**: Online Sports Betting (fixed-odds), Online Games ("jogos on-line", casino-style)
>
> **Land-based casinos are illegal in Brazil** -- there is no land-based casino vertical. Sections that assume a physical venue (e.g. environmental signage) are marked **N/A** below.
>
> **Regulatory approach**: Prescriptive (new, Portaria-driven; enumerated advertising prohibitions and mandated player-protection tools)

> **Last verified**: 2026-06-05
> **Next review due**: 2026-09-05 *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Verticals | Description |
|---|---|---|
| [Regulatory authority](#regulatory-authority) | All | Who regulates, key contacts |
| [Legal requirements](#legal-requirements) | All | Licensing, permitted products, legal framework |
| [Helpline](#helpline) | All | Support-channel obligations (no named government helpline) |
| [Messaging requirements](#messaging-requirements) | All | Required warning clauses and on-brand integration |
| [Advertising restrictions](#advertising-restrictions) | All | The ~19 enumerated prohibitions; see [advertising-rules.md](advertising-rules.md) |
| [Self-exclusion](#self-exclusion) | All | Per-operator + centralized national autoexclusao |
| [Player protection -- interactive](#player-protection----interactive) | Interactive | Online player-protection tools |
| [Venue & environmental signage](#venue--environmental-signage) | N/A | Online-only market -- no physical venues |
| [Age verification](#age-verification) | All | 18+, CPF, mandatory facial recognition |
| [AML/KYC](#amlkyc) | All | Identity verification and payment controls |
| [Collateral adaptation](#collateral-adaptation) | All | What to change across all touchpoints |
| [`_brand.yml` updates](#brandyml-updates) | All | Config values to add |
| [Compliance checklist](#compliance-checklist) | All | Pre-launch verification |

---

## Regulatory authority

| Field | Value |
|---|---|
| **Primary regulator** | Secretaria de Premios e Apostas (SPA) -- Ministerio da Fazenda (SPA/MF) |
| **Website** | [gov.br/fazenda -- Secretaria de Premios e Apostas](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas) |
| **Governing legislation** | Lei no 14.790/2023 (regulates fixed-odds betting and online games); Lei no 13.756/2018 (created the fixed-odds betting modality) |
| **Key regulations (Portarias)** | Portaria SPA/MF no 1.231/2024 (responsible gaming, technical and player-protection rules); no 827/2024; no 1.475/2024; no 2.579/2025 (centralized self-exclusion and self-limits at registration) |
| **Operating system** | SIGAP -- Sistema de Gestao de Apostas (betting management / licensing system) |
| **License model** | Competitive federal authorization (outorga). Onerous grant of roughly R$30 million for a 5-year term; an authorization covers up to three commercial brands. Operators serve the market on `.bet.br` domains. |
| **Regulatory approach** | Prescriptive / Portaria-driven |

**Source**: [SPA legislacao index](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/apostas-de-quota-fixa/legislacao) | [SIGAP](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/sistema-de-gestao-de-apostas-sigap)

> **Naming note**: Earlier drafts and trackers referred to this jurisdiction as "SBJ / LOTERJ." That is incorrect for the federal market. **LOTERJ** is a Rio de Janeiro **state** lottery operator, not the federal regulator. The federal online betting regime is regulated by the **SPA within the Ministry of Finance**. This module is built around the federal SPA/MF regime.

### Upcoming changes

- The federal regime is new (live 1 January 2025) and still maturing. The SPA continues to issue Portarias refining technical, payment, and player-protection rules.
- Portaria SPA/MF no 2.579/2025 introduced centralized self-exclusion and mandatory prudential self-limits (time and bet value) set at registration. Expect further player-protection tightening.
- Permitted payment instruments are governed by SPA technical Portarias together with Banco Central rules (Pix and debit are central; restrictions apply to other instruments). Verify the current permitted-instrument list before asserting any specific ban.

---

## Legal requirements

| Requirement | Value |
|---|---|
| **Minimum gambling age** | 18+ |
| **Legal framework** | Lei no 14.790/2023 regulates online fixed-odds betting (sports) and online games ("jogos on-line"), building on the modality created by Lei no 13.756/2018. Detailed rules are set by SPA/MF Portarias. |
| **Online gambling** | Legal and regulated for fixed-odds sports betting and online games on authorized `.bet.br` domains. |
| **Land-based casinos** | **Illegal.** Brazil does not permit land-based casinos. Do not deploy, tag, or reference a land-based casino vertical. |
| **Permitted products** | Online fixed-odds sports betting; online games (casino-style virtual games, including live-dealer style products offered online). |

### Permitted products table

| Product | Vertical | Legal status | Regulator | Notes |
|---|---|---|---|---|
| Online fixed-odds sports betting | Interactive (sports) | Legal (authorized) | SPA/MF | Quota-fixa sports betting on `.bet.br` domains |
| Online games ("jogos on-line") | Interactive (online) | Legal (authorized) | SPA/MF | Casino-style virtual online games offered by authorized operators |
| Land-based casino | -- | **Illegal** | -- | No land-based casino market exists in Brazil |
| Land-based betting shops | -- | Not part of the federal regime | -- | The federal regime is online-only |

### Key legislation

| Legislation | Scope | Relevance to {{PROGRAM_NAME}} |
|---|---|---|
| Lei no 14.790/2023 | Primary legislation for fixed-odds betting and online games | Establishes the federal regime, advertising rules (Arts. 16-17), under-18 prohibition (Arts. 3, 26), customer-service duties (Art. 28), and the payouts-to-own-account rule (Art. 30) |
| Lei no 13.756/2018 | Created the fixed-odds betting modality | Statutory origin of quota-fixa betting in Brazil |
| Portaria SPA/MF no 1.231/2024 | Responsible gaming, technical and player-protection rules | Mandates RTP and odds disclosure, warning clauses, support channels, prudential limits, self-exclusion mechanics, and the ~19 advertising prohibitions |
| Portaria SPA/MF no 2.579/2025 | Centralized self-exclusion and self-limits | Centralized national autoexclusao platform; prudential self-limits (time and bet value) required at registration |

**Sources**: [Lei 14.790/2023](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14790.htm) | [Lei 13.756/2018](https://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2018/Lei/L13756.htm) | [SPA legislacao index](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/apostas-de-quota-fixa/legislacao)

---

## Helpline

| Field | Value |
|---|---|
| **Named government helpline** | None prescribed. Brazil does not mandate a single national problem-gambling helpline number. |
| **Operator obligation** | Operators must provide internet-accessible customer-service and ombudsman ("ouvidoria") channels, including to guide bettors at risk of addiction or pathological gambling -- and their families -- toward help and treatment. |
| **Language** | Portuguese (pt-BR), free of charge |
| **Source** | Portaria SPA/MF no 1.231/2024, Art. 4 XII-XIII; Lei 14.790/2023, Art. 28 |

**Source**: [Lei 14.790/2023, Art. 28](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14790.htm) | [SPA legislacao index](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/apostas-de-quota-fixa/legislacao)

### Display rules

Because there is no government helpline number, the obligation is to surface **operator support channels** -- a customer-service channel and an ombudsman channel -- accessible over the internet from the operator's site and app, with explicit signposting toward help and treatment for at-risk bettors and their families.

> **Operator note**: Many Brazilian operators voluntarily reference third-party support resources. If you choose to display a specific support organization, verify it is currently active and appropriate before publishing -- {{PROGRAM_NAME}} does not prescribe one because none is mandated.

### On-brand helpline display

**Bare compliance** (what most operators do):
> "Atendimento ao cliente disponivel." ("Customer service available.")

**On-brand compliance** (the {{PROGRAM_NAME}} way):
> "Apostar e diversao -- nao deve virar um problema. Se estiver pesado, fale com a gente. Nosso atendimento e a ouvidoria estao aqui para ajudar voce (e quem voce ama) a encontrar apoio. Gratuito e sem julgamento."
>
> *(English: "Betting is entertainment -- it should not become a problem. If it is feeling heavy, talk to us. Our customer service and ombudsman are here to help you, and the people you love, find support. Free and no judgment.")*

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Messaging requirements

### Messaging regime summary

| Context | Obligation type | What's required | Source |
|---|---|---|---|
| All communication, advertising and marketing (incl. digital) | Standard-based | Warning clauses: 18+ age mark or "proibido para menores de 18 anos," and a warning about addiction/pathological-gambling risk | Lei 14.790/2023, Art. 16; Portaria 1.231/2024, Art. 13 |
| Warning-clause sizing | Standard-based | Clear and legible, at least **10%** of the ad size; spoken and written where possible; shown on the opening page of operator sites/apps | Portaria 1.231/2024, Art. 13 |
| Operator site / app | Standard-based | Surface support (customer-service + ombudsman) channels and a highlighted link to the centralized self-exclusion platform | Portaria 1.231/2024, Art. 4 XII-XIII; Art. 11 VII |
| Odds & RTP | Obligation-based | Theoretical RTP per online game; fixed odds for sports events and online games | Portaria 1.231/2024, Art. 4 II; Art. 23 V |

**Obligation types**: Brazil does **not** prescribe a single verbatim slogan (there is no mandated word-for-word sentence such as "Aposte com responsabilidade"). The binding requirement is the **Art. 13 warning-clause set** -- the 18+ mark plus the addiction-risk warning, meeting the size and placement rules. Operators have wording flexibility around that obligation.

### Verbatim required statements

None mandated as a fixed slogan. The required *elements* are:
1. An age-restriction mark (**18+**) or the notice **"proibido para menores de 18 anos"** ("prohibited for those under 18").
2. A warning about the **risks of addiction and pathological gambling**.

> **Do not** present any fixed marketing sentence (e.g. "Aposte com responsabilidade") as if it were word-for-word mandated. Confirm exact current wording and formatting with your legal team and the live Portaria text.

### Standard-based requirements

| Requirement | What must appear | Where | Source |
|---|---|---|---|
| Age mark / under-18 notice | "18+" or "proibido para menores de 18 anos" | All communication, advertising, marketing; opening page of site/app | Lei 14.790/2023, Art. 16; Portaria 1.231/2024, Art. 13 I |
| Addiction-risk warning | Warning about risks of addiction and pathological gambling | All communication, advertising, marketing | Lei 14.790/2023, Art. 16; Portaria 1.231/2024, Art. 13 |
| Warning size & form | >=10% of ad size; clear and legible; spoken + written where possible | All ads | Portaria 1.231/2024, Art. 13 |
| Self-exclusion link | Clear, highlighted link to the centralized SPA self-exclusion platform | Operator site / app | Portaria 1.231/2024, Art. 11 VII |

### On-brand integration

Because no fixed slogan is mandated, operators have full flexibility to wrap the required elements in {{PROGRAM_NAME}} voice -- as long as the **18+ mark** and the **addiction-risk warning** are present, legible, and at least 10% of the ad.

**Generic operator approach:**
> "Proibido para menores de 18 anos. Jogo pode causar dependencia. Aposte com responsabilidade."

**{{PROGRAM_NAME}} on-brand approach:**
> "Aposta e entretenimento -- conheca as probabilidades, defina seus limites e mantenha a diversao. **18+. Proibido para menores de 18 anos. O jogo pode causar dependencia.** Precisa de apoio? Nosso atendimento esta aqui."
>
> *(The required age mark and addiction-risk warning appear in bold; the surrounding copy uses {{PROGRAM_NAME}} voice. Keep the warning at >=10% of the ad.)*

**Rules for on-brand integration:**
1. The required elements (18+ mark + addiction-risk warning) must be present and legible -- but the surrounding copy can use full {{PROGRAM_NAME}} voice.
2. Respect the **>=10% size** rule -- do not shrink the warning to minimum visibility.
3. Convey the warning in spoken and written form where the medium allows (e.g. audio + on-screen text in video).
4. Follow with a helpful action whenever possible.

*Pattern from: [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*

---

## Advertising restrictions

Brazil's advertising regime is **prescriptive**: Lei 14.790/2023, Art. 17 plus Portaria SPA/MF no 1.231/2024, Art. 12, set out roughly **nineteen enumerated prohibitions**. The full breakdown lives in [advertising-rules.md](advertising-rules.md); the headline rules are below.

| Rule | Requirement | Verticals | Source |
|---|---|---|---|
| Required warning clauses | 18+ mark / "proibido para menores de 18 anos" + addiction-risk warning, >=10% of ad | All | Lei 14.790/2023, Art. 16; Portaria 1.231/2024, Art. 13 |
| No misleading win claims | No unfounded or misleading statements about winning probabilities or gains | All | Lei 14.790/2023, Art. 17; Portaria 1.231/2024, Art. 12 |
| No "easy money" / success framing | No suggestion of easy gain, or that betting drives personal, social, or financial success | All | Portaria 1.231/2024, Art. 12 |
| No endorsement of that framing | No celebrity/influencer endorsement suggesting betting brings success or easy gain | All | Portaria 1.231/2024, Art. 12 |
| No urgency / excess | No encouragement of excessive betting or calls to immediate action | All | Portaria 1.231/2024, Art. 12 |
| No betting-as-income / investment | No portrayal of betting as a life priority, an alternative to employment, a source of income, an investment, or a solution to problems | All | Lei 14.790/2023, Art. 17; Portaria 1.231/2024, Art. 12 |
| No sexual / objectifying content | No sexual or objectifying content | All | Portaria 1.231/2024, Art. 12 |
| Minor protection | Broad bans on targeting or featuring minors; no appeal to minors | All | Lei 14.790/2023, Art. 17; Portaria 1.231/2024, Art. 12 |
| Identify as advertising + authorization | All ads must identify as advertising and state the SPA authorization | All | Portaria 1.231/2024, Art. 12 |
| No advertising to excluded persons | No advertising to self-excluded or court-excluded persons | All | Portaria 1.231/2024, Art. 11 |

**Sources**: [Lei 14.790/2023, Arts. 16-17](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14790.htm) | [SPA legislacao index (Portaria 1.231/2024)](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/apostas-de-quota-fixa/legislacao)

### Channel-specific rules

| Channel | Key restrictions | Verticals | Source |
|---|---|---|---|
| Broadcast (TV/radio) | Warning clauses in spoken + written form; all Art. 12 content prohibitions apply | All | Portaria 1.231/2024, Arts. 12-13 |
| Digital / social | Warning clauses on opening page of site/app; identify as advertising; no targeting/featuring minors; influencer rules apply | All | Portaria 1.231/2024, Arts. 12-13 |
| Print / outdoor | Warning clauses >=10% of ad; all Art. 12 content prohibitions apply | All | Portaria 1.231/2024, Arts. 12-13 |
| Direct marketing | No advertising to self-excluded or court-excluded persons | All | Portaria 1.231/2024, Art. 11 |
| In-venue | N/A -- no legal land-based venues in Brazil | -- | -- |
| Sponsorship | Subject to the same Art. 12 prohibitions and warning-clause rules | All | Portaria 1.231/2024, Arts. 12-13 |

### Prohibited content

See the [advertising-rules.md](advertising-rules.md) enumerated list. In summary, advertising must not: make unfounded/misleading claims about odds or gains; suggest easy gain or that betting brings personal, social, or financial success; use endorsements to that effect; encourage excessive betting or immediate action; present betting as a priority, an alternative to work, income, investment, or a solution to problems; contain sexual or objectifying content; or target, feature, or appeal to minors.

### Required disclosures

All advertising must:
1. Display the **18+ mark** or **"proibido para menores de 18 anos."**
2. Display a **warning about the risks of addiction and pathological gambling**, at least **10%** of the ad size.
3. **Identify as advertising** and state the **SPA authorization**.

For the full enumerated breakdown, see [advertising-rules.md](advertising-rules.md).

---

## Self-exclusion

Brazil offers **autoexclusao** at two levels: per-operator and a **centralized national platform** maintained by the SPA.

### Per-operator self-exclusion

| Field | Value |
|---|---|
| **Program name** | Autoexclusao (per-operator) |
| **Scope** | The operator with which the bettor self-excludes |
| **Account action** | The account is closed; re-registration is only possible after the defined term expires |
| **Duration options** | Definite term (operator-implemented) per the Portaria rules |
| **Source** | Portaria SPA/MF no 1.231/2024, Art. 4 IV(d)/V |

### Centralized national self-exclusion

| Field | Value |
|---|---|
| **Program name** | Centralized self-exclusion platform (SPA) |
| **Scope** | **All authorized betting systems** -- blocks registration and access across the licensed market |
| **Duration options** | Definite or indefinite period |
| **Operator obligations** | Surface a clear, highlighted link to the central platform; block access for listed persons; do not send advertising to self-excluded or court-excluded persons |
| **Source** | Portaria SPA/MF no 1.231/2024, Art. 11 VII (amended by Portaria SPA/MF no 2.579/2025) |

### {{PROGRAM_NAME}} language mapping

| Context | {{PROGRAM_NAME}} term | Official term | When to use official term |
|---|---|---|---|
| Tier 1 (casual) | "Take a break" / "Pause your account" | Autoexclusao | Never in Tier 1 |
| Tier 2 (formal) | "Self-exclusion" | Autoexclusao (per-operator) / Autoexclusao centralizada (national) | Legal documents, formal enrollment, the highlighted link |
| Staff training | Both | Autoexclusao | When explaining the program's official name |

### Staff FAQ addition

Add this Q&A to the [Staff FAQ](../../collateral/customer-service/staff-faq.md):

> **Q: How does self-exclusion work in Brazil?**
>
> Brazil has two levels. A bettor can self-exclude with a single operator -- their account is closed and they cannot re-register until the term ends. Or they can self-exclude **nationally**, through a centralized platform run by the SPA, which blocks registration and access across **every authorized operator** for a definite or indefinite period. Operators must show a clear, highlighted link to the central platform and must never send advertising to self-excluded or court-excluded people. If a player asks about it, explain both options and offer to help. Use "take a break" in casual conversation, "autoexclusao" when referring to the official program.

---

## Player protection -- interactive

*This is the only player-protection section that applies: Brazil's legal market is online-only.*

### Required tools and obligations

| Tool / Obligation | Required? | Details | Source |
|---|---|---|---|
| Prudential limits | Yes | Bettors can set limits by elapsed time, financial loss, total deposited, or number of bets, bound to daily/weekly/monthly periods | Portaria 1.231/2024, Art. 4 IV/X/XI |
| Self-limits at registration | Yes (since 2.579/2025) | Bettors must set prudential self-limits (time and bet value) at registration | Portaria SPA/MF no 2.579/2025 |
| Limit-change delay | Yes | Limit increases or pause removals take effect only **24 hours** after the request | Portaria 1.231/2024, Art. 4 X/XI |
| Session alerts / blocks | Yes | Session alerts or blocks must be available | Portaria 1.231/2024, Art. 4 X |
| Pause periods | Yes | Bettors can set pause periods | Portaria 1.231/2024, Art. 4 X |
| Permanent activity panel | Yes | A permanent panel showing time used, losses, and balance | Portaria 1.231/2024, Art. 4 X |
| RTP / odds disclosure | Yes | Theoretical RTP per online game; fixed odds for sports and online games | Portaria 1.231/2024, Art. 4 II; Art. 23 V |
| Self-exclusion | Yes | Per-operator and centralized national platform | Portaria 1.231/2024, Arts. 4 IV(d)/V, 11 VII |
| Support channels | Yes | Customer-service and ombudsman channels signposting help for at-risk bettors and families | Portaria 1.231/2024, Art. 4 XII-XIII |
| Behavioural monitoring | Yes | Documented responsible-gaming policy with behavioural monitoring | Portaria 1.231/2024, Art. 5 |
| Financial-history access | Yes | Full financial-movement history (deposits, withdrawals, stakes, prizes) | Portaria 1.231/2024, Art. 4 X; Art. 23 VI |
| No third-party payouts | Yes | Prizes paid exclusively to the bettor's own bank/payment account at a Banco Central-authorized institution | Lei 14.790/2023, Art. 30 |

### {{PROGRAM_NAME}} tool messaging -- interactive

| Tool | {{PROGRAM_NAME}} copy | Context |
|---|---|---|
| Self-limits at registration | "Before you start: set your time and bet limits. It is required -- and it keeps you in control. Takes 10 seconds." | Portaria 2.579/2025 |
| Prudential limits | "Set limits by time, loss, deposit, or number of bets -- daily, weekly, or monthly. Your call." | Portaria 1.231/2024, Art. 4 IV/X/XI |
| Limit-change delay | "Raising a limit? It kicks in after 24 hours -- a small pause so the choice is really yours." | Portaria 1.231/2024, Art. 4 X/XI |
| Activity panel | "Your panel, always on: time played, losses, and balance in one place." | Portaria 1.231/2024, Art. 4 X |
| Self-exclusion | "Need a longer break? Pause this account -- or block yourself across every licensed operator through the national platform." | Portaria 1.231/2024, Art. 11 VII |

---

## Venue & environmental signage

**N/A -- Brazil's legal market is online-only.** Land-based casinos are illegal and there are no licensed physical betting venues under the federal regime, so there is no physical-signage requirement to meet. Do not invent a venue-signage obligation for Brazil. The equivalent obligations (warning clauses, support links, self-exclusion link) are delivered **on the operator's site and app** -- see [Messaging requirements](#messaging-requirements) and [Advertising restrictions](#advertising-restrictions).

---

## Age verification

| Field | Value |
|---|---|
| **Minimum age** | 18+ |
| **`_brand.yml` key** | `legal.minimum_gambling_age.brazil` |
| **`{{MIN_AGE}}` token value** | 18 |
| **Statutory basis** | Lei 14.790/2023, Arts. 3 and 26 I |

### Interactive verification

| Requirement | Details | Source |
|---|---|---|
| **Identity** | CPF (Brazilian taxpayer registry number) required; identity verified against the bettor | Lei 14.790/2023; Portaria SPA/MF no 1.231/2024 |
| **Facial recognition** | **Mandatory facial-recognition** identity verification as part of the onboarding/identity procedures | Lei 14.790/2023 (identity verification incl. "reconhecimento facial") |
| **Under-18 prohibition** | Betting by persons under 18 is prohibited; under-18 / youth-only sports categories cannot be bet upon | Lei 14.790/2023, Arts. 3, 26 I |
| **Payments tie-in** | Prizes and movements tied to the bettor's own Banco Central-authorized account -- no third-party payments | Lei 14.790/2023, Art. 30 |

> **Land-based verification**: N/A -- no legal land-based venues in Brazil.

### Age messaging

All collateral in Brazil must display the **18+** mark (or "proibido para menores de 18 anos"):

> "Voce precisa ter 18+ para apostar. Proibido para menores de 18 anos."
>
> *(English: "You must be 18+ to bet. Prohibited for those under 18.")*

---

## AML/KYC

| Requirement | Value |
|---|---|
| **AML framework** | Brazilian AML law (Lei no 9.613/1998) and SPA/MF Portarias; operators are obligated persons for prevention of money laundering and terrorism financing |
| **Identity verification** | CPF + mandatory facial-recognition verification at onboarding |
| **Payment controls** | Prizes and balances move exclusively through the bettor's own bank/payment account at a Banco Central-authorized institution -- **no third-party payments** (Lei 14.790/2023, Art. 30) |
| **Permitted instruments** | Set by SPA technical Portarias together with Banco Central rules (Pix and debit are central). **Verify the current permitted/banned-instrument list before asserting specifics.** |
| **Player-facing impact** | Identity and facial verification at registration; payouts only to the player's own account |

**Source**: [Lei 14.790/2023, Art. 30](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14790.htm) | [SPA legislacao index](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/apostas-de-quota-fixa/legislacao)

### Player-facing messaging

When identity/facial verification affects players, use {{PROGRAM_NAME}} voice:

**Bare compliance:**
> "We are required by law to verify your identity."

**On-brand:**
> "Quick ID check with your CPF and a photo -- it keeps your account secure and is required for every player. Takes about 2 minutes."

---

## Collateral adaptation

Quick-reference table mapping every collateral category to Brazil-specific adaptations. Every legal touchpoint here is **interactive** -- there is no land-based vertical.

| Category | Collateral | Verticals | Adaptation required | Token |
|---|---|---|---|---|
| **Digital** | Website (`.bet.br`) | Interactive | Warning clauses on opening page (18+ + addiction-risk, >=10%); support + ombudsman channels; highlighted self-exclusion link; RTP/odds disclosure; pt-BR | `{{MIN_AGE}}` |
| **Digital** | Wagering account / app | Interactive | Self-limits prompt at registration; activity panel (time/loss/balance); 24h limit-increase delay; facial-recognition onboarding | `{{MIN_AGE}}` |
| **Digital** | Email templates | Interactive | 18+ mark + addiction-risk warning; no marketing to self-excluded persons; pt-BR | `{{MIN_AGE}}` |
| **Digital** | Social media | Interactive | Identify as advertising + SPA authorization; warning clauses; no targeting/featuring minors; influencer rules | `{{MIN_AGE}}` |
| **Print** | Brochure | Interactive | BRL currency, decimal odds, 18+ mark + addiction-risk warning >=10% | `{{MIN_AGE}}` |
| **Print** | Rack card | N/A | No legal land-based venues -- not applicable | -- |
| **Print** | Table tent | N/A | No legal land-based venues -- not applicable | -- |
| **Print** | Helpline card | Interactive | No named government helpline; reference operator support/ombudsman channels | -- |
| **Environmental** | Venue signage | N/A | Online-only market -- not applicable | -- |
| **Environmental** | Digital display | N/A | Online-only market -- not applicable | -- |
| **Video/Audio** | TV spot | Interactive | Warning clauses spoken + on-screen (>=10%); all Art. 12 content prohibitions; SPA authorization | `{{MIN_AGE}}` |
| **Video/Audio** | Radio spot | Interactive | Spoken warning clauses; content prohibitions | `{{MIN_AGE}}` |
| **Video/Audio** | Pre-roll | Interactive | 18+ mark + addiction-risk warning; identify as advertising | `{{MIN_AGE}}` |
| **Customer service** | Conversation scripts | Interactive | pt-BR; reference autoexclusao (per-operator + centralized) and support channels | -- |
| **Customer service** | Staff FAQ | Interactive | Add Brazil-specific Q&As on autoexclusao, self-limits, facial verification | -- |

---

## `_brand.yml` updates

Add these entries to your `_brand.yml`. See also [`_brand-brazil.yml`](_brand-brazil.yml) for the ready-to-merge file.

```yaml
# --- HELPLINES -----------------------------------------
# Brazil prescribes NO national problem-gambling helpline number.
# The obligation is operator-provided support + ombudsman channels.
helplines:
  brazil:
    number: ""                     # none mandated
    website: ""                    # operator support/ombudsman URL
    label: "Atendimento ao cliente e ouvidoria do operador"
    hours: ""
    languages:
      - Portuguese
    notes: "No government helpline number is prescribed. Operators must provide internet-accessible customer-service and ombudsman channels that signpost help and treatment for at-risk bettors and their families (Portaria SPA/MF 1.231/2024, Art. 4 XII-XIII)."

# --- LEGAL ---------------------------------------------
legal:
  minimum_gambling_age:
    brazil: 18

# --- MESSAGING -----------------------------------------
messaging:
  mandatory:
    # Brazil mandates warning ELEMENTS, not a fixed slogan.
    # Required: 18+ mark / "proibido para menores de 18 anos"
    # + an addiction/pathological-gambling risk warning, >=10% of the ad.
    brazil-warning: "Proibido para menores de 18 anos. O jogo pode causar dependencia."
```

---

## Compliance checklist

Complete before launching {{PROGRAM_NAME}} in Brazil.

### Regulatory
- [ ] Identified primary regulator: Secretaria de Premios e Apostas (SPA/MF)
- [ ] Confirmed federal authorization (outorga) status and `.bet.br` domain
- [ ] Verified legal gambling age: 18+
- [ ] Reviewed permitted products table (online sports betting + online games only)
- [ ] Confirmed land-based casino is **not** part of the deployment (illegal in Brazil)
- [ ] Checked for pending Portaria changes (payments, player protection)
- [ ] Deployment verticals: [ ] Online Sports Betting [ ] Online Games

### Messaging
- [ ] 18+ mark / "proibido para menores de 18 anos" displayed
- [ ] Addiction / pathological-gambling risk warning displayed
- [ ] Warning clauses are clear, legible, and at least 10% of the ad
- [ ] Warning conveyed in spoken + written form where the medium allows
- [ ] Warning clauses shown on the opening page of site and app
- [ ] RTP per online game and fixed odds disclosed
- [ ] No fixed slogan presented as if it were word-for-word mandated
- [ ] All brand placeholder tokens resolve to Brazil values

### Advertising
- [ ] Ad identifies as advertising and states the SPA authorization
- [ ] No misleading claims about winning probabilities or gains
- [ ] No "easy money" / success framing; no endorsements to that effect
- [ ] No encouragement of excessive betting or immediate action
- [ ] No betting-as-income / investment / solution-to-problems framing
- [ ] No sexual or objectifying content
- [ ] No targeting, featuring, or appealing to minors
- [ ] No advertising to self-excluded or court-excluded persons
- [ ] Full enumerated checklist in [advertising-rules.md](advertising-rules.md) completed

### Self-exclusion
- [ ] Per-operator autoexclusao implemented (account closed; re-registration only after term)
- [ ] Clear, highlighted link to the centralized SPA self-exclusion platform
- [ ] Listed persons blocked from registration and access
- [ ] Self-excluded / court-excluded persons removed from all advertising
- [ ] Staff trained on autoexclusao (per-operator + centralized)
- [ ] Self-exclusion language mapped to {{PROGRAM_NAME}} tiers

### Player protection -- interactive
- [ ] Prudential self-limits (time + bet value) required at registration
- [ ] Limits available by time, loss, deposit, and number of bets (daily/weekly/monthly)
- [ ] Limit increases / pause removals take effect only after 24 hours
- [ ] Session alerts/blocks and pause periods available
- [ ] Permanent activity panel (time used, losses, balance)
- [ ] Support + ombudsman channels signpost help for at-risk bettors and families
- [ ] Behavioural monitoring under a documented responsible-gaming policy
- [ ] Full financial-movement history available to the bettor
- [ ] Prizes paid only to the bettor's own Banco Central-authorized account (no third-party payouts)

### Venue & environmental signage
- [ ] N/A -- online-only market, no physical venues (confirmed, nothing to build)

### Age verification
- [ ] 18+ enforced
- [ ] CPF captured and identity verified
- [ ] Mandatory facial-recognition verification at onboarding
- [ ] Under-18 / youth-only sports categories not offered for betting

### AML/KYC
- [ ] Identity + facial verification at registration
- [ ] Payouts restricted to the player's own account (no third-party payments)
- [ ] Permitted payment-instrument list verified against current SPA/Bacen rules

### Content
- [ ] All collateral adapted per collateral adaptation table
- [ ] Staff FAQ updated with Brazil-specific Q&As
- [ ] Conversation scripts updated (autoexclusao, support channels)
- [ ] Language: pt-BR; currency: BRL; odds format: decimal

### Governance
- [ ] `_brand.yml` updated with Brazil values (or `_brand-brazil.yml` merged)
- [ ] `Last verified` date set: 2026-06-05
- [ ] `Next review due` date set: 2026-09-05
- [ ] in.gov.br DOU permalinks re-verified from a normal network (or `spa_br-legislacao` relied upon)
- [ ] Legal/compliance sign-off obtained
- [ ] Brand owner sign-off obtained

---

*Cross-references: [`_brand.yml`](../../_brand.yml) | [Messaging Framework -- Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards) | [Staff FAQ](../../collateral/customer-service/staff-faq.md) | [Governance](../../brand-book/08-governance.md) | [Jurisdictions README](../README.md)*
