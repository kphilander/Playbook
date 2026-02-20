# Canva Production Spec — Playbook Collateral

> **How to use this file**: Open Claude Code locally (where Canva MCP is accessible via `.mcp.json`), then reference these prompts to generate each deliverable using the `generate-design` tool. Each prompt includes exact dimensions, colors, typography, copy, and layout instructions derived from the brand system.

---

## Discovery Brief (locked in)

| Attribute | Value |
|---|---|
| **Brand name** | Playbook (Neptune rename deferred) |
| **Jurisdiction** | Agnostic — placeholder helplines/age |
| **Language** | English only |
| **Co-branding** | Placeholder space for operator logos |
| **Logo** | Generate in Canva |
| **Colors** | Navy #1B2838, Teal #00D4AA, Orange #FF6B35 |
| **Pillars** | Sharp + Open |
| **Tone** | Mixed by piece (playful for social, confident for print) |
| **Taglines** | Mix and match per piece |
| **CTAs** | Content drivers ("Read the breakdown", "See how it works") |
| **Export** | Canva-native |

### Deliverables

| # | Type | Format | Volume | Output |
|---|---|---|---|---|
| 0 | Logo concept | 1080x1080 | 1 | Concept |
| 1A-1C | Myth-buster cards | Instagram feed 1080x1080 | 3 | Finished + template |
| 2A-2C | Odds/stats infographics | Instagram feed 1080x1080 | 3 | Finished + template |
| 3A-3C | Story variants | Instagram stories 1080x1920 | 3 | Finished + template |
| 4A-4C | Awareness posters | A2 / 18x24" | 3 | Finished + template |
| 5 | Brand overview deck | 16:9 (1920x1080) | 1 | Finished + template |

---

## Brand Constants

Reference these in every prompt:

```
COLORS
  Primary (deep navy):       #1B2838
  Primary light:             #2A3F56
  Primary dark (midnight):   #0F1923
  Secondary (electric teal): #00D4AA
  Secondary light:           #33DDBB
  Secondary dark:            #00A888
  Accent (bold orange):      #FF6B35
  Accent light:              #FF8A5C
  White:                     #FFFFFF
  Neutral 900:               #1A1A2E
  Neutral 700:               #3D3D5C
  Neutral 500:               #6B6B8A
  Neutral 300:               #A8A8C0
  Neutral 100:               #E8E8F0
  Neutral 50:                #F5F5FA

TYPOGRAPHY
  Headings:  Inter (400, 600, 700, 800)
  Body:      Source Sans 3 (300, 400, 600)
  Monospace: Source Code Pro (400, 600)

LAYOUT PATTERN (established in examples/social-myth-buster.html)
  - Top accent bar: 5px gradient from #FF6B35 (left) to #00D4AA (right)
  - Background: solid #1B2838 or gradient #0F1923 → #1B2838
  - Pillar badge: pill shape, teal #00D4AA bg, navy #1B2838 text, uppercase
  - Footer: monospace URL left, uppercase CTA right in accent orange
  - Subtle grid overlay (faint white lines, 40px spacing) for texture

CO-BRANDING
  - Include "[Operator Logo]" placeholder box with dashed border
  - Playbook logo no smaller than 60% of operator logo height
```

---

## Execution Order

1. Logo concept (0)
2. Myth-buster cards (1A, 1B, 1C)
3. Story variants (3A, 3B, 3C)
4. Odds infographics (2A, 2B, 2C)
5. Posters (4A, 4B, 4C)
6. Brand overview deck (5)

---

## 0. Logo Concept

**Prompt:**

Create a modern, premium logo concept for "Playbook" — a gambling entertainment literacy brand.

Dimensions: 1080x1080 (square, for versatility). Background: white #FFFFFF.

