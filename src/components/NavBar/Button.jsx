// components/UI/ButtonPanel.jsx
import { useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import "./Button.css";

export default function CustomButton({ children, onClick }) {
  const { setCameraPosition, setCameraTarget, setActiveScene } = useContext(SceneContext);

  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
}

