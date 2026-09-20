import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdtempSync, mkdirSync, rmSync, statSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCatalog, serializeCatalog, checkCatalog } from './build-catalog.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readFileSync(path.join(root, file), 'utf8');
const map = JSON.parse(read('ai/collections.json'));

function fixture(t) {
  const directory = mkdtempSync(path.join(tmpdir(), 'playbook-discovery-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  function write(file, content) {
    mkdirSync(path.dirname(path.join(directory, file)), { recursive: true });
    writeFileSync(path.join(directory, file), content);
  }
  write('docs/ai-guide.md', '# Read\n');
  write('ai/README.md', '# Catalog\n');
  write('content/readme.md', '# Sample\n');
  write('content/poster.html', '<html lang="ja"><body>{{PROGRAM_NAME}}</body></html>');
  write('content/assets.json', JSON.stringify({ meta: { totalAssets: 1 }, categories: { examples: { count: 1, assets: [{ id: 'poster', sourceUrl: 'content/poster.html', format: 'html' }] } } }));
  const data = {
    schemaVersion: 1,
    collections: [{ id: 'example', title: 'Example', description: 'Fixture', path: 'content', entry: 'content/readme.md', selection: 'Test source', sourceRole: 'authored-content', readFiles: [], formatExamples: ['content/poster.html'], languageSources: ['content/poster.html'], manifests: [{ path: 'content/assets.json', kind: 'assets', pathsRelativeTo: '.' }] }],
    relatedSources: [],
  };
  const saveMap = () => write('ai/collections.json', JSON.stringify(data));
  saveMap();
  return { directory, write, data, saveMap };
}

test('catalog generation is deterministic, validates real manifests, and is fresh', () => {
  const first = serializeCatalog(buildCatalog(root));
  assert.equal(first, serializeCatalog(buildCatalog(root)));
  const reordered = structuredClone(map);
  reordered.collections.reverse();
  reordered.relatedSources.reverse();
  for (const c of reordered.collections) {
    c.readFiles.reverse(); c.formatExamples.reverse(); c.languageSources.reverse(); c.manifests.reverse();
  }
  assert.equal(first, serializeCatalog(buildCatalog(root, reordered)));
  checkCatalog(root);
  const catalog = JSON.parse(first);
  const editorial = catalog.collections.find(c => c.id === 'editorial-en');
  const source = JSON.parse(read('collateral/editorial/manifest.json'));
  assert.equal(editorial.edition.value, source.edition);
  assert.equal(editorial.manifests[0].itemCount, Object.keys(source.resources).length);
  assert.deepEqual(editorial.formats.map(f => f.format), ['html', 'png', 'svg', 'txt', 'webp']);
  assert.equal(catalog.collections.find(c => c.id === 'brand-guidance').languages, null);
});

test('freshness check is read-only and rejects stale or missing output', t => {
  const f = fixture(t);
  f.write('ai/catalog.json', serializeCatalog(buildCatalog(f.directory)));
  checkCatalog(f.directory);
  f.write('ai/catalog.json', '{"stale":true}\n');
  const file = path.join(f.directory, 'ai/catalog.json');
  const before = statSync(file).mtimeMs;
  assert.throws(() => checkCatalog(f.directory), /is stale/);
  assert.equal(readFileSync(file, 'utf8'), '{"stale":true}\n');
  assert.equal(statSync(file).mtimeMs, before);
  rmSync(file);
  assert.throws(() => checkCatalog(f.directory), /ENOENT/);
});

test('missing manifest files and mismatched formats fail', t => {
  const f = fixture(t);
  f.write('content/assets.json', JSON.stringify({ meta: { totalAssets: 1 }, categories: { examples: { count: 1, assets: [{ id: 'poster', sourceUrl: 'content/poster.html', format: 'png' }] } } }));
  assert.throws(() => buildCatalog(f.directory), /Format mismatch/);
  f.write('content/assets.json', JSON.stringify({ meta: { totalAssets: 1 }, categories: { examples: { count: 1, assets: [{ id: 'poster', sourceUrl: 'content/missing.html', format: 'html' }] } } }));
  assert.throws(() => buildCatalog(f.directory), /ENOENT/);
});

test('unsafe paths, escaped symlinks, duplicate identifiers, and invented metadata fail', t => {
  const f = fixture(t);
  const missing = structuredClone(f.data);
  missing.collections[0].entry = 'content/missing.md';
  assert.throws(() => buildCatalog(f.directory, missing), /ENOENT/);
  const unsafe = structuredClone(f.data);
  unsafe.collections[0].readFiles = ['../outside.md'];
  assert.throws(() => buildCatalog(f.directory, unsafe), /Unsafe repository path/);
  const outside = mkdtempSync(path.join(tmpdir(), 'playbook-outside-'));
  t.after(() => rmSync(outside, { recursive: true, force: true }));
  writeFileSync(path.join(outside, 'outside.md'), 'outside');
  symlinkSync(path.join(outside, 'outside.md'), path.join(f.directory, 'content/link.md'));
  const escape = structuredClone(f.data);
  escape.collections[0].readFiles = ['content/link.md'];
  assert.throws(() => buildCatalog(f.directory, escape), /escapes repository/);
  const duplicate = structuredClone(f.data);
  duplicate.collections.push(duplicate.collections[0]);
  assert.throws(() => buildCatalog(f.directory, duplicate), /Duplicate identifier/);
  const invented = structuredClone(f.data);
  invented.collections[0].languageSources = ['content/readme.md'];
  assert.throws(() => buildCatalog(f.directory, invented), /No documented language/);
  const metadata = buildCatalog(f.directory).collections[0];
  assert.equal(metadata.edition, null);
  assert.deepEqual(metadata.languages, [{ code: 'ja', sources: ['content/poster.html'] }]);
});

test('editorial file hash or byte drift fails before an index is written', () => {
  // Use the real reader, overriding only the manifest path in a small temporary copy.
  const directory = mkdtempSync(path.join(tmpdir(), 'playbook-editorial-'));
  try {
    mkdirSync(path.join(directory, 'content'));
    mkdirSync(path.join(directory, 'docs'));
    mkdirSync(path.join(directory, 'ai'));
    writeFileSync(path.join(directory, 'content/readme.md'), '# Test');
    writeFileSync(path.join(directory, 'docs/ai-guide.md'), '# Guide');
    writeFileSync(path.join(directory, 'ai/README.md'), '# Catalog');
    const files = {};
    for (const [role, extension] of Object.entries({ html: 'html', text: 'txt', artwork: 'svg', image: 'png', preview: 'webp' })) {
      writeFileSync(path.join(directory, `content/test.${extension}`), 'changed');
      files[role] = { path: `test.${extension}`, bytes: 7, sha256: '0'.repeat(64) };
    }
    writeFileSync(path.join(directory, 'content/manifest.json'), JSON.stringify({ edition: 'test', resources: { test: { files } } }));
    const data = { schemaVersion: 1, relatedSources: [], collections: [{ id: 'test', title: 'Test', description: 'Test', selection: 'Test', sourceRole: 'preferred-edition', path: 'content', entry: 'content/readme.md', readFiles: [], formatExamples: [], languageSources: [], manifests: [{ path: 'content/manifest.json', kind: 'editorial', pathsRelativeTo: 'content' }] }] };
    assert.throws(() => buildCatalog(directory, data), /Manifest hash mismatch/);
  } finally { rmSync(directory, { recursive: true, force: true }); }
});

function links(file) {
  return [...read(file).matchAll(/\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)].map(match => match[1]);
}
function localTarget(file, link) {
  return path.posix.normalize(path.posix.join(path.posix.dirname(file), decodeURIComponent(link.split('#')[0] || path.posix.basename(file))));
}
function anchors(text) {
  const seen = new Map();
  return [...text.matchAll(/^#{1,6}\s+(.+)$/gm)].map(([, title]) => {
    const slug = title.toLowerCase().replace(/[^\p{L}\p{N}_\-\s]/gu, '').replace(/\s/g, '-');
    const count = seen.get(slug) ?? 0;
    seen.set(slug, count + 1);
    return count ? `${slug}-${count}` : slug;
  });
}
const guides = ['README.md', 'llms.txt', 'docs/ai-guide.md', 'ai/README.md', 'CLAUDE.md', '.agents/skills/playbook/SKILL.md', '.claude/skills/playbook/SKILL.md', 'api/README.md', 'collateral/README.md', 'docs/README.md', 'how-to-play/README.md', 'messaging/README.md', 'visual-identity/README.md'];

test('every local discovery-guide link and Markdown anchor resolves', () => {
  for (const file of guides) for (const link of links(file)) {
    if (/^[a-z][a-z\d+.-]*:/i.test(link)) continue;
    const target = localTarget(file, link);
    assert(!target.startsWith('../'), `Link escapes repo: ${file} -> ${link}`);
    assert(statSync(path.join(root, target)), `${file} -> ${link}`);
    const fragment = link.split('#')[1];
    if (fragment && target.endsWith('.md')) assert(anchors(read(target)).includes(fragment), `Missing anchor: ${file} -> ${link}`);
  }
});

test('five discovery tasks reach relevant sources in at most three link hops', () => {
  const distance = new Map([['README.md', 0]]);
  const queue = ['README.md'];
  while (queue.length) {
    const file = queue.shift();
    const depth = distance.get(file);
    if (depth === 3 || !guides.includes(file)) continue;
    for (const link of links(file)) {
      const target = /^https?:/.test(link) ? link : localTarget(file, link);
      if (!distance.has(target)) { distance.set(target, depth + 1); queue.push(target); }
    }
  }
  const tasks = {
    'editable English poster and copy': ['collateral/editorial/artwork/poster-4a-know-your-game.html', 'collateral/editorial/artwork/poster-4a-know-your-game.txt', 'collateral/editorial/manifest.json'],
    'localized source and edition limits': ['collateral/render/poster-4a-know-your-game.ja.html', 'docs/ai-guide.md', 'collateral/render/README.md'],
    'game guide with assumptions and references': ['how-to-play/craps.md'],
    'study versus preferred resource': ['collateral/style-alternatives/README.md', 'collateral/style-alternatives/manifest.json', 'collateral/editorial/README.md'],
    'website source options': ['website/README.md', 'collateral/rg-page.html', 'https://www.playbookrg.com/ai/website-catalog.json', 'https://github.com/kphilander/PlaybookRG'],
  };
  for (const [task, targets] of Object.entries(tasks)) for (const target of targets) {
    assert(distance.has(target) && distance.get(target) <= 3, `${task}: cannot reach ${target} within three links`);
  }
  const game = read('how-to-play/craps.md');
  assert.match(game, /adaptation_notes:/);
  assert.match(game, /Operator note/);
  assert(/\*\*Source:\*\*/.test(game), 'Game guide must retain its inline source notes');
  assert.match(read('collateral/editorial/artwork/poster-4a-know-your-game.html'), /\{\{[A-Z_]+\}\}/);
  assert.match(read('collateral/render/poster-4a-know-your-game.ja.html'), /<html[^>]+lang="ja"/);
});
