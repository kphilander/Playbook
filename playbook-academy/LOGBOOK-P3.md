# Phase 3 Improvement Logbook

Tracks 10 evaluate-improve cycles with blind evaluator scores and changes made.

---

## Cycle 1

| # | Subscale | Design | Domain | Code | Avg |
|---|----------|--------|--------|------|-----|
| 1 | Visual Design | 83 | 84 | 82 | 83.0 |
| 2 | Navigation | 87 | 81 | 86 | 84.7 |
| 3 | Exercises | 88 | 88 | 88 | 88.0 |
| 4 | Assessment | 88 | 82 | 83 | 84.3 |
| 5 | Audio | 90 | 87 | 88 | 88.3 |
| 6 | Content | 92 | 93 | 85 | 90.0 |
| 7 | Brand | 91 | 92 | 90 | 91.0 |
| 8 | Flow | 85 | 85 | 84 | 84.7 |
| 9 | Accessibility | 80 | 78 | 74 | 77.3 |
| 10 | Technical | 84 | 80 | 80 | 81.3 |
| | **Overall** | **86.8** | **85.0** | **84.0** | **85.3** |

**Changes made:**
1. Defined missing `--color-n200: #CFD0E0`, `--color-n400: #8A8AA5`, `--color-n600: #515175` tokens in `@theme` — 188+ class usages were silently rendering as nothing
2. Added `astro:page-load` event handler in ModuleLayout.astro to re-initialize sidebar sync, mobile drawer, sidebar collapse, panel sync, and scroll-to-top after view transitions
3. Added `nextModuleHref`/`nextModuleTitle` props to KnowledgeCheck — quiz pass now shows a prominent "Continue to Module N" CTA button; wired in all 6 modules (M6 → Capstone)
4. Removed `scroll-snap-type: y proximity` from `.prose` — was degrading long-form reading experience

---

## Cycle 2

| # | Subscale | Design | Domain | Code | Avg |
|---|----------|--------|--------|------|-----|
| 1 | Visual Design | 82 | 88 | 84 | 84.7 |
| 2 | Navigation | 86 | 84 | 88 | 86.0 |
| 3 | Exercises | 88 | 91 | 91 | 90.0 |
| 4 | Assessment | 87 | 86 | 87 | 86.7 |
| 5 | Audio | 91 | 89 | 82 | 87.3 |
| 6 | Content | 89 | 93 | 90 | 90.7 |
| 7 | Brand | 90 | 90 | 88 | 89.3 |
| 8 | Flow | 85 | 87 | 86 | 86.0 |
| 9 | Accessibility | 78 | 85 | 76 | 79.7 |
| 10 | Technical | 84 | 87 | 85 | 85.3 |
| | **Overall** | **86.0** | **88.0** | **85.7** | **86.6** |

**Changes made:**
1. Fixed module-section default opacity from 0.6 → 1; dim state now JS-applied via `.awaiting-entrance` class — content legible even if JS fails
2. ProgressBar now visible at 0% — shows subtle navy-light full-width bar with "Start your first module" aria-label
3. AudioPlayer dismiss button: added `aria-label="Dismiss audio narration"` and expanded to 6×6 touch target
4. AudioPlayer seek bar: replaced div+onClick with hidden `<input type="range">` overlay — keyboard seek via arrow keys, with `aria-label` and `aria-valuetext`
5. TranscriptDrawer track tabs: added `aria-label` with section number + transcript preview text
6. LessonPaginator `aria-controls` fixed: `panel-${slug}` → `${slug}` to match actual section element IDs

---

## Cycle 3

