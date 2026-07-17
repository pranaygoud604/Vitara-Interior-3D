import { useRef, useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { useDeviceTier } from '../hooks/useDeviceTier.js'
import { useActiveWhenVisible } from '../hooks/useActiveWhenVisible.js'

const VillaScene = lazy(() => import('../three/VillaScene.jsx'))

export default function Hero() {
  const wrapRef = useRef(null)
  const progress = useRef(0)
  const tier = useDeviceTier()
  const { ref: visRef, active } = useActiveWhenVisible('300px')

  useEffect(() => {
    const fn = () => {
      const el = wrapRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      progress.current = Math.min(1, Math.max(0, -r.top / total))
    }
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const setRefs = (el) => {
    wrapRef.current = el
    visRef.current = el
  }

  return (
    <div ref={setRefs} id="top" style={{ height: '320vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <Suspense fallback={<div style={{ position: 'absolute', inset: 0, background: 'var(--ink)' }} />}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <VillaScene progress={progress} tier={tier} active={active} />
          </div>
        </Suspense>

        {/* letterbox bars */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '7vh', background: 'var(--ink)', zIndex: 5 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '7vh', background: 'var(--ink)', zIndex: 5 }} />

        {/* title overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 6, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', textAlign: 'center', padding: '0 5vw',
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,9,8,.55) 100%)',
        }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            Luxury Interior Design Studio
          </motion.p>
          <div style={{ overflow: 'hidden', margin: '1.4rem 0' }}>
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 2.5, duration: 1.3, ease: [0.2, 0.7, 0.2, 1] }}
              style={{
                fontFamily: 'var(--serif)', fontWeight: 300,
                fontSize: 'clamp(3rem,9.5vw,8rem)', letterSpacing: '.26em', textIndent: '.26em',
                lineHeight: 1.05, color: 'var(--ivory)',
              }}
            >
              VITARA
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.p
              initial={{ y: '120%' }}
              animate={{ y: 0 }}
              transition={{ delay: 2.75, duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
              style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic',
                fontSize: 'clamp(1rem,2.4vw,1.7rem)', letterSpacing: '.5em', textIndent: '.5em',
                color: 'var(--gold)',
              }}
            >
              Design Beyond Imagination
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 1 }}
            style={{
              position: 'absolute', bottom: '11vh', display: 'flex',
              flexDirection: 'column', alignItems: 'center', gap: '.7rem',
            }}
          >
            <small style={{ fontSize: '.6rem', letterSpacing: '.4em', textTransform: 'uppercase', color: 'var(--mist)' }}>
              Scroll to walk inside
            </small>
            <div style={{ width: 1, height: 52, background: 'linear-gradient(var(--gold), transparent)' }} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
