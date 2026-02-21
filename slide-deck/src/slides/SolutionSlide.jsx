import { Layers, Zap, GitFork } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { solutionCards } from '../data/slideContent';

const icons = [Layers, Zap, GitFork];

export default function SolutionSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-16 py-12">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Player Education That Players Actually Want
      </h2>

      <div className="flex-1 flex items-center gap-8 mt-8">
        {solutionCards.map((card, i) => {
          const Icon = icons[i];
          const accentColor = card.accent === 'teal' ? 'bg-teal' : 'bg-orange';
          const iconColor = card.accent === 'teal' ? 'text-teal' : 'text-orange';

          return (
            <div
              key={i}
              className="flex-1 bg-navy-light rounded-xl overflow-hidden flex flex-col h-80"
            >
              {/* Top accent line */}
              <div className={`h-1 ${accentColor}`} />

              <div className="flex flex-col gap-4 p-8 flex-1">
                <div className={`w-10 h-10 rounded-lg bg-navy flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>

                <h3 className="font-heading text-xl font-bold text-white leading-tight">
                  {card.title}
                </h3>

                <p className="font-body text-base text-neutral-300 leading-relaxed">
                  {card.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