Logo requirements:
- Wordmark: "Playbook" set in bold geometric sans-serif (like Inter 800), deep navy #1B2838
- Logomark: Abstract "open playbook / strategy diagram" motif — clean geometric lines suggesting both a book and a game strategy. Not literal or clipart-ish.
- The logomark should work independently at 24px and above
- Show the full lockup (logomark + wordmark) centered
- Logomark color: gradient from electric teal #00D4AA to bold orange #FF6B35, or solid navy with teal accent element

Style: Modern lifestyle brand. Think premium sports/gaming, not healthcare or government. Clean, confident, minimal. No drop shadows or 3D.

Show 3 variations on the page:
1. Full color lockup (logomark + wordmark) on white
2. Reversed (white) on navy #1B2838 background block
3. Logomark only (no wordmark) at small size

---

## 1. Myth-Buster Cards — Instagram Feed (1080x1080)

### 1A: "Hot Streak" Myth

**Pillar:** Sharp | **Tagline:** "Know your game" | **CTA:** "Know your game →"

**Prompt:**

Create an Instagram social media card (1080x1080 square) for "Playbook" gambling education brand.

Background: solid deep navy #1B2838. Top accent bar: 5px tall, full width, gradient from bold orange #FF6B35 (left) to electric teal #00D4AA (right). Subtle grid pattern overlay (very faint white lines, 40px spacing).

Header (top):
- Left: "Playbook" wordmark in Inter 800, white #FFFFFF
- Right: Pill badge "SHARP" — Inter 700, 12px, uppercase, wide tracking, teal #00D4AA background with navy #1B2838 text, fully rounded corners

Body (centered vertically):
- Label: "MYTH VS. MATH" — Inter 700, 13px, uppercase, tracking 0.1em, bold orange #FF6B35
- Main statement: "I'm on a hot streak" — Inter 800, 32px, with strikethrough line in orange #FF6B35 (3px thick), text color light gray #A8A8C0
- Fact: "Every spin, hand, and roll is statistically independent. Your brain sees patterns. The math doesn't." — Source Sans 3, 17px, #A8A8C0. Bold "statistically independent" in teal #00D4AA.
- Stat block: Large "0%" in Inter 900, 56px, orange #FF6B35. Beside it: "chance past results affect the next spin" in Inter 600, 18px, #A8A8C0

Footer (bottom):
- Left: "playbook.org" — Source Code Pro 500, 13px, gray #6B6B8A
- Right: "KNOW YOUR GAME →" — Inter 700, 13px, uppercase, orange #FF6B35

---

### 1B: "Due for a Win" Myth

**Pillar:** Sharp | **Tagline:** "Every game has math. Here's yours." | **CTA:** "See how it works →"

**Prompt:**

Create an Instagram social media card (1080x1080 square) for "Playbook" gambling education brand.

Background: solid navy #1B2838. Top accent bar: 5px gradient orange #FF6B35 to teal #00D4AA. Subtle grid overlay.

Header:
- Left: "Playbook" in Inter 800, white
- Right: "SHARP" pill — teal bg, navy text

Body:
- Label: "MYTH VS. MATH" — uppercase, orange #FF6B35
- Main: "I'm due for a win" — Inter 800, 32px, orange strikethrough on light gray text
- Fact: "The gambler's fallacy. A coin doesn't remember its last flip. Neither does a slot machine. Each outcome is independent." — Source Sans 3, 17px, #A8A8C0. Bold "independent" in teal #00D4AA.
- Stat: "50/50" in Inter 900, 56px, orange #FF6B35. Beside: "Every. Single. Time." in Inter 600, 18px, #A8A8C0

Footer:
- Left: "playbook.org" in Source Code Pro, gray
- Right: "SEE HOW IT WORKS →" — uppercase, orange

---

### 1C: "Lucky Machine" Myth

**Pillar:** Open | **Tagline:** "Here's how it actually works." | **CTA:** "Read the breakdown →"

**Prompt:**

Create an Instagram social media card (1080x1080 square) for "Playbook" gambling education brand.

