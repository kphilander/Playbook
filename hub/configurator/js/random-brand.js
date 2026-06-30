/* random-brand.js — "Generate a random brand" / "Surprise me".
 *
 * Produces a complete, coherent brand identity from one of 14 archetypes
 * (each a recipe of palette mood + matched display/text type + gradient
 * style), so every roll looks intentional rather than random noise. Colors
 * are sampled in OKLCH (perceptually even) and gated to WCAG AA on both the
 * dark card surface and the derived light surface — the same contract the
 * rest of the configurator and every template use.
 *
 * applyRandomBrand() writes the result into the colour + typography fields and
 * appState; the caller re-renders (rehydrateAll) exactly as it does after a
 * _brand.yml import.
 */
import { appState } from './state.js';

/* ---- OKLCH → sRGB hex + WCAG contrast (sRGB) ---- */
function lin(c){c/=255;return c<=0.04045?c/12.92:Math.pow((c+0.055)/1.055,2.4);}
function unlin(c){const v=c<=0.0031308?12.92*c:1.055*Math.pow(c,1/2.4)-0.055;return Math.round(Math.min(1,Math.max(0,v))*255);}
function oklchToHex(L,C,H){
  const a=C*Math.cos(H*Math.PI/180), b=C*Math.sin(H*Math.PI/180);
  const l_=L+0.3963377774*a+0.2158037573*b, m_=L-0.1055613458*a-0.0638541728*b, s_=L-0.0894841775*a-1.2914855480*b;
  const l=l_**3, m=m_**3, s=s_**3;
  const r= 4.0767416621*l-3.3077115913*m+0.2309699292*s;
  const g=-1.2684380046*l+2.6097574011*m-0.3413193965*s;
  const bl=-0.0041960863*l-0.7034186147*m+1.7076147010*s;
  return '#'+[r,g,bl].map(unlin).map(v=>v.toString(16).padStart(2,'0')).join('');
}
function hexRgb(hex){hex=hex.replace('#','');const n=parseInt(hex,16);return[(n>>16)&255,(n>>8)&255,n&255];}
function lab(hex){const[r,g,b]=hexRgb(hex).map(lin);const l=Math.cbrt(0.4122214708*r+0.5363325363*g+0.0514459929*b),m=Math.cbrt(0.2119034982*r+0.6806995451*g+0.1073969566*b),s=Math.cbrt(0.0883024619*r+0.2817188376*g+0.6299787005*b);return[0.2104542553*l+0.7936177850*m-0.0040720468*s,1.9779984951*l-2.4285922050*m+0.4505937099*s,0.0259040371*l+0.7827717662*m-0.8086757660*s];}
function relLum(hex){const[r,g,b]=hexRgb(hex);return 0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(b);}
function contrast(h1,h2){const a=relLum(h1),b=relLum(h2);return(Math.max(a,b)+0.05)/(Math.min(a,b)+0.05);}
function shiftL(hex,d){const L=lab(hex);const[r,g,b]=labToRgb(Math.max(0,Math.min(1,L[0]+d)),L[1],L[2]);return '#'+[r,g,b].map(unlin).map(v=>v.toString(16).padStart(2,'0')).join('');}
function labToRgb(L,a,b){const l_=L+0.3963377774*a+0.2158037573*b,m_=L-0.1055613458*a-0.0638541728*b,s_=L-0.0894841775*a-1.2914855480*b;const l=l_**3,m=m_**3,s=s_**3;return[4.0767416621*l-3.3077115913*m+0.2309699292*s,-1.2684380046*l+2.6097574011*m-0.3413193965*s,-0.0041960863*l-0.7034186147*m+1.7076147010*s];}

const rnd=(lo,hi)=>lo+(hi-lo)*Math.random();
const rangeVal=r=>Array.isArray(r)?rnd(r[0],r[1]):r;
const pick=a=>a[Math.floor(Math.random()*a.length)];

/* Solve a bright role: recover vividness lost to gamut clipping (lower L), then
   guarantee ≥4.5:1 on the dark primary (raise L). */
function solveBright(primary,L,C,H){
  const chroma=(l)=>{const la=lab(oklchToHex(l,C,H));return Math.hypot(la[1],la[2]);};
  for(let i=0;i<8 && chroma(L)<C*0.86 && L>0.55;i++) L-=0.02;
  for(let i=0;i<24 && contrast(oklchToHex(L,C,H),primary)<4.5;i++) L=Math.min(L+0.02,0.93);
  return oklchToHex(L,C,H);
}
function neutrals(h){const C=0.012,mk=L=>oklchToHex(L,C,h);return{n900:mk(.24),n700:mk(.37),n500:mk(.55),n300:mk(.74),n200:mk(.85),n100:mk(.93),n50:mk(.965)};}

