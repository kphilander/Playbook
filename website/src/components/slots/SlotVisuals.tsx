'use client';

import { colors, fonts } from '@/lib/brand-tokens';

interface SlotVisualsProps {
  chapterId: string;
  slideIndex: number;
}

/* ─── Shared SVG Slot Symbols ─── */
/* Flat style, brand palette, per visual-identity illustration guidelines */

function Cherry({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none">
      <path d="M14 14 C14 7, 18 4, 22 5" stroke={colors.secondaryDark} strokeWidth="2" strokeLinecap="round" />
      <path d="M22 14 C22 9, 20 6, 18 5" stroke={colors.secondaryDark} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="12" cy="23" rx="7" ry="8" fill={colors.accent} />
      <ellipse cx="12" cy="21" rx="4" ry="3" fill={colors.accentLight} opacity="0.35" />
      <ellipse cx="24" cy="23" rx="7" ry="8" fill={colors.accentDark} />
      <ellipse cx="24" cy="21" rx="4" ry="3" fill={colors.accent} opacity="0.3" />
      <ellipse cx="20" cy="4" rx="3" ry="2" fill={colors.secondary} opacity="0.7" />
    </svg>
  );
}

function Diamond({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none">
      <polygon points="18,3 32,15 18,33 4,15" fill={colors.secondary} />
      <polygon points="18,3 25,15 18,33" fill={colors.secondaryDark} />
      <line x1="4" y1="15" x2="32" y2="15" stroke={colors.secondaryLight} strokeWidth="1" opacity="0.5" />
      <line x1="18" y1="3" x2="11" y2="15" stroke={colors.secondaryLight} strokeWidth="0.75" opacity="0.4" />
      <line x1="18" y1="3" x2="25" y2="15" stroke={colors.secondaryLight} strokeWidth="0.75" opacity="0.4" />
      <line x1="11" y1="15" x2="18" y2="33" stroke={colors.secondaryLight} strokeWidth="0.75" opacity="0.3" />
      <line x1="25" y1="15" x2="18" y2="33" stroke={colors.secondaryLight} strokeWidth="0.75" opacity="0.3" />
    </svg>
  );
}

function Bell({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none">
      <path d="M18 5 C12 5, 7 12, 7 21 L29 21 C29 12, 24 5, 18 5 Z" fill={colors.warning} />
      <path d="M18 5 C21 5, 29 12, 29 21 L18 21 Z" fill="#E5A000" />
      <rect x="5" y="21" width="26" height="4" rx="2" fill={colors.accentLight} />
      <circle cx="18" cy="29" r="3" fill={colors.warning} />
      <circle cx="18" cy="29" r="1.5" fill="#E5A000" />
      <line x1="18" y1="2" x2="18" y2="5" stroke={colors.warning} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Seven({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none">
      <path d="M10 7 L26 7 L16 29" stroke={colors.danger} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 7 L26 7 L16 29" stroke="#FF6347" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="17" x2="21" y2="17" stroke={colors.danger} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Star({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none">
      <polygon
        points="18,3 22,13 33,14.5 25,22 27,33 18,28 9,33 11,22 3,14.5 14,13"
        fill={colors.warning}
      />
      <polygon
        points="18,3 22,13 33,14.5 25,22 27,33 18,28"
        fill="#E5A000"
      />
      <polygon
        points="18,7 20.5,14 27,15 22.5,19.5 24,26.5 18,23.5"
        fill={colors.accentLight}
        opacity="0.25"
      />
    </svg>
  );
}

function BarSymbol({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none">
      <rect x="3" y="10" width="30" height="16" rx="4" fill={colors.primaryLight} />
      <rect x="3" y="10" width="30" height="8" rx="4" fill={colors.primary} />
      <text x="18" y="22" textAnchor="middle" fill={colors.neutral300} fontSize="9" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="2">BAR</text>
    </svg>
  );
}

/* Symbol lookup by name */
const SYMBOL_MAP: Record<string, React.FC<{ size?: number }>> = {
  cherry: Cherry,
  diamond: Diamond,
  bell: Bell,
  seven: Seven,
  star: Star,
  bar: BarSymbol,
};

function SlotSymbol({ name, size = 36 }: { name: string; size?: number }) {
  const Comp = SYMBOL_MAP[name];
  return Comp ? <Comp size={size} /> : null;
}

/* ─── Shared layout ─── */

function VisualLayout({ label, children, caption }: { label: string; children: React.ReactNode; caption?: string }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '40px 16px 16px' }}>
      <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: colors.secondary, marginBottom: 16, fontFamily: fonts.heading }}>
        {label}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        {children}
      </div>
      {caption && (
        <div style={{ fontSize: 11, color: colors.neutral500, textAlign: 'center', marginTop: 12, lineHeight: 1.4, fontFamily: fonts.body }}>
          {caption}
        </div>
      )}
    </div>
  );
}

