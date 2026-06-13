/* data/palettes.js — Curated, ready-to-use color palettes for people who
   don't want to pick colors from scratch. Each palette pairs a deep primary
   with a secondary and accent that both read as crisp text on it: every
   secondary and accent clears WCAG 2.1 AA at >=4.6:1 against the primary
   (templates use the accent for stat numbers and labels on dark cards, so
   text-grade contrast — not just 3:1 UI contrast — is what matters), and
   white headings clear AA on every primary. Hues are hand-picked for
   harmony; secondary/accent lightness is tuned to the contrast target.

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
    id: 'harbor',
    name: 'Harbor',
    blurb: 'Deep ocean blue, soft aqua, and warm amber. Calm and assured.',
    primary: '#142939', secondary: '#2AA8B3', accent: '#D7870E',
  },
  {
    id: 'pine',
    name: 'Pine',
    blurb: 'Forest green with mint and honey gold. Natural and grounded.',
    primary: '#153329', secondary: '#34B48D', accent: '#CA9810',
  },
  {
    id: 'indigo',
    name: 'Indigo Dusk',
    blurb: 'Inky indigo with a cool sky blue and warm coral. Modern and clean.',
    primary: '#191938', secondary: '#3295DB', accent: '#ED624C',
  },
  {
    id: 'orchid',
    name: 'Orchid',
    blurb: 'Deep aubergine with orchid and soft gold. Elegant and premium.',
    primary: '#311B37', secondary: '#CE72D6', accent: '#C08C13',
  },
  {
    id: 'slate',
    name: 'Slate',
    blurb: 'Cool blue-grey with cyan and a warm clay accent. Understated.',
    primary: '#1D2635', secondary: '#2FA3C7', accent: '#E8792E',
  },
  {
    id: 'garnet',
    name: 'Garnet',
    blurb: 'Dark wine red with rose and champagne gold. Rich and striking.',
    primary: '#30121A', secondary: '#E4647B', accent: '#B28812',
  },
  {
    id: 'graphite',
    name: 'Graphite',
    blurb: 'Neutral charcoal with steel blue and gold. Versatile and sharp.',
    primary: '#1D2025', secondary: '#5795DA', accent: '#B48C12',
  },
];