Background: gradient from midnight #0F1923 (top) to navy #1B2838 (bottom). Top accent bar: 5px gradient orange to teal. Grid overlay.

Header:
- Left: "Playbook" in Inter 800, white
- Right: "OPEN" pill — teal bg, navy text

Body:
- Label: "MYTH VS. MATH" — uppercase, orange
- Main: "This machine is about to pay out" — Inter 800, 28px, orange strikethrough, light gray text
- Fact: "Slot machines use random number generators (RNG). Every spin is calculated independently. The machine has no memory of previous results — and no schedule for payouts." — Source Sans 3, 16px, #A8A8C0. Bold "random number generators (RNG)" in teal.
- No stat block — let the text breathe.

Footer:
- Left: "playbook.org" in Source Code Pro, gray
- Right: "READ THE BREAKDOWN →" — uppercase, orange

---

## 2. Odds/Stats Infographics — Instagram Feed (1080x1080)

### 2A: House Edge Comparison Grid

**Pillar:** Sharp | **Tagline:** "Every game has math. Here's yours." | **CTA:** "See all games →"

**Prompt:**

Create an Instagram infographic card (1080x1080 square) for "Playbook" gambling education brand.

Background: gradient from midnight #0F1923 (top-left, 145deg) to navy #1B2838 (bottom-right). Top accent bar: 5px gradient orange to teal.

Header:
- Left: "Playbook" in Inter 800, white
- Right: "SHARP" pill — teal bg, navy text

Body:
- Label: "REAL ODDS" — Inter 700, 13px, uppercase, orange #FF6B35
- Headline: "Every game has a house edge. Here's what you're actually playing." — Inter 800, 26px, white

2x2 grid of stat cards:
- Each card: slightly lighter bg (semi-transparent white ~5%), rounded corners 10px, 1px border
- Card 1: "Blackjack (basic strategy)" → "0.5%" — "Best odds in the casino"
- Card 2: "European Roulette" → "2.7%" — "Single zero wheel"
- Card 3: "American Roulette" → "5.26%" — "Double zero = double edge"
- Card 4: "Slots (average)" → "8%" — "Varies by machine"
- Game name: Source Sans 3, 13px, #A8A8C0
- Percentage: Inter 800, 28px, white — "%" in teal #00D4AA
- Note: Source Sans 3, 12px, #6B6B8A

Footer:
- Left: "playbook.org" in Source Code Pro, gray
- Right: "SEE ALL GAMES →" — uppercase, orange

---

### 2B: Sports Betting Math

**Pillar:** Open | **Tagline:** "Straight talk. Real numbers." | **CTA:** "See how it works →"

**Prompt:**

Create an Instagram infographic (1080x1080 square) for "Playbook" gambling education brand.

Background: solid navy #1B2838. Top accent bar. Grid overlay.

Header: "Playbook" left, "OPEN" pill right.

Body:
- Label: "STRAIGHT TALK" — uppercase, orange
- Headline: "What does -110 actually mean?" — Inter 800, 30px, white

