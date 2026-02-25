import Link from 'next/link';

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
        <span style={{ fontSize: 48, fontWeight: 800, color: '#FFFFFF' }}>Play</span>
        <span style={{ fontSize: 48, fontWeight: 300, color: '#00D4AA', textTransform: 'uppercase', letterSpacing: '0.08em' }}>book</span>
      </div>
      <p style={{ fontSize: 20, color: '#A8A8C0', maxWidth: 500, lineHeight: 1.6, marginBottom: 48 }}>
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
            background: '#0F1923',
            borderRadius: 16,
            border: '1px solid #2A3F56',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 48 }}>🎡</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF' }}>Roulette</div>
          <div style={{ fontSize: 14, color: '#00D4AA', fontWeight: 600 }}>Play demo →</div>
        </Link>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            padding: '32px 40px',
            background: '#0F1923',
            borderRadius: 16,
            border: '1px solid #2A3F56',
            opacity: 0.4,
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 48 }}>🎰</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF' }}>Slots</div>
          <div style={{ fontSize: 14, color: '#6B6B8A', fontWeight: 600 }}>Coming soon</div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            padding: '32px 40px',
            background: '#0F1923',
            borderRadius: 16,
            border: '1px solid #2A3F56',
            opacity: 0.4,
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 48 }}>🃏</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF' }}>Blackjack</div>
          <div style={{ fontSize: 14, color: '#6B6B8A', fontWeight: 600 }}>Coming soon</div>
        </div>
      </div>
    </div>
  );
}
