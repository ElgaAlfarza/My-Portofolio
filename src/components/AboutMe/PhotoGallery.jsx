'use client'

/**
 * PhotoGallery – Horizontal drag / swipe / wheel / arrow gallery
 *
 * Connected directly to /api/photos:
 * - Fetches real Google Drive photos via the secure proxy endpoint
 * - Shows skeleton shimmer cards while loading
 * - Renders elegant fallback on error or empty gallery
 * - Supports drag, swipe, wheel, keyboard, and arrow buttons
 */

import { useRef, useState, useEffect, useCallback } from 'react'
import {
  motion, useMotionValue, useMotionValueEvent,
  animate, useReducedMotion,
} from 'framer-motion'

// ── Layout constants ───────────────────────────────────────────────────────
const CARD_W   = 220   // px – card width (fixed for snap math)
const CARD_GAP = 16    // px – gap between cards
const CARD_TOT = CARD_W + CARD_GAP

// ── Arrow button ───────────────────────────────────────────────────────────
function ArrowBtn({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous photo' : 'Next photo'}
      className={`
        flex-shrink-0 w-8 h-8 rounded-full border border-white/[0.08]
        flex items-center justify-center
        bg-white/[0.04] backdrop-blur-sm
        transition-all duration-200
        hover:bg-white/[0.08] hover:border-white/20
        disabled:opacity-20 disabled:pointer-events-none
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
      `}
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d={direction === 'prev' ? 'M10 13L5 8l5-5' : 'M6 3l5 5-5 5'}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

// ── Skeleton card ──────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div
      className="skeleton rounded-xl flex-shrink-0 border border-white/[0.04]"
      style={{ width: CARD_W, height: Math.round(CARD_W * 0.7) }}
      aria-hidden="true"
    />
  )
}

