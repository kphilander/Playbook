import { Monitor, Smartphone, Mail, MessageCircle } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { digitalTouchpoints } from '../data/slideContent';

const channelIcons = [Monitor, Smartphone, Mail, MessageCircle];
const channelColors = ['text-teal', 'text-orange', 'text-teal', 'text-orange'];

export default function DigitalAppsSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Digital Applications
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Integration over isolation. Content woven into the player experience, not siloed into a compliance page.
      </p>

      <div className="flex-1 flex flex-col gap-5 mt-8">
        {digitalTouchpoints.map((tp, i) => {
          const Icon = channelIcons[i];
          const color = channelColors[i];
          return (
            <div key={tp.channel} className="bg-navy-light rounded-xl px-6 py-5 flex items-center gap-5">
              <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center shrink-0">
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">{tp.channel}</h3>
                <p className="font-body text-base text-neutral-300 mt-1">{tp.integration}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Integration test */}
      <div className="mt-6 border border-teal/30 rounded-lg px-6 py-3">
        <p className="font-body text-sm text-neutral-300">
          <span className="font-heading font-bold text-teal">The test:</span> If a player can use your platform for a full session without encountering Playbook content unless they actively look for it, the integration has failed.
        </p>
      </div>
    </div>
  );
}
