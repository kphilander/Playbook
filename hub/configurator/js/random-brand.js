/* random-brand.js — "Generate a random brand" / "Surprise me".
 *
 * Rolls a complete, coherent brand: a bold background colour from anywhere on
 * the wheel, secondary + accent placed by a colour-harmony scheme
 * (complementary / triadic / split / mono-pop / role-reversed), a brand-tinted
 * neutral ramp for light surfaces, a display+text font pairing, and a program
 * name. Colours are generated in OKLCH (perceptually even) and gated to WCAG AA
 * so foreground text stays legible on whatever background comes up.
 *
 * applyRandomBrand() writes the result into the colour, typography and name
 * fields + appState; the caller re-renders the same way it does after a
 * _brand.yml import. undoRandomBrand() reverts the most recent roll.
 */
import { appState } from './state.js';

/* ---- OKLCH → sRGB hex + WCAG contrast (sRGB) ---- */
function lin(c){c/=255;return c<=0.04045?c/12.92:Math.pow((c+0.055)/1.055,2.4);}
function unlin(c){const v=c<=0.0031308?12.92*c:1.055*Math.pow(c,1/2.4)-0.055;return Math.round(Math.min(1,Math.max(0,v))*255);}
function labToRgb(L,a,b){const l_=L+0.3963377774*a+0.2158037573*b,m_=L-0.1055613458*a-0.0638541728*b,s_=L-0.0894841775*a-1.2914855480*b;const l=l_**3,m=m_**3,s=s_**3;return[4.0767416621*l-3.3077115913*m+0.2309699292*s,-1.2684380046*l+2.6097574011*m-0.3413193965*s,-0.0041960863*l-0.7034186147*m+1.7076147010*s];}
function oklchToHex(L,C,H){const a=C*Math.cos(H*Math.PI/180),b=C*Math.sin(H*Math.PI/180);return '#'+labToRgb(L,a,b).map(unlin).map(v=>v.toString(16).padStart(2,'0')).join('');}
function hexRgb(hex){hex=hex.replace('#','');const n=parseInt(hex,16);return[(n>>16)&255,(n>>8)&255,n&255];}
function lab(hex){const[r,g,b]=hexRgb(hex).map(lin);const l=Math.cbrt(0.4122214708*r+0.5363325363*g+0.0514459929*b),m=Math.cbrt(0.2119034982*r+0.6806995451*g+0.1073969566*b),s=Math.cbrt(0.0883024619*r+0.2817188376*g+0.6299787005*b);return[0.2104542553*l+0.7936177850*m-0.0040720468*s,1.9779984951*l-2.4285922050*m+0.4505937099*s,0.0259040371*l+0.7827717662*m-0.8086757660*s];}
function relLum(hex){const[r,g,b]=hexRgb(hex);return 0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(b);}
function contrast(h1,h2){const a=relLum(h1),b=relLum(h2);return(Math.max(a,b)+0.05)/(Math.min(a,b)+0.05);}
function shiftL(hex,d){const L=lab(hex);const[r,g,b]=labToRgb(Math.max(0,Math.min(1,L[0]+d)),L[1],L[2]);return '#'+[r,g,b].map(unlin).map(v=>v.toString(16).padStart(2,'0')).join('');}

const rnd=(lo,hi)=>lo+(hi-lo)*Math.random();
const pick=a=>a[Math.floor(Math.random()*a.length)];

/* Solve a role colour (secondary / accent): vivid at hue H, nudged in lightness
   until it clears `minC` contrast against the primary — brighter on a dark
   primary, darker on a light one, so the role pops whatever the primary's tone.
   Returns the best-contrast vivid colour even if minC can't quite be reached
   (e.g. against a mid-lightness primary). */
function solveRole(bg,H,C,minC){
  const up = relLum(bg) < 0.42;
  let L = up ? 0.80 : 0.50, step = up ? 0.02 : -0.02;
  let best = oklchToHex(L,C,H), bestC = contrast(best,bg);
  for(let i=0;i<34 && bestC<minC && L>0.14 && L<0.97;i++){
    L += step;
    const hex = oklchToHex(L,C,H), c = contrast(hex,bg);
    if(c>bestC){ best=hex; bestC=c; }
  }
  return best;
}
function neutrals(h){const C=0.012,mk=L=>oklchToHex(L,C,h);return{n900:mk(.24),n700:mk(.37),n500:mk(.55),n300:mk(.74),n200:mk(.85),n100:mk(.93),n50:mk(.965)};}