// ── Single photo card ──────────────────────────────────────────────────────
function PhotoCard({ photo }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <motion.div
      className="relative flex-shrink-0 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing select-none border border-white/10 bg-white/[0.02]"
      style={{ width: CARD_W, height: Math.round(CARD_W * 0.7) }}
      whileHover={{ scale: 1.02, rotate: 0.4 }}
      transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
    >
      {/* Shimmer placeholder until image finishes loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 skeleton" aria-hidden="true" />
      )}

      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-white/[0.02]">
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">
            Gagal memuat
          </span>
          <span className="text-[9px] text-white/20 truncate max-w-full mt-1">
            {photo.name || photo.alt}
          </span>
        </div>
      ) : (
        <img
          src={photo.url}
          alt={photo.alt || 'Gallery photo'}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          draggable={false}
        />
      )}
    </motion.div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function PhotoGallery({ label = 'Personal photo gallery' }) {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [apiError, setApiError] = useState(null)

  const containerRef = useRef(null)
  const x = useMotionValue(0)
  const [maxDrag, setMaxDrag] = useState(0)
  const [activeIdx, setActiveIdx] = useState(0)
  const prefersReduced = useReducedMotion()

  // Fetch photos from Next.js API route
  const fetchPhotos = useCallback(async () => {
    setLoading(true)
    setApiError(null)
    try {
      const res = await fetch('/api/photos')
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Gagal memuat galeri.')
      }

      setPhotos(Array.isArray(data) ? data : [])
    } catch (err) {
      console.warn('PhotoGallery fetch warning:', err.message)
      setApiError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPhotos()
  }, [fetchPhotos])

  // ── Calculate drag bounds ──────────────────────────────────────────────
  const updateConstraints = useCallback(() => {
    const el = containerRef.current
    if (!el || photos.length === 0) return
    const trackW = photos.length * CARD_TOT - CARD_GAP
    const drag = Math.min(0, -(trackW - el.clientWidth))
    setMaxDrag(drag)

    const clamped = Math.max(drag, Math.min(0, x.get()))
    if (clamped !== x.get()) x.set(clamped)
  }, [photos.length, x])

  useEffect(() => {
    updateConstraints()
    const ro = new ResizeObserver(updateConstraints)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [updateConstraints])

  // ── Sync active dot with x ─────────────────────────────────────────────
  useMotionValueEvent(x, 'change', (latest) => {
    if (photos.length === 0) return
    const idx = Math.round(-latest / CARD_TOT)
    setActiveIdx(Math.max(0, Math.min(idx, photos.length - 1)))
  })

  // ── Wheel → horizontal ─────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current
    if (!el || photos.length === 0) return
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      e.preventDefault()
      const next = Math.max(maxDrag, Math.min(0, x.get() - e.deltaY * 1.0))
      animate(x, next, {
        type: 'spring', stiffness: 300, damping: 30,
        ...(prefersReduced ? { type: 'tween', duration: 0 } : {}),
      })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [maxDrag, x, prefersReduced, photos.length])

  // ── Programmatic scroll (arrows + snap) ───────────────────────────────
  const scrollTo = useCallback((idx) => {
    if (photos.length === 0) return
    const clamped = Math.max(0, Math.min(idx, photos.length - 1))
    const target = Math.max(maxDrag, Math.min(0, -(clamped * CARD_TOT)))
    animate(x, target, {
      type: 'spring', stiffness: 320, damping: 34,
      ...(prefersReduced ? { type: 'tween', duration: 0.15 } : {}),
    })
    setActiveIdx(clamped)
  }, [maxDrag, photos.length, x, prefersReduced])

  const handlePrev = () => scrollTo(activeIdx - 1)
  const handleNext = () => scrollTo(activeIdx + 1)

  const handleDragEnd = () => {
    const snapped = Math.round(-x.get() / CARD_TOT)
    scrollTo(Math.max(0, Math.min(snapped, photos.length - 1)))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); handlePrev() }
    if (e.key === 'ArrowRight') { e.preventDefault(); handleNext() }
  }

  // ── Render Loading State ──────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-4 overflow-hidden rounded-xl py-1">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <p className="text-[10px] font-mono text-white/30 text-center tracking-wider">
          Memuat foto dari Google Drive...
        </p>
      </div>
    )
  }

  // ── Render Error or Empty Fallback ────────────────────────────────────
  if (apiError || photos.length === 0) {
    return (
      <div className="card-glass rounded-xl p-6 text-center flex flex-col items-center justify-center gap-2 border border-dashed border-white/10">
        <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-white/40">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
        <p className="text-xs text-white/60 font-medium">
          {apiError ? 'Belum dapat terhubung ke Drive' : 'Galeri foto akan segera diupdate'}
        </p>
        <p className="text-[10px] text-white/35 max-w-xs">
          {apiError
            ? 'Pastikan environment variable Google Drive sudah disetup di Vercel.'
            : 'Foto baru dapat diupload melalui dashboard admin.'}
        </p>
        {apiError && (
          <button
            onClick={fetchPhotos}
            className="text-[11px] text-accent hover:underline mt-1"
          >
            Coba muat ulang
          </button>
        )}
      </div>
    )
  }

  // ── Render Normal Gallery ─────────────────────────────────────────────
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* ── Track + arrows ──────────────────────────────── */}
      <div className="flex items-center gap-2">
        <ArrowBtn direction="prev" onClick={handlePrev} disabled={activeIdx === 0} />

        <div
          ref={containerRef}
          role="region"
          aria-label={label}
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="flex-1 overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-xl"
        >
          <motion.div
            className="flex"
            style={{ x, gap: CARD_GAP }}
            drag="x"
            dragConstraints={{ left: maxDrag, right: 0 }}
            dragElastic={0.06}
            dragTransition={{ bounceStiffness: 380, bounceDamping: 40 }}
            onDragEnd={handleDragEnd}
          >
            {photos.map((photo, i) => (
              <div
                key={photo.id}
                role="group"
                aria-label={`Photo ${i + 1} of ${photos.length}`}
                aria-roledescription="slide"
              >
                <PhotoCard photo={photo} />
              </div>
            ))}
          </motion.div>
        </div>

        <ArrowBtn direction="next" onClick={handleNext} disabled={activeIdx === photos.length - 1} />
      </div>

      {/* ── Dot indicator ───────────────────────────────── */}
      {photos.length > 1 && (
        <div
          role="tablist"
          aria-label="Gallery position"
          className="flex justify-center gap-1.5"
        >
          {photos.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`
                rounded-full transition-all duration-250
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
                ${i === activeIdx
                  ? 'w-5 h-1.5 bg-accent'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  )
}
