import '../index.css'

export const metadata = {
  title: 'Elga Alfareza, S.Kom. | IT Operations & AI Specialist',
  description: 'Portofolio Profesional Elga Alfareza, S.Kom. - IT Operations & AI Specialist lulusan Universitas Bumigora.',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-container-lowest text-on-surface font-body-md text-body-md min-h-screen relative selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
        {/* Cosmic void ambient lighting gradients */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(44,103,237,0.14),rgba(13,14,18,0))]" />
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,166,224,0.06),transparent_45%)]" />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
