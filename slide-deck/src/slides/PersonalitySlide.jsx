import { Zap, Heart } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { archetypes, personalitySpectrum } from '../data/slideContent';

function ArchetypeCard({ data, icon: Icon, accentColor, accentBg }) {
  return (
    <div className="flex-1 bg-navy-light rounded-xl overflow-hidden">
      <div className="p-7 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-bold tracking-[0.15em] uppercase text-navy ${accentBg}`}>
            <Icon className="w-3.5 h-3.5" />
            {data.role}
          </span>
        </div>

        <h3 className="font-heading text-2xl font-bold text-white">{data.name}</h3>
        <p className={`font-body text-sm italic ${accentColor}`}>{data.tagline}</p>

        <ul className="flex flex-col gap-2 mt-1">
          {data.traits.map((trait, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-1 ${accentColor}`}>&bull;</span>
              <span className="font-body text-base text-neutral-300">{trait}</span>
            </li>
          ))}
        </ul>

        <div className="mt-2 bg-navy rounded-lg p-3">
          <p className="font-body text-base text-neutral-300 italic leading-relaxed">{data.example}</p>
        </div>
      </div>
    </div>
  );
}

export default function PersonalitySlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Brand Personality
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3">
        One voice. Two modes. Always consistent.
      </p>

      <div className="flex-1 flex gap-6 mt-6">
        <ArchetypeCard data={archetypes.sharp} icon={Zap} accentColor="text-teal" accentBg="bg-teal" />
        <ArchetypeCard data={archetypes.friend} icon={Heart} accentColor="text-orange" accentBg="bg-orange" />

        {/* Personality spectrum sidebar */}
        <div className="w-56 flex flex-col gap-3">
          <span className="font-heading text-sm font-bold text-neutral-500 tracking-[0.15em] uppercase mb-1">
            The Spectrum
          </span>
          {personalitySpectrum.map((pair, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-heading text-sm font-bold text-teal w-24 text-right">{pair.is}</span>
              <div className="w-px h-4 bg-neutral-500" />
              <span className="font-heading text-sm text-neutral-500">Not {pair.not}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
