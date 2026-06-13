/* tokens.js — {{PLACEHOLDER}} resolution, mirroring lib/resolve-placeholders.mjs.

   Two token sets:
   - getOperatorTokens(): export mode — operator values only; runtime tokens
     ({{DURATION}}, {{LIMIT_AMOUNT}}, …) are left empty so the operator's app
     fills them.
   - getPreviewTokens(): gallery mode — layers plausible sample values over
     the operator set so template previews don't show raw braces. */

import { appState } from './state.js';
import { JURISDICTION_PRESETS } from './data/jurisdictions.js';

function val(id, fallback = '') {
  const el = document.getElementById(id);
  return el && el.value ? el.value : fallback;
}

export function getOperatorTokens() {
  const preset = JURISDICTION_PRESETS[appState.jurisdictionId] || {};
  return {
    '{{PROGRAM_NAME}}': val('programName', 'Playbook'),
    '{{ORGANIZATION}}': val('orgName', 'Your Company'),
    '{{HELPLINE_NUMBER}}': val('helplineNumber', '1-800-522-4700'),
    '{{MIN_AGE}}': val('minAge', '21'),
    '{{WEBSITE}}': val('websiteUrl', 'https://example.com'),
    '{{TEXT_NUMBER}}': val('textNumber'),
    '{{CHAT_URL}}': val('chatUrl'),
    '{{LIMITS_URL}}': val('limitsUrl', '#limits'),
    '{{SELF_EXCLUSION_URL}}': val('selfExclusionUrl', '#self-exclusion'),
    '{{SELF_EXCLUSION_NAME}}': val('selfExclusionName', 'Self-exclusion program'),
    '{{SUPPORT_ORG_NAME}}': val('supportOrgName', 'Support Organization'),
    '{{SUPPORT_ORG_URL}}': val('supportOrgUrl', '#'),
    '{{RESET_DATE}}': '',
    '{{DURATION}}': '',
    '{{PERIOD}}': '',
    '{{LIMIT_AMOUNT}}': '',
    '{{TOTAL_SESSIONS}}': '',
    '{{TOTAL_TIME}}': '',
    '{{JURISDICTION}}': preset.jurisdictionKey || appState.jurisdictionId,
    '{{REGULATOR_URL}}': preset.regulatorUrl || '',
    '{{CONTACT_EMAIL}}': val('contactEmail', 'info@example.com'),
    '{{PROGRAM_URL}}': val('websiteUrl', 'https://example.com'),
  };
}

export function getPreviewTokens() {
  const tokens = getOperatorTokens();
  const minAge = tokens['{{MIN_AGE}}'] || '21';
  const ageDisclaimer = (val('disclaimerAge') || 'You must be {{MIN_AGE}}+ to gamble.')
    .replace(/\{\{MIN_AGE\}\}/g, minAge);
  return {
    ...tokens,
    '{{AGE_DISCLAIMER}}': ageDisclaimer,
    '{{GENERAL_DISCLAIMER}}': val('disclaimerGeneral', 'Gambling involves risk. Play on your terms.'),
    '{{HELPLINE_LABEL}}': (JURISDICTION_PRESETS[appState.jurisdictionId] || {}).label || 'Free, confidential support',
    '{{HELPLINE_ALTERNATE}}': '',
    // Runtime tokens — sample values so preview dialogs read naturally
    '{{RESET_DATE}}': 'July 1',
    '{{DURATION}}': '7 days',
    '{{PERIOD}}': 'week',
    '{{LIMIT_AMOUNT}}': '$200',
    '{{TOTAL_SESSIONS}}': '12',
    '{{TOTAL_TIME}}': '6h 20m',
    '{{STATE_NAME}}': 'your state',
  };
}

export function resolveTokens(text, tokens) {
  if (!text || typeof text !== 'string') return text;
  let resolved = text;
  for (const [token, value] of Object.entries(tokens)) {
    resolved = resolved.split(token).join(value || token);
  }
  return resolved;
}

export function resolveTokensDeep(obj, tokens) {
  if (typeof obj === 'string') return resolveTokens(obj, tokens);
  if (Array.isArray(obj)) return obj.map(item => resolveTokensDeep(item, tokens));
  if (obj && typeof obj === 'object') {
    const result = {};
    for (const [key, valItem] of Object.entries(obj)) {
      result[key] = resolveTokensDeep(valItem, tokens);
    }
    return result;
  }
  return obj;
}
