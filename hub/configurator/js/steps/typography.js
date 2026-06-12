/* steps/typography.js — Type-scale presets and the individual-values panel. */

import { appState } from '../state.js';
import { TYPE_SCALE_PRESETS } from '../data/type-scales.js';

let onChange = () => {};

export function applyTypeScale(presetName) {
  const p = TYPE_SCALE_PRESETS[presetName];
  if (!p) return;
  document.getElementById('scaleDisplay').value = p.display;
  document.getElementById('scaleH1').value = p.h1;
  document.getElementById('scaleH2').value = p.h2;
  document.getElementById('scaleH3').value = p.h3;
  document.getElementById('scaleH4').value = p.h4;
  document.getElementById('scaleBodyLarge').value = p.bodyLarge;
  document.getElementById('scaleBody').value = p.body;
  document.getElementById('scaleSmall').value = p.small;
  document.getElementById('scaleCaption').value = p.caption;
  document.getElementById('lhHeading').value = p.lhHeading;
  document.getElementById('lhBody').value = p.lhBody;
  document.getElementById('lhTight').value = p.lhTight;
  appState.scalePreset = presetName;
  syncScalePresetUi();
  onChange();
}

export function syncScalePresetUi() {
  document.querySelectorAll('.scale-preset').forEach(el => {
    const active = el.dataset.scale === appState.scalePreset;
    el.classList.toggle('active', active);
    el.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

export function initTypographyStep(onChangeCb) {
  onChange = onChangeCb;

  document.querySelectorAll('.scale-preset').forEach(el => {
    el.addEventListener('click', () => applyTypeScale(el.dataset.scale));
  });

  // Editing any individual value makes the preset "custom"
  ['scaleDisplay','scaleH1','scaleH2','scaleH3','scaleH4','scaleBodyLarge','scaleBody','scaleSmall','scaleCaption','lhHeading','lhBody','lhTight'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      appState.scalePreset = 'custom';
      syncScalePresetUi();
    });
  });
}
