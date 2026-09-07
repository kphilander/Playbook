import {readFileSync} from 'node:fs';
import yaml from 'js-yaml';
import {createBrandConfig} from '../../lib/brand-config.mjs';

// Create an isolated brand instance. Trials never change the main YAML,
// generated stylesheets or loadBrand()'s process-wide default cache.
export function mergeBrand(base,overlay){
  const result={...base};
  for(const [key,value] of Object.entries(overlay||{})){
    if(['__proto__','constructor','prototype'].includes(key))throw new Error('Unsupported configuration key: '+key);
    result[key]=value&&typeof value==='object'&&!Array.isArray(value)?mergeBrand(base?.[key]||{},value):value;
  }
  return result;
}

export function loadBrandPackage({configPath,cssPath,name,country,region}){
  const base=yaml.load(readFileSync(new URL('../../_brand.yml',import.meta.url),'utf8'));
  const overlay=yaml.load(readFileSync(configPath,'utf8'));
  const data=mergeBrand(base,overlay);
  if(name)data.meta={...data.meta,program_name:name,short_name:name};
  // Contact records are atomic: absent text/chat channels must not be
  // inherited from an older record in the base configuration.
  for(const [jurisdiction,records] of Object.entries(overlay.helplines||{})){
    if(records.number)data.helplines[jurisdiction]={...records};
    else for(const [key,record] of Object.entries(records)){
      if(record?.number)data.helplines[jurisdiction][key]={...record};
    }
  }
  if(!data.helplines?.[country]?.[region]?.number&&!data.helplines?.[country]?.number)
    throw new Error('Choose a configured country and region; contact fallback is disabled for brand trials.');
  const brand=createBrandConfig(data),tokens=brand.brandTokens(country,region);
  const mandatory=brand.messaging?.mandatory?.[country+'-'+region]||'';
  const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  return {brand,tokens,mandatory,contact:brand.helpline(country,region),country,region,
    css:readFileSync(cssPath,'utf8'),
    resolve:html=>Object.entries(tokens).reduce((s,[key,value])=>s.replaceAll(key,key==='{{OPERATOR_LOGO}}'?value:escape(value)),html)};
}
