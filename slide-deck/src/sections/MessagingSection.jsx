import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import CopyButton from '../components/CopyButton';
import { taglineSystem, sampleRewrites, ctaLibrary } from '../data/slideContent';
import { ArrowRight, Check, X } from 'lucide-react';

const ctaCategories = [
  { key: 'literacy', label: 'Literacy', color: 'teal', style: 'bg-teal text-navy font-bold' },
  { key: 'features', label: 'Features', color: 'orange', style: 'bg-orange text-white font-bold' },
  { key: 'content', label: 'Content', color: 'teal', style: 'border border-teal text-teal font-bold bg-transparent' },
  { key: 'support', label: 'Support', color: 'orange', style: 'border border-orange/50 text-orange font-medium bg-transparent' },
];

export default function MessagingSection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Messaging"
        title="Voice in Action"
        subtitle="How the brand pillars translate into taglines, rewrites, and calls-to-action."
      />

      {/* Tagline system */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <ScrollReveal delay={0}>
          <div className="rounded-xl border border-teal/20 bg-teal/[0.03] p-6 sm:p-8">
            <h3 className="font-heading text-sm font-bold text-teal tracking-wider uppercase mb-4">
              Open Taglines
            </h3>
            <div className="space-y-3">
              {taglineSystem.open.map((t, i) => (
                <div key={i} className="flex items-center justify-between gap-4">
                  <p className="font-body text-sm text-n300 italic">&ldquo;{t}&rdquo;</p>
                  <CopyButton value={t} label="" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="rounded-xl border border-orange/20 bg-orange/[0.03] p-6 sm:p-8">
            <h3 className="font-heading text-sm font-bold text-orange tracking-wider uppercase mb-4">
              Social Taglines
            </h3>
            <div className="space-y-3">
              {taglineSystem.social.map((t, i) => (
                <div key={i} className="flex items-center justify-between gap-4">
                  <p className="font-body text-sm text-n300 italic">&ldquo;{t}&rdquo;</p>
                  <CopyButton value={t} label="" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Before / After rewrites */}
      <ScrollReveal>
        <h3 className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase mb-3">
          Rewrites
        </h3>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-10">
          From compliance to conversation
        </h2>
      </ScrollReveal>

      <div className="space-y-6 mb-24">
        {sampleRewrites.map((r, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="rounded-xl border border-white/[0.06] overflow-hidden">
              <div className="px-5 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <span className="font-heading text-xs font-bold text-n500 tracking-wider uppercase">{r.label}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-5 border-b md:border-b-0 md:border-r border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2">
                    <X size={14} className="text-orange" />
                    <span className="font-heading text-xs font-bold text-orange uppercase">Before</span>
                  </div>
                  <p className="font-body text-sm text-n500 italic leading-relaxed">{r.before}</p>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Check size={14} className="text-teal" />
                    <span className="font-heading text-xs font-bold text-teal uppercase">After</span>
                  </div>
                  <p className="font-body text-sm text-n300 italic leading-relaxed">{r.after}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA Library */}
      <ScrollReveal>
        <h3 className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase mb-3">
          CTA Library
        </h3>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-10">
          Four categories of calls-to-action
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ctaCategories.map((cat, i) => (
          <ScrollReveal key={cat.key} delay={i * 100}>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h4 className={`font-heading text-sm font-bold tracking-wider uppercase mb-4
                ${cat.color === 'teal' ? 'text-teal' : 'text-orange'}`}>
                {cat.label}
              </h4>
              <div className="space-y-2">
                {ctaLibrary[cat.key].map((cta, j) => (
                  <button
                    key={j}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-opacity
                      hover:opacity-80 ${cat.style}`}
                    onClick={() => navigator.clipboard.writeText(cta)}
                  >
                    {cta}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
