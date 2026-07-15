import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../data/rooms.js'

function BeforeAfter({ before, after, alt }) {
  const [pos, setPos] = useState(50)
  const box = useRef(null)
  const drag = (clientX) => {
    const r = box.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)))
  }
  return (
    <div
      ref={box}
      style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', userSelect: 'none', touchAction: 'none' }}
      onMouseMove={(e) => e.buttons === 1 && drag(e.clientX)}
      onTouchMove={(e) => drag(e.touches[0].clientX)}
      onClick={(e) => drag(e.clientX)}
    >
      <img src={after} alt={`${alt} — after`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
      <div style={{ position: 'absolute', inset: 0, width: `${pos}%`, overflow: 'hidden' }}>
        <img src={before} alt={`${alt} — before`} style={{ width: `${box.current?.offsetWidth || 800}px`, height: '100%', objectFit: 'cover', filter: 'grayscale(.6) brightness(.8)' }} loading="lazy" />
      </div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${pos}%`, width: 1, background: 'var(--gold)' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--gold)',
          background: 'rgba(10,9,8,.75)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--gold)', fontSize: '.7rem', letterSpacing: '.08em',
        }}>⇔</div>
      </div>
      <span style={badge('left')}>Before</span>
      <span style={badge('right')}>After</span>
    </div>
  )
}
const badge = (side) => ({
  position: 'absolute', bottom: '1rem', [side]: '1rem',
  fontSize: '.58rem', letterSpacing: '.34em', textTransform: 'uppercase',
  color: 'var(--ivory)', background: 'rgba(10,9,8,.65)', padding: '.45rem .9rem',
  border: '1px solid rgba(200,167,107,.3)',
})

export default function Portfolio() {
  const [openId, setOpenId] = useState(null)
  const open = PROJECTS.find((p) => p.id === openId)

  return (
    <section id="portfolio" style={{ padding: '14vh 0' }}>
      <style>{`
        .pf-card{position:relative;margin-bottom:9vh;border:1px solid var(--hair);overflow:hidden;background:var(--char)}
        .pf-media{position:relative;overflow:hidden}
        .pf-media img{width:100%;aspect-ratio:21/9;object-fit:cover;display:block;
          filter:brightness(.62) saturate(.9);transform:scale(1.04);transition:transform 1.4s cubic-bezier(.2,.7,.2,1),filter 1s;}
        .pf-card:hover .pf-media img{transform:scale(1);filter:brightness(.8) saturate(1)}
        .pf-info{display:flex;justify-content:space-between;align-items:flex-end;gap:2rem;flex-wrap:wrap;padding:2.2rem 2.6rem}
        .pf-info h3{font-family:var(--serif);font-weight:300;font-size:clamp(1.7rem,3.4vw,2.8rem)}
        .pf-info .meta{font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:.8rem}
        .pf-open{background:none;border:1px solid var(--hair);color:var(--gold);padding:.85rem 2rem;
          font-family:var(--sans);font-size:.64rem;letter-spacing:.34em;text-transform:uppercase;transition:all .4s;}
        .pf-open:hover{background:var(--gold);color:var(--ink);border-color:var(--gold)}
        .pf-modal{position:fixed;inset:0;z-index:400;background:rgba(10,9,8,.97);backdrop-filter:blur(10px);
          overflow-y:auto;padding:10vh 6vw;}
        .pf-close{position:fixed;top:2rem;right:2.4rem;background:none;border:1px solid var(--gold);
          color:var(--gold);width:52px;height:52px;border-radius:50%;font-size:1.1rem;z-index:401;transition:all .3s;}
        .pf-close:hover{background:var(--gold);color:var(--ink)}
      `}</style>

      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Selected Work</p>
          <h2>The Portfolio</h2>
        </div>

        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.id}
            className="pf-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="pf-media"><img src={p.after} alt={p.name} loading="lazy" /></div>
            <div className="pf-info">
              <div>
                <span className="meta">{p.meta}</span>
                <h3>{p.name}</h3>
              </div>
              <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--gold-dim)', letterSpacing: '.2em' }}>
                  No. {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][i]}
                </span>
                <button className="pf-open" onClick={() => setOpenId(p.id)}>View Transformation</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="pf-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className="pf-close" onClick={() => setOpenId(null)} aria-label="Close">✕</button>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <p className="eyebrow">{open.meta}</p>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(2rem,5vw,3.6rem)', margin: '1rem 0 1.6rem' }}>
                {open.name}
              </h3>
              <p style={{ color: 'var(--mist)', lineHeight: 2, maxWidth: '62ch', marginBottom: '3rem' }}>{open.story}</p>
              <BeforeAfter before={open.before} after={open.after} alt={open.name} />
              <p style={{ color: 'var(--mist)', fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', marginTop: '1.4rem', textAlign: 'center' }}>
                Drag the divider to compare
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
