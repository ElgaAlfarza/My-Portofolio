'use client'

import ProfilePhoto from '../AboutMe/ProfilePhoto'

const CV_DRIVE_URL = 'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'
const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'

const KEY_HIGHLIGHTS = [
  {
    value: '3.76 / 4.00',
    label: 'IPK S1 Ilmu Komputer',
    sub: 'Universitas Bumigora (Cum Laude)',
  },
  {
    value: 'SINTA 4',
    label: 'Publikasi Jurnal & Buku',
    sub: 'Riset Deep Learning CNN Aksara Sasak',
  },
  {
    value: '99.9%',
    label: 'Uptime Operasional',
    sub: 'Infrastruktur Server Simbank Produksi',
  },
  {
    value: '20+',
    label: 'Sertifikasi Resmi',
    sub: 'Google AI • Komdigi • Kemnaker RI',
  },
]

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="w-full pb-14 sm:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Executive Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Clean Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-line text-xs text-ink-body mb-5 shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true" />
            <span className="font-medium">
              Tersedia untuk Peluang Kerja • Mataram / Remote / Hybrid
            </span>
          </div>

          <h1 className="heading-balance font-sans text-display-hero text-ink mb-3">
            Elga Alfareza, S.Kom.
          </h1>

          <p className="font-sans text-base sm:text-lg font-medium text-brand mb-4">
            Full Stack Developer, AI/ML Researcher &amp; IT Operations Specialist
          </p>

          <p className="prose-pretty text-sm sm:text-base text-ink-body mb-7">
            Lulusan S1 Ilmu Komputer Universitas Bumigora (<strong className="text-ink font-semibold">IPK 3.76</strong>) dengan pengalaman langsung membangun aplikasi web modern (<strong className="text-ink font-semibold">Full Stack &amp; Vibe Coding</strong> bersertifikasi Google AI), merancang model <strong className="text-ink font-semibold">Convolutional Neural Networks (CNN)</strong> yang terpublikasi di jurnal nasional <strong className="text-ink font-semibold">SINTA 4</strong>, serta mengelola operasional Server Simbank dan Quality Control berstandar K3 Kemnaker RI.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#contact')
              }}
              className="exec-btn-primary"
            >
              <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                mail
              </span>
              <span>Hubungi Saya</span>
            </a>

            <a
              href={CV_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="exec-btn-secondary"
            >
              <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                download
              </span>
              <span>Unduh CV Lengkap</span>
            </a>

            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#works')
              }}
              className="exec-btn-secondary"
            >
              <span>Lihat Proyek</span>
            </a>
          </div>

          {/* Direct Professional Links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-ink-muted">
            <a
              href="https://linkedin.com/in/elga-alfareza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                badge
              </span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ElgaAlfarza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                code
              </span>
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                alternate_email
              </span>
              <span>{EMAIL_ADDRESS}</span>
            </a>
            <a
              href="https://wa.me/6285238208849"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                chat
              </span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Formal Studio Portrait */}
        <div className="lg:col-span-5">
          <ProfilePhoto />
        </div>
      </div>

      {/* Bottom 4-Column Executive Highlights Bar */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {KEY_HIGHLIGHTS.map((item) => (
          <div key={item.label} className="exec-card p-4 sm:p-5">
            <p className="font-sans text-xl sm:text-2xl font-bold text-ink tracking-tight">
              {item.value}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-ink-body mt-1">
              {item.label}
            </p>
            <p className="text-xs text-ink-muted mt-0.5">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
