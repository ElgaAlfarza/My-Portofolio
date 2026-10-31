'use client'

import { useState, useEffect, useCallback } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'

const NAV_ITEMS = [
  { label: 'Profil',      href: '#about'       },
  { label: 'Pengalaman',  href: '#experience'  },
  { label: 'Keahlian',    href: '#skills'      },
  { label: 'Proyek',      href: '#works'       },
  { label: 'Sertifikasi', href: '#credentials' },
  { label: 'Galeri',      href: '#craft'       },
  { label: 'Kontak',      href: '#contact'     },
]

const SECTION_IDS = ['about', 'experience', 'skills', 'works', 'credentials', 'craft', 'contact']
const CV_DRIVE_URL = 'https://drive.google.com/drive/folders/1XhErMswRDMb1z5zEDkMm6Y-RN2yI8UO2?usp=sharing'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false)
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-line">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#top')
          }}
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <span className="w-8 h-8 rounded-lg bg-ink text-paper font-sans font-bold text-xs flex items-center justify-center tracking-tight">
            EA
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-sans font-bold text-sm text-ink group-hover:text-brand transition-colors">
              Elga Alfareza, S.Kom.
            </span>
            <span className="text-xs text-ink-muted hidden sm:inline">
              Full Stack • AI • IT Operations
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                aria-current={isActive ? 'location' : undefined}
                className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
                  isActive
                    ? 'bg-subtle text-ink font-semibold'
                    : 'text-ink-muted hover:text-ink hover:bg-subtle/60 font-medium'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={CV_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex exec-btn-secondary !py-1.5 !px-3 !text-xs"
          >
            <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
              download
            </span>
            <span>CV</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            className="hidden sm:inline-flex exec-btn-primary !py-1.5 !px-3.5 !text-xs"
          >
            <span>Hubungi Saya</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden w-9 h-9 rounded-lg border border-line bg-paper text-ink flex items-center justify-center hover:bg-subtle transition-colors"
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Sheet */}
      {mobileOpen && (
        <div className="lg:hidden bg-paper border-b border-line shadow-elevated">
          <nav
            aria-label="Navigasi Seluler"
            className="max-w-5xl mx-auto px-5 py-4 flex flex-col gap-1"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`px-3.5 py-2.5 rounded-lg text-sm flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-subtle text-ink font-semibold'
                      : 'text-ink-body hover:bg-subtle/60'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className="material-symbols-outlined text-[1rem] text-ink-muted"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </a>
              )
            })}

            <div className="pt-3 mt-2 border-t border-line grid grid-cols-2 gap-2.5">
              <a
                href={CV_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="exec-btn-secondary !py-2 !text-xs"
              >
                <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                  download
                </span>
                <span>Unduh CV</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="exec-btn-primary !py-2 !text-xs"
              >
                <span>Hubungi Saya</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
