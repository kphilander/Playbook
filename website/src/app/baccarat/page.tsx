'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { colors, fonts, radius } from '@/lib/brand-tokens';
import ScrollyChapter from '@/components/slots/ScrollyChapter';
import type { Slide, TermDef } from '@/components/slots/ScrollyChapter';
import BaccaratVisuals from '@/components/baccarat/BaccaratVisuals';
import BaccaratQuiz from '@/components/baccarat/BaccaratQuiz';

const MOBILE_BP = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BP);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

/* ─── Chapter data ─── */

const HOW_IT_WORKS: Slide[] = [
  {
    title: 'Card Values',
    body: 'Cards 2\u20139 are face value. 10, J, Q, K are worth 0. Ace is 1. Only the last digit counts: 7 + 8 = 15, counts as 5. The best possible hand is 9.',
    highlight: 'Only the last digit matters',
  },
  {
    title: 'Playing a Round',
    body: 'Place your bet on Banker, Player, or Tie. That\u2019s it \u2014 your only decision. Two hands are dealt. The hand closest to 9 wins. \u2018Player\u2019 and \u2018Banker\u2019 are table positions, not real people.',
    highlight: 'One decision. That\u2019s the game.',
  },
  {
    title: 'Naturals',
    body: 'If either hand totals 8 or 9 on the first two cards, it\u2019s a natural. The round ends immediately. No third card. Naturals always win unless both hands tie.',
    highlight: '8 or 9 = instant result',
  },
  {
    title: 'Third Card Rules',
    body: 'If no natural, fixed rules determine whether each hand draws a third card. The dealer handles this automatically. You don\u2019t decide. The Banker rules are complex precisely because they give Banker a slight statistical edge.',
    highlight: 'Automatic. No player decisions.',
  },
];

const BET_TYPES: Slide[] = [
  {
    title: 'Three Main Bets',
    body: 'Banker (1.06% house edge after 5% commission), Player (1.24% edge, no commission), Tie (14.4% edge, pays 8:1). Your bet choice is the only decision that matters.',
    highlight: 'Banker: 1.06% | Player: 1.24% | Tie: 14.4%',
  },
  {
    title: 'The Commission',
    body: 'Banker wins more often \u2014 50.68% of decided hands \u2014 because the third-card rules favor it. The 5% commission on wins compensates. Even after commission, Banker at 1.06% beats Player at 1.24%.',
    highlight: '50.68% win rate \u2192 commission \u2192 still best bet',
  },
  {
    title: 'Side Bets',
    body: 'Banker Pair, Player Pair, Either Pair, and others carry house edges of 10\u201315%. The main game\u2019s excellent odds don\u2019t extend to side bets.',
    highlight: 'Side bets: 10\u201315% edge',
  },
];

const THE_MATH: Slide[] = [
  {
    title: 'House Edge by Bet',
    body: 'Banker: 1.06%. Player: 1.24%. Tie: 14.4%. The gap between Banker/Player and Tie is massive \u2014 more than 13 times worse for the same table.',
    highlight: 'Tie = 13x worse than Banker',
  },
  {
    title: 'What This Means for Your Wallet',
    body: 'On Banker bets: lose about $1.06 per $100 over time. On Player bets: $1.24. On Tie bets: $14.40. Same table, dramatically different math.',
    highlight: '$1.06 vs $14.40 per $100',
  },
  {
    title: 'Ties and Your Main Bet',
    body: 'When a Tie occurs and you bet Banker or Player, your bet is returned (push). You don\u2019t lose your main bet on a tie. The house edge figures already account for this.',
    highlight: 'Tie = push on main bets',
  },
];

