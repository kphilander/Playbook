---
title: "Player Testing Protocol"
---

# Player Testing Protocol

Surveys for testing whether {{PROGRAM_NAME}} content resonates with players, what they remember, and whether cultural adaptations improve the experience. Designed for marketing teams -- no research expertise required.

This is brand effectiveness testing, not clinical research. We measure engagement and resonance, not harm reduction outcomes. See [Chapter 8 -- Governance](../brand-book/08-governance.md#what-not-to-measure) for that distinction.

---

## Instruments and sources

This protocol uses established instruments and methodology. Where we've adapted questions for the Playbook context, that's noted explicitly.

| Component | Status | Source |
|-----------|--------|--------|
| Net Promoter Score (NPS) | Validated instrument, standard 0--10 scale | Reichheld (2003) |
| Semantic differential method | Validated methodology, cross-culturally stable | Osgood, Suci, & Tannenbaum (1957) |
| *Forgettable -- Memorable* pair | Validated for message evaluation | Dillard, Shen, & Vail (2007) |
| *Preachy -- Respectful* pair | Adapted -- anchored to Playbook brand DNA | Not independently validated |
| *Generic -- Made for me* pair | Adapted -- cultural fit indicator | Not independently validated |
| Free recall + recognition | Standard research methodology | Established procedure |

Use validated components with confidence. Treat adapted components as directional.

---

## Pulse survey

**3 items. Under 1 minute. Minimum viable signal.**

Use after any content launch, campaign wave, or quiz deployment. Distribute via in-app intercept, post-quiz screen, follow-up email, or QR code on print materials.

**Sample size:** 30 responses minimum.

Copy-paste these questions into your survey tool:

```
1. How likely would you be to recommend this content to a friend
   who gambles?

   0  1  2  3  4  5  6  7  8  9  10
   Not at all likely          Extremely likely

2. Rate this content:

   Forgettable  1  2  3  4  5  6  7  Memorable

3. What's one thing you'd change? (optional)

   [open text]
```

---

## Full survey

**7 items. About 2 minutes. More diagnostic.**

Use when you need to understand *why* content is or isn't working -- not just whether it is. Recommended for new market launches, major campaign evaluations, and cultural adaptation testing.

**Sample size:** 30 responses minimum. For cultural fit A/B tests, 30 per group (60 total).

```
1. How likely would you be to recommend this content to a friend
   who gambles?

   0  1  2  3  4  5  6  7  8  9  10
   Not at all likely          Extremely likely

2. Rate this content on each scale:

   Forgettable  1  2  3  4  5  6  7  Memorable
   Boring       1  2  3  4  5  6  7  Engaging
   Preachy      1  2  3  4  5  6  7  Respectful
   Confusing    1  2  3  4  5  6  7  Clear
   Generic      1  2  3  4  5  6  7  Made for me

3. What's one thing you'd change? (optional)

   [open text]
```

### Why these pairs

| Pair | What it tests | Source |
|------|---------------|-------|
| Forgettable -- Memorable | Message stickiness | Dillard et al. (2007) |
| Boring -- Engaging | Entertainment value | Brand DNA: "Treats gambling as entertainment" |
| Preachy -- Respectful | Voice register | Brand DNA prohibition: never lecture, never patronize |
| Confusing -- Clear | Comprehension | Brand DNA: "Generous with information" |
| Generic -- Made for me | Audience fit / cultural resonance | Cultural adaptation validation |

---

## Recall survey

**4 items. Administered 7--14 days after exposure.**

This is a separate follow-up survey, not part of the Pulse or Full. It answers: *What stuck?*

**Sample size:** 25 responses minimum. Expect 40--60% response rate from players who completed an earlier Pulse or Full survey.

```
We showed you some content about [TOPIC] about [X] days ago.
Without looking anything up:

1. What's the main thing you remember? (one sentence is fine)

   [open text]

2. True or false: [KEY FACT FROM YOUR CONTENT]
   ( ) True  ( ) False  ( ) Not sure

3. True or false: [SECOND KEY FACT FROM YOUR CONTENT]
   ( ) True  ( ) False  ( ) Not sure

4. Since seeing the content, have you done any of the following?
   (check all that apply)
   [ ] Looked up more information about [topic]
   [ ] Used a tool or feature mentioned (e.g., set a limit, tried a calculator)
   [ ] Shared the content or told someone about it
   [ ] None of the above
```

### Writing true/false items

Questions 2 and 3 must be customized for each piece of content. Derive them from the single most important fact in the content. Three worked examples:

| Content type | Source fact | True/false item |
|-------------|------------|-----------------|
| Myth-busting card | Slots outcomes are determined by a random number generator | "True or false: A slot machine that hasn't paid out in a while is more likely to pay soon." (Answer: False) |
| Odds explainer | House edge on American roulette is 5.26% vs. 2.70% on European | "True or false: American roulette has a higher house edge than European roulette." (Answer: True) |
| Tool promotion | Deposit limits can be set in account settings | "True or false: You can set a deposit limit on your account." (Answer: True) |

Pick facts the content explicitly states. Avoid trick questions.

---

## Cultural fit testing

Not a separate instrument -- run the **Full survey** as an A/B test.

- **Group A** sees the default Playbook content
- **Group B** sees the culturally adapted version
- Both groups answer the same 7 questions
- Compare average scores between groups

**Sample size:** 30 per group minimum (60 total).

**Primary comparison metric:** The *Generic -- Made for me* pair. If Group B scores meaningfully higher (0.5+ points), the adaptation is improving cultural resonance.

**Secondary metrics by spectrum changed:**

| Spectrum adapted | Primary pair to compare |
|-----------------|------------------------|
| Voice (e.g., peer to authority) | Preachy -- Respectful |
| Framing (e.g., individual to communal) | Generic -- Made for me |
| Humor (e.g., irreverent to warm) | Boring -- Engaging |
| Directness (e.g., blunt to diplomatic) | Preachy -- Respectful |
| Comfort (e.g., open to reserved) | Generic -- Made for me |

**Rules:** Follow the A/B testing guidance in [`calls-to-action.md`](../messaging/calls-to-action.md#ab-testing-guidance). One variable at a time. Minimum 2 weeks or 1,000 impressions per variant. Measure action, not just clicks.

**Decision guide:**

| NPS comparison | Semantic pairs comparison | Action |
|---------------|--------------------------|--------|
| B >= A | B higher on 2+ pairs | Adaptation works. Deploy adapted version. Share findings. |
| B >= A | B ~= A (within 0.3) | Adaptation is neutral. Default may be fine for this market. |
| B < A | Any | Adaptation may have drifted from brand DNA. Review against [What doesn't change](../localization/cultural-adaptation-guide.md#what-doesnt-change). |

---

## Interpreting results

### NPS

Standard NPS tiers apply. Score = % Promoters (9--10) minus % Detractors (0--6).

| NPS | Reading |
|-----|---------|
| 50+ | Exceptional -- content is spreading organically |
| 30--49 | Strong -- content connects with this audience |
| 0--29 | Acceptable -- room to improve |
| Below 0 | Problem -- more players would discourage than recommend |

### Semantic differentials

7-point scale. Midpoint is 4.

| Average | Reading |
|---------|---------|
| 5.5+ | Strong signal on this dimension |
| 4.0--5.4 | Acceptable |
| Below 4.0 | Below midpoint -- investigate. Check open-ended responses for patterns. |
| Below 3.0 | Red flag. Content may be failing on this dimension. |

**Brand DNA alarm:** If *Preachy -- Respectful* scores below 4.0, the content may be lecturing players. Review against [voice principles](../brand-book/04-voice-and-tone.md#voice-principles).

### Recall

| Metric | Strong signal | Weak signal |
|--------|--------------|-------------|
| Free recall (Q1) | Player states the key fact | "I don't remember" or mentions only secondary details |
| True/false (Q2--3) | Both correct | One or both wrong / "not sure" |
| Behavioral follow-through (Q4) | Any action checked | "None of the above" |

If true/false accuracy is low but NPS was high, the content is entertaining but not teaching effectively. Simplify the key message or make it more visually prominent.

---

## Running a test

1. **Pick your survey.** Pulse for quick signal. Full for diagnostics or cultural fit testing. Recall for follow-up.
2. **Copy the questions** into your survey tool (Google Forms, SurveyMonkey, Typeform, or your platform's built-in survey).
3. **Customize** recall true/false items for your content. Set distribution channel (in-app, email, QR code).
4. **Collect responses.** Close when you hit your target sample size or after 2 weeks, whichever comes first.
5. **Report.** Calculate averages, read the open-ended responses for patterns, and file a [Research Findings issue](https://github.com/kphilander/Playbook/issues/new?template=research-findings.yml) to share back.

**Total effort:** 3--4 hours spread across 2 weeks.

---

## Reporting format

Use this structure when filing results. It maps directly to the [GitHub issue template](https://github.com/kphilander/Playbook/issues/new?template=research-findings.yml).

```
Market profile:    [e.g., authority / communal / warm / diplomatic / reserved]
Operator:          [name or "anonymous"]
Content tested:    [title + file reference]
Survey type:       [Pulse / Full / Recall / Cultural Fit A/B]
Player segment:    [e.g., general-players, young-adults, sports-bettors]
Sample size:       [N]
Dates:             [start -- end]

NPS:               [score]
Forgettable/Memorable: [avg]
Boring/Engaging:       [avg, if Full]
Preachy/Respectful:    [avg, if Full]
Confusing/Clear:       [avg, if Full]
Generic/Made for me:   [avg, if Full]

Qualitative patterns:  [2--3 sentences from open-ended responses]
Recommendation:        [Ship / Revise and retest / Escalate to brand owner]
```

---

## Segment notes

The survey questions are the same for every segment. Distribution channel and framing differ.

| Segment | Notes |
|---------|-------|
| General players | Standard distribution, any channel |
| Young adults (18--25) | Mobile-first. In-app intercept or post-quiz screen preferred. |
| Sports bettors | Tie to live event campaigns. Survey after event-timed content. |
| At-risk players | **Do not survey.** This protocol tests Tier 1 content with general audiences only. |
| Friends and family | May reach via email or support pages. Adjust distribution accordingly. |
| Help-seekers | **Do not survey.** Tier 2 content is outside this protocol's scope. |

---

## References

**Methodology:**

- Reichheld, F. (2003). The one number you need to grow. *Harvard Business Review*, 81(12), 46--54. -- The Net Promoter Score.

- Osgood, C. E., Suci, G. J., & Tannenbaum, P. H. (1957). *The Measurement of Meaning*. University of Illinois Press. -- Semantic differential methodology.

- Dillard, J. P., Shen, L., & Vail, R. G. (2007). Does perceived message effectiveness cause persuasion or vice versa? 17 consistent answers. *Human Communication Research*, 33(4), 467--488. -- Validated message evaluation semantic differential pairs.

**Playbook cross-references:**

- [Brand personality and DNA](../brand-book/02-brand-personality.md#brand-dna-vs-brand-expression) -- What the semantic differential pairs are anchored to
- [Voice principles](../brand-book/04-voice-and-tone.md#voice-principles) -- The non-negotiable standards adapted content must meet
- [Cultural adaptation guide](../localization/cultural-adaptation-guide.md) -- The five spectrums and cultural profiles
- [A/B testing guidance](../messaging/calls-to-action.md#ab-testing-guidance) -- Testing rules the cultural fit protocol follows
- [Measuring success](../brand-book/08-governance.md#measuring-success) -- Quantitative KPIs this protocol complements
- [Campaign KPIs](../messaging/campaigns.md) -- Per-campaign metrics to pair with survey data
