'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { colors, fonts, radius } from '@/lib/brand-tokens';
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

import BrandIcon from '@/components/BrandIcon';
import RouletteWheel from '@/components/RouletteWheel';
import RouletteTable from '@/components/RouletteTable';
import BetPanel from '@/components/BetPanel';
import StatsTracker from '@/components/StatsTracker';
import TutorialOverlay, { resetTutorial } from '@/components/TutorialOverlay';

const STARTING_BALANCE = 1000;
const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

/* ─── Rotating educational fact cards ─── */
const EDUCATIONAL_FACTS = [
  { icon: 'roulette', text: 'The green zero is what gives the house its edge. Without it, roulette would be a fair game.' },
  { icon: 'dice', text: 'Every spin is independent. The wheel has no memory — past results don\'t change future odds.' },
  { icon: 'edge', text: 'Doubling your bet after a loss (Martingale) doesn\'t change the house edge — it just increases variance.' },
  { icon: 'equal', text: 'All bets on the same wheel type have the same house edge. There\'s no "better" bet mathematically.' },
  { icon: 'info', text: 'European roulette (2.7% edge) is better for the player than American (5.26%). One fewer zero makes a big difference.' },
  { icon: 'timer', text: 'The longer you play, the closer your results get to the theoretical house edge. The house always wins given enough time.' },
  { icon: 'myth', text: '"Due" numbers don\'t exist. If red hit 10 times in a row, red and black are still equally likely on the next spin.' },
  { icon: 'fact', text: 'Casinos don\'t need to cheat. The math is built into the game — every bet favors the house by design.' },
];

