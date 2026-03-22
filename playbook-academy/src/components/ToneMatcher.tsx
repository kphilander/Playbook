import { useState, useEffect, useRef } from 'react';

type ToneRegister = 'playful' | 'confident' | 'warm' | 'celebratory';

interface Message {
  id: number;
  text: string;
  correctTone: ToneRegister;
  explanation: string;
}

const TONE_LABELS: Record<ToneRegister, string> = {
  playful: 'Playful / Witty',
  confident: 'Confident / Informative',
  warm: 'Warm / Direct',
  celebratory: 'Celebratory',
};

const TONE_COLORS: Record<ToneRegister, { bg: string; border: string; text: string; pill: string; hoverBg: string; hoverBorder: string }> = {
  playful: {
    bg: 'bg-orange/10',
    border: 'border-orange/30',
    text: 'text-orange',
    pill: 'bg-orange text-navy',
    hoverBg: 'hover:bg-orange/10',
    hoverBorder: 'hover:border-orange/30',
  },
  confident: {
    bg: 'bg-teal/10',
    border: 'border-teal/30',
    text: 'text-teal-dark',
    pill: 'bg-teal text-navy',
    hoverBg: 'hover:bg-teal/10',
    hoverBorder: 'hover:border-teal/30',
  },
  warm: {
    bg: 'bg-success/10',
    border: 'border-success/30',
    text: 'text-success',
    pill: 'bg-success text-white',
    hoverBg: 'hover:bg-success/10',
    hoverBorder: 'hover:border-success/30',
  },
  celebratory: {
    bg: 'bg-warning/10',
    border: 'border-warning/30',
    text: 'text-warning',
    pill: 'bg-warning text-navy',
    hoverBg: 'hover:bg-warning/10',
    hoverBorder: 'hover:border-warning/30',
  },
};

const MESSAGES: Message[] = [
  {
    id: 1,
    text: "Every slot spin is independent. The machine doesn't know — or care — what happened last time.",
    correctTone: 'confident',
    explanation: 'Factual, clear, educational. This is the Confident/Informative register — sharing how the math works without any humor or warmth.',
  },
  {
    id: 2,
    text: "You just set your first deposit limit! That's you, playing on your own terms.",
    correctTone: 'celebratory',
    explanation: "An achievement moment. The player did something good, and the content acknowledges it with restrained celebration — not confetti cannons, just genuine recognition.",
  },
  {
    id: 3,
    text: "Think you can spot the pattern? Spoiler: there isn't one. That's not a bug — it's math.",
    correctTone: 'playful',
    explanation: 'The setup-and-twist structure is classic Playful/Witty. It earns attention through humor directed at the misconception, not at the player.',
  },
  {
    id: 4,
    text: "We're here if you need us. Call, text, or chat — free, confidential, no judgment.",
    correctTone: 'warm',
    explanation: 'Warm/Direct at its purest. Short sentences, zero humor, maximum clarity. This is the support voice — present without being pushy.',
  },
  {
    id: 5,
    text: "Quiz time: What does -110 actually mean? (It's not what most people think.)",
    correctTone: 'playful',
    explanation: "The teasing parenthetical is classic Playful/Witty. It creates curiosity and implies 'you might be surprised' — earning the click through intrigue, not obligation.",
  },
];

