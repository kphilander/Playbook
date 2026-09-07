const root='../campaign-concepts/photography/output/campaign-photo-scenes-20260906/creative-campaign/shared-input/';
export const photoSceneAssets=[
  {id:'rest-dinner',name:'Joining the table · 4K portrait',attempt:2,alt:'A woman pulls out a restaurant chair while her seated friend turns to greet her.',promptFile:'rest-dinner-revision-2'},
  {id:'rest-show',name:'Before the show · 4K portrait',attempt:1,alt:'Two adult friends talk beside an open theatre auditorium doorway, with rows of seats beyond.',promptFile:'rest-show'},
  {id:'rest-night-out',name:'Heading out together · 4K portrait',attempt:2,alt:'Two adult friends walk and talk beside a warmly lit restaurant entrance at blue hour.',promptFile:'rest-night-out-revision-2'}
].map(({attempt,promptFile,...asset})=>({
  ...asset,type:'raster',role:'photography',slot:'hero',
  src:`${root}${asset.id}/attempt-${attempt}/candidate-1-image-1.jpg`,
  focalPoint:[50,50],width:3712,height:4608,
  origin:'AI-generated · Gemini 3 Pro Image · 4K',
  provenance:'../campaign-concepts/photo-comparison/README.md',
  prompt:`../campaign-concepts/photography/round-5/${promptFile}.json`
}));