/* ─── Reel Grid — proper slot machine display ─── */

type SymbolName = 'cherry' | 'diamond' | 'bell' | 'seven' | 'star' | 'bar';

function ReelGrid({ reels, highlightRow, symbolSize = 36 }: { reels: SymbolName[][]; highlightRow?: number; symbolSize?: number }) {
  return (
    <div style={{
      background: colors.primaryDark,
      borderRadius: 12,
      padding: '6px 8px',
      border: `2px solid ${colors.primaryLight}`,
      boxShadow: `inset 0 2px 8px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05)`,
    }}>
      {/* Payline arrow */}
      {highlightRow !== undefined && (
        <div style={{
          position: 'relative', height: 0, zIndex: 2,
        }}>
          <div style={{
            position: 'absolute',
            top: highlightRow * (symbolSize + 10) + symbolSize / 2 - 1,
            left: -4, right: -4, height: 2,
            background: colors.secondary,
            boxShadow: `0 0 8px ${colors.secondary}`,
            borderRadius: 1,
          }} />
        </div>
      )}
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', position: 'relative' }}>
        {reels.map((col, ci) => (
          <div key={ci} style={{
            display: 'flex', flexDirection: 'column', gap: 2,
            borderLeft: ci > 0 ? `1px solid ${colors.primaryLight}` : 'none',
            paddingLeft: ci > 0 ? 4 : 0,
          }}>
            {col.map((sym, ri) => (
              <div
                key={ri}
                style={{
                  width: symbolSize + 10,
                  height: symbolSize + 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 6,
                  background: highlightRow === ri
                    ? 'rgba(0,212,170,0.1)'
                    : 'rgba(255,255,255,0.02)',
                  transition: 'background 0.3s ease-out',
                }}
              >
                <SlotSymbol name={sym} size={symbolSize} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Myth Card with brand icon ─── */

function MythBustIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <g strokeWidth="2"><circle cx="12" cy="12" r="9" /></g>
      <g strokeWidth="1.5"><line x1="8" y1="8" x2="16" y2="16" /><line x1="16" y1="8" x2="8" y2="16" /></g>
    </svg>
  );
}

function MythCard({ myth, truth }: { myth: string; truth: string }) {
  return (
    <div style={{
      padding: '12px 14px',
      background: 'rgba(255,61,0,0.06)',
      borderRadius: 10,
      border: '1px solid rgba(255,61,0,0.15)',
      width: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <span style={{ color: colors.danger, flexShrink: 0 }}><MythBustIcon size={16} /></span>
        <span style={{ fontSize: 12, fontWeight: 700, color: colors.danger, fontFamily: fonts.heading, textDecoration: 'line-through' }}>{myth}</span>
      </div>
      <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, lineHeight: 1.4 }}>{truth}</div>
    </div>
  );
}

function StatBadge({ value, unit, color }: { value: string; unit: string; color: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 32, fontWeight: 800, color, fontFamily: fonts.heading, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: colors.neutral500, marginTop: 4, fontFamily: fonts.body }}>{unit}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Chapter Visuals
   ═══════════════════════════════════════════ */

/* ─── Chapter: How It Works ─── */
function HowItWorksVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Random Number Generator" caption="RNG decides every outcome instantly">
        <div style={{ position: 'relative' }}>
          <ReelGrid reels={[['seven', 'bell', 'cherry'], ['bar', 'diamond', 'star'], ['cherry', 'star', 'seven']]} symbolSize={30} />
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(13,27,42,0.8)', borderRadius: 12,
            backdropFilter: 'blur(2px)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <svg viewBox="0 0 24 24" width={28} height={28} fill="none" stroke={colors.secondary} strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 4 }}>
                <g strokeWidth="2"><path d="M4 8 C4 8 8 4 12 8 C16 12 20 8 20 8" /><path d="M4 16 C4 16 8 12 12 16 C16 20 20 16 20 16" /></g>
                <g strokeWidth="1"><circle cx="6" cy="12" r="1" fill={colors.secondary} /><circle cx="18" cy="12" r="1" fill={colors.secondary} /></g>
              </svg>
              <div style={{ fontSize: 13, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono, letterSpacing: 2 }}>
                RNG
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['3F29A7', '1BD4C8', '92E0FF', 'A40B71'].map(n => (
            <span key={n} style={{
              fontSize: 9, color: colors.secondary, opacity: 0.3, fontFamily: fonts.mono,
              padding: '2px 4px', background: 'rgba(0,212,170,0.04)', borderRadius: 3,
            }}>{n}</span>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Playing a Spin" caption="4 steps, every time">
        <ReelGrid reels={[['bell', 'star', 'cherry'], ['diamond', 'seven', 'bar'], ['star', 'cherry', 'bell']]} symbolSize={30} />
        <div style={{
          marginTop: 8, padding: '12px 32px', borderRadius: 24,
          background: `linear-gradient(135deg, ${colors.secondary}, ${colors.secondaryDark})`,
          fontSize: 14, fontWeight: 800, color: colors.primary,
          fontFamily: fonts.heading, textAlign: 'center',
          boxShadow: `0 0 24px rgba(0,212,170,0.25)`,
        }}>
          SPIN
        </div>
        <div style={{ fontSize: 12, color: colors.neutral300, fontFamily: fonts.mono }}>
          Total bet: <strong style={{ color: colors.white }}>$2.50</strong>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Result" caption="Outcome decided before reels move">
        <ReelGrid
          reels={[['bar', 'seven', 'cherry'], ['star', 'seven', 'bell'], ['diamond', 'seven', 'star']]}
          highlightRow={1}
          symbolSize={30}
        />
        <div style={{
          padding: '8px 24px', borderRadius: 8,
          background: 'rgba(0,200,83,0.1)', border: `1px solid ${colors.success}`,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 12, color: colors.success, fontWeight: 700, fontFamily: fonts.heading }}>WIN</span>
          <span style={{ fontSize: 20, fontWeight: 800, color: colors.success, fontFamily: fonts.mono }}>$75.00</span>
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="Bonus Features" caption="Still RNG. Still random.">
      <div style={{
        padding: '16px 24px', borderRadius: 12,
        background: `linear-gradient(135deg, rgba(0,212,170,0.08), rgba(255,107,53,0.08))`,
        border: '1px solid rgba(0,212,170,0.2)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: colors.accent, letterSpacing: 2, fontFamily: fonts.heading, marginBottom: 4 }}>BONUS</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: colors.white, fontFamily: fonts.heading }}>FREE SPINS x10</div>
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
        <Star size={32} />
        <Star size={32} />
        <Star size={32} />
      </div>
      <div style={{
        width: '85%', padding: '8px 12px', borderRadius: 8,
        background: 'rgba(255,255,255,0.03)', textAlign: 'center',
      }}>
        <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 4 }}>PROGRESSIVE JACKPOT</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>$1,234,567</div>
      </div>
    </VisualLayout>
  );
}

/* ─── Chapter: Bet Types ─── */
function BetTypesVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    const lineColors = [colors.secondary, colors.accent, colors.info, colors.warning, '#E040FB'];
    return (
      <VisualLayout label="Paylines" caption="More lines = more chances, higher total bet">
        <div style={{ position: 'relative' }}>
          <ReelGrid reels={[['seven', 'cherry', 'star'], ['bell', 'seven', 'diamond'], ['star', 'bar', 'seven']]} symbolSize={30} />
          {/* Payline overlay */}
          <svg style={{ position: 'absolute', top: 6, left: 8, right: 8, bottom: 6, pointerEvents: 'none' }}
            viewBox="0 0 156 150" preserveAspectRatio="none">
            <line x1="0" y1="25" x2="156" y2="25" stroke={lineColors[0]} strokeWidth="2" opacity="0.5" />
            <line x1="0" y1="75" x2="156" y2="75" stroke={lineColors[1]} strokeWidth="2" opacity="0.5" />
            <line x1="0" y1="125" x2="156" y2="125" stroke={lineColors[2]} strokeWidth="2" opacity="0.5" />
            <line x1="0" y1="25" x2="156" y2="125" stroke={lineColors[3]} strokeWidth="1.5" opacity="0.35" />
            <line x1="0" y1="125" x2="156" y2="25" stroke={lineColors[4]} strokeWidth="1.5" opacity="0.35" />
          </svg>
        </div>
        {/* Payline legend */}
        <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
          {lineColors.map((c, i) => (
            <div key={i} style={{ width: 20, height: 3, borderRadius: 2, background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, color: colors.white, fontFamily: fonts.heading, fontWeight: 600 }}>
            5 lines x $0.50
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>
            = $2.50 / spin
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 1
  return (
    <VisualLayout label="Bet Sizing" caption="Bigger bets != better odds">
      <div style={{ width: '85%' }}>
        <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 8 }}>DENOMINATION</div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {['$0.01', '$0.05', '$0.25', '$1.00'].map((d, i) => (
            <div key={d} style={{
              flex: 1, padding: '8px 4px', borderRadius: 6,
              background: i === 2 ? 'rgba(0,212,170,0.12)' : `${colors.primaryDark}`,
              border: `1px solid ${i === 2 ? colors.secondary : colors.primaryLight}`,
              fontSize: 11, fontWeight: 600, color: i === 2 ? colors.secondary : colors.neutral300,
              textAlign: 'center', fontFamily: fonts.mono,
              transition: 'all 0.2s ease-out',
            }}>{d}</div>
          ))}
        </div>
        <div style={{
          padding: '12px', borderRadius: 8,
          background: 'rgba(255,107,53,0.08)', border: `1px solid rgba(255,107,53,0.2)`,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: colors.accent, fontFamily: fonts.heading }}>MAX BET</div>
          <div style={{ fontSize: 10, color: colors.neutral500, marginTop: 4, fontFamily: fonts.body }}>Required for some jackpots</div>
        </div>
      </div>
      <div style={{
        padding: '10px 16px', borderRadius: 8,
        background: colors.primaryDark,
        fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center', lineHeight: 1.5,
      }}>
        House edge is a <strong style={{ color: colors.white }}>percentage</strong>.<br />
        Same rate at $0.25 or $25.
      </div>
    </VisualLayout>
  );
}

/* ─── Chapter: The Math ─── */
function TheMathVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    const circumference = 2 * Math.PI * 60;
    return (
      <VisualLayout label="Return to Player" caption="Long-run average across all bets">
        <svg viewBox="0 0 160 160" width={140} height={140}>
          <circle cx="80" cy="80" r="60" fill="none" stroke={colors.primaryLight} strokeWidth="20" />
          <circle
            cx="80" cy="80" r="60" fill="none"
            stroke={colors.secondary} strokeWidth="20"
            strokeDasharray={`${0.95 * circumference} ${0.05 * circumference}`}
            strokeDashoffset={circumference * 0.25}
            strokeLinecap="round"
          />
          <circle
            cx="80" cy="80" r="60" fill="none"
            stroke={colors.accent} strokeWidth="20"
            strokeDasharray={`${0.05 * circumference} ${0.95 * circumference}`}
            strokeDashoffset={circumference * 0.25 - 0.95 * circumference}
            strokeLinecap="round"
          />
          <text x="80" y="74" textAnchor="middle" fill={colors.white} fontSize="24" fontWeight="800" fontFamily="Inter, sans-serif">95%</text>
          <text x="80" y="94" textAnchor="middle" fill={colors.neutral500} fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">RTP</text>
        </svg>
        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: colors.secondary }} />
            <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>Players 95%</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: colors.accent }} />
            <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.body }}>House 5%</span>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    const bars = [
      { label: 'Online', range: '92\u201397%', pct: 94.5, color: colors.secondary },
      { label: 'Casino', range: '85\u201395%', pct: 90, color: colors.accent },
      { label: 'Progressive', range: '85\u201390%', pct: 87.5, color: colors.warning },
    ];
    return (
      <VisualLayout label="RTP by Machine Type" caption="House edge = 100% minus RTP">
        <div style={{ width: '85%' }}>
          {bars.map(b => (
            <div key={b.label} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: colors.white, fontFamily: fonts.heading }}>{b.label}</span>
                <span style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.mono }}>{b.range}</span>
              </div>
              <div style={{ height: 12, borderRadius: 6, background: colors.primaryLight, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 6, background: b.color,
                  width: `${b.pct}%`,
                  transition: 'width 0.6s ease-out',
                }} />
              </div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="What It Means" caption="Per $100 wagered, over time">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '85%' }}>
          <div style={{
            padding: '10px 20px', borderRadius: 8, background: colors.primaryLight,
            fontSize: 18, fontWeight: 800, color: colors.white, fontFamily: fonts.mono,
          }}>$100</div>
          {/* Down arrow */}
          <svg viewBox="0 0 16 24" width={12} height={18} stroke={colors.neutral500} strokeWidth="2" fill="none" strokeLinecap="round">
            <line x1="8" y1="0" x2="8" y2="20" /><polyline points="3,16 8,22 13,16" />
          </svg>
          <div style={{
            width: '100%', padding: '12px', borderRadius: 8,
            background: 'rgba(0,212,170,0.06)', border: `1px solid rgba(0,212,170,0.15)`,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 4 }}>SLOT MACHINE</div>
            <div style={{ fontSize: 11, color: colors.neutral300, fontFamily: fonts.mono }}>95% RTP</div>
          </div>
          <div style={{ display: 'flex', width: '100%', gap: 8 }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <svg viewBox="0 0 16 16" width={10} height={12} stroke={colors.neutral500} strokeWidth="2" fill="none" strokeLinecap="round">
                <line x1="8" y1="0" x2="8" y2="12" /><polyline points="3,8 8,14 13,8" />
              </svg>
              <div style={{ padding: '8px', borderRadius: 6, background: 'rgba(0,212,170,0.08)', marginTop: 2 }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: colors.secondary, fontFamily: fonts.mono }}>$95</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>back to you</div>
              </div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <svg viewBox="0 0 16 16" width={10} height={12} stroke={colors.neutral500} strokeWidth="2" fill="none" strokeLinecap="round">
                <line x1="8" y1="0" x2="8" y2="12" /><polyline points="3,8 8,14 13,8" />
              </svg>
              <div style={{ padding: '8px', borderRadius: 6, background: 'rgba(255,107,53,0.08)', marginTop: 2 }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono }}>$5</div>
                <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>house keeps</div>
              </div>
            </div>
          </div>
        </div>
      </VisualLayout>
    );
  }

  // slide === 3
  return (
    <VisualLayout label="Volatility" caption="Same RTP, different experience">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {([
          { label: 'Low', desc: 'Steady', color: colors.secondary, path: 'M0,30 Q20,25 40,28 Q60,31 80,29 Q100,27 120,30 Q140,33 160,30' },
          { label: 'Med', desc: 'Balanced', color: colors.warning, path: 'M0,30 Q20,18 40,35 Q60,22 80,32 Q100,20 120,38 Q140,24 160,30' },
          { label: 'High', desc: 'Swings', color: colors.danger, path: 'M0,30 Q15,8 30,45 Q50,5 70,50 Q90,10 110,48 Q130,6 150,42 Q155,30 160,30' },
        ] as const).map(v => (
          <div key={v.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 40, textAlign: 'right' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: v.color, fontFamily: fonts.heading }}>{v.label}</div>
              <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.body }}>{v.desc}</div>
            </div>
            <svg viewBox="0 0 160 60" width={140} height={40} style={{ overflow: 'visible' }}>
              <path d={v.path} fill="none" stroke={v.color} strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </div>
    </VisualLayout>
  );
}

