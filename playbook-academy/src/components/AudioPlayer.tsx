import { useState, useRef, useEffect, useCallback } from 'react';

interface AudioTrack {
  slideIndex: number;
  src: string;
  transcript: string;
  duration?: number; // seconds
}

interface Props {
  tracks: AudioTrack[];
  onSlideChange?: (index: number) => void;
}

/** Wait for audio to be ready, then play. Falls back after 3s. */
function playWhenReady(audio: HTMLAudioElement) {
  if (audio.readyState >= 4) {
    audio.play().catch(() => {});
    return;
  }
  const handler = () => {
    audio.removeEventListener('canplaythrough', handler);
    audio.play().catch(() => {});
  };
  audio.addEventListener('canplaythrough', handler);
  // Fallback: play after 3s regardless (e.g. slow network)
  setTimeout(() => {
    audio.removeEventListener('canplaythrough', handler);
    audio.play().catch(() => {});
  }, 3000);
}

export default function AudioPlayer({ tracks, onSlideChange }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const [playbackRate, setPlaybackRate] = useState(1);
  const [isNarrated, setIsNarrated] = useState(true);

  // Exercise-pause and continue states
  const [exercisePaused, setExercisePaused] = useState(false);
  const [trackEnded, setTrackEnded] = useState(false);

  // Time display
  const [displayTime, setDisplayTime] = useState({ current: 0, total: 0 });

  const track = tracks[currentTrack];

  const play = useCallback(() => {
    if (audioRef.current && track?.src) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
      setTrackEnded(false);
      window.dispatchEvent(new CustomEvent('audio-playing'));
    }
  }, [track]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
    window.dispatchEvent(new CustomEvent('audio-paused'));
  }, []);

  const skip = useCallback((seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, Math.min(audioRef.current.duration || 0, audioRef.current.currentTime + seconds));
    }
  }, []);

  const goToTrack = useCallback((index: number) => {
    if (index >= 0 && index < tracks.length) {
      setCurrentTrack(index);
      setProgress(0);
      setTrackEnded(false);
      onSlideChange?.(tracks[index].slideIndex);
      window.dispatchEvent(new CustomEvent('audio-slide-change', {
        detail: { slideIndex: tracks[index].slideIndex }
      }));
      if (isPlaying) {
        setTimeout(() => {
          if (audioRef.current) playWhenReady(audioRef.current);
        }, 50);
      }
    }
  }, [tracks, onSlideChange, isPlaying]);

  // Advance to next track and play — used by Continue Lesson button
  const continueLesson = useCallback(() => {
    setTrackEnded(false);
    setExercisePaused(false);
    if (currentTrack < tracks.length - 1) {
      const nextIdx = currentTrack + 1;
      setCurrentTrack(nextIdx);
      setProgress(0);
      onSlideChange?.(tracks[nextIdx].slideIndex);
      window.dispatchEvent(new CustomEvent('audio-slide-change', {
        detail: { slideIndex: tracks[nextIdx].slideIndex }
      }));
      setTimeout(() => {
        if (audioRef.current) {
          setIsPlaying(true);
          window.dispatchEvent(new CustomEvent('audio-playing'));
          playWhenReady(audioRef.current);
        }
      }, 50);
    }
  }, [currentTrack, tracks, onSlideChange]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setDisplayTime({ current: audio.currentTime, total: audio.duration });
        window.dispatchEvent(new CustomEvent('audio-progress', {
          detail: { currentTime: audio.currentTime, duration: audio.duration, trackIndex: currentTrack }
        }));
      }
    };

    const handleEnded = () => {
      const currentSlideIndex = tracks[currentTrack]?.slideIndex;
      const section = document.querySelector<HTMLElement>(
        `.module-section[data-slide-index="${currentSlideIndex}"][data-has-exercise]`
      );

      setIsPlaying(false);
      window.dispatchEvent(new CustomEvent('audio-paused'));

      if (section) {
        // Pause at exercise — dispatch event to highlight the exercise
        window.dispatchEvent(new CustomEvent('exercise-pause', {
          detail: { slideIndex: currentSlideIndex, trackIndex: currentTrack }
        }));
      } else if (currentTrack < tracks.length - 1) {
        // Track ended, no exercise — show continue button
        setTrackEnded(true);
        window.dispatchEvent(new CustomEvent('track-ended'));
      } else {
        // Last track — module complete
        setTrackEnded(false);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, tracks.length, goToTrack]);

  // Listen for external slide changes (from scroll observer)
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const slideIndex = e.detail?.indexh ?? 0;
      const trackIndex = tracks.findIndex(t => t.slideIndex === slideIndex);
      if (trackIndex >= 0 && trackIndex !== currentTrack) {
        setCurrentTrack(trackIndex);
        setProgress(0);
        if (isPlaying) {
          setTimeout(() => {
            if (audioRef.current) playWhenReady(audioRef.current);
          }, 50);
        }
      }
    };
    window.addEventListener('reveal-slide-changed' as any, handler);
    return () => window.removeEventListener('reveal-slide-changed' as any, handler);
  }, [tracks, currentTrack, isPlaying]);

  // Listen for exercise-pause-ui (from ModuleLayout highlight)
  useEffect(() => {
    const handler = () => setExercisePaused(true);
    window.addEventListener('exercise-pause-ui', handler);
    return () => window.removeEventListener('exercise-pause-ui', handler);
  }, []);

  // Listen for exercise-complete — show continue button
  useEffect(() => {
    const handler = () => {
      setExercisePaused(false);
      if (currentTrack < tracks.length - 1) {
        setTrackEnded(true);
        window.dispatchEvent(new CustomEvent('track-ended'));
      }
    };
    window.addEventListener('exercise-complete', handler);
    return () => window.removeEventListener('exercise-complete', handler);
  }, [currentTrack, tracks.length]);

  // Listen for continue-lesson (from scroll gate or external)
  useEffect(() => {
    const handler = () => continueLesson();
    window.addEventListener('continue-lesson', handler);
    return () => window.removeEventListener('continue-lesson', handler);
  }, [continueLesson]);

  // Listen for external start-playback events
  useEffect(() => {
    const handler = () => play();
    window.addEventListener('start-playback', handler);
    return () => window.removeEventListener('start-playback', handler);
  }, [play]);

  if (!isNarrated) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-navy/95 backdrop-blur text-white px-4 py-2 flex items-center justify-center gap-4 z-50">
        <button
          onClick={() => setIsNarrated(true)}
          className="text-xs text-n300 hover:text-white transition-colors underline"
        >
          Enable narration
        </button>
      </div>
    );
  }

  // --- Render helpers for special states ---

  const renderTrackInfo = () => {
    // Track ended — show continue prompt in bar
    if (trackEnded && currentTrack < tracks.length - 1) {
      return (
        <div className="flex-1 min-w-0 hidden sm:flex items-center gap-3">
          <svg className="w-5 h-5 text-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div className="min-w-0">
            <div className="text-sm font-heading text-teal truncate">
              {exercisePaused ? 'Complete the exercise, then continue' : 'Ready for the next lesson'}
            </div>
          </div>
        </div>
      );
    }

    // Exercise-paused state
    if (exercisePaused) {
      return (
        <div className="flex-1 min-w-0 hidden sm:flex items-center gap-3">
          <div className="min-w-0">
            <div className="text-sm font-heading text-teal truncate">Complete the exercise to continue</div>
            <div className="text-xs text-n400 truncate">Or skip to keep listening</div>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('exercise-complete'))}
            className="shrink-0 text-xs font-heading font-bold px-3 py-1 rounded-lg bg-navy-light hover:bg-n700 transition-colors"
          >
            Skip &rarr;
          </button>
        </div>
      );
    }

    // Default state
    const fmtTime = (s: number) => {
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60);
      return `${m}:${sec.toString().padStart(2, '0')}`;
    };
    return (
      <div className="flex-1 min-w-0 hidden sm:flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="text-sm font-heading truncate">
            Lesson {currentTrack + 1} of {tracks.length}
          </div>
          {displayTime.total > 0 && (
            <div className="text-xs text-n300 truncate">
              {fmtTime(displayTime.current)} / {fmtTime(displayTime.total)}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPlayButton = () => {
    // Exercise-paused: show pointer icon
    if (exercisePaused) {
      return (
        <span className="shrink-0 text-teal" aria-label="Exercise in progress" role="img">
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
          </svg>
        </span>
      );
    }

    // Default play/pause
    return (
      <button onClick={isPlaying ? pause : play} className="shrink-0 hover:text-teal transition-colors" aria-label={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
        ) : (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        )}
      </button>
    );
  };

  return (
    <>
      {/* ── Floating "Continue Lesson" button ── */}
      {trackEnded && currentTrack < tracks.length - 1 && (
        <button
          onClick={continueLesson}
          className="continue-lesson-btn fixed z-50 left-1/2 -translate-x-1/2 px-6 py-3 bg-teal text-navy font-heading font-bold text-sm rounded-full shadow-lg hover:bg-teal-light hover:shadow-xl active:scale-95 transition-all flex items-center gap-2"
          style={{ bottom: '68px' }}
        >
          Continue Lesson
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      )}

      {/* ── Bottom audio bar ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-navy/95 backdrop-blur text-white z-50">
        {/* Progress bar (keyboard-accessible seek slider) */}
        <div className="relative h-1.5 bg-navy-dark group hover:h-2 transition-all">
          <div className="h-full bg-teal transition-all duration-200 pointer-events-none" style={{ width: `${progress}%` }} />
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setProgress(val);
              if (audioRef.current && audioRef.current.duration) {
                audioRef.current.currentTime = (val / 100) * audioRef.current.duration;
              }
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer focus-visible:opacity-100"
            aria-label="Seek audio position"
            aria-valuetext={`${Math.round(progress)}% through track`}
          />
        </div>

        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Play/Pause (or exercise icon) */}
            {renderPlayButton()}

            {/* Rewind 10s */}
            <button
              onClick={() => skip(-10)}
              className="p-1 hover:text-teal transition-colors shrink-0"
              aria-label="Rewind 10 seconds"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.5 3C7.81 3 4 6.81 4 11.5h-3l4 4 4-4H6c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5c-1.47 0-2.82-.49-3.91-1.32l-1.41 1.41C8.77 19.22 10.55 20 12.5 20c4.69 0 8.5-3.81 8.5-8.5S17.19 3 12.5 3z"/>
                <text x="9.5" y="14.5" fontSize="7" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">10</text>
              </svg>
            </button>

            {/* Skip 10s */}
            <button
              onClick={() => skip(10)}
              className="p-1 hover:text-teal transition-colors shrink-0"
              aria-label="Skip forward 10 seconds"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.5 3c4.69 0 8.5 3.81 8.5 8.5h3l-4 4-4-4h3c0-3.59-2.91-6.5-6.5-6.5S5 7.91 5 11.5s2.91 6.5 6.5 6.5c1.47 0 2.82-.49 3.91-1.32l1.41 1.41C15.23 19.22 13.45 20 11.5 20 6.81 20 3 16.19 3 11.5S6.81 3 11.5 3z"/>
                <text x="8.5" y="14.5" fontSize="7" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">10</text>
              </svg>
            </button>

            {/* Track controls */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => goToTrack(currentTrack - 1)}
                disabled={currentTrack === 0}
                className="p-1 hover:text-teal transition-colors disabled:opacity-30"
                aria-label="Previous section"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <span className="text-xs font-heading w-8 text-center">{currentTrack + 1}/{tracks.length}</span>
              <button
                onClick={() => goToTrack(currentTrack + 1)}
                disabled={currentTrack === tracks.length - 1}
                className="p-1 hover:text-teal transition-colors disabled:opacity-30"
                aria-label="Next section"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            {/* Track info / exercise state (hidden on mobile) */}
            {renderTrackInfo()}

            {/* Spacer on mobile */}
            <div className="flex-1 sm:hidden" />

            {/* Speed control */}
            <button
              onClick={() => setPlaybackRate(r => r >= 2 ? 1 : r + 0.25)}
              className="text-xs font-heading font-bold px-2 py-1 rounded bg-navy-light hover:bg-n700 transition-colors shrink-0"
            >
              {playbackRate}x
            </button>

            {/* Disable narration */}
            <button
              onClick={() => {
                pause();
                setIsNarrated(false);
                window.dispatchEvent(new CustomEvent('audio-paused'));
              }}
              className="text-xs text-n500 hover:text-n300 transition-colors shrink-0 w-6 h-6 flex items-center justify-center"
              aria-label="Dismiss audio narration"
            >
              &times;
            </button>
          </div>

        </div>

        {/* Hidden audio element */}
        <audio ref={audioRef} src={track?.src} preload="auto" />
      </div>
    </>
  );
}
