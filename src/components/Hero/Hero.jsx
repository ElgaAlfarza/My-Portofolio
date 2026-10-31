'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROLES = [
  'Full Stack Developer (Vibe Coding)',
  'Python & Machine Learning (CNN / SINTA 4)',
  'IT Operations & Server Simbank Specialist',
  'Software & Hardware Quality Control (K3)',
]

const CORE_STACK = [
  { label: 'Full Stack (Vibe Coding)', highlight: true },
  { label: 'Next.js 14 & React' },
  { label: 'Python (CNN & ML)' },
  { label: 'Streamlit' },
  { label: 'Server Simbank Ops' },
  { label: 'Vercel & GitHub CI/CD' },
  { label: 'Hardware/Software QC (K3)' },
]

const CONSOLE_TABS = [
  { id: 'profile', label: 'profile.ts', icon: 'badge' },
  { id: 'ai',      label: 'sasak_cnn.py', icon: 'psychology' },
  { id: 'metrics', label: 'telemetry.live', icon: 'monitoring' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    const speed = isDeleting ? 35 : 70

    let pauseTimer
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          pauseTimer = setTimeout(() => setIsDeleting(true), 2100)
        }
      } else if (displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1))
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
      }
    }, speed)

    return () => {
      clearTimeout(timer)
      if (pauseTimer) clearTimeout(pauseTimer)
    }
  }, [displayedText, isDeleting, roleIndex])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full relative pb-14 sm:pb-20 pt-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column (7 cols): Identity, Display Headline, Typewriter & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Identity & Availability Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/15 text-secondary mb-5 border border-primary/30 shadow-[0_0_20px_rgba(44,103,237,0.16)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-label-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
              ELGA ALFAREZA, S.KOM.
            </span>
            <span className="text-white/25">•</span>
            <span className="font-label-mono text-[11px] text-secondary uppercase tracking-wider">
              OPEN FOR HIRE (REMOTE / MATARAM / HYBRID)
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="heading-balance font-display-xl text-display-xl font-extrabold text-white tracking-tight mb-4"
          >
            Engineering Resilient Systems &amp; Applied AI with{' '}
            <span className="text-gradient-electric">Purpose &amp; Craft</span>.
          </motion.h1>

          {/* Terminal Role Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d111a] border border-white/[0.08] font-label-mono text-xs sm:text-code-md text-primary mb-5 max-w-full"
          >
            <span className="text-emerald-400 font-bold">➜</span>
            <span className="text-outline shrink-0">SYS_ROLE //</span>
            <span className="font-semibold text-secondary tracking-wide truncate min-h-[1.35rem]">
              {displayedText}
            </span>
            <span className="w-2 h-4 bg-secondary inline-block animate-pulse shrink-0" />
          </motion.div>

          {/* Narrative Copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="prose-pretty font-body-lg text-body-md sm:text-body-lg text-on-surface-variant mb-7"
          >
            Lulusan S1 Ilmu Komputer Universitas Bumigora (<strong className="text-white font-semibold">IPK 3.76</strong>) yang membangun solusi end-to-end: mulai dari <strong className="text-white font-semibold">Full Stack Web Development (Vibe Coding)</strong> bersertifikasi Google AI, riset <strong className="text-white font-semibold">Machine Learning (CNN)</strong> terpublikasi jurnal nasional <strong className="text-secondary font-semibold">SINTA 4</strong>, hingga operasional Server Simbank berdaya tahan tinggi &amp; Quality Control bersertifikat K3 Kemnaker RI.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 mb-7 w-full sm:w-auto"
          >
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#works')
              }}
              className="btn-primary text-sm sm:text-base"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>Explore Selected Works</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#contact')
              }}
              className="btn-ghost text-sm sm:text-base"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">send</span>
              <span>Initiate Dispatch</span>
            </a>

            <a
              href="https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm sm:text-base"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">download</span>
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Tech Stack Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="font-label-mono text-outline uppercase text-[10px] tracking-widest mr-1">
              CORE STACK //
            </span>
            {CORE_STACK.map((tech) => (
              <span
                key={tech.label}
                className={
                  tech.highlight
                    ? 'tag-tech !bg-primary-container/20 !border-primary/45 !text-white font-semibold'
                    : 'tag-tech'
                }
              >
                {tech.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                )}
                {tech.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column (5 cols): Interactive Architecture & Telemetry Flight Deck */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="lg:col-span-5 w-full"
        >
          <div className="relative rounded-2xl bg-[#0d111b]/90 backdrop-blur-xl border border-white/[0.1] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8),0_0_36px_-8px_rgba(44,103,237,0.25)] overflow-hidden">
            {/* Subtle top glow bar */}
            <div className="h-[2px] w-full bg-gradient-to-r from-primary-container via-secondary to-tertiary opacity-85" />

            {/* Terminal Titlebar + Interactive Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#090c14] border-b border-white/[0.07]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                <span className="font-label-mono text-[11px] text-outline ml-2 hidden sm:inline">
                  ~/elga-alfareza
                </span>
              </div>

              <div className="flex items-center gap-1 bg-white/[0.03] p-0.5 rounded-lg border border-white/[0.06]">
                {CONSOLE_TABS.map((tab) => {
                  const active = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-2.5 py-1 rounded-md font-label-mono text-[11px] flex items-center gap-1 transition-all ${
                        active
                          ? 'bg-primary-container text-white font-semibold shadow-sm'
                          : 'text-on-surface-variant hover:text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[13px]">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tab Viewport */}
            <div className="p-4 sm:p-5 min-h-[295px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'profile' && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between font-label-mono text-[11px] text-outline pb-2.5 mb-3 border-b border-white/[0.05]">
                      <span>SPEC // ENGINEER_PROFILE</span>
                      <span className="text-emerald-400 font-semibold">TYPECHECK: PASS</span>
                    </div>
                    <pre className="font-code-md text-xs sm:text-[13px] leading-relaxed text-on-surface-variant overflow-x-auto">
                      <code>
                        <span className="text-primary">const</span>{' '}
                        <span className="text-white font-semibold">engineer</span> = {'{\n'}
                        {'  '}name:{' '}
                        <span className="text-tertiary">&quot;Elga Alfareza, S.Kom.&quot;</span>,{'\n'}
                        {'  '}almaMater:{' '}
                        <span className="text-secondary">&quot;Univ. Bumigora (3.76)&quot;</span>,{'\n'}
                        {'  '}focus: [{'\n'}
                        {'    '}
                        <span className="text-tertiary">&quot;Full Stack Vibe Coding&quot;</span>,{'\n'}
                        {'    '}
                        <span className="text-tertiary">&quot;Python CNN (SINTA 4)&quot;</span>,{'\n'}
                        {'    '}
                        <span className="text-tertiary">&quot;Server Simbank &amp; QC K3&quot;</span>
                        {'\n'}
                        {'  '}],{'\n'}
                        {'  '}certs:{' '}
                        <span className="text-secondary">&quot;Google AI • Komdigi • Huawei&quot;</span>,{'\n'}
                        {'  '}status:{' '}
                        <span className="text-emerald-400">&quot;READY_FOR_DISPATCH&quot;</span>
                        {'\n}'}
                      </code>
                    </pre>
                  </motion.div>
                )}

                {activeTab === 'ai' && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between font-label-mono text-[11px] text-outline pb-2.5 mb-3 border-b border-white/[0.05]">
                      <span>RESEARCH // AKSARA_SASAK_CNN</span>
                      <span className="text-secondary font-semibold">SINTA 4 ACCREDITED</span>
                    </div>
                    <pre className="font-code-md text-xs sm:text-[13px] leading-relaxed text-on-surface-variant overflow-x-auto">
                      <code>
                        <span className="text-primary">model</span> = Sequential([{'\n'}
                        {'  '}Conv2D(<span className="text-secondary">64</span>, (3, 3), activation=
                        <span className="text-tertiary">&apos;relu&apos;</span>),{'\n'}
                        {'  '}MaxPooling2D(pool_size=(2, 2)),{'\n'}
                        {'  '}Conv2D(<span className="text-secondary">128</span>, (3, 3), activation=
                        <span className="text-tertiary">&apos;relu&apos;</span>),{'\n'}
                        {'  '}Dense(<span className="text-secondary">128</span>, activation=
                        <span className="text-tertiary">&apos;relu&apos;</span>),{'\n'}
                        {'  '}Dense(NUM_AKSARA, activation=
                        <span className="text-tertiary">&apos;softmax&apos;</span>){'\n'}
                        ]){'\n'}
                        <span className="text-outline"># Published in SINTA 4 &amp; Reference Book</span>
                      </code>
                    </pre>
                  </motion.div>
                )}

                {activeTab === 'metrics' && (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 gap-2.5"
                  >
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="font-label-mono text-[10px] text-outline block">
                        ACADEMIC GPA
                      </span>
                      <span className="font-display-xl text-2xl font-extrabold text-primary">
                        3.76
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant block">
                        S1 Ilmu Komputer
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="font-label-mono text-[10px] text-outline block">
                        PUBLICATION
                      </span>
                      <span className="font-display-xl text-2xl font-extrabold text-secondary">
                        SINTA 4
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant block">
                        Jurnal &amp; Buku Ilmiah
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="font-label-mono text-[10px] text-outline block">
                        SIMBANK SLA
                      </span>
                      <span className="font-display-xl text-2xl font-extrabold text-emerald-400">
                        99.9%
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant block">
                        Production Uptime
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="font-label-mono text-[10px] text-outline block">
                        CREDENTIALS
                      </span>
                      <span className="font-display-xl text-2xl font-extrabold text-tertiary">
                        20+
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant block">
                        Verified Certificates
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Console Footer Status */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between font-label-mono text-[11px]">
                <span className="text-outline flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  GOOGLE AI • VIBE CODING VERIFIED
                </span>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo('#about')
                  }}
                  className="text-primary hover:text-secondary font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>Inspect Identity</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
