/* preview-cards.js — The three always-live annotated preview cards
   (myth-buster, tier-2 support, co-brand helpline badge). */

import { appState } from './state.js';
import { lighten, darken, contrastRatio } from './color-utils.js';
import { getNameParts, updateWordmarkPreview } from './wordmark.js';
import { getTypeScale } from './css-export.js';
import { TYPE_SCALE_PRESETS } from './data/type-scales.js';
import { CULTURE_CONTENT } from './data/culture-content.js';
import { JURISDICTION_PRESETS } from './data/jurisdictions.js';

export function getNeutrals() {
  return [
    { label: '900', hex: document.getElementById('colorN900').value },
    { label: '700', hex: document.getElementById('colorN700').value },
    { label: '500', hex: document.getElementById('colorN500').value },
    { label: '300', hex: document.getElementById('colorN300').value },
    { label: '100', hex: document.getElementById('colorN100').value },
    { label: '50',  hex: document.getElementById('colorN50').value },
  ];
}

export function getSemanticColors() {
  return {
    success: document.getElementById('colorSuccess').value,
    warning: document.getElementById('colorWarning').value,
    danger: document.getElementById('colorDanger').value,
  };
}

export function updatePreview() {
  const primary = document.getElementById('colorPrimary').value;
  const secondary = document.getElementById('colorSecondary').value;
  const accent = document.getElementById('colorAccent').value;
  const primaryLightAuto = lighten(primary, 0.15);
  // Footer bar tracks primary until the user overrides it
  if (!appState.footerColorManual) {
    document.getElementById('colorFooterBar').value = primaryLightAuto;
    document.getElementById('colorFooterBarHex').value = primaryLightAuto;
  }
  const primaryLight = document.getElementById('colorFooterBar').value;
  const primaryDark = darken(primary, 0.3);
  const headingFont = document.getElementById('fontHeading').value;
  const bodyFont = document.getElementById('fontBody').value;
  const helpline = document.getElementById('helplineNumber').value || '1-800-XXX-XXXX';
  const minAge = document.getElementById('minAge').value || '21';

  const root = document.documentElement;
  root.style.setProperty('--cfg-primary', primary);
  root.style.setProperty('--cfg-primary-light', primaryLight);
  root.style.setProperty('--cfg-primary-dark', primaryDark);
  root.style.setProperty('--cfg-secondary', secondary);
  root.style.setProperty('--cfg-accent', accent);
  root.style.setProperty('--cfg-font-mono', `'${document.getElementById('fontMono').value}'`);

  const allowGradients = document.getElementById('allowGradients') ? document.getElementById('allowGradients').checked : true;
  if (allowGradients) {
    root.style.setProperty('--cfg-gradient-bar', `linear-gradient(90deg, ${accent}, ${secondary})`);
    root.style.setProperty('--cfg-gradient-bg', `linear-gradient(180deg, ${primary}, ${primaryDark})`);
  } else {
    root.style.setProperty('--cfg-gradient-bar', secondary);
    root.style.setProperty('--cfg-gradient-bg', primary);
  }

  const neutrals = getNeutrals();
  neutrals.forEach(n => {
    root.style.setProperty('--cfg-neutral-' + n.label, n.hex);
  });

  const semantic = getSemanticColors();
  root.style.setProperty('--cfg-success', semantic.success);
  root.style.setProperty('--cfg-warning', semantic.warning);
  root.style.setProperty('--cfg-danger', semantic.danger);

  // === Preview slot → element mapping ===
  // Myth-Buster card (dark) — mirrors collateral/render/card-1a-hot-streak.html
  // Tier 2 card (light) — mirrors collateral/render/card-tier2-10f.html
  // Co-brand badge (dark) — mirrors the helpline badge lockup
  const n700 = neutrals[1].hex;  // Body text → Tier 2 subline
  const n500 = neutrals[2].hex;  // Captions → Tier 2 helpline channels, QR label
  const n300 = neutrals[3].hex;  // Light text → muted text on dark, Tier 2 QR/footer
  const n100 = neutrals[4].hex;  // Borders → Tier 2 QR border, card-footer border
  const n50  = neutrals[5].hex;  // Background → Tier 2 QR box background

  document.querySelectorAll('.pv-card:not(.pv-card-tier2) .fact-statement, .pv-card:not(.pv-card-tier2) .stat-unit, .pv-card:not(.pv-card-tier2) .footer-legal').forEach(el => { el.style.color = n300; });
  document.querySelectorAll('.pv-card:not(.pv-card-tier2) .myth-statement .strike').forEach(el => { el.style.color = n300; });

  document.querySelectorAll('.pv-card-tier2 .t2-subline').forEach(el => { el.style.color = n700; });
  document.querySelectorAll('.pv-card-tier2 .t2-helpline-channels').forEach(el => { el.style.color = n500; });
  document.querySelectorAll('.pv-card-tier2 .t2-qr-label').forEach(el => { el.style.color = n500; });
  document.querySelectorAll('.pv-card-tier2 .t2-qr-box').forEach(el => {
    el.style.background = n50;
    el.style.border = `1px solid ${n100}`;
    el.style.color = n300;
  });
  document.querySelectorAll('.pv-card-tier2 .t2-footer-text').forEach(el => { el.style.color = n300; });
  document.querySelectorAll('.pv-card-tier2 .card-footer').forEach(el => { el.style.borderTop = `1px solid ${n100}`; });
  document.querySelectorAll('.pv-card-tier2 .t2-helpline-number').forEach(el => { el.style.color = secondary; });

  document.querySelectorAll('.pv-badge .badge-text').forEach(el => { el.style.color = n300; });
  document.querySelectorAll('.pv-card .co-brand-divider').forEach(el => { el.style.background = n300; el.style.opacity = '0.4'; });

  // White text on dark primary backgrounds (canonical per real templates)
  document.querySelectorAll('.pv-card:not(.pv-card-tier2) .myth-statement').forEach(el => { if (!el.querySelector('.strike')) return; el.style.color = '#FFFFFF'; });
  document.querySelectorAll('.pv-card:not(.pv-card-tier2) .footer-helpline').forEach(el => { el.style.color = '#FFFFFF'; });
  document.querySelectorAll('.pv-card:not(.pv-card-tier2) .card-logo .logo-play').forEach(el => { el.style.color = '#FFFFFF'; });
  document.querySelectorAll('.pv-badge .badge-number').forEach(el => { el.style.color = '#FFFFFF'; });
  document.querySelectorAll('.pv-badge .badge-logo .logo-play').forEach(el => { el.style.color = '#FFFFFF'; });
  document.querySelectorAll('.pv-badge .badge-divider').forEach(el => { if (!el.id) el.style.background = n300; });

  // Fonts
  const monoFont = document.getElementById('fontMono').value;
  document.querySelectorAll('.pv-card, .pv-badge').forEach(el => {
    el.style.fontFamily = `'${bodyFont}', sans-serif`;
  });
  document.querySelectorAll('.pv-card .card-logo, .pv-card .card-pillar, .pv-card .myth-label, .pv-card .myth-statement, .pv-card .stat-number, .pv-card .stat-unit, .pv-card-tier2 .t2-headline, .pv-card-tier2 .t2-helpline-channels, .pv-card-tier2 .t2-footer-text, .pv-badge .badge-logo').forEach(el => {
    el.style.fontFamily = `'${headingFont}', sans-serif`;
  });
  document.querySelectorAll('.pv-card .footer-helpline, .pv-card-tier2 .t2-helpline-number, .pv-card-tier2 .t2-qr-box, .pv-badge .badge-number').forEach(el => {
    el.style.fontFamily = `'${monoFont}', monospace`;
  });

  // Font specimens (with type scale)
  const ts = getTypeScale();
  const headingSpec = document.querySelector('#headingSpecimen .font-specimen-heading');
  if (headingSpec) { headingSpec.style.fontFamily = `'${headingFont}', sans-serif`; headingSpec.style.fontSize = `${ts.h2 * 11}px`; headingSpec.style.lineHeight = String(ts.lhHeading); }
  const bodySpec = document.querySelector('#bodySpecimen .font-specimen-body');
  if (bodySpec) { bodySpec.style.fontFamily = `'${bodyFont}', sans-serif`; bodySpec.style.lineHeight = String(ts.lhBody); }
  const monoSpec = document.querySelector('#monoSpecimen .font-specimen-body');
  if (monoSpec) monoSpec.style.fontFamily = `'${monoFont}', monospace`;

  // Type scale on preview cards: each element maps to a scale level;
  // the ratio vs the default preset gives the multiplier.
  const def = TYPE_SCALE_PRESETS.default;
  const scaleMap = [
    { sel: '.pv-card:not(.pv-card-tier2) .myth-statement', base: 26, level: 'h2', defVal: def.h2 },
    { sel: '.pv-card-tier2 .t2-headline', base: 22, level: 'h2', defVal: def.h2 },
    { sel: '.pv-card .myth-label', base: 8, level: 'caption', defVal: def.caption },
    { sel: '.pv-card .fact-statement', base: 13, level: 'body', defVal: def.body },
    { sel: '.pv-card-tier2 .t2-subline', base: 11, level: 'body', defVal: def.body },
    { sel: '.pv-card .stat-number', base: 40, level: 'display', defVal: def.display },
    { sel: '.pv-card .stat-unit', base: 12, level: 'small', defVal: def.small },
    { sel: '.pv-card .card-logo, .pv-badge .badge-logo', base: 16, level: 'h4', defVal: def.h4 },
    { sel: '.pv-card .card-pillar', base: 9, level: 'caption', defVal: def.caption },
    { sel: '.pv-card .footer-helpline', base: 8, level: 'caption', defVal: def.caption },
    { sel: '.pv-card .footer-legal', base: 7, level: 'caption', defVal: def.caption },
    { sel: '.pv-card-tier2 .t2-helpline-number', base: 20, level: 'h2', defVal: def.h2 },
    { sel: '.pv-card-tier2 .t2-helpline-channels, .pv-card-tier2 .t2-qr-label', base: 9, level: 'caption', defVal: def.caption },
    { sel: '.pv-card-tier2 .t2-footer-text', base: 9, level: 'caption', defVal: def.caption },
    { sel: '.pv-badge .badge-text', base: 11, level: 'small', defVal: def.small },
    { sel: '.pv-badge .badge-number', base: 14, level: 'body', defVal: def.body },
  ];
  const tsValues = { display: ts.display, h1: ts.h1, h2: ts.h2, h3: ts.h3, h4: ts.h4, bodyLarge: ts.bodyLarge, body: ts.body, small: ts.small, caption: ts.caption };
  scaleMap.forEach(({ sel, base, level, defVal }) => {
    const ratio = tsValues[level] / defVal;
    const px = Math.round(base * ratio * 10) / 10;
    document.querySelectorAll(sel).forEach(el => { el.style.fontSize = px + 'px'; });
  });
  document.querySelectorAll('.pv-card:not(.pv-card-tier2) .myth-statement, .pv-card-tier2 .t2-headline').forEach(el => { el.style.lineHeight = String(ts.lhHeading); });
  document.querySelectorAll('.pv-card .fact-statement, .pv-card-tier2 .t2-subline').forEach(el => { el.style.lineHeight = String(ts.lhBody); });

  // Program name in logos (text or image replacement)
  const nameParts = getNameParts();
  const replaceWithImage = appState.logoMode === 'replace' && appState.logoDataUrl;
  document.querySelectorAll('.pv-card .card-logo, .pv-badge .badge-logo').forEach(el => {
    const play = el.querySelector('.logo-play');
    const book = el.querySelector('.logo-book');
    const img = el.querySelector('.logo-replace-img');
    if (replaceWithImage) {
      if (play) play.style.display = 'none';
      if (book) book.style.display = 'none';
      if (img) { img.src = appState.logoDataUrl; img.style.display = 'inline-block'; }
    } else {
      if (img) { img.style.display = 'none'; }
      if (play && book) {
        if (nameParts[1]) {
          play.textContent = nameParts[0];
          play.style.display = '';
          book.textContent = nameParts[1];
          book.style.fontWeight = '300';
          book.style.textTransform = 'uppercase';
          book.style.letterSpacing = '0.08em';
        } else {
          play.style.display = 'none';
          book.textContent = nameParts[0];
          book.style.fontWeight = '600';
          book.style.textTransform = 'none';
          book.style.letterSpacing = '-0.02em';
        }
      }
    }
  });

  // Jurisdiction-driven copy
  const preset = JURISDICTION_PRESETS[appState.jurisdictionId] || {};
  const textNum = document.getElementById('textNumber').value || preset.textNumber || '';

  document.querySelectorAll('[id^="pvHelpline"]').forEach(el => {
    let footerText = 'Free support 24/7: ' + helpline;
    if (textNum) footerText += '  |  ' + textNum;
    el.textContent = footerText;
  });
  const ageDisclaimer = (document.getElementById('disclaimerAge').value || '{{MIN_AGE}}+ to gamble').replace(/\{\{MIN_AGE\}\}/g, minAge);
  document.querySelectorAll('[id^="pvLegal"]').forEach(el => {
    el.textContent = ageDisclaimer;
  });
  const badgeNumber = document.getElementById('pvBadgeNumber');
  const chatUrlVal = document.getElementById('chatUrl').value || preset.chatUrl || '';

  const t2Phone = document.getElementById('pvT2Phone');
  if (t2Phone) t2Phone.textContent = helpline;
  const t2Channels = document.querySelector('.pv-card-tier2 .t2-helpline-channels');
  if (t2Channels) {
    const channels = ['Call'];
    if (textNum) channels.push('Text');
    if (chatUrlVal) channels.push('Chat');
    t2Channels.textContent = channels.join(' · ');
  }

  const badgeLabel = document.getElementById('pvBadgeLabel');
  if (badgeLabel) {
    const badgeParts = [preset.label || 'Free, confidential support'];
    badgeParts.push('24/7');
    badgeLabel.textContent = badgeParts.join(' — ');
  }
  if (badgeNumber) {
    let badgeContact = helpline;
    if (textNum) badgeContact += '  |  ' + textNum;
    badgeNumber.textContent = badgeContact;
  }

  // Operator logo in the badge preview
  const badgeOperator = document.getElementById('pvBadgeOperator');
  const badgeCoDivider = document.getElementById('pvBadgeCoDivider');
  if (appState.logoDataUrl && !replaceWithImage) {
    if (badgeOperator) { badgeOperator.innerHTML = '<img class="operator-logo-img" src="' + appState.logoDataUrl + '" alt="Operator logo">'; }
    if (badgeCoDivider) badgeCoDivider.style.display = '';
  } else {
    if (badgeOperator) { badgeOperator.innerHTML = ''; }
    if (badgeCoDivider) badgeCoDivider.style.display = 'none';
  }

  updateCultureContent();
  updateWordmarkPreview();
  updateContrast();
}

