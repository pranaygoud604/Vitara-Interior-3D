import { useEffect, useRef, useState } from 'react'

/**
 * Returns `active` = true only when the referenced element is on-screen
 * AND the tab is visible. Used to fully stop R3F's render loop
 * (frameloop="never") when there's nothing to be gained from drawing.
 */
export function useActiveWhenVisible(rootMargin = '200px') {
  const ref = useRef(null)
  const [inView, setInView] = useState(true)
  const [tabVisible, setTabVisible] = useState(
    typeof document === 'undefined' ? true : !document.hidden
  )

  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold: 0 }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [rootMargin])

  useEffect(() => {
    const fn = () => setTabVisible(!document.hidden)
    document.addEventListener('visibilitychange', fn)
    return () => document.removeEventListener('visibilitychange', fn)
  }, [])

  return { ref, active: inView && tabVisible }
}
