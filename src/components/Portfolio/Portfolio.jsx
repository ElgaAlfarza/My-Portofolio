'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const CERT_AND_RESEARCH_DRIVE =
  'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

const FILTERS = [
  { id: 'all',        label: 'Semua (4)' },
  { id: 'ai',         label: 'AI & Riset' },
  { id: 'operations', label: 'IT Operations & QC' },
]

const WORKS = [
  {
    id: 1,
    category: 'ai',
    domainLabel: 'Riset AI & Deep Learning',
    statusBadge: 'Terpublikasi SINTA 4',
    badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    topBar: 'bg-indigo-600',
    icon: 'psychology',
    title: 'Klasifikasi Citra Naskah Kuno Aksara Sasak Berbasis CNN',
    desc: 'Perancangan, pelatihan, dan evaluasi arsitektur Convolutional Neural Networks (CNN) menggunakan Python untuk mengenali karakter Aksara Sasak dari citra digital. Hasil penelitian diterbitkan pada Jurnal Nasional Terakreditasi SINTA 4 serta buku referensi ilmiah.',
    highlights: [
      { label: 'Metode Utama', value: 'Convolutional Neural Networks (Conv2D, MaxPooling, Dense, Softmax)' },
      { label: 'Luaran Resmi', value: 'Artikel Jurnal SINTA 4, Buku Referensi Ilmiah & Demo Aplikasi Streamlit' },
    ],
    tags: ['Python', 'CNN Deep Learning', 'TensorFlow', 'Streamlit', 'SINTA 4'],
    actionText: 'Buka Dokumen Riset & Publikasi',
    actionHref: CERT_AND_RESEARCH_DRIVE,
  },
  {
    id: 2,
    category: 'operations',
    domainLabel: 'Infrastruktur Produksi • CV Rajawali',
    statusBadge: '99.9% Uptime',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    topBar: 'bg-emerald-600',
    icon: 'dns',
    title: 'Operasional Server Simbank & Sinkronisasi Inventori Massal',
    desc: 'Pengelolaan harian infrastruktur server simbank multi-port untuk menjamin kesiapan stok kartu SIM dalam skala massal di CV Rajawali. Mencakup pemantauan ketersediaan port dan sinkronisasi data inventori secara real-time.',
    highlights: [
      { label: 'Kinerja Layanan', value: 'Ketersediaan operasional 99.9% dengan pemantauan port aktif 24/7' },
      { label: 'Integritas Data', value: 'Sinkronisasi stok fisik dan pencatatan inventori 100% konsisten' },
    ],
    tags: ['Server Simbank', 'Real-Time Data Sync', 'Hardware Management', 'IT Operations'],
    actionText: 'Lihat Riwayat Pengalaman',
    actionHref: '#experience',
  },
  {
    id: 3,
    category: 'operations',
    domainLabel: 'Kendali Mutu • CV Sinar Mutiara Bali',
    statusBadge: 'Standar QC & K3',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    topBar: 'bg-amber-500',
    icon: 'verified_user',
    title: 'Sistem Inspeksi Quality Control (QC) Hardware & Software',
    desc: 'Pelaksanaan prosedur pemeriksaan mutu menyeluruh pada unit perangkat keras dan perangkat lunak sebelum disalurkan kepada mitra distribusi, dipadukan dengan rekonsiliasi mutasi logistik dan prinsip keselamatan kerja.',
    highlights: [
      { label: 'Cakupan Uji', value: 'Diagnosa fisik hardware, uji kelayakan firmware & software QA' },
      { label: 'Tata Kelola', value: 'Audit arus penerimaan unit penyuplai & kepatuhan standar K3' },
    ],
    tags: ['Quality Control', 'Hardware Diagnostics', 'Software QA', 'K3 Standard'],
    actionText: 'Lihat Riwayat Pengalaman',
    actionHref: '#experience',
  },
  {
    id: 4,
    category: 'ai',
    domainLabel: 'Program Nasional • Kemendikbudristek RI',
    statusBadge: 'Kampus Mengajar 7',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    topBar: 'bg-blue-600',
    icon: 'school',
    title: 'Digitalisasi Asesmen & AKM Kelas di SMP Negeri 20 Mataram',
    desc: 'Implementasi transformasi digital administrasi pembelajaran dan pelaksanaan Asesmen Kompetensi Minimum (AKM) Kelas berbasis komputer melalui penugasan resmi Program Kampus Mengajar Angkatan 7.',
    highlights: [
      { label: 'Instansi & Lokasi', value: 'Kemendikbudristek RI • Penempatan SMP Negeri 20 Mataram' },
      { label: 'Dampak Program', value: 'Modernisasi administrasi pembelajaran, AKM digital & literasi numerasi' },
    ],
    tags: ['Kemendikbudristek', 'Kampus Mengajar 7', 'AKM Kelas Digital', 'Sistem Edukasi'],
    actionText: 'Lihat Sertifikat Program',
    actionHref: CERT_AND_RESEARCH_DRIVE,
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredWorks =
    activeFilter === 'all'
      ? WORKS
      : WORKS.filter((work) => work.category === activeFilter)

  return (
    <section id="works" className="w-full py-14 sm:py-20 border-t border-line scroll-reveal">
      {/* Header & Filter Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-subtle border border-line text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            <span>04</span>
            <span>•</span>
            <span>Portofolio &amp; Publikasi</span>
          </div>
          <h2 className="heading-balance font-sans text-section-title text-ink">
            Proyek, Riset &amp; Sistem Produksi
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-subtle border border-line">
          {FILTERS.map((filter) => {
            const active = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-3 py-1.5 rounded-md text-xs font-medium transition-colors z-10 ${
                  active
                    ? 'text-brand font-semibold'
                    : 'text-ink-body hover:text-ink'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="works-filter-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-md bg-paper border border-brand-border shadow-subtle -z-10"
                  />
                )}
                <span>{filter.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 2-Column Clean Project Cards with Subtle Top Accent Rails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredWorks.map((work) => {
          const isExternal = work.actionHref.startsWith('http')
          return (
            <article
              key={work.id}
              className="exec-card exec-card-hover relative overflow-hidden p-5 sm:p-6 flex flex-col justify-between gap-5 group"
            >
              {/* Subtle Color Accent Rail */}
              <div className={`absolute top-0 inset-x-0 h-1 ${work.topBar}`} aria-hidden="true" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pt-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                    <span className="material-symbols-outlined text-[1rem] text-brand" aria-hidden="true">
                      {work.icon}
                    </span>
                    <span>{work.domainLabel}</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold border ${work.badgeClass}`}>
                    {work.statusBadge}
                  </span>
                </div>

                <h3 className="font-sans text-lg font-bold text-ink leading-snug mb-2.5 group-hover:text-brand transition-colors">
                  {work.title}
                </h3>

                <p className="prose-pretty text-xs sm:text-sm text-ink-body mb-4 leading-relaxed">
                  {work.desc}
                </p>

                {/* Structured Deliverable / Outcome Box */}
                <dl className="rounded-lg bg-canvas border border-line p-3.5 space-y-2 text-xs">
                  {work.highlights.map((h) => (
                    <div key={h.label}>
                      <dt className="font-semibold text-ink">{h.label}</dt>
                      <dd className="text-ink-body mt-0.5 leading-relaxed">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span key={tag} className="exec-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={work.actionHref}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-hover shrink-0 transition-colors"
                >
                  <span>{work.actionText}</span>
                  <span className="material-symbols-outlined text-[1rem] transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                    {isExternal ? 'arrow_outward' : 'arrow_forward'}
                  </span>
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
