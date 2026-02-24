# Playbook Motion & Animation Specification

> CSS custom properties: [`../design-tokens.css`](../design-tokens.css)
> Accessibility reference: [`../../brand-book/06-accessibility.md`](../../brand-book/06-accessibility.md)

---

## 1. Motion Principles

Every animation in {{PROGRAM_NAME}} must satisfy all four principles. If it fails any one, remove it.

| Principle | Rule | Test |
|---|---|---|
| **Purposeful** | Every animation communicates a state change, guides attention, or provides feedback. | Can you explain *why* this animates? If not, make it instant. |
| **Fast** | Users must never wait for an animation to finish before they can act. | Does the animation block interaction? If yes, shorten or remove it. |
| **Accessible** | Animations respect `prefers-reduced-motion`. No content is hidden behind animation. | Does the page work identically with all motion disabled? |
| **Consistent** | The same interaction produces the same motion everywhere in {{PROGRAM_NAME}}. | Would a user predict this animation based on other parts of the UI? |

---

## 2. Timing

| Category | Duration | Use for |
|---|---|---|
| Micro-interactions | 150--200ms | Hover states, toggles, button presses, focus rings, color shifts |
| Panel transitions | 300--500ms | Page transitions, modals opening, drawers sliding, tab switches |
| Data visualizations | 600--800ms (staggered) | Chart entrances, progress bar fills, step completions |
| Loading states | N/A | Use skeleton screens. Never use spinners for primary content. |

**Hard rules:**
- No animation longer than 1000ms. If something needs more than 1s, break it into staggered steps.
- Micro-interactions above 200ms feel sluggish. Keep them tight.
- Exit animations are always shorter than entrance animations (exit = entrance duration * 0.75).

---

## 3. Easing

| Context | Easing name | CSS `cubic-bezier` | When to use |
|---|---|---|---|
| Entrance | Ease-out (decelerate) | `cubic-bezier(0.0, 0.0, 0.2, 1.0)` | Elements arriving on screen -- modals, toasts, page content |
| Exit | Ease-in (accelerate) | `cubic-bezier(0.4, 0.0, 1.0, 1.0)` | Elements leaving -- closing modals, dismissing toasts |
| Interactive feedback | Spring | `cubic-bezier(0.34, 1.56, 0.64, 1.0)` | Toggles, button press/release, selection pops |
| Interactive feedback | Ease-in-out | `cubic-bezier(0.4, 0.0, 0.2, 1.0)` | Smooth two-way transitions -- tab underlines, slider thumbs |
| Progress / linear | Linear | `linear` | Progress bars, loading indicators, countdown timers |

**Never** use `ease` (the CSS default). It is too generic and produces inconsistent feel across components.

---

## 4. Animation Patterns

### 4.1 Fade

Opacity transition. The simplest and most accessible pattern.

```css
/* Entrance */
.pb-fade-in {
  animation: pb-fade-in var(--pb-motion-duration-md) var(--pb-motion-ease-out) both;
}
@keyframes pb-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Exit */
.pb-fade-out {
  animation: pb-fade-out var(--pb-motion-duration-sm) var(--pb-motion-ease-in) both;
}
@keyframes pb-fade-out {
  from { opacity: 1; }
  to   { opacity: 0; }
}
```

**Use for:** Overlays, backdrop layers, tooltips, popovers, content appearing in-place.

### 4.2 Slide

TranslateX/Y transition. Implies spatial relationship (where something comes from).

```css
/* Slide in from bottom */
.pb-slide-up {
  animation: pb-slide-up var(--pb-motion-duration-md) var(--pb-motion-ease-out) both;
}
@keyframes pb-slide-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Slide in from right */
.pb-slide-left {
  animation: pb-slide-left var(--pb-motion-duration-md) var(--pb-motion-ease-out) both;
}
@keyframes pb-slide-left {
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
}
```

**Use for:** Side panels, drawers, navigation menus, mobile sheets, toast notifications.

**Slide distances:** Keep translate values small. 8--24px maximum. Large slides (100px+) feel jarring and are slower to render.

