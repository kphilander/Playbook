# Compass

**Open-source responsible gambling brand guidelines — a CC0-licensed, white-label system any operator can deploy.**

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](_brand.yml)

---

## What is Compass?

Compass is a complete, forkable brand guidelines system for responsible gambling (RG) programs. It provides everything an operator needs to build a consistent, evidence-informed, player-friendly RG brand: identity foundations, voice and tone guidelines, messaging frameworks, accessibility standards, multi-jurisdiction compliance modules, collateral templates, and design briefs.

Most RG content today feels like compliance fine print — warning labels that players learn to ignore. Compass takes a different approach. Inspired by modern wellness brands like Calm and Headspace, Compass treats responsible gambling as something players genuinely want to engage with: a resource, not a restriction. The result is an RG program that regulators respect and players actually use.

## Who is this for?

- **Casino operators and iGaming companies** who need a turnkey RG brand system
- **Sports betting platforms** launching or upgrading their responsible gambling programs
- **Gambling regulators** seeking a baseline standard they can recommend to licensees
- **Non-profits and advocacy organizations** building RG outreach campaigns
- **Designers and product teams** who need RG-specific component specs and copy

## Quick start

1. **Fork this repository** to your own GitHub account
2. **Edit [`_brand.yml`](_brand.yml)** — replace the program name, colors, fonts, and helpline numbers with your own. This single file drives the entire system.
3. **Choose your jurisdictions** — keep the jurisdiction modules you operate in (e.g., `jurisdictions/united-kingdom/`), remove the rest
4. **Customize messaging** — adapt the taglines, CTAs, and tone examples in `brand-book/05-messaging-framework.md` to your brand voice
5. **Hand off design briefs** — give your designer the specs in `implementation/figma-briefs/` to create visual assets in Figma or your tool of choice

## Repository structure

```
Compass/
├── _brand.yml                       # White-label configuration engine
├── README.md                        # You are here
├── LICENSE                          # CC0 1.0 Universal
├── CONTRIBUTING.md                  # How to contribute
├── CHANGELOG.md                     # Version history
│
├── brand-book/                      # Core brand guidelines
│   ├── 00-introduction.md           # Purpose and how to use this book
│   ├── 01-brand-foundation.md       # Mission, vision, values, pillars
│   ├── 02-brand-personality.md      # Archetypes, traits, emotional attributes
│   ├── 03-visual-identity.md        # Logo, color, typography, icons, photography
│   ├── 04-voice-and-tone.md         # Voice principles, language guide
│   ├── 05-messaging-framework.md    # Taglines, CTAs, message hierarchy
│   ├── 06-accessibility.md          # WCAG 2.1 AA, inclusive design
│   ├── 07-application-guidelines.md # Cross-channel application rules
│   ├── 08-governance.md             # Brand stewardship and versioning
│   └── glossary.md                  # RG terminology guide
│
├── visual-identity/                 # Asset specs and placeholder directories
│   ├── logo/                        # Logo usage rules and file placeholders
│   ├── color/                       # Palette, accessibility matrix, semantic mapping
│   ├── typography/                  # Type scale, font pairing, font files
│   ├── iconography/                 # Icon style guide and SVG library
│   ├── photography/                 # Photo direction and style guide
│   └── illustration/                # Illustration style guide
│
├── messaging/                       # Messaging content library
│   ├── core-messages.md             # Universal RG messages
│   ├── tagline-system.md            # Tagline hierarchy and rotation
│   ├── calls-to-action.md           # CTA library by function
│   ├── stigma-free-language.md      # Person-first language guide (30+ terms)
│   ├── myth-busting.md              # Common gambling myths corrected
│   └── player-segments/             # Audience-specific messaging
│
├── jurisdictions/                   # Regulatory compliance modules
│   ├── _template/                   # Template for adding new jurisdictions
│   ├── united-kingdom/              # UKGC, ASA/CAP, GAMSTOP, GambleAware
│   ├── united-states/               # NCPG, AGA, 1-800-GAMBLER + state modules
│   ├── australia/                   # ACMA, NCPF taglines
│   ├── canada/                      # Provincial: BC (GameSense/BCLC), Ontario
│   └── european-union/              # CEN 16259, Malta, Sweden, Germany, etc.
│
├── collateral/                      # Templates for every RG touchpoint
│   ├── digital/                     # Website, mobile app, email, social media
│   ├── print/                       # Brochures, posters, rack cards, table tents
│   ├── environmental/               # Venue signage, info centers, ATM areas
│   ├── video-audio/                 # TV/radio spots, pre-roll, hold messages
│   └── customer-service/            # Scripts, training, staff FAQ
│
├── implementation/                  # Adoption guides for operators
│   ├── quick-start.md               # 30-minute quick-start guide
│   ├── figma-briefs/                # Design briefs for Figma asset creation
│   ├── checklist.md                 # Comprehensive launch checklist
│   └── measurement-framework.md     # Measuring RG program effectiveness
│
└── examples/                        # Worked example with fictional operator
    └── fictional-operator/          # Complete brand application sample
```

## How the white-label system works

The [`_brand.yml`](_brand.yml) file is the engine. It contains every customizable value: your program name, color palette, typography, helpline numbers, taglines, and legal defaults. Throughout the repository, content files use `{{PLACEHOLDER}}` tokens (like `{{PROGRAM_NAME}}`, `{{HELPLINE_NUMBER}}`, `{{PRIMARY_TAGLINE}}`) that reference values in this config.

When you fork the repo and edit `_brand.yml`, you're customizing the entire system in one place. Your brand colors, your helpline numbers, your voice — applied consistently across every touchpoint.

**The adaptive identity model**: Compass is designed to be *recognizable but adaptive*. The structural patterns (message hierarchy, layout principles, information architecture) stay consistent across operators, while the visual surface (colors, fonts, logo) adapts to each operator's brand. This means a player who encounters Compass-based RG content at one casino will intuitively understand the RG content at another — even though they look different.

## License

This project is released under [CC0 1.0 Universal](LICENSE) — dedicated to the public domain. You can copy, modify, distribute, and use this work, even for commercial purposes, without asking permission or providing attribution.

**Why CC0?** Responsible gambling is too important for licensing barriers. Every operator, regulator, and non-profit should be able to deploy effective RG programs without legal friction. CC0 means the entire industry can collaborate on a shared standard.

## Disclaimer

This material is for informational and educational purposes only and does not constitute legal, medical, or professional advice. Gambling regulations vary by jurisdiction and change frequently. Operators should verify all compliance requirements with qualified legal counsel in their specific jurisdictions. While we strive for accuracy, we cannot guarantee that jurisdiction-specific information is current or complete.

## Acknowledgments

Compass builds on the work of organizations advancing responsible gambling worldwide:

- **[GameSense](https://gamesensema.com/)** (BCLC / Massachusetts Gaming Commission) — pioneered the four-pillar RG brand framework
- **[National Council on Problem Gambling](https://www.ncpgambling.org/)** — 1-800-GAMBLER toolkit, person-first language guidance, campaign toolkits
- **[GambleAware](https://www.gambleaware.org/)** (UK) — downloadable brand assets and public-facing RG gateway
- **[American Gaming Association](https://www.americangaming.org/)** — Responsible Gaming Regulations and Statutes Guide, Responsible Marketing Code
- **[Responsible Gambling Council](https://responsiblegambling.org/)** (Canada) — RG Check accreditation and research
- **[International Center for Responsible Gaming](https://www.icrg.org/)** — foundational research on gambling disorder and responsible gambling

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute jurisdiction modules, messaging content, translations, or improvements to the brand system.
