'use client';

import Link from 'next/link';
import { colors, fonts, radius } from '@/lib/brand-tokens';
import useIsMobile from '@/lib/useIsMobile';
import ScrollyChapter from '@/components/shared/ScrollyChapter';
import type { Slide, TermDef } from '@/components/shared/ScrollyChapter';
import SportsBettingVisuals from '@/components/sports-betting/SportsBettingVisuals';
import SportsBettingQuiz from '@/components/sports-betting/SportsBettingQuiz';
import MobileNav from '@/components/shared/MobileNav';

/* ─── Chapter data ─── */

const HOW_IT_WORKS: Slide[] = [
  {
    title: 'The Basics',
    body: 'A sportsbook sets odds on sporting events \u2014 who will win, by how much, and what the total score might be. You place a bet. If you\u2019re right, you get paid based on the odds. If you\u2019re wrong, you lose your stake. Simple as that.',
    highlight: 'Pick an outcome, place a stake, get paid based on the odds',
  },
  {
    title: 'The Key Difference',
    body: 'Unlike casino games, sports betting odds aren\u2019t fixed by mathematics. In roulette, the house edge is baked into the wheel. In sports betting, odds are set by the sportsbook based on probabilities, market demand, and risk management. The line moves. Knowledge and analysis can inform your bets \u2014 but the sportsbook has more data than you.',
    highlight: 'The line already knows what you know',
  },
  {
    title: 'Where the Money Goes',
    body: 'The sportsbook\u2019s profit comes from the vig (vigorish) \u2014 a built-in commission on every bet. Imagine a coin flip: true odds would be +100 each side. But a sportsbook prices both at \u2212110. You bet $110 to win $100. Equal action on both sides? The book keeps $10 from the loser. That\u2019s the vig.',
    highlight: 'Break-even at \u2212110: 52.4% win rate',
  },
];

const READING_ODDS: Slide[] = [
  {
    title: 'American Odds',
    body: 'The standard US format. Minus (\u2212) means favorite: bet that amount to win $100. Plus (+) means underdog: bet $100 to win that amount. \u2212150 = bet $150 to win $100. +150 = bet $100 to win $150. \u2212110 is the standard vig line \u2014 the most common odds you\u2019ll see.',
    highlight: '\u2212 = favorite | + = underdog',
  },
  {
    title: 'Decimal Odds',
    body: 'Standard in Europe and Australia. The number is your total return per dollar bet (stake included). Multiply your stake by the decimal to get total return. 2.00 = even money. 1.91 = \u2212110 equivalent. 3.00 = +200. Simpler math, same information.',
    highlight: 'Stake \u00D7 decimal = total return',
  },
  {
    title: 'Fractional Odds',
    body: 'Traditional UK/Ireland format. 5/1 = win $5 per $1 bet. 2/5 = win $2 per $5 bet. The first number is profit, the second is stake. "Five to one." Less common in the US but you\u2019ll see them in international markets.',
    highlight: 'First number = profit, second = stake',
  },
  {
    title: 'Implied Probability',
    body: 'Every set of odds implies a probability. \u2212150 = 60% implied. +200 = 33.3%. Add up all outcomes in a market and the total exceeds 100%. The amount over 100% is the sportsbook\u2019s vig. A market at 104.8% means you\u2019re paying a 4.8% margin.',
    highlight: 'Total > 100% = the vig',
  },
];

