import Navbar   from './components/Navbar/Navbar'
import Hero      from './components/Hero/Hero'
import AboutMe   from './components/AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio'
import Contact   from './components/Contact/Contact'
import Footer    from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />

      {/*
        pt-24 on Hero so the floating pill (top-6 + ~40px height) doesn't
        overlap the hero headline on small screens.
      */}
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
