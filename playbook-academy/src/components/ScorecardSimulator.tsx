import { useState } from 'react';

const TEAL = '#00D4AA';
const NAVY = '#1B2838';

interface PairScore {
  label: string;
  low: string;
  high: string;
  value: number;
  isCritical?: boolean;
}

const DEFAULT_PAIRS: PairScore[] = [
  { label: 'Forgettable — Memorable', low: 'Forgettable', high: 'Memorable', value: 5.0 },
  { label: 'Boring — Engaging', low: 'Boring', high: 'Engaging', value: 5.0 },
  { label: 'Preachy — Respectful', low: 'Preachy', high: 'Respectful', value: 5.0, isCritical: true },
  { label: 'Confusing — Clear', low: 'Confusing', high: 'Clear', value: 5.0 },
  { label: 'Generic — Made for me', low: 'Generic', high: 'Made for me', value: 5.0 },
];

function getScoreColor(value: number): string {
  if (value >= 5.5) return '#00D4AA';
  if (value >= 4.0) return '#FF9800';
  if (value >= 3.0) return '#FF5722';
  return '#D32F2F';
}

function getScoreLabel(value: number): string {
  if (value >= 5.5) return 'Strong';
  if (value >= 4.0) return 'Acceptable';
  if (value >= 3.0) return 'Investigate';
  return 'Red flag';
}

function getNpsColor(nps: number): string {
  if (nps >= 50) return '#00D4AA';
  if (nps >= 30) return '#00BFA5';
  if (nps >= 0) return '#FF9800';
  return '#D32F2F';
}

function getNpsLabel(nps: number): string {
  if (nps >= 50) return 'Exceptional';
  if (nps >= 30) return 'Strong';
  if (nps >= 0) return 'Improve';
  return 'Problem';
}

function SliderIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

