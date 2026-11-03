'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const CV_DRIVE_URL = 'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'
const WHATSAPP_URL = 'https://wa.me/6285238208849'
const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'

const SOFTWARE_STACK = [
  { name: 'Python', role: 'Machine Learning', icon: 'code', bg: 'from-blue-900 to-indigo-950', text: 'text-amber-400' },
  { name: 'Next.js 14', role: 'Full Stack Web', icon: 'terminal', bg: 'from-stone-900 to-black', text: 'text-white' },
  { name: 'TensorFlow', role: 'CNN Deep Learning', icon: 'psychology', bg: 'from-orange-800 to-amber-950', text: 'text-orange-300' },
  { name: 'Server', role: 'Simbank 99.9%', icon: 'dns', bg: 'from-emerald-900 to-teal-950', text: 'text-emerald-300' },
  { name: 'SQL DB', role: 'PostgreSQL & Sync', icon: 'database', bg: 'from-cyan-900 to-blue-950', text: 'text-cyan-300' },
  { name: 'QC & K3', role: 'Standar Industri', icon: 'verified_user', bg: 'from-purple-900 to-indigo-950', text: 'text-purple-300' },
]

const EXPERIENCES = [
  { period: '2026 — Sekarang', role: 'System Operator Officer', org: 'CV Rajawali' },
  { period: '2025 — 2026', role: 'Staff Operasional & QC', org: 'CV Sinar Mutiara Bali' },
  { period: '2025', role: 'Computer Operator & Data', org: 'IPHI (Ikatan Persaudaraan Haji)' },
  { period: '2024', role: 'Kampus Mengajar 7 (AKM)', org: 'Kemendikbudristek RI' },
]

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Ignore
    }
  }

  return (
    <section id="top" className="relative w-full pt-4 pb-8">
      {/* ─────────────────────────────────────────────────────────────
         Craft Paper Scrapbook Stage (Top Section of Reference Image)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full rounded-3xl bg-[#FAF7F2] border border-[#E7DFD3] p-5 sm:p-8 lg:p-10 shadow-lg overflow-hidden">
        
        {/* Subtle Paper Noise / Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────────────
           Doodles Header: Paper Airplane + Sparkles + Slogan
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full flex items-center justify-between pb-2 mb-2 select-none">
          {/* Top Left: "ideas create inspire" Oval Doodle */}
          <div className="relative inline-flex items-center">
            <div className="relative px-3.5 py-1 rounded-full border-2 border-dashed border-stone-700/70 -rotate-3 bg-white/40 shadow-xs">
              <span className="font-marker text-xs sm:text-sm font-bold text-stone-800 tracking-wide">
                ideas › create › inspire
              </span>
            </div>
            {/* Hand-drawn Sparkle Doodle */}
            <span className="absolute -bottom-6 left-3 font-marker text-lg text-stone-700 select-none">
              ✦
            </span>
          </div>

          {/* Top Right: Paper Airplane Doodle with Dashed Flight Path */}
          <div className="relative flex items-center gap-1.5 -rotate-6">
            <svg className="w-16 sm:w-24 h-6 text-stone-500/80" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3">
              <path d="M 0 25 Q 40 5 80 15" />
            </svg>
            <div className="transform rotate-12 text-stone-800">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-xs" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
           Hero Centerpiece: Giant 3D Purple PORTFOLIO + Elga Cutout
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] flex flex-col items-center justify-center my-2">
          
          {/* Bouncing Chunky 3D Block Letters: P O R T F O L I O (Reference Style) */}
          <div className="absolute inset-x-0 top-6 sm:top-8 flex items-center justify-center gap-1 sm:gap-2.5 lg:gap-3 select-none pointer-events-none z-0">
            <span className="chunky-portfolio-letter text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none transform -rotate-6">P</span>
            <span className="chunky-portfolio-letter text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none transform rotate-3 -mt-2">O</span>
            <span className="chunky-portfolio-letter text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none transform -rotate-3 mt-1">R</span>
            <span className="chunky-portfolio-letter text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-none transform rotate-6 -mt-3">T</span>
            <span className="chunky-portfolio-letter text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none transform -rotate-4 mt-2">F</span>
            <span className="chunky-portfolio-letter text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none transform rotate-4 -mt-1">O</span>
            <span className="chunky-portfolio-letter text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none transform -rotate-2">L</span>
            <span className="chunky-portfolio-letter text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-none transform rotate-3 -mt-2">I</span>
            <span className="chunky-portfolio-letter text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none transform -rotate-6 mt-1">O</span>
          </div>

          {/* Cutout of Elga in Toga Standing / Interacting with the Letters */}
          <div className="relative z-10 mt-16 sm:mt-20 lg:mt-24 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px] flex flex-col items-center justify-end pointer-events-auto">
            <div className="relative w-full flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile-graduate-cutout.png"
                alt="Elga Alfareza, S.Kom. - Sarjana Komputer Universitas Bumigora Cum Laude"
                {...{ fetchpriority: 'high' }}
                className="w-full h-auto max-h-[460px] sm:max-h-[520px] lg:max-h-[580px] object-contain select-none filter drop-shadow-xl transform transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* Black Marker Role Badge under Elga (Reference Style: SOFTWARE ENGINEER) */}
            <div className="relative -mt-4 z-20">
              <div className="px-5 py-1.5 rounded-full bg-stone-900 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg border border-stone-800 flex items-center gap-2 transform -rotate-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span>FULL STACK &amp; AI SPECIALIST</span>
              </div>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           Scrapbook Middle Content: Hanging Lanyard (Left) + About me (Right)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-6 pt-6 border-t border-[#E7DFD3]">
          
          {/* ─────────────────────────────────────────────────────────
             LEFT: Hanging Conference / Office Lanyard ID Badge (Reference Feature)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col items-center select-none">
            <div className="relative w-full max-w-[260px] flex flex-col items-center group">
              
              {/* Purple Woven Ribbon Strap Hanging from Top */}
              <div className="w-10 h-16 lanyard-strap rounded-b-md relative z-10 flex flex-col items-center justify-end pb-1 shadow-md">
                {/* Ribbon Stitch Lines */}
                <div className="w-full h-full border-x border-purple-400/30" />
                {/* Silver Metal Swivel Hook / Clip */}
                <div className="w-5 h-4 bg-gradient-to-b from-stone-300 via-stone-100 to-stone-400 rounded-xs border border-stone-500 shadow-sm flex items-center justify-center">
                  <div className="w-2 h-1 bg-stone-600 rounded-xs" />
                </div>
              </div>

              {/* Transparent ID Badge Holder Pouch */}
              <div className="w-full -mt-1 p-3.5 rounded-2xl bg-white/85 backdrop-blur-md border border-stone-300 shadow-2xl transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
                {/* Lanyard Clip Slot Cutout */}
                <div className="w-12 h-2 bg-stone-200/90 rounded-full mx-auto mb-3 border border-stone-300" />
                
                {/* ID Card Inside */}
                <div className="rounded-xl border border-stone-200 bg-gradient-to-b from-stone-50 to-white p-3 flex flex-col items-center text-center shadow-inner">
                  {/* Photo with Sketch / Portrait Styling */}
                  <div className="relative w-28 h-28 rounded-lg overflow-hidden border-2 border-stone-800 bg-stone-100 shadow-sm mb-2.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/elga-graduation-studio.jpg"
                      alt="Elga Alfareza, S.Kom."
                      className="w-full h-full object-cover object-top filter contrast-105"
                    />
                  </div>

                  <h3 className="font-sans text-sm font-bold text-stone-900 leading-tight">
                    Elga Alfareza, S.Kom.
                  </h3>
                  <p className="font-mono text-[0.625rem] text-purple-700 font-semibold mt-0.5 tracking-wider uppercase">
                    FULL STACK &amp; AI SPECIALIST
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-stone-200 w-full flex items-center justify-between text-[0.5625rem] font-mono text-stone-500">
                    <span>UNIV. BUMIGORA</span>
                    <span className="font-bold text-emerald-700">IPK 3.76</span>
                  </div>

                  {/* Faux Barcode */}
                  <div className="mt-2 w-full h-4 flex items-center justify-center gap-0.5 opacity-60">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-full bg-stone-800 inline-block ${i % 3 === 0 ? 'w-1' : 'w-0.5'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Masking tape on bottom corner */}
                <div className="washi-tape absolute -bottom-2 -right-2 w-14 h-5 transform rotate-12 pointer-events-none" />
              </div>

            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────
             RIGHT: "About me" + Bio + Highlight Badges (Reference Feature)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* "About me" Handwritten Heading with Arrow Doodle */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-marker text-2xl sm:text-3xl font-bold text-stone-900">
                About me
              </span>
              <span className="font-marker text-xl text-stone-600 transform rotate-45 select-none">
                ⤷
              </span>
            </div>

            <p className="font-sans text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
              Hey! Saya <strong className="text-stone-900 font-bold">Elga Alfareza, S.Kom.</strong>, seorang Full Stack Developer &amp; AI Specialist yang berfokus membangun sistem tangguh dengan reliabilitas tinggi. Pengalaman saya mencakup rekayasa arsitektur web modern (<strong className="text-purple-800 font-semibold">Full Stack &amp; Vibe Coding</strong> bersertifikasi Google AI), riset Deep Learning Convolutional Neural Networks (CNN) yang terpublikasi di <strong className="text-stone-900 font-semibold">Jurnal Nasional SINTA 4</strong>, serta operasional infrastruktur Server Simbank berstandar mutu dan keselamatan <strong className="text-stone-900 font-semibold">K3 Kemnaker RI</strong>.
            </p>

            {/* Lavender Highlight Badges (Reference Style: Bareium / IIT Madras) */}
            <div className="flex flex-col gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EFEAF8] border border-[#D8CCE8] text-xs sm:text-sm font-bold text-purple-950 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-purple-700" aria-hidden="true" />
                <span>CV Rajawali: System Operator Officer (99.9% Uptime)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EFEAF8] border border-[#D8CCE8] text-xs sm:text-sm font-bold text-purple-950 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-purple-700" aria-hidden="true" />
                <span>Universitas Bumigora: S1 Ilmu Komputer (Cum Laude • IPK 3.76)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EFEAF8] border border-[#D8CCE8] text-xs sm:text-sm font-bold text-purple-950 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-purple-700" aria-hidden="true" />
                <span>Publikasi Ilmiah: Jurnal Nasional Terakreditasi SINTA 4 &amp; Buku ISBN</span>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────
               3-Column Row: Software (Icons) | Experience | Contact
            ───────────────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-4 border-t border-[#E7DFD3]">
              
              {/* Column 1: Software Squircle Icons (4 cols) */}
              <div className="md:col-span-4 flex flex-col">
                <h4 className="font-marker text-lg font-bold text-stone-900 mb-3 marker-underline">
                  Software
                </h4>
                <div className="grid grid-cols-3 gap-2.5">
                  {SOFTWARE_STACK.map((item) => (
                    <div
                      key={item.name}
                      className="squircle-icon group relative"
                      title={`${item.name} • ${item.role}`}
                    >
                      <span className={`material-symbols-outlined text-xl ${item.text}`}>
                        {item.icon}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-[0.6875rem] font-mono text-stone-500">
                  Python • Next.js • TensorFlow • Linux
                </p>
              </div>

              {/* Column 2: Experience Timeline (4 cols) */}
              <div className="md:col-span-4 flex flex-col">
                <h4 className="font-marker text-lg font-bold text-stone-900 mb-3 marker-underline">
                  Experience
                </h4>
                <ul className="space-y-2 text-xs text-stone-700 leading-snug">
                  {EXPERIENCES.map((exp, idx) => (
                    <li key={idx}>
                      <span className="font-mono font-bold text-stone-900 block text-[0.6875rem]">
                        {exp.period}
                      </span>
                      <span className="font-semibold text-purple-900 block">
                        {exp.role}
                      </span>
                      <span className="text-stone-500 text-[0.6875rem]">
                        {exp.org}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact Details (4 cols) */}
              <div className="md:col-span-4 flex flex-col">
                <h4 className="font-marker text-lg font-bold text-stone-900 mb-3 marker-underline">
                  Contact
                </h4>
                <ul className="space-y-2 text-xs text-stone-700 font-medium">
                  {/* Gmail */}
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-red-600">mail</span>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="hover:underline text-left truncate text-stone-800"
                      title="Salin email"
                    >
                      {copied ? 'Email Tersalin!' : EMAIL_ADDRESS}
                    </button>
                  </li>
                  {/* WhatsApp */}
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-emerald-600">chat</span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-bold text-emerald-800"
                    >
                      +62 852-3820-8849
                    </a>
                  </li>
                  {/* LinkedIn */}
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-blue-700">link</span>
                    <a
                      href="https://linkedin.com/in/elga-alfareza"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-stone-800"
                    >
                      linkedin.com/in/elga-alfareza
                    </a>
                  </li>
                  {/* GitHub */}
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-stone-900">code</span>
                    <a
                      href="https://github.com/ElgaAlfarza"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-stone-800"
                    >
                      github.com/ElgaAlfarza
                    </a>
                  </li>
                  {/* Location */}
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-stone-600">pin_drop</span>
                    <span className="text-stone-600">Mataram, Lombok, NTB</span>
                  </li>
                </ul>

                <div className="mt-3 pt-2">
                  <a
                    href={CV_DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 text-white font-mono text-xs font-bold hover:bg-stone-800 transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    <span>Unduh CV Lengkap</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
