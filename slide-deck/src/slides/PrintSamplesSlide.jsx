import { Phone } from 'lucide-react';
import AccentBar from '../components/AccentBar';

function PosterMockup() {
  return (
    <div className="flex-1 bg-navy-light rounded-xl overflow-hidden flex flex-col">
      <div className="h-1.5 bg-teal" />
      <div className="flex-1 flex flex-col p-8 justify-between">
        <div>
          <span className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-teal">
            Poster — A2 / 18&times;24&quot;
          </span>
          <p className="font-body text-sm text-neutral-500 mt-1">Entrances, restrooms, ATMs</p>
          <div className="mt-5 bg-navy rounded-xl p-8 flex flex-col items-center">
            <span className="font-heading text-2xl font-extrabold text-white">Play</span>
            <span className="font-heading text-xl font-light tracking-[0.15em] text-teal">BOOK</span>
            <h3 className="font-heading text-2xl font-bold text-white text-center mt-6 leading-snug">
              Think you&apos;ve got<br />a system?
            </h3>
            <p className="font-body text-base text-neutral-300 text-center mt-3">
              The house has one too.<br />It&apos;s called math.
            </p>
            <div className="mt-6 rounded-lg bg-teal px-6 py-2.5">
              <span className="font-heading text-sm font-semibold text-navy">Scan to take the quiz</span>
            </div>
            <div className="mt-4 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              <span className="font-mono text-xs text-navy">QR</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <Phone className="w-3.5 h-3.5 text-neutral-500" />
          <span className="font-mono text-sm text-neutral-400">1-800-522-4700</span>
        </div>
      </div>
    </div>
  );
}

function RackCardMockup() {
  return (
    <div className="flex-1 bg-navy-light rounded-xl overflow-hidden flex flex-col">
      <div className="h-1.5 bg-orange" />
      <div className="flex-1 flex flex-col p-8 justify-between">
        <div>
          <span className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-orange">
            Rack Card — 4&times;9&quot;
          </span>
          <p className="font-body text-sm text-neutral-500 mt-1">Exits, host desks</p>
          <div className="mt-5 bg-navy rounded-xl p-6 flex flex-col items-center max-w-[240px] mx-auto">
            <span className="font-heading text-2xl font-extrabold text-white">Play</span>
            <span className="font-heading text-xl font-light tracking-[0.15em] text-teal">BOOK</span>
            <h3 className="font-heading text-xl font-bold text-white text-center mt-5 leading-snug">
              Think &ldquo;hot&rdquo;<br />machines pay more?
            </h3>
            <p className="font-body text-base text-neutral-300 text-center mt-3">
              Every spin is independent.<br />The machine doesn&apos;t remember<br />your last bet.
            </p>
            <div className="mt-5 rounded-lg bg-orange px-5 py-2">
              <span className="font-heading text-sm font-semibold text-white">Get the facts</span>
            </div>
            <div className="mt-3 w-14 h-14 bg-white rounded-lg flex items-center justify-center">
              <span className="font-mono text-xs text-navy">QR</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <Phone className="w-3.5 h-3.5 text-neutral-500" />
          <span className="font-mono text-sm text-neutral-400">1-800-522-4700</span>
        </div>
      </div>
    </div>
  );
}

export default function PrintSamplesSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Print Samples
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Ready-to-adapt templates for venue signage, info desks, and community outreach.
      </p>

      <div className="flex-1 flex gap-6 mt-8">
        <PosterMockup />
        <RackCardMockup />
      </div>
    </div>
  );
}
