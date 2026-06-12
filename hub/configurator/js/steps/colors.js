/* steps/colors.js — Color step wiring: picker↔hex sync, auto-tint,
   footer-bar override tracking. */

import { appState } from '../state.js';
import { generateNeutrals, lighten } from '../color-utils.js';

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

function autoTintFromBase() {
  const tint = document.getElementById('colorNeutralTint').value;
  const neutrals = generateNeutrals(tint);
  const ids = ['colorN900', 'colorN700', 'colorN500', 'colorN300', 'colorN100', 'colorN50'];
  neutrals.forEach((n, i) => {
    document.getElementById(ids[i]).value = n.hex;
    document.getElementById(ids[i] + 'Hex').value = n.hex;
  });
  onChange();
}

function resetFooterBarColor(e) {
  if (e) e.preventDefault();
  appState.footerColorManual = false;
  const primary = document.getElementById('colorPrimary').value;
  const auto = lighten(primary, 0.15);
  document.getElementById('colorFooterBar').value = auto;
  document.getElementById('colorFooterBarHex').value = auto;
  document.getElementById('footerBarResetLink').style.display = 'none';
  onChange();
}

export function syncFooterBarUi() {
  const link = document.getElementById('footerBarResetLink');
  if (link) link.style.display = appState.footerColorManual ? '' : 'none';
}

export function initColorsStep(onChangeCb) {
  onChange = onChangeCb;

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
