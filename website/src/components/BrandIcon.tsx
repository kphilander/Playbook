/**
 * BrandIcon — inline SVG icons from the Playbook brand system.
 * Uses currentColor for stroke so the parent controls color via CSS/style.
 */

interface BrandIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const icons: Record<string, React.ReactNode> = {
  roulette: (
    <g>
      <g strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></g>
      <g strokeWidth="1">
        <line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/>
        <line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/>
        <line x1="5.6" y1="5.6" x2="9.2" y2="9.2"/><line x1="14.8" y1="14.8" x2="18.4" y2="18.4"/>
        <line x1="18.4" y1="5.6" x2="14.8" y2="9.2"/><line x1="5.6" y1="18.4" x2="9.2" y2="14.8"/>
        <circle cx="17" cy="5.5" r="1" fill="currentColor" stroke="none"/>
        <path d="M12 1.5l-1.2 2h2.4z" fill="currentColor" stroke="none"/>
      </g>
    </g>
  ),
  dice: (
    <g>
      <g strokeWidth="2"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></g>
      <g strokeWidth="1">
        <circle cx="6.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
        <circle cx="15.5" cy="15.5" r="0.75" fill="currentColor" stroke="none"/>
        <circle cx="19.5" cy="15.5" r="0.75" fill="currentColor" stroke="none"/>
        <circle cx="15.5" cy="19.5" r="0.75" fill="currentColor" stroke="none"/>
        <circle cx="19.5" cy="19.5" r="0.75" fill="currentColor" stroke="none"/>
      </g>
    </g>
  ),
  edge: (
    <g>
      <g strokeWidth="2"><rect x="3" y="5" width="7" height="15" rx="1.5"/><rect x="14" y="10" width="7" height="10" rx="1.5"/></g>
      <g strokeWidth="1">
        <line x1="2" y1="20" x2="22" y2="20"/>
        <line x1="5" y1="9" x2="8" y2="9"/><line x1="5" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="14" x2="19" y2="14"/>
      </g>
    </g>
  ),
  equal: (
    <g>
      <g strokeWidth="2"><circle cx="12" cy="12" r="9"/></g>
      <g strokeWidth="1"><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/></g>
    </g>
  ),
  info: (
    <g>
      <g strokeWidth="2"><circle cx="12" cy="12" r="9"/></g>
      <g strokeWidth="1">
        <circle cx="12" cy="8" r="0.5" fill="currentColor" stroke="none"/>
        <line x1="12" y1="11" x2="12" y2="16"/>
      </g>
    </g>
  ),
  timer: (
    <g>
      <g strokeWidth="2"><circle cx="12" cy="13" r="8"/></g>
      <g strokeWidth="1">
        <polyline points="12 9 12 13 15 15"/>
        <line x1="12" y1="2" x2="12" y2="5"/><line x1="9" y1="2" x2="15" y2="2"/>
      </g>
    </g>
  ),
  myth: (
    <g>
      <g strokeWidth="2"><circle cx="12" cy="12" r="9"/></g>
      <g strokeWidth="1"><line x1="8" y1="8" x2="16" y2="16"/><line x1="16" y1="8" x2="8" y2="16"/></g>
    </g>
  ),
  fact: (
    <g>
      <g strokeWidth="2"><circle cx="12" cy="12" r="9"/></g>
      <g strokeWidth="1"><polyline points="8 12 11 15 16 9"/></g>
    </g>
  ),
  percentage: (
    <g>
      <g strokeWidth="2"><circle cx="12" cy="12" r="9"/></g>
      <g strokeWidth="1">
        <line x1="8" y1="16" x2="16" y2="8"/>
        <circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="15" r="1.2"/>
      </g>
    </g>
  ),
  budget: (
    <g>
      <g strokeWidth="2"><circle cx="12" cy="12" r="9"/></g>
      <g strokeWidth="1">
        <path d="M12 6v12"/>
        <path d="M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1.1-3 2.5 1.3 2 3 2.5 3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5"/>
      </g>
    </g>
  ),
  check: (
    <g>
      <g strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="4"/></g>
      <g strokeWidth="1"><polyline points="8 12 11 15 16 9"/></g>
    </g>
  ),
  slots: (
    <g>
      <g strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/></g>
      <g strokeWidth="1">
        <rect x="5.5" y="7" width="3.5" height="6" rx="1"/>
        <rect x="10.25" y="7" width="3.5" height="6" rx="1"/>
        <rect x="15" y="7" width="3.5" height="6" rx="1"/>
        <line x1="22" y1="7" x2="22" y2="11"/>
        <circle cx="22" cy="6.5" r="1"/>
        <line x1="5" y1="16" x2="19" y2="16"/>
      </g>
    </g>
  ),
  cards: (
    <g>
      <g strokeWidth="2"><rect x="3" y="3" width="11" height="15" rx="2"/><rect x="8" y="6" width="11" height="15" rx="2"/></g>
      <g strokeWidth="1">
        <path d="M13.5 11.5c.8-1.5 2.5-1.5 2.5 0s-2.5 2.5-2.5 2.5-2.5-1-2.5-2.5 1.7-1.5 2.5 0z"/>
      </g>
    </g>
  ),
};

export default function BrandIcon({ name, size = 24, className, style }: BrandIconProps) {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {icon}
    </svg>
  );
}