export default function ToneMatcher() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, ToneRegister>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const exerciseCompleteDispatched = useRef(false);

  useEffect(() => {
    if (isComplete && !exerciseCompleteDispatched.current) {
      exerciseCompleteDispatched.current = true;
      window.dispatchEvent(new CustomEvent('exercise-complete'));
    }
  }, [isComplete]);

  const message = MESSAGES[currentIndex];
  const selectedTone = answers[message.id];
  const isCorrect = selectedTone === message.correctTone;

  const handleSelect = (tone: ToneRegister) => {
    if (showFeedback) return;
    setAnswers((prev) => ({ ...prev, [message.id]: tone }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < MESSAGES.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowFeedback(false);
    } else {
      setIsComplete(true);
    }
  };

  const totalCorrect = MESSAGES.reduce(
    (acc, m) => acc + (answers[m.id] === m.correctTone ? 1 : 0),
    0,
  );

  const getScoreMessage = () => {
    if (totalCorrect === MESSAGES.length) return "Perfect score. You've got the voice down cold.";
    if (totalCorrect >= 4) return `${totalCorrect}/${MESSAGES.length} — you've got an ear for this.`;
    if (totalCorrect >= 3) return `${totalCorrect}/${MESSAGES.length} — solid. A few more rounds and you'll nail it.`;
    return `${totalCorrect}/${MESSAGES.length} — the registers take practice. Review the tone spectrum and try again.`;
  };

  if (isComplete) {
    return (
      <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
        <div className="bg-navy px-5 py-4">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
            Interactive Exercise
          </span>
          <h3 className="text-white font-heading font-bold text-lg mt-0.5">Tone Matcher</h3>
        </div>
        <div className="p-6 sm:p-8 text-center">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
              totalCorrect === MESSAGES.length ? 'bg-success/10 text-success' : 'bg-teal/10 text-teal-dark'
            }`}
          >
            <span className="text-3xl font-heading font-bold">
              {totalCorrect}/{MESSAGES.length}
            </span>
          </div>
          <h4 className="text-xl font-heading font-bold text-navy mb-2">{getScoreMessage()}</h4>
          <p className="text-n600 text-sm mb-6 max-w-md mx-auto">
            Each register serves a purpose. The voice stays the same — confident, generous, never preachy. The tone shifts to match the moment.
          </p>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setAnswers({});
              setShowFeedback(false);
              setIsComplete(false);
              exerciseCompleteDispatched.current = false;
            }}
            className="px-6 py-3 bg-orange text-navy font-heading font-semibold rounded-lg hover:bg-orange-light transition-colors"
          >
            Try again
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
          <h3 className="text-white font-heading font-bold text-lg mt-0.5">Tone Matcher</h3>
        </div>
        <div className="flex items-center gap-1.5">
          {MESSAGES.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i < currentIndex
                  ? answers[MESSAGES[i].id] === MESSAGES[i].correctTone
                    ? 'bg-success'
                    : 'bg-warning'
                  : i === currentIndex
                    ? 'bg-teal'
                    : 'bg-navy-light'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {/* Progress */}
        <p className="text-sm text-n500 font-heading mb-4">
          Message {currentIndex + 1} of {MESSAGES.length}
        </p>

        {/* Message card */}
        <div className="rounded-lg border-2 border-n100 bg-n50/50 p-5 mb-5">
          <p className="text-navy font-heading font-semibold text-lg leading-relaxed">
            "{message.text}"
          </p>
        </div>

        {/* Tone buttons */}
        <p className="text-sm font-heading font-semibold text-n700 mb-3">
          What tone register is this?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5" role="radiogroup" aria-label="Select the tone register">
          {(Object.keys(TONE_LABELS) as ToneRegister[]).map((tone) => {
            const colors = TONE_COLORS[tone];
            let style = `border-2 border-n100 bg-white ${colors.hoverBg} ${colors.hoverBorder}`;

            if (showFeedback) {
              if (tone === message.correctTone) {
                style = `border-2 ${colors.border} ${colors.bg}`;
              } else if (tone === selectedTone && !isCorrect) {
                style = 'border-2 border-warning/40 bg-warning/5';
              } else {
                style = 'border-2 border-n100 bg-white opacity-50';
              }
            } else if (tone === selectedTone) {
              style = `border-2 ${colors.border} ${colors.bg}`;
            }

            return (
              <button
                key={tone}
                onClick={() => handleSelect(tone)}
                disabled={showFeedback}
                className={`px-4 py-3 rounded-lg text-sm font-heading font-semibold transition-all ${style} ${
                  showFeedback ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                {TONE_LABELS[tone]}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        <div aria-live="polite" aria-atomic="true">
        {showFeedback && (
          <div
            role="alert"
            className={`p-4 rounded-lg mb-5 ${
              isCorrect
                ? 'bg-success/10 border border-success/20'
                : 'bg-warning/10 border border-warning/20'
            }`}
          >
            <p
              className="font-heading font-semibold text-sm mb-1"
              style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-warning)' }}
            >
              {isCorrect
                ? 'Nailed it.'
                : `Not quite — this is ${TONE_LABELS[message.correctTone]}.`}
            </p>
            <p className="text-n700 text-sm">{message.explanation}</p>
          </div>
        )}
        </div>

        {/* Next button */}
        {showFeedback && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors"
            >
              {currentIndex < MESSAGES.length - 1 ? 'Next message' : 'See results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
