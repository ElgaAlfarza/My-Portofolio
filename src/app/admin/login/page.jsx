'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/admin/upload'

  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!password.trim()) {
      setError('Masukkan password admin.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Password salah.')
      }

      // Successfully authenticated
      router.push(from)
      router.refresh()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="password" className="block text-xs font-medium text-white/60 mb-1.5">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••••••"
          required
          autoFocus
          className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-white/20 transition-all outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-sm py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Memverifikasi...' : 'Masuk ke Dashboard'}
      </button>
    </form>
  )
}

export default function AdminLoginPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      {/* Decorative ambient glow */}
      <div
        className="glow-dot w-[450px] h-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-sm">
        <div className="card-glass p-7 sm:p-8 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 text-accent mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">Admin Login</h1>
            <p className="text-xs text-white/45 mt-1">Masukkan password untuk mengelola galeri portfolio</p>
          </div>

          <Suspense
            fallback={
              <div className="py-8 text-center text-xs text-white/40">
                Memuat form login...
              </div>
            }
          >
            <LoginForm />
          </Suspense>

          <div className="mt-6 pt-4 border-t border-white/[0.06] text-center">
            <Link href="/" className="text-xs text-white/40 hover:text-white transition-colors">
              ← Kembali ke Website Utama
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