| # | Subscale | Design | Domain | Code | Avg |
|---|----------|--------|--------|------|-----|
| 1 | Visual Design | 82 | 88 | 84 | 84.7 |
| 2 | Navigation | 78 | 84 | 82 | 81.3 |
| 3 | Exercises | 88 | 91 | 88 | 89.0 |
| 4 | Assessment | 85 | 82 | 87 | 84.7 |
| 5 | Audio | 90 | 79 | 91 | 86.7 |
| 6 | Content | 84 | 93 | 86 | 87.7 |
| 7 | Brand | 86 | 90 | 90 | 88.7 |
| 8 | Flow | 81 | 87 | 85 | 84.3 |
| 9 | Accessibility | 80 | 85 | 80 | 81.7 |
| 10 | Technical | 83 | 86 | 83 | 84.0 |
| | **Overall** | **83.7** | **86.5** | **85.6** | **85.3** |

**Changes made:**
1. **KnowledgeCheck radio pattern fixed** — replaced `<button role="radio">` with proper `<fieldset>/<legend>/<label>/<input type="radio">` pattern. Screen readers now get correct radio group semantics with native arrow-key navigation
2. **AudioPlayer time display** — added current time / total duration (e.g., "2:40 / 4:15") to the audio bar
3. **AudioPlayer track info** — "Slide X of Y" → "Lesson X of Y" + removed raw transcript substring leak
4. **AudioPlayer exercise-paused button** — replaced noop `<button onClick={() => {}>` with non-interactive `<span>` so screen readers don't find a clickable element that does nothing
5. **Mobile drawer focus trap** — added `inert` attribute on main content when drawer is open, focus moves to first link, restores to toggle on close
6. **ProgressBar** — reverted 0% state to simple 0-width teal bar (the full-width navy bar was misleading)

---

## Cycle 4

| # | Subscale | Design | Domain | Code | Avg |
|---|----------|--------|--------|------|-----|
| 1 | Visual Design | 82 | 88 | 84 | 84.7 |
| 2 | Navigation | 78 | 82 | 82 | 80.7 |
| 3 | Exercises | 84 | 91 | 88 | 87.7 |
| 4 | Assessment | 86 | 87 | 80 | 84.3 |
| 5 | Audio | 88 | 93 | 86 | 89.0 |
| 6 | Content | 90 | 94 | 85 | 89.7 |
| 7 | Brand | 85 | 90 | 91 | 88.7 |
| 8 | Flow | 79 | 85 | 83 | 82.3 |
| 9 | Accessibility | 81 | 84 | 79 | 81.3 |
| 10 | Technical | 83 | 88 | 80 | 83.7 |
| | **Overall** | **83.6** | **88.2** | **83.8** | **85.2** |

**Changes made:**
1. **Warning color WCAG fix** — darkened `--color-warning` from `#FFB300` to `#B07D00` (now 4.5:1+ on white, was ~2.6:1)
2. **GenerativeExercise word minimum** — raised from 10 characters to 30 words; submit button now gated on word count with live "X / 30 words minimum" display
3. **Generative exercises in M1 and M2** — M1: "Write a Tier 1 Deposit Limit Nudge" (4-criterion rubric + model answer); M2: "Write a Tier 2 Support Page Brief" (5-criterion rubric + model answer). All 6 modules now have generative exercises
4. **ReviewDeck M1 content fix** — corrected the Informed Choice premises card to match the module's actual four premises verbatim
5. **TranscriptDrawer** — added `aria-expanded={isOpen}` to trigger button

---

## Cycle 5

| # | Subscale | Design | Domain | Code | Avg |
|---|----------|--------|--------|------|-----|
| 1 | Visual Design | 82 | 88 | 88 | 86.0 |
| 2 | Navigation | 76 | 82 | 84 | 80.7 |
| 3 | Exercises | 88 | 90 | 90 | 89.3 |
| 4 | Assessment | 86 | 85 | 86 | 85.7 |
| 5 | Audio | 91 | 86 | 91 | 89.3 |
| 6 | Content | 90 | 93 | 85 | 89.3 |
| 7 | Brand | 85 | 91 | 93 | 89.7 |
| 8 | Flow | 84 | 87 | 87 | 86.0 |
| 9 | Accessibility | 79 | 79 | 82 | 80.0 |
| 10 | Technical | 83 | 84 | 89 | 85.3 |
| | **Overall** | **84.4** | **86.5** | **87.5** | **86.1** |

