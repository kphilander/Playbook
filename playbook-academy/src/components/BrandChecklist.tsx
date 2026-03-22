import { useState, useEffect } from 'react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
}

interface ChecklistCategory {
  key: string;
  name: string;
  items: ChecklistItem[];
}

const CATEGORIES: ChecklistCategory[] = [
  {
    key: 'voice-tone',
    name: 'Voice & Tone',
    items: [
      {
        id: 'vt-personality',
        title: 'Uses Playbook personality pairs',
        description:
          'Copy reflects the brand personality dimensions — confident not arrogant, witty not flippant, warm not soft.',
      },
      {
        id: 'vt-stigma-free',
        title: 'Stigma-free language throughout',
        description:
          'No terms like "problem gambler" or "addict." Uses person-first, empowerment-oriented language.',
      },
      {
        id: 'vt-register',
        title: 'Appropriate tone register',
        description:
          'Tier 1 content is light and playful; Tier 2 shifts to supportive and direct. Register matches context.',
      },
      {
        id: 'vt-no-preachy',
        title: 'No clinical or preachy tone',
        description:
          'Content reads like a smart friend, not a lecture hall. No finger-wagging, no shame, no scare tactics.',
      },
    ],
  },
  {
    key: 'visual-identity',
    name: 'Visual Identity',
    items: [
      {
        id: 'vi-palette',
        title: 'Correct Navy / Teal / Orange palette',
        description:
          'Primary Navy #1B2838, accent Teal #00D4AA, highlight Orange #FF6B35. No off-brand colors creeping in.',
      },
      {
        id: 'vi-tier-rules',
        title: 'Tier-appropriate visual rules applied',
        description:
          'Tier 1 uses full palette with bold teal accents. Tier 2 dials back to navy-dominant, calmer visual treatment.',
      },
      {
        id: 'vi-typography',
        title: 'Brand typography in use',
        description:
          'Headings set in Inter, body text in Source Sans 3. No system font fallbacks visible in production.',
      },
      {
        id: 'vi-no-stereotypes',
        title: 'No stock imagery with stereotypes',
        description:
          'No "head in hands" despair shots, no casino-floor glamour. Imagery is neutral, human, and dignity-preserving.',
      },
    ],
  },
  {
    key: 'accessibility',
    name: 'Accessibility',
    items: [
      {
        id: 'a11y-contrast',
        title: 'WCAG AA contrast ratios met',
        description:
          'All text meets 4.5:1 against its background (3:1 for large text). Verified with a contrast checker tool.',
      },
      {
        id: 'a11y-alt-text',
        title: 'Alt text on all images',
        description:
          'Every informational image has meaningful alt text. Decorative images use alt="" to be skipped by screen readers.',
      },
      {
        id: 'a11y-keyboard',
        title: 'Keyboard navigable',
        description:
          'All interactive elements reachable via Tab. Focus states are visible. No keyboard traps anywhere in the flow.',
      },
      {
        id: 'a11y-no-color-only',
        title: 'No color-only indicators',
        description:
          'Status, errors, and alerts use text labels or icons alongside color. Nothing relies on color perception alone.',
      },
    ],
  },
  {
    key: 'segmentation',
    name: 'Segmentation',
    items: [
      {
        id: 'seg-relationship',
        title: 'Uses relationship-based model',
        description:
          'Segments are defined by player relationship to gambling (curious, engaged, at-risk) — not age, gender, or income.',
      },
      {
        id: 'seg-vertical',
        title: 'Product vertical overlay considered',
        description:
          'Content accounts for product context — sports bettors, casino players, and lottery buyers see relevant framing.',
      },
      {
        id: 'seg-adapted',
        title: 'Messages adapted per segment',
        description:
          'Each segment receives appropriately tailored messaging. No one-size-fits-all copy going to every audience.',
      },
    ],
  },
  {
    key: 'content-accuracy',
    name: 'Content Accuracy',
    items: [
      {
        id: 'ca-factual',
        title: 'RG information factually correct',
        description:
          'Stats, tool descriptions, and regulatory references are verified against current sources. No outdated claims.',
      },
      {
        id: 'ca-no-fear',
        title: 'No fear-based messaging',
        description:
          'Content motivates through empowerment, not anxiety. No scare stats, no doomsday framing, no guilt trips.',
      },
      {
        id: 'ca-informed-choice',
        title: 'Informed choice framing used',
        description:
          'Messaging supports players making their own decisions with good information — not telling them what to do.',
      },
    ],
  },
  {
    key: 'deployment',
    name: 'Deployment Readiness',
    items: [
      {
        id: 'dep-helpline',
        title: 'Helpline number visible',
        description:
          'Support line is accessible from every page or screen. Not buried in a footer — prominent and easy to find.',
      },
      {
        id: 'dep-tier2',
        title: 'Tier 2 pathways clear',
        description:
          'Users showing risk indicators have a clear, frictionless path to support tools and helpline resources.',
      },
      {
        id: 'dep-brand-yml',
        title: '_brand.yml configured',
        description:
          'Program name, helpline, colors, and tier settings are correctly set in the Playbook configuration file.',
      },
    ],
  },
];

