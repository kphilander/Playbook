'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { colors, fonts, radius } from '@/lib/brand-tokens';
import ScrollyChapter from '@/components/slots/ScrollyChapter';
import type { Slide } from '@/components/slots/ScrollyChapter';
import RouletteVisuals from '@/components/roulette/RouletteVisuals';
import RouletteQuiz from '@/components/roulette/RouletteQuiz';

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
    title: 'The Wheel',
    body: 'A roulette wheel has numbered pockets colored red, black, and green. European wheels have 37 pockets (1\u201336 plus a single 0). American wheels add a 00 for 38 total. That one extra pocket nearly doubles the house edge.',
    highlight: 'European: 37 pockets | American: 38 pockets',
  },
  {
    title: 'Place Your Bets',
    body: 'Before the spin, place chips on the table layout. Inside bets go on specific numbers or small groups. Outside bets cover larger groups like red/black, odd/even, or dozens. You can place multiple bets on a single spin.',
  },
  {
    title: 'The Spin',
    body: 'The dealer spins the wheel and launches the ball in the opposite direction. When the ball settles into a pocket, that\u2019s the result. Winning bets get paid; losing bets are cleared. Next round.',
    highlight: 'One pocket, one result, every spin',
  },
  {
    title: 'Every Spin Is Independent',
    body: 'The wheel has no memory. What happened on the last spin \u2014 or the last 100 spins \u2014 has zero effect on the next one. This is the single most important thing to understand about roulette.',
    highlight: 'No spin affects any other spin. Period.',
  },
];

const BET_TYPES: Slide[] = [
  {
    title: 'Inside Bets',
    body: 'Bets placed directly on numbers. Straight up (1 number, 35:1), Split (2 numbers, 17:1), Street (3 numbers, 11:1), Corner (4 numbers, 8:1), Six line (6 numbers, 5:1). Higher payouts, lower probability.',
    highlight: 'Higher risk, higher reward',
  },
  {
    title: 'Outside Bets',
    body: 'Bets on larger groups of numbers. Red/Black, Odd/Even, High/Low (1:1 payout, ~48.6% chance). Dozens and Columns (2:1 payout, ~32.4% chance). More frequent wins, smaller payouts.',
    highlight: 'Lower risk, more frequent wins',
  },
  {
    title: 'Same House Edge',
    body: 'Here\u2019s the key insight: on a European wheel, every bet has the same 2.70% house edge. The payouts are calibrated so no bet is mathematically \u201Cbetter\u201D than another. One exception: the 5-number bet on American tables has a 7.89% edge. Skip it.',
    highlight: 'Exception: 5-number bet = 7.89% edge',
  },
];

const THE_MATH: Slide[] = [
  {
    title: 'The Zero Is the Edge',
    body: 'Without the green zero, roulette would be a perfectly fair game. The zero(s) create the house edge \u2014 they\u2019re extra pockets that don\u2019t factor into the payout math. One zero = 2.70% edge. Two zeros = 5.26%.',
    highlight: '0 = 2.70% edge | 0 + 00 = 5.26% edge',
  },
  {
    title: 'The Gap',
    body: 'A straight-up bet on a European wheel has a 1-in-37 chance of winning (~2.70%). But the payout is 35:1 \u2014 as if there were only 36 pockets. That gap between real odds and payout odds is the house edge.',
  },
  {
    title: 'What This Means for Your Wallet',
    body: 'On a European wheel, for every $100 you wager over time, you\u2019d keep about $97.30 on average. On an American wheel, $94.74. Nearly double the cost \u2014 for one extra pocket.',
    highlight: 'EU: ~$2.70 per $100 | US: ~$5.26 per $100',
  },
  {
    title: 'French Rules: La Partage',
    body: 'Some European tables offer \u201Cla partage\u201D: if the ball lands on zero, you get half your even-money bet back. This cuts the house edge to 1.35% \u2014 the best odds in roulette. If you see it, use it.',
    highlight: 'La partage = 1.35% house edge',
  },
];

const TIPS: Slide[] = [
  {
    title: 'Check the Wheel Type',
    body: 'This is the only decision that actually changes the math. European (2.70%) is better than American (5.26%). If both are available, always pick European. It\u2019s that simple.',
    highlight: 'European > American, always',
  },
  {
    title: 'Look for La Partage',
    body: 'French tables with la partage cut the even-money house edge to 1.35%. If the table offers it, stick to even-money bets (red/black, odd/even, high/low) to get the best odds in roulette.',
  },
  {
    title: 'Ignore the Scoreboard',
    body: 'Casinos display recent results on electronic boards. They\u2019re decoration, not data. Every spin is independent \u2014 the board has zero predictive value. It\u2019s there to encourage you to see patterns that don\u2019t exist.',
    highlight: 'Decoration, not data',
  },
  {
    title: 'Skip the 5-Number Bet',
    body: 'On American roulette, the 5-number bet (0, 00, 1, 2, 3) has a 7.89% house edge \u2014 significantly worse than every other bet on the table. It\u2019s the single worst bet you can make.',
    highlight: '7.89% vs 5.26% \u2014 just skip it',
  },
  {
    title: 'Set Your Budget',
    body: 'Decide what you\u2019re willing to spend before you sit down. Table roulette runs 30\u201340 spins per hour; online can be 60\u201380. Your session is an entertainment budget, not an investment.',
    highlight: '30\u201340 spins/hour (table) | 60\u201380 (online)',
  },
];

