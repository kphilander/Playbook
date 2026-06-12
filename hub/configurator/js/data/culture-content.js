/* culture-content.js — Preview copy variants keyed by cultural-profile dimensions. */

export const CULTURE_CONTENT = {
  // Myth-buster card — varies by humor + directness
  mythLabel: {
    _default: 'Myth vs. Math',
  },
  mythStatement: {
    irreverent:  '<span class="strike">"I\'m on a hot streak"</span>',
    warm:        '<span class="strike">"I\'m due for a win"</span>',
    understated: '<span class="strike">"Patterns don\'t lie"</span>',
    minimal:     '<span class="strike">"Past results predict future outcomes"</span>',
  },
  factStatement: {
    // keyed by directness
    blunt: {
      individual: 'Every spin is independent. <strong>Your brain sees patterns. The math doesn\'t.</strong>',
      communal:   'Every spin is independent. <strong>Knowing this protects the people who count on you.</strong>',
    },
    diplomatic: {
      individual: 'Each outcome is statistically independent. <strong>What feels like a pattern is a cognitive shortcut, not a signal.</strong>',
      communal:   'Each outcome is statistically independent. <strong>Understanding this helps you make decisions your family can rely on.</strong>',
    },
    contextual: {
      individual: 'Imagine flipping a coin 10 times. Getting 7 heads doesn\'t make tails "due." <strong>Slots work the same way.</strong>',
      communal:   'Imagine flipping a coin with someone you love watching. <strong>The coin doesn\'t know you need it to land heads.</strong>',
    },
  },
  // Tier 2 card — varies by comfort + voice
  t2Headline: {
    open:     { peer: 'No question<br>is too small.', authority: 'Support is<br>always available.', elder: 'We\'re here<br>whenever you\'re ready.' },
    reserved: { peer: 'Need a<br>second opinion?', authority: 'Confidential<br>guidance available.', elder: 'There\'s no wrong time<br>to ask.' },
    private:  { peer: 'Your next step,<br>your terms.', authority: 'Private, professional<br>support.', elder: 'A conversation<br>just between us.' },
  },
  t2Subline: {
    open:     { peer: 'Free, confidential support for any question about gambling.', authority: 'Trained counselors available 24/7 for gambling-related concerns.', elder: 'A trusted place to talk about gambling, no matter the question.' },
    reserved: { peer: 'Free guidance on budgeting, limits, and financial wellness.', authority: 'Professional support for managing entertainment spending.', elder: 'A caring ear for questions about money, limits, and wellbeing.' },
    private:  { peer: 'Private, no-judgment support. Your call, your pace.', authority: 'Strictly confidential assistance from certified professionals.', elder: 'A safe conversation whenever you need it. Always private.' },
  },
};
