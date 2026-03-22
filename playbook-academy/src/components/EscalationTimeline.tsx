import { useState } from 'react';

const TEAL = '#00D4AA';
const NAVY = '#1B2838';

interface TimelineStep {
  when: string;
  touchpoint: string;
  context: string;
  message: string;
  why: string;
  stage: 'education' | 'myth-busting' | 'entertainment-literacy' | 'tools';
}

const STEPS: TimelineStep[] = [
  {
    when: 'Day 0',
    touchpoint: 'Welcome email',
    context: 'The player just signed up. They chose this product — maybe saw an ad, maybe a friend recommended it. They don\'t know the rules yet and the interface feels unfamiliar.',
    message: '"Welcome to [brand]. Here\'s how sports betting works — odds, lines, and what the numbers mean."',
    why: 'Playbook shows up as a companion brand from the very first touchpoint. The goal is simple: make the product less intimidating. No warnings, no tools — just "here\'s how this works."',
    stage: 'education',
  },
  {
    when: 'Day 1',
    touchpoint: 'First bet placed',
    context: 'They\'re about to place their first real bet. The terminology is confusing — spread, moneyline, over/under. They might hesitate or make a bet they don\'t fully understand.',
    message: '"Placing your first bet? Here\'s what a spread means and how odds convert to probability."',
    why: 'This is product education, not responsible gambling messaging. The player sees Playbook as helpful — it\'s teaching them how to use the product they just bought into.',
    stage: 'education',
  },
  {
    when: 'Week 2',
    touchpoint: 'In-app card',
    context: 'They\'ve placed several bets now. They know the basics. They\'re starting to form opinions about "hot" teams and "due" outcomes — the cognitive distortions are setting in naturally.',
    message: '"Think a team is \'due\' for a win after three losses? That\'s not how probability works. Take the quiz."',
    why: 'Now that they trust Playbook as an educator, introduce myth-busting. This isn\'t a warning — it\'s a "did you know?" moment. The quiz format makes it engaging, not preachy.',
    stage: 'myth-busting',
  },
  {
    when: 'Week 4',
    touchpoint: 'Content hub article',
    context: 'A month in, this player is comfortable with the product. They\'re betting regularly and want to get smarter about it. They\'re the kind of player who reads articles and wants to understand the math.',
    message: '"Parlay math: why 4-leg parlays are harder than most people think."',
    why: 'Entertainment literacy — the player is engaged enough to want depth. This builds genuine understanding of probability, which indirectly creates more resilient gambling behavior.',
    stage: 'entertainment-literacy',
  },
  {
    when: 'Month 2',
    touchpoint: 'Feature announcement',
    context: 'Two months of regular play. The player has an established relationship with the brand. They trust Playbook because it\'s been useful — not because it lectured them.',
    message: '"You\'ve been playing for a while. Your activity dashboard is ready — see your month at a glance."',
    why: 'Only now do self-management tools appear. They arrive as a product feature — "your dashboard is ready" — not as an intervention. The relationship earned this moment.',
    stage: 'tools',
  },
];

const STAGE_META: Record<string, { label: string; color: string }> = {
  education: { label: 'Game education', color: TEAL },
  'myth-busting': { label: 'Myth-busting', color: '#FF9800' },
  'entertainment-literacy': { label: 'Entertainment literacy', color: '#0097A7' },
  tools: { label: 'Self-management tools', color: NAVY },
};

