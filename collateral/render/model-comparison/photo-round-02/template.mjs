// Frozen common renderer input. Concept models supply text and photo prompts only.
export const categories = {sports: 'Sports betting', myth: 'Myth check', wildcard: 'Your play'};
export const limits = {title: 42, body: 190, takeaway: 76};
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function cardHTML(concept, photoPath) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(concept.title)}</title>
<link rel="stylesheet" href="../../../../brand-inject.css">
<link rel="stylesheet" href="../../../fonts.css">
<link rel="stylesheet" href="../../template.css"></head><body>
<!-- taxonomy: ${esc(JSON.stringify(concept.tags))} -->
<article class="social-card photo-concept">
<header class="card-header"><span class="card-logo">{{PROGRAM_SHORT_NAME}}</span><span class="category">${categories[concept.id] ?? 'Your play'}</span></header>
<h1>${esc(concept.title)}</h1>
<figure class="photo-frame">${photoPath ? `<img src="${esc(photoPath)}" alt="${esc(concept.photoAlt)}">` : '<div class="photo-unavailable">Photography unavailable for this attempt.</div>'}</figure>
<div class="body-copy"><p>${esc(concept.body)}</p></div>
<p class="takeaway">${esc(concept.takeaway)}</p>
<footer class="card-footer" data-protected-zone="support-and-legal"><p>Support: {{HELPLINE_NUMBER}}</p><p>{{AGE_DISCLAIMER}}</p></footer>
</article></body></html>`;
}
