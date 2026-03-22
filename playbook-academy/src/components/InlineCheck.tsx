import { useState } from 'react';

const correctResponses = ["Nailed it.", "That's the one.", "Exactly.", "You've got it.", "Spot on."];

interface Props {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  intro?: string;
}

export default function InlineCheck({ question, options, correctIndex, explanation, intro }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = selected === correctIndex;

  const handleSelect = (index: number) => {
    if (submitted) return;
    setSelected(index);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <div className="my-8 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      <div className="bg-navy/5 px-5 py-3 border-b border-n100">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-navy/60">
          Gut check
        </span>
      </div>
      <div className="p-5">
        {intro && <p className="text-sm text-n500 mb-3 italic">{intro}</p>}
        <p className="font-heading font-semibold text-navy mb-4">{question}</p>

        <div className="space-y-2 mb-4">
          {options.map((option, i) => {
            let style = 'border-n100 hover:border-n300 bg-white';

            if (submitted) {
              if (i === correctIndex) {
                style = 'border-success bg-success/5';
              } else if (i === selected && !isCorrect) {
                style = 'border-warning bg-warning/5';
              } else {
                style = 'border-n100 bg-white opacity-60';
              }
            } else if (i === selected) {
              style = 'border-navy bg-navy/5';
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={submitted}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm ${style} ${
                  submitted ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <span className="text-n900">{option}</span>
              </button>
            );
          })}
        </div>

        {submitted && (
          <div
            className={`p-4 rounded-lg mb-4 ${
              isCorrect
                ? 'bg-success/10 border border-success/20'
                : 'bg-warning/10 border border-warning/20'
            }`}
          >
            <p
              className="font-heading font-semibold text-sm mb-1"
              style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-warning)' }}
            >
              {isCorrect ? correctResponses[correctIndex % correctResponses.length] : 'Not quite —'}
            </p>
            <p className="text-n700 text-sm">{explanation}</p>
          </div>
        )}

        <div className="flex justify-end gap-3">
          {submitted ? (
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm text-n500 hover:text-navy transition-colors underline"
            >
              Try another
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="px-5 py-2 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Lock it in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
