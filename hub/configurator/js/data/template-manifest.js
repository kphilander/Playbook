/* template-manifest.js — Collateral templates shown in the preview gallery.

   `file` is relative to collateral/render/. `w`/`h` are the template's
   native pixel dimensions (the gallery renders at native size inside an
   iframe and CSS-scales it down). Templates with fluid height (emails)
   set `fluid: true` and use `h` as a sensible viewport.

   This is a curated starter set — any template in collateral/render/
   that links brand-inject.css and has no interactive JS can be added
   with one entry here. */

export const TEMPLATE_CATEGORIES = [
  'Social cards',
  'Stories',
  'Posters',
  'Print',
  'Signage',
  'Digital product',
  'Email',
  'Game guides',
];

export const TEMPLATE_MANIFEST = [
  // ── Social cards (1080×1080) ──
  { file: 'card-1a-hot-streak.html',    label: 'Myth: Hot Streak',        w: 1080, h: 1080, category: 'Social cards' },
  { file: 'card-2a-house-edge.html',    label: 'House Edge Explainer',    w: 1080, h: 1080, category: 'Social cards' },
  { file: 'card-13a-its-due.html',      label: 'Myth: It’s Due',          w: 1080, h: 1080, category: 'Social cards' },
  { file: 'card-16a-online-rigged.html',label: 'Myth: Online Is Rigged',  w: 1080, h: 1080, category: 'Social cards' },
  { file: 'card-tier2-10f.html',        label: 'Tier 2 Support Card',     w: 1080, h: 1080, category: 'Social cards' },

  // ── Stories (1080×1920) ──
  { file: 'story-3a-hot-streak.html',            label: 'Story: Hot Streak',  w: 1080, h: 1920, category: 'Stories' },
  { file: 'story-14b-every-game-roulette.html',  label: 'Story: Roulette',    w: 1080, h: 1920, category: 'Stories' },

  // ── Posters (1800×2400) ──
  { file: 'poster-4a-know-your-game.html', label: 'Poster: Know Your Game', w: 1800, h: 2400, category: 'Posters' },
  { file: 'poster-4b-no-fine-print.html',  label: 'Poster: No Fine Print',  w: 1800, h: 2400, category: 'Posters' },
  { file: 'poster-tier2-10g.html',         label: 'Poster: Tier 2 Support', w: 1800, h: 2400, category: 'Posters' },

  // ── Print ──
  { file: 'rack-card-5a.html',     label: 'Rack Card',      w: 800, h: 1800, category: 'Print' },
  { file: 'table-tent-5b.html',    label: 'Table Tent',     w: 800, h: 1200, category: 'Print' },
  { file: 'helpline-card-5c.html', label: 'Helpline Card',  w: 700, h: 400,  category: 'Print' },

  // ── Venue signage ──
  { file: 'sign-entrance-9a.html',      label: 'Entrance Sign',      w: 900,  h: 1200, category: 'Signage' },
  { file: 'sign-atm-9b.html',           label: 'ATM Sign',           w: 700,  h: 1000, category: 'Signage' },
  { file: 'display-landscape-6a.html',  label: 'Digital Display',    w: 1920, h: 1080, category: 'Signage' },

  // ── Digital product ──
  { file: 'mobile-onboarding-12a.html', label: 'Mobile Onboarding',  w: 420, h: 812, category: 'Digital product' },
  { file: 'web-popup-12h.html',         label: 'Web Pop-up',         w: 480, h: 560, category: 'Digital product' },
  { file: 'app-banner-12d.html',        label: 'App Banner',         w: 728, h: 90,  category: 'Digital product' },

  // ── Email (fluid height) ──
  { file: 'email-welcome-7a.html', label: 'Welcome Email', w: 640, h: 1200, category: 'Email', fluid: true },
  { file: 'email-support-10h.html', label: 'Support Email', w: 640, h: 1200, category: 'Email', fluid: true },

  // ── Game guides (1080×1080) ──
  { file: 'htp-card-blackjack.html', label: 'How to Play: Blackjack', w: 1080, h: 1080, category: 'Game guides' },
  { file: 'htp-card-roulette.html',  label: 'How to Play: Roulette',  w: 1080, h: 1080, category: 'Game guides' },
];
