import {readFileSync, existsSync} from 'node:fs';
import {dirname, resolve, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import yaml from 'js-yaml';
import {limits} from './template.mjs';
export const here=dirname(fileURLToPath(import.meta.url));
export const root=resolve(here,'../../../..');
export const json=value=>JSON.stringify(value,null,2)+'\n';
export const readJSON=path=>JSON.parse(readFileSync(path,'utf8'));
export const sha=value=>createHash('sha256').update(value).digest('hex');
export const run=readJSON(join(here,'run.json'));
export function verifyInputs(){
 for(const ref of readJSON(join(here,'inputs.json')).references){
  if(sha(readFileSync(join(root,ref.path)))!==ref.sha256)throw new Error(`Frozen input changed: ${ref.path}`);
 }
}
export function participant(id){
 const p=run.participants.find(p=>p.id===id);if(!p)throw new Error('Unknown registered participant.');return p;
}
export function frozen(id){
 participant(id);verifyInputs();
 const folder=join(here,'first-submissions',id),record=readJSON(join(folder,'record.json'));
 const bytes=readFileSync(join(folder,'manifest.json'));
 if(sha(bytes)!==record.sha256)throw new Error('First submission hash mismatch.');
 return {manifest:JSON.parse(bytes),record,folder};
}
export function auditManifest(manifest){
 const issues=[],tax=yaml.load(readFileSync(join(root,'_taxonomy.yml'),'utf8'));
 if(JSON.stringify(manifest.concepts?.map(c=>c.id))!==JSON.stringify(run.categories))issues.push('Expected exactly sports, myth, wildcard in order.');
 for(const c of manifest.concepts||[]){
  for(const key of ['title','body','takeaway','rationale','caption','alt','photoPrompt','photoAlt','photoRationale']){
   if(typeof c[key]!=='string'||!c[key].trim())issues.push(`${c.id}: missing ${key}`);
   if(limits[key]&&[...String(c[key]||'')].length>limits[key])issues.push(`${c.id}: ${key} exceeds ${limits[key]} characters`);
  }
  if(c.category!==c.id)issues.push(`${c.id}: category mismatch`);
  if(!c.sources?.length)issues.push(`${c.id}: no sources`);
  for(const s of c.sources||[]){
   const path=resolve(root,s.path||'');
   if(!path.startsWith(root+'/')||!existsSync(path)){issues.push(`${c.id}: source path missing`);continue;}
   const headings=readFileSync(path,'utf8').split('\n').filter(l=>/^#{1,6} /.test(l)).map(l=>l.replace(/^#{1,6} /,''));
   if(!headings.includes(s.section))issues.push(`${c.id}: source heading not exact: ${s.section}`);
   if(!s.note)issues.push(`${c.id}: source note missing`);
  }
  for(const key of ['content_type','pillar','tier','tone','audience','channel','reading_level']){
   const values=Array.isArray(c.tags?.[key])?c.tags[key]:[c.tags?.[key]];
   if(!values.length||values.some(v=>!tax[key]?.includes(v)))issues.push(`${c.id}: invalid taxonomy ${key}`);
  }
 }
 const required=readFileSync(join(here,'BRIEF.md'),'utf8').matchAll(/^- `([^`]+)`/gm);
 for(const [,path] of required)if((path.includes('/')||/\.(yml|md)$/.test(path))&&!manifest.referencesRead?.includes(path))issues.push(`Required read not attested: ${path}`);
 return issues;
}