### 4.3 Scale

Transform scale. Implies growth or emphasis.

```css
/* Scale in (modal, popover) */
.pb-scale-in {
  animation: pb-scale-in var(--pb-motion-duration-md) var(--pb-motion-ease-out) both;
}
@keyframes pb-scale-in {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

/* Button press */
.pb-press {
  transition: transform var(--pb-motion-duration-xs) var(--pb-motion-ease-spring);
}
.pb-press:active {
  transform: scale(0.97);
}
```

**Use for:** Button press feedback, card hover lift, modal/dialog entrance, menu popover.

**Scale range:** 0.95--1.05 only. Anything outside this range looks cartoon-like.

### 4.4 Stagger

Sequential delays for groups of related items.

```css
.pb-stagger > * {
  animation: pb-slide-up var(--pb-motion-duration-md) var(--pb-motion-ease-out) both;
}
.pb-stagger > *:nth-child(1) { animation-delay: 0ms; }
.pb-stagger > *:nth-child(2) { animation-delay: 50ms; }
.pb-stagger > *:nth-child(3) { animation-delay: 100ms; }
.pb-stagger > *:nth-child(4) { animation-delay: 150ms; }
.pb-stagger > *:nth-child(5) { animation-delay: 200ms; }
/* Cap at 5 items (250ms total). Beyond 5, use batch stagger. */
```

**Use for:** Card grids, list items, dashboard widgets, quiz answer options.

**Rules:**
- 50ms delay between each item.
- Maximum 5 staggered items. For longer lists, animate the first 5, then show the rest instantly.
- Total stagger duration must not exceed the panel transition range (500ms).

### 4.5 Collapse / Expand

Height animation for progressive disclosure.

```css
.pb-collapse {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--pb-motion-duration-md) var(--pb-motion-ease-in-out);
}
.pb-collapse[open],
.pb-collapse.is-open {
  grid-template-rows: 1fr;
}
.pb-collapse > * {
  overflow: hidden;
}
```

**Use for:** Accordions, expandable details, FAQ sections, filter panels.

**Do not** animate `height` or `max-height` directly. Use `grid-template-rows` for GPU-composited, layout-stable collapse.

---

## 5. Component-Specific Motion

### 5.1 Button States

| State | Property | Value | Duration | Easing |
|---|---|---|---|---|
| Hover | `background-color`, `box-shadow` | Darken bg 8%, add `--pb-shadow-sm` | 150ms | ease-out |
| Press (`:active`) | `transform` | `scale(0.97)` | 100ms | spring |
| Release | `transform` | `scale(1)` | 150ms | ease-out |
| Focus-visible | `outline`, `outline-offset` | `2px solid currentColor`, `2px` | instant | -- |
| Disabled | `opacity` | `0.5` | instant | -- |
| Loading | spinner + label | Swap label to spinner, keep button width | 150ms fade | ease-out |

### 5.2 Card Interactions

| State | Property | Value | Duration | Easing |
|---|---|---|---|---|
| Hover | `transform`, `box-shadow` | `translateY(-2px)`, `--pb-shadow-md` | 200ms | ease-out |
| Hover exit | `transform`, `box-shadow` | `translateY(0)`, `--pb-shadow-sm` | 150ms | ease-in |
| Selection | `border-color`, `background-color` | `--pb-color-secondary`, lighten bg | 150ms | ease-out |
| Entrance (in grid) | stagger pattern | `pb-slide-up` + stagger | 300ms + 50ms/item | ease-out |

### 5.3 Modal / Dialog

1. **Backdrop:** Fade in at 300ms, `opacity: 0 -> 0.5`, ease-out.
2. **Content panel:** Scale + fade in at 300ms, `scale(0.95) -> scale(1)` + `opacity: 0 -> 1`, ease-out.
3. **Dismiss:** Reverse at 225ms (75% of entrance duration), ease-in.
4. **Scroll lock:** Applied instantly when modal opens. No animation.

### 5.4 Toast / Notification

