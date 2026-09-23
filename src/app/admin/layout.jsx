'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function AdminLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  const isLoginPage = pathname === '/admin/login'

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' })
      router.push('/admin/login')
      router.refresh()
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      setLoggingOut(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg text-white flex flex-col">
      {/* Admin Top Header (hidden on login page) */}
      {!isLoginPage && (
        <header className="border-b border-white/[0.08] bg-bg-elevated/80 backdrop-blur-md sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/admin/upload" className="font-bold text-sm tracking-tight text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                Portfolio <span className="text-gradient">Admin</span>
              </Link>
              <nav className="flex items-center gap-1 sm:gap-2">
                <Link
                  href="/admin/upload"
                  className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                    pathname === '/admin/upload'
                      ? 'bg-accent/15 text-accent font-semibold border border-accent/30'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  Upload Foto
                </Link>
                <Link
                  href="/admin/manage"
                  className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                    pathname === '/admin/manage'
                      ? 'bg-accent/15 text-accent font-semibold border border-accent/30'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  Kelola Galeri
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                target="_blank"
                className="text-xs text-white/50 hover:text-white transition-colors hidden sm:inline-block"
              >
                Lihat Website ↗
              </Link>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white/70 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition-colors disabled:opacity-50"
              >
                {loggingOut ? 'Keluar...' : 'Logout'}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  )
}
