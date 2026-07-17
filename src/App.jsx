import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import RoomExplorer from './components/RoomExplorer.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

function Manifesto() {
  return (
    <section style={{ padding: '16vh 0', textAlign: 'center' }}>
      <div className="wrap">
        <p className="eyebrow">The Studio</p>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 300,
          fontSize: 'clamp(1.9rem,4.4vw,3.6rem)', lineHeight: 1.4, margin: '1.6rem auto 0', maxWidth: '22ch',
        }}>
          We design spaces the way films are directed — <em style={{ color: 'var(--gold)' }}>light first, story always.</em>
        </h2>
      </div>
    </section>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)

    let rafId
    let paused = false
    const raf = (t) => {
      if (!paused) lenis.raf(t)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onVis = () => {
      paused = document.hidden
      if (!paused) lenis.start()
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', onVis)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main style={{ opacity: ready ? 1 : 0, transition: 'opacity .8s ease' }}>
        <Hero />
        <Manifesto />
        <RoomExplorer />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
