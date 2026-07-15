import { useState } from 'react'
import { motion } from 'framer-motion'

const PHONE = '919999999999' // TODO: replace with the real number
const EMAIL = 'hello@vitarainterior.in'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', type: 'Residential', message: '' })
  const [sent, setSent] = useState(false)

  const submit = () => {
    if (!form.name || !form.phone) return
    const text = encodeURIComponent(
      `Hi Vitara Interior,\n\nName: ${form.name}\nPhone: ${form.phone}\nProject Type: ${form.type}\n\n${form.message}`
    )
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank', 'noopener')
    setSent(true)
  }

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  return (
    <section id="contact" style={{ padding: '14vh 0' }}>
      <style>{`
        .ct-grid{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:start}
        .ct-field{margin-bottom:1.8rem}
        .ct-field label{display:block;font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;
          color:var(--gold);margin-bottom:.7rem}
        .ct-field input,.ct-field select,.ct-field textarea{width:100%;background:transparent;
          border:none;border-bottom:1px solid rgba(200,167,107,.3);color:var(--ivory);
          font-family:var(--sans);font-weight:300;font-size:1rem;padding:.7rem 0;outline:none;
          transition:border-color .3s;}
        .ct-field select option{background:var(--char)}
        .ct-field input:focus,.ct-field select:focus,.ct-field textarea:focus{border-color:var(--gold)}
        .ct-quick{display:grid;gap:1px;background:var(--hair);border:1px solid var(--hair);margin-bottom:3rem}
        .ct-quick a{display:flex;justify-content:space-between;align-items:center;background:var(--char);
          padding:1.5rem 1.8rem;color:var(--ivory);text-decoration:none;transition:background .4s;}
        .ct-quick a:hover{background:var(--umber)}
        .ct-quick .lbl{font-size:.68rem;letter-spacing:.3em;text-transform:uppercase;color:var(--mist)}
        .ct-quick .val{font-family:var(--serif);font-style:italic;color:var(--gold)}
        .ct-map{border:1px solid var(--hair);filter:grayscale(1) invert(.88) contrast(.9);width:100%;height:260px}
        @media(max-width:900px){.ct-grid{grid-template-columns:1fr}}
      `}</style>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Begin Your Project</p>
          <h2>Client Experience</h2>
        </div>

        <div className="ct-grid">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="ct-quick">
              <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hi Vitara Interior, I would like a consultation.')}`} target="_blank" rel="noopener noreferrer">
                <span className="lbl">WhatsApp</span><span className="val">Chat with the studio →</span>
              </a>
              <a href={`tel:+${PHONE}`}>
                <span className="lbl">Call</span><span className="val">+91 99999 99999</span>
              </a>
              <a href={`mailto:${EMAIL}?subject=Schedule%20a%20Site%20Visit`}>
                <span className="lbl">Schedule Visit</span><span className="val">Book a walkthrough →</span>
              </a>
            </div>
            <iframe
              className="ct-map"
              title="Vitara Interior studio location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Hyderabad,Telangana&output=embed"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
          >
            {sent ? (
              <div style={{ border: '1px solid var(--gold)', padding: '3rem', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--gold)' }}>
                  Your enquiry has opened in WhatsApp.
                </p>
                <p style={{ color: 'var(--mist)', marginTop: '1rem', lineHeight: 1.9 }}>
                  Press send there and the studio will respond within one working day.
                </p>
              </div>
            ) : (
              <>
                <div className="ct-field">
                  <label htmlFor="ct-name">Name</label>
                  <input id="ct-name" value={form.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-phone">Phone</label>
                  <input id="ct-phone" value={form.phone} onChange={set('phone')} placeholder="+91" autoComplete="tel" inputMode="tel" />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-type">Project Type</label>
                  <select id="ct-type" value={form.type} onChange={set('type')}>
                    {['Residential', 'Commercial', 'Office', 'Villa', 'Hospitality', '3D Visualization', 'Turnkey'].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-msg">Tell us about the space</label>
                  <textarea id="ct-msg" rows={3} value={form.message} onChange={set('message')} placeholder="Location, size, timeline…" />
                </div>
                <button className="btn-gold" onClick={submit}>Book Consultation</button>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
