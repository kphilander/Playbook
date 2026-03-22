import { useState } from 'react';

interface Scenario {
  id: string;
  description: string;
  context: string;
  correctSegment: string;
  correctVertical: string;
  recommendedTone: string;
  sampleMessage: string;
  explanation: string;
}

interface Props {
  scenarios: Scenario[];
}

export default function ScenarioCard({ scenarios }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState('');
  const [selectedVertical, setSelectedVertical] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(0);

  const segments = [
    'New/Novice',
    'Recreational',
    'Enthusiast',
    'At-Risk',
    'In-Crisis',
    'Friends & Family',
  ];

  const verticals = ['Sports', 'Casino', 'Lottery', 'Poker', 'Bingo', 'General'];

  const scenario = scenarios[currentIndex];

  const handleReveal = () => {
    if (!selectedSegment || !selectedVertical) return;
    setRevealed(true);
    const segmentCorrect = selectedSegment === scenario.correctSegment;
    const verticalCorrect = selectedVertical === scenario.correctVertical;
    if (segmentCorrect && verticalCorrect) {
      setScore(score + 1);
    }
    setCompleted(completed + 1);
  };

  const handleNext = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedSegment('');
      setSelectedVertical('');
      setRevealed(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedSegment('');
    setSelectedVertical('');
    setRevealed(false);
    setScore(0);
    setCompleted(0);
  };

  const isLastScenario = currentIndex === scenarios.length - 1;
  const allDone = revealed && isLastScenario;

  return (
    <div className="my-8 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      <div className="bg-navy p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-heading font-bold text-white">Scenario Practice</h3>
          <span className="text-sm text-n300">
            {currentIndex + 1} of {scenarios.length}
            {completed > 0 && <span className="ml-2 text-teal">{score}/{completed} correct</span>}
          </span>
        </div>
        {/* Progress bar */}
        <div className="flex gap-1 mt-3">
          {scenarios.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-all ${
                i < currentIndex ? 'bg-teal' : i === currentIndex ? 'bg-white' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Scenario description */}
        <div className="mb-4 p-3 bg-n50 rounded-lg">
          <p className="text-n900 font-medium">{scenario.description}</p>
          <p className="text-sm text-n500 mt-2">{scenario.context}</p>
        </div>

        {!revealed && (
          <>
            {/* Segment selection */}
            <div className="mb-4">
              <label className="block text-sm font-heading font-semibold text-navy mb-2">
                Which relationship segment?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {segments.map((seg) => (
                  <button
                    key={seg}
                    onClick={() => setSelectedSegment(seg)}
                    className={`px-3 py-2 rounded-lg border-2 text-sm transition-all ${
                      selectedSegment === seg
                        ? 'border-teal bg-teal/5 text-navy font-medium'
                        : 'border-n100 hover:border-n300 text-n700'
                    }`}
                  >
                    {seg}
                  </button>
                ))}
              </div>
            </div>

            {/* Vertical selection */}
            <div className="mb-5">
              <label className="block text-sm font-heading font-semibold text-navy mb-2">
                Which product vertical?
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {verticals.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVertical(v)}
                    className={`px-3 py-2 rounded-lg border-2 text-sm transition-all ${
                      selectedVertical === v
                        ? 'border-teal bg-teal/5 text-navy font-medium'
                        : 'border-n100 hover:border-n300 text-n700'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleReveal}
              disabled={!selectedSegment || !selectedVertical}
              className="w-full px-5 py-3 bg-navy text-white font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Check my answer
            </button>
          </>
        )}

        {revealed && (
          <div className="space-y-4">
            {/* Result */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                className={`p-3 rounded-lg border-2 ${
                  selectedSegment === scenario.correctSegment
                    ? 'border-success bg-success/5'
                    : 'border-warning bg-warning/5'
                }`}
              >
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-n500">
                  Segment
                </span>
                <p className="font-heading font-semibold text-navy mt-1">
                  {selectedSegment === scenario.correctSegment ? (
                    <span className="text-success">{selectedSegment} ✓</span>
                  ) : (
                    <>
                      <span className="text-warning line-through">{selectedSegment}</span>
                      <span className="text-success ml-2">→ {scenario.correctSegment}</span>
                    </>
                  )}
                </p>
              </div>
              <div
                className={`p-3 rounded-lg border-2 ${
                  selectedVertical === scenario.correctVertical
                    ? 'border-success bg-success/5'
                    : 'border-warning bg-warning/5'
                }`}
              >
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-n500">
                  Vertical
                </span>
                <p className="font-heading font-semibold text-navy mt-1">
                  {selectedVertical === scenario.correctVertical ? (
                    <span className="text-success">{selectedVertical} ✓</span>
                  ) : (
                    <>
                      <span className="text-warning line-through">{selectedVertical}</span>
                      <span className="text-success ml-2">→ {scenario.correctVertical}</span>
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Explanation */}
            <div className="p-4 bg-n50 rounded-lg">
              <p className="text-sm text-n700 mb-2">{scenario.explanation}</p>
              <div className="mt-3 pt-3 border-t border-n100">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-n500">
                  Recommended tone
                </span>
                <p className="text-sm font-medium text-navy mt-1">{scenario.recommendedTone}</p>
              </div>
              <div className="mt-3 pt-3 border-t border-n100">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-n500">
                  Sample message
                </span>
                <p className="text-sm text-n700 mt-1 italic">"{scenario.sampleMessage}"</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              {allDone ? (
                <div className="w-full text-center">
                  <p className="font-heading font-bold text-navy text-lg mb-2">
                    Exercise complete! {score}/{scenarios.length} scenarios correct.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 text-sm text-n500 hover:text-navy transition-colors underline"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleNext}
                  className="ml-auto px-5 py-3 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors"
                >
                  Next scenario →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
