import AccentBar from '../components/AccentBar';
import { colorPalette } from '../data/slideContent';

function SwatchGroup({ title, colors }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-heading text-sm font-bold text-neutral-500 tracking-[0.15em] uppercase">
        {title}
      </span>
      <div className="flex gap-2">
        {colors.map((c) => (
          <div key={c.hex} className="flex flex-col items-center gap-1.5">
            <div
              className="w-20 h-20 rounded-lg border border-white/10"
              style={{ backgroundColor: c.hex }}
            />
            <span className="font-mono text-xs text-neutral-300">{c.hex}</span>
            <span className="font-body text-xs text-neutral-500">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SemanticSwatches({ colors }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-heading text-sm font-bold text-neutral-500 tracking-[0.15em] uppercase">
        Semantic
      </span>
      <div className="flex gap-2">
        {colors.map((c) => (
          <div key={c.hex} className="flex flex-col items-center gap-1.5">
            <div
              className="w-14 h-14 rounded-lg border border-white/10"
              style={{ backgroundColor: c.hex }}
            />
            <span className="font-mono text-xs text-neutral-300">{c.hex}</span>
            <span className="font-body text-xs text-neutral-500">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ColorSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Color Palette
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Built for a modern, entertainment-grade aesthetic. Deep navy for authority.
        Electric teal for energy. Bold orange for action.
      </p>

      <div className="flex-1 flex flex-col gap-5 mt-8">
        <div className="flex gap-8">
          <SwatchGroup title="Primary" colors={colorPalette.primary} />
          <SwatchGroup title="Secondary" colors={colorPalette.secondary} />
          <SwatchGroup title="Accent" colors={colorPalette.accent} />
          <SemanticSwatches colors={colorPalette.semantic} />
        </div>

        {/* Accessibility note */}
        <div className="bg-navy-light rounded-xl p-5 flex items-start gap-4 mt-2">
          <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
            <span className="font-heading text-lg font-bold text-teal">Aa</span>
          </div>
          <div>
            <h3 className="font-heading text-base font-bold text-white">WCAG 2.1 AA Compliant</h3>
            <p className="font-body text-sm text-neutral-300 mt-1">
              All foreground/background combinations meet minimum contrast ratios:
              <span className="font-mono text-teal"> 4.5:1</span> for normal text,
              <span className="font-mono text-teal"> 3:1</span> for large text and UI components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
