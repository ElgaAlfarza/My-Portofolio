'use client'

import { useState, useEffect, useRef } from 'react'

const CERT_DRIVE = 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

// Data 6 Sertifikat Utama yang ada di Google Drive Elga Alfareza
const CERTIFICATES_DATA = [
  {
    id: 1,
    icon: 'smart_toy',
    iconColor: 'text-blue-400',
    code: 'GOOGLE-DEX-AI-NASIONAL',
    title: 'Google — Dasar Artificial Intelligence',
    issuer: 'GOOGLE & DIGITAL EXPERT (DEX)',
    faculty: 'PROGRAM SERTIFIKASI TINGKAT NASIONAL',
    award: 'PENGENALAN DASAR ARTIFICIAL INTELLIGENCE',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'AI Foundation • DEX Google • Tingkat Nasional',
    score: 'KOMPETEN',
    valid: 'SERTIFIKASI NASIONAL',
    fileName: 'Sertifikat_ELGA ALFAREZA_Pengenalan Dasar Artificial Intelligence - DEX - Google - Nasional.pdf',
    sealText: 'GOOGLE AI • DEX NASIONAL',
    sealColor: '#4285F4', // Google Blue
    ribbonColor: '#1A73E8',
    bgTone: 'from-[#08152e] via-[#0d224d] to-[#050e1f]',
    borderColor: '#4285F4',
    href: CERT_DRIVE,
  },
  {
    id: 2,
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
    sealText: 'HUAWEI CERTIFIED • AI NASIONAL',
    sealColor: '#CE1126', // Huawei Red
    ribbonColor: '#990000',
    bgTone: 'from-[#2b0c10] via-[#3a1016] to-[#170507]',
    borderColor: '#CE1126',
    href: CERT_DRIVE,
  },
  {
    id: 3,
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
    sealText: 'MERDEKA BELAJAR • KAMPUS MERDEKA',
    sealColor: '#F59E0B', // Gold
    ribbonColor: '#B45309',
    bgTone: 'from-[#241709] via-[#33200b] to-[#140d04]',
    borderColor: '#F59E0B',
    href: CERT_DRIVE,
  },
  {
    id: 4,
    icon: 'verified_user',
    iconColor: 'text-cyan-400',
    code: 'KOMINFO-DTS-EE59F702',
    title: 'Digital Talent Scholarship — Kominfo',
    issuer: 'KEMENTERIAN KOMINFO REPUBLIK INDONESIA',
    faculty: 'BADAN LITBANG SDM KEMENTERIAN KOMINFO',
    award: 'SERTIFIKAT KELULUSAN PELATIHAN IT',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'Digital Talent Scholarship • ID 1808321701-EE59F702',
    score: 'LULUS PELATIHAN',
    valid: '3 SERTIFIKAT KOMINFO',
    fileName: 'SERTIFIKAT KELULUSAN PELATIHAN - 1808321701-EE59F702.pdf',
    sealText: 'KOMINFO RI • DIGITAL TALENT',
    sealColor: '#00A6E0', // Cyan
    ribbonColor: '#0284C7',
    bgTone: 'from-[#071d2b] via-[#0a293e] to-[#05131d]',
    borderColor: '#00A6E0',
    href: CERT_DRIVE,
  },
  {
    id: 5,
    icon: 'workspace_premium',
    iconColor: 'text-blue-400',
    code: 'COURSERA-7ZDKDZ0WOIHA',
    title: 'Coursera — 7 Verified Certifications',
    issuer: 'COURSERA GLOBAL EDUCATION',
    faculty: 'ONLINE PROFESSIONAL SPECIALIZATION',
    award: 'VERIFIED SPECIALIZATION CERTIFICATE',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: '7 Lisensi Terverifikasi (ID: 7ZDKDZ0WOIHA, LJSDQ0A, dll)',
    score: 'GRADE: PASS',
    valid: '7 SERTIFIKAT COURSERA',
    fileName: 'Coursera 7ZDKDZ0WOIHA.pdf (dan 6 sertifikat lainnya)',
    sealText: 'COURSERA VERIFIED • GLOBAL CERT',
    sealColor: '#0056D2', // Coursera Blue
    ribbonColor: '#003E99',
    bgTone: 'from-[#081735] via-[#0d2350] to-[#040c1d]',
    borderColor: '#0056D2',
    href: CERT_DRIVE,
  },
  {
    id: 6,
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
    sealText: 'DICODING ACADEMY • VERIFIED',
    sealColor: '#10B981', // Emerald
    ribbonColor: '#047857',
    bgTone: 'from-[#061e1b] via-[#082a25] to-[#041311]',
    borderColor: '#10B981',
    href: CERT_DRIVE,
  },
]

