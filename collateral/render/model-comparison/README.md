# Playbook model concept comparison

Three model agents each create three original concepts from the same Playbook brief, brand references, and templates. Open [the comparison gallery](index.html) to compare models by topic, hide model names, inspect the full artwork, and read captions, alt text, and source notes.

For a single image to show or share, use the [nine-concept comparison sheet](contact-sheet.png).

## Participants and assignment

| Model | Reasoning | Concepts |
|---|---|---|
| GPT-6 Astra (`gpt-6-astra`) | High | Sports betting, gambling myth, agent’s choice |
| GPT-5.6 Sol (`gpt-5.6-sol`) | High | Sports betting, gambling myth, agent’s choice |
| GPT-5.6 Terra (`gpt-5.6-terra`) | High | Sports betting, gambling myth, agent’s choice |

Each produces English Tier 1 social cards at 1080 × 1350 with editable HTML/CSS and PNG output. The third concept is open choice within entertainment literacy. Attribution appears in the review gallery rather than on the player-facing artwork.

## Common conditions

- Fresh agent contexts; the parent conversation and previously discussed creative ideas were not copied into the agents’ context.
- The [same brief](BRIEF.md), 19 common reference/template files, and identical dispatch text except for the assigned output directory.
- Shared brand palette, bundled fonts, program/support/age placeholders, support-footer requirement, 42px text floor, and renderer.
- Each agent chooses its own topics, hooks, copy, and visual treatment and is instructed not to read the other agents’ outputs.
- Native HTML/CSS/SVG artwork; no external research or raster image generation is included in the assignment.
- Agents render, inspect, and revise their own work. The coordinator integrates the outputs and checks rendering and factual support without rewriting the creative direction.

The gallery shows revised outputs rather than untouched first drafts. [Review notes](REVIEW-NOTES.md) record the coordinator’s factual, brand-token, and contrast feedback; each correction was made by the agent that authored the concept.

[inputs.json](inputs.json) records SHA-256 hashes for the common brief and reference packet, along with the baseline commit. [run.json](run.json) records model IDs and settings. These records document the setup; they are not telemetry proving which passages an agent attended to.

This is one creative sample from each model. No numeric ranking, performance benchmark, cost comparison, or general claim about model quality is implied. The gallery’s “Hide model names” option changes presentation labels, not file names or underlying metadata.

## Rebuild

From the repository root:

```bash
node collateral/render/model-comparison/render.mjs astra
node collateral/render/model-comparison/render.mjs sol
node collateral/render/model-comparison/render.mjs terra
node collateral/render/model-comparison/build-gallery.mjs
node collateral/render/model-comparison/export-sheet.mjs
```

The renderer writes each model’s PNGs and `validation.json` in that model’s folder. It checks the exact canvas, minimum text size, artboard/footers, brand placeholder resolution, local resource loading, and manifest taxonomy/source fields. Visual inspection and review of the cited source passages complement those checks; the renderer does not prove factual correctness or fully audit accessibility.

The gallery build verifies that the common inputs still match their recorded hashes and that all nine renders passed. It writes [data.js](data.js), so the gallery works directly from the filesystem without a server or remote API, and [contact-sheet.html](contact-sheet.html), which the export command captures as one PNG. If the shared brand or source files change later, create a new comparison run instead of silently updating this run’s input hashes.

Each participant folder contains the same file set: `sports.html`, `myth.html`, `wildcard.html`, corresponding PNGs, `manifest.json`, `validation.json`, and optional model-authored styles or vector assets. Captions and source notes are maintained in the manifest.

The PNGs use this repository’s configured default program name, support number, and age statement. They are concept previews; jurisdiction-specific releases use the normal Playbook adaptation workflow.

## Verified results

All nine final renders passed the common renderer at 1080 × 1350 with a 42px minimum text size, valid manifest fields, loaded local resources, resolved brand placeholders, and no detected geometry issues. Each source section exists in the common packet. The coordinator visually inspected the final comparison and checked the arithmetic and qualifications.

Computed text-color checks on the final solid backgrounds found minimum contrast of 5.05:1 for Astra, 5.05:1 for Sol, and 4.84:1 for Terra. Decorative, accessibility-hidden graphics were excluded from the text check. The gallery passed checks for all nine images, topic filtering, hidden model labels, full-size detail views, Escape dismissal, a 390px mobile viewport, and browser errors. The final common-input hash check passed.
