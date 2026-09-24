'use client'

const EXPERIENCES = [
  {
    id: 'exp-1',
    period: '2026 — SEKARANG • CURRENT ROLE',
    periodColor: 'text-secondary font-semibold',
    title: 'System Operator Officer',
    organization: 'CV RAJAWALI • Mataram, NTB',
    desc: 'Mengoperasikan dan mengelola infrastruktur server simbank untuk memastikan ketersediaan dan kesiapan operasional stok kartu SIM secara massal. Memantau dan menyinkronkan data inventori secara real-time guna menjamin akurasi 100%.',
    tags: ['Server Simbank', 'Data Sync', 'Zero Latency', 'Hardware QC'],
  },
  {
    id: 'exp-2',
    period: '2025 — 2026 • 1 YEAR',
    periodColor: 'text-outline font-semibold',
    title: 'Staff Operasional & Quality Control',
    organization: 'CV SINAR MUTIARA BALI • Denpasar, Bali',
    desc: 'Melaksanakan inspeksi Quality Control (QC) menyeluruh pada software dan hardware. Mengelola arus penerimaan dan pengeluaran barang dari penyuplai serta sinkronisasi mutasi logistik unit.',
    tags: ['Quality Control', 'Hardware Diagnostics', 'Software Testing', 'Logistics Sync'],
  },
  {
    id: 'exp-3',
    period: '2025 • COMPUTER OPERATOR',
    periodColor: 'text-outline font-semibold',
    title: 'Computer Operator & Data Specialist',
    organization: 'IKATAN PERSAUDARAAN HAJI INDONESIA • Mataram',
    desc: 'Mengelola sistem pendataan digital calon jemaah haji serta pengolahan data logistik secara komputerisasi, verifikasi bukti transaksi keuangan, dan laporan administrasi operasional terpadu.',
    tags: ['Database Management', 'Digital Archiving', 'Transaction Audit', 'Excel Advanced'],
  },
  {
    id: 'exp-4',
    period: '2024 • PROGRAM KEMENDIKBUD',
    periodColor: 'text-outline font-semibold',
    title: 'Kampus Mengajar Angkatan 7',
    organization: 'Kementerian Pendidikan • SMP Negeri 20 Mataram',
    desc: 'Mengakselerasi adaptasi teknologi dan digitalisasi administrasi pembelajaran sekolah, penguatan literasi dan numerasi siswa, serta mengelola Asesmen Kompetensi Minimum (AKM) Kelas berbasis digital.',
    tags: ['Digital Transformation', 'Kemendikbud', 'AKM Kelas', 'Sistem Edukasi'],
  },
  {
    id: 'exp-5',
    period: 'CLASS OF 2024 • MAGNA CUM LAUDE',
    periodColor: 'text-tertiary font-semibold',
    title: 'B.S. in Computer Science (S1 Ilmu Komputer)',
    organization: 'Universitas Bumigora • IPK 3.76 / 4.00',
    desc: 'Kurikulum mendalam pada Machine Learning, Rekayasa Perangkat Lunak, dan Manajemen Basis Data. Berhasil mempublikasikan riset klasifikasi citra naskah kuno Aksara Sasak dengan CNN ke Jurnal Nasional SINTA 4.',
    tags: ['IPK 3.76', 'SINTA 4 Research', 'Machine Learning CNN', 'Algorithms & Complexity'],
  },
]

export default function Experience() {
  return (
    <section className="w-full pt-space-xl pb-space-xl mb-margin" id="experience">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-space-lg">
        <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase">
          <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
            SECTION 04
          </span>
          <span>// CAREER TRAJECTORY &amp; PEDIGREE</span>
        </div>
        <span className="font-label-mono text-label-sm text-outline hidden sm:inline-block">
          CHRONOLOGICAL PROVENANCE
        </span>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-space-md">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="p-space-lg rounded-2xl bg-surface-container-low shadow-lg flex flex-col md:flex-row md:items-start justify-between gap-space-md border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
          >
            <div className="md:w-1/3">
              <span className={`font-label-mono text-label-sm ${exp.periodColor}`}>
                {exp.period}
              </span>
              <h3 className="font-headline-md text-xl sm:text-headline-md font-bold text-on-surface mt-1">
                {exp.title}
              </h3>
              <p className="font-body-md text-body-sm text-primary font-medium mt-0.5">
                {exp.organization}
              </p>
            </div>

            <div className="md:w-2/3">
              <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-space-sm leading-relaxed">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-2 font-label-mono text-label-sm">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-surface-container text-secondary border border-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
