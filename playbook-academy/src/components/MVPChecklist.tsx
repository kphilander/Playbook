import { useState, useEffect } from 'react';

interface ChecklistItem {
  id: number;
  text: string;
  category: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 1, text: 'Deposit limit prompt appears during first deposit flow', category: 'Mobile App' },
  { id: 2, text: 'Session reminders are available in account settings', category: 'Mobile App' },
  { id: 3, text: 'Helpline number is visible on every screen', category: 'Accessibility' },
  { id: 4, text: 'Welcome email goes out on registration with tool setup CTA', category: 'Email' },
  { id: 5, text: 'Content hub is accessible from primary navigation', category: 'Website' },
  { id: 6, text: 'Game IQ Quiz is live and shareable', category: 'Interactive' },
  { id: 7, text: 'Staff can answer the top 10 FAQs', category: 'Training' },
  { id: 8, text: '_brand.yml program name and helpline are configured', category: 'Configuration' },
  { id: 9, text: 'WCAG AA contrast ratios verified on all templates', category: 'Accessibility' },
  { id: 10, text: 'Monthly summary email template is ready', category: 'Email' },
];

const STORAGE_KEY = 'playbook-mvp-checklist';

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Mobile App': { bg: 'bg-teal/10', text: 'text-teal-dark', border: 'border-teal/30' },
  'Accessibility': { bg: 'bg-orange/10', text: 'text-orange', border: 'border-orange/30' },
  'Email': { bg: 'bg-success/10', text: 'text-success', border: 'border-success/30' },
  'Website': { bg: 'bg-navy/10', text: 'text-navy', border: 'border-navy/30' },
  'Interactive': { bg: 'bg-warning/10', text: 'text-warning', border: 'border-warning/30' },
  'Training': { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/30' },
  'Configuration': { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/30' },
};

const DEFAULT_COLORS = { bg: 'bg-n50', text: 'text-n600', border: 'border-n200' };

function groupByCategory(items: ChecklistItem[]): Record<string, ChecklistItem[]> {
  const groups: Record<string, ChecklistItem[]> = {};
  for (const item of items) {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  }
  return groups;
}

export default function MVPChecklist() {
  const [checked, setChecked] = useState<Set<number>>(() => {
    if (typeof window === 'undefined') return new Set<number>();
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return new Set<number>(parsed);
      }
    } catch { /* ignore */ }
    return new Set<number>();
  });

  const [justChecked, setJustChecked] = useState<number | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch { /* ignore */ }
  }, [checked]);

  const toggleItem = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setJustChecked(null);
      } else {
        next.add(id);
        setJustChecked(id);
        // Clear animation flag after 600ms
        setTimeout(() => setJustChecked(null), 600);
      }
      return next;
    });
  };

  const clearAll = () => {
    setChecked(new Set());
    setJustChecked(null);
  };

  const total = CHECKLIST_ITEMS.length;
  const completed = checked.size;
  const progress = Math.round((completed / total) * 100);
  const allDone = completed === total;

  const groups = groupByCategory(CHECKLIST_ITEMS);

  const copyAsMarkdown = () => {
    let md = '# MVP Deployment Checklist\n\n';
    for (const [category, items] of Object.entries(groups)) {
      md += `## ${category}\n`;
      for (const item of items) {
        md += `- [${checked.has(item.id) ? 'x' : ' '}] ${item.text}\n`;
      }
      md += '\n';
    }
    md += `---\n${completed}/${total} complete (${progress}%)\n`;
    navigator.clipboard.writeText(md).catch(() => {});
  };

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Exercise
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">MVP Deployment Checklist</h3>
      </div>

      <div className="p-5 sm:p-6">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-heading font-semibold text-navy">
              {completed}/{total} complete
            </span>
            <span className="text-sm font-heading font-semibold text-n500">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-n100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                backgroundColor: allDone ? 'var(--color-success)' : 'var(--color-teal)',
              }}
            />
          </div>
        </div>

        {/* Completion message */}
        {allDone && (
          <div className="mb-6 p-4 rounded-lg bg-success/10 border border-success/20 text-center animate-fade-in">
            <p className="font-heading font-bold text-success text-lg">MVP ready. Ship it.</p>
            <p className="text-sm text-n700 mt-1">All deployment criteria met. Time to launch.</p>
          </div>
        )}

        {/* Grouped checklist */}
        <div className="space-y-5">
          {Object.entries(groups).map(([category, items]) => {
            const colors = CATEGORY_COLORS[category] || DEFAULT_COLORS;
            const categoryDone = items.every((item) => checked.has(item.id));

            return (
              <div key={category}>
                {/* Category header */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-heading font-bold px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}
                  >
                    {category}
                  </span>
                  {categoryDone && (
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

                {/* Items */}
                <div className="space-y-1.5">
                  {items.map((item) => {
                    const isChecked = checked.has(item.id);
                    const isAnimating = justChecked === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`w-full text-left flex items-start gap-3 px-3 py-2.5 rounded-lg border transition-all text-sm ${
                          isChecked
                            ? 'bg-success/5 border-success/20'
                            : 'bg-white border-n100 hover:border-n300 hover:bg-n50/50'
                        }`}
                      >
                        {/* Checkbox */}
                        <span
                          className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-success text-white'
                              : 'border-2 border-n300'
                          } ${isAnimating ? 'scale-125' : ''}`}
                          style={{ transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                        >
                          {isChecked && (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>

                        {/* Text */}
                        <span
                          className={`leading-snug transition-colors ${
                            isChecked ? 'text-success line-through decoration-success/30' : 'text-n900'
                          }`}
                        >
                          {item.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-n100">
          <button
            onClick={copyAsMarkdown}
            className="text-xs px-3 py-1.5 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors font-heading font-semibold"
          >
            Copy checklist
          </button>
          {completed > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-n500 hover:text-warning transition-colors"
            >
              Reset all
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
