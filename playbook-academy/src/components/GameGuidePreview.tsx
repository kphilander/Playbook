import { useState, useEffect } from 'react';

const GAMES = [
  { id: 'slots', label: 'Slots' },
  { id: 'blackjack', label: 'Blackjack' },
  { id: 'roulette', label: 'Roulette' },
  { id: 'sports-betting', label: 'Sports Betting' },
  { id: 'craps', label: 'Craps' },
  { id: 'video-poker', label: 'Video Poker' },
  { id: 'baccarat', label: 'Baccarat' },
];

function GameIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" fill={color} fillOpacity=".08" />
      <path d="M8 21h8" /><path d="M12 17v4" />
      <path d="M7 8l3 3 2-2 5 5" opacity=".6" />
    </svg>
  );
}

export default function GameGuidePreview() {
  const [activeGame, setActiveGame] = useState('slots');
  const [loaded, setLoaded] = useState(false);

  // Relative path works in production (same origin); dev falls back to prod URL
  const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  const src = isDev
    ? `https://gamblingpolicy.com/tools/playbook/games/${activeGame}.html`
    : `/tools/playbook/games/${activeGame}.html`;

  // Fallback: hide spinner after 3s even if onLoad doesn't fire (cross-origin)
  useEffect(() => {
    setLoaded(false);
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, [activeGame]);

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white dark:bg-navy dark:border-navy-light shadow-sm overflow-hidden">
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Live Preview</span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">How-to-Play Game Guides</h3>
        <p className="text-n300 text-sm mt-1">
          These are the guides players see at the Awareness stage — select a game to preview
        </p>
      </div>

      <div className="p-4 sm:p-5">
        {/* Game selector */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {GAMES.map((g) => (
            <button
              key={g.id}
              onClick={() => { setActiveGame(g.id); setLoaded(false); }}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-heading font-semibold rounded-lg transition-all border ${
                activeGame === g.id
                  ? 'bg-teal/10 text-teal-dark border-teal/30 dark:bg-teal/20 dark:text-teal'
                  : 'bg-white dark:bg-navy-dark text-n500 dark:text-n400 border-n200 dark:border-navy-light hover:border-n300 hover:text-n700'
              }`}
            >
              <GameIcon color={activeGame === g.id ? '#00D4AA' : '#A8A8C0'} />
              {g.label}
            </button>
          ))}
        </div>

        {/* iframe container */}
        <div className="relative rounded-lg border border-n200 dark:border-navy-light overflow-hidden bg-white" style={{ height: 520 }}>
          {/* Loading state */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-n50 dark:bg-navy-dark z-10">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-teal border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-xs font-heading text-n500 dark:text-n400">Loading {GAMES.find(g => g.id === activeGame)?.label} guide...</p>
              </div>
            </div>
          )}
          <iframe
            key={activeGame}
            src={src}
            title={`${GAMES.find(g => g.id === activeGame)?.label} game guide`}
            className="w-full h-full border-0"
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>

        {/* Open full link */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-n500 dark:text-n400 italic">
            This is the actual guide players see — interactive, mobile-friendly, no login required.
          </p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-heading font-semibold text-teal hover:text-teal-dark transition-colors whitespace-nowrap ml-3"
          >
            Open full page →
          </a>
        </div>
      </div>
    </div>
  );
}
