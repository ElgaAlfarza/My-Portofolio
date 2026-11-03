'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { closeTopLayer } from '../../utils/topLayer'

const FALLBACK_PHOTOS = [
  {
    id: 'photo-01',
    url: '/elga-graduation-studio.jpg',
    alt: 'Dokumentasi Wisuda S1 Ilmu Komputer Universitas Bumigora (IPK 3.76 Cum Laude)',
    label: 'Wisuda & Yudisium S.Kom.',
    sub: 'Univ. Bumigora • Cum Laude 3.76',
  },
  {
    id: 'photo-02',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_49_1790245665527.jpeg',
    alt: 'Dokumentasi Operasional Server Simbank CV Rajawali',
    label: 'Operasional Server Simbank',
    sub: 'CV Rajawali • 99.9% Uptime',
  },
  {
    id: 'photo-03',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_51_1790245665530.jpeg',
    alt: 'Dokumentasi Penugasan Program Kampus Mengajar 7 Kemendikbudristek RI',
    label: 'Kampus Mengajar 7 Dikti',
    sub: 'SMPN 20 Mataram • AKM Digital',
  },
  {
    id: 'photo-04',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_51__1__1790245665529.jpeg',
    alt: 'Dokumentasi Pelatihan K3 & Spreadsheet Kemnaker RI',
    label: 'Sertifikasi K3 Kemnaker',
    sub: 'BPVP Belitung • Standar Nasional',
  },
  {
    id: 'photo-05',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_52_1790245665536.jpeg',
    alt: 'Dokumentasi Kegiatan Asesmen dan Pengajaran Teknologi',
    label: 'Digitalisasi Asesmen Sekolah',
    sub: 'SMPN 20 Mataram • Literasi',
  },
  {
    id: 'photo-06',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_52__1__1790245665532.jpeg',
    alt: 'Dokumentasi Quality Control dan Pengujian Perangkat',
    label: 'Quality Control Hardware & QA',
    sub: 'CV Sinar Mutiara Bali',
  },
  {
    id: 'photo-07',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_53_1790245665538.jpeg',
    alt: 'Dokumentasi Akademik dan Komputasi Digital',
    label: 'Riset Machine Learning CNN',
    sub: 'Publikasi Jurnal SINTA 4',
  },
  {
    id: 'photo-08',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_54_1790245665540.jpeg',
    alt: 'Dokumentasi Pelaksanaan Program Kerja dan Kolaborasi',
    label: 'Koordinasi Tim & Pemeliharaan',
    sub: 'Mataram, Lombok, NTB',
  },
]

const ITEMS_PER_PAGE = 4

function buildPhotoItem(photo, index) {
  const num = String(index + 1).padStart(2, '0')
  return {
    id: photo.id || `photo-${num}`,
    url: photo.url,
    alt: photo.alt || `Dokumentasi Kegiatan ${num}`,
    label: photo.label || `Dokumentasi ${num}`,
    sub: photo.sub || 'Dokumentasi Kegiatan Nyata',
  }
}

