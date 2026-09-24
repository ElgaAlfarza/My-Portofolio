'use client'

export default function JumpNav() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full flex justify-center py-space-sm mb-space-lg">
      <div className="inline-flex items-center gap-1 sm:gap-2 px-space-md py-1.5 rounded-full bg-surface-container-low border border-white/[0.06] shadow-lg max-w-full overflow-x-auto scrollbar-none">
        <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-lowest text-secondary font-label-mono text-label-sm shrink-0 border border-white/[0.04]">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          AVAILABLE Q2 2026
        </span>
        <div className="h-4 w-px bg-surface-bright mx-1 shrink-0" />
        <a
          href="#about"
          onClick={(e) => handleClick(e, '#about')}
          className="px-3 py-1 rounded-full font-label-mono text-label-mono text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors shrink-0"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={(e) => handleClick(e, '#skills')}
          className="px-3 py-1 rounded-full font-label-mono text-label-mono text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors shrink-0"
        >
          Skills 3D
        </a>
        <a
          href="#works"
          onClick={(e) => handleClick(e, '#works')}
          className="px-3 py-1 rounded-full font-label-mono text-label-mono text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors shrink-0"
        >
          Works
        </a>
        <a
          href="#credentials"
          onClick={(e) => handleClick(e, '#credentials')}
          className="px-3 py-1 rounded-full font-label-mono text-label-mono text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors shrink-0"
        >
          Certificates 3D
        </a>
        <a
          href="#experience"
          onClick={(e) => handleClick(e, '#experience')}
          className="px-3 py-1 rounded-full font-label-mono text-label-mono text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors shrink-0"
        >
          Experience
        </a>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="px-3 py-1 rounded-full font-label-mono text-label-mono text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors shrink-0"
        >
          Contact
        </a>
      </div>
    </section>
  )
}
