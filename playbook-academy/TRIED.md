# Improvements Tried

This file tracks what has been attempted so future improvement cycles don't repeat work.

## Accessibility
- [x] Added `--color-teal-text: #007A63` WCAG AA token (applied in SpotTheGap, EngagementGapChart only — NOT widely applied yet)
- [x] aria-live on KnowledgeCheck, SpotTheGap, LayerClassifier, ToneMatcher, StigmaSwapGame feedback
- [x] Focus trapping in TranscriptDrawer (tab cycling, inert when closed, focus restore)
- [x] Glossary keyboard-accessible (tabindex, group-focus-within)
- [x] role="radiogroup" on KnowledgeCheck and ToneMatcher option containers
- [x] prefers-reduced-motion: section opacity 1, all animations killed
- [x] Removed invalid role="term" from Glossary
- [x] role="radio" + aria-checked on individual quiz option buttons (REPLACED: now uses <fieldset>/<label>/<input type="radio"> — proper radio pattern)
- [ ] NOT DONE: text-teal-text applied broadly (still ~25+ components use text-teal on white)
- [x] AudioPlayer seek bar keyboard accessible (hidden range input overlay with aria-label and aria-valuetext)
- [ ] NOT DONE: Focus trapping in mobile lesson drawer
- [x] aria-label on quiz progress dots (role="img" with status label per dot)

## Assessment
- [x] Fisher-Yates shuffle on questions AND answer options with correctIndex remap
- [x] Re-shuffle on retry via setShuffledQuestions
- [x] Passing score unified to 80% everywhere (KnowledgeCheck default, progress.ts, LayerClassifier, PortfolioExport, JSDoc, M1 transcript)
- [ ] NOT DONE: Confidence indicator ("How sure are you?")
- [ ] NOT DONE: Question pool larger than displayed set

## Audio
- [x] Module 2 transcripts filled from narration scripts
- [x] M1 transcript text corrected to "80 percent"
- [ ] NOT DONE: Word-level timestamps for transcript sync
- [ ] NOT DONE: Keyboard shortcuts for audio (space=play/pause)

## Interactive Exercises
- [x] exercise-complete dispatch on ToneMatcher and StigmaSwapGame
- [x] exerciseCompleteDispatched ref reset on replay (StigmaSwap, LayerClassifier, ToneMatcher)
- [x] Dynamic Tailwind hover classes fixed (ToneMatcher, LayerClassifier)
- [x] ToneMatcher score threshold fixed (>=8 → === MESSAGES.length)
- [x] GenerativeExercise component built + added to M3 and M4
- [x] Generative exercise in M5 (Map a Touchpoint to Content)
- [x] Generative exercise in M6 (Score a Sample Message — rewrite a bad deposit-limit reminder)
- [x] Generative exercise in M1 (Write a Tier 1 Deposit Limit Nudge)
- [x] Generative exercise in M2 (Write a Tier 2 Support Page Brief)
- [ ] NOT DONE: Drag-and-drop sorting exercises
- [x] Exercise state persistence for GenerativeExercise (localStorage draft saving)
- [x] Item randomization in StigmaSwapGame (Fisher-Yates shuffle on mount)
- [ ] NOT DONE: Item randomization in SpotTheGap

## New Components Built
- [x] GenerativeExercise.tsx — write + rubric + model answer
- [x] ReviewDeck.tsx — Leitner spaced retrieval on landing page
- [x] ThreeLayerDiagram.tsx — interactive SVG for M1

## Platform
- [x] Astro ClientRouter for view transitions
- [x] CSS scroll-driven progress bar (animation-timeline: scroll())
- [x] Section opacity 0.6 (was 0.4)
- [x] Hardcoded #0a1018 → var(--color-navy-dark)
- [x] Scroll gate innerHTML → DOM construction (XSS fix)
- [x] Celebratory tone #D4A017 → warning brand token
- [ ] NOT DONE: Service worker / offline support
- [ ] NOT DONE: PWA manifest
- [ ] NOT DONE: Container queries
- [ ] NOT DONE: Error boundaries around React components
- [ ] NOT DONE: CSS split into partials
- [ ] NOT DONE: AudioContext pooling (creates new one per tone)

## Dark Mode
- [x] Dark mode classes added to GenerativeExercise card container
- [x] Dark mode classes added to ReviewDeck card containers
- [x] Dark text override on KnowledgeCheck option text (dark:text-n100)
- [ ] NOT DONE: Dark mode on all other React components (ThreeLayerDiagram, ToneMatcher, etc.)

## Color Tokens
- [x] Defined missing --color-n200, --color-n400, --color-n600 in @theme (were used in 188+ locations but undefined)

