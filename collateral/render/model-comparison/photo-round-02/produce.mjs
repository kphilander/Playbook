import {existsSync,mkdirSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {generatePhoto} from '../../../../lib/google-photography.mjs';
import {here,json,readJSON,frozen,run} from './common.mjs';
const id=process.argv[2],{manifest}=frozen(id);
const settings=readJSON(join(here,'photography-settings.json'));
const outputRoot=join(here,'photography-output');
const requestFolder=join(here,'requests',id);mkdirSync(requestFolder,{recursive:true});
const reports=await Promise.allSettled(run.categories.map(async concept=>{
 const c=manifest.concepts.find(c=>c.id===concept);
 if(!c)throw new Error('Missing required concept.');
 const resultFile=join(outputRoot,settings.runId,id,run.condition,concept,'attempt-1','result.json');
 if(existsSync(resultFile)){
  const result=readJSON(resultFile);console.log(json({participant:id,concept,status:result.status,reusedRecordedAttempt:true}));return result;
 }
 const request={participant:id,condition:run.condition,concept,prompt:c.photoPrompt};
 const requestFile=join(requestFolder,`${concept}.json`);
 if(!existsSync(requestFile))writeFileSync(requestFile,json(request),{flag:'wx'});
 const result=await generatePhoto({request,settings,outputRoot});
 console.log(json({participant:id,concept,status:result.status,actualModelVersion:result.actualModelVersion,elapsedMs:result.elapsedMs,images:result.images?.length||0}));return result;
}));
if(reports.some(r=>r.status==='rejected'||r.value.status!=='generated')){
 console.error('One or more photos did not complete. Preserved attempts will not be retried.');process.exitCode=1;
}
