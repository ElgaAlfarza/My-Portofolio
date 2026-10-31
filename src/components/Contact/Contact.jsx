'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
      // Fallback ignored if clipboard blocked
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
          'FormSubmit telah mengirimkan email aktivasi ke elgaalfarezabumigora@gmail.com. Silakan buka Gmail Anda (cek Inbox atau folder Spam) dan klik tombol "Activate Form" 1x. Setelah diaktifkan 1x, seluruh pesan akan langsung masuk otomatis ke Inbox Gmail Anda.'
        )
        return
      }

      if (directData.success === 'true' || directData.success === true || directRes.ok) {
        setStatus('success')
        setFeedbackMsg(
          'Pesan berhasil terkirim langsung ke Gmail elgaalfarezabumigora@gmail.com! Terima kasih telah menghubungi saya, saya akan segera merespons email Anda.'
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
            'Gagal mengirim pesan. Silakan hubungi langsung via WhatsApp atau Email manual di bawah.'
        )
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setFeedbackMsg(
        'Koneksi terputus. Silakan hubungi langsung via WhatsApp atau tombol Email di bawah.'
      )
    }
  }

  return (
    <section className="w-full py-14 sm:py-20" id="contact">
      {/* Header Tag */}
      <div className="flex items-center gap-2.5 font-label-mono text-label-mono text-secondary uppercase mb-3">
        <span className="section-badge">SECTION 07</span>
        <span>// INITIATE DISPATCH &amp; COLLABORATION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left (5 cols): Contact Narrative & Direct Coordinates */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="heading-balance font-headline-lg text-headline-lg font-bold text-white tracking-tight mb-3">
            Let&apos;s build something exceptional together.
          </h2>

          <p className="prose-pretty font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-6">
            Apakah Anda membutuhkan spesialis Full Stack (Vibe Coding), perancang model AI/Machine Learning berbasis Python, atau praktisi IT Operations Server Simbank &amp; Quality Control berstandar K3, pintu kolaborasi saya selalu terbuka.
          </p>

          {/* Direct Coordinate Cards */}
          <div className="flex flex-col gap-3 mb-6 font-label-mono text-xs">
            <div className="card-glass p-3.5 sm:p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                </div>
                <div className="min-w-0">
                  <p className="text-outline text-[10px]">DIRECT DISPATCH</p>
                  <a
                    className="text-white hover:text-secondary transition-colors font-semibold truncate block text-xs sm:text-sm"
                    href={`mailto:${EMAIL_ADDRESS}`}
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-primary-container hover:text-white text-on-surface-variant border border-white/[0.08] transition-all shrink-0 flex items-center gap-1 text-[10.5px]"
                title="Salin alamat email"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copiedEmail ? 'check' : 'content_copy'}
                </span>
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="card-glass p-3.5 sm:p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[20px]">pin_drop</span>
              </div>
              <div>
                <p className="text-outline text-[10px]">GEOGRAPHIC LOCATION &amp; SLA</p>
                <p className="text-white font-semibold text-xs sm:text-sm">
                  Mataram, NTB • UTC+8 (WITA)
                </p>
                <p className="text-emerald-400 text-[10.5px] mt-0.5">
                  ● AVG RESPONSE &lt; 12 HOURS
                </p>
              </div>
            </div>
          </div>

          {/* Social Anchors */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              className="px-3.5 py-2 rounded-xl bg-[#111522] hover:bg-primary-container hover:text-white font-label-mono text-xs text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.08]"
              href="https://github.com/ElgaAlfarza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>GitHub</span>
            </a>
            <a
              className="px-3.5 py-2 rounded-xl bg-[#111522] hover:bg-primary-container hover:text-white font-label-mono text-xs text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.08]"
              href="https://linkedin.com/in/elga-alfareza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">badge</span>
              <span>LinkedIn</span>
            </a>
            <a
              className="px-3.5 py-2 rounded-xl bg-emerald-950/50 hover:bg-emerald-600 text-emerald-300 hover:text-white font-label-mono text-xs transition-all flex items-center gap-1.5 border border-emerald-500/30"
              href="https://wa.me/6285238208849"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">sensors</span>
              <span>WhatsApp Fast</span>
            </a>
            <a
              className="px-3.5 py-2 rounded-xl bg-[#111522] hover:bg-primary-container hover:text-white font-label-mono text-xs text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.08]"
              href={`mailto:${EMAIL_ADDRESS}`}
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right (7 cols): High-Craft Dispatch Form */}
        <div className="lg:col-span-7 card-glass p-5 sm:p-7 w-full">
          <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="flex flex-col">
                <label
                  className="font-label-mono text-xs text-white uppercase tracking-wider mb-1"
                  htmlFor="name"
                >
                  Full Name *
                </label>
                <span id="name-hint" className="font-body-sm text-[11px] text-outline mb-1.5">
                  Nama lengkap atau instansi Anda
                </span>
                <input
                  className="field-input px-4 py-2.5 rounded-xl bg-[#080a11] text-white placeholder:text-outline/70 font-body-sm focus:outline-none focus:border-primary border border-white/[0.1]"
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="e.g. Budi Pratama / HR Tech"
                  required
                  minLength={2}
                  type="text"
                  aria-describedby="name-hint"
                  aria-errormessage="name-error"
                  value={form.name}
                  onChange={handleChange}
                />
                <div id="name-error" className="field-error-msg">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    error
                  </span>
                  <span>Mohon isi nama lengkap (minimal 2 karakter).</span>
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  className="font-label-mono text-xs text-white uppercase tracking-wider mb-1"
                  htmlFor="email"
                >
                  Work Email *
                </label>
                <span id="email-hint" className="font-body-sm text-[11px] text-outline mb-1.5">
                  Format: nama@perusahaan.com
                </span>
                <input
                  className="field-input px-4 py-2.5 rounded-xl bg-[#080a11] text-white placeholder:text-outline/70 font-body-sm focus:outline-none focus:border-primary border border-white/[0.1]"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="recruiter@company.com"
                  required
                  type="email"
                  aria-describedby="email-hint"
                  aria-errormessage="email-error"
                  value={form.email}
                  onChange={handleChange}
                />
                <div id="email-error" className="field-error-msg">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    error
                  </span>
                  <span>Masukkan alamat email yang valid.</span>
                </div>
              </div>
            </div>

            {/* Scope Select */}
            <div className="flex flex-col">
              <label
                className="font-label-mono text-xs text-white uppercase tracking-wider mb-1.5"
                htmlFor="scope"
              >
                Engagement Scope
              </label>
              <select
                className="field-input px-4 py-2.5 rounded-xl bg-[#080a11] text-white font-body-sm focus:outline-none focus:border-primary border border-white/[0.1]"
                id="scope"
                name="scope"
                value={form.scope}
                onChange={handleChange}
              >
                <option value="operations">Full-Time Full Stack, IT Operations &amp; AI Specialist</option>
                <option value="fullstack">Full Stack Web Development (Vibe Coding)</option>
                <option value="simbank">Server Simbank Infrastructure Management</option>
                <option value="ml">Machine Learning &amp; CNN Systems Advisory</option>
                <option value="qc">Hardware &amp; Software Quality Control Audit</option>
                <option value="other">General Inquiries / Professional Collaboration</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col">
              <label
                className="font-label-mono text-xs text-white uppercase tracking-wider mb-1"
                htmlFor="message"
              >
                Transmission Details *
              </label>
              <span id="message-hint" className="font-body-sm text-[11px] text-outline mb-1.5">
                Jelaskan kebutuhan posisi, ruang lingkup proyek, atau jadwal diskusi
              </span>
              <textarea
                className="field-input px-4 py-2.5 rounded-xl bg-[#080a11] text-white placeholder:text-outline/70 font-body-sm focus:outline-none focus:border-primary border border-white/[0.1]"
                id="message"
                name="message"
                placeholder="Halo Elga, kami tertarik mendiskusikan peluang kolaborasi / rekrutmen untuk..."
                required
                minLength={10}
                rows={4}
                aria-describedby="message-hint"
                aria-errormessage="message-error"
                value={form.message}
                onChange={handleChange}
              />
              <div id="message-error" className="field-error-msg">
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                  error
                </span>
                <span>Mohon tuliskan detail pesan minimal 10 karakter.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div className="flex items-center gap-2 font-label-mono text-[11px] text-outline">
                <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                <span>256-BIT TLS ENCRYPTED TRANSMISSION</span>
              </div>

              <button
                className="btn-primary active:scale-95"
                type="submit"
                disabled={status === 'sending'}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {status === 'sending' ? 'hourglass_top' : 'send'}
                </span>
                <span>{status === 'sending' ? 'Transmitting...' : 'Send Message'}</span>
              </button>
            </div>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-label-mono text-xs flex flex-col gap-2 shadow-lg"
                >
                  <div className="flex items-center gap-2 font-bold text-emerald-400">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    <span>PESAN BERHASIL TERKIRIM // GMAIL DISPATCH SUCCESS</span>
                  </div>
                  <p className="text-emerald-200/90 leading-relaxed font-body-sm text-xs sm:text-body-sm">
                    {feedbackMsg}
                  </p>
                </motion.div>
              )}

              {status === 'activation' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-amber-950/70 border border-amber-500/50 text-amber-200 font-label-mono text-xs flex flex-col gap-2.5 shadow-xl"
                >
                  <div className="flex items-center gap-2 font-bold text-amber-400">
                    <span className="material-symbols-outlined text-[22px]">mark_email_unread</span>
                    <span>AKTIVASI DIBUTUHKAN (CUKUP 1X SEUMUR HIDUP)</span>
                  </div>
                  <p className="text-amber-100/95 leading-relaxed font-body-sm text-xs sm:text-body-sm">
                    {feedbackMsg}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <a
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 transition-all shadow"
                    >
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      <span>Buka Gmail Sekarang</span>
                    </a>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-rose-950/70 border border-rose-500/40 text-rose-300 font-label-mono text-xs flex flex-col gap-2.5 shadow-lg"
                >
                  <div className="flex items-center gap-2 font-bold text-rose-400">
                    <span className="material-symbols-outlined text-[20px]">error</span>
                    <span>PENGIRIMAN TERKENDALA</span>
                  </div>
                  <p className="text-rose-200/90 leading-relaxed font-body-sm text-xs sm:text-body-sm">
                    {feedbackMsg}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <a
                      href={`mailto:${EMAIL_ADDRESS}?subject=Inquiry via Portfolio: ${encodeURIComponent(form.name || 'Pengunjung')}&body=${encodeURIComponent(form.message || '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface text-xs transition-colors border border-white/[0.08]"
                    >
                      <span className="material-symbols-outlined text-[16px]">mail</span>
                      <span>Kirim Manual via Email</span>
                    </a>
                    <a
                      href={`https://wa.me/6285238208849?text=${encodeURIComponent(`Halo Mas Elga, saya ${form.name || ''}. ${form.message || ''}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">sensors</span>
                      <span>Chat WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  )
}