/* [secondary, accent] hue offsets from the primary's hue. Every scheme is built
   around the primary's COMPLEMENT (~180°): the secondary and accent both sit in
   the opposite zone of the wheel, so they harmonise with each other while
   popping against the primary. Split-complementary variants (flanking the
   complement at different spreads) plus two "analogous base + complementary
   accent" options for warmth range — never two unrelated hues. */
const HARMONIES=[
  [150,210],  // split-complementary, classic
  [160,200],  // tight split-complementary
  [140,220],  // wide split-complementary
  [180,155],  // complement + split flank
  [205,180],  // split flank + complement
  [210,150],  // split-complementary, roles swapped
  [35,185],   // analogous secondary (warm) + complementary accent pop
  [325,175],  // analogous secondary (cool) + complementary accent pop
];

/* Lightness/chroma "modes" for the primary. Now that templates adapt their ink
   to any surface (light or dark), the primary is free to roam the whole tonal
   range instead of only dark. Each mode sets the primary's L/C, the roles'
   chroma, and how hard the roles must contrast the primary. Combined with any
   base hue this yields bright blues, sunny yellows, pastels, jewel tones,
   near-black neon, muted slate — a real spread of coolness/warmth/energy.
   [pL, pC = primary lightness/chroma; sC/aC = secondary/accent chroma; sMin/aMin = min contrast] */
const MODES = [
  { pL:[0.16,0.28], pC:[0.06,0.14],  sC:[0.11,0.17], aC:[0.15,0.20], sMin:4.2, aMin:3.6 }, // deep — rich dark (navy, forest, plum)
  { pL:[0.42,0.56], pC:[0.14,0.21],  sC:[0.13,0.19], aC:[0.16,0.22], sMin:2.6, aMin:2.4 }, // vivid — bright saturated (bright blue/teal/violet)
  { pL:[0.15,0.23], pC:[0.16,0.24],  sC:[0.17,0.25], aC:[0.18,0.25], sMin:4.6, aMin:4.1 }, // neon — near-black + electric roles
  { pL:[0.70,0.83], pC:[0.06,0.12],  sC:[0.13,0.19], aC:[0.16,0.22], sMin:2.9, aMin:2.7 }, // soft — light, gentle colour
  { pL:[0.88,0.945],pC:[0.035,0.09], sC:[0.14,0.20], aC:[0.16,0.22], sMin:3.5, aMin:3.1 }, // airy — pastel / cream / near-white
  { pL:[0.33,0.48], pC:[0.02,0.055], sC:[0.10,0.16], aC:[0.14,0.20], sMin:3.1, aMin:2.9 }, // muted — desaturated editorial slate/taupe
  { pL:[0.28,0.40], pC:[0.13,0.19],  sC:[0.14,0.20], aC:[0.16,0.22], sMin:3.3, aMin:3.0 }, // jewel — mid-dark saturated (emerald, sapphire, ruby)
];

/* Complementary type pairings. Each pool pairs a heading of a given personality
   with body faces that CONTRAST it while staying highly readable — serif display
   over clean sans, geometric sans over humanist sans — the way designers pair
   type. A mono sits with any. All faces are valid options in the configurator
   selects, so the pairing survives into the exported files. */
const TYPE_POOLS = [
  { // elegant serif heading → clean sans body
    heads:['Playfair Display','Libre Baskerville','Merriweather'],
    bodies:['Source Sans 3','Inter','Work Sans','Karla','Lato'] },
  { // slab-serif heading → clean sans body
    heads:['Bitter','Roboto Slab'],
    bodies:['Inter','Work Sans','Source Sans 3','Karla','Nunito'] },
  { // geometric sans heading → neutral / humanist body
    heads:['Poppins','Montserrat','Sora','Outfit','Space Grotesk','Josefin Sans','Raleway'],
    bodies:['Inter','Source Sans 3','Work Sans','Lato','Nunito','Karla','Cabin'] },
  { // grotesk / humanist sans heading → serif or soft-sans body (contrast)
    heads:['Inter','DM Sans','Manrope','Figtree','Albert Sans','Lexend','Plus Jakarta Sans','Urbanist','Barlow','Rubik','IBM Plex Sans','Work Sans'],
    bodies:['Source Sans 3','Lato','Open Sans','Nunito','Karla','Cabin','Merriweather','Bitter'] },
];
const MONOS = ['JetBrains Mono','IBM Plex Mono','Source Code Pro'];
let lastFontPool = -1;
function pickFonts(){
  let pi; do { pi = Math.floor(Math.random() * TYPE_POOLS.length); } while (pi === lastFontPool && TYPE_POOLS.length > 1);
  lastFontPool = pi;
  const pool = TYPE_POOLS[pi];
  return { h: pick(pool.heads), b: pick(pool.bodies), m: pick(MONOS) };
}

