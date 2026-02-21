import { GitFork, FileCode, MessageSquare, Rocket, ArrowRight, Phone } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { getStartedSteps } from '../data/slideContent';

const stepIcons = [GitFork, FileCode, MessageSquare, Rocket];

export default function GetStartedSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col items-center justify-center px-16 py-12">
      <AccentBar />

      <h2 className="font-heading text-[44px] font-bold text-white text-center mt-4">
        Start Building.
      </h2>

      {/* Steps */}
      <div className="flex items-start gap-4 mt-14">
        {getStartedSteps.map((step, i) => {
          const Icon = stepIcons[i];
          return (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center w-44">
                {/* Circle with icon */}
                <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white text-center">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-neutral-300 text-center mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow connector */}
              {i < getStartedSteps.length - 1 && (
                <div className="flex items-center h-14">
                  <ArrowRight className="w-5 h-5 text-neutral-500" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* URL */}
      <p className="font-mono text-3xl font-bold text-teal mt-14">
        playbook.org
      </p>
      <p className="font-body text-sm text-neutral-500 mt-3">
        Open Source &middot; CC0 Public Domain &middot; No Licensing Fees
      </p>

      {/* Helpline footer */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-navy-light flex items-center justify-center gap-2">
        <Phone className="w-3.5 h-3.5 text-neutral-300" />
        <span className="font-mono text-sm text-neutral-300">
          Free, confidential support 24/7 — 1-800-522-4700
        </span>
      </div>
    </div>
  );
}
