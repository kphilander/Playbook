'use client';

import { colors, fonts } from '@/lib/brand-tokens';

interface RouletteVisualsProps {
  chapterId: string;
  slideIndex: number;
}

/* ─── Shared layout ─── */

function VisualLayout({ label, children, caption }: { label: string; children: React.ReactNode; caption?: string }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '40px 16px 16px' }}>
      <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: colors.secondary, marginBottom: 16, fontFamily: fonts.heading }}>
        {label}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        {children}
      </div>
      {caption && (
        <div style={{ fontSize: 11, color: colors.neutral500, textAlign: 'center', marginTop: 12, lineHeight: 1.4, fontFamily: fonts.body }}>
          {caption}
        </div>
      )}
    </div>
  );
}

/* ─── Simplified roulette wheel SVG ─── */

const ROULETTE_RED = '#D32F2F';
const ROULETTE_BLACK = '#212121';
const ROULETTE_GREEN = '#2E7D32';

function MiniWheel({ pockets, zeros, highlight }: { pockets: number; zeros: number; highlight?: 'green' }) {
  const segments = 18;
  const radius = 70;
  const cx = 80;
  const cy = 80;

  return (
    <svg viewBox="0 0 160 160" width={140} height={140}>
      {/* Outer rim */}
      <circle cx={cx} cy={cy} r={radius + 8} fill="none" stroke={colors.primaryLight} strokeWidth="3" />
      {/* Segments */}
      {Array.from({ length: segments }).map((_, i) => {
        const angleStart = (i / segments) * 360 - 90;
        const angleEnd = ((i + 1) / segments) * 360 - 90;
        const startRad = (angleStart * Math.PI) / 180;
        const endRad = (angleEnd * Math.PI) / 180;
        const x1 = cx + radius * Math.cos(startRad);
        const y1 = cy + radius * Math.sin(startRad);
        const x2 = cx + radius * Math.cos(endRad);
        const y2 = cy + radius * Math.sin(endRad);

        let fill: string;
        if (i === 0) fill = ROULETTE_GREEN;
        else if (zeros === 2 && i === segments / 2) fill = ROULETTE_GREEN;
        else fill = i % 2 === 1 ? ROULETTE_RED : ROULETTE_BLACK;

        const isGreen = fill === ROULETTE_GREEN;

        return (
          <path
            key={i}
            d={`M${cx},${cy} L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`}
            fill={fill}
            stroke={colors.primaryDark}
            strokeWidth="0.5"
            opacity={highlight === 'green' && !isGreen ? 0.3 : 1}
          />
        );
      })}
      {/* Hub */}
      <circle cx={cx} cy={cy} r={28} fill={colors.primaryDark} stroke={colors.primaryLight} strokeWidth="1" />
      {/* Center text */}
      <text x={cx} y={cy - 4} textAnchor="middle" fill={colors.white} fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">
        {pockets}
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill={colors.neutral500} fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">
        POCKETS
      </text>
      {/* Ball */}
      <circle cx={cx + radius - 6} cy={cy - 2} r={4} fill={colors.white} opacity="0.9" />
      {/* Green highlight glow */}
      {highlight === 'green' && (
        <>
          <circle cx={cx} cy={cy - radius + 4} r={8} fill={ROULETTE_GREEN} opacity="0.3" />
        </>
      )}
    </svg>
  );
}

/* ─── Simplified table grid ─── */

