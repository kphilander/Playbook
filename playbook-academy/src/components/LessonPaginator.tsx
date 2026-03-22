import { useState, useEffect, useCallback, useRef } from 'react';
import { markLessonComplete, isLessonComplete } from '../lib/progress';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Lesson {
  title: string;
  slug: string;
}

interface Props {
  moduleId: string;
  lessons: Lesson[];
  children?: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Checkmark icon (inline SVG to avoid external deps)
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-teal inline-block ml-1 -mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface SectionHeading {
  id: string;
  text: string;
}

export default function LessonPaginator({ moduleId, lessons }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(new Set());
  const [sectionHeadings, setSectionHeadings] = useState<SectionHeading[]>([]);
  const [showJumpTo, setShowJumpTo] = useState(false);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const navigateToRef = useRef<(idx: number) => void>(() => {});

  // -----------------------------------------------------------------------
  // Hydrate completed-lesson state from localStorage
  // -----------------------------------------------------------------------
  const refreshCompleted = useCallback(() => {
    const next = new Set<string>();
    for (const lesson of lessons) {
      if (isLessonComplete(moduleId, lesson.slug)) {
        next.add(lesson.slug);
      }
    }
    setCompletedSlugs(next);
  }, [moduleId, lessons]);

  useEffect(() => {
    refreshCompleted();
    window.addEventListener('progress-updated', refreshCompleted);
    return () => window.removeEventListener('progress-updated', refreshCompleted);
  }, [refreshCompleted]);

  // -----------------------------------------------------------------------
  // Show / hide DOM sections to match the active tab
  // -----------------------------------------------------------------------
  const syncSections = useCallback(
    (index: number) => {
      // Find all lesson sections and the knowledge-check section
      const allSections = document.querySelectorAll<HTMLElement>(
        '.prose > section'
      );

      const lessonSlugs = new Set(lessons.map((l) => l.slug));

      allSections.forEach((section) => {
        const id = section.getAttribute('id') ?? '';
        // Knowledge-check section is never hidden
        if (id === 'knowledge-check') {
          section.style.display = '';
          return;
        }
        // If the section ID matches a lesson slug, toggle visibility
        if (lessonSlugs.has(id)) {
          section.style.display = id === lessons[index]?.slug ? '' : 'none';
        }
      });
    },
    [lessons],
  );

  // Run on mount and whenever activeIndex changes
  useEffect(() => {
    syncSections(activeIndex);
  }, [activeIndex, syncSections]);

  // -----------------------------------------------------------------------
  // Dispatch lesson-changed event so sidebar can sync
  // -----------------------------------------------------------------------
  useEffect(() => {
    const slug = lessons[activeIndex]?.slug;
    if (slug) {
      window.dispatchEvent(
        new CustomEvent('lesson-changed', { detail: { slug, index: activeIndex } }),
      );
    }
  }, [activeIndex, lessons]);

  // -----------------------------------------------------------------------
  // Build mini-ToC from h3 headings in the active lesson section
  // -----------------------------------------------------------------------
  useEffect(() => {
    const slug = lessons[activeIndex]?.slug;
    if (!slug) return;

    // Small delay to ensure section is visible
    const timer = setTimeout(() => {
      const section = document.getElementById(slug);
      if (!section) { setSectionHeadings([]); return; }

      const h3s = section.querySelectorAll<HTMLHeadingElement>('h3[id]');
      const headings: SectionHeading[] = [];
      h3s.forEach((h3) => {
        if (h3.id && h3.textContent) {
          headings.push({ id: h3.id, text: h3.textContent.trim() });
        }
      });
      setSectionHeadings(headings);
    }, 50);

    return () => clearTimeout(timer);
  }, [activeIndex, lessons]);

  // -----------------------------------------------------------------------
  // Scroll the active tab into view within the horizontal strip
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (activeTabRef.current && tabBarRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeIndex]);

