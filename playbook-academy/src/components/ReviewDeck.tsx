import { useState, useEffect } from 'react';
import { getProgress } from '../lib/progress';

/**
 * Cross-module spaced retrieval deck.
 * Surfaces questions from completed modules for review practice.
 * Uses a simple Leitner-box system stored in localStorage.
 */

interface ReviewCard {
  moduleId: string;
  moduleTitle: string;
  question: string;
  answer: string;
  box: number; // 1-3, higher = longer interval
  nextReview: number; // timestamp
}

const STORAGE_KEY = 'playbook-review-deck';
const BOX_INTERVALS = [0, 1, 3, 7]; // days until next review per box level

function getReviewDeck(): ReviewCard[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveDeck(deck: ReviewCard[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deck));
  } catch {}
}

// Seed questions from completed modules
const REVIEW_QUESTIONS: Record<string, { title: string; cards: { q: string; a: string }[] }> = {
  '1-rg-foundations': {
    title: 'RG Foundations',
    cards: [
      { q: 'What are the three layers of the RG framework?', a: 'Compliance (the floor), Public Health (population-level), and Informed Choice (individual empowerment).' },
      { q: 'What is the 95/5 split in the two-tier system?', a: '95% of content is Tier 1 (education, literacy, tools for all players). 5% is Tier 2 (support for players experiencing difficulty).' },
      { q: 'Name the four premises of the Informed Choice model.', a: '1) Most people who gamble do so recreationally, without problems. 2) Gambling is entertainment with a cost — the house edge. 3) Difficulties arise from lack of information and lack of control. 4) Responsibility is shared across players, operators, regulators, and support services.' },
    ],
  },
  '3-voice-and-tone': {
    title: 'Voice & Tone',
    cards: [
      { q: 'What are the four Playbook tone registers?', a: 'Playful/Witty, Confident/Informative, Warm/Direct, and Celebratory.' },
      { q: 'What\'s the stigma-free alternative to "problem gambler"?', a: '"Player" — inclusive, non-diagnostic, emphasizes agency.' },
      { q: 'When does humor turn OFF in Playbook content?', a: 'In Tier 2 (support/crisis) content. Humor is for Tier 1 only.' },
    ],
  },
  '2-visual-identity': {
    title: 'Visual Identity',
    cards: [
      { q: 'What is the "adaptive identity model"?', a: 'Operators keep Playbook\'s structural identity (layout, hierarchy, icons) but apply their own colors and fonts. Structure stays consistent across platforms.' },
      { q: 'How does Tier 2 visual design differ from Tier 1?', a: 'Same brand quality but maximum restraint: clean layout, generous white space, high contrast, zero decoration. And Tier 2 always renders in light mode.' },
    ],
  },
  '4-player-segmentation': {
    title: 'Player Segmentation',
    cards: [
      { q: 'Why is segmentation product-contextual, not person-level?', a: 'A player can be Recreational for casino and New/Novice for sports betting simultaneously. Segments describe the relationship with a product, not a fixed identity.' },
      { q: 'Name the six Playbook segments.', a: 'New/Novice, Recreational, Enthusiast, At-Risk, In-Crisis, and Friends & Family.' },
    ],
  },
  '5-customer-journey': {
    title: 'Customer Journey',
    cards: [
      { q: 'What are the five stages of the player content journey?', a: 'Awareness, New Player, Active Player, Regular, and Support Seeking.' },
      { q: 'What is the "not a funnel" principle?', a: 'The player journey is not linear — players can move between stages in any direction. A player who is an Active Player can jump to Support Seeking and return. Support Seeking can happen at any stage.' },
    ],
  },
  '6-measuring-success': {
    title: 'Measuring Success',
    cards: [
      { q: 'What two metrics make up the Content Scorecard?', a: 'NPS (Net Promoter Score) and five semantic differential pairs measuring message quality.' },
      { q: 'What score on the Preachy-Respectful scale triggers the Brand DNA alarm?', a: 'Below 4.0 — this is the Brand DNA alarm. Below 4.0 means your material is lecturing players. Below 3.0 triggers an automatic revise. Both are non-negotiable overrides.' },
    ],
  },
};

