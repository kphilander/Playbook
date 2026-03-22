import { useState, useRef, useEffect } from 'react';

const EXAMPLES = [
  {
    id: 'footer',
    title: 'The Helpline Footer',
    before:
      'A tiny footer link in 10px gray text: "If you have a gambling problem, call 1-800-GAMBLER"',
    after:
      'A prominent footer strip with helpline number, chat link, and text option — visible on every page, accessible in one tap',
    gaps: [
      {
        id: 'visibility',
        label: 'Almost invisible',
        explanation:
          'Tiny gray text that players will never see. Tier 2 accessibility means the helpline must be findable in one tap from any screen — not buried.',
      },
      {
        id: 'framing',
        label: '"Gambling problem" framing',
        explanation:
          '"If you have a gambling problem" is stigmatizing. Playbook uses: "Support is here — call, chat, or text anytime." No labels, no judgment.',
      },
      {
        id: 'options',
        label: 'Phone only',
        explanation:
          "Many people — especially younger players — won't call. Offering chat and text dramatically increases accessibility.",
      },
    ],
  },
  {
    id: 'deposit',
    title: 'The Deposit Screen',
    before:
      'Standard deposit form with amount field, payment method, and a "Gamble Responsibly" checkbox at the bottom',
    after:
      'Deposit form with an integrated budget setter: "Set your weekly entertainment budget" with a visual slider, plus a brief note on what the deposit limit does',
    gaps: [
      {
        id: 'checkbox',
        label: '"Gamble Responsibly" checkbox',
        explanation:
          "A checkbox nobody reads. It's compliance theater. Playbook replaces this with an actual tool prompt — setting a deposit limit — framed as a feature.",
      },
      {
        id: 'noTool',
        label: 'No tool integration',
        explanation:
          "The deposit moment is a NATURAL moment for budget-setting. Instead of a meaningless checkbox, prompt the player to set their entertainment budget.",
      },
      {
        id: 'language',
        label: '"Gamble Responsibly" language',
        explanation:
          '"Gamble Responsibly" is a slogan, not information. It tells the player nothing useful. Playbook replaces slogans with tools and information.',
      },
    ],
  },
  {
    id: 'content',
    title: 'The RG Content Page',
    before:
      'A page titled "Responsible Gambling" with 2000 words of legal text, links to external organizations, and a "Warning Signs" section listing clinical diagnostic criteria',
    after:
      'A content hub with quiz challenges, myth-busting articles, odds explainers, and tool setup guides — organized by topic, not by problem severity',
    gaps: [
      {
        id: 'wall',
        label: 'Wall of text',
        explanation:
          'Nobody reads 2000 words of legal text. Playbook content is chunked, visual, interactive, and designed to be actually engaging.',
      },
      {
        id: 'clinical',
        label: 'Clinical "warning signs"',
        explanation:
          'Listing DSM diagnostic criteria on a gambling site helps nobody. Players don\'t self-diagnose from clinical checklists. Playbook uses behavioral descriptions: "spending more than you planned" not "persistent and recurrent problematic gambling behavior."',
      },
      {
        id: 'deficit',
        label: 'Only deficit-focused',
        explanation:
          "The entire page is about problems. Where's the 95% Tier 1 content? Where's the odds literacy, myth-busting, and tool education that serves the majority?",
      },
    ],
  },
];

export default function SpotTheGap() {
  const [currentExample, setCurrentExample] = useState(0);
  const [revealedGaps, setRevealedGaps] = useState<Record<string, Set<string>>>({});

  const exerciseCompleteDispatched = useRef(false);

  const example = EXAMPLES[currentExample];
  const revealed = revealedGaps[example.id] || new Set<string>();
  const totalFound = revealed.size;
  const totalGaps = example.gaps.length;
  const allFound = totalFound === totalGaps;

  // Check if ALL gaps across ALL examples have been found
  const allExamplesComplete = EXAMPLES.every(
    (ex) => (revealedGaps[ex.id]?.size || 0) === ex.gaps.length,
  );

  useEffect(() => {
    if (allExamplesComplete && !exerciseCompleteDispatched.current) {
      exerciseCompleteDispatched.current = true;
      window.dispatchEvent(new CustomEvent('exercise-complete'));
    }
  }, [allExamplesComplete]);

  const toggleGap = (gapId: string) => {
    setRevealedGaps((prev) => {
      const current = new Set(prev[example.id] || []);
      if (current.has(gapId)) return prev; // already revealed
      current.add(gapId);
      return { ...prev, [example.id]: current };
    });
  };

  const goTo = (index: number) => {
    setCurrentExample(index);
  };

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4 flex items-center justify-between">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
            Interactive Exercise
          </span>
          <h3 className="text-white font-heading font-bold text-lg mt-0.5">Spot the Gap</h3>
        </div>
        <div className="flex items-center gap-2">
          {EXAMPLES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-8 h-8 rounded-full text-xs font-heading font-bold transition-all ${
                i === currentExample
                  ? 'bg-teal text-navy'
                  : 'bg-navy-light text-white/60 hover:text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {/* Example title */}
        <p className="font-heading font-semibold text-navy text-lg mb-4">{example.title}</p>

        {/* Before / After cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {/* Before */}
          <div className="rounded-lg border-2 border-warning/40 bg-warning/5 p-4">
            <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-warning mb-2">
              Before
            </span>
            <p className="text-n700 text-sm leading-relaxed">{example.before}</p>
          </div>
          {/* After */}
          <div className="rounded-lg border-2 border-success/40 bg-success/5 p-4">
            <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-success mb-2">
              After — Playbook
            </span>
            <p className="text-n700 text-sm leading-relaxed">{example.after}</p>
          </div>
        </div>

        {/* Prompt */}
        <p className="font-heading font-semibold text-n700 text-sm mb-3">
          What's wrong in the Before version? Click each gap to reveal the explanation.
        </p>

        {/* Gap items */}
        <div className="space-y-3 mb-4">
          {example.gaps.map((gap) => {
            const isRevealed = revealed.has(gap.id);
            return (
              <div key={gap.id}>
                <button
                  onClick={() => toggleGap(gap.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm flex items-center gap-3 ${
                    isRevealed
                      ? 'border-success/30 bg-success/5 cursor-default'
                      : 'border-n100 bg-white hover:border-teal hover:bg-teal/5 cursor-pointer'
                  }`}
                >
                  {/* Checkmark or circle */}
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      isRevealed ? 'bg-success text-white' : 'border-2 border-n300'
                    }`}
                  >
                    {isRevealed && (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={`font-heading font-semibold ${isRevealed ? 'text-success' : 'text-navy'}`}>
                    {gap.label}
                  </span>
                </button>
                {/* Explanation slide-down */}
                <div aria-live="polite">
                {isRevealed && (
                  <div className="ml-9 mt-2 pl-4 border-l-2 border-success/20 pb-1 animate-fade-in">
                    <p className="text-n700 text-sm leading-relaxed">{gap.explanation}</p>
                  </div>
                )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Score */}
        <div className="flex items-center justify-between pt-3 border-t border-n100">
          <span className="text-sm text-n500 font-heading">
            {totalFound} of {totalGaps} gaps spotted
          </span>
          {allFound && (
            <span className="text-sm font-heading font-bold text-teal-text animate-fade-in">
              Sharp eye.
            </span>
          )}
        </div>

        {/* Skip exercise link */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('exercise-complete'))}
          className="mt-3 text-xs text-n400 hover:text-n600 transition-colors underline"
        >
          Skip exercise — continue audio
        </button>
      </div>
    </div>
  );
}
