# Collateral Adaptation Guide — {{JURISDICTION_NAME}}

> **Operator note**: This guide maps every {{PROGRAM_NAME}} collateral piece to jurisdiction-specific adaptations. Use it alongside the compliance module to ensure every touchpoint meets {{JURISDICTION_NAME}} requirements. Each row tells you what to change and which `_brand.yml` token drives the change.

> **Last verified**: {{YYYY-MM-DD}}
> **Next review due**: {{YYYY-MM-DD}} *(quarterly, per [governance cadence](../../brand-book/08-governance.md))*

---

## Quick-scan index

| Section | Description |
|---|---|
| [How to use this guide](#how-to-use-this-guide) | Process for adapting collateral |
| [Digital collateral](#digital-collateral) | Website, app, email, social media |
| [Print collateral](#print-collateral) | Brochure, rack card, table tent, helpline card |
| [Environmental collateral](#environmental-collateral) | Venue signage, digital displays |
| [Video and audio collateral](#video-and-audio-collateral) | TV, radio, pre-roll, hold messages |
| [Customer service collateral](#customer-service-collateral) | Scripts, FAQ, training materials |
| [Universal changes](#universal-changes) | Changes that apply to every touchpoint |

---

## How to use this guide

1. **Start with universal changes** — these apply to every collateral piece
2. **Work through each category** — check every row in the adaptation tables
3. **Replace tokens** — swap `{{PLACEHOLDER}}` tokens with values from `_brand.yml`
4. **Verify against the compliance module** — cross-check each adaptation against the [compliance module]({{COMPLIANCE_MODULE_PATH}})
5. **Get sign-off** — legal/compliance review before deployment

### Token reference

| Token | Value | `_brand.yml` key |
|---|---|---|
| `{{HELPLINE_NUMBER}}` | {{HELPLINE_NUMBER}} | `helplines.{{jurisdiction-key}}.number` |
| `{{HELPLINE_NAME}}` | {{HELPLINE_NAME}} | `helplines.{{jurisdiction-key}}.label` |
| `{{HELPLINE_WEBSITE}}` | {{HELPLINE_WEBSITE}} | `helplines.{{jurisdiction-key}}.website` |
| `{{MIN_AGE}}` | {{MIN_AGE}} | `legal.minimum_gambling_age.{{jurisdiction-key}}` |
| `{{MANDATORY_STATEMENT}}` | "{{MANDATORY_STATEMENT}}" | `messaging.mandatory.{{jurisdiction-key}}` |
| `{{SELF_EXCLUSION_PROGRAM}}` | {{SELF_EXCLUSION_PROGRAM}} | — |

---

## Universal changes

These adaptations apply to **every** collateral piece in {{JURISDICTION_NAME}}:

| Change | Details | Applies to |
|---|---|---|
| **Helpline number** | Replace `{{HELPLINE_NUMBER}}` with jurisdiction number | All touchpoints |
| **Helpline label** | Replace `{{HELPLINE_NAME}}` with jurisdiction label | All touchpoints |
| **Age notice** | Replace `{{MIN_AGE}}` with jurisdiction age | All touchpoints |
| **Mandatory statement** | Add `{{MANDATORY_STATEMENT}}` where required | Per compliance module |
| **Self-exclusion program name** | Use `{{SELF_EXCLUSION_PROGRAM}}` in Tier 2 contexts | Support touchpoints |

---

## Digital collateral

### Website

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Footer helpline | [digital/website-content-hub.md](../../collateral/digital/website-content-hub.md) | Update number and label to {{JURISDICTION_NAME}} helpline | `{{HELPLINE_NUMBER}}`, `{{HELPLINE_NAME}}` |
| Age gate | [digital/website-content-hub.md](../../collateral/digital/website-content-hub.md) | Set minimum age to {{MIN_AGE}} | `{{MIN_AGE}}` |
| Mandatory messaging | [digital/website-content-hub.md](../../collateral/digital/website-content-hub.md) | {{MANDATORY_DISPLAY_RULES}} | `{{MANDATORY_STATEMENT}}` |
| Self-exclusion page | [digital/website-content-hub.md](../../collateral/digital/website-content-hub.md) | Link to {{SELF_EXCLUSION_PROGRAM}}, use jurisdiction language | — |
| Legal disclaimer | [digital/website-content-hub.md](../../collateral/digital/website-content-hub.md) | Add jurisdiction-specific legal text | — |

### Mobile app

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Session reminders | [digital/mobile-app-touchpoints.md](../../collateral/digital/mobile-app-touchpoints.md) | {{SESSION_REMINDER_REQUIREMENTS}} | — |
| Deposit limit display | [digital/mobile-app-touchpoints.md](../../collateral/digital/mobile-app-touchpoints.md) | {{DEPOSIT_LIMIT_REQUIREMENTS}} | — |
| Push notifications | [digital/mobile-app-touchpoints.md](../../collateral/digital/mobile-app-touchpoints.md) | {{NOTIFICATION_RESTRICTIONS}} | — |

### Email templates

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Footer block | [digital/email-templates.md](../../collateral/digital/email-templates.md) | Jurisdiction helpline and mandatory messaging in every email footer | `{{HELPLINE_NUMBER}}`, `{{MANDATORY_STATEMENT}}` |
| Unsubscribe | [digital/email-templates.md](../../collateral/digital/email-templates.md) | {{UNSUBSCRIBE_REQUIREMENTS}} | — |

### Social media

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Post copy | [digital/social-media-toolkit.md](../../collateral/digital/social-media-toolkit.md) | {{SOCIAL_MEDIA_REQUIREMENTS}} | — |
| Bio/profile | [digital/social-media-toolkit.md](../../collateral/digital/social-media-toolkit.md) | Helpline in bio or pinned post | `{{HELPLINE_NUMBER}}` |
| Paid ads | [digital/social-media-toolkit.md](../../collateral/digital/social-media-toolkit.md) | {{PAID_AD_RESTRICTIONS}} | — |

---

## Print collateral

### Brochure

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Back panel helpline | [print/brochure-tri-fold.md](../../collateral/print/brochure-tri-fold.md) | Jurisdiction helpline with display rules | `{{HELPLINE_NUMBER}}`, `{{HELPLINE_NAME}}` |
| Age notice | [print/brochure-tri-fold.md](../../collateral/print/brochure-tri-fold.md) | {{MIN_AGE}}+ notice, minimum {{FONT_SIZE}} | `{{MIN_AGE}}` |
| Mandatory statement | [print/brochure-tri-fold.md](../../collateral/print/brochure-tri-fold.md) | {{PLACEMENT_RULES}} | `{{MANDATORY_STATEMENT}}` |

### Rack card

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Helpline display | [print/rack-card.md](../../collateral/print/rack-card.md) | Jurisdiction helpline, prominent placement | `{{HELPLINE_NUMBER}}` |
| Legal line | [print/rack-card.md](../../collateral/print/rack-card.md) | Age notice + mandatory statement | `{{MIN_AGE}}`, `{{MANDATORY_STATEMENT}}` |

### Table tent

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Helpline display | [print/table-tent.md](../../collateral/print/table-tent.md) | Jurisdiction helpline | `{{HELPLINE_NUMBER}}` |
| Mandatory statement | [print/table-tent.md](../../collateral/print/table-tent.md) | {{PLACEMENT_RULES}} | `{{MANDATORY_STATEMENT}}` |

### Helpline card

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Phone number | [print/helpline-card.md](../../collateral/print/helpline-card.md) | Jurisdiction helpline as primary number | `{{HELPLINE_NUMBER}}` |
| Website | [print/helpline-card.md](../../collateral/print/helpline-card.md) | Jurisdiction helpline website | `{{HELPLINE_WEBSITE}}` |
| Label | [print/helpline-card.md](../../collateral/print/helpline-card.md) | Jurisdiction helpline name | `{{HELPLINE_NAME}}` |

---

## Environmental collateral

### Venue signage

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Entry sign | [environmental/venue-signage-guide.md](../../collateral/environmental/venue-signage-guide.md) | Age restriction ({{MIN_AGE}}+), mandatory statement | `{{MIN_AGE}}`, `{{MANDATORY_STATEMENT}}` |
| Floor sign | [environmental/venue-signage-guide.md](../../collateral/environmental/venue-signage-guide.md) | Helpline display | `{{HELPLINE_NUMBER}}` |
| ATM area | [environmental/venue-signage-guide.md](../../collateral/environmental/venue-signage-guide.md) | {{ATM_SIGNAGE_REQUIREMENTS}} | — |
| Exit area | [environmental/venue-signage-guide.md](../../collateral/environmental/venue-signage-guide.md) | {{EXIT_SIGNAGE_REQUIREMENTS}} | — |

### Digital displays

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Helpline rotation | [environmental/digital-display-specs.md](../../collateral/environmental/digital-display-specs.md) | Jurisdiction helpline in display rotation | `{{HELPLINE_NUMBER}}` |
| Mandatory messaging | [environmental/digital-display-specs.md](../../collateral/environmental/digital-display-specs.md) | {{DISPLAY_REQUIREMENTS}} | `{{MANDATORY_STATEMENT}}` |

---

## Video and audio collateral

### TV spot

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| End card | [video-audio/tv-spot-scripts.md](../../collateral/video-audio/tv-spot-scripts.md) | Jurisdiction helpline + mandatory statement | `{{HELPLINE_NUMBER}}`, `{{MANDATORY_STATEMENT}}` |
| Voiceover | [video-audio/tv-spot-scripts.md](../../collateral/video-audio/tv-spot-scripts.md) | {{VO_REQUIREMENTS}} | — |
| Time restrictions | [video-audio/tv-spot-scripts.md](../../collateral/video-audio/tv-spot-scripts.md) | {{BROADCAST_TIME_RESTRICTIONS}} | — |

### Radio spot

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Helpline read | [video-audio/radio-scripts.md](../../collateral/video-audio/radio-scripts.md) | Jurisdiction helpline spoken in every spot | `{{HELPLINE_NUMBER}}` |
| Mandatory statement | [video-audio/radio-scripts.md](../../collateral/video-audio/radio-scripts.md) | {{MANDATORY_READ}} | `{{MANDATORY_STATEMENT}}` |

### Pre-roll / digital video

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Overlay | [video-audio/digital-pre-roll.md](../../collateral/video-audio/digital-pre-roll.md) | Helpline overlay, age notice | `{{HELPLINE_NUMBER}}`, `{{MIN_AGE}}` |

### Hold messages

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Helpline mention | [video-audio/hold-messages.md](../../collateral/video-audio/hold-messages.md) | Jurisdiction helpline in hold rotation | `{{HELPLINE_NUMBER}}` |

---

## Customer service collateral

### Conversation scripts

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Helpline referral | [customer-service/conversation-scripts.md](../../collateral/customer-service/conversation-scripts.md) | Jurisdiction helpline in all referral scripts | `{{HELPLINE_NUMBER}}` |
| Self-exclusion script | [customer-service/conversation-scripts.md](../../collateral/customer-service/conversation-scripts.md) | Reference {{SELF_EXCLUSION_PROGRAM}} by name | — |
| Age verification | [customer-service/conversation-scripts.md](../../collateral/customer-service/conversation-scripts.md) | {{MIN_AGE}}+ requirement in verification scripts | `{{MIN_AGE}}` |

### Staff FAQ

| Element | Spec reference | Adaptation | Token |
|---|---|---|---|
| Helpline Q&A | [customer-service/staff-faq.md](../../collateral/customer-service/staff-faq.md) | Update Q30 with jurisdiction helpline | `{{HELPLINE_NUMBER}}` |
| Self-exclusion Q&A | [customer-service/staff-faq.md](../../collateral/customer-service/staff-faq.md) | Add jurisdiction-specific self-exclusion Q&A | — |
| Age Q&A | [customer-service/staff-faq.md](../../collateral/customer-service/staff-faq.md) | Update Q23 with jurisdiction age | `{{MIN_AGE}}` |

---

*Cross-references: [Compliance Module]({{COMPLIANCE_MODULE_PATH}}) | [Collateral specs](../../collateral/) | [`_brand.yml`](../../_brand.yml) | [Messaging Framework — Warning Statement Standards](../../brand-book/05-messaging-framework.md#warning-statement-standards)*
