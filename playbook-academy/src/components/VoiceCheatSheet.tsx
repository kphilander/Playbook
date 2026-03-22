import { useState, useEffect } from 'react';
import { getProgress } from '../lib/progress';

const TOP_SWAPS = [
  { avoid: 'Problem gambler', prefer: 'Player' },
  { avoid: 'Responsible gambling', prefer: 'Set a budget / Know the odds' },
  { avoid: 'Gambler', prefer: 'Player' },
  { avoid: 'Gambling addiction', prefer: 'Difficulty with gambling' },
  { avoid: 'Self-exclude', prefer: 'Take a break / Pause your account' },
  { avoid: 'Intervention', prefer: 'Feature / Tool' },
  { avoid: 'Reality check', prefer: 'Session reminder' },
  { avoid: 'You should', prefer: 'You can' },
  { avoid: 'WARNING', prefer: 'Heads up' },
  { avoid: 'Odds are against you', prefer: 'House edge is [number]' },
];

export default function VoiceCheatSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const checkProgress = () => {
      const progress = getProgress();
      const m2 = progress['3-voice-and-tone'];
      setIsUnlocked(m2?.completed === true);
    };
    checkProgress();
    window.addEventListener('progress-updated', checkProgress);
    return () => window.removeEventListener('progress-updated', checkProgress);
  }, []);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-navy text-white rounded-xl shadow-lg hover:bg-navy-light transition-all font-heading font-semibold text-sm"
        aria-label="Open Voice Guide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Voice Guide
      </button>

      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel header */}
        <div className="sticky top-0 bg-navy px-5 py-4 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
              Quick Reference
            </span>
            <h3 className="text-white font-heading font-bold text-lg mt-0.5">Voice Guide</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-light text-white/60 hover:text-white transition-colors"
            aria-label="Close panel"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!isUnlocked ? (
          /* Locked state */
          <div className="p-6 text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-n100 mb-4">
              <svg className="w-8 h-8 text-n400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h4 className="font-heading font-bold text-navy text-lg mb-2">
              Complete Module 3 to unlock this guide
            </h4>
            <p className="text-n500 text-sm leading-relaxed">
              Pass the Knowledge Check at the end of Voice & Tone to unlock the full quick-reference panel.
            </p>
          </div>
        ) : (
          /* Unlocked content */
          <div className="p-5 space-y-6">
            {/* Section 1: The Voice */}
            <div>
              <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center text-xs font-bold text-teal-dark">
                  1
                </span>
                The Voice
              </h4>
              <div className="rounded-lg bg-teal/5 border border-teal/15 p-4">
                <p className="text-sm text-n800 font-semibold mb-2">
                  At the table, not in the booth.
                </p>
                <ul className="text-sm text-n700 space-y-1">
                  <li>Knowledgeable — knows the math, shares it plainly</li>
                  <li>Confident — doesn't hedge, doesn't apologize</li>
                  <li>Generous — shares because you should have it</li>
                  <li>Corrects without judgment — the math matters, not the messenger</li>
                </ul>
              </div>
            </div>

            {/* Section 2: Personality Pairs */}
            <div>
              <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center text-xs font-bold text-teal-dark">
                  2
                </span>
                Personality Pairs
              </h4>
              <div className="space-y-3">
                <div className="rounded-lg border border-n100 p-3">
                  <p className="text-sm font-heading font-semibold text-navy">Witty / Not Preachy</p>
                  <p className="text-xs text-n600 mt-1">
                    "The house has a system too. It's called math."
                  </p>
                </div>
                <div className="rounded-lg border border-n100 p-3">
                  <p className="text-sm font-heading font-semibold text-navy">Confident / Not Condescending</p>
                  <p className="text-xs text-n600 mt-1">
                    "Here's how it works" not "Many players don't realize..."
                  </p>
                </div>
                <div className="rounded-lg border border-n100 p-3">
                  <p className="text-sm font-heading font-semibold text-navy">Sharp / Not Clinical</p>
                  <p className="text-xs text-n600 mt-1">
                    "House edge is 5.26%" not "Negative expected value of wagering behavior"
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Tone Quick Reference */}
            <div>
              <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center text-xs font-bold text-teal-dark">
                  3
                </span>
                Tone Registers
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange mt-1.5" />
                  <p className="text-sm text-n700">
                    <strong className="text-navy">Playful/Witty</strong> — Myth-busting, quizzes, social hooks
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-teal mt-1.5" />
                  <p className="text-sm text-n700">
                    <strong className="text-navy">Confident/Informative</strong> — Odds, tools, how-it-works
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-success mt-1.5" />
                  <p className="text-sm text-n700">
                    <strong className="text-navy">Warm/Direct</strong> — Support, check-ins, at-risk moments
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#D4A017] mt-1.5" />
                  <p className="text-sm text-n700">
                    <strong className="text-navy">Celebratory</strong> — Achievements, quiz results, milestones
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Top 10 Swaps */}
            <div>
              <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center text-xs font-bold text-teal-dark">
                  4
                </span>
                Top 10 Stigma-Free Swaps
              </h4>
              <div className="rounded-lg border border-n100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-n50">
                      <th className="text-left px-3 py-2 font-heading font-semibold text-warning text-xs uppercase tracking-wider">
                        Avoid
                      </th>
                      <th className="text-left px-3 py-2 font-heading font-semibold text-success text-xs uppercase tracking-wider">
                        Prefer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TOP_SWAPS.map((swap, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-n50/50'}>
                        <td className="px-3 py-2 text-n600 line-through decoration-warning/40">
                          {swap.avoid}
                        </td>
                        <td className="px-3 py-2 text-n800 font-semibold">{swap.prefer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
