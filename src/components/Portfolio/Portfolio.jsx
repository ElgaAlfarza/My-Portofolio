'use client'

import { useState } from 'react'

const CERT_AND_RESEARCH_DRIVE =
  'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

const SELECTED_WORKS = [
  {
    id: 1,
    number: '1',
    numColor: 'text-sky-400',
    title: 'CNN AKSARA SASAK DEEP LEARNING',
    subTitle: 'Computer vision & SINTA 4',
    badge: 'SINTA 4 Terakreditasi',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    icon: 'psychology',
    tech: 'Python • TensorFlow • Streamlit',
    desc: 'Pengembangan arsitektur CNN untuk klasifikasi citra naskah kuno lontar Aksara Sasak (1.080 dataset, 92.3% akurasi). Terbit di Jurnal Nasional SINTA 4 dan buku ber-ISBN.',
    tapeAngle: '-rotate-2',
    cardTilt: 'hover:-rotate-1',
    actionHref: CERT_AND_RESEARCH_DRIVE,
    actionLabel: 'Buka Paper SINTA 4',
    diagramType: 'neural',
  },
  {
    id: 2,
    number: '2',
    numColor: 'text-emerald-400',
    title: 'SERVER SIMBANK 99.9% UPTIME',
    subTitle: 'High-availability SIM farm',
    badge: 'Produksi CV Rajawali',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    icon: 'dns',
    tech: 'Multiport Server • Real-time Sync',
    desc: 'Operasional harian server simbank berkapasitas massal (2.000+ kartu SIM aktif harian). Sinkronisasi inventori fisik dan sistem 100% konsisten tanpa selisih.',
    tapeAngle: 'rotate-3',
    cardTilt: 'hover:rotate-1',
    actionHref: '#experience',
    actionLabel: 'Lihat Pengalaman',
    diagramType: 'server',
  },
  {
    id: 3,
    number: '3',
    numColor: 'text-amber-400',
    title: 'QC & K3 HARDWARE DIAGNOSTICS',
    subTitle: 'Kemnaker safety & QA testing',
    badge: 'CV Sinar Mutiara Bali',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    icon: 'verified_user',
    tech: 'Hardware QA • HIRA & JSA',
    desc: 'Prosedur pemeriksaan mutu unit hardware dan software sebelum distribusi, kepatuhan keselamatan kerja K3 (HIRA & JSA), dan rekonsiliasi logistik penyuplai.',
    tapeAngle: '-rotate-1',
    cardTilt: 'hover:-rotate-1',
    actionHref: '#experience',
    actionLabel: 'Lihat Detail QC',
    diagramType: 'qc',
  },
  {
    id: 4,
    number: '4',
    numColor: 'text-rose-400',
    title: 'DIGITALISASI AKM SEKOLAH',
    subTitle: 'Kampus Mengajar 7 Dikti',
    badge: 'Kemendikbudristek RI',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    icon: 'school',
    tech: 'AKM Digital • Literasi Teknologi',
    desc: 'Transformasi administrasi digital dan pelaksanaan Asesmen Kompetensi Minimum (AKM) Kelas berbasis komputer di SMP Negeri 20 Mataram.',
    tapeAngle: 'rotate-2',
    cardTilt: 'hover:rotate-1',
    actionHref: CERT_AND_RESEARCH_DRIVE,
    actionLabel: 'Lihat Piagam Dikti',
    diagramType: 'school',
  },
  {
    id: 5,
    number: '5',
    numColor: 'text-purple-400',
    title: 'FULL STACK & VIBE CODING',
    subTitle: 'Google AI certified artifacts',
    badge: 'Google AI & Next.js 14',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    icon: 'code_blocks',
    tech: 'Next.js 14 • React • Tailwind',
    desc: 'Pengembangan aplikasi web end-to-end modern berbasis AI-assisted engineering (Vibe Coding), prompt terstruktur, dan 20+ artifacts terverifikasi Google AI.',
    tapeAngle: '-rotate-3',
    cardTilt: 'hover:-rotate-1',
    actionHref: 'https://coursera.org/verify/professional-cert/LJSDQ0ASEAVR',
    actionLabel: 'Verifikasi Google AI',
    diagramType: 'code',
  },
]

