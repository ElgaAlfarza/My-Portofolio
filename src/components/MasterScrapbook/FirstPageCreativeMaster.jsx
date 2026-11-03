'use client'

import { useState } from 'react'
import {
  IconPython,
  IconJS,
  IconReact,
  IconNode,
  IconSQL,
  IconAWS,
  DoodleCrown,
  DoodlePaperAirplane,
  DoodleSmileyFace,
  DoodleExclamation,
  DoodleSparkle,
  DoodleStarHandDrawn,
  ButtonPurpleArrow,
  SquircleCode
} from '../Icons/ScrapbookIcons'

const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'

export default function FirstPageCreativeMaster() {
  const [photoMode, setPhotoMode] = useState('mockup') // 'mockup' (sitting persona) or 'real' (Elga in toga)
  const [showFullPhotoModal, setShowFullPhotoModal] = useState(false)

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto select-none filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.32)]">
      
      {/* ═══════════════════════════════════════════════════════════════
         UPPER CANVAS: WARM CREAM CRAFT PAPER (HERO SECTION)
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full rounded-t-3xl bg-[#FAF7F2] border-t-2 border-x-2 border-[#E7DFD3] p-5 sm:p-8 lg:p-12 overflow-hidden">
        
        {/* Subtle Paper Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────────────
           TOP DOODLES ROW: "Dream it / Build it / Innovate it" + Airplane + Bubble
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full flex items-start justify-between z-20 pointer-events-none">
          
          {/* Top Left: "Dream it / Build it / Innovate it" Cursive Script with Action Rays */}
          <div className="relative flex flex-col -rotate-12 mt-1 ml-1 sm:ml-4">
            {/* 3 action stroke rays top-left */}
            <div className="absolute -top-3 -left-3 text-stone-800">
              <svg className="w-5 h-5 text-stone-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="2" y1="2" x2="8" y2="8" />
                <line x1="12" y1="0" x2="12" y2="7" />
                <line x1="22" y1="2" x2="16" y2="8" />
              </svg>
            </div>

            <span className="font-handwriting text-xl sm:text-3xl font-bold text-stone-850 leading-tight">
              Dream it
            </span>
            <span className="font-handwriting text-xl sm:text-3xl font-bold text-stone-850 leading-tight ml-3">
              Build it
            </span>
            <span className="font-handwriting text-xl sm:text-3xl font-bold text-stone-850 leading-tight ml-6">
              Innovate it
            </span>

            {/* 3 action stroke rays bottom-left */}
            <div className="absolute -bottom-2 -left-2 text-stone-800">
              <svg className="w-4 h-4 text-stone-800" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="1" y1="19" x2="7" y2="13" />
                <line x1="0" y1="9" x2="8" y2="11" />
              </svg>
            </div>
          </div>

          {/* Top Right: Speech Bubble "Let's Code Together!" + Airplane + Exclamations */}
          <div className="flex flex-col items-end mr-1 sm:mr-4">
            {/* Paper Airplane with Dashed Flight Path Loop */}
            <div className="transform -rotate-6 mb-1">
              <DoodlePaperAirplane className="w-16 sm:w-20 h-7 text-stone-900" />
            </div>

            {/* Hand-drawn Circular Speech Bubble */}
            <div className="relative px-3.5 py-2 rounded-full border-2 border-dashed border-stone-800 bg-white/70 shadow-xs rotate-6 mt-1">
              <p className="font-marker text-xs sm:text-sm font-bold text-stone-900 leading-tight text-center">
                Let&apos;s<br />Code<br />Together!
              </p>
            </div>

            {/* Floating Sparkles & Smiley Doodles */}
            <div className="flex items-center gap-2 mt-2 font-marker text-stone-900">
              <DoodleExclamation className="w-5 h-5 text-stone-900" />
              <DoodleSmileyFace className="w-5 h-5 text-stone-900" />
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           HERO CENTER STAGE: 3D PORT / FOLIO Letters + Cutout on Purple Patch
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] grid grid-cols-1 lg:grid-cols-12 gap-4 items-center mt-[-3rem] sm:mt-[-3.5rem]">
          
          {/* Left Column (7 cols): Giant 3D Purple Letters + Tape Banner + CTA */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 pt-6 sm:pt-10">
            
            {/* Crown Doodle perched over Letters */}
            <div className="ml-10 sm:ml-16 transform -rotate-12 select-none pointer-events-none">
              <DoodleCrown className="w-10 sm:w-12 h-7 sm:h-9 text-stone-900" />
            </div>

            {/* Giant 3D Purple Block Letters: PORT on row 1, FOLIO on row 2 (Exact Mockup Match) */}
            <div className="flex flex-col leading-[0.88] select-none pointer-events-none">
              
              {/* Row 1: P O R T */}
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-3">P</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform rotate-3">O</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-2">R</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform rotate-2">T</span>
              </div>

              {/* Row 2: F O L I O */}
              <div className="flex items-center gap-1 sm:gap-2 -mt-3 sm:-mt-6">
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-2">F</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform rotate-2">O</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-3">L</span>
                <span className="chunky-portfolio-letter text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] leading-none transform rotate-3">I</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-2">O</span>
              </div>

            </div>

            {/* Black Brush Tape Banner: "Full Stack & AI Specialist" */}
            <div className="mt-4 sm:mt-5 inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-stone-950 text-white font-mono text-xs sm:text-sm font-bold shadow-xl border border-stone-800 transform -rotate-1">
              <span>Full Stack &amp;&nbsp;</span>
              <span className="text-purple-400 font-extrabold">AI</span>
              <span>&nbsp;Specialist</span>
            </div>

            {/* Subtitle: Developer • Problem Solver • Tech Enthusiast */}
            <p className="mt-2.5 font-marker text-xs sm:text-sm font-bold text-stone-700 tracking-wide">
              Developer &nbsp;•&nbsp; Problem Solver &nbsp;•&nbsp; Tech Enthusiast
            </p>

            {/* CTA Button with Circular Arrow: Explore My Work */}
            <div className="mt-4 sm:mt-5 pointer-events-auto">
              <ButtonPurpleArrow
                href="#works"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('#works')
                }}
              >
                Explore My Work
              </ButtonPurpleArrow>
            </div>

          </div>

          {/* Right Column (5 cols): Cutout on Purple Torn Paper Backdrop Patch */}
          <div className="lg:col-span-5 relative flex items-center justify-center z-10 mt-6 lg:mt-0">
            
            {photoMode === 'mockup' ? (
              /* Exact Artwork from Mockup (Sitting Persona with Sunglasses on Torn Purple Paper) */
              <div className="relative w-full max-w-[360px] flex items-center justify-center">
                {/* Floating </> Squircle Code Badge */}
                <div className="absolute -top-3 -right-2 z-20 transform rotate-12 filter drop-shadow-lg">
                  <SquircleCode className="w-12 h-12" />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-mockup-patch.png"
                  alt="Full Stack & AI Specialist"
                  className="w-full h-auto max-h-[460px] object-contain select-none filter drop-shadow-[0_15px_30px_rgba(30,15,60,0.3)] transform transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            ) : (
              /* Official Real Graduation Cutout of Elga in Toga */
              <div className="relative w-full max-w-[360px] flex items-center justify-center">
                {/* Purple Torn Paper Backdrop Patch */}
                <div className="absolute w-[280px] sm:w-[330px] h-[340px] sm:h-[420px] rounded-3xl bg-[#6E44BA] shadow-2xl overflow-hidden transform rotate-2 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#251252]/50 via-transparent to-white/25" />
                </div>
                {/* Floating </> Badge */}
                <div className="absolute -top-4 -right-2 z-20 transform rotate-12 filter drop-shadow-lg">
                  <SquircleCode className="w-12 h-12" />
                </div>
                {/* Elga in Toga with White Contour */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/elga-sticker-cutout.png"
                  alt="Elga Alfareza, S.Kom."
                  className="relative z-10 w-full h-auto max-h-[460px] object-contain select-none filter drop-shadow-[0_15px_25px_rgba(30,15,60,0.35)] transform transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            )}

            {/* Quick Toggle Button between Mockup Persona & Official Graduation Photo */}
            <button
              type="button"
              onClick={() => setPhotoMode(m => m === 'mockup' ? 'real' : 'mockup')}
              className="absolute -bottom-4 right-0 z-30 px-3 py-1.5 rounded-full bg-stone-900/85 hover:bg-stone-950 text-white font-mono text-[10px] tracking-wider transition-all shadow-md border border-stone-700 cursor-pointer"
              title="Ganti tampilan foto Hero"
            >
              Foto: {photoMode === 'mockup' ? 'Mockup Persona' : 'Wisuda Asli'} ⟳
            </button>

          </div>

        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════
         TORN PAPER DIVIDER 1: JAGGED RIPPED TRANSITION TO ABOUT ME
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden leading-none select-none my-[-1px] z-20">
        <svg
          className="w-full h-8 sm:h-10 text-white filter drop-shadow-sm"
          viewBox="0 0 1200 35"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,35 L0,12 Q35,22 70,10 T140,24 T210,12 T280,26 T350,11 T420,25 T490,13 T560,25 T630,10 T700,24 T770,14 T840,26 T910,12 T980,25 T1050,11 T1120,23 T1200,12 L1200,35 Z" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
         MIDDLE CANVAS: WHITE CRAFT PAPER (ABOUT ME & MY SKILLS SECTION)
      ═══════════════════════════════════════════════════════════════ */}
      <div id="about" className="relative w-full bg-white border-x-2 border-[#E7DFD3] p-5 sm:p-8 lg:p-12 overflow-hidden shadow-sm">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ─────────────────────────────────────────────────────────
             LEFT (4 cols): Taped Polaroid Photo Card (Exact Mockup Match)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[270px] group">
              
              {/* Star Doodles around Polaroid */}
              <div className="absolute -top-3 -left-3 text-stone-700 pointer-events-none">
                <DoodleStarHandDrawn className="w-5 h-5 text-stone-700" />
              </div>
              <div className="absolute top-1/2 -right-4 text-stone-700 pointer-events-none">
                <DoodleSparkle className="w-4 h-4 text-stone-700" />
              </div>

              {/* White Polaroid Card */}
              <div 
                onClick={() => setShowFullPhotoModal(true)}
                title="Klik untuk melihat foto studio wisuda Universitas Bumigora"
                className="p-4 pb-3 rounded-xl bg-white border border-stone-300/80 shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 cursor-pointer"
              >
                
                {/* Translucent Washi Tape on Top-Left Corner */}
                <div className="washi-tape absolute -top-3 -left-2 w-16 h-6 -rotate-12 z-20 pointer-events-none" />
                
                {/* Real Graduation Portrait of Elga */}
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-300 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/elga-id-portrait.png"
                    alt="Elga Alfareza, S.Kom."
                    className="w-full h-full object-cover object-top filter contrast-110 group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Subtle Cum Laude badge */}
                  <div className="absolute top-1.5 right-1.5 bg-amber-400 text-stone-950 font-black text-[8px] px-1.5 py-0.5 rounded shadow-xs">
                    IPK 3.76
                  </div>
                </div>

                {/* Yellow Kraft Tape Label at Bottom (Exact Mockup Match) */}
                <div className="mt-3 py-2 px-3 rounded-md bg-[#F4DF9B] text-stone-900 border border-[#DEBE66] shadow-sm transform rotate-1 text-center">
                  <h3 className="font-sans text-sm font-black leading-tight">
                    Elga Alfareza, S.Kom.
                  </h3>
                  <p className="font-mono text-[0.625rem] text-[#583FA2] font-black uppercase tracking-wider mt-0.5">
                    FULL STACK &amp; AI SPECIALIST
                  </p>
                </div>

                {/* Translucent Washi Tape on Bottom-Right Corner */}
                <div className="washi-tape absolute -bottom-2 -right-2 w-14 h-5 rotate-12 z-20 pointer-events-none" />
              </div>

            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────
             CENTER (5 cols): "About Me" Bio & Unified Info Panel (Exact Mockup Match)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* "About Me" Title with Purple Underline & Sparkle Doodle */}
            <div className="mb-3 relative inline-block">
              <h2 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900 inline-block relative">
                <span>About Me</span>
                {/* Hand-drawn Purple Underline */}
                <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
              </h2>
              <div className="absolute -top-3 -right-6 pointer-events-none">
                <DoodleSparkle className="w-4 h-4 text-[#583FA2]" />
              </div>
            </div>

            {/* Verified Bio Paragraph */}
            <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
              Hey! I&apos;m <strong className="text-stone-900 font-bold">Elga Alfareza, S.Kom.</strong>, a results-oriented Full Stack Developer &amp; AI Specialist from Universitas Bumigora (IPK 3.76, Cum Laude). I build robust, high-throughput systems, optimizing for performance and reliability. My focus is on clean architecture, efficient data pipelines, Deep Learning CNN (Jurnal Nasional SINTA 4), and leveraging modern technologies like AWS, Redis, and Next.js to solve complex problems.
            </p>

            {/* Unified Info Card Panel (Exact Mockup Match: Light Purple Container with 3 Clean Rows) */}
            <div className="flex flex-col gap-2.5 p-3.5 rounded-2xl bg-[#ECE9F4]/80 border border-[#DDD6EA] text-stone-800 shadow-xs">
              
              {/* Row 1: Graduation Cap + Degree + University */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#3C2566] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base">school</span>
                </div>
                <div className="leading-tight">
                  <p className="font-sans text-xs font-bold text-stone-900">
                    B.Sc. Informatics (Cum Laude 3.76)
                  </p>
                  <p className="font-sans text-[0.6875rem] text-stone-600">
                    Universitas Bumigora
                  </p>
                </div>
              </div>

              {/* Row 2: Location Pin */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#3C2566] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base">location_on</span>
                </div>
                <p className="font-sans text-xs font-bold text-stone-900">
                  Lombok, Indonesia
                </p>
              </div>

              {/* Row 3: Email Envelope */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#3C2566] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base">mail</span>
                </div>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="font-sans text-xs font-bold text-[#583FA2] hover:underline truncate"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>

            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────
             RIGHT (3 cols): "My Skills !!" + 6 Squircle App Icons (Exact Mockup Match)
          ───────────────────────────────────────────────────────── */}
          <div id="skills" className="lg:col-span-3 flex flex-col items-center lg:items-start justify-center">
            
            {/* Title with Hand-drawn Underline & Exclamation Rays */}
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900 inline-block relative">
                <span>My Skills</span>
                <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
              </h2>
              <div className="flex items-center font-marker text-stone-800">
                <DoodleExclamation className="w-5 h-5 text-stone-800" />
              </div>
            </div>

            {/* 6 App Icons in 3x2 Grid with Text Labels */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              
              {/* Python */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-pointer">
                  <IconPython className="w-12 h-12" />
                </div>
                <span className="font-sans text-[0.625rem] font-bold text-stone-700">
                  Python
                </span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-pointer">
                  <IconJS className="w-12 h-12" />
                </div>
                <span className="font-sans text-[0.625rem] font-bold text-stone-700">
                  JavaScript
                </span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-pointer">
                  <IconReact className="w-12 h-12" />
                </div>
                <span className="font-sans text-[0.625rem] font-bold text-stone-700">
                  React
                </span>
              </div>

              {/* Node.js */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-pointer">
                  <IconNode className="w-12 h-12" />
                </div>
                <span className="font-sans text-[0.625rem] font-bold text-stone-700">
                  Node.js
                </span>
              </div>

              {/* SQL */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-pointer">
                  <IconSQL className="w-12 h-12" />
                </div>
                <span className="font-sans text-[0.625rem] font-bold text-stone-700">
                  SQL
                </span>
              </div>

              {/* AWS */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-pointer">
                  <IconAWS className="w-12 h-12" />
                </div>
                <span className="font-sans text-[0.625rem] font-bold text-stone-700">
                  AWS
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════
         PHOTO MODAL: OFFICIAL GRADUATION CREDENTIALS
      ═══════════════════════════════════════════════════════════════ */}
      {showFullPhotoModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowFullPhotoModal(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FAF7F2] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullPhotoModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer z-10"
              aria-label="Tutup popup"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative rounded-xl overflow-hidden border-2 border-stone-300 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/elga-graduation-studio.jpg"
                  alt="Elga Alfareza, S.Kom. - Wisudawan Universitas Bumigora"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E2DAF5] text-[#341B66] font-mono text-xs font-bold w-fit mb-2">
                  🎓 Cum Laude (IPK 3.76)
                </div>
                <h3 className="font-sans text-xl font-black text-stone-900">
                  Elga Alfareza, S.Kom.
                </h3>
                <p className="font-mono text-xs text-[#583FA2] font-bold mt-0.5">
                  FULL STACK &amp; AI SPECIALIST
                </p>

                <div className="flex flex-col gap-2 mt-4 font-sans text-xs text-stone-700">
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Pendidikan Resmi:</p>
                    <p>S1 Teknik Informatika — Universitas Bumigora (2024)</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Publikasi Ilmiah:</p>
                    <p>Jurnal SINTA 4: Convolutional Neural Network Aksara Sasak (92.3%)</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <a
                    href="https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#4D2C91] hover:bg-[#3B1F75] text-white font-sans text-xs font-bold text-center transition-colors shadow-sm"
                  >
                    Buka Arsip Ijazah &amp; Riset
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
