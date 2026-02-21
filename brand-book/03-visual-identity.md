# Chapter 3: Visual Identity

This chapter defines the visual system for {{PROGRAM_NAME}} — the logo, colors, typography, iconography, photography, and illustration guidelines that make the brand recognizable across every touchpoint.

**The visual quality rule**: Playbook content must match or exceed the production quality of the operator's commercial marketing. If the RG content looks cheaper, older, or more generic than the promotional content around it, players will treat it like fine print. Design it like you'd design a product launch — because that's what it is.

**The adaptive identity model**: {{PROGRAM_NAME}} is designed to be recognizable but adaptive. Operators apply their own colors and fonts while keeping the structural identity (layout patterns, information hierarchy, icon system, spacing) consistent. A player who encounters Playbook-based content at one platform will intuitively recognize the content structure at another — even though they look different.

> All color values, fonts, and specifications reference the central configuration in [`_brand.yml`](../_brand.yml). Update that file to customize the visual identity for your organization.

---

## 1. Logo system

### Logo purpose

The {{PROGRAM_NAME}} logo identifies gambling entertainment literacy content. It signals to players: *"This is where you get smarter about the game."* The logo should feel modern, confident, and premium — like it belongs on a lifestyle brand, not a government pamphlet.

### Logo components

The {{PROGRAM_NAME}} logo consists of:
- **Logomark**: A symbol (open playbook / strategy diagram motif) that works independently at small sizes
- **Wordmark**: The program name set in the brand typeface
- **Lockup**: The logomark and wordmark combined (primary usage)

### Usage rules

#### Clear space
Maintain a minimum clear space equal to **1x the height of the logomark** on all sides. No text, imagery, or other visual elements should intrude into this space.

```
    ┌────────────────────────────────┐
    │          clear space           │
    │    ┌──────────────────┐       │
    │    │                  │       │
    │    │   [LOGO HERE]    │       │
    │    │                  │       │
    │    └──────────────────┘       │
    │          clear space           │
    └────────────────────────────────┘

    ← 1x →│    logo    │← 1x →
```

#### Minimum size
- **Print**: Minimum 0.25 inches (6.35mm) in height
- **Digital**: Minimum 24px in height
- Below these sizes, use the logomark only (no wordmark)

#### Approved variants

| Variant | Background | Usage |
|---|---|---|
| Full color | White, `neutral_50` | Default / primary usage |
| Reversed (white) | `primary`, `primary_dark` | Dark backgrounds |
| Monochrome (dark) | Light backgrounds | Single-color print, emboss |
| Monochrome (light) | Dark backgrounds | Single-color on dark surfaces |

#### Prohibited modifications

Do not:
- Stretch, compress, or distort the logo
- Rotate the logo
- Apply drop shadows, outlines, or effects
- Change the logo colors outside of approved variants
- Place the logo on busy or low-contrast backgrounds
- Recreate or approximate the logo using other fonts or shapes
- Animate the logo in ways that compromise legibility
- Place the logo inside an unapproved container or shape

### Co-branding

When the {{PROGRAM_NAME}} logo appears alongside an operator's logo:

- Both logos maintain their respective clear space
- The {{PROGRAM_NAME}} logo should be **no smaller than 60%** of the operator logo's height
- Use a vertical divider line (`neutral_300` color, 1px) between logos when they appear side by side
- The operator logo typically appears first (left or top), with {{PROGRAM_NAME}} second (right or bottom)
- The co-branding lockup should feel like two peers side by side — not a primary brand and its subordinate

### Helpline badge lockup

A special lockup combines the {{PROGRAM_NAME}} logomark with a helpline number for contexts where regulatory requirements mandate displaying support information alongside branding:

```
[Logomark] | Free help 24/7: {{HELPLINE_NUMBER}}
```

Specifications for the helpline badge are in `visual-identity/logo/helpline-badge/`.

---

## 2. Color palette

### Design philosophy

The default {{PROGRAM_NAME}} palette is built for a modern, entertainment-grade aesthetic. It should feel like it belongs on a gaming platform, not a health website. Deep navy conveys authority and sophistication. Electric teal creates energy and modernity. Bold orange drives action and attention.

The palette avoids the washed-out blues and clinical greens common in traditional RG programs. This is a lifestyle brand palette — confident, contemporary, and high-impact.

### Primary palette

| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary | Deep navy | `#1B2838` | Brand identification, headers, backgrounds |
| Primary light | Navy | `#2A3F56` | Hover states, secondary elements |
| Primary dark | Midnight | `#0F1923` | High-contrast text on light backgrounds |

### Secondary palette

