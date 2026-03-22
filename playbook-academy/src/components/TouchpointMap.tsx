import { useState } from 'react';

interface Touchpoint {
  id: string;
  label: string;
  icon: (color: string) => JSX.Element;
  stages: Record<string, string>;
}

const STAGES = [
  { id: 'awareness', label: 'Awareness', color: '#00D4AA' },
  { id: 'new-player', label: 'New Player', color: '#00BFA5' },
  { id: 'active', label: 'Active Player', color: '#0097A7' },
  { id: 'regular', label: 'Regular', color: '#2A3F56' },
  { id: 'support', label: 'Support Seeking', color: '#D32F2F' },
] as const;

/* ── Inline SVG icon builders ── */
const icon = {
  megaphone: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 4v16l-7-4H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h7l7-4z" fill={c} fillOpacity=".1"/>
      <path d="M19 4v16l-7-4H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h7l7-4z"/>
      <line x1="22" y1="9" x2="22" y2="15"/>
    </svg>
  ),
  monitor: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" fill={c} fillOpacity=".08"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  mail: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" fill={c} fillOpacity=".08"/><polyline points="22,7 12,13 2,7"/>
    </svg>
  ),
  wave: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 11v-1a2 2 0 1 1 4 0v1"/><path d="M11 10V8a2 2 0 1 1 4 0v2"/><path d="M15 9.5V8a2 2 0 1 1 4 0v8a6 6 0 0 1-6 6H9a6 6 0 0 1-5.27-3.14"/>
      <path d="M5 14v-3a2 2 0 1 1 4 0v2"/>
    </svg>
  ),
  phone: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" fill={c} fillOpacity=".08"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  book: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill={c} fillOpacity=".08"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  mailStack: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="18" height="14" rx="2" fill={c} fillOpacity=".08"/><polyline points="20,9 11,15 2,9"/>
      <path d="M4 4h16a2 2 0 0 1 2 2" opacity=".5"/>
    </svg>
  ),
  puzzle: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877L2.97 12.85A2.404 2.404 0 0 1 2.264 11.147c0-.617.236-1.234.706-1.704L4.58 7.832c.23-.229.556-.338.878-.29.493.074.84.504 1.02.968a2.5 2.5 0 1 0 3.237-3.237c-.464-.18-.894-.527-.967-1.02a1.026 1.026 0 0 1 .289-.878l1.61-1.61A2.404 2.404 0 0 1 12.353 1.06c.617 0 1.234.236 1.704.706l1.568 1.568c.23.229.556.338.878.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.968 1.02z" fill={c} fillOpacity=".06"/>
    </svg>
  ),
  bell: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill={c} fillOpacity=".08"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  chart: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" fill={c} fillOpacity=".08"/><line x1="7" y1="17" x2="7" y2="13"/><line x1="12" y1="17" x2="12" y2="9"/><line x1="17" y1="17" x2="17" y2="11"/>
    </svg>
  ),
  heart: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill={c} fillOpacity=".1"/>
    </svg>
  ),
  share: (c: string) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" fill={c} fillOpacity=".12"/><circle cx="6" cy="12" r="3" fill={c} fillOpacity=".12"/><circle cx="18" cy="19" r="3" fill={c} fillOpacity=".12"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
};

