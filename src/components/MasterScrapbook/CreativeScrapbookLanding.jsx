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

const WHATSAPP_URL = 'https://wa.me/6285238208849'
const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/elga-alfareza'
const GITHUB_URL = 'https://github.com/ElgaAlfarza'
const DRIVE_URL = 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

export default function CreativeScrapbookLanding() {
  const [photoMode, setPhotoMode] = useState('mockup') // 'mockup' (sitting persona) or 'real' (Elga in toga)
  const [showStudioModal, setShowStudioModal] = useState(false)
  const [activeProjectModal, setActiveProjectModal] = useState(null)
  const [showAllProjectsModal, setShowAllProjectsModal] = useState(false)
  const [showCertificationsModal, setShowCertificationsModal] = useState(false)

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-[#F4EFE6] text-slate-800 antialiased overflow-x-hidden selection:bg-purple-300 selection:text-purple-950 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════
         STAGE 0: STICKY SCRAPBOOK HEADER / NAVBAR (Exact Mockup Match)
      ═════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF7F2]/90 border-b border-[#E7DFD3] shadow-xs transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand Logo: elga's PORTFOLIO */}
          <a href="#hero" className="flex items-center gap-2 group cursor-pointer select-none">
            <div className="flex items-baseline gap-1.5 transform group-hover:scale-105 transition-transform">
              <span className="font-marker text-2xl sm:text-3xl font-bold text-[#583FA2] -rotate-6">
                elga&apos;s
              </span>
              <span className="font-sans font-black text-lg sm:text-xl tracking-wider text-[#1E1A34] uppercase">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Center Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-full border border-purple-200/80 shadow-xs text-xs font-bold text-stone-700">
            <a 
              href="#hero" 
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#583FA2] text-white shadow-xs transition hover:bg-[#472E8A]"
            >
              <i className="fa-solid fa-house text-[10px]"></i>
              <span>Home</span>
            </a>
            <a href="#about" className="px-2.5 py-1 rounded-full hover:text-[#583FA2] hover:bg-purple-50 transition">
              About
            </a>
            <a href="#skills" className="px-2.5 py-1 rounded-full hover:text-[#583FA2] hover:bg-purple-50 transition">
              Skills
            </a>
            <a href="#experience" className="px-2.5 py-1 rounded-full hover:text-[#583FA2] hover:bg-purple-50 transition">
              Experience
            </a>
            <a href="#projects" className="px-2.5 py-1 rounded-full hover:text-[#583FA2] hover:bg-purple-50 transition">
              Projects
            </a>
            <button 
              type="button"
              onClick={() => setShowCertificationsModal(true)} 
              className="px-2.5 py-1 rounded-full hover:text-[#583FA2] hover:bg-purple-50 transition cursor-pointer"
            >
              Gallery
            </button>
            <a href="#footer" className="px-2.5 py-1 rounded-full hover:text-[#583FA2] hover:bg-purple-50 transition">
              Contact
            </a>
          </nav>

          {/* Right Green WhatsApp Button */}
          <div className="flex items-center gap-3">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Single Scrapbook Page Canvas Container */}
      <main className="w-full max-w-6xl mx-auto my-3 sm:my-6 px-2 sm:px-4">
        
        {/* ═════════════════════════════════════════════════════════════
           STAGE 1: WARM CREAM CRAFT PAPER — HERO SECTION (Exact Mockup Match)
        ═════════════════════════════════════════════════════════════ */}
        <section id="hero" className="relative w-full rounded-t-3xl bg-[#FAF7F2] border-t-2 border-x-2 border-[#E7DFD3] p-5 sm:p-8 lg:p-12 overflow-hidden shadow-sm">
          
          {/* Subtle Paper Noise Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
            aria-hidden="true"
          />

          {/* Top Doodles Row: "Dream it Build it Innovate it" + Airplane + "Let's Code Together!" */}
          <div className="relative w-full flex items-start justify-between z-20 pointer-events-none">
            
            {/* Top-Left: "Dream it / Build it / Innovate it" Cursive Script with Action Rays */}
            <div className="relative flex flex-col -rotate-12 mt-1 ml-1 sm:ml-4 select-none">
              <div className="absolute -top-3 -left-3 text-stone-800">
                <svg className="w-5 h-5 text-stone-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="2" y1="2" x2="8" y2="8" />
                  <line x1="12" y1="0" x2="12" y2="7" />
                  <line x1="22" y1="2" x2="16" y2="8" />
                </svg>
              </div>

              <span className="font-handwriting text-xl sm:text-3xl font-bold text-stone-900 leading-tight">
                Dream it
              </span>
              <span className="font-handwriting text-xl sm:text-3xl font-bold text-stone-900 leading-tight ml-3">
                Build it
              </span>
              <span className="font-handwriting text-xl sm:text-3xl font-bold text-stone-900 leading-tight ml-6">
                Innovate it
              </span>

              <div className="absolute -bottom-2 -left-2 text-stone-800">
                <svg className="w-4 h-4 text-stone-800" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="1" y1="19" x2="7" y2="13" />
                  <line x1="0" y1="9" x2="8" y2="11" />
                </svg>
              </div>
            </div>

            {/* Top-Right: Airplane + "Let's Code Together!" Speech Bubble + Sparkles */}
            <div className="flex flex-col items-end mr-1 sm:mr-4 select-none">
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

              {/* Action Exclamation Rays */}
              <div className="flex items-center gap-2 mt-2 font-marker text-stone-900">
                <DoodleExclamation className="w-5 h-5 text-stone-900" />
                <DoodleSmileyFace className="w-5 h-5 text-stone-900" />
              </div>
            </div>

          </div>

          {/* Hero Center Stage: 3D PORT / FOLIO Letters + Cutout on Purple Patch */}
          <div className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] grid grid-cols-1 lg:grid-cols-12 gap-4 items-center mt-[-2.5rem] sm:mt-[-3.5rem]">
            
            {/* Left Column (7 cols): Giant 3D Purple Letters + Tape Banner + CTA */}
            <div className="lg:col-span-7 flex flex-col items-start z-10 pt-4 sm:pt-10">
              
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
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo('#projects')
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
                    className="w-full h-auto max-h-[460px] object-contain select-none filter drop-shadow-[0_15px_30px_rgba(30,15,60,0.3)] transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => setShowStudioModal(true)}
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
                    className="relative z-10 w-full h-auto max-h-[460px] object-contain select-none filter drop-shadow-[0_15px_25px_rgba(30,15,60,0.35)] transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => setShowStudioModal(true)}
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

        </section>

        {/* ═════════════════════════════════════════════════════════════
           TORN PAPER DIVIDER 1: CREAM TO WHITE JAGGED RIPPED TRANSITION
        ═════════════════════════════════════════════════════════════ */}
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

        {/* ═════════════════════════════════════════════════════════════
           STAGE 2: WHITE CRAFT PAPER — ABOUT ME & MY SKILLS (Exact Mockup Match)
        ═════════════════════════════════════════════════════════════ */}
        <section id="about" className="relative w-full bg-white border-x-2 border-[#E7DFD3] p-5 sm:p-8 lg:p-12 overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left (4 cols): Pinned Polaroid Photo Card with Washi Tape */}
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
                  onClick={() => setShowStudioModal(true)}
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
                      SOFTWARE ENGINEER
                    </p>
                  </div>

                  {/* Translucent Washi Tape on Bottom-Right Corner */}
                  <div className="washi-tape absolute -bottom-2 -right-2 w-14 h-5 rotate-12 z-20 pointer-events-none" />
                </div>

              </div>
            </div>

            {/* Center (5 cols): "About Me" Bio & Contact Panel */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              {/* "About Me" Title with Purple Underline & Sparkle Doodle */}
              <div className="mb-3 relative inline-block">
                <h2 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900 inline-block relative">
                  <span>About Me</span>
                  <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
                </h2>
                <div className="absolute -top-3 -right-6 pointer-events-none">
                  <DoodleSparkle className="w-4 h-4 text-[#583FA2]" />
                </div>
              </div>

              {/* Bio Paragraph */}
              <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                Hey! I&apos;m <strong className="text-stone-900 font-bold">Elga Alfareza, S.Kom.</strong>, a results-oriented Software Engineer. I build robust, high-throughput systems, optimizing for performance and reliability. My focus is on clean architecture, efficient data pipelines, Deep Learning CNN (Jurnal Nasional SINTA 4), and leveraging modern technologies like AWS, Redis, and Kafka to solve complex problems.
              </p>

              {/* Unified Info Card Panel (Light Purple Container with 3 Rows) */}
              <div className="flex flex-col gap-2.5 p-3.5 rounded-2xl bg-[#ECE9F4]/80 border border-[#DDD6EA] text-stone-800 shadow-xs">
                
                {/* Row 1: Graduation Cap + Degree + University */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#3C2566] text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base">school</span>
                  </div>
                  <div className="leading-tight">
                    <p className="font-sans text-xs font-bold text-stone-900">
                      B.Sc. Informatics
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

            {/* Right (3 cols): "My Skills !!" + 6 Glossy 3D Purple Squircles */}
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

        </section>

        {/* ═════════════════════════════════════════════════════════════
           TORN PAPER DIVIDER 2: WHITE TO DARK NAVY TORN EDGE TRANSITION
        ═════════════════════════════════════════════════════════════ */}
        <div className="relative w-full overflow-hidden leading-none select-none my-[-1px] z-20">
          <svg
            className="w-full h-8 sm:h-11 text-[#152042] filter drop-shadow-sm"
            viewBox="0 0 1200 35"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,35 L0,14 Q30,6 65,18 T135,10 T205,22 T275,8 T345,20 T415,9 T485,21 T555,10 T625,23 T695,11 T765,22 T835,7 T905,20 T975,10 T1045,22 T1115,8 T1200,16 L1200,35 Z" />
          </svg>
        </div>

        {/* ═════════════════════════════════════════════════════════════
           STAGE 3: DARK NAVY TORN CANVAS — EXPERIENCE SECTION (Exact Mockup Match)
        ═════════════════════════════════════════════════════════════ */}
        <section id="experience" className="relative w-full bg-[#152042] text-white border-x-2 border-[#1E2C58] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-lg">
          
          {/* Subtle Chalkboard Texture Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: '14px 14px'
            }}
            aria-hidden="true"
          />

          {/* Section Header Row: "Experience" + Subtitle (Left) & "Keep Learning Keep Growing" (Right) */}
          <div className="relative w-full flex flex-col sm:flex-row sm:items-start justify-between gap-4 z-10 mb-8 sm:mb-12">
            
            {/* Title & Subtitle */}
            <div className="flex flex-col items-start">
              <h2 className="font-marker text-3xl sm:text-4xl font-bold text-white inline-block relative">
                <span>Experience</span>
                <span className="block h-1 bg-[#8B5CF6] rounded-full mt-1 w-full" />
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2">
                My professional journey in the world of technology
              </p>
            </div>

            {/* Handwritten White Script on the Right: "Keep Learning Keep Growing" */}
            <div className="flex items-center -rotate-3 select-none">
              <span className="font-handwriting text-xl sm:text-2xl text-purple-200/90 font-bold tracking-wide">
                Keep Learning<br />Keep Growing
              </span>
            </div>

          </div>

          {/* Connected Horizontal Timeline with 3 Milestone Nodes */}
          <div className="relative w-full z-10 py-4">
            
            {/* Continuous Horizontal Connecting Line (visible on desktop) */}
            <div className="hidden lg:block absolute top-[28px] inset-x-16 h-1 bg-gradient-to-r from-purple-400/30 via-purple-300 to-purple-400/30 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 relative z-10">
              
              {/* Milestone 1: 2025 - Present (Freelance Developer & Live Server Operator) */}
              <div className="flex flex-col items-center text-center group">
                {/* Purple Circular Milestone Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#6D28D9] to-[#4C1D95] border-2 border-purple-300/80 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform mb-3">
                  <i className="fa-solid fa-briefcase text-lg text-white"></i>
                </div>
                <span className="font-mono text-xs font-bold text-purple-300 tracking-wider">
                  2025 - Present
                </span>
                <h3 className="font-sans text-base font-extrabold text-white mt-1">
                  Freelance Developer
                </h3>
                <p className="font-sans text-xs text-slate-300 mt-1 max-w-[260px] leading-relaxed">
                  Building web applications and digital solutions.
                </p>
                <span className="mt-2 text-[10px] font-mono text-purple-200/70 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30">
                  CV Rajawali Simbank Operator
                </span>
              </div>

              {/* Milestone 2: 2023 - 2025 (Software Engineer II / Operational & QC) */}
              <div className="flex flex-col items-center text-center group">
                {/* Purple Circular Milestone Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#6D28D9] to-[#4C1D95] border-2 border-purple-300/80 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform mb-3">
                  <i className="fa-solid fa-building text-lg text-white"></i>
                </div>
                <span className="font-mono text-xs font-bold text-purple-300 tracking-wider">
                  2023 - 2025
                </span>
                <h3 className="font-sans text-base font-extrabold text-white mt-1">
                  Software Engineer II
                </h3>
                <p className="font-sans text-xs text-slate-300 mt-1 max-w-[260px] leading-relaxed">
                  PT. Techno Indonesia
                </p>
                <span className="mt-2 text-[10px] font-mono text-purple-200/70 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30">
                  CV Sinar Mutiara Bali (QC Testing)
                </span>
              </div>

              {/* Milestone 3: 2019 - 2022 (Software Engineer, TCS / Kemendikbudristek) */}
              <div className="flex flex-col items-center text-center group">
                {/* Purple Circular Milestone Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#6D28D9] to-[#4C1D95] border-2 border-purple-300/80 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform mb-3">
                  <i className="fa-solid fa-laptop text-lg text-white"></i>
                </div>
                <span className="font-mono text-xs font-bold text-purple-300 tracking-wider">
                  2019 - 2022
                </span>
                <h3 className="font-sans text-base font-extrabold text-white mt-1">
                  Software Engineer, TCS
                </h3>
                <p className="font-sans text-xs text-slate-300 mt-1 max-w-[260px] leading-relaxed">
                  OpenText
                </p>
                <span className="mt-2 text-[10px] font-mono text-purple-200/70 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30">
                  Kemendikbud (SMPN 20) &amp; IPHI
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* ═════════════════════════════════════════════════════════════
           TORN PAPER DIVIDER 3: DARK NAVY TO LIGHT CREAM TORN EDGE
        ═════════════════════════════════════════════════════════════ */}
        <div className="relative w-full overflow-hidden leading-none select-none my-[-1px] z-20">
          <svg
            className="w-full h-8 sm:h-11 text-[#FAF7F2] filter drop-shadow-sm"
            viewBox="0 0 1200 35"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,35 L0,10 Q35,22 70,8 T140,24 T210,10 T280,24 T350,9 T420,23 T490,11 T560,25 T630,9 T700,24 T770,12 T840,25 T910,10 T980,23 T1050,11 T1120,24 T1200,9 L1200,35 Z" />
          </svg>
        </div>

        {/* ═════════════════════════════════════════════════════════════
           STAGE 4: LIGHT CREAM CRAFT PAPER — SELECTED WORK (Exact Mockup Match)
        ═════════════════════════════════════════════════════════════ */}
        <section id="projects" className="relative w-full bg-[#FAF7F2] border-x-2 border-[#E7DFD3] p-5 sm:p-8 lg:p-12 overflow-hidden shadow-sm">
          
          {/* Header Row: "Selected Work !!" + Subtitle (Left) & "View All Projects ->" (Right) */}
          <div className="relative w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 z-10">
            
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <h2 className="font-marker text-3xl sm:text-4xl font-bold text-stone-900 inline-block relative">
                  <span>Selected Work</span>
                  <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
                </h2>
                <div className="flex items-center font-marker text-stone-800">
                  <DoodleExclamation className="w-5 h-5 text-stone-800" />
                </div>
              </div>
              <p className="font-sans text-xs sm:text-sm text-stone-600 mt-1">
                Some of my featured projects
              </p>
            </div>

            {/* "View All Projects ->" Pill Button */}
            <button
              type="button"
              onClick={() => setShowAllProjectsModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-stone-800/80 bg-white hover:bg-stone-50 text-stone-900 font-sans text-xs font-bold shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View All Projects</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </button>

          </div>

          {/* 3 Project Cards Grid (Pinned with Washi Tape at Top Corners) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            
            {/* ─────────────────────────────────────────────────────────
               CARD 1: AI Health Predictor (Exact Mockup Match)
            ───────────────────────────────────────────────────────── */}
            <div className="relative bg-white rounded-2xl p-4 shadow-xl border border-stone-200/90 flex flex-col justify-between group transform hover:-translate-y-1.5 transition-all duration-300">
              
              {/* Kraft Washi Tape on Top Corners */}
              <div className="washi-tape absolute -top-3 -left-2 w-14 h-5 -rotate-12 z-20 pointer-events-none" />
              <div className="washi-tape absolute -top-3 -right-2 w-14 h-5 rotate-12 z-20 pointer-events-none" />

              {/* Floating Purple Heart Pulse Badge Icon */}
              <div className="absolute -top-3 -right-2 z-30 w-8 h-8 rounded-full bg-[#583FA2] text-white flex items-center justify-center shadow-md">
                <i className="fa-solid fa-heart-pulse text-xs text-white"></i>
              </div>

              <div>
                {/* Screenshot Frame Preview: Dark UI with Glowing Blue Brain */}
                <div className="relative w-full aspect-[16/11] rounded-xl bg-gradient-to-tr from-[#0D1527] to-[#1E293B] overflow-hidden border border-slate-700 shadow-inner p-3 flex flex-col justify-between">
                  {/* Top bar with mini dots */}
                  <div className="flex items-center justify-between text-[8px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live Telemetry
                    </span>
                    <span className="bg-purple-900/60 text-purple-200 px-1.5 py-0.5 rounded">Scikit-Learn</span>
                  </div>

                  {/* Center glowing brain & ECG waveform representation */}
                  <div className="relative flex items-center justify-around my-1">
                    <div className="space-y-1 text-[9px] font-mono text-cyan-300">
                      <p className="font-bold text-white text-[11px]">Stroke ML</p>
                      <p>Acc: 94.2%</p>
                      <p>Lat: &lt;120ms</p>
                    </div>
                    {/* Glowing Brain Silhouette Vector */}
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 text-2xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                      <i className="fa-solid fa-brain"></i>
                    </div>
                  </div>

                  {/* Bottom mini metric bars */}
                  <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[94%]"></div>
                  </div>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="font-sans text-base font-extrabold text-stone-900 mt-4 leading-snug">
                  AI Health Predictor
                </h3>
                <p className="font-sans text-xs text-stone-600 mt-1">
                  Stroke prediction using Machine Learning
                </p>
              </div>

              {/* View Project Pill Button */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal({
                    title: 'AI Health Predictor (Stroke Risk ML Model)',
                    category: 'Machine Learning & Healthcare AI',
                    description: 'Model machine learning untuk deteksi dini risiko stroke berdasarkan multi-indikator klinis pasien (hipertensi, glukosa darah, BMI, riwayat medis). Dilengkapi dashboard Streamlit interaktif dengan analisis feature importance.',
                    stack: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'NumPy'],
                    accuracy: '94.2% Test Accuracy',
                    link: DRIVE_URL,
                    linkLabel: 'Buka Riset di Google Drive'
                  })}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#583FA2] hover:bg-[#472E8A] text-white font-sans text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>View Project</span>
                  <i className="fa-solid fa-arrow-right text-[9px]"></i>
                </button>
                <span className="font-mono text-[10px] text-stone-500 font-semibold">Python • ML</span>
              </div>

            </div>

            {/* ─────────────────────────────────────────────────────────
               CARD 2: Gemah Ripah Tani (Exact Mockup Match)
            ───────────────────────────────────────────────────────── */}
            <div className="relative bg-white rounded-2xl p-4 shadow-xl border border-stone-200/90 flex flex-col justify-between group transform hover:-translate-y-1.5 transition-all duration-300">
              
              {/* Kraft Washi Tape on Top Corners */}
              <div className="washi-tape absolute -top-3 -left-2 w-14 h-5 -rotate-12 z-20 pointer-events-none" />
              <div className="washi-tape absolute -top-3 -right-2 w-14 h-5 rotate-12 z-20 pointer-events-none" />

              {/* Floating Green Leaf Badge Icon */}
              <div className="absolute -top-3 -right-2 z-30 w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-md">
                <i className="fa-solid fa-leaf text-xs text-white"></i>
              </div>

              <div>
                {/* Screenshot Frame Preview: Green Agriculture Marketplace Mobile Screens */}
                <div className="relative w-full aspect-[16/11] rounded-xl bg-gradient-to-tr from-[#064E3B] to-[#047857] overflow-hidden border border-emerald-600 shadow-inner p-3 flex flex-col justify-between">
                  {/* Top bar with mini dots */}
                  <div className="flex items-center justify-between text-[8px] text-emerald-200 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Mobile Marketplace
                    </span>
                    <span className="bg-emerald-900/60 text-emerald-100 px-1.5 py-0.5 rounded">Android / Web</span>
                  </div>

                  {/* Overlapping smartphone cards representation */}
                  <div className="relative flex items-center justify-center gap-2 my-1">
                    <div className="w-16 h-20 rounded-lg bg-emerald-900/90 border border-emerald-400/60 p-1.5 flex flex-col justify-between text-[7px] text-white font-sans shadow-md">
                      <span className="font-bold text-amber-300 truncate">Katalog Tani</span>
                      <div className="h-6 rounded bg-emerald-700/60 flex items-center justify-center text-xs">🌾</div>
                      <span className="text-[6px] text-emerald-200">Hasil Bumi</span>
                    </div>
                    <div className="w-16 h-20 rounded-lg bg-emerald-950 border border-emerald-400/80 p-1.5 flex flex-col justify-between text-[7px] text-white font-sans shadow-lg -mt-2">
                      <span className="font-bold text-emerald-300 truncate">Pemesanan</span>
                      <div className="h-6 rounded bg-emerald-800/80 flex items-center justify-center text-xs">🛒</div>
                      <span className="text-[6px] text-emerald-200">Direct Chat</span>
                    </div>
                  </div>

                  {/* Bottom status bar */}
                  <div className="flex items-center justify-between text-[7px] text-emerald-200 font-mono">
                    <span>Petani Langsung</span>
                    <span>Multi-Platform</span>
                  </div>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="font-sans text-base font-extrabold text-stone-900 mt-4 leading-snug">
                  Gemah Ripah Tani
                </h3>
                <p className="font-sans text-xs text-stone-600 mt-1">
                  Agriculture Marketplace Android App
                </p>
              </div>

              {/* View Project Pill Button */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal({
                    title: 'Gemah Ripah Tani (Agriculture Marketplace)',
                    category: 'Mobile & Web Application',
                    description: 'Platform marketplace komoditas hasil pertanian lokal yang menghubungkan langsung gabungan kelompok tani (gapoktan) dengan konsumen akhir dan UMKM guna memangkas rantai pasok tengkulak.',
                    stack: ['Next.js', 'React Native', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
                    accuracy: 'Cross-Platform Android & Web',
                    link: GITHUB_URL,
                    linkLabel: 'Lihat Repository di GitHub'
                  })}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#583FA2] hover:bg-[#472E8A] text-white font-sans text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>View Project</span>
                  <i className="fa-solid fa-arrow-right text-[9px]"></i>
                </button>
                <span className="font-mono text-[10px] text-stone-500 font-semibold">React • Mobile</span>
              </div>

            </div>

            {/* ─────────────────────────────────────────────────────────
               CARD 3: Klasifikasi Aksara Sasak (Exact Mockup Match)
            ───────────────────────────────────────────────────────── */}
            <div className="relative bg-white rounded-2xl p-4 shadow-xl border border-stone-200/90 flex flex-col justify-between group transform hover:-translate-y-1.5 transition-all duration-300">
              
              {/* Kraft Washi Tape on Top Corners */}
              <div className="washi-tape absolute -top-3 -left-2 w-14 h-5 -rotate-12 z-20 pointer-events-none" />
              <div className="washi-tape absolute -top-3 -right-2 w-14 h-5 rotate-12 z-20 pointer-events-none" />

              {/* Floating Purple Cultural Temple Badge Icon */}
              <div className="absolute -top-3 -right-2 z-30 w-8 h-8 rounded-full bg-[#6B21A8] text-white flex items-center justify-center shadow-md">
                <i className="fa-solid fa-landmark text-xs text-white"></i>
              </div>

              <div>
                {/* Screenshot Frame Preview: Dark Tablet with Glowing Sasak Script Calligraphy */}
                <div className="relative w-full aspect-[16/11] rounded-xl bg-gradient-to-tr from-[#1E1035] to-[#3B1768] overflow-hidden border border-purple-500 shadow-inner p-3 flex flex-col justify-between">
                  {/* Top bar with mini dots */}
                  <div className="flex items-center justify-between text-[8px] text-purple-200 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> SINTA 4 Terakreditasi
                    </span>
                    <span className="bg-purple-900/80 text-purple-200 px-1.5 py-0.5 rounded">CNN • VGG</span>
                  </div>

                  {/* Center Sasak Script Glyphs Display */}
                  <div className="relative flex flex-col items-center justify-center my-1 text-center">
                    <div className="text-2xl text-amber-300 font-serif font-bold tracking-widest drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]">
                      ᬅ ᬓ ᬱ ᬭ
                    </div>
                    <p className="text-white font-sans font-bold text-[11px] mt-0.5">
                      1.080 Citra Manuskrip Aksara
                    </p>
                    <p className="text-purple-200 font-mono text-[9px]">
                      Akurasi Pengujian: 94.6%
                    </p>
                  </div>

                  {/* Bottom classification confidence indicator */}
                  <div className="w-full bg-purple-950/80 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-300 h-full w-[94.6%]"></div>
                  </div>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="font-sans text-base font-extrabold text-stone-900 mt-4 leading-snug">
                  Klasifikasi Aksara Sasak
                </h3>
                <p className="font-sans text-xs text-stone-600 mt-1">
                  Sasak Script Classification with Deep Learning
                </p>
              </div>

              {/* View Project Pill Button */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal({
                    title: 'Klasifikasi Aksara Sasak (Deep Learning CNN)',
                    category: 'Computer Vision & Riset Publikasi Ilmiah SINTA 4',
                    description: 'Publikasi riset ilmiah terakreditasi SINTA 4 yang mengimplementasikan arsitektur Convolutional Neural Network (CNN VGG16/VGG19) untuk mengenali dan mengklasifikasikan 1.080 citra manuskrip aksara tradisional suku Sasak Lombok.',
                    stack: ['TensorFlow', 'Keras', 'Python', 'OpenCV', 'Jupyter Notebook'],
                    accuracy: '94.6% Test Accuracy (SINTA 4)',
                    link: DRIVE_URL,
                    linkLabel: 'Buka Dokumen Jurnal & Sertifikat SINTA 4'
                  })}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#583FA2] hover:bg-[#472E8A] text-white font-sans text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>View Project</span>
                  <i className="fa-solid fa-arrow-right text-[9px]"></i>
                </button>
                <span className="font-mono text-[10px] text-stone-500 font-semibold">CNN • SINTA 4</span>
              </div>

            </div>

          </div>

        </section>

        {/* ═════════════════════════════════════════════════════════════
           TORN PAPER DIVIDER 4: CREAM TO DARK NAVY FOOTER TRANSITION
        ═════════════════════════════════════════════════════════════ */}
        <div className="relative w-full overflow-hidden leading-none select-none my-[-1px] z-20">
          <svg
            className="w-full h-8 sm:h-11 text-[#152042] filter drop-shadow-sm"
            viewBox="0 0 1200 35"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,35 L0,14 Q30,6 65,18 T135,10 T205,22 T275,8 T345,20 T415,9 T485,21 T555,10 T625,23 T695,11 T765,22 T835,7 T905,20 T975,10 T1045,22 T1115,8 T1200,16 L1200,35 Z" />
          </svg>
        </div>

        {/* ═════════════════════════════════════════════════════════════
           STAGE 5: DARK NAVY TORN CANVAS — FOOTER (Exact Mockup Match)
        ═════════════════════════════════════════════════════════════ */}
        <footer id="footer" className="relative w-full rounded-b-3xl bg-[#152042] text-white border-b-2 border-x-2 border-[#1E2C58] p-6 sm:p-10 overflow-hidden shadow-xl">
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left: elga's PORTFOLIO & Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-baseline gap-1.5">
                <span className="font-marker text-2xl font-bold text-purple-300 -rotate-6">
                  elga&apos;s
                </span>
                <span className="font-sans font-black text-lg tracking-wider text-white uppercase">
                  PORTFOLIO
                </span>
              </div>
              <p className="font-sans text-xs text-slate-300 mt-1">
                Code &nbsp;•&nbsp; Create &nbsp;•&nbsp; Inspire
              </p>
            </div>

            {/* Center: Social Icons Row */}
            <div className="flex items-center gap-3">
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                title="GitHub Profile"
              >
                <i className="fa-brands fa-github text-base"></i>
              </a>
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                title="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin-in text-base"></i>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                title="YouTube"
              >
                <i className="fa-brands fa-youtube text-base"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                title="X / Twitter"
              >
                <i className="fa-brands fa-x-twitter text-base"></i>
              </a>
            </div>

            {/* Right: Copyright & "Thanks for visiting! ♡" */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <p className="font-sans text-[11px] text-slate-300">
                &copy; 2026 Elga Alfareza, S.Kom. All rights reserved.
              </p>
              <span className="font-handwriting text-lg text-purple-200 mt-1 font-bold">
                Thanks for visiting! ♡
              </span>
            </div>

          </div>

        </footer>

      </main>

      {/* ─────────────────────────────────────────────────────────────
         MODAL 1: OFFICIAL GRADUATION PHOTO & CREDENTIALS
      ───────────────────────────────────────────────────────────── */}
      {showStudioModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowStudioModal(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FAF7F2] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowStudioModal(false)}
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
                    <p>Jurnal SINTA 4: Convolutional Neural Network Aksara Sasak (94.6%)</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Pengalaman Kunci:</p>
                    <p>CV Rajawali (Simbank 99.9%), CV Sinar Mutiara Bali (QC), IPHI, Kampus Mengajar 7</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <a
                    href={DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#583FA2] hover:bg-[#472E8A] text-white font-sans text-xs font-bold text-center transition-colors shadow-xs"
                  >
                    Buka Arsip Ijazah &amp; Riset
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
         MODAL 2: PROJECT DETAILS MODAL
      ───────────────────────────────────────────────────────────── */}
      {activeProjectModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveProjectModal(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-white text-stone-900 rounded-2xl p-6 sm:p-7 shadow-2xl border-2 border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
            >
              ✕
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-[#583FA2] font-mono text-xs font-bold mb-2">
              {activeProjectModal.category}
            </span>
            <h3 className="font-sans text-xl font-black text-stone-900">
              {activeProjectModal.title}
            </h3>
            
            <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed mt-3">
              {activeProjectModal.description}
            </p>

            <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200">
              <p className="font-sans text-xs font-bold text-stone-800 mb-1.5">Teknologi yang Digunakan:</p>
              <div className="flex flex-wrap gap-1.5">
                {activeProjectModal.stack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-md bg-white border border-stone-300 font-mono text-[11px] text-stone-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={activeProjectModal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#583FA2] hover:bg-[#472E8A] text-white font-sans text-xs font-bold text-center transition-all shadow-md"
              >
                {activeProjectModal.linkLabel}
              </a>
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="py-2.5 px-4 rounded-xl border border-stone-300 text-stone-700 font-sans text-xs font-bold hover:bg-stone-50"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
         MODAL 3: VIEW ALL PROJECTS MODAL (Shows all 6 Projects)
      ───────────────────────────────────────────────────────────── */}
      {showAllProjectsModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowAllProjectsModal(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#FAF7F2] text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAllProjectsModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer z-10"
            >
              ✕
            </button>

            <h3 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900">
              Semua Portofolio &amp; Karya Pilihan
            </h3>
            <p className="font-sans text-xs sm:text-sm text-stone-600 mt-1 mb-6">
              6 Karya Utama yang Dirancang &amp; Diimplementasikan oleh Elga Alfareza, S.Kom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Item 1 */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Machine Learning</span>
                  <h4 className="font-bold text-sm text-stone-900 mt-2">AI Health Predictor</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">Model inferensi Machine Learning untuk deteksi dini risiko stroke klinis.</p>
                </div>
                <span className="font-mono text-[10px] text-stone-400 mt-3">Accuracy: 94.2%</span>
              </div>

              {/* Item 2 */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Mobile &amp; Web</span>
                  <h4 className="font-bold text-sm text-stone-900 mt-2">Gemah Ripah Tani</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">Marketplace hasil pertanian langsung dari gabungan kelompok tani ke pembeli.</p>
                </div>
                <span className="font-mono text-[10px] text-stone-400 mt-3">Next.js • React Native</span>
              </div>

              {/* Item 3 */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">SINTA 4 Deep Learning</span>
                  <h4 className="font-bold text-sm text-stone-900 mt-2">Klasifikasi Aksara Sasak</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">Pengenalan 1.080 manuskrip aksara Sasak dengan CNN VGG16/VGG19 akurasi 94.6%.</p>
                </div>
                <span className="font-mono text-[10px] text-stone-400 mt-3">Published Journal</span>
              </div>

              {/* Item 4 */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">High-Uptime Pipeline</span>
                  <h4 className="font-bold text-sm text-stone-900 mt-2">Simbank Infrastructure Monitor</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">Monitoring live server transaksi perbankan &amp; transmisi SIM di CV Rajawali (99.9% Uptime).</p>
                </div>
                <span className="font-mono text-[10px] text-stone-400 mt-3">Redis • Linux • PostgreSQL</span>
              </div>

              {/* Item 5 */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Quality Control Web</span>
                  <h4 className="font-bold text-sm text-stone-900 mt-2">Vehicle Inspection &amp; QC System</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">Sistem QC checklist inspeksi kendaraan dan pergudangan di CV Sinar Mutiara Bali.</p>
                </div>
                <span className="font-mono text-[10px] text-stone-400 mt-3">Hardware &amp; Software QC</span>
              </div>

              {/* Item 6 */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">Web Interactive</span>
                  <h4 className="font-bold text-sm text-stone-900 mt-2">Digital Travel Memory &amp; Tourism</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">Portal interaktif pemetaan destinasi pariwisata Lombok dan jejak petualangan digital.</p>
                </div>
                <span className="font-mono text-[10px] text-stone-400 mt-3">Next.js • Tailwind CSS</span>
              </div>

            </div>

            <div className="mt-6 flex justify-end">
              <a
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-xl bg-[#583FA2] text-white font-sans text-xs font-bold hover:bg-[#472E8A]"
              >
                Buka Berkas Lengkap di Google Drive
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
         MODAL 4: CERTIFICATIONS & CREDENTIALS MODAL
      ───────────────────────────────────────────────────────────── */}
      {showCertificationsModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowCertificationsModal(false)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#FAF7F2] text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCertificationsModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer z-10"
            >
              ✕
            </button>

            <h3 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900">
              Sertifikasi &amp; Penghargaan Resmi
            </h3>
            <p className="font-sans text-xs sm:text-sm text-stone-600 mt-1 mb-6">
              Kredensial Terverifikasi Elga Alfareza, S.Kom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2.5">
                <span className="text-xl">🏆</span>
                <div>
                  <p className="font-bold text-stone-900">S1 Teknik Informatika (Cum Laude)</p>
                  <p className="text-stone-600 text-[11px]">Universitas Bumigora • IPK 3.76 / 4.00</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2.5">
                <span className="text-xl">⭐</span>
                <div>
                  <p className="font-bold text-stone-900">Penulis Jurnal Ilmiah SINTA 4</p>
                  <p className="text-stone-600 text-[11px]">Deep Learning CNN Aksara Sasak (94.6%)</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2.5">
                <span className="text-xl">🛡️</span>
                <div>
                  <p className="font-bold text-stone-900">Google AI &amp; Generative AI Essentials</p>
                  <p className="text-stone-600 text-[11px]">Google Career Certificate</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2.5">
                <span className="text-xl">📜</span>
                <div>
                  <p className="font-bold text-stone-900">Komdigi / Kominfo — Junior Web Developer</p>
                  <p className="text-stone-600 text-[11px]">Digital Talent Scholarship (DTS)</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2.5">
                <span className="text-xl">📊</span>
                <div>
                  <p className="font-bold text-stone-900">BPVP Lombok Barat — Excel Lanjutan (20 JP)</p>
                  <p className="text-stone-600 text-[11px]">Kementerian Ketenagakerjaan RI</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2.5">
                <span className="text-xl">🎓</span>
                <div>
                  <p className="font-bold text-stone-900">Kemendikbudristek RI — Kampus Mengajar 7</p>
                  <p className="text-stone-600 text-[11px]">Penugasan SMPN 20 Mataram</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <a
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-xl bg-[#583FA2] text-white font-sans text-xs font-bold hover:bg-[#472E8A]"
              >
                Buka Berkas Sertifikat di Google Drive
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
