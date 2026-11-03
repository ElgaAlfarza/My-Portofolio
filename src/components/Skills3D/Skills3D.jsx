'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const SKILL_DOMAINS = [
  {
    id: 'fullstack',
    title: 'Full Stack Web & Vibe Coding',
    subtitle: 'Google AI Certified • Modern Web Architecture',
    icon: 'code_blocks',
    accentBorder: 'border-l-blue-600',
    iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
    summary:
      'Pengembangan aplikasi web end-to-end modern, integrasi API, manajemen database, serta deployment otomatis ke lingkungan produksi.',
    skills: [
      {
        name: 'Full Stack (Vibe Coding)',
        badge: 'Google AI',
        desc: 'Pengembangan aplikasi full stack end-to-end berbasis AI-assisted engineering, prompt terstruktur, dan 20+ artifacts terverifikasi.',
      },
      {
        name: 'Next.js 14 & React',
        badge: 'Utama',
        desc: 'Pembangunan antarmuka web modern dengan App Router, Server Components, dynamic API routes, dan optimasi performa.',
      },
      {
        name: 'Vercel Deployment',
        badge: 'Produksi',
        desc: 'Konfigurasi continuous deployment aplikasi web, pengelolaan environment variables, dan edge routing.',
      },
      {
        name: 'GitHub & Git CI/CD',
        badge: 'Workflow',
        desc: 'Manajemen repositori kode, version control terstruktur, dan sinkronisasi pipeline rilis produksi.',
      },
      {
        name: 'Visual Studio Code',
        badge: 'Utama',
        desc: 'Lingkungan pengembangan terintegrasi dengan workflow debugging multi-terminal dan ekstensi rekayasa modern.',
      },
      {
        name: 'SQL & Database Design',
        badge: 'Data',
        desc: 'Perancangan tabel relasional, kueri terstruktur, audit bukti transaksi, dan pemeliharaan integritas data.',
      },
      {
        name: 'Tailwind CSS',
        badge: 'UI System',
        desc: 'Implementasi sistem desain responsif, aksesibel, dan konsisten di berbagai ukuran perangkat.',
      },
      {
        name: 'Cloudinary API',
        badge: 'Integrasi',
        desc: 'Manajemen unggahan media berbasis cloud, optimasi aset gambar dinamis, dan integrasi panel admin.',
      },
    ],
  },
  {
    id: 'ai',
    title: 'Python, AI & Machine Learning',
    subtitle: 'Publikasi Jurnal SINTA 4 • Komdigi & Huawei AI',
    icon: 'psychology',
    accentBorder: 'border-l-indigo-600',
    iconBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    summary:
      'Perancangan model deep learning, pengolahan citra digital, serta pembuatan aplikasi analitik interaktif berbasis Python.',
    skills: [
      {
        name: 'Python (Machine Learning)',
        badge: 'Utama',
        desc: 'Bahasa utama untuk pemrosesan dataset, ekstraksi fitur, pelatihan model klasifikasi, dan skrip automasi.',
      },
      {
        name: 'CNN Deep Learning',
        badge: 'SINTA 4',
        desc: 'Perancangan arsitektur Convolutional Neural Networks untuk klasifikasi citra naskah kuno Aksara Sasak.',
      },
      {
        name: 'Streamlit AI Apps',
        badge: 'Deployment',
        desc: 'Pembuatan antarmuka web interaktif untuk pengujian dan demonstrasi inferensi model Machine Learning.',
      },
      {
        name: 'TensorFlow & Keras',
        badge: 'Framework',
        desc: 'Penyusunan layer konvolusi, pooling, evaluasi metrik akurasi, dan tuning hyperparameter model.',
      },
      {
        name: 'Computer Vision',
        badge: 'Citra Digital',
        desc: 'Pra-pemrosesan citra, augmentasi dataset naskah, normalisasi piksel, dan segmentasi karakter.',
      },
      {
        name: 'Riset Ilmiah SINTA 4',
        badge: 'Terpublikasi',
        desc: 'Penulisan metodologi eksperimen ilmiah yang terbit di Jurnal Nasional Terakreditasi SINTA 4 dan buku referensi.',
      },
      {
        name: 'Google AI & Prompt Eng.',
        badge: 'Tersertifikasi',
        desc: 'Lulusan 7-Course Google AI Professional Certificate untuk perancangan solusi AI praktis.',
      },
    ],
  },
  {
    id: 'operations',
    title: 'IT Operations & Server Simbank',
    subtitle: 'CV Rajawali • Infrastruktur Berkapasitas Massal',
    icon: 'dns',
    accentBorder: 'border-l-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    summary:
      'Pengelolaan operasional server produksi, pemantauan perangkat keras multi-port, dan sinkronisasi stok kartu SIM real-time.',
    skills: [
      {
        name: 'Server Simbank Ops',
        badge: 'Produksi',
        desc: 'Pengoperasian harian infrastruktur server simbank di CV Rajawali untuk manajemen stok kartu SIM skala besar.',
      },
      {
        name: 'Real-Time Data Sync',
        badge: '100% Akurat',
        desc: 'Sinkronisasi data inventori secara langsung untuk menjaga kesesuaian stok fisik dan sistem tanpa selisih.',
      },
      {
        name: '99.9% Uptime Ops',
        badge: 'SLA Tinggi',
        desc: 'Pemeliharaan stabilitas layanan operasional dan penanganan cepat terhadap potensi gangguan perangkat.',
      },
      {
        name: 'Network & Port Config',
        badge: 'Jaringan',
        desc: 'Pengaturan pemetaan port simbank, pemantauan konektivitas jaringan lokal, dan stabilitas transmisi.',
      },
      {
        name: 'System Monitoring',
        badge: 'Diagnostik',
        desc: 'Evaluasi berkala terhadap performa perangkat keras server dan kelancaran antrean komunikasi.',
      },
    ],
  },
  {
    id: 'qc',
    title: 'Quality Control (QC), K3 & Standar Kerja',
    subtitle: 'Kemnaker RI • CV Sinar Mutiara Bali',
    icon: 'verified_user',
    accentBorder: 'border-l-amber-500',
    iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
    summary:
      'Inspeksi kelayakan perangkat keras dan lunak, penerapan keselamatan kerja (HIRA & JSA), serta administrasi kuantitatif.',
    skills: [
      {
        name: 'Hardware Diagnostics',
        badge: 'QC Industri',
        desc: 'Pemeriksaan fisik dan pengujian fungsional komponen perangkat keras sebelum distribusi ke mitra.',
      },
      {
        name: 'Software QA Testing',
        badge: 'Validasi',
        desc: 'Verifikasi fungsi sistem, identifikasi cacat perangkat lunak, dan kepatuhan standar operasional.',
      },
      {
        name: 'K3 (HIRA & JSA)',
        badge: 'Kemnaker RI',
        desc: 'Identifikasi bahaya (HIRA) dan analisis keselamatan kerja (JSA) bersertifikat BPVP Belitung Kemnaker RI.',
      },
      {
        name: 'Spreadsheet Operasional',
        badge: 'Kemnaker 20JP',
        desc: 'Pengolahan laporan logistik, rekonsiliasi data inventori, dan analisis lembar sebar tersertifikasi Kemnaker.',
      },
      {
        name: 'English (TOEFL ITP)',
        badge: 'Kemnaker RI',
        desc: 'Kemampuan pemahaman dokumentasi dan komunikasi bahasa Inggris bersertifikat BPVP Bandung Barat.',
      },
    ],
  },
  {
    id: 'creative',
    title: 'Desain Grafis & Video Editing',
    subtitle: 'Adobe Photoshop • Premiere Pro • CapCut',
    icon: 'palette',
    accentBorder: 'border-l-purple-600',
    iconBg: 'bg-purple-50 text-purple-700 border-purple-200',
    summary:
      'Perancangan visual digital, retouching & manipulasi foto Photoshop, produksi video editing, dan pembuatan konten multimedia.',
    skills: [
      {
        name: 'Adobe Photoshop',
        badge: 'Desain Grafis',
        desc: 'Pengolahan grafis raster, photo manipulation & retouching, perancangan poster, thumbnail, dan aset visual digital.',
      },
      {
        name: 'Video Editing',
        badge: 'Produksi Video',
        desc: 'Editing video profesional dengan pemotongan ritme dinamis, color grading, transisi, dan sinkronisasi audio (Premiere / CapCut).',
      },
      {
        name: 'Visual & UI Asset Design',
        badge: 'Kreatif',
        desc: 'Pembuatan komponen grafis, ikonografi, dan tata letak antarmuka pengguna untuk web dan media sosial.',
      },
      {
        name: 'Multimedia Content Production',
        badge: 'Konten',
        desc: 'Produksi terpadu materi visual dan audio untuk dokumentasi program, promosi digital, dan publikasi profil.',
      },
    ],
  },
]

