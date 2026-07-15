import { useState, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ROOMS } from '../data/rooms.js'

const RoomVignette = lazy(() => import('../three/RoomVignette.jsx'))

export default function RoomExplorer() {
  const [active, setActive] = useState(ROOMS[0])
  const [light, setLight] = useState(0.7) // user lighting control
  const [hotspot, setHotspot] = useState(null)

  return (
    <section id="walkthrough" style={{ padding: '14vh 0', background: 'var(--char)', borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)' }}>
      <style>{`
        .re-tabs{display:flex;gap:.6rem;flex-wrap:wrap;justify-content:center;margin-bottom:5vh}
        .re-tab{background:none;border:1px solid rgba(200,167,107,.2);color:var(--mist);
          font-family:var(--sans);font-size:.66rem;letter-spacing:.24em;text-transform:uppercase;
          padding:.65rem 1.3rem;transition:all .35s;}
        .re-tab:hover{color:var(--ivory);border-color:var(--gold)}
        .re-tab.on{background:var(--gold);color:var(--ink);border-color:var(--gold)}
        .re-grid{display:grid;grid-template-columns:1.25fr 1fr;gap:4vw;align-items:stretch}
        .re-stage{position:relative;min-height:440px;border:1px solid var(--hair);overflow:hidden;background:var(--ink)}
        .re-hot{position:absolute;width:34px;height:34px;border-radius:50%;border:1px solid var(--gold);
          background:rgba(10,9,8,.55);color:var(--gold);font-family:var(--serif);font-style:italic;
          display:flex;align-items:center;justify-content:center;transition:all .3s;z-index:5;}
        .re-hot:hover{background:var(--gold);color:var(--ink);transform:scale(1.15)}
        .re-hot::after{content:"";position:absolute;inset:-7px;border-radius:50%;
          border:1px solid rgba(200,167,107,.35);animation:pulse 2.2s ease-out infinite;}
        @keyframes pulse{0%{transform:scale(.7);opacity:1}100%{transform:scale(1.4);opacity:0}}
        .re-tip{position:absolute;z-index:6;background:rgba(10,9,8,.92);border:1px solid var(--gold);
          padding:1rem 1.2rem;max-width:240px;font-size:.8rem;line-height:1.7;color:var(--ivory);
          backdrop-filter:blur(8px);}
        .re-panel h3{font-family:var(--serif);font-weight:300;font-size:clamp(1.8rem,3.4vw,2.8rem);margin:.9rem 0 1.2rem}
        .re-panel p{color:var(--mist);line-height:1.95;font-size:.92rem;max-width:52ch}
        .re-mats{list-style:none;margin:1.8rem 0;display:grid;gap:.7rem}
        .re-mats li{display:flex;gap:.9rem;align-items:baseline;color:var(--ivory);font-size:.88rem}
        .re-mats li::before{content:"—";color:var(--gold)}
        .re-light{margin-top:2rem}
        .re-light label{display:block;font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:.8rem}
        .re-light input{width:100%;accent-color:var(--gold);background:transparent}
        .re-lighting-note{font-size:.8rem;color:var(--mist);margin-top:.8rem;line-height:1.7}
        @media(max-width:900px){.re-grid{grid-template-columns:1fr}.re-stage{min-height:340px}}
      `}</style>

      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The Walkthrough</p>
          <h2>Explore the Villa</h2>
        </div>

        <div className="re-tabs">
          {ROOMS.map((r) => (
            <button
              key={r.id}
              className={`re-tab ${active.id === r.id ? 'on' : ''}`}
              onClick={() => { setActive(r); setHotspot(null) }}
            >
              {r.name}
            </button>
          ))}
        </div>

        <div className="re-grid">
          <div className="re-stage">
            <Suspense fallback={null}>
              <RoomVignette room={active} light={light} />
            </Suspense>

            {/* interactive hotspots */}
            {active.materials.slice(0, 3).map((m, i) => (
              <button
                key={m}
                className="re-hot"
                style={{ left: `${22 + i * 26}%`, top: `${34 + (i % 2) * 26}%` }}
                onClick={() => setHotspot(hotspot === i ? null : i)}
                aria-label={m}
              >
                {['i', 'ii', 'iii'][i]}
              </button>
            ))}
            <AnimatePresence>
              {hotspot !== null && (
                <motion.div
                  className="re-tip"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{ left: `${22 + hotspot * 26}%`, top: `${46 + (hotspot % 2) * 26}%` }}
                >
                  <strong style={{ color: 'var(--gold)', fontFamily: 'var(--serif)', fontStyle: 'italic' }}>
                    {active.materials[hotspot]}
                  </strong>
                  <div style={{ marginTop: '.4rem' }}>
                    Specified for {active.name.toLowerCase()} — selected for texture, durability and the way it holds warm light.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="re-panel"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <p className="eyebrow">Design Explanation</p>
              <h3>{active.name}</h3>
              <p>{active.story}</p>
              <ul className="re-mats">
                {active.materials.map((m) => <li key={m}>{m}</li>)}
              </ul>
              <div className="re-light">
                <label htmlFor="lightCtl">Lighting Control — {Math.round(light * 100)}%</label>
                <input
                  id="lightCtl" type="range" min="0.15" max="1" step="0.01"
                  value={light} onChange={(e) => setLight(+e.target.value)}
                />
                <div className="re-lighting-note">{active.lighting}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
