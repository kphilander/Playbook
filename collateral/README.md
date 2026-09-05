# Collateral

Templates and specifications for every Playbook touchpoint — digital, print, environmental, video/audio, customer service, and interactive content. Each subfolder contains markdown specs that define copy, layout, and design direction. The `render/` folder contains the HTML/PNG build pipeline.

[Open the September creative review](creative-review/index.html) for revised previews, concept comparisons and the reasoning behind the choices.

[Compare four style alternatives](style-alternatives/index.html): editorial luxury, contemporary hospitality, digital precision and playful confidence. Each includes three finished specimens.

[Open the template studio](studio/index.html) to reskin the eight latest concept families, switch SVG illustrations and AI photos, edit copy, and export reusable HTML, CSS and recipes. The gallery and studio use the same [template system](template-system/README.md).

## Folders

| Folder | Contents |
|--------|----------|
| [digital/](digital/) | Email templates, mobile app touchpoints, social media toolkit, website content hub |
| [print/](print/) | Brochure, rack card, table tent, helpline card specs |
| [environmental/](environmental/) | Venue signage guide and digital display specs |
| [video-audio/](video-audio/) | TV spots, radio scripts, digital pre-roll, hold messages |
| [customer-service/](customer-service/) | Conversation scripts and staff FAQ for frontline teams |
| [interactive/](interactive/) | Quiz framework for Game IQ and myth-busting quizzes |
| [render/](render/) | **93 template families / 320 render entries** + responsive and production export profiles |

## Which size to use

Use the [production size matrix](production-size-matrix.md) before exporting. It separates fixed artboards (social, print, signage, displays) from responsive delivery surfaces (email and product UI), and lists the correct US, ISO, mobile, and platform variants.

## How it connects

- **Copy and messaging** come from [`messaging/`](../messaging/) — core messages, CTAs, taglines, and tone examples.
- **Visual specs** (colors, fonts, icons) reference [`visual-identity/`](../visual-identity/) and the design tokens in `visual-identity/design-tokens.css`.
- **Jurisdiction-specific adaptations** (mandatory statements, helpline numbers) are in [`jurisdictions/`](../jurisdictions/).
- **`{{PLACEHOLDER}}` tokens** throughout templates resolve to values from [`_brand.yml`](../_brand.yml) at build time.

[Design preference comparisons](design-preferences/index.html) offer 38 focused before / after pairs across nine design areas, with saved choices, notes and an exportable preference brief.
