import '../index.css'

export const metadata = {
  title: 'Elga Alfareza, S.Kom. | Full Stack Developer & AI Specialist Portfolio',
  description:
    'Portofolio Profesional Elga Alfareza, S.Kom. — Lulusan S1 Ilmu Komputer Universitas Bumigora (IPK 3.76 Cum Laude). Berpengalaman dalam Full Stack Development, Machine Learning (CNN / SINTA 4), Server Simbank, dan Quality Control (K3).',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700;800&family=Kalam:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Caveat:wght@600;700&family=Lilita+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="paper-texture text-slate-800 antialiased overflow-x-hidden selection:bg-purple-300 selection:text-purple-950 font-sans">
        {children}
      </body>
    </html>
  )
}
