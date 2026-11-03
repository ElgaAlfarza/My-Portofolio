'use client'

import { useState } from 'react'
import {
  IconPython,
  IconJS,
  IconReact,
  IconNode,
  IconSQL,
  IconAWS,
  DoodleSparkle,
  DoodlePaperAirplane,
  DoodleSmileyFace,
  DoodleCrown
} from '../Icons/ScrapbookIcons'

const GITHUB_URL = 'https://github.com/ElgaAlfarza'
const LINKEDIN_URL = 'https://linkedin.com/in/elga-alfareza'
const WHATSAPP_URL = 'https://wa.me/6285238208849'
const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'
const DRIVE_URL = 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

export default function MasterScrapbookPoster() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <div id="top" className="relative w-full max-w-5xl mx-auto my-4 select-none filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.28)]">
      
      {/* ═══════════════════════════════════════════════════════════════
         UPPER CANVAS: WARM CREAM CRUMPLED CRAFT PAPER
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full rounded-t-3xl bg-[#F6F1EA] border-t-2 border-x-2 border-[#E3DBD0] p-6 sm:p-10 lg:p-12 overflow-hidden">
        
        {/* Realistic Crumpled Paper Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.045] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(#1E1A17 1px, transparent 1px)`,
            backgroundSize: '12px 12px'
          }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────────────
           TOP HEADER ROW: "ideas / create / inspire" + 3D PORTFOLIO + Airplane
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full grid grid-cols-12 gap-2 items-start z-10">
          
          {/* Top-Left: "ideas / create / inspire" Hand-Drawn Stamp + Star Doodle */}
          <div className="col-span-3 sm:col-span-2 flex flex-col items-start pt-2">
            <div className="relative p-2.5 sm:p-3 rounded-[50%] border-2 border-stone-800 text-stone-900 -rotate-12 bg-white/40 shadow-xs">
              <span className="font-marker text-xs sm:text-sm font-bold leading-tight block text-center">
                ideas<br />create<br />inspire
              </span>
            </div>
            {/* 4-point star doodle */}
            <div className="mt-3 ml-2 text-stone-800">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
              </svg>
            </div>
          </div>

          {/* Center: 3D Chunky Letters with Sitting Person Cutout in the Middle */}
          <div className="col-span-7 sm:col-span-8 relative flex items-center justify-center min-h-[170px] sm:min-h-[220px]">
            
            {/* The 3D Letters Row */}
            <div className="relative w-full flex items-center justify-between sm:justify-center sm:gap-6 z-10">
              
              {/* Left Letter Group: P, O, R, T */}
              <div className="flex items-center gap-1 sm:gap-2 leading-none">
                <div className="flex flex-col">
                  <span className="chunky-poster-letter text-6xl sm:text-8xl md:text-9xl -rotate-6">P</span>
                  <span className="chunky-poster-letter text-5xl sm:text-7xl md:text-8xl rotate-3 -mt-3 sm:-mt-5">O</span>
                </div>
                <div className="flex flex-col ml-[-4px]">
                  <span className="chunky-poster-letter text-6xl sm:text-8xl md:text-9xl rotate-2">R</span>
                  <span className="chunky-poster-letter text-5xl sm:text-7xl md:text-8xl -rotate-3 -mt-3 sm:-mt-5">T</span>
                </div>
              </div>

              {/* CENTER STAGE: Sitting Person Cutout between (R T) and (F L I O) */}
              <div className="relative z-20 mx-[-16px] sm:mx-[-24px] mb-[-12px] sm:mb-[-18px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/scrapbook-person-sitting.png"
                  alt="Elga Alfareza - Software Engineer"
                  className="w-28 sm:w-40 md:w-48 h-auto object-contain filter drop-shadow-[0_12px_20px_rgba(30,15,60,0.45)] transform hover:scale-105 transition-transform"
                />
              </div>

              {/* Right Letter Group: F, L, I, O */}
              <div className="flex items-center gap-1 sm:gap-2 leading-none">
                <div className="flex flex-col">
                  <span className="chunky-poster-letter text-6xl sm:text-8xl md:text-9xl -rotate-3">F</span>
                  <span className="chunky-poster-letter text-5xl sm:text-7xl md:text-8xl rotate-2 -mt-3 sm:-mt-5">L</span>
                </div>
                <div className="flex flex-col ml-[-4px]">
                  <span className="chunky-poster-letter text-5xl sm:text-7xl md:text-8xl rotate-6">I</span>
                  <span className="chunky-poster-letter text-6xl sm:text-8xl md:text-9xl -rotate-4 -mt-3 sm:-mt-5">O</span>
                </div>
              </div>

            </div>

            {/* Black Torn Tape / Gaffer Tape Strip: "SOFTWARE ENGINEER" directly below right letters */}
            <div className="absolute right-0 sm:right-6 bottom-[-22px] sm:bottom-[-26px] z-30 transform rotate-[-2deg]">
              <div className="px-3.5 py-1 rounded-sm bg-stone-950 text-white font-mono text-[0.6875rem] sm:text-xs font-black tracking-widest uppercase shadow-md border-y border-stone-800">
                SOFTWARE ENGINEER
              </div>
              {/* Hand-drawn underline scribbles */}
              <div className="w-full flex justify-center mt-0.5 text-stone-900">
                <svg className="w-24 sm:w-28 h-2 text-stone-900" viewBox="0 0 100 8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M 0 4 Q 25 1 50 5 T 100 3" />
                </svg>
              </div>
            </div>

          </div>

          {/* Top-Right: Paper Airplane with Dashed Flight Path Loop */}
          <div className="col-span-2 flex flex-col items-end pt-1">
            <div className="transform rotate-12">
              <DoodlePaperAirplane className="w-16 sm:w-20 h-8 text-stone-900" />
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           MIDDLE SECTION: Lanyard ID Badge (Left) + "About me" & Bio (Right)
        ───────────────────────────────────────────────────────────── */}
        <div id="about" className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-10 sm:mt-12 items-start z-10">
          
          {/* ─────────────────────────────────────────────────────────
             LEFT: Hanging Lanyard ID Badge (Exact Mockup Match)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[210px] group">
              
              {/* Woven Fabric Purple Lanyard Ribbon running down from the top */}
              <div className="w-full flex justify-center">
                <div 
                  className="w-8 h-20 sm:h-24 rounded-t-sm shadow-md relative"
                  style={{
                    background: 'linear-gradient(90deg, #371D68 0%, #5B38A8 40%, #764FC4 50%, #5B38A8 60%, #371D68 100%)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
                  }}
                >
                  {/* Metal Swivel Hook / Clip */}
                  <div className="absolute -bottom-4 inset-x-1.5 h-5 rounded-sm bg-gradient-to-b from-stone-400 via-stone-200 to-stone-500 shadow-md border border-stone-400 flex items-center justify-center">
                    <div className="w-2.5 h-1 rounded-full bg-stone-700" />
                  </div>
                </div>
              </div>

              {/* Clear Plastic ID Card Holder Sleeve with Glossy Edge */}
              <div className="relative mt-2 p-2.5 pb-3 rounded-xl bg-white/90 backdrop-blur-xs border-2 border-stone-300 shadow-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                
                {/* Washi Tape Securing Bottom-Left Corner */}
                <div className="washi-tape absolute -bottom-3 -left-3 w-16 h-6 -rotate-12 z-20 pointer-events-none" />

                {/* ID Card Slot at top */}
                <div className="w-12 h-1.5 mx-auto mb-2 rounded-full bg-stone-300/80 border border-stone-400/50" />

                {/* Grayscale Sketch Portrait of Elga */}
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-300 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile-face.png"
                    alt="Elga Alfareza, S.Kom."
                    className="w-full h-full object-cover object-top filter grayscale contrast-125"
                  />
                </div>

                {/* Name & Title on Card (Exact Mockup Match) */}
                <div className="mt-2.5 text-center">
                  <h3 className="font-sans text-sm font-black text-stone-900 leading-tight">
                    Elga Alfareza
                  </h3>
                  <p className="font-mono text-[0.5625rem] text-stone-600 font-bold tracking-wider uppercase mt-0.5">
                    SOFTWARE ENGINEER
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────
             RIGHT: "⮢ About me" + Bio + 2 Highlighted Lavender Pills
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 flex flex-col justify-start pt-2">
            
            {/* Title: Curved Arrow + "About me" */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="font-marker text-2xl sm:text-3xl font-bold text-[#4D2C91]">
                ⮢
              </span>
              <h2 className="font-marker text-2xl sm:text-3xl font-bold text-[#4D2C91]">
                About me
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="font-sans text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
              Hey! I&apos;m <strong className="text-stone-950 font-bold">Elga Alfareza</strong>, a results-oriented Software Engineer &amp; AI Specialist. I build robust, high-throughput systems, optimizing for performance and reliability. My focus is on clean architecture, efficient data pipelines, Deep Learning CNN, and leveraging modern technologies like AWS, Redis, and Kafka to solve complex problems.
            </p>

            {/* 2 Purple Highlighted Pills (Exact Mockup Match) */}
            <div className="flex flex-col gap-2 mt-4">
              
              {/* Highlight Pill 1: University & Degree */}
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-[#E2DAF5] border border-[#CBBEE8] text-[#341B66] shadow-xs">
                <span className="font-sans text-xs sm:text-sm font-black">
                  Universitas Bumigora:&nbsp;
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold">
                  B.Sc. Informatics (Cum Laude 3.76)
                </span>
              </div>

              {/* Highlight Pill 2: Research & Publication */}
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-[#E2DAF5] border border-[#CBBEE8] text-[#341B66] shadow-xs">
                <span className="font-sans text-xs sm:text-sm font-black">
                  Riset Publikasi SINTA 4:&nbsp;
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold">
                  Deep Learning CNN Aksara Sasak (Akurasi 92.3%)
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           LOWER SECTION: 3 EQUAL COLUMNS (Software | Experience | Contact)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 pt-6 border-t border-stone-300/60 z-10">
          
          {/* ═════════════════════════════════════════════════════════
             COLUMN 1: SOFTWARE (Exact Mockup Match)
          ═════════════════════════════════════════════════════════ */}
          <div id="skills" className="flex flex-col items-center sm:items-start">
            
            {/* Title with Curved Underline */}
            <div className="mb-4 text-center sm:text-left">
              <h3 className="font-marker text-2xl font-bold text-stone-900 inline-block">
                Software
              </h3>
              <div className="w-16 h-1 bg-stone-900 rounded-full mt-0.5" />
            </div>

            {/* 6 App Icons in 3x2 Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#005B9F] flex items-center justify-center shadow-md border-2 border-white transform hover:scale-110 transition-transform">
                <span className="font-bold text-xs text-white">Java</span>
              </div>
              <div className="w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform">
                <IconPython className="w-12 h-12" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#007396] flex items-center justify-center shadow-md border-2 border-white transform hover:scale-110 transition-transform">
                <span className="font-bold text-xs text-white">Docker</span>
              </div>
              <div className="w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform">
                <IconAWS className="w-12 h-12" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#DC382D] flex items-center justify-center shadow-md border-2 border-white transform hover:scale-110 transition-transform">
                <span className="font-bold text-xs text-white font-mono">redis</span>
              </div>
              <div className="w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform">
                <IconReact className="w-12 h-12" />
              </div>
            </div>

          </div>

          {/* ═════════════════════════════════════════════════════════
             COLUMN 2: EXPERIENCE (Vertical Timeline - Exact Mockup Match)
          ═════════════════════════════════════════════════════════ */}
          <div id="experience" className="flex flex-col">
            
            {/* Title with Curved Underline */}
            <div className="mb-4">
              <h3 className="font-marker text-2xl font-bold text-stone-900 inline-block">
                Experience
              </h3>
              <div className="w-20 h-1 bg-stone-900 rounded-full mt-0.5" />
            </div>

            {/* Vertical Timeline List */}
            <div className="flex flex-col gap-3 font-sans text-xs text-stone-800">
              
              <div>
                <p className="font-bold text-stone-950">2025 - Present:</p>
                <p className="text-stone-700">Freelance Developer, Flyers Soft.</p>
                <p className="text-[0.6875rem] text-stone-500 font-mono">CV Rajawali (Simbank 99.9% Uptime)</p>
              </div>

              <div>
                <p className="font-bold text-stone-950">2023 - 2025: Software Engineer II,</p>
                <p className="text-stone-700">Appian Corporation.</p>
                <p className="text-[0.6875rem] text-stone-500 font-mono">CV Sinar Mutiara Bali (QC &amp; K3)</p>
              </div>

              <div>
                <p className="font-bold text-stone-950">2022 - 2023: Software Engineer I,</p>
                <p className="text-stone-700">Appian Corporation.</p>
              </div>

              <div>
                <p className="font-bold text-stone-950">2019 - 2022:</p>
                <p className="text-stone-700">Software Engineer, TCS &amp; OpenText.</p>
                <p className="text-[0.6875rem] text-stone-500 font-mono">IPHI &amp; Kemendikbudristek RI</p>
              </div>

            </div>

          </div>

          {/* ═════════════════════════════════════════════════════════
             COLUMN 3: CONTACT (Colored Badges - Exact Mockup Match)
          ═════════════════════════════════════════════════════════ */}
          <div id="contact" className="flex flex-col relative">
            
            {/* Title with Curved Underline */}
            <div className="mb-4">
              <h3 className="font-marker text-2xl font-bold text-stone-900 inline-block">
                Contact
              </h3>
              <div className="w-16 h-1 bg-stone-900 rounded-full mt-0.5" />
            </div>

            {/* List with Icons */}
            <div className="flex flex-col gap-2.5 font-sans text-xs text-stone-800">
              
              {/* Gmail */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-white border border-stone-300 flex items-center justify-center shrink-0">
                  <span className="font-bold text-[10px] text-red-600 font-mono">M</span>
                </div>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-[#4D2C91] truncate font-medium">
                  {EMAIL_ADDRESS}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xs">call</span>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-green-700 font-medium">
                  +62 852 3820 8849
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#0A66C2] text-white flex items-center justify-center shrink-0">
                  <span className="font-bold text-[10px] font-sans">in</span>
                </div>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] truncate font-medium">
                  linkedin.com/in/elga-alfareza
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-stone-950 truncate font-medium">
                  github.com/ElgaAlfarza
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-stone-800 text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xs text-red-400">place</span>
                </div>
                <span className="font-medium">Lombok, Indonesia</span>
              </div>

            </div>

            {/* Right margin hand-drawn star & smiley doodles */}
            <div className="absolute top-12 -right-4 sm:-right-6 flex flex-col items-center gap-4 text-stone-800 pointer-events-none">
              <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
                <path d="M12 2 L14 8 L20 9 L15 14 L17 20 L12 17 L7 20 L9 14 L4 9 L10 8 Z" />
              </svg>
              <DoodleSmileyFace className="w-5 h-5 text-stone-800" />
            </div>

          </div>

        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════
         TORN PAPER DIVIDER (REALISTIC JAGGED RIPPED FIBER TRANSITION)
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden leading-none select-none my-[-1px] z-20">
        <svg
          className="w-full h-10 sm:h-12 text-[#18365D] filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,40 L0,12 Q30,26 60,8 T120,24 T180,10 T240,28 T300,12 T360,26 T420,9 T480,27 T540,11 T600,29 T660,10 T720,26 T780,8 T840,28 T900,11 T960,27 T1020,12 T1080,29 T1140,10 T1200,24 L1200,40 Z" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
         LOWER CANVAS: DEEP DENIM BLUE PAPER (SELECTED WORK 5 CARDS)
      ═══════════════════════════════════════════════════════════════ */}
      <div id="works" className="relative w-full rounded-b-3xl bg-[#18365D] border-b-2 border-x-2 border-[#10243E] p-6 sm:p-10 lg:p-12 text-white overflow-hidden shadow-2xl">
        
        {/* Subtle Denim Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
          aria-hidden="true"
        />

        {/* Section Header: "Selected Work" with Crown Doodle */}
        <div className="relative flex items-center justify-center mb-8 z-10">
          <div className="inline-block relative text-center">
            {/* Small Crown Doodle above 'k' */}
            <div className="absolute -top-4 right-1 text-white">
              <DoodleCrown className="w-6 h-4 text-white" />
            </div>
            <h2 className="font-marker text-3xl sm:text-4xl font-bold tracking-wide text-white">
              Selected Work
            </h2>
            {/* Double underline */}
            <div className="w-full h-0.5 bg-white/70 rounded-full mt-1" />
            <div className="w-3/4 mx-auto h-0.5 bg-white/50 rounded-full mt-0.5" />
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
           5 TAPED PROJECT CARDS WITH HAND-DRAWN CHALK NUMBERS 1, 2, 3, 4, 5
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-4 z-10">
          
          {/* ────── CARD 1: URL SHORTENER & DEEP-LINKING ────── */}
          <div className="flex flex-col group">
            {/* Chalk Number 1 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-cyan-200/90 mb-1 leading-none select-none">
              1
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[290px] border border-stone-200 transform -rotate-1 group-hover:rotate-0 transition-transform">
              {/* Masking Tape on Top-Left */}
              <div className="washi-tape absolute -top-2 left-2 w-12 h-4 -rotate-12 z-20 pointer-events-none" />
              
              <div>
                {/* Visual Mockup Box */}
                <div className="w-full aspect-[4/3] rounded-md bg-[#F0F4F8] border border-stone-200 p-2 mb-2.5 flex flex-col items-center justify-center relative">
                  {/* Blue Chain Link Badge */}
                  <div className="w-8 h-8 rounded-lg bg-[#0070F3] text-white flex items-center justify-center shadow-xs mb-1">
                    <span className="material-symbols-outlined text-lg">link</span>
                  </div>
                  {/* Smartphone Graphic */}
                  <div className="w-12 h-14 rounded-md border-2 border-stone-800 bg-white shadow-xs p-1 flex flex-col justify-between">
                    <div className="w-full h-1 bg-blue-500 rounded-full" />
                    <div className="w-full h-1 bg-stone-300 rounded-full" />
                    <div className="w-full h-1 bg-stone-300 rounded-full" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  URL SHORTENER &amp; DEEP-LINKING
                </h4>
              </div>

              {/* Tagline */}
              <p className="font-sans text-[0.625rem] text-stone-500 font-semibold border-t border-stone-200 pt-1.5 mt-2">
                URL shortener
              </p>
            </div>
          </div>

          {/* ────── CARD 2: NEAR-REAL-TIME CLICK ANALYTICS ────── */}
          <div className="flex flex-col group">
            {/* Chalk Number 2 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-emerald-200/90 mb-1 leading-none select-none">
              2
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[290px] border border-stone-200 transform rotate-1 group-hover:rotate-0 transition-transform">
              {/* Masking Tape on Top-Left & Top-Right */}
              <div className="washi-tape absolute -top-2 left-2 w-10 h-4 -rotate-6 z-20 pointer-events-none" />
              <div className="washi-tape absolute -top-2 right-2 w-10 h-4 rotate-6 z-20 pointer-events-none" />
              
              <div>
                {/* Visual Architecture Diagram Box */}
                <div className="w-full aspect-[4/3] rounded-md bg-[#F8FAFC] border border-stone-200 p-1.5 mb-2.5 flex flex-col items-center justify-center">
                  <div className="px-2 py-0.5 rounded bg-red-100 border border-red-300 text-red-800 font-mono text-[8px] font-bold">
                    BigQuery
                  </div>
                  <div className="w-0.5 h-2 bg-stone-400 my-0.5" />
                  <div className="px-2.5 py-0.5 rounded bg-blue-100 border border-blue-300 text-blue-800 font-mono text-[8px] font-bold">
                    Pipeline ➔ Redis
                  </div>
                  <div className="w-0.5 h-2 bg-stone-400 my-0.5" />
                  <div className="px-2 py-0.5 rounded bg-purple-100 border border-purple-300 text-purple-800 font-mono text-[8px] font-bold">
                    Real-time Click
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  NEAR-REAL-TIME CLICK ANALYTICS
                </h4>
              </div>

              {/* Tagline */}
              <p className="font-sans text-[0.625rem] text-stone-500 font-semibold border-t border-stone-200 pt-1.5 mt-2">
                Click analytics
              </p>
            </div>
          </div>

          {/* ────── CARD 3: DASHBOARD PERFORMANCE OPTIMIZATION ────── */}
          <div className="flex flex-col group">
            {/* Chalk Number 3 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-amber-200/90 mb-1 leading-none select-none">
              3
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[290px] border border-stone-200 transform -rotate-1 group-hover:rotate-0 transition-transform">
              {/* Black Electrical Tape at Top Center */}
              <div className="absolute -top-2 inset-x-8 h-4 bg-stone-950 shadow-sm transform rotate-1 z-20 pointer-events-none" />
              
              <div>
                {/* Visual Architecture Flow Diagram Box */}
                <div className="w-full aspect-[4/3] rounded-md bg-[#F8FAFC] border border-stone-200 p-1.5 mb-2.5 flex flex-col items-center justify-center">
                  <div className="grid grid-cols-2 gap-1 w-full text-center">
                    <div className="p-1 rounded bg-stone-100 border border-stone-300 text-[7px] font-bold">Client UI</div>
                    <div className="p-1 rounded bg-stone-100 border border-stone-300 text-[7px] font-bold">Async API</div>
                  </div>
                  <div className="w-full flex justify-center my-0.5 text-stone-500 text-[8px]">⬇ ⬇</div>
                  <div className="w-full p-1 rounded bg-emerald-50 border border-emerald-300 text-emerald-900 text-[7px] font-bold text-center">
                    High-Throughput Simbank
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  DASHBOARD PERFORMANCE OPTIMIZATION
                </h4>
              </div>

              {/* Tagline */}
              <p className="font-sans text-[0.625rem] text-stone-500 font-semibold border-t border-stone-200 pt-1.5 mt-2">
                Async dashboard
              </p>
            </div>
          </div>

          {/* ────── CARD 4: LOG-SUMMARIZATION TOOL WITH LLM ────── */}
          <div className="flex flex-col group">
            {/* Chalk Number 4 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-rose-200/90 mb-1 leading-none select-none">
              4
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[290px] border border-stone-200 transform rotate-2 group-hover:rotate-0 transition-transform">
              {/* Masking Tape on Top-Right */}
              <div className="washi-tape absolute -top-2 right-2 w-12 h-4 rotate-12 z-20 pointer-events-none" />
              
              <div>
                {/* Visual Datadog Dashboard Box */}
                <div className="w-full aspect-[4/3] rounded-md bg-stone-950 p-2 mb-2.5 flex flex-col justify-between text-white border border-stone-800">
                  <div className="flex justify-between items-center text-[7px] font-mono text-cyan-300">
                    <span>Datadog Metric</span>
                    <span>CNN / LLM</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 my-1">
                    <span className="font-bold text-purple-400 text-[10px]">DATADOG</span>
                    <span className="text-stone-400 text-[10px]">➔</span>
                    <span className="text-base">🧠</span>
                  </div>
                  <div className="w-full h-1 bg-purple-600 rounded-full" />
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  LOG-SUMMARIZATION TOOL WITH LLM
                </h4>
              </div>

              {/* Tagline */}
              <p className="font-sans text-[0.625rem] text-stone-500 font-semibold border-t border-stone-200 pt-1.5 mt-2">
                Datadog dashboard tool
              </p>
            </div>
          </div>

          {/* ────── CARD 5: SAIL COMPONENT WRAPPING TOOL ────── */}
          <div className="flex flex-col group">
            {/* Chalk Number 5 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-violet-200/90 mb-1 leading-none select-none">
              5
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[290px] border border-stone-200 transform -rotate-1 group-hover:rotate-0 transition-transform">
              {/* Masking Tape on Top-Left & Top-Right */}
              <div className="washi-tape absolute -top-2 left-2 w-10 h-4 -rotate-6 z-20 pointer-events-none" />
              <div className="washi-tape absolute -top-2 right-2 w-10 h-4 rotate-6 z-20 pointer-events-none" />
              
              <div>
                {/* Visual VS Code IDE Editor Screen Box */}
                <div className="w-full aspect-[4/3] rounded-md bg-[#1E1E1E] p-2 mb-2.5 text-white font-mono text-[7px] flex flex-col justify-between border border-stone-800">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-stone-400 ml-1 text-[6px]">App.tsx</span>
                  </div>
                  <div className="text-cyan-300">import &#123; Component &#125; from &apos;sail&apos;;</div>
                  <div className="text-purple-300">export default function Wrap() &#123;</div>
                  <div className="text-yellow-300 pl-2">return &lt;Wrapper /&gt;;</div>
                  <div className="text-purple-300">&#125;</div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  SAIL COMPONENT WRAPPING TOOL
                </h4>
              </div>

              {/* Tagline */}
              <p className="font-sans text-[0.625rem] text-stone-500 font-semibold border-t border-stone-200 pt-1.5 mt-2">
                Visual code editor
              </p>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           BOTTOM SCRAPBOOK FOOTER NOTES: Taped Note (Left) + Paperclip Note (Right)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-6 border-t border-white/20 z-10">
          
          {/* Bottom-Left: Taped Paper Note "Let's build something amazing together! 😊" */}
          <div className="relative bg-white text-stone-900 px-4 py-2.5 rounded-md shadow-lg transform -rotate-3 border border-stone-300">
            {/* Masking tape on top */}
            <div className="washi-tape absolute -top-2 left-6 w-14 h-4 rotate-2 z-20 pointer-events-none" />
            <p className="font-marker text-xs sm:text-sm font-bold text-stone-900 leading-snug">
              Let&apos;s build<br />
              <span className="border-b-2 border-stone-900">something</span><br />
              amazing together! 😊
            </p>
          </div>

          {/* Bottom-Center: Sketched Oval Scribble */}
          <div className="text-white/40 pointer-events-none">
            <svg className="w-28 h-6 stroke-current fill-none" viewBox="0 0 120 25" strokeWidth="1.5">
              <ellipse cx="60" cy="12" rx="55" ry="8" transform="rotate(-2 60 12)" />
            </svg>
          </div>

          {/* Bottom-Right: Paper Note Fastened with REAL METAL PAPERCLIP 📎 */}
          <div className="relative bg-[#FFFDF7] text-stone-900 px-5 py-3 rounded-md shadow-lg transform rotate-2 border border-stone-200">
            {/* Realistic Metallic Paperclip Overlapping Top-Right Corner */}
            <div className="absolute -top-3.5 right-2 z-30 pointer-events-none">
              <svg className="w-6 h-10 text-stone-600 filter drop-shadow-md" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {/* Paperclip Loop Wire */}
                <path d="M 6 12 V 28 C 6 33 18 33 18 28 V 8 C 18 3 10 3 10 8 V 26 C 10 29 14 29 14 26 V 12" />
              </svg>
            </div>

            <p className="font-handwriting text-base sm:text-lg font-bold text-stone-900 flex items-center gap-1.5">
              <span>Thanks for visiting!</span>
              <span className="text-red-500 text-lg">❤️</span>
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
