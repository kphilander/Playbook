import { AlertTriangle, Sparkles } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { engagementGap } from '../data/slideContent';

export default function EngagementGap() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        The Engagement Gap
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Current player education is failing — not because the information is wrong,
        but because nobody reads it.
      </p>

      <div className="flex-1 flex gap-6 mt-10">
        {/* Left column: What Exists */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-5">
            <AlertTriangle className="w-5 h-5 text-orange" />
            <span className="font-heading text-sm font-bold text-orange tracking-[0.15em] uppercase">
              What Exists
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {engagementGap.exists.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-orange mt-0.5">&#8594;</span>
                <span className="font-body text-lg text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="w-px bg-navy-light self-stretch" />

        {/* Right column: What's Needed */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-5 h-5 text-teal" />
            <span className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase">
              What&apos;s Needed
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {engagementGap.needed.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-teal mt-0.5">&#8594;</span>
                <span className="font-body text-lg text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
