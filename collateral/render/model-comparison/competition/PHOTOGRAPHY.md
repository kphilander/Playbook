# Shared Google photography access

The local shared command is [`lib/google-photography.mjs`](../../../../lib/google-photography.mjs). It uses Google's Gemini API directly; the concept model writes the image prompt and Google generates the raster asset. This is a text-to-image interface, without search, reference images, or editing. It does not use the built-in OpenAI image generator.

## Access

The user saved a dedicated credential in macOS Keychain under service `playbook-gemini`, account equal to the Mac username. The command captures the credential in process memory. It never places it in URLs, shell arguments, prompts, HTML, or output files. For other environments, `GOOGLE_API_KEY` or `GEMINI_API_KEY` can be supplied through the process environment; `GOOGLE_API_KEY` takes precedence. Never paste credentials into an agent request.

Check authentication and the image-model catalog without generating an image:

```bash
node lib/google-photography.mjs check
```

A successful catalog request verifies authentication, not available billing quota or successful image generation. Live generation may need permission to access Keychain and the network in a sandboxed agent runtime. The coordinator can execute identical requests centrally when necessary; disclose that execution arrangement.

## Common settings

[`photography-settings.json`](photography-settings.json) supplies setup defaults: `gemini-3-pro-image`, a 3:4 aspect ratio, 2K output, no reference images, and one attempt per participant/condition/concept. These match the model and image treatment used in existing Playbook poster photography. Requested dimensions must still be checked against the returned image.

Before a comparison, freeze a new run ID, the settings file, the implementation, participant IDs, conditions, and concept IDs. All participants use the same settings and output root. Keep the first fifteen gallery concepts and their original common brief unchanged.

## Agent interface

Each agent writes a JSON request in its assigned folder:

```json
{
  "participant": "assigned-studio-id",
  "condition": "pilot",
  "concept": "sports",
  "prompt": "The agent's complete, original photography prompt."
}
```

The condition must be `pilot`, `brief-only`, `shared-input`, or `connection-check`. The command sends the prompt exactly as supplied; it does not secretly add Playbook guidance to the brief-only condition. Provide the same essential image requirements to both input conditions in their common task brief.

From the repository root, validate without reading a credential, writing outputs, or making a network request:

```bash
node lib/google-photography.mjs dry-run REQUEST.json SETTINGS.json OUTPUT_ROOT
```

Generate with the same three arguments:

```bash
node lib/google-photography.mjs generate REQUEST.json SETTINGS.json OUTPUT_ROOT
```

The coordinator assigns the three paths and the request IDs. Agents must not change IDs, run IDs, or output roots to gain extra attempts. The counter prevents accidental duplicate requests within that declared run; it is not a security boundary against a process that can alter files or call the provider directly.

## Records and failures

Each attempt is stored at `OUTPUT_ROOT/RUN_ID/PARTICIPANT/CONDITION/CONCEPT/attempt-N/`:

- `request.json`: original agent prompt, actual provider payload, settings hash, implementation hash, and start time.
- `result.json`: status, timestamps, latency, requested and returned model versions, usage when supplied, finish reasons, and generated file hashes.
- Image files: every returned final candidate image, without choosing the best one.
- `response.json`: successful-response metadata, with image bytes stored in the referenced image files. Provider thought parts are omitted and marked; this is not an untouched raw response transcript.

Settings and implementation are locked on the first request in a run. Existing outputs are never overwritten. Refusals, no-image responses, HTTP failures, and uncertain transport failures remain recorded and consume an attempt. There are no automatic retries. Error messages redact any credential echo. A crash leaves a `started` record for an uncertain attempt, not a silently reusable slot.

Keep actual image-generator cost and latency separate from concept-model cost and latency. Monetary cost is not inferred from token counts. Giving Spark this command does not add image-input support to its model; the visual-comparison eligibility rule in the [protocol](PROTOCOL.md) still applies.

## Verification

The [shared photography concept round](../photo-round-02/index.html) now contains fifteen fresh concepts and fifteen successful Google photographs. All five agents supplied original prompts in fresh contexts; the coordinator executed one attempt per concept after freezing each first completed submission. No participant received an image preview or creative feedback. The [round method](../photo-round-02/README.md) documents the common template, a shared integration correction, retained content/photo issues, and the limits of this unscored comparison.

Run the credential-free checks with `node --test lib/google-photography.test.mjs`. They cover credential handling, malformed requests, fixed provider origin, output preservation, concurrent attempt limits, refusal/HTTP/transport failures, and changed settings.

The setup request in [`photography-check-request.json`](photography-check-request.json) is a coordinator-authored technical check, excluded from competition entries and scores. The first setup request using the documentation's newer `responseFormat` representation returned HTTP 400 and is preserved in `../photography-output/google-photography-setup-20260904/`. The adapter uses the also-documented `imageConfig` representation for its next setup run; this request-format change is not a concept-model revision.

The second setup request succeeded with HTTP 200 and returned `gemini-3-pro-image`. Its [test photograph](../photography-output/google-photography-setup-v2-20260904/coordinator/connection-check/photo-access-check/attempt-1/candidate-1-image-1.jpg) was inspected and measured at 1792 × 2400 pixels for the requested 3:4 / 2K settings. The [result record](../photography-output/google-photography-setup-v2-20260904/coordinator/connection-check/photo-access-check/attempt-1/result.json) preserves the image hash, 22.1-second request duration, and provider usage counts. This confirms a working generation connection; it is not a quality score or proof that every composition instruction was followed.

Provider references: [Gemini image generation](https://ai.google.dev/gemini-api/docs/generate-content/image-generation), [GenerationConfig and ImageConfig](https://ai.google.dev/api/generate-content#v1beta.GenerationConfig), [model catalog](https://ai.google.dev/api/models), and [Google API key handling](https://ai.google.dev/gemini-api/docs/api-key).
