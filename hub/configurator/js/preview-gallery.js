/* preview-gallery.js — Renders real collateral templates with the current
   brand applied.

   Pipeline per template: fetch the HTML from ../../collateral/render/,
   strip its <link rel="stylesheet" href="brand-inject.css">, inject a
   <style> block generated from the live form values, resolve
   {{PLACEHOLDER}} tokens (with sample values for runtime tokens), and
   mount via iframe.srcdoc at native size scaled down with a CSS transform.

   Template text is fetched once (lazy, via IntersectionObserver) and
   cached; brand changes only re-run the cheap string transform. */

import { TEMPLATE_MANIFEST, TEMPLATE_CATEGORIES } from './data/template-manifest.js';
import { generateVariablesBlock } from './css-export.js';
import { getPreviewTokens, resolveTokens } from './tokens.js';

const TEMPLATE_BASE = '../../collateral/render/';
const THUMB_WIDTH = 280; // px — card width in the gallery grid

const templateCache = new Map();   // file → html text
const visibleFiles = new Set();    // files whose iframes are mounted
let activeCategory = 'All';
let observer = null;
let refreshTimer = null;
let fetchFailed = false;

function transformTemplate(html) {
  const styleBlock = '<style>\n' + generateVariablesBlock() + '\n</style>';
  let out = html.replace(/<link[^>]*href="brand-inject\.css"[^>]*>/i, '');
  // Inject after <head> so template styles (which read the vars) still win
  out = out.replace(/<head([^>]*)>/i, `<head$1>\n<base href="${TEMPLATE_BASE}">\n${styleBlock}`);
  return resolveTokens(out, getPreviewTokens());
}

function mountIframe(card, entry) {
  const html = templateCache.get(entry.file);
  if (html === undefined) return;
  const holder = card.querySelector('.gallery-thumb');
  let iframe = holder.querySelector('iframe');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-same-origin');
    iframe.setAttribute('tabindex', '-1');
    iframe.setAttribute('title', `Preview: ${entry.label}`);
    iframe.width = entry.w;
    iframe.height = entry.h;
    iframe.style.width = entry.w + 'px';
    iframe.style.height = entry.h + 'px';
    iframe.style.border = '0';
    iframe.style.transformOrigin = '0 0';
    iframe.style.pointerEvents = 'none';
    holder.appendChild(iframe);
  }
  const scale = THUMB_WIDTH / entry.w;
  iframe.style.transform = `scale(${scale})`;
  holder.style.height = Math.round(entry.h * scale) + 'px';
  iframe.srcdoc = transformTemplate(html);
  card.classList.remove('loading');
}

async function loadTemplate(card, entry) {
  if (templateCache.has(entry.file)) {
    mountIframe(card, entry);
    return;
  }
  try {
    const resp = await fetch(TEMPLATE_BASE + entry.file);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    templateCache.set(entry.file, await resp.text());
    mountIframe(card, entry);
  } catch (err) {
    card.classList.remove('loading');
    card.classList.add('failed');
    card.querySelector('.gallery-thumb').innerHTML =
      '<div class="gallery-error">Preview unavailable</div>';
    if (!fetchFailed) {
      fetchFailed = true;
      const notice = document.getElementById('galleryNotice');
      if (notice) {
        notice.textContent = 'Template previews need the site to be served over HTTP (they fetch the real collateral files). Run a local server from the repo root — e.g. python3 -m http.server — or use the deployed configurator.';
        notice.style.display = '';
      }
    }
    console.warn('Gallery fetch failed for', entry.file, err);
  }
}

function buildCard(entry) {
  const card = document.createElement('div');
  card.className = 'gallery-card loading';
  card.dataset.file = entry.file;
  card.dataset.category = entry.category;

  const aspectH = Math.round(Math.min(entry.h / entry.w, 16 / 9) * THUMB_WIDTH);
  card.innerHTML = `
    <button type="button" class="gallery-thumb-btn" aria-label="Open large preview of ${entry.label}">
      <div class="gallery-thumb" style="height:${aspectH}px"><div class="gallery-skeleton"></div></div>
    </button>
    <div class="gallery-meta">
      <span class="gallery-label">${entry.label}</span>
      <span class="gallery-dims">${entry.w}×${entry.h}</span>
    </div>`;

  card.querySelector('.gallery-thumb-btn').addEventListener('click', () => openModal(entry));
  return card;
}

