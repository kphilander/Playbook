# Localization

Playbook content is written in a specific cultural voice — peer-to-peer, individually framed, irreverent, direct, and comfortable with gambling as entertainment. That voice works well in some markets and needs adaptation in others.

This directory contains guidance for adapting Playbook content across cultural contexts.

## What's here

| File | Purpose |
|------|---------|
| [cultural-adaptation-guide.md](cultural-adaptation-guide.md) | Five-spectrum framework for cultural adaptation with before/after examples and research citations |

## How the system works

1. **Tag taxonomy** — [`_taxonomy.yml`](../_taxonomy.yml) defines all valid tags, including five cultural profile spectrums (voice, framing, humor, directness, comfort) and presentation tags (odds format, currency, sports culture, language).

2. **Content frontmatter** — Every content file carries YAML frontmatter with its current cultural profile and presentation tags.

3. **ADAPT markers** — Passages that need cultural attention are flagged with `<!-- ADAPT: type -->` HTML comments in the source files. These are invisible in rendered markdown but searchable.

4. **Cultural adaptation guide** — Detailed guidance on what each spectrum value means, with rewritten Playbook examples showing how the same content reads across different profiles.

## Quick start

1. Read the [cultural adaptation guide](cultural-adaptation-guide.md)
2. Profile your market using the five spectrums
3. Search content files for `<!-- ADAPT:` to find flagged passages
4. Adapt content and update the frontmatter to reflect your profile
