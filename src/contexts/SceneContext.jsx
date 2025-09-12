// contexts/SceneContext.jsx
import { createContext, useState } from "react";

export const SceneContext = createContext();

export const SceneProvider = ({ children }) => {
  const [cameraPosition, setCameraPosition] = useState([0, 5, 10]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [activeScene, setActiveScene] = useState("default");

  return (
    <SceneContext.Provider value={{
      cameraPosition,
      setCameraPosition,
      cameraRotation,
      setCameraRotation,
      activeScene,
      setActiveScene
    }}>
      {children}
    </SceneContext.Provider>
  );
};
