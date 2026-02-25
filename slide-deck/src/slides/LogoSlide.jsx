import AccentBar from '../components/AccentBar';
import { logoVariants } from '../data/slideContent';

function LogoDemo({ variant, dark }) {
  const bgClass = dark ? 'bg-navy' : 'bg-neutral-50';
  const playClass = dark ? 'text-white' : 'text-navy';
  const bookClass = variant === 'Reversed' || variant === 'On light'
    ? 'text-teal'
    : dark ? 'text-neutral-300' : 'text-navy';

  return (
    <div className={`flex-1 ${bgClass} rounded-lg flex items-center justify-center py-5`}>
      <span className={`font-heading text-2xl font-extrabold ${playClass}`}>
        Play
      </span>
      <span className={`font-heading text-2xl font-light tracking-[-0.03em] uppercase ${bookClass}`}>
        BOOK
      </span>
    </div>
  );
}

export default function LogoSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Logo System
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        A text-based wordmark splitting &ldquo;Playbook&rdquo; into two concepts — <strong className="text-white font-heading font-extrabold">Play</strong> (800 weight) and <span className="font-heading font-light tracking-widest">BOOK</span> (300 weight).
      </p>

      {/* Large hero logo */}
      <div className="flex justify-center mt-8">
        <div className="flex items-baseline">
          <span className="font-heading text-[80px] font-extrabold text-white leading-none">Play</span>
          <span className="font-heading text-[80px] font-light tracking-[-0.03em] text-teal leading-none">BOOK</span>
        </div>
      </div>

      {/* Variant grid */}
      <div className="mt-8">
        <span className="font-heading text-sm font-bold text-neutral-500 tracking-[0.15em] uppercase">
          Color Variants
        </span>
        <div className="grid grid-cols-5 gap-3 mt-3">
          {logoVariants.map((v) => {
            const isDark = v.bg === 'Navy' || v.bg === 'Dark';
            return (
              <div key={v.name} className="flex flex-col gap-2">
                <LogoDemo variant={v.name} dark={isDark} />
                <span className="font-body text-xs text-neutral-500 text-center">{v.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Layout variants */}
      <div className="flex gap-8 mt-6">
        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-xl bg-navy-light flex flex-col items-center justify-center">
            <span className="font-heading text-xl font-extrabold text-white leading-none">Play</span>
            <span className="font-heading text-lg font-light tracking-[-0.03em] text-teal leading-tight">BOOK</span>
          </div>
          <div>
            <p className="font-heading text-base font-bold text-white">Stacked</p>
            <p className="font-body text-sm text-neutral-400">App icons, avatars, square formats</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-40 h-16 rounded-xl bg-navy-light flex items-center justify-center">
            <span className="font-heading text-xl font-extrabold text-white leading-none">Play</span>
            <span className="font-heading text-xl font-light tracking-[-0.03em] text-teal leading-none">BOOK</span>
          </div>
          <div>
            <p className="font-heading text-base font-bold text-white">Horizontal</p>
            <p className="font-body text-sm text-neutral-400">Nav bars, headers, banners</p>
          </div>
        </div>
      </div>
    </div>
  );
}
