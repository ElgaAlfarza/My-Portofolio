'use client'

import { useState } from 'react'
import MasterScrapbookPoster from './MasterScrapbookPoster'

const WHATSAPP_URL = 'https://wa.me/6285238208849'
const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/elga-alfareza'
const GITHUB_URL = 'https://github.com/ElgaAlfarza'
const DRIVE_URL = 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

const FAVORITE_BOOKS = [
  {
    id: 'eat-and-run',
    title: 'Eat & Run',
    subtitle: 'My Unlikely Journey to Ultramarathon Greatness',
    author: 'Scott Jurek',
    coAuthor: 'with Steve Friedman',
    cover: '/books/eat-and-run.png',
    pillar: 'Ketahanan & Konsistensi',
    badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    accentDot: 'bg-emerald-600',
    quote:
      'Batas kemampuan fisik dan mental kita jauh melampaui apa yang kita bayangkan. Daya tahan sejati dibangun dari konsistensi langkah demi langkah di tengah kelelahan.',
    personalImpact:
      'Membentuk ketangguhan mental dalam menghadapi sesi debugging sistem yang kompleks, sprint pengembangan panjang, dan menjaga fokus operasional server secara konsisten.',
    coreTakeaways: [
      {
        label: 'Fokus Jangka Panjang',
        desc: 'Mempertahankan ketenangan dan ketelitian saat menyelesaikan masalah teknis yang rumit.',
      },
      {
        label: 'Disiplin Holistik',
        desc: 'Menjaga keseimbangan kebugaran fisik dan kejernihan berpikir sebagai fondasi kerja profesional.',
      },
      {
        label: 'Ketahanan Operasional',
        desc: 'Tetap terukur dan dapat diandalkan ketika beban sistem mencapai titik puncak.',
      },
    ],
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    subtitle: 'Tiny Changes, Remarkable Results',
    author: 'James Clear',
    coAuthor: 'Practical Systems Framework',
    cover: '/books/atomic-habits.png',
    pillar: 'Sistem & Perbaikan +1%',
    badgeClass: 'bg-purple-100 text-purple-900 border-purple-300',
    accentDot: 'bg-purple-600',
    quote:
      'You do not rise to the level of your goals. You fall to the level of your systems. Perbaikan kecil 1% setiap hari menghasilkan peningkatan kualitas yang signifikan dalam jangka panjang.',
    personalImpact:
      'Menjadi dasar kebiasaan kerja saya: keandalan server 99.9%, kode yang bersih, dan akurasi data inventori lahir dari SOP dan disiplin kecil yang dijalankan setiap hari.',
    coreTakeaways: [
      {
        label: 'Sistem di Atas Target',
        desc: 'Membangun alur kerja terstruktur dan checklist verifikasi agar kualitas terjaga secara konsisten.',
      },
      {
        label: 'Pembelajaran Berkelanjutan',
        desc: 'Meningkatkan kompetensi Python ML, Full Stack, dan automasi secara bertahap setiap hari.',
      },
      {
        label: 'Efisiensi Lingkungan Kerja',
        desc: 'Merapikan peralatan kerja (VS Code, Git CI/CD, dokumentasi) untuk meminimalkan hambatan eksekusi.',
      },
    ],
  },
  {
    id: 'how-to-make-shit-happen',
    title: 'How to Make Sh*t Happen',
    subtitle: 'Make More Money. Get in Better Shape. Control Your Life.',
    author: 'Sean Whalen',
    coAuthor: 'Accountability & Execution',
    cover: '/books/make-shit-happen.png',
    pillar: 'Tanggung Jawab & Eksekusi',
    badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
    accentDot: 'bg-amber-600',
    quote:
      'Hentikan keraguan berlebih. Ambil tanggung jawab penuh atas setiap hasil, bergerak cepat, dan wujudkan rencana menjadi karya nyata yang terukur.',
    personalImpact:
      'Mendorong etos kepemilikan penuh (ownership): berfokus pada penyelesaian masalah secara langsung, menuntaskan deployment, dan mempertanggungjawabkan hasil kerja.',
    coreTakeaways: [
      {
        label: 'Kepemilikan Penuh',
        desc: 'Saat muncul kendala pada aplikasi atau server, fokus utama adalah menemukan akar masalah dan menyelesaikannya.',
      },
      {
        label: 'Orientasi Tindakan',
        desc: 'Mengubah rancangan menjadi prototipe fungsional dan solusi nyata tanpa menunda-nunda.',
      },
      {
        label: 'Keseimbangan Peran',
        desc: 'Menyelaraskan integritas pribadi, kesehatan, komunikasi tim, dan produktivitas kerja.',
      },
    ],
  },
]

const ACTIVITY_PHOTOS = [
  {
    id: 'photo-01',
    url: '/elga-graduation-studio.jpg',
    title: 'Wisuda & Yudisium S.Kom.',
    tag: 'CUM LAUDE 3.76',
    tagColor: 'bg-amber-400 text-slate-900',
    category: 'Akademik Univ. Bumigora',
    description: 'Dokumentasi kelulusan resmi S1 Ilmu Komputer Universitas Bumigora dengan predikat kehormatan Cum Laude (IPK 3.76 / 4.00).',
    rotation: '-rotate-2',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-10 w-24 h-5 rotate-1',
  },
  {
    id: 'photo-02',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_49_1790245665527.jpeg',
    title: 'Operasional Server Simbank',
    tag: 'LIVE 99.9%',
    tagColor: 'bg-emerald-500 text-white',
    category: 'CV Rajawali IT Ops',
    description: 'Pengawasan dan pemeliharaan rak server simbank secara real-time untuk memastikan kelancaran ribuan transaksi kartu SIM dengan target uptime 99.9%.',
    rotation: 'rotate-2',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 right-8 w-24 h-5 -rotate-2',
  },
  {
    id: 'photo-03',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_51_1790245665530.jpeg',
    title: 'Kampus Mengajar Angkatan 7',
    tag: 'KEMDIKBUD RI',
    tagColor: 'bg-sky-600 text-white',
    category: 'SMPN 20 Mataram',
    description: 'Penugasan program Kampus Mengajar 7 Kemendikbudristek di SMPN 20 Mataram: memimpin digitalisasi asesmen AKM dan membimbing literasi teknologi peserta didik.',
    rotation: '-rotate-1',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-8 w-24 h-5 rotate-2',
  },
  {
    id: 'photo-04',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_51__1__1790245665529.jpeg',
    title: 'Sertifikasi K3 & Spreadsheet',
    tag: 'KEMNAKER RI',
    tagColor: 'bg-purple-700 text-white',
    category: 'Standar Industri BPVP',
    description: 'Pelatihan intensif keselamatan kerja (K3 HIRA/JSA) dan pengoperasian spreadsheet tingkat lanjut 20 JP berstandar nasional di BPVP.',
    rotation: 'rotate-2',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 right-10 w-24 h-5 -rotate-1',
  },
  {
    id: 'photo-05',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_52_1790245665536.jpeg',
    title: 'Digitalisasi Asesmen Sekolah',
    tag: 'AKM DIGITAL',
    tagColor: 'bg-indigo-600 text-white',
    category: 'Edukasi Komputasi',
    description: 'Implementasi aplikasi asesmen berbasis komputer di laboratorium sekolah untuk kelancaran evaluasi pembelajaran digital.',
    rotation: '-rotate-2',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-12 w-24 h-5 rotate-1',
  },
  {
    id: 'photo-06',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_52__1__1790245665532.jpeg',
    title: 'Quality Control Hardware & QA',
    tag: 'QC PASSED',
    tagColor: 'bg-emerald-600 text-white',
    category: 'CV Sinar Mutiara Bali',
    description: 'Uji fungsional perangkat keras, troubleshooting sirkuit elektronik, dan quality assurance sistem sebelum didistribusikan ke operasional lapangan.',
    rotation: 'rotate-1',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 right-10 w-24 h-5 rotate-2',
  },
  {
    id: 'photo-07',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_53_1790245665538.jpeg',
    title: 'Riset Machine Learning CNN',
    tag: 'SINTA 4',
    tagColor: 'bg-purple-800 text-white',
    category: 'Computer Vision Lab',
    description: 'Eksperimen pelatihan arsitektur CNN pada 1.080 dataset naskah daun lontar Aksara Sasak hingga mencapai akurasi uji 94.6%.',
    rotation: '-rotate-1',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-8 w-24 h-5 -rotate-2',
  },
  {
    id: 'photo-08',
    url: '/uploads/WhatsApp_Image_2026-09-24_at_18_26_54_1790245665540.jpeg',
    title: 'Koordinasi Tim & Pemeliharaan',
    tag: 'TEAM COLLAB',
    tagColor: 'bg-amber-600 text-white',
    category: 'Mataram, Lombok, NTB',
    description: 'Kolaborasi lintas tim teknis dalam perawatan sistem, rapat koordinasi berkala, dan evaluasi performa operasional.',
    rotation: 'rotate-2',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 right-12 w-24 h-5 -rotate-1',
  },
]

