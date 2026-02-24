import { Calendar, Megaphone, Share2 } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { campaigns } from '../data/slideContent';

const campaignAccents = [
  { bar: 'bg-teal', text: 'text-teal' },
  { bar: 'bg-orange', text: 'text-orange' },
  { bar: 'bg-teal', text: 'text-teal' },
  { bar: 'bg-orange', text: 'text-orange' },
  { bar: 'bg-teal', text: 'text-teal' },
  { bar: 'bg-orange', text: 'text-orange' },
];

export default function CampaignSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Campaign Library
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Six ready-to-run campaigns with day-by-day schedules, channel specs, and asset templates.
      </p>

      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-5 mt-8">
        {campaigns.map((c, i) => {
          const accent = campaignAccents[i];
          return (
            <div key={c.name} className="bg-navy-light rounded-xl overflow-hidden flex flex-col">
              <div className={`h-1.5 ${accent.bar}`} />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Megaphone className={`w-4 h-4 ${accent.text}`} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white leading-tight">{c.name}</h3>
                    <div className="flex gap-3 mt-1.5">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-neutral-500" />
                        <span className="font-mono text-xs text-neutral-400">{c.duration}</span>
                      </div>
                      <span className="font-mono text-xs text-neutral-400">{c.posts} posts</span>
                    </div>
                  </div>
                </div>
                <p className="font-body text-sm text-neutral-300 mt-3 leading-relaxed flex-1">{c.desc}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <Share2 className="w-3 h-3 text-neutral-500" />
                  <span className="font-mono text-xs text-neutral-500">{c.channels}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Myth busting note */}
      <div className="mt-6 bg-navy-light rounded-lg px-6 py-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
          <span className="font-heading text-lg font-bold text-teal">18</span>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold text-white">Myth-Busting Library</h3>
          <p className="font-body text-sm text-neutral-300">
            18 myths with 3 formats each — social card, article explainer, and quiz question.
            Covering slots, table games, sports betting, lottery, and general misconceptions.
          </p>
        </div>
      </div>
    </div>
  );
}