1. **Entrance:** Slide in from right edge, `translateX(100%) -> translateX(0)`, 300ms, ease-out.
2. **Auto-dismiss:** After 5s, slide out to right + fade, 200ms, ease-in.
3. **Manual dismiss:** On close button click, same exit animation at 150ms.
4. **Stacking:** New toasts push existing ones down with 200ms slide.

Mobile: Toasts slide in from bottom instead of right.

### 5.5 Progress Indicators

| Type | Animation | Duration | Easing |
|---|---|---|---|
| Horizontal bar fill | `width: 0% -> n%` | 600ms | ease-out |
| Step completion | Scale pop on active step icon + color fill | 200ms | spring |
| Step connector line | `width: 0 -> 100%` between steps | 400ms | ease-in-out |
| Circular progress | `stroke-dashoffset` SVG animation | 800ms | ease-out |

### 5.6 Toggle / Switch

1. **Thumb slide:** `translateX(0) -> translateX(20px)`, 200ms, spring easing.
2. **Track color:** `background-color` transition, 200ms, ease-in-out.
3. **Colors:** Off = `--pb-color-neutral-300`, On = `--pb-color-secondary`.

### 5.7 Accordion / Disclosure

1. **Content:** Collapse/expand using `grid-template-rows` pattern (see 4.5), 300ms, ease-in-out.
2. **Chevron:** `rotate(0deg) -> rotate(180deg)`, 200ms, ease-in-out.
3. **Focus ring:** Instant, no animation.

### 5.8 Navigation Transitions

| Transition | Animation | Duration | Easing |
|---|---|---|---|
| Page-to-page | Fade out current (200ms) then fade in new (300ms) | 500ms total | ease-in, ease-out |
| Tab switch | Content crossfade + underline slide | 250ms | ease-in-out |
| Tab underline | `translateX` + `width` to match active tab | 250ms | ease-in-out |
| Breadcrumb update | Fade in new segment | 200ms | ease-out |
| Mobile nav open | Slide in from left + backdrop fade | 300ms | ease-out |
| Mobile nav close | Slide out to left + backdrop fade | 225ms | ease-in |

---

## 6. Loading States

### Skeleton screens (preferred)

Use skeleton placeholders that match the layout shape of the content they replace.

```css
.pb-skeleton {
  background: linear-gradient(
    90deg,
    var(--pb-color-neutral-100) 25%,
    var(--pb-color-neutral-50) 50%,
    var(--pb-color-neutral-100) 75%
  );
  background-size: 200% 100%;
  animation: pb-shimmer 1.5s linear infinite;
  border-radius: var(--pb-radius-sm);
}
@keyframes pb-shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}
```

**Rules:**
- Skeleton shapes must match the content dimensions they replace (text lines, avatars, cards).
- Use `border-radius` on skeletons to match the final component radius.
- Shimmer direction: always left-to-right (LTR) or right-to-left (RTL) matching the document direction.

### Progressive content reveal

When content loads incrementally, fade each section in as it arrives. Do not wait for all content to load.

```css
.pb-content-reveal {
  animation: pb-fade-in 300ms var(--pb-motion-ease-out) both;
}
```

### When spinners are acceptable

- Inline actions (button loading state, form submission).
- Small, self-contained operations (saving a preference, submitting a quiz answer).
- Never as full-page loading. Always use skeletons for page-level loading.

---

## 7. Data Visualization Motion

### Chart entrance

| Chart type | Animation | Duration | Easing |
|---|---|---|---|
| Bar chart | Bars grow from baseline (scaleY) | 600ms staggered (50ms/bar) | ease-out |
| Line chart | Stroke draws left-to-right (`stroke-dashoffset`) | 800ms | ease-out |
| Pie / donut | Segments draw clockwise (`stroke-dashoffset`) | 800ms staggered | ease-out |
| Stat counter | Number counts up from 0 | 600ms | ease-out |

### Hover / focus on data points

- Hovered bar/segment: `scale(1.02)` + tooltip fade-in at 150ms.
- Hovered data point (line chart): radius grows 4px -> 6px, tooltip appears at 150ms.
- Focus indicator: 2px outline ring, instant (no animation on focus rings).

