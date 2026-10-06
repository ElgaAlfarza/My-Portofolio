'use client'

import { useState, useEffect } from 'react'
import ProfilePhoto from './ProfilePhoto'

const DEFAULT_MASK = '/profile-spiderman.png'
const DEFAULT_FACE = '/profile-face.png'

export default function AboutMe() {
  const [maskSrc, setMaskSrc] = useState(DEFAULT_MASK)
  const [faceSrc, setFaceSrc] = useState(DEFAULT_FACE)

  // Otomatis cek jika ada update foto dari /api/photos
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

      {/* Main Container: Centered Large Profile Showcase */}
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        {/* Title Headline Centered */}
        <div className="text-center max-w-3xl mb-space-lg">
          <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-headline-lg font-bold text-on-surface tracking-tight leading-snug mb-3">
            Bridging structural engineering rigor with deliberate technological sensitivity.
          </h2>
          <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
            Menghubungkan ketelitian rekayasa perangkat lunak modern (Vibe Coding), komputasi Machine Learning berbasis Python, dan keandalan operasional tingkat tinggi.
          </p>
        </div>

        {/* Centerpiece: Large Interactive 3D Avatar with Translucent Spider-Man Hover Overlay */}
        <div className="w-full flex justify-center mb-space-lg">
          <ProfilePhoto maskSrc={maskSrc} faceSrc={faceSrc} alt="Elga Alfareza, S.Kom." />
        </div>

        {/* Narrative & Doctrine Card Below Centered Image */}
        <div className="w-full max-w-3xl flex flex-col gap-space-md mb-space-lg">
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-xl border border-white/[0.08]">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
              Saya berada tepat di persimpangan antara <strong className="text-on-surface">Full Stack Web Development (Vibe Coding)</strong> bersertifikasi Google AI, perancangan model <strong className="text-on-surface">Machine Learning (CNN)</strong> naskah kuno Aksara Sasak yang terpublikasi di jurnal nasional <strong className="text-on-surface">SINTA 4</strong>, serta keandalan operasional server simbank dan kendali mutu industri dengan sertifikasi K3 Kemnaker RI.
            </p>

            <div className="p-space-md rounded-xl bg-surface-container border border-white/[0.05]">
              <div className="flex items-center gap-2 font-label-mono text-label-sm text-primary mb-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>ARCHITECTURAL DOCTRINE</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                &quot;Perangkat lunak dan infrastruktur tidak hanya harus berfungsi optimal dalam kondisi ideal; ia harus mampu fail gracefully, menjaga konsistensi data 100%, dan memberikan kejelasan kontrol saat beban operasional puncak.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Verified Metrics Bento Grid Centered */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm w-full max-w-3xl">
          <div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col border border-white/[0.06] shadow-md text-center">
            <span className="font-label-mono text-label-sm text-outline">TENURE</span>
            <span className="font-display-xl text-3xl font-bold text-primary my-1">
              3.76
            </span>
            <span className="font-body-sm text-label-sm text-on-surface-variant">
              IPK S1 Ilmu Komputer
            </span>
          </div>

          <div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col border border-white/[0.06] shadow-md text-center">
            <span className="font-label-mono text-label-sm text-secondary">RESEARCH</span>
            <span className="font-display-xl text-3xl font-bold text-secondary my-1">
              SINTA 4
            </span>
            <span className="font-body-sm text-label-sm text-on-surface-variant">
              Publikasi Jurnal Nasional
            </span>
          </div>

          <div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col border border-white/[0.06] shadow-md text-center">
            <span className="font-label-mono text-label-sm text-tertiary">SYSTEMS</span>
            <span className="font-display-xl text-3xl font-bold text-tertiary my-1">
              20+
            </span>
            <span className="font-body-sm text-label-sm text-on-surface-variant">
              Sertifikat di Google Drive
            </span>
          </div>

          <div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col border border-white/[0.06] shadow-md text-center">
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
    </section>
  )
}
