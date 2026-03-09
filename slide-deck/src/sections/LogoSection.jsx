import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { Download } from 'lucide-react';

const BASE = import.meta.env.BASE_URL || '/';

const logoVariants = [
  { file: 'logo-horizontal-full-color.svg', name: 'Horizontal — Full Color', bg: 'bg-white', text: 'dark' },
  { file: 'logo-horizontal-on-light.svg', name: 'Horizontal — On Light', bg: 'bg-n50', text: 'dark' },
  { file: 'logo-horizontal-reversed.svg', name: 'Horizontal — Reversed', bg: 'bg-navy', text: 'light' },
  { file: 'logo-horizontal-mono-dark.svg', name: 'Horizontal — Mono Dark', bg: 'bg-white', text: 'dark' },
  { file: 'logo-horizontal-mono-white.svg', name: 'Horizontal — Mono White', bg: 'bg-navy', text: 'light' },
  { file: 'logo-stacked-full-color.svg', name: 'Stacked — Full Color', bg: 'bg-white', text: 'dark' },
  { file: 'logo-stacked-on-light.svg', name: 'Stacked — On Light', bg: 'bg-n50', text: 'dark' },
  { file: 'logo-stacked-reversed.svg', name: 'Stacked — Reversed', bg: 'bg-navy', text: 'light' },
  { file: 'logo-stacked-mono-dark.svg', name: 'Stacked — Mono Dark', bg: 'bg-white', text: 'dark' },
  { file: 'logo-stacked-mono-white.svg', name: 'Stacked — Mono White', bg: 'bg-navy', text: 'light' },
];

const specialLogos = [
  { file: 'favicon.svg', name: 'Favicon', bg: 'bg-navy' },
  { file: 'favicon-reversed.svg', name: 'Favicon Reversed', bg: 'bg-white' },
  { file: 'favicon-mono-white.svg', name: 'Favicon Mono', bg: 'bg-navy' },
  { file: 'helpline-badge-light.svg', name: 'Helpline Badge — Light', bg: 'bg-navy' },
  { file: 'helpline-badge-dark.svg', name: 'Helpline Badge — Dark', bg: 'bg-white' },
];

function LogoCard({ logo }) {
  return (
    <div className="group rounded-xl border border-white/[0.06] overflow-hidden">
      <div className={`${logo.bg} p-8 flex items-center justify-center min-h-[120px] relative`}>
        <img
          src={`${BASE}assets/logos/${logo.file}`}
          alt={`${logo.name} logo variant`}
          className="max-h-16 max-w-full object-contain"
        />
        {/* Download overlay — visible on hover AND focus */}
        <a
          href={`${BASE}assets/logos/${logo.file}`}
          download={logo.file}
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0
            group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200"
          aria-label={`Download ${logo.name} (${logo.file})`}
        >
          <Download size={20} className="text-white" />
        </a>
      </div>
      <div className="px-4 py-3 bg-white/[0.02]">
        <p className="font-heading text-xs font-medium text-n300">{logo.name}</p>
        <p className="font-mono text-[10px] text-n500 mt-0.5">{logo.file}</p>
      </div>
    </div>
  );
}

export default function LogoSection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Visual Identity"
        title="Logo"
        titleAccent="System"
        subtitle="The PlayBOOK wordmark combines bold confidence (Play) with open accessibility (BOOK). Available in 10 primary variants plus favicons and badges."
      />

      {/* Wordmark construction */}
      <ScrollReveal className="mb-16">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl select-none mb-6">
            <span className="font-extrabold text-white">Play</span>
            <span className="font-light text-teal">BOOK</span>
          </h1>
          <div className="flex items-center justify-center gap-8 text-xs font-mono text-n300">
            <span><span className="text-white font-bold">Play</span> — Inter 800</span>
            <span className="text-n500">|</span>
            <span><span className="text-teal font-light">BOOK</span> — Inter 300</span>
          </div>
        </div>
      </ScrollReveal>

      {/* Logo variants grid */}
      <ScrollReveal>
        <h3 className="font-heading text-lg font-bold text-white mb-6">Primary Variants</h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {logoVariants.map((logo, i) => (
          <ScrollReveal key={i} delay={i * 50}>
            <LogoCard logo={logo} />
          </ScrollReveal>
        ))}
      </div>

      {/* Special logos */}
      <ScrollReveal>
        <h3 className="font-heading text-lg font-bold text-white mb-6">Favicons & Badges</h3>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {specialLogos.map((logo, i) => (
          <ScrollReveal key={i} delay={i * 50}>
            <LogoCard logo={logo} />
          </ScrollReveal>
        ))}
      </div>

      {/* Clear space */}
      <ScrollReveal>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold text-white mb-4">Clear Space</h3>
          <p className="font-body text-sm text-n300 leading-relaxed mb-6">
            Maintain a minimum clear space equal to the height of the "B" in BOOK on all sides of the logo.
            Never crop, rotate, distort, or add effects to the wordmark.
          </p>
          <div className="bg-navy-light rounded-lg p-12 flex items-center justify-center">
            <div className="border-2 border-dashed border-teal/30 p-8 rounded">
              <span className="font-heading text-3xl">
                <span className="font-extrabold text-white">Play</span>
                <span className="font-light text-teal">BOOK</span>
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
