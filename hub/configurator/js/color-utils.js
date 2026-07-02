/* color-utils.js — Pure color math shared by the configurator modules. */

export function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  const n = parseInt(hex, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(c => Math.round(c).toString(16).padStart(2, '0')).join('');
}

export function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [h * 360, s * 100, l * 100];
}

export function hslToHex(h, s, l) {
  h /= 360; s /= 100; l /= 100;
  let r, g, b;
  if (s === 0) { r = g = b = l; }
  else {
    const hue2rgb = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q - p) * 6 * t; if (t < 1/2) return q; if (t < 2/3) return p + (q - p) * (2/3 - t) * 6; return p; };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return rgbToHex(r * 255, g * 255, b * 255);
}

export function luminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function contrastRatio(hex1, hex2) {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  const l1 = luminance(r1, g1, b1);
  const l2 = luminance(r2, g2, b2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

export function lighten(hex, amount) {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(
    Math.min(255, r + Math.round((255 - r) * amount)),
    Math.min(255, g + Math.round((255 - g) * amount)),
    Math.min(255, b + Math.round((255 - b) * amount))
  );
}

export function darken(hex, amount) {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(
    Math.max(0, Math.round(r * (1 - amount))),
    Math.max(0, Math.round(g * (1 - amount))),
    Math.max(0, Math.round(b * (1 - amount)))
  );
}

export function mix(hexA, hexB, t) {
  const [r1, g1, b1] = hexToRgb(hexA);
  const [r2, g2, b2] = hexToRgb(hexB);
  return rgbToHex(r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t);
}

export function rgba(hex, a) {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/* Surface-relative "polish" tokens. Given a surface color, pick the ink that
   reads on it (better of white / near-black by WCAG contrast), derive a muted
   ink, and a hairline texture tint that flips white-on-dark / dark-on-light.
   Lets the gradient + grid + ink card treatment survive any brand palette
   instead of assuming a dark surface. textureLine is the gated "sheen"; the
   track hairlines are plain UI lines and stay on regardless. */
export function surfaceTokens(surface, { grid = true } = {}) {
  const DARK = '#15151F';
  const ink = contrastRatio('#FFFFFF', surface) >= contrastRatio(DARK, surface) ? '#FFFFFF' : DARK;
  const onLight = ink !== '#FFFFFF';
  return {
    ink,
    inkMuted: mix(ink, surface, 0.34),
    textureLine: grid ? rgba(ink, onLight ? 0.06 : 0.03) : 'transparent',
    track: rgba(ink, 0.06),
    trackBorder: rgba(ink, 0.11),
  };
}

/* Nudge a color until it clears a minimum contrast on a surface — darkens on a
   light surface, lightens on a dark one. Keeps brand-colored wordmark lettering
   (e.g. the "book" half of the logo) legible on light card surfaces without
   flattening it to plain ink. */
export function readableOn(color, surface, min = 4.5) {
  const [r, g, b] = hexToRgb(surface);
  const surfaceLight = luminance(r, g, b) > 0.35;
  let c = color;
  for (let i = 0; i < 24 && contrastRatio(c, surface) < min; i++) {
    c = surfaceLight ? darken(c, 0.1) : lighten(c, 0.1);
  }
  return c;
}

/* Six-stop neutral scale derived from a single dark base color.
   Hue is preserved; saturation is clamped lower at lighter stops. */
export function generateNeutrals(tintHex) {
  const [r, g, b] = hexToRgb(tintHex);
  const [h, s] = rgbToHsl(r, g, b);
  const stops = [
    { label: '900', l: 14, s: Math.min(s, 25) },
    { label: '700', l: 30, s: Math.min(s, 20) },
    { label: '500', l: 48, s: Math.min(s, 15) },
    { label: '300', l: 74, s: Math.min(s, 12) },
    { label: '100', l: 92, s: Math.min(s, 8) },
    { label: '50',  l: 97, s: Math.min(s, 5) },
  ];
  return stops.map(({ label, l, s: newS }) => ({
    label,
    hex: hslToHex(h, newS, l),
  }));
}

/* Simple k-means (k clusters) over an [r,g,b] pixel array.
   Returns hex strings sorted by cluster size (most frequent first). */
export function kMeansColors(pixels, k) {
  let centroids = [];
  const step = Math.floor(pixels.length / k);
  for (let i = 0; i < k; i++) centroids.push([...pixels[i * step]]);

  for (let iter = 0; iter < 10; iter++) {
    const clusters = Array.from({length: k}, () => []);
    for (const px of pixels) {
      let minDist = Infinity, minIdx = 0;
      for (let c = 0; c < k; c++) {
        const d = (px[0]-centroids[c][0])**2 + (px[1]-centroids[c][1])**2 + (px[2]-centroids[c][2])**2;
        if (d < minDist) { minDist = d; minIdx = c; }
      }
      clusters[minIdx].push(px);
    }
    for (let c = 0; c < k; c++) {
      if (clusters[c].length === 0) continue;
      centroids[c] = [
        clusters[c].reduce((s, p) => s + p[0], 0) / clusters[c].length,
        clusters[c].reduce((s, p) => s + p[1], 0) / clusters[c].length,
        clusters[c].reduce((s, p) => s + p[2], 0) / clusters[c].length,
      ];
    }
  }

  const counts = Array.from({length: k}, () => 0);
  for (const px of pixels) {
    let minDist = Infinity, minIdx = 0;
    for (let c = 0; c < k; c++) {
      const d = (px[0]-centroids[c][0])**2 + (px[1]-centroids[c][1])**2 + (px[2]-centroids[c][2])**2;
      if (d < minDist) { minDist = d; minIdx = c; }
    }
    counts[minIdx]++;
  }

  return centroids
    .map((c, i) => ({ hex: rgbToHex(c[0], c[1], c[2]), count: counts[i] }))
    .sort((a, b) => b.count - a.count)
    .map(c => c.hex);
}
