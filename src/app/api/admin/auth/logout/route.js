import { NextResponse } from 'next/server'
import { getSession } from '@/lib/session'

export async function POST() {
  try {
    const session = await getSession()
    session.destroy()
    return NextResponse.json({ success: true, message: 'Logout berhasil.' })
  } catch (error) {
    console.error('Logout error:', error.message)
    return NextResponse.json({ error: 'Gagal logout.' }, { status: 500 })
  }
}
