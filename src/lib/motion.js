/**
 * Framer Motion animation presets.
 *
 * Import these shared variants into any component to keep
 * animation behaviour consistent across the entire portfolio.
 *
 * Usage:
 *   import { fadeInUp, staggerContainer } from '@/lib/motion'
 *   <motion.div variants={staggerContainer} initial="hidden" whileInView="show">
 *     <motion.p variants={fadeInUp}>…</motion.p>
 *   </motion.div>
 */

// ── Ease presets ───────────────────────────────────────────────────────────
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]
export const EASE_IN_OUT   = [0.4, 0, 0.2, 1]

// ── Single element variants ────────────────────────────────────────────────

/** Fade in + slide up from below */
export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
}

/** Fade in + slide in from the left */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
}

/** Fade in + slide in from the right */
export const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
}

/** Simple opacity fade (no movement) */
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: EASE_IN_OUT },
  },
}

/** Scale in from slightly smaller */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT_EXPO },
  },
}

// ── Container variants (for staggered children) ────────────────────────────

/**
 * Wrap children with this to stagger them automatically.
 * @param {number} stagger - Delay between children (default 0.1s)
 * @param {number} delay   - Initial delay before first child (default 0)
 */
export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

// ── Viewport defaults (pass to whileInView) ───────────────────────────────
/** Use once: true to avoid re-triggering on scroll back up */
export const VIEWPORT_ONCE = { once: true, margin: '-80px' }
