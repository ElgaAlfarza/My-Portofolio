/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Color Design Tokens ──────────────────────────────────────────
      colors: {
        bg: {
          DEFAULT: '#08090d',   // Background utama
          elevated: '#0b0f19', // Background section alternatif
        },
        accent: {
          DEFAULT: '#2c67ed',  // Electric blue
          dim: 'rgba(44, 103, 237, 0.50)', // accent/50 – border hover
        },
      },

      // ── Font Families ─────────────────────────────────────────────────
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },

      // ── Border Colors ─────────────────────────────────────────────────
      borderColor: {
        card: {
          DEFAULT: 'rgba(255,255,255,0.10)', // white/10
          hover: 'rgba(44,103,237,0.50)',    // accent/50
        },
      },

      // ── Backdrop Blur ─────────────────────────────────────────────────
      backdropBlur: {
        card: '12px',
      },

      // ── Box Shadows ───────────────────────────────────────────────────
      boxShadow: {
        card:       '0 4px 24px rgba(0,0,0,0.40)',
        'card-hover':'0 8px 32px rgba(44,103,237,0.15)',
        glow:       '0 0 40px rgba(44,103,237,0.20)',
        // Navbar floating pill: outer ring + depth + blue ambient
        'nav-pill': [
          '0 0 0 1px rgba(44,103,237,0.15)',
          '0 8px 32px rgba(0,0,0,0.40)',
          '0 0 24px rgba(44,103,237,0.08)',
        ].join(','),
      },

      // ── Animations ────────────────────────────────────────────────────
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.7' },
          '50%':      { opacity: '1' },
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
