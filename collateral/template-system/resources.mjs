import {readFileSync} from 'node:fs';
import {loadBrand} from '../../lib/brand-config.mjs';
import {assets} from './assets.mjs';
import {escapeHTML} from './engine.mjs';

export function loadResources(){
  const brand=loadBrand();
  const symbol=readFileSync(new URL('../../visual-identity/logo/symbol/symbol-mark-on-dark.svg',import.meta.url),'utf8')
    .replace('<svg ', '<svg class="presence-symbol" aria-hidden="true" ');
  const logo=readFileSync(new URL('../../visual-identity/logo/secondary/logo-horizontal-mono-dark.svg',import.meta.url),'utf8')
    .replace(/<\?xml[^>]*>/g,'').replace(/fill="#[a-fA-F0-9]+"/g,'fill="currentColor"')
    .replace('<svg ',`<svg class="brand-logo" role="img" aria-label="${escapeHTML(brand.brandTokens()['{{PROGRAM_SHORT_NAME}}'])}" `);
  const profiles={
    'us-contact':{name:'United States · contact and age preview',country:'united-states'},
    'gb-contact':{name:'Great Britain · contact and age preview',country:'united-kingdom'},
    'au-contact':{name:'Australia · contact and age preview',country:'australia'},
    'gb-banner':{name:'Great Britain · online-banner scenario',country:'united-kingdom',website:'gamcare.org.uk'},
    'au-wagering':{name:'Australia · online-wagering social scenario',country:'australia',website:'gamblinghelponline.org.au'}
  };
  const markets=Object.fromEntries(Object.entries(profiles).map(([id,p])=>{
    const tokens=brand.brandTokens(p.country);
    return [id,{...p,phone:tokens['{{HELPLINE_NUMBER}}'],age:tokens['{{MIN_AGE}}']}];
  }));
  const svgs=Object.fromEntries(assets.filter(a=>a.type==='svg').map(a=>[a.id,readFileSync(new URL(a.src,import.meta.url),'utf8')]));
  const licenseFiles={
    Inter:'../../visual-identity/typography/fonts/OFL.txt',
    'Source Sans 3':'assets/source-sans-3-OFL.txt',
    Fraunces:'../style-alternatives/fonts/fraunces-OFL.txt',
    Manrope:'../style-alternatives/fonts/manrope-OFL.txt',
    'Space Grotesk':'../style-alternatives/fonts/spacegrotesk-OFL.txt',
    'Archivo Black':'../style-alternatives/fonts/archivoblack-OFL.txt'
  };
  const fontLicenses=Object.fromEntries(Object.entries(licenseFiles).map(([name,path])=>[name,readFileSync(new URL(path,import.meta.url),'utf8')]));
  return {logo,symbol,markets,svgs,fontLicenses};
}
