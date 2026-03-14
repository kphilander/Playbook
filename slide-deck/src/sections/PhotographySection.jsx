import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { photographyDos, photographyDonts } from '../data/slideContent';
import { Check, X } from 'lucide-react';

const BASE = import.meta.env.BASE_URL || '/';

const goodPhotos = [
  { file: 'cinematic-lighting-good.jpg', caption: 'Cinematic lighting, energetic mood' },
  { file: 'closeup-cards-chips-good.jpg', caption: 'Close-up detail, social context' },
  { file: 'closeup-slot-interface-good.jpg', caption: 'Real interface, player perspective' },
];

const badPhotos = [
  { file: 'dim-lighting-bad.jpg', caption: 'Dim, lifeless lighting' },
  { file: 'slot-machines-filler-bad.jpg', caption: 'Generic stock filler' },
];

export default function PhotographySection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Visual Identity"
        title="Photography &"
        titleAccent="Illustration"
        subtitle="Real people, real moments. Natural lighting. Social settings. No stereotypes, no stock cliches."
      />

      {/* Photo examples */}
      <ScrollReveal className="mb-16">
        <h3 className="font-heading text-sm font-bold text-teal tracking-wider uppercase mb-4 flex items-center gap-2">
          <Check size={16} className="text-success" /> Approved Style
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {goodPhotos.map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-teal/20">
              <img
                src={`${BASE}assets/photography/${p.file}`}
                alt={p.caption}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="px-4 py-3 bg-teal/[0.04]">
                <p className="font-body text-base text-n300">{p.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-sm font-bold text-orange tracking-wider uppercase mb-4 flex items-center gap-2">
          <X size={16} className="text-danger" /> Avoid
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {badPhotos.map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-orange/20 opacity-70">
              <img
                src={`${BASE}assets/photography/${p.file}`}
                alt={p.caption}
                className="w-full h-48 object-cover grayscale"
                loading="lazy"
              />
              <div className="px-4 py-3 bg-orange/[0.04]">
                <p className="font-body text-base text-n300">{p.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ScrollReveal delay={0}>
          <div className="rounded-xl border border-teal/20 bg-teal/[0.03] p-6 sm:p-8 h-full">
            <h3 className="font-heading text-base font-bold text-teal mb-4 flex items-center gap-2">
              <Check size={16} /> Do
            </h3>
            <ul className="space-y-3">
              {photographyDos.map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-base text-n300">
                  <Check size={14} className="text-teal shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="rounded-xl border border-orange/20 bg-orange/[0.03] p-6 sm:p-8 h-full">
            <h3 className="font-heading text-base font-bold text-orange mb-4 flex items-center gap-2">
              <X size={16} /> Don't
            </h3>
            <ul className="space-y-3">
              {photographyDonts.map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-base text-n300">
                  <X size={14} className="text-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* Color overlays */}
      <ScrollReveal className="mt-16">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold text-white mb-4">Color Overlay Treatments</h3>
          <p className="font-body text-base text-n300 mb-6 leading-relaxed">
            When text appears over photography, apply a color overlay for contrast and brand consistency.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'Navy', color: 'rgba(27,40,56,0.85)' },
              { name: 'Teal', color: 'rgba(0,212,170,0.75)' },
              { name: 'Orange', color: 'rgba(255,107,53,0.75)' },
            ].map((o, i) => (
              <div key={i} className="rounded-lg overflow-hidden relative h-32">
                <img
                  src={`${BASE}assets/photography/cinematic-lighting-good.jpg`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: o.color }}>
                  <div className="text-center">
                    <p className="font-heading text-sm font-bold text-white">{o.name} Overlay</p>
                    <p className="font-mono text-xs text-white/70">{o.color}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
