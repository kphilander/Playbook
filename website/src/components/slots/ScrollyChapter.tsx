'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { colors, fonts, radius } from '@/lib/brand-tokens';
import SlotVisuals from './SlotVisuals';

export interface Slide {
  title: string;
  body: string;
  highlight?: string;
}

interface ScrollyChapterProps {
  id: string;
  label: string;
  title: string;
  slides: Slide[];
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function ScrollyChapter({ id, label, title, slides }: ScrollyChapterProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.slideIndex);
            if (!isNaN(index)) setActiveSlide(index);
          }
        }
      },
      {
        threshold: 0.4,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, [slides.length]);

  return (
    <section id={id} style={{ position: 'relative' }}>
      {/* Chapter header */}
      <div style={{ textAlign: 'center', padding: '100px 20px 40px' }}>
        <div style={{
          display: 'inline-block', padding: '4px 14px', borderRadius: 20,
          background: 'rgba(0,212,170,0.08)', border: '1px solid rgba(0,212,170,0.2)',
          fontSize: 11, fontWeight: 700, letterSpacing: 2, color: colors.secondary,
          textTransform: 'uppercase', fontFamily: fonts.heading, marginBottom: 16,
        }}>
          {label}
        </div>
        <h2 style={{
          fontSize: isMobile ? 28 : 36, fontWeight: 700, color: colors.white,
          fontFamily: fonts.heading, margin: 0, lineHeight: 1.2,
        }}>
          {title}
        </h2>
      </div>

      {/* Scrollytelling area */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        {/* Sticky device frame */}
        <div style={{
          flex: isMobile ? 'none' : '0 0 45%',
          position: 'sticky',
          top: isMobile ? 0 : 0,
          height: isMobile ? 'auto' : '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          padding: isMobile ? '24px 20px' : '40px 20px',
          ...(isMobile ? { background: `linear-gradient(180deg, ${colors.primary} 85%, transparent)` } : {}),
        }}>
          {/* Phone frame */}
          <div style={{
            width: isMobile ? 180 : 260,
            height: isMobile ? 340 : 500,
            borderRadius: isMobile ? 28 : 36,
            border: '2.5px solid rgba(255,255,255,0.08)',
            background: colors.primaryDark,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)',
            flexShrink: 0,
          }}>
            {/* Notch */}
            <div style={{
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: isMobile ? 80 : 100, height: isMobile ? 18 : 22,
              background: colors.primaryDark, borderRadius: '0 0 14px 14px', zIndex: 10,
            }} />
            {/* Content area */}
            <div style={{
              position: 'absolute',
              inset: isMobile ? 5 : 6,
              borderRadius: isMobile ? 23 : 30,
              overflow: 'hidden',
              background: '#0D1B2A',
            }}>
              <SlotVisuals chapterId={id} slideIndex={activeSlide} />
            </div>
          </div>
        </div>

        {/* Scrolling cards */}
        <div style={{
          flex: isMobile ? 'none' : '0 0 55%',
          padding: isMobile ? '0 20px' : '0 48px 0 24px',
        }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              ref={(el) => setCardRef(el, i)}
              data-slide-index={i}
              style={{
                minHeight: isMobile ? '50vh' : '75vh',
                display: 'flex',
                alignItems: 'center',
                padding: isMobile ? '24px 0' : '40px 0',
              }}
            >
              <div style={{
                padding: isMobile ? 20 : 28,
                borderRadius: radius.lg,
                background: activeSlide === i ? 'rgba(0,212,170,0.04)' : 'rgba(255,255,255,0.015)',
                border: `1px solid ${activeSlide === i ? 'rgba(0,212,170,0.15)' : 'rgba(255,255,255,0.05)'}`,
                transition: 'all 0.4s ease',
                width: '100%',
                transform: activeSlide === i ? 'scale(1)' : 'scale(0.97)',
              }}>
                {/* Step number */}
                <div style={{
                  fontSize: 11, fontWeight: 700, color: activeSlide === i ? colors.secondary : colors.neutral700,
                  fontFamily: fonts.mono, marginBottom: 8, transition: 'color 0.3s ease',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: isMobile ? 18 : 22, fontWeight: 700,
                  color: activeSlide === i ? colors.white : colors.neutral300,
                  fontFamily: fonts.heading, margin: '0 0 10px', lineHeight: 1.3,
                  transition: 'color 0.3s ease',
                }}>
                  {slide.title}
                </h3>

                {/* Body */}
                <p style={{
                  fontSize: isMobile ? 14 : 16, color: colors.neutral300,
                  fontFamily: fonts.body, margin: 0, lineHeight: 1.65,
                }}>
                  {slide.body}
                </p>

                {/* Highlight stat */}
                {slide.highlight && (
                  <div style={{
                    marginTop: 14, padding: '10px 14px', borderRadius: 8,
                    background: 'rgba(0,212,170,0.06)', borderLeft: `3px solid ${colors.secondary}`,
                    fontSize: 13, fontWeight: 600, color: colors.secondary,
                    fontFamily: fonts.mono,
                  }}>
                    {slide.highlight}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