const BET_TYPES: Slide[] = [
  {
    title: 'Moneyline & Spread',
    body: 'Moneyline: pick who wins. No point margin, just the winner. Point spread: the sportsbook sets a margin of victory. The favorite must win by more than the spread; the underdog can lose by less (or win outright). The half-point (.5) eliminates ties.',
    highlight: 'Moneyline = winner | Spread = margin',
  },
  {
    title: 'Totals & Parlays',
    body: 'Totals (over/under): bet on the combined score, not who wins. Parlays: combine multiple picks into one bet. All must win. 2-leg parlay pays ~2.6:1. 5-leg pays ~25:1. 10-leg pays ~700:1 but hits ~1 in 1,024 times. The vig compounds with each leg \u2014 parlays are the sportsbook\u2019s most profitable product.',
    highlight: 'Parlay vig compounds per leg',
  },
  {
    title: 'Props & Futures',
    body: 'Props: bets on specific events within a game (player stats, first scorer, overtime). Props carry wider vig because lines are harder to set. Futures: bets decided weeks or months out (championship winner, MVPs). Large built-in margin plus your money is locked until the outcome.',
    highlight: 'Wider vig, harder to evaluate',
  },
  {
    title: 'In-Play Betting',
    body: 'Bets placed after the event starts, with odds updating in real time. The catch: you\u2019re betting against algorithms that process data faster than any human. The vig on in-play bets is often wider than pre-game. Speed matters more than analysis \u2014 the line moves in seconds.',
    highlight: 'Algorithms are faster than you',
  },
];

const THE_MATH: Slide[] = [
  {
    title: 'The Vig in Practice',
    body: 'Both sides at \u2212110: each implies 52.4% probability. Combined: 104.8%. That extra 4.8% is the vig. Favorite \u2212150 / underdog +130: 60% + 43.5% = 103.5%. The combined implied probability always exceeds 100%. The overage is the sportsbook\u2019s margin \u2014 how they profit regardless of who wins.',
    highlight: '104.8% combined = ~4.5% vig',
  },
  {
    title: 'Break-Even Win Rates',
    body: 'At \u2212110: 52.4%. At \u2212120: 54.5%. At \u2212150: 60%. At +100: 50%. At +150: 40%. The vig means you need to win more than half your bets to profit. At standard \u2212110, if you win exactly 50%, you\u2019re slowly losing money. Professional bettors consider 55% excellent on spread bets.',
    highlight: '\u2212110 = need 52.4% to break even',
  },
  {
    title: 'Pro-Level Margins',
    body: 'Professional sports bettors \u2014 the ones who actually profit long-term \u2014 typically hit win rates of 53\u201356% on spread bets. That razor-thin margin above 52.4% is the difference between making money and losing it. At 50% win rate with \u2212110 odds, you lose about $4.50 per $100 wagered.',
    highlight: '53\u201356% = pro territory',
  },
];

const MYTHS: Slide[] = [
  {
    title: 'Knowing the Sport = Winning',
    body: 'Sportsbook odds are set using vast amounts of data, modeling, and market efficiency. Your knowledge of the sport is already priced into the line. Beating it consistently means finding inefficiencies the market has missed \u2014 which is genuinely difficult. The line already knows what you know.',
    highlight: 'Your knowledge is priced in',
  },
  {
    title: 'Parlays Are a Smart Strategy',
    body: 'The vig compounds with each leg. A 2-leg parlay has a higher effective margin than two individual bets. A 10-leg parlay has a massive built-in margin. Parlays are the sportsbook\u2019s most profitable product for a reason. They\u2019re entertainment, not strategy.',
    highlight: '10-leg parlay: ~1 in 1,024 chance',
  },
  {
    title: 'Tipsters & In-Play Edges',
    body: 'Following tipsters? Survivorship bias: you only hear about the ones on hot streaks. For every "expert" winning, dozens lost quietly. And in-play edges? Algorithms process data faster than any human. The odds adjust in seconds. The tipster\u2019s "lock of the week" is entertainment, not alpha.',
    highlight: 'Survivorship bias + algorithmic speed',
  },
];

/* ─── Key terms ─── */
const KEY_TERMS: TermDef[] = [
  { term: 'Moneyline', def: 'A bet on which team wins, no point spread. Payouts vary based on odds.' },
  { term: 'Spread', def: 'A margin of victory set by the sportsbook. Favorite must win by more than the spread.' },
  { term: 'Vig (Juice)', def: 'The sportsbook\u2019s commission on every bet. At \u2212110, about 4.5%.' },
  { term: 'Parlay', def: 'Multiple picks in one bet. All must win. Higher payouts but vig compounds per leg.' },
  { term: 'Over/Under', def: 'Bet on combined score of both teams. Not about who wins.' },
  { term: 'Props', def: 'Bets on specific events within a game (player stats, first scorer).' },
  { term: 'Futures', def: 'Bets on outcomes decided weeks or months later. Money locked until resolved.' },
  { term: 'In-Play', def: 'Betting after the event starts. Odds update in real time.' },
  { term: 'Implied Probability', def: 'The likelihood of an outcome as suggested by the odds. Sum > 100% = vig.' },
  { term: 'Sharp', def: 'A professional bettor. When sharps move money, lines adjust.' },
];

