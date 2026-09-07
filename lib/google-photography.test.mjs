import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { buildRequest, generatePhoto } from './google-photography.mjs';

const settings = { provider: 'google-gemini', runId: 'test-run', model: 'gemini-3-pro-image', aspectRatio: '3:4', imageSize: '2K', referenceMode: 'none', maxAttemptsPerConcept: 1 };
const request = { participant: 'studio-a', concept: 'sports', condition: 'pilot', prompt: 'A quiet, warmly lit sports lounge.' };
const key = 'fake-test-credential-do-not-persist';
const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aS6cAAAAASUVORK5CYII=';
const success = () => new Response(JSON.stringify({
  modelVersion: 'gemini-3-pro-image', usageMetadata: { totalTokenCount: 12 },
  candidates: [{ finishReason: 'STOP', content: { parts: [{ inlineData: { mimeType: 'image/png', data: png } }] } }],
}), { status: 200 });

function root(t) {
  const directory = mkdtempSync(join(tmpdir(), 'playbook-google-photo-test-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  return directory;
}
function assertNoCredential(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) assertNoCredential(file);
    else assert.ok(!readFileSync(file).includes(Buffer.from(key)), `Credential leaked in ${entry.name}`);
  }
}

test('rejects path escapes, empty prompts, and unequal reference modes', () => {
  assert.throws(() => buildRequest({ ...request, participant: '../other' }, settings));
  assert.throws(() => buildRequest({ ...request, prompt: '' }, settings));
  assert.throws(() => buildRequest(request, { ...settings, referenceMode: 'agent-choice' }));
  assert.throws(() => buildRequest(request, { ...settings, model: '../key-exfiltration' }));
});

test('uses the fixed Google origin, preserves image/usage, and keeps the key private', async t => {
  const outputRoot = root(t);
  const report = await generatePhoto({ request, settings, outputRoot, keyReader: () => key, fetcher: async (url, options) => {
    assert.equal(url, 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image:generateContent');
    assert.equal(options.headers['x-goog-api-key'], key);
    assert.equal(options.redirect, 'error');
    assert.ok(!options.body.includes(key));
    const payload = JSON.parse(options.body);
    assert.equal(payload.generationConfig.candidateCount, 1);
    assert.equal(payload.generationConfig.imageConfig.imageSize, '2K');
    return success();
  } });
  assert.equal(report.status, 'generated');
  assert.equal(report.images.length, 1);
  assert.equal(report.usage.totalTokenCount, 12);
  assert.equal(readFileSync(join(report.directory, report.images[0].file)).toString('base64'), png);
  const saved = JSON.parse(readFileSync(join(report.directory, 'response.json')));
  assert.equal(saved.candidates[0].content.parts[0].inlineData.data, undefined);
  assert.equal(saved.candidates[0].content.parts[0].inlineData.savedAsset.sha256, report.images[0].sha256);
  assertNoCredential(outputRoot);
});

test('concurrent attempts cannot exceed the allowance', async t => {
  let calls = 0;
  const options = { request, settings, outputRoot: root(t), keyReader: () => key, fetcher: async () => { calls++; return success(); } };
  const outcomes = await Promise.allSettled([generatePhoto(options), generatePhoto(options)]);
  assert.equal(calls, 1);
  assert.equal(outcomes.filter(result => result.status === 'fulfilled').length, 1);
  assert.match(outcomes.find(result => result.status === 'rejected').reason.message, /allowance exhausted/);
});

test('provider errors are preserved, consume an attempt, and do not expose credential echoes', async t => {
  const outputRoot = root(t);
  const options = { request, settings, outputRoot, keyReader: () => key, fetcher: async () => new Response(JSON.stringify({ error: { status: 'RESOURCE_EXHAUSTED', message: key } }), { status: 429 }) };
  const report = await generatePhoto(options);
  assert.equal(report.status, 'provider-error');
  assert.equal(report.errorStatus, 'RESOURCE_EXHAUSTED');
  await assert.rejects(() => generatePhoto(options), /allowance exhausted/);
  assertNoCredential(outputRoot);
});

test('a refusal without an image remains a recorded failure', async t => {
  const report = await generatePhoto({ request, settings, outputRoot: root(t), keyReader: () => key, fetcher: async () => new Response(JSON.stringify({ candidates: [{ finishReason: 'SAFETY', content: { parts: [{ text: 'No image returned.' }] } }] })) });
  assert.equal(report.status, 'no-image');
  assert.deepEqual(report.finishReasons, ['SAFETY']);
  assert.ok(readFileSync(join(report.directory, 'response.json')).includes('No image returned.'));
});

test('transport failures do not retry or publish exception contents', async t => {
  const outputRoot = root(t);
  let calls = 0;
  const report = await generatePhoto({ request, settings, outputRoot, keyReader: () => key, fetcher: async () => { calls++; throw new Error(key); } });
  assert.equal(report.status, 'request-or-response-failed');
  assert.equal(calls, 1);
  assertNoCredential(outputRoot);
});

test('changing settings within a run is rejected before another network call', async t => {
  const outputRoot = root(t);
  let calls = 0;
  const options = { request, settings, outputRoot, keyReader: () => key, fetcher: async () => { calls++; return success(); } };
  await generatePhoto(options);
  await assert.rejects(() => generatePhoto({ ...options, request: { ...request, concept: 'myth' }, settings: { ...settings, imageSize: '1K' } }), /different settings/);
  assert.equal(calls, 1);
});

test('accidentally pasting the key into a prompt fails before any files are saved', async t => {
  const outputRoot = root(t);
  await assert.rejects(() => generatePhoto({ request: { ...request, prompt: `Make a photo. ${key}` }, settings, outputRoot, keyReader: () => key }), /contains the credential/);
  assert.deepEqual(readdirSync(outputRoot), []);
});
