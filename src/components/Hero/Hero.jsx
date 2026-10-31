'use client'

import ProfilePhoto from '../AboutMe/ProfilePhoto'

const CV_DRIVE_URL = 'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'
const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'

const KEY_HIGHLIGHTS = [
  {
    value: '3.76 / 4.00',
    label: 'IPK S1 Ilmu Komputer',
    sub: 'Universitas Bumigora (Cum Laude)',
    icon: 'school',
    topBar: 'bg-blue-600',
    iconBadge: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    value: 'SINTA 4',
    label: 'Publikasi Jurnal & Buku',
    sub: 'Riset Deep Learning CNN Aksara Sasak',
    icon: 'psychology',
    topBar: 'bg-indigo-600',
    iconBadge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    value: '99.9%',
    label: 'Uptime Operasional',
    sub: 'Infrastruktur Server Simbank Produksi',
    icon: 'dns',
    topBar: 'bg-emerald-600',
    iconBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    value: '20+',
    label: 'Sertifikasi Resmi',
    sub: 'Google AI • Komdigi • Kemnaker RI',
    icon: 'workspace_premium',
    topBar: 'bg-amber-500',
    iconBadge: 'bg-amber-50 text-amber-700 border-amber-200',
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
        <div className="lg:col-span-7 flex flex-col items-start hero-enter-1">
          {/* Live Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-paper border border-emerald-200/90 text-xs text-ink-body mb-5 shadow-subtle">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
            </span>
            <span className="font-medium text-ink">
              Tersedia untuk Peluang Kerja
            </span>
            <span className="text-line-strong">•</span>
            <span className="text-ink-muted">Mataram / Remote / Hybrid</span>
          </div>

          <h1 className="heading-balance font-sans text-display-hero text-ink mb-2.5">
            Elga Alfareza, <span className="text-brand">S.Kom.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg font-semibold text-ink-body mb-4">
            Full Stack Developer, AI/ML Researcher &amp; IT Operations Specialist
          </p>

          <p className="prose-pretty text-sm sm:text-base text-ink-body mb-7">
            Lulusan S1 Ilmu Komputer Universitas Bumigora (<strong className="text-ink font-semibold">IPK 3.76</strong>) dengan pengalaman langsung membangun aplikasi web modern (<strong className="text-ink font-semibold">Full Stack &amp; Vibe Coding</strong> bersertifikasi Google AI), merancang model <strong className="text-ink font-semibold">Convolutional Neural Networks (CNN)</strong> yang terpublikasi di jurnal nasional <strong className="text-brand font-semibold">SINTA 4</strong>, serta mengelola operasional Server Simbank dan Quality Control berstandar K3 Kemnaker RI.
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
              <span className="material-symbols-outlined text-[1.125rem] text-brand" aria-hidden="true">
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
              <span className="material-symbols-outlined text-[1rem] text-ink-muted" aria-hidden="true">
                arrow_downward
              </span>
            </a>
          </div>

          {/* Direct Professional Links as Tactile Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            <a
              href="https://linkedin.com/in/elga-alfareza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper border border-line text-ink-body hover:text-brand hover:border-brand-border transition-colors shadow-subtle"
            >
              <span className="material-symbols-outlined text-[0.9375rem] text-brand" aria-hidden="true">
                badge
              </span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ElgaAlfarza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper border border-line text-ink-body hover:text-ink hover:border-line-strong transition-colors shadow-subtle"
            >
              <span className="material-symbols-outlined text-[0.9375rem]" aria-hidden="true">
                code
              </span>
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper border border-line text-ink-body hover:text-brand hover:border-brand-border transition-colors shadow-subtle"
            >
              <span className="material-symbols-outlined text-[0.9375rem] text-brand" aria-hidden="true">
                alternate_email
              </span>
              <span>Email</span>
            </a>
            <a
              href="https://wa.me/6285238208849"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50/70 border border-emerald-200 text-emerald-800 hover:bg-emerald-100/70 transition-colors shadow-subtle"
            >
              <span className="material-symbols-outlined text-[0.9375rem] text-emerald-700" aria-hidden="true">
                chat
              </span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Formal Studio Portrait */}
        <div className="lg:col-span-5 hero-enter-2">
          <ProfilePhoto />
        </div>
      </div>

      {/* Bottom 4-Column Executive Highlights Bar with Color-Coded Badges */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 hero-enter-3">
        {KEY_HIGHLIGHTS.map((item) => (
          <div
            key={item.label}
            className="exec-card exec-card-hover relative overflow-hidden p-4 sm:p-5 flex flex-col justify-between"
          >
            <div className={`absolute top-0 inset-x-0 h-1 ${item.topBar}`} aria-hidden="true" />
            <div className="flex items-center justify-between gap-2 mb-2.5 pt-0.5">
              <p className="font-sans text-xl sm:text-2xl font-bold text-ink tracking-tight">
                {item.value}
              </p>
              <span
                className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${item.iconBadge}`}
              >
                <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                  {item.icon}
                </span>
              </span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-ink">
                {item.label}
              </p>
              <p className="text-xs text-ink-muted mt-0.5">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
