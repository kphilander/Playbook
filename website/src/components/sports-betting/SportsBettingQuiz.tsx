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
    stem: 'At standard \u2212110 odds, what win rate do you need to break even on sports bets?',
    options: [
      { key: 'A', text: '50%' },
      { key: 'B', text: '52.4%' },
      { key: 'C', text: '55%' },
      { key: 'D', text: '60%' },
    ],
    correct: 'B',
    explanation: 'At \u2212110 odds, you\u2019re betting $110 to win $100. To break even, you need to win often enough that your $100 wins cover your $110 losses. The math works out to 52.4%. The 2.4% above 50% is the vig \u2014 the sportsbook\u2019s margin. Professional bettors consider a 55% long-term win rate excellent.',
  },
  {
    stem: 'What does a 10-leg parlay at even odds have roughly a 1-in-what chance of winning?',
    options: [
      { key: 'A', text: '1 in 10' },
      { key: 'B', text: '1 in 100' },
      { key: 'C', text: '1 in 1,024' },
      { key: 'D', text: '1 in 10,000' },
    ],
    correct: 'C',
    explanation: 'Each leg at even odds (50/50) has a 1 in 2 chance. For all 10 legs to win, you multiply: 1/2 ten times = 1/1,024. And that\u2019s before the vig, which compounds with each leg. A 10-leg parlay is fun entertainment, but the math is firmly in the house\u2019s favor.',
  },
  {
    stem: 'Why do sportsbook odds on a single market always add up to more than 100% probability?',
    options: [
      { key: 'A', text: 'Because the sportsbook makes math errors' },
      { key: 'B', text: 'Because the vig (vigorish) is built into the odds \u2014 the sportsbook\u2019s commission' },
      { key: 'C', text: 'Because some outcomes are more likely than 100%' },
      { key: 'D', text: 'Because odds are rounded for simplicity' },
    ],
    correct: 'B',
    explanation: 'The overround (the amount above 100%) is the vig \u2014 the sportsbook\u2019s built-in commission. If both sides of a coin flip are priced at \u2212110, the implied probabilities are 52.4% each, totaling 104.8%. That extra 4.8% is the sportsbook\u2019s margin. It\u2019s how they make money regardless of which side wins.',
  },
];

export default function SportsBettingQuiz() {
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
              ? 'Perfect score. You know your sports betting math.'
              : correctCount >= 2
                ? 'Solid. You\'ve got the fundamentals.'
                : 'Worth a re-read. Scroll back up and check the guide.'}
          </p>
        </div>
      )}
    </section>
  );
}
