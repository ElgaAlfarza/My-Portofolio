'use client'

import {
  DoodleExclamation,
  ButtonPurpleArrow
} from '../Icons/ScrapbookIcons'

const CERT_AND_RESEARCH_DRIVE =
  'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'AI Health Predictor',
    subTitle: 'Stroke prediction using Machine Learning',
    tech: 'Python • Random Forest • Streamlit',
    desc: 'Model analitik cerdas untuk memprediksi risiko penyakit berbasis dataset rekam medis klinis dengan antarmuka web interaktif.',
    actionHref: CERT_AND_RESEARCH_DRIVE,
    badgeBg: 'bg-[#583FA2]',
    badgeIcon: 'favorite',
    mockupType: 'brain',
    tapeAngle: '-rotate-2',
    cardTilt: 'hover:-rotate-1',
  },
  {
    id: 2,
    title: 'Gemah Ripah Tani',
    subTitle: 'Agriculture Marketplace Android App',
    tech: 'Next.js • React Native • PostgreSQL',
    desc: 'Platform digital penghubung petani lokal dengan rantai pasok pasar modern, manajemen logistik panen, dan pelacakan transaksi real-time.',
    actionHref: '#experience',
    badgeBg: 'bg-[#16A34A]',
    badgeIcon: 'eco',
    mockupType: 'mobile',
    tapeAngle: 'rotate-3',
    cardTilt: 'hover:rotate-1',
  },
  {
    id: 3,
    title: 'Klasifikasi Aksara Sasak',
    subTitle: 'Sasak Script Classification with Deep Learning',
    tech: 'Python • CNN • TensorFlow • SINTA 4',
    desc: 'Riset Deep Learning Convolutional Neural Networks (CNN) untuk mengenali naskah kuno lontar Sasak (1.080 citra, 92.3% akurasi) terbit di Jurnal SINTA 4.',
    actionHref: CERT_AND_RESEARCH_DRIVE,
    badgeBg: 'bg-[#583FA2]',
    badgeIcon: 'temple_buddhist',
    mockupType: 'script',
    tapeAngle: '-rotate-3',
    cardTilt: 'hover:-rotate-1',
  },
]

export default function Portfolio() {
  return (
    <section id="works" className="relative w-full py-8 select-none">
      
      {/* ─────────────────────────────────────────────────────────────
         White Paper Section: "Selected Work" (Exact Mockup Match)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full rounded-2xl bg-white border border-[#E7DFD3] p-5 sm:p-8 lg:p-10 shadow-sm">
        
        {/* Section Header: Title + Subtitle + View All Projects Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-marker text-3xl sm:text-4xl font-bold text-stone-900 inline-block relative">
                <span>Selected Work</span>
                {/* Purple Underline */}
                <span className="block h-1 bg-[#583FA2] rounded-full mt-1 w-full" />
              </h2>
              <DoodleExclamation className="w-6 h-6 text-stone-900" />
            </div>
            <p className="font-sans text-xs sm:text-sm text-stone-600">
              Some of my featured projects
            </p>
          </div>

          {/* Right Action Button: View All Projects (Exact Capsule Button with Arrow from Mockup) */}
          <a
            href={CERT_AND_RESEARCH_DRIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-stone-800 bg-white hover:bg-stone-100 text-stone-900 text-xs font-bold transition-all shadow-xs shrink-0 transform hover:scale-105"
          >
            <span>View All Projects</span>
            <span>➔</span>
          </a>
        </div>

        {/* ─────────────────────────────────────────────────────────────
           3 Taped Project Cards (Exact Mockup Match)
        ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_PROJECTS.map((project) => {
            const isExternal = project.actionHref.startsWith('http')
            return (
              <div key={project.id} className="flex flex-col group">
                
                {/* Card Container with Washi Tape */}
                <div className={`relative w-full scrapbook-card bg-stone-50/80 border border-stone-300/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between min-h-[400px] ${project.cardTilt} transition-transform duration-300`}>
                  
                  {/* Masking Tape on Top-Left Corner */}
                  <div className={`washi-tape absolute -top-3 left-4 w-16 h-6 ${project.tapeAngle} z-20 pointer-events-none`} />

                  {/* Corner Badge Square (Exact Mockup Match) */}
                  <div className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-lg ${project.badgeBg} text-white flex items-center justify-center shadow-md`}>
                    <span className="material-symbols-outlined text-base">
                      {project.badgeIcon}
                    </span>
                  </div>

                  <div>
                    {/* Visual Mockup Screen Box */}
                    <div className="w-full aspect-[4/3] rounded-xl bg-stone-900 border border-stone-800 p-3 mb-4 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-md">
                      
                      {project.mockupType === 'brain' && (
                        <div className="flex flex-col items-center justify-center text-center">
                          <span className="material-symbols-outlined text-4xl text-cyan-400 mb-1 animate-pulse">
                            neurology
                          </span>
                          <span className="font-mono text-[0.625rem] text-cyan-200 uppercase tracking-wider">
                            AI Medical Analytics
                          </span>
                        </div>
                      )}

                      {project.mockupType === 'mobile' && (
                        <div className="flex flex-col items-center justify-center text-center">
                          <span className="material-symbols-outlined text-4xl text-emerald-400 mb-1">
                            smartphone
                          </span>
                          <span className="font-mono text-[0.625rem] text-emerald-200 uppercase tracking-wider">
                            Mobile App Screens
                          </span>
                        </div>
                      )}

                      {project.mockupType === 'script' && (
                        <div className="flex flex-col items-center justify-center text-center">
                          <span className="material-symbols-outlined text-4xl text-purple-400 mb-1">
                            psychology
                          </span>
                          <span className="font-mono text-[0.625rem] text-purple-200 uppercase tracking-wider">
                            Deep Learning CNN SINTA 4
                          </span>
                        </div>
                      )}

                      {/* Bottom faux bar */}
                      <div className="absolute bottom-2 inset-x-3 h-1 bg-white/20 rounded-full" />
                    </div>

                    {/* Bold Title */}
                    <h3 className="font-sans text-sm sm:text-base font-bold text-stone-900 leading-snug group-hover:text-[#583FA2] transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-sans text-xs text-stone-600 mt-1 leading-relaxed">
                      {project.subTitle}
                    </p>

                    <p className="font-sans text-[0.6875rem] text-stone-500 mt-2 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Button: View Project ➔ (Exact Purple Pill from Mockup) */}
                  <div className="mt-4 pt-3 border-t border-stone-200/80">
                    <ButtonPurpleArrow
                      href={project.actionHref}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="w-full text-center"
                    >
                      View Project
                    </ButtonPurpleArrow>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

      </div>

    </section>
  )
}
