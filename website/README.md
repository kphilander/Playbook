# Playbook Interactive

Next.js 15 + React 19 app providing the **interactive game guides** that ship with Playbook. Each guide is a small client-side simulator (wheels, cards, payout tables) plus enough explanatory copy to teach the reader how the game's math actually works.

Output is a fully static export deployed under `/tools/playbook/games/<game>` on the public site.

## What's in here

| Game | Route | Source |
|------|-------|--------|
| Baccarat | `/tools/playbook/games/baccarat` | `src/app/baccarat/` |
| Blackjack | `/tools/playbook/games/blackjack` | `src/app/blackjack/` |
| Craps | `/tools/playbook/games/craps` | `src/app/craps/` |
| Roulette | `/tools/playbook/games/roulette` | `src/app/roulette/` |
| Slots | `/tools/playbook/games/slots` | `src/app/slots/` |
| Sports betting | `/tools/playbook/games/sports-betting` | `src/app/sports-betting/` |
| Video poker | `/tools/playbook/games/video-poker` | `src/app/video-poker/` |

Shared UI lives in `src/components/`. Game-math helpers and odds tables live in `src/lib/`.

## Stack

- **Next.js 15** with `output: 'export'` (fully static) and `basePath: '/tools/playbook/games'` (see [`next.config.mjs`](next.config.mjs))
- **React 19** + **TypeScript 5**
- No server runtime; the export is just HTML, JS, and CSS

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # writes static export to ./out
npm run lint
```

## Deploying to gamblingpolicy.com

The exported site is published under `gamblingpolicy.com/public/tools/playbook/games/`. Two ways to update it:

### Option 1: via the sync script (recommended)

From the gamblingpolicy.com repo:

```bash
./scripts/sync-playbook.sh
```

The script auto-detects the sibling Playbook checkout, runs `npm run build` here if `node_modules` is present, and copies `out/` into `public/tools/playbook/games/`. If `node_modules` isn't present yet, it will skip the build with a clear message; run `npm install` here once to fix.

### Option 2: manual

```bash
# in this folder
npm install            # first time only
npm run build

# copy export to the site
cp -r out/. /path/to/gamblingpolicy.com/public/tools/playbook/games/
```

Either way, commit the resulting changes in `gamblingpolicy.com/public/tools/playbook/games/` and ship via the normal site deploy.

## Path / `basePath` note

The `basePath` in [`next.config.mjs`](next.config.mjs) **must match** the deploy directory on gamblingpolicy.com (`/tools/playbook/games`). If you move the deploy target, update both. All in-app links use `next/link` and inherit the basePath automatically.

## License

CC0 1.0 Universal (the same as the rest of Playbook). See the [repo root LICENSE](../LICENSE).
