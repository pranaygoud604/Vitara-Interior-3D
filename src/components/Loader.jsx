import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let v = 0
    const id = setInterval(() => {
      v = Math.min(100, v + Math.random() * 9 + 3)
      setPct(Math.floor(v))
      if (v >= 100) {
        clearInterval(id)
        setTimeout(() => {
          setGone(true)
          onDone?.()
        }, 650)
      }
    }, 90)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          exit={{ y: '-100%', transition: { duration: 1.1, ease: [0.7, 0, 0.2, 1] } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 500, background: 'var(--ink)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.2rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: '1.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,4vw,2.6rem)', color: 'var(--ivory)' }}
          >
            VITA<span style={{ color: 'var(--gold)' }}>RA</span>
          </motion.div>
          <div style={{ width: 'min(260px,60vw)', height: 1, background: 'rgba(200,167,107,.2)', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, height: '100%', width: `${pct}%`,
              background: 'var(--gold)', transition: 'width .2s ease',
            }} />
          </div>
          <div style={{ fontSize: '.62rem', letterSpacing: '.5em', color: 'var(--mist)', textTransform: 'uppercase' }}>
            Entering the villa · {pct}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
