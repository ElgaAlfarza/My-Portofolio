'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOKS = [
  {
    id: 'eat-and-run',
    title: 'Eat & Run',
    subtitle: 'My Unlikely Journey to Ultramarathon Greatness',
    author: 'Scott Jurek',
    coAuthor: 'with Steve Friedman',
    badge: 'NEW YORK TIMES BESTSELLER',
    cover: '/books/eat-and-run.png',
    pillar: 'ENDURANCE & RESILIENCE',
    pillarTheme: {
      tagBg: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30',
      accentGlow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.22)]',
      borderHover: 'group-hover:border-emerald-500/50',
      statColor: 'text-emerald-400',
      spineColor: 'from-emerald-600/40 via-emerald-500/20 to-transparent',
    },
    metric: 'EXTREME STAMINA',
    metricLabel: 'Endurance & Mental Grit',
    quote:
      'Batas kemampuan fisik dan mental kita jauh melampaui apa yang kita bayangkan. Daya tahan sejati dibangun dari konsistensi langkah demi langkah di tengah kelelahan ekstrem.',
    summary:
      'Kisah legendaris Scott Jurek menuntaskan ultramarathon ratusan mil di medan paling berat di dunia dengan dedikasi nutrisi nabati dan ketenangan batin.',
    personalImpact:
      'Membentuk ketangguhan mental saya dalam menghadapi sprint kerja panjang (deep work), sesi debugging arsitektur yang menuntut konsentrasi tinggi, serta menjaga kebugaran fisik dan stamina operasional tanpa kenal menyerah.',
    coreTakeaways: [
      {
        label: 'Mental Stamina',
        desc: 'Kemampuan mempertahankan fokus puncak saat menghadapi tantangan sistem yang kompleks.',
      },
      {
        label: 'Holistic Discipline',
        desc: 'Menjaga energi tubuh, nutrisi, dan kejernihan pikiran sebagai fondasi performa tinggi.',
      },
      {
        label: 'Steadfast Resilience',
        desc: 'Tetap tenang dan terus melangkah maju saat kondisi operasional mencapai titik terberat.',
      },
    ],
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    subtitle: 'Tiny Changes, Remarkable Results',
    author: 'James Clear',
    coAuthor: 'Over 15 Million Copies Sold',
    badge: 'CORE LIFE FRAMEWORK',
    cover: '/books/atomic-habits.png',
    pillar: 'HABIT SYSTEMS & COMPOUNDING',
    pillarTheme: {
      tagBg: 'bg-blue-950/60 text-blue-300 border-blue-500/30',
      accentGlow: 'hover:shadow-[0_0_30px_rgba(44,103,237,0.25)]',
      borderHover: 'group-hover:border-primary/50',
      statColor: 'text-primary',
      spineColor: 'from-blue-600/40 via-blue-500/20 to-transparent',
    },
    metric: '+1% DAILY COMPOUND',
    metricLabel: 'Systems Over Goals',
    quote:
      'You do not rise to the level of your goals. You fall to the level of your systems. Perubahan mikro 1% setiap hari berlipat ganda menjadi lompatan eksponensial dalam jangka panjang.',
    summary:
      'Kerangka kerja ilmiah paling komprehensif tentang cara mendesain sistem kebiasaan mikro yang mudah diulang, menghilangkan friksi, dan membangun identitas unggul.',
    personalImpact:
      'Menjadi fondasi etos rekayasa perangkat lunak saya: keandalan sistem 99.9%, zero-downtime, dan clean code bukanlah kebetulan, melainkan hasil otomatisasi dari rutinitas dan standar disiplin kecil yang diulang setiap hari.',
    coreTakeaways: [
      {
        label: 'Systems > Goals',
        desc: 'Membangun pipeline dan alur kerja otomatis harian ketimbang sekadar memasang target tanpa sistem.',
      },
      {
        label: 'Compounding Mastery',
        desc: 'Peningkatan konsisten dalam menguasai teknologi baru (Python ML, Vercel, Full Stack) setiap hari.',
      },
      {
        label: 'Friction Reduction',
        desc: 'Mengoptimalkan lingkungan kerja (VS Code, tools, automasi) agar eksekusi menjadi cepat dan tanpa hambatan.',
      },
    ],
  },
  {
    id: 'how-to-make-shit-happen',
    title: 'How to Make Sh*t Happen',
    subtitle: 'Make More Money. Get in Better Shape. Control Your Life.',
    author: 'Sean Whalen',
    coAuthor: 'Radical Accountability Manual',
    badge: 'RELENTLESS EXECUTION',
    cover: '/books/make-shit-happen.png',
    pillar: 'RADICAL EXECUTION & OWNERSHIP',
    pillarTheme: {
      tagBg: 'bg-amber-950/60 text-amber-300 border-amber-500/30',
      accentGlow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.22)]',
      borderHover: 'group-hover:border-amber-500/50',
      statColor: 'text-amber-400',
      spineColor: 'from-amber-600/40 via-amber-500/20 to-transparent',
    },
    metric: 'ZERO EXCUSES',
    metricLabel: 'Radical Ownership & Speed',
    quote:
      'Hentikan overthinking dan mencari alasan. Ambil tanggung jawab 100% atas setiap hasil, bergerak cepat, dan eksekusi nyata empat pilar kehidupan: Core, Fit, Relations, dan Business.',
    summary:
      'Buku tamparan keras yang menuntut aksi tanpa kompromi, menanggalkan rasa takut gagal, dan mengubah visi abstrak menjadi hasil nyata di dunia nyata.',
    personalImpact:
      'Menjadi katalisator semangat Vibe Coding saya: berani mengeksekusi ide dengan cepat tanpa terjebak *analysis paralysis*. Mengambil kepemilikan penuh (*ownership*) atas setiap sistem yang saya bangun dan pertanggungjawabkan.',
    coreTakeaways: [
      {
        label: 'Extreme Ownership',
        desc: 'Jika ada masalah dalam sistem atau kodingan, jangan mencari kambing hitam—segera cari solusi dan selesaikan.',
      },
      {
        label: 'Bias for Action',
        desc: 'Ide bernilai nol tanpa eksekusi. Bangun, luncurkan (deploy), dan perbaiki secara langsung di lapangan.',
      },
      {
        label: '4 Pillars Balance',
        desc: 'Keseimbangan prima antara pikiran (Core), fisik (Fit), hubungan sosial (Relations), dan karya (Business).',
      },
    ],
  },
]

