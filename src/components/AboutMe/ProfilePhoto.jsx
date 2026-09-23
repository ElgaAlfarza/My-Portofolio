'use client'

/**
 * ProfilePhoto – Interactive Spider-Man → Face reveal
 *
 * Design rationale:
 * - Two absolutely-positioned layers cross-fade via opacity + scale.
 *   Scale gives physical depth (mask "pulls away"), not just a flat fade.
 * - Ring + shadow-glow activate on reveal to give a clear visual signal
 *   that something happened — without relying on colour alone (WCAG).
 * - Touch devices cannot hover, so a tap-to-toggle state is provided.
 *   The hint text updates to match the device's interaction model.
 *
 * Props:
 *   maskSrc  {string|null}  – path to Spider-Man photo; null = placeholder
 *   faceSrc  {string|null}  – path to face photo; null = placeholder
 *   alt      {string}       – accessible name for the real face image
 *   size     {string}       – Tailwind size classes, default "w-52 h-52 md:w-60 md:h-60"
 */

import { useState, useEffect, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// ── Placeholder renderers ──────────────────────────────────────────────────
function MaskPlaceholder() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-2
        bg-gradient-to-br from-[#CC0000] via-[#AA0000] to-[#00008B]"
      aria-hidden="true"
    >
      <span className="text-white/20 text-[10px] font-mono tracking-[0.2em] uppercase">
        mask photo
      </span>
    </div>
  )
}

function FacePlaceholder() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-2
        bg-gradient-to-br from-[#C8956A] via-[#B07050] to-[#8A5035]"
      aria-hidden="true"
    >
      <span className="text-white/30 text-[10px] font-mono tracking-[0.2em] uppercase">
        face photo
      </span>
    </div>
  )
}

// ── Hint icon components ───────────────────────────────────────────────────
const CursorIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 4.702z"/>
  </svg>
)
const TapIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path strokeLinecap="round" d="M9 11V5.5a1.5 1.5 0 0 1 3 0v5m0 0a1.5 1.5 0 0 1 3 0v2m0 0a1.5 1.5 0 0 1 3 0V13a6 6 0 0 1-6 6H9.5A5.5 5.5 0 0 1 4 13.5V13a1.5 1.5 0 0 1 3 0"/>
  </svg>
)

// ── Transition config ──────────────────────────────────────────────────────
const EASE_IN_OUT = [0.4, 0, 0.6, 1]
const TRANSITION  = { duration: 0.35, ease: EASE_IN_OUT }

// ── Main component ─────────────────────────────────────────────────────────
export default function ProfilePhoto({
  maskSrc = null,
  faceSrc = null,
  alt     = 'Profile photo',
  size    = 'w-52 h-52 md:w-60 md:h-60',
}) {
  const [revealed,       setRevealed]       = useState(false)
  const [isTouchPrimary, setIsTouchPrimary] = useState(false)
  const prefersReduced = useReducedMotion()

  // Detect if the primary pointing device supports hover (mouse vs. touch)
  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)')
    setIsTouchPrimary(mq.matches)
    const onChange = (e) => setIsTouchPrimary(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (!isTouchPrimary) setRevealed(true)
  }, [isTouchPrimary])

  const handleMouseLeave = useCallback(() => {
    if (!isTouchPrimary) setRevealed(false)
  }, [isTouchPrimary])

  const handleToggle = useCallback(() => {
    if (isTouchPrimary) setRevealed((v) => !v)
  }, [isTouchPrimary])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setRevealed((v) => !v)
    }
  }, [])

  // When reduced motion is preferred, disable scale transform
  const maskAnim   = { opacity: revealed ? 0 : 1, scale: prefersReduced ? 1 : (revealed ? 0.96 : 1) }
  const faceAnim   = { opacity: revealed ? 1 : 0, scale: prefersReduced ? 1 : (revealed ? 1 : 0.96) }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* ── Photo frame ─────────────────────────────────────────── */}
      <div
        role="img"
        aria-label={revealed ? alt : 'Spider-Man mask photo — interact to reveal face'}
        tabIndex={0}
        className={`
          relative rounded-full overflow-hidden cursor-pointer
          ring-2 transition-all duration-300
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent
          ${size}
          ${revealed
            ? 'ring-accent/60 shadow-[0_0_32px_rgba(44,103,237,0.35)]'
            : 'ring-white/[0.08] shadow-none'
          }
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        {/* Layer 1 – Mask (default visible) */}
        <motion.div
          className="absolute inset-0"
          animate={maskAnim}
          transition={TRANSITION}
          aria-hidden="true"
        >
          {maskSrc
            ? <img src={maskSrc} alt="" className="w-full h-full object-cover object-top" />
            : <MaskPlaceholder />
          }
        </motion.div>

        {/* Layer 2 – Real face (revealed on hover/tap) */}
        <motion.div
          className="absolute inset-0"
          animate={faceAnim}
          transition={TRANSITION}
          aria-hidden="true"
        >
          {faceSrc
            ? <img src={faceSrc} alt="" className="w-full h-full object-cover object-top" />
            : <FacePlaceholder />
          }
        </motion.div>
      </div>

      {/* ── Interaction hint (microcopy) ──────────────────────────── */}
      <motion.p
        className="flex items-center gap-1.5 text-[11px] text-white/35 select-none"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        aria-live="polite"
      >
        {isTouchPrimary ? <TapIcon /> : <CursorIcon />}
        <span>
          {isTouchPrimary
            ? revealed ? 'Ketuk lagi untuk sembunyikan' : 'Ketuk untuk lihat wajah asliku'
            : revealed ? 'Gerakkan kursor keluar untuk kembali' : 'Hover untuk lihat wajah asliku'
          }
        </span>
      </motion.p>
    </div>
  )
}
