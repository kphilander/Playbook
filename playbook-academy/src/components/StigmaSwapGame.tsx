import { useState, useEffect, useRef } from 'react';

interface Swap {
  id: number;
  dontWrite: string;
  writeInstead: string;
  explanation: string;
}

const SWAPS: Swap[] = [
  { id: 1, dontWrite: 'Problem gambler', writeInstead: 'Player', explanation: '"Player" is inclusive. "Problem gambler" is a diagnostic label.' },
  { id: 2, dontWrite: 'Responsible gambling', writeInstead: 'Set a budget / Know the odds / Check your session', explanation: 'Specific actions beat generic labels.' },
  { id: 3, dontWrite: 'Gambler', writeInstead: 'Player', explanation: '"Player" emphasizes agency and entertainment.' },
  { id: 4, dontWrite: 'Gambling addiction', writeInstead: 'Difficulty with gambling', explanation: 'Lower barrier, non-diagnostic. Describe, don\'t label.' },
  { id: 5, dontWrite: 'Self-exclude', writeInstead: 'Take a break / Pause your account', explanation: '"Pause" is temporary and empowered. "Self-exclude" sounds permanent.' },
  { id: 6, dontWrite: 'Intervention', writeInstead: 'Feature / Tool', explanation: 'Tools are things you choose to use. Interventions are done to you.' },
  { id: 7, dontWrite: 'Reality check', writeInstead: 'Session reminder', explanation: '"Reminder" is helpful. "Reality check" implies you\'ve lost touch.' },
  { id: 8, dontWrite: 'You should', writeInstead: 'You can', explanation: 'Agency framing. "You can" respects choice.' },
  { id: 9, dontWrite: 'WARNING', writeInstead: 'Heads up', explanation: 'Conversational, not alarming.' },
  { id: 10, dontWrite: 'Odds are against you', writeInstead: 'The house edge is [specific number]', explanation: 'Factual and educational, not alarming.' },
];

/** Fisher-Yates shuffle */
function shuffleSwaps(swaps: Swap[]): Swap[] {
  const s = [...swaps];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

export default function StigmaSwapGame() {
  const [shuffledSwaps] = useState(() => shuffleSwaps(SWAPS));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const exerciseCompleteDispatched = useRef(false);

  useEffect(() => {
    if (isComplete && !exerciseCompleteDispatched.current) {
      exerciseCompleteDispatched.current = true;
      window.dispatchEvent(new CustomEvent('exercise-complete'));
    }
  }, [isComplete]);

  const swap = shuffledSwaps[currentIndex];

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleNext = () => {
    if (currentIndex < SWAPS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setRevealed(false);
    } else {
      setIsComplete(true);
    }
  };

  if (isComplete) {
    return (
      <div className="my-6 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
        <div className="bg-navy px-4 py-3">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Interactive Exercise</span>
          <h3 className="text-white font-heading font-bold text-sm mt-0.5">Stigma-Free Swap Game</h3>
        </div>
        <div className="p-4 sm:p-5">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/10 text-success mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-navy font-heading font-bold">All 10 swaps complete</p>
            <p className="text-xs text-n500 mt-0.5">Quick-reference summary:</p>
          </div>
          <div className="space-y-1">
            {SWAPS.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-2 py-2 px-2.5 rounded-lg bg-n50/50 border border-n100/50"
              >
                <span className="text-xs font-heading font-bold text-n400 w-4 flex-shrink-0">{s.id}</span>
                <span className="text-xs text-danger line-through flex-1 min-w-0">{s.dontWrite}</span>
                <svg className="w-3.5 h-3.5 text-teal flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className="text-xs font-semibold text-navy flex-1 min-w-0">{s.writeInstead}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => { setCurrentIndex(0); setRevealed(false); setIsComplete(false); exerciseCompleteDispatched.current = false; }}
              className="px-5 py-2.5 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors text-sm"
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-4 py-3 flex items-center justify-between">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Interactive Exercise</span>
          <h3 className="text-white font-heading font-bold text-sm mt-0.5">Stigma-Free Swap Game</h3>
        </div>
        <div className="flex items-center gap-1">
          {SWAPS.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < currentIndex ? 'bg-success' : i === currentIndex ? 'bg-teal' : 'bg-navy-light'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Don't write — always visible */}
        <div className={`rounded-lg overflow-hidden border-2 mb-3 ${revealed ? 'border-n100' : 'border-danger/20'}`}>
          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch">
            {/* Don't write side */}
            <div className="bg-danger/5 px-4 py-3">
              <p className="text-xs font-heading font-semibold uppercase tracking-wider text-danger/70 mb-1">Don't write</p>
              <p className="font-heading font-bold text-navy line-through decoration-danger/40">{swap.dontWrite}</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center px-2 bg-white">
              {revealed ? (
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              ) : (
                <span className="text-n300 text-lg font-bold">?</span>
              )}
            </div>

            {/* Write instead side */}
            <div className={`px-4 py-3 ${revealed ? 'bg-success/5' : 'bg-n50'}`}>
              {revealed ? (
                <>
                  <p className="text-xs font-heading font-semibold uppercase tracking-wider text-success/70 mb-1">Write instead</p>
                  <p className="font-heading font-bold text-navy">{swap.writeInstead}</p>
                </>
              ) : (
                <button
                  onClick={handleReveal}
                  className="w-full h-full flex items-center justify-center text-sm font-heading font-semibold text-teal-dark hover:text-teal transition-colors"
                >
                  Tap to reveal
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Explanation + Next — only when revealed */}
        <div aria-live="polite" aria-atomic="true">
        {revealed && (
          <div className="flex items-start gap-3">
            <p className="text-sm text-n700 leading-relaxed flex-1">{swap.explanation}</p>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors text-sm flex-shrink-0"
            >
              {currentIndex < SWAPS.length - 1 ? 'Next' : 'Done'}
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
