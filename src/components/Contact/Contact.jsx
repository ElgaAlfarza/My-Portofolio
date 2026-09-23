'use client'

/**
 * Contact Section
 *
 * Layout:
 *   Left (wider): Contact form — name, email, message
 *   Right: Social media icon links
 *
 * Form behaviour:
 *   Controlled inputs → client-side required validation on submit.
 *   Status: 'idle' | 'loading' | 'success' | 'error'
 *   Replace the fake async delay with a real API call (EmailJS / Formspree / Resend).
 *
 * Design decisions:
 *   - Input glow on :focus-within uses a ring class — not box-shadow — so it
 *     degrades gracefully and is composable with border-white/10 base state.
 *   - Social icons are proper inline SVGs with aria-hidden + visually-hidden
 *     text so screen readers announce the link label, not just an icon.
 *   - Hover: scale(1.1) + colour shift to accent. Scale is subtle (not 1.2+)
 *     to avoid feeling like a cartoon.
 */

import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Animation preset ───────────────────────────────────────────────────────
const EASE_OUT = [0, 0, 0.2, 1]
const fadeUp   = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: EASE_OUT, delay },
})

// ── Social icons (inline SVG, no external dep) ────────────────────────────
const SOCIALS = [
  {
    label: 'GitHub',
    href:  'https://github.com/',          // TODO: your URL
    color: '#ffffff',
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com/in/elga-alfareza',
    color: '#0A66C2',
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href:  'https://instagram.com/',       // TODO: your URL
    color: '#E1306C',
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href:  'https://tiktok.com/@',         // TODO: your URL
    color: '#ff2d55',
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.84 4.84 0 0 1-1.01-.09z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href:  'mailto:you@example.com',       // TODO: your email
    color: '#2c67ed',
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 7 8.586 6.293a2 2 0 0 0 2.828 0L22 7"/>
      </svg>
    ),
  },
]

// ── Input component ────────────────────────────────────────────────────────
function FormField({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-white/60 mb-1.5">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            role="alert"
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="mt-1.5 text-[11px] text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputBase = `
  w-full px-4 py-2.5 rounded-xl text-sm bg-white/[0.04]
  border border-white/[0.08] text-white/90 placeholder:text-white/25
  transition-all duration-200 outline-none
  focus:border-accent/50 focus:ring-1 focus:ring-accent/20 focus:bg-white/[0.06]
  aria-invalid:border-red-500/50 aria-invalid:ring-red-500/20
`

// ── Main export ────────────────────────────────────────────────────────────
export default function Contact() {
  const uid = useId()
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim())                          e.name    = 'Nama tidak boleh kosong.'
    if (!form.email.trim())                         e.email   = 'Email tidak boleh kosong.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                                    e.email   = 'Format email tidak valid.'
    if (form.message.trim().length < 10)            e.message = 'Pesan minimal 10 karakter.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    try {
      // TODO: replace with real API — e.g.:
      // await fetch('https://api.resend.com/emails', { ... })
      await new Promise((res) => setTimeout(res, 1400))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const isLoading = status === 'loading'

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-bg">
      <div className="section-wrapper">

        {/* ── Header ──────────────────────────────────── */}
        <motion.div className="mb-12 text-center" {...fadeUp()}>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-2">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white/45 text-sm max-w-sm mx-auto">
            Ada proyek, kolaborasi, atau sekadar ingin ngobrol? Saya terbuka untuk semua itu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">

          {/* ── Form (wider col) ────────────────────── */}
          <motion.div className="md:col-span-3" {...fadeUp(0.05)}>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="card-glass rounded-2xl p-6 sm:p-8 space-y-5"
            >
              {/* Name */}
              <FormField label="Nama" id={`${uid}-name`} error={errors.name}>
                <input
                  id={`${uid}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama kamu"
                  className={inputBase}
                  disabled={isLoading}
                />
              </FormField>

              {/* Email */}
              <FormField label="Email" id={`${uid}-email`} error={errors.email}>
                <input
                  id={`${uid}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@kamu.com"
                  className={inputBase}
                  disabled={isLoading}
                />
              </FormField>

              {/* Message */}
              <FormField label="Pesan" id={`${uid}-message`} error={errors.message}>
                <textarea
                  id={`${uid}-message`}
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Ceritakan tentang proyekmu…"
                  className={`${inputBase} resize-none`}
                  disabled={isLoading}
                />
              </FormField>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading || status === 'success'}
                className="
                  btn-primary w-full justify-center
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none
                "
                aria-busy={isLoading}
              >
                {isLoading
                  ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="50" strokeDashoffset="15" strokeLinecap="round"/>
                      </svg>
                      Mengirim…
                    </span>
                  )
                  : status === 'success' ? 'Terkirim ✓' : 'Kirim Pesan'
                }
              </button>

              {/* Feedback messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    key="ok"
                    role="status"
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-center text-sm text-emerald-400"
                  >
                    ✓ Pesan berhasil dikirim! Saya akan segera membalas.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    key="err"
                    role="alert"
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-center text-sm text-red-400"
                  >
                    ✗ Gagal mengirim. Coba lagi atau hubungi lewat email langsung.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* ── Social links (narrow col) ────────────── */}
          <motion.div className="md:col-span-2 flex flex-col gap-3" {...fadeUp(0.1)}>
            <p className="text-xs text-white/40 font-medium mb-1">Atau temui saya di:</p>

            {SOCIALS.map(({ label, href, color, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  card-glass flex items-center gap-3.5 px-4 py-3 rounded-xl
                  text-sm font-medium text-white/55
                  transition-colors duration-200
                  hover:text-white focus-visible:text-white
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
                "
                whileHover={{ scale: 1.025, x: 3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                {/* Coloured icon dot */}
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{ color, background: `${color}18` }}
                >
                  <Icon />
                </span>
                {label}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
