/**
 * Roulette game engine.
 *
 * Handles wheel configuration (European/American), random spins,
 * bet validation, and payout calculation.
 */

// ─── Wheel configuration ────────────────────────────────

export type WheelType = 'european' | 'american';

export interface Pocket {
  number: string;       // "0", "00", "1" .. "36"
  value: number;        // numeric value (-1 for 00, 0 for 0, 1-36 for numbers)
  color: 'red' | 'black' | 'green';
}

const RED_NUMBERS = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

function makePocket(n: number): Pocket {
  if (n === 0) return { number: '0', value: 0, color: 'green' };
  return {
    number: String(n),
    value: n,
    color: RED_NUMBERS.has(n) ? 'red' : 'black',
  };
}

const DOUBLE_ZERO: Pocket = { number: '00', value: -1, color: 'green' };

export const EUROPEAN_WHEEL: Pocket[] = [
  makePocket(0),
  ...[32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26].map(makePocket),
];

export const AMERICAN_WHEEL: Pocket[] = [
  makePocket(0), DOUBLE_ZERO,
  ...[28,9,26,30,11,7,20,32,17,5,22,34,15,3,24,36,13,1,
     0, // placeholder removed below
     27,10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2].filter(n => n !== 0).map(makePocket),
];

// Correct American wheel order (standard layout)
export const AMERICAN_WHEEL_ORDER: Pocket[] = [
  makePocket(0), DOUBLE_ZERO,
  ...([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,
    19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]).map(makePocket),
];

export function getWheel(type: WheelType): Pocket[] {
  return type === 'european' ? EUROPEAN_WHEEL : AMERICAN_WHEEL_ORDER;
}

export function getPocketCount(type: WheelType): number {
  return type === 'european' ? 37 : 38;
}

export function getHouseEdge(type: WheelType): number {
  return type === 'european' ? 2.70 : 5.26;
}

// ─── Bet types ──────────────────────────────────────────

export type BetType =
  | 'straight'     // Single number
  | 'split'        // 2 adjacent numbers
  | 'street'       // 3 numbers in a row
  | 'corner'       // 4 numbers sharing a corner
  | 'sixline'      // 6 numbers (2 rows)
  | 'red'          // All red numbers
  | 'black'        // All black numbers
  | 'odd'          // All odd numbers
  | 'even'         // All even numbers
  | 'low'          // 1-18
  | 'high'         // 19-36
  | 'dozen1'       // 1-12
  | 'dozen2'       // 13-24
  | 'dozen3'       // 25-36
  | 'column1'      // 1,4,7,...34
  | 'column2'      // 2,5,8,...35
  | 'column3';     // 3,6,9,...36

export interface BetDefinition {
  type: BetType;
  label: string;
  payout: number;       // e.g. 35 means 35:1
  numbers: string[];    // pocket numbers this bet covers
  description: string;
  category: 'inside' | 'outside';
}

// Helper: generate numbers for a range
function range(start: number, end: number): string[] {
  const result: string[] = [];
  for (let i = start; i <= end; i++) result.push(String(i));
  return result;
}

function column(col: 1 | 2 | 3): string[] {
  const result: string[] = [];
  for (let i = col; i <= 36; i += 3) result.push(String(i));
  return result;
}

function colorNumbers(color: 'red' | 'black'): string[] {
  return range(1, 36).filter(n => {
    const num = parseInt(n);
    return color === 'red' ? RED_NUMBERS.has(num) : !RED_NUMBERS.has(num);
  });
}

function parityNumbers(parity: 'odd' | 'even'): string[] {
  return range(1, 36).filter(n => {
    const num = parseInt(n);
    return parity === 'odd' ? num % 2 === 1 : num % 2 === 0;
  });
}

// Predefined outside bets
export const OUTSIDE_BETS: BetDefinition[] = [
  { type: 'red',     label: 'Red',      payout: 1, numbers: colorNumbers('red'),      description: 'All 18 red numbers',                  category: 'outside' },
  { type: 'black',   label: 'Black',    payout: 1, numbers: colorNumbers('black'),    description: 'All 18 black numbers',                category: 'outside' },
  { type: 'odd',     label: 'Odd',      payout: 1, numbers: parityNumbers('odd'),     description: 'All odd numbers (1-35)',               category: 'outside' },
  { type: 'even',    label: 'Even',     payout: 1, numbers: parityNumbers('even'),    description: 'All even numbers (2-36)',              category: 'outside' },
  { type: 'low',     label: '1–18',     payout: 1, numbers: range(1, 18),             description: 'Numbers 1 through 18',                category: 'outside' },
  { type: 'high',    label: '19–36',    payout: 1, numbers: range(19, 36),            description: 'Numbers 19 through 36',               category: 'outside' },
  { type: 'dozen1',  label: '1st 12',   payout: 2, numbers: range(1, 12),             description: 'Numbers 1 through 12',                category: 'outside' },
  { type: 'dozen2',  label: '2nd 12',   payout: 2, numbers: range(13, 24),            description: 'Numbers 13 through 24',               category: 'outside' },
  { type: 'dozen3',  label: '3rd 12',   payout: 2, numbers: range(25, 36),            description: 'Numbers 25 through 36',               category: 'outside' },
  { type: 'column1', label: 'Col 1',    payout: 2, numbers: column(1),                description: 'Column: 1, 4, 7, ... 34',            category: 'outside' },
  { type: 'column2', label: 'Col 2',    payout: 2, numbers: column(2),                description: 'Column: 2, 5, 8, ... 35',            category: 'outside' },
  { type: 'column3', label: 'Col 3',    payout: 2, numbers: column(3),                description: 'Column: 3, 6, 9, ... 36',            category: 'outside' },
];