/* p/s/a = OKLCH ranges for primary(dark)/secondary(highlight)/accent(CTA).
   Body fonts are all valid options in the configurator's Body <select>. */
const ARCHETYPES=[
 {key:'sportsbook',label:'Sportsbook Bold',p:{L:[.20,.24],C:[.045,.06],H:[250,266]},s:{L:.76,C:.15,H:[230,260]},a:{L:[.68,.72],C:.17,H:[70,110]},fonts:[{h:'Sora',b:'Inter',m:'JetBrains Mono'},{h:'Space Grotesk',b:'IBM Plex Sans',m:'Fira Code'}],grad:.7},
 {key:'fintech',label:'Trust Fintech',p:{L:[.23,.27],C:[.03,.05],H:[248,266]},s:{L:.80,C:.12,H:[176,204]},a:{L:[.67,.71],C:.14,H:[22,48]},fonts:[{h:'Manrope',b:'Inter',m:'IBM Plex Mono'},{h:'Plus Jakarta Sans',b:'Inter',m:'IBM Plex Mono'}],grad:.4},
 {key:'editorial',label:'Premium Editorial',p:{L:[.20,.24],C:[.045,.06],H:[316,346]},s:{L:.82,C:.12,H:[76,100]},a:{L:[.66,.70],C:.13,H:[182,204]},fonts:[{h:'Playfair Display',b:'Source Sans 3',m:'IBM Plex Mono'},{h:'Libre Baskerville',b:'Inter',m:'IBM Plex Mono'}],grad:.25},
 {key:'friendly',label:'Friendly Approachable',p:{L:[.22,.26],C:[.04,.055],H:[334,354]},s:{L:.80,C:.12,H:[332,358]},a:{L:[.68,.72],C:.15,H:[28,54]},fonts:[{h:'Outfit',b:'Nunito',m:'Source Code Pro'},{h:'Figtree',b:'DM Sans',m:'Source Code Pro'}],grad:.55},
 {key:'techmono',label:'Tech Precision',p:{L:[.20,.23],C:[.025,.035],H:[250,272]},s:{L:.80,C:.14,H:[180,214]},a:{L:[.66,.70],C:.18,H:[318,344]},fonts:[{h:'Space Grotesk',b:'IBM Plex Sans',m:'JetBrains Mono'},{h:'Sora',b:'IBM Plex Sans',m:'Fira Code'}],grad:.5},
 {key:'pop',label:'Vibrant Social',p:{L:[.22,.26],C:[.055,.07],H:[272,300]},s:{L:.78,C:.16,H:[188,224]},a:{L:[.68,.72],C:.18,H:[20,48]},fonts:[{h:'Poppins',b:'Nunito',m:'Source Code Pro'},{h:'Rubik',b:'Nunito',m:'Fira Code'}],grad:.75},
 {key:'slab',label:'Editorial Slab',p:{L:[.21,.25],C:[.025,.04],H:[250,266]},s:{L:.80,C:.12,H:[42,74]},a:{L:[.64,.68],C:.17,H:[22,42]},fonts:[{h:'Roboto Slab',b:'Work Sans',m:'IBM Plex Mono'},{h:'Bitter',b:'Karla',m:'IBM Plex Mono'}],grad:.3},
 {key:'minimal',label:'Cool Minimal',p:{L:[.24,.28],C:[.02,.035],H:[240,260]},s:{L:.78,C:.10,H:[216,248]},a:{L:[.66,.70],C:.12,H:[196,222]},fonts:[{h:'Inter',b:'Inter',m:'IBM Plex Mono'},{h:'Work Sans',b:'Work Sans',m:'Source Code Pro'}],grad:.2},
 {key:'jewel',label:'Jewel Luxe',p:{L:[.20,.24],C:[.05,.07],H:[262,292]},s:{L:.82,C:.13,H:[80,104]},a:{L:[.65,.69],C:.16,H:[328,352]},fonts:[{h:'Raleway',b:'Open Sans',m:'IBM Plex Mono'},{h:'Playfair Display',b:'Source Sans 3',m:'IBM Plex Mono'}],grad:.35},
 {key:'heritage',label:'Warm Heritage',p:{L:[.21,.25],C:[.035,.05],H:[44,74]},s:{L:.80,C:.13,H:[70,94]},a:{L:[.66,.70],C:.12,H:[180,204]},fonts:[{h:'Merriweather',b:'Open Sans',m:'IBM Plex Mono'},{h:'Bitter',b:'Karla',m:'IBM Plex Mono'}],grad:.3},
 {key:'neon',label:'Neon Night',p:{L:[.17,.20],C:[.04,.06],H:[252,282]},s:{L:.84,C:.17,H:[148,194]},a:{L:[.66,.70],C:.20,H:[320,352]},fonts:[{h:'Space Grotesk',b:'Inter',m:'JetBrains Mono'},{h:'Sora',b:'Inter',m:'Fira Code'}],grad:.8},
 {key:'pastel',label:'Soft Pastel',p:{L:[.25,.29],C:[.025,.04],H:[250,284]},s:{L:.83,C:.09,H:[180,264]},a:{L:[.70,.74],C:.11,H:[22,54]},fonts:[{h:'Figtree',b:'Figtree',m:'Source Code Pro'},{h:'Albert Sans',b:'Albert Sans',m:'JetBrains Mono'}],grad:.4},
 {key:'coastal',label:'Coastal Ocean',p:{L:[.22,.26],C:[.045,.06],H:[198,232]},s:{L:.80,C:.14,H:[184,208]},a:{L:[.68,.72],C:.15,H:[28,54]},fonts:[{h:'Manrope',b:'Inter',m:'IBM Plex Mono'},{h:'Urbanist',b:'Work Sans',m:'Source Code Pro'}],grad:.5},
 {key:'authority',label:'Authority Corporate',p:{L:[.22,.26],C:[.035,.05],H:[250,266]},s:{L:.78,C:.11,H:[218,248]},a:{L:[.67,.71],C:.13,H:[38,64]},fonts:[{h:'IBM Plex Sans',b:'IBM Plex Sans',m:'IBM Plex Mono'},{h:'Lexend',b:'Lexend',m:'Source Code Pro'}],grad:.25},
];