const NAMES=[['Even','Odds'],['House','Rules'],['Clear','Play'],['Open','Deck'],['Real','Odds'],['Game','Plan'],['Smart','Play'],['True','Odds'],['Long','Run'],['Inside','Track'],['Fair','Play'],['Heads','Up'],['Table','Talk'],['Edge','Wise'],['Play','Wise'],['Odds','On'],['Card','Smart'],['Pace','Setter'],['Bright','Line'],['Level','Set'],['Plain','Deal'],['Straight','Up'],['Wise','Play'],['Sharp','Eye'],['Cool','Hand'],['Even','Keel'],['Day','Light'],['Clear','Cut'],['North','Star'],['Way','Point'],['Touch','Stone'],['Sure','Footing'],['Plumb','Line'],['Bench','Mark'],['First','Light'],['Good','Call'],['Right','Read'],['Home','Game'],['Show','Hand'],['Open','Book'],['Game','Theory'],['Quiet','Edge'],['Steady','Hand'],['Know','More'],['Full','Picture'],['Square','Deal'],['Bright','Side'],['Play','book'],
  // extended — same informed-play voice, wider spread of shapes and sounds
  ['Even','Split'],['Clear','Cut'],['Prime','Odds'],['Sound','Play'],['Keen','Edge'],['Solid','Ground'],['True','North'],['Fair','Shake'],['Sharp','Read'],['Deft','Hand'],['Bright','Mark'],['Clean','Break'],['Full','Deck'],['Cool','Head'],['Steady','Play'],['Right','Angle'],['Open','Hand'],['Sure','Bet'],['Wise','Guide'],['Clear','Signal'],['Real','Talk'],['Good','Read'],['Level','Head'],['North','Line'],['Sharp','Odds'],['Plain','Sight'],['Firm','Ground'],['Bright','Spark'],['Home','Table'],['Fair','Warning'],['Quiet','Edge'],['Smart','Deck'],['True','Course'],['Clear','Head'],['Even','Hand'],['Sound','Bet'],['Deal','Wise'],['Play','Right'],['Odds','Wise'],['Table','Wise']];

/* Generative logos. Each roll produces EITHER a pure symbol mark (no text) or a
   wordmark lockup (a compact emblem + the brand name in a SINGLE ink tone — no
   two-colour split). Marks use secondary + accent (which contrast the primary
   surface); the wordmark ink is baked from the primary's luminance so it reads
   on the card. Text uses a system UI font (data-URL SVGs can't load web fonts).
   Returns { url, aspect }. */

