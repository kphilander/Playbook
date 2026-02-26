'use client';

import { useEffect, useRef, useState } from 'react';
import { colors, fonts, rouletteColors } from '@/lib/brand-tokens';
import type { Pocket, WheelType } from '@/lib/roulette-engine';
import { EUROPEAN_WHEEL, AMERICAN_WHEEL_ORDER } from '@/lib/roulette-engine';

interface RouletteWheelProps {
  wheelType: WheelType;
  result: Pocket | null;
  spinning: boolean;
  onSpinComplete?: () => void;
}

const WHEEL_SIZE = 480;
const CENTER = WHEEL_SIZE / 2;
const OUTER_R = 215;
const INNER_R = 152;
const BALL_R = 196;

export default function RouletteWheel({ wheelType, result, spinning, onSpinComplete }: RouletteWheelProps) {
  const [rotation, setRotation] = useState(0);
  const [ballAngle, setBallAngle] = useState(0);
  const animRef = useRef<number | null>(null);

  const pockets = wheelType === 'european' ? EUROPEAN_WHEEL : AMERICAN_WHEEL_ORDER;
  const pocketCount = pockets.length;
  const pocketAngle = 360 / pocketCount;

  useEffect(() => {
    if (!spinning || !result) return;

    const targetIndex = pockets.findIndex(p => p.number === result.number);
    if (targetIndex === -1) return;

    // Spin the wheel multiple full rotations + land on target pocket
    const targetAngle = targetIndex * pocketAngle;
    const fullSpins = 2 + Math.random() * 1; // 2-3 full rotations
    const totalRotation = fullSpins * 360 + (360 - targetAngle);

    // Ball spins in opposite direction
    const ballSpins = fullSpins + 1;
    const ballTarget = targetAngle;
    const totalBallRotation = ballSpins * 360 + ballTarget;

    const startRotation = rotation;
    const startBall = ballAngle;
    const duration = 1500; // 1.5 seconds
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for deceleration
      const eased = 1 - Math.pow(1 - progress, 3);

      setRotation(startRotation + totalRotation * eased);
      setBallAngle(startBall - totalBallRotation * eased);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        onSpinComplete?.();
      }
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinning, result]);

  const pocketColor = (pocket: Pocket) => {
    if (pocket.color === 'green') return rouletteColors.green;
    if (pocket.color === 'red') return rouletteColors.red;
    return rouletteColors.black;
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: WHEEL_SIZE, aspectRatio: '1' }}>
      <svg
        viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
        width="100%"
        height="100%"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3)) drop-shadow(0 8px 32px rgba(0,0,0,0.5))' }}
      >
        {/* SVG Gradient Definitions */}
        <defs>
          <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors.primaryLight} />
            <stop offset="100%" stopColor={colors.primaryDark} />
          </radialGradient>
          <radialGradient id="ballGradient" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor={colors.neutral100} />
            <stop offset="100%" stopColor={colors.neutral300} />
          </radialGradient>
          <linearGradient id="rimGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.neutral500} />
            <stop offset="100%" stopColor={colors.neutral700} />
          </linearGradient>
          <radialGradient id="pocketSheen" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.15} />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
          </radialGradient>
        </defs>

        {/* Outer rim */}
        <circle cx={CENTER} cy={CENTER} r={OUTER_R + 8} fill="url(#rimGradient)" />
        <circle cx={CENTER} cy={CENTER} r={OUTER_R + 6} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
        <circle cx={CENTER} cy={CENTER} r={OUTER_R + 4} fill={colors.neutral500} />

        {/* Wheel group (rotates) */}
        <g transform={`rotate(${rotation} ${CENTER} ${CENTER})`}>
          {/* Pocket segments */}
          {pockets.map((pocket, i) => {
            const startAngle = (i * pocketAngle - 90) * Math.PI / 180;
            const endAngle = ((i + 1) * pocketAngle - 90) * Math.PI / 180;
            const x1 = CENTER + OUTER_R * Math.cos(startAngle);
            const y1 = CENTER + OUTER_R * Math.sin(startAngle);
            const x2 = CENTER + OUTER_R * Math.cos(endAngle);
            const y2 = CENTER + OUTER_R * Math.sin(endAngle);
            const ix1 = CENTER + INNER_R * Math.cos(startAngle);
            const iy1 = CENTER + INNER_R * Math.sin(startAngle);
            const ix2 = CENTER + INNER_R * Math.cos(endAngle);
            const iy2 = CENTER + INNER_R * Math.sin(endAngle);

            const largeArc = pocketAngle > 180 ? 1 : 0;

            const d = [
              `M ${x1} ${y1}`,
              `A ${OUTER_R} ${OUTER_R} 0 ${largeArc} 1 ${x2} ${y2}`,
              `L ${ix2} ${iy2}`,
              `A ${INNER_R} ${INNER_R} 0 ${largeArc} 0 ${ix1} ${iy1}`,
              'Z',
            ].join(' ');

            const midAngle = ((i + 0.5) * pocketAngle - 90) * Math.PI / 180;
            const textR = (OUTER_R + INNER_R) / 2;
            const tx = CENTER + textR * Math.cos(midAngle);
            const ty = CENTER + textR * Math.sin(midAngle);
            const textRotation = (i + 0.5) * pocketAngle;

            return (
              <g key={pocket.number + i}>
                <path
                  d={d}
                  fill={pocketColor(pocket)}
                  stroke={colors.primaryDark}
                  strokeWidth={0.5}
                />
                <path
                  d={d}
                  fill="url(#pocketSheen)"
                  pointerEvents="none"
                />
                <text
                  x={tx}
                  y={ty}
                  fill={colors.white}
                  fontSize={pocketCount > 37 ? 9 : 10}
                  fontWeight={700}
                  fontFamily="Inter, system-ui, sans-serif"
                  textAnchor="middle"
                  dominantBaseline="central"
                  transform={`rotate(${textRotation} ${tx} ${ty})`}
                >
                  {pocket.number}
                </text>
              </g>
            );
          })}

          {/* Inner circle (hub) */}
          <circle cx={CENTER} cy={CENTER} r={INNER_R - 2} fill={colors.primaryDark} />
          <circle cx={CENTER} cy={CENTER} r={INNER_R - 8} fill="url(#hubGradient)" />

          {/* Decorative spokes */}
          {pockets.map((_, i) => {
            const angle = (i * pocketAngle - 90) * Math.PI / 180;
            const sx = CENTER + (INNER_R - 8) * Math.cos(angle);
            const sy = CENTER + (INNER_R - 8) * Math.sin(angle);
            const ex = CENTER + 30 * Math.cos(angle);
            const ey = CENTER + 30 * Math.sin(angle);
            return (
              <line
                key={`spoke-${i}`}
                x1={sx} y1={sy} x2={ex} y2={ey}
                stroke={colors.neutral700}
                strokeWidth={0.5}
                opacity={0.5}
              />
            );
          })}
        </g>

        {/* Center hub (static) */}
        <circle cx={CENTER} cy={CENTER} r={24} fill={colors.primaryLight} />
        <circle cx={CENTER} cy={CENTER} r={18} fill={colors.primary} />

        {/* Ball */}
        <g transform={`rotate(${ballAngle} ${CENTER} ${CENTER})`}>
          <circle
            cx={CENTER}
            cy={CENTER - BALL_R}
            r={7}
            fill="url(#ballGradient)"
            stroke={colors.white}
            strokeWidth={1}
            style={{
              filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))',
              opacity: spinning || result ? 1 : 0.3,
            }}
          />
          {/* Specular highlight */}
          <circle
            cx={CENTER - 2}
            cy={CENTER - BALL_R - 2}
            r={2.5}
            fill="#FFFFFF"
            opacity={spinning || result ? 0.6 : 0.2}
            pointerEvents="none"
          />
        </g>

        {/* Ball marker (top, static) */}
        <polygon
          points={`${CENTER},${CENTER - OUTER_R - 14} ${CENTER - 6},${CENTER - OUTER_R - 24} ${CENTER + 6},${CENTER - OUTER_R - 24}`}
          fill={colors.accent}
        />
      </svg>

      {/* Result display overlay */}
      {result && !spinning && (
        <div
          key={result.number}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0)',
            textAlign: 'center',
            animation: 'resultPopIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
            opacity: 0,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: pocketColor(result),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              border: `3px solid ${colors.white}`,
              boxShadow: `0 2px 12px rgba(0,0,0,0.5), 0 0 20px ${pocketColor(result)}60`,
            }}
          >
            <span style={{ color: colors.white, fontWeight: 800, fontSize: 16, fontFamily: fonts.heading }}>
              {result.number}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