## Learner Flow
- [x] Next Module CTA on quiz pass (KnowledgeCheck nextModuleHref/nextModuleTitle props, wired in all 6 modules)
- [x] Removed scroll-snap-type: y proximity from .prose (degraded reading UX)

## View Transitions
- [x] astro:page-load handler in ModuleLayout.astro re-initializes sidebar sync, mobile drawer, sidebar collapse, panel sync, scroll-to-top after SPA navigation

## Accessibility (Cycle 2)
- [x] module-section default opacity changed from 0.6 to 1; dim state now JS-applied via .awaiting-entrance class (progressive enhancement safe)
- [x] ProgressBar now visible at 0% (subtle navy-light bar with "Start your first module" aria-label)
- [x] AudioPlayer dismiss button: added aria-label="Dismiss audio narration" + larger 6×6 touch target
- [x] AudioPlayer seek bar: replaced div+onClick with hidden input[type=range] overlay — keyboard seek, aria-label, aria-valuetext
- [x] TranscriptDrawer track tabs: added aria-label with section number + transcript preview
- [x] LessonPaginator aria-controls fixed: panel-${slug} → ${slug} to match actual section IDs

## Accessibility / Audio / Flow (Cycle 3)
- [x] KnowledgeCheck: replaced role="radio" buttons with proper <fieldset>/<legend>/<label>/<input type="radio"> pattern
- [x] AudioPlayer: added current time / total duration display (e.g. "2:40 / 4:15")
- [x] AudioPlayer: "Slide X of Y" → "Lesson X of Y" in track info
- [x] AudioPlayer: exercise-paused noop <button> replaced with non-interactive <span> — no longer confuses screen readers
- [x] AudioPlayer: dismiss button aria-label + larger touch target (from Cycle 2)
- [x] Mobile lesson drawer: added focus trap via inert on main content + focus restore on close
- [x] ProgressBar 0% state: reverted to simple 0-width teal bar (full-width navy bar was confusing)

## Content Coverage
- [x] ReviewDeck cards for all 6 modules (added M2 Visual Identity and M5 Customer Journey)
- [x] Generative exercises in ALL 6 modules (M1: Tier 1 deposit nudge, M2: Tier 2 support brief, M3–M6: existing)

## Accessibility / Content (Cycle 4)
- [x] Warning color token darkened: #FFB300 → #B07D00 (WCAG AA 4.5:1+ on white)
- [x] GenerativeExercise minimum raised from 10 chars to 30 words with live word count display
- [x] ReviewDeck M1 Informed Choice premises card corrected to match module content verbatim
- [x] TranscriptDrawer trigger button: added aria-expanded state

## Technical / Accessibility (Cycle 5)
- [x] M5 ReviewDeck stage names corrected ("Awareness, New Player, Active Player, Regular, Support Seeking")
- [x] KnowledgeCheck radio inputs: added id attributes + htmlFor on labels (proper label/input association)
- [x] GenerativeExercise: exerciseCompleteDispatched ref reset on useEffect cleanup (fixes remount bug)
- [x] AudioPlayer seek slider: added focus-visible:opacity-100 for keyboard users
- [x] ModuleLayout.astro: replaced hardcoded modules array with derivation from progress.ts canonical data (single source of truth)

## Content / Instructional Design (Cycle 6)
- [x] Learning objectives added to ALL 6 modules (3-4 measurable outcomes per module, displayed in intro panel)
- [x] saveProgress wrapped in try/catch (was unhandled — localStorage.setItem can throw in iOS private browsing)
- [x] GenerativeExercise handleRetry now clears localStorage draft (was persisting stale draft after retry)
- [x] ReviewDeck M6 Preachy-Respectful threshold clarified: "Below 4.0 = alarm, below 3.0 = automatic revise"

## Dark Mode / Transcript (Cycle 7)
- [x] TranscriptDrawer: replaced all hardcoded hex colors (#6B7B8D, #1B2838) with Tailwind token classes (text-n500 dark:text-n300, text-navy dark:text-white, etc.)
- [x] TranscriptDrawer panel: added dark:bg-navy for proper dark mode support
- [x] TranscriptDrawer track tabs: added dark:bg-navy-dark dark:border-navy-light

## Visual / Technical (Cycle 8)
- [x] Module hero restored: full-bleed gradient hero with module icon, number, title, and tagline (was just a thin accent bar)
- [x] AudioPlayer seek bar: added setProgress(val) in onChange handler to prevent visual snap-back glitch
- [x] GenerativeExercise: fixed exerciseCompleteDispatched cleanup — now uses separate unmount-only useEffect instead of cleanup in dependency-driven effect
