import { Printer, MapPin } from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { printFormats } from '../data/slideContent';

export default function PrintSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Print &amp; Environmental
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Land-based venues, community outreach, and everywhere players go.
      </p>

      <div className="flex-1 flex gap-6 mt-8">
        {/* Print formats */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-5">
            <Printer className="w-4 h-4 text-teal" />
            <span className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase">
              Print Formats
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {printFormats.map((f) => (
              <div key={f.format} className="bg-navy-light rounded-lg px-5 py-4 flex items-center gap-4">
                <div className="w-20">
                  <h3 className="font-heading text-base font-bold text-white">{f.format}</h3>
                  <p className="font-mono text-xs text-neutral-500">{f.size}</p>
                </div>
                <div className="w-px h-8 bg-navy" />
                <p className="font-body text-sm text-neutral-300">{f.placement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Venue signage */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-5">
            <MapPin className="w-4 h-4 text-orange" />
            <span className="font-heading text-sm font-bold text-orange tracking-[0.15em] uppercase">
              Venue Signage
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { location: 'Entrance / Exit', content: 'Brand awareness + helpline', priority: 'high' },
              { location: 'Near ATMs / Cashiers', content: 'Budget reminder + helpline', priority: 'high' },
              { location: 'Gaming Floor', content: 'Quiz QR codes, "Know your game"', priority: 'medium' },
            ].map((s) => (
              <div key={s.location} className="bg-navy-light rounded-lg px-5 py-4 flex items-center gap-4">
                <div className="w-36">
                  <h3 className="font-heading text-base font-bold text-white">{s.location}</h3>
                </div>
                <div className="w-px h-8 bg-navy" />
                <p className="font-body text-sm text-neutral-300">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Print rules bar */}
      <div className="flex gap-6 mt-6">
        {[
          { label: 'Min logo', value: '0.25"' },
          { label: 'Min body text', value: '10pt' },
          { label: 'Helpline text', value: '14pt bold' },
          { label: 'QR codes', value: 'Link to digital hub' },
        ].map((r) => (
          <div key={r.label} className="flex flex-col">
            <span className="font-heading text-xs font-bold text-neutral-500 uppercase tracking-wider">{r.label}</span>
            <span className="font-mono text-sm text-teal">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
