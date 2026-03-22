import { useState, useRef, useEffect } from 'react';

interface TierContent {
  headline: string;
  body: string;
  cta: string;
  ctaDestination: string;
}

interface Example {
  id: string;
  title: string;
  tier1: TierContent;
  tier2: TierContent & { note: string };
}

const EXAMPLES: Example[] = [
  {
    id: 'helpline-card',
    title: 'Helpline Card',
    tier1: {
      headline: 'Questions about your play?',
      body: 'Chat with someone who gets it \u2014 free, confidential, no judgment.',
      cta: 'Start a conversation',
      ctaDestination: 'Opens the operator\u2019s live chat widget, staffed by trained support agents. The chat is confidential and the transcript is never shared with the operator\u2019s marketing or risk teams.',
    },
    tier2: {
      headline: 'Support is here',
      body: 'Call, text, or chat \u2014 free and confidential. Available 24/7.',
      cta: 'Talk to someone now',
      ctaDestination: 'Connects directly to the National Council on Problem Gambling helpline (1-800-522-4700) or the operator\u2019s dedicated support line. No hold queues \u2014 the call connects immediately.',
      note: 'Notice: Orange disappears in Tier 2. The tone shifts from playful to warm and direct. The CTA becomes more immediate.',
    },
  },
  {
    id: 'session-reminder',
    title: 'Session Reminder',
    tier1: {
      headline: "You've been playing for 60 minutes",
      body: 'Just a heads up \u2014 your session started an hour ago. Here\u2019s your activity so far.',
      cta: 'See my activity',
      ctaDestination: 'Opens the player\u2019s session dashboard showing time played, bets placed, net result, and a comparison to their preset budget. Informational only \u2014 no action is forced.',
    },
    tier2: {
      headline: "You've been playing for 3 hours",
      body: "You've been here a while. Want to take a break? You can pause for 24 hours, 7 days, or 30 days.",
      cta: 'Take a break',
      ctaDestination: 'Opens the cooling-off / self-exclusion selector. The player chooses a break duration (24h, 7 days, 30 days) and confirms. The break takes effect immediately \u2014 no waiting period.',
      note: 'Tier 2 triggers on longer sessions. The language shifts from informational to supportive. The CTA offers an immediate action.',
    },
  },
  {
    id: 'deposit-prompt',
    title: 'Deposit Prompt',
    tier1: {
      headline: 'Set your entertainment budget',
      body: 'Most players find it helpful to set a weekly budget. Think of it like a movie subscription \u2014 the cost of having fun.',
      cta: 'Set my budget',
      ctaDestination: 'Opens the deposit limit configuration screen where the player sets daily, weekly, or monthly limits. Limits take effect immediately for decreases; increases have a mandatory cooling-off period.',
    },
    tier2: {
      headline: 'You\'ve increased your deposit limit 3 times this month',
      body: 'We noticed you\'ve been adjusting your limits. Want to talk through your options? There\'s no wrong answer.',
      cta: 'See my options',
      ctaDestination: 'Opens a guided options screen showing: keep current limits, lower limits, set a cooling-off period, self-exclude, or talk to a support advisor. Each option is explained in plain language with no pressure.',
      note: 'Tier 2 is triggered by behavioral patterns, not by the player themselves. The tone is non-judgmental but acknowledges what the data shows.',
    },
  },
];

