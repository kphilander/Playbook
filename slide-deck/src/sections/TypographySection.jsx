import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import CopyButton from '../components/CopyButton';
import { typeFamilies, typeScale } from '../data/slideContent';

const fontMap = {
  'Inter': 'font-heading',
  'Source Sans 3': 'font-body',
  'Source Code Pro': 'font-mono',
};

const defaultText = 'The quick brown fox jumps over the lazy dog';

export default function TypographySection() {
  const [activeFont, setActiveFont] = useState('Inter');
  const [weight, setWeight] = useState(400);
  const [size, setSize] = useState(32);
  const [previewText, setPreviewText] = useState(defaultText);

  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Visual Identity"
        title="Typography"
        subtitle="Three font families with distinct roles: Inter for authority, Source Sans 3 for readability, Source Code Pro for precision."
      />

      {/* Font families */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {typeFamilies.map((f, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 h-full">
              <div className={`${fontMap[f.family]} text-5xl font-bold text-white mb-4`}>
                {f.sample}
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-1">{f.family}</h3>
              <p className="font-body text-sm text-teal mb-1">{f.role}</p>
              <CopyButton value={f.family} label={`Weights: ${f.weights}`} />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Live type specimen */}
      <ScrollReveal className="mb-16">
        <div className="rounded-xl border border-teal/20 bg-teal/[0.03] p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold text-white mb-6">Type Specimen</h3>

          {/* Font tabs */}
          <div className="flex gap-2 mb-6">
            {typeFamilies.map((f) => (
              <button
                key={f.family}
                onClick={() => setActiveFont(f.family)}
                className={`px-4 py-2 rounded-lg font-heading text-xs font-bold transition-colors
                  ${activeFont === f.family
                    ? 'bg-teal text-navy'
                    : 'bg-white/[0.06] text-n300 hover:text-white'}`}
              >
                {f.family}
              </button>
            ))}
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="weight-slider" className="font-mono text-xs text-n500 block mb-2">
                Weight: <span className="text-teal">{weight}</span>
              </label>
              <input
                id="weight-slider"
                type="range"
                min={100}
                max={900}
                step={100}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-teal"
                aria-label={`Font weight: ${weight}`}
              />
            </div>
            <div>
              <label htmlFor="size-slider" className="font-mono text-xs text-n500 block mb-2">
                Size: <span className="text-teal">{size}px</span>
              </label>
              <input
                id="size-slider"
                type="range"
                min={12}
                max={72}
                step={1}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full accent-teal"
                aria-label={`Font size: ${size} pixels`}
              />
            </div>
          </div>

          {/* Custom text */}
          <input
            type="text"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
            placeholder="Type something..."
            aria-label="Type specimen preview text"
            className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3
              font-body text-sm text-n300 placeholder:text-n700
              focus:outline-none focus:ring-2 focus:ring-teal/50 mb-6"
          />

          {/* Preview */}
          <div
            className={`${fontMap[activeFont]} text-white leading-snug break-words`}
            style={{ fontWeight: weight, fontSize: `${size}px` }}
          >
            {previewText || defaultText}
          </div>
        </div>
      </ScrollReveal>

      {/* Type scale */}
      <ScrollReveal>
        <h3 className="font-heading text-lg font-bold text-white mb-6">Type Scale</h3>
        <div className="space-y-4">
          {typeScale.map((t, i) => (
            <div key={i} className="flex items-baseline gap-4 group">
              <div className="w-16 shrink-0 text-right">
                <span className="font-mono text-[10px] text-n700">{t.size}</span>
              </div>
              <div
                className="font-heading text-white"
                style={{ fontSize: t.size, fontWeight: t.weight, lineHeight: 1.2 }}
              >
                {t.level}
              </div>
              <span className="font-mono text-[10px] text-n700 opacity-0 group-hover:opacity-100 transition-opacity">
                {t.weight}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
