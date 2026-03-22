import { useState } from 'react';

const COLOR_PRESETS = [
  { name: 'Teal', value: '#0D9488' },
  { name: 'Blue', value: '#2563EB' },
  { name: 'Green', value: '#16A34A' },
  { name: 'Purple', value: '#7C3AED' },
  { name: 'Red', value: '#DC2626' },
];

const TAGLINE_OPTIONS = [
  'Know the game. Play the game.',
  'Smart play starts here.',
  'Your game. Your rules. Your information.',
  'Entertainment, informed.',
];

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function lighten(hex: string, amount: number) {
  const { r, g, b } = hexToRgb(hex);
  const lr = Math.min(255, Math.round(r + (255 - r) * amount));
  const lg = Math.min(255, Math.round(g + (255 - g) * amount));
  const lb = Math.min(255, Math.round(b + (255 - b) * amount));
  return `rgb(${lr}, ${lg}, ${lb})`;
}

export default function BrandConfigurator() {
  const [programName, setProgramName] = useState('PlaySmart');
  const [helpline, setHelpline] = useState('1-800-522-4700');
  const [primaryColor, setPrimaryColor] = useState('#0D9488');
  const [tagline, setTagline] = useState(TAGLINE_OPTIONS[0]);

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Exercise
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">Configure Your Playbook</h3>
      </div>

      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration panel */}
          <div className="space-y-5">
            {/* Program Name */}
            <div>
              <label className="block text-sm font-heading font-semibold text-navy mb-1.5">
                Program Name
              </label>
              <input
                type="text"
                value={programName}
                onChange={(e) => setProgramName(e.target.value)}
                placeholder="e.g. PlaySmart"
                className="w-full px-3 py-2 border border-n200 rounded-lg text-sm bg-white text-n900 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
              />
              <p className="text-xs text-n500 mt-1">Appears in headers, emails, and all templates.</p>
            </div>

            {/* Helpline Number */}
            <div>
              <label className="block text-sm font-heading font-semibold text-navy mb-1.5">
                Helpline Number
              </label>
              <input
                type="text"
                value={helpline}
                onChange={(e) => setHelpline(e.target.value)}
                placeholder="e.g. 1-800-522-4700"
                className="w-full px-3 py-2 border border-n200 rounded-lg text-sm bg-white text-n900 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
              />
              <p className="text-xs text-n500 mt-1">Visible on every screen. Must be correct from day one.</p>
            </div>

            {/* Primary Color */}
            <div>
              <label className="block text-sm font-heading font-semibold text-navy mb-1.5">
                Primary Color
              </label>
              <div className="flex gap-2">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => setPrimaryColor(preset.value)}
                    className={`w-10 h-10 rounded-lg border-2 transition-all flex items-center justify-center ${
                      primaryColor === preset.value
                        ? 'border-navy scale-110 shadow-md'
                        : 'border-n200 hover:border-n400'
                    }`}
                    style={{ backgroundColor: preset.value }}
                    title={preset.name}
                    aria-label={`Select ${preset.name}`}
                  >
                    {primaryColor === preset.value && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-n500 mt-1.5">
                Selected: <span className="font-mono">{primaryColor}</span> ({COLOR_PRESETS.find(c => c.value === primaryColor)?.name})
              </p>
            </div>

            {/* Tagline */}
            <div>
              <label className="block text-sm font-heading font-semibold text-navy mb-1.5">
                Tagline
              </label>
              <select
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full px-3 py-2 border border-n200 rounded-lg text-sm bg-white text-n900 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
              >
                {TAGLINE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <p className="text-xs text-n500 mt-1">Displayed on content cards and campaign materials.</p>
            </div>

            {/* YAML preview */}
            <div>
              <p className="text-xs font-heading font-semibold text-n600 mb-2">_brand.yml preview</p>
              <pre className="p-3 bg-navy-dark text-n300 rounded-lg text-xs overflow-auto max-h-40 font-mono leading-relaxed">
{`meta:
  program_name: "${programName}"
  helpline: "${helpline}"
color:
  primary: "${primaryColor}"
messaging:
  tagline: "${tagline}"`}
              </pre>
            </div>
          </div>

          {/* Live preview — simulated mobile screen */}
          <div className="flex justify-center">
            <div className="w-full max-w-[300px]">
              <p className="text-xs font-heading font-semibold text-n600 mb-2 text-center">Live Preview</p>
              <div
                className="rounded-2xl overflow-hidden shadow-lg border border-n200"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-1.5 text-[10px] text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0-10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/></svg>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
                  </div>
                </div>

                {/* Header bar */}
                <div
                  className="px-4 py-3 flex items-center gap-2"
                  style={{ backgroundColor: primaryColor }}
                >
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm">
                    {programName || 'Program Name'}
                  </span>
                </div>

                {/* Nav pills */}
                <div className="px-3 py-2 flex gap-1.5 bg-white border-b border-n100">
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Home
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-n100 text-n600">
                    Learn
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-n100 text-n600">
                    Tools
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-n100 text-n600">
                    Support
                  </span>
                </div>

                {/* Content area */}
                <div className="px-3 py-3 space-y-2.5">
                  {/* Tagline card */}
                  <div
                    className="rounded-xl p-3.5"
                    style={{ backgroundColor: lighten(primaryColor, 0.9) }}
                  >
                    <p
                      className="text-xs font-bold mb-1"
                      style={{ color: primaryColor }}
                    >
                      {programName || 'Program Name'}
                    </p>
                    <p className="text-sm font-semibold text-n900 leading-snug">
                      {tagline}
                    </p>
                    <button
                      className="mt-2 text-[10px] font-bold px-3 py-1.5 rounded-lg text-white"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Take the Quiz
                    </button>
                  </div>

                  {/* Quick tool card */}
                  <div className="bg-white rounded-xl p-3 border border-n100">
                    <p className="text-[10px] font-bold text-n500 uppercase tracking-wider mb-1.5">Your Tools</p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-n50 rounded-lg p-2 text-center">
                        <div
                          className="w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center"
                          style={{ backgroundColor: lighten(primaryColor, 0.85) }}
                        >
                          <svg className="w-3 h-3" style={{ color: primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-[9px] font-medium text-n700">Budget</p>
                      </div>
                      <div className="flex-1 bg-n50 rounded-lg p-2 text-center">
                        <div
                          className="w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center"
                          style={{ backgroundColor: lighten(primaryColor, 0.85) }}
                        >
                          <svg className="w-3 h-3" style={{ color: primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-[9px] font-medium text-n700">Reminders</p>
                      </div>
                      <div className="flex-1 bg-n50 rounded-lg p-2 text-center">
                        <div
                          className="w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center"
                          style={{ backgroundColor: lighten(primaryColor, 0.85) }}
                        >
                          <svg className="w-3 h-3" style={{ color: primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <p className="text-[9px] font-medium text-n700">Activity</p>
                      </div>
                    </div>
                  </div>

                  {/* Content teaser */}
                  <div className="bg-white rounded-xl p-3 border border-n100">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: lighten(primaryColor, 0.85) }}
                      >
                        <span style={{ color: primaryColor }} className="text-sm">?</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-n900 truncate">How well do you know the odds?</p>
                        <p className="text-[10px] text-n500">Game IQ Quiz</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Helpline footer */}
                <div
                  className="px-3 py-2.5 text-center border-t"
                  style={{ borderColor: lighten(primaryColor, 0.7), backgroundColor: lighten(primaryColor, 0.95) }}
                >
                  <p className="text-[10px] text-n600 mb-0.5">Support is here — call anytime</p>
                  <p className="text-xs font-bold" style={{ color: primaryColor }}>
                    {helpline || '1-800-XXX-XXXX'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-6 pt-4 border-t border-n100">
          <p className="text-xs text-n500 leading-relaxed">
            The actual <code className="text-xs bg-n50 px-1 py-0.5 rounded">_brand.yml</code> has 30+ configurable fields covering typography, cultural profile, legal disclaimers, segment-specific messaging, and more. This preview covers the 4 fields that cascade most visibly across templates.
          </p>
        </div>
      </div>
    </div>
  );
}
