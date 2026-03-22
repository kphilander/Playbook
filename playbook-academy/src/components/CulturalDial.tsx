import { useState, useCallback } from 'react';

/* ───────────────────────────────────────────────────
   Dimension definitions — exact options from the brand book
   ─────────────────────────────────────────────────── */

interface Dimension {
  key: string;
  label: string;
  options: string[];
  defaultValue: string;
}

const DIMENSIONS: Dimension[] = [
  { key: 'voice',       label: 'Voice',       options: ['Peer', 'Authority', 'Elder'],                          defaultValue: 'peer' },
  { key: 'framing',     label: 'Framing',     options: ['Individual', 'Communal'],                              defaultValue: 'individual' },
  { key: 'humor',       label: 'Humor',       options: ['Irreverent', 'Warm', 'Understated', 'Minimal'],        defaultValue: 'irreverent' },
  { key: 'directness',  label: 'Directness',  options: ['Blunt', 'Diplomatic', 'Contextual'],                   defaultValue: 'blunt' },
  { key: 'comfort',     label: 'Comfort',     options: ['Open', 'Reserved', 'Private'],                         defaultValue: 'open' },
];

/* ───────────────────────────────────────────────────
   Message variants — verbatim from the brand book.
   Resolution priority: voice → framing → humor → directness → comfort → _base
   ─────────────────────────────────────────────────── */

type MessageVariants = Record<string, string>;

interface MessageTopic {
  key: string;
  label: string;
  variants: MessageVariants;
}

const MESSAGE_TOPICS: MessageTopic[] = [
  {
    key: 'edge',
    label: 'House Edge',
    variants: {
      _base:       "The house always has an edge. Here\u2019s what it actually means for your wallet.",
      authority:   "Research consistently shows the house maintains a mathematical advantage. Here\u2019s what the data tells us.",
      elder:       "Let me walk you through how the house edge works \u2014 it\u2019s something every player should understand.",
      communal:    "The house edge affects all of us the same way. Here\u2019s what it means for the table.",
      diplomatic:  "Understanding the house advantage can help inform your choices. Here are the key numbers.",
      contextual:  "Before your next session, it\u2019s worth knowing how the house edge shapes the game over time.",
      warm:        "We\u2019ve all wondered if the odds are fair. Here\u2019s the honest math \u2014 it\u2019s actually worth knowing.",
      understated: "The house has a built-in margin. The numbers are straightforward.",
      minimal:     "The house edge is a fixed mathematical fact. Here are the percentages.",
      reserved:    "You might find it useful to know the house always holds a statistical edge.",
      private:     "For your own reference: every game has a built-in house advantage. Here\u2019s a breakdown.",
    },
  },
  {
    key: 'help',
    label: 'Helpline',
    variants: {
      _base:       "Need to talk? Free, confidential support is one call away. 1-800-522-4700.",
      authority:   "Professional support is available 24/7. The National Council on Problem Gambling: 1-800-522-4700.",
      elder:       "If something doesn\u2019t feel right, there are people who understand. They\u2019re ready when you are.",
      communal:    "You\u2019re not in this alone. Reaching out helps you and the people counting on you.",
      diplomatic:  "Support is always available if you\u2019d like to speak with someone. Free and completely confidential.",
      contextual:  "If gambling is feeling less like fun, talking can help. Confidential support is one call away.",
      warm:        "Sometimes it just helps to talk it through. No judgement, totally free. 1-800-522-4700.",
      understated: "Free, confidential support: 1-800-522-4700. Available 24/7.",
      minimal:     "Helpline: 1-800-522-4700. Free. Confidential. 24/7.",
      reserved:    "If you ever need it \u2014 confidential help is available: 1-800-522-4700.",
      private:     "This information is just for you: free, confidential support at 1-800-522-4700.",
    },
  },
];

/* ───────────────────────────────────────────────────
   Market presets — map to pill selections
   ─────────────────────────────────────────────────── */

interface MarketPreset {
  label: string;
  values: Record<string, string>;
  description: string;
}

const MARKET_PRESETS: MarketPreset[] = [
  {
    label: 'US',
    values: { voice: 'peer', framing: 'individual', humor: 'irreverent', directness: 'blunt', comfort: 'open' },
    description: 'Confident and direct. Humor is overt, facts are stated plainly.',
  },
  {
    label: 'UK',
    values: { voice: 'peer', framing: 'individual', humor: 'understated', directness: 'diplomatic', comfort: 'open' },
    description: 'Understated wit with moderate directness. The humor is there but never announced.',
  },
  {
    label: 'Australia',
    values: { voice: 'peer', framing: 'individual', humor: 'irreverent', directness: 'blunt', comfort: 'open' },
    description: 'Bold humor and maximum directness. No softening, no hedging.',
  },
  {
    label: 'Nordic',
    values: { voice: 'authority', framing: 'individual', humor: 'minimal', directness: 'blunt', comfort: 'reserved' },
    description: 'Minimal humor but high directness. Clean, efficient, fact-forward.',
  },
  {
    label: 'Japan',
    values: { voice: 'elder', framing: 'communal', humor: 'minimal', directness: 'contextual', comfort: 'private' },
    description: 'Subtle and indirect. Respect-first framing.',
  },
];

