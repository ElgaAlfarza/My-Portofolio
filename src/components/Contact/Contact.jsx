'use client'

import { useState, useEffect, useRef } from 'react'

const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    scope: 'operations',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | activation | error
  const [feedbackMsg, setFeedbackMsg] = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const formRef = useRef(null)

  // Progressive enhancement: WeakMap fallback for browsers without `:user-invalid` + ARIA sync
  useEffect(() => {
    const formEl = formRef.current
    if (!formEl) return undefined

    const syncAria = (el) => {
      if (!el || typeof el.matches !== 'function' || !el.checkValidity) return
      try {
        if (typeof CSS !== 'undefined' && CSS.supports('selector(:user-invalid)')) {
          if (el.matches(':user-invalid')) {
            el.setAttribute('aria-invalid', 'true')
          } else {
            el.removeAttribute('aria-invalid')
          }
        }
      } catch {
        // Ignore selector errors on legacy engines
      }
    }

    const onBlurAria = (e) => syncAria(e.target)
    const onInputAria = (e) => {
      if (e.target?.hasAttribute?.('aria-invalid')) syncAria(e.target)
    }

    formEl.addEventListener('blur', onBlurAria, true)
    formEl.addEventListener('input', onInputAria)

    let cleanupFallback = null
    if (typeof CSS !== 'undefined' && !CSS.supports('selector(:user-invalid)')) {
      const dirtyState = new WeakMap()
      const updateState = (input) => {
        const isValid = input.checkValidity()
        input.classList.toggle('user-invalid-fallback', !isValid)
        input.classList.toggle('user-valid-fallback', isValid)
        if (!isValid) {
          input.setAttribute('aria-invalid', 'true')
        } else {
          input.removeAttribute('aria-invalid')
        }
      }
      const handleFallbackEvent = (event) => {
        const input = event.target
        if (event.type === 'reset') {
          const controls = input.elements || []
          for (const control of controls) {
            dirtyState.delete(control)
            control.classList.remove('user-invalid-fallback', 'user-valid-fallback')
            control.removeAttribute('aria-invalid')
          }
          return
        }
        if (!input?.checkValidity) return
        if (event.type === 'input' || event.type === 'change') {
          const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false }
          state.hasInteracted = true
          dirtyState.set(input, state)
          if (state.hasBlurred) updateState(input)
        } else if (event.type === 'blur') {
          const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false }
          state.hasBlurred = true
          dirtyState.set(input, state)
          if (state.hasInteracted) updateState(input)
        }
      }
      formEl.addEventListener('blur', handleFallbackEvent, true)
      formEl.addEventListener('input', handleFallbackEvent)
      formEl.addEventListener('change', handleFallbackEvent)
      formEl.addEventListener('reset', handleFallbackEvent, true)
      cleanupFallback = () => {
        formEl.removeEventListener('blur', handleFallbackEvent, true)
        formEl.removeEventListener('input', handleFallbackEvent)
        formEl.removeEventListener('change', handleFallbackEvent)
        formEl.removeEventListener('reset', handleFallbackEvent, true)
      }
    }

    return () => {
      formEl.removeEventListener('blur', onBlurAria, true)
      formEl.removeEventListener('input', onInputAria)
      if (cleanupFallback) cleanupFallback()
    }
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2200)
    } catch {
      // Clipboard permission blocked
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setFeedbackMsg('')

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      _replyto: form.email.trim(),
      _subject: `[Portofolio Elga] Pesan Baru dari ${form.name.trim()} (${form.scope})`,
      _template: 'table',
      _captcha: 'false',
      'Bidang Kolaborasi (Scope)': form.scope,
      'Nama Pengirim': form.name.trim(),
      'Email Pengirim': form.email.trim(),
      'Isi Pesan': form.message.trim(),
    }

    try {
      const directRes = await fetch(`https://formsubmit.co/ajax/${EMAIL_ADDRESS}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const directData = await directRes.json().catch(() => ({}))
      const msg = directData && directData.message ? String(directData.message) : ''

      if (
        msg.toLowerCase().includes('needs activation') ||
        msg.toLowerCase().includes('activate form') ||
        msg.toLowerCase().includes('activation')
      ) {
        setStatus('activation')
        setFeedbackMsg(
          'FormSubmit telah mengirimkan email aktivasi ke elgaalfarezabumigora@gmail.com. Silakan buka Gmail Anda (cek Inbox atau folder Spam) dan klik tombol "Activate Form" 1x agar pesan selanjutnya masuk otomatis ke Inbox.'
        )
        return
      }

      if (directData.success === 'true' || directData.success === true || directRes.ok) {
        setStatus('success')
        setFeedbackMsg(
          'Pesan Anda berhasil dikirim ke elgaalfarezabumigora@gmail.com. Terima kasih telah menghubungi saya, saya akan segera membalas pesan Anda.'
        )
        setForm({ name: '', email: '', scope: 'operations', message: '' })
        formRef.current?.reset()
        return
      }

      const serverRes = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const serverData = await serverRes.json().catch(() => ({}))

      if (serverData.success) {
        if (serverData.needsActivation) {
          setStatus('activation')
          setFeedbackMsg(serverData.message)
        } else {
          setStatus('success')
          setFeedbackMsg(serverData.message)
          setForm({ name: '', email: '', scope: 'operations', message: '' })
          formRef.current?.reset()
        }
      } else {
        setStatus('error')
        setFeedbackMsg(
          serverData.message ||
            'Pengiriman pesan terkendala. Silakan hubungi saya langsung melalui email atau WhatsApp.'
        )
      }
    } catch {
      setStatus('error')
      setFeedbackMsg(
        'Koneksi jaringan terputus. Silakan hubungi saya langsung melalui email atau WhatsApp.'
      )
    }
  }

  return (
    <section id="contact" className="w-full py-14 sm:py-20 border-t border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Contact Information */}
        <div className="lg:col-span-5 flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            07 • Kontak &amp; Kolaborasi
          </p>
          <h2 className="heading-balance font-sans text-section-title text-ink mb-3">
            Mari Diskusikan Kebutuhan Tim Anda
          </h2>
          <p className="prose-pretty text-xs sm:text-sm text-ink-body mb-6">
            Saya terbuka untuk peluang karier penuh waktu (Full-Time), proyek pengembangan aplikasi web Full Stack, riset AI/Machine Learning, maupun posisi operasional TI &amp; Quality Control.
          </p>

          <div className="exec-card divide-y divide-line mb-6 text-xs">
            {/* Email Row */}
            <div className="p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-ink-muted font-medium">Email Resmi</p>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="text-ink hover:text-brand font-semibold truncate block mt-0.5 transition-colors"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="exec-btn-secondary !py-1.5 !px-2.5 !text-xs shrink-0"
              >
                <span className="material-symbols-outlined text-[0.9375rem]" aria-hidden="true">
                  {copiedEmail ? 'check' : 'content_copy'}
                </span>
                <span>{copiedEmail ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>

            {/* WhatsApp Row */}
            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-ink-muted font-medium">WhatsApp</p>
                <p className="text-ink font-semibold mt-0.5">+62 852-3820-8849</p>
              </div>
              <a
                href="https://wa.me/6285238208849"
                target="_blank"
                rel="noopener noreferrer"
                className="exec-btn-secondary !py-1.5 !px-2.5 !text-xs shrink-0"
              >
                <span>Chat Langsung</span>
              </a>
            </div>

            {/* Location Row */}
            <div className="p-4">
              <p className="text-ink-muted font-medium">Domisili &amp; Ketersediaan</p>
              <p className="text-ink font-semibold mt-0.5">
                Mataram, Nusa Tenggara Barat (UTC+8 / WITA)
              </p>
              <p className="text-emerald-700 font-medium mt-0.5">
                Siap untuk On-site, Hybrid, maupun Remote
              </p>
            </div>
          </div>

          {/* Professional Profiles */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://linkedin.com/in/elga-alfareza"
              target="_blank"
              rel="noopener noreferrer"
              className="exec-btn-secondary !py-2 !px-3.5 !text-xs"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                badge
              </span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ElgaAlfarza"
              target="_blank"
              rel="noopener noreferrer"
              className="exec-btn-secondary !py-2 !px-3.5 !text-xs"
            >
              <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                code
              </span>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean Contact Form */}
        <div className="lg:col-span-7 exec-card p-5 sm:p-7 w-full">
          <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs font-semibold text-ink mb-0.5">
                  Nama Lengkap *
                </label>
                <span id="name-hint" className="text-xs text-ink-muted mb-1.5">
                  Nama Anda atau perusahaan
                </span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  autoComplete="name"
                  placeholder="Contoh: Budi Pratama / HRD"
                  aria-describedby="name-hint"
                  aria-errormessage="name-error"
                  value={form.name}
                  onChange={handleChange}
                  className="exec-input"
                />
                <div id="name-error" className="field-error-msg">
                  <span className="material-symbols-outlined text-[0.9375rem]" aria-hidden="true">
                    error
                  </span>
                  <span>Mohon isi nama lengkap (minimal 2 karakter).</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs font-semibold text-ink mb-0.5">
                  Alamat Email *
                </label>
                <span id="email-hint" className="text-xs text-ink-muted mb-1.5">
                  Format: nama@perusahaan.com
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="nama@perusahaan.com"
                  aria-describedby="email-hint"
                  aria-errormessage="email-error"
                  value={form.email}
                  onChange={handleChange}
                  className="exec-input"
                />
                <div id="email-error" className="field-error-msg">
                  <span className="material-symbols-outlined text-[0.9375rem]" aria-hidden="true">
                    error
                  </span>
                  <span>Masukkan alamat email yang valid.</span>
                </div>
              </div>
            </div>

            {/* Engagement Scope */}
            <div className="flex flex-col">
              <label htmlFor="scope" className="text-xs font-semibold text-ink mb-1.5">
                Keperluan / Topik Diskusi
              </label>
              <select
                id="scope"
                name="scope"
                value={form.scope}
                onChange={handleChange}
                className="exec-input"
              >
                <option value="operations">Rekrutmen Full-Time (Full Stack / AI / IT Operations)</option>
                <option value="fullstack">Pengembangan Aplikasi Web Full Stack</option>
                <option value="simbank">Operasional Server Simbank &amp; Infrastruktur</option>
                <option value="ml">Riset &amp; Implementasi Machine Learning (Python / CNN)</option>
                <option value="qc">Quality Control (QC) Hardware &amp; Software</option>
                <option value="other">Kolaborasi atau Pertanyaan Umum</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs font-semibold text-ink mb-0.5">
                Pesan *
              </label>
              <span id="message-hint" className="text-xs text-ink-muted mb-1.5">
                Tuliskan informasi posisi, kebutuhan proyek, atau jadwal diskusi
              </span>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={4}
                placeholder="Halo Elga, kami ingin mendiskusikan peluang kerja sama / rekrutmen untuk posisi..."
                aria-describedby="message-hint"
                aria-errormessage="message-error"
                value={form.message}
                onChange={handleChange}
                className="exec-input"
              />
              <div id="message-error" className="field-error-msg">
                <span className="material-symbols-outlined text-[0.9375rem]" aria-hidden="true">
                  error
                </span>
                <span>Mohon tuliskan pesan minimal 10 karakter.</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs text-ink-muted">
                Pesan dikirim langsung ke kotak masuk email saya.
              </p>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="exec-btn-primary"
              >
                <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                  {status === 'sending' ? 'hourglass_top' : 'send'}
                </span>
                <span>{status === 'sending' ? 'Mengirim Pesan...' : 'Kirim Pesan'}</span>
              </button>
            </div>

            {/* Status Feedback Alerts */}
            {status === 'success' && (
              <div
                role="status"
                className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-1"
              >
                <p className="font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Pesan Berhasil Terkirim</span>
                </p>
                <p className="leading-relaxed">{feedbackMsg}</p>
              </div>
            )}

            {status === 'activation' && (
              <div
                role="status"
                className="p-4 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 text-xs space-y-2"
              >
                <p className="font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                    mark_email_unread
                  </span>
                  <span>Konfirmasi Aktivasi Form (1x)</span>
                </p>
                <p className="leading-relaxed">{feedbackMsg}</p>
                <a
                  href="https://mail.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exec-btn-secondary !py-1.5 !px-3 !text-xs inline-flex"
                >
                  <span>Buka Gmail</span>
                </a>
              </div>
            )}

            {status === 'error' && (
              <div
                role="alert"
                className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 text-xs space-y-2"
              >
                <p className="font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                    error
                  </span>
                  <span>Pengiriman Pesan Terkendala</span>
                </p>
                <p className="leading-relaxed">{feedbackMsg}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(`Kontak Portofolio: ${form.name || 'Pengunjung'}`)}&body=${encodeURIComponent(form.message || '')}`}
                    className="exec-btn-secondary !py-1.5 !px-3 !text-xs"
                  >
                    <span>Kirim via Aplikasi Email</span>
                  </a>
                  <a
                    href={`https://wa.me/6285238208849?text=${encodeURIComponent(`Halo Elga, saya ${form.name || ''}. ${form.message || ''}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exec-btn-primary !py-1.5 !px-3 !text-xs"
                  >
                    <span>Hubungi via WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