// Komponen Visual Gambar Sertifikat dengan Ornamen & Stempel 3D
function CertificateVisual({ cert }) {
  return (
    <div className={`relative w-full aspect-[1.5/1] rounded-xl overflow-hidden bg-gradient-to-br ${cert.bgTone} p-3 sm:p-4 select-none flex flex-col justify-between border border-white/[0.1]`}>
      {/* Guilloche & Security Pattern Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id={`pat-${cert.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
          <path d="M0 10h20M10 0v20" stroke="currentColor" strokeWidth="0.3" className="text-white" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#pat-${cert.id})`} />
      </svg>

      {/* Ornate Inner Double Border */}
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

      {/* Top Header & Emblem */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shadow-md border"
            style={{ backgroundColor: `${cert.sealColor}22`, borderColor: cert.sealColor }}
          >
            <span className="material-symbols-outlined text-[15px] sm:text-[18px]" style={{ color: cert.sealColor }}>
              {cert.icon}
            </span>
          </div>
          <div>
            <p className="font-label-mono text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-white/90 leading-tight">
              {cert.issuer}
            </p>
            <p className="font-label-mono text-[7px] sm:text-[7.5px] uppercase tracking-wider text-white/50 leading-tight">
              {cert.faculty}
            </p>
          </div>
        </div>

        <span
          className="font-label-mono text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded font-semibold tracking-wider border shadow-sm"
          style={{
            backgroundColor: `${cert.sealColor}18`,
            color: cert.sealColor,
            borderColor: `${cert.sealColor}40`,
          }}
        >
          {cert.valid}
        </span>
      </div>

      {/* Center Award & Recipient */}
      <div className="relative z-10 text-center my-auto py-1">
        <p
          className="font-label-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold"
          style={{ color: cert.sealColor }}
        >
          {cert.award}
        </p>

        <h5 className="font-display-md text-sm sm:text-base font-bold text-white tracking-wide mt-0.5">
          {cert.recipient}
        </h5>

        <div className="w-24 sm:w-32 h-[1px] mx-auto my-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <p className="font-body-sm text-[9px] sm:text-[10.5px] text-white/80 line-clamp-1">
          {cert.metric}
        </p>
      </div>

      {/* Bottom Row: Security Barcode & Official Holographic Seal */}
      <div className="relative z-10 flex items-end justify-between pt-1 border-t border-white/[0.08]">
        {/* Verification Barcode & Hash */}
        <div className="flex flex-col">
          <div className="font-label-mono text-[7px] text-white/40 flex items-center gap-1">
            <span>FILE DRIVE //</span>
            <span className="text-white/60 font-semibold">{cert.code}</span>
          </div>
          {/* Simulated mini barcode */}
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

        {/* 3D Holographic Seal Badge with Ribbon */}
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
  const [yawAngle, setYawAngle] = useState(-14)
  const [isAutoYaw, setIsAutoYaw] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef(null)

  // Auto Yaw loop
  useEffect(() => {
    let interval = null
    if (isAutoYaw) {
      interval = setInterval(() => {
        setYawAngle((prev) => (prev + 3) % 360)
      }, 30)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoYaw])

  const toggleAutoYaw = () => {
    setIsAutoYaw((prev) => !prev)
  }

  const toggleFlip = () => {
    setIsAutoYaw(false)
    setIsFlipped((prev) => !prev)
  }

  const resetCard = () => {
    setIsAutoYaw(false)
    setIsFlipped(false)
    setYawAngle(-14)
  }

  const currentTransform = isFlipped
    ? 'rotateX(10deg) rotateY(180deg)'
    : `rotateX(10deg) rotateY(${yawAngle}deg)`

  return (
    <section className="w-full pt-space-xl pb-space-xl mb-margin" id="credentials">
      {/* Header & Meta Summary */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-space-lg">
        <div>
          <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase mb-2">
            <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
              SECTION 03
            </span>
            <span>// GOOGLE DRIVE CERTIFICATIONS &amp; LICENSES</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-on-surface tracking-tight">
            Sertifikasi Resmi &amp; Lisensi Kompetensi Terverifikasi
          </h2>
        </div>

        {/* Attestation Metadata Summary Report */}
        <div className="flex flex-wrap items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low font-label-mono text-label-sm border border-white/[0.06]">
          <div className="px-3 py-1 rounded bg-surface-container text-secondary">
            <span className="text-outline">TOTAL:</span> 16+ SERTIFIKAT DRIVE
          </div>
          <div className="px-3 py-1 rounded bg-surface-container text-primary">
            <span className="text-outline">MITRA:</span> GOOGLE / HUAWEI / KOMINFO
          </div>
          <div className="px-3 py-1 rounded bg-surface-container text-tertiary">
            <span className="text-outline">STATUS:</span> 100% TERVERIFIKASI
          </div>
        </div>
      </div>

      {/* Featured 3D Holographic Certificate Stage */}
      <div className="w-full rounded-2xl bg-surface-container-low p-space-lg mb-space-lg shadow-2xl relative overflow-hidden border border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* 3D Card Interactive Visual Viewport */}
          <div
            className="lg:col-span-6 flex flex-col items-center justify-center p-space-md sm:p-space-lg"
            style={{ perspective: '1000px' }}
          >
            <div
              ref={cardRef}
              className="w-full max-w-md aspect-[1.58/1] rounded-2xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest p-space-md shadow-2xl relative transition-transform duration-500 cursor-grab select-none border border-white/[0.12]"
              style={{ transform: currentTransform }}
            >
              {/* Holographic sheen overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-secondary/15 via-primary/5 to-tertiary/15 pointer-events-none" />

              {/* Front Face: Google & Huawei AI Certified */}
              {!isFlipped ? (
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-400 text-[28px]">
                        verified
                      </span>
                      <span className="font-label-mono text-label-sm text-secondary font-bold">
                        GOOGLE &amp; HUAWEI AI CERTIFIED
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[10px] text-primary border border-primary/20">
                      NASIONAL • TERVERIFIKASI
                    </span>
                  </div>

                  <div>
                    <p className="font-label-mono text-[11px] text-outline uppercase tracking-wider">
                      OFFICIAL AI CREDENTIALS
                    </p>
                    <h4 className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface">
                      Pengenalan Dasar AI &amp; Fundamental AI
                    </h4>
                    <p className="font-label-mono text-label-sm text-secondary mt-1">
                      Digital Expert (DEX) • Google &amp; Huawei Technologies
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-surface-bright/30 font-label-mono text-[10px] text-on-surface-variant">
                    <span>ELGA ALFAREZA, S.Kom.</span>
                    <span className="text-tertiary">GOOGLE DRIVE // VERIFIED</span>
                  </div>
                </div>
              ) : (
                /* Backplate Face */
                <div
                  className="h-full flex flex-col justify-between relative z-10"
                  style={{ transform: 'scaleX(-1)' }}
                >
                  <div className="flex items-center justify-between border-b border-surface-bright/40 pb-2">
                    <span className="font-label-mono text-[11px] text-secondary font-bold">
                      GOOGLE DRIVE CERTIFICATE ARCHIVE
                    </span>
                    <span className="text-tertiary font-label-mono text-[10px]">
                      16+ DOKUMEN RESMI
                    </span>
                  </div>
                  <div className="space-y-1 font-label-mono text-[11px] text-outline">
                    <p>• Google AI (DEX) &amp; Huawei AI (DEX)</p>
                    <p>• Kampus Mengajar Angkatan 7 (Kemdikbudristek)</p>
                    <p>• 3x Pelatihan Kominfo (Digital Talent Scholarship)</p>
                    <p>• 7x Coursera Global &amp; 3x Dicoding Academy</p>
                  </div>
                  <div className="pt-2 border-t border-surface-bright/30 font-label-mono text-[10px] text-on-surface-variant flex justify-between">
                    <span>FOLDER DRIVE RESMI</span>
                    <span className="text-primary">LIFETIME ACCESS</span>
                  </div>
                </div>
              )}
            </div>

            {/* 3D Manipulator Action Bar */}
            <div className="flex items-center gap-2 mt-space-md">
              <button
                onClick={toggleAutoYaw}
                className={`px-3 py-1.5 rounded-full font-label-mono text-label-sm flex items-center gap-1.5 transition-colors border border-white/[0.06] ${
                  isAutoYaw
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-high hover:bg-surface-bright text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">rotate_right</span>
                <span>Auto Yaw</span>
              </button>
              <button
                onClick={toggleFlip}
                className="px-3 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-bright font-label-mono text-label-sm text-on-surface flex items-center gap-1.5 transition-colors border border-white/[0.06]"
              >
                <span className="material-symbols-outlined text-[16px]">flip</span>
                <span>Flip Backplate</span>
              </button>
              <button
                onClick={resetCard}
                className="px-3 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-bright font-label-mono text-label-sm text-on-surface flex items-center gap-1.5 transition-colors border border-white/[0.06]"
              >
                <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Featured Attestation Audit Data & Verification */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-mono text-label-sm mb-space-sm w-fit border border-white/[0.04]">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>ARSIP GOOGLE DRIVE // SERTIFIKAT ELGA ALFAREZA, S.Kom</span>
            </div>

            <h3 className="font-headline-md text-xl sm:text-headline-md font-bold text-on-surface mb-space-xs">
              Sertifikasi &amp; Pelatihan Terakreditasi Nasional &amp; Global
            </h3>

            <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-space-md leading-relaxed">
              Koleksi 16+ sertifikat resmi dari Google, Huawei, Kementerian Pendidikan (Kemdikbudristek), Kementerian Kominfo (Digitalent Scholarship), Coursera, dan Dicoding Indonesia yang tersimpan di Google Drive.
            </p>

            <div className="grid grid-cols-2 gap-space-sm mb-space-md font-label-mono text-label-sm">
              <div className="p-space-sm rounded-lg bg-surface-container-lowest border border-white/[0.04]">
                <p className="text-outline">TOTAL ARSIP</p>
                <p className="font-semibold text-on-surface">16+ Sertifikat Resmi</p>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-lowest border border-white/[0.04]">
                <p className="text-outline">PENERBIT UTAMA</p>
                <p className="font-semibold text-secondary">Google, Huawei, Kominfo, Coursera</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-sm">
              <a
                className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-mono text-label-sm font-semibold hover:bg-primary transition-all shadow-md"
                href={CERT_DRIVE}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">folder_open</span>
                <span>Buka Folder Google Drive (16 Sertifikat)</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono text-label-sm transition-all border border-white/[0.06]"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Perspective Credential Cards Grid dengan Bingkai 3D & Gambar Sertifikat Asli Google Drive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md mb-space-lg">
        {CERTIFICATES_DATA.map((cert) => (
          <a
            key={cert.id}
            href={cert.href || CERT_DRIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-500 shadow-xl group border border-white/[0.08] hover:border-primary/50 block cursor-pointer flex flex-col justify-between"
            style={{ perspective: '800px' }}
          >
            {/* Bingkai 3D Mewah Mengelilingi Gambar Sertifikat */}
            <div className="relative w-full rounded-xl p-2 bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-surface-container-lowest border border-white/[0.15] shadow-[0_15px_30px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_40px_rgba(44,103,237,0.35)] group-hover:border-primary/60 transition-all duration-500 ease-out transform group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
              {/* Glass Sheen Reflection Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none z-20" />

              {/* Tampilan Dokumen Gambar Sertifikat */}
              <div className="relative rounded-lg overflow-hidden shadow-inner">
                <CertificateVisual cert={cert} />

                {/* Hover overlay hint: Buka Sertifikat di Google Drive */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-white font-label-mono text-xs z-30">
                  <span className="px-3 py-1.5 rounded-full bg-primary text-on-primary font-semibold flex items-center gap-1.5 shadow-lg">
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    Buka PDF di Drive
                  </span>
                </div>
              </div>
            </div>

            {/* Metadata Kartu di Bawah Bingkai */}
            <div className="mt-4 flex flex-col">
              <div className="flex items-center justify-between mb-1.5">
                <span className={`material-symbols-outlined text-[20px] ${cert.iconColor}`}>
                  {cert.icon}
                </span>
                <span className="font-label-mono text-[10px] text-outline truncate max-w-[200px]">
                  {cert.code}
                </span>
              </div>

              <h4 className="font-headline-sm text-base font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h4>

              <p className="font-body-sm text-xs text-on-surface-variant mb-3 leading-relaxed">
                {cert.metric}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] font-label-mono text-[11px] text-primary">
                <span className="font-semibold">{cert.score}</span>
                <span className="text-secondary font-semibold">{cert.valid}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Trust Chain Merkle Anchor Diagram */}
      <div className="w-full p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-4 font-label-mono text-label-sm border border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">
            folder_special
          </span>
          <span className="text-on-surface font-semibold">
            GOOGLE DRIVE CERTIFICATES ATTESTATION:
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-outline text-xs">
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-primary border border-white/[0.04]">
            Google &amp; Huawei AI
          </span>
          <span>→</span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-secondary border border-white/[0.04]">
            Kemdikbud KM7 &amp; Kominfo DTS
          </span>
          <span>→</span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-tertiary border border-white/[0.04]">
            Coursera &amp; Dicoding Academy
          </span>
        </div>
        <span className="text-secondary font-bold">16+ DOKUMEN RESMI</span>
      </div>
    </section>
  )
}