/* Plain-language readability check for non-designers. Each brand color gets
   a verdict in words (not a "4.5:1" ratio) plus a concrete fix when it fails.
   The exact ratio stays available on hover/screen-reader via the title. */
function setReadability(badgeId, tipId, ratio, min, fixText) {
  const badge = document.getElementById(badgeId);
  const tip = document.getElementById(tipId);
  const pass = ratio >= min;
  if (badge) {
    badge.textContent = pass ? '✓ Easy to read' : '✕ Hard to read';
    badge.className = 'contrast-badge ' + (pass ? 'contrast-pass' : 'contrast-fail');
    badge.title = `Contrast ${ratio.toFixed(1)}:1 — needs at least ${min}:1 to pass WCAG AA`;
  }
  if (tip) {
    tip.textContent = pass ? '' : fixText;
    tip.classList.toggle('hidden', pass);
  }
}

export function updateContrast() {
  const primary = document.getElementById('colorPrimary').value;
  const secondary = document.getElementById('colorSecondary').value;
  const accent = document.getElementById('colorAccent').value;

  setReadability('contrastPrimary', 'tipPrimary',
    contrastRatio('#ffffff', primary), 4.5,
    'White headings sit on this color. Pick a deeper, darker shade so titles stay crisp.');

  setReadability('contrastSecondary', 'tipSecondary',
    contrastRatio(primary, secondary), 3,
    'This shows up on your primary background. Pick a brighter or lighter shade so badges and links stand out.');

  setReadability('contrastAccent', 'tipAccent',
    contrastRatio(accent, primary), 3,
    'Buttons and big stats use this on your primary background. Pick a brighter, more vivid shade so calls to action pop.');
}

