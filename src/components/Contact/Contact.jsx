'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    scope: 'operations',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | activation | error
  const [feedbackMsg, setFeedbackMsg] = useState('')

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
      // 1. Coba kirim langsung dari browser client ke FormSubmit endpoint
      const directRes = await fetch('https://formsubmit.co/ajax/elgaalfarezabumigora@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const directData = await directRes.json().catch(() => ({}))
      const msg = (directData && directData.message) ? String(directData.message) : ''

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
        return
      }

      // 2. Jika direct request terkendala, fallback ke server proxy /api/contact
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
        }
      } else {
        setStatus('error')
        setFeedbackMsg(serverData.message || 'Gagal mengirim pesan. Silakan hubungi langsung via WhatsApp atau Email manual di bawah.')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setFeedbackMsg('Koneksi terputus. Silakan hubungi langsung via WhatsApp atau tombol Email di bawah.')
    }
  }

  return (
    <section className="w-full pt-space-xl pb-space-xl mb-space-lg" id="contact">
      {/* Header Tag */}
      <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase mb-2">
        <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
          SECTION 06
        </span>
        <span>// INITIATE DISPATCH &amp; COLLABORATION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* Left: Contact Narrative & Coordinates */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-on-surface tracking-tight mb-space-sm leading-snug">
            Let&apos;s build something exceptional together.
          </h2>

          <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
            Apakah Anda membutuhkan spesialis IT Operations untuk mengelola infrastruktur berdaya tahan tinggi, perancangan model AI/Machine Learning, atau quality control sistem, pintu kolaborasi saya selalu terbuka.
          </p>

          {/* Direct Info Cards */}
          <div className="flex flex-col gap-space-sm mb-space-lg font-label-mono text-xs sm:text-label-sm">
            <div className="p-3 sm:p-space-sm rounded-xl bg-surface-container-low flex items-center gap-3 border border-white/[0.06]">
              <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </div>
              <div className="min-w-0">
                <p className="text-outline text-[10px] sm:text-[11px]">DIRECT DISPATCH</p>
                <a
                  className="text-on-surface hover:text-primary transition-colors font-semibold truncate block text-xs sm:text-sm"
                  href="mailto:elgaalfarezabumigora@gmail.com"
                >
                  elgaalfarezabumigora@gmail.com
                </a>
              </div>
            </div>

            <div className="p-3 sm:p-space-sm rounded-xl bg-surface-container-low flex items-center gap-3 border border-white/[0.06]">
              <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[20px]">pin_drop</span>
              </div>
              <div>
                <p className="text-outline text-[10px] sm:text-[11px]">GEOGRAPHIC LOCATION</p>
                <p className="text-on-surface font-semibold text-xs sm:text-sm">
                  Mataram, Nusa Tenggara Barat • UTC+8 (WITA)
                </p>
              </div>
            </div>
          </div>

          {/* Social Network Anchors */}
          <div className="flex flex-wrap items-center gap-2 mb-6 lg:mb-0">
            <a
              className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-label-mono text-xs sm:text-label-sm text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.06]"
              href="https://github.com/ElgaAlfarza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>GitHub</span>
            </a>
            <a
              className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-label-mono text-xs sm:text-label-sm text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.06]"
              href="https://linkedin.com/in/elga-alfareza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">badge</span>
              <span>LinkedIn</span>
            </a>
            <a
              className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-label-mono text-xs sm:text-label-sm text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.06]"
              href="https://wa.me/6285238208849"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">sensors</span>
              <span>WhatsApp</span>
            </a>
            <a
              className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-label-mono text-xs sm:text-label-sm text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.06]"
              href="mailto:elgaalfarezabumigora@gmail.com"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right: Clean Dark Input Form */}
        <div className="lg:col-span-7 p-4 sm:p-space-lg rounded-2xl bg-surface-container-low shadow-2xl border border-white/[0.08] w-full">
          <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-space-md">
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-mono text-xs sm:text-label-sm text-on-surface-variant uppercase tracking-wider"
                  htmlFor="name"
                >
                  Full Name *
                </label>
                <input
                  className="px-space-md py-2.5 sm:py-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-white/[0.06]"
                  id="name"
                  placeholder="e.g. Budi Pratama / Recruiter"
                  required
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-mono text-label-sm text-on-surface-variant uppercase tracking-wider"
                  htmlFor="email"
                >
                  Work Email *
                </label>
                <input
                  className="px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-white/[0.06]"
                  id="email"
                  placeholder="e.g. recruiter@company.com"
                  required
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-mono text-label-sm text-on-surface-variant uppercase tracking-wider"
                htmlFor="scope"
              >
                Engagement Scope
              </label>
              <select
                className="px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-white/[0.06]"
                id="scope"
                value={form.scope}
                onChange={handleChange}
              >
                <option value="operations">Full-Time IT Operations &amp; AI Specialist</option>
                <option value="simbank">Server Simbank Infrastructure Management</option>
                <option value="ml">Machine Learning &amp; CNN Systems Advisory</option>
                <option value="qc">Hardware &amp; Software Quality Control Audit</option>
                <option value="other">General Inquiries / Professional Collaboration</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-mono text-label-sm text-on-surface-variant uppercase tracking-wider"
                htmlFor="message"
              >
                Transmission Details *
              </label>
              <textarea
                className="px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-white/[0.06] resize-none"
                id="message"
                placeholder="Detail the scope, infrastructure stack, and target project window..."
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-space-xs">
              <div className="flex items-center gap-2 font-label-mono text-[11px] text-outline">
                <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                <span>256-BIT TLS ENCRYPTED TRANSMISSION</span>
              </div>

              <button
                className="inline-flex items-center justify-center gap-2 px-space-xl py-3 rounded-full bg-primary-container text-on-primary-container font-headline-sm text-body-md font-semibold hover:bg-primary hover:text-on-primary transition-all shadow-lg active:scale-95 disabled:opacity-50"
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
                  className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-label-mono text-xs sm:text-label-sm flex flex-col gap-2 shadow-lg"
                >
                  <div className="flex items-center gap-2 font-bold text-emerald-400">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    <span>PESAN BERHASIL TERKIRIM // GMAIL DISPATCH SUCCESS</span>
                  </div>
                  <p className="text-emerald-200/90 leading-relaxed font-body-sm text-xs sm:text-body-sm">
                    {feedbackMsg || 'Pesan Anda berhasil dikirim ke elgaalfarezabumigora@gmail.com! Terima kasih telah menghubungi saya, saya akan segera membalas email Anda.'}
                  </p>
                </motion.div>
              )}

              {status === 'activation' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-amber-950/70 border border-amber-500/50 text-amber-200 font-label-mono text-xs sm:text-label-sm flex flex-col gap-2.5 shadow-xl"
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
                  className="p-4 rounded-xl bg-rose-950/70 border border-rose-500/40 text-rose-300 font-label-mono text-xs sm:text-label-sm flex flex-col gap-2.5 shadow-lg"
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
                      href={`mailto:elgaalfarezabumigora@gmail.com?subject=Inquiry via Portfolio: ${encodeURIComponent(form.name || 'Pengunjung')}&body=${encodeURIComponent(form.message || '')}`}
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