function MiniTable({ highlightArea }: { highlightArea?: 'inside' | 'outside' | 'all' }) {
  const CELL = 16;
  const COLS = 12;
  const ROWS = 3;
  const redSet = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

  return (
    <svg viewBox="0 0 220 90" width="100%" height={80}>
      {/* Zero */}
      <rect x="0" y="0" width={CELL} height={CELL * ROWS + 4} rx="2" fill={ROULETTE_GREEN}
        opacity={highlightArea === 'outside' ? 0.3 : 1} />
      <text x={CELL / 2} y={CELL * 1.5 + 2} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter">0</text>

      {/* Number grid */}
      {Array.from({ length: COLS }).map((_, col) =>
        Array.from({ length: ROWS }).map((_, row) => {
          const num = col * 3 + (3 - row);
          const isRed = redSet.has(num);
          const isInside = highlightArea === 'inside' || highlightArea === 'all';
          return (
            <rect
              key={`${col}-${row}`}
              x={CELL + 2 + col * (CELL + 1)}
              y={row * (CELL + 1)}
              width={CELL}
              height={CELL}
              rx="1.5"
              fill={isRed ? ROULETTE_RED : ROULETTE_BLACK}
              opacity={highlightArea === 'outside' ? 0.3 : (isInside ? 1 : 0.5)}
            />
          );
        })
      )}

      {/* Outside bets area */}
      <rect x={CELL + 2} y={ROWS * (CELL + 1) + 4} width={(CELL + 1) * 4 - 1} height={12} rx="2"
        fill={highlightArea === 'outside' || highlightArea === 'all' ? ROULETTE_RED : colors.primaryLight}
        opacity={highlightArea === 'inside' ? 0.3 : 0.7} />
      <text x={CELL + 2 + (CELL + 1) * 2} y={ROWS * (CELL + 1) + 13} textAnchor="middle" fill="white" fontSize="6" fontWeight="600" fontFamily="Inter">
        {highlightArea === 'outside' ? 'RED' : '1st 12'}
      </text>

      <rect x={CELL + 2 + (CELL + 1) * 4} y={ROWS * (CELL + 1) + 4} width={(CELL + 1) * 4 - 1} height={12} rx="2"
        fill={highlightArea === 'outside' || highlightArea === 'all' ? ROULETTE_BLACK : colors.primaryLight}
        opacity={highlightArea === 'inside' ? 0.3 : 0.7} />
      <text x={CELL + 2 + (CELL + 1) * 6} y={ROWS * (CELL + 1) + 13} textAnchor="middle" fill="white" fontSize="6" fontWeight="600" fontFamily="Inter">
        {highlightArea === 'outside' ? 'BLK' : '2nd 12'}
      </text>

      <rect x={CELL + 2 + (CELL + 1) * 8} y={ROWS * (CELL + 1) + 4} width={(CELL + 1) * 4 - 1} height={12} rx="2"
        fill={highlightArea === 'outside' || highlightArea === 'all' ? colors.secondary : colors.primaryLight}
        opacity={highlightArea === 'inside' ? 0.3 : 0.7} />
      <text x={CELL + 2 + (CELL + 1) * 10} y={ROWS * (CELL + 1) + 13} textAnchor="middle" fill="white" fontSize="6" fontWeight="600" fontFamily="Inter">
        {highlightArea === 'outside' ? 'ODD' : '3rd 12'}
      </text>
    </svg>
  );
}

/* ─── Myth bust icon (brand dual-weight) ─── */

function MythBustIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <g strokeWidth="2"><circle cx="12" cy="12" r="9" /></g>
      <g strokeWidth="1.5"><line x1="8" y1="8" x2="16" y2="16" /><line x1="16" y1="8" x2="8" y2="16" /></g>
    </svg>
  );
}

