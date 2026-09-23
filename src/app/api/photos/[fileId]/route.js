import { NextResponse } from 'next/server'
import { getImageStream } from '@/lib/cloudinary'

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  // fileId is the Cloudinary public_id (may contain slashes, e.g. portfolio-gallery/filename_123)
  const rawId = params.fileId
  // Next.js catches only the first segment; reconstruct the full public_id from searchParams if needed
  const { searchParams } = new URL(request.url)
  const fileId = searchParams.get('pid') || rawId

  if (!fileId) {
    return NextResponse.json({ error: 'File ID is required' }, { status: 400 })
  }

  try {
    const { url, mimeType, name, size } = await getImageStream(fileId)

    const headers = new Headers()
    headers.set('Content-Type', mimeType)
    // Cache heavily on CDN (7 days) since Cloudinary images are immutable by public_id
    headers.set('Cache-Control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400')
    if (size) headers.set('Content-Length', size.toString())
    headers.set('Content-Disposition', `inline; filename="${encodeURIComponent(name)}"`)

    // Redirect to Cloudinary CDN URL directly — fast & free
    return NextResponse.redirect(url, { headers })
  } catch (error) {
    console.error(`API /api/photos/${fileId} error:`, error.message)

    return NextResponse.json(
      { error: error.message || 'Image not found or inaccessible.' },
      {
        status: error.message.includes('404') ? 404 : 502,
        headers: { 'Cache-Control': 'no-store' },
      }
    )
  }
}
