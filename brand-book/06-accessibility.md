# Chapter 6: Accessibility

Responsible gambling content must be accessible to everyone — including people with disabilities, people reading in a second language, people under cognitive stress, and people using assistive technologies. Accessibility isn't an add-on; it's a core requirement.

**Why this matters especially for RG**: A player in distress who can't find the self-exclusion button because of poor contrast, a screen reader that can't parse the helpline number, or a deposit limit form that doesn't work with keyboard navigation — these are system failures with real consequences.

---

## Standards and compliance

### Baseline: WCAG 2.1 AA

All {{PROGRAM_NAME}} digital content must meet **WCAG 2.1 Level AA** as a minimum. Level AAA conformance is recommended where feasible, particularly for:
- Contrast ratios on critical content (helpline numbers, CTAs, warnings)
- Text resizing up to 200% without loss of functionality
- Extended audio descriptions for video content

### Legal frameworks by jurisdiction

| Jurisdiction | Applicable law | Requirement |
|---|---|---|
| United States | ADA, Section 508, state laws | Web accessibility for public accommodations |
| European Union | European Accessibility Act (EAA), EN 301 549 | Digital products and services accessible by June 2025 |
| United Kingdom | Equality Act 2010, PSBAR | Reasonable adjustments for disabled users |
| Australia | Disability Discrimination Act 1992 | Web accessibility for services provided to the public |
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
| Critical RG content (helpline numbers, warnings) | **7:1** | WCAG 2.1 AAA (recommended) |

**Testing tools**:
- WebAIM Contrast Checker
- Colour Contrast Analyser (CCA)
- Chrome DevTools Accessibility panel
- Figma Stark plugin

See `visual-identity/color/accessibility-matrix.md` for the full contrast ratio matrix of the {{PROGRAM_NAME}} palette.

### Color independence

Never use color as the only way to convey information. Always pair color with another indicator:

| Instead of... | Use... |
|---|---|
| Red text for warnings | Red text + warning icon + "Warning:" label |
| Green for success | Green + checkmark icon + confirmation text |
| Color-coded chart | Color + patterns + labels |
| Red/green for over/under limit | Color + text ("$50 remaining" / "Limit reached") |

### Text and typography

- **Minimum body text size**: 16px (1rem). No exceptions for body content.
- **Minimum touch target**: 44x44px for all interactive elements (WCAG 2.5.5)
- **Line height**: Minimum 1.5x for body text
- **Paragraph spacing**: At least 2x the font size
- **Letter spacing**: Not less than 0.12em for body text
- **Word spacing**: Not less than 0.16em
- **Text resizing**: Content must remain functional when text is resized to 200%
- **No text in images**: All text must be real text (HTML/CSS), not embedded in images

---

## Cognitive accessibility

This is especially critical for RG content. Players experiencing gambling harm may be under significant cognitive stress — fatigue, anxiety, financial distress, sleep deprivation. Design for the hardest moment, not the easiest.

### Plain language

- Write at **Grade 6-8** reading level (Flesch-Kincaid)
- Use common, everyday words
- One idea per sentence
- Avoid double negatives
- Avoid jargon, acronyms, and technical terms (or define them immediately)
- See [Chapter 4: Voice and Tone](04-voice-and-tone.md) for the complete writing guidelines

### Clear navigation

- **Consistent layout**: RG tools and information should always be in the same location within the interface
- **Predictable behavior**: Interactive elements should behave consistently (a "Set limit" button should always lead to the limit-setting flow)
- **Visible current state**: Players should always be able to see their current limits, session time, and account status
- **Breadcrumbs / back navigation**: Players should always know where they are and how to go back
- **No time limits on decisions**: Never auto-dismiss an important RG message. Give players as much time as they need to read and act.

### Reduce cognitive load

- **Front-load key information**: The most important content (helpline numbers, CTA) should be visible without scrolling
- **Progressive disclosure**: Show essential information first; let users expand for details
- **Minimize form fields**: Collect only what's necessary (e.g., a deposit limit only needs amount and period)
- **Provide defaults**: Pre-fill common values where appropriate (e.g., suggest popular deposit limit amounts)
- **Confirm destructive actions**: Any irreversible action (self-exclusion, limit removal) should require a confirmation step

---

## Motor accessibility

### Keyboard navigation

All {{PROGRAM_NAME}} interactive elements must be fully operable with keyboard alone:

- **Tab order**: Logical, follows visual layout (left-to-right, top-to-bottom)
- **Focus indicators**: Visible focus ring on all interactive elements (minimum 2px, high contrast)
- **Skip links**: Provide "Skip to main content" and "Skip to RG tools" links
- **No keyboard traps**: Users must be able to navigate away from any element using standard keys
- **Shortcut keys**: Avoid single-key shortcuts that could be triggered accidentally

### Touch targets