export default function ScorecardSimulator() {
  const [nps, setNps] = useState(35);
  const [pairs, setPairs] = useState(DEFAULT_PAIRS);

  const updatePair = (index: number, value: number) => {
    setPairs(prev => prev.map((p, i) => i === index ? { ...p, value } : p));
  };

  // Decision logic
  const preachyScore = pairs[2].value;
  const anyBelow4 = pairs.some(p => p.value < 4.0);
  const allAbove4 = pairs.every(p => p.value >= 4.0);

  let decision: 'ship' | 'investigate' | 'revise';
  let decisionColor: string;
  let decisionTitle: string;
  let decisionDetail: string;

  if (nps < 0 || preachyScore < 3.0) {
    decision = 'revise';
    decisionColor = '#D32F2F';
    decisionTitle = 'Revise before shipping';
    decisionDetail = nps < 0
      ? `NPS ${nps} means more detractors than promoters. This material is actively turning players away. Revise against Module 3 voice principles and retest.`
      : `Preachy\u2013Respectful at ${preachyScore.toFixed(1)} triggers the Brand DNA alarm. The material is lecturing players \u2014 the single biggest failure mode. Revise voice and tone before shipping.`;
  } else if (nps >= 30 && allAbove4) {
    decision = 'ship';
    decisionColor = TEAL;
    decisionTitle = 'Ship it';
    decisionDetail = `NPS ${nps} (${getNpsLabel(nps)}) with all semantic pairs at 4.0+. This material meets the quality bar. Schedule the Recall survey in 7\u201314 days to confirm retention.`;
  } else {
    decision = 'investigate';
    decisionColor = '#FF9800';
    decisionTitle = 'Run the Full survey';
    const issues: string[] = [];
    if (nps < 30) issues.push(`NPS ${nps} is below the 30+ shipping threshold`);
    pairs.forEach(p => { if (p.value < 4.0) issues.push(`${p.label.split(' — ')[1]} at ${p.value.toFixed(1)} needs attention`); });
    decisionDetail = `${issues.join('. ')}. Run the Full survey with all five semantic pairs to diagnose which dimensions are dragging the score down.`;
  }

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white dark:bg-navy dark:border-navy-light shadow-sm overflow-hidden">
      <div className="bg-navy px-5 py-4">
        <div className="flex items-center gap-2 mb-1">
          <SliderIcon color={TEAL} />
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Interactive Exercise</span>
        </div>
        <h3 className="text-white font-heading font-bold text-lg">Scorecard Simulator</h3>
        <p className="text-n300 text-sm mt-1">Adjust the scores to see how the decision tree responds</p>
      </div>

      <div className="p-5 sm:p-6">
        {/* NPS slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-heading font-semibold text-navy dark:text-white">NPS Score</label>
            <span className="text-sm font-heading font-bold px-2 py-0.5 rounded" style={{ color: getNpsColor(nps), backgroundColor: getNpsColor(nps) + '15' }}>
              {nps > 0 ? '+' : ''}{nps} — {getNpsLabel(nps)}
            </span>
          </div>
          <input
            type="range"
            min={-50}
            max={80}
            step={1}
            value={nps}
            onChange={(e) => setNps(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{ background: `linear-gradient(to right, #D32F2F 0%, #FF9800 33%, ${TEAL} 60%, ${TEAL} 100%)` }}
          />
          <div className="flex justify-between text-xs text-n400 dark:text-n500 mt-1">
            <span>-50</span>
            <span>0</span>
            <span>30</span>
            <span>50</span>
            <span>80</span>
          </div>
        </div>

        {/* Semantic pair sliders */}
        <div className="space-y-4 mb-6">
          <p className="text-xs font-heading font-bold uppercase tracking-wider text-n500 dark:text-n400">Semantic Pairs (1–7)</p>
          {pairs.map((pair, i) => (
            <div key={pair.label} className={`rounded-lg p-3 border ${pair.isCritical && pair.value < 4.0 ? 'border-danger/40 bg-danger/5' : 'border-n100 dark:border-navy-light bg-n50 dark:bg-navy-dark'}`}>
              <div className="flex items-center justify-between mb-1.5">
                <label className={`text-xs font-heading font-semibold ${pair.isCritical ? 'text-navy dark:text-white' : 'text-n700 dark:text-n300'}`}>
                  {pair.label}
                  {pair.isCritical && <span className="ml-1.5 text-orange text-xs">(Brand DNA)</span>}
                </label>
                <span className="text-xs font-heading font-bold px-1.5 py-0.5 rounded" style={{ color: getScoreColor(pair.value), backgroundColor: getScoreColor(pair.value) + '15' }}>
                  {pair.value.toFixed(1)} — {getScoreLabel(pair.value)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-n400 dark:text-n500 w-16 text-right">{pair.low}</span>
                <input
                  type="range"
                  min={1}
                  max={7}
                  step={0.1}
                  value={pair.value}
                  onChange={(e) => updatePair(i, Number(e.target.value))}
                  className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #D32F2F, #FF9800, ${TEAL})` }}
                />
                <span className="text-xs text-n400 dark:text-n500 w-16">{pair.high}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Decision output */}
        <div className="rounded-lg border-2 p-5" style={{ borderColor: decisionColor + '50', backgroundColor: decisionColor + '08' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: decisionColor }}>
              {decision === 'ship' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>}
              {decision === 'investigate' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>}
              {decision === 'revise' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
            </div>
            <div>
              <p className="font-heading font-bold text-lg" style={{ color: decisionColor }}>{decisionTitle}</p>
            </div>
          </div>
          <p className="text-sm text-n700 dark:text-n300 leading-relaxed">{decisionDetail}</p>
        </div>

        <p className="text-xs text-n500 dark:text-n400 mt-4 italic">
          Try dragging Preachy–Respectful below 3.0 to see the Brand DNA alarm. Or set NPS above 30 with all pairs above 4.0 to see a ship decision.
        </p>
      </div>
    </div>
  );
}
