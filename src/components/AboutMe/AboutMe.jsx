'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProfilePhoto from './ProfilePhoto'

const DEFAULT_MASK = '/profile-spiderman.jpg'
const DEFAULT_FACE = '/profile-face.png'

export default function AboutMe() {
  const [maskSrc, setMaskSrc] = useState(DEFAULT_MASK)
  const [faceSrc, setFaceSrc] = useState(DEFAULT_FACE)

  // Otomatis cek jika ada foto dari /api/photos
  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const foundMask = data.find((p) => p.name?.toLowerCase().includes('mask'))
          const foundFace = data.find((p) => p.name?.toLowerCase().includes('face'))
          if (foundMask?.url) setMaskSrc(foundMask.url)
          if (foundFace?.url) setFaceSrc(foundFace.url)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section className="w-full pt-space-xl pb-space-xl mb-margin" id="about">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-space-lg">
        <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase">
          <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
            SECTION 01
          </span>
          <span>// IDENTITY &amp; PHILOSOPHY</span>
        </div>
        <span className="font-label-mono text-label-sm text-outline hidden sm:inline-block">
          LAT -8.5786° S • ZERO DRIFT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        {/* Left: Interactive 9:16 Portrait Avatar with Arachnid Helmet Morph */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <ProfilePhoto maskSrc={maskSrc} faceSrc={faceSrc} alt="Elga Alfareza, S.Kom." />
        </div>

        {/* Right: Narrative & Verified Quantitative Metrics */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-on-surface tracking-tight mb-space-sm leading-snug">
            Bridging structural engineering rigor with deliberate technological sensitivity.
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
            Saya berada tepat di persimpangan antara rekayasa sistem informasi terstruktur, komputasi kecerdasan buatan, dan keandalan operasional tingkat tinggi. Setiap sistem yang saya kelola diperlakukan sebagai mesin deterministik: memiliki integritas data 100%, teruji di bawah beban dinamis, dan terverifikasi secara standar mutu industri.
          </p>

          {/* Architectural Doctrine principle card */}
          <div className="p-space-md rounded-xl bg-surface-container-low mb-space-lg shadow-sm border border-white/[0.06]">
            <div className="flex items-center gap-2 font-label-mono text-label-sm text-primary mb-1">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>ARCHITECTURAL DOCTRINE</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
              &quot;Perangkat lunak dan infrastruktur tidak hanya harus berfungsi optimal dalam kondisi ideal; ia harus mampu fail gracefully, menjaga konsistensi data 100%, dan memberikan kejelasan kontrol saat beban operasional puncak.&quot;
            </p>
          </div>

          {/* Verified Metrics Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
            <div className="p-space-md rounded-xl bg-surface-container flex flex-col border border-white/[0.04]">
              <span className="font-label-mono text-label-sm text-outline">TENURE</span>
              <span className="font-display-xl text-3xl font-bold text-primary my-1">
                3.76
              </span>
              <span className="font-body-sm text-label-sm text-on-surface-variant">
                IPK S1 Ilmu Komputer
              </span>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container flex flex-col border border-white/[0.04]">
              <span className="font-label-mono text-label-sm text-secondary">RESEARCH</span>
              <span className="font-display-xl text-3xl font-bold text-secondary my-1">
                SINTA 4
              </span>
              <span className="font-body-sm text-label-sm text-on-surface-variant">
                Publikasi Jurnal Nasional
              </span>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container flex flex-col border border-white/[0.04]">
              <span className="font-label-mono text-label-sm text-tertiary">SYSTEMS</span>
              <span className="font-display-xl text-3xl font-bold text-tertiary my-1">
                8+
              </span>
              <span className="font-body-sm text-label-sm text-on-surface-variant">
                Sertifikasi Profesional
              </span>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container flex flex-col border border-white/[0.04]">
              <span className="font-label-mono text-label-sm text-outline">ACCURACY</span>
              <span className="font-display-xl text-3xl font-bold text-on-surface my-1">
                100%
              </span>
              <span className="font-body-sm text-label-sm text-on-surface-variant">
                Akurasi Operasional Simbank
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
