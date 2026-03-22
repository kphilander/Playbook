import { useState, useRef } from 'react';
import { saveProgress } from '../lib/progress';
import CelebrationOverlay from './CelebrationOverlay';

/** Play a short reinforcement tone using Web Audio API — no external files needed */
function playTone(type: 'correct' | 'incorrect') {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const gain = ctx.createGain();
    gain.connect(ctx.destination);

    if (type === 'correct') {
      // Rising two-note chime (C5 → E5)
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523, ctx.currentTime); // C5
      osc1.connect(gain);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.15);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(659, ctx.currentTime + 0.12); // E5
      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0.15, ctx.currentTime + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      gain2.connect(ctx.destination);
      osc2.connect(gain2);
      osc2.start(ctx.currentTime + 0.12);
      osc2.stop(ctx.currentTime + 0.5);

      setTimeout(() => ctx.close(), 600);
    } else {
      // Single low tone (E3)
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(165, ctx.currentTime); // E3
      osc.connect(gain);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);

      setTimeout(() => ctx.close(), 450);
    }
  } catch {
    // Audio not available — fail silently
  }
}

const correctResponses = [
  "Nailed it.",
  "That's the one.",
  "Exactly right.",
  "You've got it.",
  "Sharp. Dead on.",
];

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  reviewSlug?: string;
}

interface Props {
  moduleId: string;
  questions: Question[];
  passingScore?: number; // percentage, default 80
  nextModuleHref?: string; // URL to the next module for post-pass CTA
  nextModuleTitle?: string; // Display title for the next module
}

/** Fisher-Yates shuffle */
function shuffle<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

/** Shuffle questions AND their answer options, updating correctIndex to match */
function shuffleQuestions(qs: Question[]): Question[] {
  return shuffle(qs).map((q) => {
    const indices = q.options.map((_, i) => i);
    const shuffledIndices = shuffle(indices);
    return {
      ...q,
      options: shuffledIndices.map((i) => q.options[i]),
      correctIndex: shuffledIndices.indexOf(q.correctIndex),
    };
  });
}

