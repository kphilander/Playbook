import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const NAVY = '#1B2838';
const TEAL = '#00D4AA';

const DATA = [
  {
    metric: 'Player Awareness\nof RG Tools',
    metricShort: 'Awareness',
    industry: 15,
    playbook: 65,
  },
  {
    metric: 'Voluntary Tool\nAdoption',
    metricShort: 'Tool Adoption',
    industry: 3,
    playbook: 22,
  },
  {
    metric: 'Content\nEngagement Rate',
    metricShort: 'Engagement',
    industry: 0.5,
    playbook: 8,
  },
];

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-navy-dark border border-n100 dark:border-navy-light rounded-lg px-4 py-3 shadow-lg">
      <p className="font-heading font-semibold text-navy dark:text-white text-sm mb-1.5">
        {label}
      </p>
      {payload.map((entry: any) => (
        <p key={entry.name} className="text-sm text-n700 dark:text-n300 flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
            style={{ backgroundColor: entry.color }}
          />
          <span>{entry.name}:</span>
          <span className="font-semibold">{entry.value}%</span>
        </p>
      ))}
    </div>
  );
}

export default function EngagementGapChart() {
  return (
    <div className="my-10 rounded-xl border border-n100 bg-white dark:bg-navy dark:border-navy-light shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Module 1 — RG Foundations
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">
          The Engagement Gap
        </h3>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-n700 dark:text-n300 text-sm mb-6 leading-relaxed">
          Three metrics that define the gap between what the industry delivers and what players
          actually use. The Playbook approach closes this gap through design, not volume.
        </p>

        <ResponsiveContainer width="100%" height={340}>
          <BarChart
            data={DATA}
            margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
            barCategoryGap="25%"
            barGap={6}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E8F0" vertical={false} />
            <XAxis
              dataKey="metricShort"
              tick={{ fontSize: 12, fill: '#6B6B8A', fontFamily: 'Inter, system-ui, sans-serif' }}
              axisLine={{ stroke: '#E8E8F0' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6B6B8A', fontFamily: 'Inter, system-ui, sans-serif' }}
              axisLine={false}
              tickLine={false}
              unit="%"
              domain={[0, 70]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
            <Legend
              wrapperStyle={{ fontSize: 13, fontFamily: 'Inter, system-ui, sans-serif' }}
              iconType="square"
              iconSize={12}
            />
            <Bar
              dataKey="industry"
              name="Industry Average"
              fill={NAVY}
              radius={[4, 4, 0, 0]}
              maxBarSize={56}
            />
            <Bar
              dataKey="playbook"
              name="Playbook Approach"
              fill={TEAL}
              radius={[4, 4, 0, 0]}
              maxBarSize={56}
            />
          </BarChart>
        </ResponsiveContainer>

        {/* Value callouts */}
        <div className="grid grid-cols-3 gap-3 mt-6 mb-5">
          {DATA.map((d) => (
            <div
              key={d.metricShort}
              className="text-center p-3 rounded-lg bg-n50 dark:bg-navy-light border border-n100 dark:border-navy-light"
            >
              <p className="text-xs font-heading font-semibold text-n500 dark:text-n300 uppercase tracking-wider mb-1">
                {d.metricShort}
              </p>
              <p className="text-sm text-n700 dark:text-n300">
                <span className="font-heading font-bold text-navy dark:text-white">
                  {d.industry}%
                </span>
                <span className="mx-1.5 text-n300">&rarr;</span>
                <span className="font-heading font-bold text-teal-text dark:text-teal">{d.playbook}%</span>
              </p>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="text-sm text-n500 dark:text-n300 italic leading-relaxed border-l-2 border-teal pl-4">
          The engagement gap: most RG content goes unread because it isn't designed for the player.
        </p>
      </div>
    </div>
  );
}
