import { useState, useEffect, useRef } from 'react';

interface RubricItem {
  label: string;
  description: string;
}

interface Props {
  title: string;
  prompt: string;
  context?: string;
  rubric: RubricItem[];
  modelAnswer: string;
  placeholder?: string;
}

export default function GenerativeExercise({
  title,
  prompt,
  context,
  rubric,
  modelAnswer,
  placeholder = 'Write your response here...',
}: Props) {
  const storageKey = `playbook-exercise-${title.replace(/\s+/g, '-').toLowerCase()}`;

  const [text, setText] = useState(() => {
    if (typeof window === 'undefined') return '';
    try { return localStorage.getItem(storageKey) || ''; } catch { return ''; }
  });
  const [showModel, setShowModel] = useState(false);
  const [selfChecks, setSelfChecks] = useState<boolean[]>(() => rubric.map(() => false));
  const [submitted, setSubmitted] = useState(false);
  const exerciseCompleteDispatched = useRef(false);

  // Persist draft text to localStorage
  useEffect(() => {
    if (typeof window === 'undefined' || submitted) return;
    try { localStorage.setItem(storageKey, text); } catch {}
  }, [text, submitted, storageKey]);

  const checkedCount = selfChecks.filter(Boolean).length;
  const allChecked = checkedCount === rubric.length;

  useEffect(() => {
    if (submitted && allChecked && !exerciseCompleteDispatched.current) {
      exerciseCompleteDispatched.current = true;
      window.dispatchEvent(new CustomEvent('exercise-complete'));
    }
  }, [submitted, allChecked]);

  // Reset guard on unmount only (not on every dependency change)
  useEffect(() => {
    return () => { exerciseCompleteDispatched.current = false; };
  }, []);

  const handleCheck = (i: number) => {
    setSelfChecks((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const MIN_WORDS = 30;

  const handleSubmit = () => {
    if (wordCount < MIN_WORDS) return;
    setSubmitted(true);
  };

  const handleRetry = () => {
    setText('');
    setShowModel(false);
    setSelfChecks(rubric.map(() => false));
    setSubmitted(false);
    exerciseCompleteDispatched.current = false;
    try { localStorage.removeItem(storageKey); } catch {}
  };

  return (
    <div className="my-10 rounded-xl border border-n100 dark:border-navy-light bg-white dark:bg-navy shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Writing Exercise
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">{title}</h3>
      </div>

      <div className="p-5 sm:p-6">
        {/* Context */}
        {context && (
          <div className="rounded-lg bg-n50 border border-n100 p-4 mb-5">
            <p className="text-sm text-n700 leading-relaxed">{context}</p>
          </div>
        )}

        {/* Prompt */}
        <p className="font-heading font-semibold text-navy mb-4">{prompt}</p>

        {/* Text area */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={submitted}
          placeholder={placeholder}
          rows={5}
          className={`w-full rounded-lg border-2 p-4 text-sm leading-relaxed font-body resize-y transition-colors ${
            submitted
              ? 'border-n100 bg-n50 text-n700 cursor-default'
              : 'border-n100 bg-white text-n900 focus:border-teal focus:ring-1 focus:ring-teal/30'
          }`}
          aria-label={prompt}
        />

        {/* Word count */}
        <div className="flex items-center justify-between mt-2 mb-5">
          <span className={`text-xs font-heading ${wordCount >= MIN_WORDS ? 'text-success' : 'text-n400'}`}>
            {wordCount} / {MIN_WORDS} words minimum
          </span>
          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={wordCount < MIN_WORDS}
              className="px-5 py-2.5 bg-navy text-white font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
            >
              Submit &amp; self-evaluate
            </button>
          )}
        </div>

        {/* Self-evaluation rubric */}
        {submitted && (
          <div aria-live="polite">
            <div className="rounded-lg border border-n100 p-5 mb-5">
              <p className="font-heading font-semibold text-navy text-sm mb-3">
                Self-evaluate your response:
              </p>
              <div className="space-y-3">
                {rubric.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selfChecks[i]}
                      onChange={() => handleCheck(i)}
                      className="mt-0.5 w-5 h-5 rounded border-2 border-n300 text-teal accent-[#00D4AA] flex-shrink-0"
                    />
                    <div>
                      <span className="text-sm font-heading font-semibold text-navy block">
                        {item.label}
                      </span>
                      <span className="text-xs text-n500">{item.description}</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* Score */}
              <div className="mt-4 pt-3 border-t border-n100 flex items-center justify-between">
                <span className="text-sm font-heading text-n500">
                  {checkedCount} of {rubric.length} criteria met
                </span>
                {allChecked && (
                  <span className="text-sm font-heading font-bold text-teal-text animate-fade-in">
                    All criteria met.
                  </span>
                )}
              </div>
            </div>

            {/* Model answer toggle */}
            <div className="mb-4">
              <button
                onClick={() => setShowModel(!showModel)}
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-navy-light hover:text-navy transition-colors"
                aria-expanded={showModel}
              >
                <svg
                  className={`w-4 h-4 transition-transform ${showModel ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {showModel ? 'Hide model answer' : 'Compare with model answer'}
              </button>

              {showModel && (
                <div className="mt-3 rounded-lg bg-teal/5 border border-teal/20 p-4 animate-fade-in">
                  <p className="text-xs font-heading font-bold uppercase tracking-wider text-teal-text mb-2">
                    Model Answer
                  </p>
                  <p className="text-sm text-n700 leading-relaxed whitespace-pre-line">
                    {modelAnswer}
                  </p>
                </div>
              )}
            </div>

            {/* Try again */}
            <button
              onClick={handleRetry}
              className="text-sm font-heading font-semibold text-n500 hover:text-navy transition-colors"
            >
              Try again with a different approach
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
