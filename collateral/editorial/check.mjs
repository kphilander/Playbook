import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const root=new URL('./',import.meta.url),read=p=>readFile(new URL(p,root));
const manifest=JSON.parse(await read('manifest.json')),copy=JSON.parse(await read('copy.en.json'));
assert.equal(manifest.edition,copy.edition);assert.equal(Object.keys(manifest.resources).length,85);
for(const [slug,r] of Object.entries(manifest.resources)){
 assert.ok(copy.resources[slug],slug+' editorial copy');assert.ok(Array.isArray(r.sources),slug+' source references');
 for(const f of Object.values(r.files)){const bytes=await read(f.path);assert.equal(bytes.length,f.bytes,f.path);assert.equal(createHash('sha256').update(bytes).digest('hex'),f.sha256,f.path);}
 const html=(await read(r.files.html.path)).toString(),svg=(await read(r.files.artwork.path)).toString(),png=await read(r.files.image.path);
 assert.match(html,/data-editorial="2026-09-12"/);assert.match(html,/SIL OPEN FONT LICENSE/);assert.doesNotMatch(html,/<script\b|<link\b|<iframe\b/);
 assert.equal(png.readUInt32BE(16),r.width,slug+' PNG width');assert.equal(png.readUInt32BE(20),r.height,slug+' PNG height');
 if(r.photo){assert.doesNotMatch(html,/photo-section/);}
}
assert.equal(manifest.resources['poster-19i-lottery-odds'].photo.region.cropX,.9);
console.log('PASS: 85 English editable masters, reference artwork, dimensions, source notes, font licensing and centered lottery crop.');
