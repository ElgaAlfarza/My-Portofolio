'use client'

import { useState } from 'react'
import {
  IconPython,
  IconJS,
  IconReact,
  IconNode,
  IconSQL,
  IconAWS,
  DoodleSparkle,
  DoodlePaperAirplane,
  DoodleSmileyFace,
  DoodleCrown
} from '../Icons/ScrapbookIcons'

const GITHUB_URL = 'https://github.com/ElgaAlfarza'
const LINKEDIN_URL = 'https://linkedin.com/in/elga-alfareza'
const WHATSAPP_URL = 'https://wa.me/6285238208849'
const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'
const DRIVE_URL = 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

const PROJECTS_DATA = [
  {
    id: 1,
    number: '1',
    chalkColor: 'text-cyan-300',
    title: 'AI HEALTH PREDICTOR',
    subtitle: 'STROKE RISK ML MODEL',
    pill: 'Healthcare AI • Scikit-Learn',
    description: 'Model machine learning untuk prediksi dini risiko stroke berdasarkan multi-parameter klinis pasien (hipertensi, glukosa, BMI, riwayat medis). Dilengkapi dashboard Streamlit interaktif untuk analisis real-time.',
    stack: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'NumPy'],
    metrics: [
      { label: 'Akurasi Model', val: '94.2%' },
      { label: 'Algoritma', val: 'Random Forest & XGBoost' },
      { label: 'Latency Inferensi', val: '< 120ms' },
    ],
    link: DRIVE_URL,
    linkLabel: 'Buka Riset di Google Drive',
    badgeType: 'ai',
  },
  {
    id: 2,
    number: '2',
    chalkColor: 'text-emerald-300',
    title: 'SIMBANK HIGH-UPTIME',
    subtitle: 'REAL-TIME TRANSACTION PIPELINE',
    pill: 'CV Rajawali • 99.9% Uptime',
    description: 'Arsitektur pipeline data transaksi perbankan dan inventaris operasional untuk CV Rajawali. Mengintegrasikan sinkronisasi realtime, caching Redis, dan failover otomatis dengan target keandalan 99.9% uptime.',
    stack: ['Redis', 'PostgreSQL', 'WebSocket', 'Node.js', 'Linux Server'],
    metrics: [
      { label: 'Server Availability', val: '99.9% Uptime' },
      { label: 'Throughput', val: 'Multi-Terminal Sync' },
      { label: 'Security', val: 'Role-Based Access (RBAC)' },
    ],
    link: WHATSAPP_URL,
    linkLabel: 'Diskusikan Arsitektur',
    badgeType: 'pipeline',
  },
  {
    id: 3,
    number: '3',
    chalkColor: 'text-amber-300',
    title: 'GEMAH RIPAH TANI',
    subtitle: 'AGRICULTURE MARKETPLACE APP',
    pill: 'Mobile & Web • Next.js',
    description: 'Platform marketplace digital komoditas hasil pertanian lokal. Menghubungkan kelompok tani langsung dengan konsumen akhir dan UMKM guna memangkas rantai pasok dan meningkatkan margin petani.',
    stack: ['Next.js', 'React Native', 'Tailwind CSS', 'REST API', 'PostgreSQL'],
    metrics: [
      { label: 'Platform', val: 'Web & Mobile App' },
      { label: 'Kategori Produk', val: 'Hasil Bumi & Hortikultura' },
      { label: 'Fitur Utama', val: 'Katalog, Pemesanan, Direct Chat' },
    ],
    link: GITHUB_URL,
    linkLabel: 'Lihat Repository di GitHub',
    badgeType: 'market',
  },
  {
    id: 4,
    number: '4',
    chalkColor: 'text-rose-300',
    title: 'KLASIFIKASI AKSARA SASAK',
    subtitle: 'CNN DEEP LEARNING (SINTA 4)',
    pill: 'Jurnal SINTA 4 • Akurasi 92.3%',
    description: 'Publikasi riset ilmiah nasional terakreditasi SINTA 4. Mengimplementasikan Convolutional Neural Networks (CNN) untuk mengenali dan mengklasifikasikan 1.080 citra manuskrip aksara tradisional suku Sasak Lombok.',
    stack: ['TensorFlow', 'Keras', 'Python', 'OpenCV', 'Jupyter'],
    metrics: [
      { label: 'Akurasi Pengujian', val: '92.3%' },
      { label: 'Total Dataset', val: '1.080 Citra Aksara' },
      { label: 'Status Publikasi', val: 'Jurnal Nasional SINTA 4' },
    ],
    link: DRIVE_URL,
    linkLabel: 'Buka Dokumen Jurnal & Sertifikat',
    badgeType: 'cnn',
  },
  {
    id: 5,
    number: '5',
    chalkColor: 'text-violet-300',
    title: 'SISTEM BASIS DATA & AKM',
    subtitle: 'IPHI & KEMENDIKBUD KELAS',
    pill: 'Enterprise DB • SMPN 20 Mataram',
    description: 'Digitalisasi sistem manajemen data keanggotaan dan arsip digital IPHI, dipadukan dengan implementasi sistem Asesmen Kompetensi Minimum (AKM Kelas) Kemendikbudristek RI saat penugasan Kampus Mengajar di SMPN 20 Mataram.',
    stack: ['PostgreSQL', 'PHP', 'React', 'Excel Automation', 'Web Portal'],
    metrics: [
      { label: 'Cakupan Data', val: 'Ribuan Data Jamaah' },
      { label: 'Mitra', val: 'IPHI & Kemendikbudristek' },
      { label: 'Hasil', val: 'Digitalisasi 100% Paperless' },
    ],
    link: DRIVE_URL,
    linkLabel: 'Buka Sertifikat Kemendikbud',
    badgeType: 'database',
  },
]

