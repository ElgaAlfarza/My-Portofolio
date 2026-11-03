'use client'

import {
  IconPython,
  IconJS,
  IconReact,
  IconNode,
  IconSQL,
  IconAWS,
  DoodleSparkle,
  DoodleExclamation,
  DoodleStarHandDrawn
} from '../Icons/ScrapbookIcons'

const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'

const CORE_SKILLS = [
  { name: 'Python', component: IconPython },
  { name: 'JavaScript', component: IconJS },
  { name: 'React', component: IconReact },
  { name: 'Node.js', component: IconNode },
  { name: 'SQL', component: IconSQL },
  { name: 'AWS', component: IconAWS },
]

export default function AboutMe() {
  return (
    <section id="about" className="relative w-full py-8 select-none">
      
      {/* ─────────────────────────────────────────────────────────────
         Torn Paper Header Transition
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden leading-none select-none mb-[-1px]">
        <svg
          className="w-full h-8 text-[#FAF7F2] filter drop-shadow-sm"
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,30 L0,12 Q40,24 80,10 T160,22 T240,11 T320,25 T400,12 T480,24 T560,11 T640,23 T720,12 T800,24 T880,11 T960,25 T1040,12 T1120,24 T1200,10 L1200,30 Z" />
        </svg>
      </div>

      {/* ─────────────────────────────────────────────────────────────
         White Paper Section: Polaroid (Left) + About Me (Center) + My Skills (Right)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full rounded-2xl bg-white border border-[#E7DFD3] p-5 sm:p-8 lg:p-10 shadow-sm">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ─────────────────────────────────────────────────────────
             LEFT: Taped Polaroid Photo Card (Exact Mockup Match)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[270px] group">
              
              {/* Star Doodles around Polaroid */}
              <div className="absolute -top-3 -left-3 text-stone-700 pointer-events-none">
                <DoodleStarHandDrawn className="w-5 h-5 text-stone-700" />
              </div>
              <div className="absolute top-1/2 -right-4 text-stone-700 pointer-events-none">
                <DoodleSparkle className="w-4 h-4 text-stone-700" />
              </div>

              {/* White Polaroid Card */}
              <div className="p-4 pb-3 rounded-xl bg-white border border-stone-300/80 shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                
                {/* Translucent Washi Tape on Top-Left Corner */}
                <div className="washi-tape absolute -top-3 -left-2 w-16 h-6 -rotate-12 z-20 pointer-events-none" />
                
                {/* Grayscale Sketch Portrait of Elga */}
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-300 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/elga-id-portrait.png"
                    alt="Elga Alfareza, S.Kom."
                    className="w-full h-full object-cover object-top filter contrast-110"
                  />
                </div>

                {/* Yellow Kraft Tape Label at Bottom (Exact Mockup Match) */}
                <div className="mt-3 py-2 px-3 rounded-md bg-[#F4DF9B] text-stone-900 border border-[#DEBE66] shadow-sm transform rotate-1 text-center">
                  <h3 className="font-sans text-sm font-black leading-tight">
                    Elga Alfareza, S.Kom.
                  </h3>
                  <p className="font-mono text-[0.625rem] text-[#583FA2] font-black uppercase tracking-wider mt-0.5">
                    FULL STACK &amp; AI SPECIALIST
                  </p>
                </div>

                {/* Translucent Washi Tape on Bottom-Right Corner */}
                <div className="washi-tape absolute -bottom-2 -right-2 w-14 h-5 rotate-12 z-20 pointer-events-none" />
              </div>

            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────
             CENTER: "About Me" Bio & Unified Info Panel (Exact Mockup Match)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* "About Me" Title with Purple Underline & Sparkle Doodle */}
            <div className="mb-3 relative inline-block">
              <h2 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900 inline-block relative">
                <span>About Me</span>
                {/* Hand-drawn Purple Underline */}
                <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
              </h2>
              <div className="absolute -top-3 -right-6 pointer-events-none">
                <DoodleSparkle className="w-4 h-4 text-[#583FA2]" />
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
              Hey! I&apos;m <strong className="text-stone-900 font-bold">Elga Alfareza, S.Kom.</strong>, a results-oriented Full Stack Developer &amp; AI Specialist from Universitas Bumigora (IPK 3.76, Cum Laude). I build robust, high-throughput systems, optimizing for performance and reliability. My focus is on clean architecture, efficient data pipelines, Deep Learning CNN (Jurnal Nasional SINTA 4), and leveraging modern technologies like AWS, Redis, and Next.js to solve complex problems.
            </p>

            {/* Unified Info Card Panel (Exact Mockup Match: Light Purple Container with 3 Clean Rows) */}
            <div className="flex flex-col gap-2.5 p-3.5 rounded-2xl bg-[#ECE9F4]/80 border border-[#DDD6EA] text-stone-800 shadow-xs">
              
              {/* Row 1: Graduation Cap + Degree + University */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#3C2566] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base">school</span>
                </div>
                <div className="leading-tight">
                  <p className="font-sans text-xs font-bold text-stone-900">
                    S1 Teknik Informatika (S.Kom. - Cum Laude 3.76)
                  </p>
                  <p className="font-sans text-[0.6875rem] text-stone-600">
                    Universitas Bumigora
                  </p>
                </div>
              </div>

              {/* Row 2: Location Pin */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#3C2566] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base">location_on</span>
                </div>
                <p className="font-sans text-xs font-bold text-stone-900">
                  Lombok, Indonesia
                </p>
              </div>

              {/* Row 3: Mail Envelope */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#3C2566] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base">mail</span>
                </div>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="font-sans text-xs font-bold text-stone-900 hover:text-[#583FA2] truncate block"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>

            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────
             RIGHT: "My Skills" 6 Squircle Icons in 3x2 Grid (Exact Mockup Match)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            
            {/* "My Skills" Title with Purple Underline + Exclamation Doodle */}
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900 inline-block relative">
                <span>My Skills</span>
                <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
              </h2>
              <DoodleExclamation className="w-6 h-6 text-stone-800" />
            </div>

            {/* Exact 6 Squircle App Icons in 3x2 Grid */}
            <div className="grid grid-cols-3 gap-3">
              {CORE_SKILLS.map((skill) => {
                const IconComponent = skill.component
                return (
                  <div key={skill.name} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center transform transition-transform group-hover:scale-110 duration-200 filter drop-shadow-sm">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <span className="font-sans text-[0.6875rem] font-bold text-stone-800 mt-1 text-center truncate w-full">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
