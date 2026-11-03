import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import AboutMe from '@/components/AboutMe/AboutMe'
import Experience from '@/components/Experience/Experience'
import Skills3D from '@/components/Skills3D/Skills3D'
import Portfolio from '@/components/Portfolio/Portfolio'
import Credentials3D from '@/components/Credentials3D/Credentials3D'
import CraftGallery from '@/components/CraftGallery/CraftGallery'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function HomePage() {
  return (
    <div className="relative">
      <div className="ambient-backdrop" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
        <Hero />
        <AboutMe />
        <Experience />
        <Skills3D />
        <Portfolio />
        <Credentials3D />
        <CraftGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
