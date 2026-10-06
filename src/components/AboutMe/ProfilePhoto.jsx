'use client'

import { useState, useCallback, useRef } from 'react'

export default function ProfilePhoto({
  maskSrc = '/profile-spiderman.png',
  faceSrc = '/profile-face.png',
  alt = 'Elga Alfareza, S.Kom. portrait',
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeMode, setActiveMode] = useState('hover-translucent') // 'hover-translucent' | 'full-mask' | 'face-only'
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
  const cardRef = useRef(null)

  // Hitung tingkat transparansi topeng Spider-Man
  // Saat mode hover: ketika kursor di atas gambar -> samar-samar terlihat (opacity ~65%)
  let maskOpacity = 0
  if (activeMode === 'full-mask') {
    maskOpacity = 1.0
  } else if (activeMode === 'face-only') {
    maskOpacity = 0.0
  } else {
    // Mode default: hover-translucent (samar-samar saat kursor di atasnya)
    maskOpacity = isHovered ? 0.68 : 0.0
  }

  // Mouse move untuk efek 3D Parallax Tilt & dynamic light sheen
  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -((y - centerY) / centerY) * 8
    const rotateY = ((x - centerX) / centerX) * 8
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    setTilt({ rotateX, rotateY, glareX, glareY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
  }

  return (
    <div className="flex flex-col items-center w-full max-w-[460px] mx-auto select-none">
      {/* Outer 3D Perspective Container */}
      <div
        ref={cardRef}
        style={{ perspective: '1200px' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="w-full cursor-pointer group"
      >
        <div
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.15s ease-out, box-shadow 0.5s ease',
          }}
          className={`relative w-full aspect-[442/527] rounded-3xl overflow-hidden bg-gradient-to-b from-surface-container-high/60 via-surface-container/40 to-surface-container-lowest border transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.8)] ${
            maskOpacity > 0
              ? 'border-red-500/50 shadow-[0_0_50px_rgba(220,38,38,0.35)] ring-1 ring-red-500/30'
              : 'border-white/[0.12] hover:border-primary/50 hover:shadow-[0_0_40px_rgba(44,103,237,0.3)]'
          }`}
        >
          {/* Ambient Cybernetic Backlight Glow */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 blur-2xl z-0 ${
              maskOpacity > 0
                ? 'opacity-60 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.4)_0%,transparent_65%)]'
                : 'opacity-40 bg-[radial-gradient(ellipse_at_top_right,rgba(44,103,237,0.35)_0%,transparent_65%)]'
            }`}
          />

          {/* Dynamic Light Sheen Following Cursor */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
            }}
          />

          {/* LAYER 1 (DASAR): Wajah Asli Elga Alfareza */}
          <img
            src={faceSrc}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] z-10"
          />

          {/* LAYER 2 (DITUMPUK DI ATAS): Topeng Spider-Man Samar-Samar saat Hover */}
          <div
            style={{
              opacity: maskOpacity,
              transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            <img
              src={maskSrc}
              alt="Topeng Spider-Man Samar-Samar Elga Alfareza"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Glowing Red Holographic Aura Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 via-transparent to-red-900/10 mix-blend-color-dodge opacity-70 pointer-events-none" />
          </div>

          {/* Corner Cybernetic Brackets */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 pointer-events-none z-30 transition-colors duration-300" style={{ borderColor: maskOpacity > 0 ? '#ef4444' : '#2c67ed' }} />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 pointer-events-none z-30 transition-colors duration-300" style={{ borderColor: maskOpacity > 0 ? '#ef4444' : '#2c67ed' }} />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 pointer-events-none z-30 transition-colors duration-300" style={{ borderColor: maskOpacity > 0 ? '#ef4444' : '#2c67ed' }} />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 pointer-events-none z-30 transition-colors duration-300" style={{ borderColor: maskOpacity > 0 ? '#ef4444' : '#2c67ed' }} />

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
                maskOpacity > 0
                  ? 'bg-red-950/85 text-red-300 border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.4)] animate-pulse'
                  : 'bg-surface-container-lowest/85 text-secondary border-secondary/20'
              }`}
            >
              <span className="material-symbols-outlined text-[13px]">
                {maskOpacity > 0 ? 'sensors' : 'fingerprint'}
              </span>
              SPIDER_SENSE: {maskOpacity > 0 ? 'SAMAR-SAMAR AKTIF' : 'STANDBY'}
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
                  {maskOpacity > 0 ? 'SAMAR-SAMAR // 68%' : 'WAJAH ASLI // 100%'}
                </span>
                <span
                  className={`font-label-mono text-label-sm font-bold transition-colors duration-300 ${
                    maskOpacity > 0 ? 'text-red-400' : 'text-secondary'
                  }`}
                >
                  {maskOpacity > 0 ? 'TOPENG SPIDER-MAN AKTIF' : 'STATUS // IDENTITAS ASLI'}
                </span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant">
                {maskOpacity > 0
                  ? 'Topeng Spider-Man terlihat samar-samar di atas wajah'
                  : 'Arahkan kursor ke atas gambar untuk melihat topeng samar-samar'}
              </p>
            </div>

            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-md transition-all duration-300 shrink-0 ${
                maskOpacity > 0
                  ? 'bg-red-900/40 border-red-500/50 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                  : 'bg-surface-container border-white/[0.06] text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {maskOpacity > 0 ? 'smart_toy' : 'visibility'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Mode Control Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 font-label-mono text-xs z-20">
        <button
          onClick={() => setActiveMode('hover-translucent')}
          className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 shadow-sm ${
            activeMode === 'hover-translucent'
              ? 'bg-primary-container text-on-primary-container font-semibold border-primary shadow-[0_0_15px_rgba(44,103,237,0.3)]'
              : 'bg-surface-container-high hover:bg-surface-bright text-on-surface-variant border-white/[0.06]'
          }`}
        >
          <span className="material-symbols-outlined text-[15px]">touch_app</span>
          <span>Hover Samar-Samar (Default)</span>
        </button>

        <button
          onClick={() => setActiveMode(activeMode === 'full-mask' ? 'hover-translucent' : 'full-mask')}
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
