import { useState } from 'react';

interface Differentiator {
  id: number;
  title: string;
  summary: string;
  explanation: string;
  borderColor: string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
  icon: JSX.Element;
}

const ITEMS: Differentiator[] = [
  {
    id: 1,
    title: 'Relational, not demographic',
    summary: "A player's age, gender, or location doesn't determine their segment.",
    explanation:
      "Knowledge level, engagement pattern, and behavioral indicators do. A 22-year-old and a 55-year-old who both play recreationally and understand the odds need the same content. Demographics tell you who someone is — relationship tells you what they need.",
    borderColor: 'border-teal/30',
    bgColor: 'bg-teal/5',
    iconBg: 'bg-teal/15',
    iconColor: 'text-teal-dark',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Product-contextual',
    summary: 'A player can be in different segments for different products simultaneously.',
    explanation:
      'A player can be a Recreational casino player and a New/Novice sports bettor at the same time. "Novice" describes their relationship to a specific product, not to gambling in general. It\'s about knowledge + recency with that particular product.',
    borderColor: 'border-orange/30',
    bgColor: 'bg-orange/5',
    iconBg: 'bg-orange/15',
    iconColor: 'text-orange',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Dynamic, not fixed',
    summary: "Segments aren't fixed identities — players move between them.",
    explanation:
      "A New/Novice becomes Recreational as they learn. A Recreational player may show At-Risk indicators during a stressful life period, then return to Recreational. The model is dynamic — it describes where someone is now, not who they are permanently.",
    borderColor: 'border-navy/30',
    bgColor: 'bg-navy/5',
    iconBg: 'bg-navy/15',
    iconColor: 'text-navy',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function ModelDifferentiators() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {ITEMS.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`text-left rounded-xl border-2 ${item.borderColor} ${item.bgColor} p-4 shadow-sm transition-all hover:shadow-md cursor-pointer`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
                  {item.icon}
                </span>
                <p className="font-heading font-bold text-navy text-sm">{item.title}</p>
              </div>
              <p className="text-sm text-n700 leading-relaxed">{item.summary}</p>
              {isExpanded && (
                <div className={`mt-3 pt-3 border-t ${item.borderColor}`}>
                  <p className="text-sm text-n700 leading-relaxed">{item.explanation}</p>
                </div>
              )}
              <p className={`text-xs font-heading font-semibold mt-2 transition-colors ${isExpanded ? 'text-n400' : 'text-teal-dark'}`}>
                {isExpanded ? 'Tap to collapse' : 'Tap to learn more'}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
