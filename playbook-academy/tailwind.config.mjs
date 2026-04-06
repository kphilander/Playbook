/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1B2838', light: '#2A3F56', dark: '#0F1923' },
        teal: { DEFAULT: '#00D4AA', light: '#33DDBB', dark: '#00A888' },
        orange: { DEFAULT: '#FF6B35', light: '#FF8A5C', dark: '#E55A2B' },
        n900: '#1A1A2E', n700: '#3D3D5C', n500: '#6B6B8A',
        n300: '#A8A8C0', n100: '#E8E8F0', n50: '#F5F5FA',
        success: '#00C853', warning: '#FFB300', danger: '#FF3D00', info: '#2979FF',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
    },
  },
  // Safelist classes used by the client-side module content styling script.
  // These classes are dynamically added to rendered markdown via JS and would
  // otherwise be purged by Tailwind since they don't appear in .astro source.
  safelist: [
    // Typography
    'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-sm', 'text-xs',
    'font-heading', 'font-body', 'font-mono', 'font-bold', 'font-semibold', 'font-black',
    'leading-relaxed', 'leading-tight', 'tracking-wider', 'uppercase', 'truncate', 'italic', 'not-italic',
    // Colors
    'text-navy', 'text-n700', 'text-n600', 'text-n500', 'text-n400', 'text-n300',
    'text-teal', 'text-teal-dark', 'text-orange', 'text-white',
    'dark:text-white', 'dark:text-n300', 'dark:text-n400', 'dark:text-teal',
    'bg-n50', 'bg-navy/5', 'bg-navy-light', 'bg-teal/5', 'bg-teal/10', 'bg-orange/5', 'bg-orange/10', 'bg-white/5',
    'dark:bg-navy-light', 'dark:bg-teal/10', 'dark:bg-white/5', 'dark:bg-orange/10',
    // Borders
    'border-b', 'border-t', 'border-l-4', 'border-n100', 'border-teal', 'border-orange',
    'border-navy/10', 'border-navy-light',
    'dark:border-navy-light', 'dark:border-white/10',
    // Spacing
    'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-6', 'mb-8',
    'mt-1', 'mt-4', 'mt-8', 'mt-16',
    'ml-6', 'mr-2',
    'px-4', 'px-5', 'px-1.5', 'py-0.5', 'py-2.5', 'py-4', 'py-8',
    'p-5', 'p-6', 'my-6', 'my-12',
    'pb-3', 'gap-2',
    // Layout
    'w-full', 'w-4', 'w-5', 'w-6', 'h-4', 'h-5', 'h-6',
    'flex', 'items-center', 'justify-center', 'inline',
    'scroll-mt-20',
    // Decorative
    'rounded', 'rounded-lg', 'rounded-xl', 'rounded-r-xl', 'rounded-full',
    'align-top', 'border-collapse',
    // Module section
    'module-section',
  ],
  plugins: [],
};
