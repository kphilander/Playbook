import Link from 'next/link';
import { colors, radius } from '@/lib/brand-tokens';
import BrandIcon from '@/components/BrandIcon';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 48, fontWeight: 800, color: colors.white }}>Play</span>
        <span style={{ fontSize: 48, fontWeight: 300, color: colors.secondary, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>book</span>
      </div>
      <p style={{ fontSize: 20, color: colors.neutral300, maxWidth: 500, lineHeight: 1.6, marginBottom: 48 }}>
        Interactive game education. Learn how games actually work — the math, the odds, and the house edge.
      </p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/roulette"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            padding: '32px 40px',
            background: colors.primaryDark,
            borderRadius: radius.lg,
            border: `1px solid ${colors.primaryLight}`,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            minWidth: 200,
          }}
        >
          <BrandIcon name="roulette" size={48} style={{ color: colors.secondary }} />
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.white }}>Roulette</div>
          <div style={{ fontSize: 14, color: colors.secondary, fontWeight: 600 }}>Play demo →</div>
        </Link>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            padding: '32px 40px',
            background: colors.primaryDark,
            borderRadius: radius.lg,
            border: `1px solid ${colors.primaryLight}`,
            opacity: 0.4,
            minWidth: 200,
          }}
        >
          <BrandIcon name="slots" size={48} style={{ color: colors.neutral500 }} />
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.white }}>Slots</div>
          <div style={{ fontSize: 14, color: colors.neutral500, fontWeight: 600 }}>Coming soon</div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            padding: '32px 40px',
            background: colors.primaryDark,
            borderRadius: radius.lg,
            border: `1px solid ${colors.primaryLight}`,
            opacity: 0.4,
            minWidth: 200,
          }}
        >
          <BrandIcon name="cards" size={48} style={{ color: colors.neutral500 }} />
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.white }}>Blackjack</div>
          <div style={{ fontSize: 14, color: colors.neutral500, fontWeight: 600 }}>Coming soon</div>
        </div>
      </div>
    </div>
  );
}
