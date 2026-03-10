'use client';

import { colors, fonts } from '@/lib/brand-tokens';

interface NavItem {
  id: string;
  label: string;
}

export default function MobileNav({ sections }: { sections: NavItem[] }) {
  return (
    <nav style={{
      display: 'flex',
      gap: 6,
      padding: '8px 16px',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      background: `${colors.primary}ee`,
      borderBottom: `1px solid ${colors.primaryLight}`,
      position: 'sticky',
      top: 44,
      zIndex: 99,
    }}>
      {sections.map(s => (
        <a
          key={s.id}
          href={`#${s.id}`}
          style={{
            flexShrink: 0,
            padding: '5px 12px',
            borderRadius: 16,
            fontSize: 11,
            fontWeight: 600,
            color: colors.neutral300,
            textDecoration: 'none',
            fontFamily: fonts.heading,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            whiteSpace: 'nowrap',
            transition: 'color 0.15s ease',
          }}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
