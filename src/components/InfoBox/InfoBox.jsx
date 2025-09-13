// components/UI/InfoBox.jsx
import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/InfoBoxContext";
import { SceneContext } from "../../contexts/SceneContext";
import TypedText from "../Animations/TypedText";
import TabButton from "./TabButton";
import "./InfoBox.css";

export default function InfoBox() {
  const { content, visible, tabs, tabContents, hideInfoBox, showInfoBox, tabCameraRotations, tabCameraPositions} = useContext(InfoBoxContext);
  const {setCameraPosition, setCameraRotation} = useContext(SceneContext);

  if (!visible) return null; // don’t render if hidden

  return (
    <div>
        <div className = "infoBoxBackground">
             <button className="closeButton" onClick={() => {
              hideInfoBox();
            }}>X</button>
        <div className="infoBoxBar">
            {tabs.map((tab, index) => (
                <TabButton key={index} onClick={() => {
                    showInfoBox(tabContents[index]);
                    setCameraPosition(tabCameraPositions[index]);
                    setCameraRotation(tabCameraRotations[index]);
                }}>
                    {tab}
                </TabButton>
            ))}
        </div>
        <div className="infoContent">
                {content}    
        </div>
        </div>
        
    </div>
  );
}
