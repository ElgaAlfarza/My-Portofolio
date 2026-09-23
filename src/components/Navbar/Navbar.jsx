'use client'

/**
 * Navbar – Floating Pill
 *
 * Design decisions:
 * - Centered pill (not full-width) creates breathing room and keeps focus
 *   on content — a common pattern in high-end portfolio sites (Linear, Vercel).
 * - Active indicator uses layoutId so Framer Motion morphs it between items
 *   with a spring — feels physically real, not just an opacity swap.
 * - Mobile drawer is full-screen with a soft blur overlay rather than a
 *   side-panel; on small viewports this avoids cropped content and feels
 *   intentional. Escape key closes it for keyboard users.
 * - Scroll-spy uses IntersectionObserver ratio — more robust than scroll offset
 *   calculations that break on viewport resize.
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'

// ── Data ───────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home',      href: '#hero'      },
  { label: 'About',     href: '#about'     },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact'   },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1)) // ['hero', 'about', …]

// ── Animation constants ────────────────────────────────────────────────────
const SPRING = { type: 'spring', stiffness: 380, damping: 38 }

const drawerVariants = {
  closed: { opacity: 0, y: -16, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
  open:   { opacity: 1, y: 0,   transition: { duration: 0.28, ease: [0, 0, 0.2, 1] } },
}

const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.2 } },
  open:   { opacity: 1, transition: { duration: 0.25 } },
}

const drawerLinkVariants = {
  closed: { opacity: 0, x: -12 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.06 + i * 0.055, duration: 0.28, ease: [0, 0, 0.2, 1] },
  }),
}

// ── Hamburger Icon ─────────────────────────────────────────────────────────
function HamburgerIcon({ open }) {
  return (
    <span className="flex flex-col gap-[5px] w-5" aria-hidden="true">
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={SPRING}
        className="block h-[1.5px] w-5 rounded-full bg-white/80 origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.18 }}
        className="block h-[1.5px] w-5 rounded-full bg-white/80 origin-center"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={SPRING}
        className="block h-[1.5px] w-5 rounded-full bg-white/80 origin-center"
      />
    </span>
  )
}

// ── Desktop Nav Link ───────────────────────────────────────────────────────
function NavLink({ item, isActive, onClick }) {
  return (
    <li className="relative">
      <a
        href={item.href}
        onClick={onClick}
        className={`
          relative z-10 inline-block px-3.5 py-1.5 text-sm font-medium
          transition-colors duration-200
          ${isActive ? 'text-white' : 'text-white/50 hover:text-white/80'}
        `}
      >
        {/* Active sliding pill background */}
        {isActive && (
          <motion.span
            layoutId="nav-active-pill"
            className="absolute inset-0 rounded-full bg-white/10"
            transition={SPRING}
            aria-hidden="true"
          />
        )}
        <span className="relative">{item.label}</span>
      </a>
    </li>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId   = useActiveSection(SECTION_IDS)
  const prefersReducedMotion = useReducedMotion()
  const drawerRef  = useRef(null)

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Trap focus inside drawer when open
  useEffect(() => {
    if (mobileOpen && drawerRef.current) {
      const focusable = drawerRef.current.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])',
      )
      focusable[0]?.focus()
    }
  }, [mobileOpen])

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false)
    // Let the drawer close animation finish before scrolling
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }, 200)
  }, [prefersReducedMotion])

  // Derive active label for scroll-spy
  const activeHref = `#${activeId}`

  return (
    <>
      {/* ── Floating Pill ────────────────────────────────────────────── */}
      <motion.header
        role="banner"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: 0.1 }}
        className="
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          flex items-center gap-1
          px-2 py-2
          rounded-full
          border border-white/[0.08]
          bg-white/[0.04] backdrop-blur-xl
          shadow-[0_0_0_1px_rgba(44,103,237,0.15),0_8px_32px_rgba(0,0,0,0.4),0_0_24px_rgba(44,103,237,0.08)]
        "
        aria-label="Main navigation"
      >
        {/* ── Desktop menu ──────────────────────────────── */}
        <nav aria-label="Desktop navigation" className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={activeHref === item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              />
            ))}
          </ul>
        </nav>

        {/* ── Mobile: label + hamburger ─────────────────── */}
        <div className="flex items-center gap-3 md:hidden px-2">
          {/* Show the active section name so user knows where they are */}
          <span className="text-sm font-medium text-white/60 min-w-[60px]">
            {NAV_ITEMS.find((i) => i.href === activeHref)?.label ?? 'Menu'}
          </span>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="
              p-2 rounded-full
              transition-colors duration-150
              hover:bg-white/8 active:bg-white/12
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
            "
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Full-Screen Drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm md:hidden"
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              id="mobile-drawer"
              ref={drawerRef}
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="
                fixed inset-x-4 top-20 z-50 md:hidden
                rounded-2xl overflow-hidden
                border border-white/[0.08]
                bg-bg-elevated/95 backdrop-blur-2xl
                shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_0_1px_rgba(44,103,237,0.12)]
              "
            >
              {/* Inner padding */}
              <nav aria-label="Mobile navigation" className="p-5">
                <ul className="space-y-1">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = activeHref === item.href
                    return (
                      <motion.li
                        key={item.href}
                        custom={i}
                        variants={drawerLinkVariants}
                        initial="closed"
                        animate="open"
                        exit={{ opacity: 0, x: -8, transition: { duration: 0.15 } }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            handleNavClick(item.href)
                          }}
                          className={`
                            group flex items-center justify-between
                            w-full px-4 py-3.5 rounded-xl
                            text-base font-medium
                            transition-colors duration-150
                            ${isActive
                              ? 'bg-accent/10 text-white'
                              : 'text-white/55 hover:text-white hover:bg-white/5'
                            }
                          `}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <motion.span
                              layoutId="mobile-active-dot"
                              className="w-1.5 h-1.5 rounded-full bg-accent"
                              transition={SPRING}
                              aria-hidden="true"
                            />
                          )}
                        </a>
                      </motion.li>
                    )
                  })}
                </ul>

                {/* Divider + CTA */}
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