Visual breakdown (stacked rows with subtle dividers #2A3F56):
- "You bet" → "$110" (Inter 800, 44px, white)
- "You win" → "$100" (Inter 800, 44px, teal #00D4AA)
- "The difference" → "$10" (Inter 800, 44px, orange #FF6B35)
- Below: "That $10 is the sportsbook's cut. On every bet." — Source Sans 3, 16px, #A8A8C0

Footer: "playbook.org" left, "SEE HOW IT WORKS →" right in orange

---

### 2C: Bonus Wagering Breakdown

**Pillar:** Open | **Tagline:** "No fine print. Just facts." | **CTA:** "Read the breakdown →"

**Prompt:**

Create an Instagram infographic (1080x1080 square) for "Playbook" gambling education brand.

Background: solid navy #1B2838. Top accent bar. Grid overlay.

Header: "Playbook" left, "OPEN" pill right.

Body:
- Label: "NO FINE PRINT" — uppercase, orange
- Headline: "That '200% match bonus' — what it actually costs" — Inter 800, 26px, white

Visual progression (numbered steps, each getting visually heavier):
- Step 1: "You deposit" → "$50" (Inter 800, 36px, white)
- Step 2: "You get" → "$100 bonus" (Inter 800, 36px, teal #00D4AA)
- Step 3: "Wagering req: 30x" → "$3,000" (Inter 800, 40px, orange #FF6B35)
- Note: "You need to wager $3,000 before withdrawing. That's 60x your deposit." — Source Sans 3, 15px, #A8A8C0

Footer: "playbook.org" left, "READ THE BREAKDOWN →" right in orange

---

## 3. Instagram Story Variants (1080x1920)

### 3A: Hot Streak Myth (vertical)

**Prompt:**

Create an Instagram Story (1080x1920, 9:16 vertical) for "Playbook" gambling education brand.

Background: gradient from navy #1B2838 (top) to midnight #0F1923 (bottom). Top accent bar: 4px, gradient teal #00D4AA to orange #FF6B35.

Header: "Playbook" Inter 800, 15px, white (left). "SHARP" small pill (right).

Body (centered):
- Label: "QUICK MYTH" — Inter 700, 11px, uppercase, orange
- Statement: "I'm on a hot streak" — Inter 800, 24px, white with orange strikethrough
- Fact: "Every spin is statistically independent. Your brain sees patterns. The math doesn't." — Source Sans 3, 15px, #A8A8C0. Bold "statistically independent" in teal.

Footer: Full-width CTA button — "See how it works" — Inter 700, 14px, navy #1B2838 on orange #FF6B35, rounded 10px, centered.

---

### 3B: House Edge Quick Stats (vertical)

**Prompt:**

Create an Instagram Story (1080x1920, 9:16 vertical) for "Playbook" gambling education brand.

Background: gradient midnight to navy. Top accent bar: 4px, teal to orange.

Header: "Playbook" left, "SHARP" pill right.

Body:
- Label: "REAL ODDS" — uppercase, orange
- Headline: "House edge by game" — Inter 800, 22px, white
- Vertical stack of stat rows (game name left, percentage right, with visual bar showing relative edge):
  - "Blackjack" → "0.5%" (teal)
  - "Craps" → "1.4%" (teal)
  - "European Roulette" → "2.7%" (white)
  - "American Roulette" → "5.26%" (orange — highlights worse odds)
  - "Slots" → "2–15%" (orange)
- Source Sans 3 for names, Inter 800 for percentages

Footer: Full-width CTA — "See all games →" — navy on orange

---

### 3C: Sports Betting -110 (vertical)

**Prompt:**

Create an Instagram Story (1080x1920, 9:16 vertical) for "Playbook" gambling education brand.

Background: solid navy #1B2838. Top accent bar: 4px, teal to orange.

Header: "Playbook" left, "OPEN" pill right.

Body:
- Label: "STRAIGHT TALK" — uppercase, orange
- Headline: "What -110 means" — Inter 800, 24px, white
- Large centered visual: "$110 in" (white) → arrow → "$100 out" (teal). Below: "$10 = the sportsbook's cut" (orange, medium)
- Supporting: "On every single bet." — Source Sans 3, 15px, #A8A8C0

Footer: Full-width CTA — "Read the breakdown →" — navy on orange

---

## 4. Awareness Posters (18x24 inches, portrait)

### 4A: "Know Your Game" — Sharp

**Prompt:**

Create a print poster (18x24 inches portrait, 300 DPI) for "Playbook" gambling entertainment literacy brand.

Background: deep navy #1B2838. Top accent bar: 0.25 inch, gradient orange #FF6B35 to teal #00D4AA.

Layout (top to bottom):

HEADER (top 15%):
- "Playbook" wordmark: Inter 800, white, large, top-left
- [Operator Logo] placeholder: dashed white border box, top-right, labeled "Your logo here"

HERO (middle 50%):
- "SHARP" pillar badge: pill, teal bg, navy text
- Headline: "Every game has math. Here's yours." — Inter 800, ~72pt, white, centered
- Subhead: "Know the house edge. Understand the odds. Play on your terms." — Source Sans 3, ~24pt, #A8A8C0

STATS (20%):
Three columns:
- "Blackjack" / "0.5%" (large, teal) / "house edge"
- "Roulette" / "5.26%" (large, white) / "house edge"
- "Slots" / "2–15%" (large, orange) / "house edge"
- Subtle divider lines between columns

FOOTER (bottom 15%):
- QR code placeholder (white square) + "Scan to learn more"
- "See how it works at playbook.org" — Inter 600, white
- Helpline strip: "Free, confidential support 24/7: [HELPLINE NUMBER]" — Source Code Pro, bold, white on lighter navy #2A3F56 bar
- Legal: "You must be [AGE]+ to gamble. Gambling involves risk." — Source Sans 3, 10pt, #6B6B8A

Readability: headline visible from 3 meters. Min body: 10pt. Helpline: 14pt bold.

---

### 4B: "No Fine Print" — Open

**Prompt:**

Create a print poster (18x24 inches portrait, 300 DPI) for "Playbook" gambling entertainment literacy brand.

Background: gradient midnight #0F1923 (top) to navy #1B2838 (bottom). Top accent bar.

HEADER: "Playbook" left, [Operator Logo] placeholder right.

HERO:
- "OPEN" pill badge
- Headline: "Here's how it actually works." — Inter 800, ~72pt, white
- Subhead: "The odds are public. The math is real. Now you know them." — Source Sans 3, ~24pt, #A8A8C0

CONTENT — myth vs. fact two-column layout:
- Left column: "What you might think" (orange header)
  - "Slot machines run hot and cold"
  - "You're 'due' for a win after losses"
  - "Betting systems beat the house"
- Right column: "What the math says" (teal header)
  - "Every spin is independent (RNG)"
  - "Past results don't affect future odds"
  - "The house edge is built into every game"
- Clean type, generous whitespace between rows

FOOTER:
- QR code + "Scan for the facts"
- "Read the breakdown at playbook.org"
- Helpline strip + legal line

---

### 4C: "Test Your Game IQ" — Sharp + Social

**Prompt:**

Create a print poster (18x24 inches portrait, 300 DPI) for "Playbook" gambling entertainment literacy brand.

Background: solid navy #1B2838. Top accent bar.

HEADER: "Playbook" left, [Operator Logo] placeholder right.

HERO:
- "SHARP" pill badge
- Headline: "Think you know the odds? Let's find out." — Inter 800, ~66pt, white
- Subhead: "Take the game IQ quiz — and challenge your friends." — Source Sans 3, ~22pt, #A8A8C0

QUIZ TEASER — 3 question cards in slightly lighter navy #2A3F56, rounded corners:
- Q1: "A slot machine hasn't paid out in 3 hours. The odds on the next spin are..." → "Scan to find out"
- Q2: "What's the house edge on American roulette?" → hidden
- Q3: "You've won 5 hands in a row. Hand 6?" → hidden

FOOTER:
- Large QR code + "Scan to take the quiz"
- "See how it works at playbook.org"
- Helpline strip + legal

---

## 5. Brand Overview Presentation Deck (16:9)

**Prompt:**

Create a brand overview presentation deck for "Playbook" — a gambling entertainment literacy brand. For internal design and marketing teams. 1920x1080 (16:9), 10-12 slides.

Colors: navy #1B2838 (primary bg), white #FFFFFF (content slides), teal #00D4AA, orange #FF6B35. Text on dark: white + #A8A8C0. Text on light: #1A1A2E + #3D3D5C. Typography: Inter headings, Source Sans 3 body. Top accent bar on every slide: 4px gradient orange to teal.

SLIDE 1 — Title:
"Playbook" logo large, centered. Subtitle: "Brand Overview" in teal. Below: "Gambling Entertainment Literacy — A White-Label Brand System". Navy bg.

SLIDE 2 — The Problem:
Headline: "The engagement gap". Two columns: Left "What exists" (orange) — clinical, compliance-driven, buried in footer. Right "What's needed" (teal) — entertainment-grade, integrated, engaging. Navy bg.

SLIDE 3 — The Solution:
Headline: "Player education that players actually want". 3 points: "Woven into the experience, not bolted on" / "Entertainment-grade production quality" / "White-label: your brand, our system". Navy bg.

SLIDE 4 — Brand Pillars:
4 cards: Sharp ("Know your game" — game intelligence), Choice ("Your call" — player autonomy), Open ("No BS" — transparency), Social ("Worth sharing" — community). Teal pillar badges. Navy bg.

SLIDE 5 — Color Palette:
White bg. Large swatches: Primary #1B2838, Secondary #00D4AA, Accent #FF6B35, plus semantic and neutral colors with hex codes.

SLIDE 6 — Typography:
White bg. Type specimens: Inter (heading), Source Sans 3 (body), Source Code Pro (mono). Show scale from Display 48px to Body 16px. Note: "Min body: 16px. Helpline numbers in monospace."

SLIDE 7 — Voice & Tone:
Navy bg. Headline: "The Insider". Subhead: "The friend who knows the game". Two columns: "We say" (teal) — player, smart play, tools, check in, take a break. "We don't say" (orange) — gambler, responsible gambling, interventions, self-assess, self-exclude.

SLIDE 8 — Messaging:
Navy bg. Taglines by pillar: Sharp: "Know your game" / "Every game has math." Choice: "Your play. Your way." / "Your limits. Your call." Open: "Here's how it actually works." / "No fine print." Social: "Share the smart play." / "Challenge your friends."

SLIDE 9 — Collateral:
Navy bg. Mockups of social cards, email templates, posters. Caption: "Every touchpoint gets equal design investment."

SLIDE 10 — White-Label Model:
Navy bg. Headline: "Your brand. Our system." Visual: same layout in 3 different color schemes. "Operators replace: colors, fonts, logo, program name. Operators keep: layout patterns, hierarchy, voice, accessibility."

SLIDE 11 — Accessibility:
White bg. "WCAG 2.1 AA baseline". Stats: 4.5:1 contrast text, 3:1 UI, 44x44px touch. "Every color combo tested."

SLIDE 12 — Get Started:
Navy bg. "Start building." Steps: 1. Fork repo, 2. Edit _brand.yml, 3. Customize messaging, 4. Design and deploy. CTA: "playbook.org". Helpline strip at bottom.

---

## Production Checklist

After generating each design, verify:

- [ ] Colors match hex values (#1B2838, #00D4AA, #FF6B35)
- [ ] Fonts are Inter (headings), Source Sans 3 (body), Source Code Pro (mono)
- [ ] Top accent gradient bar present (orange → teal)
- [ ] Pillar badge uses correct name and color
- [ ] Helpline placeholder present where required (posters, deck)
- [ ] Co-branding placeholder on posters
- [ ] WCAG 2.1 AA contrast (4.5:1 body, 3:1 large text)
- [ ] QR code placeholder on posters
- [ ] Copy matches messaging framework (no paraphrasing)
- [ ] Min text: 16px digital, 10pt print
- [ ] Footer: monospace URL left, uppercase CTA right

## Key Source Files

- `_brand.yml` — All colors, fonts, taglines, CTAs, helplines
- `brand-book/03-visual-identity.md` — Logo, color, typography, icon specs
- `brand-book/05-messaging-framework.md` — Copy library
- `brand-book/07-application-guidelines.md` — Dimensions and channel rules
- `examples/social-myth-buster.html` — Reference visual pattern
- `visual-identity/design-tokens.css` — CSS design tokens
