# Collateral Production Size Matrix

Use this as the source of truth for choosing an artboard and output profile. HTML files in `render/` are layout masters. Preview PNGs are review artifacts; only named production profiles are intended for final delivery.

## No Fine Print acceptance loop

`No fine print` applies to every visible line, including age, support, legal,
source, and QR copy. Supporting information may be subordinate, but it must be
readable in the format's real viewing context. If all required copy cannot meet
the appropriate minimum, reduce or sequence the content; do not shrink it.

Review each template family in this order:

1. **Context** — name the viewing distance, device, dwell time, and likely user state.
2. **Message** — keep only the information the person needs in that moment; move depth to the next surface.
3. **Hierarchy** — assign every line a role: primary, supporting, action, support, or legal.
4. **Minimums** — render at final physical or screen size and verify type size and contrast for every role, not only the headline.
5. **Stress test** — check the narrowest viewport, longest locale, and realistic distance simulation.
6. **Repeat** — reduce content or recompose until the template passes without a fine-print tier.

Use these message-load budgets before layout begins. Support and required legal
copy stay readable and do not count as permission to add another marketing idea.

| Format | Default content budget |
|---|---|
| Social feed or square | One claim, one correction or proof, one action at most |
| Story/Reel frame | One question or claim, one visual answer, one action |
| Distance poster or public display | One claim, one memorable proof, one action; no paragraph dependency |
| Banner, push, or in-product interruption | One short message and one unambiguous action |
| Held print or email | One topic per panel/section; sequence supporting detail instead of compressing it |
| Tier 2 support surface | The immediate support/exit path first; retain only explanation needed to act safely |

The minimums below are delivery-size floors, not design targets:

| Viewing mode | Applies to | Smallest visible supporting/legal copy |
|---|---|---:|
| Phone feed/story artwork | `card-*`, `htp-*`, `story-*` | 42px in a 1080px master (about 14px when displayed 360px wide) |
| Responsive email/product UI | `email-*` and responsive UI components | 16 CSS px, including visible metadata |
| Public digital display | `display-*` | 32px at the native 1920×1080 or 1080×1920 master |
| 18×24 / A2 distance poster | `poster-*`, `sign-entrance-*` | 24pt; 48pt headline |
| A3 / 11×17 public floor sign | `sign-floor-*` | 20pt; 48pt headline |
| Held print | rack card, brochure, wallet card | 10pt minimum for every visible line; support actions should be larger |
| Seated/table print | table tent | 12pt |
| Private/internal close-read sign | restroom and staff signage | 14pt |

## Digital and social

| Template family | Primary use | How it is read | Deliverable | Profile | Layout priority |
|---|---|---|---:|---|---|
| `card-*`, `htp-card-*`, `htp-odds-*` | Instagram/Facebook feed; saveable reference | Phone, quick first scan followed by optional close read | 1080 x 1350 (4:5) | `social-feed` | Primary master. One idea, dominant headline, then proof/detail; 64px minimum inset |
| Same social-card families | Carousel compatibility, square-only channels, share card | Phone, short scan | 1080 x 1080 | `social-square` | Secondary export. Recompose and reduce density; never crop the 4:5 master |
| `story-*` | Stories, Reels, vertical placements | Full-screen phone with platform chrome | 1080 x 1920 (9:16) | `story` | Keep essential copy below the top 200px and above the bottom 400px; CTA above the bottom UI zone |
| `display-landscape-*` | Entrance, lobby, above-bar screen | 3m distance, roughly 10-second dwell | 1920 x 1080 | `display` | One claim, oversized number/headline, 32px minimum body, 240px QR; do not crop to ultrawide |
| `display-portrait-*` | Column, elevator, narrow hallway display | 2–3m distance, walking pace | 1080 x 1920 | `display` | Recompose vertically; do not reuse a cropped landscape screen |
| `app-banner-12d` | Desktop leaderboard | Peripheral glance while using a page/app | 728 x 90 | `banner-728x90` | Brand, one short message, one CTA; support details move to the destination |
| `app-banner-12d` | Mobile banner | Peripheral glance | 320 x 50 | `banner-320x50` | Compact message + CTA only |
| `app-banner-12d` | Large mobile banner | Peripheral glance | 320 x 100 | `banner-320x100` | Compact message with a roomier CTA |
| `app-banner-12d` | Compact mobile banner | Peripheral glance | 300 x 50 | `banner-300x50` | Compact message + CTA only |
| `push-notification-12e` | Push notification | Lock-screen/native notification scan | Native OS component | Preview only | Copy and hierarchy reference only; the OS owns dimensions, truncation, icon placement, and accessibility |

Do not stretch or crop between 4:5 and square. Render the named profile so type, spacing, and footer placement recompose.

## Responsive delivery surfaces

