import { useState } from 'react';

interface Issue {
  id: string;
  label: string;
  explanation: string;
}

interface Layout {
  id: string;
  title: string;
  issues: Issue[];
  render: () => JSX.Element;
}

/** Renders a Playbook-style social card with intentionally low contrast text */
function ContrastCard() {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm" style={{ background: '#1B2838' }}>
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="text-sm font-heading" style={{ color: '#ffffff' }}>
          <strong>Play</strong><span style={{ fontWeight: 300 }}>BOOK</span>
        </span>
        <span className="text-xs font-heading font-semibold px-2 py-0.5 rounded" style={{ background: '#00D4AA', color: '#1B2838' }}>OPEN</span>
      </div>
      <div className="px-4 pb-4 pt-2">
        <p className="text-xs font-heading font-bold uppercase tracking-wider mb-1" style={{ color: '#00D4AA' }}>Myth vs. Math</p>
        <p className="font-heading font-bold text-lg mb-2" style={{ color: '#ffffff' }}>&ldquo;I&rsquo;m on a hot streak&rdquo;</p>
        {/* Intentionally low-contrast body text */}
        <p className="text-sm leading-relaxed mb-3" style={{ color: '#4A5568' }}>
          Every spin, hand, and roll is statistically independent. Your brain sees patterns. The math doesn&rsquo;t.
        </p>
        {/* Terms link same color as body — no visual distinction */}
        <p className="text-xs" style={{ color: '#4A5568' }}>
          Learn more about statistical independence &middot; Terms apply
        </p>
      </div>
    </div>
  );
}

/** Renders a deposit limit widget using color-only indicators */
function ColorOnlyWidget() {
  return (
    <div className="rounded-xl border border-n100 bg-white shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-heading" style={{ color: '#1B2838' }}>
          <strong>Play</strong><span style={{ fontWeight: 300 }}>BOOK</span>
        </span>
        <span className="text-xs font-heading text-n400">Session Tools</span>
      </div>
      <p className="font-heading font-bold text-navy text-sm mb-3">Your Deposit Limits</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-n50">
          <span className="text-sm text-navy">Daily limit</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-heading font-semibold text-navy">$47 / $100</span>
            <div className="w-3 h-3 rounded-full" style={{ background: '#00C853' }} />
          </div>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-n50">
          <span className="text-sm text-navy">Weekly limit</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-heading font-semibold text-navy">$380 / $500</span>
            <div className="w-3 h-3 rounded-full" style={{ background: '#FFB300' }} />
          </div>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-n50">
          <span className="text-sm text-navy">Monthly limit</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-heading font-semibold text-navy">$1,850 / $2,000</span>
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF3D00' }} />
          </div>
        </div>
      </div>
      <p className="text-xs text-n400 mt-3 text-center">Status indicators shown above</p>
    </div>
  );
}

/** Renders a mobile helpline card with tiny touch targets */
function TinyButtonsCard() {
  return (
    <div className="rounded-xl border border-n100 bg-white shadow-sm overflow-hidden max-w-[260px] mx-auto">
      <div className="h-1" style={{ background: '#00D4AA' }} />
      <div className="p-4">
        <span className="text-sm font-heading" style={{ color: '#1B2838' }}>
          <strong>Play</strong><span style={{ fontWeight: 300 }}>BOOK</span>
        </span>
        <p className="font-heading font-bold text-navy mt-3 mb-1">Need to talk?</p>
        <p className="text-sm text-n600 mb-3">Free. Confidential. No judgment.</p>
        <p className="font-mono text-lg font-semibold mb-3" style={{ color: '#00D4AA' }}>1-800-522-4700</p>
        {/* Intentionally tiny buttons with minimal spacing */}
        <div className="flex flex-col" style={{ gap: '4px' }}>
          <button className="text-xs font-heading font-semibold text-white rounded text-center" style={{ background: '#1B2838', padding: '5px 8px', fontSize: '11px', lineHeight: '1.2' }}>
            Call Now
          </button>
          <button className="text-xs font-heading font-semibold text-white rounded text-center" style={{ background: '#1B2838', padding: '5px 8px', fontSize: '11px', lineHeight: '1.2' }}>
            Start Chat
          </button>
          <button className="text-xs font-heading font-semibold text-white rounded text-center" style={{ background: '#1B2838', padding: '5px 8px', fontSize: '11px', lineHeight: '1.2' }}>
            Send Text
          </button>
        </div>
      </div>
    </div>
  );
}

