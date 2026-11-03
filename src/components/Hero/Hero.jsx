'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  DoodleCrown,
  DoodlePaperAirplane,
  DoodleSmileyFace,
  DoodleExclamation,
  ButtonPurpleArrow,
  SquircleCode
} from '../Icons/ScrapbookIcons'

export default function Hero() {
  const [photoMode, setPhotoMode] = useState('mockup') // 'mockup' (matches template sitting persona) or 'real' (Elga graduation toga)

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative w-full pt-4 pb-8 overflow-hidden select-none">
      
      {/* ─────────────────────────────────────────────────────────────
         Top Paper Canvas with Subtle Texture
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full rounded-3xl bg-[#FAF7F2] border border-[#E7DFD3] p-5 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
        
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
           Doodles: Top Left Script + Top Right Bubbles & Airplane
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full flex items-start justify-between z-20 pointer-events-none">
          
          {/* Top Left: "Dream it / Build it / Innovate it" Cursive Script (Exact Mockup Match) */}
          <div className="flex flex-col -rotate-12 mt-1 ml-1 sm:ml-2">
            <span className="font-handwriting text-lg sm:text-2xl font-bold text-stone-800 leading-tight">
              Dream it
            </span>
            <span className="font-handwriting text-lg sm:text-2xl font-bold text-stone-800 leading-tight ml-2">
              Build it
            </span>
            <span className="font-handwriting text-lg sm:text-2xl font-bold text-stone-800 leading-tight ml-4">
              Innovate it
            </span>
          </div>

          {/* Top Right: Speech Bubble "Let's Code Together!" + Airplane + Exclamations (Exact Mockup Match) */}
          <div className="flex flex-col items-end mr-1 sm:mr-3">
            {/* Paper Airplane with Dashed Flight Path Loop */}
            <div className="transform -rotate-6 mb-1">
              <DoodlePaperAirplane className="w-16 sm:w-20 h-7 text-stone-800" />
            </div>

            {/* Hand-drawn Circular Speech Bubble */}
            <div className="relative px-3.5 py-2 rounded-full border-2 border-dashed border-stone-800 bg-white/70 shadow-xs rotate-6 mt-1">
              <p className="font-marker text-xs sm:text-sm font-bold text-stone-900 leading-tight text-center">
                Let&apos;s<br />Code<br />Together!
              </p>
            </div>

            {/* Floating Sparkles & Smiley Doodles */}
            <div className="flex items-center gap-2 mt-2 font-marker text-stone-800">
              <DoodleExclamation className="w-5 h-5 text-stone-800" />
              <DoodleSmileyFace className="w-5 h-5 text-stone-800" />
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           Hero Center Stage: 3D PORT / FOLIO Letters + Cutout on Purple Patch
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] grid grid-cols-1 lg:grid-cols-12 gap-4 items-center mt-[-3.5rem] sm:mt-[-4rem]">
          
          {/* Left Column (7 cols): Giant 3D Purple Letters + Badge + CTA */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 pt-8 sm:pt-12">
            
            {/* Crown Doodle over Letters (Exact Mockup Match) */}
            <div className="ml-12 sm:ml-20 transform -rotate-12 select-none pointer-events-none animate-pulse">
              <DoodleCrown className="w-9 sm:w-11 h-7 sm:h-8 text-stone-900" />
            </div>

            {/* Giant 3D Purple Block Letters: PORT on row 1, FOLIO on row 2 (Exact Mockup Match) */}
            <div className="flex flex-col leading-[0.88] select-none pointer-events-none">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-3">P</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform rotate-3">O</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-2">R</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform rotate-2">T</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 -mt-3 sm:-mt-6">
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-2">F</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform rotate-2">O</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-3">L</span>
                <span className="chunky-portfolio-letter text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] leading-none transform rotate-3">I</span>
                <span className="chunky-portfolio-letter text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] leading-none transform -rotate-2">O</span>
              </div>
            </div>

            {/* Black Marker Pill: Full Stack & AI Specialist (Exact Mockup Match) */}
            <div className="mt-4 sm:mt-6 inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-stone-950 text-white font-mono text-xs sm:text-sm font-bold shadow-xl border border-stone-800 transform -rotate-1">
              <span>Full Stack &amp;&nbsp;</span>
              <span className="text-purple-400 font-extrabold">AI</span>
              <span>&nbsp;Specialist</span>
            </div>

            {/* Subtitle: Developer • Problem Solver • Tech Enthusiast (Exact Mockup Match) */}
            <p className="mt-2.5 font-marker text-xs sm:text-sm font-bold text-stone-700 tracking-wide">
              Developer &nbsp;•&nbsp; Problem Solver &nbsp;•&nbsp; Tech Enthusiast
            </p>

            {/* CTA Button with Circular Arrow (Exact Mockup Match) */}
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
                  <SquircleCode className="w-11 h-11" />
                </div>
                {/* Elga in Toga with White Contour */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-graduate-cutout.png"
                  alt="Elga Alfareza, S.Kom."
                  className="relative z-10 w-full h-auto max-h-[460px] object-contain select-none filter drop-shadow-[0_15px_25px_rgba(30,15,60,0.35)] transform transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    filter: 'drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(0 15px 25px rgba(20, 10, 45, 0.45))'
                  }}
                />
              </div>
            )}

            {/* Quick Toggle Button between Mockup Persona & Official Graduation Photo */}
            <button
              type="button"
              onClick={() => setPhotoMode(m => m === 'mockup' ? 'real' : 'mockup')}
              className="absolute -bottom-4 right-0 z-30 px-2.5 py-1 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white font-mono text-[10px] tracking-wider transition-all shadow-sm"
              title="Ganti tampilan foto Hero"
            >
              Foto: {photoMode === 'mockup' ? 'Mockup Persona' : 'Wisuda Asli'} ⟳
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}
