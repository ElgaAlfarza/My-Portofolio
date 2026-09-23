import { NextResponse } from 'next/server'
import { uploadImage } from '@/lib/cloudinary'
import { getSession } from '@/lib/session'

export const dynamic = 'force-dynamic'

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024 // 5 MB

export async function POST(request) {
  // Extra security check in route handler
  const session = await getSession()
  if (!session?.isLoggedIn) {
    return NextResponse.json({ error: 'Unauthorized: Harap login terlebih dahulu.' }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    // Supports single or multi-file upload under 'files' or 'file'
    const files = formData.getAll('files').length > 0
      ? formData.getAll('files')
      : formData.getAll('file')

    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'Tidak ada file yang dipilih untuk diupload.' }, { status: 400 })
    }

    const uploadedResults = []
    const validationErrors = []

    for (const file of files) {
      // Validate file type
      if (!ALLOWED_MIME_TYPES.includes(file.type)) {
        validationErrors.push(
          `File "${file.name}" ditolak: Hanya format JPG, PNG, atau WebP yang diperbolehkan.`
        )
        continue
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE_BYTES) {
        validationErrors.push(
          `File "${file.name}" ditolak: Ukuran (${(file.size / 1024 / 1024).toFixed(1)}MB) melebihi batas maksimal 5MB.`
        )
        continue
      }

      try {
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const result = await uploadImage(buffer, file.name, file.type)
        uploadedResults.push({
          id: result.id,
          name: result.name,
          url: `/api/photos/${result.id}`,
        })
      } catch (uploadErr) {
        console.error(`Error uploading "${file.name}":`, uploadErr.message)
        validationErrors.push(`Gagal mengupload "${file.name}": ${uploadErr.message}`)
      }
    }

    // If all files failed
    if (uploadedResults.length === 0 && validationErrors.length > 0) {
      return NextResponse.json(
        {
          error: 'Semua file gagal diupload.',
          details: validationErrors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: `Berhasil mengupload ${uploadedResults.length} foto.`,
        uploaded: uploadedResults,
        errors: validationErrors.length > 0 ? validationErrors : undefined,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('API /api/admin/upload error:', error.message)
    return NextResponse.json(
      { error: error.message || 'Terjadi kesalahan saat memproses upload.' },
      { status: 500 }
    )
  }
}
