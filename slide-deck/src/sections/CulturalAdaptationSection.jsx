import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { Globe } from 'lucide-react';

const dimensions = [
  { key: 'voice',      label: 'Voice',      options: ['peer', 'authority', 'elder'] },
  { key: 'framing',    label: 'Framing',    options: ['individual', 'communal'] },
  { key: 'humor',      label: 'Humor',      options: ['irreverent', 'warm', 'understated', 'minimal'] },
  { key: 'directness', label: 'Directness', options: ['blunt', 'diplomatic', 'contextual'] },
  { key: 'comfort',    label: 'Comfort',    options: ['open', 'reserved', 'private'] },
];

const samples = [
  {
    id: 'O-1', label: 'Tagline',
    default: 'Here\u2019s how it actually works.',
    voice: { authority: 'Understanding how it works \u2014 backed by the data.', elder: 'Let me show you how this really works.' },
    humor: { warm: 'We\u2019ve all wondered how it works. Turns out, it\u2019s worth knowing.', understated: 'It works a certain way. We thought you might like to see.', minimal: 'How it works.' },
    framing: { communal: 'Here\u2019s how it works \u2014 and why it matters beyond the table.' },
    directness: { diplomatic: 'A closer look at how it really works.', contextual: 'Most players never look into how it works. The ones who do tend to play differently.' },
    comfort: { reserved: 'Here\u2019s what the numbers actually say.', private: 'Understanding the mechanics behind the math.' },
  },
  {
    id: 'T-1', label: 'Tagline',
    default: 'Your tools. Your rules.',
    voice: { authority: 'Professional-grade tools. Player-defined settings.', elder: 'These are your tools. You set the rules.' },
    humor: { warm: 'We built the tools. You set the rules. Seems fair.', understated: 'Your tools. Your rules. We didn\u2019t see the need to complicate it.', minimal: 'Your tools. Your parameters.' },
    framing: { communal: 'Tools that protect more than just your bankroll.' },
    comfort: { reserved: 'Your tools. Your boundaries.', private: 'Your resources. Your preferences.' },
  },
  {
    id: 'O-6', label: 'Tagline',
    default: 'The house always has an edge. Now you know what it is.',
    voice: { authority: 'The house edge is a mathematical certainty. Here are the precise figures.', elder: 'I\u2019ve seen enough to know \u2014 the house always has an edge. Let me show you what it is.' },
    humor: { warm: 'The house has an edge. We\u2019ve all heard that. Here\u2019s what it actually looks like.', understated: 'The house, it\u2019s fair to say, has done the maths. Here are the results.', minimal: 'The house edge, quantified.' },
    framing: { communal: 'The house always has an edge. The people counting on you deserve to know what it is.' },
    directness: { diplomatic: 'Every game is designed with a house advantage. Here\u2019s how it breaks down.', contextual: 'You\u2019ve heard \u2018the house always wins.\u2019 There\u2019s a specific number behind that phrase.' },
    comfort: { reserved: 'Every business has a margin. Here\u2019s this one.', private: 'Every system has a built-in advantage. Here are the numbers.' },
  },
  {
    id: 'HS-1', label: 'CTA',
    default: 'Talk to someone \u2014 free and confidential',
    voice: { authority: 'Reach free, confidential professional support', elder: 'Talk to someone who understands \u2014 it\u2019s free and private' },
    framing: { communal: 'Help is here \u2014 for your sake and for those counting on you' },
    directness: { diplomatic: 'Free, confidential support is available when you\u2019re ready', contextual: 'Sometimes it helps to talk. It\u2019s free and completely confidential' },
    comfort: { reserved: 'Speak with a trained advisor \u2014 free and confidential', private: 'Confidential support is available \u2014 free, anytime' },
  },
];

function resolveMessage(msg, profile) {
  for (const dim of dimensions) {
    const val = profile[dim.key];
    const defaultVal = dim.options[0];
    if (val !== defaultVal && msg[dim.key] && msg[dim.key][val]) {
      return { text: msg[dim.key][val], dim: dim.label, val };
    }
  }
  return { text: msg.default, dim: null, val: null };
}

export default function CulturalAdaptationSection() {
  const [profile, setProfile] = useState({
    voice: 'peer', framing: 'individual', humor: 'irreverent',
    directness: 'blunt', comfort: 'open',
  });

  const isDefault = dimensions.every((d) => profile[d.key] === d.options[0]);

  function handleChange(key, val) {
    setProfile((p) => ({ ...p, [key]: val }));
  }

  return (
    <div className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-6xl mx-auto">
      <SectionHeading
        label="Localization"
        title="Cultural"
        titleAccent="Adaptation"
        subtitle="Five dimensions adapt how the voice speaks. They never change what it stands for. Toggle each dimension to see the voice shift in real time."
      />

      <ScrollReveal>
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
          {/* Dimension toggles */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8 pb-6 border-b border-white/[0.06]">
            {dimensions.map((dim) => (
              <div key={dim.key} className="flex flex-col gap-1.5">
                <span className="font-heading text-xs font-bold text-n300 tracking-[0.15em] uppercase">
                  {dim.label}
                </span>
                <div className="flex gap-1">
                  {dim.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleChange(dim.key, opt)}
                      className={`px-2.5 py-1 rounded text-xs font-heading font-semibold transition-all duration-200 cursor-pointer
                        ${opt === profile[dim.key]
                          ? 'bg-teal text-navy'
                          : 'bg-navy-light text-n300 hover:text-n300'
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {!isDefault && (
              <button
                onClick={() => setProfile({ voice: 'peer', framing: 'individual', humor: 'irreverent', directness: 'blunt', comfort: 'open' })}
                className="self-end font-heading text-xs text-n300 hover:text-teal transition-colors cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>

          {/* Live previews */}
          <div className="space-y-3">
            {samples.map((msg) => {
              const resolved = resolveMessage(msg, profile);
              const changed = resolved.dim !== null;
              return (
                <div
                  key={msg.id}
                  className={`rounded-lg px-5 py-3.5 transition-all duration-300 ${
                    changed ? 'bg-navy-light ring-1 ring-teal/20' : 'bg-navy-light/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-xs text-n300">{msg.id}</span>
                    <span className="font-heading text-xs text-n300 tracking-[0.1em] uppercase">{msg.label}</span>
                    {changed && (
                      <span className="font-heading text-xs font-semibold text-teal tracking-[0.1em] uppercase ml-auto">
                        {resolved.dim}: {resolved.val}
                      </span>
                    )}
                  </div>
                  <p className={`font-body text-base leading-relaxed transition-colors duration-300 ${
                    changed ? 'text-white' : 'text-n300'
                  }`}>
                    {resolved.text}
                  </p>
                  {changed && (
                    <p className="font-body text-xs text-n300 mt-1.5 italic">
                      Default: {msg.default}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Stats footer */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/[0.06]">
            <Globe size={14} className="text-teal" />
            <span className="font-mono text-xs text-n300">
              217 messages &middot; 1,254 variants across 5 dimensions
            </span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
