'use client'

import { useState, useEffect } from 'react'

const QUICK_JUMPS = [
  { code: '01', label: 'Identity',     href: '#about'       },
  { code: '02', label: 'Books',        href: '#books'       },
  { code: '03', label: 'Skills 3D',    href: '#skills'      },
  { code: '04', label: 'Works',        href: '#works'       },
  { code: '05', label: 'Certificates', href: '#credentials' },
  { code: '06', label: 'Timeline',     href: '#experience'  },
  { code: '07', label: 'Gallery',      href: '#craft'       },
]

export default function JumpNav() {
  const [localTime, setLocalTime] = useState('WITA UTC+8')

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Makassar',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
        setLocalTime(`${formatted} WITA`)
      } catch {
        setLocalTime('WITA UTC+8')
      }
    }
    updateClock()
    const id = setInterval(updateClock, 1000)
    return () => clearInterval(id)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      aria-label="System Telemetry and Quick Section Index"
      className="w-full flex items-center justify-between gap-3 py-2 px-3.5 sm:px-4 mb-6 sm:mb-8 rounded-2xl bg-[#0e111a]/80 border border-white/[0.07] backdrop-blur-md shadow-lg"
    >
      {/* Left Telemetry Coordinates */}
      <div className="flex items-center gap-2.5 font-label-mono text-[11px] shrink-0">
        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          SYS_READY
        </span>
        <span className="text-white/20">|</span>
        <span className="text-on-surface-variant hidden sm:inline">MATARAM, NTB</span>
        <span className="text-secondary font-medium">{localTime}</span>
      </div>

      {/* Right Quick Section Index */}
      <div className="flex items-center gap-1 overflow-x-auto py-0.5">
        {QUICK_JUMPS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="px-2.5 py-1 rounded-lg font-label-mono text-[11px] text-on-surface-variant hover:text-white hover:bg-white/[0.06] transition-colors shrink-0 flex items-center gap-1"
          >
            <span className="text-primary/80 text-[10px]">{item.code}.</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
