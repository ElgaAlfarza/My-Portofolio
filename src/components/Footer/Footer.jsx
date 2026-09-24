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

  return (
    <footer className="w-full relative z-10 mt-margin py-space-xl bg-surface-container-lowest/90 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-space-lg">
        {/* Left: Brand + Coordinates + Live Clock */}
        <div className="flex flex-col items-center md:items-start gap-space-xs">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-space-xs">
            <span className="font-headline-sm text-base sm:text-headline-sm text-on-surface font-semibold">
              ELGA ALFAREZA, S.KOM.
            </span>
            <span className="font-label-mono text-[11px] text-secondary px-space-xs py-0.5 rounded bg-surface-container border border-white/[0.04]">
              IT OPERATIONS &amp; AI ARCH
            </span>
          </div>

          <div className="flex items-center gap-space-sm font-label-mono text-label-mono text-on-surface-variant text-xs">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-primary">
                schedule
              </span>
              SYS_TIME // <span className="text-primary">{timeStr}</span>
            </span>
            <span className="text-surface-bright">•</span>
            <span>LAT: -8.5786° S</span>
          </div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-space-xs">
          <a
            aria-label="Code Repository"
            className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant flex items-center justify-center transition-all border border-white/[0.05]"
            href="https://github.com/ElgaAlfarza/My-Portofolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
          </a>
          <a
            aria-label="Professional Network"
            className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant flex items-center justify-center transition-all border border-white/[0.05]"
            href="https://linkedin.com/in/elga-alfareza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">badge</span>
          </a>
          <a
            aria-label="Broadcast Dispatch"
            className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant flex items-center justify-center transition-all border border-white/[0.05]"
            href="https://wa.me/6285238208849"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">sensors</span>
          </a>
          <a
            aria-label="Electronic Mail"
            className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant flex items-center justify-center transition-all border border-white/[0.05]"
            href="mailto:elgaalfarezabumigora@gmail.com"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </a>
        </div>

        {/* Right: Spec Precision Copyright */}
        <div className="font-label-mono text-label-mono text-on-surface-variant text-center md:text-right text-xs">
          <p>© 2026 ALL RIGHTS RESERVED.</p>
          <p className="text-surface-bright mt-0.5">BUILT WITH SPEC PRECISION</p>
        </div>
      </div>
    </footer>
  )
}
