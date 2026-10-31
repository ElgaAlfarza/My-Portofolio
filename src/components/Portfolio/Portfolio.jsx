'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FILTERS = [
  { id: 'all',        label: 'Semua Proyek (4)' },
  { id: 'ai',         label: 'AI & Riset' },
  { id: 'operations', label: 'IT Operations & QC' },
]

const WORKS = [
  {
    id: 1,
    category: 'ai',
    ref: 'SYS_REF // 01',
    badge: 'AKURASI VALIDASI: 100%',
    badgeType: 'primary',
    title: 'Model Machine Learning Aksara Sasak',
    desc: 'Perancangan, pelatihan, dan pengujian arsitektur Convolutional Neural Networks (CNN) untuk klasifikasi citra naskah kuno Aksara Sasak. Diterbitkan di Jurnal Nasional Terakreditasi SINTA 4 serta buku ilmiah resmi.',
    tags: ['Python', 'CNN Deep Learning', 'SINTA 4', 'Streamlit'],
    actionText: 'LIHAT RISET SINTA 4',
    actionHref: 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing',
    type: 'code',
    filename: '~/research/sasak.cnn.config.json',
    codeStatus: 'VERIFIED // SINTA 4',
    codeLines: [
      { key: '"system"', val: '"Sasak-CNN-Classifier"', type: 'text-tertiary' },
      { key: '"layers"', val: '{ "conv2d": 64, "dense": 128 }', type: 'text-primary' },
      { key: '"accuracyVal"', val: '"100%"', type: 'text-emerald-400' },
      { key: '"publication"', val: '"SINTA-4 & Buku Ilmiah"', type: 'text-secondary' },
    ],
  },
  {
    id: 2,
    category: 'operations',
    ref: 'SYS_REF // 02',
    badge: '99.9% UPTIME SLA',
    badgeType: 'secondary',
    title: 'Infrastruktur Server Simbank & Inventori Massal',
    desc: 'Pengoperasian dan pengelolaan server simbank untuk kelancaran layanan stok kartu SIM massal di CV Rajawali. Sinkronisasi data inventori secara real-time dan pemantauan kesiapan perangkat keras operasional.',
    tags: ['Server Simbank', 'Data Sync', 'Hardware Management', 'CV Rajawali'],
    actionText: 'INFO OPERASIONAL',
    actionHref: '#experience',
    type: 'simbank',
    metricLabel: 'SIMBANK MULTI-PORT AVAILABILITY',
    metricValue: '99.9% UPTIME',
    sparklineSub: 'REAL-TIME INVENTORY SYNC ACTIVE',
  },
  {
    id: 3,
    category: 'operations',
    ref: 'SYS_REF // 03',
    badge: 'ZERO-DEFECT QC',
    badgeType: 'emerald',
    title: 'Sistem Inspeksi Quality Control (QC) Hardware & Software',
    desc: 'Pelaksanaan protokol inspeksi Quality Control menyeluruh terhadap perangkat keras dan perangkat lunak di CV Sinar Mutiara Bali sebelum distribusi logistik kepada mitra.',
    tags: ['Quality Control', 'Hardware Testing', 'Software QA', 'K3 Standard'],
    actionText: 'DETAIL PENGALAMAN',
    actionHref: '#experience',
    type: 'qc-pipeline',
    checks: [
      { stage: '01. Hardware Diagnostics & Thermal Test', rate: '100% PASS' },
      { stage: '02. Firmware & Software Functional QA', rate: 'VERIFIED' },
      { stage: '03. Logistics & K3 Safety Conformance', rate: 'AUDITED' },
    ],
  },
  {
    id: 4,
    category: 'ai',
    ref: 'SYS_REF // 04',
    badge: 'KEMENDIKBUDRISTEK RI',
    badgeType: 'tertiary',
    title: 'Digitalisasi Asesmen & AKM Kelas (Kampus Mengajar 7)',
    desc: 'Akselerasi adaptasi teknologi dan digitalisasi administrasi pembelajaran di SMP Negeri 20 Mataram melalui program resmi Kemendikbudristek RI, termasuk Asesmen Kompetensi Minimum (AKM) Kelas digital.',
    tags: ['Kemendikbud', 'Kampus Mengajar 7', 'Digitalisasi Sekolah', 'AKM Kelas'],
    actionText: 'LIHAT SERTIFIKAT KM7',
    actionHref: 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing',
    type: 'code',
    filename: '~/kemendikbud/km7.deployment.json',
    codeStatus: 'VERIFIED // DIKTI MBKM',
    codeLines: [
      { key: '"program"', val: '"Kampus Mengajar Angkatan 7"', type: 'text-tertiary' },
      { key: '"instansi"', val: '"Kemendikbudristek RI"', type: 'text-primary' },
      { key: '"penempatan"', val: '"SMP Negeri 20 Mataram"', type: 'text-secondary' },
      { key: '"outcome"', val: '"AKM Digital & Literasi Numerasi"', type: 'text-emerald-400' },
    ],
  },
]

