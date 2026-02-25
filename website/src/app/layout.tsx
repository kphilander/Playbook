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
