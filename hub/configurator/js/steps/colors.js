/* steps/colors.js — Color step wiring: ready-made palette presets,
   picker↔hex sync, auto-tint, footer-bar override tracking. */

import { appState } from '../state.js';
import { generateNeutrals, lighten } from '../color-utils.js';
import { PALETTES } from '../data/palettes.js';

let onChange = () => {};

function syncColor(pickerId, hexId) {
  const picker = document.getElementById(pickerId);
  const hex = document.getElementById(hexId);
  if (!picker || !hex) return;
  picker.addEventListener('input', () => { hex.value = picker.value; onChange(); });
  hex.addEventListener('input', () => {
    const v = hex.value;
    if (/^#[0-9a-fA-F]{6}$/.test(v)) { picker.value = v; onChange(); }
  });
}

function setColor(id, hex) {
  document.getElementById(id).value = hex;
  document.getElementById(id + 'Hex').value = hex;
}

/* Regenerate the six-stop neutral scale from a dark base color. */
function applyNeutralsFromTint(tint) {
  setColor('colorNeutralTint', tint);
  const neutrals = generateNeutrals(tint);
  const ids = ['colorN900', 'colorN700', 'colorN500', 'colorN300', 'colorN100', 'colorN50'];
  neutrals.forEach((n, i) => setColor(ids[i], n.hex));
}

function autoTintFromBase() {
  applyNeutralsFromTint(document.getElementById('colorNeutralTint').value);
  onChange();
}

/* ---- Ready-made palettes ---------------------------------------------- */

function markSelectedPreset() {
  const primary = document.getElementById('colorPrimary').value.toLowerCase();
  const secondary = document.getElementById('colorSecondary').value.toLowerCase();
  const accent = document.getElementById('colorAccent').value.toLowerCase();
  document.querySelectorAll('#palettePresetsGrid .palette-card').forEach(card => {
    const p = PALETTES.find(x => x.id === card.dataset.paletteId);
    const match = p
      && p.primary.toLowerCase() === primary
      && p.secondary.toLowerCase() === secondary
      && p.accent.toLowerCase() === accent;
    card.classList.toggle('selected', !!match);
    card.setAttribute('aria-selected', match ? 'true' : 'false');
  });
}

function applyPalette(p) {
  setColor('colorPrimary', p.primary);
  setColor('colorSecondary', p.secondary);
  setColor('colorAccent', p.accent);

  // Coordinate the rest of the system: derive neutrals from the new primary
  // and let the footer bar re-derive from it too.
  applyNeutralsFromTint(p.primary);
  appState.footerColorManual = false;
  const auto = lighten(p.primary, 0.15);
  setColor('colorFooterBar', auto);
  syncFooterBarUi();

  markSelectedPreset();
  onChange();
}

function renderPalettePresets() {
  const grid = document.getElementById('palettePresetsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  PALETTES.forEach(p => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'palette-card';
    card.dataset.paletteId = p.id;
    card.setAttribute('role', 'option');
    card.setAttribute('aria-selected', 'false');
    card.setAttribute('aria-label', `${p.name} palette. ${p.blurb}`);
    card.innerHTML = `
      <span class="palette-card-swatches" aria-hidden="true">
        <span class="palette-card-swatch" style="background:${p.primary}"></span>
        <span class="palette-card-swatch" style="background:${p.secondary}"></span>
        <span class="palette-card-swatch" style="background:${p.accent}"></span>
      </span>
      <span class="palette-card-name">${p.name}</span>
      <span class="palette-card-blurb">${p.blurb}</span>`;
    card.addEventListener('click', () => applyPalette(p));
    grid.appendChild(card);
  });
  markSelectedPreset();
}

/* ---- Footer bar ------------------------------------------------------- */

function resetFooterBarColor(e) {
  if (e) e.preventDefault();
  appState.footerColorManual = false;
  const primary = document.getElementById('colorPrimary').value;
  setColor('colorFooterBar', lighten(primary, 0.15));
  document.getElementById('footerBarResetLink').style.display = 'none';
  onChange();
}

export function syncFooterBarUi() {
  const link = document.getElementById('footerBarResetLink');
  if (link) link.style.display = appState.footerColorManual ? '' : 'none';
}

export function initColorsStep(onChangeCb) {
  onChange = onChangeCb;

  renderPalettePresets();

  [
    ['colorPrimary', 'colorPrimaryHex'],
    ['colorSecondary', 'colorSecondaryHex'],
    ['colorAccent', 'colorAccentHex'],
    ['colorNeutralTint', 'colorNeutralTintHex'],
    ['colorN900', 'colorN900Hex'],
    ['colorN700', 'colorN700Hex'],
    ['colorN500', 'colorN500Hex'],
    ['colorN300', 'colorN300Hex'],
    ['colorN200', 'colorN200Hex'],
    ['colorN100', 'colorN100Hex'],
    ['colorN50', 'colorN50Hex'],
    ['colorSuccess', 'colorSuccessHex'],
    ['colorWarning', 'colorWarningHex'],
    ['colorDanger', 'colorDangerHex'],
  ].forEach(([p, h]) => syncColor(p, h));

  // Editing any of the three brand colors re-checks which preset (if any)
  // still matches, so the highlight follows manual tweaks.
  ['colorPrimary', 'colorSecondary', 'colorAccent'].forEach(id => {
    document.getElementById(id).addEventListener('input', markSelectedPreset);
    document.getElementById(id + 'Hex').addEventListener('input', markSelectedPreset);
  });

  // Footer bar: editing it switches off the auto-derive-from-primary behavior
  const footerPicker = document.getElementById('colorFooterBar');
  const footerHex = document.getElementById('colorFooterBarHex');
  footerPicker.addEventListener('input', () => {
    appState.footerColorManual = true;
    footerHex.value = footerPicker.value;
    document.getElementById('footerBarResetLink').style.display = '';
    onChange();
  });
  footerHex.addEventListener('input', () => {
    const v = footerHex.value;
    if (/^#[0-9a-fA-F]{6}$/.test(v)) {
      appState.footerColorManual = true;
      footerPicker.value = v;
      document.getElementById('footerBarResetLink').style.display = '';
      onChange();
    }
  });

  document.getElementById('btnAutoTint').addEventListener('click', autoTintFromBase);
  document.getElementById('footerBarResetLink').addEventListener('click', resetFooterBarColor);
}

export { markSelectedPreset };
