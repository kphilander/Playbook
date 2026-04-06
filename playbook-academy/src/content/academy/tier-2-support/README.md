---
content_type: training-program
title: "Tier 2 Support — Program Overview"
program_id: tier-2-support
audience_role:
  - tier-2-support
  - senior-support-agent
total_modules: 4
total_duration_minutes: 85
certification_name: "Tier 2 Support Certificate"
recertification_months: 6
prerequisites:
  - program_id: all-employees
    type: hard
  - program_id: frontline
    type: soft
last_updated: "2025-03-21"
---

# Tier 2 Support

**Specialized training for the 5% of interactions where entertainment literacy ends and human support begins.**

> **Operator note**: This program teaches staff to handle the most sensitive player interactions — emotional distress, crisis signals, referral conversations, and concerned family members. Before deploying, configure helpline numbers, self-exclusion URLs, and clinical services links in `_brand.yml`. All exercises use the Tier 2 voice: warm, direct, no humor. Narrator scripts should be recorded in the support voice register.

---

## Program summary

| | |
|---|---|
| **Audience** | Specialized support staff, senior CS agents, player protection team |
| **Modules** | 4 |
| **Duration** | ~85 minutes |
| **Hard prerequisite** | All Employees (both modules, passed) |
| **Soft prerequisite** | Frontline (recommended, not required) |
| **Passing score** | 80% per module |
| **Certification** | Tier 2 Support Certificate |
| **Recertification** | Every 6 months |

## Why 6-month recertification

Tier 2 interactions carry higher stakes than any other {{PROGRAM_NAME}} touchpoint. A poorly handled distress call or a missed escalation signal can have real consequences. The 6-month recertification cycle exists because:

- **Skills decay faster under low frequency.** Most agents handle Tier 2 interactions infrequently. The muscle memory fades.
- **Helpline numbers and referral paths change.** Support organizations update contact methods, hours, and eligibility criteria.
- **Regulatory requirements evolve.** Self-exclusion programs, mandatory reporting rules, and crisis protocols change across jurisdictions.

## Modules

| # | Module | Duration | What it covers |
|---|--------|----------|---------------|
| 00 | [Recognizing Escalation Signals](00-recognizing-escalation-signals.md) | ~20 min | Behavioral indicators, frustrated vs. distressed, red flags, the at-risk player profile |
| 01 | [Tier 2 Conversation Skills](01-tier-2-conversation-skills.md) | ~25 min | The Tier 2 voice shift, distress and dispute scenarios, de-escalation, what not to say |
| 02 | [Referral Pathways](02-referral-pathways.md) | ~20 min | Helpline directory, self-exclusion programs, cool-off vs. self-exclusion, external support |
| 03 | [Supporting Concerned Others](03-concerned-others.md) | ~20 min | Friends-and-family segment, privacy boundaries, validation without confirmation, resources |

## What you'll be able to do after this program

- Identify behavioral signals that indicate a player may need Tier 2 support
- Distinguish between a frustrated customer and a player in genuine distress
- Conduct a Tier 2 conversation using the warm/direct voice — no humor, no clinical language
- De-escalate tense interactions without being patronizing or dismissive
- Present helpline and self-exclusion options naturally, not as warnings
- Navigate privacy boundaries when a concerned family member contacts you
- Route each situation to the correct referral pathway
- Know when to activate your organization's crisis protocol

## The Tier 2 boundary

This program teaches you to recognize when a conversation crosses from Tier 1 (entertainment literacy) to Tier 2 (support). The dividing line is tone, not topic:

- **Tier 1**: A player asks about deposit limits. You explain the feature confidently.
- **Tier 2**: A player says they can't stop depositing. You listen, acknowledge, and offer the helpline.

You are not a counselor. You provide information, tools, and referrals. You listen with empathy and connect people to the right resources. That is the Tier 2 role, and it matters more than most people realize.

## Operator integration points

This program references several operator-specific systems. Configure these in `_brand.yml` before deploying:

| Integration | Used in module | `_brand.yml` key |
|-------------|---------------|-------------------|
| Self-exclusion enrollment | 02 — Referral Pathways | `integrations.self_exclusion_process` |
| Clinical / counseling services | 02 — Referral Pathways, 03 — Concerned Others | `integrations.clinical_services` |
| Internal escalation policies | 00 — Escalation Signals, 01 — Conversation Skills | `integrations.internal_policies` |

## What comes next

After completing Tier 2 Support, staff should:

- Complete operator-specific crisis protocol training (outside this curriculum)
- Review the [Conversation Scripts]({{PLAYBOOK_REPO}}/blob/main/collateral/customer-service/conversation-scripts.md) — Scenarios 4-6 and 8 are core Tier 2 references
- Bookmark the [Staff FAQ]({{PLAYBOOK_REPO}}/blob/main/collateral/customer-service/staff-faq.md) for quick reference during live interactions
- Recertify every 6 months to maintain the Tier 2 Support Certificate
