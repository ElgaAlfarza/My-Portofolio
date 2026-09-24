'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

// Fallback slides jika belum ada foto yang diupload
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
    alt: photo.alt || `Foto ${num}`,
  }
}

export default function CraftGallery() {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightbox, setLightbox] = useState(null) // url of photo to show fullscreen
  const touchStartX = useRef(null)

  // Fetch photos from API
  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch('/api/photos', { cache: 'no-store' })
        if (!res.ok) throw new Error('Fetch failed')
        const photos = await res.json()
        if (Array.isArray(photos) && photos.length > 0) {
          // Filter hanya foto galeri (bukan foto profil face/mask)
          const galleryPhotos = photos.filter(
            (p) =>
              !p.name?.toLowerCase().includes('face') &&
              !p.name?.toLowerCase().includes('mask') &&
              !p.name?.toLowerCase().includes('spiderman') &&
              !p.name?.toLowerCase().includes('profile')
          )
          const built = galleryPhotos.length > 0
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
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

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

  // Clamp currentSlide when slides length changes
  useEffect(() => {
    if (currentSlide >= totalSlides && totalSlides > 0) {
      setCurrentSlide(0)
    }
  }, [totalSlides, currentSlide])

  return (
    <section className="w-full pt-space-xl pb-space-xl mb-margin" id="craft">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-space-lg">
        <div>
          <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase mb-2">
            <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
              GALLERY
            </span>
            <span>// DOKUMENTASI &amp; AKTIVITAS</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-on-surface tracking-tight">
            Galeri Foto
          </h2>
        </div>

        {/* Controls & Slide Counter */}
        <div className="flex items-center gap-space-md">
          {!loading && (
            <span className="font-label-mono text-label-mono text-secondary bg-surface-container-high px-3 py-1 rounded-full border border-white/[0.06]">
              {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={loading || totalSlides <= 1}
              aria-label="Sebelumnya"
              className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface flex items-center justify-center transition-all shadow-md border border-white/[0.06] active:scale-95 disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={handleNext}
              disabled={loading || totalSlides <= 1}
              aria-label="Berikutnya"
              className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface flex items-center justify-center transition-all shadow-md border border-white/[0.06] active:scale-95 disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="relative w-full py-8 sm:py-12 flex items-center justify-center">
          <div className="w-[300px] h-[420px] rounded-2xl overflow-hidden bg-surface-container-low border border-white/[0.08] animate-pulse" />
        </div>
      )}

      {/* 3D Perspective Cover Flow Carousel */}
      {!loading && (
        <div
          className="relative w-full overflow-visible py-6 px-2 focus:outline-none"
          style={{ perspective: '1400px' }}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full h-[520px] md:h-[580px] flex items-center justify-center overflow-hidden [--step:280px] sm:[--step:350px] md:[--step:430px]">
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
              let filter = 'brightness(0.6)'

              if (offset === 0) {
                // Foto Tengah: Ukuran Penuh, Cerah, Highlight Glow
                transform = 'translate3d(0, 0, 0) scale(1)'
                opacity = '1'
                zIndex = 30
                pointerEvents = 'auto'
                boxShadow = '0 20px 50px -10px rgba(44, 103, 237, 0.4), 0 0 35px rgba(0, 166, 224, 0.25)'
                filter = 'brightness(1.02)'
              } else if (absOffset === 1) {
                // Foto Samping (Kiri & Kanan): Berjejer di samping, tidak ditumpuk, ukuran lebih kecil (78%)
                transform = `translate3d(calc(${offset} * var(--step)), 0, 0) scale(0.78)`
                opacity = '0.65'
                zIndex = 20
                pointerEvents = 'auto'
                boxShadow = '0 12px 30px -8px rgba(0, 0, 0, 0.6)'
                filter = 'brightness(0.7)'
              } else if (absOffset === 2) {
                // Foto Lebih Luar: Ukuran makin kecil (58%), redup
                transform = `translate3d(calc(${offset} * var(--step)), 0, 0) scale(0.58)`
                opacity = '0.3'
                zIndex = 10
                pointerEvents = 'auto'
                boxShadow = '0 8px 20px -6px rgba(0, 0, 0, 0.5)'
                filter = 'brightness(0.5)'
              } else {
                // Sisa foto di luar viewport
                const dir = offset > 0 ? 1 : -1
                transform = `translate3d(calc(${dir * 3} * var(--step)), 0, 0) scale(0.4)`
                opacity = '0'
                zIndex = 0
                pointerEvents = 'none'
              }

              return (
                <div
                  key={slide.id}
                  onClick={() => {
                    if (offset === 0 && slide.url) {
                      setLightbox(slide.url)
                    } else {
                      setCurrentSlide(index)
                    }
                  }}
                  className={`absolute rounded-2xl overflow-hidden transition-all duration-700 ease-out cursor-pointer select-none flex items-center justify-center ${
                    offset === 0
                      ? 'border-2 border-primary/60'
                      : 'border border-white/[0.12] hover:border-white/40 hover:opacity-85'
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
                      <img
                        src={slide.url}
                        alt={slide.alt || 'Foto Galeri'}
                        className="block w-auto h-auto max-h-[460px] md:max-h-[500px] max-w-[80vw] md:max-w-[420px] rounded-2xl object-contain"
                        loading="lazy"
                      />
                      {/* Zoom hint on hover for active slide */}
                      {offset === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 rounded-2xl">
                          <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-full p-3 border border-white/20 shadow-xl">
                            <span className="material-symbols-outlined text-[28px] text-primary">zoom_in</span>
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

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Foto ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'w-7 h-2 bg-primary'
                    : 'w-2 h-2 bg-surface-container-high hover:bg-surface-bright'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal — klik foto aktif untuk buka fullscreen */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === 'Escape' && setLightbox(null)}
          tabIndex={-1}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-surface-container-high/80 hover:bg-surface-bright text-on-surface flex items-center justify-center transition-all border border-white/[0.1] z-10"
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
          <img
            src={lightbox}
            alt="Foto fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
