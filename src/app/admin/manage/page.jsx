'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AdminManagePage() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // State for delete modal
  const [deleteTarget, setDeleteTarget] = useState(null) // { id, name, url }
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState(null)

  const fetchPhotos = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/photos', { cache: 'no-store' })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Gagal memuat daftar foto dari Google Drive.')
      }

      setPhotos(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    setDeleteError(null)

    try {
      const res = await fetch(`/api/admin/photos?id=${encodeURIComponent(deleteTarget.id)}`, {
        method: 'DELETE',
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Gagal menghapus foto.')
      }

      // Optimistic/state update
      setPhotos((prev) => prev.filter((p) => p.id !== deleteTarget.id))
      setDeleteTarget(null)
    } catch (err) {
      setDeleteError(err.message)
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.06]">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Kelola Galeri Foto</h1>
          <p className="text-xs text-white/50 mt-1">
            Lihat dan hapus foto yang tersimpan di Cloudinary ({photos.length} foto)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchPhotos}
            disabled={loading}
            className="btn-ghost text-xs py-2 px-3 gap-1.5"
            title="Refresh galeri"
          >
            <svg
              className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 4 23 10 17 10"/>
              <polyline points="1 20 1 14 7 14"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            Refresh
          </button>
          <Link href="/admin/upload" className="btn-primary text-xs py-2 px-3.5 gap-1.5">
            + Upload Foto Baru
          </Link>
        </div>
      </div>

      {/* Info Banner on Roles */}
      <div className="mb-6 p-4 rounded-xl bg-accent/10 border border-accent/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/80">
        <div className="flex items-center gap-2.5">
          <span className="text-base">💡</span>
          <div>
            <span className="font-semibold text-white">Panduan Pengaturan Foto:</span>
            <p className="text-white/60 text-[11px] mt-0.5">
              Upload foto bernama <code className="text-red-300 font-mono">mask...</code> untuk Topeng Spider-Man, dan <code className="text-blue-300 font-mono">face...</code> untuk Wajah Profil. Foto lainnya otomatis masuk ke <strong>Galeri Foto</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-sm flex items-center justify-between">
          <span>{error}</span>
          <button onClick={fetchPhotos} className="underline text-xs hover:text-white">
            Coba Lagi
          </button>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="card-glass rounded-xl p-2 space-y-2">
              <div className="skeleton rounded-lg aspect-square w-full" />
              <div className="skeleton h-3 w-3/4 rounded" />
            </div>
          ))}
        </div>
      ) : photos.length === 0 ? (
        /* Empty State */
        <div className="card-glass rounded-2xl p-12 text-center my-8 flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/40">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <h2 className="text-base font-semibold text-white/90">Belum Ada Foto di Galeri</h2>
          <p className="text-xs text-white/45 max-w-sm">
            Galeri masih kosong. Mulai dengan mengunggah foto portofolio pertamamu.
          </p>
          <Link href="/admin/upload" className="btn-primary text-xs py-2 px-4 mt-2">
            Unggah Foto Pertama
          </Link>
        </div>
      ) : (
        /* Photo Grid */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {photos.map((photo) => {
            const isMask = photo.name.toLowerCase().includes('mask')
            const isFace = photo.name.toLowerCase().includes('face')

            return (
              <div
                key={photo.id}
                className="card-glass rounded-xl overflow-hidden p-2 group flex flex-col justify-between"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden bg-black/40 mb-2">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />

                  {/* Badge peruntukan foto */}
                  <div className="absolute top-2 left-2 z-10">
                    {isMask ? (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-red-500/80 text-white shadow backdrop-blur-sm">
                        🕷️ Topeng
                      </span>
                    ) : isFace ? (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-500/80 text-white shadow backdrop-blur-sm">
                        👤 Wajah Profil
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-black/60 text-white/80 border border-white/10 backdrop-blur-sm">
                        🖼️ Galeri
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setDeleteTarget(photo)}
                    className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-red-500/80 hover:bg-red-600 text-white shadow-lg transition-transform opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                    title="Hapus foto"
                    aria-label={`Hapus ${photo.name}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                  </button>
                </div>

                <div className="px-1">
                  <p className="text-xs font-medium text-white/80 truncate" title={photo.name}>
                    {photo.name}
                  </p>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-white/35">
                    <span>ID: {photo.id.split('/').pop().slice(0, 10)}...</span>
                    <a
                      href={photo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent transition-colors underline"
                    >
                      Buka ↗
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="card-glass p-6 rounded-2xl max-w-sm w-full border border-red-500/20 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <div className="p-2 rounded-xl bg-red-500/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h2 className="text-base font-bold text-white">Yakin hapus foto ini?</h2>
            </div>

            <p className="text-xs text-white/60 leading-relaxed">
              Foto <span className="font-semibold text-white">"{deleteTarget.name}"</span> akan dihapus permanen dari Cloudinary dan tidak dapat dikembalikan.
            </p>

            <div className="relative aspect-video rounded-lg overflow-hidden bg-black/50 border border-white/10">
              <img
                src={deleteTarget.url}
                alt={deleteTarget.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {deleteError && (
              <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                {deleteError}
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setDeleteTarget(null)
                  setDeleteError(null)
                }}
                disabled={deleting}
                className="btn-ghost flex-1 justify-center py-2 text-xs"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                disabled={deleting}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold text-xs transition-colors flex-1 flex items-center justify-center disabled:opacity-50"
              >
                {deleting ? 'Menghapus...' : 'Ya, Hapus'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
