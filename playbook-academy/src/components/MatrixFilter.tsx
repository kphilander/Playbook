import { useState, useMemo } from 'react';

interface TouchpointEntry {
  phase: string;
  touchpoint: string;
  segment: string;
  vertical: string;
  message: string;
  tone: string;
}

const TOUCHPOINTS: TouchpointEntry[] = [
  // ── Onboarding ──────────────────────────────────
  { phase: 'Onboarding', touchpoint: 'Welcome Email', segment: 'New/Novice', vertical: 'Sports', message: 'Welcome to [Brand]. Before you place your first bet, here is what the odds actually mean.', tone: 'Confident/Informative' },
  { phase: 'Onboarding', touchpoint: 'Welcome Email', segment: 'New/Novice', vertical: 'Casino', message: 'Welcome to [Brand]. Every game has a house edge — here is how to see yours.', tone: 'Confident/Informative' },
  { phase: 'Onboarding', touchpoint: 'Welcome Email', segment: 'New/Novice', vertical: 'Lottery', message: 'Welcome to [Brand]. The odds are long — here is exactly how long, and how to play on your terms.', tone: 'Confident/Informative' },
  { phase: 'Onboarding', touchpoint: 'Deposit Screen', segment: 'New/Novice', vertical: 'All', message: 'Set your weekly entertainment budget — it takes 10 seconds.', tone: 'Confident/Informative' },
  { phase: 'Onboarding', touchpoint: 'Content Hub Intro', segment: 'New/Novice', vertical: 'Sports', message: 'Here is how sports betting actually works — odds, vig, and no fine print.', tone: 'Confident/Informative' },
  { phase: 'Onboarding', touchpoint: 'Content Hub Intro', segment: 'New/Novice', vertical: 'Casino', message: 'Slots, table games, live dealer — here is what the math looks like behind each one.', tone: 'Confident/Informative' },
  { phase: 'Onboarding', touchpoint: 'Deposit Screen', segment: 'Recreational', vertical: 'All', message: 'Set a deposit limit for this vertical. Your other limits are separate — each product has its own budget.', tone: 'Warm/Direct' },

  // ── Active Play ─────────────────────────────────
  { phase: 'Active Play', touchpoint: 'Session Reminder', segment: 'New/Novice', vertical: 'All', message: "You've been playing for 45 minutes. Here is your session so far.", tone: 'Confident/Informative' },
  { phase: 'Active Play', touchpoint: 'Session Reminder', segment: 'Recreational', vertical: 'Casino', message: "You've been playing for 45 minutes. Here is your session so far.", tone: 'Warm/Direct' },
  { phase: 'Active Play', touchpoint: 'Session Reminder', segment: 'Recreational', vertical: 'Sports', message: 'Session update: 3 active bets, 45 min in. Your dashboard has the details.', tone: 'Confident/Informative' },
  { phase: 'Active Play', touchpoint: 'In-App Content Card', segment: 'New/Novice', vertical: 'Sports', message: 'A -110 line means you bet $110 to win $100. The $10 difference? That is the sportsbook\'s cut.', tone: 'Confident/Informative' },
  { phase: 'Active Play', touchpoint: 'In-App Content Card', segment: 'New/Novice', vertical: 'Casino', message: 'This slot has a 96% RTP. For every $100 wagered over time, $4 goes to the house. Here is what that means for your session.', tone: 'Confident/Informative' },
  { phase: 'Active Play', touchpoint: 'Limit Reached Screen', segment: 'Recreational', vertical: 'All', message: 'Limit reached. It resets on [date]. Your bankroll planner can help plan your next week.', tone: 'Warm/Direct' },
  { phase: 'Active Play', touchpoint: 'Limit Reached Screen', segment: 'At-Risk', vertical: 'All', message: "You've hit your limit. Support is available if you want to talk.", tone: 'Warm/Direct' },
  { phase: 'Active Play', touchpoint: 'Session Reminder', segment: 'Enthusiast', vertical: 'Sports', message: "90 minutes in. Your P&L for this session: [amount]. Full breakdown on your dashboard.", tone: 'Confident/Informative' },

  // ── Ongoing Engagement ──────────────────────────
  { phase: 'Ongoing Engagement', touchpoint: 'Monthly Summary', segment: 'Recreational', vertical: 'All', message: 'Your month in review: sessions, time, spending. Your tools are working.', tone: 'Confident/Informative' },
  { phase: 'Ongoing Engagement', touchpoint: 'Monthly Summary', segment: 'Enthusiast', vertical: 'Sports', message: 'Your month: [X] sessions, [win/loss ratio], most active markets. How does your Game IQ compare?', tone: 'Playful/Witty' },
  { phase: 'Ongoing Engagement', touchpoint: 'Campaign Email', segment: 'Recreational', vertical: 'Casino', message: 'Think you can spot the pattern in slots? Spoiler: there is none. Take the myth-busting quiz.', tone: 'Playful/Witty' },
  { phase: 'Ongoing Engagement', touchpoint: 'Social Media Card', segment: 'Recreational', vertical: 'Sports', message: 'Your friend thinks 3-leg parlays are a good bet. Share this math with them.', tone: 'Playful/Witty' },
  { phase: 'Ongoing Engagement', touchpoint: 'Campaign Email', segment: 'Enthusiast', vertical: 'All', message: 'New deep dive: Expected Value explained. You already know the basics — here is what the sharps actually calculate.', tone: 'Confident/Informative' },

  // ── Support ─────────────────────────────────────
  { phase: 'Support', touchpoint: 'Helpline Page', segment: 'In-Crisis', vertical: 'All', message: 'Support is here. Call, text, or chat — free and confidential.', tone: 'Warm/Direct' },
  { phase: 'Support', touchpoint: 'Self-Exclusion Flow', segment: 'In-Crisis', vertical: 'All', message: 'Choose your break: 24 hours, 7 days, 30 days, or longer. One tap. No questions.', tone: 'Warm/Direct' },
  { phase: 'Support', touchpoint: 'Concerned Others Page', segment: 'Friends & Family', vertical: 'All', message: 'Your concern matters. Here is how to start the conversation — and where to get support for yourself.', tone: 'Warm/Direct' },
  { phase: 'Support', touchpoint: 'Check-In Prompt', segment: 'At-Risk', vertical: 'All', message: 'We noticed you have been adjusting your limits. Here is your activity for the last 2 weeks — want to review it?', tone: 'Warm/Direct' },
  { phase: 'Support', touchpoint: 'Cooling-Off Confirmation', segment: 'In-Crisis', vertical: 'All', message: 'Your cooling-off period is active. Support is still available anytime — call, text, or chat.', tone: 'Warm/Direct' },
];

