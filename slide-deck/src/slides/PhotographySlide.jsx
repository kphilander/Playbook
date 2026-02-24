import { Check, X } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { photographyDos, photographyDonts } from '../data/slideContent';

export default function PhotographySlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Photography &amp; Illustration
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Lifestyle editorial feel — real people enjoying themselves, shot with natural light.
      </p>

      <div className="flex-1 flex gap-6 mt-8">
        {/* Photo example with text overlay */}
        <div className="flex-1 flex flex-col gap-3">
          <span className="font-heading text-sm font-bold text-neutral-500 tracking-[0.15em] uppercase">
            Text Over Photography
          </span>
          <div className="flex-1 rounded-xl overflow-hidden relative bg-gradient-to-br from-navy-light via-navy to-navy-light">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal/15 via-transparent to-orange/10" />
            <div className="absolute inset-0 bg-navy/70" />
            <div className="relative z-10 flex flex-col justify-between p-8 h-full">
              <div>
                <span className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-teal">
                  Entertainment Literacy
                </span>
                <h3 className="font-heading text-3xl font-bold text-white mt-2 max-w-md leading-snug">
                  Every game has math.<br />Here&apos;s yours.
                </h3>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex gap-3">
                  <div className="rounded-lg bg-teal px-5 py-2.5">
                    <span className="font-heading text-sm font-semibold text-navy">Take the Quiz</span>
                  </div>
                  <div className="rounded-lg border border-neutral-400 px-5 py-2.5">
                    <span className="font-heading text-sm font-semibold text-white">See the Odds</span>
                  </div>
                </div>
                <p className="font-mono text-xs text-neutral-400">
                  Navy filter at 70% opacity
                </p>
              </div>
            </div>
          </div>

          {/* Color filter swatches */}
          <div className="flex gap-3">
            {[
              { label: 'Navy', color: 'text-white', bg: 'bg-navy/70' },
              { label: 'Teal', color: 'text-teal', bg: 'bg-teal-dark/50' },
              { label: 'Orange', color: 'text-orange', bg: 'bg-orange-dark/50' },
            ].map((f) => (
              <div key={f.label} className={`flex-1 rounded-lg overflow-hidden relative h-14 bg-gradient-to-br from-navy-light to-navy`}>
                <div className={`absolute inset-0 ${f.bg}`} />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <span className={`font-heading text-sm font-bold ${f.color}`}>{f.label} Filter</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Do / Don't */}
        <div className="w-72 flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-4 h-4 text-teal" />
              <span className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase">Do</span>
            </div>
            <ul className="flex flex-col gap-2">
              {photographyDos.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-teal mt-0.5 text-sm">&#8594;</span>
                  <span className="font-body text-base text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <X className="w-4 h-4 text-orange" />
              <span className="font-heading text-sm font-bold text-orange tracking-[0.15em] uppercase">Don&apos;t</span>
            </div>
            <ul className="flex flex-col gap-2">
              {photographyDonts.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange mt-0.5 text-sm">&#8594;</span>
                  <span className="font-body text-base text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
