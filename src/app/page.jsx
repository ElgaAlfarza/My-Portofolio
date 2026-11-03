'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import FirstPageCreativeMaster from '@/components/MasterScrapbook/FirstPageCreativeMaster'
import Experience from '@/components/Experience/Experience'
import Portfolio from '@/components/Portfolio/Portfolio'
import CraftGallery from '@/components/CraftGallery/CraftGallery'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import MasterScrapbookPoster from '@/components/MasterScrapbook/MasterScrapbookPoster'

export default function HomePage() {
  const [viewMode, setViewMode] = useState('web') // 'web' (matches media_1793682092561_e2dcc3e3.png) or 'poster' (poster scrapbook)

  return (
    <div className="relative min-h-screen bg-[#1A1815] py-4 px-2 sm:px-4">
      {/* Ambient scrap-studio radial lighting */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 15%, rgba(94, 53, 177, 0.25) 0%, transparent 65%), radial-gradient(circle at 80% 80%, rgba(24, 54, 93, 0.28) 0%, transparent 55%)'
        }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 w-full pt-16 sm:pt-20 pb-12 flex flex-col items-center">
        {viewMode === 'web' ? (
          /* ═════════════════════════════════════════════════════════════
             CREATIVE SCRAPBOOK WEB (EXACT MATCH TO USER'S MOCKUP IMAGE)
          ═════════════════════════════════════════════════════════════ */
          <div className="w-full max-w-6xl flex flex-col items-center space-y-6">
            {/* FIRST PAGE: HERO (PORTFOLIO 3D + SITTING PERSON) + ABOUT ME + SKILLS */}
            <FirstPageCreativeMaster />

            {/* SECTION 2: EXPERIENCE ROADMAP (DEEP NAVY BLUE SECTION) */}
            <Experience />

            {/* SECTION 3: SELECTED WORK (PROJECT CARDS PINNED WITH TAPE) */}
            <Portfolio />

            {/* SECTION 4: CREDENTIALS & GALLERY (STUDIO PHOTOS & SINTA 4 ARCHIVE) */}
            <CraftGallery />

            {/* SECTION 5: LIVE CONTACT & WHATSAPP FORM */}
            <Contact />

            {/* SECTION 6: FOOTER WITH PAPERCLIP & COPYRIGHT */}
            <Footer />
          </div>
        ) : (
          /* ═════════════════════════════════════════════════════════════
             POSTER SCRAPBOOK (SINGLE VERTICAL POSTER SHEET)
          ═════════════════════════════════════════════════════════════ */
          <div className="w-full max-w-5xl">
            <MasterScrapbookPoster />
            <Footer />
          </div>
        )}
      </main>

      {/* ─────────────────────────────────────────────────────────────
         FLOATING VIEW MODE SWITCHER (SENIOR DEVELOPER POLISH)
      ───────────────────────────────────────────────────────────── */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-stone-900/90 backdrop-blur-md border border-stone-700/80 shadow-2xl">
        <button
          type="button"
          onClick={() => setViewMode('web')}
          className={`px-3 py-1.5 rounded-full font-mono text-[11px] font-bold transition-all cursor-pointer ${
            viewMode === 'web'
              ? 'bg-[#583FA2] text-white shadow-md'
              : 'text-stone-400 hover:text-white'
          }`}
          title="Tampilan Halaman Pertama Kreatif (Sesuai Desain Mockup)"
        >
          🎨 Web Scrapbook
        </button>
        <button
          type="button"
          onClick={() => setViewMode('poster')}
          className={`px-3 py-1.5 rounded-full font-mono text-[11px] font-bold transition-all cursor-pointer ${
            viewMode === 'poster'
              ? 'bg-[#583FA2] text-white shadow-md'
              : 'text-stone-400 hover:text-white'
          }`}
          title="Tampilan Poster Scrapbook Tunggal"
        >
          📋 Poster View
        </button>
      </div>

    </div>
  )
}
