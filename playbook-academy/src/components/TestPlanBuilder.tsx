import { useState } from 'react';

/* ───── Data ───── */

const TEST_GOALS = [
  { id: 'comprehension', label: 'Comprehension', desc: 'Can players understand the message?' },
  { id: 'engagement', label: 'Engagement', desc: 'Do players interact with the content?' },
  { id: 'tool-adoption', label: 'Tool adoption', desc: 'Are players using the tools we promote?' },
  { id: 'tone', label: 'Tone appropriateness', desc: 'Does the content feel respectful, not preachy?' },
];

const SEGMENTS = [
  { id: 'new-novice', label: 'New / Novice', desc: 'First-time or early-stage players' },
  { id: 'recreational', label: 'Recreational', desc: 'Regular players with healthy habits' },
  { id: 'enthusiast', label: 'Enthusiast', desc: 'Highly engaged, knowledgeable players' },
  { id: 'at-risk', label: 'At-Risk', desc: 'Players showing early warning signs' },
  { id: 'in-crisis', label: 'In-Crisis', desc: 'Players experiencing active harm' },
  { id: 'friends-family', label: 'Friends & Family', desc: 'People affected by someone else\'s gambling' },
];

interface Method {
  id: string;
  label: string;
  desc: string;
  sampleSize: string;
  timeline: string;
}

const METHODS: Method[] = [
  {
    id: 'ab-test',
    label: 'A/B test',
    desc: 'Run two variants and compare performance metrics',
    sampleSize: '500+ players per variant for statistical significance',
    timeline: '2-4 weeks of live traffic',
  },
  {
    id: 'survey',
    label: 'Post-exposure survey',
    desc: 'Ask players about their experience after seeing the content',
    sampleSize: '50-100 respondents per segment',
    timeline: '1-2 weeks for recruitment and collection',
  },
  {
    id: 'think-aloud',
    label: 'Think-aloud session',
    desc: 'Watch players interact with content and narrate their thoughts',
    sampleSize: '5-8 players per segment (diminishing returns after 8)',
    timeline: '1 week for scheduling and sessions',
  },
  {
    id: 'analytics',
    label: 'Analytics review',
    desc: 'Analyze existing behavioral data for patterns',
    sampleSize: 'Full traffic — no recruitment needed',
    timeline: '2-3 days of data pull and analysis',
  },
];

/* ───── Helpers ───── */

function buildSummary(
  goals: Set<string>,
  segments: Set<string>,
  method: string | null,
): string {
  const goalLabels = TEST_GOALS.filter((g) => goals.has(g.id)).map((g) => g.label);
  const segLabels = SEGMENTS.filter((s) => segments.has(s.id)).map((s) => s.label);
  const m = METHODS.find((x) => x.id === method);

  let text = `TEST PLAN\n`;
  text += `=========\n\n`;
  text += `OBJECTIVE\n`;
  text += `Test ${goalLabels.join(', ').toLowerCase()} with real players.\n\n`;
  text += `TARGET SEGMENTS\n`;
  segLabels.forEach((s) => { text += `- ${s}\n`; });
  text += `\n`;
  text += `METHOD\n`;
  text += `${m?.label}: ${m?.desc}\n\n`;
  text += `SAMPLE SIZE\n`;
  text += `${m?.sampleSize}\n\n`;
  text += `TIMELINE\n`;
  text += `${m?.timeline}\n\n`;
  text += `WHAT TO MEASURE\n`;
  if (goals.has('comprehension')) text += `- Can testers paraphrase the message in their own words?\n`;
  if (goals.has('engagement')) text += `- Do testers interact (click, share, complete) vs. bounce?\n`;
  if (goals.has('tool-adoption')) text += `- Do testers use the promoted tool within the session?\n`;
  if (goals.has('tone')) text += `- Do testers feel respected, not lectured? (Ask: "How did this make you feel?")\n`;
  text += `\n`;
  text += `KEY QUESTIONS (ask every tester)\n`;
  text += `1. "What does this mean to you?"\n`;
  text += `2. "How does this make you feel?"\n`;
  text += `3. "Would you share this?"\n`;
  text += `4. "Is anything confusing?"\n`;
  text += `5. "Who do you think this is for?"\n`;
  text += `\n`;
  text += `RED FLAGS TO WATCH FOR\n`;
  text += `- "This sounds like it's telling me off" → preachy tone\n`;
  text += `- "This feels like a warning" → compliance framing\n`;
  text += `- "This isn't for me" → wrong segment targeting\n`;
  text += `- "I'd just close this" → no value proposition\n`;
  return text;
}

