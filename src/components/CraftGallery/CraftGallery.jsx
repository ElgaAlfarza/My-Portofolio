'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { closeTopLayer } from '../../utils/topLayer'

const ITEMS_PER_PAGE = 6

function buildPhotoItem(photo, index) {
  const num = String(index + 1).padStart(2, '0')
  return {
    id: photo.id || `photo-${num}`,
    url: photo.url,
    alt: photo.alt || `Dokumentasi Kegiatan ${num}`,
    label: `Dokumentasi ${num}`,
  }
}

export default function CraftGallery() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
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
          setPhotos(filtered.map(buildPhotoItem))
        } else {
          setPhotos([])
        }
      } catch {
        setPhotos([])
      } finally {
        setLoading(false)
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

  // Handle native dialog `close` event + fallback for browsers without `closedby`
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
    <section id="craft" className="w-full py-14 sm:py-20 border-t border-line scroll-reveal">
      {/* Header & Pagination Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-subtle border border-line text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            <span>06</span>
            <span>•</span>
            <span>Dokumentasi</span>
          </div>
          <h2 className="heading-balance font-sans text-section-title text-ink">
            Galeri Kegiatan &amp; Dokumentasi
          </h2>
        </div>

        {!loading && totalPages > 1 && (
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Halaman galeri sebelumnya"
              className="exec-btn-secondary !py-1.5 !px-2.5 !text-xs"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                chevron_left
              </span>
            </button>
            <span className="font-mono text-xs font-semibold text-ink-body px-1">
              Halaman {page + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              aria-label="Halaman galeri berikutnya"
              className="exec-btn-secondary !py-1.5 !px-2.5 !text-xs"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                chevron_right
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Loading Skeleton Grid */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }, (_, idx) => (
            <div
              key={idx}
              className="aspect-[4/3] rounded-xl skeleton border border-line"
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && totalPhotos === 0 && (
        <div className="exec-card p-8 text-center bg-paper">
          <span
            className="material-symbols-outlined text-[2rem] text-ink-muted mb-2"
            aria-hidden="true"
          >
            photo_library
          </span>
          <p className="text-sm font-semibold text-ink">
            Belum ada foto dokumentasi yang ditampilkan.
          </p>
          <p className="text-xs text-ink-muted mt-1">
            Foto dokumentasi dapat dikelola melalui panel admin portofolio.
          </p>
        </div>
      )}

      {/* Clean Responsive 3-Column Photo Grid */}
      {!loading && totalPhotos > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visiblePhotos.map((item, localIdx) => {
            const globalIndex = page * ITEMS_PER_PAGE + localIdx
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(globalIndex)}
                className="exec-card exec-card-hover p-2 text-left group cursor-pointer focus:outline-none bg-paper"
              >
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-subtle border border-line/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors pointer-events-none" />
                </div>
                <div className="pt-2.5 pb-0.5 px-1.5 flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-ink truncate group-hover:text-brand transition-colors">
                    {item.label}
                  </span>
                  <span className="text-ink-muted inline-flex items-center gap-0.5 shrink-0 group-hover:text-brand transition-colors font-medium">
                    <span>Lihat</span>
                    <span className="material-symbols-outlined text-[0.9375rem]" aria-hidden="true">
                      open_in_full
                    </span>
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      )}

      {/* Native Top-Layer Lightbox Dialog (`closedby="any"`) */}
      <dialog
        ref={lightboxRef}
        {...{ closedby: 'any' }}
        aria-label="Pratinjau foto dokumentasi ukuran penuh"
        onKeyDown={onDialogKeyDown}
        className="lightbox-dialog"
      >
        {activePhoto && (
          <div className="flex flex-col items-center gap-3">
            <div className="w-full flex items-center justify-between gap-4 px-1 text-xs text-white">
              <span className="px-3 py-1 rounded-md bg-zinc-900/90 border border-white/15 font-mono shadow-md">
                {activePhoto.label} ({activeIndex + 1} / {totalPhotos})
              </span>
              <button
                type="button"
                onClick={() => closeTopLayer(lightboxRef.current)}
                aria-label="Tutup pratinjau foto"
                className="w-9 h-9 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/15 flex items-center justify-center transition-colors shadow-md"
              >
                <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                  close
                </span>
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              {totalPhotos > 1 && (
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  aria-label="Foto sebelumnya"
                  className="absolute left-2 sm:-left-12 z-10 w-9 h-9 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/15 flex items-center justify-center shadow-lg transition-transform active:scale-95"
                >
                  <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                    chevron_left
                  </span>
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                className="max-w-[92dvw] max-h-[80dvh] object-contain rounded-xl bg-zinc-950 border border-white/15 shadow-2xl"
              />

              {totalPhotos > 1 && (
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  aria-label="Foto berikutnya"
                  className="absolute right-2 sm:-right-12 z-10 w-9 h-9 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/15 flex items-center justify-center shadow-lg transition-transform active:scale-95"
                >
                  <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                    chevron_right
                  </span>
                </button>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
