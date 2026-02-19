# Chapter 8: Governance

This chapter defines how to manage, maintain, and evolve the {{PROGRAM_NAME}} brand over time. A brand system is only as good as its stewardship — without clear ownership, regular review, and a process for updates, guidelines drift and consistency erodes.

---

## Brand stewardship

### Who owns the RG brand

Every operator deploying {{PROGRAM_NAME}} should designate a **brand owner** — a person or team responsible for:

- Maintaining the brand guidelines and keeping them current
- Reviewing new content for brand consistency before publication
- Approving adaptations and exceptions to the guidelines
- Coordinating with legal/compliance on jurisdiction-specific messaging
- Training new team members on the brand system
- Managing the relationship with the upstream Compass open-source project

### Recommended ownership model

| Organization size | Recommended owner |
|---|---|
| Small operator (< 50 employees) | Marketing lead or product manager |
| Mid-size operator (50-500 employees) | Dedicated RG program manager |
| Large operator (500+ employees) | RG team with brand manager, content strategist, and compliance liaison |
| Regulator / non-profit | Communications director |

### Cross-functional involvement

While one person or team owns the brand, these functions should be consulted on relevant decisions:

| Function | Consulted on |
|---|---|
| **Legal / compliance** | Jurisdiction-specific messaging, required disclaimers, advertising rules |
| **Product / UX** | Digital touchpoint design, feature placement, user flows |
| **Customer service** | Scripts, training content, front-line messaging |
| **Marketing** | Campaign messaging, co-branding, advertising |
| **Research** | Messaging effectiveness, player feedback, behavior data |
| **Responsible gambling team** | Program strategy, tool selection, player protection policies |

---

## Review cadence

### Annual brand review

Conduct a comprehensive review of the brand guidelines once per year. This review should cover:

| Review area | What to check |
|---|---|
| **Brand foundation** | Do the mission, vision, and pillars still reflect the program's direction? |
| **Visual identity** | Are assets current? Do colors and fonts still meet accessibility standards? Are there new platform requirements? |
| **Voice and tone** | Is the language guide current with best practices? Are there new terms to add or retire? |
| **Messaging** | Are taglines and CTAs still effective? Is the message architecture still comprehensive? |
| **Accessibility** | Have WCAG standards been updated? Are there new accessibility requirements? |
| **Jurisdictions** | Have regulatory requirements changed? Are all jurisdiction modules current? |

### Quarterly regulatory check

Gambling regulations change frequently. Every quarter, verify that:

- Jurisdiction-specific required messaging is still accurate
- Helpline numbers and URLs are still active
- Advertising rules haven't changed
- Self-exclusion requirements haven't been updated
- No new jurisdictions need to be added

### Continuous updates

Some changes don't wait for a review cycle:

| Trigger | Action | Timeline |
|---|---|---|
| Regulatory change | Update affected jurisdiction module | Within 30 days of effective date |
| Helpline number change | Update `_brand.yml` and all affected content | Immediately |
| New jurisdiction launch | Create jurisdiction module from template | Before market launch |
| Player feedback indicating confusion | Review and revise affected messaging | Within 2 weeks |
| Accessibility issue discovered | Fix the issue | Within 1 week |

---

## Version control

### Semantic versioning

{{PROGRAM_NAME}} brand guidelines use semantic versioning (MAJOR.MINOR.PATCH):

| Version component | When to increment | Example |
|---|---|---|
| **MAJOR** (X.0.0) | Breaking changes to brand identity, fundamental voice shifts, system architecture changes | Rebranding, new pillar system, structural reorganization |
| **MINOR** (0.X.0) | New content that doesn't break existing usage — new chapters, jurisdiction modules, collateral templates | Adding Australia jurisdiction, new campaign messaging |
| **PATCH** (0.0.X) | Corrections, clarifications, regulatory updates, typo fixes | Updated UK helpline number, corrected contrast ratio |

### CHANGELOG maintenance

Every change to the brand guidelines must be documented in `CHANGELOG.md`:

```markdown
## [0.2.0] - YYYY-MM-DD

### Added
- Jurisdiction module: Australia (ACMA requirements, state-territory modules)
- Collateral template: Mobile app onboarding flow

### Changed
- Updated UK helpline number to reflect GambleAware rebrand
- Revised self-exclusion messaging per user research findings

### Fixed
- Corrected contrast ratio for accent-on-white combination
- Fixed broken link in Chapter 5 messaging framework
```

### Git workflow

For organizations using Git to manage their brand guidelines:

