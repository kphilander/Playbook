import { useState, useMemo } from 'react';
import myths from '../data/myths.json';

type Vertical = 'All' | 'Casino' | 'Sports' | 'Lottery';
type FormatTab = 'social' | 'article' | 'quiz';

const VERTICALS: Vertical[] = ['All', 'Casino', 'Sports', 'Lottery'];

const VERTICAL_COLORS: Record<string, string> = {
  Casino: 'bg-orange/10 text-orange border-orange/20',
  Sports: 'bg-teal/10 text-teal-dark border-teal/20',
  Lottery: 'bg-navy/10 text-navy border-navy/20',
};

const FORMAT_LABELS: Record<FormatTab, { label: string; icon: string }> = {
  social: { label: 'Social Card', icon: 'S' },
  article: { label: 'Article', icon: 'A' },
  quiz: { label: 'Quiz', icon: 'Q' },
};

// Unique distortion types for filter chips
const DISTORTION_TYPES = [...new Set(myths.map((m) => m.distortion))].sort();

export default function MythBrowser() {
  const [activeVertical, setActiveVertical] = useState<Vertical>('All');
  const [activeDistortion, setActiveDistortion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showDistortion, setShowDistortion] = useState<Record<string, boolean>>({});
  const [activeFormat, setActiveFormat] = useState<Record<string, FormatTab>>({});

  const filteredMyths = useMemo(() => {
    let filtered = myths;

    if (activeVertical !== 'All') {
      filtered = filtered.filter((m) => m.vertical === activeVertical);
    }

    if (activeDistortion) {
      filtered = filtered.filter((m) => m.distortion === activeDistortion);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (m) =>
          m.myth.toLowerCase().includes(q) ||
          m.truth.toLowerCase().includes(q) ||
          m.distortion.toLowerCase().includes(q) ||
          m.formats.social.toLowerCase().includes(q) ||
          m.formats.article.toLowerCase().includes(q) ||
          m.formats.quiz.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [activeVertical, activeDistortion, searchQuery]);

  const getFormat = (mythId: string): FormatTab => activeFormat[mythId] || 'social';

  const setFormat = (mythId: string, format: FormatTab) => {
    setActiveFormat((prev) => ({ ...prev, [mythId]: format }));
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleDistortionDetail = (id: string) => {
    setShowDistortion((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white dark:bg-navy dark:border-navy-light shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Reference Tool
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">Myth-Busting Library</h3>
        <p className="text-n300 text-sm mt-1">
          Researched myths across Casino, Sports, and Lottery — each with cognitive distortion context and multiple content formats
        </p>
      </div>

      <div className="p-5 sm:p-6">
        {/* Vertical filter tabs */}
        <div className="flex flex-wrap gap-2 mb-3">
          {VERTICALS.map((v) => {
            const count =
              v === 'All'
                ? myths.filter((m) => !activeDistortion || m.distortion === activeDistortion).length
                : myths.filter((m) => m.vertical === v && (!activeDistortion || m.distortion === activeDistortion)).length;
            return (
              <button
                key={v}
                onClick={() => setActiveVertical(v)}
                className={`px-4 py-2 text-sm font-heading font-semibold rounded-lg transition-all ${
                  activeVertical === v
                    ? 'bg-navy text-white dark:bg-teal dark:text-navy'
                    : 'bg-n50 dark:bg-navy-dark text-n700 dark:text-n300 hover:bg-n100 dark:hover:bg-navy-light'
                }`}
              >
                {v}
                <span className="ml-1.5 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Cognitive distortion filter */}
        <div className="mb-4">
          <p className="text-xs font-heading font-bold uppercase tracking-wider text-n500 dark:text-n300 mb-2">
            Filter by cognitive distortion
          </p>
          <div className="flex flex-wrap gap-1.5">
            {DISTORTION_TYPES.map((d) => {
              const isActive = activeDistortion === d;
              return (
                <button
                  key={d}
                  onClick={() => setActiveDistortion(isActive ? null : d)}
                  className={`px-3 py-1.5 text-xs font-heading font-semibold rounded-full transition-all border ${
                    isActive
                      ? 'bg-orange/10 text-orange border-orange/30 dark:bg-orange/20'
                      : 'bg-white dark:bg-navy-dark text-n500 dark:text-n400 border-n200 dark:border-navy-light hover:border-n300 hover:text-n700'
                  }`}
                >
                  {d}
                </button>
              );
            })}
            {activeDistortion && (
              <button
                onClick={() => setActiveDistortion(null)}
                className="px-3 py-1.5 text-xs font-heading font-semibold rounded-full text-n400 hover:text-n700 dark:hover:text-n200 transition-colors underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-n400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search myths, truths, distortions, or content..."
            className="w-full pl-10 pr-4 py-2.5 border border-n200 dark:border-navy-light rounded-lg text-sm bg-white dark:bg-navy-dark text-n900 dark:text-white placeholder:text-n400 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-n400 hover:text-n700 transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-xs font-heading font-semibold text-n500 dark:text-n300 mb-4">
          Showing {filteredMyths.length} of {myths.length} myths
          {activeDistortion && <span className="text-orange ml-1">— {activeDistortion}</span>}
        </p>

        {/* Myth cards */}
        <div className="space-y-3">
          {filteredMyths.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-n500 text-sm">No myths match your filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveVertical('All');
                  setActiveDistortion(null);
                }}
                className="mt-2 text-sm text-teal hover:text-teal-dark transition-colors underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredMyths.map((myth) => {
              const isExpanded = expandedId === myth.id;
              const currentFormat = getFormat(myth.id);
              const distortionOpen = showDistortion[myth.id] ?? false;

              return (
                <div
                  key={myth.id}
                  className={`rounded-lg border overflow-hidden transition-all ${
                    isExpanded
                      ? 'border-navy/20 dark:border-navy-light shadow-sm'
                      : 'border-n100 dark:border-navy-light/50'
                  }`}
                >
                  {/* Card header */}
                  <button
                    onClick={() => toggleExpand(myth.id)}
                    className="w-full text-left p-4 flex items-start gap-3 hover:bg-n50/50 dark:hover:bg-navy-dark/50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5 flex flex-col gap-1.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-heading font-semibold border ${
                          VERTICAL_COLORS[myth.vertical] || ''
                        }`}
                      >
                        {myth.vertical}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading font-semibold text-navy dark:text-white text-[0.95rem] leading-snug">
                        &ldquo;{myth.myth}&rdquo;
                      </p>
                      <p className="text-xs text-orange font-heading font-semibold mt-1.5">
                        {myth.distortion}
                      </p>
                    </div>
                    <svg
                      className={`w-5 h-5 text-n400 flex-shrink-0 mt-0.5 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="px-4 pb-3 border-t border-n100 dark:border-navy-light">
                      {/* Truth */}
                      <div className="mt-3 mb-2.5">
                        <span className="text-xs font-heading font-bold uppercase tracking-wider text-success mb-1 block">
                          The Reality
                        </span>
                        <p className="text-n700 dark:text-n300 text-sm leading-relaxed">{myth.truth}</p>
                      </div>

                      {/* Cognitive distortion — collapsible */}
                      <div className="mb-2.5">
                        <button
                          onClick={() => toggleDistortionDetail(myth.id)}
                          className="flex items-center gap-2 text-left group w-full"
                        >
                          <svg
                            className={`w-4 h-4 text-orange flex-shrink-0 transition-transform ${distortionOpen ? 'rotate-90' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-xs font-heading font-bold uppercase tracking-wider text-orange">
                            Why it works: {myth.distortion}
                          </span>
                        </button>
                        {distortionOpen && (
                          <div className="mt-2 ml-6 p-3 rounded-lg bg-orange/5 dark:bg-orange/10 border border-orange/15">
                            <p className="text-sm text-n700 dark:text-n300 leading-relaxed">
                              {myth.distortionDetail}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Format tabs */}
                      <div className="mb-2">
                        <span className="text-xs font-heading font-bold uppercase tracking-wider text-n500 dark:text-n300 mb-1.5 block">
                          Content Formats
                        </span>
                        <div className="flex gap-2">
                          {(Object.keys(FORMAT_LABELS) as FormatTab[]).map((fmt) => (
                            <button
                              key={fmt}
                              onClick={() => setFormat(myth.id, fmt)}
                              className={`px-3 py-1.5 text-xs font-heading font-semibold rounded-lg transition-all ${
                                currentFormat === fmt
                                  ? 'bg-teal/10 text-teal-dark border border-teal/20 dark:bg-teal/20'
                                  : 'text-n500 dark:text-n400 hover:text-navy hover:bg-n50 dark:hover:bg-navy-dark'
                              }`}
                            >
                              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-navy/10 dark:bg-white/10 text-navy dark:text-white text-xs font-bold mr-1.5">
                                {FORMAT_LABELS[fmt].icon}
                              </span>
                              {FORMAT_LABELS[fmt].label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Format content */}
                      <div className="p-4 bg-n50 dark:bg-navy-dark rounded-lg border border-n100 dark:border-navy-light">
                        <p className="text-sm text-n900 dark:text-n200 leading-relaxed italic">
                          {myth.formats[currentFormat]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
