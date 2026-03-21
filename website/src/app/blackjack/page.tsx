'use client';

import Link from 'next/link';
import { colors, fonts, radius } from '@/lib/brand-tokens';
import useIsMobile from '@/lib/useIsMobile';
import ScrollyChapter from '@/components/shared/ScrollyChapter';
import type { Slide, TermDef } from '@/components/shared/ScrollyChapter';
import BlackjackVisuals from '@/components/blackjack/BlackjackVisuals';
import BlackjackQuiz from '@/components/blackjack/BlackjackQuiz';
import MobileNav from '@/components/shared/MobileNav';

/* ─── Chapter data ─── */

const HOW_IT_WORKS: Slide[] = [
  {
    title: 'Card Values',
    body: 'Number cards (2\u201310) are face value. Face cards (J, Q, K) are worth 10. An ace counts as 1 or 11 \u2014 whichever helps your hand more. A hand with an ace counted as 11 is called a "soft" hand (e.g., Ace + 6 = soft 17). You can\u2019t bust on the next card because the ace can switch to 1.',
    highlight: 'Ace = 1 or 11 | Face cards = 10',
  },
  {
    title: 'Playing a Hand',
    body: 'Place your bet. Get two cards face up. The dealer gets one face up (the upcard) and one face down (the hole card). If your first two cards total 21 \u2014 that\u2019s a blackjack. You win at 3:2 unless the dealer also has one (push). Otherwise, make your decisions, then the dealer plays by fixed rules.',
    highlight: 'Natural 21 = blackjack \u2192 pays 3:2',
  },
  {
    title: 'Your Decisions',
    body: 'Hit (take a card), Stand (keep your hand), Double Down (double your bet, one more card), Split (divide matching cards into two hands), or Surrender (forfeit half your bet). These choices genuinely affect the outcome \u2014 unlike most casino games, your decisions matter.',
    highlight: 'Your decisions genuinely affect the outcome',
  },
  {
    title: 'Dealer Rules',
    body: 'The dealer has no choices. Hit on 16 or below, always. Stand on 17 or above, always. No doubling, no splitting, no surrender. The dealer follows a fixed script. The dealer busts about 28% of the time \u2014 and that\u2019s built into the math you can exploit with basic strategy.',
    highlight: 'Dealer busts ~28% of the time',
  },
];

const BET_TYPES: Slide[] = [
  {
    title: 'The Base Bet',
    body: 'Your main wager on the hand. Pays 1:1 (even money). With basic strategy, the house edge is about 0.5% \u2014 the lowest of any table game. Without basic strategy, the edge climbs to 2% or more. That gap is the single biggest variable in blackjack.',
    highlight: '0.5% with strategy | 2%+ without',
  },
  {
    title: 'Blackjack & Side Bets',
    body: 'A natural blackjack pays 3:2 at standard tables (or 6:5 at some \u2014 avoid these). Insurance is a side bet that the dealer has blackjack; it pays 2:1 but carries a ~7.7% house edge. Other side bets (Perfect Pairs, 21+3) carry edges of 2\u201311%+. Basic strategy says: skip them all.',
    highlight: 'Insurance: ~7.7% house edge',
  },
  {
    title: '6:5 vs. 3:2',
    body: 'Some tables pay 6:5 on a natural blackjack instead of 3:2. On a $10 bet, that\u2019s $12 instead of $15. Three dollars less per blackjack. This single rule change increases the house edge by about 1.4%. Check the table sign before you sit down \u2014 it\u2019s the most important number in the room.',
    highlight: '$15 at 3:2 vs. $12 at 6:5 = $3 difference',
  },
];

