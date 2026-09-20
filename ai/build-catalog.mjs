import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, statSync, realpathSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const defaultRoot = fileURLToPath(new URL('../', import.meta.url));
const order = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const formats = new Set(['md', 'txt', 'html', 'json', 'yml', 'yaml', 'css', 'svg', 'png', 'webp', 'jpg', 'jpeg', 'ico', 'js', 'mjs', 'tsx']);
const sourceRoles = new Set(['configuration', 'guidance', 'authored-content', 'preferred-edition', 'earlier-and-alternate', 'experimental', 'generated-snapshot', 'implementation', 'demonstration']);
const editorialFormats = { html: 'html', text: 'txt', artwork: 'svg', image: 'png', preview: 'webp' };

export function buildCatalog(root = defaultRoot, collectionMap) {
  const rootPath = realpathSync(root);
  function local(relative, directory = false) {
    assert.equal(typeof relative, 'string', 'Repository paths must be strings');
    assert(relative === '.' || (!relative.startsWith('/') && !relative.includes('\\') && !relative.includes(':') && relative.split('/').every(part => part && part !== '..' && part !== '.')), `Unsafe repository path: ${relative}`);
    const absolute = path.resolve(rootPath, relative);
    const resolved = realpathSync(absolute); // Also fails on missing paths.
    assert(resolved === rootPath || resolved.startsWith(rootPath + path.sep), `Path escapes repository: ${relative}`);
    assert(directory ? statSync(absolute).isDirectory() : statSync(absolute).isFile(), `Wrong path type: ${relative}`);
    return absolute;
  }
  const read = relative => readFileSync(local(relative), 'utf8');
  const json = relative => JSON.parse(read(relative));
  const map = collectionMap ?? json('ai/collections.json');
  assert.equal(map.schemaVersion, 1, 'Unsupported collection map version');
  const identifiers = new Set();
  function identifier(id) {
    assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `Invalid identifier: ${id}`);
    assert(!identifiers.has(id), `Duplicate identifier: ${id}`);
    identifiers.add(id);
  }
  function formatOf(relative) {
    local(relative);
    const format = path.posix.extname(relative).slice(1);
    assert(formats.has(format), `Undocumented format: ${relative}`);
    return format;
  }
  function declaredFormat(relative, expected) {
    assert.equal(formatOf(relative), expected, `Format mismatch: ${relative}`);
  }
  function manifestPath(base, child) {
    // Validate before joining so '..' cannot be normalized away.
    assert(typeof child === 'string' && !child.startsWith('/') && child.split('/').every(part => part && part !== '..' && part !== '.'), `Unsafe manifest path: ${child}`);
    const relative = base === '.' ? child : `${base}/${child}`;
    local(relative);
    return relative;
  }
  const collections = [...map.collections].sort((a, b) => order(a.id, b.id)).map(collection => {
    identifier(collection.id);
    assert(sourceRoles.has(collection.sourceRole), `Unknown source role: ${collection.sourceRole}`);
    for (const key of ['title', 'description', 'selection']) assert(collection[key]?.trim(), `Missing ${key}: ${collection.id}`);
    local(collection.path, true);
    local(collection.entry);
    assert(collection.path === '.' || collection.entry.startsWith(collection.path + '/'), `Entry outside collection: ${collection.entry}`);
    const readFiles = [...new Set(collection.readFiles)].sort(order);
    for (const file of readFiles) local(file);
    const examples = new Map();
    function example(file) {
      const format = formatOf(file);
      if (!examples.has(format) || order(file, examples.get(format)) < 0) examples.set(format, file);
    }
    for (const file of collection.formatExamples) example(file);
    let edition = null;
    const manifests = [...collection.manifests].sort((a, b) => order(a.path, b.path)).map(reference => {
      declaredFormat(reference.path, 'json');
      local(reference.pathsRelativeTo, true);
      const data = json(reference.path);
      const files = new Set();
      let itemCount;
      let itemIdentifier;
      function add(child, format, info) {
        const file = manifestPath(reference.pathsRelativeTo, child);
        assert(!files.has(file), `Duplicate manifest file: ${file}`);
        files.add(file);
        declaredFormat(file, format);
        if (info) {
          const bytes = readFileSync(local(file));
          assert.equal(bytes.length, info.bytes, `Manifest byte count mismatch: ${file}`);
          assert.equal(createHash('sha256').update(bytes).digest('hex'), info.sha256, `Manifest hash mismatch: ${file}`);
        }
        example(file);
      }
      if (reference.kind === 'editorial') {
        assert(typeof data.edition === 'string' && data.edition, 'Missing editorial edition');
        assert.equal(edition, null, 'Multiple edition authorities');
        edition = { value: data.edition, source: reference.path };
        itemCount = Object.keys(data.resources).length;
        itemIdentifier = 'resources object key';
        for (const [id, resource] of Object.entries(data.resources)) {
          assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
          assert.deepEqual(Object.keys(resource.files).sort(), Object.keys(editorialFormats).sort(), `Unexpected editorial file roles: ${id}`);
          for (const [role, file] of Object.entries(resource.files)) add(file.path, editorialFormats[role], file);
        }
      } else if (reference.kind === 'assets') {
        const assets = Object.values(data.categories).flatMap(category => {
          assert.equal(category.count, category.assets.length, `Stale asset category count: ${reference.path}`);
          return category.assets;
        });
        itemCount = assets.length;
        assert.equal(data.meta.totalAssets, itemCount, 'Stale asset count');
        itemIdentifier = 'sourceUrl (id alone may repeat across formats)';
        for (const asset of assets) {
          assert(typeof asset.id === 'string' && asset.id, 'Missing asset ID');
          add(asset.sourceUrl, asset.format);
        }
      } else if (reference.kind === 'style-studies') {
        itemCount = data.entries.length;
        itemIdentifier = 'entries[].id';
        const ids = new Set();
        for (const item of data.entries) {
          assert.match(item.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
          assert(!ids.has(item.id), `Duplicate study ID: ${item.id}`);
          ids.add(item.id);
          add(item.html, 'html');
          add(item.png, 'png');
        }
      } else throw new Error(`Unknown manifest kind: ${reference.kind}`);
      assert(itemCount > 0, `Empty manifest: ${reference.path}`);
      return { ...reference, itemCount, itemIdentifier };
    });
    const languages = new Map();
    for (const file of [...collection.languageSources].sort(order)) {
      const source = read(file);
      let language;
      if (file.endsWith('.json')) {
        const metadata = JSON.parse(source);
        language = metadata.language ?? metadata._meta?.language;
      } else if (file.endsWith('.md')) {
        const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
        language = frontmatter ? yaml.load(frontmatter[1])?.presentation?.language : undefined;
      } else if (file.endsWith('.html')) {
        language = source.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)?.[1];
      }
      assert(typeof language === 'string' && language, `No documented language in ${file}`);
      if (!languages.has(language)) languages.set(language, []);
      languages.get(language).push(file);
    }
    return {
      id: collection.id, title: collection.title, description: collection.description,
      sourceRole: collection.sourceRole, path: collection.path, entry: collection.entry, selection: collection.selection,
      readFiles, manifests,
      formats: [...examples].sort(([a], [b]) => order(a, b)).map(([format, example]) => ({ format, example })),
      languages: languages.size ? [...languages].sort(([a], [b]) => order(a, b)).map(([code, sources]) => ({ code, sources })) : null,
      edition,
    };
  });
  const relatedSources = [...map.relatedSources].sort((a, b) => order(a.id, b.id));
  for (const source of relatedSources) {
    identifier(source.id);
    assert.equal(new URL(source.url).protocol, 'https:', `Invalid external URL: ${source.url}`);
    assert(source.description?.trim(), `Missing external source description: ${source.id}`);
  }
  local('docs/ai-guide.md');
  local('ai/README.md');
  return {
    schemaVersion: 1,
    repository: 'https://github.com/kphilander/Playbook',
    pathBase: 'repository root; paths inside linked manifests use their recorded pathsRelativeTo',
    guide: 'docs/ai-guide.md',
    fieldGuide: 'ai/README.md',
    metadataPolicy: 'Null means unspecified. Languages have file-level evidence, not complete translation coverage. Formats have existing examples. Counts describe manifest entries, not approved or unique content pieces. No generated timestamp or moving-branch revision is asserted; pin the commit actually read.',
    collections, relatedSources,
  };
}

export const serializeCatalog = catalog => JSON.stringify(catalog, null, 2) + '\n';
export function checkCatalog(root = defaultRoot) {
  const expected = serializeCatalog(buildCatalog(root));
  assert.equal(readFileSync(path.join(root, 'ai/catalog.json'), 'utf8'), expected, 'ai/catalog.json is stale; run npm run generate:catalog');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    assert(process.argv.slice(2).every(arg => arg === '--check'), 'Usage: node ai/build-catalog.mjs [--check]');
    if (process.argv.includes('--check')) {
      checkCatalog();
      console.log('Catalog paths, manifests, formats, metadata, and freshness checked (read-only).');
    } else {
      writeFileSync(path.join(defaultRoot, 'ai/catalog.json'), serializeCatalog(buildCatalog()));
      console.log('Generated ai/catalog.json.');
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
