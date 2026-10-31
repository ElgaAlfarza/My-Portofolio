'use client'

const WORK_EXPERIENCES = [
  {
    id: 'exp-1',
    isCurrent: true,
    period: '2026 — Sekarang',
    location: 'Mataram, NTB',
    title: 'System Operator Officer',
    organization: 'CV Rajawali',
    desc: 'Mengoperasikan dan mengelola infrastruktur server simbank untuk memastikan ketersediaan serta kesiapan operasional stok kartu SIM secara massal. Memantau arus sistem dan menyinkronkan data inventori secara real-time dengan tingkat ketersediaan 99.9% dan akurasi pencatatan 100%.',
    tags: ['Server Simbank', 'Sinkronisasi Data Real-Time', '99.9% Uptime', 'Pemeliharaan Perangkat'],
  },
  {
    id: 'exp-2',
    isCurrent: false,
    period: '2025 — 2026',
    location: 'Denpasar, Bali',
    title: 'Staff Operasional & Quality Control',
    organization: 'CV Sinar Mutiara Bali',
    desc: 'Melaksanakan inspeksi Quality Control (QC) menyeluruh pada perangkat keras (hardware) dan perangkat lunak (software) sebelum distribusi. Mengelola alur penerimaan barang dari penyuplai serta sinkronisasi mutasi logistik unit secara terstruktur.',
    tags: ['Quality Control', 'Diagnosa Hardware', 'Pengujian Software', 'Manajemen Logistik'],
  },
  {
    id: 'exp-3',
    isCurrent: false,
    period: '2025',
    location: 'Mataram, NTB',
    title: 'Computer Operator & Data Specialist',
    organization: 'Ikatan Persaudaraan Haji Indonesia (IPHI)',
    desc: 'Mengelola sistem pendataan digital calon jemaah haji, pengolahan data logistik terkomputerisasi, verifikasi bukti transaksi keuangan, serta penyusunan laporan administrasi operasional terpadu.',
    tags: ['Manajemen Data', 'Pengarsipan Digital', 'Verifikasi Transaksi', 'Spreadsheet Lanjutan'],
  },
  {
    id: 'exp-4',
    isCurrent: false,
    period: '2024',
    location: 'SMP Negeri 20 Mataram',
    title: 'Peserta Program Kampus Mengajar Angkatan 7',
    organization: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI',
    desc: 'Mengakselerasi adaptasi teknologi dan digitalisasi administrasi pembelajaran sekolah, mendampingi penguatan literasi dan numerasi siswa, serta mengelola pelaksanaan Asesmen Kompetensi Minimum (AKM) Kelas berbasis digital.',
    tags: ['Transformasi Digital Sekolah', 'Kemendikbudristek RI', 'AKM Kelas Digital', 'Edukasi Teknologi'],
  },
]

const EDUCATION = {
  period: 'Lulus 2024',
  badge: 'IPK 3.76 / 4.00 • Cum Laude',
  degree: 'Sarjana Komputer (S.Kom.) — S1 Ilmu Komputer',
  institution: 'Universitas Bumigora, Mataram',
  desc: 'Fokus studi pada Machine Learning, Rekayasa Perangkat Lunak, dan Sistem Basis Data. Menyelesaikan riset skripsi klasifikasi citra naskah kuno Aksara Sasak menggunakan Convolutional Neural Networks (CNN) yang terpublikasi pada Jurnal Nasional Terakreditasi SINTA 4 serta buku referensi ilmiah.',
  tags: ['IPK 3.76 / 4.00', 'Publikasi Jurnal SINTA 4', 'Buku Referensi Ilmiah', 'Deep Learning CNN'],
}

export default function Experience() {
  return (
    <section id="experience" className="w-full py-14 sm:py-20 border-t border-line">
      {/* Section Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
          02 • Rekam Jejak
        </p>
        <h2 className="heading-balance font-sans text-section-title text-ink">
          Pengalaman Kerja &amp; Pendidikan
        </h2>
      </div>

      {/* Work Experience Container */}
      <div className="exec-card divide-y divide-line mb-6">
        {WORK_EXPERIENCES.map((exp) => (
          <article
            key={exp.id}
            className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start"
          >
            {/* Left Meta: Period & Location */}
            <div className="md:col-span-4 flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-medium text-ink">
                  {exp.period}
                </span>
                {exp.isCurrent && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.6875rem] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                    Aktif
                  </span>
                )}
              </div>
              <span className="text-xs text-ink-muted">{exp.location}</span>
            </div>

            {/* Right Content: Role, Org, Description & Tags */}
            <div className="md:col-span-8">
              <h3 className="font-sans text-base sm:text-lg font-bold text-ink">
                {exp.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-brand mt-0.5 mb-2.5">
                {exp.organization}
              </p>
              <p className="prose-pretty text-xs sm:text-sm text-ink-body mb-3.5">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exec-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Education Card */}
      <article className="exec-card p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
        <div className="md:col-span-4 flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Pendidikan Tinggi
          </span>
          <span className="font-mono text-xs font-medium text-ink">
            {EDUCATION.period}
          </span>
          <span className="inline-flex w-fit items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-brand-soft text-brand border border-brand-border">
            {EDUCATION.badge}
          </span>
        </div>

        <div className="md:col-span-8">
          <h3 className="font-sans text-base sm:text-lg font-bold text-ink">
            {EDUCATION.degree}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-ink-body mt-0.5 mb-2.5">
            {EDUCATION.institution}
          </p>
          <p className="prose-pretty text-xs sm:text-sm text-ink-body mb-3.5">
            {EDUCATION.desc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {EDUCATION.tags.map((tag) => (
              <span key={tag} className="exec-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
