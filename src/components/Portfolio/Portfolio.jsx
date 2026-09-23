'use client'

/**
 * Portfolio Section
 *
 * Three tabs: Projects | Certificates | Tech Stack
 *
 * Tab active indicator: Framer Motion layoutId (same spring pattern as Navbar).
 * Tab content transitions: AnimatePresence mode="wait" + y-slide + opacity.
 * Grid items stagger in on each tab switch.
 *
 * Replace the data arrays below with real content; the components handle
 * all layout automatically.
 */

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from './Lightbox'

// ── Animation constants ────────────────────────────────────────────────────
const SPRING      = { type: 'spring', stiffness: 380, damping: 36 }
const EASE_OUT    = [0, 0, 0.2, 1]
const EASE_IN     = [0.4, 0, 1, 1]

const tabContent = {
  enter:  { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.28, ease: EASE_OUT } },
  exit:   { opacity: 0, y: -6, transition: { duration: 0.18, ease: EASE_IN  } },
}

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.32, ease: EASE_OUT } },
}

// ── Data ───────────────────────────────────────────────────────────────────
const TABS = ['Projects', 'Certificates', 'Tech Stack']

const PROJECTS = [
  {
    id: 1, image: null, placeholder: '#1a2540',
    title: 'Nama Proyek 1',
    description: 'Deskripsi singkat apa yang dibangun dan masalah apa yang diselesaikan.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#', githubUrl: '#',
  },
  {
    id: 2, image: null, placeholder: '#1e2a35',
    title: 'Nama Proyek 2',
    description: 'Deskripsi singkat proyek — fokus pada value dan teknologi utama.',
    tags: ['Next.js', 'Tailwind CSS', 'Prisma'],
    liveUrl: '#', githubUrl: '#',
  },
  {
    id: 3, image: null, placeholder: '#22203a',
    title: 'Nama Proyek 3',
    description: 'Deskripsi singkat proyek — apa yang dipelajari, apa yang diselesaikan.',
    tags: ['TypeScript', 'Express', 'MongoDB'],
    liveUrl: '#', githubUrl: '#',
  },
  {
    id: 4, image: null, placeholder: '#1a2e28',
    title: 'Nama Proyek 4',
    description: 'Proyek personal atau open-source yang kamu banggakan.',
    tags: ['React Native', 'Firebase'],
    liveUrl: '#', githubUrl: null,
  },
]

const CERTIFICATES = [
  { id: 1, src: null, alt: 'Nama Sertifikat 1', title: 'Nama Sertifikat 1', issuer: 'Nama Penerbit', year: '2024', placeholder: '#1a2540' },
  { id: 2, src: null, alt: 'Nama Sertifikat 2', title: 'Nama Sertifikat 2', issuer: 'Nama Penerbit', year: '2024', placeholder: '#22203a' },
  { id: 3, src: null, alt: 'Nama Sertifikat 3', title: 'Nama Sertifikat 3', issuer: 'Nama Penerbit', year: '2023', placeholder: '#1e2a35' },
  { id: 4, src: null, alt: 'Nama Sertifikat 4', title: 'Nama Sertifikat 4', issuer: 'Nama Penerbit', year: '2023', placeholder: '#1a2e28' },
  { id: 5, src: null, alt: 'Nama Sertifikat 5', title: 'Nama Sertifikat 5', issuer: 'Nama Penerbit', year: '2022', placeholder: '#2a1e20' },
]

const LEVEL_STYLE = {
  Familiar:   'bg-white/[0.05] text-white/40',
  Proficient: 'bg-accent/[0.12] text-accent/80',
  Advanced:   'bg-accent/[0.20] text-accent font-semibold',
}

const TECH_STACK = {
  Frontend: [
    { name: 'React',         color: '#61DAFB', level: 'Advanced'   },
    { name: 'Next.js',       color: '#FFFFFF', level: 'Proficient' },
    { name: 'TypeScript',    color: '#7EB8F7', level: 'Proficient' },
    { name: 'Tailwind CSS',  color: '#38BDF8', level: 'Advanced'   },
    { name: 'Framer Motion', color: '#9D78FF', level: 'Proficient' },
  ],
  Backend: [
    { name: 'Node.js',    color: '#6AC47A', level: 'Proficient' },
    { name: 'Express',    color: '#FFFFFF', level: 'Proficient' },
    { name: 'PostgreSQL', color: '#699ECA', level: 'Familiar'   },
    { name: 'Prisma',     color: '#A0C4C8', level: 'Familiar'   },
  ],
  Tools: [
    { name: 'Git',    color: '#F5795A', level: 'Advanced'   },
    { name: 'Docker', color: '#5BB8F5', level: 'Familiar'   },
    { name: 'Figma',  color: '#F06292', level: 'Proficient' },
    { name: 'VS Code',color: '#539CF2', level: 'Advanced'   },
    { name: 'Vercel', color: '#FFFFFF', level: 'Proficient' },
  ],
}

// ── External link icon ─────────────────────────────────────────────────────
const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M7 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9"/>
    <path d="M13 3h-4m4 0v4m0-4L8 8"/>
  </svg>
)
const GithubSmIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

