'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { IconWhatsAppBadge } from '../Icons/ScrapbookIcons'

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
                  <span className="inline-flex items-center gap-1">
                    {item.label === 'Home' && isActive && (
                      <span className="material-symbols-outlined text-[13px] leading-none">home</span>
                    )}
                    <span>{item.label}</span>
                  </span>
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold shadow-sm transition-all transform hover:scale-105"
            >
              <IconWhatsAppBadge className="w-4 h-4 rounded-xs" />
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
