import assert from 'node:assert/strict';
import { readFile, realpath } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const paths = ['.agents/skills/playbook/SKILL.md', '.claude/skills/playbook/SKILL.md'];
const entries = await Promise.all(paths.map(path => readFile(new URL(path, root), 'utf8')));
assert.equal(entries[0], entries[1], 'Keep the native entry files identical; maintain workflow guidance in docs/ai-guide.md.');
assert.match(entries[0], /^---\nname: playbook\ndescription: .+\n---\n/);
for (const path of paths) {
  const file = new URL(path, root);
  const references = [...entries[0].matchAll(/\]\(([^)]+)\)/g)].map(match => match[1]);
  assert.equal(references.length, 2);
  assert.equal(await realpath(new URL(references[0], file)), await realpath(new URL('docs/ai-guide.md', root)));
  assert.equal(await realpath(new URL(references[1], file)), await realpath(new URL('ai/tasks.json', root)));
}
const tasks = JSON.parse(await readFile(new URL('ai/tasks.json', root), 'utf8'));
assert.equal(tasks.schemaVersion, 1);
assert.equal(new Set(tasks.tasks.map(task => task.id)).size, tasks.tasks.length);
console.log('Both native Playbook skills resolve to the same maintained guide and task definitions.');
