'use client'

import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    id: 'exp-1',
    index: 'TRAJECTORY // 01',
    isCurrent: true,
    period: '2026 — SEKARANG • CURRENT ROLE',
    periodColor: 'text-emerald-400 font-semibold',
    nodeColor: 'bg-emerald-400 ring-emerald-400/25',
    title: 'System Operator Officer',
    organization: 'CV RAJAWALI • Mataram, NTB',
    icon: 'dns',
    desc: 'Mengoperasikan dan mengelola infrastruktur server simbank untuk memastikan ketersediaan dan kesiapan operasional stok kartu SIM secara massal. Memantau dan menyinkronkan data inventori secara real-time guna menjamin akurasi 100%.',
    tags: ['Server Simbank', 'Data Sync', 'Zero Latency', 'Hardware QC'],
  },
  {
    id: 'exp-2',
    index: 'TRAJECTORY // 02',
    isCurrent: false,
    period: '2025 — 2026 • 1 YEAR',
    periodColor: 'text-secondary font-semibold',
    nodeColor: 'bg-primary ring-primary/25',
    title: 'Staff Operasional & Quality Control',
    organization: 'CV SINAR MUTIARA BALI • Denpasar, Bali',
    icon: 'verified_user',
    desc: 'Melaksanakan inspeksi Quality Control (QC) menyeluruh pada software dan hardware. Mengelola arus penerimaan dan pengeluaran barang dari penyuplai serta sinkronisasi mutasi logistik unit.',
    tags: ['Quality Control', 'Hardware Diagnostics', 'Software Testing', 'Logistics Sync'],
  },
  {
    id: 'exp-3',
    index: 'TRAJECTORY // 03',
    isCurrent: false,
    period: '2025 • COMPUTER OPERATOR',
    periodColor: 'text-outline font-semibold',
    nodeColor: 'bg-primary ring-primary/25',
    title: 'Computer Operator & Data Specialist',
    organization: 'IKATAN PERSAUDARAAN HAJI INDONESIA • Mataram',
    icon: 'database',
    desc: 'Mengelola sistem pendataan digital calon jemaah haji serta pengolahan data logistik secara komputerisasi, verifikasi bukti transaksi keuangan, dan laporan administrasi operasional terpadu.',
    tags: ['Database Management', 'Digital Archiving', 'Transaction Audit', 'Excel Advanced'],
  },
  {
    id: 'exp-4',
    index: 'TRAJECTORY // 04',
    isCurrent: false,
    period: '2024 • PROGRAM KEMENDIKBUDRISTEK',
    periodColor: 'text-outline font-semibold',
    nodeColor: 'bg-secondary ring-secondary/25',
    title: 'Kampus Mengajar Angkatan 7',
    organization: 'Kementerian Pendidikan • SMP Negeri 20 Mataram',
    icon: 'school',
    desc: 'Mengakselerasi adaptasi teknologi dan digitalisasi administrasi pembelajaran sekolah, penguatan literasi dan numerasi siswa, serta mengelola Asesmen Kompetensi Minimum (AKM) Kelas berbasis digital.',
    tags: ['Digital Transformation', 'Kemendikbud', 'AKM Kelas', 'Sistem Edukasi'],
  },
  {
    id: 'exp-5',
    index: 'PEDIGREE // 05',
    isCurrent: false,
    period: 'CLASS OF 2024 • CUM LAUDE DISTINCTION',
    periodColor: 'text-tertiary font-semibold',
    nodeColor: 'bg-tertiary ring-tertiary/25',
    title: 'B.S. in Computer Science (S1 Ilmu Komputer)',
    organization: 'Universitas Bumigora • IPK 3.76 / 4.00',
    icon: 'workspace_premium',
    desc: 'Kurikulum mendalam pada Machine Learning, Rekayasa Perangkat Lunak, dan Manajemen Basis Data. Berhasil mempublikasikan riset klasifikasi citra naskah kuno Aksara Sasak dengan CNN ke Jurnal Nasional SINTA 4.',
    tags: ['IPK 3.76', 'SINTA 4 Research', 'Machine Learning CNN', 'Algorithms & Complexity'],
  },
]

export default function Experience() {
  return (
    <section className="w-full py-14 sm:py-20" id="experience">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2.5 font-label-mono text-label-mono text-secondary uppercase mb-2.5">
            <span className="section-badge">SECTION 05</span>
            <span>// CAREER TRAJECTORY &amp; PEDIGREE</span>
          </div>
          <h2 className="heading-balance font-headline-lg text-headline-lg font-bold text-white tracking-tight">
            Rekam Jejak Karier &amp; Akademik
          </h2>
        </div>
        <span className="font-label-mono text-label-sm text-outline hidden sm:inline-block">
          CHRONOLOGICAL PROVENANCE
        </span>
      </div>

      {/* Architectural Timeline with Glowing Spine */}
      <div className="relative pl-6 sm:pl-10">
        {/* Vertical Laser Timeline Spine */}
        <div
          className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-400 via-primary to-tertiary/60 opacity-65 rounded-full"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-5 sm:gap-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.42, delay: idx * 0.06 }}
              className="relative"
            >
              {/* Timeline Glowing Node */}
              <div
                className="absolute -left-6 sm:-left-10 top-6 w-5 sm:w-8 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                  {exp.isCurrent && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3 ring-4 ${exp.nodeColor}`}
                  />
                </span>
              </div>

              {/* Experience Card */}
              <div
                className={`card-glass p-5 sm:p-6 flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6 ${
                  exp.isCurrent ? '!border-emerald-400/35' : ''
                }`}
              >
                <div className="md:w-[36%] shrink-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`font-label-mono text-xs ${exp.periodColor}`}>
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-lg sm:text-headline-md font-bold text-white">
                    {exp.title}
                  </h3>
                  <p className="font-body-md text-xs sm:text-body-sm text-secondary font-medium mt-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-primary">
                      {exp.icon}
                    </span>
                    <span>{exp.organization}</span>
                  </p>
                </div>

                <div className="md:w-[64%]">
                  <p className="prose-pretty font-body-md text-xs sm:text-body-md text-on-surface-variant mb-4">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-tech">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
