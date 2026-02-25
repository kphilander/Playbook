'use client';

import { useState, useEffect, useCallback } from 'react';
import { colors } from '@/lib/brand-tokens';
import type { WheelType } from '@/lib/roulette-engine';
import { getHouseEdge, getPocketCount } from '@/lib/roulette-engine';

const STORAGE_KEY = 'playbook-roulette-tutorial-complete';

interface TutorialOverlayProps {
  wheelType: WheelType;
  onComplete: () => void;
  onRequestBet?: () => void; // callback to prompt user to place a bet during tutorial
  visible: boolean;
}

interface TutorialStep {
  title: string;
  content: string;
  highlight?: 'wheel' | 'table' | 'bets' | 'stats' | 'none';
  icon: string;
}

function getSteps(wheelType: WheelType): TutorialStep[] {
  const pockets = getPocketCount(wheelType);
  const zeros = wheelType === 'european' ? '1 green zero' : '2 green zeros (0 and 00)';
  const edge = getHouseEdge(wheelType);

  return [
    {
      title: 'Welcome to the Roulette Demo',
      content: `This interactive demo shows you exactly how roulette works — and why the house always wins over time. No real money involved. Let's walk through the basics.`,
      highlight: 'none',
      icon: '🎰',
    },
    {
      title: 'The Wheel',
      content: `This ${wheelType === 'european' ? 'European' : 'American'} roulette wheel has ${pockets} pockets: numbers 1–36 in red and black, plus ${zeros}. Those green pocket${wheelType === 'american' ? 's are' : ' is'} the source of the house's mathematical advantage.`,
      highlight: 'wheel',
      icon: '🎡',
    },
    {
      title: 'Inside Bets — High Risk, High Payout',
      content: `Click any single number to make a "straight" bet — it pays 35:1 but only has a ${(1/pockets*100).toFixed(1)}% chance of winning. You can also bet on splits (2 numbers, 17:1), streets (3 numbers, 11:1), corners (4 numbers, 8:1), and six-lines (6 numbers, 5:1).`,
      highlight: 'table',
      icon: '🎯',
    },
    {
      title: 'Outside Bets — Lower Risk, Lower Payout',
      content: `The bottom rows are "outside" bets: Red/Black, Odd/Even, and High/Low all pay 1:1 and cover nearly half the wheel. Dozens and Columns pay 2:1 and cover 12 numbers each. Hover any bet to see its exact odds.`,
      highlight: 'table',
      icon: '📊',
    },
    {
      title: 'Try It — Place a Bet',
      content: `Select a chip size on the right, then click "Red" on the table to bet on all red numbers. This is the most common beginner bet and a great way to see the math in action.`,
      highlight: 'bets',
      icon: '🪙',
    },
    {
      title: 'The House Edge',
      content: `Here's the key insight: Red covers 18 out of ${pockets} pockets = ${(18/pockets*100).toFixed(1)}% win chance. But it pays 1:1 as if it were 50/50. That gap — ${(50 - 18/pockets*100).toFixed(1)} percentage points — is the house edge of ${edge}%. Every bet on this wheel has the same mathematical disadvantage.`,
      highlight: 'none',
      icon: '🔑',
    },
    {
      title: 'You\'re Ready!',
      content: `Place bets, spin the wheel, and watch your results. Use the "Simulate 1,000 Spins" button in the stats panel to see how results always converge to the house edge over time. The short term is wild — the long term is math.`,
      highlight: 'stats',
      icon: '🚀',
    },
  ];
}

export default function TutorialOverlay({ wheelType, onComplete, visible }: TutorialOverlayProps) {
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!visible) {
      setShow(false);
      return;
    }
    // Check localStorage
    const completed = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY);
    if (completed) {
      setShow(false);
      onComplete();
    } else {
      setShow(true);
      setStep(0);
    }
  }, [visible, onComplete]);

  const steps = getSteps(wheelType);
  const currentStep = steps[step];
  const isLast = step === steps.length - 1;

  const handleNext = useCallback(() => {
    if (isLast) {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, 'true');
      }
      setShow(false);
      onComplete();
    } else {
      setStep(s => s + 1);
    }
  }, [isLast, onComplete]);

  const handleSkip = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    setShow(false);
    onComplete();
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        style={{
          background: colors.primary,
          borderRadius: 16,
          padding: 32,
          maxWidth: 520,
          width: '90%',
          boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          border: `1px solid ${colors.primaryLight}`,
          position: 'relative',
        }}
      >
        {/* Progress dots */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 24, justifyContent: 'center' }}>
          {steps.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === step ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === step ? colors.accent : i < step ? colors.secondary : colors.primaryLight,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* Icon */}
        <div style={{ fontSize: 40, textAlign: 'center', marginBottom: 16 }}>
          {currentStep.icon}
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: colors.white,
            textAlign: 'center',
            marginBottom: 12,
            fontFamily: 'system-ui',
            margin: '0 0 12px',
          }}
        >
          {currentStep.title}
        </h2>

        {/* Highlight badge */}
        {currentStep.highlight && currentStep.highlight !== 'none' && (
          <div
            style={{
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: 12,
                background: `${colors.secondary}20`,
                color: colors.secondary,
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Look at the {currentStep.highlight}
            </span>
          </div>
        )}

        {/* Content */}
        <p
          style={{
            fontSize: 15,
            color: colors.neutral300,
            lineHeight: 1.7,
            textAlign: 'center',
            margin: '0 0 28px',
          }}
        >
          {currentStep.content}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          {step === 0 && (
            <button
              onClick={handleSkip}
              style={{
                padding: '10px 24px',
                borderRadius: 8,
                border: `1px solid ${colors.neutral700}`,
                background: 'transparent',
                color: colors.neutral500,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'system-ui',
              }}
            >
              Skip Tutorial
            </button>
          )}
          {step > 0 && (
            <button
              onClick={() => setStep(s => s - 1)}
              style={{
                padding: '10px 24px',
                borderRadius: 8,
                border: `1px solid ${colors.neutral700}`,
                background: 'transparent',
                color: colors.neutral300,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'system-ui',
              }}
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            style={{
              padding: '10px 32px',
              borderRadius: 8,
              border: 'none',
              background: isLast ? colors.secondary : colors.accent,
              color: isLast ? colors.primary : colors.white,
              fontSize: 14,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'system-ui',
              transition: 'all 0.15s ease',
            }}
          >
            {isLast ? 'Start Playing' : step === 0 ? 'Start Tour' : 'Next'}
          </button>
        </div>

        {/* Step counter */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 16,
            fontSize: 12,
            color: colors.neutral500,
          }}
        >
          {step + 1} of {steps.length}
        </div>
      </div>
    </div>
  );
}

/** Utility: reset tutorial so it shows again */
export function resetTutorial() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}