1. **Main branch** contains the current approved guidelines
2. **Feature branches** for proposed changes (e.g., `update/uk-advertising-rules`)
3. **Pull requests** for review before merging to main
4. **Tags** for each version release (e.g., `v0.2.0`)

This workflow provides:
- Full history of every change and who made it
- Ability to diff versions and see exactly what changed
- Rollback capability if a change causes issues
- Clear review process before changes go live

---

## Approval workflows

### Content approval levels

Not all changes need the same level of review:

| Change type | Approval required | Examples |
|---|---|---|
| **Typo / formatting fix** | Brand owner | Fixing a broken link, correcting a typo |
| **Messaging update** | Brand owner + compliance | New tagline, revised CTA, updated self-assessment copy |
| **Visual identity change** | Brand owner + design lead | New icon, color palette adjustment, logo modification |
| **Jurisdiction module** | Brand owner + legal/compliance | New jurisdiction, updated regulatory requirements |
| **Voice / tone change** | Brand owner + RG program lead | New language guidelines, retired phrases |
| **Structural change** | Brand owner + executive sponsor | New brand pillars, architecture changes, major repositioning |

### Compliance sign-off

For any content that includes jurisdiction-specific claims or required messaging:

1. Draft the content following the brand guidelines
2. Cross-reference against the relevant jurisdiction module
3. Have legal/compliance verify regulatory accuracy
4. Document the compliance review (date, reviewer, jurisdiction)
5. Set a review date (typically quarterly) in the jurisdiction module's `last_updated` field

---

## Training

### Onboarding new team members

When someone new joins a team that creates or manages RG content:

1. **Read the brand book** — at minimum, the Introduction (Chapter 0) and Voice and Tone (Chapter 4)
2. **Review the glossary** — understand preferred and avoided terminology
3. **Walk through `_brand.yml`** — understand how the white-label system works
4. **Review three examples** — look at existing content that exemplifies the brand
5. **Write a test piece** — draft a short piece of RG content and have the brand owner review it

**Estimated time**: 2-3 hours for a thorough onboarding.

### Ongoing education

- Share notable examples of good and bad RG messaging with the team (anonymized if necessary)
- When the brand guidelines are updated, send a summary of changes to all content creators
- Consider an annual "brand refresh" workshop where the team reviews the guidelines together
- Monitor industry developments (new research on messaging effectiveness, regulatory changes) and share relevant findings

---

## Upstream contributions

If you've adopted Compass from the open-source repository and made improvements, consider contributing them back:

### What to contribute

| Contribution type | Impact |
|---|---|
| **New jurisdiction module** | High — helps operators in new markets |
| **Translation** | High — expands accessibility |
| **Messaging improvements backed by research** | High — evidence-based improvements benefit everyone |
| **Accessibility improvements** | High — helps all players |
| **Bug fixes** (broken links, typos, inaccuracies) | Medium — maintains quality |
| **New collateral templates** | Medium — expands the toolkit |

### How to contribute

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the contribution workflow, content standards, and review process.

### What not to contribute

- Proprietary content specific to your operator
- Content that promotes gambling
- Unverified regulatory claims
- Content that contradicts person-first language guidelines

---

## Measuring brand effectiveness

A brand system is only valuable if it achieves its goals. Measure {{PROGRAM_NAME}} effectiveness across three dimensions:

### Awareness

*Do players know the program exists?*

| Metric | How to measure |
|---|---|
| Aided awareness | Survey: "Have you heard of {{PROGRAM_NAME}}?" |
| Unaided awareness | Survey: "Can you name any RG programs?" |
| Website traffic | Analytics: unique visits to RG landing page |
| Social reach | Platform analytics: impressions on RG content |

### Engagement

*Do players use the tools and content?*

| Metric | How to measure |
|---|---|
| Tool adoption | Percentage of players with at least one active limit |
| Self-assessment completion | Number of self-assessments started and completed |
| Session reminder usage | Percentage of players with active session reminders |
| Content engagement | Time on page, scroll depth, click-through on RG content |
| Helpline referrals | Click/call tracking on helpline numbers from digital touchpoints |

### Perception

*How do players feel about the program?*

| Metric | How to measure |
|---|---|
| Brand sentiment | Survey: "How would you describe {{PROGRAM_NAME}} in your own words?" |
| Stigma reduction | Survey: "How comfortable would you be using RG tools?" (before/after) |
| Helpfulness | Survey: "How helpful do you find the RG information on this platform?" |
| Trust | Survey: "Do you trust that this operator cares about player wellbeing?" |

See `implementation/measurement-framework.md` for a complete measurement plan template.

---

*Previous: [Chapter 7 — Application Guidelines](07-application-guidelines.md) | Next: [Glossary](glossary.md)*
