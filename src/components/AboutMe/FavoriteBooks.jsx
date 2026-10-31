'use client'

import { useState, useEffect, useRef } from 'react'
import { closeTopLayer } from '../../utils/topLayer'

const BOOKS = [
  {
    id: 'eat-and-run',
    title: 'Eat & Run',
    subtitle: 'My Unlikely Journey to Ultramarathon Greatness',
    author: 'Scott Jurek',
    coAuthor: 'with Steve Friedman',
    cover: '/books/eat-and-run.png',
    pillar: 'Ketahanan & Konsistensi',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    accentDot: 'bg-emerald-600',
    quote:
      'Batas kemampuan fisik dan mental kita jauh melampaui apa yang kita bayangkan. Daya tahan sejati dibangun dari konsistensi langkah demi langkah di tengah kelelahan.',
    personalImpact:
      'Membentuk ketangguhan mental dalam menghadapi sesi debugging sistem yang kompleks, sprint pengembangan panjang, dan menjaga fokus operasional secara konsisten.',
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
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    accentDot: 'bg-blue-600',
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
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
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

export default function FavoriteBooks() {
  const [selectedBook, setSelectedBook] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedBook) {
      if (!dialog.open) {
        dialog.showModal()
      }
    } else if (dialog.open) {
      closeTopLayer(dialog)
    }
  }, [selectedBook])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleClose = () => setSelectedBook(null)
    const handleCancel = (e) => {
      e.preventDefault()
      closeTopLayer(dialog)
    }

    dialog.addEventListener('close', handleClose)
    dialog.addEventListener('cancel', handleCancel)

    // Fallback for browsers without native HTMLDialogElement.prototype.closedBy
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
          closeTopLayer(dialog)
        }
      }
      dialog.addEventListener('click', handleBackdropClick)
    }

    return () => {
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('cancel', handleCancel)
      if (handleBackdropClick) {
        dialog.removeEventListener('click', handleBackdropClick)
      }
    }
  }, [])

  return (
    <div id="books" className="w-full mt-12 pt-10 border-t border-line scroll-reveal">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
            <span className="material-symbols-outlined text-[1rem] text-brand" aria-hidden="true">
              auto_stories
            </span>
            <span>Referensi &amp; Literatur</span>
          </div>
          <h3 className="heading-balance font-sans text-lg sm:text-xl font-bold text-ink">
            Tiga Buku Pembentuk Etos Kerja
          </h3>
        </div>
        <p className="text-xs text-ink-muted">
          Klik buku untuk melihat ringkasan prinsip yang saya terapkan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {BOOKS.map((book) => (
          <article
            key={book.id}
            className="exec-card exec-card-hover p-4 sm:p-5 flex flex-col justify-between gap-4 group"
          >
            <div>
              <div className="flex items-start gap-3.5 mb-3.5">
                <div className="relative w-16 aspect-[2/3] rounded-md overflow-hidden border border-line bg-subtle shrink-0 shadow-subtle group-hover:shadow-md transition-shadow">
                  {/* Subtle 3D spine fold lighting */}
                  <div className="absolute left-0 inset-y-0 w-1.5 bg-gradient-to-r from-black/25 to-transparent z-10 pointer-events-none" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.cover}
                    alt={`Sampul buku ${book.title} karya ${book.author}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[0.6875rem] font-semibold border mb-1.5 ${book.badgeClass}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${book.accentDot}`} aria-hidden="true" />
                    <span>{book.pillar}</span>
                  </span>
                  <h4 className="font-sans text-card-title text-ink leading-snug group-hover:text-brand transition-colors">
                    {book.title}
                  </h4>
                  <p className="text-xs text-ink-muted mt-0.5">
                    {book.author}
                  </p>
                </div>
              </div>

              <p className="prose-pretty text-xs sm:text-sm text-ink-body leading-relaxed">
                {book.personalImpact}
              </p>
            </div>

            <div className="pt-3 border-t border-line">
              <button
                type="button"
                onClick={() => setSelectedBook(book)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-hover transition-colors"
              >
                <span>Baca Ringkasan Prinsip</span>
                <span className="material-symbols-outlined text-[1rem] transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Native Modal Dialog with Declarative Light-Dismiss (`closedby="any"`) */}
      <dialog
        ref={dialogRef}
        {...{ closedby: 'any' }}
        aria-labelledby="book-dialog-title"
        className="exec-dialog w-[calc(100%-2rem)] max-w-xl max-h-[88dvh] overflow-y-auto"
      >
        {selectedBook && (
          <div className="p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-line">
              <div className="flex items-start gap-4">
                <div className="relative w-20 aspect-[2/3] rounded-md overflow-hidden border border-line bg-subtle shrink-0 shadow-subtle">
                  <div className="absolute left-0 inset-y-0 w-2 bg-gradient-to-r from-black/25 to-transparent z-10 pointer-events-none" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedBook.cover}
                    alt={selectedBook.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold border mb-2 ${selectedBook.badgeClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedBook.accentDot}`} aria-hidden="true" />
                    <span>{selectedBook.pillar}</span>
                  </span>
                  <h3
                    id="book-dialog-title"
                    className="font-sans text-xl font-bold text-ink"
                  >
                    {selectedBook.title}
                  </h3>
                  <p className="text-xs text-ink-muted mt-0.5">
                    {selectedBook.author} • {selectedBook.coAuthor}
                  </p>
                  <p className="text-xs text-ink-body italic mt-1.5">
                    &ldquo;{selectedBook.subtitle}&rdquo;
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => closeTopLayer(dialogRef.current)}
                aria-label="Tutup dialog"
                className="w-8 h-8 rounded-lg border border-line bg-paper hover:bg-subtle text-ink-muted hover:text-ink flex items-center justify-center shrink-0 transition-colors"
              >
                <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                  close
                </span>
              </button>
            </div>

            <blockquote className="p-4 rounded-lg bg-subtle border border-line text-xs sm:text-sm text-ink italic mb-5 leading-relaxed">
              &ldquo;{selectedBook.quote}&rdquo;
            </blockquote>

            <div className="mb-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1.5">
                Penerapan dalam Pekerjaan
              </h4>
              <p className="prose-pretty text-xs sm:text-sm text-ink-body leading-relaxed">
                {selectedBook.personalImpact}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2.5">
                Tiga Poin Utama
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedBook.coreTakeaways.map((item, idx) => (
                  <div key={item.label} className="p-3 rounded-lg bg-canvas border border-line">
                    <p className="text-xs font-semibold text-ink mb-1">
                      0{idx + 1}. {item.label}
                    </p>
                    <p className="text-xs text-ink-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line flex justify-end">
              <button
                type="button"
                onClick={() => closeTopLayer(dialogRef.current)}
                className="exec-btn-secondary !py-2 !px-4 !text-xs"
              >
                Tutup Dialog
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}
