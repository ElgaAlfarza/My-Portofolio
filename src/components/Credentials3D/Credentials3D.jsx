'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CERT_DRIVE = 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'
const CV_DRIVE = 'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'

const CERTIFICATES_DATA = [
  {
    id: 1,
    icon: 'smart_toy',
    iconColor: 'text-blue-400',
    code: 'GOOGLE-AI-COURSERA-LJSDQ0A',
    title: 'Google AI — Professional Certificate',
    issuer: 'GOOGLE & COURSERA',
    faculty: '7 COURSES SPECIALIZATION (AUG 2026)',
    award: 'GOOGLE AI & VIBE CODING SPECIALIZATION',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'Vibe Coded Custom AI Solution • 20+ Artifacts • ID: LJSDQ0ASEAVR',
    score: 'LULUS (7 COURSES)',
    valid: 'TERVERIFIKASI GLOBAL',
    fileName: 'Google AI Professional Certificate (Coursera).pdf',
    sealColor: '#4285F4',
    ribbonColor: '#1A73E8',
    bgTone: 'from-[#08152e] via-[#0d224d] to-[#050e1f]',
    borderColor: '#4285F4',
    href: 'https://coursera.org/verify/professional-cert/LJSDQ0ASEAVR',
  },
  {
    id: 2,
    icon: 'verified',
    iconColor: 'text-cyan-400',
    code: 'KOMDIGI-21212840840-303',
    title: 'Komdigi & Google — AI Nasional (DTA 2026)',
    issuer: 'KEMENTERIAN KOMUNIKASI DAN DIGITAL RI',
    faculty: 'DIGITAL TALENT ACADEMY (DTA) 2026',
    award: 'PENGENALAN DASAR AI - DEX GOOGLE',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'No: 21212840840-303/DTA/BLSDM.Komdigi/2026 • 9 Jam Pelatihan',
    score: 'KOMPETEN',
    valid: 'RESMI KOMDIGI',
    fileName: 'Sertifikat Pelatihan Komdigi - Google DEX AI 2026.pdf',
    sealColor: '#00A6E0',
    ribbonColor: '#0284C7',
    bgTone: 'from-[#071d2b] via-[#0a293e] to-[#05131d]',
    borderColor: '#00A6E0',
    href: CERT_DRIVE,
  },
  {
    id: 3,
    icon: 'health_and_safety',
    iconColor: 'text-amber-500',
    code: 'KEMNAKER-K3-26051847786E21',
    title: 'Kemnaker — K3: Pengenalan HIRA & JSA',
    issuer: 'KEMENTERIAN KETENAGAKERJAAN RI',
    faculty: 'BALAI PELATIHAN VOKASI BPVP BELITUNG',
    award: 'HIRA & JSA PADA KESELAMATAN KERJA (K3)',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'No: 26051847786E21 • 10 Jam Pelatihan • 18 Mei 2026',
    score: 'LULUS PELATIHAN',
    valid: 'STANDAR K3 NASIONAL',
    fileName: 'Sertifikat Kemnaker K3 - HIRA & JSA BPVP Belitung.pdf',
    sealColor: '#F59E0B',
    ribbonColor: '#D97706',
    bgTone: 'from-[#241709] via-[#33200b] to-[#140d04]',
    borderColor: '#F59E0B',
    href: CERT_DRIVE,
  },
  {
    id: 4,
    icon: 'table_view',
    iconColor: 'text-emerald-400',
    code: 'KEMNAKER-SPREADSHEET-260717',
    title: 'Kemnaker — Lembar Sebar (Spreadsheet)',
    issuer: 'KEMENTERIAN KETENAGAKERJAAN RI',
    faculty: 'BALAI PELATIHAN VOKASI BPVP BELITUNG',
    award: 'MEMBUAT LEMBAR SEBAR TINGKAT DASAR',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'No: 260717D13785AB • 20 Jam Pelatihan • 15-16 Juli 2026',
    score: 'LULUS PELATIHAN',
    valid: '20 JAM VOKASI',
    fileName: 'Sertifikat Kemnaker Spreadsheet BPVP Belitung.pdf',
    sealColor: '#10B981',
    ribbonColor: '#059669',
    bgTone: 'from-[#061e1b] via-[#082a25] to-[#041311]',
    borderColor: '#10B981',
    href: CERT_DRIVE,
  },
  {
    id: 5,
    icon: 'translate',
    iconColor: 'text-purple-400',
    code: 'KEMNAKER-TOEFL-26070147',
    title: 'Kemnaker — TOEFL 102: ITP Listening',
    issuer: 'KEMENTERIAN KETENAGAKERJAAN RI',
    faculty: 'BALAI PELATIHAN VOKASI BPVP BANDUNG BARAT',
    award: 'TOEFL 102: ITP LISTENING COMPREHENSION',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'No: 26070147DD8F8F • 10 Jam Pelatihan • 30 Juni 2026',
    score: 'LULUS PELATIHAN',
    valid: 'ENGLISH PROFICIENCY',
    fileName: 'Sertifikat Kemnaker TOEFL 102 BPVP Bandung Barat.pdf',
    sealColor: '#8B5CF6',
    ribbonColor: '#6D28D9',
    bgTone: 'from-[#1b0d2b] via-[#26133c] to-[#0e0717]',
    borderColor: '#8B5CF6',
    href: CERT_DRIVE,
  },
  {
    id: 6,
    icon: 'memory',
    iconColor: 'text-red-400',
    code: 'HUAWEI-DEX-AI-NASIONAL',
    title: 'Huawei — Fundamental AI',
    issuer: 'HUAWEI TECHNOLOGIES & DEX',
    faculty: 'PROGRAM SERTIFIKASI TINGKAT NASIONAL',
    award: 'FUNDAMENTAL ARTIFICIAL INTELLIGENCE',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'AI Architecture & Machine Learning • Huawei',
    score: 'KOMPETEN',
    valid: 'SERTIFIKASI NASIONAL',
    fileName: 'Sertifikat_ELGA ALFAREZA_Fundamental AI - DEX - Huawei - Nasional.pdf',
    sealColor: '#CE1126',
    ribbonColor: '#990000',
    bgTone: 'from-[#2b0c10] via-[#3a1016] to-[#170507]',
    borderColor: '#CE1126',
    href: CERT_DRIVE,
  },
  {
    id: 7,
    icon: 'campaign',
    iconColor: 'text-amber-500',
    code: 'KEMDIKBUD-KM7-2024',
    title: 'Kampus Mengajar Angkatan 7',
    issuer: 'KEMENDIKBUDRISTEK REPUBLIK INDONESIA',
    faculty: 'DIREKTORAT JENDERAL PENDIDIKAN TINGGI (DIKTI)',
    award: 'SERTIFIKAT PENGHARGAAN MBKM',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'Program Kampus Mengajar Angkatan 7 • Kemendikbud',
    score: 'COMPLETED',
    valid: 'ANGKATAN 7',
    fileName: 'SERTIFIKAT KM7.pdf',
    sealColor: '#F59E0B',
    ribbonColor: '#B45309',
    bgTone: 'from-[#241709] via-[#33200b] to-[#140d04]',
    borderColor: '#F59E0B',
    href: CERT_DRIVE,
  },
  {
    id: 8,
    icon: 'terminal',
    iconColor: 'text-emerald-400',
    code: 'DICODING-9C5A0F27',
    title: 'Dicoding Academy — Software Engineering',
    issuer: 'DICODING INDONESIA',
    faculty: 'GOOGLE DEVELOPERS AUTHORIZED TRAINING PARTNER',
    award: 'SERTIFIKAT KELULUSAN PENGEMBANG',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: '3 Sertifikasi Kompetensi Pengembang (ID: 9C5A0F27, dll)',
    score: 'KOMPETEN',
    valid: '3 SERTIFIKAT DICODING',
    fileName: '9c5a0f27-dc6c-481a-9140-c09d28014560_copy.pdf',
    sealColor: '#10B981',
    ribbonColor: '#047857',
    bgTone: 'from-[#061e1b] via-[#082a25] to-[#041311]',
    borderColor: '#10B981',
    href: CERT_DRIVE,
  },
]

