'use client'

import { useState, useCallback } from 'react'

export default function ProfilePhoto({
  maskSrc = '/profile-spiderman.jpg',
  faceSrc = '/profile-face.png',
  alt = 'Elga Alfareza, S.Kom. portrait',
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isToggled, setIsToggled] = useState(false)

  // Saat kursor didekatkan (hover) atau di-tap (toggle mobile), topeng spiderman kelihatan
  const showMask = isHovered || isToggled

  const handleToggle = useCallback(() => {
    setIsToggled((prev) => !prev)
  }, [])

  return (
    <div className="flex flex-col items-center w-full max-w-[340px]">
      <div
        role="button"
        tabIndex={0}
        aria-label="Hover atau klik untuk mengaktifkan topeng Spider-Man"
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleToggle()
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-surface-container-lowest shadow-[0_20px_50px_rgba(0,0,0,0.7)] border transition-all duration-500 group cursor-pointer select-none ${
          showMask
            ? 'border-red-500/50 shadow-[0_0_40px_rgba(220,38,38,0.35)]'
            : 'border-white/[0.1] hover:border-secondary/40 hover:shadow-[0_0_35px_rgba(44,103,237,0.3)]'
        }`}
      >
        {/* Layer 1: Real Portrait Wajah Asli (Dasar) */}
        <img
          src={faceSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Layer 2: Topeng Spider-Man (Muncul saat kursor didekatkan / di-hover) */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out pointer-events-none ${
            showMask ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={maskSrc}
            alt="Elga Alfareza Spider-Man Mask"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* Top HUD Readout */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center font-label-mono text-[10px] pointer-events-none z-10 transition-colors duration-300">
          <span className="bg-surface-container-lowest/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/[0.08] text-primary">
            HELMET_V4.2
          </span>
          <span
            className={`backdrop-blur-md px-2.5 py-1 rounded-full border transition-all duration-300 ${
              showMask
                ? 'bg-red-950/80 text-red-400 border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.4)] animate-pulse'
                : 'bg-surface-container-lowest/85 text-tertiary border-tertiary/20'
            }`}
          >
            SPIDER_SENSE: {showMask ? 'ACTIVE' : 'STANDBY'}
          </span>
        </div>

        {/* Bottom Glass Metadata / Hover Status Card */}
        <div className="absolute bottom-4 inset-x-4 p-space-sm rounded-xl bg-surface-container-lowest/85 backdrop-blur-md border border-white/[0.1] flex items-center justify-between pointer-events-none z-10 transition-all duration-300">
          <div>
            <p
              className={`font-label-mono text-label-sm font-semibold transition-colors duration-300 ${
                showMask ? 'text-red-400' : 'text-secondary'
              }`}
            >
              {showMask ? 'STATUS // SPIDER-MAN PROTOCOL' : 'STATUS // REAL IDENTITY'}
            </p>
            <p className="font-body-sm text-[11px] text-on-surface-variant">
              {showMask ? 'Topeng Spider-Man Aktif' : 'Dekatkan kursor untuk pasang topeng'}
            </p>
          </div>
          <span
            className={`material-symbols-outlined text-[20px] transition-colors duration-300 ${
              showMask ? 'text-red-400 animate-pulse' : 'text-primary'
            }`}
          >
            {showMask ? 'smart_toy' : 'visibility'}
          </span>
        </div>
      </div>

      {/* Manual Interactive Toggle Button */}
      <button
        onClick={handleToggle}
        className={`mt-space-sm inline-flex items-center gap-2 px-4 py-2 rounded-full font-label-mono text-label-sm transition-all shadow-md border active:scale-95 ${
          showMask
            ? 'bg-red-600/20 text-red-300 border-red-500/40 hover:bg-red-600/30'
            : 'bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface border-white/[0.06]'
        }`}
      >
        <span className="material-symbols-outlined text-[16px] text-secondary">
          fingerprint
        </span>
        <span>
          {showMask ? 'Lepas Topeng Spider-Man' : 'Pasang Topeng Spider-Man'}
        </span>
      </button>
    </div>
  )
}
