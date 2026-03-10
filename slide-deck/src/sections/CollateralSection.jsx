import { useState, useEffect, useCallback } from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { digitalTouchpoints, printFormats, campaigns } from '../data/slideContent';
import { X } from 'lucide-react';

const BASE = import.meta.env.BASE_URL || '/';

function Lightbox({ item, onClose }) {
  // Close on Escape key
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (!item) return;
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [item, handleKey]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} — full size preview`}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        autoFocus
        className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center
          text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Close preview"
      >
        <X size={20} />
      </button>
      <img
        src={`${BASE}assets/collateral/${item.file}`}
        alt={item.name}
        className="max-w-full max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-navy/90 backdrop-blur
        rounded-lg px-4 py-2 text-center" aria-live="polite">
        <p className="font-heading text-sm font-bold text-white">{item.name}</p>
        <p className="font-mono text-[10px] text-n300">{item.category}</p>
      </div>
    </div>
  );
}

const collateralItems = [
  // Campaign cards
  { file: 'card-1a-hot-streak.png', name: 'Hot Streak Myth', category: 'campaign' },
  { file: 'card-1b-due-for-win.png', name: 'Due for a Win', category: 'campaign' },
  { file: 'card-1c-lucky-machine.png', name: 'Lucky Machine', category: 'campaign' },
  { file: 'card-2a-house-edge.png', name: 'House Edge', category: 'campaign' },
  { file: 'card-2b-sports-betting.png', name: 'Sports Betting', category: 'campaign' },
  { file: 'card-2c-bonus-wagering.png', name: 'Bonus Wagering', category: 'campaign' },
  // Posters
  { file: 'poster-4a-know-your-game.png', name: 'Know Your Game', category: 'poster' },
  { file: 'poster-4b-no-fine-print.png', name: 'No Fine Print', category: 'poster' },
  { file: 'poster-4c-game-iq.png', name: 'Game IQ', category: 'poster' },
  { file: 'poster-tier2-10g.png', name: 'Tier 2 Poster', category: 'poster' },
  // Social stories
  { file: 'story-3a-hot-streak.png', name: 'Hot Streak Story', category: 'social' },
  { file: 'story-3b-house-edge.png', name: 'House Edge Story', category: 'social' },
  { file: 'story-3c-sports-betting.png', name: 'Sports Betting Story', category: 'social' },
  // Print
  { file: 'brochure-cover-8b.png', name: 'Brochure Cover', category: 'print' },
  { file: 'brochure-trifold-8a.png', name: 'Trifold Brochure', category: 'print' },
  { file: 'rack-card-5a.png', name: 'Rack Card', category: 'print' },
  { file: 'table-tent-5b.png', name: 'Table Tent', category: 'print' },
  { file: 'helpline-card-5c.png', name: 'Helpline Card', category: 'print' },
  // Signage
  { file: 'sign-entrance-9a.png', name: 'Entrance Sign', category: 'signage' },
  { file: 'sign-atm-9b.png', name: 'ATM Sign', category: 'signage' },
  { file: 'sign-floor-9c.png', name: 'Floor Sign', category: 'signage' },
  { file: 'sign-restroom-9d.png', name: 'Restroom Sign', category: 'signage' },
  { file: 'sign-staff-9e.png', name: 'Staff Sign', category: 'signage' },
  // Display
  { file: 'display-landscape-6a.png', name: 'Landscape Display', category: 'digital' },
  { file: 'display-portrait-6b.png', name: 'Portrait Display', category: 'digital' },
  // Email
  { file: 'email-welcome-7a.png', name: 'Welcome Email', category: 'email' },
  { file: 'email-deposit-7b.png', name: 'Deposit Email', category: 'email' },
  { file: 'email-monthly-7c.png', name: 'Monthly Summary', category: 'email' },
  { file: 'email-reactivation-7d.png', name: 'Reactivation Email', category: 'email' },
  { file: 'email-support-10h.png', name: 'Support Email', category: 'email' },
  // Player tools
  { file: 'support-page-10a.png', name: 'Support Page', category: 'player-tools' },
  { file: 'self-exclusion-10b.png', name: 'Self-Exclusion', category: 'player-tools' },
  { file: 'session-summary-10c.png', name: 'Session Summary', category: 'player-tools' },
  { file: 'limit-reached-10d.png', name: 'Limit Reached', category: 'player-tools' },
  { file: 'cooldown-10e.png', name: 'Cooldown', category: 'player-tools' },
  { file: 'card-tier2-10f.png', name: 'Tier 2 Card', category: 'player-tools' },
  // HTP cards
  { file: 'htp-card-baccarat.png', name: 'Baccarat HTP', category: 'htp' },
  { file: 'htp-card-blackjack.png', name: 'Blackjack HTP', category: 'htp' },
  { file: 'htp-card-craps.png', name: 'Craps HTP', category: 'htp' },
  { file: 'htp-card-roulette.png', name: 'Roulette HTP', category: 'htp' },
  { file: 'htp-card-slots.png', name: 'Slots HTP', category: 'htp' },
  { file: 'htp-card-sports.png', name: 'Sports HTP', category: 'htp' },
  { file: 'htp-card-video-poker.png', name: 'Video Poker HTP', category: 'htp' },
  { file: 'htp-odds-comparison.png', name: 'Odds Comparison', category: 'htp' },
];

const filterTabs = [
  { key: 'all', label: 'All' },
  { key: 'campaign', label: 'Campaign' },
  { key: 'poster', label: 'Posters' },
  { key: 'social', label: 'Social' },
  { key: 'print', label: 'Print' },
  { key: 'signage', label: 'Signage' },
  { key: 'digital', label: 'Digital' },
  { key: 'email', label: 'Email' },
  { key: 'player-tools', label: 'Player Tools' },
  { key: 'htp', label: 'How to Play' },
];

export default function CollateralSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filtered = activeFilter === 'all'
    ? collateralItems
    : collateralItems.filter(item => item.category === activeFilter);

  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Collateral"
        title="44 deployable"
        titleAccent="templates"
        subtitle="Campaign cards, posters, signage, email templates, player tools, and how-to-play guides. Click any item to view full-size."
      />

      {/* Digital touchpoints */}
      <ScrollReveal className="mb-16">
        <h3 className="font-heading text-lg font-bold text-white mb-6">Digital Touchpoints</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {digitalTouchpoints.map((d, i) => (
            <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <h4 className="font-heading text-sm font-bold text-teal mb-2">{d.channel}</h4>
              <p className="font-body text-xs text-n300 leading-relaxed">{d.integration}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Campaigns */}
      <ScrollReveal className="mb-16">
        <h3 className="font-heading text-lg font-bold text-white mb-6">Campaign Library</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {campaigns.map((c, i) => (
            <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <h4 className="font-heading text-sm font-bold text-white mb-1">{c.name}</h4>
              <div className="flex gap-2 mb-2">
                <span className="font-mono text-[10px] text-teal">{c.duration}</span>
                <span className="text-n500">&bull;</span>
                <span className="font-mono text-[10px] text-n300">{c.posts} posts</span>
              </div>
              <p className="font-body text-xs text-n300 leading-relaxed mb-2">{c.desc}</p>
              <p className="font-mono text-[10px] text-n500">{c.channels}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Collateral gallery */}
      <ScrollReveal>
        <h3 className="font-heading text-lg font-bold text-white mb-6">Template Gallery</h3>
      </ScrollReveal>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-3 py-2 rounded-lg font-heading text-[11px] font-bold transition-colors whitespace-nowrap
              ${activeFilter === tab.key
                ? 'bg-teal text-navy'
                : 'bg-white/[0.06] text-n300 hover:text-white'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((item) => (
          <button
            key={item.file}
            onClick={() => setLightboxItem(item)}
            className="group rounded-xl border border-white/[0.06] overflow-hidden
              hover:border-teal/30 transition-all duration-200 text-left"
          >
            <div className="aspect-[4/3] bg-navy-light overflow-hidden">
              <img
                src={`${BASE}assets/collateral/${item.file}`}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="px-3 py-2 bg-white/[0.02]">
              <p className="font-heading text-[11px] font-medium text-n300 truncate">{item.name}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox (accessible modal) */}
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
}
