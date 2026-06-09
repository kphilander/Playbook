/* Validate the per-jurisdiction data files.
   Run: node hub/jurisdictions-data/_check.js
   Checks: required fields; every citation src exists in the file's own sources;
   theme ids 1-10; valid verticals; no citation uses a blocked vertical;
   no duplicate reg ids. */
const fs = require('fs'), vm = require('vm'), path = require('path');
const dir = __dirname;
const win = { PB_JURISDICTIONS: [] }; const ctx = { window: win }; vm.createContext(ctx);
fs.readdirSync(dir).filter(f => f.endsWith('.js') && !f.startsWith('_'))
  .forEach(f => vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx));

const VERT = ['casino', 'online', 'sports'];
let errors = 0; const seen = {};
win.PB_JURISDICTIONS.forEach(j => {
  const id = j.reg || '?';
  const err = m => { errors++; console.log('  [' + id + '] ' + m); };
  if (!j.reg) err('missing reg');
  if (seen[j.reg]) err('duplicate reg'); seen[j.reg] = 1;
  if (!j.jurisdiction || !j.jurisdiction.name) err('missing jurisdiction.name');
  if (!j.region) err('missing region');
  if (!j.card) err('missing card');
  const srcKeys = new Set(Object.keys(j.sources || {}));
  const blocked = (j.verticalLimitation && j.verticalLimitation.blocked) || [];
  Object.entries(j.citations || {}).forEach(([tid, cit]) => {
    if (+tid < 1 || +tid > 10) err('bad theme id ' + tid);
    (Array.isArray(cit) ? cit : [cit]).forEach(c => {
      if (!c.ref) err('theme ' + tid + ' citation missing ref');
      if (!c.src) err('theme ' + tid + ' citation missing src');
      else if (!srcKeys.has(c.src)) err('theme ' + tid + ' src "' + c.src + '" not in this file\'s sources');
      (c.verticals || []).forEach(v => {
        if (VERT.indexOf(v) < 0) err('theme ' + tid + ' invalid vertical "' + v + '"');
        if (blocked.indexOf(v) >= 0) err('theme ' + tid + ' uses blocked vertical "' + v + '"');
      });
    });
  });
});
console.log(errors === 0
  ? 'OK: ' + win.PB_JURISDICTIONS.length + ' jurisdictions valid'
  : 'FAIL: ' + errors + ' problem(s)');
process.exit(errors === 0 ? 0 : 1);
