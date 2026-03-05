'use client';

import { useState } from 'react';
import { colors, fonts, radius } from '@/lib/brand-tokens';

interface QuizQuestion {
  stem: string;
  options: { key: string; text: string }[];
  correct: string;
  explanation: string;
}

const QUESTIONS: QuizQuestion[] = [
  {
    stem: 'What determines the outcome of a slot machine spin?',
    options: [
      { key: 'A', text: 'The number of previous losses since the last win' },
      { key: 'B', text: 'A random number generator (RNG) that produces a result the instant you press spin' },
      { key: 'C', text: 'The time of day you\'re playing' },
      { key: 'D', text: 'How much you bet on that spin' },
    ],
    correct: 'B',
    explanation: 'Every spin is determined by a random number generator. The RNG produces a result the instant you press the button \u2014 before the reels even start moving. Previous results, time of day, and bet size have no effect on the outcome.',
  },
  {
    stem: 'A slot machine has a 95% RTP (return to player). What does that mean?',
    options: [
      { key: 'A', text: 'You\'ll win 95% of your spins' },
      { key: 'B', text: 'The machine pays back 95% of all money wagered over its lifetime' },
      { key: 'C', text: 'You\'ll walk away with 95% of your starting money' },
      { key: 'D', text: '95% of players who use this machine will win' },
    ],
    correct: 'B',
    explanation: 'RTP is a long-run average across all players and all bets. A 95% RTP means the machine keeps about 5% (the house edge) and pays back 95% \u2014 but that\'s across millions of spins. In a single session, anything can happen.',
  },
  {
    stem: 'You\'ve played a slot machine for 30 minutes without a win. What are the odds of winning on the next spin?',
    options: [
      { key: 'A', text: 'Higher than when you started \u2014 the machine is "due"' },
      { key: 'B', text: 'Lower than when you started \u2014 the machine is in a cold phase' },
      { key: 'C', text: 'Exactly the same as every other spin' },
      { key: 'D', text: 'It depends on how much you bet' },
    ],
    correct: 'C',
    explanation: 'Every spin is independent. The RNG doesn\'t track how long you\'ve been playing or how much you\'ve lost. The concept of being "due" for a win is the gambler\'s fallacy.',
  },
];

export default function QuizSection() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const handleSelect = (qIndex: number, key: string) => {
    if (revealed[qIndex]) return;
    setAnswers(prev => ({ ...prev, [qIndex]: key }));
    setRevealed(prev => ({ ...prev, [qIndex]: true }));
  };

  const answeredCount = Object.keys(revealed).length;
  const correctCount = Object.entries(answers).filter(([qi, key]) => QUESTIONS[Number(qi)].correct === key).length;

  return (
    <section id="quiz" style={{ padding: '80px 20px', maxWidth: 720, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: colors.secondary, textTransform: 'uppercase', fontFamily: fonts.heading, marginBottom: 8 }}>
          Test Yourself
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: colors.white, fontFamily: fonts.heading, margin: 0 }}>
          Quick Quiz
        </h2>
        <p style={{ fontSize: 16, color: colors.neutral300, fontFamily: fonts.body, marginTop: 8 }}>
          3 questions. See if the guide stuck.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {QUESTIONS.map((q, qi) => (
          <div
            key={qi}
            style={{
              padding: 28,
              borderRadius: radius.lg,
              background: colors.primaryDark,
              border: `1px solid ${colors.primaryLight}`,
            }}
          >
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 28, height: 28, borderRadius: radius.full,
                background: 'rgba(0,212,170,0.1)', border: `1px solid ${colors.secondary}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading,
                flexShrink: 0,
              }}>
                {qi + 1}
              </div>
              <p style={{ fontSize: 16, fontWeight: 600, color: colors.white, fontFamily: fonts.heading, margin: 0, lineHeight: 1.5 }}>
                {q.stem}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {q.options.map(opt => {
                const isSelected = answers[qi] === opt.key;
                const isRevealed = revealed[qi];
                const isCorrect = opt.key === q.correct;

                let bg: string = 'rgba(255,255,255,0.03)';
                let borderColor: string = 'rgba(255,255,255,0.08)';
                let textColor: string = colors.neutral300;

                if (isRevealed) {
                  if (isCorrect) {
                    bg = 'rgba(0,200,83,0.1)';
                    borderColor = colors.success;
                    textColor = colors.success;
                  } else if (isSelected && !isCorrect) {
                    bg = 'rgba(255,61,0,0.1)';
                    borderColor = colors.danger;
                    textColor = colors.danger;
                  }
                } else if (isSelected) {
                  bg = 'rgba(0,212,170,0.06)';
                  borderColor = colors.secondary;
                  textColor = colors.white;
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelect(qi, opt.key)}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      padding: '12px 16px', borderRadius: radius.md,
                      background: bg, border: `1px solid ${borderColor}`,
                      color: textColor, fontSize: 14, fontFamily: fonts.body,
                      textAlign: 'left', cursor: isRevealed ? 'default' : 'pointer',
                      transition: 'all 0.2s ease', lineHeight: 1.5,
                      width: '100%',
                    }}
                  >
                    <span style={{
                      fontWeight: 700, fontFamily: fonts.heading, fontSize: 13,
                      flexShrink: 0, width: 20,
                    }}>
                      {opt.key}
                    </span>
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {revealed[qi] && (
              <div style={{
                marginTop: 16, padding: '14px 16px', borderRadius: radius.md,
                background: answers[qi] === q.correct ? 'rgba(0,200,83,0.06)' : 'rgba(255,61,0,0.06)',
                borderLeft: `3px solid ${answers[qi] === q.correct ? colors.success : colors.danger}`,
                animation: 'fadeSlideIn 0.3s ease',
              }}>
                <div style={{
                  fontSize: 12, fontWeight: 700, color: answers[qi] === q.correct ? colors.success : colors.danger,
                  fontFamily: fonts.heading, marginBottom: 6,
                }}>
                  {answers[qi] === q.correct ? 'Correct' : 'Not quite'}
                </div>
                <p style={{ fontSize: 13, color: colors.neutral300, fontFamily: fonts.body, margin: 0, lineHeight: 1.6 }}>
                  {q.explanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {answeredCount === QUESTIONS.length && (
        <div style={{
          marginTop: 32, padding: '20px 24px', borderRadius: radius.lg,
          background: `linear-gradient(135deg, rgba(0,212,170,0.08), rgba(255,107,53,0.08))`,
          border: `1px solid rgba(0,212,170,0.2)`,
          textAlign: 'center', animation: 'fadeSlideIn 0.4s ease',
        }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: colors.white, fontFamily: fonts.heading }}>
            {correctCount} / {QUESTIONS.length}
          </div>
          <p style={{ fontSize: 14, color: colors.neutral300, fontFamily: fonts.body, margin: '8px 0 0' }}>
            {correctCount === QUESTIONS.length
              ? 'Perfect score. You know your slots.'
              : correctCount >= 2
                ? 'Solid. You\'ve got the fundamentals.'
                : 'Worth a re-read. Scroll back up and check the guide.'}
          </p>
        </div>
      )}
    </section>
  );
}
