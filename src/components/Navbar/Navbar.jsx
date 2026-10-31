'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'

const NAV_ITEMS = [
  { label: 'About',       href: '#about'       },
  { label: 'Skills',      href: '#skills'      },
  { label: 'Works',       href: '#works'       },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Experience',  href: '#experience'  },
  { label: 'Gallery',     href: '#craft'       },
  { label: 'Contact',     href: '#contact'     },
]

const SECTION_IDS = ['about', 'skills', 'works', 'credentials', 'experience', 'craft', 'contact']
const CV_DRIVE_URL = 'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)
  const { scrolled } = useScrolled(36)
  const drawerRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  })

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false)
    setTimeout(() => {
      if (href === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [])

  return (
    <>
      {/* Top Viewport Laser Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 inset-x-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-primary-container via-secondary to-primary pointer-events-none shadow-[0_0_12px_rgba(56,189,248,0.75)]"
        aria-hidden="true"
      />

      <header className="fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-6xl transition-all duration-300">
        <div
          className={`h-14 sm:h-16 px-3 sm:px-4 lg:px-5 rounded-full backdrop-blur-2xl flex items-center justify-between gap-2 transition-all duration-300 ${
            scrolled
              ? 'bg-[#0e121d]/90 border border-secondary/25 shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_28px_rgba(44,103,237,0.22)]'
              : 'bg-[#121520]/75 border border-white/[0.09] shadow-[0_8px_28px_rgba(0,0,0,0.45)]'
          }`}
        >
          {/* Left: Personal Brand Monogram + Live Status */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#top')
            }}
            className="flex items-center gap-2.5 pl-1 pr-2.5 py-1 rounded-full hover:bg-white/[0.04] transition-colors group shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary-container to-cyan-500 flex items-center justify-center text-white font-display-xl font-extrabold text-xs sm:text-sm tracking-tight shadow-[0_0_16px_rgba(44,103,237,0.45)] border border-white/20">
              EA
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 ring-2 ring-[#0e121d]" />
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline-sm text-xs sm:text-sm font-bold text-on-surface tracking-tight group-hover:text-white transition-colors">
                ELGA<span className="text-secondary">.DEV</span>
              </span>
              <span className="font-label-mono text-[9.5px] text-outline uppercase tracking-wider hidden sm:inline-block mt-0.5">
                S.Kom • AI &amp; Ops
              </span>
            </div>
          </a>

          {/* Center: Desktop Nav with Sliding Active Pill */}
          <nav className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-black/25 border border-white/[0.05]">
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
                  className={`relative px-3.5 py-1.5 rounded-full font-body-sm text-body-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-container to-blue-600 shadow-[0_0_16px_rgba(44,103,237,0.45)] -z-10"
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Right: Quick CV + Dispatch CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 pr-0.5 shrink-0">
            <a
              href={CV_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-on-surface-variant hover:text-white font-label-mono text-xs transition-all border border-white/[0.08]"
              title="Download CV Elga Alfareza"
            >
              <span className="material-symbols-outlined text-[15px] text-secondary">download</span>
              <span>CV</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-container hover:bg-blue-500 text-white font-body-sm text-xs sm:text-body-sm font-semibold transition-all shadow-[0_0_18px_rgba(44,103,237,0.35)] border border-white/15"
            >
              <span className="material-symbols-outlined text-[15px]">bolt</span>
              <span>Let&apos;s Talk</span>
            </a>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-[23px]">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              ref={drawerRef}
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-20 z-50 lg:hidden p-5 rounded-2xl bg-[#101420]/95 backdrop-blur-2xl border border-white/[0.12] shadow-2xl flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between px-3 pb-3 mb-1 border-b border-white/[0.08]">
                <span className="font-label-mono text-xs text-secondary uppercase tracking-wider">
                  NAVIGATION // ELGA ALFAREZA
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeId === item.href.slice(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`px-4 py-2.5 rounded-xl font-label-mono text-label-mono transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-primary-container/20 text-white border border-primary/40'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-[10px] text-outline">0{idx + 1}</span>
                      <span>{item.label}</span>
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      arrow_forward
                    </span>
                  </a>
                )
              })}

              <div className="pt-3 mt-1 border-t border-white/[0.08] grid grid-cols-2 gap-2.5">
                <a
                  href={CV_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-sm font-semibold flex items-center justify-center gap-1.5 border border-white/[0.08]"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">download</span>
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-mono text-label-sm font-semibold flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  Contact Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
