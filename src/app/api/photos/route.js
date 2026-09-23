import { NextResponse } from 'next/server'
import { listImages } from '@/lib/cloudinary'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const files = await listImages()

    // Transform into clean frontend format — use Cloudinary CDN URL directly
    const photos = files.map((file) => ({
      id: file.id,
      url: file.url,           // direct Cloudinary CDN URL (fast!)
      alt: file.name.replace(/\.[^/.]+$/, ''),
      name: file.name,
      mimeType: file.mimeType,
      createdTime: file.createdTime,
    }))

    return NextResponse.json(photos, {
      status: 200,
      headers: {
        // Cache on Vercel CDN for 5 minutes, stale-while-revalidate for 10 minutes
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('API /api/photos error:', error.message)

    return NextResponse.json(
      {
        error: error.message || 'Failed to retrieve photos from gallery.',
      },
      {
        status: error.message.includes('404') ? 404 : 502,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    )
  }
}
