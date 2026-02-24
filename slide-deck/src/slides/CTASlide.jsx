import AccentBar from '../components/AccentBar';
import { ctaLibrary } from '../data/slideContent';

function CTAGroup({ title, items, accentColor, accentBg, isTertiary }) {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <span className={`font-heading text-sm font-bold tracking-[0.15em] uppercase ${accentColor}`}>
        {title}
      </span>
      <div className="flex flex-col gap-2">
        {items.map((cta, i) => (
          <div
            key={i}
            className={`rounded-lg px-4 py-2.5 text-sm text-center cursor-default ${
              isTertiary
                ? 'bg-navy-light text-neutral-300 border border-neutral-500 font-body font-normal'
                : `${accentBg} text-navy font-heading font-semibold`
            }`}
          >
            {cta}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CTASlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        CTA Library
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Calls to action organized by function. Buttons, links, and prompts that drive player action.
      </p>

      <div className="flex-1 flex gap-6 mt-8">
        <CTAGroup title="Entertainment Literacy" items={ctaLibrary.literacy} accentColor="text-teal" accentBg="bg-teal" />
        <CTAGroup title="Features" items={ctaLibrary.features} accentColor="text-orange" accentBg="bg-orange" />
        <CTAGroup title="Content" items={ctaLibrary.content} accentColor="text-teal" accentBg="bg-teal" />
        <CTAGroup title="Support" items={ctaLibrary.support} accentColor="text-neutral-300" accentBg="bg-navy-light" isTertiary />
      </div>

      {/* Hierarchy note */}
      <div className="mt-6 bg-navy-light rounded-lg px-6 py-4 flex items-center gap-4">
        <div className="flex gap-2 items-center">
          <div className="w-20 h-8 rounded bg-teal flex items-center justify-center">
            <span className="font-heading text-xs font-bold text-navy">Primary</span>
          </div>
          <div className="w-20 h-8 rounded bg-orange flex items-center justify-center">
            <span className="font-heading text-xs font-bold text-navy">Secondary</span>
          </div>
          <div className="w-20 h-8 rounded border border-neutral-500 flex items-center justify-center">
            <span className="font-body text-xs text-neutral-300">Tertiary</span>
          </div>
        </div>
        <p className="font-body text-sm text-neutral-300">
          Support CTAs are always present but never the primary action. One tap away, never intrusive.
        </p>
      </div>
    </div>
  );
}
