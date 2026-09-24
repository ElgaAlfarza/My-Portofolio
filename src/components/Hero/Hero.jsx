'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ROLES = [
  'IT Operations & AI Specialist',
  'Server Simbank Administrator',
  'Machine Learning & CNN Engineer',
  'Software & Hardware QC Specialist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    const speed = isDeleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full relative pb-space-xl mb-margin pt-4">
      <div className="relative z-10 flex flex-col items-start max-w-5xl">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-low text-secondary mb-space-md shadow-sm border border-white/[0.06]"
        >
          <span className="material-symbols-outlined text-[16px] text-secondary">
            explore
          </span>
          <span className="font-label-mono text-label-mono uppercase tracking-widest text-[11px] sm:text-label-mono">
            Available for Q2 2026 Opportunities — Remote / Mataram / Hybrid
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-display-xl text-3xl sm:text-5xl lg:text-display-xl font-extrabold text-on-surface tracking-tight mb-space-sm max-w-4xl leading-tight"
        >
          Engineering Scalable Systems with{' '}
          <span className="text-primary underline decoration-secondary decoration-wavy underline-offset-8">
            Purpose &amp; Craft
          </span>
          .
        </motion.h1>

        {/* Subtitle / Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 font-label-mono text-sm sm:text-code-md text-primary mb-space-md"
        >
          <span className="text-secondary">$</span>
          <span className="text-on-surface-variant">SYS_ROLE //</span>
          <span className="font-semibold text-secondary tracking-wide min-h-[22px]">
            {displayedText}
          </span>
          <span className="w-2 h-4 bg-secondary inline-block animate-pulse" />
        </motion.div>

        {/* Narrative Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-3xl mb-space-lg leading-relaxed"
        >
          Menghadirkan arsitektur sistem andal dan presisi melalui rekayasa komputasi terstruktur. Berpengalaman dalam pengelolaan server simbank berdaya tahan tinggi, quality control perangkat lunak dan keras, serta pengembangan model Machine Learning (CNN) yang terpublikasi di jurnal nasional SINTA 4.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-space-md mb-space-lg"
        >
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#works')
            }}
            className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-primary-container text-on-primary-container font-semibold hover:bg-primary hover:text-on-primary shadow-lg hover:shadow-[0_0_24px_rgba(44,103,237,0.4)] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            Explore Selected Works
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#contact')
            }}
            className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-bright font-semibold border border-white/[0.08] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            Initiate Dispatch
          </a>

          <a
            href="https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-semibold border border-white/[0.06] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download CV
          </a>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-2 font-label-mono text-label-sm text-on-surface-variant"
        >
          <span className="text-outline uppercase text-[10px] tracking-widest mr-1">
            CORE STACK //
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-medium border border-white/[0.04]">
            Python &amp; CNN
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-medium border border-white/[0.04]">
            Server Simbank
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-medium border border-white/[0.04]">
            Hardware &amp; Software QC
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-medium border border-white/[0.04]">
            SQL &amp; Database
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-medium border border-white/[0.04]">
            Next.js &amp; React
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-medium border border-white/[0.04]">
            Cloudinary Storage
          </span>
        </motion.div>
      </div>
    </section>
  )
}
