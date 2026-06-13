/* logo.js — Operator logo upload, color extraction, and accent suggestion. */

import { appState } from './state.js';
import { hexToRgb, rgbToHsl, luminance, kMeansColors } from './color-utils.js';

let onChangeCallback = () => {};

export function initLogoUpload(onChange) {
  onChangeCallback = onChange;
  const zone = document.getElementById('logoUploadZone');
  const input = document.getElementById('logoFileInput');

  zone.addEventListener('click', (e) => {
    if (e.target.closest('.logo-remove')) return;
    input.click();
  });
  zone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
  });
  zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', (e) => {
    e.preventDefault(); zone.classList.remove('dragover');
    if (e.dataTransfer.files.length) handleLogoFile(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', () => { if (input.files.length) handleLogoFile(input.files[0]); });

  document.querySelectorAll('input[name="logoMode"]').forEach(r => {
    r.addEventListener('change', () => {
      appState.logoMode = getLogoModeFromDom();
      onChangeCallback();
    });
  });

  document.getElementById('logoRemoveBtn').addEventListener('click', removeLogo);
  document.getElementById('paletteApplyBtn').addEventListener('click', applyAccentFromLogo);
}

function getLogoModeFromDom() {
  const radio = document.querySelector('input[name="logoMode"]:checked');
  return radio ? radio.value : 'cobrand';
}

function showLogoError(msg) {
  let errEl = document.getElementById('logoUploadError');
  if (!errEl) {
    errEl = document.createElement('div');
    errEl.id = 'logoUploadError';
    errEl.className = 'upload-error';
    errEl.setAttribute('role', 'alert');
    const zone = document.getElementById('logoUploadZone');
    if (zone && zone.parentNode) zone.parentNode.insertBefore(errEl, zone.nextSibling);
  }
  errEl.textContent = msg;
  errEl.style.display = 'block';
  setTimeout(() => { if (errEl) errEl.style.display = 'none'; }, 8000);
}

function handleLogoFile(file) {
  // file.type can be empty for .svg on some OS/file-input combinations,
  // so fall back to the extension.
  const validMime = /^image\/(png|jpe?g|svg\+xml|webp|gif|avif)$/i;
  const validExt = /\.(png|jpe?g|svg|webp|gif|avif)$/i;
  if (!validMime.test(file.type) && !validExt.test(file.name)) {
    showLogoError(`Unsupported logo file: ${file.name}. Use SVG, PNG, JPG, WebP, or GIF.`);
    return;
  }
  const prevErr = document.getElementById('logoUploadError');
  if (prevErr) prevErr.style.display = 'none';

  const reader = new FileReader();
  reader.onload = (e) => {
    appState.logoDataUrl = e.target.result;
    showLogoInZone(file.name, (file.size / 1024).toFixed(1) + ' KB');
    extractColorsFromImage(appState.logoDataUrl);
    announce(`${file.name} uploaded`);
    onChangeCallback();
  };
  reader.onerror = () => showLogoError(`Could not read ${file.name}.`);
  reader.readAsDataURL(file);
}

function showLogoInZone(name, size) {
  document.getElementById('logoThumb').src = appState.logoDataUrl;
  document.getElementById('logoFileName').textContent = name;
  document.getElementById('logoFileSize').textContent = size;
  document.getElementById('logoUploadEmpty').style.display = 'none';
  document.getElementById('logoUploadFilled').style.display = 'block';
  document.getElementById('logoUploadZone').classList.add('has-logo');
  document.getElementById('logoModeToggle').style.display = '';
}

/* After a snapshot restore: reflect a persisted logo data URL in the UI. */
export function restoreLogoUi() {
  if (!appState.logoDataUrl) return;
  showLogoInZone('Saved logo', 'restored from your last session');
  const radio = document.querySelector(`input[name="logoMode"][value="${appState.logoMode}"]`);
  if (radio) radio.checked = true;
  extractColorsFromImage(appState.logoDataUrl);
}

function removeLogo(e) {
  if (e) e.stopPropagation();
  appState.logoDataUrl = null;
  appState.extractedColors = [];
  appState.suggestedPalette = null;
  document.getElementById('logoUploadEmpty').style.display = '';
  document.getElementById('logoUploadFilled').style.display = 'none';
  document.getElementById('logoUploadZone').classList.remove('has-logo');
  document.getElementById('extractedColors').style.display = 'none';
  document.getElementById('paletteSuggestion').classList.add('hidden');
  document.getElementById('logoFileInput').value = '';
  document.getElementById('logoModeToggle').style.display = 'none';
  document.querySelector('input[name="logoMode"][value="cobrand"]').checked = true;
  appState.logoMode = 'cobrand';
  onChangeCallback();
}

