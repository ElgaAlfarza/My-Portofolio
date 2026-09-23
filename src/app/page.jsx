import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import AboutMe from '@/components/AboutMe/AboutMe'
import Portfolio from '@/components/Portfolio/Portfolio'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