function StepIcon({ stage, color }: { stage: string; color: string }) {
  const shared = { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (stage) {
    case 'education':
      return <svg {...shared}><rect x="2" y="4" width="20" height="16" rx="2" fill={color} fillOpacity=".1"/><polyline points="22,7 12,13 2,7"/></svg>;
    case 'myth-busting':
      return <svg {...shared}><circle cx="12" cy="12" r="10" fill={color} fillOpacity=".1"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
    case 'entertainment-literacy':
      return <svg {...shared}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill={color} fillOpacity=".1"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
    case 'tools':
      return <svg {...shared}><rect x="3" y="3" width="18" height="18" rx="2" fill={color} fillOpacity=".1"/><line x1="7" y1="17" x2="7" y2="13"/><line x1="12" y1="17" x2="12" y2="9"/><line x1="17" y1="17" x2="17" y2="11"/></svg>;
    default:
      return null;
  }
}

export default function EscalationTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const step = STEPS[activeStep];
  const meta = STAGE_META[step.stage];

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white dark:bg-navy dark:border-navy-light shadow-sm overflow-hidden">
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Worked Example</span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">A New Sports Bettor's First Two Months</h3>
        <p className="text-n300 text-sm mt-1">How Playbook earns the relationship before introducing tools</p>
      </div>

      <div className="p-5 sm:p-6">
        {/* Timeline steps — uniform height cards */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {STEPS.map((s, i) => {
            const sMeta = STAGE_META[s.stage];
            const isActive = i === activeStep;

            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex flex-col items-center justify-center rounded-lg p-3 border-2 transition-all h-24 ${
                  isActive
                    ? 'bg-white dark:bg-navy-dark shadow-md'
                    : 'bg-n50 dark:bg-navy-dark/50 border-transparent hover:border-n200 dark:hover:border-navy-light'
                }`}
                style={isActive ? { borderColor: sMeta.color } : undefined}
              >
                <div className="mb-1.5">
                  <StepIcon stage={s.stage} color={isActive ? sMeta.color : '#A8A8C0'} />
                </div>
                <p className={`text-xs font-heading font-bold leading-tight ${isActive ? 'text-navy dark:text-white' : 'text-n400 dark:text-n500'}`}>
                  {s.when}
                </p>
              </button>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="flex gap-1 mb-6">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="h-1 flex-1 rounded-full transition-all cursor-pointer"
              onClick={() => setActiveStep(i)}
              style={{ backgroundColor: i <= activeStep ? STAGE_META[STEPS[i].stage].color : '#E8E8F0' }}
            />
          ))}
        </div>

        {/* Detail card — the narrative */}
        <div className="rounded-lg border-2 p-5" style={{ borderColor: meta.color + '40', backgroundColor: meta.color + '06' }}>
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded-full text-xs font-heading font-bold text-white" style={{ backgroundColor: meta.color }}>
              {meta.label}
            </span>
            <span className="text-sm font-heading font-semibold text-navy dark:text-white">{step.when}</span>
            <span className="text-sm text-n500 dark:text-n300">— {step.touchpoint}</span>
          </div>

          {/* Context — what's happening for the player */}
          <div className="mb-4">
            <p className="text-xs font-heading font-bold uppercase tracking-wider text-n500 dark:text-n400 mb-1">What's happening</p>
            <p className="text-sm text-n700 dark:text-n300 leading-relaxed">{step.context}</p>
          </div>

          {/* The actual message */}
          <div className="mb-4 p-3 rounded-lg bg-white dark:bg-navy border border-n100 dark:border-navy-light">
            <p className="text-xs font-heading font-bold uppercase tracking-wider text-n500 dark:text-n400 mb-1">The message</p>
            <p className="text-sm text-n800 dark:text-n200 leading-relaxed italic">{step.message}</p>
          </div>

          {/* Why this matters */}
          <div>
            <p className="text-xs font-heading font-bold uppercase tracking-wider mb-1" style={{ color: meta.color }}>Why this works</p>
            <p className="text-sm text-n700 dark:text-n300 leading-relaxed">{step.why}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className={`text-sm font-heading font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              activeStep === 0 ? 'text-n300 dark:text-n500 cursor-default' : 'text-navy dark:text-white hover:bg-n50 dark:hover:bg-navy-dark'
            }`}
          >
            ← Previous
          </button>

          <span className="text-xs font-heading text-n400 dark:text-n500">
            {activeStep + 1} of {STEPS.length}
          </span>

          <button
            onClick={() => setActiveStep(Math.min(STEPS.length - 1, activeStep + 1))}
            disabled={activeStep === STEPS.length - 1}
            className={`text-sm font-heading font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              activeStep === STEPS.length - 1 ? 'text-n300 dark:text-n500 cursor-default' : 'text-teal hover:bg-teal/10'
            }`}
          >
            Next →
          </button>
        </div>

        {/* Stage legend */}
        <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-n100 dark:border-navy-light">
          {Object.entries(STAGE_META).map(([key, m]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: m.color }} />
              <span className="text-xs font-heading text-n500 dark:text-n400">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
