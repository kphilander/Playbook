import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {loadBrand} from '../../lib/brand-config.mjs';
import {loadBrandPackage,mergeBrand} from './brand-package.mjs';
const trial=new URL('../brand-trials/gamesense/input/',import.meta.url);
const options={configPath:new URL('brand-canada.yml',trial),cssPath:new URL('brand-inject.css',trial),name:'GameSense',country:'canada',region:'british-columbia'};

test('supplied provinces resolve separately without changing the default brand cache',()=>{
  const original=loadBrand(),before=original.brandTokens();
  const bc=loadBrandPackage(options);
  assert.equal(bc.tokens['{{HELPLINE_NUMBER}}'],'1-888-795-6111');
  assert.equal(bc.tokens['{{MIN_AGE}}'],'19');
  assert.equal(bc.mandatory,'Know your limit, play within it.');
  assert.equal(bc.contact.chat_url,undefined);
  assert.equal(bc.contact.text_number,undefined);
  const alberta=loadBrandPackage({...options,region:'alberta'});
  assert.equal(alberta.tokens['{{MIN_AGE}}'],'18');
  assert.equal(alberta.tokens['{{HELPLINE_NUMBER}}'],'1-866-332-2322');
  assert.equal(alberta.mandatory,'');
  const ontario=loadBrandPackage({...options,region:'ontario'});
  assert.equal(ontario.tokens['{{HELPLINE_NUMBER}}'],'1-866-531-2600');
  assert.deepEqual(loadBrand().brandTokens(),before);
  assert.equal(loadBrand(),original);
  assert.throws(()=>loadBrandPackage({...options,region:'unknown-province'}),/fallback is disabled/);
});

test('a new contact record drops stale optional channels and placeholder values remain text',()=>{
  const dir=mkdtempSync(join(tmpdir(),'playbook-brand-package-'));
  try{
    const configPath=join(dir,'brand.yml');
    writeFileSync(configPath,'helplines:\n  united-states:\n    national:\n      number: "555-123-4567"\n');
    const pkg=loadBrandPackage({...options,configPath,country:'united-states',region:'national',name:'Example <brand> & co.'});
    assert.equal(pkg.contact.chat_url,undefined);
    assert.equal(pkg.contact.text_number,undefined);
    assert.equal(pkg.resolve('<b>{{PROGRAM_NAME}}</b>'),'<b>Example &lt;brand&gt; &amp; co.</b>');
    assert.throws(()=>mergeBrand({},JSON.parse('{"__proto__":{"polluted":true}}')),/Unsupported/);
    assert.equal({}.polluted,undefined);
  }finally{rmSync(dir,{recursive:true,force:true});}
});
