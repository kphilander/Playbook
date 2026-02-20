# Chapter 8: Governance

A brand system is only as good as its stewardship. Without clear ownership, regular review, and a process for updates, guidelines drift and consistency erodes. This chapter defines how to manage, maintain, and evolve the {{PROGRAM_NAME}} brand — and how to measure whether it's working.

---

## Brand stewardship

### Who owns the brand

Every operator deploying {{PROGRAM_NAME}} should designate a **brand owner** — a person or team responsible for:

- Maintaining the guidelines and keeping them current
- Reviewing new content for brand consistency before publication
- Approving adaptations and exceptions
- Coordinating with legal/compliance on jurisdiction-specific messaging
- Training new team members on the brand system
- Managing the relationship with the upstream Compass open-source project

### Recommended ownership model

| Organization size | Recommended owner |
|---|---|
| Small operator (< 50 employees) | Marketing lead or product manager |
| Mid-size operator (50–500 employees) | Dedicated program manager |
| Large operator (500+ employees) | Team with brand manager, content strategist, and compliance liaison |
| Regulator / non-profit | Communications director |

### Cross-functional involvement

While one person or team owns the brand, these functions should be consulted:

| Function | Consulted on |
|---|---|
| **Legal / compliance** | Jurisdiction-specific messaging, required disclaimers, advertising rules |
| **Product / UX** | Digital touchpoint design, feature placement, user flows |
| **Customer service** | Scripts, training content, front-line messaging |
| **Marketing** | Campaign messaging, co-branding, advertising |
| **Data / analytics** | Engagement metrics, content performance, player behavior |

---

## Review cadence

### Annual brand review

Conduct a comprehensive review once per year:

| Review area | What to check |
|---|---|
| **Brand foundation** | Do the mission, vision, and pillars still reflect the program's direction? |
| **Visual identity** | Are assets current? Do colors and fonts still meet accessibility standards? |
| **Voice and tone** | Is the language guide current? Are there new terms to add or retire? |
| **Messaging** | Are taglines and CTAs still effective? Is the content still engaging? |
| **Accessibility** | Have WCAG standards been updated? New requirements? |
| **Jurisdictions** | Have regulatory requirements changed? All modules current? |

### Quarterly regulatory check

Gambling regulations change frequently. Every quarter, verify:

- Jurisdiction-specific required messaging is still accurate
- Helpline numbers and URLs are still active
- Advertising rules haven't changed
- Self-exclusion requirements haven't been updated
- No new jurisdictions need to be added

### Continuous updates

| Trigger | Action | Timeline |
|---|---|---|
| Regulatory change | Update affected jurisdiction module | Within 30 days of effective date |
| Helpline number change | Update `_brand.yml` and all content | Immediately |
| New jurisdiction launch | Create module from template | Before market launch |
| Content underperforming | Review and revise | Within 2 weeks |
| Accessibility issue | Fix | Within 1 week |

---

## Version control

### Semantic versioning

{{PROGRAM_NAME}} brand guidelines use semantic versioning (MAJOR.MINOR.PATCH):

| Version component | When to increment | Example |
|---|---|---|
| **MAJOR** (X.0.0) | Breaking changes to brand identity or architecture | Rebranding, new pillar system, structural reorganization |
| **MINOR** (0.X.0) | New content that doesn't break existing usage | Adding jurisdiction, new collateral templates, new messaging |
| **PATCH** (0.0.X) | Corrections, clarifications, regulatory updates | Updated helpline number, corrected contrast ratio, typo fix |

### CHANGELOG maintenance

Every change must be documented in `CHANGELOG.md`:

```markdown
## [0.2.0] - YYYY-MM-DD

### Added
- Jurisdiction module: Australia (ACMA requirements)
- Interactive content: Game IQ quiz framework

### Changed
- Updated UK helpline number
- Revised session reminder messaging per A/B test results

### Fixed
- Corrected contrast ratio for accent-on-white combination
```

### Git workflow

