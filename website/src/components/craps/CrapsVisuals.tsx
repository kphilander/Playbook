'use client';

import { colors, fonts } from '@/lib/brand-tokens';

interface CrapsVisualsProps {
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

/* ─── Die face component ─── */

const DOT_POSITIONS: Record<number, [number, number][]> = {
  1: [[15, 15]],
  2: [[7, 7], [23, 23]],
  3: [[7, 7], [15, 15], [23, 23]],
  4: [[7, 7], [23, 7], [7, 23], [23, 23]],
  5: [[7, 7], [23, 7], [15, 15], [7, 23], [23, 23]],
  6: [[7, 7], [23, 7], [7, 15], [23, 15], [7, 23], [23, 23]],
};

function Die({ value, highlight }: { value: number; highlight?: boolean }) {
  const dots = DOT_POSITIONS[value] || [];
  return (
    <svg viewBox="0 0 30 30" width={36} height={36}>
      <rect x="0" y="0" width="30" height="30" rx="4"
        fill={highlight ? colors.secondary : colors.primaryDark}
        stroke={highlight ? colors.secondary : colors.primaryLight}
        strokeWidth="1"
      />
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3"
          fill={highlight ? colors.primaryDark : colors.white}
          opacity={highlight ? 1 : 0.9}
        />
      ))}
    </svg>
  );
}

