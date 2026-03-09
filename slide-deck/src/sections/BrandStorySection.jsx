import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { engagementGap, solutionCards, twoTiers } from '../data/slideContent';
import { AlertTriangle, Zap, Eye, Share2, ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">

      {/* ── The Engagement Gap ── */}
      <SectionHeading
        label="The Problem"
        title="The Engagement"
        titleAccent="Gap"
        subtitle="Responsible gambling materials are invisible — buried, clinical, and ignored. Here's what exists vs. what's needed."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* What Exists */}
        <ScrollReveal delay={100}>
          <div className="rounded-xl border border-orange/20 bg-orange/[0.03] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <AlertTriangle size={18} className="text-orange" />
              <h3 className="font-heading text-sm font-bold text-orange tracking-wider uppercase">
                What Exists
              </h3>
            </div>
            <ul className="space-y-3">
              {engagementGap.exists.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-n300 leading-relaxed">
                  <span className="text-orange/60 mt-1 shrink-0">&mdash;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* What's Needed */}
        <ScrollReveal delay={200}>
          <div className="rounded-xl border border-teal/20 bg-teal/[0.03] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <Zap size={18} className="text-teal" />
              <h3 className="font-heading text-sm font-bold text-teal tracking-wider uppercase">
                What's Needed
              </h3>
            </div>
            <ul className="space-y-3">
              {engagementGap.needed.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-n300 leading-relaxed">
                  <span className="text-teal/60 mt-1 shrink-0">&mdash;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* ── The Solution ── */}
      <ScrollReveal>
        <h3 className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase mb-3">
          The Approach
        </h3>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
          Entertainment literacy, not compliance copy.
        </h2>
        <p className="font-body text-lg text-n300 max-w-2xl leading-relaxed mb-10">
          Playbook treats responsible gambling content like a product — designed, tested, and deployed at the same quality as the games themselves.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {solutionCards.map((card, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className={`rounded-xl border p-6 sm:p-8 h-full
              ${card.accent === 'teal'
                ? 'border-teal/20 bg-teal/[0.03]'
                : 'border-orange/20 bg-orange/[0.03]'}`}>
              <h4 className={`font-heading text-base font-bold mb-3
                ${card.accent === 'teal' ? 'text-teal' : 'text-orange'}`}>
                {card.title}
              </h4>
              <p className="font-body text-sm text-n300 leading-relaxed">
                {card.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Two-Tier System ── */}
      <ScrollReveal>
        <h3 className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase mb-3">
          Architecture
        </h3>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-10">
          A two-tier content system
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[twoTiers.tier1, twoTiers.tier2].map((tier, i) => (
          <ScrollReveal key={i} delay={i * 150}>
            <div className={`rounded-xl border p-6 sm:p-8 h-full
              ${i === 0 ? 'border-teal/20 bg-teal/[0.03]' : 'border-orange/20 bg-orange/[0.03]'}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`font-mono text-3xl font-bold
                  ${i === 0 ? 'text-teal' : 'text-orange'}`}>
                  {tier.pct}
                </span>
                <div>
                  <span className="font-heading text-xs font-bold tracking-wider uppercase text-n300 block">
                    {tier.label}
                  </span>
                  <span className="font-heading text-lg font-bold text-white">
                    {tier.title}
                  </span>
                </div>
              </div>
              <p className="font-body text-sm text-n300 italic mb-4">{tier.voice}</p>
              <ul className="space-y-2">
                {tier.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 font-body text-sm text-n300">
                    <ArrowRight size={14} className={`mt-0.5 shrink-0
                      ${i === 0 ? 'text-teal/60' : 'text-orange/60'}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
