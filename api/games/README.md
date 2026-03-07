# api/games

Individual game guide JSON files, one per game. Generated from the markdown source files in [`how-to-play/`](../../how-to-play/).

## Files

| File | Game |
|------|------|
| [slots.json](slots.json) | Slot Machines |
| [blackjack.json](blackjack.json) | Blackjack |
| [roulette.json](roulette.json) | Roulette |
| [sports-betting.json](sports-betting.json) | Sports Betting |
| [baccarat.json](baccarat.json) | Baccarat |
| [video-poker.json](video-poker.json) | Video Poker |
| [craps.json](craps.json) | Craps |
| [lottery.json](lottery.json) | Lottery & Scratch Cards |
| [bingo.json](bingo.json) | Bingo |
| [horse-racing.json](horse-racing.json) | Horse Racing |

## Schema

Each game JSON contains:

```json
{
  "slug": "blackjack",
  "title": "Blackjack",
  "sections": [
    { "title": "Section Name", "content": "..." }
  ],
  "keyTerms": [
    { "term": "House Edge", "definition": "..." }
  ],
  "quiz": [
    { "question": "...", "options": ["A", "B", "C", "D"], "correct": 0 }
  ],
  "socialSnippets": [
    { "text": "...", "hashtags": ["..."] }
  ]
}
```

## Generating

```bash
npm run generate:content-api
```

The game parser reads all `.md` files in `how-to-play/` (excluding `_`-prefixed files and `odds-at-a-glance.md`).