export function updateCultureContent() {
  const humor = document.getElementById('cultureHumor').value;
  const directness = document.getElementById('cultureDirectness').value;
  const framing = document.getElementById('cultureFraming').value;
  const comfort = document.getElementById('cultureComfort').value;
  const voice = document.getElementById('cultureVoice').value;

  const accent = document.getElementById('colorAccent').value || '#FF6B35';
  const secondary = document.getElementById('colorSecondary').value || '#00D4AA';
  const n300Now = (document.getElementById('colorN300') && document.getElementById('colorN300').value) || '#A8A8C0';

  const mythStmt = document.getElementById('pvMythStatement');
  if (mythStmt) {
    const strikeHtml = CULTURE_CONTENT.mythStatement[humor] || CULTURE_CONTENT.mythStatement.irreverent;
    mythStmt.innerHTML = strikeHtml;
    const strike = mythStmt.querySelector('.strike');
    if (strike) {
      strike.style.textDecorationColor = accent;
      strike.style.color = n300Now;
      strike.setAttribute('data-pb-label', 'Light text (n300) — Struck myth, strike color = Accent');
    }
  }

  const factStmt = document.getElementById('pvFactStatement');
  if (factStmt) {
    const dirObj = CULTURE_CONTENT.factStatement[directness] || CULTURE_CONTENT.factStatement.blunt;
    const html = dirObj[framing] || dirObj.individual;
    factStmt.innerHTML = html;
    const strong = factStmt.querySelector('strong');
    if (strong) strong.style.color = secondary;
  }

  const t2Head = document.getElementById('pvT2Headline');
  if (t2Head) {
    const comfortObj = CULTURE_CONTENT.t2Headline[comfort] || CULTURE_CONTENT.t2Headline.open;
    t2Head.innerHTML = comfortObj[voice] || comfortObj.peer;
  }

  const t2Sub = document.getElementById('pvT2Subline');
  if (t2Sub) {
    const comfortObj = CULTURE_CONTENT.t2Subline[comfort] || CULTURE_CONTENT.t2Subline.open;
    t2Sub.textContent = comfortObj[voice] || comfortObj.peer;
  }
}