/* ─── Nav sections ─── */
const NAV_SECTIONS = [
  { id: 'tldr', label: 'TL;DR' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'reading-odds', label: 'Odds' },
  { id: 'bet-types', label: 'Bets' },
  { id: 'the-math', label: 'Math' },
  { id: 'myths', label: 'Myths' },
  { id: 'key-terms', label: 'Terms' },
  { id: 'quiz', label: 'Quiz' },
];

export default function SportsBettingPage() {
  const isMobile = useIsMobile();

  return (
    <div style={{ minHeight: '100vh', background: colors.primary, color: colors.white }}>
      <style>{`
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
        @keyframes heroFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.1s !important;
            transition-duration: 0.1s !important;
          }
        }
      `}</style>

      {/* ─── Header ─── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '10px 16px' : '12px 32px',
        background: `${colors.primary}ee`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${colors.primaryLight}`,
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, color: colors.white }}>Play</span>
          <span style={{ fontSize: isMobile ? 18 : 22, fontWeight: 300, color: colors.secondary, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>book</span>
        </Link>
        {!isMobile && (
          <nav style={{ display: 'flex', gap: 4 }}>
            {NAV_SECTIONS.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{
                padding: '6px 12px', borderRadius: 6,
                fontSize: 12, fontWeight: 600, color: colors.neutral300,
                textDecoration: 'none', fontFamily: fonts.heading,
                transition: 'color 0.15s ease',
              }}>{s.label}</a>
            ))}
          </nav>
        )}
      </header>
      {isMobile && <MobileNav sections={NAV_SECTIONS} />}

      {/* ─── Hero ─── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: isMobile ? '80px 20px 60px' : '120px 40px 80px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.08) 0%, transparent 60%)',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {['\u26BD', '\u26BE', '\u{1F3C8}', '\u{1F3C0}', '\u26BE'].map((s, i) => (
            <span key={i} style={{
              position: 'absolute',
              fontSize: isMobile ? 28 : 40,
              opacity: 0.04,
              left: `${15 + i * 18}%`,
              top: `${10 + (i % 3) * 25}%`,
              animation: `heroFloat ${3 + i * 0.5}s ease infinite`,
              animationDelay: `${i * 0.3}s`,
            }}>{s}</span>
          ))}
        </div>

        <div style={{
          display: 'inline-block', padding: '5px 16px', borderRadius: 20,
          background: 'rgba(0,212,170,0.08)', border: '1px solid rgba(0,212,170,0.15)',
          fontSize: 11, fontWeight: 700, letterSpacing: 2, color: colors.secondary,
          textTransform: 'uppercase', fontFamily: fonts.heading, marginBottom: 24,
        }}>
          How to Play
        </div>

        <h1 style={{
          fontSize: isMobile ? 44 : 64, fontWeight: 800,
          fontFamily: fonts.heading, margin: '0 0 16px', lineHeight: 1.1,
          background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.secondary} 100%)`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          Sports Betting
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 20, color: colors.neutral300,
          fontFamily: fonts.body, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.6,
        }}>
          How odds work, what the bet types mean, and where the sportsbook makes its money. Everything you need before you place a bet.
        </p>

      </section>

      {/* ─── TL;DR ─── */}
      <section id="tldr" style={{ padding: isMobile ? '40px 20px' : '60px 40px', maxWidth: 720, margin: '0 auto' }}>
        <div style={{
          padding: isMobile ? '24px 20px' : '32px 36px', borderRadius: radius.lg,
          background: colors.primaryDark, borderLeft: `4px solid ${colors.secondary}`,
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2, color: colors.secondary,
            textTransform: 'uppercase', fontFamily: fonts.heading, marginBottom: 12,
          }}>
            The 30-Second Version
          </div>
          <p style={{
            fontSize: isMobile ? 16 : 18, color: colors.neutral100,
            fontFamily: fonts.body, margin: 0, lineHeight: 1.7,
          }}>
            Sports betting is wagering on the outcome of sporting events. Knowledge and analysis can inform your bets &mdash; but the sportsbook builds in a margin (the vig) on every line. At standard <strong style={{ color: colors.accent, fontFamily: fonts.mono }}>&minus;110</strong> odds, you need to win <strong style={{ color: colors.secondary, fontFamily: fonts.mono }}>52.4%</strong> of your bets just to break even. The line already accounts for everything you know. Beating it consistently is harder than it looks.
          </p>
        </div>
      </section>

      {/* ─── Scrollytelling Chapters ─── */}

      <ScrollyChapter id="how-it-works" label="Chapter 1" title="How It Works" slides={HOW_IT_WORKS} VisualsComponent={SportsBettingVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="reading-odds" label="Chapter 2" title="Reading the Odds" slides={READING_ODDS} VisualsComponent={SportsBettingVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="bet-types" label="Chapter 3" title="Bet Types" slides={BET_TYPES} VisualsComponent={SportsBettingVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="the-math" label="Chapter 4" title="The Math" slides={THE_MATH} VisualsComponent={SportsBettingVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="myths" label="Chapter 5" title="Common Myths" slides={MYTHS} VisualsComponent={SportsBettingVisuals} terms={KEY_TERMS} />

      {/* ─── Key Terms ─── */}
      <section id="key-terms" style={{ padding: isMobile ? '80px 20px' : '100px 40px', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: colors.secondary, textTransform: 'uppercase', fontFamily: fonts.heading, marginBottom: 8 }}>Reference</div>
          <h2 style={{ fontSize: isMobile ? 28 : 32, fontWeight: 700, color: colors.white, fontFamily: fonts.heading, margin: 0 }}>Key Terms</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 12 }}>
          {KEY_TERMS.map(kt => (
            <div key={kt.term} style={{
              padding: '16px 20px', borderRadius: radius.md,
              background: colors.primaryDark, border: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading, marginBottom: 6 }}>{kt.term}</div>
              <div style={{ fontSize: 13, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.5 }}>{kt.def}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Quiz ─── */}
      <SportsBettingQuiz />

      {/* ─── CTA Footer ─── */}
      <section style={{
        padding: isMobile ? '60px 20px' : '80px 40px', textAlign: 'center',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,170,0.04) 100%)',
      }}>
        <h2 style={{ fontSize: isMobile ? 24 : 32, fontWeight: 700, color: colors.white, fontFamily: fonts.heading, margin: '0 0 12px' }}>
          Now you know the math.
        </h2>
        <p style={{ fontSize: 16, color: colors.neutral300, fontFamily: fonts.body, maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.6 }}>
          The vig, the break-even rates, and why the line already knows. No fine print.
        </p>
        <Link href="/" style={{
          display: 'inline-block', padding: '14px 32px', borderRadius: radius.md,
          background: `linear-gradient(135deg, ${colors.secondary}, ${colors.secondaryDark})`,
          color: colors.primary, fontSize: 15, fontWeight: 700, fontFamily: fonts.heading,
          textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,212,170,0.2)',
        }}>
          Explore More Games
        </Link>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        padding: isMobile ? '16px 20px' : '20px 32px',
        borderTop: `1px solid ${colors.primaryLight}`,
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? 6 : 0, fontSize: 12, color: colors.neutral500,
      }}>
        <span>Playbook &mdash; Open-source gambling entertainment literacy</span>
        <span>Free, confidential support 24/7: <strong style={{ color: colors.white }}>1-800-522-4700</strong></span>
      </footer>
    </div>
  );
}
