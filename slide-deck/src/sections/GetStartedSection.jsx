import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { getStartedSteps } from '../data/slideContent';
import { ArrowRight, Github, ExternalLink, Palette } from 'lucide-react';
import AccentBar from '../components/AccentBar';

export default function GetStartedSection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Get Started"
        title="Start"
        titleAccent="building."
        subtitle="Four steps from fork to launch. No licensing, no fees, no permission needed."
      />

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {getStartedSteps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="rounded-xl border border-teal/20 bg-teal/[0.03] p-6 h-full relative">
              <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <span className="font-mono text-sm font-bold text-teal">{step.num}</span>
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="font-body text-base text-n300 leading-relaxed">{step.desc}</p>
              {i < getStartedSteps.length - 1 && (
                <ArrowRight size={16} className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-teal/40" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* URL callout */}
      <ScrollReveal className="mb-16">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12 text-center">
          <p className="font-mono text-base text-n300 mb-2">Visit</p>
          <p className="font-mono text-2xl sm:text-3xl font-bold text-teal">
            gamblingpolicy.com/playbook
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://gamblingpolicy.com/tools/playbook/configurator/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal text-navy
                font-heading text-sm font-bold transition-opacity hover:opacity-90"
            >
              <Palette size={16} /> Brand Configurator
            </a>
            <a
              href="https://github.com/kphilander/Playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06]
                text-n300 hover:text-white font-heading text-sm font-medium transition-colors"
            >
              <Github size={16} /> View on GitHub
            </a>
            <a
              href="https://gamblingpolicy.com/tools/playbook/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06]
                text-n300 hover:text-white font-heading text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} /> Explore Playbook
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* License */}
      <ScrollReveal className="mb-16">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {['Open Source', 'Creative Commons', 'No Licensing Fees'].map((badge) => (
            <span key={badge} className="px-4 py-2 rounded-full border border-teal/30 bg-teal/[0.06]
              font-heading text-xs font-bold text-teal tracking-wider uppercase">
              {badge}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* Helpline footer */}
      <ScrollReveal>
        <div className="rounded-xl bg-navy-light border border-white/[0.06] p-6 text-center">
          <p className="font-body text-base text-n300 mb-1">
            If you or someone you know needs support:
          </p>
          <p className="font-mono text-lg font-bold text-white">
            1-800-522-4700
          </p>
          <p className="font-body text-xs text-n300 mt-1">
            National Council on Problem Gambling &mdash; 24/7, free, confidential
          </p>
        </div>
      </ScrollReveal>

      {/* Bottom accent */}
      <div className="mt-16">
        <AccentBar />
      </div>
    </div>
  );
}
