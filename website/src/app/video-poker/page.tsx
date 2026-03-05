'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { colors, fonts, radius } from '@/lib/brand-tokens';
import ScrollyChapter from '@/components/slots/ScrollyChapter';
import type { Slide, TermDef } from '@/components/slots/ScrollyChapter';
import VideoPokerVisuals from '@/components/video-poker/VideoPokerVisuals';
import VideoPokerQuiz from '@/components/video-poker/VideoPokerQuiz';

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
    title: '52-Card Deck',
    body: 'Video poker deals from a standard 52-card deck. The probabilities are the same as a physical deck of cards. Unlike slots, your decisions about which cards to hold change the math.',
    highlight: 'Your choices change the odds',
  },
  {
    title: 'The Deal',
    body: 'Insert credits, set your bet, press deal. The machine deals five cards from a randomly shuffled 52-card deck. Your total bet = credits \u00D7 coin denomination.',
    highlight: '5 cards from a shuffled deck',
  },
  {
    title: 'Hold and Draw',
    body: 'This is where the game lives. Choose which cards to keep and which to discard. Press draw. The machine replaces discards with new cards from the same deck. Your final five-card hand is the result.',
    highlight: 'The hold decision IS the game',
  },
  {
    title: 'Variants',
    body: 'Jacks or Better is the standard (99.54% RTP). Deuces Wild uses wild 2s (100.76% full-pay). Bonus Poker pays more for four-of-a-kind. Each variant has different optimal strategy and paytable.',
    highlight: 'Different variants = different strategy',
  },
];

const BET_TYPES: Slide[] = [
  {
    title: 'Credits Per Hand',
    body: 'You wager 1 to 5 credits per hand. Coin denomination sets the dollar value. At $0.25 per credit and 5 credits, that\u2019s $1.25 per hand.',
    highlight: 'Total bet = credits \u00D7 denomination',
  },
  {
    title: 'The Royal Flush Bonus',
    body: 'At 1 credit, a royal flush pays 250-for-1. At 5 credits, it jumps to 4,000 \u2014 not 1,250. That disproportionate bonus is a meaningful part of the RTP. If you play fewer than 5 credits, the effective house edge increases.',
    highlight: '1 credit: 250 | 5 credits: 4,000',
  },
];

const THE_MATH: Slide[] = [
  {
    title: 'The Paytable Is Everything',
    body: 'Two machines can look identical and have completely different math. On Jacks or Better, check the full house and flush payouts: 9/6 is full-pay (0.46% edge). 6/5 is short-pay (5% edge).',
    highlight: '9/6 = 0.46% edge | 6/5 = 5% edge',
  },
  {
    title: 'The Gap',
    body: 'A 9/6 machine keeps 46 cents per $100 wagered. A 6/5 machine keeps $5 per $100. More than 10 times worse \u2014 for a game that looks the same.',
    highlight: '10x difference from two numbers on the paytable',
  },
  {
    title: 'What This Means for Your Wallet',
    body: 'On a full-pay 9/6 machine with optimal strategy, for every $100 you bet over time, you\u2019d lose about 46 cents on average. Drop to 6/5 and that same $100 costs you $5.',
    highlight: '$0.46 vs $5.00 per $100',
  },
  {
    title: 'Volatility',
    body: 'The royal flush makes up a significant chunk of the RTP but hits once every ~40,000 hands. Short sessions are dominated by luck. Long-run math only shows up over thousands of hands.',
    highlight: '~40,000 hands between royals',
  },
];

const STRATEGY: Slide[] = [
  {
    title: 'Priority Order',
    body: 'Hold the best combination available: Royal/straight flush first, then four-to-a-royal, then made hands (full house, flush, straight), then three-of-a-kind, then draws, then pairs. Strategy charts rank every possible hold by expected value.',
    highlight: 'Best available \u2192 hold it',
  },
  {
    title: 'Never Hold a Kicker',
    body: 'Got a pair of queens and an ace? Hold the pair only. Discard the ace and two others. The kicker doesn\u2019t improve your expected value \u2014 it reduces your draw chances.',
    highlight: 'Hold the pair. Ditch the kicker.',
  },
  {
    title: 'Break the Flush for the Royal',
    body: 'Four cards to a royal flush inside a made flush? Break the flush. The expected value of the royal draw is higher than the guaranteed flush payout. It won\u2019t feel right \u2014 but it\u2019s what the numbers say.',
    highlight: 'Flush: 6x | Royal draw: 800x',
  },
];

const TIPS: Slide[] = [
  {
    title: 'Check the Paytable',
    body: 'Look at the full house and flush payouts. On Jacks or Better, 9/6 is full-pay. Anything less costs you \u2014 and the machine won\u2019t tell you.',
    highlight: '9/6 = best | 8/5 = worse | 6/5 = much worse',
  },
  {
    title: 'Play Max Credits',
    body: 'The royal flush bonus at 5 credits is a real part of the RTP. If $5 per hand is too much, find a lower denomination and play max there. A $0.25 machine at 5 credits = $1.25 per hand.',
    highlight: 'Lower denomination \u00D7 max credits',
  },
  {
    title: 'Use a Strategy Card',
    body: 'Strategy cards are available for every video poker variant. You can use them at the machine \u2014 nobody cares. Twenty minutes of study cuts the house edge significantly.',
    highlight: 'Legal. Effective. Free.',
  },
  {
    title: 'It\u2019s Not a Slot Machine',
    body: 'Every hold decision has a mathematically correct answer. Holding cards based on feeling instead of strategy is leaving money on the table. 32 possible hold combinations per hand \u2014 one is optimal.',
    highlight: '32 combos. 1 best answer.',
  },
  {
    title: 'Set Your Budget',
    body: 'Video poker plays at 200\u2013400 hands per hour. At $1.25/hand (5 \u00D7 $0.25), that\u2019s $250\u2013$500 in total wagers per hour. Know the pace before you start.',
    highlight: '200\u2013400 hands/hour',
  },
];

