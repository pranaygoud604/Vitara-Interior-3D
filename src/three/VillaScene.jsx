import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Environment,
  Lightformer,
  ContactShadows,
  MeshReflectorMaterial,
  Float,
} from '@react-three/drei'
import { EffectComposer, Bloom, Vignette, DepthOfField } from '@react-three/postprocessing'
import * as THREE from 'three'
import { TIER_SETTINGS } from '../hooks/useDeviceTier.js'

/* ------------------------------------------------------------------ */
/* Camera dolly: scroll progress (0..1) drives a slow entry path       */
/* ------------------------------------------------------------------ */
function CinematicCamera({ progress }) {
  const look = useMemo(() => new THREE.Vector3(), [])
  useFrame(({ camera }, dt) => {
    const p = progress.current
    // entry path: outside the villa -> through the doorway -> into the living volume
    const x = THREE.MathUtils.lerp(0, 1.4, Math.sin(p * Math.PI * 0.5))
    const y = THREE.MathUtils.lerp(2.4, 1.5, p)
    const z = THREE.MathUtils.lerp(13.5, 2.2, p)
    camera.position.lerp({ x, y, z }, 1 - Math.pow(0.001, dt))
    look.set(
      THREE.MathUtils.lerp(0, -1.2, p),
      THREE.MathUtils.lerp(1.8, 1.4, p),
      -4
    )
    camera.lookAt(look)
  })
  return null
}

/* ------------------------------------------------------------------ */
/* Animated sheer curtain — vertex-waved plane                          */
/* ------------------------------------------------------------------ */
function Curtain({ position, width = 2.2, height = 4.6, segments = 32, cheap = false }) {
  const ref = useRef()
  const frame = useRef(0)
  const geo = useMemo(() => new THREE.PlaneGeometry(width, height, segments, Math.round(segments * 0.75)), [width, height, segments])
  const base = useMemo(() => geo.attributes.position.array.slice(), [geo])
  useFrame(({ clock }) => {
    frame.current++
    // Skip every other frame on lower tiers — the wave is slow enough
    // that halving its update rate is visually indistinguishable.
    if (cheap && frame.current % 2 === 0) return
    const t = clock.elapsedTime
    const pos = ref.current.geometry.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3
      const x = base[ix]
      const y = base[ix + 1]
      const sway = Math.sin(x * 3.2 + t * 1.1) * 0.06 + Math.sin(y * 1.5 + t * 0.7) * 0.05
      const fall = (y / height + 0.5) // more sway at the bottom
      pos.array[ix + 2] = sway * (1.2 - fall)
    }
    pos.needsUpdate = true
    ref.current.geometry.computeVertexNormals()
  })
  return (
    <mesh ref={ref} geometry={geo} position={position}>
      <meshPhysicalMaterial
        color="#f2ead9"
        transparent
        opacity={0.32}
        roughness={0.9}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}

/* ------------------------------------------------------------------ */
/* Floating dust particles in the sun shaft                            */
/* ------------------------------------------------------------------ */
function DustParticles({ count }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = Math.random() * 4.5
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return arr
  }, [count])
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.012
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.18) * 0.12
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#e8d9b8"
        size={0.02}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/* ------------------------------------------------------------------ */