| Role | Color | Hex | Usage |
|---|---|---|---|
| Secondary | Electric teal | `#00D4AA` | Interactive elements, links, highlights |
| Secondary light | Light teal | `#33DDBB` | Hover states, subtle highlights |
| Secondary dark | Dark teal | `#00A888` | Pressed states, secondary text on light backgrounds |

### Accent palette

| Role | Color | Hex | Usage |
|---|---|---|---|
| Accent | Bold orange | `#FF6B35` | Primary CTAs, attention, action buttons |
| Accent light | Light orange | `#FF8A5C` | Hover states, secondary CTAs |
| Accent dark | Dark orange | `#E55A2B` | Pressed states, high-contrast accent |

### Semantic palette

These colors communicate specific states and should be used consistently across all interfaces:

| Role | Color | Hex | Usage |
|---|---|---|---|
| Success | Green | `#00C853` | Quiz passed, limit set, positive confirmation |
| Warning | Amber | `#FFB300` | Approaching limit, session reminder |
| Danger | Red | `#FF3D00` | Tier 2 only — critical alerts, self-exclusion |
| Info | Blue | `#2979FF` | Informational content, tips, explainers |

### Neutral palette

| Role | Hex | Usage |
|---|---|---|
| `neutral_900` | `#1A1A2E` | Primary text |
| `neutral_700` | `#3D3D5C` | Secondary text |
| `neutral_500` | `#6B6B8A` | Placeholder text, captions, metadata |
| `neutral_300` | `#A8A8C0` | Borders, dividers |
| `neutral_100` | `#E8E8F0` | Card backgrounds, table stripes |
| `neutral_50` | `#F5F5FA` | Page backgrounds |
| White | `#FFFFFF` | Surface backgrounds |
| Black | `#111111` | Maximum contrast text (use sparingly) |

### Color accessibility

Every foreground/background combination used in {{PROGRAM_NAME}} must meet WCAG 2.1 AA contrast requirements:
- **Normal text** (under 18px or under 14px bold): minimum **4.5:1** contrast ratio
- **Large text** (18px+ or 14px+ bold): minimum **3:1** contrast ratio
- **UI components and graphical objects**: minimum **3:1** contrast ratio

See `visual-identity/color/accessibility-matrix.md` for the complete contrast ratio matrix.

### Adapting colors for your brand

When customizing the palette:
1. Replace primary/secondary/accent colors with your brand colors
2. Keep the semantic palette (success/warning/danger/info) standard — players learn these associations
3. Verify every new color combination against WCAG 2.1 AA
4. Your Playbook content should feel visually integrated with your commercial brand, not siloed into a separate "RG section" aesthetic
5. Update all values in `_brand.yml` so they cascade throughout the system

---

## 3. Typography

### Type system

The default type system uses open-source fonts available from Google Fonts — broad availability, zero licensing cost, modern aesthetic.

| Role | Font | Weight(s) | Usage |
|---|---|---|---|
| Headings | **Inter** | 400, 600, 700 | Page titles, section headers, card headings, quiz questions |
| Body | **Source Sans 3** | 300, 400, 600 | Paragraph text, descriptions, form labels |
| Monospace | **Source Code Pro** | 400 | Helpline numbers (for clarity), odds displays, data |

### Type scale

Based on a 16px base (1rem):

| Level | Size (rem) | Size (px) | Weight | Line height | Usage |
|---|---|---|---|---|---|
| Display | 3.0 | 48 | 700 | 1.2 | Hero headlines, campaign headers |
| H1 | 2.5 | 40 | 700 | 1.2 | Page titles |
| H2 | 2.0 | 32 | 600 | 1.2 | Section headings |
| H3 | 1.5 | 24 | 600 | 1.3 | Subsection headings |
| H4 | 1.25 | 20 | 600 | 1.3 | Card headings, sidebar headers |
| Body large | 1.125 | 18 | 400 | 1.6 | Lead paragraphs, important descriptions |
| Body | 1.0 | 16 | 400 | 1.6 | Default body text |
| Small | 0.875 | 14 | 400 | 1.6 | Secondary text, metadata |
| Caption | 0.75 | 12 | 400 | 1.5 | Legal text only — never for content players should actually read |

### Typography rules

- **Minimum body text size**: 16px (1rem). No exceptions. Accessibility requires it, and content people are supposed to read should be readable.
- **Line length**: 50–75 characters per line for body text. Wider reduces readability.
- **Paragraph spacing**: 1em (one blank line) between paragraphs.
- **Left-aligned text**: Always. Justified text creates uneven word spacing.
- **Helpline numbers**: Set in monospace or bold. Never use a font that makes similar characters ambiguous (1/l/I or 0/O).

### Adapting typography

When customizing fonts:
1. Choose fonts with broad weight support (minimum: regular and bold)
2. Match the quality and modernity of your operator's commercial typography
3. Ensure the font supports character sets for your operating jurisdictions
4. Test readability at small sizes — Playbook content often appears in constrained spaces