function CertificateVisual({ cert, patternPrefix = 'pat' }) {
  return (
    <div
      className={`relative w-full aspect-[1.52/1] rounded-xl overflow-hidden bg-gradient-to-br ${cert.bgTone} p-3 sm:p-4 select-none flex flex-col justify-between border border-white/[0.12]`}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <pattern
          id={`${patternPrefix}-${cert.id}`}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white"
          />
          <path
            d="M0 10h20M10 0v20"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-white"
          />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#${patternPrefix}-${cert.id})`} />
      </svg>

      {/* Ornate Double Border */}
      <div
        className="absolute inset-2 sm:inset-2.5 rounded-lg pointer-events-none border"
        style={{ borderColor: `${cert.borderColor}55` }}
      />
      <div
        className="absolute inset-2.5 sm:inset-3 rounded-lg pointer-events-none border border-dashed opacity-40"
        style={{ borderColor: cert.borderColor }}
      />

      {/* Corner Ornaments */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: cert.borderColor }} />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 pointer-events-none" style={{ borderColor: cert.borderColor }} />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 pointer-events-none" style={{ borderColor: cert.borderColor }} />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: cert.borderColor }} />

      {/* Top Header */}
      <div className="relative z-10 flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <div
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shadow-md border shrink-0"
            style={{ backgroundColor: `${cert.sealColor}22`, borderColor: cert.sealColor }}
          >
            <span
              className="material-symbols-outlined text-[15px] sm:text-[18px]"
              style={{ color: cert.sealColor }}
            >
              {cert.icon}
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-label-mono text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-white/90 leading-tight truncate">
              {cert.issuer}
            </p>
            <p className="font-label-mono text-[7px] sm:text-[7.5px] uppercase tracking-wider text-white/55 leading-tight truncate">
              {cert.faculty}
            </p>
          </div>
        </div>

        <span
          className="font-label-mono text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded font-semibold tracking-wider border shadow-sm shrink-0"
          style={{
            backgroundColor: `${cert.sealColor}18`,
            color: cert.sealColor,
            borderColor: `${cert.sealColor}40`,
          }}
        >
          {cert.valid}
        </span>
      </div>

      {/* Center Award */}
      <div className="relative z-10 text-center my-auto py-1">
        <p
          className="font-label-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold"
          style={{ color: cert.sealColor }}
        >
          {cert.award}
        </p>

        <h5 className="font-headline-sm text-sm sm:text-base font-bold text-white tracking-wide mt-0.5">
          {cert.recipient}
        </h5>

        <div className="w-24 sm:w-32 h-[1px] mx-auto my-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <p className="font-body-sm text-[9px] sm:text-[10.5px] text-white/80 line-clamp-1">
          {cert.metric}
        </p>
      </div>

      {/* Bottom Barcode & Seal */}
      <div className="relative z-10 flex items-end justify-between pt-1 border-t border-white/[0.08]">
        <div className="flex flex-col">
          <div className="font-label-mono text-[7px] text-white/45 flex items-center gap-1">
            <span>CRED_ID //</span>
            <span className="text-white/70 font-semibold">{cert.code}</span>
          </div>
          <div className="flex items-center gap-[2px] mt-0.5 opacity-60">
            <span className="w-[1.5px] h-2.5 bg-white" />
            <span className="w-[3px] h-2.5 bg-white" />
            <span className="w-[1px] h-2.5 bg-white" />
            <span className="w-[2px] h-2.5 bg-white" />
            <span className="w-[1px] h-2.5 bg-white" />
            <span className="w-[3px] h-2.5 bg-white" />
            <span className="w-[1.5px] h-2.5 bg-white" />
            <span className="w-[2px] h-2.5 bg-white" />
            <span className="w-[1px] h-2.5 bg-white" />
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-lg border-2 relative"
            style={{
              background: `radial-gradient(circle, ${cert.sealColor} 0%, ${cert.ribbonColor} 100%)`,
              borderColor: cert.sealColor,
              boxShadow: `0 0 16px ${cert.sealColor}40`,
            }}
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-white drop-shadow">
              verified
            </span>
          </div>
          <span className="font-label-mono text-[6.5px] sm:text-[7px] font-bold uppercase tracking-wider text-white/80 mt-0.5">
            SEAL VERIFIED
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Credentials3D() {
  const [selectedCert, setSelectedCert] = useState(CERTIFICATES_DATA[0])
  const [yawAngle, setYawAngle] = useState(-10)
  const [pitchAngle, setPitchAngle] = useState(6)
  const [isAutoYaw, setIsAutoYaw] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const stageRef = useRef(null)

  useEffect(() => {
    if (!isAutoYaw) return undefined
    const interval = setInterval(() => {
      setYawAngle((prev) => (prev + 2.5) % 360)
    }, 30)
    return () => clearInterval(interval)
  }, [isAutoYaw])

  const handleStageMouseMove = (e) => {
    if (isAutoYaw || isFlipped) return
    const el = stageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 16
    const rotX = -((y - rect.height / 2) / (rect.height / 2)) * 12
    setYawAngle(rotY)
    setPitchAngle(rotX)
  }

  const handleStageMouseLeave = () => {
    if (!isAutoYaw && !isFlipped) {
      setYawAngle(-10)
      setPitchAngle(6)
    }
  }

  const resetCard = () => {
    setIsAutoYaw(false)
    setIsFlipped(false)
    setYawAngle(-10)
    setPitchAngle(6)
  }

  const handleInspectCert = (cert) => {
    setSelectedCert(cert)
    setIsFlipped(false)
    stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  const currentTransform = isFlipped
    ? 'rotateX(6deg) rotateY(180deg)'
    : `rotateX(${pitchAngle}deg) rotateY(${yawAngle}deg)`

  return (
    <section className="w-full py-14 sm:py-20" id="credentials">
      {/* Header & Summary */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2.5 font-label-mono text-label-mono text-secondary uppercase mb-2.5">
            <span className="section-badge">SECTION 04</span>
            <span>// GOOGLE DRIVE CERTIFICATIONS &amp; LICENSES</span>
          </div>
          <h2 className="heading-balance font-headline-lg text-headline-lg font-bold text-white tracking-tight">
            Sertifikasi Resmi &amp; Lisensi Kompetensi Terverifikasi
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-[#101420]/90 font-label-mono text-label-sm border border-white/[0.07]">
          <div className="px-3 py-1 rounded-lg bg-white/[0.04] text-secondary">
            <span className="text-outline">TOTAL:</span> 20+ SERTIFIKAT
          </div>
          <div className="px-3 py-1 rounded-lg bg-white/[0.04] text-primary">
            <span className="text-outline">MITRA:</span> GOOGLE • KOMDIGI • KEMNAKER
          </div>
          <div className="px-3 py-1 rounded-lg bg-white/[0.04] text-emerald-400">
            <span className="text-outline">STATUS:</span> 100% AUDITED
          </div>
        </div>
      </div>

      {/* Featured 3D Holographic Certificate Inspector Stage */}
      <div
        ref={stageRef}
        className="card-glass w-full p-5 sm:p-7 mb-8 relative overflow-hidden"
      >
        <div
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[110px] opacity-25 pointer-events-none transition-colors duration-500"
          style={{ backgroundColor: selectedCert.sealColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left (6 cols): Interactive 3D Two-Sided Holographic Certificate */}
          <div
            onMouseMove={handleStageMouseMove}
            onMouseLeave={handleStageMouseLeave}
            className="lg:col-span-6 flex flex-col items-center justify-center p-1 sm:p-3"
            style={{ perspective: '1200px' }}
          >
            <div
              className="w-full max-w-md relative transition-transform duration-300 ease-out cursor-grab"
              style={{
                transform: currentTransform,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front Face */}
              <div
                style={{ backfaceVisibility: 'hidden' }}
                className="rounded-2xl p-2.5 bg-gradient-to-b from-white/[0.16] via-white/[0.05] to-[#0a0c13] border border-white/[0.18] shadow-[0_24px_50px_rgba(0,0,0,0.75)]"
              >
                <CertificateVisual cert={selectedCert} patternPrefix="stage-pat" />
              </div>

              {/* Backplate Face (True 3D 180deg Backface) */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
                className="absolute inset-0 rounded-2xl bg-[#0d111b] border border-secondary/35 p-5 flex flex-col justify-between shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
                  <span className="font-label-mono text-xs text-secondary font-bold">
                    ATTESTATION BACKPLATE // METADATA
                  </span>
                  <span className="font-label-mono text-[10px] text-emerald-400 font-semibold">
                    AUTHENTIC
                  </span>
                </div>

                <div className="space-y-2 font-label-mono text-xs">
                  <div>
                    <span className="text-outline text-[10px] block">DOCUMENT FILE</span>
                    <span className="text-white break-all">{selectedCert.fileName}</span>
                  </div>
                  <div>
                    <span className="text-outline text-[10px] block">CREDENTIAL HASH / ID</span>
                    <span className="text-secondary">{selectedCert.code}</span>
                  </div>
                  <div>
                    <span className="text-outline text-[10px] block">ISSUING AUTHORITY</span>
                    <span className="text-on-surface-variant">{selectedCert.issuer}</span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-white/[0.08] font-label-mono text-[10px] text-outline flex justify-between">
                  <span>HOLDER: ELGA ALFAREZA, S.KOM.</span>
                  <span className="text-primary font-semibold">{selectedCert.score}</span>
                </div>
              </div>
            </div>

            {/* 3D Manipulator Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              <button
                type="button"
                onClick={() => {
                  setIsFlipped(false)
                  setIsAutoYaw((prev) => !prev)
                }}
                className={`px-3.5 py-1.5 rounded-full font-label-mono text-xs flex items-center gap-1.5 transition-all border ${
                  isAutoYaw
                    ? 'bg-primary-container text-white border-primary/50 shadow-md'
                    : 'bg-surface-container-high hover:bg-surface-bright text-on-surface border-white/[0.08]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">rotate_right</span>
                <span>{isAutoYaw ? 'Stop Orbit' : 'Auto Yaw 360°'}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsAutoYaw(false)
                  setIsFlipped((prev) => !prev)
                }}
                className={`px-3.5 py-1.5 rounded-full font-label-mono text-xs flex items-center gap-1.5 transition-all border ${
                  isFlipped
                    ? 'bg-secondary/20 text-secondary border-secondary/40'
                    : 'bg-surface-container-high hover:bg-surface-bright text-on-surface border-white/[0.08]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">flip</span>
                <span>Flip Backplate</span>
              </button>
              <button
                type="button"
                onClick={resetCard}
                className="px-3.5 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-bright font-label-mono text-xs text-on-surface flex items-center gap-1.5 transition-colors border border-white/[0.08]"
              >
                <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Right (6 cols): Selected Certificate Details & Verification Links */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCert.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-secondary font-label-mono text-xs mb-3 w-fit border border-primary/30">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  <span>ACTIVE STAGE // 0{selectedCert.id} OF 08</span>
                </div>

                <h3 className="font-headline-md text-headline-md font-bold text-white mb-2">
                  {selectedCert.title}
                </h3>

                <p className="prose-pretty font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-4">
                  Diterbitkan secara resmi oleh <strong className="text-white font-semibold">{selectedCert.issuer}</strong> ({selectedCert.faculty}). Klik kartu sertifikat mana saja di bawah untuk memuat pratinjau holografik 3D atau buka dokumen aslinya.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 font-label-mono text-xs">
                  <div className="p-3 rounded-xl bg-black/35 border border-white/[0.06]">
                    <p className="text-outline text-[10px]">CREDENTIAL METRIC</p>
                    <p className="font-semibold text-on-surface mt-0.5 line-clamp-2">
                      {selectedCert.metric}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/35 border border-white/[0.06]">
                    <p className="text-outline text-[10px]">STATUS &amp; VALIDITY</p>
                    <p className="font-semibold text-emerald-400 mt-0.5">
                      {selectedCert.score} • {selectedCert.valid}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5">
              <a
                className="btn-primary !py-2.5 !px-5 font-label-mono !text-xs"
                href={selectedCert.href || CERT_DRIVE}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                <span>Verifikasi Sertifikat Ini</span>
              </a>
              <a
                className="btn-ghost !py-2.5 !px-4 font-label-mono !text-xs"
                href={CERT_DRIVE}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">folder_open</span>
                <span>Arsip Drive (20+ Sertifikat)</span>
              </a>
              <a
                href={CV_DRIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !py-2.5 !px-4 font-label-mono !text-xs"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">download</span>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 8 Credential Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {CERTIFICATES_DATA.map((cert) => {
          const isSelected = selectedCert.id === cert.id
          return (
            <div
              key={cert.id}
              onClick={() => handleInspectCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleInspectCert(cert)
                }
              }}
              className={`rounded-2xl p-3.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between bg-[#11141e]/85 backdrop-blur-md border ${
                isSelected
                  ? 'border-primary ring-1 ring-primary shadow-[0_0_28px_rgba(44,103,237,0.3)]'
                  : 'border-white/[0.08] hover:border-secondary/45 shadow-xl'
              }`}
            >
              <div>
                <div className="relative w-full rounded-xl p-1.5 bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-black/40 border border-white/[0.14] shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="relative rounded-lg overflow-hidden">
                    <CertificateVisual cert={cert} patternPrefix="grid-pat" />
                  </div>
                </div>

                <div className="mt-3.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`material-symbols-outlined text-[18px] ${cert.iconColor}`}>
                      {cert.icon}
                    </span>
                    <span className="font-label-mono text-[9.5px] text-outline truncate max-w-[160px]">
                      {cert.code}
                    </span>
                  </div>

                  <h4 className="font-headline-sm text-sm sm:text-base font-bold text-white mb-1 group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h4>

                  <p className="font-body-sm text-xs text-on-surface-variant mb-3 line-clamp-2">
                    {cert.metric}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06] font-label-mono text-[10.5px]">
                <span className={isSelected ? 'text-secondary font-bold' : 'text-outline'}>
                  {isSelected ? '● IN 3D STAGE' : 'PREVIEW 3D'}
                </span>
                <a
                  href={cert.href || CERT_DRIVE}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-semibold"
                >
                  <span>BUKA PDF</span>
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* Attestation Trust Chain Footer Bar */}
      <div className="card-glass w-full p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 font-label-mono text-label-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">
            folder_special
          </span>
          <span className="text-white font-semibold">
            VERIFIED CREDENTIAL CHAIN:
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-outline text-xs">
          <span className="tag-tech">Google AI &amp; Komdigi</span>
          <span>→</span>
          <span className="tag-tech">Kemnaker RI (K3, Sheet, TOEFL)</span>
          <span>→</span>
          <span className="tag-tech">Kemdikbud KM7 • Huawei • Dicoding</span>
        </div>
        <span className="text-emerald-400 font-bold shrink-0">20+ DOKUMEN RESMI</span>
      </div>
    </section>
  )
}
