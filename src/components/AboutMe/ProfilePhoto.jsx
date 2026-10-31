'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function ProfilePhoto({
  maskSrc = '/profile-spiderman.png',
  faceSrc = '/profile-face.png',
  alt = 'Elga Alfareza, S.Kom. portrait',
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [fullMaskLocked, setFullMaskLocked] = useState(false)
  const [pos, setPos] = useState({ x: 210, y: 165 })
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const cardRef = useRef(null)
  const touchTimerRef = useRef(null)

  const updatePointer = useCallback((clientX, clientY) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top))

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = -((y - centerY) / centerY) * 5
    const rotateY = ((x - centerX) / centerX) * 5

    setPos({ x, y })
    setTilt({ rotateX, rotateY })
  }, [])

  const handleMouseMove = (e) => {
    setIsHovered(true)
    updatePointer(e.clientX, e.clientY)
  }

  const handleTouchStart = (e) => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current)
    setIsHovered(true)
    if (e.touches && e.touches[0]) {
      updatePointer(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  const handleTouchMove = (e) => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current)
    if (e.touches && e.touches[0]) {
      setIsHovered(true)
      updatePointer(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  const handleTouchEnd = () => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current)
    touchTimerRef.current = setTimeout(() => {
      setIsHovered(false)
      setTilt({ rotateX: 0, rotateY: 0 })
    }, 2200)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  const maskActive = fullMaskLocked || isHovered

  const spotlightMask = fullMaskLocked
    ? 'none'
    : `radial-gradient(circle 180px at ${pos.x}px ${pos.y}px, black 0%, black 68%, rgba(0, 0, 0, 0.32) 88%, transparent 100%)`

  const inverseSpotlightMask = fullMaskLocked
    ? 'linear-gradient(transparent, transparent)'
    : `radial-gradient(circle 180px at ${pos.x}px ${pos.y}px, transparent 0%, transparent 68%, rgba(0, 0, 0, 0.72) 88%, black 100%)`

  return (
    <div className="flex flex-col items-center w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[420px] mx-auto select-none relative">
      {/* Ambient Holographic Backlight & Orbital Ring */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-primary/20 blur-3xl" />
        <div
          className={`absolute top-[8%] right-3 w-56 sm:w-64 h-56 sm:h-64 rounded-full blur-3xl transition-opacity duration-700 ${
            maskActive ? 'bg-red-600/40 opacity-100' : 'bg-red-600/15 opacity-60'
          }`}
        />
        {/* Precision Orbital HUD Ring */}
        <div
          className={`w-[270px] sm:w-[310px] aspect-square rounded-full border border-dashed transition-colors duration-500 ${
            maskActive ? 'border-red-500/35' : 'border-secondary/20'
          }`}
        />
      </div>

      {/* Subtle Top HUD Telemetry Tags */}
      <div className="w-full flex items-center justify-between px-2 mb-1 font-label-mono text-[10px] tracking-wider pointer-events-none">
        <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-secondary">
          ID // ELGA_ALFAREZA
        </span>
        <span
          className={`px-2 py-0.5 rounded border transition-colors ${
            maskActive
              ? 'bg-red-950/60 border-red-500/40 text-red-300'
              : 'bg-white/[0.04] border-white/[0.08] text-primary'
          }`}
        >
          {fullMaskLocked
            ? 'MASK: LOCKED'
            : isHovered
            ? 'SPIDER_SENSE: ACTIVE'
            : 'HOVER / TAP X-RAY'}
        </span>
      </div>

      {/* Floating Animated Silhouette Stage */}
      <motion.div
        animate={{ y: [-5, 7, -5] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut',
        }}
        ref={cardRef}
        style={{ perspective: '1100px' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full cursor-crosshair relative"
      >
        <div
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.12s ease-out',
          }}
          className="relative w-full aspect-[442/527]"
        >
          {/* LAYER 1: Real Transparent Cutout Portrait (LCP Priority Candidate) */}
          <div
            style={{
              maskImage: maskActive ? inverseSpotlightMask : 'none',
              WebkitMaskImage: maskActive ? inverseSpotlightMask : 'none',
              opacity: fullMaskLocked ? 0 : 1,
              transition: isHovered ? 'none' : 'opacity 0.3s ease-out',
            }}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={faceSrc}
              alt={alt}
              {...{ fetchpriority: 'high' }}
              className="w-full h-full object-contain object-bottom pointer-events-none transition-transform duration-500"
              style={{
                filter: maskActive
                  ? 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 32px rgba(239, 68, 68, 0.25))'
                  : 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 32px rgba(44, 103, 237, 0.28))',
              }}
            />
          </div>

          {/* LAYER 2: Aligned Spider-Man Mask Overlay (Initially Hidden -> fetchpriority="low") */}
          <div
            style={{
              maskImage: fullMaskLocked ? 'none' : isHovered ? spotlightMask : 'none',
              WebkitMaskImage: fullMaskLocked ? 'none' : isHovered ? spotlightMask : 'none',
              opacity: maskActive ? 1 : 0,
              transition: isHovered ? 'opacity 0.18s ease-out' : 'opacity 0.35s ease-out',
            }}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={maskSrc}
              alt="Spider-Man Mask Overlay — Elga Alfareza"
              {...{ fetchpriority: 'low' }}
              className="w-full h-full object-contain object-bottom pointer-events-none"
              style={{
                filter:
                  'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(239, 68, 68, 0.4))',
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Soft Ground Reflection Shadow */}
      <div className="w-48 sm:w-56 h-3 rounded-[100%] bg-black/70 blur-md -mt-2 mb-3 pointer-events-none -z-10" />

      {/* Interactive Control Pill: Toggle Full Spider-Mask or X-Ray Hover */}
      <div className="flex flex-col items-center gap-1.5">
        <button
          type="button"
          onClick={() => setFullMaskLocked((prev) => !prev)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-label-mono text-xs transition-all border shadow-lg ${
            fullMaskLocked
              ? 'bg-red-600/25 border-red-500/50 text-red-200 shadow-[0_0_22px_rgba(239,68,68,0.3)]'
              : 'bg-[#121623]/90 hover:bg-primary-container hover:text-white border-white/[0.1] text-on-surface'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">
            {fullMaskLocked ? 'visibility_off' : 'fingerprint'}
          </span>
          <span>
            {fullMaskLocked ? 'Lepas Spider-Mask (Mode Wajah)' : 'Toggle Full Spider-Sense Mask'}
          </span>
        </button>
        <span className="font-label-mono text-[10px] text-outline">
          Tip: Geser kursor di area wajah untuk efek X-Ray Spotlight
        </span>
      </div>
    </div>
  )
}
