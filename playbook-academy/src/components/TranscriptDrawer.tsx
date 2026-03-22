import { useState, useEffect, useRef, useCallback, type KeyboardEvent } from 'react';

interface Track {
  slideIndex: number;
  src: string;
  transcript: string;
}

interface Props {
  tracks: Track[];
}

export default function TranscriptDrawer({ tracks }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [highlightedWordIndex, setHighlightedWordIndex] = useState(-1);
  const [userScrolling, setUserScrolling] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Focus trapping for dialog
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();

    const trap = (e: globalThis.KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const els = panel.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', trap);
    return () => {
      document.removeEventListener('keydown', trap);
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  const track = tracks[currentTrackIndex];
  const words = track?.transcript?.split(/\s+/).filter(Boolean) ?? [];

  // Listen for reveal-slide-changed to sync current track
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const slideIndex = detail?.indexh ?? 0;
      const idx = tracks.findIndex(t => t.slideIndex === slideIndex);
      if (idx >= 0) {
        setCurrentTrackIndex(idx);
        setHighlightedWordIndex(-1);
      }
    };
    window.addEventListener('reveal-slide-changed', handler);
    return () => window.removeEventListener('reveal-slide-changed', handler);
  }, [tracks]);

  // Listen for audio-progress events to highlight words
  const onAudioProgress = useCallback(
    (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail) return;
      const { currentTime, duration, trackIndex } = detail;

      if (typeof trackIndex === 'number' && trackIndex !== currentTrackIndex) {
        setCurrentTrackIndex(trackIndex);
      }

      if (duration > 0 && words.length > 0) {
        const leadTime = 0.6;
        const adjustedTime = Math.min(currentTime + leadTime, duration);
        const ratio = adjustedTime / duration;
        const wordIdx = Math.min(
          Math.floor(ratio * words.length),
          words.length - 1
        );
        setHighlightedWordIndex(wordIdx);
      }
    },
    [currentTrackIndex, words.length]
  );

  useEffect(() => {
    window.addEventListener('audio-progress', onAudioProgress);
    return () => window.removeEventListener('audio-progress', onAudioProgress);
  }, [onAudioProgress]);

  // Detect user scrolling — pause auto-scroll for 4s after manual scroll
  useEffect(() => {
    const container = bodyRef.current;
    if (!container || !isOpen) return;

    const handleScroll = () => {
      setUserScrolling(true);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => setUserScrolling(false), 4000);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, [isOpen]);

  // Auto-scroll to keep highlighted word visible (unless user is scrolling)
  useEffect(() => {
    if (!isOpen || userScrolling || !highlightRef.current || !bodyRef.current) return;

    const container = bodyRef.current;
    const el = highlightRef.current;
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    // Only scroll if highlighted word is outside the middle third of the container
    const topThird = containerRect.top + containerRect.height * 0.3;
    const bottomThird = containerRect.bottom - containerRect.height * 0.3;

    if (elRect.top < topThird || elRect.bottom > bottomThird) {
      const scrollTarget = el.offsetTop - container.offsetTop - containerRect.height / 3;
      container.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  }, [highlightedWordIndex, isOpen, userScrolling]);

  return (
    <>
      {/* FAB Button — positioned above the audio player bar */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-40 flex items-center gap-2 px-4 py-2.5 bg-navy text-white rounded-xl shadow-lg hover:bg-navy-light transition-all font-heading font-semibold text-sm"
        style={{ bottom: '72px', right: '24px' }}
        aria-label="Open Transcript"
        aria-expanded={isOpen}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Transcript
      </button>

      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Transcript panel"
        onKeyDown={(e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); }}
        {...(!isOpen ? { inert: '' as any } : {})}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white dark:bg-navy shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel header */}
        <div className="sticky top-0 bg-navy px-5 py-4 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
              Section {currentTrackIndex + 1} of {tracks.length}
            </span>
            <h3 className="text-white font-heading font-bold text-lg mt-0.5">Transcript</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-light text-white/60 hover:text-white transition-colors"
            aria-label="Close panel"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Track selector tabs */}
        <div className="flex gap-1 px-4 py-3 bg-n50 dark:bg-navy-dark border-b border-n100 dark:border-navy-light overflow-x-auto shrink-0">
          {tracks.map((t, i) => (
            <button
              key={i}
              onClick={() => { setCurrentTrackIndex(i); setHighlightedWordIndex(-1); setUserScrolling(false); }}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-colors ${
                i === currentTrackIndex
                  ? 'bg-teal text-navy'
                  : 'bg-white text-n500 hover:text-navy border border-n200'
              }`}
              aria-label={`Section ${i + 1}: ${t.transcript.substring(0, 40).split(' ').slice(0, 6).join(' ')}…`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Scroll-to-current button (shown when user scrolled away) */}
        {userScrolling && highlightedWordIndex >= 0 && (
          <button
            onClick={() => { setUserScrolling(false); }}
            className="absolute left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 bg-teal text-navy text-xs font-heading font-bold rounded-full shadow-md hover:bg-teal-light transition-all"
            style={{ bottom: '16px' }}
          >
            ↓ Follow along
          </button>
        )}

        {/* Panel body */}
        <div ref={bodyRef} className="flex-1 overflow-y-auto p-5 scroll-smooth">
          {words.length > 0 ? (
            <p className="text-base leading-[2] text-n500 dark:text-n300">
              {words.map((word, i) => {
                const dist = i - highlightedWordIndex;
                const isActive = highlightedWordIndex >= 0 && dist >= 0 && dist <= 2;
                const isSpoken = highlightedWordIndex >= 0 && i < highlightedWordIndex;
                return (
                  <span
                    key={`${currentTrackIndex}-${i}`}
                    ref={dist === 0 ? highlightRef : undefined}
                    className={
                      isActive
                        ? 'text-navy dark:text-white font-semibold bg-teal/20 rounded-sm px-0.5 transition-all duration-300'
                        : isSpoken
                          ? 'text-navy dark:text-n100 transition-colors duration-500'
                          : 'transition-colors duration-500'
                    }
                  >
                    {word}{' '}
                  </span>
                );
              })}
            </p>
          ) : (
            <div className="text-center mt-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-n100 mb-4">
                <svg className="w-8 h-8 text-n400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-navy text-lg mb-2">
                No transcript available
              </h4>
              <p className="text-n500 text-sm leading-relaxed">
                This section does not have a transcript yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
