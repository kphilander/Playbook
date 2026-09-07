# September 2026 creative review

Open the [visual review](index.html) to browse the maintained collateral, filter by language or topic, and read the reason for each treatment. The [inventory](coverage.json) covers **320 render entries in 93 families**: 93 English, 79 Japanese, 74 Simplified Chinese and 74 Arabic. There are also **30 separate concept revisions**, covering every concept in the two archived rounds.

## Creative direction

The direction follows the main repository’s [brand personality](../../brand-book/02-brand-personality.md), [voice and tone](../../brand-book/04-voice-and-tone.md), and [photography guide](../../visual-identity/photography/photography.md): confident, witty entertainment literacy, generous with information and respectful of the player’s choices. The organising principle is one useful idea, a visible explanation, and a clear next step. A witty line should reward attention without making the reader the joke. A number should earn its space by explaining something.

| Area | Decision and purpose |
|---|---|
| Myth cards | Remove the strikethrough that obscured the hook. Use an orange rule to introduce the claim and a distinct explanation below. Give the 13-series different hooks; remove empty or misleading “0%” statistics where an explanation works better. |
| Game references | Keep the familiar navy family, larger game names and separated proof blocks. State the rules behind an edge. The comparison card uses four qualified examples rather than a crowded list that implies every game has one fixed cost. |
| Sports | Separate stake, profit and total return. Explain a spread with the winning margin. Use exact, visibly qualified probability examples instead of generic sportsbook-cut estimates. |
| Photography | Let the photograph supply the social setting. Put facts on an opaque panel. The nine photo posters have distinct hooks and actions. Five new Google photographs supply warmer, more natural social settings for the concept revisions and four production posters. Sports use a bright page and navy scoreboard; myths use navy and an orange fact strip; practical tips use emerald and a white calculation strip. Sources, prompts and crop decisions are recorded in [photography](photography/README.md) and `concepts.json`. |
| Support | Keep calm, literal wording, readable contact groups and a white support treatment. Use darker green for contact numbers on white. Distinguish choosing a break from promises about exclusion or account reactivation. |
| Email and product UI | Preserve responsive layouts and the existing task sequence. Let long support contacts wrap on narrow screens; use labeled rows for the Arabic activity chart. Isolate Arabic numeric expressions so odds signs and ranges retain their reading order. Remove universal promises about instant limit changes, withdrawal arrival and setup time. |
| Print and venue placements | Recompose the five core posters with large headlines, a prominent fact and proportional comparison bars. Preserve the panel order, folds, bleed and placement-specific action in folded formats. An ATM message concerns a cash budget; it does not imply an online deposit cap covers cash withdrawals. |
| Audio and video | Shorten scripts so the explanation and spoken support details have time to land. Use one calculation per sequence. These are revised scripts and storyboards; no finished audio or video was produced. |
| Quizzes and content page | Each answer has an explanation. Correct the distinction between RTP, money deposited, amount wagered and frequency of wins. Keep the maintained page and all four language bundles aligned. |

The changes extend across digital, print, environmental, customer-service, interactive and video/audio specifications. `creative-system.css` is opt-in on maintained masters; the frozen concept sources keep their original styles.

## Concept provenance

`concepts.json` connects every revision to its original HTML, PNG, research trail and photographic source. These are editorial revisions, not new submissions by the named models and not new evaluation scores. The original pilot files, first submissions, rendered originals, manifests and recorded input hashes are preserved.

The receipt, clock, outcome grid and other useful diagram structures are retained where they already communicate well. The photo revisions use three distinct treatments and pair the image with a separate proof panel so photographic detail is never presented as mathematical evidence. New headlines such as “The half point pulls its weight” and “Budget set. Leftovers welcome.” keep the brand’s wit and sense of agency.

## Evidence and assumptions

| Example | Basis |
|---|---|
| Independent outcomes | The text explicitly names independent spins or draws. It does not claim that every blackjack hand is independent or that software has no memory. [UK Gambling Commission RTS 7](https://www.gamblingcommission.gov.uk/standards/remote-gambling-and-software-technical-standards/rts-7-generation-of-random-outcomes) describes random outcomes and game probabilities; it is not a universal certification claim for every market. |
| Casino edge examples | [GameSense house advantage](https://www.gamesense.com/play-better/house-advantage.html), with the specific rules visible: blackjack basic strategy under favorable rules; Banker with 5% commission; Pass line; roulette zero configuration. Video poker specifies 9/6 Jacks or Better, optimal play and the maximum-coin royal payout. Slots ranges are illustrative and game-dependent. |
| −110 | A $110 winning cash bet yields $100 profit and $210 total return. With equal stakes and no pushes or extra fees, break-even is `110 / 210 = 52.38095%`. A 50% record is below break-even under those assumptions. |
| Balanced sportsbook example | Two $110 stakes total $220. With one winner and one loser, paying $210 leaves $10, or 4.545% of stakes. That retained share is different from the 4.762 percentage-point overround implied by two −110 prices. |
| Independent parlays | Four true 50% independent picks all win with probability `0.5^4 = 6.25%`. This does not apply to correlated selections, establish a quoted payout, or promise one win in every 16 attempts. |
| Lottery | A fair six-from-49 draw has `49! / (6! × 43!) = 13,983,816` six-number combinations. One specific combination has that reciprocal probability. One hundred **distinct** combinations in the same draw cover 100 possible results. This replaces a named game's outdated jackpot odds. |
| RTP | A 95% RTP example describes long-run expected money returned relative to money wagered. It does not mean 95% winning spins or a predictable return from one deposit. |
| Pace | At $0.50 every three seconds, continuous play totals $10 wagered per minute and $600 per hour. Wagering can reuse money; turnover is not net loss. |
| Bonuses | A bonus-only 30× example requires $3,000 in qualifying wagers for a $100 bonus. Japanese copy uses ¥10,000 and ¥300,000 consistently. Eligible games, contributions and expiry depend on the actual offer. |

## Build and review

From the repository root:

```sh
npm run generate:rg-copy
npm run build:cards
npm run build:creative-review
PLAYBOOK_COMPARE_BASE=b2d95c8 npm run build:comparison
```

`build:creative-review` renders the 30 revisions, verifies their geometry and typography, records PNG hashes, then rebuilds the inventory and browser data. It requires the renderer's existing Puppeteer and local fonts. The comparison command extracts the committed English baseline locally; its generated baseline directory is not a production asset.

The renderer checks artboard overflow, reading-size floors, footer overlap and containment, folds and protected groups. It now also rejects a footer outside the selected render root and reports a failing process status if Chromium fails to launch. Concept validation checks local resource loading, font availability, resolved tokens, 1080 × 1350 dimensions, the 42px reading floor, clipping, footer overlap and separation between the photograph, proof panel and copy. See [concept-validation.json](concept-validation.json) and [verification.json](verification.json) for the final results.

## Adaptation details

Preview contact details resolve from the configured jurisdiction. Some market configurations deliberately contain placeholder contact values; these remain visible in the corresponding previews. QR blocks and operator links are template placeholders. Substitute the actual services and destinations before delivery. Print profiles are RGB PNG exports with bleed, not a printer's final CMYK/prepress package.

Translated factual examples and layout have been updated. The existing market voice profiles are retained; native editorial review remains appropriate before an operator uses the translated campaign publicly. No production deployment is part of this creative review.
