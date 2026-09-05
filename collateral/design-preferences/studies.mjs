export const categories = [
  ['type', 'Typography'], ['color', 'Color'], ['layout', 'Composition'],
  ['photo', 'Photography'], ['data', 'Numbers'], ['shape', 'Shape & depth'],
  ['action', 'Calls to action'], ['support', 'Support']
].map(([id, name]) => ({id, name}));

// One named variable per pair; layout changes include the necessary reflow.
export const studies = [
  ['type-serif', 'type', 'lifestyle', 'A more editorial voice', 'Confident sans serif', 'Expressive serif', 'Headline family', 'Fraunces brings an editorial, hospitality feel. Inter keeps the message direct and familiar.'],
  ['type-rounded', 'type', 'odds', 'A softer kind of confidence', 'Inter headline', 'Manrope headline', 'Headline family', 'Manrope adds warmth through its rounder letterforms without turning the content casual.'],
  ['type-geometric', 'type', 'quiz', 'A little more digital', 'Inter headline', 'Space Grotesk headline', 'Headline family', 'Space Grotesk gives the question a game-interface character; body type and spacing stay fixed.'],
  ['type-heavy', 'type', 'poster', 'How loud should the headline be?', 'Bold Inter', 'Archivo Black', 'Headline family and weight', 'A denser display face adds poster energy. The words, scale, color and composition stay the same.'],
  ['color-paper', 'color', 'odds', 'Cool clarity or warm paper?', 'Navy, cool white, emerald', 'Ink, paper, brass', 'Palette', 'Warm neutrals and a sparing brass accent suggest print and hospitality. The layout stays identical.'],
  ['color-forest', 'color', 'lifestyle', 'Light canvas or deep forest?', 'Light with emerald', 'Forest with chartreuse', 'Palette', 'A deep green field gives the photograph a richer setting. The same image, type and crop remain.'],
  ['color-midnight', 'color', 'quiz', 'Daylight or after dark?', 'Light with emerald', 'Midnight with lime', 'Palette', 'A dark violet surface and lime accents create digital energy without adding extra decoration.'],
  ['color-cobalt', 'color', 'poster', 'Classic green or playful cobalt?', 'Navy and emerald', 'Cobalt and coral', 'Palette', 'Cobalt makes the poster more expressive; coral carries the supporting panel. Type and placement stay fixed.'],
  ['color-peach', 'color', 'email', 'A warmer welcome', 'Cool white and emerald', 'Cream and terracotta', 'Palette', 'A warm email treatment feels more like a hospitality note. The reading order and button remain unchanged.'],
  ['layout-photo-first', 'layout', 'lifestyle', 'What should lead: words or people?', 'Headline first', 'Photograph first', 'Reading order', 'The image moves above the headline. This tests whether the social moment or the message should get the first glance.'],
  ['layout-centered', 'layout', 'poster', 'Editorial edge or centered statement?', 'Left aligned', 'Centered', 'Alignment', 'A centered axis gives a short poster a more ceremonial feel. A left edge feels conversational and easy to scan.'],
  ['layout-open', 'layout', 'email', 'A card or an open letter?', 'Contained email card', 'Open editorial layout', 'Content container', 'Removing the outer card creates an open letter on the same canvas. The internal content and spacing stay fixed.'],
  ['layout-compact', 'layout', 'odds', 'Rows or columns?', 'Stacked total and split detail', 'Three equal columns', 'Data arrangement', 'An equal three-column layout gives all figures the same rank. The stacked version emphasizes the total.'],
  ['photo-arch', 'photo', 'lifestyle', 'Straight frame or architectural arch?', 'Rectangular frame', 'Arched frame', 'Photograph mask', 'An arch adds a hospitality cue while keeping the image, crop and placement fixed.'],
  ['photo-bleed', 'photo', 'lifestyle', 'Framed or edge to edge?', 'Inset photograph', 'Full-width photograph', 'Photograph width', 'Taking the photograph to the edge makes the scene more immersive. Text keeps its original margins.'],
  ['photo-close', 'photo', 'lifestyle', 'More place or more expression?', 'Environmental crop', 'Closer social crop', 'Photograph crop', 'A closer crop gives faces more presence. The wider view gives the casino lounge more context.'],
  ['photo-cafe', 'photo', 'lifestyle', 'In the venue or in everyday life?', 'Casino conversation', 'Café conversation', 'Photograph subject and setting', 'Two adult social scenes test the relevance of a casino setting against a more everyday moment. Frame and message stay fixed.'],
  ['data-ledger', 'data', 'odds', 'Panels or a quiet ledger?', 'Filled data panels', 'Fine rules and open space', 'Data surface treatment', 'An unboxed ledger feels more editorial. Filled panels make the groups easier to distinguish at a glance.'],
  ['data-dominant', 'data', 'odds', 'Which number gets the spotlight?', 'Balanced figures', 'Oversized total', 'Numerical hierarchy', 'A larger total makes the return the first thing you see. The stake and profit stay clearly labeled.'],
  ['data-sans', 'data', 'odds', 'Technical or conversational numbers?', 'Monospace figures', 'Sans serif figures', 'Numeral family', 'Source Code Pro feels precise; Inter brings the data closer to the rest of the voice. Values and size stay fixed.'],
  ['shape-soft', 'shape', 'quiz', 'A little softer around the edges', 'Modest corners', 'Generous corners', 'Corner radius', 'Large corners make answer cards feel more approachable. Color, spacing and labels are unchanged.'],
  ['shape-square', 'shape', 'quiz', 'A sharper edge', 'Modest corners', 'Square corners', 'Corner radius', 'Square geometry brings a more editorial discipline. The card border and content stay fixed.'],
  ['shape-shadow', 'shape', 'quiz', 'Flat or tactile?', 'Flat cards', 'Solid offset shadows', 'Card depth', 'A small hard shadow gives the cards a tactile game-piece quality without gradients or gloss.'],
  ['shape-angular', 'shape', 'quiz', 'Soft geometry or cut corners?', 'Rounded answer cards', 'Angular answer cards', 'Card silhouette', 'Cut corners introduce a digital visual cue. The content and visual hierarchy remain the same.'],
  ['cta-outline', 'action', 'email', 'How much emphasis should an action carry?', 'Filled button', 'Outlined button', 'Button fill', 'A filled action is more prominent. An outline keeps the email quieter while preserving the same target size.'],
  ['cta-pill', 'action', 'email', 'A button with a softer silhouette', 'Modest corners', 'Pill-shaped button', 'Button radius', 'A pill adds a more social, welcoming cue. Size, color and wording stay fixed.'],
  ['cta-inline', 'action', 'email', 'Product action or editorial invitation?', 'Filled button', 'Underlined text action', 'Action presentation', 'A text action makes the message read like an editorial note. The filled button gives the next step more presence.'],
  ['support-warm', 'support', 'support', 'Warmth without added noise', 'Cool neutral surface', 'Warm neutral surface', 'Support palette', 'A cream surface and forest accent add warmth. Contact order, language and contrast remain clear.'],
  ['support-open', 'support', 'support', 'Does support need a container?', 'Contact card', 'Open contact block', 'Contact container', 'Removing the filled panel makes the contact feel integrated into the page. The same button and wording remain.'],
  ['support-first', 'support', 'support', 'Reassurance first or contact first?', 'Introduction before contact', 'Contact before introduction', 'Support reading order', 'Moving the contact up makes it available earlier. Both versions keep the same warm, direct language.']
].map(([id, category, kind, title, beforeLabel, afterLabel, variable, rationale], i) => ({
  id, category, kind, number: i + 1, title, beforeLabel, afterLabel, variable, rationale
}));
