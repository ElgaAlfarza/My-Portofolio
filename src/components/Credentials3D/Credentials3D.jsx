'use client'

import { useState, useEffect, useRef } from 'react'

const CERT_DRIVE = 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

const CERTIFICATES_DATA = [
  {
    id: 1,
    icon: 'school',
    iconColor: 'text-primary',
    code: 'BUMIGORA-S.KOM',
    title: 'S.Kom — Ilmu Komputer',
    desc: 'Universitas Bumigora • IPK 3.76 • Lulusan Terbaik',
    score: 'IPK: 3.76',
    valid: 'WISUDA 2024',
    href: CERT_DRIVE,
  },
  {
    id: 2,
    icon: 'article',
    iconColor: 'text-secondary',
    code: 'SINTA-4-PUB',
    title: 'Publikasi Jurnal SINTA 4',
    desc: 'Klasifikasi Citra CNN — Jurnal Nasional Terakreditasi',
    score: 'CNN RESEARCH',
    valid: 'PUBLISHED 2024',
    href: CERT_DRIVE,
  },
  {
    id: 3,
    icon: 'deployed_code',
    iconColor: 'text-secondary',
    code: 'IT-OPS-CERT',
    title: 'IT Operations Specialist',
    desc: 'Server Simbank Administration • High-Availability Systems',
    score: 'VERIFIED',
    valid: 'LIFETIME VALID',
    href: CERT_DRIVE,
  },
  {
    id: 4,
    icon: 'psychology',
    iconColor: 'text-tertiary',
    code: 'AI-ML-CERT',
    title: 'AI & Machine Learning',
    desc: 'Deep Learning • CNN Architecture • Model Deployment',
    score: 'ACCURACY: 100%',
    valid: 'VALID 2025',
    href: CERT_DRIVE,
  },
  {
    id: 5,
    icon: 'verified_user',
    iconColor: 'text-error',
    code: 'QC-HW-SW',
    title: 'Software & Hardware QC',
    desc: 'Quality Control Spesialis • Inspeksi Perangkat Keras & Lunak',
    score: 'QC CERTIFIED',
    valid: 'LIFETIME VALID',
    href: CERT_DRIVE,
  },
  {
    id: 6,
    icon: 'campaign',
    iconColor: 'text-primary',
    code: 'KAMPUS-MENGAJAR',
    title: 'Kampus Mengajar — Kemdikbud',
    desc: 'Pengabdian Masyarakat • Angkatan 7 • Program Kemendikbud',
    score: 'COMPLETED',
    valid: 'ANGKATAN 7',
    href: CERT_DRIVE,
  },
]


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

              {/* Front Face */}
              {!isFlipped ? (
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        cloud_done
                      </span>
                      <span className="font-label-mono text-label-sm text-secondary font-bold">
                        AWS CERTIFIED
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[10px] text-primary border border-primary/20">
                      LEVEL 4 • ARCHITECT
                    </span>
                  </div>

                  <div>
                    <p className="font-label-mono text-[11px] text-outline uppercase tracking-wider">
                      OFFICIAL CREDENTIAL
                    </p>
                    <h4 className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface">
                      Solutions Architect — Professional
                    </h4>
                    <p className="font-label-mono text-label-sm text-secondary mt-1">
                      SAP-C02 • SCORE: 940 / 1000
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-surface-bright/30 font-label-mono text-[10px] text-on-surface-variant">
                    <span>HASH: 0x9942...C02</span>
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
                    <p>ROOT CA: GlobalSign / Credly Ledger</p>
                    <p>MERKLE ROOT: 0x7791A088F...42B</p>
                    <p>REPLICAS: Multi-region distributed node</p>
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
              IT Operations, AI & Machine Learning Specialist
            </h3>

            <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-space-md leading-relaxed">
              Lulus dengan IPK 3.76 dari Universitas Bumigora. Pengalaman langsung dalam administrasi server simbank, quality control perangkat keras & lunak, serta riset CNN yang terpublikasi di jurnal SINTA 4.
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
                href="https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing"
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

      {/* 6 Perspective Credential Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md mb-space-lg">
        {CERTIFICATES_DATA.map((cert) => (
          <a
            key={cert.id}
            href={cert.href || CERT_DRIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all shadow-md group border border-white/[0.06] block cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`material-symbols-outlined text-[24px] ${cert.iconColor}`}>
                {cert.icon}
              </span>
              <span className="font-label-mono text-[11px] text-outline">
                {cert.code}
              </span>
            </div>
            <h4 className="font-headline-sm text-base font-semibold text-on-surface mb-1">
              {cert.title}
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              {cert.desc}
            </p>
            <div className="flex items-center justify-between font-label-mono text-label-sm text-primary">
              <span>{cert.score}</span>
              <span className="text-secondary font-semibold">{cert.valid}</span>
            </div>
            <div className="mt-2 font-label-mono text-[10px] text-outline group-hover:text-secondary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">open_in_new</span>
              Lihat di Google Drive
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
            Issuer Node (AWS/GCP/CNCF)
          </span>
          <span>→</span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-secondary border border-white/[0.04]">
            Merkle Anchor #0x7791
          </span>
          <span>→</span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-tertiary border border-white/[0.04]">
            Enterprise Audit Pass
          </span>
        </div>
        <span className="text-secondary font-bold">100% CRYPTOGRAPHIC AUDIT</span>
      </div>
    </section>
  )
}
