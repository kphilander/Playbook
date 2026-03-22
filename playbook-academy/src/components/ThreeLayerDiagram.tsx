import { useState } from 'react';

/**
 * Interactive SVG diagram of the three-layer RG framework:
 * Compliance (floor) → Public Health (population) → Informed Choice (individual).
 * Hover/tap each layer to see its definition and examples.
 */

const LAYERS = [
  {
    id: 'informed-choice',
    label: 'Informed Choice',
    subtitle: 'Individual Empowerment',
    color: '#00D4AA',
    darkColor: '#00A888',
    y: 20,
    height: 80,
    description: 'Equip individual players with information and tools so they can make their own decisions. This is Playbook\'s primary operating layer — the 95% of content.',
    examples: ['Game odds explainers', 'Budget-setting tools', 'Session history dashboards', 'Myth-busting content'],
  },
  {
    id: 'public-health',
    label: 'Public Health',
    subtitle: 'Population Level',
    color: '#FF6B35',
    darkColor: '#E55A2B',
    y: 110,
    height: 70,
    description: 'Address gambling harm at the population level through research, awareness campaigns, and prevalence monitoring. Useful context for content strategy, but not Playbook\'s primary lens.',
    examples: ['Prevalence studies', 'National awareness weeks', 'Youth gambling research', 'Advertising impact analysis'],
  },
  {
    id: 'compliance',
    label: 'Compliance',
    subtitle: 'The Floor',
    color: '#1B2838',
    darkColor: '#2A3F56',
    y: 190,
    height: 60,
    description: 'Meet legal and regulatory requirements. Every operator must do this — it\'s the floor, not the ceiling. Helpline display, age verification, self-exclusion options.',
    examples: ['Mandatory helpline display', 'Age verification', 'Self-exclusion options', 'Regulatory disclosures'],
  },
];

export default function ThreeLayerDiagram() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const active = LAYERS.find((l) => l.id === activeLayer);

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Diagram
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">The Three-Layer Framework</h3>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* SVG Diagram */}
          <div className="lg:w-1/2">
            <svg viewBox="0 0 400 270" className="w-full" role="img" aria-label="Three-layer RG framework diagram showing Informed Choice at the top, Public Health in the middle, and Compliance at the bottom">
              {LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;
                return (
                  <g key={layer.id}>
                    <rect
                      x="20"
                      y={layer.y}
                      width="360"
                      height={layer.height}
                      rx="8"
                      fill={layer.color}
                      opacity={activeLayer && !isActive ? 0.3 : 1}
                      stroke={isActive ? '#00D4AA' : 'transparent'}
                      strokeWidth={isActive ? 3 : 0}
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setActiveLayer(layer.id)}
                      onMouseLeave={() => setActiveLayer(null)}
                      onClick={() => setActiveLayer(isActive ? null : layer.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${layer.label}: ${layer.subtitle}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveLayer(isActive ? null : layer.id);
                        }
                      }}
                    />
                    <text
                      x="200"
                      y={layer.y + layer.height / 2 - 8}
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Inter, sans-serif"
                      fontWeight="700"
                      fontSize="16"
                      className="pointer-events-none select-none"
                    >
                      {layer.label}
                    </text>
                    <text
                      x="200"
                      y={layer.y + layer.height / 2 + 12}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.7)"
                      fontFamily="Inter, sans-serif"
                      fontWeight="400"
                      fontSize="12"
                      className="pointer-events-none select-none"
                    >
                      {layer.subtitle}
                    </text>
                  </g>
                );
              })}
              {/* Arrow connecting layers */}
              <text x="10" y="105" fill="#A8A8C0" fontSize="18" className="select-none">↑</text>
              <text x="10" y="185" fill="#A8A8C0" fontSize="18" className="select-none">↑</text>
            </svg>
          </div>

          {/* Detail Panel */}
          <div className="lg:w-1/2" aria-live="polite">
            {active ? (
              <div className="animate-fade-in">
                <div
                  className="w-3 h-3 rounded-full mb-3"
                  style={{ backgroundColor: active.color }}
                />
                <h4 className="font-heading font-bold text-navy text-lg mb-1">{active.label}</h4>
                <p className="text-xs font-heading text-n500 uppercase tracking-wider mb-3">{active.subtitle}</p>
                <p className="text-sm text-n700 leading-relaxed mb-4">{active.description}</p>
                <div>
                  <p className="text-xs font-heading font-semibold text-navy mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {active.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-sm text-n700">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: active.color }} />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center py-8">
                <p className="text-sm text-n400 font-heading">
                  Hover or tap a layer to explore its role in the framework.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
