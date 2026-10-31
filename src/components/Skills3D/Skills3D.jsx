'use client'

import { useState } from 'react'

const SKILL_DOMAINS = [
  {
    id: 'fullstack',
    title: 'Full Stack Development & Vibe Coding',
    subtitle: 'Google AI Certified • Modern Web Architecture',
    icon: 'code_blocks',
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
]

const FILTER_TABS = [
  { id: 'all',        label: 'Semua Domain (25)' },
  { id: 'fullstack',  label: 'Full Stack (8)' },
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
    <section id="skills" className="w-full py-14 sm:py-20 border-t border-line">
      {/* Header & Clean Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            03 • Kompetensi Teknis
          </p>
          <h2 className="heading-balance font-sans text-section-title text-ink">
            Keahlian &amp; Spesialisasi
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Filter kategori keahlian"
          className="flex flex-wrap items-center gap-1.5"
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
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  selected
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper text-ink-body border-line hover:bg-subtle hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Skill Detail Callout */}
      {activeSkill && (
        <div className="exec-card p-4 sm:p-5 mb-6 bg-paper flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-ink">
                Detail Kompetensi: {activeSkill.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[0.6875rem] font-semibold bg-brand-soft text-brand border border-brand-border">
                {activeSkill.badge}
              </span>
            </div>
            <p className="prose-pretty text-xs sm:text-sm text-ink-body">
              {activeSkill.desc}
            </p>
          </div>
          <span className="text-xs text-ink-muted shrink-0">
            Klik item keahlian untuk melihat detail
          </span>
        </div>
      )}

      {/* Structured Domain Cards Grid */}
      <div
        className={`grid grid-cols-1 ${
          visibleDomains.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'
        } gap-5`}
      >
        {visibleDomains.map((domain) => (
          <article key={domain.id} className="exec-card p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-subtle border border-line text-ink flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                    {domain.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-card-title text-ink">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-ink-muted mt-0.5">
                    {domain.subtitle}
                  </p>
                </div>
              </div>

              <p className="prose-pretty text-xs sm:text-sm text-ink-body mb-4">
                {domain.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-line flex flex-wrap gap-2">
              {domain.skills.map((skill) => {
                const isSelected = activeSkill?.name === skill.name
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setActiveSkill(skill)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium border transition-colors text-left ${
                      isSelected
                        ? 'bg-brand-soft text-brand border-brand-border font-semibold'
                        : 'bg-subtle/70 text-ink-body border-line hover:bg-subtle hover:text-ink'
                    }`}
                  >
                    <span>{skill.name}</span>
                  </button>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
