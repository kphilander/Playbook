import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const animationClassMap = {
  'fade-in': 'animate-fade-in',
  'slide-up': 'animate-slide-up',
  'slide-in-left': 'animate-slide-in-left',
  'scale-in': 'animate-scale-in',
} as const;

export default function AnimatedSection({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    if (mq.matches) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClassMap[animation] : ''} ${className}`.trim()}
      style={{
        opacity: isVisible && prefersReducedMotion ? 1 : isVisible ? undefined : 0,
        animationDelay: !prefersReducedMotion && delay ? `${delay}ms` : undefined,
        animationFillMode: !prefersReducedMotion ? 'both' : undefined,
      }}
    >
      {children}
    </div>
  );
}