### Data state transitions

When data changes (filter applied, time range changed):
1. Current data fades out at 200ms, ease-in.
2. New data animates in using the chart entrance pattern.
3. For real-time updates (live odds, counters), use `transition` on the value property -- no full re-entrance animation.

---

## 8. Tier 2 Motion Adjustments

Tier 2 content (crisis support, self-exclusion, helpline pages) requires a calmer motion language. Energetic, bouncy, or celebratory motion is inappropriate in these contexts.

| Aspect | Tier 1 (default) | Tier 2 (crisis/support) |
|---|---|---|
| Easing | Spring for interactive feedback | Ease-in-out only. No spring. |
| Stagger | 50ms between items, up to 5 items | 30ms between items, max 3 items |
| Entrance pattern | Slide + fade | Fade only. No slides. |
| Duration | Standard timings | Increase micro-interactions to 200ms, panels to 400ms |
| Scale effects | `scale(0.97)` on press | No scale effects. Use opacity/color only. |
| Celebratory motion | Confetti, bounces, pops allowed (Tier 1 quizzes) | Absolutely none. |
| Data visualization | Full entrance animations | Simple fade-in. No stagger on charts. |
| Auto-dismiss toasts | 5s default | 8s minimum. User must have time to read. |

### Tier 2 CSS override

```css
.pb-tier-2 {
  --pb-motion-ease-spring: var(--pb-motion-ease-in-out);
  --pb-motion-duration-xs: 200ms;
  --pb-motion-duration-sm: 250ms;
  --pb-motion-duration-md: 400ms;
  --pb-motion-stagger-delay: 30ms;
  --pb-motion-stagger-max: 3;
}
.pb-tier-2 .pb-slide-up,
.pb-tier-2 .pb-slide-left {
  animation-name: pb-fade-in; /* Replace slides with fades */
}
```

---

## 9. Accessibility

### `prefers-reduced-motion`

This is not optional. All {{PROGRAM_NAME}} implementations must include this.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**What this does:**
- All transforms (slide, scale) become instant. Content appears in its final position.
- Opacity fades complete in under 1ms -- content is visible immediately.
- Scroll snapping still works, but smooth scrolling is disabled.
- No content is hidden or unreachable.

### Additional accessibility rules

| Rule | Requirement |
|---|---|
| No content behind animation | All content must be readable/interactive if animations never run. |
| No autoplay | No looping animations start without user action. Skeleton shimmers are the only exception (they are loading indicators, not decorative). |
| Pause controls | Any looping animation (carousel, rotating tips) must have a visible pause/stop button. |
| No flashing | No element flashes more than 3 times per second. This is a WCAG 2.3.1 hard requirement. |
| Focus management | Focus is never moved by animation alone. Focus moves only in response to user action. |
| Motion sickness triggers | No parallax scrolling, no zooming transitions, no rotation animations. |
| Timing | Animated content that auto-advances (carousels, toasts) must allow enough reading time. Minimum: 5s for Tier 1, 8s for Tier 2. |

---

## 10. Do / Don't

### Entrances

| Do | Don't |
|---|---|
| Fade in a modal at 300ms with scale(0.95 -> 1) | Bounce a modal in with overshoot and wobble |
| Stagger 4 quiz cards at 50ms intervals | Animate 20 list items sequentially over 2 seconds |
| Slide a mobile drawer from the left edge | Fly a drawer in from off-screen with a 500ms spring |

### Interactive feedback

| Do | Don't |
|---|---|
| Press a button with scale(0.97) for 100ms | Shake, glow, or pulse a button on click |
| Lift a card 2px on hover with a subtle shadow | Flip a card on hover to reveal a back side |
| Transition toggle color over 200ms | Animate a toggle with a trailing particle effect |

### Loading

| Do | Don't |
|---|---|
| Show skeleton placeholders matching content shape | Show a full-screen spinner for 3 seconds |
| Fade content in progressively as it loads | Wait for all content, then animate everything at once |
| Use an inline spinner for a button submission | Replace the entire page with a loading screen |

