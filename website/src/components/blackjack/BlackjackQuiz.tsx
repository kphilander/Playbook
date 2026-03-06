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
    stem: 'What is the house edge on blackjack when you use basic strategy?',
    options: [
      { key: 'A', text: 'About 5%' },
      { key: 'B', text: 'About 0.5%' },
      { key: 'C', text: 'About 10%' },
      { key: 'D', text: '0% \u2014 basic strategy eliminates the house edge' },
    ],
    correct: 'B',
    explanation: 'With basic strategy and standard rules, the house edge on blackjack is about 0.5% \u2014 the lowest of any table game. For every $100 wagered, you\u2019d lose about 50 cents on average. Without basic strategy, the edge jumps to about 2%.',
  },
  {
    stem: 'The dealer\u2019s upcard is an ace and you\u2019re offered insurance. What does basic strategy say?',
    options: [
      { key: 'A', text: 'Always take insurance \u2014 it protects your bet' },
      { key: 'B', text: 'Only take insurance if you have a good hand' },
      { key: 'C', text: 'Decline insurance \u2014 the house edge on the insurance bet is about 7.7%' },
      { key: 'D', text: 'Take insurance only if you\u2019re on a losing streak' },
    ],
    correct: 'C',
    explanation: 'Insurance is a side bet that the dealer has blackjack. It pays 2:1, but the odds of the dealer having a 10-value hole card are less than 1 in 3. The house edge on insurance is about 7.7% \u2014 far worse than the base game. Basic strategy says decline it every time.',
  },
  {
    stem: 'A table pays 6:5 on a natural blackjack instead of 3:2. On a $10 bet, how much less do you win?',
    options: [
      { key: 'A', text: '$1 less' },
      { key: 'B', text: '$3 less' },
      { key: 'C', text: '$5 less' },
      { key: 'D', text: 'No difference \u2014 6:5 and 3:2 are the same' },
    ],
    correct: 'B',
    explanation: 'At 3:2, a $10 blackjack pays $15. At 6:5, it pays $12. That\u2019s $3 less per natural blackjack. This single rule change increases the house edge by about 1.4%. Always check the payout posted at the table before sitting down.',
  },
];

export default function BlackjackQuiz() {
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
              ? 'Perfect score. You know your blackjack.'
              : correctCount >= 2
                ? 'Solid. You\'ve got the fundamentals.'
                : 'Worth a re-read. Scroll back up and check the guide.'}
          </p>
        </div>
      )}
    </section>
  );
}