const MYTHS: Slide[] = [
  {
    title: 'Hot Streaks and Due Wins',
    body: 'Each hand is dealt from a freshly shuffled deck. The machine has no memory of past results. A cold streak doesn\u2019t make a win more likely. Every deal is independent.',
    highlight: 'Fresh shuffle every hand',
  },
  {
    title: 'Near Misses and Bet Size',
    body: 'Almost making a hand is still losing. And betting more doesn\u2019t improve your odds \u2014 the house edge is a percentage. Exception: max bet unlocks the royal flush bonus, which does affect the RTP.',
    highlight: 'Edge is a percentage. Royal bonus is the exception.',
  },
];

/* ─── Key terms ─── */
const KEY_TERMS = [
  { term: 'RTP', def: 'Return to Player. Percentage of all money wagered that a machine pays back over its lifetime. 99.54% RTP = 0.46% house edge.' },
  { term: 'Paytable', def: 'Chart showing payouts for each winning hand. Different machines have different paytables \u2014 and different RTPs.' },
  { term: 'Full-Pay', def: 'Best available paytable for a variant. For Jacks or Better: 9/6 (9-for-1 full house, 6-for-1 flush).' },
  { term: 'Short-Pay', def: 'Any paytable below full-pay. Same game name, worse math.' },
  { term: 'Hold / Draw', def: 'Keep selected cards (hold) and replace the rest (draw). Your only decision point.' },
  { term: 'Royal Flush', def: 'A-K-Q-J-10 suited. Pays 800-for-1 at max bet. Hits ~once per 40,000 hands.' },
  { term: 'Wild Card', def: 'A card that substitutes for any other. In Deuces Wild, all 2s are wild.' },
  { term: 'Expected Value', def: 'Mathematical average outcome of a decision over infinite repetitions.' },
  { term: 'Kicker', def: 'An unpaired high card held alongside a pair. Never hold a kicker.' },
  { term: 'Variance', def: 'How much results swing in the short term. Video poker is moderate-to-high variance.' },
  { term: 'Strategy Card', def: 'Chart showing optimal hold for every hand. Legal to use at the machine.' },
];

/* ─── Nav sections ─── */
const NAV_SECTIONS = [
  { id: 'tldr', label: 'TL;DR' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'bet-types', label: 'Bets' },
  { id: 'the-math', label: 'Math' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'tips', label: 'Tips' },
  { id: 'myths', label: 'Myths' },
  { id: 'key-terms', label: 'Terms' },
  { id: 'quiz', label: 'Quiz' },
];

export default function VideoPokerPage() {
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
          Video Poker
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 20, color: colors.neutral300,
          fontFamily: fonts.body, maxWidth: 560, margin: '0 auto 32px',
          lineHeight: 1.6,
        }}>
          The game where your choices change the math. Five cards, your decisions, and why the paytable is everything.
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
            7 min read
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
            Video poker is one of the few casino games where your decisions change the odds. You&rsquo;re dealt five cards, you choose which to keep, and the machine draws replacements. With optimal strategy on a full-pay Jacks or Better machine, the house edge drops to about <strong style={{ color: colors.secondary, fontFamily: fonts.mono }}>0.46%</strong> &mdash; one of the lowest in the casino. The catch: the paytable varies machine to machine, and a worse paytable means a worse edge.
          </p>
        </div>
      </section>

      {/* ─── Scrollytelling Chapters ─── */}

      <ScrollyChapter
        id="how-it-works"
        label="Chapter 1"
        title="How the Game Works"
        slides={HOW_IT_WORKS}
        VisualsComponent={VideoPokerVisuals}
        terms={KEY_TERMS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="bet-types"
        label="Chapter 2"
        title="Bet Types"
        slides={BET_TYPES}
        VisualsComponent={VideoPokerVisuals}
        terms={KEY_TERMS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="the-math"
        label="Chapter 3"
        title="The Math"
        slides={THE_MATH}
        VisualsComponent={VideoPokerVisuals}
        terms={KEY_TERMS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="strategy"
        label="Chapter 4"
        title="Strategy"
        slides={STRATEGY}
        VisualsComponent={VideoPokerVisuals}
        terms={KEY_TERMS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="tips"
        label="Chapter 5"
        title="Tips for Informed Play"
        slides={TIPS}
        VisualsComponent={VideoPokerVisuals}
        terms={KEY_TERMS}
      />

      <div style={{ maxWidth: 120, margin: '0 auto', height: 1, background: `linear-gradient(90deg, transparent, ${colors.primaryLight}, transparent)` }} />

      <ScrollyChapter
        id="myths"
        label="Chapter 6"
        title="Common Myths"
        slides={MYTHS}
        VisualsComponent={VideoPokerVisuals}
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
      <VideoPokerQuiz />

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
          The paytable, the strategy, and the house edge &mdash; all laid out. No fine print.
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
