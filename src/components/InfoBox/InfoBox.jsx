// components/UI/InfoBox.jsx
import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/InfoBoxContext";
import TypedText from "../Animations/TypedText";
import TabButton from "./TabButton";
import "./InfoBox.css";

export default function InfoBox() {
  const { content, visible, hideInfoBox } = useContext(InfoBoxContext);

  if (!visible) return null; // don’t render if hidden

  return (
    <div>
        <div className = "infoBoxBackground">
             <button className="closeButton" onClick={() => {
              hideInfoBox();
            }}>X</button>
        <div className="infoBoxBar">
            <TabButton>
                Design
            </TabButton>
            <TabButton>
                Future
            </TabButton>
        </div>
        <div className="infoContent">
            <TypedText  speed={10} delay={300}>
                {content}
            </TypedText>
                
            
        </div>
        </div>
        
    </div>
  );
}
