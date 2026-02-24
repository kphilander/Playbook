# Chapter 6: Accessibility

Accessibility isn't a compliance burden — it's how you make sure every player can use your content and tools. Bigger audience = more engagement = better outcomes for everyone. If a player can't read your content, find your tools, or navigate your features, you've failed before the voice and tone even matter.

**The standard**: WCAG 2.1 Level AA as a practical baseline. Not aspirational — required.

---

## Standards and compliance

### Baseline: WCAG 2.1 AA

All {{PROGRAM_NAME}} digital content must meet **WCAG 2.1 Level AA** as a minimum. Level AAA conformance is recommended for:
- Contrast ratios on critical content (helpline numbers, CTAs, support links)
- Text resizing up to 200% without loss of functionality
- Extended audio descriptions for video content

### Legal frameworks by jurisdiction

| Jurisdiction | Applicable law | Requirement |
|---|---|---|
| United States | ADA, Section 508, state laws | Web accessibility for public accommodations |
| European Union | European Accessibility Act (EAA), EN 301 549 | Digital products and services |
| United Kingdom | Equality Act 2010 | Reasonable adjustments for disabled users |
| Australia | Disability Discrimination Act 1992 | Web accessibility for services |
| Canada | Accessible Canada Act, AODA (Ontario) | Digital content accessibility standards |

---

## Visual accessibility

### Color contrast

All text and interactive elements must meet these minimum contrast ratios:

| Element type | Minimum ratio | Standard |
|---|---|---|
| Normal text (under 18px / under 14px bold) | **4.5:1** | WCAG 2.1 AA |
| Large text (18px+ / 14px+ bold) | **3:1** | WCAG 2.1 AA |
| UI components (buttons, form fields, icons) | **3:1** | WCAG 2.1 AA |
| Critical content (helpline numbers, support links) | **7:1** | WCAG 2.1 AAA (recommended) |

**Testing tools**:
- WebAIM Contrast Checker
- Colour Contrast Analyser (CCA)
- Chrome DevTools Accessibility panel
- Figma Stark plugin

See `visual-identity/color/accessibility-matrix.md` for the full contrast ratio matrix.

### Color independence

Never use color as the only way to convey information:

| Instead of... | Use... |
|---|---|
| Red text for warnings | Red text + warning icon + "Warning:" label |
| Green for success | Green + checkmark icon + confirmation text |
| Color-coded chart | Color + patterns + labels |
| Red/green for over/under limit | Color + text ("$50 remaining" / "Limit reached") |

### Text and typography

- **Minimum body text size**: 16px (1rem). No exceptions.
- **Minimum touch target**: 44x44px for all interactive elements (WCAG 2.5.5)
- **Line height**: Minimum 1.5x for body text
- **Paragraph spacing**: At least 2x the font size
- **Text resizing**: Content must remain functional when text is resized to 200%
- **No text in images**: All text must be real text (HTML/CSS), not embedded in images

---

## Cognitive accessibility

Players come to Playbook content in all kinds of states — relaxed and curious, stressed and looking for help, tired after a long session. Design for all of them.

### Plain language

- Write at **Grade 6–8** reading level (Flesch-Kincaid)
- Use common, everyday words
- One idea per sentence
- Avoid double negatives
- Avoid jargon and acronyms (or define them immediately)
- See [Chapter 4: Voice and Tone](04-voice-and-tone.md) for complete writing guidelines

### Clear navigation

- **Consistent layout**: Tools and information should always be in the same place
- **Predictable behavior**: Interactive elements should behave consistently
- **Visible current state**: Players should always see their current limits and settings
- **No time limits on decisions**: Never auto-dismiss important messages

### Reduce cognitive load

- **Front-load key information**: The most important content visible without scrolling
- **Progressive disclosure**: Show essentials first; let users expand for details
- **Minimize form fields**: Collect only what's necessary
- **Provide defaults**: Pre-fill common values where appropriate
- **Confirm irreversible actions**: Self-exclusion and limit changes should require confirmation

