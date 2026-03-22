// ---------------------------------------------------------------------------
// Playbook Academy – Progress Tracking (module + lesson level)
// ---------------------------------------------------------------------------

export const MODULE_IDS = [
  '1-rg-foundations',
  '2-visual-identity',
  '3-voice-and-tone',
  '4-player-segmentation',
  '5-customer-journey',
  '6-measuring-success',
];

/** Ordered lesson slugs for every module. */
export const LESSON_MAP: Record<string, string[]> = {
  '1-rg-foundations': ['what-does-rg-mean', 'informed-choice-model', 'two-tier-system'],
  '2-visual-identity': ['visual-system-principles', 'tier-visual-rules', 'accessibility-requirements'],
  '3-voice-and-tone': ['playbook-voice', 'stigma-free-language', 'tone-spectrum', 'cultural-adaptation'],
  '4-player-segmentation': ['new-segmentation-model', 'product-vertical-overlay', 'identifying-segments', 'adapting-messages'],
  '5-customer-journey': ['player-journey', 'content-and-campaigns'],
  '6-measuring-success': ['content-scorecard', 'running-a-scorecard'],
};

/** Human-readable titles for dashboard / continue-point display. */
export const MODULE_TITLES: Record<string, string> = {
  '1-rg-foundations': 'RG Foundations',
  '2-visual-identity': 'Visual Identity & Design',
  '3-voice-and-tone': 'Voice & Tone',
  '4-player-segmentation': 'Player Segmentation',
  '5-customer-journey': 'Customer Journey',
  '6-measuring-success': 'Measuring Success',
};

/** Human-readable lesson titles keyed by slug for every module. */
export const LESSON_TITLES: Record<string, Record<string, string>> = {
  '1-rg-foundations': {
    'what-does-rg-mean': 'What does RG actually mean?',
    'informed-choice-model': 'The Information Gap',
    'two-tier-system': 'The Two-Tier Playbook System',
  },
  '2-visual-identity': {
    'visual-system-principles': 'Visual System Principles',
    'tier-visual-rules': 'Tier 1 vs Tier 2 Visual Rules',
    'accessibility-requirements': 'Accessibility Requirements',
  },
  '3-voice-and-tone': {
    'playbook-voice': 'The Playbook Voice',
    'stigma-free-language': 'Stigma-Free Language',
    'tone-spectrum': 'Tone Spectrum & Practice',
    'cultural-adaptation': 'Cultural Adaptation',
  },
  '4-player-segmentation': {
    'new-segmentation-model': 'A New Segmentation Model',
    'product-vertical-overlay': 'Product Vertical Overlay',
    'identifying-segments': 'Identifying Segments in Practice',
    'adapting-messages': 'Adapting Messages',
  },
  '5-customer-journey': {
    'player-journey': 'The Player Journey',
    'content-and-campaigns': 'Content & Campaigns',
  },
  '6-measuring-success': {
    'content-scorecard': 'The Content Scorecard',
    'running-a-scorecard': 'Running a Scorecard',
  },
};

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface ModuleProgress {
  completed: boolean;
  quizScore: number | null;
  lastLesson: number;
  timeSpent: number;
  completedLessons: string[]; // lesson slugs
}

export interface LearnerProfile {
  operatorType?: 'casino' | 'sportsbook' | 'lottery' | 'land-based' | 'multi-vertical';
  role?: 'copywriter' | 'designer' | 'pm' | 'cs-lead';
  name?: string;
  startedAt?: string;
}

// ---------------------------------------------------------------------------
// Storage keys
// ---------------------------------------------------------------------------

const PROGRESS_KEY = 'playbook-academy-progress';
const PROFILE_KEY = 'playbook-learner-profile';

// ---------------------------------------------------------------------------
// Core helpers (backward-compatible signatures)
// ---------------------------------------------------------------------------

export function getDefaultProgress(): ModuleProgress {
  return {
    completed: false,
    quizScore: null,
    lastLesson: 0,
    timeSpent: 0,
    completedLessons: [],
  };
}

export function getProgress(): Record<string, ModuleProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, ModuleProgress>;
    // Ensure every entry has the completedLessons array (migration from old format)
    for (const key of Object.keys(parsed)) {
      if (!Array.isArray(parsed[key].completedLessons)) {
        parsed[key].completedLessons = [];
      }
    }
    return parsed;
  } catch {
    return {};
  }
}

export function saveProgress(moduleId: string, update: Partial<ModuleProgress>): void {
  const progress = getProgress();
  progress[moduleId] = {
    ...getDefaultProgress(),
    ...progress[moduleId],
    ...update,
  };
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // localStorage may be full (e.g., iOS private browsing)
  }
  window.dispatchEvent(new Event('progress-updated'));
}

