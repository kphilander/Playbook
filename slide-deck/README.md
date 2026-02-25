# Slide Deck

Interactive brand overview presentation built with React 19, Vite 7, and Tailwind CSS 4. A 22-slide deck that walks through the entire Playbook brand system — from the engagement gap through visual identity, messaging, collateral, and governance.

## Quick start

```bash
npm install
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Build for production
npm run preview    # Preview production build
```

## Navigation

- **Arrow keys** or **click** the left/right edges to navigate
- **Space** / **PageDown** — next slide
- **PageUp** — previous slide
- **Home** / **End** — jump to first or last slide

## Slides

| # | Slide | Section |
|---|-------|---------|
| 1 | Title | Cover |
| 2 | The Engagement Gap | The Problem |
| 3 | The Solution | The Approach |
| 4 | Two-Tier System | Brand Architecture |
| 5 | Brand Pillars | Brand Foundation |
| 6 | Brand Personality | Brand Foundation |
| 7 | Voice & Tone | Brand Foundation |
| 8 | Logo System | Visual Identity |
| 9 | Color Palette | Visual Identity |
| 10 | Typography | Visual Identity |
| 11 | Icon System | Visual Identity |
| 12 | Photography & Illustration | Visual Identity |
| 13 | Messaging Framework | Messaging |
| 14 | CTA Library | Messaging |
| 15 | Digital Applications | Collateral |
| 16 | Print & Environmental | Collateral |
| 17 | Print Samples | Collateral |
| 18 | Tier 2 Collateral | Support & Crisis |
| 19 | Campaign Library | Campaigns |
| 20 | Accessibility | Standards |
| 21 | Governance & Evolution | Operations |
| 22 | Get Started | Call to Action |

## How it works

- Colors and fonts are auto-generated from [`_brand.yml`](../_brand.yml) into `src/generated/brand-theme.css` by running `node lib/generate-tailwind-theme.mjs` from the repo root.
- The deck uses a fixed 1280x720 design resolution that scales to fit any viewport.
- Slide content data lives in `src/data/slideContent.js`.
- Each slide is a self-contained React component in `src/slides/`.

## Deployment

Configured for Netlify via `netlify.toml`. Set the `VITE_BASE` environment variable to change the base path.
