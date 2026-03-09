# Playbook — Claude Code Context

This is the **Playbook** repository: an open-source, white-label brand system for gambling entertainment literacy.

## What This Project Is

Playbook is a **content/media brand** — the educational and awareness layer of the gambling experience. It creates marketing-quality content that helps players understand how gambling works, make informed decisions, and enjoy their play more.

It is **not** a clinical resource, not pro- or anti-gambling, and not a regulatory tool. It is anchored in the **informed choice model**: most players gamble recreationally without problems, gambling is entertainment, and difficulties arise from lack of information and tools — not from the activity itself.

## Architecture

- **`_brand.yml`** — Master configuration file. Every `{{PLACEHOLDER}}` in the repo resolves from this file. Fork, edit this file, and the entire brand cascades.
- **`_taxonomy.yml`** — Content tagging vocabulary (content types, pillars, tiers, tones, audiences, channels, cultural profiles).
- **`brand-book/`** — 10-chapter brand guidelines (~240KB). The authoritative source for voice, tone, personality, visual identity, messaging, and governance.
- **`visual-identity/`** — Design tokens, logos (SVG), color specs, typography, iconography, photography direction, illustration and motion specs.
- **`messaging/`** — 74 core messages, taglines, CTAs, tone examples, stigma-free language guide, and 6 player segment profiles.
- **`collateral/`** — 41 production-ready HTML/PNG templates across digital, print, environmental, video/audio, customer service, and interactive formats.
- **`how-to-play/`** — Game education guides and quick-reference cards.
- **`jurisdictions/`** — Regulatory compliance modules (US/Nevada, Canada/BC, with templates for new jurisdictions).
- **`localization/`** — Cultural adaptation guides.
- **`lib/`** — Node.js build scripts (token generation, Tailwind theme, placeholder resolution, validation).

## Two-Tier System

- **Tier 1** (95% of content): Entertainment literacy. Confident, witty, informative. The "Playbook voice."
- **Tier 2** (5%): Support and crisis. Warm, direct, no humor. The "support voice."

## Brand Pillars

1. **Open** — "No fine print." Transparency about odds, house edge, T&Cs, game mechanics.
2. **Social** — "Worth sharing." Content designed to travel — quizzes, myth-busters, shareable stats.

## Key Build Commands

```bash
npm run generate          # Generate design tokens, Tailwind theme, injectable CSS
npm run validate          # Validate _brand.yml
npm run build:logos       # Build logo SVGs
npm run build:icons       # Build icon set
npm run build:deck        # Build slide deck
npm run build:cards       # Render quick-reference cards
```

## Custom Skills

- **`/brand-create`** — Generate on-brand content (copy, social posts, messaging, collateral). For operators and content creators.
- **`/brand-maintain`** — Maintain and extend the brand system (templates, chapters, configs). For repo maintainers.
