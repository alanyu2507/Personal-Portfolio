// components/UI/ButtonPanel.jsx
import { useContext } from "react";
import { SceneContext } from "../contexts/SceneContext";
import CustomButton from "./Button.jsx";
import "./ButtonPanel.css";

export default function ButtonPanel() {
  const { setCameraPosition, setCameraTarget, setActiveScene } = useContext(SceneContext);

  return (
    <div className="button-panel">
      <CustomButton></CustomButton>
    </div>
  );
}