const THE_MATH: Slide[] = [
  {
    title: 'House Edge Breakdown',
    body: 'With basic strategy and favorable rules (3:2, stand on soft 17, 6 decks), the house edge is about 0.5%. Standard rules push it to 0.6\u20130.8%. Without basic strategy, 2\u20132.5%. A 6:5 table with basic strategy is 1.5\u20132%. Learning basic strategy is the single most impactful thing you can do.',
    highlight: '0.5% \u2192 best odds in the casino',
  },
  {
    title: 'What It Means for Your Wallet',
    body: 'With basic strategy at a standard table, for every $100 you bet over time, you\u2019d lose about 50 cents on average. Without basic strategy, $2\u2013$2.50 per $100. The strategy takes about 20 minutes to learn. That\u2019s the best return on time investment in gambling.',
    highlight: '~50\u00A2 per $100 (strategy) vs ~$2.50 (none)',
  },
  {
    title: 'The Dealer\u2019s Weakness',
    body: 'The dealer must hit on 16 or below \u2014 no choice. This means the dealer busts about 28% of the time. Your advantage: you decide when to stop. Basic strategy exploits this asymmetry by telling you exactly when to stand (let the dealer bust) and when to hit (improve your hand).',
    highlight: 'Dealer busts 28% \u2014 your decisions exploit this',
  },
];

const BASIC_STRATEGY: Slide[] = [
  {
    title: 'What Is Basic Strategy?',
    body: 'Basic strategy is the mathematically optimal decision for every possible hand combination. It was figured out by running millions of simulated hands through computers. It\u2019s not a "system" or a "trick" \u2014 it\u2019s just the math. The strategy depends on your hand total and the dealer\u2019s upcard.',
    highlight: 'Not a trick. Just the math.',
  },
  {
    title: 'Hard Hands',
    body: '8 or less: always hit. 9\u201311: double against weak dealer (2\u20136), hit against strong (7\u2013A). 12\u201316: stand against weak dealer, hit against strong. 17+: always stand. The key insight: stand when the dealer is likely to bust, hit when the dealer is likely to make a hand.',
    highlight: 'Stand vs 2\u20136 (weak) | Hit vs 7\u2013A (strong)',
  },
  {
    title: 'Pairs',
    body: 'Always split Aces and 8s. Never split 10s or 5s. Split other pairs against weak dealer upcards (2\u20136), hit against strong ones (7+). Splitting aces gives you two chances at 21. Splitting 8s turns a bad 16 into two playable hands. Splitting 10s turns a great hand into two mediocre ones.',
    highlight: 'Always: A,A and 8,8 | Never: 10,10 and 5,5',
  },
  {
    title: 'The Bottom Line',
    body: 'Learn basic strategy. It takes about 20 minutes, cuts the house edge in half, and the charts are free everywhere. It\u2019s the single most impactful thing you can do at a blackjack table. No other casino game gives you this much control over the house edge through informed decisions.',
    highlight: '20 minutes to learn. Cuts edge in half.',
  },
];

const MYTHS: Slide[] = [
  {
    title: 'Betting Systems Beat the House',
    body: 'The Martingale system \u2014 double after every loss to "guarantee" a win \u2014 doesn\u2019t change the house edge. After 7 consecutive losses at $5, you\u2019re down $635 chasing a $5 profit. You\u2019ll hit the table limit or your budget long before the math rescues you. No betting pattern changes the underlying odds.',
    highlight: '7 losses: $5\u2192$10\u2192$20\u2192$40\u2192$80\u2192$160\u2192$320 = $635 lost',
  },
  {
    title: 'Other Players & Card Counting',
    body: 'The person next to you making a "bad" play doesn\u2019t affect your odds. Each hand plays against the dealer independently. And card counting? It\u2019s real but offers a tiny edge (0.5\u20131.5%), requires massive effort, and casinos use 6\u20138 decks plus frequent shuffles to neutralize it. Not the cheat code movies suggest.',
    highlight: 'Other players don\u2019t affect your math. Period.',
  },
];

