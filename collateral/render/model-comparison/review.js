const data = window.PLAYBOOK_COMPARISON;
const modelHeadings = document.querySelector('#model-headings');
const output = document.querySelector('#concepts');
const blind = document.querySelector('#blind');
const dialog = document.querySelector('#detail');
let category = 'all';
const selected = new Set(data.defaultSelection);
const modelOptions = document.querySelector('#model-options');

function node(tag, text, className) {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  if (className) element.className = className;
  return element;
}
function link(text, href) {
  const element = node('a', text);
  element.href = href;
  return element;
}
const label = participant => blind.checked ? participant.blindLabel : participant.label;

function detail(participant, concept) {
  document.querySelector('#detail-byline').textContent = `${label(participant)} / ${data.categories.find(c => c.id === concept.category).label}`;
  const image = document.querySelector('#detail-image');
  image.src = `${participant.folder}/${concept.id}.png`;
  image.alt = concept.alt;
  const copy = document.querySelector('#detail-copy');
  copy.replaceChildren(node('h2', concept.title), node('p', concept.rationale));
  copy.append(node('h3', 'Social caption'), node('p', concept.caption));
  copy.append(node('h3', 'Alt text'), node('p', concept.alt));
  copy.append(node('h3', 'Source notes'));
  const sources = node('ul');
  for (const source of concept.sources) {
    const item = node('li');
    const anchor = source.section.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    item.append(link(source.section, `../../../${source.path}#${anchor}`), node('p', source.note));
    sources.append(item);
  }
  copy.append(sources);
  const links = node('div', undefined, 'detail-links');
  links.append(link('Open full PNG ↗', image.getAttribute('src')), link('HTML master ↗', `${participant.folder}/${concept.id}.html`));
  copy.append(links);
  if (!dialog.open) dialog.showModal();
}

function render() {
  const participants = data.participants.filter(p => selected.has(p.folder));
  document.documentElement.style.setProperty('--model-columns', participants.length);
  modelOptions.replaceChildren();
  for (const participant of data.participants) {
    const option = node('label', undefined, 'model-option');
    const input = node('input');
    input.type = 'checkbox'; input.value = participant.folder;
    input.checked = selected.has(participant.folder);
    input.disabled = input.checked ? selected.size === 1 : selected.size === 3;
    input.addEventListener('change', () => {
      if (input.checked) selected.add(participant.folder);
      else selected.delete(participant.folder);
      render();
      modelOptions.querySelector(`input[value="${participant.folder}"]`).focus();
    });
    option.append(input, node('span', label(participant)));
    modelOptions.append(option);
  }
  modelHeadings.replaceChildren();
  for (const participant of participants) {
    const heading = node('div', undefined, 'model-heading');
    heading.append(node('strong', label(participant)), node('span', '3 concepts · high'));
    modelHeadings.append(heading);
  }
  output.replaceChildren();
  for (const item of data.categories.filter(c => category === 'all' || c.id === category)) {
    const section = node('section', undefined, 'category');
    section.dataset.category = item.id;
    const heading = node('div', undefined, 'category-label');
    heading.append(node('h2', item.label), node('p', item.description));
    section.append(heading);
    const cards = node('div', undefined, 'cards');
    for (const participant of participants) {
      const concept = participant.concepts.find(c => c.id === item.id);
      const card = node('article', undefined, 'concept');
      const artwork = node('button', undefined, 'artwork-button');
      artwork.type = 'button';
      artwork.setAttribute('aria-label', `Inspect ${concept.title} by ${label(participant)}`);
      const image = node('img');
      image.src = `${participant.folder}/${concept.id}.png`;
      image.alt = concept.alt;
      image.width = 1080; image.height = 1350;
      artwork.append(image);
      artwork.addEventListener('click', () => detail(participant, concept));
      card.append(artwork, node('p', label(participant), 'concept-byline'), node('h3', concept.title), node('p', concept.rationale));
      const links = node('div', undefined, 'concept-links');
      const info = node('button', 'Copy & source notes');
      info.type = 'button'; info.addEventListener('click', () => detail(participant, concept));
      links.append(info, link('PNG ↗', image.getAttribute('src')));
      card.append(links); cards.append(card);
    }
    section.append(cards); output.append(section);
  }
}

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  category = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(other => {
    other.classList.toggle('active', other === button);
    other.setAttribute('aria-pressed', String(other === button));
  });
  render();
}));
blind.addEventListener('change', render);
document.querySelector('#close-detail').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
if (data) {
  document.querySelector('#availability-note').textContent = 'GPT-5.4 was unavailable in this environment. Excluded for availability, with no performance score. GPT-5.3 here is Codex Spark.';
  render();
}
else output.append(node('p', 'Run build-gallery.mjs after all model renders are complete.'));
