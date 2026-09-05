import {renderDocument,validateRecipe} from './engine.mjs';

export async function bundleDocument(input,resources,{assetBase,readText,readDataURL}){
  const recipe=validateRecipe(input);
  let html=renderDocument(recipe,resources,{assetBase,includeContext:true});
  for(const match of [...html.matchAll(/<link[^>]*href="([^"]+)"[^>]*>/g)]){
    const cssURL=match[1];
    let css=await readText(cssURL);
    for(const resource of [...css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)]){
      const data=await readDataURL(new URL(resource[1],cssURL).href);
      css=css.replaceAll(resource[0],`url("${data}")`);
    }
    html=html.replace(match[0],`<style${match[0].includes('creative-skin')?' id="creative-skin"':''}>${css}</style>`);
  }
  for(const match of [...html.matchAll(/<img[^>]*src="([^"]+)"/g)])html=html.replace(match[1],await readDataURL(match[1]));
  const json=JSON.stringify(recipe).replaceAll('<','\\u003c');
  const licenses=JSON.stringify(resources.fontLicenses,null,2).replaceAll('<','\\u003c');
  return html.replace('</body>',`<script type="application/json" id="creative-recipe">${json}</script><script type="application/json" id="font-licenses">${licenses}</script></body>`);
}
