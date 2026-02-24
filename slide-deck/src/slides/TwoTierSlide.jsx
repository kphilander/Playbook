import { Sparkles, Heart } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { twoTiers } from '../data/slideContent';

function TierCard({ tier, icon: Icon, accentColor, accentBg, borderColor }) {
  return (
    <div className={`flex-1 bg-navy-light rounded-xl overflow-hidden border-t-2 ${borderColor}`}>
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-bold tracking-[0.15em] uppercase text-navy ${accentBg}`}>
            <Icon className="w-3.5 h-3.5" />
            {tier.label}
          </span>
          <span className={`font-heading text-3xl font-extrabold ${accentColor}`}>{tier.pct}</span>
        </div>

        <h3 className="font-heading text-2xl font-bold text-white">{tier.title}</h3>
        <p className="font-body text-sm text-neutral-300 italic">{tier.voice}</p>

        <ul className="flex flex-col gap-2.5 mt-2">
          {tier.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-1 ${accentColor}`}>&bull;</span>
              <span className="font-body text-base text-neutral-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TwoTierSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        The Two-Tier System
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Different audiences, different emotional states, different needs. Respect the context.
      </p>

      <div className="flex-1 flex gap-6 mt-8">
        <TierCard
          tier={twoTiers.tier1}
          icon={Sparkles}
          accentColor="text-teal"
          accentBg="bg-teal"
          borderColor="border-teal"
        />
        <TierCard
          tier={twoTiers.tier2}
          icon={Heart}
          accentColor="text-orange"
          accentBg="bg-orange"
          borderColor="border-orange"
        />
      </div>
    </div>
  );
}
