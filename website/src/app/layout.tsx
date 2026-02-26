import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playbook — How Games Actually Work',
  description: 'Interactive game education from Playbook. Learn how roulette, slots, blackjack, and sports betting really work — the math, the odds, and the house edge.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&family=Source+Sans+3:wght@300;400;600&family=Source+Code+Pro:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          @keyframes resultPopIn {
            0% { transform: translate(-50%,-50%) scale(0); opacity: 0; }
            60% { transform: translate(-50%,-50%) scale(1.15); opacity: 1; }
            100% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          }
          @keyframes chipPopIn {
            0% { transform: scale(0); opacity: 0; }
            60% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes winPulse {
            0% { opacity: 0; transform: scale(0.8); }
            50% { transform: scale(1.03); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes fadeSlideIn {
            0% { opacity: 0; transform: translateY(4px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: '#1B2838',
          color: '#FFFFFF',
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          minHeight: '100vh',
        }}
      >
        {children}
      </body>
    </html>
  );
}
