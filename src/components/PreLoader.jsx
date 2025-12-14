// components/Preloader.jsx
import { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export default function Preloader({ children }) {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  async function loadEverything() {
    // Wait for fonts to load
    await document.fonts.ready;

    // Preload all GLB scenes
    const base = import.meta.env.BASE_URL || "/";
    const modelPaths = [
      `${base}models/bedroom-v1.glb`,      // about
      `${base}models/Bedroomvs2.glb`,      // site
      `${base}models/compressed.glb`,      // projects
    ];

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(`${base}draco/`);
    loader.setDRACOLoader(dracoLoader);

    let loaded = 0;
    const updateProgress = () => {
      loaded += 1;
      setProgress(Math.round((loaded / modelPaths.length) * 100));
    };

    await Promise.all(
      modelPaths.map(
        (path) =>
          new Promise((resolve, reject) => {
            loader.load(
              path,
              () => {
                updateProgress();
                resolve();
              },
              undefined,
              (err) => reject(err)
            );
          })
      )
    ).catch((e) => {
      // Fail-soft: still continue to render app if some asset fails
      console.error("Model preload error:", e);
    });

    setReady(true);
  }

  loadEverything();
}, []);

  if (!ready) {
    return (
      <div className="loading-screen">
        Loading... {progress}%
      </div>
    );
  }

  return children; // Render app only when DOM + fonts are ready
}
