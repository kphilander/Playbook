/**
 * Playbook brand tokens — derived from _brand.yml / brand-inject.css.
 * These map directly to the CSS custom properties in the brand system.
 */

export const colors = {
  primary: '#1B2838',
  primaryLight: '#2A3F56',
  primaryDark: '#0F1923',
  secondary: '#00D4AA',
  secondaryLight: '#33DDBB',
  secondaryDark: '#00A888',
  accent: '#FF6B35',
  accentLight: '#FF8A5C',
  accentDark: '#E55A2B',
  neutral900: '#1A1A2E',
  neutral700: '#3D3D5C',
  neutral500: '#6B6B8A',
  neutral300: '#A8A8C0',
  neutral100: '#E8E8F0',
  neutral50: '#F5F5FA',
  success: '#00C853',
  warning: '#FFB300',
  danger: '#FF3D00',
  info: '#2979FF',
  white: '#FFFFFF',
  black: '#111111',
} as const;

export const fonts = {
  heading: "'Inter', system-ui, -apple-system, sans-serif",
  body: "'Source Sans 3', system-ui, sans-serif",
  mono: "'Source Code Pro', monospace",
} as const;

// Roulette-specific colors
export const rouletteColors = {
  red: '#D32F2F',
  black: '#212121',
  green: '#2E7D32',
  felt: '#1B5E20',
  feltLight: '#2E7D32',
  chipWhite: '#FAFAFA',
  chipRed: '#D32F2F',
  chipBlue: '#1565C0',
  chipGreen: '#2E7D32',
  chipBlack: '#212121',
  chipOrange: '#FF6B35',
} as const;
