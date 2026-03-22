import { useState, useMemo } from 'react';

type OperatorType = 'casino' | 'sportsbook' | 'lottery' | 'land-based' | 'multi-vertical';

interface Campaign {
  id: string;
  name: string;
  duration: string;
  bestFor: string;
  primarySegment: string;
  description: string;
  recommendedFor: OperatorType[];
}

const OPERATOR_OPTIONS: { value: OperatorType; label: string }[] = [
  { value: 'casino', label: 'Casino' },
  { value: 'sportsbook', label: 'Sportsbook' },
  { value: 'lottery', label: 'Lottery' },
  { value: 'land-based', label: 'Land-based' },
  { value: 'multi-vertical', label: 'Multi-vertical' },
];

const SEGMENT_OPTIONS = ['New/Novice', 'Recreational', 'Enthusiast'];

const CHANNEL_OPTIONS = [
  'Mobile App',
  'Email',
  'Social Media',
  'Content Hub',
  'Print',
  'Environmental',
];

const CAMPAIGNS: Campaign[] = [
  {
    id: 'game-iq',
    name: 'Game IQ Challenge',
    duration: '1 week',
    bestFor: 'All operators',
    primarySegment: 'Recreational',
    description:
      'Cross-game quiz challenge covering odds literacy, myth-busting, and game mechanics. Highly shareable, drives content hub traffic, and works across every vertical. Recommended as your first campaign — low risk, high engagement, broad appeal.',
    recommendedFor: ['casino', 'sportsbook', 'lottery', 'land-based', 'multi-vertical'],
  },
  {
    id: 'slots-myths',
    name: 'Slots Myths Week',
    duration: '2 weeks',
    bestFor: 'Casino operators',
    primarySegment: 'Recreational',
    description:
      'Debunks the 6 most common slot machine misconceptions: due machines, hot/cold streaks, time of day, near misses, betting systems, and payout cycles. Uses social cards, articles, and quiz questions across all channels.',
    recommendedFor: ['casino', 'land-based', 'multi-vertical'],
  },
  {
    id: 'beat-the-house',
    name: 'Beat the House?',
    duration: '10 days',
    bestFor: 'Casino / table games',
    primarySegment: 'Enthusiast',
    description:
      'Table game truths: house edge per game, betting system myths, card counting reality, and the math behind roulette, blackjack, and craps. Appeals to knowledgeable players who want depth.',
    recommendedFor: ['casino', 'land-based', 'multi-vertical'],
  },
  {
    id: 'sports-reality',
    name: 'Sports Betting Reality Check',
    duration: '2 weeks',
    bestFor: 'Sportsbooks',
    primarySegment: 'Recreational',
    description:
      'Covers vig/margin education, parlay math, tipster myths, in-play betting reality, and why sport knowledge does not equal a betting edge. Ideal for new season launches when new bettors enter the market.',
    recommendedFor: ['sportsbook', 'multi-vertical'],
  },
  {
    id: 'luck-numbers',
    name: 'Luck, Numbers & Lotteries',
    duration: '1 week',
    bestFor: 'Lottery operators',
    primarySegment: 'Recreational',
    description:
      'Lottery misconceptions: lucky numbers, lucky stores, syndicate math, quick pick myths, and pattern illusions. Makes probability tangible with real expected value examples.',
    recommendedFor: ['lottery', 'multi-vertical'],
  },
  {
    id: 'money-myths',
    name: 'The Money Myths',
    duration: '10 days',
    bestFor: 'All operators',
    primarySegment: 'New/Novice',
    description:
      'Financial misconceptions about gambling: sunk cost fallacy, "playing with house money," chasing losses, and bankroll management basics. Pairs naturally with financial literacy awareness periods.',
    recommendedFor: ['casino', 'sportsbook', 'lottery', 'land-based', 'multi-vertical'],
  },
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const STEP_LABELS = [
  'Operator Type',
  'Target Segments',
  'Channel Mix',
  'Campaign',
  'Timing & Brief',
];

export default function CampaignStrategyBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [operatorType, setOperatorType] = useState<OperatorType | null>(null);
  const [segments, setSegments] = useState<string[]>([]);
  const [channels, setChannels] = useState<string[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);
  const [launchMonth, setLaunchMonth] = useState<string>('');
  const [avoidEvents, setAvoidEvents] = useState(false);
  const [copied, setCopied] = useState(false);

  const canProceed = useMemo(() => {
    switch (currentStep) {
      case 0:
        return operatorType !== null;
      case 1:
        return segments.length > 0;
      case 2:
        return channels.length > 0;
      case 3:
        return selectedCampaign !== null;
      case 4:
        return launchMonth !== '';
      default:
        return false;
    }
  }, [currentStep, operatorType, segments, channels, selectedCampaign, launchMonth]);

  const handleNext = () => {
    if (canProceed && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleSegment = (seg: string) => {
    setSegments((prev) =>
      prev.includes(seg) ? prev.filter((s) => s !== seg) : [...prev, seg]
    );
  };

  const toggleChannel = (ch: string) => {
    setChannels((prev) =>
      prev.includes(ch) ? prev.filter((c) => c !== ch) : [...prev, ch]
    );
  };

  const handleReset = () => {
    setCurrentStep(0);
    setOperatorType(null);
    setSegments([]);
    setChannels([]);
    setSelectedCampaign(null);
    setLaunchMonth('');
    setAvoidEvents(false);
    setCopied(false);
  };

  const campaign = CAMPAIGNS.find((c) => c.id === selectedCampaign);
  const operatorLabel =
    OPERATOR_OPTIONS.find((o) => o.value === operatorType)?.label || '';

  const briefText = `CAMPAIGN BRIEF
==============
Operator Type: ${operatorLabel}
Target Segments: ${segments.join(', ')}
Channels: ${channels.join(', ')}
Campaign: ${campaign?.name || ''}
Duration: ${campaign?.duration || ''}
Launch Month: ${launchMonth}
Avoid Major Sporting Events: ${avoidEvents ? 'Yes' : 'No'}
Cadence: 1 myth per week

CAMPAIGN DETAILS
${campaign?.description || ''}

RECOMMENDED APPROACH
- Deploy social cards 2-3 times per week during campaign
- Publish 1-2 articles per week on content hub
- Launch full quiz at campaign start, drip individual questions throughout
- Allow 1 week buffer before scheduling the next campaign
- Plan for 4 campaigns per year maximum`;

  const copyBrief = () => {
    navigator.clipboard.writeText(briefText).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Builder
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">
          Campaign Strategy Builder
        </h3>
        <p className="text-n300 text-sm mt-1">
          Build a campaign brief in 5 steps
        </p>
      </div>

      <div className="p-5 sm:p-6">
        {/* Step indicator */}
        <div className="flex items-center gap-1.5 mb-6">
          {STEP_LABELS.map((label, i) => (
            <div key={i} className="flex-1">
              <div
                className={`h-2 rounded-full transition-all ${
                  i < currentStep
                    ? 'bg-teal'
                    : i === currentStep
                      ? 'bg-navy'
                      : 'bg-n100'
                }`}
              />
              <span
                className={`block text-xs font-heading font-semibold mt-1 transition-colors hidden sm:block ${
                  i <= currentStep ? 'text-navy' : 'text-n400'
                }`}
              >
                {i + 1}. {label}
              </span>
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="min-h-[280px]">
          {/* Step 1: Operator Type */}
          {currentStep === 0 && (
            <div>
              <h4 className="text-lg font-heading font-semibold text-navy mb-1">
                What type of operator are you?
              </h4>
              <p className="text-sm text-n500 mb-5">
                This determines which campaigns are recommended for you.
              </p>
              <div className="space-y-3">
                {OPERATOR_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setOperatorType(opt.value)}
                    className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm font-heading font-semibold ${
                      operatorType === opt.value
                        ? 'border-teal bg-teal/5 text-navy'
                        : 'border-n100 hover:border-n300 text-n700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Target Segments */}
          {currentStep === 1 && (
            <div>
              <h4 className="text-lg font-heading font-semibold text-navy mb-1">
                Who are your target segments?
              </h4>
              <p className="text-sm text-n500 mb-5">
                Select one or more. At-Risk, In-Crisis, and Friends & Family are not
                campaign targets — they receive Tier 2 support content.
              </p>
              <div className="space-y-3">
                {SEGMENT_OPTIONS.map((seg) => (
                  <label
                    key={seg}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer ${
                      segments.includes(seg)
                        ? 'border-teal bg-teal/5'
                        : 'border-n100 hover:border-n300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={segments.includes(seg)}
                      onChange={() => toggleSegment(seg)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        segments.includes(seg)
                          ? 'bg-teal border-teal'
                          : 'border-n300 bg-white'
                      }`}
                    >
                      {segments.includes(seg) && (
                        <svg
                          className="w-3 h-3 text-navy"
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
                    </div>
                    <span className="text-sm font-heading font-semibold text-n700">
                      {seg}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Channel Mix */}
          {currentStep === 2 && (
            <div>
              <h4 className="text-lg font-heading font-semibold text-navy mb-1">
                Which channels will you use?
              </h4>
              <p className="text-sm text-n500 mb-5">
                Select all channels where you'll deploy campaign content.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CHANNEL_OPTIONS.map((ch) => (
                  <label
                    key={ch}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer ${
                      channels.includes(ch)
                        ? 'border-teal bg-teal/5'
                        : 'border-n100 hover:border-n300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={channels.includes(ch)}
                      onChange={() => toggleChannel(ch)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        channels.includes(ch)
                          ? 'bg-teal border-teal'
                          : 'border-n300 bg-white'
                      }`}
                    >
                      {channels.includes(ch) && (
                        <svg
                          className="w-3 h-3 text-navy"
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
                    </div>
                    <span className="text-sm font-heading font-semibold text-n700">{ch}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Campaign Selection */}
          {currentStep === 3 && (
            <div>
              <h4 className="text-lg font-heading font-semibold text-navy mb-1">
                Choose your campaign
              </h4>
              <p className="text-sm text-n500 mb-5">
                Highlighted campaigns are recommended for your operator type.
              </p>
              <div className="space-y-3">
                {CAMPAIGNS.map((c) => {
                  const isRecommended =
                    operatorType !== null &&
                    c.recommendedFor.includes(operatorType);
                  const isSelected = selectedCampaign === c.id;

                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCampaign(c.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-teal bg-teal/5'
                          : isRecommended
                            ? 'border-teal/30 bg-teal/[0.02] hover:border-teal/50'
                            : 'border-n100 hover:border-n300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-heading font-semibold text-navy text-sm">
                              {c.name}
                            </span>
                            {isRecommended && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-heading font-bold uppercase tracking-wider bg-teal/10 text-teal-dark border border-teal/20">
                                Recommended
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-xs text-n500">
                            <span>{c.duration}</span>
                            <span className="text-n300">|</span>
                            <span>{c.bestFor}</span>
                            <span className="text-n300">|</span>
                            <span>Primary: {c.primarySegment}</span>
                          </div>
                          <p className="text-xs text-n600 mt-2 leading-relaxed">
                            {c.description}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                            isSelected
                              ? 'bg-teal border-teal'
                              : 'border-n300 bg-white'
                          }`}
                        >
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-navy" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 5: Timing & Brief */}
          {currentStep === 4 && (
            <div>
              <h4 className="text-lg font-heading font-semibold text-navy mb-1">
                Set your timing
              </h4>
              <p className="text-sm text-n500 mb-5">
                Choose a launch month and scheduling preferences.
              </p>

              <div className="space-y-5 mb-8">
                {/* Launch month */}
                <div>
                  <label className="block text-sm font-heading font-semibold text-n700 mb-2">
                    Launch month
                  </label>
                  <select
                    value={launchMonth}
                    onChange={(e) => setLaunchMonth(e.target.value)}
                    className="w-full px-3 py-2.5 border border-n200 rounded-lg text-sm bg-white text-n900 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20"
                  >
                    <option value="">Select a month...</option>
                    {MONTHS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Avoid events */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={avoidEvents}
                    onChange={() => setAvoidEvents(!avoidEvents)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      avoidEvents
                        ? 'bg-teal border-teal'
                        : 'border-n300 bg-white'
                    }`}
                  >
                    {avoidEvents && (
                      <svg
                        className="w-3 h-3 text-navy"
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
                  </div>
                  <span className="text-sm text-n700">
                    Avoid major sporting events
                  </span>
                </label>

                {/* Cadence note */}
                <div className="p-3 bg-teal/5 rounded-lg border border-teal/10">
                  <p className="text-sm text-n700">
                    <span className="font-heading font-semibold text-teal-dark">
                      Recommended cadence:{' '}
                    </span>
                    1 myth per week. Allow one week between campaigns to prevent message
                    fatigue. Plan for a maximum of 4 campaigns per year.
                  </p>
                </div>
              </div>

              {/* Campaign Brief */}
              {launchMonth && (
                <div className="rounded-xl border-2 border-navy/20 overflow-hidden animate-fade-in">
                  <div className="bg-navy/5 px-5 py-3 border-b border-navy/10 flex items-center justify-between">
                    <h4 className="font-heading font-bold text-navy text-sm">
                      Your Campaign Brief
                    </h4>
                    <button
                      onClick={copyBrief}
                      className="px-3 py-1.5 text-xs font-heading font-semibold rounded-lg bg-navy text-white hover:bg-navy-light transition-colors"
                    >
                      {copied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs font-heading font-semibold text-n500 uppercase tracking-wider">
                          Operator Type
                        </span>
                        <p className="text-sm text-navy font-semibold mt-0.5">
                          {operatorLabel}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-heading font-semibold text-n500 uppercase tracking-wider">
                          Campaign
                        </span>
                        <p className="text-sm text-navy font-semibold mt-0.5">
                          {campaign?.name}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-heading font-semibold text-n500 uppercase tracking-wider">
                          Target Segments
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {segments.map((s) => (
                            <span
                              key={s}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-heading font-semibold bg-teal/10 text-teal-dark border border-teal/20"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-heading font-semibold text-n500 uppercase tracking-wider">
                          Duration
                        </span>
                        <p className="text-sm text-navy font-semibold mt-0.5">
                          {campaign?.duration}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-heading font-semibold text-n500 uppercase tracking-wider">
                          Channels
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {channels.map((c) => (
                            <span
                              key={c}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-heading font-semibold bg-navy/5 text-navy border border-navy/10"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-heading font-semibold text-n500 uppercase tracking-wider">
                          Launch
                        </span>
                        <p className="text-sm text-navy font-semibold mt-0.5">
                          {launchMonth}
                          {avoidEvents && (
                            <span className="ml-2 text-xs text-n500 font-normal">
                              (avoiding major events)
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-n100">
                      <span className="text-xs font-heading font-semibold text-n500 uppercase tracking-wider">
                        Campaign Description
                      </span>
                      <p className="text-sm text-n700 mt-1 leading-relaxed">
                        {campaign?.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-n100">
                      <span className="text-xs font-heading font-semibold text-n500 uppercase tracking-wider">
                        Deployment Cadence
                      </span>
                      <ul className="mt-1 space-y-1">
                        <li className="text-sm text-n700">
                          Social cards: 2-3 per week during campaign
                        </li>
                        <li className="text-sm text-n700">
                          Articles: 1-2 per week on content hub
                        </li>
                        <li className="text-sm text-n700">
                          Quiz: Full quiz at launch + individual questions throughout
                        </li>
                        <li className="text-sm text-n700">
                          Buffer: 1 week before next campaign
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-n100">
          <div>
            {currentStep > 0 ? (
              <button
                onClick={handleBack}
                className="px-4 py-2 text-sm text-n500 hover:text-navy transition-colors font-heading font-semibold"
              >
                &larr; Back
              </button>
            ) : (
              <div />
            )}
          </div>
          <div className="flex items-center gap-3">
            {currentStep === 4 && launchMonth ? (
              <button
                onClick={handleReset}
                className="text-sm text-n500 hover:text-navy transition-colors underline"
              >
                Start over
              </button>
            ) : currentStep < 4 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className="px-5 py-2 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next &rarr;
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