export default function CraftGallery() {
  const [photos, setPhotos] = useState(FALLBACK_PHOTOS)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [activeIndex, setActiveIndex] = useState(null)
  const lightboxRef = useRef(null)

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch('/api/photos', { cache: 'no-store' })
        if (!res.ok) throw new Error('Fetch failed')
        const raw = await res.json()
        if (Array.isArray(raw) && raw.length > 0) {
          const filtered = raw.filter(
            (p) =>
              p?.url &&
              !p.name?.toLowerCase().includes('face') &&
              !p.name?.toLowerCase().includes('mask') &&
              !p.name?.toLowerCase().includes('spiderman') &&
              !p.name?.toLowerCase().includes('profile')
          )
          if (filtered.length > 0) {
            setPhotos(filtered.map(buildPhotoItem))
          }
        }
      } catch {
        // Retain verified fallback photos
      }
    }
    fetchPhotos()
  }, [])

  const totalPhotos = photos.length
  const totalPages = Math.max(1, Math.ceil(totalPhotos / ITEMS_PER_PAGE))
  const visiblePhotos = photos.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  )

  const handlePrevPhoto = useCallback(() => {
    if (totalPhotos <= 1) return
    setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + totalPhotos) % totalPhotos))
  }, [totalPhotos])

  const handleNextPhoto = useCallback(() => {
    if (totalPhotos <= 1) return
    setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % totalPhotos))
  }, [totalPhotos])

  // Sync native <dialog> modal open/close state
  useEffect(() => {
    const dialog = lightboxRef.current
    if (!dialog) return

    if (activeIndex !== null) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      closeTopLayer(dialog)
    }
  }, [activeIndex])

  // Handle native dialog `close` event + fallback for browsers without `closedby` (Modern Web Guidance)
  useEffect(() => {
    const dialog = lightboxRef.current
    if (!dialog) return

    const onClose = () => setActiveIndex(null)
    const onCancel = (e) => {
      e.preventDefault()
      closeTopLayer(dialog)
    }

    dialog.addEventListener('close', onClose)
    dialog.addEventListener('cancel', onCancel)

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
          closeTopLayer(dialog)
        }
      }
      dialog.addEventListener('click', handleBackdropClick)
    }

    return () => {
      dialog.removeEventListener('close', onClose)
      dialog.removeEventListener('cancel', onCancel)
      if (handleBackdropClick) {
        dialog.removeEventListener('click', handleBackdropClick)
      }
    }
  }, [])

  const onDialogKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrevPhoto()
    if (e.key === 'ArrowRight') handleNextPhoto()
  }

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null

  return (
    <section id="craft" className="w-full py-12 sm:py-16 border-t border-sandstone scroll-reveal">
      
      {/* Editorial Section Header (Image 2 "VIDEOGRAPHY" Section Style) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-sandstone text-[0.6875rem] font-mono uppercase tracking-widest text-ink-muted mb-2">
            <span className="font-bold text-ink">06</span>
            <span className="text-sandstone-dark">•</span>
            <span>FIELD DOCUMENTATION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            GALLERY &amp; DOCUMENTATION
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted mt-1">
            Rekaman visual kegiatan akademik, operasional server simbank, sertifikasi K3, dan penugasan Kampus Mengajar.
          </p>
        </div>

        {/* Carousel / Page Switcher */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Halaman galeri sebelumnya"
              className="exec-btn-secondary !py-1.5 !px-3 !text-xs !rounded-full"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                arrow_back
              </span>
            </button>
            <span className="font-mono text-xs font-semibold text-ink px-2">
              {page + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              aria-label="Halaman galeri berikutnya"
              className="exec-btn-secondary !py-1.5 !px-3 !text-xs !rounded-full"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                arrow_forward
              </span>
            </button>
          </div>
        )}
      </div>

      {/* 4 Smartphone Device Mockups Grid (Direct Match from Image 2) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {visiblePhotos.map((item, localIdx) => {
          const globalIndex = page * ITEMS_PER_PAGE + localIdx
          return (
            <div key={item.id} className="flex flex-col items-center group">
              {/* Phone Device Frame */}
              <button
                type="button"
                onClick={() => setActiveIndex(globalIndex)}
                className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-[2.25rem] transition-transform duration-300 group-hover:-translate-y-2"
                aria-label={`Buka pratinjau penuh ${item.label}`}
              >
                <div className="phone-frame w-full">
                  <div className="phone-screen aspect-[9/19] w-full relative">
                    
                    {/* Dynamic Island Pill at Top */}
                    <div className="phone-island" aria-hidden="true" />

                    {/* Photo Content */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.url}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gloss Reflection Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Bottom Home Indicator Bar */}
                    <div
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/60 rounded-full z-20 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Hover Hint */}
                    <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1 rounded-full bg-paper/90 backdrop-blur-sm text-[0.625rem] font-bold text-ink shadow-md flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">zoom_in</span>
                        <span>Perbesar</span>
                      </span>
                    </div>

                  </div>
                </div>
              </button>

              {/* Bottom Caption (Matches Image 2 Style: CLIENT NAME / SUMMARY) */}
              <div className="mt-3 text-center w-full px-1">
                <p className="font-sans text-xs font-bold text-ink truncate group-hover:text-brand transition-colors">
                  {item.label}
                </p>
                <p className="text-[0.6875rem] text-ink-muted truncate mt-0.5">
                  {item.sub}
                </p>
              </div>

            </div>
          )
        })}
      </div>

      {/* Native Top-Layer Lightbox Dialog (`closedby="any"`) */}
      <dialog
        ref={lightboxRef}
        {...{ closedby: 'any' }}
        aria-label="Pratinjau foto dokumentasi ukuran penuh"
        onKeyDown={onDialogKeyDown}
        className="lightbox-dialog"
      >
        {activePhoto && (
          <div className="relative max-w-4xl max-h-[90dvh] p-2 flex flex-col items-center">
            {/* Close Button (`form method="dialog"` for declarative native dismissal) */}
            <form method="dialog" className="absolute top-4 right-4 z-30">
              <button
                type="submit"
                aria-label="Tutup pratinjau foto"
                className="w-10 h-10 rounded-full bg-paper/95 text-ink hover:bg-white flex items-center justify-center shadow-elevated border border-sandstone transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  close
                </span>
              </button>
            </form>

            {/* Navigation Arrows */}
            {totalPhotos > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  aria-label="Foto sebelumnya"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-paper/90 text-ink hover:bg-white flex items-center justify-center shadow-elevated border border-sandstone transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    arrow_back
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  aria-label="Foto berikutnya"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-paper/90 text-ink hover:bg-white flex items-center justify-center shadow-elevated border border-sandstone transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    arrow_forward
                  </span>
                </button>
              </>
            )}

            {/* Image Stage */}
            <div className="relative rounded-2xl overflow-hidden bg-black/60 shadow-2xl max-h-[78dvh] flex items-center justify-center border border-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                className="max-w-full max-h-[76dvh] object-contain"
              />
            </div>

            {/* Lightbox Caption Bar */}
            <div className="mt-3 px-4 py-2 rounded-full bg-paper/95 border border-sandstone text-xs font-semibold text-ink shadow-elevated flex items-center gap-3">
              <span>{activePhoto.label}</span>
              <span className="text-sandstone-dark">•</span>
              <span className="text-ink-muted font-normal">{activePhoto.sub}</span>
              <span className="text-sandstone-dark">•</span>
              <span className="font-mono text-[0.6875rem] text-brand">
                {activeIndex + 1} / {totalPhotos}
              </span>
            </div>
          </div>
        )}
      </dialog>

    </section>
  )
}
