/* schema.js — Canonical registry mapping every simple form field to its
   _brand.yml path. Import, export, autosave, and validation all walk this
   list, so adding a field here wires it into all four for free.

   kind: 'text' | 'color' | 'number' | 'select' | 'check'
   Color fields are picker+hex pairs: `id` is the <input type="color">,
   `${id}Hex` is the synced hex text input.

   Complex structures (messaging arrays, pillars, tone lists, country
   profiles, logo/font uploads, jurisdiction selection) are handled in
   state.js — they don't fit a flat id↔path mapping. */

export const FIELDS = [
  // ── Identity ──
  { id: 'programName',     yamlPath: 'meta.program_name',     kind: 'text',   default: 'Playbook' },
  { id: 'orgName',         yamlPath: 'meta.organization',     kind: 'text',   default: '' },
  { id: 'websiteUrl',      yamlPath: 'meta.website',          kind: 'text',   default: '' },
  { id: 'contactEmail',    yamlPath: 'meta.contact_email',    kind: 'text',   default: '' },
  { id: 'yearEstablished', yamlPath: 'meta.year_established', kind: 'number', default: new Date().getFullYear() },

  // ── Colors ──
  { id: 'colorPrimary',   yamlPath: 'color.palette.primary',     kind: 'color', default: '#1B2838' },
  { id: 'colorSecondary', yamlPath: 'color.palette.secondary',   kind: 'color', default: '#00D4AA' },
  { id: 'colorAccent',    yamlPath: 'color.palette.accent',      kind: 'color', default: '#FF6B35' },
  { id: 'colorN900',      yamlPath: 'color.palette.neutral_900', kind: 'color', default: '#1A1A2E' },
  { id: 'colorN700',      yamlPath: 'color.palette.neutral_700', kind: 'color', default: '#3D3D5C' },
  { id: 'colorN500',      yamlPath: 'color.palette.neutral_500', kind: 'color', default: '#6B6B8A' },
  { id: 'colorN300',      yamlPath: 'color.palette.neutral_300', kind: 'color', default: '#A8A8C0' },
  { id: 'colorN200',      yamlPath: 'color.palette.neutral_200', kind: 'color', default: '#C8C8D8' },
  { id: 'colorN100',      yamlPath: 'color.palette.neutral_100', kind: 'color', default: '#E8E8F0' },
  { id: 'colorN50',       yamlPath: 'color.palette.neutral_50',  kind: 'color', default: '#F5F5FA' },
  { id: 'colorSuccess',   yamlPath: 'color.palette.success',     kind: 'color', default: '#00C853' },
  { id: 'colorWarning',   yamlPath: 'color.palette.warning',     kind: 'color', default: '#FFB300' },
  { id: 'colorDanger',    yamlPath: 'color.palette.danger',      kind: 'color', default: '#FF3D00' },
  { id: 'colorFooterBar', yamlPath: 'color.palette.primary_light', kind: 'color', default: '#2A3F56' },
  // UI-only color fields (not exported to YAML)
  { id: 'colorNeutralTint', yamlPath: null, kind: 'color', default: '#1A1A2E' },
  { id: 'allowGradients',   yamlPath: null, kind: 'check', default: true },

  // ── Typography ──
  { id: 'fontHeading', yamlPath: 'typography.fonts.heading.family',   kind: 'select', default: 'Inter' },
  { id: 'fontBody',    yamlPath: 'typography.fonts.body.family',      kind: 'select', default: 'Source Sans 3' },
  { id: 'fontMono',    yamlPath: 'typography.fonts.monospace.family', kind: 'select', default: 'Source Code Pro' },
  { id: 'scaleDisplay',   yamlPath: 'typography.scale.display',    kind: 'number', default: 3.0 },
  { id: 'scaleH1',        yamlPath: 'typography.scale.h1',         kind: 'number', default: 2.5 },
  { id: 'scaleH2',        yamlPath: 'typography.scale.h2',         kind: 'number', default: 2.0 },
  { id: 'scaleH3',        yamlPath: 'typography.scale.h3',         kind: 'number', default: 1.5 },
  { id: 'scaleH4',        yamlPath: 'typography.scale.h4',         kind: 'number', default: 1.25 },
  { id: 'scaleBodyLarge', yamlPath: 'typography.scale.body_large', kind: 'number', default: 1.125 },
  { id: 'scaleBody',      yamlPath: 'typography.scale.body',       kind: 'number', default: 1.0 },
  { id: 'scaleSmall',     yamlPath: 'typography.scale.small',      kind: 'number', default: 0.875 },
  { id: 'scaleCaption',   yamlPath: 'typography.scale.caption',    kind: 'number', default: 0.75 },
  { id: 'lhHeading', yamlPath: 'typography.line_height.heading', kind: 'number', default: 1.2 },
  { id: 'lhBody',    yamlPath: 'typography.line_height.body',    kind: 'number', default: 1.6 },
  { id: 'lhTight',   yamlPath: 'typography.line_height.tight',   kind: 'number', default: 1.3 },

  // ── Voice & culture ──
  { id: 'cultureVoice',      yamlPath: 'cultural_profile.voice',      kind: 'select', default: 'peer' },
  { id: 'cultureFraming',    yamlPath: 'cultural_profile.framing',    kind: 'select', default: 'individual' },
  { id: 'cultureHumor',      yamlPath: 'cultural_profile.humor',      kind: 'select', default: 'irreverent' },
  { id: 'cultureDirectness', yamlPath: 'cultural_profile.directness', kind: 'select', default: 'blunt' },
  { id: 'cultureComfort',    yamlPath: 'cultural_profile.comfort',    kind: 'select', default: 'open' },
  { id: 'toneHumor',     yamlPath: 'tone.humor',     kind: 'select', default: 'confident-wit' },
  { id: 'toneFormality', yamlPath: 'tone.formality', kind: 'select', default: 'conversational' },

  // ── Jurisdiction & support ──
  { id: 'helplineNumber', yamlPath: 'helplines.default.number',      kind: 'text', default: '1-800-522-4700' },
  { id: 'textNumber',     yamlPath: 'helplines.default.text_number', kind: 'text', default: 'Text 800GAM' },
  { id: 'chatUrl',        yamlPath: 'helplines.default.chat_url',    kind: 'text', default: 'https://www.ncpgambling.org/chat' },
  { id: 'minAge',         yamlPath: 'legal.minimum_gambling_age.default', kind: 'number', default: 21 },
  { id: 'limitsUrl',         yamlPath: 'integration.limits_url',          kind: 'text', default: '' },
  { id: 'selfExclusionName', yamlPath: 'integration.self_exclusion_name', kind: 'text', default: 'State self-exclusion program' },
  { id: 'selfExclusionUrl',  yamlPath: 'integration.self_exclusion_url',  kind: 'text', default: '' },
  { id: 'supportOrgName',    yamlPath: 'integration.support_org_name',    kind: 'text', default: 'National Council on Problem Gambling' },
  { id: 'supportOrgUrl',     yamlPath: 'integration.support_org_url',     kind: 'text', default: 'https://www.ncpgambling.org' },
  { id: 'disclaimerAge',     yamlPath: 'legal.disclaimers.age',           kind: 'text', default: 'You must be {{MIN_AGE}}+ to gamble.' },
  { id: 'disclaimerGeneral', yamlPath: 'legal.disclaimers.general',       kind: 'text', default: 'If you or someone you know has a gambling problem and wants help, call 1-800-GAMBLER. 21+ and present in a state where wagering is legal.' },

  // ── Currency ──
  { id: 'currencySymbol',    yamlPath: 'currency.default.symbol',    kind: 'text',   default: '$' },
  { id: 'currencyCode',      yamlPath: 'currency.default.code',      kind: 'text',   default: 'USD' },
  { id: 'currencyPosition',  yamlPath: 'currency.default.position',  kind: 'select', default: 'before' },
  { id: 'currencyThousands', yamlPath: 'currency.default.thousands', kind: 'text',   default: ',' },
  { id: 'currencyDecimal',   yamlPath: 'currency.default.decimal',   kind: 'text',   default: '.' },

  // ── Content defaults ──
  { id: 'cdStatGame1',  yamlPath: 'content_defaults.stat_game_1',  kind: 'text', default: 'Blackjack (basic strategy)' },
  { id: 'cdStatValue1', yamlPath: 'content_defaults.stat_value_1', kind: 'text', default: '0.5%' },
  { id: 'cdStatNote1',  yamlPath: 'content_defaults.stat_note_1',  kind: 'text', default: 'Best odds in the casino' },
  { id: 'cdStatGame2',  yamlPath: 'content_defaults.stat_game_2',  kind: 'text', default: 'American Roulette' },
  { id: 'cdStatValue2', yamlPath: 'content_defaults.stat_value_2', kind: 'text', default: '5.26%' },
  { id: 'cdStatNote2',  yamlPath: 'content_defaults.stat_note_2',  kind: 'text', default: 'Double zero = double edge' },
  { id: 'cdStatGame3',  yamlPath: 'content_defaults.stat_game_3',  kind: 'text', default: 'Slots (average)' },
  { id: 'cdStatValue3', yamlPath: 'content_defaults.stat_value_3', kind: 'text', default: '2–15%' },
  { id: 'cdStatNote3',  yamlPath: 'content_defaults.stat_note_3',  kind: 'text', default: 'Varies by machine and casino' },
  { id: 'cdHeroHeadline', yamlPath: 'content_defaults.hero_headline', kind: 'text', default: 'Every game has math. Here’s yours.' },
  { id: 'cdHeroSubhead',  yamlPath: 'content_defaults.hero_subhead',  kind: 'text', default: 'Know the house edge. Pick your games. Set your budget.' },
  { id: 'cdQuizCta',      yamlPath: 'content_defaults.quiz_cta',      kind: 'text', default: 'Think you know the odds? Scan to take the quiz' },
  { id: 'cdToolsHeadline', yamlPath: 'content_defaults.tools_headline', kind: 'text', default: 'Your tools. Your limits. Your call.' },
  { id: 'cdToolsBody',     yamlPath: 'content_defaults.tools_body',     kind: 'text', default: 'Set your deposit limit, session reminders, and activity alerts in your account settings. Takes 10 seconds.' },
  { id: 'cdSupportHeadline', yamlPath: 'content_defaults.support_headline', kind: 'text', default: 'Free, confidential support' },
  { id: 'cdSupportBody',     yamlPath: 'content_defaults.support_body',     kind: 'text', default: 'For any question about gambling. No judgment. Ever.' },
];