// Detailed symbol marks — no text — drawn in a 64×64 field.
const SYMBOLS = [
  (s,a)=>`<path d="M12 40 L32 12 L52 40" fill="none" stroke="${s}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 48 L32 28 L46 48" fill="none" stroke="${a}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 56 L32 45 L40 56" fill="none" stroke="${s}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,                                                                       // triple chevron
  (s,a)=>`<circle cx="32" cy="32" r="23" fill="none" stroke="${s}" stroke-width="5"/><circle cx="32" cy="32" r="14" fill="none" stroke="${a}" stroke-width="5"/><circle cx="32" cy="32" r="5" fill="${s}"/>`,                                                                                                                                                                                                                                             // concentric
  (s,a)=>`<g fill="none" stroke-width="5" stroke-linecap="round"><path d="M12 47 A20 20 0 0 1 52 47" stroke="${s}"/><path d="M19 47 A13 13 0 0 1 45 47" stroke="${a}"/><path d="M26 47 A6 6 0 0 1 38 47" stroke="${s}"/></g><circle cx="32" cy="47" r="3.5" fill="${a}"/>`,                                                                                                                                                                                   // arc fan
  (s,a)=>`<g transform="translate(32 32)"><g fill="${s}"><rect x="-6" y="-27" width="12" height="21" rx="4"/><rect x="-6" y="-27" width="12" height="21" rx="4" transform="rotate(120)"/><rect x="-6" y="-27" width="12" height="21" rx="4" transform="rotate(240)"/></g><circle r="7" fill="${a}"/></g>`,                                                                                                                                                    // triskelion
  (s,a)=>`<path d="M32 7 L55 20 V44 L32 57 L9 44 V20 Z" fill="none" stroke="${s}" stroke-width="5" stroke-linejoin="round"/><path d="M32 20 L43 26 V38 L32 44 L21 38 V26 Z" fill="${a}"/>`,                                                                                                                                                                                                                                                                 // nested hex
  (s,a)=>`<g fill="none" stroke-width="4.5"><ellipse cx="32" cy="32" rx="24" ry="10" stroke="${s}" transform="rotate(-30 32 32)"/><ellipse cx="32" cy="32" rx="24" ry="10" stroke="${a}" transform="rotate(30 32 32)"/><ellipse cx="32" cy="32" rx="24" ry="10" stroke="${s}" transform="rotate(90 32 32)"/></g><circle cx="32" cy="32" r="5.5" fill="${a}"/>`,                                                                                                // atom
  (s,a)=>`<g transform="translate(32 32)" fill="none" stroke-width="5" stroke-linecap="round"><path d="M0 -24 A24 24 0 0 1 20.8 12" stroke="${s}"/><path d="M20.8 12 A24 24 0 0 1 -20.8 12" stroke="${a}"/><path d="M-20.8 12 A24 24 0 0 1 0 -24" stroke="${s}"/></g><circle cx="32" cy="32" r="6" fill="${a}"/>`,                                                                                                                                              // tri-arc ring
];

// Compact emblems for a lockup's left side (56×56).
const EMBLEMS = [
  (s,a)=>`<g transform="translate(6 6)"><circle cx="26" cy="26" r="24" fill="none" stroke="${s}" stroke-width="5"/><circle cx="26" cy="26" r="13" fill="none" stroke="${a}" stroke-width="5"/><circle cx="26" cy="26" r="4" fill="${s}"/></g>`,
  (s,a)=>`<g transform="translate(6 6)"><rect x="6" y="6" width="40" height="40" rx="8" transform="rotate(45 26 26)" fill="${s}"/><rect x="15" y="15" width="22" height="22" rx="5" transform="rotate(45 26 26)" fill="${a}"/></g>`,
  (s,a)=>`<g transform="translate(6 6)"><rect x="1" y="1" width="50" height="50" rx="13" fill="none" stroke="${s}" stroke-width="4"/><rect x="13" y="32" width="7" height="14" rx="2" fill="${s}"/><rect x="23" y="24" width="7" height="22" rx="2" fill="${s}"/><rect x="33" y="15" width="7" height="31" rx="2" fill="${a}"/></g>`,
  (s,a)=>`<g transform="translate(6 6)"><path d="M6 38 L26 12 L46 38" fill="none" stroke="${s}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 46 L26 28 L40 46" fill="none" stroke="${a}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>`,
  (s,a)=>`<g transform="translate(6 6)"><path d="M26 2 L48 11 V27 C48 41 38 48 26 52 C14 48 4 41 4 27 V11 Z" fill="none" stroke="${s}" stroke-width="4"/><path d="M17 26 l6 7 l12 -15" fill="none" stroke="${a}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>`,
];
const LOGO_FONT = "system-ui,-apple-system,Roboto,Helvetica,Arial,sans-serif";