const PHASES = ['All', 'Onboarding', 'Active Play', 'Ongoing Engagement', 'Support'];
const SEGMENTS = ['All', 'New/Novice', 'Recreational', 'Enthusiast', 'At-Risk', 'In-Crisis', 'Friends & Family'];
const VERTICALS = ['All', 'Sports', 'Casino', 'Lottery'];

const PHASE_COLORS: Record<string, { row: string; badge: string }> = {
  Onboarding: { row: 'bg-teal/5', badge: 'bg-teal/15 text-teal-dark' },
  'Active Play': { row: 'bg-orange/5', badge: 'bg-orange/15 text-orange-dark' },
  'Ongoing Engagement': { row: 'bg-info/5', badge: 'bg-info/15 text-info' },
  Support: { row: 'bg-warning/5', badge: 'bg-warning/15 text-warning' },
};

export default function MatrixFilter() {
  const [phase, setPhase] = useState('All');
  const [segment, setSegment] = useState('All');
  const [vertical, setVertical] = useState('All');

  const filtered = useMemo(() => {
    return TOUCHPOINTS.filter((t) => {
      if (phase !== 'All' && t.phase !== phase) return false;
      if (segment !== 'All' && t.segment !== segment) return false;
      if (vertical !== 'All' && t.vertical !== vertical && t.vertical !== 'All') return false;
      return true;
    });
  }, [phase, segment, vertical]);

  const selectClasses =
    'w-full px-3 py-2.5 rounded-lg border-2 border-n100 bg-white text-navy font-heading font-semibold text-sm appearance-none cursor-pointer focus:border-teal focus:outline-none transition-colors';

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Tool
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">
          Touchpoint Matrix Explorer
        </h3>
      </div>

      <div className="p-5 sm:p-6">
        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-n500 mb-1.5">
              Segment
            </label>
            <select
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
              className={selectClasses}
            >
              {SEGMENTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-n500 mb-1.5">
              Vertical
            </label>
            <select
              value={vertical}
              onChange={(e) => setVertical(e.target.value)}
              className={selectClasses}
            >
              {VERTICALS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-n500 mb-1.5">
              Phase
            </label>
            <select
              value={phase}
              onChange={(e) => setPhase(e.target.value)}
              className={selectClasses}
            >
              {PHASES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-n500 font-heading mb-4">
          Showing <strong className="text-navy">{filtered.length}</strong> of{' '}
          <strong className="text-navy">{TOUCHPOINTS.length}</strong> touchpoints
        </p>

        {/* Table */}
        {filtered.length > 0 ? (
          <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'separate', borderSpacing: '0 4px' }}>
              <thead>
                <tr>
                  <th className="text-left px-3 py-2.5 font-heading font-bold text-xs uppercase tracking-wider text-n500 bg-n50 rounded-l-lg">
                    Phase
                  </th>
                  <th className="text-left px-3 py-2.5 font-heading font-bold text-xs uppercase tracking-wider text-n500 bg-n50">
                    Touchpoint
                  </th>
                  <th className="text-left px-3 py-2.5 font-heading font-bold text-xs uppercase tracking-wider text-n500 bg-n50">
                    Segment
                  </th>
                  <th className="text-left px-3 py-2.5 font-heading font-bold text-xs uppercase tracking-wider text-n500 bg-n50">
                    Message
                  </th>
                  <th className="text-left px-3 py-2.5 font-heading font-bold text-xs uppercase tracking-wider text-n500 bg-n50 rounded-r-lg">
                    Tone
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((entry, i) => {
                  const colors = PHASE_COLORS[entry.phase] || { row: 'bg-n50', badge: 'bg-n100 text-n700' };
                  return (
                    <tr key={i} className={`${colors.row} transition-colors`}>
                      <td className="px-3 py-3 rounded-l-lg">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-heading font-bold ${colors.badge}`}>
                          {entry.phase}
                        </span>
                      </td>
                      <td className="px-3 py-3 font-heading font-semibold text-navy whitespace-nowrap">
                        {entry.touchpoint}
                      </td>
                      <td className="px-3 py-3 text-n700 whitespace-nowrap">{entry.segment}</td>
                      <td className="px-3 py-3 text-n700 leading-relaxed min-w-[280px]">
                        "{entry.message}"
                      </td>
                      <td className="px-3 py-3 rounded-r-lg">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-navy/10 text-navy text-xs font-heading font-semibold whitespace-nowrap">
                          {entry.tone}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 px-4">
            <p className="text-n500 font-heading text-sm">
              No touchpoints match your filters. Try broadening your selection.
            </p>
          </div>
        )}

        {/* Reset */}
        {(phase !== 'All' || segment !== 'All' || vertical !== 'All') && (
          <div className="mt-4 pt-3 border-t border-n100 flex justify-end">
            <button
              onClick={() => {
                setPhase('All');
                setSegment('All');
                setVertical('All');
              }}
              className="text-sm text-n500 hover:text-navy font-heading underline transition-colors"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