/* ─── Chapter: Tips ─── */
function TipsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    const paytableRows: { sym: SymbolName; payout: string }[] = [
      { sym: 'seven', payout: '500x' },
      { sym: 'diamond', payout: '100x' },
      { sym: 'cherry', payout: '25x' },
    ];
    return (
      <VisualLayout label="Check the Paytable" caption="30 seconds. Every machine has one.">
        <div style={{
          width: '88%', padding: '12px', borderRadius: 10,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: colors.secondary, fontFamily: fonts.heading, letterSpacing: 1, marginBottom: 10 }}>PAYTABLE</div>
          {paytableRows.map(row => (
            <div key={row.sym} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '6px 0', borderBottom: `1px solid ${colors.primaryLight}`,
            }}>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <SlotSymbol name={row.sym} size={20} />
                <SlotSymbol name={row.sym} size={20} />
                <SlotSymbol name={row.sym} size={20} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: colors.white, fontFamily: fonts.mono }}>{row.payout}</span>
            </div>
          ))}
          <div style={{
            marginTop: 10, padding: '6px 10px', borderRadius: 6,
            background: 'rgba(0,212,170,0.08)',
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span style={{ fontSize: 11, color: colors.neutral500, fontFamily: fonts.body }}>RTP</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: colors.secondary, fontFamily: fonts.mono }}>95.5%</span>
          </div>
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Max Bet" caption="Check if the jackpot requires it">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 9, color: colors.neutral500, fontFamily: fonts.heading, letterSpacing: 1.5 }}>PROGRESSIVE JACKPOT</div>
          <div style={{ fontSize: 28, fontWeight: 800, color: colors.accent, fontFamily: fonts.mono, margin: '8px 0' }}>$1,234,567</div>
          <div style={{
            display: 'inline-block', padding: '6px 14px', borderRadius: 6,
            background: 'rgba(255,179,0,0.1)', border: `1px solid ${colors.warning}`,
            fontSize: 11, fontWeight: 700, color: colors.warning, fontFamily: fonts.heading,
          }}>
            * MAX BET REQUIRED
          </div>
        </div>
        <div style={{
          width: '85%', padding: '10px', borderRadius: 8,
          background: colors.primaryDark,
          fontSize: 11, color: colors.neutral300, fontFamily: fonts.body, textAlign: 'center', lineHeight: 1.5,
        }}>
          Not max betting? Consider a<br />non-progressive machine instead.
        </div>
      </VisualLayout>
    );
  }

  if (slide === 2) {
    return (
      <VisualLayout label="Pick Volatility" caption="Theme is cosmetic. Volatility is real.">
        <div style={{ display: 'flex', gap: 10, width: '90%' }}>
          {[
            { vol: 'Low', desc: 'Steady play', wave: 'M0,20 Q10,17 20,19 Q30,21 40,20', color: colors.secondary },
            { vol: 'High', desc: 'Big swings', wave: 'M0,20 Q8,4 16,36 Q24,8 32,32 Q38,20 40,20', color: colors.danger },
          ].map(m => (
            <div key={m.vol} style={{
              flex: 1, padding: '12px 8px', borderRadius: 10,
              background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
              textAlign: 'center',
            }}>
              <svg viewBox="0 0 40 40" width={60} height={40}>
                <path d={m.wave} fill="none" stroke={m.color} strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div style={{ fontSize: 13, fontWeight: 700, color: m.color, fontFamily: fonts.heading, marginTop: 4 }}>{m.vol}</div>
              <div style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.body }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </VisualLayout>
    );
  }

  if (slide === 3) {
    return (
      <VisualLayout label="Set Your Budget" caption="Decide before you press spin">
        <div style={{
          width: '85%', padding: '16px', borderRadius: 10,
          background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
        }}>
          {[
            { left: '$0.50', right: 'per spin' },
            { left: '1 spin', right: 'every 3 sec' },
            { left: '1,200', right: 'spins / hour' },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', padding: '8px 0',
              borderBottom: i < 2 ? `1px solid ${colors.primaryLight}` : 'none',
            }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: colors.white, fontFamily: fonts.mono }}>{row.left}</span>
              <span style={{ fontSize: 12, color: colors.neutral500, fontFamily: fonts.body }}>{row.right}</span>
            </div>
          ))}
        </div>
        <StatBadge value="$600" unit="per hour" color={colors.accent} />
      </VisualLayout>
    );
  }

  // slide === 4
  return (
    <VisualLayout label="Independent Spins" caption="The RNG doesn't keep score">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {([
          { syms: ['cherry', 'bell', 'bar'] as SymbolName[], result: 'Loss', color: colors.neutral500 },
          { syms: ['seven', 'seven', 'seven'] as SymbolName[], result: 'Win!', color: colors.success },
          { syms: ['star', 'cherry', 'diamond'] as SymbolName[], result: 'Loss', color: colors.neutral500 },
        ]).map((spin, i) => (
          <div key={i}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '8px 12px', borderRadius: 8,
              background: colors.primaryDark, border: `1px solid ${colors.primaryLight}`,
            }}>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: colors.neutral500, fontFamily: fonts.mono, marginRight: 4 }}>#{i + 1}</span>
                {spin.syms.map((s, si) => <SlotSymbol key={si} name={s} size={22} />)}
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: spin.color, fontFamily: fonts.heading }}>{spin.result}</span>
            </div>
            {i < 2 && (
              <div style={{ textAlign: 'center', padding: '2px 0' }}>
                <span style={{ fontSize: 9, color: colors.neutral700, fontFamily: fonts.heading, letterSpacing: 1 }}>NO CONNECTION</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </VisualLayout>
  );
}

