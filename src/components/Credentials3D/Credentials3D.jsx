'use client'

const CERT_DRIVE =
  'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'
const CV_DRIVE =
  'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'

const QUALIFICATIONS_LIST = [
  {
    id: 1,
    title: 'Google AI Professional Certificate',
    issuer: 'Google & Coursera',
    detail: '7 Courses Specialization • Vibe Coded AI Solution • ID: LJSDQ0ASEAVR',
    badge: 'Google AI Certified',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    href: 'https://coursera.org/verify/professional-cert/LJSDQ0ASEAVR',
    actionText: 'Verifikasi Coursera',
    icon: 'smart_toy',
  },
  {
    id: 2,
    title: 'Komdigi & Google AI Nasional (DTA 2026)',
    issuer: 'Kementerian Komunikasi dan Digital RI',
    detail: 'No: 21212840840-303/DTA/BLSDM.Komdigi/2026 • 9 Jam Pelatihan',
    badge: 'Resmi Komdigi RI',
    badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    href: CERT_DRIVE,
    actionText: 'Lihat Sertifikat PDF',
    icon: 'verified',
  },
  {
    id: 3,
    title: 'Kemnaker — K3: Pengenalan HIRA & JSA',
    issuer: 'Kementerian Ketenagakerjaan RI (BPVP Belitung)',
    detail: 'No: 26051847786E21 • Standar Keselamatan Kerja Nasional',
    badge: 'Standar K3 Nasional',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    href: CERT_DRIVE,
    actionText: 'Lihat Sertifikat PDF',
    icon: 'health_and_safety',
  },
  {
    id: 4,
    title: 'Kemnaker — Lembar Sebar (Spreadsheet 20 Jam)',
    issuer: 'Kementerian Ketenagakerjaan RI (BPVP Belitung)',
    detail: 'No: 260717D13785AB • Pemrosesan Data & Audit Inventori',
    badge: '20 Jam Vokasi',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    href: CERT_DRIVE,
    actionText: 'Lihat Sertifikat PDF',
    icon: 'table_view',
  },
  {
    id: 5,
    title: 'Kemnaker — TOEFL ITP Listening Comprehension',
    issuer: 'Kementerian Ketenagakerjaan RI (BPVP Bandung Barat)',
    detail: 'No: 26070147DD8F8F • English Proficiency Training',
    badge: 'English Proficiency',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    href: CERT_DRIVE,
    actionText: 'Lihat Sertifikat PDF',
    icon: 'translate',
  },
  {
    id: 6,
    title: 'Huawei Technologies — Fundamental AI',
    issuer: 'Huawei & DEX Digital',
    detail: 'AI Architecture, Neural Networks & Machine Learning Foundations',
    badge: 'Sertifikasi Nasional',
    badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
    href: CERT_DRIVE,
    actionText: 'Lihat Sertifikat PDF',
    icon: 'memory',
  },
  {
    id: 7,
    title: 'Kemendikbudristek — Kampus Mengajar 7',
    issuer: 'Direktorat Jenderal Pendidikan Tinggi (Dikti)',
    detail: 'Penugasan Resmi MBKM Digitalisasi AKM Kelas di SMPN 20 Mataram',
    badge: 'Kemendikbudristek',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    href: CERT_DRIVE,
    actionText: 'Lihat Piagam PDF',
    icon: 'school',
  },
  {
    id: 8,
    title: 'Dicoding Academy — Software Engineering',
    issuer: 'Google Developers Authorized Training Partner',
    detail: '3 Sertifikat Kompetensi Pengembang Web & Cloud Computing',
    badge: 'Dicoding Certified',
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
    href: CERT_DRIVE,
    actionText: 'Lihat Sertifikat PDF',
    icon: 'terminal',
  },
]

