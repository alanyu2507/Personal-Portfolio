// components/UI/ButtonPanel.jsx
import { useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import "./Button.css";

export default function CustomButton({ children, onClick, onMouseEnter, onMouseLeave }) {
  const { setCameraPosition, setCameraTarget, setActiveScene } = useContext(SceneContext);

  return (
    <button 
      className="custom-button" 
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}

