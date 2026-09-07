import {readFileSync, writeFileSync} from 'node:fs';

// Reuse the generated vector outlines. Inline SVG allows CSS skins to set
// currentColor and works in file-based renders as well as the dev server.
const logo=readFileSync(new URL('../../visual-identity/logo/secondary/logo-horizontal-mono-dark.svg',import.meta.url),'utf8')
  .trim().replace(/fill="#[a-fA-F0-9]+"/g,'fill="currentColor"')
  .replace('<svg ', '<svg class="ad-wordmark" role="img" aria-label="{{PROGRAM_SHORT_NAME}}" ');
for (const file of ['card-1c-lucky-machine.html','card-2a-house-edge.html','poster-19e-never-due.html']) {
  const path=new URL(file,import.meta.url);
  const html=readFileSync(path,'utf8');
  const result=html.replace(/<(span|svg) class="ad-wordmark"[\s\S]*?<\/\1>/,logo);
  if(result===html && !html.includes(logo)) throw new Error(`Missing wordmark slot in ${file}`);
  writeFileSync(path,result);
}