export default function Portfolio() {
  const [selectedWork, setSelectedWork] = useState(null)

  return (
    <section id="works" className="relative w-full pt-8 pb-12">
      
      {/* ─────────────────────────────────────────────────────────────
         Torn Paper Header: Jagged Paper Rip Transition
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden leading-none select-none">
        <svg
          className="w-full h-8 sm:h-12 text-[#152E52] filter drop-shadow-md"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,40 L0,15 Q30,22 60,14 T120,24 T180,12 T240,26 T300,15 T360,25 T420,10 T480,24 T540,16 T600,28 T660,12 T720,25 T780,15 T840,27 T900,14 T960,26 T1020,13 T1080,25 T1140,16 T1200,24 L1200,40 Z" />
        </svg>
      </div>

      {/* ─────────────────────────────────────────────────────────────
         Deep Denim Navy Scrapbook Stage (Bottom Half of Reference Image)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full rounded-b-3xl bg-[#152E52] border-x border-b border-[#0E203B] p-5 sm:p-8 lg:p-10 shadow-2xl text-white">
        
        {/* Paper Grain Texture */}
        <div 
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────────────
           Section Header: "Selected Work" with Doodle Crown & Double Underline
        ───────────────────────────────────────────────────────────── */}
        <div className="relative flex flex-col items-center justify-center text-center mb-10 select-none">
          <div className="relative inline-flex flex-col items-center">
            {/* Doodle Crown Above Title (Reference Feature) */}
            <div className="text-amber-300 font-marker text-2xl sm:text-3xl transform -rotate-6 -mb-1 animate-pulse">
              👑
            </div>
            
            <h2 className="font-marker text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white">
              Selected Work
            </h2>

            {/* Hand-drawn Double White Underline Doodle */}
            <div className="w-full max-w-[220px] mt-1 space-y-1">
              <div className="h-0.5 bg-white/80 rounded-full w-full" />
              <div className="h-0.5 bg-white/60 rounded-full w-4/5 mx-auto" />
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
           5 Taped Polaroid / Architecture Cards (Direct Reference Match)
        ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 relative z-10">
          {SELECTED_WORKS.map((work) => {
            const isExternal = work.actionHref.startsWith('http')
            return (
              <div key={work.id} className="flex flex-col items-center group">
                
                {/* Giant Hand-Drawn Colorful Numeral (Reference Feature: 1, 2, 3, 4, 5) */}
                <div className={`font-marker text-4xl sm:text-5xl font-bold mb-1 select-none ${work.numColor} drop-shadow-sm`}>
                  {work.number}
                </div>

                {/* White Paper Note Card Taped with Washi Tape */}
                <div className={`relative w-full scrapbook-card bg-white text-stone-900 p-4 sm:p-5 flex flex-col justify-between min-h-[360px] ${work.cardTilt} transition-transform duration-300`}>
                  
                  {/* Translucent Washi Tape Strip at Top (Reference Feature) */}
                  <div className={`washi-tape absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 ${work.tapeAngle} z-20 pointer-events-none`} />

                  <div>
                    {/* Visual Diagram / Preview Placeholder Box */}
                    <div className="w-full aspect-[4/3] rounded-lg bg-stone-50 border border-stone-200 p-2.5 mb-3 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner">
                      {/* Diagram Icon Graphics */}
                      <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center mb-1.5 shadow-xs">
                        <span className="material-symbols-outlined text-xl">
                          {work.icon}
                        </span>
                      </div>
                      <span className="font-mono text-[0.625rem] font-bold text-stone-600 uppercase tracking-wider">
                        {work.tech}
                      </span>
                      {/* Faux flow arrows */}
                      <div className="mt-1 flex items-center gap-1 text-[0.5625rem] text-stone-400 font-mono">
                        <span>INPUT</span>
                        <span>›</span>
                        <span className="font-bold text-purple-700">MODEL</span>
                        <span>›</span>
                        <span>OUTPUT</span>
                      </div>
                    </div>

                    {/* Badge */}
                    <span className={`inline-block px-2 py-0.5 rounded text-[0.625rem] font-bold border mb-1.5 ${work.badgeColor}`}>
                      {work.badge}
                    </span>

                    {/* Bold Title */}
                    <h3 className="font-sans text-xs sm:text-sm font-bold text-stone-900 leading-snug group-hover:text-purple-700 transition-colors">
                      {work.title}
                    </h3>

                    {/* Cursive Subtitle */}
                    <p className="font-handwriting text-sm text-purple-900 font-semibold mt-0.5">
                      {work.subTitle}
                    </p>

                    <p className="text-[0.6875rem] text-stone-600 mt-2 leading-relaxed">
                      {work.desc}
                    </p>
                  </div>

                  {/* Action Link at Bottom */}
                  <div className="mt-4 pt-2.5 border-t border-stone-200 flex items-center justify-between text-xs">
                    <a
                      href={work.actionHref}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="font-mono text-[0.6875rem] font-bold text-purple-700 hover:text-purple-950 flex items-center gap-1 transition-colors"
                    >
                      <span>{work.actionLabel}</span>
                      <span className="material-symbols-outlined text-xs">
                        {isExternal ? 'arrow_outward' : 'arrow_forward'}
                      </span>
                    </a>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────
           Bottom Paper Scrap Notes (Exact Reference Feature)
        ───────────────────────────────────────────────────────────── */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left Taped Scrap: "Let's build something amazing together! 😊" */}
          <div className="relative p-3.5 sm:p-4 rounded-md bg-[#FFFDF7] text-stone-800 shadow-md border border-stone-200 transform -rotate-2 max-w-xs">
            {/* Masking tape on top */}
            <div className="washi-tape absolute -top-3 left-4 w-16 h-5 rotate-3 pointer-events-none" />
            <p className="font-marker text-xs sm:text-sm font-bold leading-tight">
              Let&apos;s build something amazing together! 😊
            </p>
            <p className="font-sans text-[0.6875rem] text-stone-500 mt-1">
              Terbuka untuk posisi Full-Time, proyek Machine Learning, &amp; IT Ops.
            </p>
          </div>

          {/* Right Paperclip Scrap: "Thanks for visiting! ❤️" */}
          <div className="relative p-3.5 sm:p-4 rounded-md bg-[#FFFDF7] text-stone-800 shadow-md border border-stone-200 transform rotate-3 max-w-xs">
            {/* Realistic Metallic Paperclip Graphic */}
            <div className="absolute -top-3.5 right-4 z-20 pointer-events-none select-none">
              <svg className="w-5 h-8 text-stone-400 drop-shadow" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M 6 15 L 6 30 C 6 35 18 35 18 30 L 18 10 C 18 3 6 3 6 10 L 6 25 C 6 28 12 28 12 25 L 12 12" />
              </svg>
            </div>
            <p className="font-marker text-xs sm:text-sm font-bold leading-tight">
              Thanks for visiting! ❤️
            </p>
            <p className="font-sans text-[0.6875rem] text-stone-500 mt-1">
              Elga Alfareza, S.Kom. • Mataram, NTB
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}