export default function ReviewDeck() {
  const [deck, setDeck] = useState<ReviewCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Initialize deck from completed modules
  useEffect(() => {
    const progress = getProgress();
    let existing = getReviewDeck();
    const existingKeys = new Set(existing.map((c) => `${c.moduleId}:${c.question}`));

    // Add cards from newly completed modules
    for (const [moduleId, data] of Object.entries(REVIEW_QUESTIONS)) {
      if (progress[moduleId]?.completed) {
        for (const card of data.cards) {
          const key = `${moduleId}:${card.q}`;
          if (!existingKeys.has(key)) {
            existing.push({
              moduleId,
              moduleTitle: data.title,
              question: card.q,
              answer: card.a,
              box: 1,
              nextReview: Date.now(),
            });
          }
        }
      }
    }

    // Filter to cards due for review
    const now = Date.now();
    const due = existing.filter((c) => c.nextReview <= now);

    saveDeck(existing);
    setDeck(due);
    setInitialized(true);
  }, []);

  if (!initialized || deck.length === 0) {
    return (
      <div className="rounded-xl border border-n100 dark:border-navy-light bg-white dark:bg-navy shadow-sm p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal/10 mb-3">
          <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="font-heading font-semibold text-navy text-sm">No reviews due</p>
        <p className="text-xs text-n500 mt-1">Complete modules to build your review deck. Cards appear here when they're due for retrieval practice.</p>
      </div>
    );
  }

  const card = deck[currentIndex];

  const handleResult = (correct: boolean) => {
    const allCards = getReviewDeck();
    const idx = allCards.findIndex((c) => c.moduleId === card.moduleId && c.question === card.question);
    if (idx >= 0) {
      if (correct) {
        allCards[idx].box = Math.min(allCards[idx].box + 1, 3);
      } else {
        allCards[idx].box = 1;
      }
      const days = BOX_INTERVALS[allCards[idx].box] ?? 7;
      allCards[idx].nextReview = Date.now() + days * 86400000;
      saveDeck(allCards);
    }

    setShowAnswer(false);
    if (currentIndex < deck.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setDeck([]);
    }
  };

  return (
    <div className="rounded-xl border border-n100 dark:border-navy-light bg-white dark:bg-navy shadow-sm overflow-hidden">
      <div className="bg-navy px-5 py-3 flex items-center justify-between">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">Spaced Review</span>
          <h3 className="text-white font-heading font-bold text-sm mt-0.5">Retrieval Practice</h3>
        </div>
        <span className="text-xs text-n300 font-heading">{currentIndex + 1} of {deck.length}</span>
      </div>

      <div className="p-5">
        <span className="inline-block px-2 py-0.5 rounded text-xs font-heading font-semibold bg-navy/5 text-navy mb-3">
          {card.moduleTitle}
        </span>

        <p className="font-heading font-semibold text-navy mb-4">{card.question}</p>

        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="w-full py-3 bg-n50 border border-n100 rounded-lg text-sm font-heading font-semibold text-navy hover:bg-n100 transition-colors"
          >
            Reveal answer
          </button>
        ) : (
          <div aria-live="polite">
            <div className="rounded-lg bg-teal/5 border border-teal/20 p-4 mb-4 animate-fade-in">
              <p className="text-sm text-n700 leading-relaxed">{card.answer}</p>
            </div>
            <p className="text-xs font-heading text-n500 mb-3">Did you get it right?</p>
            <div className="flex gap-3">
              <button
                onClick={() => handleResult(false)}
                className="flex-1 py-2.5 rounded-lg border-2 border-warning/30 text-sm font-heading font-semibold text-navy hover:bg-warning/5 transition-colors"
              >
                Not yet
              </button>
              <button
                onClick={() => handleResult(true)}
                className="flex-1 py-2.5 rounded-lg border-2 border-success/30 bg-success/5 text-sm font-heading font-semibold text-navy hover:bg-success/10 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
