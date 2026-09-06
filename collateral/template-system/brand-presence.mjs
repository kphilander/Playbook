// Brand expression is a composition choice; operator skins remain independent.
export const presenceTreatments=[
  {id:'quiet',label:'A / Restrained',short:'Restrained',note:'The photograph leads.',description:'The official wordmark, book-and-play symbol and a small accent rule establish a quiet brand signature. The whole photograph stays visible.'},
  {id:'after',label:'B / Signature',short:'Signature',note:'Playbook shares the lead.',description:'A heavier headline, an accent-colored second line and a longer rule make the identity visible at a glance. Brand color tones the upper photograph; the people remain the focus below.'},
  {id:'bold',label:'C / Bold',short:'Bold',note:'The brand leads.',description:'A solid color masthead and oversized type give the campaign a strong graphic presence. This deliberately covers the upper architecture while the same photograph continues edge to edge below.'}
];
export const brandPresenceTemplate={
  id:'campaign-presence',theme:'playbook',layout:'campaign-rest',defaultVariant:'quiet',
  variants:presenceTreatments.map(t=>t.id),variantLabels:Object.fromEntries(presenceTreatments.map(t=>[t.id,t.short])),
  title:'Brand presence / Leave room for the rest',format:'Campaign social',
  series:'Time well spent',headline:'Leave room\nfor the rest.',
  copy:'Choose a finish time before you play.\nKeep the rest of your night open.',action:'Plan your next pause',
  visual:'photo',defaultAsset:'rest-dinner',artDirection:'room-for-the-rest',
  rationale:'One photograph and one message in three CSS-controlled levels of brand expression. Color and typography still follow the selected operator skin.'
};
