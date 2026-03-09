import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { accessibilityChecklist } from '../data/slideContent';
import { Check } from 'lucide-react';

const categoryIcons = {
  Visual: '👁',
  Cognitive: '🧠',
  Motor: '✋',
  'Screen Reader': '📖',
};

const legalFrameworks = [
  { region: 'US', law: 'ADA & Section 508' },
  { region: 'EU', law: 'European Accessibility Act' },
  { region: 'UK', law: 'Equality Act 2010' },
  { region: 'AU', law: 'Disability Discrimination Act' },
  { region: 'CA', law: 'AODA (Ontario)' },
];

export default function AccessibilitySection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Standards"
        title="Accessibility"
        subtitle="WCAG 2.1 AA compliance is a minimum, not a goal. Every Playbook asset is built to these standards."
      />

      {/* WCAG badge */}
      <ScrollReveal className="mb-16">
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-teal/30 bg-teal/[0.06]">
          <Check size={18} className="text-teal" />
          <span className="font-heading text-sm font-bold text-teal">WCAG 2.1 AA Compliant</span>
        </div>
      </ScrollReveal>

      {/* Checklist grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {accessibilityChecklist.map((cat, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 h-full">
              <div className="text-2xl mb-3">{categoryIcons[cat.category]}</div>
              <h3 className="font-heading text-base font-bold text-white mb-4">{cat.category}</h3>
              <ul className="space-y-2.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check size={14} className={`shrink-0 mt-0.5 ${j % 2 === 0 ? 'text-teal' : 'text-orange'}`} />
                    <span className="font-body text-sm text-n300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Legal frameworks */}
      <ScrollReveal>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold text-white mb-4">Legal Frameworks</h3>
          <p className="font-body text-sm text-n300 leading-relaxed mb-6">
            Playbook materials meet or exceed accessibility requirements in major gambling jurisdictions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {legalFrameworks.map((f, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-lg font-bold text-teal">{f.region}</p>
                <p className="font-mono text-[10px] text-n300 mt-1">{f.law}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
