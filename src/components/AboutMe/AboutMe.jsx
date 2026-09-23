'use client'

/**
 * AboutMe Section for Elga Alfareza, S.Kom.
 */

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProfilePhoto from './ProfilePhoto'
import PhotoGallery from './PhotoGallery'
import TimelineList from './TimelineList'
import MetricsStrip from './MetricsStrip'

// ── Section fade-in preset ─────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] } },
}

// ── Riwayat Pendidikan ─────────────────────────────────────────────────────
const EDUCATION = [
  {
    id: 'edu-1',
    year: 'Lulus · IPK 3.76 / 4.00',
    title: 'S1 Ilmu Komputer',
    subtitle: 'Universitas Bumigora',
    description: 'Memadukan keahlian teknologi informasi, analisis data, dan machine learning. Berhasil mempublikasikan riset klasifikasi citra Aksara Sasak ke Jurnal Nasional Terindeks SINTA 4.',
  },
]

// ── Riwayat Pengalaman Kerja & Organisasi ──────────────────────────────────
const WORK = [
  {
    id: 'work-1',
    year: 'Apr 2026 – Sekarang',
    title: 'System Operator Officer',
    subtitle: 'CV RAJAWALI',
    description: 'Mengoperasikan dan mengelola infrastruktur server simbank untuk memastikan ketersediaan dan kesiapan operasional stok kartu SIM. Memantau dan menyinkronkan data inventori secara real-time guna menjamin akurasi 100%.',
  },
  {
    id: 'work-2',
    year: 'Nov 2025 – Mar 2026',
    title: 'Staff Operasional',
    subtitle: 'CV SINAR MUTIARA BALI',
    description: 'Melaksanakan inspeksi Quality Control (QC) menyeluruh pada software dan hardware. Mengelola arus penerimaan dan pengeluaran barang dari penyuplai serta sinkronisasi mutasi logistik unit.',
  },
  {
    id: 'work-3',
    year: 'Feb 2025 – Des 2025',
    title: 'Computer Operator',
    subtitle: 'IKATAN PERSAUDARAAN HAJI INDONESIA',
    description: 'Mengelola sistem pendataan digital calon jemaah haji serta pengolahan data logistik secara komputerisasi, verifikasi bukti transaksi keuangan, dan laporan administrasi operasional.',
  },
  {
    id: 'work-4',
    year: 'Feb 2024 – Jun 2024',
    title: 'Kampus Mengajar Angkatan 7',
    subtitle: 'Kementerian Pendidikan (SMP Negeri 20 Mataram)',
    description: 'Mengakselerasi adaptasi teknologi dan digitalisasi administrasi pembelajaran sekolah, penguatan literasi dan numerasi siswa, serta mengelola Asesmen Kompetensi Minimum (AKM) Kelas.',
  },
]

// ── Metrik Pencapaian Real CV ──────────────────────────────────────────────
const METRICS_ELGA = [
  { id: 1, value: '3.76',    label: 'IPK S1 Komputer',    sublabel: 'Skala 4.00' },
  { id: 2, value: 'SINTA 4', label: 'Publikasi Riset',   sublabel: 'Jurnal Nasional' },
  { id: 3, value: '8+',      label: 'Sertifikasi Profesi', sublabel: 'Google AI & Komdigi' },
  { id: 4, value: '100%',    label: 'Akurasi Operasional', sublabel: 'Data & Server Simbank' },
]

// ── Default URL Cloudinary Foto Profil (Spider-Man & Wajah) ───────────────
const DEFAULT_MASK = 'https://res.cloudinary.com/tmpiohq2/image/upload/v1790177519/portfolio-gallery/mask_1790177515212.jpg'
const DEFAULT_FACE = 'https://res.cloudinary.com/tmpiohq2/image/upload/v1790177530/portfolio-gallery/face_jpg_1790177520764.jpg'

// ── Section header ─────────────────────────────────────────────────────────
function SectionHeading({ label, title, accent }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="mb-2"
    >
      <p className="text-[10px] font-mono text-accent/70 tracking-[0.2em] uppercase mb-1">
        {label}
      </p>
      <h3 className="text-base font-semibold text-white/90">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h3>
    </motion.div>
  )
}

export default function AboutMe() {
  const [maskSrc, setMaskSrc] = useState(DEFAULT_MASK)
  const [faceSrc, setFaceSrc] = useState(DEFAULT_FACE)

  // Otomatis deteksi foto dengan nama 'mask' dan 'face' dari Cloudinary
  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const foundMask = data.find((p) => p.name.toLowerCase().includes('mask'))
          const foundFace = data.find((p) => p.name.toLowerCase().includes('face'))
          if (foundMask) setMaskSrc(foundMask.url)
          if (foundFace) setFaceSrc(foundFace.url)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-elevated">
      <div className="section-wrapper">

        {/* ── Section header ───────────────────────────────────────────── */}
        <motion.div
          className="mb-14 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-white/45 text-sm max-w-sm mx-auto leading-relaxed">
            Mengenal lebih dekat latar belakang dan perjalanan profesional saya.
          </p>
        </motion.div>

        {/* ── Main grid ────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">

          {/* ── LEFT column: photo + gallery ─────────────────────── */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-8">

            {/* Interactive profile photo (Spider-Man -> Reveal Face) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <ProfilePhoto
                maskSrc={maskSrc}
                faceSrc={faceSrc}
                alt="Elga Alfareza, S.Kom."
              />
            </motion.div>

            {/* Photo gallery */}
            <motion.div
              className="w-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase mb-3">
                Galeri Foto
              </p>
              <PhotoGallery label="Personal photo gallery" />
            </motion.div>
          </div>

          {/* ── RIGHT column: bio + timelines + metrics ──────────── */}
          <div className="lg:col-span-7 flex flex-col gap-10">

            {/* Bio text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-[10px] font-mono text-accent/70 tracking-[0.2em] uppercase mb-3">
                Tentang Saya
              </p>
              <h3 className="text-xl font-bold text-white/90 mb-3">
                Hai, saya <span className="text-gradient">Elga Alfareza, S.Kom.</span>
              </h3>
              <div className="space-y-3 text-sm text-white/55 leading-relaxed">
                <p>
                  Lulusan S1 Ilmu Komputer (IPK 3.76/4.00) Universitas Bumigora yang memadukan keahlian teknologi informasi, analisis data, dan administrasi operasional. Memiliki pengalaman profesional dalam pengelolaan server simbank, quality control perangkat lunak/keras, serta pengembangan model Machine Learning (CNN).
                </p>
                <p>
                  Tersertifikasi profesional oleh Google AI, Komdigi, dan BPVP dalam pemanfaatan kecerdasan buatan, aplikasi perkantoran, dan analisis data. Saya fokus pada peningkatan efisiensi operasional dan automasi sistem berbasis teknologi yang teruji dan handal.
                </p>
              </div>
            </motion.div>

            {/* Education timeline */}
            <div>
              <SectionHeading label="Pendidikan" title="Riwayat" accent="Pendidikan" />
              <div className="mt-4">
                <TimelineList items={EDUCATION} label="Education timeline" />
              </div>
            </div>

            {/* Work / project timeline */}
            <div>
              <SectionHeading label="Pengalaman" title="Riwayat" accent="Kerja & Organisasi" />
              <div className="mt-4">
                <TimelineList items={WORK} label="Work and project timeline" />
              </div>
            </div>

            {/* Metrics */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
            >
              <p className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase mb-4">
                Metrik Pencapaian
              </p>
              <MetricsStrip metrics={METRICS_ELGA} />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
