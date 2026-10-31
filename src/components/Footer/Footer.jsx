'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [timeStr, setTimeStr] = useState('00:00:00 UTC')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const utc = now.toTimeString().split(' ')[0] + ' UTC'
      setTimeStr(utc)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full relative z-10 mt-10 py-10 bg-[#06070b]/95 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Monogram + Brand + Live Clock */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-container to-cyan-500 flex items-center justify-center text-white font-display-xl font-extrabold text-xs">
              EA
            </span>
            <span className="font-headline-sm text-base text-white font-bold tracking-tight">
              ELGA ALFAREZA, S.KOM.
            </span>
            <span className="tag-tech">
              FULL STACK • AI • IT OPS
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 font-label-mono text-xs text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-primary">
                schedule
              </span>
              SYS_TIME // <span className="text-secondary">{timeStr}</span>
            </span>
            <span className="text-white/20">•</span>
            <span>MATARAM, NTB (-8.5786° S)</span>
          </div>
        </div>

        {/* Center: Social Network Icons */}
        <div className="flex items-center gap-2">
          <a
            aria-label="Code Repository"
            className="w-9 h-9 rounded-full bg-[#111522] hover:bg-primary-container hover:text-white text-on-surface-variant flex items-center justify-center transition-all border border-white/[0.08]"
            href="https://github.com/ElgaAlfarza/My-Portofolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
          </a>
          <a
            aria-label="Professional Network"
            className="w-9 h-9 rounded-full bg-[#111522] hover:bg-primary-container hover:text-white text-on-surface-variant flex items-center justify-center transition-all border border-white/[0.08]"
            href="https://linkedin.com/in/elga-alfareza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">badge</span>
          </a>
          <a
            aria-label="WhatsApp Direct"
            className="w-9 h-9 rounded-full bg-[#111522] hover:bg-emerald-600 hover:text-white text-on-surface-variant flex items-center justify-center transition-all border border-white/[0.08]"
            href="https://wa.me/6285238208849"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">sensors</span>
          </a>
          <a
            aria-label="Electronic Mail"
            className="w-9 h-9 rounded-full bg-[#111522] hover:bg-primary-container hover:text-white text-on-surface-variant flex items-center justify-center transition-all border border-white/[0.08]"
            href="mailto:elgaalfarezabumigora@gmail.com"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </a>
        </div>

        {/* Right: Back to Top + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2 font-label-mono text-xs">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-primary-container hover:text-white text-on-surface-variant border border-white/[0.08] transition-all"
          >
            <span>BACK TO TOP</span>
            <span className="material-symbols-outlined text-[15px]">arrow_upward</span>
          </button>
          <p className="text-outline text-[11px]">
            © {new Date().getFullYear()} ELGA ALFAREZA • SPEC PRECISION
          </p>
        </div>
      </div>
    </footer>
  )
}
