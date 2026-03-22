import { useState } from 'react';

interface VerticalData {
  id: string;
  name: string;
  emoji: string;
  coreKnowledge: string;
  misconceptions: string[];
  keyTools: string[];
  segments: {
    newNovice: string;
    recreational: string;
    enthusiast: string;
  };
}

const VERTICALS: VerticalData[] = [
  {
    id: 'sports',
    name: 'Sports',
    emoji: '⚽',
    coreKnowledge: 'Betting lines, vig/margin, parlays, live betting, bankroll',
    misconceptions: [
      '"I know the sport so I have an edge"',
      '"Parlays are just higher risk/reward"',
    ],
    keyTools: ['Budgeting tools', 'Odds education'],
    segments: {
      newNovice: 'Betting lines, parlays, vig — what the numbers mean and how the sportsbook makes money.',
      recreational: 'Bankroll planning, myth-busting — they know the basics, now help them play smarter.',
      enthusiast: 'Line movement, advanced stats — respect their depth, add new perspectives.',
    },
  },
  {
    id: 'casino',
    name: 'Casino',
    emoji: '🎰',
    coreKnowledge: 'House edge, RNG, game rules, variance, RTP',
    misconceptions: [
      '"Hot/cold machines"',
      '"Systems can beat the house"',
      '"Higher bets = better odds"',
    ],
    keyTools: ['Session management', 'Deposit controls'],
    segments: {
      newNovice: 'RNG, house edge, game rules — how the games actually decide outcomes.',
      recreational: 'Session tools, game comparisons — which games stretch their budget further.',
      enthusiast: 'Variance math, strategy depth — the math behind optimal play.',
    },
  },
  {
    id: 'lottery',
    name: 'Lottery',
    emoji: '🎟️',
    coreKnowledge: 'Jackpot probability, expected value, prize tiers, syndicates',
    misconceptions: [
      '"Numbers are due"',
      '"Buying more tickets meaningfully improves chances"',
    ],
    keyTools: ['Budget tools', 'Probability education'],
    segments: {
      newNovice: 'Odds, prize structure, expected value (EV) — what the numbers actually mean.',
      recreational: 'Budget framing, syndicates — making lottery entertainment sustainable.',
      enthusiast: 'EV analysis, number patterns — the deep math behind prize distributions.',
    },
  },
  {
    id: 'poker',
    name: 'Poker',
    emoji: '♠️',
    coreKnowledge: 'Skill vs. variance, pot odds, tilt management, bankroll',
    misconceptions: [
      '"I\'m skilled enough to always win"',
      '"Bad beats mean the site is rigged"',
    ],
    keyTools: ['Bankroll management', 'Session analysis'],
    segments: {
      newNovice: 'Hand rankings, position, pot odds — the fundamentals of the game.',
      recreational: 'Bankroll management, tilt — managing the mental and financial side.',
      enthusiast: 'ICM, range analysis, GTO — advanced strategic concepts for serious players.',
    },
  },
  {
    id: 'bingo',
    name: 'Bingo',
    emoji: '🔢',
    coreKnowledge: 'Odds per card, game variants, buy-in management, automation',
    misconceptions: [
      '"More cards always means more wins"',
      '"Patterns matter"',
    ],
    keyTools: ['Spend management', 'Session tools'],
    segments: {
      newNovice: 'Game variants, odds, buy-ins — how the different formats work.',
      recreational: 'Social features, session length — making bingo sessions enjoyable.',
      enthusiast: 'Pattern play, community — deeper engagement with the game.',
    },
  },
];

type ViewMode = 'segments' | 'content';

