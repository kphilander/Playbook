'use client';

import { useState, useRef, useCallback } from 'react';
import { colors, rouletteColors } from '@/lib/brand-tokens';
import type { BetDefinition, WheelType, Pocket } from '@/lib/roulette-engine';
import { OUTSIDE_BETS, straightBet, getBetTooltip } from '@/lib/roulette-engine';

interface RouletteTableProps {
  wheelType: WheelType;
  onBetPlace: (bet: BetDefinition) => void;
  activeBets: Map<string, number>;  // bet type key -> amount
  result: Pocket | null;
  disabled: boolean;
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
        borderRadius: 8,
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

const CELL_W = 52;
const CELL_H = 44;
const ZERO_W = 52;

export default function RouletteTable({ wheelType, onBetPlace, activeBets, result, disabled }: RouletteTableProps) {
  const [tooltipBet, setTooltipBet] = useState<BetDefinition | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const tooltipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((bet: BetDefinition, e: React.MouseEvent) => {
    if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top });
    setTooltipBet(bet);
  }, []);

  const handleMouseLeave = useCallback(() => {
    tooltipTimeout.current = setTimeout(() => setTooltipBet(null), 100);
  }, []);

  const isWinner = (numbers: string[]) => result && numbers.includes(result.number);

  const cellStyle = (num: number, isActive: boolean, isWin: boolean): React.CSSProperties => ({
    width: CELL_W,
    height: CELL_H,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'system-ui',
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
  });

  const outsideStyle = (isActive: boolean, isWin: boolean): React.CSSProperties => ({
    height: CELL_H,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: 700,
    fontFamily: 'system-ui',
    color: isActive ? colors.primary : colors.neutral300,
    background: isWin ? colors.accent : isActive ? colors.secondary : colors.primaryLight,
    border: `1px solid ${colors.primaryLight}`,
    cursor: disabled ? 'default' : 'pointer',
    transition: 'all 0.15s ease',
    padding: '0 8px',
    userSelect: 'none' as const,
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
          top: -4,
          right: -4,
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: colors.accent,
          color: colors.white,
          fontSize: 9,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px solid ${colors.primaryDark}`,
          zIndex: 2,
        }}
      >
        {amount}
      </div>
    );
  };

  return (
    <div style={{ background: colors.primaryDark, borderRadius: 12, padding: 16, display: 'inline-block' }}>
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
              width: ZERO_W,
              height: wheelType === 'american' ? CELL_H * 1.5 : CELL_H * 3 + 2,
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
                width: ZERO_W,
                height: CELL_H * 1.5,
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
                    style={{ ...cellStyle(num, activeBets.has(betKey), !!isWinner([String(num)])), position: 'relative' }}
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
                  style={{ ...outsideStyle(activeBets.has(betKey), !!isWinner(bet.numbers)), width: CELL_W * 4, position: 'relative' }}
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
                    ...outsideStyle(activeBets.has(betKey), !!isWinner(bet.numbers)),
                    width: CELL_W * 2,
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
                  ...outsideStyle(activeBets.has(betKey), !!isWinner(bet.numbers)),
                  width: 48,
                  height: CELL_H,
                  position: 'relative',
                  writingMode: 'vertical-rl',
                  fontSize: 11,
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
