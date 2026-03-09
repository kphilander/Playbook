import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { pillars, archetypes, voicePrinciples, personalitySpectrum } from '../data/slideContent';
import { Eye, Share2, MessageCircle, Heart } from 'lucide-react';

export default function FoundationSection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">

      {/* ── Brand Pillars ── */}
      <SectionHeading
        label="Foundation"
        title="Two pillars."
        titleAccent="One philosophy."
        subtitle="Every piece of Playbook content is built on two ideas: radical transparency and social shareability."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Open */}
        <ScrollReveal delay={100}>
          <div className="rounded-xl border border-teal/20 bg-teal/[0.03] p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <Eye size={20} className="text-teal" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">Open</h3>
                <p className="font-heading text-sm text-teal italic">{pillars.open.tagline}</p>
              </div>
            </div>
            <p className="font-body text-sm text-n300 leading-relaxed mb-4">{pillars.open.description}</p>
            <ul className="space-y-2">
              {pillars.open.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-sm text-n300">
                  <span className="text-teal mt-0.5 shrink-0">&#x2713;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Social */}
        <ScrollReveal delay={200}>
          <div className="rounded-xl border border-orange/20 bg-orange/[0.03] p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                <Share2 size={20} className="text-orange" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">Social</h3>
                <p className="font-heading text-sm text-orange italic">{pillars.social.tagline}</p>
              </div>
            </div>
            <p className="font-body text-sm text-n300 leading-relaxed mb-4">{pillars.social.description}</p>
            <ul className="space-y-2">
              {pillars.social.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-sm text-n300">
                  <span className="text-orange mt-0.5 shrink-0">&#x2713;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Brand Personality ── */}
      <ScrollReveal>
        <h3 className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase mb-3">
          Personality
        </h3>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-10">
          Two voices. One brand.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {[archetypes.sharp, archetypes.friend].map((arch, i) => (
          <ScrollReveal key={i} delay={i * 150}>
            <div className={`rounded-xl border p-6 sm:p-8 h-full
              ${i === 0 ? 'border-teal/20 bg-teal/[0.03]' : 'border-orange/20 bg-orange/[0.03]'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center
                  ${i === 0 ? 'bg-teal/10' : 'bg-orange/10'}`}>
                  {i === 0 ? <MessageCircle size={20} className="text-teal" /> : <Heart size={20} className="text-orange" />}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">{arch.name}</h3>
                  <span className={`font-heading text-xs font-bold tracking-wider uppercase
                    ${i === 0 ? 'text-teal' : 'text-orange'}`}>{arch.role}</span>
                </div>
              </div>
              <p className="font-body text-sm text-n300 italic mb-4">{arch.tagline}</p>
              <ul className="space-y-2 mb-5">
                {arch.traits.map((trait, j) => (
                  <li key={j} className="font-body text-sm text-n300">&bull; {trait}</li>
                ))}
              </ul>
              <div className={`rounded-lg p-4 border
                ${i === 0 ? 'border-teal/10 bg-teal/[0.04]' : 'border-orange/10 bg-orange/[0.04]'}`}>
                <p className="font-body text-sm text-n300 italic leading-relaxed">{arch.example}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Personality Spectrum */}
      <ScrollReveal>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 mb-24">
          <h4 className="font-heading text-sm font-bold text-n300 tracking-wider uppercase mb-6">
            Personality Spectrum
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {personalitySpectrum.map((pair, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-sm font-bold text-teal mb-1">{pair.is}</p>
                <div className="w-8 h-px bg-gradient-to-r from-teal to-orange mx-auto my-2" />
                <p className="font-heading text-sm font-medium text-orange/60">not {pair.not}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ── Voice & Tone ── */}
      <ScrollReveal>
        <h3 className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase mb-3">
          Voice & Tone
        </h3>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-10">
          Six guiding principles
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {voicePrinciples.map((p, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 h-full">
              <span className="font-mono text-xs text-teal/60 block mb-2">{p.num}</span>
              <h4 className="font-heading text-base font-bold text-white mb-2">{p.title}</h4>
              <p className="font-body text-sm text-n300 leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