const TOUCHPOINTS: Touchpoint[] = [
  {
    id: 'ads', label: 'Ads & Social', icon: icon.megaphone,
    stages: {
      'awareness': 'First contact — Playbook appears as a companion brand in ads. "Learn how the game works" positions education as a product feature, not a warning.',
      'new-player': 'Retargeted social content: myth-busting cards, "did you know" posts about game odds. Educational, shareable, non-preachy.',
      'active': 'Content hub promotion — game guides, strategy articles, quiz challenges. The player is engaged enough to want deeper content.',
    },
  },
  {
    id: 'landing', label: 'Landing Pages', icon: icon.monitor,
    stages: { 'awareness': 'Playbook content appears on product landing pages — odds explainers, "how to play" guides. Makes the product less intimidating to newcomers.' },
  },
  {
    id: 'welcome', label: 'Welcome Email', icon: icon.mail,
    stages: { 'new-player': 'Day 0: "Here\'s how [game] works." Teaches rules, odds, what the numbers mean. No deposit limits, no tool-pushing — just game education.' },
  },
  {
    id: 'onboarding', label: 'Onboarding Flow', icon: icon.wave,
    stages: { 'new-player': 'First-session guide: quick overview of the game, what to expect, how odds work. Framed as product education, not compliance.' },
  },
  {
    id: 'in-app', label: 'In-App Cards', icon: icon.phone,
    stages: {
      'new-player': 'After first sessions: myth-busting cards — "Think you\'re \'due\' for a win? That\'s not how probability works." Builds resilience indirectly.',
      'active': 'Game-specific tips, product knowledge. The player is comfortable enough to engage with richer content.',
      'regular': 'Feature announcements: "Your activity dashboard is ready." Tools appear as product upgrades, not interventions.',
      'support': 'Simplified support card: one tap to help resources. No friction, no marketing alongside it.',
    },
  },
  {
    id: 'content-hub', label: 'Content Hub', icon: icon.book,
    stages: {
      'active': 'The education deepens — game guides, articles, "how it works" explainers, quizzes. The highest content volume lives here.',
      'regular': 'Self-management articles: how to read your activity dashboard, set budgets, track patterns.',
    },
  },
  {
    id: 'email-series', label: 'Email Series', icon: icon.mailStack,
    stages: {
      'new-player': 'Weekly myth-busting series: one cognitive distortion per email. "Did you know most people get this wrong about [game]?"',
      'active': 'Game knowledge series: finer points, expert tips. Earned through engagement — not pushed on Day 1.',
      'regular': 'Monthly activity summary: play patterns, feature highlights, upcoming content.',
    },
  },
  {
    id: 'quiz', label: 'Quizzes & Games', icon: icon.puzzle,
    stages: {
      'new-player': 'Game IQ quiz: test your knowledge of odds, probability, common myths. Fun format that embeds education in entertainment.',
      'active': 'Advanced quizzes: game-specific deep dives, strategy challenges.',
    },
  },
  {
    id: 'push', label: 'Push Notifications', icon: icon.bell,
    stages: {
      'active': 'Content alerts: new game guide, quiz challenge, myth-busting article. Education-focused, not promotional.',
      'regular': 'Feature updates: "Your weekly activity summary is ready." Session context: time and spend nudges.',
      'support': 'Direct support link: "Need to talk? Help is one tap away." No delay, no intermediary steps.',
    },
  },
  {
    id: 'dashboard', label: 'Activity Dashboard', icon: icon.chart,
    stages: { 'regular': 'The self-management hub — session history, spend tracking, budgets, limits. Only appears after weeks of engagement when the relationship supports it.' },
  },
  {
    id: 'support-page', label: 'Support & Help', icon: icon.heart,
    stages: { 'support': 'Tier 2 content: helplines, self-exclusion, cooling-off. Zero friction path. The brand steps back and help steps forward. Always accessible from any stage.' },
  },
  {
    id: 'social-card', label: 'Social Cards', icon: icon.share,
    stages: {
      'awareness': 'Shareable myth-busting cards in social feeds — "Think a slot machine is \'due\'?" Educational content that works as organic reach.',
      'new-player': 'Game education cards: odds explainers, "how it works" visuals. Designed to be saved and shared.',
    },
  },
];

