import { useState, useCallback } from 'react';

interface JourneyMessage {
  id: string;
  text: string;
  segment: string;
  tone: string;
  cta: string;
}

interface PlacedMessage {
  message: JourneyMessage;
  phase: string;
  touchpoint: string;
}

const PHASES = [
  { id: 'onboarding', label: 'Onboarding', color: 'bg-teal/10 border-teal' },
  { id: 'active-play', label: 'Active Play', color: 'bg-orange/10 border-orange' },
  { id: 'ongoing', label: 'Ongoing Engagement', color: 'bg-success/10 border-success' },
  { id: 'support', label: 'Support', color: 'bg-warning/10 border-warning' },
];

const TOUCHPOINTS: Record<string, string[]> = {
  'onboarding': ['Welcome email', 'First deposit screen', 'Content hub intro'],
  'active-play': ['Session reminder', 'Limit reached', 'In-game content card'],
  'ongoing': ['Monthly summary email', 'Campaign content', 'Quiz challenge'],
  'support': ['Helpline page', 'Self-exclusion flow', 'Concerned others page'],
};

const MESSAGE_LIBRARY: JourneyMessage[] = [
  { id: 'm1', text: 'Set your deposit limit — it takes 10 seconds.', segment: 'New/Novice', tone: 'Confident', cta: 'Set your limits' },
  { id: 'm2', text: 'How far does your bankroll go? Set a weekly limit and the planner shows you.', segment: 'Recreational', tone: 'Confident', cta: 'Try the bankroll planner' },
  { id: 'm3', text: 'Take the Game IQ quiz — most people get #3 wrong.', segment: 'Recreational', tone: 'Playful', cta: 'Test your game IQ' },
  { id: 'm4', text: "Here's how games actually work. Odds, math, no fine print.", segment: 'New/Novice', tone: 'Confident', cta: 'See the real odds' },
  { id: 'm5', text: "You've been playing 45 minutes. Check in?", segment: 'Recreational', tone: 'Warm', cta: 'See your activity' },
  { id: 'm6', text: "You've hit your limit for this period. That's you playing on your own terms.", segment: 'Recreational', tone: 'Warm', cta: 'View your dashboard' },
  { id: 'm7', text: 'Your month in review: sessions, time, spending. Your tools are working.', segment: 'Recreational', tone: 'Confident', cta: 'See your activity' },
  { id: 'm8', text: 'How well do you know parlay math? Most people overestimate their odds.', segment: 'Enthusiast', tone: 'Playful', cta: 'Take the quiz' },
  { id: 'm9', text: 'Share this myth-buster with your friends. See who scores higher.', segment: 'Recreational', tone: 'Playful', cta: 'Share this' },
  { id: 'm10', text: 'Support is here. Call, text, or chat — whatever works for you.', segment: 'In-Crisis', tone: 'Warm', cta: 'Talk to someone' },
  { id: 'm11', text: 'Cool off for 24 hours, 7 days, or 30 days. You choose.', segment: 'All', tone: 'Warm', cta: 'Take a break' },
  { id: 'm12', text: 'Worried about someone? Here\'s how to start the conversation.', segment: 'Friends & Family', tone: 'Warm', cta: 'Get conversation starters' },
  { id: 'm13', text: 'A -110 line means you bet $110 to win $100. That $10 is the sportsbook\'s cut.', segment: 'New/Novice', tone: 'Confident', cta: 'See how it works' },
  { id: 'm14', text: 'Your activity dashboard is always here. No pressure.', segment: 'At-Risk', tone: 'Warm', cta: 'See your activity' },
  { id: 'm15', text: 'Your first week: bets placed, sessions, total wagered. Your tools are working.', segment: 'New/Novice', tone: 'Confident', cta: 'See your activity' },
];

const TONE_COLORS: Record<string, string> = {
  'Confident': 'text-teal',
  'Playful': 'text-orange',
  'Warm': 'text-success',
};