export default function VerticalExplorer() {
  const [activeVertical, setActiveVertical] = useState('sports');
  const [activeView, setActiveView] = useState<ViewMode>('segments');

  const vertical = VERTICALS.find((v) => v.id === activeVertical)!;

  return (
    <div className="my-8 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      <div className="bg-navy px-4 py-3">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Interactive Exercise</span>
        <h3 className="text-white font-heading font-bold text-sm mt-0.5">Vertical Explorer</h3>
      </div>

      <div className="p-4 sm:p-5">
        {/* Vertical tabs */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {VERTICALS.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveVertical(v.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-heading font-semibold transition-all ${
                activeVertical === v.id
                  ? 'bg-teal/10 text-teal-dark border border-teal/20'
                  : 'bg-white text-n500 border border-n200 hover:border-n400'
              }`}
            >
              <span className="mr-1">{v.emoji}</span> {v.name}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex gap-1 mb-4 p-1 bg-n50 rounded-lg w-fit">
          <button
            onClick={() => setActiveView('segments')}
            className={`px-3 py-1.5 rounded-md text-xs font-heading font-semibold transition-all ${
              activeView === 'segments' ? 'bg-white text-navy shadow-sm' : 'text-n500 hover:text-navy'
            }`}
          >
            Segment Overlay
          </button>
          <button
            onClick={() => setActiveView('content')}
            className={`px-3 py-1.5 rounded-md text-xs font-heading font-semibold transition-all ${
              activeView === 'content' ? 'bg-white text-navy shadow-sm' : 'text-n500 hover:text-navy'
            }`}
          >
            Content & Myths
          </button>
        </div>

        {activeView === 'segments' ? (
          <div>
            {/* Segment cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="rounded-xl border-2 border-teal/30 bg-teal/5 p-4">
                <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-teal-dark bg-teal/10 px-2 py-0.5 rounded mb-2">New / Novice</span>
                <p className="text-sm text-n700 leading-relaxed">{vertical.segments.newNovice}</p>
              </div>
              <div className="rounded-xl border-2 border-navy/30 bg-navy/5 p-4">
                <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-navy bg-navy/10 px-2 py-0.5 rounded mb-2">Recreational</span>
                <p className="text-sm text-n700 leading-relaxed">{vertical.segments.recreational}</p>
              </div>
              <div className="rounded-xl border-2 border-info/30 bg-info/5 p-4">
                <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-info bg-info/10 px-2 py-0.5 rounded mb-2">Enthusiast</span>
                <p className="text-sm text-n700 leading-relaxed">{vertical.segments.enthusiast}</p>
              </div>
            </div>

            {/* Note about support segments */}
            <div className="p-3 rounded-lg bg-orange/5 border border-orange/15">
              <p className="text-sm text-n600">
                <strong className="text-orange font-heading">At-Risk, In-Crisis, and Friends & Family</strong> are vertical-agnostic — the behavioral indicators and support responses are the same regardless of which product someone uses.
              </p>
            </div>
          </div>
        ) : (
          <div>
            {/* Flow layout: Knowledge → Misconceptions → Tools */}
            <div className="relative pl-6">
              {/* Vertical connecting line */}
              <div className="absolute left-2.5 top-4 bottom-4 w-px bg-n200" />

              {/* Core Knowledge */}
              <div className="relative mb-4">
                <div className="absolute -left-[1.125rem] top-3 w-3 h-3 rounded-full bg-teal border-2 border-white" />
                <div className="rounded-xl border-2 border-teal/30 bg-teal/5 p-4">
                  <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-teal-dark bg-teal/10 px-2 py-0.5 rounded mb-2">Core Knowledge</span>
                  <p className="text-sm text-n700 leading-relaxed">{vertical.coreKnowledge}</p>
                </div>
              </div>

              {/* Common Misconceptions */}
              <div className="relative mb-4">
                <div className="absolute -left-[1.125rem] top-3 w-3 h-3 rounded-full bg-orange border-2 border-white" />
                <div className="rounded-xl border-2 border-orange/30 bg-orange/5 p-4">
                  <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-orange bg-orange/10 px-2 py-0.5 rounded mb-2">Common Misconceptions</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {vertical.misconceptions.map((m, i) => (
                      <span key={i} className="inline-block px-3 py-1.5 rounded-lg bg-white border border-orange/20 text-sm text-n700">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Tools */}
              <div className="relative">
                <div className="absolute -left-[1.125rem] top-3 w-3 h-3 rounded-full bg-navy border-2 border-white" />
                <div className="rounded-xl border-2 border-navy/30 bg-navy/5 p-4">
                  <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-navy bg-navy/10 px-2 py-0.5 rounded mb-2">Key Tool Categories</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {vertical.keyTools.map((t, i) => (
                      <span key={i} className="inline-block px-3 py-1.5 rounded-lg bg-white border border-navy/20 text-sm font-semibold text-navy">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
