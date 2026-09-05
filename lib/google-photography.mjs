import { execFileSync } from 'node:child_process';
import { userInfo } from 'node:os';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const origin = 'https://generativelanguage.googleapis.com';
const sha256 = value => createHash('sha256').update(value).digest('hex');
const json = value => `${JSON.stringify(value, null, 2)}\n`;
const safeId = value => typeof value === 'string' && /^[a-z0-9][a-z0-9-]{0,63}$/.test(value);

// The key stays in the process: never put it in a shell argument, URL, or log.
export function readKey() {
  if (process.env.GOOGLE_API_KEY?.trim()) return process.env.GOOGLE_API_KEY.trim();
  if (process.env.GEMINI_API_KEY?.trim()) return process.env.GEMINI_API_KEY.trim();
  try {
    const key = execFileSync('/usr/bin/security', [
      'find-generic-password', '-a', userInfo().username, '-s', 'playbook-gemini', '-w',
    ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 30000 }).trim();
    if (key) return key;
  } catch { /* Do not expose subprocess output in an exception. */ }
  throw new Error('No Google credential available. Configure the playbook-gemini Keychain item or a Google API environment variable.');
}

export function validateSettings(settings) {
  if (settings.provider !== 'google-gemini' || !safeId(settings.runId)) throw new Error('Invalid provider or run ID.');
  if (typeof settings.model !== 'string' || !/^gemini-[a-z0-9.-]+-image(?:-preview)?$/.test(settings.model)) throw new Error('Invalid Gemini image model ID.');
  if (!['1:1', '3:4', '4:3', '4:5', '5:4', '9:16', '16:9'].includes(settings.aspectRatio)) throw new Error('Unsupported aspect ratio.');
  if (!['1K', '2K', '4K'].includes(settings.imageSize)) throw new Error('Unsupported image size.');
  if (!Number.isInteger(settings.maxAttemptsPerConcept) || settings.maxAttemptsPerConcept < 1 || settings.maxAttemptsPerConcept > 3) throw new Error('Attempt allowance must be 1–3.');
  if (settings.referenceMode !== 'none') throw new Error('This version supports text-to-image only; references must be equally unavailable to all participants.');
}

export function buildRequest(request, settings) {
  validateSettings(settings);
  if (!safeId(request.participant) || !safeId(request.concept)) throw new Error('Invalid participant or concept ID.');
  if (!['connection-check', 'pilot', 'brief-only', 'shared-input'].includes(request.condition)) throw new Error('Invalid input condition.');
  if (typeof request.prompt !== 'string' || !request.prompt.trim() || request.prompt.length > 12000) throw new Error('Provide a nonempty image prompt of at most 12,000 characters.');
  return {
    contents: [{ role: 'user', parts: [{ text: request.prompt }] }],
    generationConfig: {
      candidateCount: 1,
      responseModalities: ['TEXT', 'IMAGE'],
      imageConfig: { aspectRatio: settings.aspectRatio, imageSize: settings.imageSize },
    },
  };
}

function errorSummary(body, status, key) {
  const code = body?.error?.status;
  return {
    httpStatus: status,
    errorStatus: typeof code === 'string' && /^[A-Z_]+$/.test(code) ? code : 'UNSPECIFIED',
    message: typeof body?.error?.message === 'string' ? body.error.message.split(key).join('[REDACTED]').slice(0, 2000) : null,
    reasons: (body?.error?.details || []).map(item => item.reason).filter(reason => typeof reason === 'string' && /^[A-Z_]+$/.test(reason)),
  };
}

export async function checkAccess({ keyReader = readKey, fetcher = fetch } = {}) {
  const key = keyReader();
  const response = await fetcher(`${origin}/v1beta/models?pageSize=1000`, {
    headers: { 'x-goog-api-key': key }, redirect: 'error', signal: AbortSignal.timeout(30000),
  });
  const body = await response.json();
  if (!response.ok) return { ok: false, ...errorSummary(body, response.status, key) };
  return {
    ok: true, httpStatus: response.status,
    imageModels: (body.models || []).filter(model => /image|imagen/i.test(model.name)).map(model => ({ name: model.name, methods: model.supportedGenerationMethods || [] })),
    morePages: Boolean(body.nextPageToken),
  };
}

function reserveAttempt(root, request, settings) {
  const run = join(resolve(root), settings.runId);
  mkdirSync(run, { recursive: true });
  const implementationSha256 = sha256(readFileSync(fileURLToPath(import.meta.url)));
  const frozen = json({ ...settings, implementationSha256 });
  try { writeFileSync(join(run, 'settings.json'), frozen, { flag: 'wx' }); }
  catch (error) { if (error.code !== 'EEXIST') throw error; }
  if (readFileSync(join(run, 'settings.json'), 'utf8') !== frozen) throw new Error('This run already has different settings. Use a new run ID.');
  const parent = join(run, request.participant, request.condition, request.concept);
  mkdirSync(parent, { recursive: true });
  for (let attempt = 1; attempt <= settings.maxAttemptsPerConcept; attempt++) {
    const directory = join(parent, `attempt-${attempt}`);
    try { mkdirSync(directory); return { directory, attempt, settingsSha256: sha256(frozen), implementationSha256 }; }
    catch (error) { if (error.code !== 'EEXIST') throw error; }
  }
  throw new Error('Attempt allowance exhausted. Prior failures count; do not overwrite or silently retry.');
}