- **Minimum size**: 44x44px for all interactive elements
- **Spacing**: Minimum 8px between adjacent touch targets
- **Critical CTAs** (helpline, self-exclusion): Consider 48x48px minimum

### Alternative input

- All functionality available via mouse, keyboard, touch, and voice input
- Drag-and-drop interactions must have keyboard alternatives
- Custom gestures must have button alternatives

---

## Screen reader compatibility

### Semantic HTML

- Use proper heading hierarchy (h1 > h2 > h3 — never skip levels)
- Use `<nav>`, `<main>`, `<aside>`, `<footer>` landmarks
- Use `<button>` for actions, `<a>` for navigation
- Use `<table>` with proper `<th>` headers for data tables (like limit summaries)

### ARIA labels

| Element | ARIA requirement |
|---|---|
| Icon-only buttons | `aria-label` describing the action ("Set deposit limit") |
| Status messages | `role="status"` or `aria-live="polite"` for limit confirmations |
| Alert messages | `role="alert"` or `aria-live="assertive"` for limit-reached warnings |
| Modal dialogs | `role="dialog"`, `aria-labelledby`, `aria-describedby` |
| Progress indicators | `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |
| Form validation errors | `aria-invalid="true"`, `aria-describedby` pointing to error message |
| Toggle states | `aria-pressed` or `aria-checked` for on/off controls (e.g., session reminders) |

### Alternative text

- All images must have descriptive `alt` text
- Decorative images: `alt=""`
- Icons that convey meaning: `alt` describing the meaning, not the image (e.g., `alt="Warning"` not `alt="Yellow triangle"`)
- Charts and graphs: Provide a text summary of the data
- Helpline numbers: Ensure they are rendered as text, not images, so screen readers can parse them

---

## Multi-language support

### Language requirements

{{PROGRAM_NAME}} content should be translatable into the primary languages of each operating jurisdiction. At minimum, plan for:

| Jurisdiction | Primary languages |
|---|---|
| United States | English, Spanish |
| United Kingdom | English, Welsh (in Wales) |
| Australia | English; consider Chinese (Mandarin, Cantonese), Vietnamese, Arabic for targeted outreach |
| Canada | English, French (required in Quebec and for federal services) |
| European Union | Varies by member state — typically the national language(s) plus English |

### Translation guidelines

- **Translate meaning, not words**: Idiomatic expressions rarely translate directly. Adapt the message for the target culture.
- **Maintain voice principles**: Translations must preserve person-first, non-judgmental, empowering tone. Brief translators on the voice guidelines.
- **Test with native speakers**: Machine translation is acceptable for drafts but must be reviewed by native speakers — especially for sensitive content like self-exclusion flows and helpline messaging.
- **Account for text expansion**: Translated text is often 20-40% longer than English. Design layouts with expansion space.

### Technical requirements

- **Character set support**: Use UTF-8 encoding everywhere
- **RTL support**: For Arabic, Hebrew, and other RTL languages — mirror layouts, not just text
- **Font support**: Use Noto Sans (specified in `_brand.yml`) as a fallback for non-Latin scripts. It supports 1,000+ languages.
- **Number formatting**: Adapt decimal separators, thousands separators, and currency symbols per locale
- **Date formatting**: Use locale-appropriate date formats (DD/MM/YYYY vs. MM/DD/YYYY)

---

## Accessibility testing checklist

Use this checklist when reviewing any {{PROGRAM_NAME}} content or interface:

### Visual
- [ ] All text meets minimum contrast ratio (4.5:1 normal, 3:1 large)
- [ ] Critical content (helpline, warnings) meets 7:1 contrast
- [ ] Color is never the sole indicator of meaning
- [ ] Text resizes to 200% without loss of content or functionality
- [ ] No text is embedded in images

### Cognitive
- [ ] Content is written at Grade 6-8 reading level
- [ ] Key information is visible without scrolling
- [ ] Navigation is consistent and predictable
- [ ] Important messages are not auto-dismissed
- [ ] Forms have clear labels, defaults, and error messages

### Motor
- [ ] All elements are keyboard-accessible
- [ ] Focus indicators are visible on all interactive elements
- [ ] Touch targets are at least 44x44px
- [ ] No functionality requires complex gestures

### Screen reader
- [ ] Heading hierarchy is logical (h1 > h2 > h3)
- [ ] All images have appropriate alt text
- [ ] Interactive elements have descriptive labels
- [ ] Dynamic content updates are announced
- [ ] Helpline numbers are rendered as text, not images

### Multi-language
- [ ] Content is available in jurisdiction-required languages
- [ ] Translations preserve voice and tone principles
- [ ] Layouts accommodate text expansion
- [ ] RTL languages display correctly
- [ ] Number and date formats match locale

---

*Previous: [Chapter 5 — Messaging Framework](05-messaging-framework.md) | Next: [Chapter 7 — Application Guidelines](07-application-guidelines.md)*
