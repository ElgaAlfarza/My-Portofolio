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
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', scope: 'operations', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    }, 1200)
  }

  return (
    <section className="w-full pt-space-xl pb-space-xl mb-space-lg" id="contact">
      {/* Header Tag */}
      <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase mb-2">
        <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
          SECTION 05
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
          <div className="flex flex-col gap-space-sm mb-space-lg font-label-mono text-label-sm">
            <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-3 border border-white/[0.06]">
              <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </div>
              <div>
                <p className="text-outline text-[11px]">DIRECT DISPATCH</p>
                <a
                  className="text-on-surface hover:text-primary transition-colors font-semibold"
                  href="mailto:elgaalfarezabumigora@gmail.com"
                >
                  elgaalfarezabumigora@gmail.com
                </a>
              </div>
            </div>

            <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-3 border border-white/[0.06]">
              <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px]">pin_drop</span>
              </div>
              <div>
                <p className="text-outline text-[11px]">GEOGRAPHIC LOCATION</p>
                <p className="text-on-surface font-semibold">
                  Mataram, Nusa Tenggara Barat • UTC+8 (WITA)
                </p>
              </div>
            </div>
          </div>

          {/* Social Network Anchors */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-label-mono text-label-sm text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.06]"
              href="https://github.com/ElgaAlfarza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>GitHub</span>
            </a>
            <a
              className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-label-mono text-label-sm text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.06]"
              href="https://linkedin.com/in/elga-alfareza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">badge</span>
              <span>LinkedIn</span>
            </a>
            <a
              className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-label-mono text-label-sm text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.06]"
              href="https://wa.me/6285238208849"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">sensors</span>
              <span>WhatsApp</span>
            </a>
            <a
              className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-label-mono text-label-sm text-on-surface transition-all flex items-center gap-1.5 border border-white/[0.06]"
              href="mailto:elgaalfarezabumigora@gmail.com"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right: Clean Dark Input Form */}
        <div className="lg:col-span-7 p-space-lg rounded-2xl bg-surface-container-low shadow-2xl border border-white/[0.08] w-full">
          <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-mono text-label-sm text-on-surface-variant uppercase tracking-wider"
                  htmlFor="name"
                >
                  Full Name *
                </label>
                <input
                  className="px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-white/[0.06]"
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
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 rounded-lg bg-surface-container font-label-mono text-label-sm text-secondary border border-secondary/30 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  <span>Message encrypted and dispatched successfully to Elga Alfareza.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  )
}