/* ─── Myth bust card ─── */

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
      <VisualLayout label="The Table" caption="One shooter, everyone bets on the outcome">
        <div style={{ display: 'flex', gap: 8 }}>
          <Die value={4} />
          <Die value={3} />
        </div>
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{
            padding: '8px 12px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>TWO DICE</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.white, fontFamily: fonts.mono }}>36 combinations</div>
          </div>
          <div style={{
            padding: '8px 12px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>TOTALS</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>2 through 12</div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Come-Out Roll" caption="Three possible outcomes on the first roll">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{
            padding: '10px 12px', borderRadius: 8,
            background: 'rgba(0,200,83,0.06)', border: '1px solid rgba(0,200,83,0.15)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: colors.success, fontFamily: fonts.heading }}>Natural</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>Pass line wins</div>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <Die value={4} highlight />
                <Die value={3} highlight />
              </div>
            </div>
            <div style={{ fontSize: 10, color: colors.success, fontFamily: fonts.mono, marginTop: 4 }}>7 or 11</div>
          </div>
          <div style={{
            padding: '10px 12px', borderRadius: 8,
            background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading }}>Craps</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>Pass line loses</div>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <Die value={1} />
                <Die value={1} />
              </div>
            </div>
            <div style={{ fontSize: 10, color: colors.danger, fontFamily: fonts.mono, marginTop: 4 }}>2, 3, or 12</div>
          </div>
          <div style={{
            padding: '10px 12px', borderRadius: 8,
            background: 'rgba(255,179,0,0.06)', border: '1px solid rgba(255,179,0,0.15)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: colors.warning, fontFamily: fonts.heading }}>Point</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>Round continues</div>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <Die value={3} />
                <Die value={5} />
              </div>
            </div>
            <div style={{ fontSize: 10, color: colors.warning, fontFamily: fonts.mono, marginTop: 4 }}>4, 5, 6, 8, 9, or 10</div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Point Phase" caption="Hit the point before 7 = pass wins">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: 'rgba(255,179,0,0.06)', border: '1px solid rgba(255,179,0,0.15)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>POINT IS SET</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: colors.warning, fontFamily: fonts.mono }}>8</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 9, color: colors.neutral700, fontFamily: fonts.heading, letterSpacing: 1 }}>SHOOTER KEEPS ROLLING</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: '8px', borderRadius: 8, background: 'rgba(0,200,83,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: colors.success, fontFamily: fonts.mono }}>8</div>
              <div style={{ fontSize: 9, color: colors.success, fontFamily: fonts.body }}>Pass wins!</div>
            </div>
            <div style={{ flex: 1, padding: '8px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: colors.danger, fontFamily: fonts.mono }}>7</div>
              <div style={{ fontSize: 9, color: colors.danger, fontFamily: fonts.body }}>Seven out</div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, textAlign: 'center' }}>
            Any other number? Keep rolling.
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="Dice Probabilities" caption="7 is king — 6 ways out of 36">
      <div style={{ width: '88%' }}>
        {[
          { total: '7', ways: 6, bar: 100, color: colors.secondary },
          { total: '6, 8', ways: 5, bar: 83, color: colors.warning },
          { total: '5, 9', ways: 4, bar: 67, color: colors.accent },
          { total: '4, 10', ways: 3, bar: 50, color: colors.accent },
          { total: '3, 11', ways: 2, bar: 33, color: colors.neutral500 },
          { total: '2, 12', ways: 1, bar: 17, color: colors.neutral500 },
        ].map(r => (
          <div key={r.total} style={{ marginBottom: 4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: colors.white, fontFamily: fonts.mono }}>{r.total}</span>
              <span style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>{r.ways} ways</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: colors.primaryLight, overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: 3, background: r.color, width: `${r.bar}%`, transition: 'width 0.6s ease-out' }} />
            </div>
          </div>
        ))}
      </div>
    </VisualLayout>
  );
}

function BetTypesVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Pass / Don’t Pass" caption="The foundation of craps">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.12)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading }}>Pass Line</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>Bet with the shooter</div>
              </div>
              <div style={{
                padding: '4px 10px', borderRadius: 4,
                background: 'rgba(0,212,170,0.1)',
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>1.41%</span>
              </div>
            </div>
          </div>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: 'rgba(255,107,53,0.06)', border: '1px solid rgba(255,107,53,0.12)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: colors.accent, fontFamily: fonts.heading }}>Don&apos;t Pass</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>Bet against the shooter</div>
              </div>
              <div style={{
                padding: '4px 10px', borderRadius: 4,
                background: 'rgba(255,107,53,0.1)',
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: colors.accent, fontFamily: fonts.mono }}>1.36%</span>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, textAlign: 'center' }}>
            Don&apos;t pass is slightly better math, but socially &quot;against the table&quot;
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="The Odds Bet" caption="The only bet in the casino with 0% house edge">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '14px', borderRadius: 10,
            background: 'rgba(0,200,83,0.06)', border: '1px solid rgba(0,200,83,0.15)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: colors.success, fontFamily: fonts.mono }}>0%</div>
            <div style={{ fontSize: 11, color: colors.success, fontFamily: fonts.heading, fontWeight: 700 }}>HOUSE EDGE</div>
            <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, marginTop: 4 }}>
              Pays true mathematical odds
            </div>
          </div>
          <div style={{ width: '100%' }}>
            {[
              { point: '4 or 10', odds: '2:1' },
              { point: '5 or 9', odds: '3:2' },
              { point: '6 or 8', odds: '6:5' },
            ].map(p => (
              <div key={p.point} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '5px 0', borderBottom: `1px solid ${colors.primaryLight}`,
              }}>
                <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Point: {p.point}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>{p.odds}</span>
              </div>
            ))}
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Come / Don’t Come" caption="Same as pass/don’t pass, placed after a point">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.5 }}>
              After a point is set, your next roll becomes <strong style={{ color: colors.white }}>your own personal come-out</strong>. The same rules apply.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: '8px', borderRadius: 8, background: 'rgba(0,212,170,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading }}>Come</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>1.41%</div>
            </div>
            <div style={{ flex: 1, padding: '8px', borderRadius: 8, background: 'rgba(255,107,53,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: colors.accent, fontFamily: fonts.heading }}>Don&apos;t Come</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>1.36%</div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, textAlign: 'center' }}>
            You can also place odds behind come/don&apos;t come bets
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="Props & Place Bets" caption="The center of the table is where the casino profits">
      <div style={{ width: '88%' }}>
        {[
          { bet: 'Place 6/8', edge: '1.52%', color: colors.secondary },
          { bet: 'Place 5/9', edge: '4.00%', color: colors.warning },
          { bet: 'Place 4/10', edge: '6.67%', color: colors.accent },
          { bet: 'Hard 6/8', edge: '9.09%', color: colors.danger },
          { bet: 'Any craps', edge: '11.11%', color: colors.danger },
          { bet: 'Any 7', edge: '16.67%', color: colors.danger },
        ].map((b, i) => (
          <div key={b.bet} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '5px 0', borderBottom: i < 5 ? `1px solid ${colors.primaryLight}` : 'none',
          }}>
            <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>{b.bet}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: b.color, fontFamily: fonts.mono }}>{b.edge}</span>
          </div>
        ))}
      </div>
    </VisualLayout>
  );
}

function TheMathVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="House Edge Spectrum" caption="From 0% to 16.67% — all on the same table">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { bet: 'Odds bet', edge: '0%', bar: 0.5, color: colors.success },
            { bet: 'Don\u2019t pass', edge: '1.36%', bar: 8, color: colors.secondary },
            { bet: 'Pass line', edge: '1.41%', bar: 8.5, color: colors.secondary },
            { bet: 'Place 6/8', edge: '1.52%', bar: 9, color: colors.secondary },
            { bet: 'Place 5/9', edge: '4.00%', bar: 24, color: colors.warning },
            { bet: 'Place 4/10', edge: '6.67%', bar: 40, color: colors.accent },
            { bet: 'Hard 6/8', edge: '9.09%', bar: 55, color: colors.danger },
            { bet: 'Any 7', edge: '16.67%', bar: 100, color: colors.danger },
          ].map(b => (
            <div key={b.bet}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                <span style={{ fontSize: 9, color: colors.neutral300, fontFamily: fonts.body }}>{b.bet}</span>
                <span style={{ fontSize: 9, fontWeight: 700, color: b.color, fontFamily: fonts.mono }}>{b.edge}</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: colors.primaryLight, overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 3, background: b.color, width: `${b.bar}%`, transition: 'width 0.6s ease-out' }} />
              </div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Pass + Odds" caption="More odds = lower effective edge">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { label: 'Pass only', edge: '1.41%', bar: 100, color: colors.accent },
            { label: '+ 1x odds', edge: '0.85%', bar: 60, color: colors.warning },
            { label: '+ 2x odds', edge: '0.61%', bar: 43, color: colors.secondary },
            { label: '+ 5x odds', edge: '0.33%', bar: 23, color: colors.secondary },
            { label: '+ 10x odds', edge: '0.18%', bar: 13, color: colors.success },
          ].map(r => (
            <div key={r.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>{r.label}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: r.color, fontFamily: fonts.mono }}>{r.edge}</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: colors.primaryLight, overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 4, background: r.color, width: `${r.bar}%`, transition: 'width 0.6s ease-out' }} />
              </div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="Your Wallet" caption="Per $100 wagered, over time">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '85%' }}>
        <div style={{ padding: '10px 20px', borderRadius: 8, background: colors.primaryLight, fontSize: 18, fontWeight: 800, color: colors.white, fontFamily: fonts.mono }}>$100</div>
        <svg viewBox="0 0 16 24" width={12} height={18} stroke={colors.neutral500} strokeWidth="2" fill="none" strokeLinecap="round">
          <line x1="8" y1="0" x2="8" y2="20" /><polyline points="3,16 8,22 13,16" />
        </svg>
        <div style={{ display: 'flex', width: '100%', gap: 6 }}>
          <div style={{ flex: 1, padding: '8px 6px', borderRadius: 8, background: 'rgba(0,200,83,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: 8, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>PASS+5x ODDS</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: colors.success, fontFamily: fonts.mono }}>$99.67</div>
          </div>
          <div style={{ flex: 1, padding: '8px 6px', borderRadius: 8, background: 'rgba(0,212,170,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: 8, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>PASS ONLY</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>$98.59</div>
          </div>
          <div style={{ flex: 1, padding: '8px 6px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: 8, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>ANY 7</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: colors.danger, fontFamily: fonts.mono }}>$83.33</div>
          </div>
        </div>
      </div>
    </VisualLayout>
  );
}

function TipsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Pass + Odds" caption="The bread and butter of craps strategy">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '14px', borderRadius: 10,
            background: 'rgba(0,200,83,0.06)', border: '1px solid rgba(0,200,83,0.15)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 11, color: colors.success, fontFamily: fonts.heading, fontWeight: 700 }}>BEST COMBO IN THE CASINO</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 8 }}>
              <div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>PASS</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>1.41%</div>
              </div>
              <div style={{ fontSize: 16, color: colors.neutral700, display: 'flex', alignItems: 'center' }}>+</div>
              <div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>ODDS</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: colors.success, fontFamily: fonts.mono }}>0%</div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center' }}>
            Simple. Low edge. Straightforward.
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Avoid the Center" caption="The flashy bets are the expensive ones">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '14px', borderRadius: 10,
            background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)',
          }}>
            <div style={{ fontSize: 9, color: colors.danger, fontFamily: fonts.heading, letterSpacing: 1, textAlign: 'center', marginBottom: 8 }}>CENTER OF TABLE</div>
            <div style={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Any 7', 'Hard 8', 'Hard 6', 'Yo 11', 'Snake Eyes'].map(b => (
                <span key={b} style={{
                  fontSize: 9, padding: '3px 6px', borderRadius: 4,
                  background: 'rgba(255,61,0,0.1)', color: colors.danger, fontFamily: fonts.body,
                }}>{b}</span>
              ))}
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: colors.danger, fontFamily: fonts.mono, textAlign: 'center', marginTop: 8 }}>
              9&ndash;17% edge
            </div>
          </div>
          <div style={{
            padding: '8px 14px', borderRadius: 8,
            background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.12)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 10, color: colors.secondary, fontFamily: fonts.body }}>
              Pass + odds: as low as <strong style={{ fontFamily: fonts.mono }}>0.33%</strong>
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="Set Your Budget" caption="The social energy can drive overcommitment">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{
          padding: '14px', borderRadius: 10,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.5 }}>
            Craps is <strong style={{ color: colors.white }}>fast-paced</strong> and <strong style={{ color: colors.white }}>social</strong>. The table energy is part of the appeal &mdash; and the risk.
          </div>
        </div>
        <div style={{
          padding: '10px 14px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>BEFORE YOUR FIRST ROLL</div>
          {['\u2713 Set a session amount', '\u2713 Decide your bet size', '\u2713 Stick to pass + odds'].map((item, i) => (
            <div key={i} style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, padding: '3px 0' }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </VisualLayout>
  );
}

function MythsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Busted" caption="Casino table walls are designed to eliminate control">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MythCard
            myth="Dice Control / Setting"
            truth="The dice must hit the bumpy rubber back wall. Casino tables are specifically designed to randomize the outcome. Physics wins."
          />
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>
              Rubber pyramids + required wall bounce = <strong style={{ color: colors.white }}>randomness by design</strong>
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 1
  return (
    <VisualLayout label="Busted" caption="36 independent combinations, every single roll">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <MythCard
          myth="Hot Shooters"
          truth="Each roll produces one of 36 equally likely combinations. The dice don't know who's throwing them. Streaks are normal random variation."
        />
        <MythCard
          myth="Numbers Are &quot;Due&quot;"
          truth="Haven't seen a 7 in 20 rolls? Next roll still has 6 chances in 36 (16.67%) of being 7. Exactly the same as always."
        />
      </div>
    </VisualLayout>
  );
}

/* ─── Main Export ─── */
export default function CrapsVisuals({ chapterId, slideIndex }: CrapsVisualsProps) {
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
