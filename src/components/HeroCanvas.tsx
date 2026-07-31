import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * One fixed <Canvas> in the hero only.
 * - Glassy distort sphere, slowly auto-rotating, subtly tracking the mouse.
 * - Lightweight particle field (plain R3F points, no shaders/postprocessing).
 * - Falls back to a static CSS gradient blob when WebGL is unavailable,
 *   the user prefers reduced motion, or the device looks low-end.
 */

function canUseWebGL(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;
  if ((navigator.hardwareConcurrency ?? 8) <= 4) return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Static CSS fallback — no WebGL required. */
function HeroBlobFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="blob blob-blue" />
      <div className="blob blob-violet" />
      <div className="blob blob-magenta" />
    </div>
  );
}

function DistortedSphere({ pointer }: { pointer: { x: number; y: number } }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const m = mesh.current;
    if (!m) return;
    // slow auto-rotation
    m.rotation.y += delta * 0.12;
    // subtle mouse tilt (damped)
    const damp = Math.min(delta * 3, 1);
    m.rotation.x += (pointer.y * 0.4 - m.rotation.x) * damp;
    m.rotation.z += (pointer.x * 0.35 - m.rotation.z) * damp;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.35, 64, 64]} />
        <MeshDistortMaterial
          color="#241b4d"
          emissive="#6d28d9"
          emissiveIntensity={0.55}
          roughness={0.12}
          metalness={0.85}
          distort={0.38}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ count = 500 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < arr.length; i += 3) {
      const r = 2.3 + Math.random() * 4.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i] = r * Math.sin(phi) * Math.cos(theta);
      arr[i + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.75;
      arr[i + 2] = r * Math.cos(phi) * 0.55;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    const p = points.current;
    if (!p) return;
    p.rotation.y += delta * 0.03;
    p.rotation.x += delta * 0.008;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#a78bfa"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  // Track the pointer at window level so parallax works even though the
  // canvas itself is pointer-events: none (keeps text selectable/clickable).
  const pointer = useMemo(() => ({ x: 0, y: 0 }), []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [pointer]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 5, 6]} intensity={70} color="#3b82f6" />
      <pointLight position={[-6, -3, 5]} intensity={55} color="#ec4899" />
      <pointLight position={[0, -6, -4]} intensity={40} color="#8b5cf6" />
      <group position={[0, 0, 0]}>
        <DistortedSphere pointer={pointer} />
        <ParticleField />
      </group>
    </>
  );
}

export default function HeroCanvas() {
  const [webgl, setWebgl] = useState<boolean>(() => canUseWebGL());

  useEffect(() => {
    // re-check once after mount — context creation can be flaky in iframes
    setWebgl(canUseWebGL());
  }, []);

  if (!webgl) return <HeroBlobFallback />;

  return (
    <div
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
