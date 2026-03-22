import { useState, useEffect } from 'react';

interface Segment {
  id: number;
  name: string;
  rank: number; // 1 = largest, 6 = smallest
  relativeWidth: number; // proportional bar width (no percentages)
  description: string;
  explanation: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

// Correct order: largest → smallest
const SEGMENTS: Segment[] = [
  {
    id: 1,
    name: 'Recreational',
    rank: 1,
    relativeWidth: 100,
    description: 'Play within their means, moderate knowledge, steady patterns.',
    explanation: 'The majority of any player base. They understand the basics, manage their play, and engage without red flags. Most of your Tier 1 content is for them.',
    color: 'text-navy',
    bgColor: 'bg-navy/10',
    borderColor: 'border-navy/30',
  },
  {
    id: 2,
    name: 'New / Novice',
    rank: 2,
    relativeWidth: 70,
    description: 'First-time or new-to-product players shaping early habits.',
    explanation: 'A significant portion of players is encountering your product for the first time. These are the players whose habits you can shape — foundational education matters most here.',
    color: 'text-teal-dark',
    bgColor: 'bg-teal/10',
    borderColor: 'border-teal/30',
  },
  {
    id: 3,
    name: 'Enthusiast',
    rank: 3,
    relativeWidth: 55,
    description: 'High-knowledge power users who seek depth and advanced content.',
    explanation: 'They already know the basics. Generic education bores them. They need advanced content, new perspectives, and respect for their expertise.',
    color: 'text-info',
    bgColor: 'bg-info/10',
    borderColor: 'border-info/30',
  },
  {
    id: 4,
    name: 'At-Risk',
    rank: 4,
    relativeWidth: 35,
    description: 'Showing early behavioral warning signs — escalating patterns.',
    explanation: 'A small but critical group. They don\'t need more education — they need non-judgmental tool visibility and accessible support. Content shifts from Tier 1 to Tier 2.',
    color: 'text-orange',
    bgColor: 'bg-orange/10',
    borderColor: 'border-orange/30',
  },
  {
    id: 5,
    name: 'Friends & Family',
    rank: 5,
    relativeWidth: 25,
    description: 'Concerned others who arrive via different channels.',
    explanation: 'Not players themselves. They arrive by searching "how to help someone who gambles too much." They need a completely separate entry point — validation, conversation starters, and support resources.',
    color: 'text-success',
    bgColor: 'bg-success/10',
    borderColor: 'border-success/30',
  },
  {
    id: 6,
    name: 'In-Crisis',
    rank: 6,
    relativeWidth: 12,
    description: 'Active help-seekers — Tier 2 infrastructure, not content.',
    explanation: 'The smallest segment by volume, but the highest urgency. They need immediate, frictionless access to support. Zero barriers, zero cleverness. Speed and clarity are everything.',
    color: 'text-danger',
    bgColor: 'bg-danger/10',
    borderColor: 'border-danger/30',
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function SegmentRevealQuiz() {
  const [placed, setPlaced] = useState<Segment[]>([]);
  const [remaining, setRemaining] = useState<Segment[]>([]);
  const [score, setScore] = useState(0);
  const [wrongId, setWrongId] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<Segment | null>(null);

  // Initialize with shuffled segments
  useEffect(() => {
    setRemaining(shuffleArray(SEGMENTS));
  }, []);

  const isComplete = placed.length === SEGMENTS.length;
  const nextRank = placed.length + 1;

  const handlePick = (segment: Segment) => {
    if (segment.rank === nextRank) {
      // Correct
      setPlaced([...placed, segment]);
      setRemaining(remaining.filter((s) => s.id !== segment.id));
      setScore((s) => s + 1);
      setShowExplanation(segment);
      setWrongId(null);
    } else {
      // Wrong — flash the button
      setWrongId(segment.id);
      setTimeout(() => setWrongId(null), 600);
    }
  };

  const handleContinue = () => {
    setShowExplanation(null);
  };

  const handleReset = () => {
    setPlaced([]);
    setRemaining(shuffleArray(SEGMENTS));
    setScore(0);
    setWrongId(null);
    setShowExplanation(null);
  };

  // Completion view
  if (isComplete && !showExplanation) {
    return (
      <div className="my-8 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
        <div className="bg-navy px-4 py-3">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Interactive Exercise</span>
          <h3 className="text-white font-heading font-bold text-sm mt-0.5">Segment Distribution — Rank Order</h3>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="font-heading font-bold text-navy">
              {score === SEGMENTS.length ? 'Perfect — all 6 in the right order!' : `${score} of ${SEGMENTS.length} correct on first try.`}
            </p>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 text-sm font-heading font-semibold text-teal-dark border border-teal/20 rounded-lg hover:bg-teal/5 transition-colors"
            >
              Play again
            </button>
          </div>
          <div className="space-y-2">
            {SEGMENTS.map((seg) => (
              <div key={seg.id} className="flex items-center gap-3">
                <span className={`text-sm font-heading font-semibold w-28 flex-shrink-0 ${seg.color}`}>{seg.name}</span>
                <div className="flex-1 h-7 bg-n50 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full rounded-full ${seg.bgColor} border ${seg.borderColor} transition-all duration-700`}
                    style={{ width: `${seg.relativeWidth}%`, minWidth: '2.5rem' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-n400 mt-4 italic">Illustrative — actual distributions vary by market and product vertical.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      <div className="bg-navy px-4 py-3 flex items-center justify-between">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Interactive Exercise</span>
          <h3 className="text-white font-heading font-bold text-sm mt-0.5">Segment Distribution — Rank Order</h3>
        </div>
        <div className="flex gap-1.5">
          {SEGMENTS.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < placed.length ? 'bg-success' : i === placed.length ? 'bg-teal' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        {/* Placed segments (locked in) */}
        {placed.length > 0 && (
          <div className="space-y-2 mb-4">
            {placed.map((seg, i) => (
              <div key={seg.id} className="flex items-center gap-3">
                <span className="text-xs font-heading font-bold text-n400 w-5 text-right">{i + 1}.</span>
                <span className={`text-sm font-heading font-semibold w-28 flex-shrink-0 ${seg.color}`}>{seg.name}</span>
                <div className="flex-1 h-7 bg-n50 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${seg.bgColor} border ${seg.borderColor} transition-all duration-500`}
                    style={{ width: `${seg.relativeWidth}%`, minWidth: '2.5rem' }}
                  />
                </div>
                <span className="text-success text-sm">✓</span>
              </div>
            ))}
          </div>
        )}

        {/* Show explanation after correct pick */}
        {showExplanation && (
          <div className={`rounded-xl border-2 ${showExplanation.borderColor} ${showExplanation.bgColor} p-4 mb-4`}>
            <p className={`font-heading font-bold ${showExplanation.color} mb-1`}>{showExplanation.name}</p>
            <p className="text-sm text-n700 leading-relaxed">{showExplanation.explanation}</p>
            <div className="flex justify-end mt-3">
              <button
                onClick={handleContinue}
                className="px-4 py-2 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors text-sm"
              >
                {placed.length < SEGMENTS.length ? 'Continue' : 'See results'}
              </button>
            </div>
          </div>
        )}

        {/* Remaining choices */}
        {!showExplanation && !isComplete && (
          <div>
            <p className="text-sm text-n500 mb-3">
              {placed.length === 0
                ? 'Click the segments in order from LARGEST to SMALLEST:'
                : `Which segment is #${nextRank} in size?`}
            </p>
            <div className="flex flex-wrap gap-2">
              {remaining.map((seg) => (
                <button
                  key={seg.id}
                  onClick={() => handlePick(seg)}
                  className={`px-4 py-2.5 rounded-lg border-2 text-sm font-heading font-semibold transition-all ${
                    wrongId === seg.id
                      ? 'border-danger bg-danger/5 text-danger animate-[shake_0.4s_ease-in-out]'
                      : `border-n200 bg-white text-navy hover:border-teal hover:bg-teal/5`
                  }`}
                >
                  {seg.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }
      `}</style>
    </div>
  );
}
