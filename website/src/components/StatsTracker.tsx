'use client';

import { useState, useCallback } from 'react';
import { colors, fonts, rouletteColors, radius } from '@/lib/brand-tokens';
import type { GameStats, SpinResult, WheelType } from '@/lib/roulette-engine';
import { simulateBatch } from '@/lib/roulette-engine';

interface StatsTrackerProps {
  stats: GameStats;
  wheelType?: WheelType;
}

export default function StatsTracker({ stats, wheelType = 'european' }: StatsTrackerProps) {
  const [simData, setSimData] = useState<{ spin: number; actual: number; expected: number }[] | null>(null);
  const [simulating, setSimulating] = useState(false);

  const handleSimulate = useCallback(() => {
    setSimulating(true);
    // Use requestAnimationFrame to allow the UI to show "Simulating..." before heavy computation
    requestAnimationFrame(() => {
      const data = simulateBatch(wheelType, 1000);
      setSimData(data);
      setSimulating(false);
    });
  }, [wheelType]);
  if (stats.spins === 0) {
    return (
      <div
        style={{
          background: colors.primaryDark,
          borderRadius: radius.lg,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1 }}>
          Session Stats
        </div>
        <div style={{ fontSize: 14, color: colors.neutral500, fontStyle: 'italic' }}>
          Place bets and spin to start tracking your results against the house edge.
        </div>

        {/* Simulate button available even before first spin */}
        <div>
          <button
            onClick={handleSimulate}
            disabled={simulating}
            style={{
              width: '100%',
              padding: '10px 16px',
              borderRadius: radius.md,
              border: `1px solid ${colors.secondary}40`,
              background: simData ? colors.primary : `${colors.secondary}15`,
              color: colors.secondary,
              fontSize: 13,
              fontWeight: 700,
              cursor: simulating ? 'default' : 'pointer',
              fontFamily: fonts.heading,
              transition: 'all 0.15s ease',
            }}
          >
            {simulating ? 'Simulating...' : simData ? '↻ Re-simulate 1,000 Spins' : '⚡ Simulate 1,000 Spins'}
          </button>
          {!simData && (
            <div style={{ fontSize: 11, color: colors.neutral500, marginTop: 6, lineHeight: 1.5 }}>
              See how results converge to the house edge over 1,000 spins — instant, no animation.
            </div>
          )}
        </div>

        {/* Simulation chart (if run) */}
        {simData && (() => {
          const simChartW = 280;
          const simChartH = 100;
          const maxSpin = simData[simData.length - 1].spin;
          const allVals = simData.map(d => d.actual);
          const simMaxEdge = Math.max(20, ...allVals);
          const simMinEdge = Math.min(-20, ...allVals);
          const simRange = simMaxEdge - simMinEdge;
          const simToX = (s: number) => (s / maxSpin) * simChartW;
          const simToY = (val: number) => simChartH - ((val - simMinEdge) / simRange) * simChartH;
          const simExpectedY = simToY(stats.expectedEdge);
          const simZeroY = simToY(0);
          const simPath = simData
            .map((d, i) => `${i === 0 ? 'M' : 'L'} ${simToX(d.spin).toFixed(1)} ${simToY(d.actual).toFixed(1)}`)
            .join(' ');
          return (
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
                1,000-Spin Simulation ($10 on Red)
              </div>
              <div style={{ fontSize: 11, color: colors.neutral300, marginBottom: 8, lineHeight: 1.5 }}>
                Over many spins, losses converge to ~{stats.expectedEdge}%. Short term is wild — long term is math.
              </div>
              <svg viewBox={`-4 -4 ${simChartW + 8} ${simChartH + 8}`} width="100%" height={simChartH + 8} style={{ overflow: 'visible' }}>
                <line x1={0} y1={simZeroY} x2={simChartW} y2={simZeroY} stroke={colors.neutral700} strokeWidth={0.5} strokeDasharray="4,4" />
                <line x1={0} y1={simExpectedY} x2={simChartW} y2={simExpectedY} stroke={colors.secondary} strokeWidth={1.5} strokeDasharray="6,3" opacity={0.7} />
                <path d={simPath} fill="none" stroke={colors.info} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" opacity={0.8} />
                <text x={simChartW + 4} y={simExpectedY + 3} fill={colors.secondary} fontSize={9} fontWeight={600}>
                  {stats.expectedEdge.toFixed(1)}%
                </text>
                <text x={simChartW + 4} y={simZeroY + 3} fill={colors.neutral500} fontSize={9}>0%</text>
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontSize: 10, color: colors.neutral500 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 2, background: colors.info, marginRight: 4, verticalAlign: 'middle' }}></span>
                  Simulated
                </span>
                <span style={{ fontSize: 10, color: colors.neutral500 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 2, background: colors.secondary, marginRight: 4, verticalAlign: 'middle' }}></span>
                  House edge ({stats.expectedEdge}%)
                </span>
              </div>
            </div>
          );
        })()}

        {/* Front-loaded educational message */}
        <div
          style={{
            padding: 12,
            borderRadius: radius.md,
            background: colors.primary,
            fontSize: 12,
            color: colors.neutral500,
            lineHeight: 1.6,
            borderLeft: `3px solid ${colors.secondary}`,
          }}
        >
          <strong style={{ color: colors.secondary }}>The math never changes.</strong>{' '}
          Over thousands of spins, your losses will average {stats.expectedEdge}% of every dollar wagered.
          In the short term, anything can happen — but the house edge is built into every single bet.
        </div>
      </div>
    );
  }

  // Calculate running edge over history
  const edgeHistory: { spin: number; actual: number; expected: number }[] = [];
  let cumWagered = 0;
  let cumWon = 0;
  stats.history.forEach((result: SpinResult, i: number) => {
    cumWagered += result.totalWagered;
    cumWon += result.totalWon;
    const actual = cumWagered > 0 ? ((cumWagered - cumWon) / cumWagered) * 100 : 0;
    edgeHistory.push({ spin: i + 1, actual, expected: stats.expectedEdge });
  });

  // Mini chart (convergence visualization)
  const chartW = 280;
  const chartH = 100;
  const maxSpins = edgeHistory.length;
  const maxEdge = Math.max(20, ...edgeHistory.map(e => Math.abs(e.actual)));
  const minEdge = Math.min(-20, ...edgeHistory.map(e => e.actual));
  const range = maxEdge - minEdge;

  const toX = (i: number) => (i / Math.max(maxSpins - 1, 1)) * chartW;
  const toY = (val: number) => chartH - ((val - minEdge) / range) * chartH;

  const actualPath = edgeHistory
    .map((e, i) => `${i === 0 ? 'M' : 'L'} ${toX(i).toFixed(1)} ${toY(e.actual).toFixed(1)}`)
    .join(' ');

  const expectedY = toY(stats.expectedEdge);
  const zeroY = toY(0);

  return (
    <div
      style={{
        background: colors.primaryDark,
        borderRadius: radius.lg,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1 }}>
        Session Stats
      </div>

      {/* Key numbers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        <StatBox label="Spins" value={String(stats.spins)} color={colors.white} />
        <StatBox label="Wagered" value={`$${stats.totalWagered.toLocaleString()}`} color={colors.white} />
        <StatBox
          label="Net Result"
          value={`${stats.netResult >= 0 ? '+' : ''}$${stats.netResult.toLocaleString()}`}
          color={stats.netResult >= 0 ? colors.success : colors.danger}
        />
      </div>

      {/* Edge comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <StatBox
          label="Your Edge"
          value={`${stats.actualEdge >= 0 ? '' : ''}${stats.actualEdge.toFixed(1)}%`}
          color={colors.accent}
        />
        <StatBox
          label="Expected Edge"
          value={`${stats.expectedEdge.toFixed(2)}%`}
          color={colors.secondary}
        />
      </div>

      {/* Convergence chart */}
      {edgeHistory.length > 1 && (
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
            Convergence — your results vs. expected house edge
          </div>
          <svg viewBox={`-4 -4 ${chartW + 8} ${chartH + 8}`} width="100%" height={chartH + 8} style={{ overflow: 'visible' }}>
            {/* Zero line */}
            <line x1={0} y1={zeroY} x2={chartW} y2={zeroY} stroke={colors.neutral700} strokeWidth={0.5} strokeDasharray="4,4" />

            {/* Expected edge line */}
            <line x1={0} y1={expectedY} x2={chartW} y2={expectedY} stroke={colors.secondary} strokeWidth={1.5} strokeDasharray="6,3" opacity={0.7} />

            {/* Actual edge line */}
            <path d={actualPath} fill="none" stroke={colors.accent} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

            {/* Labels */}
            <text x={chartW + 4} y={expectedY + 3} fill={colors.secondary} fontSize={9} fontWeight={600}>
              {stats.expectedEdge.toFixed(1)}%
            </text>
            <text x={chartW + 4} y={zeroY + 3} fill={colors.neutral500} fontSize={9}>0%</text>
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontSize: 10, color: colors.neutral500 }}>
              <span style={{ display: 'inline-block', width: 12, height: 2, background: colors.accent, marginRight: 4, verticalAlign: 'middle' }}></span>
              Your results
            </span>
            <span style={{ fontSize: 10, color: colors.neutral500 }}>
              <span style={{ display: 'inline-block', width: 12, height: 2, background: colors.secondary, marginRight: 4, verticalAlign: 'middle', borderBottom: '1px dashed' }}></span>
              Expected edge
            </span>
          </div>
        </div>
      )}

      {/* Simulate 1,000 Spins */}
      <div>
        <button
          onClick={handleSimulate}
          disabled={simulating}
          style={{
            width: '100%',
            padding: '10px 16px',
            borderRadius: radius.md,
            border: `1px solid ${colors.secondary}40`,
            background: simData ? colors.primary : `${colors.secondary}15`,
            color: colors.secondary,
            fontSize: 13,
            fontWeight: 700,
            cursor: simulating ? 'default' : 'pointer',
            fontFamily: fonts.heading,
            transition: 'all 0.15s ease',
          }}
        >
          {simulating ? 'Simulating...' : simData ? '↻ Re-simulate 1,000 Spins' : '⚡ Simulate 1,000 Spins'}
        </button>
        {!simData && (
          <div style={{ fontSize: 11, color: colors.neutral500, marginTop: 6, lineHeight: 1.5 }}>
            See how results converge to the house edge over 1,000 spins — instant, no animation.
          </div>
        )}
      </div>

      {/* Simulation convergence chart */}
      {simData && (
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
            1,000-Spin Simulation ($10 on Red)
          </div>
          <div style={{ fontSize: 11, color: colors.neutral300, marginBottom: 8, lineHeight: 1.5 }}>
            Over many spins, your losses always converge to ~{stats.expectedEdge}%. The short term swings wildly — the long term is math.
          </div>
          {(() => {
            const simChartW = 280;
            const simChartH = 100;
            const maxSpin = simData[simData.length - 1].spin;
            const allVals = simData.map(d => d.actual);
            const simMaxEdge = Math.max(20, ...allVals);
            const simMinEdge = Math.min(-20, ...allVals);
            const simRange = simMaxEdge - simMinEdge;
            const simToX = (spin: number) => (spin / maxSpin) * simChartW;
            const simToY = (val: number) => simChartH - ((val - simMinEdge) / simRange) * simChartH;
            const simExpectedY = simToY(stats.expectedEdge);
            const simZeroY = simToY(0);
            const simPath = simData
              .map((d, i) => `${i === 0 ? 'M' : 'L'} ${simToX(d.spin).toFixed(1)} ${simToY(d.actual).toFixed(1)}`)
              .join(' ');

            return (
              <svg viewBox={`-4 -4 ${simChartW + 8} ${simChartH + 8}`} width="100%" height={simChartH + 8} style={{ overflow: 'visible' }}>
                <line x1={0} y1={simZeroY} x2={simChartW} y2={simZeroY} stroke={colors.neutral700} strokeWidth={0.5} strokeDasharray="4,4" />
                <line x1={0} y1={simExpectedY} x2={simChartW} y2={simExpectedY} stroke={colors.secondary} strokeWidth={1.5} strokeDasharray="6,3" opacity={0.7} />
                <path d={simPath} fill="none" stroke={colors.info} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" opacity={0.8} />
                <text x={simChartW + 4} y={simExpectedY + 3} fill={colors.secondary} fontSize={9} fontWeight={600}>
                  {stats.expectedEdge.toFixed(1)}%
                </text>
                <text x={simChartW + 4} y={simZeroY + 3} fill={colors.neutral500} fontSize={9}>0%</text>
              </svg>
            );
          })()}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontSize: 10, color: colors.neutral500 }}>
              <span style={{ display: 'inline-block', width: 12, height: 2, background: colors.info, marginRight: 4, verticalAlign: 'middle' }}></span>
              Simulated (1,000 spins)
            </span>
            <span style={{ fontSize: 10, color: colors.neutral500 }}>
              <span style={{ display: 'inline-block', width: 12, height: 2, background: colors.secondary, marginRight: 4, verticalAlign: 'middle' }}></span>
              House edge ({stats.expectedEdge}%)
            </span>
          </div>
        </div>
      )}

      {/* Recent results strip */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
          Last {Math.min(stats.history.length, 20)} Results
        </div>
        <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {stats.history.slice(-20).map((result, i) => (
            <div
              key={i}
              style={{
                width: 24,
                height: 24,
                borderRadius: radius.sm,
                background:
                  result.pocket.color === 'green' ? rouletteColors.green :
                  result.pocket.color === 'red' ? rouletteColors.red : rouletteColors.black,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 9,
                fontWeight: 700,
                color: colors.white,
              }}
            >
              {result.pocket.number}
            </div>
          ))}
        </div>
      </div>

      {/* Educational note — reframed to front-load the lesson */}
      <div
        style={{
          padding: 12,
          borderRadius: radius.md,
          background: colors.primary,
          fontSize: 12,
          color: colors.neutral500,
          lineHeight: 1.6,
          borderLeft: `3px solid ${colors.secondary}`,
        }}
      >
        {stats.spins === 0 ? (
          <>
            <strong style={{ color: colors.secondary }}>The math never changes.</strong>{' '}
            Over thousands of spins, your losses will average {stats.expectedEdge}% of every dollar wagered.
            In the short term, anything can happen — but the house edge is built into every single bet.
            {!simData && ' Try the "Simulate 1,000 Spins" button to see it.'}
          </>
        ) : stats.spins < 20 ? (
          <>
            <strong style={{ color: colors.secondary }}>Short-term swings are the trap.</strong>{' '}
            After {stats.spins} spin{stats.spins > 1 ? 's' : ''}, you&apos;re {stats.netResult >= 0 ? 'up' : 'down'} — but that&apos;s
            just variance. The house edge of {stats.expectedEdge}% doesn&apos;t show up in a handful of bets.
            That&apos;s what makes gambling feel winnable.
          </>
        ) : stats.spins < 100 ? (
          <>
            <strong style={{ color: colors.secondary }}>Patterns aren&apos;t predictive.</strong>{' '}
            After {stats.spins} spins, your edge is {stats.actualEdge.toFixed(1)}% vs. the theoretical {stats.expectedEdge}%.
            Every spin is independent — past results don&apos;t change future odds. No strategy overcomes the house edge.
          </>
        ) : (
          <>
            <strong style={{ color: colors.secondary }}>The law of large numbers.</strong>{' '}
            After {stats.spins} spins, your actual edge ({stats.actualEdge.toFixed(1)}%) is {
              Math.abs(stats.actualEdge - stats.expectedEdge) < 2 ? 'close to' : 'approaching'
            } the theoretical {stats.expectedEdge}%. This always happens given enough time — it&apos;s math, not luck.
          </>
        )}
      </div>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div
      style={{
        background: colors.primary,
        borderRadius: radius.md,
        padding: '10px 12px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 18, fontWeight: 800, color, fontFamily: fonts.mono }}>
        {value}
      </div>
    </div>
  );
}
