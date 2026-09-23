import { NextResponse } from 'next/server'
import { deleteImage } from '@/lib/cloudinary'
import { getSession } from '@/lib/session'

export const dynamic = 'force-dynamic'

export async function DELETE(request) {
  const session = await getSession()
  if (!session?.isLoggedIn) {
    return NextResponse.json({ error: 'Unauthorized: Akses ditolak.' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    let fileId = searchParams.get('id')

    if (!fileId) {
      try {
        const body = await request.json()
        fileId = body?.id
      } catch {}
    }

    if (!fileId) {
      return NextResponse.json({ error: 'File ID tidak boleh kosong.' }, { status: 400 })
    }

    await deleteImage(fileId)
    return NextResponse.json({
      success: true,
      message: `Foto ${fileId} berhasil dihapus dari Cloudinary.`,
    })
  } catch (error) {
    console.error('API DELETE /api/admin/photos error:', error.message)
    return NextResponse.json(
      { error: error.message || 'Gagal menghapus foto dari Cloudinary.' },
      { status: error.message.includes('404') ? 404 : 500 }
    )
  }
}
