import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    let x = -100, y = -100, rx = -100, ry = -100, raf
    const move = (e) => { x = e.clientX; y = e.clientY }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px)`
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    const grow = () => ring.current?.classList.add('grow')
    const shrink = () => ring.current?.classList.remove('grow')
    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    const mo = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })
    loop()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <style>{`
        .cur-dot{position:fixed;top:-3px;left:-3px;width:6px;height:6px;border-radius:50%;
          background:var(--gold);pointer-events:none;z-index:600;}
        .cur-ring{position:fixed;top:-19px;left:-19px;width:38px;height:38px;border-radius:50%;
          border:1px solid rgba(200,167,107,.5);pointer-events:none;z-index:600;
          transition:width .35s,height .35s,top .35s,left .35s,border-color .35s;}
        .cur-ring.grow{width:64px;height:64px;top:-32px;left:-32px;border-color:var(--gold);}
        @media(pointer:coarse){.cur-dot,.cur-ring{display:none}}
      `}</style>
      <div ref={dot} className="cur-dot" />
      <div ref={ring} className="cur-ring" />
    </>
  )
}
