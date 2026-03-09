import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import CopyButton from '../components/CopyButton';
import { colorPalette } from '../data/slideContent';

function SwatchGroup({ title, swatches, accentColor }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-bold text-n300 tracking-wider uppercase mb-4">{title}</h3>
      <div className="space-y-3">
        {swatches.map((s, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div
              className="w-14 h-14 rounded-lg shrink-0 border border-white/10 shadow-lg
                transition-transform duration-200 group-hover:scale-110"
              style={{ background: s.hex }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-heading text-sm font-bold text-white">{s.name}</p>
              <p className="font-body text-xs text-n300">{s.role}</p>
            </div>
            <CopyButton value={s.hex} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ContrastDemo({ fg, bg, fgLabel, bgLabel, ratio, pass }) {
  return (
    <div className="rounded-lg overflow-hidden border border-white/[0.06]">
      <div className="px-4 py-6 flex items-center justify-center" style={{ background: bg, color: fg }}>
        <span className="font-heading text-lg font-bold">Aa</span>
      </div>
      <div className="px-4 py-3 bg-white/[0.02] flex items-center justify-between">
        <span className="font-mono text-[10px] text-n300">{fgLabel} on {bgLabel}</span>
        <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full
          ${pass ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'}`}>
          {ratio} {pass ? 'AA' : 'FAIL'}
        </span>
      </div>
    </div>
  );
}

export default function ColorSection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Visual Identity"
        title="Color"
        titleAccent="System"
        subtitle="A three-tone palette: deep navy for trust, electric teal for action, bold orange for attention. Click any hex code to copy."
      />

      {/* Main palette */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ScrollReveal delay={0}>
          <SwatchGroup title="Primary" swatches={colorPalette.primary} accentColor="navy" />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <SwatchGroup title="Secondary" swatches={colorPalette.secondary} accentColor="teal" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <SwatchGroup title="Accent" swatches={colorPalette.accent} accentColor="orange" />
        </ScrollReveal>
      </div>

      {/* Semantic colors */}
      <ScrollReveal className="mb-16">
        <h3 className="font-heading text-sm font-bold text-n300 tracking-wider uppercase mb-4">Semantic</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {colorPalette.semantic.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/[0.06] overflow-hidden">
              <div className="h-16" style={{ background: s.hex }} />
              <div className="px-4 py-3 bg-white/[0.02] flex items-center justify-between">
                <span className="font-heading text-xs font-bold text-white">{s.name}</span>
                <CopyButton value={s.hex} />
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Contrast reference */}
      <ScrollReveal>
        <h3 className="font-heading text-sm font-bold text-n300 tracking-wider uppercase mb-4">
          Contrast Reference — WCAG 2.1 AA
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ContrastDemo fg="#FFFFFF" bg="#1B2838" fgLabel="White" bgLabel="Navy" ratio="13.5:1" pass={true} />
          <ContrastDemo fg="#00D4AA" bg="#1B2838" fgLabel="Teal" bgLabel="Navy" ratio="8.2:1" pass={true} />
          <ContrastDemo fg="#FF6B35" bg="#1B2838" fgLabel="Orange" bgLabel="Navy" ratio="4.9:1" pass={true} />
          <ContrastDemo fg="#1B2838" bg="#FFFFFF" fgLabel="Navy" bgLabel="White" ratio="13.5:1" pass={true} />
        </div>
      </ScrollReveal>
    </div>
  );
}
