/* fonts.js — Custom font upload: data-URL @font-face injection and
   selector management. */

import { appState } from './state.js';

// Extension → CSS @font-face format() hint and a real font MIME for the
// data URL (FileReader emits application/octet-stream for unknown types,
// which Safari refuses to load as a font).
const FONT_FORMAT_MAP = {
  woff2: { format: 'woff2',     mime: 'font/woff2' },
  woff:  { format: 'woff',      mime: 'font/woff'  },
  ttf:   { format: 'truetype',  mime: 'font/ttf'   },
  otf:   { format: 'opentype',  mime: 'font/otf'   },
};

let onChangeCallback = () => {};

export function initFontUpload(onChange) {
  onChangeCallback = onChange;
  document.getElementById('fontFileInput').addEventListener('change', (e) => {
    if (e.target.files[0]) handleFontFile(e.target.files[0]);
  });
  document.getElementById('customFontName').addEventListener('input', updateCustomFontFace);
  document.getElementById('fontRemoveBtn').addEventListener('click', removeCustomFont);
}

function showFontError(msg) {
  let errEl = document.getElementById('customFontError');
  if (!errEl) {
    errEl = document.createElement('div');
    errEl.id = 'customFontError';
    errEl.className = 'upload-error';
    errEl.setAttribute('role', 'alert');
    const fontInputRow = document.querySelector('.font-upload-row');
    if (fontInputRow && fontInputRow.parentNode) {
      fontInputRow.parentNode.insertBefore(errEl, fontInputRow.nextSibling);
    }
  }
  errEl.textContent = msg;
  errEl.style.display = 'block';
  setTimeout(() => { if (errEl) errEl.style.display = 'none'; }, 8000);
}

function injectFontFace(name, dataUrl, format) {
  // No font-weight range: many uploads are single-weight, and a declared
  // 100–900 range makes some browsers skip the file at other weights.
  let styleEl = document.getElementById('customFontFace');
  if (!styleEl) { styleEl = document.createElement('style'); styleEl.id = 'customFontFace'; document.head.appendChild(styleEl); }
  styleEl.textContent = `@font-face { font-family: '${name}'; src: url('${dataUrl}') format('${format}'); font-display: swap; }`;
}

function formatFromDataUrl(dataUrl) {
  if (dataUrl.indexOf('data:font/woff2') === 0) return 'woff2';
  if (dataUrl.indexOf('data:font/woff') === 0) return 'woff';
  if (dataUrl.indexOf('data:font/ttf') === 0) return 'truetype';
  if (dataUrl.indexOf('data:font/otf') === 0) return 'opentype';
  return 'woff2';
}

function handleFontFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const formatInfo = FONT_FORMAT_MAP[ext];
  if (!formatInfo) {
    showFontError(`Unsupported font file: .${ext}. Use .woff2, .woff, .ttf, or .otf.`);
    return;
  }
  const prevErr = document.getElementById('customFontError');
  if (prevErr) prevErr.style.display = 'none';

  const reader = new FileReader();
  reader.onload = (e) => {
    let dataUrl = e.target.result;
    if (dataUrl.indexOf('data:application/octet-stream') === 0) {
      dataUrl = dataUrl.replace('data:application/octet-stream', 'data:' + formatInfo.mime);
    }
    appState.customFontDataUrl = dataUrl;
    const baseName = file.name.replace(/\.(woff2?|otf|ttf)$/i, '').replace(/[-_]/g, ' ');
    appState.customFontName = baseName;

    injectFontFace(baseName, dataUrl, formatInfo.format);

    document.getElementById('customFontInfo').style.display = '';
    document.getElementById('customFontFileName').textContent = file.name;
    document.getElementById('customFontFileSize').textContent = (file.size / 1024).toFixed(1) + ' KB';
    document.getElementById('customFontName').value = baseName;
    document.getElementById('customFontPreview').style.fontFamily = `'${baseName}', sans-serif`;

    addCustomFontOption('fontHeading', baseName);
    addCustomFontOption('fontBody', baseName);
    addCustomFontOption('fontMono', baseName);

    // Auto-select as heading font so the effect is immediately visible;
    // body and mono stay on their defaults.
    const headingSel = document.getElementById('fontHeading');
    if (headingSel) headingSel.value = baseName;

    onChangeCallback();
  };
  reader.readAsDataURL(file);
}

/* After a snapshot restore: re-inject @font-face and selector options
   from the persisted data URL. */
export function restoreFontUi() {
  if (!appState.customFontDataUrl || !appState.customFontName) return;
  injectFontFace(appState.customFontName, appState.customFontDataUrl, formatFromDataUrl(appState.customFontDataUrl));
  document.getElementById('customFontInfo').style.display = '';
  document.getElementById('customFontFileName').textContent = appState.customFontName;
  document.getElementById('customFontFileSize').textContent = 'restored from your last session';
  document.getElementById('customFontName').value = appState.customFontName;
  document.getElementById('customFontPreview').style.fontFamily = `'${appState.customFontName}', sans-serif`;
  addCustomFontOption('fontHeading', appState.customFontName);
  addCustomFontOption('fontBody', appState.customFontName);
  addCustomFontOption('fontMono', appState.customFontName);
}

export function addCustomFontOption(selectId, fontName) {
  const select = document.getElementById(selectId);
  const current = select.value;
  const existing = select.querySelector('option[data-custom-font]');
  if (existing) existing.remove();
  const existingGroup = select.querySelector('optgroup[data-custom-font]');
  if (existingGroup) existingGroup.remove();
  const group = document.createElement('optgroup');
  group.label = 'Custom Upload';
  group.setAttribute('data-custom-font', 'true');
  const opt = document.createElement('option');
  opt.value = fontName;
  opt.textContent = fontName + ' (uploaded)';
  opt.setAttribute('data-custom-font', 'true');
  group.appendChild(opt);
  select.insertBefore(group, select.firstChild);
  // Re-assert the selection — inserting an optgroup at the top can shift it
  if ([...select.options].some(o => o.value === current)) select.value = current;
}

function removeCustomFont() {
  appState.customFontDataUrl = null;
  appState.customFontName = '';
  const styleEl = document.getElementById('customFontFace');
  if (styleEl) styleEl.remove();
  document.getElementById('customFontInfo').style.display = 'none';
  document.getElementById('fontFileInput').value = '';
  ['fontHeading', 'fontBody', 'fontMono'].forEach(id => {
    const sel = document.getElementById(id);
    const opt = sel.querySelector('option[data-custom-font]');
    if (opt) { if (opt.selected) sel.selectedIndex = 0; opt.remove(); }
    const grp = sel.querySelector('optgroup[data-custom-font]');
    if (grp) grp.remove();
  });
  onChangeCallback();
}

function updateCustomFontFace() {
  const nameInput = document.getElementById('customFontName');
  if (!nameInput || !appState.customFontDataUrl) return;
  const name = nameInput.value.trim();
  if (!name) return;
  appState.customFontName = name;
  injectFontFace(name, appState.customFontDataUrl, formatFromDataUrl(appState.customFontDataUrl));
  ['fontHeading', 'fontBody', 'fontMono'].forEach(id => {
    const sel = document.getElementById(id);
    const opt = sel.querySelector('option[data-custom-font]');
    if (opt) {
      const wasSelected = opt.selected;
      opt.value = name;
      opt.textContent = name + ' (uploaded)';
      if (wasSelected) sel.value = name;
    }
  });
  document.getElementById('customFontPreview').style.fontFamily = `'${name}', sans-serif`;
  onChangeCallback();
}
