'use client'

import FavoriteBooks from './FavoriteBooks'

const PROFILE_FACTS = [
  { label: 'Domisili', value: 'Mataram, NTB (UTC+8)' },
  { label: 'Pendidikan', value: 'S1 Ilmu Komputer — Univ. Bumigora (IPK 3.76)' },
  { label: 'Publikasi', value: 'Jurnal Terakreditasi SINTA 4 & Buku Ilmiah' },
  { label: 'Bahasa', value: 'Indonesia • Inggris (TOEFL ITP Kemnaker)' },
]

const WORKING_PRINCIPLES = [
  {
    title: 'Keandalan di Lingkungan Produksi',
    desc: 'Perangkat lunak dan infrastruktur dirancang bukan hanya untuk skenario ideal, tetapi untuk tetap stabil, terukur, dan menjaga akurasi data 100% pada jam operasional puncak.',
  },
  {
    title: 'Rekayasa Berbasis Riset & Data',
    desc: 'Menggabungkan pendekatan ilmiah dari riset Deep Learning (CNN) dengan kebutuhan praktis di lapangan agar setiap solusi memiliki dasar validasi yang jelas.',
  },
  {
    title: 'Eksekusi Cepat dengan Standar Mutu (QC & K3)',
    desc: 'Memanfaatkan workflow Full Stack modern (Vibe Coding & AI-assisted engineering) tanpa mengorbankan pengujian kualitas hardware/software maupun prosedur keselamatan kerja.',
  },
]

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-14 sm:py-20 border-t border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Section Heading & Quick Profile Fact Sheet */}
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            01 • Profil Profesional
          </p>
          <h2 className="heading-balance font-sans text-section-title text-ink mb-4">
            Tentang Saya &amp; Pendekatan Kerja
          </h2>
          <p className="prose-pretty text-sm text-ink-muted mb-6">
            Menjembatani pengembangan aplikasi web modern, kecerdasan buatan terapan, dan ketangguhan operasional TI.
          </p>

          <dl className="exec-card p-4 divide-y divide-line text-xs">
            {PROFILE_FACTS.map((fact) => (
              <div key={fact.label} className="py-2.5 first:pt-0 last:pb-0">
                <dt className="text-ink-muted font-medium">{fact.label}</dt>
                <dd className="text-ink font-semibold mt-0.5">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right Column: Narrative & Working Principles */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="space-y-4 text-sm sm:text-base text-ink-body">
            <p className="prose-pretty">
              Saya adalah lulusan <strong className="text-ink font-semibold">S1 Ilmu Komputer Universitas Bumigora (IPK 3.76 / 4.00)</strong> yang fokus membangun solusi teknologi yang rapi, fungsional, dan siap beroperasi di lapangan. Pengalaman saya mencakup siklus pengembangan aplikasi web end-to-end (<strong className="text-ink font-semibold">Full Stack Development &amp; Vibe Coding</strong> bersertifikasi Google AI) hingga pengelolaan infrastruktur sistem berskala massal.
            </p>
            <p className="prose-pretty">
              Di ranah akademik dan riset AI, saya merancang arsitektur <strong className="text-ink font-semibold">Convolutional Neural Networks (CNN)</strong> berbasis Python untuk klasifikasi citra naskah kuno Aksara Sasak yang telah diterbitkan pada <strong className="text-ink font-semibold">Jurnal Nasional Terakreditasi SINTA 4</strong> serta buku referensi ilmiah. Di ranah industri, saya aktif mengelola operasional <strong className="text-ink font-semibold">Server Simbank</strong> dengan tingkat ketersediaan 99.9% serta menjalankan inspeksi Quality Control hardware &amp; software berstandar <strong className="text-ink font-semibold">K3 Kemnaker RI</strong>.
            </p>
          </div>

          {/* 3 Concise Working Principles */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {WORKING_PRINCIPLES.map((item, idx) => (
              <div key={item.title} className="exec-card p-4 sm:p-5 flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-md bg-subtle border border-line text-ink font-mono text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="prose-pretty text-xs sm:text-sm text-ink-body mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curated Reading & Mindset Shelf */}
      <FavoriteBooks />
    </section>
  )
}