function openModal(entry) {
  const dialog = document.getElementById('galleryModal');
  const holder = document.getElementById('galleryModalBody');
  const title = document.getElementById('galleryModalTitle');
  if (!dialog || !templateCache.has(entry.file)) return;

  title.textContent = entry.label;
  holder.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.setAttribute('sandbox', 'allow-same-origin');
  iframe.setAttribute('title', `Large preview: ${entry.label}`);
  iframe.width = entry.w;
  iframe.height = entry.h;
  iframe.style.cssText = `width:${entry.w}px;height:${entry.h}px;border:0;transform-origin:0 0;pointer-events:none;`;
  holder.appendChild(iframe);
  iframe.srcdoc = transformTemplate(templateCache.get(entry.file));

  const fit = () => {
    const maxW = Math.min(window.innerWidth * 0.9 - 48, 960);
    const maxH = window.innerHeight * 0.8 - 96;
    const scale = Math.min(maxW / entry.w, maxH / entry.h, 1);
    iframe.style.transform = `scale(${scale})`;
    holder.style.width = Math.round(entry.w * scale) + 'px';
    holder.style.height = Math.round(entry.h * scale) + 'px';
  };
  fit();

  const dlBtn = document.getElementById('galleryModalDownload');
  dlBtn.onclick = () => downloadTemplatePng(entry, dlBtn);

  dialog.showModal();
}

/* html2canvas can't reach inside iframes, so the PNG path re-renders the
   transformed HTML into an off-screen container in the parent document. */
async function downloadTemplatePng(entry, btn) {
  const html = templateCache.get(entry.file);
  if (!html || !window.html2canvas) return;
  const orig = btn.textContent;
  btn.textContent = 'Rendering…';
  btn.disabled = true;
  const host = document.createElement('div');
  host.style.cssText = `position:fixed;left:-100000px;top:0;width:${entry.w}px;height:${entry.h}px;overflow:hidden;`;
  document.body.appendChild(host);
  try {
    const doc = new DOMParser().parseFromString(transformTemplate(html), 'text/html');
    doc.querySelectorAll('script').forEach(s => s.remove());
    const wrapper = document.createElement('div');
    doc.querySelectorAll('head style').forEach(s => wrapper.appendChild(s.cloneNode(true)));
    doc.querySelectorAll('head link[rel="stylesheet"]').forEach(l => wrapper.appendChild(l.cloneNode(true)));
    [...doc.body.children].forEach(c => wrapper.appendChild(c.cloneNode(true)));
    host.appendChild(wrapper);
    await document.fonts.ready;
    const canvas = await window.html2canvas(host, { width: entry.w, height: entry.h, useCORS: true, backgroundColor: null, logging: false });
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = entry.file.replace(/\.html$/, '') + '.png';
    a.click();
  } catch (err) {
    console.error('PNG render failed:', err);
  } finally {
    host.remove();
    btn.textContent = orig;
    btn.disabled = false;
  }
}

function applyFilter() {
  document.querySelectorAll('#galleryGrid .gallery-card').forEach(card => {
    const show = activeCategory === 'All' || card.dataset.category === activeCategory;
    card.style.display = show ? '' : 'none';
  });
}

export function initGallery() {
  const grid = document.getElementById('galleryGrid');
  const pills = document.getElementById('galleryFilters');
  if (!grid) return;

  // Filter pills
  const cats = ['All', ...TEMPLATE_CATEGORIES.filter(c => TEMPLATE_MANIFEST.some(t => t.category === c))];
  pills.innerHTML = '';
  cats.forEach((cat, i) => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'gallery-pill' + (i === 0 ? ' active' : '');
    pill.textContent = cat;
    pill.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
    pill.addEventListener('click', () => {
      activeCategory = cat;
      pills.querySelectorAll('.gallery-pill').forEach(p => {
        p.classList.toggle('active', p === pill);
        p.setAttribute('aria-pressed', p === pill ? 'true' : 'false');
      });
      applyFilter();
    });
    pills.appendChild(pill);
  });

  // Thumbnail shells, lazily populated as they scroll into view
  observer = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const card = e.target;
      observer.unobserve(card);
      const entry = TEMPLATE_MANIFEST.find(t => t.file === card.dataset.file);
      if (entry) {
        visibleFiles.add(entry.file);
        loadTemplate(card, entry);
      }
    }
  }, { root: null, rootMargin: '200px' });

  TEMPLATE_MANIFEST.forEach(entry => {
    const card = buildCard(entry);
    grid.appendChild(card);
    observer.observe(card);
  });

  // Modal close
  const dialog = document.getElementById('galleryModal');
  document.getElementById('galleryModalClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
}

/* Called on every brand change (debounced): re-runs the string transform
   for already-mounted thumbnails. Skips entirely while the gallery tab is
   hidden — refreshGalleryNow() catches up when it's shown. */
export function scheduleGalleryRefresh() {
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(refreshGalleryNow, 250);
}

export function refreshGalleryNow() {
  const grid = document.getElementById('galleryGrid');
  if (!grid || grid.offsetParent === null) return; // tab hidden
  document.querySelectorAll('#galleryGrid .gallery-card').forEach(card => {
    if (!visibleFiles.has(card.dataset.file)) return;
    const entry = TEMPLATE_MANIFEST.find(t => t.file === card.dataset.file);
    if (entry && templateCache.has(entry.file)) mountIframe(card, entry);
  });
}
