import { useEffect, useState } from 'react'

/**
 * Cheap, synchronous-ish heuristic for device capability.
 * No benchmarking pass (that itself costs time on the critical path) —
 * just navigator signals available immediately.
 *
 * tier: 'low' | 'mid' | 'high'
 */
function detectTier() {
  if (typeof navigator === 'undefined') return 'high'

  const ua = navigator.userAgent || ''
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua)
  const cores = navigator.hardwareConcurrency || 4
  const mem = navigator.deviceMemory || 4 // Chrome-only, undefined on iOS/Firefox
  const saveData = navigator.connection?.saveData || false
  const slowNet = /2g/.test(navigator.connection?.effectiveType || '')

  if (saveData || slowNet) return 'low'
  if (isMobile && (cores <= 4 || mem <= 4)) return 'low'
  if (isMobile) return 'mid'
  if (cores <= 4) return 'mid'
  return 'high'
}

export function useDeviceTier() {
  const [tier, setTier] = useState(detectTier)

  useEffect(() => {
    // Re-check once after mount in case connection info arrives late.
    setTier(detectTier())
  }, [])

  return tier
}

export const TIER_SETTINGS = {
  low: {
    dpr: [1, 1],
    antialias: false,
    bloom: false,
    dof: false,
    vignette: true,
    reflector: { resolution: 256, blur: [0, 0], mixBlur: 0, mixStrength: 1 },
    contactShadowRes: 128,
    dustCount: 40,
    powerPreference: 'low-power',
  },
  mid: {
    dpr: [1, 1.5],
    antialias: false,
    bloom: true,
    dof: false,
    vignette: true,
    reflector: { resolution: 512, blur: [200, 60], mixBlur: 0.6, mixStrength: 3 },
    contactShadowRes: 256,
    dustCount: 120,
    powerPreference: 'default',
  },
  high: {
    dpr: [1, 1.75],
    antialias: true,
    bloom: true,
    dof: true,
    vignette: true,
    reflector: { resolution: 1024, blur: [380, 120], mixBlur: 0.9, mixStrength: 5 },
    contactShadowRes: 512,
    dustCount: 220,
    powerPreference: 'high-performance',
  },
}
