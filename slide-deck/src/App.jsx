import { useState, useEffect, useCallback, useRef } from 'react';
import SlideContainer from './components/SlideContainer';
import ProgressBar from './components/ProgressBar';
import TitleSlide from './slides/TitleSlide';
import EngagementGap from './slides/EngagementGap';
import SolutionSlide from './slides/SolutionSlide';
import TwoTierSlide from './slides/TwoTierSlide';
import PillarsSlide from './slides/PillarsSlide';
import PersonalitySlide from './slides/PersonalitySlide';
import VoiceToneSlide from './slides/VoiceToneSlide';
import LogoSlide from './slides/LogoSlide';
import ColorSlide from './slides/ColorSlide';
import TypographySlide from './slides/TypographySlide';
import IconSystemSlide from './slides/IconSystemSlide';
import PhotographySlide from './slides/PhotographySlide';
import MessagingSlide from './slides/MessagingSlide';
import CTASlide from './slides/CTASlide';
import DigitalAppsSlide from './slides/DigitalAppsSlide';
import PrintSlide from './slides/PrintSlide';
import PrintSamplesSlide from './slides/PrintSamplesSlide';
import Tier2CollateralSlide from './slides/Tier2CollateralSlide';
import CampaignSlide from './slides/CampaignSlide';
import AccessibilitySlide from './slides/AccessibilitySlide';
import GovernanceSlide from './slides/GovernanceSlide';
import GetStartedSlide from './slides/GetStartedSlide';

const slides = [
  TitleSlide,          // 1  — Cover
  EngagementGap,       // 2  — The Problem
  SolutionSlide,       // 3  — The Approach
  TwoTierSlide,        // 4  — Two-Tier System
  PillarsSlide,        // 5  — Brand Pillars
  PersonalitySlide,    // 6  — Brand Personality
  VoiceToneSlide,      // 7  — Voice & Tone
  LogoSlide,           // 8  — Logo System
  ColorSlide,          // 9  — Color Palette
  TypographySlide,     // 10 — Typography
  IconSystemSlide,     // 11 — Icon System
  PhotographySlide,    // 12 — Photography & Illustration
  MessagingSlide,      // 13 — Messaging Framework
  CTASlide,            // 14 — CTA Library
  DigitalAppsSlide,    // 15 — Digital Applications
  PrintSlide,          // 16 — Print & Environmental
  PrintSamplesSlide,      // 17 — Print Samples
  Tier2CollateralSlide,   // 18 — Tier 2 Collateral
  CampaignSlide,          // 19 — Campaign Library
  AccessibilitySlide,     // 20 — Accessibility
  GovernanceSlide,        // 21 — Governance & Evolution
  GetStartedSlide,        // 22 — Get Started
];
const TOTAL = slides.length;

/* Fixed design resolution — scales to fit any viewport */
const DESIGN_W = 1280;
const DESIGN_H = 720;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('forward');
  const transitioning = useRef(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const sw = window.innerWidth / DESIGN_W;
      const sh = window.innerHeight / DESIGN_H;
      setScale(Math.min(sw, sh));
    }
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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
      {/* Scaled slide stage — fixed 1280×720 design resolution */}
      <div
        className="absolute top-1/2 left-1/2 overflow-hidden"
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        {slides.map((Slide, i) => (
          <SlideContainer key={i} isActive={i === current} direction={direction}>
            <Slide />
          </SlideContainer>
        ))}
      </div>

      <ProgressBar total={TOTAL} current={current} onNavigate={goTo} />

      {/* Slide counter */}
      <div className="absolute bottom-6 right-8 font-mono text-xs text-neutral-500 z-50">
        {current + 1} / {TOTAL}
      </div>
    </div>
  );
}
