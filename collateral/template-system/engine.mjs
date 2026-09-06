import {templates} from './catalog.mjs';
import {assets,skins} from './assets.mjs';

export {templates,assets,skins};
export const schema='playbook-creative-recipe';
export const version=1;
export const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lines=value=>escapeHTML(value).replaceAll('\n',' <br>');
const arrow='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 24h32M26 11l13 13-13 13"/></svg>';
export const fields={series:45,headline:90,copy:180,action:45};
export const slotFor=d=>d.visual==='photo'?'hero':d.visual==='plan'?'plan':null;

export function createRecipe(templateId='message-signature',overrides={}){
  const d=templates.find(t=>t.id===templateId);
  if(!d)throw new Error('Unknown template.');
  return validateRecipe({schema,version,templateId,variant:'after',skinId:d.theme,
    assetId:d.defaultAsset||(d.visual==='photo'?'casino-conversation':d.visual==='plan'?'budget-bars':null),
    focalPoint:null,marketId:d.layout==='banner'?'gb-banner':d.layout==='protected'?'au-wagering':'us-contact',
    content:d.layout==='banner'?{}:Object.fromEntries(Object.keys(fields).map(key=>[key,d[key]])),...overrides});
}

export function validateRecipe(input){
  if(!input||input.schema!==schema||input.version!==version)throw new Error('This file is not a supported Playbook creative recipe.');
  const d=templates.find(t=>t.id===input.templateId);
  if(!d)throw new Error('Unknown template.');
  if(!skins.some(s=>s.id===input.skinId))throw new Error('Choose a registered skin.');
  if(!(d.variants||['before','after']).includes(input.variant))throw new Error('Unknown composition.');
  const allowedMarkets=d.layout==='banner'?['gb-banner']:d.layout==='protected'?['au-wagering']:['us-contact','gb-contact','au-contact'];
  if(!allowedMarkets.includes(input.marketId))throw new Error('This market profile does not match the template.');
  const slot=slotFor(d),asset=assets.find(a=>a.id===input.assetId);
  if(slot?(!asset||asset.slot!==slot):input.assetId!==null)throw new Error('This image does not fit the template’s media slot.');
  if(input.focalPoint!==null&&(!asset||asset.type!=='raster'||!Array.isArray(input.focalPoint)||input.focalPoint.length!==2||input.focalPoint.some(n=>!Number.isFinite(n)||n<0||n>100)))throw new Error('Photo positions must be between 0 and 100.');
  const content={};
  if(d.layout!=='banner')for(const [key,max] of Object.entries(fields)){
    const value=input.content?.[key];
    if(typeof value!=='string'||!value.trim()||value.length>max)throw new Error(`${key}: enter 1–${max} characters.`);
    content[key]=value;
  }
  return {schema,version,templateId:d.id,variant:input.variant,skinId:input.skinId,assetId:input.assetId,focalPoint:input.focalPoint&&[...input.focalPoint],marketId:input.marketId,content};
}

export function marketContext(recipe,resources){
  const d=templates.find(t=>t.id===recipe.templateId),market=resources.markets[recipe.marketId];
  if(!market)throw new Error('Market configuration is unavailable. Rebuild the studio.');
  return {scope:market.name,assumption:d.assumption||'Contact and age preview only. The selected market supplies contact details; operator and placement requirements need a separate review.',source:d.source||'../../docs/compliance-banner-research-2026-09-05.md'};
}

