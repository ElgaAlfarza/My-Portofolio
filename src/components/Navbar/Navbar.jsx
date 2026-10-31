'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'

const NAV_ITEMS = [
  { label: 'Profil',      href: '#about'       },
  { label: 'Pengalaman',  href: '#experience'  },
  { label: 'Keahlian',    href: '#skills'      },
  { label: 'Proyek',      href: '#works'       },
  { label: 'Sertifikasi', href: '#credentials' },
  { label: 'Galeri',      href: '#craft'       },
  { label: 'Kontak',      href: '#contact'     },
]

const SECTION_IDS = ['about', 'experience', 'skills', 'works', 'credentials', 'craft', 'contact']
const CV_DRIVE_URL = 'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)
  const { scrolled } = useScrolled(16)
  const progressRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Fallback for browsers without native CSS `animation-timeline: scroll()` support
  useEffect(() => {
    if (typeof window === 'undefined' || typeof CSS === 'undefined') return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (CSS.supports('animation-timeline', 'scroll()')) return undefined

    const updateProgress = () => {
      const bar = progressRef.current
      if (!bar) return
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
      bar.style.transform = `scaleX(${ratio})`
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false)
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      {/* Declarative Scroll Progress Bar (`aria-hidden="true"`) */}
      <div id="scroll-progress" ref={progressRef} aria-hidden="true" />

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-md border-line shadow-subtle'
            : 'bg-canvas/80 backdrop-blur-sm border-line/70'
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#top')
            }}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <span className="relative w-8 h-8 rounded-lg bg-ink group-hover:bg-brand text-paper font-sans font-bold text-xs flex items-center justify-center tracking-tight transition-colors shadow-subtle">
              EA
              <span
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-paper"
                aria-hidden="true"
              />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-sans font-bold text-sm text-ink group-hover:text-brand transition-colors">
                Elga Alfareza, S.Kom.
              </span>
              <span className="text-xs text-ink-muted hidden sm:inline">
                Full Stack • AI • IT Operations
              </span>
            </div>
          </a>

          {/* Desktop Navigation with Smooth Gliding Active Pill */}
          <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-0.5 p-1 rounded-lg bg-subtle/70 border border-line/80">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative px-3 py-1.5 rounded-md text-xs transition-colors z-10 ${
                    isActive
                      ? 'text-brand font-semibold'
                      : 'text-ink-muted hover:text-ink font-medium'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="exec-nav-active-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-md bg-paper border border-brand-border shadow-subtle -z-10"
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={CV_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex exec-btn-secondary !py-1.5 !px-3 !text-xs"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                download
              </span>
              <span>CV</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className="hidden sm:inline-flex exec-btn-primary !py-1.5 !px-3.5 !text-xs"
            >
              <span>Hubungi Saya</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden w-9 h-9 rounded-lg border border-line bg-paper text-ink flex items-center justify-center hover:bg-subtle transition-colors"
              aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileOpen && (
          <div className="lg:hidden bg-paper border-t border-line shadow-elevated">
            <nav
              aria-label="Navigasi Seluler"
              className="max-w-5xl mx-auto px-5 py-4 flex flex-col gap-1"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.href.slice(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`px-3.5 py-2.5 rounded-lg text-sm flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-brand-soft text-brand font-semibold border border-brand-border'
                        : 'text-ink-body hover:bg-subtle/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className="material-symbols-outlined text-[1rem] text-ink-muted"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                )
              })}

              <div className="pt-3 mt-2 border-t border-line grid grid-cols-2 gap-2.5">
                <a
                  href={CV_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exec-btn-secondary !py-2 !text-xs"
                >
                  <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                    download
                  </span>
                  <span>Unduh CV</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="exec-btn-primary !py-2 !text-xs"
                >
                  <span>Hubungi Saya</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
