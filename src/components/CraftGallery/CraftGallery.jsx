'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const FALLBACK_SLIDES = [
  {
    id: 'fallback-1',
    url: null,
    alt: 'Upload foto via admin panel',
  },
]

function buildSlideFromPhoto(photo, index) {
  const num = String(index + 1).padStart(2, '0')
  return {
    id: photo.id,
    url: photo.url,
    alt: photo.alt || `Dokumentasi ${num}`,
    code: `FRAME // ${num}`,
  }
}

export default function CraftGallery() {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const touchStartX = useRef(null)
  const lightboxRef = useRef(null)

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch('/api/photos', { cache: 'no-store' })
        if (!res.ok) throw new Error('Fetch failed')
        const photos = await res.json()
        if (Array.isArray(photos) && photos.length > 0) {
          const galleryPhotos = photos.filter(
            (p) =>
              !p.name?.toLowerCase().includes('face') &&
              !p.name?.toLowerCase().includes('mask') &&
              !p.name?.toLowerCase().includes('spiderman') &&
              !p.name?.toLowerCase().includes('profile')
          )
          const built =
            galleryPhotos.length > 0
              ? galleryPhotos.map(buildSlideFromPhoto)
              : FALLBACK_SLIDES
          setSlides(built)
        } else {
          setSlides(FALLBACK_SLIDES)
        }
      } catch {
        setSlides(FALLBACK_SLIDES)
      } finally {
        setLoading(false)
      }
    }
    fetchPhotos()
  }, [])

  const totalSlides = slides.length

  const handlePrev = useCallback(() => {
    if (totalSlides <= 1) return
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const handleNext = useCallback(() => {
    if (totalSlides <= 1) return
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  // Auto-play timer when enabled
  useEffect(() => {
    if (!autoPlay || totalSlides <= 1 || lightboxOpen) return undefined
    const id = setInterval(handleNext, 3800)
    return () => clearInterval(id)
  }, [autoPlay, totalSlides, lightboxOpen, handleNext])

  // Native <dialog> open/close sync + light-dismiss fallback
  useEffect(() => {
    const dialog = lightboxRef.current
    if (!dialog) return

    if (lightboxOpen) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [lightboxOpen])

  useEffect(() => {
    const dialog = lightboxRef.current
    if (!dialog) return

    const onClose = () => setLightboxOpen(false)
    dialog.addEventListener('close', onClose)

    let handleBackdropClick = null
    if (typeof HTMLDialogElement !== 'undefined' && !('closedBy' in HTMLDialogElement.prototype)) {
      handleBackdropClick = (event) => {
        if (event.target !== dialog) return
        const rect = dialog.getBoundingClientRect()
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        if (!isDialogContent) {
          dialog.close()
        }
      }
      dialog.addEventListener('click', handleBackdropClick)
    }

    return () => {
      dialog.removeEventListener('close', onClose)
      if (handleBackdropClick) {
        dialog.removeEventListener('click', handleBackdropClick)
      }
    }
  }, [])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) handleNext()
    if (diff < -50) handlePrev()
    touchStartX.current = null
  }
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrev()
    if (e.key === 'ArrowRight') handleNext()
  }

  useEffect(() => {
    if (currentSlide >= totalSlides && totalSlides > 0) {
      setCurrentSlide(0)
    }
  }, [totalSlides, currentSlide])

  const activeSlideObj = slides[currentSlide] || null

  return (
    <section className="w-full py-14 sm:py-20" id="craft">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2.5 font-label-mono text-label-mono text-secondary uppercase mb-2.5">
            <span className="section-badge">SECTION 06</span>
            <span>// DOKUMENTASI &amp; AKTIVITAS</span>
          </div>
          <h2 className="heading-balance font-headline-lg text-headline-lg font-bold text-white tracking-tight">
            Galeri Dokumentasi &amp; Aktivitas
          </h2>
        </div>

        {/* Controls & Counter */}
        <div className="flex flex-wrap items-center gap-2.5">
          {!loading && totalSlides > 1 && (
            <button
              type="button"
              onClick={() => setAutoPlay((p) => !p)}
              className={`px-3 py-1.5 rounded-full font-label-mono text-xs border transition-all flex items-center gap-1.5 ${
                autoPlay
                  ? 'bg-primary-container text-white border-primary/50'
                  : 'bg-[#111521] text-on-surface-variant hover:text-white border-white/[0.08]'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">
                {autoPlay ? 'pause' : 'play_arrow'}
              </span>
              <span>{autoPlay ? 'AUTO: ON' : 'AUTO'}</span>
            </button>
          )}

          {!loading && (
            <span className="font-label-mono text-xs text-secondary bg-[#111521] px-3.5 py-1.5 rounded-full border border-white/[0.08]">
              {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={loading || totalSlides <= 1}
              aria-label="Sebelumnya"
              className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-white text-on-surface flex items-center justify-center transition-all shadow-md border border-white/[0.08] active:scale-95 disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={loading || totalSlides <= 1}
              aria-label="Berikutnya"
              className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-white text-on-surface flex items-center justify-center transition-all shadow-md border border-white/[0.08] active:scale-95 disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="relative w-full py-8 sm:py-12 flex items-center justify-center">
          <div className="w-[310px] h-[420px] rounded-2xl overflow-hidden skeleton border border-white/[0.08]" />
        </div>
      )}

      {/* 3D Perspective Cover Flow Stage */}
      {!loading && (
        <div
          className="relative w-full overflow-visible py-4 px-2 focus:outline-none"
          style={{ perspective: '1400px' }}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full h-[390px] sm:h-[470px] md:h-[540px] flex items-center justify-center overflow-hidden [--step:170px] sm:[--step:260px] md:[--step:340px] lg:[--step:410px]">
            {slides.map((slide, index) => {
              let offset = index - currentSlide
              if (offset > totalSlides / 2) offset -= totalSlides
              else if (offset < -totalSlides / 2) offset += totalSlides

              const absOffset = Math.abs(offset)
              let transform = ''
              let opacity = '0'
              let zIndex = 10
              let pointerEvents = 'none'
              let boxShadow = 'none'
              let filter = 'brightness(0.55)'

              if (offset === 0) {
                transform = 'translate3d(0, 0, 0) rotateY(0deg) scale(1)'
                opacity = '1'
                zIndex = 30
                pointerEvents = 'auto'
                boxShadow =
                  '0 24px 60px -12px rgba(44, 103, 237, 0.42), 0 0 36px rgba(56, 189, 248, 0.22)'
                filter = 'brightness(1.02)'
              } else if (absOffset === 1) {
                const rotY = offset > 0 ? -16 : 16
                transform = `translate3d(calc(${offset} * var(--step)), 0, -60px) rotateY(${rotY}deg) scale(0.8)`
                opacity = '0.68'
                zIndex = 20
                pointerEvents = 'auto'
                boxShadow = '0 14px 32px -8px rgba(0, 0, 0, 0.7)'
                filter = 'brightness(0.68)'
              } else if (absOffset === 2) {
                const rotY = offset > 0 ? -24 : 24
                transform = `translate3d(calc(${offset} * var(--step)), 0, -120px) rotateY(${rotY}deg) scale(0.6)`
                opacity = '0.28'
                zIndex = 10
                pointerEvents = 'auto'
                boxShadow = '0 8px 20px -6px rgba(0, 0, 0, 0.5)'
                filter = 'brightness(0.48)'
              } else {
                const dir = offset > 0 ? 1 : -1
                transform = `translate3d(calc(${dir * 3} * var(--step)), 0, -180px) scale(0.4)`
                opacity = '0'
                zIndex = 0
                pointerEvents = 'none'
              }

              return (
                <div
                  key={slide.id}
                  onClick={() => {
                    if (offset === 0 && slide.url) {
                      setLightboxOpen(true)
                    } else {
                      setCurrentSlide(index)
                    }
                  }}
                  className={`absolute rounded-2xl overflow-hidden transition-all duration-700 ease-out cursor-pointer select-none flex items-center justify-center bg-[#0d1018] ${
                    offset === 0
                      ? 'border-2 border-primary/70'
                      : 'border border-white/[0.12] hover:border-white/40'
                  }`}
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    pointerEvents,
                    boxShadow,
                    filter,
                    maxWidth: 'min(85vw, 440px)',
                  }}
                >
                  {slide.url ? (
                    <div className="relative group flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.url}
                        alt={slide.alt || 'Foto Galeri'}
                        className="block w-auto h-auto max-h-[340px] sm:max-h-[430px] md:max-h-[490px] max-w-[80vw] md:max-w-[420px] rounded-2xl object-contain"
                        loading="lazy"
                      />

                      {/* Frame HUD Tag */}
                      {offset === 0 && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 font-label-mono text-[10px] text-secondary pointer-events-none">
                          {slide.code}
                        </div>
                      )}

                      {/* Fullscreen Zoom Hint */}
                      {offset === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-2xl">
                          <div className="bg-[#0b0e16]/90 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-xl flex items-center gap-1.5 font-label-mono text-xs text-white">
                            <span className="material-symbols-outlined text-[18px] text-secondary">
                              zoom_in
                            </span>
                            <span>Fullscreen</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-[280px] h-[280px] flex flex-col items-center justify-center gap-3 bg-surface-container p-6 text-center rounded-2xl">
                      <span className="material-symbols-outlined text-[44px] text-outline">
                        add_photo_alternate
                      </span>
                      <p className="font-label-mono text-label-sm text-on-surface-variant">
                        Belum ada foto — upload via Admin Panel
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Interactive Thumbnail Filmstrip (when multiple photos exist) */}
          {totalSlides > 1 && slides[0]?.url && (
            <div className="flex items-center justify-center gap-2 mt-6 overflow-x-auto py-1.5 px-2 max-w-3xl mx-auto">
              {slides.map((slide, idx) => {
                const active = idx === currentSlide
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Pilih Foto ${idx + 1}`}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 transition-all duration-300 border ${
                      active
                        ? 'border-secondary ring-2 ring-primary/60 scale-105 opacity-100'
                        : 'border-white/10 opacity-45 hover:opacity-85'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slide.url}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* Native Top-Layer Lightbox Dialog with Light-Dismiss & Prev/Next Controls */}
      <dialog
        ref={lightboxRef}
        {...{ closedby: 'any' }}
        aria-label="Pratinjau Foto Fullscreen"
        onKeyDown={onKeyDown}
        className="lightbox-dialog"
      >
        {lightboxOpen && activeSlideObj?.url && (
          <div className="relative flex flex-col items-center justify-center gap-3 select-none">
            <div className="w-full flex items-center justify-between gap-4 px-2 text-white font-label-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-[#111522]/90 border border-white/15 text-secondary">
                {activeSlideObj.code} ({currentSlide + 1} / {totalSlides})
              </span>
              <button
                type="button"
                onClick={() => lightboxRef.current?.close()}
                className="w-10 h-10 rounded-full bg-[#111522]/90 hover:bg-primary-container text-white flex items-center justify-center transition-all border border-white/15"
                aria-label="Tutup Fullscreen"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              {totalSlides > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Foto Sebelumnya"
                  className="absolute left-2 sm:-left-14 z-10 w-10 h-10 rounded-full bg-[#111522]/90 hover:bg-primary-container text-white flex items-center justify-center border border-white/15 shadow-xl"
                >
                  <span className="material-symbols-outlined text-[22px]">chevron_left</span>
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeSlideObj.url}
                alt={activeSlideObj.alt || 'Foto fullscreen'}
                className="max-w-[92vw] max-h-[80dvh] object-contain rounded-2xl shadow-2xl border border-white/15"
              />

              {totalSlides > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Foto Berikutnya"
                  className="absolute right-2 sm:-right-14 z-10 w-10 h-10 rounded-full bg-[#111522]/90 hover:bg-primary-container text-white flex items-center justify-center border border-white/15 shadow-xl"
                >
                  <span className="material-symbols-outlined text-[22px]">chevron_right</span>
                </button>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
