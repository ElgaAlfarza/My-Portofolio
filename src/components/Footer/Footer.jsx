'use client'

const GITHUB_URL = 'https://github.com/ElgaAlfarza'
const LINKEDIN_URL = 'https://linkedin.com/in/elga-alfareza'

export default function Footer() {
  return (
    <footer className="w-full bg-[#10223B] border-t border-[#091526] text-white py-8 sm:py-10 select-none mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: elga's PORTFOLIO + Code • Create • Inspire (Exact Mockup Match) */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-baseline">
            <span className="font-handwriting text-2xl text-purple-300 font-bold mr-1.5">
              elga&apos;s
            </span>
            <span className="font-sans font-black text-lg tracking-tight text-white uppercase">
              PORTFOLIO
            </span>
          </div>
          <p className="font-marker text-xs text-stone-300 tracking-wider mt-0.5">
            Code &nbsp;•&nbsp; Create &nbsp;•&nbsp; Inspire
          </p>
        </div>

        {/* Center: Vertical Divider + Social Icons (Exact Mockup Match) */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block w-px h-6 bg-white/20" aria-hidden="true" />
          
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-stone-900 flex items-center justify-center transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Copyright & Corner Doodle (Exact Mockup Match) */}
        <div className="flex flex-col items-center md:items-end">
          <p className="font-sans text-xs text-stone-400">
            © {new Date().getFullYear()} Elga Alfareza, S.Kom. All rights reserved.
          </p>
          <div className="mt-1 flex items-center gap-1.5 -rotate-3 text-stone-300">
            <span className="font-handwriting text-base font-bold">Thanks for visiting!</span>
            <span className="text-red-400">❤️</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
