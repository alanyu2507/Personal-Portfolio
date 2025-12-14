import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { Suspense, useContext, useEffect, useRef } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { SceneContext } from "../contexts/SceneContext.jsx";
import { IntroContext } from "../contexts/IntroContext.jsx";

import * as THREE from 'three';
import gsap from 'gsap';





function Loader() {
  return (
    <Html center>
      <div style={{ color: "white", fontSize: "1.5rem" }}>
        Loading...
      </div>
    </Html>
  );
}
//loaders
export function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} />;
}

function ClickLogger() {
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    const handleClick = (event) => {
      // Convert mouse coordinates to normalized device coordinates (-1 to +1)
      const rect = gl.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );

      // Raycast from camera
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // Intersect with all objects in the scene
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        console.log("Clicked position:", intersects[0].point);
      } else {
        console.log("Clicked in empty space");
      }
    };

    gl.domElement.addEventListener("click", handleClick);
    return () => gl.domElement.removeEventListener("click", handleClick);
  }, [camera, gl, scene]);

  return null;
}

function CameraController({ targetPosition, targetRotation }) {
  const { camera } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    if (!targetPosition || !controlsRef.current) return;

    // Animate position
    gsap.to(camera.position, {
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
      duration: 2,
      onUpdate: () => controlsRef.current?.update(),
    });

    // Animate rotation
    gsap.to(controlsRef.current.target, {
      x: targetRotation[0],
      y: targetRotation[1],
      z: targetRotation[2],
      duration: 2,
      onUpdate: () => controlsRef.current.update(),
    });
  }, [targetPosition, targetRotation, camera]);

  return <OrbitControls ref={controlsRef} makeDefault />;
}

export default function Bedroom() {
  const { cameraPosition, cameraRotation, activeScene} = useContext(SceneContext);
  const { introFinished } = useContext(IntroContext);

  
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh", 
        position: "fixed",
        margin: "0", 
        top: "0", 
        left: "0"
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 5] }}
        gl={{ antialias: true }}
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: introFinished ? 'auto' : 'none',
          visibility: introFinished ? 'visible' : 'hidden',
        }}
        shadows
      >
        {/* Log camera transforms */}
        
        <CameraController targetPosition={cameraPosition} targetRotation={cameraRotation}/>
        <ambientLight intensity={1.5} />
        <directionalLight
          color="rgba(255, 255, 255, 1)"
          position={[0, 1000, 0]}
          intensity={0.5}
          castShadow
        />

        <Suspense fallback={<Loader/>}>
          {/* Select model by activeScene */}
          <Model
            modelPath={
              activeScene === "about"
                ? "/Personal-Portfolio/models/compressed.glb"
                : activeScene === "site"
                ? "/Personal-Portfolio/models/compressed.glb"
                : activeScene === "projects"
                ? "/Personal-Portfolio/models/compressed.glb"
                : "/Personal-Portfolio/models/compressed.glb"
            }
          />
        </Suspense>

        {import.meta.env.MODE === 'development' && <ClickLogger />}

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.3}
            luminanceSmoothing={0.5}
            intensity={1.2}
            radius={0.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
