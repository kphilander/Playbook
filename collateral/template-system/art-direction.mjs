// Author guidance belongs to the composition, so it follows a replacement photo.
// It is not player-facing copy and is never embedded in exported artwork.
export const artDirections={
  'room-for-the-rest':{
    title:'Show what comes next.',
    summary:'Photograph a specific moment in the rest of the evening: friends meeting for dinner, arriving at a show, or heading out together.',
    reviewHref:'../campaign-concepts/index.html#campaign-rest-photography',
    comparisonHref:'../campaign-concepts/photo-comparison/index.html',
    briefHref:'../campaign-concepts/photography/art-direction.md',
    diagram:'photography/rest-composition.svg',
    guidance:[
      {label:'Direct an action',text:'One friend joins the table; another turns to greet them. Use eye contact, a small gesture and an unfinished moment to give the scene a story.'},
      {label:'Cast for the audience',text:'Two or three clearly adult friends, with individual style and believable rapport. Let local people and places give each brand its character.'},
      {label:'Light the people',text:'Warm directional light, clear eyes and natural skin texture. Keep architecture quiet, with detail visible in the shadows and no bright strip behind the headline.'},
      {label:'Compose for the cover',text:'A full-bleed 4:5 portrait. Keep the upper 35% quiet, faces and the key gesture in the middle, and the bottom 24% low in detail. Supply native detail for a 3240 × 4050 crop.'}
    ],
    adaptations:'Social Club: a restaurant terrace or show foyer, tactile materials and warm light. Circuit: adult friends heading out for late food, contemporary street light and a little more movement. The shared subject is the next plan together.'
  }
};

for(const [format,composition] of Object.entries({
  story:'A 9:16 crop from a portrait master. Keep both faces inside the central width of the image, with quiet architecture above them. This study reserves 180px at the top and 220px at the bottom; check the actual placement UI separately. Supply native detail for a 2160 × 3840 export.',
  landscape:'Photography occupies the right side of a 16:9 canvas and blends into a solid reading field on the left. Keep faces away from the left blend, with room above for the series line and below for age information. The image slot needs native detail for a 3360 × 3240 crop.'
})){
  const source=artDirections['room-for-the-rest'];
  artDirections['room-for-the-rest-'+format]={...source,
    reviewHref:'../campaign-concepts/campaign-family/index.html#format-'+format,
    briefHref:'../campaign-concepts/campaign-family/README.md',
    guidance:source.guidance.map(g=>g.label==='Compose for the cover'?{label:'Compose for the '+format,text:composition}:g)
  };
}
