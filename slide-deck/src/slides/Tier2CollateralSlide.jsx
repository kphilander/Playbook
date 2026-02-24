import { Heart, Phone, Clock, BarChart3, Shield } from 'lucide-react';
import AccentBar from '../components/AccentBar';

function SupportPageMockup() {
  return (
    <div className="flex-1 bg-white rounded-xl overflow-hidden flex flex-col border border-neutral-700/30">
      <div className="h-1 bg-teal" />
      <div className="p-5 flex flex-col gap-3">
        <span className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-teal">
          Support Page
        </span>
        <h3 className="font-heading text-lg font-bold text-navy leading-tight">
          Free, confidential<br />support — 24/7
        </h3>
        <p className="font-body text-xs text-neutral-500">No judgment. No cost. Just real help.</p>
        <div className="flex flex-col gap-2 mt-1">
          {[
            { icon: Phone, label: 'Call', detail: '1-800-522-4700' },
            { icon: Heart, label: 'Text', detail: '800522' },
            { icon: Shield, label: 'Chat', detail: 'ncpgambling.org' },
          ].map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center gap-2.5 bg-[#F5F5FA] rounded-lg px-3 py-2">
              <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-navy" />
              </div>
              <div>
                <span className="font-heading text-xs font-bold text-navy">{label}</span>
                <span className="font-mono text-[10px] text-neutral-500 ml-2">{detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CooldownMockup() {
  return (
    <div className="flex-1 bg-white rounded-xl overflow-hidden flex flex-col border border-neutral-700/30">
      <div className="h-1 bg-teal" />
      <div className="p-5 flex flex-col items-center text-center gap-3">
        <span className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-teal">
          Cooldown Screen
        </span>
        <div className="w-12 h-12 rounded-full bg-[#00C853] flex items-center justify-center mt-1">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="8 12 11 15 16 9" />
          </svg>
        </div>
        <h3 className="font-heading text-lg font-bold text-navy leading-tight">
          Your account<br />is paused
        </h3>
        <p className="font-body text-xs text-neutral-500">Take all the time you need.</p>
        <div className="bg-[#F5F5FA] rounded-lg px-4 py-2 w-full">
          <span className="font-mono text-sm font-semibold text-navy">Paused for 30 days</span>
        </div>
        <div className="bg-[#F5F5FA] rounded-lg px-4 py-2 w-full mt-1">
          <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-neutral-500">24/7 Support</span>
          <div className="font-mono text-sm font-semibold text-navy">1-800-522-4700</div>
        </div>
      </div>
    </div>
  );
}

function SessionSummaryMockup() {
  return (
    <div className="flex-1 bg-white rounded-xl overflow-hidden flex flex-col border border-neutral-700/30">
      <div className="h-1 bg-teal" />
      <div className="p-5 flex flex-col gap-3">
        <span className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-teal">
          Session Summary
        </span>
        <h3 className="font-heading text-base font-bold text-navy">
          Activity Dashboard
        </h3>
        <div className="flex flex-col gap-2">
          {[
            { icon: Clock, label: 'Time played', value: '2h 15m' },
            { icon: BarChart3, label: 'Sessions', value: '4' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center justify-between bg-[#F5F5FA] rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-neutral-500" />
                <span className="font-body text-xs text-neutral-500">{label}</span>
              </div>
              <span className="font-mono text-sm font-semibold text-navy">{value}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#F5F5FA] rounded-lg px-3 py-2 mt-1">
          <div className="font-heading text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">Limit status</div>
          <div className="w-full h-2 bg-[#E8E8F0] rounded-full overflow-hidden">
            <div className="h-full bg-teal rounded-full" style={{ width: '72%' }} />
          </div>
          <div className="flex justify-between mt-1">
            <span className="font-mono text-[10px] text-neutral-500">$360 / $500</span>
            <span className="font-mono text-[10px] text-teal font-semibold">72%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Tier2CollateralSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <div className="flex items-center gap-4 mt-4">
        <h2 className="font-heading text-4xl font-bold text-white">
          Tier 2 Collateral
        </h2>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold tracking-[0.1em] uppercase bg-white/10 text-neutral-300">
          <Heart className="w-3 h-3" /> Support
        </span>
      </div>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        When the brand shifts to support contexts — calmer surfaces, more white space, no playful elements. 8 production-ready templates.
      </p>

      <div className="flex-1 flex gap-5 mt-7">
        <SupportPageMockup />
        <CooldownMockup />
        <SessionSummaryMockup />
      </div>

      <div className="mt-5 border border-white/10 rounded-lg px-6 py-3">
        <p className="font-body text-sm text-neutral-300">
          <span className="font-heading font-bold text-teal">Tier 2 visual shift:</span> White surfaces replace navy backgrounds. No orange. No gradient bars. Teal used only for CTAs. Helpline always above fold.
        </p>
      </div>
    </div>
  );
}