export default function MasterScrapbookPoster() {
  const [activeProject, setActiveProject] = useState(null)
  const [showPhotoModal, setShowPhotoModal] = useState(false)

  return (
    <div id="top" className="relative w-full max-w-5xl mx-auto my-4 select-none filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.32)]">
      
      {/* ═══════════════════════════════════════════════════════════════
         UPPER CANVAS: WARM CREAM CRUMPLED CRAFT PAPER
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full rounded-t-3xl bg-[#F6F1EA] border-t-2 border-x-2 border-[#E3DBD0] p-6 sm:p-10 lg:p-12 overflow-hidden">
        
        {/* Realistic Crumpled Paper Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.045] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(#1E1A17 1px, transparent 1px)`,
            backgroundSize: '12px 12px'
          }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────────────
           TOP HEADER ROW: "ideas / create / inspire" + 3D PORTFOLIO + Airplane
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full grid grid-cols-12 gap-2 items-start z-10">
          
          {/* Top-Left: "ideas / create / inspire" Hand-Drawn Stamp + Star Doodle */}
          <div className="col-span-3 sm:col-span-2 flex flex-col items-start pt-2">
            <div className="relative p-2.5 sm:p-3 rounded-[50%] border-2 border-stone-800 text-stone-900 -rotate-12 bg-white/40 shadow-xs">
              <span className="font-marker text-xs sm:text-sm font-bold leading-tight block text-center">
                ideas<br />create<br />inspire
              </span>
            </div>
            {/* 4-point star doodle */}
            <div className="mt-3 ml-2 text-stone-800">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
              </svg>
            </div>
          </div>

          {/* Center: 3D Chunky Letters with Elga Alfareza Graduation Cutout in the Middle */}
          <div className="col-span-7 sm:col-span-8 relative flex items-center justify-center min-h-[180px] sm:min-h-[230px]">
            
            {/* The 3D Letters Row */}
            <div className="relative w-full flex items-center justify-between sm:justify-center sm:gap-6 z-10">
              
              {/* Left Letter Group: P, O, R, T */}
              <div className="flex items-center gap-1 sm:gap-2 leading-none">
                <div className="flex flex-col">
                  <span className="chunky-poster-letter text-6xl sm:text-8xl md:text-9xl -rotate-6">P</span>
                  <span className="chunky-poster-letter text-5xl sm:text-7xl md:text-8xl rotate-3 -mt-3 sm:-mt-5">O</span>
                </div>
                <div className="flex flex-col ml-[-4px]">
                  <span className="chunky-poster-letter text-6xl sm:text-8xl md:text-9xl rotate-2">R</span>
                  <span className="chunky-poster-letter text-5xl sm:text-7xl md:text-8xl -rotate-3 -mt-3 sm:-mt-5">T</span>
                </div>
              </div>

              {/* CENTER STAGE: Elga Alfareza, S.Kom. Graduation Cutout Sticker */}
              <div 
                onClick={() => setShowPhotoModal(true)}
                title="Klik untuk melihat foto wisuda resmi Universitas Bumigora"
                className="relative z-20 mx-[-20px] sm:mx-[-28px] mb-[-16px] sm:mb-[-22px] cursor-pointer group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/elga-sticker-cutout.png"
                  alt="Elga Alfareza, S.Kom. - S1 Ilmu Komputer Universitas Bumigora"
                  className="w-32 sm:w-44 md:w-52 h-auto object-contain filter drop-shadow-[0_14px_24px_rgba(25,12,50,0.5)] transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300"
                />

                {/* Subtle "Cum Laude" badge tooltip hint */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/90 text-amber-300 font-mono text-[9px] px-2 py-0.5 rounded-full whitespace-nowrap shadow-md pointer-events-none">
                  🎓 Elga Alfareza, S.Kom. (IPK 3.76)
                </div>
              </div>

              {/* Right Letter Group: F, L, I, O */}
              <div className="flex items-center gap-1 sm:gap-2 leading-none">
                <div className="flex flex-col">
                  <span className="chunky-poster-letter text-6xl sm:text-8xl md:text-9xl -rotate-3">F</span>
                  <span className="chunky-poster-letter text-5xl sm:text-7xl md:text-8xl rotate-2 -mt-3 sm:-mt-5">L</span>
                </div>
                <div className="flex flex-col ml-[-4px]">
                  <span className="chunky-poster-letter text-5xl sm:text-7xl md:text-8xl rotate-6">I</span>
                  <span className="chunky-poster-letter text-6xl sm:text-8xl md:text-9xl -rotate-4 -mt-3 sm:-mt-5">O</span>
                </div>
              </div>

            </div>

            {/* Black Torn Tape / Gaffer Tape Strip: "FULL STACK & AI SPECIALIST" directly below right letters */}
            <div className="absolute right-0 sm:right-4 bottom-[-24px] sm:bottom-[-28px] z-30 transform rotate-[-2deg]">
              <div className="px-3.5 py-1.5 rounded-sm bg-stone-950 text-white font-mono text-[0.6875rem] sm:text-xs font-black tracking-widest uppercase shadow-md border-y border-stone-800">
                FULL STACK &amp; AI SPECIALIST
              </div>
              {/* Hand-drawn underline scribbles */}
              <div className="w-full flex justify-center mt-0.5 text-stone-900">
                <svg className="w-24 sm:w-28 h-2 text-stone-900" viewBox="0 0 100 8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M 0 4 Q 25 1 50 5 T 100 3" />
                </svg>
              </div>
            </div>

          </div>

          {/* Top-Right: Paper Airplane with Dashed Flight Path Loop */}
          <div className="col-span-2 flex flex-col items-end pt-1">
            <div className="transform rotate-12">
              <DoodlePaperAirplane className="w-16 sm:w-20 h-8 text-stone-900" />
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           MIDDLE SECTION: Lanyard ID Badge (Left) + "About me" & Bio (Right)
        ───────────────────────────────────────────────────────────── */}
        <div id="about" className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-12 sm:mt-14 items-start z-10">
          
          {/* ─────────────────────────────────────────────────────────
             LEFT: Hanging Lanyard ID Badge (Elga Alfareza, S.Kom.)
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[215px] group">
              
              {/* Woven Fabric Purple Lanyard Ribbon running down from the top */}
              <div className="w-full flex justify-center">
                <div 
                  className="w-8 h-20 sm:h-24 rounded-t-sm shadow-md relative"
                  style={{
                    background: 'linear-gradient(90deg, #371D68 0%, #5B38A8 40%, #764FC4 50%, #5B38A8 60%, #371D68 100%)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
                  }}
                >
                  {/* Metal Swivel Hook / Clip */}
                  <div className="absolute -bottom-4 inset-x-1.5 h-5 rounded-sm bg-gradient-to-b from-stone-400 via-stone-200 to-stone-500 shadow-md border border-stone-400 flex items-center justify-center">
                    <div className="w-2.5 h-1 rounded-full bg-stone-700" />
                  </div>
                </div>
              </div>

              {/* Clear Plastic ID Card Holder Sleeve with Glossy Edge */}
              <div 
                onClick={() => setShowPhotoModal(true)}
                title="Lihat Profil Formal Elga Alfareza"
                className="relative mt-2 p-3 pb-3.5 rounded-xl bg-white/95 backdrop-blur-xs border-2 border-stone-300 shadow-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 cursor-pointer"
              >
                
                {/* Washi Tape Securing Bottom-Left Corner */}
                <div className="washi-tape absolute -bottom-3 -left-3 w-16 h-6 -rotate-12 z-20 pointer-events-none" />

                {/* ID Card Slot at top */}
                <div className="w-12 h-1.5 mx-auto mb-2.5 rounded-full bg-stone-300/80 border border-stone-400/50" />

                {/* Real Graduation Portrait of Elga Alfareza */}
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-300 shadow-inner group-hover:shadow-md transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/elga-id-portrait.png"
                    alt="Elga Alfareza, S.Kom."
                    className="w-full h-full object-cover object-top filter contrast-110 group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Verified S.Kom. Badge Ribbon */}
                  <div className="absolute top-1.5 right-1.5 bg-amber-400/95 text-stone-950 font-black text-[8px] px-1.5 py-0.5 rounded shadow-xs">
                    S.Kom.
                  </div>
                </div>

                {/* Name & Title on Card (Verified Data) */}
                <div className="mt-2.5 text-center">
                  <h3 className="font-sans text-xs sm:text-sm font-black text-stone-900 leading-tight">
                    Elga Alfareza, S.Kom.
                  </h3>
                  <p className="font-mono text-[0.625rem] text-[#583FA2] font-extrabold tracking-wider uppercase mt-0.5">
                    FULL STACK &amp; AI SPECIALIST
                  </p>
                  <p className="font-sans text-[0.5625rem] text-stone-500 font-semibold mt-0.5">
                    Universitas Bumigora • IPK 3.76
                  </p>
                </div>

                {/* Mini Barcode strip at bottom */}
                <div className="mt-2 pt-1 border-t border-stone-200 flex justify-center items-center gap-0.5 opacity-60">
                  <span className="w-0.5 h-3 bg-stone-900 inline-block" />
                  <span className="w-1 h-3 bg-stone-900 inline-block" />
                  <span className="w-0.5 h-3 bg-stone-900 inline-block" />
                  <span className="w-1.5 h-3 bg-stone-900 inline-block" />
                  <span className="w-0.5 h-3 bg-stone-900 inline-block" />
                  <span className="w-1 h-3 bg-stone-900 inline-block" />
                  <span className="w-2 h-3 bg-stone-900 inline-block" />
                  <span className="w-0.5 h-3 bg-stone-900 inline-block" />
                </div>

              </div>

            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────
             RIGHT: "⮢ About me" + Bio + 2 Highlighted Lavender Pills
          ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 flex flex-col justify-start pt-2">
            
            {/* Title: Curved Arrow + "About me" */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="font-marker text-2xl sm:text-3xl font-bold text-[#4D2C91]">
                ⮢
              </span>
              <h2 className="font-marker text-2xl sm:text-3xl font-bold text-[#4D2C91]">
                About me
              </h2>
            </div>

            {/* Bio Paragraph (100% Elga Alfareza's Verified Background) */}
            <p className="font-sans text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
              Hey! I&apos;m <strong className="text-stone-950 font-bold">Elga Alfareza, S.Kom.</strong>, a results-oriented Full Stack Developer &amp; AI Specialist from Universitas Bumigora (IPK 3.76, Cum Laude). I build robust, high-throughput web applications, machine learning systems, and high-uptime data pipelines. My focus is on clean architecture, efficient data pipelines, Deep Learning CNN, and leveraging modern technologies like Python, React, Next.js, and Cloud Infrastructure to solve real-world problems.
            </p>

            {/* 2 Purple Highlighted Pills (Exact Mockup Match) */}
            <div className="flex flex-col gap-2.5 mt-4">
              
              {/* Highlight Pill 1: University & Degree */}
              <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#E2DAF5] border border-[#CBBEE8] text-[#341B66] shadow-xs">
                <span className="font-sans text-xs sm:text-sm font-black">
                  Universitas Bumigora:&nbsp;
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold">
                  S1 Teknik Informatika (Cum Laude 3.76)
                </span>
              </div>

              {/* Highlight Pill 2: Research & Publication SINTA 4 */}
              <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#E2DAF5] border border-[#CBBEE8] text-[#341B66] shadow-xs">
                <span className="font-sans text-xs sm:text-sm font-black">
                  Penulis Jurnal SINTA 4:&nbsp;
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold">
                  Deep Learning CNN Klasifikasi Aksara Sasak (Akurasi 92.3%)
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           LOWER SECTION: 3 EQUAL COLUMNS (Software | Experience | Contact)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 pt-6 border-t border-stone-300/60 z-10">
          
          {/* ═════════════════════════════════════════════════════════
             COLUMN 1: SOFTWARE (3x2 Squircle Icons with 3D Depth)
          ═════════════════════════════════════════════════════════ */}
          <div id="skills" className="flex flex-col items-center sm:items-start">
            
            {/* Title with Curved Underline */}
            <div className="mb-4 text-center sm:text-left">
              <h3 className="font-marker text-2xl font-bold text-stone-900 inline-block">
                Software
              </h3>
              <div className="w-16 h-1 bg-stone-900 rounded-full mt-0.5" />
            </div>

            {/* 6 App Icons in 3x2 Grid */}
            <div className="grid grid-cols-3 gap-3">
              {/* Python */}
              <div className="w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer" title="Python (Deep Learning / ML)">
                <IconPython className="w-12 h-12" />
              </div>

              {/* JavaScript */}
              <div className="w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer" title="JavaScript (ES6+ / Web)">
                <IconJS className="w-12 h-12" />
              </div>

              {/* React */}
              <div className="w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer" title="React / Next.js">
                <IconReact className="w-12 h-12" />
              </div>

              {/* Node.js */}
              <div className="w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer" title="Node.js (Backend & REST API)">
                <IconNode className="w-12 h-12" />
              </div>

              {/* PostgreSQL / SQL */}
              <div className="w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer" title="SQL / PostgreSQL">
                <IconSQL className="w-12 h-12" />
              </div>

              {/* AWS / Cloud */}
              <div className="w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer" title="AWS & Cloud Infrastructure">
                <IconAWS className="w-12 h-12" />
              </div>
            </div>

          </div>

          {/* ═════════════════════════════════════════════════════════
             COLUMN 2: EXPERIENCE (Elga Alfareza's Verified Career)
          ═════════════════════════════════════════════════════════ */}
          <div id="experience" className="flex flex-col">
            
            {/* Title with Curved Underline */}
            <div className="mb-4">
              <h3 className="font-marker text-2xl font-bold text-stone-900 inline-block">
                Experience
              </h3>
              <div className="w-20 h-1 bg-stone-900 rounded-full mt-0.5" />
            </div>

            {/* Vertical Timeline List (100% Real Roles) */}
            <div className="flex flex-col gap-3 font-sans text-xs text-stone-800">
              
              <div className="border-l-2 border-[#583FA2] pl-3 py-0.5">
                <p className="font-bold text-stone-950">2025 - Sekarang:</p>
                <p className="font-bold text-[#4D2C91]">System Operator Officer</p>
                <p className="text-stone-600 text-[11px]">CV Rajawali • Simbank 99.9% Uptime</p>
              </div>

              <div className="border-l-2 border-[#764FC4] pl-3 py-0.5">
                <p className="font-bold text-stone-950">2023 - 2025:</p>
                <p className="font-bold text-[#4D2C91]">Staff Operasional &amp; QC</p>
                <p className="text-stone-600 text-[11px]">CV Sinar Mutiara Bali • K3 Kemnaker RI</p>
              </div>

              <div className="border-l-2 border-[#9474D4] pl-3 py-0.5">
                <p className="font-bold text-stone-950">2024:</p>
                <p className="font-bold text-[#4D2C91]">Program Kampus Mengajar 7</p>
                <p className="text-stone-600 text-[11px]">Kemendikbudristek RI • SMPN 20 Mataram</p>
              </div>

              <div className="border-l-2 border-[#B49DE4] pl-3 py-0.5">
                <p className="font-bold text-stone-950">2019 - 2024:</p>
                <p className="font-bold text-[#4D2C91]">Data Specialist &amp; Database Admin</p>
                <p className="text-stone-600 text-[11px]">IPHI (Ikatan Persaudaraan Haji Indonesia)</p>
              </div>

            </div>

          </div>

          {/* ═════════════════════════════════════════════════════════
             COLUMN 3: CONTACT (Colored Badges - Exact Mockup Match)
          ═════════════════════════════════════════════════════════ */}
          <div id="contact" className="flex flex-col relative">
            
            {/* Title with Curved Underline */}
            <div className="mb-4">
              <h3 className="font-marker text-2xl font-bold text-stone-900 inline-block">
                Contact
              </h3>
              <div className="w-16 h-1 bg-stone-900 rounded-full mt-0.5" />
            </div>

            {/* List with Icons */}
            <div className="flex flex-col gap-2.5 font-sans text-xs text-stone-800">
              
              {/* Gmail */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-white border border-stone-300 flex items-center justify-center shrink-0 shadow-xs">
                  <span className="font-bold text-[10px] text-red-600 font-mono">M</span>
                </div>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-[#4D2C91] truncate font-medium">
                  {EMAIL_ADDRESS}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-xs">call</span>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-green-700 font-medium">
                  +62 852 3820 8849
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#0A66C2] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="font-bold text-[10px] font-sans">in</span>
                </div>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] truncate font-medium">
                  linkedin.com/in/elga-alfareza
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-stone-950 truncate font-medium">
                  github.com/ElgaAlfarza
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-stone-800 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-xs text-red-400">place</span>
                </div>
                <span className="font-medium">Lombok, NTB, Indonesia</span>
              </div>

            </div>

            {/* Right margin hand-drawn star & smiley doodles */}
            <div className="absolute top-12 -right-4 sm:-right-6 flex flex-col items-center gap-4 text-stone-800 pointer-events-none">
              <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
                <path d="M12 2 L14 8 L20 9 L15 14 L17 20 L12 17 L7 20 L9 14 L4 9 L10 8 Z" />
              </svg>
              <DoodleSmileyFace className="w-5 h-5 text-stone-800" />
            </div>

          </div>

        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════
         TORN PAPER DIVIDER (REALISTIC JAGGED RIPPED FIBER TRANSITION)
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden leading-none select-none my-[-1px] z-20">
        <svg
          className="w-full h-10 sm:h-12 text-[#18365D] filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,40 L0,12 Q30,26 60,8 T120,24 T180,10 T240,28 T300,12 T360,26 T420,9 T480,27 T540,11 T600,29 T660,10 T720,26 T780,8 T840,28 T900,11 T960,27 T1020,12 T1080,29 T1140,10 T1200,24 L1200,40 Z" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
         LOWER CANVAS: DEEP DENIM BLUE PAPER (SELECTED WORK 5 CARDS)
      ═══════════════════════════════════════════════════════════════ */}
      <div id="works" className="relative w-full rounded-b-3xl bg-[#18365D] border-b-2 border-x-2 border-[#10243E] p-6 sm:p-10 lg:p-12 text-white overflow-hidden shadow-2xl">
        
        {/* Subtle Denim Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
          aria-hidden="true"
        />

        {/* Section Header: "Selected Work" with Crown Doodle */}
        <div className="relative flex items-center justify-center mb-8 z-10">
          <div className="inline-block relative text-center">
            {/* Small Crown Doodle above 'k' */}
            <div className="absolute -top-4 right-1 text-white">
              <DoodleCrown className="w-6 h-4 text-white" />
            </div>
            <h2 className="font-marker text-3xl sm:text-4xl font-bold tracking-wide text-white">
              Selected Work
            </h2>
            {/* Double underline */}
            <div className="w-full h-0.5 bg-white/70 rounded-full mt-1" />
            <div className="w-3/4 mx-auto h-0.5 bg-white/50 rounded-full mt-0.5" />
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
           5 TAPED PROJECT CARDS WITH HAND-DRAWN CHALK NUMBERS 1, 2, 3, 4, 5
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-4 z-10">
          
          {/* ────── CARD 1: AI HEALTH PREDICTOR (Stroke Risk ML) ────── */}
          <div 
            onClick={() => setActiveProject(PROJECTS_DATA[0])}
            className="flex flex-col group cursor-pointer"
          >
            {/* Chalk Number 1 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-cyan-200/90 mb-1 leading-none select-none">
              1
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[305px] border border-stone-200 transform -rotate-1 group-hover:rotate-0 group-hover:shadow-2xl transition-all duration-300">
              {/* Masking Tape on Top-Left */}
              <div className="washi-tape absolute -top-2 left-2 w-12 h-4 -rotate-12 z-20 pointer-events-none" />
              
              <div>
                {/* Visual Mockup Box: AI Brain + Stroke Heart Pulse */}
                <div className="w-full aspect-[4/3] rounded-md bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-stone-700 p-2 mb-2.5 flex flex-col items-center justify-between relative overflow-hidden text-white">
                  <div className="w-full flex justify-between items-center text-[7px] font-mono text-cyan-400">
                    <span>STROKE RISK ML</span>
                    <span className="bg-cyan-500/20 px-1 py-0.5 rounded text-cyan-300 font-bold">94.2%</span>
                  </div>
                  
                  {/* Central Brain Icon with Pulse Wave */}
                  <div className="relative my-1 flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-cyan-400 animate-pulse">neurology</span>
                    <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full pointer-events-none" />
                  </div>

                  {/* ECG Heart Monitor Bar */}
                  <div className="w-full flex items-center justify-between text-[7px] font-mono text-stone-400 bg-black/40 px-1.5 py-0.5 rounded">
                    <span>Clinical Metrics</span>
                    <span className="text-emerald-400 font-bold">Low Risk 12%</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  AI HEALTH PREDICTOR
                </h4>
                <p className="font-sans text-[0.5625rem] text-stone-600 font-semibold mt-0.5">
                  Stroke Risk Machine Learning
                </p>
              </div>

              {/* Tagline / Pill */}
              <p className="font-sans text-[0.625rem] text-stone-600 font-semibold border-t border-stone-200 pt-1.5 mt-2 flex items-center justify-between">
                <span>Healthcare AI</span>
                <span className="text-cyan-700 font-bold text-[9px]">Detail ➔</span>
              </p>
            </div>
          </div>

          {/* ────── CARD 2: SIMBANK REAL-TIME PIPELINE (CV Rajawali) ────── */}
          <div 
            onClick={() => setActiveProject(PROJECTS_DATA[1])}
            className="flex flex-col group cursor-pointer"
          >
            {/* Chalk Number 2 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-emerald-200/90 mb-1 leading-none select-none">
              2
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[305px] border border-stone-200 transform rotate-1 group-hover:rotate-0 group-hover:shadow-2xl transition-all duration-300">
              {/* Masking Tape on Top-Left & Top-Right */}
              <div className="washi-tape absolute -top-2 left-2 w-10 h-4 -rotate-6 z-20 pointer-events-none" />
              <div className="washi-tape absolute -top-2 right-2 w-10 h-4 rotate-6 z-20 pointer-events-none" />
              
              <div>
                {/* Visual Architecture Diagram Box */}
                <div className="w-full aspect-[4/3] rounded-md bg-[#F8FAFC] border border-stone-200 p-1.5 mb-2.5 flex flex-col items-center justify-between">
                  <div className="w-full flex justify-between items-center text-[7px] font-mono">
                    <span className="text-stone-500 font-bold">SIMBANK ENGINE</span>
                    <span className="bg-emerald-100 text-emerald-800 px-1 py-0.5 rounded font-black">99.9%</span>
                  </div>

                  {/* Pipeline Flow Nodes */}
                  <div className="w-full flex flex-col items-center gap-1 my-0.5">
                    <div className="px-2 py-0.5 rounded bg-blue-100 border border-blue-300 text-blue-900 font-mono text-[7px] font-bold">
                      WebSocket Gateway
                    </div>
                    <div className="text-[7px] text-stone-400 leading-none">▼</div>
                    <div className="px-2.5 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-900 font-mono text-[7px] font-bold">
                      Redis Sync ➔ Postgres
                    </div>
                  </div>

                  <div className="w-full text-[6px] text-center font-mono text-stone-500">
                    CV Rajawali Server
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  SIMBANK HIGH-UPTIME
                </h4>
                <p className="font-sans text-[0.5625rem] text-stone-600 font-semibold mt-0.5">
                  Real-time Transaction Pipeline
                </p>
              </div>

              {/* Tagline */}
              <p className="font-sans text-[0.625rem] text-stone-600 font-semibold border-t border-stone-200 pt-1.5 mt-2 flex items-center justify-between">
                <span>99.9% Uptime</span>
                <span className="text-emerald-700 font-bold text-[9px]">Detail ➔</span>
              </p>
            </div>
          </div>

          {/* ────── CARD 3: GEMAH RIPAH TANI (Agriculture Marketplace) ────── */}
          <div 
            onClick={() => setActiveProject(PROJECTS_DATA[2])}
            className="flex flex-col group cursor-pointer"
          >
            {/* Chalk Number 3 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-amber-200/90 mb-1 leading-none select-none">
              3
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[305px] border border-stone-200 transform -rotate-1 group-hover:rotate-0 group-hover:shadow-2xl transition-all duration-300">
              {/* Black Electrical Tape at Top Center */}
              <div className="absolute -top-2 inset-x-8 h-4 bg-stone-950 shadow-sm transform rotate-1 z-20 pointer-events-none" />
              
              <div>
                {/* Visual Marketplace Screen Box */}
                <div className="w-full aspect-[4/3] rounded-md bg-[#F4F9F2] border border-green-200 p-1.5 mb-2.5 flex flex-col justify-between">
                  <div className="w-full flex justify-between items-center text-[7px] font-mono text-green-800">
                    <span className="font-bold flex items-center gap-0.5">🌱 Gemah Ripah</span>
                    <span className="bg-green-600 text-white px-1 py-0.2 rounded font-bold">Tani</span>
                  </div>

                  {/* Smartphone Card Mockup */}
                  <div className="w-full bg-white rounded border border-green-200 p-1 shadow-2xs flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded bg-amber-100 flex items-center justify-center text-xs">
                      🌾
                    </div>
                    <div className="flex flex-col text-[6px] font-sans">
                      <span className="font-bold text-stone-900">Katalog Hasil Bumi</span>
                      <span className="text-green-700 font-bold">Direct Farmer ➔ Consumer</span>
                    </div>
                  </div>

                  <div className="w-full bg-green-700 text-white text-[6px] font-bold text-center py-0.5 rounded">
                    Pesan Langsung
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  GEMAH RIPAH TANI
                </h4>
                <p className="font-sans text-[0.5625rem] text-stone-600 font-semibold mt-0.5">
                  Agriculture Marketplace App
                </p>
              </div>

              {/* Tagline */}
              <p className="font-sans text-[0.625rem] text-stone-600 font-semibold border-t border-stone-200 pt-1.5 mt-2 flex items-center justify-between">
                <span>Next.js &amp; Mobile</span>
                <span className="text-amber-700 font-bold text-[9px]">Detail ➔</span>
              </p>
            </div>
          </div>

          {/* ────── CARD 4: KLASIFIKASI AKSARA SASAK CNN (Jurnal SINTA 4) ────── */}
          <div 
            onClick={() => setActiveProject(PROJECTS_DATA[3])}
            className="flex flex-col group cursor-pointer"
          >
            {/* Chalk Number 4 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-rose-200/90 mb-1 leading-none select-none">
              4
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[305px] border border-stone-200 transform rotate-2 group-hover:rotate-0 group-hover:shadow-2xl transition-all duration-300">
              {/* Masking Tape on Top-Right */}
              <div className="washi-tape absolute -top-2 right-2 w-12 h-4 rotate-12 z-20 pointer-events-none" />
              
              <div>
                {/* Visual CNN Aksara Sasak Architecture Box */}
                <div className="w-full aspect-[4/3] rounded-md bg-stone-950 p-2 mb-2.5 flex flex-col justify-between text-white border border-stone-800">
                  <div className="flex justify-between items-center text-[7px] font-mono text-rose-300">
                    <span>AKSARA SASAK</span>
                    <span className="bg-rose-500/20 text-rose-300 px-1 py-0.5 rounded font-black">SINTA 4</span>
                  </div>

                  {/* Character Glyphs & CNN Flow */}
                  <div className="flex items-center justify-center gap-1.5 my-1">
                    <span className="font-serif text-sm text-amber-200">ᬳ ᬦ ᬘ</span>
                    <span className="text-stone-500 text-[9px]">➔</span>
                    <div className="px-1.5 py-0.5 rounded bg-purple-900/80 border border-purple-500 text-[7px] font-mono text-purple-200">
                      Conv2D
                    </div>
                    <span className="text-stone-500 text-[9px]">➔</span>
                    <span className="font-bold text-emerald-400 text-[9px]">92.3%</span>
                  </div>

                  <div className="w-full text-[6px] font-mono text-stone-400 flex justify-between">
                    <span>1.080 Citra</span>
                    <span>TensorFlow</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  KLASIFIKASI AKSARA SASAK
                </h4>
                <p className="font-sans text-[0.5625rem] text-stone-600 font-semibold mt-0.5">
                  Deep Learning CNN (92.3%)
                </p>
              </div>

              {/* Tagline */}
              <p className="font-sans text-[0.625rem] text-stone-600 font-semibold border-t border-stone-200 pt-1.5 mt-2 flex items-center justify-between">
                <span>Riset SINTA 4</span>
                <span className="text-rose-700 font-bold text-[9px]">Detail ➔</span>
              </p>
            </div>
          </div>

          {/* ────── CARD 5: SISTEM BASIS DATA & AKM (IPHI & Kemendikbud) ────── */}
          <div 
            onClick={() => setActiveProject(PROJECTS_DATA[4])}
            className="flex flex-col group cursor-pointer"
          >
            {/* Chalk Number 5 */}
            <div className="text-center font-marker text-4xl sm:text-5xl font-black text-violet-200/90 mb-1 leading-none select-none">
              5
            </div>
            <div className="relative scrapbook-card bg-white text-stone-900 rounded-lg p-3 pt-4 flex flex-col justify-between min-h-[305px] border border-stone-200 transform -rotate-1 group-hover:rotate-0 group-hover:shadow-2xl transition-all duration-300">
              {/* Masking Tape on Top-Left & Top-Right */}
              <div className="washi-tape absolute -top-2 left-2 w-10 h-4 -rotate-6 z-20 pointer-events-none" />
              <div className="washi-tape absolute -top-2 right-2 w-10 h-4 rotate-6 z-20 pointer-events-none" />
              
              <div>
                {/* Visual Database Console Box */}
                <div className="w-full aspect-[4/3] rounded-md bg-[#1E293B] p-2 mb-2.5 text-white font-mono text-[7px] flex flex-col justify-between border border-stone-700">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-300 font-bold">DATABASE &amp; AKM</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Schema / Admin Table Rows */}
                  <div className="flex flex-col gap-0.5 my-1">
                    <div className="flex justify-between bg-white/10 px-1 py-0.5 rounded text-[6px]">
                      <span>IPHI Registry</span>
                      <span className="text-emerald-300">Verified</span>
                    </div>
                    <div className="flex justify-between bg-white/10 px-1 py-0.5 rounded text-[6px]">
                      <span>AKM SMPN 20</span>
                      <span className="text-cyan-300">Digital</span>
                    </div>
                  </div>

                  <div className="text-stone-400 text-[6px] truncate">
                    SQL • Kemendikbudristek 2024
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-sans text-[0.6875rem] font-black uppercase text-stone-900 leading-tight">
                  SISTEM BASIS DATA &amp; AKM
                </h4>
                <p className="font-sans text-[0.5625rem] text-stone-600 font-semibold mt-0.5">
                  IPHI &amp; Kemendikbudristek
                </p>
              </div>

              {/* Tagline */}
              <p className="font-sans text-[0.625rem] text-stone-600 font-semibold border-t border-stone-200 pt-1.5 mt-2 flex items-center justify-between">
                <span>Enterprise DB</span>
                <span className="text-violet-700 font-bold text-[9px]">Detail ➔</span>
              </p>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           BOTTOM SCRAPBOOK FOOTER NOTES: Taped Note (Left) + Paperclip Note (Right)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-6 border-t border-white/20 z-10">
          
          {/* Bottom-Left: Taped Paper Note "Let's build something amazing together! 😊" */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Kirim pesan langsung ke WhatsApp Elga Alfareza"
            className="relative bg-white text-stone-900 px-4 py-2.5 rounded-md shadow-lg transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all border border-stone-300 cursor-pointer block"
          >
            {/* Masking tape on top */}
            <div className="washi-tape absolute -top-2 left-6 w-14 h-4 rotate-2 z-20 pointer-events-none" />
            <p className="font-marker text-xs sm:text-sm font-bold text-stone-900 leading-snug">
              Let&apos;s build<br />
              <span className="border-b-2 border-stone-900">something</span><br />
              amazing together! 😊
            </p>
          </a>

          {/* Bottom-Center: Sketched Oval Scribble */}
          <div className="text-white/40 pointer-events-none">
            <svg className="w-28 h-6 stroke-current fill-none" viewBox="0 0 120 25" strokeWidth="1.5">
              <ellipse cx="60" cy="12" rx="55" ry="8" transform="rotate(-2 60 12)" />
            </svg>
          </div>

          {/* Bottom-Right: Paper Note Fastened with REAL METAL PAPERCLIP 📎 */}
          <div className="relative bg-[#FFFDF7] text-stone-900 px-5 py-3 rounded-md shadow-lg transform rotate-2 border border-stone-200">
            {/* Realistic Metallic Paperclip Overlapping Top-Right Corner */}
            <div className="absolute -top-3.5 right-2 z-30 pointer-events-none">
              <svg className="w-6 h-10 text-stone-600 filter drop-shadow-md" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {/* Paperclip Loop Wire */}
                <path d="M 6 12 V 28 C 6 33 18 33 18 28 V 8 C 18 3 10 3 10 8 V 26 C 10 29 14 29 14 26 V 12" />
              </svg>
            </div>

            <p className="font-handwriting text-base sm:text-lg font-bold text-stone-900 flex items-center gap-1.5">
              <span>Thanks for visiting!</span>
              <span className="text-red-500 text-lg">❤️</span>
            </p>
          </div>

        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════
         INTERACTIVE MODAL: PROJECT DETAILS
      ═══════════════════════════════════════════════════════════════ */}
      {activeProject && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#FAF7F2] text-stone-900 rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-stone-300 transform rotate-[-0.5deg]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Washi Tape on top edge */}
            <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 rotate-1 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
              aria-label="Tutup popup"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`font-marker text-3xl font-black ${activeProject.chalkColor.replace('text-', 'text-stone-800')}`}>
                #{activeProject.number}
              </span>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#E2DAF5] border border-[#CBBEE8] text-[#341B66] font-mono text-[11px] font-bold">
                {activeProject.pill}
              </div>
            </div>

            <h3 className="font-marker text-2xl font-bold text-stone-900 leading-tight">
              {activeProject.title}
            </h3>
            <p className="font-sans text-xs font-bold text-stone-600 mt-0.5">
              {activeProject.subtitle}
            </p>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed mt-4">
              {activeProject.description}
            </p>

            {/* Technical Metrics */}
            <div className="grid grid-cols-3 gap-2 mt-4 p-3 rounded-xl bg-white border border-stone-200 text-center">
              {activeProject.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-sans text-[10px] text-stone-500 font-semibold">{m.label}</span>
                  <span className="font-sans text-xs font-black text-[#4D2C91] mt-0.5">{m.val}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {activeProject.stack.map((st, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-stone-200 text-stone-800 font-mono text-[10px] font-bold">
                  {st}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 mt-6 pt-4 border-t border-stone-200">
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-[#4D2C91] hover:bg-[#3B1F75] text-white font-sans text-xs font-bold text-center shadow-md transition-colors"
              >
                {activeProject.linkLabel}
              </a>
              <a
                href={`https://wa.me/6285238208849?text=${encodeURIComponent(`Halo Elga, saya tertarik dengan proyek "${activeProject.title}". Bisa kita diskusikan lebih lanjut?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold text-center shadow-md transition-colors flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
         INTERACTIVE MODAL: OFFICIAL GRADUATION CREDENTIALS
      ═══════════════════════════════════════════════════════════════ */}
      {showPhotoModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowPhotoModal(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FAF7F2] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPhotoModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer z-10"
              aria-label="Tutup popup"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Studio Graduation Photo */}
              <div className="relative rounded-xl overflow-hidden border-2 border-stone-300 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/elga-graduation-studio.jpg"
                  alt="Elga Alfareza, S.Kom. - Wisudawan Universitas Bumigora"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Credentials Details */}
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
                    <p>Jurnal SINTA 4: Convolutional Neural Network Aksara Sasak (92.3%)</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Pengalaman Kunci:</p>
                    <p>CV Rajawali (Simbank 99.9%), CV Sinar Mutiara Bali (K3), Kampus Mengajar 7</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <a
                    href={DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#4D2C91] hover:bg-[#3B1F75] text-white font-sans text-xs font-bold text-center transition-colors shadow-sm"
                  >
                    Buka Arsip Ijazah &amp; Riset
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-[#25D366] hover:bg-green-600 text-white font-sans text-xs font-bold text-center transition-colors shadow-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