/* The villa volume — marble, walnut, glass, brass                      */
/* ------------------------------------------------------------------ */
function Villa({ settings }) {
  return (
    <group>
      {/* marble floor with real reflections (quality scales with device tier) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[24, 30]} />
        <MeshReflectorMaterial
          blur={settings.reflector.blur}
          resolution={settings.reflector.resolution}
          mixBlur={settings.reflector.mixBlur}
          mixStrength={settings.reflector.mixStrength}
          roughness={0.55}
          depthScale={1.1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#cfc9bd"
          metalness={0.25}
        />
      </mesh>

      {/* back feature wall — walnut */}
      <mesh position={[0, 2.6, -6]}>
        <boxGeometry args={[14, 5.4, 0.3]} />
        <meshStandardMaterial color="#3a2c1e" roughness={0.62} metalness={0.08} />
      </mesh>
      {/* walnut fluting */}
      {Array.from({ length: 22 }).map((_, i) => (
        <mesh key={i} position={[-5.6 + i * 0.54, 2.6, -5.82]}>
          <boxGeometry args={[0.1, 5.2, 0.06]} />
          <meshStandardMaterial color="#4a3a28" roughness={0.5} metalness={0.12} />
        </mesh>
      ))}

      {/* side walls */}
      <mesh position={[-7, 2.6, -1]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[16, 5.4]} />
        <meshStandardMaterial color="#221d17" roughness={0.85} />
      </mesh>
      <mesh position={[7, 2.6, -1]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[16, 5.4]} />
        <meshStandardMaterial color="#221d17" roughness={0.85} />
      </mesh>

      {/* ceiling with gold cove line */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 5.3, -1]}>
        <planeGeometry args={[14.2, 16]} />
        <meshStandardMaterial color="#15120e" roughness={0.95} />
      </mesh>
      <mesh position={[0, 5.05, -5.7]}>
        <boxGeometry args={[13.6, 0.06, 0.06]} />
        <meshStandardMaterial color="#c8a76b" emissive="#c8a76b" emissiveIntensity={2.4} />
      </mesh>

      {/* full-height glazing frame (left) with morning light */}
      <mesh position={[-6.85, 2.4, -1]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[9, 4.6]} />
        <meshPhysicalMaterial
          color="#fdf3dd"
          emissive="#f5e3ba"
          emissiveIntensity={0.85}
          transparent
          opacity={0.9}
          roughness={0.3}
        />
      </mesh>
      {/* glazing mullions */}
      {[-4.5, -2.2, 0.1, 2.4].map((z, i) => (
        <mesh key={i} position={[-6.8, 2.4, z]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.08, 4.6, 0.08]} />
          <meshStandardMaterial color="#0c0a08" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}

      {/* curtains at glazing — lighter mesh + throttled update below 'high' tier */}
      <Curtain position={[-6.5, 2.35, -3.2]} segments={settings.dpr[1] >= 1.75 ? 32 : 18} cheap={settings.dpr[1] < 1.75} />
      <Curtain position={[-6.5, 2.35, 0.4]} segments={settings.dpr[1] >= 1.75 ? 32 : 18} cheap={settings.dpr[1] < 1.75} />

      {/* brass-framed glass partition (right) */}
      <mesh position={[5.4, 2.2, -2.5]}>
        <boxGeometry args={[0.06, 4.2, 5]} />
        <meshPhysicalMaterial
          color="#9aa39d"
          transmission={0.92}
          thickness={0.4}
          roughness={0.05}
          ior={1.5}
          transparent
        />
      </mesh>
      <mesh position={[5.4, 4.32, -2.5]}>
        <boxGeometry args={[0.1, 0.08, 5.1]} />
        <meshStandardMaterial color="#c8a76b" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[5.4, 0.06, -2.5]}>
        <boxGeometry args={[0.1, 0.08, 5.1]} />
        <meshStandardMaterial color="#c8a76b" metalness={0.9} roughness={0.25} />
      </mesh>

      {/* sculptural seating — low stone plinths + bouclé cushion forms */}
      <group position={[0.4, 0, -2.6]}>
        <mesh position={[0, 0.28, 0]}>
          <boxGeometry args={[3.4, 0.56, 1.5]} />
          <meshStandardMaterial color="#d9d3c7" roughness={0.35} metalness={0.05} />
        </mesh>
        <mesh position={[0, 0.72, -0.35]}>
          <boxGeometry args={[3.2, 0.4, 0.7]} />
          <meshStandardMaterial color="#e6ddcd" roughness={0.95} />
        </mesh>
        <mesh position={[0, 0.62, 0.25]}>
          <boxGeometry args={[3.2, 0.22, 0.9]} />
          <meshStandardMaterial color="#e6ddcd" roughness={0.95} />
        </mesh>
      </group>

      {/* travertine coffee table */}
      <mesh position={[0.4, 0.32, -0.6]}>
        <cylinderGeometry args={[0.75, 0.75, 0.34, 48]} />
        <meshStandardMaterial color="#cfc4ae" roughness={0.5} />
      </mesh>

      {/* floating brass pendant */}
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
        <group position={[0.4, 3.6, -1.6]}>
          <mesh>
            <torusGeometry args={[0.55, 0.035, 16, 64]} />
            <meshStandardMaterial
              color="#c8a76b"
              metalness={0.95}
              roughness={0.2}
              emissive="#8a6b35"
              emissiveIntensity={0.6}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.36, 0.028, 16, 64]} />
            <meshStandardMaterial
              color="#c8a76b"
              metalness={0.95}
              roughness={0.2}
              emissive="#8a6b35"
              emissiveIntensity={0.6}
            />
          </mesh>
        </group>
      </Float>

      {/* art plinth + sphere */}
      <group position={[-3.6, 0, -4.6]}>
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[0.7, 1.2, 0.7]} />
          <meshStandardMaterial color="#0f0d0a" roughness={0.4} />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.28, 48, 48]} />
          <meshStandardMaterial color="#c8a76b" metalness={1} roughness={0.12} />
        </mesh>
      </group>

      <ContactShadows position={[0, 0.01, 0]} opacity={0.55} scale={22} blur={2.4} far={4} resolution={settings.contactShadowRes} color="#000000" />
      <DustParticles count={settings.dustCount} />
    </group>
  )
}