/** Renders a how-it-works card with missing alt text and no captions */
function MissingAltCard() {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm" style={{ background: '#1B2838' }}>
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="text-sm font-heading" style={{ color: '#ffffff' }}>
          <strong>Play</strong><span style={{ fontWeight: 300 }}>BOOK</span>
        </span>
        <span className="text-xs font-heading font-semibold px-2 py-0.5 rounded" style={{ background: '#00D4AA', color: '#1B2838' }}>LEARN</span>
      </div>
      <div className="px-4 pb-4">
        <p className="text-xs font-heading font-bold uppercase tracking-wider mb-1" style={{ color: '#00D4AA' }}>How It Works</p>
        <p className="font-heading font-bold text-lg mb-3" style={{ color: '#ffffff' }}>How Slots Actually Work</p>
        {/* Image placeholder with alt="" */}
        <div className="rounded-lg overflow-hidden mb-3 border border-white/10">
          <div className="bg-gradient-to-br p-4 flex flex-col items-center justify-center" style={{ minHeight: '120px', background: 'linear-gradient(135deg, #243447, #1B2838)' }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#00D4AA20' }}>
                <span className="text-lg">🎰</span>
              </div>
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><path d="M0 6h20M16 1l5 5-5 5" stroke="#00D4AA" strokeWidth="1.5"/></svg>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#00D4AA20' }}>
                <span className="text-sm font-mono font-bold" style={{ color: '#00D4AA' }}>RNG</span>
              </div>
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><path d="M0 6h20M16 1l5 5-5 5" stroke="#00D4AA" strokeWidth="1.5"/></svg>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#00D4AA20' }}>
                <span className="text-lg">📊</span>
              </div>
            </div>
            <p className="text-xs text-center" style={{ color: '#6B7B8D' }}>RNG Process Infographic</p>
          </div>
          <div className="px-2 py-1 flex items-center gap-1" style={{ background: '#FF3D0015' }}>
            <span className="font-mono text-xs" style={{ color: '#FF3D00' }}>&lt;img alt=&quot;&quot;&gt;</span>
          </div>
        </div>
        {/* Video embed with no captions */}
        <div className="rounded-lg overflow-hidden border border-white/10">
          <div className="flex items-center justify-center" style={{ minHeight: '80px', background: 'linear-gradient(135deg, #243447, #1B2838)' }}>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1" style={{ background: '#ffffff20' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span className="text-xs" style={{ color: '#6B7B8D' }}>Video: How RNG Works (2:34)</span>
            </div>
          </div>
          <div className="px-2 py-1 flex items-center gap-1" style={{ background: '#FF3D0015' }}>
            <span className="font-mono text-xs" style={{ color: '#FF3D00' }}>No captions &middot; No transcript</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const LAYOUTS: Layout[] = [
  {
    id: 'contrast',
    title: 'Social Card — Myth Buster',
    render: ContrastCard,
    issues: [
      {
        id: 'contrast-ratio',
        label: 'Insufficient text contrast',
        explanation: 'The body text (#4A5568 on #1B2838) has a contrast ratio of only 2.8:1 — well below the WCAG AA minimum of 4.5:1 for normal text. The original card uses white (#FFFFFF) body text for 13.5:1 contrast.',
      },
      {
        id: 'link-distinction',
        label: 'Links not visually distinct from text',
        explanation: '"Learn more about statistical independence" and "Terms apply" look identical to the body text. Links need a color difference AND an additional indicator (underline, icon) so colorblind users can tell what\'s clickable.',
      },
    ],
  },
  {
    id: 'color-only',
    title: 'Player Tool — Deposit Limits',
    render: ColorOnlyWidget,
    issues: [
      {
        id: 'color-only',
        label: 'Status conveyed by color alone',
        explanation: 'The green, yellow, and red dots convey limit status but have no text labels or icons. About 8% of men have some form of color vision deficiency — for them, these dots are meaningless. Add labels like "OK," "Approaching," "Near limit" alongside the colors.',
      },
      {
        id: 'no-pattern',
        label: 'No secondary visual indicator',
        explanation: 'Even for users with normal color vision, small colored dots are easy to overlook. Best practice: use distinct shapes (checkmark, warning triangle, exclamation) alongside color. The Playbook icon system has purpose-built icons for each status level.',
      },
    ],
  },
  {
    id: 'touch',
    title: 'Mobile Helpline Card',
    render: TinyButtonsCard,
    issues: [
      {
        id: 'touch-target',
        label: 'Touch targets too small',
        explanation: 'Each button is approximately 22px tall — half the WCAG 2.5.8 minimum of 44x44px. On a helpline card, accuracy matters most: a misclick when someone is trying to reach help is a real barrier. Playbook Tier 2 templates use minimum 48px button heights.',
      },
      {
        id: 'spacing',
        label: 'Insufficient spacing between targets',
        explanation: 'Only 4px between buttons creates high misclick risk. WCAG recommends at least 8px spacing between interactive elements. On this card, a user trying to tap "Start Chat" could easily hit "Call Now" or "Send Text" instead.',
      },
    ],
  },
  {
    id: 'alt-text',
    title: 'Education Card — How Slots Work',
    render: MissingAltCard,
    issues: [
      {
        id: 'empty-alt',
        label: 'Infographic has empty alt text',
        explanation: 'The RNG process infographic uses alt="" which tells screen readers to skip it entirely. This is correct for decorative images, but this infographic explains core educational content. It needs descriptive alt text: "Diagram showing how a Random Number Generator determines slot outcomes independently on each spin."',
      },
      {
        id: 'no-captions',
        label: 'Video without captions or transcript',
        explanation: 'The "How RNG Works" video has no captions and no transcript. This excludes deaf and hard-of-hearing users, plus anyone in a noisy casino environment or who can\'t play audio. Playbook requires both captions AND a full transcript for all video content.',
      },
    ],
  },
];

const TOTAL_ISSUES = LAYOUTS.reduce((sum, layout) => sum + layout.issues.length, 0);

function getFeedback(found: number, total: number): string {
  const ratio = found / total;
  if (ratio === 1) return `${found}/${total} — perfect score. You caught every issue.`;
  if (ratio >= 0.75) return `${found}/${total} — strong eye for accessibility. Review the ones you missed.`;
  if (ratio >= 0.5) return `${found}/${total} — good foundation. The issues you missed are worth studying.`;
  return `${found}/${total} — a start. Run through each explanation — these are real barriers that exclude players from getting help.`;
}

export default function AccessibilityChecker() {
  const [currentLayout, setCurrentLayout] = useState(0);
  const [revealedIssues, setRevealedIssues] = useState<Record<string, Set<string>>>({});
  const [isComplete, setIsComplete] = useState(false);

  const layout = LAYOUTS[currentLayout];
  const layoutRevealed = revealedIssues[layout.id] || new Set<string>();
  const totalFound = Object.values(revealedIssues).reduce((sum, set) => sum + set.size, 0);

  const toggleIssue = (issueId: string) => {
    setRevealedIssues((prev) => {
      const current = prev[layout.id] || new Set<string>();
      const updated = new Set(current);
      if (updated.has(issueId)) {
        updated.delete(issueId);
      } else {
        updated.add(issueId);
      }
      return { ...prev, [layout.id]: updated };
    });
  };

  const handleNext = () => {
    if (currentLayout < LAYOUTS.length - 1) {
      setCurrentLayout(currentLayout + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentLayout > 0) setCurrentLayout(currentLayout - 1);
  };

  const handleReset = () => {
    setCurrentLayout(0);
    setRevealedIssues({});
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="my-6 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
        <div className="bg-navy px-4 py-3">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Exercise Complete</span>
          <h3 className="text-white font-heading font-bold text-sm mt-0.5">Accessibility Checker</h3>
        </div>
        <div className="p-5 text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 ${totalFound === TOTAL_ISSUES ? 'bg-success/10' : 'bg-teal/10'}`}>
            <span className={`text-xl font-heading font-bold ${totalFound === TOTAL_ISSUES ? 'text-success' : 'text-teal-dark'}`}>
              {totalFound}/{TOTAL_ISSUES}
            </span>
          </div>
          <p className="text-navy font-heading font-semibold mb-2">{getFeedback(totalFound, TOTAL_ISSUES)}</p>
          <p className="text-sm text-n500 mb-5">Each issue represents a real barrier that excludes players from content they need.</p>

          <div className="text-left space-y-2 mb-5">
            {LAYOUTS.map((l) => {
              const found = (revealedIssues[l.id] || new Set()).size;
              return (
                <div key={l.id} className="flex items-center justify-between p-3 rounded-lg bg-n50">
                  <span className="text-sm font-heading font-semibold text-navy">{l.title}</span>
                  <span className={`text-sm font-heading font-semibold ${found === l.issues.length ? 'text-success' : 'text-n500'}`}>
                    {found}/{l.issues.length}
                  </span>
                </div>
              );
            })}
          </div>

          <button onClick={handleReset} className="px-5 py-2.5 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors text-sm">
            Try again
          </button>
        </div>
      </div>
    );
  }

  const LayoutRenderer = layout.render;

  return (
    <div className="my-6 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Interactive Exercise</span>
            <h3 className="text-white font-heading font-bold text-sm mt-0.5">Accessibility Checker</h3>
          </div>
          <span className="text-sm text-n300">
            {currentLayout + 1}/{LAYOUTS.length}
            {totalFound > 0 && <span className="ml-2 text-teal">{totalFound} found</span>}
          </span>
        </div>
        <div className="flex gap-1 mt-2.5">
          {LAYOUTS.map((_, i) => (
            <div key={i} className={`flex-1 h-1 rounded-full transition-all ${i < currentLayout ? 'bg-teal' : i === currentLayout ? 'bg-white' : 'bg-white/20'}`} />
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Rendered collateral with intentional failures */}
        <div className="mb-4 p-3 bg-n50 rounded-lg border border-n100">
          <p className="text-xs font-heading font-bold uppercase tracking-wider text-n400 mb-2">{layout.title}</p>
          <LayoutRenderer />
        </div>

        {/* Issue reveals */}
        <p className="font-heading font-semibold text-navy text-sm mb-2">
          Can you spot the {layout.issues.length} accessibility {layout.issues.length === 1 ? 'issue' : 'issues'}?
        </p>
        <p className="text-xs text-n500 mb-3">
          Study the collateral above, then reveal each issue to check your answers.
        </p>

        <div className="space-y-2 mb-4">
          {layout.issues.map((issue, idx) => {
            const isRevealed = layoutRevealed.has(issue.id);
            return (
              <div key={issue.id} className="rounded-lg border border-n100 overflow-hidden">
                {!isRevealed ? (
                  <button
                    onClick={() => toggleIssue(issue.id)}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-n50 transition-colors"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-n100 text-n500 text-xs font-heading font-bold flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-heading font-semibold text-n500">Reveal issue {idx + 1}</span>
                    <svg className="w-4 h-4 text-n300 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                ) : (
                  <div className="px-4 py-3">
                    <div className="flex items-center gap-2.5 mb-2">
                      <svg className="w-4 h-4 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-heading font-bold text-navy">{issue.label}</span>
                    </div>
                    <p className="text-sm text-n600 leading-relaxed pl-[26px]">{issue.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-3 border-t border-n100">
          <button
            onClick={handlePrev}
            disabled={currentLayout === 0}
            className="px-3 py-2 text-sm text-n500 hover:text-navy transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            &larr; Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2.5 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors"
          >
            {currentLayout < LAYOUTS.length - 1 ? 'Next \u2192' : 'See results'}
          </button>
        </div>
      </div>
    </div>
  );
}
