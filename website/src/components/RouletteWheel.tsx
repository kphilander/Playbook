'use client';

import { useEffect, useRef, useState } from 'react';
import { colors } from '@/lib/brand-tokens';
import { rouletteColors } from '@/lib/brand-tokens';
import type { Pocket, WheelType } from '@/lib/roulette-engine';
import { EUROPEAN_WHEEL, AMERICAN_WHEEL_ORDER } from '@/lib/roulette-engine';

interface RouletteWheelProps {
  wheelType: WheelType;
  result: Pocket | null;
  spinning: boolean;
  onSpinComplete?: () => void;
}

const WHEEL_SIZE = 380;
const CENTER = WHEEL_SIZE / 2;
const OUTER_R = 170;
const INNER_R = 120;
const BALL_R = 155;

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
    <div style={{ position: 'relative', width: WHEEL_SIZE, height: WHEEL_SIZE }}>
      <svg
        viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
        width={WHEEL_SIZE}
        height={WHEEL_SIZE}
        style={{ filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))' }}
      >
        {/* Outer rim */}
        <circle cx={CENTER} cy={CENTER} r={OUTER_R + 8} fill={colors.neutral700} />
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
                <text
                  x={tx}
                  y={ty}
                  fill={colors.white}
                  fontSize={pocketCount > 37 ? 9 : 10}
                  fontWeight={700}
                  fontFamily="system-ui"
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
          <circle cx={CENTER} cy={CENTER} r={INNER_R - 8} fill={colors.primary} />

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
            fill={colors.neutral100}
            stroke={colors.white}
            strokeWidth={1}
            style={{
              filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))',
              opacity: spinning || result ? 1 : 0.3,
            }}
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
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: pocketColor(result),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              border: `2px solid ${colors.white}`,
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            <span style={{ color: colors.white, fontWeight: 800, fontSize: 14, fontFamily: 'system-ui' }}>
              {result.number}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
