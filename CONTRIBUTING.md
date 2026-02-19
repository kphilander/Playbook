# Contributing to Compass

Thank you for helping make responsible gambling resources more accessible worldwide. Compass is CC0-licensed, meaning your contributions become part of the public domain — available to every operator, regulator, and advocacy organization without restriction.

## How to contribute

### 1. Fork and branch

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/YOUR-USERNAME/Branding.git
cd Branding
git checkout -b your-branch-name
```

### 2. Make your changes

See the contribution types below for guidance on what's most needed and how to structure your work.

### 3. Submit a pull request

- Write a clear PR title and description
- Reference any related issues
- Note which jurisdictions, touchpoints, or brand book chapters are affected

## What we need most

### Jurisdiction modules

The highest-impact contributions are new or updated jurisdiction modules. Each jurisdiction needs:

| File | Purpose |
|---|---|
| `config.yml` | Helpline numbers, regulator info, required messages |
| `required-messaging.md` | Legally mandated messages with exact wording |
| `advertising-rules.md` | Advertising restrictions and compliance checklist |
| `signage-requirements.md` | Physical venue signage mandates |
| `self-exclusion.md` | Self-exclusion program requirements |
| `reporting-requirements.md` | Regulatory reporting obligations |

Use `jurisdictions/_template/` as your starting point. Every claim about a regulatory requirement must include:
- The specific regulation or statute (e.g., "UKGC LCCP Social Responsibility Code 3.4.1")
- A URL or document reference where the requirement can be verified
- The date the requirement was last verified

### Messaging content

- New player segment messaging (e.g., older adults, specific cultural communities)
- Translations of core messages into other languages
- Evidence-based improvements to existing copy (cite your sources)

### Collateral templates

- New touchpoint templates for contexts we haven't covered
- Improvements to existing templates based on real-world deployment experience

### Accessibility improvements

- Multi-language support (especially RTL languages)
- Screen reader testing results and recommendations
- Cognitive accessibility enhancements

## Content standards

### Language

All content must follow the voice and tone guidelines in [`brand-book/04-voice-and-tone.md`](brand-book/04-voice-and-tone.md):

- **Person-first language**: "person with a gambling problem," not "problem gambler"
- **Non-stigmatizing**: No language that shames, blames, or pathologizes
- **Empowering**: Frame RG as self-care, not restriction
- **Plain language**: Target Grade 6-8 reading level (Flesch-Kincaid)
- **Active voice**: "Set your limits" not "Limits can be set"

See [`brand-book/glossary.md`](brand-book/glossary.md) for the complete preferred terminology guide.

### Citations

When referencing regulatory requirements, research findings, or best practices:
- Include the source name, document title, and date
- Provide a URL where possible
- Note when information was last verified with a `last_updated` field

### File formatting

- All prose content in Markdown (`.md`)
- Configuration files in YAML (`.yml`)
- Use existing file structures as templates — consistency matters
- Keep lines under 100 characters where practical for readable diffs

## Review process

1. **Content review**: Is the information accurate, well-sourced, and consistent with Compass voice and tone?
2. **Structure review**: Does the contribution follow existing file patterns and naming conventions?
3. **Accessibility review**: Does the content meet WCAG 2.1 AA standards where applicable?
4. **Legal review**: For jurisdiction modules, has the regulatory information been verified against primary sources?

## Code of conduct

This project is dedicated to reducing gambling harm. All contributors are expected to:

- Act in good faith with the goal of player protection
- Respect diverse perspectives and experiences
- Avoid conflicts of interest (disclose if you represent a gambling operator or regulator)
- Never contribute content that minimizes gambling harm or promotes gambling

## Questions?

Open an issue on GitHub or email the maintainers at the address listed in [`_brand.yml`](_brand.yml).
