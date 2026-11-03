'use client'

import FavoriteBooks from './FavoriteBooks'

const PARTNER_BADGES = [
  { name: 'Universitas Bumigora', role: 'S1 Ilmu Komputer (Cum Laude)' },
  { name: 'Kemendikbudristek RI', role: 'Kampus Mengajar 7' },
  { name: 'CV Rajawali', role: 'Server Simbank Operator' },
  { name: 'CV Sinar Mutiara Bali', role: 'QC & K3 Supervisor' },
  { name: 'Google AI & Komdigi RI', role: 'Certified Specialist' },
]

const STAT_COUNTERS = [
  { value: '3.76', label: 'IPK S1 (Cum Laude)', sub: 'Univ. Bumigora' },
  { value: 'SINTA 4', label: 'Publikasi Jurnal', sub: 'Riset CNN Aksara' },
  { value: '99.9%', label: 'Uptime Produksi', sub: 'Server Simbank' },
  { value: '20+', label: 'Sertifikasi Resmi', sub: 'Google, Kemnaker' },
]

const WORKING_PRINCIPLES = [
  {
    number: '01',
    title: 'Keandalan di Lingkungan Produksi',
    tag: 'SYSTEM RESILIENCE',
    accentBorder: 'border-l-blue-600',
    icon: 'dns',
    desc: 'Perangkat lunak dan infrastruktur dirancang untuk tetap stabil, terukur, dan menjaga integritas data 100% pada jam operasional puncak.',
  },
  {
    number: '02',
    title: 'Rekayasa Berbasis Riset & Data',
    tag: 'APPLIED AI & ML',
    accentBorder: 'border-l-indigo-600',
    icon: 'psychology',
    desc: 'Menggabungkan pendekatan ilmiah dari riset Deep Learning (CNN) dengan kebutuhan praktis industri agar setiap keputusan berlandaskan bukti empiris.',
  },
  {
    number: '03',
    title: 'Eksekusi Cepat dengan Standar Mutu',
    tag: 'RAPID VIBE CODING & K3',
    accentBorder: 'border-l-emerald-600',
    icon: 'verified_user',
    desc: 'Menerapkan metodologi Full Stack modern (Vibe Coding bersertifikasi Google AI) dengan ketelitian prosedur Quality Control dan keselamatan kerja K3.',
  },
]

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 border-t border-sandstone scroll-reveal">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-sandstone text-[0.6875rem] font-mono uppercase tracking-widest text-ink-muted mb-2">
          <span className="font-bold text-ink">01</span>
          <span className="text-sandstone-dark">•</span>
          <span>EDITORIAL PROFILE</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
          WHO AM I
        </h2>
      </div>

      {/* Primary "WHO AM I" Bento Box (Inspired by Image 2 Bento) */}
      <div className="rounded-2xl sm:rounded-3xl border border-sandstone bg-paper p-5 sm:p-8 lg:p-10 shadow-subtle mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Narrative & Verified Metrics (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <p className="font-sans text-base sm:text-lg font-medium text-ink-body leading-relaxed mb-6">
                Saya <strong className="text-ink font-bold">Elga Alfareza, S.Kom.</strong>, lulusan S1 Ilmu Komputer Universitas Bumigora (<strong className="text-ink font-semibold">IPK 3.76 — Cum Laude</strong>) yang berbasis di Mataram, Lombok. Berpengalaman langsung dalam rekayasa aplikasi web modern (<strong className="text-brand font-semibold">Full Stack &amp; Vibe Coding</strong>), riset kecerdasan buatan Deep Learning CNN yang terbit pada jurnal nasional terakreditasi <strong className="text-ink font-semibold">SINTA 4</strong>, serta operasional infrastruktur Server Simbank berstandar mutu dan keselamatan kerja <strong className="text-ink font-semibold">K3 Kemnaker RI</strong>.
              </p>

              {/* Big Stat Counters Row (Image 2 Aesthetic: 50+ 20m+ 3yrs+) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-sandstone mb-6">
                {STAT_COUNTERS.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-display text-3xl sm:text-4xl text-ink font-bold tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-ink-body mt-0.5">
                      {stat.label}
                    </span>
                    <span className="text-[0.6875rem] text-ink-muted">
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Institutional Affiliations */}
            <div>
              <span className="text-[0.6875rem] font-mono uppercase tracking-wider text-ink-muted block mb-2.5">
                Afiliasi, Rekam Jejak &amp; Kemitraan Terverifikasi
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {PARTNER_BADGES.map((badge) => (
                  <div
                    key={badge.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-subtle border border-sandstone text-xs text-ink-body font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
                    <span className="font-semibold text-ink">{badge.name}</span>
                    <span className="text-[0.6875rem] text-ink-muted hidden sm:inline">({badge.role})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Cutout Portrait Card with Diagonal Handwriting Signature (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] rounded-2xl bg-canvas border border-sandstone p-4 shadow-subtle group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200 border border-sandstone/80 flex items-end justify-center">
                
                {/* Subtle top pill */}
                <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-paper/90 backdrop-blur-sm border border-sandstone text-[0.6875rem] font-bold text-ink">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>Mataram, Lombok (WITA)</span>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/elga-graduation-studio.jpg"
                  alt="Elga Alfareza, S.Kom. - Wisuda Universitas Bumigora"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 select-none"
                />

                {/* Handwritten Script "get to know me" Overlaid Diagonally (Exact Match from Image 2) */}
                <div className="absolute bottom-3 right-3 z-20 pointer-events-none select-none">
                  <span className="font-handwriting text-3xl sm:text-4xl text-brand font-bold transform -rotate-12 block drop-shadow-md">
                    get to know me
                  </span>
                </div>

              </div>

              {/* Caption */}
              <div className="mt-3 flex items-center justify-between text-xs text-ink-muted">
                <span className="font-semibold text-ink">Elga Alfareza, S.Kom.</span>
                <span className="font-mono text-[0.6875rem]">Bumigora Alumni &apos;24</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3 Working Principles Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {WORKING_PRINCIPLES.map((principle) => (
          <div
            key={principle.number}
            className={`p-5 rounded-xl bg-paper border border-sandstone shadow-subtle flex flex-col justify-between border-l-4 ${principle.accentBorder} transition-transform hover:-translate-y-1 duration-200`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-ink-muted">
                  PRINSIP {principle.number}
                </span>
                <div className="w-7 h-7 rounded-lg bg-subtle border border-sandstone flex items-center justify-center text-ink">
                  <span className="material-symbols-outlined text-base">
                    {principle.icon}
                  </span>
                </div>
              </div>
              <h3 className="font-sans text-sm font-bold text-ink mb-1.5">
                {principle.title}
              </h3>
              <p className="text-xs text-ink-body leading-relaxed">
                {principle.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sandstone/80 text-[0.6875rem] font-mono uppercase tracking-wider text-brand font-semibold">
              {principle.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Curated Reading & Mindset Shelf */}
      <FavoriteBooks />
    </section>
  )
}
