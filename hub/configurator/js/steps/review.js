/* steps/review.js — Review & Download: output tabs, validation summary,
   and all download buttons. */

import { generateFullYaml, buildBrandObject } from '../yaml-export.js';
import { generateFullCss } from '../css-export.js';
import { validateBrand } from '../schema.js';
import { downloadYaml, downloadCss, downloadSample, downloadContentKit, downloadSingleJson } from '../exports.js';

function showOutputTab(tab, clickedBtn) {
  document.querySelectorAll('.preview-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.preview-tab-content').forEach(c => c.classList.remove('active'));
  clickedBtn.classList.add('active');
  clickedBtn.setAttribute('aria-selected', 'true');
  const tabMap = { downloads: 'tabDownloads', yaml: 'tabYaml', css: 'tabCss' };
  document.getElementById(tabMap[tab]).classList.add('active');
  if (tab === 'yaml') {
    document.getElementById('yamlPreviewCode').textContent = generateFullYaml();
  } else if (tab === 'css') {
    document.getElementById('cssPreviewCode').textContent = generateFullCss();
  }
}

function copyPreviewCode(elementId, btn) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = orig; }, 1500);
  });
}

/* Validation summary panel — mirrors lib/validate-brand.mjs. */
export function renderValidation() {
  const panel = document.getElementById('validationPanel');
  if (!panel) return;
  let result;
  try {
    result = validateBrand(buildBrandObject());
  } catch (err) {
    panel.innerHTML = `<div class="validation-error">Could not assemble the configuration: ${String(err.message || err)}</div>`;
    panel.style.display = '';
    return;
  }
  const { errors, warnings } = result;
  if (!errors.length && !warnings.length) {
    panel.innerHTML = '<div class="validation-ok">✓ Configuration is valid — it will pass <code>npm run validate</code> in the repo.</div>';
  } else {
    panel.innerHTML =
      errors.map(e => `<div class="validation-error">✗ ${e}</div>`).join('') +
      warnings.map(w => `<div class="validation-warning">⚠ ${w}</div>`).join('');
  }
  panel.style.display = '';
}

export function initReviewStep() {
  document.querySelectorAll('.preview-tab').forEach(btn => {
    btn.addEventListener('click', () => showOutputTab(btn.dataset.tab, btn));
  });

  // Arrow-key navigation within the tablist
  const tablist = document.querySelector('.preview-tabs');
  if (tablist) {
    tablist.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const tabs = [...tablist.querySelectorAll('.preview-tab')];
      const idx = tabs.indexOf(document.activeElement);
      if (idx === -1) return;
      const next = e.key === 'ArrowRight' ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
    });
  }

  document.querySelectorAll('[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', () => copyPreviewCode(btn.dataset.copyTarget, btn));
  });

  document.getElementById('dlYamlBtn').addEventListener('click', downloadYaml);
  document.getElementById('dlCssBtn').addEventListener('click', downloadCss);

  document.querySelectorAll('[data-sample]').forEach(btn => {
    btn.addEventListener('click', () => downloadSample(btn.dataset.sample, btn.dataset.filename, btn));
  });

  document.getElementById('dlContentKit').addEventListener('click', (e) => downloadContentKit(e.currentTarget));
  document.querySelectorAll('[data-kit-json]').forEach(btn => {
    btn.addEventListener('click', (e) => downloadSingleJson(btn.dataset.kitJson, e.currentTarget));
  });
}