  // -----------------------------------------------------------------------
  // Listen for sidebar navigation (hashchange + custom event)
  // -----------------------------------------------------------------------
  useEffect(() => {
    const findIndexBySlug = (slug: string) =>
      lessons.findIndex((l) => l.slug === slug);

    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      const idx = findIndexBySlug(hash);
      if (idx !== -1 && idx !== activeIndex) {
        navigateToRef.current(idx);
      }
    };

    const handleCustomNav = (e: Event) => {
      const slug = (e as CustomEvent).detail?.slug;
      if (!slug) return;
      const idx = findIndexBySlug(slug);
      if (idx !== -1 && idx !== activeIndex) {
        navigateToRef.current(idx);
      }
    };

    window.addEventListener('hashchange', handleHash);
    window.addEventListener('lesson-navigate', handleCustomNav);

    // Check initial hash on mount
    handleHash();

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('lesson-navigate', handleCustomNav);
    };
  }, [lessons, activeIndex]);

  // -----------------------------------------------------------------------
  // Navigation handlers
  // -----------------------------------------------------------------------

  /** Mark the lesson the user is leaving as complete, then switch. */
  const navigateTo = useCallback(
    (nextIndex: number) => {
      // Mark the current (departing) lesson as read
      const departingSlug = lessons[activeIndex]?.slug;
      if (departingSlug) {
        markLessonComplete(moduleId, departingSlug);
      }

      setActiveIndex(nextIndex);

      // Update URL hash without triggering hashchange loop
      const nextSlug = lessons[nextIndex]?.slug;
      if (nextSlug) {
        history.replaceState(null, '', `#${nextSlug}`);
      }

      // Smooth-scroll to top of content area
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [activeIndex, lessons, moduleId],
  );

  // Keep ref synced to avoid stale closure in event listeners
  navigateToRef.current = navigateTo;

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    navigateTo(index);
  };

  const handlePrev = () => {
    if (activeIndex > 0) navigateTo(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < lessons.length - 1) {
      navigateTo(activeIndex + 1);
    } else {
      // On the last lesson, mark it complete too
      const slug = lessons[activeIndex]?.slug;
      if (slug) markLessonComplete(moduleId, slug);
    }
  };

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  return (
    <>
      {/* ── Tab bar ───────────────────────────────────────────────── */}
      <div
        ref={tabBarRef}
        className="sticky z-30 bg-white border-b border-n100 flex overflow-x-auto scrollbar-hide"
        style={{ top: '4rem' }} /* sits below the main nav */
        role="tablist"
        aria-label="Lesson navigation"
      >
        {lessons.map((lesson, i) => {
          const isActive = i === activeIndex;
          const isDone = completedSlugs.has(lesson.slug);

          return (
            <button
              key={lesson.slug}
              ref={isActive ? activeTabRef : undefined}
              role="tab"
              aria-selected={isActive}
              aria-controls={lesson.slug}
              onClick={() => handleTabClick(i)}
              className={`
                flex-shrink-0 px-4 py-3 text-sm font-heading whitespace-nowrap
                border-b-2 transition-colors focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2
                ${
                  isActive
                    ? 'text-navy dark:text-white border-teal font-semibold'
                    : 'text-n500 dark:text-n300 border-transparent hover:text-navy-light dark:hover:text-white'
                }
              `}
            >
              <span className="mr-1.5 font-bold">{i + 1}.</span>
              {lesson.title}
              {isDone && <CheckIcon />}
            </button>
          );
        })}
      </div>

      {/* ── Mini-ToC (h3 jump links for current lesson) ─────────── */}
      {sectionHeadings.length > 1 && (
        <>
          {/* Desktop: horizontal strip */}
          <nav
            className="hidden sm:flex items-center gap-1 py-2 px-1 text-xs text-n500 dark:text-n300 overflow-x-auto"
            aria-label="Section navigation"
          >
            <span className="text-n300 font-heading font-semibold mr-1 flex-shrink-0">Jump to:</span>
            {sectionHeadings.map((h, i) => (
              <button
                key={h.id}
                onClick={() => document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="flex-shrink-0 px-2 py-1 rounded hover:bg-n100 dark:hover:bg-navy-light hover:text-navy dark:hover:text-white transition-colors font-heading"
              >
                {h.text}
                {i < sectionHeadings.length - 1 && <span className="ml-1 text-n300">·</span>}
              </button>
            ))}
          </nav>

          {/* Mobile: dropdown */}
          <div className="sm:hidden relative py-2 px-1">
            <button
              onClick={() => setShowJumpTo(!showJumpTo)}
              className="flex items-center gap-1.5 text-xs font-heading text-n500 dark:text-n300 hover:text-navy dark:hover:text-white px-2 py-1.5 rounded border border-n100 dark:border-navy-light"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Jump to section
              <svg className={`w-3 h-3 transition-transform ${showJumpTo ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showJumpTo && (
              <div className="absolute left-1 top-full z-20 mt-1 bg-white dark:bg-navy rounded-lg shadow-lg border border-n100 dark:border-navy-light py-1 min-w-48">
                {sectionHeadings.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => {
                      document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setShowJumpTo(false);
                    }}
                    className="block w-full text-left px-3 py-1.5 text-sm text-n500 dark:text-n300 hover:bg-n50 dark:hover:bg-navy-light hover:text-navy dark:hover:text-white transition-colors"
                  >
                    {h.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {/* ── Prev / Next navigation (rendered AFTER the prose slot) ─ */}
      <div className="flex justify-between items-center mt-10 pt-6 border-t border-n100 dark:border-navy-light">
        {activeIndex > 0 ? (
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 text-sm font-heading text-n500 dark:text-n300 hover:text-navy dark:hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous Lesson
          </button>
        ) : (
          <div />
        )}

        {activeIndex < lessons.length - 1 ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 text-sm font-heading text-n500 dark:text-n300 hover:text-navy dark:hover:text-white transition-colors"
          >
            Next Lesson
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}
