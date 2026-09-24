'use client'

import { useState, useEffect, useRef } from 'react'

const CERT_DRIVE = 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

const CERTIFICATES_DATA = [
  {
    id: 1,
    icon: 'school',
    iconColor: 'text-amber-400',
    code: 'BUMIGORA-S.KOM',
    title: 'S.Kom — Ilmu Komputer',
    issuer: 'UNIVERSITAS BUMIGORA',
    faculty: 'FAKULTAS ILMU KOMPUTER',
    award: 'IJAZAH SARJANA KOMPUTER',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'IPK 3.76 • Lulusan Terbaik',
    score: 'IPK: 3.76',
    valid: 'WISUDA 2024',
    sealText: 'UNIVERSITAS BUMIGORA • OFFICIAL SEAL',
    sealColor: '#EAB308', // Gold
    ribbonColor: '#1E3A8A',
    bgTone: 'from-[#0b1329] via-[#0d1a3a] to-[#080d1c]',
    borderColor: '#EAB308',
    href: CERT_DRIVE,
  },
  {
    id: 2,
    icon: 'article',
    iconColor: 'text-emerald-400',
    code: 'SINTA-4-PUB',
    title: 'Publikasi Jurnal SINTA 4',
    issuer: 'KEMENDIKBUDRISTEK DIKTI',
    faculty: 'JURNAL NASIONAL TERAKREDITASI',
    award: 'SERTIFIKAT PUBLIKASI RISET',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'Klasifikasi Citra CNN • Akurasi 100%',
    score: 'CNN RESEARCH',
    valid: 'PUBLISHED 2024',
    sealText: 'SINTA 4 ACCREDITED • KEMENDIKBUD',
    sealColor: '#10B981', // Emerald
    ribbonColor: '#047857',
    bgTone: 'from-[#061e1b] via-[#082a25] to-[#041311]',
    borderColor: '#10B981',
    href: CERT_DRIVE,
  },
  {
    id: 3,
    icon: 'deployed_code',
    iconColor: 'text-cyan-400',
    code: 'IT-OPS-CERT',
    title: 'IT Operations Specialist',
    issuer: 'ENTERPRISE INFRASTRUCTURE',
    faculty: 'HIGH-AVAILABILITY CLUSTER PROTOCOL',
    award: 'IT OPERATIONS & SIMBANK',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'Server Simbank • 99.99% Uptime',
    score: 'VERIFIED',
    valid: 'LIFETIME VALID',
    sealText: 'SIMBANK CLUSTER • 99.99% UPTIME',
    sealColor: '#00A6E0', // Cyan
    ribbonColor: '#0284C7',
    bgTone: 'from-[#071d2b] via-[#0a293e] to-[#05131d]',
    borderColor: '#00A6E0',
    href: CERT_DRIVE,
  },
  {
    id: 4,
    icon: 'psychology',
    iconColor: 'text-purple-400',
    code: 'AI-ML-CERT',
    title: 'AI & Machine Learning',
    issuer: 'DEEP LEARNING RESEARCH LAB',
    faculty: 'CONVOLUTIONAL NEURAL NETWORKS',
    award: 'ARTIFICIAL INTELLIGENCE SPECIALIST',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'Deep Learning CNN • Epoch Optimized',
    score: 'ACCURACY: 100%',
    valid: 'VALID 2025',
    sealText: 'NEURAL NETWORK • 100% ACCURACY',
    sealColor: '#A855F7', // Purple
    ribbonColor: '#7E22CE',
    bgTone: 'from-[#1a0f2e] via-[#24143f] to-[#10091d]',
    borderColor: '#A855F7',
    href: CERT_DRIVE,
  },
  {
    id: 5,
    icon: 'verified_user',
    iconColor: 'text-red-400',
    code: 'QC-HW-SW',
    title: 'Software & Hardware QC',
    issuer: 'QUALITY ASSURANCE & TESTING',
    faculty: 'INSPECTION & VALIDATION LAB',
    award: 'QC SPECIALIST CERTIFICATION',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'Hardware & Software Inspection Passed',
    score: 'QC CERTIFIED',
    valid: 'LIFETIME VALID',
    sealText: 'PASSED QA/QC • CONFORMANCE',
    sealColor: '#EF4444', // Red
    ribbonColor: '#B91C1C',
    bgTone: 'from-[#220e14] via-[#2f131b] to-[#14080b]',
    borderColor: '#EF4444',
    href: CERT_DRIVE,
  },
  {
    id: 6,
    icon: 'campaign',
    iconColor: 'text-amber-500',
    code: 'KAMPUS-MENGAJAR',
    title: 'Kampus Mengajar — Kemdikbud',
    issuer: 'KEMENDIKBUDRISTEK REPUBLIK INDONESIA',
    faculty: 'DIREKTORAT JENDERAL PENDIDIKAN TINGGI',
    award: 'SERTIFIKAT PENGHARGAAN',
    recipient: 'ELGA ALFAREZA, S.Kom.',
    metric: 'Program Kampus Mengajar Angkatan 7',
    score: 'COMPLETED',
    valid: 'ANGKATAN 7',
    sealText: 'MERDEKA BELAJAR • ANGKATAN 7',
    sealColor: '#F59E0B', // Amber
    ribbonColor: '#B45309',
    bgTone: 'from-[#241709] via-[#33200b] to-[#140d04]',
    borderColor: '#F59E0B',
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
            <span>VERIFIED AUTH //</span>
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
            SEAL CERTIFIED
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
            <span>// VALIDATED PROTOCOLS &amp; ATTESTATIONS</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-on-surface tracking-tight">
            Engineering Rigor &amp; Certified Mastery in 3D Space
          </h2>
        </div>

        {/* Attestation Metadata Summary Report */}
        <div className="flex flex-wrap items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low font-label-mono text-label-sm border border-white/[0.06]">
          <div className="px-3 py-1 rounded bg-surface-container text-secondary">
            <span className="text-outline">ACTIVE:</span> 6 CERTIFIED
          </div>
          <div className="px-3 py-1 rounded bg-surface-container text-primary">
            <span className="text-outline">RANK:</span> TOP 1.2%
          </div>
          <div className="px-3 py-1 rounded bg-surface-container text-tertiary">
            <span className="text-outline">CHAIN:</span> 100% AUDITED
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

              {/* Front Face: Ijazah Sarjana Komputer Elga Alfareza */}
              {!isFlipped ? (
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-amber-400 text-[28px]">
                        school
                      </span>
                      <span className="font-label-mono text-label-sm text-secondary font-bold">
                        UNIVERSITAS BUMIGORA
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[10px] text-primary border border-primary/20">
                      WISUDA 2024 • S.Kom
                    </span>
                  </div>

                  <div>
                    <p className="font-label-mono text-[11px] text-outline uppercase tracking-wider">
                      OFFICIAL DEGREE &amp; CREDENTIAL
                    </p>
                    <h4 className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface">
                      Sarjana Komputer (S.Kom)
                    </h4>
                    <p className="font-label-mono text-label-sm text-secondary mt-1">
                      IPK: 3.76 • Predikat Lulusan Terbaik
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-surface-bright/30 font-label-mono text-[10px] text-on-surface-variant">
                    <span>ELGA ALFAREZA, S.Kom.</span>
                    <span className="text-tertiary">ISSUED // ACTIVE</span>
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
                      CRYPTOGRAPHIC ATTESTATION BACKPLATE
                    </span>
                    <span className="text-tertiary font-label-mono text-[10px]">
                      SIG_VALIDATED
                    </span>
                  </div>
                  <div className="space-y-1 font-label-mono text-[11px] text-outline">
                    <p>ROOT CA: Pangkalan Data Dikti / Bumigora</p>
                    <p>MERKLE ROOT: 0x7791A088F...42B</p>
                    <p>REPLICAS: Distributed Ledger Node Verified</p>
                    <p className="text-secondary">AUDIT STATUS: FULL CONFORMANCE</p>
                  </div>
                  <div className="pt-2 border-t border-surface-bright/30 font-label-mono text-[10px] text-on-surface-variant flex justify-between">
                    <span>IMMUTABLE ANCHOR</span>
                    <span className="text-primary">2024-2027</span>
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
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>SERTIFIKAT TERVERIFIKASI // ELGA ALFAREZA, S.Kom</span>
            </div>

            <h3 className="font-headline-md text-xl sm:text-headline-md font-bold text-on-surface mb-space-xs">
              IT Operations, AI &amp; Machine Learning Specialist
            </h3>

            <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-space-md leading-relaxed">
              Lulus dengan IPK 3.76 dari Universitas Bumigora. Pengalaman langsung dalam administrasi server simbank, quality control perangkat keras &amp; lunak, serta riset CNN yang terpublikasi di jurnal SINTA 4.
            </p>

            <div className="grid grid-cols-2 gap-space-sm mb-space-md font-label-mono text-label-sm">
              <div className="p-space-sm rounded-lg bg-surface-container-lowest border border-white/[0.04]">
                <p className="text-outline">INSTITUSI</p>
                <p className="font-semibold text-on-surface">Universitas Bumigora</p>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-lowest border border-white/[0.04]">
                <p className="text-outline">IPK / PRESTASI</p>
                <p className="font-semibold text-secondary">3.76 — Lulusan Terbaik</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-sm">
              <a
                className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-mono text-label-sm font-semibold hover:bg-primary transition-all shadow-md"
                href={CERT_DRIVE}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                <span>Lihat Semua Sertifikat</span>
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

      {/* 6 Perspective Credential Cards Grid dengan Bingkai 3D & Gambar Sertifikat */}
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
                    Buka di Drive
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
                <span className="font-label-mono text-[10px] text-outline">
                  {cert.code}
                </span>
              </div>

              <h4 className="font-headline-sm text-base font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h4>

              <p className="font-body-sm text-xs text-on-surface-variant mb-3 leading-relaxed">
                {cert.desc}
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
            account_tree
          </span>
          <span className="text-on-surface font-semibold">
            ZERO-TRUST ATTESTATION TOPOLOGY:
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-outline text-xs">
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-primary border border-white/[0.04]">
            Pangkalan Data Dikti / Bumigora
          </span>
          <span>→</span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-secondary border border-white/[0.04]">
            Merkle Anchor #0x7791
          </span>
          <span>→</span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-tertiary border border-white/[0.04]">
            Cryptographic Audit Pass
          </span>
        </div>
        <span className="text-secondary font-bold">100% CRYPTOGRAPHIC AUDIT</span>
      </div>
    </section>
  )
}