const TIPS: Slide[] = [
  {
    title: 'Banker Has the Best Odds',
    body: 'At 1.06%, it\u2019s one of the lowest house edges in the casino. The 5% commission is already built into that number. After commission, Banker is still the best bet in baccarat.',
    highlight: '1.06% \u2014 one of the best in the casino',
  },
  {
    title: 'Skip the Tie Bet',
    body: 'The 8:1 payout looks attractive. The 14.4% house edge isn\u2019t. You\u2019d need ties to hit about 11.1% of the time to break even. They hit about 9.5%.',
    highlight: 'Need 11.1% to break even. Get 9.5%.',
  },
  {
    title: 'Scorecards Are Entertainment',
    body: 'Baccarat tables provide paper scorecards and electronic displays. Many players study them for patterns. Each hand is dealt independently. Track if you enjoy it, but it\u2019s entertainment, not prediction.',
    highlight: 'History \u2260 prediction',
  },
  {
    title: 'Side Bets Cost More',
    body: 'Pair bets and other side bets run 10\u201315% edge or more. The main game\u2019s excellent odds don\u2019t extend to them. Check the house edge before placing side bets.',
    highlight: 'Main bets: ~1% | Side bets: 10\u201315%',
  },
  {
    title: 'Set Your Session Budget',
    body: 'Baccarat runs about 40\u201380 hands per hour at a full table, faster at mini baccarat. At $25/hand, that\u2019s $1,000\u2013$2,000 per hour in total wagers.',
    highlight: '40\u201380 hands/hour',
  },
];

const MYTHS: Slide[] = [
  {
    title: 'Patterns and Systems',
    body: 'Scorecards don\u2019t predict future hands. Martingale, Fibonacci, and other systems don\u2019t change the house edge. Each hand is an independent event dealt from a shuffled shoe.',
    highlight: 'Each hand is independent. Period.',
  },
  {
    title: 'Banker \u2018Always\u2019 Wins',
    body: 'Banker wins 50.68% of decided hands \u2014 slightly more often, not always. And no-commission tables compensate with modified payouts. Always check the actual house edge.',
    highlight: '50.68% is not \u2018always\u2019',
  },
];

