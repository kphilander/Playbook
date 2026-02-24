import { Eye, Share2 } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { taglineSystem, sampleRewrites } from '../data/slideContent';

export default function MessagingSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Messaging Framework
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        A tagline system — not a single tagline. Mix and match across campaigns.
      </p>

      <div className="flex-1 flex gap-6 mt-8">
        {/* Tagline system */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-4 h-4 text-teal" />
              <span className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase">Open</span>
            </div>
            <div className="flex flex-col gap-2">
              {taglineSystem.open.map((t, i) => (
                <div key={i} className="bg-navy-light rounded-lg px-5 py-3">
                  <p className="font-heading text-lg font-bold text-white italic">&ldquo;{t}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Share2 className="w-4 h-4 text-orange" />
              <span className="font-heading text-sm font-bold text-orange tracking-[0.15em] uppercase">Social</span>
            </div>
            <div className="flex flex-col gap-2">
              {taglineSystem.social.map((t, i) => (
                <div key={i} className="bg-navy-light rounded-lg px-5 py-3">
                  <p className="font-heading text-lg font-bold text-white italic">&ldquo;{t}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample rewrites */}
        <div className="w-96 flex flex-col gap-4">
          <span className="font-heading text-sm font-bold text-neutral-500 tracking-[0.15em] uppercase">
            Voice in Action
          </span>
          {sampleRewrites.map((r) => (
            <div key={r.label} className="bg-navy-light rounded-xl p-5 flex flex-col gap-3">
              <span className="font-heading text-sm font-bold text-white">{r.label}</span>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="font-heading text-xs text-orange mt-0.5">✕</span>
                  <p className="font-body text-xs text-neutral-500 italic leading-relaxed">{r.before}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-heading text-xs text-teal mt-0.5">✓</span>
                  <p className="font-body text-xs text-neutral-300 italic leading-relaxed">{r.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
