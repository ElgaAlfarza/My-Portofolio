import { NextResponse } from 'next/server'

const SCOPE_LABELS = {
  operations: 'Full-Time IT Operations & AI Specialist',
  simbank: 'Server Simbank Infrastructure Management',
  ml: 'Machine Learning & CNN Systems Advisory',
  qc: 'Hardware & Software Quality Control Audit',
  other: 'General Inquiries / Professional Collaboration',
}

const DESTINATION_EMAIL = 'elgaalfarezabumigora@gmail.com'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, scope, message } = body

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Nama, email, dan pesan wajib diisi.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Format alamat email tidak valid.' },
        { status: 400 }
      )
    }

    const scopeLabel = SCOPE_LABELS[scope] || scope || 'Umum'

    // Kirim payload ke FormSubmit endpoint untuk dikirimkan langsung ke Gmail Elga Alfareza
    const payload = {
      name: name.trim(),
      email: email.trim(),
      _replyto: email.trim(),
      _subject: `[Portofolio Elga] Pesan Baru dari ${name.trim()} (${scopeLabel})`,
      _template: 'table',
      _captcha: 'false',
      'Bidang Kolaborasi (Scope)': scopeLabel,
      'Nama Pengirim': name.trim(),
      'Email Pengirim': email.trim(),
      'Isi Pesan': message.trim(),
      _autoresponse: `Halo ${name.trim()},\n\nTerima kasih telah menghubungi saya melalui portofolio. Pesan Anda mengenai "${scopeLabel}" telah saya terima di Gmail saya. Saya akan segera menghubungi Anda kembali.\n\nSalam hormat,\nElga Alfareza, S.Kom.\nIT Operations & AI Specialist`,
    }

    const response = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'https://my-portofolio-blond-gamma.vercel.app',
        Referer: 'https://my-portofolio-blond-gamma.vercel.app/',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json().catch(() => ({}))

    // FormSubmit returns 200 or 400 depending on activation state
    const responseMsg = (data && data.message) ? String(data.message) : ''

    // Cek apakah form membutuhkan aktivasi 1x dari pemilik email
    if (
      responseMsg.toLowerCase().includes('needs activation') ||
      responseMsg.toLowerCase().includes('activate form')
    ) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message:
          'Pesan tercatat! Karena ini adalah pengiriman pertama kali, FormSubmit telah mengirimkan email aktivasi ke elgaalfarezabumigora@gmail.com. Silakan buka Gmail Anda (cek Inbox atau Spam) dan klik tombol "Activate Form" (hanya perlu 1x).',
      })
    }

    if (data.success === 'true' || data.success === true || response.ok) {
      return NextResponse.json({
        success: true,
        needsActivation: false,
        message:
          'Pesan berhasil terkirim langsung ke Gmail elgaalfarezabumigora@gmail.com! Saya akan segera merespons ke email Anda.',
      })
    }

    // Jika terjadi kendala lain dari FormSubmit
    return NextResponse.json(
      {
        success: false,
        message:
          data.message ||
          'Terjadi kendala saat meneruskan ke Gmail. Silakan hubungi langsung via WhatsApp atau Email.',
      },
      { status: 500 }
    )
  } catch (error) {
    console.error('Error in /api/contact:', error)
    return NextResponse.json(
      {
        success: false,
        message:
          'Terjadi kesalahan koneksi server. Silakan hubungi langsung via WhatsApp atau tombol Email di bawah.',
      },
      { status: 500 }
    )
  }
}
