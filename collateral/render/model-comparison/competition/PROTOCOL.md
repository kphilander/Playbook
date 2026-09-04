# Fair comparison protocol — draft for selection

Status: designed before a new scored run. No competition results or winners are recorded here. The existing gallery is an exploratory, revised showcase and is excluded from competition scores.

## Claims to separate

1. **Model comparison:** What do different supported models produce from identical RG inputs and tasks under the same execution conditions?
2. **Shared-input comparison:** For the same model and task, do the reusable Playbook inputs improve output quality compared with a credible ordinary brief?
3. **Operational portability:** Can the same input package and evaluation process be reused when the model changes, without model-specific prompt engineering?

The first comparison alone cannot establish the second. None of these short content experiments establishes the scaling-compute thesis in Richard Sutton’s [The Bitter Lesson](https://www.cs.utexas.edu/~eunsol/courses/data/bitter_lesson.pdf), measures player outcomes, or demonstrates that a complete RG program is effective. The article motivates an architectural hypothesis; the competition must be free to return mixed or unfavorable results.

## What the proposed architecture means

Keep source facts, vocabulary, brand requirements, and evaluation criteria in a portable, versioned input package. Keep model-specific procedural instructions small. Allow general models to generate solutions, then evaluate those solutions against the same requirements.

This is a proposed application to Playbook, not a conclusion stated by Sutton. A larger handbook or more prescriptive templates are not automatically better, and the input package can fail to improve a model’s result.

## Separate concept quality from production tooling

The primary competition should use **structured concept outputs rendered by one common renderer**. Each entry contains the headline, body, action line, caption, source justification, and a short visual idea. The renderer uses the same canvas, fonts, and typography rules for every entry. Judges assess the concept and copy, with the visual idea presented consistently in words.

This avoids awarding a concept-quality win because one agent has a screenshot tool and another does not. It also avoids confusing CSS skill with RG understanding. If a model fails the output schema, preserve the failed response and count it as a failure; do not quietly fix or exclude it.

A separate full-production lane can assess model-authored HTML/CSS/SVG. It must use the same runtime and actual tool access for every participant, preserve initial submissions, and report rendering failures. Do not combine its scores with the concept lane. The current gallery belongs to an exploratory production showcase, not either controlled lane.

## Model roster and availability

- Record exact requested and actual model IDs, date, runtime version, reasoning setting, tool availability, and any backend-reported limits.
- GPT-5.3 Codex Spark must be labeled **GPT-5.3 Codex Spark**, not generic GPT-5.3 or GPT-5.3 Codex.
- GPT-5.4 is currently ineligible: the subagent interface rejected the ID, and a separate read-only Codex CLI probe returned that this model is unsupported with the current ChatGPT account. Keep this as an availability result, not a performance loss. Do not substitute a nearby model.
- Test capabilities before freezing the roster. Include only models that can execute through a common supported route in the primary scored comparison. Record exclusions before looking at scored outputs.
- The existing “high” labels describe requested settings. They do not establish equal internal reasoning tokens, training compute, inference cost, or tool support.

## Matched tasks

All models receive the same three learning objectives and audience descriptions. Models retain freedom over hooks, explanations, and visual ideas:

| Case | Common learning objective |
|---|---|
| Sports betting | Explain the difference between winning a game and covering a point spread, using one explicitly illustrative example. |
| Gambling myth | Explain why return to player is not winning-spin frequency or a promise for one session. |
| Player tools | Explain how to choose an end time and use a reminder without suggesting that a reminder automatically stops play. |

Freeze the exact case briefs, minimum factual statements, neutral output template, schema, and reference hashes before calling any competition model. These are new runs in fresh contexts; do not reuse the already-seen concepts as scored entries.

## Input conditions

**Common to both conditions:** the same task, audience, required essential facts, brand name, palette/fonts, support/age treatment, output schema, and basic constraints against misleading or stigmatizing content. Provide a competent ordinary brief, not a deliberately weak baseline. Do not hide requirements from one condition and then penalize it for not knowing them.

**Brief-only condition:** the common brief and essential facts, without the extended Playbook source packet or model-specific coaching.

**Shared-input condition:** the same common brief plus the versioned Playbook source packet. The packet is the only intended input difference within each model/task pair. Both conditions use the same neutral rendering template. The additional input length is part of the treatment and must be reported, not disguised as equal token usage.

If the user chooses model-only comparison, use the shared-input condition for all models and explicitly withhold conclusions about whether shared inputs helped.

## Generation and revision rules

1. Hide the desired “bitter lesson” narrative, preferred model, judge identities, and other outputs from the generation prompt.
2. Use fresh isolated contexts with only the declared condition inputs. Avoid repository-wide access leaking the shared packet into the brief-only condition.
3. Use the same execution route, visible tool permissions, output token cap, and number of attempts. Use the same supported reasoning setting, documenting that this is not proof of equal compute.
4. Primary score: **first completed submission**. Preserve exact requests, raw responses, model metadata, timestamps, validation errors, and rendered artifacts before intervention.
5. No model-specific creative or factual coaching before primary scoring. A secondary “repaired output” round may permit exactly one revision for every entry using the same deterministic validation report format; keep those results separate.
6. Never select the best of several outputs for one model. A transport-only failure may be retried under a predeclared identical rule; invalid or poor content is a result, not a transport failure.
7. Report actual observable input/output tokens, tool calls, latency, and cost when available. Mark missing telemetry unavailable. Do not rank compute efficiency from model names or “high” alone.

## Blind judging

- Assign opaque entry IDs, randomize model/condition order within each matched case, and withhold the identity key until scores are locked. The current Studio A/B/C toggle is not sufficient: reviewers have already seen those identities and outputs.
- Judge new entries, not remembered examples. Do not tell judges which result would support the presentation argument.
- Use at least three independent human judges for a scored presentation where practical, including RG/content expertise and intended-audience perspective. Keep judge-role results separate when they differ. An AI judge can be secondary, with its model and rubric disclosed, never the sole arbiter of its own generation’s superiority.
- Score every entry against the same rubric in `RUBRIC.json`; ties and “neither meets the brief” are valid. Record factual defects before revealing model names. Do not let polished visuals compensate for a false core claim.
- Report judge counts and agreement, not just a combined winner. Do not fabricate judges, votes, confidence intervals, or effect sizes.

## Sampling and reporting

An initial demonstration can use one submission per model × condition × case: six concepts per model in a two-condition design. This is a small matched demonstration, not a reliable model leaderboard. A follow-up with at least three independent submissions per cell can examine output variability; disclose the total sample and all exclusions.

Publish every completed entry, including failures, along with the frozen protocol and scores. Report results by case and criterion; show within-model differences between input conditions. Record ties, null improvements, reversals, and instances where the extended packet reduces originality or quality. Separate technical availability failures from generation failures.

If results favor newer models under shared inputs, say that these models performed better **on these tasks under these conditions**. If shared inputs help, describe the observed benefit without claiming that the study proves the bitter lesson, the value of all RG systems, or effects on player behavior.

## Required before the scored run

Select model-only or model × input conditions; freeze the eligible roster and common runtime; choose the initial demonstration or replicated design; name the judging process; then lock the case briefs and scoring files. Until those choices are settled, all new generation remains exploratory and unscored.