export default function TouchpointMap() {
  const [activeStage, setActiveStage] = useState<string>('awareness');
  const [selectedTouchpoint, setSelectedTouchpoint] = useState<string | null>(null);

  const activeColor = STAGES.find(s => s.id === activeStage)?.color ?? '#00D4AA';
  const selectedTp = TOUCHPOINTS.find(tp => tp.id === selectedTouchpoint);
  const selectedExplanation = selectedTp?.stages[activeStage];

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white dark:bg-navy dark:border-navy-light shadow-sm overflow-hidden">
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Interactive Guide</span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">Touchpoint Map</h3>
        <p className="text-n300 text-sm mt-1">Select a stage, then tap or hover a touchpoint to see why it activates</p>
      </div>

      <div className="p-5 sm:p-6">
        {/* Stage selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {STAGES.map((stage) => {
            const isActive = activeStage === stage.id;
            const count = TOUCHPOINTS.filter(tp => tp.stages[stage.id]).length;
            return (
              <button
                key={stage.id}
                onClick={() => { setActiveStage(stage.id); setSelectedTouchpoint(null); }}
                className={`px-4 py-2.5 text-sm font-heading font-semibold rounded-lg transition-all border-2 ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'bg-white dark:bg-navy-dark text-n600 dark:text-n300 border-n200 dark:border-navy-light hover:border-n300'
                }`}
                style={isActive ? { backgroundColor: stage.color, borderColor: stage.color } : undefined}
              >
                {stage.label}
                <span className={`ml-1.5 text-xs ${isActive ? 'opacity-80' : 'opacity-50'}`}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Touchpoint grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {TOUCHPOINTS.map((tp) => {
            const isRelevant = !!tp.stages[activeStage];
            const isSelected = selectedTouchpoint === tp.id && isRelevant;

            return (
              <button
                key={tp.id}
                onClick={() => { if (isRelevant) setSelectedTouchpoint(isSelected ? null : tp.id); }}
                onMouseEnter={() => { if (isRelevant) setSelectedTouchpoint(tp.id); }}
                disabled={!isRelevant}
                className={`rounded-xl border-2 p-4 text-center transition-all ${
                  isRelevant
                    ? isSelected
                      ? 'bg-white dark:bg-navy-dark shadow-md cursor-pointer'
                      : 'bg-white dark:bg-navy-dark shadow-sm cursor-pointer hover:shadow-md'
                    : 'bg-n50 dark:bg-navy/50 border-n100 dark:border-navy-light opacity-35 cursor-default'
                }`}
                style={isRelevant ? { borderColor: activeColor + (isSelected ? 'ff' : '60') } : undefined}
              >
                <div className={`flex justify-center mb-2 transition-transform ${isRelevant ? '' : 'opacity-40'}`}>
                  {tp.icon(isRelevant ? activeColor : '#A8A8C0')}
                </div>
                <p className={`text-xs font-heading font-semibold leading-tight ${
                  isRelevant ? 'text-navy dark:text-white' : 'text-n400 dark:text-n500'
                }`}>
                  {tp.label}
                </p>
                {isRelevant && (
                  <div className="w-2 h-2 rounded-full mx-auto mt-2 transition-transform" style={{ backgroundColor: activeColor, transform: isSelected ? 'scale(1.5)' : undefined }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected touchpoint explanation panel */}
        {selectedTp && selectedExplanation && (
          <div className="mt-4 rounded-lg border-2 p-4" style={{ borderColor: activeColor + '40', backgroundColor: activeColor + '08' }}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">{selectedTp.icon(activeColor)}</div>
              <div className="flex-1">
                <p className="font-heading font-bold text-sm mb-1" style={{ color: activeColor }}>{selectedTp.label}</p>
                <p className="text-sm text-n700 dark:text-n300 leading-relaxed">{selectedExplanation}</p>
              </div>
              <button onClick={() => setSelectedTouchpoint(null)} className="flex-shrink-0 text-n400 hover:text-n700 dark:hover:text-n200 ml-auto" aria-label="Close">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
          </div>
        )}

        {/* Stage description */}
        <div className="mt-6 p-4 rounded-lg border border-n100 dark:border-navy-light bg-n50 dark:bg-navy-dark">
          {activeStage === 'awareness' && <p className="text-sm text-n700 dark:text-n300"><strong className="text-navy dark:text-white">Awareness:</strong> Playbook appears as a companion brand — game education, odds explainers, how-to-play content. The player hasn't signed up yet, so the goal is to make gambling less intimidating and position Playbook as a product feature, not a compliance section.</p>}
          {activeStage === 'new-player' && <p className="text-sm text-n700 dark:text-n300"><strong className="text-navy dark:text-white">New Player:</strong> Now that they know the basics, introduce myth-busting — cognitive distortions like "I'm due for a win." Education builds gambling resilience indirectly. No tools yet, no limit-pushing. Just helpful content.</p>}
          {activeStage === 'active' && <p className="text-sm text-n700 dark:text-n300"><strong className="text-navy dark:text-white">Active Player:</strong> The content peaks here — game guides, articles, quizzes, content hub. The player is engaged enough to want more. This is where education has the most surface area.</p>}
          {activeStage === 'regular' && <p className="text-sm text-n700 dark:text-n300"><strong className="text-navy dark:text-white">Regular:</strong> Now — and only now — introduce self-management tools. Activity dashboards, budgets, limits arrive as product features, not interventions. The relationship has earned this moment.</p>}
          {activeStage === 'support' && <p className="text-sm text-n700 dark:text-n300"><strong className="text-navy dark:text-white">Support Seeking:</strong> Tier 2 content. Direct path to help — no friction, no forms, no marketing. The brand steps back. This can happen at any stage; the touchpoints are always accessible.</p>}
        </div>

        <p className="text-xs text-n500 dark:text-n300 mt-4 italic">Tap or hover on lit touchpoints to see why they activate at each stage. Greyed-out touchpoints aren't relevant — content escalation means not everything is on at once.</p>
      </div>
    </div>
  );
}