---

## 4. Iconography

### Icon style

{{PROGRAM_NAME}} icons use a consistent outlined style with rounded line caps. The style should feel like part of a modern game UI — clean, contemporary, and integrated.

| Property | Value |
|---|---|
| Style | Outlined (not filled) |
| Stroke width | 1.5px (at 24px canvas) |
| Line cap | Round |
| Line join | Round |
| Corner radius | 2px |
| Canvas size | 24x24px (default) |
| Optical sizes | 16px, 24px, 32px, 48px |

### Icon library (55 icons across 6 categories)

#### Game Types

| Icon | Name | Usage |
|---|---|---|
| Playing cards | `icon-cards` | Card games, blackjack, general gambling |
| Dice | `icon-dice` | Dice games, craps, randomness |
| Roulette wheel | `icon-roulette` | Roulette, casino games, chance |
| Slot machine | `icon-slots` | Slot machines, electronic gaming |
| Chip stack | `icon-chips` | Betting chips, wagers, stakes |
| Sports ball | `icon-sports` | Sports betting, live betting |
| Lottery ticket | `icon-lottery` | Lottery, scratch cards, draws |
| Poker hand | `icon-poker` | Poker, card strategy games |
| Bingo grid | `icon-bingo` | Bingo, number games |
| Table (top-down) | `icon-table` | Table games, blackjack, baccarat |

#### Odds & Math

| Icon | Name | Usage |
|---|---|---|
| Percent circle | `icon-percentage` | Probabilities, percentages, return rates |
| Calculator | `icon-calculator` | Odds calculator, math tools |
| Fraction | `icon-odds` | Odds display, fractional odds, ratios |
| Shuffle arrows | `icon-rng` | Random number generators, independence |
| Tilt scale | `icon-edge` | House edge, advantage, margin |
| Trend up | `icon-trend-up` | Positive trends, growth |
| Trend down | `icon-trend-down` | Negative trends, losses |
| Equal circle | `icon-equal` | Independent events, equal probability |

#### Player Tools

| Icon | Name | Usage |
|---|---|---|
| Wallet | `icon-wallet` | Deposits, withdrawals, account balance |
| Padlock | `icon-lock` | Account lock, security, self-exclusion |
| Bell | `icon-bell` | Notifications, alerts, reminders |
| Gear | `icon-settings` | Settings, preferences, configuration |
| Clock arrow | `icon-history` | Play history, recent activity, session log |
| Snowflake | `icon-cooloff` | Cool-off period, take a break, time-out |
| Dollar circle | `icon-budget` | Entertainment budget, spending limits |
| Timer/clock | `icon-timer` | Session awareness, play duration |
| Gauge/limit | `icon-limit` | Deposit limits, loss limits, wagering limits |
| Pause | `icon-pause` | Take a break, cool-off |
| Calendar | `icon-calendar` | Session scheduling, cool-off duration |
| Shield | `icon-shield` | Account security, self-exclusion |
| Person | `icon-person` | Player profile, account settings |
| Checkmark | `icon-check` | Confirmation, positive actions, quiz correct |
| Bar chart | `icon-activity` | Activity tracking, play history, stats |

#### Content & Education

| Icon | Name | Usage |
|---|---|---|
| Question circle | `icon-quiz` | Quizzes, knowledge tests, trivia |
| X-mark circle | `icon-myth` | Myth-busting, false claims, misconceptions |
| Check circle | `icon-fact` | Facts, verified info, correct answers |
| Open book | `icon-book` | Educational content, guides, learning |
| Play rectangle | `icon-video` | Video content, tutorials, explainers |
| Document | `icon-article` | Articles, blog posts, written content |
| Lightbulb | `icon-smart` | Myth-busting, game IQ, quiz |
| Info circle | `icon-info` | Educational content, tips, explainers |

#### Social & Sharing

| Icon | Name | Usage |
|---|---|---|
| Crossed swords | `icon-challenge` | Challenges, versus mode, competitions |
| Podium | `icon-leaderboard` | Leaderboards, rankings, top players |
| People group | `icon-group` | Groups, social features, community |
| Chain link | `icon-link` | Links, URLs, connections |
| QR code | `icon-qr` | QR codes, scan to access, mobile linking |
| Share arrow | `icon-share` | Social sharing, challenge friends |
| Trophy | `icon-score` | Quiz results, achievements, game IQ score |

#### Support & Safety

