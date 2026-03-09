import { useState, useMemo, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { iconCategories } from '../data/slideContent';
import { Search } from 'lucide-react';

const BASE = import.meta.env.BASE_URL || '/';

// All 31 icon filenames
const allIcons = [
  { name: 'cards', category: 'Game Types' },
  { name: 'dice', category: 'Game Types' },
  { name: 'roulette', category: 'Game Types' },
  { name: 'slots', category: 'Game Types' },
  { name: 'sports', category: 'Game Types' },
  { name: 'lottery', category: 'Game Types' },
  { name: 'table', category: 'Game Types' },
  { name: 'percentage', category: 'Odds & Math' },
  { name: 'edge', category: 'Odds & Math' },
  { name: 'rng', category: 'Odds & Math' },
  { name: 'equal', category: 'Odds & Math' },
  { name: 'timer', category: 'Player Tools' },
  { name: 'limit', category: 'Player Tools' },
  { name: 'budget', category: 'Player Tools' },
  { name: 'bell', category: 'Player Tools' },
  { name: 'history', category: 'Player Tools' },
  { name: 'check', category: 'Player Tools' },
  { name: 'activity', category: 'Player Tools' },
  { name: 'quiz', category: 'Content & Education' },
  { name: 'myth', category: 'Content & Education' },
  { name: 'fact', category: 'Content & Education' },
  { name: 'info', category: 'Content & Education' },
  { name: 'share', category: 'Social & Sharing' },
  { name: 'challenge', category: 'Social & Sharing' },
  { name: 'score', category: 'Social & Sharing' },
  { name: 'qr', category: 'Social & Sharing' },
  { name: 'phone', category: 'Support & Safety' },
  { name: 'warning', category: 'Support & Safety' },
  { name: 'help', category: 'Support & Safety' },
  { name: 'external', category: 'Support & Safety' },
  { name: 'playbook', category: 'Support & Safety' },
];

const categories = ['All', ...iconCategories.map(c => c.name)];

const brandColors = [
  { name: 'White', value: '#FFFFFF', class: 'bg-white border-white/30' },
  { name: 'Teal', value: '#00D4AA', class: 'bg-teal border-teal/30' },
  { name: 'Orange', value: '#FF6B35', class: 'bg-orange border-orange/30' },
  { name: 'Navy Light', value: '#2A3F56', class: 'bg-navy-light border-white/20' },
];

// Component to fetch and render SVG inline for color control
function InlineIcon({ name, color }) {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${BASE}assets/icons/icon-${name}.svg`)
      .then(r => r.text())
      .then(text => {
        if (!cancelled) setSvgContent(text);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [name]);

  if (!svgContent) {
    // Fallback: show img tag while loading
    return (
      <img
        src={`${BASE}assets/icons/icon-${name}.svg`}
        alt={name}
        className="w-6 h-6"
        style={{ filter: color !== '#FFFFFF' ? undefined : undefined }}
      />
    );
  }

  // Inject the SVG as inline HTML with color applied via style
  return (
    <div
      className="w-6 h-6 flex items-center justify-center"
      style={{ color }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      aria-hidden="true"
    />
  );
}

export default function IconSection() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeColor, setActiveColor] = useState('#FFFFFF');

  const filtered = useMemo(() => {
    return allIcons.filter(icon => {
      const matchesSearch = !search || icon.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || icon.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Visual Identity"
        title="Icon"
        titleAccent="System"
        subtitle="31 custom icons across 6 categories. 24&times;24px canvas, 2px primary stroke, 1px detail stroke. Click any icon to download."
      />

      {/* Search + filter */}
      <ScrollReveal className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-n500" aria-hidden="true" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search icons..."
              aria-label="Search icons by name"
              className="w-full bg-white/[0.04] border border-white/10 rounded-lg pl-9 pr-4 py-2.5
                font-body text-sm text-n300 placeholder:text-n500
                focus:outline-none focus:ring-2 focus:ring-teal/50"
            />
          </div>
          <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-3 py-2 rounded-lg font-heading text-[11px] font-bold transition-colors whitespace-nowrap
                  ${activeCategory === cat
                    ? 'bg-teal text-navy'
                    : 'bg-white/[0.06] text-n300 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Color selector */}
      <ScrollReveal className="mb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-n300 uppercase tracking-wider">Preview color</span>
          <div className="flex gap-2" role="radiogroup" aria-label="Icon preview color">
            {brandColors.map((c) => (
              <button
                key={c.name}
                onClick={() => setActiveColor(c.value)}
                role="radio"
                aria-checked={activeColor === c.value}
                aria-label={c.name}
                className={`w-7 h-7 rounded-full border-2 transition-all duration-150
                  ${c.class}
                  ${activeColor === c.value
                    ? 'ring-2 ring-offset-2 ring-offset-navy scale-110'
                    : 'opacity-60 hover:opacity-100'}`}
                style={activeColor === c.value ? { ringColor: c.value } : undefined}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Icon grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3" role="list" aria-label="Icon gallery">
        {filtered.map((icon) => (
          <a
            key={icon.name}
            href={`${BASE}assets/icons/icon-${icon.name}.svg`}
            download={`icon-${icon.name}.svg`}
            role="listitem"
            className="group rounded-xl border border-white/[0.06] bg-white/[0.02]
              hover:border-teal/30 hover:bg-teal/[0.04] transition-all duration-200
              p-4 flex flex-col items-center gap-2"
            aria-label={`Download ${icon.name} icon`}
          >
            <InlineIcon name={icon.name} color={activeColor} />
            <span className="font-mono text-[9px] text-n500 group-hover:text-n300 transition-colors truncate w-full text-center">
              {icon.name}
            </span>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-n300 font-body text-sm py-12" role="status">No icons match your search.</p>
      )}

      {/* Specs */}
      <ScrollReveal className="mt-12">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold text-white mb-4">Icon Specifications</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Canvas', value: '24 × 24px' },
              { label: 'Primary stroke', value: '2px' },
              { label: 'Detail stroke', value: '1px' },
              { label: 'Color', value: 'currentColor' },
            ].map((spec, i) => (
              <div key={i}>
                <p className="font-mono text-[10px] text-n500 uppercase">{spec.label}</p>
                <p className="font-heading text-sm font-bold text-white mt-1">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
