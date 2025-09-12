import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Edges } from '@react-three/drei';
import { Suspense, useState, useContext } from 'react';
import { EffectComposer, Bloom, SSAO, Vignette } from '@react-three/postprocessing';
import { SceneContext } from "../contexts/SceneContext.jsx";
import { IntroContext } from "../contexts/IntroContext.jsx";

import * as THREE from 'three';
import gsap from 'gsap';



function Model() {
  const { scene } = useGLTF("/models/export.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      console.log(child.name);
    }
  });

  return <primitive object={scene} />;
}

export default function Bedroom() {
  const { setCameraPosition, setCameraTarget, setActiveScene } = useContext(SceneContext);
  const { introFinished, setIntroFinished } = useContext(IntroContext);
  
  return (
    <div>
    {introFinished && (
    <Canvas
      camera={{ position: [0, 2, 5] }}
      gl={{ antialias: true }}
      style={{
      width: '100vw',
      height: '100vh',
      visibility: introFinished ? 'visible' : 'hidden', // hide until ready
      }}
      shadows
    >
      <ambientLight intensity={1.5} />
      <directionalLight
        color="rgba(255, 255, 255, 1)"
        position={[0, 1000, 0]}
        intensity={0.5}
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
    )}
    </div>
  );
}
