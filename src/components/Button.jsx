// components/UI/ButtonPanel.jsx
import { useContext } from "react";
import { SceneContext } from "../contexts/SceneContext";
import "./Button.css";

export default function CustomButton() {
  const { setCameraPosition, setCameraTarget, setActiveScene } = useContext(SceneContext);

  return (
      <button className = "custom-button">Scene 1</button>
  );
}
