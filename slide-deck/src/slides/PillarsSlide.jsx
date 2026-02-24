import { Eye, Share2 } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { pillars } from '../data/slideContent';

function PillarCard({ label, icon: Icon, iconColor, badgeBg, data }) {
  return (
    <div className="flex-1 bg-navy-light rounded-xl overflow-hidden flex flex-col">
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Badge */}
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-bold tracking-[0.15em] uppercase text-navy ${badgeBg}`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </span>
        </div>

        {/* Quote */}
        <p className={`font-heading text-2xl font-bold italic text-white mt-2`}>
          &ldquo;{data.tagline}&rdquo;
        </p>

        {/* Description */}
        <p className="font-body text-base text-neutral-300 leading-relaxed">
          {data.description}
        </p>

        {/* Bullet list */}
        <ul className="flex flex-col gap-2.5 mt-2">
          {data.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-1 ${iconColor}`}>&bull;</span>
              <span className="font-body text-base text-neutral-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PillarsSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Two Brand Pillars
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3">
        Every piece of content maps to one or both pillars.
      </p>

      <div className="flex-1 flex gap-6 mt-8">
        <PillarCard
          label="Open"
          icon={Eye}
          iconColor="text-teal"
          badgeBg="bg-teal"
          data={pillars.open}
        />
        <PillarCard
          label="Social"
          icon={Share2}
          iconColor="text-teal"
          badgeBg="bg-teal"
          data={pillars.social}
        />
      </div>
    </div>
  );
}
