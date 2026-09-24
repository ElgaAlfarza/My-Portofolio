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
      // ── Color Design Tokens ──────────────────────────────────────────
      colors: {
        // Deep Space Editorial palette from reference design
        "surface-container-lowest": "#0d0e12",
        "surface-container-low": "#1a1b20",
        "surface-container": "#1e1f24",
        "surface-container-high": "#292a2e",
        "surface-container-highest": "#343439",
        "surface-bright": "#38393e",
        "surface-dim": "#121317",
        "surface": "#121317",
        "surface-variant": "#343439",
        "surface-tint": "#b4c5ff",
        "on-surface": "#e3e2e8",
        "on-surface-variant": "#c3c6d7",
        "inverse-surface": "#e3e2e8",
        "inverse-on-surface": "#2f3035",
        "outline": "#8d90a0",
        "outline-variant": "#434654",

        "primary": "#b4c5ff",
        "primary-container": "#2c67ed",
        "on-primary": "#002a77",
        "on-primary-container": "#f6f5ff",
        "primary-fixed": "#dbe1ff",
        "primary-fixed-dim": "#b4c5ff",
        "on-primary-fixed": "#00174b",
        "on-primary-fixed-variant": "#003ea7",
        "inverse-primary": "#0153da",

        "secondary": "#7bd0ff",
        "secondary-container": "#00a6e0",
        "on-secondary": "#00354a",
        "on-secondary-container": "#00374d",
        "secondary-fixed": "#c4e7ff",
        "secondary-fixed-dim": "#7bd0ff",
        "on-secondary-fixed": "#001e2c",
        "on-secondary-fixed-variant": "#004c69",

        "tertiary": "#ffb595",
        "tertiary-container": "#c04c00",
        "on-tertiary": "#571e00",
        "on-tertiary-container": "#fff4f0",
        "tertiary-fixed": "#ffdbcc",
        "tertiary-fixed-dim": "#ffb595",
        "on-tertiary-fixed": "#351000",
        "on-tertiary-fixed-variant": "#7c2e00",

        "error": "#ffb4ab",
        "error-container": "#93000a",
        "on-error": "#690005",
        "on-error-container": "#ffdad6",

        "background": "#121317",
        "on-background": "#e3e2e8",

        // Backward compatibility aliases
        bg: {
          DEFAULT: '#0d0e12',
          elevated: '#1a1b20',
        },
        accent: {
          DEFAULT: '#2c67ed',
          dim: 'rgba(44, 103, 237, 0.50)',
        },
      },

      // ── Spacing Tokens ────────────────────────────────────────────────
      spacing: {
        'gutter-mobile': '1rem',
        'margin-mobile': '1.25rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'gutter': '1.5rem',
        'margin': '3rem',
      },

      // ── Font Families ─────────────────────────────────────────────────
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        'display-xl': ['"Plus Jakarta Sans"', 'sans-serif'],
        'display-xl-mobile': ['"Plus Jakarta Sans"', 'sans-serif'],
        'headline-lg': ['"Plus Jakarta Sans"', 'sans-serif'],
        'headline-lg-mobile': ['"Plus Jakarta Sans"', 'sans-serif'],
        'headline-md': ['"Plus Jakarta Sans"', 'sans-serif'],
        'headline-sm': ['"Plus Jakarta Sans"', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'body-sm': ['Inter', 'sans-serif'],
        'code-md': ['"JetBrains Mono"', 'monospace'],
        'label-mono': ['"JetBrains Mono"', 'monospace'],
        'label-sm': ['Inter', 'sans-serif'],
      },

      // ── Typography Scales ──────────────────────────────────────────────
      fontSize: {
        'display-xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-xl-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['40px', { lineHeight: '48px', letterSpacing: '-0.025em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-sm': ['20px', { lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
        'code-md': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'label-mono': ['12px', { lineHeight: '16px', letterSpacing: '0.06em', fontWeight: '500' }],
        'label-sm': ['11px', { lineHeight: '14px', letterSpacing: '0.04em', fontWeight: '600' }],
      },

      // ── Border Colors ─────────────────────────────────────────────────
      borderColor: {
        card: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          hover: 'rgba(44,103,237,0.50)',
        },
      },

      // ── Backdrop Blur ─────────────────────────────────────────────────
      backdropBlur: {
        card: '12px',
      },

      // ── Box Shadows ───────────────────────────────────────────────────
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.40)',
        'card-hover': '0 8px 32px rgba(44,103,237,0.15)',
        glow: '0 0 40px rgba(44,103,237,0.20)',
        'nav-pill': [
          '0 0 0 1px rgba(44,103,237,0.15)',
          '0 8px 32px rgba(0,0,0,0.40)',
          '0 0 24px rgba(44,103,237,0.08)',
        ].join(','),
      },

      // ── Animations ────────────────────────────────────────────────────
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
