'use client';

import { colors, fonts } from '@/lib/brand-tokens';

interface BlackjackVisualsProps {
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

/* ─── Playing card component ─── */

const CARD_RED = '#D32F2F';
const CARD_BLACK = '#212121';

function MiniCard({ value, suit, faceDown }: { value: string; suit: string; faceDown?: boolean }) {
  const isRed = suit === '\u2665' || suit === '\u2666';
  if (faceDown) {
    return (
      <div style={{
        width: 44, height: 62, borderRadius: 6,
        background: 'linear-gradient(135deg, #1565C0, #0D47A1)',
        border: '2px solid rgba(255,255,255,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 28, height: 40, borderRadius: 3,
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.05) 3px, rgba(255,255,255,0.05) 6px)',
        }} />
      </div>
    );
  }
  return (
    <div style={{
      width: 44, height: 62, borderRadius: 6,
      background: '#FAFAFA', border: '1px solid rgba(0,0,0,0.1)',
      display: 'flex', flexDirection: 'column', padding: '4px 6px',
      position: 'relative',
    }}>
      <div style={{ fontSize: 14, fontWeight: 800, color: isRed ? CARD_RED : CARD_BLACK, fontFamily: fonts.heading, lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontSize: 10, color: isRed ? CARD_RED : CARD_BLACK, lineHeight: 1 }}>
        {suit}
      </div>
      <div style={{
        position: 'absolute', bottom: 4, right: 6,
        fontSize: 16, color: isRed ? CARD_RED : CARD_BLACK, opacity: 0.3,
      }}>
        {suit}
      </div>
    </div>
  );
}

