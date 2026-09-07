import {readFileSync,writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const items=JSON.parse(readFileSync(new URL('manifest.json',import.meta.url)));
const require=createRequire(new URL('../render/package.json',import.meta.url));
const results=[],repo=fileURLToPath(new URL('../../',import.meta.url));
for(const profile of ['preview','social-square','story','print-us','print-iso','email-320','email-375','email-600']){
 const result=spawnSync(process.execPath,['collateral/render/render-cards.mjs','--check','--locale=en','--profile='+profile,...items.map(i=>i.id+'.html')],{cwd:repo,encoding:'utf8',env:{...process.env,PUPPETEER_EXECUTABLE_PATH:process.env.PUPPETEER_EXECUTABLE_PATH||require('puppeteer').executablePath({headless:'shell'})}});
 const count=(result.stdout?.match(/Checked/g)||[]).length;
 results.push({profile,count,pass:result.status===0,...(result.status?{error:result.stderr||result.error?.message}:{})});
 console.log(profile+' · '+count+' layouts · '+(result.status===0?'passed':result.stderr||result.error?.message));
}
writeFileSync(new URL('layout-validation.json',import.meta.url),JSON.stringify(results,null,2)+'\n');
if(results.some(r=>!r.pass))process.exitCode=1;
