export default function Footer() {
  return (
    <footer style={{ padding: '5rem 0 3rem', borderTop: '1px solid var(--hair)', background: 'var(--char)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' }}>
          <div>
            <a href="#top" style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', letterSpacing: '.5em', color: 'var(--ivory)', textDecoration: 'none' }}>
              VITA<span style={{ color: 'var(--gold)' }}>RA</span>
            </a>
            <p style={{ color: 'var(--mist)', marginTop: '1rem', maxWidth: '34ch', fontSize: '.86rem', lineHeight: 2 }}>
              Luxury interior design studio, Hyderabad. Residential · Commercial · Villa · Hospitality · 3D Visualization · Turnkey.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <small style={colHead}>Navigate</small>
              {[['#walkthrough', 'Walkthrough'], ['#portfolio', 'Portfolio'], ['#services', 'Services'], ['#contact', 'Contact']].map(([h, l]) => (
                <a key={h} href={h} style={colLink}>{l}</a>
              ))}
            </div>
            <div>
              <small style={colHead}>Contact</small>
              <a href="mailto:hello@vitarainterior.in" style={colLink}>hello@vitarainterior.in</a>
              <a href="tel:+919999999999" style={colLink}>+91 99999 99999</a>
              <p style={{ ...colLink, color: 'var(--mist)' }}>Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(200,167,107,.1)', textAlign: 'center', color: '#5f584a', fontSize: '.68rem', letterSpacing: '.22em' }}>
          © {new Date().getFullYear()} VITARA INTERIOR · DESIGN BEYOND IMAGINATION
        </div>
      </div>
    </footer>
  )
}

const colHead = {
  display: 'block', fontSize: '.62rem', letterSpacing: '.3em', textTransform: 'uppercase',
  color: 'var(--gold-dim)', marginBottom: '1.1rem',
}
const colLink = {
  display: 'block', color: 'var(--mist)', textDecoration: 'none',
  fontSize: '.86rem', lineHeight: 2.2,
}
