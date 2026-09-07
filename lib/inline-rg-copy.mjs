import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const pagePath = fileURLToPath(new URL('../collateral/rg-page.html', import.meta.url));
let page = readFileSync(pagePath, 'utf8');
for (const locale of ['en', 'ja', 'zh-CN', 'ar']) {
  for (const kind of ['i18n', 'myths']) {
    const name = kind === 'i18n' ? locale : `myths-${locale}`;
    const data = JSON.parse(readFileSync(new URL(`../collateral/rg-copy/${name}.json`, import.meta.url), 'utf8'));
    const id = `pb-${kind}-${locale}`;
    const pattern = new RegExp(`(<script type="application/json" id="${id}">)[\\s\\S]*?(</script>)`, 'g');
    if ([...page.matchAll(pattern)].length !== 1) throw new Error(`Expected exactly one ${id} block`);
    // A literal closing script tag in authored copy must remain JSON data.
    const json = JSON.stringify(data, null, 2).replace(/</g, '\\u003c');
    page = page.replace(pattern, (_, open, close) => `${open}\n${json}\n${close}`);
  }
}
writeFileSync(pagePath, page);
console.log('Inlined four language bundles and four myth bundles.');
