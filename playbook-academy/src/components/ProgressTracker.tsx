import { useState, useEffect } from 'react';
import { getProgress, getCompletionPercentage, type ModuleProgress } from '../lib/progress';

const MODULES = [
  { id: 'intro', name: 'Intro Deck', icon: '▶' },
  { id: '1-rg-foundations', name: 'RG Foundations', icon: '1' },
  { id: '2-visual-identity', name: 'Visual Identity', icon: '2' },
  { id: '3-voice-and-tone', name: 'Voice & Tone', icon: '3' },
  { id: '4-player-segmentation', name: 'Segmentation', icon: '4' },
  { id: '5-customer-journey', name: 'Journey', icon: '5' },
  { id: '6-measuring-success', name: 'Measuring', icon: '6' },
];

export default function ProgressTracker() {
  const [progress, setProgress] = useState<Record<string, ModuleProgress>>({});
  const [percentage, setPercentage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const update = () => {
      setProgress(getProgress());
      setPercentage(getCompletionPercentage());
    };
    update();
    setLoaded(true);
    window.addEventListener('progress-updated', update);
    return () => window.removeEventListener('progress-updated', update);
  }, []);

  // Show skeleton while loading (on navy background)
  if (!loaded) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 bg-white/10 rounded w-28" />
          <div className="h-4 bg-white/10 rounded w-16" />
        </div>
        <div className="h-2 bg-white/10 rounded-full mb-6" />
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/10" />
              <div className="h-3 bg-white/10 rounded w-16 hidden sm:block" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Don't show if nothing started
  const hasAnyProgress = Object.keys(progress).length > 0;
  if (!hasAnyProgress) return null;

  // Milestone text
  const milestoneText = percentage === 100
    ? 'All modules complete. Time for the capstone.'
    : percentage >= 75
    ? 'Home stretch. You\'re almost there.'
    : percentage >= 50
    ? 'Halfway through. Solid momentum.'
    : percentage >= 25
    ? 'Quarter done. Keep it going.'
    : null;

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-semibold text-white">Your progress</h3>
        <span className="text-sm text-n300 font-heading">{percentage}% through</span>
      </div>

      {/* Overall progress bar */}
      <div className="h-2 bg-white/10 rounded-full mb-3 overflow-hidden">
        <div
          className="h-full bg-teal rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Milestone text */}
      {milestoneText && (
        <p className="text-xs text-teal font-heading font-medium mb-4">{milestoneText}</p>
      )}

      {/* Module status dots */}
      <div className="flex flex-wrap gap-3">
        {MODULES.map(mod => {
          const p = progress[mod.id];
          const status = p?.completed ? 'completed' : p ? 'in-progress' : 'not-started';

          return (
            <div key={mod.id} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-heading font-bold ${
                status === 'completed' ? 'bg-success text-white' :
                status === 'in-progress' ? 'bg-teal text-navy' :
                'bg-white/10 text-n300'
              }`}>
                {status === 'completed' ? '✓' : mod.icon}
              </div>
              <span className={`text-xs hidden sm:inline ${
                status === 'completed' ? 'text-success' :
                status === 'in-progress' ? 'text-white font-medium' :
                'text-n300'
              }`}>
                {mod.name}
                {p?.quizScore !== null && p?.quizScore !== undefined && (
                  <span className="ml-1 text-n500">({p.quizScore}%)</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
