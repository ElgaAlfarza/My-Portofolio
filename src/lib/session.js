import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'

export const sessionOptions = {
  password:
    process.env.SESSION_SECRET ||
    // Fallback for development if not provided (must be >= 32 chars)
    'portfolio_admin_secure_session_secret_min_32_chars_long_xyz',
  cookieName: 'portfolio_admin_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
  },
}

/**
 * Get the current admin session from incoming cookies.
 * @returns {Promise<import('iron-session').IronSession<{isLoggedIn?: boolean, loginTime?: number}>>}
 */
export async function getSession() {
  const cookieStore = cookies()
  const session = await getIronSession(cookieStore, sessionOptions)
  return session
}
