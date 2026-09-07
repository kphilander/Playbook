import {writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {templates,createRecipe,renderDocument,marketContext} from '../template-system/engine.mjs';
import {loadResources} from '../template-system/resources.mjs';

// The preference gallery and studio use the same library and renderer.
export function buildMessageConcepts(here){
  const resources=loadResources(),entries=[];
  const pairs=templates.map((d,i)=>{
    const context=marketContext(createRecipe(d.id),resources);
    const pair={...d,number:31+i,category:'message',kind:'message',variable:d.tier===2?'Contact placement and reading hierarchy':'Information placement and composition',...context,sourceTitle:d.sourceTitle||'Research and market assumptions'};
    // Keep established comparison context and exported preference briefs compatible.
    if(!d.scope){
      pair.scope=d.tier===2?'Tier 2 · US support-contact preview':'Layout study · US contact and age preview';
      pair.assumption=d.tier===2?'Calm support-screen study. Both versions retain the same phone number, contact label and action. No gambling imagery or playful support treatment.':'The same contact information and age notice appear in both versions. Placement and composition change. This is not a cleared state-specific advertisement.';
    }
    for(const side of ['before','after']){
      const id=`${d.id}-${side}`,recipe=createRecipe(d.id,{variant:side});
      const item={id,kind:'message',format:d.format,width:d.width||1080,height:d.height||1350,html:`masters/${id}.html`,png:`renders/${id}.png`,jurisdiction:d.jurisdiction||'united-states',readingFloor:d.tier===2?16:d.layout==='banner'?32:42,comparisonId:d.id,side};
      writeFileSync(join(here,item.html),renderDocument(recipe,resources,{assetBase:'../../template-system/',title:`${d.title} / ${side}`}));
      entries.push(item);pair[side]=item;
    }
    return pair;
  });
  return {pairs,entries};
}