export default function ElgaMasterPortfolio() {
  const photoMode = 'elga' // Hero uses Elga's real graduation photo
  const [showStudioModal, setShowStudioModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)
  const [activePhoto, setActivePhoto] = useState(null)
  const viewMode = 'full' // Follows the user's master HTML layout

  return (
    <div className="relative min-h-screen bg-[#FBF7EE] text-slate-800 antialiased overflow-x-hidden selection:bg-purple-300 selection:text-purple-950 font-sans">
      
      {viewMode === 'poster' ? (
        <div className="w-full max-w-5xl mx-auto py-8 px-4">
          <MasterScrapbookPoster />
        </div>
      ) : (
        <>
          {/* ═════════════════════════════════════════════════════════════
             BEGIN: MainHeader (Sticky Navbar)
          ═════════════════════════════════════════════════════════════ */}
          <header className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#FBF7EE]/90 border-b border-purple-200/80 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              
              {/* Brand Logo with Scrapbook sticker style */}
              <a className="flex items-center gap-2 group cursor-pointer" href="#hero">
                <div className="relative inline-block rotate-[-2deg] transition-transform group-hover:rotate-0">
                  <div className="washi-tape-purple absolute -top-2 left-3 w-10 h-3 rounded-sm rotate-6 z-10 opacity-75"></div>
                  <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white font-display text-xl sm:text-2xl px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-purple-400">
                    <span className="font-handwritten text-purple-200 text-2xl -rotate-6 mr-0.5">elga&apos;s</span>
                    <span className="tracking-wider uppercase font-extrabold text-sm sm:text-base">PORTFOLIO</span>
                    <i className="fa-solid fa-crown text-yellow-300 text-xs ml-1 animate-pulse"></i>
                  </div>
                </div>
              </a>

              {/* Desktop Navigation Menu */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/80 px-4 py-1.5 rounded-full border border-purple-200 shadow-sm text-xs lg:text-sm font-semibold text-slate-700">
                <a className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-700 text-white shadow-sm transition hover:bg-purple-800" href="#hero">
                  <i className="fa-solid fa-house text-xs"></i>
                  <span>Home</span>
                </a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#about">About</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#skills">Skills</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#experience">Experience</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#projects">Projects</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#research">Research</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#gallery">Gallery</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#books">Books</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#certifications">Certificates</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#contact">Contact</a>
              </nav>

              {/* WhatsApp CTA Button */}
              <div className="flex items-center gap-3">
                <a 
                  className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0" 
                  href={WHATSAPP_URL} 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span className="hidden sm:inline">WhatsApp</span>
                  <span className="text-xs bg-emerald-800/40 px-2 py-0.5 rounded-full border border-emerald-400/30">Hubungi</span>
                </a>
              </div>
            </div>
          </header>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: HeroSection (3D Typography & Character)
          ═════════════════════════════════════════════════════════════ */}
          <section className="relative pt-6 pb-20 sm:pb-28 overflow-hidden" id="hero">
            
            {/* Hand-drawn Scrapbook Doodles, Scribbles & Stickers Background */}
            <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
              
              {/* Slogan with crown doodle (Top Left) */}
              <div className="absolute top-5 left-4 sm:left-10 lg:left-14 rotate-[-9deg] z-10">
                <div className="font-handwritten text-lg sm:text-2xl text-slate-700 leading-tight flex flex-col">
                  <span className="flex items-center gap-1.5 text-purple-900 font-bold">
                    Dream it.
                    <i className="fa-solid fa-crown text-amber-400 text-sm rotate-12"></i>
                  </span>
                  <span className="text-purple-700 font-bold ml-2">Build it.</span>
                  <span className="text-slate-800 ml-4 font-semibold">Innovate it ✨</span>
                </div>
                <svg className="w-16 h-4 text-purple-400 -mt-1 ml-3" fill="none" viewBox="0 0 100 20">
                  <path d="M5 12 Q 50 2 95 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3"></path>
                </svg>
              </div>

              {/* Paper Airplane with whimsical arched trail (Top Center / Right) */}
              <div className="absolute top-4 right-1/4 sm:right-1/3 hidden md:block rotate-6">
                <svg className="text-purple-600 w-28 h-20" fill="none" viewBox="0 0 140 90">
                  <path d="M10 75 Q 60 15 120 20" fill="none" stroke="#8B5CF6" strokeDasharray="4 4" strokeWidth="2.5" strokeLinecap="round"></path>
                  <path d="M120 20 L102 36 L118 30 L132 14 Z" fill="#6D28D9"></path>
                </svg>
              </div>

              {/* Playful Scrapbook Speech / Doodles (Top Right) */}
              <div className="absolute top-6 right-6 sm:right-12 hidden sm:block rotate-12 z-10">
                <div className="relative bg-[#FAF7F2] border-2 border-dashed border-purple-400 px-3.5 py-1.5 rounded-2xl shadow-sm text-center">
                  <p className="font-handwritten text-purple-900 font-bold text-sm sm:text-base leading-none">
                    Let&apos;s Code<br />Together! 🚀
                  </p>
                </div>
              </div>

              {/* Hand-drawn Scribble Sparks and Floating Accents */}
              <div className="absolute top-1/2 left-3 sm:left-8 text-purple-400 text-3xl font-handwritten select-none">✦</div>
              <div className="absolute bottom-16 left-12 text-amber-500 text-2xl font-handwritten select-none hidden sm:block">👑</div>
              <div className="absolute top-1/3 right-4 sm:right-8 text-purple-600 text-4xl font-handwritten select-none rotate-12">!!</div>
              <div className="absolute bottom-20 right-1/3 text-purple-300 text-2xl font-handwritten select-none">~*</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-2 sm:pt-4">
                
                {/* Left Hero Column: Dynamic 3D Scrapbook Typography & Badges */}
                <div className="lg:col-span-7 text-center lg:text-left">
                  
                  {/* Top Washi Tape over 3D Title */}
                  <div className="inline-block relative">
                    <div className="washi-tape-tan absolute -top-3 left-6 sm:left-10 w-28 sm:w-36 h-5 -rotate-3 z-20 shadow-sm"></div>
                    <div className="washi-tape-purple absolute -top-2 right-4 w-20 h-4 rotate-3 z-20 opacity-80 shadow-sm"></div>
                    
                    {/* Layered 3D Puffy PORTFOLIO Headline */}
                    <div className="font-display tracking-tight font-black select-none pt-2">
                      <h1 className="text-6xl sm:text-7xl lg:text-8xl text-3d-purple uppercase leading-[0.88] drop-shadow-md">
                        PORT<br />FOLIO
                      </h1>
                    </div>
                  </div>

                  {/* Creative Pill Badge: Full Stack & AI Specialist */}
                  <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white px-5 sm:px-6 py-2.5 rounded-full shadow-lg border-2 border-purple-400/50 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
                      <span className="font-extrabold text-sm sm:text-lg tracking-wide uppercase">Full Stack &amp;</span>
                      <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 bg-clip-text text-transparent font-black text-sm sm:text-lg uppercase">AI Specialist</span>
                      <span className="bg-purple-700/80 text-purple-200 text-xs px-2 py-0.5 rounded-full border border-purple-400/60 font-mono">&lt;/&gt;</span>
                    </div>
                  </div>

                  {/* Handwritten Slogan Quote */}
                  <div className="mt-3.5 flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-purple-400 font-handwritten text-2xl">“</span>
                    <p className="font-handwritten text-xl sm:text-2xl text-purple-900 font-bold tracking-wide leading-tight">
                      Turning Ideas Into Digital Solutions.
                    </p>
                    <span className="text-purple-400 font-handwritten text-2xl">”</span>
                  </div>

                  {/* Role Keywords with Hand-drawn Dots */}
                  <div className="mt-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-slate-700 font-medium">
                    <span className="font-handwritten text-lg sm:text-xl font-bold text-purple-900">Developer</span>
                    <span className="text-purple-400 text-sm">•</span>
                    <span className="font-handwritten text-lg sm:text-xl font-bold text-purple-900">Problem Solver</span>
                    <span className="text-purple-400 text-sm">•</span>
                    <span className="font-handwritten text-lg sm:text-xl font-bold text-purple-900">Tech Enthusiast</span>
                  </div>

                  {/* Bio Summary paragraph */}
                  <p className="mt-4 text-slate-600 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
                    Lulusan Ilmu Komputer <strong className="text-purple-900">Universitas Bumigora (IPK 3.76 / 4.00 Cum Laude)</strong>. Berfokus pada perancangan sistem backend andal, operasional server simbank skala live, software quality control, serta riset Computer Vision terakreditasi SINTA 4.
                  </p>

                  {/* Interactive Call-To-Action Buttons */}
                  <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <a className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white font-bold text-base px-7 py-3.5 rounded-full shadow-puffy transition-all transform hover:-translate-y-1 hover:brightness-110 active:translate-y-0.5 active:shadow-puffy-sm" href="#projects">
                      <span>Explore My Work</span>
                      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                      </div>
                    </a>
                    <a className="inline-flex items-center gap-2 bg-white/95 hover:bg-purple-50 text-purple-900 font-semibold text-base px-6 py-3.5 rounded-full border-2 border-purple-300 shadow-sm transition transform hover:-translate-y-0.5" href="#contact">
                      <i className="fa-regular fa-paper-plane text-purple-600"></i>
                      <span>Hubungi Saya</span>
                    </a>
                  </div>

                  {/* Scrapbook Trust / Achievement Badges Strip */}
                  <div className="mt-6 flex flex-wrap justify-center lg:justify-start items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-amber-50/80 text-amber-900 rounded-xl border border-amber-300 shadow-sm rotate-[-1deg]">
                      <span className="text-sm">🏆</span> IPK 3.76 / 4.00 (Cum Laude)
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-purple-50/80 text-purple-900 rounded-xl border border-purple-200 shadow-sm rotate-1">
                      <span className="text-sm">🛡️</span> Google AI &amp; Komdigi Certified
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-emerald-50/80 text-emerald-900 rounded-xl border border-emerald-300 shadow-sm rotate-[-1deg]">
                      <span className="text-sm">⭐</span> Penulis Jurnal SINTA 4
                    </span>
                  </div>
                </div>

                {/* Right Hero Column: Layered Organic Scrapbook Photo Collage */}
                <div className="lg:col-span-5 flex justify-center relative">
                  <div className="relative w-full max-w-md sm:max-w-lg flex flex-col items-center justify-center py-4 select-none">
                    
                    {/* Organic Multi-Layer Abstract Splash Shapes behind Character */}
                    <div className="absolute -top-6 -right-4 w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-purple-800 via-indigo-700 to-purple-600 opacity-70 splash-shape-1 blur-sm animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-[19rem] h-[19rem] sm:w-80 sm:h-80 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 opacity-80 splash-shape-2 rotate-12 shadow-2xl"></div>
                    <div className="absolute top-8 left-0 w-64 h-64 bg-brand-kraft opacity-60 splash-shape-3 -rotate-6 border border-amber-300/40"></div>

                    {/* Decorative Hand-Drawn Ring & Dashed Orbit Scribbles */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75" fill="none" viewBox="0 0 400 400">
                      <circle cx="200" cy="200" r="165" stroke="#a855f7" strokeDasharray="6 8" strokeWidth="2" transform="rotate(-15 200 200)"></circle>
                      <circle cx="200" cy="200" r="150" stroke="#FEF08A" strokeDasharray="10 6" strokeWidth="2" transform="rotate(20 200 200)"></circle>
                      <path d="M40 120 Q120 70 210 90 T360 80" stroke="#c084fc" strokeDasharray="4 6" strokeLinecap="round" strokeWidth="2.5"></path>
                      <path d="M60 310 Q160 360 280 320 T360 340" stroke="#e9d5ff" strokeDasharray="8 6" strokeLinecap="round" strokeWidth="2"></path>
                    </svg>

                    {/* Washi Tape Accents Across Corners */}
                    <div className="washi-tape-purple absolute -top-4 left-8 sm:left-12 w-28 sm:w-32 h-6 -rotate-6 z-30 shadow-md"></div>
                    <div className="washi-tape-tan absolute bottom-12 right-4 sm:right-8 w-32 h-6 rotate-3 z-30 shadow-md"></div>

                    {/* Main Character Visual Wrapper with Floating Badges */}
                    <div className="relative z-20 flex flex-col items-center">
                      <div className="relative w-64 h-72 sm:w-[19rem] sm:h-80 flex items-center justify-center">
                        
                        {/* Glow backdrop */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/40 to-transparent blur-xl"></div>
                        
                        {/* Portrait Character Cutout with hand-torn polygon contour */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          alt="Elga Alfareza, S.Kom." 
                          className="relative z-20 w-60 h-[17rem] sm:w-72 sm:h-[19rem] object-cover object-top drop-shadow-[0_20px_25px_rgba(46,8,84,0.45)] rounded-3xl transform hover:scale-105 transition-transform duration-300 border-2 border-white/60 cursor-pointer" 
                          src={photoMode === 'aida' ? '/assets/hero-aida-character.png' : '/assets/elga-sticker-cutout.png'}
                          onClick={() => setShowStudioModal(true)}
                          style={{ clipPath: 'polygon(0 0, 100% 0, 96% 92%, 84% 100%, 16% 98%, 4% 90%)' }}
                        />

                        {/* Floating Badge 1 (Top Left): System Developer & AI */}
                        <div className="absolute -top-3 -left-4 sm:-left-6 z-30 bg-purple-950/95 text-white font-mono text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-purple-400/50 flex items-center gap-2 backdrop-blur-md rotate-[-4deg]">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]"></span>
                          <span className="font-sans font-bold text-white">System Developer &amp; AI</span>
                        </div>

                        {/* Floating Badge 2 (Top Right): 3D Code Sticker Tag */}
                        <div className="absolute top-3 -right-4 sm:-right-6 z-30 bg-gradient-to-tr from-purple-800 to-indigo-700 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-mono text-base font-bold shadow-xl border-2 border-white rotate-12 hover:rotate-0 transition-transform duration-300">
                          &lt;/&gt;
                        </div>

                        {/* Floating Badge 3 (Bottom Left): Cum Laude Pill */}
                        <div className="absolute -bottom-2 -left-4 z-30 bg-amber-400 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-xl shadow-md border border-amber-300 flex items-center gap-1.5 rotate-[-2deg]">
                          <i className="fa-solid fa-star text-slate-900"></i>
                          <span>IPK 3.76 (Cum Laude)</span>
                        </div>

                        {/* Floating Badge 4 (Bottom Right): SINTA 4 Author Pill */}
                        <div className="absolute -bottom-2 -right-4 z-30 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border border-emerald-300/40 flex items-center gap-1.5 rotate-3">
                          <i className="fa-solid fa-book-bookmark"></i>
                          <span>SINTA 4 Author</span>
                        </div>
                      </div>

                      {/* Scrapbook Style Nameplate Sticker Beneath Image */}
                      <div className="mt-5 relative z-20 text-center">
                        <div className="bg-white/95 px-6 py-2.5 rounded-2xl shadow-paper border border-purple-200 rotate-[-1deg] inline-block">
                          <h3 className="text-slate-900 font-extrabold text-lg sm:text-xl tracking-tight flex items-center justify-center gap-1.5">
                            <span>Elga Alfareza, S.Kom.</span>
                            <i className="fa-solid fa-circle-check text-purple-600 text-sm"></i>
                          </h3>
                          <p className="text-purple-900 font-semibold text-xs font-sans mt-0.5">
                            Universitas Bumigora | Full Stack Dev &amp; AI Specialist
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* Scrapbook Key Metrics Ticket Strip */}
              <div className="mt-12 pt-6 border-t border-purple-200/60 max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {/* Metric 1: IPK 3.76 */}
                  <div className="relative bg-white/95 p-4 rounded-xl border border-purple-200 shadow-paper -rotate-1 hover:rotate-0 transition-transform text-center group">
                    <div className="washi-tape-tan absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 rotate-1"></div>
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-900 group-hover:scale-105 transition-transform inline-block">3.76</span>
                    <span className="text-amber-500 text-xs font-bold block">/ 4.00</span>
                    <p className="text-slate-800 text-xs font-bold mt-1">IPK S1 Cum Laude</p>
                    <p className="text-[11px] text-slate-500">Univ. Bumigora (2024)</p>
                  </div>
                  {/* Metric 2: 99.9% Server Uptime */}
                  <div className="relative bg-white/95 p-4 rounded-xl border border-purple-200 shadow-paper rotate-1 hover:rotate-0 transition-transform text-center group">
                    <div className="washi-tape-purple absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 -rotate-2"></div>
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-900 group-hover:scale-105 transition-transform inline-block">99.9%</span>
                    <span className="text-emerald-600 text-xs font-bold block">UPTIME</span>
                    <p className="text-slate-800 text-xs font-bold mt-1">Server Simbank Ops</p>
                    <p className="text-[11px] text-slate-500">CV Rajawali Live System</p>
                  </div>
                  {/* Metric 3: SINTA 4 Publication */}
                  <div className="relative bg-white/95 p-4 rounded-xl border border-purple-200 shadow-paper -rotate-1 hover:rotate-0 transition-transform text-center group">
                    <div className="washi-tape-tan absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 rotate-2"></div>
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-900 group-hover:scale-105 transition-transform inline-block">SINTA 4</span>
                    <span className="text-purple-600 text-xs font-bold block">94.6% AKURASI</span>
                    <p className="text-slate-800 text-xs font-bold mt-1">Publikasi Riset Jurnal</p>
                    <p className="text-[11px] text-slate-500">CNN Aksara Sasak &amp; ISBN</p>
                  </div>
                  {/* Metric 4: 8+ Verified Certifications */}
                  <div className="relative bg-white/95 p-4 rounded-xl border border-purple-200 shadow-paper rotate-1 hover:rotate-0 transition-transform text-center group">
                    <div className="washi-tape-purple absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 -rotate-1"></div>
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-900 group-hover:scale-105 transition-transform inline-block">8+</span>
                    <span className="text-indigo-600 text-xs font-bold block">VERIFIED</span>
                    <p className="text-slate-800 text-xs font-bold mt-1">Sertifikasi Profesional</p>
                    <p className="text-[11px] text-slate-500">Google AI, Komdigi, Kemnaker</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Torn Paper Transition 1: Paper to White/Grid
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -mt-6 select-none">
            <div className="w-full h-10 bg-brand-kraft torn-edge-top shadow-inner opacity-75"></div>
            <div className="w-full h-8 bg-[#FAF7F2] grid-notebook torn-edge-top -mt-5 relative">
              <div className="stitched-line w-full absolute top-2"></div>
            </div>
            <div className="w-full h-10 bg-white/90 torn-edge-top -mt-4 shadow-sm relative flex items-center justify-center">
              <div className="washi-tape-tan absolute -top-2 left-16 sm:left-32 w-24 h-4 rotate-[-2deg] z-30"></div>
              <div className="washi-tape-purple absolute -top-2 right-16 sm:right-40 w-28 h-4 rotate-2 z-30"></div>
              <div className="stitched-line w-11/12 mx-auto absolute bottom-1"></div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: AboutAndSkillsSection (Polaroid + Bio + Skills)
          ═════════════════════════════════════════════════════════════ */}
          <section className="relative py-14 bg-white/80 border-b border-purple-100" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Polaroid Bio Card */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div 
                    onClick={() => setShowStudioModal(true)}
                    className="relative w-full max-w-sm bg-white p-4 pt-5 pb-6 rounded-md shadow-polaroid border border-stone-200 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 cursor-pointer"
                    title="Klik untuk melihat foto studio wisuda resmi"
                  >
                    <div className="washi-tape-tan absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 rotate-1 z-20"></div>
                    
                    <div className="relative bg-slate-900 rounded-sm overflow-hidden aspect-[4/5] flex flex-col items-center justify-center p-4 text-center border border-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/elga-id-portrait.png"
                        alt="Elga Alfareza, S.Kom."
                        className="w-full h-full object-cover object-top filter contrast-110"
                      />
                      <div className="absolute bottom-2 right-2 bg-amber-400 text-slate-900 font-extrabold text-[10px] px-2 py-0.5 rounded shadow-sm">
                        IPK 3.76
                      </div>
                    </div>

                    {/* Handwritten Yellow Post-It Tape Label at the bottom */}
                    <div className="mt-4 bg-[#fef08a] p-3 rounded-sm shadow-sm border border-yellow-300 -rotate-1">
                      <p className="font-handwritten text-slate-800 text-base font-bold text-center leading-tight">
                        Elga Alfareza, S.Kom. <br />
                        <span className="text-xs text-purple-900 font-sans font-semibold">Bachelor of Computer Science</span>
                      </p>
                    </div>
                  </div>

                  {/* Contact Details Card */}
                  <div className="mt-6 w-full max-w-sm bg-purple-50/70 p-4 rounded-2xl border border-purple-200/80 text-xs space-y-2.5 text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <i className="fa-solid fa-location-dot text-purple-700 w-4 text-center"></i>
                      <span>Mataram, Nusa Tenggara Barat, Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <i className="fa-solid fa-envelope text-purple-700 w-4 text-center"></i>
                      <a href={`mailto:${EMAIL_ADDRESS}`} className="truncate hover:underline">{EMAIL_ADDRESS}</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <i className="fa-brands fa-whatsapp text-purple-700 w-4 text-center"></i>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">085238208849</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <i className="fa-brands fa-linkedin text-purple-700 w-4 text-center"></i>
                      <a className="text-purple-800 font-semibold hover:underline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/elga-alfareza
                      </a>
                    </div>
                  </div>
                </div>

                {/* Middle Column: About Me Bio & Academic Cards */}
                <div className="lg:col-span-4 space-y-5">
                  <div className="inline-block relative">
                    <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="font-handwritten text-purple-700 text-4xl">About</span> Me
                      <span className="text-2xl text-purple-500">✨</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mt-1"></div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 text-slate-700 text-sm leading-relaxed space-y-3">
                    <p>
                      Halo! Saya <strong>Elga Alfareza, S.Kom.</strong>, lulusan S1 Ilmu Komputer 
                      (<span className="text-purple-800 font-bold">IPK 3.76 / 4.00 - Cum Laude</span>) dari 
                      <strong> Universitas Bumigora</strong>. Saya bersemangat dalam menggabungkan pengembangan aplikasi Full Stack modern dengan kecerdasan buatan (Machine Learning) dan pemeliharaan infrastruktur sistem.
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Memiliki pengalaman profesional dalam <strong>operasional server simbank skala produksi</strong>, <strong>Quality Control (QC) perangkat lunak &amp; keras</strong>, serta pengembangan model <strong>Deep Learning CNN</strong> untuk pengenalan aksara budaya yang terpublikasi di jurnal ilmiah terakreditasi nasional.
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Tersertifikasi resmi oleh <strong>Google AI</strong>, <strong>Komdigi</strong>, dan <strong>BPVP</strong>. Siap berkontribusi aktif dalam perancangan, implementasi, dan operasional solusi teknologi.
                    </p>
                  </div>

                  {/* Education & Specialization Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 text-base shadow-sm">
                        <i className="fa-solid fa-graduation-cap"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">Education</h5>
                        <p className="text-xs text-purple-900 font-semibold">Universitas Bumigora</p>
                        <p className="text-[11px] text-slate-600">Bachelor of Computer Science (S.Kom.) • GPA: 3.76 / 4.00</p>
                      </div>
                    </div>
                    <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center shrink-0 text-base shadow-sm">
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">Specialization</h5>
                        <p className="text-xs text-purple-900 font-semibold">Full Stack &amp; AI Engineering</p>
                        <p className="text-[11px] text-slate-600">Deep Learning (CNN), Server Systems, Quality Control, Data Science</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Skills Matrix Categorized with 3D Glossy Icons */}
                <div className="lg:col-span-4 space-y-4" id="skills">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-display font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="font-handwritten text-purple-700 text-4xl">Technical</span> Skills
                    </h2>
                    <span className="font-handwritten text-2xl text-purple-600 font-bold rotate-12">!!</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Matriks keahlian perangkat lunak, AI/ML, sistem server, dan operasional:
                  </p>

                  {/* Category 1: Development */}
                  <div className="bg-white p-3.5 rounded-2xl shadow-paper border border-purple-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 mb-2.5 flex items-center gap-1.5">
                      <i className="fa-solid fa-code text-purple-600"></i> Development (Frontend &amp; Backend)
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-indigo-900 to-purple-950 flex items-center justify-center text-amber-400 text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-brands fa-python"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">Python</span>
                      </div>
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-yellow-500 to-amber-700 flex items-center justify-center text-slate-900 text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-brands fa-js font-bold"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">JavaScript</span>
                      </div>
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-cyan-600 to-blue-800 flex items-center justify-center text-white text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-brands fa-react"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">React.js</span>
                      </div>
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-orange-600 to-red-700 flex items-center justify-center text-white text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-brands fa-html5"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">HTML5/CSS</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 2: AI & Machine Learning */}
                  <div className="bg-white p-3.5 rounded-2xl shadow-paper border border-purple-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 mb-2.5 flex items-center gap-1.5">
                      <i className="fa-solid fa-brain text-purple-600"></i> AI, Deep Learning &amp; Data
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-orange-500 to-amber-700 flex items-center justify-center text-white text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-microchip"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">TensorFlow</span>
                      </div>
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-purple-800 to-purple-950 flex items-center justify-center text-cyan-300 text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-network-wired"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">CNN / VGG</span>
                      </div>
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-blue-700 to-indigo-900 flex items-center justify-center text-sky-200 text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-eye"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">OpenCV</span>
                      </div>
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-rose-600 to-pink-900 flex items-center justify-center text-white text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">Streamlit</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 3: IT Operations & Systems */}
                  <div className="bg-white p-3.5 rounded-2xl shadow-paper border border-purple-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 mb-2.5 flex items-center gap-1.5">
                      <i className="fa-solid fa-server text-purple-600"></i> Systems &amp; IT Operations
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-violet-800 to-purple-950 flex items-center justify-center text-emerald-300 text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-sim-card"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">Simbank</span>
                      </div>
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-purple-900 to-slate-950 flex items-center justify-center text-fuchsia-300 text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-vial-circle-check"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">QC Testing</span>
                      </div>
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-indigo-900 to-purple-950 flex items-center justify-center text-orange-300 text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-screwdriver-wrench"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">Hardware</span>
                      </div>
                      <div className="group flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-slate-800 to-indigo-950 flex items-center justify-center text-cyan-300 text-lg shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-database"></i>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 mt-1">SQL / DB</span>
                      </div>
                    </div>
                  </div>

                  {/* Tools & Productivity Banner */}
                  <div className="bg-purple-50/70 p-3 rounded-2xl border border-purple-200/80 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <i className="fa-solid fa-table-cells text-emerald-600"></i> Excel Lanjutan (BPVP 20 JP)
                    </span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <i className="fa-brands fa-git-alt text-orange-600"></i> Git &amp; GitHub
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Torn Paper Transition 2: White to Navy Deckle Edge
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -mt-6 select-none">
            <div className="w-full h-9 bg-purple-700/80 torn-edge-top opacity-80"></div>
            <div className="w-full h-8 bg-[#FAF7F2] grid-notebook torn-edge-top -mt-5 relative">
              <div className="stitched-line w-full absolute top-2 border-purple-400"></div>
            </div>
            <div className="w-full h-10 bg-gradient-to-b from-slate-900 to-indigo-950 torn-edge-top -mt-4 shadow-lg relative flex items-center justify-between px-8 sm:px-24">
              <div className="washi-tape-tan absolute -top-2 left-1/4 w-28 h-5 rotate-1 z-30"></div>
              <div className="washi-tape-purple absolute -top-2 right-1/4 w-28 h-5 -rotate-2 z-30"></div>
              <div className="stitched-line w-11/12 mx-auto absolute bottom-2 border-purple-500/50"></div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: ExperienceSection (Timeline)
          ═════════════════════════════════════════════════════════════ */}
          <section className="relative bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white py-16 overflow-hidden" id="experience">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              
              {/* Section Title & Hand-Drawn Slogan */}
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-block relative">
                  <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-wide">
                    <span className="font-handwritten text-purple-300 text-4xl sm:text-5xl block sm:inline">Experience</span>
                  </h2>
                  <div className="w-32 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
                </div>
                <p className="text-purple-200/90 text-sm sm:text-base mt-2">
                  Rekam jejak kontribusi dalam operasional sistem, kualitas perangkat, data, dan edukasi
                </p>
                <div className="mt-2 font-handwritten text-purple-300 text-xl sm:text-2xl font-bold rotate-[-2deg]">
                  ~ Keep Learning, Keep Growing ~
                </div>
              </div>

              {/* Experience Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                
                {/* Card 1 */}
                <div className="relative bg-white/5 border border-purple-500/30 hover:border-purple-400 p-5 rounded-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/40 text-purple-300 border border-purple-400/50 flex items-center justify-center text-xl shadow-lg mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                    <i className="fa-solid fa-server"></i>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                    2026 – Sekarang
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">CV RAJAWALI</h3>
                  <p className="text-purple-300 text-xs font-semibold">System Operator Officer</p>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                    Pengelolaan &amp; pemeliharaan server simbank, monitoring transmisi kartu SIM live, sinkronisasi inventori log, dan troubleshooting jaringan perangkat.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="relative bg-white/5 border border-purple-500/30 hover:border-purple-400 p-5 rounded-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/40 text-indigo-300 border border-indigo-400/50 flex items-center justify-center text-xl shadow-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                    <i className="fa-solid fa-microchip"></i>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/40">
                    2025 – 2026
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">CV SINAR MUTIARA BALI</h3>
                  <p className="text-purple-300 text-xs font-semibold">Staff Operasional &amp; QC</p>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                    Quality Control (QC) software &amp; hardware kendaraan/logistik, verifikasi spesifikasi komponen, pelaporan inventarisasi pergudangan.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="relative bg-white/5 border border-purple-500/30 hover:border-purple-400 p-5 rounded-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/40 text-purple-300 border border-purple-400/50 flex items-center justify-center text-xl shadow-lg mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                    <i className="fa-solid fa-file-invoice"></i>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/40">
                    2025
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 leading-tight">IPHI (Ikatan Haji Indonesia)</h3>
                  <p className="text-purple-300 text-xs font-semibold">Computer Operator</p>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                    Digitalisasi berkas pendaftaran jemaah haji, pemrosesan data anggota secara komputerisasi, dan perapian arsip digital jemaah secara sistematis.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="relative bg-white/5 border border-purple-500/30 hover:border-purple-400 p-5 rounded-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/40 text-indigo-300 border border-indigo-400/50 flex items-center justify-center text-xl shadow-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                    <i className="fa-solid fa-chalkboard-user"></i>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/40">
                    2024
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">KEMDIKBUDRISTEK</h3>
                  <p className="text-purple-300 text-xs font-semibold">Kampus Mengajar 7 - SMPN 20</p>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                    Pendampingan digitalisasi sekolah, penguatan Asesmen Kompetensi Minimum (AKM), dan pelatihan literasi komputasi bagi siswa dan guru.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Torn Paper Transition 3: Navy to Cream Paper Deckle Edge
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -mt-6 select-none">
            <div className="w-full h-9 bg-indigo-950/70 torn-edge-top"></div>
            <div className="w-full h-8 bg-brand-kraft torn-edge-top -mt-5 relative">
              <div className="stitched-line w-full absolute top-2 border-amber-400/60"></div>
            </div>
            <div className="w-full h-10 paper-texture torn-edge-top -mt-4 shadow-md relative">
              <div className="washi-tape-purple absolute -top-2 left-12 sm:left-24 w-28 h-4.5 -rotate-2 z-30"></div>
              <div className="washi-tape-tan absolute -top-2 right-16 sm:right-36 w-32 h-4.5 rotate-1 z-30"></div>
              <div className="stitched-line w-11/12 mx-auto absolute bottom-1 border-purple-400/50"></div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: SelectedWorksSection (6 Cards)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 relative" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header with Star Doodle */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <span className="text-amber-500 text-3xl font-handwritten">⭐</span>
                    <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
                      Selected Works
                    </h2>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                    Aplikasi web, sistem operasional backend, serta platform Machine Learning yang telah dirancang &amp; diimplementasikan oleh Elga Alfareza.
                  </p>
                </div>
                <a className="inline-flex items-center gap-2 text-xs font-bold text-purple-800 bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-full border border-purple-300 transition" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <span>View All Repositories</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              {/* Project Grid of 6 Works */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Project 01: Sasak Script Classification */}
                <div className="group relative bg-white rounded-3xl p-5 shadow-paper border border-purple-200 transition-all hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
                  <div className="washi-tape-tan absolute -top-3 left-6 w-24 h-5 -rotate-2 z-10"></div>
                  <div>
                    <div className="relative w-full h-44 rounded-2xl bg-gradient-to-tr from-purple-900 via-indigo-900 to-purple-800 overflow-hidden mb-4 border border-purple-300 flex items-center justify-center text-center p-3">
                      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                      <span className="absolute top-3 left-3 bg-purple-700 text-white font-mono text-xs font-bold px-2 py-0.5 rounded-lg shadow-sm">01</span>
                      <span className="absolute top-3 right-3 bg-purple-500/40 text-purple-200 text-[10px] font-mono px-2 py-0.5 rounded-full border border-purple-300/40">AI / Streamlit</span>
                      <div className="relative z-10">
                        <div className="text-3xl text-amber-300 mb-1 font-serif tracking-widest font-bold">ᬅ ᬓ ᬱ ᬭ</div>
                        <p className="text-white font-bold text-sm">Sasak Script AI Classifier</p>
                        <p className="text-purple-200 text-[11px] font-mono">Accuracy 94.6% • VGG16/VGG19</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">AI &amp; Computer Vision</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-purple-800 transition">
                      Sasak Script Classification Web App
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      Platform web interaktif pengenalan dan klasifikasi citra tulisan tangan aksara tradisional Sasak berbasis Deep Learning Convolutional Neural Network (CNN).
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">Python • CNN • OpenCV</span>
                    <a className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900" href="#research">
                      <span>View Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

                {/* Project 02: Diabetes Risk Prediction System */}
                <div className="group relative bg-white rounded-3xl p-5 shadow-paper border border-purple-200 transition-all hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
                  <div className="washi-tape-purple absolute -top-3 right-6 w-24 h-5 rotate-2 z-10"></div>
                  <div>
                    <div className="relative w-full h-44 rounded-2xl bg-gradient-to-tr from-sky-900 via-blue-900 to-indigo-950 overflow-hidden mb-4 border border-blue-300 flex items-center justify-center text-center p-3">
                      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                      <span className="absolute top-3 left-3 bg-indigo-700 text-white font-mono text-xs font-bold px-2 py-0.5 rounded-lg shadow-sm">02</span>
                      <span className="absolute top-3 right-3 bg-sky-500/40 text-sky-200 text-[10px] font-mono px-2 py-0.5 rounded-full border border-sky-300/40">Machine Learning</span>
                      <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto rounded-full bg-sky-500/30 flex items-center justify-center text-sky-300 text-2xl mb-1 border border-sky-300/40">
                          <i className="fa-solid fa-heart-pulse"></i>
                        </div>
                        <p className="text-white font-bold text-sm">Diabetes Risk Predictor</p>
                        <p className="text-sky-200 text-[11px] font-mono">Ensemble &amp; Random Forest</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Health Tech ML</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-purple-800 transition">
                      Diabetes Risk Prediction Web System
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      Sistem prediksi risiko diabetes berbasis indikator klinis pasien menggunakan algoritma supervised learning dengan visualisasi metrik feature importance.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">Python • Scikit-Learn • Streamlit</span>
                    <a className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                      <span>View Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

                {/* Project 03: VGG16 vs VGG19 Architecture Benchmark */}
                <div className="group relative bg-white rounded-3xl p-5 shadow-paper border border-purple-200 transition-all hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
                  <div className="washi-tape-tan absolute -top-3 left-8 w-24 h-5 rotate-1 z-10"></div>
                  <div>
                    <div className="relative w-full h-44 rounded-2xl bg-gradient-to-tr from-purple-950 via-slate-900 to-indigo-900 overflow-hidden mb-4 border border-purple-300 flex items-center justify-center text-center p-3">
                      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                      <span className="absolute top-3 left-3 bg-purple-700 text-white font-mono text-xs font-bold px-2 py-0.5 rounded-lg shadow-sm">03</span>
                      <span className="absolute top-3 right-3 bg-purple-500/40 text-purple-200 text-[10px] font-mono px-2 py-0.5 rounded-full border border-purple-300/40">Deep Learning Benchmark</span>
                      <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 text-cyan-300 text-2xl mb-1">
                          <i className="fa-solid fa-diagram-project"></i>
                          <span className="text-xs font-mono font-bold bg-white/10 px-2 py-0.5 rounded">VGG16 vs VGG19</span>
                        </div>
                        <p className="text-white font-bold text-sm">Deep CNN Architecture Study</p>
                        <p className="text-purple-200 text-[11px] font-mono">Transfer Learning &amp; Fine-Tuning</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Computer Vision Study</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-purple-800 transition">
                      VGG16 vs VGG19 Neural Architectures
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      Komparasi mendalam transfer learning Convolutional Neural Network pada dataset citra spesifik, menguji epoch, learning rate, loss gradient, dan f1-score.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">TensorFlow • PyTorch • Matplotlib</span>
                    <a className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900" href="#research">
                      <span>View Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

                {/* Project 04: Vehicle Inspection & Logistics Platform */}
                <div className="group relative bg-white rounded-3xl p-5 shadow-paper border border-purple-200 transition-all hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
                  <div className="washi-tape-tan absolute -top-3 right-8 w-24 h-5 -rotate-2 z-10"></div>
                  <div>
                    <div className="relative w-full h-44 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-800 overflow-hidden mb-4 border border-stone-300 flex items-center justify-center text-center p-3">
                      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                      <span className="absolute top-3 left-3 bg-indigo-700 text-white font-mono text-xs font-bold px-2 py-0.5 rounded-lg shadow-sm">04</span>
                      <span className="absolute top-3 right-3 bg-emerald-500/40 text-emerald-200 text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-300/40">Logistics &amp; QC Web</span>
                      <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/30 flex items-center justify-center text-amber-300 text-2xl mb-1 border border-amber-300/40">
                          <i className="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <p className="text-white font-bold text-sm">Vehicle Inspection &amp; QC Platform</p>
                        <p className="text-amber-200 text-[11px] font-mono">CV Sinar Mutiara Bali</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Enterprise QC Web</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-purple-800 transition">
                      Vehicle Inspection &amp; Logistics Web App
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      Dashboard inspeksi kelayakan kendaraan, checklist quality control (QC) armada, dan sinkronisasi logistik suku cadang pergudangan secara realtime.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">React • Node.js • PostgreSQL</span>
                    <a className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                      <span>View Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

                {/* Project 05: Simbank Infrastructure Monitor */}
                <div className="group relative bg-white rounded-3xl p-5 shadow-paper border border-purple-200 transition-all hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
                  <div className="washi-tape-purple absolute -top-3 left-6 w-24 h-5 rotate-1 z-10"></div>
                  <div>
                    <div className="relative w-full h-44 rounded-2xl bg-gradient-to-tr from-violet-950 via-purple-900 to-indigo-950 overflow-hidden mb-4 border border-purple-300 flex items-center justify-center text-center p-3">
                      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                      <span className="absolute top-3 left-3 bg-purple-700 text-white font-mono text-xs font-bold px-2 py-0.5 rounded-lg shadow-sm">05</span>
                      <span className="absolute top-3 right-3 bg-emerald-500/40 text-emerald-200 text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-300/40">Server Ops Web</span>
                      <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-300 text-2xl mb-1 border border-emerald-300/40">
                          <i className="fa-solid fa-network-wired"></i>
                        </div>
                        <p className="text-white font-bold text-sm">Simbank Infrastructure Monitor</p>
                        <p className="text-purple-200 text-[11px] font-mono">CV Rajawali SIM Fleet Ops</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Ops &amp; Infrastructure</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-purple-800 transition">
                      Simbank Monitor &amp; Inventory Sync
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      Alat monitoring kesehatan server simbank, integrasi slot kartu SIM, notifikasi status live koneksi, serta auto-sinkronisasi lembar sebar inventori.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">Python • FastAPI • WebSockets</span>
                    <a className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                      <span>View Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

                {/* Project 06: Digital Travel Memory */}
                <div className="group relative bg-white rounded-3xl p-5 shadow-paper border border-purple-200 transition-all hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
                  <div className="washi-tape-tan absolute -top-3 right-6 w-24 h-5 -rotate-1 z-10"></div>
                  <div>
                    <div className="relative w-full h-44 rounded-2xl bg-gradient-to-tr from-teal-900 via-emerald-900 to-indigo-950 overflow-hidden mb-4 border border-teal-300 flex items-center justify-center text-center p-3">
                      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                      <span className="absolute top-3 left-3 bg-teal-700 text-white font-mono text-xs font-bold px-2 py-0.5 rounded-lg shadow-sm">06</span>
                      <span className="absolute top-3 right-3 bg-teal-500/40 text-teal-200 text-[10px] font-mono px-2 py-0.5 rounded-full border border-teal-300/40">Geo Web Platform</span>
                      <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto rounded-full bg-teal-500/30 flex items-center justify-center text-teal-200 text-2xl mb-1 border border-teal-300/40">
                          <i className="fa-solid fa-map-location-dot"></i>
                        </div>
                        <p className="text-white font-bold text-sm">Digital Travel Memory &amp; Maps</p>
                        <p className="text-teal-200 text-[11px] font-mono">Geotagging &amp; Scrapbook Journal</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-teal-100 text-teal-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Interactive Web</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-purple-800 transition">
                      Digital Travel Memory &amp; Geojournal
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      Jurnal digital interaktif penanda lokasi dan dokumentasi foto berbasis geolokasi peta open-source dengan catatan visual scrapbook.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">React • Leaflet Map • Tailwind</span>
                    <a className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                      <span>View Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Torn Paper Transition 4: Cream Paper to Grid Notebook
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -mt-6 select-none">
            <div className="w-full h-9 bg-purple-200/90 torn-edge-top"></div>
            <div className="w-full h-8 bg-brand-kraft torn-edge-top -mt-5 relative">
              <div className="stitched-line w-full absolute top-2 border-purple-400/50"></div>
            </div>
            <div className="w-full h-10 bg-[#FAF7F2] grid-notebook torn-edge-top -mt-4 shadow-sm relative">
              <div className="washi-tape-tan absolute -top-2 left-1/3 w-32 h-5 rotate-[-1deg] z-30"></div>
              <div className="washi-tape-purple absolute -top-2 right-1/3 w-28 h-5 rotate-2 z-30"></div>
              <div className="stitched-line w-11/12 mx-auto absolute bottom-1 border-purple-300"></div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: ResearchAndProjectsSection (SINTA 4 & Book)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 bg-[#FAF7F2] grid-notebook relative" id="research">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                  Inovasi, Riset &amp; Publikasi Akademik
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-2">
                  Hasil Penelitian AI &amp; Publikasi Ilmiah
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Dedikasi riset terstruktur dalam implementasi Convolutional Neural Networks untuk preservasi digital manuskrip aksara tradisional Sasak dan komputasi cerdas.
                </p>
              </div>

              {/* Research Highlights Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Research Card 1: CNN Model */}
                <div className="relative bg-white rounded-3xl p-6 shadow-paper border border-purple-200 transition-transform hover:-translate-y-1.5 flex flex-col justify-between">
                  <div className="washi-tape-tan absolute -top-3 left-8 w-24 h-5 rotate-[-3deg]"></div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3 text-purple-700 font-bold font-mono">
                      <span>Deep Learning / CNN</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Akurasi 94.6%</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      Klasifikasi &amp; Pengenalan Aksara Sasak Berbasis CNN
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      Riset pengembangan Convolutional Neural Network (CNN) dengan dataset citra aksara Sasak tulisan tangan. Meliputi augmentasi data, grayscale thresholding, reduksi noise citra, serta uji performa melalui Confusion Matrix, Precision, Recall, dan F1-Score tinggi.
                    </p>
                    <div className="mt-4 p-3 bg-purple-50 rounded-xl border border-purple-200/80 text-xs space-y-1 text-slate-700">
                      <div><strong>Metodologi:</strong> Custom CNN, VGG16 Transfer Learning</div>
                      <div><strong>Optimalisasi:</strong> Adam Optimizer, Dropout Regularization</div>
                      <div><strong>Evaluasi:</strong> 94.6% Classification Accuracy</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Python • TensorFlow • OpenCV</span>
                    <span className="text-purple-700 font-bold"><i className="fa-solid fa-microchip"></i> Core ML</span>
                  </div>
                </div>

                {/* Research Card 2: SINTA 4 Journal */}
                <div className="relative bg-white rounded-3xl p-6 shadow-paper border border-purple-200 transition-transform hover:-translate-y-1.5 flex flex-col justify-between">
                  <div className="washi-tape-purple absolute -top-3 left-10 w-24 h-5 rotate-2"></div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3 text-emerald-700 font-bold font-mono">
                      <span>Publikasi Ilmiah Terindeks</span>
                      <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">SINTA 4 Terakreditasi</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      Publikasi Jurnal Nasional Terakreditasi SINTA 4
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      Penulis utama artikel jurnal ilmiah bidang informatika dan visi komputer. Mengangkat digitalisasi dan pengenalan karakter aksara nusantara yang telah melalui proses peer-review ketat dewan editor jurnal nasional bereputasi SINTA 4 Kemendikbudristek.
                    </p>
                    <div className="mt-4 p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80 text-xs space-y-1 text-slate-700">
                      <div><strong>Status Indeks:</strong> SINTA Peringkat 4 (Kemendikbud)</div>
                      <div><strong>Peran Penulis:</strong> Penulis Utama (First Author)</div>
                      <div><strong>Akses:</strong> Open Access Peer-Reviewed Journal</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Terindeks Nasional SINTA</span>
                    <a className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1" href={DRIVE_URL} target="_blank" rel="noopener noreferrer">
                      <span>Buka Sertifikat &amp; Paper</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

                {/* Research Card 3: Published Book Blueprint */}
                <div className="relative bg-white rounded-3xl p-6 shadow-paper border border-purple-200 transition-transform hover:-translate-y-1.5 flex flex-col justify-between">
                  <div className="washi-tape-tan absolute -top-3 right-8 w-24 h-5 rotate-3"></div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3 text-amber-800 font-bold font-mono">
                      <span>Karya Buku / ISBN</span>
                      <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-bold">Published Book</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      Buku: &quot;Blueprint for Sasak Script Digitization&quot;
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      Penulisan buku referensi akademis mengenai arsitektur digitalisasi aksara lokal Sasak. Menjabarkan pipeline data acquisition, standarisasi representasi digital glif aksara, hingga integrasi kecerdasan buatan dalam aplikasi preservasi budaya.
                    </p>
                    <div className="mt-4 p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs space-y-1 text-slate-700">
                      <div><strong>Tipe Karya:</strong> Buku Referensi Ilmiah Ber-ISBN</div>
                      <div><strong>Kontribusi:</strong> Konsep Teknis &amp; Implementasi AI</div>
                      <div><strong>Penerbit:</strong> Universitas Bumigora Press</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Book Author &amp; Researcher</span>
                    <span className="text-amber-800 font-bold"><i className="fa-solid fa-feather"></i> Buku Resmi</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Torn Paper Transition 5: Grid to Paper Background
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -mt-6 select-none">
            <div className="w-full h-9 bg-[#FAF7F2] grid-notebook torn-edge-top"></div>
            <div className="w-full h-8 bg-purple-100 torn-edge-top -mt-5 relative">
              <div className="stitched-line w-full absolute top-2 border-purple-400/60"></div>
            </div>
            <div className="w-full h-10 paper-texture torn-edge-top -mt-4 shadow-sm relative">
              <div className="washi-tape-purple absolute -top-2 left-16 sm:left-40 w-28 h-4.5 -rotate-2 z-30"></div>
              <div className="washi-tape-tan absolute -top-2 right-20 sm:right-48 w-32 h-4.5 rotate-2 z-30"></div>
              <div className="stitched-line w-11/12 mx-auto absolute bottom-1 border-purple-300/60"></div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: PhotoGallerySection (Polaroid Photos)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 relative" id="gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-block relative">
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 flex items-center justify-center gap-2">
                    <span className="font-handwritten text-purple-700 text-4xl">Activity</span> Gallery
                    <span className="text-amber-500 text-2xl">📸</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mx-auto mt-1"></div>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mt-2">
                  Kilas balik aktivitas operasional server, riset komputasi, peluncuran buku, dan kegiatan edukasi:
                </p>
              </div>

              {/* Scrapbook Polaroid Cards Grid (8 Real Activity Photos) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ACTIVITY_PHOTOS.map((photo, pIdx) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(pIdx)}
                    className={`relative bg-white p-3.5 pb-5 rounded-md shadow-polaroid border border-stone-200 ${photo.rotation} hover:rotate-0 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:shadow-xl`}
                    title="Klik untuk memperbesar foto dokumentasi"
                  >
                    {/* Washi Tape */}
                    <div className={`${photo.tape} absolute ${photo.tapePosition} z-20`}></div>

                    {/* Photo Container */}
                    <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-stone-900 border border-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.url}
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Photo Badge */}
                      <span className={`absolute bottom-1 right-1.5 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm ${photo.tagColor}`}>
                        {photo.tag}
                      </span>
                      {/* Photo Index Indicator */}
                      <span className="absolute top-1 left-1.5 bg-black/60 text-white font-mono text-[8px] px-1 py-0.5 rounded">
                        #{String(pIdx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Yellow Post-It Label */}
                    <div className="mt-3 bg-[#fef08a] p-2.5 rounded-sm border border-yellow-300 rotate-[-0.5deg]">
                      <p className="font-handwritten text-slate-800 text-sm font-bold text-center leading-tight">
                        {photo.title}
                      </p>
                      <p className="text-[10px] text-purple-900 text-center font-sans font-semibold mt-0.5">
                        {photo.category}
                      </p>
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="mt-2 text-center">
                      <span className="text-[10px] text-purple-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                        <i className="fa-solid fa-magnifying-glass-plus text-xs"></i> Klik untuk perbesar
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Torn Paper Transition: Gallery to Favorite Books
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -mt-6 select-none">
            <div className="w-full h-9 bg-brand-kraft torn-edge-top"></div>
            <div className="w-full h-8 bg-[#FAF7F2] grid-notebook torn-edge-top -mt-5 relative">
              <div className="stitched-line w-full absolute top-2 border-purple-400"></div>
            </div>
            <div className="w-full h-10 bg-[#FAF7F2] grid-notebook torn-edge-top -mt-4 shadow-sm relative">
              <div className="washi-tape-purple absolute -top-2 left-1/3 w-32 h-5 -rotate-1 z-30"></div>
              <div className="washi-tape-tan absolute -top-2 right-1/3 w-28 h-5 rotate-2 z-30"></div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: FavoriteBooksSection (Scrapbook Mindset & Readings)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 bg-[#FAF7F2] grid-notebook relative" id="books">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-block relative">
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 flex items-center justify-center gap-2">
                    <span className="font-handwritten text-purple-700 text-4xl">Favorite Books</span> &amp; Mindset
                    <span className="text-amber-500 text-2xl">📚</span>
                  </h2>
                  <div className="w-28 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mx-auto mt-1"></div>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  Buku-buku yang membentuk etos kerja, ketangguhan mental operasional 99.9%, dan kepemilikan rekayasa sistem yang saya terapkan dalam setiap proyek teknologi:
                </p>
              </div>

              {/* 3 Books Scrapbook Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FAVORITE_BOOKS.map((book, idx) => (
                  <div 
                    key={book.id}
                    className={`relative bg-white p-5 rounded-2xl shadow-polaroid border border-stone-200 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                      idx === 0 ? '-rotate-1 hover:rotate-0' : idx === 1 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'
                    }`}
                  >
                    {/* Washi Tape */}
                    <div className={`${idx % 2 === 0 ? 'washi-tape-tan' : 'washi-tape-purple'} absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-2'} z-20`}></div>

                    <div>
                      {/* Book Cover Frame */}
                      <div className="relative w-full aspect-[3/4] max-h-64 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center p-3 border border-stone-200 shadow-inner group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={book.cover} 
                          alt={book.title} 
                          className="max-h-full object-contain drop-shadow-[0_12px_15px_rgba(0,0,0,0.25)] rounded-md transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className={`absolute top-2 left-2 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border shadow-xs ${book.badgeClass}`}>
                          {book.pillar}
                        </span>
                      </div>

                      {/* Title & Author */}
                      <div className="mt-4">
                        <h3 className="font-display font-extrabold text-slate-900 text-lg leading-snug">
                          {book.title}
                        </h3>
                        <p className="text-xs text-purple-900 font-semibold mt-0.5">
                          {book.author} <span className="text-slate-400 font-normal">{book.coAuthor}</span>
                        </p>
                        <p className="text-[11px] text-slate-500 italic mt-0.5">
                          {book.subtitle}
                        </p>
                      </div>

                      {/* Sticky Quote */}
                      <div className="mt-3.5 bg-[#fef08a] p-3 rounded-lg border border-yellow-300 shadow-xs rotate-[-0.5deg]">
                        <p className="font-handwritten text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
                          &ldquo;{book.quote}&rdquo;
                        </p>
                      </div>

                      {/* Engineering Impact */}
                      <div className="mt-3 bg-purple-50/70 p-3 rounded-xl border border-purple-200/60 text-xs text-slate-700">
                        <span className="font-bold text-purple-900 block text-[11px] mb-1">
                          ⚡ Relevansi Rekayasa Sistem:
                        </span>
                        <p className="text-[11px] leading-relaxed text-slate-600">
                          {book.personalImpact}
                        </p>
                      </div>
                    </div>

                    {/* View Reading Notes Button */}
                    <div className="mt-4 pt-3 border-t border-stone-200">
                      <button
                        onClick={() => setSelectedBook(book)}
                        className="w-full py-2 px-3 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-sans text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all transform active:scale-95 cursor-pointer"
                      >
                        <i className="fa-solid fa-book-open text-xs"></i>
                        <span>Buka Catatan Pembelajaran</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Torn Paper Transition 6: Paper to Gray/Khaki Section
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -mt-6 select-none">
            <div className="w-full h-9 bg-brand-kraft torn-edge-top"></div>
            <div className="w-full h-8 bg-[#FAF7F2] grid-notebook torn-edge-top -mt-5 relative">
              <div className="stitched-line w-full absolute top-2 border-purple-400"></div>
            </div>
            <div className="w-full h-10 bg-[#EFECE4] torn-edge-top -mt-4 shadow-sm relative">
              <div className="washi-tape-tan absolute -top-2 left-1/4 w-32 h-5 -rotate-1 z-30"></div>
              <div className="washi-tape-purple absolute -top-2 right-1/4 w-28 h-5 rotate-2 z-30"></div>
              <div className="stitched-line w-11/12 mx-auto absolute bottom-1 border-stone-400/60"></div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: CertificationsSection (8 Cards)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 bg-[#EFECE4] border-b border-stone-300/80" id="certifications">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="font-handwritten text-purple-700 text-2xl font-bold">Verified Credentials</span>
                  <h2 className="text-3xl font-display font-extrabold text-slate-900">
                    Sertifikasi &amp; Pelatihan Profesional
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                  Pengakuan kompetensi dari institusi global, kementerian, dan balai vokasi nasional dalam bidang Kecerdasan Buatan, IT Support, Pengolahan Data Spreadsheet, dan Keselamatan Kerja (K3).
                </p>
              </div>

              {/* Comprehensive Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                
                {/* Cert 1: Google AI */}
                <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl shrink-0">
                      <i className="fa-brands fa-google"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">Google AI Professional</h4>
                      <p className="text-[11px] text-slate-500">Coursera x Google (7 Kursus)</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="text-purple-700 font-semibold">Artificial Intelligence</span>
                    <i className="fa-solid fa-circle-check text-emerald-500"></i>
                  </div>
                </div>

                {/* Cert 2: Komdigi x Huawei */}
                <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl shrink-0">
                      <i className="fa-solid fa-robot"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">Fundamental AI - DEX</h4>
                      <p className="text-[11px] text-slate-500">Komdigi x Huawei</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="text-purple-700 font-semibold">AI Infrastructure</span>
                    <i className="fa-solid fa-circle-check text-emerald-500"></i>
                  </div>
                </div>

                {/* Cert 3: Komdigi x Google */}
                <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl shrink-0">
                      <i className="fa-solid fa-lightbulb"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">Pengenalan Dasar AI</h4>
                      <p className="text-[11px] text-slate-500">Komdigi x Google</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="text-purple-700 font-semibold">Machine Learning</span>
                    <i className="fa-solid fa-circle-check text-emerald-500"></i>
                  </div>
                </div>

                {/* Cert 4: BPVP Belitung Spreadsheet */}
                <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl shrink-0">
                      <i className="fa-solid fa-table-cells"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">Lembar Sebar Lanjutan</h4>
                      <p className="text-[11px] text-slate-500">BPVP Belitung Kemnaker (20 JP)</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="text-emerald-700 font-semibold">Excel &amp; Data Prep</span>
                    <i className="fa-solid fa-circle-check text-emerald-500"></i>
                  </div>
                </div>

                {/* Cert 5: K3 HIRA & JSA */}
                <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl shrink-0">
                      <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">K3 HIRA &amp; JSA</h4>
                      <p className="text-[11px] text-slate-500">Balai Pelatihan Vokasi</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="text-amber-700 font-semibold">Safety &amp; Compliance</span>
                    <i className="fa-solid fa-circle-check text-emerald-500"></i>
                  </div>
                </div>

                {/* Cert 6: BPVP TOEFL 102 */}
                <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl shrink-0">
                      <i className="fa-solid fa-language"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">English Proficiency (TOEFL)</h4>
                      <p className="text-[11px] text-slate-500">BPVP Kemnaker (102 Jam)</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="text-blue-700 font-semibold">Professional English</span>
                    <i className="fa-solid fa-circle-check text-emerald-500"></i>
                  </div>
                </div>

                {/* Cert 7: Kemdikbud Kampus Mengajar */}
                <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl shrink-0">
                      <i className="fa-solid fa-award"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">Kampus Mengajar Angk. 7</h4>
                      <p className="text-[11px] text-slate-500">Kemendikbudristek RI</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="text-indigo-700 font-semibold">Leadership &amp; Pedagogy</span>
                    <i className="fa-solid fa-circle-check text-emerald-500"></i>
                  </div>
                </div>

                {/* Cert 8: AI Prompting & Productivity */}
                <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl shrink-0">
                      <i className="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">AI Prompting &amp; Tools</h4>
                      <p className="text-[11px] text-slate-500">Generative AI Competency</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="text-purple-700 font-semibold">Generative AI Ops</span>
                    <i className="fa-solid fa-circle-check text-emerald-500"></i>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Torn Paper Transition 7: Gray to Cream Contact Card Background
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -mt-6 select-none">
            <div className="w-full h-9 bg-[#EFECE4] torn-edge-top"></div>
            <div className="w-full h-8 bg-[#FAF7F2] grid-notebook torn-edge-top -mt-5 relative">
              <div className="stitched-line w-full absolute top-2 border-purple-400/50"></div>
            </div>
            <div className="w-full h-10 paper-texture torn-edge-top -mt-4 shadow-md relative">
              <div className="washi-tape-purple absolute -top-2 left-20 sm:left-44 w-32 h-5 -rotate-2 z-30"></div>
              <div className="washi-tape-tan absolute -top-2 right-20 sm:right-48 w-32 h-5 rotate-1 z-30"></div>
              <div className="stitched-line w-11/12 mx-auto absolute bottom-1 border-purple-300"></div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: ContactSection
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-20 relative overflow-hidden" id="contact">
            
            {/* Paper plane doodle in background */}
            <div className="absolute top-12 left-10 opacity-70 hidden sm:block pointer-events-none">
              <svg className="-rotate-12" fill="none" height="60" viewBox="0 0 100 80" width="80">
                <path d="M10 50 Q 40 20 80 15" fill="none" stroke="#7c3aed" strokeDasharray="3 3" strokeWidth="2"></path>
                <path d="M80 15 L70 28 L85 22 L92 10 Z" fill="#5B2C91"></path>
              </svg>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-purple-200">
                
                {/* Washi Tape stickers */}
                <div className="washi-tape-purple absolute -top-4 left-1/4 w-36 h-6 rotate-[-2deg] z-10"></div>
                <div className="washi-tape-tan absolute -bottom-3 right-1/4 w-36 h-6 rotate-2 z-10"></div>

                <div className="text-center max-w-xl mx-auto">
                  <span className="font-handwritten text-purple-700 text-3xl font-bold">Let&apos;s Connect &amp; Collaborate!</span>
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-1">
                    Siap Berkolaborasi Bersama Elga
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                    Terbuka untuk kesempatan karir <strong>Full Stack Developer</strong>, <strong>IT Operations Officer</strong>, <strong>System / Database Operator</strong>, <strong>AI / ML Engineer</strong>, maupun kolaborasi proyek teknologi.
                  </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
                  
                  {/* WhatsApp Card */}
                  <a className="p-5 rounded-2xl bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200 transition group flex flex-col items-center" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mt-3">WhatsApp Langsung</h4>
                    <p className="text-xs text-slate-600 mt-1 font-mono">085238208849</p>
                    <span className="text-xs font-semibold text-emerald-700 mt-2">Chat Sekarang →</span>
                  </a>

                  {/* Email Card */}
                  <a className="p-5 rounded-2xl bg-purple-50/80 hover:bg-purple-100 border border-purple-200 transition group flex flex-col items-center" href={`mailto:${EMAIL_ADDRESS}`}>
                    <div className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mt-3">Email Resmi</h4>
                    <p className="text-xs text-slate-600 mt-1 truncate max-w-full font-mono">{EMAIL_ADDRESS}</p>
                    <span className="text-xs font-semibold text-purple-700 mt-2">Kirim Pesan →</span>
                  </a>

                  {/* LinkedIn Card */}
                  <a className="p-5 rounded-2xl bg-indigo-50/80 hover:bg-indigo-100 border border-indigo-200 transition group flex flex-col items-center" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mt-3">LinkedIn Profile</h4>
                    <p className="text-xs text-slate-600 mt-1 font-mono">elga-alfareza</p>
                    <span className="text-xs font-semibold text-indigo-700 mt-2">Terhubung di LinkedIn →</span>
                  </a>

                </div>

                {/* Download CV Banner */}
                <div className="mt-8 text-center">
                  <a 
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-900 hover:to-indigo-900 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5" 
                    href={`mailto:${EMAIL_ADDRESS}?subject=Permintaan%20Curriculum%20Vitae%20-%20Elga%20Alfareza`}
                  >
                    <i className="fa-solid fa-download"></i>
                    <span>Request / Download Curriculum Vitae</span>
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: MainFooter
          ═════════════════════════════════════════════════════════════ */}
          <footer className="bg-slate-900 text-slate-300 py-12 border-t border-purple-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-700 text-white font-display text-lg px-3 py-1 rounded-lg">
                    elga&apos;s PORTFOLIO
                  </div>
                  <span className="text-xs text-slate-400">
                    © 2026 Elga Alfareza, S.Kom. • Universitas Bumigora • Mataram, NTB
                  </span>
                </div>

                <div className="font-handwritten text-purple-300 text-xl font-bold tracking-wide">
                  ✨ Dream it • Code it • Innovate it ✨
                </div>

                <a className="w-9 h-9 rounded-full bg-slate-800 hover:bg-purple-700 text-purple-300 hover:text-white flex items-center justify-center transition border border-slate-700" href="#hero">
                  <i className="fa-solid fa-arrow-up text-xs"></i>
                </a>

              </div>
            </div>
          </footer>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
         STUDIO PHOTO MODAL
      ───────────────────────────────────────────────────────────── */}
      {showStudioModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowStudioModal(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FAF7F2] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowStudioModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer z-10"
              aria-label="Tutup popup"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative rounded-xl overflow-hidden border-2 border-stone-300 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/elga-graduation-studio.jpg"
                  alt="Elga Alfareza, S.Kom. - Wisudawan Universitas Bumigora"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E2DAF5] text-[#341B66] font-mono text-xs font-bold w-fit mb-2">
                  🎓 Cum Laude (IPK 3.76)
                </div>
                <h3 className="font-sans text-xl font-black text-stone-900">
                  Elga Alfareza, S.Kom.
                </h3>
                <p className="font-mono text-xs text-[#583FA2] font-bold mt-0.5">
                  FULL STACK &amp; AI SPECIALIST
                </p>

                <div className="flex flex-col gap-2 mt-4 font-sans text-xs text-stone-700">
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Pendidikan Resmi:</p>
                    <p>S1 Teknik Informatika — Universitas Bumigora (2024)</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Publikasi Ilmiah:</p>
                    <p>Jurnal SINTA 4: Convolutional Neural Network Aksara Sasak (94.6%)</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Pengalaman Kunci:</p>
                    <p>CV Rajawali (Simbank 99.9%), CV Sinar Mutiara Bali (QC), IPHI, Kampus Mengajar 7</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <a
                    href={DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#5B2C91] hover:bg-[#4C2882] text-white font-sans text-xs font-bold text-center transition-colors shadow-sm"
                  >
                    Buka Arsip Ijazah &amp; Riset
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
         FAVORITE BOOK NOTES MODAL
      ───────────────────────────────────────────────────────────── */}
      {selectedBook && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedBook(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FAF7F2] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-stone-300 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer z-10"
              aria-label="Tutup catatan buku"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              {/* Book Cover */}
              <div className="sm:col-span-4 flex flex-col items-center">
                <div className="relative rounded-xl overflow-hidden bg-white p-3 border-2 border-stone-300 shadow-lg w-full max-w-[180px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedBook.cover}
                    alt={selectedBook.title}
                    className="w-full h-auto object-contain drop-shadow-md rounded"
                  />
                </div>
                <span className={`mt-3 text-xs font-bold font-mono px-3 py-1 rounded-full border shadow-xs ${selectedBook.badgeClass}`}>
                  {selectedBook.pillar}
                </span>
              </div>

              {/* Book Info & Takeaways */}
              <div className="sm:col-span-8 flex flex-col">
                <span className="font-handwritten text-purple-700 text-lg font-bold">Catatan Pembelajaran</span>
                <h3 className="font-display text-2xl font-black text-stone-900 leading-tight">
                  {selectedBook.title}
                </h3>
                <p className="font-sans text-xs text-purple-900 font-bold mt-0.5">
                  {selectedBook.author} {selectedBook.coAuthor && `• ${selectedBook.coAuthor}`}
                </p>
                <p className="font-sans text-xs text-stone-500 italic mt-0.5">
                  {selectedBook.subtitle}
                </p>

                {/* Quote Box */}
                <div className="mt-4 bg-[#fef08a] p-3 rounded-xl border border-yellow-300 shadow-xs">
                  <p className="font-handwritten text-slate-800 text-sm font-semibold leading-relaxed">
                    &ldquo;{selectedBook.quote}&rdquo;
                  </p>
                </div>

                {/* Personal Impact */}
                <div className="mt-3 p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-slate-700">
                  <strong className="text-purple-900 block mb-1">Dampak dalam Rekayasa &amp; Operasional:</strong>
                  <p className="leading-relaxed">{selectedBook.personalImpact}</p>
                </div>

                {/* 3 Core Takeaways */}
                <div className="mt-4 space-y-2">
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                    3 Inti Pembelajaran:
                  </span>
                  {selectedBook.coreTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs">
                      <p className="font-bold text-stone-900 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                        {takeaway.label}
                      </p>
                      <p className="text-stone-600 text-[11px] mt-0.5 pl-3">{takeaway.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
         ACTIVITY PHOTO LIGHTBOX MODAL
      ───────────────────────────────────────────────────────────── */}
      {activePhoto !== null && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#FAF7F2] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-stone-300 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-base transition-colors cursor-pointer z-20"
              aria-label="Tutup lightbox"
            >
              ✕
            </button>

            {/* Header info */}
            <div className="flex items-center justify-between pr-10 mb-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
                Dokumentasi Kegiatan #{String(activePhoto + 1).padStart(2, '0')} dari {ACTIVITY_PHOTOS.length}
              </span>
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-sm ${ACTIVITY_PHOTOS[activePhoto].tagColor}`}>
                {ACTIVITY_PHOTOS[activePhoto].tag}
              </span>
            </div>

            {/* Main Image Frame with Polaroid Styling */}
            <div className="relative rounded-xl overflow-hidden bg-black flex items-center justify-center border-2 border-stone-300 shadow-xl max-h-[55vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ACTIVITY_PHOTOS[activePhoto].url}
                alt={ACTIVITY_PHOTOS[activePhoto].title}
                className="w-full h-auto max-h-[55vh] object-contain"
              />

              {/* Prev / Next navigation arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActivePhoto((activePhoto - 1 + ACTIVITY_PHOTOS.length) % ACTIVITY_PHOTOS.length)
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Foto sebelumnya"
              >
                ◀
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActivePhoto((activePhoto + 1) % ACTIVITY_PHOTOS.length)
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Foto berikutnya"
              >
                ▶
              </button>
            </div>

            {/* Caption & Context Card */}
            <div className="mt-4 bg-white p-4 rounded-xl border border-stone-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                <h3 className="font-display font-extrabold text-slate-900 text-lg">
                  {ACTIVITY_PHOTOS[activePhoto].title}
                </h3>
                <span className="text-xs font-semibold text-purple-900">
                  {ACTIVITY_PHOTOS[activePhoto].category}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {ACTIVITY_PHOTOS[activePhoto].description}
              </p>
            </div>

            {/* Quick Thumbnail Strip */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
              {ACTIVITY_PHOTOS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActivePhoto(idx)
                  }}
                  className={`w-14 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activePhoto === idx ? 'border-purple-600 ring-2 ring-purple-300 scale-105' : 'border-stone-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.url} alt={p.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
