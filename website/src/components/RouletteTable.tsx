'use client';

import { useState, useRef, useCallback } from 'react';
import { colors, fonts, rouletteColors, radius } from '@/lib/brand-tokens';
import type { BetDefinition, WheelType, Pocket } from '@/lib/roulette-engine';
import { OUTSIDE_BETS, straightBet, getBetTooltip } from '@/lib/roulette-engine';

type TableSize = 'normal' | 'medium' | 'compact';

interface RouletteTableProps {
  wheelType: WheelType;
  onBetPlace: (bet: BetDefinition) => void;
  activeBets: Map<string, number>;  // bet type key -> amount
  result: Pocket | null;
  disabled: boolean;
  size?: TableSize;
}

/* ─── Tooltip Component ─── */
function BetTooltip({ bet, wheelType, x, y }: { bet: BetDefinition; wheelType: WheelType; x: number; y: number }) {
  const info = getBetTooltip(bet, wheelType);
  return (
    <div
      style={{
        position: 'fixed',
        left: x,
        top: y - 8,
        transform: 'translate(-50%, -100%)',
        background: colors.primaryDark,
        border: `1px solid ${colors.primaryLight}`,
        borderRadius: radius.md,
        padding: '10px 14px',
        zIndex: 100,
        pointerEvents: 'none',
        minWidth: 200,
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 700, color: colors.white, marginBottom: 6 }}>
        {info.name}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3px 12px', fontSize: 12 }}>
        <span style={{ color: colors.neutral500 }}>Payout</span>
        <span style={{ color: colors.accent, fontWeight: 700 }}>{info.payout}</span>
        <span style={{ color: colors.neutral500 }}>Win chance</span>
        <span style={{ color: colors.secondary, fontWeight: 700 }}>
          {info.probability} ({info.coverageCount}/{info.totalPockets})
        </span>
        <span style={{ color: colors.neutral500 }}>Avg. loss</span>
        <span style={{ color: colors.danger, fontWeight: 600 }}>{info.expectedLoss}</span>
      </div>
    </div>
  );
}

const RED_NUMBERS = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

const SIZES = {
  normal:  { cellW: 52, cellH: 44, zeroW: 52, colBetW: 48, numFont: 16, outsideFont: 13, chipDot: 18, chipFont: 9, pad: 16, colFont: 11 },
  medium:  { cellW: 34, cellH: 32, zeroW: 34, colBetW: 30, numFont: 13, outsideFont: 10, chipDot: 16, chipFont: 8, pad: 10, colFont: 9 },
  compact: { cellW: 24, cellH: 28, zeroW: 24, colBetW: 22, numFont: 11, outsideFont: 9,  chipDot: 14, chipFont: 7, pad: 6,  colFont: 8  },
} as const;

