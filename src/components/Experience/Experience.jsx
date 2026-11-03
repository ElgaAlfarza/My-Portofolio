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
    tags: ['Server Simbank', 'Sinkronisasi Real-Time', '99.9% Uptime SLA', 'Hardware Monitoring'],
  },
  {
    id: 'exp-2',
    isCurrent: false,
    period: '2025 — 2026',
    location: 'Denpasar, Bali',
    title: 'Staff Operasional & Quality Control (QC)',
    organization: 'CV Sinar Mutiara Bali',
    icon: 'verified_user',
    iconColor: 'text-blue-700',
    iconBg: 'bg-blue-50 border-blue-200',
    nodeColor: 'bg-blue-600 ring-blue-100',
    desc: 'Melaksanakan inspeksi Quality Control (QC) menyeluruh pada perangkat keras (hardware) dan perangkat lunak (software) sebelum distribusi. Mengelola alur penerimaan barang dari penyuplai serta sinkronisasi mutasi logistik unit secara terstruktur.',
    tags: ['Quality Control', 'Diagnostik Hardware', 'Pengujian Software', 'K3 Kemnaker'],
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
    tags: ['Manajemen Data', 'Pengarsipan Digital', 'Audit Transaksi', 'Spreadsheet Lanjutan'],
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
    <section id="experience" className="w-full py-12 sm:py-16 border-t border-sandstone scroll-reveal">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-sandstone text-[0.6875rem] font-mono uppercase tracking-widest text-ink-muted mb-2">
          <span className="font-bold text-ink">02</span>
          <span className="text-sandstone-dark">•</span>
          <span>CHRONOLOGY &amp; TRACK RECORD</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
          EXPERIENCE &amp; EDUCATION
        </h2>
      </div>

      {/* Work Experience Timeline */}
      <div className="relative pl-6 sm:pl-8 mb-8">
        {/* Timeline Line */}
        <div
          className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 bg-sandstone rounded-full"
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
              <div className="rounded-2xl border border-sandstone bg-paper p-5 sm:p-6 shadow-subtle hover:border-sandstone-dark transition-all duration-200 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
                {/* Left Meta */}
                <div className="md:col-span-4 flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-ink">
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
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">
                      pin_drop
                    </span>
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Right Content */}
                <div className="md:col-span-8">
                  <div className="flex items-start gap-3 mb-2">
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${exp.iconBg}`}
                    >
                      <span className={`material-symbols-outlined text-lg ${exp.iconColor}`} aria-hidden="true">
                        {exp.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-sans text-base sm:text-lg font-bold text-ink">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-body mb-3.5 leading-relaxed">
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

      {/* Education Formal Degree Card */}
      <div className="rounded-2xl border border-sandstone bg-paper p-5 sm:p-6 shadow-subtle flex flex-col md:flex-row md:items-start justify-between gap-6 border-l-4 border-l-amber-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              {EDUCATION.icon}
            </span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-mono text-xs font-bold text-ink">
                {EDUCATION.period}
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                {EDUCATION.badge}
              </span>
            </div>
            <h3 className="font-sans text-base sm:text-lg font-bold text-ink">
              {EDUCATION.degree}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-ink-muted mb-2">
              {EDUCATION.institution}
            </p>
            <p className="text-xs sm:text-sm text-ink-body leading-relaxed mb-3">
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
        </div>
      </div>

    </section>
  )
}
