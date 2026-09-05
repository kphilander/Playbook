# Playbook style alternatives

[Open the comparison](index.html). Switch among odds, lifestyle and support; select two directions for a larger comparison; open any specimen at full size.

These are four complete art-direction studies, each with two 1080 × 1350 social cards and a 420 × 740 support panel. The current production brand configuration remains the baseline. Each alternative scopes its own palette, display face and composition through CSS variables, while retaining the configurable Playbook wordmark and contact tokens.

| Direction | Character | Best fit | Design choices |
|---|---|---|---|
| Atelier | Editorial luxury | Destination casinos, boutique hospitality, premium memberships | Warm paper and ink, a restrained brass accent, Fraunces display type, fine rules, an unboxed ledger and an architectural photo frame. |
| Social Club | Contemporary hospitality | Resort casinos and approachable premium platforms | Deep forest, cream and chartreuse, Manrope, a soft split ledger, large human photography and generous corners. |
| Circuit | Digital precision | Premium adult game platforms and live studios | Midnight violet, lime and lavender, Space Grotesk, monospace figures, angular panels and a measured grid. |
| Arcade | Playful confidence | Expressive adult game brands and social campaigns | Cobalt, milk and coral, Archivo Black headlines, bold outlines, solid shadows and a restrained tilt. |

**Social Club is the strongest bridge** when one identity needs to serve both premium casinos and playful digital brands. Atelier is more restrained; Circuit and Arcade offer distinct digital expressions. This is an art-direction judgment, not a measured audience preference.

## What stays consistent

The approach follows the main [brand personality](../../brand-book/02-brand-personality.md), [voice and tone](../../brand-book/04-voice-and-tone.md) and [photography guide](../../visual-identity/photography/photography.md). Tier 1 earns attention with clear facts and wit. Tier 2 offers calm, direct support. Player agency is central in every treatment.

The odds example is the same in all four directions: one winning cash bet returns $50, including the original $20 stake and $30 profit. The lifestyle message and photograph are also shared. This keeps the comparison focused on visual expression. The photograph is the existing Google-generated casino conversation image from the [September creative refresh](../creative-review/photography/README.md); no new image generation was needed for these studies.

Support panels demonstrate how each direction becomes quieter: light surfaces, clear contact access, no tilted panels, glow or playful decorations. The support button is a static visual specimen, not an integrated phone or account feature.

## Typography and portability

Four display families are bundled locally with their SIL Open Font Licenses. Inter and Source Code Pro come from the existing repository. No font request is made during rendering or gallery use.

- [Fraunces source](https://github.com/google/fonts/tree/main/ofl/fraunces) · [license](fonts/fraunces-OFL.txt)
- [Manrope source](https://github.com/google/fonts/tree/main/ofl/manrope) · [license](fonts/manrope-OFL.txt)
- [Space Grotesk source](https://github.com/google/fonts/tree/main/ofl/spacegrotesk) · [license](fonts/spacegrotesk-OFL.txt)
- [Archivo Black source](https://github.com/google/fonts/tree/main/ofl/archivoblack) · [license](fonts/archivoblack-OFL.txt)

[Directions and palettes](directions.json) define the exploration. [Specimen CSS](specimens.css) scopes the visual variants; generated design-token files and `_brand.yml` are not edited. These initial specimens use English; a chosen direction should be adapted and fitted to the other language sets before extending it across the production library.

## Rebuild and verify

```sh
npm run build:style-alternatives
# With the local dev server running:
node collateral/style-alternatives/check-browser.mjs
```

`build.mjs` produces the twelve HTML masters, manifest and gallery data from a shared content brief. `render.mjs` resolves brand tokens and creates the PNGs using local Chromium. The renderer checks dimensions, font loading, local resources, text clipping, reading-size floors, block overlap and solid-surface text contrast. All visible text is held to a 4.5:1 contrast target. Social masters have a 42px floor; the support panel has a 16px floor. The Circuit background includes a restrained gradient; gradient and photographic regions also receive visual inspection.

[Validation results](validation.json) include the measured color pairs and final PNG hashes. [Browser checks](browser-validation.json) cover applications, comparison selection, full-size previews, keyboard dismissal, URL state and a narrow viewport. Preview contact details resolve from the configured brand. Operator-specific services and destinations belong in the final deployment configuration.
