# Collateral

Templates and specifications for every Playbook touchpoint — digital, print, environmental, video/audio, customer service, and interactive content. Each subfolder contains markdown specs that define copy, layout, and design direction. The `render/` folder contains the HTML/PNG build pipeline.

## Folders

| Folder | Contents |
|--------|----------|
| [digital/](digital/) | Email templates, mobile app touchpoints, social media toolkit, website content hub |
| [print/](print/) | Brochure, rack card, table tent, helpline card specs |
| [environmental/](environmental/) | Venue signage guide and digital display specs |
| [video-audio/](video-audio/) | TV spots, radio scripts, digital pre-roll, hold messages |
| [customer-service/](customer-service/) | Conversation scripts and staff FAQ for frontline teams |
| [interactive/](interactive/) | Quiz framework for Game IQ and myth-busting quizzes |
| [render/](render/) | **36 HTML/PNG template pairs** + build scripts (Puppeteer, logo/icon generators, PPTX deck builder) |

## How it connects

- **Copy and messaging** come from [`messaging/`](../messaging/) — core messages, CTAs, taglines, and tone examples.
- **Visual specs** (colors, fonts, icons) reference [`visual-identity/`](../visual-identity/) and the design tokens in `visual-identity/design-tokens.css`.
- **Jurisdiction-specific adaptations** (mandatory statements, helpline numbers) are in [`jurisdictions/`](../jurisdictions/).
- **`{{PLACEHOLDER}}` tokens** throughout templates resolve to values from [`_brand.yml`](../_brand.yml) at build time.
