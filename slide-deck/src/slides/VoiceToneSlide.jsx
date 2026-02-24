import AccentBar from '../components/AccentBar';
import { voicePrinciples } from '../data/slideContent';

export default function VoiceToneSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Voice &amp; Tone
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        Six non-negotiable principles that apply to every piece of content.
      </p>

      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-5 mt-8">
        {voicePrinciples.map((p) => (
          <div key={p.num} className="bg-navy-light rounded-xl p-6 flex flex-col gap-3">
            <span className="font-mono text-sm font-bold text-teal">{p.num}</span>
            <h3 className="font-heading text-lg font-bold text-white leading-tight">
              {p.title}
            </h3>
            <p className="font-body text-base text-neutral-300 leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom quote */}
      <div className="mt-6 text-center">
        <p className="font-body text-sm text-neutral-500 italic">
          &ldquo;Read it aloud. If it sounds like a friend explaining something interesting — ship it.&rdquo;
        </p>
      </div>
    </div>
  );
}
