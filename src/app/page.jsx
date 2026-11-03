import Navbar from '@/components/Navbar/Navbar'
import MasterScrapbookPoster from '@/components/MasterScrapbook/MasterScrapbookPoster'

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#1A1815] py-4 px-2 sm:px-4">
      {/* Subtle ambient lighting behind scrapbook poster */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(94, 53, 177, 0.22) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(24, 54, 93, 0.25) 0%, transparent 50%)'
        }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 w-full pt-16 sm:pt-20 pb-12 flex justify-center">
        <MasterScrapbookPoster />
      </main>

      {/* Discrete bottom copyright & admin portal */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto py-4 text-center border-t border-stone-800/80">
        <p className="font-sans text-xs text-stone-500">
          © {new Date().getFullYear()} Elga Alfareza, S.Kom. • Built with Next.js &amp; Creative Scrapbook Design
        </p>
        <div className="mt-1 flex items-center justify-center gap-4 text-[10px] text-stone-600 font-mono">
          <a href="/admin/login" className="hover:text-stone-400 transition-colors">
            Admin Portal
          </a>
          <span>•</span>
          <a href="https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400 transition-colors">
            Archive Google Drive
          </a>
        </div>
      </footer>
    </div>
  )
}
