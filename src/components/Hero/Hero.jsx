'use client'

/**
 * Hero Section
 *
 * Full-screen landing. Content vertically centred, with room above for the
 * floating pill navbar (fixed top-6, ~48px tall → we need ≥ 80px clearance).
 *
 * Layout checklist:
 *   375px  – headline wraps to 2–3 lines; buttons stack; OK
 *   768px  – headline single line at text-5xl; comfortable
 *   1280px – text-7xl; plenty of whitespace
 *   1920px – max-w-4xl caps the headline; section feels centred
 *
 * Accessibility:
 *   - h1 is the primary page heading
 *   - Scroll indicator is aria-hidden (decorative)
 *   - CTA links are meaningful text (no "click here")
 *   - prefers-reduced-motion: scroll indicator animation stops
 */

import { motion, useReducedMotion } from 'framer-motion'

// ── Animation variants ─────────────────────────────────────────────────────
const EASE_EXPO = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_EXPO } },
}

export default function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center min-h-[100dvh] overflow-hidden bg-bg"
    >
      {/* ── Ambient background glow (decorative) ────────────────── */}
      {/*
        Single, intentional radial gradient. Not multiple random glows.
        Positioned at top-centre to bleed into the hero text area.
      */}
      <div
        className="glow-dot w-[700px] h-[700px] -top-40 left-1/2 -translate-x-1/2 opacity-60"
        aria-hidden="true"
      />

      {/* ── Hero content ─────────────────────────────────────────── */}
      <motion.div
        className="
          section-wrapper
          flex flex-col items-center text-center gap-6
          pt-32 pb-20
        "
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge / eyebrow */}
        <motion.div variants={item}>
          <span className="tag-tech gap-2">
            {/* Status dot */}
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden="true"
            />
            IT Operations &amp; AI Specialist
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          id="hero-heading"
          variants={item}
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-extrabold leading-[1.08] tracking-tight
            max-w-4xl
          "
        >
          Mengoptimalkan Sistem
          <br className="hidden sm:block" />{' '}
          dengan <span className="text-gradient">Teknologi &amp; AI</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-white/50 max-w-xl leading-relaxed"
        >
          Halo, saya <strong>Elga Alfareza, S.Kom.</strong> Berpengalaman dalam pengelolaan server simbank, software/hardware quality control, serta pengembangan Machine Learning.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-3 justify-center pt-2"
        >
          <a
            href="#portfolio"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#portfolio')?.scrollIntoView({
                behavior: prefersReduced ? 'auto' : 'smooth',
              })
            }}
          >
            Lihat Portofolio
          </a>
          <a
            href="#contact"
            className="btn-ghost"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({
                behavior: prefersReduced ? 'auto' : 'smooth',
              })
            }}
          >
            Hubungi Saya
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator (decorative, aria-hidden) ───────────── */}
      {!prefersReduced && (
        <motion.div
          className="
            absolute bottom-8 left-1/2 -translate-x-1/2
            flex flex-col items-center gap-1.5
            text-white/25 text-[11px] tracking-widest uppercase font-mono
            select-none
          "
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ delay: 2.2, duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            scroll
          </motion.span>
          <motion.svg
            width="14" height="14" viewBox="0 0 16 16" fill="none"
            animate={{ y: [0, 4, 0] }}
            transition={{ delay: 2.3, duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M8 2v12M4 10l4 4 4-4"
              stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </section>
  )
}
