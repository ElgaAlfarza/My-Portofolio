/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Editorial Sandstone & Cream Palette (Reference Aesthetic)
        canvas: '#FAF8F5',
        paper: '#FFFFFF',
        subtle: '#F4F1EA',
        sandstone: {
          light: '#F5F2EB',
          DEFAULT: '#E5E0D8',
          dark: '#D3CCC0',
        },
        ink: {
          DEFAULT: '#1C1917',
          body: '#44403C',
          muted: '#78716C',
        },
        line: {
          DEFAULT: '#E5E0D8',
          strong: '#C7C0B3',
        },
        brand: {
          DEFAULT: '#1D4ED8',
          hover: '#1E40AF',
          soft: '#EFF6FF',
          border: '#BFDBFE',
          cobalt: '#2563EB',
        },

        // Preserved tokens for /admin dashboard compatibility
        bg: {
          DEFAULT: '#0d0e12',
          elevated: '#1a1b20',
        },
        accent: {
          DEFAULT: '#2c67ed',
          dim: 'rgba(44, 103, 237, 0.50)',
        },
      },

      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },

      fontSize: {
        'display-hero': ['clamp(2rem, 1.55rem + 1.8vw, 2.85rem)', { lineHeight: '1.16', letterSpacing: '-0.03em', fontWeight: '700' }],
        'section-title': ['clamp(1.375rem, 1.2rem + 0.65vw, 1.75rem)', { lineHeight: '1.26', letterSpacing: '-0.022em', fontWeight: '700' }],
        'card-title': ['1.0625rem', { lineHeight: '1.4', letterSpacing: '-0.012em', fontWeight: '600' }],
      },

      boxShadow: {
        subtle: '0 1px 2px rgba(24, 24, 27, 0.04), 0 6px 16px -6px rgba(24, 24, 27, 0.04)',
        elevated: '0 4px 12px -2px rgba(24, 24, 27, 0.07), 0 12px 28px -8px rgba(24, 24, 27, 0.06)',
      },
    },
  },
  plugins: [],
}
