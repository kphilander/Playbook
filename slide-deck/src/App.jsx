import { useState, useEffect, useCallback, useRef } from 'react';
import SlideContainer from './components/SlideContainer';
import ProgressBar from './components/ProgressBar';
import TitleSlide from './slides/TitleSlide';
import EngagementGap from './slides/EngagementGap';
import SolutionSlide from './slides/SolutionSlide';
import PillarsSlide from './slides/PillarsSlide';
import GetStartedSlide from './slides/GetStartedSlide';

const slides = [TitleSlide, EngagementGap, SolutionSlide, PillarsSlide, GetStartedSlide];
const TOTAL = slides.length;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('forward');
  const transitioning = useRef(false);

  const goTo = useCallback((index) => {
    if (transitioning.current) return;
    if (index < 0 || index >= TOTAL || index === current) return;
    transitioning.current = true;
    setDirection(index > current ? 'forward' : 'backward');
    setCurrent(index);
    setTimeout(() => { transitioning.current = false; }, 500);
  }, [current]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    function handleKey(e) {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(TOTAL - 1);
          break;
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, goTo]);

  function handleClick(e) {
    const x = e.clientX / window.innerWidth;
    if (x < 0.2) prev();
    else if (x > 0.8) next();
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-navy cursor-default"
      onClick={handleClick}
    >
      {slides.map((Slide, i) => (
        <SlideContainer key={i} isActive={i === current} direction={direction}>
          <Slide />
        </SlideContainer>
      ))}

      <ProgressBar total={TOTAL} current={current} onNavigate={goTo} />

      {/* Slide counter */}
      <div className="absolute bottom-6 right-8 font-mono text-xs text-neutral-500 z-50">
        {current + 1} / {TOTAL}
      </div>
    </div>
  );
}