---

## Motor accessibility

### Keyboard navigation

All interactive elements must be fully operable with keyboard alone:

- **Tab order**: Logical, follows visual layout
- **Focus indicators**: Visible focus ring on all interactive elements (minimum 2px, high contrast)
- **Skip links**: Provide "Skip to main content" links
- **No keyboard traps**: Users must be able to navigate away from any element

### Touch targets

- **Minimum size**: 44x44px for all interactive elements
- **Spacing**: Minimum 8px between adjacent touch targets
- **Critical CTAs** (helpline, self-exclusion): Consider 48x48px minimum

### Mobile-specific accessibility

Mobile is where 60%+ of players gamble. Mobile-specific accessibility requirements go beyond desktop patterns.

| Requirement | Standard | Why it matters for Playbook |
|---|---|---|
| Touch targets | 44x44px minimum (48px recommended for critical CTAs) | Helpline buttons, self-exclusion, limit setting |
| Thumb zone | Primary actions in bottom 2/3 of screen | One-handed play means CTAs must be reachable |
| Orientation | Support both portrait and landscape | Some players lock orientation |
| Zoom | Don't disable pinch-to-zoom (`user-scalable=yes`) | Players with low vision need to zoom |
| Text scaling | Support system font size settings (up to 200%) | Respect OS-level accessibility preferences |
| Haptic feedback | Use system haptics for confirmations (limit set, quiz answer) | Provides non-visual feedback |
| Screen reader gestures | Don't override swipe gestures (VoiceOver uses them) | Custom swipe handlers break screen reader navigation |

Test on real devices. Emulators don't accurately simulate touch targets, haptic feedback, or screen reader gesture conflicts.

---

## Screen reader compatibility

### Semantic HTML

- Use proper heading hierarchy (h1 > h2 > h3 — never skip levels)
- Use `<nav>`, `<main>`, `<aside>`, `<footer>` landmarks
- Use `<button>` for actions, `<a>` for navigation
- Use `<table>` with proper `<th>` headers for data tables

### ARIA labels

| Element | ARIA requirement |
|---|---|
| Icon-only buttons | `aria-label` describing the action |
| Status messages | `role="status"` or `aria-live="polite"` |
| Alert messages | `role="alert"` or `aria-live="assertive"` |
| Modal dialogs | `role="dialog"`, `aria-labelledby` |
| Form validation errors | `aria-invalid="true"`, `aria-describedby` |

### ARIA landmark patterns

Use semantic HTML landmarks as the foundation. ARIA landmarks are supplementary — they fill gaps where native HTML doesn't provide a role.

| Pattern | HTML | ARIA | When to use |
|---|---|---|---|
| Main content | `<main>` | `role="main"` (implicit) | One per page. Contains the primary content. |
| Navigation | `<nav aria-label="Playbook tools">` | — | Label each nav distinctly when multiple exist. |
| Helpline banner | `<aside aria-label="Support">` | `role="complementary"` (implicit) | Persistent helpline strip. |
| Quiz question | `<fieldset>` + `<legend>` | `role="group"` (implicit) | Each quiz question as a grouped field set. |
| Modal dialog | `<dialog>` | `role="dialog"`, `aria-modal="true"` | Limit reached, session reminder, confirmation. |
| Live notification | `<div role="status">` | `aria-live="polite"` | Toast messages, timer updates. |
| Alert | `<div role="alert">` | `aria-live="assertive"` | Limit reached, self-exclusion confirmation. |
| Progress | `<progress>` or `role="progressbar"` | `aria-valuenow`, `aria-valuemin`, `aria-valuemax` | Quiz progress, deposit limit usage bar. |

Always test with at least two screen readers (VoiceOver + NVDA recommended). Different screen readers interpret ARIA differently — test, don't assume.

