import {brandPresenceTemplate} from './brand-presence.mjs';

// One content/identity definition, with format-specific dimensions and CSS.
export const restrainedFormats=[
  {id:'portrait',templateId:'campaign-presence',label:'Portrait post',ratio:'4:5',width:1080,height:1350,scale:3,note:'The approved cover.',description:'The selected A / Restrained composition, kept as the family’s reference.'},
  {id:'story',templateId:'campaign-rest-story',label:'Vertical story',ratio:'9:16',width:1080,height:1920,scale:2,note:'More room for the moment.',description:'A taller crop keeps both friends in view. The headline moves above them, with generous space at the top and bottom.'},
  {id:'landscape',templateId:'campaign-rest-landscape',label:'Landscape display',ratio:'16:9',width:1920,height:1080,scale:3,note:'The message and the scene.',description:'The message sits on a brand-colored field that blends into edge-to-edge photography on the right.'}
];

export const formatTemplates=restrainedFormats.filter(f=>f.id!=='portrait').map(f=>({
  ...brandPresenceTemplate,id:f.templateId,title:`Leave room for the rest / ${f.label}`,
  width:f.width,height:f.height,format:f.label,formatId:f.id,defaultRasterScale:f.scale,
  variants:['quiet'],variantLabels:{quiet:'Restrained'},defaultVariant:'quiet',
  defaultFocalPoint:f.id==='landscape'?[50,85]:null,
  artDirection:'room-for-the-rest-'+f.id,rationale:f.description
}));
