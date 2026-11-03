'use client'

const EXPERIENCES_ROADMAP = [
  {
    period: '2025 - Present',
    title: 'Freelance Developer',
    organization: 'CV Rajawali (Simbank 99.9% Uptime)',
    desc: 'Building web applications and digital solutions.',
    icon: 'business_center',
  },
  {
    period: '2023 - 2025',
    title: 'Software Engineer II',
    organization: 'PT. Techno Indonesia (CV Sinar Mutiara Bali)',
    desc: 'Quality control, firmware testing, and system architecture.',
    icon: 'apartment',
  },
  {
    period: '2019 - 2022',
    title: 'Software Engineer, TCS',
    organization: 'IPHI & Kemendikbudristek RI',
    desc: 'Data management, automation pipelines, and OpenText systems.',
    icon: 'desktop_windows',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-8 select-none">
      
      {/* ─────────────────────────────────────────────────────────────
         Torn Paper Header Rip Transition
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden leading-none select-none mb-[-1px]">
        <svg
          className="w-full h-8 sm:h-10 text-[#122642] filter drop-shadow-md"
          viewBox="0 0 1200 35"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,35 L0,12 Q35,22 70,10 T140,24 T210,12 T280,26 T350,11 T420,25 T490,13 T560,25 T630,10 T700,24 T770,14 T840,26 T910,12 T980,25 T1050,11 T1120,23 T1200,12 L1200,35 Z" />
        </svg>
      </div>

      {/* ─────────────────────────────────────────────────────────────
         Deep Navy Blue Paper Canvas (Exact Mockup Match)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full rounded-2xl bg-[#122642] border border-[#0B182B] p-6 sm:p-10 shadow-2xl text-white">
        
        {/* Subtle Paper Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────────────
           Section Header: Title + Subtitle + Right Doodles (Exact Mockup Match)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10 z-10">
          
          {/* Left Title & Subtitle */}
          <div>
            <div className="inline-block relative">
              <h2 className="font-marker text-3xl sm:text-4xl font-bold tracking-wide text-white">
                Experience
              </h2>
              {/* Hand-drawn Underline */}
              <div className="w-full h-1 bg-[#8B6BD6] rounded-full mt-1" />
            </div>
            <p className="font-sans text-xs sm:text-sm text-stone-300 mt-2">
              My professional journey in the world of technology
            </p>
          </div>

          {/* Right Cursive Script Doodle: "Keep Learning / Keep Growing" (Exact Mockup Match) */}
          <div className="flex flex-col items-start sm:items-end -rotate-6 select-none pointer-events-none">
            <span className="font-handwriting text-xl sm:text-2xl font-bold text-stone-200">
              Keep Learning
            </span>
            <span className="font-handwriting text-xl sm:text-2xl font-bold text-stone-200 ml-3 sm:ml-0">
              Keep Growing
            </span>
            <div className="w-24 h-0.5 bg-stone-300/60 rounded-full mt-0.5" />
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           Connected Horizontal Roadmap Timeline (Exact Mockup Match)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full z-10 my-4">
          
          {/* Horizontal Connecting White Line passing through center of the circles */}
          <div 
            className="hidden md:block absolute top-6 inset-x-12 h-0.5 bg-white/40"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {EXPERIENCES_ROADMAP.map((exp, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative group">
                
                {/* Circular Purple Icon Node Badge (Exact Mockup Match) */}
                <div className="w-12 h-12 rounded-full bg-[#583FA2] border-2 border-purple-400 text-white flex items-center justify-center shadow-lg relative z-10 transform transition-transform group-hover:scale-110 mb-4 filter drop-shadow-md">
                  <span className="material-symbols-outlined text-xl">
                    {exp.icon}
                  </span>
                </div>

                {/* Period */}
                <span className="font-mono text-xs font-bold text-stone-300 tracking-wider">
                  {exp.period}
                </span>

                {/* Role Title */}
                <h3 className="font-sans text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                  {exp.title}
                </h3>

                {/* Subtitle / Organization */}
                <p className="font-sans text-xs text-stone-300/90 mt-1 leading-relaxed max-w-xs">
                  {exp.desc}
                </p>

                <p className="font-sans text-[0.6875rem] text-purple-300 mt-1">
                  {exp.organization}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
         Torn Paper Bottom Rip Transition
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden leading-none select-none mt-[-1px]">
        <svg
          className="w-full h-8 sm:h-10 text-[#122642] filter drop-shadow-md transform rotate-180"
          viewBox="0 0 1200 35"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,35 L0,12 Q35,22 70,10 T140,24 T210,12 T280,26 T350,11 T420,25 T490,13 T560,25 T630,10 T700,24 T770,14 T840,26 T910,12 T980,25 T1050,11 T1120,23 T1200,12 L1200,35 Z" />
        </svg>
      </div>

    </section>
  )
}
