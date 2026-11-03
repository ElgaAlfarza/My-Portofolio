'use client'

import { motion } from 'framer-motion'

const CV_DRIVE_URL = 'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'
const WHATSAPP_URL = 'https://wa.me/6285238208849'

const WHAT_I_DO_ITEMS = [
  { label: 'Full Stack & Vibe Coding', icon: 'code_blocks' },
  { label: 'Deep Learning (CNN) SINTA 4', icon: 'psychology' },
  { label: 'Server Simbank 99.9% Uptime', icon: 'dns' },
  { label: 'QC & K3 Kemnaker Standards', icon: 'verified_user' },
  { label: 'Cloud Architecture & APIs', icon: 'cloud_sync' },
]

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative w-full pb-12 sm:pb-16 pt-2">
      {/* Blueprint Grid Container with Technical Corner Crosshairs */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl border border-sandstone bg-canvas blueprint-grid p-4 sm:p-8 lg:p-10 overflow-hidden shadow-subtle">
        
        {/* Top Technical Metadata Bar */}
        <div className="flex items-center justify-between border-b border-sandstone/80 pb-3 mb-6 sm:mb-8 text-[0.6875rem] font-mono uppercase tracking-wider text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-brand inline-block rounded-xs" aria-hidden="true" />
            <span className="font-semibold text-ink">FULL STACK ARCHITECTURE</span>
            <span className="text-sandstone-dark">•</span>
            <span>AI &amp; IT OPERATIONS</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>S1 ILMU KOMPUTER</span>
            <span className="text-sandstone-dark">•</span>
            <span className="text-emerald-700 font-semibold">IPK 3.76 CUM LAUDE +</span>
          </div>
        </div>

        {/* Corner Technical Crosshairs */}
        <div className="absolute top-3 left-3 text-ink-muted/40 font-mono text-xs select-none pointer-events-none">+</div>
        <div className="absolute top-3 right-3 text-ink-muted/40 font-mono text-xs select-none pointer-events-none">+</div>
        <div className="absolute bottom-3 left-3 text-ink-muted/40 font-mono text-xs select-none pointer-events-none">+</div>
        <div className="absolute bottom-3 right-3 text-ink-muted/40 font-mono text-xs select-none pointer-events-none">+</div>

        {/* Hero Main Stage: Layered Typography + Cutout Portrait + 3D Badges */}
        <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col items-center justify-center">

          {/* Background Giant Condensed Typography (Image 1 Aesthetic) */}
          <div className="absolute inset-x-0 top-2 sm:top-4 flex flex-col items-center justify-center text-center pointer-events-none select-none z-0">
            <div className="relative inline-block">
              {/* Handwritten Script Accent Overlaid */}
              <span className="font-handwriting text-5xl sm:text-7xl lg:text-8xl text-brand-cobalt font-bold transform -rotate-6 absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 z-10 drop-shadow-sm whitespace-nowrap">
                Elga&apos;s
              </span>
              {/* Condensed Heavy Primary Title */}
              <h1 className="font-display text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10.5rem] leading-[0.88] text-ink/90 uppercase tracking-tight">
                FULL STACK
              </h1>
            </div>
            <h2 className="font-display text-[4rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[9.5rem] leading-[0.85] text-ink/80 uppercase tracking-tight -mt-1 sm:-mt-3">
              DEVELOPER
            </h2>
            <p className="mt-3 font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-ink-muted">
              DESIGNING ROBUST SYSTEMS, <span className="text-brand font-bold">ENGINEERING RESILIENT CODE.</span>
            </p>
          </div>

          {/* Central Cutout Portrait of Elga */}
          <div className="relative z-10 mt-28 sm:mt-32 lg:mt-36 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px] mx-auto flex items-end justify-center pointer-events-auto">
            <div className="relative w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile-face.png"
                alt="Elga Alfareza, S.Kom. - Full Stack Developer & AI Specialist"
                {...{ fetchpriority: 'high' }}
                className="w-full h-auto object-contain portrait-cutout select-none transform transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Verified Cum Laude Ribbon Badge on portrait */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper/95 backdrop-blur-md border border-sandstone shadow-elevated text-xs font-bold text-ink whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span>Elga Alfareza, S.Kom.</span>
                <span className="text-sandstone-dark">•</span>
                <span className="text-brand">IPK 3.76</span>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
             Floating 3D Elements (Inspired by Image 1)
          ───────────────────────────────────────────────────────────── */}

          {/* 1. Left Top 3D Tool Tile: Python Deep Learning (CNN) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex absolute top-16 lg:top-24 left-2 lg:left-6 z-20 flex-col items-start"
          >
            <div className="relative p-3.5 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white badge-3d border border-blue-700/50 transform -rotate-6 hover:rotate-0 transition-transform duration-300 w-36 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold font-mono tracking-tight text-amber-400">Py</span>
                <span className="text-[0.625rem] font-bold px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-200 uppercase">
                  SINTA 4
                </span>
              </div>
              <p className="text-xs font-bold leading-tight">Python ML</p>
              <p className="text-[0.6875rem] text-blue-200/80 leading-tight">CNN Aksara Sasak</p>
              <div className="mt-2 pt-1.5 border-t border-blue-800/60 flex items-center justify-between text-[0.625rem] text-blue-300">
                <span>92.3% Akurasi</span>
                <span className="material-symbols-outlined text-xs">verified</span>
              </div>
            </div>
            {/* Arrow & Annotation */}
            <div className="mt-1 ml-4 flex items-center gap-1 text-[0.6875rem] font-handwriting text-ink-muted rotate-3">
              <span>↖ Jurnal Nasional SINTA 4</span>
            </div>
          </motion.div>

          {/* 2. Left Lower 3D Tool Tile: Next.js 14 & Vibe Coding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex absolute bottom-28 left-4 lg:left-8 z-20 flex-col items-start"
          >
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-stone-900 to-black text-white badge-3d border border-stone-700 transform rotate-3 hover:rotate-0 transition-transform duration-300 w-40 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold tracking-tight">▲ Next.js</span>
                <span className="text-[0.625rem] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  v14.2
                </span>
              </div>
              <p className="text-xs font-bold leading-tight">Full Stack Web</p>
              <p className="text-[0.6875rem] text-stone-400 leading-tight">Vibe Coding &amp; React</p>
              <div className="mt-2 pt-1.5 border-t border-stone-800 flex items-center justify-between text-[0.625rem] text-stone-300">
                <span>Google AI Cert</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          </motion.div>

          {/* 3. Right Vertical Tool Palette (Photoshop / Code Toolbar) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden xl:flex absolute top-12 right-6 z-20 flex-col items-center gap-2 p-2 rounded-xl bg-paper/95 backdrop-blur-md border border-sandstone shadow-elevated"
            aria-label="Tech Stack Palette"
          >
            <div className="p-1.5 rounded-lg bg-brand text-white hover:bg-brand-hover transition-colors" title="Select Pointer">
              <span className="material-symbols-outlined text-base">near_me</span>
            </div>
            <div className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors" title="Code Editor">
              <span className="material-symbols-outlined text-base">code</span>
            </div>
            <div className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors" title="Deep Learning">
              <span className="material-symbols-outlined text-base">psychology</span>
            </div>
            <div className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors" title="Server Infrastructure">
              <span className="material-symbols-outlined text-base">dns</span>
            </div>
            <div className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors" title="Database Management">
              <span className="material-symbols-outlined text-base">database</span>
            </div>
            <div className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors" title="Quality Control & K3">
              <span className="material-symbols-outlined text-base">verified_user</span>
            </div>
            <div className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-subtle transition-colors" title="Terminal Console">
              <span className="material-symbols-outlined text-base">terminal</span>
            </div>
          </motion.div>

          {/* 4. Right macOS Terminal Card ("CTRL + CREATE") */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hidden md:flex absolute top-20 right-4 lg:right-16 z-20 flex-col w-56 lg:w-64"
          >
            <div className="rounded-xl bg-stone-900 text-stone-100 shadow-2xl border border-stone-800 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Terminal Title Bar */}
              <div className="px-3 py-2 bg-stone-950 flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <span className="font-mono text-[0.625rem] text-stone-400 font-semibold tracking-wider">
                  CTRL + CREATE
                </span>
                <span className="text-[0.625rem] text-blue-400 font-mono">v2.4</span>
              </div>
              {/* Terminal Body */}
              <div className="p-3.5 font-mono text-xs leading-relaxed space-y-2">
                <p className="text-stone-300 text-[0.6875rem]">
                  Code with intention. Build with resilience. From neural networks to 99.9% uptime servers.
                </p>
                <div className="pt-1.5 text-blue-400 font-semibold text-[0.6875rem] space-y-0.5">
                  <p>› Keep Building.</p>
                  <p>› Keep Innovating.</p>
                  <p>› Keep Shipping.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Lower Right "WHAT I DO" Checklist Card with Blue Connector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hidden lg:flex absolute bottom-8 right-6 lg:right-14 z-20 flex-col w-56"
          >
            <div className="p-3.5 rounded-xl bg-stone-900/95 backdrop-blur-md text-white border border-stone-800 shadow-xl">
              <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-1.5">
                <span className="text-[0.6875rem] font-mono uppercase tracking-wider text-blue-400 font-bold">
                  WHAT I DO
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
              <ul className="space-y-1.5 text-[0.6875rem] text-stone-300 font-medium">
                {WHAT_I_DO_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[0.875rem] text-blue-400 shrink-0">
                      {item.icon}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Floating 3D Pointer Cursor (Design Detail from Image 1) */}
          <div className="hidden sm:block absolute top-1/3 left-1/4 z-20 pointer-events-none select-none">
            <div className="relative">
              <svg className="w-5 h-5 text-ink filter drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 0l16 12-7 1.5 4 8.5-3 1.5-4-8.5-6 5.5z" />
              </svg>
              <span className="absolute left-4 top-3 px-2 py-0.5 rounded-full bg-ink text-white font-mono text-[0.5625rem] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm">
                ELGA ALFAREZA
              </span>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           Hero Bottom Bar Strip (Inspired by Image 1 Bottom Bar)
        ───────────────────────────────────────────────────────────── */}
        <div className="mt-8 pt-5 border-t border-sandstone grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Quick Contact & WhatsApp Action */}
          <div className="md:col-span-4 flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[0.6875rem] font-mono uppercase tracking-wider text-ink-muted">
                Let&apos;s Connect
              </span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs sm:text-sm font-bold text-ink hover:text-brand flex items-center gap-1.5 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>+62 852-3820-8849</span>
              </a>
            </div>
          </div>

          {/* Core Philosophy Sentence */}
          <div className="md:col-span-5 text-xs text-ink-body leading-relaxed">
            <p>
              Lulusan S1 Ilmu Komputer Universitas Bumigora (<strong className="text-ink">IPK 3.76</strong>). Menghubungkan arsitektur web modern, riset Machine Learning terpublikasi <strong className="text-brand">SINTA 4</strong>, dan ketangguhan server operasional berstandar K3.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#contact')
              }}
              className="exec-btn-primary !text-xs !py-2 !px-3.5 !rounded-full"
            >
              <span>Hubungi Saya</span>
            </a>
            <a
              href={CV_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="exec-btn-secondary !text-xs !py-2 !px-3 !rounded-full"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">download</span>
              <span>CV</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
