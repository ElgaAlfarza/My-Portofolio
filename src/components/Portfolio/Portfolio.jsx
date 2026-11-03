'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const CERT_AND_RESEARCH_DRIVE =
  'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

const FILTERS = [
  { id: 'all',        label: 'Semua Case Study (4)' },
  { id: 'ai',         label: 'Deep Learning & AI (2)' },
  { id: 'operations', label: 'Server & QC K3 (2)' },
]

const CASE_STUDIES = [
  {
    id: 1,
    featured: true,
    category: 'ai',
    number: '01',
    domainLabel: 'Riset AI & Deep Learning',
    statusBadge: 'Terpublikasi SINTA 4',
    badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    topBar: 'bg-indigo-600',
    icon: 'psychology',
    title: 'Klasifikasi Citra Naskah Kuno Aksara Sasak Berbasis Convolutional Neural Networks',
    desc: 'Pengembangan arsitektur Deep Learning Convolutional Neural Networks (CNN) menggunakan Python untuk digitalisasi dan pengenalan karakter naskah kuno lontar Aksara Sasak. Riset ini berhasil diterbitkan di Jurnal Nasional Terakreditasi SINTA 4 serta diterbitkan dalam buku referensi ilmiah resmi.',
    metrics: [
      { label: 'Akurasi Pengujian', value: '92.3%' },
      { label: 'Dataset Citra', value: '1.080 Sample' },
      { label: 'Status Publikasi', value: 'SINTA 4' },
      { label: 'Implementasi', value: 'Streamlit Web' },
    ],
    highlights: [
      { label: 'Tantangan Riset', value: 'Karakter naskah kuno memiliki degradasi fisik, goresan tangan non-standar, dan noise latar belakang daun lontar.' },
      { label: 'Solusi Arsitektur', value: 'Ekstraksi fitur multi-layer Conv2D, MaxPooling, Dropout untuk mitigasi overfitting, dan klasifikasi Softmax Dense.' },
      { label: 'Luaran Nyata', value: 'Artikel Jurnal Terakreditasi SINTA 4, Buku Referensi Ber-ISBN, dan prototipe inferensi real-time berbasis Streamlit.' },
    ],
    tags: ['Python', 'CNN Deep Learning', 'TensorFlow', 'Streamlit', 'SINTA 4', 'Computer Vision'],
    actionText: 'Buka Dokumen Publikasi & Paper',
    actionHref: CERT_AND_RESEARCH_DRIVE,
  },
  {
    id: 2,
    featured: true,
    category: 'operations',
    number: '02',
    domainLabel: 'Infrastruktur Produksi • CV Rajawali',
    statusBadge: '99.9% Uptime',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    topBar: 'bg-emerald-600',
    icon: 'dns',
    title: 'Operasional Server Simbank Skala Massal & Sinkronisasi Inventori Real-Time',
    desc: 'Pengelolaan harian sistem server simbank multi-port di CV Rajawali untuk menjamin ketersediaan ribuan kartu SIM aktif. Meliputi pengawasan stabilitas transmisi jaringan, penanganan failover port, dan sinkronisasi data inventori tanpa ada perbedaan antara stok fisik dan sistem.',
    metrics: [
      { label: 'SLA Ketersediaan', value: '99.9%' },
      { label: 'Volume Harian', value: '2.000+ SIM' },
      { label: 'Integritas Data', value: '100% Cocok' },
      { label: 'Waktu Respon', value: '< 2 Menit' },
    ],
    highlights: [
      { label: 'Tantangan Operasional', value: 'Tingginya beban transaksi simultan, potensi fluktuasi sinyal modem, dan risiko ketidaksesuaian pencatatan logistik massal.' },
      { label: 'Solusi Rekayasa', value: 'Pemetaan routing port otomatis, pemantauan status koneksi hardware secara live, dan rekonsiliasi database transaksional harian.' },
      { label: 'Dampak Bisnis', value: 'Operasional kartu SIM berjalan lancar tanpa kendala fatal, zero-loss transaksi kuota, dan efisiensi waktu distribusi.' },
    ],
    tags: ['Server Simbank', 'Multiport Hardware', 'Real-Time Sync', 'High Availability', 'Database Audit'],
    actionText: 'Lihat Riwayat Pengalaman',
    actionHref: '#experience',
  },
  {
    id: 3,
    featured: false,
    category: 'operations',
    number: '03',
    domainLabel: 'Kendali Mutu • CV Sinar Mutiara Bali',
    statusBadge: 'Standar QC & K3',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    topBar: 'bg-amber-500',
    icon: 'verified_user',
    title: 'Sistem Inspeksi Quality Control (QC) Hardware & Software Unit',
    desc: 'Pelaksanaan prosedur Quality Control bertahap untuk memvalidasi kelayakan fungsional perangkat keras dan integritas perangkat lunak sebelum disalurkan ke mitra distribusi, dikombinasikan dengan prosedur K3 Kemnaker RI.',
    metrics: [
      { label: 'Standar QC', value: '100% Lolos' },
      { label: 'Keselamatan', value: 'HIRA & JSA' },
    ],
    highlights: [
      { label: 'Cakupan Uji', value: 'Diagnostik fisik hardware, verifikasi firmware, dan validasi software operasional.' },
      { label: 'Kepatuhan K3', value: 'Penerapan SOP penanganan unit elektronik dan keselamatan kerja tersertifikasi Kemnaker RI.' },
    ],
    tags: ['Quality Control', 'Hardware Testing', 'Software QA', 'K3 Kemnaker', 'Logistik'],
    actionText: 'Lihat Detail Pengalaman',
    actionHref: '#experience',
  },
  {
    id: 4,
    featured: false,
    category: 'ai',
    number: '04',
    domainLabel: 'Program Nasional • Kemendikbudristek RI',
    statusBadge: 'Kampus Mengajar 7',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    topBar: 'bg-blue-600',
    icon: 'school',
    title: 'Digitalisasi Asesmen & AKM Kelas di SMP Negeri 20 Mataram',
    desc: 'Akselerasi transformasi digital administrasi pendidikan dan pengelolaan infrastruktur pelaksanaan Asesmen Kompetensi Minimum (AKM) Kelas berbasis komputer melalui penugasan resmi Program Kampus Mengajar Angkatan 7.',
    metrics: [
      { label: 'Lokasi Penugasan', value: 'SMPN 20 MTR' },
      { label: 'Dampak Siswa', value: 'AKM Digital' },
    ],
    highlights: [
      { label: 'Peran Utama', value: 'Setup jaringan lokal tes AKM, asistensi administrasi guru, dan penguatan literasi numerasi.' },
      { label: 'Luaran Program', value: 'Piagam penghargaan resmi Kemendikbudristek RI atas kontribusi digitalisasi sekolah.' },
    ],
    tags: ['Kemendikbudristek', 'Kampus Mengajar 7', 'AKM Digital', 'Edukasi Teknologi', 'Infrastruktur Sekolah'],
    actionText: 'Lihat Piagam Penghargaan',
    actionHref: CERT_AND_RESEARCH_DRIVE,
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredStudies =
    activeFilter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeFilter)

  return (
    <section id="works" className="w-full py-12 sm:py-16 border-t border-sandstone scroll-reveal">
      
      {/* Editorial Section Header (Image 2 Aesthetic) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-sandstone text-[0.6875rem] font-mono uppercase tracking-widest text-ink-muted mb-2">
            <span className="font-bold text-ink">04</span>
            <span className="text-sandstone-dark">•</span>
            <span>ENGINEERING CASE STUDIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            CASE STUDY
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-ink-muted mt-1">
            &ldquo;Sistem yang kuat tidak hanya bekerja di atas kertas, tetapi teruji keandalannya saat beroperasi di bawah beban nyata.&rdquo;
          </p>
        </div>

        {/* Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter case study"
          className="flex flex-wrap items-center gap-1 p-1 rounded-full bg-subtle border border-sandstone"
        >
          {FILTERS.map((filter) => {
            const active = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-colors z-10 ${
                  active
                    ? 'text-brand font-bold'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="casestudy-filter-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-paper border border-brand/20 shadow-subtle -z-10"
                  />
                )}
                <span>{filter.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Case Studies Bento Grid */}
      <div className="flex flex-col gap-6">
        {filteredStudies.map((study) => {
          const isExternal = study.actionHref.startsWith('http')
          return (
            <article
              key={study.id}
              className={`rounded-2xl sm:rounded-3xl border border-sandstone bg-paper p-6 sm:p-8 lg:p-10 shadow-subtle hover:border-sandstone-dark transition-all duration-200 relative overflow-hidden group`}
            >
              {/* Accent Rail */}
              <div className={`absolute top-0 inset-x-0 h-1.5 ${study.topBar}`} aria-hidden="true" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Context, Challenge, Solution & Highlights (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header line */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-ink-muted">
                        CASE STUDY {study.number}
                      </span>
                      <span className="text-sandstone-dark">•</span>
                      <span className="text-xs font-semibold text-brand">
                        {study.domainLabel}
                      </span>
                      <span className={`ml-auto px-2 py-0.5 rounded text-[0.6875rem] font-bold border ${study.badgeClass}`}>
                        {study.statusBadge}
                      </span>
                    </div>

                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-ink leading-tight mb-3 group-hover:text-brand transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-ink-body leading-relaxed mb-6">
                      {study.desc}
                    </p>

                    {/* Structured Methodology Checklist */}
                    <dl className="rounded-xl bg-canvas border border-sandstone p-4 space-y-2.5 text-xs">
                      {study.highlights.map((h) => (
                        <div key={h.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                          <dt className="font-bold text-ink shrink-0 sm:w-36">
                            {h.label}:
                          </dt>
                          <dd className="text-ink-body leading-relaxed">
                            {h.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Tags & Action Link */}
                  <div className="mt-6 pt-4 border-t border-sandstone flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag) => (
                        <span key={tag} className="exec-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={study.actionHref}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-hover transition-colors"
                    >
                      <span>{study.actionText}</span>
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">
                        {isExternal ? 'arrow_outward' : 'arrow_forward'}
                      </span>
                    </a>
                  </div>

                </div>

                {/* Right Column: Key Results & Quantitative Metrics Card (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="rounded-2xl bg-gradient-to-br from-subtle to-sandstone-light border border-sandstone p-6 shadow-inner flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-sandstone mb-4">
                        <span className="font-mono text-xs uppercase tracking-wider text-ink-muted font-bold">
                          VERIFIED OUTCOMES
                        </span>
                        <div className="w-6 h-6 rounded-md bg-paper border border-sandstone flex items-center justify-center text-brand">
                          <span className="material-symbols-outlined text-sm">
                            {study.icon}
                          </span>
                        </div>
                      </div>

                      {/* 2x2 Quantitative Metrics Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {study.metrics.map((m) => (
                          <div key={m.label} className="p-3 rounded-xl bg-paper border border-sandstone shadow-xs">
                            <span className="font-display text-2xl text-ink font-bold block leading-tight">
                              {m.value}
                            </span>
                            <span className="text-[0.6875rem] font-semibold text-ink-muted block mt-0.5">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-sandstone/80 text-[0.6875rem] text-ink-muted flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                      <span>Data hasil pengujian dan laporan operasional terverifikasi.</span>
                    </div>

                  </div>
                </div>

              </div>

            </article>
          )
        })}
      </div>

    </section>
  )
}
