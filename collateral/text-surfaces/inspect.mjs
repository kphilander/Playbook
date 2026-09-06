// Browser-side geometry, copy and color collection. Rectangles are relative
// to the trimmed artboard, not a viewport that may include print bleed.
export function inspectText(selector){
  const root=document.querySelector(selector),box=root.getBoundingClientRect();
  const footer=root.querySelector('[data-protected-zone="support-and-legal"]');
  const footerBox=footer.getBoundingClientRect(),lines=[],inkLines=[],issues=[];
  const canvas=document.createElement('canvas');canvas.width=canvas.height=1;
  const ctx=canvas.getContext('2d',{willReadFrequently:true});
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
    const node=walker.currentNode,e=node.parentElement,text=node.textContent.trim();
    if(!text||e.closest('style,svg,[aria-hidden="true"]'))continue;
    const style=getComputedStyle(e),range=document.createRange();range.selectNodeContents(node);
    if(style.visibility==='hidden'||style.display==='none')continue;
    ctx.clearRect(0,0,1,1);ctx.fillStyle=style.color;ctx.fillRect(0,0,1,1);
    const rgba=[...ctx.getImageData(0,0,1,1).data];
    ctx.font=`${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const font=ctx.measureText(node.textContent);
    for(const r of range.getClientRects()){
      if(!r.width||!r.height)continue;
      const line={text,x:r.left-box.left,y:r.top-box.top,width:r.width,height:r.height,color:rgba};
      lines.push(line);
      // Range rectangles include the font's full ascender/descender space.
      // That space can overlap at tight display leading even when ink does
      // not. Use measured glyph extents for fit; retain the larger rectangles
      // for the conservative background-contrast scan.
      const ink={...line,y:line.y+font.fontBoundingBoxAscent-font.actualBoundingBoxAscent,height:font.actualBoundingBoxAscent+font.actualBoundingBoxDescent};
      inkLines.push(ink);
      if(ink.x<0||ink.y<0||ink.x+ink.width>box.width+.5||ink.y+ink.height>box.height+.5)issues.push('Outside trim: '+text);
      if(!footer.contains(e)&&box.top+ink.y+ink.height>footerBox.top-12)issues.push('Inside support clearance: '+text);
      if(root.matches('.story-card')&&(ink.y<199||ink.y+ink.height>box.height-359))issues.push('Inside story UI zone: '+text);
      const panel=e.closest('.stat-block,.breakdown,.quiz-question,.odds-row,.money-block,.stat-col');
      if(panel){const p=panel.getBoundingClientRect();if(r.left<p.left-1||r.right>p.right+1||box.top+ink.y<p.top-1||box.top+ink.y+ink.height>p.bottom+1)issues.push('Outside fact panel: '+text);}
    }
  }
  for(let i=0;i<inkLines.length;i++)for(let j=i+1;j<inkLines.length;j++){
    const a=inkLines[i],b=inkLines[j];
    const overlapX=Math.min(a.x+a.width,b.x+b.width)-Math.max(a.x,b.x);
    const overlapY=Math.min(a.y+a.height,b.y+b.height)-Math.max(a.y,b.y);
    if(overlapX>2&&overlapY>2)issues.push('Text overlap: '+a.text+' / '+b.text);
  }
  return {width:box.width,height:box.height,copy:root.innerText.replace(/\s+/g,' ').trim().toLocaleLowerCase('en'),lines,issues:[...new Set(issues)],fontsLoaded:document.fonts.size>=3&&document.fonts.check('600 48px Inter'),tokensLoaded:!!getComputedStyle(root).getPropertyValue('--pb-color-primary').trim()};
}

// Conservative: scan ALL background pixels within each text-line rectangle,
// including whitespace between glyphs. This can flag a decorative line near
// text; it cannot miss a bright gradient stop beneath an actual glyph.
export function checkRasterContrast(lines,{width,height,data}){
  const linear=Array.from({length:256},(_,v)=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;});
  const lum=(r,g,b)=>linear[Math.round(r)]*.2126+linear[Math.round(g)]*.7152+linear[Math.round(b)]*.0722;
  const issues=[],pairs=new Map();let minimum=Infinity;
  for(const line of lines){
    const [r,g,b,alpha]=line.color,opacity=alpha/255;let min=Infinity;
    for(let y=Math.max(0,Math.floor(line.y));y<Math.min(height,Math.ceil(line.y+line.height));y++){
      for(let x=Math.max(0,Math.floor(line.x));x<Math.min(width,Math.ceil(line.x+line.width));x++){
        const i=(y*width+x)*4,bg=lum(data[i],data[i+1],data[i+2]);
        const fg=lum(r*opacity+data[i]*(1-opacity),g*opacity+data[i+1]*(1-opacity),b*opacity+data[i+2]*(1-opacity));
        min=Math.min(min,(Math.max(fg,bg)+.05)/(Math.min(fg,bg)+.05));
      }
    }
    minimum=Math.min(minimum,min);
    const key=line.color.join(',');pairs.set(key,Math.min(pairs.get(key)??Infinity,min));
    if(min<4.5)issues.push({text:line.text,minimum:+min.toFixed(2)});
  }
  return {method:'Every pixel within text-line bounds on a text-free raster of the real CSS background',minimum:+minimum.toFixed(2),minimumByTextColor:Object.fromEntries([...pairs].map(([k,v])=>[k,+v.toFixed(2)])),issues};
}
