import Navbar from '@/components/Navbar/Navbar'
import JumpNav from '@/components/JumpNav/JumpNav'
import Hero from '@/components/Hero/Hero'
import AboutMe from '@/components/AboutMe/AboutMe'
import CraftGallery from '@/components/CraftGallery/CraftGallery'
import Portfolio from '@/components/Portfolio/Portfolio'
import Credentials3D from '@/components/Credentials3D/Credentials3D'
import Experience from '@/components/Experience/Experience'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col w-full text-on-surface">
          <JumpNav />
          <Hero />
          <AboutMe />
          <CraftGallery />
          <Portfolio />
          <Credentials3D />
          <Experience />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
