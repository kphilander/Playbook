import { CheckCircle } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { accessibilityChecklist } from '../data/slideContent';

const categoryColors = ['text-teal', 'text-orange', 'text-teal', 'text-orange'];

export default function AccessibilitySlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <div className="flex items-center gap-4 mt-4">
        <h2 className="font-heading text-4xl font-bold text-white">
          Accessibility
        </h2>
        <span className="px-3 py-1 rounded-full bg-teal/20 font-mono text-sm text-teal font-bold">
          WCAG 2.1 AA
        </span>
      </div>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Not aspirational — required. Every player must be able to use your content and tools.
      </p>

      <div className="flex-1 grid grid-cols-4 gap-5 mt-8">
        {accessibilityChecklist.map((cat, ci) => (
          <div key={cat.category} className="bg-navy-light rounded-xl p-5 flex flex-col gap-4">
            <h3 className={`font-heading text-sm font-bold tracking-[0.15em] uppercase ${categoryColors[ci]}`}>
              {cat.category}
            </h3>
            <ul className="flex flex-col gap-3">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${categoryColors[ci]}`} />
                  <span className="font-body text-sm text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legal frameworks */}
      <div className="flex gap-6 mt-6">
        {[
          { region: 'US', law: 'ADA / Section 508' },
          { region: 'EU', law: 'European Accessibility Act' },
          { region: 'UK', law: 'Equality Act 2010' },
          { region: 'AU', law: 'DDA 1992' },
          { region: 'CA', law: 'Accessible Canada Act' },
        ].map((f) => (
          <div key={f.region} className="flex items-center gap-2">
            <span className="font-heading text-xs font-bold text-white">{f.region}</span>
            <span className="font-mono text-xs text-neutral-500">{f.law}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