### Alternative text

- All images must have descriptive `alt` text
- Decorative images: `alt=""`
- Icons that convey meaning: `alt` describing the meaning, not the image
- Charts and graphs: Provide a text summary of the data
- Helpline numbers: Always rendered as text, never as images

---

## Multi-language support

### Language requirements

{{PROGRAM_NAME}} content should be translatable into the primary languages of each operating jurisdiction:

| Jurisdiction | Primary languages |
|---|---|
| United States | English, Spanish |
| United Kingdom | English, Welsh (in Wales) |
| Australia | English; consider Chinese, Vietnamese, Arabic for outreach |
| Canada | English, French (required in Quebec) |
| European Union | Varies by member state |

### Translation guidelines

- **Translate meaning, not words**: Adapt for the target culture
- **Maintain voice principles**: Translations must preserve the Playbook tone
- **Test with native speakers**: Machine translation is a draft, not a final product
- **Account for text expansion**: Translated text is often 20–40% longer than English

### Technical requirements

- **Character set**: UTF-8 encoding everywhere
- **RTL support**: Mirror layouts for Arabic, Hebrew, and other RTL languages
- **Font support**: Use Noto Sans as fallback for non-Latin scripts
- **Number formatting**: Adapt decimal separators, thousands separators, and currency symbols per locale

### Critical accessibility findings

The `visual-identity/color/accessibility-matrix.md` audit identified five critical failures in the default semantic color mappings. These must be addressed before deployment.

| Finding | Issue | Impact | Fix |
|---|---|---|---|
| Link text on light backgrounds | Secondary (#00D4AA) on white = 1.91:1 | Links invisible to low-vision users | Use Primary Light (#2A3F56) for links on light backgrounds |
| Link hover on light backgrounds | Secondary Dark (#00A888) on Neutral 50 = 2.78:1 | Hover state still fails AA | Use Primary (#1B2838) for hover |
| Primary CTA button | White on Accent (#FF6B35) = 2.84:1 | CTA button text unreadable | Use Primary (#1B2838) text on Accent background |
| Secondary CTA button | White on Secondary (#00D4AA) = 1.91:1 | Button text unreadable | Use Primary text on Secondary background |
| Form borders | Neutral 300 (#A8A8C0) on White = 2.33:1 | Form inputs invisible (SC 1.4.11) | Use Neutral 500 (#6B6B8A) for form borders |

These fixes are incorporated in the recommended `_brand.yml` changes in the accessibility matrix. Operators who customize colors must run their own contrast audit. See `visual-identity/color/accessibility-matrix.md` for the full matrix and all approved color pairings.

---

## Accessibility checklist

Use this when reviewing any {{PROGRAM_NAME}} content:

### Visual
- [ ] All text meets minimum contrast ratio (4.5:1 normal, 3:1 large)
- [ ] Color is never the sole indicator of meaning
- [ ] Text resizes to 200% without loss of functionality
- [ ] No text is embedded in images

### Cognitive
- [ ] Content is written at Grade 6–8 reading level
- [ ] Key information is visible without scrolling
- [ ] Navigation is consistent and predictable
- [ ] Important messages are not auto-dismissed

### Motor
- [ ] All elements are keyboard-accessible
- [ ] Focus indicators are visible
- [ ] Touch targets are at least 44x44px

### Screen reader
- [ ] Heading hierarchy is logical
- [ ] All images have appropriate alt text
- [ ] Interactive elements have descriptive labels
- [ ] Helpline numbers are rendered as text

### Multi-language
- [ ] Content is available in jurisdiction-required languages
- [ ] Translations preserve voice and tone principles
- [ ] Layouts accommodate text expansion
- [ ] RTL languages display correctly

---

*Previous: [Chapter 5 — Messaging Framework](05-messaging-framework.md) | Next: [Chapter 7 — Application Guidelines](07-application-guidelines.md)*
