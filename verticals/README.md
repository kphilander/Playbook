# Vertical Playbooks

**Deployment maps for each line of business. Pick yours, and know what to ship, where it goes, and who needs to know it.**

The rest of this repository is organized by content type: guides in [`how-to-play/`](../how-to-play/), campaigns and segments in [`messaging/`](../messaging/), templates in [`collateral/`](../collateral/), law in [`jurisdictions/`](../jurisdictions/). A vertical playbook cuts across all of that from the operator's side of the counter. It answers one question: *you run a casino floor, a sportsbook, an online lobby, or a lottery network. What does Playbook look like deployed in your world?*

## The playbooks

| Playbook | Covers | Vertical tag |
|----------|--------|--------------|
| [Casino](casino.md) | Land-based gaming floors: tables, slots, cage, host desk, venue | `land-based` |
| [Sportsbook](sportsbook.md) | Retail books and betting apps: pre-game, bet slip, in-play | `sports` |
| [Online gaming](online-gaming.md) | iGaming casino: registration, deposit, lobby, session, email | `interactive` |
| [Lottery](lottery.md) | Draw games, instant tickets, retail counters, lottery apps | `lottery` |

Multi-vertical operators use more than one. The playbooks share a spine, so a program that spans the floor and the app stays one program with two deployment maps, not two programs.

## What's in each playbook

Every playbook follows the same structure:

| Section | What it gives you |
|---------|-------------------|
| The 30-second version | The vertical's core deployment logic |
| The player journey | Touchpoint map: where players are, what runs at each stop |
| What to deploy | The guides, campaigns, myths, and templates that fit this vertical |
| Segments to know | Which [player segments](../messaging/player-segments/) show up most here |
| Staff readiness | The scripts and FAQ your frontline needs before content goes live |
| Jurisdiction overlay | How to pair the playbook with your [compliance modules](../jurisdictions/) |
| Measure it | How to score the deployment with the [content scorecard](../docs/content-scorecard.md) |
| Start this week | A short first-deployment sequence |

## How this connects

- **[`jurisdictions/`](../jurisdictions/)** describes what the law requires in each market. A vertical playbook describes what your operation runs day to day. Deploy with both open: the playbook picks the content, the jurisdiction module constrains and localizes it.
- **[`_brand.yml`](../_brand.yml)** drives every `{{PLACEHOLDER}}` in the referenced templates. Configure it first.
- **[`_taxonomy.yml`](../_taxonomy.yml)** defines the `verticals:` tag these files carry, the same axis jurisdiction modules use.

## Contributing

Gaps and market differences are expected: a pachinko hall, a bingo network, and a racing operator each deserve their own map. Follow the structure above, tag the file with `content_type: vertical-playbook`, and see [CONTRIBUTING.md](../CONTRIBUTING.md).
