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
    <>
      <Navbar />
      <main className="w-full max-w-5xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28">
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
    </>
  )
}
