import { NextResponse } from 'next/server'
import { deleteImage } from '@/lib/cloudinary'
import { getSession } from '@/lib/session'

export const dynamic = 'force-dynamic'

export async function DELETE(request, { params }) {
  const session = await getSession()
  if (!session?.isLoggedIn) {
    return NextResponse.json({ error: 'Unauthorized: Akses ditolak.' }, { status: 401 })
  }

  const { fileId } = params

  if (!fileId) {
    return NextResponse.json({ error: 'File ID tidak boleh kosong.' }, { status: 400 })
  }

  try {
    await deleteImage(fileId)
    return NextResponse.json({
      success: true,
      message: `Foto dengan ID ${fileId} berhasil dihapus dari Google Drive.`,
    })
  } catch (error) {
    console.error(`API DELETE /api/admin/photos/${fileId} error:`, error.message)
    return NextResponse.json(
      { error: error.message || 'Gagal menghapus foto dari Google Drive.' },
      { status: error.message.includes('404') ? 404 : 500 }
    )
  }
}
