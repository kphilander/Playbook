import {writeFileSync} from 'node:fs';
import {loadResources} from '../template-system/resources.mjs';
writeFileSync(new URL('./resources.json',import.meta.url),JSON.stringify(loadResources(),null,2)+'\n');
console.log('Studio resources refreshed from brand configuration and the shared asset registry.');
