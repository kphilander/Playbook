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
    stem: 'What is the house edge on the odds bet in craps?',
    options: [
      { key: 'A', text: 'About 1.41%' },
      { key: 'B', text: 'About 5%' },
      { key: 'C', text: '0% \u2014 it pays true mathematical odds' },
      { key: 'D', text: 'About 0.5%' },
    ],
    correct: 'C',
    explanation: 'The odds bet is the only bet in the casino with a 0% house edge. It pays at true mathematical odds \u2014 no built-in margin for the house. That\u2019s why maximizing your odds bet relative to your pass line bet is the key strategy in craps.',
  },
  {
    stem: 'On the come-out roll, what happens if the shooter rolls a 7?',
    options: [
      { key: 'A', text: 'The pass line loses \u2014 7 is always bad in craps' },
      { key: 'B', text: 'The pass line wins \u2014 it\u2019s a natural' },
      { key: 'C', text: 'The game is paused and the dice are passed' },
      { key: 'D', text: '7 sets the point' },
    ],
    correct: 'B',
    explanation: 'On the come-out roll, 7 and 11 are naturals \u2014 the pass line wins immediately. It\u2019s only after a point is established that 7 becomes the enemy of pass line bettors ("seven out"). 7 is your best friend on the come-out and your worst enemy during the point phase.',
  },
  {
    stem: 'Why should you avoid proposition bets (the center of the table)?',
    options: [
      { key: 'A', text: 'They\u2019re only available to experienced players' },
      { key: 'B', text: 'The house edge ranges from 9% to nearly 17% \u2014 far higher than pass line or odds bets' },
      { key: 'C', text: 'They take too long to resolve' },
      { key: 'D', text: 'The payouts are too low' },
    ],
    correct: 'B',
    explanation: 'Proposition bets like Any 7 (16.67% house edge), hardways (9\u201311%), and Any Craps (11.11%) carry house edges 6 to 12 times higher than the pass line bet (1.41%). The flashiest bets on the table are the most expensive ones.',
  },
];

export default function CrapsQuiz() {
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
                    <span style={{ fontWeight: 700, fontFamily: fonts.heading, fontSize: 13, flexShrink: 0, width: 20 }}>
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
          background: 'linear-gradient(135deg, rgba(0,212,170,0.08), rgba(255,107,53,0.08))',
          border: '1px solid rgba(0,212,170,0.2)',
          textAlign: 'center', animation: 'fadeSlideIn 0.4s ease',
        }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: colors.white, fontFamily: fonts.heading }}>
            {correctCount} / {QUESTIONS.length}
          </div>
          <p style={{ fontSize: 14, color: colors.neutral300, fontFamily: fonts.body, margin: '8px 0 0' }}>
            {correctCount === QUESTIONS.length
              ? 'Perfect score. You know your craps.'
              : correctCount >= 2
                ? 'Solid. You\'ve got the fundamentals.'
                : 'Worth a re-read. Scroll back up and check the guide.'}
          </p>
        </div>
      )}
    </section>
  );
}