/* ─── Chapter: Myths ─── */
function MythsVisual({ slide }: { slide: number }) {
  if (slide === 0) {
    return (
      <VisualLayout label="Busted" caption="Machines don't keep score">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MythCard myth="Hot Streaks" truth="Streaks are noise, not signal. Each spin is random." />
          <MythCard myth="Due for a Win" truth="The RNG has no memory. Past spins don't affect the next." />
        </div>
      </VisualLayout>
    );
  }

  if (slide === 1) {
    return (
      <VisualLayout label="Busted" caption="A loss is a loss">
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MythCard myth="Lucky Machine" truth="Confirmation bias, not loyalty. Any machine, same math." />
          <MythCard myth="Near Misses" truth="Almost winning is still losing. Reels are just animation." />
        </div>
      </VisualLayout>
    );
  }

  // slide === 2
  return (
    <VisualLayout label="Busted" caption="RTP is set in software">
      <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <MythCard myth="Time of Day" truth="RTP doesn't change by time, day, or season. It's in the code." />
        <MythCard myth="Higher Bets = Better Odds" truth="House edge is a percentage. Same rate at any bet size." />
      </div>
    </VisualLayout>
  );
}

/* ─── Main Export ─── */
export default function SlotVisuals({ chapterId, slideIndex }: SlotVisualsProps) {
  return (
    <div key={`${chapterId}-${slideIndex}`} style={{ height: '100%', animation: 'fadeSlideIn 0.4s ease-out' }}>
      {chapterId === 'how-it-works' && <HowItWorksVisual slide={slideIndex} />}
      {chapterId === 'bet-types' && <BetTypesVisual slide={slideIndex} />}
      {chapterId === 'the-math' && <TheMathVisual slide={slideIndex} />}
      {chapterId === 'tips' && <TipsVisual slide={slideIndex} />}
      {chapterId === 'myths' && <MythsVisual slide={slideIndex} />}
    </div>
  );
}