/* ------------------------------------------------------------------ */
/* Scene wrapper                                                       */
/* ------------------------------------------------------------------ */
export default function VillaScene({ progress, tier = 'high', active = true }) {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const settings = TIER_SETTINGS[tier] || TIER_SETTINGS.high

  return (
    <Canvas
      dpr={settings.dpr}
      gl={{ antialias: settings.antialias, powerPreference: settings.powerPreference, alpha: false }}
      camera={{ position: [0, 2.4, 13.5], fov: 42 }}
      shadows={false}
      frameloop={active ? 'always' : 'never'}
      aria-label="Cinematic 3D villa walkthrough"
    >
      <color attach="background" args={['#0a0908']} />
      <fog attach="fog" args={['#0a0908', 16, 30]} />

      {/* morning sun shaft */}
      <directionalLight position={[-9, 6, 2]} intensity={2.2} color="#ffe9c4" />
      <pointLight position={[0.4, 3.4, -1.6]} intensity={8} color="#ffd9a0" distance={7} decay={2} />
      <ambientLight intensity={0.22} color="#c9baa0" />

      {/* offline HDRI-style environment built from lightformers */}
      <Environment resolution={tier === 'low' ? 128 : 256}>
        <Lightformer intensity={1.6} color="#ffe6bd" position={[-6, 3, 0]} rotation-y={Math.PI / 2} scale={[9, 5, 1]} />
        <Lightformer intensity={0.5} color="#c8a76b" position={[0, 5, -5]} scale={[12, 1, 1]} />
        <Lightformer intensity={0.35} color="#8fa2b5" position={[6, 4, 4]} rotation-y={-Math.PI / 2} scale={[6, 3, 1]} />
      </Environment>

      <Villa settings={settings} />
      {!reduced && <CinematicCamera progress={progress} />}

      {(settings.bloom || settings.dof || settings.vignette) && (
        <EffectComposer multisampling={0}>
          {settings.bloom && <Bloom intensity={0.55} luminanceThreshold={0.75} luminanceSmoothing={0.3} mipmapBlur={tier === 'high'} />}
          {settings.dof && <DepthOfField focusDistance={0.012} focalLength={0.05} bokehScale={2.2} />}
          {settings.vignette && <Vignette eskil={false} offset={0.22} darkness={0.85} />}
        </EffectComposer>
      )}
    </Canvas>
  )
}
