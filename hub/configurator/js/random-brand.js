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

/* Solve a bright role: recover vividness lost to gamut clipping (lower L), then
   guarantee ≥4.5:1 on the background (raise L). */
function solveBright(bg,L,C,H){
  const chroma=l=>{const la=lab(oklchToHex(l,C,H));return Math.hypot(la[1],la[2]);};
  for(let i=0;i<8 && chroma(L)<C*0.86 && L>0.55;i++) L-=0.02;
  for(let i=0;i<26 && contrast(oklchToHex(L,C,H),bg)<4.5;i++) L=Math.min(L+0.02,0.95);
  return oklchToHex(L,C,H);
}
function neutrals(h){const C=0.012,mk=L=>oklchToHex(L,C,h);return{n900:mk(.24),n700:mk(.37),n500:mk(.55),n300:mk(.74),n200:mk(.85),n100:mk(.93),n50:mk(.965)};}

/* [secondary, accent] hue offsets from the background hue. A spread of
   relationships — complementary, split, triadic, mono-with-pop, and
   role-reversed warm/cool — so consecutive rolls don't feel samey. */
const HARMONIES=[[185,150],[150,210],[120,240],[90,200],[200,40],[40,200],[170,315],[210,110],[60,260],[240,150]];

/* Display heading + clean body pairings (all valid options in the configurator
   selects). Decoupled from the palette so font + colour combine freely. */
const FONTS=[
 {h:'Sora',b:'Inter',m:'JetBrains Mono'},{h:'Space Grotesk',b:'IBM Plex Sans',m:'Fira Code'},
 {h:'Montserrat',b:'Source Sans 3',m:'Source Code Pro'},{h:'Poppins',b:'Nunito',m:'Source Code Pro'},
 {h:'Outfit',b:'DM Sans',m:'JetBrains Mono'},{h:'Plus Jakarta Sans',b:'Inter',m:'IBM Plex Mono'},
 {h:'Manrope',b:'Inter',m:'JetBrains Mono'},{h:'Urbanist',b:'Work Sans',m:'Source Code Pro'},
 {h:'Playfair Display',b:'Source Sans 3',m:'IBM Plex Mono'},{h:'Bitter',b:'Karla',m:'IBM Plex Mono'},
 {h:'Lexend',b:'Lexend',m:'Source Code Pro'},{h:'Rubik',b:'Nunito',m:'Fira Code'},
 {h:'Figtree',b:'Figtree',m:'Source Code Pro'},{h:'Albert Sans',b:'Albert Sans',m:'JetBrains Mono'},
 {h:'Work Sans',b:'Work Sans',m:'Source Code Pro'},{h:'DM Sans',b:'DM Sans',m:'JetBrains Mono'},
 {h:'Raleway',b:'Open Sans',m:'Source Code Pro'},{h:'Merriweather',b:'Open Sans',m:'IBM Plex Mono'},
 {h:'Roboto Slab',b:'Work Sans',m:'IBM Plex Mono'},{h:'IBM Plex Sans',b:'IBM Plex Sans',m:'IBM Plex Mono'},
 {h:'Josefin Sans',b:'Lato',m:'Source Code Pro'},{h:'Barlow',b:'Barlow',m:'JetBrains Mono'},
 {h:'Libre Baskerville',b:'Inter',m:'IBM Plex Mono'},
];

const NAMES=[['Even','Odds'],['House','Rules'],['Clear','Play'],['Open','Deck'],['Real','Odds'],['Game','Plan'],['Smart','Play'],['True','Odds'],['Long','Run'],['Inside','Track'],['Fair','Play'],['Heads','Up'],['Table','Talk'],['Edge','Wise'],['Play','Wise'],['Odds','On'],['Card','Smart'],['Pace','Setter'],['Bright','Line'],['Level','Set'],['Plain','Deal'],['Straight','Up'],['Wise','Play'],['Sharp','Eye'],['Cool','Hand'],['Even','Keel'],['Day','Light'],['Clear','Cut'],['North','Star'],['Way','Point'],['Touch','Stone'],['Sure','Footing'],['Plumb','Line'],['Bench','Mark'],['First','Light'],['Good','Call'],['Right','Read'],['Home','Game'],['Show','Hand'],['Open','Book'],['Game','Theory'],['Quiet','Edge'],['Steady','Hand'],['Know','More'],['Full','Picture'],['Square','Deal'],['Bright','Side'],['Play','book']];

let lastZone = -1, lastHarmony = -1;

export function generateRandomBrand() {
  // Background hue from a different sixth of the wheel than last time.
  let zone; do { zone = Math.floor(Math.random() * 6); } while (zone === lastZone);
  lastZone = zone;
  const baseHue = (zone * 60 + Math.random() * 60) % 360;

  let hi; do { hi = Math.floor(Math.random() * HARMONIES.length); } while (hi === lastHarmony);
  lastHarmony = hi;
  const [secOff, accOff] = HARMONIES[hi];

  // Bold, varied background: chroma biased toward colourful, lightness dark
  // enough that white text clears AA (guarded below).
  let pL = rnd(0.17, 0.30);
  const pC = 0.025 + Math.pow(Math.random(), 0.6) * 0.095;
  let primary = oklchToHex(pL, pC, baseHue);
  for (let i = 0; i < 8 && contrast('#FFFFFF', primary) < 4.7; i++) { pL -= 0.02; primary = oklchToHex(pL, pC, baseHue); }

  const secondary = solveBright(primary, rnd(0.74, 0.84), rnd(0.11, 0.17), baseHue + secOff + rnd(-12, 12));
  const accent    = solveBright(primary, rnd(0.66, 0.74), rnd(0.15, 0.20), baseHue + accOff + rnd(-12, 12));
  const fonts = pick(FONTS);
  const name = pick(NAMES);

  return {
    primary, secondary, accent,
    primaryLight: shiftL(primary, 0.08),
    ...neutrals(baseHue),
    fontHeading: fonts.h, fontBody: fonts.b, fontMono: fonts.m,
    gradient: Math.random() < 0.55,
    name,                       // [first, second] → wordmark "FirstSecond"
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
  preRoll = null;
  return true;
}

/* Apply a random brand to the colour, typography and name controls. Voice,
   messaging and jurisdiction are left untouched. The caller refreshes the
   wordmark + re-renders. */
export function applyRandomBrand() {
  preRoll = captureFields();
  const b = generateRandomBrand();
  setField('colorPrimary', b.primary);
  setField('colorSecondary', b.secondary);
  setField('colorAccent', b.accent);
  setField('colorN900', b.n900);
  setField('colorN700', b.n700);
  setField('colorN500', b.n500);
  setField('colorN300', b.n300);
  setField('colorN200', b.n200);
  setField('colorN100', b.n100);
  setField('colorN50', b.n50);
  setField('fontHeading', b.fontHeading);
  setField('fontBody', b.fontBody);
  setField('fontMono', b.fontMono);
  const grad = document.getElementById('allowGradients');
  if (grad) grad.checked = b.gradient;
  // Name: a CamelCase wordmark the split logic auto-splits (e.g. "EvenOdds").
  const nameEl = document.getElementById('programName');
  const noSplit = document.getElementById('noSplitCheck');
  if (nameEl) nameEl.value = b.name[0] + b.name[1];
  if (noSplit) noSplit.checked = false;
  appState.footerColorManual = false;
  return b.name.join(' ');   // label for the confirmation note
}