| Template family | Viewing context | Delivery rule | QA profiles | Layout priority |
|---|---|---|---|---|
| `email-*` | Phone first, desktop second; deliberate close read | Fluid width, `max-width: 600px`, natural height | `email-320`, `email-375`, `email-600` | 16px readable body, 44px CTA, single-column mobile flow; never ship a fixed-height image |
| `mobile-*`, `deposit-*`, `withdrawal-*` | Hand-held product flow | Responsive UI; allow vertical scroll | `ui-360`, `ui-390`, `ui-412`, `ui-430` | 44px touch targets; primary action in lower 40% thumb zone; host navigation remains visible |
| `self-exclusion-*`, `cooldown-*`, `support-page-*` | Intentional Tier 2 task, often under stress | Responsive page/component, natural height | `ui-360`, `ui-390`, `ui-412`, `ui-430` | Contact or exit path first; plain hierarchy, no fixed height, no decorative competition |
| `session-summary-*`, `limit-reached-*`, `in-play-*`, `betslip-*`, `live-odds-*`, `web-popup-*` | In-context interruption or decision point | Responsive component/modal; host app owns viewport | `ui-360`, `ui-390`, `ui-412`, `ui-430` | Short copy, unambiguous action order, preserve game/account context, do not render as a standalone screen |

Use `ui-360`, `ui-390`, `ui-412`, and `ui-430` for visual regression images. Those PNGs are QA references, not implementation assets.

## Print and venue signage

All production print profiles render trim art at approximately 300dpi and add 0.125in / 3mm bleed outside the trim. Pixel dimensions below are trim dimensions; the exported PNG is larger because it includes bleed.

| Template | Use case | How it is read | US trim | ISO trim | Layout priority |
|---|---|---|---:|---:|---|
| `poster-*` | Lobby/entrance awareness poster | 2–3m glance, then optional approach | 18 x 24in / 5400 x 7200px | A2 / 4961 x 7016px | One dominant headline, no paragraph dependency, QR at least 2in when used |
| `rack-card-5a` | Rack/host-desk take-away | Held at 12–18in; sequential close read | 4 x 9in / 1200 x 2700px | 102 x 229mm | Front creates interest; back carries detail. 10pt minimum for every line, 0.75in QR |
| `table-tent-5b` | Table/bar point-of-play | Seated at 18–36in with long dwell | 4 x 12in flat / 1200 x 3600px | 102 x 305mm flat | Each 4 x 6in face must work alone; roughly 49pt primary stat, 0.75in QR, fold-safe center |
| `helpline-card-5c` | Discreet handout/wallet card | Arm's-length close read; may be saved and used under stress | 3.5 x 2in / 1050 x 600px | 89 x 51mm | Number first, then call/text/chat; 10pt minimum for every visible line, 0.6in QR; remove explanatory copy before reducing type |
| `brochure-trifold-8a`, `brochure-cover-8b` | Player-services/info-center take-away | Held and deliberately read panel by panel | Letter landscape / 3300 x 2550px | A4 landscape / 3508 x 2480px | 10pt body minimum, fold-safe panel padding, cover must work while folded, 0.75in QR; support/legal must remain one intact block inside one panel |
| `sign-entrance-9a` | Entrance/exit wall sign | 3m glance while walking | 18 x 24in / 5400 x 7200px | A2 / 4961 x 7016px | Headline + one promise + CTA; legal/support stays subordinate but readable |
| `sign-atm-9b` | ATM/cashier decision reminder | Arm's-length pause during a financial task | 8.5 x 11in / 2550 x 3300px | A4 / 2480 x 3508px | Budget action first, short explanation, direct settings QR; avoid public-poster density rules |
| `sign-floor-9c` | Gaming-floor poster/column sign | 3m walking glance near point of play | 11 x 17in / 3300 x 5100px | A3 / 3508 x 4961px | Top-down scan path, 48pt-equivalent headline, three comparison facts maximum, 2in QR |
| `sign-restroom-9d` | Stall card | Private arm's-length read with long dwell | 5.5 x 8.5in / 1650 x 2550px | A5 / 1748 x 2480px | Contact number dominates; quiet branding and direct channels, no operator competition |
| `sign-restroom-9d` | Mirror cling | Brief private glance at arm's length | 7 x 5in / 2100 x 1500px | Custom | Use `restroom-mirror-print`; shorter copy and landscape composition, never stretch the stall card |
| `sign-staff-9e` | Break-room/internal training poster | Close read with repeat exposure | 11 x 17in / 3300 x 5100px | A3 / 3508 x 4961px | Numbered top-down scan; evenly paced steps; helpline and internal-use status remain persistent |

`print-us` and `print-iso` create 300dpi-ready pixel geometry with bleed. The PNG pipeline is RGB; a print vendor or prepress step must assign the final print color profile, convert to CMYK, add crop marks if requested, and confirm the printer's fold allowance.

## Commands

```bash
npm run build:collateral:en
npm run build:collateral:social
npm run build:collateral:print-us
npm run build:collateral:print-iso
npm run check:collateral

# Other named outputs
node collateral/render/render-cards.mjs --profile=story --locale=en
node collateral/render/render-cards.mjs --profile=banner-320x50 --locale=en
node collateral/render/render-cards.mjs --profile=email-375 --locale=en
node collateral/render/render-cards.mjs --profile=ui-390 --locale=en
node collateral/render/render-cards.mjs --list-profiles
```

Generated named-profile files go to `collateral/render/production/<profile>/` and are intentionally ignored by Git.
