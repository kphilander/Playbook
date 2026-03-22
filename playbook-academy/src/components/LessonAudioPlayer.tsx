import { useState, useRef, useEffect, useCallback } from 'react';

const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '');

interface Props {
  src: string;
  title: string;
}

export default function LessonAudioPlayer({ src, title }: Props) {
  // Auto-prefix src with base path if it starts with "/" and isn't already prefixed
  const resolvedSrc = src.startsWith('/') && base && !src.startsWith(base)
    ? `${base}${src}`
    : src;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [error, setError] = useState(false);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => setError(true));
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  };

  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const next = speeds[(speeds.indexOf(playbackRate) + 1) % speeds.length];
    setPlaybackRate(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', () => setError(true));
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', () => setError(true));
    };
  }, []);

  if (error) return null; // Silently hide if audio file doesn't exist

  return (
    <div className="mb-6 rounded-lg border border-n100 bg-white shadow-sm overflow-hidden">
      <audio ref={audioRef} src={resolvedSrc} preload="metadata" />

      <div className="flex items-center gap-3 px-4 py-3">
        {/* Play/Pause */}
        <button
          onClick={toggle}
          className="flex-shrink-0 w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Info + Progress */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-heading font-semibold text-n600 truncate">
              {title}
            </span>
            <span className="text-xs text-n400 ml-2 flex-shrink-0">
              {duration > 0 ? `${formatTime(currentTime)} / ${formatTime(duration)}` : '—'}
            </span>
          </div>

          {/* Progress bar */}
          <div
            onClick={handleSeek}
            className="w-full h-1.5 bg-n100 rounded-full cursor-pointer group"
            role="slider"
            aria-label="Audio progress"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-teal rounded-full transition-all duration-150 group-hover:bg-teal-light"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Speed */}
        <button
          onClick={cycleSpeed}
          className="flex-shrink-0 text-xs font-heading font-bold text-n500 hover:text-navy bg-n50 px-1.5 py-0.5 rounded transition-colors"
          aria-label={`Playback speed: ${playbackRate}x`}
        >
          {playbackRate}x
        </button>
      </div>
    </div>
  );
}
