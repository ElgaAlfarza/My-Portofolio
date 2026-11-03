import '../index.css'

export const metadata = {
  title: 'Elga Alfareza, S.Kom. — Full Stack, AI & IT Operations Specialist',
  description:
    'Portofolio Profesional Elga Alfareza, S.Kom. — Lulusan S1 Ilmu Komputer Universitas Bumigora (IPK 3.76). Berpengalaman dalam Full Stack Development, Machine Learning (CNN / SINTA 4), Server Simbank, dan Quality Control (K3).',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Kalam:wght@400;700&family=Lilita+One&family=Plus+Jakarta+Sans:wght@600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas text-ink min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
