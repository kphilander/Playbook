/* main.js — Entry point: wires the wizard shell, navigation, autosave,
   and all step modules together. */

import { appState, scheduleSave } from './state.js';
import { updatePreview } from './preview-cards.js';
import { updateSplitSlider, updateWordmarkPreview, syncSplitSliderBounds } from './wordmark.js';
import { initLogoUpload, restoreLogoUi } from './logo.js';
import { initFontUpload, restoreFontUi } from './fonts.js';
import { initColorsStep, syncFooterBarUi } from './steps/colors.js';
import { initTypographyStep, syncScalePresetUi } from './steps/typography.js';
import { initMessagingStep, renderMessagingLists } from './steps/messaging.js';
import { initVoiceStep, renderVoiceLists } from './steps/voice.js';
import { initJurisdictionStep, syncJurisdictionUi } from './steps/jurisdiction.js';
import { initReviewStep, renderValidation } from './steps/review.js';
import { initWelcomeStep } from './steps/welcome.js';
import { initGallery, scheduleGalleryRefresh, refreshGalleryNow } from './preview-gallery.js';

const STEPS = [
  { id: 'step0', label: 'Welcome' },
  { id: 'step1', label: 'Identity' },
  { id: 'step2', label: 'Colors' },
  { id: 'step3', label: 'Typography' },
  { id: 'step4', label: 'Voice & Culture' },
  { id: 'step5', label: 'Messaging' },
  { id: 'step6', label: 'Jurisdiction' },
  { id: 'step7', label: 'Download' },
];

let currentStep = 0;

/* Re-render every brand-driven surface. The single "something changed"
   callback handed to all step modules. */
function onBrandChange() {
  updatePreview();
  scheduleGalleryRefresh();
  scheduleSave();
  if (currentStep === 7) renderValidation();
}

export function goToStep(n) {
  const prev = document.getElementById(STEPS[currentStep].id);
  if (prev) prev.classList.remove('active');
  const next = document.getElementById(STEPS[n].id);
  next.classList.add('active');
  currentStep = n;

  document.getElementById('progressFill').style.width = ((n) / (STEPS.length - 1) * 100) + '%';
  document.title = n === 0
    ? 'Brand Configurator — Playbook'
    : `Step ${n} of ${STEPS.length - 1}: ${STEPS[n].label} — Playbook Brand Configurator`;

  // Step list state + focus the new step's heading for screen readers
  document.querySelectorAll('#stepNav button').forEach((btn, i) => {
    btn.classList.toggle('active', i === n);
    if (i === n) btn.setAttribute('aria-current', 'step');
    else btn.removeAttribute('aria-current');
  });
  const heading = next.querySelector('.step-title');
  if (heading) heading.focus({ preventScroll: false });

  const panel = document.querySelector('.wizard-panel');
  if (panel) panel.scrollTo({ top: 0, behavior: 'auto' });

  if (n === 7) renderValidation();
  onBrandChange();
}

function buildStepNav() {
  const nav = document.getElementById('stepNav');
  STEPS.forEach((step, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = `<span class="step-nav-num">${i === 0 ? '★' : i}</span><span class="step-nav-label">${step.label}</span>`;
    btn.addEventListener('click', () => goToStep(i));
    li.appendChild(btn);
    nav.appendChild(li);
  });
}

function wireNavButtons() {
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.goto, 10)));
  });
}

/* Collapsible "advanced" sections: <button class="advanced-toggle"
   data-target="..." aria-expanded="..."> + .advanced-section */
function wireToggles() {
  document.querySelectorAll('.advanced-toggle[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = document.getElementById(btn.dataset.target);
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      section.classList.toggle('visible', !open);
    });
  });
}

/* Live preview / template gallery tabs on the right panel */
function wirePreviewTabs() {
  const tabs = document.querySelectorAll('#previewPanelTabs [role="tab"]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
        t.classList.toggle('active', t === tab);
      });
      document.querySelectorAll('.preview-pane').forEach(p => {
        p.classList.toggle('active', p.id === tab.getAttribute('aria-controls'));
      });
      if (tab.getAttribute('aria-controls') === 'previewPaneGallery') refreshGalleryNow();
    });
  });
  document.getElementById('previewPanelTabs').addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const list = [...tabs];
    const idx = list.indexOf(document.activeElement);
    if (idx === -1) return;
    const next = e.key === 'ArrowRight' ? (idx + 1) % list.length : (idx - 1 + list.length) % list.length;
    list[next].focus();
    list[next].click();
  });
}

/* Mobile: the preview panel collapses into a bottom drawer */
function wireDrawer() {
  const toggle = document.getElementById('previewDrawerToggle');
  const panel = document.querySelector('.preview-panel');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    panel.classList.toggle('drawer-open', !open);
    toggle.querySelector('.drawer-toggle-label').textContent = open ? 'Show preview' : 'Hide preview';
    if (!open) refreshGalleryNow();
  });
}

/* Restore UI from appState + DOM field values after an import or an
   autosave resume. */
function rehydrateAll() {
  restoreLogoUi();
  restoreFontUi();
  syncJurisdictionUi();
  syncScalePresetUi();
  syncFooterBarUi();
  renderMessagingLists();
  renderVoiceLists();
  syncSplitSliderBounds();
  onBrandChange();
}

function onImported() {
  rehydrateAll();
  goToStep(1);
}

document.addEventListener('DOMContentLoaded', () => {
  buildStepNav();
  wireNavButtons();
  wireToggles();
  wirePreviewTabs();
  wireDrawer();

  initColorsStep(onBrandChange);
  initTypographyStep(onBrandChange);
  initMessagingStep(onBrandChange);
  initVoiceStep(onBrandChange);
  initJurisdictionStep(onBrandChange);
  initReviewStep();
  initLogoUpload(onBrandChange);
  initFontUpload(onBrandChange);
  initWelcomeStep({ onImported, onResume: rehydrateAll });
  initGallery();

  // Wordmark split events
  const nameInput = document.getElementById('programName');
  const splitSlider = document.getElementById('splitSlider');
  const noSplitCheck = document.getElementById('noSplitCheck');
  nameInput.addEventListener('input', () => { updateSplitSlider(); });
  splitSlider.addEventListener('input', () => { updateWordmarkPreview(); });
  noSplitCheck.addEventListener('change', () => { updateWordmarkPreview(); });

  // Any input change re-renders the preview, refreshes the gallery, autosaves
  document.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', onBrandChange);
    el.addEventListener('change', onBrandChange);
  });

  goToStep(0);
  updateSplitSlider();
  updatePreview();
});
