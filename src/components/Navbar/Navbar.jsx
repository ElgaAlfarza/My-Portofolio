'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'

const NAV_ITEMS = [
  { label: 'WHO AM I',        href: '#about'       },
  { label: 'MY WORK',         href: '#skills'      },
  { label: 'EXPERIENCE',      href: '#experience'  },
  { label: 'CASE STUDY',      href: '#works'       },
  { label: 'QUALIFICATIONS',  href: '#credentials' },
  { label: 'GALLERY',         href: '#craft'       },
  { label: 'CONTACT',         href: '#contact'     },
]

const SECTION_IDS = ['about', 'skills', 'experience', 'works', 'credentials', 'craft', 'contact']
const CV_DRIVE_URL = 'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'
const WHATSAPP_URL = 'https://wa.me/6285238208849'
const GITHUB_URL = 'https://github.com/ElgaAlfarza/My-Portofolio'

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
            ? 'bg-paper/95 backdrop-blur-md border-sandstone shadow-subtle'
            : 'bg-canvas/90 backdrop-blur-sm border-sandstone/80'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Identity with Editorial Handwriting Monogram */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#top')
            }}
            className="flex items-center gap-2 shrink-0 group select-none"
          >
            <div className="flex items-baseline">
              <span className="font-handwriting text-2xl sm:text-3xl text-brand font-bold transform -rotate-3 mr-1 inline-block">
                elga&apos;s
              </span>
              <span className="font-display text-lg sm:text-xl tracking-wider text-ink font-bold">
                PORTFOLIO
              </span>
            </div>
            <span
              className="inline-flex items-center px-1.5 py-0.5 rounded text-[0.625rem] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-800 border border-emerald-200"
              title="IPK 3.76 Cum Laude"
            >
              S.Kom.
            </span>
          </a>

          {/* Desktop Navigation with Clean Spacing & Active Indicator */}
          <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-subtle/80 border border-sandstone">
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
                  className={`relative px-3 py-1 rounded-full text-[0.7rem] tracking-wider uppercase transition-colors z-10 ${
                    isActive
                      ? 'text-brand font-bold'
                      : 'text-ink-muted hover:text-ink font-medium'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="editorial-nav-active-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-paper border border-brand/20 shadow-subtle -z-10"
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Social Icons & Quick Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Direct WhatsApp Quick Link */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp Langsung"
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors text-xs font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            {/* GitHub Repo */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="hidden md:inline-flex w-8 h-8 rounded-full border border-sandstone bg-paper text-ink-muted hover:text-ink hover:border-sandstone-dark items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* CV Button */}
            <a
              href={CV_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="exec-btn-primary !py-1.5 !px-3.5 !text-xs !rounded-full"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                download
              </span>
              <span>Unduh CV</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden w-8 h-8 rounded-full border border-sandstone bg-paper text-ink flex items-center justify-center hover:bg-subtle transition-colors"
              aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileOpen && (
          <div className="lg:hidden bg-paper border-t border-sandstone shadow-elevated">
            <nav
              aria-label="Navigasi Seluler"
              className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1"
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
                    className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-brand border border-blue-200'
                        : 'text-ink-body hover:bg-subtle'
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

              <div className="pt-3 mt-2 border-t border-sandstone grid grid-cols-2 gap-2.5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exec-btn-secondary !py-2 !text-xs !rounded-lg justify-center"
                >
                  <span>Chat WhatsApp</span>
                </a>
                <a
                  href={CV_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exec-btn-primary !py-2 !text-xs !rounded-lg justify-center"
                >
                  <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                    download
                  </span>
                  <span>Unduh CV</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
