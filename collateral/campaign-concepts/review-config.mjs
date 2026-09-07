export const originalTreatments=[
  {id:'club',label:'A / Social Club',note:'Warm white, forest green, lighter Manrope type.'},
  {id:'circuit',label:'B / Circuit',note:'Lime, cobalt, heavier Space Grotesk type.'}
];
export const newTreatments=[
  {id:'playbook',label:'A / Playbook',note:'Main brand tokens: navy, emerald and Inter.'},
  {id:'club',label:'B / Social Club',note:'Forest, warm white and Manrope.'},
  {id:'circuit',label:'C / Circuit',note:'Cobalt, lime and Space Grotesk.'}
];
export const treatmentsFor=campaign=>campaign.round===4?newTreatments:originalTreatments;
