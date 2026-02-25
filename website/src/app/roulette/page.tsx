'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { colors } from '@/lib/brand-tokens';
import {
  spin,
  resolveBets,
  createStats,
  updateStats,
  getHouseEdge,
  getPocketCount,
  straightBet,
  OUTSIDE_BETS,
} from '@/lib/roulette-engine';
import type {
  WheelType,
  Pocket,
  PlacedBet,
  BetDefinition,
  GameStats,
} from '@/lib/roulette-engine';

import RouletteWheel from '@/components/RouletteWheel';
import RouletteTable from '@/components/RouletteTable';
import BetPanel from '@/components/BetPanel';
import StatsTracker from '@/components/StatsTracker';

const STARTING_BALANCE = 1000;

export default function RoulettePage() {
  const [wheelType, setWheelType] = useState<WheelType>('european');
  const [balance, setBalance] = useState(STARTING_BALANCE);
  const [chipSize, setChipSize] = useState(5);
  const [currentBets, setCurrentBets] = useState<PlacedBet[]>([]);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<Pocket | null>(null);
  const [lastWin, setLastWin] = useState(0);
  const [stats, setStats] = useState<GameStats>(createStats(wheelType));

  // Bet key for deduplication
  const betKey = (bet: BetDefinition) => `${bet.type}:${bet.numbers.join(',')}`;

  // Active bets map for table highlighting
  const activeBetsMap = new Map<string, number>();
  for (const bet of currentBets) {
    const key = betKey(bet.definition);
    activeBetsMap.set(key, (activeBetsMap.get(key) || 0) + bet.amount);
  }

  const handleBetPlace = useCallback((definition: BetDefinition) => {
    if (spinning) return;
    const totalCurrentBets = currentBets.reduce((sum, b) => sum + b.amount, 0);
    if (totalCurrentBets + chipSize > balance) return;

    // Check if this exact bet already exists; if so, add to it
    const key = betKey(definition);
    const existing = currentBets.findIndex(b => betKey(b.definition) === key);

    if (existing >= 0) {
      const updated = [...currentBets];
      updated[existing] = { ...updated[existing], amount: updated[existing].amount + chipSize };
      setCurrentBets(updated);
    } else {
      setCurrentBets([...currentBets, { definition, amount: chipSize }]);
    }
  }, [currentBets, chipSize, balance, spinning]);

  const handleClearBets = useCallback(() => {
    if (spinning) return;
    setCurrentBets([]);
    setResult(null);
    setLastWin(0);
  }, [spinning]);

  const handleSpin = useCallback(() => {
    if (spinning || currentBets.length === 0) return;

    const totalBet = currentBets.reduce((sum, b) => sum + b.amount, 0);
    if (totalBet > balance) return;

    setSpinning(true);
    setResult(null);
    setLastWin(0);

    // Deduct bet from balance immediately
    setBalance(prev => prev - totalBet);

    // Generate result
    const pocket = spin(wheelType);
    setResult(pocket);
  }, [spinning, currentBets, balance, wheelType]);

  const handleSpinComplete = useCallback(() => {
    if (!result) return;

    const resolved = resolveBets(result, currentBets);
    setLastWin(resolved.totalWon);
    setBalance(prev => prev + resolved.totalWon);
    setStats(prev => updateStats(prev, resolved, wheelType));
    setSpinning(false);
  }, [result, currentBets, wheelType]);

  const handleWheelTypeChange = useCallback((type: WheelType) => {
    if (spinning) return;
    setWheelType(type);
    setCurrentBets([]);
    setResult(null);
    setLastWin(0);
    setStats(createStats(type));
    setBalance(STARTING_BALANCE);
  }, [spinning]);

  const handleReset = useCallback(() => {
    if (spinning) return;
    setBalance(STARTING_BALANCE);
    setCurrentBets([]);
    setResult(null);
    setLastWin(0);
    setStats(createStats(wheelType));
  }, [spinning, wheelType]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 32px',
          borderBottom: `1px solid ${colors.primaryLight}`,
        }}
      >
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 24, fontWeight: 800, color: colors.white }}>Play</span>
          <span style={{ fontSize: 24, fontWeight: 300, color: colors.secondary, textTransform: 'uppercase', letterSpacing: '0.08em' }}>book</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Wheel type toggle */}
          <div
            style={{
              display: 'flex',
              background: colors.primaryDark,
              borderRadius: 8,
              padding: 3,
              gap: 2,
            }}
          >
            {(['european', 'american'] as WheelType[]).map((type) => (
              <button
                key={type}
                onClick={() => handleWheelTypeChange(type)}
                disabled={spinning}
                style={{
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: 'none',
                  background: wheelType === type ? colors.primaryLight : 'transparent',
                  color: wheelType === type ? colors.white : colors.neutral500,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: spinning ? 'default' : 'pointer',
                  transition: 'all 0.15s ease',
                  fontFamily: 'system-ui',
                }}
              >
                {type === 'european' ? 'European' : 'American'}
                <span style={{ fontSize: 11, color: colors.neutral500, marginLeft: 6 }}>
                  {getHouseEdge(type)}%
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={handleReset}
            disabled={spinning}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              border: `1px solid ${colors.neutral700}`,
              background: 'transparent',
              color: colors.neutral300,
              fontSize: 13,
              fontWeight: 600,
              cursor: spinning ? 'default' : 'pointer',
              fontFamily: 'system-ui',
            }}
          >
            Reset
          </button>
        </div>
      </header>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          gap: 24,
          padding: 32,
          maxWidth: 1400,
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Left column: Wheel + Table */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          {/* Wheel type info bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              padding: '12px 24px',
              background: colors.primaryDark,
              borderRadius: 8,
              width: '100%',
              maxWidth: 720,
            }}
          >
            <div>
              <span style={{ fontSize: 20, fontWeight: 800, color: colors.white }}>
                {wheelType === 'european' ? 'European' : 'American'} Roulette
              </span>
            </div>
            <div style={{ fontSize: 13, color: colors.neutral300, display: 'flex', gap: 16 }}>
              <span><strong style={{ color: colors.accent }}>{getPocketCount(wheelType)}</strong> pockets</span>
              <span><strong style={{ color: colors.accent }}>{wheelType === 'european' ? '1' : '2'}</strong> zero{wheelType === 'american' ? 's' : ''}</span>
              <span><strong style={{ color: colors.accent }}>{getHouseEdge(wheelType)}%</strong> house edge</span>
            </div>
          </div>

          {/* Wheel */}
          <RouletteWheel
            wheelType={wheelType}
            result={result}
            spinning={spinning}
            onSpinComplete={handleSpinComplete}
          />

          {/* Table */}
          <RouletteTable
            wheelType={wheelType}
            onBetPlace={handleBetPlace}
            activeBets={activeBetsMap}
            result={spinning ? null : result}
            disabled={spinning}
          />

          {/* Educational callout */}
          <div
            style={{
              maxWidth: 720,
              width: '100%',
              padding: 20,
              background: colors.primaryDark,
              borderRadius: 12,
              borderLeft: `4px solid ${colors.secondary}`,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.secondary, marginBottom: 8 }}>
              This is a demo — not real gambling
            </div>
            <div style={{ fontSize: 13, color: colors.neutral300, lineHeight: 1.6 }}>
              No real money is involved. This simulator uses the same random math as a real roulette wheel.
              Watch your results over many spins — they&apos;ll converge toward the house edge of{' '}
              <strong style={{ color: colors.accent }}>{getHouseEdge(wheelType)}%</strong>.
              That&apos;s the math. No strategy changes it. The only choice that matters is the wheel type.
            </div>
          </div>
        </div>

        {/* Right column: Bet Panel + Stats */}
        <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <BetPanel
            balance={balance}
            chipSize={chipSize}
            onChipSizeChange={setChipSize}
            currentBets={currentBets}
            onClearBets={handleClearBets}
            onSpin={handleSpin}
            spinning={spinning}
            result={spinning ? null : result}
            lastWin={lastWin}
            wheelType={wheelType}
          />
          <StatsTracker stats={stats} />
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: '16px 32px',
          borderTop: `1px solid ${colors.primaryLight}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          color: colors.neutral500,
        }}
      >
        <span>Playbook — Open-source gambling entertainment literacy</span>
        <span>Free, confidential support 24/7: <strong style={{ color: colors.white }}>1-800-522-4700</strong></span>
      </footer>
    </div>
  );
}