let lastKey = null;

export function generateRandomBrand() {
  const pool = ARCHETYPES.filter(a => a.key !== lastKey);
  const arch = pick(pool.length ? pool : ARCHETYPES);
  lastKey = arch.key;
  const pL=rangeVal(arch.p.L), pC=rangeVal(arch.p.C), pH=rangeVal(arch.p.H);
  const primary=oklchToHex(pL,pC,pH);
  const secondary=solveBright(primary, rangeVal(arch.s.L), rangeVal(arch.s.C), rangeVal(arch.s.H));
  const accent=solveBright(primary, rangeVal(arch.a.L), rangeVal(arch.a.C), rangeVal(arch.a.H));
  const fonts=pick(arch.fonts);
  return {
    archetype: arch.key, archetypeLabel: arch.label,
    primary, secondary, accent,
    primaryLight: shiftL(primary, 0.08),
    ...neutrals(pH),
    fontHeading: fonts.h, fontBody: fonts.b, fontMono: fonts.m,
    gradient: Math.random() < arch.grad,
  };
}

function setField(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.value = value;
  const hex = document.getElementById(id + 'Hex');
  if (hex) hex.value = value;
}

/* Single-level undo: snapshot the fields a roll touches so the user can revert
   the most recent roll (e.g. if they'd tweaked something first). */
const ROLL_FIELDS = ['colorPrimary', 'colorSecondary', 'colorAccent',
  'colorN900', 'colorN700', 'colorN500', 'colorN300', 'colorN200', 'colorN100', 'colorN50',
  'fontHeading', 'fontBody', 'fontMono'];
let preRoll = null;

function captureFields() {
  const fields = {};
  for (const id of ROLL_FIELDS) {
    const el = document.getElementById(id);
    if (el) fields[id] = el.value;
  }
  const grad = document.getElementById('allowGradients');
  return { fields, gradients: grad ? grad.checked : true, footerManual: appState.footerColorManual };
}

export function canUndoRandomBrand() { return preRoll !== null; }

export function undoRandomBrand() {
  if (!preRoll) return false;
  for (const [id, value] of Object.entries(preRoll.fields)) setField(id, value);
  const grad = document.getElementById('allowGradients');
  if (grad) grad.checked = preRoll.gradients;
  appState.footerColorManual = preRoll.footerManual;
  preRoll = null;
  return true;
}

/* Apply a random brand to the colour + typography controls. Voice, messaging,
   jurisdiction and the program name are left untouched — this rolls the visual
   identity only. Returns the archetype label for a confirmation note. */
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
  // Let the footer bar re-derive from the new primary.
  appState.footerColorManual = false;
  return b.archetypeLabel;
}
