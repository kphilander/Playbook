/* steps/welcome.js — Welcome & import step: the _brand.yml dropzone and
   the resume-from-autosave banner. */

import { importBrandYaml } from '../yaml-import.js';
import { appState, loadSaved, applySnapshot, clearSaved } from '../state.js';

let onImported = () => {};
let onResume = () => {};

function showImportResult({ ok, warnings, error, errorLine }, fileName) {
  const panel = document.getElementById('importResult');
  panel.style.display = '';
  if (!ok) {
    panel.className = 'import-result import-result-error';
    panel.setAttribute('role', 'alert');
    panel.innerHTML = `<strong>Couldn't import ${fileName}</strong><br>${error}${errorLine ? ` (line ${errorLine})` : ''}`;
    return;
  }
  panel.className = 'import-result import-result-ok';
  panel.setAttribute('role', 'status');
  let html = `<strong>✓ Imported ${fileName}</strong> — your settings are loaded across all steps. ` +
    'Sections the configurator doesn’t edit (full helpline trees, foundations, per-jurisdiction lists) are preserved and will be written back on export. ' +
    '<em>Note: YAML comments can’t be preserved — keep your original under version control.</em>';
  if (warnings && warnings.length) {
    html += '<ul>' + warnings.map(w => `<li>${w}</li>`).join('') + '</ul>';
  }
  panel.innerHTML = html;
}

function handleYamlFile(file) {
  if (!/\.ya?ml$/i.test(file.name)) {
    showImportResult({ ok: false, error: 'Expected a .yml or .yaml file' }, file.name);
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const result = importBrandYaml(e.target.result, file.name);
    showImportResult(result, file.name);
    if (result.ok) onImported();
  };
  reader.onerror = () => showImportResult({ ok: false, error: 'Could not read the file' }, file.name);
  reader.readAsText(file);
}

export function maybeShowResumeBanner() {
  const saved = loadSaved();
  if (!saved) return;
  const banner = document.getElementById('resumeBanner');
  if (!banner) return;
  const when = saved.savedAt ? new Date(saved.savedAt).toLocaleString() : 'a previous session';
  document.getElementById('resumeBannerWhen').textContent = when;
  banner.style.display = '';

  document.getElementById('resumeBtn').onclick = () => {
    applySnapshot(saved);
    banner.style.display = 'none';
    if (saved.assetsDropped) {
      const note = document.getElementById('importResult');
      note.style.display = '';
      note.className = 'import-result import-result-warn';
      note.setAttribute('role', 'status');
      note.textContent = 'Restored your settings — your uploaded logo/font were too large to save, please re-upload them.';
    }
    onResume();
  };
  document.getElementById('startFreshBtn').onclick = () => {
    clearSaved();
    banner.style.display = 'none';
  };
}

export function initWelcomeStep(callbacks) {
  onImported = callbacks.onImported;
  onResume = callbacks.onResume;

  const zone = document.getElementById('yamlDropZone');
  const input = document.getElementById('yamlFileInput');

  zone.addEventListener('click', () => input.click());
  zone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
  });
  zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('dragover');
    if (e.dataTransfer.files.length) handleYamlFile(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', () => { if (input.files.length) handleYamlFile(input.files[0]); });

  // Accept a dropped _brand.yml anywhere on the page
  document.body.addEventListener('dragover', (e) => {
    if ([...(e.dataTransfer?.items || [])].some(i => i.kind === 'file')) e.preventDefault();
  });
  document.body.addEventListener('drop', (e) => {
    if (!e.dataTransfer?.files?.length) return;
    const f = e.dataTransfer.files[0];
    if (/\.ya?ml$/i.test(f.name)) {
      e.preventDefault();
      handleYamlFile(f);
    }
  });

  maybeShowResumeBanner();
}

export function importedFileBadge() {
  return appState.importedFileName;
}
