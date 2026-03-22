import { useState } from 'react';

interface VerticalVariant {
  vertical: string;
  emoji: string;
  message: string;
}

interface SegmentAdaptation {
  id: string;
  segment: string;
  message: string;
  whyItWorks: string;
  color: string;
  borderColor: string;
  bgColor: string;
  badgeBg: string;
  badgeText: string;
  verticalVariants?: VerticalVariant[];
}

const ADAPTATIONS: SegmentAdaptation[] = [
  {
    id: 'new-novice',
    segment: 'New / Novice',
    message:
      "Every game has a house edge — that's the percentage the casino keeps over time. On blackjack it's 0.5%, on slots it can be 2-15%. Here's what that means for your budget.",
    whyItWorks:
      "Defines the term, gives examples, connects to a practical action. Assumes no prior knowledge.",
    color: 'text-teal-dark',
    borderColor: 'border-teal/30',
    bgColor: 'bg-teal/5',
    badgeBg: 'bg-teal/10',
    badgeText: 'text-teal-dark',
    verticalVariants: [
      {
        vertical: 'Casino',
        emoji: '🎰',
        message:
          "Every game has a house edge — it's how casinos stay in business. Blackjack: 0.5%. Slots: 2-15%. Roulette: 5.26%. Lower edge = your money lasts longer.",
      },
      {
        vertical: 'Sports',
        emoji: '⚽',
        message:
          "The 'house edge' in sports betting is called the vig. A -110 line means you bet $110 to win $100. That $10 difference? That's the sportsbook's cut on every bet.",
      },
      {
        vertical: 'Lottery',
        emoji: '🎟️',
        message:
          "The house edge on lottery is higher than any casino game — typically 40-50%. That means for every $1 you spend, about 50-60 cents goes to prizes. It's entertainment with long odds.",
      },
      {
        vertical: 'Poker',
        emoji: '♠️',
        message:
          "In poker, you're not playing against the house — you're playing against other players. The house takes a 'rake' — a small cut of each pot. Your edge comes from skill, but variance is real.",
      },
    ],
  },
  {
    id: 'recreational',
    segment: 'Recreational',
    message:
      "You know the house always has an edge. But do you know the difference between slots (2-15%) and blackjack (0.5%)? Pick the games that stretch your budget.",
    whyItWorks:
      "Acknowledges existing knowledge, adds comparison, frames as a smart choice. Doesn't re-explain the concept.",
    color: 'text-navy',
    borderColor: 'border-navy/30',
    bgColor: 'bg-navy/5',
    badgeBg: 'bg-navy/10',
    badgeText: 'text-navy',
    verticalVariants: [
      {
        vertical: 'Casino',
        emoji: '🎰',
        message:
          "Slots: 2-15% house edge. Blackjack with basic strategy: 0.5%. Video poker: 0.5-5%. Same budget, very different play time. Pick the math that works for you.",
      },
      {
        vertical: 'Sports',
        emoji: '⚽',
        message:
          "You know the vig. But are you tracking your actual ROI across bet types? Parlays carry 15-40% margins. Straight bets: ~4.5%. Your bankroll knows the difference.",
      },
      {
        vertical: 'Lottery',
        emoji: '🎟️',
        message:
          "You know the odds are long. But do you know that a $20/week lottery budget costs $1,040/year? Compare that to what a scratch ticket habit costs. Budget the entertainment.",
      },
      {
        vertical: 'Poker',
        emoji: '♠️',
        message:
          "You understand rake. But at a $1/$2 table, the rake takes 5-10% of every pot — are you beating that margin consistently? Track your sessions.",
      },
    ],
  },
  {
    id: 'enthusiast',
    segment: 'Enthusiast',
    message:
      "The theoretical house edge assumes optimal play. Most players don't play optimally. Here's how your actual edge differs from the published number — and what that means over 10,000 hands.",
    whyItWorks:
      "Adds depth beyond the basics. Respects their level. Offers something genuinely new to someone who already knows the concept.",
    color: 'text-info',
    borderColor: 'border-info/30',
    bgColor: 'bg-info/5',
    badgeBg: 'bg-info/10',
    badgeText: 'text-info',
    verticalVariants: [
      {
        vertical: 'Casino',
        emoji: '🎰',
        message:
          "Published RTP assumes perfect strategy over infinite hands. Track your actual return over 5,000+ hands — the gap between theoretical and realized edge is where most players leak value.",
      },
      {
        vertical: 'Sports',
        emoji: '⚽',
        message:
          "CLV (Closing Line Value) is a better predictor of long-term profit than win rate. If you're consistently beating the closing line, you're finding edge. If not, variance is flattering you.",
      },
      {
        vertical: 'Lottery',
        emoji: '🎟️',
        message:
          "EV-positive lottery situations exist — large rollovers where expected value exceeds ticket price. But the probability of capturing that value individually is still vanishingly small. The math is right; the application is wrong.",
      },
      {
        vertical: 'Poker',
        emoji: '♠️',
        message:
          "Your win rate is meaningless under 50,000 hands. Variance in NL Hold'em is so high that even a 10bb/100 winner can have 30,000-hand breakeven stretches. Are you rolled for the swings?",
      },
    ],
  },
  {
    id: 'at-risk',
    segment: 'At-Risk',
    message:
      "You've been playing longer than usual. Your session tools are here.",
    whyItWorks:
      "Don't lead with house edge education. Information isn't the issue — behavioral support is. Don't educate, facilitate.",
    color: 'text-orange',
    borderColor: 'border-orange/30',
    bgColor: 'bg-orange/5',
    badgeBg: 'bg-orange/10',
    badgeText: 'text-orange',
  },
];

