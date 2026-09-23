'use client'

/**
 * Footer – Simple copyright + back-to-top
 *
 * Design: deliberately minimal — the page has enough visual weight.
 * One line of info on the left, nav links centre, back-to-top on the right.
 * The arrow button uses a spring bounce on tap to feel physical.
 */

import { motion } from 'framer-motion'

const FOOTER_LINKS = [
  { label: 'About',     href: '#about'     },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact'   },
]

const YEAR = new Date().getFullYear()

const ArrowUp = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 13V3M4 6l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })

  return (
    <footer className="border-t border-white/[0.05] bg-bg" role="contentinfo">
      <div className="section-wrapper py-8 flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Left: brand + copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-gradient">
            {/* TODO: replace with your name */}
            YourName
          </p>
          <p className="text-[11px] text-white/30 mt-0.5">
            © {YEAR} · Dibangun dengan React, Tailwind CSS &amp; Framer Motion
          </p>
        </div>

        {/* Centre: quick nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="
                    text-xs text-white/35 hover:text-white/70
                    transition-colors duration-200
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: back to top */}
        <motion.button
          onClick={scrollTop}
          aria-label="Kembali ke atas"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="
            w-8 h-8 rounded-full flex items-center justify-center
            border border-white/[0.08] bg-white/[0.03] text-white/40
            hover:border-accent/40 hover:text-accent hover:bg-accent/[0.06]
            transition-colors duration-200
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
          "
        >
          <ArrowUp />
        </motion.button>

      </div>
    </footer>
  )
}
