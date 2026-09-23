import '../index.css'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Elga Alfareza, S.Kom. | IT Operations & AI Specialist',
  description: 'Portofolio Profesional Elga Alfareza, S.Kom. - IT Operations & AI Specialist lulusan Universitas Bumigora.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-bg text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
