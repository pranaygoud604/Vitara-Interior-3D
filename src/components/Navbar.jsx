import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    ['#walkthrough', 'Walkthrough'],
    ['#portfolio', 'Portfolio'],
    ['#services', 'Services'],
    ['#contact', 'Contact'],
  ]

  return (
    <>
      <style>{`
        .nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;
          align-items:center;padding:1.6rem 4vw;transition:background .5s,padding .5s;}
        .nav.sc{background:linear-gradient(180deg,rgba(10,9,8,.92),rgba(10,9,8,.72));
          backdrop-filter:blur(14px);padding:1rem 4vw;border-bottom:1px solid var(--hair);}
        .nav-logo{font-family:var(--serif);font-size:1.45rem;letter-spacing:.5em;color:var(--ivory);
          text-decoration:none;}
        .nav-logo b{color:var(--gold);font-weight:400}
        .nav-ul{display:flex;gap:2.6rem;list-style:none;align-items:center}
        .nav-ul a{color:var(--mist);text-decoration:none;font-size:.72rem;letter-spacing:.28em;
          text-transform:uppercase;position:relative;transition:color .3s;}
        .nav-ul a::after{content:"";position:absolute;left:0;bottom:-6px;width:0;height:1px;
          background:var(--gold);transition:width .4s;}
        .nav-ul a:hover{color:var(--ivory)}
        .nav-ul a:hover::after{width:100%}
        .nav-cta{border:1px solid var(--hair);padding:.6rem 1.4rem;color:var(--gold)!important;}
        .nav-cta:hover{background:var(--gold);color:var(--ink)!important}
        .nav-burger{display:none;background:none;border:none;z-index:110;}
        .nav-burger span{display:block;width:26px;height:1px;background:var(--ivory);margin:7px 0;transition:.4s}
        @media(max-width:900px){
          .nav-ul{position:fixed;inset:0;background:rgba(10,9,8,.97);backdrop-filter:blur(20px);
            flex-direction:column;justify-content:center;gap:2.4rem;
            transform:translateX(100%);transition:transform .5s cubic-bezier(.2,.7,.2,1);}
          .nav-ul.open{transform:none}
          .nav-ul a{font-size:.95rem}
          .nav-burger{display:block}
          .nav-burger.open span:nth-child(1){transform:translateY(8px) rotate(45deg)}
          .nav-burger.open span:nth-child(2){opacity:0}
          .nav-burger.open span:nth-child(3){transform:translateY(-8px) rotate(-45deg)}
        }
      `}</style>
      <nav className={`nav ${scrolled ? 'sc' : ''}`}>
        <a className="nav-logo" href="#top">VITA<b>RA</b></a>
        <button className={`nav-burger ${open ? 'open' : ''}`} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <ul className={`nav-ul ${open ? 'open' : ''}`}>
          {links.map(([href, label]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
          <li><a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Book Consultation</a></li>
        </ul>
      </nav>
    </>
  )
}
