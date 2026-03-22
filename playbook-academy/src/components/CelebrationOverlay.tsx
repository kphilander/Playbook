import { useState, useEffect, useRef } from 'react';

interface CelebrationOverlayProps {
  show: boolean;
  onComplete?: () => void;
}

const BRAND_COLORS = ['#00D4AA', '#FF6B35', '#1B2838', '#FFFFFF'];
const CONFETTI_COUNT = 65;
const DURATION_MS = 3000;

interface ConfettiPiece {
  id: number;
  color: string;
  size: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
}

function generateConfetti(): ConfettiPiece[] {
  return Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
    id: i,
    color: BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)],
    size: Math.random() * 6 + 6, // 6–12px
    left: Math.random() * 100, // 0–100% horizontal position
    delay: Math.random() * 0.8, // 0–0.8s staggered start
    duration: Math.random() * 1.5 + 2, // 2–3.5s fall time
    rotation: Math.random() * 360,
  }));
}

export default function CelebrationOverlay({ show, onComplete }: CelebrationOverlayProps) {
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  useEffect(() => {
    if (show) {
      setConfetti(generateConfetti());
      setVisible(true);

      timerRef.current = setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, DURATION_MS);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [show, onComplete]);

  if (!visible) return null;

  // Reduced-motion fallback: a brief sparkle flash
  if (reducedMotion) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <span style={{ fontSize: '4rem' }} role="img" aria-label="Celebration">
          ✨
        </span>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {confetti.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: 'absolute',
            top: 0,
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: piece.size > 9 ? '2px' : '50%',
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti-fall ${piece.duration}s ease-in ${piece.delay}s both`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
