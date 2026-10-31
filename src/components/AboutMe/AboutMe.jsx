'use client'

import { motion } from 'framer-motion'
import ProfilePhoto from './ProfilePhoto'
import FavoriteBooks from './FavoriteBooks'

const DEFAULT_MASK = '/profile-spiderman.png'
const DEFAULT_FACE = '/profile-face.png'

const METRICS = [
  {
    tag: 'ACADEMIC',
    tagColor: 'text-primary',
    value: '3.76',
    valueColor: 'text-primary',
    label: 'IPK S1 Ilmu Komputer',
    sub: 'Universitas Bumigora',
  },
  {
    tag: 'RESEARCH',
    tagColor: 'text-secondary',
    value: 'SINTA 4',
    valueColor: 'text-secondary',
    label: 'Jurnal & Buku Ilmiah',
    sub: 'CNN Aksara Sasak',
  },
  {
    tag: 'CREDENTIALS',
    tagColor: 'text-tertiary',
    value: '20+',
    valueColor: 'text-tertiary',
    label: 'Sertifikasi Resmi',
    sub: 'Google • Komdigi • Kemnaker',
  },
  {
    tag: 'OPERATIONS',
    tagColor: 'text-emerald-400',
    value: '100%',
    valueColor: 'text-emerald-400',
    label: 'Akurasi Inventori',
    sub: 'Server Simbank & QC',
  },
]

export default function AboutMe() {
  return (
    <section className="w-full py-14 sm:py-20" id="about">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-2.5 font-label-mono text-label-mono text-secondary uppercase">
          <span className="section-badge">SECTION 01</span>
          <span>// IDENTITY &amp; PHILOSOPHY</span>
        </div>
        <span className="font-label-mono text-label-sm text-outline hidden sm:inline-block">
          LAT -8.5786° S • ZERO DRIFT
        </span>
      </div>

      {/* 12-Column Editorial Spread: Left Floating Portrait + Right Narrative & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left (5 cols): Interactive Floating Cutout with Spider-Man Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-5 flex justify-center"
        >
          <ProfilePhoto
            maskSrc={DEFAULT_MASK}
            faceSrc={DEFAULT_FACE}
            alt="Elga Alfareza, S.Kom."
          />
        </motion.div>

        {/* Right (7 cols): Headline, Narrative, Architectural Doctrine & Bento Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col"
        >
          <h2 className="heading-balance font-headline-lg text-headline-lg font-bold text-white tracking-tight mb-4">
            Bridging structural engineering rigor with deliberate technological sensitivity.
          </h2>

          <p className="prose-pretty font-body-md text-body-md text-on-surface-variant mb-4">
            Menghubungkan ketelitian rekayasa perangkat lunak modern (<strong className="text-white font-semibold">Full Stack Vibe Coding</strong>), komputasi <strong className="text-white font-semibold">Machine Learning berbasis Python</strong>, dan keandalan operasional tingkat produksi.
          </p>

          <p className="prose-pretty font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-6">
            Saya berada tepat di persimpangan antara pengembangan web modern bersertifikasi <strong className="text-white font-semibold">Google AI</strong>, perancangan arsitektur <strong className="text-white font-semibold">Convolutional Neural Networks (CNN)</strong> naskah kuno Aksara Sasak yang terpublikasi di jurnal nasional <strong className="text-secondary font-semibold">SINTA 4</strong>, serta manajemen infrastruktur Server Simbank dan kendali mutu industri bersertifikat <strong className="text-white font-semibold">K3 Kemnaker RI</strong>.
          </p>

          {/* Architectural Doctrine Callout Card */}
          <div className="card-glass p-4 sm:p-5 mb-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-container via-secondary to-primary" />
            <div className="pl-2">
              <div className="flex items-center gap-2 font-label-mono text-xs text-secondary font-semibold mb-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                <span>ARCHITECTURAL DOCTRINE</span>
              </div>
              <p className="prose-pretty font-body-sm text-xs sm:text-body-sm text-on-surface italic">
                &ldquo;Perangkat lunak dan infrastruktur tidak hanya harus berfungsi optimal dalam kondisi ideal; ia harus mampu fail gracefully, menjaga konsistensi data 100%, dan memberikan kejelasan kontrol saat beban operasional puncak.&rdquo;
              </p>
            </div>
          </div>

          {/* 4 Verified Metrics Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {METRICS.map((m) => (
              <div
                key={m.tag}
                className="card-glass p-3.5 sm:p-4 flex flex-col justify-between group"
              >
                <span className={`font-label-mono text-[10px] font-semibold tracking-wider ${m.tagColor}`}>
                  {m.tag}
                </span>
                <span className={`font-display-xl text-2xl sm:text-3xl font-extrabold my-1.5 ${m.valueColor}`}>
                  {m.value}
                </span>
                <div>
                  <span className="font-body-sm text-xs text-white font-medium block leading-snug">
                    {m.label}
                  </span>
                  <span className="font-label-mono text-[10px] text-outline block mt-0.5">
                    {m.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3 Favorite Books Showcase */}
      <FavoriteBooks />
    </section>
  )
}