// Create a straight bet on a specific number
export function straightBet(number: string): BetDefinition {
  return {
    type: 'straight',
    label: number === '00' ? '00' : number === '0' ? '0' : `#${number}`,
    payout: 35,
    numbers: [number],
    description: `Straight up on ${number}`,
    category: 'inside',
  };
}

// ─── Placed bet (with wager amount) ─────────────────────

export interface PlacedBet {
  definition: BetDefinition;
  amount: number;
}

// ─── Spin result ────────────────────────────────────────

export interface SpinResult {
  pocket: Pocket;
  bets: PlacedBet[];
  totalWagered: number;
  totalWon: number;       // includes original bet on wins
  netResult: number;      // totalWon - totalWagered
}

export function spin(wheelType: WheelType): Pocket {
  const wheel = getWheel(wheelType);
  const index = Math.floor(Math.random() * wheel.length);
  return wheel[index];
}

export function resolveBets(pocket: Pocket, bets: PlacedBet[]): SpinResult {
  let totalWagered = 0;
  let totalWon = 0;

  for (const bet of bets) {
    totalWagered += bet.amount;
    if (bet.definition.numbers.includes(pocket.number)) {
      // Win: get back the original bet + payout * bet
      totalWon += bet.amount + bet.amount * bet.definition.payout;
    }
  }

  return {
    pocket,
    bets,
    totalWagered,
    totalWon,
    netResult: totalWon - totalWagered,
  };
}

// ─── Statistics tracker ─────────────────────────────────

export interface GameStats {
  spins: number;
  totalWagered: number;
  totalWon: number;
  netResult: number;
  actualEdge: number;       // actual house edge experienced (%)
  expectedEdge: number;     // theoretical house edge (%)
  history: SpinResult[];    // last N results
  numberFrequency: Map<string, number>;
  colorFrequency: { red: number; black: number; green: number };
}

export function createStats(wheelType: WheelType): GameStats {
  return {
    spins: 0,
    totalWagered: 0,
    totalWon: 0,
    netResult: 0,
    actualEdge: 0,
    expectedEdge: getHouseEdge(wheelType),
    history: [],
    numberFrequency: new Map(),
    colorFrequency: { red: 0, black: 0, green: 0 },
  };
}

/**
 * Run a batch simulation of N spins with a fixed bet (e.g. $10 on Red).
 * Returns an array of cumulative edge values for convergence charting.
 */
export function simulateBatch(
  wheelType: WheelType,
  numSpins: number,
  betDef?: BetDefinition,
  betAmount: number = 10,
): { spin: number; actual: number; expected: number }[] {
  const bet = betDef || OUTSIDE_BETS.find(b => b.type === 'red')!;
  const expectedEdge = getHouseEdge(wheelType);
  const results: { spin: number; actual: number; expected: number }[] = [];
  let cumWagered = 0;
  let cumWon = 0;

  for (let i = 0; i < numSpins; i++) {
    const pocket = spin(wheelType);
    const placedBets: PlacedBet[] = [{ definition: bet, amount: betAmount }];
    const resolved = resolveBets(pocket, placedBets);
    cumWagered += resolved.totalWagered;
    cumWon += resolved.totalWon;
    const actual = cumWagered > 0 ? ((cumWagered - cumWon) / cumWagered) * 100 : 0;
    // Sample every 10 spins for performance (or every spin if < 100)
    if (numSpins <= 100 || (i + 1) % Math.max(1, Math.floor(numSpins / 200)) === 0 || i === numSpins - 1) {
      results.push({ spin: i + 1, actual, expected: expectedEdge });
    }
  }
  return results;
}

/**
 * Get tooltip info for a bet definition: name, payout, probability, expected loss.
 */
export function getBetTooltip(bet: BetDefinition, wheelType: WheelType): {
  name: string;
  payout: string;
  probability: string;
  expectedLoss: string;
  coverageCount: number;
  totalPockets: number;
} {
  const totalPockets = getPocketCount(wheelType);
  const coverageCount = bet.numbers.length;
  const prob = coverageCount / totalPockets;
  const expectedReturn = prob * (bet.payout + 1); // prob of winning * (payout + original bet back)
  const expectedLossPerDollar = 1 - expectedReturn;

  return {
    name: bet.description || bet.label,
    payout: `${bet.payout}:1`,
    probability: `${(prob * 100).toFixed(1)}%`,
    expectedLoss: `$${(expectedLossPerDollar * 100).toFixed(2)} per $100`,
    coverageCount,
    totalPockets,
  };
}

export function updateStats(stats: GameStats, result: SpinResult, wheelType: WheelType): GameStats {
  const newStats = { ...stats };
  newStats.spins += 1;
  newStats.totalWagered += result.totalWagered;
  newStats.totalWon += result.totalWon;
  newStats.netResult = newStats.totalWon - newStats.totalWagered;
  newStats.actualEdge = newStats.totalWagered > 0
    ? ((newStats.totalWagered - newStats.totalWon) / newStats.totalWagered) * 100
    : 0;
  newStats.expectedEdge = getHouseEdge(wheelType);

  // Keep last 100 results
  newStats.history = [...stats.history, result].slice(-100);

  // Track frequency
  const freq = new Map(stats.numberFrequency);
  const num = result.pocket.number;
  freq.set(num, (freq.get(num) || 0) + 1);
  newStats.numberFrequency = freq;

  newStats.colorFrequency = { ...stats.colorFrequency };
  newStats.colorFrequency[result.pocket.color] += 1;

  return newStats;
}
