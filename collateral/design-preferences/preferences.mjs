export const STORAGE_KEY = 'playbook-design-preferences-v1';
export const choiceNames = {before:'Prefer before',after:'Prefer after',both:'Both work',neither:'Neither'};
export function cleanChoices(input, pairs) {
  const clean = {};
  if (!input || typeof input !== 'object' || Array.isArray(input)) return clean;
  for (const pair of pairs) {
    const item = Object.hasOwn(input,pair.id) ? input[pair.id] : null;
    if (!item || typeof item !== 'object') continue;
    const choice = Object.hasOwn(choiceNames,item.choice) ? item.choice : null;
    const note = typeof item.note === 'string' ? item.note.slice(0,2000) : '';
    if (choice || note) clean[pair.id] = {choice,note};
  }
  return clean;
}
export function preferredLabel(pair, choice) {
  if (choice==='before') return pair.beforeLabel;
  if (choice==='after') return pair.afterLabel;
  if (choice==='both') return `${pair.beforeLabel} + ${pair.afterLabel}`;
  if (choice==='neither') return 'Explore another treatment';
  return 'Not decided';
}
export function exportChoices(choices) {
  return {schema:'playbook-design-preferences',version:1,choices};
}
export function importChoices(input, pairs) {
  if (input?.schema!=='playbook-design-preferences' || input.version!==1 || !input.choices || typeof input.choices!=='object' || Array.isArray(input.choices)) throw new Error('Choose a saved Playbook choices file.');
  return cleanChoices(input.choices,pairs);
}
export function buildBrief(data, choices) {
  const reviewed = data.pairs.filter(p=>choices[p.id]?.choice).length;
  const lines = ['# Playbook — Design preference brief','',`${reviewed} of ${data.pairs.length} comparisons reviewed.`, '', 'These are stated visual preferences, not audience research or a combined production theme. Before is the shared reference study; after explores the named choice.',''];
  for (const category of data.categories) {
    const pairs = data.pairs.filter(p=>p.category===category.id && choices[p.id]);
    if (!pairs.length) continue;
    lines.push(`## ${category.name}`,'');
    for (const pair of pairs) {
      const item = choices[pair.id];
      lines.push(`### ${String(pair.number).padStart(2,'0')}. ${pair.title}`, '', `Choice: ${choiceNames[item.choice] || 'Not decided'} — ${preferredLabel(pair,item.choice)}`, `Design variable: ${pair.variable}`, `Application: ${pair.before.format}`,`Before: ${pair.beforeLabel}`,`After: ${pair.afterLabel}`);
      if (item.note.trim()) lines.push('', 'Notes:', ...item.note.trim().split('\n').map(line=>`> ${line}`));
      lines.push('');
    }
  }
  const pending = data.pairs.filter(p=>!choices[p.id]?.choice);
  if (pending.length) lines.push('## Still to review','',...pending.map(p=>`- ${String(p.number).padStart(2,'0')}. ${p.title}`),'');
  return lines.join('\n');
}