**Changes made:**
1. **M5 ReviewDeck stage names** — fixed from "Onboarding/Engagement/Escalation" to "New Player/Active Player/Regular" matching module content
2. **KnowledgeCheck radio a11y** — added `id` attributes to radio inputs and `htmlFor` on labels for proper screen reader association
3. **GenerativeExercise remount fix** — added `exerciseCompleteDispatched.current = false` in useEffect cleanup, preventing stale guard after lesson tab switch
4. **AudioPlayer seek visibility** — added `focus-visible:opacity-100` to hidden range input so keyboard users see the slider when focused
5. **Module data consolidation** — replaced hardcoded 60-line `modules` array in ModuleLayout.astro with derivation from `progress.ts` canonical data (`MODULE_IDS`, `LESSON_MAP`, `MODULE_TITLES`, `LESSON_TITLES`). Single source of truth.

---

## Cycle 6

| Evaluator | Overall |
|-----------|---------|
| Design Expert | 84.3 |
| Domain Expert | 84.1 |
| Code Expert | 78.5 |
| **Average** | **82.3** |

*Note: Code expert scored harshly on Testing (58), Performance (71), Error Handling (74) — no test suite exists.*

**Changes made:**
1. **Learning objectives in ALL 6 modules** — 3-4 measurable outcomes per module displayed in the intro panel before content begins. Addresses the most consistently flagged content gap across evaluators.
2. **saveProgress try/catch** — wrapped `localStorage.setItem` in try/catch to handle iOS private browsing quota errors
3. **GenerativeExercise retry cleanup** — `handleRetry` now calls `localStorage.removeItem(storageKey)` to prevent stale draft persisting after retry
4. **ReviewDeck M6 threshold fix** — Preachy-Respectful card corrected: "Below 4.0 = Brand DNA alarm; below 3.0 = automatic revise"

---

## Cycle 7

| # | Subscale | Design | Domain | Code | Avg |
|---|----------|--------|--------|------|-----|
| 1 | Visual Design | 91 | 90 | 88 | 89.7 |
| 2 | Navigation | 88 | 86 | 85 | 86.3 |
| 3 | Exercises | 90 | 91 | 86 | 89.0 |
| 4 | Assessment | 92 | 88 | 91 | 90.3 |
| 5 | Audio | 93 | 87 | 90 | 90.0 |
| 6 | Content | 90 | 93 | 83 | 88.7 |
| 7 | Brand | 94 | 92 | 92 | 92.7 |
| 8 | Flow | 89 | 89 | 87 | 88.3 |
| 9 | Accessibility | 87 | 85 | 84 | 85.3 |
| 10 | Technical | 91 | 88 | 86 | 88.3 |
| | **Overall** | **90.5** | **88.9** | **87.2** | **88.9** |

**MAJOR JUMP from 82.3 → 88.9.** Learning objectives + content fixes + accumulated a11y work.

**Changes made:**
1. TranscriptDrawer: replaced ALL hardcoded hex colors with Tailwind token classes — words now use `text-n500 dark:text-n300` (unspoken), `text-navy dark:text-white` (spoken/active), `bg-teal/20` (highlight). Full dark mode support.
2. TranscriptDrawer panel: added `dark:bg-navy` for dark mode background
3. TranscriptDrawer track tabs: added `dark:bg-navy-dark dark:border-navy-light`

---

## Cycle 8

| Evaluator | Overall |
|-----------|---------|
| Combined Panel | 80.2 |

*Note: Combined panel scored more conservatively than separate evaluators. Key new bugs identified.*

**Changes made:**
1. **Module hero restored** — replaced thin accent bar with full gradient hero showing module icon, number badge, title, duration, and tagline. Uses `heroGradientCSS` and `accent` from `module-themes.json`.
2. **AudioPlayer seek sync fix** — added `setProgress(val)` in the range input `onChange` handler to prevent visual snap-back glitch when seeking
3. **GenerativeExercise cleanup fix** — split `exerciseCompleteDispatched.current = false` into a separate mount-only `useEffect([])` cleanup, preventing the ref from being incorrectly reset on every dependency change

