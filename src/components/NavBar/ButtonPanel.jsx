// components/UI/ButtonPanel.jsx
import { useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext.jsx";
import CustomButton from "./Button.jsx";
import "./ButtonPanel.css";

export default function ButtonPanel() {
  const { setCameraPosition, setCameraTarget, setActiveScene } = useContext(SceneContext);

  return (
    <div className="button-panel">
      <CustomButton>About Me</CustomButton>
      <CustomButton>About this Website</CustomButton>
      <CustomButton>Projects</CustomButton>
    </div>
  );
}