/* ───── Component ───── */

export default function TestPlanBuilder() {
  const [step, setStep] = useState(1);
  const [goals, setGoals] = useState<Set<string>>(new Set());
  const [segments, setSegments] = useState<Set<string>>(new Set());
  const [method, setMethod] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const canAdvance =
    (step === 1 && goals.size > 0) ||
    (step === 2 && segments.size > 0) ||
    (step === 3 && method !== null);

  const isComplete = step === 4;

  const toggleGoal = (id: string) => {
    setGoals((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleSegment = (id: string) => {
    setSegments((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleNext = () => {
    if (!canAdvance) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
    setCopied(false);
  };

  const handleReset = () => {
    setStep(1);
    setGoals(new Set());
    setSegments(new Set());
    setMethod(null);
    setCopied(false);
  };

  const handleCopy = async () => {
    const summary = buildSummary(goals, segments, method);
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback: select text
      const textarea = document.createElement('textarea');
      textarea.value = summary;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const selectedMethod = METHODS.find((m) => m.id === method);

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden dark:bg-navy dark:border-n700">
      {/* Header */}
      <div className="bg-navy px-5 py-4 dark:bg-[#111827]">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Exercise
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">
          Test Plan Builder
        </h3>
      </div>

      <div className="p-5 sm:p-6">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-heading font-bold transition-colors ${
                  s < step
                    ? 'bg-teal text-white'
                    : s === step
                      ? 'bg-navy text-white dark:bg-teal dark:text-navy'
                      : 'bg-n100 text-n400 dark:bg-n700 dark:text-n500'
                }`}
              >
                {s < step ? (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s
                )}
              </div>
              {s < 3 && (
                <div
                  className={`w-8 sm:w-12 h-0.5 rounded-full transition-colors ${
                    s < step ? 'bg-teal' : 'bg-n100 dark:bg-n700'
                  }`}
                />
              )}
            </div>
          ))}
          <span className="ml-2 text-xs text-n500 dark:text-n400 hidden sm:inline">
            {step === 1 && 'What to test'}
            {step === 2 && 'Who to test with'}
            {step === 3 && 'How to test'}
            {step === 4 && 'Your test plan'}
          </span>
        </div>

        {/* Step 1: What to test */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h4 className="text-base font-heading font-bold text-navy mb-1 dark:text-white">
              What do you want to test?
            </h4>
            <p className="text-sm text-n600 mb-4 dark:text-n400">
              Select one or more goals. Each goal shapes the questions you'll ask and the data you'll collect.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TEST_GOALS.map((goal) => {
                const active = goals.has(goal.id);
                return (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`text-left px-4 py-3 rounded-lg border-2 transition-all ${
                      active
                        ? 'border-teal bg-teal/5 dark:bg-teal/10'
                        : 'border-n100 bg-white hover:border-n300 dark:bg-navy dark:border-n600 dark:hover:border-n500'
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center transition-colors ${
                          active ? 'bg-teal border-teal text-white' : 'border-n300 dark:border-n500'
                        }`}
                      >
                        {active && (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span>
                        <span className={`block text-sm font-semibold ${active ? 'text-navy dark:text-white' : 'text-n700 dark:text-n300'}`}>
                          {goal.label}
                        </span>
                        <span className="block text-xs text-n500 mt-0.5 dark:text-n400">{goal.desc}</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Who to test with */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h4 className="text-base font-heading font-bold text-navy mb-1 dark:text-white">
              Which segments will you test with?
            </h4>
            <p className="text-sm text-n600 mb-4 dark:text-n400">
              Select the relationship-based segments you're targeting. Recruit 5-8 players per segment for qualitative methods.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SEGMENTS.map((seg) => {
                const active = segments.has(seg.id);
                return (
                  <button
                    key={seg.id}
                    onClick={() => toggleSegment(seg.id)}
                    className={`text-left px-4 py-3 rounded-lg border-2 transition-all ${
                      active
                        ? 'border-teal bg-teal/5 dark:bg-teal/10'
                        : 'border-n100 bg-white hover:border-n300 dark:bg-navy dark:border-n600 dark:hover:border-n500'
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center transition-colors ${
                          active ? 'bg-teal border-teal text-white' : 'border-n300 dark:border-n500'
                        }`}
                      >
                        {active && (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span>
                        <span className={`block text-sm font-semibold ${active ? 'text-navy dark:text-white' : 'text-n700 dark:text-n300'}`}>
                          {seg.label}
                        </span>
                        <span className="block text-xs text-n500 mt-0.5 dark:text-n400">{seg.desc}</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: How to test */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h4 className="text-base font-heading font-bold text-navy mb-1 dark:text-white">
              How will you test?
            </h4>
            <p className="text-sm text-n600 mb-4 dark:text-n400">
              Choose one method. Each has different sample size requirements and timelines.
            </p>
            <div className="space-y-3">
              {METHODS.map((m) => {
                const active = method === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`w-full text-left px-4 py-4 rounded-lg border-2 transition-all ${
                      active
                        ? 'border-teal bg-teal/5 dark:bg-teal/10'
                        : 'border-n100 bg-white hover:border-n300 dark:bg-navy dark:border-n600 dark:hover:border-n500'
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          active ? 'bg-teal border-teal' : 'border-n300 dark:border-n500'
                        }`}
                      >
                        {active && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                      <span className="flex-1">
                        <span className={`block text-sm font-semibold ${active ? 'text-navy dark:text-white' : 'text-n700 dark:text-n300'}`}>
                          {m.label}
                        </span>
                        <span className="block text-xs text-n500 mt-0.5 dark:text-n400">{m.desc}</span>
                        <span className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                          <span className="text-xs text-n500 dark:text-n400">
                            <span className="font-semibold text-navy dark:text-teal">Sample:</span> {m.sampleSize}
                          </span>
                          <span className="text-xs text-n500 dark:text-n400">
                            <span className="font-semibold text-navy dark:text-teal">Timeline:</span> {m.timeline}
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: Summary */}
        {isComplete && (
          <div className="animate-fade-in">
            <h4 className="text-base font-heading font-bold text-navy mb-4 dark:text-white">
              Your Test Plan
            </h4>

            <div className="bg-n50 rounded-lg border border-n100 p-5 space-y-4 dark:bg-[#111827] dark:border-n600">
              {/* Objective */}
              <div>
                <h5 className="text-xs font-heading font-bold uppercase tracking-wider text-teal-dark mb-1.5 dark:text-teal">
                  Objective
                </h5>
                <p className="text-sm text-n700 dark:text-n300">
                  Test{' '}
                  {TEST_GOALS.filter((g) => goals.has(g.id))
                    .map((g) => g.label.toLowerCase())
                    .join(', ')}{' '}
                  with real players.
                </p>
              </div>

              {/* Segments */}
              <div>
                <h5 className="text-xs font-heading font-bold uppercase tracking-wider text-teal-dark mb-1.5 dark:text-teal">
                  Target Segments
                </h5>
                <div className="flex flex-wrap gap-2">
                  {SEGMENTS.filter((s) => segments.has(s.id)).map((s) => (
                    <span
                      key={s.id}
                      className="inline-block px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-semibold dark:bg-teal/20 dark:text-teal"
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Method */}
              <div>
                <h5 className="text-xs font-heading font-bold uppercase tracking-wider text-teal-dark mb-1.5 dark:text-teal">
                  Method
                </h5>
                <p className="text-sm font-semibold text-navy dark:text-white">
                  {selectedMethod?.label}
                </p>
                <p className="text-xs text-n600 mt-0.5 dark:text-n400">{selectedMethod?.desc}</p>
              </div>

              {/* Sample + Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg px-4 py-3 border border-n100 dark:bg-navy dark:border-n600">
                  <h5 className="text-xs font-heading font-bold uppercase tracking-wider text-orange mb-1">
                    Sample Size
                  </h5>
                  <p className="text-sm text-n700 dark:text-n300">{selectedMethod?.sampleSize}</p>
                </div>
                <div className="bg-white rounded-lg px-4 py-3 border border-n100 dark:bg-navy dark:border-n600">
                  <h5 className="text-xs font-heading font-bold uppercase tracking-wider text-orange mb-1">
                    Timeline
                  </h5>
                  <p className="text-sm text-n700 dark:text-n300">{selectedMethod?.timeline}</p>
                </div>
              </div>

              {/* What to measure */}
              <div>
                <h5 className="text-xs font-heading font-bold uppercase tracking-wider text-teal-dark mb-1.5 dark:text-teal">
                  What to Measure
                </h5>
                <ul className="space-y-1">
                  {goals.has('comprehension') && (
                    <li className="text-sm text-n700 dark:text-n300">
                      &bull; Can testers paraphrase the message in their own words?
                    </li>
                  )}
                  {goals.has('engagement') && (
                    <li className="text-sm text-n700 dark:text-n300">
                      &bull; Do testers interact (click, share, complete) vs. bounce?
                    </li>
                  )}
                  {goals.has('tool-adoption') && (
                    <li className="text-sm text-n700 dark:text-n300">
                      &bull; Do testers use the promoted tool within the session?
                    </li>
                  )}
                  {goals.has('tone') && (
                    <li className="text-sm text-n700 dark:text-n300">
                      &bull; Do testers feel respected, not lectured? (Ask: "How did this make you feel?")
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Copy button */}
            <div className="flex items-center justify-center mt-5 gap-3">
              <button
                onClick={handleCopy}
                className={`px-5 py-2.5 text-sm font-heading font-semibold rounded-lg transition-all ${
                  copied
                    ? 'bg-success/10 text-success border border-success/30'
                    : 'bg-navy text-white hover:bg-navy-light dark:bg-teal dark:text-navy dark:hover:bg-teal-light'
                }`}
              >
                {copied ? 'Copied to clipboard' : 'Copy test plan'}
              </button>
            </div>
          </div>
        )}

        {/* Navigation */}
        {step <= 3 && (
          <div className="flex items-center justify-between pt-5 mt-5 border-t border-n100 dark:border-n700">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="px-4 py-2 text-sm text-n500 hover:text-navy transition-colors dark:text-n400 dark:hover:text-white"
              >
                Back
              </button>
            ) : (
              <span />
            )}
            <button
              onClick={handleNext}
              disabled={!canAdvance}
              className="px-5 py-2.5 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed dark:bg-teal dark:text-navy dark:hover:bg-teal-light"
            >
              {step < 3 ? 'Next' : 'Generate test plan'}
            </button>
          </div>
        )}

        {/* Reset from summary */}
        {isComplete && (
          <div className="text-center pt-4">
            <button
              onClick={handleReset}
              className="px-5 py-2 text-sm text-n500 hover:text-navy transition-colors underline dark:text-n400 dark:hover:text-white"
            >
              Build another test plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