const ALL_ITEM_IDS = CATEGORIES.flatMap((cat) => cat.items.map((item) => item.id));
const TOTAL_ITEMS = ALL_ITEM_IDS.length;

const STORAGE_KEY = 'playbook-brand-checklist';

function getScoreFeedback(percentage: number): { message: string; tone: string } {
  if (percentage === 100)
    return {
      message: 'Ship it. Your deployment is brand-perfect.',
      tone: 'text-success',
    };
  if (percentage >= 80)
    return {
      message: 'Almost there \u2014 a few tweaks and you\u2019re golden.',
      tone: 'text-teal-dark dark:text-teal',
    };
  if (percentage >= 50)
    return {
      message: 'Good foundation, but some gaps to close.',
      tone: 'text-orange',
    };
  return {
    message: 'Let\u2019s revisit the modules \u2014 your deployment needs work.',
    tone: 'text-n500 dark:text-n300',
  };
}

const CATEGORY_ACCENTS: Record<string, { ring: string; badge: string }> = {
  'voice-tone': { ring: 'ring-teal/40', badge: 'bg-teal/10 text-teal-dark dark:text-teal' },
  'visual-identity': { ring: 'ring-orange/40', badge: 'bg-orange/10 text-orange' },
  accessibility: { ring: 'ring-success/40', badge: 'bg-success/10 text-success' },
  segmentation: { ring: 'ring-navy/40', badge: 'bg-navy/10 text-navy dark:text-n200' },
  'content-accuracy': { ring: 'ring-warning/40', badge: 'bg-warning/10 text-warning' },
  deployment: { ring: 'ring-purple-500/40', badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
};

export default function BrandChecklist() {
  const [checked, setChecked] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set<string>();
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: string[] = JSON.parse(stored);
        // Filter to only valid IDs in case the checklist changed
        return new Set<string>(parsed.filter((id) => ALL_ITEM_IDS.includes(id)));
      }
    } catch {
      /* ignore */
    }
    return new Set<string>();
  });

  const [justChecked, setJustChecked] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    () => new Set(CATEGORIES.map((c) => c.key)),
  );

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch {
      /* ignore */
    }
  }, [checked]);

  const toggleItem = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setJustChecked(null);
      } else {
        next.add(id);
        setJustChecked(id);
        setTimeout(() => setJustChecked(null), 600);
      }
      return next;
    });
  };

  const toggleCategory = (key: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const resetAll = () => {
    setChecked(new Set());
    setJustChecked(null);
  };

  const completed = checked.size;
  const progress = TOTAL_ITEMS > 0 ? Math.round((completed / TOTAL_ITEMS) * 100) : 0;
  const feedback = getScoreFeedback(progress);
  const allDone = completed === TOTAL_ITEMS;

  return (
    <div className="my-10 rounded-xl border border-n100 dark:border-n700 bg-white dark:bg-n900 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Brand Alignment Check
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">
          Deployment Quality Checklist
        </h3>
      </div>

      <div className="p-5 sm:p-6">
        {/* Overall score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-heading font-semibold text-navy dark:text-n100">
              {completed}/{TOTAL_ITEMS} criteria met
            </span>
            <span className="text-sm font-heading font-semibold text-n500 dark:text-n300">
              {progress}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-n100 dark:bg-n700 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                backgroundColor: allDone ? 'var(--color-success)' : 'var(--color-teal)',
              }}
            />
          </div>

          {/* Feedback message */}
          {completed > 0 && (
            <p className={`mt-3 text-sm font-heading font-semibold ${feedback.tone}`}>
              {feedback.message}
            </p>
          )}
        </div>

        {/* All-done celebration */}
        {allDone && (
          <div className="mb-6 p-4 rounded-lg bg-success/10 border border-success/20 text-center animate-fade-in">
            <p className="font-heading font-bold text-success text-lg">
              Brand-perfect. Ready to deploy.
            </p>
            <p className="text-sm text-n700 dark:text-n300 mt-1">
              Every criterion met. Your deployment is aligned with Playbook standards.
            </p>
          </div>
        )}

        {/* Categories */}
        <div className="space-y-4">
          {CATEGORIES.map((category) => {
            const accent = CATEGORY_ACCENTS[category.key];
            const categoryCheckedCount = category.items.filter((item) =>
              checked.has(item.id),
            ).length;
            const categoryTotal = category.items.length;
            const categoryDone = categoryCheckedCount === categoryTotal;
            const isExpanded = expandedCategories.has(category.key);

            return (
              <div
                key={category.key}
                className={`rounded-lg border transition-colors ${
                  categoryDone
                    ? 'border-success/30 dark:border-success/20'
                    : 'border-n100 dark:border-n700'
                }`}
              >
                {/* Category header — clickable to collapse */}
                <button
                  onClick={() => toggleCategory(category.key)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-n50/50 dark:hover:bg-n800/50 transition-colors rounded-lg"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-xs font-heading font-bold px-2.5 py-1 rounded ${accent.badge}`}
                    >
                      {category.name}
                    </span>
                    {categoryDone && (
                      <svg
                        className="w-4 h-4 text-success flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-heading font-semibold text-n500 dark:text-n400">
                      {categoryCheckedCount}/{categoryTotal}
                    </span>
                    <svg
                      className={`w-4 h-4 text-n400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Items */}
                {isExpanded && (
                  <div className="px-3 pb-3 space-y-1.5">
                    {category.items.map((item) => {
                      const isChecked = checked.has(item.id);
                      const isAnimating = justChecked === item.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => toggleItem(item.id)}
                          className={`w-full text-left flex items-start gap-3 px-3 py-3 rounded-lg border transition-all ${
                            isChecked
                              ? 'bg-success/5 dark:bg-success/10 border-success/20'
                              : 'bg-white dark:bg-n800 border-n100 dark:border-n700 hover:border-n300 dark:hover:border-n500 hover:bg-n50/50 dark:hover:bg-n700/50'
                          }`}
                          role="checkbox"
                          aria-checked={isChecked}
                        >
                          {/* Checkbox indicator */}
                          <span
                            className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded flex items-center justify-center transition-all ${
                              isChecked
                                ? 'bg-success text-white'
                                : `border-2 border-n300 dark:border-n500`
                            } ${isAnimating ? 'scale-125' : ''}`}
                            style={{
                              transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            }}
                          >
                            {isChecked && (
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </span>

                          {/* Title + description */}
                          <div className="min-w-0">
                            <span
                              className={`block text-sm font-heading font-semibold leading-snug transition-colors ${
                                isChecked
                                  ? 'text-success line-through decoration-success/30'
                                  : 'text-navy dark:text-n100'
                              }`}
                            >
                              {item.title}
                            </span>
                            <span
                              className={`block text-xs leading-relaxed mt-0.5 transition-colors ${
                                isChecked
                                  ? 'text-n400 dark:text-n500'
                                  : 'text-n500 dark:text-n400'
                              }`}
                            >
                              {item.description}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-n100 dark:border-n700">
          <span className="text-xs text-n400 dark:text-n500">
            Progress saved automatically
          </span>
          {completed > 0 && (
            <button
              onClick={resetAll}
              className="text-xs text-n500 dark:text-n400 hover:text-warning transition-colors font-heading font-semibold"
            >
              Reset Checklist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