/* ─── Key terms ─── */
const KEY_TERMS: TermDef[] = [
  { term: 'Blackjack', def: 'A hand totaling 21 with exactly two cards (ace + 10-value). Pays 3:2 at standard tables.' },
  { term: 'Bust', def: 'Going over 21. Automatic loss, regardless of dealer\u2019s hand.' },
  { term: 'Hit', def: 'Request an additional card.' },
  { term: 'Stand', def: 'Keep your current hand. No more cards.' },
  { term: 'Double Down', def: 'Double your bet and receive exactly one more card.' },
  { term: 'Split', def: 'Divide a pair into two separate hands, each with its own bet.' },
  { term: 'Push', def: 'A tie. Same total as the dealer. Bet returned.' },
  { term: 'Soft Hand', def: 'Hand with an ace counted as 11 (e.g., A-6 = soft 17). Can\u2019t bust on next hit.' },
  { term: 'Insurance', def: 'Side bet offered when dealer shows ace. Pays 2:1. House edge: ~7.7%. Skip it.' },
  { term: 'Surrender', def: 'Forfeit half your bet and fold. Available at some tables on first two cards.' },
];

/* ─── Nav sections ─── */
const NAV_SECTIONS = [
  { id: 'tldr', label: 'TL;DR' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'bet-types', label: 'Bets' },
  { id: 'the-math', label: 'Math' },
  { id: 'basic-strategy', label: 'Strategy' },
  { id: 'myths', label: 'Myths' },
  { id: 'key-terms', label: 'Terms' },
  { id: 'quiz', label: 'Quiz' },
];

export default function BlackjackPage() {
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
          {['\u2660', '\u2665', '\u2666', '\u2663', '\u2660'].map((s, i) => (
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
          Blackjack
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 20, color: colors.neutral300,
          fontFamily: fonts.body, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.6,
        }}>
          The rules, the decisions, and why basic strategy is the difference between the best odds in the casino and average ones.
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
            Blackjack is a card game where you try to get closer to <strong style={{ color: colors.secondary, fontFamily: fonts.mono }}>21</strong> than the dealer without going over. You make decisions &mdash; hit, stand, double, split &mdash; that genuinely affect the outcome. With basic strategy, the house edge drops to about <strong style={{ color: colors.secondary, fontFamily: fonts.mono }}>0.5%</strong>, making it the best odds in the casino. Without it, the edge climbs to <strong style={{ color: colors.accent, fontFamily: fonts.mono }}>2%</strong> or more.
          </p>
        </div>
      </section>

      {/* ─── Scrollytelling Chapters ─── */}

      <ScrollyChapter id="how-it-works" label="Chapter 1" title="How the Game Works" slides={HOW_IT_WORKS} VisualsComponent={BlackjackVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="bet-types" label="Chapter 2" title="Bet Types" slides={BET_TYPES} VisualsComponent={BlackjackVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="the-math" label="Chapter 3" title="The Math" slides={THE_MATH} VisualsComponent={BlackjackVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="basic-strategy" label="Chapter 4" title="Basic Strategy" slides={BASIC_STRATEGY} VisualsComponent={BlackjackVisuals} terms={KEY_TERMS} />
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter id="myths" label="Chapter 5" title="Common Myths" slides={MYTHS} VisualsComponent={BlackjackVisuals} terms={KEY_TERMS} />

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
      <BlackjackQuiz />

      {/* ─── CTA Footer ─── */}
      <section style={{
        padding: isMobile ? '60px 20px' : '80px 40px', textAlign: 'center',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,170,0.04) 100%)',
      }}>
        <h2 style={{ fontSize: isMobile ? 24 : 32, fontWeight: 700, color: colors.white, fontFamily: fonts.heading, margin: '0 0 12px' }}>
          Now you know the math.
        </h2>
        <p style={{ fontSize: 16, color: colors.neutral300, fontFamily: fonts.body, maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.6 }}>
          Basic strategy. 20 minutes. The best odds in the casino. No fine print.
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
        <span>Powered by Playbook (CC0)</span>
        <span>Free, confidential support 24/7: <strong style={{ color: colors.white }}>1-800-522-4700</strong></span>
      </footer>
    </div>
  );
}