function svgUrl(svg){
  // encodeURIComponent leaves ' ( ) unescaped; escape them so the data URL is
  // safe inside a CSS url('…') wrapper.
  return 'data:image/svg+xml,' + encodeURIComponent(svg).replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29');
}
let lastSymbol = -1, lastEmblem = -1;
function generateLogo(name1, name2, primary, sec, acc){
  const ink = relLum(primary) > 0.42 ? '#15151F' : '#FFFFFF';
  // ~45% pure symbol mark (no words), else a single-tone wordmark lockup.
  if (Math.random() < 0.45) {
    let i; do { i = Math.floor(Math.random() * SYMBOLS.length); } while (i === lastSymbol && SYMBOLS.length > 1);
    lastSymbol = i;
    return { url: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${SYMBOLS[i](sec, acc)}</svg>`), aspect: 1 };
  }
  let e; do { e = Math.floor(Math.random() * EMBLEMS.length); } while (e === lastEmblem && EMBLEMS.length > 1);
  lastEmblem = e;
  const nm = (name1 || 'Brand') + (name2 || '');   // single tone, joined CamelCase wordmark
  const tw = nm.length * 20, tx = 74, w = Math.round(tx + tw + 18);
  const text = `<text x="${tx}" y="43" font-family="${LOGO_FONT}" font-size="37" font-weight="800" letter-spacing="-1" fill="${ink}" textLength="${tw}" lengthAdjust="spacingAndGlyphs">${nm}</text>`;
  return { url: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} 64">${EMBLEMS[e](sec, acc)}${text}</svg>`), aspect: w / 64 };
}

let lastZone = -1, lastHarmony = -1, lastMode = -1;

export function generateRandomBrand() {
  // Background hue from a different sixth of the wheel than last time.
  let zone; do { zone = Math.floor(Math.random() * 6); } while (zone === lastZone);
  lastZone = zone;
  const baseHue = (zone * 60 + Math.random() * 60) % 360;

  let hi; do { hi = Math.floor(Math.random() * HARMONIES.length); } while (hi === lastHarmony);
  lastHarmony = hi;
  const [secOff, accOff] = HARMONIES[hi];

  // Tonal mode (a different one each roll): sets how light/dark and how vivid
  // the primary is. Templates adapt their ink, so the primary can be anything
  // from near-black neon to a pastel cream.
  let mi; do { mi = Math.floor(Math.random() * MODES.length); } while (mi === lastMode);
  lastMode = mi;
  const M = MODES[mi];

  const primary = oklchToHex(rnd(M.pL[0], M.pL[1]), rnd(M.pC[0], M.pC[1]), baseHue);
  const secondary = solveRole(primary, baseHue + secOff + rnd(-6, 6), rnd(M.sC[0], M.sC[1]), M.sMin);
  const accent    = solveRole(primary, baseHue + accOff + rnd(-6, 6), rnd(M.aC[0], M.aC[1]), M.aMin);
  const fonts = pickFonts();
  const name = pick(NAMES);
  const logo = generateLogo(name[0], name[1], primary, secondary, accent);

  return {
    primary, secondary, accent,
    primaryLight: shiftL(primary, 0.08),
    ...neutrals(baseHue),
    fontHeading: fonts.h, fontBody: fonts.b, fontMono: fonts.m,
    gradient: Math.random() < 0.55,
    name,                       // [first, second] → wordmark "FirstSecond"
    logo: logo.url,             // full generated logotype (data URL), replaces the wordmark
    logoAspect: logo.aspect,
  };
}

function setField(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.value = value;
  const hex = document.getElementById(id + 'Hex');
  if (hex) hex.value = value;
}

/* ---- Single-level undo: snapshot the fields a roll touches ---- */
const COLOR_FONT_FIELDS = ['colorPrimary', 'colorSecondary', 'colorAccent',
  'colorN900', 'colorN700', 'colorN500', 'colorN300', 'colorN200', 'colorN100', 'colorN50',
  'fontHeading', 'fontBody', 'fontMono'];
let preRoll = null;

function captureFields() {
  const fields = {};
  for (const id of COLOR_FONT_FIELDS) { const el = document.getElementById(id); if (el) fields[id] = el.value; }
  const grad = document.getElementById('allowGradients');
  const split = document.getElementById('splitSlider');
  const noSplit = document.getElementById('noSplitCheck');
  return {
    fields,
    gradients: grad ? grad.checked : true,
    programName: (document.getElementById('programName') || {}).value || '',
    split: split ? split.value : '4',
    noSplit: noSplit ? noSplit.checked : false,
    footerManual: appState.footerColorManual,
    logo: { url: appState.logoDataUrl, mode: appState.logoMode, isMark: appState.logoIsMark, aspect: appState.logoAspect },
  };
}

