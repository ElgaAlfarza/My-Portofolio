import '../index.css'

export const metadata = {
  title: 'Elga Alfareza, S.Kom. | Full Stack, AI & IT Operations Specialist',
  description:
    'Portofolio Profesional Elga Alfareza, S.Kom. — Full Stack Developer (Vibe Coding), Python Machine Learning (SINTA 4), & IT Operations Specialist lulusan Universitas Bumigora (IPK 3.76).',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#08090d] text-on-surface font-body-md text-body-md min-h-screen relative selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden antialiased">
        {/* Deep Space Editorial Ambient Lighting & Architectural Blueprint Grid */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-cosmic-grid opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-15%,rgba(44,103,237,0.18),rgba(8,9,13,0))]" />
          <div className="absolute top-[28%] -right-48 w-[34rem] h-[34rem] rounded-full bg-indigo-600/[0.07] blur-[130px]" />
          <div className="absolute bottom-[-10%] -left-36 w-[32rem] h-[32rem] rounded-full bg-cyan-500/[0.07] blur-[120px]" />
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