export default function RoulettePage() {
  const isMobile = useIsMobile();
  const [wheelType, setWheelType] = useState<WheelType>('european');
  const [balance, setBalance] = useState(STARTING_BALANCE);
  const [chipSize, setChipSize] = useState(5);
  const [currentBets, setCurrentBets] = useState<PlacedBet[]>([]);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<Pocket | null>(null);
  const [lastWin, setLastWin] = useState(0);
  const [stats, setStats] = useState<GameStats>(createStats(wheelType));
  const [showTutorial, setShowTutorial] = useState(true);
  const [currentFact, setCurrentFact] = useState(0);

  // Rotate educational facts every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact(f => (f + 1) % EDUCATIONAL_FACTS.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

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

  const handleTutorialComplete = useCallback(() => {
    setShowTutorial(false);
  }, []);

  const handleShowTutorial = useCallback(() => {
    resetTutorial();
    setShowTutorial(true);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      {/* Tutorial Overlay */}
      <TutorialOverlay
        wheelType={wheelType}
        onComplete={handleTutorialComplete}
        visible={showTutorial}
      />

      {/* Header */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '12px 16px' : '16px 32px',
          borderBottom: `1px solid ${colors.primaryLight}`,
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          gap: isMobile ? 8 : 0,
        }}
      >
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: isMobile ? 20 : 24, fontWeight: 800, color: colors.white }}>Play</span><span style={{ fontSize: isMobile ? 20 : 24, fontWeight: 300, color: colors.secondary, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>book</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 16 }}>
          {/* Wheel type toggle */}
          <div
            style={{
              display: 'flex',
              background: colors.primaryDark,
              borderRadius: radius.md,
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
                  padding: isMobile ? '6px 10px' : '8px 16px',
                  borderRadius: radius.sm,
                  border: 'none',
                  background: wheelType === type ? colors.primaryLight : 'transparent',
                  color: wheelType === type ? colors.white : colors.neutral500,
                  fontSize: isMobile ? 11 : 13,
                  fontWeight: 700,
                  cursor: spinning ? 'default' : 'pointer',
                  transition: 'all 0.15s ease',
                  fontFamily: fonts.heading,
                }}
              >
                {isMobile ? (type === 'european' ? 'EU' : 'US') : (type === 'european' ? 'European' : 'American')}
                <span style={{ fontSize: isMobile ? 10 : 11, color: colors.neutral500, marginLeft: 4 }}>
                  {getHouseEdge(type)}%
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={handleReset}
            disabled={spinning}
            style={{
              padding: isMobile ? '6px 10px' : '8px 16px',
              borderRadius: radius.md,
              border: `1px solid ${colors.neutral700}`,
              background: 'transparent',
              color: colors.neutral300,
              fontSize: isMobile ? 11 : 13,
              fontWeight: 600,
              cursor: spinning ? 'default' : 'pointer',
              fontFamily: fonts.heading,
            }}
          >
            Reset
          </button>
          <button
            onClick={handleShowTutorial}
            style={{
              padding: isMobile ? '6px 8px' : '8px 12px',
              borderRadius: radius.md,
              border: `1px solid ${colors.neutral700}`,
              background: 'transparent',
              color: colors.neutral500,
              fontSize: isMobile ? 11 : 13,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: fonts.heading,
            }}
            title="Replay tutorial"
          >
            ?
          </button>
        </div>
      </header>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? 12 : 20,
          padding: isMobile ? '12px 12px' : '24px 32px',
          maxWidth: 1400,
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Educational fact banner — full width at top */}
        <div
          style={{
            width: '100%',
            padding: isMobile ? '10px 12px' : '12px 20px',
            background: colors.primaryDark,
            borderRadius: radius.md,
            borderLeft: `4px solid ${colors.secondary}`,
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 8 : 12,
          }}
        >
          <BrandIcon name={EDUCATIONAL_FACTS[currentFact].icon} size={isMobile ? 16 : 20} style={{ color: colors.secondary, flexShrink: 0, marginTop: isMobile ? 2 : 0 }} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 4 : 8, flex: 1, minWidth: 0 }}>
            <span style={{ fontSize: isMobile ? 9 : 10, fontWeight: 700, color: colors.secondary, textTransform: 'uppercase', letterSpacing: 1, flexShrink: 0 }}>
              Did you know?
            </span>
            <span style={{ fontSize: isMobile ? 12 : 13, color: colors.neutral300, lineHeight: 1.5 }}>
              {EDUCATIONAL_FACTS[currentFact].text}
            </span>
          </div>
        </div>

        {/* Mobile: compact info strip */}
        {isMobile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '8px 12px',
              background: colors.primaryDark,
              borderRadius: radius.md,
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 800, color: colors.white }}>
              {wheelType === 'european' ? 'European' : 'American'}
            </span>
            <div style={{ display: 'flex', gap: 12, fontSize: 12, color: colors.neutral300 }}>
              <span><strong style={{ color: colors.accent }}>{getPocketCount(wheelType)}</strong> pockets</span>
              <span><strong style={{ color: colors.accent }}>{getHouseEdge(wheelType)}%</strong> edge</span>
            </div>
          </div>
        )}

        {/* Game area: Info + Wheel + Table */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexDirection: isMobile ? 'column' : 'row' }}>
          {/* Info bar — vertical, to the left of wheel (desktop only) */}
          {!isMobile && (
            <div
              style={{
                padding: '16px 20px',
                background: colors.primaryDark,
                borderRadius: radius.md,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                flexShrink: 0,
                minWidth: 160,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 800, color: colors.white, lineHeight: 1.2 }}>
                {wheelType === 'european' ? 'European' : 'American'}
                <br />Roulette
              </div>
              <div style={{ fontSize: 13, color: colors.neutral300, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span><strong style={{ color: colors.accent }}>{getPocketCount(wheelType)}</strong> pockets</span>
                <span><strong style={{ color: colors.accent }}>{wheelType === 'european' ? '1' : '2'}</strong> zero{wheelType === 'american' ? 's' : ''}</span>
                <span><strong style={{ color: colors.accent }}>{getHouseEdge(wheelType)}%</strong> house edge</span>
              </div>
            </div>
          )}

          {/* Wheel + Table stacked */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? 12 : 20, width: '100%' }}>
            <RouletteWheel
              wheelType={wheelType}
              result={result}
              spinning={spinning}
              onSpinComplete={handleSpinComplete}
            />
            <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' as const }}>
              <RouletteTable
                wheelType={wheelType}
                onBetPlace={handleBetPlace}
                activeBets={activeBetsMap}
                result={spinning ? null : result}
                disabled={spinning}
              />
            </div>
          </div>
        </div>

        {/* Bottom row: Bet Panel + Stats — side by side on desktop, stacked on mobile */}
        <div style={{ display: 'flex', gap: isMobile ? 12 : 24, flexDirection: isMobile ? 'column' : 'row' }}>
          <div style={{ flex: 1 }}>
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
          </div>
          <div style={{ flex: 1 }}>
            <StatsTracker stats={stats} wheelType={wheelType} />
          </div>
        </div>

        {/* Demo disclaimer */}
        <div style={{ fontSize: 11, color: colors.neutral500, textAlign: 'center' }}>
          This is a demo — no real money involved. Same random math as a real roulette wheel.
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: isMobile ? '12px 16px' : '16px 32px',
          borderTop: `1px solid ${colors.primaryLight}`,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 4 : 0,
          fontSize: isMobile ? 11 : 12,
          color: colors.neutral500,
        }}
      >
        <span>Playbook — Open-source gambling entertainment literacy</span>
        <span>Free, confidential support 24/7: <strong style={{ color: colors.white }}>1-800-522-4700</strong></span>
      </footer>
    </div>
  );
}
