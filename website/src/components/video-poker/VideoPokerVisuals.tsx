'use client';

import { colors, fonts } from '@/lib/brand-tokens';

interface VideoPokerVisualsProps {
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

/* ─── Card component ─── */

function PlayingCard({ rank, suit, held, dim }: { rank: string; suit: string; held?: boolean; dim?: boolean }) {
  const isRed = suit === '\u2665' || suit === '\u2666';
  const suitColor = isRed ? colors.danger : colors.primary;
  return (
    <div style={{
      width: 36, height: 52, borderRadius: 5,
      background: dim ? colors.primaryLight : colors.neutral50,
      border: held ? `2px solid ${colors.secondary}` : '1px solid rgba(255,255,255,0.1)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
      boxShadow: held ? `0 0 8px rgba(0,212,170,0.3)` : '0 1px 3px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease',
      opacity: dim ? 0.4 : 1,
    }}>
      <span style={{ fontSize: 14, fontWeight: 800, color: dim ? colors.neutral500 : suitColor, fontFamily: fonts.mono, lineHeight: 1 }}>
        {rank}
      </span>
      <span style={{ fontSize: 10, color: dim ? colors.neutral500 : suitColor, lineHeight: 1 }}>
        {suit}
      </span>
      {held && (
        <div style={{
          position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)',
          fontSize: 7, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading,
          letterSpacing: 1, textTransform: 'uppercase',
        }}>
          HOLD
        </div>
      )}
    </div>
  );
}

/* ─── Hand display ─── */

function CardHand({ cards, heldIndices }: { cards: { rank: string; suit: string }[]; heldIndices?: number[] }) {
  return (
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
      {cards.map((c, i) => (
        <PlayingCard key={i} rank={c.rank} suit={c.suit} held={heldIndices?.includes(i)} />
      ))}
    </div>
  );
}

/* ─── Paytable row ─── */

function PaytableRow({ hand, pay96, pay65, highlight }: { hand: string; pay96: string; pay65: string; highlight?: boolean }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', padding: '5px 8px',
      background: highlight ? 'rgba(0,212,170,0.08)' : 'transparent',
      borderRadius: 4,
    }}>
      <span style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, flex: 1 }}>{hand}</span>
      <span style={{ fontSize: 10, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono, width: 28, textAlign: 'right' }}>{pay96}</span>
      <span style={{ fontSize: 10, fontWeight: 700, color: colors.accent, fontFamily: fonts.mono, width: 28, textAlign: 'right' }}>{pay65}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Chapter Visuals
   ═══════════════════════════════════════════ */

function HowItWorksVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="52-Card Deck" caption="Real cards, real probabilities">
        <div style={{
          width: '85%', padding: '12px', borderRadius: 10,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 8 }}>NOT A SLOT MACHINE</div>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 8 }}>
            {['\u2660', '\u2665', '\u2666', '\u2663'].map(s => (
              <span key={s} style={{ fontSize: 22, color: s === '\u2665' || s === '\u2666' ? colors.danger : colors.neutral300 }}>{s}</span>
            ))}
          </div>
          <div style={{ fontSize: 24, fontWeight: 800, color: colors.white, fontFamily: fonts.heading }}>52</div>
          <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>cards, real probabilities</div>
        </div>
        <div style={{
          padding: '8px 16px', borderRadius: 8,
          background: 'rgba(0,212,170,0.06)', borderLeft: `3px solid ${colors.secondary}`,
          fontSize: 11, color: colors.secondary, fontFamily: fonts.mono, fontWeight: 600,
        }}>
          Your choices change the math
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="The Deal" caption="Five cards from a shuffled deck">
        <CardHand cards={[
          { rank: 'K', suit: '\u2660' }, { rank: 'Q', suit: '\u2660' },
          { rank: '7', suit: '\u2665' }, { rank: 'J', suit: '\u2660' },
          { rank: '3', suit: '\u2663' },
        ]} />
        <div style={{
          padding: '8px 24px', borderRadius: 20,
          background: `linear-gradient(135deg, ${colors.secondary}, ${colors.secondaryDark})`,
          fontSize: 12, fontWeight: 800, color: colors.primary, fontFamily: fonts.heading,
        }}>
          DEAL
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Hold / Draw" caption="This decision is the game">
        <CardHand
          cards={[
            { rank: 'K', suit: '\u2660' }, { rank: 'Q', suit: '\u2660' },
            { rank: '7', suit: '\u2665' }, { rank: 'J', suit: '\u2660' },
            { rank: '3', suit: '\u2663' },
          ]}
          heldIndices={[0, 1, 3]}
        />
        <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center', lineHeight: 1.5 }}>
          Hold the royals.<br />Discard the rest.
        </div>
        <div style={{
          padding: '8px 24px', borderRadius: 20,
          background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentDark})`,
          fontSize: 12, fontWeight: 800, color: colors.white, fontFamily: fonts.heading,
        }}>
          DRAW
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="Variants" caption="RTP varies by game and paytable">
      <div style={{ width: '88%' }}>
        {[
          { name: 'Jacks or Better', rtp: '99.54%', color: colors.secondary },
          { name: 'Deuces Wild', rtp: '100.76%', color: colors.warning },
          { name: 'Bonus Poker', rtp: '99.17%', color: colors.accent },
        ].map(v => (
          <div key={v.name} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '8px 0', borderBottom: `1px solid ${colors.primaryLight}`,
          }}>
            <span style={{ fontSize: 11, color: colors.white, fontFamily: fonts.heading, fontWeight: 600 }}>{v.name}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: v.color, fontFamily: fonts.mono }}>{v.rtp}</span>
          </div>
        ))}
      </div>
    </VisualLayout>
  );
}

function BetTypesVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Credits" caption="1 to 5 credits per hand">
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          {[1, 2, 3, 4, 5].map(n => (
            <div key={n} style={{
              width: 32, height: 32, borderRadius: radius.full,
              background: n === 5 ? 'rgba(0,212,170,0.15)' : colors.primaryDark,
              border: `2px solid ${n === 5 ? colors.secondary : colors.primaryLight}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 700, color: n === 5 ? colors.secondary : colors.neutral500,
              fontFamily: fonts.mono,
            }}>{n}</div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center' }}>
          Max bet = best royal payout
        </div>
      </VisualLayout>
    );
  }

  // slide === 1 — royal flush bonus
  return (
    <VisualLayout label="Royal Flush Bonus" caption="Max bet unlocks the full payout">
      <div style={{ width: '85%' }}>
        {[
          { credits: '1 credit', payout: '250', color: colors.neutral300 },
          { credits: '5 credits', payout: '4,000', color: colors.secondary },
        ].map(r => (
          <div key={r.credits} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '10px 12px', marginBottom: 6, borderRadius: 8,
            background: r.color === colors.secondary ? 'rgba(0,212,170,0.08)' : colors.primaryDark,
            border: `1px solid ${r.color === colors.secondary ? colors.secondary : colors.primaryLight}`,
          }}>
            <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>{r.credits}</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: r.color, fontFamily: fonts.mono }}>{r.payout}</span>
          </div>
        ))}
        <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, textAlign: 'center', marginTop: 4 }}>
          Not 1,250. <strong style={{ color: colors.white }}>4,000.</strong>
        </div>
      </div>
    </VisualLayout>
  );
}

function TheMathVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Paytable Comparison" caption="Two numbers change everything">
        <div style={{ width: '90%', padding: '8px', borderRadius: 8, background: colors.primaryDark, border: `1px solid ${colors.primaryLight}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px 6px', borderBottom: `1px solid ${colors.primaryLight}`, marginBottom: 4 }}>
            <span style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, flex: 1 }}>HAND</span>
            <span style={{ fontSize: 9, color: colors.secondary, fontFamily: fonts.heading, letterSpacing: 1, width: 28, textAlign: 'right' }}>9/6</span>
            <span style={{ fontSize: 9, color: colors.accent, fontFamily: fonts.heading, letterSpacing: 1, width: 28, textAlign: 'right' }}>6/5</span>
          </div>
          <PaytableRow hand="Royal Flush" pay96="800" pay65="800" />
          <PaytableRow hand="Str. Flush" pay96="50" pay65="50" />
          <PaytableRow hand="4 of a Kind" pay96="25" pay65="25" />
          <PaytableRow hand="Full House" pay96="9" pay65="6" highlight />
          <PaytableRow hand="Flush" pay96="6" pay65="5" highlight />
          <PaytableRow hand="Straight" pay96="4" pay65="4" />
          <PaytableRow hand="3 of a Kind" pay96="3" pay65="3" />
          <PaytableRow hand="Two Pair" pay96="2" pay65="2" />
          <PaytableRow hand="Jacks+" pay96="1" pay65="1" />
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="House Edge" caption="Same game name, very different math">
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { label: '9/6', edge: '0.46%', color: colors.secondary },
            { label: '6/5', edge: '5.00%', color: colors.accent },
          ].map(m => (
            <div key={m.label} style={{
              padding: '16px 20px', borderRadius: 10, textAlign: 'center',
              background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: m.color, fontFamily: fonts.heading, marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: m.color, fontFamily: fonts.mono }}>{m.edge}</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>house edge</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: colors.accent, fontFamily: fonts.heading }}>
          10x
        </div>
        <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>
          difference
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Your Wallet" caption="Per $100 wagered, over time">
        <div style={{ display: 'flex', gap: 10, width: '90%' }}>
          <div style={{ flex: 1, textAlign: 'center', padding: '12px 8px', borderRadius: 8, background: 'rgba(0,212,170,0.06)' }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>9/6</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>$0.46</div>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>lost per $100</div>
          </div>
          <div style={{ flex: 1, textAlign: 'center', padding: '12px 8px', borderRadius: 8, background: 'rgba(255,107,53,0.06)' }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>6/5</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>$5.00</div>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>lost per $100</div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 3 — volatility
  return (
    <VisualLayout label="Royal Flush" caption="Big part of RTP, rare event">
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 32, fontWeight: 800, color: colors.warning, fontFamily: fonts.mono }}>1 in</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: colors.white, fontFamily: fonts.mono }}>40,000</div>
        <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body, marginTop: 4 }}>hands between royals</div>
      </div>
      <div style={{
        padding: '8px 16px', borderRadius: 8,
        background: 'rgba(255,179,0,0.08)', borderLeft: `3px solid ${colors.warning}`,
        fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.5,
      }}>
        Strategy is how you survive the wait.
      </div>
    </VisualLayout>
  );
}

function StrategyVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Strategy Priority" caption="Hold the best available">
        <div style={{ width: '88%' }}>
          {[
            { pri: '1', hand: 'Royal / Str. Flush / 4oak', color: colors.secondary },
            { pri: '2', hand: '4 to a Royal', color: colors.secondary },
            { pri: '3', hand: 'Full House / Flush / Straight', color: colors.secondaryDark },
            { pri: '4', hand: 'Three of a Kind', color: colors.warning },
            { pri: '5', hand: 'High Pair (J+)', color: colors.accent },
          ].map(r => (
            <div key={r.pri} style={{
              display: 'flex', gap: 8, alignItems: 'center',
              padding: '6px 0', borderBottom: `1px solid ${colors.primaryLight}`,
            }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: r.color, fontFamily: fonts.mono, width: 16 }}>{r.pri}</span>
              <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>{r.hand}</span>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Never Hold a Kicker" caption="The pair is what matters">
        <CardHand
          cards={[
            { rank: 'Q', suit: '\u2665' }, { rank: 'Q', suit: '\u2660' },
            { rank: 'A', suit: '\u2663' }, { rank: '7', suit: '\u2666' },
            { rank: '3', suit: '\u2660' },
          ]}
          heldIndices={[0, 1]}
        />
        <div style={{
          padding: '6px 12px', borderRadius: 6,
          background: 'rgba(255,61,0,0.08)', border: `1px solid rgba(255,61,0,0.2)`,
          fontSize: 10, color: colors.danger, fontFamily: fonts.heading, fontWeight: 700,
        }}>
          Don&apos;t hold the Ace
        </div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="Break the Flush" caption="Expected value says: go for the royal">
      <CardHand
        cards={[
          { rank: 'K', suit: '\u2660' }, { rank: 'Q', suit: '\u2660' },
          { rank: 'J', suit: '\u2660' }, { rank: '10', suit: '\u2660' },
          { rank: '4', suit: '\u2660' },
        ]}
        heldIndices={[0, 1, 2, 3]}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ textAlign: 'center', padding: '6px 10px', borderRadius: 6, background: colors.primaryDark }}>
          <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading }}>FLUSH</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: colors.neutral300, fontFamily: fonts.mono }}>6x</div>
        </div>
        <div style={{ fontSize: 16, color: colors.neutral500, alignSelf: 'center' }}>vs</div>
        <div style={{ textAlign: 'center', padding: '6px 10px', borderRadius: 6, background: 'rgba(0,212,170,0.08)' }}>
          <div style={{ fontSize: 9, color: colors.secondary, fontFamily: fonts.heading }}>ROYAL DRAW</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>800x</div>
        </div>
      </div>
    </VisualLayout>
  );
}

function TipsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Check the Paytable" caption="9/6 = full pay. Anything less costs you.">
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { label: '9/6', edge: '0.46%', good: true },
            { label: '8/5', edge: '2.70%', good: false },
            { label: '6/5', edge: '5.00%', good: false },
          ].map(t => (
            <div key={t.label} style={{
              padding: '10px 12px', borderRadius: 8, textAlign: 'center',
              background: t.good ? 'rgba(0,212,170,0.08)' : colors.primaryDark,
              border: `1px solid ${t.good ? colors.secondary : colors.primaryLight}`,
            }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: t.good ? colors.secondary : colors.neutral500, fontFamily: fonts.mono }}>{t.label}</div>
              <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, marginTop: 2 }}>{t.edge}</div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Max Credits" caption="Lower denomination, max bet">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>$1 x 1 credit</div>
          <div style={{ fontSize: 9, color: colors.neutral500, margin: '4px 0' }}>vs</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: colors.secondary, fontFamily: fonts.body }}>$0.25 x 5 credits</div>
        </div>
        <div style={{
          padding: '8px 16px', borderRadius: 8,
          background: 'rgba(0,212,170,0.06)', borderLeft: `3px solid ${colors.secondary}`,
          fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center',
        }}>
          Same total bet. Better royal payout.
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Strategy Cards" caption="Nobody minds. Use them.">
        <div style={{
          width: '75%', padding: '14px', borderRadius: 10,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 28, marginBottom: 4 }}>&#x1F0CF;</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.white, fontFamily: fonts.heading }}>Strategy Card</div>
          <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, marginTop: 4 }}>Legal at the machine</div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 3) {
    return (
      <VisualLayout label="Not a Slot" caption="Every hold has a correct answer">
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ textAlign: 'center', padding: '10px 14px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', border: `1px solid rgba(255,61,0,0.15)` }}>
            <div style={{ fontSize: 9, color: colors.danger, fontFamily: fonts.heading, fontWeight: 700 }}>SLOT</div>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, marginTop: 4 }}>No decisions</div>
          </div>
          <div style={{ textAlign: 'center', padding: '10px 14px', borderRadius: 8, background: 'rgba(0,212,170,0.06)', border: `1px solid rgba(0,212,170,0.15)` }}>
            <div style={{ fontSize: 9, color: colors.secondary, fontFamily: fonts.heading, fontWeight: 700 }}>VIDEO POKER</div>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, marginTop: 4 }}>32 hold combos</div>
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
          { left: '200\u2013400', right: 'hands / hour' },
          { left: '$1.25', right: 'per hand (5x $0.25)' },
          { left: '$250\u2013$500', right: 'wagered / hour' },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', padding: '6px 0',
            borderBottom: i < 2 ? `1px solid ${colors.primaryLight}` : 'none',
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: colors.white, fontFamily: fonts.mono }}>{row.left}</span>
            <span style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>{row.right}</span>
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
            <span style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>Hot Streaks</span>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>Each hand is a fresh deal from a shuffled deck.</div>
        </div>
        <div style={{ width: '85%', padding: '10px 12px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 14, color: colors.danger }}>&#x2717;</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>Due for a Win</span>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>The machine has no memory of past results.</div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 1
  return (
    <VisualLayout label="Busted" caption="House edge is a percentage">
      <div style={{ width: '85%', padding: '10px 12px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 14, color: colors.danger }}>&#x2717;</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>Near Misses</span>
        </div>
        <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>Almost winning is still losing. Each draw is independent.</div>
      </div>
      <div style={{ width: '85%', padding: '10px 12px', borderRadius: 8, background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 14, color: colors.danger }}>&#x2717;</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>Higher Bets = Better Odds</span>
        </div>
        <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>Edge is a percentage. But check the royal flush bonus at max bet.</div>
      </div>
    </VisualLayout>
  );
}

const radius = { full: 9999 };

export default function VideoPokerVisuals({ chapterId, slideIndex }: VideoPokerVisualsProps) {
  return (
    <div key={`${chapterId}-${slideIndex}`} style={{ height: '100%', animation: 'fadeSlideIn 0.4s ease-out' }}>
      {chapterId === 'how-it-works' && <HowItWorksVisual slide={slideIndex} />}
      {chapterId === 'bet-types' && <BetTypesVisual slide={slideIndex} />}
      {chapterId === 'the-math' && <TheMathVisual slide={slideIndex} />}
      {chapterId === 'strategy' && <StrategyVisual slide={slideIndex} />}
      {chapterId === 'tips' && <TipsVisual slide={slideIndex} />}
      {chapterId === 'myths' && <MythsVisual slide={slideIndex} />}
    </div>
  );
}
