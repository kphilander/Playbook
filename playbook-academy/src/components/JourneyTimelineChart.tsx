const TEAL = '#00D4AA';

const PHASES = [
  { phase: 'Awareness', touchpoints: 3, description: 'Companion brand — game education, how-to-play guides, odds explainers' },
  { phase: 'New Player', touchpoints: 6, description: 'Myth-busting — cognitive distortions, "did you know" content, quiz challenges' },
  { phase: 'Active Player', touchpoints: 8, description: 'Deeper game knowledge — strategy, finer points, content hub articles' },
  { phase: 'Regular', touchpoints: 5, description: 'Self-management tools — activity tracking, budgeting, limit-setting' },
  { phase: 'Support', touchpoints: 2, description: 'Tier 2 — direct path to help, no friction, no questions asked' },
];

const MAX_Y = 10;
const CHART_W = 500;
const CHART_H = 240;
const PAD = { top: 20, right: 20, bottom: 40, left: 50 };
const W = CHART_W - PAD.left - PAD.right;
const H = CHART_H - PAD.top - PAD.bottom;

function x(i: number) {
  return PAD.left + (i / (PHASES.length - 1)) * W;
}
function y(v: number) {
  return PAD.top + H - (v / MAX_Y) * H;
}

// Build smooth path using cardinal spline interpolation
function buildPath(phases: typeof PHASES): { line: string; area: string } {
  const pts = phases.map((p, i) => ({ x: x(i), y: y(p.touchpoints) }));

  // Catmull-Rom to cubic Bezier conversion (tension = 0)
  const segments: string[] = [];
  segments.push(`M${pts[0].x},${pts[0].y}`);

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    segments.push(`C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`);
  }

  const line = segments.join(' ');
  const baseline = PAD.top + H;
  const area = `${line} L${pts[pts.length - 1].x},${baseline} L${pts[0].x},${baseline} Z`;

  return { line, area };
}

const { line, area } = buildPath(PHASES);

// Y-axis ticks
const yTicks = [0, 2, 4, 6, 8, 10];

export default function JourneyTimelineChart() {
  return (
    <div className="my-10 rounded-xl border border-n100 bg-white dark:bg-navy dark:border-navy-light shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Module 5 — Customer Journey
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">
          Content Escalation Across the Player Journey
        </h3>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-n700 dark:text-n300 text-sm mb-6 leading-relaxed">
          Content volume peaks at the Active Player stage — that's where education has the most
          surface area. Most players only engage with the first two or three stages.
        </p>

        <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="w-full h-auto" role="img" aria-label="Content escalation chart showing content volume across five player journey stages">
          <defs>
            <linearGradient id="tealFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={TEAL} stopOpacity={0.30} />
              <stop offset="90%" stopColor={TEAL} stopOpacity={0.02} />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {yTicks.map((t) => (
            <line
              key={t}
              x1={PAD.left}
              y1={y(t)}
              x2={CHART_W - PAD.right}
              y2={y(t)}
              stroke="#E8E8F0"
              strokeDasharray="3 3"
            />
          ))}

          {/* Y-axis labels */}
          {yTicks.map((t) => (
            <text
              key={t}
              x={PAD.left - 10}
              y={y(t) + 4}
              textAnchor="end"
              className="fill-n500 dark:fill-n300"
              style={{ fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {t}
            </text>
          ))}

          {/* Y-axis label */}
          <text
            x={14}
            y={PAD.top + H / 2}
            textAnchor="middle"
            transform={`rotate(-90, 14, ${PAD.top + H / 2})`}
            className="fill-n300"
            style={{ fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Content volume
          </text>

          {/* X-axis line */}
          <line x1={PAD.left} y1={PAD.top + H} x2={CHART_W - PAD.right} y2={PAD.top + H} stroke="#E8E8F0" />

          {/* Area fill */}
          <path d={area} fill="url(#tealFill)" />

          {/* Line */}
          <path d={line} fill="none" stroke={TEAL} strokeWidth={3} strokeLinecap="round" />

          {/* Dots and X labels */}
          {PHASES.map((phase, i) => {
            const cx = x(i);
            const cy = y(phase.touchpoints);
            const isMax = phase.touchpoints === 8;
            return (
              <g key={phase.phase}>
                {/* Dot highlight ring */}
                {isMax && <circle cx={cx} cy={cy} r={14} fill={TEAL} fillOpacity={0.12} />}
                {/* Dot */}
                <circle cx={cx} cy={cy} r={isMax ? 5.5 : 4} fill="#FFFFFF" stroke={TEAL} strokeWidth={isMax ? 3 : 2.5} />
                {/* X-axis label */}
                <text
                  x={cx}
                  y={PAD.top + H + 20}
                  textAnchor="middle"
                  className="fill-n500 dark:fill-n300"
                  style={{ fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {phase.phase}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Phase cards */}
        <div className="grid grid-cols-5 gap-2 mt-6 mb-5">
          {PHASES.map((phase) => {
            const isMax = phase.touchpoints === 8;
            return (
              <div
                key={phase.phase}
                className={`text-center p-2.5 rounded-lg border transition-all ${
                  isMax
                    ? 'bg-teal/10 dark:bg-teal/15 border-teal/30'
                    : 'bg-n50 dark:bg-navy-light border-n100 dark:border-navy-light'
                }`}
              >
                <p
                  className={`text-xl font-heading font-bold ${
                    isMax ? 'text-teal' : 'text-navy dark:text-white'
                  }`}
                >
                  {phase.touchpoints}
                </p>
                <p className="text-xs font-heading font-semibold text-n500 dark:text-n300 uppercase tracking-wider mt-0.5 leading-tight">
                  {phase.phase}
                </p>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <p className="text-sm text-n500 dark:text-n300 italic leading-relaxed border-l-2 border-teal pl-4">
          Content peaks at the Active Player stage. Most players engage with Awareness and New Player
          content only — the education does its work regardless of how far they progress.
        </p>
      </div>
    </div>
  );
}
