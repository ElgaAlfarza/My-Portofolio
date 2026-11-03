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
        // Creative Scrapbook Palette from User's Design
        brand: {
          purple: '#5B2C91',
          darkPurple: '#4C2882',
          deepIndigo: '#1B254B',
          navyTorn: '#111827',
          paperBg: '#FBF7EE',
          kraft: '#EBE2D0',
          kraftDark: '#D8C6AB',
          accentYellow: '#FEF08A',
          DEFAULT: '#5B2C91',
          hover: '#4C2882',
          soft: '#F3E8FF',
          border: '#D8B4FE',
          cobalt: '#2563EB',
        },

        // Warm Editorial Sandstone & Cream Palette
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

        // Scrapbook & Creative Developer Palette
        scrapbook: {
          cream: '#FDFBF7',
          paper: '#FFFFFF',
          beige: '#F5EFE6',
          sand: '#ECE3D4',
          denim: '#1E3A5F',
          navy: '#12263F',
          purple: '#563D82',
          purpleDark: '#3E2961',
          lavender: '#EFEAF8',
          lavenderBorder: '#D8CCE8',
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
        display: ['"Fredoka"', '"Lilita One"', 'Impact', 'cursive'],
        chunky: ['"Lilita One"', 'Impact', 'sans-serif'],
        handwritten: ['"Kalam"', '"Caveat"', 'cursive'],
        marker: ['"Kalam"', 'cursive', 'sans-serif'],
      },

      boxShadow: {
        'puffy': '0 10px 0 #3b0764, 0 16px 20px rgba(0, 0, 0, 0.25)',
        'puffy-sm': '0 4px 0 #3b0764, 0 8px 12px rgba(0,0,0,0.15)',
        'paper': '2px 4px 12px rgba(0,0,0,0.07), -1px 2px 4px rgba(0,0,0,0.03)',
        'polaroid': '0 12px 28px rgba(27, 37, 75, 0.16)',
        'icon3d': 'inset 0 2px 4px rgba(255,255,255,0.45), inset 0 -3px 5px rgba(0,0,0,0.25), 0 6px 14px rgba(76, 40, 130, 0.28)',
        subtle: '0 1px 2px rgba(24, 24, 27, 0.04), 0 6px 16px -6px rgba(24, 24, 27, 0.04)',
        elevated: '0 4px 12px -2px rgba(24, 24, 27, 0.07), 0 12px 28px -8px rgba(24, 24, 27, 0.06)',
      },
    },
  },
  plugins: [],
}
