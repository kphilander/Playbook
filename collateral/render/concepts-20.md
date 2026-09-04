---
content_type: campaign
pillar: [open, social, tools]
tier: 1
tone: confident-informative
audience: [general, sports-bettors]
channel: [social-media]
reading_level: grade-6-8
---

# Three editorial concepts — series 20

Three independent social concepts for the Playbook content library. The primary format is 1080 × 1350; square exports recompose the artwork without dropping copy. These are English concept masters, with name, support number, and age text resolved from `_brand.yml` by the renderer.

## 20a — Your return isn’t your profit

**Idea:** A familiar receipt makes a commonly confused bet-slip number easy to understand. White paper, navy type, and a deep emerald result create a clear reading order.

**Audience / pillar / tone:** Sports bettors and general players / Open, Social / Confident-informative.

**Caption:** A $50 return doesn’t mean $50 profit. In this cash-bet example, $20 is your stake coming back and $30 is profit. Check the full breakdown.

**Alt text:** Navy Playbook card: “Your return isn’t your profit.” A receipt for one winning cash bet shows $50 total return minus a $20 stake equals $30 profit. The card explains that return includes the stake. Support and age information appear at the bottom.

**Source:** [Sports betting guide — Decimal odds](../../how-to-play/sports-betting.md#decimal-odds). Arithmetic: $50 − $20 = $30. This is one settled cash bet, not a session total or an illustration of free-bet settlement rules.

**Assets:** [HTML](card-20a-return-vs-profit.html) · [PNG](card-20a-return-vs-profit.png).

## 20b — Even a good night has an end time

**Idea:** An oversized clock and an angled time label make planning a stopping time feel like part of arranging a night out. Emerald carries the composition; orange marks a point on the dial.

**Audience / pillar / tone:** General players / Open, Tools / Playful-witty.

**Caption:** Pick your pause before you play. Choose when to wrap up and set a reminder to keep track. Your time. Your call.

**Alt text:** Emerald Playbook card: “Even a good night has an end time.” A navy label across a clock reads “10:30 — Call it a night.” Copy invites players to choose when to wrap up before playing and set a reminder. Support and age information appear at the bottom.

**Source:** [Core messages — Session reminder](../../messaging/core-messages.md#session-reminder). The displayed time is illustrative and does not recommend a particular session length. The artwork depicts a plan, not a live account state or an automatic stop feature. A reminder can be set on a personal device.

**Assets:** [HTML](card-20b-pick-your-pause.html) · [PNG](card-20b-pick-your-pause.png).

## 20c — More picks. Smaller target.

**Idea:** One checked circle in a four-by-four grid gives abstract parlay probability a concrete shape. A large “1 in 16” and its percentage equivalent anchor the takeaway.

**Audience / pillar / tone:** Sports bettors and general players / Open, Social / Confident-informative.

**Caption:** Four picks in one bet means needing all four to win. If each pick has a true 50/50 chance and the picks are independent, that’s 1 in 16 — or 6.25%. Know what you’re combining.

**Alt text:** Navy Playbook card: “More picks. Smaller target.” One of 16 circles is emerald with a check mark. The graphic says four picks in one bet need all four to win, with a 1-in-16 or 6.25% chance in an example of four independent picks, each with a true 50/50 chance. Support and age information appear at the bottom.

**Source:** [Sports betting guide — Parlays](../../how-to-play/sports-betting.md#parlays). Exact arithmetic: 0.5 × 0.5 × 0.5 × 0.5 = 0.0625 = 6.25% = 1/16. This hypothetical example is not a probability estimate for a real bet. The assumptions remain visible on the card; quoted sportsbook odds are not treated as true probabilities. The 16 circles represent equally likely win/loss combinations, not a promise of one win every 16 bets.

**Assets:** [HTML](card-20c-parlay-probability.html) · [PNG](card-20c-parlay-probability.png).

## Production notes

- Rebuild previews with `node collateral/render/render-cards.mjs --locale=en card-20`.
- Export feed or square variants with `--profile=social-feed` or `--profile=social-square`; exports go to the corresponding `production/` directory.
- Artwork uses shared brand tokens and local fonts, with no remote images or generated photography.
- Each concept retains a protected support/age footer. The configured defaults are used for previews; select the appropriate jurisdiction before publishing a localized version.
- The action lines are prompts in raster collateral, not simulated interactive buttons.
- The review sheet reads the three rendered PNGs. Rebuild those PNGs to update its previews.
