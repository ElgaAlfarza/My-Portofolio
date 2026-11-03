'use client'

const CV_DRIVE_URL =
  'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'
const CERT_DRIVE_URL =
  'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-sandstone bg-paper/85 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
          <div className="flex items-baseline justify-center sm:justify-start">
            <span className="font-handwriting text-xl text-brand font-bold mr-1">
              elga&apos;s
            </span>
            <span className="font-display text-sm tracking-wider text-ink font-bold">
              PORTFOLIO
            </span>
          </div>
          <span className="hidden sm:inline text-sandstone-dark">•</span>
          <span>Elga Alfareza, S.Kom. © {new Date().getFullYear()} • Mataram, NTB</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium">
          <a
            href={CV_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            CV
          </a>
          <a
            href={CERT_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            Sertifikat
          </a>
          <a
            href="https://linkedin.com/in/elga-alfareza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ElgaAlfarza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-ink hover:text-brand font-semibold transition-colors"
          >
            <span>Ke Atas</span>
            <span className="material-symbols-outlined text-[0.9375rem]" aria-hidden="true">
              arrow_upward
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
