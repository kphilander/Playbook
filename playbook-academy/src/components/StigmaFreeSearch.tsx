import { useState, useMemo } from 'react';
import terms from '../data/stigma-free-terms.json';

type Category = 'all' | 'identity' | 'behavior' | 'clinical' | 'framing' | 'general';

const CATEGORY_LABELS: Record<Category, string> = {
  all: 'All',
  identity: 'Identity',
  behavior: 'Behavior',
  clinical: 'Clinical',
  framing: 'Framing',
  general: 'General',
};

const CATEGORY_BADGE: Record<string, string> = {
  identity: 'bg-orange/10 text-orange',
  behavior: 'bg-warning/10 text-warning',
  clinical: 'bg-navy/10 text-navy',
  framing: 'bg-teal/10 text-teal-dark',
  general: 'bg-n100 text-n600',
};

export default function StigmaFreeSearch() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return terms.filter((t) => {
      const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
      const matchesQuery =
        !q ||
        t.avoid.toLowerCase().includes(q) ||
        t.prefer.toLowerCase().includes(q) ||
        t.explanation.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="my-8 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-3">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Reference Tool
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">
          Stigma-Free Language Guide
        </h3>
      </div>

      <div className="px-4 py-4 sm:px-5">
        {/* Search + filters row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <div className="relative flex-1">
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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms..."
              className="w-full pl-9 pr-3 py-2 border border-n200 rounded-lg text-sm focus:border-teal focus:outline-none transition-colors font-heading"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-heading font-semibold border transition-all ${
                  activeCategory === cat
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-n500 border-n200 hover:border-n400'
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-n400 font-heading mb-2">
          {filtered.length} of {terms.length} terms
        </p>

        {/* Compact results */}
        {filtered.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-n500 font-heading text-sm">
              No matches — but that's a good thing. Fewer terms to worry about.
            </p>
          </div>
        ) : (
          <div className="rounded-lg border border-n100 overflow-hidden max-h-[44rem] overflow-y-auto">
            <div className="divide-y divide-n100">
              {filtered.map((term) => (
                <div
                  key={term.id}
                  className="px-3 py-2.5 hover:bg-n50/50 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-heading font-bold uppercase tracking-wider w-[4.5rem] text-center flex-shrink-0 mt-0.5 ${
                        CATEGORY_BADGE[term.category] || CATEGORY_BADGE.general
                      }`}
                    >
                      {term.category}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-sm text-danger line-through">{term.avoid}</span>
                        <span className="text-teal font-bold">→</span>
                        <span className="text-sm font-semibold text-navy">{term.prefer}</span>
                      </div>
                      <p className="text-sm text-n500 mt-0.5 leading-snug">{term.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