/* ─── Key terms ─── */
const KEY_TERMS = [
  { term: 'Natural', def: 'A hand totaling 8 or 9 on the first two cards. Round ends immediately.' },
  { term: 'Banker / Player', def: 'Names of the two hands dealt. Table positions, not real people.' },
  { term: 'Commission', def: 'The 5% fee on winning Banker bets. Exists because Banker wins more often.' },
  { term: 'Punto Banco', def: 'The standard casino version. Fully automatic dealing rules.' },
  { term: 'Third Card Rule', def: 'Fixed rules for whether hands draw a third card. Handled by dealer.' },
  { term: 'Tie', def: 'When both hands match. Main bets are returned. Tie bets pay 8:1 or 9:1.' },
  { term: 'Shoe', def: 'Dealing device holding 6 or 8 decks.' },
  { term: 'Scorecard', def: 'Paper card for tracking results. Shows history, not predictions.' },
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

export default function BaccaratPage() {
  const isMobile = useIsMobile();

  return (
    <div style={{ minHeight: '100vh', background: colors.primary, color: colors.white }}>
      {/* Custom keyframes */}
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
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  padding: '6px 12px', borderRadius: 6,
                  fontSize: 12, fontWeight: 600, color: colors.neutral300,
                  textDecoration: 'none', fontFamily: fonts.heading,
                  transition: 'color 0.15s ease',
                }}
              >
                {s.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ─── Hero ─── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: isMobile ? '80px 20px 60px' : '120px 40px 80px',
        textAlign: 'center',
        background: `radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.08) 0%, transparent 60%)`,
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
          fontFamily: fonts.heading, margin: '0 0 16px',
          lineHeight: 1.1,
          background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.secondary} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Baccarat
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 20, color: colors.neutral300,
          fontFamily: fonts.body, maxWidth: 560, margin: '0 auto 32px',
          lineHeight: 1.6,
        }}>
          The simplest game on the floor &mdash; three bets, no decisions after the wager, and some of the best odds in the casino.
        </p>

      </section>

      {/* ─── TL;DR ─── */}
      <section id="tldr" style={{
        padding: isMobile ? '40px 20px' : '60px 40px',
        maxWidth: 720, margin: '0 auto',
      }}>
        <div style={{
          padding: isMobile ? '24px 20px' : '32px 36px',
          borderRadius: radius.lg,
          background: colors.primaryDark,
          borderLeft: `4px solid ${colors.secondary}`,
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
            Baccarat is pure chance with no player decisions after the bet. Pick Banker, Player, or Tie &mdash; the cards do the rest. The Banker bet has a <strong style={{ color: colors.secondary, fontFamily: fonts.mono }}>1.06%</strong> house edge after commission. The Tie bet? <strong style={{ color: colors.accent, fontFamily: fonts.mono }}>14.4%</strong>. The only decision that matters is which bet you place.
          </p>
        </div>
      </section>

      {/* ─── Scrollytelling Chapters ─── */}

      <ScrollyChapter
        id="how-it-works"
        label="Chapter 1"
        title="How the Game Works"
        slides={HOW_IT_WORKS}
        VisualsComponent={BaccaratVisuals}
        terms={KEY_TERMS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="bet-types"
        label="Chapter 2"
        title="Bet Types"
        slides={BET_TYPES}
        VisualsComponent={BaccaratVisuals}
        terms={KEY_TERMS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="the-math"
        label="Chapter 3"
        title="The Math"
        slides={THE_MATH}
        VisualsComponent={BaccaratVisuals}
        terms={KEY_TERMS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="tips"
        label="Chapter 4"
        title="Tips for Informed Play"
        slides={TIPS}
        VisualsComponent={BaccaratVisuals}
        terms={KEY_TERMS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="myths"
        label="Chapter 5"
        title="Common Myths"
        slides={MYTHS}
        VisualsComponent={BaccaratVisuals}
        terms={KEY_TERMS}
      />

      {/* ─── Key Terms ─── */}
      <section id="key-terms" style={{
        padding: isMobile ? '80px 20px' : '100px 40px',
        maxWidth: 800, margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: colors.secondary, textTransform: 'uppercase', fontFamily: fonts.heading, marginBottom: 8 }}>
            Reference
          </div>
          <h2 style={{ fontSize: isMobile ? 28 : 32, fontWeight: 700, color: colors.white, fontFamily: fonts.heading, margin: 0 }}>
            Key Terms
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: 12,
        }}>
          {KEY_TERMS.map(kt => (
            <div key={kt.term} style={{
              padding: '16px 20px', borderRadius: radius.md,
              background: colors.primaryDark,
              border: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{
                fontSize: 14, fontWeight: 700, color: colors.secondary,
                fontFamily: fonts.heading, marginBottom: 6,
              }}>
                {kt.term}
              </div>
              <div style={{
                fontSize: 13, color: colors.neutral300,
                fontFamily: fonts.body, lineHeight: 1.5,
              }}>
                {kt.def}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Quiz ─── */}
      <BaccaratQuiz />

      {/* ─── CTA Footer ─── */}
      <section style={{
        padding: isMobile ? '60px 20px' : '80px 40px',
        textAlign: 'center',
        background: `linear-gradient(180deg, transparent 0%, rgba(0,212,170,0.04) 100%)`,
      }}>
        <h2 style={{
          fontSize: isMobile ? 24 : 32, fontWeight: 700,
          color: colors.white, fontFamily: fonts.heading, margin: '0 0 12px',
        }}>
          The simplest game. Now you know the math.
        </h2>
        <p style={{
          fontSize: 16, color: colors.neutral300, fontFamily: fonts.body,
          maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.6,
        }}>
          Three bets, the house edge on each, and why the scorecard doesn&rsquo;t predict the next hand.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block', padding: '14px 32px',
            borderRadius: radius.md,
            background: `linear-gradient(135deg, ${colors.secondary}, ${colors.secondaryDark})`,
            color: colors.primary, fontSize: 15, fontWeight: 700,
            fontFamily: fonts.heading, textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: `0 4px 16px rgba(0,212,170,0.2)`,
          }}
        >
          Explore More Games
        </Link>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        padding: isMobile ? '16px 20px' : '20px 32px',
        borderTop: `1px solid ${colors.primaryLight}`,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? 6 : 0,
        fontSize: 12, color: colors.neutral500,
      }}>
        <span>Playbook &mdash; Open-source gambling entertainment literacy</span>
        <span>Free, confidential support 24/7: <strong style={{ color: colors.white }}>1-800-522-4700</strong></span>
      </footer>
    </div>
  );
}
