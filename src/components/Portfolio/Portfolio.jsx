'use client'

import { useState } from 'react'

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
    badge: 'AKURASI: 100%',
    badgeType: 'primary',
    title: 'Model Machine Learning Aksara Sasak',
    desc: 'Perancangan, pelatihan, dan pengujian arsitektur Convolutional Neural Networks (CNN) untuk klasifikasi citra naskah kuno Aksara Sasak. Diterbitkan di Jurnal Nasional Terakreditasi SINTA 4 serta buku ilmiah resmi.',
    tags: ['Python', 'CNN Deep Learning', 'SINTA 4', 'Streamlit'],
    actionText: 'LIHAT RISET SINTA 4',
    actionHref: 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing',
    type: 'code',
    filename: 'sasak.cnn.config.json',
    codeStatus: 'VERIFIED // SINTA 4',
    codeLines: [
      { key: '"system"', val: '"Sasak-CNN-Classifier"', type: 'text-tertiary' },
      { key: '"layers"', val: '{ "conv2d": 64, "dense": 128 }', type: 'text-primary' },
      { key: '"accuracyVal"', val: '"100%"', type: 'text-secondary' },
      { key: '"sintaIndex"', val: '"SINTA-4-TERAKREDITASI"', type: 'text-tertiary' },
    ],
  },
  {
    id: 2,
    category: 'operations',
    ref: 'SYS_REF // 02',
    badge: '99.9% UPTIME',
    badgeType: 'secondary',
    title: 'Infrastruktur Server Simbank & Inventori Massal',
    desc: 'Pengoperasian dan pengelolaan server simbank untuk kelancaran layanan stok kartu SIM massal di CV Rajawali. Sinkronisasi data inventori secara real-time dan pemantauan kesiapan perangkat keras operasional.',
    tags: ['Server Simbank', 'Data Sync', 'Hardware Management', 'CV Rajawali'],
    actionText: 'INFO OPERASIONAL',
    actionHref: '#experience',
    type: 'telemetry',
    metricLabel: 'SIMBANK SYSTEM AVAILABILITY',
    metricValue: '99.9% UPTIME',
    sparklineSub: 'REAL-TIME INVENTORY TRACKING',
  },
  {
    id: 3,
    category: 'operations',
    ref: 'SYS_REF // 03',
    badge: 'QC CONFORMANCE',
    badgeType: 'primary',
    title: 'Sistem Inspeksi Quality Control (QC) Hardware & Software',
    desc: 'Pelaksanaan protokol inspeksi Quality Control menyeluruh terhadap perangkat keras dan perangkat lunak di CV Sinar Mutiara Bali sebelum distribusi logistik kepada mitra.',
    tags: ['Quality Control', 'Hardware Testing', 'Software Testing', 'Logistics Sync'],
    actionText: 'DETAIL PENGALAMAN',
    actionHref: '#experience',
    type: 'telemetry',
    metricLabel: 'DEFECT DETECTION RATE',
    metricValue: '100% VERIFIED',
    sparklineSub: 'ZERO-DEFECT PROTOCOL CONFORMANCE',
  },
  {
    id: 4,
    category: 'ai',
    ref: 'SYS_REF // 04',
    badge: 'PROGRAM KEMENDIKBUD',
    badgeType: 'tertiary',
    title: 'Digitalisasi Asesmen & AKM Kelas (Kampus Mengajar 7)',
    desc: 'Akselerasi adaptasi teknologi dan digitalisasi administrasi pembelajaran di SMP Negeri 20 Mataram melalui program resmi Kemendikbudristek RI, termasuk Asesmen Kompetensi Minimum (AKM) Kelas digital.',
    tags: ['Kemendikbud', 'Kampus Mengajar 7', 'Digitalisasi Sekolah', 'AKM Kelas'],
    actionText: 'LIHAT SERTIFIKAT KM7',
    actionHref: 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing',
    type: 'code',
    filename: 'kampus.mengajar.akm.json',
    codeStatus: 'VERIFIED // KEMDIKBUD RI',
    codeLines: [
      { key: '"program"', val: '"Kampus Mengajar Angkatan 7"', type: 'text-tertiary' },
      { key: '"instansi"', val: '"Kemendikbudristek RI"', type: 'text-primary' },
      { key: '"penempatan"', val: '"SMP Negeri 20 Mataram"', type: 'text-secondary' },
      { key: '"status"', val: '"COMPLETED WITH DISTINCTION"', type: 'text-tertiary' },
    ],
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredWorks =
    activeFilter === 'all'
      ? WORKS
      : WORKS.filter((w) => w.category === activeFilter)

  return (
    <section className="w-full pt-space-xl pb-space-xl mb-margin" id="works">
      {/* Section Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-lg">
        <div>
          <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase mb-2">
            <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
              SECTION 03
            </span>
            <span>// SELECTED WORKS &amp; SYSTEMS</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-on-surface tracking-tight">
            Selected Works &amp; Production Systems
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface-container-low border border-white/[0.06]">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-1.5 rounded-xl font-label-mono text-label-sm transition-all ${
                activeFilter === f.id
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-md'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Work Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className="p-space-lg rounded-2xl bg-surface-container-low shadow-xl border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between font-label-mono text-label-sm mb-3">
                <span className="text-outline">{work.ref}</span>
                <span
                  className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border ${
                    work.badgeType === 'primary'
                      ? 'bg-primary/10 text-primary border-primary/20'
                      : work.badgeType === 'secondary'
                      ? 'bg-secondary/10 text-secondary border-secondary/20'
                      : 'bg-tertiary/10 text-tertiary border-tertiary/20'
                  }`}
                >
                  {work.badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-headline-md text-xl sm:text-headline-md font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                {work.title}
              </h3>
              <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                {work.desc}
              </p>

              {/* Dynamic Exhibit Panel */}
              {work.type === 'code' && (
                <div className="p-space-sm rounded-xl bg-surface-container-lowest font-code-md text-code-md text-secondary mb-space-md overflow-x-auto border border-white/[0.04]">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-bright/40 text-[11px] font-label-mono text-outline">
                    <span>{work.filename}</span>
                    <span className="text-secondary font-medium">{work.codeStatus}</span>
                  </div>
                  <pre className="font-code-md text-[13px] leading-relaxed text-on-surface-variant">
                    <code>
                      {`{\n`}
                      {work.codeLines.map((line, idx) => (
                        <span key={idx}>
                          {`  `}<span className="text-secondary">{line.key}</span>: <span className={line.type}>{line.val}</span>{idx < work.codeLines.length - 1 ? ',' : ''}{`\n`}
                        </span>
                      ))}
                      {`}`}
                    </code>
                  </pre>
                </div>
              )}

              {work.type === 'telemetry' && (
                <div className="p-space-md rounded-xl bg-surface-container-lowest mb-space-md border border-white/[0.04]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-mono text-label-sm text-outline">
                      {work.metricLabel}
                    </span>
                    <span className="font-label-mono text-label-sm text-primary font-bold">
                      {work.metricValue}
                    </span>
                  </div>
                  {/* Inline Sparkline SVG */}
                  <svg
                    className="w-full h-16 text-primary"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 300 60"
                  >
                    <path
                      d="M0,45 Q25,10 50,30 T100,20 T150,40 T200,15 T250,25 T300,8 L300,60 L0,60 Z"
                      fill="currentColor"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M0,45 Q25,10 50,30 T100,20 T150,40 T200,15 T250,25 T300,8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                  <div className="flex items-center justify-between mt-2 font-label-mono text-[10px] text-on-surface-variant">
                    <span>REAL-TIME STATUS</span>
                    <span className="text-secondary font-semibold">
                      {work.sparklineSub}
                    </span>
                    <span className="text-primary font-bold">ACTIVE</span>
                  </div>
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between pt-space-sm border-t border-surface-bright/30 mt-2">
              <div className="flex flex-wrap items-center gap-2 font-label-mono text-label-sm text-outline">
                {work.tags.map((tag, i) => (
                  <span key={tag}>
                    {tag}
                    {i < work.tags.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>
              <a
                className="inline-flex items-center gap-1 font-label-mono text-label-sm text-primary hover:text-secondary font-semibold transition-colors shrink-0"
                href={work.actionHref}
                target={work.actionHref.startsWith('http') ? '_blank' : undefined}
                rel={work.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span>{work.actionText}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