export default function KnowledgeCheck({ moduleId, questions, passingScore = 80, nextModuleHref, nextModuleTitle }: Props) {
  const [shuffledQuestions, setShuffledQuestions] = useState(() => shuffleQuestions(questions));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(shuffledQuestions.length).fill(null));
  const [isComplete, setIsComplete] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const q = shuffledQuestions[currentQuestion];
  const isCorrect = selectedAnswer === q.correctIndex;

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowFeedback(true);
    playTone(selectedAnswer === q.correctIndex ? 'correct' : 'incorrect');
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz complete
      const correctCount = answers.reduce((acc, a, i) => {
        // Use the latest answer for current question
        const answer = i === currentQuestion ? selectedAnswer : a;
        return acc + (answer === shuffledQuestions[i].correctIndex ? 1 : 0);
      }, 0);
      const score = Math.round((correctCount / shuffledQuestions.length) * 100);
      const passed = score >= passingScore;

      saveProgress(moduleId, {
        quizScore: score,
        completed: passed,
      });
      if (passed) {
        setShowCelebration(true);
      }
      setIsComplete(true);
    }
  };

  const score = (() => {
    const correctCount = answers.reduce((acc, a, i) => {
      const answer = i === currentQuestion ? selectedAnswer : a;
      return acc + (answer === shuffledQuestions[i].correctIndex ? 1 : 0);
    }, 0);
    return Math.round((correctCount / shuffledQuestions.length) * 100);
  })();

  // Compute missed questions for review
  const missedQuestions = answers
    .map((a, i) => ({ index: i, answer: a, correct: shuffledQuestions[i].correctIndex }))
    .filter((item) => item.answer !== item.correct);

  if (isComplete && reviewMode && missedQuestions.length > 0) {
    const missed = missedQuestions[reviewIndex];
    const rq = shuffledQuestions[missed.index];
    return (
      <div className="bg-white rounded-xl shadow-sm border border-n100 p-8 w-full">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-n500 font-heading">
            Reviewing {reviewIndex + 1} of {missedQuestions.length} missed
          </span>
          <button
            onClick={() => { setReviewMode(false); setReviewIndex(0); }}
            className="text-sm text-n500 hover:text-navy font-heading transition-colors"
          >
            Back to results
          </button>
        </div>

        <p className="text-xl font-heading font-semibold text-navy mb-6">{rq.question}</p>

        <div className="space-y-3 mb-6">
          {rq.options.map((option, i) => {
            let borderColor = 'border-n100';
            let bgColor = 'bg-white';

            if (i === rq.correctIndex) {
              borderColor = 'border-success';
              bgColor = 'bg-success/5';
            } else if (i === missed.answer) {
              borderColor = 'border-warning';
              bgColor = 'bg-warning/5';
            }

            return (
              <div
                key={i}
                className={`p-4 rounded-lg border-2 ${borderColor} ${bgColor}`}
              >
                <div className="flex items-center gap-2">
                  {i === rq.correctIndex && (
                    <svg className="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {i === missed.answer && i !== rq.correctIndex && (
                    <svg className="w-4 h-4 text-warning shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <span className="text-n900">{option}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-lg bg-info/5 border border-info/20 mb-6">
          <p className="text-n700 text-sm">{rq.explanation}</p>
          {rq.reviewSlug && (
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('lesson-navigate', { detail: { slug: rq.reviewSlug } }));
                setTimeout(() => {
                  const el = document.getElementById(rq.reviewSlug!);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 200);
              }}
              className="mt-2 inline-flex items-center gap-1 text-sm text-navy-light hover:text-navy underline transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Review this section
            </button>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setReviewIndex(Math.max(0, reviewIndex - 1))}
            disabled={reviewIndex === 0}
            className="px-4 py-2 text-sm text-n500 font-heading hover:text-navy transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {reviewIndex < missedQuestions.length - 1 ? (
            <button
              onClick={() => setReviewIndex(reviewIndex + 1)}
              className="px-6 py-3 bg-navy text-white font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors"
            >
              Next missed question
            </button>
          ) : (
            <button
              onClick={() => { setReviewMode(false); setReviewIndex(0); }}
              className="px-6 py-3 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors"
            >
              Done reviewing
            </button>
          )}
        </div>
      </div>
    );
  }

  if (isComplete) {
    const passed = score >= passingScore;
    return (
      <>
      <CelebrationOverlay show={showCelebration} onComplete={() => setShowCelebration(false)} />
      <div className="bg-white rounded-xl shadow-sm border border-n100 p-8 w-full">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
            passed ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
          }`}>
            <span className="text-3xl font-heading font-bold">{score}%</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-navy mb-2">
            {passed ? 'You nailed it. Module complete.' : 'Almost there'}
          </h3>
          <p className="text-n700 mb-6">
            {passed
              ? `Your score: ${score}%. You've got this down. Module complete.`
              : `Your score: ${score}%. You need ${passingScore}% to mark this module complete. Close — but not quite there. Review the material and give it another go.`
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {missedQuestions.length > 0 && (
              <button
                onClick={() => { setReviewMode(true); setReviewIndex(0); }}
                className="px-6 py-3 bg-navy/5 text-navy font-heading font-semibold rounded-lg hover:bg-navy/10 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Review {missedQuestions.length} missed
              </button>
            )}
            {!passed && (
              <button
                onClick={() => {
                  const reshuffled = shuffleQuestions(questions);
                  setShuffledQuestions(reshuffled);
                  setCurrentQuestion(0);
                  setSelectedAnswer(null);
                  setShowFeedback(false);
                  setAnswers(new Array(reshuffled.length).fill(null));
                  setIsComplete(false);
                  setReviewMode(false);
                  setReviewIndex(0);
                }}
                className="px-6 py-3 bg-orange text-navy font-heading font-semibold rounded-lg hover:bg-orange-light transition-colors"
              >
                Give it another go
              </button>
            )}
          </div>
          {passed && nextModuleHref && (
            <div className="mt-8 pt-6 border-t border-n100">
              <a
                href={nextModuleHref}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-teal text-navy font-heading font-bold rounded-lg hover:bg-teal-light transition-colors text-lg"
              >
                Continue to {nextModuleTitle || 'Next Module'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
      </>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-n100 p-8 w-full">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-n500 font-heading">
          Question {currentQuestion + 1} of {shuffledQuestions.length}
        </span>
        <div className="flex gap-1.5" role="group" aria-label="Question progress">
          {shuffledQuestions.map((_, i) => {
            const status = i < currentQuestion
              ? (answers[i] === shuffledQuestions[i].correctIndex ? 'correct' : 'incorrect')
              : i === currentQuestion ? 'current' : 'upcoming';
            return (
            <div
              key={i}
              role="img"
              aria-label={`Question ${i + 1}: ${status}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                status === 'correct' ? 'bg-success' :
                status === 'incorrect' ? 'bg-warning' :
                status === 'current' ? 'bg-navy' : 'bg-n100'
              }`}
            />
            );
          })}
        </div>
      </div>

      {/* Question */}
      <p className="text-xl font-heading font-semibold text-navy mb-6">{q.question}</p>

      {/* Options */}
      <fieldset className="space-y-3 mb-6">
        <legend className="sr-only">{q.question}</legend>
        {q.options.map((option, i) => {
          let borderColor = 'border-n100 hover:border-n300';
          let bgColor = 'bg-white';

          if (showFeedback) {
            if (i === q.correctIndex) {
              borderColor = 'border-success';
              bgColor = 'bg-success/5';
            } else if (i === selectedAnswer && !isCorrect) {
              borderColor = 'border-warning';
              bgColor = 'bg-warning/5';
            }
          } else if (i === selectedAnswer) {
            borderColor = 'border-navy';
            bgColor = 'bg-navy/5';
          }

          const inputId = `${q.id}-option-${i}`;
          return (
            <label
              key={i}
              htmlFor={inputId}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all block ${borderColor} ${bgColor} ${
                showFeedback ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <input
                type="radio"
                id={inputId}
                name={`question-${q.id}`}
                checked={selectedAnswer === i}
                onChange={() => handleSelect(i)}
                disabled={showFeedback}
                className="sr-only"
              />
              <span className="text-n900 dark:text-n100">{option}</span>
            </label>
          );
        })}
      </fieldset>

      {/* Feedback */}
      <div aria-live="polite" aria-atomic="true">
      {showFeedback && (
        <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-success/10 border border-success/20' : 'bg-warning/10 border border-warning/20'}`} role="alert">
          <p className="font-heading font-semibold mb-1" style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-warning)' }}>
            {isCorrect ? correctResponses[currentQuestion % correctResponses.length] : 'Not quite — here\'s the deal:'}
          </p>
          <p className="text-n700 text-sm">{q.explanation}</p>
          {!isCorrect && q.reviewSlug && (
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('lesson-navigate', { detail: { slug: q.reviewSlug } }));
                setTimeout(() => {
                  const el = document.getElementById(q.reviewSlug!);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 200);
              }}
              className="mt-2 inline-flex items-center gap-1 text-sm text-navy-light hover:text-navy underline transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Review this section
            </button>
          )}
        </div>
      )}
      </div>

      {/* Actions */}
      <div className="flex justify-end">
        {!showFeedback ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="px-6 py-3 bg-navy text-white font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Lock it in
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors"
          >
            {currentQuestion < shuffledQuestions.length - 1 ? 'Next one' : 'See results'}
          </button>
        )}
      </div>
    </div>
  );
}