// Render structure, content, and assets. Skin is deliberately absent from the article markup.
export function renderArticle(input,resources,{assetBase='../template-system/'}={}){
  const r=validateRecipe(input),d={...templates.find(t=>t.id===r.templateId),...r.content};
  const market=resources.markets[r.marketId];
  if(!market)throw new Error('Missing market configuration.');
  const head=label=>`<header class="mc-header" data-block>${resources.logo}<span>${escapeHTML(label)}</span></header>`;
  const action=text=>`<div class="mc-action" data-block><span>${escapeHTML(text)}</span>${arrow}</div>`;
  const phone=escapeHTML(market.phone),age=escapeHTML(market.age)+'+';
  let body;
  if(d.layout.startsWith('campaign-')){
    const asset=assets.find(a=>a.id===r.assetId);
    const [x,y]=r.focalPoint||asset?.focalPoint||[50,50];
    // Background photography is a media layer; text and information remain HTML.
    const photo=asset?`<figure class="campaign-photo" data-asset="${asset.id}">${asset.type==='svg'?resources.svgs[asset.id]:`<img src="${escapeHTML(assetBase+asset.src)}" alt="${escapeHTML(asset.alt)}" style="--media-x:${x}%;--media-y:${y}%">`}</figure><div class="campaign-shade" aria-hidden="true"></div>`:'';
    const title=`<h1 data-block>${lines(d.headline)}</h1>`;
    const pause=d.layout==='campaign-pause'?'<svg class="campaign-pause-mark" viewBox="0 0 100 160" aria-hidden="true"><path d="M0 0H32V160H0ZM68 0H100V160H68Z"/></svg>':'';
    const outcomes=2**4;
    const grid=d.visual==='probability'?`<figure class="campaign-outcomes" data-block><svg viewBox="0 0 520 520" role="img" aria-label="One highlighted circle among sixteen equal circles: one all-win outcome in sixteen equally likely combinations.">${Array.from({length:outcomes},(_,i)=>`<circle cx="${65+(i%4)*130}" cy="${65+Math.floor(i/4)*130}" r="50" class="${i===0?'winning':'other'}"/>`).join('')}</svg></figure><div class="campaign-stat" data-block><span>1 in</span><strong>${outcomes}</strong></div>`:'';
    const help=`<footer class="campaign-footer" data-block data-protected-zone="support-and-age"><span>Free support: <a href="tel:${escapeHTML(market.phone.replace(/[^+\d]/g,''))}">${phone}</a></span><span>${age}</span></footer>`;
    body=photo+head(d.series)+title+pause+grid+`<p class="mc-copy" data-block>${lines(d.copy)}</p>`+action(d.action)+help;
  }else if(d.layout==='banner'){
    const route=`<section class="mc-route" data-block><span>Free support for any question about gambling</span><strong>${escapeHTML(market.website)} ${arrow}</strong></section>`;
    body=`${head('Your time. Your call.')}<p class="mc-stage-label stage-one" data-block>01 / A compact invitation</p><section class="mc-banner" data-block><h1>Make room<br>for a pause.</h1><div class="mini-action">Explore time tools ${arrow}</div><span class="mini-age">${age}</span></section><div class="mc-journey" data-block>${arrow}<span>Opens your time-tools page</span></div><p class="mc-stage-label stage-two" data-block>02 / The destination</p><section class="mc-destination" data-block><div class="browser-top"><i></i><i></i><i></i><span>Time tools</span></div><h2>Your time.<br>Your call.</h2><p>Set a reminder before you play.<br>Give yourself a moment to check in.</p></section>${route}`;
  }else{
    const headline=d.headline.split('\n'),title=`<h1 data-block>${escapeHTML(headline.shift())}${headline.length?'<br><em>'+lines(headline.join('\n'))+'</em>':''}</h1>`;
    const copy=`<p class="mc-copy" data-block>${lines(d.copy)}</p>`;
    const asset=assets.find(a=>a.id===r.assetId);
    let visual='';
    if(d.visual==='photo'){
      let media;
      if(asset.type==='svg')media=resources.svgs[asset.id];
      else{
        const [x,y]=r.focalPoint||asset.focalPoint;
        media=`<img src="${escapeHTML(assetBase+asset.src)}" alt="${escapeHTML(asset.alt)}" style="--media-x:${x}%;--media-y:${y}%">`;
      }
      visual=`<figure class="mc-photo" data-block data-asset="${asset.id}">${media}</figure>`;
    }else if(d.visual==='plan')visual=`<section class="mc-plan" data-block><span>Your entertainment budget</span><div class="plan-graphic" aria-hidden="true" data-asset="${asset.id}">${resources.svgs[asset.id]}</div><strong>Chosen by you.</strong></section>`;
    if(d.tier===2){
      const contact=`<section class="mc-contact" data-block><span>Free, confidential support</span><strong>${phone}</strong><a class="contact-button" href="tel:${escapeHTML(market.phone.replace(/[^+\d]/g,''))}">${escapeHTML(d.action)}${arrow}</a></section>`;
      body=head(d.series)+title+(d.layout==='support-first'&&r.variant==='after'?contact+copy:copy+contact)+'<p class="mc-reassurance" data-block>Your choice. Your pace.</p>';
    }else{
      const help=d.layout==='protected'?`<section class="mc-warning" data-block><strong>Set a deposit limit.</strong><p>For free and confidential support call <span class="contact-number">${phone}</span> or visit <span class="contact-url">${escapeHTML(market.website)}</span></p><span>${age}</span></section>`:`<section class="mc-help" data-block><span>Free support</span><strong>${phone}</strong></section><p class="mc-age" data-block>${age}</p>`;
      body=head(d.series)+title+copy+visual+action(d.action)+help;
    }
  }
  return `<article class="specimen message-concept mc-${d.layout} ${r.variant}" data-template="${d.id}" data-tier="${d.tier||1}" aria-label="${escapeHTML(d.title)}">${body}</article>`;
}

export function renderDocument(recipe,resources,{assetBase='../template-system/',title='Playbook creative template',includeContext=false}={}){
  const r=validateRecipe(recipe),context=marketContext(r,resources),d=templates.find(t=>t.id===r.templateId);
  const metadata=`content_type: campaign; pillar: [${d.tier===2?'help':'open, social'}]; tier: ${d.tier||1}; tone: ${d.tier===2?'warm-direct':'confident-informative'}; audience: [general]; channel: [${d.tier===2||d.layout==='banner'?'in-app':'social-media'}].`;
  const styles=['../../visual-identity/design-tokens.css','fonts.css','layouts.css',...(d.layout.startsWith('campaign-')?['campaigns.css']:[]),`skins/${r.skinId}.css`];
  return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHTML(title)}</title>${styles.map(s=>`<link ${s.startsWith('skins/')?'id="creative-skin" ':''}rel="stylesheet" href="${assetBase+s}">`).join('')}</head><body><!-- ${metadata} Template study. ${escapeHTML(context.scope)}. ${escapeHTML(context.assumption)} -->${renderArticle(r,resources,{assetBase})}${includeContext?`<aside class="export-context" style="font:16px/1.5 sans-serif;max-width:70ch;padding:24px"><strong>${escapeHTML(context.scope)}</strong><p>${escapeHTML(context.assumption)}</p><p>Creative study · source dimensions and checks apply to this copy and asset selection.</p></aside>`:''}</body></html>\n`;
}
