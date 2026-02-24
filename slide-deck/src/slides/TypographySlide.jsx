import AccentBar from '../components/AccentBar';
import { typeFamilies, typeScale } from '../data/slideContent';

export default function TypographySlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Typography
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Open-source variable fonts. Broad weight support. Zero licensing cost.
      </p>

      <div className="flex-1 flex gap-6 mt-8">
        {/* Font families */}
        <div className="flex-1 flex flex-col gap-5">
          <span className="font-heading text-sm font-bold text-neutral-500 tracking-[0.15em] uppercase">
            Font Families
          </span>
          {typeFamilies.map((f) => {
            const fontClass = f.family === 'Inter' ? 'font-heading' : f.family === 'Source Sans 3' ? 'font-body' : 'font-mono';
            return (
              <div key={f.family} className="bg-navy-light rounded-xl p-6 flex items-center gap-6">
                <span className={`${fontClass} text-4xl font-bold text-white w-24`}>{f.sample}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-lg font-bold text-white">{f.family}</h3>
                  <p className="font-body text-sm text-neutral-300">{f.role}</p>
                  <p className="font-mono text-xs text-neutral-500">Weights: {f.weights}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Type scale */}
        <div className="w-96 flex flex-col gap-4">
          <span className="font-heading text-sm font-bold text-neutral-500 tracking-[0.15em] uppercase">
            Type Scale
          </span>
          <div className="bg-navy-light rounded-xl p-6 flex flex-col gap-4">
            {typeScale.map((t) => (
              <div key={t.level} className="flex items-baseline gap-3">
                <span
                  className="font-heading text-white leading-none"
                  style={{ fontSize: t.size, fontWeight: t.weight }}
                >
                  {t.level}
                </span>
                <span className="font-mono text-xs text-neutral-500 whitespace-nowrap">{t.size}</span>
              </div>
            ))}
          </div>

          {/* Rules */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="font-heading text-sm font-bold text-neutral-500 tracking-[0.15em] uppercase">
              Rules
            </span>
            <p className="font-body text-sm text-neutral-300">Minimum body text: <span className="font-mono text-teal">16px</span></p>
            <p className="font-body text-sm text-neutral-300">Line length: <span className="font-mono text-teal">50–75 chars</span></p>
            <p className="font-body text-sm text-neutral-300">Alignment: <span className="font-mono text-teal">Left-aligned always</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
