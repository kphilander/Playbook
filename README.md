# Compass

**Open-source brand guidelines for gambling entertainment literacy — CC0-licensed, white-label, built for operators.**

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](_brand.yml)

---

## What is Compass?

Compass is a complete, forkable brand system for gambling entertainment literacy. It gives operators everything they need to build player-facing content that's actually worth engaging with: brand foundations, voice and tone, messaging frameworks, visual identity specs, multi-jurisdiction compliance modules, and ready-to-use collateral templates.

Most gambling education content today fails in one of three ways: it's buried in fine print nobody reads, it's preachy and clinical, or it's so generic it says nothing. All three stem from the same root cause — operators don't treat player education as marketing. Compass fixes that.

Compass is a **content and media brand** — the educational and awareness layer that helps players understand how gambling actually works. It's anchored in the Reno Model of informed choice: most people who gamble do so without problems, gambling is entertainment, and smart players make better decisions when they understand the math, the odds, and the tools available to them.

Think of it this way: Volvo made safety iconic by building beautiful cars that also happen to be the safest on the road. Compass makes gambling literacy engaging by creating content that's genuinely interesting — and also happens to keep play sustainable.

## Who is this for?

- **Casino operators and iGaming companies** who want player education content their marketing team is proud to co-brand
- **Sports betting platforms** building entertainment literacy programs that retain informed players
- **Gambling regulators** looking for a quality baseline they can recommend to licensees
- **Non-profits and advocacy organizations** creating engaging outreach content
- **Marketing, product, and design teams** who need specs, copy frameworks, and design briefs for player-facing content

## Why operators deploy Compass

**Player retention.** Informed players play longer and more sustainably. They understand the games, manage their bankrolls, and enjoy the experience more. They churn less.

**Brand differentiation.** In a market where every operator's RG page looks the same, Compass content stands out. It tells players: "We take you seriously."

**Regulatory compliance.** Jurisdictions require player-facing education and messaging. Compass makes compliance content that actually works — not just content that checks a box.

## Quick start

1. **Fork this repository** to your own GitHub account
2. **Edit [`_brand.yml`](_brand.yml)** — your program name, colors, fonts, helpline numbers, and taglines. This single file drives the entire system.
3. **Choose your jurisdictions** — keep the modules you operate in (`jurisdictions/united-kingdom/`), delete the rest
4. **Customize messaging** — pick from the tagline system, adapt tone examples, write your own
5. **Hand off design briefs** — give your designer the specs in `implementation/figma-briefs/`

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
│   ├── 00-introduction.md           # Purpose, the engagement gap, two-tier system
│   ├── 01-brand-foundation.md       # Mission, vision, pillars (Sharp/Choice/Open/Social)
│   ├── 02-brand-personality.md      # The Insider archetype, humor guidelines
│   ├── 03-visual-identity.md        # Logo, color, typography, icons, photography
│   ├── 04-voice-and-tone.md         # The confident myth-buster voice
│   ├── 05-messaging-framework.md    # Tagline system, CTAs, interactive content briefs
│   ├── 06-accessibility.md          # WCAG 2.1 AA, inclusive design
│   ├── 07-application-guidelines.md # Cross-channel rules, co-branding, integration
│   ├── 08-governance.md             # Stewardship, versioning, measuring adoption
│   └── glossary.md                  # Gambling terms for marketing teams
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
│   ├── core-messages.md             # Universal messages (jurisdiction-agnostic)
│   ├── tagline-system.md            # Tagline hierarchy and rotation
│   ├── calls-to-action.md           # CTA library by function
│   ├── myth-busting.md              # Common gambling myths, debunked
│   └── player-segments/             # Audience-specific messaging
│
├── jurisdictions/                   # Regulatory compliance modules
│   ├── _template/                   # Template for adding new jurisdictions
│   ├── united-kingdom/              # UKGC, ASA/CAP, GAMSTOP
│   ├── united-states/               # NCPG, AGA, state-specific modules
│   ├── australia/                   # ACMA, state/territory modules
│   ├── canada/                      # Provincial modules
│   └── european-union/              # CEN 16259, country-specific
│
├── collateral/                      # Templates for every touchpoint
│   ├── digital/                     # Website, mobile app, email, social media
│   ├── print/                       # Brochures, posters, rack cards, table tents
│   ├── environmental/               # Venue signage, info centers, ATM areas
│   ├── video-audio/                 # TV/radio spots, pre-roll, hold messages
│   └── customer-service/            # Scripts, training, staff FAQ
│
├── implementation/                  # Adoption guides for operators
│   ├── quick-start.md               # 30-minute quick-start guide
│   ├── figma-briefs/                # Design briefs for Figma asset creation
│   ├── checklist.md                 # Launch checklist
│   └── measurement-framework.md     # Measuring adoption and engagement
│
└── examples/                        # Worked example with fictional operator
    └── fictional-operator/          # Complete brand application sample
```

## How the white-label system works

The [`_brand.yml`](_brand.yml) file is the engine. It holds every customizable value: your program name, color palette, typography, helpline numbers, tagline system, and tone configuration. Throughout the repository, content files use `{{PLACEHOLDER}}` tokens that reference values in this config.

Fork the repo. Edit `_brand.yml`. Your brand identity cascades everywhere.

**The adaptive identity model.** Compass is *recognizable but adaptive*. The structural patterns (message hierarchy, content architecture, layout principles) stay consistent across operators. The visual surface (colors, fonts, logo) adapts to each operator's brand. A player who encounters Compass-based content at one platform will intuitively recognize the content structure at another — even though they look different.

## Two-tier architecture

Compass uses a two-tier system:

- **Tier 1 (this repository, 95% of content):** Entertainment literacy. How games work, smart play habits, myth-busting, interactive quizzes, bankroll tips. Confident, witty, engaging — content players seek out. This is what operators co-brand with.

- **Tier 2 (separate guide, 5%):** Support and crisis touchpoints. Self-exclusion flows, helpline referrals, intervention messaging. Warm, direct, appropriately serious. Built in a later phase within this same repository.

## License

[CC0 1.0 Universal](LICENSE) — public domain. Copy, modify, distribute, and use this work for any purpose, including commercial, without permission or attribution.

**Why CC0?** Player education is too important for licensing friction. Every operator should be able to deploy quality content without legal barriers. CC0 means the entire industry can collaborate on one shared standard.

## Disclaimer

This material is for informational and educational purposes only and does not constitute legal, medical, or professional advice. Gambling regulations vary by jurisdiction and change frequently. Operators should verify all compliance requirements with qualified legal counsel. While we strive for accuracy, we cannot guarantee that jurisdiction-specific information is current or complete.

This is not a clinical resource. Compass does not diagnose, treat, or counsel. It is not anti-gambling. It is not a substitute for regulatory compliance.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing jurisdiction modules, messaging content, translations, or improvements to the brand system.
