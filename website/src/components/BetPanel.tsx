'use client';

import { useState, useEffect, useRef } from 'react';
import { colors, fonts, radius } from '@/lib/brand-tokens';
import type { PlacedBet, Pocket, WheelType } from '@/lib/roulette-engine';
import { getHouseEdge, getPocketCount } from '@/lib/roulette-engine';

interface BetPanelProps {
  balance: number;
  chipSize: number;
  onChipSizeChange: (size: number) => void;
  currentBets: PlacedBet[];
  onClearBets: () => void;
  onSpin: () => void;
  spinning: boolean;
  result: Pocket | null;
  lastWin: number;
  wheelType: WheelType;
}

const CHIP_SIZES = [1, 5, 10, 25, 100];

export default function BetPanel({
  balance,
  chipSize,
  onChipSizeChange,
  currentBets,
  onClearBets,
  onSpin,
  spinning,
  result,
  lastWin,
  wheelType,
}: BetPanelProps) {
  const totalBet = currentBets.reduce((sum, b) => sum + b.amount, 0);
  const canSpin = currentBets.length > 0 && !spinning && totalBet <= balance;

  // Hover states
  const [spinHovered, setSpinHovered] = useState(false);
  const [clearHovered, setClearHovered] = useState(false);
  const [hoveredChip, setHoveredChip] = useState<number | null>(null);

  // Balance count-up animation
  const [displayBalance, setDisplayBalance] = useState(balance);
  const prevBalance = useRef(balance);
  useEffect(() => {
    const from = prevBalance.current;
    const to = balance;
    prevBalance.current = to;
    if (from === to) return;
    const duration = 400;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayBalance(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [balance]);

  return (
    <div
      style={{
        background: colors.primaryDark,
        borderRadius: radius.lg,
        padding: 24,
        minWidth: 280,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        boxShadow: '0 4px 12px rgba(15,25,35,0.4)',
        border: `1px solid ${colors.primaryLight}`,
      }}
    >
      {/* Wheel type info */}
      <div>
        <div style={{ fontSize: 18, fontWeight: 800, color: colors.white, lineHeight: 1.2, fontFamily: fonts.heading }}>
          {wheelType === 'european' ? 'European' : 'American'} Roulette
        </div>
        <div style={{ fontSize: 13, color: colors.neutral300, marginTop: 4, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span><strong style={{ color: colors.accent }}>{getPocketCount(wheelType)}</strong> pockets</span>
          <span>·</span>
          <span><strong style={{ color: colors.accent }}>{wheelType === 'european' ? '1' : '2'}</strong> zero{wheelType === 'american' ? 's' : ''}</span>
          <span>·</span>
          <span><strong style={{ color: colors.accent }}>{getHouseEdge(wheelType)}%</strong> edge</span>
        </div>
      </div>

      {/* Balance */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1 }}>
          Demo Balance
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: colors.white, fontFamily: fonts.heading }}>
          ${displayBalance.toLocaleString()}
        </div>
      </div>

      {/* Chip selector */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
          Chip Size
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {CHIP_SIZES.map((size) => {
            const isSelected = chipSize === size;
            const isHovered = hoveredChip === size && !isSelected && !spinning;
            return (
              <button
                key={size}
                onClick={() => onChipSizeChange(size)}
                disabled={spinning}
                onMouseEnter={() => setHoveredChip(size)}
                onMouseLeave={() => setHoveredChip(null)}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: isSelected ? `3px solid ${colors.secondary}` : `2px solid ${colors.neutral700}`,
                  background: isSelected ? colors.primaryLight : colors.primary,
                  color: isSelected ? colors.secondary : colors.neutral300,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: spinning ? 'not-allowed' : 'pointer',
                  transition: 'all 0.15s ease',
                  fontFamily: fonts.heading,
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: isHovered ? `0 0 0 2px ${colors.secondary}40` : 'none',
                }}
              >
                ${size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Current bets summary */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
          Current Bets
        </div>
        {currentBets.length === 0 ? (
          <div style={{ fontSize: 14, color: colors.neutral500, fontStyle: 'italic' }}>
            Click the table to place bets
          </div>
        ) : (
          <div style={{ maxHeight: 140, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {currentBets.map((bet, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: 13,
                  color: colors.neutral300,
                  padding: '4px 8px',
                  background: colors.primary,
                  borderRadius: radius.sm,
                }}
              >
                <span>{bet.definition.label}</span>
                <span style={{ fontWeight: 700, color: colors.white }}>${bet.amount}</span>
              </div>
            ))}
          </div>
        )}
        <div
          style={{
            marginTop: 8,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14,
            fontWeight: 700,
            color: colors.white,
            borderTop: `1px solid ${colors.primaryLight}`,
            paddingTop: 8,
          }}
        >
          <span>Total</span>
          <span>${totalBet}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={onClearBets}
          disabled={spinning || currentBets.length === 0}
          onMouseEnter={() => setClearHovered(true)}
          onMouseLeave={() => setClearHovered(false)}
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: radius.md,
            border: `1px solid ${clearHovered && !(spinning || currentBets.length === 0) ? colors.neutral500 : colors.neutral700}`,
            background: clearHovered && !(spinning || currentBets.length === 0) ? colors.primaryLight : 'transparent',
            color: colors.neutral300,
            fontSize: 14,
            fontWeight: 600,
            cursor: spinning || currentBets.length === 0 ? 'not-allowed' : 'pointer',
            opacity: spinning || currentBets.length === 0 ? 0.5 : 1,
            fontFamily: fonts.heading,
            transition: 'all 0.15s ease',
          }}
        >
          Clear
        </button>
        <button
          onClick={onSpin}
          disabled={!canSpin}
          onMouseEnter={() => setSpinHovered(true)}
          onMouseLeave={() => setSpinHovered(false)}
          style={{
            flex: 2,
            padding: '12px 16px',
            borderRadius: radius.md,
            border: 'none',
            background: canSpin
              ? (spinHovered ? colors.accentLight : colors.accent)
              : colors.neutral700,
            color: canSpin ? colors.white : colors.neutral500,
            fontSize: 16,
            fontWeight: 800,
            cursor: canSpin ? 'pointer' : 'not-allowed',
            transition: 'all 0.15s ease',
            fontFamily: fonts.heading,
            transform: canSpin && spinHovered ? 'translateY(-1px)' : 'none',
            boxShadow: canSpin
              ? (spinHovered ? '0 4px 12px rgba(255,107,53,0.4)' : '0 2px 8px rgba(255,107,53,0.2)')
              : 'none',
          }}
        >
          {spinning ? 'Spinning...' : 'Spin'}
        </button>
      </div>

      {/* Post-spin breakdown */}
      {result && !spinning && (
        <div
          key={result.number}
          style={{
            padding: 16,
            borderRadius: radius.md,
            background: lastWin > 0 ? `${colors.success}15` : `${colors.danger}15`,
            border: `1px solid ${lastWin > 0 ? colors.success : colors.danger}30`,
            animation: 'winPulse 0.5s ease forwards',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1 }}>
              {lastWin > 0 ? 'Winner!' : 'No win'}
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: lastWin > 0 ? colors.success : colors.danger }}>
              {lastWin > 0 ? `+$${lastWin}` : `-$${totalBet}`}
            </div>
          </div>
          {/* Per-bet breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {currentBets.map((bet, i) => {
              const won = bet.definition.numbers.includes(result.number);
              const pocketCount = getPocketCount(wheelType);
              const prob = bet.definition.numbers.length / pocketCount;
              return (
                <div
                  key={i}
                  style={{
                    fontSize: 11,
                    color: colors.neutral300,
                    padding: '4px 8px',
                    background: `${colors.primary}80`,
                    borderRadius: radius.sm,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span style={{ flex: 1 }}>
                    <span style={{ fontWeight: 700, color: won ? colors.success : colors.neutral500 }}>
                      {won ? '✓' : '✗'}
                    </span>{' '}
                    ${bet.amount} on {bet.definition.label}
                  </span>
                  <span style={{ fontSize: 10, color: colors.neutral500 }}>
                    {bet.definition.payout}:1 · {(prob * 100).toFixed(0)}%
                  </span>
                  <span style={{ fontWeight: 700, color: won ? colors.success : colors.danger, minWidth: 40, textAlign: 'right' }}>
                    {won ? `+$${bet.amount * bet.definition.payout}` : `-$${bet.amount}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* House edge reminder */}
      <div
        style={{
          padding: 12,
          borderRadius: radius.md,
          background: colors.primary,
          fontSize: 12,
          color: colors.neutral500,
          lineHeight: 1.5,
        }}
      >
        <strong style={{ color: colors.accent }}>{getHouseEdge(wheelType)}%</strong> house edge ({wheelType === 'european' ? 'European' : 'American'}).
        For every $100 wagered, the house keeps ~${getHouseEdge(wheelType).toFixed(2)} on average.
      </div>
    </div>
  );
}