const FILTER_TABS = [
  { id: 'all',        label: 'Semua Domain (29)' },
  { id: 'fullstack',  label: 'Full Stack (8)' },
  { id: 'creative',   label: 'Photoshop & Video (4)' },
  { id: 'ai',         label: 'AI & Python (7)' },
  { id: 'operations', label: 'IT Operations (5)' },
  { id: 'qc',         label: 'QC & K3 (5)' },
]

export default function Skills3D() {
  const [activeDomain, setActiveDomain] = useState('all')
  const [activeSkill, setActiveSkill] = useState(SKILL_DOMAINS[0].skills[0])

  const visibleDomains =
    activeDomain === 'all'
      ? SKILL_DOMAINS
      : SKILL_DOMAINS.filter((d) => d.id === activeDomain)

  return (
    <section id="skills" className="w-full py-12 sm:py-16 border-t border-sandstone scroll-reveal">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-sandstone text-[0.6875rem] font-mono uppercase tracking-widest text-ink-muted mb-2">
            <span className="font-bold text-ink">03</span>
            <span className="text-sandstone-dark">•</span>
            <span>CAPABILITIES &amp; SPECIALIZATIONS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            MY WORK INCLUDES
          </h2>
        </div>

        {/* Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter kategori keahlian"
          className="flex flex-wrap items-center gap-1 p-1 rounded-full bg-subtle border border-sandstone"
        >
          {FILTER_TABS.map((tab) => {
            const selected = activeDomain === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveDomain(tab.id)}
                className={`relative px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-colors z-10 ${
                  selected
                    ? 'text-brand font-bold'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="skills-filter-pill-editorial"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-paper border border-brand/20 shadow-subtle -z-10"
                  />
                )}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Interactive Active Skill Detail Drawer */}
      {activeSkill && (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-paper border border-brand/30 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-brand flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">verified</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h4 className="font-sans text-sm font-bold text-ink">
                  {activeSkill.name}
                </h4>
                <span className="px-2 py-0.5 rounded text-[0.625rem] font-bold bg-subtle text-ink-body border border-sandstone">
                  {activeSkill.badge}
                </span>
              </div>
              <p className="text-xs text-ink-body">
                {activeSkill.desc}
              </p>
            </div>
          </div>
          <span className="text-[0.6875rem] font-mono text-ink-muted shrink-0 text-right">
            Klik skill di bawah untuk melihat detail
          </span>
        </div>
      )}

      {/* Modular 4-Domain Grid (Inspired by Image 2 "MY WORK INCLUDES") */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visibleDomains.map((domain) => (
          <article
            key={domain.id}
            className={`p-6 rounded-2xl bg-paper border border-sandstone shadow-subtle flex flex-col justify-between border-l-4 ${domain.accentBorder}`}
          >
            <div>
              {/* Domain Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${domain.iconBg}`}>
                    <span className="material-symbols-outlined text-lg">
                      {domain.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-ink">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-ink-muted">
                      {domain.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-ink-body leading-relaxed mb-4">
                {domain.summary}
              </p>

              {/* Skills Interactive Tag Cloud */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-sandstone/70">
                {domain.skills.map((skill) => {
                  const isSelected = activeSkill?.name === skill.name
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => setActiveSkill(skill)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-ink text-white shadow-sm'
                          : 'bg-subtle text-ink-body border border-sandstone hover:border-sandstone-dark'
                      }`}
                    >
                      <span>{skill.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-sandstone flex items-center justify-between text-[0.6875rem] font-mono text-ink-muted">
              <span>{domain.skills.length} Keterampilan Teruji</span>
              <span className="text-brand font-semibold">Verified</span>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}
