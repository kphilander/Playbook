/* wordmark.js — The wordmark preview tile.
 *
 * The wordmark is the program name set in one weight and one color
 * (heading font, 700, -0.018em): white on dark surfaces, primary on
 * light. There is no split-weight treatment — the secondary color
 * lives in the symbol's play triangle, not in the name.
 */

export const WORDMARK_WEIGHT = '700';
export const WORDMARK_TRACKING = '-0.018em';

export function programName() {
  return document.getElementById('programName').value || 'Playbook';
}

export function updateWordmarkPreview() {
  const name = programName();
  const headingFont = document.getElementById('fontHeading').value;
  const primary = document.getElementById('colorPrimary').value;

  const tile = document.getElementById('wordmarkPreview');
  const previewEl = tile.querySelector('span');
  previewEl.style.fontFamily = `'${headingFont}', sans-serif`;
  tile.style.background = primary;

  const wmFull = document.getElementById('wmFull');
  wmFull.textContent = name;
  wmFull.style.fontWeight = WORDMARK_WEIGHT;
  wmFull.style.letterSpacing = WORDMARK_TRACKING;
  wmFull.style.textTransform = 'none';
}