function announce(msg) {
  const live = document.getElementById('liveStatus');
  if (live) live.textContent = msg;
}

function extractColorsFromImage(dataUrl) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const canvas = document.getElementById('colorCanvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const size = 80;
    canvas.width = size; canvas.height = size;
    ctx.drawImage(img, 0, 0, size, size);
    const data = ctx.getImageData(0, 0, size, size).data;

    const pixels = [];
    for (let i = 0; i < data.length; i += 4) {
      const [r, g, b, a] = [data[i], data[i+1], data[i+2], data[i+3]];
      if (a < 128) continue; // skip transparent
      const lum = luminance(r, g, b);
      if (lum > 0.85 || lum < 0.03) continue; // skip near-white/black
      pixels.push([r, g, b]);
    }

    if (pixels.length < 10) {
      appState.extractedColors = [];
      document.getElementById('extractedColors').style.display = 'none';
      announce('Logo uploaded — no usable colors found (logo is mostly white or black)');
      return;
    }

    appState.extractedColors = kMeansColors(pixels, 5);
    showExtractedColors();
    generateSuggestedPalette();
    announce(`Logo uploaded — ${appState.extractedColors.length} colors extracted`);
  };
  img.src = dataUrl;
}

function showExtractedColors() {
  const container = document.getElementById('extractedColors');
  const row = document.getElementById('swatchRow');
  row.innerHTML = '';
  appState.extractedColors.forEach(hex => {
    const swatch = document.createElement('button');
    swatch.type = 'button';
    swatch.className = 'swatch';
    swatch.style.background = hex;
    swatch.title = hex;
    swatch.setAttribute('aria-label', `Apply logo color ${hex} to the most different brand slot`);
    swatch.innerHTML = '<span class="swatch-hex">' + hex + '</span>';
    swatch.addEventListener('click', () => {
      // Drop the color into whichever of primary/secondary/accent it
      // differs from most — repeated clicks cycle through the slots.
      const targets = ['colorPrimary', 'colorSecondary', 'colorAccent'];
      let bestIdx = 0, bestDiff = 0;
      for (let i = 0; i < targets.length; i++) {
        const cur = document.getElementById(targets[i]).value;
        const [r1,g1,b1] = hexToRgb(cur);
        const [r2,g2,b2] = hexToRgb(hex);
        const diff = Math.abs(r1-r2) + Math.abs(g1-g2) + Math.abs(b1-b2);
        if (diff > bestDiff) { bestDiff = diff; bestIdx = i; }
      }
      document.getElementById(targets[bestIdx]).value = hex;
      document.getElementById(targets[bestIdx] + 'Hex').value = hex;
      onChangeCallback();
    });
    row.appendChild(swatch);
  });
  container.style.display = appState.extractedColors.length > 0 ? '' : 'none';
}

function generateSuggestedPalette() {
  if (appState.extractedColors.length < 1) return;

  const row = document.getElementById('paletteAccentRow');
  row.innerHTML = '';

  // Accent candidates: visible on dark backgrounds, not near-gray/black/white
  const candidates = appState.extractedColors.filter(hex => {
    const [r, g, b] = hexToRgb(hex);
    const [, s, l] = rgbToHsl(r, g, b);
    return s > 15 && l > 25 && l < 80;
  });

  const colors = candidates.length > 0 ? candidates : appState.extractedColors;

  // Most vivid first — best accent candidates
  const sorted = [...colors].sort((a, b) => {
    const [,,sa] = rgbToHsl(...hexToRgb(a));
    const [,,sb] = rgbToHsl(...hexToRgb(b));
    return sb - sa;
  });

  appState.suggestedPalette = sorted[0] || null;

  sorted.forEach((hex, i) => {
    const swatch = document.createElement('button');
    swatch.type = 'button';
    swatch.className = 'palette-accent-swatch' + (i === 0 ? ' selected' : '');
    swatch.style.background = hex;
    swatch.title = hex;
    swatch.setAttribute('aria-label', `Select ${hex} as accent candidate`);
    swatch.addEventListener('click', () => {
      row.querySelectorAll('.palette-accent-swatch').forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      appState.suggestedPalette = hex;
    });
    row.appendChild(swatch);
  });

  document.getElementById('paletteSuggestion').classList.remove('hidden');
}

function applyAccentFromLogo() {
  if (!appState.suggestedPalette) return;
  document.getElementById('colorAccent').value = appState.suggestedPalette;
  document.getElementById('colorAccentHex').value = appState.suggestedPalette;
  onChangeCallback();
}
