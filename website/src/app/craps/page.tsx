'use client';

import Link from 'next/link';
import { colors, fonts, radius } from '@/lib/brand-tokens';
import useIsMobile from '@/lib/useIsMobile';
import ScrollyChapter from '@/components/shared/ScrollyChapter';
import type { Slide, TermDef } from '@/components/shared/ScrollyChapter';
import CrapsVisuals from '@/components/craps/CrapsVisuals';
import CrapsQuiz from '@/components/craps/CrapsQuiz';
import MobileNav from '@/components/shared/MobileNav';

/* ─── Chapter data ─── */

const HOW_IT_WORKS: Slide[] = [
  {
    title: 'The Table',
    body: 'Craps is played with two dice. One player \u2014 the "shooter" \u2014 throws the dice. Everyone at the table bets on the outcome. Two dice produce 36 possible combinations, with totals from 2 through 12. The game moves in rounds with two phases: the come-out roll and the point phase.',
    highlight: '2 dice | 36 combinations | Totals 2\u201312',
  },
  {
    title: 'The Come-Out Roll',
    body: 'The first roll of a new round. Three things can happen: roll 7 or 11 (natural \u2014 pass line wins), roll 2, 3, or 12 (craps \u2014 pass line loses), or roll 4, 5, 6, 8, 9, or 10 (that number becomes "the point" and the round continues).',
    highlight: '7/11 = pass wins | 2/3/12 = pass loses | Rest = point',
  },
  {
    title: 'The Point Phase',
    body: 'Once a point is established, the shooter keeps rolling. Hit the point number again before rolling a 7? Pass line wins. Roll a 7 first? That\u2019s a "seven out" \u2014 pass line loses and the dice pass to the next shooter. Any other number? Just keep rolling.',
    highlight: 'Point before 7 = win | 7 before point = lose',
  },
  {
    title: 'Dice Probabilities',
    body: '7 is the most common roll \u2014 there are 6 ways to make it out of 36 combinations (16.67%). That\u2019s why 7 wins on the come-out but ends the round during the point phase. 6 and 8 are next most common (5 ways each). 2 and 12 are rarest (1 way each). This probability distribution drives every bet in the game.',
    highlight: '7 = 6 ways (16.67%) \u2014 most common roll',
  },
];

const BET_TYPES: Slide[] = [
  {
    title: 'Pass / Don\u2019t Pass',
    body: 'The foundation. Pass line: bet with the shooter (1.41% house edge). Don\u2019t pass: bet against the shooter (1.36% house edge). Don\u2019t pass is slightly better math, but socially it\u2019s "betting against the table." Most players stick to the pass line. Either way, these are among the best bets in the casino.',
    highlight: 'Pass: 1.41% | Don\u2019t pass: 1.36%',
  },
  {
    title: 'The Odds Bet',
    body: 'The most important bet in craps \u2014 and the only bet in the entire casino with 0% house edge. After a point is set, place an additional bet behind your pass line bet. It pays true mathematical odds. Casinos cap it at a multiple (3x, 5x, 10x). The more you bet in odds relative to your pass bet, the lower your effective edge.',
    highlight: '0% house edge \u2014 the only fair bet in the casino',
  },
  {
    title: 'Come / Don\u2019t Come',
    body: 'Identical to pass/don\u2019t pass, but placed after a point is already established. The next roll becomes your personal come-out roll. If a point is set for you, you track your own separate point. Come: 1.41% edge. Don\u2019t come: 1.36%. You can place odds behind these too.',
    highlight: 'Same rules as pass, placed mid-round',
  },
  {
    title: 'Place Bets & Props',
    body: 'Place bets on 6 or 8 are reasonable at 1.52% edge. Place 4/10 are expensive at 6.67%. Proposition bets (the center of the table) \u2014 Any 7 (16.67%), hardways (9\u201311%), Any Craps (11.11%) \u2014 carry massive house edges. The flashy bets in the middle are where the casino makes its money.',
    highlight: 'Center of table = 9\u201317% house edge',
  },
];

