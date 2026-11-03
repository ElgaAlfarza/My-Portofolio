'use client'

import { useState } from 'react'
import CreativeScrapbookLanding from '@/components/MasterScrapbook/CreativeScrapbookLanding'
import ElgaMasterPortfolio from '@/components/MasterScrapbook/ElgaMasterPortfolio'

export default function HomePage() {
  const [viewMode, setViewMode] = useState('creative') // 'creative' (Default: 1:1 Match Mockup) or 'extended'

  return (
    <div className="relative">
      {viewMode === 'creative' ? (
        <CreativeScrapbookLanding />
      ) : (
        <ElgaMasterPortfolio />
      )}

      {/* Subtle Bottom-Right Floating Switcher */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-stone-900/90 backdrop-blur-md border border-stone-700 shadow-2xl select-none">
        <button
          type="button"
          onClick={() => setViewMode('creative')}
          className={`px-3 py-1.5 rounded-full font-mono text-[11px] font-bold transition-all cursor-pointer ${
            viewMode === 'creative'
              ? 'bg-[#583FA2] text-white shadow-md'
              : 'text-stone-400 hover:text-white'
          }`}
          title="Tampilan Kreatif Mockup (Halaman Pertama)"
        >
          🎨 Creative Design
        </button>
        <button
          type="button"
          onClick={() => setViewMode('extended')}
          className={`px-3 py-1.5 rounded-full font-mono text-[11px] font-bold transition-all cursor-pointer ${
            viewMode === 'extended'
              ? 'bg-[#583FA2] text-white shadow-md'
              : 'text-stone-400 hover:text-white'
          }`}
          title="Tampilan Extended (17 Bagian Lengkap)"
        >
          📑 Extended View
        </button>
      </div>
    </div>
  )
}
