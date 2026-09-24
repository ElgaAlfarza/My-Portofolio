'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'

const NAV_ITEMS = [
  { label: 'About',         href: '#about'       },
  { label: 'Skills',        href: '#skills'      },
  { label: 'Portfolio',     href: '#works'       },
  { label: 'Credentials',   href: '#credentials' },
  { label: 'Experience',    href: '#experience'  },
  { label: 'Contact',       href: '#contact'     },
]

const SECTION_IDS = ['about', 'skills', 'works', 'credentials', 'experience', 'contact']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)
  const drawerRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }, [])

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-5xl">
        <div className="h-16 px-space-md lg:px-space-lg bg-surface-container-low/80 backdrop-blur-xl rounded-full shadow-[0_0_25px_rgba(44,103,237,0.18)] border border-white/[0.08] flex items-center justify-between gap-space-sm">
          {/* Status badge */}
          <div className="flex items-center gap-space-sm pl-space-xs">
            <div className="flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-container-lowest/80 border border-white/[0.05]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider hidden sm:inline-block">
                Available
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
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
                  className={`px-3 py-1.5 rounded-full font-body-sm text-body-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-medium'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-space-sm pr-space-xs">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className="hidden md:inline-flex items-center px-space-md py-1.5 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-body-sm text-body-sm transition-all border border-white/[0.06]"
            >
              Resume / Contact
            </a>

            <div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
              title="Elga Alfareza, S.Kom."
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              aria-label="Toggle Navigation"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              ref={drawerRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-4 top-24 z-50 md:hidden p-5 rounded-2xl bg-surface-container-low/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex flex-col gap-2"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="px-4 py-3 rounded-xl font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    arrow_forward
                  </span>
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="w-full py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-mono text-label-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Initiate Dispatch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