const THE_MATH: Slide[] = [
  {
    title: 'The House Edge Spectrum',
    body: 'Craps has the widest range of any table game. Odds bet: 0%. Don\u2019t pass: 1.36%. Pass: 1.41%. Place 6/8: 1.52%. Place 5/9: 4%. Place 4/10: 6.67%. Hard 6/8: 9.09%. Any 7: 16.67%. The best and worst bets in the casino are on the same table.',
    highlight: '0% to 16.67% \u2014 all on one table',
  },
  {
    title: 'Why Odds Bets Matter',
    body: 'The odds bet dilutes the house edge. Pass line only: 1.41%. Add 1x odds: 0.85%. Add 2x: 0.61%. Add 5x: 0.33%. Add 10x: 0.18%. The more you bet in odds, the closer your effective edge approaches zero. Pass + maximum odds offers some of the best expected value in the casino.',
    highlight: 'Pass + 5x odds = 0.33% effective edge',
  },
  {
    title: 'What It Means for Your Wallet',
    body: 'Pass line only: lose about $1.41 per $100 wagered. Pass + 5x odds: about $0.33 per $100. Compare that to American roulette ($5.26/100) or slots ($5\u2013$15+/100). But bet Any 7 and you lose $16.67 per $100. The choice of bet matters more than anything else at this table.',
    highlight: '$0.33 (pass+odds) vs $16.67 (Any 7) per $100',
  },
];

const TIPS: Slide[] = [
  {
    title: 'Stick to Pass + Odds',
    body: 'This is the bread and butter of craps strategy. The pass line at 1.41% plus odds at 0% gives you the best combined edge available. Simple, low edge, straightforward. If the table allows higher odds multiples, putting more of your wager in odds (within your budget) lowers your effective house edge.',
    highlight: 'Best combo in the casino',
  },
  {
    title: 'Avoid the Center',
    body: 'Proposition bets are where the casino makes its money. Any 7 at 16.67%, hardways at 9\u201311%, Any Craps at 11.11% \u2014 these edges are 6 to 12 times higher than the pass line. The high payouts are calibrated so the casino keeps a massive percentage. Place 6/8 at 1.52% are reasonable if you want more action.',
    highlight: 'The flashy bets are the expensive ones',
  },
  {
    title: 'Set Your Budget',
    body: 'Craps is social and fast-paced. The energy at the table is part of the appeal \u2014 and the risk. Decide on a session amount and bet size before your first roll. Stick to pass + odds. The math is on your side (relatively speaking) \u2014 but only if you stay disciplined with your bankroll.',
    highlight: 'Social energy can drive overcommitment',
  },
];

const MYTHS: Slide[] = [
  {
    title: 'Dice Control / Setting',
    body: 'The dice must hit the bumpy rubber back wall of the table. Casino craps tables are specifically designed with pyramid-shaped rubber surfaces to ensure randomization. The idea that you can "set" the dice to influence outcomes ignores the physics of the bounce. Casinos don\u2019t worry about dice setters. Physics wins.',
    highlight: 'Rubber pyramids + required wall bounce = randomness',
  },
  {
    title: 'Hot Shooters & Due Numbers',
    body: 'Each roll produces one of 36 equally likely combinations. The dice don\u2019t know who\u2019s throwing them, and they don\u2019t remember the last roll. A shooter on a "hot streak" is normal random variation. Haven\u2019t seen a 7 in 20 rolls? Next roll still has 6 chances in 36 (16.67%) of being 7. Exactly the same as always.',
    highlight: '36 independent combinations, every single roll',
  },
];