1. **Main branch** contains current approved guidelines
2. **Feature branches** for proposed changes
3. **Pull requests** for review before merging
4. **Tags** for each version release (e.g., `v0.2.0`)

---

## Approval workflows

### Content approval levels

| Change type | Approval required |
|---|---|
| Typo / formatting fix | Brand owner |
| Messaging update | Brand owner + compliance |
| Visual identity change | Brand owner + design lead |
| Jurisdiction module | Brand owner + legal/compliance |
| Voice / tone change | Brand owner + program lead |
| Structural change | Brand owner + executive sponsor |

### Compliance sign-off

For content with jurisdiction-specific claims:

1. Draft content following brand guidelines
2. Cross-reference against the relevant jurisdiction module
3. Have legal/compliance verify regulatory accuracy
4. Document the review (date, reviewer, jurisdiction)
5. Set a review date in the jurisdiction module

---

## Training

### Onboarding new team members

When someone new joins a team that creates Compass content:

1. **Read the brand book** — at minimum, the Introduction (Chapter 0) and Voice and Tone (Chapter 4)
2. **Review the glossary** — understand preferred and avoided terminology
3. **Walk through `_brand.yml`** — understand how the white-label system works
4. **Review existing content** — read 3 examples that embody the Compass voice
5. **Write a test piece** — draft a short piece and have the brand owner review it

**Estimated time**: 2–3 hours for thorough onboarding.

### Ongoing education

- Share examples of good and bad player education messaging (anonymized)
- When guidelines are updated, summarize changes for all content creators
- Consider an annual brand refresh workshop
- Monitor industry developments and share relevant findings

---

## Upstream contributions

If you've adopted Compass from the open-source repository and made improvements, consider contributing them back.

### What to contribute

| Contribution type | Impact |
|---|---|
| New jurisdiction module | High — helps operators in new markets |
| Translation | High — expands accessibility |
| Messaging improvements backed by data | High — evidence-based improvements benefit everyone |
| Accessibility improvements | High — helps all players |
| Bug fixes (broken links, typos, inaccuracies) | Medium — maintains quality |
| New collateral templates | Medium — expands the toolkit |
| Interactive content concepts | Medium — new quiz/calculator ideas |

### How to contribute

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the contribution workflow and content standards.

---

## Measuring success

### North star: Operator adoption

The primary success metric for Compass as an open-source project is **operator adoption** — the number of operators who fork, customize, and deploy the system.

| Metric | How to measure |
|---|---|
| Forks | GitHub fork count |
| Deployments | Self-reported (operators who share their implementation) |
| Contributions | PRs and issues from adopters |
| Star count | GitHub stars as a proxy for interest |

### Downstream proof: Player engagement

For individual operators, the proof that Compass works is **player engagement with the content**:

| Metric | How to measure |
|---|---|
| Quiz completions | Number of players who start and finish quizzes |
| Content engagement | Time on page, scroll depth, click-through on Compass content |
| Tool adoption | Percentage of players with at least one active limit |
| Feature usage | Session reminder activations, bankroll planner usage |
| Share rate | How often players share quiz results or myth-busters |
| Return visits | How often players come back to the content hub |

### Content performance

| Metric | What it tells you |
|---|---|
| Quiz completion rate | Is the content engaging enough to finish? |
| Share rate | Is the content interesting enough to share voluntarily? |
| Helpline click-through | Are support resources findable when needed? |
| Deposit limit adoption | Are tools framed effectively as features? |
| Content hub return visits | Is the content worth coming back to? |
| Social engagement rate | Does the content earn attention on social media? |

### What NOT to measure

Compass is not a clinical intervention. Don't measure:
- "Problem gambling reduction" (Compass doesn't treat conditions)
- "Harm prevention" (Compass prevents nothing — it informs)
- "At-risk player identification" (Compass doesn't diagnose)

Measure engagement. Measure adoption. Measure whether players find the content useful and interesting. That's the standard.

See `implementation/measurement-framework.md` for a complete measurement plan template.

---

*Previous: [Chapter 7 — Application Guidelines](07-application-guidelines.md) | Next: [Glossary](glossary.md)*
