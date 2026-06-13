/* data/palettes.js — Curated, ready-to-use color palettes for people who
   don't want to pick colors from scratch. Every palette is hand-checked to
   pass WCAG 2.1 AA contrast: white text on the primary (>=4.5:1), and both
   secondary and accent on the primary (>=3:1). See /tmp palette check or
   lib in-repo validation if you add more.

   Roles match the three brand slots:
     primary   — dark card / page background
     secondary — highlights, badges, interactive elements
     accent    — buttons, big stat numbers, calls to action */

export const PALETTES = [
  {
    id: 'playbook',
    name: 'Playbook',
    blurb: 'The original — confident navy, fresh teal, energetic orange.',
    primary: '#1B2838', secondary: '#00D4AA', accent: '#FF6B35',
  },
  {
    id: 'midnight-ocean',
    name: 'Midnight Ocean',
    blurb: 'Deep blue with a bright teal and warm gold. Calm and trustworthy.',
    primary: '#0F2A43', secondary: '#2DD4BF', accent: '#FBBF24',
  },
  {
    id: 'evergreen',
    name: 'Evergreen',
    blurb: 'Forest green with mint and amber. Natural and grounded.',
    primary: '#14342B', secondary: '#34D399', accent: '#F59E0B',
  },
  {
    id: 'slate-sky',
    name: 'Slate & Sky',
    blurb: 'Cool slate with sky blue and orange. Clean and modern.',
    primary: '#1E293B', secondary: '#38BDF8', accent: '#FB923C',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    blurb: 'Plum with coral and soft yellow. Warm and friendly.',
    primary: '#2B1B2E', secondary: '#FB7185', accent: '#FCD34D',
  },
  {
    id: 'royal-violet',
    name: 'Royal Violet',
    blurb: 'Rich purple with lavender and pink. Premium and bold.',
    primary: '#241544', secondary: '#A78BFA', accent: '#F472B6',
  },
  {
    id: 'crimson',
    name: 'Crimson',
    blurb: 'Dark maroon with rose and gold. Striking and high-energy.',
    primary: '#2A1215', secondary: '#FB7185', accent: '#FBBF24',
  },
  {
    id: 'graphite',
    name: 'Graphite',
    blurb: 'Neutral charcoal with blue and gold. Understated and versatile.',
    primary: '#1A1D24', secondary: '#60A5FA', accent: '#FBBF24',
  },
];