/* ─── Key terms ─── */
const KEY_TERMS: TermDef[] = [
  { term: 'Shooter', def: 'The player who rolls the dice. Rotates around the table.' },
  { term: 'Come-Out Roll', def: 'First roll of a new round. Determines if a point is set.' },
  { term: 'Point', def: 'A number (4, 5, 6, 8, 9, 10) established on the come-out. Shooter tries to hit it before rolling 7.' },
  { term: 'Seven Out', def: 'Rolling 7 after a point is set. Pass line loses. Dice pass to next shooter.' },
  { term: 'Pass Line', def: 'Main bet. Win on come-out 7/11, lose on 2/3/12. After point, win if point before 7. Edge: 1.41%.' },
  { term: 'Don\u2019t Pass', def: 'Opposite of pass. Win on come-out 2/3, push on 12. After point, win if 7 before point. Edge: 1.36%.' },
  { term: 'Odds Bet', def: 'Bet behind pass/don\u2019t pass after point is set. Pays true odds. 0% house edge.' },
  { term: 'Proposition Bet', def: 'High-payout, high-edge bets in the center (Any 7, hardways). Edge: 9\u201317%.' },
  { term: 'Hardway', def: 'Betting a number as a double (e.g., hard 8 = two 4s) before 7 or the "easy" way.' },
  { term: 'Natural', def: 'Rolling 7 or 11 on the come-out roll. Pass line wins immediately.' },
];

/* ─── Nav sections ─── */
const NAV_SECTIONS = [
  { id: 'tldr', label: 'TL;DR' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'bet-types', label: 'Bets' },
  { id: 'the-math', label: 'Math' },
  { id: 'tips', label: 'Tips' },
  { id: 'myths', label: 'Myths' },
  { id: 'key-terms', label: 'Terms' },
  { id: 'quiz', label: 'Quiz' },
];

export default function CrapsPage() {
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
          {['\u2680', '\u2681', '\u2682', '\u2683', '\u2684'].map((s, i) => (
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
          Craps
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 20, color: colors.neutral300,
          fontFamily: fonts.body, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.6,
        }}>
          The rolls, the bets, and why the odds bet is the only fair wager in the casino. Everything you need to know before you play.
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
            Craps is a dice game where the pass line has a <strong style={{ color: colors.secondary, fontFamily: fonts.mono }}>1.41%</strong> house edge &mdash; one of the lowest in the casino. After a point is set, the "odds bet" pays true odds with <strong style={{ color: colors.success, fontFamily: fonts.mono }}>0%</strong> house edge &mdash; the only fair bet in any casino game. Stick to pass + odds, skip the proposition bets in the center of the table (<strong style={{ color: colors.danger, fontFamily: fonts.mono }}>9&ndash;17%</strong> house edge).
          </p>
        </div>
      </section>

      {/* ─── Scrollytelling Chapters ─── */}

      <ScrollyChapter id="how-it-works" label="Chapter 1" title="How the Game Works" slides={HOW_IT_WORKS} VisualsComponent={CrapsVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="bet-types" label="Chapter 2" title="Bet Types" slides={BET_TYPES} VisualsComponent={CrapsVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="the-math" label="Chapter 3" title="The Math" slides={THE_MATH} VisualsComponent={CrapsVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="tips" label="Chapter 4" title="Tips for Informed Play" slides={TIPS} VisualsComponent={CrapsVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="myths" label="Chapter 5" title="Common Myths" slides={MYTHS} VisualsComponent={CrapsVisuals} terms={KEY_TERMS} />

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
      <CrapsQuiz />

      {/* ─── CTA Footer ─── */}
      <section style={{
        padding: isMobile ? '60px 20px' : '80px 40px', textAlign: 'center',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,170,0.04) 100%)',
      }}>
        <h2 style={{ fontSize: isMobile ? 24 : 32, fontWeight: 700, color: colors.white, fontFamily: fonts.heading, margin: '0 0 12px' }}>
          Now you know the math.
        </h2>
        <p style={{ fontSize: 16, color: colors.neutral300, fontFamily: fonts.body, maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.6 }}>
          Pass line plus odds. The best deal in the casino. No fine print.
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