export default function FavoriteBooks() {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div className="w-full mt-space-xl pt-space-lg border-t border-white/[0.08]" id="books">
      {/* Sub-Header: Books & Philosophical Foundation */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-space-lg">
        <div>
          <div className="flex items-center gap-2 font-label-mono text-xs sm:text-label-sm text-secondary uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
              INTELLECTUAL ENGINE
            </span>
            <span>// 3 BUKU FAVORIT YANG MEMBENTUK MINDSET SAYA</span>
          </div>
          <h3 className="font-headline-md text-xl sm:text-2xl lg:text-headline-md font-bold text-on-surface tracking-tight">
            Fondasi Literatur, Ketahanan Mental &amp; Disiplin Eksekusi
          </h3>
          <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mt-1 max-w-3xl leading-relaxed">
            Ketelitian teknis dan kecepatan eksekusi tidak hadir secara instan. Tiga buku ini menjadi kompas filosofis saya dalam merawat daya tahan mental, merancang sistem kebiasaan mikro, dan mengeksekusi solusi tanpa kompromi.
          </p>
        </div>

        <div className="flex items-center gap-2 font-label-mono text-xs text-outline shrink-0">
          <span className="material-symbols-outlined text-[18px] text-primary">auto_stories</span>
          <span>CURATED READING LIST</span>
        </div>
      </div>

      {/* 3 Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 w-full">
        {BOOKS.map((book, index) => {
          const theme = book.pillarTheme

          return (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl bg-surface-container-low border border-white/[0.08] ${theme.borderHover} p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl ${theme.accentGlow}`}
            >
              <div>
                {/* Top Header: Index & Pillar Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-label-mono text-[11px] text-outline font-semibold tracking-wider">
                    BOOK // 0{index + 1}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-label-mono text-[10px] font-semibold tracking-wider uppercase border ${theme.tagBg}`}
                  >
                    {book.pillar}
                  </span>
                </div>

                {/* Book 3D-Styled Cover Presentation */}
                <div className="relative w-full flex justify-center items-center py-3 mb-5">
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-36 h-48 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                  </div>

                  {/* 3D Realistic Book Shell */}
                  <div
                    className="relative w-36 sm:w-40 aspect-[1/1.5] rounded-r-lg rounded-l-sm overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.65)] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] border-t border-r border-b border-white/[0.12] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1"
                    style={{
                      perspective: '1000px',
                    }}
                  >
                    {/* Realistic Book Spine Shadow effect on left edge */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-20 pointer-events-none" />
                    <div className="absolute left-1 top-0 bottom-0 w-[1px] bg-white/20 z-20 pointer-events-none" />

                    {/* Book Cover Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={book.cover}
                      alt={`${book.title} by ${book.author}`}
                      className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gloss / Sheen Highlight diagonal overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-70 group-hover:opacity-100 pointer-events-none transition-opacity" />
                  </div>
                </div>

                {/* Titles & Authors */}
                <div className="text-center mb-4">
                  <span className="font-label-mono text-[10px] text-outline uppercase tracking-wider block mb-1">
                    {book.badge}
                  </span>
                  <h4 className="font-headline-sm text-lg sm:text-xl font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">
                    {book.title}
                  </h4>
                  <p className="font-label-mono text-xs text-secondary mt-1">
                    {book.author}{' '}
                    <span className="text-on-surface-variant text-[11px] font-normal">
                      ({book.coAuthor})
                    </span>
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2 italic leading-relaxed line-clamp-2">
                    &quot;{book.subtitle}&quot;
                  </p>
                </div>

                {/* Key Metric Pill */}
                <div className="p-3 rounded-xl bg-surface-container border border-white/[0.05] mb-4">
                  <div className="flex items-center justify-between font-label-mono text-[11px] mb-1">
                    <span className="text-outline">MINDSET IMPACT</span>
                    <span className={`font-bold ${theme.statColor}`}>{book.metric}</span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    {book.personalImpact}
                  </p>
                </div>
              </div>

              {/* Action Button: Inspect Insight Details */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedBook(book)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-mono text-xs transition-all border border-white/[0.06] group/btn"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary group-hover/btn:text-on-primary-container transition-colors">
                    menu_book
                  </span>
                  <span>Baca Insight &amp; Filosofi</span>
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Quote Banner Below 3 Books */}
      <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[22px]">psychology</span>
          </div>
          <div>
            <p className="font-label-mono text-xs text-secondary font-semibold uppercase">
              TRIFECTA MINDSET // ENDURANCE • SYSTEMS • EXECUTION
            </p>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-0.5">
              Kombinasi daya tahan Scott Jurek, kedisiplinan sistem James Clear, dan keberanian eksekusi Sean Whalen membentuk karakter profesional saya di setiap proyek.
            </p>
          </div>
        </div>

        <a
          href="#skills"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono text-xs text-nowrap transition-colors border border-white/[0.06]"
        >
          <span>Eksplorasi Technical Skills</span>
          <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
        </a>
      </div>

      {/* Modal / Dialog: Detailed Book Insights */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            {/* Backdrop click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="absolute inset-0"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-container-low border border-white/[0.12] p-5 sm:p-7 shadow-2xl z-10 text-on-surface"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedBook(null)}
                aria-label="Tutup Dialog"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface flex items-center justify-center transition-colors border border-white/[0.08]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>

              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-5 border-b border-white/[0.08]">
                {/* Book Cover */}
                <div className="w-28 sm:w-32 aspect-[1/1.5] rounded-lg overflow-hidden shadow-2xl shrink-0 border border-white/[0.12] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedBook.cover}
                    alt={selectedBook.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
                </div>

                {/* Details */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full font-label-mono text-[10px] font-semibold uppercase border mb-2 ${selectedBook.pillarTheme.tagBg}`}
                  >
                    {selectedBook.pillar}
                  </span>
                  <h3 className="font-headline-md text-2xl font-bold text-on-surface">
                    {selectedBook.title}
                  </h3>
                  <p className="font-label-mono text-sm text-secondary mt-0.5">
                    {selectedBook.author}{' '}
                    <span className="text-on-surface-variant text-xs">
                      • {selectedBook.coAuthor}
                    </span>
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2 italic">
                    &quot;{selectedBook.subtitle}&quot;
                  </p>

                  <div className="mt-3 flex items-center gap-2 font-label-mono text-xs">
                    <span className="text-outline">FRAMEWORK:</span>
                    <span className={`font-bold ${selectedBook.pillarTheme.statColor}`}>
                      {selectedBook.metric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Highlight */}
              <div className="p-4 rounded-xl bg-surface-container border border-white/[0.06] mb-5">
                <div className="flex items-center gap-2 font-label-mono text-xs text-secondary mb-1">
                  <span className="material-symbols-outlined text-[16px]">format_quote</span>
                  <span>KEY PHILOSOPHICAL QUOTE</span>
                </div>
                <p className="font-body-sm text-sm text-on-surface italic leading-relaxed">
                  &quot;{selectedBook.quote}&quot;
                </p>
              </div>

              {/* Personal Synthesis */}
              <div className="mb-5">
                <h4 className="font-label-mono text-xs uppercase tracking-wider text-outline mb-2">
                  // MENGAPA BUKU INI SANGAT BERPENGARUH PADA SAYA
                </h4>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  {selectedBook.personalImpact}
                </p>
              </div>

              {/* 3 Core Action Takeaways */}
              <div>
                <h4 className="font-label-mono text-xs uppercase tracking-wider text-outline mb-3">
                  // 3 PILAR IMPLEMENTASI DALAM REKAYASA &amp; OPERASIONAL
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedBook.coreTakeaways.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-surface-container border border-white/[0.04] flex flex-col justify-between"
                    >
                      <span className="font-label-mono text-xs font-bold text-primary mb-1">
                        0{i + 1}. {item.label}
                      </span>
                      <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedBook(null)}
                  className="px-5 py-2 rounded-full bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-mono text-xs text-on-surface transition-all border border-white/[0.08]"
                >
                  Tutup Dialog
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
