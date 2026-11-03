'use client'

import {
  IconPython,
  IconJS,
  IconReact,
  IconNode,
  IconSQL,
  IconAWS,
  IconGit,
  IconGitHub,
  IconFigma,
  IconVSCode,
  IconGoogle,
  IconPaperPatch,
  IconGmailBadge,
  SquirclePin,
  DoodleTrophy,
  DoodleSparkle,
  DoodleExclamation,
  DoodleStarHandDrawn,
  DoodleHighlighter
} from '../Icons/ScrapbookIcons'

const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'

const CORE_SKILLS = [
  { name: 'Python', role: 'Machine Learning', component: IconPython },
  { name: 'JavaScript', role: 'Next.js & React', component: IconJS },
  { name: 'React', role: 'Modern UI/UX', component: IconReact },
  { name: 'Node.js', role: 'Backend & APIs', component: IconNode },
  { name: 'SQL', role: 'Database & Sync', component: IconSQL },
  { name: 'AWS', role: 'Cloud & Simbank', component: IconAWS },
]

const EXTRA_TOOLS = [
  { name: 'GitHub', component: IconGitHub },
  { name: 'Git', component: IconGit },
  { name: 'Figma', component: IconFigma },
  { name: 'VS Code', component: IconVSCode },
  { name: 'Google AI', component: IconGoogle },
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
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
                    src="/profile-face.png"
                    alt="Elga Alfareza, S.Kom."
                    className="w-full h-full object-cover object-top filter grayscale contrast-115"
                  />
                </div>

                {/* Yellow Kraft Tape Label at Bottom */}
                <div className="mt-3 py-2 px-3 rounded-md bg-[#F4DF9B] text-stone-900 border border-[#DEBE66] shadow-sm transform rotate-1 text-center">
                  <h3 className="font-marker text-sm font-bold leading-tight">
                    Elga Alfareza
                  </h3>
                  <p className="font-mono text-[0.625rem] text-stone-700 font-semibold uppercase tracking-wider mt-0.5">
                    Full Stack &amp; AI Specialist
                  </p>
                </div>

                {/* Translucent Washi Tape on Bottom-Right Corner */}
                <div className="washi-tape absolute -bottom-2 -right-2 w-14 h-5 rotate-12 z-20 pointer-events-none" />
              </div>

            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────
             CENTER: "About Me" Bio & 3 Info Cards (Exact Mockup Match)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* "About Me" Title with Purple Underline */}
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

            <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed mb-5">
              Hey! Saya <strong className="text-stone-900 font-bold">Elga Alfareza, S.Kom.</strong>, seorang Software Engineer &amp; AI Specialist berorientasi hasil. Saya membangun sistem berkinerja tinggi, mengoptimalkan arsitektur perangkat lunak untuk keandalan maksimal. Fokus saya berakar pada kode yang bersih, rekayasa pipeline data yang efisien, riset Deep Learning Convolutional Neural Networks (CNN) yang terpublikasi di <strong className="text-purple-900 font-semibold">Jurnal Nasional SINTA 4</strong>, serta operasional server berstandar <strong className="text-stone-900 font-semibold">K3 Kemnaker RI</strong>.
            </p>

            {/* 3 Info Pill Cards with 3D Scrapbook Icons */}
            <div className="flex flex-col gap-2.5">
              
              {/* 1. Education */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-100/80 border border-stone-200/80 shadow-xs hover:bg-stone-100 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 shadow-xs">
                  <DoodleTrophy className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-xs font-bold text-stone-900 truncate">
                    B.Sc. Informatics (S.Kom. • Cum Laude 3.76)
                  </p>
                  <p className="font-sans text-[0.6875rem] text-stone-500 truncate">
                    Universitas Bumigora
                  </p>
                </div>
              </div>

              {/* 2. Location */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-100/80 border border-stone-200/80 shadow-xs hover:bg-stone-100 transition-colors">
                <div className="shrink-0">
                  <SquirclePin className="w-9 h-9" />
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-xs font-bold text-stone-900 truncate">
                    Lombok, Indonesia
                  </p>
                  <p className="font-sans text-[0.6875rem] text-stone-500 truncate">
                    Mataram, Nusa Tenggara Barat (WITA)
                  </p>
                </div>
              </div>

              {/* 3. Email */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-100/80 border border-stone-200/80 shadow-xs hover:bg-stone-100 transition-colors">
                <div className="shrink-0">
                  <IconGmailBadge className="w-9 h-9" />
                </div>
                <div className="min-w-0">
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="font-sans text-xs font-bold text-stone-900 hover:text-[#583FA2] truncate block"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                  <p className="font-sans text-[0.6875rem] text-stone-500 truncate">
                    Email Resmi &amp; Penawaran Proyek
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────
             RIGHT: "My Skills" 3D Squircles on Deckled Paper Stickers
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col">
            
            {/* "My Skills" Title with Purple Underline + Exclamation Doodle */}
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900 inline-block relative">
                <span>My Skills</span>
                <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
              </h2>
              <DoodleExclamation className="w-6 h-6 text-stone-800" />
            </div>

            {/* 6 Primary Squircle App Icons in 3x2 Grid inside Paper Patches */}
            <div className="grid grid-cols-3 gap-3">
              {CORE_SKILLS.map((skill) => {
                const IconComponent = skill.component
                return (
                  <div key={skill.name} className="flex flex-col items-center group cursor-pointer">
                    <IconPaperPatch>
                      <IconComponent className="w-11 h-11" />
                    </IconPaperPatch>
                    <span className="font-sans text-[0.6875rem] font-bold text-stone-800 mt-1 text-center truncate w-full">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Developer Ecosystem & Version Control Tools (From Sheet Row 2 & 5) */}
            <div className="mt-4 pt-3 border-t border-stone-200">
              <div className="flex items-center justify-center gap-2">
                {EXTRA_TOOLS.map((tool) => {
                  const ToolIcon = tool.component
                  return (
                    <div key={tool.name} className="flex flex-col items-center group cursor-pointer" title={tool.name}>
                      <IconPaperPatch className="p-1">
                        <ToolIcon className="w-7 h-7" />
                      </IconPaperPatch>
                      <span className="font-mono text-[0.5625rem] text-stone-600 mt-0.5">
                        {tool.name}
                      </span>
                    </div>
                  )
                })}
              </div>
              <span className="font-mono text-[0.625rem] text-stone-400 uppercase tracking-wider block text-center mt-2.5">
                Google AI Certified Vibe Coding
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
