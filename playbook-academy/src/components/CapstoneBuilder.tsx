import { useState, useCallback } from 'react';
import { saveProgress } from '../lib/progress';
import CelebrationOverlay from './CelebrationOverlay';

const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '');

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TemplateSelection {
  [key: string]: boolean;
}

interface BrandConfig {
  programName: string;
  organization: string;
  helpline: string;
  helplineLabel: string;
  primaryColor: string;
  primaryLight: string;
  primaryDark: string;
  secondaryColor: string;
  secondaryLight: string;
  accentColor: string;
  accentLight: string;
  headingFont: string;
  bodyFont: string;
  tagline: string;
  minAge: number;
  ageDisclaimer: string;
  generalDisclaimer: string;
  cssVars: Record<string, string>;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const STEPS = [
  { label: 'Fork & Clone', icon: 'git' },
  { label: 'Upload Brand', icon: 'settings' },
  { label: 'Select Templates', icon: 'templates' },
  { label: 'Write Touchpoint', icon: 'pen' },
  { label: 'Review & Export', icon: 'download' },
];

const TEMPLATE_GROUPS = [
  {
    category: 'Onboarding',
    templates: [
      { id: 'welcome-email', label: 'Welcome Email', segment: 'New/Novice', effort: 'Low' },
      { id: 'deposit-limit-prompt', label: 'Deposit Limit Prompt', segment: 'New/Novice', effort: 'Low' },
      { id: 'session-reminder', label: 'Session Reminder', segment: 'All', effort: 'Low' },
      { id: 'content-hub-intro', label: 'Content Hub Landing', segment: 'All', effort: 'Medium' },
    ],
  },
  {
    category: 'Education',
    templates: [
      { id: 'game-iq-quiz', label: 'Game IQ Quiz', segment: 'New/Novice, Recreational', effort: 'Medium' },
      { id: 'myth-busting-cards', label: 'Myth-Busting Social Cards', segment: 'Recreational', effort: 'Low' },
      { id: 'odds-explainer', label: 'Odds Explainer', segment: 'New/Novice', effort: 'Medium' },
    ],
  },
  {
    category: 'Engagement',
    templates: [
      { id: 'activity-summary', label: 'Monthly Activity Summary', segment: 'Recreational', effort: 'Medium' },
      { id: 'cool-off-suggestion', label: 'Cool-Off Suggestion', segment: 'At-Risk', effort: 'Low' },
    ],
  },
  {
    category: 'Support',
    templates: [
      { id: 'helpline-footer', label: 'Helpline Footer Strip', segment: 'All', effort: 'Low' },
      { id: 'self-exclusion-flow', label: 'Self-Exclusion Flow', segment: 'In-Crisis', effort: 'High' },
      { id: 'support-page', label: 'Support Page', segment: 'At-Risk, In-Crisis', effort: 'Medium' },
    ],
  },
];

const DEFAULT_BRAND: BrandConfig = {
  programName: 'PlaySmart',
  organization: '',
  helpline: '1-800-522-4700',
  helplineLabel: 'Support Helpline',
  primaryColor: '#1B2838',
  primaryLight: '#2A3F56',
  primaryDark: '#111C28',
  secondaryColor: '#00D4AA',
  secondaryLight: '#33DFBD',
  accentColor: '#FF6B35',
  accentLight: '#FF8A5C',
  headingFont: 'Inter',
  bodyFont: 'Source Sans 3',
  tagline: 'Know the game. Play the game.',
  minAge: 21,
  ageDisclaimer: '',
  generalDisclaimer: '',
  cssVars: {},
};

// ---------------------------------------------------------------------------
// YAML Parser (lightweight, no library needed)
// ---------------------------------------------------------------------------

function parseYaml(yaml: string): BrandConfig {
  const config = { ...DEFAULT_BRAND };
  const lines = yaml.split('\n');

  // Simple extraction via regex — works for the configurator's predictable output
  const extract = (pattern: RegExp): string => {
    for (const line of lines) {
      const m = line.match(pattern);
      if (m) return m[1].replace(/^["']|["']$/g, '').trim();
    }
    return '';
  };

  config.programName = extract(/program_name:\s*(.+)/) || config.programName;
  config.organization = extract(/organization:\s*(.+)/) || config.organization;

  // Colors — look for indented palette entries
  const colorSection = yaml.match(/palette:[\s\S]*?(?=\n\S|\n\n\S|$)/);
  if (colorSection) {
    const cs = colorSection[0];
    const colorExtract = (key: string): string => {
      const m = cs.match(new RegExp(`${key}:\\s*["']?(#[0-9a-fA-F]{6})["']?`));
      return m ? m[1] : '';
    };
    config.primaryColor = colorExtract('primary') || config.primaryColor;
    config.primaryLight = colorExtract('primary_light') || config.primaryLight;
    config.primaryDark = colorExtract('primary_dark') || config.primaryDark;
    config.secondaryColor = colorExtract('secondary') || config.secondaryColor;
    config.secondaryLight = colorExtract('secondary_light') || config.secondaryLight;
    config.accentColor = colorExtract('accent') || config.accentColor;
    config.accentLight = colorExtract('accent_light') || config.accentLight;
  }

  // Typography
  const typoSection = yaml.match(/typography:[\s\S]*?(?=\nhelplines:|\nlegal:|\nlogo:|\n[a-z]+:)/);
  if (typoSection) {
    const ts = typoSection[0];
    // Find heading font family
    const headingBlock = ts.match(/heading:[\s\S]*?(?=\n\s{4}\w|\n\s{2}\w|$)/);
    if (headingBlock) {
      const fm = headingBlock[0].match(/family:\s*["']?([^"'\n]+)["']?/);
      if (fm) config.headingFont = fm[1].trim();
    }
    const bodyBlock = ts.match(/body:[\s\S]*?(?=\n\s{4}\w|\n\s{2}\w|$)/);
    if (bodyBlock) {
      const fm = bodyBlock[0].match(/family:\s*["']?([^"'\n]+)["']?/);
      if (fm) config.bodyFont = fm[1].trim();
    }
  }

  // Helpline
  const helpSection = yaml.match(/helplines:[\s\S]*?(?=\nintegration:|\nregulator:|\nlegal:|\n[a-z]+:)/);
  if (helpSection) {
    const hs = helpSection[0];
    const num = hs.match(/number:\s*["']?([^"'\n]+)["']?/);
    if (num) config.helpline = num[1].trim();
    const lbl = hs.match(/label:\s*["']?([^"'\n]+)["']?/);
    if (lbl) config.helplineLabel = lbl[1].trim();
  }

  // Legal
  config.minAge = parseInt(extract(/default:\s*(\d+)/)) || config.minAge;
  const ageDisc = yaml.match(/age:\s*"([^"]+)"/);
  if (ageDisc) config.ageDisclaimer = ageDisc[1];
  const genDisc = yaml.match(/general:\s*"([^"]+)"/);
  if (genDisc) config.generalDisclaimer = genDisc[1];

  // Tagline — first item under taglines.open
  const tagSection = yaml.match(/taglines:[\s\S]*?(?=\n\s{2}ctas:|\n[a-z]+:)/);
  if (tagSection) {
    const tagLines = tagSection[0].match(/- "([^"]+)"/);
    if (tagLines) config.tagline = tagLines[1];
  }

