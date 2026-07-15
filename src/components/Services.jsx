import { motion } from 'framer-motion'
import { SERVICES } from '../data/rooms.js'

export default function Services() {
  return (
    <section id="services" style={{ padding: '14vh 0', background: 'var(--char)', borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)' }}>
      <style>{`
        .sv-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1px;background:var(--hair)}
        .sv-card{background:var(--char);padding:3.2rem 2.4rem;position:relative;overflow:hidden;transition:background .5s}
        .sv-card::before{content:"";position:absolute;top:0;left:0;width:100%;height:1px;
          background:linear-gradient(90deg,transparent,var(--gold),transparent);
          transform:translateX(-100%);transition:transform .8s cubic-bezier(.2,.7,.2,1);}
        .sv-card:hover{background:var(--umber)}
        .sv-card:hover::before{transform:translateX(0)}
        .sv-glyph{font-family:var(--serif);font-style:italic;font-size:1.9rem;color:var(--gold)}
        .sv-card h4{font-family:var(--serif);font-weight:400;font-size:1.4rem;margin:1.3rem 0 .9rem;letter-spacing:.04em}
        .sv-card p{color:var(--mist);font-size:.86rem;line-height:1.9}
      `}</style>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">What We Do</p>
          <h2>Services</h2>
        </div>
        <div className="sv-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              className="sv-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <div className="sv-glyph">{s.glyph}</div>
              <h4>{s.name}</h4>
              <p>{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
