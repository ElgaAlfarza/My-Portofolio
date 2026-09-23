import { NextResponse } from 'next/server'
import { getIronSession } from 'iron-session'
import { sessionOptions } from '@/lib/session'

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Allow public access to the login page and login API
  if (
    pathname === '/admin/login' ||
    pathname === '/api/admin/auth/login' ||
    pathname === '/api/admin/auth/logout'
  ) {
    return NextResponse.next()
  }

  const response = NextResponse.next()
  let isLoggedIn = false

  try {
    const session = await getIronSession(request, response, sessionOptions)
    isLoggedIn = Boolean(session?.isLoggedIn)
  } catch (err) {
    console.warn('Middleware session check warning:', err.message)
    isLoggedIn = false
  }

  // Protect /api/admin/* API routes
  if (pathname.startsWith('/api/admin')) {
    if (!isLoggedIn) {
      return NextResponse.json(
        { error: 'Unauthorized: Akses ditolak. Silakan login sebagai admin.' },
        { status: 401 }
      )
    }
    return response
  }

  // Protect /admin/* UI page routes
  if (pathname.startsWith('/admin')) {
    if (!isLoggedIn) {
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
    return response
  }

  return response
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