// ---------------------------------------------------------------------------
// Completion percentage – lesson-granular
// ---------------------------------------------------------------------------

/** Total number of lessons across all modules. */
function totalLessonCount(): number {
  return MODULE_IDS.reduce((sum, id) => sum + (LESSON_MAP[id]?.length ?? 0), 0);
}

/**
 * Overall completion percentage based on individual lesson completion.
 * Intro deck counts as 1 lesson-equivalent when completed.
 */
export function getCompletionPercentage(): number {
  const progress = getProgress();
  const total = totalLessonCount() + 1; // +1 for intro
  let completed = 0;

  for (const moduleId of MODULE_IDS) {
    const mp = progress[moduleId];
    if (mp) {
      completed += mp.completedLessons.length;
    }
  }

  // Intro counts as a single unit
  if (progress['intro']?.completed) {
    completed += 1;
  }

  return Math.round((completed / total) * 100);
}

// ---------------------------------------------------------------------------
// Learner profile
// ---------------------------------------------------------------------------

export function getLearnerProfile(): LearnerProfile {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveLearnerProfile(profile: Partial<LearnerProfile>): void {
  const current = getLearnerProfile();
  const merged = { ...current, ...profile };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(merged));
  window.dispatchEvent(new Event('progress-updated'));
}

// ---------------------------------------------------------------------------
// Lesson-level helpers
// ---------------------------------------------------------------------------

/**
 * Mark an individual lesson as complete and update lastLesson index.
 * Automatically sets module `completed` to true when every lesson is done
 * AND the quiz has been passed (quizScore >= 80).
 */
export function markLessonComplete(moduleId: string, lessonSlug: string): void {
  const progress = getProgress();
  const mp: ModuleProgress = {
    ...getDefaultProgress(),
    ...progress[moduleId],
  };

  if (!mp.completedLessons.includes(lessonSlug)) {
    mp.completedLessons = [...mp.completedLessons, lessonSlug];
  }

  // Update lastLesson to the index of the completed lesson (or keep higher)
  const lessons = LESSON_MAP[moduleId] ?? [];
  const idx = lessons.indexOf(lessonSlug);
  if (idx >= 0 && idx >= mp.lastLesson) {
    mp.lastLesson = idx;
  }

  // Auto-complete module when all lessons done and quiz passed
  const allLessonsDone = lessons.every((s) => mp.completedLessons.includes(s));
  const passingThreshold = 80; // All modules require 80% to pass
  if (allLessonsDone && mp.quizScore !== null && mp.quizScore >= passingThreshold) {
    mp.completed = true;
  }

  saveProgress(moduleId, mp);
}

/** Check whether a single lesson is complete. */
export function isLessonComplete(moduleId: string, lessonSlug: string): boolean {
  const progress = getProgress();
  return progress[moduleId]?.completedLessons?.includes(lessonSlug) ?? false;
}

/** Summary of lesson progress for a single module. */
export function getLessonProgress(moduleId: string): {
  total: number;
  completed: number;
  lessons: string[];
} {
  const lessons = LESSON_MAP[moduleId] ?? [];
  const progress = getProgress();
  const completedLessons = progress[moduleId]?.completedLessons ?? [];
  return {
    total: lessons.length,
    completed: completedLessons.length,
    lessons: completedLessons,
  };
}

/**
 * Returns the next uncompleted lesson across the entire curriculum,
 * walking modules in order and lessons within each module in order.
 * Returns null when everything is done.
 */
export function getNextLesson(): {
  moduleId: string;
  lessonSlug: string;
  lessonIndex: number;
} | null {
  const progress = getProgress();

  for (const moduleId of MODULE_IDS) {
    const lessons = LESSON_MAP[moduleId] ?? [];
    const completed = progress[moduleId]?.completedLessons ?? [];
    for (let i = 0; i < lessons.length; i++) {
      if (!completed.includes(lessons[i])) {
        return { moduleId, lessonSlug: lessons[i], lessonIndex: i };
      }
    }
  }

  return null;
}

/**
 * A richer version of getNextLesson that includes human-readable titles,
 * useful for "Continue where you left off" UI.
 */
export function getContinuePoint(): {
  moduleId: string;
  lessonSlug: string;
  lessonTitle: string;
  moduleTitle: string;
} | null {
  const next = getNextLesson();
  if (!next) return null;

  const moduleTitle = MODULE_TITLES[next.moduleId] ?? next.moduleId;
  const lessonTitle =
    LESSON_TITLES[next.moduleId]?.[next.lessonSlug] ?? next.lessonSlug;

  return {
    moduleId: next.moduleId,
    lessonSlug: next.lessonSlug,
    lessonTitle,
    moduleTitle,
  };
}
