# Playbook — shared photography concept round

[Open the gallery](index.html). This round contains 15 original concepts from five model agents: one sports betting concept, one gambling myth, and one additional entertainment-literacy concept per model. Every photo was generated through the user's selected Google Gemini API. The earlier [revised pilot](../index.html) remains separate and unchanged.

## What is being compared

The concept models write the hook, visible explanation, takeaway, caption, source notes, and photography prompt. A common template supplies the layout, typography, colors, wordmark, and protected support/age footer. Google `gemini-3-pro-image` produces the photographs from the models' original prompts. This compares copy and photographic art direction within a fixed layout, not the models' ability to create custom layouts or generate their own pixels.

| Coded entry | Requested concept model | Requested reasoning |
|---|---|---|
| Entry 12 | GPT-6 Astra (`gpt-6-astra`) | high |
| Entry 27 | GPT-5.6 Sol (`gpt-5.6-sol`) | high |
| Entry 43 | GPT-5.6 Terra (`gpt-5.6-terra`) | high |
| Entry 58 | GPT-5.3 Codex Spark (`gpt-5.3-codex-spark`) | high |
| Entry 76 | GPT-5.5 (`gpt-5.5`) | high |

These are accepted model dispatch requests, not independent backend snapshot telemetry. GPT-5.4 was previously rejected by the subagent interface and a CLI availability probe; it is unavailable, excluded, and not scored. The five accepted models ran in overlapping batches because the coordinator has three concurrent agent slots.

## Shared conditions

- Fresh contexts and the same [dispatch](DISPATCH.txt), except assigned output folder. Agents were told not to read previous results or other participants' work.
- The same [brief](BRIEF.md), 23 required brand/template references, and copy limits. [Input hashes](inputs.json) were recorded before dispatch and are checked before freezing, producing, rendering, and building the gallery.
- One completed submission per model, with self-directed text checks allowed. No participant image previews, rendering, other-model calls, or coordinator creative feedback were permitted. This equalizes image-preview access at zero, including for Spark. These are instructions and participant attestations, not a sandbox-enforced restriction on every available tool.
- First completed manifests were copied byte-for-byte into `first-submissions/` with timestamps and SHA-256 hashes before generation. The coordinator used those copies for all production. No rejected concept was replaced and no participant copy was edited.
- Each original photo prompt was sent verbatim to Google by the coordinator: 3:4, 2K, no references, one attempt per concept. Every attempt and returned final candidate was saved. The first returned final image is used without selection, editing, or regeneration. This centrally executed interface keeps credential and sandbox differences out of agent authoring.
- All cards use the same 1080 × 1350 layout and minimum 42px text. No per-model font shrinking, cropping decisions, text fitting, or creative corrections were applied.
- No equal token or wall-clock budget was enforced. Requested reasoning levels do not establish equal compute. Photo latency/usage is recorded separately and is not concept-model cost or speed.

## Shared production correction

The frozen template inherited 72px of header padding from the existing social layout system. The first three Spark renders exposed a wordmark/headline overlap. This was a coordinator template defect, not a participant failure. The [original renders and record](integration-checks/record.json) are preserved. A separate [production CSS correction](production-fix.css) resets that padding to zero for every entry; the frozen template remains untouched. No image requests were repeated.

The validator was also corrected to allow normal font ascent/descent outside CSS line boxes while checking text regions against one another. Three concurrent browser renders timed out on network-idle detection; the final renderer waits for the load event and then explicitly checks font and image decoding. It reuses the same saved photos. [Production implementation hashes](production-lock.json) and per-entry validation records identify the final shared implementation. This common integration correction means the round is not an untouched end-to-end pipeline experiment, although the model-authored concepts and prompts are their first submissions.

## Reviewing these examples fairly

The gallery starts with coded names and a fixed presentation order chosen before submissions. Names can be revealed. This is a viewing aid, not a secured blind review: mappings remain in this README and the data files. Topic categories match, but models chose their own subtopics. Entry ordering is not a ranking.

Coordinator observations flag factual, wording, and photo issues separately from the frozen submissions. They are not independent scores, and their absence does not establish publication readiness. The [proposed rubric](../competition/RUBRIC.json) remains a draft; no judges, scores, composite winner, or statistical conclusion have been invented. A fair scored study should lock the rubric, matched cases, attempt and resource rules, and independent judging before another run.

These examples may motivate testing a shared RG content system. They do not establish that shared inputs improve outcomes: that requires comparing each model's results with a credible brief-only condition. They also do not prove the Bitter Lesson. Common-template production, shared photography, model-specific prompting, and Google's output variability are distinct contributors to the final cards. Because this round changes the template and feedback process as well as adding photography, differences from the earlier pilot cannot be attributed to photography alone.

## Files and reproduction

- `submissions/`: agent-authored working manifests; `first-submissions/`: preserved first completions used for production.
- `requests/` and `photography-output/`: exact prompts, settings, API result records, usage metadata, and original generated photographs. Credentials are loaded privately from Keychain by [the shared adapter](../../../../lib/google-photography.mjs).
- `rendered/`: editable card HTML, 1080 × 1350 PNGs, text/geometry/photo checks, and submission/photo/PNG hashes.
- `review-observations.json`: separate coordinator observations and descriptions of the actual photos.
- `index.html`, `data.js`, `gallery.js`, `gallery.css`: local comparison UI.
- `contact-sheet.html` and `contact-sheet-*.png`: coded category sheets for viewing all five entries at once.

From the repository root, `node collateral/render/model-comparison/photo-round-02/render.mjs ENTRY_ID` rerenders a frozen submission from saved photos without new API calls. Run `node collateral/render/model-comparison/photo-round-02/build-gallery.mjs` to rebuild the gallery. `produce.mjs ENTRY_ID` uses saved attempt records when present; it does not retry them. Do not change run IDs or participant IDs to obtain replacement images in this round.

See [verification.json](verification.json) for final counts, hashes, checks, and production results. No merge or production deployment is part of this work.
