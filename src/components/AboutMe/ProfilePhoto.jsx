'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function ProfilePhoto({
  maskSrc = '/profile-spiderman.png',
  faceSrc = '/profile-face.png',
  alt = 'Elga Alfareza, S.Kom. portrait',
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [pos, setPos] = useState({ x: 221, y: 175 }) // Default di area kepala/wajah
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const cardRef = useRef(null)

  const touchTimerRef = useRef(null)

  // Tracking posisi kursor secara presisi
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

  // Spotlight Mask untuk Topeng Spider-Man (Lingkaran proporsional, muncul jelas di tengah kursor, memudar dengan shadow di tepian)
  const spotlightMask = `radial-gradient(circle 185px at ${pos.x}px ${pos.y}px, black 0%, black 70%, rgba(0, 0, 0, 0.3) 88%, transparent 100%)`

  // Inverse Spotlight Mask untuk Wajah & Rambut Asli (Kepala/rambut/wajah ikut hilang di area kursor dan digantikan topeng)
  const inverseSpotlightMask = `radial-gradient(circle 185px at ${pos.x}px ${pos.y}px, transparent 0%, transparent 70%, rgba(0, 0, 0, 0.7) 88%, black 100%)`

  return (
    <div className="flex flex-col items-center w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] mx-auto select-none relative">
      {/* Floating Ambient Halo Lighting di Belakang Siluet Mengambang */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        {/* Soft Blue Center Backlight */}
        <div className="w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-primary/20 blur-3xl" />
        {/* Soft Red Rim Light (Sesuai rim light merah di foto) */}
        <div
          className={`absolute top-[10%] right-2 w-56 sm:w-64 h-56 sm:h-64 rounded-full blur-3xl transition-opacity duration-700 ${
            isHovered ? 'bg-red-600/35 opacity-100' : 'bg-red-600/15 opacity-60'
          }`}
        />
      </div>

      {/* Floating Animated Motion Wrapper ("Biarkan Dia Mengambang") */}
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
        className="w-full cursor-pointer relative"
      >
        {/* 3D Tilt Wrapper - Pure Floating Cutout (Tanpa background kotak) */}
        <div
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.12s ease-out',
          }}
          className="relative w-full aspect-[442/527]"
        >
          {/* LAYER 1 (DASAR): Wajah Asli Transparan (Tampil Penuh Secara Default, Kepala & Rambut Ikut Hilang Saat Topeng Muncul) */}
          <div
            style={{
              maskImage: isHovered ? inverseSpotlightMask : 'none',
              WebkitMaskImage: isHovered ? inverseSpotlightMask : 'none',
              transition: isHovered ? 'none' : 'mask 0.3s ease-out, -webkit-mask 0.3s ease-out',
            }}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <img
              src={faceSrc}
              alt={alt}
              className="w-full h-full object-contain object-bottom pointer-events-none transition-transform duration-500"
              style={{
                filter: isHovered
                  ? 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(239, 68, 68, 0.25))'
                  : 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(44, 103, 237, 0.25))',
              }}
            />
          </div>

          {/* LAYER 2 (DITUMPUK DI ATAS): Topeng Spider-Man Pas di Wajah yang Muncul Jelas & Menutupi Wajah di Sekitar Kursor dengan Shadow Halus */}
          <div
            style={{
              maskImage: isHovered ? spotlightMask : 'none',
              WebkitMaskImage: isHovered ? spotlightMask : 'none',
              opacity: isHovered ? 1 : 0,
              transition: isHovered ? 'opacity 0.2s ease-out' : 'opacity 0.35s ease-out',
            }}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            <img
              src={maskSrc}
              alt="Topeng Spider-Man Pas di Wajah Elga Alfareza"
              className="w-full h-full object-contain object-bottom pointer-events-none"
              style={{
                filter:
                  'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(239, 68, 68, 0.35))',
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Soft Ground Reflection Shadow (Memperkuat Kesan Melayang/Mengambang) */}
      <div className="w-48 sm:w-56 h-3 rounded-[100%] bg-black/60 blur-md -mt-3 mb-2 pointer-events-none -z-10" />
    </div>
  )
}
