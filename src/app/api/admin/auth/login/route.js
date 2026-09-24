import { NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import crypto from 'crypto'

export async function POST(request) {
  try {
    const body = await request.json()
    const { password } = body

    const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123'

    if (!password) {
      return NextResponse.json({ error: 'Password wajib diisi.' }, { status: 400 })
    }

    // Timing-safe comparison to prevent timing attacks
    const pwdBuffer = Buffer.from(password)
    const expectedBuffer = Buffer.from(expectedPassword)

    const isMatch =
      pwdBuffer.length === expectedBuffer.length &&
      crypto.timingSafeEqual(pwdBuffer, expectedBuffer)

    if (!isMatch) {
      return NextResponse.json({ error: 'Password salah. Akses ditolak.' }, { status: 401 })
    }

    // Save session in encrypted cookie
    const session = await getSession()
    session.isLoggedIn = true
    session.loginTime = Date.now()
    await session.save()

    return NextResponse.json({ success: true, message: 'Login berhasil.' })
  } catch (error) {
    console.error('Login error:', error.message)
    return NextResponse.json({ error: 'Terjadi kesalahan pada server.' }, { status: 500 })
  }
}
