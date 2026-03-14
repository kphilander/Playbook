import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { governanceModel, adoptionPhases } from '../data/slideContent';
import { Globe, Shield, GitBranch, ArrowRight } from 'lucide-react';

export default function GovernanceSection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Operations"
        title="Governance &"
        titleAccent="Evolution"
        subtitle="Open source means you control the brand. Expert-maintained upstream means you don't have to do it alone."
      />

      {/* Ownership model */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Globe, title: 'Creative Commons', desc: 'Free to use, modify, and distribute. No licensing fees, no permission needed.', color: 'teal' },
          { icon: Shield, title: 'You Control Your Brand', desc: 'Fork once. Your customizations, your rules. Update from upstream when you choose.', color: 'orange' },
          { icon: GitBranch, title: 'Expert-Maintained', desc: 'Core brand system maintained by responsible gambling professionals. Pull updates as they ship.', color: 'teal' },
        ].map((card, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className={`rounded-xl border p-6 sm:p-8 h-full
              ${card.color === 'teal' ? 'border-teal/20 bg-teal/[0.03]' : 'border-orange/20 bg-orange/[0.03]'}`}>
              <card.icon size={24} className={card.color === 'teal' ? 'text-teal mb-4' : 'text-orange mb-4'} />
              <h3 className="font-heading text-base font-bold text-white mb-2">{card.title}</h3>
              <p className="font-body text-sm text-n300 leading-relaxed">{card.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Versioning */}
      <ScrollReveal className="mb-16">
        <h3 className="font-heading text-lg font-bold text-white mb-6">Versioning</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {governanceModel.versioning.map((v, i) => (
            <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <span className="font-mono text-xs font-bold text-teal">{v.level}</span>
              <p className="font-body text-sm text-n300 mt-2">{v.trigger}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Adoption phases */}
      <ScrollReveal>
        <h3 className="font-heading text-lg font-bold text-white mb-6">Adoption Roadmap</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {adoptionPhases.map((p, i) => (
            <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 relative">
              <span className="font-mono text-3xl font-bold text-teal/20">{p.phase}</span>
              <h4 className="font-heading text-sm font-bold text-white mt-2 mb-1">{p.name}</h4>
              <p className="font-body text-xs text-n300 leading-relaxed">{p.desc}</p>
              {i < adoptionPhases.length - 1 && (
                <ArrowRight size={16} className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-n500" />
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