function saveImages(body, directory) {
  const images = [];
  for (const [candidateIndex, candidate] of (body.candidates || []).entries()) {
    for (const [partIndex, part] of (candidate.content?.parts || []).entries()) {
      // Provider reasoning is not player-facing output or a candidate to select.
      if (part.thought) { candidate.content.parts[partIndex] = { thought: true, omitted: true }; continue; }
      const inline = part.inlineData || part.inline_data;
      if (!inline?.data) continue;
      const mime = inline.mimeType || inline.mime_type;
      const extension = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp' }[mime];
      if (!extension) throw new Error('Google returned an unsupported image format.');
      const bytes = Buffer.from(inline.data, 'base64');
      const valid = mime === 'image/png' ? bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))
        : mime === 'image/jpeg' ? bytes[0] === 255 && bytes[1] === 216
        : bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP';
      if (!valid) throw new Error('Google returned invalid image bytes.');
      const name = `candidate-${candidateIndex + 1}-image-${partIndex + 1}.${extension}`;
      writeFileSync(join(directory, name), bytes, { flag: 'wx' });
      const asset = { file: name, mimeType: mime, bytes: bytes.length, sha256: sha256(bytes) };
      images.push(asset);
      delete inline.data;
      Object.assign(inline, { savedAsset: asset });
    }
  }
  return images;
}

export async function generatePhoto({ request, settings, outputRoot, keyReader = readKey, fetcher = fetch }) {
  const payload = buildRequest(request, settings);
  const key = keyReader();
  if (!key) throw new Error('Empty Google credential.');
  // Reject accidental credential insertion before any prompt or request is saved.
  if (json({ request, settings }).includes(key)) throw new Error('The request contains the credential. Remove it before continuing.');
  const reserved = reserveAttempt(outputRoot, request, settings);
  const report = {
    ...reserved, provider: settings.provider, requestedModel: settings.model,
    participant: request.participant, concept: request.concept, condition: request.condition,
    startedAt: new Date().toISOString(), status: 'started',
  };
  writeFileSync(join(reserved.directory, 'request.json'), json({ ...report, request, payload }));
  writeFileSync(join(reserved.directory, 'result.json'), json(report));
  const started = Date.now();
  try {
    const response = await fetcher(`${origin}/v1beta/models/${settings.model}:generateContent`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify(payload), redirect: 'error', signal: AbortSignal.timeout(180000),
    });
    const body = await response.json();
    report.httpStatus = response.status;
    if (!response.ok) {
      Object.assign(report, errorSummary(body, response.status, key), { status: 'provider-error' });
    } else {
      // Redact any accidental credential echo before saving provider metadata.
      const safeBody = JSON.parse(JSON.stringify(body).split(key).join('[REDACTED]'));
      report.images = saveImages(safeBody, reserved.directory);
      report.actualModelVersion = safeBody.modelVersion || null;
      report.usage = safeBody.usageMetadata || null;
      report.finishReasons = (safeBody.candidates || []).map(candidate => candidate.finishReason || null);
      report.status = report.images.length ? 'generated' : 'no-image';
      writeFileSync(join(reserved.directory, 'response.json'), json(safeBody));
    }
  } catch {
    report.status = 'request-or-response-failed';
    report.message = 'Request or response processing did not complete. The attempt remains consumed; do not automatically retry.';
  }
  report.elapsedMs = Date.now() - started;
  report.completedAt = new Date().toISOString();
  writeFileSync(join(reserved.directory, 'result.json'), json(report));
  return report;
}

async function main(args) {
  const [command, ...rest] = args;
  if (command === 'check' && !rest.length) {
    const report = await checkAccess(); console.log(json(report)); if (!report.ok) process.exitCode = 1; return;
  }
  if (!['generate', 'dry-run'].includes(command) || rest.length !== 3) {
    console.log('Usage: node lib/google-photography.mjs check\n       node lib/google-photography.mjs <dry-run|generate> REQUEST.json SETTINGS.json OUTPUT_ROOT');
    process.exitCode = 2; return;
  }
  const [requestFile, settingsFile, outputRoot] = rest;
  const request = JSON.parse(readFileSync(requestFile, 'utf8'));
  const settings = JSON.parse(readFileSync(settingsFile, 'utf8'));
  buildRequest(request, settings);
  if (command === 'dry-run') {
    console.log(json({ valid: true, model: settings.model, aspectRatio: settings.aspectRatio, imageSize: settings.imageSize, maxAttemptsPerConcept: settings.maxAttemptsPerConcept, networkCalls: 0 })); return;
  }
  const report = await generatePhoto({ request, settings, outputRoot });
  console.log(json(report)); if (report.status !== 'generated') process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main(process.argv.slice(2)).catch(() => {
    // Errors can contain subprocess/network details. Keep terminal output generic.
    console.error('Google photography command failed. Check the request, frozen settings, attempt allowance, and credential availability.');
    process.exitCode = 1;
  });
}
