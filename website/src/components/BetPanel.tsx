'use client';

import { colors } from '@/lib/brand-tokens';
import type { PlacedBet, Pocket, WheelType } from '@/lib/roulette-engine';
import { getHouseEdge } from '@/lib/roulette-engine';

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

  return (
    <div
      style={{
        background: colors.primaryDark,
        borderRadius: 12,
        padding: 24,
        minWidth: 280,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      {/* Balance */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1 }}>
          Demo Balance
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: colors.white, fontFamily: 'system-ui' }}>
          ${balance.toLocaleString()}
        </div>
      </div>

      {/* Chip selector */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
          Chip Size
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {CHIP_SIZES.map((size) => (
            <button
              key={size}
              onClick={() => onChipSizeChange(size)}
              disabled={spinning}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: chipSize === size ? `3px solid ${colors.secondary}` : `2px solid ${colors.neutral700}`,
                background: chipSize === size ? colors.primaryLight : colors.primary,
                color: chipSize === size ? colors.secondary : colors.neutral300,
                fontSize: 13,
                fontWeight: 700,
                cursor: spinning ? 'default' : 'pointer',
                transition: 'all 0.15s ease',
                fontFamily: 'system-ui',
              }}
            >
              ${size}
            </button>
          ))}
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
                  borderRadius: 6,
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
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: 8,
            border: `1px solid ${colors.neutral700}`,
            background: 'transparent',
            color: colors.neutral300,
            fontSize: 14,
            fontWeight: 600,
            cursor: spinning || currentBets.length === 0 ? 'default' : 'pointer',
            opacity: spinning || currentBets.length === 0 ? 0.4 : 1,
            fontFamily: 'system-ui',
          }}
        >
          Clear
        </button>
        <button
          onClick={onSpin}
          disabled={!canSpin}
          style={{
            flex: 2,
            padding: '12px 16px',
            borderRadius: 8,
            border: 'none',
            background: canSpin ? colors.accent : colors.neutral700,
            color: canSpin ? colors.white : colors.neutral500,
            fontSize: 16,
            fontWeight: 800,
            cursor: canSpin ? 'pointer' : 'default',
            transition: 'all 0.15s ease',
            fontFamily: 'system-ui',
          }}
        >
          {spinning ? 'Spinning...' : 'Spin'}
        </button>
      </div>

      {/* Last result */}
      {result && !spinning && (
        <div
          style={{
            padding: 16,
            borderRadius: 8,
            background: lastWin > 0 ? `${colors.success}15` : `${colors.danger}15`,
            border: `1px solid ${lastWin > 0 ? colors.success : colors.danger}30`,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1 }}>
            {lastWin > 0 ? 'Winner!' : 'No win'}
          </div>
          <div style={{ fontSize: 24, fontWeight: 800, color: lastWin > 0 ? colors.success : colors.danger }}>
            {lastWin > 0 ? `+$${lastWin}` : `-$${totalBet}`}
          </div>
        </div>
      )}

      {/* House edge reminder */}
      <div
        style={{
          padding: 12,
          borderRadius: 8,
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
