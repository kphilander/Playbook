/* wordmark.js — Program-name split logic and the wordmark preview tile. */

export function autoSplit(name) {
  if (!name || name.length <= 2) return 0;
  // 1. CamelCase boundary
  for (let i = 1; i < name.length; i++) {
    if (name[i] === name[i].toUpperCase() && name[i] !== name[i].toLowerCase() && name[i-1] === name[i-1].toLowerCase()) {
      return i;
    }
  }
  // 2. Space boundary
  const spaceIdx = name.indexOf(' ');
  if (spaceIdx > 0) return spaceIdx;
  // 3. For short names, split at midpoint
  if (name.length <= 10) return Math.ceil(name.length / 2);
  // 4. Long names: no split
  return 0;
}

export function updateSplitSlider() {
  const name = document.getElementById('programName').value || 'Playbook';
  const slider = document.getElementById('splitSlider');
  const noSplit = document.getElementById('noSplitCheck').checked;

  slider.max = name.length;
  if (!noSplit) {
    slider.value = autoSplit(name);
  }
  updateWordmarkPreview();
}

/* After a snapshot/import restore: fix the slider's max without
   re-deriving its value (the saved split position wins). */
export function syncSplitSliderBounds() {
  const name = document.getElementById('programName').value || 'Playbook';
  const slider = document.getElementById('splitSlider');
  slider.max = name.length;
  if (parseInt(slider.value) > name.length) slider.value = autoSplit(name);
  updateWordmarkPreview();
}

export function updateWordmarkPreview() {
  const name = document.getElementById('programName').value || 'Playbook';
  const slider = document.getElementById('splitSlider');
  const noSplit = document.getElementById('noSplitCheck').checked;
  const headingFont = document.getElementById('fontHeading').value;
  const splitAt = noSplit ? 0 : parseInt(slider.value);

  const wmPlay = document.getElementById('wmPlay');
  const wmBook = document.getElementById('wmBook');
  const posLabel = document.getElementById('splitPos');
  const previewEl = document.getElementById('wordmarkPreview').querySelector('span');
  previewEl.style.fontFamily = `'${headingFont}', sans-serif`;

  const primary = document.getElementById('colorPrimary').value;
  const secondary = document.getElementById('colorSecondary').value;
  document.getElementById('wordmarkPreview').style.background = primary;
  wmBook.style.color = secondary;

  if (noSplit || splitAt === 0) {
    wmPlay.textContent = '';
    wmPlay.style.display = 'none';
    wmBook.textContent = name;
    wmBook.style.fontWeight = '600';
    wmBook.style.textTransform = 'none';
    wmBook.style.letterSpacing = '-0.02em';
    wmBook.className = 'wm-full';
    posLabel.textContent = 'No split';
  } else {
    wmPlay.style.display = '';
    wmPlay.textContent = name.slice(0, splitAt);
    wmPlay.className = 'wm-play';
    wmBook.textContent = name.slice(splitAt);
    wmBook.style.fontWeight = '300';
    wmBook.style.textTransform = 'uppercase';
    wmBook.style.letterSpacing = '0.08em';
    wmBook.className = 'wm-book';
    posLabel.textContent = 'Split: ' + splitAt;
  }

  slider.disabled = noSplit;
}

export function getNameParts() {
  const name = document.getElementById('programName').value || 'Playbook';
  const noSplit = document.getElementById('noSplitCheck').checked;
  const splitAt = noSplit ? 0 : parseInt(document.getElementById('splitSlider').value);

  if (noSplit || splitAt === 0) {
    return [name, ''];
  }
  return [name.slice(0, splitAt), name.slice(splitAt)];
}