/* ───────────────────────────────────────────────────
   Resolve — brand book priority: voice > framing > humor > directness > comfort > _base
   ─────────────────────────────────────────────────── */

function resolve(topic: MessageTopic, state: Record<string, string>): string {
  const m = topic.variants;
  return (
    m[state.voice] ||
    m[state.framing] ||
    m[state.humor] ||
    m[state.directness] ||
    m[state.comfort] ||
    m._base
  );
}

/** Which dimension is actually driving the resolved message? */
function resolvedBy(topic: MessageTopic, state: Record<string, string>): string {
  const m = topic.variants;
  const keys: [string, string][] = [
    ['voice', state.voice],
    ['framing', state.framing],
    ['humor', state.humor],
    ['directness', state.directness],
    ['comfort', state.comfort],
  ];
  for (const [dimKey, val] of keys) {
    if (m[val]) return dimKey;
  }
  return 'base';
}

/* ───────────────────────────────────────────────────
   Component
   ─────────────────────────────────────────────────── */

export default function CulturalDial() {
  const [state, setState] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    DIMENSIONS.forEach((d) => { init[d.key] = d.defaultValue; });
    return init;
  });

  const [animating, setAnimating] = useState(false);

  const setPill = useCallback((dimKey: string, value: string) => {
    setAnimating(true);
    setTimeout(() => {
      setState((prev) => ({ ...prev, [dimKey]: value }));
      setAnimating(false);
    }, 120);
  }, []);

  const applyPreset = useCallback((preset: MarketPreset) => {
    setAnimating(true);
    setTimeout(() => {
      setState({ ...preset.values });
      setAnimating(false);
    }, 120);
  }, []);

  const activePreset = MARKET_PRESETS.find(
    (p) => Object.keys(p.values).every((k) => p.values[k] === state[k]),
  );

  const defaults: Record<string, string> = {};
  DIMENSIONS.forEach((d) => { defaults[d.key] = d.defaultValue; });

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden dark:bg-navy dark:border-navy-light">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Exercise
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">Cultural Dial</h3>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          {/* ── Left: Dimension toggles ── */}
          <div className="lg:flex-1 min-w-0 space-y-0">
            {DIMENSIONS.map((dim) => (
              <div
                key={dim.key}
                className="flex items-center gap-3 py-2.5 border-b border-n100 dark:border-n700 last:border-b-0"
              >
                <span className="text-sm font-heading font-bold text-navy dark:text-white w-24 flex-shrink-0">
                  {dim.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {dim.options.map((opt) => {
                    const val = opt.toLowerCase();
                    const isActive = state[dim.key] === val;
                    return (
                      <button
                        key={val}
                        onClick={() => setPill(dim.key, val)}
                        className={`px-3 py-1.5 text-xs font-heading font-semibold rounded-full border transition-all whitespace-nowrap ${
                          isActive
                            ? 'bg-teal text-navy border-teal'
                            : 'bg-transparent text-n600 border-n300 hover:border-teal hover:text-navy dark:text-n200 dark:border-n500 dark:hover:border-teal dark:hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Market presets */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3">
              <span className="text-xs font-heading font-bold text-n500 dark:text-n300 uppercase tracking-wider mr-1">
                Presets:
              </span>
              {MARKET_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => applyPreset(preset)}
                  className={`px-2.5 py-1 text-xs font-heading font-semibold rounded-md border transition-all ${
                    activePreset?.label === preset.label
                      ? 'bg-navy text-white border-navy dark:bg-teal dark:text-navy dark:border-teal'
                      : 'bg-transparent text-n600 border-n200 hover:border-navy hover:text-navy dark:text-n200 dark:border-n500 dark:hover:border-teal dark:hover:text-white'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Live message previews ── */}
          <div className="lg:flex-1 min-w-0 flex flex-col gap-3">
            {MESSAGE_TOPICS.map((topic) => {
              const text = resolve(topic, state);
              const driver = resolvedBy(topic, state);
              const driverDim = DIMENSIONS.find((d) => d.key === driver);
              const isNonDefault = driver !== 'base' && state[driver] !== defaults[driver];

              return (
                <div
                  key={topic.key}
                  className="rounded-xl p-4 border border-white/10"
                  style={{ backgroundColor: '#1B2838' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider" style={{ color: '#00D4AA' }}>
                      {topic.label}
                    </span>
                    {isNonDefault && driverDim && (
                      <span className="text-xs font-heading font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style={{ color: '#A8A8C0', backgroundColor: '#2A3F56' }}>
                        {driverDim.label}: {state[driver]}
                      </span>
                    )}
                  </div>
                  <blockquote
                    className="font-heading font-semibold text-sm leading-relaxed transition-opacity duration-150"
                    style={{ opacity: animating ? 0 : 1, color: '#ffffff', background: 'transparent', border: 'none', borderLeft: '3px solid #00D4AA', padding: '0 0 0 12px', margin: 0, borderRadius: 0 }}
                  >
                    &ldquo;{text}&rdquo;
                  </blockquote>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}
