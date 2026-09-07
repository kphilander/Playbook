// CSS pixels describe composition; output pixels describe the raster export.
// Rasterize live type/SVG at the final density, never enlarge a saved preview.
export const previewScale=3;
export function parseRasterScale(value=previewScale){
  const scale=Number(value);
  if(!Number.isInteger(scale)||scale<1||scale>4)throw new Error('Raster scale must be an integer from 1 to 4.');
  return scale;
}

// Run inside an artwork document after fonts and images have decoded.
// For object-fit:cover, the tighter source dimension limits usable density.
export function inspectRasterDensity(scale){
  return [...document.querySelectorAll('.specimen img')].filter(i=>!i.currentSrc.match(/^data:image\/svg\+xml|\.svg(?:[?#]|$)/i)).map(i=>{
    const style=getComputedStyle(i),box=i.getBoundingClientRect();
    const ratios=[i.naturalWidth/box.width,i.naturalHeight/box.height];
    const availableScale=style.objectFit==='contain'?Math.max(...ratios):Math.min(...ratios);
    return {asset:i.closest('[data-asset]')?.dataset.asset||null,sourcePixels:[i.naturalWidth,i.naturalHeight],cssPixels:[box.width,box.height],objectFit:style.objectFit,availableScale:+availableScale.toFixed(3),requestedScale:scale,upsampled:availableScale+.001<scale};
  });
}
