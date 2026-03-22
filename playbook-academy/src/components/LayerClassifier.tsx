import { useState, useRef, useEffect } from 'react';

type Layer = 'compliance' | 'public-health' | 'informed-choice';

interface Scenario {
  id: number;
  text: string;
  correctLayer: Layer;
  explanation: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    text: 'An operator is required by law to display a helpline number on all marketing materials.',
    correctLayer: 'compliance',
    explanation:
      'This is a legal requirement — the compliance floor. Every operator must do this regardless of their approach to player education.',
  },
  {
    id: 2,
    text: 'A regulator publishes population-level data showing that problem gambling prevalence has increased from 0.7% to 1.1% over five years.',
    correctLayer: 'public-health',
    explanation:
      "Population-level prevalence data is a public health lens — looking at harm across the entire population, not individual players.",
  },
  {
    id: 3,
    text: 'An operator creates a quiz showing players how parlay odds compound, helping them understand why parlays rarely pay out.',
    correctLayer: 'informed-choice',
    explanation:
      "Teaching players how the math works so they can make better decisions — that's Informed Choice. Equipping the individual with information.",
  },
  {
    id: 4,
    text: 'A jurisdiction mandates that all online gambling sites must offer self-exclusion options.',
    correctLayer: 'compliance',
    explanation:
      'Mandatory self-exclusion is regulatory compliance — the floor that every operator must meet.',
  },
  {
    id: 5,
    text: 'A research organization runs a national awareness campaign about gambling harm during Responsible Gambling Week.',
    correctLayer: 'public-health',
    explanation:
      'A national awareness campaign targeting the general population is public health — addressing prevalence and awareness at the population level.',
  },
  {
    id: 6,
    text: 'A sports betting app shows users their win/loss history with a monthly summary email, framing it as "your entertainment spending."',
    correctLayer: 'informed-choice',
    explanation:
      "Helping individual players see their actual spending patterns and framing gambling as an entertainment cost — that's Informed Choice in action.",
  },
  {
    id: 7,
    text: 'New legislation requires operators to verify customer age and identity before allowing any gambling activity.',
    correctLayer: 'compliance',
    explanation:
      'Age and identity verification is fundamental regulatory compliance — the absolute floor.',
  },
  {
    id: 8,
    text: 'A government funds research into the relationship between gambling advertising volume and youth gambling initiation rates.',
    correctLayer: 'public-health',
    explanation:
      'Studying the population-level impact of advertising on a demographic group is public health research.',
  },
  {
    id: 9,
    text: 'An operator adds a "How Slots Actually Work" article to their content hub, explaining RNG and house edge in plain language.',
    correctLayer: 'informed-choice',
    explanation:
      'Product education that helps players understand game mechanics — classic Informed Choice. Information that enables rational decision-making.',
  },
  {
    id: 10,
    text: 'A regulator sets maximum stake limits on fixed-odds betting terminals.',
    correctLayer: 'compliance',
    explanation:
      'Mandatory stake limits set by the regulator are compliance — a regulatory constraint all operators must follow.',
  },
];

const LAYER_INFO: Record<Layer, { label: string; color: string; bgColor: string; borderColor: string; hoverBg: string }> = {
  compliance: {
    label: 'Compliance (Floor)',
    color: 'text-white',
    bgColor: 'bg-navy',
    borderColor: 'border-navy',
    hoverBg: 'hover:bg-navy/10',
  },
  'public-health': {
    label: 'Public Health (Population)',
    color: 'text-navy',
    bgColor: 'bg-orange',
    borderColor: 'border-orange',
    hoverBg: 'hover:bg-orange/10',
  },
  'informed-choice': {
    label: 'Informed Choice (Individual)',
    color: 'text-navy',
    bgColor: 'bg-teal',
    borderColor: 'border-teal',
    hoverBg: 'hover:bg-teal/10',
  },
};

