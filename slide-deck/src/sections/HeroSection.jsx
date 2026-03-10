import { useEffect, useState } from 'react';
import AccentBar from '../components/AccentBar';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <AccentBar />
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[400px] rounded-full opacity-20 blur-[120px]
          bg-gradient-to-br from-teal/30 to-teal-dark/10" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center transition-all duration-1000 ease-out
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Wordmark */}
        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl mb-4 select-none">
          <span className="font-extrabold text-white">Play</span>
          <span className="font-light text-teal">BOOK</span>
        </h1>

        {/* Subtitle */}
        <p className={`font-heading text-lg sm:text-xl text-teal/80 font-medium tracking-wide uppercase
          transition-all duration-1000 delay-300
          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Brand Guide
        </p>

        {/* Tagline */}
        <p className={`font-body text-base sm:text-lg text-n300 mt-6 max-w-md mx-auto leading-relaxed
          transition-all duration-1000 delay-500
          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          A white-label responsible gambling brand system.
          <br />
          Open source. Entertainment-grade. Ready to deploy.
        </p>

        {/* Pillar badges */}
        <div className={`flex items-center justify-center gap-3 mt-8
          transition-all duration-1000 delay-700
          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="px-4 py-1.5 rounded-full border border-teal/30 text-teal font-heading text-xs font-semibold tracking-wider uppercase">
            Open
          </span>
          <span className="text-n500 text-xs">/</span>
          <span className="px-4 py-1.5 rounded-full border border-orange/30 text-orange font-heading text-xs font-semibold tracking-wider uppercase">
            Social
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2
        transition-all duration-1000 delay-1000
        ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 text-n500">
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-n700 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
