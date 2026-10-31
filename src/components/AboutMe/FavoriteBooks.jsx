'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

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
      accentGlow: 'hover:shadow-[0_18px_40px_-10px_rgba(16,185,129,0.25)]',
      borderHover: 'hover:border-emerald-400/50',
      statColor: 'text-emerald-400',
      haloColor: 'bg-emerald-500/15 group-hover:bg-emerald-500/25',
    },
    metric: 'EXTREME STAMINA',
    quote:
      'Batas kemampuan fisik dan mental kita jauh melampaui apa yang kita bayangkan. Daya tahan sejati dibangun dari konsistensi langkah demi langkah di tengah kelelahan ekstrem.',
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
      accentGlow: 'hover:shadow-[0_18px_40px_-10px_rgba(44,103,237,0.3)]',
      borderHover: 'hover:border-primary/60',
      statColor: 'text-primary',
      haloColor: 'bg-primary/15 group-hover:bg-primary/25',
    },
    metric: '+1% DAILY COMPOUND',
    quote:
      'You do not rise to the level of your goals. You fall to the level of your systems. Perubahan mikro 1% setiap hari berlipat ganda menjadi lompatan eksponensial dalam jangka panjang.',
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
      accentGlow: 'hover:shadow-[0_18px_40px_-10px_rgba(245,158,11,0.25)]',
      borderHover: 'hover:border-amber-400/50',
      statColor: 'text-amber-400',
      haloColor: 'bg-amber-500/15 group-hover:bg-amber-500/25',
    },
    metric: 'ZERO EXCUSES',
    quote:
      'Hentikan overthinking dan mencari alasan. Ambil tanggung jawab 100% atas setiap hasil, bergerak cepat, dan eksekusi nyata empat pilar kehidupan: Core, Fit, Relations, dan Business.',
    personalImpact:
      'Menjadi katalisator semangat Vibe Coding saya: berani mengeksekusi ide dengan cepat tanpa terjebak analysis paralysis. Mengambil kepemilikan penuh (ownership) atas setiap sistem yang saya bangun dan pertanggungjawabkan.',
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
  const dialogRef = useRef(null)

  // Open / close native modal dialog and attach light-dismiss fallback for browsers without `closedby`
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedBook) {
      if (!dialog.open) {
        dialog.showModal()
      }
    } else if (dialog.open) {
      dialog.close()
    }
  }, [selectedBook])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleClose = () => setSelectedBook(null)
    dialog.addEventListener('close', handleClose)

    // Fallback for browsers without native HTMLDialogElement.prototype.closedBy support
    let handleBackdropClick = null
    if (typeof HTMLDialogElement !== 'undefined' && !('closedBy' in HTMLDialogElement.prototype)) {
      handleBackdropClick = (event) => {
        if (event.target !== dialog) return
        const rect = dialog.getBoundingClientRect()
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        if (!isDialogContent) {
          dialog.close()
        }
      }
      dialog.addEventListener('click', handleBackdropClick)
    }

    return () => {
      dialog.removeEventListener('close', handleClose)
      if (handleBackdropClick) {
        dialog.removeEventListener('click', handleBackdropClick)
      }
    }
  }, [])

  return (
    <div className="w-full mt-16 pt-12 border-t border-white/[0.08]" id="books">
      {/* Sub-Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex flex-wrap items-center gap-2 font-label-mono text-xs text-secondary uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="section-badge">INTELLECTUAL ENGINE</span>
            <span>// 3 BUKU FAVORIT PEMBENTUK MINDSET</span>
          </div>
          <h3 className="heading-balance font-headline-md text-headline-md font-bold text-white tracking-tight">
            Fondasi Literatur, Ketahanan Mental &amp; Disiplin Eksekusi
          </h3>
          <p className="prose-pretty font-body-md text-body-sm sm:text-body-md text-on-surface-variant mt-1.5">
            Tiga buku ini menjadi kompas filosofis saya dalam merawat daya tahan mental, merancang sistem kebiasaan mikro, dan mengeksekusi solusi rekayasa tanpa kompromi.
          </p>
        </div>

        <div className="flex items-center gap-2 font-label-mono text-xs text-outline shrink-0">
          <span className="material-symbols-outlined text-[18px] text-primary">auto_stories</span>
          <span>CURATED READING LIST</span>
        </div>
      </div>

      {/* 3 Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {BOOKS.map((book, index) => {
          const theme = book.pillarTheme

          return (
            <motion.article
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`group relative rounded-2xl bg-[#11141e]/85 backdrop-blur-md border border-white/[0.08] ${theme.borderHover} p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl ${theme.accentGlow}`}
            >
              <div>
                {/* Top Header */}
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

                {/* 3D Hardcover Book Presentation */}
                <div className="relative w-full flex justify-center items-center py-4 mb-5">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`w-36 h-48 rounded-full blur-2xl transition-all duration-500 ${theme.haloColor}`}
                    />
                  </div>

                  <div className="relative w-36 sm:w-40 aspect-[1/1.5] rounded-r-lg rounded-l-[3px] overflow-hidden shadow-[0_18px_38px_rgba(0,0,0,0.75)] group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.9)] border-t border-r border-b border-white/[0.16] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1 select-none">
                    {/* Spine crease & lighting */}
                    <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/70 via-black/25 to-transparent z-20 pointer-events-none" />
                    <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-white/25 z-20 pointer-events-none" />

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={book.cover}
                      alt={`${book.title} by ${book.author}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.09] to-transparent opacity-70 group-hover:opacity-100 pointer-events-none transition-opacity" />
                  </div>
                </div>

                {/* Titles & Authors */}
                <div className="text-center mb-4">
                  <span className="font-label-mono text-[10px] text-outline uppercase tracking-wider block mb-1">
                    {book.badge}
                  </span>
                  <h4 className="font-headline-sm text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {book.title}
                  </h4>
                  <p className="font-label-mono text-xs text-secondary mt-1">
                    {book.author}{' '}
                    <span className="text-on-surface-variant text-[11px] font-normal">
                      ({book.coAuthor})
                    </span>
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2 italic line-clamp-2">
                    &ldquo;{book.subtitle}&rdquo;
                  </p>
                </div>

                {/* Mindset Impact Summary */}
                <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06] mb-4">
                  <div className="flex items-center justify-between font-label-mono text-[11px] mb-1.5">
                    <span className="text-outline">MINDSET IMPACT</span>
                    <span className={`font-bold ${theme.statColor}`}>{book.metric}</span>
                  </div>
                  <p className="prose-pretty font-body-sm text-xs text-on-surface-variant">
                    {book.personalImpact}
                  </p>
                </div>
              </div>

              {/* Open Native Dialog Button */}
              <div className="pt-2 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => setSelectedBook(book)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container-high/80 hover:bg-primary-container hover:text-white text-on-surface font-label-mono text-xs transition-all border border-white/[0.08] group/btn"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary group-hover/btn:text-white transition-colors">
                    menu_book
                  </span>
                  <span>Baca Insight &amp; Filosofi</span>
                </button>
              </div>
            </motion.article>
          )
        })}
      </div>

      {/* Trifecta Mindset Banner */}
      <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#101420]/85 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[22px]">psychology</span>
          </div>
          <div>
            <p className="font-label-mono text-xs text-secondary font-semibold uppercase">
              TRIFECTA MINDSET // ENDURANCE • SYSTEMS • EXECUTION
            </p>
            <p className="prose-pretty font-body-sm text-xs sm:text-sm text-on-surface-variant mt-0.5">
              Kombinasi daya tahan Scott Jurek, kedisiplinan sistem James Clear, dan keberanian eksekusi Sean Whalen membentuk karakter profesional saya di setiap proyek.
            </p>
          </div>
        </div>

        <a
          href="#skills"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-white text-on-surface font-label-mono text-xs shrink-0 transition-colors border border-white/[0.08]"
        >
          <span>Eksplorasi Skills 3D</span>
          <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
        </a>
      </div>

      {/* Native Top-Layer Modal Dialog with Declarative Light-Dismiss */}
      <dialog
        ref={dialogRef}
        {...{ closedby: 'any' }}
        aria-labelledby="book-dialog-title"
        className="modal-glass w-[calc(100%-2rem)] max-w-2xl max-h-[88dvh] overflow-y-auto"
      >
        {selectedBook && (
          <div className="relative p-5 sm:p-7 text-on-surface">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Tutup Dialog"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface flex items-center justify-center transition-colors border border-white/[0.1]"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-5 border-b border-white/[0.08]">
              <div className="w-28 sm:w-32 aspect-[1/1.5] rounded-lg overflow-hidden shadow-2xl shrink-0 border border-white/[0.15] relative select-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedBook.cover}
                  alt={selectedBook.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left pr-6">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full font-label-mono text-[10px] font-semibold uppercase border mb-2 ${selectedBook.pillarTheme.tagBg}`}
                >
                  {selectedBook.pillar}
                </span>
                <h3
                  id="book-dialog-title"
                  className="font-headline-md text-2xl font-bold text-white"
                >
                  {selectedBook.title}
                </h3>
                <p className="font-label-mono text-sm text-secondary mt-0.5">
                  {selectedBook.author}{' '}
                  <span className="text-on-surface-variant text-xs">
                    • {selectedBook.coAuthor}
                  </span>
                </p>
                <p className="font-body-sm text-xs text-on-surface-variant mt-2 italic">
                  &ldquo;{selectedBook.subtitle}&rdquo;
                </p>

                <div className="mt-3 flex items-center gap-2 font-label-mono text-xs">
                  <span className="text-outline">FRAMEWORK:</span>
                  <span className={`font-bold ${selectedBook.pillarTheme.statColor}`}>
                    {selectedBook.metric}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] mb-5">
              <div className="flex items-center gap-2 font-label-mono text-xs text-secondary mb-1">
                <span className="material-symbols-outlined text-[16px]">format_quote</span>
                <span>KEY PHILOSOPHICAL QUOTE</span>
              </div>
              <p className="prose-pretty font-body-sm text-sm text-white italic">
                &ldquo;{selectedBook.quote}&rdquo;
              </p>
            </div>

            <div className="mb-5">
              <h4 className="font-label-mono text-xs uppercase tracking-wider text-outline mb-2">
                // MENGAPA BUKU INI SANGAT BERPENGARUH PADA SAYA
              </h4>
              <p className="prose-pretty font-body-sm text-sm text-on-surface-variant">
                {selectedBook.personalImpact}
              </p>
            </div>

            <div>
              <h4 className="font-label-mono text-xs uppercase tracking-wider text-outline mb-3">
                // 3 PILAR IMPLEMENTASI DALAM REKAYASA &amp; OPERASIONAL
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedBook.coreTakeaways.map((item, i) => (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between"
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

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-end">
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="px-5 py-2 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-white font-label-mono text-xs text-on-surface transition-all border border-white/[0.1]"
              >
                Tutup Dialog (Esc)
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}