export default function RouletteTable({ wheelType, onBetPlace, activeBets, result, disabled, size = 'normal' }: RouletteTableProps) {
  const s = SIZES[size];
  const cellW = s.cellW;
  const cellH = s.cellH;
  const zeroW = s.zeroW;
  const colBetW = s.colBetW;
  const numFont = s.numFont;
  const outsideFont = s.outsideFont;
  const chipDotSize = s.chipDot;
  const chipDotFont = s.chipFont;
  const tablePad = s.pad;
  const isCompact = size === 'compact';
  const [tooltipBet, setTooltipBet] = useState<BetDefinition | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const tooltipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  const handleMouseEnter = useCallback((bet: BetDefinition, e: React.MouseEvent) => {
    if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top });
    setTooltipBet(bet);
    setHoveredCell(getBetKey(bet));
  }, []);

  const handleMouseLeave = useCallback(() => {
    tooltipTimeout.current = setTimeout(() => setTooltipBet(null), 100);
    setHoveredCell(null);
  }, []);

  const isWinner = (numbers: string[]) => result && numbers.includes(result.number);

  const cellStyle = (num: number, isActive: boolean, isWin: boolean, betKey?: string): React.CSSProperties => ({
    boxSizing: 'border-box' as const,
    width: cellW,
    height: cellH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: numFont,
    fontWeight: 700,
    fontFamily: fonts.mono,
    color: colors.white,
    background: isWin
      ? colors.accent
      : isActive
        ? colors.secondaryDark
        : RED_NUMBERS.has(num) ? rouletteColors.red : rouletteColors.black,
    border: `1px solid ${colors.primaryLight}`,
    cursor: disabled ? 'default' : 'pointer',
    transition: 'all 0.15s ease',
    position: 'relative' as const,
    userSelect: 'none' as const,
    filter: betKey && hoveredCell === betKey && !disabled ? 'brightness(1.25)' : 'none',
    transform: betKey && hoveredCell === betKey && !disabled ? 'scale(1.02)' : 'none',
    zIndex: betKey && hoveredCell === betKey ? 1 : 0,
    boxShadow: isWin ? `0 0 0 2px ${colors.accent}, 0 0 12px ${colors.accent}60` : 'none',
  });

  const outsideStyle = (isActive: boolean, isWin: boolean, betKey?: string): React.CSSProperties => ({
    boxSizing: 'border-box' as const,
    height: cellH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: outsideFont,
    fontWeight: 700,
    fontFamily: fonts.heading,
    color: isActive ? colors.primary : colors.neutral300,
    background: isWin ? colors.accent : isActive ? colors.secondary : colors.primaryLight,
    border: `1px solid ${colors.primaryLight}`,
    cursor: disabled ? 'default' : 'pointer',
    transition: 'all 0.15s ease',
    padding: isCompact ? '0 2px' : '0 8px',
    userSelect: 'none' as const,
    filter: betKey && hoveredCell === betKey && !disabled ? 'brightness(1.25)' : 'none',
    transform: betKey && hoveredCell === betKey && !disabled ? 'scale(1.02)' : 'none',
    zIndex: betKey && hoveredCell === betKey ? 1 : 0,
    boxShadow: isWin ? `0 0 0 2px ${colors.accent}, 0 0 12px ${colors.accent}60` : 'none',
  });

  // Build number grid (3 rows x 12 columns)
  const rows = [
    [3,6,9,12,15,18,21,24,27,30,33,36],
    [2,5,8,11,14,17,20,23,26,29,32,35],
    [1,4,7,10,13,16,19,22,25,28,31,34],
  ];

  const getBetKey = (bet: BetDefinition) => `${bet.type}:${bet.numbers.join(',')}`;

  const handleClick = (bet: BetDefinition) => {
    if (disabled) return;
    onBetPlace(bet);
  };

  // Chip indicator
  const chipDot = (betKey: string) => {
    const amount = activeBets.get(betKey);
    if (!amount) return null;
    return (
      <div
        style={{
          position: 'absolute',
          top: isCompact ? -2 : -4,
          right: isCompact ? -2 : -4,
          width: chipDotSize,
          height: chipDotSize,
          borderRadius: '50%',
          background: colors.accent,
          color: colors.white,
          fontSize: chipDotFont,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `${isCompact ? 1 : 2}px solid ${colors.primaryDark}`,
          zIndex: 2,
          animation: 'chipPopIn 0.2s ease forwards',
        }}
      >
        {amount}
      </div>
    );
  };

  return (
    <div style={{ background: colors.primaryDark, borderRadius: isCompact ? radius.sm : radius.lg, padding: tablePad, display: 'inline-block', boxShadow: '0 4px 12px rgba(15,25,35,0.4)', border: `1px solid ${colors.primaryLight}` }}>
      <div style={{ display: 'flex', gap: 0 }}>
        {/* Zero column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {/* Zero */}
          <div
            onClick={() => handleClick(straightBet('0'))}
            onMouseEnter={(e) => handleMouseEnter(straightBet('0'), e)}
            onMouseLeave={handleMouseLeave}
            style={{
              ...cellStyle(0, activeBets.has(getBetKey(straightBet('0'))), !!isWinner(['0'])),
              background: isWinner(['0']) ? colors.accent
                : activeBets.has(getBetKey(straightBet('0'))) ? colors.secondaryDark
                : rouletteColors.green,
              width: zeroW,
              height: wheelType === 'american' ? cellH * 1.5 : cellH * 3 + 2,
              position: 'relative',
            }}
          >
            0
            {chipDot(getBetKey(straightBet('0')))}
          </div>
          {/* Double zero (American only) */}
          {wheelType === 'american' && (
            <div
              onClick={() => handleClick(straightBet('00'))}
              onMouseEnter={(e) => handleMouseEnter(straightBet('00'), e)}
              onMouseLeave={handleMouseLeave}
              style={{
                ...cellStyle(0, activeBets.has(getBetKey(straightBet('00'))), !!isWinner(['00'])),
                background: isWinner(['00']) ? colors.accent
                  : activeBets.has(getBetKey(straightBet('00'))) ? colors.secondaryDark
                  : rouletteColors.green,
                width: zeroW,
                height: cellH * 1.5,
                position: 'relative',
              }}
            >
              00
              {chipDot(getBetKey(straightBet('00')))}
            </div>
          )}
        </div>

        {/* Number grid */}
        <div>
          {rows.map((row, ri) => (
            <div key={ri} style={{ display: 'flex', gap: 0 }}>
              {row.map((num) => {
                const bet = straightBet(String(num));
                const betKey = getBetKey(bet);
                return (
                  <div
                    key={num}
                    onClick={() => handleClick(bet)}
                    onMouseEnter={(e) => handleMouseEnter(bet, e)}
                    onMouseLeave={handleMouseLeave}
                    style={{ ...cellStyle(num, activeBets.has(betKey), !!isWinner([String(num)]), betKey), position: 'relative' }}
                  >
                    {num}
                    {chipDot(betKey)}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Dozens row */}
          <div style={{ display: 'flex', gap: 0 }}>
            {[
              OUTSIDE_BETS.find(b => b.type === 'dozen1')!,
              OUTSIDE_BETS.find(b => b.type === 'dozen2')!,
              OUTSIDE_BETS.find(b => b.type === 'dozen3')!,
            ].map((bet) => {
              const betKey = getBetKey(bet);
              return (
                <div
                  key={bet.type}
                  onClick={() => handleClick(bet)}
                  onMouseEnter={(e) => handleMouseEnter(bet, e)}
                  onMouseLeave={handleMouseLeave}
                  style={{ ...outsideStyle(activeBets.has(betKey), !!isWinner(bet.numbers), betKey), width: cellW * 4, position: 'relative' }}
                >
                  {bet.label}
                  {chipDot(betKey)}
                </div>
              );
            })}
          </div>

          {/* Even-money bets row */}
          <div style={{ display: 'flex', gap: 0 }}>
            {[
              OUTSIDE_BETS.find(b => b.type === 'low')!,
              OUTSIDE_BETS.find(b => b.type === 'even')!,
              OUTSIDE_BETS.find(b => b.type === 'red')!,
              OUTSIDE_BETS.find(b => b.type === 'black')!,
              OUTSIDE_BETS.find(b => b.type === 'odd')!,
              OUTSIDE_BETS.find(b => b.type === 'high')!,
            ].map((bet) => {
              const betKey = getBetKey(bet);
              const isRedBlack = bet.type === 'red' || bet.type === 'black';
              return (
                <div
                  key={bet.type}
                  onClick={() => handleClick(bet)}
                  onMouseEnter={(e) => handleMouseEnter(bet, e)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    ...outsideStyle(activeBets.has(betKey), !!isWinner(bet.numbers), betKey),
                    width: cellW * 2,
                    position: 'relative',
                    background: isWinner(bet.numbers) ? colors.accent
                      : activeBets.has(betKey)
                        ? colors.secondaryDark
                        : isRedBlack
                          ? (bet.type === 'red' ? rouletteColors.red : rouletteColors.black)
                          : colors.primaryLight,
                    color: colors.white,
                  }}
                >
                  {bet.label}
                  {chipDot(betKey)}
                </div>
              );
            })}
          </div>
        </div>

        {/* Column bets (right side) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            OUTSIDE_BETS.find(b => b.type === 'column3')!,
            OUTSIDE_BETS.find(b => b.type === 'column2')!,
            OUTSIDE_BETS.find(b => b.type === 'column1')!,
          ].map((bet) => {
            const betKey = getBetKey(bet);
            return (
              <div
                key={bet.type}
                onClick={() => handleClick(bet)}
                onMouseEnter={(e) => handleMouseEnter(bet, e)}
                onMouseLeave={handleMouseLeave}
                style={{
                  ...outsideStyle(activeBets.has(betKey), !!isWinner(bet.numbers), betKey),
                  width: colBetW,
                  height: cellH,
                  position: 'relative',
                  writingMode: 'vertical-rl',
                  fontSize: s.colFont,
                }}
              >
                {bet.label}
                {chipDot(betKey)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tooltip */}
      {tooltipBet && (
        <BetTooltip bet={tooltipBet} wheelType={wheelType} x={tooltipPos.x} y={tooltipPos.y} />
      )}
    </div>
  );
}
