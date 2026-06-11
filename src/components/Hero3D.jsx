import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

// =========================================================================
//  Hero3D — a real WebGL 3D scene rendered behind the hero text.
//  A "liquid metal" blob that slowly morphs + rotates, wrapped in a
//  glowing wireframe ring. Loaded ONLY on desktop (see Hero.jsx) so
//  mobile stays fast.
// =========================================================================

function Blob() {
  const mesh = useRef();

  // Gentle continuous rotation, independent of the distortion animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.12;
    mesh.current.rotation.y = t * 0.18;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={mesh} args={[1.55, 64, 64]}>
        {/* distort = how "liquid" it looks, speed = morph speed */}
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#0e7490"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.85}
          distort={0.45}
          speed={1.8}
        />
      </Sphere>
    </Float>
  );
}

function WireRing() {
  const ring = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ring.current.rotation.x = Math.PI / 2.3 + Math.sin(t * 0.3) * 0.15;
    ring.current.rotation.z = t * 0.25;
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[2.5, 0.012, 16, 120]} />
      <meshBasicMaterial color="#a3e635" transparent opacity={0.55} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-60"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]} // cap pixel ratio = big performance win
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 4, 6]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-4, -2, -4]} intensity={1.4} color="#a3e635" />

        <Suspense fallback={null}>
          <Blob />
          <WireRing />
        </Suspense>
      </Canvas>
    </div>
  );
}
