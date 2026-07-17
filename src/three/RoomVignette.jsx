import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

function Slow({ children }) {
  const g = useRef()
  useFrame(({ clock, pointer }) => {
    g.current.rotation.y = Math.sin(clock.elapsedTime * 0.12) * 0.16 + pointer.x * 0.12
    g.current.rotation.x = pointer.y * -0.04
  })
  return <group ref={g}>{children}</group>
}

function RoomSet({ room, shadowRes = 256 }) {
  return (
    <Slow>
      {/* floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[9, 9]} />
        <meshStandardMaterial color={room.floor} roughness={0.35} metalness={0.15} />
      </mesh>
      {/* back wall */}
      <mesh position={[0, 1.6, -3.2]}>
        <planeGeometry args={[9, 3.4]} />
        <meshStandardMaterial color={room.wall} roughness={0.85} />
      </mesh>
      {/* fluted feature strips */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[-2.2 + i * 0.5, 1.6, -3.1]}>
          <boxGeometry args={[0.08, 3.2, 0.05]} />
          <meshStandardMaterial color={room.wall} roughness={0.5} metalness={0.2} />
        </mesh>
      ))}
      {/* plinth furniture form */}
      <mesh position={[0, 0.35, -0.4]}>
        <boxGeometry args={[2.6, 0.7, 1.2]} />
        <meshStandardMaterial color={room.floor} roughness={0.6} />
      </mesh>
      {/* accent object */}
      <Float speed={1.4} floatIntensity={0.4} rotationIntensity={0.3}>
        <mesh position={[1.6, 1.5, -1.2]}>
          <torusKnotGeometry args={[0.28, 0.09, 128, 24]} />
          <meshStandardMaterial color={room.accent} metalness={0.95} roughness={0.18} />
        </mesh>
      </Float>
      {/* cove line */}
      <mesh position={[0, 3.05, -3.05]}>
        <boxGeometry args={[8.6, 0.05, 0.05]} />
        <meshStandardMaterial color={room.accent} emissive={room.accent} emissiveIntensity={2.2} />
      </mesh>
      <ContactShadows position={[0, 0.01, 0]} opacity={0.5} scale={10} blur={2.2} far={2.5} resolution={shadowRes} />
    </Slow>
  )
}

export default function RoomVignette({ room, light = 0.7, tier = 'high', active = true }) {
  const dpr = tier === 'low' ? [1, 1] : tier === 'mid' ? [1, 1.4] : [1, 1.6]
  const shadowRes = tier === 'low' ? 128 : tier === 'mid' ? 192 : 256
  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 1.7, 4.6], fov: 40 }}
      gl={{ antialias: tier === 'high', powerPreference: tier === 'low' ? 'low-power' : 'default' }}
      frameloop={active ? 'always' : 'never'}
      aria-label={`${room.name} 3D preview`}
    >
      <color attach="background" args={['#0a0908']} />
      <fog attach="fog" args={['#0a0908', 7, 14]} />
      <ambientLight intensity={0.18 + light * 0.25} color="#c9baa0" />
      <directionalLight position={[-4, 4, 3]} intensity={0.6 + light * 2.2} color="#ffe9c4" />
      <pointLight position={[0, 2.6, -1]} intensity={light * 7} color={new THREE.Color(room.accent)} distance={6} decay={2} />
      <Environment resolution={tier === 'low' ? 64 : 128}>
        <Lightformer intensity={0.5 + light} color="#ffe6bd" position={[-4, 3, 2]} scale={[6, 3, 1]} />
        <Lightformer intensity={0.4} color={room.accent} position={[4, 2, -2]} scale={[4, 2, 1]} />
      </Environment>
      <RoomSet room={room} shadowRes={shadowRes} />
    </Canvas>
  )
}
