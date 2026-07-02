/* rg-preview.js — Live preview = the responsible-gambling website template
   (collateral/rg-page.html), the brand applied through the same --pb-* vars the
   real templates consume.

   Mounted once into an iframe; brand changes update an injected <style> block in
   place (no reload, no flash), so colour/font/gradient edits restyle the whole
   site live. {{PLACEHOLDER}} tokens (program name, helpline) are resolved at
   mount, so a full remount() is used when the Live tab is (re)opened to pick
   those up. */

import { generateVariablesBlock } from './css-export.js';
import { getPreviewTokens, resolveTokens } from './tokens.js';

const RG_URL = '../../collateral/rg-page.html';
const RG_BASE = '../../collateral/';   // so the page's relative assets resolve

/* The iframe runs scripts-ON but in an opaque origin (sandbox="allow-scripts"
   WITHOUT allow-same-origin): the RG page's JS renders the interactive quiz +
   live-helpline from its inlined data, yet the page physically cannot reach the
   configurator (it's cross-origin to us). We only hide the standalone "Try your
   brand" tester — that's a page-authoring aid, not site content. Because we
   can't touch the iframe DOM cross-origin, brand + name updates are delivered
   via postMessage to the BRIDGE injected below. */
const PREVIEW_FIX_CSS =
  '.pb-tyb-trigger,.pb-tyb-shade,.pb-tyb-modal,' +
  '.demo-toggle,.demo-banner,.demo-hotspot,.demo-intro-shade,' +
  '.demo-overlay-backdrop,.demo-overlay,.demo-link-shade' +
  '{display:none!important}';

/* Injected into the iframe. Lets the parent restyle without same-origin DOM
   access: on message, swap the :root vars block and repoint the wordmark. */
const BRIDGE =
  '<script>(function(){window.addEventListener("message",function(e){' +
  'var m=e.data;if(!m||m.type!=="pb-brand")return;' +
  'if(typeof m.vars==="string"){var s=document.getElementById("pb-brand-vars");if(s)s.textContent=m.vars;}' +
  'if(typeof m.name==="string"){var w=document.querySelectorAll(".rg-brand-text");' +
  'for(var i=0;i<w.length;i++)w[i].textContent=m.name;}' +
  '});})();<\/script>';

let frame = null;
let ready = false;
let cache = null;
let mountedName = null;      // the {{PROGRAM_NAME}} the current srcdoc was built with
let remountTimer = null;

function programNameValue() {
  const el = document.getElementById('programName');
  return (el && el.value) || 'Playbook';
}

function transform(html) {
  let out = html.replace(/<link[^>]*href="brand-inject\.css"[^>]*>/i, '');
  // The RG page auto-launches an operator "demo mode" tour (banner, hotspots,
  // annotation overlay). That's a page-authoring aid, not brand/site content —
  // neutralise the auto-activation so the preview shows the clean site.
  out = out.replace(/document\.body\.classList\.add\((['"])demo-mode\1\);?/g, '');
  out = out.replace(/<head([^>]*)>/i,
    `<head$1>\n<base href="${RG_BASE}">\n<style>${PREVIEW_FIX_CSS}</style>\n<style id="pb-brand-vars">${generateVariablesBlock()}</style>\n${BRIDGE}`);
  return resolveTokens(out, getPreviewTokens());
}

async function mount() {
  if (!frame) return;
  ready = false;
  if (cache === null) {
    try {
      const resp = await fetch(RG_URL);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      cache = await resp.text();
    } catch (e) {
      frame.removeAttribute('srcdoc');
      const doc = frame.contentDocument;
      if (doc) doc.body.innerHTML = '<p style="font:14px system-ui;color:#6B6B8A;padding:24px">RG site preview unavailable — run the configurator from a server (it needs to fetch collateral/rg-page.html).</p>';
      return;
    }
  }
  frame.onload = () => { ready = true; };
  mountedName = programNameValue();
  frame.srcdoc = transform(cache);
}

export function initRgPreview() {
  frame = document.getElementById('rgPreviewFrame');
  if (frame) mount();
}

/* Full re-render — picks up token/name changes. Used on Live-tab (re)open. */
export function remountRgPreview() { mount(); }

/* Cheap live update — post fresh :root vars + wordmark to the iframe bridge
   (we can't touch its DOM: it's a scripts-on, cross-origin sandbox). */
export function refreshRgPreview() {
  if (!frame || !ready || !frame.contentWindow) return;
  const name = programNameValue();
  frame.contentWindow.postMessage(
    { type: 'pb-brand', vars: generateVariablesBlock(), name }, '*');
  // The bridge repoints the wordmark live; other {{PROGRAM_NAME}} occurrences
  // (title, footer, body copy) are token-resolved at mount, so a name change
  // needs a debounced remount to re-resolve them everywhere.
  if (name !== mountedName) {
    clearTimeout(remountTimer);
    remountTimer = setTimeout(() => mount(), 450);
  }
}