const BADGE_STYLES = {
  primary:   'bg-primary/15 text-primary border-primary/30',
  secondary: 'bg-secondary/15 text-secondary border-secondary/30',
  emerald:   'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  tertiary:  'bg-tertiary/15 text-tertiary border-tertiary/30',
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredWorks =
    activeFilter === 'all'
      ? WORKS
      : WORKS.filter((w) => w.category === activeFilter)

  return (
    <section className="w-full py-14 sm:py-20" id="works">
      {/* Section Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2.5 font-label-mono text-label-mono text-secondary uppercase mb-2.5">
            <span className="section-badge">SECTION 03</span>
            <span>// SELECTED WORKS &amp; SYSTEMS</span>
          </div>
          <h2 className="heading-balance font-headline-lg text-headline-lg font-bold text-white tracking-tight">
            Selected Works &amp; Production Systems
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#101420]/90 border border-white/[0.07] overflow-x-auto max-w-full flex-nowrap sm:flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-xl font-label-mono text-xs transition-all shrink-0 sm:shrink ${
                activeFilter === f.id
                  ? 'bg-primary-container text-white font-semibold shadow-[0_0_16px_rgba(44,103,237,0.35)]'
                  : 'text-on-surface-variant hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Work Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => (
            <motion.article
              layout
              key={work.id}
              initial={{ opacity: 0, scale: 0.97, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.28 }}
              className="card-glass p-5 sm:p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Card Meta Header */}
                <div className="flex items-center justify-between font-label-mono text-xs mb-3.5">
                  <span className="text-secondary font-semibold">{work.ref}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold border ${
                      BADGE_STYLES[work.badgeType] || BADGE_STYLES.primary
                    }`}
                  >
                    {work.badge}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="font-headline-md text-headline-md font-bold text-white mb-2.5 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="prose-pretty font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-5">
                  {work.desc}
                </p>

                {/* Exhibit Type 1: Code Inspection Terminal */}
                {work.type === 'code' && (
                  <div className="rounded-xl bg-[#080a11] border border-white/[0.07] mb-5 overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.03] border-b border-white/[0.06] text-[11px] font-label-mono">
                      <span className="flex items-center gap-1.5 text-outline truncate">
                        <span className="w-2 h-2 rounded-full bg-rose-500/75" />
                        <span className="w-2 h-2 rounded-full bg-amber-400/75" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/75 mr-1" />
                        {work.filename}
                      </span>
                      <span className="text-secondary font-semibold shrink-0 ml-2">
                        {work.codeStatus}
                      </span>
                    </div>
                    <pre className="p-3.5 font-code-md text-xs sm:text-[13px] leading-relaxed text-on-surface-variant overflow-x-auto">
                      <code>
                        {`{\n`}
                        {work.codeLines.map((line, idx) => (
                          <span key={line.key}>
                            {`  `}
                            <span className="text-secondary">{line.key}</span>:{' '}
                            <span className={line.type}>{line.val}</span>
                            {idx < work.codeLines.length - 1 ? ',' : ''}
                            {`\n`}
                          </span>
                        ))}
                        {`}`}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Exhibit Type 2: Server Simbank Multi-Port Telemetry */}
                {work.type === 'simbank' && (
                  <div className="p-4 rounded-xl bg-[#080a11] mb-5 border border-white/[0.07] shadow-inner">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-label-mono text-[11px] text-outline">
                        {work.metricLabel}
                      </span>
                      <span className="font-label-mono text-xs text-secondary font-bold">
                        {work.metricValue}
                      </span>
                    </div>

                    {/* Multi-Port Status Matrix */}
                    <div className="grid grid-cols-8 gap-1.5 mb-3">
                      {Array.from({ length: 8 }, (_, idx) => (
                        <div
                          key={idx}
                          className="py-1 rounded bg-emerald-500/10 border border-emerald-500/25 flex flex-col items-center"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mb-0.5" />
                          <span className="font-label-mono text-[9px] text-emerald-300">
                            P0{idx + 1}
                          </span>
                        </div>
                      ))}
                    </div>

                    <svg
                      className="w-full h-14 text-secondary"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 300 56"
                      aria-hidden="true"
                    >
                      <path
                        d="M0,38 Q30,14 60,26 T120,16 T180,28 T240,12 T300,10 L300,56 L0,56 Z"
                        fill="currentColor"
                        fillOpacity="0.14"
                      />
                      <path
                        d="M0,38 Q30,14 60,26 T120,16 T180,28 T240,12 T300,10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2.2"
                      />
                    </svg>

                    <div className="flex items-center justify-between mt-2 font-label-mono text-[10px] text-on-surface-variant">
                      <span>T-REALTIME</span>
                      <span className="text-secondary font-semibold">{work.sparklineSub}</span>
                      <span className="text-emerald-400 font-bold">ONLINE</span>
                    </div>
                  </div>
                )}

                {/* Exhibit Type 3: Diagnostic QC Inspection Pipeline */}
                {work.type === 'qc-pipeline' && (
                  <div className="p-4 rounded-xl bg-[#080a11] mb-5 border border-white/[0.07] shadow-inner space-y-2.5">
                    <div className="flex items-center justify-between font-label-mono text-[11px] pb-1.5 border-b border-white/[0.06]">
                      <span className="text-outline">INSPECTION PIPELINE // BALI LOGISTICS</span>
                      <span className="text-emerald-400 font-bold">100% CONFORMANCE</span>
                    </div>
                    {work.checks.map((chk) => (
                      <div
                        key={chk.stage}
                        className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05] font-label-mono text-[11px]"
                      >
                        <span className="flex items-center gap-2 text-on-surface truncate">
                          <span className="material-symbols-outlined text-[15px] text-emerald-400 shrink-0">
                            task_alt
                          </span>
                          <span className="truncate">{chk.stage}</span>
                        </span>
                        <span className="text-emerald-400 font-semibold shrink-0">{chk.rate}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/[0.07] mt-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  {work.tags.map((tag) => (
                    <span key={tag} className="tag-tech">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="inline-flex items-center gap-1 font-label-mono text-xs text-primary hover:text-secondary font-semibold transition-colors shrink-0 self-start sm:self-auto"
                  href={work.actionHref}
                  target={work.actionHref.startsWith('http') ? '_blank' : undefined}
                  rel={work.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span>{work.actionText}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
