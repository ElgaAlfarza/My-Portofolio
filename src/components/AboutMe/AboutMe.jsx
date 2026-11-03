'use client'

const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'

const SKILLS_LIST = [
  { name: 'Python', role: 'Machine Learning', icon: 'code', bg: 'bg-[#3776AB]', text: 'text-white' },
  { name: 'JavaScript', role: 'Next.js & React', icon: 'javascript', bg: 'bg-[#F7DF1E]', text: 'text-stone-900' },
  { name: 'React', role: 'Modern UI/UX', icon: 'token', bg: 'bg-[#222222]', text: 'text-[#61DAFB]' },
  { name: 'Node.js', role: 'Backend & APIs', icon: 'terminal', bg: 'bg-[#339933]', text: 'text-white' },
  { name: 'SQL', role: 'Database & Sync', icon: 'database', bg: 'bg-[#0064a5]', text: 'text-white' },
  { name: 'AWS', role: 'Cloud & Simbank', icon: 'dns', bg: 'bg-[#232F3E]', text: 'text-[#FF9900]' },
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
              <span className="absolute -top-3 -left-3 font-marker text-xl text-stone-600 select-none">✦</span>
              <span className="absolute top-1/2 -right-4 font-marker text-lg text-stone-600 select-none">✦</span>

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

                {/* Yellow Kraft Tape Label at Bottom (Exact Mockup Match: Hemarth Chakka / Software Engineer) */}
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
            <div className="mb-3">
              <h2 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900 inline-block relative">
                <span>About Me</span>
                {/* Hand-drawn Purple Underline */}
                <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed mb-5">
              Hey! Saya <strong className="text-stone-900 font-bold">Elga Alfareza, S.Kom.</strong>, seorang Software Engineer &amp; AI Specialist berorientasi hasil. Saya membangun sistem berkinerja tinggi, mengoptimalkan arsitektur perangkat lunak untuk keandalan maksimal. Fokus saya berakar pada kode yang bersih, rekayasa pipeline data yang efisien, riset Deep Learning Convolutional Neural Networks (CNN) yang terpublikasi di <strong className="text-purple-900 font-semibold">Jurnal Nasional SINTA 4</strong>, serta operasional server berstandar <strong className="text-stone-900 font-semibold">K3 Kemnaker RI</strong>.
            </p>

            {/* 3 Info Pill Cards (Exact Mockup Match) */}
            <div className="flex flex-col gap-2.5">
              
              {/* 1. Education */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-100/80 border border-stone-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-white border border-stone-300 flex items-center justify-center text-[#583FA2] shrink-0">
                  <span className="material-symbols-outlined text-base">school</span>
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
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-100/80 border border-stone-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-white border border-stone-300 flex items-center justify-center text-red-600 shrink-0">
                  <span className="material-symbols-outlined text-base">pin_drop</span>
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
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-100/80 border border-stone-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-white border border-stone-300 flex items-center justify-center text-blue-600 shrink-0">
                  <span className="material-symbols-outlined text-base">mail</span>
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
             RIGHT: "My Skills" 6 Squircle Icons (Exact Mockup Match)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col">
            
            {/* "My Skills" Title with Purple Underline + Exclamation Doodle */}
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-marker text-2xl sm:text-3xl font-bold text-stone-900 inline-block relative">
                <span>My Skills</span>
                <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
              </h2>
              <span className="font-marker text-xl font-bold text-stone-800">
                ! !
              </span>
            </div>

            {/* 6 Squircle App Icons in 2x3 Grid (Exact Mockup Match) */}
            <div className="grid grid-cols-3 gap-3">
              {SKILLS_LIST.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center group">
                  <div className={`w-12 h-12 rounded-2xl ${skill.bg} ${skill.text} flex items-center justify-center shadow-md border-2 border-white transform transition-transform group-hover:scale-110 duration-200`}>
                    <span className="material-symbols-outlined text-2xl">
                      {skill.icon}
                    </span>
                  </div>
                  <span className="font-sans text-[0.6875rem] font-bold text-stone-800 mt-1.5 text-center truncate w-full">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200 text-center">
              <span className="font-mono text-[0.625rem] text-stone-500 uppercase tracking-wider block">
                Google AI Certified Vibe Coding
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
