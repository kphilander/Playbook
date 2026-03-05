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
    stem: 'What makes video poker different from a slot machine?',
    options: [
      { key: 'A', text: 'Video poker has better graphics' },
      { key: 'B', text: 'Your decisions about which cards to hold change the mathematical odds' },
      { key: 'C', text: 'Video poker machines are newer' },
      { key: 'D', text: "There's no difference \u2014 they both use random number generators" },
    ],
    correct: 'B',
    explanation: "Both use RNGs, but that's where the similarity ends. In slots, the outcome is fixed the instant you press spin. In video poker, your hold decisions change the expected value of each hand. With optimal strategy on Jacks or Better, the house edge drops to about 0.46%.",
  },
  {
    stem: 'Two Jacks or Better machines sit side by side. One has a 9/6 paytable. The other has a 6/5 paytable. What\u2019s the difference in house edge?',
    options: [
      { key: 'A', text: 'No difference \u2014 Jacks or Better is Jacks or Better' },
      { key: 'B', text: 'About 0.5% \u2014 barely noticeable' },
      { key: 'C', text: 'About 4.5% \u2014 the 6/5 machine keeps roughly ten times more per dollar bet' },
      { key: 'D', text: 'The 9/6 machine has better graphics' },
    ],
    correct: 'C',
    explanation: "A 9/6 machine has a 0.46% house edge. A 6/5 machine has a 5% edge \u2014 more than ten times as much. The machines can look identical. The only difference is two numbers on the paytable: the full house and flush payouts.",
  },
  {
    stem: "You're dealt a flush, but four cards are K-Q-J-10 of the same suit \u2014 one card away from a royal. What does optimal strategy say?",
    options: [
      { key: 'A', text: 'Keep the flush \u2014 a guaranteed win is always better' },
      { key: 'B', text: 'Break the flush and draw for the royal \u2014 the expected value is higher' },
      { key: 'C', text: 'It depends on how many credits you bet' },
      { key: 'D', text: 'Hold all five and hope the machine upgrades it' },
    ],
    correct: 'B',
    explanation: "A flush pays 6-for-1 on a 9/6 machine. But the expected value of drawing one card to four-to-a-royal is higher, because the royal flush pays 800-for-1 at max bet. Over thousands of hands, breaking the flush is the correct play.",
  },
];

export default function VideoPokerQuiz() {
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
              ? 'Perfect score. You know your video poker.'
              : correctCount >= 2
                ? "Solid. You've got the fundamentals."
                : 'Worth a re-read. Scroll back up and check the guide.'}
          </p>
        </div>
      )}
    </section>
  );
}