export default function MessageAdapter() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const [activeVertical, setActiveVertical] = useState<string | null>(null);

  const adaptation = ADAPTATIONS.find((a) => a.id === activeSegment);

  const handleSegmentClick = (id: string) => {
    if (activeSegment === id) {
      setActiveSegment(null);
      setActiveVertical(null);
    } else {
      setActiveSegment(id);
      setActiveVertical(null);
    }
  };

  return (
    <div className="my-6 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      <div className="bg-navy px-4 py-3">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Interactive Exercise</span>
        <h3 className="text-white font-heading font-bold text-sm mt-0.5">Message Adapter</h3>
      </div>

      <div className="p-4">
        {/* Core message — compact inline */}
        <div className="flex items-center gap-3 rounded-lg border border-n100 bg-n50/50 px-3 py-2.5 mb-3">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-n400 flex-shrink-0">Core</span>
          <p className="font-heading font-semibold text-navy text-sm">"Every game has a house edge."</p>
        </div>

        {/* Segment selector — tighter */}
        <p className="text-sm font-heading font-semibold text-navy mb-1.5">Select a segment to see the adapted message:</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {ADAPTATIONS.map((a) => (
            <button
              key={a.id}
              onClick={() => handleSegmentClick(a.id)}
              className={`px-2.5 py-1.5 rounded-lg border-2 text-sm font-heading font-semibold transition-all ${
                activeSegment === a.id
                  ? `${a.borderColor} ${a.bgColor} ${a.color}`
                  : 'border-n200 bg-white text-n500 hover:border-n400'
              }`}
            >
              {a.segment}
            </button>
          ))}
        </div>

        {/* Adapted message — compressed */}
        {adaptation && (
          <div className={`rounded-lg border-2 ${adaptation.borderColor} ${adaptation.bgColor} p-3 mb-3`}>
            <div className="flex items-start gap-2">
              <span className={`inline-block text-xs font-heading font-bold uppercase tracking-wider ${adaptation.badgeText} ${adaptation.badgeBg} px-2 py-0.5 rounded flex-shrink-0 mt-0.5`}>
                {adaptation.segment}
              </span>
              <p className="text-sm font-semibold text-navy leading-snug">
                "{adaptation.message}"
              </p>
            </div>
            <p className="text-sm text-n500 mt-2 leading-snug">
              <span className="font-heading font-semibold text-n400">Why: </span>{adaptation.whyItWorks}
            </p>
          </div>
        )}

        {/* Vertical overlay */}
        {adaptation?.verticalVariants && (
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <p className="text-sm font-heading font-semibold text-navy">Add the vertical overlay:</p>
              <div className="flex flex-wrap gap-1.5">
                {adaptation.verticalVariants.map((v) => (
                  <button
                    key={v.vertical}
                    onClick={() => setActiveVertical(activeVertical === v.vertical ? null : v.vertical)}
                    className={`px-2.5 py-1 rounded-lg text-sm font-heading font-semibold transition-all ${
                      activeVertical === v.vertical
                        ? `${adaptation.bgColor} ${adaptation.color} ${adaptation.borderColor}`
                        : 'bg-white text-n500 border border-n200 hover:border-n400'
                    }`}
                  >
                    <span className="mr-1">{v.emoji}</span>{v.vertical}
                  </button>
                ))}
              </div>
            </div>

            {activeVertical && (() => {
              const variant = adaptation.verticalVariants!.find((v) => v.vertical === activeVertical);
              if (!variant) return null;
              return (
                <div className={`rounded-lg border-2 ${adaptation.borderColor} ${adaptation.bgColor} p-3`}>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className={`text-xs font-heading font-bold uppercase tracking-wider ${adaptation.badgeText} ${adaptation.badgeBg} px-1.5 py-0.5 rounded`}>
                      {adaptation.segment}
                    </span>
                    <span className="text-n300 text-xs">+</span>
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-navy bg-navy/10 px-1.5 py-0.5 rounded">
                      {variant.vertical}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-navy leading-snug">
                    "{variant.message}"
                  </p>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