export default function Credentials3D() {
  return (
    <section id="credentials" className="w-full py-12 sm:py-16 border-t border-sandstone scroll-reveal">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-sandstone text-[0.6875rem] font-mono uppercase tracking-widest text-ink-muted mb-2">
            <span className="font-bold text-ink">05</span>
            <span className="text-sandstone-dark">•</span>
            <span>ACADEMIC &amp; INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            QUALIFICATIONS
          </h2>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={CERT_DRIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="exec-btn-primary !text-xs !py-2 !px-4 !rounded-full"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">folder_open</span>
            <span>Arsip 20+ Dokumen PDF</span>
          </a>
          <a
            href={CV_DRIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="exec-btn-secondary !text-xs !py-2 !px-3.5 !rounded-full"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">download</span>
            <span>CV</span>
          </a>
        </div>
      </div>

      {/* Main Bento Grid: Diploma Frame (Left) + Graduate Cutout (Center) + Credential Pills (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
        
        {/* Left Column: Framed Diploma Mockup (Exact Reference from Image 2) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[420px] rounded-2xl p-4 sm:p-5 bg-paper border border-sandstone shadow-elevated">
            
            {/* Diploma Certificate Inner Frame */}
            <div className="diploma-frame p-5 sm:p-6 rounded-lg text-center flex flex-col items-center justify-between min-h-[350px]">
              
              {/* University Header */}
              <div className="w-full pb-2.5 border-b border-sandstone">
                <span className="text-[0.6875rem] font-mono tracking-widest uppercase text-ink-muted block">
                  UNIVERSITAS BUMIGORA
                </span>
                <span className="text-[0.625rem] text-ink-muted tracking-wider uppercase block">
                  Fakultas Ilmu Komputer &amp; Teknologi Informasi
                </span>
              </div>

              {/* Diploma Content */}
              <div className="my-4 w-full">
                <p className="text-[0.6875rem] italic text-ink-muted mb-1 font-serif">
                  Dengan ini menerangkan bahwa:
                </p>
                <h3 className="font-sans text-base sm:text-lg font-bold text-ink">
                  Elga Alfareza, S.Kom.
                </h3>
                <p className="text-xs text-ink-body font-semibold mt-0.5">
                  Sarjana Komputer (S.Kom.) — S1 Ilmu Komputer
                </p>
                
                {/* Cum Laude Golden Badge */}
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold shadow-xs">
                  <span className="material-symbols-outlined text-sm text-amber-600">military_tech</span>
                  <span>Dengan Pujian (Cum Laude) • IPK 3.76</span>
                </div>
              </div>

              {/* Bottom Stamp & Signature Line */}
              <div className="w-full pt-2.5 border-t border-sandstone/80 flex items-center justify-between text-[0.625rem] text-ink-muted">
                <div className="text-left font-mono">
                  <span>No. Ijazah: Sah</span>
                  <br />
                  <span>Mataram, NTB</span>
                </div>
                {/* Red Wax Seal Stamp Graphic */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-600 to-rose-800 text-white flex flex-col items-center justify-center shadow-md border-2 border-red-300">
                  <span className="text-[0.5rem] font-bold tracking-tighter uppercase">RESMI</span>
                  <span className="material-symbols-outlined text-sm">verified</span>
                </div>
                <div className="text-right font-mono">
                  <span>Yudisium 2024</span>
                  <br />
                  <span>Bumigora Alumni</span>
                </div>
              </div>

            </div>

            <div className="mt-2.5 text-center">
              <span className="text-xs text-ink-muted font-medium">
                Ijazah Asli terdaftar di Pangkalan Data Pendidikan Tinggi (PDDikti)
              </span>
            </div>
          </div>
        </div>

        {/* Center Column: Cutout of Elga in Toga (Exact Reference from Image 2 Qualifications Layout) */}
        <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-end h-full">
          <div className="relative w-full max-w-[200px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile-graduate-cutout.png"
              alt="Elga Alfareza, S.Kom. - Wisudawan Cum Laude"
              className="w-full h-auto max-h-[380px] object-contain portrait-cutout filter drop-shadow-md select-none"
            />
          </div>
        </div>

        {/* Right Column: Credential Pills Cloud (Exact Layout from Image 2) */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
              Lisensi &amp; Sertifikat Pelatihan Industri Terverifikasi
            </span>
            <span className="text-xs font-semibold text-brand">
              8 Dokumen Terpilih
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {QUALIFICATIONS_LIST.map((qual) => (
              <a
                key={qual.id}
                href={qual.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-paper border border-sandstone shadow-subtle hover:border-sandstone-dark transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-[0.625rem] font-bold border ${qual.badgeColor}`}>
                      {qual.badge}
                    </span>
                    <span className="material-symbols-outlined text-xs text-ink-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all">
                      arrow_outward
                    </span>
                  </div>

                  <h4 className="font-sans text-xs sm:text-sm font-bold text-ink group-hover:text-brand transition-colors line-clamp-1 mb-1">
                    {qual.title}
                  </h4>
                  <p className="text-[0.6875rem] font-medium text-ink-muted truncate">
                    {qual.issuer}
                  </p>
                  <p className="mt-1.5 text-[0.625rem] text-ink-body font-mono line-clamp-2">
                    {qual.detail}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-sandstone/70 flex items-center justify-between text-[0.625rem]">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Dokumen Sah
                  </span>
                  <span className="text-brand font-semibold group-hover:underline">
                    {qual.actionText}
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>

      {/* Verification Pill Cloud / Badges */}
      <div className="p-4 rounded-xl bg-subtle border border-sandstone flex flex-wrap items-center justify-between gap-3 text-xs text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base text-brand">security</span>
          <span className="font-medium text-ink">
            Semua sertifikat memiliki nomor seri registrasi yang dapat diverifikasi langsung pada portal penerbit masing-masing.
          </span>
        </div>
        <a
          href={CERT_DRIVE}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-brand hover:underline inline-flex items-center gap-1 shrink-0"
        >
          <span>Buka Folder Drive Sertifikat</span>
          <span className="material-symbols-outlined text-xs">arrow_forward</span>
        </a>
      </div>

    </section>
  )
}
