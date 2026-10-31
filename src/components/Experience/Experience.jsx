'use client'

const WORK_EXPERIENCES = [
  {
    id: 'exp-1',
    isCurrent: true,
    period: '2026 — Sekarang',
    location: 'Mataram, NTB',
    title: 'System Operator Officer',
    organization: 'CV Rajawali',
    icon: 'dns',
    iconColor: 'text-emerald-700',
    iconBg: 'bg-emerald-50 border-emerald-200',
    nodeColor: 'bg-emerald-600 ring-emerald-100',
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
    icon: 'verified_user',
    iconColor: 'text-blue-700',
    iconBg: 'bg-blue-50 border-blue-200',
    nodeColor: 'bg-blue-600 ring-blue-100',
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
    icon: 'database',
    iconColor: 'text-indigo-700',
    iconBg: 'bg-indigo-50 border-indigo-200',
    nodeColor: 'bg-indigo-600 ring-indigo-100',
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
    icon: 'school',
    iconColor: 'text-amber-700',
    iconBg: 'bg-amber-50 border-amber-200',
    nodeColor: 'bg-amber-600 ring-amber-100',
    desc: 'Mengakselerasi adaptasi teknologi dan digitalisasi administrasi pembelajaran sekolah, mendampingi penguatan literasi dan numerasi siswa, serta mengelola pelaksanaan Asesmen Kompetensi Minimum (AKM) Kelas berbasis digital.',
    tags: ['Transformasi Digital Sekolah', 'Kemendikbudristek RI', 'AKM Kelas Digital', 'Edukasi Teknologi'],
  },
]

const EDUCATION = {
  period: 'Lulus 2024',
  badge: 'IPK 3.76 / 4.00 • Cum Laude',
  degree: 'Sarjana Komputer (S.Kom.) — S1 Ilmu Komputer',
  institution: 'Universitas Bumigora, Mataram',
  icon: 'workspace_premium',
  desc: 'Fokus studi pada Machine Learning, Rekayasa Perangkat Lunak, dan Sistem Basis Data. Menyelesaikan riset skripsi klasifikasi citra naskah kuno Aksara Sasak menggunakan Convolutional Neural Networks (CNN) yang terpublikasi pada Jurnal Nasional Terakreditasi SINTA 4 serta buku referensi ilmiah.',
  tags: ['IPK 3.76 / 4.00', 'Publikasi Jurnal SINTA 4', 'Buku Referensi Ilmiah', 'Deep Learning CNN'],
}

export default function Experience() {
  return (
    <section id="experience" className="w-full py-14 sm:py-20 border-t border-line scroll-reveal">
      {/* Section Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-subtle border border-line text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
          <span>02</span>
          <span>•</span>
          <span>Rekam Jejak</span>
        </div>
        <h2 className="heading-balance font-sans text-section-title text-ink">
          Pengalaman Kerja &amp; Pendidikan
        </h2>
      </div>

      {/* Work Experience Timeline */}
      <div className="relative pl-6 sm:pl-8 mb-8">
        {/* Timeline Line */}
        <div
          className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 bg-line rounded-full"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-5">
          {WORK_EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="relative"
            >
              {/* Timeline Node */}
              <div
                className="absolute -left-6 sm:-left-8 top-5 w-5 sm:w-6 flex items-center justify-center"
                aria-hidden="true"
              >
                <span
                  className={`w-3 h-3 rounded-full ring-4 ${exp.nodeColor}`}
                />
              </div>

              {/* Card Container */}
              <div className="exec-card exec-card-hover p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
                {/* Left Meta */}
                <div className="md:col-span-4 flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-ink">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.6875rem] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 status-ping" aria-hidden="true" />
                        Aktif
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-ink-muted flex items-center gap-1">
                    <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                      pin_drop
                    </span>
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Right Content */}
                <div className="md:col-span-8">
                  <div className="flex items-start gap-3 mb-1">
                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${exp.iconBg}`}
                    >
                      <span className={`material-symbols-outlined text-[1.125rem] ${exp.iconColor}`} aria-hidden="true">
                        {exp.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-sans text-base sm:text-lg font-bold text-ink">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand mt-0.5">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  <p className="prose-pretty text-xs sm:text-sm text-ink-body mb-3.5 mt-2 leading-relaxed">
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
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Education Card */}
      <article className="exec-card exec-card-hover p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start border-l-4 border-l-amber-500">
        <div className="md:col-span-4 flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Pendidikan Formal
          </span>
          <span className="font-mono text-xs font-semibold text-ink">
            {EDUCATION.period}
          </span>
          <span className="inline-flex w-fit items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
            {EDUCATION.badge}
          </span>
        </div>

        <div className="md:col-span-8">
          <div className="flex items-start gap-3 mb-1">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                {EDUCATION.icon}
              </span>
            </div>
            <div>
              <h3 className="font-sans text-base sm:text-lg font-bold text-ink">
                {EDUCATION.degree}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-ink-body mt-0.5">
                {EDUCATION.institution}
              </p>
            </div>
          </div>

          <p className="prose-pretty text-xs sm:text-sm text-ink-body mb-3.5 mt-2 leading-relaxed">
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
