import { Unlock, GitFork, Users, RefreshCw, ArrowRight } from 'lucide-react';
import AccentBar from '../components/AccentBar';

export default function GovernanceSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Governance &amp; Evolution
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        CC0 Public Domain. You own your brand implementation — we keep the upstream system sharp.
      </p>

      <div className="flex-1 flex gap-6 mt-8">
        {/* Left column — Ownership model */}
        <div className="flex-1 flex flex-col gap-5">
          {/* CC0 License */}
          <div className="bg-navy-light rounded-xl p-5 flex gap-5">
            <div className="w-12 h-12 rounded-lg bg-teal/15 flex items-center justify-center shrink-0">
              <Unlock className="w-6 h-6 text-teal" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">CC0 1.0 Universal</h3>
              <p className="font-body text-sm text-neutral-300 mt-1 leading-relaxed">
                Public domain — copy, modify, distribute, and use for any purpose including commercial, without permission or attribution.
                Player education is too important for licensing friction.
              </p>
            </div>
          </div>

          {/* You control your brand */}
          <div className="bg-navy-light rounded-xl p-5 flex gap-5">
            <div className="w-12 h-12 rounded-lg bg-orange/15 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-orange" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">You Control Your Brand</h3>
              <p className="font-body text-sm text-neutral-300 mt-1 leading-relaxed">
                Fork the repo, edit <span className="font-mono text-teal">_brand.yml</span>, and deploy under your name.
                Your team owns every brand decision — colors, voice, messaging, and how it shows up in your product.
              </p>
            </div>
          </div>

          {/* Expert updates */}
          <div className="bg-navy-light rounded-xl p-5 flex gap-5">
            <div className="w-12 h-12 rounded-lg bg-teal/15 flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6 text-teal" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Expert-Maintained Upstream</h3>
              <p className="font-body text-sm text-neutral-300 mt-1 leading-relaxed">
                RG experts maintain the core system — new research, updated messaging frameworks, jurisdiction modules, and accessibility improvements.
                Pull what you want, when you want.
              </p>
            </div>
          </div>
        </div>

        {/* Right column — Open source benefits */}
        <div className="w-80 flex flex-col gap-5">
          <div className="flex items-center gap-2 mb-1">
            <GitFork className="w-4 h-4 text-teal" />
            <span className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase">
              Open Source Benefits
            </span>
          </div>

          {[
            { title: 'Shared Development', desc: 'Every operator improvement can benefit the whole community. New campaigns, translations, and jurisdiction modules flow upstream.' },
            { title: 'No Vendor Lock-in', desc: 'No contracts, no SaaS fees, no approval workflows. The code is yours permanently.' },
            { title: 'Industry Standard', desc: 'One shared foundation means consistent quality across operators — players benefit everywhere.' },
            { title: 'Evolve at Your Pace', desc: 'Adopt updates on your schedule. Cherry-pick features. Skip what doesn\'t fit your market.' },
          ].map((item, i) => (
            <div key={item.title} className="bg-navy-light rounded-lg px-5 py-4">
              <h3 className="font-heading text-sm font-bold text-white">{item.title}</h3>
              <p className="font-body text-sm text-neutral-300 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
