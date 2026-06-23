import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Grain from './components/Grain'
import Preloader from './components/Preloader'
import MouseGlow from './components/MouseGlow'

export default function App() {
  return (
    <div className="min-h-screen">
      <Preloader />
      <MouseGlow />
      <Grain />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