// ── Tab: Projects ──────────────────────────────────────────────────────────
function ProjectsTab() {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="show"
      className="grid sm:grid-cols-2 gap-5"
    >
      {PROJECTS.map((proj) => (
        <motion.article
          key={proj.id}
          variants={cardVariant}
          className="card-glass rounded-2xl overflow-hidden group flex flex-col"
        >
          {/* Thumbnail */}
          <div className="relative overflow-hidden aspect-video flex-shrink-0">
            {proj.image
              ? (
                <img
                  src={proj.image}
                  alt={`${proj.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )
              : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: proj.placeholder }}
                  role="img"
                  aria-label={`${proj.title} — placeholder thumbnail`}
                >
                  <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
                    thumbnail
                  </span>
                </div>
              )
            }
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <h3 className="font-semibold text-white/90 text-sm leading-snug group-hover:text-white transition-colors">
              {proj.title}
            </h3>
            <p className="text-xs text-white/45 leading-relaxed flex-1">
              {proj.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {proj.tags.map((t) => (
                <span key={t} className="tag-tech">{t}</span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2 pt-1">
              <a
                href={proj.liveUrl}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary text-xs py-1.5 px-3 gap-1"
              >
                Live Demo <ExternalIcon />
              </a>
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-ghost text-xs py-1.5 px-3 gap-1"
                >
                  <GithubSmIcon /> GitHub
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}

// ── Tab: Certificates ──────────────────────────────────────────────────────
function CertificatesTab() {
  const [lightbox, setLightbox] = useState(null) // { src, alt, title } | null

  return (
    <>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 gap-4"
      >
        {CERTIFICATES.map((cert) => (
          <motion.div key={cert.id} variants={cardVariant}>
            <button
              onClick={() => setLightbox({ src: cert.src, alt: cert.alt, title: cert.title })}
              className="
                w-full text-left card-glass rounded-xl overflow-hidden group
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
              "
              aria-label={`View certificate: ${cert.title}`}
            >
              {/* Certificate image / placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {cert.src
                  ? (
                    <img
                      src={cert.src}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )
                  : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: cert.placeholder }}
                      aria-hidden="true"
                    >
                      {/* Certificate frame decoration */}
                      <div className="w-3/4 h-4/5 border border-white/10 rounded flex items-center justify-center">
                        <span className="text-[9px] font-mono text-white/15 tracking-widest uppercase text-center px-2">
                          certificate
                        </span>
                      </div>
                    </div>
                  )
                }
                {/* Zoom hint overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/70 text-xs font-medium">
                    Klik untuk buka
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="px-3 py-2.5">
                <p className="text-xs font-medium text-white/80 truncate">{cert.title}</p>
                <p className="text-[10px] text-white/40 mt-0.5">{cert.issuer} · {cert.year}</p>
              </div>
            </button>
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        src={lightbox?.src}
        alt={lightbox?.alt ?? ''}
        title={lightbox?.title}
      />
    </>
  )
}

// ── Tab: Tech Stack ────────────────────────────────────────────────────────
function TechStackTab() {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {Object.entries(TECH_STACK).map(([category, techs], catIdx) => (
        <motion.div key={category} variants={cardVariant}>
          {/* Category heading */}
          <p className="text-[10px] font-mono text-accent/70 tracking-[0.2em] uppercase mb-4">
            {category}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className="card-glass flex flex-col items-center gap-2.5 px-3 py-4 rounded-xl"
              >
                {/* Tech color dot instead of a potentially wrong logo */}
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tech.color }}
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-white/80 text-center leading-tight">
                  {tech.name}
                </span>
                {/* Level badge */}
                <span className={`text-[9px] px-2 py-0.5 rounded-full ${LEVEL_STYLE[tech.level]}`}>
                  {tech.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Level legend */}
      <motion.div
        variants={cardVariant}
        className="flex flex-wrap gap-3 pt-2 border-t border-white/[0.06]"
        role="note"
        aria-label="Level legend"
      >
        <span className="text-[10px] text-white/30 mr-1">Level:</span>
        {Object.entries(LEVEL_STYLE).map(([level, cls]) => (
          <span key={level} className={`text-[10px] px-2 py-0.5 rounded-full ${cls}`}>
            {level}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}

// ── Main Portfolio section ─────────────────────────────────────────────────
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Projects')

  const handleTab = useCallback((tab) => setActiveTab(tab), [])

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="bg-bg">
      <div className="section-wrapper">

        {/* ── Section header ──────────────────────────── */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl font-bold mb-2">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-white/45 text-sm max-w-sm mx-auto">
            Proyek, sertifikat, dan teknologi yang saya kuasai.
          </p>
        </motion.div>

        {/* ── Tab bar ─────────────────────────────────── */}
        <div
          role="tablist"
          aria-label="Portfolio sections"
          className="flex justify-center gap-1 mb-10 p-1 rounded-full bg-white/[0.03] border border-white/[0.06] w-fit mx-auto"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`tabpanel-${tab}`}
              id={`tab-${tab}`}
              onClick={() => handleTab(tab)}
              className={`
                relative px-5 py-1.5 rounded-full text-sm font-medium
                transition-colors duration-200
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
                ${activeTab === tab ? 'text-white' : 'text-white/45 hover:text-white/70'}
              `}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="portfolio-tab-pill"
                  transition={SPRING}
                  className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                  aria-hidden="true"
                />
              )}
              <span className="relative">{tab}</span>
            </button>
          ))}
        </div>

        {/* ── Tab panels ──────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            variants={tabContent}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {activeTab === 'Projects'      && <ProjectsTab />}
            {activeTab === 'Certificates'  && <CertificatesTab />}
            {activeTab === 'Tech Stack'    && <TechStackTab />}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
