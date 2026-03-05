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
          <div style={{ fontSize: 14, color: colors.secondary, fontWeight: 600 }}>Learn the game →</div>
        </Link>

        <Link
          href="/slots"
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
          <BrandIcon name="slots" size={48} style={{ color: colors.secondary }} />
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.white }}>Slots</div>
          <div style={{ fontSize: 14, color: colors.secondary, fontWeight: 600 }}>Learn the game →</div>
        </Link>

        <Link
          href="/video-poker"
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
          <BrandIcon name="video-poker" size={48} style={{ color: colors.secondary }} />
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.white }}>Video Poker</div>
          <div style={{ fontSize: 14, color: colors.secondary, fontWeight: 600 }}>Learn the game &rarr;</div>
        </Link>

        <Link
          href="/baccarat"
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
          <BrandIcon name="baccarat" size={48} style={{ color: colors.secondary }} />
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.white }}>Baccarat</div>
          <div style={{ fontSize: 14, color: colors.secondary, fontWeight: 600 }}>Learn the game &rarr;</div>
        </Link>

        <Link
          href="/blackjack"
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
          <BrandIcon name="cards" size={48} style={{ color: colors.secondary }} />
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.white }}>Blackjack</div>
          <div style={{ fontSize: 14, color: colors.secondary, fontWeight: 600 }}>Learn the game &rarr;</div>
        </Link>

        <Link
          href="/sports-betting"
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
          <BrandIcon name="sports" size={48} style={{ color: colors.secondary }} />
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.white }}>Sports Betting</div>
          <div style={{ fontSize: 14, color: colors.secondary, fontWeight: 600 }}>Learn the game &rarr;</div>
        </Link>

        <Link
          href="/craps"
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
          <BrandIcon name="dice" size={48} style={{ color: colors.secondary }} />
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.white }}>Craps</div>
          <div style={{ fontSize: 14, color: colors.secondary, fontWeight: 600 }}>Learn the game &rarr;</div>
        </Link>
      </div>
    </div>
  );
}
