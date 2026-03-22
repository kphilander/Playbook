import { useState } from 'react';

interface Option {
  id: string;
  text: string;
  feedback: string;
  isCorrect: boolean;
}

interface Scenario {
  id: number;
  title: string;
  situation: string;
  options: Option[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: 'The Deposit Limit Increase',
    situation:
      'A Recreational player has requested to increase their deposit limit for the third time in two weeks. Their session lengths have also doubled.',
    options: [
      {
        id: 'a',
        text: 'Approve the increase with no additional messaging — they have the right to set their own limits',
        feedback:
          'Players do have the right to set limits. But repeated rapid increases combined with longer sessions are behavioral indicators. Approving silently misses a Tier 2 touchpoint.',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Block the increase entirely — this pattern suggests a problem',
        feedback:
          'Blocking the increase is paternalistic and removes player agency. The Informed Choice model equips players with information, not restrictions.',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Approve the increase but surface a warm, non-judgmental check-in: "We noticed you have been adjusting your limits. Here is your activity for the last 2 weeks — want to review it?"',
        feedback:
          'This is the Playbook approach. Approve (respect autonomy), but use the moment to surface activity data. Warm/Direct tone. Non-judgmental. Information-first. The player decides what to do with it.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 2,
    title: 'The First-Time Sports Bettor',
    situation:
      'A New/Novice player has just made their first deposit on your sports betting platform. They are browsing parlay markets.',
    options: [
      {
        id: 'a',
        text: 'Show a popup warning about the dangers of parlays',
        feedback:
          'A warning popup during their first session is intrusive and fear-based. It is not the Playbook approach.',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Display a contextual content card: "Parlay math 101 — each leg multiplies the house edge. Here is how it works." with a link to the content hub',
        feedback:
          'This is Informed Choice at a natural moment. The player is browsing parlays — show them how parlay math works. Educational, not cautionary. Confident/Informative tone.',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Do nothing — let them explore and learn from experience',
        feedback:
          'Doing nothing misses the highest-impact touchpoint. New/Novice players at their first deposit have the highest receptivity to education. This is the moment.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    title: 'The Monthly Summary Email',
    situation:
      'You are writing the monthly summary email for Recreational casino players. What should it include?',
    options: [
      {
        id: 'a',
        text: 'Just their win/loss number — keep it simple',
        feedback:
          'A bare number without context can be alarming or meaningless. Playbook monthly summaries include sessions, time, spending, and tool usage — framed as "your entertainment budget at work."',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Sessions, time played, total spending, tool usage, and a content hub link — framed as their entertainment dashboard',
        feedback:
          'This is the Playbook monthly summary. Multiple data points framed as an entertainment dashboard. Confident/Informative tone. Links to content hub for ongoing engagement.',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'A detailed breakdown of every bet with win probabilities highlighted',
        feedback:
          'Too much data overwhelms Recreational players. The monthly summary should be a high-level dashboard, not a transaction log. Save detailed analytics for Enthusiast content.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    title: 'The Help Seeker',
    situation:
      'A player has navigated to your support page. They are on the self-exclusion information page.',
    options: [
      {
        id: 'a',
        text: 'Show educational content about self-exclusion statistics and research',
        feedback:
          'This is an In-Crisis/Help Seeker touchpoint. They do not need education — they need a pathway to help. Every word of content between them and the action button is a barrier.',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Minimize text. One clear action per screen. Phone, text, chat options visible. "Free. Confidential. No judgment."',
        feedback:
          'Speed, clarity, zero friction. This is Tier 2 territory. One action per screen. Every extra word is a barrier. Warm/Direct — no humor, no cleverness.',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Offer a quiz to help them assess whether self-exclusion is right for them',
        feedback:
          'A quiz is absolutely wrong here. The player has already decided to seek help. Adding a decision-making quiz creates friction and second-guessing at the worst possible moment.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    title: 'The Campaign Timing',
    situation:
      'Your team wants to launch the "Beat the House?" myth-busting campaign during the Champions League final week.',
    options: [
      {
        id: 'a',
        text: 'Go for it — more players are active during major events, so more eyeballs on the campaign',
        feedback:
          'Major sporting events are peak gambling periods. Launching a myth-busting campaign competes with commercial messaging and can feel tone-deaf when excitement is highest.',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Launch the campaign the week AFTER the final — players are still engaged but the peak commercial noise has subsided',
        feedback:
          'Post-event is ideal. Players are still engaged, the commercial noise drops, and the campaign can reference real examples from the event. "Remember those parlays everyone was sharing? Here is what the math actually said."',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Cancel the campaign — myth-busting during a sporting event is inappropriate',
        feedback:
          'The campaign does not need to be cancelled — just timed well. Playbook scheduling guidelines recommend avoiding launch during peak events, but the content itself is always relevant.',
        isCorrect: false,
      },
    ],
  },
];

export default function DecisionScenario() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [scores, setScores] = useState<boolean[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const scenario = SCENARIOS[currentIndex];

  const handleSelect = (optionId: string) => {
    if (showFeedback) return;
    setSelectedOption(optionId);
    setShowFeedback(true);
    const option = scenario.options.find((o) => o.id === optionId);
    setScores((prev) => [...prev, option?.isCorrect ?? false]);
  };

  const handleNext = () => {
    if (currentIndex < SCENARIOS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScores([]);
    setIsComplete(false);
  };

  const totalCorrect = scores.filter(Boolean).length;

  const getScoreMessage = () => {
    const total = SCENARIOS.length;
    if (totalCorrect === total) return `${totalCorrect}/${total} — flawless. You are thinking like a Playbook strategist.`;
    if (totalCorrect >= 4) return `${totalCorrect}/${total} — you are thinking like a Playbook strategist.`;
    if (totalCorrect >= 3) return `${totalCorrect}/${total} — solid instincts. Review the ones you missed.`;
    return `${totalCorrect}/${total} — these scenarios are tricky. Review the feedback and try again.`;
  };

  // ── Complete screen ───────────────────────────
  if (isComplete) {
    return (
      <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
        <div className="bg-navy px-5 py-4">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
            Interactive Exercise
          </span>
          <h3 className="text-white font-heading font-bold text-lg mt-0.5">
            Journey Decision Scenarios
          </h3>
        </div>
        <div className="p-6 sm:p-8 text-center">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
              totalCorrect >= 4 ? 'bg-success/10 text-success' : 'bg-teal/10 text-teal-dark'
            }`}
          >
            <span className="text-3xl font-heading font-bold">
              {totalCorrect}/{SCENARIOS.length}
            </span>
          </div>
          <h4 className="text-xl font-heading font-bold text-navy mb-2">
            {getScoreMessage()}
          </h4>
          <p className="text-n600 text-sm mb-6 max-w-md mx-auto">
            Every scenario reflects a real decision operators face. The Playbook approach always balances player autonomy with timely information.
          </p>
          {/* Per-scenario summary */}
          <div className="max-w-sm mx-auto mb-6 space-y-2">
            {SCENARIOS.map((s, i) => (
              <div
                key={s.id}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-left text-sm ${
                  scores[i] ? 'bg-success/5' : 'bg-warning/5'
                }`}
              >
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    scores[i]
                      ? 'bg-success text-white'
                      : 'bg-warning text-navy'
                  }`}
                >
                  {scores[i] ? (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </span>
                <span className="font-heading font-semibold text-navy">{s.title}</span>
              </div>
            ))}
          </div>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-orange text-navy font-heading font-semibold rounded-lg hover:bg-orange-light transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // ── Active scenario ───────────────────────────
  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4 flex items-center justify-between">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
            Interactive Exercise
          </span>
          <h3 className="text-white font-heading font-bold text-lg mt-0.5">
            Journey Decision Scenarios
          </h3>
        </div>
        <span className="text-sm text-n300 font-heading">
          {currentIndex + 1} / {SCENARIOS.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="flex">
        {SCENARIOS.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1 transition-all ${
              i < currentIndex
                ? scores[i]
                  ? 'bg-success'
                  : 'bg-warning'
                : i === currentIndex
                  ? 'bg-teal'
                  : 'bg-n100'
            }`}
          />
        ))}
      </div>

      <div className="p-5 sm:p-6">
        {/* Scenario */}
        <h4 className="font-heading font-bold text-navy text-lg mb-3">
          {scenario.title}
        </h4>
        <div className="mb-5 p-4 bg-n50 rounded-lg">
          <p className="text-n700 leading-relaxed">{scenario.situation}</p>
        </div>

        {/* Options */}
        <p className="text-sm font-heading font-semibold text-n700 mb-3">
          What is the right call?
        </p>
        <div className="space-y-3 mb-5">
          {scenario.options.map((option) => {
            const isSelected = selectedOption === option.id;
            let borderStyle = 'border-n100 hover:border-teal hover:bg-teal/5';
            let cursor = 'cursor-pointer';

            if (showFeedback) {
              cursor = 'cursor-default';
              if (option.isCorrect) {
                borderStyle = 'border-success/40 bg-success/5';
              } else if (isSelected && !option.isCorrect) {
                borderStyle = 'border-warning/40 bg-warning/5';
              } else {
                borderStyle = 'border-n100 opacity-50';
              }
            } else if (isSelected) {
              borderStyle = 'border-teal bg-teal/5';
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={showFeedback}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm ${borderStyle} ${cursor}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-heading font-bold mt-0.5 ${
                      showFeedback && option.isCorrect
                        ? 'bg-success text-white'
                        : showFeedback && isSelected && !option.isCorrect
                          ? 'bg-warning text-navy'
                          : 'border-2 border-n300 text-n500'
                    }`}
                  >
                    {showFeedback && option.isCorrect ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : showFeedback && isSelected && !option.isCorrect ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      option.id.toUpperCase()
                    )}
                  </span>
                  <span className="font-heading font-semibold text-navy">{option.text}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback panel */}
        {showFeedback && selectedOption && (
          <div className="animate-fade-in mb-5">
            {(() => {
              const selected = scenario.options.find((o) => o.id === selectedOption);
              if (!selected) return null;
              const isCorrect = selected.isCorrect;
              return (
                <div
                  className={`p-4 rounded-lg border-2 ${
                    isCorrect
                      ? 'border-success/30 bg-success/5'
                      : 'border-warning/30 bg-warning/5'
                  }`}
                >
                  <p
                    className="font-heading font-bold text-sm mb-2"
                    style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-warning)' }}
                  >
                    {isCorrect ? 'Sharp call.' : 'Not quite.'}
                  </p>
                  <p className="text-n700 text-sm leading-relaxed">{selected.feedback}</p>
                </div>
              );
            })()}
          </div>
        )}

        {/* Next button */}
        {showFeedback && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors"
            >
              {currentIndex < SCENARIOS.length - 1 ? (
                <>Next Scenario &rarr;</>
              ) : (
                'See Results'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
