'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function ProfilePhoto({
  maskSrc = '/profile-spiderman.png',
  faceSrc = '/profile-face.png',
  alt = 'Elga Alfareza, S.Kom. portrait',
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeMode, setActiveMode] = useState('spotlight') // 'spotlight' (lingkaran kursor) | 'full-mask' | 'face-only'
  const [pos, setPos] = useState({ x: 221, y: 190 }) // default posisi di area mata/wajah
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const cardRef = useRef(null)

  // Update posisi kursor untuk lingkaran spotlight & 3D tilt lembut
  const updatePointer = useCallback((clientX, clientY) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top))

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = -((y - centerY) / centerY) * 6
    const rotateY = ((x - centerX) / centerX) * 6

    setPos({ x, y })
    setTilt({ rotateX, rotateY })
  }, [])

  const handleMouseMove = (e) => {
    setIsHovered(true)
    updatePointer(e.clientX, e.clientY)
  }

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      setIsHovered(true)
      updatePointer(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  // Radial mask gradient untuk lingkaran spotlight lembut di sekitar kursor
  // Radius 130px dengan feathering transisi lembut (0% ke 100%)
  const spotlightMask = `radial-gradient(circle 130px at ${pos.x}px ${pos.y}px, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0) 100%)`

  const maskImageStyle =
    activeMode === 'full-mask'
      ? 'none'
      : activeMode === 'spotlight'
      ? spotlightMask
      : 'none'

  const isMaskVisible =
    activeMode === 'full-mask' || (activeMode === 'spotlight' && isHovered)

  return (
    <div className="flex flex-col items-center w-full max-w-[440px] mx-auto select-none relative">
      {/* Floating Ambient Halo Lighting di Belakang Siluet Mengambang */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        {/* Soft Blue Center Backlight */}
        <div className="w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        {/* Soft Red Rim Light (Sesuai rim light merah di foto) */}
        <div
          className={`absolute top-[10%] right-2 w-64 h-64 rounded-full blur-3xl transition-opacity duration-700 ${
            isMaskVisible ? 'bg-red-600/35 opacity-100' : 'bg-red-600/15 opacity-60'
          }`}
        />
      </div>

      {/* Floating Animated Motion Wrapper ("Biarkan Dia Mengambang") */}
      <motion.div
        animate={{ y: [-6, 8, -6] }}
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
        onTouchStart={() => setIsHovered(true)}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsHovered(false)}
        className="w-full cursor-crosshair group relative"
      >
        {/* 3D Tilt Wrapper - TANPA Background Kotak (Pure Floating Cutout) */}
        <div
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.12s ease-out',
          }}
          className="relative w-full aspect-[442/527]"
        >
          {/* LAYER 1 (DASAR): Wajah Asli Transparan Mengambang */}
          <img
            src={faceSrc}
            alt={alt}
            className="absolute inset-0 w-full h-full object-contain object-bottom pointer-events-none z-10 transition-transform duration-500 group-hover:scale-[1.02]"
            style={{
              filter: isMaskVisible
                ? 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(239, 68, 68, 0.25))'
                : 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(44, 103, 237, 0.25))',
            }}
          />

          {/* LAYER 2 (DITUMPUK DI ATAS): Topeng Spider-Man Transparan Pas di Wajah & Muncul Lembut HANYA di Lingkaran Kursor */}
          <div
            style={{
              maskImage: maskImageStyle,
              WebkitMaskImage: maskImageStyle,
              opacity:
                activeMode === 'face-only'
                  ? 0
                  : activeMode === 'full-mask'
                  ? 1
                  : isHovered
                  ? 1
                  : 0,
              transition: isHovered
                ? 'opacity 0.25s ease-out'
                : 'opacity 0.45s ease-out',
            }}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            <img
              src={maskSrc}
              alt="Topeng Spider-Man Pas di Wajah Elga Alfareza"
              className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
              style={{
                filter: 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(239, 68, 68, 0.35))',
              }}
            />
          </div>

          {/* RETICLE LINGKARAN SPOTLIGHT KURSOR LEMBUT */}
          {isHovered && activeMode === 'spotlight' && (
            <div
              className="absolute pointer-events-none rounded-full border border-red-500/40 z-30 transition-transform duration-75"
              style={{
                width: '260px',
                height: '260px',
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: 'translate(-50%, -50%)',
                background:
                  'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.02) 55%, transparent 100%)',
                boxShadow: '0 0 30px rgba(239, 68, 68, 0.25)',
              }}
            >
              {/* Center Crosshair Glow Reticle */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-400/60 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-400/60 rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-400/60 rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-400/60 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-400/90 animate-ping" />
            </div>
          )}

          {/* Floating Subtle HUD Tag at Upper Right */}
          <div
            style={{ transform: 'translateZ(25px)' }}
            className="absolute top-2 right-2 pointer-events-none z-30 font-label-mono text-[10px]"
          >
            <span
              className={`px-3 py-1 rounded-full border backdrop-blur-md transition-all duration-300 flex items-center gap-1.5 shadow-lg ${
                isMaskVisible
                  ? 'bg-red-950/85 text-red-300 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse'
                  : 'bg-surface-container-lowest/80 text-secondary border-white/[0.08]'
              }`}
            >
              <span className="material-symbols-outlined text-[13px]">
                {isMaskVisible ? 'sensors' : 'fingerprint'}
              </span>
              <span>{isMaskVisible ? 'SPIDER-SENSE AKTIF' : 'IDENTITAS ASLI'}</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Soft Ground Reflection Shadow (Memperkuat Kesan Melayang/Mengambang) */}
      <div className="w-48 sm:w-56 h-3 rounded-[100%] bg-black/60 blur-md -mt-3 mb-4 pointer-events-none -z-10" />

      {/* Floating Status Pill */}
      <div className="flex items-center gap-2 mb-3 font-label-mono text-xs text-on-surface-variant">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        <span>
          {isHovered && activeMode === 'spotlight'
            ? 'Topeng terlihat lembut di lingkaran sekitar kursor'
            : 'Arahkan kursor ke tubuh/wajah untuk memunculkan topeng lembut'}
        </span>
      </div>

      {/* Interactive Mode Control Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 font-label-mono text-xs z-20">
        <button
          onClick={() => setActiveMode('spotlight')}
          className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 shadow-sm ${
            activeMode === 'spotlight'
              ? 'bg-primary-container text-on-primary-container font-semibold border-primary shadow-[0_0_15px_rgba(44,103,237,0.3)]'
              : 'bg-surface-container-high hover:bg-surface-bright text-on-surface-variant border-white/[0.06]'
          }`}
        >
          <span className="material-symbols-outlined text-[15px]">radar</span>
          <span>Lingkaran Kursor (Spotlight)</span>
        </button>

        <button
          onClick={() =>
            setActiveMode(activeMode === 'full-mask' ? 'spotlight' : 'full-mask')
          }
          className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 shadow-sm ${
            activeMode === 'full-mask'
              ? 'bg-red-900/50 text-red-300 font-semibold border-red-500/60 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
              : 'bg-surface-container-high hover:bg-surface-bright text-on-surface-variant border-white/[0.06]'
          }`}
        >
          <span className="material-symbols-outlined text-[15px]">masks</span>
          <span>Topeng Penuh (100%)</span>
        </button>

        <button
          onClick={() => setActiveMode('face-only')}
          className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 shadow-sm ${
            activeMode === 'face-only'
              ? 'bg-surface-bright text-on-surface font-semibold border-white/[0.2]'
              : 'bg-surface-container-high hover:bg-surface-bright text-on-surface-variant border-white/[0.06]'
          }`}
        >
          <span className="material-symbols-outlined text-[15px]">face</span>
          <span>Wajah Asli Saja</span>
        </button>
      </div>
    </div>
  )
}
