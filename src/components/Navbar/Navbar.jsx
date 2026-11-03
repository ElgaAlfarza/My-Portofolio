'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'

const NAV_ITEMS = [
  { label: 'Home',       href: '#top'        },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#works'      },
  { label: 'Gallery',    href: '#craft'      },
  { label: 'Contact',    href: '#contact'    },
]

const SECTION_IDS = ['top', 'about', 'skills', 'experience', 'works', 'craft', 'contact']
const WHATSAPP_URL = 'https://wa.me/6285238208849'

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
      {/* Declarative Scroll Progress Bar */}
      <div id="scroll-progress" ref={progressRef} aria-hidden="true" />

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-300/80 shadow-sm'
            : 'bg-[#FAF7F2]/80 backdrop-blur-xs'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo: elga's PORTFOLIO (Exact Mockup Match) */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#top')
            }}
            className="flex items-center gap-1 shrink-0 group select-none"
          >
            <span className="font-handwriting text-2xl sm:text-3xl text-[#583FA2] font-bold transform -rotate-3 mr-1 inline-block">
              elga&apos;s
            </span>
            <span className="font-sans font-black text-lg sm:text-xl tracking-tight text-stone-900 uppercase">
              PORTFOLIO
            </span>
          </a>

          {/* Desktop Navigation Pill Bar (Exact Mockup Style) */}
          <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full bg-stone-200/60 border border-stone-300/60 shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = (activeId === '' && item.href === '#top') || activeId === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-normal transition-all z-10 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="scrapbook-nav-active-pill"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-full bg-[#4D3380] shadow-sm -z-10"
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Right Action: WhatsApp Pill Button (Exact Mockup Match) */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold shadow-sm transition-all transform hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden w-8 h-8 rounded-full border border-stone-300 bg-white text-stone-900 flex items-center justify-center hover:bg-stone-100 transition-colors"
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
          <div className="md:hidden bg-[#FAF7F2] border-t border-stone-300 shadow-xl">
            <nav
              aria-label="Navigasi Seluler"
              className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = (activeId === '' && item.href === '#top') || activeId === item.href.slice(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold tracking-wide flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#4D3380] text-white'
                        : 'text-stone-800 hover:bg-stone-200/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className="material-symbols-outlined text-[1rem] opacity-70"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                )
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
