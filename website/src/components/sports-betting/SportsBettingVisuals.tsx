'use client';

import { colors, fonts } from '@/lib/brand-tokens';

interface SportsBettingVisualsProps {
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

/* ─── Odds badge ─── */

function OddsBadge({ odds, color }: { odds: string; color: string }) {
  return (
    <span style={{
      padding: '3px 8px', borderRadius: 4,
      background: `${color}15`, border: `1px solid ${color}30`,
      fontSize: 13, fontWeight: 800, color, fontFamily: fonts.mono,
    }}>
      {odds}
    </span>
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
      <VisualLayout label="The Basics" caption="Sportsbook sets odds, you place a bet">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: colors.white, fontFamily: fonts.heading }}>Team A</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>Favorite</div>
              </div>
              <OddsBadge odds="\u2212150" color={colors.accent} />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 9, color: colors.neutral700, fontFamily: fonts.heading, letterSpacing: 1 }}>VS</span>
          </div>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: colors.white, fontFamily: fonts.heading }}>Team B</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>Underdog</div>
              </div>
              <OddsBadge odds="+130" color={colors.secondary} />
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Key Difference" caption="Odds are set by the market, not the math">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: 'rgba(255,107,53,0.06)', border: '1px solid rgba(255,107,53,0.12)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 10, color: colors.accent, fontFamily: fonts.heading, fontWeight: 700 }}>CASINO GAMES</div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, marginTop: 2 }}>
              House edge baked into the math.
            </div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>
              Roulette wheel = fixed odds.
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 9, color: colors.neutral700, fontFamily: fonts.heading, letterSpacing: 1 }}>VS</span>
          </div>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.12)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 10, color: colors.secondary, fontFamily: fonts.heading, fontWeight: 700 }}>SPORTS BETTING</div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, marginTop: 2 }}>
              Odds set by probability + market demand.
            </div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>
              The line moves.
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="The Vig" caption="The sportsbook\u2019s built-in commission">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          padding: '10px 14px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>FAIR COIN FLIP</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 6 }}>
            <div>
              <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Heads</div>
              <OddsBadge odds="+100" color={colors.secondary} />
            </div>
            <div>
              <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Tails</div>
              <OddsBadge odds="+100" color={colors.secondary} />
            </div>
          </div>
        </div>
        <svg viewBox="0 0 16 20" width={10} height={14} stroke={colors.neutral500} strokeWidth="2" fill="none" strokeLinecap="round" style={{ margin: '0 auto' }}>
          <line x1="8" y1="0" x2="8" y2="16" /><polyline points="3,12 8,18 13,12" />
        </svg>
        <div style={{
          padding: '10px 14px', borderRadius: 8,
          background: 'rgba(255,107,53,0.06)', border: '1px solid rgba(255,107,53,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 9, color: colors.accent, fontFamily: fonts.heading, letterSpacing: 1 }}>WITH VIG</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 6 }}>
            <div>
              <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Heads</div>
              <OddsBadge odds="\u2212110" color={colors.accent} />
            </div>
            <div>
              <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Tails</div>
              <OddsBadge odds="\u2212110" color={colors.accent} />
            </div>
          </div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, marginTop: 6 }}>
            Break-even: <strong style={{ color: colors.accent, fontFamily: fonts.mono }}>52.4%</strong> win rate
          </div>
        </div>
      </div>
    </VisualLayout>
  );
}

function OddsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="American Odds" caption="Plus and minus signs tell the story">
        <div style={{ width: '88%' }}>
          {[
            { odds: '\u2212150', meaning: 'Bet $150 to win $100', type: 'Favorite', color: colors.accent },
            { odds: '+150', meaning: 'Bet $100 to win $150', type: 'Underdog', color: colors.secondary },
            { odds: '\u2212110', meaning: 'Bet $110 to win $100', type: 'Std vig', color: colors.warning },
            { odds: '+100', meaning: 'Bet $100 to win $100', type: 'Even', color: colors.neutral300 },
          ].map((o, i) => (
            <div key={o.odds} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '7px 0', borderBottom: i < 3 ? `1px solid ${colors.primaryLight}` : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <OddsBadge odds={o.odds} color={o.color} />
                <span style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>{o.type}</span>
              </div>
              <span style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>{o.meaning}</span>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Decimal Odds" caption="Multiply your stake by the decimal">
        <div style={{ width: '88%' }}>
          {[
            { decimal: '1.50', american: '\u2212200', returns: '$150', profit: '$50' },
            { decimal: '2.00', american: '+100', returns: '$200', profit: '$100' },
            { decimal: '3.00', american: '+200', returns: '$300', profit: '$200' },
            { decimal: '1.91', american: '\u2212110', returns: '$191', profit: '$91' },
          ].map((o, i) => (
            <div key={o.decimal} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '7px 0', borderBottom: i < 3 ? `1px solid ${colors.primaryLight}` : 'none',
            }}>
              <div>
                <span style={{ fontSize: 14, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>{o.decimal}</span>
                <span style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body, marginLeft: 6 }}>({o.american})</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: colors.white, fontFamily: fonts.mono }}>{o.returns}</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>profit: {o.profit}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body, textAlign: 'center' }}>
          $100 stake in each example
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Fractional Odds" caption="Traditional UK/Ireland format">
        <div style={{ width: '88%' }}>
          {[
            { frac: '5/1', decimal: '6.00', meaning: 'Win $5 per $1 bet' },
            { frac: '2/1', decimal: '3.00', meaning: 'Win $2 per $1 bet' },
            { frac: '1/1', decimal: '2.00', meaning: 'Even money' },
            { frac: '2/5', decimal: '1.40', meaning: 'Win $2 per $5 bet' },
          ].map((o, i) => (
            <div key={o.frac} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '7px 0', borderBottom: i < 3 ? `1px solid ${colors.primaryLight}` : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>{o.frac}</span>
                <span style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>= {o.decimal}</span>
              </div>
              <span style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>{o.meaning}</span>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="Implied Probability" caption="The vig lives in the overage">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          padding: '10px 14px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Team A (&minus;150)</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>60%</span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: colors.primaryLight, overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 4, background: colors.secondary, width: '60%' }} />
          </div>
        </div>
        <div style={{
          padding: '10px 14px', borderRadius: 8,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Team B (+130)</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: colors.accent, fontFamily: fonts.mono }}>43.5%</span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: colors.primaryLight, overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 4, background: colors.accent, width: '43.5%' }} />
          </div>
        </div>
        <div style={{
          padding: '8px 14px', borderRadius: 8,
          background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>
            60% + 43.5% = <strong style={{ color: colors.danger, fontFamily: fonts.mono }}>103.5%</strong>
          </div>
          <div style={{ fontSize: 10, color: colors.danger, fontFamily: fonts.body, marginTop: 2 }}>
            The 3.5% over 100% is the vig
          </div>
        </div>
      </div>
    </VisualLayout>
  );
}

function BetTypesVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Moneyline & Spread" caption="Pick the winner, or bet the margin">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>MONEYLINE</div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>
              Just pick the winner. That&apos;s it.
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <OddsBadge odds="\u2212150" color={colors.accent} />
              <span style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>vs</span>
              <OddsBadge odds="+130" color={colors.secondary} />
            </div>
          </div>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>POINT SPREAD</div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>
              Favorite must win by more than the spread.
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: colors.accent, fontFamily: fonts.mono }}>&minus;6.5</span>
              <span style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>vs</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>+6.5</span>
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Totals & Parlays" caption="Parlays: all picks must win">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>OVER/UNDER</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Over 48.5</div>
                <OddsBadge odds="\u2212110" color={colors.secondary} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Under 48.5</div>
                <OddsBadge odds="\u2212110" color={colors.accent} />
              </div>
            </div>
          </div>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.12)',
          }}>
            <div style={{ fontSize: 9, color: colors.danger, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>PARLAY VIG COMPOUNDS</div>
            {[
              { legs: '2', payout: '~2.6:1', prob: '~1 in 4' },
              { legs: '5', payout: '~25:1', prob: '~1 in 32' },
              { legs: '10', payout: '~700:1', prob: '~1 in 1,024' },
            ].map(p => (
              <div key={p.legs} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '3px 0', fontSize: 10,
              }}>
                <span style={{ color: colors.neutral300, fontFamily: fonts.body }}>{p.legs} legs</span>
                <span style={{ color: colors.accent, fontFamily: fonts.mono, fontWeight: 600 }}>{p.payout}</span>
                <span style={{ color: colors.neutral500, fontFamily: fonts.body }}>{p.prob}</span>
              </div>
            ))}
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Props & Futures" caption="Wider vig, harder to evaluate">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>PROPS</div>
            {['Player X over/under 24.5 pts', 'First team to score', 'Will there be overtime?'].map((p, i) => (
              <div key={i} style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, padding: '2px 0' }}>
                {p}
              </div>
            ))}
          </div>
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 6 }}>FUTURES</div>
            {['Championship winner', 'Season win totals', 'MVP award'].map((p, i) => (
              <div key={i} style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, padding: '2px 0' }}>
                {p}
              </div>
            ))}
            <div style={{ fontSize: 9, color: colors.warning, fontFamily: fonts.body, marginTop: 4 }}>
              Money locked until outcome is decided
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="In-Play Betting" caption="The line moves in seconds">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{
          padding: '14px', borderRadius: 10,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1 }}>LIVE ODDS</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 6 }}>
            {['\u2212150', '\u2212165', '\u2212180', '\u2212200'].map((o, i) => (
              <div key={i} style={{
                padding: '4px 6px', borderRadius: 4,
                background: i === 3 ? 'rgba(255,107,53,0.15)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${i === 3 ? 'rgba(255,107,53,0.3)' : 'rgba(255,255,255,0.06)'}`,
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: i === 3 ? colors.accent : colors.neutral500, fontFamily: fonts.mono }}>{o}</div>
                <div style={{ fontSize: 7, color: colors.neutral700, fontFamily: fonts.body }}>Q{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          padding: '8px 14px', borderRadius: 8,
          background: 'rgba(255,61,0,0.06)', border: '1px solid rgba(255,61,0,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading }}>Algorithms process data faster than you</div>
          <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, marginTop: 2 }}>
            Wider vig than pre-game
          </div>
        </div>
      </div>
    </VisualLayout>
  );
}

function TheMathVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="The Vig in Practice" caption="Combined implied probability always exceeds 100%">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { line: 'Both at \u2212110', each: '52.4%', total: '104.8%', vig: '~4.5%' },
            { line: '\u2212150 / +130', each: '60% + 43.5%', total: '103.5%', vig: '~3.4%' },
            { line: '\u2212200 / +170', each: '66.7% + 37%', total: '103.7%', vig: '~3.6%' },
          ].map((r, i) => (
            <div key={r.line} style={{
              padding: '8px 12px', borderRadius: 8,
              background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: colors.white, fontFamily: fonts.body }}>{r.line}</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>{r.each}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: colors.accent, fontFamily: fonts.mono }}>{r.total}</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>vig: {r.vig}</div>
              </div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Break-Even Rates" caption="The win rate you need just to stay flat">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { odds: '\u2212150', rate: '60.0%', bar: 60, color: colors.danger },
            { odds: '\u2212120', rate: '54.5%', bar: 54.5, color: colors.accent },
            { odds: '\u2212110', rate: '52.4%', bar: 52.4, color: colors.warning },
            { odds: '+100', rate: '50.0%', bar: 50, color: colors.neutral300 },
            { odds: '+150', rate: '40.0%', bar: 40, color: colors.secondary },
          ].map(r => (
            <div key={r.odds}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: colors.white, fontFamily: fonts.mono }}>{r.odds}</span>
                <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.mono }}>{r.rate}</span>
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
    <VisualLayout label="Pro Win Rates" caption="The razor-thin margin that separates profit from loss">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: '100%', padding: '14px', borderRadius: 10,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          <div style={{ position: 'relative', height: 60 }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: 25, height: 10, borderRadius: 5, background: colors.primaryLight }} />
            <div style={{
              position: 'absolute', left: '47.6%', top: 10, width: 2, height: 40, background: colors.danger,
            }} />
            <div style={{
              position: 'absolute', left: '47.6%', top: -2, transform: 'translateX(-50%)',
              fontSize: 8, color: colors.danger, fontFamily: fonts.mono, fontWeight: 700,
            }}>52.4%</div>
            <div style={{
              position: 'absolute', left: '53%', right: '39%', top: 25, height: 10, borderRadius: 5,
              background: `linear-gradient(90deg, ${colors.secondary}, ${colors.secondaryDark})`,
            }} />
            <div style={{
              position: 'absolute', left: '56%', top: 48, transform: 'translateX(-50%)',
              fontSize: 8, color: colors.secondary, fontFamily: fonts.mono, fontWeight: 700, whiteSpace: 'nowrap',
            }}>53&ndash;56% (pros)</div>
          </div>
        </div>
        <div style={{ fontSize: 10, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center' }}>
          At &minus;110, the difference between <strong style={{ color: colors.danger }}>52.4%</strong> (break-even) and <strong style={{ color: colors.secondary }}>55%</strong> (excellent) is everything.
        </div>
      </div>
    </VisualLayout>
  );
}

function MythsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Busted" caption="The line already knows what you know">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MythCard
            myth="Knowing the Sport = Winning"
            truth="Sportsbook odds are set using vast data and modeling. Your knowledge is priced in. Beating the line means finding what the market missed."
          />
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Busted" caption="The vig compounds with each leg">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MythCard
            myth="Parlays Are a Smart Strategy"
            truth="Every leg you add multiplies the difficulty AND the sportsbook's margin. A 10-leg parlay: ~1 in 1,024 chance. Parlays are entertainment, not strategy."
          />
          <div style={{
            padding: '10px 14px', borderRadius: 8,
            background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
          }}>
            <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 4 }}>PARLAY REALITY CHECK</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>
              <span>5 legs</span>
              <span style={{ color: colors.accent, fontFamily: fonts.mono }}>~1 in 32</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: colors.neutral300, fontFamily: fonts.body }}>
              <span>10 legs</span>
              <span style={{ color: colors.danger, fontFamily: fonts.mono }}>~1 in 1,024</span>
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="Busted" caption="Past tips don\u2019t predict future results">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <MythCard
          myth="Following Tipsters Guarantees Profit"
          truth="Survivorship bias: you only hear about the winners. For every 'expert' on a hot streak, dozens quietly lost. Track records are cherry-picked."
        />
        <MythCard
          myth="In-Play Betting Gives You an Edge"
          truth="Algorithms process data faster than any human. The odds adjust in seconds. Speed matters more than analysis in live betting."
        />
      </div>
    </VisualLayout>
  );
}

/* ─── Main Export ─── */
export default function SportsBettingVisuals({ chapterId, slideIndex }: SportsBettingVisualsProps) {
  return (
    <div key={`${chapterId}-${slideIndex}`} style={{ height: '100%', animation: 'fadeSlideIn 0.4s ease-out' }}>
      {chapterId === 'how-it-works' && <HowItWorksVisual slide={slideIndex} />}
      {chapterId === 'reading-odds' && <OddsVisual slide={slideIndex} />}
      {chapterId === 'bet-types' && <BetTypesVisual slide={slideIndex} />}
      {chapterId === 'the-math' && <TheMathVisual slide={slideIndex} />}
      {chapterId === 'myths' && <MythsVisual slide={slideIndex} />}
    </div>
  );
}
