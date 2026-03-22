import { useState } from 'react';

interface Criterion {
  id: number;
  label: string;
  expertScore: number;
  explanation: string;
}

const CRITERIA: Criterion[] = [
  {
    id: 1,
    label: 'Content accuracy',
    expertScore: 3,
    explanation: 'Messages are on-brand but missing 2 touchpoints. 4 out of 6 mobile touchpoints is a solid start, but the gaps (no deposit confirmation email, incomplete coverage) mean some players miss key messages.',
  },
  {
    id: 2,
    label: 'Accessibility',
    expertScore: 2,
    explanation: 'Helpline in footer only is a fail. Must be every screen. A player in crisis shouldn\'t have to scroll to the bottom of the page to find support. This is a Tier 2 non-negotiable.',
  },
  {
    id: 3,
    label: 'Segment coverage',
    expertScore: 3,
    explanation: 'New/Novice served but Recreational engagement content is thin. The quiz is live (good) but ongoing engagement content — monthly summaries, content hub depth, social sharing — hasn\'t been fully built out.',
  },
  {
    id: 4,
    label: 'Tool integration',
    expertScore: 4,
    explanation: 'Good tool prompts in existing touchpoints. The 4 mobile touchpoints that are live do integrate tools well — deposit limits, session reminders, and activity dashboards are framed as features, not warnings.',
  },
  {
    id: 5,
    label: 'Campaign readiness',
    expertScore: 3,
    explanation: 'Quiz is live but 28% completion suggests a discoverability issue. The Game IQ quiz exists, but 28% completion is well below the 60-70% target. Likely buried in the content hub instead of prominently placed.',
  },
  {
    id: 6,
    label: 'Staff enablement',
    expertScore: 1,
    explanation: 'No training is a critical gap. Customer service staff who can\'t answer basic questions about the program undermine every other investment. This is a day-one requirement that was skipped.',
  },
];

const SCENARIO_DETAILS = [
  { label: 'Program name', value: '"Play Aware"', status: 'ok' },
  { label: 'Mobile touchpoints', value: '4 of 6 recommended', status: 'partial' },
  { label: 'Welcome email', value: 'Sends, but no deposit confirmation email', status: 'partial' },
  { label: 'Helpline placement', value: 'Footer only (not every screen)', status: 'bad' },
  { label: 'Content hub', value: 'Exists but linked from footer, not primary nav', status: 'partial' },
  { label: 'Game IQ Quiz', value: 'Live with 28% completion rate', status: 'partial' },
  { label: 'Staff training', value: 'Not conducted', status: 'bad' },
];

function getStarColor(filled: boolean) {
  return filled ? 'text-orange' : 'text-n200';
}

function getProximityLabel(diff: number) {
  if (diff === 0) return { text: 'Exact match', color: 'text-success' };
  if (diff === 1) return { text: 'Close', color: 'text-teal-dark' };
  if (diff === 2) return { text: 'Off by 2', color: 'text-warning' };
  return { text: `Off by ${diff}`, color: 'text-warning' };
}