function HandTotal({ total, label, soft }: { total: string; label?: string; soft?: boolean }) {
  return (
    <div style={{
      padding: '4px 12px', borderRadius: 6,
      background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.2)',
      textAlign: 'center',
    }}>
      {label && <div style={{ fontSize: 8, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>{label}</div>}
      <div style={{ fontSize: 14, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>
        {total}{soft && <span style={{ fontSize: 9, fontWeight: 400, color: colors.neutral500 }}> soft</span>}
      </div>
    </div>
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
      <VisualLayout label="Card Values" caption="Ace = 1 or 11, whichever helps more">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { cards: [{ v: '7', s: '\u2665' }], label: '2\u201310: Face value', total: '7' },
            { cards: [{ v: 'K', s: '\u2660' }], label: 'J, Q, K: 10', total: '10' },
            { cards: [{ v: 'A', s: '\u2666' }], label: 'Ace: 1 or 11', total: '1/11' },
          ].map((g, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <MiniCard value={g.cards[0].v} suit={g.cards[0].s} />
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body, marginTop: 4 }}>{g.label}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>{g.total}</div>
            </div>
          ))}
        </div>
        <div style={{
          padding: '8px 14px', borderRadius: 8,
          background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.12)',
          width: '85%', textAlign: 'center',
        }}>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>
            Ace + 6 = <strong style={{ color: colors.secondary, fontFamily: fonts.mono }}>soft 17</strong> (can&apos;t bust next card)
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Playing a Hand" caption="Your cards face up, dealer has one hidden">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ padding: '10px 14px', borderRadius: 8, background: colors.primaryDark, border: `1px solid ${colors.primaryLight}` }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>YOUR HAND</div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <MiniCard value="K" suit={'\u2660'} />
              <MiniCard value="8" suit={'\u2665'} />
              <HandTotal total="18" />
            </div>
          </div>
          <div style={{ padding: '10px 14px', borderRadius: 8, background: colors.primaryDark, border: `1px solid ${colors.primaryLight}` }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>DEALER</div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <MiniCard value="6" suit={'\u2663'} />
              <MiniCard value="" suit="" faceDown />
              <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>Hole card hidden</div>
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Your Decisions" caption="You choose; the dealer follows a script">
        <div style={{ width: '88%' }}>
          {[
            { action: 'Hit', desc: 'Take another card' },
            { action: 'Stand', desc: 'Keep current hand' },
            { action: 'Double', desc: 'Double bet, one more card' },
            { action: 'Split', desc: 'Split pairs into two hands' },
            { action: 'Surrender', desc: 'Forfeit half, fold' },
          ].map((a, i) => (
            <div key={a.action} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '6px 0', borderBottom: i < 4 ? `1px solid ${colors.primaryLight}` : 'none',
            }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: colors.white, fontFamily: fonts.heading }}>{a.action}</span>
              <span style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>{a.desc}</span>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="Dealer Rules" caption="The dealer has zero choices">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          padding: '12px 14px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>&le;16</div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Must hit. Always.</div>
          </div>
        </div>
        <div style={{
          padding: '12px 14px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>&ge;17</div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Must stand. Always.</div>
          </div>
        </div>
        <div style={{
          padding: '8px 14px', borderRadius: 8,
          background: 'rgba(255,107,53,0.06)', border: '1px solid rgba(255,107,53,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>
            No doubling. No splitting. No strategy.
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.accent, fontFamily: fonts.heading, marginTop: 2 }}>
            Dealer busts ~28% of the time
          </div>
        </div>
      </div>
    </VisualLayout>
  );
}

function BetTypesVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Base Bet" caption="The core wager on every hand">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '12px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>BASE BET</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: colors.white, fontFamily: fonts.mono }}>$10</div>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>1:1 payout</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: '10px 8px', borderRadius: 8, background: 'rgba(0,212,170,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>WITH STRATEGY</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>0.5%</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>house edge</div>
            </div>
            <div style={{ flex: 1, padding: '10px 8px', borderRadius: 8, background: 'rgba(255,107,53,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>WITHOUT</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>2%+</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>house edge</div>
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Blackjack & Side Bets" caption="Side bets carry much higher house edges">
        <div style={{ width: '88%' }}>
          {[
            { bet: 'Blackjack (3:2)', edge: '\u2014', color: colors.secondary },
            { bet: 'Blackjack (6:5)', edge: '+1.4%', color: colors.accent },
            { bet: 'Insurance', edge: '~7.7%', color: colors.danger },
            { bet: 'Side bets', edge: '2\u201311%+', color: colors.danger },
          ].map((b, i) => (
            <div key={b.bet} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '7px 0', borderBottom: i < 3 ? `1px solid ${colors.primaryLight}` : 'none',
            }}>
              <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>{b.bet}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: b.color, fontFamily: fonts.mono }}>{b.edge}</span>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="6:5 vs 3:2" caption="Check the table sign before you sit down">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          padding: '10px 14px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>$10 BET &rarr; NATURAL BLACKJACK</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: '10px 8px', borderRadius: 8, background: 'rgba(0,212,170,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>3:2 TABLE</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>$15</div>
          </div>
          <div style={{ flex: 1, padding: '10px 8px', borderRadius: 8, background: 'rgba(255,107,53,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>6:5 TABLE</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>$12</div>
          </div>
        </div>
        <div style={{
          padding: '8px 14px', borderRadius: 8,
          background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading }}>$3 less every blackjack</div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, marginTop: 2 }}>+1.4% house edge increase</div>
        </div>
      </div>
    </VisualLayout>
  );
}

function TheMathVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="House Edge" caption="Basic strategy is the difference">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'Basic strategy, 3:2', edge: '~0.5%', color: colors.secondary, bar: 10 },
            { label: 'Basic strategy, standard', edge: '~0.7%', color: colors.secondary, bar: 14 },
            { label: 'No basic strategy', edge: '~2.5%', color: colors.accent, bar: 48 },
            { label: '6:5 table + strategy', edge: '~1.8%', color: colors.danger, bar: 34 },
          ].map(w => (
            <div key={w.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>{w.label}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: w.color, fontFamily: fonts.mono }}>{w.edge}</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: colors.primaryLight, overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 4, background: w.color, width: `${w.bar}%`, transition: 'width 0.6s ease-out' }} />
              </div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Your Wallet" caption="Per $100 wagered, over time">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '85%' }}>
          <div style={{ padding: '10px 20px', borderRadius: 8, background: colors.primaryLight, fontSize: 18, fontWeight: 800, color: colors.white, fontFamily: fonts.mono }}>$100</div>
          <svg viewBox="0 0 16 24" width={12} height={18} stroke={colors.neutral500} strokeWidth="2" fill="none" strokeLinecap="round">
            <line x1="8" y1="0" x2="8" y2="20" /><polyline points="3,16 8,22 13,16" />
          </svg>
          <div style={{ display: 'flex', width: '100%', gap: 8 }}>
            <div style={{ flex: 1, padding: '10px 8px', borderRadius: 8, background: 'rgba(0,212,170,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>WITH STRATEGY</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>$99.50</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>lose ~50&cent;</div>
            </div>
            <div style={{ flex: 1, padding: '10px 8px', borderRadius: 8, background: 'rgba(255,107,53,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>NO STRATEGY</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>$97.50</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>lose ~$2.50</div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center' }}>
            Best odds in the casino <strong style={{ color: colors.white }}>with 20 min of learning</strong>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="Dealer Busts" caption="The dealer’s fixed rules work against them">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 100, height: 100, borderRadius: 50,
          background: 'rgba(255,107,53,0.08)',
          border: `3px solid ${colors.accent}`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>28%</div>
          <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>dealer busts</div>
        </div>
        <div style={{
          padding: '10px 14px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          width: '100%',
        }}>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.5, textAlign: 'center' }}>
            The dealer <strong style={{ color: colors.white }}>must</strong> hit on 16 or below.
            You get to <strong style={{ color: colors.white }}>choose</strong> when to stop.
            That decision power is your advantage.
          </div>
        </div>
      </div>
    </VisualLayout>
  );
}

function StrategyVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Basic Strategy" caption="Millions of simulated hands, one optimal answer per scenario">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '14px', borderRadius: 10,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: colors.secondary, fontFamily: fonts.heading }}>20 min</div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>to learn the basics</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: '8px', borderRadius: 8, background: 'rgba(0,212,170,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>0.5%</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>with strategy</div>
            </div>
            <div style={{ flex: 1, padding: '8px', borderRadius: 8, background: 'rgba(255,107,53,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>2%+</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>without</div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, textAlign: 'center' }}>
            Not a &quot;system&quot; or a trick. Just the math.
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    const rows = [
      { hand: '8 or less', weak: 'Hit', strong: 'Hit' },
      { hand: '9\u201311', weak: 'Double', strong: 'Hit' },
      { hand: '12\u201316', weak: 'Stand', strong: 'Hit' },
      { hand: '17+', weak: 'Stand', strong: 'Stand' },
    ];
    return (
      <VisualLayout label="Hard Hands" caption="When you don’t have a usable ace">
        <div style={{ width: '90%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>YOUR HAND</span>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={{ fontSize: 9, color: colors.secondary, fontFamily: fonts.heading, letterSpacing: 1 }}>vs 2&ndash;6</span>
              <span style={{ fontSize: 9, color: colors.accent, fontFamily: fonts.heading, letterSpacing: 1 }}>vs 7&ndash;A</span>
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={r.hand} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '6px 0', borderBottom: i < rows.length - 1 ? `1px solid ${colors.primaryLight}` : 'none',
            }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: colors.white, fontFamily: fonts.mono }}>{r.hand}</span>
              <div style={{ display: 'flex', gap: 16 }}>
                <span style={{
                  fontSize: 11, fontWeight: 600, fontFamily: fonts.heading,
                  color: r.weak === 'Stand' ? colors.secondary : r.weak === 'Double' ? colors.warning : colors.neutral300,
                }}>{r.weak}</span>
                <span style={{
                  fontSize: 11, fontWeight: 600, fontFamily: fonts.heading, minWidth: 40, textAlign: 'right',
                  color: r.strong === 'Stand' ? colors.secondary : colors.neutral300,
                }}>{r.strong}</span>
              </div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Pairs" caption="Split, never split, or treat as regular hand">
        <div style={{ width: '88%' }}>
          {[
            { pair: 'A, A', action: 'Always split', color: colors.secondary },
            { pair: '8, 8', action: 'Always split', color: colors.secondary },
            { pair: '10, 10', action: 'Never split', color: colors.danger },
            { pair: '5, 5', action: 'Never split \u2014 treat as 10', color: colors.danger },
            { pair: 'Others', action: 'Split vs 2\u20136, hit vs 7+', color: colors.warning },
          ].map((p, i) => (
            <div key={p.pair} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '7px 0', borderBottom: i < 4 ? `1px solid ${colors.primaryLight}` : 'none',
            }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: colors.white, fontFamily: fonts.mono }}>{p.pair}</span>
              <span style={{ fontSize: 10, color: p.color, fontFamily: fonts.body }}>{p.action}</span>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="The Bottom Line" caption="Free strategy charts are everywhere">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{
          padding: '14px', borderRadius: 10,
          background: 'rgba(0,212,170,0.06)', border: `1px solid rgba(0,212,170,0.15)`,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 11, color: colors.secondary, fontFamily: fonts.heading, fontWeight: 700 }}>THE SINGLE MOST IMPACTFUL THING</div>
          <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, marginTop: 4 }}>
            Learn basic strategy. 20 minutes. Cuts the house edge in half.
          </div>
        </div>
        <div style={{
          padding: '10px 14px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>YOUR CHECKLIST</div>
          {['\u2713 Learn hard hand decisions', '\u2713 Learn soft hand decisions', '\u2713 Memorize pair splits', '\u2713 Always decline insurance'].map((item, i) => (
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
      <VisualLayout label="Busted" caption="House edge doesn’t change with bet sizing">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MythCard
            myth="Martingale System"
            truth="Double after every loss? Same house edge on every hand. You'll hit the table limit or your budget before the math rescues you."
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
                  fontFamily: fonts.mono, padding: '2px 4px', borderRadius: 3,
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
    <VisualLayout label="Busted" caption="Your hand vs. the dealer. That’s it.">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <MythCard
          myth="Other Players Affect Your Odds"
          truth="Each hand plays out against the dealer independently. The person next to you making a 'bad' play doesn't change your math."
        />
        <MythCard
          myth="Card Counting Is Easy Money"
          truth="Real but tiny edge, massive effort. Casinos use 6-8 decks, frequent shuffles, and surveillance to neutralize it. It's not the cheat code movies suggest."
        />
      </div>
    </VisualLayout>
  );
}

/* ─── Main Export ─── */
export default function BlackjackVisuals({ chapterId, slideIndex }: BlackjackVisualsProps) {
  return (
    <div key={`${chapterId}-${slideIndex}`} style={{ height: '100%', animation: 'fadeSlideIn 0.4s ease-out' }}>
      {chapterId === 'how-it-works' && <HowItWorksVisual slide={slideIndex} />}
      {chapterId === 'bet-types' && <BetTypesVisual slide={slideIndex} />}
      {chapterId === 'the-math' && <TheMathVisual slide={slideIndex} />}
      {chapterId === 'basic-strategy' && <StrategyVisual slide={slideIndex} />}
      {chapterId === 'myths' && <MythsVisual slide={slideIndex} />}
    </div>
  );
}
