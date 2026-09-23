'use client'

/**
 * Lightbox – Accessible full-screen image modal
 *
 * Rendered into document.body via createPortal to escape any overflow:hidden.
 * Handles: backdrop click, Escape key, focus trap, body scroll lock.
 *
 * Props:
 *   isOpen  {boolean}
 *   onClose {() => void}
 *   src     {string|null}  – image src; null shows placeholder
 *   alt     {string}       – image alt text (required for a11y)
 *   title   {string}       – optional caption below the image
 */

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

// ── Close button ───────────────────────────────────────────────────────────
function CloseBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Close lightbox"
      className="
        absolute top-4 right-4 z-10
        w-10 h-10 rounded-full flex items-center justify-center
        bg-white/[0.06] border border-white/10 text-white/60
        hover:bg-white/[0.12] hover:text-white transition-all duration-200
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
      "
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M18 6 6 18M6 6l12 12"/>
      </svg>
    </button>
  )
}

// ── Lightbox content ───────────────────────────────────────────────────────
function LightboxPanel({ src, alt, title, onClose }) {
  const dialogRef = useRef(null)

  // Focus the close button when opened
  useEffect(() => {
    dialogRef.current?.querySelector('button')?.focus()
  }, [])

  // Focus trap inside dialog
  useEffect(() => {
    const trap = (e) => {
      if (e.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable?.length) return
      const first = focusable[0]
      const last  = focusable[focusable.length - 1]
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus()
      }
    }
    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={alt || 'Certificate image'}
        className="
          fixed inset-4 md:inset-12 lg:inset-20 z-[101]
          flex flex-col items-center justify-center
        "
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.28, ease: [0, 0, 0.2, 1] }}
      >
        <div className="relative w-full max-w-3xl max-h-full">
          <CloseBtn onClick={onClose} />

          {/* Image */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
            {src
              ? (
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-auto max-h-[80vh] object-contain bg-black"
                />
              )
              : (
                /* Placeholder */
                <div
                  className="w-full aspect-[4/3] flex items-center justify-center bg-bg-elevated"
                  role="img"
                  aria-label={alt}
                >
                  <span className="text-white/20 text-xs font-mono tracking-widest uppercase">
                    {alt}
                  </span>
                </div>
              )
            }
          </div>

          {/* Caption */}
          {title && (
            <p className="mt-3 text-center text-sm text-white/55 font-medium">{title}</p>
          )}
        </div>
      </motion.div>
    </>
  )
}

// ── Main export (portal wrapper) ───────────────────────────────────────────
export default function Lightbox({ isOpen, onClose, src, alt = '', title }) {
  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <LightboxPanel
          key="lightbox"
          src={src}
          alt={alt}
          title={title}
          onClose={onClose}
        />
      )}
    </AnimatePresence>,
    document.body
  )
}