const MYTHS: Slide[] = [
  {
    title: 'The Martingale System',
    body: 'Double after every loss to "guarantee" a win? The math doesn\u2019t work. After 7 consecutive losses at $5, you\u2019re down $635 chasing a $5 profit. You\u2019ll hit the table limit or your budget long before the math rescues you. The house edge doesn\u2019t change with bet sizing.',
    highlight: '7 losses: $5 \u2192 $10 \u2192 $20 \u2192 $40 \u2192 $80 \u2192 $160 \u2192 $320 = $635 lost',
  },
  {
    title: 'Lucky Numbers & "Due" Results',
    body: 'Every number has exactly the same probability: 1 in 37 (EU) or 1 in 38 (US). The ball doesn\u2019t know your birthday. And 8 blacks in a row? Next spin is still 48.6% red, 48.6% black, 2.7% green. Always.',
    highlight: 'The gambler\u2019s fallacy \u2014 the most common mistake in gambling',
  },
];

/* ─── Key terms ─── */
const KEY_TERMS = [
  { term: 'House Edge', def: 'The percentage of each bet the casino expects to keep over time. European: 2.70%. American: 5.26%.' },
  { term: 'Inside Bet', def: 'A bet placed directly on numbers or small groups. Higher payouts, lower win probability.' },
  { term: 'Outside Bet', def: 'A bet on large groups (red/black, odd/even, dozens). Lower payouts, higher win probability.' },
  { term: 'Straight Up', def: 'A bet on a single number. Pays 35:1. Probability: 2.70% (EU) or 2.63% (US).' },
  { term: 'La Partage', def: 'French rule: if zero hits, you get half your even-money bet back. Cuts edge to 1.35%.' },
  { term: 'En Prison', def: 'French rule: if zero hits, your even-money bet stays "imprisoned" for one more spin.' },
  { term: 'Gambler\'s Fallacy', def: 'The false belief that past results affect future spins. They don\'t. Every spin is independent.' },
  { term: '5-Number Bet', def: 'American-only bet on 0, 00, 1, 2, 3. House edge: 7.89%. The worst bet on the table.' },
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

export default function RoulettePage() {
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
          {['\u25C9', '\u2660', '\u2666', '\u25C9', '\u2663'].map((s, i) => (
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
          Roulette
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 20, color: colors.neutral300,
          fontFamily: fonts.body, maxWidth: 560, margin: '0 auto 32px',
          lineHeight: 1.6,
        }}>
          The wheel, the bets, the math, and why no strategy changes the odds. Everything you need to know before you play.
        </p>

        <div style={{
          display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center',
        }}>
          <span style={{ padding: '6px 14px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: 12, color: colors.neutral300, fontFamily: fonts.heading, fontWeight: 600 }}>
            Pillar: Open
          </span>
          <span style={{ padding: '6px 14px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: 12, color: colors.neutral300, fontFamily: fonts.heading, fontWeight: 600 }}>
            Grade 6-8 reading level
          </span>
          <span style={{ padding: '6px 14px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: 12, color: colors.neutral300, fontFamily: fonts.heading, fontWeight: 600 }}>
            5 min read
          </span>
        </div>
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
            Roulette is a game of pure chance. A ball drops into a numbered pocket &mdash; that&rsquo;s your result. Every bet on a European wheel has a <strong style={{ color: colors.secondary, fontFamily: fonts.mono }}>2.70%</strong> house edge. American wheels double that to <strong style={{ color: colors.accent, fontFamily: fonts.mono }}>5.26%</strong>. No strategy, system, or pattern changes these numbers. Pick the wheel with fewer zeros and set a budget before you sit down.
          </p>
        </div>
      </section>

      {/* ─── Scrollytelling Chapters ─── */}

      <ScrollyChapter
        id="how-it-works"
        label="Chapter 1"
        title="How the Game Works"
        slides={HOW_IT_WORKS}
        VisualsComponent={RouletteVisuals}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="bet-types"
        label="Chapter 2"
        title="Bet Types"
        slides={BET_TYPES}
        VisualsComponent={RouletteVisuals}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="the-math"
        label="Chapter 3"
        title="The Math"
        slides={THE_MATH}
        VisualsComponent={RouletteVisuals}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="tips"
        label="Chapter 4"
        title="Tips for Informed Play"
        slides={TIPS}
        VisualsComponent={RouletteVisuals}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="myths"
        label="Chapter 5"
        title="Common Myths"
        slides={MYTHS}
        VisualsComponent={RouletteVisuals}
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
      <RouletteQuiz />

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
          Now you know the math.
        </h2>
        <p style={{
          fontSize: 16, color: colors.neutral300, fontFamily: fonts.body,
          maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.6,
        }}>
          No fine print. Just facts. The wheel, the odds, and the house edge &mdash; all laid out.
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
