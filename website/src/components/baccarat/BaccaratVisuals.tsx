'use client';

import { colors, fonts } from '@/lib/brand-tokens';

interface BaccaratVisualsProps {
  chapterId: string;
  slideIndex: number;
}

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

function BacCard({ rank, suit, faceDown }: { rank: string; suit: string; faceDown?: boolean }) {
  if (faceDown) {
    return (
      <div style={{
        width: 40, height: 56, borderRadius: 5,
        background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`,
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 28, height: 42, borderRadius: 3,
          border: '1px solid rgba(0,212,170,0.15)',
          background: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,212,170,0.05) 3px, rgba(0,212,170,0.05) 6px)',
        }} />
      </div>
    );
  }
  const isRed = suit === '\u2665' || suit === '\u2666';
  const suitColor = isRed ? colors.danger : colors.primary;
  return (
    <div style={{
      width: 40, height: 56, borderRadius: 5,
      background: colors.neutral50,
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
    }}>
      <span style={{ fontSize: 16, fontWeight: 800, color: suitColor, fontFamily: fonts.mono, lineHeight: 1 }}>{rank}</span>
      <span style={{ fontSize: 11, color: suitColor, lineHeight: 1 }}>{suit}</span>
    </div>
  );
}

function HandTotal({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 9, fontWeight: 700, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color, fontFamily: fonts.mono, lineHeight: 1.2 }}>{value}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════ */

function HowItWorksVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Card Values" caption="Only the last digit counts">
        <div style={{ width: '85%' }}>
          {[
            { cards: '7 + 8 = 15', total: '= 5', color: colors.secondary },
            { cards: '4 + 6 = 10', total: '= 0', color: colors.accent },
            { cards: 'K + 9 = 9', total: '= 9', color: colors.warning },
          ].map(r => (
            <div key={r.cards} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 10px', borderBottom: `1px solid ${colors.primaryLight}`,
            }}>
              <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.mono }}>{r.cards}</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: r.color, fontFamily: fonts.mono }}>{r.total}</span>
            </div>
          ))}
        </div>
        <div style={{
          padding: '6px 14px', borderRadius: 6,
          background: 'rgba(0,212,170,0.06)', borderLeft: `3px solid ${colors.secondary}`,
          fontSize: 11, fontWeight: 600, color: colors.secondary, fontFamily: fonts.mono,
        }}>
          Best hand: 9
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="The Deal" caption="One decision: pick your bet">
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>PLAYER</div>
            <div style={{ display: 'flex', gap: 4 }}>
              <BacCard rank="7" suit={'\u2660'} />
              <BacCard rank="Q" suit={'\u2665'} />
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono, marginTop: 6 }}>7</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: colors.accent, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>BANKER</div>
            <div style={{ display: 'flex', gap: 4 }}>
              <BacCard rank="4" suit={'\u2663'} />
              <BacCard rank="5" suit={'\u2666'} />
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono, marginTop: 6 }}>9</div>
          </div>
        </div>
        <div style={{
          padding: '6px 16px', borderRadius: 6,
          background: 'rgba(255,107,53,0.08)', border: `1px solid rgba(255,107,53,0.2)`,
          fontSize: 11, fontWeight: 700, color: colors.accent, fontFamily: fonts.heading,
        }}>
          BANKER WINS
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Natural" caption="8 or 9 on first two cards = instant win">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: colors.warning, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>NATURAL</div>
          <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
            <BacCard rank="A" suit={'\u2660'} />
            <BacCard rank="8" suit={'\u2665'} />
          </div>
          <div style={{
            marginTop: 8, fontSize: 32, fontWeight: 800, color: colors.warning,
            fontFamily: fonts.mono, lineHeight: 1,
          }}>9</div>
          <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>Round over. No third card.</div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="Third Card Rules" caption="Automatic. You don't decide.">
      <div style={{
        width: '85%', padding: '12px', borderRadius: 10,
        background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
      }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 8 }}>PLAYER</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, marginBottom: 4 }}>
          <span>{'0\u20135'}</span><span style={{ color: colors.secondary }}>Draw</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, marginBottom: 4 }}>
          <span>{'6\u20137'}</span><span>Stand</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>
          <span>{'8\u20139'}</span><span style={{ color: colors.warning }}>Natural</span>
        </div>
      </div>
      <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, textAlign: 'center' }}>
        Banker rules are more complex<br />but equally automatic
      </div>
    </VisualLayout>
  );
}

function BetTypesVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Three Bets" caption="That's the whole decision">
        <div style={{ width: '85%' }}>
          {[
            { bet: 'BANKER', edge: '1.06%', color: colors.secondary },
            { bet: 'PLAYER', edge: '1.24%', color: colors.info },
            { bet: 'TIE', edge: '14.4%', color: colors.danger },
          ].map(b => (
            <div key={b.bet} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 12px', marginBottom: 6, borderRadius: 8,
              background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
            }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: b.color, fontFamily: fonts.heading }}>{b.bet}</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: b.color, fontFamily: fonts.mono }}>{b.edge}</span>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Commission" caption="5% on winning Banker bets">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>Banker wins more often:</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono, margin: '4px 0' }}>50.68%</div>
          <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>of decided hands</div>
        </div>
        <div style={{
          padding: '8px 16px', borderRadius: 8,
          background: 'rgba(0,212,170,0.06)', borderLeft: `3px solid ${colors.secondary}`,
          fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center',
        }}>
          Even after 5% commission,<br />Banker is still the best bet.
        </div>
      </VisualLayout>
    );
  }

  // slide === 2 — side bets
  return (
    <VisualLayout label="Side Bets" caption="Much higher house edge">
      <div style={{ width: '85%' }}>
        {[
          { bet: 'Banker Pair', edge: '~10.4%' },
          { bet: 'Player Pair', edge: '~10.4%' },
          { bet: 'Either Pair', edge: '~14.1%' },
        ].map(s => (
          <div key={s.bet} style={{
            display: 'flex', justifyContent: 'space-between', padding: '6px 0',
            borderBottom: `1px solid ${colors.primaryLight}`,
          }}>
            <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>{s.bet}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.mono }}>{s.edge}</span>
          </div>
        ))}
      </div>
      <div style={{
        padding: '6px 12px', borderRadius: 6,
        background: 'rgba(255,61,0,0.06)', borderLeft: `3px solid ${colors.danger}`,
        fontSize: 10, color: colors.neutral300, fontFamily: fonts.body,
      }}>
        Good odds = main bets only
      </div>
    </VisualLayout>
  );
}

function TheMathVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="House Edge" caption="Banker and Player are both excellent">
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ textAlign: 'center', padding: '14px 16px', borderRadius: 10, background: 'rgba(0,212,170,0.06)', border: `1px solid rgba(0,212,170,0.15)` }}>
            <div style={{ fontSize: 9, color: colors.secondary, fontFamily: fonts.heading, fontWeight: 700, letterSpacing: 1 }}>BANKER</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>1.06%</div>
          </div>
          <div style={{ textAlign: 'center', padding: '14px 16px', borderRadius: 10, background: 'rgba(41,121,255,0.06)', border: '1px solid rgba(41,121,255,0.15)' }}>
            <div style={{ fontSize: 9, color: colors.info, fontFamily: fonts.heading, fontWeight: 700, letterSpacing: 1 }}>PLAYER</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: colors.info, fontFamily: fonts.mono }}>1.24%</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', padding: '8px 16px', borderRadius: 10, background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)' }}>
          <div style={{ fontSize: 9, color: colors.danger, fontFamily: fonts.heading, fontWeight: 700, letterSpacing: 1 }}>TIE</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: colors.danger, fontFamily: fonts.mono }}>14.4%</div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Your Wallet" caption="Per $100 wagered, over time">
        <div style={{ width: '90%', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{ flex: 1, textAlign: 'center', padding: '10px 4px', borderRadius: 8, background: 'rgba(0,212,170,0.06)' }}>
              <div style={{ fontSize: 8, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>BANKER</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>$1.06</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center', padding: '10px 4px', borderRadius: 8, background: 'rgba(41,121,255,0.06)' }}>
              <div style={{ fontSize: 8, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>PLAYER</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: colors.info, fontFamily: fonts.mono }}>$1.24</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: '10px 4px', borderRadius: 8, background: 'rgba(255,61,0,0.06)' }}>
            <div style={{ fontSize: 8, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>TIE</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: colors.danger, fontFamily: fonts.mono }}>$14.40</div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>lost per $100 bet</div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="Ties Push" caption="Your main bet is returned on a tie">
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body, marginBottom: 4 }}>Tie occurs</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: colors.white, fontFamily: fonts.mono }}>~9.5%</div>
        <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>of the time</div>
      </div>
      <div style={{
        padding: '10px 16px', borderRadius: 8,
        background: 'rgba(0,200,83,0.06)', border: `1px solid ${colors.success}`,
        fontSize: 11, color: colors.success, fontFamily: fonts.body, textAlign: 'center',
      }}>
        Banker/Player bets are returned.<br />You don&apos;t lose on a tie.
      </div>
    </VisualLayout>
  );
}

function TipsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Best Bet" caption="Banker wins. Even after commission.">
        <div style={{
          width: 100, height: 100, borderRadius: 50,
          background: 'rgba(0,212,170,0.08)', border: `2px solid ${colors.secondary}`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading }}>BANKER</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>1.06%</div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Skip the Tie" caption="8:1 looks good. The math isn't.">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>Break-even probability needed:</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: colors.danger, fontFamily: fonts.mono, margin: '4px 0' }}>11.1%</div>
          <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>Actual tie frequency:</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: colors.white, fontFamily: fonts.mono }}>9.5%</div>
        </div>
        <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>
          That gap = 14.4% edge
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Scorecards" caption="Entertainment, not information">
        <div style={{
          width: '80%', padding: '10px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          {['B', 'P', 'B', 'B', 'P', 'B', 'T'].map((r, i) => (
            <span key={i} style={{
              display: 'inline-block', width: 20, height: 20, borderRadius: 4,
              background: r === 'B' ? 'rgba(255,61,0,0.15)' : r === 'P' ? 'rgba(41,121,255,0.15)' : 'rgba(0,200,83,0.15)',
              color: r === 'B' ? colors.danger : r === 'P' ? colors.info : colors.success,
              fontSize: 10, fontWeight: 700, fontFamily: fonts.mono,
              lineHeight: '20px', textAlign: 'center', margin: 2,
            }}>{r}</span>
          ))}
        </div>
        <div style={{
          padding: '6px 12px', borderRadius: 6,
          background: 'rgba(0,212,170,0.06)', borderLeft: `3px solid ${colors.secondary}`,
          fontSize: 10, color: colors.neutral300, fontFamily: fonts.body,
        }}>
          Each hand is independent. Patterns are noise.
        </div>
      </VisualLayout>
    );
  }

  if (slide === 3) {
    return (
      <VisualLayout label="Side Bets" caption="Dramatically higher edge">
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ textAlign: 'center', padding: '8px 10px', borderRadius: 6, background: 'rgba(0,212,170,0.06)' }}>
            <div style={{ fontSize: 9, color: colors.secondary, fontFamily: fonts.heading, fontWeight: 700 }}>MAIN</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>1%</div>
          </div>
          <div style={{ fontSize: 16, color: colors.neutral500, alignSelf: 'center' }}>vs</div>
          <div style={{ textAlign: 'center', padding: '8px 10px', borderRadius: 6, background: 'rgba(255,61,0,0.06)' }}>
            <div style={{ fontSize: 9, color: colors.danger, fontFamily: fonts.heading, fontWeight: 700 }}>SIDE</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: colors.danger, fontFamily: fonts.mono }}>{'10\u201315%'}</div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 4
  return (
    <VisualLayout label="Session Pace" caption="Know the pace before you start">
      <div style={{ width: '85%' }}>
        {[
          { left: '40\u201380', right: 'hands / hour' },
          { left: 'Faster', right: 'at mini baccarat' },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', padding: '8px 0',
            borderBottom: i === 0 ? `1px solid ${colors.primaryLight}` : 'none',
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: colors.white, fontFamily: fonts.mono }}>{row.left}</span>
            <span style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>{row.right}</span>
          </div>
        ))}
      </div>
    </VisualLayout>
  );
}

function MythsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Busted" caption="No system beats the math">
        <div style={{ width: '85%', padding: '10px 12px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 14, color: colors.danger }}>&#x2717;</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>Scorecard Patterns</span>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>Past hands don&apos;t predict future hands. Each deal is independent.</div>
        </div>
        <div style={{ width: '85%', padding: '10px 12px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 14, color: colors.danger }}>&#x2717;</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>Betting Systems</span>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>Martingale, Fibonacci, etc. don&apos;t change the house edge.</div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 1
  return (
    <VisualLayout label="Busted" caption="Slightly more often isn't always">
      <div style={{ width: '85%', padding: '10px 12px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 14, color: colors.danger }}>&#x2717;</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>Banker &ldquo;always&rdquo; wins</span>
        </div>
        <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>50.68% of decided hands. Slightly more, not always.</div>
      </div>
      <div style={{ width: '85%', padding: '10px 12px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 14, color: colors.danger }}>&#x2717;</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>No-commission is better</span>
        </div>
        <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>Modified payouts compensate. Check the actual edge.</div>
      </div>
    </VisualLayout>
  );
}

export default function BaccaratVisuals({ chapterId, slideIndex }: BaccaratVisualsProps) {
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