/* The yamlPath list the exporter overwrites on top of an imported document.
   Anything outside these paths round-trips untouched. */
export const MANAGED_PATHS = FIELDS.filter(f => f.yamlPath).map(f => f.yamlPath);

export function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o && typeof o === 'object' ? o[k] : undefined), obj);
}

export function setByPath(obj, path, value) {
  const keys = path.split('.');
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (typeof cur[keys[i]] !== 'object' || cur[keys[i]] === null) cur[keys[i]] = {};
    cur = cur[keys[i]];
  }
  cur[keys[keys.length - 1]] = value;
}

const HEX_RE = /^#[0-9A-Fa-f]{6}$/;

/* Mirrors lib/validate-brand.mjs so problems surface before download.
   Takes the assembled brand object (what yaml-export.js will dump). */
export function validateBrand(brand) {
  const errors = [];
  const warnings = [];

  if (!brand.meta?.program_name) errors.push('meta.program_name is required');
  if (!brand.meta?.organization || brand.meta.organization === 'Your Company Name') {
    warnings.push('Organization is still the default — set it on the Identity step');
  }

  const palette = brand.color?.palette || {};
  for (const key of ['primary', 'secondary', 'accent', 'neutral_900', 'neutral_50', 'white']) {
    if (!palette[key]) errors.push(`color.palette.${key} is required`);
    else if (!HEX_RE.test(palette[key])) errors.push(`color.palette.${key} = "${palette[key]}" is not a valid hex color`);
  }
  for (const [k, v] of Object.entries(palette)) {
    if (typeof v === 'string' && !HEX_RE.test(v)) errors.push(`color.palette.${k} = "${v}" is not a valid hex color`);
  }
  for (const [alias, ref] of Object.entries(brand.color?.aliases || {})) {
    if (!palette[ref]) errors.push(`color alias "${alias}" points to "${ref}", which is not in the palette`);
  }
  for (const [key, ref] of Object.entries(brand.color?.semantic || {})) {
    if (!palette[ref]) errors.push(`semantic color "${key}" points to "${ref}", which is not in the palette`);
  }

  for (const role of ['heading', 'body']) {
    if (!brand.typography?.fonts?.[role]?.family) errors.push(`typography.fonts.${role}.family is required`);
  }

  const pillars = brand.brand_pillars || [];
  if (pillars.length < 2) warnings.push(`Only ${pillars.length} brand pillar(s) defined (expected at least 2)`);

  const taglineCount = Object.values(brand.messaging?.taglines || {}).flat().length;
  if (taglineCount === 0) warnings.push('No taglines defined');

  const hl = brand.helplines?.default || {};
  if (!hl.number) warnings.push('No default helpline number set');

  return { errors, warnings };
}
