'use client';

import { colors } from '@/lib/brand-tokens';
import type { GameStats, SpinResult } from '@/lib/roulette-engine';

interface StatsTrackerProps {
  stats: GameStats;
}

export default function StatsTracker({ stats }: StatsTrackerProps) {
  if (stats.spins === 0) {
    return (
      <div
        style={{
          background: colors.primaryDark,
          borderRadius: 12,
          padding: 24,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
          Session Stats
        </div>
        <div style={{ fontSize: 14, color: colors.neutral500, fontStyle: 'italic' }}>
          Place bets and spin to start tracking your results against the house edge.
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
        borderRadius: 12,
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
                borderRadius: 4,
                background:
                  result.pocket.color === 'green' ? '#2E7D32' :
                  result.pocket.color === 'red' ? '#D32F2F' : '#212121',
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

      {/* Educational note */}
      {stats.spins >= 10 && (
        <div
          style={{
            padding: 12,
            borderRadius: 8,
            background: colors.primary,
            fontSize: 12,
            color: colors.neutral500,
            lineHeight: 1.6,
            borderLeft: `3px solid ${colors.secondary}`,
          }}
        >
          {stats.spins < 50 ? (
            <>
              <strong style={{ color: colors.secondary }}>Early results swing wildly.</strong>{' '}
              With only {stats.spins} spins, your actual edge ({stats.actualEdge.toFixed(1)}%) can be far from the
              theoretical {stats.expectedEdge}%. Keep spinning — the math converges over time.
            </>
          ) : stats.spins < 200 ? (
            <>
              <strong style={{ color: colors.secondary }}>Getting closer.</strong>{' '}
              After {stats.spins} spins, your results are starting to settle. The gap between your actual edge
              ({stats.actualEdge.toFixed(1)}%) and the theoretical ({stats.expectedEdge}%) narrows with more spins.
            </>
          ) : (
            <>
              <strong style={{ color: colors.secondary }}>The math is showing.</strong>{' '}
              After {stats.spins} spins, your actual edge ({stats.actualEdge.toFixed(1)}%) is converging toward
              the theoretical {stats.expectedEdge}%. This is the law of large numbers in action — no strategy
              changes this math.
            </>
          )}
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div
      style={{
        background: colors.primary,
        borderRadius: 8,
        padding: '10px 12px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 700, color: colors.neutral500, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 18, fontWeight: 800, color, fontFamily: 'system-ui' }}>
        {value}
      </div>
    </div>
  );
}
