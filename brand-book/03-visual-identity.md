# Chapter 3: Visual Identity

This chapter defines the visual system for {{PROGRAM_NAME}} — the logo, colors, typography, iconography, photography, and illustration guidelines that make the brand recognizable across every touchpoint.

**The adaptive identity model**: {{PROGRAM_NAME}} is designed to be recognizable but adaptive. Operators apply their own colors and fonts while keeping the structural identity (layout patterns, information hierarchy, icon system, spacing) consistent. This chapter defines both the defaults and the rules for adaptation.

> All color values, fonts, and specifications reference the central configuration in [`_brand.yml`](../_brand.yml). Update that file to customize the visual identity for your organization.

---

## 1. Logo system

### Logo purpose

The {{PROGRAM_NAME}} logo identifies responsible gambling content, tools, and resources. It signals to players: *"This is your space for information, tools, and support."* The logo should feel trustworthy, modern, and approachable — never clinical or corporate.

### Logo components

The {{PROGRAM_NAME}} logo consists of:
- **Logomark**: A symbol (compass motif) that works independently at small sizes
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
| Monochrome (dark) | Light backgrounds | Single-color print, fax, emboss |
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
- Place the logo inside a container or shape that is not an approved co-branding lockup

### Co-branding

When the {{PROGRAM_NAME}} logo appears alongside an operator's logo:

- Both logos maintain their respective clear space
- The {{PROGRAM_NAME}} logo should be **no smaller than 60%** of the operator logo's height
- Use a vertical divider line (`neutral_300` color, 1px) between logos when they appear side by side
- The operator logo typically appears first (left or top), with {{PROGRAM_NAME}} second (right or bottom)

### Helpline badge lockup

A special lockup combines the {{PROGRAM_NAME}} logomark with a helpline number. This is used where regulatory requirements mandate displaying a helpline alongside RG branding:

```
[Logomark] | Free help 24/7: {{HELPLINE_NUMBER}}
```

Specifications for the helpline badge are in `visual-identity/logo/helpline-badge/`.

---

## 2. Color palette

### Design philosophy

The default {{PROGRAM_NAME}} palette draws from modern wellness design: calming blues and teals that convey trust and stability, balanced with warm amber accents that convey energy and optimism. The palette avoids the reds and blacks common in gambling branding — creating a visual distinction that signals "this is the wellness space."

### Primary palette

| Role | Color | Hex | RGB | Usage |
|---|---|---|---|---|
| Primary | Deep teal | `#1B6B8A` | 27, 107, 138 | Brand identification, headers, primary buttons |
| Primary light | Teal | `#2A8FA8` | 42, 143, 168 | Hover states, highlights, secondary elements |
| Primary dark | Dark teal | `#0F4A61` | 15, 74, 97 | High-contrast text on light backgrounds |

### Secondary palette

| Role | Color | Hex | RGB | Usage |
|---|---|---|---|---|
| Secondary | Sage green | `#5AB5A0` | 90, 181, 160 | Supporting elements, illustrations, badges |
| Secondary light | Light sage | `#7CCFBB` | 124, 207, 187 | Card backgrounds, subtle highlights |
| Secondary dark | Dark sage | `#3E8A79` | 62, 138, 121 | Secondary text on light backgrounds |

### Accent palette

| Role | Color | Hex | RGB | Usage |
|---|---|---|---|---|
| Accent | Warm amber | `#F2A93B` | 242, 169, 59 | Primary CTAs, attention, action items |
| Accent light | Light amber | `#F7C370` | 247, 195, 112 | Hover states, secondary CTAs |
| Accent dark | Dark amber | `#D4891E` | 212, 137, 30 | Pressed state, high-contrast accent |

### Semantic palette

These colors communicate specific RG states and should be used consistently across all interfaces:

| Role | Color | Hex | Usage |
|---|---|---|---|
| Success | Green | `#2EAD6B` | Limit set, positive action confirmed, within limits |
| Warning | Amber | `#E8943A` | Approaching limit, session reminder, caution |
| Danger | Red | `#D64045` | Over limit, critical alert, self-exclusion CTA |
| Info | Blue | `#4A90D9` | Educational content, informational messages |

### Neutral palette