function MythCard({ myth, truth }: { myth: string; truth: string }) {
  return (
    <div style={{
      padding: '12px 14px', background: 'rgba(255,61,0,0.06)',
      borderRadius: 10, border: '1px solid rgba(255,61,0,0.15)', width: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <span style={{ color: colors.danger, flexShrink: 0 }}><MythBustIcon /></span>
        <span style={{ fontSize: 12, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>{myth}</span>
      </div>
      <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>{truth}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Chapter Visuals
   ═══════════════════════════════════════════ */

function HowItWorksVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="The Wheel" caption="Numbers 1–36 in red & black, plus green zero(s)">
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <MiniWheel pockets={37} zeros={1} />
            <div style={{ fontSize: 11, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading, marginTop: 6 }}>European</div>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>1 zero</div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Place Your Bets" caption="Chips on numbers, groups, or colors">
        <MiniTable highlightArea="all" />
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          {[
            { label: 'Inside', desc: 'Specific numbers', color: colors.white },
            { label: 'Outside', desc: 'Groups', color: colors.neutral300 },
          ].map(b => (
            <div key={b.label} style={{
              padding: '8px 12px', borderRadius: 8, background: colors.primaryDark,
              border: `1px solid ${colors.primaryLight}`, textAlign: 'center', flex: 1,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: b.color, fontFamily: fonts.heading }}>{b.label}</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="The Spin" caption="Ball lands in a random pocket">
        <MiniWheel pockets={37} zeros={1} />
        <div style={{
          padding: '8px 20px', borderRadius: 8,
          background: 'rgba(211,47,47,0.15)', border: '1px solid rgba(211,47,47,0.3)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ width: 20, height: 20, borderRadius: 10, background: ROULETTE_RED }} />
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: colors.white, fontFamily: fonts.heading }}>17</div>
            <div style={{ fontSize: 9, color: colors.neutral300, fontFamily: fonts.body }}>Black</div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body, textAlign: 'center' }}>
          Wins paid, losses cleared. Next round.
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="Independence" caption="The wheel has no memory">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[
          { num: '23', col: ROULETTE_RED, label: 'Red' },
          { num: '8', col: ROULETTE_BLACK, label: 'Black' },
          { num: '23', col: ROULETTE_RED, label: 'Red' },
        ].map((r, i) => (
          <div key={i}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 12px', borderRadius: 8,
              background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
            }}>
              <span style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.mono }}>#{i + 1}</span>
              <div style={{ width: 22, height: 22, borderRadius: 4, background: r.col, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'white', fontFamily: fonts.heading }}>{r.num}</span>
              </div>
              <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>{r.label}</span>
            </div>
            {i < 2 && (
              <div style={{ textAlign: 'center', padding: '2px 0' }}>
                <span style={{ fontSize: 9, color: colors.neutral700, fontFamily: fonts.heading, letterSpacing: 1 }}>NO CONNECTION</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </VisualLayout>
  );
}

function BetTypesVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    const insideBets = [
      { name: 'Straight', payout: '35:1', covers: '1 number' },
      { name: 'Split', payout: '17:1', covers: '2 numbers' },
      { name: 'Street', payout: '11:1', covers: '3 numbers' },
      { name: 'Corner', payout: '8:1', covers: '4 numbers' },
      { name: 'Six line', payout: '5:1', covers: '6 numbers' },
    ];
    return (
      <VisualLayout label="Inside Bets" caption="Higher risk, higher payout">
        <MiniTable highlightArea="inside" />
        <div style={{ width: '88%' }}>
          {insideBets.map(b => (
            <div key={b.name} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '5px 0', borderBottom: `1px solid ${colors.primaryLight}`,
            }}>
              <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>{b.name}</span>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>{b.covers}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>{b.payout}</span>
              </div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    const outsideBets = [
      { name: 'Red / Black', payout: '1:1', covers: '18' },
      { name: 'Odd / Even', payout: '1:1', covers: '18' },
      { name: 'High / Low', payout: '1:1', covers: '18' },
      { name: 'Dozens', payout: '2:1', covers: '12' },
      { name: 'Columns', payout: '2:1', covers: '12' },
    ];
    return (
      <VisualLayout label="Outside Bets" caption="Lower risk, lower payout">
        <MiniTable highlightArea="outside" />
        <div style={{ width: '88%' }}>
          {outsideBets.map(b => (
            <div key={b.name} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '5px 0', borderBottom: `1px solid ${colors.primaryLight}`,
            }}>
              <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>{b.name}</span>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>{b.covers} nums</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: colors.accent, fontFamily: fonts.mono }}>{b.payout}</span>
              </div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="Same Edge" caption="Payouts are calibrated so the house edge is consistent">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[
          { bet: 'Straight up', payout: '35:1', edge: '2.70%' },
          { bet: 'Red / Black', payout: '1:1', edge: '2.70%' },
          { bet: 'Dozens', payout: '2:1', edge: '2.70%' },
        ].map(b => (
          <div key={b.bet} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '8px 12px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: colors.white, fontFamily: fonts.heading }}>{b.bet}</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>{b.payout}</div>
            </div>
            <div style={{
              padding: '4px 10px', borderRadius: 4,
              background: 'rgba(0,212,170,0.1)', border: `1px solid rgba(0,212,170,0.2)`,
            }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>{b.edge}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        padding: '8px 14px', borderRadius: 8,
        background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.12)',
        width: '85%', textAlign: 'center',
      }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading }}>EXCEPTION</div>
        <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, marginTop: 2 }}>
          5-number bet (American): <strong style={{ color: colors.danger, fontFamily: fonts.mono }}>7.89%</strong>
        </div>
      </div>
    </VisualLayout>
  );
}

function TheMathVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="The Zero Is the Edge" caption="Without zeros, every bet would be perfectly fair">
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <MiniWheel pockets={37} zeros={1} highlight="green" />
            <div style={{ fontSize: 11, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading, marginTop: 4 }}>European</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>2.70%</div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="How It Works" caption="The gap between real odds and payout odds">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ padding: '10px 14px', borderRadius: 8, background: colors.primaryDark, border: `1px solid ${colors.primaryLight}` }}>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>YOUR CHANCE</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: colors.white, fontFamily: fonts.mono }}>1 in 37</div>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>= 2.70% probability</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 10, color: colors.neutral700, fontFamily: fonts.heading, letterSpacing: 1 }}>BUT PAYOUT IS</span>
          </div>
          <div style={{ padding: '10px 14px', borderRadius: 8, background: colors.primaryDark, border: `1px solid ${colors.primaryLight}` }}>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>PAYOUT</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>35 : 1</div>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>as if there were only 36 pockets</div>
          </div>
          <div style={{
            padding: '6px 10px', borderRadius: 6,
            background: 'rgba(0,212,170,0.06)', textAlign: 'center',
          }}>
            <span style={{ fontSize: 10, color: colors.secondary, fontFamily: fonts.body }}>That gap = </span>
            <span style={{ fontSize: 12, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>house edge</span>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Your Wallet" caption="Per $100 wagered, over time">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '85%' }}>
          <div style={{ padding: '10px 20px', borderRadius: 8, background: colors.primaryLight, fontSize: 18, fontWeight: 800, color: colors.white, fontFamily: fonts.mono }}>$100</div>
          <svg viewBox="0 0 16 24" width={12} height={18} stroke={colors.neutral500} strokeWidth="2" fill="none" strokeLinecap="round">
            <line x1="8" y1="0" x2="8" y2="20" /><polyline points="3,16 8,22 13,16" />
          </svg>
          <div style={{ display: 'flex', width: '100%', gap: 8 }}>
            <div style={{ flex: 1, padding: '10px 8px', borderRadius: 8, background: 'rgba(0,212,170,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>EUROPEAN</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>$97.30</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>back to you</div>
            </div>
            <div style={{ flex: 1, padding: '10px 8px', borderRadius: 8, background: 'rgba(255,107,53,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>AMERICAN</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>$94.74</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>back to you</div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center' }}>
            Nearly <strong style={{ color: colors.white }}>double</strong> the cost for one extra pocket.
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="French Rules" caption="La partage / en prison on even-money bets">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { wheel: 'American', edge: '5.26%', color: colors.accent, bar: 100 },
          { wheel: 'European', edge: '2.70%', color: colors.secondary, bar: 51 },
          { wheel: 'French', edge: '1.35%', color: colors.success, bar: 26 },
        ].map(w => (
          <div key={w.wheel}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: colors.white, fontFamily: fonts.heading }}>{w.wheel}</span>
              <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.mono }}>{w.edge}</span>
            </div>
            <div style={{ height: 10, borderRadius: 5, background: colors.primaryLight, overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: 5, background: w.color, width: `${w.bar}%`, transition: 'width 0.6s ease-out' }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{
        padding: '8px 14px', borderRadius: 8,
        background: 'rgba(0,200,83,0.06)', border: `1px solid rgba(0,200,83,0.15)`,
        width: '85%', textAlign: 'center',
      }}>
        <div style={{ fontSize: 10, color: colors.success, fontFamily: fonts.body }}>
          La partage: zero lands, get <strong>half</strong> your even-money bet back
        </div>
      </div>
    </VisualLayout>
  );
}

function TipsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Check the Wheel" caption="The only decision that changes the math">
        <div style={{ display: 'flex', gap: 12, width: '90%' }}>
          {[
            { type: 'EU', zeros: '1 zero', edge: '2.70%', color: colors.secondary },
            { type: 'US', zeros: '2 zeros', edge: '5.26%', color: colors.accent },
          ].map(w => (
            <div key={w.type} style={{
              flex: 1, padding: '14px 8px', borderRadius: 10,
              background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
              textAlign: 'center',
            }}>
              <div style={{ width: 24, height: 24, borderRadius: 12, background: ROULETTE_GREEN, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: 'white', fontFamily: fonts.heading }}>{w.type === 'EU' ? '0' : '00'}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.white, fontFamily: fonts.heading }}>{w.type}</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>{w.zeros}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: w.color, fontFamily: fonts.mono, marginTop: 4 }}>{w.edge}</div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="La Partage" caption="Best house edge in roulette">
        <div style={{
          width: '85%', padding: '16px', borderRadius: 10,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>EVEN-MONEY BET</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: colors.white, fontFamily: fonts.heading, margin: '6px 0' }}>$20 on Red</div>
          <svg viewBox="0 0 16 20" width={10} height={14} stroke={colors.neutral500} strokeWidth="2" fill="none" strokeLinecap="round">
            <line x1="8" y1="0" x2="8" y2="16" /><polyline points="3,12 8,18 13,12" />
          </svg>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', margin: '8px 0' }}>
            <div style={{ width: 18, height: 18, borderRadius: 9, background: ROULETTE_GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 8, fontWeight: 800, color: 'white' }}>0</span>
            </div>
            <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Ball lands on zero</span>
          </div>
          <div style={{
            padding: '8px', borderRadius: 6, background: 'rgba(0,200,83,0.08)',
            border: `1px solid rgba(0,200,83,0.15)`,
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: colors.success, fontFamily: fonts.mono }}>$10 returned</div>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>Half your bet back</div>
          </div>
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: colors.success, fontFamily: fonts.mono }}>1.35%</div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Independent Spins" caption="Electronic scoreboards have zero predictive value">
        <div style={{
          width: '85%', padding: '12px', borderRadius: 10,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 8 }}>SCOREBOARD</div>
          <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {[ROULETTE_BLACK, ROULETTE_BLACK, ROULETTE_RED, ROULETTE_BLACK, ROULETTE_BLACK, ROULETTE_RED, ROULETTE_BLACK, ROULETTE_BLACK].map((c, i) => (
              <div key={i} style={{ width: 18, height: 18, borderRadius: 3, background: c, opacity: 0.7 }} />
            ))}
          </div>
          <div style={{ marginTop: 8, fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, fontStyle: 'italic' }}>
            &ldquo;Black is hot!&rdquo;
          </div>
        </div>
        <div style={{
          padding: '8px 16px', borderRadius: 8,
          background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading }}>Decoration, not data</div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>Next spin: still 48.6% red</div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 3) {
    return (
      <VisualLayout label="Skip the 5-Number Bet" caption="The worst bet on the table">
        <div style={{
          width: '85%', padding: '14px', borderRadius: 10,
          background: 'rgba(255,61,0,0.06)', border: `1px solid rgba(255,61,0,0.15)`,
          textAlign: 'center',
        }}>
          <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginBottom: 8 }}>
            {['0', '00', '1', '2', '3'].map(n => (
              <div key={n} style={{
                width: 28, height: 28, borderRadius: 4,
                background: n === '0' || n === '00' ? ROULETTE_GREEN : ROULETTE_RED,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'white', fontFamily: fonts.heading }}>{n}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 24, fontWeight: 800, color: colors.danger, fontFamily: fonts.mono }}>7.89%</div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>vs 5.26% everywhere else</div>
        </div>
        <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body, textAlign: 'center' }}>
          American roulette only
        </div>
      </VisualLayout>
    );
  }

  // slide === 4
  return (
    <VisualLayout label="Set Your Budget" caption="Decide before you sit down">
      <div style={{
        width: '85%', padding: '14px', borderRadius: 10,
        background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
      }}>
        {[
          { left: '30\u201340', right: 'spins / hour (table)' },
          { left: '60\u201380', right: 'spins / hour (online)' },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', padding: '8px 0',
            borderBottom: i < 1 ? `1px solid ${colors.primaryLight}` : 'none',
          }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: colors.white, fontFamily: fonts.mono }}>{row.left}</span>
            <span style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>{row.right}</span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>
          Your session = entertainment budget
        </div>
        <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, marginTop: 4 }}>
          Decide the amount before you start
        </div>
      </div>
    </VisualLayout>
  );
}

function MythsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Busted" caption="Math doesn't change with bet sizing">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MythCard
            myth="Martingale System"
            truth="Double after every loss? You'll hit the table limit or your budget before the math rescues you. Same house edge on every spin."
          />
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>MARTINGALE SEQUENCE</div>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {['$5', '$10', '$20', '$40', '$80', '$160', '$320'].map((b, i) => (
                <span key={i} style={{
                  fontSize: 9, fontWeight: 600, color: i < 6 ? colors.neutral300 : colors.danger,
                  fontFamily: fonts.mono,
                  padding: '2px 4px', borderRadius: 3,
                  background: i < 6 ? 'rgba(255,255,255,0.03)' : 'rgba(255,61,0,0.1)',
                }}>{b}</span>
              ))}
            </div>
            <div style={{ fontSize: 9, color: colors.danger, fontFamily: fonts.body, marginTop: 4 }}>
              7 losses = $635 down, chasing a $5 win
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 1
  return (
    <VisualLayout label="Busted" caption="The ball doesn't know you">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <MythCard
          myth="&quot;Lucky&quot; Numbers"
          truth="Every number has exactly the same probability: 1 in 37 (EU) or 1 in 38 (US). The ball doesn't care about birthdays."
        />
        <MythCard
          myth="Red Is &quot;Due&quot;"
          truth="8 blacks in a row? Next spin is still 48.6% red, 48.6% black, 2.7% green. Exactly the same as always."
        />
      </div>
    </VisualLayout>
  );
}

/* ─── Main Export ─── */
export default function RouletteVisuals({ chapterId, slideIndex }: RouletteVisualsProps) {
  return (
    <div key={`${chapterId}-${slideIndex}`} style={{ height: '100%', animation: 'fadeSlideIn 0.4s ease-out' }}>
      {chapterId === 'how-it-works' && <HowItWorksVisual slide={slideIndex} />}
      {chapterId === 'bet-types' && <BetTypesVisual slide={slideIndex} />}
      {chapterId === 'the-math' && <TheMathVisual slide={slideIndex} />}
      {chapterId === 'tips' && <TipsVisual slide={slideIndex} />}
      {chapterId === 'myths' && <MythsVisual slide={slideIndex} />}
    </div>
  );
}