| Icon | Name | Usage |
|---|---|---|
| Heart | `icon-heart` | Wellbeing, self-care, mental health |
| Warning triangle | `icon-warning` | Warnings, alerts, caution, risk |
| Help lifeline | `icon-help` | Help resources, support services, crisis lines |
| External arrow | `icon-external` | External links, leaving site, third-party |
| Chat bubble | `icon-chat` | Live chat, support conversation |
| Phone | `icon-phone` | Helpline number, call for support |
| Playbook | `icon-playbook` | Brand identifier, navigation, home |

See `visual-identity/iconography/icon-library.md` for detailed specifications, `visual-identity/iconography/icon-preview.html` for a visual preview, and `visual-identity/iconography/icons/` for SVG source files.

---

## 5. Photography

### Photo direction

Photography in {{PROGRAM_NAME}} materials should feel like a lifestyle editorial — real people enjoying themselves, shot with natural light and confident energy. The vibe is "people who enjoy life and make smart choices" — not "people who might have a problem."

### Do

- Show **real, diverse people** having a good time — at sports events, with friends, checking their phones casually
- Use **natural lighting** — warm, energetic, and inviting
- Capture **social moments** — friends watching a game, group celebrations, shared experiences
- Show **confident, relaxed body language** — people who are in control and enjoying themselves
- Represent **diverse ages, ethnicities, genders, and abilities**
- Use **candid, authentic-feeling shots** — editorial quality, not stock photo sterility

### Don't

- Show people who look distressed, defeated, or desperate
- Use stereotypical "problem gambler" imagery (head in hands, empty wallet, dark rooms)
- Show generic, lifeless stock photography that looks like it came from a compliance department
- Show alcohol consumption alongside gambling education content
- Use images of minors
- Avoid imagery that's *too* staged or corporate — this should feel real

### The gambling environment question

Unlike traditional RG programs that avoid all gambling imagery, Playbook takes a different approach:

- **Casino environments**: Can appear if the mood is social, fun, and energetic — people enjoying a night out. Not dim rooms with solitary players.
- **Sports contexts**: Encouraged — friends watching games, stadium energy, sports culture
- **Mobile/digital**: People casually checking phones, using apps — relaxed, everyday settings
- **Avoid**: Close-ups of money, chips, or betting slips used in a way that glamorizes high-stakes play

The key question: "Does this image make gambling look like fun entertainment among friends, or does it make it look like an isolated, high-stakes activity?" Go with the former.

### Mood board keywords

When sourcing or commissioning photography:
- Confidence, enjoyment, social energy
- Smart choices, good times, living well
- Diversity, inclusion, real people
- Modern lifestyle, urban, contemporary
- Sports culture, entertainment, nightlife

---

## 6. Illustration

### When to use illustration

Illustrations complement photography in contexts where:
- Explaining abstract concepts (odds, probability, house edge, RNG)
- Creating educational content (myth-busting, how-it-works)
- Building quiz and interactive content visuals
- Social media graphics that need to stand out

### Illustration style

| Property | Guideline |
|---|---|
| Style | Flat or semi-flat, with subtle gradients — modern and clean |
| Line weight | Consistent, moderate (similar to icon stroke weight) |
| Color | Use brand palette — primary, secondary, and accent |
| People | Simplified, inclusive, diverse — non-photorealistic |
| Mood | Confident, clear, smart — never cutesy or childish |
| Complexity | Simple enough to read at small sizes; detailed enough to be engaging |

### Data visualization

For educational content (odds, probabilities, house edge comparisons):
- Use the brand palette for charts and graphs
- Always label clearly — no assumptions about player knowledge
- Make the key insight obvious at a glance
- Add context: "The house edge on blackjack is 0.5%. On American roulette, it's 5.26%." — show the comparison visually

---

## 7. Dark mode

When the operator's platform supports dark mode, the {{PROGRAM_NAME}} color system should adapt:

| Light mode | Dark mode adaptation |
|---|---|
| `neutral_50` (background) | `neutral_900` (background) |
| `neutral_900` (text) | `neutral_50` (text) |
| `primary` (headers) | `primary_light` (lighter for contrast on dark bg) |
| `white` (surface) | `neutral_700` (surface) |
| Semantic colors | Slightly desaturated to reduce eye strain |

All dark mode combinations must pass WCAG 2.1 AA contrast requirements.

---

## 8. The visual integration test

Before shipping any Playbook content, apply this test:

1. **Place it next to the operator's commercial content.** Does it look like it belongs, or does it look like it was bolted on from a different brand?
2. **Would a CMO put their name on this?** If it looks like a compliance department made it, redesign.
3. **Does it feel modern?** If it could have been designed in 2010, it's not good enough.
4. **Is it accessible?** Run the contrast ratios. Check the touch targets. Test with a screen reader.

If it passes all four, ship it.

---

*Previous: [Chapter 2 — Brand Personality](02-brand-personality.md) | Next: [Chapter 4 — Voice and Tone](04-voice-and-tone.md)*