  return config;
}

function parseCss(css: string): Record<string, string> {
  const vars: Record<string, string> = {};
  const matches = css.matchAll(/(--pb-[a-z0-9-]+)\s*:\s*([^;]+)/g);
  for (const m of matches) {
    vars[m[1].trim()] = m[2].trim();
  }
  return vars;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function lighten(hex: string, amount: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lr = Math.min(255, Math.round(r + (255 - r) * amount));
  const lg = Math.min(255, Math.round(g + (255 - g) * amount));
  const lb = Math.min(255, Math.round(b + (255 - b) * amount));
  return `rgb(${lr}, ${lg}, ${lb})`;
}

function downloadFile(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function generateWelcomeEmailHtml(brand: BrandConfig, touchpoint?: { text: string; segment: string; type: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Welcome to ${brand.programName}</title>
<style>
  body { margin: 0; padding: 0; background: #f4f4f7; font-family: '${brand.bodyFont}', system-ui, sans-serif; }
  .wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; }
  .header { background: ${brand.primaryColor}; padding: 32px 24px; text-align: center; }
  .header h1 { margin: 0; color: #ffffff; font-family: '${brand.headingFont}', system-ui, sans-serif; font-size: 24px; font-weight: 800; }
  .header p { margin: 8px 0 0; color: ${brand.secondaryColor}; font-size: 14px; font-weight: 600; letter-spacing: 0.05em; }
  .accent-bar { height: 4px; background: ${brand.secondaryColor}; }
  .body { padding: 32px 24px; color: #333; font-size: 16px; line-height: 1.6; }
  .body h2 { font-family: '${brand.headingFont}', system-ui, sans-serif; color: ${brand.primaryColor}; font-size: 20px; margin: 0 0 16px; }
  .cta { display: inline-block; background: ${brand.accentColor}; color: ${brand.primaryColor}; font-family: '${brand.headingFont}', system-ui, sans-serif; font-weight: 700; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-size: 14px; margin: 16px 0; }
  .tools { display: flex; gap: 12px; margin: 24px 0; }
  .tool-card { flex: 1; background: ${lighten(brand.secondaryColor, 0.9)}; border-radius: 8px; padding: 16px; text-align: center; }
  .tool-card .icon { width: 32px; height: 32px; border-radius: 50%; background: ${lighten(brand.secondaryColor, 0.8)}; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; color: ${brand.secondaryColor}; font-size: 16px; }
  .tool-card p { margin: 0; font-size: 12px; font-weight: 600; color: ${brand.primaryColor}; }
  .helpline { background: ${lighten(brand.primaryColor, 0.95)}; border-top: 1px solid ${lighten(brand.primaryColor, 0.85)}; padding: 16px 24px; text-align: center; }
  .helpline p { margin: 0; font-size: 12px; color: #666; }
  .helpline .number { font-size: 16px; font-weight: 700; color: ${brand.primaryColor}; margin-top: 4px; }
  .footer { background: ${brand.primaryColor}; padding: 16px 24px; text-align: center; }
  .footer p { margin: 0; color: rgba(255,255,255,0.5); font-size: 11px; }
</style>
</head>
<body>
<div class="wrapper">
  <div class="header">
    <h1>${brand.programName}</h1>
    <p>${brand.tagline.toUpperCase()}</p>
  </div>
  <div class="accent-bar"></div>
  <div class="body">
    <h2>Welcome aboard.</h2>
    <p>${touchpoint?.text || `You just joined ${brand.programName} \u2014 a smarter way to play. We\u2019re here to give you the tools, the knowledge, and the confidence to enjoy the game on your terms.`}</p>
    <p>Here\u2019s what you can do right now:</p>
    <div class="tools">
      <div class="tool-card"><div class="icon">$</div><p>Set a Budget</p></div>
      <div class="tool-card"><div class="icon">\u23F0</div><p>Set Reminders</p></div>
      <div class="tool-card"><div class="icon">?</div><p>Take a Quiz</p></div>
    </div>
    <a href="#" class="cta">Explore Your Dashboard</a>
  </div>
  <div class="helpline">
    <p>${brand.helplineLabel} \u2014 call anytime</p>
    <p class="number">${brand.helpline}</p>
  </div>
  <div class="footer">
    <p>${brand.ageDisclaimer || `Must be ${brand.minAge}+ to participate.`} | ${brand.organization || brand.programName}</p>
  </div>
</div>
</body>
</html>`;
}

function generateSessionReminderHtml(brand: BrandConfig): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Session Reminder</title>
<style>
  body { margin: 0; padding: 40px 16px; background: #f4f4f7; font-family: '${brand.bodyFont}', system-ui, sans-serif; display: flex; justify-content: center; }
  .card { max-width: 380px; width: 100%; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
  .bar { height: 4px; background: ${brand.secondaryColor}; }
  .content { padding: 24px; }
  .label { font-size: 11px; font-weight: 700; color: ${brand.secondaryColor}; text-transform: uppercase; letter-spacing: 0.08em; font-family: '${brand.headingFont}', system-ui, sans-serif; }
  h2 { font-family: '${brand.headingFont}', system-ui, sans-serif; color: ${brand.primaryColor}; font-size: 18px; margin: 8px 0; }
  p { color: #555; font-size: 14px; line-height: 1.5; margin: 0 0 16px; }
  .time { display: inline-flex; align-items: center; gap: 8px; background: ${lighten(brand.accentColor, 0.9)}; border-radius: 8px; padding: 10px 16px; margin-bottom: 16px; }
  .time .num { font-family: '${brand.headingFont}', system-ui, sans-serif; font-size: 24px; font-weight: 800; color: ${brand.accentColor}; }
  .time .unit { font-size: 12px; color: ${brand.primaryColor}; font-weight: 600; }
  .actions { display: flex; gap: 8px; }
  .btn { flex: 1; padding: 12px; border-radius: 8px; text-align: center; font-family: '${brand.headingFont}', system-ui, sans-serif; font-size: 13px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; }
  .btn-primary { background: ${brand.secondaryColor}; color: ${brand.primaryColor}; }
  .btn-secondary { background: transparent; color: ${brand.primaryColor}; border: 1px solid ${lighten(brand.primaryColor, 0.8)}; }
</style>
</head>
<body>
<div class="card">
  <div class="bar"></div>
  <div class="content">
    <span class="label">${brand.programName}</span>
    <h2>Quick check-in</h2>
    <div class="time">
      <span class="num">45</span>
      <span class="unit">min<br/>played</span>
    </div>
    <p>You\u2019ve been at it for a while. Want to take a break, or keep going?</p>
    <div class="actions">
      <button class="btn btn-primary">Take a Break</button>
      <button class="btn btn-secondary">Keep Playing</button>
    </div>
  </div>
</div>
</body>
</html>`;
}

function generateHelplineFooterHtml(brand: BrandConfig): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Helpline Footer</title>
<style>
  body { margin: 0; padding: 40px 16px; background: #f4f4f7; font-family: '${brand.bodyFont}', system-ui, sans-serif; display: flex; justify-content: center; }
  .footer { max-width: 600px; width: 100%; background: ${brand.primaryColor}; border-radius: 12px; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .left { display: flex; align-items: center; gap: 12px; }
  .icon { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .icon svg { width: 20px; height: 20px; color: ${brand.secondaryColor}; }
  .text p { margin: 0; }
  .text .label { font-size: 11px; color: rgba(255,255,255,0.6); }
  .text .name { font-family: '${brand.headingFont}', system-ui, sans-serif; font-size: 14px; font-weight: 700; color: #fff; }
  .number { font-family: '${brand.headingFont}', system-ui, sans-serif; font-size: 18px; font-weight: 800; color: ${brand.secondaryColor}; white-space: nowrap; }
</style>
</head>
<body>
<div class="footer">
  <div class="left">
    <div class="icon">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    </div>
    <div class="text">
      <p class="label">${brand.helplineLabel} \u2014 24/7</p>
      <p class="name">${brand.programName}</p>
    </div>
  </div>
  <span class="number">${brand.helpline}</span>
</div>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function StepIndicator({ currentStep, steps }: { currentStep: number; steps: typeof STEPS }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-6">
      {steps.map((step, i) => {
        const isActive = i === currentStep;
        const isDone = i < currentStep;
        return (
          <div key={i} className="flex items-center gap-1 flex-shrink-0">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-heading font-semibold transition-colors ${
                isActive
                  ? 'bg-navy text-white'
                  : isDone
                    ? 'bg-success/10 text-success'
                    : 'bg-n100 text-n500'
              }`}
            >
              {isDone ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span>{i + 1}</span>
              )}
              <span className="hidden sm:inline">{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-4 h-px ${isDone ? 'bg-success' : 'bg-n200'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function BrandSummaryCard({ brand }: { brand: BrandConfig }) {
  return (
    <div className="border border-n100 dark:border-navy-light rounded-lg p-4 bg-n50 dark:bg-navy-light/50">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-heading font-bold text-sm"
          style={{ backgroundColor: brand.primaryColor }}
        >
          {brand.programName.charAt(0)}
        </div>
        <div>
          <p className="font-heading font-bold text-navy dark:text-white text-sm">{brand.programName}</p>
          {brand.organization && (
            <p className="text-xs text-n500 dark:text-n300">{brand.organization}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <span className="text-n500 dark:text-n300">Colors</span>
          <div className="flex gap-1 mt-1">
            {[brand.primaryColor, brand.secondaryColor, brand.accentColor].map((c, i) => (
              <div key={i} className="w-5 h-5 rounded border border-n200" style={{ backgroundColor: c }} title={c} />
            ))}
          </div>
        </div>
        <div>
          <span className="text-n500 dark:text-n300">Helpline</span>
          <p className="font-heading font-semibold text-navy dark:text-white mt-0.5">{brand.helpline}</p>
        </div>
        <div>
          <span className="text-n500 dark:text-n300">Heading Font</span>
          <p className="font-heading font-semibold text-navy dark:text-white mt-0.5">{brand.headingFont}</p>
        </div>
        <div>
          <span className="text-n500 dark:text-n300">Tagline</span>
          <p className="font-heading font-semibold text-navy dark:text-white mt-0.5 truncate">{brand.tagline}</p>
        </div>
      </div>
    </div>
  );
}

function MiniPreview({ brand }: { brand: BrandConfig }) {
  return (
    <div className="w-full max-w-[280px] mx-auto">
      <p className="text-xs font-heading font-semibold text-n500 dark:text-n300 mb-2 text-center">Live Preview</p>
      <div className="rounded-xl overflow-hidden shadow-md border border-n200 dark:border-navy-light" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Header */}
        <div className="px-3 py-2.5 flex items-center gap-2" style={{ backgroundColor: brand.primaryColor }}>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-white font-bold text-xs" style={{ fontFamily: `'${brand.headingFont}', system-ui` }}>
            {brand.programName}
          </span>
        </div>
        {/* Accent bar */}
        <div className="h-0.5" style={{ backgroundColor: brand.secondaryColor }} />
        {/* Content */}
        <div className="px-3 py-2.5 space-y-2">
          <div className="rounded-lg p-2.5" style={{ backgroundColor: lighten(brand.secondaryColor, 0.9) }}>
            <p className="text-[10px] font-bold" style={{ color: brand.secondaryColor }}>{brand.programName}</p>
            <p className="text-xs font-semibold text-gray-900 leading-snug mt-0.5">{brand.tagline}</p>
            <button
              className="mt-1.5 text-[9px] font-bold px-2.5 py-1 rounded-md text-white"
              style={{ backgroundColor: brand.accentColor }}
            >
              Get Started
            </button>
          </div>
          <div className="bg-white rounded-lg p-2 border border-gray-100">
            <div className="flex gap-1.5">
              {['Budget', 'Reminders', 'Activity'].map((label) => (
                <div key={label} className="flex-1 rounded-md p-1.5 text-center" style={{ backgroundColor: lighten(brand.secondaryColor, 0.92) }}>
                  <div className="w-5 h-5 rounded-full mx-auto mb-0.5 flex items-center justify-center" style={{ backgroundColor: lighten(brand.secondaryColor, 0.82) }}>
                    <span style={{ color: brand.secondaryColor }} className="text-[8px]">+</span>
                  </div>
                  <p className="text-[8px] font-medium text-gray-700">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Helpline */}
        <div className="px-3 py-2 text-center border-t" style={{ borderColor: lighten(brand.primaryColor, 0.85), backgroundColor: lighten(brand.primaryColor, 0.95) }}>
          <p className="text-[9px] text-gray-500">Support is here</p>
          <p className="text-[11px] font-bold" style={{ color: brand.primaryColor }}>{brand.helpline}</p>
        </div>
      </div>
    </div>
  );
}


// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function CapstoneBuilder() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 = intro
  const [forkUrl, setForkUrl] = useState('');
  const [brandConfig, setBrandConfig] = useState<BrandConfig>(DEFAULT_BRAND);
  const [yamlUploaded, setYamlUploaded] = useState(false);
  const [cssUploaded, setCssUploaded] = useState(false);
  const [yamlFilename, setYamlFilename] = useState('');
  const [cssFilename, setCssFilename] = useState('');
  const [parseErrors, setParseErrors] = useState<string[]>([]);
  const [templates, setTemplates] = useState<TemplateSelection>({});
  const [touchpointText, setTouchpointText] = useState('');
  const [touchpointSegment, setTouchpointSegment] = useState('new-novice');
  const [touchpointType, setTouchpointType] = useState('welcome-email');
  const [showCelebration, setShowCelebration] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const toggleTemplate = (id: string) => {
    setTemplates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedTemplateCount = Object.values(templates).filter(Boolean).length;

  const handleComplete = () => {
    saveProgress('capstone', { completed: true, quizScore: 100 });
    setShowCelebration(true);
    setIsComplete(true);
  };

  const handleFileUpload = useCallback((files: FileList | null) => {
    if (!files) return;
    const errors: string[] = [];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (!content) return;

        if (file.name.endsWith('.yml') || file.name.endsWith('.yaml')) {
          try {
            const parsed = parseYaml(content);
            setBrandConfig((prev) => ({ ...prev, ...parsed }));
            setYamlUploaded(true);
            setYamlFilename(file.name);
          } catch {
            errors.push(`Failed to parse ${file.name}`);
          }
        } else if (file.name.endsWith('.css')) {
          try {
            const vars = parseCss(content);
            setBrandConfig((prev) => ({ ...prev, cssVars: vars }));
            setCssUploaded(true);
            setCssFilename(file.name);
          } catch {
            errors.push(`Failed to parse ${file.name}`);
          }
        } else {
          errors.push(`Unsupported file: ${file.name}. Upload .yml and .css files.`);
        }

        if (errors.length) setParseErrors(errors);
      };
      reader.readAsText(file);
    });
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  }, [handleFileUpload]);

  const handleDownloadTemplate = (type: 'welcome-email' | 'session-reminder' | 'helpline-footer') => {
    const tp = touchpointText ? { text: touchpointText, segment: touchpointSegment, type: touchpointType } : undefined;
    const generators: Record<string, () => string> = {
      'welcome-email': () => generateWelcomeEmailHtml(brandConfig, tp),
      'session-reminder': () => generateSessionReminderHtml(brandConfig),
      'helpline-footer': () => generateHelplineFooterHtml(brandConfig),
    };
    const html = generators[type]();
    const filename = `${brandConfig.programName.toLowerCase().replace(/\s+/g, '-')}-${type}.html`;
    downloadFile(html, filename, 'text/html');
  };

  // ── Intro screen ──────────────────────────────────────────

  if (currentStep === -1) {
    return (
      <div className="rounded-xl border border-n100 bg-white shadow-sm overflow-hidden max-w-3xl mx-auto">
        <div className="bg-navy px-6 py-5">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
            Capstone Project
          </span>
          <h3 className="text-white font-heading font-bold text-xl mt-1">
            Deploy Your Own Playbook
          </h3>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-n700 leading-relaxed mb-6">
            This is the practical exercise. You'll fork the Playbook repo, configure your brand with the
            Brand Configurator, upload your files here, and see your brand applied to real templates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { step: '1-2', label: 'Fork & Configure', desc: 'Set up your repo and upload your brand files' },
              { step: '3', label: 'Select Templates', desc: 'Pick your MVP template set' },
              { step: '4-5', label: 'Write & Export', desc: 'Write a touchpoint, download branded templates' },
            ].map((item, i) => (
              <div key={i} className="border border-n100 rounded-lg p-4">
                <div className="w-7 h-7 rounded-full bg-teal/10 text-teal-dark text-xs font-heading font-bold flex items-center justify-center mb-2">
                  {item.step}
                </div>
                <p className="text-sm font-heading font-semibold text-navy">{item.label}</p>
                <p className="text-xs text-n500 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-n600 mb-8">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-n400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
              ~30 minutes
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-n400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Downloadable branded templates
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-n400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Practical, not a quiz
            </span>
          </div>

          <button
            onClick={() => setCurrentStep(0)}
            className="w-full sm:w-auto px-8 py-3 bg-navy text-white font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors text-sm"
          >
            Start Building
          </button>
        </div>
      </div>
    );
  }

  // ── Completion screen ────────────────────────────────────

  if (isComplete) {
    return (
      <>
        <CelebrationOverlay show={showCelebration} onComplete={() => setShowCelebration(false)} />
        <div className="rounded-xl border border-n100 bg-white shadow-sm overflow-hidden max-w-3xl mx-auto">
          <div className="bg-navy px-6 py-5">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
              Capstone Complete
            </span>
            <h3 className="text-white font-heading font-bold text-xl mt-1">
              You're ready to deploy
            </h3>
          </div>

          <div className="p-6 sm:p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-4">
              <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-heading font-bold text-navy mb-2">Capstone complete</h4>
            <p className="text-n700 dark:text-n300 mb-6 max-w-md mx-auto">
              Your brand is configured, templates are selected, and you've written your first touchpoint.
              Download your branded templates below.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <button
                onClick={() => handleDownloadTemplate('welcome-email')}
                className="px-6 py-3 bg-navy dark:bg-navy-light text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light dark:hover:bg-navy transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Welcome Email
              </button>
              <a
                href={`${base}/certificate/`}
                className="px-6 py-3 bg-teal text-navy text-sm font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors flex items-center justify-center gap-2"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── Step screens ─────────────────────────────────────────

  return (
    <div className="rounded-xl border border-n100 bg-white shadow-sm overflow-hidden max-w-3xl mx-auto">
      <div className="bg-navy px-6 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Step {currentStep + 1} of {STEPS.length}
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-1">
          {STEPS[currentStep].label}
        </h3>
      </div>

      <div className="p-6 sm:p-8">
        <StepIndicator currentStep={currentStep} steps={STEPS} />

        {/* ── Step 0: Fork & Clone ── */}
        {currentStep === 0 && (
          <div>
            <p className="text-n700 leading-relaxed mb-6">
              Start by forking the Playbook repository. This gives you your own copy to configure
              with your brand settings.
            </p>

            <div className="bg-n50 border border-n100 rounded-lg p-5 mb-6">
              <h4 className="font-heading font-semibold text-navy text-sm mb-3">Instructions</h4>
              <ol className="space-y-2 text-sm text-n700">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold flex-shrink-0">1.</span>
                  Go to <a href="https://github.com/kphilander/Branding" target="_blank" rel="noopener" className="text-navy-light underline decoration-teal underline-offset-2 hover:text-navy">github.com/kphilander/Branding</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold flex-shrink-0">2.</span>
                  Click the <strong className="text-navy">Fork</strong> button (top right)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold flex-shrink-0">3.</span>
                  Clone your fork locally: <code className="bg-n100 px-1.5 py-0.5 rounded text-xs font-mono">git clone https://github.com/YOUR-USERNAME/Branding.git</code>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold flex-shrink-0">4.</span>
                  Paste your fork URL below to continue
                </li>
              </ol>
            </div>

            <label className="block text-sm font-heading font-semibold text-navy mb-2">
              Your fork URL
            </label>
            <input
              type="url"
              value={forkUrl}
              onChange={(e) => setForkUrl(e.target.value)}
              placeholder="https://github.com/your-username/Branding"
              className="w-full px-4 py-3 border border-n200 rounded-lg text-sm bg-white text-n900 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 placeholder:text-n400 mb-2"
            />
            <p className="text-xs text-n400">
              Don't have a GitHub account? You can skip this step and still complete the exercise.
            </p>
          </div>
        )}

        {/* ── Step 1: Upload Brand Files ── */}
        {currentStep === 1 && (
          <div>
            <p className="text-n700 dark:text-n300 leading-relaxed mb-4">
              Use the Brand Configurator to create your <code className="bg-n100 dark:bg-navy-light px-1.5 py-0.5 rounded text-sm font-mono">_brand.yml</code> and <code className="bg-n100 dark:bg-navy-light px-1.5 py-0.5 rounded text-sm font-mono">brand-inject.css</code>,
              then upload them here. Your brand settings will be used to generate sample templates.
            </p>

            {/* Configurator link */}
            <a
              href="https://gamblingpolicy.com/tools/playbook/configurator/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-navy dark:bg-navy-light text-white font-heading font-semibold rounded-lg hover:bg-navy-light dark:hover:bg-navy transition-colors text-sm mb-6"
            >
              <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" strokeWidth={2} />
              </svg>
              Open Brand Configurator
              <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Drop zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                dragOver
                  ? 'border-teal bg-teal/5'
                  : yamlUploaded && cssUploaded
                    ? 'border-success/30 bg-success/5'
                    : yamlUploaded || cssUploaded
                      ? 'border-teal/30 bg-teal/5'
                      : 'border-n200 dark:border-navy-light hover:border-n400'
              }`}
            >
              <input
                type="file"
                accept=".yml,.yaml,.css"
                multiple
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
                id="brand-upload"
              />

              {/* File status checklist — always visible */}
              <div className="flex flex-col items-center gap-3 mb-4">
                {yamlUploaded && cssUploaded ? (
                  <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-10 h-10 text-n300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                )}
                <p className="text-sm font-heading font-semibold text-navy dark:text-white">
                  {yamlUploaded && cssUploaded ? 'Both brand files loaded' : 'Upload your brand files'}
                </p>
              </div>

              {/* Individual file status */}
              <div className="flex flex-col gap-2 mb-4 w-full max-w-xs mx-auto">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-heading font-semibold ${
                  yamlUploaded ? 'bg-success/10 text-success' : 'bg-n50 dark:bg-navy text-n400'
                }`}>
                  {yamlUploaded ? (
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                    </svg>
                  )}
                  <span>{yamlUploaded ? yamlFilename : '_brand.yml — not uploaded'}</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-heading font-semibold ${
                  cssUploaded ? 'bg-success/10 text-success' : 'bg-n50 dark:bg-navy text-n400'
                }`}>
                  {cssUploaded ? (
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                    </svg>
                  )}
                  <span>{cssUploaded ? cssFilename : 'brand-inject.css — not uploaded'}</span>
                </div>
              </div>

              {/* Upload button */}
              <label
                htmlFor="brand-upload"
                className="inline-flex items-center gap-2 px-4 py-2 bg-n100 dark:bg-navy-light text-navy dark:text-white text-xs font-heading font-semibold rounded-lg hover:bg-n200 dark:hover:bg-navy transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {yamlUploaded || cssUploaded ? 'Upload more files' : 'Browse files'}
              </label>
            </div>

            {parseErrors.length > 0 && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                {parseErrors.map((err, i) => (
                  <p key={i} className="text-xs text-red-700">{err}</p>
                ))}
              </div>
            )}

            {/* Brand summary */}
            {yamlUploaded && (
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <BrandSummaryCard brand={brandConfig} />
                <MiniPreview brand={brandConfig} />
              </div>
            )}

            {/* Skip option */}
            {!yamlUploaded && (
              <p className="text-xs text-n400 dark:text-n300 mt-4 text-center">
                Don't have your files yet? You can continue with the default Playbook brand and come back later.
              </p>
            )}
          </div>
        )}

        {/* ── Step 2: Select Templates ── */}
        {currentStep === 2 && (
          <div>
            <p className="text-n700 leading-relaxed mb-2">
              Select the templates for your MVP deployment. Start with onboarding and support — these
              cover your priority segments (New/Novice and Recreational).
            </p>
            <p className="text-sm text-n500 mb-6">
              <strong className="text-navy">{selectedTemplateCount}</strong> template{selectedTemplateCount !== 1 ? 's' : ''} selected
              {selectedTemplateCount >= 10 && selectedTemplateCount <= 12 && (
                <span className="text-success ml-2">-- ideal MVP set</span>
              )}
            </p>

            <div className="space-y-6">
              {TEMPLATE_GROUPS.map((group) => (
                <div key={group.category}>
                  <h4 className="text-sm font-heading font-semibold text-navy uppercase tracking-wider mb-3">{group.category}</h4>
                  <div className="space-y-2">
                    {group.templates.map((t) => (
                      <label key={t.id} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${templates[t.id] ? 'border-teal bg-teal/5' : 'border-n100 hover:border-n300'}`}>
                        <input type="checkbox" checked={!!templates[t.id]} onChange={() => toggleTemplate(t.id)} className="sr-only" />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${templates[t.id] ? 'bg-teal border-teal text-white' : 'border-n300'}`}>
                          {templates[t.id] && (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-heading font-semibold text-navy">{t.label}</span>
                          <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-xs text-n500">Segment: {t.segment}</span>
                            <span className={`text-xs font-heading font-semibold ${t.effort === 'Low' ? 'text-success' : t.effort === 'Medium' ? 'text-teal-dark' : 'text-orange'}`}>{t.effort} effort</span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 3: Write Touchpoint ── */}
        {currentStep === 3 && (
          <div>
            <p className="text-n700 leading-relaxed mb-6">
              Write one touchpoint message using the Playbook voice guidelines. This message will be
              injected into your branded Welcome Email template.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm font-heading font-semibold text-navy mb-1">Target Segment</label>
                <select value={touchpointSegment} onChange={(e) => setTouchpointSegment(e.target.value)} className="w-full px-3 py-2 border border-n200 rounded-lg text-sm focus:outline-none focus:border-navy bg-white">
                  <option value="new-novice">New/Novice</option>
                  <option value="recreational">Recreational</option>
                  <option value="enthusiast">Enthusiast</option>
                  <option value="at-risk">At-Risk</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-heading font-semibold text-navy mb-1">Touchpoint Type</label>
                <select value={touchpointType} onChange={(e) => setTouchpointType(e.target.value)} className="w-full px-3 py-2 border border-n200 rounded-lg text-sm focus:outline-none focus:border-navy bg-white">
                  <option value="welcome-email">Welcome Email</option>
                  <option value="deposit-prompt">Deposit Limit Prompt</option>
                  <option value="session-reminder">Session Reminder</option>
                  <option value="myth-bust">Myth-Busting Social Card</option>
                  <option value="support-page">Support Page Header</option>
                </select>
              </div>
            </div>

            <div className="bg-n50 border border-n100 rounded-lg p-4 mb-4">
              <h4 className="text-xs font-heading font-bold text-n500 uppercase tracking-wider mb-2">Voice Checklist</h4>
              <ul className="space-y-1 text-sm text-n700">
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span> Witty, not preachy</li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span> Confident, not condescending</li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span> Sharp, not clinical</li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span> Use empowerment framing</li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span> Avoid stigmatizing language</li>
              </ul>
            </div>

            <label className="block text-sm font-heading font-semibold text-navy mb-2">Your Message</label>
            <textarea
              value={touchpointText}
              onChange={(e) => setTouchpointText(e.target.value)}
              placeholder={touchpointType === 'welcome-email' ? `Welcome to ${brandConfig.programName}! Here's what you need to know...` : touchpointType === 'deposit-prompt' ? 'Setting a weekly limit is one of the smartest moves you can make...' : touchpointType === 'session-reminder' ? "You've been playing for 45 minutes. Quick check-in..." : touchpointType === 'myth-bust' ? 'MYTH: Slot machines run hot and cold...' : 'Need support? We make it easy to find help...'}
              rows={6}
              className="w-full px-4 py-3 border border-n200 rounded-lg text-sm bg-white text-n900 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 placeholder:text-n400 resize-y"
            />
            <p className="text-xs text-n400 mt-1">Write 2-4 sentences in Playbook voice. This will appear in your branded Welcome Email.</p>
          </div>
        )}

        {/* ── Step 4: Review & Export ── */}
        {currentStep === 4 && (
          <div>
            <p className="text-n700 dark:text-n300 leading-relaxed mb-6">
              Review your configuration and download branded template files.
            </p>

            {/* Brand config summary */}
            <div className="mb-6">
              <h4 className="text-sm font-heading font-semibold text-navy dark:text-white uppercase tracking-wider mb-3">Brand Configuration</h4>
              <BrandSummaryCard brand={brandConfig} />
            </div>

            {/* Selected templates */}
            <div className="mb-6">
              <h4 className="text-sm font-heading font-semibold text-navy dark:text-white uppercase tracking-wider mb-3">Selected Templates ({selectedTemplateCount})</h4>
              <div className="flex flex-wrap gap-2">
                {TEMPLATE_GROUPS.flatMap(g => g.templates).filter(t => templates[t.id]).map(t => (
                  <span key={t.id} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-teal/10 text-teal-dark font-heading font-semibold">{t.label}</span>
                ))}
                {selectedTemplateCount === 0 && <span className="text-xs text-n400 dark:text-n300">No templates selected</span>}
              </div>
            </div>

            {/* Touchpoint preview */}
            {touchpointText && (
              <div className="mb-6">
                <h4 className="text-sm font-heading font-semibold text-navy dark:text-white uppercase tracking-wider mb-3">Your Touchpoint Message</h4>
                <div className="bg-n50 dark:bg-navy-light/50 border border-n100 dark:border-navy-light rounded-lg p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-navy/10 dark:bg-navy-light text-navy dark:text-n100 font-heading font-semibold">{touchpointSegment.replace('-', '/')}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-teal/10 text-teal-dark font-heading font-semibold">{touchpointType.replace(/-/g, ' ')}</span>
                  </div>
                  <p className="text-sm text-n700 dark:text-n300 leading-relaxed italic">&ldquo;{touchpointText}&rdquo;</p>
                </div>
              </div>
            )}

            {/* Download branded templates */}
            <div className="mb-6">
              <h4 className="text-sm font-heading font-semibold text-navy dark:text-white uppercase tracking-wider mb-3">Download Branded Templates</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'welcome-email' as const, label: 'Welcome Email', desc: 'Branded onboarding email with your touchpoint message' },
                  { id: 'session-reminder' as const, label: 'Session Reminder', desc: '45-minute check-in notification card' },
                  { id: 'helpline-footer' as const, label: 'Helpline Footer', desc: 'Branded helpline strip for any page' },
                ].map((tmpl) => (
                  <button
                    key={tmpl.id}
                    onClick={() => handleDownloadTemplate(tmpl.id)}
                    className="text-left border border-n100 dark:border-navy-light rounded-lg p-4 hover:border-teal hover:bg-teal/5 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <svg className="w-4 h-4 text-n400 group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm font-heading font-semibold text-navy dark:text-white">{tmpl.label}</span>
                    </div>
                    <p className="text-xs text-n500 dark:text-n300">{tmpl.desc}</p>
                    <p className="text-xs text-n400 mt-1 font-mono">.html</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Navigation ── */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-n100">
          <button
            onClick={() => setCurrentStep(Math.max(-1, currentStep - 1))}
            className="px-4 py-2 text-sm text-n500 hover:text-navy transition-colors font-heading font-semibold"
          >
            &larr; {currentStep === 0 ? 'Back' : 'Previous'}
          </button>

          {currentStep < STEPS.length - 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-6 py-2.5 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors"
            >
              Continue &rarr;
            </button>
          ) : (
            <button
              onClick={handleComplete}
              className="px-6 py-2.5 bg-teal text-navy text-sm font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors"
            >
              Complete Capstone
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
