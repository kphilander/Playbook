'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { colors, fonts, radius } from '@/lib/brand-tokens';
import ScrollyChapter from '@/components/slots/ScrollyChapter';
import type { Slide } from '@/components/slots/ScrollyChapter';
import QuizSection from '@/components/slots/QuizSection';

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
    title: 'The Basics: RNG',
    body: 'Every modern slot machine runs on a random number generator. The RNG produces a random result the instant you hit spin. The spinning reels are just the show.',
    highlight: 'Outcome decided in < 1 millisecond',
  },
  {
    title: 'Playing a Spin',
    body: 'Set your bet (lines x bet per line), press spin. The RNG generates a number that maps to a specific symbol combination. Your total bet = lines times bet per line.',
  },
  {
    title: 'Reels Display the Result',
    body: 'The animation plays out, but the outcome was already decided before the reels started moving. If symbols on an active payline match a winning combo from the paytable, you get paid.',
    highlight: 'Reels are animation, not decision-making',
  },
  {
    title: 'Bonus Features',
    body: 'Free spins, bonus rounds, progressive jackpots \u2014 they all use the same RNG. Scatter symbols trigger bonuses regardless of payline position. Progressive jackpot odds: 1 in 1 million to 1 in 50 million.',
    highlight: 'Bonus = still RNG, still random',
  },
];

const BET_TYPES: Slide[] = [
  {
    title: 'Lines & Bet Per Line',
    body: 'You set how many paylines to activate and how much to bet per line. More lines mean more chances to match \u2014 but a higher total bet. Some machines fix all lines; others let you choose.',
    highlight: 'Total bet = lines \u00d7 bet per line',
  },
  {
    title: 'Max Bet & Denomination',
    body: 'Coin denomination sets the scale ($0.01, $0.25, $1.00). Max bet activates all lines at maximum bet per line \u2014 sometimes required for progressive jackpots. But bigger bets don\'t improve your odds. The house edge is a percentage.',
    highlight: 'Bigger bets = bigger swings, same edge',
  },
];

const THE_MATH: Slide[] = [
  {
    title: 'Return to Player (RTP)',
    body: 'Every slot has a programmed RTP \u2014 the percentage of all money wagered that the machine pays back over its lifetime. The house edge is what\'s left. Most online slots: 92\u201397% RTP. Casino floor: 85\u201395%.',
    highlight: 'RTP 85\u201398% \u2192 House edge 2\u201315%',
  },
  {
    title: 'The Range',
    body: 'Online slots tend toward higher RTPs (92\u201397%). Physical casino machines run 85\u201395%. Progressive jackpot machines often have lower base RTP because a slice goes to the jackpot pool.',
  },
  {
    title: 'What This Means for Your Wallet',
    body: 'A slot with 95% RTP has a 5% house edge. For every $100 you bet over time, you\'d lose about $5 on average. That\'s the long-run math \u2014 any single session can swing wildly in either direction.',
    highlight: '$100 wagered \u2192 ~$95 back, ~$5 to house',
  },
  {
    title: 'Volatility',
    body: 'RTP tells you the long-run average. Volatility tells you what the ride feels like. Low volatility: frequent small wins. High volatility: rare big wins, longer dry spells. Same math, different experience.',
  },
];

const TIPS: Slide[] = [
  {
    title: 'Check the Paytable',
    body: 'It takes 30 seconds. You\'ll see the RTP, payline structure, and what triggers bonuses. If a machine doesn\'t show its RTP, that\'s worth knowing too.',
    highlight: '30 seconds \u2192 full picture',
  },
  {
    title: 'Understand "Max Bet Required"',
    body: 'Some progressive jackpots only pay if you\'re betting the maximum. If you\'re not going to max bet, consider a non-progressive machine where every bet has the same proportional chance.',
  },
  {
    title: 'Pick Your Volatility, Not Your Theme',
    body: 'Two machines with cartoon themes can play completely differently. Low volatility stretches your session. High volatility creates bigger swings. Neither is better \u2014 they\'re different experiences.',
  },
  {
    title: 'Set Your Budget Before You Spin',
    body: 'Decide what you\'re willing to spend for the session and stick to it. Slots move fast \u2014 a $0.50 bet every 3 seconds adds up to $600 per hour.',
    highlight: '$0.50/spin \u00d7 3 sec = $600/hour',
  },
  {
    title: 'Every Spin Is Independent',
    body: 'What happened on the last spin \u2014 or the last 1,000 spins \u2014 has zero effect on the next one. The RNG doesn\'t keep score.',
  },
];

