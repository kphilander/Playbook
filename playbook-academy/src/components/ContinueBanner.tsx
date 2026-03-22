import { useState, useEffect } from 'react';
import { getContinuePoint, getCompletionPercentage, getProgress } from '../lib/progress';

const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '');

export default function ContinueBanner() {
  const [continuePoint, setContinuePoint] = useState<ReturnType<typeof getContinuePoint>>(null);
  const [hasProgress, setHasProgress] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const progress = getProgress();
    const hasAny = Object.keys(progress).length > 0;
    setHasProgress(hasAny);

    if (hasAny) {
      const cp = getContinuePoint();
      setContinuePoint(cp);
    }

    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6 animate-pulse">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-white/10 rounded w-32" />
            <div className="h-5 bg-white/10 rounded w-56" />
          </div>
          <div className="w-5 h-5 bg-white/10 rounded shrink-0" />
        </div>
      </div>
    );
  }

  // Returning user with a continue point
  if (hasProgress && continuePoint) {
    return (
      <div className="bg-teal/10 border border-teal/20 rounded-xl p-5 mb-6">
        <a
          href={`${base}/modules/${continuePoint.moduleId}`}
          className="flex items-center gap-3 group"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal text-navy shrink-0">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-teal font-heading">Pick up where you left off</p>
            <p className="text-white font-heading font-bold group-hover:text-teal-light transition-colors truncate">
              {continuePoint.moduleTitle}: {continuePoint.lessonTitle}
            </p>
          </div>
          <svg className="w-5 h-5 text-teal group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    );
  }

  // Returning user who completed everything
  if (hasProgress && !continuePoint) {
    return (
      <div className="bg-teal/10 border border-teal/20 rounded-xl p-5 mb-6 text-center">
        <p className="text-white font-heading font-bold">You've completed all modules. Nice work.</p>
        <p className="text-sm text-n300 mt-1">
          Ready to put it all together?{' '}
          <a href={`${base}/capstone/`} className="text-teal font-semibold hover:underline">Build your MVP plan</a>
          {' '}or{' '}
          <a href={`${base}/certificate/`} className="text-teal font-semibold hover:underline">claim your certificate</a>.
        </p>
      </div>
    );
  }

  // First-time visitor — no progress (shown on navy background)
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6 text-center">
      <p className="text-white font-heading font-bold text-lg mb-2">
        Welcome to Playbook Academy
      </p>
      <p className="text-n300 text-sm max-w-xl mx-auto mb-4">
        You're about to learn how to deploy the open-source brand system for gambling entertainment literacy. Start with the 30-minute intro deck, or jump straight into Module 1.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={`${base}/intro/`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-teal text-navy font-heading font-bold rounded-lg hover:bg-teal-light transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          Watch the intro
        </a>
        <a
          href={`${base}/modules/1-rg-foundations`}
          className="inline-flex items-center justify-center px-5 py-2.5 border border-white/20 text-white font-heading font-semibold rounded-lg hover:border-white/40 transition-colors text-sm"
        >
          Jump to Module 1
        </a>
      </div>
    </div>
  );
}