export default function TierToggle() {
  const [isTier2, setIsTier2] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [viewedT1, setViewedT1] = useState<Set<number>>(new Set([0]));
  const [viewedT2, setViewedT2] = useState<Set<number>>(new Set());
  const [ctaPopup, setCtaPopup] = useState(false);
  const exerciseCompleteDispatched = useRef(false);

  // Track which examples are viewed per tier
  useEffect(() => {
    if (isTier2) {
      setViewedT2((prev) => new Set(prev).add(currentTab));
    } else {
      setViewedT1((prev) => new Set(prev).add(currentTab));
    }
  }, [isTier2, currentTab]);

  // Complete when 2+ examples viewed in BOTH tiers
  useEffect(() => {
    if (viewedT1.size >= 2 && viewedT2.size >= 2 && !exerciseCompleteDispatched.current) {
      exerciseCompleteDispatched.current = true;
      window.dispatchEvent(new CustomEvent('exercise-complete'));
    }
  }, [viewedT1, viewedT2]);

  const example = EXAMPLES[currentTab];
  const content = isTier2 ? example.tier2 : example.tier1;
  const note = isTier2 ? example.tier2.note : null;

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Exercise
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">Tier Toggle</h3>
      </div>

      <div className="p-5 sm:p-6">
        {/* Toggle switch */}
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={() => { setIsTier2(false); setCtaPopup(false); }}
            className={`flex-1 sm:flex-none px-4 sm:px-5 py-3 text-sm font-heading font-semibold rounded-l-lg border-2 transition-all ${
              !isTier2
                ? 'bg-teal text-navy border-teal'
                : 'bg-white text-n500 border-n100 hover:border-n300'
            }`}
          >
            <span className="hidden sm:inline">Tier 1 — </span>Entertainment Literacy
            <span className="ml-1.5 text-xs opacity-70">(95%)</span>
          </button>
          <button
            onClick={() => { setIsTier2(true); setCtaPopup(false); }}
            className={`flex-1 sm:flex-none px-4 sm:px-5 py-3 text-sm font-heading font-semibold rounded-r-lg border-2 border-l-0 transition-all ${
              isTier2
                ? 'bg-navy text-white border-navy'
                : 'bg-white text-n500 border-n100 hover:border-n300'
            }`}
          >
            <span className="hidden sm:inline">Tier 2 — </span>Support &amp; Crisis
            <span className="ml-1.5 text-xs opacity-70">(5%)</span>
          </button>
        </div>

        {/* Example tabs */}
        <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
          {EXAMPLES.map((ex, i) => (
            <button
              key={ex.id}
              onClick={() => { setCurrentTab(i); setCtaPopup(false); }}
              className={`px-4 py-2 text-sm font-heading font-semibold rounded-lg whitespace-nowrap transition-all ${
                i === currentTab
                  ? isTier2
                    ? 'bg-navy/10 text-navy border border-navy/20'
                    : 'bg-teal/10 text-teal-dark border border-teal/20'
                  : 'text-n500 hover:text-navy hover:bg-n50'
              }`}
            >
              {ex.title}
            </button>
          ))}
        </div>

        {/* Simulated card */}
        <div
          className={`rounded-xl border-2 p-6 transition-all duration-300 ${
            isTier2 ? 'border-navy bg-white' : 'border-teal bg-white'
          }`}
        >
          {/* Tier badge */}
          <div className="mb-4">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-all duration-300 ${
                isTier2
                  ? 'bg-navy/10 text-navy border border-navy/20'
                  : 'bg-teal/10 text-teal-dark border border-teal/20'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${isTier2 ? 'bg-navy' : 'bg-teal'}`}
              />
              {isTier2 ? 'Tier 2 — Support & Crisis' : 'Tier 1 — Entertainment Literacy'}
            </span>
          </div>

          {/* Card content */}
          <h4 className="font-heading font-bold text-xl mb-2 text-navy transition-colors duration-300">
            {content.headline}
          </h4>
          <p className="text-n700 mb-5 leading-relaxed transition-all duration-300">{content.body}</p>

          {/* CTA button — clickable */}
          <button
            onClick={() => setCtaPopup(!ctaPopup)}
            className={`px-5 py-2.5 text-sm font-heading font-semibold rounded-lg transition-all duration-300 ${
              isTier2
                ? 'bg-navy text-white hover:bg-navy-light'
                : 'bg-teal text-navy hover:bg-teal-light'
            }`}
          >
            {content.cta}
          </button>
        </div>

        {/* CTA destination popup */}
        {ctaPopup && (
          <div className="mt-3 p-4 rounded-lg bg-navy/5 border border-navy/10 animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-teal/15 shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-teal-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-n500 mb-1">
                  Where this takes the player
                </p>
                <p className="text-sm text-n700 leading-relaxed">{content.ctaDestination}</p>
              </div>
            </div>
          </div>
        )}

        {/* Note */}
        {note && (
          <div className="mt-3 p-4 rounded-lg bg-navy/5 border border-navy/10 animate-fade-in">
            <p className="text-sm text-n700 leading-relaxed">
              <span className="font-heading font-semibold text-navy">What changed: </span>
              {note}
            </p>
          </div>
        )}

        {!isTier2 && (
          <div className="mt-3 p-4 rounded-lg bg-teal/5 border border-teal/10">
            <p className="text-sm text-n700 leading-relaxed">
              <span className="font-heading font-semibold text-teal-dark">Tier 1 note: </span>
              This is the default. Confident, informative, non-clinical. The content is a feature of the experience — not a warning bolted onto it. Toggle to Tier 2 to see how the same touchpoint changes when a player may need support.
            </p>
          </div>
        )}

        {/* Skip exercise link */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('exercise-complete'))}
          className="mt-3 text-xs text-n400 hover:text-n600 transition-colors underline"
        >
          Skip exercise — continue audio
        </button>
      </div>
    </div>
  );
}
