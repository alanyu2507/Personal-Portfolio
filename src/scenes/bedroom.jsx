import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Edges } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// HoverableMesh that only applies hover to meshes in a whitelist
function HoverableMesh({ object, hoverNames = [] }) {
  const [hoveredMesh, setHoveredMesh] = useState(null);

  const traverseMeshes = (obj) => {
    return obj.children.map((child, i) => {
      if (child.type === 'Mesh') {
        const isHoverable = hoverNames.includes(child.name);
        return (
            <mesh
                key={i}
                geometry={child.geometry}
                material={child.material.clone()} // clone to prevent shared material issues
                position={child.position}
                rotation={child.rotation}
                scale={child.scale}
                castShadow
                receiveShadow
                onPointerOver={isHoverable ? () => setHoveredMesh(child.uuid) : undefined}
                onPointerOut={isHoverable ? () => setHoveredMesh(null) : undefined}>
                    {hoveredMesh === child.uuid && <Edges color="red" scale={1.05} />}
            </mesh>
        );
      } else if (child.children && child.children.length) {
        return <group key={i} {...child}>{traverseMeshes(child)}</group>;
      }
      return null;
    });
  };

  return <group>{traverseMeshes(object)}</group>;
}

function Model() {
  const { scene } = useGLTF("/models/Bedroomvs2.glb");
  scene.traverse((child) => {
    if (child.isMesh) {
      console.log(child.name); // <-- This shows the mesh names in the console
    }
  });
  
  return <HoverableMesh object={scene} hoverNames={['WallMoniter', 'WallMoniter_1', 'WallMoniter_2']} />;
}

export default function MyScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5] }}
      style={{ width: "100vw", height: "100vh" }}
      gl={{ antialias: true }}
      shadows
    >
      <ambientLight intensity={0.3} />
      <directionalLight 
        color="rgba(156, 218, 179, 1)"
        position={[0, 500, 0]}
        intensity={1.3} 
        castShadow 
      />

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls />

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
