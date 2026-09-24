'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE_MB = 5
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024

export default function AdminUploadPage() {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [statusMessage, setStatusMessage] = useState(null) // { type: 'success' | 'error', text, details?: [] }
  const fileInputRef = useRef(null)

  const validateAndAddFiles = (filesList) => {
    setStatusMessage(null)
    const valid = []
    const rejected = []

    Array.from(filesList).forEach((file) => {
      if (!ALLOWED_TYPES.includes(file.type)) {
        rejected.push(`"${file.name}": Format tidak didukung. Harus JPG, PNG, atau WebP.`)
        return
      }
      if (file.size > MAX_SIZE_BYTES) {
        rejected.push(`"${file.name}": Ukuran (${(file.size / 1024 / 1024).toFixed(1)}MB) melebihi batas 5MB.`)
        return
      }

      // Create preview object URL
      const previewUrl = URL.createObjectURL(file)
      valid.push({
        file,
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2),
        previewUrl,
      })
    })

    if (rejected.length > 0) {
      setStatusMessage({
        type: 'error',
        text: 'Beberapa file ditolak:',
        details: rejected,
      })
    }

    if (valid.length > 0) {
      setSelectedFiles((prev) => [...prev, ...valid])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndAddFiles(e.dataTransfer.files)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndAddFiles(e.target.files)
    }
  }

  const removeFile = (indexToRemove) => {
    setSelectedFiles((prev) => {
      const removed = prev[indexToRemove]
      if (removed?.previewUrl) {
        URL.revokeObjectURL(removed.previewUrl)
      }
      return prev.filter((_, idx) => idx !== indexToRemove)
    })
  }

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return

    setUploading(true)
    setUploadProgress(10)
    setStatusMessage(null)

    const formData = new FormData()
    selectedFiles.forEach((item) => {
      formData.append('files', item.file)
    })

    try {
      // Use XMLHttpRequest to get upload progress
      const xhr = new XMLHttpRequest()

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 90) // cap at 90 until server responds
          setUploadProgress(percent)
        }
      })

      const responsePromise = new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            try {
              const resJson = JSON.parse(xhr.responseText || '{}')
              if (xhr.status >= 200 && xhr.status < 300) {
                resolve(resJson)
              } else {
                reject(new Error(resJson.error || `Upload gagal dengan kode status ${xhr.status}`))
              }
            } catch (err) {
              reject(new Error('Gagal memproses respons dari server.'))
            }
          }
        }
        xhr.onerror = () => reject(new Error('Terjadi kesalahan jaringan saat upload.'))
      })

      xhr.open('POST', '/api/admin/upload')
      xhr.send(formData)

      const result = await responsePromise
      setUploadProgress(100)

      setStatusMessage({
        type: 'success',
        text: `Berhasil mengupload ${result.uploaded?.length || selectedFiles.length} foto ke Cloudinary & Galeri!`,
        details: result.errors,
      })

      // Clean up object URLs
      selectedFiles.forEach((item) => URL.revokeObjectURL(item.previewUrl))
      setSelectedFiles([])
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: err.message,
      })
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Upload Foto Baru</h1>
          <p className="text-xs text-white/50 mt-1">
            Unggah foto ke cloud storage Cloudinary (maks. {MAX_SIZE_MB}MB per foto)
          </p>
        </div>
        <Link
          href="/admin/manage"
          className="btn-ghost text-xs py-2 px-3.5 gap-1.5"
        >
          Lihat Semua Foto →
        </Link>
      </div>

      {/* Status Alert */}
      {statusMessage && (
        <div
          className={`mb-6 p-4 rounded-xl border text-sm ${
            statusMessage.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              : 'bg-red-500/10 border-red-500/30 text-red-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold">{statusMessage.text}</span>
            {statusMessage.type === 'success' && (
              <Link href="/admin/manage" className="text-xs underline text-emerald-200 hover:text-white">
                Buka Kelola Galeri
              </Link>
            )}
          </div>
          {statusMessage.details && (
            <ul className="mt-2 text-xs space-y-1 text-white/70 list-disc list-inside">
              {statusMessage.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Drag & Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          card-glass rounded-2xl p-8 sm:p-12 text-center cursor-pointer border-2 border-dashed
          transition-all duration-200 flex flex-col items-center justify-center gap-3
          ${
            isDragging
              ? 'border-accent bg-accent/[0.08] scale-[1.01]'
              : 'border-white/15 hover:border-accent/50 hover:bg-white/[0.04]'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/90">
            Tarik &amp; lepas foto ke sini, atau <span className="text-accent underline">pilih dari file</span>
          </p>
          <p className="text-xs text-white/40 mt-1 font-mono">
            Mendukung JPG, PNG, WebP (maks. 5MB per file)
          </p>
        </div>
      </div>

      {/* Selected Previews Grid */}
      {selectedFiles.length > 0 && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white/80">
              File Siap Upload ({selectedFiles.length})
            </h2>
            <button
              onClick={() => {
                selectedFiles.forEach((f) => URL.revokeObjectURL(f.previewUrl))
                setSelectedFiles([])
              }}
              disabled={uploading}
              className="text-xs text-white/40 hover:text-red-400 transition-colors"
            >
              Hapus Semua
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {selectedFiles.map((item, idx) => (
              <div
                key={idx}
                className="card-glass rounded-xl overflow-hidden relative group p-2 flex flex-col gap-2"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden bg-black/40">
                  <img
                    src={item.previewUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {!uploading && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removeFile(idx)
                      }}
                      className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/70 hover:bg-red-500 text-white flex items-center justify-center text-xs transition-colors"
                      title="Hapus"
                    >
                      ×
                    </button>
                  )}
                </div>
                <div className="px-1 truncate">
                  <p className="text-xs font-medium text-white/90 truncate">{item.name}</p>
                  <p className="text-[10px] text-white/40">{item.size} MB</p>
                </div>
              </div>
            ))}
          </div>

          {/* Upload Progress Bar */}
          {uploading && (
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs text-white/60">
                <span>Mengupload ke Google Drive...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-200 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Action button */}
          <div className="pt-2">
            <button
              onClick={handleUpload}
              disabled={uploading || selectedFiles.length === 0}
              className="btn-primary w-full justify-center py-3 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="50" strokeDashoffset="15" strokeLinecap="round"/>
                  </svg>
                  Mengunggah Foto ke Drive...
                </span>
              ) : (
                `Upload ${selectedFiles.length} Foto Sekarang`
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