| Role | Hex | Usage |
|---|---|---|
| `neutral_900` | `#1A1D2E` | Primary text |
| `neutral_700` | `#3D4260` | Secondary text |
| `neutral_500` | `#6B7194` | Placeholder text, captions |
| `neutral_300` | `#A8AEC8` | Borders, dividers |
| `neutral_100` | `#E8EAF2` | Card backgrounds, table stripes |
| `neutral_50` | `#F5F6FA` | Page backgrounds |
| White | `#FFFFFF` | Surface backgrounds |
| Black | `#111119` | Maximum contrast text (use sparingly) |

### Color accessibility

Every foreground/background combination used in {{PROGRAM_NAME}} must meet WCAG 2.1 AA contrast requirements:
- **Normal text** (under 18px or under 14px bold): minimum **4.5:1** contrast ratio
- **Large text** (18px+ or 14px+ bold): minimum **3:1** contrast ratio
- **UI components and graphical objects**: minimum **3:1** contrast ratio

See `visual-identity/color/accessibility-matrix.md` for the complete contrast ratio matrix of all palette combinations.

### Adapting colors for your brand

When customizing the palette:
1. Replace primary/secondary/accent colors with your brand colors
2. Keep the semantic palette (success/warning/danger/info) standard — players learn these associations
3. Verify every new color combination against WCAG 2.1 AA (use a tool like WebAIM's contrast checker)
4. Maintain visual distinction between your commercial brand and the RG space
5. Update all values in `_brand.yml` so they cascade throughout the system

---

## 3. Typography

### Type system

The default type system uses open-source fonts available from Google Fonts, ensuring broad availability and zero licensing cost.

| Role | Font | Weight(s) | Usage |
|---|---|---|---|
| Headings | **Inter** | 400, 600, 700 | Page titles, section headers, card headings |
| Body | **Source Sans 3** | 300, 400, 600 | Paragraph text, descriptions, form labels |
| Monospace | **Source Code Pro** | 400 | Code snippets, helpline numbers (for clarity) |
| Internationalization | **Noto Sans** | 400, 600 | CJK, Cyrillic, Arabic, and other non-Latin scripts |

### Type scale

Based on a 16px base (1rem), using a modular scale:

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
| Caption | 0.75 | 12 | 400 | 1.5 | Labels, legal text, fine print |

### Typography rules

- **Minimum body text size**: 16px (1rem). Never set body text smaller than this — accessibility requires it, and it's the right thing to do for players who may be reading under stress.
- **Line length**: Aim for 50-75 characters per line for body text. Wider than this reduces readability.
- **Paragraph spacing**: Use 1em (one blank line) between paragraphs. Don't rely solely on indentation.
- **Avoid justified text**: Use left-aligned text for all body copy. Justified text creates uneven word spacing that reduces readability.
- **Helpline numbers**: Set in monospace or bold to ensure clarity. Never use a font that makes similar characters ambiguous (e.g., 1/l/I or 0/O).

### Adapting typography

When customizing fonts:
1. Choose fonts with broad weight support (at minimum: regular and bold)
2. Verify legibility at small sizes — RG content often appears in constrained spaces
3. Ensure the font supports the character sets needed for your jurisdictions
4. Consider using Noto Sans as a fallback for multi-language support
5. Test contrast and readability on both light and dark backgrounds

---

## 4. Iconography

### Icon style

{{PROGRAM_NAME}} icons use a consistent outlined style with rounded line caps and joins. This style feels friendly and approachable — aligned with the brand personality.

| Property | Value |
|---|---|
| Style | Outlined (not filled) |
| Stroke width | 1.5px (at 24px canvas) |
| Line cap | Round |
| Line join | Round |
| Corner radius | 2px |
| Canvas size | 24x24px (default) |
| Optical sizes | 16px, 24px, 32px, 48px |

### Required RG icons

Every {{PROGRAM_NAME}} implementation needs these icons:

| Icon | Name | Usage |
|---|---|---|
| Clock/timer | `icon-timer` | Session reminders, play duration, reality checks |
| Shield | `icon-shield` | Protection, self-exclusion, account security |
| Gauge/limit | `icon-limit` | Deposit limits, loss limits, wagering limits |
| Chat bubble | `icon-chat` | Helpline, live chat, support conversation |
| Pause | `icon-pause` | Cool-off periods, take a break |
| Info circle | `icon-info` | Educational content, tips, explanations |
| Checkmark | `icon-check` | Confirmation, positive actions, limits set |
| Warning triangle | `icon-warning` | Approaching limits, caution states |
| Heart/hand | `icon-support` | Care, support, compassion |
| Phone | `icon-phone` | Helpline number, call for help |
| Lock | `icon-lock` | Self-exclusion active, account restricted |
| Chart/graph | `icon-activity` | Activity tracking, play history, spending overview |
| Compass | `icon-compass` | Brand identifier, program navigation, home |
| Person | `icon-person` | Self-assessment, player profile, personal tools |
| Calendar | `icon-calendar` | Cooling-off period duration, session scheduling |

See `visual-identity/iconography/icon-library.md` for detailed specifications and `visual-identity/iconography/icons/` for SVG source files.

---

## 5. Photography

### Photo direction

Photography in {{PROGRAM_NAME}} materials should feel like modern wellness editorial — real people in real settings, shot with natural light and a calm, hopeful mood.

### Do

- Show **real, diverse people** in everyday settings (at home, at a cafe, outdoors)
- Use **natural lighting** — warm, soft, and inviting
- Capture **moments of connection** — conversations, reflection, togetherness
- Show **positive actions** — someone setting limits on a phone, talking to a friend, relaxing
- Represent **diverse ages, ethnicities, genders, and abilities**
- Use **candid, authentic-feeling shots** over posed studio photography

### Don't

- Show gambling environments (casino floors, poker tables, slot machines, betting shops)
- Show money, chips, cards, or other gambling paraphernalia
- Show people who look distressed, defeated, or desperate
- Use stereotypical "problem gambler" imagery (head in hands, empty wallet, dark rooms)
- Use stock photography that looks generic or corporate
- Show alcohol consumption alongside RG messaging
- Use images of minors

### Mood board keywords

When sourcing or commissioning photography, search for these themes:
- Wellness, mindfulness, self-care
- Everyday moments, daily life
- Calm, grounded, hopeful
- Connection, conversation, community
- Diversity, inclusion, belonging

---

## 6. Illustration

### When to use illustration

Illustrations complement photography in contexts where:
- Explaining abstract concepts (odds, probability, house edge)
- Creating educational content (myth-busting, how-it-works)
- Representing sensitive topics without triggering imagery
- Building a recognizable campaign visual language

### Illustration style

| Property | Guideline |
|---|---|
| Style | Flat or semi-flat, with subtle gradients |
| Line weight | Consistent, moderate (similar to icon stroke weight) |
| Color | Use brand palette — primary, secondary, and accent colors |
| People | Simplified, inclusive, non-photorealistic (no identifiable faces) |
| Mood | Optimistic, clear, approachable |
| Complexity | Simple enough to read at small sizes; detailed enough to be engaging |

### Optional: Brand mascot or character

Some RG programs use a character to make content more approachable (e.g., GameSense's "Chip"). If creating a character:

- Keep the character **friendly and relatable**, not cartoonish or childish
- The character should **complement** serious content, not trivialize it
- Use the character primarily in **educational and myth-busting** content
- Avoid using the character in **crisis-related** contexts (self-exclusion, helpline referrals)
- Ensure the character design works across all sizes and formats

---

## 7. Dark mode

When the operator's platform supports dark mode, the {{PROGRAM_NAME}} color system should adapt:

| Light mode | Dark mode adaptation |
|---|---|
| `neutral_50` (background) | `neutral_900` (background) |
| `neutral_900` (text) | `neutral_50` (text) |
| `primary` (links, headers) | `primary_light` (lighter for contrast on dark bg) |
| `white` (surface) | `neutral_700` (surface) |
| Semantic colors | Slightly desaturated to reduce eye strain |

All dark mode combinations must also pass WCAG 2.1 AA contrast requirements.

---

*Previous: [Chapter 2 — Brand Personality](02-brand-personality.md) | Next: [Chapter 4 — Voice and Tone](04-voice-and-tone.md)*