export default function JourneyMapBuilder() {
  const [placements, setPlacements] = useState<PlacedMessage[]>([]);
  const [draggedMessage, setDraggedMessage] = useState<JourneyMessage | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<string>('onboarding');
  const [filterSegment, setFilterSegment] = useState<string>('All');
  const [showExport, setShowExport] = useState(false);

  const segments = ['All', ...Array.from(new Set(MESSAGE_LIBRARY.map(m => m.segment).filter(s => s !== 'All')))];

  const filteredMessages = MESSAGE_LIBRARY.filter(m =>
    filterSegment === 'All' || m.segment === filterSegment || m.segment === 'All'
  );

  const getPlacementsForCell = (phase: string, touchpoint: string) =>
    placements.filter(p => p.phase === phase && p.touchpoint === touchpoint);

  const handleDragStart = (message: JourneyMessage) => {
    setDraggedMessage(message);
  };

  const handleDrop = useCallback((phase: string, touchpoint: string) => {
    if (!draggedMessage) return;
    // Don't add duplicates to same cell
    const exists = placements.some(
      p => p.phase === phase && p.touchpoint === touchpoint && p.message.id === draggedMessage.id
    );
    if (!exists) {
      setPlacements(prev => [...prev, { message: draggedMessage, phase, touchpoint }]);
    }
    setDraggedMessage(null);
  }, [draggedMessage, placements]);

  const handleClickAdd = (message: JourneyMessage, phase: string, touchpoint: string) => {
    const exists = placements.some(
      p => p.phase === phase && p.touchpoint === touchpoint && p.message.id === message.id
    );
    if (!exists) {
      setPlacements(prev => [...prev, { message, phase, touchpoint }]);
    }
  };

  const removePlacement = (phase: string, touchpoint: string, messageId: string) => {
    setPlacements(prev => prev.filter(
      p => !(p.phase === phase && p.touchpoint === touchpoint && p.message.id === messageId)
    ));
  };

  const clearAll = () => setPlacements([]);

  const exportMarkdown = () => {
    let md = '# My Playbook Journey Map\n\n';
    for (const phase of PHASES) {
      const phasePlacements = placements.filter(p => p.phase === phase.id);
      if (phasePlacements.length === 0) continue;
      md += `## ${phase.label}\n\n`;
      md += '| Touchpoint | Message | Segment | Tone | CTA |\n';
      md += '|---|---|---|---|---|\n';
      for (const p of phasePlacements) {
        md += `| ${p.touchpoint} | ${p.message.text} | ${p.message.segment} | ${p.message.tone} | ${p.message.cta} |\n`;
      }
      md += '\n';
    }
    return md;
  };

  const exportJSON = () => {
    return JSON.stringify(
      PHASES.map(phase => ({
        phase: phase.label,
        touchpoints: (TOUCHPOINTS[phase.id] || []).map(tp => ({
          touchpoint: tp,
          messages: getPlacementsForCell(phase.id, tp).map(p => ({
            text: p.message.text,
            segment: p.message.segment,
            tone: p.message.tone,
            cta: p.message.cta,
          })),
        })).filter(tp => tp.messages.length > 0),
      })).filter(p => p.touchpoints.length > 0),
      null,
      2
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
  };

  const phase = PHASES.find(p => p.id === selectedPhase)!;
  const touchpoints = TOUCHPOINTS[selectedPhase] || [];

  return (
    <div className="space-y-6">
      {/* Phase tabs */}
      <div className="flex flex-wrap gap-2">
        {PHASES.map(p => (
          <button
            key={p.id}
            onClick={() => setSelectedPhase(p.id)}
            className={`px-4 py-2 rounded-lg text-sm font-heading font-semibold transition-colors ${
              selectedPhase === p.id
                ? 'bg-navy text-white'
                : 'bg-n50 text-n700 hover:bg-n100'
            }`}
          >
            {p.label}
            {placements.filter(pl => pl.phase === p.id).length > 0 && (
              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal text-navy text-xs font-bold">
                {placements.filter(pl => pl.phase === p.id).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message palette */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <h4 className="text-sm font-heading font-semibold text-n700 mb-3">Message Library</h4>
            <select
              value={filterSegment}
              onChange={e => setFilterSegment(e.target.value)}
              aria-label="Filter messages by segment"
              className="w-full mb-3 px-3 py-2 border border-n200 rounded-lg text-sm bg-white text-n900"
            >
              {segments.map(s => (
                <option key={s} value={s}>{s === 'All' ? 'All segments' : s}</option>
              ))}
            </select>

            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {filteredMessages.map(msg => (
                <div
                  key={msg.id}
                  draggable
                  onDragStart={() => handleDragStart(msg)}
                  className="p-3 bg-white rounded-lg border border-n100 cursor-grab active:cursor-grabbing hover:border-n300 hover:shadow-sm transition-all text-sm group"
                >
                  <p className="text-n900 mb-1.5 leading-snug">{msg.text}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-1.5 py-0.5 bg-n50 rounded text-n600">{msg.segment}</span>
                    <span className={`font-semibold ${TONE_COLORS[msg.tone] || 'text-n500'}`}>{msg.tone}</span>
                  </div>
                  {/* Mobile: tap to see add buttons */}
                  <div className="mt-2 flex flex-wrap gap-1 lg:hidden">
                    {touchpoints.map(tp => (
                      <button
                        key={tp}
                        onClick={() => handleClickAdd(msg, selectedPhase, tp)}
                        className="text-xs px-2 py-1 bg-navy/5 hover:bg-navy/10 rounded text-navy transition-colors"
                      >
                        + {tp}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey timeline */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-heading font-semibold text-n700">
              {phase.label} — Touchpoints
            </h4>
            {placements.length > 0 && (
              <button
                onClick={clearAll}
                className="text-xs text-n500 hover:text-warning transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="space-y-4">
            {touchpoints.map(tp => {
              const cellPlacements = getPlacementsForCell(selectedPhase, tp);
              return (
                <div
                  key={tp}
                  onDragOver={e => e.preventDefault()}
                  onDrop={() => handleDrop(selectedPhase, tp)}
                  className={`p-4 rounded-lg border-2 border-dashed transition-colors min-h-[80px] ${
                    draggedMessage ? 'border-teal bg-teal/5' : 'border-n200 bg-n50/50'
                  }`}
                >
                  <h5 className="text-sm font-heading font-semibold text-navy mb-2">{tp}</h5>
                  {cellPlacements.length === 0 ? (
                    <p className="text-xs text-n400 italic">
                      Drag a message here or tap + on mobile
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {cellPlacements.map(p => (
                        <div
                          key={p.message.id}
                          className="flex items-start gap-2 p-2 bg-white rounded border border-n100"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-n900 leading-snug">{p.message.text}</p>
                            <div className="flex items-center gap-2 mt-1 text-xs">
                              <span className="px-1.5 py-0.5 bg-n50 rounded text-n600">{p.message.segment}</span>
                              <span className={`font-semibold ${TONE_COLORS[p.message.tone] || 'text-n500'}`}>
                                {p.message.tone}
                              </span>
                              <span className="text-n400">CTA: {p.message.cta}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => removePlacement(selectedPhase, tp, p.message.id)}
                            className="shrink-0 text-n400 hover:text-warning transition-colors p-1"
                            aria-label="Remove message"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Export section */}
      {placements.length > 0 && (
        <div className="border-t border-n100 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <h4 className="text-sm font-heading font-semibold text-n700">Export your journey map</h4>
            <button
              onClick={() => setShowExport(!showExport)}
              className="text-xs px-3 py-1.5 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors font-heading font-semibold"
            >
              {showExport ? 'Hide export' : 'Show export'}
            </button>
          </div>

          {showExport && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-heading font-semibold text-n600">Markdown</span>
                  <button
                    onClick={() => copyToClipboard(exportMarkdown())}
                    className="text-xs text-teal hover:text-teal-dark transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <pre className="p-3 bg-navy-dark text-n300 rounded-lg text-xs overflow-auto max-h-64 font-mono">
                  {exportMarkdown()}
                </pre>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-heading font-semibold text-n600">JSON</span>
                  <button
                    onClick={() => copyToClipboard(exportJSON())}
                    className="text-xs text-teal hover:text-teal-dark transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <pre className="p-3 bg-navy-dark text-n300 rounded-lg text-xs overflow-auto max-h-64 font-mono">
                  {exportJSON()}
                </pre>
              </div>
            </div>
          )}

          <p className="text-xs text-n500 mt-3">
            {placements.length} message{placements.length !== 1 ? 's' : ''} placed across {
              new Set(placements.map(p => p.phase)).size
            } phase{new Set(placements.map(p => p.phase)).size !== 1 ? 's' : ''}
          </p>
        </div>
      )}
    </div>
  );
}
