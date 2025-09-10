import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Edges } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { EffectComposer, Bloom, SSAO, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';



function Model() {
  const { scene } = useGLTF("/models/testv3.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      console.log(child.name);
    }
  });

  return <primitive object={scene} />;
}

export default function Bedroom() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5] }}
      style={{ width: '100vw', height: '100vh' }}
      gl={{ antialias: true }}
      shadows
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        color="rgba(255, 255, 255, 1)"
        position={[0, 1000, 0]}
        intensity={0.2}
        castShadow
      />

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls makeDefault />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.5}
          intensity={1.2}
          radius={0.5}
        />

      </EffectComposer>
    </Canvas>
  );
}