export default function LayerClassifier() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const scenario = SCENARIOS[currentIndex];
  const isCorrect = selectedLayer === scenario.correctLayer;
  const isComplete = results.length === SCENARIOS.length;
  const correctCount = results.filter(Boolean).length;
  const exerciseCompleteDispatched = useRef(false);

  useEffect(() => {
    if (isComplete && !exerciseCompleteDispatched.current) {
      exerciseCompleteDispatched.current = true;
      window.dispatchEvent(new CustomEvent('exercise-complete'));
    }
  }, [isComplete]);

  const handleSelect = (layer: Layer) => {
    if (submitted) return;
    setSelectedLayer(layer);
    setSubmitted(true);
    setResults((prev) => [...prev, layer === scenario.correctLayer]);
  };

  const handleNext = () => {
    setSelectedLayer(null);
    setSubmitted(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedLayer(null);
    setSubmitted(false);
    setResults([]);
    exerciseCompleteDispatched.current = false;
  };

  if (isComplete) {
    const score = correctCount;
    const total = SCENARIOS.length;
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 80;
    return (
      <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
        <div className="bg-navy px-5 py-4">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
            Interactive Exercise
          </span>
          <h3 className="text-white font-heading font-bold text-lg mt-0.5">Layer Classifier — Results</h3>
        </div>
        <div className="p-6 sm:p-8 text-center">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
              passed ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
            }`}
          >
            <span className="text-3xl font-heading font-bold">
              {score}/{total}
            </span>
          </div>
          <h4 className="text-xl font-heading font-bold text-navy mb-2">
            {passed ? 'You know your layers.' : 'Getting there.'}
          </h4>
          <p className="text-n700 mb-6 max-w-md mx-auto">
            {passed
              ? `${score} out of ${total} classified correctly (${percentage}%). You can tell the floor from the ceiling — and that matters for every content decision.`
              : `${score} out of ${total} classified correctly (${percentage}%). Review the three layers above and give it another run — the distinctions get clearer with practice.`}
          </p>
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors"
          >
            {passed ? 'Run it again' : 'Try again'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4 flex items-center justify-between">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
            Interactive Exercise
          </span>
          <h3 className="text-white font-heading font-bold text-lg mt-0.5">Layer Classifier</h3>
        </div>
        <span className="text-sm font-heading text-white/60">
          {currentIndex + 1} of {SCENARIOS.length}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        {/* Progress dots */}
        <div className="flex gap-1.5 mb-5">
          {SCENARIOS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i < results.length
                  ? results[i]
                    ? 'bg-success'
                    : 'bg-warning'
                  : i === currentIndex
                    ? 'bg-navy'
                    : 'bg-n100'
              }`}
            />
          ))}
        </div>

        {/* Scenario */}
        <div className="bg-n50 rounded-lg p-5 mb-6 border border-n100">
          <p className="text-n900 text-[0.95rem] leading-relaxed">{scenario.text}</p>
        </div>

        {/* Prompt */}
        <p className="font-heading font-semibold text-n700 text-sm mb-3">
          Which layer does this belong to?
        </p>

        {/* Layer buttons */}
        <div className="grid sm:grid-cols-3 gap-3 mb-5">
          {(Object.keys(LAYER_INFO) as Layer[]).map((layer) => {
            const info = LAYER_INFO[layer];
            const isSelected = selectedLayer === layer;
            const isAnswer = scenario.correctLayer === layer;

            let btnStyle = `border-2 ${info.borderColor}/30 bg-white ${info.hoverBg}`;
            let textStyle = 'text-navy';

            if (submitted) {
              if (isAnswer) {
                btnStyle = `border-2 border-success bg-success/10`;
                textStyle = 'text-success';
              } else if (isSelected && !isCorrect) {
                btnStyle = `border-2 border-warning bg-warning/10`;
                textStyle = 'text-warning';
              } else {
                btnStyle = 'border-2 border-n100 bg-white opacity-50';
                textStyle = 'text-n500';
              }
            }

            return (
              <button
                key={layer}
                onClick={() => handleSelect(layer)}
                disabled={submitted}
                className={`px-4 py-3 rounded-lg text-sm font-heading font-semibold transition-all ${btnStyle} ${textStyle} ${
                  submitted ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                {/* Color indicator dot */}
                <span
                  className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    submitted
                      ? isAnswer
                        ? 'bg-success'
                        : isSelected && !isCorrect
                          ? 'bg-warning'
                          : 'bg-n300'
                      : info.bgColor
                  }`}
                />
                {info.label}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        <div aria-live="polite" aria-atomic="true">
        {submitted && (
          <div
            role="alert"
            className={`p-4 rounded-lg mb-5 animate-fade-in ${
              isCorrect ? 'bg-success/10 border border-success/20' : 'bg-warning/10 border border-warning/20'
            }`}
          >
            <p
              className="font-heading font-semibold text-sm mb-1"
              style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-warning)' }}
            >
              {isCorrect ? 'Exactly.' : 'Not quite.'}
            </p>
            <p className="text-n700 text-sm leading-relaxed">{scenario.explanation}</p>
          </div>
        )}
        </div>

        {/* Next button */}
        {submitted && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-5 py-2 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors"
            >
              {currentIndex < SCENARIOS.length - 1 ? 'Next scenario' : 'See results'}
            </button>
          </div>
        )}

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