### Tier 2 content

| Do | Don't |
|---|---|
| Fade in the self-exclusion form gently | Slide panels energetically on a crisis page |
| Keep helpline numbers visible immediately (no animation) | Delay helpline display behind a stagger animation |
| Use calm, consistent transitions | Use spring easing or celebratory animations in support contexts |

### Data

| Do | Don't |
|---|---|
| Animate bar chart bars from baseline on first load | Re-animate every bar when a tooltip is dismissed |
| Count up a stat number over 600ms | Spin or rotate a number on change |
| Transition smoothly between data states on filter change | Flash the entire chart area white and re-render |

---

## 11. CSS Custom Properties

All motion values are defined as CSS custom properties. Operators can override these to match their own motion preferences.

```css
:root {
  /* ─── Motion: Durations ──────────────── */
  --pb-motion-duration-xs: 100ms;   /* Button press, instant feedback */
  --pb-motion-duration-sm: 150ms;   /* Hover states, micro-interactions */
  --pb-motion-duration-md: 300ms;   /* Modals, panels, drawers */
  --pb-motion-duration-lg: 500ms;   /* Page transitions, complex reveals */
  --pb-motion-duration-xl: 800ms;   /* Data visualizations, chart entrances */

  /* ─── Motion: Easing ─────────────────── */
  --pb-motion-ease-out: cubic-bezier(0.0, 0.0, 0.2, 1.0);      /* Entrances */
  --pb-motion-ease-in: cubic-bezier(0.4, 0.0, 1.0, 1.0);       /* Exits */
  --pb-motion-ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1.0);   /* Symmetric */
  --pb-motion-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1.0); /* Interactive */
  --pb-motion-ease-linear: linear;                                /* Progress */

  /* ─── Motion: Stagger ────────────────── */
  --pb-motion-stagger-delay: 50ms;  /* Delay between staggered items */
  --pb-motion-stagger-max: 5;       /* Max items to stagger (rest appear instantly) */

  /* ─── Motion: Transforms ─────────────── */
  --pb-motion-slide-distance: 16px; /* Default translateY for slide-up */
  --pb-motion-slide-distance-x: 24px; /* Default translateX for slide-left */
  --pb-motion-scale-press: 0.97;    /* Button press scale */
  --pb-motion-scale-enter: 0.95;    /* Modal/popover entrance scale */
  --pb-motion-scale-hover: 1.02;    /* Card/data point hover scale */

  /* ─── Motion: Skeleton ───────────────── */
  --pb-motion-shimmer-duration: 1.5s;
  --pb-motion-shimmer-color-a: var(--pb-color-neutral-100);
  --pb-motion-shimmer-color-b: var(--pb-color-neutral-50);
}

/* ─── Reduced motion ───────────────────── */
@media (prefers-reduced-motion: reduce) {
  :root {
    --pb-motion-duration-xs: 0.01ms;
    --pb-motion-duration-sm: 0.01ms;
    --pb-motion-duration-md: 0.01ms;
    --pb-motion-duration-lg: 0.01ms;
    --pb-motion-duration-xl: 0.01ms;
    --pb-motion-shimmer-duration: 0.01ms;
    --pb-motion-slide-distance: 0px;
    --pb-motion-slide-distance-x: 0px;
    --pb-motion-scale-press: 1;
    --pb-motion-scale-enter: 1;
    --pb-motion-scale-hover: 1;
  }
}
```

### Operator override example

An operator that prefers snappier interactions and no spring easing:

```css
:root {
  --pb-motion-duration-sm: 100ms;
  --pb-motion-duration-md: 200ms;
  --pb-motion-ease-spring: var(--pb-motion-ease-in-out); /* Disable spring */
  --pb-motion-scale-press: 0.98;
}
```

---

*Motion tokens should be added to `design-tokens.css` alongside color and typography tokens. All values above use the `--pb-motion-` prefix to avoid collision with existing tokens.*