const MYTHS: Slide[] = [
  {
    title: 'Hot Streaks & "Due for a Win"',
    body: 'Streaks are noise, not signal. Machines don\'t keep score \u2014 the RNG has no memory. A machine that hasn\'t paid out in an hour has exactly the same odds on the next spin as one that just hit a jackpot.',
    highlight: 'The gambler\'s fallacy \u2014 the most common misconception in gambling',
  },
  {
    title: 'Lucky Machines & Near Misses',
    body: 'There\'s no such thing as a lucky machine \u2014 that\'s confirmation bias. And "almost winning" is still losing. Near misses are just another random outcome, not a sign you\'re close.',
    highlight: 'A loss is a loss, regardless of how close it looked',
  },
  {
    title: 'Time of Day & Bet Size',
    body: 'RTP doesn\'t change by time, day, or season \u2014 it\'s set in the software and regulated by gaming authorities. And betting more doesn\'t improve your odds. The house edge is a percentage that applies equally at any bet size.',
  },
];

/* ─── Key terms ─── */
const KEY_TERMS = [
  { term: 'RNG', def: 'Random number generator. Software that produces a random outcome every spin. Runs continuously.' },
  { term: 'RTP', def: 'Return to player. Percentage of total money wagered a machine pays back. 95% RTP = 5% house edge.' },
  { term: 'Payline', def: 'Line across reels where matching symbols count as a win. Modern slots: 1 to 1,000+ paylines.' },
  { term: 'Paytable', def: 'Chart showing every winning combination and its payout. Accessible via info button on the machine.' },
  { term: 'Scatter', def: 'Symbol that triggers bonuses regardless of position. Doesn\'t need to land on a payline.' },
  { term: 'Wild', def: 'Symbol that substitutes for others to complete winning combos. Like a joker in cards.' },
  { term: 'Volatility', def: 'How payouts are distributed. Low = frequent small wins. High = rare big wins. Also called variance.' },
  { term: 'Progressive', def: 'Prize pool that grows with every bet. Resets to base after someone wins.' },
  { term: 'Free Spins', def: 'Extra spins triggered by scatter symbols. No cost to you, but still determined by RNG.' },
  { term: 'Multiplier', def: 'Feature that multiplies your win (2x, 5x, 10x). Appears in base games and bonus rounds.' },
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

export default function SlotsPage() {
  const isMobile = useIsMobile();

  return (
    <div style={{ minHeight: '100vh', background: colors.primary, color: colors.white }}>
      {/* Custom keyframes — respects prefers-reduced-motion per brand spec */}
      <style>{`
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
        @keyframes heroFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
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

        {/* Section nav */}
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
        {/* Floating symbols */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {['7', '*', '~', '7', '*'].map((s, i) => (
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
          Slots
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 20, color: colors.neutral300,
          fontFamily: fonts.body, maxWidth: 560, margin: '0 auto 32px',
          lineHeight: 1.6,
        }}>
          Everything you need to know about slot machines &mdash; how they work, what the numbers mean, and why no strategy changes the math.
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
            Slots are pure chance. You press a button, a random number generator picks the outcome, and the reels display the result. There&rsquo;s no strategy that changes the math. The house edge ranges from <strong style={{ color: colors.secondary, fontFamily: fonts.mono }}>2%</strong> to <strong style={{ color: colors.accent, fontFamily: fonts.mono }}>15%</strong> depending on the machine. Check the paytable before you play &mdash; it takes 30 seconds and tells you everything the machine won&rsquo;t.
          </p>
        </div>
      </section>

      {/* ─── Scrollytelling Chapters ─── */}

      <ScrollyChapter
        id="how-it-works"
        label="Chapter 1"
        title="How the Game Works"
        slides={HOW_IT_WORKS}
      />

      {/* Divider */}
      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="bet-types"
        label="Chapter 2"
        title="Bet Types"
        slides={BET_TYPES}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="the-math"
        label="Chapter 3"
        title="The Math"
        slides={THE_MATH}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="tips"
        label="Chapter 4"
        title="Tips for Informed Play"
        slides={TIPS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="myths"
        label="Chapter 5"
        title="Common Myths"
        slides={MYTHS}
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
      <QuizSection />

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
          Here&rsquo;s how it actually works.
        </h2>
        <p style={{
          fontSize: 16, color: colors.neutral300, fontFamily: fonts.body,
          maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.6,
        }}>
          No fine print. Just facts. Now you know the math, the odds, and the house edge.
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