export function canUndoRandomBrand() { return preRoll !== null; }

export function undoRandomBrand() {
  if (!preRoll) return false;
  for (const [id, value] of Object.entries(preRoll.fields)) setField(id, value);
  const grad = document.getElementById('allowGradients'); if (grad) grad.checked = preRoll.gradients;
  const name = document.getElementById('programName'); if (name) name.value = preRoll.programName;
  const noSplit = document.getElementById('noSplitCheck'); if (noSplit) noSplit.checked = preRoll.noSplit;
  const split = document.getElementById('splitSlider'); if (split) split.value = preRoll.split;
  appState.footerColorManual = preRoll.footerManual;
  // Restore the logo state the roll may have replaced.
  const lg = preRoll.logo || {};
  appState.logoDataUrl = lg.url || null;
  appState.logoMode = lg.mode || 'cobrand';
  appState.logoIsMark = lg.isMark || false;
  appState.logoAspect = lg.aspect || null;
  const thumb = document.getElementById('logoThumb'); if (thumb && lg.url) thumb.src = lg.url;
  const toggle = document.getElementById('logoModeToggle'); if (toggle) toggle.style.display = lg.url ? '' : 'none';
  preRoll = null;
  return true;
}

/* Write a brand object into the colour, typography and name controls. Voice,
   messaging and jurisdiction are left untouched. Returns the program name. */
function setFieldsFromBrand(b) {
  setField('colorPrimary', b.primary);
  setField('colorSecondary', b.secondary);
  setField('colorAccent', b.accent);
  ['n900', 'n700', 'n500', 'n300', 'n200', 'n100', 'n50']
    .forEach(k => { if (b[k]) setField('color' + k.toUpperCase(), b[k]); });
  if (b.fontHeading) setField('fontHeading', b.fontHeading);
  if (b.fontBody) setField('fontBody', b.fontBody);
  setField('fontMono', b.fontMono || 'Source Code Pro');
  const grad = document.getElementById('allowGradients');
  if (grad) grad.checked = !!b.gradient;
  // Name: a CamelCase wordmark the split logic auto-splits (e.g. "EvenOdds").
  const nm = Array.isArray(b.name) ? (b.name[0] + (b.name[1] || '')) : (b.name || 'Playbook');
  const nameEl = document.getElementById('programName');
  const noSplit = document.getElementById('noSplitCheck');
  if (nameEl) nameEl.value = nm;
  if (noSplit) noSplit.checked = false;
  appState.footerColorManual = false;
  // Generated logotype → replace mode (the full lockup stands in for the wordmark).
  if (b.logo) {
    appState.logoDataUrl = b.logo;
    appState.logoMode = 'replace';
    appState.logoIsMark = false;
    appState.logoAspect = b.logoAspect || null;
    const thumb = document.getElementById('logoThumb'); if (thumb) thumb.src = b.logo;
    const toggle = document.getElementById('logoModeToggle'); if (toggle) toggle.style.display = '';
    const radio = document.querySelector('input[name="logoMode"][value="replace"]'); if (radio) radio.checked = true;
  }
  return nm;
}

/* Roll + apply a fresh random brand. Returns the program name for the note. */
export function applyRandomBrand() {
  preRoll = captureFields();
  const b = generateRandomBrand();
  setFieldsFromBrand(b);
  return b.name.join(' ');
}

/* Apply a specific brand object (e.g. handed off from the showcase reel). */
export function applyBrandObject(b) {
  preRoll = captureFields();
  return setFieldsFromBrand(b);
}

/* If the showcase reel handed a brand off via localStorage, apply it once. */
export function applyIncomingBrand() {
  let raw;
  try { raw = localStorage.getItem('pb-incoming-brand'); } catch (e) { return null; }
  if (!raw) return null;
  try { localStorage.removeItem('pb-incoming-brand'); } catch (e) {}
  let b;
  try { b = JSON.parse(raw); } catch (e) { return null; }
  if (!b || !b.primary) return null;
  setFieldsFromBrand(b);           // a handoff is a starting point, not an undoable roll
  return Array.isArray(b.name) ? b.name.join(' ') : (b.name || 'Brand');
}