---

## Cycle 9

| # | Subscale | Design | Domain | Code | Avg |
|---|----------|--------|--------|------|-----|
| 1 | Visual Design | 88 | 82 | 85 | 85.0 |
| 2 | Navigation | 84 | 80 | 82 | 82.0 |
| 3 | Exercises | 83 | 87 | 81 | 83.7 |
| 4 | Assessment | 86 | 88 | 87 | 87.0 |
| 5 | Audio | 87 | 85 | 84 | 85.3 |
| 6 | Content | 85 | 91 | 80 | 85.3 |
| 7 | Brand | 90 | 84 | 88 | 87.3 |
| 8 | Flow | 85 | 88 | 82 | 85.0 |
| 9 | Accessibility | 83 | 78 | 82 | 81.0 |
| 10 | Technical | 82 | 80 | 88 | 83.3 |
| | **Overall** | **85.3** | **84.3** | **83.9** | **84.4** |

**Changes made:**
1. **Learning objectives visibility** — upgraded from `text-xs text-n600` to `text-sm text-navy` (header) and `text-sm text-n700` (list items) across all 6 modules for better visual prominence

---

## Cycle 10 (Final)

| # | Subscale | Design | Domain | Code | Avg |
|---|----------|--------|--------|------|-----|
| 1 | Visual Design | 88 | 82 | 85 | 85.0 |
| 2 | Navigation | 82 | 80 | 84 | 82.0 |
| 3 | Exercises | 85 | 90 | 87 | 87.3 |
| 4 | Assessment | 88 | 86 | 90 | 88.0 |
| 5 | Audio | 84 | 82 | 88 | 84.7 |
| 6 | Content | 80 | 93 | 80 | 84.3 |
| 7 | Brand | 90 | 87 | 85 | 87.3 |
| 8 | Flow | 83 | 88 | 85 | 85.3 |
| 9 | Accessibility | 82 | 78 | 86 | 82.0 |
| 10 | Technical | 82 | 80 | 89 | 83.7 |
| | **Overall** | **84.4** | **84.6** | **85.9** | **85.0** |

No changes made — final evaluation round.

---

## Phase 3 Summary

| Cycle | Overall Avg | Delta | Key Change |
|-------|-------------|-------|------------|
| 1 | 85.3 | — | Baseline |
| 2 | 86.6 | +1.3 | Color tokens, next-module CTA, view transition handlers |
| 3 | 85.3 | -1.3 | KnowledgeCheck radio fix, audio time display, mobile drawer focus trap |
| 4 | 85.2 | -0.1 | Warning color WCAG fix, 30-word generative min, M1/M2 generative exercises |
| 5 | 86.1 | +0.9 | ReviewDeck fixes, radio id/htmlFor, module data consolidation |
| 6 | 82.3 | -3.8 | Learning objectives in all modules, saveProgress error handling |
| 7 | **88.9** | **+6.6** | TranscriptDrawer dark mode, token-based word highlighting |
| 8 | 80.2 | -8.7 | Module hero restored, seek sync, exercise cleanup fix |
| 9 | 84.4 | +4.2 | Learning objective visibility bump |
| 10 | 85.0 | +0.6 | Final evaluation |

**Median score across all cycles: 85.2**
**Peak score: 88.9 (Cycle 7)**
**Final score: 85.0**

### Total improvements made across 10 cycles:
- 25+ distinct fixes and enhancements
- Critical WCAG accessibility fixes (radio pattern, warning contrast, seek keyboard, focus traps)
- Generative exercises added to ALL 6 modules (was only 4)
- Learning objectives added to ALL 6 modules (none existed before)
- Module data consolidated to single source of truth
- TranscriptDrawer fully tokenized for dark mode
- Module hero restored with gradient + icon
- Multiple content accuracy fixes (ReviewDeck M1, M5, M6)
- Next-module CTA on quiz completion across all modules
- Audio player: time display, keyboard seek, lesson labels, exercise-pause UX

---

