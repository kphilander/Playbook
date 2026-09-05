# Playbook model concept showcase — revised pilot

Five model agents each created three concepts from the same Playbook brief, brand references, and templates. Open [the gallery](index.html) to select up to three models, filter by topic, hide model labels, inspect the artwork, and read captions, alt text, and source notes. It opens with the added GPT-5.3 Codex Spark and GPT-5.5 samples selected.

For images to show or share, use the [Astra / Sol / Terra sheet](contact-sheet.png) and [GPT-5.3 Codex Spark / GPT-5.5 sheet](contact-sheet-additions.png). Both identify the work as an unscored pilot.

**This is not a controlled competition.** The models received different corrective feedback, and Spark reported that image inspection was unavailable. The [proposed fair-test protocol](competition/PROTOCOL.md) separates model differences from the effect of shared inputs, with fresh submissions, a common concept renderer, a credible brief-only control, and blind judging. Its [rubric](competition/RUBRIC.json) is a draft; no study has been run or scored.

A [shared Google photography command](competition/PHOTOGRAPHY.md) is available for a new run. It uses one configured Gemini image model and preserves requests, outputs, failures, and attempt counts. Its connection-check image is not a competition entry, and the existing fifteen concepts retain their original photography-free brief.

## Participants and assignment

| Model | Reasoning | Concepts |
|---|---|---|
| GPT-6 Astra (`gpt-6-astra`) | High | Sports betting, gambling myth, agent’s choice |
| GPT-5.6 Sol (`gpt-5.6-sol`) | High | Sports betting, gambling myth, agent’s choice |
| GPT-5.6 Terra (`gpt-5.6-terra`) | High | Sports betting, gambling myth, agent’s choice |
| GPT-5.3 Codex Spark (`gpt-5.3-codex-spark`) | High | Sports betting, gambling myth, agent’s choice |
| GPT-5.5 (`gpt-5.5`) | High | Sports betting, gambling myth, agent’s choice |

GPT-5.4 was unavailable: the subagent interface rejected its model ID, and a read-only Codex CLI 0.146.1 probe returned that it was unsupported with the current ChatGPT account. This is an availability exclusion, not a performance result. No substitute represents GPT-5.4. Spark is the specific 5.3 variant tested; these results do not represent other 5.3 variants.

Model IDs and reasoning are requested dispatch overrides, not independent backend snapshot or compute telemetry. The original three and added two ran in separate batches. Identical “high” requests do not establish equal compute, cost, or capabilities.

Each produces English Tier 1 social cards at 1080 × 1350 with editable HTML/CSS and PNG output. The third concept is open choice within entertainment literacy. Attribution appears in the review gallery rather than on the player-facing artwork.

## Common conditions

- Fresh agent contexts; the parent conversation and previously discussed creative ideas were not copied into the agents’ context.
- The [same brief](BRIEF.md), 19 common reference/template files, and identical dispatch text except for the assigned output directory.
- Shared brand palette, bundled fonts, program/support/age placeholders, support-footer requirement, 42px text floor, and renderer.
- Each agent chooses its own topics, hooks, copy, and visual treatment and is instructed not to read the other agents’ outputs.
- Native HTML/CSS/SVG artwork; no external research or raster image generation is included in the assignment.
- Agents render and revise their own work. All were instructed to inspect images, but Spark reported that its runtime did not support image inputs. The coordinator inspected all outputs and requested corrections from their originating agents.

The gallery shows revised outputs rather than untouched first drafts. [Review notes](REVIEW-NOTES.md) record the coordinator’s factual, brand-token, and contrast feedback; each correction was made by the agent that authored the concept.

The two added agents’ first reported completions were preserved [before coordinator QA](pilot-submissions/index.json), including their defects. These snapshots follow the agents’ own revisions; they are not raw first generations. Equivalent snapshots were not saved for the earlier three models, so the archives cannot support a fair first-submission ranking.

[inputs.json](inputs.json) records SHA-256 hashes for the common brief and reference packet, along with the baseline commit. [run.json](run.json) records model IDs and settings. These records document the setup; they are not telemetry proving which passages an agent attended to.

This is one submission set of three concepts from each model. No numeric ranking, performance benchmark, cost comparison, or general claim about model quality is implied. “Hide model names” changes presentation labels, not file names or underlying metadata. Already-revealed identities make this unsuitable for blind judging.

## Rebuild

From the repository root:

```bash
node collateral/render/model-comparison/render.mjs astra
node collateral/render/model-comparison/render.mjs sol
node collateral/render/model-comparison/render.mjs terra
node collateral/render/model-comparison/render.mjs gpt-53-spark
node collateral/render/model-comparison/render.mjs gpt-55
node collateral/render/model-comparison/build-gallery.mjs
node collateral/render/model-comparison/export-sheet.mjs
```

The renderer writes each model’s PNGs and `validation.json` in that model’s folder. It checks the exact canvas, minimum text size, artboard/footers, brand placeholder resolution, local resource loading, and manifest taxonomy/source fields. Visual inspection and review of the cited source passages complement those checks; the renderer does not prove factual correctness or fully audit accessibility.

The gallery build verifies that the common inputs still match their recorded hashes and that all fifteen renders passed. It writes [data.js](data.js), so the gallery works directly from the filesystem without a server or remote API, and [contact-sheet.html](contact-sheet.html), which the export command captures as two PNGs. The second sheet retains the same card scale as the first. If the shared brand or source files change later, create a new run instead of silently updating this run’s input hashes.

Each participant folder contains the same file set: `sports.html`, `myth.html`, `wildcard.html`, corresponding PNGs, `manifest.json`, `validation.json`, and optional model-authored styles or vector assets. Captions and source notes are maintained in the manifest.

The PNGs use this repository’s configured default program name, support number, and age statement. They are concept previews; jurisdiction-specific releases use the normal Playbook adaptation workflow.

## Production verification

The renderer checks the 1080 × 1350 canvas, 42px minimum text, manifest fields, local resources, resolved placeholders, and artboard/footer geometry. It does not detect every inner-container clipping problem: the coordinator found clipped Spark diagram text despite passing renderer reports and returned it for correction. Source-heading checks, arithmetic review, contrast checks, and inspection of the PNGs complement the renderer.

Earlier solid-background text checks found minimum contrast of 5.05:1 for Astra, 5.05:1 for Sol, and 4.84:1 for Terra. These are production checks, not concept-quality scores. Decorative, accessibility-hidden graphics were excluded; gradient backgrounds require separate checking. No human judging results have been collected.

All fifteen final renders passed the common renderer, and all cited source headings exist. The added Spark text passed solid-background checks at a minimum 5.13:1. GPT-5.5's solid-background checks passed; a separate bound using the sports headline's position within its gradient gave at least 5.67:1 for that green text. The six added masters passed a supplementary check of text rectangles against inner clipping containers and were visually inspected by the coordinator. Gallery checks covered all fifteen PNGs, selecting one to three models, category filters, hidden presentation labels, detail dialogs, Escape dismissal, 390px mobile width, and browser errors. Final input hashes still match the original packet.