export default function ReviewWalkthrough() {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [hoveredStar, setHoveredStar] = useState<{ criterion: number; star: number } | null>(null);
  const [revealed, setRevealed] = useState(false);

  const allRated = CRITERIA.every((c) => ratings[c.id] !== undefined);
  const ratedCount = Object.keys(ratings).length;

  const setRating = (criterionId: number, value: number) => {
    if (revealed) return;
    setRatings((prev) => ({ ...prev, [criterionId]: value }));
  };

  const handleReveal = () => {
    if (!allRated) return;
    setRevealed(true);
  };

  const handleReset = () => {
    setRatings({});
    setRevealed(false);
    setHoveredStar(null);
  };

  // Calculate proximity score
  const totalDifference = CRITERIA.reduce((sum, c) => {
    const studentRating = ratings[c.id] ?? 0;
    return sum + Math.abs(studentRating - c.expertScore);
  }, 0);
  const maxDifference = CRITERIA.length * 4; // max possible difference per criterion is 4
  const proximityPercent = Math.round(((maxDifference - totalDifference) / maxDifference) * 100);

  const getOverallFeedback = () => {
    if (proximityPercent >= 90) return 'Exceptional calibration. You see exactly what the expert sees — strengths, weaknesses, and critical gaps.';
    if (proximityPercent >= 75) return 'Strong assessment. Your ratings closely match the expert review. You have a solid eye for deployment quality.';
    if (proximityPercent >= 60) return 'Good foundation. Some ratings diverged from the expert assessment — review the explanations to calibrate your evaluation lens.';
    return 'Your assessment differed significantly from the expert. Study the explanations carefully — the gaps between your rating and the expert\'s reveal your blind spots.';
  };

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Exercise
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">Quarterly Review Walkthrough</h3>
      </div>

      <div className="p-5 sm:p-6">
        {/* Scenario */}
        <div className="bg-n50 rounded-lg p-5 mb-6 border border-n100">
          <h4 className="font-heading font-bold text-navy text-base mb-2">
            Scenario: BetBright Casino — 3 Months Post-Launch
          </h4>
          <p className="text-n700 text-sm mb-4 leading-relaxed">
            BetBright Casino launched Playbook 3 months ago. Review their deployment and rate each criterion 1-5 stars.
          </p>

          <div className="space-y-2">
            {SCENARIO_DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-start gap-2 text-sm">
                <span
                  className={`flex-shrink-0 w-2 h-2 mt-1.5 rounded-full ${
                    detail.status === 'ok'
                      ? 'bg-success'
                      : detail.status === 'partial'
                        ? 'bg-warning'
                        : 'bg-red-500'
                  }`}
                />
                <span>
                  <span className="font-semibold text-navy">{detail.label}:</span>{' '}
                  <span className="text-n700">{detail.value}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rating criteria */}
        <p className="font-heading font-semibold text-navy text-sm mb-4">
          Rate each criterion (1-5 stars):
          <span className="text-n500 font-normal ml-2">{ratedCount}/{CRITERIA.length} rated</span>
        </p>

        <div className="space-y-4 mb-6">
          {CRITERIA.map((criterion) => {
            const studentRating = ratings[criterion.id];
            const hovered = hoveredStar?.criterion === criterion.id ? hoveredStar.star : null;
            const diff = studentRating !== undefined ? Math.abs(studentRating - criterion.expertScore) : null;
            const proximity = diff !== null ? getProximityLabel(diff) : null;

            return (
              <div
                key={criterion.id}
                className={`rounded-lg border transition-all ${
                  revealed ? 'bg-white border-n200 p-4' : 'bg-white border-n100 p-4 hover:border-n200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-heading font-semibold text-navy">
                    {criterion.id}. {criterion.label}
                  </span>

                  {/* Star rating */}
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFilled = hovered !== null
                        ? star <= hovered
                        : studentRating !== undefined
                          ? star <= studentRating
                          : false;

                      return (
                        <button
                          key={star}
                          onClick={() => setRating(criterion.id, star)}
                          onMouseEnter={() => !revealed && setHoveredStar({ criterion: criterion.id, star })}
                          onMouseLeave={() => setHoveredStar(null)}
                          disabled={revealed}
                          className={`transition-transform ${revealed ? 'cursor-default' : 'cursor-pointer hover:scale-110'}`}
                          aria-label={`Rate ${criterion.label} ${star} out of 5`}
                        >
                          <svg
                            className={`w-6 h-6 transition-colors ${getStarColor(isFilled)}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Revealed expert assessment */}
                {revealed && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-2">
                      {/* Your rating */}
                      <span className="text-xs text-n500">
                        Your rating: <span className="font-bold text-navy">{studentRating}/5</span>
                      </span>

                      {/* Expert rating */}
                      <span className="text-xs text-n500">
                        Expert: <span className="font-bold text-teal-dark">{criterion.expertScore}/5</span>
                      </span>

                      {/* Proximity */}
                      {proximity && (
                        <span className={`text-xs font-heading font-semibold ${proximity.color}`}>
                          {proximity.text}
                        </span>
                      )}
                    </div>

                    {/* Expert explanation */}
                    <div className="bg-n50 rounded p-3 border border-n100">
                      <p className="text-sm text-n700 leading-relaxed">{criterion.explanation}</p>
                    </div>

                    {/* Visual comparison bar */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-n100 rounded-full overflow-hidden relative">
                        {/* Student rating marker */}
                        <div
                          className="absolute top-0 h-full bg-orange/60 rounded-full"
                          style={{ width: `${(studentRating! / 5) * 100}%` }}
                        />
                        {/* Expert rating marker line */}
                        <div
                          className="absolute top-0 h-full w-0.5 bg-teal-dark"
                          style={{ left: `${(criterion.expertScore / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-n400 w-16 text-right">
                        <span className="text-orange">You</span> / <span className="text-teal-dark">Expert</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit / Results */}
        {!revealed ? (
          <div className="flex items-center justify-between pt-4 border-t border-n100">
            <span className="text-xs text-n500">
              {allRated ? 'All criteria rated. Ready to compare.' : `Rate all ${CRITERIA.length} criteria to see the expert assessment.`}
            </span>
            <button
              onClick={handleReveal}
              disabled={!allRated}
              className="px-5 py-2.5 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Compare with expert
            </button>
          </div>
        ) : (
          <div className="pt-4 border-t border-n100 animate-fade-in">
            {/* Proximity score */}
            <div className="text-center mb-4">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-3 ${
                  proximityPercent >= 75 ? 'bg-success/10 text-success' : proximityPercent >= 60 ? 'bg-teal/10 text-teal-dark' : 'bg-warning/10 text-warning'
                }`}
              >
                <span className="text-2xl font-heading font-bold">{proximityPercent}%</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-navy mb-1">
                Calibration Score: {proximityPercent}%
              </h4>
              <p className="text-n700 text-sm leading-relaxed max-w-lg mx-auto mb-1">
                {getOverallFeedback()}
              </p>
              <p className="text-xs text-n500">
                Total deviation: {totalDifference} star{totalDifference !== 1 ? 's' : ''} across {CRITERIA.length} criteria
              </p>
            </div>

            {/* Summary table */}
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-n200">
                    <th className="text-left py-2 pr-4 font-heading text-n600 text-xs">Criterion</th>
                    <th className="text-center py-2 px-2 font-heading text-n600 text-xs">You</th>
                    <th className="text-center py-2 px-2 font-heading text-n600 text-xs">Expert</th>
                    <th className="text-center py-2 pl-2 font-heading text-n600 text-xs">Diff</th>
                  </tr>
                </thead>
                <tbody>
                  {CRITERIA.map((c) => {
                    const student = ratings[c.id]!;
                    const diff = Math.abs(student - c.expertScore);
                    return (
                      <tr key={c.id} className="border-b border-n50">
                        <td className="py-2 pr-4 text-navy">{c.label}</td>
                        <td className="py-2 px-2 text-center font-bold text-orange">{student}</td>
                        <td className="py-2 px-2 text-center font-bold text-teal-dark">{c.expertScore}</td>
                        <td className={`py-2 pl-2 text-center font-bold ${
                          diff === 0 ? 'text-success' : diff === 1 ? 'text-n500' : 'text-warning'
                        }`}>
                          {diff === 0 ? '=' : `${diff}`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <button
                onClick={handleReset}
                className="px-5 py-2 text-sm text-n500 hover:text-navy transition-colors underline"
              >
                Rate again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
