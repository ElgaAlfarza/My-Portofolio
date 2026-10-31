'use client'

const CERT_DRIVE =
  'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'
const CV_DRIVE =
  'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'

const CERTIFICATES_DATA = [
  {
    id: 1,
    icon: 'smart_toy',
    title: 'Google AI — Professional Certificate',
    issuer: 'Google & Coursera',
    program: '7 Courses Specialization (Agustus 2026)',
    credentialDetail: 'Vibe Coded Custom AI Solution • 20+ Artifacts • ID: LJSDQ0ASEAVR',
    badge: 'Terverifikasi Coursera',
    actionLabel: 'Verifikasi Sertifikat',
    href: 'https://coursera.org/verify/professional-cert/LJSDQ0ASEAVR',
  },
  {
    id: 2,
    icon: 'verified',
    title: 'Komdigi & Google — AI Nasional (DTA 2026)',
    issuer: 'Kementerian Komunikasi dan Digital RI',
    program: 'Digital Talent Academy (DTA) 2026',
    credentialDetail: 'No: 21212840840-303/DTA/BLSDM.Komdigi/2026 • 9 Jam Pelatihan',
    badge: 'Resmi Komdigi RI',
    actionLabel: 'Lihat Dokumen PDF',
    href: CERT_DRIVE,
  },
  {
    id: 3,
    icon: 'health_and_safety',
    title: 'Kemnaker — K3: Pengenalan HIRA & JSA',
    issuer: 'Kementerian Ketenagakerjaan RI',
    program: 'Balai Pelatihan Vokasi BPVP Belitung',
    credentialDetail: 'No: 26051847786E21 • 10 Jam Pelatihan • 18 Mei 2026',
    badge: 'Standar K3 Nasional',
    actionLabel: 'Lihat Dokumen PDF',
    href: CERT_DRIVE,
  },
  {
    id: 4,
    icon: 'table_view',
    title: 'Kemnaker — Lembar Sebar (Spreadsheet)',
    issuer: 'Kementerian Ketenagakerjaan RI',
    program: 'Balai Pelatihan Vokasi BPVP Belitung',
    credentialDetail: 'No: 260717D13785AB • 20 Jam Pelatihan • 15–16 Juli 2026',
    badge: '20 Jam Vokasi',
    actionLabel: 'Lihat Dokumen PDF',
    href: CERT_DRIVE,
  },
  {
    id: 5,
    icon: 'translate',
    title: 'Kemnaker — TOEFL 102: ITP Listening',
    issuer: 'Kementerian Ketenagakerjaan RI',
    program: 'Balai Pelatihan Vokasi BPVP Bandung Barat',
    credentialDetail: 'No: 26070147DD8F8F • 10 Jam Pelatihan • 30 Juni 2026',
    badge: 'English Proficiency',
    actionLabel: 'Lihat Dokumen PDF',
    href: CERT_DRIVE,
  },
  {
    id: 6,
    icon: 'memory',
    title: 'Huawei — Fundamental AI',
    issuer: 'Huawei Technologies & DEX',
    program: 'Program Sertifikasi Tingkat Nasional',
    credentialDetail: 'Artificial Intelligence Architecture & Machine Learning',
    badge: 'Sertifikasi Nasional',
    actionLabel: 'Lihat Dokumen PDF',
    href: CERT_DRIVE,
  },
  {
    id: 7,
    icon: 'school',
    title: 'Kampus Mengajar Angkatan 7',
    issuer: 'Kemendikbudristek Republik Indonesia',
    program: 'Direktorat Jenderal Pendidikan Tinggi (Dikti)',
    credentialDetail: 'Sertifikat Penghargaan Program MBKM • Penempatan SMPN 20 Mataram',
    badge: 'Kemendikbudristek',
    actionLabel: 'Lihat Dokumen PDF',
    href: CERT_DRIVE,
  },
  {
    id: 8,
    icon: 'terminal',
    title: 'Dicoding Academy — Software Engineering',
    issuer: 'Dicoding Indonesia',
    program: 'Google Developers Authorized Training Partner',
    credentialDetail: '3 Sertifikasi Kompetensi Pengembang (ID: 9C5A0F27, dll.)',
    badge: '3 Sertifikat Kompetensi',
    actionLabel: 'Lihat Dokumen PDF',
    href: CERT_DRIVE,
  },
]

export default function Credentials3D() {
  return (
    <section id="credentials" className="w-full py-14 sm:py-20 border-t border-line">
      {/* Header & Full Archive Action */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            05 • Kredensial Terverifikasi
          </p>
          <h2 className="heading-balance font-sans text-section-title text-ink">
            Sertifikasi Resmi &amp; Lisensi Kompetensi
          </h2>
          <p className="prose-pretty text-xs sm:text-sm text-ink-muted mt-1.5">
            Delapan sertifikasi utama dari total lebih dari 20 dokumen pelatihan resmi dan publikasi akademik.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <a
            href={CERT_DRIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="exec-btn-secondary !py-2 !px-3.5 !text-xs"
          >
            <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
              folder_open
            </span>
            <span>Arsip Lengkap (20+ Sertifikat)</span>
          </a>
          <a
            href={CV_DRIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="exec-btn-secondary !py-2 !px-3.5 !text-xs"
          >
            <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
              download
            </span>
            <span>Unduh CV</span>
          </a>
        </div>
      </div>

      {/* 2-Column Clean Credential Directory */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CERTIFICATES_DATA.map((cert) => (
          <article
            key={cert.id}
            className="exec-card exec-card-hover p-5 flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-subtle border border-line text-ink flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                      {cert.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ink truncate">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-ink-muted truncate">
                      {cert.program}
                    </p>
                  </div>
                </div>

                <span className="exec-tag !text-[0.6875rem] shrink-0">
                  {cert.badge}
                </span>
              </div>

              <h3 className="font-sans text-card-title text-ink mb-1.5">
                {cert.title}
              </h3>

              <p className="font-mono text-xs text-ink-body break-words">
                {cert.credentialDetail}
              </p>
            </div>

            <div className="pt-3 border-t border-line flex items-center justify-between gap-2 text-xs">
              <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                <span className="material-symbols-outlined text-[0.9375rem]" aria-hidden="true">
                  verified
                </span>
                <span>Dokumen Terverifikasi</span>
              </span>

              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-hover transition-colors"
              >
                <span>{cert.actionLabel}</span>
                <span className="material-symbols-outlined text-[0.9375rem]" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
