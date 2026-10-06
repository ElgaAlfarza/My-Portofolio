'use client'

import { useState, useRef, useCallback } from 'react'

export default function ProfilePhoto({
  maskSrc = '/profile-spiderman.png',
  faceSrc = '/profile-face.png',
  alt = 'Elga Alfareza, S.Kom. portrait',
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeMode, setActiveMode] = useState('spotlight') // 'spotlight' (lingkaran kursor) | 'full-mask' | 'face-only'
  const [pos, setPos] = useState({ x: 221, y: 230 }) // default posisi di area wajah
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
  const cardRef = useRef(null)

  // Update posisi kursor untuk lingkaran spotlight & 3D tilt
  const updatePointer = useCallback((clientX, clientY) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top))

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = -((y - centerY) / centerY) * 7
    const rotateY = ((x - centerX) / centerX) * 7
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    setPos({ x, y })
    setTilt({ rotateX, rotateY, glareX, glareY })
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
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
  }

  // Radial mask gradient untuk lingkaran spotlight lembut di sekitar kursor
  // Radius lingkaran 135px dengan feathering halus dari 0% ke 100%
  const spotlightMask = `radial-gradient(circle 135px at ${pos.x}px ${pos.y}px, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0) 100%)`

  const maskImageStyle =
    activeMode === 'full-mask'
      ? 'none'
      : activeMode === 'spotlight'
      ? spotlightMask
      : 'none'

  const isMaskVisible =
    activeMode === 'full-mask' || (activeMode === 'spotlight' && isHovered)

  return (
    <div className="flex flex-col items-center w-full max-w-[460px] mx-auto select-none">
      {/* Outer 3D Perspective Card Container */}
      <div
        ref={cardRef}
        style={{ perspective: '1200px' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={() => setIsHovered(true)}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsHovered(false)}
        className="w-full cursor-crosshair group relative"
      >
        <div
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.15s ease-out, box-shadow 0.4s ease',
          }}
          className={`relative w-full aspect-[442/527] rounded-3xl overflow-hidden bg-gradient-to-b from-[#141824] via-[#0d101a] to-[#07080e] border transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.85)] ${
            isMaskVisible
              ? 'border-red-500/40 shadow-[0_0_45px_rgba(220,38,38,0.3)] ring-1 ring-red-500/20'
              : 'border-white/[0.12] hover:border-primary/50 hover:shadow-[0_0_40px_rgba(44,103,237,0.25)]'
          }`}
        >
          {/* Studio Ambient Backlight (Sesuai rim light merah foto asli) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Center Blue Ambient Halo */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            {/* Right Rim Light Red Glow */}
            <div className="absolute top-[15%] right-0 w-64 h-64 rounded-full bg-red-600/25 blur-3xl pointer-events-none" />
            {/* Cybernetic Subtle Hex Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#2c67ed_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
          </div>

          {/* Dynamic Light Sheen Mengikuti Kursor */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
            }}
          />

          {/* LAYER 1 (DASAR): Gambar Wajah Asli Transparan (Background Sudah Dihapus) */}
          <img
            src={faceSrc}
            alt={alt}
            className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.02] z-10 pointer-events-none"
          />

          {/* LAYER 2 (DITUMPUK DI ATAS): Topeng Spider-Man Transparan yang Muncul Lembut HANYA di Lingkaran Kursor */}
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
                : 'opacity 0.5s ease-out',
            }}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            <img
              src={maskSrc}
              alt="Topeng Spider-Man Transparan Elga Alfareza"
              className="w-full h-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Glowing Red Spider Holographic Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-red-900/10 mix-blend-color-dodge opacity-60 pointer-events-none" />
          </div>

          {/* RETICLE LINGKARAN KURSOR SPIDER-SENSE LEMBUT */}
          {isHovered && activeMode === 'spotlight' && (
            <div
              className="absolute pointer-events-none rounded-full border border-red-500/30 z-30 transition-transform duration-75"
              style={{
                width: '270px',
                height: '270px',
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: 'translate(-50%, -50%)',
                background:
                  'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.02) 55%, transparent 100%)',
                boxShadow: '0 0 30px rgba(239, 68, 68, 0.2)',
              }}
            >
              {/* Subtle Targeting Reticle Crosshairs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-400/50 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-400/50 rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-400/50 rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-400/50 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-400/80 animate-ping" />
            </div>
          )}

          {/* Corner Cybernetic Brackets */}
          <div
            className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 pointer-events-none z-30 transition-colors duration-300"
            style={{ borderColor: isMaskVisible ? '#ef4444' : '#2c67ed' }}
          />
          <div
            className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 pointer-events-none z-30 transition-colors duration-300"
            style={{ borderColor: isMaskVisible ? '#ef4444' : '#2c67ed' }}
          />
          <div
            className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 pointer-events-none z-30 transition-colors duration-300"
            style={{ borderColor: isMaskVisible ? '#ef4444' : '#2c67ed' }}
          />
          <div
            className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 pointer-events-none z-30 transition-colors duration-300"
            style={{ borderColor: isMaskVisible ? '#ef4444' : '#2c67ed' }}
          />

          {/* Top HUD Telemetry Bar */}
          <div
            style={{ transform: 'translateZ(30px)' }}
            className="absolute top-4 inset-x-5 flex justify-between items-center font-label-mono text-[10px] pointer-events-none z-30 transition-all duration-300"
          >
            <span className="bg-surface-container-lowest/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/[0.1] text-on-surface shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              IDENTITAS // ELGA ALFAREZA, S.Kom.
            </span>

            <span
              className={`backdrop-blur-md px-3 py-1 rounded-full border transition-all duration-300 flex items-center gap-1.5 shadow-sm ${
                isMaskVisible
                  ? 'bg-red-950/85 text-red-300 border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.4)] animate-pulse'
                  : 'bg-surface-container-lowest/85 text-secondary border-secondary/20'
              }`}
            >
              <span className="material-symbols-outlined text-[13px]">
                {isMaskVisible ? 'sensors' : 'fingerprint'}
              </span>
              SPIDER_SENSE: {isMaskVisible ? 'FOKUS KURSOR AKTIF' : 'STANDBY'}
            </span>
          </div>

          {/* Bottom Glass HUD Overlay */}
          <div
            style={{ transform: 'translateZ(40px)' }}
            className="absolute bottom-4 inset-x-5 p-space-sm sm:p-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl border border-white/[0.1] flex items-center justify-between pointer-events-none z-30 shadow-2xl transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-label-mono px-2 py-0.5 rounded bg-surface-container text-primary font-semibold border border-white/[0.04]">
                  {activeMode === 'spotlight'
                    ? isHovered
                      ? 'SPOTLIGHT // LINGKARAN KURSOR'
                      : 'STANDBY // ARAHKAN KURSOR'
                    : activeMode === 'full-mask'
                    ? 'PENUH // 100% TOPENG'
                    : 'ASLI // 100% WAJAH'}
                </span>
                <span
                  className={`font-label-mono text-label-sm font-bold transition-colors duration-300 ${
                    isMaskVisible ? 'text-red-400' : 'text-secondary'
                  }`}
                >
                  {isMaskVisible ? 'SPIDER-MAN REVEAL' : 'IDENTITAS RESMI'}
                </span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant">
                {isHovered && activeMode === 'spotlight'
                  ? 'Topeng terlihat lembut di lingkaran sekitar kursor'
                  : 'Gerakkan kursor ke foto untuk melihat topeng di sekitar kursor'}
              </p>
            </div>

            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-md transition-all duration-300 shrink-0 ${
                isMaskVisible
                  ? 'bg-red-900/40 border-red-500/50 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                  : 'bg-surface-container border-white/[0.06] text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {isMaskVisible ? 'radar' : 'visibility'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Mode Control Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 font-label-mono text-xs z-20">
        <button
          onClick={() => setActiveMode('spotlight')}
          className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 shadow-sm ${
            activeMode === 'spotlight'
              ? 'bg-primary-container text-on-primary-container font-semibold border-primary shadow-[0_0_15px_rgba(44,103,237,0.3)]'
              : 'bg-surface-container-high hover:bg-surface-bright text-on-surface-variant border-white/[0.06]'
          }`}
        >
          <span className="material-symbols-outlined text-[15px]">radar</span>
          <span>Lingkaran Kursor (Lembut)</span>
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
